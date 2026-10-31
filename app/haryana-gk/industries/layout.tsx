import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Industries | Haryana GK Study Material | CET TEST', 'Industries Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/industries")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
