"use client"

import { useMemo, useState } from "react"
import type { ExamAlert } from "@/lib/exam-alerts"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const fallbackOrder = ["Results", "Admit Cards", "Latest Jobs", "Answer Key", "Documents", "Admission"]

function categoryName(alert: ExamAlert) {
  const value = alert.category?.trim()
  if (value && !/exam alert/i.test(value)) return value

  const title = alert.title.toLowerCase()
  if (/result|merit list|score card|marks|final result/.test(title)) return "Results"
  if (/admit card|hall ticket|exam date|city intimation|call letter/.test(title)) return "Admit Cards"
  if (/answer key|response sheet/.test(title)) return "Answer Key"
  if (/scholarship|certificate|aadhaar|aadhar|pan card|voter id|document/.test(title)) return "Documents"
  if (/admission|counselling|counseling|allotment/.test(title)) return "Admission"
  if (/online form|recruitment|vacancy|post|apply online|constable|teacher|engineer/.test(title)) return "Latest Jobs"
  return "Latest Jobs"
}

function titleFor(alert: ExamAlert) {
  return alert.title.replace(/^(HSSC|HPSC|UKSSSC|UKPSC|Railway|SSC)\s*[:|-]\s*/i, "")
}

function CategoryColumn({ name, alerts }: { name: string; alerts: ExamAlert[] }) {
  const [expanded, setExpanded] = useState(false)
  const visibleAlerts = expanded ? alerts : alerts.slice(0, 12)

  return (
    <section className="flex min-w-0 flex-col border border-primary bg-white" aria-labelledby={`category-${name}`}>
      <h2 id={`category-${name}`} className="bg-primary px-3 py-2 text-center text-lg font-normal text-primary-foreground sm:text-xl">
        {name}
      </h2>
      <div className="flex flex-1 flex-col px-5 py-4">
        <ul className="flex flex-col gap-4 text-[15px] leading-[1.2] text-[#0000b8] sm:text-base">
          {visibleAlerts.map((alert) => (
            <li key={alert.id} className="list-disc pl-0 marker:text-black">
              <Link href={`/blog/${alert.slug}`} className="underline decoration-1 underline-offset-1 hover:text-primary focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                {titleFor(alert)}
              </Link>
            </li>
          ))}
        </ul>
        {alerts.length > 12 && (
          <button type="button" onClick={() => setExpanded((value) => !value)} className="mt-auto self-end rounded-full bg-[#0788e8] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#006fc2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            {expanded ? "Show Less" : "View More"}
            <ChevronDown className={`ml-1 inline-block size-4 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  )
}

export default function ExamAlertsBrowser({ alerts }: { alerts: ExamAlert[] }) {
  const categories = useMemo(() => {
    const groups = new Map<string, ExamAlert[]>()
    for (const alert of alerts) {
      const name = categoryName(alert)
      groups.set(name, [...(groups.get(name) ?? []), alert])
    }
    return [...groups.entries()].sort(([a], [b]) => {
      const aIndex = fallbackOrder.findIndex((item) => item.toLowerCase() === a.toLowerCase())
      const bIndex = fallbackOrder.findIndex((item) => item.toLowerCase() === b.toLowerCase())
      if (aIndex === -1 && bIndex === -1) return a.localeCompare(b)
      if (aIndex === -1) return 1
      if (bIndex === -1) return -1
      return aIndex - bIndex
    })
  }, [alerts])

  if (!categories.length) return <p className="border border-primary bg-white p-6 text-center text-slate-700">No exam notifications are available right now.</p>

  return <div className="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">{categories.map(([name, categoryAlerts]) => <CategoryColumn key={name} name={name} alerts={categoryAlerts} />)}</div>
}
