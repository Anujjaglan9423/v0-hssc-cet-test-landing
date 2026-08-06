import { generateText } from "ai"
import { z } from "zod"
import { getCurrentUser } from "@/lib/auth"
import { createClient } from "@/lib/supabase/server"

export const dynamic = "force-dynamic"

const insightSchema = z.object({
  overallSummary: z.string(),
  readinessScore: z.number().min(0).max(100),
  trend: z.enum(["improving", "steady", "needs attention"]),
  strengths: z.array(z.string()).min(1).max(5),
  focusAreas: z.array(z.string()).min(1).max(5),
  studyPlan: z.array(z.object({
    title: z.string(),
    action: z.string(),
    duration: z.string(),
  })).min(1).max(5),
  testInsights: z.array(z.object({
    testId: z.string(),
    diagnosis: z.string(),
    recommendation: z.string(),
    priority: z.enum(["high", "medium", "low"]),
  })),
})

const emptyReport = {
  overallSummary: "Complete your first test to unlock a personalized AI study report.",
  readinessScore: 0,
  trend: "steady" as const,
  strengths: [],
  focusAreas: [],
  studyPlan: [],
  testInsights: [],
}

function cleanJson(text: string) {
  return text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "")
}

function firstRelation(value: unknown): any {
  return Array.isArray(value) ? value[0] ?? null : value ?? null
}

function localReport(attempts: Array<{
  testId: string
  title: string
  subject: string
  topic: string
  percentage: number
  totalQuestions: number
  correct: number
  wrong: number
  unanswered: number
  timeTakenSeconds: number
}>) {
  const average = attempts.length
    ? attempts.reduce((sum, attempt) => sum + attempt.percentage, 0) / attempts.length
    : 0
  const recent = attempts.slice(-3)
  const recentAverage = recent.length
    ? recent.reduce((sum, attempt) => sum + attempt.percentage, 0) / recent.length
    : average
  const previous = attempts.slice(0, -3)
  const previousAverage = previous.length
    ? previous.reduce((sum, attempt) => sum + attempt.percentage, 0) / previous.length
    : average
  const trend = recentAverage > previousAverage + 4
    ? "improving" as const
    : recentAverage < previousAverage - 4
      ? "needs attention" as const
      : "steady" as const
  const weakest = [...attempts].sort((a, b) => a.percentage - b.percentage)[0]
  const strongest = [...attempts].sort((a, b) => b.percentage - a.percentage)[0]

  return {
    overallSummary: `You have completed ${attempts.length} ${attempts.length === 1 ? "test" : "tests"} with an average score of ${Math.round(average)}%. Your recent performance is ${trend === "improving" ? "moving upward" : trend === "needs attention" ? "showing areas that need focused revision" : "fairly consistent"}.`,
    readinessScore: Math.round(Math.max(0, Math.min(100, average))),
    trend,
    strengths: [
      strongest ? `Your strongest recent result is ${strongest.title} at ${Math.round(strongest.percentage)}%.` : "Keep completing tests to reveal your strongest areas.",
      attempts.length > 1 ? `You have built a useful practice history across ${attempts.length} completed tests.` : "Completing another test will make your performance pattern clearer.",
    ],
    focusAreas: [
      weakest ? `Revisit ${weakest.subject !== "General" ? weakest.subject : weakest.topic} from ${weakest.title} (${Math.round(weakest.percentage)}%).` : "Complete a test to identify your first focus area.",
      "Review every incorrect and unanswered question before starting the next attempt.",
    ],
    studyPlan: [
      { title: "Review missed questions", action: "Write down why each incorrect or unanswered question was missed, then revise that concept.", duration: "30 min" },
      { title: "Practice the weakest area", action: `Complete a focused practice set for ${weakest?.subject || weakest?.topic || "your lowest-scoring subject"}.`, duration: "45 min" },
      { title: "Retake under exam conditions", action: "Take the next test without pauses and compare accuracy and time with this report.", duration: "60 min" },
    ],
    testInsights: attempts.map((attempt) => ({
      testId: attempt.testId,
      diagnosis: `You scored ${Math.round(attempt.percentage)}% with ${attempt.correct} correct, ${attempt.wrong} incorrect, and ${attempt.unanswered} unanswered.`,
      recommendation: attempt.percentage < 60
        ? "Prioritize concept revision and a short topic practice set before retaking it."
        : attempt.percentage < 80
          ? "Review the questions you missed and practice the same topic under a time limit."
          : "Maintain this level with spaced revision and timed mixed practice.",
      priority: attempt.percentage < 60 ? "high" as const : attempt.percentage < 80 ? "medium" as const : "low" as const,
    })),
  }
}

