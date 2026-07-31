'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BarChart3, Train, Landmark, Mountain } from "lucide-react";

export default function ExamsSection() {

  const examCategories = [
    {
      code: "SSC-01",
      name: "SSC Exams",
      description: "CGL, CHSL, MTS, JE and other SSC recruitment exams",
      link: "/exams/ssc",
      icon: BarChart3,
    },
    {
      code: "RRB-02",
      name: "Railway Exams",
      description: "RRB NTPC, JE, ASM, Group D and other RRB exams",
      link: "/exams/railway",
      icon: Train,
    },
    {
      code: "HR-03",
      name: "Haryana Exams",
      description: "HSSC CET, HTET, Haryana Police and state recruitment exams",
      link: "/exams/haryana",
      icon: Landmark,
    },
    {
      code: "UK-04",
      name: "Uttarakhand Exams",
      description: "UKSSSC VDO, Patwari, Police and Uttarakhand state exams",
      link: "/exams/uksssc",
      icon: Mountain,
    },
  ];

  return (
    <section id="exams" className="py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            CHOOSE YOUR EXAM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Structured prep for every major recruitment exam
          </h2>
          <p className="text-lg text-muted-foreground">
            Pick your track and get a syllabus-mapped test plan from day one.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examCategories.map((exam, idx) => {
            const Icon = exam.icon;

            return (
              <Link key={idx} href={exam.link}>
                <div className="group h-full rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Orange Top Border */}
                  <div className="h-1 bg-accent" />
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Code */}
                    <div className="text-xs font-bold text-muted-foreground mb-3">
                      {exam.code}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition">
                      {exam.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                      {exam.description}
                    </p>

                    {/* Link */}
                    <div className="text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform">
                      Explore tests <ArrowRight className="w-4 h-4 inline ml-1" />
                    </div>
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
