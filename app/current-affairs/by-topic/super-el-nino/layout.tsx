import type { Metadata } from "next"
import type { ReactNode } from "react"

// ============================================
// PAGE SETTINGS
// ============================================

const SITE_URL = "https://cettest.site"

const PAGE_PATH = "/current-affairs/by-topic/super-el-nino"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

// Change this if your actual OG image has another path.
const OG_IMAGE = `${SITE_URL}/og-image.png`

const PAGE_TITLE =
    "Super El Niño 2026: ENSO Forecast, Indian Monsoon & MCQs"

const PAGE_DESCRIPTION =
    "Understand Super El Niño 2026, ENSO forecasts, Pacific Ocean warming, Walker circulation, trade winds, upwelling and possible Indian monsoon impacts. Includes Hindi-English notes and MCQs."

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
        "Super El Nino",
        "Super El Niño 2026",
        "Super El Nino 2026",
        "Super El Niño Forecast",
        "El Niño 2026",
        "El Niño 2026-27",
        "Strong El Niño 2026",
        "Very Strong El Niño",
        "El Niño Southern Oscillation",
        "ENSO 2026",
        "ENSO Warm Phase",
        "El Niño Current Affairs 2026",

        // Forecast
        "El Niño Forecast October 2026",
        "El Niño Forecast Late 2026",
        "El Niño Forecast 2027",
        "NOAA ENSO Forecast 2026",
        "WMO El Niño Outlook 2026",
        "Super El Niño Probability",
        "El Niño Intensity Forecast",
        "Strong ENSO Event 2026",
        "Pacific Ocean Warming 2026",
        "El Niño Climate Outlook",

        // Science and geography
        "What is Super El Niño",
        "What is El Niño",
        "El Niño Definition",
        "El Niño Formation",
        "ENSO Explained",
        "El Niño vs La Niña",
        "El Niño vs ENSO Neutral",
        "Sea Surface Temperature Anomaly",
        "Niño 3.4 Region",
        "Oceanic Niño Index",
        "Relative Oceanic Niño Index",
        "Walker Circulation",
        "Trade Winds El Niño",
        "El Niño Trade Winds",
        "Equatorial Pacific Warming",
        "Ocean Upwelling",
        "Peru Coastal Upwelling",
        "Thermocline El Niño",
        "Atmospheric Convection",
        "Pacific Ocean Circulation",

        // Impacts
        "El Niño Impact on India",
        "El Niño Impact on Indian Monsoon",
        "El Niño Southwest Monsoon",
        "El Niño Indian Rainfall",
        "El Niño Drought Risk India",
        "El Niño Kharif Crops",
        "El Niño Agriculture India",
        "El Niño Global Temperature",
        "El Niño Extreme Weather",
        "El Niño Coral Bleaching",
        "El Niño Fisheries",
        "El Niño Climate Change",
        "El Niño Indian Ocean Dipole",
        "Positive IOD and El Niño",

        // Historical events
        "1982 1983 El Niño",
        "1997 1998 El Niño",
        "2015 2016 El Niño",
        "Historical Strong El Niño Events",
        "Strongest El Niño Events",

        // Exam preparation
        "Super El Niño UPSC",
        "El Niño UPSC Geography",
        "El Niño SSC",
        "El Niño HSSC CET",
        "El Niño UKSSSC",
        "El Niño UKPSC",
        "El Niño UPPSC",
        "El Niño State PCS",
        "El Niño Railway Exam",
        "El Niño Banking Exam",
        "El Niño Geography Notes",
        "El Niño Current Affairs MCQ",
        "El Niño Questions Answers",
        "El Niño Assertion Reason Questions",
        "El Niño Hindi English Notes",
        "Climatology Current Affairs 2026",
        "Environment Current Affairs 2026",

        // Hindi
        "सुपर अल नीनो 2026",
        "सुपर एल नीनो 2026",
        "अल नीनो क्या है",
        "एल नीनो क्या है",
        "अल नीनो और ला नीना",
        "अल नीनो का भारत पर प्रभाव",
        "अल नीनो भारतीय मानसून",
        "अल नीनो दक्षिण पश्चिम मानसून",
        "अल नीनो 2026 पूर्वानुमान",
        "अल नीनो और कृषि",
        "अल नीनो सूखा",
        "वॉकर परिसंचरण",
        "व्यापारिक पवनें",
        "समुद्री सतह तापमान विसंगति",
        "समुद्री अपवेलिंग",
        "अल नीनो करंट अफेयर्स 2026",
        "अल नीनो महत्वपूर्ण प्रश्न",
        "अल नीनो हिंदी नोट्स",
        "भूगोल करंट अफेयर्स 2026",
        "जलवायु विज्ञान प्रश्न उत्तर",
        "पर्यावरण प्रतियोगी परीक्षा प्रश्न",
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
                alt: "Super El Niño 2026 - ENSO Forecast, Pacific Warming and Indian Monsoon",
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
        "Free competitive examination preparation platform offering current affairs, study material, mock tests and practice questions.",
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
            name: "El Niño",
        },
        {
            "@type": "Thing",
            name: "El Niño–Southern Oscillation",
        },
        {
            "@type": "Thing",
            name: "Indian Monsoon",
        },
    ],
}

const articleSchema = {
    "@type": "Article",

    "@id": `${PAGE_URL}#article`,

    headline:
        "Super El Niño 2026: ENSO Forecast, Walker Circulation, Trade Winds, Indian Monsoon and MCQs",

    alternativeHeadline:
        "सुपर अल नीनो 2026: पूर्वानुमान, वॉकर परिसंचरण, भारतीय मानसून और महत्वपूर्ण प्रश्न",

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
        "Geography",
        "Climatology",
        "Environment",
        "Meteorology",
        "Competitive Exam Preparation",
    ],

    about: [
        {
            "@type": "Thing",
            name: "Super El Niño",
        },
        {
            "@type": "Thing",
            name: "ENSO",
        },
        {
            "@type": "Thing",
            name: "Sea Surface Temperature Anomaly",
        },
        {
            "@type": "Thing",
            name: "Walker Circulation",
        },
        {
            "@type": "Thing",
            name: "Ocean Upwelling",
        },
        {
            "@type": "Thing",
            name: "Indian Southwest Monsoon",
        },
    ],

    mentions: [
        {
            "@type": "Organization",
            name: "World Meteorological Organization",
            url: "https://wmo.int/",
        },
        {
            "@type": "Organization",
            name: "National Oceanic and Atmospheric Administration",
            url: "https://www.noaa.gov/",
        },
    ],

    citation: [
        "https://wmo.int/news/media-centre/el-nino-set-become-very-strong-raising-risks-of-extreme-weather-2027",
        "https://cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml",
        "https://www.climate.gov/news-features/blogs/enso/december-2023-el-nino-update-adventure",
    ],
}

const learningResourceSchema = {
    "@type": "LearningResource",

    "@id": `${PAGE_URL}#learning-resource`,

    name: "Super El Niño 2026 Study Notes and Practice MCQs",

    description:
        "Free bilingual learning material covering El Niño and La Niña, ENSO, sea surface temperature anomalies, trade winds, ocean upwelling, and potential Indian monsoon impacts.",

    url: PAGE_URL,

    inLanguage: ["en-IN", "hi-IN"],

    learningResourceType: [
        "Current Affairs Notes",
        "Geography Notes",
        "Study Material",
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
            name: "El Niño–Southern Oscillation",
        },
        {
            "@type": "Thing",
            name: "Indian Monsoon",
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
            name: "Super El Niño 2026",
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

export default function SuperElNinoLayout({
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