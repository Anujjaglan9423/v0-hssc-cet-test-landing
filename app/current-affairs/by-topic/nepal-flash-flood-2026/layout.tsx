
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const SITE_NAME = "CET Test";

const PAGE_PATH =
  "/current-affairs/by-topic/nepal-flash-flood-2026";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Nepal Flash Flood 2026: Causes, GLOF & MCQs | CET Test";

const PAGE_DESCRIPTION =
  "Study the 26 August 2026 Nepal flash flood, Langtang Lirung rock-ice avalanche, causes, GLOF differences and disaster management. Get Hindi-English notes and MCQs for UPSC, UKPSC, UKSSSC, HSSC CET and SSC.";

const PAGE_TITLE_HI =
  "नेपाल फ्लैश फ्लड 2026: कारण, GLOF और प्रश्नोत्तर";

const PAGE_DESCRIPTION_HI =
  "26 अगस्त 2026 की नेपाल फ्लैश फ्लड, लांगटांग लिरुंग हिमस्खलन, रॉक-आइस मलबा प्रवाह, GLOF और आपदा प्रबंधन के महत्वपूर्ण तथ्य हिंदी और अंग्रेज़ी में पढ़ें। UPSC, UKPSC, UKSSSC, HSSC CET के लिए MCQ।";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: SITE_NAME,

  category: "Education",

  keywords: [
    // Primary SEO
    "Nepal Flash Flood 2026",
    "Nepal flash floods August 2026",
    "Nepal flood 26 August 2026",
    "Nepal Tibet flash flood 2026",
    "Nepal China border flood",
    "Langtang Lirung flood",
    "Langtang Lirung glacier collapse",
    "Langtang Lirung avalanche 2026",
    "Nepal glacier collapse 2026",
    "Nepal rock ice avalanche",
    "Rasuwa flash flood 2026",
    "Nepal glacier disaster",
    "Nepal flood causes",
    "Nepal flood current affairs 2026",
    "Nepal flood MCQ",
    "Nepal flood questions and answers",

    // Geography
    "Langtang National Park",
    "Mount Langtang Lirung",
    "Lhende Khola River",
    "Bhote Koshi River",
    "Trishuli River",
    "Nepal Himalayan geography",
    "Nepal Tibet border",
    "Rasuwa district Nepal",
    "Nuwakot district Nepal",
    "Dhading district Nepal",
    "Himalayan flash floods",
    "Himalayan glacier hazards",
    "Himalayan natural disasters",

    // Flash floods
    "what is flash flood",
    "flash flood meaning",
    "flash flood causes",
    "flash flood disaster management",
    "flash floods in Himalayas",
    "flash flood definition",
    "flash flood vs GLOF",
    "flash flood warning systems",
    "mountain flash flood",
    "river valley flash flood",

    // GLOF
    "GLOF full form",
    "what is GLOF",
    "Glacial Lake Outburst Flood",
    "GLOF causes",
    "GLOF current affairs 2026",
    "GLOF vs glacier avalanche",
    "GLOF disaster management",
    "Himalayan GLOF risks",
    "glacial lake outburst flood UPSC",
    "glacial lake monitoring",
    "glacial lake hazards",
    "glacier collapse vs GLOF",

    // Landslides and avalanches
    "rock ice avalanche",
    "glacier collapse",
    "rapid slope failure",
    "debris flow",
    "landslide dam",
    "river blockage",
    "landslide induced flooding",
    "seismic waves glacier collapse",
    "earthquake vs landslide",
    "high mountain hazards",
    "cascading mountain disasters",

    // Disaster management
    "disaster management current affairs 2026",
    "natural disasters current affairs",
    "Himalayan disaster management",
    "climate change and glacier hazards",
    "glacier monitoring",
    "early warning systems",
    "Himalayan cryosphere",
    "glacier retreat hazards",
    "flash flood preparedness",
    "transboundary disaster risks",

    // UPSC
    "Nepal Flash Flood 2026 UPSC",
    "UPSC Nepal flood current affairs",
    "UPSC GLOF",
    "UPSC disaster management",
    "UPSC Prelims flash floods",
    "UPSC geography current affairs 2026",
    "UPSC GS3 disaster management",
    "UPSC Himalayan glaciers",
    "UPSC rock ice avalanche",
    "UPSC environment current affairs",

    // UKPSC
    "Nepal Flash Flood UKPSC",
    "UKPSC GLOF current affairs",
    "UKPSC disaster management",
    "UKPSC geography 2026",
    "UKPSC Himalayan disasters",
    "UKPSC flash flood MCQ",
    "UKPSC Prelims disaster management",
    "UKPSC RO ARO current affairs",
    "Uttarakhand PCS glacier hazards",

    // UKSSSC
    "Nepal Flood UKSSSC",
    "UKSSSC current affairs 2026",
    "UKSSSC geography",
    "UKSSSC flash flood",
    "UKSSSC GLOF",
    "UKSSSC natural disasters",
    "UKSSSC Junior Assistant current affairs",
    "UKSSSC Patwari geography",
    "UKSSSC VDO current affairs",

    // HSSC CET
    "Nepal Flash Flood HSSC CET",
    "HSSC CET current affairs 2026",
    "HSSC CET geography questions",
    "HSSC CET natural disasters",
    "Haryana CET environment",
    "HSSC Group C current affairs",
    "HSSC Group D geography",

    // SSC, Railway and PCS
    "Nepal flood SSC",
    "SSC CGL geography",
    "SSC CHSL environment",
    "SSC GD natural disasters",
    "RRB NTPC flash flood",
    "Railway Group D geography",
    "UPPSC Nepal flash flood",
    "State PCS disaster management",
    "competitive exams disaster management",

    // Hindi keywords
    "नेपाल फ्लैश फ्लड 2026",
    "नेपाल में बाढ़ 2026",
    "नेपाल में 26 अगस्त 2026 की बाढ़",
    "नेपाल हिमनद दुर्घटना",
    "लांगटांग लिरुंग हिमस्खलन",
    "ग्लेशियर ढहने से बाढ़",
    "फ्लैश फ्लड क्या है",
    "अचानक बाढ़ के कारण",
    "ग्लेशियल लेक आउटबर्स्ट फ्लड",
    "GLOF क्या है",
    "हिमनदी झील विस्फोट बाढ़",
    "फ्लैश फ्लड और GLOF में अंतर",
    "हिमालयी आपदाएं",
    "प्राकृतिक आपदा प्रबंधन",
    "हिमस्खलन के कारण",
    "भूस्खलन और बाढ़",
    "यूपीएससी आपदा प्रबंधन",
    "यूकेपीएससी आपदा प्रबंधन",
    "यूकेएसएसएससी भूगोल",
    "एचएसएससी सीईटी भूगोल",

    // AEO / WH / People Also Ask
    "what happened in Nepal on 26 August 2026",
    "what caused the Nepal flash flood 2026",
    "where did the Nepal flash flood originate",
    "which glacier collapsed in Nepal in 2026",
    "was the Nepal 2026 flood caused by an earthquake",
    "was the Nepal flood a GLOF",
    "what is the difference between a GLOF and an avalanche",
    "how does a glacier collapse cause flooding",
    "why are Himalayan regions vulnerable to flash floods",
    "which rivers were affected by Nepal flash flood",
    "what did USGS report about Nepal flood 2026",
    "what is a rock ice avalanche",
    "how can glacier hazards be monitored",
    "how can flash floods be prevented",
    "why is Nepal flood important for UPSC",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "article",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: SITE_NAME,

    title:
      "Nepal Flash Flood 2026: Langtang Avalanche & GLOF Explained",

    description: PAGE_DESCRIPTION,
  },

  twitter: {
    card: "summary",

    title:
      "Nepal Flash Flood 2026 | Causes, GLOF & MCQs",

    description: PAGE_DESCRIPTION,
  },
};

