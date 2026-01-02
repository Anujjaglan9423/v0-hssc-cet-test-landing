"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { getCurrentUser } from "@/lib/auth"

// Get student dashboard data
export async function getStudentDashboard() {
  const supabase = await createClient()

  const user = await getCurrentUser()
  if (!user) return null

  const { data: results } = await supabase
    .from("test_results")
    .select(`
      *,
      test:tests (
        title,
        test_type,
        subject:subjects (name),
        topic:topics (name)
      )
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  const testsAttempted = results?.length || 0
  const averageScore =
    testsAttempted > 0 ? Math.round(results!.reduce((sum, r) => sum + r.score, 0) / testsAttempted) : 0
  const bestScore = testsAttempted > 0 ? Math.max(...results!.map((r) => r.score)) : 0
  const totalTime = results?.reduce((sum, r) => sum + (r.time_taken || 0), 0) || 0

  // Get performance trend (last 7 tests)
  const performanceTrend =
    results
      ?.slice(0, 7)
      .reverse()
      .map((r, i) => ({
        test: `Test ${i + 1}`,
        score: r.score,
      })) || []

  // Get subject-wise performance
  const subjectScores: Record<string, { total: number; count: number }> = {}
  results?.forEach((r) => {
    const subjectName = (r.test as any)?.subject?.name || "General"
    if (!subjectScores[subjectName]) {
      subjectScores[subjectName] = { total: 0, count: 0 }
    }
    subjectScores[subjectName].total += r.score
    subjectScores[subjectName].count += 1
  })

  const subjectPerformance = Object.entries(subjectScores).map(([subject, data]) => ({
    subject,
    score: Math.round(data.total / data.count),
  }))

  return {
    user,
    stats: {
      testsAttempted,
      averageScore,
      bestScore,
      totalTime: `${Math.floor(totalTime / 3600)}h`,
    },
    recentResults: results?.slice(0, 3) || [],
    performanceTrend,
    subjectPerformance,
  }
}

// Get all available tests for students
export async function getAvailableTests() {
  const supabase = await createClient()

  const { data: tests, error } = await supabase
    .from("tests")
    .select(`
      *,
      exam:exams (id, name),
      subject:subjects (id, name),
      topic:topics (id, name),
      questions (id),
      test_attempts (id),
      test_results (score)
    `)
    .eq("is_active", true)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching tests:", error)
    return []
  }

  return (
    tests?.map((test) => ({
      ...test,
      questions_count: test.questions?.length || 0,
      attempts_count: test.test_attempts?.length || 0,
      avg_score:
        test.test_results?.length > 0
          ? Math.round(test.test_results.reduce((sum: number, r: any) => sum + r.score, 0) / test.test_results.length)
          : 0,
    })) || []
  )
}

// Start a test attempt
export async function startTestAttempt(testId: string) {
  const supabase = await createClient()

  const user = await getCurrentUser()
  if (!user) {
    return { success: false, error: "Not authenticated" }
  }

  // Check for existing in-progress attempt
  const { data: existingAttempt } = await supabase
    .from("test_attempts")
    .select("*")
    .eq("test_id", testId)
    .eq("user_id", user.id)
    .eq("status", "in_progress")
    .single()

  if (existingAttempt) {
    return { success: true, attempt: existingAttempt }
  }

  // Create new attempt
  const { data: attempt, error } = await supabase
    .from("test_attempts")
    .insert({
      test_id: testId,
      user_id: user.id,
      status: "in_progress",
    })
    .select()
    .single()

  if (error) {
    console.error("Error starting test:", error)
    return { success: false, error: error.message }
  }

  return { success: true, attempt }
}

// Submit answer
export async function submitAnswer(attemptId: string, questionId: string, answer: string | null, timeSpent: number) {
  const supabase = await createClient()

  // Get the correct answer
  const { data: question } = await supabase.from("questions").select("correct_answer").eq("id", questionId).single()

  const isCorrect = answer ? answer.toLowerCase() === question?.correct_answer : false

  // Check if answer already exists
  const { data: existingAnswer } = await supabase
    .from("user_answers")
    .select("id")
    .eq("attempt_id", attemptId)
    .eq("question_id", questionId)
    .single()

  if (existingAnswer) {
    // Update existing answer
    const { error } = await supabase
      .from("user_answers")
      .update({
        selected_answer: answer,
        is_correct: isCorrect,
        time_spent: timeSpent,
      })
      .eq("id", existingAnswer.id)

    if (error) {
      console.error("Error updating answer:", error)
      return { success: false, error: error.message }
    }
  } else {
    // Insert new answer
    const { error } = await supabase.from("user_answers").insert({
      attempt_id: attemptId,
      question_id: questionId,
      selected_answer: answer,
      is_correct: isCorrect,
      time_spent: timeSpent,
    })

    if (error) {
      console.error("Error submitting answer:", error)
      return { success: false, error: error.message }
    }
  }

  return { success: true, isCorrect }
}

// Complete test and calculate results
export async function completeTest(attemptId: string, timeTaken: number) {
  const supabase = await createClient()

  const user = await getCurrentUser()
  if (!user) {
    return { success: false, error: "Not authenticated" }
  }

  // Get attempt details
  const { data: attempt } = await supabase
    .from("test_attempts")
    .select("*, test:tests(id)")
    .eq("id", attemptId)
    .single()

  if (!attempt) {
    return { success: false, error: "Attempt not found" }
  }

  // Get all questions for this test
  const { data: questions } = await supabase.from("questions").select("id").eq("test_id", attempt.test_id)

  const totalQuestions = questions?.length || 0

  // Get user's answers
  const { data: answers } = await supabase.from("user_answers").select("*").eq("attempt_id", attemptId)

  const correctAnswers = answers?.filter((a) => a.is_correct).length || 0
  const wrongAnswers = answers?.filter((a) => !a.is_correct && a.selected_answer).length || 0
  const unattempted = totalQuestions - (answers?.length || 0)
  const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0
  const percentage = score

  // Update attempt status
  await supabase
    .from("test_attempts")
    .update({
      status: "completed",
      completed_at: new Date().toISOString(),
      time_taken: timeTaken,
    })
    .eq("id", attemptId)

  // Create test result
  const { data: result, error } = await supabase
    .from("test_results")
    .insert({
      attempt_id: attemptId,
      user_id: user.id,
      test_id: attempt.test_id,
      total_questions: totalQuestions,
      correct_answers: correctAnswers,
      wrong_answers: wrongAnswers,
      unanswered: unattempted,
      score: score,
      percentage: percentage,
      time_taken: timeTaken,
    })
    .select()
    .single()

  if (error) {
    console.error("Error creating result:", error)
    return { success: false, error: error.message }
  }

  // Calculate rank
  const { data: allResults } = await supabase
    .from("test_results")
    .select("score")
    .eq("test_id", attempt.test_id)
    .order("score", { ascending: false })

  const rank = (allResults?.findIndex((r) => r.score <= score) || 0) + 1

  // Update with rank
  await supabase.from("test_results").update({ rank }).eq("id", result.id)

  revalidatePath("/student/results")
  return { success: true, result: { ...result, rank } }
}

// Get student's test results
export async function getStudentResults() {
  const supabase = await createClient()

  const user = await getCurrentUser()
  if (!user) return []

  const { data: results, error } = await supabase
    .from("test_results")
    .select(`
      *,
      test:tests (
        title,
        test_type,
        duration,
        subject:subjects (name),
        topic:topics (name)
      )
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching results:", error)
    return []
  }

  return results || []
}

