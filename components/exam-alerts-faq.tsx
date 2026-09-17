"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How often are exam alerts updated on CET TEST?",
    answer: "We check official state and central government recruiting agencies daily, including public service commissions, staff selection boards, UPSC, SSC, Railway RRB, IBPS and NTA.",
  },
  {
    question: "Which states and government agencies are covered?",
    answer: "CET TEST covers notifications from state commissions and boards across India along with central agencies such as UPSC, SSC, Railway RRB, IBPS, NTA, India Post, DRDO and LIC.",
  },
  {
    question: "Are these exam alerts official?",
    answer: "Yes. Every alert is discovered from an official government agency website and includes a source link so you can verify the original notice, dates, eligibility and application instructions.",
  },
]

export default function ExamAlertsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section aria-labelledby="exam-alerts-faq" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            FAQs
          </span>
          <h2 id="exam-alerts-faq" className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">Got questions? We&apos;ve got answers.</p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="overflow-hidden rounded-xl border border-border bg-card">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-muted/50"
                >
                  <span className="pr-4 font-medium text-foreground">{faq.question}</span>
                  <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
                  <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
