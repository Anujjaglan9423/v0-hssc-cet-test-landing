import { createClient } from "@supabase/supabase-js"
import { NextRequest, NextResponse } from "next/server"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Missing Supabase environment variables")
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const description = formData.get("description") as string
    const category = formData.get("category") as string
    const tags = formData.get("tags") as string
    const focusKeyword = formData.get("focusKeyword") as string
    const metaTitle = formData.get("metaTitle") as string
    const metaDescription = formData.get("metaDescription") as string
    const status = formData.get("status") as string
    const createdBy = formData.get("createdBy") as string
    const featuredImage = formData.get("featuredImage") as File | null

    // Validation
    if (!title || !slug || !description) {
      return NextResponse.json(
        { error: "Missing required fields: title, slug, description" },
        { status: 400 }
      )
    }

    let featuredImageUrl = null

    // Upload featured image if provided
    if (featuredImage && featuredImage.size > 0) {
      const fileName = `blog-${Date.now()}-${featuredImage.name}`
      const buffer = await featuredImage.arrayBuffer()

      const { data, error } = await supabase.storage
        .from("blog-images")
        .upload(fileName, buffer, {
          contentType: featuredImage.type,
          upsert: false,
        })

      if (error) {
        console.error("[v0] Storage error:", error)
        return NextResponse.json(
          { error: `Failed to upload image: ${error.message}` },
          { status: 500 }
        )
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("blog-images").getPublicUrl(data.path)

      featuredImageUrl = publicUrl
    }

    // Parse tags array
    const tagsArray = tags
      ? tags.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0)
      : []

    // Insert blog post
    const { data, error } = await supabase.from("blogs").insert([
      {
        title,
        slug,
        description,
        featured_image_url: featuredImageUrl,
        category,
        tags: tagsArray,
        focus_keyword: focusKeyword || null,
        meta_title: metaTitle || null,
        meta_description: metaDescription || null,
        status: status || "draft",
        created_by: createdBy || null,
      },
    ])

    if (error) {
      console.error("[v0] Database error:", error)
      return NextResponse.json(
        { error: `Failed to create blog: ${error.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: "Blog post created successfully",
        data,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// GET all published blogs or specific blog by slug
export async function GET(request: NextRequest) {
  try {
    const slug = request.nextUrl.searchParams.get("slug")

    if (slug) {
      // Get specific blog by slug
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .eq("status", "publish")
        .single()

      if (error) {
        return NextResponse.json(
          { error: "Blog post not found" },
          { status: 404 }
        )
      }

      return NextResponse.json(data)
    } else {
      // Get all published blogs
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("status", "publish")
        .order("created_at", { ascending: false })

      if (error) {
        console.error("[v0] Database error:", error)
        return NextResponse.json(
          { error: "Failed to fetch blogs" },
          { status: 500 }
        )
      }

      return NextResponse.json(data)
    }
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
