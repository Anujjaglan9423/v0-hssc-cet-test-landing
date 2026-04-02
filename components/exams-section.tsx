'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BarChart3, Train, Landmark, Mountain } from "lucide-react";

export default function ExamsSection() {

  const examCategories = [
    {
      name: "SSC Exams",
      description: "CGL, CHSL, MTS, JE and other SSC recruitment exams",
      link: "/exams/ssc",
      icon: BarChart3,
      color: "blue",
    },
    {
      name: "Railway Exams",
      description: "RRB NTPC, JE, ASM, Group D and other RRB exams",
      link: "/exams/railway",
      icon: Train,
      color: "red",
    },
    {
      name: "Haryana Exams",
      description: "HSSC CET, HTET, Haryana Police and state recruitment exams",
      link: "/exams/haryana",
      icon: Landmark,
      color: "green",
    },
    {
      name: "Uttarakhand Exams",
      description: "UKSSSC VDO, Patwari, Police and Uttarakhand state exams",
      link: "/exams/uksssc",
      icon: Mountain,
      color: "purple",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Choose Your Exam Preparation
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Start your journey with structured mock tests designed for real exam success
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examCategories.map((exam, idx) => {
            const Icon = exam.icon;

            return (
              <Link key={idx} href={exam.link}>
                <div
                  className="
                relative group h-full p-[1px] rounded-2xl
                bg-gradient-to-br from-gray-200 to-gray-100
                hover:from-blue-500/40 hover:to-purple-500/40
                transition-all duration-500
              "
                >
                  {/* Inner Card */}
                  <div
                    className="
                  rounded-2xl bg-white p-7 h-full
                  shadow-sm hover:shadow-xl
                  transition-all duration-500
                  flex flex-col justify-between
                "
                  >
                    {/* Top */}
                    <div>
                      {/* Icon */}
                      <div
                        className={`
                      w-12 h-12 rounded-xl flex items-center justify-center mb-5
                      bg-${exam.color}-50 text-${exam.color}-600
                      group-hover:scale-110 transition
                    `}
                      >
                        <Icon size={22} strokeWidth={2} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                        {exam.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {exam.description}
                      </p>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition">
                        Explore Tests
                      </span>

                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-blue-100 transition">
                        →
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  )
}
