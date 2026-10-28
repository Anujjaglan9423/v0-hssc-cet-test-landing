import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sports Awards | Haryana GK | CET TEST",
  description: "Read exam-focused Sports Awards notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/sports-awards` },
  openGraph: { title: "Sports Awards | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/sports-awards` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
