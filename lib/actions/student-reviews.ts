"use server"

import { z } from "zod"
import { requireAuth } from "@/lib/auth"
import { createAdminClient } from "@/lib/supabase/server"

const reviewSchema = z.object({
  displayName: z.string().trim().min(2, "Enter at least 2 characters").max(80, "Keep your name under 80 characters"),
  rating: z.coerce.number().int().min(1).max(5),
  reviewText: z.string().trim().min(20, "Please share at least 20 characters").max(1000, "Keep your review under 1,000 characters"),
  consentToPublish: z.literal(true, { errorMap: () => ({ message: "Please allow us to display your review" }) }),
})

function sanitizeText(value: string) {
  return value.replace(/[<>]/g, "").replace(/\s+/g, " ").trim()
}

export async function submitStudentReview(input: unknown) {
  const parsed = reviewSchema.safeParse(input)
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Check your review details" }
  }

  let user
  try {
    user = await requireAuth()
  } catch {
    return { ok: false, error: "Please log in before submitting a review" }
  }
  const supabase = createAdminClient()
  const displayName = sanitizeText(parsed.data.displayName)
  const reviewText = sanitizeText(parsed.data.reviewText)

  const { data: recentReview } = await supabase
    .from("student_reviews")
    .select("id")
    .eq("user_id", user.id)
    .gte("created_at", new Date(Date.now() - 10 * 60 * 1000).toISOString())
    .maybeSingle()

  if (recentReview) return { ok: false, error: "Please wait before submitting another review" }

  const { count: participationCount } = await supabase
    .from("test_results")
    .select("id", { count: "exact", head: true })
    .eq("user_id", user.id)

  const { error } = await supabase.from("student_reviews").insert({
    user_id: user.id,
    display_name: displayName,
    rating: parsed.data.rating,
    review_text: reviewText,
    consent_to_publish: true,
    is_verified_student: (participationCount ?? 0) > 0,
    status: "pending",
  })

  if (error) {
    if (error.code === "23505") return { ok: false, error: "You already have a review awaiting moderation" }
    return { ok: false, error: "We could not submit your review. Please try again." }
  }

  return { ok: true }
}
