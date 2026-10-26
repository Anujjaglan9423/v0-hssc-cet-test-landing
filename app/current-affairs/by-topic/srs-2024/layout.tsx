import type { Metadata } from "next"
import type { ReactNode } from "react"

// ============================================
// PAGE CONSTANTS
// ============================================

const SITE_URL = "https://cettest.site"

const PAGE_PATH = "/current-affairs/by-topic/srs-2024"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

// Ensure this image exists inside public/
const OG_IMAGE = `${SITE_URL}/og-image.png`

const PAGE_TITLE =
    "SRS Statistical Report 2024: India TFR, Birth Rate & MCQs"

const PAGE_DESCRIPTION =
    "Study SRS Statistical Report 2024, released in 2026. Explore India's fertility rate, birth rate, infant mortality, sex ratio, institutional deliveries and bilingual MCQs for competitive exams."

// ============================================
// NEXT.JS SEO METADATA
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
        // Primary keywords
        "SRS Statistical Report 2024",
        "SRS Report 2024",
        "Sample Registration System Report 2024",
        "SRS Statistical Report 2024 India",
        "SRS Report 2024 released 2026",
        "SRS India 2024",
        "Sample Registration System India",
        "Registrar General of India SRS",
        "Office of Registrar General and Census Commissioner",
        "SRS Demographic Report 2024",

        // Fertility rate
        "India Total Fertility Rate 2024",
        "India TFR 2024",
        "India Fertility Rate 1.9",
        "Total Fertility Rate India 2026",
        "Replacement Level Fertility",
        "Replacement Fertility Rate 2.1",
        "Fertility Rate Below Replacement Level",
        "State Wise Fertility Rate India",
        "Highest Fertility Rate State India",
        "Lowest Fertility Rate State India",
        "Bihar Fertility Rate",
        "Uttar Pradesh Fertility Rate",
        "Delhi Fertility Rate",

        // Demographic indicators
        "India Crude Birth Rate 2024",
        "CBR India 2024",
        "India Infant Mortality Rate 2024",
        "IMR India 2024",
        "India Sex Ratio at Birth 2024",
        "SRB India 2024",
        "India Institutional Deliveries 2024",
        "India Working Age Population",
        "India Population Age 15 to 59",
        "India Elderly Population 2024",
        "India Demographic Dividend",
        "Indian Population Indicators",
        "Population Stabilization India",
        "Population Growth India",
        "India Fertility Decline",

        // Concepts
        "What is Total Fertility Rate",
        "What is Crude Birth Rate",
        "What is Infant Mortality Rate",
        "What is Sex Ratio at Birth",
        "TFR vs CBR",
        "Demographic Transition India",
        "Demographic Indicators Explained",
        "Population Studies India",
        "Vital Statistics India",
        "Population and Development",

        // Current affairs
        "SRS Report 2024 Current Affairs",
        "SRS Report 2024 Notes",
        "SRS Report 2024 GK",
        "SRS Report 2024 MCQ",
        "SRS Report 2024 Quiz",
        "SRS Report 2024 Questions Answers",
        "SRS Report 2024 Important Facts",
        "SRS Report 2024 One Liner",
        "SRS Report 2024 Hindi English Notes",
        "Important Government Reports 2026",
        "Demography Current Affairs 2026",
        "Population Current Affairs India",

        // Competitive examinations
        "SRS Report 2024 UPSC",
        "SRS Report 2024 SSC",
        "SRS Report 2024 SSC CGL",
        "SRS Report 2024 SSC CHSL",
        "SRS Report 2024 HSSC CET",
        "SRS Report 2024 UKSSSC",
        "SRS Report 2024 UKPSC",
        "SRS Report 2024 UPPSC",
        "SRS Report 2024 Railway",
        "SRS Report 2024 Banking",
        "SRS Report 2024 State PCS",
        "Indian Demography UPSC Notes",

        // Hindi keywords
        "एसआरएस सांख्यिकीय रिपोर्ट 2024",
        "एसआरएस रिपोर्ट 2024",
        "नमूना पंजीकरण प्रणाली रिपोर्ट 2024",
        "भारत की कुल प्रजनन दर 2024",
        "भारत की प्रजनन दर 1.9",
        "कुल प्रजनन दर क्या है",
        "प्रतिस्थापन प्रजनन दर",
        "प्रतिस्थापन स्तर 2.1",
        "भारत की जन्म दर 2024",
        "भारत की शिशु मृत्यु दर 2024",
        "जन्म के समय लिंगानुपात",
        "संस्थागत प्रसव भारत",
        "भारत की कार्यशील आयु जनसंख्या",
        "भारत का जनसांख्यिकीय लाभांश",
        "भारत में जनसंख्या स्थिरीकरण",
        "भारत की जनसंख्या रिपोर्ट 2024",
        "जनसांख्यिकी करंट अफेयर्स 2026",
        "एसआरएस रिपोर्ट महत्वपूर्ण प्रश्न",
        "एसआरएस रिपोर्ट हिंदी नोट्स",
        "प्रतियोगी परीक्षा जनसंख्या प्रश्न",
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
                alt: "SRS Statistical Report 2024 - India Fertility Rate and Demographic Indicators",
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
        "Free online learning platform providing current affairs, mock tests, study notes and practice questions for Indian competitive examinations.",
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
            name: "SRS Statistical Report 2024",
        },
        {
            "@type": "Thing",
            name: "Sample Registration System",
        },
        {
            "@type": "Thing",
            name: "Indian Demography",
        },
    ],
}

