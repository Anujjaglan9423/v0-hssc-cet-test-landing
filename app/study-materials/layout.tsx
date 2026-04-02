import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Study Materials | Haryana CET, HSSC, SSC, Railway & UKSSSC PDFs & Videos 2026",
  description:
    "Download free study materials for Haryana CET, HSSC CET, HSSC Police Constable, SSC CGL, RRB NTPC & UKSSSC exams. PDFs, notes, previous year papers & video tutorials for government job preparation 2026.",
  keywords: [
    "Haryana CET study material free download",
    "HSSC CET PDF notes 2026",
    "SSC CGL study material",
    "RRB NTPC free notes PDF",
    "UKSSSC study material download",
    "government exam free notes",
    "Haryana CET previous year paper PDF",
    "HSSC CET video lectures",
    "competitive exam study material India",
    "sarkari naukri preparation material 2026",
  ],
  alternates: {
    canonical: "https://cettest.site/study-materials",
  },
  openGraph: {
    title: "Free Study Materials | Haryana CET, HSSC, SSC & Railway 2026",
    description:
      "Download free PDFs, notes & video tutorials for Haryana CET, HSSC, SSC CGL, RRB NTPC & UKSSSC exam preparation.",
    url: "https://cettest.site/study-materials",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Free Study Materials - CET TEST" }],
  },
}

export default function StudyMaterialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
