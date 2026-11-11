import type { Metadata } from "next"
import Link from "next/link"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

export const metadata: Metadata = {
  title: "Editorial Policy, Sources & Corrections",
  description: "CET TEST's publishing standard for exam guides, current affairs, practice explanations, AI-assisted material, source attribution and corrections.",
  alternates: { canonical: "https://cettest.site/editorial-policy" },
}

const sections = [
  ["Independent preparation, not official instructions", "CET TEST is an independent study platform. A recruiting authority's dated notice and later corrigenda take precedence over our summaries. Practice questions are not official previous-year questions unless the paper, year and source are identified."],
  ["Sources and changing facts", "Our publishing standard is to identify the recruitment, advertisement number and year for exam rules, and the reporting date for current-affairs figures. Prefer original notifications, legislation, institutional reports and official result tables. A link to an institution's homepage is further reading; it does not verify every claim in an article."],
  ["Explanations and educational value", "A useful answer explains why the chosen option follows from the question. Worked calculations should show the method and units. Where a rule varies by post or year, the explanation should identify the scope rather than treating it as universal. Errors reported in either Hindi or English should be checked in both versions."],
  ["AI-assisted material", "The daily quiz identifies questions from the CET TEST practice bank and questions produced by an AI generator. An automatically generated answer is a practice aid and may contain mistakes. Publication standards call for checking dated factual claims and answer keys against primary sources. AI assistance does not establish originality, accuracy or official endorsement."],
  ["Authors and responsibility", "Articles may use the CET TEST Editorial Team byline. This describes the platform's publishing responsibility, not an external certification or a claim that an independent subject expert reviewed every page. Founder information is available on our About page."],
  ["Updates and corrections", "Send the page URL, affected question or paragraph, your proposed correction and a reliable source to the editorial contact below. Check the final answer key before reporting a provisional-key discrepancy. Corrections should update related explanations, tables and questions together; substantive revisions should carry an accurate update date."],
  ["Reuse, images and previous papers", "Original explanations and study tools should be distinguished from third-party material. Attribution alone does not grant permission to reproduce a protected textbook, question bank or image. Official-source links are preferable when redistribution rights are unclear."],
  ["Advertising and independence", "Advertising, where enabled, is separate from study instructions and answers. Advertisements must not be presented as exam registration, answer downloads or navigation. CET TEST does not guarantee selection, rank or approval by an advertising platform."],
]
export default function EditorialPolicyPage() {
  return <div className="min-h-screen bg-background"><FooterLinkNavbar /><main className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6"><p className="text-sm font-semibold text-primary">Publishing standard · 10 November 2026</p><h1 className="mt-3 text-3xl font-bold sm:text-5xl">Editorial policy and corrections</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">Our goal is to help learners understand a topic, practise it and check the evidence behind factual claims. This policy sets out the standard for publishing and correcting CET TEST resources; it is not a certification that every legacy page has completed a source review.</p><div className="mt-10 space-y-8">{sections.map(([title, text]) => <section key={title}><h2 className="text-xl font-bold">{title}</h2><p className="mt-3 leading-8 text-muted-foreground">{text}</p></section>)}</div><section className="mt-10 rounded-2xl border bg-card p-6"><h2 className="text-xl font-bold">Report an error</h2><p className="mt-3 leading-7">Email <a href="mailto:cettest.education@gmail.com?subject=Content%20correction" className="text-primary underline">cettest.education@gmail.com</a>, or use <Link className="text-primary underline" href="/contact">Contact</Link>. Include a source link and avoid sending identity documents or passwords.</p><Link href="/about" className="mt-4 inline-block text-sm text-primary underline">Meet the founders</Link></section></main><FooterLinkFooter /></div>
}
