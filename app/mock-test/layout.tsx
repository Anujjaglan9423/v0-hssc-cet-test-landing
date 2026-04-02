import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Mock Tests | Haryana CET, HSSC, SSC & Railway Online Practice 2026",
  description:
    "Attempt free online mock tests for Haryana CET, HSSC CET, HSSC Police Constable, HSSSC Group D, SSC CGL, RRB NTPC & UKSSSC. Real exam pattern, instant results, no signup required for first test!",
  keywords: [
    "free mock test Haryana CET 2026",
    "HSSC CET free practice test",
    "Haryana CET online test attempt",
    "SSC CGL free mock test attempt",
    "RRB NTPC free online test",
    "UKSSSC free mock test",
    "online mock test without registration",
    "government exam free practice test India",
    "Haryana exam free test series",
    "HSSC Police Constable free mock test",
  ],
  alternates: {
    canonical: "https://cettest.site/mock-test",
  },
  openGraph: {
    title: "Free Mock Tests | Haryana CET, HSSC, SSC & Railway 2026",
    description:
      "Attempt free online mock tests for Haryana CET, HSSC, SSC CGL, Railway NTPC & UKSSSC. No signup required for first test!",
    url: "https://cettest.site/mock-test",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Free Mock Tests - CET TEST" }],
  },
}

export default function MockTestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
