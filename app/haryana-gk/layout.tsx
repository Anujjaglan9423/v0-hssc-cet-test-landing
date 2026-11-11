import { withPageMetadata } from "@/lib/seo-metadata"
// app/haryana-gk-study-material/layout.tsx
import type { Metadata, Viewport } from "next";

// ============================================
// 1. SEO + AEO + GEO OPTIMIZED METADATA
// ============================================
export const metadata: Metadata = withPageMetadata({
    // Primary Title with Power Words
    title: "Haryana GK 2026: Complete Syllabus | HSSC CET Group C 25 Marks",

    // Description optimized for CTR (Click-Through Rate)
    description: "Complete Haryana GK syllabus for HSSC CET Group C: Haryana history, geography, polity, economy, animal husbandry, Panchayati Raj, sports and current affairs.",

    // Keywords targeting long-tail, question-based, and conversational queries (AEO)
    keywords: [
        // Primary keywords
        "haryana gk", "haryana gk 2026", "haryana gk study material", "haryana gk syllabus",
        "hssc cet syllabus", "haryana cet syllabus", "haryana gk book",

        // Question-based (AEO - Answer Engine Optimization)
        "what is haryana gk syllabus", "how to prepare haryana gk",
        "haryana gk important topics", "haryana gk tricks to remember",

        // Specific topics
        "murrah buffalo haryana", "haryana animal husbandry",
        "haryana panchayati raj", "phogat sisters haryana",
        "haryana sports awards", "haryana current affairs 2026",

        // Exam-specific
        "haryana gk for cet", "hssc haryana gk", "haryana police gk",
        "haryana patwari gk", "haryana gk previous year paper",
        "haryana gk mock test", "haryana gk one liner"
    ],

    authors: [{ name: "CET TEST", url: "https://cettest.site" }],
    creator: "CET TEST",
    publisher: "CET TEST",

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    // Enhanced Robots for maximum indexing
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": 300,
            "max-image-preview": "large",
            "max-video-preview": -1,
            notranslate: false,
        },
        nocache: false,
    },

    // Open Graph optimized for higher CTR
    openGraph: {
        title: "Haryana GK Complete Syllabus 2026 | HSSC CET Group C 25 Marks",
        description: "Study complete Haryana GK covering History, Geography, Culture, Animal Husbandry, Polity, Sports & Awards. 25 Marks separate section for HSSC CET 2026.",
        url: "https://cettest.site/haryana-gk",
        siteName: "CET TEST | Haryana Govt Exam Prep",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-haryana-gk-2026.jpg",
                width: 1200,
                height: 630,
                alt: "Haryana GK 2026 Syllabus for HSSC CET Group C",
                type: "image/jpeg",
            },
        ],
    },

    // Twitter Card optimized for engagement
    twitter: {
        card: "summary_large_image",
        title: "Haryana GK Complete Syllabus 2026 | HSSC CET Preparation",
        description: "Free Download: Complete Haryana GK syllabus for HSSC CET Group C. 25 marks section with topic-wise breakdown.",
        images: ["/twitter-haryana-gk-2026.jpg"],
        creator: "@cet__test",
        site: "@cet__test",
    },

    // Canonical URL
    alternates: {
        canonical: "https://cettest.site/haryana-gk",
        languages: {
            "en-IN": "https://cettest.site/haryana-gk",
        },
    },

    // Additional SEO tags
    category: "Government Exam Preparation",
    classification: "HSSC CET Study Material | Haryana GK Syllabus 2026",
}, "/haryana-gk");

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
};

// ============================================
// 2. LAYOUT COMPONENT WITH STRUCTURED DATA
// ============================================
// Hub metadata is declared above. Individual chapters use their own
// metadata and schema; do not inject the entire hub's JSON-LD on every page.
export default function HaryanaGKLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
