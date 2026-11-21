import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo-metadata"
import ResourceSchema from "@/components/resource-schema"
export const metadata: Metadata = pageMetadata("Haryana CET Group D Syllabus | 2023 Reference & HSSC Advt. 05/2026", "Historical Group D syllabus reference from HSSC Advt. 1/2023. For 2026 exam pattern, eligibility and corrections use official HSSC CET Group D Advt. 05/2026.", "/haryana-cet-group-d-syllabus")
export default function Layout({ children }: { children: React.ReactNode }) { return <><ResourceSchema path="/haryana-cet-group-d-syllabus" />{children}</> }
