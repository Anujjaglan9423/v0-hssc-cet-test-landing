"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, CheckCircle2, Sparkles, BookOpen, Rocket } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0)
    return () => clearTimeout(timer)
  }, [])

  const features = ["10,000+ Practice Questions", "Real-time Analytics", "Personalized Learning Path"]

  return (
    <section className="pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-primary">TRUSTED BY 50K+ STUDENTS</span>
            </div>

            {/* Heading - Modern & Bold */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance tracking-tight">
                Ace Your
                <br />
                <span className="bg-gradient-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent">
                  Competitive Exams
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Master Haryana exams, SSC, Railway, and more. Comprehensive prep with 10,000+ questions, real exam patterns, and AI-powered insights.
            </p>

            {/* Modern Features List */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Premium Style */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/30 text-primary-foreground px-8 h-14 text-base font-semibold group transition-all cursor-pointer"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/mock-test">
                <Button size="lg" variant="outline" className="px-8 h-14 text-base font-semibold border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 cursor-pointer bg-transparent group">
                  <Zap className="w-4 h-4 mr-2" />
                  Try Free Mock Test
                </Button>
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-3 border-background bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-sm font-medium text-foreground">
                  <span className="text-primary font-bold">4.9/5</span> from 50K+ reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative h-full">
              {/* Premium Main Card */}
              <div className="bg-card rounded-3xl shadow-2xl border border-border/50 p-8 relative z-10 backdrop-blur-sm">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border border-border/30">
                  <Image
                    src="/students-studying-online-exam-preparation-india.jpg"
                    alt="Students preparing for exam"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Floating Stat Card 1 */}
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-accent to-cyan-500 rounded-2xl shadow-2xl p-5 animate-float text-white border border-accent/30">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <span className="text-2xl font-bold">98%</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold opacity-90">Success Rate</p>
                      <p className="text-xs opacity-75">Among Our Students</p>
                    </div>
                  </div>
                </div>

                {/* Floating Stat Card 2 */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-primary to-purple-600 rounded-2xl shadow-2xl p-5 animate-float-delay text-white border border-primary/30">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <BookOpen className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold opacity-90">10K+ Questions</p>
                      <p className="text-xs opacity-75">Comprehensive Bank</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
