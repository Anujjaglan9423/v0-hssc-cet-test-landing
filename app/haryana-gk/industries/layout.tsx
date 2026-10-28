import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industries | Haryana GK | CET TEST",
  description: "Read exam-focused Industries notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/industries` },
  openGraph: { title: "Industries | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/industries` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
