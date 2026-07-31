'use client'

import { useState, useCallback, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Sparkles, CheckCircle2, XCircle, RefreshCw } from 'lucide-react'

interface QuizQuestion {
  questionEn: string
  questionHi: string
  optionsEn: string[]
  optionsHi: string[]
  correct: number
  explanationEn: string
  explanationHi: string
  category: string
}

interface QuizState {
  question: QuizQuestion | null
  userAnswer: number | null
  answered: boolean
  isCorrect: boolean | null
  loading: boolean
  error: string | null
  language: 'en' | 'hi'
}

export default function DailyQuizSection() {
  const [state, setState] = useState<QuizState>({
    question: null,
    userAnswer: null,
    answered: false,
    isCorrect: null,
    loading: false,
    error: null,
    language: 'en',
  })

  // Track excluded categories to avoid repetition
  const [excludedCategories, setExcludedCategories] = useState<string[]>([])

  const loadQuestion = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }))
    try {
      const response = await fetch('/api/generate-daily-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ excludeTopics: excludedCategories }),
      })
      const data = await response.json()
      if (data.error) {
        setState((prev) => ({ ...prev, error: data.error, loading: false }))
      } else {
        setState({
          question: data,
          userAnswer: null,
          answered: false,
          isCorrect: null,
          loading: false,
          error: null,
          language: 'en',
        })

        // Add category to excluded list to avoid repetition
        if (data.category) {
          setExcludedCategories((prev) => {
            const updated = [...prev, data.category]
            // Keep only last 3 categories
            return updated.slice(-3)
          })
        }
      }
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: 'Failed to load question',
        loading: false,
      }))
    }
  }, [excludedCategories])

  const handleAnswer = useCallback((index: number) => {
    setState((prev) => {
      if (prev.answered) return prev
      const isCorrect = index === prev.question?.correct
      return {
        ...prev,
        userAnswer: index,
        answered: true,
        isCorrect,
      }
    })
  }, [])

  const resetQuiz = useCallback(() => {
    setState({
      question: null,
      userAnswer: null,
      answered: false,
      isCorrect: null,
      loading: false,
      error: null,
      language: 'en',
    })
  }, [])

  const toggleLanguage = useCallback(() => {
    setState((prev) => ({
      ...prev,
      language: prev.language === 'en' ? 'hi' : 'en',
    }))
  }, [])

  const currentQuestion = useMemo(
    () =>
      state.question
        ? state.language === 'en'
          ? state.question.questionEn
          : state.question.questionHi
        : '',
    [state.question, state.language]
  )

  const currentOptions = useMemo(
    () =>
      state.question
        ? state.language === 'en'
          ? state.question.optionsEn
          : state.question.optionsHi
        : [],
    [state.question, state.language]
  )

  const currentExplanation = useMemo(
    () =>
      state.question
        ? state.language === 'en'
          ? state.question.explanationEn
          : state.question.explanationHi
        : '',
    [state.question, state.language]
  )

  return (
    <section id="daily-quiz" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Content */}
        <div>
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/40 mb-4">
              <span className="text-sm font-medium text-accent">DAILY CHALLENGE</span>
            </div>
            <h2 className="text-4xl font-bold text-background mb-3">
              AI-powered daily quiz
            </h2>
            <p className="text-background/70 text-lg leading-relaxed">
              A fresh, India-focused question every day on current affairs, reasoning, maths and GK — bilingual, so you can practice in the language you&apos;ll actually think in during the exam.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-background">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm">India focused</span>
            </div>
            <div className="flex items-center gap-3 text-background">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm">EN & HI bilingual</span>
            </div>
            <div className="flex items-center gap-3 text-background">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm">AI powered</span>
            </div>
          </div>
        </div>

        {/* Right Side - Quiz Card */}
        <div>

        <Card className="p-8 shadow-xl border-0 bg-background rounded-2xl">
          {!state.question ? (
            <div className="text-center py-12">
              <Sparkles className="w-16 h-16 text-indigo-500 mx-auto mb-6 opacity-20" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Ready for Today's Question?
              </h3>
              <p className="text-gray-600 mb-8">
                Get a fresh AI-generated question to test your knowledge on India's current affairs, reasoning, mathematics, and general knowledge
              </p>
              <Button
                onClick={loadQuestion}
                disabled={state.loading}
                size="lg"
                className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                {state.loading ? 'Generating...' : 'Start today\'s quiz'}
              </Button>
            </div>
          ) : (
            <div>
              {/* Language Toggle */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-semibold text-muted-foreground">
                  {state.language === 'en' ? 'TODAY\'S QUESTION' : 'आज का सवाल'}
                </div>
                <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={toggleLanguage}
                    className={`px-4 py-2 rounded font-semibold text-sm transition-all cursor-pointer ${state.language === 'en'
                        ? 'bg-white text-indigo-600 shadow'
                        : 'text-gray-600 hover:text-gray-800'
                      }`}
                  >
                    English
                  </button>
                  <button
                    onClick={toggleLanguage}
                    className={`px-4 py-2 rounded font-semibold text-sm transition-all cursor-pointer ${state.language === 'hi'
                        ? 'bg-white text-indigo-600 shadow'
                        : 'text-gray-600 hover:text-gray-800'
                      }`}
                  >
                    हिंदी
                  </button>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <div className="text-sm font-semibold text-indigo-600 mb-3">
                  {state.language === 'en' ? 'Question' : 'प्रश्न'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-relaxed">
                  {currentQuestion}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {currentOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={state.answered}
                    className={`cursor-pointer w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-medium ${state.userAnswer === index
                        ? state.isCorrect
                          ? 'border-green-500 bg-green-50 text-green-900'
                          : 'border-red-500 bg-red-50 text-red-900'
                        : state.answered &&
                          index === state.question.correct
                          ? 'border-green-500 bg-green-50 text-green-900'
                          : 'border-gray-200 bg-white text-gray-800 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer'
                      } ${state.answered ? 'cursor-default' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {state.answered &&
                        state.userAnswer === index &&
                        (state.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600" />
                        ))}
                      {state.answered &&
                        index === state.question.correct &&
                        state.userAnswer !== index && (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Feedback */}
              {state.answered && (
                <div
                  className={`p-6 rounded-lg mb-6 border ${state.isCorrect
                      ? 'bg-green-50 border-green-200 text-green-900'
                      : 'bg-red-50 border-red-200 text-red-900'
                    }`}
                >
                  <div className="font-semibold mb-2">
                    {state.isCorrect
                      ? state.language === 'en'
                        ? '🎉 Correct!'
                        : '🎉 सही उत्तर!'
                      : state.language === 'en'
                        ? '❌ Incorrect'
                        : '❌ गलत'}
                  </div>
                  <p className="text-sm">{currentExplanation}</p>
                </div>
              )}

              {/* Error */}
              {state.error && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-900 mb-6">
                  {state.error}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  onClick={loadQuestion}
                  disabled={state.loading || !state.answered}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {state.language === 'en' ? 'Next Question' : 'अगला प्रश्न'}
                </Button>
                <Button
                  onClick={resetQuiz}
                  variant="outline"
                  className="flex-1 text-foreground"
                >
                  {state.language === 'en' ? 'Exit Quiz' : 'बाहर निकलें'}
                </Button>
              </div>
            </div>
          )}
        </Card>
        </div>
        </div>
      </div>
    </section>
  )
}
