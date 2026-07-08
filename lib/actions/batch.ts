"use server"

/**
 * Batch multiple API requests into a single call
 * Reduces data transfer by combining related queries
 */
export async function batchAdminRequests(
  requests: Array<{
    key: string
    type: "stats" | "students" | "analytics"
  }>,
) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/admin/batch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ requests }),
      // Cache the response for better performance
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      throw new Error(`Batch request failed: ${response.statusText}`)
    }

    const result = await response.json()
    return result.data
  } catch (error) {
    console.error("[v0] Batch request error:", error)
    throw error
  }
}
