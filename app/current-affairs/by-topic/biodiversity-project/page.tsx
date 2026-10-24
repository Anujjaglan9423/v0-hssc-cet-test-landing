"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, TreePine,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "bio-q1",
        questionEn:
            "Recently, a 5-year project was launched by the MoEFCC and NBA to enhance grassroots-level biodiversity governance. Which two states are the primary focus areas?",
        questionHi:
            "हाल ही में, MoEFCC और NBA द्वारा जमीनी स्तर पर जैव विविधता गवर्नेंस बढ़ाने के लिए 5-वर्षीय परियोजना शुरू की गई। प्राथमिक रूप से किन दो राज्यों पर ध्यान?",
        options: [
            { key: "a", en: "Karnataka and Assam", hi: "कर्नाटक और असम" },
            { key: "b", en: "Kerala and Uttarakhand", hi: "केरल और उत्तराखंड" },
            { key: "c", en: "Tamil Nadu and Meghalaya", hi: "तमिलनाडु और मेघालय" },
            { key: "d", en: "Maharashtra and Sikkim", hi: "महाराष्ट्र और सिक्किम" },
        ],
        correctKey: "c",
        explanationEn:
            "The 5-year project (2025–2030) is implemented in Tamil Nadu (Sathyamangalam landscape: Mudumalai & Sathyamangalam Tiger Reserves) and Meghalaya (Garo Hills: Nokrek Biosphere, Balpakram NP, Siju WLS).",
        explanationHi:
            "5-वर्षीय परियोजना (2025-2030) तमिलनाडु (सत्यमंगलम: मुदुमलाई और सत्यमंगलम टाइगर रिजर्व) और मेघालय (गारो हिल्स: नोकरेक, बालपक्रम, सिजू) में लागू।",
    },
    {
        id: "bio-q2",
        questionEn:
            "With reference to the Global Environment Facility (GEF), consider: 1. It was established in 1991. 2. Only developed countries are donors to it. Which is/are correct?",
        questionHi:
            "वैश्विक पर्यावरण सुविधा (GEF) के संदर्भ में: 1. यह 1991 में स्थापित हुई। 2. केवल विकसित देश ही इसमें दाता हैं। कौन सही है/हैं?",
        options: [
            { key: "a", en: "1 only", hi: "केवल 1" },
            { key: "b", en: "2 only", hi: "केवल 2" },
            { key: "c", en: "Both 1 and 2", hi: "1 और 2 दोनों" },
            { key: "d", en: "Neither 1 nor 2", hi: "न तो 1, न ही 2" },
        ],
        correctKey: "d",
        explanationEn:
            "GEF was established in 1992 at the Rio Earth Summit (not 1991), and both developed AND some developing countries contribute to it. So neither statement is correct.",
        explanationHi:
            "GEF 1992 में रियो पृथ्वी सम्मेलन में स्थापित (1991 नहीं), और विकसित तथा कुछ विकासशील दोनों देश योगदान करते हैं। अतः दोनों कथन गलत हैं।",
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

export default function BiodiversityProjectPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Environment & Biodiversity</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">MoEFCC–NBA 5-Year Biodiversity Project</h1>
                    <p className="text-xl text-muted-foreground mb-6">MoEFCC–NBA 5-वर्षीय जैव विविधता परियोजना</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-green-600" /><span>2025–2030</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><TreePine className="w-4 h-4 text-green-600" /><span>USD 4.88M GEF/UNDP grant</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-green-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-green-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50/60 rounded-xl p-5 border border-green-100">
                            <h3 className="text-xs font-semibold uppercase text-green-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />The MoEFCC and NBA launched a five-year national initiative (2025–2030): 'Strengthening Institutional Capacities for Securing Biodiversity Conservation Commitments'.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Joint initiative between the Government of India, GEF and UNDP, supported by a USD 4.88 million grant.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Aims to integrate conservation goals into local governance through community-led actions.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />MoEFCC और NBA ने 5-वर्षीय राष्ट्रीय पहल (2025–2030) शुरू की: 'Strengthening Institutional Capacities for Securing Biodiversity Conservation Commitments'।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />भारत सरकार, GEF और UNDP की संयुक्त पहल, USD 4.88 मिलियन अनुदान।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />संरक्षण लक्ष्यों को स्थानीय शासन में एकीकृत करना — समुदाय-आधारित कार्य।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><TreePine className="w-5 h-5 text-green-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Focus landscapes: Sathyamangalam (TN) — Mudumalai & Sathyamangalam Tiger Reserves; Garo Hills (Meghalaya) — Nokrek Biosphere Reserve, Balpakram NP, Siju WLS.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Gram Panchayat Development Plans (GDPPs): core strategy is to mainstream biodiversity into GDPPs.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />ABS: operationalizes Access and Benefit Sharing under Biological Diversity Act, 2002.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Strategic Alignment: NBSAP 2024–2030, global 30×30 goal, Paris Agreement commitments.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />CBD (1992 Rio) — Nagoya Protocol (2010) governs ABS; Cartagena Protocol (2000) covers biosafety.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />KMGBF (2022, COP15): 30x30 target — conserve at least 30% of global land, coastal & marine areas by 2030.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />NBA: established 2003 in Chennai; statutory body under Biological Diversity Act, 2002.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />फोकस परिदृश्य: सत्यमंगलम (तमिलनाडु) — मुदुमलाई और सत्यमंगलम टाइगर रिजर्व; गारो हिल्स (मेघालय) — नोकरेक, बालपक्रम, सिजू।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />ग्राम पंचायत विकास योजनाएं (GDPPs): जैव विविधता को GDPPs में मुख्यधारा में लाना।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />ABS: जैव विविधता अधिनियम, 2002 के तहत ABS को क्रियान्वित करना।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />रणनीतिक समन्वय: NBSAP 2024–2030, 30×30 लक्ष्य, पेरिस समझौता।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />CBD (1992 रियो) — नागोया प्रोटोकॉल (2010) ABS; कार्टाजेना प्रोटोकॉल (2000) जैव सुरक्षा।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />KMGBF (2022, COP15): 30×30 — 2030 तक वैश्विक भूमि, तटीय, समुद्री क्षेत्रों के 30% का संरक्षण।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />NBA: 2003 में चेन्नई में स्थापित; जैव विविधता अधिनियम, 2002 के तहत वैधानिक निकाय।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> With reference to the Global Environment Facility, which of the following statements is/are correct? 1. It was established in 1991. 2. Only the developed countries are donors to it. <em>(UPPSC Pre 2018)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Neither 1 nor 2 (GEF established 1992; both developed and some developing countries are donors).</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-green-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/ganga-expressway"><Button variant="outline" className="gap-2 cursor-pointer">Next: Ganga Expressway <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}