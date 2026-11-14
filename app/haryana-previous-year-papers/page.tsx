import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpenCheck, ShieldCheck } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import { PreviousYearPapersBrowser } from "@/components/previous-year-papers-browser"
import { listActivePreviousYearPapers } from "@/lib/actions/previous-year-papers"

export const metadata: Metadata = {
  title: "Previous Year Question Papers PDF | CET TEST",
  description: "Browse and download exam-wise, subject-wise and topic-wise previous-year question paper PDFs. Free preview, no sign-in required.",
  alternates: { canonical: "https://cettest.site/haryana-previous-year-papers" },
}

export default async function PreviousPapersPage() {
  const papers = await listActivePreviousYearPapers()
  return <div className="min-h-screen bg-background"><FooterLinkNavbar /><main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
    <div className="mb-5 flex items-center gap-2 text-sm text-muted-foreground"><Link href="/" className="hover:text-foreground">Home</Link><span aria-hidden="true">/</span><span className="text-foreground">Previous year papers</span></div>
    <section className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-14"><div className="relative z-10 max-w-2xl"><div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-semibold"><BookOpenCheck className="size-4" />CET TEST question library</div><h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">Previous year question papers</h1><p className="mt-4 max-w-xl text-base leading-7 text-primary-foreground/80 sm:text-lg">Get exam-ready with original papers, organized by exam, year, subject and topic. Preview online or download a PDF to practice offline.</p><div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/80"><span className="inline-flex items-center gap-2"><ShieldCheck className="size-4" />Open access, no login required</span><span className="inline-flex items-center gap-2"><ArrowRight className="size-4" />Full, subject & topic papers</span></div></div><div aria-hidden="true" className="absolute -right-10 -top-20 size-80 rounded-full border-[48px] border-primary-foreground/10" /></section>
    <div className="mt-8"><PreviousYearPapersBrowser papers={papers} /></div>
    <section className="mt-8 rounded-2xl border border-border bg-muted/50 p-5 sm:p-6"><h2 className="font-semibold">Find a specific paper</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Filter by exam or sub-exam, then narrow results to a full paper, subject-wise set or topic. Every available PDF can be previewed in your browser or saved for offline practice.</p></section>
  </main><FooterLinkFooter /></div>
}
