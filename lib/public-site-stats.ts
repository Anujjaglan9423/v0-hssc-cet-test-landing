import "server-only"
import { createAdminClient } from "@/lib/supabase/server"

export type PublicSiteStats = { students: number | null; tests: number | null; questions: number | null }

/** Only publish counts confirmed by the database. Never fall back to marketing estimates. */
export async function getPublicSiteStats(): Promise<PublicSiteStats> {
  const empty: PublicSiteStats = { students: null, tests: null, questions: null }
  try {
    const db = createAdminClient()
    const [tests, questions, students] = await Promise.all([
      db.from("tests").select("id", { count: "exact", head: true }).eq("is_active", true),
      db.from("questions").select("id", { count: "exact", head: true }),
      db.from("users").select("id", { count: "exact", head: true }),
    ])
    return {
      tests: tests.error ? null : tests.count,
      questions: questions.error ? null : questions.count,
      students: students.error ? null : students.count,
    }
  } catch {
    return empty
  }
}
