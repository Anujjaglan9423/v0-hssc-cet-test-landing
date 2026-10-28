import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Transport | Haryana GK | CET TEST",
  description: "Read exam-focused Transport notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/transport` },
  openGraph: { title: "Transport | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/transport` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
