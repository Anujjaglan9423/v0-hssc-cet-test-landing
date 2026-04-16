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
    Heart
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

export default function JanuaryCurrentAffairsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [selectedNews, setSelectedNews] = useState<string | null>(null)
    const [showAllFaqs, setShowAllFaqs] = useState(false)
    const [language, setLanguage] = useState<"en" | "hi">("en")

    const newsItems: NewsItem[] = [
        {
            id: "finance-commission-jan",
            title: "16th Finance Commission submits First Interim Report",
            titleHi: "16वें वित्त आयोग ने पहली अंतरिम रिपोर्ट प्रस्तुत की",
            category: "national",
            summary: "The 16th Finance Commission, chaired by Dr. Arvind Panagariya, submitted its first interim report outlining vertical and horizontal devolution of taxes between Centre and States for the upcoming fiscal cycle.",
            summaryHi: "डॉ. अरविंद पनगढ़िया की अध्यक्षता वाले 16वें वित्त आयोग ने आगामी वित्तीय चक्र के लिए केंद्र और राज्यों के बीच करों के ऊर्ध्वाधर और क्षैतिज हस्तांतरण की रूपरेखा तैयार करने वाली अपनी पहली अंतरिम रिपोर्ट प्रस्तुत की।",
            detailedAnalysis: "The 16th Finance Commission was constituted under Article 280 of the Constitution to define the financial relations between the Union and the States. A primary focus of the 2026 report is the 'Performance-based Incentives' for states achieving targets in renewable energy transition and digital governance. The Commission has maintained the vertical devolution at approximately 41%, similar to the 15th FC, but has introduced a new weightage for 'Demographic Performance' to balance the concerns of southern states regarding population control versus the needs of high-population northern states. The report also addresses the augmentation of the Consolidated Fund of a State to supplement the resources of Panchayats and Municipalities. With the 16th FC's mandate extending till October 2025 for the final report, this interim submission provides the fiscal roadmap for the transition year. Key officials involved include Secretary Ritvik Ranjanam Pandey and members like Niranjan Rajadhyaksha. The Commission utilized 2021 Census data (provisional/estimated) alongside 2011 data to ensure fiscal equity.",
            detailedAnalysisHi: "जनवरी 2026 की शुरुआत में, डॉ. अरविंद पनगढ़िया की अध्यक्षता वाले 16वें वित्त आयोग (FC) ने भारत के राष्ट्रपति को अपनी पहली अंतरिम रिपोर्ट सौंपी। यह रिपोर्ट आगामी वित्तीय चक्र के लिए केंद्र और राज्यों के बीच करों के ऊर्ध्वाधर और क्षैतिज हस्तांतरण की रूपरेखा तैयार करती है, जो 2026-27 के केंद्रीय बजट के लिए अत्यंत महत्वपूर्ण है। 16वें वित्त आयोग का गठन संविधान के अनुच्छेद 280 के तहत संघ और राज्यों के बीच वित्तीय संबंधों को परिभाषित करने के लिए किया गया था। 2026 की रिपोर्ट का प्राथमिक ध्यान अक्षय ऊर्जा संक्रमण और डिजिटल शासन में लक्ष्य हासिल करने वाले राज्यों के लिए 'प्रदर्शन-आधारित प्रोत्साहन' पर है। आयोग ने ऊर्ध्वाधर हस्तांतरण को लगभग 41% पर बनाए रखा है, जो 15वें वित्त आयोग के समान है, लेकिन जनसंख्या नियंत्रण के संबंध में दक्षिणी राज्यों की चिंताओं और उच्च जनसंख्या वाले उत्तरी राज्यों की जरूरतों के बीच संतुलन बनाने के लिए 'जनसांख्यिकीय प्रदर्शन' के लिए एक नया वेटेज पेश किया है। रिपोर्ट पंचायतों और नगर पालिकाओं के संसाधनों के पूरक के लिए राज्य संचित निधि के संवर्धन पर भी ध्यान देती है।",
            impact: [
                "Ensures equitable distribution of national wealth, allowing backward states to invest in human capital while rewarding performing states",
                "Forces states to align their fiscal policies with national priorities like Green Hydrogen Mission and Net Zero 2070",
                "Sets the stage for decentralized fiscal federalism where local bodies receive direct, performance-linked grants"
            ],
            impactHi: [
                "राष्ट्रीय संपत्ति का समान वितरण सुनिश्चित करता है, जिससे पिछड़े राज्य मानव पूंजी में निवेश कर सकते हैं और प्रदर्शन करने वाले राज्यों को पुरस्कृत करता है",
                "राज्यों को हरित हाइड्रोजन मिशन और नेट जीरो 2070 जैसी राष्ट्रीय प्राथमिकताओं के साथ अपनी राजकोषीय नीतियों को संरेखित करने के लिए मजबूर करता है",
                "विकेन्द्रीकृत राजकोषीय संघवाद के लिए मंच तैयार करता है जहां स्थानीय निकायों को प्रत्यक्ष, प्रदर्शन-लिंक्ड अनुदान प्राप्त होते हैं"
            ],
            staticGk: [
                { fact: "First Finance Commission", description: "Established in 1951 under the chairmanship of K.C. Neogy", factHi: "प्रथम वित्त आयोग", descriptionHi: "1951 में के.सी. नियोगी की अध्यक्षता में स्थापित" },
                { fact: "Article 280", description: "Mandates President to constitute a Finance Commission every five years", factHi: "अनुच्छेद 280", descriptionHi: "राष्ट्रपति को प्रत्येक पांच वर्ष में वित्त आयोग का गठन करने का आदेश देता है" },
                { fact: "15th FC Data", description: "First to use 2011 Census data exclusively, a point of contention", factHi: "15वां वित्त आयोग डेटा", descriptionHi: "पहली बार 2011 की जनगणना के डेटा का विशेष रूप से उपयोग किया, जो विवाद का विषय था" },
                { fact: "FC Headquarters", description: "Located in New Delhi", factHi: "वित्त आयोग मुख्यालय", descriptionHi: "नई दिल्ली में स्थित" }
            ],
            examSignificance: {
                prelims: "Questions on Article 280, composition of FC, and devolution percentages",
                mains: "GS Paper II (Federalism) and GS Paper III (Economy) - 'Challenges of Fiscal Federalism in India'",
                prelimsHi: "अनुच्छेद 280, वित्त आयोग की संरचना और विकेंद्रीकरण प्रतिशत पर प्रश्न",
                mainsHi: "जीएस पेपर II (संघवाद) और जीएस पेपर III (अर्थव्यवस्था) - 'भारत में राजकोषीय संघवाद की चुनौतियाँ'"
            }
        },
        {
            id: "republic-day",
            title: "77th Republic Day: President of Brazil as Chief Guest",
            titleHi: "77वां गणतंत्र दिवस: ब्राजील के राष्ट्रपति मुख्य अतिथि के रूप में",
            category: "national",
            summary: "India celebrated its 77th Republic Day on January 26, 2026, with Brazilian President Luiz Inácio Lula da Silva as Chief Guest, marking strengthening of Global South narrative and IBSA dialogue forum.",
            summaryHi: "भारत ने 26 जनवरी, 2026 को अपना 77वां गणतंत्र दिवस मनाया, जिसमें ब्राजील के राष्ट्रपति लुइज इनासियो लूला दा सिल्वा मुख्य अतिथि थे, जो 'ग्लोबल साउथ' विमर्श और IBSA संवाद मंच की मजबूती का प्रतीक है।",
            detailedAnalysis: "The invitation to President Lula da Silva is strategically significant as India and Brazil are key partners in G20, BRICS+, and the G4 nations (seeking UNSC permanent seats). During the bilateral talks, both nations signed the 'Strategic Biofuels Alliance 2.0,' focusing on ethanol blending technology where Brazil is a global leader. This aligns with India's target of 20% ethanol blending by 2025-26. Furthermore, discussions centered on the expansion of the India-MERCOSUR Preferential Trade Agreement (PTA). Currently, the PTA covers only about 450 items; the 2026 talks aimed to expand this to over 2,000 items, including pharmaceuticals and defense equipment. The defense corridor between India's HAL and Brazil's Embraer was also a highlight, focusing on the joint production of medium-transport aircraft (MTA) for the Indian Air Force.",
            detailedAnalysisHi: "भारत ने 26 जनवरी, 2026 को अपना 77वां गणतंत्र दिवस मनाया, जिसमें ब्राजील के राष्ट्रपति लुइज इनासियो लूला दा सिल्वा मुख्य अतिथि थे। यह यात्रा 'ग्लोबल साउथ' विमर्श और IBSA (भारत, ब्राजील, दक्षिण अफ्रीका) संवाद मंच की मजबूती का प्रतीक है। राष्ट्रपति लूला दा सिल्वा को आमंत्रण रणनीतिक रूप से महत्वपूर्ण है क्योंकि भारत और ब्राजील G20, BRICS+ और G4 देशों (UNSC स्थायी सीटों की मांग करने वाले) में प्रमुख भागीदार हैं। द्विपक्षीय वार्ता के दौरान, दोनों देशों ने 'स्ट्रैटेजिक बायोफ्यूल्स अलायंस 2.0' पर हस्ताक्षर किए, जो इथेनॉल ब्लेंडिंग तकनीक पर केंद्रित है, जिसमें ब्राजील वैश्विक नेता है। यह 2025-26 तक 20% इथेनॉल ब्लेंडिंग के भारत के लक्ष्य के अनुरूप है। इसके अलावा, चर्चा भारत-मर्कोसुर (MERCOSUR) अधिमान्य व्यापार समझौते (PTA) के विस्तार पर केंद्रित थी। वर्तमान में, PTA में केवल लगभग 450 वस्तुएं शामिल हैं; 2026 की वार्ता का लक्ष्य इसे फार्मास्यूटिकल्स और रक्षा उपकरणों सहित 2,000 से अधिक वस्तुओं तक विस्तारित करना था।",
            impact: [
                "Enhanced trade with Latin America provides new market for Indian generic drugs and IT services",
                "Strengthens India's position as a leader of the Global South, advocating for multilateralism",
                "Potential for trans-continental green energy grid and deeper defense manufacturing cooperation"
            ],
            impactHi: [
                "लैटिन अमेरिका के साथ बढ़ा व्यापार भारतीय जेनेरिक दवाओं और आईटी सेवाओं के लिए नया बाजार प्रदान करता है",
                "बहुपक्षवाद की वकालत करते हुए भारत की ग्लोबल साउथ के नेता के रूप में स्थिति को मजबूत करता है",
                "ट्रांस-कॉन्टिनेंटल ग्रीन एनर्जी ग्रिड और गहन रक्षा विनिर्माण सहयोग की संभावना"
            ],
            staticGk: [
                { fact: "First Republic Day Chief Guest", description: "President Sukarno of Indonesia (1950)", factHi: "पहले गणतंत्र दिवस मुख्य अतिथि", descriptionHi: "इंडोनेशिया के राष्ट्रपति सुकर्णो (1950)" },
                { fact: "India-Brazil Strategic Partnership", description: "Established in 2006", factHi: "भारत-ब्राजील रणनीतिक साझेदारी", descriptionHi: "2006 में स्थापित" },
                { fact: "MERCOSUR", description: "South American trade bloc: Argentina, Brazil, Paraguay, Uruguay", factHi: "मर्कोसुर", descriptionHi: "दक्षिण अमेरिकी व्यापार ब्लॉक: अर्जेंटीना, ब्राजील, पैराग्वे, उरुग्वे" },
                { fact: "COP30 Host", description: "Brazil will host COP30 climate summit", factHi: "COP30 मेजबान", descriptionHi: "ब्राजील COP30 जलवायु शिखर सम्मेलन की मेजबानी करेगा" }
            ],
            examSignificance: {
                prelims: "Facts about MERCOSUR, IBSA, and Republic Day history",
                mains: "GS Paper II (International Relations) - 'India-Brazil Relations and the Rise of the Global South'",
                prelimsHi: "मर्कोसुर, IBSA और गणतंत्र दिवस के इतिहास के बारे में तथ्य",
                mainsHi: "जीएस पेपर II (अंतर्राष्ट्रीय संबंध) - 'भारत-ब्राजील संबंध और ग्लोबल साउथ का उदय'"
            }
        },
        {
            id: "digital-rupee",
            title: "RBI's Digital Rupee (e-Rupee) Scales to 5 Million Daily Transactions",
            titleHi: "RBI का डिजिटल रुपया (ई-रुपया) 5 मिलियन दैनिक लेनदेन तक पहुंचा",
            category: "economy",
            summary: "RBI announced that CBDC-R has crossed 5 million daily transactions milestone, fully integrated with UPI QR codes, with offline functionality gaining traction in rural areas.",
            summaryHi: "RBI ने घोषणा की कि CBDC-R ने 5 मिलियन दैनिक लेनदेन का मील का पत्थर पार कर लिया है, जो UPI QR कोड के साथ पूरी तरह से एकीकृत है, और ग्रामीण क्षेत्रों में ऑफलाइन कार्यक्षमता ने लोकप्रियता हासिल की है।",
            detailedAnalysis: "Governor highlighted that the e-Rupee is no longer in the pilot phase but is now fully integrated with the Unified Payments Interface (UPI) QR codes. The RBI introduced 'Programmable CBDC' in late 2025, allowing government agencies to earmark funds for specific uses (e.g., fertilizer subsidies) that cannot be diverted. This has significantly reduced leakages in Direct Benefit Transfer (DBT) schemes. The banking sector has seen a reduction in operational costs related to physical cash management, which previously cost the RBI over ₹5,000 crores annually. Furthermore, the 2026 data shows that the 'Offline Functionality' of e-Rupee has gained traction in rural areas with poor internet connectivity, using Near Field Communication (NFC) technology. This development places India at the forefront of global CBDC implementation, ahead of the Digital Euro and the US Digital Dollar.",
            detailedAnalysisHi: "जनवरी 2026 में, भारतीय रिजर्व बैंक (RBI) ने घोषणा की कि सेंट्रल बैंक डिजिटल करेंसी (CBDC-R) ने दैनिक 5 मिलियन लेनदेन के मील के पत्थर को पार कर लिया है, जो एक प्रोग्रामेबल, कैशलेस अर्थव्यवस्था की ओर एक बड़े बदलाव का संकेत देता है। गवर्नर ने इस बात पर प्रकाश डाला कि ई-रुपया अब पायलट चरण में नहीं है बल्कि अब यूनिफाइड पेमेंट्स इंटरफेस (UPI) QR कोड के साथ पूरी तरह से एकीकृत है। RBI ने 2025 के अंत में 'प्रोग्रामेबल CBDC' पेश किया था, जिससे सरकारी एजेंसियों को विशिष्ट उपयोगों (जैसे उर्वरक सब्सिडी) के लिए धन निर्धारित करने की अनुमति मिली, जिसे डायवर्ट नहीं किया जा सकता है। इसने प्रत्यक्ष लाभ हस्तांतरण (DBT) योजनाओं में लीकेज को काफी कम कर दिया है। बैंकिंग क्षेत्र ने भौतिक नकदी प्रबंधन से संबंधित परिचालन लागतों में कमी देखी है, जिसकी लागत पहले RBI को सालाना ₹5,000 करोड़ से अधिक होती थी। इसके अलावा, 2026 के आंकड़े बताते हैं कि ई-रुपये की 'ऑफलाइन कार्यक्षमता' ने खराब इंटरनेट कनेक्टिविटी वाले ग्रामीण क्षेत्रों में NFC तकनीक का उपयोग करके लोकप्रियता हासिल की है।",
            impact: [
                "Greater financial inclusion for unbanked populations through offline digital payments",
                "Enhanced monetary policy transmission as RBI can track velocity of money in real-time",
                "Potential replacement of physical currency for high-value inter-bank settlements (CBDC-W)"
            ],
            impactHi: [
                "ऑफलाइन डिजिटल भुगतान के माध्यम से अबैंक्ड आबादी के लिए अधिक वित्तीय समावेशन",
                "बेहतर मौद्रिक नीति प्रसारण क्योंकि RBI वास्तविक समय में धन के वेग को ट्रैक कर सकता है",
                "उच्च-मूल्य अंतर-बैंक निपटान के लिए भौतिक मुद्रा का संभावित प्रतिस्थापन (CBDC-W)"
            ],
            staticGk: [
                { fact: "CBDC Pilot Launch", description: "Wholesale: Nov 2022, Retail: Dec 2022", factHi: "CBDC पायलट लॉन्च", descriptionHi: "थोक: नवंबर 2022, खुदरा: दिसंबर 2022" },
                { fact: "CBDC Definition", description: "Legal tender issued by central bank in digital form", factHi: "CBDC परिभाषा", descriptionHi: "केंद्रीय बैंक द्वारा डिजिटल रूप में जारी वैध मुद्रा" },
                { fact: "CBDC vs Crypto", description: "Backed by sovereign, distinct from private cryptocurrencies", factHi: "CBDC बनाम क्रिप्टो", descriptionHi: "संप्रभु द्वारा समर्थित, निजी क्रिप्टोकरेंसी से अलग" },
                { fact: "CBDC Recommendation", description: "Bhide Committee recommended; formalized in Finance Bill 2022", factHi: "CBDC सिफारिश", descriptionHi: "भिडे समिति द्वारा सिफारिश; वित्त विधेयक 2022 में औपचारिक" }
            ],
            examSignificance: {
                prelims: "Features of CBDC, offline functionality, NFC technology",
                mains: "GS Paper III (Economy) - Digital economy, financial inclusion, monetary policy transmission",
                prelimsHi: "CBDC की विशेषताएं, ऑफलाइन कार्यक्षमता, NFC तकनीक",
                mainsHi: "जीएस पेपर III (अर्थव्यवस्था) - डिजिटल अर्थव्यवस्था, वित्तीय समावेशन, मौद्रिक नीति प्रसारण"
            }
        },
        {
            id: "gaganyaan",
            title: "ISRO Launches Gaganyaan-H1: First Uncrewed Human-Rated Module",
            titleHi: "ISRO ने गगनयान-H1 लॉन्च किया: पहला मानव-रेटेड मानवरहित मॉड्यूल",
            category: "science",
            summary: "ISRO successfully launched Gaganyaan-H1 mission on January 15, 2026, the final uncrewed test flight before the historic crewed mission scheduled for late 2026.",
            summaryHi: "ISRO ने 15 जनवरी, 2026 को गगनयान-H1 मिशन को सफलतापूर्वक लॉन्च किया, जो 2026 के अंत में निर्धारित ऐतिहासिक मानवयुक्त मिशन से पहले अंतिम मानवरहित परीक्षण उड़ान है।",
            detailedAnalysis: "The H1 mission utilized the LVM3 (Launch Vehicle Mark 3) rocket, specifically modified to be 'Human-Rated.' The primary objective was to test the 'Orbital Module,' which consists of the Crew Module (CM) and Service Module (SM). A key highlight of this mission was the successful deployment of 'Vyommitra,' the humanoid robot, which monitored the cabin parameters such as pressure, vibration, and radiation levels to ensure they are safe for human skin. The mission also validated the 'Integrated Main Parachute Awareness' system and the 'Apex Cover Separation' at an altitude of 120 km. After spending 3 days in a low-earth orbit (LEO) at 400 km, the module performed a precise de-boost and splashed down in the Arabian Sea, where it was recovered by the Indian Navy and Coast Guard. This mission proves the reliability of the Life Support System (ECLSS) developed indigenously by ISRO.",
            detailedAnalysisHi: "15 जनवरी, 2026 को, इसरो ने सतीश धवन अंतरिक्ष केंद्र, श्रीहरिकोटा से गगनयान-H1 मिशन को सफलतापूर्वक लॉन्च किया। यह 2026 के अंत में निर्धारित ऐतिहासिक मानवयुक्त मिशन से पहले अंतिम मानवरहित परीक्षण उड़ान है। H1 मिशन में LVM3 (लॉन्च व्हीकल मार्क 3) रॉकेट का उपयोग किया गया, जिसे विशेष रूप से 'ह्यूमन-रेटेड' होने के लिए संशोधित किया गया था। इस मिशन का प्राथमिक उद्देश्य 'ऑर्बिटल मॉड्यूल' का परीक्षण करना था, जिसमें क्रू मॉड्यूल (CM) और सर्विस मॉड्यूल (SM) शामिल हैं। इस मिशन का एक मुख्य आकर्षण 'व्योममित्र' (ह्यूमनॉइड रोबोट) की सफल तैनाती थी, जिसने केबिन मापदंडों जैसे दबाव, कंपन और विकिरण स्तरों की निगरानी की। मिशन ने 120 किमी की ऊंचाई पर 'एकीकृत मुख्य पैराशूट जागरूकता' प्रणाली और 'एपेक्स कवर पृथक्करण' को भी मान्य किया। 400 किमी की निचली पृथ्वी कक्षा (LEO) में 3 दिन बिताने के बाद, मॉड्यूल ने सटीक डी-बूस्ट किया और अरब सागर में स्प्लैश-डाउन किया।",
            impact: [
                "Boosts national pride and inspires new generation of STEM professionals",
                "Establishes India as 4th nation to possess independent human spaceflight capability (after USA, Russia, China)",
                "Paves way for Indian Space Station (Bharatiya Antariksha Station) by 2035"
            ],
            impactHi: [
                "राष्ट्रीय गौरव को बढ़ावा देता है और STEM पेशेवरों की नई पीढ़ी को प्रेरित करता है",
                "भारत को स्वतंत्र मानव अंतरिक्ष उड़ान क्षमता रखने वाला चौथा राष्ट्र (USA, रूस, चीन के बाद) स्थापित करता है",
                "2035 तक भारतीय अंतरिक्ष स्टेशन (भारतीय अंतरिक्ष स्टेशन) का मार्ग प्रशस्त करता है"
            ],
            staticGk: [
                { fact: "Gaganyaan Announcement", description: "Announced by PM Modi in 2018 Independence Day speech", factHi: "गगनयान घोषणा", descriptionHi: "2018 के स्वतंत्रता दिवस भाषण में प्रधानमंत्री मोदी द्वारा घोषित" },
                { fact: "Gaganauts Training", description: "Trained at Yuri Gagarin Cosmonaut Training Center, Russia", factHi: "गगनॉट्स प्रशिक्षण", descriptionHi: "रूस में यूरी गागरिन कॉस्मोनॉट प्रशिक्षण केंद्र में प्रशिक्षित" },
                { fact: "LVM3 Rocket", description: "Human-rated version of India's heaviest rocket", factHi: "LVM3 रॉकेट", descriptionHi: "भारत के सबसे भारी रॉकेट का मानव-रेटेड संस्करण" },
                { fact: "Vyommitra", description: "Humanoid robot for Gaganyaan mission", factHi: "व्योममित्र", descriptionHi: "गगनयान मिशन के लिए ह्यूमनॉइड रोबोट" }
            ],
            examSignificance: {
                prelims: "LVM3 features, Vyommitra, Gaganyaan mission phases",
                mains: "GS Paper III (Science & Tech) - India's space exploration, international collaboration, self-reliance in space technology",
                prelimsHi: "LVM3 विशेषताएं, व्योममित्र, गगनयान मिशन चरण",
                mainsHi: "जीएस पेपर III (विज्ञान और प्रौद्योगिकी) - भारत की अंतरिक्ष खोज, अंतर्राष्ट्रीय सहयोग, अंतरिक्ष प्रौद्योगिकी में आत्मनिर्भरता"
            }
        },
        {
            id: "renewable-energy",
            title: "India Achieves 200 GW Non-Fossil Fuel Capacity Milestone",
            titleHi: "भारत ने 200 GW गैर-जीवाश्म ईंधन क्षमता का मील का पत्थर हासिल किया",
            category: "environment",
            summary: "India's installed non-fossil fuel energy capacity crossed 200 GW, accounting for nearly 45% of total installed power capacity, driven by PM-KUSUM scheme and PLI for solar PV modules.",
            summaryHi: "भारत की स्थापित गैर-जीवाश्म ईंधन ऊर्जा क्षमता 200 GW को पार कर गई, जो कुल स्थापित बिजली क्षमता का लगभग 45% है, जो पीएम-कुसुम योजना और सौर पीवी मॉड्यूल के लिए पीएलआई द्वारा संचालित है।",
            detailedAnalysis: "This achievement is a significant step toward India's COP26 pledge of reaching 500 GW of non-fossil energy by 2030. The growth is driven largely by the 'PM-KUSUM' scheme and the 'Production Linked Incentive (PLI) Scheme for High-Efficiency Solar PV Modules.' In 2025 alone, India added a record 25 GW of solar and wind capacity. The data indicates that Rajasthan and Gujarat lead in solar installations, while Tamil Nadu remains the leader in wind energy. A critical component of this 200 GW is the inclusion of Large Hydro Projects, which were reclassified as renewable energy in 2019. The government is now shifting focus toward 'Battery Energy Storage Systems' (BESS) to manage the intermittency of solar and wind power, with a dedicated viability gap funding (VGF) of ₹9,400 crore.",
            detailedAnalysisHi: "नवीन और नवीकरणीय ऊर्जा मंत्रालय (MNRE) ने जनवरी 2026 में रिपोर्ट दी कि भारत की स्थापित गैर-जीवाश्म ईंधन ऊर्जा क्षमता आधिकारिक तौर पर 200 गीगावाट (GW) के आंकड़े को पार कर गई है, जो कुल स्थापित बिजली क्षमता का लगभग 45% है। यह उपलब्धि 2030 तक 500 गीगावाट गैर-जीवाश्म ऊर्जा तक पहुंचने के भारत के COP26 संकल्प की दिशा में एक महत्वपूर्ण कदम है। यह वृद्धि मुख्य रूप से 'पीएम-कुसुम' योजना और 'उच्च दक्षता वाले सौर पीवी मॉड्यूल के लिए उत्पादन लिंक्ड प्रोत्साहन (PLI) योजना' द्वारा संचालित है। अकेले 2025 में, भारत ने रिकॉर्ड 25 गीगावाट सौर और पवन क्षमता जोड़ी। आंकड़ों से संकेत मिलता है कि राजस्थान और गुजरात सौर प्रतिष्ठानों में अग्रणी हैं, जबकि तमिलनाडु पवन ऊर्जा में अग्रणी बना हुआ है। इस 200 गीगावाट का एक महत्वपूर्ण घटक बड़ी जलविद्युत परियोजनाओं को शामिल करना है, जिन्हें 2019 में नवीकरणीय ऊर्जा के रूप में पुनर्वर्गीकृत किया गया था।",
            impact: [
                "Reduced dependence on coal imports, leading to better Current Account Deficit (CAD)",
                "Strengthens India's bargaining power in international climate negotiations (COP31)",
                "Focus on green hydrogen production using surplus renewable energy"
            ],
            impactHi: [
                "कोयला आयात पर निर्भरता कम करता है, जिससे चालू खाता घाटा (CAD) बेहतर होता है",
                "अंतर्राष्ट्रीय जलवायु वार्ता (COP31) में भारत की सौदेबाजी की शक्ति को मजबूत करता है",
                "अधिशेष नवीकरणीय ऊर्जा का उपयोग करके हरित हाइड्रोजन उत्पादन पर ध्यान केंद्रित करता है"
            ],
            staticGk: [
                { fact: "International Solar Alliance", description: "Headquartered in Gurugram, India", factHi: "अंतर्राष्ट्रीय सौर गठबंधन", descriptionHi: "गुरुग्राम, भारत में मुख्यालय" },
                { fact: "India's Global Rank", description: "4th globally in installed renewable energy capacity", factHi: "भारत की वैश्विक रैंकिंग", descriptionHi: "स्थापित नवीकरणीय ऊर्जा क्षमता में वैश्विक स्तर पर चौथा" },
                { fact: "COP26 Pledge", description: "500 GW non-fossil energy by 2030", factHi: "COP26 संकल्प", descriptionHi: "2030 तक 500 GW गैर-जीवाश्म ऊर्जा" },
                { fact: "Large Hydro Reclassification", description: "Reclassified as renewable energy in 2019", factHi: "बड़ी जलविद्युत पुनर्वर्गीकरण", descriptionHi: "2019 में नवीकरणीय ऊर्जा के रूप में पुनर्वर्गीकृत" }
            ],
            examSignificance: {
                prelims: "PM-KUSUM scheme, PLI for solar, renewable energy targets",
                mains: "GS Paper III (Environment & Economy) - Energy security, climate change mitigation, renewable energy policies",
                prelimsHi: "पीएम-कुसुम योजना, सौर के लिए पीएलआई, नवीकरणीय ऊर्जा लक्ष्य",
                mainsHi: "जीएस पेपर III (पर्यावरण और अर्थव्यवस्था) - ऊर्जा सुरक्षा, जलवायु परिवर्तन शमन, नवीकरणीय ऊर्जा नीतियां"
            }
        }
    ]

    const awardsAndPersons = [
        { title: "Padma Awards 2026", titleHi: "पद्म पुरस्कार 2026", winner: "106 Awards Announced", winnerHi: "106 पुरस्कार घोषित", detail: "Padma Vibhushan awarded to veteran scientist for Gaganyaan contributions and social worker from Northeast India. Padma Bhushan to CEO of major Indian semiconductor firm and classical musician.", detailHi: "पद्म विभूषण गगनयान मिशन में योगदान के लिए वरिष्ठ वैज्ञानिक और पूर्वोत्तर भारत से सामाजिक कार्यकर्ता को प्रदान किया गया। पद्म भूषण एक प्रमुख भारतीय सेमीकंडक्टर फर्म के सीईओ और एक शास्त्रीय संगीतकार को प्रदान किया गया।" },
        { title: "Khelo India Youth Games 2026", titleHi: "खेलो इंडिया यूथ गेम्स 2026", winner: "Maharashtra topped medal tally", winnerHi: "महाराष्ट्र ने पदक तालिका में शीर्ष स्थान प्राप्त किया", detail: "8th edition hosted by Bihar/Jharkhand. Maharashtra topped for third consecutive year, followed by Haryana. New record in 100m sprint by 17-year-old athlete from Odisha.", detailHi: "8वां संस्करण बिहार/झारखंड द्वारा आयोजित। महाराष्ट्र लगातार तीसरे वर्ष शीर्ष पर रहा, उसके बाद हरियाणा। ओडिशा के 17 वर्षीय एथलीट द्वारा 100 मीटर स्प्रिंट में नया रिकॉर्ड।" }
    ]

    const importantDays = [
        { date: "Jan 1", day: "Global Family Day", dayHi: "वैश्विक परिवार दिवस", theme: "Families: Embracing Diversity", themeHi: "परिवार: विविधता को अपनाना" },
        { date: "Jan 4", day: "World Braille Day", dayHi: "विश्व ब्रेल दिवस", theme: "Inclusion through Literacy", themeHi: "साक्षरता के माध्यम से समावेशन" },
        { date: "Jan 9", day: "Pravasi Bharatiya Divas", dayHi: "प्रवासी भारतीय दिवस", theme: "Diaspora: Partners in Viksit Bharat", themeHi: "प्रवासी: विकसित भारत में भागीदार" },
        { date: "Jan 10", day: "World Hindi Day", dayHi: "विश्व हिंदी दिवस", theme: "Hindi: Bridging Traditional Knowledge & AI", themeHi: "हिंदी: पारंपरिक ज्ञान और AI को जोड़ना" },
        { date: "Jan 12", day: "National Youth Day", dayHi: "राष्ट्रीय युवा दिवस", theme: "Youth for a Sustainable Future", themeHi: "सतत भविष्य के लिए युवा" },
        { date: "Jan 15", day: "Indian Army Day", dayHi: "भारतीय सेना दिवस", theme: "Modernizing for the Future", themeHi: "भविष्य के लिए आधुनिकीकरण" },
        { date: "Jan 23", day: "Parakram Diwas", dayHi: "पराक्रम दिवस", theme: "Netaji: The Beacon of Courage", themeHi: "नेताजी: साहस का प्रकाश स्तंभ" },
        { date: "Jan 24", day: "National Girl Child Day", dayHi: "राष्ट्रीय बालिका दिवस", theme: "Empowering Girls for a Brighter Tomorrow", themeHi: "उज्जवल कल के लिए बालिकाओं को सशक्त बनाना" },
        { date: "Jan 26", day: "Republic Day", dayHi: "गणतंत्र दिवस", theme: "Viksit Bharat & Nari Shakti", themeHi: "विकसित भारत और नारी शक्ति" },
        { date: "Jan 30", day: "Martyrs' Day (Shaheed Diwas)", dayHi: "शहीद दिवस", theme: "Remembering the Sacrifice", themeHi: "बलिदान को याद करना" }
    ]

    const filteredNews = activeCategory === "all"
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory)

    const selectedNewsItem = newsItems.find(item => item.id === selectedNews)

    const faqs = [
        { q: "What is the vertical devolution recommended by the 16th Finance Commission?", qHi: "16वें वित्त आयोग द्वारा अनुशंसित ऊर्ध्वाधर विकेंद्रीकरण क्या है?", a: "The 16th Finance Commission has maintained vertical devolution at approximately 41%, similar to the 15th FC.", aHi: "16वें वित्त आयोग ने ऊर्ध्वाधर विकेंद्रीकरण को लगभग 41% पर बनाए रखा है, जो 15वें वित्त आयोग के समान है।" },
        { q: "Who was the Chief Guest at India's 77th Republic Day?", qHi: "भारत के 77वें गणतंत्र दिवस पर मुख्य अतिथि कौन थे?", a: "Brazilian President Luiz Inácio Lula da Silva was the Chief Guest at the 77th Republic Day celebrations.", aHi: "ब्राजील के राष्ट्रपति लुइज इनासियो लूला दा सिल्वा 77वें गणतंत्र दिवस समारोह में मुख्य अतिथि थे।" },
        { q: "What is the current daily transaction volume of e-Rupee?", qHi: "ई-रुपये की वर्तमान दैनिक लेनदेन मात्रा क्या है?", a: "The e-Rupee has crossed 5 million daily transactions as of January 2026.", aHi: "जनवरी 2026 तक ई-रुपये ने 5 मिलियन दैनिक लेनदेन पार कर लिए हैं।" },
        { q: "What is Gaganyaan-H1 mission?", qHi: "गगनयान-H1 मिशन क्या है?", a: "Gaganyaan-H1 is the final uncrewed test flight of ISRO's human spaceflight program, launched on January 15, 2026, featuring Vyommitra humanoid robot.", aHi: "गगनयान-H1 ISRO के मानव अंतरिक्ष उड़ान कार्यक्रम की अंतिम मानवरहित परीक्षण उड़ान है, जिसे 15 जनवरी, 2026 को लॉन्च किया गया था, जिसमें व्योममित्र ह्यूमनॉइड रोबोट शामिल था।" },
        { q: "What is India's current non-fossil fuel capacity?", qHi: "भारत की वर्तमान गैर-जीवाश्म ईंधन क्षमता क्या है?", a: "India's installed non-fossil fuel energy capacity has crossed 200 GW, accounting for nearly 45% of total installed power capacity.", aHi: "भारत की स्थापित गैर-जीवाश्म ईंधन ऊर्जा क्षमता 200 GW को पार कर गई है, जो कुल स्थापित बिजली क्षमता का लगभग 45% है।" },
        { q: "What is the Strategic Biofuels Alliance 2.0?", qHi: "स्ट्रैटेजिक बायोफ्यूल्स अलायंस 2.0 क्या है?", a: "An agreement between India and Brazil focusing on ethanol blending technology, aligning with India's target of 20% ethanol blending by 2025-26.", aHi: "भारत और ब्राजील के बीच एक समझौता जो इथेनॉल ब्लेंडिंग तकनीक पर केंद्रित है, जो 2025-26 तक 20% इथेनॉल ब्लेंडिंग के भारत के लक्ष्य के अनुरूप है।" }
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
                        {language === "en" ? "January" : "जनवरी"} <span className="text-primary">2026</span>
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
                            <span>{language === "en" ? "Padma Awards 2026" : "पद्म पुरस्कार 2026"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "10 Important Days" : "10 महत्वपूर्ण दिवस"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <Rocket className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "Gaganyaan-H1" : "गगनयान-H1"}</span>
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
                            <div className="text-2xl font-bold text-primary">5M+</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Daily e-Rupee Txns" : "दैनिक ई-रुपया लेनदेन"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">200 GW</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Non-Fossil Capacity" : "गैर-जीवाश्म क्षमता"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">106</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Padma Awards" : "पद्म पुरस्कार"}</div>
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
                                    <h3 className="font-bold">{language === "en" ? "Important Days: January 2026" : "महत्वपूर्ण दिवस: जनवरी 2026"}</h3>
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
                                    {language === "en" ? "January 2026: Key Numbers" : "जनवरी 2026: प्रमुख आंकड़े"}
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between"><span>{language === "en" ? "Vertical Devolution:" : "ऊर्ध्वाधर विकेंद्रीकरण:"}</span><span className="font-bold">41%</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "e-Rupee Daily Txns:" : "ई-रुपया दैनिक लेनदेन:"}</span><span className="font-bold">5 Million+</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Non-Fossil Capacity:" : "गैर-जीवाश्म क्षमता:"}</span><span className="font-bold">200 GW</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Non-Fossil Share:" : "गैर-जीवाश्म हिस्सा:"}</span><span className="font-bold">45% of total</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Solar/Wind Added (2025):" : "सौर/पवन जोड़ (2025):"}</span><span className="font-bold">25 GW</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "BESS VGF:" : "BESS VGF:"}</span><span className="font-bold">₹9,400 Crore</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Padma Awards 2026:" : "पद्म पुरस्कार 2026:"}</span><span className="font-bold">106 Awards</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Gaganyaan-H1 Date:" : "गगनयान-H1 तारीख:"}</span><span className="font-bold">Jan 15, 2026</span></div>
                                </div>
                            </div>

                            {/* Download Card */}
                            {/* <div className="rounded-xl border bg-card p-5 text-center">
                                <Download className="w-8 h-8 text-primary mx-auto mb-3" />
                                <h3 className="font-bold mb-2">{language === "en" ? "Download PDF" : "पीडीएफ डाउनलोड करें"}</h3>
                                <p className="text-xs text-muted-foreground mb-3">
                                    {language === "en" ? "Get the complete January 2026 Current Affairs PDF for offline study" : "ऑफलाइन अध्ययन के लिए संपूर्ण जनवरी 2026 करेंट अफेयर्स पीडीएफ प्राप्त करें"}
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
                            {language === "en" ? "Based on January 2026 current affairs" : "जनवरी 2026 करेंट अफेयर्स पर आधारित"}
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
                        {language === "en" ? "Practice MCQs based on January 2026 current affairs" : "जनवरी 2026 करेंट अफेयर्स पर आधारित MCQ का अभ्यास करें"}
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
                        {language === "en" ? "January 2026 Current Affairs for Competitive Exams" : "प्रतियोगी परीक्षाओं के लिए जनवरी 2026 करेंट अफेयर्स"}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        {language === "en"
                            ? "This comprehensive current affairs digest covers all important events of January 2026 including 16th Finance Commission interim report (41% vertical devolution), 77th Republic Day with Brazilian President as Chief Guest (Strategic Biofuels Alliance 2.0), RBI's e-Rupee crossing 5 million daily transactions (Programmable CBDC), ISRO's Gaganyaan-H1 mission (Vyommitra, final uncrewed test flight), India achieving 200 GW non-fossil fuel capacity (45% of total), Padma Awards 2026 (106 awards), and Khelo India Youth Games 2026. Perfect for UPSC, SSC, Banking, Railways, HSSC, UKSSSC, and all state-level competitive exams."
                            : "यह व्यापक करेंट अफेयर्स डाइजेस्ट जनवरी 2026 की सभी महत्वपूर्ण घटनाओं को कवर करता है, जिसमें 16वें वित्त आयोग की अंतरिम रिपोर्ट (41% ऊर्ध्वाधर विकेंद्रीकरण), ब्राजील के राष्ट्रपति को मुख्य अतिथि के रूप में 77वां गणतंत्र दिवस (स्ट्रैटेजिक बायोफ्यूल्स अलायंस 2.0), RBI का ई-रुपया 5 मिलियन दैनिक लेनदेन पार (प्रोग्रामेबल CBDC), ISRO का गगनयान-H1 मिशन (व्योममित्र, अंतिम मानवरहित परीक्षण उड़ान), भारत द्वारा 200 GW गैर-जीवाश्म ईंधन क्षमता (कुल का 45%) हासिल करना, पद्म पुरस्कार 2026 (106 पुरस्कार), और खेलो इंडिया यूथ गेम्स 2026 शामिल हैं। UPSC, SSC, बैंकिंग, रेलवे, HSSC, UKSSSC और सभी राज्य-स्तरीय प्रतियोगी परीक्षाओं के लिए उपयुक्त।"}
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