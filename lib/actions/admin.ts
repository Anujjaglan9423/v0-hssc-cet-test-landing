"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { getCurrentUser } from "@/lib/auth"

// Get admin dashboard stats
export async function getAdminStats() {
  const supabase = await createClient()

  const [{ count: totalStudents }, { count: totalTests }, { count: totalAttempts }, { data: recentStudents }] =
    await Promise.all([
      supabase.from("users").select("*", { count: "exact", head: true }).eq("role", "student"),
      supabase.from("tests").select("*", { count: "exact", head: true }),
      supabase.from("test_attempts").select("*", { count: "exact", head: true }),
      supabase.from("users").select("*").eq("role", "student").order("created_at", { ascending: false }).limit(5),
    ])

  // Get monthly signups
  const sixMonthsAgo = new Date()
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

  const { data: signups } = await supabase
    .from("users")
    .select("created_at")
    .eq("role", "student")
    .gte("created_at", sixMonthsAgo.toISOString())

  // Group signups by month
  const monthlySignups =
    signups?.reduce((acc: Record<string, number>, item) => {
      const month = new Date(item.created_at).toLocaleString("default", { month: "short" })
      acc[month] = (acc[month] || 0) + 1
      return acc
    }, {}) || {}

  return {
    totalStudents: totalStudents || 0,
    activeStudents: Math.floor((totalStudents || 0) * 0.7),
    totalTests: totalTests || 0,
    totalAttempts: totalAttempts || 0,
    recentStudents: recentStudents || [],
    monthlySignups: Object.entries(monthlySignups).map(([month, count]) => ({ month, count })),
  }
}

// Get all students with stats
export async function getAllStudents() {
  const supabase = await createClient()

  const { data: students, error } = await supabase
    .from("users")
    .select(`
      *,
      test_results (
        score,
        total_questions,
        time_taken,
        created_at
      )
    `)
    .eq("role", "student")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching students:", error)
    return []
  }

  return (
    students?.map((student) => {
      const results = student.test_results || []
      const testsAttempted = results.length
      const averageScore =
        testsAttempted > 0
          ? Math.round(
              results.reduce((sum: number, r: any) => sum + ((r.score || 0) / (r.total_questions || 1)) * 100, 0) /
                testsAttempted,
            )
          : 0
      const totalTime = results.reduce((sum: number, r: any) => sum + (r.time_taken || 0), 0)
      const lastActive =
        results.length > 0
          ? results.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0]
              .created_at
          : student.created_at

      return {
        ...student,
        name: student.full_name,
        testsAttempted,
        averageScore,
        totalTime: `${Math.floor(totalTime / 3600)}h ${Math.floor((totalTime % 3600) / 60)}m`,
        lastActive: formatTimeAgo(lastActive),
        progress: Math.min(100, testsAttempted * 5),
      }
    }) || []
  )
}

// Get student details with full stats
export async function getStudentDetails(studentId: string) {
  const supabase = await createClient()

  const { data: student, error } = await supabase
    .from("users")
    .select(`
      *,
      test_results (
        *,
        test:tests (
          title,
          test_type,
          subject:subjects (name),
          topic:topics (name)
        )
      )
    `)
    .eq("id", studentId)
    .single()

  if (error) {
    console.error("Error fetching student:", error)
    return null
  }

  return student
}

