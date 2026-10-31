import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Medieval History | Haryana GK Study Material | CET TEST', 'Medieval History Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/medieval-history")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
