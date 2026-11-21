// import type { Metadata } from "next";
// import Link from "next/link";
// import { ArrowRight, BookOpenCheck, ShieldCheck } from "lucide-react";
// import FooterLinkNavbar from "@/components/footer-link-navbar";
// import FooterLinkFooter from "@/components/footer-link-footer";
// import { PreviousYearPapersBrowser } from "@/components/previous-year-papers-browser";
// import { listActivePreviousYearPapers } from "@/lib/actions/previous-year-papers";

// export const metadata: Metadata = {
//   title: "Previous Year Question Papers PDF | CET TEST",
//   description:
//     "Browse and download previous-year question papers across exam categories. Preview and download PDFs for free, with no sign-in required.",
//   alternates: { canonical: "https://cettest.site/previous-year-papers" },
// };

// export default async function PreviousPapersPage() {
//   const papers = await listActivePreviousYearPapers();

//   return (
//     <div className="min-h-screen bg-background">
//       <FooterLinkNavbar />
//       <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
//         <div className="mb-5 flex items-center gap-2 text-sm text-muted-foreground">
//           <Link href="/" className="hover:text-foreground">
//             Home
//           </Link>
//           <span aria-hidden="true">/</span>
//           <span className="text-foreground">Previous year papers</span>
//         </div>
//         <section className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-14">
//           <div className="relative z-10 max-w-2xl">
//             <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-semibold">
//               <BookOpenCheck className="size-4" /> CET TEST question library
//             </div>
//             <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
//               Previous year question papers
//             </h1>
//             <p className="mt-4 max-w-xl text-base leading-7 text-primary-foreground/80 sm:text-lg">
//               Explore papers across exam categories, then narrow your search by
//               exam, year, subject or topic. Preview online or download a PDF to
//               practice offline.
//             </p>
//             <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/80">
//               <span className="inline-flex items-center gap-2">
//                 <ShieldCheck className="size-4" />
//                 Open access, no login required
//               </span>
//               <span className="inline-flex items-center gap-2">
//                 <ArrowRight className="size-4" />
//                 Full, subject &amp; topic papers
//               </span>
//             </div>
//           </div>
//           <div
//             aria-hidden="true"
//             className="absolute -right-10 -top-20 size-80 rounded-full border-[48px] border-primary-foreground/10"
//           />
//         </section>
//         <div className="mt-8">
//           <PreviousYearPapersBrowser papers={papers} />
//         </div>
//         <section className="mt-8 rounded-2xl border border-border bg-muted/50 p-5 sm:p-6">
//           <h2 className="font-semibold">Find a specific paper</h2>
//           <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
//             Choose an exam category or filter by exam and sub-exam, then narrow
//             results to a full paper, subject-wise set or topic. Every available
//             PDF can be previewed in your browser or saved for offline practice.
//           </p>
//         </section>
//       </main>
//       <FooterLinkFooter />
//     </div>
//   );
// }

// import type { Metadata } from "next";
// import Link from "next/link";
// import {
//   ArrowRight,
//   BookOpenCheck,
//   CheckCircle2,
//   Download,
//   FileText,
//   Search,
//   ShieldCheck,
// } from "lucide-react";
// import FooterLinkNavbar from "@/components/footer-link-navbar";
// import FooterLinkFooter from "@/components/footer-link-footer";
// import { PreviousYearPapersBrowser } from "@/components/previous-year-papers-browser";
// import { listActivePreviousYearPapers } from "@/lib/actions/previous-year-papers";

// const SITE_URL = "https://cettest.site";
// const PAGE_PATH = "/previous-year-papers";
// const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
// const PAGE_TITLE = "HSSC & UKSSSC Previous Year Papers PDF";
// const PAGE_DESCRIPTION =
//   "Download HSSC and UKSSSC previous year question papers PDF for free. Browse available full, subject-wise and topic-wise papers by year. Preview online; no login needed.";

