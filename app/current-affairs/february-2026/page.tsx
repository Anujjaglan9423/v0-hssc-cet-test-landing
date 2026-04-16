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
    Snowflake,
    Droplets
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

export default function FebruaryCurrentAffairsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [selectedNews, setSelectedNews] = useState<string | null>(null)
    const [showAllFaqs, setShowAllFaqs] = useState(false)
    const [language, setLanguage] = useState<"en" | "hi">("en")

    const newsItems: NewsItem[] = [
        {
            id: "union-budget",
            title: "Union Budget 2026-27: Viksit Bharat Roadmap",
            titleHi: "केंद्रीय बजट 2026-27: विकसित भारत रोडमैप",
            category: "national",
            summary: "Union Budget 2026-27 presented on February 1, 2026, with total expenditure of ₹52.4 trillion, capital expenditure hike of 18% to ₹13.2 trillion, focusing on Gati Shakti Master Plan and National Quantum Mission Phase II.",
            summaryHi: "1 फरवरी 2026 को केंद्रीय बजट 2026-27 पेश किया गया, जिसमें कुल व्यय ₹52.4 ट्रिलियन, पूंजीगत व्यय में 18% की वृद्धि कर ₹13.2 ट्रिलियन किया गया, जो गति शक्ति मास्टर प्लान और राष्ट्रीय क्वांटम मिशन चरण II पर केंद्रित है।",
            detailedAnalysis: "The Union Budget 2026-27 has proposed a total expenditure of approximately ₹52.4 trillion, a significant increase from the previous fiscal. The Capital Expenditure (Capex) outlay has been hiked by 18% to ₹13.2 trillion, aimed at accelerating the Gati Shakti Master Plan for multi-modal connectivity. A major highlight is the 'National Quantum Mission Phase II' allocation of ₹8,000 crore, focusing on quantum communication and cryptography. The budget introduces the 'Green Hydrogen Subsidy Scheme 2.0' to meet the target of 5 MMT annual production by 2030. Furthermore, the government announced the 'Digital India Act 2026' implementation framework, replacing the archaic IT Act of 2000. This act focuses on 'Open Internet', 'Online Safety', and 'Accountability' of AI algorithms. In the social sector, the 'PM-Awas Yojana 2.0' received an allocation of ₹95,000 crore to complete the 'Housing for All' mission in urban pockets. The Fiscal Deficit target for FY27 has been set at 4.2% of GDP, adhering to the consolidation path despite global inflationary pressures.",
            detailedAnalysisHi: "1 फरवरी, 2026 को केंद्रीय वित्त मंत्री ने संसद में वित्त वर्ष 2026-27 का केंद्रीय बजट पेश किया। यह बजट अत्यंत महत्वपूर्ण है क्योंकि यह 2030 के सतत विकास लक्ष्यों (SDGs) की ओर जाने वाले दशक के मध्य बिंदु को चिह्नित करता है और 2047 तक 'विकसित भारत' के दृष्टिकोण पर केंद्रित है। केंद्रीय बजट 2026-27 में लगभग ₹52.4 ट्रिलियन के कुल व्यय का प्रस्ताव किया गया है। पूंजीगत व्यय (Capex) परिव्यय में 18% की वृद्धि कर इसे ₹13.2 ट्रिलियन कर दिया गया है, जिसका उद्देश्य मल्टी-मोडल कनेक्टिविटी के लिए 'गति शक्ति मास्टर प्लान' को गति देना है। एक प्रमुख आकर्षण 'राष्ट्रीय क्वांटम मिशन चरण II' के लिए ₹8,000 करोड़ का आवंटन है, जो क्वांटम संचार और क्रिप्टोग्राफी पर केंद्रित है। बजट में 2030 तक 5 MMT वार्षिक उत्पादन के लक्ष्य को पूरा करने के लिए 'ग्रीन हाइड्रोजन सब्सिडी योजना 2.0' पेश की गई है। इसके अतिरिक्त, सरकार ने 'डिजिटल इंडिया अधिनियम 2026' के कार्यान्वयन ढांचे की घोषणा की, जो 2000 के पुराने आईटी अधिनियम की जगह लेगा। सामाजिक क्षेत्र में, 'पीएम-आवास योजना 2.0' को शहरी क्षेत्रों में 'सभी के लिए आवास' मिशन को पूरा करने के लिए ₹95,000 करोड़ का आवंटन प्राप्त हुआ है। वित्त वर्ष 27 के लिए राजकोषीय घाटे का लक्ष्य सकल घरेलू उत्पाद (GDP) का 4.2% निर्धारित किया गया है।",
            impact: [
                "Massive Capex hike expected to generate 1.5 million direct jobs in infrastructure and logistics",
                "Digital India Act 2026 will create strict legal framework for AI ethics and data privacy",
                "Achieving 4.2% fiscal deficit will strengthen India's sovereign credit rating, attracting higher FDI"
            ],
            impactHi: [
                "बड़े पैमाने पर पूंजीगत व्यय में वृद्धि से बुनियादी ढांचे और लॉजिस्टिक्स में 1.5 मिलियन प्रत्यक्ष नौकरियां पैदा होने की उम्मीद",
                "डिजिटल इंडिया अधिनियम 2026 AI नैतिकता और डेटा गोपनीयता के लिए सख्त कानूनी ढांचा तैयार करेगा",
                "4.2% राजकोषीय घाटे को प्राप्त करने से भारत की संप्रभु क्रेडिट रेटिंग मजबूत होगी, जिससे अधिक FDI आकर्षित होगा"
            ],
            staticGk: [
                { fact: "Article 112", description: "Constitution refers to Budget as 'Annual Financial Statement'", factHi: "अनुच्छेद 112", descriptionHi: "संविधान बजट को 'वार्षिक वित्तीय विवरण' कहता है" },
                { fact: "Fiscal Deficit", description: "Difference between total expenditure and receipts excluding borrowing", factHi: "राजकोषीय घाटा", descriptionHi: "उधारी को छोड़कर कुल व्यय और प्राप्तियों के बीच का अंतर" },
                { fact: "FRBM Act 2003", description: "Sets targets for government to reduce fiscal deficits", factHi: "FRBM अधिनियम 2003", descriptionHi: "सरकार के लिए राजकोषीय घाटे को कम करने के लक्ष्य निर्धारित करता है" },
                { fact: "First Budget", description: "Presented by R.K. Shanmukham Chetty on Nov 26, 1947", factHi: "पहला बजट", descriptionHi: "26 नवंबर, 1947 को आर.के. शनमुखम चेट्टी द्वारा प्रस्तुत" }
            ],
            examSignificance: {
                prelims: "Specific allocations (Quantum Mission, Capex), fiscal deficit targets, constitutional articles",
                mains: "GS Paper III - Analysis of infrastructure spending, fiscal consolidation, and impact of Digital India Act on economy",
                prelimsHi: "विशिष्ट आवंटन (क्वांटम मिशन, पूंजीगत व्यय), राजकोषीय घाटे के लक्ष्य, संवैधानिक अनुच्छेद",
                mainsHi: "जीएस पेपर III - बुनियादी ढांचे के खर्च, राजकोषीय समेकन और अर्थव्यवस्था पर डिजिटल इंडिया अधिनियम के प्रभाव का विश्लेषण"
            }
        },
        {
            id: "quad-summit-feb",
            title: "2026 QUAD Summit in New Delhi",
            titleHi: "नई दिल्ली में 2026 क्वाड शिखर सम्मेलन",
            category: "international",
            summary: "India hosted Quad Leaders' Summit in New Delhi focusing on Indo-Pacific Maritime Domain Awareness, Quad Infrastructure Fellowship, and 6G telecommunications pact.",
            summaryHi: "भारत ने नई दिल्ली में क्वाड नेताओं के शिखर सम्मेलन की मेजबानी की, जो इंडो-पैसिफिक मैरीटाइम डोमेन अवेयरनेस, क्वाड इंफ्रास्ट्रक्चर फेलोशिप और 6G दूरसंचार समझौते पर केंद्रित था।",
            detailedAnalysis: "The 2026 Summit focused on the 'Quad Infrastructure Fellowship,' which aims to train 2,000 specialists across the Indo-Pacific in sustainable infrastructure. A critical outcome was the signing of the 'Indo-Pacific Critical & Emerging Technology Pact,' focusing on 6G telecommunications and semiconductor supply chain resilience. The leaders addressed the escalating tensions in the South China Sea and reaffirmed their commitment to a 'Free and Open Indo-Pacific'. India pushed for the inclusion of 'Climate Adaptation Technology' under the Quad umbrella, leading to the creation of the 'Quad Climate Data Portal'. This portal will provide real-time satellite data to Pacific Island nations for disaster management. The summit also reviewed the progress of the 'Quad Vaccine Partnership', which has now expanded to include tropical disease therapeutics.",
            detailedAnalysisHi: "फरवरी 2026 के मध्य में, भारत ने नई दिल्ली में चतुर्भुज सुरक्षा संवाद (Quad) शिखर सम्मेलन की मेजबानी की। प्रधानमंत्री नरेंद्र मोदी ने अमेरिका, जापान और ऑस्ट्रेलिया के नेताओं के साथ 'इंडो-पैसिफिक मैरीटाइम डोमेन अवेयरनेस (IPMDA)' पहल पर चर्चा की। 2026 के शिखर सम्मेलन में 'क्वाड इंफ्रास्ट्रक्चर फेलोशिप' पर ध्यान केंद्रित किया गया, जिसका लक्ष्य पूरे इंडो-पैसिफिक में 2,000 विशेषज्ञों को प्रशिक्षित करना है। एक महत्वपूर्ण परिणाम 'इंडो-पैसिफिक क्रिटिकल एंड इमर्जिंग टेक्नोलॉजी पैक्ट' पर हस्ताक्षर करना था, जो 6G दूरसंचार और सेमीकंडक्टर आपूर्ति श्रृंखला लचीलेपन पर केंद्रित है। नेताओं ने दक्षिण चीन सागर में बढ़ते तनाव को संबोधित किया और 'मुक्त और खुले इंडो-पैसिफिक' के प्रति अपनी प्रतिबद्धता दोहराई। भारत ने क्वाड के तहत 'जलवायु अनुकूलन प्रौद्योगिकी' को शामिल करने पर जोर दिया, जिससे 'क्वाड क्लाइमेट डेटा पोर्टल' का निर्माण हुआ।",
            impact: [
                "Enhanced maritime security will reduce insurance premiums for shipping in Indian Ocean",
                "6G pact positions Quad as direct competitor to Chinese technological hegemony",
                "Expansion into climate data marks Quad's evolution from security-centric to holistic development partner"
            ],
            impactHi: [
                "बेहतर समुद्री सुरक्षा हिंद महासागर में शिपिंग के लिए बीमा प्रीमियम कम करेगी",
                "6G समझौता क्वाड को चीनी तकनीकी वर्चस्व का प्रत्यक्ष प्रतियोगी बनाता है",
                "जलवायु डेटा में विस्तार क्वाड के सुरक्षा-केंद्रित समूह से समग्र क्षेत्रीय विकास भागीदार के रूप में विकास को दर्शाता है"
            ],
            staticGk: [
                { fact: "QUAD Origin", description: "First mooted by Japanese PM Shinzo Abe in 2007, revived in 2017", factHi: "क्वाड की उत्पत्ति", descriptionHi: "पहली बार 2007 में जापानी प्रधानमंत्री शिंजो अबे द्वारा प्रस्तावित, 2017 में पुनर्जीवित" },
                { fact: "Malabar Exercise", description: "Naval exercise involving all four QUAD members", factHi: "मालाबार अभ्यास", descriptionHi: "सभी चार क्वाड सदस्यों को शामिल करने वाला नौसैनिक अभ्यास" },
                { fact: "IPMDA Launch", description: "Launched at 2022 Tokyo Summit to track 'dark shipping'", factHi: "IPMDA लॉन्च", descriptionHi: "2022 टोक्यो शिखर सम्मेलन में 'डार्क शिपिंग' ट्रैक करने के लिए लॉन्च किया गया" },
                { fact: "QUAD HQ", description: "No formal secretariat or headquarters", factHi: "क्वाड मुख्यालय", descriptionHi: "कोई औपचारिक सचिवालय या मुख्यालय नहीं" }
            ],
            examSignificance: {
                prelims: "New initiatives (6G pact, Climate Data Portal), member nations",
                mains: "GS Paper II - Significance of Quad in India's foreign policy, challenges posed by China, shift towards technological cooperation",
                prelimsHi: "नई पहल (6G समझौता, जलवायु डेटा पोर्टल), सदस्य देश",
                mainsHi: "जीएस पेपर II - भारत की विदेश नीति में क्वाड का महत्व, चीन द्वारा उत्पन्न चुनौतियाँ, तकनीकी सहयोग की ओर बदलाव"
            }
        },
        {
            id: "rbi-mpc-feb",
            title: "RBI MPC Review February 2026: Repo Rate Unchanged at 6.25%",
            titleHi: "आरबीआई एमपीसी समीक्षा फरवरी 2026: रेपो रेट 6.25% पर अपरिवर्तित",
            category: "economy",
            summary: "RBI's MPC kept Repo Rate unchanged at 6.25%, shifted stance to 'Neutral', and launched CBDC-Retail 2.0 with offline transaction capabilities.",
            summaryHi: "आरबीआई की एमपीसी ने रेपो रेट 6.25% पर अपरिवर्तित रखा, रुख बदलकर 'तटस्थ' कर दिया, और ऑफलाइन लेनदेन क्षमताओं वाला CBDC-रिटेल 2.0 लॉन्च किया।",
            detailedAnalysis: "The MPC kept the Repo Rate unchanged at 6.25% for the fourth consecutive meeting. This decision was driven by the Headline Inflation (CPI) stabilizing at 4.1%, within the RBI's comfort zone of 4% (+/- 2%). However, the RBI raised concerns over food inflation due to erratic weather patterns affecting the Rabi crop. The 'Withdrawal of Accommodation' stance was officially changed to 'Neutral,' signaling potential rate cuts in the latter half of 2026 if inflation remains stable. A significant banking update was the launch of 'CBDC-Retail 2.0,' which introduces offline transaction capabilities for the Digital Rupee, targeting rural areas with low internet penetration. Additionally, the RBI issued new guidelines for 'Algorithmic Trading' in commercial banks to mitigate systemic risks associated with AI-driven high-frequency trading.",
            detailedAnalysisHi: "एमपीसी ने लगातार चौथी बैठक में रेपो रेट को 6.25% पर अपरिवर्तित रखा। यह निर्णय हेडलाइन मुद्रास्फीति (CPI) के 4.1% पर स्थिर होने के कारण लिया गया, जो आरबीआई के 4% (+/- 2%) के दायरे में है। हालांकि, आरबीआई ने रबी फसल को प्रभावित करने वाले अनियमित मौसम पैटर्न के कारण खाद्य मुद्रास्फीति पर चिंता व्यक्त की। 'आवास वापसी' का रुख आधिकारिक तौर पर बदलकर 'तटस्थ' कर दिया गया है। एक महत्वपूर्ण बैंकिंग अपडेट 'CBDC-रिटेल 2.0' का लॉन्च था, जो डिजिटल रुपये के लिए ऑफलाइन लेनदेन क्षमताओं को पेश करता है। इसके अतिरिक्त, आरबीआई ने एआई-संचालित हाई-फ्रीक्वेंसी ट्रेडिंग से जुड़े जोखिमों को कम करने के लिए वाणिज्यिक बैंकों में 'एल्गोरिथमिक ट्रेडिंग' के लिए नए दिशानिर्देश जारी किए।",
            impact: [
                "Stable interest rates provide relief to home loan borrowers (EMIs remain steady)",
                "Shift to 'Neutral' stance indicates central bank equally concerned about growth and inflation",
                "CBDC-Retail 2.0 could revolutionize financial inclusion in shadow-banking regions of India"
            ],
            impactHi: [
                "स्थिर ब्याज दरें होम लोन उधारकर्ताओं को राहत प्रदान करती हैं (ईएमआई स्थिर रहती हैं)",
                "'तटस्थ' रुख में बदलाव इंगित करता है कि केंद्रीय बैंक अब मुद्रास्फीति के साथ-साथ आर्थिक विकास के बारे में भी समान रूप से चिंतित है",
                "CBDC-रिटेल 2.0 भारत के छाया-बैंकिंग क्षेत्रों में वित्तीय समावेशन में क्रांति ला सकता है"
            ],
            staticGk: [
                { fact: "MPC Composition", description: "6 members (3 from RBI, 3 appointed by Govt of India)", factHi: "एमपीसी संरचना", descriptionHi: "6 सदस्य (3 आरबीआई से, 3 भारत सरकार द्वारा नियुक्त)" },
                { fact: "Section 45ZB", description: "RBI Act, 1934 provides for MPC constitution", factHi: "धारा 45ZB", descriptionHi: "आरबीआई अधिनियम, 1934 एमपीसी गठन का प्रावधान करता है" },
                { fact: "Repo Rate", description: "Rate at which RBI lends money to commercial banks", factHi: "रेपो रेट", descriptionHi: "वह दर जिस पर आरबीआई वाणिज्यिक बैंकों को पैसा उधार देता है" },
                { fact: "CBDC Pilot", description: "India's CBDC pilot started in late 2022", factHi: "CBDC पायलट", descriptionHi: "भारत का CBDC पायलट 2022 के अंत में शुरू हुआ" }
            ],
            examSignificance: {
                prelims: "Repo rate figures, MPC structure, CBDC features",
                mains: "GS Paper III - Monetary policy's role in balancing inflation and growth, digital currency's impact on banking system",
                prelimsHi: "रेपो रेट के आंकड़े, एमपीसी संरचना, CBDC विशेषताएं",
                mainsHi: "जीएस पेपर III - मुद्रास्फीति और विकास को संतुलित करने में मौद्रिक नीति की भूमिका, बैंकिंग प्रणाली पर डिजिटल मुद्रा का प्रभाव"
            }
        },
        {
            id: "winter-olympics",
            title: "Milan-Cortina 2026 Winter Olympics: Most Tech-Driven Games",
            titleHi: "मिलान-कोर्टिना 2026 शीतकालीन ओलंपिक: सबसे तकनीक-संचालित खेल",
            category: "science",
            summary: "XXV Winter Olympics commenced on February 6, 2026, in Italy, featuring Digital Twin technology, 5G-Advanced (5.5G) broadcasts, and India's largest-ever contingent of 7 athletes.",
            summaryHi: "XXV शीतकालीन ओलंपिक 6 फरवरी, 2026 को इटली में शुरू हुआ, जिसमें डिजिटल ट्विन तकनीक, 5G-एडवांस्ड (5.5G) प्रसारण और 7 एथलीटों का भारत का अब तक का सबसे बड़ा दल शामिल था।",
            detailedAnalysis: "The 2026 Winter Olympics featured the first-ever large-scale use of 'Digital Twin' technology for venue management, allowing organizers to simulate crowd movements and energy consumption in real-time. For the first time, 5G-Advanced (5.5G) was used to provide ultra-low latency broadcasts to global audiences. In the realm of sports science, athletes utilized AI-powered 'Biometric Wearables' that provided real-time data on muscle fatigue and oxygen levels, which were approved by the IOC for training but regulated during competition. From an Indian perspective, the Ministry of Youth Affairs and Sports sent its largest-ever contingent (7 athletes) for Alpine Skiing and Luge. The government's 'Target Olympic Podium Scheme (TOPS)' was extended to winter sports in 2024, the results of which were visible in the improved qualifying timings of Indian athletes.",
            detailedAnalysisHi: "XXV ओलंपिक शीतकालीन खेल (मिलान-कोर्टिना 2026) 6 फरवरी, 2026 को इटली में शुरू हुए। इस आयोजन को इतिहास के 'सबसे टिकाऊ और तकनीक-संचालित ओलंपिक' के रूप में सराहा जा रहा है। 2026 शीतकालीन ओलंपिक में स्थल प्रबंधन के लिए 'डिजिटल ट्विन' तकनीक का पहली बार बड़े पैमाने पर उपयोग किया गया। पहली बार, वैश्विक दर्शकों को अल्ट्रा-लो लेटेंसी प्रसारण प्रदान करने के लिए 5G-एडवांस्ड (5.5G) का उपयोग किया गया। खेल विज्ञान के क्षेत्र में, एथलीटों ने एआई-संचालित 'बायोमेट्रिक वियरेबल्स' का उपयोग किया। भारतीय दृष्टिकोण से, युवा मामले और खेल मंत्रालय ने अल्पाइन स्कीइंग और लूज (Luge) के लिए अपना अब तक का सबसे बड़ा दल (7 एथलीट) भेजा। सरकार की 'लक्ष्य ओलंपिक पोडियम योजना (TOPS)' को 2024 में शीतकालीन खेलों तक विस्तारित किया गया था, जिसके परिणाम भारतीय एथलीटों के बेहतर क्वालीफाइंग समय में दिखाई दिए।",
            impact: [
                "Use of 100% renewable energy for the games sets new benchmark for global sporting events",
                "India's focus on winter sports indicates diversification of sports policy beyond cricket and athletics",
                "Digital Twin technology expected to be adopted by smart cities globally following its success"
            ],
            impactHi: [
                "खेलों के लिए 100% नवीकरणीय ऊर्जा का उपयोग वैश्विक खेल आयोजनों के लिए नया मानक स्थापित करता है",
                "शीतकालीन खेलों पर भारत का ध्यान क्रिकेट और एथलेटिक्स से परे खेल नीति के विविधीकरण को इंगित करता है",
                "डिजिटल ट्विन तकनीक को इसकी सफलता के बाद वैश्विक स्तर पर स्मार्ट शहरों द्वारा अपनाए जाने की उम्मीद"
            ],
            staticGk: [
                { fact: "First Winter Olympics", description: "Held in Chamonix, France, in 1924", factHi: "पहला शीतकालीन ओलंपिक", descriptionHi: "1924 में चैमोनिक्स, फ्रांस में आयोजित" },
                { fact: "IOC Headquarters", description: "Lausanne, Switzerland", factHi: "आईओसी मुख्यालय", descriptionHi: "लॉज़ेन, स्विट्जरलैंड" },
                { fact: "Olympic Motto", description: "Citius, Altius, Fortius - Communiter", factHi: "ओलंपिक आदर्श वाक्य", descriptionHi: "सिटियस, ऑल्टियस, फोर्टियस - कम्युनिटर" },
                { fact: "India at Winter Olympics", description: "Shiva Keshavan most prominent Indian winter Olympian (Luge)", factHi: "शीतकालीन ओलंपिक में भारत", descriptionHi: "शिवा केशवन सबसे प्रमुख भारतीय शीतकालीन ओलंपियन (लूज)" }
            ],
            examSignificance: {
                prelims: "Host city, new technologies used, Indian participants",
                mains: "Role of technology in modern sports, India's evolving sports culture and the TOPS scheme",
                prelimsHi: "मेजबान शहर, उपयोग की गई नई तकनीकें, भारतीय प्रतिभागी",
                mainsHi: "आधुनिक खेलों में प्रौद्योगिकी की भूमिका, भारत की विकसित होती खेल संस्कृति और TOPS योजना"
            }
        },
        {
            id: "ramsar-feb",
            title: "World Wetlands Day 2026: India Adds 5 New Ramsar Sites",
            titleHi: "विश्व आर्द्रभूमि दिवस 2026: भारत ने 5 नए रामसर स्थल जोड़े",
            category: "environment",
            summary: "On World Wetlands Day (Feb 2, 2026), India announced addition of 5 new Ramsar sites in Karnataka and Tamil Nadu, taking total to 85. 'Wetland Credit Trading' launched under Amrit Dharohar scheme.",
            summaryHi: "विश्व आर्द्रभूमि दिवस (2 फरवरी, 2026) पर, भारत ने कर्नाटक और तमिलनाडु में 5 नए रामसर स्थलों को जोड़ने की घोषणा की, जिससे कुल संख्या 85 हो गई। अमृत धरोहर योजना के तहत 'वेटलैंड क्रेडिट ट्रेडिंग' शुरू की गई।",
            detailedAnalysis: "On February 2, 2026, World Wetlands Day was celebrated with the theme 'Wetlands and Human Wellbeing: A Sustainable Future.' With the addition of 5 new sites (located in Karnataka and Tamil Nadu), India's total tally of Ramsar sites has reached 85. The 'Amrit Dharohar' scheme, launched in 2023, has been expanded to include 'Wetland Credit Trading,' a first-of-its-kind initiative where local communities earn credits for conserving wetland biodiversity. These credits can be bought by corporations to meet their ESG (Environmental, Social, and Governance) targets. The 2026 report on Indian Wetlands highlighted that carbon sequestration in Mangrove-based Ramsar sites has increased by 12% due to the MISHTI (Mangrove Initiative for Shoreline Habitats & Tangible Incomes) program. However, the report also warned about the 'Eutrophication' of urban wetlands in Bengaluru and Hyderabad due to untreated sewage.",
            detailedAnalysisHi: "2 फरवरी, 2026 को, विश्व आर्द्रभूमि दिवस 'आर्द्रभूमि और मानव कल्याण: एक सतत भविष्य' थीम के साथ मनाया गया। 5 नई साइटों (कर्नाटक और तमिलनाडु में स्थित) के जुड़ने के साथ, भारत में रामसर साइटों की कुल संख्या 85 हो गई है। 2023 में शुरू की गई 'अमृत धरोहर' योजना का विस्तार 'वेटलैंड क्रेडिट ट्रेडिंग' को शामिल करने के लिए किया गया है। यह अपनी तरह की पहली पहल है जहाँ स्थानीय समुदाय आर्द्रभूमि जैव विविधता के संरक्षण के लिए क्रेडिट अर्जित करते हैं। भारतीय आर्द्रभूमि पर 2026 की रिपोर्ट में इस बात पर प्रकाश डाला गया कि मैंग्रोव इनिशिएटिव फॉर शोरलाइन हैबिटेट्स एंड टेंजिबल इनकम्स (MISHTI) कार्यक्रम के कारण मैंग्रोव-आधारित रामसर साइटों में कार्बन पृथक्करण में 12% की वृद्धि हुई है। हालांकि, रिपोर्ट में अनुपचारित सीवेज के कारण बेंगलुरु और हैदराबाद में शहरी आर्द्रभूमि के 'पोषक तत्वों की अधिकता' (Eutrophication) के बारे में भी चेतावनी दी गई है।",
            impact: [
                "Wetland Credit Trading will provide direct financial incentives to fishing and farming communities",
                "Expansion of Ramsar sites strengthens India's position in Convention on Biological Diversity (CBD)",
                "Restoration of urban wetlands critical for flood mitigation in expanding Indian metros"
            ],
            impactHi: [
                "वेटलैंड क्रेडिट ट्रेडिंग मछली पकड़ने और कृषि समुदायों को प्रत्यक्ष वित्तीय प्रोत्साहन प्रदान करेगा",
                "रामसर स्थलों का विस्तार जैविक विविधता पर कन्वेंशन (CBD) में भारत की स्थिति को मजबूत करता है",
                "विस्तारशील भारतीय महानगरों में बाढ़ शमन के लिए शहरी आर्द्रभूमियों की बहाली महत्वपूर्ण है"
            ],
            staticGk: [
                { fact: "Ramsar Convention", description: "Signed in 1971 in Ramsar, Iran; came into force in 1975", factHi: "रामसर कन्वेंशन", descriptionHi: "1971 में रामसर, ईरान में हस्ताक्षरित; 1975 में लागू हुआ" },
                { fact: "Montreux Record", description: "Register of wetland sites where ecological changes have occurred", factHi: "मोंट्रो रिकॉर्ड", descriptionHi: "आर्द्रभूमि स्थलों का रजिस्टर जहां पारिस्थितिक परिवर्तन हुए हैं" },
                { fact: "Largest Ramsar Site", description: "Sundarbans, West Bengal", factHi: "सबसे बड़ा रामसर स्थल", descriptionHi: "सुंदरवन, पश्चिम बंगाल" },
                { fact: "Smallest Ramsar Site", description: "Renuka Wetland, Himachal Pradesh", factHi: "सबसे छोटा रामसर स्थल", descriptionHi: "रेणुका आर्द्रभूमि, हिमाचल प्रदेश" }
            ],
            examSignificance: {
                prelims: "Names and locations of new sites, Ramsar criteria, Wetland Credit Trading",
                mains: "GS Paper III - Biodiversity conservation, climate change mitigation, wetland restoration policies",
                prelimsHi: "नए स्थलों के नाम और स्थान, रामसर मानदंड, वेटलैंड क्रेडिट ट्रेडिंग",
                mainsHi: "जीएस पेपर III - जैव विविधता संरक्षण, जलवायु परिवर्तन शमन, आर्द्रभूमि बहाली नीतियां"
            }
        }
    ]

    const awardsAndPersons = [
        { title: "Bharat Ratna 2026", titleHi: "भारत रत्न 2026", winner: "Dr. M.S. Swaminathan (Posthumous), Ratan Tata (Posthumous)", winnerHi: "डॉ. एम.एस. स्वामीनाथन (मरणोपरांत), रतन टाटा (मरणोपरांत)", detail: "For Green Revolution contributions and industrial leadership/philanthropy respectively", detailHi: "क्रमशः हरित क्रांति योगदान और औद्योगिक नेतृत्व/परोपकार के लिए" },
        { title: "Dadasaheb Phalke Award 2026", titleHi: "दादासाहेब फाल्के पुरस्कार 2026", winner: "Shah Rukh Khan", winnerHi: "शाहरुख खान", detail: "For four decades of contribution to Indian cinema and global cultural impact", detailHi: "भारतीय सिनेमा और वैश्विक सांस्कृतिक प्रभाव में चार दशकों के योगदान के लिए" },
        { title: "President of ICJ", titleHi: "अंतर्राष्ट्रीय न्यायालय के अध्यक्ष", winner: "Justice Dalveer Bhandari (India)", winnerHi: "न्यायमूर्ति दलवीर भंडारी (भारत)", detail: "Elected as President of International Court of Justice for three-year term", detailHi: "अंतर्राष्ट्रीय न्यायालय के अध्यक्ष के रूप में तीन वर्ष के कार्यकाल के लिए निर्वाचित" },
        { title: "Grammy Awards 2026", titleHi: "ग्रैमी पुरस्कार 2026", winner: "Rakesh Chaurasia (Flautist)", winnerHi: "राकेश चौरसिया (बांसुरी वादक)", detail: "Won 'Best Global Music Album' for collaborative project 'Himalayan Echoes'", detailHi: "सहयोगी परियोजना 'हिमालयन इकोज़' के लिए 'सर्वश्रेष्ठ वैश्विक संगीत एल्बम' जीता" }
    ]

    const sportsHighlights = [
        { title: "Khelo India Winter Games 2026", titleHi: "खेलो इंडिया शीतकालीन खेल 2026", detail: "Held in Gulmarg, Jammu & Kashmir. J&K topped medal tally for third consecutive year.", detailHi: "गुलमर्ग, जम्मू और कश्मीर में आयोजित। जम्मू और कश्मीर ने लगातार तीसरे वर्ष पदक तालिका में शीर्ष स्थान प्राप्त किया।" },
        { title: "Chess - R. Praggnanandhaa", titleHi: "शतरंज - आर. प्रज्ञानानंदा", detail: "Reached World No. 2 spot in FIDE rankings following victory at Tata Steel Chess Tournament.", detailHi: "टाटा स्टील शतरंज टूर्नामेंट में जीत के बाद फाइड रैंकिंग में विश्व नंबर 2 स्थान पर पहुंचे।" }
    ]

    const importantDays = [
        { date: "Feb 1", day: "Indian Coast Guard Day", dayHi: "भारतीय तटरक्षक दिवस", theme: "50th Raising Day. Focus on 'Maritime Security in the Age of AI'", themeHi: "50वां स्थापना दिवस। 'AI के युग में समुद्री सुरक्षा' पर फोकस" },
        { date: "Feb 2", day: "World Wetlands Day", dayHi: "विश्व आर्द्रभूमि दिवस", theme: "Wetlands and Human Wellbeing", themeHi: "आर्द्रभूमि और मानव कल्याण" },
        { date: "Feb 4", day: "World Cancer Day", dayHi: "विश्व कैंसर दिवस", theme: "Close the Care Gap: Advancing Precision Medicine", themeHi: "देखभाल की खाई को पाटें: सटीक चिकित्सा को आगे बढ़ाएं" },
        { date: "Feb 10", day: "World Pulses Day", dayHi: "विश्व दलहन दिवस", theme: "Pulses: Nourishing Soils and People", themeHi: "दलहन: मिट्टी और लोगों का पोषण" },
        { date: "Feb 11", day: "International Day of Women and Girls in Science", dayHi: "अंतर्राष्ट्रीय महिला और बालिका विज्ञान दिवस", theme: "Women in the Lead: A New Era for Sustainability", themeHi: "महिलाएं नेतृत्व में: स्थिरता के लिए एक नया युग" },
        { date: "Feb 13", day: "World Radio Day", dayHi: "विश्व रेडियो दिवस", theme: "Radio: A Century of Informing, Entertaining, and Educating", themeHi: "रेडियो: सूचित, मनोरंजन और शिक्षित करने की एक सदी" },
        { date: "Feb 13", day: "National Women's Day", dayHi: "राष्ट्रीय महिला दिवस", theme: "Birth anniversary of Sarojini Naidu (Nightingale of India)", themeHi: "सरोजिनी नायडू (भारत की कोकिला) की जयंती" },
        { date: "Feb 20", day: "World Day of Social Justice", dayHi: "विश्व सामाजिक न्याय दिवस", theme: "Bridging Gaps, Building Alliances", themeHi: "अंतराल को पाटना, गठबंधन बनाना" },
        { date: "Feb 21", day: "International Mother Language Day", dayHi: "अंतर्राष्ट्रीय मातृभाषा दिवस", theme: "Multilingual Education: A Pillar of Intergenerational Learning", themeHi: "बहुभाषी शिक्षा: अंतरपीढ़ीगत शिक्षा का एक स्तंभ" },
        { date: "Feb 24", day: "Central Excise Day", dayHi: "केंद्रीय उत्पाद शुल्क दिवस", theme: "Commemorates Central Excise and Salt Act, 1944", themeHi: "केंद्रीय उत्पाद शुल्क और नमक अधिनियम, 1944 का स्मरण" }
    ]

    const filteredNews = activeCategory === "all"
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory)

    const selectedNewsItem = newsItems.find(item => item.id === selectedNews)

    const faqs = [
        { q: "What is the fiscal deficit target for FY 2026-27?", qHi: "वित्त वर्ष 2026-27 के लिए राजकोषीय घाटे का लक्ष्य क्या है?", a: "The fiscal deficit target for FY 2026-27 has been set at 4.2% of GDP.", aHi: "वित्त वर्ष 2026-27 के लिए राजकोषीय घाटे का लक्ष्य सकल घरेलू उत्पाद का 4.2% निर्धारित किया गया है।" },
        { q: "What is the current Repo Rate as of February 2026?", qHi: "फरवरी 2026 तक वर्तमान रेपो रेट क्या है?", a: "The RBI MPC kept the Repo Rate unchanged at 6.25% for the fourth consecutive meeting.", aHi: "आरबीआई एमपीसी ने लगातार चौथी बैठक में रेपो रेट को 6.25% पर अपरिवर्तित रखा।" },
        { q: "How many Ramsar sites does India have after February 2026?", qHi: "फरवरी 2026 के बाद भारत के पास कितने रामसर स्थल हैं?", a: "India has 85 Ramsar sites after adding 5 new sites in Karnataka and Tamil Nadu.", aHi: "कर्नाटक और तमिलनाडु में 5 नए स्थलों को जोड़ने के बाद भारत के पास 85 रामसर स्थल हैं।" },
        { q: "What was the theme of World Wetlands Day 2026?", qHi: "विश्व आर्द्रभूमि दिवस 2026 की थीम क्या थी?", a: "The theme was 'Wetlands and Human Wellbeing: A Sustainable Future'.", aHi: "थीम थी 'आर्द्रभूमि और मानव कल्याण: एक सतत भविष्य'।" },
        { q: "Who received the Bharat Ratna in 2026?", qHi: "2026 में भारत रत्न किसे मिला?", a: "Dr. M.S. Swaminathan and Ratan Tata were conferred Bharat Ratna posthumously.", aHi: "डॉ. एम.एस. स्वामीनाथन और रतन टाटा को मरणोपरांत भारत रत्न से सम्मानित किया गया।" },
        { q: "What is Wetland Credit Trading?", qHi: "वेटलैंड क्रेडिट ट्रेडिंग क्या है?", a: "A first-of-its-kind initiative under Amrit Dharohar scheme where local communities earn credits for conserving wetland biodiversity, which can be bought by corporations for ESG targets.", aHi: "अमृत धरोहर योजना के तहत अपनी तरह की पहली पहल जहां स्थानीय समुदाय आर्द्रभूमि जैव विविधता के संरक्षण के लिए क्रेडिट अर्जित करते हैं, जिसे निगम ESG लक्ष्यों के लिए खरीद सकते हैं।" }
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
                        {language === "en" ? "February" : "फरवरी"} <span className="text-primary">2026</span>
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
                            <span>{language === "en" ? "Awards & Sports" : "पुरस्कार और खेल"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "10 Important Days" : "10 महत्वपूर्ण दिवस"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <Wallet className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "Budget 2026-27" : "बजट 2026-27"}</span>
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
                            <div className="text-2xl font-bold text-primary">₹52.4T</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Budget Outlay" : "बजट व्यय"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">6.25%</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Repo Rate" : "रेपो रेट"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">85</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Ramsar Sites" : "रामसर स्थल"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">7</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Indian Athletes" : "भारतीय एथलीट"}</div>
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
                                    <h3 className="font-bold">{language === "en" ? "Important Days: February 2026" : "महत्वपूर्ण दिवस: फरवरी 2026"}</h3>
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
                                    <h3 className="font-bold">{language === "en" ? "Awards & Persons in News" : "पुरस्कार और समाचार में व्यक्ति"}</h3>
                                </div>
                                <div className="space-y-3">
                                    {awardsAndPersons.map((item, idx) => (
                                        <div key={idx} className="border-b pb-3 last:border-0">
                                            <p className="font-medium text-sm">{language === "en" ? item.title : item.titleHi}</p>
                                            <p className="text-xs text-green-600 font-medium mt-1">🏆 {language === "en" ? item.winner : item.winnerHi}</p>
                                            <p className="text-xs text-muted-foreground mt-1">{language === "en" ? item.detail : item.detailHi}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sports Highlights Card */}
                            <div className="rounded-xl border bg-card p-5">
                                <div className="flex items-center gap-2 mb-4">
                                    <Zap className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold">{language === "en" ? "Sports Highlights" : "खेल मुख्य विशेषताएं"}</h3>
                                </div>
                                <div className="space-y-3">
                                    {sportsHighlights.map((item, idx) => (
                                        <div key={idx} className="border-b pb-3 last:border-0">
                                            <p className="font-medium text-sm">{language === "en" ? item.title : item.titleHi}</p>
                                            <p className="text-xs text-muted-foreground mt-1">{language === "en" ? item.detail : item.detailHi}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="rounded-xl border bg-gradient-to-br from-primary/5 to-primary/10 p-5">
                                <h3 className="font-bold mb-3 flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4 text-primary" />
                                    {language === "en" ? "February 2026: Key Numbers" : "फरवरी 2026: प्रमुख आंकड़े"}
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between"><span>{language === "en" ? "Budget Expenditure:" : "बजट व्यय:"}</span><span className="font-bold">₹52.4 Trillion</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Capex Increase:" : "पूंजीगत व्यय वृद्धि:"}</span><span className="font-bold">18% (₹13.2T)</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Fiscal Deficit Target:" : "राजकोषीय घाटा लक्ष्य:"}</span><span className="font-bold">4.2% of GDP</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Repo Rate:" : "रेपो रेट:"}</span><span className="font-bold">6.25%</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "CPI Inflation:" : "सीपीआई मुद्रास्फीति:"}</span><span className="font-bold">4.1%</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "New Ramsar Sites:" : "नए रामसर स्थल:"}</span><span className="font-bold">5 (Total: 85)</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Quantum Mission Allocation:" : "क्वांटम मिशन आवंटन:"}</span><span className="font-bold">₹8,000 Crore</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "PM-Awas Yojana 2.0:" : "पीएम-आवास योजना 2.0:"}</span><span className="font-bold">₹95,000 Crore</span></div>
                                </div>
                            </div>

                            {/* Download Card */}
                            {/* <div className="rounded-xl border bg-card p-5 text-center">
                                <Download className="w-8 h-8 text-primary mx-auto mb-3" />
                                <h3 className="font-bold mb-2">{language === "en" ? "Download PDF" : "पीडीएफ डाउनलोड करें"}</h3>
                                <p className="text-xs text-muted-foreground mb-3">
                                    {language === "en" ? "Get the complete February 2026 Current Affairs PDF for offline study" : "ऑफलाइन अध्ययन के लिए संपूर्ण फरवरी 2026 करेंट अफेयर्स पीडीएफ प्राप्त करें"}
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
                            {language === "en" ? "Based on February 2026 current affairs" : "फरवरी 2026 करेंट अफेयर्स पर आधारित"}
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
                        {language === "en" ? "Practice MCQs based on February 2026 current affairs" : "फरवरी 2026 करेंट अफेयर्स पर आधारित MCQ का अभ्यास करें"}
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
                        {language === "en" ? "February 2026 Current Affairs for Competitive Exams" : "प्रतियोगी परीक्षाओं के लिए फरवरी 2026 करेंट अफेयर्स"}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        {language === "en"
                            ? "This comprehensive current affairs digest covers all important events of February 2026 including Union Budget 2026-27 (₹52.4T outlay, 4.2% fiscal deficit), QUAD Summit 2026 (6G pact, Climate Data Portal), RBI MPC Review (Repo Rate 6.25%, CBDC-Retail 2.0), Milan-Cortina Winter Olympics 2026 (Digital Twin tech, 7 Indian athletes), World Wetlands Day (5 new Ramsar sites, total 85), and key awards (Bharat Ratna to M.S. Swaminathan & Ratan Tata). Perfect for UPSC, SSC, Banking, Railways, HSSC, UKSSSC, and all state-level competitive exams."
                            : "यह व्यापक करेंट अफेयर्स डाइजेस्ट फरवरी 2026 की सभी महत्वपूर्ण घटनाओं को कवर करता है, जिसमें केंद्रीय बजट 2026-27 (₹52.4T व्यय, 4.2% राजकोषीय घाटा), क्वाड शिखर सम्मेलन 2026 (6G समझौता, जलवायु डेटा पोर्टल), आरबीआई एमपीसी समीक्षा (रेपो रेट 6.25%, CBDC-रिटेल 2.0), मिलान-कोर्टिना शीतकालीन ओलंपिक 2026 (डिजिटल ट्विन तकनीक, 7 भारतीय एथलीट), विश्व आर्द्रभूमि दिवस (5 नए रामसर स्थल, कुल 85), और प्रमुख पुरस्कार (एम.एस. स्वामीनाथन और रतन टाटा को भारत रत्न) शामिल हैं। UPSC, SSC, बैंकिंग, रेलवे, HSSC, UKSSSC और सभी राज्य-स्तरीय प्रतियोगी परीक्षाओं के लिए उपयुक्त।"}
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