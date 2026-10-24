"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, Landmark,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "fcra-q1",
        questionEn:
            "Consider the following statements regarding the Foreign Contribution (Regulation) Amendment Bill, 2026: 1. It proposes the creation of a 'Designated Authority' to permanently seize the assets of NGOs if their FCRA registration is cancelled. 2. It increases the maximum imprisonment for FCRA violations from one year to five years to deter anti-national activities. 3. State police agencies can independently initiate investigations into FCRA violations without prior Central Government approval.",
        questionHi:
            "विदेशी अंशदान (विनियमन) संशोधन विधेयक, 2026 के संदर्भ में निम्नलिखित कथनों पर विचार करें: 1. यह प्रस्ताव करता है कि यदि किसी NGO का FCRA पंजीकरण रद्द हो जाता है, तो उसकी संपत्तियों को स्थायी रूप से जब्त करने के लिए एक 'नामित प्राधिकरण' बनाया जाएगा। 2. यह राष्ट्र-विरोधी गतिविधियों को रोकने के लिए FCRA उल्लंघनों पर अधिकतम कारावास को एक वर्ष से बढ़ाकर पांच वर्ष कर देता है। 3. राज्य पुलिस एजेंसियां केंद्र सरकार की पूर्व स्वीकृति के बिना स्वतंत्र रूप से FCRA उल्लंघनों की जांच शुरू कर सकती हैं।",
        options: [
            { key: "a", en: "1 only", hi: "केवल 1" },
            { key: "b", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "c", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "d", en: "1, 2, and 3", hi: "1, 2, और 3" },
        ],
        correctKey: "a",
        explanationEn:
            "Statement 1 is correct. Statement 2 is a trap — the bill actually REDUCES maximum imprisonment from 5 years to 1 year. Statement 3 is wrong — prior Central Government approval is now mandated for any investigation.",
        explanationHi:
            "कथन 1 सही है। कथन 2 ट्रैप है — विधेयक वास्तव में अधिकतम कारावास को 5 वर्ष से घटाकर 1 वर्ष कर देता है। कथन 3 गलत है — किसी भी जांच के लिए अब केंद्र सरकार की पूर्व स्वीकृति अनिवार्य है।",
    },
    {
        id: "fcra-q2",
        questionEn:
            "Which of the following statements about the original FCRA, 2010 framework is/are correct? 1. FCRA registration is granted for 5 years and must be renewed. 2. All foreign contributions must be received only in a single designated bank account at SBI, New Delhi Main Branch. 3. NGOs can spend a maximum of 20% of foreign contribution on administrative expenses (reduced from 50% by the 2020 amendment).",
        questionHi:
            "मूल FCRA, 2010 ढांचे के बारे में कौन-सा/से कथन सही है/हैं? 1. FCRA पंजीकरण 5 वर्षों के लिए प्रदान किया जाता है और नवीनीकरण किया जाना चाहिए। 2. सभी विदेशी योगदान केवल SBI, नई दिल्ली मुख्य शाखा में एक नामित बैंक खाते में प्राप्त किए जाने चाहिए। 3. NGOs एक वित्तीय वर्ष में प्राप्त विदेशी योगदान का अधिकतम 20% प्रशासनिक खर्चों पर खर्च कर सकते हैं (2020 के संशोधन द्वारा 50% से कम किया गया)।",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "d",
        explanationEn: "All three statements are correct as per the FCRA, 2010 framework.",
        explanationHi: "FCRA, 2010 ढांचे के अनुसार तीनों कथन सही हैं।",
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

export default function FCRAAmendment2026Page() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-red-700 hover:text-red-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Polity & Governance</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Foreign Contribution (Regulation) Amendment Bill, 2026</h1>
                    <p className="text-xl text-muted-foreground mb-6">विदेशी अंशदान (योगदान) (विनियमन) संशोधन विधेयक, 2026</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-red-600" /><span>Introduced March 2026 (Lok Sabha)</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Landmark className="w-4 h-4 text-red-600" /><span>Ministry of Home Affairs</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-red-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-red-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50/60 rounded-xl p-5 border border-red-100">
                            <h3 className="text-xs font-semibold uppercase text-red-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />The Foreign Contribution (Regulation) Amendment Bill, 2026 was introduced in the Lok Sabha in March 2026 to tighten the Central Government's oversight of foreign-funded NGOs.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />Core objective: bridge legal gaps in asset management, ensure strict time-bound utilization of foreign funds, and prevent misuse for anti-national or forced religious conversion activities.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />विदेशी वित्त पोषित NGOs पर केंद्र सरकार की निगरानी को सख्त करने के लिए विदेशी अंशदान (विनियमन) संशोधन विधेयक, 2026 को मार्च 2026 में लोकसभा में पेश किया गया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />मुख्य उद्देश्य: संपत्ति प्रबंधन में कानूनी खामियों को दूर करना, विदेशी धन के सख्त समयबद्ध उपयोग को सुनिश्चित करना और राष्ट्र-विरोधी या जबरन धर्म परिवर्तन गतिविधियों के लिए विदेशी योगदान के दुरुपयोग को रोकना।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Landmark className="w-5 h-5 text-red-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Creation of a "Designated Authority": Central Government appoints an authority to take provisional or permanent control of assets created from foreign funds if an NGO's FCRA registration is suspended, cancelled, surrendered, or not renewed.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Reduced Penalties: maximum imprisonment for contravening the Act is reduced from five years to one year.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Central Override on Investigations: any law enforcement agency (including State police) must seek prior approval of the Central Government before initiating any investigation into FCRA-related offences.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Asset Freeze during Suspension: NGOs under suspension are prohibited from alienating, selling, or mortgaging any assets created from foreign funds without prior MHA approval.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Asset Disposal: Authority can transfer permanently vested assets to government departments or dispose of them via sale, with proceeds credited to the Consolidated Fund of India.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Religious Places of Worship: Authority can entrust management to a prescribed person, ensuring the religious character of the site is maintained.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />"नामित प्राधिकरण" का निर्माण: यदि किसी NGO का FCRA पंजीकरण निलंबित, रद्द, सरेंडर या नवीनीकृत नहीं किया जाता, तो केंद्र सरकार विदेशी धन से निर्मित संपत्तियों का अस्थायी या स्थायी नियंत्रण लेने के लिए एक नया प्राधिकरण नियुक्त करेगी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />दंडात्मक प्रावधानों में कमी: अधिनियम के उल्लंघन के लिए अधिकतम कारावास पांच वर्ष से घटाकर एक वर्ष किया गया।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />जांच पर केंद्रीय नियंत्रण: किसी भी कानून प्रवर्तन एजेंसी (राज्य पुलिस सहित) को FCRA अपराधों की जांच शुरू करने से पहले केंद्र सरकार की पूर्व मंजूरी लेनी होगी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />निलंबन के दौरान संपत्ति फ्रीज: निलंबित NGOs को MHA की पूर्व स्वीकृति के बिना विदेशी धन से बनाई गई किसी भी संपत्ति को अलग करने, बेचने या गिरवी रखने की सख्त मनाही है।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />संपत्ति का निपटान: प्राधिकरण स्थायी रूप से निहित संपत्तियों को सरकारी विभागों में स्थानांतरित कर सकता है या बिक्री के माध्यम से निपटान कर सकता है, जिसकी आय भारत की संचित निधि में जमा की जाएगी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />धार्मिक पूजा स्थल: प्राधिकरण किसी निर्धारित व्यक्ति को प्रबंधन सौंप सकता है, यह सुनिश्चित करते हुए कि स्थल का धार्मिक चरित्र बना रहे।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Original FCRA 2010 Framework / मूल FCRA ढांचा</h3>
                        <ul className="text-sm space-y-1.5">
                            <li>• Registration validity: 5 years, renewable. / पंजीकरण की वैधता: 5 वर्ष, नवीनीकरण योग्य।</li>
                            <li>• Designated bank account: SBI, New Delhi Main Branch (not RBI). / नामित बैंक खाता: SBI, नई दिल्ली मुख्य शाखा (RBI नहीं)।</li>
                            <li>• Administrative cap: max 20% of foreign contribution (reduced from 50% by 2020 amendment). / प्रशासनिक सीमा: विदेशी योगदान का अधिकतम 20% (2020 संशोधन द्वारा 50% से कम)।</li>
                            <li>• Prohibited entities: election candidates, journalists, judges, government servants, legislators. / निषिद्ध संस्थाएं: चुनाव उम्मीदवार, पत्रकार, न्यायाधीश, सरकारी कर्मचारी, विधायक।</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-red-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
<Link href="/current-affairs/by-topic/constitutional-131st-amendment">
                            <Button variant="outline" className="gap-2 cursor-pointer">
                                Next: Constitutional 131st Amendment <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}