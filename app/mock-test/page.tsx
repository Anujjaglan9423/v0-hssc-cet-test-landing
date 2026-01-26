"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Loader2, ChevronRight, BookOpen, GraduationCap, AlertCircle, Lock, FileText, Clock, Play, ArrowLeft } from "lucide-react"
import Link from "next/link"

const categoryIcons: Record<string, React.ReactNode> = {
  haryana: <GraduationCap className="w-8 h-8" />,
  ssc: <BookOpen className="w-8 h-8" />,
}

const categoryColors: Record<string, string> = {
  haryana: "from-blue-500 to-blue-700",
  ssc: "from-green-500 to-green-700",
}

const defaultCategories = [
  {
    id: "haryana",
    name: "Haryana Exams",
    slug: "haryana",
    description: "CET, Police, Group D, and more - One free mock test per section",
    exams: [],
  },
  {
    id: "ssc",
    name: "SSC Exams",
    slug: "ssc",
    description: "CGL, CHSL, MTS, and more - One free mock test per section",
    exams: [],
  },
]

function TestCard({ test, isFree, isTestTaken, examSlug }: { test: any; isFree: boolean; isTestTaken: boolean; examSlug: string }) {
  const router = useRouter()

  const handleTestClick = () => {
    if (isFree) {
      router.push(`/student/test/${test.id}?mock=true`)
    } else {
      router.push("/signup")
    }
  }

  return (
    <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/20 text-primary">
            <FileText className="w-6 h-6" />
          </div>
          {!isFree && (
            <div className="flex items-center gap-1 bg-amber-500/20 text-amber-600 px-3 py-1.5 rounded-full text-xs font-semibold">
              <Lock className="w-3 h-3" />
              Premium
            </div>
          )}
          {isFree && !isTestTaken && (
            <Badge variant="secondary" className="bg-green-500/20 text-green-600 border-green-500/30">
              Free
            </Badge>
          )}
          {isTestTaken && isFree && (
            <Badge className="bg-green-500 text-white">Completed</Badge>
          )}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {test.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            {test.total_questions} Qs
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {test.duration} min
          </span>
        </div>

        {isFree ? (
          <Button
            onClick={handleTestClick}
            disabled={isTestTaken}
            className="w-full gap-2"
          >
            <Play className="w-4 h-4" />
            {isTestTaken ? "Test Completed" : "Start Free Mock"}
          </Button>
        ) : (
          <Button 
            onClick={handleTestClick}
            variant="outline" 
            className="w-full gap-2 bg-transparent border-amber-500/30 text-amber-600 hover:bg-amber-500/10"
          >
            <Lock className="w-4 h-4" />
            Sign up to take this test
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export default function MockTestPage() {
  const [categories, setCategories] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function loadCategories() {
      setIsLoading(true)
      setError(null)

      try {
        const { data, error: err } = await supabase
          .from("exam_categories")
          .select("*")
          .eq("is_active", true)
          .order("display_order")

        if (!isMounted) return

        if (err) throw err

        if (data && data.length > 0) {
          setCategories(data)
        } else {
          setCategories(defaultCategories)
        }
      } catch (err: any) {
        // Ignore abort errors - they're expected when component unmounts
        if (err?.name === "AbortError" || !isMounted) {
          return
        }
        console.error("[v0] Error loading mock test categories:", err)
        if (isMounted) {
          setError("Failed to load mock test categories")
          setCategories(defaultCategories)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadCategories()

    return () => {
      isMounted = false
    }
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">Try Free Mock Tests</h1>
        <p className="text-lg text-muted-foreground">
          Get one full-length mock exam free from each section. No registration needed for the first test!
        </p>
      </div>

      {/* Info Banner */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-primary font-semibold text-sm">i</span>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">How it works</p>
          <p className="text-sm text-muted-foreground">
            Take one free mock test from each exam section without creating an account. To access additional tests, you'll need to sign up.
          </p>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-200">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={`/mock-test/${category.slug}`}>
            <Card className="group cursor-pointer overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
              {/* Image/Gradient Header */}
              <div
                className={`relative h-48 bg-gradient-to-br ${categoryColors[category.slug] || "from-gray-500 to-gray-700"}`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {categoryIcons[category.slug] || <BookOpen className="w-8 h-8" />}
                  </div>
                </div>
                <Badge className="absolute top-3 right-3 bg-white/90 text-foreground hover:bg-white">
                  {category.exams?.length || 3} Exams
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                  Explore Free Tests
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
