"use client"
import { Clock, Users, TrendingUp, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MockTest {
  id: string
  name: string
  exam: string
  difficulty: "Easy" | "Medium" | "Hard"
  questions: number
  duration: number
  passPercentage: number
  avgScore: number
  attempts: number
  yourScore?: number
  status: "new" | "in-progress" | "completed"
}

const mockTests: MockTest[] = [
  {
    id: "1",
    name: "Full Length Mock Test #45",
    exam: "HSSC CET",
    difficulty: "Hard",
    questions: 100,
    duration: 120,
    passPercentage: 68,
    avgScore: 72,
    attempts: 4892,
    yourScore: 74,
    status: "completed",
  },
  {
    id: "2",
    name: "General Knowledge Quiz #23",
    exam: "SSC CHSL",
    difficulty: "Medium",
    questions: 50,
    duration: 60,
    passPercentage: 72,
    avgScore: 76,
    attempts: 3421,
    status: "new",
  },
  {
    id: "3",
    name: "Reasoning Bootcamp #12",
    exam: "Banking",
    difficulty: "Hard",
    questions: 75,
    duration: 90,
    passPercentage: 65,
    avgScore: 68,
    attempts: 2156,
    status: "new",
  },
  {
    id: "4",
    name: "Quantitative Aptitude Pro #8",
    exam: "Railway",
    difficulty: "Hard",
    questions: 60,
    duration: 90,
    passPercentage: 60,
    avgScore: 65,
    attempts: 1823,
    yourScore: 58,
    status: "completed",
  },
  {
    id: "5",
    name: "English Language - Speed Test #34",
    exam: "HSSC CET",
    difficulty: "Medium",
    questions: 40,
    duration: 45,
    passPercentage: 75,
    avgScore: 78,
    attempts: 5123,
    status: "new",
  },
  {
    id: "6",
    name: "Current Affairs Monthly #11",
    exam: "SSC CHSL",
    difficulty: "Easy",
    questions: 50,
    duration: 50,
    passPercentage: 82,
    avgScore: 85,
    attempts: 3892,
    yourScore: 88,
    status: "completed",
  },
]

export default function MockTestDashboard() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Mock Tests & Practice
          </h2>
          <p className="text-muted-foreground">
            Practice with real exam-level tests and track your performance
          </p>
        </div>

        {/* Tests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTests.map((test) => (
            <div
              key={test.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Header with Difficulty Badge */}
              <div className="p-6 pb-4 border-b border-border/30">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-primary mb-1">{test.exam}</p>
                    <h3 className="font-bold text-lg text-foreground leading-tight">
                      {test.name}
                    </h3>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold text-white flex-shrink-0 ml-2 ${
                      test.difficulty === "Hard"
                        ? "bg-red-500"
                        : test.difficulty === "Medium"
                          ? "bg-orange-500"
                          : "bg-green-500"
                    }`}
                  >
                    {test.difficulty}
                  </div>
                </div>
              </div>

              {/* Test Details */}
              <div className="p-6 space-y-4">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">Q</span>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Questions</p>
                      <p className="font-bold text-foreground">{test.questions}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-bold text-foreground">{test.duration}m</p>
                    </div>
                  </div>
                </div>

                {/* Pass Rate & Average Score */}
                <div className="space-y-2 bg-muted/50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Pass Rate</span>
                    <span className="font-bold text-foreground">{test.passPercentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500"
                      style={{ width: `${test.passPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Your Performance (if completed) */}
                {test.status === "completed" && test.yourScore && (
                  <div className="space-y-2 bg-green-50 rounded-lg p-3 border border-green-200/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-700">Your Score</span>
                      <span className="text-2xl font-black text-green-600">{test.yourScore}</span>
                    </div>
                    <div className="w-full h-1.5 bg-green-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500"
                        style={{ width: `${(test.yourScore / test.questions) * 100}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-green-700">Above average by 2%</span>
                      <span className="text-green-700 font-bold">✓ Passed</span>
                    </div>
                  </div>
                )}

                {/* Attempts */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{test.attempts.toLocaleString()} attempts</span>
                </div>

                {/* Action Button */}
                <Button
                  className={`w-full font-semibold h-10 ${
                    test.status === "completed"
                      ? "bg-primary/10 text-primary hover:bg-primary/20"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  {test.status === "completed" ? "Retake Test" : "Start Test"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
            View All Tests (250+ Available)
          </button>
        </div>
      </div>
    </section>
  )
}

function ArrowRight({ className }: { className: string }) {
  return <span className={className}>→</span>
}
