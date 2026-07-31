"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, FileText, ArrowRight, Star } from "lucide-react"

const testSeries = [
  {
    title: "HSSC CET Full Length Tests",
    description: "Complete mock tests based on actual exam pattern",
    tests: 50,
    questions: 5000,
    duration: "90 mins each",
    difficulty: "Medium-Hard",
    popular: true,
    color: "bg-primary",
  },
  {
    title: "Topic-wise Practice Tests",
    description: "Focused practice on individual subjects",
    tests: 200,
    questions: 3000,
    duration: "30 mins each",
    difficulty: "Easy-Medium",
    popular: false,
    color: "bg-accent",
  },
  {
    title: "Previous Year Papers",
    description: "Actual questions from past HSSC CET exams",
    tests: 25,
    questions: 2000,
    duration: "90 mins each",
    difficulty: "As per exam",
    popular: true,
    color: "bg-chart-3",
  },
]

export default function TestSeriesSection() {
  return (
    <section id="test-series" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            TEST SERIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Choose your practice path
          </h2>
          <p className="text-lg text-muted-foreground">Multiple test series designed for comprehensive preparation.</p>
        </div>

        {/* Test Series Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testSeries.map((series, index) => (
            <div
              key={series.title}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Orange Top Border */}
              <div className="h-1 bg-accent" />

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground">{series.title}</h3>
                    {series.popular && (
                      <Badge className="bg-accent text-foreground px-2 py-1 text-xs font-bold">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{series.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div>
                    <div className="text-xs font-bold text-muted-foreground">Tests</div>
                    <div className="text-2xl font-bold text-foreground">{series.tests}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground">Questions</div>
                    <div className="text-2xl font-bold text-foreground">{series.questions}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground">Duration</div>
                    <div className="text-sm font-semibold text-foreground">{series.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground">Difficulty</div>
                    <div className="text-sm font-semibold text-foreground">{series.difficulty}</div>
                  </div>
                </div>

                <Link href="/signup" className="block">
                  <Button className={`w-full group/btn font-semibold cursor-pointer ${series.popular ? "bg-accent hover:bg-accent/90 text-foreground" : "bg-foreground text-background hover:bg-foreground/90"}`}>
                    Start practicing
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
