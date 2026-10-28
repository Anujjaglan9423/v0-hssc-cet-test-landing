import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Education Health | Haryana GK | CET TEST",
  description: "Read exam-focused Education Health notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/education-health` },
  openGraph: { title: "Education Health | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/education-health` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
