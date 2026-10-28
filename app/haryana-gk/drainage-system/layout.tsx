import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drainage System | Haryana GK | CET TEST",
  description: "Read exam-focused Drainage System notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/drainage-system` },
  openGraph: { title: "Drainage System | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/drainage-system` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
