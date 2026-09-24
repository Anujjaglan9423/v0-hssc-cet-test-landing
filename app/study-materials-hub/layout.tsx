import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HSSC, SSC, Railway & UKSSSC Study Material | CETTest",
  description:
    "Prepare for HSSC, SSC, Railway, and UKSSSC exams with updated syllabus, current affairs, Haryana GK, exam resources, and practical preparation guidance.",
  keywords: [
    "HSSC study material",
    "SSC study material",
    "Railway exam study material",
    "UKSSSC study material",
    "government exam syllabus",
    "current affairs for government exams",
    "Haryana GK",
  ],
  alternates: { canonical: "https://cettest.site/study-materials-hub" },
  openGraph: {
    title: "HSSC, SSC, Railway & UKSSSC Study Material | CETTest",
    description:
      "One focused study hub for HSSC, SSC, Railway, UKSSSC, and other government exam preparation across India.",
    url: "https://cettest.site/study-materials-hub",
    siteName: "CETTest",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "HSSC, SSC, Railway & UKSSSC Study Material | CETTest",
    description: "Syllabus, current affairs, Haryana GK, and preparation resources for government exams.",
  },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "content-language": "en-IN",
  },
}

export default function StudyMaterialsHubLayout({ children }: { children: React.ReactNode }) {
  return children
}
