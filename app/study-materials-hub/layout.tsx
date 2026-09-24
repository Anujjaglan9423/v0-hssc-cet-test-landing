import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Haryana Government Exam Study Material | Syllabus, Current Affairs & Haryana GK",
  description: "Focused syllabus, current affairs, and Haryana GK resources for Haryana government exam preparation.",
  alternates: { canonical: "https://cettest.site/study-materials-hub" },
}

export default function StudyMaterialsHubLayout({ children }: { children: React.ReactNode }) {
  return children
}
