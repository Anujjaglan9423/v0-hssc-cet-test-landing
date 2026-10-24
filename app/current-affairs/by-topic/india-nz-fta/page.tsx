"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "nz-q1",
        questionEn: "With reference to the India–New Zealand FTA (2026): 1. Both agreed to reciprocal 100% tariff elimination on all tariff lines. 2. New Zealand committed USD 20 billion investment in India over 15 years. 3. The FTA has strict Rules of Origin for zero-duty access. How many are correct?",
        questionHi: "भारत-न्यूज़ीलैंड FTA (2026): 1. सभी टैरिफ लाइनों पर पारस्परिक 100% उन्मूलन। 2. NZ ने 15 वर्षों में USD 20 बिलियन निवेश। 3. शून्य-शुल्क के लिए सख्त Rules of Origin। कितने सही हैं?",
        options: [
            { key: "a", en: "Only one", hi: "केवल एक" },
            { key: "b", en: "Only two", hi: "केवल दो" },
            { key: "c", en: "All three", hi: "सभी तीन" },
            { key: "d", en: "None", hi: "कोई नहीं" },
        ],
        correctKey: "b",
        explanationEn: "Statement 1 is WRONG — it's not fully reciprocal: NZ offers 100% duty-free access for Indian exports, but India liberalised only 70.03% of its tariff lines. Statements 2 and 3 are correct.",
        explanationHi: "कथन 1 गलत — पूर्ण पारस्परिक नहीं: NZ भारतीय निर्यात के लिए 100% शुल्क-मुक्त, लेकिन भारत ने केवल 70.03% लाइनें उदार बनाईं। कथन 2 और 3 सही हैं।",
    },
    {
        id: "nz-q2",
        questionEn: "Which of the following items is on India's strict Exclusion List under the India–NZ FTA?",
        questionHi: "भारत-NZ FTA के तहत कौन सी वस्तु भारत की सख्त बहिष्करण सूची में है?",
        options: [
            { key: "a", en: "Wine", hi: "वाइन" },
            { key: "b", en: "Dairy products (milk, cheese, butter)", hi: "डेयरी उत्पाद (दूध, पनीर, मक्खन)" },
            { key: "c", en: "Petroleum oil", hi: "पेट्रोलियम तेल" },
            { key: "d", en: "Select electrical machinery", hi: "चुनिंदा विद्युत मशीनरी" },
        ],
        correctKey: "b",
        explanationEn: "Dairy (milk, cheese, butter), onions, sugar, artificial honey, copper and aluminum are on India's strict Exclusion List (~30% of tariff lines).",
        explanationHi: "डेयरी (दूध, पनीर, मक्खन), प्याज, चीनी, कृत्रिम शहद, तांबा, एल्युमिनियम भारत की सख्त बहिष्करण सूची (~30% लाइनें) में हैं।",
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

export default function IndiaNZFTAPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700 hover:text-cyan-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Trade & Economy</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">India–New Zealand Free Trade Agreement</h1>
                    <p className="text-xl text-muted-foreground mb-6">भारत–न्यूज़ीलैंड मुक्त व्यापार समझौता</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-cyan-600" /><span>Signed 27 April 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><FileCheck className="w-4 h-4 text-cyan-600" /><span>New Delhi</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-cyan-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-cyan-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-cyan-50/60 rounded-xl p-5 border border-cyan-100">
                            <h3 className="text-xs font-semibold uppercase text-cyan-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />Union Ministry of Commerce and Industry announced formal signing of the historic India–New Zealand FTA on 27 April 2026 in New Delhi.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />Signed by India's Commerce Minister Piyush Goyal and New Zealand's Trade and Investment Minister Todd McClay.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />वाणिज्य और उद्योग मंत्रालय ने 27 अप्रैल 2026 को नई दिल्ली में IN-NZ FTA पर हस्ताक्षर की घोषणा की।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />पीयूष गोयल और टॉड मैक्ले द्वारा हस्ताक्षर।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><FileCheck className="w-5 h-5 text-cyan-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Tariff Elimination: 100% of Indian exports enter New Zealand without tariffs — big push for MSMEs, textiles, leather, footwear, gems & jewellery.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />India liberalised 70.03% of tariff lines (~95% of bilateral trade value).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Exclusion List (~30% of tariff lines): dairy (milk, cheese, butter), onions, sugar, artificial honey, copper, aluminum.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Investment: New Zealand to facilitate USD 20 billion in investments over 15 years.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Services & Talent Mobility: easier pathways for skilled professionals and students.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Cultural Integration (first-of-its-kind): dedicated chapter on cultural & traditional knowledge; Mutual Recognition Arrangement for AYUSH + Māori medicine.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Rules of Origin (ROO): strict product-specific criteria to prevent "trade routing" (e.g., Chinese goods entering via NZ).</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />टैरिफ उन्मूलन: भारत के 100% निर्यात बिना टैरिफ NZ में — MSME, वस्त्र, चमड़ा, फुटवियर, रत्न-आभूषण को बढ़ावा।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />भारत ने 70.03% टैरिफ लाइनें उदार (~95% द्विपक्षीय व्यापार मूल्य)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />बहिष्करण सूची (~30%): डेयरी, प्याज, चीनी, कृत्रिम शहद, तांबा, एल्युमिनियम।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />निवेश: 15 वर्षों में USD 20 बिलियन।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />सेवाएं और टैलेंट मोबिलिटी: कुशल पेशेवरों/छात्रों के लिए आसान मार्ग।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />सांस्कृतिक एकीकरण (पहली बार): AYUSH + माओरी चिकित्सा के लिए पारस्परिक मान्यता।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Rules of Origin (ROO): "ट्रेड राउटिंग" रोकने के लिए सख्त मानदंड।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> "भारत–ऑस्ट्रेलिया आर्थिक सहयोग और व्यापार समझौता (Ind–Aus ECTA)" के संदर्भ में: 1. यह FTA के लिए पहली पहल है। 2. बैठक में भारत के वाणिज्य सचिव श्री सुनील बर्धवाल ने भाग लिया।</p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> (c) केवल 1</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-cyan-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/seat-mission"><Button variant="outline" className="gap-2 cursor-pointer">Next: SEHAT Mission <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}