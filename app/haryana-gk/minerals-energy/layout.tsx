import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Minerals Energy | Haryana GK | CET TEST",
  description: "Read exam-focused Minerals Energy notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/minerals-energy` },
  openGraph: { title: "Minerals Energy | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/minerals-energy` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
