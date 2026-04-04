import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, FileText, Clock, BarChart3, Train, Award, Zap, HelpCircle, GraduationCap, BookOpen, Users } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

export const metadata: Metadata = {
  title: "RRB NTPC, Group D, ALP & JE Mock Test 2026 | Free Railway Exam Prep",
  description:
    "Master Indian Railway exams with free mock tests for RRB NTPC, Group D, ALP, and JE. Updated 2026 exam patterns, previous year solved papers, and CBT Stage 1 & 2 practice sets. Start free now!",
  keywords: [
    "RRB NTPC mock test 2026",
    "Railway Group D free online test",
    "RRB ALP Technician practice set",
    "RRB JE exam preparation 2026",
    "Railway Recruitment Board solved papers",
    "RRB NTPC CBT 1 and 2 syllabus",
    "Indian Railways job preparation",
    "Free Railway test series 2026",
  ],
  alternates: {
    canonical: "https://cettest.site/exams/railway-rrb-ntpc",
  },
}

export default function RRBNTPCPage() {
  const railwayExams = [
    {
      name: "RRB NTPC (Non-Technical)",
      posts: "Station Master, Goods Guard, CA, TA, Senior Clerk, Typist.",
      eligibility: "Undergraduate (12th) or Graduate degree from a recognized university.",
      pattern: "CBT Stage 1 (Screening) → CBT Stage 2 (Merit) → Typing/Skill Test → DV.",
      subjects: "General Awareness (40/50 Qs), Maths, General Intelligence & Reasoning."
    },
    {
      name: "RRB Group D (Level 1)",
      posts: "Track Maintainer Grade IV, Helper/Assistant in various departments.",
      eligibility: "10th Pass or ITI from institutions recognized by NCVT/SCVT.",
      pattern: "Computer Based Test (Single Stage) → Physical Efficiency Test (PET) → DV.",
      subjects: "General Science, Maths, Reasoning, General Awareness & Current Affairs."
    },
    {
      name: "RRB ALP & Technician",
      posts: "Assistant Loco Pilot (ALP) and Various Technician Grade III roles.",
      eligibility: "Matriculation + ITI / Course Completed Act Apprentices / Diploma / B.E / B.Tech.",
      pattern: "First Stage CBT → Second Stage CBT (Part A & B) → CBAT (Psychometric for ALP).",
      subjects: "Maths, Reasoning, Basic Science & Engineering, General Awareness, Trade Test."
    },
    {
      name: "RRB JE (Junior Engineer)",
      posts: "Junior Engineer (JE), JE (IT), Depot Material Superintendent (DMS).",
      eligibility: "Diploma or Degree in Civil/Mechanical/Electrical/Electronics Engineering.",
      pattern: "CBT Stage 1 (Non-Technical) → CBT Stage 2 (Technical Abilities & General Science).",
      subjects: "Non-Tech (CBT-1), Technical Subject, Physics, Chemistry, Basics of Computer & Environment."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <FooterLinkNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Train className="w-3 h-3" /> 2026 RAILWAY RECRUITMENT CALENDAR
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Indian Railway <span className="text-primary">RRB Mock Tests</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Unlimited free mock tests for NTPC, Group D, ALP, and JE. Practice with the latest CBT interface and previous year solved papers.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup">
              <Button size="lg" className="gap-2 cursor-pointer">
                <CheckCircle2 className="w-5 h-5" />
                Start Free Mock Test
              </Button>
            </Link>
            <Link href="#exam-sections">
              <Button variant="outline" size="lg" className="cursor-pointer">
                Explore All Exams
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30 border-y">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition text-center">
              <div className="mb-3 flex justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-blue-600 mb-1">50k+</h4>
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">
                Active Aspirants
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition text-center">
              <div className="mb-3 flex justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-green-600 mb-1">100%</h4>
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">
                Latest Pattern
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition text-center">
              <div className="mb-3 flex justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-purple-600 mb-1">Bilingual</h4>
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">
                Hindi & English
              </p>
            </div>

            {/* Card 4 */}
            <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition text-center">
              <div className="mb-3 flex justify-center">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="text-2xl font-bold text-orange-600 mb-1">Solved</h4>
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">
                Previous Papers
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Exam-Specific Detailed Sections (SEO Powerhouse) */}
      <section
        id="exam-sections"
        className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30"
      >
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete RRB Exam Coverage
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose your Railway exam and get complete details with free mock test practice
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {railwayExams.map((exam, index) => (
              <div
                key={index}
                className="group relative flex flex-col p-8 rounded-3xl border bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >

                {/* Gradient Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-blue-600 transition">
                    {exam.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="space-y-6 flex-grow">

                  {/* Target Posts */}
                  <div>
                    <h4 className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Zap className="w-3 h-3" /> Target Posts
                    </h4>
                    <p className="text-sm text-gray-700">{exam.posts}</p>
                  </div>

                  {/* Grid Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div>
                      <h4 className="text-[11px] font-semibold text-green-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <GraduationCap className="w-3 h-3" /> Eligibility
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {exam.eligibility}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-semibold text-purple-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <FileText className="w-3 h-3" /> Exam Pattern
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {exam.pattern}
                      </p>
                    </div>

                  </div>

                  {/* Syllabus Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-muted/40 to-muted/20 border border-dashed">
                    <h4 className="text-[11px] font-semibold uppercase tracking-widest mb-2 text-muted-foreground">
                      Syllabus Breakdown
                    </h4>
                    <p className="text-xs text-gray-600 italic">
                      {exam.subjects}
                    </p>
                  </div>

                </div>

                {/* CTA */}
                <Link href="/signup" className="mt-8">
                  <Button
                    className="w-full h-12 font-semibold group-hover:scale-[1.02] transition"
                    variant={index === 0 ? "default" : "outline"}
                  >
                    Start {exam.name.split(" ")[1]} Free Mock →
                  </Button>
                </Link>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-primary/20 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="grid gap-4">
            <div className="p-6 bg-background rounded-2xl border">
              <h4 className="font-bold text-lg mb-2">What is the age limit for RRB NTPC 2026?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">For Undergraduate posts, the age limit is usually 18-30 years. For Graduate posts, it is 18-33 years. Age relaxations apply for SC/ST/OBC and other categories as per government rules.</p>
            </div>
            <div className="p-6 bg-background rounded-2xl border">
              <h4 className="font-bold text-lg mb-2">How many languages are RRB exams conducted in?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">RRB CBT exams are conducted in 15 languages, including Hindi, English, Assamese, Bengali, Gujarati, Kannada, Konkani, Malayalam, Manipuri, Marathi, Odia, Punjabi, Tamil, Telugu, and Urdu.</p>
            </div>
            <div className="p-6 bg-background rounded-2xl border">
              <h4 className="font-bold text-lg mb-2">Can I attempt the mock tests multiple times?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Yes! Our platform allows unlimited attempts for mock tests so you can improve your speed and accuracy by practicing until you reach 100% mastery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
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