import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, FileText, Clock, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "RRB NTPC Mock Test 2026 | Free Online Practice Test Series",
  description:
    "Prepare for Railway RRB NTPC exam with unlimited free mock tests, previous year papers & detailed performance analytics. Practice online now!",
  keywords: [
    "RRB NTPC mock test",
    "Railway RRB exam preparation",
    "RRB NTPC test series",
    "RRB NTPC free online test",
    "Railway NTPC practice questions",
    "RRB NTPC previous year papers",
    "RRB NTPC exam pattern",
    "RRB NTPC syllabus",
    "Railway recruitment board test",
    "RRB NTPC solved papers",
  ],
  openGraph: {
    title: "RRB NTPC Mock Test 2026 | Free Practice Tests",
    description: "Master Railway RRB NTPC with unlimited mock tests and detailed analysis",
  },
}

export default function RRBNTPCPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            RRB NTPC Mock Tests & Exam Preparation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master Railway RRB NTPC with unlimited free mock tests, previous year papers & instant performance feedback
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose CET TEST for RRB NTPC Preparation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-lg p-6 border">
              <FileText className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">500+ Mock Tests</h3>
              <p className="text-sm text-muted-foreground">Comprehensive test series covering all RRB NTPC topics</p>
            </div>
            <div className="bg-background rounded-lg p-6 border">
              <Clock className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Real Exam Conditions</h3>
              <p className="text-sm text-muted-foreground">Practice with actual exam pattern and time limit</p>
            </div>
            <div className="bg-background rounded-lg p-6 border">
              <BarChart3 className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Performance Analytics</h3>
              <p className="text-sm text-muted-foreground">Track your preparation progress with detailed reports</p>
            </div>
            <div className="bg-background rounded-lg p-6 border">
              <CheckCircle2 className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Solutions Included</h3>
              <p className="text-sm text-muted-foreground">Detailed explanations for every question</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">RRB NTPC Exam Overview</h2>
          <div className="space-y-4 mb-8">
            <p className="text-lg text-muted-foreground">
              Railway Recruitment Board (RRB) Non-Technical Popular Categories (NTPC) is a major recruitment exam for non-technical positions in Indian Railways. Prepare comprehensively with our expert-curated test series.
            </p>
            <h3 className="text-2xl font-semibold mt-8">Exam Pattern</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Stage 1: 100 questions in 90 minutes</li>
              <li>Subjects: General Awareness, Arithmetic, General Intelligence</li>
              <li>Stage 2: Computer-based exam</li>
              <li>Document verification & medical test</li>
              <li>Negative Marking: 1/3rd of marks for wrong answers</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8">Syllabus Topics</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>General Awareness & Current Affairs</li>
              <li>Arithmetic & Quantitative Reasoning</li>
              <li>General Intelligence & Reasoning</li>
              <li>Computer Basics</li>
              <li>India & World Geography</li>
            </ul>
          </div>

          <Link href="/signup">
            <Button size="lg" className="w-full md:w-auto">
              Start RRB NTPC Preparation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
