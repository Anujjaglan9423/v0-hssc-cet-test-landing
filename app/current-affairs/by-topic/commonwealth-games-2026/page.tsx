"use client"

import TopicPage, { type TopicData } from "../topic-page-template"

const topic: TopicData = {
    title: "23rd Commonwealth Games 2026",
    titleHi: "23वें राष्ट्रमंडल खेल 2026",
    category: "Sports",
    date: "2026 · Glasgow",
    ministry: "Commonwealth Games",
    overviewEn: [
        "India finished fourth at the Glasgow Commonwealth Games 2026 with 39 medals.",
        "India's tally was 13 gold, 17 silver and 9 bronze medals.",
        "The mascot was Finnie, a unicorn inspired by Scotland's national animal.",
        "The PDF names Ahmedabad, Gujarat, as the host city for the 2030 Games.",
    ],
    overviewHi: [
        "ग्लासगो राष्ट्रमंडल खेल 2026 में भारत 39 पदकों के साथ चौथे स्थान पर रहा।",
        "भारत ने 13 स्वर्ण, 17 रजत और 9 कांस्य पदक जीते।",
        "खेलों का शुभंकर स्कॉटलैंड के राष्ट्रीय पशु यूनिकॉर्न पर आधारित 'फिनी' था।",
        "PDF के अनुसार 2030 राष्ट्रमंडल खेलों की मेज़बानी अहमदाबाद करेगा।",
    ],
    features: [
        { title: "India's Major Achievements / भारत की उपलब्धियाँ", points: [
            "Boxing was India's most successful sport: 10 medals, including 7 gold and 3 silver.",
            "Neeraj Chopra won silver in men's javelin.",
            "Asmita Dey and Harsh Singh won India's first Commonwealth Games judo gold medals.",
            "Tejaswin Shankar won bronze, India's first Commonwealth Games decathlon medal.",
            "Gulveer Singh won silver in 10,000m and bronze in 5,000m.",
            "Mirabai Chanu won her third successive Games gold after 2018 and 2022.",
        ] },
        { title: "Overall Medal Standings / पदक तालिका", points: [
            "1. Australia — 70 gold, 45 silver, 56 bronze; total 171.",
            "2. England — 29 gold, 45 silver, 36 bronze; total 110.",
            "3. Canada — 19 gold, 20 silver, 23 bronze; total 62.",
            "4. India — 13 gold, 17 silver, 9 bronze; total 39.",
        ] },
        { title: "Gold Winners: Boxing / मुक्केबाज़ी", points: [
            "Preeti Pawar — Women's 54kg; Jaismine Lamboria — Women's 57kg.",
            "Sakshi Chaudhary — Women's 51kg; Priya Ghanghas — Women's 60kg.",
            "Arundhati Choudhary — Women's 70kg.",
            "Sachin Siwach — Men's 60kg; Ankush Panghal — Men's 80kg.",
        ] },
        { title: "Other Gold Winners / अन्य स्वर्ण विजेता", points: [
            "Mirabai Chanu — Women's 48kg weightlifting.",
            "Dilip Gavit — Men's 100m T47 para athletics.",
            "Soman Rana — Men's shot put F57 para athletics.",
            "Sharmila Dhankar — Women's shot put F57 para athletics.",
            "Asmita Dey — Women's -48kg judo; Harsh Singh — Men's -60kg judo.",
        ] },
    ],
    backgroundTitle: "Medal Highlights / पदक संबंधी तथ्य",
    background: [
        "Gold: 13 | Silver: 17 | Bronze: 9 | Total: 39. The medal table and athlete names above reproduce the figures in the uploaded PDF.",
        "स्वर्ण: 13 | रजत: 17 | कांस्य: 9 | कुल: 39। उपरोक्त विवरण PDF से लिया गया है।",
    ],
    pyq: ["The PDF contains a PYQ heading without a legible past-paper question. / स्रोत में PYQ शीर्षक है, पर कोई स्पष्ट प्रश्न नहीं है।"],
    mcqs: [
        {
            id: "cwg-q1",
            questionEn: "Consider these statements about India's performance at the 23rd Commonwealth Games: 1. India was third with 39 medals. 2. India won more silver than gold medals. 3. Boxing contributed more gold medals than any other discipline. 4. Tejaswin Shankar won India's first Commonwealth Games decathlon medal. Which are correct?",
            questionHi: "23वें राष्ट्रमंडल खेलों के संबंध में: 1. भारत 39 पदकों के साथ तीसरे स्थान पर रहा। 2. भारत ने स्वर्ण से अधिक रजत पदक जीते। 3. मुक्केबाज़ी ने अन्य सभी खेलों से अधिक स्वर्ण दिलाए। 4. तेजस्विन शंकर ने डेकाथलॉन में भारत का पहला राष्ट्रमंडल पदक जीता। कौन से सही हैं?",
            options: [{ key: "a", en: "1, 2 and 3 only", hi: "केवल 1, 2 और 3" }, { key: "b", en: "1 and 2 only", hi: "केवल 1 और 2" }, { key: "c", en: "2, 3 and 4 only", hi: "केवल 2, 3 और 4" }, { key: "d", en: "1, 2, 3 and 4", hi: "1, 2, 3 और 4" }],
            correctKey: "c",
            explanationEn: "India finished fourth, not third. It won 17 silver and 13 gold medals; boxing supplied seven golds, and Tejaswin Shankar took decathlon bronze.",
            explanationHi: "भारत तीसरे नहीं, चौथे स्थान पर रहा। 17 रजत और 13 स्वर्ण मिले; मुक्केबाज़ी से सात स्वर्ण और तेजस्विन शंकर से डेकाथलॉन कांस्य मिला।",
        },
        {
            id: "cwg-q2",
            questionEn: "Match the Commonwealth Games gold medal winners with their sports: 1. Asmita Dey — Judo. 2. Ankush Panghal — Boxing. 3. Mirabai Chanu — Weightlifting. 4. Arundhati Choudhary — Boxing. How many pairs are correct?",
            questionHi: "स्वर्ण पदक विजेताओं का खेल से मिलान करें: 1. अस्मिता डे — जूडो। 2. अंकुश पंघाल — मुक्केबाज़ी। 3. मीराबाई चानू — भारोत्तोलन। 4. अरुंधति चौधरी — मुक्केबाज़ी। कितने युग्म सही हैं?",
            options: [{ key: "a", en: "Only one", hi: "केवल एक" }, { key: "b", en: "Only two", hi: "केवल दो" }, { key: "c", en: "Only three", hi: "केवल तीन" }, { key: "d", en: "All four", hi: "सभी चार" }],
            correctKey: "d",
            explanationEn: "All four athletes are correctly paired with their sports, as listed in the PDF.",
            explanationHi: "PDF के अनुसार चारों खिलाड़ियों का उनके खेल से मिलान सही है।",
        },
    ],
    previous: { title: "Ramsar Site", href: "/current-affairs/by-topic/india-101st-ramsar-site-2026" },
    next: { title: "Padma Awards", href: "/current-affairs/by-topic/padma-awards-2026" },
}

export default function CommonwealthGamesPage() { return <TopicPage topic={topic} /> }
