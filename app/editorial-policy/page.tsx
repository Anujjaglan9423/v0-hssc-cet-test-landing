import type { Metadata } from "next"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

export const metadata: Metadata = {
  title: "Editorial Policy | CET TEST",
  description: "How CET TEST researches, writes, reviews, and updates exam preparation content.",
  alternates: { canonical: "https://cettest.site/editorial-policy" },
}

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <FooterLinkNavbar />
      <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-8 md:pt-36">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Transparency at CET TEST</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Editorial policy</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Our goal is to publish useful, understandable practice material for competitive-exam learners. This page explains what we publish, how we review it, and what readers should verify independently.</p>
          <div className="mt-10 space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground">What we publish</h2>
              <p className="mt-3">CET TEST publishes topic-wise and full-length practice tests, Haryana-focused study notes, syllabus explainers, current-affairs reading, exam alerts, and reviews that help learners understand their performance. Content is written for educational practice and is not a substitute for an official notification, answer key, or result.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground">How content is prepared</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>We organize questions by exam, subject, and topic so learners can choose relevant practice.</li>
                <li>Explanations are written to show the reasoning behind an answer, not just the answer itself.</li>
                <li>Time-sensitive details such as dates, eligibility, fees, and vacancies should be checked against the relevant official authority before a decision is made.</li>
                <li>We avoid presenting CET TEST as an official government website or recruiting authority.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground">Corrections and updates</h2>
              <p className="mt-3">If you find an incorrect answer, outdated detail, broken link, or unclear explanation, please contact us with the page URL and the issue. We review credible reports and update content when the correction can be verified.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground">Independence and advertising</h2>
              <p className="mt-3">CET TEST is an independent educational website. Advertising, when present, does not determine our practice questions or editorial decisions. We aim to keep advertising separate from instructions, answer choices, and other content needed to complete a test.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
              <p className="mt-3">For corrections or editorial questions, email <a className="text-primary hover:underline" href="mailto:anujjaglan9423@gmail.com">anujjaglan9423@gmail.com</a>.</p>
            </section>
          </div>
        </article>
      </main>
      <FooterLinkFooter />
    </div>
  )
}

export const dynamic = "force-static"

// This page is informational and does not collect user data.
// Official exam information should always be confirmed with the relevant authority.
