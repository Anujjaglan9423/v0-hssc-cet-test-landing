import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Modern History | Haryana GK Study Material | CET TEST', 'Modern History Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/modern-history")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
