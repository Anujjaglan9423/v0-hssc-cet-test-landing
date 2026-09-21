import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { notifyDailyPractice } from "@/lib/push-notifications"

export const maxDuration = 60

async function isAuthorized(request: Request) {
  const secret = process.env.CRON_SECRET
  if (secret && request.headers.get("authorization") === `Bearer ${secret}`) return true
  return (await getCurrentUser())?.role === "admin"
}

export async function GET(request: Request) {
  if (!(await isAuthorized(request))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    const notification = await notifyDailyPractice()
    return NextResponse.json({ notification })
  } catch (error) {
    console.error("[v0] Daily notification failed:", error)
    return NextResponse.json({ error: "Daily notification failed" }, { status: 500 })
  }
}

export const POST = GET
