"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Loader2, ChevronRight, BookOpen, GraduationCap, AlertCircle, Lock, FileText, Clock, Play, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

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
    <button onClick={onClick} className="group">
      <Card className="cursor-pointer overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
        <div className="relative h-32 bg-gradient-to-br from-primary/20 to-primary/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-8 h-8" />
            </div>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
            {exam.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{exam.description || "Mock tests available"}</p>
          <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
            View Tests
            <ChevronRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </button>
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

  return (
    <Card className={`group border-2 overflow-hidden transition-all duration-300 ${isFree
      ? "hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
      : "hover:shadow-xl"
      }`}>
      <CardContent className="p-5 relative h-full">
        {/* Blur overlay for locked tests - only visible on hover */}
        {!isFree && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center rounded-lg">
            <div className="flex flex-col items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Lock className="w-8 h-8 text-white" />
              <p className="text-sm text-white font-semibold text-center px-2">Sign up to take this test</p>
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  handleTestClick()
                }}
                className="bg-white text-black hover:bg-gray-200"
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}

        <div className="flex items-start justify-between mb-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/20 text-primary">
            <FileText className="w-6 h-6" />
          </div>
          {isFree && !isTestTaken && (
            <Badge variant="secondary" className="bg-green-500/20 text-green-600 border-green-500/30">
              Free
            </Badge>
          )}
          {isTestTaken && isFree && (
            <Badge className="bg-green-500 text-white">Completed</Badge>
          )}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {test.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            {test.total_questions} Qs
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {test.duration} min
          </span>
        </div>

        {isFree ? (
          <Button
            onClick={handleTestClick}
            disabled={isTestTaken}
            className="w-full gap-2"
          >
            <Play className="w-4 h-4" />
            {isTestTaken ? "Test Completed" : "Start Free Mock"}
          </Button>
        ) : (
          <Button
            onClick={handleTestClick}
            variant="outline"
            className="w-full gap-2 bg-transparent"
          >
            <Lock className="w-4 h-4" />
            Unlock
          </Button>
        )}
      </CardContent>
    </Card>
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
      <><FooterLinkNavbar /><div className="w-full min-h-screen bg-background py-24 pt-32 px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto space-y-6 lg:space-y-8">
          {/* Heading Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Try Free
              <span className="block mt-2 text-primary">
                Mock Tests
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Select an exam category to get started. Experience real exam-level mock tests — completely free.
            </p>
          </div>

          {/* Premium Info Card */}
          <div className="relative group">

            {/* Glow Effect */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-30 group-hover:opacity-60 transition duration-500" />

            {/* Glass Card */}
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-xl">

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                <span className="text-primary font-bold text-sm">i</span>
              </div>

              {/* Content */}
              <div className="min-w-0">
                <p className="font-semibold text-foreground mb-1 text-base sm:text-lg">
                  How it works
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Select a category, choose an exam section (CET, Police, Group D, etc), and start instantly.
                  You can attempt one free mock test per section without signup.
                  Locked tests reveal unlock options on hover.
                </p>
              </div>

            </div>
          </div>



          {error && (
            <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-200">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className="group w-full text-left"
              >
                <Card className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden hover:shadow-md transition">
                  <div className="h-1 w-full bg-primary" />
                  {/* Top Section */}
                  <div className="h-28 sm:h-32 flex items-center justify-center border-b border-border/50">
                    <div className="
            w-16 h-16 sm:w-18 sm:h-18 rounded-xl 
            bg-muted flex items-center justify-center
            text-foreground
            group-hover:bg-primary/10 group-hover:text-primary
            transition-all duration-300
          ">
                      {categoryIcons[category.slug] || <BookOpen className="w-7 h-7" />}
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-5 space-y-5">

                    <div className="flex items-start gap-4">

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-primary leading-snug">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-center">
                      <Button size="lg" variant="default" className="cursor-pointer">
                        Practice Mocks →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </div>

      </div><FooterLinkFooter /></>
    )
  }

  const currentCategory = categories.find((c) => c.slug === selectedCategory)

  // Level 2: Exam Sections (CET, Police, Group D, etc.)
  if (!selectedExam) {
    return (
      <><FooterLinkNavbar />
        <div className="w-full min-h-screen bg-background py-24 pt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-6 lg:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <button
                onClick={() => {
                  setSelectedCategory(null)
                  setExamSections([])
                }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm sm:text-base cursor-pointer">Back</span>
              </button>

            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground truncate">{currentCategory?.name}</h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">{currentCategory?.description}</p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-5 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary font-semibold text-xs">i</span>
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Select an Exam Section</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Choose a section below to view all available tests. Get one free mock test per section without signup.
                </p>
              </div>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center min-h-[40vh] lg:min-h-[60vh]">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {examSections.map((exam) => (
                  <ExamSectionCard
                    key={exam.id}
                    exam={exam}
                    onClick={() => setSelectedExam(exam.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <FooterLinkFooter /></>
    )
  }

  // Level 3: Tests for selected exam section
  const currentExam = examSections.find((e) => e.id === selectedExam)

  return (
    <><FooterLinkNavbar />
      <div className="w-full min-h-screen bg-background py-24 pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6 lg:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 lg:mb-8">
            <button
              onClick={() => setSelectedExam(null)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm sm:text-base cursor-pointer">Back</span>
            </button>

          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground truncate">{currentExam?.name}</h1>
            {currentExam?.description && (
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">{currentExam.description}</p>
            )}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-5 flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary font-semibold text-xs">i</span>
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Free Test Per Section</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                The first test is free for all users. Hover over locked tests to see signup option. Additional tests are available after signing up.
              </p>
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center min-h-[40vh] lg:min-h-[60vh]">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : tests.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-sm sm:text-base">No tests available for this section yet.</p>
            </div>
          ) : (
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
    </>


  )
}
