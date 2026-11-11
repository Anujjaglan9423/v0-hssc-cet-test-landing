import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import ExamsSection from "@/components/exams-section"
import DailyQuizSection from "@/components/daily-quiz-section"
import TestSeriesSection from "@/components/test-series-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import PreparationGuide, {
  EditorialNote,
} from "@/components/preparation-guide"
import AdPlacement from "@/components/ad-placement"
import ExamAlertsSection from "@/components/exam-alerts-section"
import type { DailyTopStudent } from "@/components/daily-top-students-popup"
import { createAdminClient } from "@/lib/supabase/server"
import { getPublicSiteStats } from "@/lib/public-site-stats"
import type { Metadata } from "next"

export const metadata: Metadata = { alternates: { canonical: "https://cettest.site" } }

import type { Testimonial } from "@/components/testimonials-section"


interface RelatedUser {
  full_name: string | null
}

interface RelatedTest {
  title: string | null
}

interface FeedbackReview {
  id: string
  rating: number | null
  comments: string | null
  created_at: string
  user: RelatedUser | RelatedUser[] | null
  test: RelatedTest | RelatedTest[] | null
}

// Get first related record safely
function getRelation<T>(
  relation: T | T[] | null | undefined
): T | null {
  if (!relation) return null

  return Array.isArray(relation)
    ? relation[0] ?? null
    : relation
}

async function getDailyTopStudents(): Promise<DailyTopStudent[]> {
  try {
    const supabase = createAdminClient()
    const todayInIndia = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date())
    const startOfDay = new Date(`${todayInIndia}T00:00:00+05:30`)
    const startOfTomorrow = new Date(startOfDay.getTime() + 24 * 60 * 60 * 1000)

    const { data, error } = await supabase
      .from("test_results")
      .select("user_id, correct_answers, created_at, user:users(full_name)")
      .gte("created_at", startOfDay.toISOString())
      .lt("created_at", startOfTomorrow.toISOString())
      .not("user_id", "is", null)

    if (error || !data) return []

    const byStudent = new Map<string, DailyTopStudent>()
    for (const result of data as Array<{ user_id: string; correct_answers: number; user: RelatedUser | RelatedUser[] | null }>) {
      const user = getRelation(result.user)
      if (!user?.full_name) continue
      const existing = byStudent.get(result.user_id)
      if (existing) {
        existing.correctAnswers += Number(result.correct_answers) || 0
        existing.testsAttempted += 1
      } else {
        byStudent.set(result.user_id, {
          name: user.full_name.trim().split(/\\s+/)[0] || "CET TEST student",
          correctAnswers: Number(result.correct_answers) || 0,
          testsAttempted: 1,
        })
      }
    }

    return Array.from(byStudent.values())
      .sort((a, b) => b.correctAnswers - a.correctAnswers || b.testsAttempted - a.testsAttempted)
      .slice(0, 3)
  } catch {
    return []
  }
}

// Fetch all public testimonials

interface PublicReviews {
  testimonials: Testimonial[]
  totalRatings: number
  averageRating: number | null
  ratingCounts: Record<1 | 2 | 3 | 4 | 5, number>
}

async function getPublicReviews(): Promise<PublicReviews> {
  try {
    const supabase = createAdminClient()

    const PAGE_SIZE = 1000
    let offset = 0
    const allReviews: FeedbackReview[] = []

    while (true) {
      const { data, error } = await supabase
        .from("test_feedback")
        .select(`
          id,
          rating,
          comments,
          created_at,
          user:users(full_name),
          test:tests(title)
        `)
        .order("created_at", { ascending: false })
        .order("id", { ascending: false })
        .range(offset, offset + PAGE_SIZE - 1)

      if (error) {
        return { testimonials: [], totalRatings: 0, averageRating: null, ratingCounts: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } }
      }

      const reviews = (data ?? []) as unknown as FeedbackReview[]

      allReviews.push(...reviews)

      // Stop only when all available records are fetched
      if (reviews.length < PAGE_SIZE) {
        break
      }

      offset += PAGE_SIZE
    }

    const ratings = allReviews
      .map((review) => Number(review.rating))
      .filter((rating) => Number.isFinite(rating) && rating >= 1 && rating <= 5)
    const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    ratings.forEach((rating) => {
      ratingCounts[rating as 1 | 2 | 3 | 4 | 5] += 1
    })
    const testimonials = allReviews.flatMap((review): Testimonial[] => {
      const comment =
        typeof review.comments === "string"
          ? review.comments.trim()
          : ""

      if (comment.length <= 10) return []

      const user = getRelation(review.user)
      const test = getRelation(review.test)

      const fullName = user?.full_name
      const testTitle = test?.title

      return [
        {
          id: review.id,
          name: fullName
            ? fullName.trim().split(/\s+/)[0]
            : "CET TEST student",
          role: testTitle
            ? `Student review · ${testTitle}`
            : "CET TEST student",
          content: comment,
          rating: Math.min(
            5,
            Math.max(1, Number(review.rating) || 5)
          ),
          datePublished: String(review.created_at).slice(0, 10),
        },
      ]
    })

    return {
      testimonials,
      totalRatings: ratings.length,
      averageRating: ratings.length ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length : null,
      ratingCounts,
    }
  } catch (error) {
    return { testimonials: [], totalRatings: 0, averageRating: null, ratingCounts: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } }
  }
}


export default async function Home() {
  const [publicReviews, dailyTopStudents] = await Promise.all([
    getPublicReviews(),
    getDailyTopStudents(),
  ])
  const { testimonials, totalRatings, averageRating, ratingCounts } = publicReviews

  const stats = await getPublicSiteStats()
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Daily top performers are shown in the hero panel instead of a popup. */}

      <HeroSection stats={stats} topStudents={dailyTopStudents} />

      <ExamsSection />
  <AdPlacement className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />
      <DailyQuizSection />

      <ExamAlertsSection />

      <StatsSection />

      <FeaturesSection />

      <PreparationGuide />

      <TestSeriesSection />

      {testimonials.length > 0 && (
        <TestimonialsSection testimonials={testimonials} totalRatings={totalRatings} averageRating={averageRating} ratingCounts={ratingCounts} />
      )}

      <FAQSection />

      <EditorialNote />

      <CTASection stats={stats} />

      <Footer />
    </main>
  )
}
