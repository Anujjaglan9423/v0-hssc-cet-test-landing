import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import questions from "@/lib/data/uttarakhand-current-affairs-2026.json";
import {
  UK_CHAPTERS,
  UK_PATH,
  UK_URL,
  ukMetadata,
  ukSchema,
} from "@/lib/data/uttarakhand-current-affairs-seo";

type Props = { params: Promise<{ chapter: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return UK_CHAPTERS.map((c) => ({ chapter: c.slug }));
}
function info(slug: string) {
  const c = UK_CHAPTERS.find((c) => c.slug === slug);
  if (!c) notFound();
  return c;
}
function details(c: ReturnType<typeof info>) {
  return {
    title: `${c.en} ${c.slug === "revision" ? "" : "2026 "}Uttarakhand Current Affairs | CET TEST`,
    description: `Read ${c.count} bilingual Uttarakhand current affairs MCQs in the ${c.en} chapter of the 2026 study book, with Hindi and English answers and explanations for UKPSC and UKSSSC.`,
    url: `${UK_URL}/${c.slug}`,
  };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = details(info((await params).chapter));
  return ukMetadata(d.title, d.description, d.url);
}
export default async function ChapterPage({ params }: Props) {
  const c = info((await params).chapter),
    d = details(c),
    items = questions.filter((q) => q.section === c.slug),
    i = UK_CHAPTERS.indexOf(c);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FooterLinkNavbar />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              ukSchema(d.title, d.description, d.url, c.en, items),
            ).replace(/</g, "\\u003c"),
          }}
        />
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap gap-2 text-sm"
        >
          <Link href="/">Home</Link> /{" "}
          <Link href="/current-affairs">Current Affairs</Link> /{" "}
          <Link href={UK_PATH}>Uttarakhand 2026</Link> /{" "}
          <span aria-current="page">{c.en}</span>
        </nav>
        <header className="mb-6 space-y-3">
          <h1 className="text-3xl font-bold">
            Uttarakhand Current Affairs 2026 — {c.en}
          </h1>
          <p lang="hi" className="text-xl font-semibold">
            उत्तराखंड करेंट अफेयर्स 2026 — {c.hi}
          </p>
          <p>
            {c.count} bilingual MCQs with answers and explanations. For UKPSC
            and UKSSSC Current Affairs 2026 revision.
          </p>
          <p lang="hi">{c.count} द्विभाषी प्रश्न, उत्तर और व्याख्या सहित।</p>
          <Link
            className="inline-block rounded-lg bg-primary px-4 py-2 text-primary-foreground"
            href={UK_PATH}
          >
            Open interactive study book / अध्ययन पुस्तक खोलें
          </Link>
        </header>
        <nav aria-label="Question index" className="mb-6 rounded-xl border p-4">
          <h2 className="mb-3 font-semibold">
            Jump to question / प्रश्न चुनें
          </h2>
          <div className="flex flex-wrap gap-2">
            {items.map((q) => (
              <a
                key={q.id}
                className="rounded border px-3 py-2 text-sm"
                href={`#question-${q.id}`}
              >
                {q.id}
              </a>
            ))}
          </div>
        </nav>
        <section
          aria-label="Chapter questions"
          className="rounded-xl border bg-[#fffaf0] text-[#282e27] px-4 py-6 sm:px-10"
        >
          <div className="mx-auto max-w-[72ch] text-[17px] leading-[1.8]">
            {items.map((q) => (
              <article
                key={q.id}
                id={`question-${q.id}`}
                className="scroll-mt-24 border-b border-[#ded6c5] py-7"
              >
                <p className="text-sm font-bold text-[#245b40]">
                  Question {q.id} / प्रश्न {q.id}
                </p>
                <h2
                  lang="hi"
                  className="mt-2 whitespace-pre-line font-semibold"
                >
                  {q.question.hi}
                </h2>
                <p lang="en" className="mt-2 whitespace-pre-line">
                  {q.question.en}
                </p>
                <ol className="my-4 list-[upper-alpha] space-y-2 pl-6">
                  {q.options.map((o, j) => (
                    <li key={j}>
                      <span lang="hi" className="block whitespace-pre-line">
                        {o.hi}
                      </span>
                      <span
                        lang="en"
                        className="block whitespace-pre-line text-[#565e53]"
                      >
                        {o.en}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="rounded-r-lg border-l-4 border-[#245b40] bg-[#edf1e5] p-4">
                  <h3 className="font-bold">
                    Answer / उत्तर: {["A", "B", "C", "D"][q.answerIndex]}
                  </h3>
                  <p
                    lang="hi"
                    className="mt-2 font-semibold whitespace-pre-line"
                  >
                    {q.options[q.answerIndex].hi}
                  </p>
                  <p
                    lang="en"
                    className="mt-1 font-semibold whitespace-pre-line"
                  >
                    {q.options[q.answerIndex].en}
                  </p>
                  <p lang="hi" className="mt-2 whitespace-pre-line">
                    {q.explanation.hi}
                  </p>
                  <p lang="en" className="mt-2 whitespace-pre-line">
                    {q.explanation.en}
                  </p>
                  {/* <p className="mt-2 text-xs">
                    Source PDF page {q.sourcePage ?? "—"} · {q.editorialStatus}
                  </p> */}
                </div>
                <a
                  href={`#question-${q.id}`}
                  className="mt-3 inline-block text-sm underline"
                >
                  Question link
                </a>
              </article>
            ))}
          </div>
        </section>
        <nav
          aria-label="Chapter navigation"
          className="my-6 flex flex-wrap justify-between gap-3"
        >
          {i > 0 && (
            <Link href={`${UK_PATH}/${UK_CHAPTERS[i - 1].slug}`}>
              ← {UK_CHAPTERS[i - 1].en}
            </Link>
          )}
          <Link href={UK_PATH}>All chapters</Link>
          {i + 1 < UK_CHAPTERS.length && (
            <Link href={`${UK_PATH}/${UK_CHAPTERS[i + 1].slug}`}>
              {UK_CHAPTERS[i + 1].en} →
            </Link>
          )}
        </nav>
        <nav
          aria-label="All chapters"
          className="grid grid-cols-2 gap-2 sm:grid-cols-3"
        >
          {UK_CHAPTERS.map((x) => (
            <Link
              key={x.slug}
              href={`${UK_PATH}/${x.slug}`}
              aria-current={x.slug === c.slug ? "page" : undefined}
              className="rounded border p-3"
            >
              {x.en} / {x.hi} ({x.count})
            </Link>
          ))}
        </nav>
      </main>
      <FooterLinkFooter />
    </div>
  );
}
