"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Loader2, ChevronLeft, FileText, Clock, Play, Lock } from "lucide-react"
import Link from "next/link"

function TestCard({ test, isFree, isTestTaken, onTestClick }: { test: any; isFree: boolean; isTestTaken: boolean; onTestClick: () => void }) {
  return (
    <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 relative">
      {!isFree && <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-lg z-10" />}
      {isTestTaken && isFree && (
        <Badge className="absolute top-3 right-3 z-20 bg-green-500 text-white">Completed</Badge>
      )}
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/20 text-primary">
            <FileText className="w-6 h-6" />
          </div>
          {!isFree && (
            <div className="flex items-center gap-1 bg-amber-500/20 text-amber-600 px-3 py-1.5 rounded-full text-xs font-semibold">
              <Lock className="w-3 h-3" />
              Premium
            </div>
          )}
          {isFree && !isTestTaken && (
            <Badge variant="secondary" className="bg-green-500/20 text-green-600 border-green-500/30">
              Free
            </Badge>
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
            onClick={onTestClick}
            disabled={isTestTaken}
            className="w-full gap-2 group-hover:bg-primary"
          >
            <Play className="w-4 h-4" />
            {isTestTaken ? "Test Completed" : "Start Free Mock"}
          </Button>
        ) : (
          <Link href="/signup" className="block">
            <Button variant="outline" className="w-full gap-2 bg-transparent">
              <Lock className="w-4 h-4" />
              Sign Up to Unlock
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  )
}

function MockTestCategoryContent() {
  const params = useParams()
  const router = useRouter()
  const categorySlug = params.slug as string

  const [exams, setExams] = useState<any[]>([])
  const [category, setCategory] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [mockTestsTaken, setMockTestsTaken] = useState<Record<string, string>>({})

  useEffect(() => {
    loadMockTestsHistory()
  }, [])

  useEffect(() => {
    let isMounted = true

    async function loadExams() {
      if (!categorySlug || categorySlug === "undefined") {
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      try {
        // Get category
        const { data: catData, error: catError } = await supabase
          .from("exam_categories")
          .select("*")
          .eq("slug", categorySlug)
          .single()

        if (!isMounted) return
        if (catError) throw catError

        setCategory(catData)

        // Get exams for this category
        const { data: examsData, error: examsError } = await supabase
          .from("exams")
          .select("id, name, slug, description")
          .eq("category_id", catData.id)
          .order("display_order")

        if (!isMounted) return
        if (examsError) throw examsError

        // For each exam, get its tests
        const examsWithTests = []
        for (const exam of examsData) {
          const { data: testsData, error: testsError } = await supabase
            .from("tests")
            .select("id, title, duration, total_questions")
            .eq("exam_id", exam.id)
            .order("created_at")

          if (!testsError && testsData) {
            examsWithTests.push({
              ...exam,
              tests: testsData,
            })
          }
        }

        if (isMounted) {
          setExams(examsWithTests)
        }
      } catch (error: any) {
        // Ignore abort errors and unmount scenarios
        if (error?.name === "AbortError" || !isMounted) {
          return
        }
        console.error("[v0] Error loading exams:", error)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadExams()

    return () => {
      isMounted = false
    }
  }, [categorySlug])

  const loadMockTestsHistory = () => {
    try {
      const history = localStorage.getItem("mock_tests_taken")
      if (history) {
        setMockTestsTaken(JSON.parse(history))
      }
    } catch (error) {
      console.error("Error loading mock tests history:", error)
    }
  }

  const handleTestClick = (testId: string, examSlug: string) => {
    // Store that this test was taken
    const key = `${categorySlug}-${examSlug}`
    const updated = { ...mockTestsTaken, [key]: testId }
    localStorage.setItem("mock_tests_taken", JSON.stringify(updated))
    setMockTestsTaken(updated)

    // Navigate to test
    router.push(`/mock-test/${testId}`)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!category) {
    return (
      <div className="text-center py-16">
        <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
        <h3 className="text-lg font-semibold text-foreground mb-2">Category Not Found</h3>
        <p className="text-muted-foreground mb-4">The exam category you are looking for does not exist.</p>
        <Link href="/mock-test">
          <Button variant="outline">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Mock Tests
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumb & Header */}
      <div>
        <Link
          href="/mock-test"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Mock Tests
        </Link>
        <h1 className="text-4xl font-bold text-foreground mb-2">{category.name}</h1>
        <p className="text-muted-foreground">Choose an exam section to get your free full-length mock test</p>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 flex items-start gap-3">
        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-blue-600 font-semibold text-sm">1</span>
        </div>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">One free mock test per section:</span> After completing your free test, additional tests will require registration.
        </p>
      </div>

      {/* Exam Cards with Tests */}
      <div className="space-y-8">
        {exams.map((exam) => (
          <div key={exam.id}>
            <h2 className="text-2xl font-bold text-foreground mb-4">{exam.name}</h2>
            {exam.description && <p className="text-muted-foreground mb-4">{exam.description}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exam.tests && exam.tests.length > 0 ? (
                exam.tests.map((test: any, index: number) => {
                  const isFree = index === 0 // First test is free
                  const testKey = `${categorySlug}-${exam.slug}`
                  const isTestTaken = mockTestsTaken[testKey] === test.id

                  return (
                    <TestCard
                      key={test.id}
                      test={test}
                      isFree={isFree}
                      isTestTaken={isTestTaken}
                      onTestClick={() => handleTestClick(test.id, exam.slug)}
                    />
                  )
                })
              ) : (
                <div className="col-span-full text-center py-8 text-muted-foreground">
                  No tests available for this exam yet.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {exams.length === 0 && (
        <div className="text-center py-16">
          <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No Exams Available</h3>
          <p className="text-muted-foreground">No exams have been added to this category yet.</p>
        </div>
      )}
    </div>
  )
}

export default MockTestCategoryContent
