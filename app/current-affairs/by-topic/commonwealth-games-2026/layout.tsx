
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const PAGE_PATH = "/current-affairs/by-topic/commonwealth-games-2026";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "Commonwealth Games 2026: India Medals, Winners & MCQs | CET Test";

const DESCRIPTION =
  "Glasgow Commonwealth Games 2026: India's 39 medals, 13 golds, 4th rank, winners and medal table. Free Hindi-English GK and MCQs for UKPSC, UKSSSC, UPSC and SSC.";

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
    "Commonwealth Games 2026",
    "23rd Commonwealth Games",
    "23rd Commonwealth Games 2026",
    "Glasgow Commonwealth Games 2026",
    "Commonwealth Games Glasgow 2026",
    "CWG 2026",
    "Commonwealth Games 2026 India",
    "Commonwealth Games 2026 results",
    "Commonwealth Games 2026 current affairs",

    // India's performance
    "India medals Commonwealth Games 2026",
    "India medal tally CWG 2026",
    "India rank Commonwealth Games 2026",
    "India 39 medals Commonwealth Games",
    "India 13 gold medals Commonwealth Games 2026",
    "India Commonwealth Games 2026 winners",
    "Indian medal winners Glasgow 2026",
    "India gold medal winners CWG 2026",
    "CWG 2026 India achievements",

    // Medal table
    "Commonwealth Games 2026 medal table",
    "Glasgow 2026 medal standings",
    "Commonwealth Games 2026 country ranking",
    "CWG 2026 gold medal tally",
    "Commonwealth Games 2026 final medal table",
    "Australia Commonwealth Games 2026 medals",
    "England Commonwealth Games 2026 medals",
    "Canada Commonwealth Games 2026 medals",

    // Indian athletes
    "Neeraj Chopra Commonwealth Games 2026",
    "Mirabai Chanu Glasgow 2026",
    "Tejaswin Shankar decathlon medal 2026",
    "Gulveer Singh Commonwealth Games 2026",
    "Asmita Dey Commonwealth Games judo",
    "Harsh Singh Commonwealth Games judo",
    "Dilip Gavit Commonwealth Games 2026",
    "Soman Rana Commonwealth Games",
    "Sharmila Dhankar Commonwealth Games",
    "Preeti Pawar boxing 2026",
    "Jaismine Lamboria boxing 2026",
    "Sakshi Chaudhary boxing 2026",
    "Priya Ghanghas boxing 2026",
    "Arundhati Choudhary boxing 2026",
    "Sachin Siwach boxing 2026",
    "Ankush Panghal boxing 2026",

    // Sports and achievements
    "India boxing medals CWG 2026",
    "India seven boxing gold medals 2026",
    "Commonwealth Games judo gold India",
    "Commonwealth Games athletics 2026",
    "Commonwealth Games weightlifting 2026",
    "Commonwealth Games para athletics 2026",
    "India Commonwealth Games records",
    "Commonwealth Games 2026 mascot Finnie",
    "Commonwealth Games 2030 Ahmedabad",
    "Amdavad Commonwealth Games 2030",

    // UKPSC preparation
    "Commonwealth Games 2026 UKPSC",
    "CWG 2026 UKPSC current affairs",
    "Commonwealth Games UKPSC notes",
    "Commonwealth Games UKPSC MCQ",
    "UKPSC sports current affairs 2026",
    "UKPSC sports GK",
    "UKPSC Prelims sports questions",
    "UKPSC medal tally questions",
    "UKPSC international sports events",
    "UKPSC Commonwealth Games winners",

    // UKSSSC preparation
    "Commonwealth Games 2026 UKSSSC",
    "CWG 2026 UKSSSC",
    "Commonwealth Games UKSSSC notes",
    "Commonwealth Games UKSSSC MCQ",
    "UKSSSC sports current affairs 2026",
    "UKSSSC sports GK",
    "UKSSSC Commonwealth Games questions",
    "UKSSSC medal tally GK",
    "UKSSSC general knowledge sports",
    "UKSSSC important sports events 2026",

    // Other exams
    "Commonwealth Games 2026 UPSC",
    "Commonwealth Games 2026 SSC",
    "Commonwealth Games 2026 HSSC CET",
    "Commonwealth Games 2026 Railway exams",
    "Commonwealth Games 2026 State PSC",
    "Commonwealth Games 2026 MCQ",
    "Commonwealth Games 2026 quiz",
    "Commonwealth Games questions and answers",
    "Sports current affairs 2026",
    "Sports GK 2026",
    "International sports current affairs",
    "Sports one liner questions 2026",

    // People Also Ask / WH keywords
    "what are the Commonwealth Games",
    "when were Commonwealth Games 2026 held",
    "where were Commonwealth Games 2026 held",
    "who hosted Commonwealth Games 2026",
    "what was India's rank in Commonwealth Games 2026",
    "how many medals did India win in CWG 2026",
    "how many gold medals did India win in CWG 2026",
    "which country topped Commonwealth Games 2026",
    "who won gold medals for India in Glasgow 2026",
    "which sport gave India most medals in CWG 2026",
    "who won the javelin silver medal in CWG 2026",
    "what was the mascot of Commonwealth Games 2026",
    "where will Commonwealth Games 2030 be held",
    "who organizes the Commonwealth Games",

    // Hindi primary keywords
    "राष्ट्रमंडल खेल 2026",
    "23वें राष्ट्रमंडल खेल",
    "ग्लासगो राष्ट्रमंडल खेल 2026",
    "कॉमनवेल्थ गेम्स 2026",
    "राष्ट्रमंडल खेल 2026 भारत",
    "राष्ट्रमंडल खेल 2026 पदक तालिका",
    "राष्ट्रमंडल खेल 2026 में भारत का स्थान",
    "राष्ट्रमंडल खेल 2026 भारत के पदक",
    "राष्ट्रमंडल खेल 2026 स्वर्ण पदक विजेता",
    "भारत के 39 पदक",
    "भारत के 13 स्वर्ण पदक",
    "राष्ट्रमंडल खेल 2026 विजेता",
    "राष्ट्रमंडल खेल 2026 शुभंकर",
    "राष्ट्रमंडल खेल 2030 अहमदाबाद",
    "राष्ट्रमंडल खेल करंट अफेयर्स",
    "राष्ट्रमंडल खेल सामान्य ज्ञान",
    "राष्ट्रमंडल खेल प्रश्न उत्तर",
    "राष्ट्रमंडल खेल MCQ",

    // Hindi exam keywords
    "राष्ट्रमंडल खेल UKPSC",
    "राष्ट्रमंडल खेल UKSSSC",
    "UKPSC खेल करंट अफेयर्स 2026",
    "UKSSSC खेल करंट अफेयर्स 2026",
    "UKPSC खेल सामान्य ज्ञान",
    "UKSSSC खेल सामान्य ज्ञान",
    "उत्तराखंड लोक सेवा आयोग खेल प्रश्न",
    "उत्तराखंड अधीनस्थ सेवा चयन आयोग खेल प्रश्न",
    "UPSC राष्ट्रमंडल खेल प्रश्न",
    "SSC राष्ट्रमंडल खेल सामान्य ज्ञान",
    "HSSC CET खेल करंट अफेयर्स",
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
        "23rd Commonwealth Games 2026: India Medal Tally, Gold Winners, Rankings and MCQs",

      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],

      articleSection: [
        "Current Affairs",
        "Sports",
        "Commonwealth Games",
        "General Knowledge",
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
          "@type": "SportsEvent",
          name: "23rd Commonwealth Games 2026",
          alternateName: "Glasgow 2026 Commonwealth Games",
          description:
            "The 23rd Commonwealth Games hosted in Glasgow, Scotland, in 2026.",
          startDate: "2026-07-23",
          endDate: "2026-08-02",
          location: {
            "@type": "Place",
            name: "Glasgow, Scotland, United Kingdom",
          },
          organizer: {
            "@type": "Organization",
            name: "Commonwealth Sport",
            url: "https://www.commonwealthsport.com/",
          },
        },
        {
          "@type": "Thing",
          name: "India Commonwealth Games 2026 Medal Tally",
          description:
            "India finished fourth in the official Glasgow 2026 medal table with 13 gold, 17 silver and 9 bronze medals.",
        },
        {
          "@type": "Thing",
          name: "Sports Current Affairs 2026",
        },
      ],

      mentions: [
        {
          "@type": "Organization",
          name: "Commonwealth Sport",
          url: "https://www.commonwealthsport.com/",
        },
        {
          "@type": "SportsEvent",
          name: "Commonwealth Games 2030",
        },
        {
          "@type": "Place",
          name: "Ahmedabad, Gujarat, India",
        },
        { "@type": "Person", name: "Neeraj Chopra" },
        { "@type": "Person", name: "Mirabai Chanu" },
        { "@type": "Person", name: "Tejaswin Shankar" },
        { "@type": "Person", name: "Gulveer Singh" },
        { "@type": "Person", name: "Asmita Dey" },
        { "@type": "Person", name: "Harsh Singh" },
        { "@type": "Person", name: "Dilip Gavit" },
        { "@type": "Person", name: "Preeti Pawar" },
        { "@type": "Person", name: "Jaismine Lamboria" },
        { "@type": "Person", name: "Sachin Siwach" },
        { "@type": "Person", name: "Ankush Panghal" },
        {
          "@type": "Thing",
          name: "Commonwealth Games 2026 Boxing",
        },
        {
          "@type": "Thing",
          name: "Commonwealth Games 2026 Judo",
        },
        {
          "@type": "Thing",
          name: "Commonwealth Games 2026 Athletics",
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
          name: "Commonwealth Games 2026",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function CommonwealthGames2026Layout({
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
