import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Education Health | Haryana GK Study Material | CET TEST', 'Education Health Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/education-health")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
