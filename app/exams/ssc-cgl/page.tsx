import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, FileText, Clock, BarChart3, GraduationCap, ShieldCheck, Briefcase, HelpCircle, Trophy } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

export const metadata: Metadata = {
  title: "SSC Exams 2026: Complete Guide, Syllabus & Free Mock Tests",
  description: "Explore detailed guides for all SSC exams including CGL, CHSL, MTS, GD, and CPO. Get the latest 2026 exam patterns, eligibility criteria, and free online practice tests. Start your preparation now!",
  keywords: [
    "SSC CGL 2026 exam details", "SSC CHSL syllabus 2026", "SSC MTS eligibility",
    "SSC GD Constable pattern", "SSC CPO SI recruitment", "Staff Selection Commission exams 2026",
    "Free SSC Mock Tests India", "SSC Previous Year Paper Solutions"
  ],
  alternates: { canonical: "https://cettest.site/exams/ssc" },
}

export default function AllSSCExamsPage() {
  const sscExamsDetail = [
    {
      name: "SSC CGL (Graduate Level)",
      description: "Recruitment for Group B & C Gazetted and Non-Gazetted posts in Central Ministries.",
      eligibility: "Bachelor's Degree in any discipline.",
      pattern: "Tier 1 (Qualifying MCQ) + Tier 2 (Mathematical, English, Reasoning, GA & Computer).",
      posts: "Income Tax Inspector, ASO, Excise Inspector, Auditor."
    },
    {
      name: "SSC CHSL (10+2 Level)",
      description: "Recruitment for clerical cadre positions in various government departments.",
      eligibility: "12th Standard Pass or equivalent.",
      pattern: "Tier 1 (Objective) + Tier 2 (Objective + Typing/Skill Test).",
      posts: "LDC, JSA, Data Entry Operator (DEO)."
    },
    {
      name: "SSC MTS & Havaldar",
      description: "General central service Group 'C' non-ministerial, non-gazetted posts.",
      eligibility: "10th Standard Pass (Matriculation).",
      pattern: "Computer Based Exam (Session 1: Quant/Reasoning, Session 2: GA/English).",
      posts: "Multi-Tasking Staff, Havaldar in CBIC & CBN."
    },
    {
      name: "SSC GD Constable",
      description: "Recruitment for Constables in CAPFs (BSF, CISF, ITBP, CRPF, SSB).",
      eligibility: "10th Standard Pass (Matriculation).",
      pattern: "CBE (Computer Based Exam) + PET/PST (Physical) + Medical.",
      posts: "Constable (GD) and Rifleman (Assam Rifles)."
    },
    {
      name: "SSC CPO (SI)",
      description: "Recruitment for Sub-Inspectors in Delhi Police and Central Armed Police Forces.",
      eligibility: "Bachelor's Degree + Physical Endurance.",
      pattern: "Paper I + Physical Test + Paper II (English) + Medical Examination.",
      posts: "Sub-Inspector in Delhi Police, BSF, CISF, CRPF."
    },
    {
      name: "SSC Stenographer",
      description: "Specialized recruitment for Stenographer Grade 'C' and 'D'.",
      eligibility: "12th Standard Pass + Stenography Skills.",
      pattern: "Computer Based Examination + Shorthand Skill Test.",
      posts: "Stenographers in various Central Ministries and Departments."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <FooterLinkNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SSC Exams <span className="text-primary">2026 Calendar</span> & Preparation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive details and free mock tests for every Staff Selection Commission recruitment in one place.
          </p>
          <Link href="/signup">
            <Button size="lg" className="cursor-pointer">
              Start Free Practice Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Exam Detail Cards Grid */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Explore SSC Exam Portfolios
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose your exam and get complete details with free mock test practice
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sscExamsDetail.map((exam, index) => (
              <div
                key={index}
                className="group relative flex flex-col p-6 rounded-2xl border bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >

                {/* Top Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold leading-tight group-hover:text-blue-600 transition">
                    {exam.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {exam.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-muted mb-6" />

                {/* Info Blocks */}
                <div className="space-y-5 mb-8">

                  <div className="flex gap-3 items-start">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase text-muted-foreground tracking-wider">
                        Eligibility
                      </p>
                      <p className="text-sm font-medium text-gray-800">
                        {exam.eligibility}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <FileText className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase text-muted-foreground tracking-wider">
                        Exam Pattern
                      </p>
                      <p className="text-sm font-medium text-gray-800">
                        {exam.pattern}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="p-2 bg-orange-50 rounded-lg">
                      <Briefcase className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase text-muted-foreground tracking-wider">
                        Key Posts
                      </p>
                      <p className="text-sm font-medium text-gray-800">
                        {exam.posts}
                      </p>
                    </div>
                  </div>

                </div>

                {/* CTA */}
                <Link href="/signup">
                  <Button
                    className="w-full font-semibold h-11 group-hover:scale-[1.02] transition"
                    variant="outline"
                  >
                    Practice {exam.name.split(" ")[1]} Mocks →
                  </Button>
                </Link>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-20 px-4 border-y">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <Trophy className="w-10 h-10 text-primary mx-auto mb-2" />
            <h4 className="text-2xl font-bold">10k+</h4>
            <p className="text-xs text-muted-foreground">Solved Questions</p>
          </div>
          <div>
            <Clock className="w-10 h-10 text-primary mx-auto mb-2" />
            <h4 className="text-2xl font-bold">Real-Time</h4>
            <p className="text-xs text-muted-foreground">Exam Simulation</p>
          </div>
          <div>
            <BarChart3 className="w-10 h-10 text-primary mx-auto mb-2" />
            <h4 className="text-2xl font-bold">Smart</h4>
            <p className="text-xs text-muted-foreground">Performance Reports</p>
          </div>
          <div>
            <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-2" />
            <h4 className="text-2xl font-bold">100%</h4>
            <p className="text-xs text-muted-foreground">Free Access</p>
          </div>
        </div>
      </section>

      {/* SEPARATE FAQ SECTION */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="w-12 h-12 text-primary/20 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">General SSC Preparation FAQs</h2>
            <p className="text-muted-foreground italic">Important information for Staff Selection Commission aspirants.</p>
          </div>

          <div className="grid gap-8">
            <div className="bg-muted/30 p-8 rounded-2xl border border-dashed">
              <h3 className="text-xl font-bold mb-3 text-primary">How many times can I attempt SSC exams?</h3>
              <p className="text-muted-foreground leading-relaxed">
                There is no restriction on the number of attempts for SSC exams like CGL, CHSL, or MTS, as long as you fall within the prescribed age limit for the specific post.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-2xl border border-dashed">
              <h3 className="text-xl font-bold mb-3 text-primary">Is there negative marking in SSC 2026 exams?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, most SSC exams have negative marking. In CGL Tier-1, it is typically 0.25 marks for every wrong answer, while in Tier-2, it varies by section. Always check the latest notification for specific changes.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-2xl border border-dashed">
              <h3 className="text-xl font-bold mb-3 text-primary">Are these mock tests updated for the 2026 pattern?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Absolutely. Our test series is updated as per the latest Staff Selection Commission guidelines. This includes the new Tier-2 pattern for CGL and the session-based scoring for MTS.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-2xl border border-dashed">
              <h3 className="text-xl font-bold mb-3 text-primary">How can I access SSC previous year papers?</h3>
              <p className="text-muted-foreground leading-relaxed">
                You can access solved previous year question papers directly from our dashboard. We provide them in a "Test Format" so you can practice them with a live timer to simulate real exam pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterLinkFooter />
    </main>
  )
}