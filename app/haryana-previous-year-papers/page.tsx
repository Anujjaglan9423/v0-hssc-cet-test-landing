import type { Metadata } from "next"
import Link from "next/link"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

export const metadata: Metadata = {
  title: "HSSC Previous Papers: Find Official Question Papers & Review Answers",
  description: "Find and verify HSSC previous-year papers, match shifts with answer keys and use an error log to turn a past paper into a focused revision plan.",
  alternates: { canonical: "https://cettest.site/haryana-previous-year-papers" },
}

const reviewRows = [
  ["Concept gap", "You could not identify the method", "Study the concept, then solve three questions without a timer"],
  ["Calculation error", "Your approach was correct but arithmetic failed", "Write intermediate steps and check units"],
  ["Language issue", "A Hindi or English term changed your interpretation", "Add the term and a short example to bilingual notes"],
  ["Time loss", "One question used too much of the paper", "Set a skip checkpoint and revisit in a second pass"],
  ["Key disagreement", "Your answer differs from the published key", "Check the final key, booklet code and official objection outcome"],
]

export default function PreviousPapersPage() {
  return <div className="min-h-screen bg-background"><FooterLinkNavbar /><main className="mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6">
    <p className="text-sm font-semibold text-primary">Haryana exam preparation</p><h1 className="mt-3 text-3xl font-bold sm:text-5xl">Find and study HSSC previous-year papers</h1>
    <p className="mt-6 text-lg leading-8 text-muted-foreground">A past paper is useful when its post, year, shift and answer key match. This guide explains how to locate official material and use it for a diagnostic attempt. CET TEST does not currently host verified downloadable paper PDFs on this page.</p>
    <section className="mt-10 rounded-2xl border bg-card p-6"><h2 className="text-2xl font-bold">Start with the official record</h2><p className="mt-4 leading-7">Use the HSSC public-notice archive to search for the advertisement number, examination name, question paper and answer key. Availability depends on the recruitment. A provisional key can change after objections, so look for the final key before scoring your attempt.</p><div className="mt-5 flex flex-wrap gap-4"><a className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground" href="https://hssc.gov.in/publicNotice">Open HSSC public notices</a><a className="rounded-lg border px-5 py-3 text-sm font-semibold" href="https://hssc.gov.in/advertisement">Find the recruitment advertisement</a></div></section>
    <section className="mt-10"><h2 className="text-2xl font-bold">Check these five details before using a paper</h2><ol className="mt-5 list-decimal space-y-4 pl-6 leading-7"><li><strong>Recruitment and post:</strong> a Group C screening paper is not automatically the pattern for Group D or Police Constable.</li><li><strong>Advertisement and examination date:</strong> the recruitment year and examination year can differ. Keep both in your filename.</li><li><strong>Shift and booklet code:</strong> the same question can appear at different numbers in different booklets.</li><li><strong>Answer-key version:</strong> label your copy provisional or final and keep the original notice link.</li><li><strong>Instructions on that paper:</strong> historical duration and marking rules may differ from your upcoming examination.</li></ol></section>
    <section className="mt-10"><h2 className="text-2xl font-bold">A practical two-pass attempt</h2><p className="mt-4 leading-7">For a diagnostic attempt, hide the answer key and use the paper&apos;s own duration. In the first pass, solve questions whose method you recognize. Mark slow or uncertain questions for the second pass. Record a confidence level before checking answers; a correct guess still needs revision.</p><p className="mt-4 leading-7">After checking the final key, separate knowledge mistakes from avoidable errors. Compare the paper with the current syllabus before spending time on a historical topic that no longer applies. Your next session should address one repeated error rather than immediately starting another full paper.</p></section>
    <section className="mt-10"><h2 className="text-2xl font-bold">Turn your result into an error log</h2><div className="mt-5 overflow-x-auto rounded-xl border"><table className="w-full min-w-[580px] text-left text-sm"><caption className="sr-only">How to classify errors after a previous-year paper</caption><thead className="bg-muted"><tr>{["Error", "What happened", "Next action"].map(h => <th scope="col" key={h} className="p-4">{h}</th>)}</tr></thead><tbody>{reviewRows.map(row => <tr className="border-t" key={row[0]}><th scope="row" className="p-4 font-medium">{row[0]}</th><td className="p-4">{row[1]}</td><td className="p-4">{row[2]}</td></tr>)}</tbody></table></div></section>
    <section className="mt-10 rounded-xl bg-muted p-6"><h2 className="text-xl font-bold">Continue with the right resource</h2><ul className="mt-4 space-y-3 text-primary underline"><li><Link href="/haryana-cet-group-c-syllabus">Group C syllabus guide</Link></li><li><Link href="/haryana-cet-group-d-syllabus">Group D syllabus guide</Link></li><li><Link href="/haryana-police-constable-syllabus">Police Constable syllabus guide</Link></li><li><Link href="/mock-test">Browse practice tests</Link></li></ul><p className="mt-4 text-sm leading-7 text-muted-foreground">CET TEST practice sets are independent preparation resources. They should not be described as official previous papers unless their provenance has been verified.</p></section>
  </main><FooterLinkFooter /></div>
}
