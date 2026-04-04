import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, FileText, Clock, BarChart3, ChevronDown, HelpCircle, Target } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

// SEO OPTIMIZATION: Metadata with high-intent localized keywords
export const metadata: Metadata = {
  title: "HSSC CET Mock Test 2026 | Free Haryana CET Group C & D Practice Sets",
  description:
    "Boost your score in HSSC CET 2026! Access free mock tests for Haryana CET Group C and D. Includes NTA pattern questions, Haryana GK, previous year solved papers, and detailed analytics. Start for free!",
  keywords: [
    "HSSC CET Mock Test 2026",
    "Haryana CET Group C Mock Test",
    "HSSC CET Group D Free Online Test",
    "NTA HSSC CET Exam Pattern",
    "Haryana CET Previous Year Papers with Solutions",
    "HSSC CET Haryana GK Questions",
    "Free Haryana CET Practice Set 2026",
    "Sarkari Result Haryana CET Prep",
    "HSSC CET Online Test Series Hindi",
    "Haryana Staff Selection Commission CET Preparation",
  ],
  alternates: {
    canonical: "https://cettest.site/exams/hssc-cet",
  },
  openGraph: {
    title: "HSSC CET Mock Test 2026 | Free Haryana CET Online Practice",
    description: "Crack HSSC CET 2026 with NTA-based mock tests, Haryana GK sets & previous year papers.",
    url: "https://cettest.site/exams/hssc-cet",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "HSSC CET 2026 Preparation" }],
  },
}

export default function HSCSCETPage() {
  const faqs = [
    {
      q: "Is the HSSC CET Mock Test based on the NTA pattern?",
      a: "Yes, all our HSSC CET practice sets follow the latest NTA (National Testing Agency) pattern, focusing on the 95+5 marks distribution and specified syllabus weightage."
    },
    {
      q: "Does this include Haryana GK and Current Affairs?",
      a: "Absolutely. Our HSSC CET mock tests include dedicated sections for Haryana History, Geography, Polity, and monthly Haryana Current Affairs."
    },
    {
      q: "Can I access HSSC CET Group D previous year papers?",
      a: "Yes, we provide solved previous year question papers for both HSSC CET Group C and Group D exams to help you understand the difficulty level."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <FooterLinkNavbar />

      {/* Hero Section: Keyword-rich H1 */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Updated for 2026 NTA Pattern
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Free <span className="text-primary">HSSC CET Mock Test</span> 2026
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Prepare for Haryana CET Group C & D with unlimited free practice tests,
            solved previous year papers, and expert-curated Haryana GK sets.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/demo">
              <Button size="lg" className="gap-2 cursor-pointer">
                <CheckCircle2 className="w-5 h-5" />
                Start Free Mock Test
              </Button>
            </Link>
            <Link href="#exam-details">
              <Button variant="outline" size="lg" className="cursor-pointer">
                Exam Overview
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-muted/30 border-y">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Why Choose Our Mock Tests?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Designed for serious Haryana CET aspirants with real exam-level experience
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="group relative p-6 rounded-2xl border bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition">
                <FileText className="w-7 h-7 text-blue-600" />
              </div>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition">
                10,000+ Questions
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Extensive question bank covering Haryana GK, Maths, and Reasoning topics.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative p-6 rounded-2xl border bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-green-50 group-hover:bg-green-100 transition">
                <Target className="w-7 h-7 text-green-600" />
              </div>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition">
                NTA Level Mocks
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Practice questions designed to match the real NTA exam difficulty level.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative p-6 rounded-2xl border bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-purple-50 group-hover:bg-purple-100 transition">
                <BarChart3 className="w-7 h-7 text-purple-600" />
              </div>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition">
                Rank Analysis
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Compare your performance with other aspirants and track your progress.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group relative p-6 rounded-2xl border bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-orange-50 group-hover:bg-orange-100 transition">
                <Clock className="w-7 h-7 text-orange-600" />
              </div>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-600 transition">
                Live Timer
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Simulate real exam conditions and improve your speed & accuracy.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Exam Details Section: Structured for Google Snippets */}
      <section id="exam-details" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              HSSC CET 2026 Exam Pattern & Syllabus
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understand the latest exam pattern and syllabus to boost your preparation strategy
            </p>
          </div>

          {/* Pattern Card */}
          <div className="mb-14 rounded-2xl border bg-white shadow-sm overflow-hidden">

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 font-semibold text-gray-800">
              Exam Pattern Overview
            </div>

            {/* Rows */}
            <div className="divide-y">

              {[
                ["Conducting Body", "HSSC (via NTA)"],
                ["Total Questions", "100 Questions"],
                ["Total Marks", "100 (OMR Based)"],
                ["Duration", "90 Minutes"],
                ["Negative Marking", "No (All 5 options compulsory)"],
              ].map(([label, value], i) => (
                <div key={i} className="grid grid-cols-2 px-6 py-4 hover:bg-muted/30 transition">
                  <span className="text-sm font-medium text-gray-600">{label}</span>
                  <span className="text-sm font-semibold text-gray-900">{value}</span>
                </div>
              ))}

            </div>
          </div>

          {/* Syllabus + CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Syllabus */}
            <div className="p-6 rounded-2xl border bg-white shadow-sm">

              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <CheckCircle2 className="text-green-600 w-5 h-5" />
                Syllabus Focus
              </h3>

              <ul className="space-y-4 text-sm text-gray-700">

                <li>
                  <strong>Haryana GK:</strong> History, Culture, Welfare Schemes (25%)
                </li>

                <li>
                  <strong>General Awareness:</strong> India GK & Current Affairs
                </li>

                <li>
                  <strong>Reasoning & Math:</strong> Quantitative Aptitude
                </li>

                <li>
                  <strong>Languages:</strong> English & Hindi Grammar
                </li>

                <li>
                  <strong>Computers:</strong> Basic Fundamentals
                </li>

              </ul>
            </div>

            {/* CTA Card */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl flex flex-col justify-between">

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-white/10 blur-2xl opacity-20 rounded-2xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">
                  Ready to Test Your Knowledge?
                </h3>

                <p className="text-sm mb-6 opacity-90">
                  Join thousands of aspirants practicing daily for HSSC CET 2026.
                </p>
              </div>

              <Link href="/signup" className="relative z-10">
                <Button className="w-full h-12 text-base font-semibold bg-white text-blue-600 hover:bg-gray-100">
                  Create Free Account →
                </Button>
              </Link>

            </div>

          </div>

        </div>
      </section>
      {/* NO-JS FAQ SECTION: SEO Optimized and Server-Side Compatible */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">HSSC CET FAQs</h2>
            <p className="text-muted-foreground">Common queries from Haryana state exam aspirants.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group border rounded-xl bg-background overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-muted/50">
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-6 text-muted-foreground border-t pt-4 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FooterLinkFooter />
    </main>
  )
}