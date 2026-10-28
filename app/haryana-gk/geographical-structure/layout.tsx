import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Geographical Structure | Haryana GK | CET TEST",
  description: "Read exam-focused Geographical Structure notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/geographical-structure` },
  openGraph: { title: "Geographical Structure | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/geographical-structure` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
