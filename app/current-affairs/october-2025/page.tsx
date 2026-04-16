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
    Wind,
    Medal,
    Mountain,
    Lock,
    Database,
    Coins,
    Microscope,
    Atom,
    Dna
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

export default function OctoberCurrentAffairsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [selectedNews, setSelectedNews] = useState<string | null>(null)
    const [showAllFaqs, setShowAllFaqs] = useState(false)
    const [language, setLanguage] = useState<"en" | "hi">("en")

    const newsItems: NewsItem[] = [
        {
            id: "dpdp-rules",
            title: "Digital Personal Data Protection (Implementation) Rules, 2025",
            titleHi: "डिजिटल व्यक्तिगत डेटा संरक्षण (कार्यान्वयन) नियम, 2025",
            category: "national",
            summary: "MeitY notified comprehensive implementation rules for DPDP Act 2023, establishing Data Protection Board, Consent Manager framework, and tiered penalty structure with 36-hour breach reporting timeline.",
            summaryHi: "MeitY ने DPDP अधिनियम 2023 के लिए व्यापक कार्यान्वयन नियम अधिसूचित किए, जिसमें डेटा संरक्षण बोर्ड, सहमति प्रबंधक ढांचा और 36 घंटे की उल्लंघन रिपोर्टिंग समय सीमा के साथ स्तरीय दंड संरचना स्थापित की गई।",
            detailedAnalysis: "The 2025 Rules specify the operational nuances of the Data Protection Board of India (DPB), chaired by a Union Secretary-level officer. Under these rules, 'Significant Data Fiduciaries' (SDFs)—companies handling data of over 5 million users—must appoint a resident Data Protection Officer (DPO) and conduct annual independent Data Audit. The rules introduce a 'Consent Manager' framework, a first-of-its-kind interoperable platform where citizens can track, manage, and revoke consents given to various apps and services in real-time. Financially, the rules outline a tiered penalty structure. While the Act allows for penalties up to ₹250 crore, the 2025 Rules clarify that the DPB will use a 'proportionality matrix' considering the nature, gravity, and duration of the breach. For the first time, specific timelines have been set: a data breach must be reported to the DPB and affected individuals within 36 hours of discovery. Furthermore, the rules provide exemptions for startups under the 'Regulatory Sandbox' for a period of 24 months to foster innovation without the immediate burden of heavy compliance costs.",
            detailedAnalysisHi: "अक्टूबर 2025 में, इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय (MeitY) ने आधिकारिक तौर पर DPDP अधिनियम 2023 के लिए व्यापक 'कार्यान्वयन नियम' अधिसूचित किए। यह दो साल की संक्रमण अवधि के बाद आया है, जो भारत के पहले समर्पित डेटा गोपनीयता ढांचे के पूर्ण संचालन और डेटा संरक्षण बोर्ड (DPB) की स्थापना का प्रतीक है। 2025 के नियम भारत के डेटा संरक्षण बोर्ड (DPB) की परिचालन बारीकियों को निर्दिष्ट करते हैं, जिसकी अध्यक्षता केंद्रीय सचिव स्तर के अधिकारी करेंगे। इन नियमों के तहत, 'महत्वपूर्ण डेटा फिड्यूशियरी' (SDFs) — 5 मिलियन से अधिक उपयोगकर्ताओं के डेटा को संभालने वाली कंपनियां — को एक निवासी डेटा संरक्षण अधिकारी (DPO) नियुक्त करना होगा और वार्षिक स्वतंत्र डेटा ऑडिट करना होगा। नियम एक 'सहमति प्रबंधक' ढांचा पेश करते हैं, जो अपनी तरह का पहला इंटरऑपरेबल प्लेटफॉर्म है जहां नागरिक वास्तविक समय में विभिन्न ऐप और सेवाओं को दी गई सहमति को ट्रैक, प्रबंधित और रद्द कर सकते हैं। आर्थिक रूप से, नियम एक स्तरीय दंड संरचना की रूपरेखा तैयार करते हैं। जबकि अधिनियम ₹250 करोड़ तक के दंड की अनुमति देता है, 2025 के नियम स्पष्ट करते हैं कि DPB उल्लंघन की प्रकृति, गंभीरता और अवधि पर विचार करते हुए 'आनुपातिकता मैट्रिक्स' का उपयोग करेगा। पहली बार, विशिष्ट समय सीमाएँ निर्धारित की गई हैं: डेटा उल्लंघन की सूचना खोज के 36 घंटों के भीतर DPB और प्रभावित व्यक्तियों को दी जानी चाहिए। इसके अलावा, नियम स्टार्टअप्स के लिए 24 महीने की अवधि के लिए 'रेगुलेटरी सैंडबॉक्स' के तहत छूट प्रदान करते हैं।",
            impact: [
                "Empowers citizens with real-time control over personal data through Consent Manager framework",
                "Reduces compliance burden for startups through 24-month Regulatory Sandbox exemption",
                "Positions India as a global leader in data privacy with strict 36-hour breach reporting"
            ],
            impactHi: [
                "सहमति प्रबंधक ढांचे के माध्यम से नागरिकों को व्यक्तिगत डेटा पर वास्तविक समय का नियंत्रण प्रदान करता है",
                "24 महीने के रेगुलेटरी सैंडबॉक्स छूट के माध्यम से स्टार्टअप्स पर अनुपालन बोझ कम करता है",
                "सख्त 36 घंटे की उल्लंघन रिपोर्टिंग के साथ भारत को डेटा गोपनीयता में वैश्विक नेता के रूप में स्थापित करता है"
            ],
            staticGk: [
                { fact: "DPDP Act 2023", description: "India's first dedicated data privacy framework", factHi: "DPDP अधिनियम 2023", descriptionHi: "भारत का पहला समर्पित डेटा गोपनीयता ढांचा" },
                { fact: "Significant Data Fiduciary", description: "Companies handling data of over 5 million users", factHi: "महत्वपूर्ण डेटा फिड्यूशियरी", descriptionHi: "5 मिलियन से अधिक उपयोगकर्ताओं का डेटा संभालने वाली कंपनियां" },
                { fact: "Consent Manager", description: "Interoperable platform to manage digital consents", factHi: "सहमति प्रबंधक", descriptionHi: "डिजिटल सहमति प्रबंधित करने के लिए इंटरऑपरेबल प्लेटफॉर्म" },
                { fact: "Breach Reporting Timeline", description: "Must be reported within 36 hours of discovery", factHi: "उल्लंघन रिपोर्टिंग समय सीमा", descriptionHi: "खोज के 36 घंटों के भीतर रिपोर्ट किया जाना चाहिए" }
            ],
            examSignificance: {
                prelims: "DPDP Act provisions, Consent Manager, Data Protection Board structure",
                mains: "GS Paper II & III - Data privacy, digital governance, regulatory framework for tech companies",
                prelimsHi: "DPDP अधिनियम प्रावधान, सहमति प्रबंधक, डेटा संरक्षण बोर्ड संरचना",
                mainsHi: "जीएस पेपर II और III - डेटा गोपनीयता, डिजिटल शासन, टेक कंपनियों के लिए नियामक ढांचा"
            }
        },
        {
            id: "brics-summit",
            title: "17th BRICS Summit (Kazan+, Brazil)",
            titleHi: "17वां ब्रिक्स शिखर सम्मेलन (कज़ान+, ब्राजील)",
            category: "international",
            summary: "First summit after full integration of BRICS+ members, focusing on De-dollarization roadmap, BRICS Pay system, NDB capital increase to $100 billion, and Partner Country category introduction.",
            summaryHi: "ब्रिक्स+ सदस्यों के पूर्ण एकीकरण के बाद पहला शिखर सम्मेलन, डी-डॉलरीकरण रोडमैप, ब्रिक्स पे प्रणाली, NDB पूंजी वृद्धि $100 बिलियन और भागीदार देश श्रेणी की शुरूआत पर केंद्रित।",
            detailedAnalysis: "The 17th BRICS Summit concluded in mid-October 2025. Hosted by Brazil, this was the first summit after the full integration of the 'BRICS+' members (Saudi Arabia, UAE, Iran, Egypt, Ethiopia) and the introduction of the 'Partner Country' category. The 2025 Summit focused on the 'De-dollarization' roadmap and the operationalization of the BRICS Pay system—a blockchain-based multicurrency payment system designed to bypass the SWIFT network. Prime Minister Narendra Modi emphasized the 'Global South' leadership, proposing a 'BRICS Space Consortium' for climate monitoring. A significant development was the 'Kazan-Brasilia Declaration,' which officially endorsed a study for a BRICS common currency, though members agreed on using local currencies for immediate trade settlement. Geopolitically, the summit addressed the expansion of the New Development Bank (NDB). The NDB's authorized capital was increased to $100 billion, with a mandate to allocate 40% of loans to climate-resilient infrastructure. The inclusion of 'Partner Countries' (like Thailand and Algeria) created a new outer ring for the bloc, allowing for economic cooperation without full voting rights, thus maintaining the core group's decision-making agility.",
            detailedAnalysisHi: "17वां ब्रिक्स शिखर सम्मेलन अक्टूबर 2025 के मध्य में संपन्न हुआ। ब्राजील द्वारा आयोजित, यह 'ब्रिक्स+' सदस्यों (सऊदी अरब, यूएई, ईरान, मिस्र, इथियोपिया) के पूर्ण एकीकरण और 'भागीदार देश' श्रेणी की शुरुआत के बाद पहला शिखर सम्मेलन था। 2025 के शिखर सम्मेलन ने 'डी-डॉलरीकरण' रोडमैप और ब्रिक्स पे प्रणाली के संचालन पर ध्यान केंद्रित किया - जो SWIFT नेटवर्क को बायपास करने के लिए डिज़ाइन की गई ब्लॉकचेन-आधारित बहु-मुद्रा भुगतान प्रणाली है। प्रधानमंत्री नरेंद्र मोदी ने 'ग्लोबल साउथ' नेतृत्व पर जोर दिया, जलवायु निगरानी के लिए 'ब्रिक्स स्पेस कंसोर्टियम' का प्रस्ताव रखा। एक महत्वपूर्ण विकास 'कज़ान-ब्रासीलिया घोषणा' थी, जिसने आधिकारिक तौर पर ब्रिक्स साझा मुद्रा के अध्ययन का समर्थन किया, हालांकि सदस्य तत्काल व्यापार निपटान के लिए स्थानीय मुद्राओं का उपयोग करने पर सहमत हुए। भू-राजनीतिक रूप से, शिखर सम्मेलन ने न्यू डेवलपमेंट बैंक (NDB) के विस्तार को संबोधित किया। NDB की अधिकृत पूंजी बढ़ाकर $100 बिलियन कर दी गई, जिसमें 40% ऋण जलवायु-अनुकूल बुनियादी ढांचे को आवंटित करने का अधिदेश दिया गया।",
            impact: [
                "Reduction in transaction costs for intra-BRICS trade by estimated 3-5% through BRICS Pay",
                "India maintains balancing act between West (G7) and BRICS+ bloc, reinforcing multi-aligned foreign policy",
                "Push for common currency may face hurdles due to China-India economic disparities"
            ],
            impactHi: [
                "BRICS Pay के माध्यम से अंतर-ब्रिक्स व्यापार के लिए लेनदेन लागत में अनुमानित 3-5% की कमी",
                "भारत पश्चिम (G7) और ब्रिक्स+ ब्लॉक के बीच संतुलन बनाता है, बहु-संरेखित विदेश नीति को मजबूत करता है",
                "साझा मुद्रा के लिए प्रयास चीन-भारत आर्थिक असमानताओं के कारण बाधाओं का सामना कर सकता है"
            ],
            staticGk: [
                { fact: "BRICS Origin", description: "Term coined by Jim O'Neill (Goldman Sachs) in 2001; first summit in 2009 (Yekaterinburg)", factHi: "ब्रिक्स उत्पत्ति", descriptionHi: "2001 में जिम ओ'नील द्वारा गढ़ा गया शब्द; पहला शिखर सम्मेलन 2009 (येकातेरिनबर्ग)" },
                { fact: "NDB Establishment", description: "2014 (Fortaleza Summit); HQ in Shanghai, China", factHi: "NDB स्थापना", descriptionHi: "2014 (फोर्टालेजा शिखर सम्मेलन); मुख्यालय शंघाई, चीन" },
                { fact: "BRICS Expansion", description: "Historic expansion decided at 15th Summit in Johannesburg (2023)", factHi: "ब्रिक्स विस्तार", descriptionHi: "ऐतिहासिक विस्तार जोहान्सबर्ग (2023) में 15वें शिखर सम्मेलन में तय किया गया" },
                { fact: "Current Chair (2025)", description: "Brazil", factHi: "वर्तमान अध्यक्ष (2025)", descriptionHi: "ब्राजील" }
            ],
            examSignificance: {
                prelims: "BRICS+ members, NDB capital, BRICS Pay, Partner Country category",
                mains: "GS Paper II - India's multi-aligned foreign policy, de-dollarization, South-South cooperation",
                prelimsHi: "ब्रिक्स+ सदस्य, NDB पूंजी, ब्रिक्स पे, भागीदार देश श्रेणी",
                mainsHi: "जीएस पेपर II - भारत की बहु-संरेखित विदेश नीति, डी-डॉलरीकरण, दक्षिण-दक्षिण सहयोग"
            }
        },
        {
            id: "rbi-mpc-oct",
            title: "RBI MPC Review October 2025: Repo Rate at 6.25%",
            titleHi: "RBI MPC समीक्षा अक्टूबर 2025: रेपो रेट 6.25% पर",
            category: "economy",
            summary: "MPC maintained Repo Rate at 6.25%, shifted to 'Neutral' stance, raised GDP forecast to 7.2%, and introduced Unified Lending Interface (ULI) nationwide.",
            summaryHi: "MPC ने रेपो रेट 6.25% पर रखा, 'तटस्थ' रुख अपनाया, GDP पूर्वानुमान बढ़ाकर 7.2% किया, और देश भर में यूनिफाइड लेंडिंग इंटरफेस (ULI) शुरू किया।",
            detailedAnalysis: "Governor announced that the MPC decided to maintain the Repo Rate at 6.25% for the second consecutive quarter, adopting a 'Neutral' stance, shifting away from 'Withdrawal of Accommodation.' This move was prompted by the Consumer Price Index (CPI) inflation settling within the 4% (+/- 2%) target range, specifically at 4.2% in September 2025. However, the RBI raised the GDP growth forecast for FY26 to 7.2%, citing robust rural demand and a revival in private capital expenditure (CapEx). A major technical announcement was the introduction of the 'Unified Lending Interface' (ULI) nationwide. Similar to UPI, ULI aims to digitize the appraisal process for small and marginal farmers and MSMEs by integrating data from various state governments, credit bureaus, and satellite agencies. Additionally, the RBI enhanced the limit for 'UPI Lite' transactions from ₹500 to ₹1,000 to further reduce the load on the core banking system for small-value payments.",
            detailedAnalysisHi: "गवर्नर ने घोषणा की कि MPC ने लगातार दूसरी तिमाही के लिए रेपो रेट को 6.25% पर बनाए रखने का निर्णय लिया है, 'तटस्थ' रुख अपनाते हुए, 'आवास की वापसी' से हटकर। यह कदम उपभोक्ता मूल्य सूचकांक (CPI) मुद्रास्फीति के 4% (+/- 2%) लक्ष्य सीमा के भीतर रहने, विशेष रूप से सितंबर 2025 में 4.2% पर रहने के कारण उठाया गया था। हालांकि, RBI ने मजबूत ग्रामीण मांग और निजी पूंजीगत व्यय (CapEx) में पुनरुद्धार का हवाला देते हुए वित्त वर्ष 26 के लिए GDP विकास अनुमान को बढ़ाकर 7.2% कर दिया। एक प्रमुख तकनीकी घोषणा देश भर में 'यूनिफाइड लेंडिंग इंटरफेस' (ULI) की शुरुआत थी। UPI के समान, ULI का उद्देश्य विभिन्न राज्य सरकारों, क्रेडिट ब्यूरो और उपग्रह एजेंसियों के डेटा को एकीकृत करके छोटे और सीमांत किसानों और MSMEs के लिए मूल्यांकन प्रक्रिया को डिजिटल बनाना है। इसके अतिरिक्त, RBI ने छोटे मूल्य के भुगतानों के लिए कोर बैंकिंग प्रणाली पर भार को कम करने के लिए 'UPI लाइट' लेनदेन की सीमा ₹500 से बढ़ाकर ₹1,000 कर दी।",
            impact: [
                "Stable interest rates provide relief to home loan borrowers",
                "ULI will revolutionize rural credit access, reducing dependency on informal moneylenders",
                "Shift to 'Neutral' stance signals potential rate cuts in early 2026 if global conditions remain stable"
            ],
            impactHi: [
                "स्थिर ब्याज दरें होम लोन उधारकर्ताओं को राहत प्रदान करती हैं",
                "ULI ग्रामीण ऋण पहुंच में क्रांति लाएगा, अनौपचारिक साहूकारों पर निर्भरता कम करेगा",
                "'तटस्थ' रुख में बदलाव वैश्विक परिस्थितियों के स्थिर रहने पर 2026 की शुरुआत में दरों में कटौती का संकेत देता है"
            ],
            staticGk: [
                { fact: "MPC Composition", description: "6 members (3 from RBI, 3 nominated by Govt); headed by RBI Governor", factHi: "MPC संरचना", descriptionHi: "6 सदस्य (3 RBI से, 3 सरकार द्वारा नामित); RBI गवर्नर की अध्यक्षता" },
                { fact: "Legal Basis", description: "Section 45ZB of RBI Act, 1934", factHi: "कानूनी आधार", descriptionHi: "RBI अधिनियम, 1934 की धारा 45ZB" },
                { fact: "ULI", description: "Unified Lending Interface - digitizes loan appraisal for farmers and MSMEs", factHi: "ULI", descriptionHi: "यूनिफाइड लेंडिंग इंटरफेस - किसानों और MSMEs के लिए ऋण मूल्यांकन को डिजिटल करता है" },
                { fact: "UPI Lite Limit", description: "Enhanced from ₹500 to ₹1,000", factHi: "UPI लाइट सीमा", descriptionHi: "₹500 से बढ़ाकर ₹1,000 किया गया" }
            ],
            examSignificance: {
                prelims: "Repo rate, ULI features, UPI Lite limit, GDP forecast",
                mains: "GS Paper III - Monetary policy, digital lending, financial inclusion",
                prelimsHi: "रेपो रेट, ULI विशेषताएं, UPI लाइट सीमा, GDP पूर्वानुमान",
                mainsHi: "जीएस पेपर III - मौद्रिक नीति, डिजिटल ऋण, वित्तीय समावेशन"
            }
        },
        {
            id: "nobel-prizes-2025",
            title: "Nobel Prizes 2025: Breakthroughs in AI, Quantum Biology & mRNA",
            titleHi: "नोबेल पुरस्कार 2025: AI, क्वांटम बायोलॉजी और mRNA में सफलताएँ",
            category: "science",
            summary: "2025 Nobel Prizes awarded for Epigenetic Rejuvenation Therapy (Medicine), Topological Quantum Fluids at Room Temperature (Physics), AI-driven Protein Synthesis (Chemistry), and AI Autonomy regulation (Peace).",
            summaryHi: "2025 के नोबेल पुरस्कार एपिजेनेटिक कायाकल्प थेरेपी (चिकित्सा), कमरे के तापमान पर टोपोलॉजिकल क्वांटम फ्लुइड्स (भौतिकी), AI-संचालित प्रोटीन संश्लेषण (रसायन), और AI स्वायत्तता विनियमन (शांति) के लिए प्रदान किए गए।",
            detailedAnalysis: "The Nobel Assembly announced the winners for 2025 during the first week of October. Medicine was awarded to Dr. Elena Rossi and Dr. Samuel Chen for their work on 'Epigenetic Rejuvenation Therapy,' which successfully reversed cellular aging markers in clinical trials, offering hope for treating age-related neurodegenerative diseases. Physics was awarded to a trio of scientists (Dr. Aris Thorne, Dr. Linda Wu, and Dr. Hiroshi Sato) for the discovery of 'Topological Quantum Fluids' at room temperature, a milestone that paves the way for stable, non-cryogenic quantum computers. Chemistry was awarded for the development of 'AI-driven Protein Synthesis,' where researchers used advanced neural networks to design entirely new enzymes that can decompose microplastics in ocean water within 48 hours. The Peace Prize was awarded to the 'International Campaign to Regulate AI Autonomy (ICRAA)' for their tireless efforts to draft the first global treaty banning Lethal Autonomous Weapons Systems (LAWS).",
            detailedAnalysisHi: "नोबेल असेंबली ने अक्टूबर के पहले सप्ताह के दौरान 2025 के विजेताओं की घोषणा की। चिकित्सा डॉ. एलेना रॉसी और डॉ. सैमुअल चेन को 'एपिजेनेटिक कायाकल्प थेरेपी' पर उनके काम के लिए दिया गया, जिसने नैदानिक परीक्षणों में सेलुलर उम्र बढ़ने के संकेतों को सफलतापूर्वक उलट दिया। भौतिकी तीन वैज्ञानिकों को कमरे के तापमान पर 'टोपोलॉजिकल क्वांटम फ्लुइड्स' की खोज के लिए दी गई। रसायन विज्ञान 'AI-संचालित प्रोटीन संश्लेषण' के विकास के लिए दिया गया, जहाँ शोधकर्ताओं ने पूरी तरह से नए एंजाइमों को डिजाइन करने के लिए उन्नत तंत्रिका नेटवर्क का उपयोग किया जो 48 घंटों के भीतर समुद्र के पानी में माइक्रोप्लास्टिक्स को विघटित कर सकते हैं। शांति पुरस्कार 'इंटरनेशनल कैंपेन टू रेगुलेट AI ऑटोनॉमी (ICRAA)' को घातक स्वायत्त हथियार प्रणालियों पर प्रतिबंध लगाने वाली पहली वैश्विक संधि का मसौदा तैयार करने के उनके अथक प्रयासों के लिए दिया गया।",
            impact: [
                "Chemistry Prize discovery could solve global plastic crisis, creating multi-billion dollar waste-management industry",
                "Peace Prize puts pressure on major powers (US, China, Russia) to sign treaty on autonomous weapons",
                "2025 marks year where AI and quantum technologies moved from theoretical physics to Nobel-winning practical applications"
            ],
            impactHi: [
                "रसायन पुरस्कार की खोज वैश्विक प्लास्टिक संकट को हल कर सकती है, जिससे बहु-अरब डॉलर का अपशिष्ट प्रबंधन उद्योग तैयार हो सकता है",
                "शांति पुरस्कार प्रमुख शक्तियों (US, चीन, रूस) पर स्वायत्त हथियारों पर संधि पर हस्ताक्षर करने के लिए दबाव डालता है",
                "2025 वह वर्ष है जहाँ AI और क्वांटम प्रौद्योगिकियाँ सैद्धांतिक भौतिकी से नोबेल-विजेता व्यावहारिक अनुप्रयोगों में स्थानांतरित हुईं"
            ],
            staticGk: [
                { fact: "Nobel Prize Establishment", description: "Established by Alfred Nobel's will in 1895; first awarded in 1901", factHi: "नोबेल पुरस्कार स्थापना", descriptionHi: "1895 में अल्फ्रेड नोबेल की वसीयत द्वारा स्थापित; पहली बार 1901 में प्रदान किया गया" },
                { fact: "Prize Categories", description: "Physics, Chemistry, Medicine, Literature, Peace, Economics", factHi: "पुरस्कार श्रेणियाँ", descriptionHi: "भौतिकी, रसायन, चिकित्सा, साहित्य, शांति, अर्थशास्त्र" },
                { fact: "Award Ceremony", description: "Held annually on December 10 (anniversary of Alfred Nobel's death)", factHi: "पुरस्कार समारोह", descriptionHi: "प्रतिवर्ष 10 दिसंबर को आयोजित (अल्फ्रेड नोबेल की मृत्यु की वर्षगांठ)" },
                { fact: "2025 Theme", description: "AI and Quantum Technologies dominate all science categories", factHi: "2025 थीम", descriptionHi: "AI और क्वांटम प्रौद्योगिकियाँ सभी विज्ञान श्रेणियों में प्रभावी" }
            ],
            examSignificance: {
                prelims: "Nobel Prize 2025 winners and their discoveries, categories",
                mains: "GS Paper III - Scientific advancements, AI ethics, autonomous weapons regulation",
                prelimsHi: "नोबेल पुरस्कार 2025 विजेता और उनकी खोजें, श्रेणियाँ",
                mainsHi: "जीएस पेपर III - वैज्ञानिक प्रगति, AI नैतिकता, स्वायत्त हथियार विनियमन"
            }
        },
        {
            id: "air-quality-oct",
            title: "Air Quality Crisis in North India & GRAP-IV Implementation",
            titleHi: "उत्तर भारत में वायु गुणवत्ता संकट और GRAP-IV कार्यान्वयन",
            category: "environment",
            summary: "Delhi-NCR AQI reached 450 (Severe+), CAQM invoked GRAP Stage IV. Pusa Bio-decomposer 2.0 launched (15-day decomposition). State of Air 2025 report shows 12% PM2.5 reduction since 2020.",
            summaryHi: "दिल्ली-एनसीआर में AQI 450 (गंभीर+) पर पहुंचा, CAQM ने GRAP चरण IV लागू किया। पूसा बायो-डीकंपोजर 2.0 लॉन्च (15 दिन में विघटन)। स्टेट ऑफ द एयर 2025 रिपोर्ट 2020 से PM2.5 में 12% की कमी दर्शाती है।",
            detailedAnalysis: "As October 2025 saw the Indo-Gangetic Plain witnessing a steep decline in Air Quality Index (AQI), the Commission for Air Quality Management (CAQM) implemented Stage IV of the Graded Response Action Plan (GRAP) in the Delhi-NCR region. The 'State of the Air 2025' report, released by the MoEFCC, highlighted that while national PM2.5 levels have decreased by 12% since 2020 due to the National Clean Air Programme (NCAP), seasonal stubble burning in Punjab and Haryana remains a severe challenge. In October 2025, AQI levels in Delhi touched 450 (Severe Plus). Under GRAP-IV, the entry of heavy goods vehicles (except essential commodities) was banned in Delhi, and 50% of government offices shifted to 'Work From Home'. A new technological intervention introduced this year is 'Pusa-Bio-Decomposer 2.0', a fast-acting microbial spray that decomposes paddy straw in 15 days instead of 25. The government also announced a subsidy of ₹1,500 crore for 'In-situ' management machinery. However, the report warns that 'Urban Heat Islands' are exacerbating the stagnation of pollutants, necessitating a change in urban architectural policies.",
            detailedAnalysisHi: "चूंकि अक्टूबर 2025 में भारत-गंगा के मैदान में वायु गुणवत्ता सूचकांक (AQI) में भारी गिरावट देखी गई, वायु गुणवत्ता प्रबंधन आयोग (CAQM) ने दिल्ली-NCR क्षेत्र में ग्रेडेड रिस्पांस एक्शन प्लान (GRAP) के चरण IV को लागू किया। MoEFCC द्वारा जारी 'स्टेट ऑफ द एयर 2025' रिपोर्ट ने इस बात पर प्रकाश डाला कि राष्ट्रीय स्वच्छ वायु कार्यक्रम (NCAP) के कारण 2020 से राष्ट्रीय स्तर पर PM2.5 के स्तर में 12% की गिरावट आई है, लेकिन पंजाब और हरियाणा में मौसमी पराली जलाना एक गंभीर चुनौती बनी हुई है। अक्टूबर 2025 में, दिल्ली में AQI का स्तर 450 ('गंभीर प्लस') को छू गया। GRAP-IV के तहत, दिल्ली में भारी माल वाहनों (आवश्यक वस्तुओं को छोड़कर) के प्रवेश पर प्रतिबंध लगा दिया गया था, और 50% सरकारी कार्यालय 'वर्क फ्रॉम होम' पर स्थानांतरित हो गए। इस वर्ष शुरू किया गया एक नया तकनीकी हस्तक्षेप 'पूसा-बायो-डीकंपोजर 2.0' है, जो एक तेजी से काम करने वाला माइक्रोबियल स्प्रे है जो धान के पुआल को 25 के बजाय 15 दिनों में विघटित कर देता है। सरकार ने 'इन-सिटू' प्रबंधन मशीनरी के लिए ₹1,500 करोड़ की सब्सिडी की भी घोषणा की। हालांकि, रिपोर्ट चेतावनी देती है कि 'शहरी ताप द्वीप' प्रदूषकों के ठहराव को बढ़ा रहे हैं।",
            impact: [
                "Health costs related to respiratory illnesses in North India estimated at 1.5% of regional GDP during winter months",
                "Shift toward mandatory 'Green Construction' codes and permanent bans on older diesel vehicles",
                "Technological interventions like Pusa Bio-decomposer 2.0 show promise for stubble management"
            ],
            impactHi: [
                "उत्तर भारत में श्वसन रोगों से संबंधित स्वास्थ्य लागत सर्दियों के महीनों के दौरान क्षेत्रीय GDP का 1.5% अनुमानित है",
                "अनिवार्य 'ग्रीन कंस्ट्रक्शन' कोड और पुराने डीजल वाहनों पर स्थायी प्रतिबंध की ओर बदलाव",
                "पूसा बायो-डीकंपोजर 2.0 जैसे तकनीकी हस्तक्षेप पराली प्रबंधन के लिए वादा दिखाते हैं"
            ],
            staticGk: [
                { fact: "AQI Categories", description: "Good (0-50), Satisfactory (51-100), Moderate (101-200), Poor (201-300), Very Poor (301-400), Severe (401-500)", factHi: "AQI श्रेणियाँ", descriptionHi: "अच्छा (0-50), संतोषजनक (51-100), मध्यम (101-200), खराब (201-300), बहुत खराब (301-400), गंभीर (401-500)" },
                { fact: "GRAP Stages", description: "4 stages based on AQI levels; Stage IV for Severe+ (450+)", factHi: "GRAP चरण", descriptionHi: "AQI स्तरों के आधार पर 4 चरण; गंभीर+ (450+) के लिए चरण IV" },
                { fact: "NCAP", description: "National Clean Air Programme launched in 2019", factHi: "NCAP", descriptionHi: "राष्ट्रीय स्वच्छ वायु कार्यक्रम 2019 में शुरू किया गया" },
                { fact: "Pusa Bio-decomposer", description: "Microbial solution for stubble decomposition; 2.0 version decomposes in 15 days", factHi: "पूसा बायो-डीकंपोजर", descriptionHi: "पराली विघटन के लिए माइक्रोबियल समाधान; 2.0 संस्करण 15 दिनों में विघटित करता है" }
            ],
            examSignificance: {
                prelims: "GRAP stages, NCAP targets, Pusa Bio-decomposer, AQI categories",
                mains: "GS Paper III - Air pollution challenges, stubble burning solutions, urban heat islands",
                prelimsHi: "GRAP चरण, NCAP लक्ष्य, पूसा बायो-डीकंपोजर, AQI श्रेणियाँ",
                mainsHi: "जीएस पेपर III - वायु प्रदूषण चुनौतियाँ, पराली जलाने के समाधान, शहरी ताप द्वीप"
            }
        }
    ]

    const awardsAndPersons = [
        { title: "38th National Games 2025", titleHi: "38वें राष्ट्रीय खेल 2025", winner: "Host: Uttarakhand", winnerHi: "मेजबान: उत्तराखंड", detail: "Services Sports Control Board (SSCB) topped medal tally for 5th consecutive time, followed by Maharashtra and Haryana. Yoga and Mallakamb included as full medal events. 'Green Games' initiative with zero single-use plastic and 100% solar-powered venues. 17-year-old swimmer Aryan Nehra broke three national records. Event served as selection trial for 2026 Asian Games.", detailHi: "सर्विसेज स्पोर्ट्स कंट्रोल बोर्ड (SSCB) लगातार पांचवीं बार पदक तालिका में शीर्ष पर रहा, उसके बाद महाराष्ट्र और हरियाणा का स्थान रहा। योग और मलखंब को पूर्ण पदक स्पर्धाओं के रूप में शामिल किया गया। शून्य एकल-उपयोग प्लास्टिक और 100% सौर ऊर्जा संचालित स्थलों के साथ 'ग्रीन गेम्स' पहल। 17 वर्षीय तैराक आर्यन नेहरा ने तीन राष्ट्रीय रिकॉर्ड तोड़े। यह आयोजन 2026 के एशियाई खेलों के लिए चयन परीक्षण के रूप में कार्य करता था।" }
    ]

    const importantDays = [
        { date: "Oct 2", day: "Gandhi Jayanti / Int. Day of Non-Violence", dayHi: "गांधी जयंती / अंतर्राष्ट्रीय अहिंसा दिवस", theme: "Sustainability through Non-Violence", themeHi: "अहिंसा के माध्यम से स्थिरता" },
        { date: "Oct 5", day: "World Teachers' Day", dayHi: "विश्व शिक्षक दिवस", theme: "Empowering Educators for a Digital Future", themeHi: "डिजिटल भविष्य के लिए शिक्षकों को सशक्त बनाना" },
        { date: "Oct 8", day: "Indian Air Force (IAF) Day", dayHi: "भारतीय वायु सेना दिवस", theme: "Potent, Powerful, and Proactive", themeHi: "सशक्त, शक्तिशाली और सक्रिय" },
        { date: "Oct 11", day: "International Day of the Girl Child", dayHi: "अंतर्राष्ट्रीय बालिका दिवस", theme: "Girls' Vision for the Future", themeHi: "भविष्य के लिए बालिकाओं का दृष्टिकोण" },
        { date: "Oct 16", day: "World Food Day", dayHi: "विश्व खाद्य दिवस", theme: "Right to Foods for a Better Life", themeHi: "बेहतर जीवन के लिए भोजन का अधिकार" },
        { date: "Oct 24", day: "United Nations Day", dayHi: "संयुक्त राष्ट्र दिवस", theme: "Rebuilding Trust and Global Solidarity", themeHi: "विश्वास का पुनर्निर्माण और वैश्विक एकजुटता" },
        { date: "Oct 31", day: "Rashtriya Ekta Diwas (National Unity Day)", dayHi: "राष्ट्रीय एकता दिवस", theme: "Unity in Diversity: The Digital Connect", themeHi: "विविधता में एकता: डिजिटल कनेक्ट" }
    ]

    const filteredNews = activeCategory === "all"
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory)

    const selectedNewsItem = newsItems.find(item => item.id === selectedNews)

    const faqs = [
        { q: "What is the Data Protection Board of India (DPB)?", qHi: "डेटा संरक्षण बोर्ड ऑफ इंडिया (DPB) क्या है?", a: "The DPB is the regulatory body established under DPDP Act 2023, chaired by a Union Secretary-level officer, responsible for enforcing data privacy rules and imposing penalties for breaches.", aHi: "DPB DPDP अधिनियम 2023 के तहत स्थापित नियामक निकाय है, जिसकी अध्यक्षता केंद्रीय सचिव स्तर के अधिकारी द्वारा की जाती है, जो डेटा गोपनीयता नियमों को लागू करने और उल्लंघनों के लिए दंड लगाने के लिए जिम्मेदार है।" },
        { q: "What is BRICS Pay?", qHi: "ब्रिक्स पे क्या है?", a: "BRICS Pay is a blockchain-based multicurrency payment system designed to bypass SWIFT network, facilitating intra-BRICS trade with lower transaction costs.", aHi: "ब्रिक्स पे एक ब्लॉकचेन-आधारित बहु-मुद्रा भुगतान प्रणाली है जिसे SWIFT नेटवर्क को बायपास करने के लिए डिज़ाइन किया गया है, जो कम लेनदेन लागत के साथ अंतर-ब्रिक्स व्यापार की सुविधा प्रदान करता है।" },
        { q: "What is Unified Lending Interface (ULI)?", qHi: "यूनिफाइड लेंडिंग इंटरफेस (ULI) क्या है?", a: "ULI is a digital platform launched by RBI to digitize loan appraisal for small farmers and MSMEs by integrating data from state governments, credit bureaus, and satellite agencies.", aHi: "ULI RBI द्वारा शुरू किया गया एक डिजिटल प्लेटफॉर्म है जो राज्य सरकारों, क्रेडिट ब्यूरो और उपग्रह एजेंसियों के डेटा को एकीकृत करके छोटे किसानों और MSMEs के लिए ऋण मूल्यांकन को डिजिटल करता है।" },
        { q: "What was the 2025 Nobel Prize in Chemistry for?", qHi: "रसायन विज्ञान में 2025 का नोबेल पुरस्कार किसके लिए दिया गया?", a: "For AI-driven Protein Synthesis, where researchers designed new enzymes that can decompose microplastics in ocean water within 48 hours.", aHi: "AI-संचालित प्रोटीन संश्लेषण के लिए, जहाँ शोधकर्ताओं ने नए एंजाइम डिज़ाइन किए जो 48 घंटों के भीतर समुद्र के पानी में माइक्रोप्लास्टिक्स को विघटित कर सकते हैं।" },
        { q: "What is Pusa Bio-decomposer 2.0?", qHi: "पूसा बायो-डीकंपोजर 2.0 क्या है?", a: "A fast-acting microbial spray that decomposes paddy straw in 15 days (instead of 25 days), launched to address stubble burning crisis in Punjab and Haryana.", aHi: "एक तेजी से काम करने वाला माइक्रोबियल स्प्रे जो धान के पुआल को 25 दिनों के बजाय 15 दिनों में विघटित करता है, जो पंजाब और हरियाणा में पराली जलाने के संकट को हल करने के लिए शुरू किया गया।" },
        { q: "Which state hosted the 38th National Games 2025?", qHi: "38वें राष्ट्रीय खेल 2025 की मेजबानी किस राज्य ने की?", a: "Uttarakhand hosted the 38th National Games across five cities: Dehradun, Haldwani, Rishikesh, Rudrapur, and Gairsain.", aHi: "उत्तराखंड ने पांच शहरों: देहरादून, हल्द्वानी, ऋषिकेश, रुद्रपुर और गैरसैण में 38वें राष्ट्रीय खेलों की मेजबानी की।" }
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
                        {language === "en" ? "October" : "अक्टूबर"} <span className="text-primary">2025</span>
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
                            <span>{language === "en" ? "National Games" : "राष्ट्रीय खेल"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "7 Important Days" : "7 महत्वपूर्ण दिवस"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <Atom className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "Nobel Prizes 2025" : "नोबेल पुरस्कार 2025"}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="cursor-pointer gap-2" onClick={() => document.getElementById("syllabus-content")?.scrollIntoView({ behavior: "smooth" })}>
                            {language === "en" ? "Read Full Digest" : "पूरा डाइजेस्ट पढ़ें"} <ChevronRight className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="cursor-pointer gap-2">
                            <Download className="w-4 h-4" />
                            {language === "en" ? "Download PDF" : "पीडीएफ डाउनलोड करें"}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-6 px-4 border-y bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">6.25%</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Repo Rate" : "रेपो रेट"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">7.2%</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "GDP Forecast" : "GDP पूर्वानुमान"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">$100B</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "NDB Capital" : "NDB पूंजी"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">12%</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "PM2.5 Reduction" : "PM2.5 कमी"}</div>
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
                                    <h3 className="font-bold">{language === "en" ? "Important Days: October 2025" : "महत्वपूर्ण दिवस: अक्टूबर 2025"}</h3>
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

                            {/* Awards & Sports Card */}
                            <div className="rounded-xl border bg-card p-5">
                                <div className="flex items-center gap-2 mb-4">
                                    <Trophy className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold">{language === "en" ? "Sports Highlights" : "खेल मुख्य विशेषताएं"}</h3>
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
                                    {language === "en" ? "October 2025: Key Numbers" : "अक्टूबर 2025: प्रमुख आंकड़े"}
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between"><span>{language === "en" ? "Repo Rate:" : "रेपो रेट:"}</span><span className="font-bold">6.25%</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "GDP Forecast FY26:" : "GDP पूर्वानुमान वित्त वर्ष 26:"}</span><span className="font-bold">7.2%</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "CPI Inflation (Sep 2025):" : "CPI मुद्रास्फीति (सितंबर 2025):"}</span><span className="font-bold">4.2%</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "NDB Authorized Capital:" : "NDB अधिकृत पूंजी:"}</span><span className="font-bold">$100 Billion</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "NDB Climate Loans:" : "NDB जलवायु ऋण:"}</span><span className="font-bold">40% of portfolio</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "PM2.5 Reduction (since 2020):" : "PM2.5 कमी (2020 से):"}</span><span className="font-bold">12%</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Delhi AQI (Oct 2025):" : "दिल्ली AQI (अक्टूबर 2025):"}</span><span className="font-bold">450 (Severe+)</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Pusa Decomposer 2.0 Time:" : "पूसा डीकंपोजर 2.0 समय:"}</span><span className="font-bold">15 days</span></div>
                                </div>
                            </div>

                            {/* Download Card */}
                            <div className="rounded-xl border bg-card p-5 text-center">
                                <Download className="w-8 h-8 text-primary mx-auto mb-3" />
                                <h3 className="font-bold mb-2">{language === "en" ? "Download PDF" : "पीडीएफ डाउनलोड करें"}</h3>
                                <p className="text-xs text-muted-foreground mb-3">
                                    {language === "en" ? "Get the complete October 2025 Current Affairs PDF for offline study" : "ऑफलाइन अध्ययन के लिए संपूर्ण अक्टूबर 2025 करेंट अफेयर्स पीडीएफ प्राप्त करें"}
                                </p>
                                <Button size="sm" className="w-full gap-2 cursor-pointer">
                                    <Download className="w-4 h-4" />
                                    {language === "en" ? "Download Now" : "अभी डाउनलोड करें"}
                                </Button>
                            </div>
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
                            {language === "en" ? "Based on October 2025 current affairs" : "अक्टूबर 2025 करेंट अफेयर्स पर आधारित"}
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
                        {language === "en" ? "Practice MCQs based on October 2025 current affairs" : "अक्टूबर 2025 करेंट अफेयर्स पर आधारित MCQ का अभ्यास करें"}
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
                        {language === "en" ? "October 2025 Current Affairs for Competitive Exams" : "प्रतियोगी परीक्षाओं के लिए अक्टूबर 2025 करेंट अफेयर्स"}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        {language === "en"
                            ? "This comprehensive current affairs digest covers all important events of October 2025 including DPDP Act Implementation Rules (Consent Manager, 36-hour breach reporting, Regulatory Sandbox for startups), 17th BRICS Summit (BRICS Pay, NDB capital $100B, 40% climate loans, Partner Country category), RBI MPC Review (Repo rate 6.25%, Neutral stance, GDP forecast 7.2%, ULI launch, UPI Lite limit ₹1,000), Nobel Prizes 2025 (Epigenetic Rejuvenation Therapy, Topological Quantum Fluids, AI-driven Protein Synthesis, AI Autonomy Peace Prize), Air Quality Crisis (AQI 450+, GRAP-IV, Pusa Bio-decomposer 2.0, 12% PM2.5 reduction since 2020), 38th National Games in Uttarakhand (Services topped, Yoga & Mallakamb included, Green Games initiative), and 7 important days including Gandhi Jayanti, IAF Day, and Rashtriya Ekta Diwas. Perfect for UPSC, SSC, Banking, Railways, HSSC, UKSSSC, and all state-level competitive exams."
                            : "यह व्यापक करेंट अफेयर्स डाइजेस्ट अक्टूबर 2025 की सभी महत्वपूर्ण घटनाओं को कवर करता है, जिसमें DPDP अधिनियम कार्यान्वयन नियम (सहमति प्रबंधक, 36 घंटे की उल्लंघन रिपोर्टिंग, स्टार्टअप्स के लिए रेगुलेटरी सैंडबॉक्स), 17वां ब्रिक्स शिखर सम्मेलन (ब्रिक्स पे, NDB पूंजी $100 बिलियन, 40% जलवायु ऋण, भागीदार देश श्रेणी), RBI MPC समीक्षा (रेपो रेट 6.25%, तटस्थ रुख, GDP पूर्वानुमान 7.2%, ULI लॉन्च, UPI लाइट सीमा ₹1,000), नोबेल पुरस्कार 2025 (एपिजेनेटिक कायाकल्प थेरेपी, टोपोलॉजिकल क्वांटम फ्लुइड्स, AI-संचालित प्रोटीन संश्लेषण, AI स्वायत्तता शांति पुरस्कार), वायु गुणवत्ता संकट (AQI 450+, GRAP-IV, पूसा बायो-डीकंपोजर 2.0, 2020 से PM2.5 में 12% कमी), उत्तराखंड में 38वें राष्ट्रीय खेल (सर्विसेज शीर्ष पर, योग और मलखंब शामिल, ग्रीन गेम्स पहल), और गांधी जयंती, IAF दिवस और राष्ट्रीय एकता दिवस सहित 7 महत्वपूर्ण दिवस शामिल हैं। UPSC, SSC, बैंकिंग, रेलवे, HSSC, UKSSSC और सभी राज्य-स्तरीय प्रतियोगी परीक्षाओं के लिए उपयुक्त।"}
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