"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, BookOpen, Search, Stethoscope, Wifi,
    Cpu, Leaf, Atom, Rocket, FlaskConical, Utensils, Satellite, Bot,
    Zap, Waves, Microscope, Bug, ShieldCheck, Landmark, Truck, Sun,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/* ------------------------------------------------------------------ */
/* TYPES                                                              */
/* ------------------------------------------------------------------ */
interface MCQ {
    id: string
    questionEn: string
    questionHi: string
    options: { key: string; en: string; hi: string }[]
    correctKey: string
    explanationEn: string
    explanationHi: string
}

interface Topic {
    id: string
    titleEn: string
    titleHi: string
    category: string
    shortDescEn: string
    shortDescHi: string
    tag: string
    color: string
    icon: React.ReactNode
    metaEn: string[]
    metaHi: string[]
    overviewEn: string[]
    overviewHi: string[]
    factsEn: string[]
    factsHi: string[]
    mcqs: MCQ[]
}

/* ------------------------------------------------------------------ */
/* ALL 18 TOPICS                                                      */
/* ------------------------------------------------------------------ */
const TOPICS: Topic[] = [
    /* 1. TRUENAT HPV */
    {
        id: "truenat-hpv",
        titleEn: "Truenat HPV-HR Plus",
        titleHi: "ट्रेनट HPV-HR प्लस",
        category: "Health & Technology",
        shortDescEn: "India's indigenous test for rapid cervical cancer detection. Identifies 8 high-risk HPV genotypes responsible for >96% of cervical cancer.",
        shortDescHi: "सर्वाइकल कैंसर की शीघ्र जांच के लिए स्वदेशी परीक्षण। 96% से अधिक मामलों के लिए जिम्मेदार 8 उच्च-जोखिम HPV जीनोटाइप।",
        tag: "Health",
        color: "from-pink-600 to-pink-800",
        icon: <Stethoscope className="w-5 h-5" />,
        metaEn: ["Approved 2026", "Molbio Diagnostics", "Cervical Cancer"],
        metaHi: ["2026 स्वीकृत", "मोल्बियो डायग्नोस्टिक्स", "सर्वाइकल कैंसर"],
        overviewEn: [
            "India has approved Truenat HPV-HR Plus, an indigenous test for rapid detection of cervical cancer.",
            "Developed by Molbio Diagnostics.",
            "It identifies 8 high-risk Human Papillomavirus (HPV) genotypes that account for more than 96% of cervical cancer cases.",
        ],
        overviewHi: [
            "भारत ने सर्वाइकल कैंसर की शीघ्र जांच के लिए स्वदेशी ट्रूनेट HPV-HR प्लस परीक्षण को स्वीकृति दी है।",
            "इसे मोल्बियो डायग्नोस्टिक्स द्वारा विकसित किया गया है।",
            "यह 8 उच्च-जोखिम वाले Human Papillomavirus (HPV) जीनोटाइप की पहचान करता है, जो सर्वाइकल कैंसर के 96% से अधिक मामलों के लिए जिम्मेदार हैं।",
        ],
        factsEn: [
            "Human Papillomavirus (HPV) is the primary cause of cervical cancer.",
            "Early detection via HPV genotyping greatly improves treatment outcomes.",
            "India's indigenous diagnostics capacity strengthened by Molbio's platform.",
        ],
        factsHi: [
            "ह्यूमन पैपिलोमावायरस (HPV) सर्वाइकल कैंसर का मुख्य कारण है।",
            "HPV जीनोटाइपिंग के माध्यम से शीघ्र पहचान उपचार परिणामों को बेहतर बनाती है।",
            "मोल्बियो के प्लेटफॉर्म से भारत की स्वदेशी निदान क्षमता मजबूत हुई।",
        ],
        mcqs: [
            {
                id: "hpv-q1",
                questionEn: "With reference to Truenat HPV-HR Plus: 1. It is an indigenous test for cervical cancer. 2. Developed by Molbio Diagnostics. 3. It identifies 8 high-risk HPV genotypes. Which are correct?",
                questionHi: "ट्रूनेट HPV-HR प्लस: 1. सर्वाइकल कैंसर का स्वदेशी परीक्षण। 2. मोल्बियो द्वारा विकसित। 3. 8 उच्च-जोखिम HPV जीनोटाइप की पहचान। कौन सही हैं?",
                options: [
                    { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
                    { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
                    { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
                    { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
                ],
                correctKey: "d",
                explanationEn: "All three statements are correct.",
                explanationHi: "तीनों कथन सही हैं।",
            },
        ],
    },

    /* 2. BGP HIJACKING & TELEGRAM */
    {
        id: "bgp-hijacking",
        titleEn: "BGP Hijacking & Telegram Ban",
        titleHi: "BGP हाईजैकिंग और टेलीग्राम प्रतिबंध",
        category: "Cybersecurity",
        shortDescEn: "India's temporary ban on Telegram under IT Act Section 69(A) led to claims of BGP hijacking compromising global access.",
        shortDescHi: "IT अधिनियम की धारा 69(A) के तहत टेलीग्राम पर अस्थायी प्रतिबंध के बाद BGP हाईजैकिंग से वैश्विक पहुंच प्रभावित होने का दावा।",
        tag: "Cyber",
        color: "from-slate-600 to-slate-800",
        icon: <Wifi className="w-5 h-5" />,
        metaEn: ["IT Act 69(A)", "Telegram ban", "Pavel Durov"],
        metaHi: ["IT अधिनियम 69(A)", "टेलीग्राम प्रतिबंध", "पावेल डुरोव"],
        overviewEn: [
            "Following the Indian government's temporary ban on Telegram under Section 69(A) of the IT Act, 2000, platform founder and CEO Pavel Durov claimed global access was being compromised via BGP hijacking.",
            "BGP Hijacking: internet traffic is misdirected by falsely advertising the route to a website or online service.",
            "BGP (Border Gateway Protocol) is the system that directs internet traffic between different networks.",
        ],
        overviewHi: [
            "आईटी अधिनियम, 2000 की धारा 69(A) के तहत भारत सरकार द्वारा टेलीग्राम पर लगाए गए अस्थायी प्रतिबंध के बाद, संस्थापक और सीईओ पावेल डुरोव ने दावा किया कि BGP हाईजैकिंग के माध्यम से ऐप की वैश्विक पहुंच से समझौता किया जा रहा था।",
            "BGP हाईजैकिंग: किसी वेबसाइट या ऑनलाइन सेवा के मार्ग का गलत विज्ञापन देकर इंटरनेट ट्रैफिक को गलत दिशा में भेजना।",
            "BGP (बॉर्डर गेटवे प्रोटोकॉल) वह तंत्र है जो अलग-अलग नेटवर्कों के बीच इंटरनेट ट्रैफिक को दिशा देता है।",
        ],
        factsEn: [
            "BGP is the routing protocol used to exchange routing information between autonomous systems on the internet.",
            "BGP hijacking can cause traffic to be routed through malicious networks, enabling interception.",
            "Section 69(A) of IT Act 2000 allows government to block public access to information in certain cases.",
        ],
        factsHi: [
            "BGP वह रूटिंग प्रोटोकॉल है जिसका उपयोग इंटरनेट पर स्वायत्त प्रणालियों के बीच रूटिंग जानकारी का आदान-प्रदान करने के लिए किया जाता है।",
            "BGP हाईजैकिंग से ट्रैफिक को दुर्भावनापूर्ण नेटवर्क के माध्यम से भेजा जा सकता है, जिससे इंटरसेप्शन संभव हो जाता है।",
            "IT अधिनियम 2000 की धारा 69(A) सरकार को कुछ मामलों में सूचना तक सार्वजनिक पहुंच को अवरुद्ध करने की अनुमति देती है।",
        ],
        mcqs: [
            {
                id: "bgp-q1",
                questionEn: "BGP (Border Gateway Protocol) is used for:",
                questionHi: "BGP (बॉर्डर गेटवे प्रोटोकॉल) किसके लिए उपयोग किया जाता है?",
                options: [
                    { key: "a", en: "Email security", hi: "ईमेल सुरक्षा" },
                    { key: "b", en: "Routing internet traffic between autonomous systems", hi: "स्वायत्त प्रणालियों के बीच इंटरनेट ट्रैफिक रूटिंग" },
                    { key: "c", en: "File compression", hi: "फ़ाइल संपीड़न" },
                    { key: "d", en: "Video streaming", hi: "वीडियो स्ट्रीमिंग" },
                ],
                correctKey: "b",
                explanationEn: "BGP is the routing protocol that directs internet traffic between autonomous systems (networks).",
                explanationHi: "BGP वह रूटिंग प्रोटोकॉल है जो स्वायत्त प्रणालियों (नेटवर्क) के बीच इंटरनेट ट्रैफिक को निर्देशित करता है।",
            },
        ],
    },

    /* 3. VARYA AI MODEL */
    {
        id: "varya-ai",
        titleEn: "Varya AI Model",
        titleHi: "वर्या AI मॉडल",
        category: "AI & Technology",
        shortDescEn: "India's first indigenous distilled video story-generating AI model, unveiled by IndiaAI Mission under MeitY.",
        shortDescHi: "मीटी के अंतर्गत इंडियाAI मिशन द्वारा अनावरण किया गया भारत का पहला स्वदेशी डिस्टिल्ड वीडियो स्टोरी-जेनरेटिंग AI मॉडल।",
        tag: "AI",
        color: "from-violet-600 to-violet-800",
        icon: <Bot className="w-5 h-5" />,
        metaEn: ["IndiaAI Mission", "MeitY", "Avataar.ai"],
        metaHi: ["इंडियाAI मिशन", "मीटी", "अवतार.ai"],
        overviewEn: [
            "IndiaAI Mission under MeitY unveiled Varya, India's first indigenous distilled video story-generating AI model.",
            "Distilled models are smaller, more efficient versions of larger AI models.",
            "Developer: Avataar.ai.",
        ],
        overviewHi: [
            "मीटी के अंतर्गत इंडियाAI मिशन ने वर्या का अनावरण किया, जो भारत का पहला स्वदेशी डिस्टिल्ड वीडियो स्टोरी-जेनरेटिंग AI मॉडल है।",
            "डिस्टिल्ड मॉडल बड़े AI मॉडल के अपेक्षाकृत छोटे, अधिक कुशल संस्करण होते हैं।",
            "विकसितकर्ता: अवतार.ai।",
        ],
        factsEn: [
            "Varya generates video stories from text prompts.",
            "Distillation reduces model size while retaining much of the capability.",
            "Reflects India's push for sovereign AI under IndiaAI Mission.",
        ],
        factsHi: [
            "वर्या टेक्स्ट प्रॉम्प्ट से वीडियो कहानियां उत्पन्न करता है।",
            "डिस्टिलेशन क्षमता का बड़ा हिस्सा बनाए रखते हुए मॉडल का आकार कम करता है।",
            "यह इंडियाAI मिशन के तहत भारत के संप्रभु AI प्रयास को दर्शाता है।",
        ],
        mcqs: [
            {
                id: "varya-q1",
                questionEn: "Varya is India's first indigenous ___ AI model.",
                questionHi: "वर्या भारत का पहला स्वदेशी ___ AI मॉडल है।",
                options: [
                    { key: "a", en: "Text-to-image", hi: "टेक्स्ट-टू-इमेज" },
                    { key: "b", en: "Distilled video story-generating", hi: "डिस्टिल्ड वीडियो स्टोरी-जेनरेटिंग" },
                    { key: "c", en: "Voice cloning", hi: "वॉइस क्लोनिंग" },
                    { key: "d", en: "Speech-to-text", hi: "स्पीच-टू-टेक्स्ट" },
                ],
                correctKey: "b",
                explanationEn: "Varya is India's first indigenous distilled video story-generating AI model, developed by Avataar.ai under the IndiaAI Mission.",
                explanationHi: "वर्या इंडियाAI मिशन के तहत अवतार.ai द्वारा विकसित भारत का पहला स्वदेशी डिस्टिल्ड वीडियो स्टोरी-जेनरेटिंग AI मॉडल है।",
            },
        ],
    },

    /* 4. PROJECT NIMBUS */
    {
        id: "project-nimbus",
        titleEn: "Project Nimbus",
        titleHi: "प्रोजेक्ट निम्बस",
        category: "Global Tech & Ethics",
        shortDescEn: "A 2021 cloud-computing agreement between Israel and Google/Amazon. Protests cite ethical concerns over state surveillance.",
        shortDescHi: "इजरायल और Google/Amazon के बीच 2021 का क्लाउड समझौता। राज्य निगरानी पर नैतिक चिंताओं को लेकर विरोध।",
        tag: "Ethics",
        color: "from-red-600 to-red-800",
        icon: <Globe2 className="w-5 h-5" />,
        metaEn: ["Israel", "Google", "Amazon"],
        metaHi: ["इजरायल", "Google", "Amazon"],
        overviewEn: [
            "Project Nimbus is in news due to global protests over Google and Amazon providing cloud/AI infrastructure to Israel's government and security system.",
            "Critics express serious ethical concerns that this high-security commercial digital partnership enables state-sponsored surveillance and military operations.",
            "Announced in 2021, it is a major cloud-computing agreement.",
        ],
        overviewHi: [
            "इजरायल सरकार और उसके सुरक्षा तंत्र को क्लाउड तथा AI अवसंरचना उपलब्ध कराने में Google और Amazon की भूमिका पर वैश्विक विरोध के कारण प्रोजेक्ट निम्बस चर्चा में है।",
            "आलोचकों ने गंभीर नैतिक चिंताएँ व्यक्त की हैं कि यह उच्च सुरक्षा वाली व्यावसायिक डिजिटल साझेदारी राज्य-प्रायोजित निगरानी और सैन्य अभियानों को सक्षम बना रही है।",
            "2021 में घोषित, यह एक बड़ा क्लाउड कंप्यूटिंग समझौता है।",
        ],
        factsEn: [
            "Objective: digitize and modernize Israel's public sector infrastructure.",
            "Parties: Israeli government + Google + Amazon.",
            "Highlights tensions between commercial tech partnerships and human rights concerns.",
        ],
        factsHi: [
            "उद्देश्य: इजरायल के सार्वजनिक क्षेत्र के बुनियादी ढांचे को डिजिटल और आधुनिक बनाना।",
            "पक्ष: इजरायल सरकार + Google + Amazon।",
            "व्यावसायिक तकनीकी साझेदारियों और मानवाधिकार चिंताओं के बीच तनाव को उजागर करता है।",
        ],
        mcqs: [
            {
                id: "nimbus-q1",
                questionEn: "Project Nimbus is a cloud-computing agreement between Israel and which tech companies?",
                questionHi: "प्रोजेक्ट निम्बस इजरायल और किन टेक कंपनियों के बीच क्लाउड कंप्यूटिंग समझौता है?",
                options: [
                    { key: "a", en: "Microsoft & IBM", hi: "Microsoft और IBM" },
                    { key: "b", en: "Google & Amazon", hi: "Google और Amazon" },
                    { key: "c", en: "Apple & Meta", hi: "Apple और Meta" },
                    { key: "d", en: "Tesla & OpenAI", hi: "Tesla और OpenAI" },
                ],
                correctKey: "b",
                explanationEn: "Project Nimbus (2021) is a major cloud-computing agreement between the Israeli government and Google + Amazon.",
                explanationHi: "प्रोजेक्ट निम्बस (2021) इजरायल सरकार और Google + Amazon के बीच एक बड़ा क्लाउड कंप्यूटिंग समझौता है।",
            },
        ],
    },

    /* 5. BIOCHAR */
    {
        id: "biochar",
        titleEn: "Biochar",
        titleHi: "बायोचार",
        category: "Environment & Agriculture",
        shortDescEn: "A carbon-rich, porous material made by pyrolysis of biomass. Improves soil health and acts as a carbon sink.",
        shortDescHi: "बायोमास के पायरोलिसिस से बना कार्बन-समृद्ध, छिद्रपूर्ण पदार्थ। मृदा स्वास्थ्य सुधारता है, कार्बन सिंक के रूप में कार्य करता है।",
        tag: "Environment",
        color: "from-green-600 to-green-800",
        icon: <Leaf className="w-5 h-5" />,
        metaEn: ["Pyrolysis", "Carbon sink", "Soil health"],
        metaHi: ["पायरोलिसिस", "कार्बन सिंक", "मृदा स्वास्थ्य"],
        overviewEn: [
            "Biochar is gaining attention as a solution for two major Indian agriculture problems: crop residue burning and declining soil health.",
            "It is a highly porous, carbon-rich material resembling charcoal.",
            "Produced via thermal decomposition of biomass (agricultural waste, forestry residues, food processing waste).",
        ],
        overviewHi: [
            "बायोचार भारतीय कृषि की दो बड़ी समस्याओं: फसल अवशेष जलाने और घटती मृदा-स्वास्थ्य गुणवत्ता के समाधान के रूप में चर्चा में है।",
            "यह अत्यधिक छिद्रपूर्ण, कार्बन-समृद्ध पदार्थ है जो चारकोल के समान है।",
            "जैविक बायोमास (कृषि अपशिष्ट, वानिकी अवशेष, खाद्य प्रसंस्करण अपशिष्ट) के तापीय अपघटन से उत्पादित।",
        ],
        factsEn: [
            "Production technique: Pyrolysis — heating biomass to 380°C–700°C in oxygen-free environment.",
            "Improves soil fertility, water retention, and nutrient availability.",
            "Acts as a long-term carbon sink, storing carbon in soil.",
        ],
        factsHi: [
            "उत्पादन तकनीक: पायरोलिसिस — ऑक्सीजन-रहित वातावरण में 380°C–700°C पर बायोमास गर्म करना।",
            "मृदा उर्वरता, जल-धारण क्षमता और पोषक तत्वों की उपलब्धता में सुधार।",
            "दीर्घकालिक कार्बन सिंक के रूप में कार्य करता है।",
        ],
        mcqs: [
            {
                id: "biochar-q1",
                questionEn: "Biochar is produced through a thermochemical process called:",
                questionHi: "बायोचार किस थर्मोकेमिकल प्रक्रिया से उत्पन्न होता है?",
                options: [
                    { key: "a", en: "Combustion", hi: "दहन" },
                    { key: "b", en: "Pyrolysis", hi: "पायरोलिसिस" },
                    { key: "c", en: "Fermentation", hi: "किण्वन" },
                    { key: "d", en: "Hydrolysis", hi: "जल अपघटन" },
                ],
                correctKey: "b",
                explanationEn: "Pyrolysis — heating biomass at 380°C–700°C in an oxygen-free environment.",
                explanationHi: "पायरोलिसिस — ऑक्सीजन-रहित वातावरण में 380°C–700°C पर बायोमास गर्म करना।",
            },
        ],
    },

    /* 6. MEDICAL CYCLOTRON */
    {
        id: "medical-cyclotron",
        titleEn: "High-Energy Medical Cyclotron Project",
        titleHi: "हाई-एनर्जी मेडिकल साइक्लोट्रॉन परियोजना",
        category: "Health & Infrastructure",
        shortDescEn: "₹300-crore nuclear medicine facility in Nagpur producing medical radioisotopes for cancer diagnosis and treatment.",
        shortDescHi: "नागपुर में ₹300 करोड़ की परमाणु चिकित्सा सुविधा — कैंसर निदान और उपचार के लिए चिकित्सीय रेडियोआइसोटोप।",
        tag: "Health",
        color: "from-cyan-600 to-cyan-800",
        icon: <Atom className="w-5 h-5" />,
        metaEn: ["Nagpur, Maharashtra", "₹300 crore", "Nuclear medicine"],
        metaHi: ["नागपुर, महाराष्ट्र", "₹300 करोड़", "परमाणु चिकित्सा"],
        overviewEn: [
            "Maharashtra Cabinet approved a ₹300-crore High-Energy Medical Cyclotron Project in Nagpur.",
            "It is an advanced nuclear medicine facility based on a high-energy particle accelerator.",
            "Produces special medical radioisotopes for cancer diagnosis, targeted treatment, and medical research.",
        ],
        overviewHi: [
            "महाराष्ट्र कैबिनेट ने नागपुर में ₹300 करोड़ की हाई-एनर्जी मेडिकल साइक्लोट्रॉन परियोजना को मंजूरी दी।",
            "यह उच्च-ऊर्जा कण त्वरक पर आधारित उन्नत परमाणु चिकित्सा सुविधा है।",
            "कैंसर निदान, लक्षित उपचार और चिकित्सा अनुसंधान के लिए विशेष चिकित्सीय रेडियोआइसोटोप उत्पन्न करता है।",
        ],
        factsEn: [
            "Cyclotrons accelerate charged particles to high speeds.",
            "Medical radioisotopes (e.g., FDG for PET scans) are crucial for cancer imaging.",
            "Strengthens India's nuclear medicine infrastructure.",
        ],
        factsHi: [
            "साइक्लोट्रॉन आवेशित कणों को उच्च गति तक त्वरित करते हैं।",
            "चिकित्सीय रेडियोआइसोटोप (जैसे PET स्कैन के लिए FDG) कैंसर इमेजिंग के लिए महत्वपूर्ण हैं।",
            "भारत की परमाणु चिकित्सा अवसंरचना को मजबूत करता है।",
        ],
        mcqs: [
            {
                id: "cyc-q1",
                questionEn: "What is the primary purpose of a medical cyclotron?",
                questionHi: "मेडिकल साइक्लोट्रॉन का प्राथमिक उद्देश्य क्या है?",
                options: [
                    { key: "a", en: "Blood purification", hi: "रक्त शुद्धिकरण" },
                    { key: "b", en: "Producing medical radioisotopes", hi: "चिकित्सीय रेडियोआइसोटोप का उत्पादन" },
                    { key: "c", en: "MRI scanning", hi: "MRI स्कैनिंग" },
                    { key: "d", en: "DNA sequencing", hi: "DNA अनुक्रमण" },
                ],
                correctKey: "b",
                explanationEn: "Cyclotrons produce medical radioisotopes for cancer diagnosis and targeted treatment.",
                explanationHi: "साइक्लोट्रॉन कैंसर निदान और लक्षित उपचार के लिए चिकित्सीय रेडियोआइसोटोप उत्पन्न करते हैं।",
            },
        ],
    },

    /* 7. MISSION AAGAMAN */
    {
        id: "mission-aagaman",
        titleEn: "Mission Aagaman",
        titleHi: "मिशन आगमन",
        category: "Space & Technology",
        shortDescEn: "Maiden orbital test flight of Vikram-1, India's first privately developed orbital-class launch vehicle by Skyroot Aerospace.",
        shortDescHi: "विक्रम-1 की पहली परीक्षण उड़ान — भारत का पहला निजी तौर पर विकसित ऑर्बिटल-क्लास लॉन्च व्हीकल, स्काईईरूट एयरोस्पेस।",
        tag: "Space",
        color: "from-indigo-600 to-indigo-800",
        icon: <Rocket className="w-5 h-5" />,
        metaEn: ["Skyroot Aerospace", "Vikram-1", "Sriharikota"],
        metaHi: ["स्काईईरूट एयरोस्पेस", "विक्रम-1", "श्रीहरिकोटा"],
        overviewEn: [
            "Mission Aagaman is the maiden orbital test flight of Vikram-1 — India's first privately developed orbital-class launch vehicle.",
            "Developed by Skyroot Aerospace, a Hyderabad-based space-tech startup.",
            "Launch site: Satish Dhawan Space Centre, Sriharikota.",
        ],
        overviewHi: [
            "मिशन आगमन विक्रम-1 की पहली परीक्षण उड़ान है — भारत का पहला निजी तौर पर विकसित ऑर्बिटल-क्लास लॉन्च व्हीकल।",
            "हैदराबाद स्थित स्पेस-टेक स्टार्टअप स्काईईरूट एयरोस्पेस द्वारा विकसित।",
            "प्रक्षेपण स्थल: सतीश धवन अंतरिक्ष केंद्र, श्रीहरिकोटा।",
        ],
        factsEn: [
            "Skyroot Aerospace became the first Indian private company to reach space (2022, Vikram-S).",
            "Vikram-1 is an orbital-class rocket (higher payload capacity than Vikram-S).",
            "Marks a milestone in India's private space ecosystem.",
        ],
        factsHi: [
            "स्काईईरूट एयरोस्पेस अंतरिक्ष तक पहुंचने वाली पहली भारतीय निजी कंपनी बनी (2022, विक्रम-S)।",
            "विक्रम-1 एक ऑर्बिटल-क्लास रॉकेट है (विक्रम-S से अधिक पेलोड क्षमता)।",
            "भारत के निजी अंतरिक्ष पारिस्थितिकी तंत्र में मील का पत्थर।",
        ],
        mcqs: [
            {
                id: "aagaman-q1",
                questionEn: "Mission Aagaman refers to the maiden flight of which launch vehicle?",
                questionHi: "मिशन आगमन किस लॉन्च व्हीकल की पहली उड़ान है?",
                options: [
                    { key: "a", en: "PSLV-C60", hi: "PSLV-C60" },
                    { key: "b", en: "Vikram-1", hi: "विक्रम-1" },
                    { key: "c", en: "GSLV-F17", hi: "GSLV-F17" },
                    { key: "d", en: "Agnibaan", hi: "अग्निबाण" },
                ],
                correctKey: "b",
                explanationEn: "Mission Aagaman is the maiden orbital test flight of Vikram-1 by Skyroot Aerospace.",
                explanationHi: "मिशन आगमन स्काईईरूट एयरोस्पेस द्वारा विक्रम-1 की पहली परीक्षण उड़ान है।",
            },
        ],
    },

    /* 8. GREEN UREA */
    {
        id: "green-urea",
        titleEn: "Green Urea",
        titleHi: "ग्रीन यूरिया",
        category: "Energy & Agriculture",
        shortDescEn: "Eco-friendly fertilizer produced using green hydrogen and green ammonia, supporting the National Green Hydrogen Mission.",
        shortDescHi: "ग्रीन हाइड्रोजन और ग्रीन अमोनिया से उत्पादित पर्यावरण-अनुकूल उर्वरक, राष्ट्रीय ग्रीन हाइड्रोजन मिशन का समर्थन।",
        tag: "Energy",
        color: "from-emerald-600 to-emerald-800",
        icon: <FlaskConical className="w-5 h-5" />,
        metaEn: ["Green Hydrogen", "Pudimadaka, AP", "NGHM"],
        metaHi: ["ग्रीन हाइड्रोजन", "पुडिमडका, आंध्र प्रदेश", "NGHM"],
        overviewEn: [
            "Department of Fertilizers (DoF) held a Pre-EOI meeting for Green Urea Plants in India.",
            "Green Urea is produced using green hydrogen and green ammonia instead of conventional fossil fuels.",
            "Supports National Green Hydrogen Mission (NGHM).",
        ],
        overviewHi: [
            "उर्वरक विभाग (DoF) ने भारत में ग्रीन यूरिया संयंत्रों के लिए Pre-EOI बैठक आयोजित की।",
            "ग्रीन यूरिया पारंपरिक जीवाश्म ईंधन के बजाय ग्रीन हाइड्रोजन और ग्रीन अमोनिया से उत्पादित होता है।",
            "राष्ट्रीय ग्रीन हाइड्रोजन मिशन (NGHM) का समर्थन करता है।",
        ],
        factsEn: [
            "India's first indigenous green urea plant proposed at Pudimadaka Green Hydrogen Hub, Andhra Pradesh.",
            "NGHM launched January 2023, implemented by MNRE.",
            "NGHM Target: 5 million tonnes per annum green hydrogen capacity by 2030.",
        ],
        factsHi: [
            "भारत का पहला स्वदेशी हरित यूरिया संयंत्र पुडिमडका ग्रीन हाइड्रोजन हब, आंध्र प्रदेश में प्रस्तावित।",
            "NGHM जनवरी 2023 में शुरू, MNRE द्वारा कार्यान्वित।",
            "NGHM लक्ष्य: 2030 तक 5 मिलियन टन प्रति वर्ष ग्रीन हाइड्रोजन क्षमता।",
        ],
        mcqs: [
            {
                id: "urea-q1",
                questionEn: "India's first indigenous green urea plant is proposed in which state?",
                questionHi: "भारत का पहला स्वदेशी हरित यूरिया संयंत्र किस राज्य में प्रस्तावित है?",
                options: [
                    { key: "a", en: "Gujarat", hi: "गुजरात" },
                    { key: "b", en: "Maharashtra", hi: "महाराष्ट्र" },
                    { key: "c", en: "Andhra Pradesh", hi: "आंध्र प्रदेश" },
                    { key: "d", en: "Tamil Nadu", hi: "तमिलनाडु" },
                ],
                correctKey: "c",
                explanationEn: "Pudimadaka Green Hydrogen Hub in Andhra Pradesh.",
                explanationHi: "पुडिमडका ग्रीन हाइड्रोजन हब, आंध्र प्रदेश।",
            },
        ],
    },

    /* 9. I-2SEA CABLE */
    {
        id: "i2sea-cable",
        titleEn: "I-2SEA Submarine Cable",
        titleHi: "I-2SEA सबमरीन केबल",
        category: "Digital Infrastructure",
        shortDescEn: "3,600-km undersea fibre-optic cable system linking India (Machilipatnam, Chennai) with Kuala Lumpur and Singapore.",
        shortDescHi: "3,600 किमी समुद्री फाइबर-ऑप्टिक केबल — भारत (मछलीपट्टनम, चेन्नई) को कुआलालंपुर और सिंगापुर से जोड़ेगा।",
        tag: "Digital",
        color: "from-blue-600 to-blue-800",
        icon: <Wifi className="w-5 h-5" />,
        metaEn: ["3,600 km", "Microsoft + Lightstorm", "Tata Communications"],
        metaHi: ["3,600 किमी", "Microsoft + Lightstorm", "टाटा कम्युनिकेशंस"],
        overviewEn: [
            "Microsoft and Lightstorm partnered with Tata Communications and global firms to build the 3,600-km I-2SEA submarine cable system.",
            "Submarine cables are undersea fibre-optic cables carrying most of global internet, telecom, and data traffic.",
            "Route: Machilipatnam (AP) + South Chennai (TN) to Kuala Lumpur (Malaysia) + Singapore.",
        ],
        overviewHi: [
            "Microsoft और Lightstorm ने टाटा कम्युनिकेशंस और वैश्विक कंपनियों के साथ 3,600 किमी I-2SEA सबमरीन केबल सिस्टम बनाने के लिए साझेदारी की।",
            "सबमरीन केबल समुद्र के नीचे फाइबर-ऑप्टिक केबल हैं जो अधिकांश वैश्विक इंटरनेट, टेलीकॉम, डेटा ट्रैफिक संचालित करती हैं।",
            "मार्ग: मछलीपट्टनम (आंध्र) + दक्षिण चेन्नई (तमिलनाडु) से कुआलालंपुर (मलेशिया) + सिंगापुर।",
        ],
        factsEn: [
            "Submarine cables carry ~99% of intercontinental data.",
            "Strengthens India's digital connectivity with Southeast Asia.",
            "Boosts data sovereignty and reduces reliance on single routes.",
        ],
        factsHi: [
            "सबमरीन केबल अंतरमहाद्वीपीय डेटा का ~99% वहन करती हैं।",
            "दक्षिण-पूर्व एशिया के साथ भारत की डिजिटल कनेक्टिविटी मजबूत।",
            "डेटा संप्रभुता बढ़ती है और एकल मार्गों पर निर्भरता कम होती है।",
        ],
        mcqs: [
            {
                id: "cable-q1",
                questionEn: "The I-2SEA submarine cable connects India to which countries?",
                questionHi: "I-2SEA सबमरीन केबल भारत को किन देशों से जोड़ती है?",
                options: [
                    { key: "a", en: "Sri Lanka & Maldives", hi: "श्रीलंका और मालदीव" },
                    { key: "b", en: "Malaysia & Singapore", hi: "मलेशिया और सिंगापुर" },
                    { key: "c", en: "Thailand & Vietnam", hi: "थाईलैंड और वियतनाम" },
                    { key: "d", en: "Indonesia & Philippines", hi: "इंडोनेशिया और फिलीपींस" },
                ],
                correctKey: "b",
                explanationEn: "I-2SEA links Machilipatnam and Chennai to Kuala Lumpur (Malaysia) and Singapore.",
                explanationHi: "I-2SEA मछलीपट्टनम और चेन्नई को कुआलालंपुर (मलेशिया) और सिंगापुर से जोड़ता है।",
            },
        ],
    },

    /* 10. GAGAN */
    {
        id: "gagan",
        titleEn: "GAGAN",
        titleHi: "गगन",
        category: "Space & Navigation",
        shortDescEn: "GPS Aided GEO Augmented Navigation — India's SBAS, jointly developed by ISRO and AAI. Supports precision aircraft landings.",
        shortDescHi: "GPS एडेड जियो ऑगमेंटेड नेविगेशन — भारत की SBAS, ISRO और AAI द्वारा संयुक्त रूप से विकसित। सटीक विमान लैंडिंग में सहायक।",
        tag: "Navigation",
        color: "from-sky-600 to-sky-800",
        icon: <Satellite className="w-5 h-5" />,
        metaEn: ["SBAS", "ISRO + AAI", "Since 2015"],
        metaHi: ["SBAS", "ISRO + AAI", "2015 से"],
        overviewEn: [
            "DGCA successfully conducted India's first satellite-based landing system approach on a commercial jet aircraft using GAGAN.",
            "GAGAN (GPS Aided GEO Augmented Navigation) is India's indigenous Satellite-Based Augmentation System (SBAS), operational since 2015.",
            "Developed jointly by ISRO and Airports Authority of India (AAI).",
        ],
        overviewHi: [
            "DGCA ने GAGAN का उपयोग करके वाणिज्यिक जेट विमान पर भारत का पहला उपग्रह-आधारित लैंडिंग सिस्टम दृष्टिकोण सफलतापूर्वक संचालित किया।",
            "GAGAN (GPS एडेड जियो ऑगमेंटेड नेविगेशन) भारत की स्वदेशी SBAS है, 2015 से संचालित।",
            "ISRO और भारतीय विमानन प्राधिकरण (AAI) द्वारा संयुक्त रूप से विकसित।",
        ],
        factsEn: [
            "GAGAN corrects GPS signals specifically for aviation precision.",
            "India became the 4th country to implement SBAS (after US-WAAS, Europe-EGNOS, Japan-MSAS).",
            "NavIC = independent regional PNT system (different from GAGAN).",
        ],
        factsHi: [
            "GAGAN विमानन सटीकता के लिए विशेष रूप से GPS संकेतों में सुधार करता है।",
            "भारत SBAS लागू करने वाला चौथा देश बना (अमेरिका-WAAS, यूरोप-EGNOS, जापान-MSAS के बाद)।",
            "NavIC = स्वतंत्र क्षेत्रीय PNT प्रणाली (GAGAN से अलग)।",
        ],
        mcqs: [
            {
                id: "gagan-q1",
                questionEn: "GAGAN is India's:",
                questionHi: "गगन भारत की क्या है?",
                options: [
                    { key: "a", en: "Independent navigation system (like GPS)", hi: "स्वतंत्र नेविगेशन प्रणाली (GPS जैसी)" },
                    { key: "b", en: "Satellite-Based Augmentation System (SBAS)", hi: "उपग्रह-आधारित संवर्धन प्रणाली (SBAS)" },
                    { key: "c", en: "Weather forecasting system", hi: "मौसम पूर्वानुमान प्रणाली" },
                    { key: "d", en: "Earth observation satellite", hi: "पृथ्वी अवलोकन उपग्रह" },
                ],
                correctKey: "b",
                explanationEn: "GAGAN is India's SBAS, developed by ISRO + AAI.",
                explanationHi: "GAGAN भारत की SBAS है, ISRO + AAI द्वारा विकसित।",
            },
        ],
    },

    /* 11. EÄRENDIL-1 */
    {
        id: "earendil-1",
        titleEn: "Eärendil-1 Satellite Mission",
        titleHi: "एसडिल-1 सैटेलाइट मिशन",
        category: "Space & Technology",
        shortDescEn: "US FCC authorized Reflect Orbital to launch Eärendil-1, testing reflection of sunlight from space to Earth after sunset.",
        shortDescHi: "US FCC ने Reflect Orbital को Eärendil-1 लॉन्च करने की अनुमति दी — सूर्यास्त के बाद अंतरिक्ष से पृथ्वी पर सूर्य प्रकाश परावर्तन का परीक्षण।",
        tag: "Space",
        color: "from-amber-600 to-amber-800",
        icon: <Sun className="w-5 h-5" />,
        metaEn: ["Reflect Orbital", "FCC approved", "LEO"],
        metaHi: ["Reflect Orbital", "FCC अनुमोदित", "LEO"],
        overviewEn: [
            "US FCC authorized Reflect Orbital to launch and operate the experimental Eärendil-1 satellite.",
            "Objective: Test whether sunlight can be reflected from space to specific Earth locations after sunset.",
            "Uses a large, ultra-light mirror in orbit to redirect sunlight toward the ground.",
        ],
        overviewHi: [
            "अमेरिकी FCC ने Reflect Orbital को Eärendil-1 सैटेलाइट लॉन्च और संचालित करने की अनुमति दी।",
            "उद्देश्य: सूर्यास्त के बाद अंतरिक्ष से पृथ्वी के विशिष्ट स्थानों पर सूर्य प्रकाश परावर्तित हो सकता है या नहीं, इसका परीक्षण।",
            "कक्षा में एक बड़े, अल्ट्रा-लाइट दर्पण का उपयोग करके सूर्य प्रकाश को पृथ्वी की ओर मोड़ता है।",
        ],
        factsEn: [
            "Eärendil-1 operates in Low Earth Orbit (LEO).",
            "Potential applications: nighttime illumination, solar power.",
            "Concerns: light pollution and interference with astronomy.",
        ],
        factsHi: [
            "Eärendil-1 लो अर्थ ऑर्बिट (LEO) में संचालित होगा।",
            "संभावित अनुप्रयोग: रात्रि प्रकाश, सौर ऊर्जा।",
            "चिंताएं: प्रकाश प्रदूषण और खगोल विज्ञान में हस्तक्षेप।",
        ],
        mcqs: [
            {
                id: "earendil-q1",
                questionEn: "Eärendil-1 aims to test:",
                questionHi: "Eärendil-1 किसका परीक्षण करना चाहता है?",
                options: [
                    { key: "a", en: "Lunar mining", hi: "चंद्र खनन" },
                    { key: "b", en: "Reflecting sunlight from space to Earth", hi: "अंतरिक्ष से पृथ्वी पर सूर्य प्रकाश परावर्तन" },
                    { key: "c", en: "Interstellar communication", hi: "अंतरतारकीय संचार" },
                    { key: "d", en: "Asteroid deflection", hi: "क्षुद्रग्रह विक्षेपण" },
                ],
                correctKey: "b",
                explanationEn: "Eärendil-1 tests reflecting sunlight from space to specific Earth locations after sunset.",
                explanationHi: "Eärendil-1 सूर्यास्त के बाद अंतरिक्ष से पृथ्वी के विशिष्ट स्थानों पर सूर्य प्रकाश परावर्तन का परीक्षण करता है।",
            },
        ],
    },

    /* 12. PRAXIS MISSION */
    {
        id: "praxis-mission",
        titleEn: "PRAXIS Mission (NASA)",
        titleHi: "PRAXIS मिशन (NASA)",
        category: "Space & Science",
        shortDescEn: "NASA NIAC 2026 Phase I selected mission to collect in-situ samples from planetary rings of Saturn, Uranus, Neptune.",
        shortDescHi: "NASA NIAC 2026 फेज-I में चयनित मिशन — शनि, यूरेनस, नेप्च्यून के वलय तंत्र से इन-सीटू नमूने एकत्र करना।",
        tag: "Space",
        color: "from-purple-600 to-purple-800",
        icon: <Atom className="w-5 h-5" />,
        metaEn: ["NIAC 2026", "Planetary rings", "Bio-inspired robotics"],
        metaHi: ["NIAC 2026", "ग्रहीय वलय", "जैव-प्रेरित रोबोटिक्स"],
        overviewEn: [
            "NASA selected the PRAXIS mission concept for Innovative Advanced Concepts (NIAC) 2026 – Phase I funding.",
            "Full form: Planetary Rings Autonomous Exploration with In-situ Sampling.",
            "First-of-its-kind to directly collect in-situ samples from planetary ring systems.",
        ],
        overviewHi: [
            "NASA ने PRAXIS मिशन अवधारणा को Innovative Advanced Concepts (NIAC) 2026 – फेज-I वित्तपोषण के लिए चुना।",
            "पूर्ण रूप: Planetary Rings Autonomous Exploration with In-situ Sampling।",
            "ग्रहीय वलय तंत्र से प्रत्यक्ष इन-सीटू नमूने एकत्र करने वाला पहला मिशन।",
        ],
        factsEn: [
            "Improves understanding of Saturn, Uranus, Neptune ring systems.",
            "Uses bio-inspired robotics, real-time AI, lightweight sampling tools.",
            "NIAC supports high-risk, innovative early-stage mission concepts.",
        ],
        factsHi: [
            "शनि, यूरेनस, नेप्च्यून के वलय तंत्र की समझ बेहतर होती है।",
            "जैव-प्रेरित रोबोटिक्स, रियल-टाइम AI, हल्के सैंपलिंग उपकरण का उपयोग।",
            "NIAC उच्च-जोखिम वाली नवाचारी प्रारंभिक मिशन अवधारणाओं का समर्थन करता है।",
        ],
        mcqs: [
            {
                id: "praxis-q1",
                questionEn: "PRAXIS aims to sample:",
                questionHi: "PRAXIS किससे नमूने एकत्र करना चाहता है?",
                options: [
                    { key: "a", en: "Asteroid belt", hi: "क्षुद्रग्रह पट्टी" },
                    { key: "b", en: "Planetary ring systems", hi: "ग्रहीय वलय तंत्र" },
                    { key: "c", en: "Solar corona", hi: "सौर कोरोना" },
                    { key: "d", en: "Interstellar dust", hi: "अंतरतारकीय धूल" },
                ],
                correctKey: "b",
                explanationEn: "PRAXIS targets planetary ring systems (Saturn, Uranus, Neptune) for in-situ sampling.",
                explanationHi: "PRAXIS ग्रहीय वलय तंत्र (शनि, यूरेनस, नेप्च्यून) से इन-सीटू सैंपलिंग को लक्षित करता है।",
            },
        ],
    },

    /* 13. QDENGA VACCINE */
    {
        id: "qdenga-vaccine",
        titleEn: "India's First Dengue Vaccine — QDENGA",
        titleHi: "भारत की पहली डेंगू वैक्सीन — QDENGA",
        category: "Health",
        shortDescEn: "CDSCO approved Takeda's QDENGA (TAK-003) as India's first approved dengue vaccine — protects against all 4 serotypes.",
        shortDescHi: "CDSCO ने टाकेडा की QDENGA (TAK-003) को भारत की पहली स्वीकृत डेंगू वैक्सीन के रूप में मंजूरी दी — सभी 4 सीरोटाइप से सुरक्षा।",
        tag: "Health",
        color: "from-rose-600 to-rose-800",
        icon: <Stethoscope className="w-5 h-5" />,
        metaEn: ["CDSCO", "Takeda", "Age 4-60"],
        metaHi: ["CDSCO", "टाकेडा", "आयु 4-60"],
        overviewEn: [
            "CDSCO approved Takeda's QDENGA as India's first approved vaccine for prevention of dengue.",
            "Approved vaccine: QDENGA (TAK-003).",
            "Manufactured by Takeda GmbH (Germany), imported by Takeda Biopharmaceuticals India.",
        ],
        overviewHi: [
            "CDSCO ने टाकेडा की QDENGA को डेंगू की रोकथाम के लिए भारत का पहला स्वीकृत टीका के रूप में मंजूरी दी।",
            "स्वीकृत वैक्सीन: QDENGA (TAK-003)।",
            "जर्मनी की टाकेडा GmbH द्वारा निर्मित, टाकेडा बायोफार्मास्युटिकल्स इंडिया द्वारा आयातित।",
        ],
        factsEn: [
            "Target age: 4–60 years.",
            "Protects against all 4 dengue serotypes (DENV-1, 2, 3, 4).",
            "Dengue: mosquito-borne, caused by Flavivirus, transmitted by Aedes aegypti (also transmits chikungunya, yellow fever, Zika).",
        ],
        factsHi: [
            "लक्षित आयु: 4–60 वर्ष।",
            "सभी 4 डेंगू सीरोटाइप (DENV-1, 2, 3, 4) से सुरक्षा।",
            "डेंगू: मच्छर जनित, Flavivirus के कारण, Aedes aegypti द्वारा संचरित (चिकनगुनिया, पीला बुखार, जीका भी)।",
        ],
        mcqs: [
            {
                id: "qdenga-q1",
                questionEn: "India's first approved dengue vaccine is:",
                questionHi: "भारत की पहली स्वीकृत डेंगू वैक्सीन कौन सी है?",
                options: [
                    { key: "a", en: "Covovax", hi: "कोवोवैक्स" },
                    { key: "b", en: "QDENGA (TAK-003)", hi: "QDENGA (TAK-003)" },
                    { key: "c", en: "Dengvaxia (first globally)", hi: "Dengvaxia (वैश्विक रूप से पहली)" },
                    { key: "d", en: "Gardasil", hi: "गार्डासिल" },
                ],
                correctKey: "b",
                explanationEn: "QDENGA (TAK-003) by Takeda — India's first approved dengue vaccine (all 4 serotypes, ages 4–60).",
                explanationHi: "टाकेडा की QDENGA (TAK-003) — भारत की पहली स्वीकृत डेंगू वैक्सीन (सभी 4 सीरोटाइप, 4-60 वर्ष)।",
            },
        ],
    },

    /* 14. CAFE-III */
    {
        id: "cafe-3",
        titleEn: "CAFE-III Norms",
        titleHi: "CAFE-III मानक",
        category: "Environment & Transport",
        shortDescEn: "Corporate Average Fuel Efficiency norms — prescribed by BEE. CAFE-III proposed from April 2027 to March 2032.",
        shortDescHi: "कॉर्पोरेट औसत ईंधन दक्षता मानक — BEE द्वारा। CAFE-III अप्रैल 2027 से मार्च 2032 तक प्रस्तावित।",
        tag: "Environment",
        color: "from-teal-600 to-teal-800",
        icon: <Truck className="w-5 h-5" />,
        metaEn: ["BEE (Ministry of Power)", "April 2027", "CO2 reduction"],
        metaHi: ["BEE (विद्युत मंत्रालय)", "अप्रैल 2027", "CO2 कमी"],
        overviewEn: [
            "Government proposed draft CAFE-3 norms introducing flexible compliance and carbon credit trading for automakers.",
            "CAFE norms prescribe average fuel efficiency and CO2 emission standards for an automaker's entire fleet.",
            "Aim: improve fuel efficiency, reduce vehicular CO2, promote clean transport.",
        ],
        overviewHi: [
            "सरकार ने वाहन निर्माताओं के लिए लचीला अनुपालन और कार्बन क्रेडिट ट्रेडिंग शुरू करते हुए ड्राफ्ट CAFE-3 मानकों का प्रस्ताव दिया।",
            "CAFE मानक किसी वाहन निर्माता के संपूर्ण बेड़े के लिए औसत ईंधन दक्षता और CO2 उत्सर्जन मानक निर्धारित करते हैं।",
            "उद्देश्य: ईंधन दक्षता बढ़ाना, वाहनों से CO2 कम करना, स्वच्छ परिवहन को बढ़ावा।",
        ],
        factsEn: [
            "Established by Bureau of Energy Efficiency (BEE) under Ministry of Power.",
            "Timeline: CAFE-I (2017) → CAFE-II (2022) → CAFE-III (proposed April 2027 to March 2032).",
            "Applies to manufacturer fleet average, not individual vehicles.",
        ],
        factsHi: [
            "विद्युत मंत्रालय के तहत ऊर्जा दक्षता ब्यूरो (BEE) द्वारा स्थापित।",
            "टाइमलाइन: CAFE-I (2017) → CAFE-II (2022) → CAFE-III (अप्रैल 2027 से मार्च 2032 तक प्रस्तावित)।",
            "निर्माता के बेड़े के औसत पर लागू, व्यक्तिगत वाहनों पर नहीं।",
        ],
        mcqs: [
            {
                id: "cafe-q1",
                questionEn: "CAFE norms apply to:",
                questionHi: "CAFE मानक किस पर लागू होते हैं?",
                options: [
                    { key: "a", en: "Individual vehicles", hi: "व्यक्तिगत वाहन" },
                    { key: "b", en: "An automaker's entire fleet average", hi: "निर्माता के संपूर्ण बेड़े के औसत" },
                    { key: "c", en: "Only electric vehicles", hi: "केवल इलेक्ट्रिक वाहन" },
                    { key: "d", en: "Only trucks", hi: "केवल ट्रक" },
                ],
                correctKey: "b",
                explanationEn: "CAFE norms prescribe average fuel efficiency/CO2 standards for an automaker's entire fleet, not individual vehicles.",
                explanationHi: "CAFE मानक निर्माता के संपूर्ण बेड़े के लिए औसत ईंधन दक्षता/CO2 मानक निर्धारित करते हैं, व्यक्तिगत वाहनों के लिए नहीं।",
            },
        ],
    },

    /* 15. MOON BASE */
    {
        id: "moon-base",
        titleEn: "NASA Moon Base Programme",
        titleHi: "NASA मून बेस कार्यक्रम",
        category: "Space",
        shortDescEn: "NASA invited ISRO to join its Moon Base Programme — building humanity's first permanent lunar outpost near the South Pole.",
        shortDescHi: "NASA ने ISRO को अपने Moon Base कार्यक्रम में शामिल होने के लिए आमंत्रित किया — दक्षिणी ध्रुव के पास मानवता का पहला स्थायी चंद्र आउटपोस्ट।",
        tag: "Space",
        color: "from-slate-600 to-slate-800",
        icon: <Rocket className="w-5 h-5" />,
        metaEn: ["NASA + ISRO", "Lunar South Pole", "Artemis Accords"],
        metaHi: ["NASA + ISRO", "चंद्र दक्षिणी ध्रुव", "आर्टेमिस समझौता"],
        overviewEn: [
            "NASA invited ISRO to join its Moon Base programme during the 9th India–US Civil Space Joint Working Group meeting in Bengaluru.",
            "A NASA-led initiative to build humanity's first permanent lunar outpost near the Moon's South Pole.",
            "Support astronauts to live and work on the Moon; test technologies for deep-space missions.",
        ],
        overviewHi: [
            "बेंगलुरु में आयोजित भारत-अमेरिका सिविल स्पेस संयुक्त कार्य समूह की 9वीं बैठक में NASA ने ISRO को Moon Base में शामिल होने के लिए आमंत्रित किया।",
            "NASA के नेतृत्व वाली पहल — चंद्रमा के दक्षिणी ध्रुव के पास मानवता का पहला स्थायी चंद्र आउटपोस्ट।",
            "चंद्रमा पर रहने/काम करने में सहायता; डीप स्पेस मिशन के लिए प्रौद्योगिकी परीक्षण।",
        ],
        factsEn: [
            "Builds on Artemis Accords (2020) — India became a signatory in 2023.",
            "Artemis Accords: US-led framework for safe and responsible Moon exploration.",
            "India's contribution builds on Chandrayaan-3 success and Gaganyaan programme.",
        ],
        factsHi: [
            "आर्टेमिस समझौते (2020) पर आधारित — भारत 2023 में हस्ताक्षरकर्ता बना।",
            "आर्टेमिस समझौता: सुरक्षित और जिम्मेदार चंद्र अन्वेषण के लिए अमेरिका के नेतृत्व वाला ढांचा।",
            "भारत का योगदान चंद्रयान-3 की सफलता और गगनयान कार्यक्रम पर आधारित।",
        ],
        mcqs: [
            {
                id: "moonbase-q1",
                questionEn: "The Moon Base Programme builds on which US-led framework?",
                questionHi: "Moon Base कार्यक्रम किस अमेरिका के नेतृत्व वाले ढांचे पर आधारित है?",
                options: [
                    { key: "a", en: "Outer Space Treaty", hi: "बाह्य अंतरिक्ष संधि" },
                    { key: "b", en: "Artemis Accords", hi: "आर्टेमिस समझौता" },
                    { key: "c", en: "Moon Agreement", hi: "चंद्र समझौता" },
                    { key: "d", en: "COPUOS", hi: "COPUOS" },
                ],
                correctKey: "b",
                explanationEn: "The Moon Base Programme builds on the Artemis Accords (2020). India became a signatory in 2023.",
                explanationHi: "Moon Base कार्यक्रम आर्टेमिस समझौते (2020) पर आधारित है। भारत 2023 में हस्ताक्षरकर्ता बना।",
            },
        ],
    },

    /* 16. MISSION MITRA */
    {
        id: "mission-mitra",
        titleEn: "Mission MITRA",
        titleHi: "मिशन मित्रा",
        category: "Space & Human Biology",
        shortDescEn: "ISRO's high-altitude analog study at Leh (April 2026) supporting the Gaganyaan human spaceflight programme.",
        shortDescHi: "गगनयान मानव अंतरिक्ष उड़ान कार्यक्रम का समर्थन करने के लिए लेह (अप्रैल 2026) में ISRO का उच्च-ऊंचाई एनालॉग अध्ययन।",
        tag: "Space",
        color: "from-cyan-600 to-cyan-800",
        icon: <Microscope className="w-5 h-5" />,
        metaEn: ["ISRO + IAM (IAF)", "Leh, Ladakh", "Gaganyaan"],
        metaHi: ["ISRO + IAM (वायुसेना)", "लेह, लद्दाख", "गगनयान"],
        overviewEn: [
            "ISRO conducted Mission MITRA at Leh, Ladakh, in April 2026 as a high-altitude analog study supporting Gaganyaan.",
            "Full form: Mapping of Interoperable Traits and Response Assessment.",
            "First-of-its-kind team behavioural study designed by ISRO and the Indian Air Force's Institute of Aerospace Medicine (IAM).",
        ],
        overviewHi: [
            "ISRO ने गगनयान के समर्थन में अप्रैल 2026 में लेह, लद्दाख में मिशन मित्रा आयोजित किया।",
            "पूर्ण रूप: Mapping of Interoperable Traits and Response Assessment.",
            "ISRO और भारतीय वायुसेना के इंस्टीट्यूट ऑफ एयरोस्पेस मेडिसिन (IAM) द्वारा तैयार पहला दल-व्यवहार अध्ययन।",
        ],
        factsEn: [
            "Studied physiological, psychological and operational dynamics of crew and ground teams.",
            "Leh (~3,500 m) provides hypoxia, low temperature, and isolation — natural analog for spaceflight.",
            "Supports Gaganyaan — India's first human spaceflight programme.",
        ],
        factsHi: [
            "अंतरिक्ष यात्रियों और ग्राउंड टीम की शारीरिक, मनोवैज्ञानिक और परिचालन क्षमता का अध्ययन।",
            "लेह (~3,500 मीटर) में हाइपोक्सिया, कम तापमान, एकांत — अंतरिक्ष उड़ान के लिए प्राकृतिक एनालॉग।",
            "गगनयान — भारत के पहले मानव अंतरिक्ष उड़ान कार्यक्रम का समर्थन।",
        ],
        mcqs: [
            {
                id: "mitra-q1",
                questionEn: "Mission MITRA supports which ISRO programme?",
                questionHi: "मिशन मित्रा किस ISRO कार्यक्रम का समर्थन करता है?",
                options: [
                    { key: "a", en: "Chandrayaan-3", hi: "चंद्रयान-3" },
                    { key: "b", en: "Gaganyaan", hi: "गगनयान" },
                    { key: "c", en: "Aditya-L1", hi: "आदित्य-L1" },
                    { key: "d", en: "Mangalyaan", hi: "मंगलयान" },
                ],
                correctKey: "b",
                explanationEn: "Mission MITRA is a high-altitude analog study at Leh supporting Gaganyaan (India's first human spaceflight programme).",
                explanationHi: "मिशन मित्रा लेह में उच्च-ऊंचाई एनालॉग अध्ययन है जो गगनयान (भारत का पहला मानव अंतरिक्ष उड़ान कार्यक्रम) का समर्थन करता है।",
            },
        ],
    },

    /* 17. SMILE MISSION */
    {
        id: "smile-mission",
        titleEn: "SMILE Mission",
        titleHi: "SMILE मिशन",
        category: "Space & Science",
        shortDescEn: "First fully joint ESA–CAS space mission (May 2026) to study solar wind interaction with Earth's magnetosphere.",
        shortDescHi: "ESA–CAS का पहला पूर्णतः संयुक्त अंतरिक्ष मिशन (मई 2026) — सौर पवन और पृथ्वी के मैग्नेटोस्फीयर की अंतःक्रिया का अध्ययन।",
        tag: "Space",
        color: "from-orange-600 to-orange-800",
        icon: <Sun className="w-5 h-5" />,
        metaEn: ["ESA + CAS", "Solar wind", "Space weather"],
        metaHi: ["ESA + CAS", "सौर पवन", "अंतरिक्ष मौसम"],
        overviewEn: [
            "SMILE (Solar wind Magnetosphere Ionosphere Link Explorer) is the first fully joint space mission between ESA and the Chinese Academy of Sciences (CAS), launched May 2026.",
            "Objective: study global interaction between solar wind and Earth's magnetosphere.",
            "Improves understanding of solar storms, geomagnetic storms, space weather.",
        ],
        overviewHi: [
            "SMILE (सोलर विंड मैग्नेटोस्फीयर आयनोस्फीयर लिंक एक्सप्लोरर) ESA और चीनी विज्ञान अकादमी (CAS) का पहला पूर्णतः संयुक्त अंतरिक्ष मिशन है, मई 2026 में प्रक्षेपित।",
            "उद्देश्य: सौर पवन और पृथ्वी के मैग्नेटोस्फीयर के बीच वैश्विक अंतःक्रिया का अध्ययन।",
            "सौर तूफान, भू-चुंबकीय तूफान, अंतरिक्ष मौसम की समझ बेहतर।",
        ],
        factsEn: [
            "Solar wind: stream of charged particles from the Sun.",
            "Magnetosphere: Earth's magnetic field that protects against solar wind.",
            "Helps protect satellites, power grids, and communications from space weather.",
        ],
        factsHi: [
            "सौर पवन: सूर्य से आवेशित कणों की धारा।",
            "मैग्नेटोस्फीयर: पृथ्वी का चुंबकीय क्षेत्र जो सौर पवन से बचाता है।",
            "उपग्रह, पावर ग्रिड, संचार को अंतरिक्ष मौसम से बचाने में मदद।",
        ],
        mcqs: [
            {
                id: "smile-q1",
                questionEn: "SMILE is a joint space mission between:",
                questionHi: "SMILE किसके बीच संयुक्त अंतरिक्ष मिशन है?",
                options: [
                    { key: "a", en: "NASA + ISRO", hi: "NASA + ISRO" },
                    { key: "b", en: "ESA + CAS (China)", hi: "ESA + CAS (चीन)" },
                    { key: "c", en: "JAXA + ISRO", hi: "JAXA + ISRO" },
                    { key: "d", en: "Roscosmos + ESA", hi: "रोसकोसमोस + ESA" },
                ],
                correctKey: "b",
                explanationEn: "SMILE is the first fully joint ESA–CAS space mission.",
                explanationHi: "SMILE ESA–CAS का पहला पूर्णतः संयुक्त अंतरिक्ष मिशन है।",
            },
        ],
    },

    /* 18. SFDR */
    {
        id: "sfdr-tech",
        titleEn: "Solid Fuel Ducted Ramjet (SFDR)",
        titleHi: "सॉलिड फ्यूल डक्टेड रैमजेट (SFDR)",
        category: "Defense",
        shortDescEn: "DRDO's air-breathing propulsion tech (Feb 2026 test). Lighter, more fuel-efficient missiles with longer range.",
        shortDescHi: "DRDO की एयर-ब्रीदिंग प्रोपल्शन तकनीक (फरवरी 2026 परीक्षण)। हल्की, अधिक ईंधन-कुशल मिसाइलें, अधिक रेंज।",
        tag: "Defense",
        color: "from-red-600 to-red-800",
        icon: <ShieldCheck className="w-5 h-5" />,
        metaEn: ["DRDO", "ITR Chandipur", "Air-breathing"],
        metaHi: ["DRDO", "ITR चांदीपुर", "एयर-ब्रीदिंग"],
        overviewEn: [
            "DRDO successfully demonstrated Solid Fuel Ducted Ramjet (SFDR) technology on 3 February 2026 from ITR Chandipur, off the Odisha coast.",
            "SFDR is an 'air-breathing' propulsion system — draws oxygen directly from atmosphere during flight to burn solid fuel.",
            "Unlike traditional rockets, does not need to carry a heavy onboard oxidizer.",
        ],
        overviewHi: [
            "DRDO ने 3 फरवरी 2026 को ओडिशा तट पर चांदीपुर स्थित ITR से SFDR तकनीक का सफल प्रदर्शन किया।",
            "SFDR 'एयर-ब्रीदिंग' प्रोपल्शन प्रणाली है — उड़ान के दौरान ठोस ईंधन जलाने के लिए सीधे वायुमंडल से ऑक्सीजन लेता है।",
            "पारंपरिक रॉकेटों के विपरीत, भारी ऑनबोर्ड ऑक्सीडाइज़र ले जाने की आवश्यकता नहीं।",
        ],
        factsEn: [
            "Because no heavy oxidizer is carried, missile becomes lighter and more fuel-efficient.",
            "Allows higher payload capacity or longer strike range.",
            "Indigenously developed and tested by DRDO.",
        ],
        factsHi: [
            "भारी ऑक्सीडाइज़र न ले जाने से मिसाइल हल्की और अधिक ईंधन-कुशल हो जाती है।",
            "अधिक पेलोड क्षमता या लंबी स्ट्राइक रेंज की अनुमति।",
            "DRDO द्वारा स्वदेशी रूप से विकसित और परीक्षित।",
        ],
        mcqs: [
            {
                id: "sfdr-q1",
                questionEn: "What makes SFDR more fuel-efficient than traditional rockets?",
                questionHi: "SFDR को पारंपरिक रॉकेटों से अधिक ईंधन-कुशल क्या बनाता है?",
                options: [
                    { key: "a", en: "It uses liquid hydrogen", hi: "तरल हाइड्रोजन का उपयोग" },
                    { key: "b", en: "It draws oxygen from the atmosphere (air-breathing)", hi: "वायुमंडल से ऑक्सीजन लेता है (एयर-ब्रीदिंग)" },
                    { key: "c", en: "It has no propulsion system", hi: "कोई प्रोपल्शन प्रणाली नहीं" },
                    { key: "d", en: "It relies on solar power", hi: "सौर ऊर्जा पर निर्भर" },
                ],
                correctKey: "b",
                explanationEn: "SFDR is air-breathing — draws oxygen from the atmosphere, eliminating the need for a heavy onboard oxidizer.",
                explanationHi: "SFDR एयर-ब्रीदिंग है — वायुमंडल से ऑक्सीजन लेता है, भारी ऑनबोर्ड ऑक्सीडाइज़र की आवश्यकता समाप्त।",
            },
        ],
    },
]

/* ------------------------------------------------------------------ */
/* MCQ COMPONENT                                                      */
/* ------------------------------------------------------------------ */
function MCQBlock({ mcq }: { mcq: MCQ }) {
    const [selected, setSelected] = useState<string | null>(null)
    const isCorrect = selected === mcq.correctKey
    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="mb-4">
                <p className="font-semibold text-base">{mcq.questionEn}</p>
                <p className="text-sm text-muted-foreground mt-1">{mcq.questionHi}</p>
            </div>
            <div className="space-y-2 mb-4">
                {mcq.options.map((opt) => {
                    let extra = ""
                    if (selected !== null) {
                        if (opt.key === mcq.correctKey) extra = "bg-green-100 border-green-400 dark:bg-green-900/20 dark:border-green-700"
                        else if (opt.key === selected) extra = "bg-red-100 border-red-400 dark:bg-red-900/20 dark:border-red-700"
                    }
                    return (
                        <div key={opt.key} onClick={() => selected === null && setSelected(opt.key)}
                            className={`flex items-start gap-3 rounded-lg border p-3 text-sm cursor-pointer hover:bg-muted/50 transition ${extra}`}>
                            <span className="font-bold uppercase w-5 shrink-0 text-muted-foreground">{opt.key}.</span>
                            <div><div>{opt.en}</div><div className="text-xs text-muted-foreground mt-0.5">{opt.hi}</div></div>
                        </div>
                    )
                })}
            </div>
            {selected !== null && (
                <div className={`p-3 rounded-lg border-l-4 ${isCorrect ? "bg-green-50 border-green-500 dark:bg-green-900/10" : "bg-red-50 border-red-400 dark:bg-red-900/10"}`}>
                    <div className="flex items-center gap-2 mb-1">
                        {isCorrect ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <HelpCircle className="w-4 h-4 text-red-500" />}
                        <span className="text-sm font-semibold">{isCorrect ? "Correct! / सही उत्तर!" : `Correct answer: ${mcq.correctKey.toUpperCase()} / सही उत्तर: ${mcq.correctKey.toUpperCase()}`}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{mcq.explanationEn}</p>
                    <p className="text-sm text-muted-foreground mt-1">{mcq.explanationHi}</p>
                </div>
            )}
        </div>
    )
}

/* ------------------------------------------------------------------ */
/* DETAIL VIEW                                                        */
/* ------------------------------------------------------------------ */
function TopicDetail({ topic, onBack }: { topic: Topic; onBack: () => void }) {
    return (
        <div className="max-w-4xl mx-auto">
            <button onClick={onBack} className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                <ArrowLeft className="w-4 h-4" /> Back to all topics / सभी विषयों पर वापस
            </button>

            {/* Header */}
            <div className={`rounded-2xl bg-gradient-to-r ${topic.color} p-6 text-white mb-8 shadow-lg`}>
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/20 rounded-lg">{topic.icon}</div>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{topic.category}</span>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{topic.tag}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">{topic.titleEn}</h1>
                <p className="text-white/80 mt-1">{topic.titleHi}</p>
                <div className="flex flex-wrap gap-2 mt-4 text-xs">
                    {topic.metaEn.map((m, i) => (
                        <span key={i} className="bg-white/20 px-3 py-1 rounded-full">{m}</span>
                    ))}
                </div>
            </div>

            {/* Overview */}
            <section className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <Languages className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold">Overview / अवलोकन</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                        <h3 className="text-xs font-semibold uppercase text-primary mb-3">English</h3>
                        <ul className="space-y-2 text-sm">
                            {topic.overviewEn.map((line, i) => (
                                <li key={i} className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />{line}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-4 border border-amber-200">
                        <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                        <ul className="space-y-2 text-sm">
                            {topic.overviewHi.map((line, i) => (
                                <li key={i} className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />{line}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Key Facts */}
            <section className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold">Key Facts / मुख्य तथ्य</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card rounded-xl border p-4">
                        <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                        <ul className="space-y-2 text-sm">
                            {topic.factsEn.map((line, i) => (
                                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />{line}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-card rounded-xl border p-4">
                        <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                        <ul className="space-y-2 text-sm">
                            {topic.factsHi.map((line, i) => (
                                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />{line}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* MCQs */}
            <section className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold">Probable MCQs / संभावित प्रश्न</h2>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Click an option to see the answer</span>
                </div>
                <div className="space-y-5">
                    {topic.mcqs.map((mcq) => <MCQBlock key={mcq.id} mcq={mcq} />)}
                </div>
            </section>

            <div className="flex justify-center pb-8">
                <Button variant="outline" onClick={onBack} className="gap-2 cursor-pointer">
                    <ArrowLeft className="w-4 h-4" /> Back to Topics / विषयों पर वापस
                </Button>
            </div>
        </div>
    )
}

/* ------------------------------------------------------------------ */
/* MAIN PAGE                                                          */
/* ------------------------------------------------------------------ */
export default function TopicWisePage() {
    const [activeId, setActiveId] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState("")

    const activeTopic = TOPICS.find((t) => t.id === activeId) || null
    const filteredTopics = TOPICS.filter(
        (t) =>
            t.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.titleHi.includes(searchQuery) ||
            t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.tag.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero */}
            <section className="pt-28 pb-12 md:pt-32 md:pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" /> Topic-wise Current Affairs 2026
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Current Affairs
                        <span className="text-primary"> Science & Technology</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        Bilingual, exam-oriented topic digests.
                        <strong className="text-foreground"> Click any card to read the full content and practice interactive MCQs.</strong>
                    </p>
                    <div className="max-w-xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search topic (e.g., HPV, BGP, Biochar, SFDR)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border bg-card focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-6 px-4 border-y bg-muted/20">
                <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
                    <div className="text-center"><div className="text-2xl font-bold text-primary">{TOPICS.length}</div><div className="text-xs text-muted-foreground">Topics Available</div></div>
                    <div className="text-center"><div className="text-2xl font-bold text-primary">{TOPICS.reduce((a, c) => a + c.mcqs.length, 0)}</div><div className="text-xs text-muted-foreground">Practice MCQs</div></div>
                    <div className="text-center"><div className="text-2xl font-bold text-primary">2</div><div className="text-xs text-muted-foreground">Languages (EN / हिं)</div></div>
                </div>
            </section>

            {/* Grid / Detail */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {activeTopic ? (
                        <TopicDetail topic={activeTopic} onBack={() => setActiveId(null)} />
                    ) : (
                        <>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-primary/10"><BookOpen className="w-5 h-5 text-primary" /></div>
                                <h2 className="text-2xl font-bold">Choose a Topic / विषय चुनें</h2>
                                <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">Click a card</span>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredTopics.map((topic) => (
                                    <button key={topic.id} onClick={() => setActiveId(topic.id)}
                                        className="text-left bg-white dark:bg-card rounded-2xl border shadow-sm overflow-hidden cursor-pointer hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                        <div className={`bg-gradient-to-r ${topic.color} p-4 text-white`}>
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1.5 bg-white/20 rounded-lg">{topic.icon}</div>
                                                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{topic.category}</span>
                                                </div>
                                                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{topic.tag}</span>
                                            </div>
                                            <h3 className="text-lg font-bold leading-snug">{topic.titleEn}</h3>
                                            <p className="text-white/80 text-sm mt-0.5">{topic.titleHi}</p>
                                        </div>
                                        <div className="p-5 flex flex-col flex-1">
                                            <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{topic.shortDescEn}</p>
                                            <p className="text-xs text-muted-foreground/80 mb-4 line-clamp-2">{topic.shortDescHi}</p>
                                            <div className="mt-auto flex items-center justify-between pt-3 border-t">
                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                    <HelpCircle className="w-3.5 h-3.5" /> <span>{topic.mcqs.length} MCQ{topic.mcqs.length > 1 ? "s" : ""}</span>
                                                </div>
                                                <span className="text-primary text-sm font-medium flex items-center gap-1">Read Topic <ChevronRight className="w-3.5 h-3.5" /></span>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            {filteredTopics.length === 0 && (
                                <div className="text-center py-12 text-muted-foreground">
                                    <BookOpen className="w-10 h-10 mx-auto mb-3 text-muted-foreground/50" />
                                    <p>No topics match your search.</p>
                                    <p className="text-sm">Try “HPV”, “BGP”, or “Biochar”.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t py-8 max-w-6xl mx-auto">
                <Link href="/current-affairs">
                    <Button variant="outline" className="gap-2 cursor-pointer">
                        <ArrowLeft className="w-4 h-4" /> Back to Current Affairs
                    </Button>
                </Link>
                <div className="flex justify-end gap-2">
                    <Link href="/current-affairs/by-topic/defence">
                        <Button variant="outline" className="gap-2 cursor-pointer">Next: Defence <ChevronRight className="w-4 h-4" /></Button>
                    </Link>
                    <Link href="/mock-test">
                        <Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button>
                    </Link>
                </div>
            </div>
            <FooterLinkFooter />
        </div>
    )
}