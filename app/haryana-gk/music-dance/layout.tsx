import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('Music Dance | Haryana GK Study Material | CET TEST', 'Music Dance Haryana GK notes, important facts and practice questions for government exam preparation on CET TEST.', "/haryana-gk/music-dance")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
