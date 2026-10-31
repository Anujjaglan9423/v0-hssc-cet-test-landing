import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata("Government Exam Preparation | CET TEST", "Free exam preparation, mock tests and study resources for Haryana, HSSC, SSC, Railway and UKSSSC examinations.", "/exams")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
