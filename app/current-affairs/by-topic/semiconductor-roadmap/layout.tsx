import type { Metadata } from "next"
import type { ReactNode } from "react"

// ============================================
// PAGE CONFIGURATION
// ============================================

const SITE_URL = "https://cettest.site"

const PAGE_PATH =
    "/current-affairs/by-topic/semiconductor-roadmap"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

// Replace if your website uses another social preview image.
const OG_IMAGE = `${SITE_URL}/og-image.png`

const PAGE_TITLE =
    "India Semiconductor Roadmap 2026: NITI Aayog, ISM 2.0 & MCQs"

const PAGE_DESCRIPTION =
    "Study NITI Aayog's 2026 semiconductor roadmap: the $120–150 billion target by 2035, India Semiconductor Mission 2.0, chip manufacturing, doping, and bilingual MCQs for UPSC, SSC and state exams."

// ============================================
// SEO METADATA
// ============================================

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: PAGE_TITLE,

    description: PAGE_DESCRIPTION,

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

    keywords: [
        // Main topic
        "Future of India's Semiconductor Industry",
        "Future of India's Semiconductor Industry 2026",
        "India Semiconductor Industry 2026",
        "India Semiconductor Roadmap 2026",
        "NITI Aayog Semiconductor Roadmap",
        "India Semiconductor Master Plan",
        "India Semiconductor Strategy 2035",
        "Semiconductor Industry India",
        "Indian Chip Industry",
        "India Chip Manufacturing",
        "Semiconductor Ecosystem India",

        // NITI Aayog roadmap
        "NITI Aayog Frontier Tech Hub",
        "NITI Frontier Tech Hub Semiconductor",
        "Semiconductor Roadmap 2035",
        "Semiconductor 10 Year Roadmap India",
        "120 to 150 billion semiconductor industry",
        "India Semiconductor Value Chain 2035",
        "Semiconductor Supply Chain India",
        "Semiconductor Strategic Resilience",
        "India Digital Sovereignty",
        "Semiconductor Research and Development India",
        "Semiconductor Talent Development India",

        // Government initiatives
        "India Semiconductor Mission",
        "India Semiconductor Mission 2.0",
        "ISM 2.0",
        "India Semiconductor Mission 2026",
        "Semiconductor Mission Budget 2026",
        "Semiconductor Mission 1000 crore",
        "Union Budget 2026 Semiconductor",
        "MeitY Semiconductor Mission",
        "Semicon India Programme",
        "Semiconductor Manufacturing Policy India",
        "Semiconductor Government Schemes India",

        // Manufacturing
        "Dholera Semiconductor Plant",
        "Dholera Semiconductor Fab",
        "Gujarat Semiconductor Manufacturing",
        "India Chip Fabrication Plant",
        "Semiconductor Fab India",
        "Chip Packaging India",
        "Semiconductor Assembly Testing India",
        "Semiconductor ATMP India",
        "Semiconductor OSAT India",

        // Basic science
        "What is a semiconductor",
        "Semiconductor definition",
        "Semiconductor properties",
        "Semiconductor doping",
        "Doping in semiconductors",
        "Silicon and Germanium",
        "Intrinsic Semiconductor",
        "Extrinsic Semiconductor",
        "P Type Semiconductor",
        "N Type Semiconductor",
        "Semiconductor Conductivity",
        "Semiconductor Applications",

        // Current affairs
        "Semiconductor Current Affairs 2026",
        "Semiconductor Industry Current Affairs",
        "NITI Aayog Report 2026",
        "Important Government Reports 2026",
        "Technology Current Affairs 2026",
        "Economy and Technology Current Affairs",
        "India Semiconductor Industry Notes",
        "Semiconductor Current Affairs MCQ",
        "Semiconductor Questions and Answers",
        "Semiconductor GK Questions",
        "Semiconductor Quiz 2026",
        "Semiconductor One Liner",

        // Competitive exams
        "Semiconductor UPSC",
        "Semiconductor SSC",
        "Semiconductor SSC CGL",
        "Semiconductor SSC CHSL",
        "Semiconductor HSSC CET",
        "Semiconductor UKSSSC",
        "Semiconductor UKPSC",
        "Semiconductor UPPSC",
        "Semiconductor Railway",
        "Semiconductor Banking Exams",
        "Semiconductor State PCS",
        "Semiconductor Competitive Exams",

        // Hindi
        "भारत का सेमीकंडक्टर उद्योग",
        "भारत का सेमीकंडक्टर रोडमैप 2026",
        "भारत के सेमीकंडक्टर उद्योग का भविष्य",
        "नीति आयोग सेमीकंडक्टर रिपोर्ट",
        "सेमीकंडक्टर मिशन 2.0",
        "इंडिया सेमीकंडक्टर मिशन",
        "सेमीकंडक्टर क्या है",
        "सेमीकंडक्टर का अर्थ",
        "अर्धचालक क्या है",
        "अर्धचालक के प्रकार",
        "सेमीकंडक्टर में डोपिंग",
        "सिलिकॉन और जर्मेनियम",
        "भारत में चिप निर्माण",
        "धोलेरा सेमीकंडक्टर प्लांट",
        "सेमीकंडक्टर करेंट अफेयर्स 2026",
        "सेमीकंडक्टर महत्वपूर्ण प्रश्न",
        "सेमीकंडक्टर हिंदी नोट्स",
        "विज्ञान और प्रौद्योगिकी करंट अफेयर्स",
        "प्रतियोगी परीक्षा करंट अफेयर्स 2026",
    ],

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

        title: PAGE_TITLE,

        description: PAGE_DESCRIPTION,

        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                alt: "Future of India's Semiconductor Industry - NITI Aayog Roadmap 2026",
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

