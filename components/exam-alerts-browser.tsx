// "use client"

// import { useMemo, useState } from "react"
// import type { ExamAlert } from "@/lib/exam-alerts"
// import { ChevronDown } from "lucide-react"

// const fallbackOrder = ["Results", "Admit Cards", "Latest Jobs", "Answer Key", "Documents", "Admission"]

// function categoryName(alert: ExamAlert) {
//   const value = alert.category?.trim()
//   if (value && !/exam alert/i.test(value)) return value

//   const title = alert.title.toLowerCase()
//   if (/result|merit list|score card|marks|final result/.test(title)) return "Results"
//   if (/admit card|hall ticket|exam date|city intimation|call letter/.test(title)) return "Admit Cards"
//   if (/answer key|response sheet/.test(title)) return "Answer Key"
//   if (/scholarship|certificate|aadhaar|aadhar|pan card|voter id|document/.test(title)) return "Documents"
//   if (/admission|counselling|counseling|allotment/.test(title)) return "Admission"
//   if (/online form|recruitment|vacancy|post|apply online|constable|teacher|engineer/.test(title)) return "Latest Jobs"
//   return "Latest Jobs"
// }

// function titleFor(alert: ExamAlert) {
//   return alert.title.replace(/^(HSSC|HPSC|UKSSSC|UKPSC|Railway|SSC)\s*[:|-]\s*/i, "")
// }

// function alertHref(alert: ExamAlert) {
//   if (!alert.sourceUrl) return `/blog/${encodeURIComponent(alert.slug)}`

//   try {
//     const url = new URL(alert.sourceUrl)
//     return url.protocol === "http:" || url.protocol === "https:"
//       ? alert.sourceUrl
//       : `/blog/${encodeURIComponent(alert.slug)}`
//   } catch {
//     return `/blog/${encodeURIComponent(alert.slug)}`
//   }
// }

// function CategoryColumn({ name, alerts }: { name: string; alerts: ExamAlert[] }) {
//   const [expanded, setExpanded] = useState(false)
//   const visibleAlerts = expanded ? alerts : alerts.slice(0, 12)

//   return (
//     <section className="flex min-w-0 flex-col border border-primary bg-white" aria-labelledby={`category-${name}`}>
//       <h2 id={`category-${name}`} className="bg-primary px-3 py-2 text-center text-lg font-normal text-primary-foreground sm:text-xl">
//         {name}
//       </h2>
//       <div className="flex flex-1 flex-col px-5 py-4">
//         <ul className="flex flex-col gap-4 text-[15px] leading-[1.2] text-[#0000b8] sm:text-base">
//           {visibleAlerts.map((alert) => (
//             <li key={alert.id} className="list-disc pl-0 marker:text-black">
//               <a
//                 href={alertHref(alert)}
//                 target={alert.sourceUrl && alertHref(alert) === alert.sourceUrl ? "_blank" : undefined}
//                 rel={alert.sourceUrl && alertHref(alert) === alert.sourceUrl ? "noopener noreferrer" : undefined}
//                 className="underline decoration-1 underline-offset-1 hover:text-primary focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//               >
//                 {titleFor(alert)}
//               </a>
//             </li>
//           ))}
//         </ul>
//         {alerts.length > 12 && (
//           <button type="button" onClick={() => setExpanded((value) => !value)} className="mt-auto self-end rounded-full bg-[#0788e8] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#006fc2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
//             {expanded ? "Show Less" : "View More"}
//             <ChevronDown className={`ml-1 inline-block size-4 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
//           </button>
//         )}
//       </div>
//     </section>
//   )
// }

// export default function ExamAlertsBrowser({ alerts }: { alerts: ExamAlert[] }) {
//   const categories = useMemo(() => {
//     const groups = new Map<string, ExamAlert[]>()
//     for (const alert of alerts) {
//       const name = categoryName(alert)
//       groups.set(name, [...(groups.get(name) ?? []), alert])
//     }
//     return [...groups.entries()].sort(([a], [b]) => {
//       const aIndex = fallbackOrder.findIndex((item) => item.toLowerCase() === a.toLowerCase())
//       const bIndex = fallbackOrder.findIndex((item) => item.toLowerCase() === b.toLowerCase())
//       if (aIndex === -1 && bIndex === -1) return a.localeCompare(b)
//       if (aIndex === -1) return 1
//       if (bIndex === -1) return -1
//       return aIndex - bIndex
//     })
//   }, [alerts])

//   if (!categories.length) return <p className="border border-primary bg-white p-6 text-center text-slate-700">No exam notifications are available right now.</p>

//   return <div className="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">{categories.map(([name, categoryAlerts]) => <CategoryColumn key={name} name={name} alerts={categoryAlerts} />)}</div>
// }


"use client"

import { useMemo, useState } from "react"
import type { ExamAlert } from "@/lib/exam-alerts"
import { ArrowUpRight, ChevronDown, Search } from "lucide-react"

const CATEGORY_ORDER = ["Latest Jobs", "Results", "Admit Cards", "Exam Dates", "Answer Keys", "Syllabus", "Admissions", "Documents", "Other Updates"] as const
const LIMIT = 8

