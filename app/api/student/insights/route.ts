import { generateText } from "ai"
import { z } from "zod"
import { getCurrentUser } from "@/lib/auth"
import { createClient } from "@/lib/supabase/server"

export const dynamic = "force-dynamic"

type Priority = "high" | "medium" | "low"

type QuestionInsight = {
  questionNumber: number
  questionId: string
  topic: string
  selectedAnswer: string | null
  correctAnswer: string
  status: "correct" | "incorrect" | "unanswered"
  timeSpentSeconds: number
  explanation: string
  coaching: string
}

type TestReport = {
  testId: string
  resultId: string
  title: string
  subject: string
  topic: string
  completedAt: string
  percentage: number
  accuracy: number
  score: number
  totalQuestions: number
  correct: number
  wrong: number
  unanswered: number
  timeTakenSeconds: number
  averageTimePerQuestion: number
  paceLabel: "fast" | "balanced" | "slow" | "not enough data"
  negativeMarking: boolean
  scoreImpact: string
  topicBreakdown: { topic: string; total: number; correct: number; wrong: number; unanswered: number; accuracy: number; priority: Priority }[]
  mistakePatterns: string[]
  strengths: string[]
  recommendations: string[]
  questions: QuestionInsight[]
}

const insightSchema = z.object({
  overallSummary: z.string(),
  readinessScore: z.number().min(0).max(100),
  trend: z.enum(["improving", "steady", "needs attention"]),
  strengths: z.array(z.string()),
  focusAreas: z.array(z.string()),
  studyPlan: z.array(z.object({ title: z.string(), action: z.string(), duration: z.string() })),
  testInsights: z.array(z.object({ testId: z.string(), diagnosis: z.string(), recommendation: z.string(), priority: z.enum(["high", "medium", "low"]) })),
})

const emptyReport = {
  overallSummary: "Complete your first test to unlock a detailed AI study report.",
  readinessScore: 0,
  trend: "steady" as const,
  strengths: [],
  focusAreas: [],
  studyPlan: [],
  testInsights: [],
  attempts: [],
}

function firstRelation(value: unknown): any {
  return Array.isArray(value) ? value[0] ?? null : value ?? null
}

function cleanJson(text: string) {
  return text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "")
}

function priorityFor(accuracy: number): Priority {
  return accuracy < 60 ? "high" : accuracy < 80 ? "medium" : "low"
}

