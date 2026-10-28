import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Judiciary | Haryana GK | CET TEST",
  description: "Read exam-focused Judiciary notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/judiciary` },
  openGraph: { title: "Judiciary | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/judiciary` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
