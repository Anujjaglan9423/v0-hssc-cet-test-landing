import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createClient()

    // Get active study materials for public view
    const { data: materials, error } = await supabase
      .from("study_materials")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching study materials:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(materials || [])
  } catch (error) {
    console.error("Error in GET /api/study-materials:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
