'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Clock, AlertCircle, CheckCircle2 } from 'lucide-react'

interface Question {
  id: string
  question_text: string
  option_a: string
  option_b: string
  option_c: string
  option_d: string
  correct_answer: string
  explanation: string
}

interface Test {
  id: string
  title: string
  description: string
  duration: number
  total_questions: number
}

export default function TestPage() {
  const params = useParams()
  const router = useRouter()
  const testId = params.testId as string

  const [test, setTest] = useState<Test | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [showUserForm, setShowUserForm] = useState(false)
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' })
  const [loading, setLoading] = useState(true)

  // Fetch test and questions
  useEffect(() => {
    const fetchTestData = async () => {
      try {
        // Fetch test details
        const testRes = await fetch(`/api/tests/${testId}`)
        const testData = await testRes.json()
        console.log('[v0] Test data:', testData)
        
        if (testData.test) {
          setTest(testData.test)
          setTimeRemaining(testData.test.duration * 60)
        }

        // Fetch questions for this test
        const questionsRes = await fetch(`/api/tests/${testId}/questions`)
        const questionsData = await questionsRes.json()
        console.log('[v0] Questions data:', questionsData)
        setQuestions(questionsData.questions || [])
      } catch (error) {
        console.error('[v0] Error fetching test:', error)
      } finally {
        setLoading(false)
      }
    }

    if (testId) {
      fetchTestData()
    }
  }, [testId])

  // Timer countdown
  useEffect(() => {
    if (showResults || timeRemaining <= 0) return

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setShowResults(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [showResults])

  const handleAnswer = (answer: string) => {
    const questionId = questions[currentQuestion].id
    setAnswers({
      ...answers,
      [questionId]: answer
    })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q) => {
      if (answers[q.id] === q.correct_answer) {
        correct++
      }
    })
    return correct
  }

  const handleSubmitTest = () => {
    console.log('[v0] Submit test clicked, showing results and form')
    setShowResults(true)
    setShowUserForm(true)
  }

  const handleSubmitResult = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted with user info:', userInfo)
    
    if (!userInfo.name || !userInfo.email || !userInfo.phone) {
      alert('Please fill all fields')
      return
    }

    const correctAnswers = calculateScore()
    const percentage = (correctAnswers / questions.length) * 100
    const timeTaken = test ? (test.duration * 60 - timeRemaining) : 0

    console.log('[v0] Submitting result:', { correctAnswers, percentage, timeTaken })

    try {
      const response = await fetch('/api/tests/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          testId,
          score: correctAnswers,
          percentage: Math.round(percentage),
          timeTaken,
          correctAnswers,
          totalQuestions: questions.length,
          name: userInfo.name,
          email: userInfo.email,
          phone: userInfo.phone
        })
      })

      console.log('[v0] Submit response status:', response.status)
      const responseData = await response.json()
      console.log('[v0] Submit response data:', responseData)

      if (response.ok) {
        console.log('[v0] Redirecting to leaderboard')
        router.push(`/test/${testId}/leaderboard`)
      } else {
        alert('Failed to save result: ' + (responseData.error || 'Unknown error'))
      }
    } catch (error) {
      console.error('[v0] Error submitting result:', error)
      alert('An error occurred: ' + (error instanceof Error ? error.message : 'Unknown error'))
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading test...</div>
      </div>
    )
  }

  if (showResults) {
    const correctAnswers = calculateScore()
    const percentage = (correctAnswers / questions.length) * 100

    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Test Completed!</h1>
            
            <div className="space-y-4 mb-8">
              <div className="text-5xl font-bold text-primary">
                {correctAnswers}/{questions.length}
              </div>
              <div className="text-2xl font-semibold text-foreground">
                {Math.round(percentage)}%
              </div>
              <div className="text-muted-foreground">
                Time Taken: {Math.floor((test?.duration! * 60 - timeRemaining) / 60)}m {(test?.duration! * 60 - timeRemaining) % 60}s
              </div>
            </div>

            {!showUserForm ? (
              <Button
                onClick={handleSubmitTest}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Add to Leaderboard
              </Button>
            ) : (
              <form onSubmit={handleSubmitResult} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Submit to Leaderboard
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-muted-foreground">No questions found for this test</div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{test?.title}</h1>
            <p className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {questions.length}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">
                {Math.floor(timeRemaining / 60)}:{String(timeRemaining % 60).padStart(2, '0')}
              </span>
            </div>
            <Button variant="outline" onClick={() => handleSubmitTest()}>
              Submit Test
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Questions List */}
          <div className="md:col-span-1">
            <div className="bg-card border border-border rounded-lg p-4 sticky top-24">
              <h3 className="font-bold mb-3">Questions</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestion(idx)}
                    className={`w-10 h-10 rounded flex items-center justify-center text-sm font-semibold transition-colors ${
                      idx === currentQuestion
                        ? 'bg-primary text-white'
                        : answers[questions[idx].id]
                        ? 'bg-green-500 text-white'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="md:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">{currentQ.question_text}</h2>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {['option_a', 'option_b', 'option_c', 'option_d'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option[7]?.toUpperCase() || '')}
                    className={`w-full text-left p-4 border-2 rounded-lg transition-colors ${
                      answers[currentQ.id] === option[7]?.toUpperCase()
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="font-semibold">{option[7]?.toUpperCase()}</div>
                    <div className="text-sm">{(currentQ as any)[option]}</div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex gap-4">
                <Button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  variant="outline"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentQuestion === questions.length - 1}
                  variant="outline"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
