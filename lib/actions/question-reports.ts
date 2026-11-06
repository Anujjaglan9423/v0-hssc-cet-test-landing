"use server"

import { createClient } from "@/lib/supabase/server"
import { getCurrentUser } from "@/lib/auth"

export async function createQuestionReport(input: { testId: string; questionId: string; reason: string; details?: string }) {
  const user = await getCurrentUser()
  if (!user) return { success: false, error: "Not authenticated" }
  const supabase = await createClient()
  const { data, error } = await supabase.from("question_reports").upsert({
    student_id: user.id, test_id: input.testId, question_id: input.questionId,
    reason: input.reason, details: input.details?.trim() || null, status: "open",
  }, { onConflict: "student_id,test_id,question_id" }).select("id").single()
  if (error) return { success: false, error: "Unable to submit report" }
  return { success: true, id: data.id }
}

export async function getStudentQuestionReports() {
  const user = await getCurrentUser()
  if (!user) return []
  const supabase = await createClient()
  const { data } = await supabase.from("question_reports").select("id, test_id, question_id, reason, details, status, admin_response, created_at, updated_at, test:tests(title), question:questions(question_text)").eq("student_id", user.id).order("created_at", { ascending: false })
  return data || []
}

export async function getAdminQuestionReports() {
  const user = await getCurrentUser()
  if (!user || user.role !== "admin") return []
  const supabase = await createClient()
  const { data } = await supabase.from("question_reports").select("id, test_id, question_id, reason, details, status, admin_response, created_at, updated_at, student:users(full_name,email), test:tests(title), question:questions(question_text)").order("created_at", { ascending: false })
  return data || []
}

export async function updateQuestionReport(id: string, status: "open" | "in_review" | "resolved" | "dismissed", adminResponse: string) {
  const user = await getCurrentUser()
  if (!user || user.role !== "admin") return { success: false, error: "Unauthorized" }
  const supabase = await createClient()
  const { error } = await supabase.from("question_reports").update({ status, admin_response: adminResponse.trim() || null, resolved_by: user.id, resolved_at: status === "resolved" ? new Date().toISOString() : null }).eq("id", id)
  return error ? { success: false, error: "Unable to update report" } : { success: true }
}
