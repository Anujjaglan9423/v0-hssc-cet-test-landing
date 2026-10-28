import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Transport | Haryana GK Study Material | CET TEST', 'Transport Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/transport")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