function createTestReport(result: any): TestReport {
  const test = firstRelation(result.test)
  const attempt = firstRelation(result.attempt)
  const answerRows = Array.isArray(attempt?.user_answers) ? attempt.user_answers : []
  const questions = answerRows
    .map((row: any, index: number): QuestionInsight => {
      const question = firstRelation(row.question) ?? row.question ?? {}
      const selected = row.selected_answer ?? null
      const correct = question.correct_answer ?? ""
      const status: QuestionInsight["status"] = !selected ? "unanswered" : row.is_correct === true || selected === correct ? "correct" : "incorrect"
      const questionNumber = Number(question.question_number ?? index + 1)
      return {
        questionNumber,
        questionId: String(row.question_id ?? question.id ?? questionNumber),
        topic: question.topic?.name ?? question.topic ?? test?.topic?.name ?? test?.topic ?? "General",
        selectedAnswer: selected,
        correctAnswer: correct,
        status,
        timeSpentSeconds: Number(row.time_spent ?? 0),
        explanation: question.explanation ?? "Review the question and compare your selected option with the correct answer.",
        coaching: status === "correct" ? "Keep this concept active with spaced revision." : status === "unanswered" ? "Practice recall and use a time checkpoint before moving on." : "Relearn the concept, then solve two similar questions without looking at the answer.",
      }
    })
    .sort((a: QuestionInsight, b: QuestionInsight) => a.questionNumber - b.questionNumber)

  const totalQuestions = Number(result.total_questions ?? questions.length)
  const correct = Number(result.correct_answers ?? questions.filter((q: QuestionInsight) => q.status === "correct").length)
  const wrong = Number(result.wrong_answers ?? questions.filter((q: QuestionInsight) => q.status === "incorrect").length)
  const unanswered = Number(result.unattempted ?? result.unanswered ?? Math.max(0, totalQuestions - correct - wrong))
  const score = Number(result.score ?? correct)
  const percentage = Math.max(0, Math.min(100, Number(result.percentage ?? (totalQuestions ? (correct / totalQuestions) * 100 : score))))
  const timeTakenSeconds = Number(result.time_taken ?? attempt?.time_taken ?? 0)
  const averageTimePerQuestion = totalQuestions ? Math.round(timeTakenSeconds / totalQuestions) : 0
  const topicMap = new Map<string, { total: number; correct: number; wrong: number; unanswered: number }>()
  questions.forEach((question: QuestionInsight) => {
    const current = topicMap.get(question.topic) ?? { total: 0, correct: 0, wrong: 0, unanswered: 0 }
    current.total += 1
    if (question.status === "correct") current.correct += 1
    else if (question.status === "incorrect") current.wrong += 1
    else current.unanswered += 1
    topicMap.set(question.topic, current)
  })
  if (!topicMap.size) topicMap.set(test?.topic?.name ?? test?.topic ?? "General", { total: totalQuestions, correct, wrong, unanswered })
  const topicBreakdown = [...topicMap.entries()].map(([topic, values]) => {
    const accuracy = values.total ? Math.round((values.correct / values.total) * 100) : 0
    return { topic, ...values, accuracy, priority: priorityFor(accuracy) }
  })
  const incorrectTopics = topicBreakdown.filter((topic) => topic.priority !== "low").map((topic) => `${topic.topic}: ${topic.accuracy}% accuracy (${topic.wrong} wrong, ${topic.unanswered} unanswered).`)
  const mistakePatterns = [
    wrong ? `${wrong} incorrect answers indicate concepts to relearn before the next attempt.` : "No incorrect answers recorded in this attempt.",
    unanswered ? `${unanswered} unanswered questions may indicate recall gaps or time pressure.` : "You attempted every question.",
    averageTimePerQuestion > 90 ? "Your average time per question is high; practise timed elimination and move-on checkpoints." : averageTimePerQuestion > 0 ? "Your pace is usable; review whether the slowest questions were from one topic." : "Question timing was not recorded for this attempt.",
  ]
  return {
    testId: String(result.test_id), resultId: String(result.id), title: test?.title ?? "Untitled test", subject: test?.subject?.name ?? test?.subject ?? "General", topic: test?.topic?.name ?? test?.topic ?? "General", completedAt: result.created_at ?? new Date().toISOString(),     percentage, accuracy: Math.round(percentage), score, totalQuestions, correct, wrong, unanswered, timeTakenSeconds, averageTimePerQuestion, paceLabel: !averageTimePerQuestion ? "not enough data" : averageTimePerQuestion > 90 ? "slow" : averageTimePerQuestion < 35 ? "fast" : "balanced", negativeMarking: Boolean(test?.has_negative_marking), scoreImpact: Boolean(test?.has_negative_marking) ? "Wrong answers may have reduced your score because negative marking is enabled." : "No negative-marking penalty was applied to this test.", topicBreakdown, mistakePatterns, strengths: topicBreakdown.filter((topic) => topic.priority === "low").map((topic) => `${topic.topic} is a relative strength at ${topic.accuracy}% accuracy.`), recommendations: [incorrectTopics[0] ? `Start with ${incorrectTopics[0]}` : "Revisit the most difficult questions even when your score is high.", unanswered ? "Use a final-review checkpoint to attempt questions left blank." : "Maintain full attempts while protecting accuracy.", "After revision, take a timed practice set from the weakest topic."], questions,
  }
}

