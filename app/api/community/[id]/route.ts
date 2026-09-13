import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { createAdminClient } from "@/lib/supabase/server"

async function authorized(id: string) {
  const user = await getCurrentUser()
  if (!user || user.role !== "student") return null
  const supabase = createAdminClient()
  const { data } = await supabase.from("community_doubts").select("id, student_id").eq("id", id).maybeSingle()
  return data ? { user, supabase, doubt: data } : null
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const context = await authorized(id)
  if (!context) return NextResponse.json({ error: "Not found" }, { status: 404 })
  if (context.doubt.student_id !== context.user.id) return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  const body = await request.json()
  const updates = { text: typeof body.text === "string" ? body.text.trim() : "", category: typeof body.category === "string" ? body.category : "General", updated_at: new Date().toISOString() }
  if (!updates.text) return NextResponse.json({ error: "Text is required" }, { status: 400 })
  const { error } = await context.supabase.from("community_doubts").update(updates).eq("id", id)
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ success: true })
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const context = await authorized(id)
  if (!context) return NextResponse.json({ error: "Not found" }, { status: 404 })
  if (context.doubt.student_id !== context.user.id) return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  const { error } = await context.supabase.from("community_doubts").delete().eq("id", id)
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ success: true })
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user || user.role !== "student") return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params
  const body = await request.json()
  const supabase = createAdminClient()
  if (body.action === "like") {
    const { data: existing } = await supabase.from("community_likes").select("doubt_id").eq("doubt_id", id).eq("student_id", user.id).maybeSingle()
    const result = existing ? await supabase.from("community_likes").delete().eq("doubt_id", id).eq("student_id", user.id) : await supabase.from("community_likes").insert({ doubt_id: id, student_id: user.id })
    if (result.error) return NextResponse.json({ error: result.error.message }, { status: 400 })
    return NextResponse.json({ liked: !existing })
  }
  if (body.action === "comment") {
    const text = typeof body.text === "string" ? body.text.trim() : ""
    if (!text) return NextResponse.json({ error: "Comment is required" }, { status: 400 })
    const { data, error } = await supabase.from("community_comments").insert({ doubt_id: id, student_id: user.id, text }).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status: 400 })
    return NextResponse.json({ id: data.id })
  }
  return NextResponse.json({ error: "Unsupported action" }, { status: 400 })
}
