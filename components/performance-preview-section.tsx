"use client"
import { TrendingUp, Target, Clock, Medal } from "lucide-react"

export default function PerformancePreviewSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Your Performance Analytics
          </h2>
          <p className="text-muted-foreground">
            Real-time insights into your preparation progress and growth
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Performance Trend */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg">Performance Trend</h3>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>

            <div className="space-y-4 mb-6">
              {/* Sparkline-style chart */}
              <div className="flex items-end gap-1 h-24">
                {[45, 52, 48, 61, 58, 68, 72, 75, 73, 81].map((value, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                    style={{ height: `${(value / 100) * 100}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Current</p>
                <p className="text-2xl font-bold text-foreground">81%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Improvement</p>
                <p className="text-2xl font-bold text-green-600">+36%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Best</p>
                <p className="text-2xl font-bold text-primary">95%</p>
              </div>
            </div>
          </div>

          {/* Subject Accuracy */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-bold text-lg mb-6">Accuracy by Subject</h3>

            <div className="space-y-4">
              {[
                { subject: "Reasoning", accuracy: 88 },
                { subject: "Quantitative", accuracy: 74 },
                { subject: "English", accuracy: 82 },
                { subject: "General Awareness", accuracy: 76 },
              ].map((item) => (
                <div key={item.subject}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{item.subject}</span>
                    <span className="text-sm font-bold text-primary">{item.accuracy}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                      style={{ width: `${item.accuracy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Accuracy</p>
            </div>
            <p className="text-3xl font-black text-blue-600 mb-1">80%</p>
            <p className="text-xs text-muted-foreground">Overall average</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-50/50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Avg Time</p>
            </div>
            <p className="text-3xl font-black text-green-600 mb-1">2.4s</p>
            <p className="text-xs text-muted-foreground">Per question</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-50/50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Medal className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Rank</p>
            </div>
            <p className="text-3xl font-black text-purple-600 mb-1">Top 5%</p>
            <p className="text-xs text-muted-foreground">Among all students</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-50/50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-amber-600" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Growth</p>
            </div>
            <p className="text-3xl font-black text-amber-600 mb-1">+8%</p>
            <p className="text-xs text-muted-foreground">Last 7 days</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
            View Full Dashboard
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
