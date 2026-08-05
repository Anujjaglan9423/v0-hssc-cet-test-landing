import Navbar from "@/components/navbar"
import ExamPrepHero from "@/components/exam-prep-hero"
import ExamTabsSection from "@/components/exam-tabs-section"
import DailyChallengeWidget from "@/components/daily-challenge-widget"
import LearningPathSection from "@/components/learning-path-section"
import PerformancePreviewSection from "@/components/performance-preview-section"
import TopicMasteryCards from "@/components/topic-mastery-cards"
import MockTestDashboard from "@/components/mock-test-dashboard"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ExamPrepHero />
      <ExamTabsSection />
      <DailyChallengeWidget />
      <MockTestDashboard />
      <LearningPathSection />
      <PerformancePreviewSection />
      <TopicMasteryCards />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
