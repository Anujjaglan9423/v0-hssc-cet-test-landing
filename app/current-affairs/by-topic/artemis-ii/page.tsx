"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "artemis-q1",
        questionEn: "What is the name of the heavy-lift rocket used to launch the Artemis II mission?",
        questionHi: "आटेमिस II मिशन को लॉन्च करने के लिए इस्तेमाल किए गए हेवी-लिफ्ट रॉकेट का नाम क्या है?",
        options: [
            { key: "a", en: "Falcon Heavy", hi: "फाल्कन हेवी" },
            { key: "b", en: "Saturn V", hi: "सैटर्न V" },
            { key: "c", en: "Space Launch System (SLS)", hi: "स्पेस लॉन्च सिस्टम (SLS)" },
            { key: "d", en: "Starship", hi: "स्टारशिप" },
        ],
        correctKey: "c",
        explanationEn: "Artemis II was launched using NASA's Space Launch System (SLS) from Kennedy Space Center, Florida.",
        explanationHi: "आटेमिस II को NASA के स्पेस लॉन्च सिस्टम (SLS) से केनेडी स्पेस सेंटर, फ्लोरिडा से लॉन्च किया गया।",
    },
    {
        id: "artemis-q2",
        questionEn:
            "With reference to the recently concluded Artemis II mission, consider the following statements: 1. It was the first crewed mission to the Moon's vicinity since the Apollo 17 mission in 1972. 2. It marked the first time a woman and a Black person traveled to deep space. 3. The mission concluded with a successful splashdown of the Orion capsule in the Atlantic Ocean.",
        questionHi:
            "हाल ही में संपन्न हुए आटेमिस II मिशन के संदर्भ में, निम्नलिखित कथनों पर विचार करें: 1. यह 1972 में अपोलो 17 मिशन के बाद चंद्रमा के आसपास का पहला मानवयुक्त मिशन था। 2. यह पहली बार था जब एक महिला और एक अश्वेत व्यक्ति ने गहरे अंतरिक्ष की यात्रा की। 3. मिशन का समापन अटलांटिक महासागर में ओरियन कैप्यूल के सफल स्पलैशडाउन के साथ हुआ।",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "d", en: "1, 2, and 3", hi: "1, 2, और 3" },
        ],
        correctKey: "a",
        explanationEn: "Statement 3 is wrong — splashdown occurred in the Pacific Ocean, off the coast of San Diego, not the Atlantic. Statements 1 and 2 are correct.",
        explanationHi: "कथन 3 गलत है — स्पलैशडाउन सैन डिएगो के तट पर प्रशांत महासागर में हुआ, अटलांटिक में नहीं। कथन 1 और 2 सही हैं।",
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

export default function ArtemisIIPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-violet-700 hover:text-violet-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Science & Technology</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">NASA's Artemis II Mission</h1>
                    <p className="text-xl text-muted-foreground mb-6">नासा का आर्टेमिस II मिशन</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-violet-600" /><span>Launched 1 April 2026 · Splashdown 10 April 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Rocket className="w-4 h-4 text-violet-600" /><span>Orion · SLS</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-violet-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-violet-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-violet-50/60 rounded-xl p-5 border border-violet-100">
                            <h3 className="text-xs font-semibold uppercase text-violet-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />Launched 1 April 2026 from Kennedy Space Center, Florida using the Space Launch System (SLS).</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />First crewed mission to the Moon's vicinity in over 54 years (since Apollo 17 in 1972).</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />Successfully concluded on 10 April 2026 with splashdown of Orion in the Pacific Ocean off San Diego.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />यह मिशन 1 अप्रैल 2026 को फ्लोरिडा के केनेडी स्पेस सेंटर से SLS का उपयोग करके लॉन्च किया गया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />1972 में अपोलो 17 के बाद 54 वर्षों से अधिक समय में चंद्रमा के आसपास का पहला मानवयुक्त मिशन।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />10 अप्रैल 2026 को सैन डिएगो के तट पर प्रशांत महासागर में ओरियन के सुरक्षित स्पलैशडाउन के साथ सफलतापूर्वक संपन्न हुआ।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Rocket className="w-5 h-5 text-violet-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Trajectory: Lunar Free Return Trajectory — swung around the far side of the Moon on 6 April 2026 without entering lunar orbit.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Record Distance: Orion reached 252,756 miles from Earth — furthest any human-rated spacecraft has traveled.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Crew: Reid Wiseman (Commander), Victor Glover (Pilot — first Black person to fly to the Moon), Christina Koch (first woman on a lunar mission), Jeremy Hansen (CSA).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Final test of life support systems and communication networks before Artemis III (target 2026/27), which will land humans near the Lunar South Pole.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Timeline: Artemis I (2022) — uncrewed test flight; Artemis II (April 2026) — crewed flyby; Artemis III (target 2026/27) — human lunar landing.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />प्रक्षेपवक्र: लूनर फ्री रिटर्न प्रक्षेपवक्र — 6 अप्रैल 2026 को चंद्र कक्षा में प्रवेश किए बिना चंद्रमा के सुदूर हिस्से के चारों ओर चक्कर लगाकर वापस आया।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />रिकॉर्ड दूरी: ओरियन पृथ्वी से 252,756 मील की अधिकतम दूरी पर पहुंचा — किसी भी मानव-रेटेड अंतरिक्ष यान द्वारा सबसे लंबी दूरी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />चालक दल: रीड वाइजमैन (कमांडर), विक्टर ग्लोवर (पायलट — चंद्रमा की उड़ान भरने वाले पहले अश्वेत व्यक्ति), क्रिस्टीना कोच (चंद्र मिशन में भाग लेने वाली पहली महिला), जेरेमी हैनसन (CSA)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />आर्टेमिस III (लक्ष्य 2026/27) से पहले जीवन रक्षक प्रणालियों और संचार नेटवर्क का अंतिम परीक्षण, जिसका लक्ष्य चंद्रमा के दक्षिणी ध्रुव के पास पहली बार मनुष्यों को उतारना है।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />टाइमलाइन: आर्टेमिस I (2022) — मानव रहित परीक्षण उड़ान; आर्टेमिस II (अप्रैल 2026) — मानवयुक्त फ्लाईबाई; आर्टेमिस III (लक्ष्य 2026/27) — मानव चंद्र लैंडिंग।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> The "NISAR satellite" is jointly developed by which of the following organizations? <em>(UPPSC PCS Prelims 2023)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> NASA (USA) and ISRO (India).</p>
                        <p className="text-sm mt-2"><strong>Q.</strong> “लूनर पोलर एक्सप्लोरेशन मिशन” (लूपेक्स) के संदर्भ में: 1. यह भारत-जापान के बीच संयुक्त चन्द्र मिशन है। 2. JAXA लैंडर विकसित करने के लिए जिम्मेदार है, जबकि ISRO रोबर और लॉन्च वाहन को संभाल रहा है। सही उत्तर: (d) 1 और 2 दोनों</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-violet-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/nato-withdrawal"><Button variant="outline" className="gap-2 cursor-pointer">Next: NATO Withdrawal <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}