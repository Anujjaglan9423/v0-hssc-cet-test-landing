"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, BarChart3, Clock, Shield, Smartphone, Zap, Target, Users } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Test Bank",
    description: "Access 10,000+ questions covering all HSSC CET subjects with detailed solutions.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track your progress with detailed performance reports and identify weak areas.",
  },
  {
    icon: Clock,
    title: "Real Exam Environment",
    description: "Practice in conditions that mirror the actual HSSC CET exam pattern.",
  },
  {
    icon: Target,
    title: "Topic-wise Practice",
    description: "Focus on specific topics with targeted practice tests and instant feedback.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Study anywhere with our responsive platform optimized for all devices.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get immediate feedback with detailed explanations for every question.",
  },
  {
    icon: Shield,
    title: "Updated Content",
    description: "Stay ahead with regularly updated questions based on latest exam patterns.",
  },
  {
    icon: Users,
    title: "Live Rankings",
    description: "Compare your performance with thousands of aspirants on our leaderboard.",
  },
]

export default function FeaturesSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const items = sectionRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-24 scroll-mt-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs font-bold mb-4">
            PREMIUM FEATURES
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 text-balance leading-tight">
            Everything Built for Your Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced tools and features designed specifically to help you master competitive exams with confidence and precision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-index={index}
              className={`group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-accent group-hover:scale-110 transition-all">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