// -----------------------------------------------------
// STRUCTURED DATA
// -----------------------------------------------------

const organizationSchema = {
  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: SITE_NAME,

  url: SITE_URL,
};

const websiteSchema = {
  "@type": "WebSite",

  "@id": `${SITE_URL}/#website`,

  name: SITE_NAME,

  url: SITE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

const webPageSchema = {
  "@type": "WebPage",

  "@id": `${PAGE_URL}#webpage`,

  url: PAGE_URL,

  name: PAGE_TITLE,

  alternateName: PAGE_TITLE_HI,

  description: PAGE_DESCRIPTION,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  about: [
    {
      "@type": "Thing",
      name: "Nepal Flash Flood 2026",
    },
    {
      "@type": "Thing",
      name: "Langtang Lirung Glacier Collapse",
    },
    {
      "@type": "Thing",
      name: "Glacial Lake Outburst Flood",
    },
    {
      "@type": "Thing",
      name: "Himalayan Disaster Management",
    },
    {
      "@type": "Thing",
      name: "Rock-Ice Avalanche",
    },
  ],

  mainEntity: {
    "@id": `${PAGE_URL}#learning-resource`,
  },
};

const articleSchema = {
  "@type": "Article",

  "@id": `${PAGE_URL}#article`,

  headline:
    "Nepal Flash Flood 2026: Langtang Lirung Avalanche, Causes, GLOF and Important MCQs",

  alternativeHeadline: PAGE_TITLE_HI,

  description: PAGE_DESCRIPTION,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  author: {
    "@id": `${SITE_URL}/#organization`,
  },

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  mainEntityOfPage: {
    "@id": `${PAGE_URL}#webpage`,
  },

  about: {
    "@type": "Thing",
    name: "26 August 2026 Nepal Flash Flood",
  },
};

const learningResourceSchema = {
  "@type": "LearningResource",

  "@id": `${PAGE_URL}#learning-resource`,

  name: PAGE_TITLE,

  alternateName: PAGE_TITLE_HI,

  description: PAGE_DESCRIPTION_HI,

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  learningResourceType: [
    "Current Affairs Notes",
    "Disaster Management Study Material",
    "Geography Study Notes",
    "Practice MCQs",
  ],

  educationalLevel: "Competitive Examination",

  educationalUse: [
    "Exam Preparation",
    "Self Study",
    "Revision",
  ],

  teaches: [
    "Flash Floods",
    "Glacial Lake Outburst Floods",
    "Rock-Ice Avalanches",
    "Himalayan Glacier Hazards",
    "Langtang Lirung Disaster",
    "Disaster Risk Management",
  ],

  audience: {
    "@type": "EducationalAudience",

    educationalRole: "student",

    audienceType:
      "UPSC, UKPSC, UKSSSC, HSSC CET, SSC, UPPSC, Railway and State PCS aspirants",
  },

  provider: {
    "@id": `${SITE_URL}/#organization`,
  },

  mainEntityOfPage: {
    "@id": `${PAGE_URL}#webpage`,
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",

  "@id": `${PAGE_URL}#breadcrumbs`,

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
      name: "Nepal Flash Flood 2026",
      item: PAGE_URL,
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    organizationSchema,
    websiteSchema,
    webPageSchema,
    articleSchema,
    learningResourceSchema,
    breadcrumbSchema,
  ],
};

export default function NepalFlashFloodLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {children}
    </>
  );
}
