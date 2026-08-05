"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Users, BookOpen } from "lucide-react"

export default function ExamPrepHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const exams = ["HSSC CET", "SSC CHSL", "Railway", "Banking"]

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 via-background to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">
                INDIA&apos;S #1 EXAM PREP PLATFORM
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance tracking-tight">
                Ace Your
                <br />
                <span className="bg-gradient-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent">
                  Competitive Exam
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                10,000+ questions • Real exam patterns • AI-powered insights • Join 50K+ successful students
              </p>
            </div>

            {/* Exam Selector */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">Choose Your Target Exam</p>
              <div className="flex flex-wrap gap-2">
                {exams.map((exam) => (
                  <Link key={exam} href="/tests">
                    <button className="px-4 py-2 rounded-lg font-medium border-2 border-primary/30 hover:border-primary bg-primary/5 text-foreground hover:bg-primary/10 transition-all">
                      {exam}
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/30 text-white px-8 h-14 text-base font-semibold group transition-all cursor-pointer"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/tests">
                <Button className="px-8 h-14 text-base font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/5 cursor-pointer bg-transparent group rounded-lg transition-all text-foreground">
                  <Zap className="w-4 h-4 mr-2 inline" />
                  Try Mock Test
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <p className="text-2xl font-black text-primary">50K+</p>
                <p className="text-xs text-muted-foreground font-medium">Students</p>
              </div>
              <div>
                <p className="text-2xl font-black text-accent">10K+</p>
                <p className="text-xs text-muted-foreground font-medium">Questions</p>
              </div>
              <div>
                <p className="text-2xl font-black text-purple-600">98%</p>
                <p className="text-xs text-muted-foreground font-medium">Success</p>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="bg-card rounded-3xl shadow-2xl border border-border/50 p-8 backdrop-blur-sm">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-border/30">
                <div>
                  <p className="text-xs text-muted-foreground font-bold mb-1">MOCK TEST</p>
                  <h3 className="text-xl font-bold text-foreground">HSSC CET 2024</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-1">Questions</p>
                  <p className="text-2xl font-bold text-primary">100</p>
                </div>
              </div>

              {/* Mock Test Preview */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">Your Attempt</span>
                  <span className="text-2xl font-bold text-green-600">74/100</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-600" style={{ width: "74%" }} />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Passing Score: 60</span>
                  <span className="text-green-600 font-semibold">✓ Passed</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Time</p>
                  <p className="font-bold text-foreground">45 min</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Rank</p>
                  <p className="font-bold text-foreground">#147</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Correct</p>
                  <p className="font-bold text-green-600">74</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Accuracy</p>
                  <p className="font-bold text-foreground">82%</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Link href="/tests" className="block">
                  <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                    View Solutions
                  </button>
                </Link>
                <Link href="/tests" className="block">
                  <button className="w-full px-4 py-2 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
                    Take Another Test
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
