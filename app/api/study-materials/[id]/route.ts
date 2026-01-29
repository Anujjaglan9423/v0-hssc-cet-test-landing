import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { getCurrentUser } from "@/lib/auth"

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data: userProfile } = await supabase.from("users").select("role").eq("id", user.id).single()

    if (!userProfile || userProfile.role !== "admin") {
      return NextResponse.json({ error: "Only admins can update materials" }, { status: 403 })
    }

    const body = await req.json()
    const { title, description, material_type, content, file_url, category, is_active } = body

    const { data: material, error } = await supabase
      .from("study_materials")
      .update({
        title,
        description,
        material_type,
        content,
        file_url,
        category,
        is_active,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("Error updating study material:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(material)
  } catch (error) {
    console.error("Error in PUT /api/study-materials/[id]:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data: userProfile } = await supabase.from("users").select("role").eq("id", user.id).single()

    if (!userProfile || userProfile.role !== "admin") {
      return NextResponse.json({ error: "Only admins can delete materials" }, { status: 403 })
    }

    const { error } = await supabase.from("study_materials").delete().eq("id", id)

    if (error) {
      console.error("Error deleting study material:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error in DELETE /api/study-materials/[id]:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
