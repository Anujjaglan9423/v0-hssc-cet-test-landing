"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, BookOpen, GraduationCap, Train, Mountain, ChevronRight, Lock } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

interface MockTestModalProps {
  isOpen: boolean
  onClose: () => void
}

interface ExamWithTests {
  id: string
  name: string
  slug: string
  category_id: string
  image_url: string | null
  tests: Array<{
    id: string
    title: string
    duration: number
    total_questions: number
  }>
}

const categoryIcons: Record<string, React.ReactNode> = {
  haryana: <GraduationCap className="w-6 h-6" />,
  ssc: <BookOpen className="w-6 h-6" />,
  railway: <Train className="w-6 h-6" />,
  uttarakhand: <Mountain className="w-6 h-6" />,
}

const categoryColors: Record<string, string> = {
  haryana: "from-blue-500 to-blue-700",
  ssc: "from-green-500 to-green-700",
  railway: "from-red-500 to-red-700",
  uttarakhand: "from-purple-500 to-purple-700",
}

export function MockTestModal({ isOpen, onClose }: MockTestModalProps) {
  const [exams, setExams] = useState<ExamWithTests[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [mockTestsTaken, setMockTestsTaken] = useState<Record<string, string>>({}) // category -> test_id

  useEffect(() => {
    if (isOpen) {
      loadMockTests()
      loadMockTestsHistory()
    }
  }, [isOpen])

  const loadMockTestsHistory = () => {
    const history = localStorage.getItem("mock_tests_taken")
    if (history) {
      setMockTestsTaken(JSON.parse(history))
    }
  }

  const loadMockTests = async () => {
    setIsLoading(true)
    try {
      const { data: categories, error: catError } = await supabase
        .from("exam_categories")
        .select("*")
        .eq("is_active", true)
        .order("display_order")

      if (catError) throw catError

      if (!categories || categories.length === 0) {
        setExams([])
        return
      }

      const examsData: ExamWithTests[] = []

      for (const category of categories) {
        const { data: categoryExams, error: examError } = await supabase
          .from("exams")
          .select(
            `
            id,
            name,
            slug,
            category_id,
            image_url,
            tests:tests(id, title, duration, total_questions)
          `
          )
          .eq("category_id", category.id)
          .order("display_order")

        if (examError) throw examError

        // Take only first exam from each category and first test from that exam
        if (categoryExams && categoryExams.length > 0) {
          const firstExam = categoryExams[0]
          if (firstExam.tests && firstExam.tests.length > 0) {
            examsData.push({
              id: firstExam.id,
              name: firstExam.name,
              slug: firstExam.slug || "",
              category_id: firstExam.category_id,
              image_url: firstExam.image_url,
              tests: firstExam.tests,
            })
          }
        }
      }

      setExams(examsData)
    } catch (error) {
      console.error("Error loading mock tests:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleTestClick = (examId: string, testId: string, category: string, isSecondTest: boolean) => {
    if (isSecondTest) {
      // Redirect to signup
      window.location.href = "/signup"
      return
    }

    // Mark as taken and redirect to test
    const updated = { ...mockTestsTaken, [category]: testId }
    localStorage.setItem("mock_tests_taken", JSON.stringify(updated))
    window.location.href = `/student/test/${testId}`
  }

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Try Mock Tests - Free</DialogTitle>
          <DialogDescription>Take one free mock test from each section without registration. Try our platform risk-free!</DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : exams.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No mock tests available at the moment.</p>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            {exams.map((exam, index) => {
              const category = exam.slug.toLowerCase()
              const hasTakenMock = mockTestsTaken[category]
              const totalTests = exam.tests.length

              return (
                <div key={exam.id}>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    {categoryIcons[category]}
                    <span>{exam.name}</span>
                  </h3>

                  <div className="space-y-2 ml-8">
                    {exam.tests.map((test, testIndex) => {
                      const isSecondTest = testIndex > 0
                      const canAccess = !isSecondTest || hasTakenMock
                      const isLocked = !canAccess

                      return (
                        <Card
                          key={test.id}
                          className={`p-4 cursor-pointer transition-all ${
                            isLocked ? "opacity-60 bg-muted/50" : "hover:border-primary/50 hover:shadow-md"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium text-foreground">{test.title}</h4>
                                {testIndex === 0 && (
                                  <Badge className="bg-accent text-accent-foreground text-xs">Free Mock</Badge>
                                )}
                                {hasTakenMock && testIndex === 0 && (
                                  <Badge className="bg-green-500/20 text-green-700 text-xs">Completed</Badge>
                                )}
                                {isSecondTest && (
                                  <Badge className="bg-muted text-muted-foreground text-xs flex items-center gap-1">
                                    <Lock className="w-3 h-3" />
                                    Premium
                                  </Badge>
                                )}
                              </div>
                              <div className="text-sm text-muted-foreground mt-1">
                                {test.total_questions} questions • {test.duration} minutes
                              </div>
                            </div>

                            {isLocked ? (
                              <div className="text-right">
                                <p className="text-xs font-medium text-muted-foreground">Sign up to access</p>
                              </div>
                            ) : (
                              <Button
                                size="sm"
                                variant={testIndex === 0 ? "default" : "outline"}
                                onClick={() =>
                                  handleTestClick(exam.id, test.id, category, isSecondTest)
                                }
                                className="gap-1"
                              >
                                {hasTakenMock && testIndex === 0 ? "Review" : "Start"}
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </Card>
                      )
                    })}

                    {totalTests > 1 && !hasTakenMock && (
                      <Card className="p-3 bg-blue-50/50 border-blue-200 text-sm text-blue-900">
                        <p>Complete the free mock test first to unlock {totalTests - 1} more test(s) in this section.</p>
                      </Card>
                    )}

                    {totalTests > 1 && hasTakenMock && (
                      <Card className="p-3 bg-green-50/50 border-green-200 text-sm text-green-900">
                        <p className="flex items-center gap-2">
                          <span>✓</span>
                          <span>Unlock remaining tests with a paid plan</span>
                        </p>
                      </Card>
                    )}
                  </div>

                  {index < exams.length - 1 && <div className="mt-6 border-b" />}
                </div>
              )
            })}

            <Card className="p-4 bg-primary/5 border-primary/20">
              <p className="text-sm text-foreground mb-3">
                Ready to unlock all tests and premium features?
              </p>
              <Link href="/signup">
                <Button className="w-full gap-2">
                  Sign Up for Full Access
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
