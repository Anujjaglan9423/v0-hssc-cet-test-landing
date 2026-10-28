import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern History | Haryana GK | CET TEST",
  description: "Read exam-focused Modern History notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/modern-history` },
  openGraph: { title: "Modern History | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/modern-history` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
