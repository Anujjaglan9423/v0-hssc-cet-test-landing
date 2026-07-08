import { NextRequest, NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { getAdminStats, getAllStudents, getAdminAnalytics } from "@/lib/actions/admin"

/**
 * POST /api/admin/batch
 * Batches multiple admin dashboard requests into a single API call
 * Reduces data transfer between Vercel CDN and Compute by combining requests
 */
export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const user = await getCurrentUser()
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { requests } = body

    if (!Array.isArray(requests)) {
      return NextResponse.json({ error: "requests must be an array" }, { status: 400 })
    }

    // Execute all requested data fetches in parallel
    const results: Record<string, any> = {}
    const promises: Array<Promise<void>> = []

    for (const req of requests) {
      const { key, type } = req

      if (type === "stats") {
        promises.push(
          getAdminStats().then((data) => {
            results[key] = { success: true, data }
          }),
        )
      } else if (type === "students") {
        promises.push(
          getAllStudents().then((data) => {
            results[key] = { success: true, data }
          }),
        )
      } else if (type === "analytics") {
        promises.push(
          getAdminAnalytics().then((data) => {
            results[key] = { success: true, data }
          }),
        )
      } else {
        results[key] = { success: false, error: `Unknown request type: ${type}` }
      }
    }

    // Wait for all promises
    await Promise.all(promises)

    // Cache the response for 60 seconds (can be adjusted based on data freshness requirements)
    const headers = new Headers({
      "Content-Type": "application/json",
      "Cache-Control": "private, max-age=60, stale-while-revalidate=120",
    })

    return NextResponse.json({ success: true, data: results }, { headers })
  } catch (error) {
    console.error("[v0] Batch API error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 },
    )
  }
}
