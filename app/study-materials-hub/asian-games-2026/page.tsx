import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, CheckCircle2, Medal, Trophy } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import AdPlacement from "@/components/ad-placement"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Asian Games 2026 Master Notes & MCQs | CETTest",
  description: "Asian Games 2026 current affairs notes, India's medal tally, players, flag bearers and exam-oriented MCQs.",
  alternates: { canonical: "https://cettest.site/study-materials-hub/asian-games-2026" },
}

const medalTally = [
  ["1", "China", "169", "89", "83", "341"], ["2", "Japan (Host)", "83", "95", "91", "269"],
  ["3", "South Korea", "39", "43", "68", "150"], ["4", "India", "21", "27", "37", "85"], ["5", "Uzbekistan", "21", "25", "24", "70"],
]
const sportMedals = [
  ["Archery", 4, 2, 1, 7], ["Shooting", 3, 8, 4, 15], ["Boxing", 3, 0, 3, 6], ["Kabaddi", 2, 0, 0, 2], ["Cricket", 2, 0, 0, 2], ["Field Hockey", 2, 0, 0, 2], ["Athletics", 1, 9, 14, 24], ["Wrestling", 1, 1, 1, 3], ["Golf", 1, 0, 0, 1], ["Others", 0, 7, 14, 21], ["Total", 21, 27, 37, 85],
]
const questions = [
  ["Where did India rank in the medal tally?", "Fourth", "India won 21 Gold, 27 Silver and 37 Bronze medals."],
  ["Who were India's opening ceremony flag bearers?", "Manu Bhaker and Pawan Sehrawat", "The shooter and kabaddi captain led India's contingent."],
  ["Who was India's closing ceremony flag bearer?", "Neeru Dhandha", "She won Gold in Women's Trap Shooting."],
  ["Which sport gave India the most medals?", "Athletics", "India won 24 athletics medals."],
  ["Which sport gave India the most Gold medals?", "Archery", "India won 4 Archery Gold medals."],
  ["What medal did both Indian Kabaddi teams win?", "Gold", "India won Gold in both men's and women's Kabaddi."],
  ["Who captained India's men's cricket team?", "Shreyas Iyer", "India's men's T20 team won Gold under his captaincy."],
  ["Which country topped the tally?", "China", "China won 341 medals, including 169 Gold."],
  ["How many medals did India win at Hangzhou 2023?", "107", "India's 19th Asian Games tally was 28 Gold, 38 Silver and 41 Bronze."],
  ["Who won Women's 75kg Boxing Gold?", "Lovlina Borgohain", "Lovlina won the 75kg category."],
  ["In which event did Aman Sehrawat win Gold?", "Wrestling, 57kg Freestyle", "He won India's Wrestling Gold."],
  ["Where were the Games held?", "Aichi and Nagoya", "The host region was Aichi-Nagoya, Japan."],
  ["Who is the OCA President?", "Raja Randhir Singh", "India's Raja Randhir Singh heads the Olympic Council of Asia."],
  ["Who won Women's Golf Gold?", "Pranavi Urs", "She delivered a historic Gold-winning performance."],
  ["Whom did India defeat in Men's Hockey?", "Japan", "India defeated the host nation for Gold."],
  ["What was the official motto?", "Imagine One Asia", "It was the motto of the 20th Asian Games."],
  ["What did India's Women's 4x400m Relay Team win?", "Gold", "Kiran Pahal, Poovamma, Prachi and Vithya Ramraj won Gold."],
  ["What rank did India achieve at the first Asian Games in 1951?", "Second", "India finished second with 15 Gold medals."],
  ["Where will the 21st Asian Games be held in 2030?", "Doha, Qatar", "The 2034 Games are scheduled for Riyadh."],
  ["How many sports were included in the 20th Asian Games?", "43", "There were 43 sports and 469 Gold medal events."],
]

function DataTable({ children }: { children: React.ReactNode }) { return <div className="overflow-x-auto rounded-2xl border border-border"><Table>{children}</Table></div> }

