"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    BookOpen,
    Calendar,
    ChevronRight,
    Globe2,
    Handshake,
    Layers,
    Newspaper,
    Search,
    Sparkles,
    HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

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

/** The only published month represented on this landing page. */
const septemberDigest = {
    title: "September 2026",
    url: "/current-affairs/september-2026",
    description: "September 2026 current affairs study notes, topic-wise revision and MCQs for HSSC CET, SSC, UKSSSC and other government exams.",
    topics: ["Polity", "Nation & States", "Economic Scenario", "International Relations", "Environment", "Science & Technology"],
}

export default function CurrentAffairsPage() {
    const [searchQuery, setSearchQuery] = useState("")

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
    id: "ramsar-sites-2026",
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
    id: "science-technology",
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
    const query = searchQuery.trim().toLocaleLowerCase()
    const filteredTopics = topicCards.filter((card) =>
        [card.titleEn, card.titleHi, card.category, card.shortDescEn, card.shortDescHi, card.tag]
            .some((value) => value.toLocaleLowerCase().includes(query))
    )

    const renderTopicIcon = (icon: TopicCard["icon"]) => {
        if (icon === "brics") return <Globe2 className="h-5 w-5" />
        if (icon === "sco") return <Handshake className="h-5 w-5" />
        return <Layers className="h-5 w-5" />
    }

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Current affairs collections and state-wise editorial preview. */}
            <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background px-4 pb-16 pt-28 sm:px-6 lg:px-8 md:pb-20 md:pt-36">
                <div className="pointer-events-none absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
                <div className="pointer-events-none absolute bottom-10 right-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative z-10 mx-auto max-w-5xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        <Sparkles className="h-4 w-4" />
                        Current Affairs Study Hub
                    </div>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        Current Affairs <span className="text-primary">2026</span>
                    </h1>
                    <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                        Explore bilingual, exam-oriented current affairs <strong className="text-foreground">by topic</strong> or
                        read the <strong className="text-foreground">September 2026</strong> monthly digest.
                        Study notes and practice MCQs for HSSC CET, UKSSSC, SSC and other competitive exams.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#by-topic">
                            <Button size="lg" className="cursor-pointer gap-2">
                                <Layers className="h-4 w-4" /> Browse by Topic
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </a>
                        <a href="#september-2026">
                            <Button size="lg" variant="outline" className="cursor-pointer gap-2">
                                <Calendar className="h-4 w-4" /> September 2026
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section id="uttarakhand-current-affairs" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <Link href="/current-affairs/uttarakhand-current-affairs-2026" className="block rounded-2xl border bg-card p-6 transition-colors hover:bg-muted/40">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-primary">State-wise · Editorial preview</p>
                            <h2 className="mt-2 text-xl font-bold sm:text-2xl">Uttarakhand Current Affairs 2026</h2>
                            <p lang="hi" className="mt-1 font-medium">उत्तराखंड करेंट अफेयर्स 2026</p>
                            <p className="mt-2 text-sm text-muted-foreground">January–October · 300 bilingual MCQs · Answers and explanations</p>
                        </div>
                        <ChevronRight className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                    </div>
                </Link>
            </section>

            {/* Existing by-topic collection. */}
            <section id="by-topic" className="scroll-mt-24 bg-gradient-to-b from-white to-muted/10 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                        <div className="rounded-lg bg-indigo-100 p-2">
                            <Layers className="h-5 w-5 text-indigo-600" />
                        </div>
                        <h2 className="text-2xl font-bold">Current Affairs by Topic</h2>
                        <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs text-indigo-700">
                            Bilingual + MCQs
                        </span>
                    </div>
                    <p className="mb-6 text-sm text-muted-foreground">
                        Browse topic-wise notes in English and Hindi. Select a card to read the full topic and practise its MCQs.
                    </p>

                    <div className="relative mb-8 max-w-2xl">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="search"
                            aria-label="Search current affairs topics"
                            placeholder="Search topics, categories, or keywords..."
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                            className="w-full rounded-xl border bg-card py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {filteredTopics.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {filteredTopics.map((card) => (
                                <Link
                                    key={card.id}
                                    href={`/current-affairs/by-topic/${card.id}`}
                                    className="group block rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                >
                                    <div className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-md transition-all duration-300 hover:border-indigo-300 hover:shadow-xl">
                                        <div className={`bg-gradient-to-r ${card.color} p-4 text-white`}>
                                            <div className="mb-2 flex items-center justify-between gap-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="rounded-lg bg-white/20 p-1.5">
                                                        {renderTopicIcon(card.icon)}
                                                    </div>
                                                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">
                                                        {card.category}
                                                    </span>
                                                </div>
                                                <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">
                                                    {card.tag}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold leading-snug">{card.titleEn}</h3>
                                            <p className="mt-0.5 text-sm text-white/80">{card.titleHi}</p>
                                        </div>
                                        <div className="flex flex-1 flex-col p-5">
                                            <p className="mb-3 line-clamp-3 text-sm text-muted-foreground">
                                                {card.shortDescEn}
                                            </p>
                                            <p className="mb-4 line-clamp-2 text-xs text-muted-foreground/80">
                                                {card.shortDescHi}
                                            </p>
                                            <div className="mt-auto flex items-center justify-between border-t pt-3">
                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                    <HelpCircle className="h-3.5 w-3.5" />
                                                    <span>{card.mcqCount} MCQs</span>
                                                </div>
                                                <span className="flex items-center gap-1 text-sm font-medium text-indigo-600 group-hover:underline">
                                                    Read Topic <ChevronRight className="h-3.5 w-3.5" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div role="status" className="rounded-2xl border bg-card px-6 py-12 text-center">
                            <Search className="mx-auto mb-3 h-7 w-7 text-muted-foreground" />
                            <p className="font-semibold">No matching topics found</p>
                            <p className="mt-1 text-sm text-muted-foreground">Try a different keyword.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* September 2026 is the only monthly digest shown. */}
            <section id="september-2026" className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                        <div className="rounded-lg bg-primary/10 p-2">
                            <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">September 2026 Current Affairs</h2>
                        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            Available
                        </span>
                    </div>
                    <Link
                        href={septemberDigest.url}
                        className="group block max-w-3xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <div className="overflow-hidden rounded-2xl border bg-card shadow-lg transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl">
                            <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-primary to-primary/80 p-5 text-white">
                                <div>
                                    <h3 className="text-2xl font-bold">{septemberDigest.title}</h3>
                                    <p className="mt-1 text-sm text-white/80">Monthly Current Affairs Digest</p>
                                </div>
                                <Newspaper className="h-8 w-8 shrink-0 text-white/80" />
                            </div>
                            <div className="p-6">
                                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                                    {septemberDigest.description}
                                </p>
                                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Topics covered</h4>
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {septemberDigest.topics.map((topic) => (
                                        <span key={topic} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between gap-3 border-t pt-4">
                                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <BookOpen className="h-4 w-4" /> Notes and practice questions
                                    </span>
                                    <span className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline">
                                        Read September Digest <ChevronRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    )
}
