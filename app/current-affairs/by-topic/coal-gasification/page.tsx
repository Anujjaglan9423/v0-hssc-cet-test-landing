"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "coal-q1",
        questionEn: "With reference to Coal/Lignite Gasification Scheme: 1. Max financial incentive is 50% of plant & machinery cost. 2. Coal linkage tenure extended up to 30 years. 3. Syngas primarily consists of CO2 and N2. How many are correct?",
        questionHi: "कोयला/लिग्नाइट गैसीकरण योजना: 1. अधिकतम 50% वित्तीय प्रोत्साहन। 2. कोयला लिंकेज 30 वर्ष तक। 3. सिनगैस में CO2 और N2। कितने सही हैं?",
        options: [
            { key: "a", en: "Only one", hi: "केवल एक" },
            { key: "b", en: "Only two", hi: "केवल दो" },
            { key: "c", en: "All three", hi: "सभी तीन" },
            { key: "d", en: "None", hi: "कोई नहीं" },
        ],
        correctKey: "a",
        explanationEn: "Only Statement 2 is correct. Statement 1 — max incentive is 20% (not 50%). Statement 3 — Syngas is mainly CO and H2 (not CO2 and N2).",
        explanationHi: "केवल कथन 2 सही। कथन 1 — अधिकतम 20% (50% नहीं)। कथन 3 — सिनगैस में CO और H2 (CO2 और N2 नहीं)।",
    },
    {
        id: "coal-q2",
        questionEn: "What is the national target for coal gasification by 2030 under the National Coal Gasification Mission (NCGM: 2021)?",
        questionHi: "राष्ट्रीय कोयला गैसीकरण मिशन (NCGM: 2021) के तहत 2030 तक कोयला गैसीकरण का राष्ट्रीय लक्ष्य क्या है?",
        options: [
            { key: "a", en: "50 million tonnes", hi: "50 मिलियन टन" },
            { key: "b", en: "75 million tonnes", hi: "75 मिलियन टन" },
            { key: "c", en: "100 million tonnes", hi: "100 मिलियन टन" },
            { key: "d", en: "150 million tonnes", hi: "150 मिलियन टन" },
        ],
        correctKey: "c",
        explanationEn: "NCGM (2021) targets 100 million tonnes (MT) of coal gasification by 2030. The new scheme specifically targets 75 MT.",
        explanationHi: "NCGM (2021) का लक्ष्य 2030 तक 100 मिलियन टन (MT)। नई योजना विशेष रूप से 75 MT का लक्ष्य रखती है।",
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

export default function CoalGasificationPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-100 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-stone-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-stone-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-stone-200 text-stone-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Energy</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Coal/Lignite Gasification Scheme</h1>
                    <p className="text-xl text-muted-foreground mb-6">सतही कोयला/लिग्नाइट गैसीकरण योजना</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-stone-700" /><span>Approved 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Flame className="w-4 h-4 text-stone-700" /><span>₹37,500 crore outlay</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-stone-700" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-stone-700" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-stone-100/60 rounded-xl p-5 border border-stone-200">
                            <h3 className="text-xs font-semibold uppercase text-stone-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />Union Cabinet approved ₹37,500 crore financial outlay to launch the Scheme for Promotion of Surface Coal/Lignite Gasification Projects.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />Offers financial support to convert coal and lignite into Synthesis Gas (Syngas) for value-added chemicals and fuels.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />Target: gasification of 75 MT coal/lignite by 2030 (contributing to national target of 100 MT by 2030).</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />केंद्रीय मंत्रिमंडल ने ₹37,500 करोड़ के वित्तीय आवंटन को मंजूरी दी।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />कोयला/लिग्नाइट को सिनगैस में परिवर्तित करने हेतु वित्तीय सहायता।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />लक्ष्य: 2030 तक 75 MT (राष्ट्रीय लक्ष्य 100 MT)।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Flame className="w-5 h-5 text-stone-700" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Financial Incentive: direct support capped at max 20% of the cost of Plant and Machinery (transparent competitive bidding).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Coal Linkage Tenure: extended up to 30 years for long-term policy certainty.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Technology-Agnostic: any technological model allowed, but indigenous technologies encouraged.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Import Substitution: aims to cut import dependence on LNG (50%), Methanol (80-90%), Urea (~20%).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Coal gasification is a thermo-chemical process (1,000°C) reacting coal/lignite with O2 and steam to make Syngas — not direct burning.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Syngas: highly combustible mixture of CO and H2; feedstock for synthetic natural gas, electricity, urea, ammonia.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Surface coal: extracted by open-cast (not deep tunnels) — highly efficient.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Coal accounts for 55% of India's total energy mix.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Projected to create ~50,000 direct + indirect jobs across 25 projects in coal-bearing regions.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />वित्तीय प्रोत्साहन: प्लांट और मशीनरी लागत के अधिकतम 20% तक।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />कोयला लिंकेज: 30 वर्ष तक विस्तारित।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />तकनीक-निरपेक्ष: स्वदेशी तकनीकों को प्रोत्साहन।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />आयात प्रतिस्थापन: LNG (50%), मेथनॉल (80-90%), यूरिया (~20%)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />गैसीकरण (1,000°C) में कोयला + O2 + भाप → सिनगैस, सीधा जलाना नहीं।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />सिनगैस: CO + H2 का ज्वलनशील मिश्रण; सिंथेटिक गैस, बिजली, यूरिया, अमोनिया के लिए।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />सतही कोयला: ओपन-कास्ट (गहरी सुरंग नहीं)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />कोयला भारत के कुल ऊर्जा मिश्रण का 55%।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />25 परियोजनाओं में ~50,000 प्रत्यक्ष + अप्रत्यक्ष रोजगार।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> 1. Coal ash contains arsenic, lead, mercury. 2. Coal-fired plants release SO2 and NOx. 3. High ash content in Indian coal. <em>(UPSC Prelims 2020)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> All three are correct.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-stone-700" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-stone-200 text-stone-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/unpaid-domestic-labour"><Button variant="outline" className="gap-2 cursor-pointer">Next: Unpaid Domestic Labour <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}