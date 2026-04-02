import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Users, Trophy, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "All Exams Preparation | SSC, Railway, Haryana, Uttarakhand Free Mock Tests",
  description:
    "Prepare for all exams with unlimited free mock tests. SSC, Railway, Haryana HSSC, and Uttarakhand UKSSSC exams. Start your free preparation now!",
  keywords: [
    "free mock tests",
    "exam preparation",
    "SSC exams",
    "Railway exams",
    "Haryana exams",
    "Uttarakhand exams",
  ],
}

export default function ExamsPage() {
  const examCategories = [
    {
      name: "SSC Exams",
      description: "Staff Selection Commission - CGL, CHSL, MTS, JE and other SSC recruitment exams",
      link: "/exams/ssc",
      icon: "📊",
      color: "from-blue-500/10 to-blue-500/5",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      gradient: "bg-gradient-to-br from-blue-500/10 to-blue-500/5"
    },
    {
      name: "Railway Exams",
      description: "Indian Railways Recruitment - RRB NTPC, JE, ASM, Group D and other RRB exams",
      link: "/exams/railway",
      icon: "🚂",
      color: "from-red-500/10 to-red-500/5",
      textColor: "text-red-600",
      borderColor: "border-red-200",
      gradient: "bg-gradient-to-br from-red-500/10 to-red-500/5"
    },
    {
      name: "Haryana Exams",
      description: "HSSC CET, HTET, Haryana Police, and other state-level recruitment exams",
      link: "/exams/haryana",
      icon: "🏛️",
      color: "from-green-500/10 to-green-500/5",
      textColor: "text-green-600",
      borderColor: "border-green-200",
      gradient: "bg-gradient-to-br from-green-500/10 to-green-500/5"
    },
    {
      name: "Uttarakhand Exams",
      description: "UKSSSC VDO, Patwari, Police, and other Uttarakhand state exams",
      link: "/exams/uksssc",
      icon: "🏔️",
      color: "from-purple-500/10 to-purple-500/5",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      gradient: "bg-gradient-to-br from-purple-500/10 to-purple-500/5"
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50 pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="text-5xl">🎯</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Complete Exam Preparation Hub
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Prepare for every government exam with unlimited free mock tests, previous year papers, and comprehensive study materials
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                <Trophy className="w-5 h-5" />
                Start Your Preparation
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Exam Categories Grid */}
      <section id="exams" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Choose Your Exam</h2>
          <p className="text-center text-muted-foreground mb-12">Select the exam category you want to prepare for</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examCategories.map((exam, idx) => (
              <Link key={idx} href={exam.link}>
                <div className={`${exam.gradient} rounded-lg p-8 border ${exam.borderColor} hover:shadow-lg transition-all duration-300 h-full cursor-pointer group`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl mb-2">{exam.icon}</div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${exam.textColor}`}>{exam.name}</h3>
                  <p className="text-muted-foreground mb-6">{exam.description}</p>
                  <Button className="w-full" variant="secondary">
                    Explore Tests
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose CET TEST?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-background rounded-lg p-6 border text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">100,000+ Questions</h3>
              <p className="text-sm text-muted-foreground">Comprehensive question bank covering all topics</p>
            </div>
            <div className="bg-background rounded-lg p-6 border text-center">
              <Trophy className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">95% Success Rate</h3>
              <p className="text-sm text-muted-foreground">Thousands of students cleared their exams</p>
            </div>
            <div className="bg-background rounded-lg p-6 border text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p className="text-sm text-muted-foreground">Get help from experienced educators</p>
            </div>
            <div className="bg-background rounded-lg p-6 border text-center">
              <span className="text-3xl mb-3 block">✨</span>
              <h3 className="font-semibold mb-2">100% Free</h3>
              <p className="text-sm text-muted-foreground">No hidden charges, forever free</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary text-primary-foreground rounded-lg p-12 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500K+</div>
                <p className="text-lg opacity-90">Active Students</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">10M+</div>
                <p className="text-lg opacity-90">Tests Completed</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">4</div>
                <p className="text-lg opacity-90">Exam Categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Exam Preparation?</h2>
          <p className="text-lg text-muted-foreground mb-8">Join thousands of successful candidates who prepared with CET TEST</p>
          <Link href="/signup">
            <Button size="lg" className="gap-2">
              <span>Create Free Account</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
