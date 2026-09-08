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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ExamsSection />
      <PreparationGuide />
      <DailyQuizSection />
      <TestSeriesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <EditorialNote />
      <CTASection />
      <Footer />
    </main>
  )
}
