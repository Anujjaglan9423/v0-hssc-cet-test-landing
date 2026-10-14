import type { Metadata } from "next"
import MockTestClient from "./mock-test-client"

export const metadata: Metadata = {
  title: "Free Mock Tests 2026 | Haryana CET, UKSSSC, SSC | CET TEST",
  description:
    "Practice free mock tests for Haryana CET, HSSC, UKSSSC, SSC and other government exams. Try the first mock test in each exam without signing up.",
  alternates: { canonical: "/mock-test" },
  openGraph: {
    title: "Free Government Exam Mock Tests | CET TEST",
    description: "Explore timed mock tests for Haryana CET, UKSSSC, SSC and other government exams.",
    url: "/mock-test",
    type: "website",
  },
}

export default function Page() {
  return <MockTestClient />
}
