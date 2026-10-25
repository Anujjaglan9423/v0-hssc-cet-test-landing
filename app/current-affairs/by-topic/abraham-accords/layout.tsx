
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const PAGE_PATH = "/current-affairs/by-topic/abraham-accords";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "Abraham Accords Explained: Countries, Facts & MCQs | CET Test";

const DESCRIPTION =
  "What are the Abraham Accords? Learn the 2020 agreement, signatory countries, objectives, history and importance in Hindi and English, with MCQs for exams.";

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
    "Abraham Accords",
    "Abraham Accords explained",
    "Abraham Accords 2020",
    "Abraham Accords countries",
    "Abraham Accords agreement",
    "Abraham Accords signatories",

    // Educational searches
    "Abraham Accords notes",
    "Abraham Accords summary",
    "Abraham Accords key facts",
    "Abraham Accords objectives",
    "Abraham Accords history",
    "Abraham Accords importance",
    "Abraham Accords current affairs",

    // Competitive examination searches
    "Abraham Accords UPSC",
    "Abraham Accords SSC",
    "Abraham Accords HSSC CET",
    "Abraham Accords MCQ",
    "Abraham Accords questions and answers",
    "Abraham Accords GK questions",
    "international relations current affairs",
    "Abraham Accords competitive exams",

    // Long-tail searches
    "what are the Abraham Accords",
    "who signed the Abraham Accords",
    "when were the Abraham Accords signed",
    "which countries signed Abraham Accords",
    "why were the Abraham Accords signed",
    "what is the purpose of Abraham Accords",
    "how do the Abraham Accords work",
    "what is the significance of Abraham Accords",
    "is India part of the Abraham Accords",
    "is Saudi Arabia part of the Abraham Accords",

    // Hindi keywords
    "अब्राहम अकॉर्ड्स",
    "अब्राहम समझौता",
    "अब्राहम अकॉर्ड्स क्या है",
    "अब्राहम अकॉर्ड्स कब हुआ",
    "अब्राहम समझौते में कौन कौन से देश हैं",
    "अब्राहम अकॉर्ड्स के उद्देश्य",
    "अब्राहम अकॉर्ड्स सामान्य ज्ञान",
    "अब्राहम अकॉर्ड्स प्रश्न उत्तर",
    "अब्राहम अकॉर्ड्स UPSC",
    "अब्राहम अकॉर्ड्स करंट अफेयर्स",
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

  other: {
    "content-language": "en-IN, hi-IN",
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
        "The Abraham Accords: Countries, History, Objectives and MCQs",
      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],
      articleSection: [
        "Current Affairs",
        "International Relations",
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
          "@type": "Thing",
          name: "Abraham Accords",
          description:
            "US-mediated diplomatic normalization agreements involving Israel and Arab countries beginning in 2020.",
        },
        {
          "@type": "Thing",
          name: "International Relations",
        },
        {
          "@type": "Thing",
          name: "Middle East Diplomacy",
        },
      ],
      mentions: [
        { "@type": "Country", name: "Israel" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Bahrain" },
        { "@type": "Country", name: "Morocco" },
        { "@type": "Country", name: "Sudan" },
        { "@type": "Country", name: "United States" },
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
          name: "Abraham Accords",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function AbrahamAccordsLayout({
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
