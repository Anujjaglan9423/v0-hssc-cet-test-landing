import questions from "./uttarakhand-current-affairs-2026.json";
import type { Metadata } from "next";
export const UK_PATH = "/current-affairs/uttarakhand-current-affairs-2026";
export const UK_URL = `https://cettest.site${UK_PATH}`;
// Enable only after independent fact-checking and publication permission.
export const UK_PUBLISHED = false;
export const UK_CHAPTERS = [
  ["october", "October", "अक्टूबर"],
  ["september", "September", "सितंबर"],
  ["august", "August", "अगस्त"],
  ["july", "July", "जुलाई"],
  ["june", "June", "जून"],
  ["may", "May", "मई"],
  ["april", "April", "अप्रैल"],
  ["march", "March", "मार्च"],
  ["february", "February", "फरवरी"],
  ["january", "January", "जनवरी"],
  ["revision", "Mixed revision", "मिश्रित पुनरावृत्ति"],
].map(([slug, en, hi]) => ({
  slug,
  en,
  hi,
  count: questions.filter((q) => q.section === slug).length,
}));
export function ukMetadata(
  title: string,
  description: string,
  url: string,
): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: {
      index: UK_PUBLISHED,
      follow: true,
      googleBot: {
        index: UK_PUBLISHED,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "CET TEST",
      locale: "en_IN",
      alternateLocale: ["hi_IN"],
    },
    twitter: { card: "summary", title, description },
  };
}
export function ukSitemapEntries() {
  return UK_PUBLISHED
    ? [
        { url: UK_URL },
        ...UK_CHAPTERS.map((c) => ({ url: `${UK_URL}/${c.slug}` })),
      ]
    : [];
}
export function ukSchema(
  title: string,
  description: string,
  url: string,
  chapter?: string,
  items: typeof questions = [],
) {
  const crumbs = [
    { name: "Home", item: "https://cettest.site" },
    { name: "Current Affairs", item: "https://cettest.site/current-affairs" },
    { name: "Uttarakhand Current Affairs 2026", item: UK_URL },
    ...(chapter ? [{ name: chapter, item: url }] : []),
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": chapter ? "WebPage" : "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: ["hi-IN", "en-IN"],
        isPartOf: {
          "@type": "WebSite",
          name: "CET TEST",
          url: "https://cettest.site",
        },
        publisher: {
          "@type": "Organization",
          name: "CET TEST",
          url: "https://cettest.site",
        },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: {
          "@type": "LearningResource",
          name: title,
          description,
          inLanguage: ["hi-IN", "en-IN"],
          learningResourceType: "Study guide",
          educationalUse: "Exam preparation",
          about: { "@type": "Place", name: "Uttarakhand, India" },
          isBasedOn: {
            "@type": "CreativeWork",
            name: "CET Test UKPCS Prelims 2026 – Uttarakhand Current Affairs through 300 MCQs, January–October 2026",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          ...c,
        })),
      },
      ...(items.length
        ? [
            {
              "@type": "Quiz",
              "@id": `${url}#quiz`,
              name: title,
              inLanguage: ["hi-IN", "en-IN"],
              hasPart: items.map((q) => ({
                "@type": "Question",
                "@id": `${url}#question-${q.id}`,
                url: `${url}#question-${q.id}`,
                name: q.question.en,
                text: [
                  { "@value": q.question.en, "@language": "en" },
                  { "@value": q.question.hi, "@language": "hi" },
                ],
                acceptedAnswer: {
                  "@type": "Answer",
                  text: [
                    {
                      "@value": `${q.options[q.answerIndex].en} — ${q.explanation.en}`,
                      "@language": "en",
                    },
                    {
                      "@value": `${q.options[q.answerIndex].hi} — ${q.explanation.hi}`,
                      "@language": "hi",
                    },
                  ],
                },
              })),
            },
          ]
        : []),
    ],
  };
}
