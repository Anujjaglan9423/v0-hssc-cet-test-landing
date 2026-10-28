import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Irrigation | Haryana GK | CET TEST",
  description: "Read exam-focused Irrigation notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/irrigation` },
  openGraph: { title: "Irrigation | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/irrigation` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
