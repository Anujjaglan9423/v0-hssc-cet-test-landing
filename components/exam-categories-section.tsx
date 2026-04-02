"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const examCategories = [
  {
    title: "Haryana Exams",
    description: "HSSC CET, Police Constable, Group D & More",
    exams: ["HSSC CET", "HSSC Police Constable", "HSSSC Group D", "Haryana VDO"],
    href: "/exams/haryana",
    color: "border-orange-500 bg-orange-50 dark:bg-orange-950/20",
    badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
  },
  {
    title: "SSC Exams",
    description: "SSC CGL, CHSL, MTS & All Other SSC Exams",
    exams: ["SSC CGL", "SSC CHSL", "SSC MTS", "SSC JE"],
    href: "/exams/ssc",
    color: "border-blue-500 bg-blue-50 dark:bg-blue-950/20",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  },
  {
    title: "Railway Exams",
    description: "RRB NTPC, Group D, ALP & More",
    exams: ["RRB NTPC", "RRB Group D", "RRB ALP", "RRB Technician"],
    href: "/exams/railway",
    color: "border-green-500 bg-green-50 dark:bg-green-950/20",
    badgeColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  },
  {
    title: "Uttarakhand UKSSSC",
    description: "VDO, Patwari, Forest Guard & More",
    exams: ["UK VDO", "Patwari/Lekhpal", "Forest Guard", "UK Police"],
    href: "/exams/uksssc",
    color: "border-purple-500 bg-purple-50 dark:bg-purple-950/20",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
  },
]

export default function ExamCategoriesSection() {
  return (
    <section id="exams" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            All Exams
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Choose Your Exam Category
          </h2>
          <p className="text-lg text-muted-foreground">
            Prepare for government exams across Haryana, SSC, Railway, and Uttarakhand
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {examCategories.map((category) => (
            <Link key={category.title} href={category.href}>
              <div
                className={`group rounded-xl border-2 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full ${category.color}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-6">{category.description}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {category.exams.map((exam) => (
                    <span
                      key={exam}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${category.badgeColor}`}
                    >
                      {exam}
                    </span>
                  ))}
                </div>

                <Button className="w-full gap-2">
                  Explore Tests
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Text */}
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <p className="text-foreground mb-4">
            <span className="font-semibold">50,000+ students</span> are already preparing with CET TEST
          </p>
          <p className="text-muted-foreground">
            Get unlimited free mock tests, previous year papers, and detailed performance analytics for all exams
          </p>
        </div>
      </div>
    </section>
  )
}
