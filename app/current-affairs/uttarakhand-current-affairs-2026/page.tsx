import {
  UK_CHAPTERS,
  UK_PATH,
  UK_URL,
  ukMetadata,
  ukSchema,
} from "@/lib/data/uttarakhand-current-affairs-seo";
import Link from "next/link";
import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import UttarakhandCurrentAffairsQuiz from "@/components/uttarakhand-current-affairs-quiz";

const title = "Uttarakhand Current Affairs 2026: 300 MCQs | CET TEST";
const description =
  "Read 300 Uttarakhand current affairs MCQs (January–October 2026) in Hindi and English, with answers, explanations and monthly chapters for UKPSC and UKSSSC.";
export const metadata = ukMetadata(title, description, UK_URL);

export default function UttarakhandCurrentAffairsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FooterLinkNavbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              ukSchema(title, description, UK_URL),
            ).replace(/</g, "\\u003c"),
          }}
        />
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap gap-2 text-sm text-muted-foreground"
        >
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/current-affairs" className="hover:underline">
            Current Affairs
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Uttarakhand 2026</span>
        </nav>
        <header className="mb-6 rounded-2xl border bg-card p-5 sm:p-6">
          <p className="mb-3 text-sm font-semibold text-primary">
            UKPSC · UKSSSC · January–October 2026
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Uttarakhand Current Affairs 2026
          </h1>
          <p lang="hi" className="mt-2 text-2xl font-semibold">
            उत्तराखंड करेंट अफेयर्स 2026
          </p>
          <p className="mt-4 text-muted-foreground">
            Your digital study book: 300 bilingual questions, answers and
            explanations. Read at your own pace or switch to practice mode.
          </p>
          <p lang="hi" className="mt-1 text-muted-foreground">
            300 द्विभाषी बहुविकल्पीय प्रश्न, चार विकल्प, उत्तर और व्याख्या सहित।
          </p>
        </header>
        <section
          className="mb-6 rounded-xl border bg-card p-5"
          aria-labelledby="chapter-index"
        >
          <h2 id="chapter-index" className="text-xl font-bold">
            Read by chapter / अध्यायवार अध्ययन
          </h2>
          <p className="my-2 text-sm text-muted-foreground">
            Open a complete chapter to read every question on one page, or use
            the interactive book below.
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {UK_CHAPTERS.map((c) => (
              <Link
                key={c.slug}
                href={`${UK_PATH}/${c.slug}`}
                className="rounded-lg border p-3 hover:bg-muted"
              >
                <span>
                  {c.en} / {c.hi}
                </span>
                <span className="block text-sm text-muted-foreground">
                  {c.count} MCQs
                </span>
              </Link>
            ))}
          </div>
        </section>
        <UttarakhandCurrentAffairsQuiz />
        <section
          className="mt-8 space-y-4 rounded-xl border bg-card p-5"
          aria-labelledby="study-faq"
        >
          <h2 id="study-faq" className="text-xl font-bold">
            About this study book / सामान्य प्रश्न
          </h2>
          <h3 className="font-semibold">
            What does Uttarakhand Current Affairs 2026 cover?
          </h3>
          <p>
            300 multiple-choice questions from the January–October 2026 source
            compilation, organized into ten monthly chapters and mixed revision.
          </p>
          <p lang="hi">
            जनवरी से अक्टूबर 2026 के दस मासिक अध्यायों और मिश्रित पुनरावृत्ति
            में कुल 300 प्रश्न शामिल हैं।
          </p>
          <h3 className="font-semibold">
            Are questions available in Hindi and English?
          </h3>
          <p>
            Yes. Questions, options and explanations are presented in both
            languages.
          </p>
          <p lang="hi">
            हाँ। प्रश्न, विकल्प और व्याख्या दोनों भाषाओं में उपलब्ध हैं।
          </p>
          <h3 className="font-semibold">
            How can I revise for UKPSC and UKSSSC?
          </h3>
          <p>
            Read a chapter, bookmark important questions, then attempt them in
            practice mode. Check facts against official notifications before
            relying on the material.
          </p>
          <p lang="hi">
            अध्याय पढ़ें, महत्वपूर्ण प्रश्न सहेजें और अभ्यास मोड में हल करें।
            परीक्षा से पहले आधिकारिक स्रोतों से तथ्यों की पुष्टि करें।
          </p>
          <nav
            aria-label="Related study resources"
            className="flex flex-wrap gap-4 text-sm underline"
          >
            <Link href="/uksssc-exam-syllabus">UKSSSC syllabus</Link>
            <Link href="/previous-year-papers">Previous year papers</Link>
            <Link href="/editorial-policy">Editorial policy</Link>
            <Link href="/contact">Report a correction</Link>
          </nav>
        </section>
      </main>
      <FooterLinkFooter />
    </div>
  );
}
