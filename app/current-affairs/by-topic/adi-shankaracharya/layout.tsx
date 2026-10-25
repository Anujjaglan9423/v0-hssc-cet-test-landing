
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const PAGE_PATH = "/current-affairs/by-topic/adi-shankaracharya";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "Adi Shankaracharya & Advaita Vedanta: Notes, MCQs | CET Test";

const DESCRIPTION =
  "Learn about Adi Shankaracharya, Advaita Vedanta philosophy, four Mathas, teachings, books and Statue of Oneness. Free Hindi-English notes and MCQs for exams.";

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
    // Primary keywords
    "Adi Shankaracharya",
    "Adi Shankaracharya biography",
    "Adi Shankaracharya history",
    "Adi Shankaracharya philosophy",
    "Advaita Vedanta",
    "Advaita Vedanta philosophy",
    "Adi Shankaracharya teachings",
    "Adi Shankaracharya notes",

    // Educational keywords
    "Adi Shankaracharya birth place",
    "Adi Shankaracharya four Mathas",
    "Four Mathas of Adi Shankaracharya",
    "Adi Shankaracharya books",
    "Adi Shankaracharya literary works",
    "Adi Shankaracharya contributions",
    "Adi Shankaracharya guru",
    "Adi Shankaracharya Dasanami Sampradaya",
    "Advaita philosophy explained",
    "Atman and Brahman Advaita Vedanta",
    "Maya in Advaita Vedanta",
    "Jnana and Moksha",

    // Exam preparation
    "Adi Shankaracharya UPSC notes",
    "Adi Shankaracharya SSC GK",
    "Adi Shankaracharya HSSC CET",
    "Adi Shankaracharya MCQ",
    "Advaita Vedanta MCQ",
    "Adi Shankaracharya questions and answers",
    "Indian philosophy competitive exams",
    "Indian art and culture notes",
    "Indian philosophy UPSC",
    "Adi Shankaracharya current affairs",
    "HSSC CET art and culture",

    // Statue of Oneness
    "Statue of Oneness",
    "Statue of Oneness Omkareshwar",
    "108 feet Adi Shankaracharya statue",
    "Ekatma Dham",
    "Adi Shankaracharya Madhya Pradesh",

    // People Also Ask / WH queries
    "who was Adi Shankaracharya",
    "what is Advaita Vedanta",
    "when was Adi Shankaracharya born",
    "where was Adi Shankaracharya born",
    "who was Adi Shankaracharya guru",
    "what are the four Mathas",
    "where are the four Mathas located",
    "why is Adi Shankaracharya famous",
    "what did Adi Shankaracharya teach",
    "how is Advaita different from Dvaita",
    "what is the meaning of Brahman",
    "what is Maya in Advaita",
    "where is the Statue of Oneness",

    // Hindi keywords
    "आदि शंकराचार्य",
    "आदि शंकराचार्य का जीवन परिचय",
    "आदि शंकराचार्य का इतिहास",
    "आदि शंकराचार्य का दर्शन",
    "अद्वैत वेदांत",
    "अद्वैत वेदांत क्या है",
    "आदि शंकराचार्य के चार मठ",
    "चार मठों के नाम और स्थान",
    "आदि शंकराचार्य की पुस्तकें",
    "आदि शंकराचार्य के गुरु",
    "आदि शंकराचार्य का जन्म स्थान",
    "आदि शंकराचार्य के उपदेश",
    "आदि शंकराचार्य प्रश्न उत्तर",
    "आदि शंकराचार्य सामान्य ज्ञान",
    "आदि शंकराचार्य MCQ",
    "स्टैच्यू ऑफ वननेस",
    "एकात्मता की मूर्ति",
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
        "Adi Shankaracharya and Advaita Vedanta: Philosophy, Four Mathas and MCQs",
      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],
      articleSection: [
        "Current Affairs",
        "Indian Art and Culture",
        "Indian Philosophy",
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
          "@type": "Person",
          name: "Adi Shankaracharya",
          alternateName: [
            "Adi Shankara",
            "Shankaracharya",
            "आदि शंकराचार्य",
          ],
          description:
            "Indian philosopher and theologian associated with Advaita Vedanta.",
        },
        {
          "@type": "Thing",
          name: "Advaita Vedanta",
          alternateName: "अद्वैत वेदांत",
          description:
            "A non-dualistic school of Vedanta philosophy.",
        },
        {
          "@type": "Thing",
          name: "Indian Philosophy",
        },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Atman",
        },
        {
          "@type": "Thing",
          name: "Brahman",
        },
        {
          "@type": "Thing",
          name: "Maya",
        },
        {
          "@type": "Thing",
          name: "Moksha",
        },
        {
          "@type": "Place",
          name: "Sringeri Sharada Peetham",
        },
        {
          "@type": "Place",
          name: "Jyotir Math",
        },
        {
          "@type": "Place",
          name: "Govardhan Math",
        },
        {
          "@type": "Place",
          name: "Dwarka Sharada Peetham",
        },
        {
          "@type": "Place",
          name: "Omkareshwar, Madhya Pradesh",
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
          name: "Adi Shankaracharya and Advaita Vedanta",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function AdiShankaracharyaLayout({
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
