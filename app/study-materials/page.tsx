import type { Metadata } from "next"
import { getActiveStudyMaterials } from "@/lib/actions/study-materials"
import StudyMaterialsBrowser from "@/components/study-materials-browser"

export const metadata: Metadata = {
  title: "Free Study Materials, PDFs and Video Lessons",
  description: "Browse free study materials, downloadable PDFs, images and video lessons for Haryana CET, HSSC, SSC and government exam preparation.",
  alternates: { canonical: "https://cettest.site/study-materials" },
}

export const revalidate = 3600

export default async function StudyMaterialsPage() {
  const materials = await getActiveStudyMaterials()
  return (
    <>
      <section className="sr-only" aria-labelledby="study-materials-seo-heading">
        <h1 id="study-materials-seo-heading">Free Government Exam Study Materials</h1>
        <p>Find exam preparation PDFs, images and video lessons for Haryana CET, HSSC, SSC and other competitive government exams.</p>
      </section>
      <StudyMaterialsBrowser initialMaterials={materials} />
    </>
  )
}
