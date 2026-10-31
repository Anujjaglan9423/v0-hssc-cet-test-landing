import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Soil Resources | Haryana GK Study Material | CET TEST', 'Soil Resources Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/soil-resources")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
