import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import DailyQuizSection from "@/components/daily-quiz-section"
import TestSeriesSection from "@/components/test-series-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is HSSC CET?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HSSC CET (Common Eligibility Test) is a preliminary exam conducted by Haryana Staff Selection Commission for recruitment to various government jobs in Haryana including CET, Police, and Group D positions."
                }
              },
              {
                "@type": "Question",
                "name": "Is CET TEST free to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! CET TEST offers free mock tests for all users. You can take one free full-length mock test per exam section without creating an account."
                }
              },
              {
                "@type": "Question",
                "name": "How many practice questions are available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We have over 10,000+ practice questions covering all topics in HSSC CET, Police, Group D, and other Haryana competitive exams with detailed solutions."
                }
              },
              {
                "@type": "Question",
                "name": "Can I practice mock tests without signing up?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! You can take one free mock test per exam section without creating an account. Sign up for premium to unlock all tests and track your progress."
                }
              }
            ]
          })
        }}
      />
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <DailyQuizSection />
        <TestSeriesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
