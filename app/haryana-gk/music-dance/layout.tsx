import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Music Dance | Haryana GK | CET TEST",
  description: "Read exam-focused Music Dance notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/music-dance` },
  openGraph: { title: "Music Dance | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/music-dance` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
