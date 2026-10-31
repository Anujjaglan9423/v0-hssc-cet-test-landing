import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Fairs Festivals | Haryana GK Study Material | CET TEST', 'Fairs Festivals Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/fairs-festivals")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
