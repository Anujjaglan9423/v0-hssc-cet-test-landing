import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { getCurrentUser } from "@/lib/auth"

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    const user = await getCurrentUser()

    // Check if user is admin
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data: userProfile } = await supabase.from("users").select("role").eq("id", user.id).single()

    if (!userProfile || userProfile.role !== "admin") {
      return NextResponse.json({ error: "Only admins can upload study materials" }, { status: 403 })
    }

    const body = await req.json()
    const { title, description, material_type, content, file_url, category } = body

    if (!title || !material_type || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Insert study material
    const { data: material, error } = await supabase
      .from("study_materials")
      .insert({
        title,
        description: description || null,
        material_type,
        content,
        file_url: file_url || null,
        category: category || "general_info",
        uploaded_by: user.id,
        is_active: true,
      })
      .select()
      .single()

    if (error) {
      console.error("Error creating study material:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(material, { status: 201 })
  } catch (error) {
    console.error("Error in POST /api/study-materials/admin:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const supabase = await createClient()
    const user = await getCurrentUser()

    // Check if user is admin
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data: userProfile } = await supabase.from("users").select("role").eq("id", user.id).single()

    if (!userProfile || userProfile.role !== "admin") {
      return NextResponse.json({ error: "Only admins can view all materials" }, { status: 403 })
    }

    // Get all materials (for admin view)
    const { data: materials, error } = await supabase
      .from("study_materials")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching study materials:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(materials || [])
  } catch (error) {
    console.error("Error in GET /api/study-materials/admin:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
