import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const PAGE_PATH =
    "/current-affairs/by-topic/sd-report-2026"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

// Update if your website uses a different Open Graph image.
const OG_IMAGE = `${SITE_URL}/og-image.png`

const TITLE =
    "Sustainable Development Report 2026: India Rank, SDG Index & MCQs"

const DESCRIPTION =
    "Read the Sustainable Development Report 2026: India's 94th rank, SDG Index score, top countries, UN-Mi rankings, global progress, Hindi-English notes and MCQs for UPSC, SSC, HSSC CET and state exams."

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: TITLE,

    description: DESCRIPTION,

    keywords: [
        // Main topic
        "Sustainable Development Report 2026",
        "SDR 2026",
        "SDG Index 2026",
        "Sustainable Development Goals Report 2026",
        "SDSN Sustainable Development Report 2026",
        "Sustainable Development Solutions Network",
        "SDG Index and Dashboards 2026",

        // India
        "India rank Sustainable Development Report 2026",
        "India SDG Index rank 2026",
        "India SDG rank 94",
        "India SDG Index score 2026",
        "India sustainable development ranking 2026",
        "India SDG performance 2026",
        "India SDG achievements 2026",
        "India SDG challenges 2026",
        "India zero hunger SDG 2",
        "SDG 2 India 2026",
        "India SDG progress report",

        // Global ranking
        "SDG Index 2026 country rankings",
        "Sustainable Development Report 2026 top countries",
        "Finland SDG Index 2026",
        "Sweden SDG Index 2026",
        "Denmark SDG Index 2026",
        "Top country Sustainable Development Report 2026",
        "Global sustainable development ranking 2026",

        // Report findings
        "17 Sustainable Development Goals",
        "SDG progress 2026",
        "SDG 2030 Agenda",
        "SDG targets on track 2026",
        "16.5 percent SDG targets",
        "Global SDG progress 2030",
        "Sustainable development challenges",
        "SDG performance indicators",
        "UN based multilateralism index",
        "UN-Mi Index 2026",
        "UN-Mi rankings 2026",
        "Barbados UN-Mi 2026",
        "United States UN-Mi ranking 2026",

        // Exam preparation
        "Sustainable Development Report 2026 current affairs",
        "Sustainable Development Report 2026 GK",
        "Sustainable Development Report 2026 MCQ",
        "Sustainable Development Report 2026 quiz",
        "Sustainable Development Report 2026 notes",
        "Sustainable Development Report 2026 questions answers",
        "SDG Index 2026 current affairs",
        "SDG Index 2026 one liner",
        "SDG Index 2026 bilingual notes",
        "international reports and indices 2026",
        "important reports and indices 2026",

        // Competitive examinations
        "SDG Index 2026 UPSC",
        "SDG Index 2026 SSC",
        "SDG Index 2026 HSSC CET",
        "SDG Index 2026 UKSSSC",
        "SDG Index 2026 UKPSC",
        "SDG Index 2026 UPPSC",
        "SDG Index 2026 SSC CGL",
        "SDG Index 2026 SSC CHSL",
        "SDG Index 2026 Railway",
        "SDG Index 2026 Banking",
        "SDG Index 2026 State PCS",

        // Hindi keywords
        "सतत विकास रिपोर्ट 2026",
        "सतत विकास लक्ष्य रिपोर्ट 2026",
        "एसडीजी इंडेक्स 2026",
        "सतत विकास सूचकांक 2026",
        "सतत विकास रिपोर्ट में भारत की रैंक 2026",
        "एसडीजी इंडेक्स में भारत का स्थान",
        "भारत की एसडीजी रैंक 94",
        "सतत विकास लक्ष्य कितने हैं",
        "17 सतत विकास लक्ष्य",
        "सतत विकास रिपोर्ट 2026 प्रश्न उत्तर",
        "सतत विकास रिपोर्ट 2026 हिंदी नोट्स",
        "सतत विकास रिपोर्ट 2026 करेंट अफेयर्स",
        "एसडीजी इंडेक्स 2026 सामान्य ज्ञान",
        "अंतरराष्ट्रीय रिपोर्ट और सूचकांक 2026",
        "प्रतियोगी परीक्षा करंट अफेयर्स 2026",
    ],

    applicationName: "CET Test",

    authors: [
        {
            name: "CET Test",
            url: SITE_URL,
        },
    ],

    creator: "CET Test",

    publisher: "CET Test",

    category: "Education",

    alternates: {
        canonical: PAGE_URL,
    },

    robots: {
        index: true,
        follow: true,
        noimageindex: false,

        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },

    openGraph: {
        type: "article",

        locale: "en_IN",

        alternateLocale: ["hi_IN"],

        url: PAGE_URL,

        siteName: "CET Test",

        title: TITLE,

        description: DESCRIPTION,

        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                alt: "Sustainable Development Report 2026 India Ranking and SDG Index",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: TITLE,

        description: DESCRIPTION,

        images: [OG_IMAGE],
    },

    other: {
        "content-language": "en-IN, hi-IN",
    },
}

// ============================================
// STRUCTURED DATA
// ============================================

