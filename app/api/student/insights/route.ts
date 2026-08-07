import { generateText, gateway } from "ai"
import { z } from "zod"
import { getCurrentUser } from "@/lib/auth"
import { createClient } from "@/lib/supabase/server"

export const dynamic = "force-dynamic"
type Priority = "high" | "medium" | "low"
type QuestionInsight = { questionNumber: number; questionId: string; questionText: string; subject: string; topic: string; source: string | null; selectedAnswer: string | null; correctAnswer: string; status: "correct" | "incorrect" | "unanswered"; timeSpentSeconds: number; explanation: string; coaching: string }
type TopicInsight = { subject: string; topic: string; total: number; correct: number; wrong: number; unanswered: number; accuracy: number; priority: Priority; questionNumbers: number[]; reason: string }
type TestReport = { testId: string; resultId: string; title: string; subject: string; topic: string; completedAt: string; percentage: number; accuracy: number; score: number; totalQuestions: number; correct: number; wrong: number; unanswered: number; timeTakenSeconds: number; averageTimePerQuestion: number; paceLabel: "fast" | "balanced" | "slow" | "not enough data"; negativeMarking: boolean; scoreImpact: string; topicBreakdown: TopicInsight[]; focusTopics: TopicInsight[]; mistakePatterns: string[]; strengths: string[]; recommendations: string[]; questions: QuestionInsight[] }
const emptyReport = { overallSummary: "Complete your first test to unlock a detailed AI study report.", readinessScore: 0, trend: "steady" as const, strengths: [], focusAreas: [], studyPlan: [], testInsights: [], attempts: [] }
function first(value: any) { return Array.isArray(value) ? value[0] ?? null : value ?? null }
function priorityFor(accuracy: number): Priority { return accuracy < 60 ? "high" : accuracy < 80 ? "medium" : "low" }

