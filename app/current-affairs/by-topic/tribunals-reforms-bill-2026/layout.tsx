import type { Metadata } from "next"
import type { ReactNode } from "react"

// ============================================
// PAGE CONFIGURATION
// ============================================

const SITE_URL = "https://cettest.site"

const PAGE_PATH =
    "/current-affairs/by-topic/tribunals-reforms-bill-2026"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

// Ensure this image exists in your public folder.
const OG_IMAGE = `${SITE_URL}/og-image.png`

const PAGE_TITLE =
    "Tribunals Reforms Bill 2026: NTC, Key Provisions & MCQs"

const PAGE_DESCRIPTION =
    "Study Tribunals Reforms Bill 2026, the National Tribunals Commission, judicial and technical members, appointments, tenure, Articles 323A–323B and bilingual polity MCQs for competitive exams."

// ============================================
// METADATA
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
        // Main keywords
        "Tribunals Reforms Bill 2026",
        "Tribunals Reforms Act 2026",
        "Tribunal Reforms 2026 India",
        "National Tribunals Commission",
        "National Tribunals Commission 2026",
        "NTC India 2026",
        "Tribunal Reforms Bill Summary",
        "Tribunals Reforms Bill Key Provisions",
        "Tribunals Reforms Bill Explained",
        "Tribunal Reforms Current Affairs 2026",

        // Legislative background
        "Tribunals Reforms Act 2021",
        "Tribunals Reforms Act 2021 Repeal",
        "Tribunals Reforms Bill 2026 Passed",
        "Tribunals Reforms Bill August 2026",
        "Ministry of Law and Justice Tribunals",
        "Parliament Tribunals Reforms 2026",
        "Tribunal Reforms India",
        "Judicial Reforms India 2026",

        // National Tribunals Commission
        "National Tribunals Commission Composition",
        "National Tribunals Commission Members",
        "National Tribunals Commission Chairperson",
        "National Tribunals Commission Functions",
        "National Tribunals Commission Appointments",
        "NTC Judicial Members",
        "NTC Technical Members",
        "Tribunal Member Appointment Process",
        "Tribunal Appointment Age Limit",
        "Tribunal Chairperson Tenure",
        "Tribunal Members Tenure",
        "Tribunal Members Removal",
        "National Tribunals Data Grid",
        "Tribunal Performance Review",
        "Search Cum Selection Committee",

        // Constitutional topics
        "Article 323A",
        "Article 323B",
        "Article 323A Administrative Tribunals",
        "Article 323B Tribunals",
        "Part XIV A Constitution",
        "42nd Constitutional Amendment 1976",
        "Administrative Tribunals India",
        "Judicial Independence India",
        "Separation of Powers India",
        "Tribunal System India",
        "Tribunals Under Indian Constitution",

        // Government and judiciary
        "Tribunal Independence",
        "Tribunal Transparency",
        "Judicial Appointments India",
        "Judiciary Current Affairs 2026",
        "Indian Polity Current Affairs 2026",
        "Law and Justice Current Affairs",
        "Parliamentary Bills 2026",
        "Important Bills and Acts 2026",

        // Exam preparation
        "Tribunals Reforms Bill UPSC",
        "Tribunals Reforms Bill SSC",
        "Tribunals Reforms Bill SSC CGL",
        "Tribunals Reforms Bill SSC CHSL",
        "Tribunals Reforms Bill HSSC CET",
        "Tribunals Reforms Bill UKSSSC",
        "Tribunals Reforms Bill UKPSC",
        "Tribunals Reforms Bill UPPSC",
        "Tribunals Reforms Bill State PCS",
        "Tribunals Reforms Bill Railway",
        "Tribunals Reforms Bill Banking",
        "Tribunals Reforms Bill MCQ",
        "Tribunals Reforms Bill Quiz",
        "Tribunals Reforms Bill Notes",
        "Tribunals Reforms Bill Questions Answers",
        "Indian Polity MCQ 2026",
        "Constitutional Articles MCQ",

        // Hindi
        "न्यायाधिकरण सुधार विधेयक 2026",
        "न्यायाधिकरण सुधार अधिनियम 2026",
        "राष्ट्रीय न्यायाधिकरण आयोग",
        "राष्ट्रीय न्यायाधिकरण आयोग 2026",
        "न्यायाधिकरण सुधार विधेयक के प्रावधान",
        "न्यायाधिकरण सुधार विधेयक क्या है",
        "न्यायाधिकरण आयोग के सदस्य",
        "न्यायाधिकरण आयोग की संरचना",
        "न्यायाधिकरण आयोग के कार्य",
        "न्यायाधिकरण में नियुक्ति प्रक्रिया",
        "न्यायाधिकरण सदस्यों का कार्यकाल",
        "अनुच्छेद 323 ए",
        "अनुच्छेद 323 बी",
        "भारतीय संविधान भाग 14 क",
        "42वां संविधान संशोधन 1976",
        "प्रशासनिक न्यायाधिकरण",
        "भारतीय न्यायपालिका सुधार",
        "न्यायिक स्वतंत्रता",
        "न्यायाधिकरण सुधार विधेयक प्रश्न उत्तर",
        "न्यायाधिकरण सुधार विधेयक हिंदी नोट्स",
        "भारतीय राजव्यवस्था करंट अफेयर्स 2026",
        "संविधान महत्वपूर्ण प्रश्न",
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
                alt: "Tribunals Reforms Bill 2026 - National Tribunals Commission and Key Provisions",
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
        "Free educational platform offering current affairs, mock tests, study notes and practice questions for Indian competitive examinations.",
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
            name: "Tribunals Reforms Bill 2026",
        },
        {
            "@type": "Thing",
            name: "National Tribunals Commission",
        },
        {
            "@type": "Thing",
            name: "Indian Judiciary",
        },
    ],
}