// /**
//  * The route remains a Server Component so its metadata, explanatory content,
//  * breadcrumbs and collection JSON-LD can be rendered for crawlers.
//  * The existing browser component retains all interactive filters and PDF actions.
//  */
// export const metadata: Metadata = {
//   title: PAGE_TITLE,
//   description: PAGE_DESCRIPTION,
//   keywords: [
//     "previous year question papers pdf",
//     "previous year papers",
//     "HSSC previous year question papers PDF",
//     "UKSSSC previous year question papers PDF",
//     "Haryana HSSC old question papers",
//     "Uttarakhand UKSSSC previous papers",
//     "HSSC CET previous year paper",
//     "HSSC and UKSSSC question papers",
//     "subject wise previous year papers",
//     "topic wise question papers pdf",
//     "previous year question papers in Hindi",
//     "HSSC पिछले वर्ष के प्रश्न पत्र",
//     "UKSSSC पिछले वर्ष के प्रश्न पत्र",
//     "पिछले वर्ष के प्रश्न पत्र PDF",
//   ],
//   alternates: {
//     canonical: PAGE_URL,
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   openGraph: {
//     type: "website",
//     url: PAGE_URL,
//     siteName: "CET TEST",
//     title: `${PAGE_TITLE} | CET TEST`,
//     description: PAGE_DESCRIPTION,
//     locale: "en_IN",
//     images: [
//       {
//         url: `${SITE_URL}/og-image.png`,
//         width: 1200,
//         height: 630,
//         alt: "CET TEST – HSSC and UKSSSC previous year question papers PDF",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: `${PAGE_TITLE} | CET TEST`,
//     description: PAGE_DESCRIPTION,
//     images: [`${SITE_URL}/og-image.png`],
//   },
// };

// const HOW_TO_USE = [
//   {
//     title: "Choose your exam",
//     description:
//       "Choose HSSC or UKSSSC, then select a sub-exam if a relevant option is available.",
//     icon: Search,
//   },
//   {
//     title: "Find the right paper",
//     description:
//       "Search by exam name, year, subject or topic. Choose a full paper, subject-wise set or topic-wise set.",
//     icon: FileText,
//   },
//   {
//     title: "Preview or download",
//     description:
//       "Open an available PDF in your browser or download it for offline practice. No sign-in is required.",
//     icon: Download,
//   },
// ] as const;

// const COMMON_QUESTIONS = [
//   {
//     question: "Which exams have previous year question papers on CET TEST?",
//     answer:
//       "Currently, CET TEST provides previous year question papers only for HSSC (Haryana Staff Selection Commission) and UKSSSC (Uttarakhand Subordinate Service Selection Commission). Specific exams, subjects, topics and years depend on the available PDF listings.",
//   },
//   {
//     question: "How can I download previous year question papers in PDF format?",
//     answer:
//       "Choose HSSC or UKSSSC in the paper browser, find an available year and paper, and select Download to save the PDF for offline practice.",
//   },
//   {
//     question: "Can I preview question papers without creating an account?",
//     answer:
//       "Yes. Available papers can be previewed in the browser and downloaded without signing in to CET TEST.",
//   },
//   {
//     question: "What is the difference between full, subject-wise and topic-wise papers?",
//     answer:
//       "Full papers cover an exam paper as a whole. Subject-wise sets focus on one subject, while topic-wise sets focus on a particular topic within a subject.",
//   },
//   {
//     question: "How do I find a paper for a particular year or subject?",
//     answer:
//       "Select HSSC or UKSSSC and search or filter by year, subject or topic. The results depend on which PDFs are currently available in the library.",
//   },
// ] as const;

// /** Avoid emitting unverified document URLs: the actual PDF links are
//  * short-lived signed URLs created only when someone previews/downloads.
//  */
// function getStructuredData(
//   papers: Awaited<ReturnType<typeof listActivePreviousYearPapers>>,
// ) {
//   const listId = `${PAGE_URL}#paper-list`;
//   return {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "CollectionPage",
//         "@id": `${PAGE_URL}#webpage`,
//         url: PAGE_URL,
//         name: "HSSC & UKSSSC Previous Year Question Papers PDF | CET TEST",
//         headline: "HSSC and UKSSSC previous year question papers",
//         description: PAGE_DESCRIPTION,
//         inLanguage: "en-IN",
//         isAccessibleForFree: true,
//         isPartOf: { "@id": `${SITE_URL}/#website` },
//         publisher: { "@id": `${SITE_URL}/#organization` },
//         breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
//         mainEntity: { "@id": listId },
//         about: [
//           { "@type": "Thing", name: "Previous year examination question papers" },
//           { "@type": "Thing", name: "HSSC previous year question papers" },
//           { "@type": "Thing", name: "UKSSSC previous year question papers" },
//         ],
//       },
//       {
//         "@type": "BreadcrumbList",
//         "@id": `${PAGE_URL}#breadcrumb`,
//         itemListElement: [
//           {
//             "@type": "ListItem",
//             position: 1,
//             name: "Home",
//             item: SITE_URL,
//           },
//           {
//             "@type": "ListItem",
//             position: 2,
//             name: "Previous Year Question Papers",
//             item: PAGE_URL,
//           },
//         ],
//       },
//       {
//         "@type": "ItemList",
//         "@id": listId,
//         name: "Available HSSC and UKSSSC previous year question papers",
//         numberOfItems: papers.length,
//         itemListElement: papers.slice(0, 40).map((paper, index) => ({
//           "@type": "ListItem",
//           position: index + 1,
//           item: {
//             "@type": "CreativeWork",
//             name: paper.title,
//             description: [
//               paper.exam_name,
//               paper.sub_exam_name,
//               String(paper.exam_year),
//               paper.paper_type === "full"
//                 ? "Full exam paper"
//                 : paper.paper_type === "subject"
//                   ? "Subject-wise paper"
//                   : "Topic-wise paper",
//               paper.subject,
//               paper.topic,
//             ]
//               .filter(Boolean)
//               .join(" · "),
//             fileFormat: "application/pdf",
//             isAccessibleForFree: true,
//           },
//         })),
//       },
//     ],
//   };
// }

// export default async function PreviousPapersPage() {
//   const papers = await listActivePreviousYearPapers();
//   const structuredData = getStructuredData(papers);

//   return (
//     <div className="min-h-screen bg-background">
//       <FooterLinkNavbar />
//       <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
//         <nav
//           aria-label="Breadcrumb"
//           className="mb-5 flex items-center gap-2 text-sm text-muted-foreground"
//         >
//           <Link href="/" className="hover:text-foreground">
//             Home
//           </Link>
//           <span aria-hidden="true">/</span>
//           <span aria-current="page" className="text-foreground">
//             Previous year papers
//           </span>
//         </nav>

//         <section
//           aria-labelledby="previous-papers-heading"
//           className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-14"
//         >
//           <div className="relative z-10 max-w-2xl">
//             <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-semibold">
//               <BookOpenCheck className="size-4" aria-hidden="true" />
//               CET TEST question library
//             </div>
//             <h1
//               id="previous-papers-heading"
//               className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl"
//             >
//               HSSC &amp; UKSSSC Previous Year Question Papers PDF
//             </h1>
//             <p className="mt-4 max-w-xl text-base leading-7 text-primary-foreground/80 sm:text-lg">
//               Find previous year question papers for <strong className="font-semibold text-primary-foreground">HSSC</strong> (Haryana Staff Selection Commission) and <strong className="font-semibold text-primary-foreground">UKSSSC</strong> (Uttarakhand Subordinate Service Selection Commission). Browse available full papers, subject-wise sets and topic-wise PDFs. Preview online or download for offline practice.
//             </p>
//             <p className="mt-4 inline-flex rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-sm font-medium text-primary-foreground">
//               Currently available: HSSC &amp; UKSSSC only
//             </p>
//             <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/80">
//               <span className="inline-flex items-center gap-2">
//                 <ShieldCheck className="size-4" aria-hidden="true" />
//                 Free PDF access — no login required
//               </span>
//               <span className="inline-flex items-center gap-2">
//                 <CheckCircle2 className="size-4" aria-hidden="true" />
//                 Full, subject-wise &amp; topic-wise papers
//               </span>
//             </div>
//             <a
//               href="#browse-papers"
//               className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
//             >
//               Browse question papers
//               <ArrowRight className="size-4" aria-hidden="true" />
//             </a>
//           </div>
//           <div
//             aria-hidden="true"
//             className="absolute -right-10 -top-20 size-80 rounded-full border-[48px] border-primary-foreground/10"
//           />
//         </section>

//         <section aria-label="Exam coverage" className="mt-8 grid gap-4 sm:grid-cols-2">
//           <div className="rounded-2xl border border-border bg-card p-5">
//             <h2 className="text-lg font-semibold">HSSC Previous Year Papers</h2>
//             <p className="mt-2 text-sm leading-6 text-muted-foreground">
//               Browse available Haryana Staff Selection Commission question papers by year,
//               subject and topic. Use the paper browser to see which HSSC PDFs are listed.
//             </p>
//             <a href="#browse-papers" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
//               Browse HSSC papers <ArrowRight className="size-4" aria-hidden="true" />
//             </a>
//           </div>
//           <div className="rounded-2xl border border-border bg-card p-5">
//             <h2 className="text-lg font-semibold">UKSSSC Previous Year Papers</h2>
//             <p className="mt-2 text-sm leading-6 text-muted-foreground">
//               Browse available Uttarakhand Subordinate Service Selection Commission PDFs,
//               including subject-wise and topic-wise sets where listed.
//             </p>
//             <a href="#browse-papers" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
//               Browse UKSSSC papers <ArrowRight className="size-4" aria-hidden="true" />
//             </a>
//           </div>
//         </section>

//         <section
//           id="browse-papers"
//           aria-labelledby="browse-papers-heading"
//           className="mt-9 scroll-mt-24"
//         >
//           <div className="mb-4">
//             <h2 id="browse-papers-heading" className="text-2xl font-bold tracking-tight">
//               Browse HSSC &amp; UKSSSC Previous Year Papers
//             </h2>
//             <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
//               The CET TEST paper library currently covers only HSSC and UKSSSC exams.
//               Choose one of these exam categories and use the available filters to
//               find a PDF by exam, year, subject or topic.
//             </p>
//             {papers.length > 0 && (
//               <p className="mt-2 text-sm font-medium text-foreground">
//                 {papers.length.toLocaleString("en-IN")} available {papers.length === 1 ? "paper" : "papers"}
//               </p>
//             )}
//           </div>
//           <PreviousYearPapersBrowser papers={papers} />
//         </section>

//         <section
//           aria-labelledby="using-papers-heading"
//           className="mt-12 rounded-2xl border border-border bg-muted/40 p-5 sm:p-7"
//         >
//           <h2 id="using-papers-heading" className="text-xl font-bold">
//             How to Find and Download Question Papers
//           </h2>
//           <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
//             Follow these steps to find HSSC and UKSSSC papers. Practise with
//             complete papers or focus on an individual subject or topic where available.
//           </p>
//           <ol className="mt-6 grid gap-4 md:grid-cols-3">
//             {HOW_TO_USE.map((step, index) => {
//               const Icon = step.icon;
//               return (
//                 <li key={step.title} className="rounded-xl border border-border bg-card p-5">
//                   <div className="flex items-center gap-3">
//                     <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
//                       {index + 1}
//                     </span>
//                     <Icon className="size-5 text-primary" aria-hidden="true" />
//                   </div>
//                   <h3 className="mt-4 font-semibold">{step.title}</h3>
//                   <p className="mt-2 text-sm leading-6 text-muted-foreground">
//                     {step.description}
//                   </p>
//                 </li>
//               );
//             })}
//           </ol>
//         </section>

//         <section aria-labelledby="previous-papers-faq-heading" className="mt-12">
//           <h2 id="previous-papers-faq-heading" className="text-xl font-bold sm:text-2xl">
//             HSSC &amp; UKSSSC Previous Year Papers: Common Questions
//           </h2>
//           <div className="mt-5 grid gap-4 md:grid-cols-2">
//             {COMMON_QUESTIONS.map(({ question, answer }) => (
//               <div key={question} className="rounded-xl border border-border bg-card p-5">
//                 <h3 className="font-semibold leading-6">{question}</h3>
//                 <p className="mt-2 text-sm leading-6 text-muted-foreground">{answer}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <aside className="mt-8 rounded-xl border border-border bg-muted/30 p-5 text-sm leading-6 text-muted-foreground">
//           <p>
//             <strong className="font-semibold text-foreground">Study note:</strong>{" "}
//             Check the exam name, year and paper type shown for each PDF before
//             you begin. Question papers and practice sets support revision; always
//             consult the relevant recruiting authority for the latest official
//             syllabus, exam pattern and notification.
//           </p>
//         </aside>
//       </main>

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
//         }}
//       />
//       <FooterLinkFooter />
//     </div>
//   );
// }


import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenCheck, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import { PreviousYearPapersBrowser } from "@/components/previous-year-papers-browser";
import { listActivePreviousYearPapers } from "@/lib/actions/previous-year-papers";

const SITE_URL = "https://cettest.site";
const PAGE_PATH = "/previous-year-papers";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "HSSC & UKSSSC Previous Year Papers PDF";
const PAGE_DESCRIPTION =
  "Download HSSC and UKSSSC previous year question papers PDF for free. Browse available full, subject-wise and topic-wise papers by year. Preview online; no login needed.";

/**
 * The route remains a Server Component so its metadata, explanatory content,
 * breadcrumbs and collection JSON-LD can be rendered for crawlers.
 * The existing browser retains PDF preview/download actions and provides fast filtering.
 */
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "previous year question papers pdf",
    "previous year papers",
    "HSSC previous year question papers PDF",
    "UKSSSC previous year question papers PDF",
    "Haryana HSSC old question papers",
    "Uttarakhand UKSSSC previous papers",
    "HSSC CET previous year paper",
    "HSSC and UKSSSC question papers",
    "subject wise previous year papers",
    "topic wise question papers pdf",
    "previous year question papers in Hindi",
    "HSSC पिछले वर्ष के प्रश्न पत्र",
    "UKSSSC पिछले वर्ष के प्रश्न पत्र",
    "पिछले वर्ष के प्रश्न पत्र PDF",
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
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "CET TEST",
    title: `${PAGE_TITLE} | CET TEST`,
    description: PAGE_DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "CET TEST – HSSC and UKSSSC previous year question papers PDF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | CET TEST`,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
};

