"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
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
  Pause,
  Play,
  RotateCcw,
  LogOut,
} from "lucide-react"
import {
  getTestById,
  submitTest,
  saveTestProgress,
  getPausedTestState,
  clearPausedTestState,
} from "@/lib/actions/student"
import { getCurrentUser } from "@/lib/auth"
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

interface PausedState {
  attemptId: string
  answers: Record<string, string>
  flagged: string[]
  currentQuestion: number
  timeRemaining: number
}

export default function TestPage() {
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const testId = params.id as string
  const isMockTest = searchParams.get("mock") === "true"

  const [test, setTest] = useState<Test | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [flagged, setFlagged] = useState<Set<string>>(new Set())
  const [timeLeft, setTimeLeft] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)
  const [testStarted, setTestStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [showRestartDialog, setShowRestartDialog] = useState(false)
  const [showPauseOverlay, setShowPauseOverlay] = useState(false)
  const [pausedState, setPausedState] = useState<PausedState | null>(null)
  const [showExitDialog, setShowExitDialog] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isRestarting, setIsRestarting] = useState(false)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [lastAttemptId, setLastAttemptId] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const loadTest = async () => {
      try {
        console.log("[v0] Loading test with ID:", testId)
        
        const user = await getCurrentUser()
        if (user) {
          setUserId(user.id)
          console.log("[v0] User logged in:", user.id)
        } else {
          console.log("[v0] No user logged in")
        }

        console.log("[v0] Fetching test and paused state...")
        const [data, paused] = await Promise.all([
          getTestById(testId), 
          isMockTest ? Promise.resolve(null) : getPausedTestState(testId)
        ])

        console.log("[v0] Test data received:", data ? { title: data.title, questionCount: data.questions?.length } : null)
        console.log("[v0] Paused state:", paused)

        if (data) {
          setTest(data)
          setTimeLeft(data.duration * 60)
          console.log("[v0] Test loaded successfully, duration:", data.duration)

          if (paused) {
            setPausedState(paused)
          }
        } else {
          console.warn("[v0] No test data returned from getTestById")
        }
      } catch (error) {
        console.error("[v0] Error loading test:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadTest()
  }, [testId, isMockTest])

  useEffect(() => {
    if (!testStarted || timeLeft <= 0 || isPaused) return

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
  }, [testStarted, timeLeft, isPaused])

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

  const handlePauseToggle = async () => {
    if (isPaused) {
      setIsPaused(false)
      setShowPauseOverlay(false)
    } else {
      setIsPaused(true)
      setShowPauseOverlay(true)
      // Auto-save when pausing
      try {
        await saveTestProgress(testId, answers, Array.from(flagged), currentQuestion, timeLeft)
      } catch (error) {
        console.log("[v0] Error auto-saving on pause:", error)
      }
    }
  }

  const handleSaveProgress = async () => {
    if (!test) return false
    setIsSaving(true)
    try {
      await saveTestProgress(testId, answers, Array.from(flagged), currentQuestion, timeLeft)
      return true
    } catch (error) {
      console.log("[v0] Error saving progress:", error)
      return false
    } finally {
      setIsSaving(false)
    }
  }

  const handleExitAndSave = async () => {
    setIsSaving(true)
    try {
      await saveTestProgress(testId, answers, Array.from(flagged), currentQuestion, timeLeft)
      setShowExitDialog(false)
      setShowPauseOverlay(false)
      // Use window.location for reliable navigation
      window.location.href = "/student/tests"
    } catch (error) {
      console.log("[v0] Error saving progress:", error)
      setIsSaving(false)
      alert("Failed to save progress. Please try again.")
    }
  }

  const handleRestart = async () => {
    if (!test) return
    setIsRestarting(true)
    try {
      // Clear paused state from database
      await clearPausedTestState(testId)

      // Reset all state
      setAnswers({})
      setFlagged(new Set())
      setCurrentQuestion(0)
      setTimeLeft(test.duration * 60)
      setIsPaused(false)
      setShowPauseOverlay(false)
      setShowRestartDialog(false)
      setPausedState(null)
    } catch (error) {
      console.log("[v0] Error restarting test:", error)
      alert("Failed to restart test. Please try again.")
    } finally {
      setIsRestarting(false)
    }
  }

  const handleResume = () => {
    setIsPaused(false)
    setShowPauseOverlay(false)
  }

  const handleOpenRestartDialog = () => {
    setShowRestartDialog(true)
  }

  const handleOpenExitDialog = () => {
    setShowExitDialog(true)
  }

  const handleSubmit = async () => {
    if (!test) return
    setIsSubmitting(true)

    try {
      // Clear any paused state before submitting
      if (!isMockTest) {
        await clearPausedTestState(testId)
      }

      const result = await submitTest(testId, answers, isMockTest)
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

  const handleResumeFromPaused = () => {
    if (pausedState && test) {
      setAnswers(pausedState.answers)
      setFlagged(new Set(pausedState.flagged))
      setCurrentQuestion(pausedState.currentQuestion)
      setTimeLeft(pausedState.timeRemaining)
      setTestStarted(true)
      setPausedState(null)
    }
  }

  const handleStartFresh = async () => {
    if (test) {
      await clearPausedTestState(testId)
      setPausedState(null)
      setTestStarted(true)
    }
  }

  const handleFeedbackClose = () => {
    setShowFeedbackModal(false)
    if (lastAttemptId) {
      router.push(`/student/results/${lastAttemptId}`)
    } else if (isMockTest) {
      // For mock tests without account, go back to mock test home
      router.push("/mock-test")
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
          <p className="text-muted-foreground mb-4">The test you are looking for does not exist.</p>
          <Button onClick={() => router.push("/student/tests")}>Back to Tests</Button>
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

          {pausedState && (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Pause className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Paused Test Found</h3>
                  <p className="text-sm text-muted-foreground">
                    You have a paused attempt with {Object.keys(pausedState.answers).length} answers saved
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4 lg:mb-6 text-center text-sm">
                <div className="bg-background rounded p-2">
                  <p className="text-muted-foreground">Answered</p>
                  <p className="font-bold text-foreground">{Object.keys(pausedState.answers).length}</p>
                </div>
                <div className="bg-background rounded p-2">
                  <p className="text-muted-foreground">Time Left</p>
                  <p className="font-bold text-foreground">{formatTime(pausedState.timeRemaining)}</p>
                </div>
                <div className="bg-background rounded p-2">
                  <p className="text-muted-foreground">Last Q</p>
                  <p className="font-bold text-foreground">#{pausedState.currentQuestion + 1}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1" onClick={handleResumeFromPaused}>
                  <Play className="w-4 h-4 mr-2" />
                  Resume Test
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent" onClick={handleStartFresh}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Start Fresh
                </Button>
              </div>
            </div>
          )}

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
            <h3 className="font-semibold text-foreground mb-3 lg:mb-4 text-sm lg:text-base">Instructions:</h3>
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
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                You can pause the test and resume later - your progress will be saved
              </li>
            </ul>
          </div>

          {!pausedState && (
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => router.push("/student/tests")}>
                Go Back
              </Button>
              <Button className="flex-1" onClick={() => setTestStarted(true)}>
                Start Test
              </Button>
            </div>
          )}

          {pausedState && (
            <Button variant="outline" className="w-full bg-transparent" onClick={() => router.push("/student/tests")}>
              Go Back
            </Button>
          )}
        </Card>
      </div>
    )
  }

  const question = test.questions[currentQuestion]
  const answeredCount = Object.keys(answers).length
  const progress = (answeredCount / test.questions.length) * 100

  return (
    <div className="min-h-screen bg-background">
      {showPauseOverlay && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex items-center justify-center">
          <Card className="p-8 max-w-md w-full mx-4 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Pause className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Test Paused</h2>
              <p className="text-muted-foreground">
                Your progress has been saved. Resume when you are ready or exit to continue later.
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Time Remaining</span>
                <span className="font-bold text-foreground font-mono">{formatTime(timeLeft)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Questions Answered</span>
                <span className="font-bold text-foreground">
                  {answeredCount} / {test.questions.length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Flagged for Review</span>
                <span className="font-bold text-foreground">{flagged.size}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={handleOpenRestartDialog}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Restart
                </Button>
                <Button type="button" className="flex-1" onClick={handleResume}>
                  <Play className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
              <Button type="button" variant="secondary" className="w-full" onClick={handleOpenExitDialog}>
                <LogOut className="w-4 h-4 mr-2" />
                Save & Exit
              </Button>
            </div>
          </Card>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-card border-b border-border px-2 lg:px-4 py-2 lg:py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <h1 className="text-sm lg:text-lg font-semibold text-foreground truncate">{test.title}</h1>
            <p className="text-xs lg:text-sm text-muted-foreground">
              Q {currentQuestion + 1} of {test.questions.length}
            </p>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePauseToggle}
              className="hidden sm:flex gap-1 lg:gap-2 bg-transparent"
            >
              <Pause className="w-4 h-4" />
              <span className="hidden lg:inline">Pause</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleOpenRestartDialog}
              className="hidden sm:flex gap-1 lg:gap-2 bg-transparent"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden lg:inline">Restart</span>
            </Button>

            <div
              className={`flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-1 lg:py-2 rounded-lg ${
                timeLeft < 300 ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
              }`}
            >
              <Clock className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="font-mono font-bold text-sm lg:text-lg">{formatTime(timeLeft)}</span>
            </div>

            <Button
              variant="destructive"
              size="sm"
              onClick={() => setShowSubmitDialog(true)}
              disabled={isSubmitting}
              className="text-xs lg:text-sm"
            >
              Submit
            </Button>
          </div>
        </div>
      </header>

      <div className="sm:hidden flex gap-2 p-2 bg-card border-b border-border">
        <Button variant="outline" size="sm" onClick={handlePauseToggle} className="flex-1 gap-2 bg-transparent">
          <Pause className="w-4 h-4" />
          Pause
        </Button>
        <Button variant="outline" size="sm" onClick={handleOpenRestartDialog} className="flex-1 gap-2 bg-transparent">
          <RotateCcw className="w-4 h-4" />
          Restart
        </Button>
      </div>

      <div className="max-w-7xl mx-auto p-2 lg:p-4 grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-4">
        {/* Main Question Section - Takes 3 columns on desktop */}
        <div className="lg:col-span-3 space-y-3 lg:space-y-4">
          {/* Progress Section */}
          <div className="bg-card rounded-lg border border-border p-3 lg:p-4 space-y-2">
            <div className="flex justify-between items-center text-xs lg:text-sm">
              <span className="text-muted-foreground font-medium">Progress</span>
              <span className="font-bold text-foreground bg-primary/10 px-2 py-1 rounded">
                {answeredCount}/{test.questions.length}
              </span>
            </div>
            <Progress value={progress} className="h-2.5 rounded-full" />
          </div>

          {/* Question Card */}
          <Card className="p-4 lg:p-6 border border-border rounded-xl">
            {/* Question Header */}
            <div className="flex items-center justify-between mb-2 lg:mb-3 gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs lg:text-sm font-semibold">
                  Q{currentQuestion + 1}
                </span>
                <span className="text-xs lg:text-sm text-muted-foreground">
                  of {test.questions.length}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleFlag(question.id)}
                className={`gap-1.5 ${flagged.has(question.id) ? "text-amber-500 bg-amber-500/10" : "text-muted-foreground hover:text-amber-500"}`}
              >
                <Flag className={`w-4 h-4 ${flagged.has(question.id) ? "fill-current" : ""}`} />
                <span className="hidden sm:inline text-xs font-medium">
                  {flagged.has(question.id) ? "Flagged" : "Flag"}
                </span>
              </Button>
            </div>

            {/* Question Text */}
            <div className="mb-3 lg:mb-4 pb-2 lg:pb-3 border-b border-border/50">
              <p className="text-base lg:text-lg font-medium text-foreground leading-relaxed">
                {question.question_text}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-2.5 lg:space-y-3 mb-4">
              <RadioGroup
                value={answers[question.id] || ""}
                onValueChange={(value) => handleAnswer(question.id, value)}
              >
                {[
                  { key: "a", value: question.option_a },
                  { key: "b", value: question.option_b },
                  { key: "c", value: question.option_c },
                  { key: "d", value: question.option_d },
                ].map((option) => (
                  <div
                    key={option.key}
                    className={`flex items-start gap-3 p-3 lg:p-4 rounded-lg border-2 cursor-pointer transition-all text-sm lg:text-base ${
                      answers[question.id] === option.key
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border hover:border-primary/30 hover:bg-muted/40"
                    }`}
                    onClick={() => {
                      const radioInput = document.getElementById(`option-${option.key}`)
                      if (radioInput) radioInput.click()
                    }}
                  >
                    <RadioGroupItem value={option.key} id={`option-${option.key}`} className="mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="font-bold text-primary mr-2">({option.key.toUpperCase()})</span>
                      <span className="text-foreground">{option.value}</span>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 lg:pt-6 border-t border-border/50">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="w-full sm:w-auto gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden lg:inline">Previous</span>
              </Button>

              <div className="flex gap-2 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const { [question.id]: _, ...rest } = answers
                    setAnswers(rest)
                  }}
                  disabled={!answers[question.id]}
                  className="flex-1 sm:flex-none text-xs lg:text-sm"
                >
                  Clear
                </Button>
              </div>

              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  if (currentQuestion < test.questions.length - 1) {
                    setCurrentQuestion((prev) => prev + 1)
                  }
                }}
                disabled={!answers[question.id] || currentQuestion === test.questions.length - 1}
                className="w-full sm:w-auto gap-1.5"
              >
                <span className="hidden lg:inline">Next</span>
                <span className="lg:hidden">Next Q</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Sidebar - Question Navigator */}
        <div className="lg:col-span-2">
          <Card className="p-4 lg:p-5 sticky top-32 lg:top-28 border border-border rounded-xl">
            <h3 className="font-bold text-foreground mb-4 text-sm lg:text-base flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              Question Navigator
            </h3>

            {/* Question Grid */}
            <div className="grid grid-cols-8 sm:grid-cols-10 lg:grid-cols-6 gap-1.5 mb-5 lg:mb-6">
              {test.questions.map((q, index) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestion(index)}
                  title={`Question ${index + 1}`}
                  className={`aspect-square rounded-md text-xs font-semibold transition-all flex items-center justify-center ${
                    currentQuestion === index
                      ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 scale-110"
                      : answers[q.id]
                        ? "bg-accent text-accent-foreground hover:scale-105"
                        : flagged.has(q.id)
                          ? "bg-amber-500/20 text-amber-600 border-2 border-amber-500 hover:scale-105"
                          : "bg-muted text-muted-foreground hover:bg-muted/70 hover:scale-105"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="space-y-2.5 pt-4 lg:pt-5 border-t border-border/50">
              <div className="flex items-center gap-2.5 text-xs lg:text-sm">
                <div className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-sm bg-accent" />
                <span className="text-muted-foreground">
                  Answered <span className="font-semibold text-foreground">({answeredCount})</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs lg:text-sm">
                <div className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-sm bg-muted" />
                <span className="text-muted-foreground">
                  Pending <span className="font-semibold text-foreground">({test.questions.length - answeredCount})</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs lg:text-sm">
                <div className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-sm border-2 border-amber-500 bg-amber-500/20" />
                <span className="text-muted-foreground">
                  Flagged <span className="font-semibold text-foreground">({flagged.size})</span>
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-4 lg:mt-5 pt-4 lg:pt-5 border-t border-border/50 space-y-2">
              <div className="flex justify-between items-center text-xs lg:text-sm">
                <span className="text-muted-foreground">Completion</span>
                <span className="font-bold text-primary">{Math.round(progress)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs lg:text-sm">
                <span className="text-muted-foreground">Time Left</span>
                <span className={`font-mono font-bold ${timeLeft < 300 ? "text-destructive" : "text-primary"}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Test?</AlertDialogTitle>
            <AlertDialogDescription>
              You have answered {answeredCount} out of {test.questions.length} questions.
              {test.questions.length - answeredCount > 0 && (
                <span className="block mt-2 text-amber-500">
                  {test.questions.length - answeredCount} questions are unanswered.
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
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

      <AlertDialog open={showRestartDialog} onOpenChange={setShowRestartDialog}>
        <AlertDialogContent className="z-50">
          <AlertDialogHeader>
            <AlertDialogTitle>Restart Test?</AlertDialogTitle>
            <AlertDialogDescription>
              This will clear all your answers and reset the timer. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isRestarting}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleRestart} disabled={isRestarting}>
              {isRestarting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Restarting...
                </>
              ) : (
                "Restart Test"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <AlertDialogContent className="z-50">
          <AlertDialogHeader>
            <AlertDialogTitle>Save and Exit?</AlertDialogTitle>
            <AlertDialogDescription>
              Your progress will be saved. You can resume this test later from where you left off.
              <span className="block mt-2 text-muted-foreground">
                Answered: {answeredCount} | Time remaining: {formatTime(timeLeft)}
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isSaving}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleExitAndSave} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save & Exit"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {showFeedbackModal && userId && lastAttemptId && test && (
        <FeedbackModal
          isOpen={showFeedbackModal}
          onClose={handleFeedbackClose}
          userId={userId}
          testId={testId}
          attemptId={lastAttemptId}
          testTitle={test.title}
        />
      )}
    </div>
  )
}
