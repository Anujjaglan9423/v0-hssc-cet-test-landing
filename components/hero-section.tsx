"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, CheckCircle2, Sparkles, BookOpen, Trophy } from "lucide-react"

import type { PublicSiteStats } from "@/lib/public-site-stats"
import type { DailyTopStudent } from "@/components/daily-top-students-popup"

type HeroStats = PublicSiteStats

export default function HeroSection({ stats, topStudents }: { stats: HeroStats; topStudents: DailyTopStudent[] }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0)
    return () => clearTimeout(timer)
  }, [])

  const features = [stats.questions !== null ? `${stats.questions.toLocaleString("en-IN")} Practice Questions` : "Practice Questions", stats.tests !== null ? `${stats.tests.toLocaleString("en-IN")} Practice Tests` : "Free Practice Tests", "Answer Reviews & Performance Analysis"]

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Practice with a clear study plan</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Practice for{" "}
              <span className="text-primary relative">
                Government Exams
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path
                    d="M2 10C50 4 150 4 198 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary/40"
                  />
                </svg>
              </span>{" "}
              with Confidence
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Use focused practice for Haryana CET, HSSC, SSC, Railway, and Uttarakhand exams. Choose a test, review every explanation, and use your results to decide what to study next.
            </p>

            {/* Features List */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 group animate-pulse-glow cursor-pointer"
                >
                  Start Practicing Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/mock-test">
                <Button size="lg" variant="outline" className="px-8 group border-border hover:bg-muted cursor-pointer bg-transparent">
                  <Zap className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Try Free Mock Test
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden flex-shrink-0">
                    <Image
                      src="/indian-student-avatar-.jpg"
                      alt="Student"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Built for independent exam preparation
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative">
              {/* Today&apos;s performance card */}
              <div className="bg-card rounded-3xl shadow-2xl border border-border p-6 relative z-10">
                <div className="rounded-2xl border border-primary/15 bg-primary/[0.03] p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-primary">Today&apos;s performance</p>
                      <h2 className="mt-1 text-2xl font-bold text-foreground">Top 3 performers</h2>
                      <p className="mt-1 text-sm text-muted-foreground">Correct questions from Test and Practice sections</p>
                    </div>
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-500">
                      <Trophy className="size-6" aria-hidden="true" />
                    </div>
                  </div>
                  {topStudents.length > 0 ? (
                    <div className="mt-6 space-y-3">
                      {topStudents.map((student, index) => (
                        <div key={`${student.name}-${index}`} className="flex items-center gap-3 rounded-2xl border bg-background/80 px-3 py-3">
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{index + 1}</span>
                          <p className="min-w-0 flex-1 truncate font-semibold text-foreground">{student.name}</p>
                          <p className="shrink-0 text-sm font-bold text-emerald-600 dark:text-emerald-400">{student.correctAnswers} correct</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6 rounded-2xl border border-dashed px-4 py-8 text-center text-sm text-muted-foreground">Top performers will appear after today&apos;s tests.</div>
                  )}
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl border border-border p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">Review</p>
                      <p className="text-sm text-muted-foreground">Answers reviewed</p>
                    </div>
                  </div>
                </div>

                {/* Floating Questions Card */}
                <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-xl border border-border p-4 animate-float-delay">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.questions === null ? "Free" : stats.questions.toLocaleString("en-IN")}</p>
                      <p className="text-sm text-muted-foreground">Questions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
