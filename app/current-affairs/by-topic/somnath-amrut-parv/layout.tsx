import type { Metadata } from "next"
import type { ReactNode } from "react"

// ==================================================
// PAGE CONFIGURATION
// ==================================================

const SITE_URL = "https://cettest.site"

const PAGE_PATH =
    "/current-affairs/by-topic/somnath-amrut-parv"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

// Ensure this image exists in your public directory.
const OG_IMAGE = `${SITE_URL}/og-image.png`

const PAGE_TITLE =
    "Somnath Amrut Mahotsav 2026: 75 Years, History & MCQs"

const PAGE_DESCRIPTION =
    "Learn about Somnath Amrut Mahotsav 2026, the temple's 75th anniversary, 1951 Pran Pratishtha, Dr. Rajendra Prasad, Maru-Gurjara architecture, history and bilingual MCQs for competitive exams."

// ==================================================
// SEO METADATA
// ==================================================

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
        "Somnath Amrut Mahotsav 2026",
        "Somnath Amrut Parv 2026",
        "Somnath Swabhiman Parv 2026",
        "Somnath Temple 75th Anniversary",
        "75 Years of Somnath Temple Reconstruction",
        "Somnath Temple 2026",
        "Somnath Temple Current Affairs",
        "Somnath Temple History",

        // Event-specific
        "Somnath Amrut Mahotsav 11 May 2026",
        "Somnath Temple Pran Pratishtha",
        "Somnath Temple 11 May 1951",
        "Somnath Temple Reconstruction 1951",
        "Somnath Temple Reopening Anniversary",
        "PM Modi Somnath Visit 2026",
        "Narendra Modi Somnath Amrut Mahotsav",
        "Somnath Amrut Mahotsav Gujarat",

        // Historical figures
        "Dr Rajendra Prasad Somnath Temple",
        "Sardar Vallabhbhai Patel Somnath Temple",
        "Somnath Temple Kumarapala",
        "Ahilyabai Holkar Somnath Temple",
        "Mahmud Ghazni Somnath 1026",
        "Somnath Temple Restoration History",

        // Architecture
        "Somnath Temple Architecture",
        "Maru Gurjara Architecture",
        "Maru Gurjara Temple Style",
        "Solanki Architecture",
        "Chalukya Architecture Gujarat",
        "Kailash Mahameru Prasad",
        "Indian Temple Architecture",
        "Medieval Indian Architecture",
        "Gujarat Temple Architecture",

        // Geography and religion
        "Somnath Temple Location",
        "Prabhas Patan Gujarat",
        "Somnath Temple Saurashtra",
        "Somnath Jyotirlinga",
        "12 Jyotirlingas",
        "First Jyotirlinga Somnath",
        "Somnath Temple Gujarat GK",

        // Art and culture
        "Indian Art and Culture Current Affairs 2026",
        "Temple Architecture Current Affairs",
        "Indian Cultural Heritage",
        "Somnath History Notes",
        "Somnath Temple GK",
        "Somnath Temple MCQ",
        "Somnath Temple Questions Answers",
        "Somnath Amrut Mahotsav Quiz",
        "Somnath Temple One Liner",

        // Exam preparation
        "Somnath Temple UPSC",
        "Somnath Temple SSC",
        "Somnath Temple SSC CGL",
        "Somnath Temple SSC CHSL",
        "Somnath Temple HSSC CET",
        "Somnath Temple UKSSSC",
        "Somnath Temple UKPSC",
        "Somnath Temple UPPSC",
        "Somnath Temple Railway",
        "Somnath Temple State PCS",
        "Art and Culture UPSC Notes",
        "Temple Architecture Competitive Exams",

        // Hindi
        "सोमनाथ अमृत महोत्सव 2026",
        "सोमनाथ अमृत पर्व 2026",
        "सोमनाथ स्वाभिमान पर्व",
        "सोमनाथ मंदिर की 75वीं वर्षगांठ",
        "सोमनाथ मंदिर का इतिहास",
        "सोमनाथ मंदिर पुनर्निर्माण",
        "सोमनाथ मंदिर प्राण प्रतिष्ठा 1951",
        "सोमनाथ मंदिर 11 मई 1951",
        "सोमनाथ मंदिर किसने बनवाया",
        "सोमनाथ मंदिर किसने तोड़ा",
        "सोमनाथ मंदिर कहां स्थित है",
        "सोमनाथ मंदिर की स्थापत्य शैली",
        "मारू गुर्जर वास्तुकला शैली",
        "सोलंकी स्थापत्य शैली",
        "कुमारपाल सोमनाथ मंदिर",
        "अहिल्याबाई होल्कर सोमनाथ",
        "राजेंद्र प्रसाद सोमनाथ मंदिर",
        "सोमनाथ मंदिर महत्वपूर्ण प्रश्न",
        "सोमनाथ मंदिर सामान्य ज्ञान",
        "सोमनाथ मंदिर हिंदी नोट्स",
        "कला एवं संस्कृति करंट अफेयर्स 2026",
        "भारतीय मंदिर वास्तुकला प्रश्न उत्तर",
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
                alt: "Somnath Amrut Mahotsav 2026 - 75th Anniversary and Temple History",
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

