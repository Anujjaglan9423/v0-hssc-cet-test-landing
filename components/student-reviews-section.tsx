"use client"

import { useState, useTransition } from "react"
import { CheckCircle2, MessageSquareQuote, Send, Star, X } from "lucide-react"
import { submitStudentReview } from "@/lib/actions/student-reviews"
import { Button } from "@/components/ui/button"

export interface StudentReview {
  id: string
  name: string
  content: string
  rating: number
  datePublished: string
  isVerifiedStudent: boolean
}

interface StudentReviewsSectionProps {
  reviews: StudentReview[]
  viewerName?: string
}

function Stars({ rating, label }: { rating: number; label?: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={label ?? `${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className={`size-4 ${index < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} aria-hidden="true" />
      ))}
    </div>
  )
}

function ReviewDialog({ onClose, viewerName }: { onClose: () => void; viewerName?: string }) {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [rating, setRating] = useState(5)

  function handleSubmit(formData: FormData) {
    setError("")
    startTransition(async () => {
      const result = await submitStudentReview({
        displayName: formData.get("displayName"),
        rating,
        reviewText: formData.get("reviewText"),
        consentToPublish: formData.get("consentToPublish") === "on",
      })
      if (!result.ok) {
        setError(result.error ?? "We could not submit your review")
        return
      }
      setSuccess(true)
    })
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" role="presentation">
      <button type="button" className="absolute inset-0 cursor-default" aria-label="Close review dialog" onClick={onClose} />
      <section role="dialog" aria-modal="true" aria-labelledby="review-dialog-title" className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border bg-background p-6 shadow-2xl sm:p-8">
        <button type="button" onClick={onClose} aria-label="Close review dialog" className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <X className="size-5" aria-hidden="true" />
        </button>
        {success ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto size-12 text-emerald-500" aria-hidden="true" />
            <h2 id="review-dialog-title" className="mt-4 text-2xl font-bold">Thanks for sharing</h2>
            <p className="mt-2 text-muted-foreground">Your review has been submitted for moderation. It will appear after approval.</p>
            <Button type="button" className="mt-6" onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Student feedback</p>
              <h2 id="review-dialog-title" className="mt-1 text-2xl font-bold">Share Your Experience</h2>
              <p className="mt-2 text-sm text-muted-foreground">Your name and review may be displayed publicly after moderation. Please share genuine feedback.</p>
            </div>
            <form action={handleSubmit} className="space-y-5">
              <label className="block text-sm font-medium">Student name<input name="displayName" defaultValue={viewerName} required maxLength={80} className="mt-2 flex h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" placeholder="How should we display your name?" /></label>
              <fieldset>
                <legend className="text-sm font-medium">Your rating</legend>
                <div className="mt-2 flex gap-1" role="radiogroup" aria-label="Choose a rating from 1 to 5 stars">
                  {Array.from({ length: 5 }, (_, index) => {
                    const value = index + 1
                    return <button key={value} type="button" role="radio" aria-checked={rating === value} aria-label={`${value} star${value === 1 ? "" : "s"}`} onClick={() => setRating(value)} className="rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Star className={`size-7 ${value <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} aria-hidden="true" /></button>
                  })}
                </div>
              </fieldset>
              <label className="block text-sm font-medium">Your feedback<textarea name="reviewText" required minLength={20} maxLength={1000} rows={5} className="mt-2 w-full resize-y rounded-xl border bg-background px-3 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" placeholder="What helped you in your preparation?" /></label>
              <label className="flex items-start gap-3 text-sm text-muted-foreground"><input name="consentToPublish" type="checkbox" required className="mt-1 size-4 accent-primary" />I agree that CET TEST may publish this review with my display name after moderation.</label>
              {error && <p role="alert" className="rounded-xl bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}
              <Button type="submit" disabled={isPending} className="w-full"><Send className="mr-2 size-4" aria-hidden="true" />{isPending ? "Submitting..." : "Submit review"}</Button>
            </form>
          </>
        )}
      </section>
    </div>
  )
}

export function StudentReviewsSection({ reviews, viewerName }: StudentReviewsSectionProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const average = reviews.length ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) : null

  return (
    <section aria-labelledby="student-reviews-title" className="border-y bg-muted/20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-sm font-medium text-primary"><MessageSquareQuote className="size-4" aria-hidden="true" /> Student voices</div>
            <h2 id="student-reviews-title" className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Aspirants, Rated by Students</h2>
            <p className="mt-3 text-lg text-muted-foreground">Real feedback from students practising for government exams on CET TEST.</p>
          </div>
          <Button onClick={() => setDialogOpen(true)} className="shrink-0">Share Your Experience</Button>
        </div>
        <div className="mt-10">
          {reviews.length ? <>
            <div className="mb-6 flex items-center gap-3" aria-label={`${average} out of 5 based on ${reviews.length} verified student ratings`}><Stars rating={Math.round(Number(average))} /><span className="font-semibold">{average}/5</span><span className="text-sm text-muted-foreground">Based on {reviews.length} student ratings</span></div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{reviews.map((review) => <article key={review.id} className="rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"><div className="flex items-start justify-between gap-4"><div><p className="font-semibold">{review.name}</p>{review.isVerifiedStudent && <span className="mt-1 inline-flex items-center gap-1 text-xs text-emerald-600"><CheckCircle2 className="size-3.5" aria-hidden="true" /> Verified Student</span>}</div><Stars rating={review.rating} /></div><p className="mt-4 leading-7 text-muted-foreground">“{review.content}”</p><time dateTime={review.datePublished} className="mt-4 block text-xs text-muted-foreground">{new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(new Date(review.datePublished))}</time></article>)}</div>
          </> : <div className="rounded-2xl border border-dashed bg-card p-8 text-center"><p className="font-semibold">Be the first to share your experience</p><p className="mt-2 text-sm text-muted-foreground">Authentic student feedback will appear here after moderation.</p></div>}
        </div>
      </div>
      {dialogOpen && <ReviewDialog onClose={() => setDialogOpen(false)} viewerName={viewerName} />}
    </section>
  )
}
