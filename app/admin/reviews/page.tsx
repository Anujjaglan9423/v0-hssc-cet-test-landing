import { redirect } from "next/navigation"
import { CheckCircle2, Clock3, XCircle } from "lucide-react"
import { requireAdmin } from "@/lib/auth"
import { createAdminClient } from "@/lib/supabase/server"

export default async function AdminReviewsPage() {
  await requireAdmin()
  const supabase = createAdminClient()
  const { data: reviews } = await supabase.from("student_reviews").select("id, display_name, rating, review_text, status, is_verified_student, created_at").order("created_at", { ascending: false })

  async function moderateReview(formData: FormData) {
    "use server"
    await requireAdmin()
    const id = String(formData.get("id") ?? "")
    const status = String(formData.get("status") ?? "")
    if (!id || !["approved", "rejected"].includes(status)) redirect("/admin/reviews")
    const admin = createAdminClient()
    await admin.from("student_reviews").update({ status }).eq("id", id)
    redirect("/admin/reviews")
  }

  return <main className="mx-auto max-w-6xl px-4 py-10"><div className="mb-8"><p className="text-sm font-semibold uppercase tracking-wider text-primary">Admin moderation</p><h1 className="mt-1 text-3xl font-bold">Student reviews</h1><p className="mt-2 text-muted-foreground">Approve genuine feedback before it appears on the homepage.</p></div><div className="space-y-4">{reviews?.length ? reviews.map((review) => <article key={review.id} className="rounded-2xl border bg-card p-5"><div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"><div className="flex-1"><div className="flex flex-wrap items-center gap-3"><h2 className="font-semibold">{review.display_name}</h2><span className="text-amber-500">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>{review.is_verified_student && <span className="text-xs text-emerald-600">Verified student</span>}<span className="rounded-full bg-muted px-2 py-1 text-xs">{review.status}</span></div><p className="mt-3 text-muted-foreground">{review.review_text}</p><time className="mt-3 block text-xs text-muted-foreground">{new Date(review.created_at).toLocaleString("en-IN")}</time></div>{review.status === "pending" && <div className="flex shrink-0 gap-2"><form action={moderateReview}><input type="hidden" name="id" value={review.id} /><input type="hidden" name="status" value="approved" /><button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-sm font-medium text-white"><CheckCircle2 className="size-4" aria-hidden="true" />Approve</button></form><form action={moderateReview}><input type="hidden" name="id" value={review.id} /><input type="hidden" name="status" value="rejected" /><button className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium"><XCircle className="size-4" aria-hidden="true" />Reject</button></form></div>}</div></article>) : <div className="rounded-2xl border border-dashed p-10 text-center text-muted-foreground"><Clock3 className="mx-auto size-8" aria-hidden="true" /><p className="mt-3">No reviews submitted yet.</p></div>}</div></main>
}
