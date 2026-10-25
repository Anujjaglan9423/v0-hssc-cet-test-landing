
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const PAGE_PATH = "/current-affairs/by-topic/g7-summit-2026";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "G7 Summit 2026: France, Members, India & MCQs | CET Test";

const DESCRIPTION =
  "Learn about the 52nd G7 Summit 2026 in Évian, France, its members, India’s participation, key discussions and G7 history. Free Hindi-English notes and MCQs for UKPSC, UKSSSC and UPSC.";

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
    // Primary SEO keywords
    "G7 Summit 2026",
    "52nd G7 Summit",
    "52nd G7 Summit 2026",
    "G7 Summit France 2026",
    "G7 Summit Evian 2026",
    "G7 Summit Évian France",
    "G7 2026 Current Affairs",
    "G7 Summit 2026 Explained",
    "G7 Summit 2026 Notes",
    "G7 Summit 2026 Highlights",

    // Summit information
    "G7 Summit 2026 Date",
    "G7 Summit 2026 Venue",
    "G7 Summit 2026 Host Country",
    "G7 Summit 2026 Theme",
    "G7 Summit 2026 Agenda",
    "G7 Summit 2026 Outcomes",
    "G7 Summit 2026 Declaration",
    "France G7 Presidency 2026",
    "G7 Leaders Meeting 2026",
    "G7 France International Partnerships",
    "G7 Critical Minerals 2026",
    "G7 Artificial Intelligence 2026",

    // India and G7
    "India G7 Summit 2026",
    "Narendra Modi G7 Summit 2026",
    "PM Modi G7 France 2026",
    "India G7 Outreach Session",
    "India G7 Relations",
    "India Canada G7 Meeting",
    "Raisina Americas",
    "Raisina Americas Forum",
    "G7 International Solidarity",
    "G7 India Cooperation",
    "India G7 Global South",

    // G7 structure and history
    "G7 Member Countries",
    "G7 Countries List 2026",
    "Group of Seven",
    "G7 Full Form",
    "G7 History",
    "G7 Formation 1975",
    "G6 Summit 1975",
    "G7 Objectives",
    "G7 Importance",
    "G7 Rotating Presidency",
    "G7 Permanent Secretariat",
    "G7 Headquarters",
    "G7 European Union",
    "G7 Russia G8 History",
    "G7 vs G20",
    "G7 vs BRICS",

    // Global economy and diplomacy
    "G7 Global Economy",
    "G7 International Relations",
    "G7 Economic Cooperation",
    "G7 Global Governance",
    "G7 Trade Cooperation",
    "G7 Global Security",
    "G7 Geopolitical Issues",
    "G7 Sustainable Development",
    "G7 Global Partnerships",
    "G7 Foreign Policy",
    "International Summits 2026",

    // UKPSC keywords
    "G7 Summit 2026 UKPSC",
    "G7 UKPSC Current Affairs",
    "G7 UKPSC Notes",
    "G7 UKPSC MCQ",
    "G7 Member Countries UKPSC",
    "UKPSC International Relations",
    "UKPSC International Organizations",
    "UKPSC World Current Affairs 2026",
    "UKPSC Prelims G7 Questions",
    "UKPSC G7 vs G20",
    "UKPSC Global Economy GK",

    // UKSSSC keywords
    "G7 Summit 2026 UKSSSC",
    "G7 UKSSSC Current Affairs",
    "G7 UKSSSC Notes",
    "G7 UKSSSC MCQ",
    "G7 Countries UKSSSC",
    "UKSSSC International Organizations",
    "UKSSSC World GK",
    "UKSSSC Current Affairs 2026",
    "UKSSSC Important Summits",
    "UKSSSC G7 Full Form",
    "UKSSSC International Relations GK",

    // Other competitive examinations
    "G7 Summit 2026 UPSC",
    "G7 Summit 2026 SSC",
    "G7 Summit 2026 HSSC CET",
    "G7 Summit 2026 Railway Exams",
    "G7 Summit 2026 State PSC",
    "G7 Summit 2026 MCQ",
    "G7 Summit Questions and Answers",
    "International Organizations UPSC",
    "International Relations Current Affairs 2026",
    "World Summits Current Affairs",
    "G7 General Knowledge",
    "G7 UPSC Prelims",
    "G7 SSC GK",
    "Important Summits 2026",

    // People Also Ask / WH keywords
    "what is G7",
    "what is the full form of G7",
    "when was G7 Summit 2026 held",
    "where was G7 Summit 2026 held",
    "who hosted G7 Summit 2026",
    "what was the theme of G7 Summit 2026",
    "which countries are members of G7",
    "how many countries are in G7",
    "when was G7 founded",
    "why was G7 formed",
    "does G7 have a permanent secretariat",
    "is India a member of G7",
    "why was India invited to G7 Summit 2026",
    "what is the difference between G7 and G20",
    "why was Russia removed from G8",
    "what is Raisina Americas",
    "which country will host G7 Summit 2027",

    // Hindi primary keywords
    "जी 7 शिखर सम्मेलन 2026",
    "G7 शिखर सम्मेलन 2026",
    "52वां जी 7 शिखर सम्मेलन",
    "G7 सम्मेलन फ्रांस 2026",
    "जी 7 सम्मेलन एवियन",
    "G7 सम्मेलन में भारत",
    "नरेंद्र मोदी G7 सम्मेलन 2026",
    "G7 के सदस्य देश",
    "G7 का पूरा नाम",
    "G7 क्या है",
    "G7 की स्थापना कब हुई",
    "G7 का इतिहास",
    "G7 के उद्देश्य",
    "G7 का महत्व",
    "G7 और G20 में अंतर",
    "G7 और BRICS में अंतर",
    "G7 करंट अफेयर्स 2026",
    "G7 सामान्य ज्ञान",
    "G7 प्रश्न उत्तर",
    "G7 MCQ",

    // Hindi UKPSC and UKSSSC
    "G7 सम्मेलन UKPSC",
    "G7 सम्मेलन UKSSSC",
    "UKPSC अंतरराष्ट्रीय संगठन",
    "UKSSSC अंतरराष्ट्रीय संगठन",
    "UKPSC विश्व करंट अफेयर्स",
    "UKSSSC विश्व करंट अफेयर्स",
    "UKPSC G7 प्रश्न",
    "UKSSSC G7 प्रश्न",
    "UKPSC करंट अफेयर्स 2026",
    "UKSSSC करंट अफेयर्स 2026",
    "उत्तराखंड लोक सेवा आयोग अंतरराष्ट्रीय संबंध",
    "उत्तराखंड अधीनस्थ सेवा चयन आयोग विश्व सामान्य ज्ञान",
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
        "52nd G7 Summit 2026: France, Member Countries, India Participation, Outcomes and MCQs",

      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],

      articleSection: [
        "Current Affairs",
        "International Relations",
        "International Organizations",
        "Global Economy",
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
          name: "52nd G7 Summit 2026",
          alternateName: "G7 Évian 2026",
          description:
            "The 2026 G7 Leaders' Summit hosted by France in Évian from June 15 to June 17, 2026.",
          startDate: "2026-06-15",
          endDate: "2026-06-17",
          location: {
            "@type": "Place",
            name: "Évian-les-Bains, France",
          },
          organizer: {
            "@type": "Organization",
            name: "G7 French Presidency 2026",
          },
        },
        {
          "@type": "Organization",
          name: "Group of Seven",
          alternateName: "G7",
          description:
            "An informal forum of seven advanced industrial democracies, with participation by the European Union.",
        },
        {
          "@type": "Thing",
          name: "International Economic Cooperation",
        },
        {
          "@type": "Thing",
          name: "G7 Outreach Diplomacy",
        },
      ],

      mentions: [
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "France" },
        { "@type": "Country", name: "Germany" },
        { "@type": "Country", name: "Italy" },
        { "@type": "Country", name: "Japan" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "India" },
        {
          "@type": "Organization",
          name: "European Union",
          url: "https://european-union.europa.eu/",
        },
        {
          "@type": "Person",
          name: "Narendra Modi",
        },
        {
          "@type": "Person",
          name: "Emmanuel Macron",
        },
        {
          "@type": "Thing",
          name: "Raisina Americas",
        },
        {
          "@type": "Thing",
          name: "G7 International Partnerships",
        },
        {
          "@type": "Thing",
          name: "G7 Sustainable Economic Growth",
        },
        {
          "@type": "Thing",
          name: "G7 Artificial Intelligence Cooperation",
        },
        {
          "@type": "Thing",
          name: "G7 Critical Minerals Supply Chains",
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
          name: "G7 Summit 2026",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function G7Summit2026Layout({
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
