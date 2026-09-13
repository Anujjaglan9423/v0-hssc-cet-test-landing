import { put } from "@vercel/blob"
import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const formData = await request.formData()
    const file = formData.get("file")
    if (!(file instanceof File) || !file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Please upload an image file" }, { status: 400 })
    }
    if (file.size === 0 || file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Image must be between 1 byte and 5MB" }, { status: 413 })
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").slice(-120)
    const blob = await put(`community/${user.id}/${crypto.randomUUID()}-${safeName}`, file, {
      access: "private",
      addRandomSuffix: false,
      contentType: file.type,
    })
    return NextResponse.json({ pathname: blob.pathname, url: `/api/community/file?pathname=${encodeURIComponent(blob.pathname)}` })
  } catch (error) {
    console.error("[community-upload] upload failed", error)
    return NextResponse.json({ error: "Image upload failed. Please try again." }, { status: 500 })
  }
}
