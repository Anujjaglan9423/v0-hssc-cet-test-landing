import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, BookOpen, Clock, Target, Trophy, AlertCircle, ChevronRight } from "lucide-react"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "HSSC CET Exam Guide 2024-2025 | Preparation Tips & Strategy | CET TEST",
  description:
    "Complete HSSC CET exam guide with syllabus, exam pattern, preparation strategy, and study tips. Learn how to prepare for Haryana Staff Selection Commission CET exam with expert guidance and free mock tests.",
  keywords:
    "HSSC CET exam guide, HSSC CET syllabus, HSSC CET exam pattern, HSSC CET preparation tips, HSSC CET strategy, CET exam preparation guide, Haryana HSSC CET",
}

export default function HSSSCCETGuidePage() {
  const sections = [
    {
      id: 1,
      title: "HSSC CET Exam Overview",
      description: "Understanding the Haryana Staff Selection Commission Common Eligibility Test",
      content: `The HSSC CET (Common Eligibility Test) is a preliminary screening exam conducted by Haryana Staff Selection Commission for recruitment to various government jobs in Haryana. It's the first step to secure positions like Haryana Police, Group D, and other state-level positions.`,
    },
    {
      id: 2,
      title: "HSSC CET Exam Pattern",
      description: "Complete exam structure and marking scheme",
      content: `The HSSC CET exam typically includes:
- Total Questions: 90
- Duration: 90 minutes
- Question Type: Multiple Choice Questions (MCQs)
- Subjects: General Awareness, General Intelligence, Numerical Ability
- Negative Marking: 0.25 marks for each wrong answer`,
    },
    {
      id: 3,
      title: "HSSC CET Syllabus",
      description: "Detailed syllabus breakdown for CET examination",
      content: `Key topics covered in HSSC CET:
- General Awareness: Current affairs, Geography, History, Politics, Science
- General Intelligence: Reasoning, Verbal & Non-verbal abilities
- Numerical Ability: Arithmetic, Algebra, Geometry
- English: Comprehension, Grammar, Vocabulary`,
    },
    {
      id: 4,
      title: "Preparation Strategy",
      description: "Effective study plan for HSSC CET success",
      content: `Follow these steps:
1. Study the complete syllabus thoroughly
2. Practice with free mock tests daily
3. Focus on weak areas and improve them
4. Solve previous year question papers
5. Maintain consistency in studies
6. Take regular mock tests to assess progress`,
    },
  ]

  const tips = [
    "Start preparation 3-4 months before the exam",
    "Create a study schedule and stick to it",
    "Practice at least 10 mock tests before exam",
    "Analyze your performance after each test",
    "Focus on accuracy rather than speed",
    "Stay updated with current affairs",
    "Take regular breaks to avoid burnout",
    "Maintain a healthy diet and sleep schedule",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                CET <span className="text-primary">TEST</span>
              </span>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Complete Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            HSSC CET Exam Guide 2024-2025
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Everything you need to know about preparing for the Haryana Staff Selection Commission Common Eligibility Test. Learn the exam pattern, syllabus, and proven preparation strategies.
          </p>
          <Link href="/mock-test">
            <Button size="lg" className="gap-2">
              <Play className="w-4 h-4" />
              Start Free Mock Test
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Information Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Key Information</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Total Questions</h3>
                <p className="text-3xl font-bold text-primary">90</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-3xl font-bold text-primary">90 Min</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Max Marks</h3>
                <p className="text-3xl font-bold text-primary">90</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Negative Marking</h3>
                <p className="text-3xl font-bold text-primary">0.25</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Comprehensive Guide</h2>
            {sections.map((section) => (
              <div key={section.id} className="mb-12 last:mb-0">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">{section.id}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{section.title}</h3>
                    <p className="text-muted-foreground">{section.description}</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed whitespace-pre-line ml-14 bg-muted/50 p-6 rounded-lg">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Expert Preparation Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-4 p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Ace Your HSSC CET Exam?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Start practicing with our free mock tests designed specifically for HSSC CET exam pattern. Get detailed solutions, performance analytics, and expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/mock-test">
              <Button size="lg" className="gap-2">
                <Play className="w-4 h-4" />
                Start Free Mock Test
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline">
                Sign Up for Premium
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Import the Play icon
import { Play } from "lucide-react"