// Get all tests with stats
export async function getAllTests() {
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
      test_results (score, total_questions)
    `)
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
          ? Math.round(
              test.test_results.reduce(
                (sum: number, r: any) => sum + ((r.score || 0) / (r.total_questions || 1)) * 100,
                0,
              ) / test.test_results.length,
            )
          : 0,
    })) || []
  )
}

// Get exams, subjects, topics, and categories for dropdowns
export async function getExamsSubjectsTopics() {
  const supabase = await createClient()

  const [{ data: categories }, { data: exams }, { data: subjects }, { data: topics }] = await Promise.all([
    supabase.from("exam_categories").select("*").order("display_order"),
    supabase.from("exams").select("*, category:exam_categories(id, name)").order("name"),
    supabase.from("subjects").select("*, exam:exams(name)").order("name"),
    supabase.from("topics").select("*, subject:subjects(name)").order("name"),
  ])

  return {
    categories: categories || [],
    exams: exams || [],
    subjects: subjects || [],
    topics: topics || [],
  }
}

// Create a new test with questions
export async function createTest(testData: {
  title: string
  description?: string
  test_type: "full" | "subject" | "topic"
  exam_id?: string
  subject_id?: string
  topic_id?: string
  duration: number
  difficulty: "easy" | "medium" | "hard"
  questions: Array<{
    question_text: string
    option_a: string
    option_b: string
    option_c: string
    option_d: string
    correct_answer: string
    explanation?: string
    exam_source?: string
  }>
}) {
  const supabase = await createClient()

  const user = await getCurrentUser()
  if (!user) {
    return { success: false, error: "Not authenticated" }
  }

  // Create the test
  const { data: test, error: testError } = await supabase
    .from("tests")
    .insert({
      title: testData.title,
      description: testData.description,
      test_type: testData.test_type,
      exam_id: testData.exam_id || null,
      subject_id: testData.subject_id || null,
      topic_id: testData.topic_id || null,
      duration: testData.duration,
      difficulty: testData.difficulty,
      total_questions: testData.questions.length,
      created_by: user.id,
    })
    .select()
    .single()

  if (testError) {
    console.error("Error creating test:", testError)
    return { success: false, error: testError.message }
  }

  // Create questions
  const questions = testData.questions.map((q, index) => ({
    test_id: test.id,
    question_order: index + 1,
    question_text: q.question_text,
    option_a: q.option_a,
    option_b: q.option_b,
    option_c: q.option_c,
    option_d: q.option_d,
    correct_answer: q.correct_answer.toLowerCase(),
    explanation: q.explanation || null,
    exam_source: q.exam_source || null,
  }))

  const { error: questionsError } = await supabase.from("questions").insert(questions)

  if (questionsError) {
    console.error("Error creating questions:", questionsError)
    // Rollback - delete the test
    await supabase.from("tests").delete().eq("id", test.id)
    return { success: false, error: questionsError.message }
  }

  revalidatePath("/admin/tests")
  return { success: true, test }
}

// Delete a test
export async function deleteTest(testId: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("tests").delete().eq("id", testId)

  if (error) {
    console.error("Error deleting test:", error)
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/tests")
  return { success: true }
}

// Get test with questions
export async function getTestWithQuestions(testId: string) {
  const supabase = await createClient()

  const { data: test, error } = await supabase
    .from("tests")
    .select(`
      *,
      exam:exams (id, name),
      subject:subjects (id, name),
      topic:topics (id, name),
      questions (*)
    `)
    .eq("id", testId)
    .single()

  if (error) {
    console.error("Error fetching test:", error)
    return null
  }

  return test
}

// Update a question
export async function updateQuestion(questionId: string, data: Record<string, any>) {
  const supabase = await createClient()

  const { error } = await supabase.from("questions").update(data).eq("id", questionId)

  if (error) {
    console.error("Error updating question:", error)
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/tests")
  return { success: true }
}

// Delete a question
export async function deleteQuestion(questionId: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("questions").delete().eq("id", questionId)

  if (error) {
    console.error("Error deleting question:", error)
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/tests")
  return { success: true }
}

// Create exam/subject/topic
export async function createExam(name: string, categoryId?: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("exams")
    .insert({ name, category_id: categoryId || null })
    .select()
    .single()

  if (error) {
    console.error("Error creating exam:", error)
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/tests")
  revalidatePath("/admin/manage")
  return { success: true, data }
}

export async function createSubject(name: string, examId: string) {
  const supabase = await createClient()

  const { data, error } = await supabase.from("subjects").insert({ name, exam_id: examId }).select().single()

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/tests")
  return { success: true, data }
}

export async function createTopic(name: string, subjectId: string) {
  const supabase = await createClient()

  const { data, error } = await supabase.from("topics").insert({ name, subject_id: subjectId }).select().single()

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/tests")
  return { success: true, data }
}

// Helper function
function formatTimeAgo(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 60) return `${diffMins} minutes ago`
  if (diffHours < 24) return `${diffHours} hours ago`
  if (diffDays < 7) return `${diffDays} days ago`
  return date.toLocaleDateString()
}

export async function getAdminAnalytics() {
  const supabase = await createClient()

  // Get all test results
  const { data: allResults } = await supabase
    .from("test_results")
    .select(`
      score,
      total_questions,
      created_at,
      test:tests (
        test_type,
        subject:subjects (name)
      )
    `)
    .order("created_at", { ascending: false })

  const results = allResults || []
  const totalAttempts = results.length

  const percentages = results.map((r) => ((r.score || 0) / (r.total_questions || 1)) * 100)
  const averageScore = totalAttempts > 0 ? Math.round(percentages.reduce((sum, p) => sum + p, 0) / totalAttempts) : 0
  const passRate = totalAttempts > 0 ? Math.round((percentages.filter((p) => p >= 60).length / totalAttempts) * 100) : 0
  const completionRate =
    totalAttempts > 0
      ? Math.round((results.filter((r) => (r.total_questions || 0) > 0).length / totalAttempts) * 100)
      : 0

  // Weekly activity (last 7 days)
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const weeklyActivity = weekDays.map((day) => ({ day, attempts: 0, users: 0 }))

  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

  results
    .filter((r) => new Date(r.created_at) >= sevenDaysAgo)
    .forEach((r) => {
      const dayIndex = new Date(r.created_at).getDay()
      weeklyActivity[dayIndex].attempts++
    })

  // Score distribution - use percentage values
  const scoreRanges = [
    { range: "0-20%", min: 0, max: 20, count: 0 },
    { range: "21-40%", min: 21, max: 40, count: 0 },
    { range: "41-60%", min: 41, max: 60, count: 0 },
    { range: "61-80%", min: 61, max: 80, count: 0 },
    { range: "81-100%", min: 81, max: 100, count: 0 },
  ]

  percentages.forEach((p) => {
    const range = scoreRanges.find((sr) => p >= sr.min && p <= sr.max)
    if (range) range.count++
  })

  // Subject performance
  const subjectScores: Record<string, { total: number; count: number }> = {}
  results.forEach((r) => {
    const subjectName = (r.test as any)?.subject?.name || "General"
    if (!subjectScores[subjectName]) {
      subjectScores[subjectName] = { total: 0, count: 0 }
    }
    const percentage = ((r.score || 0) / (r.total_questions || 1)) * 100
    subjectScores[subjectName].total += percentage
    subjectScores[subjectName].count++
  })

  const subjectPerformance = Object.entries(subjectScores).map(([subject, data]) => ({
    subject,
    avgScore: Math.round(data.total / data.count),
  }))

  // Monthly signups
  const { data: users } = await supabase
    .from("users")
    .select("created_at")
    .eq("role", "student")
    .order("created_at", { ascending: true })

  const monthlySignups: Record<string, number> = {}
  users?.forEach((u) => {
    const month = new Date(u.created_at).toLocaleString("default", { month: "short" })
    monthlySignups[month] = (monthlySignups[month] || 0) + 1
  })

  // Test attempts by category
  const categoryAttempts: Record<string, number> = { Full: 0, Subject: 0, Topic: 0 }
  results.forEach((r) => {
    const type = (r.test as any)?.test_type || "full"
    if (type === "full") categoryAttempts.Full++
    else if (type === "subject") categoryAttempts.Subject++
    else if (type === "topic") categoryAttempts.Topic++
  })

  return {
    averageScore,
    passRate,
    completionRate,
    totalAttempts,
    weeklyActivity,
    scoreDistribution: scoreRanges.map((r) => ({ range: r.range, count: r.count })),
    subjectPerformance,
    monthlySignups: Object.entries(monthlySignups).map(([month, count]) => ({ month, count })),
    testAttemptsByCategory: [
      { category: "Full Exams", attempts: categoryAttempts.Full },
      { category: "Subject Tests", attempts: categoryAttempts.Subject },
      { category: "Topic Tests", attempts: categoryAttempts.Topic },
    ],
  }
}

export async function createCustomMockTest(
  title: string,
  percentages: Record<string, number>,
  totalQuestions = 100,
  duration = 120,
) {
  const supabase = await createClient()
  const user = await getCurrentUser()

  if (!user) {
    return { success: false, error: "Not authenticated" }
  }

  const { data: testResults } = await supabase
    .from("tests")
    .select(`
      id,
      subject:subjects (id, name),
      questions (
        id,
        question_text,
        option_a,
        option_b,
        option_c,
        option_d,
        correct_answer,
        explanation,
        exam_source
      )
    `)
    .not("subject_id", "is", null)
    .order("created_at", { ascending: false })

  if (!testResults || testResults.length === 0) {
    return { success: false, error: "No questions available in subject tests" }
  }

  // Group questions by subject, filtering out invalid correct answers
  const questionsBySubject: Record<string, any[]> = {}
  const validAnswers = ["a", "b", "c", "d"]

  testResults.forEach((test: any) => {
    const subjectName = test.subject?.name || "General"
    if (!questionsBySubject[subjectName]) {
      questionsBySubject[subjectName] = []
    }

    test.questions?.forEach((q: any) => {
      const lowerAnswer = q.correct_answer?.toLowerCase() || ""
      if (validAnswers.includes(lowerAnswer)) {
        questionsBySubject[subjectName].push(q)
      }
    })
  })

  // Select questions according to percentages
  const selectedQuestions: any[] = []
  Object.entries(percentages).forEach(([subject, percentage]) => {
    if (percentage === 0) return

    const targetCount = Math.round((percentage / 100) * totalQuestions)
    const subjectQuestions = questionsBySubject[subject] || []

    if (subjectQuestions.length === 0) {
      console.log(`[v0] No valid questions found for ${subject}`)
      return
    }

    // Randomly shuffle and select
    const shuffled = [...subjectQuestions].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, Math.min(targetCount, shuffled.length))
    console.log(`[v0] Selected ${selected.length} questions for ${subject} (target: ${targetCount})`)
    selectedQuestions.push(...selected)
  })

  // Shuffle final questions
  const finalQuestions = selectedQuestions.sort(() => Math.random() - 0.5).slice(0, totalQuestions)

  console.log(`[v0] Total questions selected: ${finalQuestions.length} / ${totalQuestions}`)

  if (finalQuestions.length < totalQuestions) {
    return {
      success: false,
      error: `Only ${finalQuestions.length} questions available with valid answers, need ${totalQuestions}`,
    }
  }

  // Create test
  const { data: test, error: testError } = await supabase
    .from("tests")
    .insert({
      title,
      description: `Custom mock test - ${Object.entries(percentages)
        .filter(([, p]) => p > 0)
        .map(([s, p]) => `${s}: ${p}%`)
        .join(", ")}`,
      test_type: "full",
      duration,
      difficulty: "medium",
      total_questions: finalQuestions.length,
      created_by: user.id,
    })
    .select()
    .single()

  if (testError) {
    console.error("Error creating test:", testError)
    return { success: false, error: testError.message }
  }

  // Create questions in the test
  const questions = finalQuestions.map((q, index) => ({
    test_id: test.id,
    question_order: index + 1,
    question_text: q.question_text,
    option_a: q.option_a,
    option_b: q.option_b,
    option_c: q.option_c,
    option_d: q.option_d,
    correct_answer: q.correct_answer.toLowerCase(),
    explanation: q.explanation || null,
    exam_source: q.exam_source || null,
  }))

  const { error: questionsError } = await supabase.from("questions").insert(questions)

  if (questionsError) {
    console.error("Error creating questions:", questionsError)
    await supabase.from("tests").delete().eq("id", test.id)
    return { success: false, error: questionsError.message }
  }

  revalidatePath("/admin/tests")
  return { success: true, test, questionsCount: finalQuestions.length }
}

export async function getAllTestResults() {
  const supabase = await createClient()

  const { data: results, error } = await supabase
    .from("test_results")
    .select(`
      id,
      score,
      total_questions,
      time_taken,
      created_at,
      user:users (
        id,
        full_name,
        email
      ),
      test:tests (
        id,
        title,
        test_type,
        subject:subjects (name),
        topic:topics (name)
      )
    `)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching test results:", error)
    return []
  }

  return (
    results?.map((result) => ({
      id: result.id,
      studentName: (result.user as any)?.full_name || "Unknown",
      studentEmail: (result.user as any)?.email || "Unknown",
      studentId: (result.user as any)?.id,
      testTitle: (result.test as any)?.title || "Unknown Test",
      testType: (result.test as any)?.test_type || "full",
      subject: (result.test as any)?.subject?.name || "-",
      topic: (result.test as any)?.topic?.name || "-",
      score: result.score || 0,
      totalQuestions: result.total_questions || 0,
      percentage: result.total_questions > 0 ? Math.round(((result.score || 0) / result.total_questions) * 100) : 0,
      timeTaken: result.time_taken || 0,
      completedAt: result.created_at,
    })) || []
  )
}

// Exam categories management
export async function getExamCategories() {
  const supabase = await createClient()

  const { data, error } = await supabase.from("exam_categories").select("*").order("display_order", { ascending: true })

  if (error) {
    console.error("Error fetching exam categories:", error)
    return []
  }

  return data || []
}

export async function createExamCategory(data: {
  name: string
  description?: string
  slug: string
  image_url?: string
}) {
  const supabase = await createClient()

  const { data: result, error } = await supabase
    .from("exam_categories")
    .insert({
      name: data.name,
      description: data.description,
      slug: data.slug,
      image_url: data.image_url,
      is_active: true,
    })
    .select()
    .single()

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/manage")
  return { success: true, data: result }
}

export async function updateExamCategory(
  id: string,
  data: {
    name?: string
    description?: string
    slug?: string
    image_url?: string
  },
) {
  const supabase = await createClient()

  const { error } = await supabase.from("exam_categories").update(data).eq("id", id)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/manage")
  return { success: true }
}

export async function deleteExamCategory(id: string) {
  const supabase = await createClient()

  // First unlink any exams from this category
  await supabase.from("exams").update({ category_id: null }).eq("category_id", id)

  const { error } = await supabase.from("exam_categories").delete().eq("id", id)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/manage")
  return { success: true }
}

// Exams management
export async function getAllExams() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("exams")
    .select("*, category:exam_categories(id, name)")
    .order("name", { ascending: true })

  if (error) {
    console.error("Error fetching exams:", error)
    return []
  }

  return data || []
}

export async function updateExam(
  id: string,
  data: {
    name?: string
    description?: string
    category_id?: string | null
  },
) {
  const supabase = await createClient()

  const { error } = await supabase.from("exams").update(data).eq("id", id)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/manage")
  return { success: true }
}

export async function deleteExam(id: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("exams").delete().eq("id", id)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/manage")
  return { success: true }
}

// Subjects management
export async function getAllSubjects() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("subjects")
    .select("*, exam:exams(id, name)")
    .order("name", { ascending: true })

  if (error) {
    console.error("Error fetching subjects:", error)
    return []
  }

  return data || []
}

export async function updateSubject(
  id: string,
  data: {
    name?: string
    exam_id?: string
  },
) {
  const supabase = await createClient()

  const { error } = await supabase.from("subjects").update(data).eq("id", id)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/manage")
  return { success: true }
}

export async function deleteSubject(id: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("subjects").delete().eq("id", id)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/manage")
  return { success: true }
}

// Topics management
export async function getAllTopics() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("topics")
    .select("*, subject:subjects(id, name)")
    .order("name", { ascending: true })

  if (error) {
    console.error("Error fetching topics:", error)
    return []
  }

  return data || []
}

export async function updateTopic(
  id: string,
  data: {
    name?: string
    subject_id?: string
  },
) {
  const supabase = await createClient()

  const { error } = await supabase.from("topics").update(data).eq("id", id)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/manage")
  return { success: true }
}

export async function deleteTopic(id: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("topics").delete().eq("id", id)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/manage")
  return { success: true }
}

// Study Materials Management
export async function getStudyMaterials() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("study_materials")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching study materials:", error)
    return []
  }

  return data || []
}

export async function createStudyMaterial(formData: FormData) {
  const supabase = await createClient()
  const user = await getCurrentUser()

  if (!user || user.role !== "admin") {
    throw new Error("Unauthorized")
  }

  const type = formData.get("type") as string
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const file = formData.get("file") as File | null
  const videoUrl = formData.get("videoUrl") as string

  if (!type || !title) {
    throw new Error("Type and title are required")
  }

  let fileUrl = null

  if (file && file.size > 0) {
    const fileExt = file.name.split(".").pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = `study-materials/${fileName}`

    const { error: uploadError } = await supabase.storage.from("uploads").upload(filePath, file)

    if (uploadError) {
      console.error("Error uploading file:", uploadError)
      throw new Error("Failed to upload file")
    }

    const { data: publicUrlData } = supabase.storage.from("uploads").getPublicUrl(filePath)
    fileUrl = publicUrlData.publicUrl
  }

  const { data: result, error } = await supabase
    .from("study_materials")
    .insert({
      type,
      title,
      description,
      file_url: fileUrl,
      video_url: type === "video" ? videoUrl : null,
      is_active: true,
    })
    .select()
    .single()

  if (error) {
    console.error("Error creating study material:", error)
    throw new Error("Failed to create study material")
  }

  revalidatePath("/")
  return result
}

export async function deleteStudyMaterial(materialId: string) {
  const supabase = await createClient()
  const user = await getCurrentUser()

  if (!user || user.role !== "admin") {
    throw new Error("Unauthorized")
  }

  const { error } = await supabase.from("study_materials").delete().eq("id", materialId)

  if (error) {
    console.error("Error deleting study material:", error)
    throw new Error("Failed to delete study material")
  }

  revalidatePath("/")
  return true
}

export async function updateStudyMaterial(
  materialId: string,
  data: { title?: string; description?: string; is_active?: boolean }
) {
  const supabase = await createClient()
  const user = await getCurrentUser()

  if (!user || user.role !== "admin") {
    throw new Error("Unauthorized")
  }

  const { error } = await supabase.from("study_materials").update(data).eq("id", materialId)

  if (error) {
    console.error("Error updating study material:", error)
    throw new Error("Failed to update study material")
  }

  revalidatePath("/")
  return true
}
