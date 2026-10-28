import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Geographical Structure | Haryana GK Study Material | CET TEST', 'Geographical Structure Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/geographical-structure")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
