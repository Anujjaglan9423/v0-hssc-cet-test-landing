import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = pageMetadata('November 2025 | Current Affairs Study Material | CET TEST', 'November 2025 Current Affairs notes, important facts and practice questions for government exam preparation on CET TEST.', "/current-affairs/november-2025")

export default function Layout({ children }: { children: React.ReactNode }) { return children }
