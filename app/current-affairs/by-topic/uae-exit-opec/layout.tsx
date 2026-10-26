import type { Metadata } from "next"
import type { ReactNode } from "react"

// ============================================
// PAGE CONFIGURATION
// ============================================

const SITE_URL = "https://cettest.site"

const PAGE_PATH = "/current-affairs/by-topic/uae-exit-opec"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

// Ensure this file exists in /public
const OG_IMAGE = `${SITE_URL}/og-image.png`

const PAGE_TITLE =
    "UAE Exits OPEC in 2026: Reasons, 11 Members & MCQs"

const PAGE_DESCRIPTION =
    "Learn why the UAE exited OPEC and OPEC+ on 1 May 2026, its effects on oil markets and India, OPEC's founding members, headquarters, current membership and bilingual current affairs MCQs."

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
        "UAE Exits OPEC",
        "UAE Exits OPEC 2026",
        "UAE Leaves OPEC",
        "UAE Withdrawal from OPEC",
        "UAE OPEC Exit",
        "UAE Exits OPEC Plus",
        "UAE Leaves OPEC Plus",
        "UAE OPEC Withdrawal 2026",
        "United Arab Emirates OPEC Exit",
        "UAE OPEC Current Affairs 2026",

        // Event and date
        "UAE OPEC Exit May 2026",
        "UAE OPEC Exit 1 May 2026",
        "UAE OPEC Announcement 28 April 2026",
        "Why UAE Left OPEC",
        "Reasons UAE Exited OPEC",
        "UAE OPEC Production Quota Dispute",
        "UAE Oil Production Strategy",
        "UAE Independent Oil Production",
        "UAE Oil Policy 2026",
        "UAE Energy Policy",

        // OPEC fundamentals
        "OPEC Full Form",
        "Organization of Petroleum Exporting Countries",
        "OPEC Founded 1960",
        "OPEC Baghdad Conference",
        "OPEC Founding Members",
        "Five Founding Members of OPEC",
        "OPEC Headquarters Vienna",
        "OPEC Member Countries",
        "OPEC Members 2026",
        "OPEC 11 Members",
        "OPEC Countries List 2026",
        "OPEC History",
        "OPEC Objectives",
        "OPEC Oil Prices",
        "OPEC Production Quotas",

        // OPEC Plus
        "OPEC Plus Full Form",
        "OPEC Plus Members",
        "OPEC vs OPEC Plus",
        "OPEC Plus 2016",
        "OPEC Plus Production Agreement",
        "Russia and OPEC Plus",
        "Saudi Arabia OPEC Plus",
        "OPEC Plus Oil Output",

        // International context
        "Qatar Left OPEC 2019",
        "Countries That Left OPEC",
        "Persian Gulf Countries OPEC",
        "Strait of Hormuz Oil Supply",
        "Middle East Oil Supply",
        "Global Oil Market 2026",
        "Crude Oil Supply 2026",
        "Oil Production and Prices",
        "Global Energy Security",

        // India-specific
        "UAE OPEC Exit Impact on India",
        "India Crude Oil Imports",
        "India Oil Import Dependence",
        "UAE India Energy Relations",
        "India Crude Oil Prices",
        "Oil Price Impact on Indian Economy",
        "Crude Oil Inflation India",
        "India Energy Security",

        // Exams
        "UAE OPEC Exit UPSC",
        "UAE OPEC Exit SSC",
        "UAE OPEC Exit HSSC CET",
        "UAE OPEC Exit UKSSSC",
        "UAE OPEC Exit UKPSC",
        "UAE OPEC Exit UPPSC",
        "UAE OPEC Exit State PCS",
        "OPEC UPSC Current Affairs",
        "OPEC GK Questions",
        "OPEC Current Affairs MCQ",
        "OPEC Questions and Answers",
        "OPEC Quiz 2026",
        "International Economy Current Affairs",
        "International Organizations Current Affairs 2026",

        // Hindi
        "यूएई ओपेक से बाहर",
        "यूएई ओपेक से बाहर 2026",
        "यूएई ने ओपेक क्यों छोड़ा",
        "यूएई ओपेक सदस्यता समाप्त",
        "ओपेक क्या है",
        "ओपेक का पूरा नाम",
        "ओपेक की स्थापना कब हुई",
        "ओपेक के संस्थापक सदस्य",
        "ओपेक का मुख्यालय",
        "ओपेक सदस्य देश 2026",
        "ओपेक में कितने देश हैं",
        "ओपेक और ओपेक प्लस में अंतर",
        "ओपेक का उद्देश्य",
        "तेल उत्पादक देशों का संगठन",
        "कतर ओपेक से बाहर",
        "भारत पर तेल कीमतों का प्रभाव",
        "यूएई ओपेक करंट अफेयर्स",
        "ओपेक महत्वपूर्ण प्रश्न उत्तर",
        "ओपेक हिंदी नोट्स",
        "अंतरराष्ट्रीय अर्थव्यवस्था करंट अफेयर्स",
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
                alt: "UAE Exits OPEC in 2026 - Reasons, Member Countries and Current Affairs",
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
        "Free competitive exam preparation platform providing current affairs, study notes, mock tests and practice questions.",
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
            name: "United Arab Emirates Withdrawal from OPEC",
        },
        {
            "@type": "Thing",
            name: "OPEC",
        },
        {
            "@type": "Thing",
            name: "OPEC+",
        },
    ],
}

const articleSchema = {
    "@type": "Article",

    "@id": `${PAGE_URL}#article`,

    headline:
        "UAE Exits OPEC and OPEC+ in 2026: Reasons, OPEC Members, Headquarters, India Impact and MCQs",

    alternativeHeadline:
        "यूएई का ओपेक से बाहर होना 2026: कारण, सदस्य देश, मुख्यालय और महत्वपूर्ण प्रश्न",

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
        "International Economy",
        "International Organizations",
        "Energy",
        "Crude Oil",
        "International Relations",
        "Competitive Exam Preparation",
    ],

    about: [
        {
            "@type": "Thing",
            name: "UAE Exit from OPEC in 2026",
        },
        {
            "@type": "Thing",
            name: "OPEC Member Countries",
        },
        {
            "@type": "Thing",
            name: "OPEC+",
        },
        {
            "@type": "Thing",
            name: "Oil Production Quotas",
        },
        {
            "@type": "Thing",
            name: "Global Energy Security",
        },
    ],

    mentions: [
        {
            "@type": "Organization",
            name: "Organization of the Petroleum Exporting Countries",
            url: "https://www.opec.org/",
        },
        {
            "@type": "Country",
            name: "United Arab Emirates",
        },
        {
            "@type": "Country",
            name: "India",
        },
    ],

    citation: [
        "https://www.wam.ae/en/article/bzxzuh7-uae-announces-decision-exit-opec-opec%2B",
        "https://www.opec.org/member-countries.html",
        "https://www.opec.org/",
    ],
}

const learningResourceSchema = {
    "@type": "LearningResource",

    "@id": `${PAGE_URL}#learning-resource`,

    name: "UAE OPEC Exit 2026 Study Notes and MCQs",

    description:
        "Free bilingual educational notes on the UAE's 2026 withdrawal from OPEC and OPEC+, the organization’s founding members, headquarters, membership and implications for global oil markets.",

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
            "Students preparing for Indian competitive examinations",
    },

    about: [
        {
            "@type": "Thing",
            name: "International Oil Markets",
        },
        {
            "@type": "Thing",
            name: "OPEC",
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
            name: "UAE Exits OPEC and OPEC+",
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

export default function UAEExitOPECLayout({
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