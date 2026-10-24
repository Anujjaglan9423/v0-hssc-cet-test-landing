"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "capf-q1",
        questionEn:
            "Consider the following statements regarding the Central Armed Police Forces (General Administration) Act, 2026: 1. It mandates that all Director General (DG) and Special Director General (SDG) posts in the CAPFs must be filled exclusively by internal cadre officers. 2. It acts as an umbrella law to uniform service conditions for the CRPF, BSF, CISF, ITBP, and Assam Rifles. 3. The Act grants the Central Government the power to frame rules that override previous judicial pronouncements regarding CAPF administration.",
        questionHi:
            "केंद्रीय सशस्त्र पुलिस बल (सामान्य प्रशासन) अधिनियम, 2026 के संदर्भ में निम्नलिखित कथनों पर विचार करें: 1. यह अनिवार्य करता है कि CAPF में सभी DG और SDG पद विशेष रूप से आंतरिक कैडर के अधिकारियों द्वारा भरे जाने चाहिए। 2. यह CRPF, BSF, CISF, ITBP और असम राइफल्स के लिए सेवा शर्तों को एक समान करने के लिए एक अम्ब्रेला कानून के रूप में कार्य करता है। 3. यह अधिनियम केंद्र सरकार को ऐसे नियम बनाने की शक्ति देता है जो CAPF प्रशासन के संबंध में पिछली न्यायिक घोषणाओं को ओवरराइड करते हैं।",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "3 only", hi: "केवल 3" },
            { key: "c", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "d", en: "1, 2, and 3", hi: "1, 2, और 3" },
        ],
        correctKey: "b",
        explanationEn:
            "Statement 1 is wrong — 100% of DG and SDG posts are reserved for IPS officers on deputation, not internal cadre. Statement 2 is a trap — the Act covers 5 core CAPFs but NOT Assam Rifles. Statement 3 is correct (notwithstanding clause).",
        explanationHi:
            "कथन 1 गलत है — DG और SDG पदों का 100% प्रतिनियुक्ति पर IPS अधिकारियों के लिए आरक्षित है, आंतरिक कैडर के लिए नहीं। कथन 2 ट्रैप है — अधिनियम 5 प्रमुख CAPF को कवर करता है लेकिन असम राइफल्स को नहीं। कथन 3 सही है (नोंटविथस्टैंडिंग क्लॉज)।",
    },
    {
        id: "capf-q2",
        questionEn:
            "Consider the following pairs of Central Armed Police Forces and their primary mandated roles: 1. SSB — Guarding the Indo-Myanmar border. 2. ITBP — Guarding the Indo-China border. 3. CISF — Security of critical infrastructure and industrial installations. How many of the above pairs are correctly matched?",
        questionHi:
            "केंद्रीय सशस्त्र पुलिस बलों और उनकी प्राथमिक अभिवार्य भूमिकाओं के निम्नलिखित युग्मों पर विचार करें: 1. SSB — भारत-म्यांमार सीमा की सुरक्षा। 2. ITBP — भारत-चीन सीमा की सुरक्षा। 3. CISF — महत्वपूर्ण बुनियादी ढांचे और औद्योगिक प्रतिष्ठानों की सुरक्षा। उपरोक्त में से कितने युग्म सही सुमेलित हैं?",
        options: [
            { key: "a", en: "Only one", hi: "केवल एक" },
            { key: "b", en: "Only two", hi: "केवल दो" },
            { key: "c", en: "All three", hi: "सभी तीन" },
            { key: "d", en: "None", hi: "कोई नहीं" },
        ],
        correctKey: "b",
        explanationEn:
            "Pairs 2 and 3 are correct. Pair 1 is wrong — SSB guards the Indo-Nepal and Indo-Bhutan borders; the Indo-Myanmar border is primarily guarded by Assam Rifles.",
        explanationHi:
            "युग्म 2 और 3 सही हैं। युग्म 1 गलत है — SSB भारत-नेपाल और भारत-भूटान सीमाओं की रक्षा करता है; भारत-म्यांमार सीमा मुख्य रूप से असम राइफल्स द्वारा सुरक्षित है।",
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

export default function CAPFAct2026Page() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-stone-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-stone-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-stone-100 text-stone-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Polity & Governance</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">CAPF (General Administration) Act, 2026</h1>
                    <p className="text-xl text-muted-foreground mb-6">केंद्रीय सशस्त्र पुलिस बल (सामान्य प्रशासन) अधिनियम, 2026</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-stone-600" /><span>Notified 10 April 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Shield className="w-4 h-4 text-stone-600" /><span>Ministry of Home Affairs</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-stone-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-stone-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-stone-50/60 rounded-xl p-5 border border-stone-100">
                            <h3 className="text-xs font-semibold uppercase text-stone-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />The Central Armed Police Forces (General Administration) Act, 2026 was officially notified in the Gazette on 10 April 2026 after receiving the President's assent.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />It serves as a new "umbrella law" for India's major paramilitary forces, administered by the Ministry of Home Affairs (MHA).</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />Core objective: establish a uniform legal framework for recruitment, promotion and service conditions across the CAPFs and legally codify the command and leadership structure.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />यह अधिनियम राष्ट्रपति की सहमति के बाद 10 अप्रैल 2026 को राजपत्र में अधिसूचित किया गया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />यह भारत के प्रमुख अर्धसैनिक बलों के लिए एक नया "अम्ब्रेला कानून" है, जो गृह मंत्रालय (MHA) द्वारा प्रशासित है।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />मुख्य उद्देश्य: भर्ती, पदोन्नति और सेवा शर्तों के लिए एक समान विधिक ढांचा स्थापित करना तथा कमांड और नेतृत्व संरचना को विधिक रूप से परिभाषित करना।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Shield className="w-5 h-5 text-stone-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य विशेषताएं</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Standardizes the administrative framework for five core forces: CRPF, BSF, CISF, ITBP and SSB. (Note: Assam Rifles and NSG are NOT covered under this specific umbrella act.)</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Deputation Quota: 50% of IG posts; minimum 67% of ADG posts; 100% of SDG and DG posts reserved for IPS officers on deputation.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Overriding Authority: "Notwithstanding clause" grants the Central Government power to frame rules overriding any existing law, rule or previous court judgments.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Effectively overrides the Supreme Court's 2025 verdict (Sanjay Prakash vs. Union of India) that had directed progressive reduction of IPS deputation in CAPFs.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Previously, each CAPF was governed by its own separate statute (e.g., CRPF Act 1949, BSF Act 1968), leading to inconsistencies and litigation.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Force Roles — CRPF: largest paramilitary force, internal security & counter-insurgency. BSF & ITBP: border guarding (Pakistan/Bangladesh and China). CISF: critical infrastructure security. SSB: Nepal and Bhutan borders.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />पांच प्रमुख बलों के लिए प्रशासनिक ढांचे को मानकीकृत करता है: CRPF, BSF, CISF, ITBP और SSB। (नोट: असम राइफल्स और NSG इस अधिनियम के तहत शामिल नहीं हैं।)</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />प्रतिनियुक्त कोटा: IG के 50% पद; ADG के न्यूनतम 67% पद; SDG और DG के 100% पद IPS अधिकारियों के लिए आरक्षित।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />ओवरराइडिंग प्राधिकार: "नोंटविथस्टैंडिंग क्लॉज" केंद्र सरकार को किसी भी मौजूदा कानून, नियम या पिछले अदालती फैसलों को ओवरराइड करने की शक्ति देता है।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />यह सुप्रीम कोर्ट के 2025 के फैसले (संजय प्रकाश बनाम भारत संघ) को प्रभावी रूप से ओवरराइड करता है, जिसने CAPFs में IPS प्रतिनियुक्ति को क्रमिक रूप से कम करने का निर्देश दिया था।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />पहले, प्रत्येक CAPF अपने स्वयं के अलग कानून (जैसे CRPF अधिनियम 1949, BSF अधिनियम 1968) द्वारा शासित होता था, जिससे विसंगतियां और मुकदमेबाजी होती थी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />बलों की भूमिकाएं — CRPF: सबसे बड़ा अर्धसैनिक बल, आंतरिक सुरक्षा। BSF और ITBP: सीमा सुरक्षा (पाकिस्तान/बांग्लादेश और चीन)। CISF: महत्वपूर्ण बुनियादी ढांचे की सुरक्षा। SSB: नेपाल और भूटान सीमाएं।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> निम्न में से कौन-से श्रम संबंधी अधिनियमों को 'मजदूरी संहिता, 2019' में सम्मिलित किया गया है? I. न्यूनतम मजदूरी अधिनियम II. बोनस भुगतान अधिनियम III. संविदा श्रम अधिनियम IV. समान पारिश्रमिक अधिनियम</p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> (d) I, II, III और IV</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-stone-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/artemis-ii"><Button variant="outline" className="gap-2 cursor-pointer">Next: Artemis II <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}