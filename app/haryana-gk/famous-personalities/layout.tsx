import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Famous Personalities | Haryana GK | CET TEST",
  description: "Read exam-focused Famous Personalities notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/famous-personalities` },
  openGraph: { title: "Famous Personalities | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/famous-personalities` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
