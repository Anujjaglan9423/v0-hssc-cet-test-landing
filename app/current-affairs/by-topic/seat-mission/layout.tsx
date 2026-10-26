import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const PAGE_PATH = "/current-affairs/by-topic/seat-mission"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

// Ensure this image exists in your public folder.
const OG_IMAGE = `${SITE_URL}/og-image.png`

const PAGE_TITLE =
    "SEHAT Mission 2026: Full Form, Launch, ICAR–ICMR & MCQs"

const PAGE_DESCRIPTION =
    "Learn about SEHAT Mission 2026, launched on 11 May by J. P. Nadda and Shivraj Singh Chouhan. Explore its full form, ICAR–ICMR partnership, nutrition and agriculture objectives, Hindi-English notes and MCQs."

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
        // Main keywords
        "SEHAT Mission",
        "SEHAT Mission 2026",
        "Mission SEHAT India",
        "SEHAT Yojana 2026",
        "SEHAT Mission full form",
        "Science Excellence for Health through Agricultural Transformation",
        "SEHAT Mission launch date",
        "SEHAT Mission launched by",
        "SEHAT Mission objectives",
        "SEHAT Mission benefits",
        "SEHAT Mission features",

        // Launch details
        "SEHAT Mission 11 May 2026",
        "SEHAT Mission New Delhi",
        "JP Nadda SEHAT Mission",
        "Shivraj Singh Chouhan SEHAT Mission",
        "Union Government SEHAT Mission",
        "ICAR ICMR SEHAT Mission",
        "ICMR ICAR joint initiative 2026",
        "SEHAT Mission Ministry",
        "SEHAT Mission Government of India",

        // Health and agriculture
        "agriculture and public health mission India",
        "agriculture nutrition health convergence",
        "agricultural transformation for health",
        "preventive healthcare India",
        "nutrition security India",
        "food as medicine India",
        "biofortification India",
        "biofortified crops",
        "nutrient rich crops India",
        "millets and nutrition",
        "farmer health protection",
        "One Health approach India",
        "ICAR nutrition research",
        "ICMR public health research",
        "malnutrition prevention India",
        "micronutrient deficiencies India",

        // Current affairs
        "SEHAT Mission current affairs",
        "SEHAT Mission 2026 current affairs",
        "SEHAT Mission notes",
        "SEHAT Mission GK",
        "SEHAT Mission MCQ",
        "SEHAT Mission quiz",
        "SEHAT Mission questions and answers",
        "SEHAT Mission important points",
        "SEHAT Mission one liner",
        "government schemes 2026 current affairs",
        "important national missions 2026",
        "health schemes 2026 India",
        "agriculture schemes 2026 India",

        // Exam keywords
        "SEHAT Mission UPSC",
        "SEHAT Mission SSC",
        "SEHAT Mission SSC CGL",
        "SEHAT Mission SSC CHSL",
        "SEHAT Mission HSSC CET",
        "SEHAT Mission UKSSSC",
        "SEHAT Mission UKPSC",
        "SEHAT Mission UPPSC",
        "SEHAT Mission Railway",
        "SEHAT Mission Banking",
        "SEHAT Mission state PCS",
        "SEHAT Mission competitive exams",

        // Hindi keywords
        "सेहत मिशन 2026",
        "सेहत मिशन क्या है",
        "सेहत मिशन का पूरा नाम",
        "सेहत मिशन कब शुरू हुआ",
        "सेहत मिशन किसने शुरू किया",
        "सेहत मिशन के उद्देश्य",
        "सेहत मिशन के लाभ",
        "सेहत मिशन आईसीएआर आईसीएमआर",
        "कृषि और स्वास्थ्य मिशन 2026",
        "कृषि और पोषण मिशन",
        "राष्ट्रीय सेहत मिशन 2026",
        "स्वास्थ्य एवं कृषि करंट अफेयर्स",
        "सरकारी योजनाएं 2026",
        "सेहत मिशन प्रश्न उत्तर",
        "सेहत मिशन बहुविकल्पीय प्रश्न",
        "सेहत मिशन हिंदी नोट्स",
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
                alt: "SEHAT Mission 2026 - Full Form, ICAR and ICMR, Current Affairs",
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
// STRUCTURED DATA
// ============================================

const organizationSchema = {
    "@type": "EducationalOrganization",

    "@id": `${SITE_URL}/#organization`,

    name: "CET Test",

    url: SITE_URL,

    description:
        "Free competitive exam preparation platform offering current affairs, mock tests, study materials and practice questions.",
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
            name: "SEHAT Mission",
        },
        {
            "@type": "Thing",
            name: "Agriculture and Public Health",
        },
        {
            "@type": "Thing",
            name: "Nutrition Security",
        },
    ],
}

const articleSchema = {
    "@type": "Article",

    "@id": `${PAGE_URL}#article`,

    headline:
        "SEHAT Mission 2026: Full Form, Launch Date, Objectives, ICAR–ICMR Partnership and MCQs",

    alternativeHeadline:
        "सेहत मिशन 2026: पूरा नाम, शुभारंभ, उद्देश्य और महत्वपूर्ण प्रश्न",

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
        "Government Initiatives",
        "Public Health",
        "Agriculture",
        "Nutrition",
        "Competitive Exam Preparation",
    ],

    about: [
        {
            "@type": "Thing",
            name: "Science Excellence for Health through Agricultural Transformation",
        },
        {
            "@type": "Thing",
            name: "Agriculture–Health Convergence",
        },
        {
            "@type": "Thing",
            name: "Preventive Healthcare",
        },
        {
            "@type": "Thing",
            name: "Nutrition Security",
        },
        {
            "@type": "Thing",
            name: "Biofortification",
        },
    ],

    mentions: [
        {
            "@type": "Organization",
            name: "Indian Council of Agricultural Research",
            url: "https://icar.gov.in/",
        },
        {
            "@type": "Organization",
            name: "Indian Council of Medical Research",
            url: "https://www.icmr.gov.in/",
        },
    ],

    citation: [
        "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260013",
        "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2259959",
        "https://www.icar.gov.in/en/union-ministers-shri-shivraj-singh-chouhan-and-shri-jp-nadda-launch-national-mission-sehat",
    ],
}

const learningResourceSchema = {
    "@type": "LearningResource",

    "@id": `${PAGE_URL}#learning-resource`,

    name: "SEHAT Mission 2026 Study Notes and MCQ Practice",

    description:
        "Free bilingual study notes and multiple-choice questions about SEHAT Mission 2026, its full form, launching ministers, ICAR–ICMR partnership, objectives and benefits.",

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
            "Students and candidates preparing for Indian government competitive examinations",
    },

    provider: {
        "@id": `${SITE_URL}/#organization`,
    },

    about: [
        {
            "@type": "Thing",
            name: "SEHAT Mission 2026",
        },
        {
            "@type": "Thing",
            name: "Indian Agriculture and Health Research",
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
            name: "SEHAT Mission 2026",
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

export default function SehatMissionLayout({
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