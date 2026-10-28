import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Languages Literature | Haryana GK | CET TEST",
  description: "Read exam-focused Languages Literature notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/languages-literature` },
  openGraph: { title: "Languages Literature | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/languages-literature` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
