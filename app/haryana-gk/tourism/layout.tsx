import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tourism | Haryana GK | CET TEST",
  description: "Read exam-focused Tourism notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/tourism` },
  openGraph: { title: "Tourism | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/tourism` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
