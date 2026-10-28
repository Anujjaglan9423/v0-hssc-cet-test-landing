import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Demographics | Haryana GK | CET TEST",
  description: "Read exam-focused Demographics notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/demographics` },
  openGraph: { title: "Demographics | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/demographics` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
