"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Languages, BookOpen, Landmark, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface MCQ {
    id: string
    questionEn: string
    questionHi: string
    options: { key: string; en: string; hi: string }[]
    correctKey: string
    explanationEn: string
    explanationHi: string
}

export interface TopicData {
    title: string
    titleHi: string
    category: string
    date: string
    ministry: string
    overviewEn: string[]
    overviewHi: string[]
    features: { title: string; points: string[] }[]
    backgroundTitle: string
    background: string[]
    pyq: string[]
    mcqs: MCQ[]
    previous?: { title: string; href: string }
    next?: { title: string; href: string }
}

export function MCQBlock({ mcq }: { mcq: MCQ }) {
    const [selected, setSelected] = useState<string | null>(null)
    const isCorrect = selected === mcq.correctKey
    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="mb-4">
                <p className="font-semibold text-base">{mcq.questionEn}</p>
                <p className="text-sm text-muted-foreground mt-1">{mcq.questionHi}</p>
            </div>
            <div className="space-y-2 mb-4">
                {mcq.options.map(opt => {
                    let extra = ""
                    if (selected !== null) {
                        if (opt.key === mcq.correctKey) extra = "bg-green-100 border-green-400"
                        else if (opt.key === selected) extra = "bg-red-100 border-red-400"
                    }
                    return (
                        <button type="button" key={opt.key} disabled={selected !== null} onClick={() => setSelected(opt.key)}
                            className={`w-full text-left flex items-start gap-3 rounded-lg border p-3 text-sm cursor-pointer hover:bg-muted/50 disabled:cursor-default ${extra}`}>
                            <span className="font-bold uppercase w-5 shrink-0 text-muted-foreground">{opt.key}.</span>
                            <span><span className="block">{opt.en}</span><span className="block text-xs text-muted-foreground mt-0.5">{opt.hi}</span></span>
                        </button>
                    )
                })}
            </div>
            {selected !== null && (
                <div role="status" className={`p-3 rounded-lg border-l-4 ${isCorrect ? "bg-green-50 border-green-500" : "bg-red-50 border-red-400"}`}>
                    <div className="flex items-center gap-2 mb-1">
                        {isCorrect ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <HelpCircle className="w-4 h-4 text-red-500" />}
                        <span className="text-sm font-semibold">{isCorrect ? "Correct! / सही उत्तर!" : `Correct: ${mcq.correctKey.toUpperCase()}`}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{mcq.explanationEn}</p>
                    <p className="text-sm text-muted-foreground mt-1">{mcq.explanationHi}</p>
                </div>
            )}
        </div>
    )
}

export default function TopicPage({ topic }: { topic: TopicData }) {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-5 pb-12  md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:text-purple-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="flex"><div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · {topic.category}</div></div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">{topic.title}</h1>
                    <p className="text-xl text-muted-foreground mb-6">{topic.titleHi}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-purple-600" /><span>{topic.date}</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Scale className="w-4 h-4 text-purple-600" /><span>{topic.ministry}</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-purple-600" /><span>{topic.mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-purple-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-purple-50/60 rounded-xl p-5 border border-purple-100">
                            <h3 className="text-xs font-semibold uppercase text-purple-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">{topic.overviewEn.map((s, i) => <li key={i} className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />{s}</li>)}</ul>
                        </div>
                        <div className="bg-fuchsia-50/60 rounded-xl p-5 border border-fuchsia-100">
                            <h3 className="text-xs font-semibold uppercase text-fuchsia-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">{topic.overviewHi.map((s, i) => <li key={i} className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-fuchsia-500 mt-0.5 shrink-0" />{s}</li>)}</ul>
                        </div>
                    </div>
                </section>
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Landmark className="w-5 h-5 text-purple-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य विशेषताएं</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">{topic.features.map((feature, i) =>
                        <div key={i} className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">{feature.title}</h3>
                            <ul className="space-y-2 text-sm">{feature.points.map((point, j) => <li key={j}>• {point}</li>)}</ul>
                        </div>
                    )}</div>
                </section>
                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> {topic.backgroundTitle}</h3>
                        {topic.background.map((p, i) => <p key={i} className="text-sm mb-2 last:mb-0">{p}</p>)}
                    </div>
                </section>
                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        {topic.pyq.map((p, i) => <p key={i} className="text-sm mb-2 last:mb-0">{p}</p>)}
                    </div>
                </section>
                <section className="mb-10">
                    <div className="flex flex-wrap items-center gap-2 mb-4"><Target className="w-5 h-5 text-purple-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{topic.mcqs.map(m => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>
                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        {topic.previous && <Link href={topic.previous.href}><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> {topic.previous.title}</Button></Link>}
                        {topic.next && <Link href={topic.next.href}><Button variant="outline" className="gap-2 cursor-pointer">Next: {topic.next.title} <ChevronRight className="w-4 h-4" /></Button></Link>}
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}
