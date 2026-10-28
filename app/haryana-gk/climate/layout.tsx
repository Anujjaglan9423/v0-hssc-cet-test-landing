import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Climate | Haryana GK | CET TEST",
  description: "Read exam-focused Climate notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/climate` },
  openGraph: { title: "Climate | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/climate` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
