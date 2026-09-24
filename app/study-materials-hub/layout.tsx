import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study Material Hub | Syllabus, Current Affairs & Haryana GK",
  description: "Choose syllabus guides, current affairs, or Haryana GK resources for your government exam preparation.",
  alternates: { canonical: "https://cettest.site/study-materials-hub" },
}

export default function StudyMaterialsHubLayout({ children }: { children: React.ReactNode }) {
  return children
}
