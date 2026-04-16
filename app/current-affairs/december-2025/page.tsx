"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    BookOpen,
    ChevronRight,
    Sparkles,
    Target,
    Clock,
    Award,
    Calendar,
    Download,
    Globe,
    TrendingUp,
    CheckCircle2,
    FileText,
    Users,
    Rocket,
    Leaf,
    Building2,
    Landmark,
    Trophy,
    HelpCircle,
    ChevronDown,
    Newspaper,
    BarChart3,
    GraduationCap,
    Languages,
    Mic,
    Wallet,
    Shield,
    Zap,
    Sun,
    Cloud,
    Cpu,
    Flag,
    Heart,
    PawPrint,
    Wind,
    BookMarked
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Category tabs
const categories = [
    { id: "all", name: "All", nameHi: "सभी", icon: <Newspaper className="w-4 h-4" /> },
    { id: "national", name: "National Affairs", nameHi: "राष्ट्रीय मामले", icon: <Landmark className="w-4 h-4" /> },
    { id: "international", name: "International", nameHi: "अंतर्राष्ट्रीय", icon: <Globe className="w-4 h-4" /> },
    { id: "economy", name: "Economy & Banking", nameHi: "अर्थव्यवस्था और बैंकिंग", icon: <Building2 className="w-4 h-4" /> },
    { id: "science", name: "Science & Tech", nameHi: "विज्ञान और प्रौद्योगिकी", icon: <Rocket className="w-4 h-4" /> },
    { id: "environment", name: "Environment", nameHi: "पर्यावरण", icon: <Leaf className="w-4 h-4" /> }
]

interface NewsItem {
    id: string
    title: string
    titleHi: string
    category: string
    summary: string
    summaryHi: string
    detailedAnalysis: string
    detailedAnalysisHi: string
    impact: string[]
    impactHi: string[]
    staticGk: { fact: string; description: string; factHi: string; descriptionHi: string }[]
    examSignificance: { prelims: string; mains: string; prelimsHi: string; mainsHi: string }
    date?: string
}

