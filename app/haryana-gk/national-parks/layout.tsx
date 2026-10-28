import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "National Parks | Haryana GK | CET TEST",
  description: "Read exam-focused National Parks notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/national-parks` },
  openGraph: { title: "National Parks | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/national-parks` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
