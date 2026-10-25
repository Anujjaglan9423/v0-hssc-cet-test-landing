"use client"

import TopicPage, { type TopicData } from "../topic-page-template"

const topic: TopicData = {
    title: "Padma Awards 2026",
    titleHi: "पद्म पुरस्कार 2026",
    category: "Awards & Honours",
    date: "2026",
    ministry: "National Civilian Awards",
    overviewEn: [
        "131 Padma Awards were announced: five Padma Vibhushan, thirteen Padma Bhushan and 113 Padma Shri.",
        "The PDF lists 19 women awardees, 16 posthumous awardees and six recipients in the Foreigner/NRI/PIO/OCI category.",
        "Uttar Pradesh had one Padma Vibhushan awardee, no Padma Bhushan awardee and ten Padma Shri awardees.",
    ],
    overviewHi: [
        "कुल 131 पद्म पुरस्कार घोषित हुए: 5 पद्म विभूषण, 13 पद्म भूषण और 113 पद्म श्री।",
        "सूची में 19 महिलाएँ, 16 मरणोपरांत सम्मान और विदेशी/NRI/PIO/OCI श्रेणी के 6 सम्मानित व्यक्ति शामिल हैं।",
        "उत्तर प्रदेश से 1 पद्म विभूषण, कोई पद्म भूषण नहीं और 10 पद्म श्री प्राप्तकर्ता हैं।",
    ],
    features: [
        { title: "Padma Vibhushan / पद्म विभूषण", points: [
            "P. Narayanan — Literature & Education — Kerala.",
            "Dharmendra Singh Deol (Posthumous) — Art — Maharashtra.",
            "N. Rajam — Art — Uttar Pradesh.",
            "K. T. Thomas — Public Affairs — Kerala.",
            "V. S. Achuthanandhan (Posthumous) — Public Affairs — Kerala.",
        ] },
        { title: "Important Padma Bhushan / प्रमुख पद्म भूषण", points: [
            "Alka Yagnik — Art — Maharashtra.",
            "Mammootty — Art — Kerala.",
            "Shibu Soren (Posthumous) — Public Affairs — Jharkhand.",
            "अलका याज्ञनिक, ममूटी और शिबू सोरेन प्रमुख नाम हैं।",
        ] },
        { title: "Important Padma Shri / प्रमुख पद्म श्री", points: [
            "Madhavan Ranganathan — Art — Maharashtra.",
            "Praveen Kumar — Sports — Uttar Pradesh.",
            "Rohit Sharma — Sports — Maharashtra.",
            "Satish Shah (Posthumous) — Art — Maharashtra.",
        ] },
        { title: "Distribution / पुरस्कार वितरण", points: [
            "Padma Vibhushan: 5.",
            "Padma Bhushan: 13.",
            "Padma Shri: 113.",
            "Total: 131 recipients/awards as stated in the source.",
            "उत्तर प्रदेश से पद्म विभूषण: एन. राजम।",
        ] },
    ],
    backgroundTitle: "Exam Facts / परीक्षा उपयोगी तथ्य",
    background: [
        "Padma Awards are grouped into three categories: Padma Vibhushan, Padma Bhushan, and Padma Shri.",
        "This source highlights awardees with a connection to Uttar Pradesh. Its counts and individual names should be checked against the government's official awardee list before publication.",
        "इस सामग्री में उत्तर प्रदेश से जुड़े सम्मानित व्यक्तियों और पुरस्कारों की संख्या पर विशेष ज़ोर है।",
    ],
    pyq: ["The source includes a PYQ heading, but no legible past-year question is provided. / स्रोत में PYQ शीर्षक है, स्पष्ट प्रश्न नहीं है।"],
    mcqs: [
        {
            id: "padma-q1",
            questionEn: "With reference to Padma Awards 2026, consider: 1. A total of 131 awards were announced. 2. There are 13 Padma Bhushan awards. 3. Two Padma Vibhushan awardees are from Uttar Pradesh. 4. No Padma Bhushan awardee is from Uttar Pradesh. Which are correct?",
            questionHi: "पद्म पुरस्कार 2026 के संदर्भ में: 1. कुल 131 पुरस्कार घोषित हुए। 2. इनमें 13 पद्म भूषण हैं। 3. उत्तर प्रदेश से दो पद्म विभूषण विजेता हैं। 4. उत्तर प्रदेश से कोई पद्म भूषण विजेता नहीं है। कौन से कथन सही हैं?",
            options: [{ key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" }, { key: "b", en: "1, 2 and 4 only", hi: "केवल 1, 2 और 4" }, { key: "c", en: "2, 3 and 4 only", hi: "केवल 2, 3 और 4" }, { key: "d", en: "1, 2, 3 and 4", hi: "1, 2, 3 और 4" }],
            correctKey: "b",
            explanationEn: "Statements 1, 2 and 4 are correct. Statement 3 is false: N. Rajam is the only Padma Vibhushan awardee from Uttar Pradesh in the PDF.",
            explanationHi: "कथन 1, 2 और 4 सही हैं। कथन 3 गलत है: PDF में उत्तर प्रदेश से केवल एन. राजम पद्म विभूषण प्राप्तकर्ता हैं।",
        },
        {
            id: "padma-q2",
            questionEn: "Who among the following was NOT included among the Padma Vibhushan awardees in 2026?",
            questionHi: "निम्नलिखित में से कौन 2026 के पद्म विभूषण सम्मानित व्यक्तियों में शामिल नहीं था?",
            options: [{ key: "a", en: "K. T. Thomas", hi: "के. टी. थॉमस" }, { key: "b", en: "P. Narayanan", hi: "पी. नारायणन" }, { key: "c", en: "Dharmendra Singh Deol (Posthumous)", hi: "धर्मेन्द्र सिंह देओल (मरणोपरांत)" }, { key: "d", en: "Anil Kumar Rastogi", hi: "अनिल कुमार रस्तोगी" }],
            correctKey: "d",
            explanationEn: "Anil Kumar Rastogi is not among the five Padma Vibhushan awardees listed in the source.",
            explanationHi: "स्रोत में दिए पाँच पद्म विभूषण सम्मानित व्यक्तियों में अनिल कुमार रस्तोगी का नाम नहीं है।",
        },
    ],
    previous: { title: "Commonwealth Games", href: "/current-affairs/by-topic/commonwealth-games-2026" },
    next: { title: "Important Current Affairs", href: "/current-affairs/by-topic/national-international-current-affairs-2026" },
}

export default function PadmaAwardsPage() { return <TopicPage topic={topic} /> }