export default function AsianGames2026Page() {
  return <div className="min-h-screen bg-background"><FooterLinkNavbar /><main className="px-4 pb-20 pt-28 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl">
    <Link href="/study-materials-hub" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft aria-hidden="true" /> Back to Study Material Hub</Link>
    <header className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-16"><div className="absolute -right-20 -top-24 size-72 rounded-full bg-amber-400/20 blur-3xl" /><div className="relative max-w-4xl"><Badge className="border-amber-300/30 bg-amber-300/10 text-amber-200">Current Affairs • All Exam Special</Badge><h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">Asian Games 2026 - Master Notes &amp; MCQs</h1><p className="mt-5 text-lg leading-8 text-slate-300">India&apos;s Performance, Flag Bearers, Medal Tally, Players &amp; 2026 Current Affairs</p><div className="mt-8 inline-flex items-center gap-3 rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"><Trophy aria-hidden="true" /> Join cettest.site to get all recruitment updates first</div></div></header>
    <AdPlacement className="my-8" />
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]"><article className="flex min-w-0 flex-col gap-8">
      <Card><CardHeader><CardTitle>Asian Games 2026 (20th Asian Games) - Key Highlights</CardTitle></CardHeader><CardContent className="grid gap-4 sm:grid-cols-2">{[["Venue & Date", "Aichi-Nagoya, Japan • 19 Sep - 04 Oct 2026"],["Motto & Mascot", "Imagine One Asia • HONOHON"],["Opening Ceremony", "Manu Bhaker (Shooting) & Pawan Sehrawat (Kabaddi)"],["Closing Ceremony", "Neeru Dhandha (Shooting - Trap Champion)"]].map(([label, value]) => <div key={label} className="rounded-xl bg-muted/50 p-4"><p className="text-xs font-bold uppercase tracking-wider text-primary">{label}</p><p className="mt-2 font-semibold leading-6">{value}</p></div>)}</CardContent></Card>
      <Card><CardHeader><CardTitle>India&apos;s Performance &amp; Medal Stats</CardTitle></CardHeader><CardContent className="grid gap-4 sm:grid-cols-4">{[["Rank", "4th"],["Gold", "21"],["Silver", "27"],["Bronze", "37"]].map(([label, value]) => <div key={label} className="rounded-xl border p-4 text-center"><Medal className="mx-auto mb-2 text-primary" aria-hidden="true" /><p className="text-3xl font-bold">{value}</p><p className="text-sm text-muted-foreground">{label}</p></div>)}<p className="sm:col-span-4 text-sm leading-7 text-muted-foreground">India created history at Hangzhou 2023 by winning 107 medals (28 Gold, 38 Silver, 41 Bronze). At Aichi-Nagoya 2026, India finished 4th again with 85 medals.</p></CardContent></Card>
      <Card><CardHeader><CardTitle>Top 5 Countries Medal Tally</CardTitle></CardHeader><CardContent><DataTable><TableHeader><TableRow>{["Rank","Country","Gold","Silver","Bronze","Total"].map((h) => <TableHead key={h}>{h}</TableHead>)}</TableRow></TableHeader><TableBody>{medalTally.map((row) => <TableRow key={row[1]}>{row.map((cell) => <TableCell key={cell}>{cell}</TableCell>)}</TableRow>)}</TableBody></DataTable></CardContent></Card>
      <Card><CardHeader><CardTitle>Major Sports &amp; India&apos;s Gold Medal Winners</CardTitle></CardHeader><CardContent className="grid gap-3 text-sm leading-7 text-muted-foreground"><p><strong className="text-foreground">Shooting:</strong> Neeru Dhandha (Women&apos;s Trap), Kamaljeet &amp; Suruchi Singh (10m Air Pistol Mixed Team), Keenan Chenai &amp; Neeru Dhandha (Trap Mixed Team).</p><p><strong className="text-foreground">Archery:</strong> Women&apos;s Compound Team, Sahil Jadhav &amp; Chikitha (Mixed Compound), and Kumkum Mohda (Women&apos;s Recurve).</p><p><strong className="text-foreground">Kabaddi, Cricket &amp; Hockey:</strong> Both Indian Kabaddi teams, both Cricket teams, and both Hockey teams won Gold. Captains included Pawan Sehrawat, Ritu Negi, Shreyas Iyer, Harmanpreet Kaur, Harmanpreet Singh and Salima Tete.</p><p><strong className="text-foreground">Boxing &amp; Wrestling:</strong> Lovlina Borgohain, Parveen Hooda, Aman Sehrawat and Sujeet Kalkal won Gold.</p></CardContent></Card>
      <Card><CardHeader><CardTitle>Sport-wise India Medal Breakdown</CardTitle></CardHeader><CardContent><DataTable><TableHeader><TableRow>{["Sport","Gold","Silver","Bronze","Total"].map((h) => <TableHead key={h}>{h}</TableHead>)}</TableRow></TableHeader><TableBody>{sportMedals.map((row) => <TableRow key={row[0]} className={row[0] === "Total" ? "font-bold" : ""}>{row.map((cell) => <TableCell key={String(cell)}>{cell}</TableCell>)}</TableRow>)}</TableBody></DataTable></CardContent></Card>
      <Card><CardHeader><CardTitle>Exam-Oriented Important Questions</CardTitle></CardHeader><CardContent className="grid gap-4">{questions.map(([question, answer, explanation], index) => <details key={question} className="group rounded-xl border p-4"><summary className="cursor-pointer list-none pr-4 font-semibold marker:hidden">Q{index + 1}. {question}</summary><div className="mt-3 flex gap-2 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" /><span><strong className="text-foreground">Answer: {answer}</strong> | {explanation}</span></div></details>)}</CardContent></Card>
    </article><aside className="h-fit lg:sticky lg:top-24"><Card className="bg-primary text-primary-foreground"><CardHeader><CardTitle className="text-xl">Quick Revision</CardTitle></CardHeader><CardContent className="grid gap-3 text-sm leading-6"><p><strong>Host:</strong> Aichi-Nagoya, Japan</p><p><strong>Dates:</strong> 19 Sep - 04 Oct 2026</p><p><strong>India:</strong> 4th rank, 85 medals</p><p><strong>Motto:</strong> Imagine One Asia</p><p><strong>Sports:</strong> 43</p></CardContent></Card></aside></div>
    </div></main><FooterLinkFooter /></div>
}

// The page intentionally keeps the exam facts server-rendered for fast indexing and sharing.
// Source content supplied for CETTest's 2026 current-affairs study material.

