"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  Flag,
  CheckCircle2,
  AlertCircle,
  Loader2,
  BookOpen,
  Timer,
  Target,
} from "lucide-react"
import { getTestById, submitTest } from "@/lib/actions/student"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface Question {
  id: string
  question_text: string
  option_a: string
  option_b: string
  option_c: string
  option_d: string
  correct_answer: string
  explanation?: string
}

interface Test {
  id: string
  title: string
  duration: number
  questions: Question[]
}

export default function TestPage() {
  const params = useParams()
  const router = useRouter()
  const testId = params.id as string

  const [test, setTest] = useState<Test | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [flagged, setFlagged] = useState<Set<string>>(new Set())
  const [timeLeft, setTimeLeft] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)
  const [testStarted, setTestStarted] = useState(false)

  // Load test data
  useEffect(() => {
    async function loadTest() {
      try {
        const data = await getTestById(testId)
        if (data) {
          setTest(data)
          setTimeLeft(data.duration * 60)
        }
      } catch (error) {
        console.error("Error loading test:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadTest()
  }, [testId])

  // Timer
  useEffect(() => {
    if (!testStarted || timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [testStarted, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const toggleFlag = (questionId: string) => {
    setFlagged((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(questionId)) {
        newSet.delete(questionId)
      } else {
        newSet.add(questionId)
      }
      return newSet
    })
  }

  const handleSubmit = async () => {
    if (!test) return
    setIsSubmitting(true)

    try {
      const result = await submitTest(testId, answers)
      if (result.success) {
        router.push(`/student/results/${result.attemptId}`)
      }
    } catch (error) {
      console.error("Error submitting test:", error)
    } finally {
      setIsSubmitting(false)
      setShowSubmitDialog(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!test) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">Test Not Found</h2>
          <p className="text-muted-foreground mb-4">The test you're looking for doesn't exist.</p>
          <Button onClick={() => router.push("/student/tests")}>Back to Tests</Button>
        </div>
      </div>
    )
  }

  // Test Instructions Screen
  if (!testStarted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">{test.title}</h1>
            <p className="text-muted-foreground">Read the instructions carefully before starting</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <Target className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{test.questions.length}</p>
              <p className="text-sm text-muted-foreground">Questions</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <Timer className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{test.duration}</p>
              <p className="text-sm text-muted-foreground">Minutes</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <CheckCircle2 className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">+1 / 0</p>
              <p className="text-sm text-muted-foreground">Marking</p>
            </div>
          </div>

          <div className="space-y-3 bg-muted/30 rounded-lg p-4">
            <h3 className="font-semibold text-foreground">Instructions:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Each correct answer carries 1 mark
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                No negative marking for wrong answers
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Unattempted questions carry no marks
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                You can flag questions for review and revisit them later
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Test will auto-submit when time expires
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="flex-1 bg-transparent" onClick={() => router.push("/student/tests")}>
              Go Back
            </Button>
            <Button className="flex-1" onClick={() => setTestStarted(true)}>
              Start Test
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  const question = test.questions[currentQuestion]
  const answeredCount = Object.keys(answers).length
  const progress = (answeredCount / test.questions.length) * 100

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-foreground">{test.title}</h1>
            <p className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {test.questions.length}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                timeLeft < 300 ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
              }`}
            >
              <Clock className="w-5 h-5" />
              <span className="font-mono font-bold text-lg">{formatTime(timeLeft)}</span>
            </div>

            <Button variant="destructive" onClick={() => setShowSubmitDialog(true)} disabled={isSubmitting}>
              Submit Test
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Question Panel */}
        <div className="lg:col-span-3 space-y-6">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-foreground font-medium">
                {answeredCount}/{test.questions.length} answered
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Question {currentQuestion + 1}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleFlag(question.id)}
                className={flagged.has(question.id) ? "text-amber-500" : "text-muted-foreground"}
              >
                <Flag className="w-4 h-4 mr-1" />
                {flagged.has(question.id) ? "Flagged" : "Flag"}
              </Button>
            </div>

            <p className="text-lg text-foreground mb-6 leading-relaxed">{question.question_text}</p>

            <RadioGroup
              value={answers[question.id] || ""}
              onValueChange={(value) => handleAnswer(question.id, value)}
              className="space-y-3"
            >
              {[
                { key: "a", value: question.option_a },
                { key: "b", value: question.option_b },
                { key: "c", value: question.option_c },
                { key: "d", value: question.option_d },
              ].map((option) => (
                <Label
                  key={option.key}
                  htmlFor={`option-${option.key}`}
                  className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                    answers[question.id] === option.key
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <RadioGroupItem value={option.key} id={`option-${option.key}`} />
                  <span className="flex-1 text-foreground">
                    <span className="font-medium mr-2">({option.key.toUpperCase()})</span>
                    {option.value}
                  </span>
                </Label>
              ))}
            </RadioGroup>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    const { [question.id]: _, ...rest } = answers
                    setAnswers(rest)
                  }}
                  disabled={!answers[question.id]}
                >
                  Clear
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    if (currentQuestion < test.questions.length - 1) {
                      setCurrentQuestion((prev) => prev + 1)
                    }
                  }}
                  disabled={!answers[question.id]}
                >
                  Save & Next
                </Button>
              </div>

              <Button
                variant="outline"
                onClick={() => setCurrentQuestion((prev) => Math.min(test.questions.length - 1, prev + 1))}
                disabled={currentQuestion === test.questions.length - 1}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Question Navigator */}
        <div className="lg:col-span-1">
          <Card className="p-4 sticky top-24">
            <h3 className="font-semibold text-foreground mb-4">Question Navigator</h3>

            <div className="grid grid-cols-5 gap-2 mb-6">
              {test.questions.map((q, index) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                    currentQuestion === index
                      ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                      : answers[q.id]
                        ? "bg-accent text-accent-foreground"
                        : flagged.has(q.id)
                          ? "bg-amber-500/20 text-amber-500 border border-amber-500"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-accent" />
                <span className="text-muted-foreground">Answered ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-muted" />
                <span className="text-muted-foreground">Not Answered ({test.questions.length - answeredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-amber-500/20 border border-amber-500" />
                <span className="text-muted-foreground">Flagged ({flagged.size})</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Submit Dialog */}
      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Test?</AlertDialogTitle>
            <AlertDialogDescription>
              You have answered {answeredCount} out of {test.questions.length} questions.
              {test.questions.length - answeredCount > 0 && (
                <span className="block mt-2 text-amber-500">
                  {test.questions.length - answeredCount} questions are still unanswered.
                </span>
              )}
              {flagged.size > 0 && (
                <span className="block mt-1 text-amber-500">{flagged.size} questions are flagged for review.</span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Continue Test</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Test"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
