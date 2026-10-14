
import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"
const PAGE_URL = `${SITE_URL}/mock-test`

const title =
  "Free Mock Test 2026 | HSSC CET, SSC, Railway & UKSSSC"

const description =
  "Practice free mock tests for Haryana HSSC CET, Group C, Group D, SSC CGL, CHSL, Railway RRB NTPC, Group D and Uttarakhand UKSSSC exams. Start your first online test without registration on CET TEST."

export const metadata: Metadata = {
  title,
  description,

  applicationName: "CET TEST",

  keywords: [
    "free mock test 2026",
    "free online mock test",
    "government exam mock test",
    "government exam test series",
    "mock test without registration",

    // Haryana / HSSC
    "HSSC mock test",
    "HSSC CET mock test 2026",
    "Haryana CET mock test",
    "Haryana CET free mock test",
    "HSSC CET Group C mock test",
    "HSSC CET Group D mock test",
    "Haryana Police Constable mock test",
    "HSSC previous year questions",

    // SSC
    "SSC mock test 2026",
    "SSC CGL free mock test",
    "SSC CHSL mock test",
    "SSC MTS mock test",
    "SSC GD Constable mock test",

    // Railway
    "Railway mock test 2026",
    "RRB NTPC mock test",
    "RRB Group D mock test",
    "RRB ALP mock test",
    "Railway exam online practice",

    // Uttarakhand / UKSSSC
    "Uttarakhand mock test",
    "Uttrakhand mock test",
    "UKSSSC mock test 2026",
    "UKSSSC free mock test",
    "UKSSSC VDO mock test",
    "Uttarakhand government exam preparation",

    // General
    "free mock test in Hindi",
    "online exam practice India",
    "competitive exam mock test",
    "CET TEST",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: "CET TEST",
    title,
    description,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "CET TEST - Free HSSC CET, SSC, Railway and UKSSSC Mock Tests",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "education",
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: title,
      description,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Free Mock Tests",
          item: PAGE_URL,
        },
      ],
    },
  ],
}

export default function MockTestLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
      {children}
    </>
  )
}
