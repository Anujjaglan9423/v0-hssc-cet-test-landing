import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('December 2025 | Current Affairs Study Material | CET TEST', 'December 2025 Current Affairs notes, important facts and practice questions for government exam preparation on CET TEST.', "/current-affairs/december-2025")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