const articleSchema = {
    "@type": "Article",

    "@id": `${PAGE_URL}#article`,

    headline:
        "Tribunals Reforms Bill 2026: National Tribunals Commission, Appointment Rules, Tenure, Articles 323A and 323B",

    alternativeHeadline:
        "न्यायाधिकरण सुधार विधेयक 2026: राष्ट्रीय न्यायाधिकरण आयोग, नियुक्ति नियम और संवैधानिक प्रावधान",

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
        "Indian Polity",
        "Judiciary",
        "Constitution",
        "Parliament",
        "Law and Justice",
        "Competitive Exam Preparation",
    ],

    about: [
        {
            "@type": "Thing",
            name: "Tribunals Reforms Bill 2026",
        },
        {
            "@type": "Thing",
            name: "National Tribunals Commission",
        },
        {
            "@type": "Thing",
            name: "Tribunal Appointments",
        },
        {
            "@type": "Thing",
            name: "Judicial Independence",
        },
        {
            "@type": "Thing",
            name: "Article 323A of the Constitution of India",
        },
        {
            "@type": "Thing",
            name: "Article 323B of the Constitution of India",
        },
    ],

    mentions: [
        {
            "@type": "GovernmentOrganization",
            name: "Ministry of Law and Justice",
            url: "https://lawmin.gov.in/",
        },
        {
            "@type": "GovernmentOrganization",
            name: "Parliament of India",
            url: "https://sansad.in/",
        },
    ],

    citation: [
        "https://prsindia.org/billtrack/the-tribunals-reforms-bill-2026",
        "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2298157",
        "https://sansad.in/ls/legislation/bills",
    ],
}

const learningResourceSchema = {
    "@type": "LearningResource",

    "@id": `${PAGE_URL}#learning-resource`,

    name: "Tribunals Reforms Bill 2026 Study Notes and MCQs",

    description:
        "Bilingual English-Hindi notes covering the Tribunals Reforms Bill 2026, National Tribunals Commission, judicial and technical members, appointments, tenure and constitutional articles.",

    url: PAGE_URL,

    inLanguage: ["en-IN", "hi-IN"],

    learningResourceType: [
        "Current Affairs Notes",
        "Indian Polity Notes",
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
            "Candidates preparing for Indian government recruitment and competitive examinations",
    },

    about: [
        {
            "@type": "Thing",
            name: "Indian Constitutional Law",
        },
        {
            "@type": "Thing",
            name: "Tribunal System in India",
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
            name: "Tribunals Reforms Bill 2026",
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

export default function TribunalsReformsLayout({
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