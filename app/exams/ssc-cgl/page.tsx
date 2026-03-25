import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, FileText, Clock, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "SSC CGL Mock Test 2026 | Free Online Practice & Preparation",
  description:
    "Prepare for SSC CGL with unlimited free mock tests, previous year papers, and detailed analysis. Practice online with our comprehensive test series for Tier-1, Tier-2 & Tier-3.",
  keywords: [
    "SSC CGL mock test",
    "SSC CGL exam preparation",
    "SSC CGL free online test",
    "SSC CGL practice questions",
    "SSC CGL previous year papers",
    "SSC CGL test series",
    "SSC CGL syllabus",
    "SSC CGL exam pattern",
    "SSC CGL tier 1",
    "SSC CGL tier 2",
  ],
  openGraph: {
    title: "SSC CGL Mock Test 2026 | Free Practice Tests",
    description: "Master SSC CGL with unlimited mock tests and detailed performance analysis",
  },
}

export default function SSCCGLPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SSC CGL Mock Tests & Exam Preparation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ace SSC Combined Graduate Level exam with unlimited free mock tests, previous year papers & expert guidance
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Start Free Test Now
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg">
                View Demo Test
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose CET TEST for SSC CGL Preparation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-lg p-6 border">
              <FileText className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">1000+ Mock Tests</h3>
              <p className="text-sm text-muted-foreground">Complete test series for Tier-1, Tier-2 & Tier-3</p>
            </div>
            <div className="bg-background rounded-lg p-6 border">
              <Clock className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Timed Exams</h3>
              <p className="text-sm text-muted-foreground">Practice under real exam conditions with accurate timing</p>
            </div>
            <div className="bg-background rounded-lg p-6 border">
              <BarChart3 className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Performance Tracking</h3>
              <p className="text-sm text-muted-foreground">Detailed analytics to identify weak areas</p>
            </div>
            <div className="bg-background rounded-lg p-6 border">
              <CheckCircle2 className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Expert Solutions</h3>
              <p className="text-sm text-muted-foreground">Step-by-step explanations for all questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">SSC CGL Exam Overview</h2>
          <div className="space-y-4 mb-8">
            <p className="text-lg text-muted-foreground">
              Staff Selection Commission (SSC) Combined Graduate Level (CGL) is one of India&apos;s most competitive exams. Our comprehensive mock test series helps you prepare effectively for all stages.
            </p>
            <h3 className="text-2xl font-semibold mt-8">Exam Pattern</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Tier-1: 100 questions in 60 minutes</li>
              <li>Tier-2: Multiple sections with different durations</li>
              <li>Tier-3: Descriptive exam</li>
              <li>Tier-4: Typing test / Computer proficiency</li>
              <li>Negative Marking: 0.50 marks in Tier-1 & Tier-2</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8">Topics Covered</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>General Intelligence & Reasoning</li>
              <li>General Awareness</li>
              <li>Quantitative Aptitude</li>
              <li>English Language</li>
              <li>Data Entry & Typing</li>
            </ul>
          </div>

          <Link href="/signup">
            <Button size="lg" className="w-full md:w-auto">
              Start SSC CGL Preparation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
