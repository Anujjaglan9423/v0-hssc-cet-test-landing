"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Hammer } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "vb-q1",
        questionEn: "With reference to VB-G RAM G Act, 2025: 1. It provides 150 days statutory guarantee. 2. It maintains 100% central funding for unskilled wages. 3. It empowers states to suspend works up to 60 days for peak agricultural seasons. Which are correct?",
        questionHi: "VB-G RAM G अधिनियम, 2025: 1. 150 दिन की वैधानिक गारंटी। 2. अकुशल मजदूरी के लिए 100% केंद्रीय फंडिंग। 3. राज्यों को 60 दिन तक कार्य निलंबित करने की शक्ति। कौन सही हैं?",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "3 only", hi: "केवल 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "c",
        explanationEn: "Statement 1 is wrong — it guarantees exactly 125 days (not 150). Statement 2 is wrong — funding shifts to 60:40 (or 90:10 special states). Statement 3 is correct.",
        explanationHi: "कथन 1 गलत — ठीक 125 दिन (150 नहीं)। कथन 2 गलत — 60:40 (विशेष राज्य 90:10)। कथन 3 सही है।",
    },
    {
        id: "vb-q2",
        questionEn: "Assertion (A): VB-G RAM G Act, 2025 introduces a 'normative allocation' ceiling for states. Reason (R): Any expenditure beyond the ceiling must be borne entirely by the Central Government.",
        questionHi: "अभिकथन (A): VB-G RAM G अधिनियम 2025 राज्यों के लिए 'मानक आवंटन' सीमा लागू करता है। कारण (R): सीमा से अधिक व्यय केंद्र सरकार द्वारा वहन किया जाएगा।",
        options: [
            { key: "a", en: "Both correct, R explains A", hi: "दोनों सही, R व्याख्या है" },
            { key: "b", en: "Both correct, R does not explain A", hi: "दोनों सही, R व्याख्या नहीं" },
            { key: "c", en: "A correct, R incorrect", hi: "A सही, R गलत" },
            { key: "d", en: "A incorrect, R correct", hi: "A गलत, R सही" },
        ],
        correctKey: "c",
        explanationEn: "Reason (R) is incorrect — any expenditure beyond the normative ceiling must be borne entirely by the respective State Government, not the Centre.",
        explanationHi: "कारण (R) गलत — सीमा से अधिक व्यय संबंधित राज्य सरकार द्वारा वहन किया जाएगा, केंद्र द्वारा नहीं।",
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

export default function VBRAMGPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Governance & Rural</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">VB-G RAM G Act, 2025</h1>
                    <p className="text-xl text-muted-foreground mb-6">विकसित भारत–रोजगार और आजीविका गारंटी मिशन अधिनियम (ग्रामीण), 2025</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-orange-600" /><span>In force 1 July 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Hammer className="w-4 h-4 text-orange-600" /><span>Replaces MGNREGA 2005</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-orange-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-orange-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-orange-50/60 rounded-xl p-5 border border-orange-100">
                            <h3 className="text-xs font-semibold uppercase text-orange-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />Central Government notified the Viksit Bharat–Guarantee for Rozgar and Ajeevika Mission (Gramin) Act, 2025, coming into force on July 1, 2026.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />Formally repeals MGNREGA, 2005.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />Shifts from open-ended demand-driven wage model to productivity-oriented asset creation aligned with Viksit Bharat @2047.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />केंद्र सरकार ने VB-G RAM G अधिनियम 2025 की अधिसूचना जारी की — 1 जुलाई 2026 से प्रभावी।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />MGNREGA 2005 को निरस्त करता है।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />ओपन-एंडेड मांग-संचालित मॉडल से उत्पादकता-उन्मुख परिसंपत्ति निर्माण की ओर।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Hammer className="w-5 h-5 text-orange-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Enhanced statutory guarantee: 125 days of unskilled wage employment per financial year to eligible rural households (up from 100).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Restructured fiscal matrix: "normative allocation" ceiling — expenditure beyond limit borne entirely by the State Government.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Agricultural pause period: up to 60 days/year can be notified during peak harvesting/sowing.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Viksit Bharat National Rural Infrastructure Stack — restricted to 4 priority domains: water security, core rural infrastructure, livelihood infrastructure, extreme weather mitigation.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Mandatory NMMS integration, biometric authentication, spatial technology planning.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Wages paid weekly (max 14 days) via DBT; if no employment within 15 days — state pays daily unemployment allowance.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Cost-sharing: 90:10 for Himalayan/NE states; 60:40 for states/UTs with legislature; 100% central for UTs without legislature.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />125 दिन अकुशल वेतन रोजगार की गारंटी (100 से बढ़ाकर)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />पुनर्गठित राजकोषीय ढांचा: "मानक आवंटन" सीमा — अधिक व्यय राज्य सरकार द्वारा।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />कृषि विराम अवधि: 60 दिन/वर्ष तक अधिसूचित।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />विकसित भारत ग्रामीण अवसंरचना स्टैक — 4 प्राथमिकता क्षेत्र।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />NMMS, बायोमेट्रिक, स्थानिक तकनीक अनिवार्य।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />साप्ताहिक (अधिकतम 14 दिन) DBT; 15 दिन में रोजगार न मिलने पर राज्य भत्ता।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />लागत साझाकरण: 90:10 (हिमालयी/NE); 60:40 (विधायिका वाले राज्य); 100% केंद्र (बिना विधायिका UT)।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> MGNREGA vs VB-G RAM G</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs">
                                <thead className="bg-slate-200"><tr><th className="text-left p-2">Feature</th><th className="text-left p-2">MGNREGA (2005)</th><th className="text-left p-2">VB-G RAM G (2025)</th></tr></thead>
                                <tbody>
                                    <tr className="border-t"><td className="p-2">Work limit</td><td className="p-2">100 days</td><td className="p-2 font-semibold text-green-700">125 days</td></tr>
                                    <tr className="border-t"><td className="p-2">Focus</td><td className="p-2">Subsistence wage</td><td className="p-2">Assets + climate resilience + livelihood</td></tr>
                                    <tr className="border-t"><td className="p-2">Agriculture pause</td><td className="p-2">None</td><td className="p-2 font-semibold text-green-700">Up to 60 days</td></tr>
                                    <tr className="border-t"><td className="p-2">Funding</td><td className="p-2">100% central</td><td className="p-2">60:40 / 90:10 cost-sharing</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Constitutional basis: Article 41 (DPSP) — right to work. Evolution: JRY (1989), EAS (1993), SGRY (2001) → MGNREGA (2005) → VB-G RAM G (2025).</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> With reference to "National Food Security Act": 1. Covers up to 75% rural, 50% urban. 2. Special focus on nutritional support to women/children. 3. Enforced July 5, 2010. <em>(UPPSC PCS 2024)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> 1 and 2 only (NFSA came into force July 5, 2013).</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-orange-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/somnath-amrut-parv"><Button variant="outline" className="gap-2 cursor-pointer">Next: Somnath Amrut Parv <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}