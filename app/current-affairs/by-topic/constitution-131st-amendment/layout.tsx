
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/constitution-131st-amendment";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "131st Amendment Bill 2026: Women's Quota & MCQs | CET Test";

const DESCRIPTION =
  "Understand the Constitution 131st Amendment Bill 2026, women's reservation, Lok Sabha seat expansion, delimitation and Article 368. Hindi-English notes and MCQs for UKPSC, UKSSSC and UPSC.";

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
    "Constitution 131st Amendment Bill 2026",
    "131st Constitutional Amendment Bill",
    "131st Amendment Bill India",
    "Constitution Amendment Bill 2026",
    "131st Amendment Bill explained",
    "131st Amendment Bill summary",
    "131st Amendment Bill key provisions",
    "131st Amendment Bill current affairs",

    // Women's reservation
    "Women Reservation Bill 2026",
    "Women's Reservation India",
    "Women Reservation Amendment 2026",
    "33 Percent Women Reservation",
    "Women's Political Representation India",
    "Nari Shakti Vandan Adhiniyam",
    "106th Constitutional Amendment",
    "106th Amendment Act 2023",
    "Women Reservation Lok Sabha",
    "Women Reservation State Assemblies",
    "Women Reservation 2029",

    // Delimitation
    "Delimitation Bill 2026",
    "Delimitation of Lok Sabha Seats",
    "Lok Sabha 850 Seats Proposal",
    "Lok Sabha Seat Expansion 2026",
    "Parliament Delimitation India",
    "2011 Census Delimitation",
    "Delimitation Commission India",
    "Population and Parliamentary Representation",
    "Southern States Delimitation Concerns",
    "Federalism and Delimitation",
    "Parliament Seat Redistribution",

    // Constitutional articles
    "Article 368 Indian Constitution",
    "Article 368 Special Majority",
    "Constitutional Amendment Procedure",
    "Special Majority in Parliament",
    "State Ratification Constitutional Amendment",
    "Article 81 Constitution",
    "Article 82 Constitution",
    "Article 108 Constitution",
    "Article 170 Constitution",
    "Joint Sitting Parliament",
    "Composition of Lok Sabha",
    "Composition of State Legislative Assembly",
    "Constitutional Law India",

    // Parliamentary voting
    "131st Amendment Bill Lok Sabha Vote",
    "131st Amendment Bill Defeated",
    "17 April 2026 Lok Sabha Vote",
    "298 Votes 230 Votes Amendment Bill",
    "Constitution Amendment Special Majority",
    "Constitution Amendment Bill Failure 2026",
    "Lok Sabha Parliamentary Procedure",

    // UKPSC
    "131st Amendment Bill UKPSC",
    "131st Constitutional Amendment UKPSC",
    "Constitution Amendment 2026 UKPSC",
    "Women Reservation Bill UKPSC",
    "Delimitation Bill UKPSC",
    "Article 368 UKPSC",
    "UKPSC Polity Current Affairs 2026",
    "UKPSC Constitutional Amendment Notes",
    "UKPSC Indian Constitution MCQ",
    "UKPSC Prelims Polity",
    "UKPSC Mains Constitutional Law",
    "UKPSC Parliament Questions",
    "UKPSC Women Reservation GK",

    // UKSSSC
    "131st Amendment Bill UKSSSC",
    "131st Constitutional Amendment UKSSSC",
    "Constitution Amendment 2026 UKSSSC",
    "Women Reservation Bill UKSSSC",
    "Delimitation Bill UKSSSC",
    "Article 368 UKSSSC",
    "UKSSSC Polity Current Affairs",
    "UKSSSC Indian Constitution",
    "UKSSSC Constitutional Amendments",
    "UKSSSC Polity GK",
    "UKSSSC Indian Parliament MCQ",
    "UKSSSC General Knowledge 2026",
    "UKSSSC Women Reservation Questions",

    // Other competitive examinations
    "131st Amendment Bill UPSC",
    "131st Amendment Bill SSC",
    "131st Amendment Bill HSSC CET",
    "131st Amendment Bill Railway Exams",
    "131st Amendment Bill State PSC",
    "131st Amendment Bill MCQ",
    "131st Amendment Bill Questions and Answers",
    "Indian Polity Current Affairs 2026",
    "Constitutional Amendments UPSC",
    "Parliament GK Questions",
    "Indian Constitution Current Affairs",
    "Women Reservation UPSC Notes",
    "Delimitation UPSC Prelims",
    "Polity GK 2026",

    // People Also Ask / WH questions
    "what is the 131st Constitutional Amendment Bill 2026",
    "why was the 131st Amendment Bill introduced",
    "when was the 131st Amendment Bill introduced",
    "why did the 131st Amendment Bill fail",
    "how many votes did the 131st Amendment Bill receive",
    "what did the 131st Amendment Bill propose",
    "what is the Women's Reservation Bill",
    "what is the 106th Constitutional Amendment",
    "what is delimitation in India",
    "why was Lok Sabha proposed to expand to 850 seats",
    "what is special majority under Article 368",
    "how many states must ratify a constitutional amendment",
    "what is the difference between ordinary and special majority",
    "how does delimitation affect Indian states",
    "what is the relationship between census and delimitation",

    // Hindi primary keywords
    "संविधान 131वां संशोधन विधेयक 2026",
    "131वां संविधान संशोधन",
    "संविधान संशोधन विधेयक 2026",
    "131वां संविधान संशोधन क्या है",
    "131वां संविधान संशोधन विधेयक क्यों गिरा",
    "महिला आरक्षण विधेयक 2026",
    "महिला आरक्षण 33 प्रतिशत",
    "नारी शक्ति वंदन अधिनियम",
    "106वां संविधान संशोधन",
    "लोकसभा सीटों का परिसीमन",
    "लोकसभा 850 सीट प्रस्ताव",
    "परिसीमन विधेयक 2026",
    "अनुच्छेद 368",
    "संविधान संशोधन की प्रक्रिया",
    "विशेष बहुमत क्या है",
    "राज्यों द्वारा अनुसमर्थन",
    "भारतीय संसद सामान्य ज्ञान",
    "भारतीय संविधान करंट अफेयर्स",
    "संविधान संशोधन प्रश्न उत्तर",
    "131वां संशोधन MCQ",

    // Hindi UKPSC / UKSSSC searches
    "131वां संविधान संशोधन UKPSC",
    "131वां संविधान संशोधन UKSSSC",
    "महिला आरक्षण विधेयक UKPSC",
    "महिला आरक्षण विधेयक UKSSSC",
    "परिसीमन विधेयक UKPSC",
    "परिसीमन विधेयक UKSSSC",
    "UKPSC भारतीय राजव्यवस्था",
    "UKSSSC भारतीय राजव्यवस्था",
    "UKPSC संविधान संशोधन",
    "UKSSSC संविधान संशोधन",
    "UKPSC करंट अफेयर्स 2026",
    "UKSSSC करंट अफेयर्स 2026",
    "उत्तराखंड लोक सेवा आयोग संविधान प्रश्न",
    "उत्तराखंड अधीनस्थ सेवा चयन आयोग संविधान प्रश्न",
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
        "Constitution 131st Amendment Bill 2026: Women's Reservation, Delimitation, Article 368 and MCQs",
      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],

      articleSection: [
        "Current Affairs",
        "Indian Polity",
        "Indian Constitution",
        "Parliament",
        "Governance",
        "Competitive Exam Preparation",
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
          "@type": "Legislation",
          name: "Constitution (131st Amendment) Bill, 2026",
          description:
            "A proposed constitutional amendment connected with implementation of women's reservation and the 2026 delimitation legislative package. It did not pass the Lok Sabha.",
          legislationJurisdiction: {
            "@type": "Country",
            name: "India",
          },
        },
        {
          "@type": "Thing",
          name: "Women's Reservation",
        },
        {
          "@type": "Thing",
          name: "Delimitation in India",
        },
        {
          "@type": "Thing",
          name: "Constitutional Amendment Procedure",
        },
      ],

      mentions: [
        {
          "@type": "GovernmentOrganization",
          name: "Lok Sabha",
          url: "https://sansad.in/ls",
        },
        {
          "@type": "GovernmentOrganization",
          name: "Rajya Sabha",
          url: "https://sansad.in/rs",
        },
        {
          "@type": "Thing",
          name: "Article 368 of the Constitution of India",
        },
        {
          "@type": "Thing",
          name: "Article 81 of the Constitution of India",
        },
        {
          "@type": "Thing",
          name: "Article 82 of the Constitution of India",
        },
        {
          "@type": "Thing",
          name: "Article 108 of the Constitution of India",
        },
        {
          "@type": "Thing",
          name: "Article 170 of the Constitution of India",
        },
        {
          "@type": "Legislation",
          name: "Constitution (106th Amendment) Act, 2023",
        },
        {
          "@type": "Legislation",
          name: "Delimitation Bill, 2026",
        },
        {
          "@type": "Thing",
          name: "Nari Shakti Vandan Adhiniyam",
        },
        {
          "@type": "Thing",
          name: "Census 2011 India",
        },
        {
          "@type": "Thing",
          name: "Parliamentary Special Majority",
        },
        {
          "@type": "Thing",
          name: "Federalism in India",
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
          name: "131st Constitutional Amendment Bill 2026",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function Constitution131Layout({
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
