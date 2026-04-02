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
    <section id="exams" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Choose Your Exam Preparation
          </h2>
          <p className="text-gray-500 mt-3">
            Select the exam category you want to prepare for and get started with unlimited free mock tests
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examCategories.map((exam, idx) => (
            <Link key={idx} href={exam.link}>
              <div
                className="
              bg-white rounded-xl p-6 border border-gray-200
              shadow-sm hover:shadow-md
              transition-all duration-300
              hover:-translate-y-1
              cursor-pointer group h-full
            "
              >
                {/* Top Section */}
                <div className="flex items-center justify-between mb-4">

                  {/* Icon (emoji or image) */}
                  <div className="text-4xl">{exam.icon}</div>

                  {/* Arrow (NO lucide) */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-blue-100 transition">
                    <span className="text-gray-500 group-hover:text-blue-600 transition">
                      →
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                  {exam.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                  {exam.description}
                </p>

                {/* Button */}
                <button
                  className="
                w-full py-2.5 rounded-lg text-sm font-medium
                bg-gray-100 text-gray-700
                hover:bg-blue-600 hover:text-white
                transition-all duration-300
              "
                >
                  Explore Tests
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
