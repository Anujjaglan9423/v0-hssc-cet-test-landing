import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { getCurrentUser } from "@/lib/auth"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    
    const { data: blog, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single()
    
    if (error || !blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }
    
    return NextResponse.json({ blog })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser()
    
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const { id } = await params
    const supabase = await createClient()
    const body = await request.json()
    
    const {
      title,
      slug,
      description,
      status,
      meta_title,
      meta_description,
      focus_keyword,
      tags,
      category,
      featured_image_url,
    } = body
    
    // Validate required fields
    if (!title || !slug || !description) {
      return NextResponse.json(
        { error: "Title, slug, and description are required" },
        { status: 400 }
      )
    }
    
    // Check if slug already exists (excluding current blog)
    const { data: existingBlog } = await supabase
      .from("blogs")
      .select("id")
      .eq("slug", slug)
      .neq("id", id)
      .maybeSingle()
    
    if (existingBlog) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 400 })
    }
    
    // Update blog post
    const { data: blog, error } = await supabase
      .from("blogs")
      .update({
        title,
        slug,
        description,
        status,
        meta_title: meta_title || title,
        meta_description,
        focus_keyword,
        tags: tags || [],
        category,
        featured_image_url,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single()
    
    if (error) {
      console.error("Error updating blog:", error)
      return NextResponse.json({ error: "Failed to update blog" }, { status: 500 })
    }
    
    return NextResponse.json({ blog })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser()
    
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const { id } = await params
    const supabase = await createClient()
    
    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id)
    
    if (error) {
      console.error("Error deleting blog:", error)
      return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
