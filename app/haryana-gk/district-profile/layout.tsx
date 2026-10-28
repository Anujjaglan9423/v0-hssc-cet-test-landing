import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "District Profile | Haryana GK | CET TEST",
  description: "Read exam-focused District Profile notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/district-profile` },
  openGraph: { title: "District Profile | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/district-profile` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
