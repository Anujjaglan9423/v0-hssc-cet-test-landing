'use client'

import { useState } from 'react'
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

  const loadQuestion = async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }))
    try {
      const response = await fetch('/api/generate-daily-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      }
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: 'Failed to load question',
        loading: false,
      }))
    }
  }

  const handleAnswer = (index: number) => {
    if (state.answered) return
    const isCorrect = index === state.question?.correct
    setState((prev) => ({
      ...prev,
      userAnswer: index,
      answered: true,
      isCorrect,
    }))
  }

  const resetQuiz = () => {
    setState({
      question: null,
      userAnswer: null,
      answered: false,
      isCorrect: null,
      loading: false,
      error: null,
      language: 'en',
    })
  }

  const toggleLanguage = () => {
    setState((prev) => ({
      ...prev,
      language: prev.language === 'en' ? 'hi' : 'en',
    }))
  }

  const currentQuestion = state.question ? (
    state.language === 'en'
      ? state.question.questionEn
      : state.question.questionHi
  ) : ''
  const currentOptions = state.question ? (
    state.language === 'en'
      ? state.question.optionsEn
      : state.question.optionsHi
  ) : []
  const currentExplanation = state.question ? (
    state.language === 'en'
      ? state.question.explanationEn
      : state.question.explanationHi
  ) : ''

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-4">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">
              Daily Challenge
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            AI-Powered Daily Quiz
          </h2>
          <p className="text-gray-600 text-lg">
            Challenge yourself with India-focused questions on Current Affairs, Reasoning, Maths & GK
          </p>
        </div>

        {/* Quiz Card */}
        <Card className="p-8 shadow-xl border-0">
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
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              >
                {state.loading ? 'Generating...' : 'Start Quiz'}
              </Button>
            </div>
          ) : (
            <div>
              {/* Language Toggle */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-semibold text-indigo-600">
                  {state.question.category}
                </div>
                <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={toggleLanguage}
                    className={`px-4 py-2 rounded font-semibold text-sm transition-all ${
                      state.language === 'en'
                        ? 'bg-white text-indigo-600 shadow'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={toggleLanguage}
                    className={`px-4 py-2 rounded font-semibold text-sm transition-all ${
                      state.language === 'hi'
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
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-medium ${
                      state.userAnswer === index
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
                  className={`p-6 rounded-lg mb-6 border ${
                    state.isCorrect
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
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {state.language === 'en' ? 'Next Question' : 'अगला प्रश्न'}
                </Button>
                <Button
                  onClick={resetQuiz}
                  variant="outline"
                  className="flex-1"
                >
                  {state.language === 'en' ? 'Exit Quiz' : 'बाहर निकलें'}
                </Button>
              </div>
            </div>
          )}
        </Card>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mt-8 text-center">
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl font-bold text-indigo-600">India</div>
            <div className="text-sm text-gray-600">Focused</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl font-bold text-blue-600">Bilingual</div>
            <div className="text-sm text-gray-600">EN & HI</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl font-bold text-indigo-600">AI</div>
            <div className="text-sm text-gray-600">Powered</div>
          </div>
        </div>
      </div>
    </section>
  )
}
