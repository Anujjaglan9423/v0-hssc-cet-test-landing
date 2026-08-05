"use client"
import { CheckCircle2, Lock, BookOpen } from "lucide-react"

interface PathStep {
  level: string
  title: string
  topics: number
  progress: number
  status: "completed" | "current" | "locked"
  testsCompleted: number
  hoursSpent: number
}

const pathSteps: PathStep[] = [
  {
    level: "Foundations",
    title: "Build Your Basics",
    topics: 12,
    progress: 100,
    status: "completed",
    testsCompleted: 8,
    hoursSpent: 24,
  },
  {
    level: "Intermediate",
    title: "Master Core Concepts",
    topics: 18,
    progress: 65,
    status: "current",
    testsCompleted: 12,
    hoursSpent: 36,
  },
  {
    level: "Advanced",
    title: "Perfect Your Skills",
    topics: 15,
    progress: 0,
    status: "locked",
    testsCompleted: 0,
    hoursSpent: 0,
  },
  {
    level: "Final Prep",
    title: "Exam Simulation",
    topics: 10,
    progress: 0,
    status: "locked",
    testsCompleted: 0,
    hoursSpent: 0,
  },
]

export default function LearningPathSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Your Learning Path
          </h2>
          <p className="text-muted-foreground">
            Structured roadmap to master your exam in 4 progressive levels
          </p>
        </div>

        {/* Path Visualization */}
        <div className="space-y-4">
          {pathSteps.map((step, index) => (
            <div key={step.level}>
              {/* Step Card */}
              <div
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                  step.status === "completed"
                    ? "bg-green-50/50 border-green-200"
                    : step.status === "current"
                      ? "bg-primary/10 border-primary/50 ring-2 ring-primary/20"
                      : "bg-muted/50 border-border"
                }`}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xl ${
                      step.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : step.status === "current"
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <CheckCircle2 className="w-7 h-7" />
                    ) : step.status === "current" ? (
                      <BookOpen className="w-7 h-7" />
                    ) : (
                      <Lock className="w-7 h-7" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold text-muted-foreground mb-1">
                          {step.level}
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {step.topics} topics • {step.testsCompleted} tests completed
                        </p>
                      </div>

                      {/* Stats */}
                      {step.status !== "locked" && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:text-right">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Progress</p>
                            <p className="text-2xl font-bold text-foreground">{step.progress}%</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Hours</p>
                            <p className="text-2xl font-bold text-foreground">{step.hoursSpent}</p>
                          </div>
                          <div className="col-span-2 md:col-span-1">
                            <p className="text-xs text-muted-foreground mb-1">Tests</p>
                            <p className="text-2xl font-bold text-foreground">{step.testsCompleted}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Progress Bar */}
                    {step.status !== "locked" && (
                      <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            step.status === "completed"
                              ? "bg-green-500"
                              : "bg-primary"
                          }`}
                          style={{ width: `${step.progress}%` }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Next Button */}
                  {step.status === "current" && (
                    <button className="px-4 py-2 md:px-6 md:py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors flex-shrink-0 whitespace-nowrap text-sm">
                      Continue
                    </button>
                  )}
                </div>
              </div>

              {/* Connector Line */}
              {index < pathSteps.length - 1 && (
                <div className="h-2 bg-gradient-to-b from-border/50 to-transparent my-2" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            You&apos;re {Math.round((pathSteps[0].progress + pathSteps[1].progress) / 2)}% complete with your prep journey
          </p>
          <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
            View Full Progress Report
          </button>
        </div>
      </div>
    </section>
  )
}
