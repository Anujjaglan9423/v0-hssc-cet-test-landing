"use client"

import { useEffect, useState, useRef } from "react"
import { Users, FileText, Award, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Active Students",
  },
  {
    icon: FileText,
    value: 10000,
    suffix: "+",
    label: "Practice Questions",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Success Rate",
  },
  {
    icon: TrendingUp,
    value: 500,
    suffix: "+",
    label: "Selections",
  },
]

function useCountUp(target: number, duration = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration, startCounting])

  return count
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(stat.value, 2000, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden ${
        isVisible ? "animate-count-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary group-hover:to-accent group-hover:scale-110 transition-all">
          <stat.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
        </div>
        <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          {count.toLocaleString()}
          {stat.suffix}
        </p>
        <p className="text-muted-foreground font-semibold">{stat.label}</p>
      </div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
