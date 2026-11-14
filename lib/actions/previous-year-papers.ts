"use server"

import { HeadObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3"
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { getCurrentUser } from "@/lib/auth"
import { createAdminClient } from "@/lib/supabase/server"
import { getR2Config } from "@/lib/r2-storage"

const MAX_PDF_BYTES = 50 * 1024 * 1024
const paperFields = z.object({
  title: z.string().trim().min(2).max(160),
  exam_name: z.string().trim().min(2).max(120),
  sub_exam_name: z.string().trim().max(120).optional().nullable(),
  paper_type: z.enum(["full", "subject", "topic"]),
  subject: z.string().trim().max(120).optional().nullable(),
  topic: z.string().trim().max(120).optional().nullable(),
  exam_year: z.coerce.number().int().min(1950).max(2100),
  file_name: z.string().trim().min(1).max(255),
  file_size_bytes: z.number().int().positive().max(MAX_PDF_BYTES),
})

async function requireAdmin() {
  const user = await getCurrentUser()
  if (!user || user.role !== "admin") throw new Error("Unauthorized")
  return user
}

function validatePaperScope(input: z.infer<typeof paperFields>) {
  if (input.paper_type === "full" && (input.subject || input.topic)) throw new Error("Full exam PDFs cannot have a subject or topic.")
  if (input.paper_type === "subject" && (!input.subject || input.topic)) throw new Error("Choose a subject for a subject-wise PDF.")
  if (input.paper_type === "topic" && (!input.subject || !input.topic)) throw new Error("Choose both a subject and topic for a topic-wise PDF.")
}

export async function listActivePreviousYearPapers() {
  try {
    const db = createAdminClient()
    const { data, error } = await db.from("previous_year_papers")
      .select("id, title, exam_name, sub_exam_name, paper_type, subject, topic, exam_year, file_name, file_size_bytes, created_at")
      .eq("is_active", true).order("exam_year", { ascending: false }).order("created_at", { ascending: false })
    if (error) throw error
    return data ?? []
  } catch (error) {
    console.error("Unable to load previous-year papers:", error)
    return []
  }
}

export async function createPaperUploadUrl(fileName: string, fileSizeBytes: number) {
  await requireAdmin()
  const parsed = z.object({ fileName: z.string().min(1).max(255), fileSizeBytes: z.number().int().positive().max(MAX_PDF_BYTES) }).parse({ fileName, fileSizeBytes })
  if (!parsed.fileName.toLowerCase().endsWith(".pdf")) throw new Error("Only PDF files are supported.")
  const { bucket, client } = getR2Config()
  const storageKey = `previous-year-papers/${crypto.randomUUID()}.pdf`
  const uploadUrl = await getSignedUrl(client, new PutObjectCommand({ Bucket: bucket, Key: storageKey, ContentType: "application/pdf" }), { expiresIn: 600 })
  return { uploadUrl, storageKey }
}

export async function savePreviousYearPaper(rawInput: unknown, storageKey: string) {
  const user = await requireAdmin()
  const input = paperFields.parse(rawInput)
  validatePaperScope(input)
  if (!/^previous-year-papers\/[a-f0-9-]+\.pdf$/i.test(storageKey)) throw new Error("Invalid storage key.")

  const { bucket, client } = getR2Config()
  const object = await client.send(new HeadObjectCommand({ Bucket: bucket, Key: storageKey }))
  if (object.ContentType !== "application/pdf" || object.ContentLength !== input.file_size_bytes) {
    throw new Error("The uploaded file could not be verified as a PDF.")
  }

  const db = createAdminClient()
  const { error } = await db.from("previous_year_papers").insert({
    ...input,
    sub_exam_name: input.sub_exam_name || null,
    subject: input.subject || null,
    topic: input.topic || null,
    storage_key: storageKey,
    created_by: user.id,
    is_active: true,
  })
  if (error) {
    await client.send(new DeleteObjectCommand({ Bucket: bucket, Key: storageKey }))
    throw new Error("Could not save this paper. Check the exam details and try again.")
  }
  revalidatePath("/previous-year-papers")
  revalidatePath("/admin/previous-year-papers")
  return { success: true }
}

export async function getPreviousYearPaperUrl(id: string, disposition: "inline" | "attachment" = "inline") {
  const parsedId = z.string().uuid().parse(id)
  const parsedDisposition = z.enum(["inline", "attachment"]).parse(disposition)
  const db = createAdminClient()
  const { data, error } = await db.from("previous_year_papers").select("storage_key, file_name").eq("id", parsedId).eq("is_active", true).maybeSingle()
  if (error || !data) throw new Error("This paper is no longer available.")
  const { bucket, client } = getR2Config()
  const safeFileName = data.file_name.replace(/[^a-zA-Z0-9._-]/g, "_")
  const url = await getSignedUrl(client, new GetObjectCommand({ Bucket: bucket, Key: data.storage_key, ResponseContentDisposition: `${parsedDisposition}; filename="${safeFileName}"` }), { expiresIn: 900 })
  return { url }
}

export async function listAdminPreviousYearPapers() {
  await requireAdmin()
  const db = createAdminClient()
  const { data, error } = await db.from("previous_year_papers")
    .select("id, title, exam_name, sub_exam_name, paper_type, subject, topic, exam_year, file_name, file_size_bytes, is_active, created_at")
    .order("created_at", { ascending: false })
  if (error) throw new Error("Could not load the question-paper list.")
  return data ?? []
}

export async function setPreviousYearPaperActive(id: string, isActive: boolean) {
  await requireAdmin()
  const parsedId = z.string().uuid().parse(id)
  const db = createAdminClient()
  const { error } = await db.from("previous_year_papers").update({ is_active: isActive }).eq("id", parsedId)
  if (error) throw new Error("Could not update this paper.")
  revalidatePath("/previous-year-papers")
  revalidatePath("/admin/previous-year-papers")
  return { success: true }
}

export async function deletePreviousYearPaper(id: string) {
  await requireAdmin()
  const parsedId = z.string().uuid().parse(id)
  const db = createAdminClient()
  const { data, error } = await db.from("previous_year_papers").delete().eq("id", parsedId).select("storage_key").single()
  if (error) throw new Error("Could not delete this paper.")
  const { bucket, client } = getR2Config()
  await client.send(new DeleteObjectCommand({ Bucket: bucket, Key: data.storage_key }))
  revalidatePath("/previous-year-papers")
  revalidatePath("/admin/previous-year-papers")
  return { success: true }
}
