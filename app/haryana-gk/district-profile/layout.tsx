import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('District Profile | Haryana GK Study Material | CET TEST', 'District Profile Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/district-profile")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
