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
    BookMarked,
    Film,
    Medal,
    Mountain
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

export default function NovemberCurrentAffairsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [selectedNews, setSelectedNews] = useState<string | null>(null)
    const [showAllFaqs, setShowAllFaqs] = useState(false)
    const [language, setLanguage] = useState<"en" | "hi">("en")

    const newsItems: NewsItem[] = [
        {
            id: "finance-commission-nov",
            title: "16th Finance Commission Recommendations Implementation",
            titleHi: "16वें वित्त आयोग की सिफारिशों का कार्यान्वयन",
            category: "national",
            summary: "Ministry of Finance began final internal processing of 16th Finance Commission's interim report, which will govern tax devolution between Centre and States for FY 2026-31, with divisible pool estimated at ₹22.4 lakh crore.",
            summaryHi: "वित्त मंत्रालय ने 16वें वित्त आयोग की अंतरिम रिपोर्ट का अंतिम आंतरिक प्रसंस्करण शुरू किया, जो वित्त वर्ष 2026-31 के लिए केंद्र और राज्यों के बीच कर हस्तांतरण को नियंत्रित करेगी, जिसमें विभाज्य पूल ₹22.4 लाख करोड़ अनुमानित है।",
            detailedAnalysis: "The 16th Finance Commission (16th FC), constituted under Article 280 of the Constitution, faced a pivotal moment in November 2025 as it balanced the demands of Southern states regarding 'performance-based incentives' versus the 'needs-based' requirements of the EAG (Empowered Action Group) states. The Commission is tasked with defining the Vertical Devolution (share of states in the divisible pool of central taxes) and Horizontal Devolution (distribution among states). Statistical data suggests that the divisible pool has grown by 12.5% CAGR over the last three years, reaching an estimated ₹22.4 lakh crore. A key focus in November was the 'Disaster Management Initiatives' funded through the National Disaster Response Fund (NDRF) and State Disaster Response Fund (SDRF). The Commission is also evaluating the 'Fiscal Consolidation Roadmap' for states, aiming to bring the aggregate debt-to-GDP ratio down to 55% by 2030. The Ministry of Finance, led by the Finance Secretary, is coordinating with the NITI Aayog to ensure that the 'Grant-in-aid' components align with the Sustainable Development Goals (SDGs) 2030.",
            detailedAnalysisHi: "नवंबर 2025 में, वित्त मंत्रालय ने डॉ. अरविंद पनगढ़िया की अध्यक्षता वाले 16वें वित्त आयोग की अंतरिम रिपोर्ट के अंतिम आंतरिक प्रसंस्करण की शुरुआत की। यह अत्यंत महत्वपूर्ण है क्योंकि ये सिफारिशें 1 अप्रैल, 2026 से शुरू होने वाली पांच साल की अवधि के लिए केंद्र और राज्यों के बीच कर हस्तांतरण को नियंत्रित करेंगी। संविधान के अनुच्छेद 280 के तहत गठित 16वां वित्त आयोग, 'प्रदर्शन-आधारित प्रोत्साहन' के संबंध में दक्षिणी राज्यों की मांगों और ईएजी (अधिकार प्राप्त कार्य समूह) राज्यों की 'आवश्यकता-आधारित' जरूरतों के बीच संतुलन बनाने के निर्णायक मोड़ पर है। आयोग को ऊर्ध्वाधर हस्तांतरण (केंद्रीय करों के विभाज्य पूल में राज्यों की हिस्सेदारी) और क्षैतिज हस्तांतरण (राज्यों के बीच वितरण) को परिभाषित करने का कार्य सौंपा गया है। सांख्यिकीय आंकड़े बताते हैं कि विभाज्य पूल पिछले तीन वर्षों में 12.5% सीएजीआर से बढ़कर अनुमानित ₹22.4 लाख करोड़ तक पहुंच गया है। नवंबर में एक मुख्य फोकस राष्ट्रीय आपदा प्रतिक्रिया कोष (NDRF) और राज्य आपदा प्रतिक्रिया कोष (SDRF) के माध्यम से वित्त पोषित 'आपदा प्रबंधन पहल' पर था। आयोग राज्यों के लिए 'राजकोषीय सुदृढ़ीकरण रोडमैप' का भी मूल्यांकन कर रहा है, जिसका लक्ष्य 2030 तक कुल ऋण-जीडीपी अनुपात को 55% तक नीचे लाना है।",
            impact: [
                "Increased devolution to states could enhance spending on primary healthcare and education",
                "Shift towards 'performance-based grants' may force states to improve demographic management and GST collection efficiency",
                "Final report will set fiscal tone for India's journey toward a $7 trillion economy"
            ],
            impactHi: [
                "राज्यों को बढ़ा हुआ हस्तांतरण प्राथमिक स्वास्थ्य देखभाल और शिक्षा पर खर्च बढ़ा सकता है",
                "'प्रदर्शन-आधारित अनुदान' की ओर बदलाव राज्यों को अपने जनसांख्यिकीय प्रबंधन और जीएसटी संग्रह दक्षता में सुधार करने के लिए मजबूर कर सकता है",
                "अंतिम रिपोर्ट $7 ट्रिलियन अर्थव्यवस्था की ओर भारत की यात्रा के लिए राजकोषीय स्वर निर्धारित करेगी"
            ],
            staticGk: [
                { fact: "First Finance Commission", description: "Established in 1951 under K.C. Neogy", factHi: "प्रथम वित्त आयोग", descriptionHi: "1951 में के.सी. नियोगी के तहत स्थापित" },
                { fact: "Article 280", description: "Requires Finance Commission every 5 years", factHi: "अनुच्छेद 280", descriptionHi: "प्रत्येक 5 वर्ष में वित्त आयोग की आवश्यकता" },
                { fact: "15th FC Recommendation", description: "41% vertical devolution", factHi: "15वें वित्त आयोग की सिफारिश", descriptionHi: "41% ऊर्ध्वाधर विकेंद्रीकरण" },
                { fact: "FC Headquarters", description: "New Delhi; Chairman: Dr. Arvind Panagariya", factHi: "वित्त आयोग मुख्यालय", descriptionHi: "नई दिल्ली; अध्यक्ष: डॉ. अरविंद पनगढ़िया" }
            ],
            examSignificance: {
                prelims: "Article 280, members of 16th FC, concept of 'Divisible Pool'",
                mains: "GS Paper III - Fiscal federalism, challenges in tax distribution, role of Finance Commission in balancing regional disparities",
                prelimsHi: "अनुच्छेद 280, 16वें वित्त आयोग के सदस्य, 'विभाज्य पूल' की अवधारणा",
                mainsHi: "जीएस पेपर III - राजकोषीय संघवाद, कर वितरण में चुनौतियाँ, क्षेत्रीय असमानताओं को संतुलित करने में वित्त आयोग की भूमिका"
            }
        },
        {
            id: "asean-summit",
            title: "22nd India-ASEAN Summit in Kuala Lumpur",
            titleHi: "22वां भारत-आसियान शिखर सम्मेलन कुआलालंपुर में",
            category: "international",
            summary: "PM Modi emphasized Digital Public Infrastructure partnership and review of ASEAN-India Trade in Goods Agreement. India proposed unified QR-code-based payment system (UPI-linkage) across all ten ASEAN nations.",
            summaryHi: "प्रधानमंत्री मोदी ने डिजिटल सार्वजनिक बुनियादी ढांचे साझेदारी और भारत-आसियान वस्तु व्यापार समझौते की समीक्षा पर जोर दिया। भारत ने सभी दस आसियान देशों में एकीकृत क्यूआर-कोड-आधारित भुगतान प्रणाली (यूपीआई-लिंकेज) का प्रस्ताव रखा।",
            detailedAnalysis: "The November 2025 summit marked a significant shift from traditional security cooperation to 'Economic Resilience and Digital Integration.' India proposed a unified QR-code-based payment system (UPI-linkage) across all ten ASEAN nations. Currently, Singapore and UAE have integrated, but expanding this to Vietnam and Indonesia is a strategic priority. On the geopolitical front, the 'South China Sea Code of Conduct' was discussed, with India reiterating its stance on UNCLOS 1982 and freedom of navigation. Trade data presented showed India-ASEAN trade crossing $140 billion in FY 2024-25, though the trade deficit remains a concern for New Delhi. The Ministry of External Affairs (MEA) highlighted that the 'India-Myanmar-Thailand Trilateral Highway' is 92% complete, with the final bridges in Myanmar expected to be functional by mid-2026.",
            detailedAnalysisHi: "2025 का शिखर सम्मेलन पारंपरिक सुरक्षा सहयोग से 'आर्थिक लचीलेपन और डिजिटल एकीकरण' की ओर एक महत्वपूर्ण बदलाव का प्रतीक है। भारत ने सभी दस आसियान देशों में एकीकृत क्यूआर-कोड-आधारित भुगतान प्रणाली (यूपीआई-लिंकेज) का प्रस्ताव रखा। वर्तमान में, सिंगापुर और यूएई एकीकृत हो चुके हैं, लेकिन वियतनाम और इंडोनेशिया तक इसका विस्तार करना एक रणनीतिक प्राथमिकता है। भू-राजनीतिक मोर्चे पर, 'दक्षिण चीन सागर आचार संहिता' पर चर्चा की गई, जिसमें भारत ने यूएनसीएलओएस 1982 और नेविगेशन की स्वतंत्रता पर अपने रुख को दोहराया। प्रस्तुत व्यापार आंकड़ों से पता चला कि वित्त वर्ष 2024-25 में भारत-आसियान व्यापार $140 बिलियन को पार कर गया। विदेश मंत्रालय (MEA) ने प्रकाश डाला कि 'भारत-म्यांमार-थाईलैंड त्रिपक्षीय राजमार्ग' 92% पूरा हो चुका है।",
            impact: [
                "UPI integration will facilitate seamless remittances and tourism, benefiting millions of Indian diaspora in SE Asia",
                "AITIGA review aims to provide better market access for Indian MSMEs in ASEAN region",
                "Strengthening ties with ASEAN is crucial for India's Indo-Pacific strategy to counter regional hegemony"
            ],
            impactHi: [
                "यूपीआई एकीकरण सहज प्रेषण और पर्यटन की सुविधा प्रदान करेगा, जिससे दक्षिण पूर्व एशिया में लाखों भारतीय प्रवासियों को लाभ होगा",
                "AITIGA समीक्षा का उद्देश्य आसियान क्षेत्र में भारतीय एमएसएमई के लिए बेहतर बाजार पहुंच प्रदान करना है",
                "आसियान के साथ संबंधों को मजबूत करना क्षेत्रीय आधिपत्य का मुकाबला करने के लिए भारत की इंडो-पैसिफिक रणनीति के लिए महत्वपूर्ण है"
            ],
            staticGk: [
                { fact: "ASEAN Establishment", description: "August 8, 1967, with Bangkok Declaration", factHi: "आसियान स्थापना", descriptionHi: "8 अगस्त, 1967, बैंकॉक घोषणा के साथ" },
                { fact: "India-ASEAN Partnership", description: "Sectoral dialogue partner in 1992, full dialogue partner in 1995", factHi: "भारत-आसियान साझेदारी", descriptionHi: "1992 में क्षेत्रीय वार्ता भागीदार, 1995 में पूर्ण वार्ता भागीदार" },
                { fact: "Act East Policy", description: "Upgraded from 'Look East Policy' in 2014", factHi: "एक्ट ईस्ट नीति", descriptionHi: "2014 में 'लुक ईस्ट नीति' से उन्नत" },
                { fact: "ASEAN Secretariat", description: "Located in Jakarta, Indonesia", factHi: "आसियान सचिवालय", descriptionHi: "जकार्ता, इंडोनेशिया में स्थित" }
            ],
            examSignificance: {
                prelims: "ASEAN member countries, AITIGA, location-based questions on Trilateral Highway",
                mains: "GS Paper II - India's Act East Policy, maritime security in Indo-Pacific, digital diplomacy",
                prelimsHi: "आसियान सदस्य देश, AITIGA, त्रिपक्षीय राजमार्ग पर स्थान-आधारित प्रश्न",
                mainsHi: "जीएस पेपर II - भारत की एक्ट ईस्ट नीति, इंडो-पैसिफिक में समुद्री सुरक्षा, डिजिटल कूटनीति"
            }
        },
        {
            id: "gdp-green-deposits",
            title: "Q2 GDP Growth at 6.7% & RBI's Green Deposits Framework",
            titleHi: "दूसरी तिमाही में जीडीपी वृद्धि 6.7% और आरबीआई का ग्रीन डिपॉजिट ढांचा",
            category: "economy",
            summary: "NSO released Q2 GDP estimates at 6.7% (down from 7.1% in Q1) due to erratic monsoon impacting agriculture. RBI issued mandatory disclosure framework for Green Deposits to prevent 'greenwashing'.",
            summaryHi: "एनएसओ ने दूसरी तिमाही के जीडीपी अनुमान 6.7% जारी किए (पहली तिमाही में 7.1% से कम), जो कृषि को प्रभावित करने वाले अनियमित मानसून के कारण था। आरबीआई ने 'ग्रीनवाशिंग' को रोकने के लिए ग्रीन डिपॉजिट के लिए अनिवार्य प्रकटीकरण ढांचा जारी किया।",
            detailedAnalysis: "The NSO data revealed that India's GDP grew at 6.7% in Q2, slightly lower than the 7.1% in Q1, primarily due to erratic monsoon impacts on the agricultural sector (GVA growth in Agri was 2.8%). However, the Manufacturing sector showed robust growth at 8.4%, driven by the PLI (Production Linked Incentive) schemes. In the banking sector, the RBI Governor introduced a mandatory disclosure framework for Green Deposits. Banks must now provide an independent third-party assessment of how funds raised via green deposits are allocated to renewable energy, green hydrogen, and sustainable water management projects. This aligns with the Business Responsibility and Sustainability Reporting (BRSR) framework mandated by SEBI. Furthermore, the Gross Non-Performing Assets (GNPA) ratio of Scheduled Commercial Banks hit a 12-year low of 2.2% in November 2025, indicating a healthy credit cycle.",
            detailedAnalysisHi: "30 नवंबर, 2025 को, राष्ट्रीय सांख्यिकी कार्यालय (NSO) ने वित्त वर्ष 2025-26 की दूसरी तिमाही (जुलाई-सितंबर) के लिए जीडीपी अनुमान जारी किए। साथ ही, आरबीआई ने बैंकिंग क्षेत्र में 'ग्रीनवाशिंग' को रोकने के लिए 'ग्रीन डिपॉजिट' के लिए अद्यतन दिशानिर्देश जारी किए। एनएसओ डेटा से पता चला कि भारत की जीडीपी दूसरी तिमाही में 6.7% बढ़ी, जो पहली तिमाही में 7.1% से थोड़ी कम है, मुख्य रूप से कृषि क्षेत्र पर अनियमित मानसून के प्रभाव के कारण (कृषि में जीवीए वृद्धि 2.8% थी)। हालांकि, विनिर्माण क्षेत्र ने पीएलआई योजनाओं द्वारा संचालित 8.4% की मजबूत वृद्धि दिखाई। बैंकिंग क्षेत्र में, आरबीआई गवर्नर ने ग्रीन डिपॉजिट के लिए एक अनिवार्य प्रकटीकरण ढांचा पेश किया। बैंकों को अब यह सुनिश्चित करना होगा कि ग्रीन डिपॉजिट के माध्यम से जुटाए गए धन का उपयोग नवीकरणीय ऊर्जा, ग्रीन हाइड्रोजन और सतत जल प्रबंधन परियोजनाओं में किया जाए। अनुसूचित वाणिज्यिक बैंकों का सकल गैर-निष्पादित परिसंपत्ति (GNPA) अनुपात नवंबर 2025 में 2.2% के 12 वर्षों के निचले स्तर पर पहुंच गया।",
            impact: [
                "Lower agricultural growth due to climate-induced supply shocks highlights need for climate-resilient crops",
                "Green deposit framework enhances transparency and prevents 'greenwashing' in banking sector",
                "Low GNPA ratio indicates healthy credit cycle and improved asset quality"
            ],
            impactHi: [
                "जलवायु-प्रेरित आपूर्ति झटकों के कारण कृषि वृद्धि में कमी जलवायु-लचीली फसलों की आवश्यकता को उजागर करती है",
                "ग्रीन डिपॉजिट ढांचा पारदर्शिता बढ़ाता है और बैंकिंग क्षेत्र में 'ग्रीनवाशिंग' को रोकता है",
                "कम GNPA अनुपात स्वस्थ क्रेडिट चक्र और बेहतर परिसंपत्ति गुणवत्ता को इंगित करता है"
            ],
            staticGk: [
                { fact: "GDP Definition", description: "Gross Domestic Product - total value of goods and services produced", factHi: "जीडीपी परिभाषा", descriptionHi: "सकल घरेलू उत्पाद - उत्पादित वस्तुओं और सेवाओं का कुल मूल्य" },
                { fact: "PLI Scheme", description: "Production Linked Incentive to boost manufacturing", factHi: "पीएलआई योजना", descriptionHi: "विनिर्माण को बढ़ावा देने के लिए उत्पादन लिंक्ड प्रोत्साहन" },
                { fact: "BRSR Framework", description: "Business Responsibility and Sustainability Reporting by SEBI", factHi: "BRSR ढांचा", descriptionHi: "SEBI द्वारा व्यावसायिक जिम्मेदारी और स्थिरता रिपोर्टिंग" },
                { fact: "GNPA Ratio", description: "Gross Non-Performing Assets as percentage of total loans", factHi: "GNPA अनुपात", descriptionHi: "कुल ऋणों के प्रतिशत के रूप में सकल गैर-निष्पादित परिसंपत्तियाँ" }
            ],
            examSignificance: {
                prelims: "GDP growth figures, PLI schemes, GNPA ratio, Green Deposits framework",
                mains: "GS Paper III - Economic growth drivers, manufacturing sector performance, banking sector reforms",
                prelimsHi: "जीडीपी वृद्धि के आंकड़े, पीएलआई योजनाएं, जीएनपीए अनुपात, ग्रीन डिपॉजिट ढांचा",
                mainsHi: "जीएस पेपर III - आर्थिक विकास के चालक, विनिर्माण क्षेत्र का प्रदर्शन, बैंकिंग क्षेत्र सुधार"
            }
        },
        {
            id: "shukrayaan-agni",
            title: "ISRO's Shukrayaan-1 Milestone & Agni-VI Development",
            titleHi: "ISRO का शुक्रयान-1 मील का पत्थर और अग्नि-VI का विकास",
            category: "science",
            summary: "ISRO successfully completed Thermal Vacuum Test of Shukrayaan-1 (Venus Orbiter Mission) payloads. DRDO conducted canister-based trials for Agni-VI, India's first ICBM with MIRV technology, range exceeding 7,000 km.",
            summaryHi: "ISRO ने शुक्रयान-1 (शुक्र ऑर्बिटर मिशन) पेलोड का थर्मल वैक्यूम परीक्षण सफलतापूर्वक पूरा किया। DRDO ने अग्नि-VI के लिए कैनिस्टर-आधारित परीक्षण किए, जो MIRV तकनीक वाली भारत की पहली ICBM है, जिसकी सीमा 7,000 किमी से अधिक है।",
            detailedAnalysis: "Shukrayaan-1 is scheduled for a late 2025 or early 2026 launch window when Venus is closest to Earth. The mission aims to study the Venusian atmosphere, which is 96% Carbon Dioxide, and investigate the presence of Phosphine (a potential biomarker). The spacecraft will carry a Synthetic Aperture Radar (SAR) to map the surface of Venus through its thick clouds. This mission is a collaboration involving several international partners, including the French Space Agency (CNES). On the defense front, the DRDO conducted a series of canister-based trials for the Agni-VI. Unlike its predecessors, Agni-VI is expected to have a range exceeding 7,000 km and features Multiple Independently Targetable Re-entry Vehicle (MIRV) technology, allowing a single missile to strike multiple targets simultaneously. This significantly enhances India's nuclear deterrence capability under the 'No First Use' policy.",
            detailedAnalysisHi: "शुक्रयान-1 को 2025 के अंत या 2026 की शुरुआत में लॉन्च करने का लक्ष्य है जब शुक्र पृथ्वी के सबसे निकट होता है। मिशन का उद्देश्य शुक्र के वायुमंडल का अध्ययन करना है, जो 96% कार्बन डाइऑक्साइड है, और फॉस्फीन (एक संभावित बायोमार्कर) की उपस्थिति की जांच करना है। अंतरिक्ष यान शुक्र की सतह का मानचित्रण करने के लिए सिंथेटिक एपर्चर रडार (SAR) ले जाएगा। यह मिशन फ्रांसीसी अंतरिक्ष एजेंसी (CNES) सहित कई अंतर्राष्ट्रीय भागीदारों का सहयोग है। रक्षा मोर्चे पर, DRDO ने अग्नि-VI के लिए कैनिस्टर-आधारित परीक्षणों की एक श्रृंखला आयोजित की। अपने पूर्ववर्तियों के विपरीत, अग्नि-VI की सीमा 7,000 किमी से अधिक होने की उम्मीद है और इसमें MIRV तकनीक है, जो एक ही मिसाइल को एक साथ कई लक्ष्यों पर हमला करने की अनुमति देती है। यह 'नो फर्स्ट यूज' नीति के तहत भारत की परमाणु प्रतिरोधक क्षमता को महत्वपूर्ण रूप से बढ़ाता है।",
            impact: [
                "Space missions boost India's 'space economy' and inspire STEM education",
                "Agni-VI strengthens India's strategic autonomy and credible minimum deterrence",
                "India emerging as a leader in cost-effective deep-space exploration and advanced missile technology"
            ],
            impactHi: [
                "अंतरिक्ष मिशन भारत की 'अंतरिक्ष अर्थव्यवस्था' को बढ़ावा देते हैं और STEM शिक्षा को प्रेरित करते हैं",
                "अग्नि-VI भारत की रणनीतिक स्वायत्तता और विश्वसनीय न्यूनतम प्रतिरोध को मजबूत करता है",
                "भारत लागत प्रभावी गहरे अंतरिक्ष अन्वेषण और उन्नत मिसाइल प्रौद्योगिकी में एक नेता के रूप में उभर रहा है"
            ],
            staticGk: [
                { fact: "ISRO Founded", description: "August 15, 1969", factHi: "ISRO स्थापना", descriptionHi: "15 अगस्त, 1969" },
                { fact: "Venus as Earth's Twin", description: "Similar size and mass to Earth", factHi: "पृथ्वी के जुड़वां के रूप में शुक्र", descriptionHi: "पृथ्वी के समान आकार और द्रव्यमान" },
                { fact: "IGMDP", description: "Integrated Guided Missile Development Programme started in 1983", factHi: "IGMDP", descriptionHi: "एकीकृत मार्गदर्शित मिसाइल विकास कार्यक्रम 1983 में शुरू हुआ" },
                { fact: "MIRV Technology", description: "First successfully tested by India in Agni-V 'Mission Divyastra' (March 2024)", factHi: "MIRV तकनीक", descriptionHi: "अग्नि-V 'मिशन दिव्यास्त्र' (मार्च 2024) में भारत द्वारा पहली बार सफलतापूर्वक परीक्षण किया गया" }
            ],
            examSignificance: {
                prelims: "Payloads of Shukrayaan, MIRV technology, range of Agni missiles",
                mains: "GS Paper III - India's space exploration, missile technology, strategic autonomy",
                prelimsHi: "शुक्रयान के पेलोड, MIRV तकनीक, अग्नि मिसाइलों की सीमा",
                mainsHi: "जीएस पेपर III - भारत का अंतरिक्ष अन्वेषण, मिसाइल प्रौद्योगिकी, रणनीतिक स्वायत्तता"
            }
        },
        {
            id: "air-quality-cop30",
            title: "Air Quality Crisis in North India & COP30 Preparations",
            titleHi: "उत्तर भारत में वायु गुणवत्ता संकट और COP30 की तैयारियाँ",
            category: "environment",
            summary: "Delhi-NCR AQI crossed 'Severe+' category (500+) in November. CAQM invoked GRAP Stage IV. Stubble burning incidents decreased by 15% but meteorological factors trapped pollutants. India presented National Adaptation Plan ahead of COP30.",
            summaryHi: "दिल्ली-एनसीआर में AQI नवंबर में 'गंभीर+' श्रेणी (500+) को पार कर गया। CAQM ने GRAP चरण IV लागू किया। पराली जलाने की घटनाओं में 15% की कमी आई लेकिन मौसम संबंधी कारकों ने प्रदूषकों को रोक लिया। भारत ने COP30 से पहले राष्ट्रीय अनुकूलन योजना प्रस्तुत की।",
            detailedAnalysis: "The annual air pollution crisis in North India reached its peak in the second week of November. The Commission for Air Quality Management (CAQM) invoked Stage IV of the Graded Response Action Plan (GRAP). Analysis showed that while stubble burning incidents in Punjab and Haryana decreased by 15% compared to 2024 due to the 'Pusa Bio-decomposer' and crop diversification, meteorological factors like low wind speed and 'temperature inversion' trapped pollutants. Globally, India prepared for COP30 (Belem, Brazil) by focusing on the 'Global Green Credit Initiative.' India is advocating for a definition of 'Climate Finance' that includes easy technology transfer to the Global South. The Ministry of Environment, Forest and Climate Change (MoEFCC) reported that India's installed non-fossil fuel capacity reached 48% of the total mix in November 2025, nearing the 50% goal set for 2030.",
            detailedAnalysisHi: "उत्तर भारत में वार्षिक वायु प्रदूषण संकट नवंबर के दूसरे सप्ताह में अपने चरम पर पहुंच गया। वायु गुणवत्ता प्रबंधन आयोग (CAQM) ने ग्रेडेड रिस्पांस एक्शन प्लान (GRAP) के चरण IV को लागू किया। विश्लेषण से पता चला कि 'पूसा बायो-डीकंपोजर' और फसल विविधीकरण के कारण पंजाब और हरियाणा में पराली जलाने की घटनाओं में 2024 की तुलना में 15% की कमी आई, लेकिन कम हवा की गति और 'तापमान व्युत्क्रमण' जैसे मौसम संबंधी कारकों ने प्रदूषकों को रोक लिया। वैश्विक स्तर पर, भारत ने 'ग्लोबल ग्रीन क्रेडिट इनिशिएटिव' पर ध्यान केंद्रित करके COP30 (बेलेम, ब्राजील) के लिए तैयारी की। भारत 'जलवायु वित्त' की ऐसी परिभाषा की वकालत कर रहा है जिसमें ग्लोबल साउथ को आसान तकनीक हस्तांतरण शामिल हो। पर्यावरण, वन और जलवायु परिवर्तन मंत्रालय (MoEFCC) ने रिपोर्ट दी कि भारत की स्थापित गैर-जीवाश्म ईंधन क्षमता नवंबर 2025 में कुल मिश्रण का 48% तक पहुंच गई, जो 2030 के लिए निर्धारित 50% लक्ष्य के करीब है।",
            impact: [
                "Public health crisis leads to increased respiratory diseases and loss of productivity in NCR region",
                "Stricter enforcement of Environment Protection Act (1986) and transition to Electric Vehicles (EVs)",
                "Shift toward 'Circular Economy' and 'Green Hydrogen' essential to mitigate long-term pollution"
            ],
            impactHi: [
                "सार्वजनिक स्वास्थ्य संकट से श्वसन रोगों में वृद्धि और एनसीआर क्षेत्र में उत्पादकता की हानि होती है",
                "पर्यावरण संरक्षण अधिनियम (1986) का सख्त प्रवर्तन और इलेक्ट्रिक वाहनों (ईवी) में संक्रमण",
                "दीर्घकालिक प्रदूषण को कम करने के लिए 'चक्रीय अर्थव्यवस्था' और 'ग्रीन हाइड्रोजन' की ओर बदलाव आवश्यक"
            ],
            staticGk: [
                { fact: "AQI Categories", description: "Good (0-50), Satisfactory (51-100), Moderate (101-200), Poor (201-300), Very Poor (301-400), Severe (401-500)", factHi: "AQI श्रेणियाँ", descriptionHi: "अच्छा (0-50), संतोषजनक (51-100), मध्यम (101-200), खराब (201-300), बहुत खराब (301-400), गंभीर (401-500)" },
                { fact: "CAQM", description: "Statutory body under CAQM Act, 2021", factHi: "CAQM", descriptionHi: "CAQM अधिनियम, 2021 के तहत वैधानिक निकाय" },
                { fact: "COP", description: "Conference of Parties - supreme decision-making body of UNFCCC", factHi: "COP", descriptionHi: "पार्टियों का सम्मेलन - UNFCCC का सर्वोच्च निर्णय लेने वाला निकाय" },
                { fact: "Paris Agreement", description: "2015 agreement to limit global warming to well below 2°C", factHi: "पेरिस समझौता", descriptionHi: "2015 समझौता वैश्विक तापमान वृद्धि को 2°C से काफी नीचे सीमित करने के लिए" }
            ],
            examSignificance: {
                prelims: "GRAP stages, AQI pollutants, CAQM powers",
                mains: "GS Paper III - Air pollution challenges, climate change mitigation, India's COP30 preparations",
                prelimsHi: "GRAP चरण, AQI प्रदूषक, CAQM की शक्तियाँ",
                mainsHi: "जीएस पेपर III - वायु प्रदूषण चुनौतियाँ, जलवायु परिवर्तन शमन, भारत की COP30 तैयारियाँ"
            }
        }
    ]

    const awardsAndPersons = [
        { title: "56th International Film Festival of India (IFFI) 2025", titleHi: "56वां भारतीय अंतर्राष्ट्रीय फिल्म महोत्सव (IFFI) 2025", winner: "Goa, November 20-28, 2025", winnerHi: "गोवा, 20-28 नवंबर, 2025", detail: "Theme: 'Cinema in the Age of AI'. Golden Peacock Award for Best Film won by an international feature. Dadasaheb Phalke Award conferred on veteran actor. Satyajit Ray Lifetime Achievement Award to world-renowned director. Film Facilitation Office announced new incentives for foreign filmmakers to 'Shoot in India'.", detailHi: "थीम: 'एआई के युग में सिनेमा'। सर्वश्रेष्ठ फिल्म के लिए गोल्डन पीकॉक अवार्ड एक अंतरराष्ट्रीय फिल्म ने जीता। दादा साहब फाल्के पुरस्कार वरिष्ठ अभिनेता को प्रदान किया गया। सत्यजीत रे लाइफटाइम अचीवमेंट अवार्ड विश्व प्रसिद्ध निर्देशक को। फिल्म सुविधा कार्यालय ने 'शूट इन इंडिया' के लिए विदेशी फिल्म निर्माताओं के लिए नए प्रोत्साहनों की घोषणा की।" },
        { title: "39th National Games 2025", titleHi: "39वें राष्ट्रीय खेल 2025", winner: "Services topped medal tally", winnerHi: "सर्विसेज ने पदक तालिका में शीर्ष स्थान प्राप्त किया", detail: "Held in Uttarakhand. Services topped once again, followed by Maharashtra and Haryana. Games served as selection trial for 2026 Asian Games.", detailHi: "उत्तराखंड में आयोजित। सर्विसेज एक बार फिर शीर्ष पर रहा, उसके बाद महाराष्ट्र और हरियाणा का स्थान रहा। ये खेल 2026 के एशियाई खेलों के लिए चयन परीक्षण के रूप में काम करते थे।" },
        { title: "ICC Champions Trophy 2025 Preparations", titleHi: "ICC चैंपियंस ट्रॉफी 2025 की तैयारियाँ", winner: "Venues finalized for early 2026", winnerHi: "2026 की शुरुआत के लिए स्थान अंतिम रूप दिए गए", detail: "BCCI and ICC held high-level meetings regarding participation and neutral venues. PV Sindhu/Lakshya Sen reached finals of China Masters, maintaining top-10 BWF rankings.", detailHi: "BCCI और ICC ने भागीदारी और तटस्थ स्थानों के संबंध में उच्च स्तरीय बैठकें कीं। पीवी सिंधु/लक्ष्य सेन चीन मास्टर्स के फाइनल में पहुंचे, जिससे उनकी शीर्ष-10 BWF रैंकिंग बनी रही।" }
    ]

    const importantDays = [
        { date: "Nov 5", day: "World Tsunami Awareness Day", dayHi: "विश्व सुनामी जागरूकता दिवस", theme: "Fighting Inequality for a Resilient Future", themeHi: "लचीले भविष्य के लिए असमानता से लड़ना" },
        { date: "Nov 9", day: "Uttarakhand Foundation Day", dayHi: "उत्तराखंड स्थापना दिवस", theme: "Progressive Uttarakhand", themeHi: "प्रगतिशील उत्तराखंड" },
        { date: "Nov 11", day: "National Education Day", dayHi: "राष्ट्रीय शिक्षा दिवस", theme: "Innovation for Future Learning", themeHi: "भविष्य की शिक्षा के लिए नवाचार" },
        { date: "Nov 15", day: "Janjatiya Gaurav Divas", dayHi: "जनजातीय गौरव दिवस", theme: "Tribal Pride & Sustainable Living", themeHi: "जनजातीय गौरव और सतत जीवन" },
        { date: "Nov 19", day: "World Toilet Day", dayHi: "विश्व शौचालय दिवस", theme: "Accelerating Change", themeHi: "परिवर्तन में तेजी लाना" },
        { date: "Nov 26", day: "Constitution Day", dayHi: "संविधान दिवस", theme: "The Spirit of the Republic", themeHi: "गणतंत्र की भावना" }
    ]

    const filteredNews = activeCategory === "all"
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory)

    const selectedNewsItem = newsItems.find(item => item.id === selectedNews)

    const faqs = [
        { q: "What is the divisible pool in Finance Commission context?", qHi: "वित्त आयोग के संदर्भ में विभाज्य पूल क्या है?", a: "The divisible pool is the portion of central taxes (excluding cess and surcharge) that is shared between the Centre and States as per Finance Commission recommendations. It has grown to ₹22.4 lakh crore.", aHi: "विभाज्य पूल केंद्रीय करों (उपकर और अधिभार को छोड़कर) का वह हिस्सा है जो वित्त आयोग की सिफारिशों के अनुसार केंद्र और राज्यों के बीच साझा किया जाता है। यह बढ़कर ₹22.4 लाख करोड़ हो गया है।" },
        { q: "What is the India-Myanmar-Thailand Trilateral Highway?", qHi: "भारत-म्यांमार-थाईलैंड त्रिपक्षीय राजमार्ग क्या है?", a: "A highway project connecting India to Southeast Asia, currently 92% complete, expected to be fully functional by mid-2026.", aHi: "एक राजमार्ग परियोजना जो भारत को दक्षिण पूर्व एशिया से जोड़ती है, वर्तमान में 92% पूर्ण, मध्य-2026 तक पूरी तरह से कार्यात्मक होने की उम्मीद है।" },
        { q: "What was India's GDP growth in Q2 of FY 2025-26?", qHi: "वित्त वर्ष 2025-26 की दूसरी तिमाही में भारत की जीडीपी वृद्धि क्या थी?", a: "India's GDP grew at 6.7% in Q2, down from 7.1% in Q1, due to erratic monsoon impacting agriculture.", aHi: "दूसरी तिमाही में भारत की जीडीपी 6.7% बढ़ी, जो पहली तिमाही में 7.1% से कम है, जो कृषि को प्रभावित करने वाले अनियमित मानसून के कारण था।" },
        { q: "What is Shukrayaan-1 mission?", qHi: "शुक्रयान-1 मिशन क्या है?", a: "ISRO's Venus Orbiter Mission to study Venusian atmosphere (96% CO2) and investigate presence of Phosphine. Thermal vacuum tests completed in November 2025.", aHi: "शुक्र के वायुमंडल (96% CO2) का अध्ययन करने और फॉस्फीन की उपस्थिति की जांच करने के लिए ISRO का शुक्र ऑर्बिटर मिशन। थर्मल वैक्यूम परीक्षण नवंबर 2025 में पूरे हुए।" },
        { q: "What is Agni-VI?", qHi: "अग्नि-VI क्या है?", a: "India's first ICBM with MIRV technology, range exceeding 7,000 km, allowing single missile to strike multiple targets simultaneously.", aHi: "MIRV तकनीक वाली भारत की पहली ICBM, सीमा 7,000 किमी से अधिक, जो एक ही मिसाइल को एक साथ कई लक्ष्यों पर हमला करने की अनुमति देती है।" },
        { q: "What was the theme of IFFI 2025?", qHi: "IFFI 2025 की थीम क्या थी?", a: "The 56th IFFI focused on 'Cinema in the Age of AI' and was held in Goa from November 20-28, 2025.", aHi: "56वें IFFI का ध्यान 'एआई के युग में सिनेमा' पर था और यह 20-28 नवंबर, 2025 तक गोवा में आयोजित किया गया था।" }
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
                        {language === "en" ? "November" : "नवंबर"} <span className="text-primary">2025</span>
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
                            <Film className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "IFFI 2025" : "IFFI 2025"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "6 Important Days" : "6 महत्वपूर्ण दिवस"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <Rocket className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "Shukrayaan-1" : "शुक्रयान-1"}</span>
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
                            <div className="text-2xl font-bold text-primary">₹22.4L Cr</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Divisible Pool" : "विभाज्य पूल"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">6.7%</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "GDP Growth (Q2)" : "जीडीपी वृद्धि (Q2)"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">48%</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Non-Fossil Capacity" : "गैर-जीवाश्म क्षमता"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">7,000km</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Agni-VI Range" : "अग्नि-VI सीमा"}</div>
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
                                    <h3 className="font-bold">{language === "en" ? "Important Days: November 2025" : "महत्वपूर्ण दिवस: नवंबर 2025"}</h3>
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
                                    {language === "en" ? "November 2025: Key Numbers" : "नवंबर 2025: प्रमुख आंकड़े"}
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between"><span>{language === "en" ? "Divisible Pool:" : "विभाज्य पूल:"}</span><span className="font-bold">₹22.4 Lakh Cr</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "GDP Growth (Q2):" : "जीडीपी वृद्धि (Q2):"}</span><span className="font-bold">6.7%</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Manufacturing Growth:" : "विनिर्माण वृद्धि:"}</span><span className="font-bold">8.4%</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "GNPA Ratio:" : "GNPA अनुपात:"}</span><span className="font-bold">2.2% (12-yr low)</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Non-Fossil Capacity:" : "गैर-जीवाश्म क्षमता:"}</span><span className="font-bold">48% of total</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Agni-VI Range:" : "अग्नि-VI सीमा:"}</span><span className="font-bold">7,000+ km</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Stubble Burning Reduction:" : "पराली जलाने में कमी:"}</span><span className="font-bold">15% (YoY)</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Trilateral Highway Completion:" : "त्रिपक्षीय राजमार्ग पूर्णता:"}</span><span className="font-bold">92%</span></div>
                                </div>
                            </div>

                            {/* Download Card */}
                            {/* <div className="rounded-xl border bg-card p-5 text-center">
                                <Download className="w-8 h-8 text-primary mx-auto mb-3" />
                                <h3 className="font-bold mb-2">{language === "en" ? "Download PDF" : "पीडीएफ डाउनलोड करें"}</h3>
                                <p className="text-xs text-muted-foreground mb-3">
                                    {language === "en" ? "Get the complete November 2025 Current Affairs PDF for offline study" : "ऑफलाइन अध्ययन के लिए संपूर्ण नवंबर 2025 करेंट अफेयर्स पीडीएफ प्राप्त करें"}
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
                            {language === "en" ? "Based on November 2025 current affairs" : "नवंबर 2025 करेंट अफेयर्स पर आधारित"}
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
                        {language === "en" ? "Practice MCQs based on November 2025 current affairs" : "नवंबर 2025 करेंट अफेयर्स पर आधारित MCQ का अभ्यास करें"}
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
                        {language === "en" ? "November 2025 Current Affairs for Competitive Exams" : "प्रतियोगी परीक्षाओं के लिए नवंबर 2025 करेंट अफेयर्स"}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        {language === "en"
                            ? "This comprehensive current affairs digest covers all important events of November 2025 including 16th Finance Commission interim report processing (₹22.4 lakh crore divisible pool), 22nd India-ASEAN Summit (UPI-linkage proposal, AITIGA review, Trilateral Highway 92% complete), Q2 GDP growth at 6.7% (manufacturing at 8.4%, GNPA at 2.2% 12-year low), RBI's Green Deposits framework to prevent greenwashing, ISRO's Shukrayaan-1 thermal vacuum tests completed, DRDO's Agni-VI MIRV technology trials (7,000+ km range), Delhi-NCR air quality crisis (AQI 500+, GRAP-IV, stubble burning down 15%), 56th IFFI Goa (Cinema in Age of AI theme), 39th National Games in Uttarakhand (Services topped), and Constitution Day 76th anniversary with Digital Constitution portal. Perfect for UPSC, SSC, Banking, Railways, HSSC, UKSSSC, and all state-level competitive exams."
                            : "यह व्यापक करेंट अफेयर्स डाइजेस्ट नवंबर 2025 की सभी महत्वपूर्ण घटनाओं को कवर करता है, जिसमें 16वें वित्त आयोग की अंतरिम रिपोर्ट प्रसंस्करण (₹22.4 लाख करोड़ विभाज्य पूल), 22वां भारत-आसियान शिखर सम्मेलन (यूपीआई-लिंकेज प्रस्ताव, AITIGA समीक्षा, त्रिपक्षीय राजमार्ग 92% पूर्ण), दूसरी तिमाही में जीडीपी वृद्धि 6.7% (विनिर्माण 8.4%, जीएनपीए 2.2% 12 साल का निचला स्तर), ग्रीनवाशिंग को रोकने के लिए आरबीआई का ग्रीन डिपॉजिट ढांचा, ISRO का शुक्रयान-1 थर्मल वैक्यूम परीक्षण पूरा, DRDO का अग्नि-VI MIRV तकनीक परीक्षण (7,000+ किमी सीमा), दिल्ली-एनसीआर वायु गुणवत्ता संकट (AQI 500+, GRAP-IV, पराली जलाने में 15% कमी), 56वां IFFI गोवा (एआई के युग में सिनेमा थीम), उत्तराखंड में 39वें राष्ट्रीय खेल (सर्विसेज शीर्ष पर), और संविधान दिवस 76वीं वर्षगांठ डिजिटल संविधान पोर्टल के साथ शामिल हैं। UPSC, SSC, बैंकिंग, रेलवे, HSSC, UKSSSC और सभी राज्य-स्तरीय प्रतियोगी परीक्षाओं के लिए उपयुक्त।"}
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