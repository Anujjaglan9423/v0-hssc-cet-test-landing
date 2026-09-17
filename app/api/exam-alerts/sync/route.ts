import { NextResponse } from "next/server"
import { scrapeGovernmentNotices } from "@/lib/exam-alert-scraper"

export const maxDuration = 60

function isAuthorized(request: Request) {
  const secret = process.env.CRON_SECRET
  // Vercel Cron does not require a secret unless one is configured for the project.
  if (!secret) return true
  return request.headers.get("authorization") === `Bearer ${secret}`
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  try {
    const result = await scrapeGovernmentNotices()
    return NextResponse.json(result)
  } catch (error) {
    console.error("[v0] Exam alert sync failed:", error)
    return NextResponse.json({ error: error instanceof Error ? error.message : "Sync failed" }, { status: 500 })
  }
}

export const POST = GET
