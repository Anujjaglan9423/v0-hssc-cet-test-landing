import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, BookOpen, Users, Trophy, ChevronDown, HelpCircle, Star } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

export const metadata: Metadata = {
  title: "SSC Mock Test 2026 | Free SSC CGL, CHSL, MTS & GD Online Practice Tests",
  description:
    "Crack SSC CGL, CHSL, MTS, and GD exams with 2026's best free mock test series. Access previous year question papers, daily current affairs, and subject-wise practice sets. Start your Staff Selection Commission preparation for free!",
  keywords: [
    "SSC CGL mock test 2026",
    "SSC CHSL free online test series",
    "SSC MTS exam preparation 2026",
    "SSC GD Constable practice set",
    "Staff Selection Commission previous year papers",
    "SSC CGL Tier 1 Tier 2 online coaching",
    "SSC Stenographer mock test",
    "best free website for SSC preparation",
    "SSC exam syllabus and pattern 2026",
    "SSC CPO mock test series",
  ],
  alternates: {
    canonical: "https://cettest.site/exams/ssc",
  },
  openGraph: {
    title: "SSC Exams Mock Tests 2026 | Free CGL, CHSL, MTS Practice",
    description: "Prepare for all SSC exams with 50,000+ questions, detailed solutions, and All-India Ranking.",
    url: "https://cettest.site/exams/ssc",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SSC Exams Free Mock Test Series" }],
  },
}

