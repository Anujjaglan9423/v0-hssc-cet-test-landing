"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, Fuel,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "opec-q1",
        questionEn:
            "With reference to OPEC, consider: 1. Established in 1960 during the Baghdad Conference by five founding members. 2. A permanent intergovernmental organization headquartered in Vienna, Austria, which is one of its member states. 3. The UAE is the first Persian Gulf state to officially withdraw from the bloc. How many are correct?",
        questionHi:
            "OPEC के संदर्भ में: 1. 1960 में बगदाद सम्मेलन के दौरान पांच संस्थापक सदस्यों द्वारा स्थापित। 2. विएना, ऑस्ट्रिया में मुख्यालय, जो सदस्य देशों में से एक है। 3. UAE ब्लॉक से आधिकारिक रूप से बाहर निकलने वाला पहला फारस की खाड़ी का देश। कितने सही हैं?",
        options: [
            { key: "a", en: "Only one", hi: "केवल एक" },
            { key: "b", en: "Only two", hi: "केवल दो" },
            { key: "c", en: "All three", hi: "सभी तीन" },
            { key: "d", en: "None", hi: "कोई नहीं" },
        ],
        correctKey: "a",
        explanationEn:
            "Only Statement 1 is correct. Statement 2 is wrong — Austria hosts the secretariat but is NOT an OPEC member. Statement 3 is wrong — UAE is the SECOND Persian Gulf state to leave; Qatar was first (2019).",
        explanationHi:
            "केवल कथन 1 सही है। कथन 2 गलत — ऑस्ट्रिया सचिवालय की मेजबानी करता है लेकिन OPEC सदस्य नहीं है। कथन 3 गलत — UAE दूसरा खाड़ी देश है; कतर पहला था (2019)।",
    },
    {
        id: "opec-q2",
        questionEn:
            "After the UAE's exit on 1 May 2026, how many active members does OPEC have, and which of the following is NOT a founding member?",
        questionHi:
            "1 मई 2026 को UAE के बाहर निकलने के बाद OPEC में कितने सक्रिय सदस्य बचे हैं, और निम्नलिखित में से कौन संस्थापक सदस्य नहीं है?",
        options: [
            { key: "a", en: "11 members; Nigeria is not a founder", hi: "11 सदस्य; नाइजीरिया संस्थापक नहीं" },
            { key: "b", en: "12 members; Iran is not a founder", hi: "12 सदस्य; ईरान संस्थापक नहीं" },
            { key: "c", en: "11 members; Iraq is not a founder", hi: "11 सदस्य; इराक संस्थापक नहीं" },
            { key: "d", en: "10 members; Venezuela is not a founder", hi: "10 सदस्य; वेनेजुएला संस्थापक नहीं" },
        ],
        correctKey: "a",
        explanationEn:
            "Post-UAE exit, OPEC has 11 active members: Algeria, Congo, Equatorial Guinea, Gabon, Iran, Iraq, Kuwait, Libya, Nigeria, Saudi Arabia, Venezuela. Founding members (1960): Iran, Iraq, Kuwait, Saudi Arabia, Venezuela — so Nigeria is not a founder.",
        explanationHi:
            "UAE के बाद OPEC में 11 सक्रिय सदस्य: अल्जीरिया, कांगो, इक्वेटोरियल गिनी, गैबॉन, ईरान, इराक, कुवैत, लीबिया, नाइजीरिया, सऊदी अरब, वेनेजुएला। संस्थापक (1960): ईरान, इराक, कुवैत, सऊदी अरब, वेनेजुएला — नाइजीरिया संस्थापक नहीं।",
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

export default function UAEExitOPECPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-yellow-700 hover:text-yellow-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · International Economy</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">UAE Exits OPEC and OPEC+</h1>
                    <p className="text-xl text-muted-foreground mb-6">UAE का OPEC और OPEC+ से बाहर होना</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-yellow-600" /><span>Effective 1 May 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Fuel className="w-4 h-4 text-yellow-600" /><span>11 members after exit</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-yellow-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-yellow-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-yellow-50/60 rounded-xl p-5 border border-yellow-100">
                            <h3 className="text-xs font-semibold uppercase text-yellow-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />The UAE officially announced its withdrawal from OPEC and OPEC+ effective May 1, 2026.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />Driven by the UAE's strategic imperative to maximize sovereign oil production and fund its transition to a post-oil, diversified economy.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />Production Quota Friction: strict, consensus-based OPEC quotas forced the UAE to underutilize its expanded infrastructure.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />Strategic Shift: amid the 2026 US–Iran conflict and rising tensions in the Strait of Hormuz, the exit gives the UAE greater flexibility.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />Implications for India: as the world's third-largest oil importer, this may bring lower oil prices, reduced inflation and better availability.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />UAE ने 1 मई 2026 से OPEC और OPEC+ से अलग होने की घोषणा की।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />स्वतंत्र रूप से तेल उत्पादन को अधिकतम करना तथा तेल-आधारित अर्थव्यवस्था से आगे बढ़ना।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />उत्पादन कोटा विवाद: सख्त OPEC कोटों ने UAE को विस्तारित तेल अवसंरचना का पूर्ण उपयोग नहीं करने दिया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />रणनीतिक बदलाव: 2026 अमेरिका-ईरान संघर्ष और होर्मुज जलडमरूमध्य में तनाव के बीच अधिक लचीलापन।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />भारत के लिए: तीसरा सबसे बड़ा तेल आयातक — कम कीमतें, कम मुद्रास्फीति, बेहतर उपलब्धता।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Fuel className="w-5 h-5 text-yellow-600" /><h2 className="text-2xl font-bold">Key Facts / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />OPEC Foundation: intergovernmental organization founded during the Baghdad Conference in September 1960 by Iran, Iraq, Kuwait, Saudi Arabia and Venezuela.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Current Membership (post-UAE exit): 11 active members — Algeria, Congo, Equatorial Guinea, Gabon, Iran, Iraq, Kuwait, Libya, Nigeria, Saudi Arabia, Venezuela.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Headquarters: Vienna, Austria (but Austria is NOT a member).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />OPEC+ Framework: established in 2016, integrates core OPEC members with 10 major non-OPEC oil exporters (e.g., Russia, Kazakhstan).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />UAE is the second Persian Gulf state to leave the bloc, after Qatar (2019).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Aims of OPEC: coordinate petroleum policies, ensure fair & stable prices for producers, maintain steady & affordable supply for consumers.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />OPEC की स्थापना: सितंबर 1960 में बगदाद सम्मेलन में ईरान, इराक, कुवैत, सऊदी अरब और वेनेजुएला द्वारा।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />वर्तमान सदस्य (UAE के बाद): 11 सक्रिय — अल्जीरिया, कांगो, इक्वेटोरियल गिनी, गैबॉन, ईरान, इराक, कुवैत, लीबिया, नाइजीरिया, सऊदी अरब, वेनेजुएला।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />मुख्यालय: विएना, ऑस्ट्रिया (लेकिन ऑस्ट्रिया सदस्य नहीं)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />OPEC+ फ्रेमवर्क: 2016 में स्थापित, मुख्य OPEC + 10 प्रमुख गैर-OPEC तेल निर्यातक (रूस, कजाकिस्तान)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />UAE कतर (2019) के बाद ब्लॉक छोड़ने वाला दूसरा फारस की खाड़ी का देश।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />OPEC के उद्देश्य: पेट्रोलियम नीतियों का समन्वय, उत्पादकों के लिए उचित मूल्य, उपभोक्ताओं के लिए स्थिर आपूर्ति।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> In which year was the Organization of Petroleum Exporting Countries (OPEC) created? <em>(UPPSC GIC Lecturer Hindi 2017)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> 1960 (Baghdad Conference).</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-yellow-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/ncrb-2024"><Button variant="outline" className="gap-2 cursor-pointer">Next: NCRB 2024 <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}