// ==================================================
// ORGANIZATION SCHEMA
// ==================================================

const organizationSchema = {
    "@type": "EducationalOrganization",

    "@id": `${SITE_URL}/#organization`,

    name: "CET Test",

    url: SITE_URL,

    description:
        "Free educational platform providing current affairs, mock tests, study material and competitive examination practice questions.",
}

// ==================================================
// WEBSITE SCHEMA
// ==================================================

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

// ==================================================
// WEBPAGE SCHEMA
// ==================================================

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
            "@type": "Event",
            name: "Somnath Amrut Mahotsav 2026",
        },
        {
            "@type": "LandmarksOrHistoricalBuildings",
            name: "Somnath Temple",
        },
        {
            "@type": "Thing",
            name: "Maru-Gurjara Architecture",
        },
    ],
}

// ==================================================
// ARTICLE SCHEMA
// ==================================================

const articleSchema = {
    "@type": "Article",

    "@id": `${PAGE_URL}#article`,

    headline:
        "Somnath Amrut Mahotsav 2026: 75th Anniversary, Somnath Temple History, Architecture and MCQs",

    alternativeHeadline:
        "सोमनाथ अमृत महोत्सव 2026: 75वीं वर्षगांठ, मंदिर का इतिहास और महत्वपूर्ण प्रश्न",

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
        "Indian History",
        "Art and Culture",
        "Temple Architecture",
        "Indian Heritage",
        "Competitive Exam Preparation",
    ],

    about: [
        {
            "@type": "Thing",
            name: "Somnath Amrut Mahotsav",
        },
        {
            "@type": "Thing",
            name: "Somnath Temple Reconstruction",
        },
        {
            "@type": "Thing",
            name: "1951 Somnath Pran Pratishtha",
        },
        {
            "@type": "Thing",
            name: "Maru-Gurjara Temple Architecture",
        },
        {
            "@type": "Thing",
            name: "Somnath Swabhiman Parv",
        },
    ],

    spatialCoverage: {
        "@type": "Place",
        name: "Prabhas Patan, Gujarat, India",
    },

    mentions: [
        {
            "@type": "Person",
            name: "Dr. Rajendra Prasad",
        },
        {
            "@type": "Person",
            name: "Sardar Vallabhbhai Patel",
        },
        {
            "@type": "Place",
            name: "Somnath Temple",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Prabhas Patan",
                addressRegion: "Gujarat",
                addressCountry: "IN",
            },
        },
    ],

    citation: [
        "https://www.pmindia.gov.in/en/news_updates/pm-to-visit-gujarat-on-10-11-may/",
        "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2259791",
        "https://somnath.org/sts23/introduction",
    ],
}

// ==================================================
// EVENT SCHEMA
// ==================================================

const eventSchema = {
    "@type": "Event",

    "@id": `${PAGE_URL}#event`,

    name: "Somnath Amrut Mahotsav 2026",

    description:
        "Commemoration held on 11 May 2026 marking 75 years since the restored Somnath Temple was inaugurated in 1951.",

    startDate: "2026-05-11",

    endDate: "2026-05-11",

    eventStatus: "https://schema.org/EventScheduled",

    eventAttendanceMode:
        "https://schema.org/OfflineEventAttendanceMode",

    location: {
        "@type": "Place",

        name: "Somnath Temple",

        address: {
            "@type": "PostalAddress",
            addressLocality: "Prabhas Patan",
            addressRegion: "Gujarat",
            addressCountry: "IN",
        },
    },

    about: {
        "@type": "Thing",
        name: "75th anniversary of the restored Somnath Temple",
    },
}

// ==================================================
// LEARNING RESOURCE SCHEMA
// ==================================================

const learningResourceSchema = {
    "@type": "LearningResource",

    "@id": `${PAGE_URL}#learning-resource`,

    name: "Somnath Amrut Mahotsav 2026 Study Notes and MCQs",

    description:
        "Bilingual educational notes on Somnath Amrut Mahotsav, the temple's 1951 restoration, historical figures, Maru-Gurjara architecture and related MCQs.",

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
            "Aspirants preparing for Indian government recruitment and competitive examinations",
    },

    about: [
        {
            "@type": "Thing",
            name: "Somnath Temple History",
        },
        {
            "@type": "Thing",
            name: "Indian Temple Architecture",
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

// ==================================================
// BREADCRUMB SCHEMA
// ==================================================

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
            name: "Somnath Amrut Mahotsav 2026",
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
        eventSchema,
        learningResourceSchema,
        breadcrumbSchema,
    ],
}

// ==================================================
// SERVER COMPONENT LAYOUT
// ==================================================

export default function SomnathAmrutMahotsavLayout({
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