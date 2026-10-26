import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const PAGE_PATH = "/current-affairs/by-topic/sco-summit-2026"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

// Change this path if your actual OG image is different.
const OG_IMAGE = `${SITE_URL}/og-image.png`

const PAGE_TITLE =
    "26th SCO Summit 2026: Bishkek Declaration, Key Facts & MCQs"

const PAGE_DESCRIPTION =
    "Study the 26th SCO Summit 2026 held in Bishkek, Kyrgyzstan. Learn about the Bishkek Declaration, Pakistan's SCO chairmanship, India, SCO Plus, important facts, and bilingual MCQs for competitive exams."

const PAGE_KEYWORDS = [
    // Main topic
    "26th SCO Summit 2026",
    "SCO Summit 2026",
    "Shanghai Cooperation Organisation Summit 2026",
    "Shanghai Cooperation Organization 2026",
    "26th Shanghai Cooperation Organisation Summit",
    "SCO Bishkek Summit 2026",
    "Bishkek SCO Summit",
    "Bishkek Declaration 2026",

    // Summit-specific searches
    "SCO Summit 2026 location",
    "SCO Summit 2026 host country",
    "SCO Summit 2026 date",
    "SCO Summit 2026 theme",
    "SCO Summit 2026 outcomes",
    "SCO Summit 2026 important points",
    "SCO Summit 2026 participating countries",
    "SCO Summit 2026 India",
    "India at SCO Summit 2026",
    "SCO Plus Summit 2026",
    "SCO Plus meeting Bishkek",
    "SCO chairmanship 2026-2027",
    "Pakistan SCO chairmanship 2026",
    "Lahore SCO Tourism and Cultural Capital",
    "SCO 25th anniversary 2026",

    // SCO general knowledge
    "SCO full form",
    "SCO headquarters",
    "SCO Secretariat Beijing",
    "SCO RATS headquarters Tashkent",
    "SCO established in 2001",
    "SCO founding members",
    "SCO member countries 2026",
    "SCO 10 member countries",
    "India joined SCO in 2017",
    "India SCO membership",
    "SCO objectives and functions",
    "Shanghai Cooperation Organisation current affairs",

    // Exam preparation
    "SCO Summit 2026 current affairs",
    "SCO Summit 2026 notes",
    "SCO Summit 2026 GK questions",
    "SCO Summit 2026 MCQ",
    "SCO Summit 2026 quiz",
    "SCO Summit 2026 questions and answers",
    "SCO Summit 2026 one liner",
    "SCO Summit 2026 bilingual notes",
    "international organisations current affairs 2026",
    "international summits 2026 current affairs",

    // Competitive exams
    "SCO Summit 2026 UPSC",
    "SCO Summit 2026 SSC",
    "SCO Summit 2026 HSSC CET",
    "SCO Summit 2026 UKSSSC",
    "SCO Summit 2026 UKPSC",
    "SCO Summit 2026 UPPSC",
    "SCO Summit 2026 SSC CGL",
    "SCO Summit 2026 SSC CHSL",
    "SCO Summit 2026 Railway",
    "SCO Summit 2026 Banking",
    "SCO Summit 2026 state PCS",
    "SCO Summit 2026 competitive exams",

    // Hindi SEO
    "26वां एससीओ शिखर सम्मेलन 2026",
    "26वाँ शंघाई सहयोग संगठन शिखर सम्मेलन",
    "एससीओ शिखर सम्मेलन 2026",
    "शंघाई सहयोग संगठन 2026",
    "बिश्केक एससीओ शिखर सम्मेलन",
    "बिश्केक घोषणा 2026",
    "एससीओ शिखर सम्मेलन 2026 कहां हुआ",
    "एससीओ शिखर सम्मेलन 2026 की थीम",
    "एससीओ का मुख्यालय कहां है",
    "एससीओ की स्थापना कब हुई",
    "एससीओ के सदस्य देश",
    "भारत एससीओ का सदस्य कब बना",
    "एससीओ शिखर सम्मेलन 2026 प्रश्न उत्तर",
    "एससीओ शिखर सम्मेलन 2026 करंट अफेयर्स",
    "एससीओ शिखर सम्मेलन 2026 हिंदी नोट्स",
    "एससीओ 2026 सामान्य ज्ञान",
    "अंतरराष्ट्रीय संगठन करंट अफेयर्स 2026",
    "प्रतियोगी परीक्षा करंट अफेयर्स 2026",
]

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: PAGE_TITLE,

    description: PAGE_DESCRIPTION,

    keywords: PAGE_KEYWORDS,

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

    classification:
        "Current Affairs, International Relations, Competitive Exam Preparation",

    alternates: {
        canonical: PAGE_URL,
    },

    robots: {
        index: true,
        follow: true,
        noarchive: false,
        nosnippet: false,
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

        title: PAGE_TITLE,

        description: PAGE_DESCRIPTION,

        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                alt: "26th SCO Summit 2026 - Bishkek Summit, Current Affairs and MCQs",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: PAGE_TITLE,

        description: PAGE_DESCRIPTION,

        images: [OG_IMAGE],
    },

    other: {
        "content-language": "en-IN, hi-IN",
    },
}

