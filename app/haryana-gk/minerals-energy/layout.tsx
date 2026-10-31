import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Minerals Energy | Haryana GK Study Material | CET TEST', 'Minerals Energy Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/minerals-energy")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
