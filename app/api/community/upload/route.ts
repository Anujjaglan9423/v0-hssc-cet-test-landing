import { put } from "@vercel/blob"
import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"

export async function POST(request: Request) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const formData = await request.formData()
  const file = formData.get("file")
  if (!(file instanceof File) || !file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Please upload an image" }, { status: 400 })
  }
  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "Image must be smaller than 5MB" }, { status: 413 })
  }

  const blob = await put(`community/${user.id}/${crypto.randomUUID()}-${file.name}`, file, {
    access: "private",
    addRandomSuffix: false,
    contentType: file.type,
  })
  return NextResponse.json({ pathname: blob.pathname, url: `/api/community/file?pathname=${encodeURIComponent(blob.pathname)}` })
}