/** Avoid emitting unverified document URLs: the actual PDF links are
 * short-lived signed URLs created only when someone previews/downloads.
 */
function getStructuredData(
  papers: Awaited<ReturnType<typeof listActivePreviousYearPapers>>,
) {
  const listId = `${PAGE_URL}#paper-list`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "HSSC & UKSSSC Previous Year Question Papers PDF | CET TEST",
        headline: "HSSC and UKSSSC previous year question papers",
        description: PAGE_DESCRIPTION,
        inLanguage: "en-IN",
        isAccessibleForFree: true,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": listId },
        about: [
          { "@type": "Thing", name: "Previous year examination question papers" },
          { "@type": "Thing", name: "HSSC previous year question papers" },
          { "@type": "Thing", name: "UKSSSC previous year question papers" },
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
            name: "Previous Year Question Papers",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": listId,
        name: "Available HSSC and UKSSSC previous year question papers",
        numberOfItems: papers.length,
        itemListElement: papers.slice(0, 40).map((paper, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: paper.title,
            description: [
              paper.exam_name,
              paper.sub_exam_name,
              String(paper.exam_year),
              paper.paper_type === "full"
                ? "Full exam paper"
                : paper.paper_type === "subject"
                  ? "Subject-wise paper"
                  : "Topic-wise paper",
              paper.subject,
              paper.topic,
            ]
              .filter(Boolean)
              .join(" · "),
            fileFormat: "application/pdf",
            isAccessibleForFree: true,
          },
        })),
      },
    ],
  };
}

