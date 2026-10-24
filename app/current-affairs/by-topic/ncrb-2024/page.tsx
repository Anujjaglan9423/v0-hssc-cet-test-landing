"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, ShieldAlert,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "ncrb-q1",
        questionEn:
            "In the latest NCRB 2024 reports, despite an overall decline in crimes, which categories recorded a 'sharp rise'? 1. Cybercrimes 2. Drug overdose deaths 3. Crimes against Scheduled Tribes 4. Crimes against Women.",
        questionHi:
            "नवीनतम NCRB 2024 रिपोर्टों में, अपराधों में समग्र गिरावट के बावजूद किन श्रेणियों में 'तीव्र वृद्धि' दर्ज हुई? 1. साइबर अपराध 2. ड्रग ओवरडोज से मौतें 3. अनुसूचित जनजातियों के विरुद्ध अपराध 4. महिलाओं के विरुद्ध अपराध।",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1, 2 and 4 only", hi: "केवल 1, 2 और 4" },
            { key: "d", en: "All of the above", hi: "उपर्युक्त सभी" },
        ],
        correctKey: "a",
        explanationEn:
            "Cybercrimes grew 17%+ and drug overdose deaths rose ~50%. Crimes against women fell marginally (-1.5%) and crimes against STs dropped sharply (-23.1%).",
        explanationHi:
            "साइबर अपराध 17%+ बढ़े और ड्रग ओवरडोज से मौतें ~50% बढ़ीं। महिलाओं के विरुद्ध अपराध मामूली रूप से घटे (-1.5%) और ST के विरुद्ध अपराध तेजी से गिरे (-23.1%)।",
    },
    {
        id: "ncrb-q2",
        questionEn:
            "According to the latest NCRB data, which of the following trends regarding 'Crimes Against Women' is correct?",
        questionHi:
            "NCRB के नवीनतम आंकड़ों के अनुसार, 'महिलाओं के विरुद्ध अपराध' के संबंध में कौन सा रुझान सही है?",
        options: [
            { key: "a", en: "Overall crimes against women saw a massive drop of 23%", hi: "महिलाओं के विरुद्ध समग्र अपराधों में 23% की भारी गिरावट" },
            { key: "b", en: "The majority of cases were registered under 'Cruelty by Husband or Relatives'", hi: "अधिकांश मामले 'पति या रिश्तेदारों द्वारा क्रूरता' के तहत दर्ज" },
            { key: "c", en: "Cybercrimes against women became negligible", hi: "महिलाओं के खिलाफ साइबर अपराध नगण्य हो गए" },
            { key: "d", en: "Fewer crimes were reported in urban areas", hi: "शहरी क्षेत्रों में कम अपराध दर्ज" },
        ],
        correctKey: "b",
        explanationEn:
            "Crimes against women declined only marginally (1.5%). 'Cruelty by Husband or Relatives' remains the largest single category.",
        explanationHi:
            "महिलाओं के विरुद्ध अपराध केवल मामूली रूप से (1.5%) घटे। 'पति या रिश्तेदारों द्वारा क्रूरता' सबसे बड़ी एकल श्रेणी बनी हुई है।",
    },
]

function MCQBlock({ mcq }: { mcq: MCQ }) {
    const [selected, setSelected] = useState<string | null>(null)
    const isCorrect = selected === mcq.correctKey
    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="mb-4"><p className="font-semibold text-base">{mcq.questionEn}</p><p className="text-sm text-muted-foreground mt-1">{mcq.questionHi}</p></div>
            <div className="space-y-2 mb-4">
                {mcq.options.map((opt) => {
                    let extra = ""
                    if (selected !== null) {
                        if (opt.key === mcq.correctKey) extra = "bg-green-100 border-green-400"
                        else if (opt.key === selected) extra = "bg-red-100 border-red-400"
                    }
                    return (
                        <div key={opt.key} onClick={() => selected === null && setSelected(opt.key)} className={`flex items-start gap-3 rounded-lg border p-3 text-sm cursor-pointer hover:bg-muted/50 ${extra}`}>
                            <span className="font-bold uppercase w-5 shrink-0 text-muted-foreground">{opt.key}.</span>
                            <div><div>{opt.en}</div><div className="text-xs text-muted-foreground mt-0.5">{opt.hi}</div></div>
                        </div>
                    )
                })}
            </div>
            {selected !== null && (
                <div className={`p-3 rounded-lg border-l-4 ${isCorrect ? "bg-green-50 border-green-500" : "bg-red-50 border-red-400"}`}>
                    <div className="flex items-center gap-2 mb-1">{isCorrect ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <HelpCircle className="w-4 h-4 text-red-500" />}<span className="text-sm font-semibold">{isCorrect ? "Correct! / सही उत्तर!" : `Correct: ${mcq.correctKey.toUpperCase()}`}</span></div>
                    <p className="text-sm text-muted-foreground">{mcq.explanationEn}</p>
                    <p className="text-sm text-muted-foreground mt-1">{mcq.explanationHi}</p>
                </div>
            )}
        </div>
    )
}

