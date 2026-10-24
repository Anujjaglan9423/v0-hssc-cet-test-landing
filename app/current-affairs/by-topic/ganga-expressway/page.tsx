"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, Route,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "ganga-q1",
        questionEn:
            "With reference to the Ganga Expressway (April 2026): 1. It is a greenfield project originating in Meerut and terminating in Prayagraj. 2. The alignment passes through 15 districts in UP. 3. It features an emergency airstrip in the Shahjahanpur district for the IAF. How many are correct?",
        questionHi:
            "गंगा एक्सप्रेसवे (अप्रैल 2026) के संदर्भ में: 1. यह ग्रीनफील्ड परियोजना है जो मेरठ से प्रयागराज तक। 2. यह UP के 15 जिलों से गुजरता है। 3. शाहजहांपुर में IAF के लिए आपातकालीन हवाई पट्टी। कितने सही हैं?",
        options: [
            { key: "a", en: "Only one", hi: "केवल एक" },
            { key: "b", en: "Only two", hi: "केवल दो" },
            { key: "c", en: "All three", hi: "सभी तीन" },
            { key: "d", en: "None", hi: "कोई नहीं" },
        ],
        correctKey: "b",
        explanationEn:
            "Statement 2 is WRONG — the expressway passes through exactly 12 core districts, not 15. Statements 1 and 3 are correct.",
        explanationHi:
            "कथन 2 गलत — एक्सप्रेसवे ठीक 12 मुख्य जिलों से गुजरता है, 15 नहीं। कथन 1 और 3 सही हैं।",
    },
    {
        id: "ganga-q2",
        questionEn:
            "Which of the following pairs about UP expressways is INCORRECT?",
        questionHi:
            "UP एक्सप्रेसवे के बारे में निम्नलिखित में से कौन सा युग्म गलत है?",
        options: [
            { key: "a", en: "Purvanchal Expressway : Lucknow to Ghazipur", hi: "पूर्वाचल एक्सप्रेसवे : लखनऊ से गाजीपुर" },
            { key: "b", en: "Bundelkhand Expressway : Chitrakoot to Etawah", hi: "बुंदेलखंड एक्सप्रेसवे : चित्रकूट से इटावा" },
            { key: "c", en: "Yamuna Expressway : Greater Noida to Agra", hi: "यमुना एक्सप्रेसवे : ग्रेटर नोएडा से आगरा" },
            { key: "d", en: "Gorakhpur Link Expressway : Gorakhpur to Varanasi", hi: "गोरखपुर लिंक एक्सप्रेसवे : गोरखपुर से वाराणसी" },
        ],
        correctKey: "d",
        explanationEn:
            "Gorakhpur Link Expressway connects Gorakhpur to Azamgarh (~91 km), not Varanasi. Other three are correct.",
        explanationHi:
            "गोरखपुर लिंक एक्सप्रेसवे गोरखपुर को आजमगढ़ (~91 किमी) से जोड़ता है, वाराणसी से नहीं। अन्य तीन सही हैं।",
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

export default function GangaExpresswayPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700 hover:text-cyan-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Infrastructure</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Ganga Expressway Project</h1>
                    <p className="text-xl text-muted-foreground mb-6">गंगा एक्सप्रेसवे परियोजना</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-cyan-600" /><span>Inaugurated 29 April 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Route className="w-4 h-4 text-cyan-600" /><span>594 km · 12 districts</span></div>
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
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />The PM officially inaugurated the 594-km Ganga Expressway on 29 April 2026 in Hardoi, UP.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />Greenfield, access-controlled mega infrastructure — bridges the economic and logistical gap between Western (Meerut) and Eastern UP (Prayagraj).</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />Constructed as a six-lane greenfield corridor.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />PPP model on DBFOT basis, estimated ₹36,230 crore+.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />Developed by UPEIDA.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />29 अप्रैल 2026 को हरदोई, UP में 594-किमी गंगा एक्सप्रेसवे का उद्घाटन।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />ग्रीनफील्ड, नियंत्रित-प्रवेश मेगा अवसंरचना — पश्चिमी (मेरठ) और पूर्वी UP (प्रयागराज) के बीच अंतर।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />सिक्स-लेन ग्रीनफील्ड कॉरिडोर।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />DBFOT पर PPP मॉडल, ₹36,230 करोड़+।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />UPEIDA द्वारा विकसित।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Route className="w-5 h-5 text-cyan-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Route: Bijauli (Meerut) → Judapur Dandu (Prayagraj).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />12 districts: Meerut, Hapur, Bulandshahr, Amroha, Sambhal, Budaun, Shahjahanpur, Hardoi, Unnao, Raebareli, Pratapgarh, Prayagraj.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Defence Readiness: 3.5-km emergency landing strip in Shahjahanpur for IAF aircraft.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Other UP expressways: Yamuna (~165 km), Agra-Lucknow (~302 km), Purvanchal (~340 km), Bundelkhand (~296 km), Gorakhpur Link (~91 km).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Greenfield vs Brownfield: Greenfield = new land; Brownfield = upgrade existing infrastructure.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />UP is India's "expressway state" — highest operational + under-construction expressways.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />मार्ग: बिजौली (मेरठ) → जुदापुर दांडू (प्रयागराज)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />12 जिले: मेरठ, हापुड़, बुलंदशहर, अमरोहा, संभल, बदायूं, शाहजहांपुर, हरदोई, उन्नाव, रायबरेली, प्रतापगढ़, प्रयागराज।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />रक्षा तैयारी: शाहजहांपुर में IAF के लिए 3.5-किमी आपातकालीन लैंडिंग पट्टी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />अन्य UP एक्सप्रेसवे: यमुना (~165), आगरा-लखनऊ (~302), पूर्वाचल (~340), बुंदेलखंड (~296), गोरखपुर लिंक (~91)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />ग्रीनफील्ड बनाम ब्राउनफील्ड: नई भूमि बनाम मौजूदा उन्नयन।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />UP भारत का "एक्सप्रेसवे स्टेट" — सर्वाधिक संचालित + निर्माणाधीन।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> 'Purvanchal Express Way' in Uttar Pradesh will not pass through which of the following cities? <em>(UPPSC Civil Service 2018)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Consult official alignment — the expressway runs Lucknow → Ghazipur via Barabanki, Amethi, Sultanpur, Ayodhya, Ambedkar Nagar, Azamgarh, Mau. Cities like Varanasi / Kanpur are NOT on the route.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-cyan-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/india-ndc-2035"><Button variant="outline" className="gap-2 cursor-pointer">Next: India NDC 2031–35 <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}