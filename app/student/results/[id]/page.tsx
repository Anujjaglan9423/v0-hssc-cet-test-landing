"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle2,
  XCircle,
  MinusCircle,
  Trophy,
  Target,
  Clock,
  BarChart3,
  ArrowLeft,
  Loader2,
  ChevronDown,
  ChevronUp,
  Users,
} from "lucide-react"
import { getTestResult } from "@/lib/actions/student"
import Link from "next/link"
import { BilingualText } from "@/components/bilingual-text"

interface ResultData {
  test: {
    id: string
    title: string
    duration: number
    has_negative_marking?: boolean
    negative_marking_percent?: number
  }
  score: number
  total_marks: number
  correct: number
  incorrect: number
  unattempted: number
  total_questions: number
  percentage: number
  time_taken: number
  rank: number
  total_participants: number
  questions: Array<{
    id: string
    question_text: string
    option_a: string
    option_b: string
    option_c: string
    option_d: string
    correct_answer: string
    user_answer: string | null
    explanation?: string
    image_url?: string
  }>
}

export default function ResultPage() {
  const params = useParams()
  const router = useRouter()
  const attemptId = params?.id as string | undefined

  const [result, setResult] = useState<ResultData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set())

  useEffect(() => {
    async function loadResult() {
      if (!attemptId) {
        setError("No attempt ID provided")
        setIsLoading(false)
        return
      }

      try {
        const data = await getTestResult(attemptId)
        if (data) {
          setResult(data)
        } else {
          setError("Result not found")
        }
      } catch (err) {
        console.error("Error loading result:", err)
        setError("Failed to load result")
      } finally {
        setIsLoading(false)
      }
    }
    loadResult()
  }, [attemptId])

  const toggleQuestion = (id: string) => {
    setExpandedQuestions((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error || !result) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <XCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">{error || "Result Not Found"}</h2>
          <p className="text-muted-foreground mb-4">The result you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => router.push("/student/results")}>Back to Results</Button>
        </div>
      </div>
    )
  }

  const getScoreColor = () => {
    if (result.percentage >= 80) return "text-accent"
    if (result.percentage >= 60) return "text-amber-500"
    return "text-destructive"
  }

  const getRankColor = () => {
    if (result.rank === 1) return "text-amber-400"
    if (result.rank === 2) return "text-slate-400"
    if (result.rank === 3) return "text-amber-600"
    return "text-primary"
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/student/results">
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{result.test.title}</h1>
            <p className="text-muted-foreground">Test Result Analysis</p>
          </div>
        </div>

        {/* Score Card */}
        <Card className="relative p-6 md:p-8 rounded-3xl border border-white/20 bg-gradient-to-br from-white via-gray-50 to-gray-100">

          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

            {/* SCORE */}
            <div className="rounded-2xl p-4 text-center bg-gray/60 border border-gray-200">

              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                Overall Score
              </p>

              <h2 className={`text-xl md:text-3xl font-extrabold ${getScoreColor()}`}>
                {result.percentage.toFixed(1)}%
              </h2>

              <div className="mt-3 flex items-center justify-center gap-2 text-gray-600">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="font-medium text-sm">
                  {result.score} / {result.total_marks} marks
                </span>
              </div>
            </div>

            {/* RANK */}
            <div className="rounded-2xl p-4 text-center bg-white/60 border border-gray-200">

              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                Your Rank
              </p>

              <h2 className={`text-xl md:text-3xl font-extrabold ${getRankColor()}`}>
                #{result.rank}
              </h2>

              <div className="mt-3 flex items-center justify-center gap-2 text-gray-600">
                <Users className="w-5 h-5" />
                <span className="font-medium text-sm">
                  of {result.total_participants}
                </span>
              </div>
            </div>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 relative z-10">

            <div className="group rounded-xl p-4 text-center bg-gradient-to-br from-green-50 to-green-100 border border-green-200 ">
              <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-1 group-hover:scale-110 transition" />
              <p className="text-xs text-gray-500">Correct</p>
              <p className="text-xl font-bold text-green-700">{result.correct}</p>
            </div>

            <div className="group rounded-xl p-4 text-center bg-gradient-to-br from-red-50 to-red-100 border border-red-200 ">
              <XCircle className="w-6 h-6 text-red-600 mx-auto mb-1 group-hover:scale-110 transition" />
              <p className="text-xs text-gray-500">Incorrect</p>
              <p className="text-xl font-bold text-red-700">{result.incorrect}</p>
            </div>

            <div className="group rounded-xl p-4 text-center bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 ">
              <MinusCircle className="w-6 h-6 text-gray-600 mx-auto mb-1 group-hover:scale-110 transition" />
              <p className="text-xs text-gray-500">Unattempted</p>
              <p className="text-xl font-bold text-gray-800">{result.unattempted}</p>
            </div>

          </div>

          {/* EXTRA INFO */}
          <div className="grid grid-cols-2 gap-4 relative z-10">

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/60 border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Questions</p>
                <p className="font-semibold text-gray-900">{result.total_questions}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/60 border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Time Taken</p>
                <p className="font-semibold text-gray-900">
                  {Math.floor(result.time_taken / 60)} min
                </p>
              </div>
            </div>

          </div>

        </Card>
        {/* Questions Review */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Question-wise Analysis
          </h2>

          <div className="space-y-4">
            {result.questions.map((q, index) => {
              const isCorrect = q.user_answer === q.correct_answer
              const isUnattempted = !q.user_answer
              const isExpanded = expandedQuestions.has(q.id)

              return (

                <Card
                  key={q.id}
                  className="group overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white via-gray-50 to-gray-100 "
                >
                  {/* HEADER */}
                  <button
                    onClick={() => toggleQuestion(q.id)}
                    className="cursor-pointer w-full p-5 flex items-center gap-4 text-left transition-all duration-300 hover:bg-white/60 backdrop-blur-md"
                  >
                    {/* STATUS ICON */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 
      ${isUnattempted
                          ? "bg-gray-100 text-gray-500"
                          : isCorrect
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                    >
                      {isUnattempted ? (
                        <MinusCircle className="w-5 h-5" />
                      ) : isCorrect ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <XCircle className="w-5 h-5" />
                      )}
                    </div>

                    {/* QUESTION TEXT */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 tracking-wide">
                        Question {index + 1}
                      </p>
                      <p className="text-sm text-gray-500 truncate mt-1">
                        {q.question_text}
                      </p>
                    </div>

                    {/* SCORE BADGE */}
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold 
        ${isUnattempted
                            ? "bg-gray-100 text-gray-500"
                            : isCorrect
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                      >
                        {isUnattempted
                          ? "0"
                          : isCorrect
                            ? "+1"
                            : result.test.has_negative_marking
                              ? `-${(result.test.negative_marking_percent || 25) / 100}`
                              : "0"}
                      </span>

                      <div className="p-1 rounded-lg bg-white">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* EXPANDED CONTENT */}
                  {isExpanded && (
                    <div className="px-5 pb-5 border-t border-gray-200 bg-white/70 backdrop-blur-md animate-in fade-in duration-300">

                      {/* QUESTION */}
                      <div className="mt-4">
                        <BilingualText text={q.question_text} className="text-gray-900" separator />

                        {q.image_url && (
                          <div className="mt-4 flex justify-center">
                            <img
                              src={q.image_url}
                              alt="Question"
                              className="rounded-xl border border-gray-200 max-h-64 object-contain"
                            />
                          </div>
                        )}
                      </div>

                      {/* OPTIONS */}
                      <div className="space-y-3 mt-5">
                        {[
                          { key: "a", value: q.option_a },
                          { key: "b", value: q.option_b },
                          { key: "c", value: q.option_c },
                          { key: "d", value: q.option_d },
                        ].map((option) => {
                          const isUserAnswer = q.user_answer === option.key
                          const isCorrectAnswer = q.correct_answer === option.key

                          return (
                            <div
                              key={option.key}
                              className={`p-4 rounded-xl border transition-all duration-300
              ${isCorrectAnswer
                                  ? "border-green-300 bg-green-50 "
                                  : isUserAnswer
                                    ? "border-red-300 bg-red-50"
                                    : "border-gray-200 bg-white"
                                }`}
                            >
                              <div className="flex gap-3">
                                <span className="font-semibold text-gray-700">
                                  ({option.key.toUpperCase()})
                                </span>

                                <div className="flex-1">
                                  <BilingualText text={option.value} className="text-sm" separator />
                                </div>

                                <div>
                                  {isCorrectAnswer && (
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                  )}
                                  {isUserAnswer && !isCorrectAnswer && (
                                    <XCircle className="w-5 h-5 text-red-500" />
                                  )}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* EXPLANATION */}
                      {q.explanation && (
                        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                          <p className="text-sm font-semibold text-blue-700 mb-2">
                            Explanation
                          </p>
                          <BilingualText
                            text={q.explanation}
                            className="text-sm text-gray-600"
                            separator
                          />
                        </div>
                      )}
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button variant="outline" asChild className="flex-1 bg-transparent">
            <Link href="/student/tests">Take Another Test</Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href="/student/results">View All Results</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
