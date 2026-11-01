// app/current-affairs/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Monthly Current Affairs 2026 | Complete Bilingual Digest for Competitive Exams",
    description: "Study monthly current affairs 2026 in English & Hindi. Complete coverage of national, international, economy, science & tech, environment news. Exam-oriented analysis for UPSC, SSC, Banking, HSSC, UKSSSC, and all state exams.",
    keywords: [
        "current affairs 2026",
        "monthly current affairs",
        "September 2026 current affairs",
        "current affairs in Hindi",
        "मासिक करेंट अफेयर्स",
        "current affairs for competitive exams",
        "current affairs digest",
        "current affairs PDF download",
        "current affairs for UPSC",
        "current affairs for SSC",
        "current affairs for Banking",
        "current affairs for HSSC",
        "current affairs for UKSSSC",
        "current affairs for Haryana CET",
        "current affairs for Uttarakhand exams",
        "current affairs monthly compilation",
        "current affairs quiz",
        "important days 2026",
        "bilingual current affairs",
        "current affairs with static GK",
        "exam-oriented current affairs"
    ],
    authors: [{ name: "CET TEST" }],
    creator: "CET TEST",
    publisher: "CET TEST",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "Monthly Current Affairs 2026 | Complete Bilingual Digest for Competitive Exams",
        description: "Free monthly current affairs digest in English & Hindi. Exam-oriented analysis, static GK, important days, and practice questions. Read the digest for UPSC, SSC, Banking, HSSC, UKSSSC.",
        url: "https://cettest.site/current-affairs",
        siteName: "CET TEST",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-current-affairs.jpg",
                width: 1200,
                height: 630,
                alt: "Monthly Current Affairs 2026 - Complete Bilingual Digest",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Monthly Current Affairs 2026 | Bilingual Digest",
        description: "Explore available Current Affairs digests, bilingual study notes, subject-wise revision and practice questions for government exams.",
        images: ["/og-current-affairs.jpg"],
        creator: "@cettest",
        site: "@cettest",
    },
    alternates: {
        canonical: "https://cettest.site/current-affairs",
        languages: {
            'en': 'https://cettest.site/current-affairs',
            'hi': 'https://cettest.site/current-affairs?lang=hi',
        },
    },
    category: "current-affairs",
    classification: "Competitive Exam Current Affairs Resource - Bilingual",
}

// Article pages provide their own canonical metadata and JSON-LD.
// Keep this layout presentation-only so the Current Affairs hub's schema
// isn't repeated on every individual topic.
export default function CurrentAffairsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style>{`@media print {
        .no-print { display: none !important; }
        body { background: white; color: black; }
        a { text-decoration: none; color: black; }
        .rounded-xl, .rounded-2xl { border-radius: 0 !important; }
        .shadow-lg, .shadow-md, .shadow-sm { box-shadow: none !important; }
      }`}</style>
      {children}
    </>
  )
}
