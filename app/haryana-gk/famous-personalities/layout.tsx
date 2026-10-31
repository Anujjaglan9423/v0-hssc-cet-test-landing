import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Famous Personalities | Haryana GK Study Material | CET TEST', 'Famous Personalities Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/famous-personalities")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
