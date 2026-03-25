import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, FileText, Clock, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "UKSSSC Mock Test 2026 | Uttarakhand State Exam Online Practice",
  description:
    "Prepare for UKSSSC exams with unlimited free mock tests, previous year papers & detailed analysis. Practice all Uttarakhand state government job exams online.",
  keywords: [
    "UKSSSC mock test",
    "Uttarakhand state exam",
    "UKSSSC free online test",
    "UK VDO test series",
    "Uttarakhand Patwari exam",
    "UKSSSC practice questions",
    "Uttarakhand govt job preparation",
    "UKSSSC previous year papers",
    "UK forest guard exam",
    "UKSSSC exam pattern",
  ],
  openGraph: {
    title: "UKSSSC Mock Test 2026 | Uttarakhand Exam Practice",
    description: "Master UKSSSC with unlimited mock tests and detailed performance tracking",
  },
}

export default function UKSSCSPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            UKSSSC Mock Tests & Exam Preparation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master Uttarakhand state government exams with unlimited free mock tests and comprehensive preparation resources
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose CET TEST for UKSSSC Preparation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-lg p-6 border">
              <FileText className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">300+ Mock Tests</h3>
              <p className="text-sm text-muted-foreground">Complete test series for all UKSSSC exams</p>
            </div>
            <div className="bg-background rounded-lg p-6 border">
              <Clock className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Timed Exams</h3>
              <p className="text-sm text-muted-foreground">Practice with official exam pattern and duration</p>
            </div>
            <div className="bg-background rounded-lg p-6 border">
              <BarChart3 className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Detailed Analytics</h3>
              <p className="text-sm text-muted-foreground">Track performance across all Uttarakhand exams</p>
            </div>
            <div className="bg-background rounded-lg p-6 border">
              <CheckCircle2 className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">Detailed solutions and learning materials included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">UKSSSC Exams Overview</h2>
          <div className="space-y-4 mb-8">
            <p className="text-lg text-muted-foreground">
              Uttarakhand Staff Selection Commission (UKSSSC) conducts recruitment exams for various government positions in Uttarakhand. We provide comprehensive preparation for all major UKSSSC exams.
            </p>
            <h3 className="text-2xl font-semibold mt-8">Key Exams Covered</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Village Development Officer (VDO)</li>
              <li>Patwari / Lekhpal</li>
              <li>Forest Guard / Forester</li>
              <li>Police Constable</li>
              <li>Other Group-C positions</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8">Exam Pattern & Syllabus</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>General Knowledge of India & Uttarakhand</li>
              <li>General Reasoning & Logical Ability</li>
              <li>Arithmetic & Quantitative Skills</li>
              <li>Hindi Language & Grammar</li>
              <li>English Language Basics</li>
              <li>Computer Basics</li>
            </ul>
          </div>

          <Link href="/signup">
            <Button size="lg" className="w-full md:w-auto">
              Start UKSSSC Preparation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