// ----------------------------------------------------
// STRUCTURED DATA
// ----------------------------------------------------

const organizationSchema = {
    "@type": "EducationalOrganization",

    "@id": `${SITE_URL}/#organization`,

    name: "CET Test",

    url: SITE_URL,

    description:
        "Free online preparation platform offering mock tests, study materials, current affairs, and practice questions for Indian competitive examinations.",
}

const websiteSchema = {
    "@type": "WebSite",

    "@id": `${SITE_URL}/#website`,

    url: SITE_URL,

    name: "CET Test",

    description:
        "Free mock tests, current affairs and competitive exam preparation resources.",

    inLanguage: ["en-IN", "hi-IN"],

    publisher: {
        "@id": `${SITE_URL}/#organization`,
    },
}

const webpageSchema = {
    "@type": "WebPage",

    "@id": `${PAGE_URL}#webpage`,

    url: PAGE_URL,

    name: PAGE_TITLE,

    description: PAGE_DESCRIPTION,

    inLanguage: ["en-IN", "hi-IN"],

    isAccessibleForFree: true,

    isPartOf: {
        "@id": `${SITE_URL}/#website`,
    },

    about: [
        {
            "@type": "Thing",
            name: "26th SCO Summit 2026",
        },
        {
            "@type": "Organization",
            name: "Shanghai Cooperation Organisation",
            sameAs: "https://eng.sectsco.org/",
        },
        {
            "@type": "Thing",
            name: "Bishkek Declaration",
        },
    ],

    breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
    },

    mainEntity: {
        "@id": `${PAGE_URL}#article`,
    },
}

const articleSchema = {
    "@type": "Article",

    "@id": `${PAGE_URL}#article`,

    headline:
        "26th SCO Summit 2026: Bishkek Declaration, Outcomes, India and MCQs",

    alternativeHeadline:
        "26वाँ शंघाई सहयोग संगठन शिखर सम्मेलन 2026: बिश्केक घोषणा और महत्वपूर्ण प्रश्न",

    description: PAGE_DESCRIPTION,

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
        "International Relations",
        "International Organisations",
        "SCO Summit 2026",
        "Competitive Exam Preparation",
    ],

    keywords: [
        "SCO Summit 2026",
        "Bishkek Declaration",
        "Shanghai Cooperation Organisation",
        "SCO Plus",
        "India and SCO",
        "Current Affairs 2026",
        "Competitive Exams",
    ],

    about: [
        {
            "@type": "Thing",
            name: "2026 Shanghai Cooperation Organisation Summit",
        },
        {
            "@type": "Thing",
            name: "Bishkek Declaration",
        },
        {
            "@type": "Thing",
            name: "SCO Plus",
        },
    ],

    spatialCoverage: {
        "@type": "Place",
        name: "Bishkek, Kyrgyzstan",
    },

    citation: [
        "https://eng.sectsco.org/20260901/2493609.html",
        "https://eng.sectsco.org/20250901/1963431.html",
    ],
}

const learningResourceSchema = {
    "@type": "LearningResource",

    "@id": `${PAGE_URL}#learning-resource`,

    name: "26th SCO Summit 2026 Study Notes and MCQ Practice",

    description:
        "Bilingual English and Hindi learning material covering the 26th SCO Summit 2026, host country, Bishkek Declaration, SCO membership, India, and practice questions.",

    url: PAGE_URL,

    inLanguage: ["en-IN", "hi-IN"],

    learningResourceType: [
        "Study Notes",
        "Current Affairs",
        "Practice Questions",
        "Multiple Choice Questions",
    ],

    educationalUse: [
        "Exam Preparation",
        "Self Assessment",
        "Revision",
    ],

    educationalLevel:
        "Indian competitive examinations: UPSC, SSC, HSSC CET, UKSSSC, UKPSC, UPPSC and State PCS",

    audience: {
        "@type": "EducationalAudience",

        educationalRole: "student",

        audienceType:
            "Aspirants preparing for Indian government recruitment and competitive examinations",
    },

    about: [
        {
            "@type": "Thing",
            name: "Shanghai Cooperation Organisation",
        },
        {
            "@type": "Thing",
            name: "26th SCO Summit 2026",
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
            name: "26th SCO Summit 2026",
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

// ----------------------------------------------------
// PAGE LAYOUT
// ----------------------------------------------------

export default function ScoSummit2026Layout({
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