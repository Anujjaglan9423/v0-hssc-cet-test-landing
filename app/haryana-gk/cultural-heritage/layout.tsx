import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cultural Heritage | Haryana GK | CET TEST",
  description: "Read exam-focused Cultural Heritage notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/cultural-heritage` },
  openGraph: { title: "Cultural Heritage | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/cultural-heritage` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
