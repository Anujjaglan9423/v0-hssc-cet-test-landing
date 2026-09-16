import type { Metadata } from "next"
import MockTestBrowser from "@/components/mock-test-browser"

export const metadata: Metadata = {
  title: "Free Mock Tests for Haryana CET, HSSC, SSC & Railway",
  description: "Attempt free online mock tests for Haryana CET, HSSC, SSC, Railway and other government exams with instant results and exam-style practice.",
  alternates: { canonical: "https://cettest.site/mock-test" },
}

export default function MockTestPage() {
  return (
    <>
      <section className="sr-only" aria-labelledby="mock-test-seo-heading">
        <h1 id="mock-test-seo-heading">Free Government Exam Mock Tests</h1>
        <p>Practice Haryana CET, HSSC, SSC, Railway and state government exam questions with timed mock tests, instant results and performance insights.</p>
        <h2>Available mock tests</h2>
        <p>Choose an exam category, select a test section and start a free mock test. The first practice test in each section is available without signup.</p>
      </section>
      <MockTestBrowser />
    </>
  )
}

export const revalidate = 3600
export const dynamic = "force-static"

// The interactive browser is intentionally isolated so search crawlers receive useful page text before hydration.