export default function SSCExamsPage() {
  const exams = [
    {
      name: "SSC CGL 2026",
      description: "Combined Graduate Level - Target Assistant Section Officer & Income Tax Inspector posts.",
      link: "/mock-test",
      features: ["Latest Tier 1 & 2 Pattern", "Quantitative Aptitude Specials", "English Comprehension Sets"]
    },
    {
      name: "SSC CHSL (10+2)",
      description: "Combined Higher Secondary Level for LDC, JSA, and Data Entry Operator roles.",
      link: "#",
      features: ["Updated Reasoning Logic", "Daily General Awareness", "Typing Test Guidelines"]
    },
    {
      name: "SSC MTS & Havaldar",
      description: "Multi-Tasking Staff recruitment focusing on session-based scoring patterns.",
      link: "#",
      features: ["Numerical Ability Practice", "General Awareness focus", "Multi-lingual Support"]
    },
    {
      name: "SSC GD Constable",
      description: "General Duty Constable preparation for CAPFs, SSF, and Rifleman positions.",
      link: "#",
      features: ["Elementary Mathematics", "Hindi/English Grammar", "Physical Standard Info"]
    },
  ]

  const faqs = [
    {
      q: "Are the SSC Mock Tests on CET TEST free?",
      a: "Yes, we provide 100% free access to SSC CGL, CHSL, and MTS mock tests. You can practice full-length mocks and sectional tests without any subscription."
    },
    {
      q: "Do you provide SSC Previous Year Papers (PYP)?",
      a: "Yes, we offer solved previous year question papers for SSC exams from 2018 to 2025 to help you understand the actual exam difficulty."
    },
    {
      q: "Is the content updated for the 2026 SSC Calendar?",
      a: "Absolutely. Our question bank is updated according to the latest Staff Selection Commission calendar and exam patterns for the 2026 cycle."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <FooterLinkNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
            <Star className="w-3 h-3 fill-primary" /> SSC 2026 PREP HUB
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Crack SSC Exams with <span className="text-primary">Free Mock Tests</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your one-stop destination for SSC CGL, CHSL, MTS, and GD preparation. Access 50,000+ NTA-standard questions and real exam simulations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/exams/ssc-cgl">
              <Button size="lg" className="gap-2 cursor-pointer shadow-lg">
                <CheckCircle2 className="w-5 h-5" />
                Exam Overview
              </Button>
            </Link>
            <Link href="#ssc-faqs">
              <Button variant="outline" size="lg" className="cursor-pointer">
                View Exam FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              SSC Exam Categories
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose your target SSC exam and start practicing with real exam-level mock tests
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exams.map((exam, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl border bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >

                {/* Top Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                    Popular
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-600 transition">
                  {exam.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {exam.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-muted mb-5" />

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {exam.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100">
                        <CheckCircle2 className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link href={exam.link}>
                  <Button
                    className="w-full h-11 text-sm font-semibold group-hover:scale-[1.02] transition"
                    variant={exam.link === "#" ? "secondary" : "default"}
                  >
                    {exam.link === "#" ? "Launching Soon" : "Start Practicing Now →"}
                  </Button>
                </Link>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Structured Content for SEO */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-5xl mx-auto text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            SSC Exam Preparation 2026 – Complete Overview
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Staff Selection Commission (SSC) conducts some of the most popular government exams in India.
            Prepare for SSC CGL, CHSL, and MTS with free mock tests, previous year questions, and detailed solutions.
          </p>

        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CGL */}
          <div className="group p-6 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300">
            <div className="mb-4">
              <span className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                Graduate Level
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
              SSC CGL
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              Combined Graduate Level exam for top government posts in ministries and departments.
            </p>

            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✔ Quantitative Aptitude</li>
              <li>✔ General Awareness</li>
              <li>✔ Reasoning Ability</li>
              <li>✔ English Language</li>
            </ul>
          </div>

          {/* CHSL */}
          <div className="group p-6 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300">
            <div className="mb-4">
              <span className="text-xs font-medium bg-green-50 text-green-600 px-3 py-1 rounded-full">
                10+2 Level
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600">
              SSC CHSL
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              Popular exam for clerical posts like LDC, DEO, and Postal Assistants.
            </p>

            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✔ Speed-based test</li>
              <li>✔ Reasoning & GK</li>
              <li>✔ English & Quant</li>
              <li>✔ Typing Skill Test</li>
            </ul>
          </div>

          {/* MTS */}
          <div className="group p-6 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300">
            <div className="mb-4">
              <span className="text-xs font-medium bg-purple-50 text-purple-600 px-3 py-1 rounded-full">
                10th Pass
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600">
              SSC MTS
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              Entry-level government job with high competition and simple syllabus.
            </p>

            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✔ Basic GK</li>
              <li>✔ Reasoning</li>
              <li>✔ Maths</li>
              <li>✔ High competition</li>
            </ul>
          </div>

        </div>

        {/* Bottom SEO Text */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-muted-foreground">
            Start your SSC preparation with free online mock tests and improve your accuracy, speed, and exam confidence.
            Practice regularly to crack SSC exams in 2026.
          </p>
        </div>
      </section>

      {/* No-JS FAQ Section (SEO POWERHOUSE) */}
      <section id="ssc-faqs" className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Get instant answers to your SSC prep queries</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group border border-border rounded-xl bg-card overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-muted/50">
                  <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-6 text-muted-foreground leading-relaxed border-t border-dashed pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Aspirants Choose CET TEST</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Trophy className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">95% Success Rate</h3>
              <p className="text-sm text-muted-foreground">Strategic preparation leads to real results.</p>
            </div>
            <div>
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">All SSC Topics</h3>
              <p className="text-sm text-muted-foreground">English, Quant, Reasoning, and General Awareness.</p>
            </div>
            <div>
              <Users className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Community Support</h3>
              <p className="text-sm text-muted-foreground">Join 50,000+ students on the path to success.</p>
            </div>
            <div>
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Updated for 2026</h3>
              <p className="text-sm text-muted-foreground">Always in sync with the latest SSC Calendar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-2xl p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your SSC Journey Today</h2>
          <p className="text-lg mb-8 opacity-90">Unlock 10,000+ free questions and detailed performance analytics.</p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="cursor-pointer font-bold px-8">
              Access All Mock Tests Now
            </Button>
          </Link>
        </div>
      </section>

      <FooterLinkFooter />
    </main>
  )
}