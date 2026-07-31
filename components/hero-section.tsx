"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, CheckCircle2, Sparkles, BookOpen } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 overflow-hidden relative bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/40 bg-accent/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">50,000+ ASPIRANTS PREPARING RIGHT NOW</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-background">
              Your admit card to{" "}
              <span className="text-accent">
                cracking HSSC CET
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-background/70 max-w-xl leading-relaxed">
              Real exam-pattern mock tests, instant results and all-India rank — built for Haryana CET, SSC, Railway and UKSSSC aspirants who want results, not distractions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-foreground px-8 group cursor-pointer font-semibold"
                >
                  Start free mock test
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/mock-test">
                <Button size="lg" variant="outline" className="px-8 group border-background/30 hover:bg-background/10 cursor-pointer bg-transparent text-background">
                  See exam list <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-accent/20 overflow-hidden flex-shrink-0" />
                  ))}
                </div>
                <span className="text-sm text-background/70">4.8/5 average rating from qualifiers across 12 states</span>
              </div>
            </div>
          </div>

          {/* Right Content - Mock Hall Ticket Preview */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="bg-background rounded-2xl shadow-2xl p-6 relative z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="absolute top-4 right-4 bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold">
                VERIFIED RESULT
              </div>
              <div className="space-y-4 text-foreground">
                <div className="text-xs font-bold text-muted-foreground">MOCK HALL TICKET</div>
                <h3 className="text-lg font-bold">HSSC CET — Full Length Test</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs font-bold text-muted-foreground">CANDIDATE</div>
                    <div className="font-semibold">Priya Sharma</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground">ROLL NUMBER</div>
                    <div className="font-semibold">CET-2024-88342</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground">EXAM CENTRE</div>
                    <div className="font-semibold">Haryana CET Group C</div>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="text-sm font-bold text-accent">↑ 32 / 100</div>
                    <div className="text-xs text-muted-foreground">ALL-INDIA RANK #342</div>
                  </div>
                </div>
              </div>
              <div className="absolute w-20 h-20 border-2 border-border rounded-lg top-32 right-6 flex items-center justify-center text-xs text-muted-foreground bg-muted">
                Photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
