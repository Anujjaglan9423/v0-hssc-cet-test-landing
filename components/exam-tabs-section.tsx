"use client"
import { useState } from "react"
import { BookOpen, BarChart3, Target, Zap } from "lucide-react"

interface ExamTab {
  id: string
  name: string
  icon: React.ReactNode
  testsAvailable: number
  studyMaterials: number
  totalQuestions: number
  topicsCovered: number
  avgScore: number
}

const exams: ExamTab[] = [
  {
    id: "hssc",
    name: "HSSC CET",
    icon: <Target className="w-5 h-5" />,
    testsAvailable: 156,
    studyMaterials: 320,
    totalQuestions: 3200,
    topicsCovered: 45,
    avgScore: 78.5,
  },
  {
    id: "ssc",
    name: "SSC CHSL",
    icon: <BookOpen className="w-5 h-5" />,
    testsAvailable: 124,
    studyMaterials: 280,
    totalQuestions: 2800,
    topicsCovered: 38,
    avgScore: 75.2,
  },
  {
    id: "railway",
    name: "Railway",
    icon: <Zap className="w-5 h-5" />,
    testsAvailable: 98,
    studyMaterials: 240,
    totalQuestions: 2400,
    topicsCovered: 32,
    avgScore: 72.8,
  },
  {
    id: "banking",
    name: "Banking",
    icon: <BarChart3 className="w-5 h-5" />,
    testsAvailable: 142,
    studyMaterials: 310,
    totalQuestions: 3100,
    topicsCovered: 42,
    avgScore: 76.9,
  },
]

export default function ExamTabsSection() {
  const [activeTab, setActiveTab] = useState("hssc")
  const activeExam = exams.find((e) => e.id === activeTab)!

  return (
    <section className="py-16 bg-gradient-to-b from-card/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Choose Your Exam
          </h2>
          <p className="text-muted-foreground">
            Select your target exam and access tailored preparation materials
          </p>
        </div>

        {/* Exam Tabs */}
        <div className="flex gap-2 md:gap-4 mb-8 flex-wrap">
          {exams.map((exam) => (
            <button
              key={exam.id}
              onClick={() => setActiveTab(exam.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${
                activeTab === exam.id
                  ? "bg-primary text-white border-primary"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              {exam.icon}
              <span className="hidden sm:inline">{exam.name}</span>
              <span className="sm:hidden text-xs">{exam.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Exam Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-sm text-muted-foreground mb-1 font-medium">Mock Tests</p>
            <p className="text-3xl font-bold text-primary mb-2">{activeExam.testsAvailable}</p>
            <p className="text-xs text-muted-foreground">Available to practice</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-sm text-muted-foreground mb-1 font-medium">Questions</p>
            <p className="text-3xl font-bold text-accent mb-2">{activeExam.totalQuestions}</p>
            <p className="text-xs text-muted-foreground">In question bank</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-sm text-muted-foreground mb-1 font-medium">Topics</p>
            <p className="text-3xl font-bold text-purple-600 mb-2">{activeExam.topicsCovered}</p>
            <p className="text-xs text-muted-foreground">Fully covered</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-sm text-muted-foreground mb-1 font-medium">Avg Score</p>
            <p className="text-3xl font-bold text-green-600 mb-2">{activeExam.avgScore}%</p>
            <p className="text-xs text-muted-foreground">Student average</p>
          </div>
        </div>

        {/* Study Materials */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Study Materials</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {activeExam.studyMaterials} carefully curated resources including notes, papers, and syllabus guides.
                </p>
                <button className="text-primary font-semibold hover:underline text-sm">
                  Explore Materials →
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Start Mock Test</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Practice with real exam-level mock tests and get instant feedback on your performance.
                </p>
                <button className="text-accent font-semibold hover:underline text-sm">
                  Take Your First Test →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
