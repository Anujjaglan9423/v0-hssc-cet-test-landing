import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Archaeological Sites | Haryana GK | CET TEST",
  description: "Read exam-focused Archaeological Sites notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/archaeological-sites` },
  openGraph: { title: "Archaeological Sites | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/archaeological-sites` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
