"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "uae-q1",
        questionEn: "India's Cochin Shipyard Limited (CSL) and Dubai's Drydocks World recently signed an agreement to establish an offshore fabrication and vessel repair hub at which location?",
        questionHi: "भारत की CSL और दुबई की Drydocks World ने किस स्थान पर अपतटीय निर्माण और पोत मरम्मत केंद्र के लिए समझौता किया?",
        options: [
            { key: "a", en: "Mundra, Gujarat", hi: "मुंद्रा, गुजरात" },
            { key: "b", en: "Kochi, Kerala", hi: "कोच्चि, केरल" },
            { key: "c", en: "Vadinar, Gujarat", hi: "वाडिनार, गुजरात" },
            { key: "d", en: "Visakhapatnam, Andhra Pradesh", hi: "विशाखापत्तनम, आंध्र प्रदेश" },
        ],
        correctKey: "c",
        explanationEn: "CSL and Drydocks World will establish the hub at Vadinar, Gujarat.",
        explanationHi: "CSL और Drydocks World वाडिनार, गुजरात में केंद्र स्थापित करेंगे।",
    },
    {
        id: "uae-q2",
        questionEn: "Which statement about the 2026 India–UAE outcomes is correct?",
        questionHi: "2026 भारत-UAE निष्कर्षों के बारे में कौन सा कथन सही है?",
        options: [
            { key: "a", en: "UAE will store up to 30 million barrels in India's SPRs", hi: "UAE भारत के SPR में 30 मिलियन बैरल तक भंडारण करेगा" },
            { key: "b", en: "They agreed to build a 4 Exaflop supercomputer", hi: "4 Exaflop सुपरकंप्यूटर बनाने पर सहमति" },
            { key: "c", en: "UAE will exit India's Strategic Petroleum Reserves", hi: "UAE भारत के SPR से बाहर" },
            { key: "d", en: "No AI infrastructure agreement was signed", hi: "कोई AI समझौता नहीं" },
        ],
        correctKey: "a",
        explanationEn: "The pact deepens UAE's role in India's SPRs, allowing storage of up to 30 million barrels. They agreed on an 8 Exaflop (not 4) AI supercomputer.",
        explanationHi: "यह समझौता SPR में UAE की भूमिका बढ़ाता है — 30 मिलियन बैरल तक। 8 Exaflop AI सुपरकंप्यूटर (4 नहीं)।",
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

export default function IndiaUAEPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · International Relations</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">India–UAE Bilateral Agreements 2026</h1>
                    <p className="text-xl text-muted-foreground mb-6">भारत–UAE द्विपक्षीय समझौते 2026</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-teal-600" /><span>2026 (Abu Dhabi)</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Handshake className="w-4 h-4 text-teal-600" /><span>CEPA-2022 foundation</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-teal-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-teal-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-teal-50/60 rounded-xl p-5 border border-teal-100">
                            <h3 className="text-xs font-semibold uppercase text-teal-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />Indian PM met UAE President Sheikh Mohamed bin Zayed Al Nahyan in Abu Dhabi; both sides signed key strategic agreements.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />2026 outcomes build on the operational framework of CEPA-2022 (Comprehensive Economic Partnership Agreement).</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />भारतीय PM ने अबू धाबी में UAE राष्ट्रपति शेख मोहम्मद बिन जायद अल नाहयान से मुलाकात; प्रमुख समझौतों पर हस्ताक्षर।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />2026 के समझौते CEPA-2022 की नींव पर बने हैं।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Handshake className="w-5 h-5 text-teal-600" /><h2 className="text-2xl font-bold">Key Agreements / मुख्य समझौते</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Strategic Crude Storage: deepen UAE's role in India's SPRs — storage of up to 30 million barrels.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Sovereign AI Infrastructure: jointly build an 8 Exaflop supercomputing cluster in India.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Maritime Logistics: Cochin Shipyard Ltd (CSL) + Drydocks World (Dubai) to set up an offshore fabrication and vessel repair hub at Vadinar, Gujarat.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Do You Know: UAE is India's largest LPG supplier, ~40% of India's LPG imports.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />रणनीतिक कच्चा तेल भंडारण: SPR में UAE की भागीदारी — 30 मिलियन बैरल तक।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />संप्रभु AI इंफ्रास्ट्रक्चर: भारत में संयुक्त 8 Exaflop सुपरकंप्यूटिंग क्लस्टर।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />समुद्री लॉजिस्टिक्स: CSL + Drydocks World — वाडिनार, गुजरात में अपतटीय निर्माण और पोत मरम्मत केंद्र।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />क्या आप जानते हैं: UAE भारत का सबसे बड़ा LPG आपूर्तिकर्ता, ~40% आयात।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> "प्रतिभाशाली प्रारम्भिक पेशेवरों के लिए गतिशीलता व्यवस्था योजना" (MATES) के संदर्भ में: 1. यह भारत और ऑस्ट्रेलिया के बीच द्विपक्षीय ढांचा है। 2. 18-30 वर्ष के भारतीय स्नातकों को दो वर्ष तक ऑस्ट्रेलिया में रहने/काम करने की पेशकश।</p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> (d) 1 और 2 दोनों</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-teal-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/india-nz-fta"><Button variant="outline" className="gap-2 cursor-pointer">Next: India–NZ FTA <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}