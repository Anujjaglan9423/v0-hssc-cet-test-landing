import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('National Parks | Haryana GK Study Material | CET TEST', 'National Parks Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/national-parks")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
