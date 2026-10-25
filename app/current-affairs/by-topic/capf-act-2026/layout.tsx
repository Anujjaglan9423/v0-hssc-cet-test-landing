
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/capf-act-2026";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "CAPF General Administration Act 2026: Notes & MCQs | CET Test";

const DESCRIPTION =
  "Learn the CAPF General Administration Act 2026, IPS deputation quotas, five forces and key provisions. Free Hindi-English notes and MCQs for UPSC, UKPSC, UKSSSC and SSC.";

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
    "CAPF General Administration Act 2026",
    "Central Armed Police Forces General Administration Act 2026",
    "CAPF Act 2026",
    "CAPF Bill 2026",
    "CAPF Act 2026 explained",
    "CAPF Act 2026 summary",
    "CAPF Act 2026 key provisions",
    "CAPF General Administration Act notes",

    // Law and governance
    "CAPF Act 2026 provisions",
    "CAPF Act 2026 Gazette",
    "CAPF Act 2026 rules",
    "CAPF recruitment rules 2026",
    "CAPF promotion rules",
    "CAPF service conditions",
    "CAPF IPS deputation quota",
    "IPS deputation in CAPF",
    "CAPF DG appointment",
    "CAPF SDG appointment",
    "CAPF IG quota",
    "CAPF ADG quota",
    "CAPF cadre officers",
    "CAPF senior leadership",
    "CAPF Supreme Court judgment",
    "CAPF administration reforms",
    "Ministry of Home Affairs CAPF Act",

    // Armed police forces
    "Central Armed Police Forces India",
    "CRPF",
    "BSF",
    "CISF",
    "ITBP",
    "SSB",
    "Assam Rifles",
    "National Security Guard",
    "CAPF forces and functions",
    "CAPF border security",
    "CAPF internal security",
    "difference between CAPF and Assam Rifles",
    "difference between CAPF and Indian Army",

    // UKPSC keywords
    "CAPF Act 2026 UKPSC",
    "CAPF General Administration Act UKPSC",
    "CAPF Act UKPSC current affairs",
    "CAPF Act 2026 UKPSC notes",
    "CAPF Act 2026 UKPSC MCQ",
    "CAPF Act UKPSC Prelims",
    "CAPF Act UKPSC Mains",
    "UKPSC polity current affairs 2026",
    "UKPSC governance notes",
    "UKPSC national security GK",

    // UKSSSC keywords
    "CAPF Act 2026 UKSSSC",
    "CAPF General Administration Act UKSSSC",
    "CAPF Act UKSSSC current affairs",
    "CAPF Act UKSSSC notes",
    "CAPF Act 2026 UKSSSC MCQ",
    "UKSSSC polity GK",
    "UKSSSC current affairs 2026",
    "UKSSSC general knowledge",
    "UKSSSC government exams",
    "UKSSSC CAPF questions",
    "UKSSSC defence and security GK",

    // UPSC, SSC and other exams
    "CAPF Act 2026 UPSC",
    "CAPF Act 2026 SSC",
    "CAPF Act 2026 HSSC CET",
    "CAPF Act 2026 Railway exams",
    "CAPF Act 2026 state PSC",
    "CAPF Act 2026 MCQ",
    "CAPF Act 2026 questions and answers",
    "CAPF current affairs 2026",
    "Indian polity current affairs 2026",
    "Governance current affairs 2026",
    "Internal security UPSC notes",
    "CAPF assistant commandant exam",
    "Indian security forces GK",

    // WH / People Also Ask keywords
    "what is CAPF General Administration Act 2026",
    "when was CAPF Act 2026 passed",
    "when did CAPF Act 2026 come into force",
    "why was CAPF Act 2026 introduced",
    "which forces are covered by CAPF Act 2026",
    "what are the provisions of CAPF Act 2026",
    "how does CAPF Act affect IPS deputation",
    "what is the IPS quota in CAPF",
    "who appoints CAPF Director General",
    "what is the role of CRPF",
    "what is the role of BSF",
    "what is the difference between BSF and ITBP",
    "which force guards India Nepal border",
    "which force guards India China border",
    "does CAPF Act apply to Assam Rifles",

    // Hindi primary keywords
    "केंद्रीय सशस्त्र पुलिस बल अधिनियम 2026",
    "सीएपीएफ सामान्य प्रशासन अधिनियम 2026",
    "CAPF अधिनियम 2026",
    "सीएपीएफ कानून 2026",
    "CAPF अधिनियम क्या है",
    "CAPF अधिनियम के मुख्य प्रावधान",
    "CAPF अधिनियम के उद्देश्य",
    "सीएपीएफ भर्ती नियम",
    "सीएपीएफ पदोन्नति नियम",
    "आईपीएस प्रतिनियुक्ति",
    "केंद्रीय सशस्त्र पुलिस बल सामान्य ज्ञान",
    "भारतीय सुरक्षा बल",
    "सीमा सुरक्षा बल",
    "केंद्रीय रिजर्व पुलिस बल",
    "भारत तिब्बत सीमा पुलिस",
    "सशस्त्र सीमा बल",
    "सीएपीएफ करंट अफेयर्स 2026",
    "सीएपीएफ प्रश्न उत्तर",
    "सीएपीएफ MCQ",

    // Hindi Uttarakhand exam searches
    "CAPF अधिनियम UKPSC",
    "CAPF अधिनियम UKSSSC",
    "UKPSC करंट अफेयर्स 2026",
    "UKSSSC करंट अफेयर्स 2026",
    "उत्तराखंड लोक सेवा आयोग सामान्य ज्ञान",
    "उत्तराखंड अधीनस्थ सेवा चयन आयोग सामान्य ज्ञान",
    "UKPSC राजनीति विज्ञान नोट्स",
    "UKSSSC भारतीय राजव्यवस्था",
    "UKPSC सुरक्षा बल प्रश्न",
    "UKSSSC सुरक्षा बल प्रश्न",
    "UKPSC CAPF अधिनियम प्रश्न उत्तर",
    "UKSSSC CAPF MCQ",
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
        "CAPF General Administration Act 2026: Provisions, IPS Deputation, Forces and MCQs",
      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],

      articleSection: [
        "Current Affairs",
        "Indian Polity",
        "Governance",
        "Internal Security",
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
          name: "Central Armed Police Forces (General Administration) Act, 2026",
          legislationIdentifier: "Act No. 14 of 2026",
          legislationJurisdiction: {
            "@type": "Country",
            name: "India",
          },
        },
        {
          "@type": "Thing",
          name: "Central Armed Police Forces",
        },
        {
          "@type": "Thing",
          name: "IPS Deputation",
        },
        {
          "@type": "Thing",
          name: "Indian Internal Security",
        },
      ],

      mentions: [
        {
          "@type": "GovernmentOrganization",
          name: "Ministry of Home Affairs",
          url: "https://www.mha.gov.in/",
        },
        {
          "@type": "Organization",
          name: "Central Reserve Police Force",
        },
        {
          "@type": "Organization",
          name: "Border Security Force",
        },
        {
          "@type": "Organization",
          name: "Central Industrial Security Force",
        },
        {
          "@type": "Organization",
          name: "Indo-Tibetan Border Police",
        },
        {
          "@type": "Organization",
          name: "Sashastra Seema Bal",
        },
        {
          "@type": "Thing",
          name: "Indian Police Service",
        },
        {
          "@type": "Thing",
          name: "CAPF Service Rules",
        },
        {
          "@type": "Thing",
          name: "CAPF Recruitment and Promotion",
        },
        {
          "@type": "Thing",
          name: "Indian Polity and Governance",
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
          name: "CAPF General Administration Act 2026",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function CAPFAct2026Layout({
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
