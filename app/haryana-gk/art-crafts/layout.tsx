import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Art Crafts | Haryana GK | CET TEST",
  description: "Read exam-focused Art Crafts notes, facts, and practice questions for Haryana CET preparation.",
  alternates: { canonical: `https://cettest.site/haryana-gk/art-crafts` },
  openGraph: { title: "Art Crafts | Haryana GK", description: "Haryana CET study notes and practice questions.", url: `https://cettest.site/haryana-gk/art-crafts` },
}

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
