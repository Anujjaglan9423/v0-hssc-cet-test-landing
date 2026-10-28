import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Haryana Basic Info | Haryana GK Study Material | CET TEST', 'Haryana Basic Info Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/haryana-basic-info")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
