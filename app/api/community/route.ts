import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { createAdminClient } from "@/lib/supabase/server"

export async function GET() {
  const user = await getCurrentUser()
  if (!user || user.role !== "student") return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from("community_doubts")
    .select("id,student_id,text,image_url,category,created_at")
    .order("created_at", { ascending: false })
    .limit(50)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  const ids = (data ?? []).map((item) => item.student_id)
  const { data: users } = ids.length ? await supabase.from("users").select("id, full_name, avatar_url").in("id", ids) : { data: [] }
  const userMap = new Map((users ?? []).map((item) => [item.id, item]))
  const doubtIds = (data ?? []).map((item) => item.id)
  const [{ data: comments }, { data: likes }] = await Promise.all([
    doubtIds.length ? supabase.from("community_comments").select("*").in("doubt_id", doubtIds).order("created_at", { ascending: true }) : { data: [] },
    doubtIds.length ? supabase.from("community_likes").select("doubt_id, student_id").in("doubt_id", doubtIds) : { data: [] },
  ])
  const commentUsers = (comments ?? []).map((item) => item.student_id).filter((id) => !userMap.has(id))
  if (commentUsers.length) {
    const { data: extraUsers } = await supabase.from("users").select("id, full_name, avatar_url").in("id", commentUsers)
    for (const item of extraUsers ?? []) userMap.set(item.id, item)
  }
  return NextResponse.json((data ?? []).map((item) => ({
    id: item.id, studentId: item.student_id, studentName: userMap.get(item.student_id)?.full_name ?? "Student", studentAvatarUrl: userMap.get(item.student_id)?.avatar_url ?? null,
    text: item.text, imageUrl: item.image_url?.startsWith("data:image/") || item.image_url?.startsWith("https://") ? item.image_url : item.image_url ? `/api/community/file?pathname=${encodeURIComponent(item.image_url)}` : undefined, category: item.category, createdAt: item.created_at,
    likeCount: (likes ?? []).filter((like) => like.doubt_id === item.id).length, isLikedByCurrentUser: (likes ?? []).some((like) => like.doubt_id === item.id && like.student_id === user.id),
    comments: (comments ?? []).filter((comment) => comment.doubt_id === item.id).map((comment) => ({ id: comment.id, studentId: comment.student_id, studentName: userMap.get(comment.student_id)?.full_name ?? "Student", studentAvatarUrl: userMap.get(comment.student_id)?.avatar_url ?? null, text: comment.text, createdAt: comment.created_at })),
  })))
}

export async function POST(request: Request) {
  const user = await getCurrentUser()
  if (!user || user.role !== "student") return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const body = await request.json()
  const text = typeof body.text === "string" ? body.text.trim() : ""
  const category = typeof body.category === "string" ? body.category : "General"
  const imagePath = typeof body.imagePath === "string" ? body.imagePath : ""
  const imageUrl = imagePath.startsWith(`community/${user.id}/`) || (imagePath.startsWith("https://") && imagePath.includes(".blob.vercel-storage.com/")) ? imagePath : typeof body.imageData === "string" && body.imageData.startsWith("data:image/") && body.imageData.length <= 2_500_000 ? body.imageData : null
  if (!text && !imageUrl) return NextResponse.json({ error: "Text or image is required" }, { status: 400 })
  const supabase = createAdminClient()
  const { data, error } = await supabase.from("community_doubts").insert({ student_id: user.id, text, category, image_url: imageUrl }).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ id: data.id }, { status: 201 })
}
