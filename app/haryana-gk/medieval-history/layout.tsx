import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Medieval History | Haryana GK | CET TEST",
  description: "Read exam-focused Medieval History notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/medieval-history` },
  openGraph: { title: "Medieval History | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/medieval-history` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
