import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/server"
import { SITE_FACTS } from "@/lib/site-config"

export const revalidate = 300

export async function GET() {
  try {
    const supabase = createAdminClient()
    const [{ count: tests }, { count: questions }, { count: students }] = await Promise.all([
      supabase.from("tests").select("id", { count: "exact", head: true }).eq("is_active", true),
      supabase.from("questions").select("id", { count: "exact", head: true }),
      supabase.from("users").select("id", { count: "exact", head: true }),
    ])

    return NextResponse.json({
      students: students ?? 0,
      tests: tests ?? 0,
      questions: questions ?? 0,
      source: "database",
    }, { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } })
  } catch {
    return NextResponse.json({ ...SITE_FACTS, source: "fallback" }, { status: 200 })
  }
}