// Get detailed result with answers
export async function getResultDetails(resultId: string) {
  const supabase = await createClient()

  const { data: result, error } = await supabase
    .from("test_results")
    .select(`
      *,
      test:tests (
        title,
        test_type,
        duration,
        questions (*)
      ),
      attempt:test_attempts (
        user_answers (
          *,
          question:questions (*)
        )
      )
    `)
    .eq("id", resultId)
    .single()

  if (error) {
    console.error("Error fetching result details:", error)
    return null
  }

  return result
}

// Get test by ID
export async function getTestById(testId: string) {
  const supabase = await createClient()

  const { data: test, error } = await supabase
    .from("tests")
    .select(`
      id,
      title,
      duration,
      questions (
        id,
        question_text,
        option_a,
        option_b,
        option_c,
        option_d,
        correct_answer,
        explanation
      )
    `)
    .eq("id", testId)
    .maybeSingle()

  if (error) {
    console.error("Error fetching test:", error)
    return null
  }

  if (!test) {
    console.error("Test not found with id:", testId)
    return null
  }

  return test
}

// Get detailed result with answers
export async function getTestResult(attemptId: string) {
  const supabase = await createClient()

  const user = await getCurrentUser()
  if (!user) return null

  // Get attempt with test info
  const { data: attempt, error: attemptError } = await supabase
    .from("test_attempts")
    .select(`
      id,
      test_id,
      time_taken,
      test:tests (
        id,
        title,
        duration
      )
    `)
    .eq("id", attemptId)
    .eq("user_id", user.id)
    .single()

  if (attemptError || !attempt) {
    console.error("Error fetching attempt:", attemptError)
    return null
  }

  // Get questions
  const { data: questions } = await supabase
    .from("questions")
    .select("*")
    .eq("test_id", attempt.test_id)
    .order("created_at", { ascending: true })

  // Get user answers
  const { data: userAnswers } = await supabase
    .from("user_answers")
    .select("question_id, selected_answer, is_correct")
    .eq("attempt_id", attemptId)

  const answerMap: Record<string, { answer: string; isCorrect: boolean }> = {}
  userAnswers?.forEach((ua) => {
    answerMap[ua.question_id] = {
      answer: ua.selected_answer,
      isCorrect: ua.is_correct,
    }
  })

  // Calculate stats
  let correct = 0
  let incorrect = 0

  const questionsWithAnswers =
    questions?.map((q) => {
      const userAnswer = answerMap[q.id]
      if (userAnswer) {
        if (userAnswer.isCorrect) correct++
        else incorrect++
      }
      return {
        ...q,
        user_answer: userAnswer?.answer || null,
      }
    }) || []

  const totalQuestions = questionsWithAnswers.length
  const unattempted = totalQuestions - correct - incorrect
  const score = correct * 4 - incorrect
  const totalMarks = totalQuestions * 4
  const percentage = totalMarks > 0 ? Math.round((Math.max(0, score) / totalMarks) * 100) : 0

  return {
    test: attempt.test,
    score: Math.max(0, score),
    total_marks: totalMarks,
    correct,
    incorrect,
    unattempted,
    total_questions: totalQuestions,
    percentage,
    time_taken: attempt.time_taken || 0,
    questions: questionsWithAnswers,
  }
}

