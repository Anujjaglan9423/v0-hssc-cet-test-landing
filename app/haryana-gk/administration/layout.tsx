import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Administration | Haryana GK | CET TEST",
  description: "Read exam-focused Administration notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/administration` },
  openGraph: { title: "Administration | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/administration` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
