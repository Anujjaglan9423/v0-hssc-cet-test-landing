import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Sports Awards | Haryana GK Study Material | CET TEST', 'Sports Awards Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/sports-awards")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
