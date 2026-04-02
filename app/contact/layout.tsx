import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact CET TEST | Haryana CET & HSSC Exam Help & Support",
  description:
    "Get in touch with CET TEST for any queries about Haryana CET, HSSC CET, SSC, Railway or UKSSSC exam preparation. We respond within 24 hours. Contact us via email, phone or Instagram.",
  keywords: [
    "contact CET TEST",
    "Haryana CET exam help",
    "HSSC CET support",
    "cettest.site contact",
    "government exam preparation help",
    "CET TEST customer support",
  ],
  alternates: {
    canonical: "https://cettest.site/contact",
  },
  openGraph: {
    title: "Contact CET TEST | Exam Help & Support",
    description: "Reach out to CET TEST for queries about Haryana CET, HSSC, SSC, Railway & UKSSSC exam preparation.",
    url: "https://cettest.site/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact CET TEST" }],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
