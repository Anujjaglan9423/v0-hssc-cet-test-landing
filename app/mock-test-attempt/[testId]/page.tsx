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
  ArrowLeft,
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
import { FeedbackModal } from "@/components/student/feedback-modal"

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

export default function MockTestAttemptPage() {
  const params = useParams()
  const router = useRouter()
  const testId = params.testId as string

  const [test, setTest] = useState<Test | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [flagged, setFlagged] = useState<Set<string>>(new Set())
  const [timeLeft, setTimeLeft] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)
  const [testStarted, setTestStarted] = useState(false)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [lastAttemptId, setLastAttemptId] = useState<string | null>(null)

  useEffect(() => {
    const loadTest = async () => {
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
      const result = await submitTest(testId, answers, true)
      if (result.success) {
        setLastAttemptId(result.attemptId)
        setShowFeedbackModal(true)
      }
    } catch (error) {
      console.error("Error submitting test:", error)
    } finally {
      setIsSubmitting(false)
      setShowSubmitDialog(false)
    }
  }

  const handleFeedbackClose = () => {
    setShowFeedbackModal(false)
    router.push("/mock-test")
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
          <p className="text-muted-foreground mb-4">The test you are looking for does not exist.</p>
          <Button onClick={() => router.push("/mock-test")}>Back to Mock Tests</Button>
        </div>
      </div>
    )
  }

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
            <h3 className="font-semibold text-foreground mb-3 text-sm">Instructions:</h3>
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
            <Button variant="outline" className="flex-1 bg-transparent" onClick={() => router.push("/mock-test")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
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
      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Test?</AlertDialogTitle>
            <AlertDialogDescription>
              You have answered {answeredCount} out of {test.questions.length} questions. Once submitted, you cannot change your answers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <FeedbackModal open={showFeedbackModal} onClose={handleFeedbackClose} attemptId={lastAttemptId} isMockTest={true} />

      <header className="sticky top-0 z-50 bg-card border-b border-border px-2 lg:px-4 py-2 lg:py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <h1 className="text-sm lg:text-lg font-semibold text-foreground truncate">{test.title}</h1>
            <p className="text-xs lg:text-sm text-muted-foreground">
              Q {currentQuestion + 1} of {test.questions.length}
            </p>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <div
              className={`flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-1 lg:py-2 rounded-lg ${
                timeLeft < 300 ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
              }`}
            >
              <Clock className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="font-mono font-bold text-sm lg:text-lg">{formatTime(timeLeft)}</span>
            </div>

            <Button
              onClick={() => setShowSubmitDialog(true)}
              disabled={isSubmitting}
              className="text-xs lg:text-sm"
            >
              Submit
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-2 lg:p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Question Panel */}
        <div className="lg:col-span-3 space-y-4">
          <Card className="p-4 lg:p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Progress</span>
                <span className="text-sm font-medium text-foreground">{answeredCount} / {test.questions.length}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <h2 className="text-lg lg:text-xl font-semibold text-foreground mb-6">{question.question_text}</h2>

            <RadioGroup value={answers[question.id] || ""} onValueChange={(value) => handleAnswer(question.id, value)}>
              <div className="space-y-3">
                {[
                  { label: "A", value: question.option_a },
                  { label: "B", value: question.option_b },
                  { label: "C", value: question.option_c },
                  { label: "D", value: question.option_d },
                ].map((option) => (
                  <Label
                    key={option.label}
                    className="flex items-center gap-3 p-3 rounded-lg border-2 border-muted cursor-pointer hover:border-primary/50 hover:bg-muted/50 transition-all"
                  >
                    <RadioGroupItem value={option.label} id={`option-${option.label}`} />
                    <span className="font-medium text-foreground">{option.label}.</span>
                    <span className="text-foreground">{option.value}</span>
                  </Label>
                ))}
              </div>
            </RadioGroup>

            <div className="mt-6 flex gap-3">
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => toggleFlag(question.id)}
              >
                <Flag className={`w-4 h-4 mr-2 ${flagged.has(question.id) ? "fill-current" : ""}`} />
                {flagged.has(question.id) ? "Flagged" : "Flag"}
              </Button>
            </div>
          </Card>
        </div>

        {/* Question Navigator */}
        <div className="space-y-4">
          <Card className="p-4">
            <h3 className="font-semibold text-foreground mb-3 text-sm">Questions</h3>
            <div className="grid grid-cols-5 gap-2">
              {test.questions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestion(idx)}
                  className={`aspect-square rounded font-medium text-xs lg:text-sm transition-all ${
                    idx === currentQuestion
                      ? "bg-primary text-primary-foreground"
                      : answers[q.id]
                        ? "bg-green-500/20 text-green-600 hover:bg-green-500/30"
                        : flagged.has(q.id)
                          ? "bg-amber-500/20 text-amber-600 hover:bg-amber-500/30"
                          : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-green-500/20 border border-green-500" />
                <span className="text-muted-foreground">Answered: {answeredCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-amber-500/20 border border-amber-500" />
                <span className="text-muted-foreground">Flagged: {flagged.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-muted border border-muted-foreground" />
                <span className="text-muted-foreground">Unattempted: {test.questions.length - answeredCount}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <footer className="sticky bottom-0 bg-card border-t border-border px-2 lg:px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
            disabled={currentQuestion === 0}
            className="bg-transparent"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {test.questions.length}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => currentQuestion < test.questions.length - 1 && setCurrentQuestion(currentQuestion + 1)}
            disabled={currentQuestion === test.questions.length - 1}
            className="bg-transparent"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
