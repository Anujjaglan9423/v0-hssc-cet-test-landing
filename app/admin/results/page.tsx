"use client"

import { Suspense, useEffect, useState, useCallback } from "react"
import { getPaginatedTestResults } from "@/lib/actions/admin"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Trophy, Clock, User, FileText, Filter, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ResultsPagination } from "@/components/admin/results-pagination"

interface TestResult {
  id: string
  studentName: string
  studentEmail: string
  studentId: string
  testTitle: string
  testType: string
  subject: string
  topic: string
  score: number
  totalQuestions: number
  percentage: number
  timeTaken: number
  completedAt: string
}

const PAGE_SIZE = 10

function ResultsContent() {
  const [results, setResults] = useState<TestResult[]>([])
  const [allResults, setAllResults] = useState<TestResult[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [testTypeFilter, setTestTypeFilter] = useState("all")
  const [sortBy, setSortBy] = useState("date")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  const loadResults = useCallback(async () => {
    setLoading(true)
    const data = await getPaginatedTestResults(currentPage, PAGE_SIZE, {
      testType: testTypeFilter !== "all" ? testTypeFilter : undefined,
      sortBy: sortBy === "date" ? "created_at" : sortBy,
    })
    setResults(data.results)
    setTotalPages(data.totalPages)
    setTotalCount(data.totalCount)
    setLoading(false)
  }, [currentPage, testTypeFilter, sortBy])

  useEffect(() => {
    loadResults()
  }, [loadResults])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Apply client-side filtering for search (server-side would require additional params)
  const applyClientFilters = () => {
    let filtered = [...results]

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (r) =>
          r.studentName.toLowerCase().includes(term) ||
          r.studentEmail.toLowerCase().includes(term) ||
          r.testTitle.toLowerCase().includes(term) ||
          r.subject.toLowerCase().includes(term),
      )
    }

    return filtered
  }

  const displayedResults = applyClientFilters()

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getScoreBadge = (percentage: number) => {
    if (percentage >= 80) return <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Excellent</Badge>
    if (percentage >= 60) return <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Good</Badge>
    if (percentage >= 40) return <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">Average</Badge>
    return <Badge className="bg-red-500/10 text-red-600 border-red-500/20">Needs Improvement</Badge>
  }

  const exportToCSV = () => {
    const headers = [
      "Student Name",
      "Email",
      "Test Title",
      "Type",
      "Subject",
      "Topic",
      "Score",
      "Total",
      "Percentage",
      "Time Taken",
      "Completed At",
    ]
    const csvData = displayedResults.map((r) => [
      r.studentName,
      r.studentEmail,
      r.testTitle,
      r.testType,
      r.subject,
      r.topic,
      r.score,
      r.totalQuestions,
      `${r.percentage}%`,
      formatTime(r.timeTaken),
      formatDate(r.completedAt),
    ])

    const csvContent = [headers.join(","), ...csvData.map((row) => row.join(","))].join("\n")
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `test-results-page-${currentPage}-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  // Summary stats for current page only (not exceeding 1000 attempts or showing filtered results)
  const pageAttempts = displayedResults.length
  const pageAvgPercentage =
    pageAttempts > 0 ? Math.round(displayedResults.reduce((sum, r) => sum + r.percentage, 0) / pageAttempts) : 0
  const pagePassCount = displayedResults.filter((r) => r.percentage >= 60).length
  const pagePassRate = pageAttempts > 0 ? Math.round((pagePassCount / pageAttempts) * 100) : 0

  // Overall stats capped at 1000 for display, but actual total shown
  const displayAttempts = Math.min(totalCount, 1000)
  const displayMessage = totalCount > 1000 ? ` (showing 1000 of ${totalCount})` : ""

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Student Test Results</h1>
        <p className="text-muted-foreground">View all test attempts and scores by students</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Attempts</p>
                <p className="text-2xl font-bold text-foreground">{displayAttempts}{displayMessage !== "" && displayAttempts === 1000 ? "*" : ""}</p>
                {displayMessage && <p className="text-xs text-muted-foreground">{totalCount} total</p>}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Trophy className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg Score (Page)</p>
                <p className="text-2xl font-bold text-foreground">{pageAvgPercentage}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/20 rounded-lg">
                <User className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pass Rate (Page)</p>
                <p className="text-2xl font-bold text-foreground">{pagePassRate}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Passed (Page)</p>
                <p className="text-2xl font-bold text-foreground">
                  {pagePassCount}/{pageAttempts}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by student name, email, or test..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-3 flex-wrap">
              <Select value={testTypeFilter} onValueChange={setTestTypeFilter}>
                <SelectTrigger className="w-[150px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Test Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="full">Full Exam</SelectItem>
                  <SelectItem value="subject">Subject Test</SelectItem>
                  <SelectItem value="topic">Topic Test</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date (Latest)</SelectItem>
                  <SelectItem value="score">Score (Highest)</SelectItem>
                  <SelectItem value="student">Student Name</SelectItem>
                  <SelectItem value="test">Test Name</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={exportToCSV}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Table */}
      <Card>
        <CardHeader>
          <CardTitle>Test Results - Page {currentPage} ({displayedResults.length} entries)</CardTitle>
        </CardHeader>
        <CardContent>
          {displayedResults.length === 0 ? (
            <div className="text-center py-12">
              <Trophy className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No test results found</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto -mx-6 px-6 lg:overflow-visible lg:mx-0 lg:px-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-3 font-medium text-muted-foreground">Student</th>
                      <th className="text-left py-3 px-3 font-medium text-muted-foreground">Test</th>
                      <th className="text-left py-3 px-3 font-medium text-muted-foreground">Subject</th>
                      <th className="text-center py-3 px-3 font-medium text-muted-foreground">Score</th>
                      <th className="text-center py-3 px-3 font-medium text-muted-foreground">%</th>
                      <th className="text-center py-3 px-3 font-medium text-muted-foreground">Time</th>
                      <th className="text-center py-3 px-3 font-medium text-muted-foreground">Status</th>
                      <th className="text-left py-3 px-3 font-medium text-muted-foreground">Completed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedResults.map((result) => (
                      <tr key={result.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                        <td className="py-3 px-3">
                          <div>
                            <p className="font-medium text-foreground text-xs lg:text-sm">{result.studentName}</p>
                            <p className="text-xs text-muted-foreground truncate">{result.studentEmail}</p>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <div>
                            <p className="font-medium text-foreground text-xs lg:text-sm truncate">{result.testTitle}</p>
                            <Badge variant="outline" className="mt-1 text-xs capitalize">
                              {result.testType}
                            </Badge>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <div>
                            <p className="text-xs lg:text-sm text-foreground">{result.subject}</p>
                            {result.topic !== "-" && <p className="text-xs text-muted-foreground">{result.topic}</p>}
                          </div>
                        </td>
                        <td className="py-3 px-3 text-center">
                          <span className="font-bold text-foreground text-xs lg:text-sm">
                            {result.score}/{result.totalQuestions}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          <span className={`font-bold text-xs lg:text-sm ${result.percentage >= 60 ? "text-green-600" : "text-red-500"}`}>
                            {result.percentage}%
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center text-muted-foreground text-xs lg:text-sm">{formatTime(result.timeTaken)}</td>
                        <td className="py-3 px-3 text-center">{getScoreBadge(result.percentage)}</td>
                        <td className="py-3 px-3 text-xs lg:text-sm text-muted-foreground whitespace-nowrap">{formatDate(result.completedAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <ResultsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                isLoading={loading}
              />
            </>
          )}
        </CardContent>
      </Card>
    </>
  )
}

export default function AdminResultsPage() {
  return (
    <div className="p-6 lg:p-8 pt-20 lg:pt-8">
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        }
      >
        <ResultsContent />
      </Suspense>
    </div>
  )
}