export default function DecemberCurrentAffairsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [selectedNews, setSelectedNews] = useState<string | null>(null)
    const [showAllFaqs, setShowAllFaqs] = useState(false)
    const [language, setLanguage] = useState<"en" | "hi">("en")

    const newsItems: NewsItem[] = [
        {
            id: "finance-commission-final",
            title: "16th Finance Commission submits Final Report",
            titleHi: "16वें वित्त आयोग ने अंतिम रिपोर्ट प्रस्तुत की",
            category: "national",
            summary: "The 16th Finance Commission, chaired by Dr. Arvind Panagariya, submitted its final report on December 15, 2025, outlining tax-sharing formula for FY 2026-31 with focus on performance-based incentives and debt reduction.",
            summaryHi: "डॉ. अरविंद पनगढ़िया की अध्यक्षता वाले 16वें वित्त आयोग ने 15 दिसंबर, 2025 को अपनी अंतिम रिपोर्ट प्रस्तुत की, जिसमें वित्त वर्ष 2026-31 के लिए कर-साझाकरण फॉर्मूले की रूपरेखा तैयार की गई, जिसमें प्रदर्शन-आधारित प्रोत्साहन और ऋण में कमी पर ध्यान केंद्रित किया गया।",
            detailedAnalysis: "The 16th Finance Commission was constituted under Article 280 of the Constitution in late 2023. The primary mandate was to recommend the 'Vertical Devolution' (share of states in the central pool of tax) and 'Horizontal Devolution' (interstate distribution). A critical focus of this report is the 'Performance-based Incentives' for states achieving targets in fiscal consolidation and renewable energy transition. The Commission recommended maintaining vertical devolution at 41% but introduced a new weightage for 'Demographic Performance' using 2021 Census data. The report also addresses augmentation of Consolidated Fund for Panchayats and Municipalities. The Commission utilized 2021 Census data (provisional/estimated) alongside 2011 data to ensure fiscal equity. The final report covers the five-year period starting April 1, 2026.",
            detailedAnalysisHi: "16वें वित्त आयोग का गठन 2023 के अंत में संविधान के अनुच्छेद 280 के तहत किया गया था। प्राथमिक जनादेश 'ऊर्ध्वाधर विकेंद्रीकरण' (केंद्रीय कर पूल में राज्यों का हिस्सा) और 'क्षैतिज विकेंद्रीकरण' (अंतरराज्यीय वितरण) की सिफारिश करना था। इस रिपोर्ट का एक महत्वपूर्ण ध्यान राजकोषीय समेकन और नवीकरणीय ऊर्जा संक्रमण में लक्ष्य प्राप्त करने वाले राज्यों के लिए 'प्रदर्शन-आधारित प्रोत्साहन' पर है। आयोग ने ऊर्ध्वाधर विकेंद्रीकरण को 41% पर बनाए रखने की सिफारिश की, लेकिन 2021 की जनगणना के आंकड़ों का उपयोग करके 'जनसांख्यिकीय प्रदर्शन' के लिए एक नया वेटेज पेश किया। रिपोर्ट पंचायतों और नगर पालिकाओं के लिए संचित निधि के संवर्धन को भी संबोधित करती है। आयोग ने राजकोषीय समानता सुनिश्चित करने के लिए 2011 के आंकड़ों के साथ-साथ 2021 की जनगणना के आंकड़ों (अनंतिम/अनुमानित) का उपयोग किया। अंतिम रिपोर्ट 1 अप्रैल, 2026 से शुरू होने वाली पांच साल की अवधि को कवर करती है।",
            impact: [
                "Infrastructure in vulnerable states will reduce long-term economic losses from natural disasters",
                "Performance-based metrics will force states to align fiscal policies with national debt-to-GDP reduction targets",
                "2026-2031 period will see more data-driven approach to federal fiscal relations"
            ],
            impactHi: [
                "कमजोर राज्यों में बुनियादी ढांचा प्राकृतिक आपदाओं से दीर्घकालिक आर्थिक नुकसान को कम करेगा",
                "प्रदर्शन-आधारित मेट्रिक्स राज्यों को राष्ट्रीय ऋण-से-जीडीपी कमी लक्ष्यों के साथ अपनी राजकोषीय नीतियों को संरेखित करने के लिए मजबूर करेंगे",
                "2026-2031 की अवधि संघीय राजकोषीय संबंधों के लिए अधिक डेटा-संचालित दृष्टिकोण देखेगी"
            ],
            staticGk: [
                { fact: "First Finance Commission", description: "Established in 1951 under K.C. Neogy", factHi: "प्रथम वित्त आयोग", descriptionHi: "1951 में के.सी. नियोगी के तहत स्थापित" },
                { fact: "Article 280", description: "Mandates Finance Commission every 5 years", factHi: "अनुच्छेद 280", descriptionHi: "प्रत्येक 5 वर्ष में वित्त आयोग का आदेश देता है" },
                { fact: "Dr. Arvind Panagariya", description: "Former Vice-Chairman of NITI Aayog", factHi: "डॉ. अरविंद पनगढ़िया", descriptionHi: "नीति आयोग के पूर्व उपाध्यक्ष" },
                { fact: "FC Act 1951", description: "Governs qualifications and powers of members", factHi: "वित्त आयोग अधिनियम 1951", descriptionHi: "सदस्यों की योग्यता और शक्तियों को नियंत्रित करता है" }
            ],
            examSignificance: {
                prelims: "Article 280, members of 16th FC, base year for population data",
                mains: "GS Paper II (Federalism) and GS Paper III (Economy) - 'Fiscal Federalism' and challenges of horizontal devolution",
                prelimsHi: "अनुच्छेद 280, 16वें वित्त आयोग के सदस्य, जनसंख्या डेटा के लिए आधार वर्ष",
                mainsHi: "जीएस पेपर II (संघवाद) और जीएस पेपर III (अर्थव्यवस्था) - 'राजकोषीय संघवाद' और क्षैतिज विकेंद्रीकरण की चुनौतियाँ"
            }
        },
        {
            id: "cop30",
            title: "COP30 Summit in Belém, Brazil: 'Amazon COP' Concludes",
            titleHi: "बेलेम, ब्राजील में COP30 शिखर सम्मेलन: 'अमेजन COP' संपन्न",
            category: "international",
            summary: "COP30 concluded on December 12, 2025, in Belém, Brazil, focusing on 'Mission 1.5°C', Global Climate Finance Goal, and establishing the 'Belem Declaration on Tropical Forests' with $25 billion pledge.",
            summaryHi: "COP30 12 दिसंबर, 2025 को ब्राजील के बेलेम में संपन्न हुआ, जिसमें 'मिशन 1.5°C', वैश्विक जलवायु वित्त लक्ष्य और 25 बिलियन डॉलर के संकल्प के साथ 'बेलेम घोषणा' की स्थापना पर ध्यान केंद्रित किया गया।",
            detailedAnalysis: "COP30 was pivotal as it marked the deadline for nations to submit their updated Nationally Determined Contributions (NDCs). India, led by the Ministry of Environment, Forest and Climate Change (MoEFCC), announced its 'Green Credit Initiative 2.0,' which integrates biodiversity conservation with carbon credits. A major breakthrough was the establishment of the 'Belem Declaration on Tropical Forests,' where 12 nations pledged $25 billion for forest restoration by 2030. The summit saw intense negotiations over the 'New Collective Quantified Goal' (NCQG) for climate finance. Developing nations demanded $1 trillion annually from developed countries, replacing the obsolete $100 billion target. India emphasized 'Common But Differentiated Responsibilities' (CBDR) and pushed for the inclusion of 'Circular Economy' principles in the final text. The summit also operationalized the 'Loss and Damage Fund' with a dedicated secretariat in Geneva.",
            detailedAnalysisHi: "COP30 इसलिए महत्वपूर्ण था क्योंकि यह देशों के लिए अपने अद्यतन 'राष्ट्रीय स्तर पर निर्धारित योगदान' (NDCs) जमा करने की समय सीमा थी। भारत ने 'ग्रीन क्रेडिट पहल 2.0' की घोषणा की, जो कार्बन क्रेडिट के साथ जैव विविधता संरक्षण को जोड़ती है। एक बड़ी उपलब्धि 'उष्णकटिबंधीय वनों पर बेलेम घोषणा' रही, जहाँ 12 देशों ने 2030 तक वन बहाली के लिए 25 बिलियन डॉलर का संकल्प लिया। शिखर सम्मेलन में 'न्यू कलेक्टिव क्वांटिफाइड गोल' (NCQG) पर गहन बातचीत हुई। विकासशील देशों ने विकसित देशों से सालाना 1 ट्रिलियन डॉलर की मांग की। भारत ने 'साझा लेकिन विभेदित जिम्मेदारियों' (CBDR) पर जोर दिया और अंतिम पाठ में 'चक्रीय अर्थव्यवस्था' के सिद्धांतों को शामिल करने का दबाव बनाया। शिखर सम्मेलन ने जिनेवा में एक समर्पित सचिवालय के साथ 'लॉस एंड डैमेज फंड' को भी परिचालित किया।",
            impact: [
                "Increased climate finance will accelerate transition to green jobs in Global South",
                "India's updated NDCs will lead to stricter emission norms for manufacturing and transport sectors (Euro VII equivalent)",
                "Focus shifts to COP31 (Australia-Pacific) where implementation of Belem Declaration will be monitored"
            ],
            impactHi: [
                "बढ़ा हुआ जलवायु वित्त वैश्विक दक्षिण में हरित नौकरियों में संक्रमण को तेज करेगा",
                "भारत के अद्यतन NDCs विनिर्माण और परिवहन क्षेत्रों के लिए सख्त उत्सर्जन मानदंडों (यूरो VII समकक्ष) को जन्म देंगे",
                "ध्यान COP31 (ऑस्ट्रेलिया-प्रशांत) पर केंद्रित होगा जहां बेलेम घोषणा के कार्यान्वयन की निगरानी की जाएगी"
            ],
            staticGk: [
                { fact: "UNFCCC Establishment", description: "1992 at Earth Summit, Rio de Janeiro", factHi: "UNFCCC स्थापना", descriptionHi: "1992 में पृथ्वी शिखर सम्मेलन, रियो डी जनेरियो" },
                { fact: "Paris Agreement", description: "Adopted at COP21 (2015) to limit warming to below 2°C", factHi: "पेरिस समझौता", descriptionHi: "COP21 (2015) में तापमान वृद्धि को 2°C से कम सीमित करने के लिए अपनाया गया" },
                { fact: "India's Targets", description: "Net Zero by 2070, 500 GW non-fossil by 2030", factHi: "भारत के लक्ष्य", descriptionHi: "2070 तक नेट जीरो, 2030 तक 500 GW गैर-जीवाश्म" },
                { fact: "UNFCCC Secretariat", description: "Located in Bonn, Germany", factHi: "UNFCCC सचिवालय", descriptionHi: "बॉन, जर्मनी में स्थित" }
            ],
            examSignificance: {
                prelims: "Terms like NCQG, Green Credit, Loss & Damage Fund",
                mains: "GS Paper III (Environment) - India's leadership in Global South regarding climate justice",
                prelimsHi: "NCQG, ग्रीन क्रेडिट, लॉस एंड डैमेज फंड जैसे शब्द",
                mainsHi: "जीएस पेपर III (पर्यावरण) - जलवायु न्याय के संबंध में वैश्विक दक्षिण में भारत का नेतृत्व"
            }
        },
        {
            id: "rbi-mpc-dec",
            title: "RBI MPC keeps Repo Rate unchanged at 6.5% for 15th consecutive time",
            titleHi: "RBI MPC ने लगातार 15वीं बार रेपो रेट 6.5% पर अपरिवर्तित रखा",
            category: "economy",
            summary: "RBI MPC kept Repo Rate at 6.5% for 15th consecutive time citing food inflation. SEBI announced T+0 settlement for top 500 listed companies starting January 1, 2026, making India first major economy to implement it.",
            summaryHi: "RBI MPC ने खाद्य मुद्रास्फीति का हवाला देते हुए लगातार 15वीं बार रेपो रेट 6.5% पर रखा। SEBI ने 1 जनवरी, 2026 से शीर्ष 500 सूचीबद्ध कंपनियों के लिए T+0 सेटलमेंट की घोषणा की, जिससे भारत इसे लागू करने वाली पहली प्रमुख अर्थव्यवस्था बन गया।",
            detailedAnalysis: "The RBI Governor, Shattikanta Das, highlighted that while core inflation has stabilized, 'Climate-induced supply shocks' in vegetables kept the headline CPI (Consumer Price Index) near the 4.8% mark. The MPC maintained a 'Withdrawal of Accommodation' stance. A significant announcement was the enhancement of the UPI (Unified Payments Interface) limit for hospital and educational payments to ₹10 lakh per transaction. Parallelly, SEBI (Securities and Exchange Board of India) finalized the roadmap for T+0 settlement. Currently, India operates on T+1 (Trade plus one day). T+0 means shares and funds will be transferred on the same day of the trade. This move, supported by the Clearing Corporation of India (CCIL), aims to increase liquidity and reduce counterparty risk. India becomes the first major economy to implement this, positioning the NSE and BSE as global leaders in market infrastructure.",
            detailedAnalysisHi: "आरबीआई गवर्नर शक्तिकांत दास ने बताया कि जबकि कोर मुद्रास्फीति स्थिर हो गई है, सब्जियों में 'जलवायु-प्रेरित आपूर्ति झटकों' ने हेडलाइन सीपीआई को 4.8% के आसपास रखा है। एमपीसी ने 'एकमोडेशन की वापसी' का रुख बनाए रखा। एक महत्वपूर्ण घोषणा अस्पताल और शैक्षिक भुगतान के लिए यूपीआई (UPI) सीमा को बढ़ाकर ₹10 लाख प्रति लेनदेन करना था। समानांतर में, सेबी (SEBI) ने T+0 सेटलमेंट के लिए रोडमैप को अंतिम रूप दिया। वर्तमान में, भारत T+1 पर काम करता है। T+0 का अर्थ है कि शेयरों और धन का हस्तांतरण व्यापार के उसी दिन किया जाएगा। इस कदम का उद्देश्य तरलता बढ़ाना और प्रतिपक्ष जोखिम को कम करना है। भारत इसे लागू करने वाली पहली प्रमुख अर्थव्यवस्था बन गया है।",
            impact: [
                "T+0 settlement will free up billions in capital for retail investors instantly, boosting market participation",
                "RBI's cautious stance indicates interest rates for home and auto loans will remain high through early 2026",
                "Integration of AI in RBI's 'Supervisory Management System' to monitor NBFCs more stringently"
            ],
            impactHi: [
                "T+0 सेटलमेंट खुदरा निवेशकों के लिए तुरंत अरबों की पूंजी मुक्त करेगा, बाजार भागीदारी को बढ़ावा देगा",
                "RBI का सतर्क रुख इंगित करता है कि होम और ऑटो ऋण के लिए ब्याज दरें 2026 की शुरुआत तक उच्च रहेंगी",
                "NBFCs की अधिक कड़ी निगरानी के लिए RBI के 'सुपरवाइजरी मैनेजमेंट सिस्टम' में AI का एकीकरण"
            ],
            staticGk: [
                { fact: "MPC Establishment", description: "2016; 6 members (3 from RBI, 3 from GOI)", factHi: "MPC स्थापना", descriptionHi: "2016; 6 सदस्य (3 RBI से, 3 भारत सरकार से)" },
                { fact: "Repo Rate", description: "Rate at which RBI lends to commercial banks", factHi: "रेपो रेट", descriptionHi: "वह दर जिस पर RBI वाणिज्यिक बैंकों को उधार देता है" },
                { fact: "SEBI Establishment", description: "1988; statutory powers in 1992 (SEBI Act)", factHi: "SEBI स्थापना", descriptionHi: "1988; 1992 में वैधानिक शक्तियाँ (SEBI अधिनियम)" },
                { fact: "T+1 Settlement", description: "India fully moved to T+1 in January 2023", factHi: "T+1 सेटलमेंट", descriptionHi: "भारत जनवरी 2023 में पूरी तरह से T+1 पर चला गया" }
            ],
            examSignificance: {
                prelims: "Definition of T+0, MPC voting structure, UPI limits",
                mains: "GS Paper III (Economy) - 'Capital Market Reforms in India'",
                prelimsHi: "T+0 की परिभाषा, MPC वोटिंग संरचना, UPI सीमाएं",
                mainsHi: "जीएस पेपर III (अर्थव्यवस्था) - 'भारत में पूंजी बाजार सुधार'"
            }
        },
        {
            id: "gaganyaan-2",
            title: "ISRO successfully launches Gaganyaan-2 Unmanned Mission",
            titleHi: "ISRO ने गगनयान-2 मानव रहित मिशन सफलतापूर्वक लॉन्च किया",
            category: "science",
            summary: "ISRO launched Gaganyaan-2 (G2) mission on December 24, 2025, the second of three planned unmanned missions before the historic manned flight scheduled for late 2026, successfully demonstrating Crew Escape System and ECLSS.",
            summaryHi: "ISRO ने 24 दिसंबर, 2025 को गगनयान-2 (G2) मिशन लॉन्च किया, जो 2026 के अंत में निर्धारित ऐतिहासिक मानवयुक्त उड़ान से पहले तीन नियोजित मानव रहित मिशनों में से दूसरा था, जिसने क्रू एस्केप सिस्टम और ECLSS का सफलतापूर्वक प्रदर्शन किया।",
            detailedAnalysis: "The G2 mission utilized the LVM3-M5 launch vehicle. The primary objective was to test the 'Integrated Air Drop Test' (IADT) and the performance of the Vyommitra (humanoid robot) in a pressurized crew module for a duration of 3 days in Low Earth Orbit (LEO). The mission successfully demonstrated the 'Crew Escape System' (CES) at a high altitude of 15 km, simulating a mid-flight emergency. A critical technical upgrade in G2 was the indigenous 'Environmental Control and Life Support System' (ECLSS), developed by the Vikram Sarabhai Space Centre (VSSC). The mission also carried biological payloads to study the effect of microgravity on microbial growth. This success solidifies India's position as the 4th nation capable of independent human spaceflight, following the USA, Russia, and China.",
            detailedAnalysisHi: "G2 मिशन में LVM3-M5 लॉन्च वाहन का उपयोग किया गया। प्राथमिक उद्देश्य 'इंटीग्रेटेड एयर ड्रॉप टेस्ट' (IADT) और निचली पृथ्वी कक्षा (LEO) में 3 दिनों की अवधि के लिए दबावयुक्त क्रू मॉड्यूल में 'व्योममित्र' (ह्यूमनॉइड रोबोट) के प्रदर्शन का परीक्षण करना था। मिशन ने 15 किमी की ऊंचाई पर 'क्रू एस्केप सिस्टम' (CES) का सफलतापूर्वक प्रदर्शन किया, जो उड़ान के दौरान आपातकालीन स्थिति का अनुकरण करता था। G2 में एक महत्वपूर्ण तकनीकी उन्नयन विक्रम साराभाई अंतरिक्ष केंद्र (VSSC) द्वारा विकसित स्वदेशी 'पर्यावरण नियंत्रण और जीवन समर्थन प्रणाली' (ECLSS) थी। मिशन में माइक्रोग्रैविटी के माइक्रोबियल वृद्धि पर प्रभाव का अध्ययन करने के लिए जैविक पेलोड भी थे। यह सफलता भारत को USA, रूस और चीन के बाद स्वतंत्र मानव अंतरिक्ष उड़ान क्षमता वाला चौथा राष्ट्र बनाती है।",
            impact: [
                "Demonstrates India's self-reliance in critical human spaceflight technologies",
                "Paves way for manned Gaganyaan mission by late 2026",
                "Positions India for future Indian Space Station (Bharatiya Antariksha Station) by 2035"
            ],
            impactHi: [
                "महत्वपूर्ण मानव अंतरिक्ष उड़ान प्रौद्योगिकियों में भारत की आत्मनिर्भरता प्रदर्शित करता है",
                "2026 के अंत तक मानवयुक्त गगनयान मिशन का मार्ग प्रशस्त करता है",
                "2035 तक भारतीय अंतरिक्ष स्टेशन के लिए भारत को स्थापित करता है"
            ],
            staticGk: [
                { fact: "Gaganyaan Announcement", description: "PM Modi's 2018 Independence Day speech", factHi: "गगनयान घोषणा", descriptionHi: "प्रधानमंत्री मोदी का 2018 स्वतंत्रता दिवस भाषण" },
                { fact: "Gaganyaan-2 Date", description: "Launched on December 24, 2025", factHi: "गगनयान-2 तिथि", descriptionHi: "24 दिसंबर, 2025 को लॉन्च किया गया" },
                { fact: "Crew Escape System", description: "Tested at 15 km altitude simulating emergency", factHi: "क्रू एस्केप सिस्टम", descriptionHi: "15 किमी की ऊंचाई पर आपातकालीन स्थिति का अनुकरण करते हुए परीक्षण किया गया" },
                { fact: "ECLSS", description: "Indigenous life support system by VSSC", factHi: "ECLSS", descriptionHi: "VSSC द्वारा स्वदेशी जीवन समर्थन प्रणाली" }
            ],
            examSignificance: {
                prelims: "Gaganyaan mission phases, Vyommitra, LVM3 features",
                mains: "GS Paper III (Science & Tech) - India's space exploration milestones",
                prelimsHi: "गगनयान मिशन चरण, व्योममित्र, LVM3 विशेषताएं",
                mainsHi: "जीएस पेपर III (विज्ञान और प्रौद्योगिकी) - भारत की अंतरिक्ष अन्वेषण उपलब्धियाँ"
            }
        },
        {
            id: "cheetah-air-quality",
            title: "Project Cheetah Update & GRAP-IV in Delhi NCR",
            titleHi: "प्रोजेक्ट चीता अपडेट और दिल्ली एनसीआर में GRAP-IV",
            category: "environment",
            summary: "Third generation Cheetah cubs born in Kuno National Park; population reaches 15. Simultaneously, GRAP-IV invoked in NCR as AQI crossed 450, banning truck entry and construction activities.",
            summaryHi: "कूनो नेशनल पार्क में चीता शावकों की तीसरी पीढ़ी का जन्म; चीतों की संख्या 15 तक पहुंची। इसी समय, AQI के 450 पार करने पर एनसीआर में GRAP-IV लागू किया गया, जिसमें ट्रक प्रवेश और निर्माण गतिविधियों पर प्रतिबंध लगा।",
            detailedAnalysis: "The 'Project Cheetah,' which began in 2022, reached a milestone as the population of Indian-born cheetahs reached 15. The government also announced the 'Gandhi Sagar Sanctuary' in MP as the second home for Cheetahs to prevent overcrowding in Kuno. However, challenges remain regarding 'genetic bottlenecking' and prey-base density. In Delhi, the severe smog led to the implementation of the Graded Response Action Plan (GRAP) IV. This included a ban on the entry of truck traffic into Delhi (except for essential commodities), a ban on construction activities, and the 'Odd-Even' vehicle scheme. The CAQM utilized satellite data from ISRO to monitor 2,500+ farm fire incidents in Punjab and Haryana, highlighting the failure of the 'In-situ crop residue management' policy for the 2025 season.",
            detailedAnalysisHi: "2022 में शुरू किया गया 'प्रोजेक्ट चीता' एक मील के पत्थर पर पहुंच गया क्योंकि भारत में जन्मे चीतों की संख्या 15 तक पहुंच गई। सरकार ने कूनो में भीड़भाड़ को रोकने के लिए मध्य प्रदेश में 'गांधी सागर अभयारण्य' को चीतों के दूसरे घर के रूप में घोषित किया। हालांकि, 'जेनेटिक बॉटलनेकिंग' और शिकार-आधार घनत्व के संबंध में चुनौतियाँ बनी हुई हैं। दिल्ली में, गंभीर स्मॉग के कारण ग्रेडेड रिस्पॉन्स एक्शन प्लान (GRAP) IV लागू किया गया। इसमें दिल्ली में ट्रक ट्रैफिक के प्रवेश पर प्रतिबंध (आवश्यक वस्तुओं को छोड़कर), निर्माण गतिविधियों पर प्रतिबंध और 'ऑड-ईवन' वाहन योजना शामिल थी। CAQM ने पंजाब और हरियाणा में 2,500 से अधिक पराली जलाने की घटनाओं की निगरानी के लिए ISRO के उपग्रह डेटा का उपयोग किया, जो 2025 के सीजन के लिए 'इन-सीटू फसल अवशेष प्रबंधन' नीति की विफलताओं को दर्शाता है।",
            impact: [
                "Severe health crisis in NCR leading to 20% increase in respiratory ailments; economic loss due to construction bans",
                "Possible revision of National Clean Air Programme (NCAP) targets for 2026",
                "Shift towards mandatory 'Electric-only' public transport in NCR by 2028"
            ],
            impactHi: [
                "NCR में गंभीर स्वास्थ्य संकट जिससे श्वसन रोगों में 20% की वृद्धि; निर्माण प्रतिबंधों के कारण आर्थिक नुकसान",
                "2026 के लिए राष्ट्रीय स्वच्छ वायु कार्यक्रम (NCAP) लक्ष्यों का संभावित संशोधन",
                "2028 तक NCR में अनिवार्य 'इलेक्ट्रिक-ओनली' सार्वजनिक परिवहन की ओर बदलाव"
            ],
            staticGk: [
                { fact: "Kuno National Park", description: "Located in Sheopur district, Madhya Pradesh", factHi: "कूनो नेशनल पार्क", descriptionHi: "श्योपुर जिला, मध्य प्रदेश में स्थित" },
                { fact: "AQI Categories", description: "0-50 Good, 51-100 Satisfactory, 401-500 Severe", factHi: "AQI श्रेणियाँ", descriptionHi: "0-50 अच्छा, 51-100 संतोषजनक, 401-500 गंभीर" },
                { fact: "CAQM", description: "Statutory body established under CAQM Act, 2021", factHi: "CAQM", descriptionHi: "CAQM अधिनियम, 2021 के तहत स्थापित वैधानिक निकाय" },
                { fact: "Cheetah Status", description: "Declared extinct in India in 1952", factHi: "चीता स्थिति", descriptionHi: "1952 में भारत में विलुप्त घोषित" }
            ],
            examSignificance: {
                prelims: "GRAP stages, cheetah habitat details, CAQM powers",
                mains: "GS Paper III (Environment) - 'The conflict between development and air quality in urban India'",
                prelimsHi: "GRAP चरण, चीता आवास विवरण, CAQM की शक्तियाँ",
                mainsHi: "जीएस पेपर III (पर्यावरण) - 'शहरी भारत में विकास और वायु गुणवत्ता के बीच संघर्ष'"
            }
        }
    ]

    const awardsAndPersons = [
        { title: "Sahitya Akademi Awards 2025", titleHi: "साहित्य अकादमी पुरस्कार 2025", winner: "24 Indian Languages", winnerHi: "24 भारतीय भाषाएँ", detail: "English award for 'Post-Pandemic Rural India' novel; Hindi award for poetry anthology 'Samay Ke Hastakshar'. Each award includes ₹1,00,000, copper plaque, and shawl. Bhasha Samman for classical literature. Tribal literature recognized in Santhali and Bodo.", detailHi: "अंग्रेजी पुरस्कार 'पोस्ट-पैंडेमिक रूरल इंडिया' उपन्यास के लिए; हिंदी पुरस्कार कविता संग्रह 'समय के हस्ताक्षर' के लिए। प्रत्येक पुरस्कार में ₹1,00,000, तांबे की पट्टिका और शॉल शामिल है। शास्त्रीय साहित्य के लिए भाषा सम्मान। संथाली और बोडो में जनजातीय साहित्य को मान्यता।" },
        { title: "IPL 2026 Mega Auction", titleHi: "IPL 2026 मेगा ऑक्शन", winner: "Held in Jeddah, Saudi Arabia", winnerHi: "जेद्दाह, सऊदी अरब में आयोजित", detail: "Record-breaking bid of ₹28.5 Crore for Indian fast bowler. RTM (Right to Match) 2.0 introduced for more flexibility.", detailHi: "भारतीय तेज गेंदबाज के लिए ₹28.5 करोड़ का रिकॉर्ड-तोड़ बोली। अधिक लचीलेपन के लिए RTM 2.0 पेश किया गया।" },
        { title: "Asian Champions Trophy (Hockey) 2025", titleHi: "एशियाई चैंपियंस ट्रॉफी (हॉकी) 2025", winner: "India won 6th title", winnerHi: "भारत ने 6वां खिताब जीता", detail: "Defeated Pakistan 4-2 in final held in Muscat. Captain named 'Player of the Tournament'.", detailHi: "मस्कट में आयोजित फाइनल में पाकिस्तान को 4-2 से हराया। कप्तान को 'प्लेयर ऑफ द टूर्नामेंट' चुना गया।" }
    ]

    const importantDays = [
        { date: "Dec 1", day: "World AIDS Day", dayHi: "विश्व एड्स दिवस", theme: "Equity in Health: Ending the Epidemic", themeHi: "स्वास्थ्य में समानता: महामारी का अंत" },
        { date: "Dec 2", day: "National Pollution Control Day", dayHi: "राष्ट्रीय प्रदूषण नियंत्रण दिवस", theme: "Sustainable Technology for Clean Air", themeHi: "स्वच्छ हवा के लिए सतत प्रौद्योगिकी" },
        { date: "Dec 4", day: "Indian Navy Day", dayHi: "भारतीय नौसेना दिवस", theme: "Operational Efficiency, Readiness, and Mission Accomplishment", themeHi: "परिचालन दक्षता, तत्परता और मिशन उपलब्धि" },
        { date: "Dec 5", day: "World Soil Day", dayHi: "विश्व मृदा दिवस", theme: "Keep Soil Alive, Protect Soil Biodiversity", themeHi: "मिट्टी को जीवित रखें, मिट्टी की जैव विविधता की रक्षा करें" },
        { date: "Dec 10", day: "Human Rights Day", dayHi: "मानवाधिकार दिवस", theme: "Dignity, Freedom, and Justice for All", themeHi: "सभी के लिए गरिमा, स्वतंत्रता और न्याय" },
        { date: "Dec 16", day: "Vijay Diwas", dayHi: "विजय दिवस", theme: "India's victory over Pakistan in 1971", themeHi: "1971 में पाकिस्तान पर भारत की विजय" },
        { date: "Dec 23", day: "Kisan Diwas", dayHi: "किसान दिवस", theme: "Empowering Farmers through Agri-Tech", themeHi: "कृषि-तकनीक के माध्यम से किसानों को सशक्त बनाना" },
        { date: "Dec 25", day: "Good Governance Day", dayHi: "सुशासन दिवस", theme: "Digital Governance for Inclusive Growth", themeHi: "समावेशी विकास के लिए डिजिटल शासन" }
    ]

    const filteredNews = activeCategory === "all"
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory)

    const selectedNewsItem = newsItems.find(item => item.id === selectedNews)

    const faqs = [
        { q: "When was the 16th Finance Commission final report submitted?", qHi: "16वें वित्त आयोग की अंतिम रिपोर्ट कब प्रस्तुत की गई?", a: "The 16th Finance Commission submitted its final report on December 15, 2025, covering FY 2026-31.", aHi: "16वें वित्त आयोग ने 15 दिसंबर, 2025 को अपनी अंतिम रिपोर्ट प्रस्तुत की, जो वित्त वर्ष 2026-31 को कवर करती है।" },
        { q: "What is the Belem Declaration on Tropical Forests?", qHi: "बेलेम घोषणा क्या है?", a: "A declaration at COP30 where 12 nations pledged $25 billion for tropical forest restoration by 2030.", aHi: "COP30 में एक घोषणा जहाँ 12 देशों ने 2030 तक उष्णकटिबंधीय वन बहाली के लिए 25 बिलियन डॉलर का संकल्प लिया।" },
        { q: "What is T+0 settlement?", qHi: "T+0 सेटलमेंट क्या है?", a: "T+0 means shares and funds are transferred on the same day of trade. India is the first major economy to implement it for top 500 listed companies.", aHi: "T+0 का अर्थ है कि शेयरों और धन का हस्तांतरण व्यापार के उसी दिन किया जाता है। भारत शीर्ष 500 सूचीबद्ध कंपनियों के लिए इसे लागू करने वाली पहली प्रमुख अर्थव्यवस्था है।" },
        { q: "When was Gaganyaan-2 launched?", qHi: "गगनयान-2 कब लॉन्च किया गया?", a: "Gaganyaan-2 was launched on December 24, 2025, as the second unmanned test flight.", aHi: "गगनयान-2 को 24 दिसंबर, 2025 को दूसरी मानव रहित परीक्षण उड़ान के रूप में लॉन्च किया गया था।" },
        { q: "What is GRAP-IV?", qHi: "GRAP-IV क्या है?", a: "Graded Response Action Plan Stage IV implemented when AQI crosses 450, including truck bans, construction bans, and odd-even vehicle scheme.", aHi: "ग्रेडेड रिस्पॉन्स एक्शन प्लान चरण IV जो AQI के 450 पार करने पर लागू किया जाता है, जिसमें ट्रक प्रतिबंध, निर्माण प्रतिबंध और ऑड-ईवन वाहन योजना शामिल है।" },
        { q: "What is the current cheetah population in India?", qHi: "भारत में चीतों की वर्तमान संख्या क्या है?", a: "The population of Indian-born cheetahs has reached 15 in Kuno National Park.", aHi: "कूनो नेशनल पार्क में भारत में जन्मे चीतों की संख्या 15 तक पहुंच गई है।" }
    ]

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" />
                        Chronos Intelligence Hub • Premium Report
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                        {language === "en" ? "December" : "दिसंबर"} <span className="text-primary">2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                        {language === "en" ? "Monthly Current Affairs Digest" : "मासिक करेंट अफेयर्स डाइजेस्ट"}
                    </p>

                    {/* Language Toggle */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex rounded-lg border bg-card p-1">
                            <button
                                onClick={() => setLanguage("en")}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${language === "en" ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:bg-muted"}`}
                            >
                                <Languages className="w-4 h-4" />
                                English
                            </button>
                            <button
                                onClick={() => setLanguage("hi")}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${language === "hi" ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:bg-muted"}`}
                            >
                                <Languages className="w-4 h-4" />
                                हिंदी
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <FileText className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "5 Major Topics" : "5 प्रमुख विषय"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <Trophy className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "Sahitya Akademi Awards" : "साहित्य अकादमी पुरस्कार"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "8 Important Days" : "8 महत्वपूर्ण दिवस"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <Rocket className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "Gaganyaan-2" : "गगनयान-2"}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="cursor-pointer gap-2" onClick={() => document.getElementById("syllabus-content")?.scrollIntoView({ behavior: "smooth" })}>
                            {language === "en" ? "Read Full Digest" : "पूरा डाइजेस्ट पढ़ें"} <ChevronRight className="w-4 h-4" />
                        </Button>
                        {/* <Button variant="outline" size="lg" className="cursor-pointer gap-2">
                            <Download className="w-4 h-4" />
                            {language === "en" ? "Download PDF" : "पीडीएफ डाउनलोड करें"}
                        </Button> */}
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-6 px-4 border-y bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">41%</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Vertical Devolution" : "ऊर्ध्वाधर विकेंद्रीकरण"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">6.5%</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Repo Rate" : "रेपो रेट"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">₹10L</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "UPI Limit" : "UPI सीमा"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">15</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Cheetah Population" : "चीता जनसंख्या"}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section id="syllabus-content" className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${activeCategory === cat.id
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                                    }`}
                            >
                                {cat.icon}
                                {language === "en" ? cat.name : cat.nameHi}
                            </button>
                        ))}
                    </div>

                    {/* News Grid */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* News List */}
                        <div className="lg:col-span-2 space-y-4">
                            {filteredNews.map((news) => (
                                <div
                                    key={news.id}
                                    onClick={() => setSelectedNews(selectedNews === news.id ? null : news.id)}
                                    className={`rounded-xl border bg-card overflow-hidden cursor-pointer transition-all hover:shadow-md ${selectedNews === news.id ? "ring-2 ring-primary" : ""
                                        }`}
                                >
                                    <div className="p-5">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className={`text-xs px-2 py-0.5 rounded-full bg-${getCategoryColor(news.category)}-100 text-${getCategoryColor(news.category)}-700`}>
                                                        {language === "en" ? getCategoryLabel(news.category) : getCategoryLabelHi(news.category)}
                                                    </span>
                                                </div>
                                                <h3 className="font-bold text-lg mb-2">{language === "en" ? news.title : news.titleHi}</h3>
                                                <p className="text-sm text-muted-foreground line-clamp-2">{language === "en" ? news.summary : news.summaryHi}</p>
                                            </div>
                                            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${selectedNews === news.id ? "rotate-180" : ""}`} />
                                        </div>
                                    </div>

                                    {selectedNews === news.id && (
                                        <div className="border-t p-5 bg-muted/20 space-y-4">
                                            <div>
                                                <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                                                    <Mic className="w-4 h-4 text-primary" />
                                                    {language === "en" ? "Detailed Analysis" : "विस्तृत विश्लेषण"}
                                                </h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{language === "en" ? news.detailedAnalysis : news.detailedAnalysisHi}</p>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                                                    <Target className="w-4 h-4 text-primary" />
                                                    {language === "en" ? "Impact Assessment" : "प्रभाव आकलन"}
                                                </h4>
                                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                                    {(language === "en" ? news.impact : news.impactHi).map((imp, idx) => (
                                                        <li key={idx}>{imp}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                                                    <BookOpen className="w-4 h-4 text-primary" />
                                                    {language === "en" ? "Static GK" : "स्थिर सामान्य ज्ञान"}
                                                </h4>
                                                <div className="grid sm:grid-cols-2 gap-2">
                                                    {news.staticGk.map((gk, idx) => (
                                                        <div key={idx} className="text-xs bg-card rounded-lg p-2">
                                                            <span className="font-medium">{language === "en" ? gk.fact : gk.factHi}:</span> {language === "en" ? gk.description : gk.descriptionHi}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                                                    <GraduationCap className="w-4 h-4 text-primary" />
                                                    {language === "en" ? "Exam Significance" : "परीक्षा महत्व"}
                                                </h4>
                                                <div className="space-y-1 text-sm">
                                                    <p><span className="font-medium">{language === "en" ? "Prelims:" : "प्रारंभिक:"}</span> {language === "en" ? news.examSignificance.prelims : news.examSignificance.prelimsHi}</p>
                                                    <p><span className="font-medium">{language === "en" ? "Mains:" : "मुख्य:"}</span> {language === "en" ? news.examSignificance.mains : news.examSignificance.mainsHi}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Important Days Card */}
                            <div className="rounded-xl border bg-card p-5">
                                <div className="flex items-center gap-2 mb-4">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold">{language === "en" ? "Important Days: December 2025" : "महत्वपूर्ण दिवस: दिसंबर 2025"}</h3>
                                </div>
                                <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                                    {importantDays.map((day, idx) => (
                                        <div key={idx} className="border-b pb-2 last:border-0">
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium text-sm">{day.date}</span>
                                                <span className="text-xs text-primary">{language === "en" ? day.day : day.dayHi}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">{language === "en" ? day.theme : day.themeHi}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Awards & Persons Card */}
                            <div className="rounded-xl border bg-card p-5">
                                <div className="flex items-center gap-2 mb-4">
                                    <Trophy className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold">{language === "en" ? "Awards & Sports Highlights" : "पुरस्कार और खेल मुख्य विशेषताएं"}</h3>
                                </div>
                                <div className="space-y-4">
                                    {awardsAndPersons.map((item, idx) => (
                                        <div key={idx} className="border-b pb-3 last:border-0">
                                            <p className="font-medium text-sm">{language === "en" ? item.title : item.titleHi}</p>
                                            <p className="text-xs text-green-600 font-medium mt-1">🏆 {language === "en" ? item.winner : item.winnerHi}</p>
                                            <p className="text-xs text-muted-foreground mt-1">{language === "en" ? item.detail : item.detailHi}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="rounded-xl border bg-gradient-to-br from-primary/5 to-primary/10 p-5">
                                <h3 className="font-bold mb-3 flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4 text-primary" />
                                    {language === "en" ? "December 2025: Key Numbers" : "दिसंबर 2025: प्रमुख आंकड़े"}
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between"><span>{language === "en" ? "Vertical Devolution:" : "ऊर्ध्वाधर विकेंद्रीकरण:"}</span><span className="font-bold">41%</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Repo Rate:" : "रेपो रेट:"}</span><span className="font-bold">6.5%</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "UPI Limit (Hospital/Education):" : "UPI सीमा (अस्पताल/शिक्षा):"}</span><span className="font-bold">₹10 Lakh</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "CPI Inflation:" : "CPI मुद्रास्फीति:"}</span><span className="font-bold">~4.8%</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "COP30 Forest Pledge:" : "COP30 वन संकल्प:"}</span><span className="font-bold">$25 Billion</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "IPL Highest Bid:" : "IPL सर्वोच्च बोली:"}</span><span className="font-bold">₹28.5 Crore</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Cheetah Population (Kuno):" : "चीता जनसंख्या (कूनो):"}</span><span className="font-bold">15</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Farm Fire Incidents (Punjab/Haryana):" : "पराली जलाने की घटनाएँ (पंजाब/हरियाणा):"}</span><span className="font-bold">2,500+</span></div>
                                </div>
                            </div>

                            {/* Download Card */}
                            {/* <div className="rounded-xl border bg-card p-5 text-center">
                                <Download className="w-8 h-8 text-primary mx-auto mb-3" />
                                <h3 className="font-bold mb-2">{language === "en" ? "Download PDF" : "पीडीएफ डाउनलोड करें"}</h3>
                                <p className="text-xs text-muted-foreground mb-3">
                                    {language === "en" ? "Get the complete December 2025 Current Affairs PDF for offline study" : "ऑफलाइन अध्ययन के लिए संपूर्ण दिसंबर 2025 करेंट अफेयर्स पीडीएफ प्राप्त करें"}
                                </p>
                                <Button size="sm" className="w-full gap-2 cursor-pointer">
                                    <Download className="w-4 h-4" />
                                    {language === "en" ? "Download Now" : "अभी डाउनलोड करें"}
                                </Button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "en" ? "Quick Revision" : "त्वरित पुनरावृत्ति"}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">
                            {language === "en" ? "Frequently Asked Questions" : "अक्सर पूछे जाने वाले प्रश्न"}
                        </h2>
                        <p className="text-muted-foreground">
                            {language === "en" ? "Based on December 2025 current affairs" : "दिसंबर 2025 करेंट अफेयर्स पर आधारित"}
                        </p>
                    </div>

                    <div className="space-y-3">
                        {(showAllFaqs ? faqs : faqs.slice(0, 4)).map((faq, idx) => (
                            <div key={idx} className="rounded-xl border bg-card p-4">
                                <h3 className="font-semibold text-sm mb-1">{language === "en" ? faq.q : faq.qHi}</h3>
                                <p className="text-sm text-muted-foreground">{language === "en" ? faq.a : faq.aHi}</p>
                            </div>
                        ))}
                    </div>

                    {faqs.length > 4 && (
                        <div className="text-center mt-4">
                            <Button variant="ghost" size="sm" onClick={() => setShowAllFaqs(!showAllFaqs)} className="cursor-pointer">
                                {showAllFaqs
                                    ? (language === "en" ? "Show Less" : "कम दिखाएं")
                                    : (language === "en" ? `Show All ${faqs.length} FAQs` : `सभी ${faqs.length} FAQs दिखाएं`)}
                                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${showAllFaqs ? "rotate-180" : ""}`} />
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                        {language === "en" ? "Test Your Knowledge" : "अपने ज्ञान का परीक्षण करें"}
                    </h2>
                    <p className="text-muted-foreground mb-5">
                        {language === "en" ? "Practice MCQs based on December 2025 current affairs" : "दिसंबर 2025 करेंट अफेयर्स पर आधारित MCQ का अभ्यास करें"}
                    </p>
                    <Link href="/mock-test">
                        <Button size="lg" className="gap-2 cursor-pointer">
                            {language === "en" ? "Start Practice Quiz" : "अभ्यास क्विज़ शुरू करें"} <ChevronRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-8 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-lg font-semibold mb-2">
                        {language === "en" ? "December 2025 Current Affairs for Competitive Exams" : "प्रतियोगी परीक्षाओं के लिए दिसंबर 2025 करेंट अफेयर्स"}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        {language === "en"
                            ? "This comprehensive current affairs digest covers all important events of December 2025 including 16th Finance Commission final report (41% vertical devolution for FY 2026-31), COP30 Summit in Belém (Belem Declaration, $25B forest pledge, NCQG), RBI MPC keeps repo rate at 6.5% (15th consecutive time, UPI limit increased to ₹10L), SEBI's T+0 settlement for top 500 companies (India first major economy), ISRO's Gaganyaan-2 mission (second unmanned test flight, Crew Escape System tested at 15km), Project Cheetah (3rd generation cubs, population 15, Gandhi Sagar Sanctuary as second home), GRAP-IV in Delhi NCR (AQI 450+, truck ban, construction ban), Sahitya Akademi Awards 2025 (24 languages, ₹1L prize), IPL 2026 Mega Auction (₹28.5Cr record bid), and Asian Champions Trophy Hockey (India defeated Pakistan 4-2). Perfect for UPSC, SSC, Banking, Railways, HSSC, UKSSSC, and all state-level competitive exams."
                            : "यह व्यापक करेंट अफेयर्स डाइजेस्ट दिसंबर 2025 की सभी महत्वपूर्ण घटनाओं को कवर करता है, जिसमें 16वें वित्त आयोग की अंतिम रिपोर्ट (वित्त वर्ष 2026-31 के लिए 41% ऊर्ध्वाधर विकेंद्रीकरण), बेलेम में COP30 शिखर सम्मेलन (बेलेम घोषणा, $25B वन संकल्प, NCQG), RBI MPC ने रेपो रेट 6.5% पर रखा (लगातार 15वीं बार, UPI सीमा बढ़ाकर ₹10 लाख), SEBI का T+0 सेटलमेंट (शीर्ष 500 कंपनियों के लिए, भारत पहली प्रमुख अर्थव्यवस्था), ISRO का गगनयान-2 मिशन (दूसरी मानव रहित परीक्षण उड़ान, 15 किमी पर क्रू एस्केप सिस्टम का परीक्षण), प्रोजेक्ट चीता (तीसरी पीढ़ी के शावक, जनसंख्या 15, गांधी सागर अभयारण्य दूसरा घर), दिल्ली एनसीआर में GRAP-IV (AQI 450+, ट्रक प्रतिबंध, निर्माण प्रतिबंध), साहित्य अकादमी पुरस्कार 2025 (24 भाषाएँ, ₹1 लाख पुरस्कार), IPL 2026 मेगा ऑक्शन (₹28.5 करोड़ रिकॉर्ड बोली), और एशियाई चैंपियंस ट्रॉफी हॉकी (भारत ने पाकिस्तान को 4-2 से हराया) शामिल हैं। UPSC, SSC, बैंकिंग, रेलवे, HSSC, UKSSSC और सभी राज्य-स्तरीय प्रतियोगी परीक्षाओं के लिए उपयुक्त।"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-3">
                        {language === "en" ? "Source: Chronos Intelligence Hub • Research Grade Analysis • For Educational Purposes" : "स्रोत: Chronos Intelligence Hub • अनुसंधान-ग्रेड विश्लेषण • शैक्षिक उद्देश्यों के लिए"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    )
}

// Helper functions
function getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
        national: "blue",
        international: "purple",
        economy: "green",
        science: "orange",
        environment: "emerald"
    }
    return colors[category] || "gray"
}

function getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
        national: "National Affairs",
        international: "International",
        economy: "Economy & Banking",
        science: "Science & Tech",
        environment: "Environment"
    }
    return labels[category] || category
}

function getCategoryLabelHi(category: string): string {
    const labels: Record<string, string> = {
        national: "राष्ट्रीय मामले",
        international: "अंतर्राष्ट्रीय",
        economy: "अर्थव्यवस्था और बैंकिंग",
        science: "विज्ञान और प्रौद्योगिकी",
        environment: "पर्यावरण"
    }
    return labels[category] || category
}