function createTestReport(result: any, test: any, questionsData: any[], answerRows: any[]): TestReport {
  const byQuestion = new Map(answerRows.map((row) => [String(row.question_id), row]))
  const questions: QuestionInsight[] = questionsData.map((question: any, index: number) => {
    const row = byQuestion.get(String(question.id))
    const selected = row?.selected_answer ?? null
    const correct = String(question.correct_answer ?? "")
    const status: QuestionInsight["status"] = !selected ? "unanswered" : row?.is_correct === true || String(selected).toLowerCase() === correct.toLowerCase() ? "correct" : "incorrect"
    const number = Number(question.question_number ?? question.question_order ?? index + 1)
    const topicRecord = first(question.topic)
    const subjectRecord = first(topicRecord?.subject) ?? first(question.subject) ?? first(test?.subject)
    const subject = subjectRecord?.name ?? test?.subject?.name ?? test?.subject ?? "Subject not classified"
    const topic = topicRecord?.name ?? question.topic?.name ?? test?.topic?.name ?? test?.topic ?? "Topic not classified"
    const coaching = status === "correct"
      ? "Keep this concept active with spaced revision."
      : status === "unanswered"
        ? `Recall gap or time pressure detected in ${subject} → ${topic}. Review the concept before timed practice.`
        : `Concept/application gap detected in ${subject} → ${topic}. Study the rule behind this question, then solve two similar questions.`
    return { questionNumber: number, questionId: String(question.id), questionText: question.question_text ?? "Question text unavailable", subject, topic, source: question.exam_source ?? null, selectedAnswer: selected, correctAnswer: correct, status, timeSpentSeconds: Number(row?.time_spent ?? 0), explanation: question.explanation ?? "Compare the correct answer with the concept tested and review the related notes.", coaching }
  }).sort((a, b) => a.questionNumber - b.questionNumber)
  const totalQuestions = Number(result.total_questions ?? questions.length)
  // Question rows are the source of truth for diagnostic evidence. Aggregates can be stale when an attempt was submitted partially.
  const derivedCorrect = questions.filter((q) => q.status === "correct").length
  const derivedWrong = questions.filter((q) => q.status === "incorrect").length
  const derivedUnanswered = questions.filter((q) => q.status === "unanswered").length
  const hasQuestionEvidence = questions.length > 0
  const correct = hasQuestionEvidence ? derivedCorrect : Number(result.correct_answers ?? 0)
  const wrong = hasQuestionEvidence ? derivedWrong : Number(result.wrong_answers ?? 0)
  const unanswered = hasQuestionEvidence ? derivedUnanswered : Number(result.unanswered ?? Math.max(0, totalQuestions - correct - wrong))
  const score = Number(result.score ?? correct)
  const percentage = Math.max(0, Math.min(100, Number(result.percentage ?? (totalQuestions ? correct / totalQuestions * 100 : 0))))
  const timeTakenSeconds = Number(result.time_taken ?? 0)
  const averageTimePerQuestion = totalQuestions ? Math.round(timeTakenSeconds / totalQuestions) : 0
  const topicMap = new Map<string, { subject: string; topic: string; total: number; correct: number; wrong: number; unanswered: number; questionNumbers: number[] }>()
  questions.forEach((question) => { const key = `${question.subject}::${question.topic}`; const current = topicMap.get(key) ?? { subject: question.subject, topic: question.topic, total: 0, correct: 0, wrong: 0, unanswered: 0, questionNumbers: [] }; current.total += 1; current.questionNumbers.push(question.questionNumber); if (question.status === "correct") current.correct += 1; else if (question.status === "incorrect") current.wrong += 1; else current.unanswered += 1; topicMap.set(key, current) })
  if (!topicMap.size) topicMap.set(`General::${test?.topic?.name ?? test?.topic ?? "General"}`, { subject: test?.subject?.name ?? test?.subject ?? "General", topic: test?.topic?.name ?? test?.topic ?? "General", total: totalQuestions, correct, wrong, unanswered, questionNumbers: [] })
  const topicBreakdown = [...topicMap.values()].map((values) => { const accuracy = values.total ? Math.round(values.correct / values.total * 100) : 0; const priority = priorityFor(accuracy); const reason = values.unanswered > values.wrong ? `Unanswered questions in ${values.subject} → ${values.topic}: likely recall gaps or time pressure.` : values.wrong > 0 ? `Wrong answers in ${values.subject} → ${values.topic}: concept or application needs revision.` : `Strong area: maintain ${values.subject} → ${values.topic} with spaced practice.`; return { ...values, accuracy, priority, reason } }).sort((a, b) => a.accuracy - b.accuracy || (b.wrong + b.unanswered) - (a.wrong + a.unanswered))
  const focusTopics = topicBreakdown.filter((topic) => topic.wrong + topic.unanswered > 0).slice(0, 5)
  const mistakePatterns = [wrong ? `${wrong} wrong answers were found; revise the concepts behind those questions.` : "No wrong answers were recorded.", unanswered ? `${unanswered} unanswered questions were found; check these topics first for recall gaps or time pressure.` : "Every question was attempted.", averageTimePerQuestion > 90 ? "The average pace is slow; use timed checkpoints and move on when stuck." : averageTimePerQuestion ? "Compare slow questions with the focus topics to identify time-pressure patterns." : "Timing was not recorded for this attempt."]
  const recommendations = focusTopics.length ? focusTopics.slice(0, 3).map((topic) => `Focus on ${topic.subject} → ${topic.topic}: ${topic.wrong} wrong and ${topic.unanswered} unanswered out of ${topic.total}. Review questions ${topic.questionNumbers.join(", ") || "from this topic"}; then practice the same concept in a timed set.`) : ["Review the hardest questions and maintain this performance with spaced revision."]
  return { testId: String(result.test_id), resultId: String(result.id), title: test?.title ?? "Untitled test", subject: first(test?.subject)?.name ?? test?.subject ?? "General", topic: first(test?.topic)?.name ?? test?.topic ?? "General", completedAt: result.created_at ?? new Date().toISOString(), percentage, accuracy: Math.round(percentage), score, totalQuestions, correct, wrong, unanswered, timeTakenSeconds, averageTimePerQuestion, paceLabel: !averageTimePerQuestion ? "not enough data" : averageTimePerQuestion > 90 ? "slow" : averageTimePerQuestion < 35 ? "fast" : "balanced", negativeMarking: Boolean(test?.has_negative_marking), scoreImpact: Boolean(test?.has_negative_marking) ? "Negative marking is enabled; careless wrong answers have extra impact." : "No negative-marking penalty was applied.", topicBreakdown, focusTopics, mistakePatterns, strengths: topicBreakdown.filter((topic) => topic.priority === "low").slice(0, 3).map((topic) => `${topic.topic} is a strength at ${topic.accuracy}% accuracy.`), recommendations, questions }
}
function localReport(attempts: TestReport[]) { const average = attempts.length ? attempts.reduce((sum, a) => sum + a.percentage, 0) / attempts.length : 0; const weakest = [...attempts].sort((a, b) => a.percentage - b.percentage)[0]; return { overallSummary: `AI analytics interprets why marks were lost, not only what score was achieved. Across ${attempts.length} completed ${attempts.length === 1 ? "test" : "tests"}, average performance is ${Math.round(average)}%.`, readinessScore: Math.round(average), trend: "steady" as const, strengths: attempts.flatMap((a) => a.strengths).slice(0, 5), focusAreas: attempts.flatMap((a) => a.focusTopics.map((t) => `${a.title}: focus on ${t.topic} (${t.wrong} wrong, ${t.unanswered} unanswered).`)).slice(0, 8), studyPlan: [{ title: "Repair the weakest topic", action: `Start with ${weakest?.focusTopics[0]?.topic ?? weakest?.topic ?? "your weakest topic"}; review explanations and solve a focused set.`, duration: "45 min" }, { title: "Review wrong and blank answers", action: "Classify each miss as concept gap, careless error, or time pressure, then revise accordingly.", duration: "30 min" }, { title: "Retest under time pressure", action: "Take a timed test and compare topic accuracy, unanswered count, and pace.", duration: "60 min" }], testInsights: attempts.map((a) => ({ testId: a.testId, diagnosis: `${a.title}: ${a.correct} correct, ${a.wrong} wrong, ${a.unanswered} unanswered.`, recommendation: a.recommendations[0], priority: a.focusTopics.some((t) => t.priority === "high") ? "high" as const : a.percentage < 80 ? "medium" as const : "low" as const })) } }

