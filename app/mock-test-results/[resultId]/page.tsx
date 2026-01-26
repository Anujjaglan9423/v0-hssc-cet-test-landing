"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowLeft,
  Download,
  Share2,
} from "lucide-react"

interface MockTestResult {
  testId: string
  testTitle: string
  totalQuestions: number
  correct: number
  incorrect: number
  unattempted: number
  score: number
  percentage: number
  answers: Record<string, string>
  questions: any[]
}

export default function MockTestResultsPage() {
  const params = useParams()
  const router = useRouter()
  const resultId = params.resultId as string

  const [result, setResult] = useState<MockTestResult | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get result data from sessionStorage
    const storedResult = sessionStorage.getItem(`mock-test-result-${resultId}`)
    if (storedResult) {
      setResult(JSON.parse(storedResult))
    }
    setIsLoading(false)
  }, [resultId])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">Loading results...</div>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Results not found</p>
          <Button onClick={() => router.push("/mock-test")}>Back to Mock Tests</Button>
        </div>
      </div>
    )
  }

  const passPercentage = 40 // Passing percentage
  const isPassed = result.percentage >= passPercentage

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push("/mock-test")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Mock Tests
          </button>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Download className="w-4 h-4" />
              Download
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Test Title */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">{result.testTitle}</h1>
          <p className="text-muted-foreground">Detailed Analysis Report</p>
        </div>

        {/* Score Card */}
        <Card className="border-2 overflow-hidden">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Percentage Score */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-muted"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeDasharray={`${(result.percentage / 100) * 339.3} 339.3`}
                        className={`transition-all ${
                          isPassed ? "text-green-500" : "text-red-500"
                        }`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold">{result.percentage}%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Badge className={isPassed ? "bg-green-500" : "bg-red-500"}>
                    {isPassed ? "PASSED" : "FAILED"}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Passing Score: {passPercentage}%
                  </p>
                </div>
              </div>

              {/* Marks Score */}
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Your Score</p>
                  <p className="text-4xl font-bold text-foreground">
                    {result.score}/{result.totalQuestions}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-foreground">
                      Correct Answers: {result.correct}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-sm text-foreground">
                      Wrong Answers: {result.incorrect}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-foreground">
                      Unattempted: {result.unattempted}
                    </span>
                  </div>
                </div>
              </div>

              {/* Performance Breakdown */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-semibold">Correct</span>
                    <span className="font-bold">{result.correct}</span>
                  </div>
                  <Progress
                    value={(result.correct / result.totalQuestions) * 100}
                    className="h-2"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-600 font-semibold">Wrong</span>
                    <span className="font-bold">{result.incorrect}</span>
                  </div>
                  <Progress
                    value={(result.incorrect / result.totalQuestions) * 100}
                    className="h-2"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-orange-600 font-semibold">Unattempted</span>
                    <span className="font-bold">{result.unattempted}</span>
                  </div>
                  <Progress
                    value={(result.unattempted / result.totalQuestions) * 100}
                    className="h-2"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question-wise Analysis */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Question-wise Analysis</h2>
          <div className="space-y-3">
            {result.questions.map((question, index) => {
              const userAnswer = result.answers[question.id]
              const isCorrect = userAnswer && userAnswer.toLowerCase() === question.correct_answer.toLowerCase()
              const isUnattempted = !userAnswer

              return (
                <Card
                  key={question.id}
                  className={`border-2 transition-all ${
                    isUnattempted
                      ? "border-orange-200 bg-orange-50/50"
                      : isCorrect
                        ? "border-green-200 bg-green-50/50"
                        : "border-red-200 bg-red-50/50"
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-muted-foreground mb-2">
                            Question {index + 1}
                          </p>
                          <p className="font-medium text-foreground">{question.question_text}</p>
                        </div>
                        <div className="flex-shrink-0">
                          {isUnattempted && (
                            <HelpCircle className="w-6 h-6 text-orange-500" />
                          )}
                          {isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                          {!isCorrect && !isUnattempted && (
                            <XCircle className="w-6 h-6 text-red-500" />
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground mb-2">Your Answer:</p>
                          <p className="font-medium">
                            {isUnattempted ? (
                              <span className="text-orange-600">Not Attempted</span>
                            ) : (
                              <>
                                {userAnswer.toUpperCase()}
                                <span className="text-muted-foreground ml-2">
                                  - {question[`option_${userAnswer.toLowerCase()}`]}
                                </span>
                              </>
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-2">Correct Answer:</p>
                          <p className="font-medium text-green-600">
                            {question.correct_answer.toUpperCase()}
                            <span className="text-muted-foreground ml-2">
                              - {question[`option_${question.correct_answer.toLowerCase()}`]}
                            </span>
                          </p>
                        </div>
                      </div>

                      {question.explanation && (
                        <div className="pt-3 border-t border-current/10">
                          <p className="text-sm text-muted-foreground mb-2">Explanation:</p>
                          <p className="text-sm text-foreground">{question.explanation}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center pt-8">
          <Button onClick={() => router.push("/mock-test")} variant="outline" size="lg">
            Back to Mock Tests
          </Button>
          <Button onClick={() => router.push("/signup")} size="lg" className="bg-primary">
            Sign Up for More Tests
          </Button>
        </div>
      </div>
    </div>
  )
}
