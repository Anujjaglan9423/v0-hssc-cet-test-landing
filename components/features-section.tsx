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
    <section id="features" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            EVERYTHING ON THE SYLLABUS, NOTHING EXTRA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Built like the actual exam paper
          </h2>
          <p className="text-lg text-muted-foreground">
            Every section below mirrors what you&apos;ll face on exam day — pattern, timing and marking included.
          </p>
        </div>

        {/* Features Grid - 2x3 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto border border-border rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-index={index}
              className={`p-6 md:p-8 transition-all duration-500 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <feature.icon className="w-4 h-4 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
