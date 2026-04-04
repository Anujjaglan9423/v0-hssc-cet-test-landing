import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, BookOpen, Users, Trophy, Target, Zap, HelpCircle, ChevronDown } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

// OPTIMIZED METADATA: Using high-volume keywords like "Sarkari Naukri", "Previous Year Papers", and "CET"
export const metadata: Metadata = {
  title: "Haryana Exam Mock Test 2026: HSSC CET, Police & Group D Free Test Series",
  description:
    "Ace Haryana Govt Exams with free mock tests for HSSC CET, Haryana Police Constable, Group C & D. Access previous year papers, HSSC syllabus-based practice sets, and detailed solutions. Start for free!",
  keywords: [
    "HSSC CET Mock Test 2026",
    "Haryana Police Constable Online Test Series",
    "HSSC Group D Free Mock Test",
    "Haryana GK Practice Set",
    "HSSC Previous Year Question Papers",
    "Haryana State Exam Preparation 2026",
    "Sarkari Result Haryana Exam Test",
    "HSSC CET Group C and D Exam preparation",
    "Haryana VDO Patwari Mock Test",
    "Free Haryana Government Exam Coaching Online",
  ],
  alternates: {
    canonical: "https://cettest.site/exams/haryana",
  },
  openGraph: {
    title: "Haryana Exams Mock Tests 2026 | HSSC CET, Police & Group D",
    description:
      "Boost your preparation with Haryana's #1 Mock Test platform. Unlimited free tests for HSSC CET, Police, and Group D exams.",
    url: "https://cettest.site/exams/haryana",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Haryana Exams Preparation 2026" }],
  },
}

export default function HaryanaExamsPage() {

  const exams = [
    {
      name: "HSSC CET (Group C & D)",
      description: "Complete preparation for Haryana Common Entrance Test with latest NTA pattern questions.",
      link: "/mock-test",
      features: ["50+ Full-Length Mocks", "NTA Pattern Based", "HSSC CET Previous Year Papers"]
    },
    {
      name: "Haryana Police Constable",
      description: "Targeted mock tests for Haryana Police recruitment including Physical & Written exam focus.",
      link: "/mock-test",
      features: ["Subject-wise Haryana GK", "Timed Mock Tests", "All India Rank Analysis"]
    },
    {
      name: "HSSC Group D",
      description: "Dedicated test series for upcoming HSSC Group D vacancies with 2026 updated syllabus.",
      link: "/mock-test",
      features: ["150+ Sectional Tests", "Focus on Science & Math", "Instant Scorecards"]
    },
    {
      name: "Haryana VDO & Patwari",
      description: "Practice sets for Village Development Officer and revenue department exams.",
      link: "/mock-test",
      features: ["Rural Development focus", "Advanced Math Practice", "Expert Recommended Content"]
    },
  ]

  const faqs = [
    {
      question: "Is the HSSC CET 2026 Mock Test Series free on this platform?",
      answer:
        "Yes! We provide a dedicated free test series for HSSC CET (Group C & D). Our platform is designed specifically for Haryana state aspirants to practice unlimited mock tests, previous year papers, and sectional quizzes without any hidden charges.",
    },
    {
      question: "How does CET TEST cover the Haryana GK and Current Affairs syllabus?",
      answer:
        "Our mock tests include a specialized 'Haryana GK' section covering Haryana History, Geography, Polity, and Welfare Schemes. We update our question bank weekly to include the latest Haryana-specific current affairs relevant for Police Constable and HSSC exams.",
    },
    {
      question: "Are these tests based on the latest NTA and HSSC exam patterns?",
      answer:
        "Absolutely. Every mock test mirrors the latest pattern set by the Haryana Staff Selection Commission (HSSC) and NTA. This includes the 95+5 marks distribution and specific weightage for Haryana-specific subjects.",
    },
    {
      question: "Can I practice HSSC Previous Year Question Papers for Group D and Police?",
      answer:
        "Yes, we have a curated repository of HSSC Previous Year Papers. You can solve them as 'Live Tests' to understand the difficulty level of past Haryana state exams and improve your time management.",
    },
    {
      question: "Does the platform provide All-India Rank (AIR) for Haryana aspirants?",
      answer:
        "After every test, you receive a detailed performance report. This includes your rank among thousands of other Haryana state exam aspirants, helping you understand where you stand in the actual competition.",
    },
    {
      question: "Is the content available in both Hindi and English?",
      answer:
        "Yes, keeping in mind the preference of Haryana candidates, our HSSC CET and Police Constable mock tests are available in a bilingual format (Hindi and English) to ensure a real exam-like experience.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <FooterLinkNavbar />

      {/* Hero Section: Optimized H1 with primary keywords */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            #1 Platform for HSSC Preparation
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Crack Haryana Govt Exams with <span className="text-primary">Free Mock Tests</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the most accurate HSSC CET Mock Test Series, Haryana Police Online Tests, and Previous Year Solved Papers for the 2026 session.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/exams/hssc-cet">
              <Button size="lg" className="cursor-pointer">
                Exam Overview
              </Button>
            </Link>
            <Link href="#categories">
              <Button variant="outline" size="lg" className="cursor-pointer">
                View All Exams
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Social Proof Section */}
      <section className="py-8 border-y bg-white/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4 text-center">
          <div><p className="text-2xl font-bold">10k+</p><p className="text-sm text-muted-foreground">Active Aspirants</p></div>
          <div><p className="text-2xl font-bold">500+</p><p className="text-sm text-muted-foreground">Mock Tests</p></div>
          <div><p className="text-2xl font-bold">Free</p><p className="text-sm text-muted-foreground">Study Material</p></div>
          <div><p className="text-2xl font-bold">2026</p><p className="text-sm text-muted-foreground">Updated Syllabus</p></div>
        </div>
      </section>

      {/* Exams Grid */}
      <section id="categories" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Explore Haryana Exam Series</h2>
            <p className="text-muted-foreground">Choose your target exam and start practicing with our curated test series.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exams.map((exam, idx) => (
              <div key={idx} className="group bg-background rounded-xl p-8 border hover:border-primary transition-all hover:shadow-xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{exam.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{exam.description}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {exam.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={exam.link}>
                  <Button className="w-full h-11 cursor-pointer" variant={exam.link === "#" ? "secondary" : "default"}>
                    {exam.link === "#" ? "Launching Soon" : "Start Free Mock Test"}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section: Why it's better than competitors */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Why Aspirants Trust Our HSSC Mock Tests?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Latest Exam Pattern</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Our content is designed by experts according to the latest NTA and HSSC notification updates.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Analytics</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Get detailed analysis of your speed, accuracy, and weak areas after every mock test.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Detailed Solutions</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Step-by-step explanations for every question to ensure you learn while you practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section: Crucial for SEO "People Also Ask" */}
      <section id="faq" className="py-20 bg-muted/30 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Haryana Govt Exams: <span className="text-primary">Common Doubts</span>
            </h2>
            <p className="text-lg text-muted-foreground">Expert answers for HSSC aspirants.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-border rounded-xl bg-card overflow-hidden transition-all"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-muted/50">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  {/* Custom arrow using CSS transition on group-open */}
                  <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                </summary>

                <div className="px-5 pb-6 text-muted-foreground leading-relaxed border-t border-dashed border-border pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Crack Your Haryana Exam?</h2>
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