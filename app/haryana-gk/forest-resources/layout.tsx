import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Forest Resources | Haryana GK | CET TEST",
  description: "Read exam-focused Forest Resources notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/forest-resources` },
  openGraph: { title: "Forest Resources | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/forest-resources` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
