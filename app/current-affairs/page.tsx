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
    Calendar,
    CheckCircle2,
    HelpCircle,
    ChevronDown,
    Newspaper,
    GraduationCap,
    Search,
    Eye,
    Star,
    Flame,
    Archive,
    Globe2,
    Handshake,
    Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MonthCard {
    month: string
    year: number
    shortName: string
    description: string
    majorTopics: string[]
    importantDays: number
    keyHighlights: string[]
    pdfUrl?: string
    isAvailable: boolean
    isCurrent?: boolean
    featuredTopics?: string[]
}

interface TopicCard {
    id: string
    titleEn: string
    titleHi: string
    category: string
    shortDescEn: string
    shortDescHi: string
    tag: string
    color: string
    mcqCount: number
    icon: "brics" | "sco" | "generic"
}

export default function CurrentAffairsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [showAllMonths, setShowAllMonths] = useState(false)

    const currentYear = 2026

    /* ---------------- Monthly data (unchanged) ---------------- */
    const monthsData: MonthCard[] = [
        {
            month: "September", year: 2026, shortName: "Sep",
            description: "September 2026 current affairs study notes, topic-wise revision and MCQs for HSSC CET, SSC, UKSSSC and other government exams.",
            majorTopics: ["Polity & Governance", "Economy", "International Relations", "Science & Technology", "Environment"],
            importantDays: 6,
            keyHighlights: ["BRICS Summit 2026", "DDU-GKY 2.0", "Vibrant Villages Programme"],
            pdfUrl: undefined, isAvailable: true, isCurrent: true,
            featuredTopics: ["Polity", "Nation & States", "Economic Scenario", "International Relations", "Environment", "Science & Technology"]
        },
        {
            month: "March", year: 2026, shortName: "Mar",
            description: "Complete March 2026 current affairs digest covering 16th Finance Commission, QUAD Summit, RBI Digital Rupee, ISRO NISAR satellite, and 5 new Ramsar sites.",
            majorTopics: ["16th Finance Commission", "QUAD Summit", "Offline Digital Rupee", "NISAR Satellite", "5 New Ramsar Sites"],
            importantDays: 8,
            keyHighlights: ["Lakshya Sen wins All England", "Anupama Kundoo gets Pritzker Prize", "ICC Women's ODI World Cup begins"],
            pdfUrl: "/pdf/march-2026-ca.pdf", isAvailable: true, isCurrent: false,
            featuredTopics: ["National Affairs", "International Relations", "Economy & Banking", "Science & Tech", "Environment"]
        },
        {
            month: "February", year: 2026, shortName: "Feb",
            description: "February 2026 current affairs covering Union Budget 2026-27, Economic Survey, new space missions, and key appointments.",
            majorTopics: ["Union Budget 2026", "Economic Survey", "RBI Monetary Policy", "Defense Deals"],
            importantDays: 6, keyHighlights: ["Budget Highlights", "GDP Projections", "New CJI Appointment"],
            pdfUrl: "/pdf/february-2026-ca.pdf", isAvailable: true, isCurrent: false,
            featuredTopics: ["Economy", "National Affairs", "Appointments"]
        },
        {
            month: "January", year: 2026, shortName: "Jan",
            description: "January 2026 current affairs including Republic Day parade highlights, new space missions, and international summits.",
            majorTopics: ["Republic Day 2026", "Startup India Initiatives", "Defense Exports", "Climate Summit"],
            importantDays: 5, keyHighlights: ["Tableau Winners", "New Space Missions", "Trade Agreements"],
            pdfUrl: "/pdf/january-2026-ca.pdf", isAvailable: true, isCurrent: false,
            featuredTopics: ["National Affairs", "Science & Tech", "International Relations"]
        },
        {
            month: "April", year: 2026, shortName: "Apr",
            description: "April 2026 current affairs will be updated soon. Stay tuned for the latest updates.",
            majorTopics: ["Coming Soon"], importantDays: 7, keyHighlights: ["Under Preparation"],
            pdfUrl: undefined, isAvailable: false, isCurrent: false, featuredTopics: ["Coming Soon"]
        },
        {
            month: "May", year: 2026, shortName: "May",
            description: "May 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"], importantDays: 6, keyHighlights: ["Under Preparation"],
            pdfUrl: undefined, isAvailable: false, isCurrent: false, featuredTopics: ["Coming Soon"]
        },
        {
            month: "June", year: 2026, shortName: "Jun",
            description: "June 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"], importantDays: 5, keyHighlights: ["Under Preparation"],
            pdfUrl: undefined, isAvailable: false, isCurrent: false, featuredTopics: ["Coming Soon"]
        },
        {
            month: "July", year: 2026, shortName: "Jul",
            description: "July 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"], importantDays: 6, keyHighlights: ["Under Preparation"],
            pdfUrl: undefined, isAvailable: false, isCurrent: false, featuredTopics: ["Coming Soon"]
        },
        {
            month: "August", year: 2026, shortName: "Aug",
            description: "August 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"], importantDays: 5, keyHighlights: ["Under Preparation"],
            pdfUrl: undefined, isAvailable: false, isCurrent: false, featuredTopics: ["Coming Soon"]
        },
        {
            month: "October", year: 2026, shortName: "Oct",
            description: "October 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"], importantDays: 7, keyHighlights: ["Under Preparation"],
            pdfUrl: undefined, isAvailable: false, isCurrent: false, featuredTopics: ["Coming Soon"]
        },
        {
            month: "November", year: 2026, shortName: "Nov",
            description: "November 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"], importantDays: 6, keyHighlights: ["Under Preparation"],
            pdfUrl: undefined, isAvailable: false, isCurrent: false, featuredTopics: ["Coming Soon"]
        },
        {
            month: "December", year: 2026, shortName: "Dec",
            description: "December 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"], importantDays: 8, keyHighlights: ["Under Preparation"],
            pdfUrl: undefined, isAvailable: false, isCurrent: false, featuredTopics: ["Coming Soon"]
        },
    ]

    const previousYearMonths: MonthCard[] = [
        {
            month: "December", year: 2025, shortName: "Dec",
            description: "December 2025 current affairs archive - year-end review and important events.",
            majorTopics: ["Year-End Review", "Space Missions 2025", "Key Appointments", "Important Summits"],
            importantDays: 7, keyHighlights: ["ISRO Milestones", "Economic Indicators", "Sports Achievements"],
            pdfUrl: "/pdf/december-2025-ca.pdf", isAvailable: true, isCurrent: false
        },
        {
            month: "November", year: 2025, shortName: "Nov",
            description: "November 2025 current affairs archive - G20 Summit and key developments.",
            majorTopics: ["G20 Summit", "Climate Initiatives", "Trade Agreements", "Space Research"],
            importantDays: 6, keyHighlights: ["International Summits", "Defense Updates", "Banking Reforms"],
            pdfUrl: "/pdf/november-2025-ca.pdf", isAvailable: true, isCurrent: false
        },
        {
            month: "October", year: 2025, shortName: "Oct",
            description: "October 2025 current affairs archive - festive season and major policy announcements.",
            majorTopics: ["Policy Reforms", "Agricultural Schemes", "Digital India Updates", "International Relations"],
            importantDays: 7, keyHighlights: ["Cabinet Approvals", "Economic Data", "Awards & Honors"],
            pdfUrl: "/pdf/october-2025-ca.pdf", isAvailable: true, isCurrent: false
        }
    ]

    /* ---------------- Topic cards (NEW section) ---------------- */
    const topicCards: TopicCard[] = [
        {
            id: "brics-summit-2026",
            titleEn: "18th BRICS Summit 2026",
            titleHi: "18वाँ BRICS शिखर सम्मेलन 2026",
            category: "International Relations",
            shortDescEn: "India hosted the 18th BRICS Summit in New Delhi (12–13 Sept 2026). New Delhi Declaration, 11 members, NDB, and more.",
            shortDescHi: "भारत ने 12–13 सितंबर 2026 को नई दिल्ली में 18वाँ BRICS शिखर सम्मेलन आयोजित किया। नई दिल्ली घोषणा, 11 सदस्य, NDB आदि।",
            tag: "Summit",
            color: "from-indigo-600 to-indigo-800",
            mcqCount: 3,
            icon: "brics",
        },
        {
            id: "sco-summit-2026",
            titleEn: "26th SCO Summit 2026 (Bishkek)",
            titleHi: "26वाँ SCO शिखर सम्मेलन 2026 (बिश्केक)",
            category: "International Relations",
            shortDescEn: "26th SCO Council of Heads of State held in Bishkek, Kyrgyzstan (31 Aug – 1 Sep 2026). Bishkek Declaration, SCO Plus, and more.",
            shortDescHi: "SCO राष्ट्राध्यक्ष परिषद की 26वीं बैठक बिश्केक, किर्गिस्तान (31 अगस्त – 1 सितंबर 2026) में हुई। बिश्केक घोषणा, SCO Plus आदि।",
            tag: "Summit",
            color: "from-emerald-600 to-emerald-800",
            mcqCount: 2,
            icon: "sco",
        },
        {
            id: "nepal-flash-flood-2026",
            titleEn: "Nepal Flash Flood 2026",
            titleHi: "नेपाल फ्लैश फ्लड 2026",
            category: "Disaster Management",
            shortDescEn: "Catastrophic flash flood struck Nepal on 26 Aug 2026 after a glacier collapse and rock-ice avalanche on Mount Langtang Lirung. Rasuwa, Nuwakot, Dhading worst hit.",
            shortDescHi: "26 अगस्त 2026 को नेपाल में ग्लेशियर ढहने और रॉक-आइस हिमस्खलन के बाद विनाशकारी फ्लैश फ्लड। रसुवा, नुवाकोट, धादिंग सबसे अधिक प्रभावित।",
            tag: "Disaster",
            color: "from-sky-600 to-sky-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "nfhs-6",
            titleEn: "NFHS-6 (2023–24)",
            titleHi: "राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण-6",
            category: "Health & Welfare",
            shortDescEn: "MoHFW released NFHS-6. Institutional deliveries 90.6%, household health insurance 60.2%, TFR stable at 2.0, child stunting down to 29.3%.",
            shortDescHi: "MoHFW ने NFHS-6 जारी किया। संस्थागत प्रसव 90.6%, घरेलू स्वास्थ्य बीमा 60.2%, TFR 2.0 पर स्थिर, ठिगनापन 29.3%।",
            tag: "Health",
            color: "from-rose-600 to-rose-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "capf-act-2026",
            titleEn: "CAPF Act, 2026",
            titleHi: "CAPF अधिनियम, 2026",
            category: "Polity & Governance",
            shortDescEn: "Umbrella law for 5 core CAPFs (CRPF, BSF, CISF, ITBP, SSB) — notified 10 April 2026. 100% DG/SDG posts for IPS on deputation; overrides SC 2025 verdict.",
            shortDescHi: "5 प्रमुख CAPF के लिए अम्ब्रेला कानून — 10 अप्रैल 2026 को अधिसूचित। DG/SDG के 100% पद IPS के लिए; SC 2025 के फैसले को ओवरराइड।",
            tag: "Law",
            color: "from-stone-600 to-stone-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "artemis-ii",
            titleEn: "NASA Artemis II Mission",
            titleHi: "नासा आर्टेमिस II मिशन",
            category: "Science & Technology",
            shortDescEn: "First crewed Moon flyby since 1972. Launched 1 April 2026 on SLS; Orion splashed down 10 April in the Pacific. Record 252,756 miles from Earth.",
            shortDescHi: "1972 के बाद पहला मानवयुक्त चंद्र फ्लाईबाई। 1 अप्रैल 2026 को SLS पर लॉन्च; 10 अप्रैल को ओरियन प्रशांत में उतरा। रिकॉर्ड 252,756 मील।",
            tag: "Space",
            color: "from-violet-600 to-violet-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "nato-withdrawal",
            titleEn: "US Withdrawal from NATO?",
            titleHi: "नाटो से अमेरिका की वापसी?",
            category: "International Relations",
            shortDescEn: "Trump called NATO a 'paper tiger'. Article 13 exit takes 1 year after formal notice. NATO HQ Brussels; 32 members; Article 5 invoked only once after 9/11.",
            shortDescHi: "ट्रम्प ने NATO को 'कागजी शेर' कहा। अनुच्छेद 13 के तहत नोटिस के 1 वर्ष बाद वापसी। मुख्यालय ब्रुसेल्स; 32 सदस्य; अनुच्छेद 5 केवल एक बार लागू।",
            tag: "Global",
            color: "from-blue-600 to-blue-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "ircc-india",
            titleEn: "India's Leadership in IRCCs",
            titleHi: "IRCCs में भारत का नेतृत्व",
            category: "Environment & Biodiversity",
            shortDescEn: "India issued 3,561 IRCCs out of 6,288 worldwide (56.63%) under the Nagoya Protocol — world leader in ABS compliance. NBA established 2003.",
            shortDescHi: "भारत ने नागोया प्रोटोकॉल के तहत दुनिया भर के 6,288 में से 3,561 IRCC जारी किए (56.63%) — ABS अनुपालन में विश्व अग्रणी। NBA 2003 में स्थापित।",
            tag: "Biodiversity",
            color: "from-lime-600 to-lime-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "fcra-amendment-2026",
            titleEn: "FCRA Amendment Bill, 2026",
            titleHi: "FCRA संशोधन विधेयक, 2026",
            category: "Polity & Governance",
            shortDescEn: "Introduced March 2026. Creates 'Designated Authority' for NGO assets, reduces max imprisonment from 5 to 1 year, requires Central approval before state police investigations.",
            shortDescHi: "मार्च 2026 में पेश। NGO संपत्तियों के लिए 'नामित प्राधिकरण', कारावास 5 से 1 वर्ष, राज्य पुलिस जांच से पहले केंद्र की मंजूरी अनिवार्य।",
            tag: "Law",
            color: "from-red-600 to-red-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "constitution-131st-amendment",
            titleEn: "Constitution (131st Amendment) Bill, 2026",
            titleHi: "संविधान (131वां संशोधन) विधेयक, 2026",
            category: "Polity & Constitution",
            shortDescEn: "Defeated in Lok Sabha on 17 April 2026 (298 vs 230, short of ~352 Special Majority). Sought to expand LS to 850 seats and fast-track 33% Women's Reservation using 2011 Census.",
            shortDescHi: "17 अप्रैल 2026 को लोकसभा में पराजित (298 बनाम 230, ~352 विशेष बहुमत से कम)। लोकसभा 850 सीटें और 2011 जनगणना से 33% महिला आरक्षण शीघ्र लागू करने का प्रस्ताव।",
            tag: "Constitution",
            color: "from-amber-600 to-amber-800",
            mcqCount: 3,
            icon: "generic",
        },
        {
            id: "posh-act",
            titleEn: "PoSH Act, 2013",
            titleHi: "PoSH अधिनियम, 2013",
            category: "Women & Law",
            shortDescEn: "TCS Nashik case renewed focus on PoSH compliance. ICC mandatory for 10+ employees; 3-month complaint timeline; civil court powers; SHe-Box by MoWCD.",
            shortDescHi: "TCS नासिक मामले ने PoSH अनुपालन पर ध्यान केंद्रित किया। 10+ कर्मचारियों के लिए ICC अनिवार्य; 3 माह शिकायत समय सीमा; सिविल कोर्ट शक्तियां; MoWCD का SHe-Box।",
            tag: "Law",
            color: "from-pink-600 to-pink-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "adi-shankaracharya",
            titleEn: "Adi Shankaracharya & Advaita Vedanta",
            titleHi: "आदि शंकराचार्य और अद्वैत वेदांत",
            category: "Art & Culture",
            shortDescEn: "8th-century philosopher-saint; founder of Advaita Vedanta. Four Mathas, Shannata system, Dasanami Sampradaya, and 108-ft Statue of Oneness at Omkareshwar.",
            shortDescHi: "8वीं सदी के दार्शनिक-संत; अद्वैत वेदांत के संस्थापक। चार मठ, षण्मत प्रणाली, दशनामी संप्रदाय, ओंकारेश्वर में 108 फुट स्टैच्यू ऑफ वननेस।",
            tag: "Culture",
            color: "from-orange-600 to-orange-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "super-el-nino",
            titleEn: "Super El Niño",
            titleHi: "सुपर अल नीनो",
            category: "Geography & Environment",
            shortDescEn: "Global agencies forecast Super El Niño by late 2026 — SST anomaly >2°C. Threatens 1.5°C Paris threshold, weakens Indian monsoon, suppresses Pacific upwelling.",
            shortDescHi: "वैश्विक एजेंसियों ने 2026 के अंत तक सुपर अल नीनो का अनुमान — SST विसंगति >2°C। पेरिस 1.5°C सीमा, भारतीय मानसून कमजोर, प्रशांत अपवेलिंग दबाव।",
            tag: "Climate",
            color: "from-teal-600 to-teal-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "uae-exit-opec",
            titleEn: "UAE Exits OPEC and OPEC+",
            titleHi: "UAE का OPEC और OPEC+ से बाहर होना",
            category: "International Economy",
            shortDescEn: "UAE withdrew from OPEC/OPEC+ effective 1 May 2026. OPEC now has 11 members. UAE is the second Gulf state to exit (after Qatar, 2019). India could benefit from lower oil prices.",
            shortDescHi: "1 मई 2026 से OPEC/OPEC+ से UAE की वापसी। OPEC में अब 11 सदस्य। UAE दूसरा खाड़ी देश (कतर 2019 के बाद)। भारत को कम तेल कीमतों का लाभ।",
            tag: "Energy",
            color: "from-yellow-600 to-yellow-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "ncrb-2024",
            titleEn: "NCRB Crime in India & ADSI 2024",
            titleHi: "NCRB अपराध और ADSI रिपोर्ट 2024",
            category: "Crime & Governance",
            shortDescEn: "Overall crimes fell 6% (58.86 lakh), but cybercrimes rose 17%+ and drug overdose deaths ~50%. Crimes against women fell 1.5%, against STs -23.1%.",
            shortDescHi: "समग्र अपराध 6% घटे (58.86 लाख), लेकिन साइबर अपराध 17%+ और ड्रग ओवरडोज मौतें ~50% बढ़ीं। महिलाओं के विरुद्ध -1.5%, ST के विरुद्ध -23.1%।",
            tag: "Crime",
            color: "from-slate-600 to-slate-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "biodiversity-project",
            titleEn: "MoEFCC–NBA Biodiversity Project",
            titleHi: "MoEFCC–NBA जैव विविधता परियोजना",
            category: "Environment & Biodiversity",
            shortDescEn: "5-year project (2025–2030) with GEF/UNDP, USD 4.88M grant. Focus: Sathyamangalam (TN) and Garo Hills (Meghalaya). Mainstreams biodiversity into Gram Panchayat Development Plans.",
            shortDescHi: "5-वर्षीय परियोजना (2025-2030), GEF/UNDP, USD 4.88M। फोकस: सत्यमंगलम (TN) और गारो हिल्स (मेघालय)। GDPPs में जैव विविधता।",
            tag: "Biodiversity",
            color: "from-green-600 to-green-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "ganga-expressway",
            titleEn: "Ganga Expressway Project",
            titleHi: "गंगा एक्सप्रेसवे परियोजना",
            category: "Infrastructure",
            shortDescEn: "594-km, 12-district, 6-lane greenfield corridor inaugurated 29 April 2026. PPP on DBFOT basis (~₹36,230 cr). 3.5-km IAF emergency airstrip in Shahjahanpur.",
            shortDescHi: "594-किमी, 12 जिले, 6-लेन ग्रीनफील्ड कॉरिडोर, 29 अप्रैल 2026 उद्घाटन। PPP DBFOT (~₹36,230 करोड़)। शाहजहांपुर में 3.5-किमी IAF पट्टी।",
            tag: "Infrastructure",
            color: "from-cyan-600 to-cyan-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "india-ndc-2035",
            titleEn: "India's Updated NDCs 2031–2035",
            titleHi: "भारत के संशोधित NDCs 2031–2035",
            category: "Climate & Environment",
            shortDescEn: "India's updated NDCs: 47% emissions-intensity cut by 2035 (vs 2005); 60% non-fossil power capacity; 3.5–4.0 bn tonnes CO2 carbon sink. Aligned with Net-Zero 2070.",
            shortDescHi: "संशोधित NDC: 2035 तक 47% उत्सर्जन तीव्रता कमी (2005 vs); 60% गैर-जीवाश्म विद्युत; 3.5–4.0 बिलियन टन CO₂ सिंक। Net-Zero 2070।",
            tag: "Climate",
            color: "from-emerald-600 to-emerald-800",
            mcqCount: 2,
            icon: "generic",
        },
        {
            id: "abraham-accords",
            titleEn: "The Abraham Accords",
            titleHi: "अब्राहम अकॉर्ड्स",
            category: "International Relations",
            shortDescEn: "US-mediated Israel-Arab normalization pacts signed Sept 2020 by Israel, UAE and Bahrain; Morocco and Sudan joined later. US urged Saudi, Qatar, Pakistan and others to join.",
            shortDescHi: "अमेरिका की मध्यस्थता में सितंबर 2020 को इजरायल, UAE, बहरीन द्वारा हस्ताक्षरित; मोरक्को और सूडान बाद में शामिल। अमेरिका ने सऊदी, कतर, पाकिस्तान आदि से शामिल होने का आह्वान।",
            tag: "Global",
            color: "from-indigo-600 to-indigo-800",
            mcqCount: 2,
            icon: "generic",
        },
        { id: "ebola-outbreak-2026", titleEn: "Ebola Outbreak — PHEIC", titleHi: "इबोला प्रकोप — PHEIC", category: "Health & Science", shortDescEn: "WHO declared PHEIC for the 2026 Ebola outbreak (Bundibugyo strain) in DRC & Uganda. No approved vaccines for this strain.", shortDescHi: "WHO ने 2026 इबोला प्रकोप (बुंडीबुग्यो) को PHEIC घोषित किया। इस स्ट्रेन के लिए कोई टीका नहीं।", tag: "Health", color: "from-red-600 to-red-800", mcqCount: 2, icon: "generic" },
        { id: "semiconductor-roadmap", titleEn: "Semiconductor Industry Roadmap", titleHi: "सेमीकंडक्टर इंडस्ट्री रोडमैप", category: "Economy & Tech", shortDescEn: "NITI Aayog launched 10-year master plan; USD 120-150 bn value chain target by 2035. ISM 2.0 with ₹1,000 crore.", shortDescHi: "NITI Aayog का 10-वर्षीय मास्टर प्लान; 2035 तक USD 120-150 बिलियन। ISM 2.0 ₹1,000 करोड़।", tag: "Technology", color: "from-blue-600 to-blue-800", mcqCount: 2, icon: "generic" },
        { id: "srs-2024", titleEn: "SRS Statistical Report 2024", titleHi: "SRS सांख्यिकीय रिपोर्ट 2024", category: "Demographics", shortDescEn: "India's TFR down to 1.9 (below replacement); institutional deliveries 95.4%; working-age 66.4%. Six states still above replacement.", shortDescHi: "TFR 1.9 (प्रतिस्थापन से नीचे); संस्थागत प्रसव 95.4%; कार्यशील आयु 66.4%। छह राज्य अभी भी ऊपर।", tag: "Demographics", color: "from-purple-600 to-purple-800", mcqCount: 2, icon: "generic" },
        { id: "india-uae-agreements", titleEn: "India–UAE Agreements 2026", titleHi: "भारत–UAE समझौते 2026", category: "International Relations", shortDescEn: "UAE to store 30M barrels in India's SPRs; 8 Exaflop AI supercomputer; CSL–Drydocks World hub at Vadinar, Gujarat.", shortDescHi: "SPR में 30M बैरल; 8 Exaflop AI सुपरकंप्यूटर; वाडिनार में CSL–Drydocks केंद्र।", tag: "Bilateral", color: "from-teal-600 to-teal-800", mcqCount: 2, icon: "generic" },
        { id: "india-nz-fta", titleEn: "India–New Zealand FTA", titleHi: "भारत–न्यूज़ीलैंड FTA", category: "Trade & Economy", shortDescEn: "Signed 27 April 2026. 100% duty-free Indian exports to NZ; India liberalised 70.03% (excludes dairy); USD 20 bn investment commitment.", shortDescHi: "27 अप्रैल 2026। NZ में 100% शुल्क-मुक्त निर्यात; भारत ने 70.03% उदार (डेयरी छोड़कर); USD 20 बिलियन निवेश।", tag: "Trade", color: "from-cyan-600 to-cyan-800", mcqCount: 2, icon: "generic" },
        { id: "seat-mission", titleEn: "SEHAT Mission", titleHi: "SEHAT मिशन", category: "Health & Agriculture", shortDescEn: "ICMR-ICAR joint mission launched to link agriculture with public health. Promotes millets, biofortification, One Health approach.", shortDescHi: "ICMR-ICAR संयुक्त मिशन — कृषि और सार्वजनिक स्वास्थ्य। मोटे अनाज, बायोफोर्टिफिकेशन, वन हेल्थ।", tag: "Health", color: "from-lime-600 to-lime-800", mcqCount: 2, icon: "generic" },
        { id: "vb-ram-g", titleEn: "VB-G RAM G Act 2025", titleHi: "VB-G RAM G अधिनियम 2025", category: "Governance & Rural", shortDescEn: "Replaces MGNREGA from 1 July 2026. 125 days guarantee (vs 100); 60:40 funding; 60-day agri pause; NMMS mandatory.", shortDescHi: "1 जुलाई 2026 से MGNREGA को प्रतिस्थापित। 125 दिन; 60:40 फंडिंग; 60-दिन कृषि विराम।", tag: "Governance", color: "from-orange-600 to-orange-800", mcqCount: 2, icon: "generic" },
        { id: "somnath-amrut-parv", titleEn: "Somnath Amrut Parv", titleHi: "सोमनाथ अमृत पर्व", category: "Art & Culture", shortDescEn: "75th anniversary of Somnath Temple reconstruction (1951) + 1,000 years since Mahmud Ghaznavi's attack (1026). Māru-Gurjara style.", shortDescHi: "1951 पुनर्निर्माण की 75वीं वर्षगांठ + 1026 हमले के 1,000 वर्ष। मारू-गुर्जर शैली।", tag: "Culture", color: "from-amber-600 to-amber-800", mcqCount: 2, icon: "generic" },
        { id: "coal-gasification", titleEn: "Coal Gasification Scheme", titleHi: "कोयला गैसीकरण योजना", category: "Energy", shortDescEn: "₹37,500 crore scheme. 20% max financial incentive; 30-year coal linkage; 75 MT gasification by 2030; 50,000+ jobs.", shortDescHi: "₹37,500 करोड़ योजना। 20% प्रोत्साहन; 30 वर्ष लिंकेज; 2030 तक 75 MT।", tag: "Energy", color: "from-stone-600 to-stone-800", mcqCount: 2, icon: "generic" },
        { id: "unpaid-domestic-labour", titleEn: "Unpaid Domestic Labour", titleHi: "अवैतनिक घरेलू श्रम", category: "Women & Labour", shortDescEn: "SC ruling: monetise homemakers' work at ₹30,000/month minimum, revised 10% every 3 years. Contributes ~15-17% to GDP.", shortDescHi: "SC: ₹30,000/माह न्यूनतम, 3 वर्ष में 10% वृद्धि। GDP में ~15-17% योगदान।", tag: "Judiciary", color: "from-pink-600 to-pink-800", mcqCount: 2, icon: "generic" },
        { id: "g7-summit-2026", titleEn: "G7 Summit 2026 (Évian)", titleHi: "G7 शिखर सम्मेलन 2026", category: "International Relations", shortDescEn: "52nd G7 Summit in Évian, France. India–Canada announced Raisina Americas Forum. G7 2027 in US. Informal bloc — no secretariat.", shortDescHi: "52वां G7 एवियन में। रायसीना अमेरिकास फोरम। 2027 US में। अनौपचारिक — कोई सचिवालय नहीं।", tag: "Summit", color: "from-indigo-600 to-indigo-800", mcqCount: 2, icon: "generic" },
        { id: "relos", titleEn: "India–Russia RELOS", titleHi: "भारत–रूस RELOS", category: "Defense", shortDescEn: "Reciprocal logistics pact operationalised Jan 2026 (signed Feb 2025). NOT a military alliance; bars permanent bases. LEMOA was India's first.", shortDescHi: "जनवरी 2026 में लागू। सैन्य गठबंधन नहीं; स्थायी अड्डों पर प्रतिबंध। LEMOA पहला।", tag: "Defense", color: "from-red-600 to-red-800", mcqCount: 2, icon: "generic" },
        { id: "kishau-dam", titleEn: "Kishau Multipurpose Dam", titleHi: "किशाउ बहुउद्देशीय बांध", category: "Infrastructure", shortDescEn: "On Tons River (Yamuna tributary). 660 MW hydropower. Six states reached historic consensus — 90% cost by Centre. HP-Uttarakhand border.", shortDescHi: "टोंस नदी पर। 660 MW। छह राज्यों ने सहमति — 90% केंद्र। HP-उत्तराखंड सीमा।", tag: "Infrastructure", color: "from-sky-600 to-sky-800", mcqCount: 2, icon: "generic" },
        { id: "project-ganga", titleEn: "Project GANGA (UP)", titleHi: "प्रोजेक्ट गंगा (UP)", category: "Digital India", shortDescEn: "UP broadband expansion — ~20 lakh households; 8,000-10,000 Digital Service Providers; 1 lakh+ jobs; ₹5 lakh interest-free loans under CM Yuva Scheme.", shortDescHi: "UP ब्रॉडबैंड विस्तार — ~20 लाख घर; 8-10 हजार DSP; 1 लाख+ नौकरी; ₹5 लाख ब्याज-मुक्त।", tag: "Digital", color: "from-blue-600 to-blue-800", mcqCount: 2, icon: "generic" },
        { id: "india-japan-summit", titleEn: "16th India–Japan Summit", titleHi: "16वां भारत-जापान शिखर सम्मेलन", category: "International Relations", shortDescEn: "UNICORN stealth antenna project — first India-Japan defense co-development. NGMP; 1,000 biogas plants; MAHASAGAR doctrine.", shortDescHi: "UNICORN स्टेल्थ एंटीना — पहला रक्षा सह-विकास। NGMP; 1,000 बायोगैस संयंत्र; MAHASAGAR।", tag: "Summit", color: "from-rose-600 to-rose-800", mcqCount: 2, icon: "generic" },
        { id: "sd-report-2026", titleEn: "UN SD Report 2026", titleHi: "UN सतत विकास रिपोर्ट 2026", category: "Sustainable Development", shortDescEn: "None of 17 SDGs on track globally. India 94th (highest ever); SDG 2 most critical. Barbados tops UN-Mi; US last.", shortDescHi: "17 में से कोई भी SDG ट्रैक पर नहीं। भारत 94वां (सर्वश्रेष्ठ); SDG 2 सबसे गंभीर। बारबाडोस प्रथम।", tag: "SDG", color: "from-emerald-600 to-emerald-800", mcqCount: 2, icon: "generic" },
        { id: "isp-index", titleEn: "Index of Services Production", titleHi: "सेवा उत्पादन सूचकांक", category: "Economy", shortDescEn: "India's first monthly index for formal services sector (April 2026). Base 2024-25. Companion to IIP — released by MoSPI/NSO.", shortDescHi: "औपचारिक सेवा क्षेत्र के लिए पहला मासिक सूचकांक (अप्रैल 2026)। आधार 2024-25। MoSPI/NSO।", tag: "Economy", color: "from-violet-600 to-violet-800", mcqCount: 2, icon: "generic" },
        { id: "india-unsc-2028", titleEn: "India UNSC 2028–29 & SHANTI", titleHi: "भारत UNSC 2028-29 & SHANTI", category: "International Relations", shortDescEn: "EAM Jaishankar launched campaign for UNSC non-permanent seat (2028-29). SHANTI = Securing Holistic Advancement through Norms, Trust and Integrity.", shortDescHi: "जयशंकर ने UNSC 2028-29 अभियान लॉन्च किया। SHANTI = Securing Holistic Advancement through Norms, Trust and Integrity।", tag: "Diplomacy", color: "from-sky-600 to-sky-800", mcqCount: 2, icon: "generic" },
  {
    id: "national-honour-amendment-2026",
    titleEn: "Prevention of Insults to National Honour (Amendment) Bill, 2026",
    titleHi: "राष्ट्रीय सम्मान के अपमान की रोकथाम (संशोधन) विधेयक, 2026",
    category: "Polity & Governance",
    shortDescEn: "Passed 30 July 2026; amends Section 3 of the 1971 Act. Extends National Anthem-level protection to Vande Mataram. Punishment up to 3 years; repeat offenders minimum 1 year.",
    shortDescHi: "30 जुलाई 2026 को पारित; 1971 अधिनियम की धारा 3 में संशोधन। वन्दे मातरम् को राष्ट्रगान-स्तर का संरक्षण। दंड अधिकतम 3 वर्ष; दोबारा पर न्यूनतम 1 वर्ष।",
    tag: "Law",
    color: "from-orange-600 to-orange-800",
    mcqCount: 2,
    icon: "generic",
  },
  {
    id: "sarnath-unesco",
    titleEn: "Sarnath — India's 45th UNESCO Site",
    titleHi: "सारनाथ — भारत का 45वां UNESCO स्थल",
    category: "Art & Culture",
    shortDescEn: "Inscribed at the 48th World Heritage Committee Session in Busan (South Korea). Site of Buddha's first sermon (Dharmachakra Pravartana) and the Ashokan Lion Capital — India's National Emblem.",
    shortDescHi: "बुसान (द. कोरिया) में 48वें सत्र में अंकित। बुद्ध का पहला उपदेश (धर्मचक्र प्रवर्तन) और अशोक लायन कैपिटल — भारत का राष्ट्रीय प्रतीक।",
    tag: "Culture",
    color: "from-yellow-600 to-yellow-800",
    mcqCount: 2,
    icon: "generic",
  },
  {
    id: "public-exams-amendment-2026",
    titleEn: "Public Examinations (Prevention of Unfair Means) Amendment Bill, 2026",
    titleHi: "सार्वजनिक परीक्षा (अनुचित साधनों की रोकथाम) संशोधन विधेयक, 2026",
    category: "Polity & Governance",
    shortDescEn: "Passed July 2026 after NEET-UG 2026 leak; assent 31 July 2026. General offences: 5–10 years + ₹50 lakh fine; organised fraud: 7 years + ₹10 crore. Investigation in 60 days, fast-track trial in 3 months.",
    shortDescHi: "NEET-UG 2026 लीक के बाद जुलाई 2026 में पारित; 31 जुलाई 2026 स्वीकृति। सामान्य अपराध: 5–10 वर्ष + ₹50 लाख; संगठित धोखाधड़ी: 7 वर्ष + ₹10 करोड़। जांच 60 दिन, फास्ट-ट्रैक परीक्षण 3 माह।",
    tag: "Law",
    color: "from-blue-600 to-blue-800",
    mcqCount: 2,
    icon: "generic",
  },
  {
    id: "tribunals-reforms-bill-2026",
    titleEn: "Tribunals Reforms Bill, 2026",
    titleHi: "न्यायाधिकरण सुधार विधेयक, 2026",
    category: "Polity & Judiciary",
    shortDescEn: "Passed Aug 2026; proposes to repeal the Tribunals Reforms Act, 2021. Creates a National Tribunals Commission (NTC) with Chairperson + 2 Judicial + 2 Technical Members. Articles 323A/323B remain intact.",
    shortDescHi: "अगस्त 2026 में पारित; न्यायाधिकरण सुधार अधिनियम, 2021 को निरस्त करने का प्रस्ताव। राष्ट्रीय न्यायाधिकरण आयोग (NTC) — अध्यक्ष + 2 न्यायिक + 2 तकनीकी सदस्य। अनुच्छेद 323A/323B यथावत।",
    tag: "Judiciary",
    color: "from-purple-600 to-purple-800",
    mcqCount: 2,
    icon: "generic",
  },
  {
    id: "india-101st-ramsar-site-2026",
    titleEn: "India's 101st Ramsar Site 2026",
    titleHi: "भारत का 101वाँ रामसर स्थल 2026",
    category: "Environment & Biodiversity",
    shortDescEn:
        "Glaw Lake in Arunachal Pradesh became India's 101st Ramsar Site. Covers the Ramsar Convention, India's 100th Ramsar Site (Surha Tal), Montreux Record, Tamil Nadu's Ramsar sites, and all 13 Ramsar sites in Uttar Pradesh. Includes bilingual notes and practice MCQs.",
    shortDescHi:
        "अरुणाचल प्रदेश की ग्लॉ झील भारत का 101वाँ रामसर स्थल बनी। रामसर कन्वेंशन, 100वाँ रामसर स्थल (सुरहा ताल), मॉन्ट्रो रिकॉर्ड, तमिलनाडु के रामसर स्थल और उत्तर प्रदेश के सभी 13 रामसर स्थलों की जानकारी। हिंदी-अंग्रेजी नोट्स और अभ्यास प्रश्न।",
    tag: "Environment",
    color: "from-emerald-600 to-teal-800",
    mcqCount: 1,
    icon: "generic",
},
{
    id: "commonwealth-games-2026",
    titleEn: "23rd Commonwealth Games 2026 – India's Performance",
    titleHi: "23वें राष्ट्रमंडल खेल 2026 – भारत का प्रदर्शन",
    category: "Sports & Current Affairs",
    shortDescEn:
        "Complete coverage of the 23rd Commonwealth Games 2026 in Glasgow, Scotland. India's 39 medals (13 gold, 17 silver, 9 bronze), fourth-place finish, medal standings, gold medallists, boxing achievements, Mirabai Chanu, Neeraj Chopra, and exam-oriented MCQs.",
    shortDescHi:
        "ग्लासगो, स्कॉटलैंड में आयोजित 23वें राष्ट्रमंडल खेल 2026 की विस्तृत जानकारी। भारत के 39 पदक (13 स्वर्ण, 17 रजत, 9 कांस्य), चौथा स्थान, पदक तालिका, स्वर्ण पदक विजेता, मुक्केबाजी की उपलब्धियां, मीराबाई चानू, नीरज चोपड़ा और परीक्षा उपयोगी प्रश्न।",
    tag: "Sports",
    color: "from-blue-600 to-cyan-800",
    mcqCount: 2,
    icon: "generic",
},
{
    id: "padma-awards-2026",
    titleEn: "Padma Awards 2026 – Complete List & Important Facts",
    titleHi: "पद्म पुरस्कार 2026 – संपूर्ण सूची एवं महत्वपूर्ण तथ्य",
    category: "Awards & Honours",
    shortDescEn:
        "Complete exam-focused notes on Padma Awards 2026. Covers 131 awards, including 5 Padma Vibhushan, 13 Padma Bhushan and 113 Padma Shri. Important awardees, Uttar Pradesh recipients, posthumous honours, categories, and bilingual practice MCQs.",
    shortDescHi:
        "पद्म पुरस्कार 2026 के परीक्षा उपयोगी नोट्स। कुल 131 पुरस्कारों में 5 पद्म विभूषण, 13 पद्म भूषण और 113 पद्म श्री। प्रमुख सम्मानित व्यक्ति, उत्तर प्रदेश के पुरस्कार विजेता, मरणोपरांत सम्मान, पुरस्कार श्रेणियां और हिंदी-अंग्रेजी अभ्यास प्रश्न।",
    tag: "Awards",
    color: "from-amber-600 to-orange-800",
    mcqCount: 2,
    icon: "generic",
},
{
    id: "national-international-current-affairs-2026",
    titleEn: "National & International Current Affairs 2026",
    titleHi: "राष्ट्रीय एवं अंतरराष्ट्रीय समसामयिकी 2026",
    category: "National & International Affairs",
    shortDescEn:
        "Complete National & International Current Affairs 2026 covering government schemes, important national events, international summits, economy, defence, science, environment, bilateral agreements, major organizations, and exam-focused facts. Includes 20 pages of detailed notes and 7 practice MCQs.",
    shortDescHi:
        "राष्ट्रीय एवं अंतरराष्ट्रीय समसामयिकी 2026 के संपूर्ण नोट्स। सरकारी योजनाएं, प्रमुख राष्ट्रीय घटनाएं, अंतरराष्ट्रीय शिखर सम्मेलन, अर्थव्यवस्था, रक्षा, विज्ञान, पर्यावरण, द्विपक्षीय समझौते और महत्वपूर्ण संगठन। 20 पृष्ठों की विस्तृत अध्ययन सामग्री और 7 अभ्यास प्रश्न।",
    tag: "Current Affairs",
    color: "from-blue-600 to-indigo-800",
    mcqCount: 7,
    icon: "generic",
},
{
    id: "scheme-2026",
    titleEn: "Important Government Schemes & Initiatives 2026",
    titleHi: "महत्वपूर्ण सरकारी योजनाएँ एवं पहलें 2026",
    category: "Government Schemes & Policies",
    shortDescEn:
        "Complete exam-focused study material covering 35 important government schemes and initiatives of 2026. Includes Mission Rangeen Machhli, PM Surya Sarovar, GOBARdhan, PM RAHAT, Bharat Taxi, SHE-MART, BHAVYA, PRAGATI, Bharat-VISTAAR and more. Detailed notes, key facts, Hindi explanations, and one-liner Q&A for competitive exams.",
    shortDescHi:
        "वर्ष 2026 की 35 महत्वपूर्ण सरकारी योजनाओं और पहलों की विस्तृत अध्ययन सामग्री। मिशन रंगीन मछली, पीएम सूर्य सरोवर, गोबरधन, पीएम राहत, भारत टैक्सी, शी-मार्ट, भाव्य, प्रगति, भारत-विस्तार सहित अन्य प्रमुख योजनाएँ। हिंदी में महत्वपूर्ण तथ्य, विस्तृत नोट्स और प्रतियोगी परीक्षाओं के लिए एक-पंक्ति प्रश्नोत्तर।",
    tag: "Govt Schemes",
    color: "from-emerald-600 to-teal-800",
    mcqCount: 12,
    icon: "generic",
},
{
    id: "science-technology-2026",
    titleEn: "Science & Technology",
    titleHi: "विज्ञान एवं प्रौद्योगिकी",
    category: "Science & Technology",
    shortDescEn:
        "Complete bilingual Science & Technology current affairs coverage for 2026. Includes Truenat HPV-HR Plus, BGP Hijacking & Telegram Ban, Varya AI Model, Project Nimbus, Biochar, High-Energy Medical Cyclotron, Mission Aagaman, Green Urea, I-2SEA Submarine Cable, GAGAN, Eärendil-1, PRAXIS Mission, QDENGA Dengue Vaccine, CAFE-III Norms, NASA Moon Base Programme, Mission MITRA, SMILE Mission, and SFDR Technology. Detailed notes, key facts, Hindi explanations, and interactive MCQs for UPSC, SSC, Banking, HSSC, UKSSSC and other competitive exams.",
    shortDescHi:
        "वर्ष 2026 के विज्ञान एवं प्रौद्योगिकी विषय की पूर्ण द्विभाषी करेंट अफेयर्स सामग्री। ट्रूनेट HPV-HR प्लस, BGP हाईजैकिंग और टेलीग्राम प्रतिबंध, वर्या AI मॉडल, प्रोजेक्ट निम्बस, बायोचार, हाई-एनर्जी मेडिकल साइक्लोट्रॉन, मिशन आगमन, ग्रीन यूरिया, I-2SEA सबमरीन केबल, गगन, एसडिल-1, PRAXIS मिशन, क्यूडेंगा डेंगू वैक्सीन, CAFE-III मानक, NASA मून बेस कार्यक्रम, मिशन मित्रा, SMILE मिशन और SFDR तकनीक शामिल हैं। हिंदी में महत्वपूर्ण तथ्य, विस्तृत नोट्स और प्रतियोगी परीक्षाओं के लिए इंटरैक्टिव MCQs।",
    tag: "Science & Tech",
    color: "from-emerald-600 to-teal-800",
    mcqCount: 18,
    icon: "generic",
},
{
    id: "defence",
    titleEn: "Defence Current Affairs",
    titleHi: "रक्षा समसामयिकी",
    category: "Defence & Security",
    shortDescEn:
        "Complete bilingual Defence & Security current affairs coverage for 2026. Includes Netra AEW&C System, advanced missile systems, RS-28 Sarmat, DF-41, Airbus C-295 Military Transport Aircraft, Indian Navy warships, indigenous defence technologies, Suryaastra Rocket Launching System, TARA Glide Weapon, tri-service military exercises, CORE Programme 2026, ORV Sagar Manthan, and important DRDO developments. Detailed notes, key facts, Hindi explanations, and exam-oriented questions and answers for UPSC, SSC, Banking, HSSC, UKSSSC and other competitive exams.",
    shortDescHi:
        "वर्ष 2026 के रक्षा एवं सुरक्षा विषय की संपूर्ण द्विभाषी करेंट अफेयर्स सामग्री। इसमें नेत्र AEW&C प्रणाली, उन्नत मिसाइल प्रणालियाँ, RS-28 सरमत, DF-41, एयरबस C-295 सैन्य परिवहन विमान, भारतीय नौसेना के युद्धपोत, स्वदेशी रक्षा तकनीक, सूर्यास्त्र रॉकेट लॉन्चिंग प्रणाली, तारा (TARA) ग्लाइड वेपन, तीनों सेनाओं के संयुक्त सैन्य अभ्यास, CORE कार्यक्रम 2026, ORV सागर मंथन और DRDO से संबंधित महत्वपूर्ण विकास शामिल हैं। हिंदी में महत्वपूर्ण तथ्य, विस्तृत नोट्स तथा UPSC, SSC, बैंकिंग, HSSC, UKSSSC और अन्य प्रतियोगी परीक्षाओं के लिए महत्वपूर्ण प्रश्नोत्तर उपलब्ध हैं।",
    tag: "Defence & Security",
    color: "from-blue-700 to-slate-900",
    mcqCount: 18,
    icon: "generic",
},
{
    id: "awards-honours-2026",
    titleEn: "Awards & Honours",
    titleHi: "पुरस्कार एवं सम्मान",
    category: "Awards & Honours",
    shortDescEn:
        "Complete bilingual Awards & Honours current affairs coverage for 2026. Includes The Earth Prize 2026, FAO Soil Farmer Hero Award, National Awards for e-Governance, Indian Athletics Awards, 72nd National Film Awards, 60th Jnanpith Award, COSPAR Vikram Sarabhai Medal, Kalinga Ratna Award, Women Empowerment Trailblazer Award, Tyler Prize, Golden Globe Awards, Global Teacher Prize, UNESCO Asia-Pacific Heritage Conservation Awards, BAFTA Awards, BBC Indian Sportswoman of the Year, Sansad Ratna Awards, Abel Prize, Lata Deenanath Mangeshkar Award, Lokmanya Tilak National Award, USISPF Leadership Award, and UNESCO World Press Freedom Prize. Detailed notes, award winners, key facts, Hindi explanations, and exam-oriented questions and answers for UPSC, SSC, Banking, HSSC, UKSSSC and other competitive exams.",
    shortDescHi:
        "वर्ष 2026 के पुरस्कार एवं सम्मान विषय की संपूर्ण द्विभाषी करेंट अफेयर्स सामग्री। इसमें द अर्थ प्राइज 2026, FAO सॉइल फार्मर हीरो अवॉर्ड, राष्ट्रीय ई-गवर्नेंस पुरस्कार, भारतीय एथलेटिक्स पुरस्कार, 72वें राष्ट्रीय फिल्म पुरस्कार, 60वाँ ज्ञानपीठ पुरस्कार, कॉसपार विक्रम साराभाई पदक, कलिंग रत्न पुरस्कार, महिला सशक्तिकरण ट्रेलब्लेजर पुरस्कार, टायलर पुरस्कार, गोल्डन ग्लोब पुरस्कार, ग्लोबल टीचर प्राइज, यूनेस्को एशिया-प्रशांत विरासत संरक्षण पुरस्कार, बाफ्टा पुरस्कार, बीबीसी इंडियन स्पोर्ट्सवुमन ऑफ द ईयर, संसद रत्न पुरस्कार, एबेल पुरस्कार, लता दीनानाथ मंगेशकर पुरस्कार, लोकमान्य तिलक राष्ट्रीय पुरस्कार, USISPF लीडरशिप अवॉर्ड और यूनेस्को विश्व प्रेस स्वतंत्रता पुरस्कार शामिल हैं। पुरस्कार विजेताओं की जानकारी, महत्वपूर्ण तथ्य, विस्तृत हिंदी नोट्स तथा UPSC, SSC, बैंकिंग, HSSC, UKSSSC और अन्य प्रतियोगी परीक्षाओं के लिए महत्वपूर्ण प्रश्नोत्तर उपलब्ध हैं।",
    tag: "Awards & Honours",
    color: "from-amber-500 to-orange-700",
    mcqCount: 6,
    icon: "generic",
},

{
    id: "sports",
    titleEn: "Sports Current Affairs",
    titleHi: "खेल समसामयिकी",
    category: "Sports",
    shortDescEn:
        "Complete bilingual Sports current affairs coverage for 2026. Includes Grand Slam Tennis Championships, ICC Men's T20 World Cup, ICC Under-19 Cricket World Cup, Women's T20 World Cup, Women's T20 Asia Cup, ADCA Deaf Cricket Asia Cup, Vijay Hazare Trophy, Ranji Trophy, IPL 2026, SAFF Women's Championship, TIME100 Sports, FIFA World Cup, Khelo India Tribal Games, Khelo India Winter Games, Squash World Cup, FIH Men's Junior Hockey World Cup, World Yogasana Championship, and Singapore Open Badminton. Detailed notes, winners, runners-up, records, Hindi explanations, and interactive MCQs for UPSC, SSC, Banking, HSSC, UKSSSC and other competitive exams.",
    shortDescHi:
        "वर्ष 2026 की खेल समसामयिकी की संपूर्ण द्विभाषी अध्ययन सामग्री। इसमें ग्रैंड स्लैम टेनिस, आईसीसी पुरुष टी20 विश्व कप, अंडर-19 क्रिकेट विश्व कप, महिला टी20 विश्व कप, महिला एशिया कप, बधिर क्रिकेट एशिया कप, विजय हज़ारे ट्रॉफी, रणजी ट्रॉफी, आईपीएल 2026, सैफ महिला चैंपियनशिप, फीफा विश्व कप, खेलो इंडिया जनजातीय खेल, शीतकालीन खेल, स्क्वैश विश्व कप, जूनियर हॉकी विश्व कप, विश्व योगासन चैंपियनशिप और सिंगापुर ओपन बैडमिंटन शामिल हैं। विजेता, उपविजेता, रिकॉर्ड, महत्वपूर्ण तथ्य, हिंदी नोट्स और प्रतियोगी परीक्षाओं के लिए इंटरैक्टिव MCQs उपलब्ध हैं।",
    tag: "Sports",
    color: "from-blue-600 to-indigo-800",
    mcqCount: 6,
    icon: "generic",
},

{
    id: "indexes-rankings-reports-2026",
    titleEn: "Indexes, Rankings & Reports",
    titleHi: "सूचकांक, रैंकिंग एवं रिपोर्ट",
    category: "Indexes & Reports",
    shortDescEn:
        "Complete bilingual Indexes, Rankings & Reports current affairs coverage for 2026. Includes Global Peace Index, World Happiness Report, Global Terrorism Index, Global Gender Gap Report, Travel & Tourism Development Index, Energy Transition Index, Environmental Performance Index, World Press Freedom Index, Corruption Perceptions Index, Global Firepower Ranking, Global Liveability Index, QS World University Rankings, India's Next Growth Frontier Report, SOFI Report, World Air Quality Report, Swachh Vayu Sarvekshan, SIPRI Arms Transfers and Military Expenditure Reports, World's Cities Report, Investment Friendliness Index, LEADS 2025, Panchayat Advancement Index, Women and Men in India, Export Preparedness Index and Fiscal Health Index. India rankings, top countries, key findings, Hindi notes and interactive MCQs for UPSC, SSC, Banking, HSSC, UKSSSC and other competitive exams.",
    shortDescHi:
        "वर्ष 2026 के सूचकांक, रैंकिंग एवं रिपोर्ट विषय की संपूर्ण द्विभाषी करेंट अफेयर्स सामग्री। इसमें वैश्विक शांति सूचकांक, विश्व प्रसन्नता रिपोर्ट, आतंकवाद सूचकांक, लैंगिक अंतर रिपोर्ट, यात्रा एवं पर्यटन विकास सूचकांक, ऊर्जा संक्रमण सूचकांक, पर्यावरण प्रदर्शन सूचकांक, विश्व प्रेस स्वतंत्रता सूचकांक, भ्रष्टाचार धारणा सूचकांक, सैन्य शक्ति रैंकिंग, वैश्विक रहने-योग्यता सूचकांक, क्यूएस विश्वविद्यालय रैंकिंग, खाद्य सुरक्षा एवं पोषण रिपोर्ट, विश्व वायु गुणवत्ता रिपोर्ट, स्वच्छ वायु सर्वेक्षण, सिपरी रिपोर्ट, निवेश अनुकूलता सूचकांक, लीड्स रिपोर्ट, पंचायत उन्नति सूचकांक, निर्यात तैयारी सूचकांक और राजकोषीय स्वास्थ्य सूचकांक शामिल हैं। भारत की रैंक, शीर्ष देश, प्रमुख निष्कर्ष, महत्वपूर्ण हिंदी नोट्स और प्रतियोगी परीक्षाओं के लिए इंटरैक्टिव MCQs उपलब्ध हैं।",
    tag: "Indexes & Reports",
    color: "from-indigo-600 to-violet-800",
    mcqCount: 8,
    icon: "generic",
},

{
    id: "important-days-themes-2026",
    titleEn: "Important Days & Themes",
    titleHi: "महत्वपूर्ण दिवस एवं थीम",
    category: "Important Days",
    shortDescEn:
        "Complete bilingual Important Days & Themes current affairs coverage for 2026. Includes Pravasi Bharatiya Divas, World Hindi Day, National Youth Day, Republic Day, World Wetlands Day, National Science Day, International Women's Day, World Water Day, World Health Day, Earth Day, National Panchayati Raj Day, World Environment Day, International Yoga Day, National Space Day, National Sports Day, Hindi Diwas, World Ozone Day, Ayurveda Day and World Tourism Day. Features month-wise dates, 2026 themes, historical significance, Books & Authors, Hindi notes, and interactive MCQs for UPSC, SSC, Banking, HSSC, UKSSSC and other competitive exams.",
    shortDescHi:
        "वर्ष 2026 के महत्वपूर्ण दिवस एवं थीम विषय की संपूर्ण द्विभाषी करेंट अफेयर्स सामग्री। इसमें प्रवासी भारतीय दिवस, विश्व हिंदी दिवस, राष्ट्रीय युवा दिवस, गणतंत्र दिवस, विश्व आर्द्रभूमि दिवस, राष्ट्रीय विज्ञान दिवस, अंतरराष्ट्रीय महिला दिवस, विश्व जल दिवस, विश्व स्वास्थ्य दिवस, पृथ्वी दिवस, राष्ट्रीय पंचायती राज दिवस, विश्व पर्यावरण दिवस, अंतरराष्ट्रीय योग दिवस, राष्ट्रीय अंतरिक्ष दिवस, राष्ट्रीय खेल दिवस, हिंदी दिवस, विश्व ओज़ोन दिवस, आयुर्वेद दिवस और विश्व पर्यटन दिवस शामिल हैं। जनवरी से सितंबर तक की महत्वपूर्ण तिथियाँ, वर्ष 2026 की थीम, ऐतिहासिक महत्व, पुस्तकें एवं लेखक, हिंदी नोट्स और प्रतियोगी परीक्षाओं के लिए इंटरैक्टिव MCQs उपलब्ध हैं।",
    tag: "Important Days",
    color: "from-rose-600 to-pink-800",
    mcqCount: 8,
    icon: "generic",
},

{
    id: "persons-in-news-2026",
    titleEn: "Persons in News",
    titleHi: "चर्चित व्यक्ति",
    category: "Persons in News",
    shortDescEn:
        "Complete bilingual Persons in News current affairs coverage for 2026. Includes important appointments, defence leadership, government officials, international political leaders, notable firsts, and obituary profiles. Covers Jeetendra Mishra, Shakti Sharma, Dhiraj Seth, Krishna Swaminathan, Saurabh Vijay, Vivek Aggarwal, Professor B. Ravindran, Kunal Shah, Bhawana Kanth, Anurag Jain, Varsha Ashok Aglawe, Kanishka Narayan, Kanchan Devi, Professor Bimal N. Patel, Menaka Guruswamy, Sanae Takaichi, Andy Burnham, Asha Bhosle, Teejan Bai and Madhav Gadgil. Detailed notes, appointments, achievements, Hindi explanations and interactive MCQs for UPSC, SSC, Banking, HSSC, UKSSSC and other competitive exams.",
    shortDescHi:
        "वर्ष 2026 के चर्चित व्यक्तियों की संपूर्ण द्विभाषी करेंट अफेयर्स सामग्री। इसमें महत्वपूर्ण नियुक्तियाँ, रक्षा नेतृत्व, सरकारी अधिकारी, अंतरराष्ट्रीय राजनीतिक नेता, प्रथम उपलब्धियाँ और निधन से जुड़े व्यक्तित्व शामिल हैं। जितेंद्र मिश्रा, शक्ति शर्मा, धीरज सेठ, कृष्ण स्वामीनाथन, सौरभ विजय, विवेक अग्रवाल, प्रोफेसर बी. रवींद्रन, कुणाल शाह, भावना कंठ, अनुराग जैन, वर्षा अशोक आगलावे, कनिष्क नारायण, कंचन देवी, प्रोफेसर बिमल एन. पटेल, मेनका गुरुस्वामी, सनाए ताकाइची, एंडी बर्नहम, आशा भोसले, तीजन बाई और माधव गाडगिल सहित प्रमुख व्यक्तियों की जानकारी उपलब्ध है। नियुक्तियाँ, उपलब्धियाँ, महत्वपूर्ण तथ्य, हिंदी नोट्स और प्रतियोगी परीक्षाओं के लिए इंटरैक्टिव MCQs शामिल हैं।",
    tag: "Persons in News",
    color: "from-teal-600 to-cyan-800",
    mcqCount: 8,
    icon: "generic",
},

{
    id: "one-liner-current-affairs-2026",
    titleEn: "One-Liner Current Affairs Q&A",
    titleHi: "एक-पंक्ति करेंट अफेयर्स प्रश्नोत्तर",
    category: "Current Affairs Q&A",
    shortDescEn:
        "Practice 121 one-liner current affairs questions and answers from 2026. Covers government schemes, important appointments, sports, awards, science and technology, banking, RBI policies, international relations, geography, environment, defence, education, and economic developments. Features searchable questions, instant answer reveal, page-wise filtering, and interactive bilingual practice MCQs for UPSC, SSC, Banking, HSSC, UKSSSC and other competitive exams.",
    shortDescHi:
        "वर्ष 2026 के 121 एक-पंक्ति करेंट अफेयर्स प्रश्नोत्तर का अभ्यास करें। इसमें सरकारी योजनाएँ, महत्वपूर्ण नियुक्तियाँ, खेल, पुरस्कार, विज्ञान एवं प्रौद्योगिकी, बैंकिंग, आरबीआई नीतियाँ, अंतरराष्ट्रीय संबंध, भूगोल, पर्यावरण, रक्षा, शिक्षा और आर्थिक घटनाक्रम शामिल हैं। प्रश्न खोजने की सुविधा, उत्तर देखने का विकल्प, पृष्ठवार फ़िल्टर और प्रतियोगी परीक्षाओं के लिए द्विभाषी अभ्यास MCQs उपलब्ध हैं। मुख्य प्रश्न बैंक अंग्रेज़ी में है।",
    tag: "Current Affairs Q&A",
    color: "from-purple-600 to-fuchsia-800",
    mcqCount: 6,
    icon: "generic",
},

    ]

    const filteredMonths = monthsData.filter(month =>
        month.month.toLowerCase().includes(searchQuery.toLowerCase()) ||
        month.majorTopics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    const displayedMonths = showAllMonths ? filteredMonths : filteredMonths.slice(0, 6)

    const totalAvailable = monthsData.filter(m => m.isAvailable).length
    const totalTopics = monthsData.reduce((acc, m) => acc + m.majorTopics.length, 0)
    const totalImportantDays = monthsData.reduce((acc, m) => acc + m.importantDays, 0)

    const renderTopicIcon = (icon: TopicCard["icon"]) => {
        if (icon === "brics") return <Globe2 className="w-5 h-5" />
        if (icon === "sco") return <Handshake className="w-5 h-5" />
        return <Layers className="w-5 h-5" />
    }

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* ================= HERO ================= */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" />
                        Monthly Current Affairs Digest
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Current Affairs
                        <span className="text-primary"> 2026</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        Complete month-wise current affairs for competitive examinations.
                        <strong className="text-foreground"> Exam-oriented analysis, static GK, and practice questions</strong> for UPSC, SSC, Banking, HSSC, UKSSSC & more.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span><strong>12 Months</strong> Available</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span><strong>{totalTopics}+</strong> Major Topics</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Clock className="w-4 h-4 text-primary" />
                            <span><strong>{totalImportantDays}+</strong> Important Days</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/current-affairs/september-2026">
                            <Button size="lg" className="cursor-pointer gap-2 bg-primary hover:bg-primary/90">
                                <Newspaper className="w-4 h-4" />
                                Latest: September 2026 Digest
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/mock-test">
                            <Button variant="outline" size="lg" className="cursor-pointer gap-2">
                                <Target className="w-4 h-4" />
                                Practice Quiz
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="py-8 px-4 border-y bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">{totalAvailable}</div>
                            <div className="text-xs text-muted-foreground">Months Available</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">50+</div>
                            <div className="text-xs text-muted-foreground">Major Topics</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">80+</div>
                            <div className="text-xs text-muted-foreground">Important Days</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">500+</div>
                            <div className="text-xs text-muted-foreground">Practice Questions</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= 🔥 NEW: CURRENT AFFAIRS BY TOPIC ================= */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-muted/10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-indigo-100">
                            <Layers className="w-5 h-5 text-indigo-600" />
                        </div>
                        <h2 className="text-2xl font-bold">Current Affairs by Topic</h2>
                        <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                            Bilingual + MCQs
                        </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6">
                        Deep-dive topic digests with bilingual content and interactive practice MCQs.
                        Click any card to read the full topic.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topicCards.map((card) => (
                            <Link
                                key={card.id}
                                href={`/current-affairs/by-topic/${card.id}`}
                                className="group block focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-2xl"
                            >
                                <div className="rounded-2xl border bg-card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:border-indigo-300 h-full flex flex-col">
                                    {/* Header */}
                                    <div className={`bg-gradient-to-r ${card.color} p-4 text-white`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="p-1.5 bg-white/20 rounded-lg">
                                                    {renderTopicIcon(card.icon)}
                                                </div>
                                                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                                                    {card.category}
                                                </span>
                                            </div>
                                            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                                                {card.tag}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold leading-snug">{card.titleEn}</h3>
                                        <p className="text-white/80 text-sm mt-0.5">{card.titleHi}</p>
                                    </div>

                                    {/* Body */}
                                    <div className="p-5 flex flex-col flex-1">
                                        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                                            {card.shortDescEn}
                                        </p>
                                        <p className="text-xs text-muted-foreground/80 mb-4 line-clamp-2">
                                            {card.shortDescHi}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between pt-3 border-t">
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                <HelpCircle className="w-3.5 h-3.5" />
                                                <span>{card.mcqCount} MCQs</span>
                                            </div>
                                            <span className="text-indigo-600 text-sm font-medium group-hover:underline flex items-center gap-1">
                                                Read Topic <ChevronRight className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SEARCH & FILTER ================= */}
            <section className="py-6 px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by month or topic (e.g., 'Budget', 'Finance Commission', 'NISAR')..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border bg-card focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>
                </div>
            </section>

            {/* ================= CURRENT YEAR MONTHS ================= */}
            <section className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-primary/10">
                            <Flame className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{currentYear} Current Affairs</h2>
                        <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">Latest Updates</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedMonths.map((month, index) => (
                            <Link
                                href={month.isAvailable ? `/current-affairs/${month.month.toLowerCase()}-${month.year}` : "#"}
                                key={index}
                                className={`block group ${!month.isAvailable ? "cursor-not-allowed opacity-60" : ""}`}
                                onClick={(e) => !month.isAvailable && e.preventDefault()}
                            >
                                <div className={`rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${month.isAvailable ? "hover:border-primary/50" : ""}`}>
                                    <div className={`p-4 ${month.isCurrent ? "bg-gradient-to-r from-primary to-primary/80" : "bg-gradient-to-r from-slate-700 to-slate-800"} text-white`}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold">{month.month}</h3>
                                                <p className="text-white/80 text-sm">{month.year}</p>
                                            </div>
                                            {month.isCurrent && (
                                                <span className="text-xs bg-white/20 px-2 py-1 rounded-full flex items-center gap-1">
                                                    <Star className="w-3 h-3" /> Current
                                                </span>
                                            )}
                                            {month.isAvailable && !month.isCurrent && (
                                                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Available</span>
                                            )}
                                            {!month.isAvailable && (
                                                <span className="text-xs bg-white/20 px-2 py-1 rounded-full flex items-center gap-1">
                                                    <Clock className="w-3 h-3" /> Coming Soon
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{month.description}</p>
                                        <div className="mb-4">
                                            <h4 className="text-xs font-semibold text-muted-foreground mb-2">MAJOR TOPICS</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {month.majorTopics.slice(0, 3).map((topic, idx) => (
                                                    <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{topic}</span>
                                                ))}
                                                {month.majorTopics.length > 3 && (
                                                    <span className="text-xs bg-muted px-2 py-0.5 rounded-full">+{month.majorTopics.length - 3}</span>
                                                )}
                                            </div>
                                        </div>
                                        {month.keyHighlights && month.keyHighlights.length > 0 && (
                                            <div className="mb-4">
                                                <h4 className="text-xs font-semibold text-muted-foreground mb-2">KEY HIGHLIGHTS</h4>
                                                <div className="space-y-1">
                                                    {month.keyHighlights.slice(0, 2).map((highlight, idx) => (
                                                        <div key={idx} className="flex items-start gap-1.5 text-xs">
                                                            <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                                            <span className="text-muted-foreground">{highlight}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex items-center justify-between pt-3 border-t">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Calendar className="w-3 h-3" />
                                                <span>{month.importantDays} Important Days</span>
                                            </div>
                                            {month.isAvailable ? (
                                                <span className="text-primary text-sm font-medium group-hover:underline flex items-center gap-1">
                                                    Read Digest <ChevronRight className="w-3 h-3" />
                                                </span>
                                            ) : (
                                                <span className="text-muted-foreground text-sm flex items-center gap-1">
                                                    <Clock className="w-3 h-3" /> Coming Soon
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredMonths.length > 6 && (
                        <div className="text-center mt-8">
                            <Button
                                variant="outline"
                                onClick={() => setShowAllMonths(!showAllMonths)}
                                className="cursor-pointer gap-2"
                            >
                                {showAllMonths ? (
                                    <>Show Less <ChevronDown className="w-4 h-4 rotate-180" /></>
                                ) : (
                                    <>Show All {filteredMonths.length} Months <ChevronDown className="w-4 h-4" /></>
                                )}
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* ================= PREVIOUS YEAR ARCHIVE ================= */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                            <Archive className="w-5 h-5 text-amber-600" />
                        </div>
                        <h2 className="text-2xl font-bold">Previous Year Archives</h2>
                        <span className="text-xs bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-0.5 rounded-full">2025</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {previousYearMonths.map((month, index) => (
                            <Link href={month.isAvailable ? `/current-affairs/${month.month.toLowerCase()}-${month.year}` : "#"} key={index} className="block group">
                                <div className="rounded-2xl border bg-card overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-amber-300">
                                    <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-4 text-white">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold">{month.month}</h3>
                                                <p className="text-white/80 text-sm">{month.year}</p>
                                            </div>
                                            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Archive</span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{month.description}</p>
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {month.majorTopics.slice(0, 2).map((topic, idx) => (
                                                <span key={idx} className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full">{topic}</span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between pt-2 border-t">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Calendar className="w-3 h-3" />
                                                <span>{month.importantDays} Days</span>
                                            </div>
                                            <span className="text-amber-600 text-sm font-medium group-hover:underline flex items-center gap-1">
                                                View Archive <ChevronRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHY ================= */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                        <GraduationCap className="w-4 h-4" />
                        Why Our Current Affairs Digest?
                    </div>
                    <h2 className="text-3xl font-bold mb-6">Comprehensive & Exam-Oriented</h2>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="text-center p-4">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-1">In-Depth Analysis</h3>
                            <p className="text-sm text-muted-foreground">Detailed coverage with background, impact assessment, and static GK</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                                <Target className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-1">Exam Significance</h3>
                            <p className="text-sm text-muted-foreground">Prelims & Mains oriented approach with possible question areas</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-1">Important Days</h3>
                            <p className="text-sm text-muted-foreground">Complete list of important days with themes and significance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Common Questions About Current Affairs</h2>
                        <p className="text-muted-foreground">Your guide to effective current affairs preparation</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "How should I prepare current affairs for competitive exams?", a: "Focus on the last 6-8 months with special attention to government schemes, international relations, economic developments, and state-specific news. Our monthly digests provide exam-oriented analysis." },
                            { q: "Which months are most important for current affairs?", a: "The last 6 months before your exam are most important. For exams in mid-2026, focus on January-June 2026 with special attention to Budget, Economic Survey, and major international summits." },
                            { q: "Are these digests useful for state exams like HSSC and UKSSSC?", a: "Yes, our digests cover both national and state-level news. For state exams, we include state-specific current affairs and important state government schemes." },
                            { q: "How many questions can I expect from current affairs?", a: "In most competitive exams, current affairs constitute 15-25% of the general awareness section. This can vary from 10-30 questions depending on the exam." },
                            { q: "Do you provide practice questions?", a: "Yes, each monthly digest includes practice MCQs. You can also attempt our full-length current affairs quizzes in the mock test section." }
                        ].map((faq, idx) => (
                            <div key={idx} className="rounded-xl border bg-card p-5">
                                <h3 className="font-semibold text-base md:text-lg mb-2">{faq.q}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Ready to Master Current Affairs?</h2>
                    <p className="text-muted-foreground mb-5">Practice with our topic-wise quizzes and full-length mock tests</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/mock-test">
                            <Button size="lg" className="gap-2 cursor-pointer">
                                Start Practice Quiz <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/current-affairs/by-topic/brics-summit-2026">
                            <Button variant="outline" size="lg" className="gap-2 cursor-pointer">
                                Read BRICS Topic <Eye className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= SEO FOOTER ================= */}
            <section className="py-8 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-lg font-semibold mb-2">Monthly Current Affairs for Competitive Exams 2026</h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        Complete month-wise current affairs coverage for 2026 including September, March, February, January and previous year archives.
                        Each digest covers national affairs, international relations, economy & banking, science & technology, environment & ecology,
                        sports, awards, appointments, and important days with exam-oriented analysis for UPSC, SSC, Banking, Railways,
                        HSSC (Haryana CET), UKSSSC (Uttarakhand), and all state-level competitive examinations.
                    </p>
                    <p className="text-xs text-muted-foreground mt-3">
                        © 2025-26 CET TEST | Current affairs content for educational purposes | Source: CET TEST editorial team
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    )
}