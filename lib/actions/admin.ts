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

// Get exams, subjects, and topics for dropdowns
export async function getExamsSubjectsTopics() {
  const supabase = await createClient()

  const [{ data: exams }, { data: subjects }, { data: topics }] = await Promise.all([
    supabase.from("exams").select("*").order("name"),
    supabase.from("subjects").select("*, exam:exams(name)").order("name"),
    supabase.from("topics").select("*, subject:subjects(name)").order("name"),
  ])

  return {
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
export async function createExam(name: string, description?: string) {
  const supabase = await createClient()

  const { data, error } = await supabase.from("exams").insert({ name, description }).select().single()

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath("/admin/tests")
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
