"use client"

import TopicPage, { type TopicData } from "../topic-page-template"

const topic: TopicData = {
    title: "India's 101st Ramsar Site, 2026",
    titleHi: "भारत का 101वाँ रामसर स्थल, 2026",
    category: "Environment",
    date: "2026",
    ministry: "Environment, Forest & Climate Change",
    overviewEn: [
        "The Union Environment Minister announced Glaw Lake in Arunachal Pradesh as India's 101st Ramsar Site.",
        "It is Arunachal Pradesh's first designated wetland of international importance.",
        "Glaw Lake is located in Kamlang Tiger Reserve and Wildlife Sanctuary.",
    ],
    overviewHi: [
        "केंद्रीय पर्यावरण मंत्री ने अरुणाचल प्रदेश की ग्लॉ झील को भारत का 101वाँ रामसर स्थल घोषित किया।",
        "यह अरुणाचल प्रदेश का पहला अंतरराष्ट्रीय महत्व वाला नामित आर्द्रभूमि स्थल है।",
        "ग्लॉ झील कमलांग टाइगर रिज़र्व और वन्यजीव अभयारण्य में स्थित है।",
    ],
    features: [
        { title: "Ramsar Convention / रामसर कन्वेंशन", points: [
            "Adopted in Ramsar, Iran in 1971; entered into force in 1975.",
            "Entered into force for India on 1 February 1982.",
            "1971 में रामसर, ईरान में अपनाया गया; भारत में 1 फ़रवरी 1982 से प्रभावी।",
        ] },
        { title: "Ramsar Sites in India / भारत के रामसर स्थल", points: [
            "Sundarban Wetland, West Bengal, is India's largest Ramsar Site by area.",
            "Renuka Lake (Himachal Pradesh) and Vembannur Wetland Complex (Tamil Nadu) are among the smallest.",
            "Tamil Nadu has the highest number: 20, according to this PDF.",
            "Chilika Lake and Keoladeo National Park were India's first designated sites in 1981.",
        ] },
        { title: "100th Ramsar Site / 100वाँ रामसर स्थल", points: [
            "Jai Prakash Narayan Bird Sanctuary (Surha Tal) is in Ballia, Uttar Pradesh.",
            "Designated India's 100th Ramsar Site on 5 June 2026 (World Environment Day).",
            "Uttar Pradesh declared it a bird sanctuary in 1991.",
        ] },
        { title: "Montreux Record / मॉन्ट्रो रिकॉर्ड", points: [
            "Special register of wetlands with actual, ongoing, or potential changes in ecological character.",
            "India's listed wetlands: Keoladeo National Park (Rajasthan) and Loktak Lake (Manipur).",
            "मॉन्ट्रो रिकॉर्ड में पारिस्थितिक स्वरूप में परिवर्तन वाले या जोखिमग्रस्त स्थल शामिल हैं।",
        ] },
        { title: "Uttar Pradesh Sites (2005–2020)", points: [
            "2005: Upper Ganga River — Bulandshahr, Aligarh, Amroha, Hapur, Budaun.",
            "2019: Nawabganj (Unnao), Saman (Mainpuri), Sarsai Nawar (Etawah), Samaspur (Raebareli).",
            "2019: Sandi (Hardoi), Parvati Arga (Gonda).",
            "2020: Sur Sarovar / Keetham Lake (Agra).",
        ] },
        { title: "Uttar Pradesh Sites (2021–2026)", points: [
            "2021: Haiderpur Wetland — Muzaffarnagar and Bijnor.",
            "2022: Bakhira Wildlife Sanctuary — Sant Kabir Nagar.",
            "2025: Patna Bird Sanctuary — Etah.",
            "2026: Shekha Jheel Bird Sanctuary — Aligarh; smallest Ramsar site in UP per source.",
            "2026: Jai Prakash Narayan Bird Sanctuary — Ballia (Surha Tal).",
        ] },
    ],
    backgroundTitle: "Additional Information / अतिरिक्त जानकारी",
    background: [
        "The source lists 13 Ramsar Sites in Uttar Pradesh and identifies Upper Ganga River as the state's oldest and largest site.",
        "उत्तर प्रदेश में स्रोत के अनुसार 13 रामसर स्थल हैं। अपर गंगा नदी राज्य का सबसे पुराना और सबसे बड़ा स्थल बताया गया है।",
    ],
    pyq: ["The PDF shows a PYQ heading but no readable question for this topic. / PDF में PYQ शीर्षक है, लेकिन प्रश्न नहीं दिया गया है।"],
    mcqs: [{
        id: "ramsar-q1",
        questionEn: "With reference to Ramsar Sites in India, consider these statements: 1. Uttar Pradesh ranks first among states in number of Ramsar Sites. 2. Jai Prakash Narayan Bird Sanctuary, Ballia, was designated India's 100th Ramsar Site on 5 June 2026. 3. The Montreux Record covers Ramsar Sites whose ecological character has changed, is changing, or is likely to change. Which statements are correct?",
        questionHi: "भारत में रामसर स्थलों के संदर्भ में: 1. उत्तर प्रदेश रामसर स्थलों की संख्या में पहले स्थान पर है। 2. बलिया के जय प्रकाश नारायण पक्षी अभयारण्य को 5 जून 2026 को भारत का 100वाँ रामसर स्थल नामित किया गया। 3. मॉन्ट्रो रिकॉर्ड में पारिस्थितिक स्वरूप में परिवर्तन वाले या जोखिम वाले स्थल शामिल हैं। कौन से कथन सही हैं?",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "b",
        explanationEn: "Statement 1 is incorrect: the PDF names Tamil Nadu, not Uttar Pradesh, as the state with most Ramsar sites. Statements 2 and 3 are correct.",
        explanationHi: "कथन 1 गलत है: PDF के अनुसार सर्वाधिक रामसर स्थल तमिलनाडु में हैं। कथन 2 और 3 सही हैं।",
    }],
    next: { title: "Commonwealth Games", href: "/current-affairs/by-topic/commonwealth-games-2026" },
}

export default function RamsarSitePage() { return <TopicPage topic={topic} /> }
