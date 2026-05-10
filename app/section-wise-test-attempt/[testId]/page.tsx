"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { getSectionWiseTestWithQuestions, submitFreeMockTest } from "@/lib/actions/student"
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
  exam_source?: string
}

interface Section {
  id: string
  name: string
  questions: Question[]
  section_order: number
}

interface Test {
  id: string
  title: string
  duration: number
  is_section_wise: boolean
  is_section_timed: boolean
  sections: Section[]
  questions: Question[]
}

export default function SectionWiseTestAttemptPage() {
  const params = useParams()
  const router = useRouter()
  const testId = params.testId as string

  const [test, setTest] = useState<Test | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)
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
        const data = await getSectionWiseTestWithQuestions(testId)
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
      const allQuestions = test.questions || []
      const result = await submitFreeMockTest(testId, test.title, answers, allQuestions)

      if (result.success) {
        sessionStorage.setItem(`mock-test-result-${result.resultId}`, JSON.stringify(result.data))
        setShowSubmitDialog(false)

        setTimeout(() => {
          router.push(`/mock-test-results/${result.resultId}`)
        }, 500)
      } else {
        console.error("Submit failed:", result.error)
        alert("Failed to submit test. Please try again.")
        setIsSubmitting(false)
        setShowSubmitDialog(false)
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error)
      alert("Error submitting test")
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
      <div className="w-full min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="max-w-2xl w-full p-6 sm:p-8 space-y-6">
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{test.title}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">Read the instructions carefully before starting</p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-muted/50 rounded-lg p-3 sm:p-4 text-center">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
              <p className="text-xl sm:text-2xl font-bold text-foreground">{test.questions?.length || 0}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Questions</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 sm:p-4 text-center">
              <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
              <p className="text-xl sm:text-2xl font-bold text-foreground">{test.duration}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Minutes</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 sm:p-4 text-center">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
              <p className="text-xl sm:text-2xl font-bold text-foreground">{test.sections?.length || 0}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Sections</p>
            </div>
          </div>

          <div className="space-y-3 bg-muted/30 rounded-lg p-4 sm:p-5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base mb-3">Instructions:</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
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
                You can switch between sections anytime
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Test will auto-submit when time expires
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button variant="outline" className="flex-1 bg-transparent text-sm sm:text-base" onClick={() => router.push("/mock-test")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
            <Button className="flex-1 text-sm sm:text-base" onClick={() => setTestStarted(true)}>
              Start Test
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  const sections = test.sections || []
  const currentSectionData = sections[currentSection]
  const sectionQuestions = currentSectionData?.questions || []
  const question = sectionQuestions[currentQuestion]
  
  const allAnsweredCount = Object.keys(answers).length
  const sectionAnsweredCount = sectionQuestions.filter((q) => answers[q.id]).length
  const sectionProgress = (sectionAnsweredCount / sectionQuestions.length) * 100

  return (
    <div className="min-h-screen bg-background">
      <AlertDialog open={showSubmitDialog && !isSubmitting} onOpenChange={(open) => !isSubmitting && setShowSubmitDialog(open)}>
        <AlertDialogContent className="w-[95vw] sm:w-full">
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Test?</AlertDialogTitle>
            <AlertDialogDescription>
              You have answered {allAnsweredCount} out of {test.questions?.length || 0} questions. Once submitted, you cannot change your answers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {isSubmitting && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-card rounded-lg p-6 flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-foreground font-medium">Submitting your test...</p>
            <p className="text-sm text-muted-foreground">Please wait, this may take a moment</p>
          </div>
        </div>
      )}

      <FeedbackModal open={showFeedbackModal} onClose={handleFeedbackClose} attemptId={lastAttemptId} isMockTest={true} />

      <header className="sticky top-0 z-40 bg-card border-b border-border px-2 sm:px-4 py-2 sm:py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="text-xs sm:text-base lg:text-lg font-semibold text-foreground truncate">{test.title}</h1>
            <p className="text-xs text-muted-foreground">
              {currentSectionData?.name} - Q {currentQuestion + 1} of {sectionQuestions.length}
            </p>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
            <div
              className={`flex items-center gap-1 px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm lg:text-base ${timeLeft < 300 ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
                }`}
            >
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
            </div>

            <Button
              onClick={() => setShowSubmitDialog(true)}
              disabled={isSubmitting}
              size="sm"
              className="text-xs sm:text-sm"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-2 sm:p-3 lg:p-4">
        {/* Section Tabs */}
        <Tabs value={currentSection.toString()} onValueChange={(val) => {
          setCurrentSection(Number.parseInt(val))
          setCurrentQuestion(0)
        }} className="mb-4">
          <TabsList className="w-full grid" style={{ gridTemplateColumns: `repeat(${sections.length}, minmax(0, 1fr))` }}>
            {sections.map((section, idx) => (
              <TabsTrigger key={section.id} value={idx.toString()} className="text-xs sm:text-sm">
                {section.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-4">
          {/* Question Panel */}
          <div className="lg:col-span-3 space-y-3 lg:space-y-4">
            <Card className="p-3 sm:p-4 lg:p-6">
              <div className="mb-4 lg:mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">Section Progress</span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">{sectionAnsweredCount} / {sectionQuestions.length}</span>
                </div>
                <Progress value={sectionProgress} className="h-1.5 sm:h-2" />
              </div>

              {question ? (
                <>
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-4 lg:mb-6 leading-relaxed">{question.question_text}</h2>

                  <RadioGroup value={answers[question.id] || ""} onValueChange={(value) => handleAnswer(question.id, value)}>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        { label: "A", value: question.option_a },
                        { label: "B", value: question.option_b },
                        { label: "C", value: question.option_c },
                        { label: "D", value: question.option_d },
                      ].map((option) => (
                        <Label
                          key={option.label}
                          className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg border-2 border-muted cursor-pointer hover:border-primary/50 hover:bg-muted/50 transition-all"
                        >
                          <RadioGroupItem value={option.label} id={`option-${option.label}`} />
                          <span className="font-medium text-foreground text-xs sm:text-sm">{option.label}.</span>
                          <span className="text-foreground text-xs sm:text-sm leading-relaxed">{option.value}</span>
                        </Label>
                      ))}
                    </div>
                  </RadioGroup>

                  <div className="mt-4 sm:mt-6 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent text-xs sm:text-sm"
                      onClick={() => toggleFlag(question.id)}
                      disabled={isSubmitting}
                    >
                      <Flag className={`w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 ${flagged.has(question.id) ? "fill-current" : ""}`} />
                      {flagged.has(question.id) ? "Flagged" : "Flag"}
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-6 text-muted-foreground">No questions in this section</div>
              )}
            </Card>
          </div>

          {/* Question Navigator */}
          <div className="space-y-3 lg:space-y-4">
            <Card className="p-3 sm:p-4">
              <h3 className="font-semibold text-foreground mb-3 text-xs sm:text-sm">Questions</h3>
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                {sectionQuestions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => !isSubmitting && setCurrentQuestion(idx)}
                    className={`aspect-square rounded text-xs font-medium transition-all ${idx === currentQuestion
                      ? "bg-primary text-primary-foreground"
                      : answers[q.id]
                        ? "bg-green-500/20 text-green-600 hover:bg-green-500/30"
                        : flagged.has(q.id)
                          ? "bg-amber-500/20 text-amber-600 hover:bg-amber-500/30"
                          : "bg-muted hover:bg-muted/80"
                      } ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}
                    disabled={isSubmitting}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-3 sm:p-4">
              <div className="space-y-1.5 sm:space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded bg-green-500/20 border border-green-500" />
                  <span className="text-muted-foreground truncate">Answered: {sectionAnsweredCount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded bg-amber-500/20 border border-amber-500" />
                  <span className="text-muted-foreground truncate">Flagged: {Array.from(flagged).filter(id => sectionQuestions.find(q => q.id === id)).length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded bg-muted border border-muted-foreground" />
                  <span className="text-muted-foreground truncate">Unattempted: {sectionQuestions.length - sectionAnsweredCount}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <footer className="sticky bottom-0 bg-card border-t border-border px-2 sm:px-4 py-2 sm:py-3 mt-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
            disabled={currentQuestion === 0 || isSubmitting}
            className="bg-transparent text-xs sm:text-sm"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            Prev
          </Button>

          <div className="text-xs sm:text-sm text-muted-foreground text-center">
            Q {currentQuestion + 1} / {sectionQuestions.length}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => currentQuestion < sectionQuestions.length - 1 && setCurrentQuestion(currentQuestion + 1)}
            disabled={currentQuestion === sectionQuestions.length - 1 || isSubmitting}
            className="bg-transparent text-xs sm:text-sm"
          >
            Next
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
