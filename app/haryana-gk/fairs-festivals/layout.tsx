import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fairs Festivals | Haryana GK | CET TEST",
  description: "Read exam-focused Fairs Festivals notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/fairs-festivals` },
  openGraph: { title: "Fairs Festivals | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/fairs-festivals` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