// ============================================
// SCHEMA.ORG STRUCTURED DATA
// ============================================

const organizationSchema = {
    "@type": "EducationalOrganization",

    "@id": `${SITE_URL}/#organization`,

    name: "CET Test",

    url: SITE_URL,

    description:
        "Free competitive exam preparation platform offering mock tests, current affairs, study materials and practice questions.",
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

    name: PAGE_TITLE,

    description: PAGE_DESCRIPTION,

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
            name: "India's Semiconductor Industry",
        },
        {
            "@type": "Thing",
            name: "NITI Aayog Semiconductor Roadmap 2026",
        },
        {
            "@type": "Thing",
            name: "India Semiconductor Mission 2.0",
        },
    ],
}

const articleSchema = {
    "@type": "Article",

    "@id": `${PAGE_URL}#article`,

    headline:
        "Future of India's Semiconductor Industry: NITI Aayog Roadmap, 2035 Target, ISM 2.0 and MCQs",

    alternativeHeadline:
        "भारत के सेमीकंडक्टर उद्योग का भविष्य: नीति आयोग रोडमैप, सेमीकंडक्टर मिशन 2.0 और प्रश्न",

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
        "Science and Technology",
        "Indian Economy",
        "Government Policy",
        "Semiconductor Industry",
        "Competitive Exam Preparation",
    ],

    about: [
        {
            "@type": "Thing",
            name: "Future of India's Semiconductor Industry",
        },
        {
            "@type": "Thing",
            name: "Semiconductor Manufacturing",
        },
        {
            "@type": "Thing",
            name: "India Semiconductor Mission 2.0",
        },
        {
            "@type": "Thing",
            name: "Semiconductor Doping",
        },
        {
            "@type": "Thing",
            name: "Semiconductor Supply Chains",
        },
    ],

    mentions: [
        {
            "@type": "Organization",
            name: "NITI Aayog",
            url: "https://www.niti.gov.in/",
        },
        {
            "@type": "Organization",
            name: "Ministry of Electronics and Information Technology",
            url: "https://www.meity.gov.in/",
        },
    ],

    citation: [
        "https://www.niti.gov.in/sites/default/files/2026-05/Future-of-India-Semiconductor-Industry.pdf",
        "https://www.niti.gov.in/whats-new/future-indias-semiconductor-industry",
        "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2266727",
        "https://www.indiabudget.gov.in/doc/eb/vol1.pdf",
    ],
}

const learningResourceSchema = {
    "@type": "LearningResource",

    "@id": `${PAGE_URL}#learning-resource`,

    name: "India Semiconductor Roadmap 2026 Study Notes and MCQ Practice",

    description:
        "Free Hindi and English study notes covering NITI Aayog's semiconductor roadmap, the 2035 industry ambition, India Semiconductor Mission 2.0, chip fabrication and semiconductor doping.",

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
            "Students preparing for Indian government competitive examinations",
    },

    provider: {
        "@id": `${SITE_URL}/#organization`,
    },

    about: [
        {
            "@type": "Thing",
            name: "Semiconductors",
        },
        {
            "@type": "Thing",
            name: "India Semiconductor Mission",
        },
        {
            "@type": "Thing",
            name: "NITI Aayog Semiconductor Roadmap",
        },
    ],

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
            name: "Future of India's Semiconductor Industry",
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
// SERVER COMPONENT LAYOUT
// ============================================

export default function SemiconductorIndustryLayout({
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