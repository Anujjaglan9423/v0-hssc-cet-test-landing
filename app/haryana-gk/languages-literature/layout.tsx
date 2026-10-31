import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Languages Literature | Haryana GK Study Material | CET TEST', 'Languages Literature Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/languages-literature")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
