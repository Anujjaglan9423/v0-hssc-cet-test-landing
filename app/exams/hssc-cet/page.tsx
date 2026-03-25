import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, FileText, Clock, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "HSSC CET Mock Test 2026 | Free Online Practice Test Series",
  description:
    "Practice unlimited HSSC CET mock tests online with detailed solutions. Get previous year papers, exam pattern, syllabus & instant performance analysis. Start free mock test now!",
  keywords: [
    "HSSC CET mock test",
    "Haryana CET exam preparation",
    "HSSC CET free online test",
    "HSSC CET practice questions",
    "Haryana constable test paper",
    "HSSC CET previous year papers",
    "HSSC CET exam pattern",
    "HSSC CET syllabus",
    "HSSC CET study material",
    "HSSC CET solved papers",
  ],
  openGraph: {
    title: "HSSC CET Mock Test 2026 | Free Practice Tests",
    description: "Practice unlimited HSSC CET mock tests with detailed analysis and previous year papers",
  },
}

export default function HSCSCETPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            HSSC CET Mock Tests & Exam Preparation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master Haryana CET with unlimited free mock tests, previous year papers, and detailed performance analytics
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose CET TEST for HSSC CET Preparation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-lg p-6 border">
              <FileText className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">100+ Mock Tests</h3>
              <p className="text-sm text-muted-foreground">Comprehensive test series covering all HSSC CET topics</p>
            </div>
            <div className="bg-background rounded-lg p-6 border">
              <Clock className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Timed Tests</h3>
              <p className="text-sm text-muted-foreground">Real exam conditions with timer to improve speed and accuracy</p>
            </div>
            <div className="bg-background rounded-lg p-6 border">
              <BarChart3 className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Detailed Analytics</h3>
              <p className="text-sm text-muted-foreground">Track progress with subject-wise performance reports</p>
            </div>
            <div className="bg-background rounded-lg p-6 border">
              <CheckCircle2 className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Solutions & Explanations</h3>
              <p className="text-sm text-muted-foreground">Detailed explanations for every question to learn effectively</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">HSSC CET Exam Overview</h2>
          <div className="space-y-4 mb-8">
            <p className="text-lg text-muted-foreground">
              The Haryana Staff Selection Commission (HSSC) conducts the Combined Entrance Test (CET) for various government positions in Haryana. Our platform provides comprehensive preparation resources for aspiring candidates.
            </p>
            <h3 className="text-2xl font-semibold mt-8">Exam Pattern</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Total Questions: 100</li>
              <li>Duration: 90 minutes</li>
              <li>Subjects: General Knowledge, Reasoning, Mathematics, English</li>
              <li>Negative Marking: 0.25 marks per wrong answer</li>
              <li>Total Marks: 100</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8">Syllabus Coverage</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>General Knowledge & Current Affairs</li>
              <li>Logical Reasoning & Mental Ability</li>
              <li>Quantitative Aptitude</li>
              <li>English Language & Comprehension</li>
              <li>Computer Basics</li>
            </ul>
          </div>

          <Link href="/signup">
            <Button size="lg" className="w-full md:w-auto">
              Start Practicing HSSC CET Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
