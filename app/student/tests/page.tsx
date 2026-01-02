"use client"

import { useState, useEffect } from "react"
import { getAvailableTests } from "@/lib/actions/student"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Clock, Users, Search, Play, BookOpen, Target, Award, Loader2 } from "lucide-react"
import Link from "next/link"

export default function StudentTestsPage() {
  const [tests, setTests] = useState<any[]>([])
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadTests() {
      setIsLoading(true)
      try {
        const data = await getAvailableTests()
        setTests(data)
      } catch (error) {
        console.error("Error loading tests:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadTests()
  }, [])

  const examTests = tests.filter((t) => t.test_type === "full")
  const subjectTests = tests.filter((t) => t.test_type === "subject")
  const topicTests = tests.filter((t) => t.test_type === "topic")

  const filterTests = (testList: typeof tests) =>
    testList.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))

  const TestCard = ({ test }: { test: (typeof tests)[0] }) => (
    <div className="p-4 lg:p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-start justify-between mb-3 lg:mb-4">
        <div
          className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center ${
            test.test_type === "full"
              ? "bg-primary/20 text-primary"
              : test.test_type === "subject"
                ? "bg-accent/20 text-accent"
                : "bg-amber-500/20 text-amber-500"
          }`}
        >
          {test.test_type === "full" ? (
            <FileText className="w-5 h-5 lg:w-6 lg:h-6" />
          ) : test.test_type === "subject" ? (
            <BookOpen className="w-5 h-5 lg:w-6 lg:h-6" />
          ) : (
            <Target className="w-5 h-5 lg:w-6 lg:h-6" />
          )}
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            test.difficulty === "hard"
              ? "bg-destructive/20 text-destructive"
              : test.difficulty === "medium"
                ? "bg-amber-500/20 text-amber-500"
                : "bg-accent/20 text-accent"
          }`}
        >
          {test.difficulty ? test.difficulty.charAt(0).toUpperCase() + test.difficulty.slice(1) : "Medium"}
        </span>
      </div>

      <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {test.title}
      </h3>

      {test.subject && <p className="text-xs lg:text-sm text-muted-foreground mb-1">Subject: {test.subject.name}</p>}
      {test.topic && <p className="text-xs lg:text-sm text-muted-foreground mb-2 lg:mb-3">Topic: {test.topic.name}</p>}

      <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-xs lg:text-sm text-muted-foreground mb-3 lg:mb-4">
        <span className="flex items-center gap-1">
          <FileText className="w-3 h-3 lg:w-4 lg:h-4" />
          {test.questions_count} Qs
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
          {test.duration} min
        </span>
        <span className="flex items-center gap-1">
          <Users className="w-3 h-3 lg:w-4 lg:h-4" />
          {(test.attempts_count || 0).toLocaleString()}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 lg:gap-2">
          <Award className="w-3 h-3 lg:w-4 lg:h-4 text-muted-foreground" />
          <span className="text-xs lg:text-sm text-muted-foreground">Avg: {test.avg_score || 0}%</span>
        </div>
        <Link href={`/student/test/${test.id}`}>
          <Button size="sm" className="gap-1 lg:gap-2 text-xs lg:text-sm group-hover:bg-primary">
            <Play className="w-3 h-3 lg:w-4 lg:h-4" />
            Start
          </Button>
        </Link>
      </div>
    </div>
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Test Series</h1>
          <p className="text-sm lg:text-base text-muted-foreground mt-1">
            Choose from our comprehensive test collection
          </p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search tests..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Stats - Made responsive */}
      <div className="grid grid-cols-3 gap-3 lg:gap-6">
        <div className="bg-card border border-border rounded-xl p-4 lg:p-6 flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
          <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl bg-primary/20 flex items-center justify-center">
            <FileText className="w-5 h-5 lg:w-7 lg:h-7 text-primary" />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-xl lg:text-3xl font-bold text-foreground">{examTests.length}</p>
            <p className="text-xs lg:text-sm text-muted-foreground">Full Mock Tests</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 lg:p-6 flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
          <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl bg-accent/20 flex items-center justify-center">
            <BookOpen className="w-5 h-5 lg:w-7 lg:h-7 text-accent" />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-xl lg:text-3xl font-bold text-foreground">{subjectTests.length}</p>
            <p className="text-xs lg:text-sm text-muted-foreground">Subject Tests</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 lg:p-6 flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
          <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <Target className="w-5 h-5 lg:w-7 lg:h-7 text-amber-500" />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-xl lg:text-3xl font-bold text-foreground">{topicTests.length}</p>
            <p className="text-xs lg:text-sm text-muted-foreground">Topic Tests</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4 lg:space-y-6">
        <div className="overflow-x-auto -mx-4 px-4 lg:mx-0 lg:px-0">
          <TabsList className="w-max lg:w-auto">
            <TabsTrigger value="all" className="text-xs lg:text-sm">
              All Tests
            </TabsTrigger>
            <TabsTrigger value="full" className="text-xs lg:text-sm">
              Full Exams
            </TabsTrigger>
            <TabsTrigger value="subject" className="text-xs lg:text-sm">
              Subject-wise
            </TabsTrigger>
            <TabsTrigger value="topic" className="text-xs lg:text-sm">
              Topic-wise
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all">
          {filterTests(tests).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filterTests(tests).map((test) => (
                <TestCard key={test.id} test={test} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No tests available</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="full">
          {filterTests(examTests).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filterTests(examTests).map((test) => (
                <TestCard key={test.id} test={test} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No full exam tests available</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="subject">
          {filterTests(subjectTests).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filterTests(subjectTests).map((test) => (
                <TestCard key={test.id} test={test} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No subject tests available</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="topic">
          {filterTests(topicTests).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filterTests(topicTests).map((test) => (
                <TestCard key={test.id} test={test} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Target className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No topic tests available</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