export default async function PreviousPapersPage() {
  const papers = await listActivePreviousYearPapers();
  const structuredData = getStructuredData(papers);

  return (
    <div className="min-h-screen bg-background">
      <FooterLinkNavbar />
      <main className="mx-auto max-w-6xl px-4 pb-14 pt-24 sm:px-6 sm:pt-28">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-foreground">HSSC &amp; UKSSSC previous papers</span>
        </nav>

        {/* Keep the headline compact: the paper finder must appear immediately. */}
        <header className="mb-5 rounded-2xl border border-primary/15 bg-primary/5 px-5 py-5 sm:px-7 sm:py-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-primary">
            <BookOpenCheck aria-hidden="true" className="size-4" />
            FREE PREVIOUS YEAR QUESTION PAPERS
            <span className="rounded-full bg-background px-2.5 py-1 text-foreground">HSSC &amp; UKSSSC only</span>
          </div>
          <h1 className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            HSSC &amp; UKSSSC Previous Year Papers PDF
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
            Search and download available Haryana HSSC and Uttarakhand UKSSSC papers.
            Choose your exam, paper type, subject or year — and start practicing.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck aria-hidden="true" className="size-4 text-primary" /> No sign-in required</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 aria-hidden="true" className="size-4 text-primary" /> Preview or download PDF</span>
            <span className="inline-flex items-center gap-1.5"><FileText aria-hidden="true" className="size-4 text-primary" /> {papers.length.toLocaleString("en-IN")} listed {papers.length === 1 ? "paper" : "papers"}</span>
          </div>
        </header>

        {/* The primary task sits above all long-form educational content. */}
        <section id="browse-papers" aria-label="Find and download HSSC and UKSSSC papers" className="scroll-mt-24">
          <PreviousYearPapersBrowser papers={papers} />
        </section>

        <section aria-labelledby="how-to-find-papers" className="mt-10 rounded-2xl border border-border bg-muted/30 p-5 sm:p-7">
          <h2 id="how-to-find-papers" className="text-xl font-bold tracking-tight">How to find a previous year paper</h2>
          <ol className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground sm:grid-cols-3">
            <li className="rounded-xl border border-border bg-card p-4">
              <span className="mb-2 inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">1</span>
              <p><strong className="text-foreground">Search or choose an exam.</strong> Start with HSSC or UKSSSC and enter a topic, subject or paper name.</p>
            </li>
            <li className="rounded-xl border border-border bg-card p-4">
              <span className="mb-2 inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">2</span>
              <p><strong className="text-foreground">Narrow the results.</strong> Choose full paper, subject-wise or topic-wise; use More filters for a specific year or sub-exam.</p>
            </li>
            <li className="rounded-xl border border-border bg-card p-4">
              <span className="mb-2 inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">3</span>
              <p><strong className="text-foreground">Preview or download.</strong> Open an available PDF in your browser or save it to practise offline.</p>
            </li>
          </ol>
        </section>

        <section className="mt-9" aria-labelledby="paper-questions-heading">
          <h2 id="paper-questions-heading" className="text-lg font-bold tracking-tight sm:text-xl">Frequently asked questions</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <article className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <h3 className="font-semibold">Which exams are available?</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                CET TEST currently lists previous year question papers only for HSSC (Haryana Staff Selection Commission) and UKSSSC (Uttarakhand Subordinate Service Selection Commission). Available subjects and years depend on the PDFs in the library.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <h3 className="font-semibold">Are these PDFs free to download?</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Yes. You can preview and download the listed HSSC and UKSSSC PDFs without creating an account. Use the Preview or Download button on any paper.
              </p>
            </article>
          </div>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            Study note: Check each paper's exam, year and format before practising. For the current syllabus, exam pattern and official notices, consult the relevant recruiting authority.
          </p>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <FooterLinkFooter />
    </div>
  );
}
