import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, BookOpen, Users, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "Haryana Exams Mock Tests 2026 | HSSC CET, Police, HSSSC Group D Free Online Tests",
  description:
    "Prepare for Haryana government exams with free mock tests for HSSC CET, HSSC Police Constable, HSSSC Group D and more. Unlimited practice tests, previous year papers & instant results. Start free today!",
  keywords: [
    "Haryana exam mock test 2026",
    "HSSC CET free online test",
    "Haryana Police Constable mock test",
    "HSSSC Group D exam preparation",
    "Haryana government job exams",
    "HSSC exam mock test series",
    "Haryana sarkari naukri preparation",
    "HSSC CET CHSL Police Group D tests",
    "Haryana state exam 2026",
    "free Haryana government exam preparation",
  ],
  alternates: {
    canonical: "https://cettest.site/exams/haryana",
  },
  openGraph: {
    title: "Haryana Exams Mock Tests 2026 | HSSC CET, Police, HSSSC Group D",
    description:
      "Free mock tests for Haryana HSSC CET, Police Constable, HSSSC Group D and all state exams. Practice unlimited tests with detailed analytics.",
    url: "https://cettest.site/exams/haryana",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Haryana Exams Mock Tests - Free Online Preparation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haryana Exams Mock Tests 2026 | HSSC CET, Police, HSSSC",
    description: "Free mock tests for all Haryana government exams with instant results.",
    images: ["/og-image.png"],
  },
}

export default function HaryanaExamsPage() {
  const exams = [
    {
      name: "HSSC CET",
      description: "Combined Entrance Test for various Group B & C positions",
      link: "/exams/hssc-cet",
      features: ["100+ Mock Tests", "Previous Year Papers", "Subject-wise Practice"]
    },
    {
      name: "HSSC Police Constable",
      description: "Haryana Police recruitment exam preparation",
      link: "#",
      features: ["Timed Tests", "Detailed Solutions", "Performance Analytics"]
    },
    {
      name: "HSSSC Group D",
      description: "Group D positions in various Haryana departments",
      link: "#",
      features: ["100+ Questions", "Real Exam Pattern", "Instant Results"]
    },
    {
      name: "Haryana VDO/Patwari",
      description: "Village Development Officer and Lekhpal exams",
      link: "#",
      features: ["Comprehensive Syllabus", "Topic-wise Tests", "Expert Solutions"]
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Haryana Government Exams Preparation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master all Haryana exams with unlimited free mock tests, previous year papers, and detailed performance analytics
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
          <h2 className="text-3xl font-bold mb-12 text-center">Haryana Exam Categories</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose CET TEST for Haryana Exams?</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Crack Your Haryana Exam?</h2>
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