// Submit test
export async function submitTest(testId: string, answers: Record<string, string>) {
  const supabase = await createClient()

  const user = await getCurrentUser()
  if (!user) {
    return { success: false, error: "Not authenticated" }
  }

  // Get test with questions
  const { data: test } = await supabase
    .from("tests")
    .select(`
      id,
      duration,
      questions (id, correct_answer)
    `)
    .eq("id", testId)
    .single()

  if (!test) {
    return { success: false, error: "Test not found" }
  }

  const questions = test.questions || []
  const totalQuestions = questions.length

  // Calculate scores
  let correct = 0
  let incorrect = 0

  questions.forEach((q: any) => {
    const userAnswer = answers[q.id]
    if (userAnswer) {
      if (userAnswer.toLowerCase() === q.correct_answer.toLowerCase()) {
        correct++
      } else {
        incorrect++
      }
    }
  })

  const unattempted = totalQuestions - correct - incorrect
  const score = correct * 4 - incorrect // +4 for correct, -1 for incorrect
  const totalMarks = totalQuestions * 4
  const percentage = totalMarks > 0 ? Math.round((Math.max(0, score) / totalMarks) * 100) : 0

  // Create test attempt
  const { data: attempt, error: attemptError } = await supabase
    .from("test_attempts")
    .insert({
      test_id: testId,
      user_id: user.id,
      status: "completed",
      completed_at: new Date().toISOString(),
      time_taken: test.duration * 60, // Assuming full time used
    })
    .select()
    .single()

  if (attemptError) {
    console.error("Error creating attempt:", attemptError)
    return { success: false, error: attemptError.message }
  }

  // Save user answers
  const userAnswers = Object.entries(answers).map(([questionId, answer]) => {
    const question = questions.find((q: any) => q.id === questionId)
    const isCorrect = question && answer.toLowerCase() === question.correct_answer.toLowerCase()
    return {
      attempt_id: attempt.id,
      question_id: questionId,
      selected_answer: answer,
      is_correct: isCorrect,
      time_spent: 0,
    }
  })

  if (userAnswers.length > 0) {
    await supabase.from("user_answers").insert(userAnswers)
  }

  // Create test result
  const { data: result, error: resultError } = await supabase
    .from("test_results")
    .insert({
      attempt_id: attempt.id,
      user_id: user.id,
      test_id: testId,
      total_questions: totalQuestions,
      correct_answers: correct,
      wrong_answers: incorrect,
      unanswered: unattempted,
      score: percentage,
      percentage: percentage,
      time_taken: test.duration * 60,
    })
    .select()
    .single()

  if (resultError) {
    console.error("Error creating result:", resultError)
    return { success: false, error: resultError.message }
  }

  revalidatePath("/student/results")
  return { success: true, attemptId: attempt.id }
}