export async function GET() {
  const user = await getCurrentUser()
  if (!user || user.role !== "student") {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const supabase = await createClient()
    const { data: results, error } = await supabase
      .from("test_results")
      .select(`
        *,
        test:tests (id, title, test_type, subject:subjects (name), topic:topics (name))
      `)
      .eq("user_id", user.id)
      .order("created_at", { ascending: true })

    if (error) {
      console.error("[v0] Student insights query failed:", error)
      return Response.json({ error: "Unable to load your test history." }, { status: 500 })
    }

    const attempts = (results ?? []).map((result: any) => {
      const test = firstRelation(result.test)
      const subject = firstRelation(test?.subject)
      const topic = firstRelation(test?.topic)
      const totalQuestions = Number(result.total_questions ?? 0)
      const correct = Number(result.correct_answers ?? result.score ?? 0)
      const wrong = Number(result.wrong_answers ?? Math.max(0, totalQuestions - correct))
      const unanswered = Number(result.unanswered ?? 0)
      const percentage = Number(result.percentage ?? (totalQuestions ? (correct / totalQuestions) * 100 : 0))

      return {
        id: String(result.id),
        testId: String(result.test_id),
        title: test?.title ?? "Untitled test",
        testType: test?.test_type ?? "full",
        subject: subject?.name ?? "General",
        topic: topic?.name ?? "General",
        score: correct,
        percentage: Math.max(0, Math.min(100, percentage)),
        totalQuestions,
        correct,
        wrong,
        unanswered,
        timeTakenSeconds: Number(result.time_taken ?? 0),
        completedAt: result.created_at ?? new Date().toISOString(),
      }
    })

    if (attempts.length === 0) {
      return Response.json(emptyReport, { headers: { "Cache-Control": "no-store" } })
    }

    const baseReport = localReport(attempts)
    let report = baseReport

    // The local report is always available. AI enhancement is optional so a missing
    // gateway key, provider outage, or malformed model response never blocks the student.
    try {
      const prompt = `Analyze this HSSC CET student history and return ONLY valid JSON matching this shape: {"overallSummary":"string","readinessScore":0,"trend":"improving|steady|needs attention","strengths":["string"],"focusAreas":["string"],"studyPlan":[{"title":"string","action":"string","duration":"string"}],"testInsights":[{"testId":"exact id","diagnosis":"string","recommendation":"string","priority":"high|medium|low"}]}. Include exactly one testInsights item for every attempt. Data: ${JSON.stringify(attempts)}`
      const generated = await generateText({
        model: "openai/gpt-4o-mini",
        prompt,
        temperature: 0.35,
        maxOutputTokens: 1800,
      })
      const parsed = insightSchema.parse(JSON.parse(cleanJson(generated.text)))
      const byId = new Map(parsed.testInsights.map((insight) => [insight.testId, insight]))
      report = {
        ...baseReport,
        ...parsed,
        strengths: parsed.strengths.length ? parsed.strengths : baseReport.strengths,
        focusAreas: parsed.focusAreas.length ? parsed.focusAreas : baseReport.focusAreas,
        studyPlan: parsed.studyPlan.length ? parsed.studyPlan : baseReport.studyPlan,
        testInsights: attempts.map((attempt) => byId.get(attempt.testId) ?? baseReport.testInsights.find((item) => item.testId === attempt.testId)!),
      }
    } catch (aiError) {
      console.warn("[v0] AI enhancement unavailable; returning local report:", aiError instanceof Error ? aiError.message : "unknown error")
    }

    return Response.json({ ...report, attempts }, { headers: { "Cache-Control": "no-store" } })
  } catch (error) {
    console.error("[v0] Student insights generation failed:", error)
    return Response.json({ error: "Your report could not be generated right now. Please try again." }, { status: 503 })
  }
}
