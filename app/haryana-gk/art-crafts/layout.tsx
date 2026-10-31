import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Art Crafts | Haryana GK Study Material | CET TEST', 'Art Crafts Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/art-crafts")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
