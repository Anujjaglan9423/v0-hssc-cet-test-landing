
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/brics-summit-2026";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "18th BRICS Summit 2026: India, Theme, Members & MCQs | CET Test";

const DESCRIPTION =
  "Learn about the 18th BRICS Summit 2026 in New Delhi, its theme, member countries, key outcomes, New Delhi Declaration and India’s chairship. Free Hindi-English notes and MCQs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute: TITLE,
  },

  description: DESCRIPTION,

  applicationName: "CET Test",
  creator: "CET Test",
  publisher: "CET Test",
  category: "Education",

  keywords: [
    // Primary SEO
    "BRICS Summit 2026",
    "18th BRICS Summit",
    "18th BRICS Summit 2026",
    "BRICS India 2026",
    "BRICS Summit New Delhi 2026",
    "India BRICS Chairship 2026",
    "BRICS Summit 2026 current affairs",
    "BRICS 2026 explained",

    // Summit details
    "BRICS Summit 2026 date",
    "BRICS Summit 2026 venue",
    "BRICS Summit 2026 theme",
    "BRICS Summit 2026 host country",
    "BRICS Summit 2026 outcomes",
    "BRICS New Delhi Declaration 2026",
    "BRICS 2026 agenda",
    "BRICS 2026 key highlights",
    "BRICS 2026 meetings",
    "India BRICS presidency 2026",

    // Membership
    "BRICS member countries 2026",
    "BRICS full members 2026",
    "BRICS partner countries 2026",
    "BRICS 11 members",
    "BRICS expansion",
    "BRICS new member countries",
    "Saudi Arabia BRICS membership",
    "Indonesia BRICS member",
    "Malaysia BRICS partner country",
    "Belarus BRICS partner country",

    // International relations
    "BRICS organization",
    "BRICS history",
    "BRICS objectives",
    "BRICS significance",
    "BRICS global governance",
    "BRICS multilateralism",
    "BRICS UN Security Council reform",
    "BRICS economic cooperation",
    "BRICS Global South",
    "BRICS geopolitical importance",
    "New Development Bank",
    "NDB BRICS Bank",
    "BRICS Contingent Reserve Arrangement",

    // Historical summits
    "first BRIC Summit 2009",
    "BRICS Summit 2012 India",
    "BRICS Summit 2016 Goa",
    "BRICS Summit 2021 India",
    "17th BRICS Summit 2025 Brazil",
    "19th BRICS Summit 2027",

    // Competitive examinations
    "BRICS UPSC 2026",
    "BRICS SSC GK",
    "BRICS HSSC CET",
    "BRICS Summit 2026 MCQ",
    "BRICS Summit 2026 questions and answers",
    "BRICS current affairs quiz",
    "BRICS international relations notes",
    "BRICS UPSC Prelims",
    "International organizations GK",
    "International relations current affairs 2026",
    "BRICS notes for competitive exams",

    // WH / People Also Ask
    "what is BRICS",
    "what is the full form of BRICS",
    "when was the 18th BRICS Summit held",
    "where was BRICS Summit 2026 held",
    "who hosted BRICS Summit 2026",
    "what was the theme of BRICS Summit 2026",
    "which countries are BRICS members in 2026",
    "how many countries are in BRICS",
    "why is BRICS important for India",
    "what is the New Delhi Declaration 2026",
    "when was the first BRICS Summit held",
    "where is the BRICS Bank headquartered",
    "how does BRICS differ from G7",
    "what is the significance of BRICS expansion",

    // Hindi keywords
    "ब्रिक्स शिखर सम्मेलन 2026",
    "18वाँ ब्रिक्स शिखर सम्मेलन",
    "ब्रिक्स सम्मेलन 2026 भारत",
    "ब्रिक्स सम्मेलन नई दिल्ली",
    "ब्रिक्स की अध्यक्षता 2026",
    "ब्रिक्स सम्मेलन 2026 की थीम",
    "ब्रिक्स सम्मेलन के प्रमुख निर्णय",
    "ब्रिक्स नई दिल्ली घोषणा",
    "ब्रिक्स सदस्य देश 2026",
    "ब्रिक्स के 11 सदस्य देश",
    "ब्रिक्स का पूरा नाम",
    "ब्रिक्स क्या है",
    "ब्रिक्स की स्थापना कब हुई",
    "ब्रिक्स का इतिहास",
    "ब्रिक्स के उद्देश्य",
    "ब्रिक्स का महत्व",
    "ब्रिक्स बैंक",
    "न्यू डेवलपमेंट बैंक",
    "ब्रिक्स करंट अफेयर्स 2026",
    "ब्रिक्स सामान्य ज्ञान",
    "ब्रिक्स प्रश्न उत्तर",
    "ब्रिक्स MCQ",
    "ब्रिक्स UPSC नोट्स",
    "ब्रिक्स HSSC CET",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
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
    url: PAGE_URL,
    siteName: "CET Test",
    locale: "en_IN",
    title: TITLE,
    description: DESCRIPTION,
  },

  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "CET Test",
        url: SITE_URL,
      },
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${PAGE_URL}#article`,
      },
    },

    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      mainEntityOfPage: {
        "@id": `${PAGE_URL}#webpage`,
      },
      headline:
        "18th BRICS Summit 2026: India Chairship, Theme, Countries, Outcomes and MCQs",
      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],
      articleSection: [
        "Current Affairs",
        "International Relations",
        "International Organizations",
        "General Knowledge",
      ],
      educationalUse: "Exam Preparation",
      learningResourceType: "Study Notes",
      isAccessibleForFree: true,

      publisher: {
        "@type": "Organization",
        name: "CET Test",
        url: SITE_URL,
      },

      about: [
        {
          "@type": "Event",
          name: "18th BRICS Summit 2026",
          description:
            "The 18th BRICS Summit held in New Delhi, India, under India's 2026 BRICS chairship.",
          startDate: "2026-09-12",
          location: {
            "@type": "Place",
            name: "Bharat Mandapam, New Delhi, India",
          },
        },
        {
          "@type": "Organization",
          name: "BRICS",
          description:
            "An international cooperation forum of major emerging economies.",
        },
        {
          "@type": "Thing",
          name: "India BRICS Chairship 2026",
        },
        {
          "@type": "Thing",
          name: "New Delhi Declaration 2026",
        },
        {
          "@type": "Thing",
          name: "Multilateral Cooperation",
        },
      ],

      mentions: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "Country",
          name: "Brazil",
        },
        {
          "@type": "Country",
          name: "Russia",
        },
        {
          "@type": "Country",
          name: "China",
        },
        {
          "@type": "Country",
          name: "South Africa",
        },
        {
          "@type": "Country",
          name: "Egypt",
        },
        {
          "@type": "Country",
          name: "Ethiopia",
        },
        {
          "@type": "Country",
          name: "Iran",
        },
        {
          "@type": "Country",
          name: "Saudi Arabia",
        },
        {
          "@type": "Country",
          name: "United Arab Emirates",
        },
        {
          "@type": "Country",
          name: "Indonesia",
        },
        {
          "@type": "Organization",
          name: "New Development Bank",
          url: "https://www.ndb.int/",
        },
        {
          "@type": "Thing",
          name: "BRICS Partner Countries",
        },
        {
          "@type": "Thing",
          name: "United Nations Security Council Reform",
        },
      ],
    },

    {
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
          name: "18th BRICS Summit 2026",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function BricsSummit2026Layout({
  children,
}: {
  children: ReactNode;
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
  );
}
