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

  const examTests = tests.filter((t) => t.category === "exam")
  const subjectTests = tests.filter((t) => t.category === "subject")
  const topicTests = tests.filter((t) => t.category === "topic")

  const filterTests = (testList: typeof tests) =>
    testList.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))

  const TestCard = ({ test }: { test: (typeof tests)[0] }) => (
    <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            test.category === "exam"
              ? "bg-primary/20 text-primary"
              : test.category === "subject"
                ? "bg-accent/20 text-accent"
                : "bg-amber-500/20 text-amber-500"
          }`}
        >
          {test.category === "exam" ? (
            <FileText className="w-6 h-6" />
          ) : test.category === "subject" ? (
            <BookOpen className="w-6 h-6" />
          ) : (
            <Target className="w-6 h-6" />
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
          {test.difficulty.charAt(0).toUpperCase() + test.difficulty.slice(1)}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {test.title}
      </h3>

      {test.subject && <p className="text-sm text-muted-foreground mb-1">Subject: {test.subject.name}</p>}
      {test.topic && <p className="text-sm text-muted-foreground mb-3">Topic: {test.topic.name}</p>}

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <FileText className="w-4 h-4" />
          {test.questions_count} Qs
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {test.duration} min
        </span>
        <span className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          {(test.attempts_count || 0).toLocaleString()}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Avg: {test.avg_score || 0}%</span>
        </div>
        <Link href={`/student/test/${test.id}`}>
          <Button size="sm" className="gap-2 group-hover:bg-primary">
            <Play className="w-4 h-4" />
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
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Test Series</h1>
          <p className="text-muted-foreground mt-1">Choose from our comprehensive test collection</p>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search tests..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
            <FileText className="w-7 h-7 text-primary" />
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">{examTests.length}</p>
            <p className="text-sm text-muted-foreground">Full Mock Tests</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-accent" />
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">{subjectTests.length}</p>
            <p className="text-sm text-muted-foreground">Subject Tests</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <Target className="w-7 h-7 text-amber-500" />
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">{topicTests.length}</p>
            <p className="text-sm text-muted-foreground">Topic Tests</p>
          </div>
        </div>
      </div>

      {/* Tests Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Tests</TabsTrigger>
          <TabsTrigger value="exam">Full Exams</TabsTrigger>
          <TabsTrigger value="subject">Subject-wise</TabsTrigger>
          <TabsTrigger value="topic">Topic-wise</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {filterTests(tests).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <TabsContent value="exam">
          {filterTests(examTests).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
