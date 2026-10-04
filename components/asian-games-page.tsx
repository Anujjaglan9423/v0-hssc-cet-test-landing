"use client"

import { useState } from "react"
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronDown,
  CircleHelp,
  Flag,
  Medal,
  Menu,
  Trophy,
  Users,
  X,
} from "lucide-react"

const countryTally = [
  ["1", "China", "169", "89", "83", "341"],
  ["2", "Japan (Host)", "83", "95", "91", "269"],
  ["3", "South Korea", "39", "43", "68", "150"],
  ["4", "India", "21", "27", "37", "85"],
  ["5", "Uzbekistan", "21", "25", "24", "70"],
]

const sportTally = [
  ["Archery", "4", "2", "1", "7"],
  ["Shooting", "3", "8", "4", "15"],
  ["Boxing", "3", "0", "3", "6"],
  ["Kabaddi", "2", "0", "0", "2"],
  ["Cricket", "2", "0", "0", "2"],
  ["Field Hockey", "2", "0", "0", "2"],
  ["Athletics", "1", "9", "14", "24"],
  ["Wrestling", "1", "1", "1", "3"],
  ["Golf", "1", "0", "0", "1"],
  ["Others (Badminton, Rowing, etc.)", "0", "7", "14", "21"],
  ["Total", "21", "27", "37", "85"],
]

const questions = [
  ["Where did India rank in the medal tally at Asian Games 2026?", ["Second", "Third", "Fourth", "Fifth"], "Fourth", "India finished 4th with 21 Gold, 27 Silver, and 37 Bronze (total 85)."],
  ["Who were India's flag bearers at the Opening Ceremony of Asian Games 2026?", ["Neeraj Chopra & PV Sindhu", "Manu Bhaker & Pawan Sehrawat", "Harmanpreet Singh & Lovlina", "Shreyas Iyer & Nikhat Zareen"], "Manu Bhaker & Pawan Sehrawat", "Star shooter Manu Bhaker and Kabaddi captain Pawan Sehrawat were the flag bearers."],
  ["Who was India's flag bearer at the Closing Ceremony of Asian Games 2026?", ["Neeru Dhandha", "Jyoti Surekha Vennam", "Salima Tete", "Harmanpreet Kaur"], "Neeru Dhandha", "Neeru Dhandha, who won Gold in Women's Trap Shooting, was the flag bearer."],
  ["In which sport discipline did India win the most medals at Asian Games 2026?", ["Shooting", "Athletics", "Archery", "Boxing"], "Athletics", "India won 24 medals in Athletics (1 Gold, 9 Silver, 14 Bronze)."],
  ["In which sport did India win the most Gold medals at Asian Games 2026?", ["Archery", "Shooting", "Boxing", "Kabaddi"], "Archery", "India won the most Gold medals (4) in Archery."],
  ["Which medal did India win in both Men's and Women's Kabaddi at Asian Games 2026?", ["Gold", "Silver", "Bronze", "Fourth place"], "Gold", "India maintained its dominance in both categories of Kabaddi and won Gold."],
  ["Who was the captain of the Indian Men's Cricket Team that won Gold at Asian Games 2026?", ["Surya Kumar Yadav", "Shreyas Iyer", "Ruturaj Gaikwad", "Shubman Gill"], "Shreyas Iyer", "Under Shreyas Iyer's captaincy, the Indian Men's T20 team won Gold."],
  ["Which country topped the medal tally at Asian Games 2026?", ["Japan", "India", "China", "South Korea"], "China", "China topped the tally with 341 total medals (169 Gold)."],
  ["How many total medals did India win at the 19th Asian Games (Hangzhou 2023)?", ["70", "107", "85", "121"], "107 medals", "In 2023, India won 107 medals including 28 Gold, 38 Silver, and 41 Bronze."],
  ["Who won the Gold medal in Women's 75kg Boxing at Asian Games 2026?", ["Nikhat Zareen", "Lovlina Borgohain", "Mary Kom", "Parveen Hooda"], "Lovlina Borgohain", "Tokyo Olympics medalist Lovlina won Gold in the 75kg category."],
  ["In which sport did Aman Sehrawat win a Gold medal for India?", ["Boxing", "Wrestling (57kg Freestyle)", "Judo", "Weightlifting"], "Wrestling", "Aman Sehrawat won Gold in 57kg Freestyle Wrestling."],
  ["In which two major cities of Japan was Asian Games 2026 held?", ["Tokyo and Yokohama", "Aichi and Nagoya", "Osaka and Kyoto", "Hiroshima and Nagasaki"], "Aichi and Nagoya", "The Games were held in Aichi-Nagoya."],
  ["Who is the current President of OCA, the body that organizes the Asian Games?", ["Raja Randhir Singh", "Thomas Bach", "PT Usha", "Gennadiy Inketino"], "Raja Randhir Singh", "India's Raja Randhir Singh is the President of the Olympic Council of Asia (OCA)."],
  ["Who won a historic Gold medal for India in Women's Golf at Asian Games 2026?", ["Aditi Ashok", "Pranavi Urs", "Diksha Dagar", "Avani Prashant"], "Pranavi Urs", "Pranavi Urs delivered a stellar performance to win Gold in Women's Golf."],
  ["Whom did the Men's Hockey Team defeat to win Gold at Asian Games 2026?", ["Pakistan", "Japan", "South Korea", "Malaysia"], "Japan", "The Indian Men's Hockey Team defeated host Japan to win Gold."],
  ["What is the official motto of Asian Games 2026?", ["Heart to Heart", "Imagine One Asia", "Ever Onward", "Rising Asia"], "Imagine One Asia", "The motto of the 2026 edition is Imagine One Asia."],
  ["Which medal did India's Women's 4x400m Relay Team win at Asian Games 2026?", ["Gold", "Silver", "Bronze", "Fourth Place"], "Gold", "Kiran Pahal, Poovamma, Prachi, and Vithya Ramraj won Gold."],
  ["What rank did India achieve in the medal tally at the first Asian Games (1951)?", ["First", "Second", "Third", "Fourth"], "Second", "At the 1951 New Delhi Asian Games, India finished second with 15 Gold medals."],
  ["Where will the upcoming 21st Asian Games be held in 2030?", ["Riyadh, Saudi Arabia", "Doha, Qatar", "Tashkent, Uzbekistan", "Bangkok, Thailand"], "Doha, Qatar", "The 2030 Games will be held in Doha, and the 2034 Games in Riyadh."],
  ["How many total sports were included in the 20th Asian Games 2026?", ["40", "43", "46", "50"], "43 sports", "The event included 43 sports and 469 Gold medal events."],
]

