import { NextResponse } from "next/server"
import { getPublicSiteStats } from "@/lib/public-site-stats"

export const dynamic = "force-dynamic"

export async function GET() {
  const stats = await getPublicSiteStats()
  const hasData = Object.values(stats).some((value) => typeof value === "number")
  return NextResponse.json(
    { ...stats, source: hasData ? "database" : "unavailable" },
    { status: hasData ? 200 : 503, headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } },
  )
}
