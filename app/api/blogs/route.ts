import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { getCurrentUser } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const searchParams = request.nextUrl.searchParams
    
    const search = searchParams.get("search")
    const status = searchParams.get("status")
    const category = searchParams.get("category")
    const limit = searchParams.get("limit")
    const publicOnly = searchParams.get("public") === "true"
    
    let query = supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false })
    
    // If public, only show published posts
    if (publicOnly) {
      query = query.eq("status", "publish")
    } else if (status && status !== "all") {
      query = query.eq("status", status)
    }
    
    if (search) {
      query = query.ilike("title", `%${search}%`)
    }
    
    if (category) {
      query = query.eq("category", category)
    }
    
    if (limit) {
      query = query.limit(parseInt(limit))
    }
    
    const { data: blogs, error } = await query
    
    if (error) {
      console.error("Error fetching blogs:", error)
      return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
    }
    
    return NextResponse.json({ blogs: blogs || [] })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser()
    
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
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
    
    // Check if slug already exists
    const { data: existingBlog } = await supabase
      .from("blogs")
      .select("id")
      .eq("slug", slug)
      .maybeSingle()
    
    if (existingBlog) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 400 })
    }
    
    // Create blog post
    const { data: blog, error } = await supabase
      .from("blogs")
      .insert({
        title,
        slug,
        description,
        status: status || "draft",
        meta_title: meta_title || title,
        meta_description,
        focus_keyword,
        tags: tags || [],
        category,
        featured_image_url,
        created_by: user.id,
      })
      .select()
      .single()
    
    if (error) {
      console.error("Error creating blog:", error)
      return NextResponse.json({ error: "Failed to create blog" }, { status: 500 })
    }
    
    return NextResponse.json({ blog })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
