import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import ExamsSection from "@/components/exams-section"
import DailyQuizSection from "@/components/daily-quiz-section"
import TestSeriesSection from "@/components/test-series-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import PreparationGuide, { EditorialNote } from "@/components/preparation-guide"
import AdPlacement from "@/components/ad-placement"
import ExamAlertsSection from "@/components/exam-alerts-section"
import DussehraModal from "@/components/dussehra-modal"
import { createAdminClient } from "@/lib/supabase/server"
import type { Testimonial } from "@/components/testimonials-section"

const SITE_URL = "https://cettest.site"

async function getPublicReviews(): Promise<Testimonial[]> {
  try {
    const supabase = createAdminClient()
    const { data } = await supabase
      .from("test_feedback")
      .select("id, rating, comments, created_at, user:users(full_name), test:tests(title)")
      .eq("would_recommend", true)
      .not("comments", "is", null)
      .neq("comments", "")
      .gte("rating", 4)
      .order("created_at", { ascending: false })
      .limit(12)

    return (data ?? []).flatMap((review) => {
      const comment = typeof review.comments === "string" ? review.comments.trim() : ""
      if (!comment) return []
      const fullName = Array.isArray(review.user) ? review.user[0]?.full_name : review.user?.full_name
      const testTitle = Array.isArray(review.test) ? review.test[0]?.title : review.test?.title
      return [{
        id: review.id,
        name: fullName ? String(fullName).split(" ")[0] : "CET TEST student",
        role: testTitle ? `Student review · ${testTitle}` : "CET TEST student",
        content: comment,
        rating: Math.min(5, Math.max(1, Number(review.rating) || 5)),
        datePublished: String(review.created_at).slice(0, 10),
      }]
    })
  } catch {
    return []
  }
}

export default async function Home() {
  const testimonials = await getPublicReviews()
  const aggregateRating = testimonials.length
    ? {
        "@type": "AggregateRating",
        ratingValue: (testimonials.reduce((sum, review) => sum + review.rating, 0) / testimonials.length).toFixed(1),
        reviewCount: testimonials.length,
        bestRating: "5",
        worstRating: "1",
      }
    : undefined
  const reviewStructuredData = testimonials.length
    ? {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "CET TEST",
        url: SITE_URL,
        aggregateRating,
        review: testimonials.map((review) => ({
          "@type": "Review",
          author: { "@type": "Person", name: review.name },
          datePublished: review.datePublished,
          reviewBody: review.content,
          reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5, worstRating: 1 },
        })),
      }
    : undefined

  return (
    <main className="min-h-screen">
      {/* <DussehraModal /> */}
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ExamsSection />
      <ExamAlertsSection />
      <AdPlacement className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />
      <PreparationGuide />
      <DailyQuizSection />
      <TestSeriesSection />
      {testimonials.length > 0 && <TestimonialsSection testimonials={testimonials} />}
      {reviewStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewStructuredData) }}
        />
      )}
      {/* <PricingSection /> */}
      <FAQSection />
      <EditorialNote />
      <CTASection />
      <Footer />
    </main>
  )
}
