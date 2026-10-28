import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Soil Resources | Haryana GK | CET TEST",
  description: "Read exam-focused Soil Resources notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/soil-resources` },
  openGraph: { title: "Soil Resources | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/soil-resources` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
