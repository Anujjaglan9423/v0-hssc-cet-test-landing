import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ancient History | Haryana GK | CET TEST",
  description: "Read exam-focused Ancient History notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/ancient-history` },
  openGraph: { title: "Ancient History | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/ancient-history` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
