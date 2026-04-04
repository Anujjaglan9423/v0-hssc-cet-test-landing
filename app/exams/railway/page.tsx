import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, BookOpen, Users, Trophy } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

export const metadata: Metadata = {
  title: "Railway Exams Mock Tests 2026 | RRB NTPC, Group D Free Online Practice Tests",
  description:
    "Prepare for Railway exams with unlimited free mock tests for RRB NTPC, Group D, ALP and more. Previous year papers, CBT stages, topic-wise practice & instant results. Start free preparation now!",
  keywords: [
    "RRB NTPC mock test 2026",
    "Railway Group D exam preparation",
    "RRB exam free online test",
    "Railway recruitment board practice",
    "RRB NTPC CBT Stage 1 2 test",
    "Indian Railways mock test",
    "RRB ALP exam preparation",
    "Railway exam previous year papers",
    "RRB test series 2026",
    "free railway exam practice India",
  ],
  alternates: {
    canonical: "https://cettest.site/exams/railway",
  },
  openGraph: {
    title: "Railway Exams Mock Tests 2026 | RRB NTPC, Group D",
    description:
      "Free mock tests for all Railway exams (RRB NTPC, Group D, ALP). Unlimited practice with detailed analytics and previous year papers.",
    url: "https://cettest.site/exams/railway",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Railway Exams Mock Tests - Free Online Preparation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Railway Exams Mock Tests 2026 | RRB NTPC, Group D",
    description: "Free mock tests for all Railway exams with instant results.",
    images: ["/og-image.png"],
  },
}

export default function RailwayExamsPage() {
  const exams = [
    {
      name: "RRB NTPC",
      description: "Non-Technical Popular Categories - Railway recruitment exam",
      link: "/mock-test",
      features: ["CBT Stage 1 & 2 Tests", "100+ Mock Tests", "Previous Year Papers"]
    },
    {
      name: "RRB Group D",
      description: "Group D and unskilled worker positions in Indian Railways",
      link: "#",
      features: ["Timed Practice Tests", "Detailed Solutions", "Performance Analytics"]
    },
    {
      name: "RRB ALP",
      description: "Assistant Loco Pilot recruitment examination",
      link: "/mock-test",
      features: ["Full Mock Tests", "Real Exam Pattern", "Technical Questions"]
    },
    {
      name: "RRB Technician",
      description: "Railway technician and skilled worker positions",
      link: "#",
      features: ["Comprehensive Coverage", "Expert Explanations", "Instant Results"]
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <FooterLinkNavbar />
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Railway Exams Preparation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master all Railway exams with unlimited free mock tests, previous year papers, and detailed performance analytics
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup">
              <Button size="lg" className="gap-2 cursor-pointer">
                <CheckCircle2 className="w-5 h-5" />
                Start Free Test Now
              </Button>
            </Link>
            <Link href="/exams/railway-rrb-ntpc">
              <Button variant="outline" size="lg" className="cursor-pointer">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Railway Exam Categories</h2>
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
                  <Button className="w-full cursor-pointer">
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose CET TEST for Railway Exams?</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Crack Your Railway Exam?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of students and start your free preparation today</p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="cursor-pointer">
              Start Practicing for Free
            </Button>
          </Link>
        </div>
      </section>
      <FooterLinkFooter />
    </main>
  )
}