const articleSchema = {
    "@type": "Article",

    "@id": `${PAGE_URL}#article`,

    headline:
        "SRS Statistical Report 2024: India's Fertility Rate, Birth Rate, Mortality, Sex Ratio and MCQs",

    alternativeHeadline:
        "एसआरएस सांख्यिकीय रिपोर्ट 2024: भारत की प्रजनन दर, जन्म दर, मृत्यु दर और महत्वपूर्ण प्रश्न",

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
        "Indian Demography",
        "Population Studies",
        "Government Reports",
        "Social Indicators",
        "Competitive Exam Preparation",
    ],

    about: [
        {
            "@type": "Thing",
            name: "Total Fertility Rate",
        },
        {
            "@type": "Thing",
            name: "Crude Birth Rate",
        },
        {
            "@type": "Thing",
            name: "Infant Mortality Rate",
        },
        {
            "@type": "Thing",
            name: "Sex Ratio at Birth",
        },
        {
            "@type": "Thing",
            name: "Population Age Structure",
        },
        {
            "@type": "Thing",
            name: "Demographic Dividend",
        },
    ],

    mentions: [
        {
            "@type": "GovernmentOrganization",
            name: "Office of the Registrar General & Census Commissioner, India",
            url: "https://censusindia.gov.in/",
        },
        {
            "@type": "GovernmentOrganization",
            name: "Ministry of Home Affairs",
            url: "https://www.mha.gov.in/",
        },
    ],

    citation: [
        "https://censusindia.gov.in/nada/index.php/catalog/47152",
    ],
}

const learningResourceSchema = {
    "@type": "LearningResource",

    "@id": `${PAGE_URL}#learning-resource`,

    name: "SRS Statistical Report 2024 Study Notes and MCQs",

    description:
        "Free English and Hindi educational notes on India's Sample Registration System Statistical Report 2024, fertility trends, birth and mortality rates, sex ratio and demographic indicators.",

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
            "Students and candidates preparing for competitive examinations in India",
    },

    about: [
        {
            "@type": "Thing",
            name: "Indian Population Statistics",
        },
        {
            "@type": "Thing",
            name: "Sample Registration System",
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
            name: "SRS Statistical Report 2024",
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

export default function SRS2024Layout({
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