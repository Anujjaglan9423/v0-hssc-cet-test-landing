
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const PAGE_PATH = "/current-affairs/by-topic/fcra-amendment-2026";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "FCRA Amendment Bill 2026: Key Provisions & MCQs | CET Test";

const DESCRIPTION =
  "Understand the FCRA Amendment Bill 2026, NGO asset rules, Designated Authority, penalties and investigation approval. Free Hindi-English notes and MCQs for UKPSC, UKSSSC, UPSC and SSC.";

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
    "FCRA Amendment Bill 2026",
    "Foreign Contribution Regulation Amendment Bill 2026",
    "Foreign Contribution Regulation Bill 2026",
    "FCRA Bill 2026",
    "FCRA Amendment 2026 explained",
    "FCRA Amendment Bill summary",
    "FCRA Amendment Bill key provisions",
    "FCRA Current Affairs 2026",
    "FCRA India 2026",

    // Existing FCRA framework
    "Foreign Contribution Regulation Act 2010",
    "FCRA Act 2010",
    "FCRA Rules India",
    "FCRA Registration",
    "FCRA Registration Renewal",
    "FCRA NGO Registration",
    "FCRA Foreign Funding",
    "Foreign Contribution India",
    "NGO Foreign Donations",
    "FCRA Compliance India",
    "FCRA SBI New Delhi Main Branch",
    "FCRA Administrative Expenses",
    "FCRA Amendment Act 2020",

    // 2026 Bill provisions
    "FCRA Designated Authority",
    "FCRA Asset Management",
    "FCRA Asset Vesting",
    "FCRA Registration Cancellation",
    "FCRA Registration Suspension",
    "FCRA Registration Surrender",
    "FCRA Foreign Contribution Assets",
    "FCRA Asset Disposal",
    "FCRA Investigation Approval",
    "FCRA Central Government Approval",
    "FCRA Offences and Penalties",
    "FCRA Imprisonment Reduction",
    "FCRA NGO Asset Rules",
    "FCRA Places of Worship",
    "FCRA Religious Character Protection",
    "FCRA Joint Parliamentary Committee 2026",

    // Governance and polity
    "Ministry of Home Affairs FCRA",
    "NGO Regulation India",
    "Foreign Funding Regulation India",
    "Indian NGO Laws",
    "Government Oversight NGOs",
    "Foreign Contribution Monitoring",
    "Indian Polity Current Affairs",
    "Governance Reforms India 2026",
    "Parliamentary Bills 2026",

    // UKPSC keywords
    "FCRA Amendment Bill UKPSC",
    "FCRA 2026 UKPSC",
    "FCRA Current Affairs UKPSC",
    "FCRA UKPSC Notes",
    "FCRA UKPSC MCQ",
    "FCRA Act UKPSC Prelims",
    "UKPSC Polity Current Affairs 2026",
    "UKPSC Governance Notes",
    "UKPSC Indian Laws",
    "UKPSC Parliament Bills 2026",
    "UKPSC NGO Regulation Questions",

    // UKSSSC keywords
    "FCRA Amendment Bill UKSSSC",
    "FCRA 2026 UKSSSC",
    "FCRA Current Affairs UKSSSC",
    "FCRA UKSSSC Notes",
    "FCRA UKSSSC MCQ",
    "FCRA Act UKSSSC",
    "UKSSSC Polity GK",
    "UKSSSC Current Affairs 2026",
    "UKSSSC Government Laws",
    "UKSSSC Indian Constitution",
    "UKSSSC Governance Questions",

    // Other competitive examinations
    "FCRA Amendment Bill UPSC",
    "FCRA Amendment Bill SSC",
    "FCRA Amendment Bill HSSC CET",
    "FCRA Amendment Bill Railway Exams",
    "FCRA Amendment Bill State PSC",
    "FCRA Amendment Bill MCQ",
    "FCRA Questions and Answers",
    "FCRA UPSC Prelims",
    "FCRA UPSC Mains",
    "NGO Foreign Funding UPSC",
    "FCRA Polity GK",
    "Important Bills 2026",
    "Government Bills Current Affairs 2026",

    // People Also Ask / WH searches
    "what is FCRA",
    "what is the full form of FCRA",
    "what is the FCRA Amendment Bill 2026",
    "when was FCRA Amendment Bill 2026 introduced",
    "why was FCRA Amendment Bill 2026 introduced",
    "what are the key provisions of FCRA Amendment Bill",
    "what is the Designated Authority under FCRA",
    "who regulates foreign funding of NGOs in India",
    "what happens when FCRA registration is cancelled",
    "how long is FCRA registration valid",
    "what is the maximum administrative expense under FCRA",
    "which bank receives foreign contributions under FCRA",
    "how does FCRA regulate foreign donations",
    "what is the difference between FCRA 2010 and 2026 Bill",
    "what is the status of FCRA Amendment Bill 2026",

    // Hindi keywords
    "विदेशी अंशदान विनियमन संशोधन विधेयक 2026",
    "विदेशी योगदान विनियमन विधेयक 2026",
    "FCRA संशोधन विधेयक 2026",
    "एफसीआरए अधिनियम",
    "एफसीआरए क्या है",
    "FCRA का पूरा नाम",
    "विदेशी अंशदान विनियमन अधिनियम 2010",
    "FCRA संशोधन विधेयक के प्रावधान",
    "FCRA पंजीकरण",
    "NGO विदेशी फंडिंग",
    "विदेशी चंदा नियम",
    "NGO संपत्ति प्रबंधन",
    "नामित प्राधिकरण FCRA",
    "FCRA जांच अनुमति",
    "FCRA दंड प्रावधान",
    "FCRA करंट अफेयर्स 2026",
    "FCRA सामान्य ज्ञान",
    "FCRA प्रश्न उत्तर",
    "FCRA MCQ",

    // Hindi UKPSC / UKSSSC
    "FCRA विधेयक UKPSC",
    "FCRA विधेयक UKSSSC",
    "UKPSC राजव्यवस्था करंट अफेयर्स",
    "UKSSSC राजव्यवस्था करंट अफेयर्स",
    "UKPSC शासन व्यवस्था",
    "UKSSSC शासन व्यवस्था",
    "UKPSC संसद विधेयक",
    "UKSSSC संसद विधेयक",
    "UKPSC करंट अफेयर्स 2026",
    "UKSSSC करंट अफेयर्स 2026",
    "उत्तराखंड लोक सेवा आयोग सामान्य ज्ञान",
    "उत्तराखंड अधीनस्थ सेवा चयन आयोग सामान्य ज्ञान",
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
        "FCRA Amendment Bill 2026: Key Provisions, NGO Assets, Designated Authority and MCQs",

      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],

      articleSection: [
        "Current Affairs",
        "Indian Polity",
        "Governance",
        "Parliamentary Bills",
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
          "@type": "Legislation",
          name: "Foreign Contribution (Regulation) Amendment Bill, 2026",
          description:
            "A proposed amendment to India's Foreign Contribution (Regulation) Act, 2010, addressing supervision, management and disposal of foreign contributions and related assets.",
          legislationJurisdiction: {
            "@type": "Country",
            name: "India",
          },
        },
        {
          "@type": "Legislation",
          name: "Foreign Contribution (Regulation) Act, 2010",
        },
        {
          "@type": "Thing",
          name: "Regulation of Foreign Contributions",
        },
        {
          "@type": "Thing",
          name: "NGO Governance",
        },
      ],

      mentions: [
        {
          "@type": "GovernmentOrganization",
          name: "Ministry of Home Affairs",
          url: "https://www.mha.gov.in/",
        },
        {
          "@type": "GovernmentOrganization",
          name: "Lok Sabha",
          url: "https://sansad.in/ls",
        },
        {
          "@type": "Thing",
          name: "FCRA Designated Authority",
        },
        {
          "@type": "Thing",
          name: "FCRA Registration",
        },
        {
          "@type": "Thing",
          name: "Foreign Contribution Asset Management",
        },
        {
          "@type": "Thing",
          name: "Non-Governmental Organizations",
        },
        {
          "@type": "Thing",
          name: "Foreign Funding Regulation",
        },
        {
          "@type": "Thing",
          name: "Parliamentary Legislative Process",
        },
        {
          "@type": "Thing",
          name: "Joint Parliamentary Committee",
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
          name: "FCRA Amendment Bill 2026",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function FCRAAmendment2026Layout({
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
