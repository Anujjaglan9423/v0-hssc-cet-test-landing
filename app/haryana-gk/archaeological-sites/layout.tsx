import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Archaeological Sites | Haryana GK Study Material | CET TEST', 'Archaeological Sites Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/archaeological-sites")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
