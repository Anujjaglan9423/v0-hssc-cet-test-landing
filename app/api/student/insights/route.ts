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
        id, test_id, score, percentage, total_questions, correct_answers,
        wrong_answers, unanswered, time_taken, created_at,
        test:tests (id, title, test_type, subject:subjects (name), topic:topics (name))
      `)
      .eq("user_id", user.id)
      .order("created_at", { ascending: true })

    if (error) {
      console.error("[v0] Student insights query failed:", error)
      return Response.json({ error: "Unable to load your test history." }, { status: 500 })
    }

    const attempts = (results ?? []).map((result: any) => ({
      id: result.id,
      testId: result.test_id,
      title: result.test?.title ?? "Untitled test",
      testType: result.test?.test_type ?? "full",
      subject: result.test?.subject?.name ?? "General",
      topic: result.test?.topic?.name ?? "General",
      score: Number(result.score ?? 0),
      percentage: Math.max(0, Math.min(100, Number(result.percentage ?? 0))),
      totalQuestions: Number(result.total_questions ?? 0),
      correct: Number(result.correct_answers ?? 0),
      wrong: Number(result.wrong_answers ?? 0),
      unanswered: Number(result.unanswered ?? 0),
      timeTakenSeconds: Number(result.time_taken ?? 0),
      completedAt: result.created_at,
    }))

    if (attempts.length === 0) {
      return Response.json(emptyReport, { headers: { "Cache-Control": "no-store" } })
    }

    const prompt = `You are an encouraging academic performance coach for a student preparing for HSSC CET exams. Analyze the completed test data below. Do not invent facts, do not mention answer keys, and keep advice practical. Return ONLY valid JSON matching this exact shape:
{
  "overallSummary": "2-3 sentence summary",
  "readinessScore": 0,
  "trend": "improving|steady|needs attention",
  "strengths": ["specific strength"],
  "focusAreas": ["specific area to improve"],
  "studyPlan": [{"title":"short step","action":"specific action","duration":"e.g. 30 min"}],
  "testInsights": [{"testId":"exact id","diagnosis":"what the result suggests","recommendation":"next action","priority":"high|medium|low"}]
}
Readiness score is a cautious 0-100 estimate based only on the scores, consistency, and volume. Include exactly one testInsights item for every attempt and preserve each exact testId.

Completed test data:
${JSON.stringify(attempts)}`

    const generated = await generateText({
      model: "openai/gpt-4o-mini",
      prompt,
      temperature: 0.35,
      maxOutputTokens: 1800,
    })

    const parsed = insightSchema.parse(JSON.parse(cleanJson(generated.text)))
    const byId = new Map(parsed.testInsights.map((insight) => [insight.testId, insight]))
    const fallback = (attempt: (typeof attempts)[number]) => ({
      testId: attempt.testId,
      diagnosis: `You scored ${Math.round(attempt.percentage)}% on this attempt.`,
      recommendation: "Review missed questions and retry this test after focused practice.",
      priority: attempt.percentage < 60 ? "high" as const : attempt.percentage < 80 ? "medium" as const : "low" as const,
    })

    const report = {
      ...parsed,
      testInsights: attempts.map((attempt) => byId.get(attempt.testId) ?? fallback(attempt)),
      attempts,
    }

    return Response.json(report, { headers: { "Cache-Control": "no-store" } })
  } catch (error) {
    console.error("[v0] Student insights generation failed:", error)
    return Response.json({ error: "Your report could not be generated right now. Please try again." }, { status: 503 })
  }
}
