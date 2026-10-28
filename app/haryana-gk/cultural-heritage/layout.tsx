import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Cultural Heritage | Haryana GK Study Material | CET TEST', 'Cultural Heritage Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/cultural-heritage")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
