"use client"

import { useState, useEffect } from "react"
import { ChartCard } from "@/components/dashboard/chart-card"
import { DataTable } from "@/components/dashboard/data-table"
import { getStudentResults } from "@/lib/actions/student"
import { Button } from "@/components/ui/button"
import { Trophy, Target, Clock, TrendingUp, Eye, CheckCircle, XCircle, MinusCircle, Loader2, FileUser } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import Link from "next/link"

const COLORS = ["#10b981", "#ef4444", "#6b7280"]

interface TestResultItem {
  id: string
  test_id: string
  attempt_id: string
  score: number
  percentage: number
  correct_answers: number
  wrong_answers: number
  unanswered: number
  total_questions: number
  time_taken: number
  rank?: number
  created_at: string
  test: {
    title: string
    test_type: string
    duration: number
    subject?: { name: string }
    topic?: { name: string }
  }
}

export default function StudentResultsPage() {
  const [results, setResults] = useState<TestResultItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedResult, setSelectedResult] = useState<TestResultItem | null>(null)
  const [visibleCount, setVisibleCount] = useState(10);
  const [search, setSearch] = useState("");
  const filteredResults = results.filter((r) =>
    (r.test?.title || "Unknown Test")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const visibleResults = filteredResults.slice(0, visibleCount);
  useEffect(() => {
    async function loadResults() {
      try {
        const data = await getStudentResults()
        setResults(data || [])
      } catch (error) {
        console.error("Error loading results:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadResults()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const avgScore =
    results.length > 0 ? Math.round(results.reduce((acc, r) => acc + (r.score || 0), 0) / results.length) : 0
  const bestScore = results.length > 0 ? Math.max(...results.map((r) => r.score || 0)) : 0
  const totalTime = results.reduce((acc, r) => acc + (r.time_taken || 0), 0)

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-semibold text-foreground">
            My Results
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your test performance
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">

          {/* CARD 1 */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>

              <div>
                <p className="text-2xl font-semibold text-foreground">
                  {results.length}
                </p>
                <p className="text-sm text-muted-foreground">
                  Tests Taken
                </p>
              </div>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
              </div>

              <div>
                <p className="text-2xl font-semibold text-emerald-600">
                  {avgScore}
                </p>
                <p className="text-sm text-muted-foreground">
                  Avg Marks
                </p>
              </div>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-amber-500" />
              </div>

              <div>
                <p className="text-2xl font-semibold text-amber-600">
                  {bestScore}
                </p>
                <p className="text-sm text-muted-foreground">
                  Best Marks
                </p>
              </div>

            </div>
          </div>

          {/* CARD 4 */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-red-500" />
              </div>

              <div>
                <p className="text-2xl font-semibold text-foreground">
                  {Math.floor(totalTime / 60)}m
                </p>
                <p className="text-sm text-muted-foreground">
                  Total Time
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      <ChartCard title="All Test Results">
        <div className="flex items-center justify-start mb-4">
          <input
            type="text"
            placeholder="Search test..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(10); // reset pagination on search
            }}
            className="w-full md:w-80 px-4 py-2 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        {results.length > 0 ? (
          <>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">

              {/* CARDS */}
              {visibleResults.map((result) => {
                const percentage = (result.score / result.total_questions) * 100;

                return (
                  <div
                    key={result.id}
                    className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition"
                  >

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                      {/* LEFT */}
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">
                          {result.test?.title || "Unknown Test"}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                          {new Date(result.created_at).toLocaleDateString()}
                        </p>

                        {/* STATS */}
                        <div className="flex flex-wrap gap-4 text-sm mt-2">

                          {/* Score */}
                          <span
                            className={`font-semibold ${percentage >= 80
                              ? "text-emerald-600"
                              : percentage >= 60
                                ? "text-amber-500"
                                : "text-red-500"
                              }`}
                          >
                            Score: {result.score}/{result.total_questions}
                          </span>

                          {/* Correct */}
                          <span className="text-emerald-600">
                            Correct: {result.correct_answers}/{result.total_questions}
                          </span>

                          {/* Time */}
                          <span className="text-muted-foreground">
                            Time: {Math.floor((result.time_taken || 0) / 60)}m
                          </span>

                          {/* Rank */}
                          <span className="flex items-center gap-1 text-amber-500">
                            <Trophy className="w-4 h-4" />
                            #{result.rank || "-"}
                          </span>
                        </div>
                      </div>

                      {/* RIGHT ACTIONS */}
                      <div className="flex items-center gap-2">

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedResult(result)}
                          className="cursor-pointer"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          <span className="block lg:hidden xl:block">Quick View</span>
                        </Button>

                        <Button size="sm" asChild className="cursor-pointer">
                          <Link href={`/student/results/${result.attempt_id}`}>
                            <FileUser className="w-4 h-4 mr-1 lg:block hidden xl:hidden" />
                            <span className="block lg:hidden xl:block">View Full</span>
                          </Link>
                        </Button>
                      </div>

                    </div>
                  </div>
                );
              })}

              {/* LOAD MORE BUTTON */}


            </div>
            {visibleCount < results.length && (
              <div className="flex justify-center pt-4">
                <Button
                  variant="outline"
                  onClick={() => setVisibleCount((prev) => prev + 10)}
                  className="cursor-pointer"
                >
                  Load More
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <Target className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              No test results yet. Take a test to see your results!
            </p>
            <Button className="mt-4 cursor-pointer" asChild>
              <Link href="/student/tests">Browse Tests</Link>
            </Button>
          </div>
        )}
      </ChartCard>
      {/* Result Detail Modal */}
      <Dialog open={!!selectedResult} onOpenChange={() => setSelectedResult(null)}>

        <DialogContent className="max-w-3xl w-full max-h-[85vh] overflow-hidden p-0 rounded-2xl flex flex-col">

          {selectedResult && (
            <>
              {/* Header */}
              <DialogHeader className="border-b px-6 py-4">
                <DialogTitle className="text-xl font-semibold">
                  {selectedResult.test?.title}
                </DialogTitle>
              </DialogHeader>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {/* YOUR CONTENT HERE */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-blue-50 rounded-xl text-center shadow-sm">
                    <p className="text-3xl font-bold text-blue-600">
                      {selectedResult.score}/{selectedResult.total_questions}
                    </p>
                    <p className="text-sm text-gray-500">Score</p>
                  </div>

                  <div className="p-5 bg-yellow-50 rounded-xl text-center shadow-sm">
                    <p className="text-3xl font-bold text-yellow-600">
                      #{selectedResult.rank || "-"}
                    </p>
                    <p className="text-sm text-gray-500">Rank</p>
                  </div>

                  <div className="p-5 bg-green-50 rounded-xl text-center shadow-sm">
                    <p className="text-3xl font-bold text-green-600">
                      {selectedResult.rank ? Math.max(0, 100 - selectedResult.rank * 10) : 0}%
                    </p>
                    <p className="text-sm text-gray-500">Percentile</p>
                  </div>
                </div>

                {/* Analysis Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                  {/* Left */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">
                      Question Analysis
                    </h4>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          Correct
                        </span>
                        <span className="font-bold text-green-600">
                          {selectedResult.correct_answers}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span className="flex items-center gap-2 text-gray-700">
                          <XCircle className="w-5 h-5 text-red-600" />
                          Wrong
                        </span>
                        <span className="font-bold text-red-600">
                          {selectedResult.wrong_answers}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                        <span className="flex items-center gap-2 text-gray-700">
                          <MinusCircle className="w-5 h-5 text-gray-500" />
                          Unattempted
                        </span>
                        <span className="font-bold text-gray-600">
                          {selectedResult.unanswered}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Chart */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">
                      Distribution
                    </h4>

                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Correct", value: selectedResult.correct_answers },
                            { name: "Wrong", value: selectedResult.wrong_answers },
                            { name: "Unattempted", value: selectedResult.unanswered },
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          paddingAngle={4}
                          dataKey="value"
                        >
                          {["#22c55e", "#ef4444", "#9ca3af"].map((color, index) => (
                            <Cell key={index} fill={color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 border-t pt-4">
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">
                      {new Date(selectedResult.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Time Taken</p>
                    <p className="font-medium">
                      {Math.floor((selectedResult.time_taken || 0) / 60)}m
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Total Questions</p>
                    <p className="font-medium">{selectedResult.total_questions}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Accuracy</p>
                    <p className="font-medium">
                      {Math.round(
                        (selectedResult.correct_answers /
                          (selectedResult.total_questions - selectedResult.unanswered)) *
                        100
                      ) || 0}
                      %
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="border-t px-6 py-4 bg-white">
                <Button className="w-full">
                  <Link href={`/student/results/${selectedResult.attempt_id}`}>
                    View Detailed Solutions
                  </Link>
                </Button>
              </div>
            </>
          )}

        </DialogContent>
      </Dialog>
    </div>
  )
}
