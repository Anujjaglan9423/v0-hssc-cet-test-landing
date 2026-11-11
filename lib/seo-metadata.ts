import type { Metadata } from "next";
import catalog from "./resource-catalog-data.json";

export const SITE_URL = "https://cettest.site";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const EDITORIAL_ID = `${SITE_URL}/#editorial-team`;

export function canonicalUrl(path: string): string {
  const url = new URL(path, SITE_URL);
  if (url.origin !== SITE_URL)
    throw new Error("Canonical URL must belong to CET TEST");
  if (
    url.pathname === "/study-materials" ||
    url.pathname.startsWith("/study-materials/")
  )
    throw new Error("Removed route cannot be canonical");
  return `${SITE_URL}${url.pathname.replace(/\/+$/, "")}`;
}

export function cleanTitle(title: string): string {
  return title.replace(/(?:\s*[|–—-]\s*CET\s*TEST)+\s*$/gi, "").trim();
}

/** Set explicit page-specific social metadata, without invented language URLs or dates. */
export function withPageMetadata(existing: Metadata, path: string): Metadata {
  const url = canonicalUrl(path);
  const item = catalog.find((r) => r.path === path);
  const rawTitle =
    typeof existing.title === "string"
      ? existing.title
      : existing.title && "absolute" in existing.title
        ? existing.title.absolute
        : existing.title && "default" in existing.title
          ? existing.title.default
          : undefined;
  const conciseTitles: Record<string, string> = {
    "/exams/railway": "Railway Exam Preparation: RRB NTPC, ALP & Group D",
    "/exams/railway-rrb-ntpc":
      "RRB NTPC Preparation: Syllabus, Stages & Practice",
    "/uksssc-vdo-syllabus": "UKSSSC VDO Syllabus & Exam Preparation",
    "/current-affairs/september-2026/fintech-india-2026":
      "Fintech India 2026: Key Facts & Exam Practice",
  };
  const title =
    conciseTitles[new URL(url).pathname] ||
    cleanTitle(rawTitle || item?.title || "CET TEST resources");
  const description =
    existing.description ||
    item?.description ||
    "Independent government exam preparation resources, practice tests and explanations from CET TEST.";
  const isArticle =
    /^\/(blog\/|haryana-gk\/|current-affairs\/|study-materials-hub\/)/.test(
      path,
    );
  const image = {
    url: `${SITE_URL}/og-image.png`,
    width: 1200,
    height: 630,
    alt: `${title} — CET TEST`,
  };
  return {
    ...existing,
    title: {
      absolute: /CET\s+TEST/i.test(title) ? title : `${title} | CET TEST`,
    },
    description,
    keywords: Array.isArray(existing.keywords)
      ? [...new Set(existing.keywords)].slice(0, 8)
      : existing.keywords,
    // Language toggles are not separate localized URLs. Do not fabricate hreflang variants.
    alternates: {
      ...existing.alternates,
      canonical: url,
      languages: undefined,
      types: {
        "application/rss+xml": `${SITE_URL}/feed.xml`,
        ...existing.alternates?.types,
      },
    },
    authors: existing.authors || [
      { name: "CET TEST Editorial Team", url: `${SITE_URL}/editorial-policy` },
    ],
    openGraph: {
      ...existing.openGraph,
      type: isArticle ? "article" : "website",
      title,
      description,
      url,
      siteName: "CET TEST",
      locale: "en_IN",
      images: existing.openGraph?.images || [image],
    },
    twitter: {
      ...existing.twitter,
      card: "summary_large_image",
      title,
      description,
      images: existing.twitter?.images || [image.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return withPageMetadata({ title, description }, path);
}

export function jsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
