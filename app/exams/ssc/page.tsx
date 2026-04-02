import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, BookOpen, Users, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "SSC Exams Mock Tests 2026 | SSC CGL, CHSL, MTS Free Online Practice Tests",
  description:
    "Prepare for all SSC exams with unlimited free mock tests for CGL, CHSL, MTS and more. Previous year papers, updated syllabus, topic-wise practice & instant results. Start free preparation 2026!",
  keywords: [
    "SSC CGL mock test 2026",
    "SSC CHSL free online test",
    "SSC MTS exam preparation",
    "Staff Selection Commission mock test",
    "SSC CGL Tier 1 Tier 2 test",
    "SSC exam practice questions",
    "SSC previous year papers",
    "SSC test series 2026",
    "free SSC exam preparation India",
    "SSC CHSL MTS CGL online test",
  ],
  alternates: {
    canonical: "https://cettest.site/exams/ssc",
  },
  openGraph: {
    title: "SSC Exams Mock Tests 2026 | SSC CGL, CHSL, MTS",
    description:
      "Free mock tests for all SSC exams (CGL, CHSL, MTS). Unlimited practice with detailed analytics and previous year papers.",
    url: "https://cettest.site/exams/ssc",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SSC Exams Mock Tests - Free Online Preparation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSC Exams Mock Tests 2026 | CGL, CHSL, MTS",
    description: "Free mock tests for all SSC exams with instant results.",
    images: ["/og-image.png"],
  },
}

export default function SSCExamsPage() {
  const exams = [
    {
      name: "SSC CGL",
      description: "Combined Graduate Level - Group B & C central government positions",
      link: "/exams/ssc-cgl",
      features: ["Tier 1 & 2 Tests", "100+ Mock Tests", "Previous Year Papers"]
    },
    {
      name: "SSC CHSL",
      description: "Combined Higher Secondary Level recruitment exam",
      link: "#",
      features: ["Timed Practice Tests", "Detailed Solutions", "Performance Analytics"]
    },
    {
      name: "SSC MTS",
      description: "Multi-Tasking Staff recruitment exam",
      link: "#",
      features: ["Full Mock Tests", "Real Exam Pattern", "Topic-wise Practice"]
    },
    {
      name: "SSC JE",
      description: "Junior Engineer positions in various departments",
      link: "#",
      features: ["Technical Questions", "Expert Explanations", "Instant Results"]
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SSC Exams Preparation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master all SSC exams with unlimited free mock tests, previous year papers, and detailed performance analytics
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Start Free Test Now
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">SSC Exam Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exams.map((exam, idx) => (
              <div key={idx} className="bg-background rounded-lg p-6 border hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-2">{exam.name}</h3>
                  <p className="text-muted-foreground">{exam.description}</p>
                </div>
                <div className="space-y-2 mb-6">
                  {exam.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={exam.link}>
                  <Button className="w-full">
                    {exam.link === "#" ? "Coming Soon" : "Start Practicing"}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose CET TEST for SSC Exams?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Trophy className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">95% Success Rate</h3>
              <p className="text-sm text-muted-foreground">Join thousands of successful candidates</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">50,000+ Questions</h3>
              <p className="text-sm text-muted-foreground">Comprehensive question bank coverage</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p className="text-sm text-muted-foreground">Get help when you need it</p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">100% Free</h3>
              <p className="text-sm text-muted-foreground">No hidden charges ever</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Crack Your SSC Exam?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of students and start your free preparation today</p>
          <Link href="/signup">
            <Button size="lg" variant="secondary">
              Start Practicing for Free
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
