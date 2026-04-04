import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, BookOpen, Users, Trophy } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

export const metadata: Metadata = {
  title: "UKSSSC Mock Tests 2026 | Uttarakhand State Exams - VDO, Patwari, Forest Guard Free Online",
  description:
    "Prepare for UKSSSC 2026 exams with unlimited free mock tests for VDO, Patwari, Forest Guard, Police & all Uttarakhand state exams. Previous year papers, topic-wise practice & instant results. Start free now!",
  keywords: [
    "UKSSSC mock test 2026",
    "Uttarakhand state exam free test",
    "UKSSSC exam preparation 2026",
    "UK VDO mock test 2026",
    "Uttarakhand Patwari mock test",
    "UKSSSC Forest Guard test series",
    "Uttarakhand Group C exam practice",
    "UKSSSC previous year papers",
    "Uttarakhand govt job exam 2026",
    "UKSSSC syllabus 2026",
    "UKSSSC exam pattern 2026",
    "Uttarakhand staff selection commission test",
    "UK Lekhpal mock test",
    "Uttarakhand Police Constable test",
    "UKSSSC free practice test",
  ],
  alternates: {
    canonical: "https://cettest.site/exams/uksssc",
  },
  openGraph: {
    title: "UKSSSC Mock Tests 2026 | Uttarakhand State Exams - Free Online",
    description:
      "Crack UKSSSC 2026 with unlimited free mock tests for VDO, Patwari, Forest Guard, Police & all Uttarakhand state exams. Previous year papers & instant results.",
    url: "https://cettest.site/exams/uksssc",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UKSSSC Mock Test 2026 - Free Uttarakhand Exam Practice" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UKSSSC Mock Tests 2026 | Uttarakhand State Exams",
    description: "Unlimited free UKSSSC mock tests with instant results & previous year papers. Start now!",
    images: ["/og-image.png"],
  },
}

export default function UKSSCSPage() {
  const exams = [
    {
      name: "UK VDO",
      description: "Village Development Officer recruitment in Uttarakhand",
      link: "/mock-test",
      features: ["100+ Mock Tests", "Previous Year Papers", "Subject-wise Practice"]
    },
    {
      name: "Patwari / Lekhpal",
      description: "Land record and revenue department positions",
      link: "/mock-test",
      features: ["Timed Practice Tests", "Detailed Solutions", "Performance Analytics"]
    },
    {
      name: "Forest Guard",
      description: "Uttarakhand forest department recruitment",
      link: "#",
      features: ["Full Mock Tests", "Real Exam Pattern", "Topic-wise Practice"]
    },
    {
      name: "Uttarakhand Police Constable",
      description: "Police recruitment in Uttarakhand",
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
            Uttarakhand State Exams Preparation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master all UKSSSC exams with unlimited free mock tests, previous year papers, and detailed performance analytics
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
          <h2 className="text-3xl font-bold mb-12 text-center">Uttarakhand UKSSSC Exam Categories</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose CET TEST for UKSSSC Preparation?</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Crack Your UKSSSC Exam?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of students and start your free preparation today</p>
          <Link href="/signup">
            <Button size="lg" variant="secondary">
              Start Practicing for Free
            </Button>
          </Link>
        </div>
      </section>
      <FooterLinkFooter />
    </main>
  )
}
