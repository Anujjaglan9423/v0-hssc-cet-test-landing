"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Where do these exam alerts come from?",
    answer: "Exam alerts are collected from official HSSC, HPSC, UKSSSC, UKPSC, Railway RRB and SSC sources. Every listing includes an official source link when available.",
  },
  {
    question: "Which exams are listed on this page?",
    answer: "This page lists the latest results, admit cards, answer keys, job notifications and other official notices from Haryana, Uttarakhand, Railway RRB and SSC agencies.",
  },
  {
    question: "How often are exam alerts updated?",
    answer: "The official agency websites are checked through scheduled syncs. New notices are added without duplicating existing official links.",
  },
  {
    question: "Are these exam alerts official?",
    answer: "Yes. Each notice links to the official agency source so you can verify the complete notification, dates, eligibility and instructions before taking action.",
  },
]

export default function ExamAlertsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="exam-alerts-faq" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">FAQs</span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Got questions? We&apos;ve got answers.</p>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="overflow-hidden rounded-xl border border-border bg-card">
                <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-muted/50">
                  <span className="pr-4 font-medium text-foreground">{faq.question}</span>
                  <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen ? <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{faq.answer}</p> : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
