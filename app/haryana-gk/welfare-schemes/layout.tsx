import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Welfare Schemes | Haryana GK Study Material | CET TEST', 'Welfare Schemes Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/welfare-schemes")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