const organizationSchema = {
    "@type": "EducationalOrganization",

    "@id": `${SITE_URL}/#organization`,

    name: "CET Test",

    url: SITE_URL,

    description:
        "Free competitive exam preparation platform providing current affairs, study material, practice questions and mock tests.",
}

const websiteSchema = {
    "@type": "WebSite",

    "@id": `${SITE_URL}/#website`,

    name: "CET Test",

    url: SITE_URL,

    inLanguage: ["en-IN", "hi-IN"],

    publisher: {
        "@id": `${SITE_URL}/#organization`,
    },
}

const webpageSchema = {
    "@type": "WebPage",

    "@id": `${PAGE_URL}#webpage`,

    url: PAGE_URL,

    name: TITLE,

    description: DESCRIPTION,

    inLanguage: ["en-IN", "hi-IN"],

    isAccessibleForFree: true,

    isPartOf: {
        "@id": `${SITE_URL}/#website`,
    },

    breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
    },

    mainEntity: {
        "@id": `${PAGE_URL}#article`,
    },

    about: [
        {
            "@type": "Thing",
            name: "Sustainable Development Report 2026",
        },
        {
            "@type": "Thing",
            name: "Sustainable Development Goals",
        },
        {
            "@type": "Thing",
            name: "SDG Index",
        },
    ],
}

const articleSchema = {
    "@type": "Article",

    "@id": `${PAGE_URL}#article`,

    headline:
        "Sustainable Development Report 2026: India's Rank, SDG Index, Global Rankings and MCQs",

    alternativeHeadline:
        "सतत विकास रिपोर्ट 2026: भारत की रैंक, एसडीजी सूचकांक एवं महत्वपूर्ण प्रश्न",

    description: DESCRIPTION,

    url: PAGE_URL,

    mainEntityOfPage: {
        "@id": `${PAGE_URL}#webpage`,
    },

    inLanguage: ["en-IN", "hi-IN"],

    image: [OG_IMAGE],

    author: {
        "@id": `${SITE_URL}/#organization`,
    },

    publisher: {
        "@id": `${SITE_URL}/#organization`,
    },

    isAccessibleForFree: true,

    articleSection: [
        "Current Affairs",
        "Environment",
        "Sustainable Development",
        "International Reports and Indices",
        "Competitive Exam Preparation",
    ],

    about: [
        {
            "@type": "Thing",
            name: "Sustainable Development Report 2026",
        },
        {
            "@type": "Thing",
            name: "2030 Agenda for Sustainable Development",
        },
        {
            "@type": "Thing",
            name: "SDG Index 2026",
        },
        {
            "@type": "Thing",
            name: "India's SDG Performance",
        },
        {
            "@type": "Thing",
            name: "UN-based Multilateralism Index",
        },
    ],

    mentions: [
        {
            "@type": "Organization",
            name: "Sustainable Development Solutions Network",
            url: "https://www.unsdsn.org/",
        },
        {
            "@type": "Country",
            name: "India",
        },
    ],

    citation: [
        "https://sdgtransformationcenter.org/reports/sustainable-development-report-2026",
        "https://dashboard.sdgindex.org/rankings/",
        "https://dashboard.sdgindex.org/chapters/part-2-the-sdg-index-and-dashboards/",
    ],
}

const learningResourceSchema = {
    "@type": "LearningResource",

    "@id": `${PAGE_URL}#learning-resource`,

    name: "Sustainable Development Report 2026 Study Notes and MCQs",

    description:
        "Free Hindi and English notes covering India's 2026 SDG ranking, global SDG performance, top countries, UN-Mi index and multiple-choice questions.",

    url: PAGE_URL,

    inLanguage: ["en-IN", "hi-IN"],

    learningResourceType: [
        "Current Affairs Notes",
        "Study Material",
        "Practice Questions",
        "Multiple Choice Questions",
    ],

    educationalUse: [
        "Exam Preparation",
        "Revision",
        "Self Assessment",
    ],

    educationalLevel:
        "Indian competitive examinations including UPSC, SSC, HSSC CET, UKSSSC, UKPSC, UPPSC and State PCS",

    audience: {
        "@type": "EducationalAudience",

        educationalRole: "student",

        audienceType:
            "Candidates preparing for Indian government competitive examinations",
    },

    about: [
        {
            "@type": "Thing",
            name: "Sustainable Development Goals",
        },
        {
            "@type": "Thing",
            name: "Sustainable Development Report 2026",
        },
    ],

    provider: {
        "@id": `${SITE_URL}/#organization`,
    },

    isAccessibleForFree: true,

    isPartOf: {
        "@id": `${PAGE_URL}#webpage`,
    },
}

const breadcrumbSchema = {
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
            name: "Current Affairs",
            item: `${SITE_URL}/current-affairs`,
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Topic Wise Current Affairs",
            item: `${SITE_URL}/current-affairs/by-topic`,
        },
        {
            "@type": "ListItem",
            position: 4,
            name: "Sustainable Development Report 2026",
            item: PAGE_URL,
        },
    ],
}

const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
        organizationSchema,
        websiteSchema,
        webpageSchema,
        articleSchema,
        learningResourceSchema,
        breadcrumbSchema,
    ],
}

// ============================================
// LAYOUT
// ============================================

export default function SustainableDevelopmentReportLayout({
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