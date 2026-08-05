"use client"
import { Clock, Flame, Trophy, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DailyChallengeWidget() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Challenge Info */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-4">
                <Flame className="w-4 h-4" />
                TODAY&apos;S CHALLENGE
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                Daily Question <span className="text-primary">Challenge</span>
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-blue-600">Q1</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">QUESTION</p>
                  <p className="font-semibold text-foreground">
                    What is the capital of Haryana?
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Difficulty</p>
                  <p className="font-bold text-foreground">Easy</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center gap-1 mb-1">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Time Limit</p>
                  </div>
                  <p className="font-bold text-foreground">60 sec</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center gap-1 mb-1">
                    <Trophy className="w-3 h-3 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Points</p>
                  </div>
                  <p className="font-bold text-foreground">+10</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Leaderboard Position</p>
                <p className="text-2xl font-black text-primary">#147</p>
                <p className="text-xs text-muted-foreground mt-1">out of 5,234 today</p>
              </div>

              <Link href="/tests" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-14 font-bold">
                  Attempt Challenge
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-primary/20 via-purple-200/10 to-accent/20 rounded-3xl aspect-square flex items-center justify-center border border-primary/20">
              <div className="text-center space-y-4">
                <div className="text-6xl">🎯</div>
                <p className="text-lg font-semibold text-foreground">Daily Challenge Active</p>
                <p className="text-sm text-muted-foreground">17 hours remaining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
