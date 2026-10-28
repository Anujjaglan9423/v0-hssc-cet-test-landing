import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Panchayati Raj | Haryana GK Study Material | CET TEST', 'Panchayati Raj Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/panchayati-raj")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
