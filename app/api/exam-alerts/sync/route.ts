import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { scrapeGovernmentNotices } from "@/lib/exam-alert-scraper"

export const maxDuration = 60

async function isAuthorized(request: Request) {
  const secret = process.env.CRON_SECRET
  if (secret && request.headers.get("authorization") === `Bearer ${secret}`) return true
  if (secret) return (await getCurrentUser())?.role === "admin"
  return (await getCurrentUser())?.role === "admin"
}

export async function GET(request: Request) {
  if (!(await isAuthorized(request))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  try {
    const result = await scrapeGovernmentNotices()
    return NextResponse.json(result)
  } catch (error) {
    console.error("[v0] Exam alert sync failed:", error)
    return NextResponse.json({ error: error instanceof Error ? error.message : "Sync failed" }, { status: 500 })
  }
}

export const POST = GET