function SectionHeading({ icon: Icon, eyebrow, title }: { icon: typeof Trophy; eyebrow: string; title: string }) {
  return <div className="mb-7 flex items-start gap-3"><div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><Icon className="size-5" /></div><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700">{eyebrow}</p><h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{title}</h2></div></div>
}

function MedalCard({ value, label, note, tone }: { value: string; label: string; note?: string; tone: string }) {
  return <div className={`rounded-2xl border p-4 ${tone}`}><p className="text-3xl font-black tracking-tight text-slate-950">{value}</p><p className="mt-1 text-sm font-bold text-slate-700">{label}</p>{note && <p className="mt-2 text-xs text-slate-500">{note}</p>}</div>
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return <div className="overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full min-w-[560px] border-collapse text-left text-sm"><thead><tr className="bg-slate-950 text-white">{headers.map((header) => <th key={header} className="px-4 py-3 font-bold">{header}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={row[0]} className={`border-t border-slate-200 ${row[0] === "India" ? "bg-orange-50 font-bold" : row[0] === "Total" ? "bg-emerald-50 font-bold" : index % 2 ? "bg-slate-50/70" : "bg-white"}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`} className="px-4 py-3 text-slate-700">{cell}</td>)}</tr>)}</tbody></table></div>
}

function QuizCard({ question, index }: { question: (typeof questions)[number]; index: number }) {
  const [open, setOpen] = useState(false)
  const [prompt, options, answer, explanation] = question
  return <div className="rounded-2xl border border-slate-200 bg-white shadow-sm"><button type="button" onClick={() => setOpen(!open)} className="flex w-full items-start justify-between gap-4 p-5 text-left" aria-expanded={open}><span><span className="mb-2 inline-flex rounded-full bg-orange-100 px-2.5 py-1 text-xs font-black text-orange-700">Q{index + 1}</span><span className="block font-bold leading-6 text-slate-900">{prompt}</span></span><ChevronDown className={`mt-1 size-5 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} /></button><div className="px-5 pb-5"><div className="grid gap-2 sm:grid-cols-2">{options.map((option, optionIndex) => <div key={option} className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600"><span className="mr-2 font-bold text-slate-400">{String.fromCharCode(65 + optionIndex)}.</span>{option}</div>)}</div>{open && <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4"><p className="font-black text-emerald-800">Answer: {answer}</p><p className="mt-1 text-sm leading-6 text-emerald-900/80">{explanation}</p></div>}</div></div>
}

export default function AsianGamesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-orange-200">
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur print:static"><div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"><a href="#top" className="flex items-center gap-2 font-black tracking-tight"><span className="flex size-9 items-center justify-center rounded-xl bg-slate-950 text-sm text-white">CET</span><span className="hidden sm:inline">cettest.site</span></a><nav className={`${menuOpen ? "absolute left-0 right-0 top-full flex border-b border-slate-200 bg-white p-4" : "hidden"} flex-col gap-3 text-sm font-bold text-slate-600 sm:static sm:flex sm:flex-row sm:items-center sm:border-0 sm:bg-transparent sm:p-0`}><a href="#highlights" onClick={() => setMenuOpen(false)} className="hover:text-orange-600">Highlights</a><a href="#medals" onClick={() => setMenuOpen(false)} className="hover:text-orange-600">Medal tally</a><a href="#winners" onClick={() => setMenuOpen(false)} className="hover:text-orange-600">Gold winners</a><a href="#quiz" onClick={() => setMenuOpen(false)} className="hover:text-orange-600">MCQs</a></nav><button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></div></header>
    <main id="top">
      <section className="relative overflow-hidden border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-emerald-50"><div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"><div className="max-w-3xl"><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1.5 text-xs font-black uppercase tracking-wider text-orange-700"><Trophy className="size-4" /> All exam special · 2026</div><h1 className="text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">Asian Games 2026 <span className="text-orange-600">—</span><br className="hidden sm:block" /> Master Notes &amp; MCQs</h1><p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">India&apos;s performance, flag bearers, medal tally, players and 2026 current affairs — structured for UPSSSC, SSC, HSSC CET and other competitive exams.</p><a href="https://cettest.site" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700">Join cettest.site for recruitment updates <ArrowRight className="size-4" /></a></div><div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 sm:absolute sm:bottom-12 sm:right-8 sm:mt-0 sm:w-[390px]"><div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm"><p className="text-2xl font-black text-orange-600">20th</p><p className="mt-1 text-xs font-bold text-slate-500">Edition</p></div><div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm"><p className="text-2xl font-black text-emerald-600">85</p><p className="mt-1 text-xs font-bold text-slate-500">India medals</p></div><div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm"><p className="text-2xl font-black text-slate-900">43</p><p className="mt-1 text-xs font-bold text-slate-500">Sports</p></div></div></div></section>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <section id="highlights" className="scroll-mt-24"><SectionHeading icon={Flag} eyebrow="Section 01 · Remember these" title="Asian Games 2026 — Key Highlights" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><MedalCard value="19 Sep – 04 Oct" label="Venue & dates" note="Aichi-Nagoya, Japan" tone="border-orange-200 bg-orange-50" /><MedalCard value="Imagine One Asia" label="Official motto" note="Mascot: HONOHON" tone="border-sky-200 bg-sky-50" /><MedalCard value="Manu Bhaker" label="Opening flag bearer" note="With Pawan Sehrawat" tone="border-emerald-200 bg-emerald-50" /><MedalCard value="Neeru Dhandha" label="Closing flag bearer" note="Shooting · Trap Champion" tone="border-violet-200 bg-violet-50" /></div></section>
        <section id="medals" className="mt-20 scroll-mt-24"><SectionHeading icon={Medal} eyebrow="Section 02 · India at the Games" title="Performance & Medal Stats" /><div className="grid gap-4 sm:grid-cols-4"><MedalCard value="4th" label="Medal tally rank" tone="border-slate-200 bg-white" /><MedalCard value="21" label="Gold medals" note="28 in 19th edition" tone="border-yellow-200 bg-yellow-50" /><MedalCard value="27" label="Silver medals" note="38 in 19th edition" tone="border-slate-200 bg-white" /><MedalCard value="37" label="Bronze medals" note="41 in 19th edition" tone="border-orange-200 bg-orange-50" /></div><div className="mt-5 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-5 text-sm leading-7 text-slate-700"><strong className="text-slate-950">Exam note:</strong> India made history at Hangzhou 2023 with 107 medals (28 Gold, 38 Silver, 41 Bronze). At Aichi-Nagoya 2026, India finished 4th again with 85 medals (21 Gold, 27 Silver, 37 Bronze).</div><div className="mt-8"><h3 className="mb-4 text-lg font-black">Top 5 countries</h3><DataTable headers={["Rank", "Country", "Gold", "Silver", "Bronze", "Total"]} rows={countryTally} /></div></section>
        <section id="winners" className="mt-20 scroll-mt-24"><SectionHeading icon={Award} eyebrow="Section 04 · India&apos;s champions" title="Major Sports & Gold Medal Winners" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><details open className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between font-black"><span className="flex items-center gap-2"><span className="text-xl">01</span> Shooting</span><ChevronDown className="size-4 transition-transform group-open:rotate-180" /></summary><p className="mt-4 text-sm leading-7 text-slate-600">Neeru Dhandha (Women&apos;s Trap Gold); Kamaljeet &amp; Suruchi Singh (10m Air Pistol Mixed Team); Keenan Chenai &amp; Neeru Dhandha (Trap Mixed Team Gold).</p></details><details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between font-black"><span className="flex items-center gap-2"><span className="text-xl">02</span> Archery</span><ChevronDown className="size-4 transition-transform group-open:rotate-180" /></summary><p className="mt-4 text-sm leading-7 text-slate-600">Women&apos;s Compound Team (Jyoti Surekha Vennam, Chikitha, Preethika); Mixed Compound Team (Sahil Jadhav &amp; Chikitha); Kumkum Mohda (Women&apos;s Recurve Individual).</p></details><details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between font-black"><span className="flex items-center gap-2"><span className="text-xl">03</span> Team sports</span><ChevronDown className="size-4 transition-transform group-open:rotate-180" /></summary><p className="mt-4 text-sm leading-7 text-slate-600">Kabaddi: men (Pawan Sehrawat) and women (Ritu Negi). Cricket: men (Shreyas Iyer) and women (Harmanpreet Kaur). Hockey: men (Harmanpreet Singh) and women (Salima Tete).</p></details><details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between font-black"><span className="flex items-center gap-2"><span className="text-xl">04</span> Boxing &amp; Wrestling</span><ChevronDown className="size-4 transition-transform group-open:rotate-180" /></summary><p className="mt-4 text-sm leading-7 text-slate-600">Lovlina Borgohain (75kg), Parveen Hooda (65kg), Aman Sehrawat (57kg Freestyle) and Sujeet Kalkal (65kg Freestyle).</p></details></div></section>
        <section className="mt-20"><SectionHeading icon={Trophy} eyebrow="Section 05 · Quick revision" title="Sport-wise India Medal Breakdown" /><DataTable headers={["Sport", "Gold", "Silver", "Bronze", "Total"]} rows={sportTally} /></section>
        <section id="quiz" className="mt-20 scroll-mt-24"><SectionHeading icon={CircleHelp} eyebrow="Sections 06–08 · Test yourself" title="Exam-Oriented MCQs — India Special" /><p className="mb-6 max-w-2xl text-sm leading-6 text-slate-600">Try each question before revealing the answer. Use these 20 questions as a rapid revision set for UPSSSC, SSC, HSSC CET and other exams.</p><div className="grid gap-4 lg:grid-cols-2">{questions.map((question, index) => <QuizCard key={question[0]} question={question} index={index} />)}</div></section>
        <section className="mt-20 rounded-3xl bg-slate-950 p-7 text-white sm:p-10"><div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">Keep preparing</p><h2 className="mt-2 text-2xl font-black sm:text-3xl">More current affairs. Better scores.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">Join cettest.site to get recruitment alerts, practice tests and exam-ready study material first.</p></div><a href="https://cettest.site" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-bold text-white hover:bg-orange-400">Visit cettest.site <ArrowRight className="size-4" /></a></div></section>
      </div>
    </main>
    <a href="https://cettest.site" className="fixed bottom-4 right-4 z-30 hidden items-center gap-2 rounded-full bg-orange-600 px-4 py-3 text-sm font-black text-white shadow-xl shadow-orange-600/25 transition hover:bg-orange-700 sm:flex"><Users className="size-4" /> Join cettest.site</a>
    <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">© 2026 cettest.site · Asian Games 2026 exam notes</footer>
  </div>
}
