import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('September 2026 | Current Affairs Study Material | CET TEST', 'September 2026 Current Affairs notes, important facts and practice questions for government exam preparation on CET TEST.', "/current-affairs/september-2026")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
