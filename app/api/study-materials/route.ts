import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    console.log("[v0] Fetching study materials...")
    const supabase = await createClient()

    // Get active study materials for public view
    const { data: materials, error } = await supabase
      .from("study_materials")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: false })

    console.log("[v0] Query result - materials:", materials?.length || 0, "error:", error?.message || "none")

    if (error) {
      console.error("[v0] Supabase error fetching study materials:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(materials || [])
  } catch (error) {
    console.error("[v0] Error in GET /api/study-materials:", error)
    return NextResponse.json({ error: "Internal server error", details: String(error) }, { status: 500 })
  }
}