function localReport(attempts: TestReport[]) {
  const average = attempts.length ? attempts.reduce((sum, attempt) => sum + attempt.percentage, 0) / attempts.length : 0
  const recent = attempts.slice(-3)
  const recentAverage = recent.length ? recent.reduce((sum, attempt) => sum + attempt.percentage, 0) / recent.length : average
  const previous = attempts.slice(0, -3)
  const previousAverage = previous.length ? previous.reduce((sum, attempt) => sum + attempt.percentage, 0) / previous.length : average
  const trend = recentAverage > previousAverage + 4 ? "improving" as const : recentAverage < previousAverage - 4 ? "needs attention" as const : "steady" as const
  const weakest = [...attempts].sort((a, b) => a.percentage - b.percentage)[0]
  return {
    overallSummary: `Your detailed report covers ${attempts.length} completed ${attempts.length === 1 ? "test" : "tests"}. Average performance is ${Math.round(average)}%, with topic-level weaknesses and question patterns shown below.`,
    readinessScore: Math.round(average), trend,
    strengths: attempts.flatMap((attempt) => attempt.strengths).slice(0, 5),
    focusAreas: attempts.flatMap((attempt) => attempt.topicBreakdown.filter((topic) => topic.priority !== "low").map((topic) => `${attempt.title}: improve ${topic.topic} (${topic.accuracy}% accuracy).`)).slice(0, 5),
    studyPlan: [{ title: "Repair the weakest topic", action: `Start with ${weakest?.topic || "the lowest-scoring topic"}, review explanations, and solve a focused practice set.`, duration: "45 min" }, { title: "Review mistake patterns", action: "Classify each wrong answer as concept gap, careless error, or time pressure.", duration: "30 min" }, { title: "Retest under pressure", action: "Take a timed mixed test and compare topic accuracy and pace.", duration: "60 min" }],
    testInsights: attempts.map((attempt) => ({ testId: attempt.testId, diagnosis: `${attempt.title}: ${Math.round(attempt.percentage)}% overall; ${attempt.topicBreakdown.filter((topic) => topic.priority === "high").length} high-priority topic(s) identified.`, recommendation: attempt.recommendations[0], priority: attempt.percentage < 60 ? "high" as const : attempt.percentage < 80 ? "medium" as const : "low" as const })),
  }
}

export async function GET() {
  const user = await getCurrentUser()
  if (!user || user.role !== "student") return Response.json({ error: "Unauthorized" }, { status: 401 })
  try {
    const supabase = await createClient()
    const { data: results, error } = await supabase.from("test_results").select(`*, test:tests (id, title, test_type, has_negative_marking, negative_marking_percent, subject:subjects (name), topic:topics (name)), attempt:test_attempts (id, time_taken, user_answers (question_id, selected_answer, is_correct, time_spent, question:questions (id, question_text, correct_answer, explanation)))`).eq("user_id", user.id).order("created_at", { ascending: true })
    if (error) { console.error("[v0] Detailed insights query failed:", error); return Response.json({ error: "Unable to load your detailed test history." }, { status: 500 }) }
    const attempts = (results ?? []).map(createTestReport)
    if (!attempts.length) return Response.json(emptyReport, { headers: { "Cache-Control": "no-store" } })
    const baseReport = localReport(attempts)
    let report = baseReport
    try {
      const generated = await generateText({ model: "openai/gpt-4o-mini", prompt: `Improve this student's study summary using the detailed reports. Return only valid JSON with keys overallSummary, readinessScore, trend, strengths, focusAreas, studyPlan, testInsights. Do not remove detail from the reports: ${JSON.stringify(attempts)}`, temperature: 0.3, maxOutputTokens: 1800 })
      const parsed = insightSchema.parse(JSON.parse(cleanJson(generated.text)))
      const byId = new Map(parsed.testInsights.map((insight) => [insight.testId, insight]))
      report = { ...baseReport, ...parsed, testInsights: attempts.map((attempt) => byId.get(attempt.testId) ?? baseReport.testInsights.find((item) => item.testId === attempt.testId)!) }
    } catch (error) { console.warn("[v0] AI summary unavailable; detailed local report returned:", error instanceof Error ? error.message : "unknown error") }
    return Response.json({ ...report, attempts }, { headers: { "Cache-Control": "no-store" } })
  } catch (error) { console.error("[v0] Detailed insights generation failed:", error); return Response.json({ error: "Your report could not be generated right now. Please try again." }, { status: 503 }) }
}