export async function GET() {
  const user = await getCurrentUser()
  if (!user || user.role !== "student") return Response.json({ error: "Unauthorized" }, { status: 401 })
  try {
    const supabase = await createClient()
    const { data: results, error } = await supabase.from("test_results").select("*").eq("user_id", user.id).order("created_at", { ascending: true })
    if (error) throw error
    if (!results?.length) return Response.json(emptyReport, { headers: { "Cache-Control": "no-store" } })
    const testIds = [...new Set(results.map((r: any) => r.test_id).filter(Boolean))]
    const attemptIds = [...new Set(results.map((r: any) => r.attempt_id).filter(Boolean))]
    const [{ data: tests }, { data: attempts }, { data: answerRows }] = await Promise.all([supabase.from("tests").select("id, title, has_negative_marking, subject:subjects(name), topic:topics(name)").in("id", testIds), supabase.from("test_attempts").select("id, time_taken").in("id", attemptIds), supabase.from("user_answers").select("attempt_id, question_id, selected_answer, is_correct, time_spent").in("attempt_id", attemptIds)])
    const { data: questions } = await supabase.from("questions").select("id, test_id, question_text, correct_answer, explanation, question_order, topic:topics(name, subject:subjects(name))").in("test_id", testIds).order("question_order", { ascending: true })
    const testMap = new Map((tests ?? []).map((test: any) => [String(test.id), test]))
    const attemptMap = new Map((attempts ?? []).map((attempt: any) => [String(attempt.id), attempt]))
    const answersByAttempt = new Map<string, any[]>()
    for (const row of answerRows ?? []) { const key = String(row.attempt_id); answersByAttempt.set(key, [...(answersByAttempt.get(key) ?? []), row]) }
    const questionsByTest = new Map<string, any[]>()
    for (const question of questions ?? []) { const key = String(question.test_id); questionsByTest.set(key, [...(questionsByTest.get(key) ?? []), question]) }
    const reportAttempts = results.map((result: any) => createTestReport(result, testMap.get(String(result.test_id)), questionsByTest.get(String(result.test_id)) ?? [], answersByAttempt.get(String(result.attempt_id)) ?? []))
    const baseReport = localReport(reportAttempts)
    return Response.json({ ...baseReport, attempts: reportAttempts }, { headers: { "Cache-Control": "no-store" } })
  } catch (error) { console.error("[v0] Detailed insights generation failed:", error); return Response.json({ error: "Your report could not be generated right now. Please try again." }, { status: 503 }) }
}
