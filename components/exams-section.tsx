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
    <section
      id="exams"
      className="py-24 px-4 md:px-6 lg:px-8 scroll-mt-24 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Choose Your Exam Preparation
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Select your exam category and start practicing with{" "}
            <span className="font-semibold text-gray-700">
              unlimited free mock tests
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examCategories.map((exam, idx) => (
            <Link key={idx} href={exam.link}>
              <div
                className={`
              relative overflow-hidden rounded-2xl p-8 h-full cursor-pointer group
              border border-white/40 backdrop-blur-xl
              bg-white/70
              shadow-md hover:shadow-2xl
              transition-all duration-500
              hover:-translate-y-2
            `}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />

                {/* Top */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="text-5xl transform group-hover:scale-110 transition duration-300">
                    {exam.icon}
                  </div>

                  <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 transition">
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition">
                  {exam.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {exam.description}
                </p>

                {/* Button */}
                <Button
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
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
