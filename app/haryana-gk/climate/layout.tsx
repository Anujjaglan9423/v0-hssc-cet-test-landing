import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Climate | Haryana GK Study Material | CET TEST', 'Climate Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/climate")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
