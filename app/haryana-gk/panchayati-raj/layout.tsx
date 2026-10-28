import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Panchayati Raj | Haryana GK | CET TEST",
  description: "Read exam-focused Panchayati Raj notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/panchayati-raj` },
  openGraph: { title: "Panchayati Raj | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/panchayati-raj` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