// Get student analytics
export async function getStudentAnalytics() {
  const supabase = await createClient()

  const user = await getCurrentUser()
  if (!user) return null

  // Get all user results with test info
  const { data: results } = await supabase
    .from("test_results")
    .select(`
      *,
      test:tests (
        title,
        test_type,
        subject:subjects (name),
        topic:topics (name)
      )
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: true })

  const allResults = results || []
  const totalAttempts = allResults.length

  if (totalAttempts === 0) {
    return {
      overallScore: 0,
      accuracyRate: 0,
      avgTimePerQuestion: 0,
      currentStreak: 0,
      bestStreak: 0,
      performanceTrend: [],
      subjectPerformance: [],
      topicStrengths: [],
      totalCorrect: 0,
      totalWrong: 0,
      totalAttempted: 0,
    }
  }

  // Calculate stats
  const overallScore = Math.round(allResults.reduce((sum, r) => sum + r.score, 0) / totalAttempts)
  const totalCorrect = allResults.reduce((sum, r) => sum + r.correct_answers, 0)
  const totalWrong = allResults.reduce((sum, r) => sum + r.wrong_answers, 0)
  const totalAttempted = totalCorrect + totalWrong
  const accuracyRate = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0

  const totalTime = allResults.reduce((sum, r) => sum + (r.time_taken || 0), 0)
  const totalQuestions = allResults.reduce((sum, r) => sum + r.total_questions, 0)
  const avgTimePerQuestion = totalQuestions > 0 ? Math.round(totalTime / totalQuestions) : 0

  // Calculate streak
  let currentStreak = 0
  let bestStreak = 0
  let tempStreak = 0
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const sortedResults = [...allResults].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  )

  sortedResults.forEach((r, i) => {
    const date = new Date(r.created_at)
    date.setHours(0, 0, 0, 0)

    if (i === 0) {
      const diffDays = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
      if (diffDays <= 1) {
        tempStreak = 1
        currentStreak = 1
      }
    } else {
      const prevDate = new Date(sortedResults[i - 1].created_at)
      prevDate.setHours(0, 0, 0, 0)
      const diffDays = Math.floor((prevDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

      if (diffDays === 1) {
        tempStreak++
        if (currentStreak > 0) currentStreak++
      } else if (diffDays > 1) {
        tempStreak = 1
      }
    }
    bestStreak = Math.max(bestStreak, tempStreak)
  })

  // Performance trend (last 7 tests)
  const performanceTrend = allResults.slice(-7).map((r, i) => ({
    week: `Test ${i + 1}`,
    score: r.score,
    time: Math.round((r.time_taken || 0) / r.total_questions),
  }))

  // Subject performance
  const subjectScores: Record<string, { total: number; count: number }> = {}
  allResults.forEach((r) => {
    const subjectName = (r.test as any)?.subject?.name || "General"
    if (!subjectScores[subjectName]) {
      subjectScores[subjectName] = { total: 0, count: 0 }
    }
    subjectScores[subjectName].total += r.score
    subjectScores[subjectName].count++
  })

  const subjectPerformance = Object.entries(subjectScores).map(([subject, data]) => ({
    subject,
    score: Math.round(data.total / data.count),
    tests: data.count,
  }))

  // Topic strengths
  const topicScores: Record<string, { total: number; count: number }> = {}
  allResults.forEach((r) => {
    const topicName = (r.test as any)?.topic?.name || (r.test as any)?.subject?.name || "General"
    if (!topicScores[topicName]) {
      topicScores[topicName] = { total: 0, count: 0 }
    }
    topicScores[topicName].total += r.score
    topicScores[topicName].count++
  })

  const topicStrengths = Object.entries(topicScores)
    .map(([topic, data]) => ({
      topic,
      strength: Math.round(data.total / data.count),
    }))
    .sort((a, b) => b.strength - a.strength)
    .slice(0, 6)

  return {
    overallScore,
    accuracyRate,
    avgTimePerQuestion,
    currentStreak,
    bestStreak,
    performanceTrend,
    subjectPerformance,
    topicStrengths,
    totalCorrect,
    totalWrong,
    totalAttempted,
  }
}
