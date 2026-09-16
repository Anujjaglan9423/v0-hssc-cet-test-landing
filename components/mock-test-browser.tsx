"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Loader2, ChevronRight, BookOpen, GraduationCap, AlertCircle, Lock, FileText, Clock, Play, ArrowLeft, Target, Users, Eye, Award, BarChart3, TrendingUp, Zap, Sparkles, HelpCircle, PlayCircle, Unlock, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"

const categoryIcons: Record<string, React.ReactNode> = {
  haryana: <GraduationCap className="w-8 h-8" />,
  ssc: <BookOpen className="w-8 h-8" />,
}

const categoryColors: Record<string, string> = {
  haryana: "from-blue-500 to-blue-700",
  ssc: "from-green-500 to-green-700",
}

const defaultCategories = [
  {
    id: "haryana",
    name: "Haryana Exams",
    slug: "haryana",
    description: "CET, Police, Group D, and more",
  },
  {
    id: "ssc",
    name: "SSC Exams",
    slug: "ssc",
    description: "CGL, CHSL, MTS, and more",
  },
]

function ExamSectionCard({ exam, onClick }: { exam: any; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group w-full text-left cursor-pointer"
    >
      <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary/50 h-full flex flex-col">
        {/* Top Color Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary to-primary/60" />

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-foreground mb-2 text-center">
            {exam.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-center">
            {exam.description || "Mock tests available"}
          </p>

          {/* Test Info */}
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mb-5 pt-2 border-t">
            <div className="flex items-center gap-1">
              <FileText className="w-3 h-3" />
              <span>{exam.totalTests} Tests</span>
            </div>
            <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
              <Unlock className="w-3 h-3" />
              <span>{exam.freeTests} Free</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="w-full gap-2 cursor-pointer bg-primary hover:bg-primary/90 group-hover:shadow-md transition-all mt-auto">
            <PlayCircle className="w-4 h-4" />
            Start Free Test
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </div>

  )
}

