'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Clock, BookOpen, TrendingUp, ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

interface Test {
  id: string
  title: string
  description: string
  total_questions: number
  duration: number
  difficulty: string
  test_type: string
  exams?: {
    name: string
    slug: string
    exam_categories?: {
      name: string
      slug: string
    }
  }
}

export default function TestsPage() {
  const [tests, setTests] = useState<Test[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const res = await fetch('/api/tests')
        const data = await res.json()
        console.log('[v0] Fetched tests:', data)
        setTests(data.tests || [])
      } catch (error) {
        console.error('[v0] Error fetching tests:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTests()
  }, [])

  // Group tests by exam category
  const testsByCategory = tests.reduce((acc, test) => {
    const categoryName = test.exams?.exam_categories?.name || 'Other'
    if (!acc[categoryName]) {
      acc[categoryName] = []
    }
    acc[categoryName].push(test)
    return acc
  }, {} as Record<string, Test[]>)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800'
      case 'medium':
        return 'bg-orange-100 text-orange-800'
      case 'hard':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-lg">Loading tests...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Available Tests</h1>
          <p className="text-xl text-muted-foreground">
            {tests.length} mock tests available • Real exam patterns • Detailed analysis
          </p>
        </div>

        {tests.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">No tests available yet</p>
            <Link href="/">
              <Button variant="outline" className="mt-4">
                Back to Home
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {Object.entries(testsByCategory).map(([category, categoryTests]) => (
              <div key={category} className="border border-border rounded-lg bg-card overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedCategories((prev) => ({
                      ...prev,
                      [category]: !prev[category],
                    }))
                  }
                  className="w-full px-6 py-4 hover:bg-muted/50 transition-colors flex items-center justify-between"
                >
                  <h2 className="text-xl font-bold text-foreground text-left">{category}</h2>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {categoryTests.length} tests
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        expandedCategories[category] ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                
                {expandedCategories[category] && (
                  <div className="px-6 py-4 border-t border-border bg-muted/30">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryTests.map((test) => (
              <div
                key={test.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary/50"
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{test.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {test.description}
                  </p>
                </div>

                {/* Difficulty Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(test.difficulty)}`}>
                    {test.difficulty || 'Medium'}
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-border">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Questions</p>
                      <p className="font-bold">{test.total_questions}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-bold">{test.duration} min</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={`/test/${test.id}`} className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-11 group">
                    Start Test
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                {/* Leaderboard Link */}
                <Link href={`/test/${test.id}/leaderboard`} className="block mt-2">
                  <Button variant="outline" className="w-full">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Leaderboard
                  </Button>
                </Link>
              </div>
            ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