function categoryName(alert: ExamAlert): string {
  const raw = alert.category?.trim().toLowerCase() || ""
  const predefined: Record<string, string> = {
    "latest jobs": "Latest Jobs", jobs: "Latest Jobs", recruitment: "Latest Jobs",
    results: "Results", result: "Results", "admit cards": "Admit Cards", "admit card": "Admit Cards",
    "exam dates": "Exam Dates", "exam date": "Exam Dates", "answer key": "Answer Keys", "answer keys": "Answer Keys",
    syllabus: "Syllabus", admission: "Admissions", admissions: "Admissions", documents: "Documents",
  }
  if (predefined[raw]) return predefined[raw]
  if (raw && !/^(exam alerts?|general|other)$/i.test(raw)) return alert.category!.trim()
  const title = alert.title.toLowerCase()
  if (/answer\s*keys?|response\s*sheet/.test(title)) return "Answer Keys"
  if (/result|merit\s*list|score\s*card|scorecard|cut.?off|selection\s*list/.test(title)) return "Results"
  if (/admit\s*card|hall\s*ticket|city\s*intimation|call\s*letter/.test(title)) return "Admit Cards"
  if (/exam\s*date|exam\s*schedule|exam\s*calendar|exam\s*postpon|reschedul/.test(title)) return "Exam Dates"
  if (/syllabus|exam\s*pattern/.test(title)) return "Syllabus"
  if (/admission|counsell?ing|seat\s*allotment/.test(title)) return "Admissions"
  if (/certificate|document\s*verification|aadhaar|aadhar|pan\s*card|voter\s*id/.test(title)) return "Documents"
  if (/recruitment|vacanc|notification|apply\s*online|online\s*form|registration|application\s*form/.test(title)) return "Latest Jobs"
  return "Other Updates"
}

function cleanTitle(alert: ExamAlert) {
  return alert.title.replace(/^(HSSC|HPSC|UKSSSC|UKPSC|Railway|SSC)\s*[:|–-]\s*/i, "").trim() || alert.title
}

function officialLink(url: string | null | undefined): string | null {
  if (!url) return null
  try {
    const parsed = new URL(url)
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? parsed.href : null
  } catch { return null }
}

function CategoryColumn({ name, alerts }: { name: string; alerts: ExamAlert[] }) {
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? alerts : alerts.slice(0, LIMIT)
  const id = `alerts-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
  return (
    <section aria-labelledby={id} className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/80 px-5 py-4">
        <h3 id={id} className="text-base font-bold text-slate-900">{name}</h3>
        <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold tabular-nums text-slate-600 ring-1 ring-slate-200">{alerts.length}</span>
      </div>
      <ul id={`${id}-list`} className="flex-1 divide-y divide-slate-100 px-5">
        {shown.map((alert) => {
          const href = officialLink(alert.sourceUrl)
          return (
            <li key={alert.id} className="py-3.5">
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-start gap-2 text-sm font-medium leading-6 text-slate-800 underline-offset-4 hover:text-primary hover:underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  <span>{cleanTitle(alert)}</span><ArrowUpRight aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-slate-400 group-hover:text-primary" />
                </a>
              ) : <span className="text-sm font-medium leading-6 text-slate-700">{cleanTitle(alert)}</span>}
              <p className="mt-1 text-xs text-slate-500">{alert.authority || "Recruitment update"} · {href ? "Source link available" : "Source link unavailable"}</p>
            </li>
          )
        })}
      </ul>
      {alerts.length > LIMIT && (
        <button type="button" aria-expanded={expanded} aria-controls={`${id}-list`} onClick={() => setExpanded((v) => !v)} className="flex items-center justify-center gap-2 border-t border-slate-100 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary">
          {expanded ? "Show fewer" : `Show all ${alerts.length}`}<ChevronDown aria-hidden="true" className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </section>
  )
}

export default function ExamAlertsBrowser({ alerts }: { alerts: ExamAlert[] }) {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const categories = useMemo(() => {
    const groups = new Map<string, ExamAlert[]>()
    for (const alert of alerts) {
      const name = categoryName(alert)
      const group = groups.get(name)
      if (group) group.push(alert)
      else groups.set(name, [alert])
    }
    return [...groups.entries()].sort(([a], [b]) => {
      const ai = CATEGORY_ORDER.indexOf(a as (typeof CATEGORY_ORDER)[number])
      const bi = CATEGORY_ORDER.indexOf(b as (typeof CATEGORY_ORDER)[number])
      return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi) || a.localeCompare(b)
    })
  }, [alerts])
  const visible = useMemo(() => categories.map(([name, items]) => [name, items.filter((a) => `${a.title} ${a.authority || ""}`.toLowerCase().includes(search.trim().toLowerCase()))] as const).filter(([name, items]) => items.length && (filter === "All" || name === filter)), [categories, search, filter])

  if (!alerts.length) return <div role="status" className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-600">No exam notices are available right now. Check again later or visit the relevant recruiting authority's website.</div>

  return (
    <section aria-labelledby="alerts-list-heading">
      <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div><p className="text-sm font-semibold uppercase tracking-wider text-primary">Browse updates</p><h2 id="alerts-list-heading" className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Latest exam notices</h2><p className="mt-1 text-sm text-slate-600">{alerts.length} notices currently listed. Select a category or search by keyword.</p></div>
        <label className="relative block w-full sm:max-w-xs"><span className="sr-only">Search exam notices</span><Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" /><input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search notices or authorities" className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20" /></label>
      </div>
      <div role="group" aria-label="Filter notices by category" className="mb-6 flex flex-wrap gap-2">
        {["All", ...categories.map(([name]) => name)].map((name) => <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${filter === name ? "border-primary bg-primary text-primary-foreground" : "border-slate-200 bg-white text-slate-700 hover:border-primary/40"}`}>{name}</button>)}
      </div>
      {visible.length ? <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">{visible.map(([name, items]) => <CategoryColumn key={name} name={name} alerts={items} />)}</div> : <p role="status" className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-600">No notices match your search. Try another keyword or category.</p>}
    </section>
  )
}
