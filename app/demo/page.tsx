"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  GraduationCap,
  ArrowRight,
  Clock,
  Target,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  BookOpen,
  Train,
  Mountain,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const examCategories = [
  {
    category: "Haryana Exams",
    categoryColor: "bg-orange-500/10 border-orange-200",
    categoryBadge: "bg-orange-100 text-orange-700",
    categoryLabel: "Priority #1",
    tests: [
      {
        id: "haryana-police",
        title: "Haryana Police Constable",
        description: "Practice test based on Haryana Police recruitment exam pattern",
        icon: Shield,
        color: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-500/10",
        textColor: "text-orange-500",
        questions: 10,
        duration: 10,
        difficulty: "Moderate",
        topics: ["General Knowledge", "Reasoning", "Math", "Hindi"],
      },
      {
        id: "haryana-cet",
        title: "Haryana CET",
        description: "Common Eligibility Test for Group C posts in Haryana",
        icon: GraduationCap,
        color: "from-amber-500 to-amber-600",
        bgColor: "bg-amber-500/10",
        textColor: "text-amber-500",
        questions: 10,
        duration: 10,
        difficulty: "Moderate",
        topics: ["Haryana GK", "Reasoning", "Quantitative Aptitude", "English/Hindi"],
      },
      {
        id: "haryana-group-d",
        title: "HSSSC Group D",
        description: "Mock test for HSSC Group D recruitment examination",
        icon: Users,
        color: "from-yellow-500 to-yellow-600",
        bgColor: "bg-yellow-500/10",
        textColor: "text-yellow-600",
        questions: 10,
        duration: 10,
        difficulty: "Easy",
        topics: ["General Awareness", "Haryana GK", "Basic Math", "Reasoning"],
      },
    ],
  },
  {
    category: "SSC Exams",
    categoryColor: "bg-blue-500/10 border-blue-200",
    categoryBadge: "bg-blue-100 text-blue-700",
    categoryLabel: "Priority #2",
    tests: [
      {
        id: "ssc-cgl",
        title: "SSC CGL",
        description: "Staff Selection Commission Combined Graduate Level exam",
        icon: BookOpen,
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-500/10",
        textColor: "text-blue-500",
        questions: 10,
        duration: 10,
        difficulty: "Hard",
        topics: ["Quantitative Aptitude", "Reasoning", "English", "General Awareness"],
      },
    ],
  },
  {
    category: "Railway Exams",
    categoryColor: "bg-green-500/10 border-green-200",
    categoryBadge: "bg-green-100 text-green-700",
    categoryLabel: "Priority #3",
    tests: [
      {
        id: "rrb-ntpc",
        title: "RRB NTPC",
        description: "Railway Recruitment Board Non-Technical Popular Categories exam",
        icon: Train,
        color: "from-green-500 to-green-600",
        bgColor: "bg-green-500/10",
        textColor: "text-green-500",
        questions: 10,
        duration: 10,
        difficulty: "Moderate",
        topics: ["Mathematics", "General Awareness", "Reasoning", "English"],
      },
    ],
  },
  {
    category: "UKSSSC Exams",
    categoryColor: "bg-purple-500/10 border-purple-200",
    categoryBadge: "bg-purple-100 text-purple-700",
    categoryLabel: "Priority #4",
    tests: [
      {
        id: "uksssc",
        title: "UKSSSC",
        description: "Uttarakhand Staff Selection Commission state exams",
        icon: Mountain,
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-500/10",
        textColor: "text-purple-500",
        questions: 10,
        duration: 10,
        difficulty: "Moderate",
        topics: ["Uttarakhand GK", "Mathematics", "Reasoning", "General Awareness"],
      },
    ],
  },
]

export default function DemoPage() {
  const router = useRouter()
  const [selectedTest, setSelectedTest] = useState<string | null>(null)

  const handleStartTest = (testId: string) => {
    router.push(`/demo/test/${testId}`)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Try Before You Sign Up</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Free Demo Tests</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Attempt one free demo test from each exam category — no login required. Experience our real exam pattern before signing up.
            </p>
          </div>

          {/* Exam Category Sections */}
          <div className="space-y-10">
            {examCategories.map((category) => (
              <div key={category.category} className={`rounded-xl border p-6 ${category.categoryColor}`}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
                  <Badge className={category.categoryBadge}>{category.categoryLabel}</Badge>
                </div>

                {/* Test Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.tests.map((test) => {
                    const Icon = test.icon
                    return (
                      <Card
                        key={test.id}
                        className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group bg-background ${
                          selectedTest === test.id ? "ring-2 ring-primary" : ""
                        }`}
                        onClick={() => setSelectedTest(test.id)}
                      >
                        <div className={`h-1.5 bg-gradient-to-r ${test.color}`} />
                        <div className="p-5 space-y-4">
                          {/* Icon & Title */}
                          <div className="flex items-start gap-3">
                            <div className={`w-12 h-12 rounded-xl ${test.bgColor} flex items-center justify-center flex-shrink-0`}>
                              <Icon className={`w-6 h-6 ${test.textColor}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-bold text-foreground leading-tight mb-1">{test.title}</h3>
                              <Badge variant="secondary" className="text-xs">{test.difficulty}</Badge>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground text-sm leading-relaxed">{test.description}</p>

                          {/* Stats */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-muted/50 rounded-lg p-2 text-center">
                              <Target className="w-4 h-4 text-primary mx-auto mb-1" />
                              <p className="text-base font-bold text-foreground">{test.questions}</p>
                              <p className="text-xs text-muted-foreground">Questions</p>
                            </div>
                            <div className="bg-muted/50 rounded-lg p-2 text-center">
                              <Clock className="w-4 h-4 text-primary mx-auto mb-1" />
                              <p className="text-base font-bold text-foreground">{test.duration}</p>
                              <p className="text-xs text-muted-foreground">Minutes</p>
                            </div>
                          </div>

                          {/* Topics */}
                          <div className="flex flex-wrap gap-1">
                            {test.topics.map((topic) => (
                              <span key={topic} className="px-2 py-0.5 bg-muted rounded-full text-xs text-muted-foreground">
                                {topic}
                              </span>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <Button
                            className={`w-full bg-gradient-to-r ${test.color} hover:opacity-90 text-white group-hover:shadow-lg transition-all`}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleStartTest(test.id)
                            }}
                          >
                            Start Demo Test
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">No Sign Up Required</h4>
                <p className="text-sm text-muted-foreground">Try demo tests without creating an account</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Real Exam Pattern</h4>
                <p className="text-sm text-muted-foreground">Questions based on actual exam patterns</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Detailed Analysis</h4>
                <p className="text-sm text-muted-foreground">Get comprehensive results after completion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
