"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Languages, BookOpen, Landmark, Scale
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "tribunal-q1",
        questionEn: "With reference to the Tribunals Reforms Bill, 2026, consider the following statements: 1. It proposes to establish a National Tribunals Commission for appointments and oversight of tribunals. 2. The proposed Commission includes two Judicial Members and two Technical Members besides the Chairperson. 3. The Bill proposes to replace Articles 323A and 323B with a new constitutional framework. Which are correct?",
        questionHi: "न्यायाधिकरण सुधार विधेयक, 2026 के संदर्भ में: 1. यह नियुक्तियों और निगरानी के लिए राष्ट्रीय न्यायाधिकरण आयोग की स्थापना का प्रस्ताव करता है। 2. आयोग में अध्यक्ष के अलावा दो न्यायिक और दो तकनीकी सदस्य शामिल हैं। 3. यह अनुच्छेद 323A और 323B को बदलने का प्रस्ताव करता है। कौन से सही हैं?",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "a",
        explanationEn: "Statement 3 is incorrect: The Bill does not replace Articles 323A and 323B. These constitutional provisions remain the basis for tribunals.",
        explanationHi: "कथन 3 गलत है: विधेयक अनुच्छेद 323A और 323B को प्रतिस्थापित नहीं करता।",
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

export default function TribunalsReformsPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:text-purple-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Polity & Judiciary</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Tribunals Reforms Bill, 2026</h1>
                    <p className="text-xl text-muted-foreground mb-6">न्यायाधिकरण सुधार विधेयक, 2026</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-purple-600" /><span>Passed: Aug 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Scale className="w-4 h-4 text-purple-600" /><span>Ministry: Law & Justice</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-purple-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-purple-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-purple-50/60 rounded-xl p-5 border border-purple-100">
                            <h3 className="text-xs font-semibold uppercase text-purple-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />Proposes to repeal the Tribunals Reforms Act, 2021.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />Creates a National Tribunals Commission (NTC) for appointments and oversight.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />Aims to strengthen tribunal independence, transparency, and uniformity.</li>
                            </ul>
                        </div>
                        <div className="bg-fuchsia-50/60 rounded-xl p-5 border border-fuchsia-100">
                            <h3 className="text-xs font-semibold uppercase text-fuchsia-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-fuchsia-500 mt-0.5 shrink-0" />न्यायाधिकरण सुधार अधिनियम, 2021 को निरस्त करने का प्रस्ताव।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-fuchsia-500 mt-0.5 shrink-0" />नियुक्तियों और निगरानी के लिए राष्ट्रीय न्यायाधिकरण आयोग (NTC) का गठन।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-fuchsia-500 mt-0.5 shrink-0" />न्यायाधिकरणों की स्वतंत्रता, पारदर्शिता और एकरूपता को मजबूत करना।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Landmark className="w-5 h-5 text-purple-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य विशेषताएं</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">National Tribunals Commission</h3>
                            <ul className="space-y-2 text-sm">
                                <li>• <strong>Chairperson:</strong> Former SC Judge or Chief Justice of a High Court.</li>
                                <li>• <strong>Judicial Members:</strong> 2 (Chief Justice or Judge of a High Court).</li>
                                <li>• <strong>Technical Members:</strong> 2 subject-matter experts.</li>
                                <li>• <strong>Appointment:</strong> Central Govt appoints, with mandatory consultation with CJI for judicial appointments.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">Tenure & Removal</h3>
                            <ul className="space-y-1.5 text-sm">
                                <li>• <strong>Chairperson:</strong> 5-year fixed tenure or up to 70 years.</li>
                                <li>• <strong>Members:</strong> 5-year fixed tenure or up to 67 years.</li>
                                <li>• <strong>Re-appointment:</strong> Permitted based on performance appraisals.</li>
                                <li>• <strong>Removal Grounds:</strong> Insolvency, moral turpitude, incapacity, abuse of position, conflict of interest.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Constitutional Evolution / संवैधानिक विकास</h3>
                        <p className="text-sm mb-2"><strong>42nd Amendment Act (1976):</strong> Added Part XIV-A, introducing Article 323A (Administrative Tribunals) and Article 323B (Tribunals for other matters).</p>
                        <p className="text-sm"><strong>Swaran Singh Committee (1976):</strong> Recommended institutionalizing tribunals to reduce judicial backlogs.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> Which among the following (Provision - Part of the Constitution) is not correctly matched? <em>(UPPSC PCS Prelims 2023)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Tribunals - Part XI (Incorrect, it is Part XIV-A).</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-purple-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                 <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
   <Link href="/current-affairs/by-topic/ramsar-sites-2026"><Button variant="outline" className="gap-2 cursor-pointer">Next: Ramsar Sites <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}