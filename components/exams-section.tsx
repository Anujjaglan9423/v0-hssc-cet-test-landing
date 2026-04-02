'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ExamsSection() {
  const examCategories = [
    {
      name: "SSC Exams",
      description: "CGL, CHSL, MTS, JE and other SSC recruitment exams",
      link: "/exams/ssc",
      icon: "📊",
      gradient: "bg-gradient-to-br from-blue-500/10 to-blue-500/5",
      textColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      name: "Railway Exams",
      description: "RRB NTPC, JE, ASM, Group D and other RRB exams",
      link: "/exams/railway",
      icon: "🚂",
      gradient: "bg-gradient-to-br from-red-500/10 to-red-500/5",
      textColor: "text-red-600",
      borderColor: "border-red-200"
    },
    {
      name: "Haryana Exams",
      description: "HSSC CET, HTET, Haryana Police and state recruitment exams",
      link: "/exams/haryana",
      icon: "🏛️",
      gradient: "bg-gradient-to-br from-green-500/10 to-green-500/5",
      textColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      name: "Uttarakhand Exams",
      description: "UKSSSC VDO, Patwari, Police and Uttarakhand state exams",
      link: "/exams/uksssc",
      icon: "🏔️",
      gradient: "bg-gradient-to-br from-purple-500/10 to-purple-500/5",
      textColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
  ]

  return (
    <section id="exams" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-balance">Choose Your Exam Preparation</h2>
        <p className="text-center text-muted-foreground mb-12">Select the exam category you want to prepare for and get started with unlimited free mock tests</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examCategories.map((exam, idx) => (
            <Link key={idx} href={exam.link}>
              <div className={`${exam.gradient} rounded-lg p-8 border ${exam.borderColor} hover:shadow-lg transition-all duration-300 h-full cursor-pointer group`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl mb-2">{exam.icon}</div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${exam.textColor}`}>{exam.name}</h3>
                <p className="text-muted-foreground mb-6">{exam.description}</p>
                <Button className="w-full" variant="secondary">
                  Explore Tests
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
