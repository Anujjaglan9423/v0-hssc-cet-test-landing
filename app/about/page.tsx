import type { Metadata } from "next"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, Award, Target, CheckCircle, Star, FileText, Clock } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About CET TEST | Independent exam practice and study resources",
  description:
    "Learn how CET TEST creates practice tests and study resources for Haryana CET, HSSC, SSC, Railway, and related competitive exams.",
  keywords: [
    "About CET TEST platform",
    "Haryana CET 2026 preparation",
    "HSSC Group C and D mock tests",
    "HSSC Police Constable online practice",
    "best HSSC coaching in Haryana",
    "Free CET mock test site",
    "Haryana government job preparation",
    "SSC CGL free practice tests",
    "Railway NTPC RRB mock test series",
    "UKSSSC exam preparation online",
  ],
  alternates: {
    canonical: "https://cettest.site/about",
  },
  openGraph: {
    title: "About CET TEST - Empowering Aspirants for Haryana & Central Exams",
    description:
      "Learn about CET TEST's approach to independent exam practice, explanations, and study resources.",
    url: "https://cettest.site/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About CET TEST - India's #1 Free Exam Platform" }],
  },
}

const team = [
  {
    name: "Anuj Jaglan",
    role: "Founder & CEO",
    initials: "AJ",
  },
  {
    name: "Gaurav Joshi",
    role: "Co-Founder & CTO",
    initials: "GJ",
  },
]

const values = [
  {
    icon: Target,
    title: "Localized Excellence",
    description: "Specializing in Haryana state exams (HSSC) with deep-rooted regional expertise.",
  },
  {
    icon: Award,
    title: "Exam Realism",
    description: "Every mock test is calibrated to the latest 2026 NTA and HSSC exam patterns.",
  },
  {
    icon: Users,
    title: "Affordable Access",
    description: "Breaking the barrier of expensive coaching by providing free, high-quality test series.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <FooterLinkNavbar />

      {/* Hero Section - Optimized for Keyword Rich Content */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-3xl rounded-full opacity-30" />

        <div className="max-w-5xl mx-auto text-center relative z-10">

          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            🚀 Mock Tests for Haryana CET, SSC, Railway & UKSSSC
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Crack <span className="text-primary">Haryana CET, SSC & Railway Exams</span> <br />
            with Smart Practice
          </h1>

          {/* Subheading */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            CET TEST is your all-in-one platform to prepare for <strong>HSSC CET (Group C & D)</strong>,
            <strong> Haryana Police</strong>, <strong>SSC exams (CGL, CHSL, MTS)</strong>,
            <strong> Railway (RRB)</strong>, and <strong>UKSSSC exams</strong> with free mock tests,
            previous year questions, and real exam-level practice.
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-muted-foreground">
              <span>Haryana CET and HSSC resources</span>
            <span>SSC, RRB, and UKSSSC practice</span>
            <span>Explanations with test review</span>
            <span>Free resources are clearly labelled</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="cursor-pointer">
                Start Free Mock Test →
              </Button>
            </Link>

            <Link href="/mock-test">
              <Button variant="outline" size="lg" className="cursor-pointer">
                Explore All Exams
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Stats - Premium Look preserved */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-muted/30 border-y">
        <div className="max-w-6xl mx-auto">

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="mb-3 flex justify-center">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">Practice</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                Topic and full-length tests
              </div>
            </div>

            {/* Card 2 */}
            <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="mb-3 flex justify-center">
                <FileText className="w-7 h-7 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-1">1,000+</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                Free Mock Tests
              </div>
            </div>

            {/* Card 3 */}
            <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="mb-3 flex justify-center">
                <Star className="w-7 h-7 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold text-yellow-500 mb-1">Review</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                Learn from each attempt
              </div>
            </div>

            {/* Card 4 */}
            <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="mb-3 flex justify-center">
                <Clock className="w-7 h-7 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-1">2026</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                Pattern Updated
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our Commitment to Aspirants
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are dedicated to providing high-quality, reliable, and result-driven preparation resources
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden text-center"
              >

                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Team */}

      {/* Team - Updated to use Avatar component with only 2 members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">           <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
          <div className="flex justify-center gap-16">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us - Enhanced with SEO-focused points */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Why students use CET TEST for practice
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built around clear practice sessions, answer explanations, and honest performance review
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            {[
              { t: "Haryana State Specialization", d: "Comprehensive HSSC CET and Police Constable content." },
              { t: "Explanations for review", d: "Use answer explanations to identify concepts that need more revision." },
              { t: "Performance review", d: "Review accuracy, time, and unanswered questions after an attempt." },
              { t: "100% Free Resources", d: "Full-length mock tests at zero cost for all students." },
              { t: "Real Exam Interface", d: "Experience the actual CBT (Computer Based Test) environment." },
              { t: "Regular Updates", d: "Daily Current Affairs and latest 2026 vacancy notifications." },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 rounded-2xl border bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition">
                    {item.t}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.d}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <FooterLinkFooter />
    </div>
  )
}
