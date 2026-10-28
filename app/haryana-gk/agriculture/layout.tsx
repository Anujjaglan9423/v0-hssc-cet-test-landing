import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agriculture | Haryana GK | CET TEST",
  description: "Read exam-focused Agriculture notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/agriculture` },
  openGraph: { title: "Agriculture | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/agriculture` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
