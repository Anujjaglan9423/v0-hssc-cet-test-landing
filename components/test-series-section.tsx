"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Clock, FileQuestion, ListChecks } from "lucide-react"

const practicePaths = [
  {
    title: "Full-length mock tests",
    description: "Build stamina by completing a timed set instead of answering isolated questions. Check the displayed duration and question count before you start: different exams use different patterns.",
    icon: Clock,
    nextStep: "After each test, review both incorrect and unanswered questions.",
  },
  {
    title: "Topic-wise revision",
    description: "Choose the subject you find difficult, revise the underlying idea and then answer a short set of related questions. Use explanations to identify why other options are wrong.",
    icon: ListChecks,
    nextStep: "Keep a short error log and repeat weak topics after a few days.",
  },
  {
    title: "Previous-paper preparation",
    description: "Use official question papers when the recruiting authority makes them available. Compare their dated instructions with current notices; older papers may have a different syllabus or marking scheme.",
    icon: BookOpen,
    nextStep: "Our practice questions are not described as official previous-year questions unless a source is provided.",
  },
]

export default function TestSeriesSection() {
  return (
    <section id="test-series" className="scroll-mt-20 bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Practice methods</span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">Choose your practice path</h2>
          <p className="mt-4 leading-7 text-muted-foreground">Use each type of practice for a different learning goal. The live mock-test directory shows which tests are currently available.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {practicePaths.map((path) => (
            <article key={path.title} className="flex flex-col rounded-2xl border border-border bg-card p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><path.icon className="h-6 w-6" /></div>
              <h3 className="text-xl font-semibold">{path.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{path.description}</p>
              <div className="mt-5 border-t border-border pt-4 text-sm leading-6"><span className="font-semibold">Suggested next step:</span> {path.nextStep}</div>
              <Link href="/mock-test" className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"><FileQuestion className="h-4 w-4" /> Browse available tests <ArrowRight className="h-4 w-4" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
