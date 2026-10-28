import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Haryana Basic Info | Haryana GK | CET TEST",
  description: "Read exam-focused Haryana Basic Info notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/haryana-basic-info` },
  openGraph: { title: "Haryana Basic Info | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/haryana-basic-info` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
