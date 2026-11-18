import { PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { NextResponse } from "next/server"
import { z } from "zod"
import { getCurrentUser } from "@/lib/auth"
import { getR2Config } from "@/lib/r2-storage"

export const runtime = "nodejs"

const MAX_PDF_BYTES = 50 * 1024 * 1024
const uploadRequestSchema = z.object({
  fileName: z.string().trim().min(1).max(255),
  fileSizeBytes: z.number().int().positive().max(MAX_PDF_BYTES),
})

export async function POST(request: Request) {
  const user = await getCurrentUser()
  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Your admin session is missing or expired. Sign in again and retry." }, { status: 401 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid upload request." }, { status: 400 })
  }

  const parsed = uploadRequestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Choose a PDF file no larger than 50 MB." }, { status: 400 })
  }
  if (!parsed.data.fileName.toLowerCase().endsWith(".pdf")) {
    return NextResponse.json({ error: "Only PDF files are supported." }, { status: 400 })
  }

  try {
    const { bucket, client } = getR2Config()
    const storageKey = `previous-year-papers/${crypto.randomUUID()}.pdf`
    const uploadUrl = await getSignedUrl(
      client,
      new PutObjectCommand({ Bucket: bucket, Key: storageKey, ContentType: "application/pdf" }),
      { expiresIn: 600 },
    )

    return NextResponse.json({ uploadUrl, storageKey })
  } catch (error) {
    console.error("[previous-year-papers] Could not create upload URL", error)
    return NextResponse.json({ error: "Could not prepare the PDF upload. Check R2 server configuration and try again." }, { status: 500 })
  }
}
