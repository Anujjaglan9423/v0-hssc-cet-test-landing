export type AlertSource = "HSSC" | "UKSSSC" | "UKPSC" | "HPSC"

export type ExamAlert = {
  id: string
  source: AlertSource
  title: string
  summary: string
  publishedAt: string
  deadline: string
  category: string
  urgent?: boolean
  link: string
}

export const examAlerts: ExamAlert[] = [
  {
    id: "hssc-group-c-2026",
    source: "HSSC",
    title: "HSSC Group C Recruitment 2026: Application Notice",
    summary: "New recruitment notice released for Group C posts. Check eligibility, vacancies and application dates in the official notice.",
    publishedAt: "Today, 08:40 AM",
    deadline: "Apply by 28 Sep 2026",
    category: "Recruitment",
    urgent: true,
    link: "https://hssc.gov.in",
  },
  {
    id: "uksssc-admit-card",
    source: "UKSSSC",
    title: "UKSSSC Graduate Level Exam Admit Card Update",
    summary: "Admit cards and exam centre instructions are now available for the upcoming graduate level examination.",
    publishedAt: "Yesterday, 06:15 PM",
    deadline: "Exam on 04 Oct 2026",
    category: "Admit Card",
    link: "https://sssc.uk.gov.in",
  },
  {
    id: "hpsc-answer-key",
    source: "HPSC",
    title: "HPSC Subject Knowledge Test Answer Key Released",
    summary: "Provisional answer key has been published. Candidates can submit objections through the official portal.",
    publishedAt: "12 Sep 2026",
    deadline: "Objections by 16 Sep 2026",
    category: "Answer Key",
    link: "https://hpsc.gov.in",
  },
  {
    id: "ukpsc-calendar",
    source: "UKPSC",
    title: "UKPSC Revised Examination Calendar 2026",
    summary: "The commission has published a revised schedule for upcoming state services and departmental examinations.",
    publishedAt: "10 Sep 2026",
    deadline: "View official calendar",
    category: "Exam Calendar",
    link: "https://psc.uk.gov.in",
  },
]

export const sourceMeta: Record<AlertSource, { label: string; color: string }> = {
  HSSC: { label: "Haryana", color: "bg-blue-500/10 text-blue-600 dark:text-blue-300" },
  UKSSSC: { label: "Uttarakhand", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300" },
  UKPSC: { label: "Uttarakhand", color: "bg-violet-500/10 text-violet-600 dark:text-violet-300" },
  HPSC: { label: "Haryana", color: "bg-amber-500/10 text-amber-600 dark:text-amber-300" },
}

export const sourceStatus = [
  { name: "HSSC", url: "hssc.gov.in", checked: "Today, 02:00 AM", found: 1 },
  { name: "UKSSSC", url: "sssc.uk.gov.in", checked: "Today, 02:01 AM", found: 1 },
  { name: "UKPSC", url: "psc.uk.gov.in", checked: "Today, 02:01 AM", found: 0 },
  { name: "HPSC", url: "hpsc.gov.in", checked: "Today, 02:02 AM", found: 0 },
] as const