export default function NCRB2024Page() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-slate-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Crime & Governance</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">NCRB Crime in India & ADSI 2024</h1>
                    <p className="text-xl text-muted-foreground mb-6">NCRB की भारत में अपराध और ADSI रिपोर्ट 2024</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-slate-700" /><span>Released 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><ShieldAlert className="w-4 h-4 text-slate-700" /><span>Ministry of Home Affairs</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-slate-700" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-slate-700" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-100/60 rounded-xl p-5 border border-slate-200">
                            <h3 className="text-xs font-semibold uppercase text-slate-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />MHA released two major annual reports: Crime in India 2024 and Accidental Deaths & Suicides in India (ADSI) 2024, compiled by NCRB.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />Mixed national trend: overall registered crimes fell 6%, but cybercrimes and drug overdose deaths rose sharply.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />MHA ने दो प्रमुख वार्षिक रिपोर्ट जारी कीं: Crime in India 2024 और ADSI 2024, NCRB द्वारा संकलित।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />मिश्रित राष्ट्रीय प्रवृत्ति: कुल पंजीकृत अपराध 6% घटे, लेकिन साइबर अपराध और ड्रग ओवरडोज मौतें तेजी से बढ़ीं।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><ShieldAlert className="w-5 h-5 text-slate-700" /><h2 className="text-2xl font-bold">Key Facts / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Overall Crime: 58.86 lakh cognisable crimes in 2024 — 6% decline from 2023. Crime rate fell from 448.3 to 418.9 per lakh.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Cybercrime: up 17%+ (86,420 → 1,01,928) — reflects a shift toward online financial fraud and digital scams.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Crimes against Women: marginal 1.5% decline to 4.41 lakh; rate fell to 64.6. Domestic violence ('Cruelty by Husband or Relatives') remains the largest single share.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />SC crimes: -3.6% (UP, MP, Bihar highest); ST crimes: -23.1%.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Suicides (ADSI): 1,70,746 nationally — daily wage workers largest group.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Agriculture suicides: 10,546 total; agricultural labourers (5,913) -- land-owning cultivators (4,633).</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />समग्र अपराध: 2024 में 58.86 लाख संज्ञेय अपराध — 2023 से 6% कम। अपराध दर 448.3 से 418.9 प्रति लाख।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />साइबर अपराध: 17%+ वृद्धि (86,420 → 1,01,928) — ऑनलाइन वित्तीय धोखाधड़ी और डिजिटल स्कैम।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />महिलाओं के विरुद्ध: 1.5% मामूली गिरावट, 4.41 लाख; दर 64.6। घरेलू हिंसा ('पति या रिश्तेदारों द्वारा क्रूरता') सबसे बड़ी श्रेणी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />SC अपराध: -3.6% (UP, MP, बिहार सर्वाधिक); ST अपराध: -23.1%।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />आत्महत्या (ADSI): राष्ट्रीय स्तर पर 1,70,746 — दैनिक वेतन भोगी सबसे बड़ा वर्ग।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />कृषि आत्महत्या: 10,546 कुल; कृषि मजदूर (5,913) -- भूमि-स्वामी (4,633)।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> According to NCRB data for 2021, what is the average number of rape cases registered daily in India? <em>(UPMRC JE S&T 2023)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Approximately 87 cases per day (2021 data).</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-slate-700" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/biodiversity-project"><Button variant="outline" className="gap-2 cursor-pointer">Next: Biodiversity Project <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}