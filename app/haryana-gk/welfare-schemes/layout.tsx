import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welfare Schemes | Haryana GK | CET TEST",
  description: "Read exam-focused Welfare Schemes notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/welfare-schemes` },
  openGraph: { title: "Welfare Schemes | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/welfare-schemes` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
