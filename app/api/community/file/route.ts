import { get } from "@vercel/blob"
import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"

export async function GET(request: Request) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const pathname = new URL(request.url).searchParams.get("pathname")
  if (!pathname || !pathname.startsWith("community/")) return NextResponse.json({ error: "Forbidden" }, { status: 403 })

  const result = await get(pathname, { access: "private" })
  if (!result) return new NextResponse("Not found", { status: 404 })
  return new NextResponse(result.stream, { headers: { "Content-Type": result.blob.contentType || "application/octet-stream", ETag: result.blob.etag, "Cache-Control": "private, no-cache" } })
}
