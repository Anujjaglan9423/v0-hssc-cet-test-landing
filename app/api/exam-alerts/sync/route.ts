import { NextResponse } from "next/server"
import { scrapeGovernmentNotices } from "@/lib/exam-alert-scraper"

export const maxDuration = 60

function isAuthorized(request: Request) {
  const secret = process.env.CRON_SECRET
  if (!secret) return process.env.NODE_ENV !== "production"
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
