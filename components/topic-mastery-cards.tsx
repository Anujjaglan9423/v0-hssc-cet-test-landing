"use client"
import { TrendingUp, TrendingDown, Zap } from "lucide-react"

interface TopicMastery {
  title: string
  questionsSolved: number
  avgScore: number
  mastery: number
  trend: "up" | "down"
  difficulty: "Easy" | "Medium" | "Hard"
  color: string
}

const topics: TopicMastery[] = [
  {
    title: "General Knowledge",
    questionsSolved: 245,
    avgScore: 84,
    mastery: 85,
    trend: "up",
    difficulty: "Medium",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Quantitative",
    questionsSolved: 189,
    avgScore: 76,
    mastery: 72,
    trend: "up",
    difficulty: "Hard",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Reasoning",
    questionsSolved: 312,
    avgScore: 88,
    mastery: 92,
    trend: "up",
    difficulty: "Hard",
    color: "from-green-500 to-green-600",
  },
  {
    title: "English Language",
    questionsSolved: 156,
    avgScore: 79,
    mastery: 78,
    trend: "down",
    difficulty: "Medium",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Current Affairs",
    questionsSolved: 203,
    avgScore: 82,
    mastery: 80,
    trend: "up",
    difficulty: "Easy",
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Legal Awareness",
    questionsSolved: 134,
    avgScore: 75,
    mastery: 71,
    trend: "down",
    difficulty: "Medium",
    color: "from-cyan-500 to-cyan-600",
  },
]

export default function TopicMasteryCards() {
  return (
    <section className="py-16 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Topic Mastery
          </h2>
          <p className="text-muted-foreground">
            Track your progress across different subjects and topics
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-lg text-foreground">{topic.title}</h3>
                <div
                  className={`px-3 py-1 rounded-full bg-gradient-to-r ${topic.color} text-white text-xs font-bold`}
                >
                  {topic.difficulty}
                </div>
              </div>

              {/* Mastery Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Mastery</span>
                  <span className="text-lg font-bold text-foreground">{topic.mastery}%</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${topic.color} transition-all`}
                    style={{ width: `${topic.mastery}%` }}
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Questions</p>
                  <p className="text-lg font-bold text-foreground">{topic.questionsSolved}</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Avg Score</p>
                  <p className="text-lg font-bold text-foreground">{topic.avgScore}%</p>
                </div>
              </div>

              {/* Trend & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  {topic.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-sm font-semibold ${topic.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {topic.trend === "up" ? "Improving" : "Declining"}
                  </span>
                </div>
                <button className="text-primary font-semibold hover:underline text-sm">
                  Practice →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary">Pro Tip</span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Focus on Your Weak Areas</h3>
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            Our AI recommends practicing Legal Awareness next. You&apos;ve improved significantly in other topics, but this one needs more attention.
          </p>
          <button className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
            Start Focused Practice
          </button>
        </div>
      </div>
    </section>
  )
}
