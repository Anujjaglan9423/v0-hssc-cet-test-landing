import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Government Exam Study Material | Syllabus, Current Affairs & GK",
  description: "Focused syllabus, current affairs, and general knowledge resources for government and competitive exam preparation across India.",
  alternates: { canonical: "https://cettest.site/study-materials-hub" },
}

export default function StudyMaterialsHubLayout({ children }: { children: React.ReactNode }) {
  return children
}
