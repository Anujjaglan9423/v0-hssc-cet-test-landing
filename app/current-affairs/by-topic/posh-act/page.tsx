"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "posh-q1",
        questionEn:
            "With reference to the PoSH Act, 2013, consider: 1. Every workplace with at least 10 employees must constitute an Internal Committee (IC). 2. The IC must be headed by a woman senior-level employee and must include at least one external member. 3. The Act applies only to the organized sector and permanent employees. Which are correct?",
        questionHi:
            "PoSH अधिनियम, 2013 के संदर्भ में: 1. कम से कम 10 कर्मचारियों वाले प्रत्येक कार्यस्थल पर ICC गठित करना अनिवार्य। 2. ICC का नेतृत्व वरिष्ठ महिला कर्मचारी करेगी और कम से कम एक बाहरी सदस्य शामिल होगा। 3. अधिनियम केवल संगठित क्षेत्र और स्थायी कर्मचारियों पर लागू। कौन सही हैं?",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "a",
        explanationEn:
            "Statement 3 is WRONG: the Act covers ALL sectors (organised and unorganised) and ALL workers (interns, daily wages, ad-hoc, etc.). Statements 1 and 2 are correct.",
        explanationHi:
            "कथन 3 गलत है: अधिनियम सभी क्षेत्रों (संगठित और असंगठित) और सभी श्रमिकों (इंटर्न, दैनिक वेतन, तदर्थ, आदि) को कवर करता है। कथन 1 और 2 सही हैं।",
    },
    {
        id: "posh-q2",
        questionEn: "The 'SHe-Box' portal is an initiative managed by which of the following?",
        questionHi: "'SHe-Box' पोर्टल निम्नलिखित में से किसकी पहल है?",
        options: [
            { key: "a", en: "National Commission for Women (NCW)", hi: "राष्ट्रीय महिला आयोग (NCW)" },
            { key: "b", en: "Ministry of Labour and Employment", hi: "श्रम और रोजगार मंत्रालय" },
            { key: "c", en: "Ministry of Women and Child Development (MoWCD)", hi: "महिला एवं बाल विकास मंत्रालय (MoWCD)" },
            { key: "d", en: "Ministry of Home Affairs", hi: "गृह मंत्रालय" },
        ],
        correctKey: "c",
        explanationEn: "SHe-Box (Sexual Harassment electronic Box) is an initiative by MoWCD.",
        explanationHi: "SHe-Box (यौन उत्पीड़न इलेक्ट्रॉनिक बॉक्स) महिला एवं बाल विकास मंत्रालय (MoWCD) की पहल है।",
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

export default function PoshActPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-pink-700 hover:text-pink-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Women & Law</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">PoSH Act, 2013</h1>
                    <p className="text-xl text-muted-foreground mb-6">कार्यस्थल पर महिलाओं का यौन उत्पीड़न अधिनियम, 2013</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-pink-600" /><span>2013 (in focus 2026)</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><ShieldCheck className="w-4 h-4 text-pink-600" /><span>MoWCD</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-pink-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-pink-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-pink-50/60 rounded-xl p-5 border border-pink-100">
                            <h3 className="text-xs font-semibold uppercase text-pink-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />Recent controversies at the TCS Nashik unit highlighted critical gaps in institutional compliance and workplace ethics, bringing the PoSH Act, 2013 into focus.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />The Act is a comprehensive legislative mechanism for a safe, secure, and enabling environment for women free from sexual harassment in both formal and informal sectors.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />TCS नासिक यूनिट में कथित यौन उत्पीड़न विवादों ने संस्थागत अनुपालन और कार्यस्थल नैतिकता में गंभीर कमियों को उजागर किया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />PoSH अधिनियम औपचारिक और अनौपचारिक दोनों क्षेत्रों में महिलाओं को सुरक्षित वातावरण प्रदान करने वाला व्यापक विधायी तंत्र है।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><ShieldCheck className="w-5 h-5 text-pink-600" /><h2 className="text-2xl font-bold">Key Provisions / मुख्य प्रावधान</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Internal Complaints Committee (ICC): mandatory for every employer with 10+ employees, at each office/branch. Presiding officer must be a senior-level woman employee.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Timeline: complaint must be filed within 3 months from the date of the incident (or the last incident in a series).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Powers of Civil Court: ICC has the powers of a civil court under the CPC, 1908 for conducting inquiry.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Inspired by Vishaka Guidelines (1997) — SC in Vishaka v. State of Rajasthan.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Constitutional Backing: Art 14, 15, 19(1)(g), 21.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />SHe-Box: MoWCD's centralized online complaint management portal for government and private sectors.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />इंटरनल कंप्लेंट्स कमिटी (ICC): 10 या अधिक कर्मचारियों वाले प्रत्येक नियोक्ता के लिए प्रत्येक कार्यालय में गठन अनिवार्य। पीठासीन अधिकारी वरिष्ठ महिला कर्मचारी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />समय सीमा: घटना की तारीख (या श्रृंखला में अंतिम घटना) से 3 माह के भीतर शिकायत।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />सिविल कोर्ट की शक्तियाँ: जांच के लिए ICC को CPC, 1908 के तहत सिविल कोर्ट के समान शक्तियां।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />विशाखा दिशानिर्देश (1997) पर आधारित — विशाखा बनाम राजस्थान राज्य।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />संवैधानिक समर्थन: अनु. 14, 15, 19(1)(g), 21।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />SHe-Box: MoWCD की केंद्रीकृत ऑनलाइन शिकायत प्रणाली।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> In which year did the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act come into existence? <em>(UPPSC GIC Lecturer Sociology 2021)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> 2013</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-pink-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/adi-shankaracharya"><Button variant="outline" className="gap-2 cursor-pointer">Next: Adi Shankaracharya <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}