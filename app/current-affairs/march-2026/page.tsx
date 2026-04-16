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
    Eye,
    Mic,
    PenTool
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

export default function MarchCurrentAffairsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [selectedNews, setSelectedNews] = useState<string | null>(null)
    const [showAllFaqs, setShowAllFaqs] = useState(false)
    const [language, setLanguage] = useState<"en" | "hi">("en")

    const newsItems: NewsItem[] = [
        {
            id: "finance-commission",
            title: "16th Finance Commission submits Interim Recommendations",
            titleHi: "16वें वित्त आयोग ने अंतरिम सिफारिशें प्रस्तुत कीं",
            category: "national",
            summary: "The 16th Finance Commission (FC), chaired by Dr. Arvind Panagariya, submitted its first interim report to the President of India, outlining the tax-sharing formula between Centre and States for FY 2026-27.",
            summaryHi: "डॉ. अरविंद पनगढ़िया की अध्यक्षता में 16वें वित्त आयोग ने राष्ट्रपति को अपनी पहली अंतरिम रिपोर्ट सौंपी, जिसमें वित्त वर्ष 2026-27 के लिए केंद्र और राज्यों के बीच कर-साझाकरण फॉर्मूले की रूपरेखा तैयार की गई है।",
            detailedAnalysis: "The 16th Finance Commission was constituted under Article 280 of the Constitution. The interim report focuses on 'Vertical Devolution' (share of states in central taxes) and 'Horizontal Devolution' (allocation among states). Currently, the 15th FC recommended a 41% share for states. The 16th FC is analyzing the impact of cess and surcharge that remain outside the divisible pool. The Commission has also been tasked with reviewing the financing of Disaster Management initiatives under the Disaster Management Act, 2005. The fiscal deficit target of 4.5% for FY26 is a key benchmark. The Commission is examining 2021 Census data versus 1971 population data to balance demographic performance with needs. Key officials include Secretary Ritvik Pandey and members Ajay Narayan Jha and Annie George Mathew. The report emphasizes 'Performance-based incentives' for states achieving Sustainable Development Goals (SDGs) and fiscal consolidation.",
            detailedAnalysisHi: "16वां वित्त आयोग संविधान के अनुच्छेद 280 के तहत गठित किया गया था। अंतरिम रिपोर्ट 'ऊर्ध्वाधर विकेंद्रीकरण' (केंद्रीय करों में राज्यों का हिस्सा) और 'क्षैतिज विकेंद्रीकरण' (राज्यों के बीच आवंटन) पर केंद्रित है। वर्तमान में, 15वें वित्त आयोग ने राज्यों के लिए 41% हिस्सेदारी की सिफारिश की थी। 16वां आयोग अब 'सेस' (उपकर) और 'सरचार्ज' (अधिभार) के प्रभाव का विश्लेषण कर रहा है, जो विभाज्य पूल से बाहर रहते हैं। आयोग को आपदा प्रबंधन अधिनियम, 2005 के तहत आपदा प्रबंधन पहल के वित्तपोषण की समीक्षा करने का भी काम सौंपा गया है। वित्तीय वर्ष 2026 के लिए 4.5% का राजकोषीय घाटा लक्ष्य एक महत्वपूर्ण बेंचमार्क है। आयोग जनसांख्यिकीय प्रदर्शन और राज्यों की जरूरतों के बीच संतुलन बनाने के लिए 2021 की जनगणना के आंकड़ों की जांच कर रहा है। सचिव ऋत्विक पांडे और सदस्य अजय नारायण झा और एनी जॉर्ज मैथ्यू इस प्रक्रिया में शामिल प्रमुख अधिकारी हैं। रिपोर्ट में सतत विकास लक्ष्यों (SDGs) और राजकोषीय सुदृढ़ीकरण प्राप्त करने वाले राज्यों के लिए 'प्रदर्शन-आधारित प्रोत्साहन' पर जोर दिया गया है।",
            impact: [
                "May lead to restructuring of Centrally Sponsored Schemes (CSS) to reduce fiscal burden on Union Budget",
                "Will set fiscal roadmap for 2026-2031, influencing India's journey toward a $5 trillion economy"
            ],
            impactHi: [
                "केंद्रीय बजट पर वित्तीय बोझ कम करने के लिए केंद्र प्रायोजित योजनाओं (CSS) के पुनर्गठन का कारण बन सकता है",
                "2026-2031 के लिए वित्तीय रोडमैप तय करेगा, जो 5 ट्रिलियन डॉलर की अर्थव्यवस्था की ओर भारत की यात्रा को प्रभावित करेगा"
            ],
            staticGk: [
                { fact: "First Finance Commission", description: "Established in 1951 under the chairmanship of K.C. Neogy", factHi: "प्रथम वित्त आयोग", descriptionHi: "1951 में के.सी. नियोगी की अध्यक्षता में स्थापित" },
                { fact: "Article 280", description: "Mandates President to constitute a Finance Commission every five years", factHi: "अनुच्छेद 280", descriptionHi: "राष्ट्रपति को प्रत्येक पांच वर्ष में वित्त आयोग का गठन करने का आदेश देता है" },
                { fact: "15th FC Data", description: "Used 2011 Census data for the first time, replacing 1971 data", factHi: "15वां वित्त आयोग डेटा", descriptionHi: "1971 के डेटा को बदलकर पहली बार 2011 की जनगणना के डेटा का उपयोग किया" },
                { fact: "Headquarters", description: "New Delhi. Current Chairman: Dr. Arvind Panagariya", factHi: "मुख्यालय", descriptionHi: "नई दिल्ली। वर्तमान अध्यक्ष: डॉ. अरविंद पनगढ़िया" }
            ],
            examSignificance: {
                prelims: "Questions on Article 280, members' qualifications, and devolution percentages",
                mains: "GS Paper II (Federalism) and GS Paper III (Economy) - Themes: Fiscal Federalism, Centre-State Relations, impact of Cess/Surcharge",
                prelimsHi: "अनुच्छेद 280, सदस्यों की योग्यता और विकेंद्रीकरण प्रतिशत पर प्रश्न",
                mainsHi: "जीएस पेपर II (संघवाद) और जीएस पेपर III (अर्थव्यवस्था) - विषय: राजकोषीय संघवाद, केंद्र-राज्य संबंध, उपकर/अधिभार का प्रभाव"
            }
        },
        {
            id: "quad-summit",
            title: "2026 QUAD Summit held in New Delhi",
            titleHi: "नई दिल्ली में 2026 क्वाड शिखर सम्मेलन आयोजित",
            category: "international",
            summary: "The leaders of QUAD (India, USA, Japan, Australia) met in New Delhi, shifting focus from security to 'Critical and Emerging Technologies' and 'Climate Finance'.",
            summaryHi: "क्वाड (भारत, अमेरिका, जापान, ऑस्ट्रेलिया) के नेता नई दिल्ली में मिले, जिसमें सुरक्षा से हटकर 'महत्वपूर्ण और उभरती प्रौद्योगिकियों' और 'जलवायु वित्त' पर ध्यान केंद्रित किया गया।",
            detailedAnalysis: "The 2026 Summit saw the launch of the 'QUAD Bio-Manufacturing Hub' in India, aimed at reducing dependency on China for Active Pharmaceutical Ingredients (APIs). Prime Minister Narendra Modi, along with the US President and counterparts from Japan and Australia, signed the 'Indo-Pacific Maritime Domain Awareness (IPMDA) 2.0' agreement. This involves deploying advanced AI-driven satellite tracking to monitor illegal, unreported, and unregulated (IUU) fishing in the Indian Ocean. A major financial commitment of $50 billion was announced for the 'QUAD Infrastructure Fellowship' to counter the Belt and Road Initiative (BRI). The New Delhi Declaration emphasized a 'Free and Open Indo-Pacific' and specifically mentioned the stability of the Taiwan Strait and the South China Sea. The summit also integrated the 'Semafor' initiative for secure 6G telecommunications standards.",
            detailedAnalysisHi: "2026 के शिखर सम्मेलन में भारत में 'क्वाड बायो-मैन्युफैक्चरिंग हब' के शुभारंभ की घोषणा की गई, जिसका उद्देश्य सक्रिय दवा सामग्री (APIs) के लिए चीन पर निर्भरता कम करना है। प्रधानमंत्री नरेंद्र मोदी ने अमेरिकी राष्ट्रपति और जापान एवं ऑस्ट्रेलिया के समकक्षों के साथ 'इंडो-पैसिफिक मैरीटाइम डोमेन अवेयरनेस (IPMDA) 2.0' समझौते पर हस्ताक्षर किए। इसमें हिंद महासागर में अवैध मछली पकड़ने की निगरानी के लिए उन्नत AI-संचालित उपग्रह ट्रैकिंग का उपयोग शामिल है। बीआरआई (BRI) का मुकाबला करने के लिए 'क्वाड इंफ्रास्ट्रक्चर फेलोशिप' के लिए 50 बिलियन डॉलर की वित्तीय प्रतिबद्धता की घोषणा की गई। 'नई दिल्ली घोषणा' में एक 'मुक्त और खुले हिंद-प्रशांत' पर जोर दिया गया और ताइवान जलडमरूमध्य और दक्षिण चीन सागर की स्थिरता का विशेष उल्लेख किया गया।",
            impact: [
                "Bio-Manufacturing Hub will create high-tech jobs in India and stabilize global medicine prices",
                "India strengthens its position as a 'net security provider' in the region without joining a formal military alliance",
                "Increased synergy in 6G and AI standards will prevent technological fragmentation"
            ],
            impactHi: [
                "बायो-मैन्युफैक्चरिंग हब भारत में हाई-टेक नौकरियां पैदा करेगा और वैश्विक दवा की कीमतों को स्थिर करेगा",
                "भारत बिना किसी औपचारिक सैन्य गठबंधन में शामिल हुए क्षेत्र में 'नेट सुरक्षा प्रदाता' के रूप में अपनी स्थिति मजबूत करता है",
                "6G और AI मानकों में बढ़ी तालमेल तकनीकी विखंडन को रोकेगी"
            ],
            staticGk: [
                { fact: "QUAD Origin", description: "First mooted by Japanese PM Shinzo Abe in 2007, revived in 2017", factHi: "क्वाड की उत्पत्ति", descriptionHi: "पहली बार 2007 में जापानी प्रधानमंत्री शिंजो अबे द्वारा प्रस्तावित, 2017 में पुनर्जीवित" },
                { fact: "Malabar Exercise", description: "Naval component involving all four QUAD nations", factHi: "मालाबार अभ्यास", descriptionHi: "सभी चार क्वाड देशों को शामिल करने वाला नौसैनिक घटक" },
                { fact: "QUAD Nature", description: "Not a formal military alliance but a strategic forum", factHi: "क्वाड की प्रकृति", descriptionHi: "औपचारिक सैन्य गठबंधन नहीं बल्कि एक रणनीतिक मंच" },
                { fact: "First In-Person Summit", description: "Held in Washington D.C. in 2021", factHi: "पहला व्यक्तिगत शिखर सम्मेलन", descriptionHi: "2021 में वाशिंगटन डी.सी. में आयोजित" }
            ],
            examSignificance: {
                prelims: "Locations of summits, names of initiatives (IPMDA, Semafor)",
                mains: "GS Paper II (International Relations) - Themes: India's strategic autonomy, countering China, tech-diplomacy",
                prelimsHi: "शिखर सम्मेलनों के स्थान, पहलों के नाम (IPMDA, Semafor)",
                mainsHi: "जीएस पेपर II (अंतर्राष्ट्रीय संबंध) - विषय: भारत की रणनीतिक स्वायत्तता, चीन का मुकाबला, टेक-कूटनीति"
            }
        },
        {
            id: "cbdc-offline",
            title: "RBI launches Offline Digital Rupee (CBDC-R)",
            titleHi: "RBI ने ऑफलाइन डिजिटल रुपया (CBDC-R) लॉन्च किया",
            category: "economy",
            summary: "The Reserve Bank of India rolled out 'Offline' functionality for Central Bank Digital Currency (CBDC) - Retail, enabling digital payments without internet connectivity.",
            summaryHi: "भारतीय रिजर्व बैंक (RBI) ने सेंट्रल बैंक डिजिटल करेंसी (CBDC) - रिटेल के लिए 'ऑफलाइन' कार्यक्षमता शुरू की, जिससे इंटरनेट कनेक्टिविटी के बिना डिजिटल भुगतान संभव हो सका।",
            detailedAnalysis: "Governor announced that CBDC-R now supports 'Programmability' and 'Offline functionality'. The technical framework utilizes Near Field Communication (NFC) and Bluetooth-based peer-to-peer (P2P) transfers without requiring a live internet connection. This is a massive leap for the Digital India mission, targeting the 'shadow economy' and reducing the cost of physical cash management, which currently costs the RBI over ₹5,000 crore annually. The RBI has integrated CBDC with Unified Payments Interface (UPI) QR codes, allowing interoperability. The 2026 update includes 'Purpose-bound money,' where the government can issue digital rupees for specific subsidies that can only be spent at designated outlets, preventing leakage of funds. Daily transaction volume of CBDC crossed 5 million as of March 2026.",
            detailedAnalysisHi: "गवर्नर ने घोषणा की कि CBDC-R अब 'प्रोग्रामेबिलिटी' और 'ऑफलाइन कार्यक्षमता' का समर्थन करता है। तकनीकी ढांचा बिना इंटरनेट कनेक्शन के नियर फील्ड कम्युनिकेशन (NFC) और ब्लूटूथ-आधारित पीयर-टू-पीयर (P2P) ट्रांसफर का उपयोग करता है। यह डिजिटल इंडिया मिशन के लिए एक बड़ी छलांग है, जो 'छाया अर्थव्यवस्था' को लक्षित करता है और भौतिक नकदी प्रबंधन की लागत को कम करता है, जिस पर वर्तमान में RBI को सालाना ₹5,000 करोड़ से अधिक खर्च करना पड़ता है। RBI ने CBDC को यूनिफाइड पेमेंट्स इंटरफेस (UPI) QR कोड के साथ एकीकृत किया है, जिससे अंतरसंचालनीयता की अनुमति मिलती है। 2026 के अपडेट में 'उद्देश्य-बद्ध धन' शामिल है, जहां सरकार विशेष सब्सिडी के लिए डिजिटल रुपये जारी कर सकती है जिसे केवल नामित आउटलेट्स पर ही खर्च किया जा सकता है। मार्च 2026 तक CBDC की दैनिक लेनदेन मात्रा 5 मिलियन को पार कर गई।",
            impact: [
                "Enables digital payments for rural populations and reduces the 'digital divide'",
                "Enhances transparency of government subsidies and reduces corruption through 'programmable' money",
                "Could lead to gradual phasing out of small-denomination physical currency notes"
            ],
            impactHi: [
                "ग्रामीण आबादी के लिए डिजिटल भुगतान सक्षम करता है और 'डिजिटल विभाजन' को कम करता है",
                "'प्रोग्रामेबल' मनी के माध्यम से सरकारी सब्सिडी की पारदर्शिता बढ़ाता है और भ्रष्टाचार कम करता है",
                "छोटे मूल्यवर्ग के भौतिक मुद्रा नोटों के क्रमिक चरणबद्ध तरीके से समाप्त होने का कारण बन सकता है"
            ],
            staticGk: [
                { fact: "CBDC-R Pilot Launch", description: "December 1, 2022", factHi: "CBDC-R पायलट लॉन्च", descriptionHi: "1 दिसंबर, 2022" },
                { fact: "CBDC Definition", description: "Legal tender issued by central bank in digital form", factHi: "CBDC परिभाषा", descriptionHi: "केंद्रीय बैंक द्वारा डिजिटल रूप में जारी वैध मुद्रा" },
                { fact: "First CBDC Nation", description: "Bahamas launched 'Sand Dollar'", factHi: "पहला CBDC देश", descriptionHi: "बहामास ने 'सैंड डॉलर' लॉन्च किया" },
                { fact: "Programmable Money Concept", description: "First proposed in RBI Concept Note (Oct 2022)", factHi: "प्रोग्रामेबल मनी अवधारणा", descriptionHi: "पहली बार RBI अवधारणा नोट (अक्टूबर 2022) में प्रस्तावित" }
            ],
            examSignificance: {
                prelims: "Features of CBDC vs Cryptocurrency, NFC technology",
                mains: "GS Paper III (Economy) - Themes: Digital economy, financial inclusion, monetary policy",
                prelimsHi: "CBDC बनाम क्रिप्टोकरेंसी की विशेषताएं, NFC तकनीक",
                mainsHi: "जीएस पेपर III (अर्थव्यवस्था) - विषय: डिजिटल अर्थव्यवस्था, वित्तीय समावेशन, मौद्रिक नीति"
            }
        },
        {
            id: "nisar-satellite",
            title: "ISRO successfully launches NISAR Satellite",
            titleHi: "ISRO ने NISAR उपग्रह का सफल प्रक्षेपण किया",
            category: "science",
            summary: "ISRO in collaboration with NASA successfully launched NISAR (NASA-ISRO Synthetic Aperture Radar) satellite from Sriharikota to map Earth's surface changes.",
            summaryHi: "ISRO ने NASA के सहयोग से श्रीहरिकोटा से NISAR (NASA-ISRO सिंथेटिक एपर्चर रडार) उपग्रह का सफल प्रक्षेपण किया, जो पृथ्वी की सतह के बदलावों का मानचित्रण करेगा।",
            detailedAnalysis: "NISAR is a joint Earth-observing mission between NASA and ISRO, costing approximately $1.5 billion. It utilizes a dual-frequency (L-band and S-band) Synthetic Aperture Radar. ISRO provided the S-band radar, GSLV Mk-II launch vehicle, and spacecraft bus, while NASA provided L-band radar and high-rate data downlink system. The satellite will map the entire globe every 12 days. Its primary mission is to observe changes in Earth's ecosystems, ice mass, vegetation biomass, sea level rise, and natural hazards including earthquakes, tsunamis, volcanoes, and landslides. It can detect surface movements of less than a centimeter, critical for India's 'Deep Ocean Mission' and 'Himalayan Monitoring' to predict glacial lake outburst floods (GLOFs).",
            detailedAnalysisHi: "NISAR NASA और ISRO के बीच एक संयुक्त पृथ्वी-अवलोकन मिशन है, जिसकी लागत लगभग 1.5 बिलियन डॉलर है। यह दोहरी-आवृत्ति (L-band और S-band) सिंथेटिक एपर्चर रडार का उपयोग करता है। ISRO ने S-band रडार, GSLV Mk-II लॉन्च वाहन और अंतरिक्ष यान बस प्रदान की, जबकि NASA ने L-band रडार और उच्च-दर डेटा डाउनलिंक प्रणाली प्रदान की। उपग्रह हर 12 दिनों में पूरे विश्व का मानचित्रण करेगा। इसका प्राथमिक मिशन पृथ्वी के पारिस्थितिक तंत्र, बर्फ द्रव्यमान, वनस्पति बायोमास, समुद्र स्तर में वृद्धि और भूकंप, सुनामी, ज्वालामुखी और भूस्खलन सहित प्राकृतिक खतरों में बदलाव का निरीक्षण करना है। यह एक सेंटीमीटर से भी कम की सतह की हलचल का पता लगा सकता है, जो भारत के 'डीप ओशन मिशन' और हिमनद झील विस्फोट बाढ़ (GLOFs) की भविष्यवाणी के लिए 'हिमालयी निगरानी' के लिए महत्वपूर्ण है।",
            impact: [
                "Improved disaster warning systems will save thousands of lives and billions in infrastructure damage",
                "Strengthens Indo-US space cooperation under ICET framework",
                "Sets stage for future joint planetary missions (Mars or Venus)"
            ],
            impactHi: [
                "बेहतर आपदा चेतावनी प्रणाली हजारों लोगों की जान बचाएगी और अरबों के बुनियादी ढांचे के नुकसान को रोकेगी",
                "ICET ढांचे के तहत भारत-अमेरिका अंतरिक्ष सहयोग को मजबूत करता है",
                "भविष्य के संयुक्त ग्रहों के मिशन (मंगल या शुक्र) के लिए मंच तैयार करता है"
            ],
            staticGk: [
                { fact: "ISRO Establishment", description: "August 15, 1969", factHi: "ISRO स्थापना", descriptionHi: "15 अगस्त, 1969" },
                { fact: "NISAR Uniqueness", description: "First satellite to use two different radar frequencies", factHi: "NISAR की विशिष्टता", descriptionHi: "दो अलग-अलग रडार आवृत्तियों का उपयोग करने वाला पहला उपग्रह" },
                { fact: "GSLV Mk-II", description: "Uses indigenous cryogenic upper stage", factHi: "GSLV Mk-II", descriptionHi: "स्वदेशी क्रायोजेनिक ऊपरी चरण का उपयोग करता है" },
                { fact: "NISAR Agreement", description: "Signed in 2014", factHi: "NISAR समझौता", descriptionHi: "2014 में हस्ताक्षरित" }
            ],
            examSignificance: {
                prelims: "Technical specs of NISAR (L-band vs S-band), launch vehicle details",
                mains: "GS Paper III (Science & Tech) - Themes: International collaboration in space, disaster management",
                prelimsHi: "NISAR की तकनीकी विशिष्टताएं (L-band बनाम S-band), लॉन्च वाहन विवरण",
                mainsHi: "जीएस पेपर III (विज्ञान और प्रौद्योगिकी) - विषय: अंतरिक्ष में अंतर्राष्ट्रीय सहयोग, आपदा प्रबंधन"
            }
        },
        {
            id: "ramsar-sites",
            title: "India adds 5 new Ramsar Sites, total reaches 90",
            titleHi: "भारत ने 5 नए रामसर स्थल जोड़े, कुल संख्या 90 हुई",
            category: "environment",
            summary: "Ministry of Environment announced addition of five new wetlands to Ramsar list, including sites from Ladakh, Andaman & Nicobar, and Western Ghats.",
            summaryHi: "पर्यावरण मंत्रालय ने रामसर सूची में पांच नई आर्द्रभूमियों को शामिल करने की घोषणा की, जिसमें लद्दाख, अंडमान और निकोबार और पश्चिमी घाट के स्थल शामिल हैं।",
            detailedAnalysis: "The five new sites include two from Ladakh, one from Andaman & Nicobar, and two from the Western Ghats. This move is part of the 'Amrit Dharohar' initiative launched to promote wetland conservation. Wetlands are vital for carbon sequestration; the newly added sites in the Western Ghats are estimated to store over 2 million tonnes of carbon. The Ministry emphasized these sites meet rigorous criteria of the Ramsar Convention (1971), particularly in supporting endangered species like the Black-necked Crane and Dugong. The inclusion allows international funding and technical support for 'Wise Use' of these wetlands. India now has the largest number of Ramsar sites in South Asia, covering over 1.5 million hectares.",
            detailedAnalysisHi: "पांच नए स्थलों में लद्दाख से दो, अंडमान और निकोबार से एक और पश्चिमी घाट से दो स्थल शामिल हैं। यह कदम आर्द्रभूमि संरक्षण को बढ़ावा देने के लिए शुरू की गई 'अमृत धरोहर' पहल का हिस्सा है। आर्द्रभूमियां कार्बन पृथक्करण के लिए महत्वपूर्ण हैं; पश्चिमी घाट में शामिल नए स्थलों के बारे में अनुमान है कि वे 2 मिलियन टन से अधिक कार्बन का भंडारण करते हैं। मंत्रालय ने जोर दिया कि ये स्थल रामसर कन्वेंशन (1971) के कठोर मानदंडों को पूरा करते हैं, विशेष रूप से ब्लैक-नेक्ड क्रेन और डगोंग जैसी लुप्तप्राय प्रजातियों का समर्थन करने में। इस समावेशन से इन आर्द्रभूमियों के 'बुद्धिमान उपयोग' के लिए अंतर्राष्ट्रीय वित्त पोषण और तकनीकी सहायता मिलती है। भारत के पास अब दक्षिण एशिया में रामसर स्थलों की सबसे बड़ी संख्या है, जो 1.5 मिलियन हेक्टेयर से अधिक क्षेत्र को कवर करती है।",
            impact: [
                "Boosts eco-tourism and protects livelihoods of local fishing communities",
                "Aligns with India's 'Net Zero 2070' goal by enhancing natural carbon sinks",
                "Focus will shift toward 'Mission Sahbhagita' for community-led wetland management"
            ],
            impactHi: [
                "इको-टूरिज्म को बढ़ावा देता है और स्थानीय मछुआरा समुदायों की आजीविका की रक्षा करता है",
                "प्राकृतिक कार्बन सिंक को बढ़ाकर भारत के 'नेट जीरो 2070' लक्ष्य के साथ संरेखित करता है",
                "समुदाय-नेतृत्व वाले आर्द्रभूमि प्रबंधन के लिए 'मिशन सहभागिता' की ओर ध्यान केंद्रित करेगा"
            ],
            staticGk: [
                { fact: "Ramsar Convention", description: "Signed on Feb 2, 1971, in Ramsar, Iran", factHi: "रामसर कन्वेंशन", descriptionHi: "2 फरवरी, 1971 को रामसर, ईरान में हस्ताक्षरित" },
                { fact: "First Indian Sites", description: "Chilika Lake and Keoladeo National Park (1981)", factHi: "पहले भारतीय स्थल", descriptionHi: "चिल्का झील और केवलादेव राष्ट्रीय उद्यान (1981)" },
                { fact: "Highest in India", description: "Tamil Nadu has highest number of Ramsar sites", factHi: "भारत में सर्वाधिक", descriptionHi: "तमिलनाडु में रामसर स्थलों की सबसे बड़ी संख्या है" },
                { fact: "World Wetlands Day", description: "Celebrated on February 2nd", factHi: "विश्व आर्द्रभूमि दिवस", descriptionHi: "2 फरवरी को मनाया जाता है" }
            ],
            examSignificance: {
                prelims: "Names and locations of new sites, Ramsar criteria",
                mains: "GS Paper III (Environment) - Themes: Biodiversity conservation, climate change mitigation",
                prelimsHi: "नए स्थलों के नाम और स्थान, रामसर मानदंड",
                mainsHi: "जीएस पेपर III (पर्यावरण) - विषय: जैव विविधता संरक्षण, जलवायु परिवर्तन शमन"
            }
        }
    ]

    const sportsAwards = [
        { title: "All England Open Badminton Championships 2026", titleHi: "ऑल इंग्लैंड ओपन बैडमिंटन चैंपियनशिप 2026", winner: "Lakshya Sen (India)", winnerHi: "लक्ष्य सेन (भारत)", detail: "Defeated Kunlavut Vitidsarn. First Indian to win two All England titles, surpassing Prakash Padukone and P. Gopichand.", detailHi: "कुन्लावुत विटिडसर्न को हराया। प्रकाश पादुकोण और पी. गोपीचंद को पीछे छोड़ते हुए दो ऑल इंग्लैंड खिताब जीतने वाले पहले भारतीय बने।" },
        { title: "Pritzker Architecture Prize 2026", titleHi: "प्रिट्जकर आर्किटेक्चर पुरस्कार 2026", winner: "Anupama Kundoo (India)", winnerHi: "अनुपमा कुंडू (भारत)", detail: "Second Indian to receive this 'Nobel of Architecture' after B.V. Doshi. Recognized for sustainable designs using local materials.", detailHi: "बी.वी. दोशी के बाद यह 'आर्किटेक्चर का नोबेल' प्राप्त करने वाले दूसरे भारतीय। स्थानीय सामग्रियों का उपयोग करके टिकाऊ डिजाइन के लिए पहचाना गया।" },
        { title: "ICC Women's ODI World Cup 2026", titleHi: "आईसीसी महिला वनडे विश्व कप 2026", winner: "Host: India", winnerHi: "मेजबान: भारत", detail: "Tournament kicked off in late March. India won opening match against England at Narendra Modi Stadium, Ahmedabad.", detailHi: "टूर्नामेंट मार्च के अंत में शुरू हुआ। भारत ने अहमदाबाद के नरेंद्र मोदी स्टेडियम में इंग्लैंड के खिलाफ अपना पहला मैच जीता।" }
    ]

    const importantDays = [
        { date: "March 3", day: "World Wildlife Day", dayHi: "विश्व वन्यजीव दिवस", theme: "Recovering key species for ecosystem restoration", themeHi: "पारिस्थितिकी तंत्र बहाली के लिए प्रमुख प्रजातियों को पुनर्प्राप्त करना", significance: "Commemorates signing of CITES in 1973", significanceHi: "1973 में CITES पर हस्ताक्षर का स्मरण" },
        { date: "March 8", day: "International Women's Day", dayHi: "अंतर्राष्ट्रीय महिला दिवस", theme: "Invest in Women: Accelerate Progress", themeHi: "महिलाओं में निवेश करें: प्रगति को तेज करें", significance: "First observed in 1911", significanceHi: "पहली बार 1911 में मनाया गया" },
        { date: "March 15", day: "World Consumer Rights Day", dayHi: "विश्व उपभोक्ता अधिकार दिवस", theme: "Fair and Responsible AI for Consumers", themeHi: "उपभोक्ताओं के लिए निष्पक्ष और जिम्मेदार AI", significance: "Inspired by President John F. Kennedy's message (1962)", significanceHi: "राष्ट्रपति जॉन एफ. केनेडी के संदेश (1962) से प्रेरित" },
        { date: "March 20", day: "International Day of Happiness", dayHi: "अंतर्राष्ट्रीय खुशी दिवस", theme: "Mindful, Grateful, Kind", themeHi: "जागरूक, आभारी, दयालु", significance: "Established by UN in 2012", significanceHi: "2012 में संयुक्त राष्ट्र द्वारा स्थापित" },
        { date: "March 21", day: "International Day of Forests", dayHi: "अंतर्राष्ट्रीय वन दिवस", theme: "Forests and Innovation", themeHi: "वन और नवाचार", significance: "Established by UN General Assembly in 2012", significanceHi: "2012 में संयुक्त राष्ट्र महासभा द्वारा स्थापित" },
        { date: "March 22", day: "World Water Day", dayHi: "विश्व जल दिवस", theme: "Water for Peace", themeHi: "शांति के लिए जल", significance: "Focuses on importance of freshwater", significanceHi: "मीठे पानी के महत्व पर केंद्रित" },
        { date: "March 23", day: "World Meteorological Day", dayHi: "विश्व मौसम विज्ञान दिवस", theme: "At the Frontline of Climate Action", themeHi: "जलवायु कार्रवाई में सबसे आगे", significance: "Marks establishment of WMO in 1950", significanceHi: "1950 में WMO की स्थापना का स्मरण" },
        { date: "March 24", day: "World TB Day", dayHi: "विश्व टीबी दिवस", theme: "Yes! We can end TB", themeHi: "हाँ! हम टीबी समाप्त कर सकते हैं", significance: "Commemorates Dr. Robert Koch's discovery of TB bacterium in 1882", significanceHi: "1882 में डॉ. रॉबर्ट कोच द्वारा टीबी जीवाणु की खोज का स्मरण" }
    ]

    const filteredNews = activeCategory === "all"
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory)

    const selectedNewsItem = newsItems.find(item => item.id === selectedNews)

    const faqs = [
        { q: "What is the 16th Finance Commission's main recommendation?", qHi: "16वें वित्त आयोग की मुख्य सिफारिश क्या है?", a: "The 16th Finance Commission submitted its interim report focusing on vertical and horizontal devolution of taxes between Centre and States, with emphasis on performance-based incentives for states achieving SDGs.", aHi: "16वें वित्त आयोग ने अपनी अंतरिम रिपोर्ट प्रस्तुत की, जो केंद्र और राज्यों के बीच करों के ऊर्ध्वाधर और क्षैतिज विकेंद्रीकरण पर केंद्रित है, जिसमें SDG प्राप्त करने वाले राज्यों के लिए प्रदर्शन-आधारित प्रोत्साहन पर जोर दिया गया है।" },
        { q: "What is NISAR satellite and why is it important?", qHi: "NISAR उपग्रह क्या है और यह क्यों महत्वपूर्ण है?", a: "NISAR is a joint NASA-ISRO Earth-observing satellite using dual-frequency radar to map global surface changes every 12 days, crucial for disaster monitoring and climate research.", aHi: "NISAR एक संयुक्त NASA-ISRO पृथ्वी-अवलोकन उपग्रह है जो हर 12 दिनों में वैश्विक सतह परिवर्तनों का मानचित्रण करने के लिए दोहरी-आवृत्ति रडार का उपयोग करता है, जो आपदा निगरानी और जलवायु अनुसंधान के लिए महत्वपूर्ण है।" },
        { q: "What is the offline Digital Rupee?", qHi: "ऑफलाइन डिजिटल रुपया क्या है?", a: "The offline Digital Rupee (CBDC-R) allows digital payments without internet using NFC and Bluetooth technology, enabling financial inclusion in rural areas.", aHi: "ऑफलाइन डिजिटल रुपया (CBDC-R) NFC और ब्लूटूथ तकनीक का उपयोग करके इंटरनेट के बिना डिजिटल भुगतान की अनुमति देता है, जो ग्रामीण क्षेत्रों में वित्तीय समावेशन को सक्षम बनाता है।" },
        { q: "How many Ramsar sites does India have after March 2026?", qHi: "मार्च 2026 के बाद भारत के पास कितने रामसर स्थल हैं?", a: "India now has 90 Ramsar sites after adding 5 new wetlands, the largest number in South Asia covering over 1.5 million hectares.", aHi: "5 नई आर्द्रभूमियों को जोड़ने के बाद भारत के पास अब 90 रामसर स्थल हैं, जो दक्षिण एशिया में सबसे बड़ी संख्या है, जो 1.5 मिलियन हेक्टेयर से अधिक क्षेत्र को कवर करती है।" },
        { q: "What were the key outcomes of the QUAD Summit 2026?", qHi: "क्वाड शिखर सम्मेलन 2026 के प्रमुख परिणाम क्या थे?", a: "Launch of QUAD Bio-Manufacturing Hub, IPMDA 2.0 agreement, $50 billion infrastructure fellowship, and emphasis on free and open Indo-Pacific.", aHi: "क्वाड बायो-मैन्युफैक्चरिंग हब का शुभारंभ, IPMDA 2.0 समझौता, 50 बिलियन डॉलर का बुनियादी ढांचा फेलोशिप, और मुक्त और खुले इंडो-पैसिफिक पर जोर।" },
        { q: "Who won the All England Badminton Championships 2026?", qHi: "ऑल इंग्लैंड बैडमिंटन चैंपियनशिप 2026 किसने जीती?", a: "Lakshya Sen won the men's singles title, becoming the first Indian to win two All England titles.", aHi: "लक्ष्य सेन ने पुरुष एकल का खिताब जीता, जो दो ऑल इंग्लैंड खिताब जीतने वाले पहले भारतीय बने।" }
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
                        {language === "en" ? "March" : "मार्च"} <span className="text-primary">2026</span>
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
                            <span>{language === "en" ? "Sports & Awards" : "खेल और पुरस्कार"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "8 Important Days" : "8 महत्वपूर्ण दिवस"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 px-3 py-1.5 rounded-full border">
                            <GraduationCap className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "Exam-Oriented" : "परीक्षा-उन्मुख"}</span>
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
                            <div className="text-2xl font-bold text-primary">5</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Major Topics" : "प्रमुख विषय"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">8</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Important Days" : "महत्वपूर्ण दिवस"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">25+</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Static GK Facts" : "स्थिर सामान्य ज्ञान तथ्य"}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">100+</div>
                            <div className="text-xs text-muted-foreground">{language === "en" ? "Exam Qs Possible" : "परीक्षा प्रश्न संभावित"}</div>
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
                                    <h3 className="font-bold">{language === "en" ? "Important Days: March 2026" : "महत्वपूर्ण दिवस: मार्च 2026"}</h3>
                                </div>
                                <div className="space-y-3">
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

                            {/* Sports & Awards Card */}
                            <div className="rounded-xl border bg-card p-5">
                                <div className="flex items-center gap-2 mb-4">
                                    <Trophy className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold">{language === "en" ? "Sports & Awards" : "खेल और पुरस्कार"}</h3>
                                </div>
                                <div className="space-y-3">
                                    {sportsAwards.map((item, idx) => (
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
                                    {language === "en" ? "March 2026: Key Numbers" : "मार्च 2026: प्रमुख आंकड़े"}
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between"><span>{language === "en" ? "New Ramsar Sites:" : "नए रामसर स्थल:"}</span><span className="font-bold">5</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "Total Ramsar Sites (India):" : "कुल रामसर स्थल (भारत):"}</span><span className="font-bold">90</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "QUAD Fellowship Amount:" : "क्वाड फेलोशिप राशि:"}</span><span className="font-bold">$50 Billion</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "NISAR Mission Cost:" : "NISAR मिशन लागत:"}</span><span className="font-bold">$1.5 Billion</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "CBDC Daily Transactions:" : "CBDC दैनिक लेनदेन:"}</span><span className="font-bold">5 Million+</span></div>
                                    <div className="flex justify-between"><span>{language === "en" ? "States' Tax Share (15th FC):" : "राज्यों का कर हिस्सा (15वां वित्त आयोग):"}</span><span className="font-bold">41%</span></div>
                                </div>
                            </div>

                            {/* Download Card */}
                            {/* <div className="rounded-xl border bg-card p-5 text-center">
                                <Download className="w-8 h-8 text-primary mx-auto mb-3" />
                                <h3 className="font-bold mb-2">{language === "en" ? "Download PDF" : "पीडीएफ डाउनलोड करें"}</h3>
                                <p className="text-xs text-muted-foreground mb-3">
                                    {language === "en" ? "Get the complete March 2026 Current Affairs PDF for offline study" : "ऑफलाइन अध्ययन के लिए संपूर्ण मार्च 2026 करेंट अफेयर्स पीडीएफ प्राप्त करें"}
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
                            {language === "en" ? "Based on March 2026 current affairs" : "मार्च 2026 करेंट अफेयर्स पर आधारित"}
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
                        <PenTool className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                        {language === "en" ? "Test Your Knowledge" : "अपने ज्ञान का परीक्षण करें"}
                    </h2>
                    <p className="text-muted-foreground mb-5">
                        {language === "en" ? "Practice MCQs based on March 2026 current affairs" : "मार्च 2026 करेंट अफेयर्स पर आधारित MCQ का अभ्यास करें"}
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
                        {language === "en" ? "March 2026 Current Affairs for Competitive Exams" : "प्रतियोगी परीक्षाओं के लिए मार्च 2026 करेंट अफेयर्स"}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        {language === "en"
                            ? "This comprehensive current affairs digest covers all important events of March 2026 including 16th Finance Commission recommendations, QUAD Summit 2026, RBI's Offline Digital Rupee, ISRO's NISAR satellite launch, India's 5 new Ramsar sites, and key sports events. Perfect for UPSC, SSC, Banking, Railways, HSSC, UKSSSC, and all state-level competitive exams."
                            : "यह व्यापक करेंट अफेयर्स डाइजेस्ट मार्च 2026 की सभी महत्वपूर्ण घटनाओं को कवर करता है, जिसमें 16वें वित्त आयोग की सिफारिशें, क्वाड शिखर सम्मेलन 2026, RBI का ऑफलाइन डिजिटल रुपया, ISRO का NISAR उपग्रह प्रक्षेपण, भारत के 5 नए रामसर स्थल और प्रमुख खेल आयोजन शामिल हैं। UPSC, SSC, बैंकिंग, रेलवे, HSSC, UKSSSC और सभी राज्य-स्तरीय प्रतियोगी परीक्षाओं के लिए उपयुक्त।"}
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