import { resources } from "@/lib/resource-catalog";
import {
  canonicalUrl,
  EDITORIAL_ID,
  ORGANIZATION_ID,
  WEBSITE_ID,
  jsonLd,
} from "@/lib/seo-metadata";

/** Describes the actual study page, not a paid course or a certified qualification. */
export default function ResourceSchema({ path }: { path: string }) {
  const resource = resources.find((item) => item.path === path);
  if (!resource) return null;
  const url = canonicalUrl(path);
  const bilingual =
    path.startsWith("/haryana-gk/") || path.startsWith("/current-affairs/");
  const parent = path.startsWith("/exams/")
    ? { name: "Exam guides", path: "/exams" }
    : path.startsWith("/haryana-gk/")
      ? { name: "Haryana GK", path: "/haryana-gk" }
      : path.startsWith("/current-affairs/")
        ? { name: "Current affairs", path: "/current-affairs" }
        : { name: "Exam syllabus", path: "/syllabus" };
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LearningResource",
        "@id": `${url}#resource`,
        url,
        name: resource.title,
        description: resource.description,
        learningResourceType: "Study notes",
        isAccessibleForFree: true,
        inLanguage: bilingual ? ["en-IN", "hi-IN"] : "en-IN",
        publisher: { "@id": ORGANIZATION_ID },
        author: { "@id": EDITORIAL_ID },
        isPartOf: { "@id": WEBSITE_ID },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: canonicalUrl("/"),
          },
          ...(parent.path === path
            ? []
            : [
                {
                  "@type": "ListItem",
                  position: 2,
                  name: parent.name,
                  item: canonicalUrl(parent.path),
                },
              ]),
          {
            "@type": "ListItem",
            position: parent.path === path ? 2 : 3,
            name: resource.title,
            item: url,
          },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(graph) }}
    />
  );
}