function TestCard({ test, isFree, isTestTaken }: { test: any; isFree: boolean; isTestTaken: boolean }) {
  const router = useRouter()

  const handleTestClick = () => {
    if (isFree) {
      router.push(`/mock-test-attempt/${test.id}`)
    } else {
      router.push("/signup")
    }
  }

  // Difficulty color mapping
  const difficultyColors = {
    Easy: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    Moderate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    Difficult: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
  }

  const difficulty = test.difficulty || "Moderate"

  return (
    <div className="group relative w-full">
      {/* Premium Overlay - only visible on hover for locked tests */}
      {!isFree && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 backdrop-blur-0 group-hover:backdrop-blur-sm rounded-2xl transition-all duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex flex-col items-center gap-3 p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-white font-semibold">Sign up to take this test</p>
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                handleTestClick()
              }}
              className="bg-white text-black hover:bg-gray-200 shadow-lg cursor-pointer"
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      )}

      {/* Card */}
      <div className={`rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col ${isFree
        ? "hover:border-primary/50 group-hover:-translate-y-1"
        : "opacity-90 group-hover:opacity-100"
        }`}>

        {/* Top Color Bar */}
        <div className={`h-1.5 w-full ${isFree
          ? "bg-gradient-to-r from-green-500 to-green-600"
          : "bg-gradient-to-r from-amber-500 to-amber-600"
          }`} />

        {/* Badge */}
        <div className="absolute top-3 right-3">
          {isFree && !isTestTaken && (
            <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full flex items-center gap-1 font-medium">
              <Unlock className="w-3 h-3" />
              Free
            </span>
          )}
          {isTestTaken && isFree && (
            <span className="text-xs bg-green-500 text-white px-2.5 py-1 rounded-full flex items-center gap-1 font-medium">
              <CheckCircle className="w-3 h-3" />
              Completed
            </span>
          )}
          {!isFree && (
            <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2.5 py-1 rounded-full flex items-center gap-1 font-medium">
              <Lock className="w-3 h-3" />
              Premium
            </span>
          )}
        </div>

        {/* Icon Section */}
        <div className="pt-8 pb-3 flex justify-center">
          <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${isFree
            ? "bg-green-100 dark:bg-green-900/30 text-green-600 group-hover:bg-green-200 dark:group-hover:bg-green-800/50"
            : "bg-amber-100 dark:bg-amber-900/30 text-amber-600"
            }`}>
            {isTestTaken ? (
              <CheckCircle className="w-8 h-8" />
            ) : (
              <FileText className="w-8 h-8" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-foreground mb-2 text-center line-clamp-2 group-hover:text-primary transition-colors">
            {test.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-center line-clamp-2">
            {test.description || "Practice with real exam-level questions and detailed solutions."}
          </p>

          {/* Test Details Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">{test.total_questions} Questions</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">{test.duration} Minutes</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">+{test.marks_per_question || 1} / -{test.negative_marking || 0.25}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-muted-foreground" />
              <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColors[difficulty as keyof typeof difficultyColors]}`}>
                {difficulty}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          {isFree ? (
            <Button
              onClick={handleTestClick}
              disabled={isTestTaken}
              className={`w-full gap-2 cursor-pointer mt-auto ${isTestTaken
                ? "bg-muted hover:bg-muted text-muted-foreground"
                : "bg-primary hover:bg-primary/90 group-hover:shadow-md"
                } transition-all`}
            >
              {isTestTaken ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Test Completed
                </>
              ) : (
                <>
                  <PlayCircle className="w-4 h-4" />
                  Start Free Mock
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={handleTestClick}
              variant="outline"
              className="w-full gap-2 cursor-pointer bg-transparent border-amber-500/50 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:border-amber-500 transition-all mt-auto"
            >
              <Lock className="w-4 h-4" />
              Unlock Premium Test
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function MockTestPage() {
  const router = useRouter()
  const [categories, setCategories] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedExam, setSelectedExam] = useState<string | null>(null)
  const [examSections, setExamSections] = useState<any[]>([])
  const [tests, setTests] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mockTestsTaken, setMockTestsTaken] = useState<Record<string, string>>({})
  const stats = [
    { label: "Exam Categories", value: "4+", icon: <BookOpen className="w-4 h-4" /> },
    { label: "Mock Tests", value: "100+", icon: <Target className="w-4 h-4" /> },
    { label: "Practice Questions", value: "10000+", icon: <Sparkles className="w-4 h-4" /> },
    { label: "Free Access", value: "Unlimited", icon: <Award className="w-4 h-4" /> }
  ]
  // Load categories
  useEffect(() => {
    let isMounted = true

    async function loadCategories() {
      setIsLoading(true)
      setError(null)

      try {
        const { data, error: err } = await supabase
          .from("exam_categories")
          .select("*")
          .eq("is_active", true)
          .order("display_order")

        if (!isMounted) return

        if (err) throw err

        if (data && data.length > 0) {
          setCategories(data)
        } else {
          setCategories(defaultCategories)
        }
      } catch (err: any) {
        if (err?.name === "AbortError" || !isMounted) {
          return
        }
        console.error("[v0] Error loading categories:", err)
        if (isMounted) {
          setError("Failed to load categories")
          setCategories(defaultCategories)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadCategories()

    // Load mock tests history
    try {
      const history = localStorage.getItem("mock_tests_taken")
      if (history && isMounted) {
        setMockTestsTaken(JSON.parse(history))
      }
    } catch (error) {
      console.error("[v0] Error loading mock tests history:", error)
    }

    return () => {
      isMounted = false
    }
  }, [])

  // Load exam sections when category is selected
  useEffect(() => {
    if (!selectedCategory) return

    let isMounted = true

    async function loadExamSections() {
      setIsLoading(true)
      try {
        const { data: catData, error: catError } = await supabase
          .from("exam_categories")
          .select("*")
          .eq("slug", selectedCategory)
          .single()

        if (!isMounted) return
        if (catError) throw catError

        // Get exams for this category (these are the sections like CET, Police, etc.)
        const { data: examsData, error: examsError } = await supabase
          .from("exams")
          .select("id, name, slug, description")
          .eq("category_id", catData.id)
          .order("display_order")

        if (!isMounted) return
        if (examsError) throw examsError

        setExamSections(examsData || [])
      } catch (error: any) {
        if (error?.name === "AbortError" || !isMounted) {
          return
        }
        console.error("[v0] Error loading exam sections:", error)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadExamSections()

    return () => {
      isMounted = false
    }
  }, [selectedCategory])

  // Load tests when exam section is selected
  useEffect(() => {
    if (!selectedExam) return

    let isMounted = true

    async function loadTests() {
      setIsLoading(true)
      try {
        const { data: testsData, error: testsError } = await supabase
          .from("tests")
          .select("id, title, duration, total_questions")
          .eq("exam_id", selectedExam)
          .order("created_at")

        if (!isMounted) return
        if (testsError) throw testsError

        setTests(testsData || [])
      } catch (error: any) {
        if (error?.name === "AbortError" || !isMounted) {
          return
        }
        console.error("[v0] Error loading tests:", error)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadTests()

    return () => {
      isMounted = false
    }
  }, [selectedExam])

  if (isLoading && !selectedCategory) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  // Level 1: Category Selection
  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-background">
        <FooterLinkNavbar />

        {/* Hero Section */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Free Access • No Signup Required
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Try Free
              <span className="text-primary"> Mock Tests</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Experience real exam-level mock tests for
              <strong className="text-foreground"> HSSC, UKSSSC, Teaching, and other state exams</strong> — completely free
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                  {stat.icon}
                  <span>{stat.label}: <strong>{stat.value}</strong></span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/current-affairs">
                <Button size="lg" className="cursor-pointer gap-2 bg-primary hover:bg-primary/90">
                  Current Affairs <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline" size="lg" className="cursor-pointer gap-2">
                  <Target className="w-4 h-4" />
                  Create Account for Full Access
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className=" px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Glass Card */}
              <div className="relative bg-gradient-to-br from-primary/5 to-background backdrop-blur-2xl border border-primary/20 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-xl">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Zap className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <p className="font-semibold text-foreground mb-1 text-base sm:text-lg">
                    How It Works
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Select a category, choose an exam section (CET, Police, Group D, etc.), and start instantly.
                    You can attempt one free mock test per section without signup.
                    Locked tests reveal unlock options on hover. Create a free account for unlimited access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Error Message */}
        {error && (
          <section className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">{error}</p>
              </div>
            </div>
          </section>
        )}

        {/* Categories Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                <Target className="w-4 h-4" />
                Choose Your Exam
              </div>
              <h2 className="text-3xl font-bold mb-4">Select an <span className="text-primary">Exam Category</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click on any category to start your free mock test. Experience real exam-like questions with timer and detailed solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
              {categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className="group w-full text-left cursor-pointer"
                >
                  <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary/50">
                    {/* Top Color Bar */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-primary to-primary/60" />

                    {/* Icon Section */}
                    <div className="pt-8 pb-4 flex justify-center">
                      <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300">
                        {categoryIcons[category.slug] || <BookOpen className="w-9 h-9" />}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 text-center">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {category.description}
                      </p>


                      {/* CTA Button */}
                      <Button className="w-full gap-2 cursor-pointer bg-primary hover:bg-primary/90 group-hover:shadow-md transition-all">
                        Practice Mocks
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                <Award className="w-4 h-4" />
                Why Choose Our Mock Tests?
              </div>
              <h2 className="text-3xl font-bold mb-4">Features That <span className="text-primary">Set Us Apart</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our mock tests are designed to simulate the real exam experience and help you prepare effectively
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-5 border hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Exam-Specific Content</h3>
                <p className="text-sm text-muted-foreground">Tests designed as per latest exam patterns and syllabus of HSSC, UKSSSC, and other state exams.</p>
              </div>
              <div className="bg-card rounded-xl p-5 border hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Real-Time Timer</h3>
                <p className="text-sm text-muted-foreground">Experience actual exam pressure with on-screen timer and time management tracking.</p>
              </div>
              <div className="bg-card rounded-xl p-5 border hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Detailed Solutions</h3>
                <p className="text-sm text-muted-foreground">Get step-by-step explanations for every question to understand concepts better.</p>
              </div>
              <div className="bg-card rounded-xl p-5 border hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Performance Analysis</h3>
                <p className="text-sm text-muted-foreground">Track your progress with detailed scorecards and identify weak areas.</p>
              </div>
              <div className="bg-card rounded-xl p-5 border hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Rank Predictions</h3>
                <p className="text-sm text-muted-foreground">Compare your performance with other aspirants and get estimated rank.</p>
              </div>
              <div className="bg-card rounded-xl p-5 border hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Mobile Friendly</h3>
                <p className="text-sm text-muted-foreground">Attempt tests on any device - desktop, tablet, or mobile with responsive design.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials / Trust Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
              <Users className="w-4 h-4" />
              Trusted By Aspirants
            </div>
            <h2 className="text-2xl font-bold mb-6">Join Thousands of Successful Candidates</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-xs text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-xs text-muted-foreground">Mock Tests</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary">4.8</div>
                <div className="text-xs text-muted-foreground">Avg. Rating</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Free Access</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                <HelpCircle className="w-4 h-4" />
                Frequently Asked Questions
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Common Questions About Mock Tests</h2>
              <p className="text-muted-foreground">Everything you need to know about our free mock tests</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Do I need to sign up to attempt a mock test?",
                  a: "You can attempt one free mock test per section without signup. For unlimited access to all tests and features, you'll need to create a free account."
                },
                {
                  q: "Are these mock tests based on the latest exam pattern?",
                  a: "Yes, all our mock tests are designed as per the latest exam patterns and syllabi of HSSC, UKSSSC, and other state government exams."
                },
                {
                  q: "Will I get solutions after completing the test?",
                  a: "Yes, after submitting your test, you'll get detailed solutions and explanations for every question to help you understand the concepts."
                },
                {
                  q: "Can I attempt the same test multiple times?",
                  a: "Yes, after creating a free account, you can attempt any test multiple times to improve your score and track your progress."
                },
                {
                  q: "Are the mock tests available in Hindi language?",
                  a: "Yes, our mock tests are available in both English and Hindi languages. You can choose your preferred language before starting the test."
                }
              ].map((faq, idx) => (
                <div key={idx} className="rounded-xl border bg-card p-5">
                  <h3 className="font-semibold text-base md:text-lg mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Ready to Start Your Preparation?</h2>
            <p className="text-muted-foreground mb-5">
              Create a free account to unlock all mock tests, track your progress, and get detailed performance analysis
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="gap-2 cursor-pointer">
                  Create Free Account <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/current-affairs">
                <Button variant="outline" size="lg" className="cursor-pointer" >
                  Current Affairs
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Footer */}
        <section className="py-8 px-4 bg-muted/30 border-t">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-lg font-semibold mb-2">Free Mock Tests for HSSC, UKSSSC & State Exams</h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Access free mock tests for Haryana CET, Police Constable, UKSSSC VDO, Teaching exams, and more.
              Practice with real exam-level questions, get detailed solutions, and track your performance.
              Start your preparation today with our free mock test series.
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              © 2026 CET TEST | Free mock tests for government exam preparation | All rights reserved
            </p>
          </div>
        </section>

        <FooterLinkFooter />
      </div>

    )
  }

  const currentCategory = categories.find((c) => c.slug === selectedCategory)

  // Level 2: Exam Sections (CET, Police, Group D, etc.)
  if (!selectedExam) {
    return (
      <div className="min-h-screen bg-background">
        <FooterLinkNavbar />

        <div className="w-full min-h-screen bg-background pt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-6 lg:space-y-8">
            {/* Header with Back Button */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() => {
                  setSelectedCategory(null)
                  setExamSections([])
                }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm sm:text-base">Back to Categories</span>
              </button>
            </div>

            {/* Category Title */}
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                {currentCategory?.name}
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl mx-auto">
                {currentCategory?.description}
              </p>
            </div>

            {/* Info Card */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-5 flex items-start gap-3 mx-auto">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary font-semibold text-xs">i</span>
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Select an Exam Section</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Choose a section below to view all available tests. Get <strong>one free mock test per section</strong> without signup.
                  Create a free account for unlimited access to all tests.
                </p>
              </div>
            </div>

            {/* Loading State */}
            {isLoading ? (
              <div className="flex items-center justify-center min-h-[40vh] lg:min-h-[60vh]">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              /* Exam Sections Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 my-10">
                {examSections.map((exam) => (
                  <ExamSectionCard
                    key={exam.id}
                    exam={exam}
                    onClick={() => setSelectedExam(exam.id)}
                  />
                ))}
              </div>
            )}

            {/* Empty State */}
            {!isLoading && examSections.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <FileText className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Tests Available</h3>
                <p className="text-muted-foreground mb-6">
                  Tests for this category are coming soon. Please check back later.
                </p>
                <Button onClick={() => {
                  setSelectedCategory(null)
                  setExamSections([])
                }} variant="outline" className="cursor-pointer">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Categories
                </Button>
              </div>
            )}
          </div>
        </div>

        <FooterLinkFooter />
      </div>
    )
  }

  // Level 3: Tests for selected exam section
  const currentExam = examSections.find((e) => e.id === selectedExam)

  return (
    <div className="min-h-screen bg-background">
      <FooterLinkNavbar />

      <div className="w-full min-h-screen bg-background py-24 pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6 lg:space-y-8">
          {/* Header with Back Button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              onClick={() => setSelectedExam(null)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm sm:text-base">Back to Sections</span>
            </button>
          </div>

          {/* Exam Title */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              {currentExam?.name}
            </h1>
            {currentExam?.description && (
              <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl mx-auto">
                {currentExam?.description}
              </p>
            )}
          </div>

          {/* Info Card */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-5 flex items-start gap-3 mx-auto">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary font-semibold text-xs">i</span>
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Free Test Per Section</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                The first test is <strong>free</strong> for all users. Hover over locked tests to see signup option.
                Additional tests are available after <Link href="/signup" className="text-primary hover:underline">signing up</Link>.
              </p>
            </div>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="flex items-center justify-center min-h-[40vh] lg:min-h-[60vh]">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : tests.length === 0 ? (
            /* Empty State */
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <FileText className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Tests Available</h3>
              <p className="text-muted-foreground mb-6">
                Tests for this section are coming soon. Please check back later.
              </p>
              <Button onClick={() => setSelectedExam(null)} variant="outline" className="cursor-pointer">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sections
              </Button>
            </div>
          ) : (
            /* Tests Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {tests.map((test, index) => (
                <TestCard
                  key={test.id}
                  test={test}
                  isFree={index === 0}
                  isTestTaken={index === 0 && !!mockTestsTaken[`${selectedCategory}-${currentExam?.slug}`]}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <FooterLinkFooter />
    </div>

  )
}
