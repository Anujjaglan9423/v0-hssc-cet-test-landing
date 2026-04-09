"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    History,
    Droplets,
    Mountain,
    Wind,
    Map,
    ChevronDown,
    HelpCircle,
    Waves,
    Trees,
    Landmark,
    Compass,
    ArrowLeft,
    Sprout,
    Wheat,
    Apple,
    Milk,
    Fish,
    Tractor,
    Flower2,
    Factory,
    Building2,
    Heart,
    Award,
    Banknote,
    ShoppingBag,
    Warehouse,
    Shield,
    Phone,
    Calendar,
    CloudRain,
    Sun,
    Thermometer,
    Droplet,
    Leaf,
    Package,
    Truck,
    Store,
    Users,
    GraduationCap,
    Stethoscope,
    Zap,
    SunDim,
    Gauge,
    Timer,
    Repeat,
    Route,
    Hammer,
    HardHat,
    Sparkles,
    Gem,
    Pickaxe,
    Coins,
    Battery,
    Atom,
    Radio,
    Cpu,
    Flame,
    BarChart,
    Globe,
    Home,
    Lightbulb,
    Plug,
    Power,
    ArrowUp,
    ArrowDown,
    Car,
    Shirt,
    Briefcase,
    Laptop,
    Building,
    Cigarette,
    Dumbbell,
    Footprints,
    Wine,
    Utensils,
    Bus,
    Bike,
    Truck as TruckIcon,
    PenTool,
    Scissors,
    Watch,
    Gift,
    Gem as GemIcon,
    Music,
    Paintbrush,
    Palette,
    Ruler,
    Syringe,
    Microscope,
    FlaskConical,
    Beaker,
    TestTube,
    Pill,
    Dna,
    Biohazard,
    Radiation,
    Recycle,
    Trash2,
    Droplet as DropletIcon,
    Gauge as GaugeIcon,
    HardDrive,
    Server,
    Database,
    Cloud,
    Wifi,
    Bluetooth,
    Cctv,
    Camera,
    Video,
    Headphones,
    Smartphone,
    Tablet,
    Tv,
    Printer,
    Monitor,
    Cpu as CpuIcon,
    Cigarette as CigaretteIcon,
    Dumbbell as DumbbellIcon,
    Footprints as FootprintsIcon,
    BuildingIcon,
    FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IndustriesInHaryanaPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [language, setLanguage] = useState<"hindi" | "english">("hindi");

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "hindi" ? "english" : "hindi"));
    };

    // FAQ data bilingual
    const faqs = [
        {
            questionHindi: "हरियाणा का सबसे बड़ा औद्योगिक शहर कौन सा है?",
            questionEnglish: "Which is the largest industrial city of Haryana?",
            answerHindi: "फरीदाबाद हरियाणा और उत्तरी भारत का सबसे बड़ा और पहला औद्योगिक शहर है। यहां ऑटोमोबाइल, ट्रैक्टर, मोटरसाइकिल, रेफ्रिजरेटर, रबर टायर, उपकरण, फुटवियर आदि से संबंधित बड़े और छोटे उद्योग स्थित हैं।",
            answerEnglish: "Faridabad is the biggest and first industrial city of Haryana as well as North India. Large and small scale industries related to production of automobiles, tractor, motorcycle, refrigerator, rubber tyres, tools, footwear, etc. are situated here."
        },
        {
            questionHindi: "हरियाणा में पहली टेक्सटाइल मिल कहाँ स्थापित की गई थी?",
            questionEnglish: "Where was the first textile mill established in Haryana?",
            answerHindi: "हरियाणा की पहली टेक्सटाइल मिल 1937 में भिवानी में स्थापित की गई थी, जिसका नाम भिवानी टेक्सटाइल मिल्स था।",
            answerEnglish: "The first textile mill in Haryana was established in Bhiwani in 1937 by the name of Bhiwani Textile Mills."
        },
        {
            questionHindi: "मारुति सुजुकी का प्लांट हरियाणा में कहाँ स्थित है?",
            questionEnglish: "Where is the Maruti Suzuki plant located in Haryana?",
            answerHindi: "मारुति सुजुकी का मुख्य प्लांट गुरुग्राम जिले में 1982 में स्थापित किया गया था, जो 300 एकड़ में फैला है। दूसरा प्लांट मानेसर में 2007 में 600 एकड़ में स्थापित किया गया था।",
            answerEnglish: "Maruti Suzuki's main plant was established in Gurugram district in 1982, spread over 300 acres. Another plant was established in Manesar in 2007 over 600 acres."
        },
        {
            questionHindi: "हरियाणा के किस शहर को 'साइबर सिटी' या 'मिलेनियम सिटी' कहा जाता है?",
            questionEnglish: "Which city of Haryana is called 'Cyber City' or 'Millennium City'?",
            answerHindi: "गुरुग्राम को 'साइबर सिटी', 'मिलेनियम सिटी' और 'मेडिसिटी' के नाम से जाना जाता है। यह IT और ITeS उद्योग का केंद्र है।",
            answerEnglish: "Gurugram is known as 'Cyber City', 'Millennium City' and 'Medicity'. It is the hub of IT and ITeS industry."
        },
        {
            questionHindi: "हरियाणा में पेपर मिलों के लिए कौन सा शहर प्रसिद्ध है?",
            questionEnglish: "Which city is famous for paper mills in Haryana?",
            answerHindi: "यमुनानगर को 'पेपर सिटी' के नाम से जाना जाता है। यहाँ बल्लारपुर (बिल्ट) पेपर मिल्स स्थित है, जो 1929 में स्थापित की गई थी।",
            answerEnglish: "Yamunanagar is known as 'Paper City'. It has Ballarpur (Bilt) Paper Mills, established in 1929."
        },
        {
            questionHindi: "हरियाणा में पहला ताप विद्युत संयंत्र कहाँ स्थापित किया गया था?",
            questionEnglish: "Where was the first thermal power plant established in Haryana?",
            answerHindi: "हरियाणा का पहला ताप विद्युत संयंत्र 1974 में फरीदाबाद में स्थापित किया गया था।",
            answerEnglish: "The first thermal power plant in Haryana was established in 1974 in Faridabad."
        },
        {
            questionHindi: "हरियाणा के किस शहर को 'ब्रास सिटी' कहा जाता है?",
            questionEnglish: "Which city of Haryana is called 'Brass City'?",
            answerHindi: "रेवाड़ी को 'ब्रास सिटी' के नाम से जाना जाता है। यहाँ पीतल के बर्तनों का उद्योग लगभग 1535 में पुर्तगालियों की मदद से शुरू हुआ था।",
            answerEnglish: "Rewari is known as 'Brass City'. The brass industry began around 1535 with the help of Portuguese."
        },
        {
            questionHindi: "हरियाणा का कौन सा शहर 'साइंस सिटी' के नाम से जाना जाता है?",
            questionEnglish: "Which city of Haryana is known as 'Science City'?",
            answerHindi: "अंबाला 'साइंस सिटी' के नाम से जाना जाता है। यह देश में वैज्ञानिक और सर्जिकल उपकरणों का सबसे बड़ा निर्माता है और भारत के लगभग 20% वैज्ञानिक उपकरणों का निर्यात करता है।",
            answerEnglish: "Ambala is known as 'Science City'. It is the largest manufacturer of scientific and surgical instruments in the country and exports around 20% of India's scientific equipments."
        }
    ];

    // Section 1: Overview - History of Industrial Development
    const historyOverview = {
        titleHindi: "हरियाणा में औद्योगिक विकास का इतिहास",
        titleEnglish: "History of Industrial Development in Haryana",
        contentHindi: "हरियाणा अपने औद्योगिक विकास के लिए जाना जाता है। राज्य ज्ञान उद्योग, जिसमें आईटी और जैव प्रौद्योगिकी शामिल है, के लिए एक आधार के रूप में भी उभरा है। हरियाणा सॉफ्टवेयर का तीसरा सबसे बड़ा निर्यातक है और आईटी/आईटीईएस सुविधाओं के लिए पसंदीदा गंतव्यों में से एक है। स्वतंत्रता से पहले, इस क्षेत्र में कुछ उद्योग केंद्रित थे, मुख्यतः चीनी, लकड़ी और कपास मिल। स्वतंत्रता के बाद, केंद्र सरकार ने दूसरी पंचवर्षीय योजना से औद्योगिक विकास को प्राथमिकता दी। परिणामस्वरूप, फरीदाबाद, सोनीपत, पानीपत और बहादुरगढ़ के क्षेत्र औद्योगिक इकाइयों के रूप में विकसित हुए। राज्य ने 1966 में पंजाब से अलग होने के बाद खनिज संसाधनों का अपना हिस्सा प्राप्त किया। तब से, राज्य ने अपनी स्वतंत्र औद्योगिक नीति बनाना शुरू कर दिया। हरियाणा में औद्योगिक विकास 1980 के बाद शुरू हुआ क्योंकि खनिज संसाधनों के उपयोग के लिए योजनाएं विकसित की गईं। यमुनानगर, अंबाला, फरीदाबाद, भिवानी के जिलों को औद्योगिक केंद्रों के रूप में विकसित किया गया। वर्ष 2000 से, राज्य ने औद्योगिक विकास को मजबूती दी। राज्य ने 2013 को उद्योग और रोजगार वर्ष घोषित किया। 2015 की नई औद्योगिक नीति राज्य में औद्योगिक विकास को तीव्र गति से प्रोत्साहित करती है। यह नीति केंद्र सरकार की 'मेक इन इंडिया', 'डिजिटल इंडिया' और 'स्किल इंडिया' परियोजनाओं के साथ संरेखित है।",
        contentEnglish: "Haryana is well known for its industrial development. The state has also emerged as a base for the knowledge industry, including IT and Biotechnology. Haryana is the third largest exporter of software and one of the preferred destination for IT/ITeS facilities. Before Independence, a few industries were concentrated in the region mainly sugar, timber and cotton mill. After Independence, the Central Government gave priority to industrial development from the Second Five Year Plan. As a result, the areas of Faridabad, Sonipat, Panipat and Bahadurgarh developed as industrial units. The state got its share of mineral resources after its separation from Punjab in 1966. From then onwards, the state started framing its independent industrial policy. Industrial development started in Haryana after 1980 as plans were developed to utilise the mineral resources. Districts of Yamunanagar, Ambala, Faridabad, Bhiwani were developed as industrial centres. From year 2000, the state gave strength to industrial development. The state declared as year of Industry and Employment in 2013. The New Industrial Policy of 2015 stimulates further industrial growth in the state on a fast track basis. The policy is aligned with 'Make in India', 'Digital India' and 'Skill India' projects of Central Government."
    };

    // Section 2: Key Industries of Haryana
    const keyIndustries = {
        titleHindi: "हरियाणा के प्रमुख उद्योग",
        titleEnglish: "Key Industries of Haryana",
        contentHindi: "हरियाणा के प्रमुख उद्योग खाद्य प्रसंस्करण उद्योग, वस्त्र, ऑटोमोबाइल, पेट्रोकेमिकल्स, कपड़ा उद्योग, जैव प्रौद्योगिकी उद्योग, सूचना और प्रौद्योगिकी, रियल एस्टेट और निर्माण उद्योग हैं।",
        contentEnglish: "The key industries of Haryana are food processing industry, textiles, automobiles, petrochemicals, cloth industry, biotech industry, information and technology, real estate and construction industry."
    };

    // Section 3: Food Processing Industries
    const foodProcessingIndustries = [
        {
            name: "Nestle India",
            nameHindi: "नेस्ले इंडिया",
            location: "Samlakha, Panipat",
            details: "Switzerland based company started by Henry Nestle in 1867. Indian branch started in Haryana in 1992. Produces infant foods, milk, chocolates and milk products. Brands: Nescafe, Milk bars, Kitkat, Maggi, Milkmaid."
        },
        {
            name: "Perfetti Van Melle India",
            nameHindi: "परफेटी वैन मेले इंडिया",
            location: "Manesar, Gurugram",
            details: "Multinational company producing confectionery products like Happydent, Big Babol, Mentos, Alpenliebe, Center Fresh. Established Indian branch in 1994. Captured 25% market share in sugar confectionaries."
        },
        {
            name: "Yakut Danone India Private Limited",
            nameHindi: "याकुल्ट डैनोन इंडिया प्राइवेट लिमिटेड",
            location: "Rai Industrial Area, Sonipat",
            details: "Joint venture of Japan (Yakult) and France (Danone), formed in 2005. Started production on 18th January, 2008. Produces pro-biotic milk that increases immunity."
        },
        {
            name: "GlaxoSmithKline Consumer Health Care Limited",
            nameHindi: "ग्लैक्सोस्मिथक्लाइन कंज्यूमर हेल्थ केयर लिमिटेड",
            location: "Khewra, Sonipat",
            details: "Registered in England, established in 1924. One of the largest research based pharmaceutical and health care company. Horlicks is the most popular product."
        },
        {
            name: "Other Food Processing Industries",
            nameHindi: "अन्य खाद्य प्रसंस्करण उद्योग",
            location: "Various",
            details: "Parle Biscuit Factory (Bahadurgarh), Madhu Ghee (Pehowa), Lakshay Foods India Limited (Manesar), Haryana Cooperative Dairy Development (Vita milk at Jind, Ambala, Rohtak, Ballabgarh, Sirsa, Kurukshetra), Sabar Dairy Milk Processing Plant (Amul Milk Plant, Rohtak IMT)."
        }
    ];

    // Section 4: Agro Based Industries
    const agroBasedIndustries = [
        {
            name: "Cotton Textile Industry",
            nameHindi: "कपास वस्त्र उद्योग",
            details: "Raw materials from Sirsa, Fatehabad, Hisar, Bhiwani, Dadri and Jind. First mill started in 1937 in Bhiwani. Panipat is international centre for handloom products. Gurugram-Manesar belt for readymade garments. HSIIDC developed Textile Park at Barhi (Sonipat). International Trade and Convention Centre at Panipat for handloom products."
        },
        {
            name: "Bhiwani Textile Mills",
            nameHindi: "भिवानी टेक्सटाइल मिल्स",
            details: "Established by Aditya Birla Group in 1937 in Bhiwani. Provides textiles to readymade cloth industry."
        },
        {
            name: "Orient Craft Limited",
            nameHindi: "ओरिएंट क्राफ्ट लिमिटेड",
            details: "Established in Gurugram on 28th February, 1978. Export oriented company."
        },
        {
            name: "Benetton Group",
            nameHindi: "बेनेटन ग्रुप",
            details: "Multinational company established branch in Gurugram district. Manufactures branded clothes, shoes, bags under Benton Brand."
        },
        {
            name: "Paper Industry",
            nameHindi: "कागज उद्योग",
            details: "First paper mill started in 1929 - Messers Punjab Pulp and Paper Mill Limited at Abdullahpur. Many private companies in Sonipat, Rewari and Yamunanagar."
        },
        {
            name: "Sugar Mills",
            nameHindi: "चीनी मिलें",
            details: "Oldest sugar mill - Saraswati Industrial Syndicate Limited established in Lahore in 1933. A unit currently working in Yamunanagar."
        },
        {
            name: "Footwear Industry",
            nameHindi: "फुटवियर उद्योग",
            details: "Major industries at Karnal, Faridabad, Bahadurgarh, Gurugram, Manesar, Sonipat, Kundli, Ambala. Footwear Design and Development Institute (FDDI) at IMT Rohtak."
        },
        {
            name: "Timber Industry",
            nameHindi: "लकड़ी उद्योग",
            details: "Mainly in North-East districts - Yamunanagar, Kaithal, Karnal. Chir, Sheesham, Keekar, Sagwan trees used. Before 1947, timber industry in Yamunanagar known as Wood Mandi of Abdullahpur."
        }
    ];

    // Section 5: Automobile Industries
    const automobileIndustries = [
        {
            name: "Escorts Limited",
            nameHindi: "एस्कॉर्ट्स लिमिटेड",
            location: "Faridabad",
            details: "Indian Engineering company set up in 1960 by Hari Nanda and UD Nanda. Produces heavy engineering goods, agricultural implements, railway equipments, auto parts, tractors. Manufactures engines, crankshafts, hydrolocks, transmission equipments."
        },
        {
            name: "Maruti Suzuki India",
            nameHindi: "मारुति सुजुकी इंडिया",
            location: "Gurugram and Manesar",
            details: "Japanese company established in 1982 in Gurugram (300 acres). Manesar plant established in 2007 (600 acres). Has about 50% car market share in India."
        },
        {
            name: "Sona Koyo Steering Systems",
            nameHindi: "सोना कोयो स्टीयरिंग सिस्टम्स",
            location: "Gurugram, Bawal, Dharuhera",
            details: "Established in 1985 under The Sona Group. Merged with Koyo Seiko Co. Ltd in 2006 forming JTEKT Corporation. Manufactures steering gears, hydraulic power steering system, propeller shift, tilt-rigid steering columns. More than 50% market share in India."
        },
        {
            name: "Talbro Automotive Components",
            nameHindi: "टैल्ब्रो ऑटोमोटिव कंपोनेंट्स",
            location: "Sohna, Faridabad, Gurugram",
            details: "Manufactures automotive and industrial gas kits."
        }
    ];

    // Section 5a: Automobile Units Table
    const automobileUnits = [
        { name: "Hero Motocorp", location: "Gurugram and Dharuhera", product: "Motorcycles" },
        { name: "Honda Motorcycle and Scooter India", location: "Manesar", product: "Motorcycles & Scooters" },
        { name: "Yamaha Motors Company Limited", location: "Faridabad", product: "Motorcycles" },
        { name: "HMT (Hindustan Machine Tools Division)", location: "Pinjore", product: "Machine Tools" },
        { name: "Munjal Showa Limited", location: "Gurugram", product: "Auto Components" },
        { name: "Omax Autos Ltd", location: "Dharuhera (Rewari)", product: "Auto Components" },
        { name: "Janna Auto Industries Ltd", location: "Yamunanagar", product: "Springs and Parabolic Springs" },
        { name: "Rico Auto Industries", location: "Gurugram", product: "Automobile Components" },
        { name: "Coventry Coil-O-Matic Limited", location: "Salhaws, Rewari", product: "Auto Components" }
    ];

    // Section 6: Petro Chemical Industries
    const petroChemicalIndustries = [
        {
            name: "Indian Oil Corporation",
            nameHindi: "इंडियन ऑयल कॉर्पोरेशन",
            location: "Panipat",
            details: "Indian Public Sector Oil and Gas company established in Panipat in 1998. Seventh refinery of IOC, one of the major refinery of South-East Asia that is singly owned."
        },
        {
            name: "DuPont India",
            nameHindi: "ड्यूपॉन्ट इंडिया",
            location: "Gurugram",
            details: "Multinational company started in 1802. Produces explosive materials. Indian office located in Gurugram. Conducts research and development in various fields."
        },
        {
            name: "SRF Limited",
            nameHindi: "एसआरएफ लिमिटेड",
            location: "Gurugram",
            details: "Established in 1970 as Sri Ram Fabrics (SRF) Limited. Name changed to SRF in 1990. Produces chemicals (refrigerators & ACs), industrial fabrics (tyres & conveyor belts), synthetics (soaps, shampoos)."
        }
    ];

    // Section 7: Waste Processing and Recycling Industry
    const wasteIndustry = {
        titleHindi: "अपशिष्ट प्रसंस्करण और रीसाइक्लिंग उद्योग",
        titleEnglish: "Waste Processing and Recycling Industry",
        details: "Recycling set up at IMT Manesar, Rohtak, Samalkha. Solid and Liquid Waste Management Projects in Yamunanagar, Kurukshetra and Kaithal. Waste treatment plant to convert waste to energy set up in Karnal on Kachhwa road in February 2018."
    };

    // Section 8: Information Technology and IT Enabled Services
    const itIndustries = [
        {
            name: "Tata Consultancy Services (TCS)",
            nameHindi: "टाटा कंसल्टेंसी सर्विसेज",
            location: "Gurugram",
            details: "Established in 1968 in Mumbai by JRD Tata and FC Kohli. Head office in Mumbai, five offices located in Gurugram."
        },
        {
            name: "NIIT",
            nameHindi: "एनआईआईटी",
            location: "Gurugram",
            details: "National Institute of Information Technology established in 1981 in Gurugram. Set up to provide technical knowledge under Vocational Education Project. In 2004, NIIT established as independent company."
        },
        {
            name: "Genpact",
            nameHindi: "जेनपैक्ट",
            location: "Gurugram",
            details: "Established in 1997 in Gurugram. Provides BPO, KPO, financial assistance, back office, sales and marketing, supply chain services. Declared top company by NASCOM for IT services."
        },
        {
            name: "IBM Daksh Limited",
            nameHindi: "आईबीएम दक्ष लिमिटेड",
            location: "Gurugram",
            details: "Provides BPO services. Started Gurugram branch in 2010."
        },
        {
            name: "Conveyings India Services Limited",
            nameHindi: "कन्वेयिंग्स इंडिया सर्विसेज लिमिटेड",
            location: "Gurugram",
            details: "Provides content centre services, customer care services, technical support solutions, marketing and sales program and other BPO services."
        },
        {
            name: "DLF Cyber City",
            nameHindi: "डीएलएफ साइबर सिटी",
            location: "Udyog Vihar, Gurugram",
            details: "Established by DLF limited. Also called Cyber hub. Largest IT center of Delhi NCR."
        }
    ];

    // Section 9: Biotech Industry and Pharmaceuticals
    const biotechIndustries = [
        {
            name: "Ranbaxy Laboratories",
            nameHindi: "रैनबैक्सी लैबोरेट्रीज",
            location: "Gurugram",
            details: "Major pharmaceutical research based company established in 1961. Plays important role in R&D of New Technology, Infection Disease, Metabolism, Pharmacology Molecular Technology."
        },
        {
            name: "Eli Lilly India Private Limited",
            nameHindi: "एली लिली इंडिया प्राइवेट लिमिटेड",
            location: "Gurugram",
            details: "Established in 1976 in US. Indian office in Gurugram. Conducts research for production of new medicines using biotechnology."
        },
        {
            name: "Pro-Agro Seeds Company Private Limited",
            nameHindi: "प्रो-एग्रो सीड्स कंपनी प्राइवेट लिमिटेड",
            location: "Badshahpur, Gurugram",
            details: "Founded in 1977, now part of Bayer Crop Science Group. Research on seed technology, plant breeding, genetic marking, seed grading."
        }
    ];

    // Section 10: Real Estate and Construction Industry
    const realEstateCompanies = [
        { name: "DLF Limited", established: "1946", founder: "Raghuverdra Singh", details: "Developed 16 lane road of 10.5 km in Gurugram with Haryana Development Authority." },
        { name: "Emaar India", established: "2005", details: "Joint venture of Emaar Properties (Dubai) and MGF Development Limited (India). Registered as Emaar MGF Land Limited." },
        { name: "Vipul Limited", details: "Developed Global Business Park and Millennium Plaza in Gurugram." },
        { name: "Ansal Limited", details: "Real estate development projects in urban areas, situated in Gurugram." },
        { name: "Unitech Group", details: "India's second largest real estate investment company in Gurugram." },
        { name: "The Mall of India", details: "Situated in Gurugram in 3.6 million sq ft area." }
    ];

    // Section 11: Key Industrial Centres in Haryana
    const industrialCentres = [
        {
            name: "Faridabad",
            nameHindi: "फरीदाबाद",
            title: "Industrial City",
            details: "Biggest and first industrial city of Haryana and North India. Industries: automobiles, tractor, motorcycle, refrigerator, rubber tyres, tools, footwear. First thermal power plant established in 1974. Major companies: Orient Paper, JCB India, Whirlpool, ABB Group, Goodyear Tyres, Knorr Bremse, Escorts Limited, Bata Shoes."
        },
        {
            name: "Panchkula",
            nameHindi: "पंचकूला",
            title: "IT Hub",
            details: "Farm equipment, tractor, IT and Pharmaceutical industry. Bharat Electronics established in 1954. Hindustan Machine Tools produces tractor spare parts. Panchkula IT Park established in 2008. Nano City Project proposed on lines of Silicon Valley."
        },
        {
            name: "Panipat",
            nameHindi: "पानीपत",
            title: "Weaver City / Textile City",
            details: "City of textiles and carpets. Biggest centre for quality blankets and carpets in India. 'Shoddy Yarn' - biggest centre in world. Called 'City of Weavers'. National Fertiliser Limited (Central Govt). Indian Oil Refinery established in 1980 in Baholi - largest oil refinery in India (15 million metric tonnes). Captive Electricity Machine Components (15 MW energy). Farm Equipments Industry in Samalkha."
        },
        {
            name: "Gurugram",
            nameHindi: "गुरुग्राम",
            title: "Cyber City / Millennium City / Medicity",
            details: "Most developed commercial and business centre. Also known as Cyber City. Famous for Maruti-Suzuki plant, Gems and Jewellery, Electronics. Hub of call centres. Third highest Per-Capita income in India after Chandigarh and Mumbai. Presence of about 250 or 50% of Fortune 500 companies."
        },
        {
            name: "Sonipat",
            nameHindi: "सोनीपत",
            title: "Golden City / Cycle City",
            details: "Also called golden city. Ganaur, Kundli, Rai are major industrial centres. Atlas Cycle Industries (one of top three cycle manufacturers in world) - closed in 2018. Milton cycle company. Yakult Danone in Rai, GSK in Khewra. Food processing, textile, chemical, bulb and tube, sugar and paper industries."
        },
        {
            name: "Rohtak",
            nameHindi: "रोहतक",
            title: "Sugar City / Education City",
            details: "Single Window Clearance Facility scheme. Electrical equipments, sugar, cotton textiles, threads, surgical and orthopaedic instruments. Shori Market - one of largest cloth markets in Asia. Vita Milk Plant, Sabar Dairy Milk Plant, Maruti Udyog R&D Centre. Gajak and Rewari (dry sweet) very famous."
        },
        {
            name: "Bhiwani",
            nameHindi: "भिवानी",
            title: "Textile Hub",
            details: "Centre for small, cottage and village industries. First textile mill in Haryana established in 1937 - Bhiwani Textile Mills. Charkhi-Dadri has large scale cement factory (established 1939, acquired by Cement Corporation of India in 1981). Technological Institute of Textiles (1943). Metal industry, furniture industry, steel utensil industry."
        },
        {
            name: "Yamunanagar",
            nameHindi: "यमुनानगर",
            title: "Paper City",
            details: "One of largest industrial centres. Called 'Paper City'. Ballarpur (Bilt) Paper Mills (1929). Saraswati Sugar Mills (1933 - one of largest in Asia). Bharat Starch Chemical Limited (1938). Railway Carriage and Wagon Workshop in Jagadhri (1952). Yamuna Gases Limited (1973). Haryana Distillery (1969). Timber market at Abdullahpur (100 acres, established 1947)."
        },
        {
            name: "Ambala",
            nameHindi: "अंबाला",
            title: "Science City / Mixie City",
            details: "Largest manufacturer of scientific and surgical instruments in India - called 'Science City'. Produces and exports around 20% of India's scientific equipments. HMT Limited, Bhupindra Cement Factory in Surajpur. Famous for engineering goods and textile (rugs - 'Durries'). Consumer goods - kitchen appliances, electrical appliances, gas stoves. Famous for Glass Industry before WWII."
        },
        {
            name: "Rewari",
            nameHindi: "रेवाड़ी",
            title: "Brass City",
            details: "Dharuhera, Bawal and Rewari - important industrial zones. Most popular for brass wares - industry began around 1535 with Portuguese help. Also known for 'Tilli Juti' (Moccasin). Dharuhera and Bawal have Hero Honda Motorcycles and Harley Davidson (assembling unit). Dharuhera plant of Hero Moto Corp - largest producer of motor cycles in world."
        },
        {
            name: "Hisar",
            nameHindi: "हिसार",
            title: "Steel City",
            details: "Called 'Steel City' because of Jindal Stainless Steel Factories. One of largest producer of galvanised iron. Small scale industries: agro based products (cotton ginning, spinning, yarns), leather, furniture, ropes. Mineral based industries: iron graders, agricultural tools, PVC pipes."
        },
        {
            name: "Karnal",
            nameHindi: "करनाल",
            title: "Rice Hub",
            details: "Large number of rice mills for Basmati rice export. Liberty Footwear, leather industry, paint industry, sugar mills, food processing, farm equipment industry."
        },
        {
            name: "Sirsa",
            nameHindi: "सिरसा",
            details: "At formation in 1975 - 483 small scale, 2 medium/large industries. Present - around 6000 small scale industries (food processing and agricultural equipments). Metal industries."
        },
        {
            name: "Kaithal",
            nameHindi: "कैथल",
            details: "Rice mills, sugarcane industry, food processing, tubewell equipments, oil refinery, wire and cables, paints, bottles, rubber rolls, plastic bags. Steel production and casting units."
        },
        {
            name: "Jhajjar",
            nameHindi: "झज्जर",
            title: "Bhatta King",
            details: "Flourishing brick industry - called 'Bhatta King'. Sanitary wares, electronic equipments, steel industry, radio and cycle manufacturing, medical equipments, metal industry. Major companies: Parle-G, Somani tiles, HNG Glass, Surya Pipes, Panasonic India (Jharki), Reliance Industrial Estate, Yokohama Tyre (Bahadurgarh)."
        }
    ];

    // Section 12: Industries and Related Places Table
    const industriesAndPlaces = [
        { industry: "Cement", centres: "Surajpur (Panchkula), Charkhi Dadri" },
        { industry: "Sugar", centres: "Sonipat, Shahbad, Panipat, Rohtak, Jind, Karnal, Hisar, Mehram, Jagadhri (Yamunanagar)" },
        { industry: "Ammunition", centres: "Yamunanagar" },
        { industry: "Paper", centres: "Jagadhri (Yamunanagar), Faridabad, Sonipat, Dharuhera" },
        { industry: "Automobiles", centres: "Gurugram, Faridabad, Pinjore (Panchkula)" },
        { industry: "Bicycles", centres: "Sonipat (Atlas), Faridabad, Palwal, Jind" },
        { industry: "Petroleum", centres: "Karnal, Panipat, Bawal" },
        { industry: "Agricultural Implements", centres: "Faridabad" },
        { industry: "Engineering", centres: "Faridabad" },
        { industry: "Woollen", centres: "Hisar, Panipat" },
        { industry: "Cloth", centres: "Hisar, Bhiwani, Faridabad, Panipat, Rohtak" },
        { industry: "Leather (Shoes, bags)", centres: "Faridabad, Jind, Karnal" },
        { industry: "Utensils (Steel and Brass)", centres: "Rewari" },
        { industry: "China Clay Potteries", centres: "Gurugram, Bahadurgarh" },
        { industry: "Sewing Machines", centres: "Ambala" },
        { industry: "Iron and Steel", centres: "Hisar, Ganaur, Panipat, Bahadurgarh" },
        { industry: "Tyre Tube", centres: "Ballabgarh (Good Year), Faridabad" },
        { industry: "Electronic", centres: "Panchkula, Gurugram, Ambala, Faridabad" },
        { industry: "Plywood", centres: "Yamunanagar" },
        { industry: "Plastics", centres: "Faridabad" },
        { industry: "Sanitary", centres: "Bahadurgarh" },
        { industry: "Medicines", centres: "Gurugram, Dundahera" },
        { industry: "Hosiery", centres: "Rohtak" },
        { industry: "Scientific Instruments, Mixer", centres: "Ambala" },
        { industry: "Textile Park", centres: "Hansi" },
        { industry: "Agro Hub", centres: "Karnal, Sirsa" },
        { industry: "Maruti", centres: "Gurugram" },
        { industry: "Hindustan Machine Tool Industry", centres: "Pinjore (Panchkula)" },
        { industry: "Railway workshop", centres: "Jagadhri (Yamunanagar)" },
        { industry: "HMT Plant", centres: "Pinjore" },
        { industry: "First Textile Mill", centres: "Bhiwani" },
        { industry: "New Wood Timber Industries", centres: "Tohana (Fatehabad)" },
        { industry: "Timber Market", centres: "Yamunanagar" },
        { industry: "Oil Refinery Industries", centres: "Panipat" }
    ];

    // Section 13: City Titles
    const cityTitles = [
        { city: "Gurugram", titles: "Medicity, Cyber City, Solar City, Maruti Plant" },
        { city: "Yamunanagar", titles: "Paper City, Bilt Paper Mill, Bharat Starch Industries" },
        { city: "Ambala", titles: "Science City, Mixie City" },
        { city: "Rohtak", titles: "Sugar City, Education City" },
        { city: "Hisar", titles: "Steel City" },
        { city: "Faridabad", titles: "Industrial City" },
        { city: "Rewari", titles: "Brass City" },
        { city: "Sonipat", titles: "Cycle City" },
        { city: "Panipat", titles: "Weaver City, First Energy Bank" }
    ];

    // Section 14: Major Sugar Mills
    const sugarMills = [
        { name: "Saraswati Cooperative Sugar Mill", year: "1933" },
        { name: "Panipat Cooperative Sugar Mill", year: "1956" },
        { name: "Rohtak Cooperative Sugar Mill", year: "1956" },
        { name: "Karnal Cooperative Sugar Mill", year: "1977" },
        { name: "Shahabad Cooperative Sugar Mill", year: "1984-85" },
        { name: "Maham Cooperative Sugar Mill", year: "1991" },
        { name: "HAFED Cooperative Sugar Mill", year: "2008-09" }
    ];

    // Section 15: Major Industrial Development Agencies
    const developmentAgencies = [
        {
            name: "Department of Industries and Commerce",
            nameHindi: "उद्योग एवं वाणिज्य विभाग",
            details: "Undertakes industrial development, finance management, infrastructure development and capital investment. Encourages private capital investment. Provides subsidies, provision of gas, coal, electricity, diesel oil. Reduces licensing procedures."
        },
        {
            name: "Haryana Enterprises Promotion Board",
            nameHindi: "हरियाणा एंटरप्राइजेज प्रमोशन बोर्ड",
            details: "Single Roof Clearance System for online clearances. Head office in Panchkula. Promotional centres in Delhi and Chandigarh. Investment Promotion Board and Grievance cell. Publishes monthly magazine 'Udyog Yug'. Constituted in 2017 under CM Manohar Lal Khattar. Help desk at Chandigarh."
        },
        {
            name: "Haryana Khadi and Village Industries Board",
            nameHindi: "हरियाणा खादी एवं ग्रामोद्योग बोर्ड",
            details: "Established on 1st February, 1969. First Chairman - Chowdhary Devi Lal. Produces Khadi handlooms, honey, soaps, agarbattis, candles, bags, carpets, mats. Khadi centres in every district headquarters. Major schemes: Margin Money Scheme, Pattern Assistance Scheme, PM Employment Generation Program."
        },
        {
            name: "Haryana State Industrial and Infrastructure Development Corporation (HSIIDC)",
            nameHindi: "हरियाणा राज्य औद्योगिक एवं अवसंरचना विकास निगम",
            details: "Set up on 8th March, 1967. Headquartered at Panchkula. Promotes medium and large scale industries. 100% equity by Haryana Government. Developed Industrial Model Townships (IMTs) at Manesar, Rohtak (3800 acres), Faridabad (1800 acres), Roz-ka-Meo (1500 acres), Kharkhoda (3000 acres)."
        },
        {
            name: "Haryana State Small Industries and Export Corporation",
            nameHindi: "हरियाणा राज्य लघु उद्योग एवं निर्यात निगम",
            details: "Set up on 19th July, 1967. Assists small and medium scale industries. Provides raw materials at subsidised rates. Encourages export quality production."
        },
        {
            name: "Haryana Agro Industries Corporation Limited",
            nameHindi: "हरियाणा एग्रो इंडस्ट्रीज कॉर्पोरेशन लिमिटेड",
            location: "Murthal, Sonipat",
            details: "R&D facilities in agro based industries. Employs rural youth for apiculture (honey bees), mushroom production and compost production."
        }
    ];

    // Section 16: Industrial Parks and Estates
    const industrialParks = [
        { name: "Gems and Jewellery Parks", location: "Udyog Vihar (Gurugram)" },
        { name: "Mega Food Parks", location: "Rai (Sonipat), Saha (Ambala), Barhi (Sonipat - developing)" },
        { name: "Export Promotion Industrial Park", location: "Kundli (Sonipat)" },
        { name: "Information Technology Parks", location: "Panchkula, Rai (Sonipat), Rohtak" },
        { name: "Readymade Garments Park", location: "Gurugram" },
        { name: "Leather Garments Park", location: "Bahadurgarh" },
        { name: "Readymade Apparel Park", location: "Barhi (Sonipat)" },
        { name: "Pharmaceutical Park", location: "Karnal (Proposed)" },
        { name: "Footwear Park", location: "Karnal" },
        { name: "Information Technology Park", location: "Manesar" },
        { name: "Biotechnology Park", location: "Manesar" },
        { name: "Leather Park", location: "Kharkhoda (Sonipat) (Proposed)" }
    ];

    // Section 17: Haryana Industrial Policy 2015
    const industrialPolicy2015 = {
        title: "Haryana Industrial Policy, 2015 (Enterprises Promotion Policy, 2015)",
        titleHindi: "हरियाणा औद्योगिक नीति, 2015",
        effectiveDate: "11th August, 2015",
        features: [
            "Aim to create 4 lakh jobs with investment of ₹1 lakh crore",
            "Open 20 new SEZs",
            "Promotes Make in India, Digital India and Skill India",
            "Increase industrial investment by 8%",
            "Four foundation pillars: NIRBAADH (Ease of doing business), Enhancing competitiveness, Balanced regional growth, Supporting MSME"
        ]
    };

    // Section 18: NIRBAADH
    const nirbaadh = {
        title: "NIRBAADH (New Industrial Regulation by Automatic Approval and Delegation in Haryana)",
        features: [
            "Two tier system of project clearances - above ₹10 crore and below ₹10 crore",
            "Online clearances through e-biz portal from 1st October 2015",
            "No CLU (Change of Land Use) permission needed in 31 blocks",
            "Simplified mechanism for industrial licensing"
        ]
    };

    // Section 19: Haryana Enterprises and Employment Policy, 2020
    const policy2020 = {
        title: "Haryana Enterprises and Employment Policy, 2020",
        objectives: [
            "Attract investments of INR 1 lakh crores and generate 5 lakh jobs",
            "Develop world class infrastructure with lower operating costs",
            "Support MSME for enhancing productivity, quality and market access",
            "Three tier grievances redressal committees",
            "Seven thrust areas: Auto & light engineering, Agro based & food processing, Textile & apparel, Electronic System Design & Manufacturing, Defense & aerospace, Pharmaceutical & medical devices, Chemical & Petrochemicals, Large scale energy & data storage"
        ]
    };

    // Section 20: Industrial Awards
    const industrialAwards = [
        { name: "State Award for Outstanding Entrepreneurship", amount: "₹3 lakh" },
        { name: "State Export Award", amount: "₹5 lakh each (18 awards including Women Exporter Award)" },
        { name: "Consolation Prizes", amount: "₹51,000 each (19 prizes)" },
        { name: "Mukhya Mantri Shram Ratan Award", amount: "₹1 lakh" },
        { name: "Haryana Shram Bhushan Award", amount: "₹50,000" },
        { name: "Haryana Shram Veer Award", amount: "₹20,000" },
        { name: "Haryana Shram Veerangna Award", amount: "₹20,000" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 dark:from-slate-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-slate-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 hover:bg-slate-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 text-sm font-medium backdrop-blur-sm">
                        <Factory className="w-4 h-4" />
                        {language === "hindi" ? "उद्योग - हरियाणा सरकार" : "Industries - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा में" : "Industries in"} <span className="text-slate-600 dark:text-slate-400">{language === "hindi" ? "उद्योग" : "Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के औद्योगिक विकास, प्रमुख उद्योगों, औद्योगिक केंद्रों, नीतियों और पुरस्कारों की संपूर्ण जानकारी"
                            : "Complete information about Haryana's industrial development, key industries, industrial centres, policies and awards"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Car className="w-4 h-4 text-slate-600" />
                            <span>{language === "hindi" ? "ऑटोमोबाइल" : "Automobile"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Shirt className="w-4 h-4 text-slate-600" />
                            <span>{language === "hindi" ? "वस्त्र" : "Textiles"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Laptop className="w-4 h-4 text-slate-600" />
                            <span>{language === "hindi" ? "आईटी" : "IT"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Pill className="w-4 h-4 text-slate-600" />
                            <span>{language === "hindi" ? "फार्मास्युटिकल" : "Pharmaceutical"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Building className="w-4 h-4 text-slate-600" />
                            <span>{language === "hindi" ? "रियल एस्टेट" : "Real Estate"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Section 1: History of Industrial Development */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-slate-500/20">
                                <History className="w-5 h-5 text-slate-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? historyOverview.titleHindi : historyOverview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? historyOverview.contentHindi : historyOverview.contentEnglish}</p>
                    </div>

                    {/* Section 2: Key Industries Overview */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-6 md:p-8 border border-blue-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                <Briefcase className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{language === "hindi" ? keyIndustries.titleHindi : keyIndustries.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground">{language === "hindi" ? keyIndustries.contentHindi : keyIndustries.contentEnglish}</p>
                    </div>

                    {/* Section 3: Food Processing Industries */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-6 md:p-8 border border-green-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                                <Utensils className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">{language === "hindi" ? "खाद्य प्रसंस्करण एवं संबद्ध उद्योग" : "Food Processing and Allied Industry"}</h2>
                        </div>
                        <div className="space-y-4">
                            {foodProcessingIndustries.map((industry, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-green-600">{language === "hindi" ? industry.nameHindi : industry.name}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {industry.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{industry.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 4: Agro Based Industries */}
                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6 md:p-8 border border-amber-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                                <Tractor className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400">{language === "hindi" ? "कृषि आधारित उद्योग" : "Agro Based Industry"}</h2>
                        </div>
                        <div className="space-y-4">
                            {agroBasedIndustries.map((industry, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-amber-600">{language === "hindi" ? industry.nameHindi : industry.name}</h3>
                                    <p className="text-sm text-muted-foreground">{industry.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 5: Automobile Industries */}
                    <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-6 md:p-8 border border-red-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-red-100 dark:bg-red-900/30">
                                <Car className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">{language === "hindi" ? "ऑटोमोबाइल एवं ऑटोमोटिव घटक" : "Automobiles and Automotive Components"}</h2>
                        </div>
                        <div className="space-y-4 mb-6">
                            {automobileIndustries.map((industry, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-red-600">{language === "hindi" ? industry.nameHindi : industry.name}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {industry.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{industry.details}</p>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-xl font-semibold text-red-600 mb-3">{language === "hindi" ? "हरियाणा में ऑटोमोबाइल इकाइयाँ" : "Automobile Units in Haryana"}</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-red-100 dark:bg-red-900/30">
                                        <th className="border p-2 text-left">{language === "hindi" ? "कंपनी" : "Company"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "स्थान" : "Location"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "उत्पाद" : "Product"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {automobileUnits.map((unit, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{unit.name}</td>
                                            <td className="border p-2">{unit.location}</td>
                                            <td className="border p-2">{unit.product}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 6: Petro Chemical Industries */}
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-2xl p-6 md:p-8 border border-yellow-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-yellow-100 dark:bg-yellow-900/30">
                                <Flame className="w-5 h-5 text-yellow-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">{language === "hindi" ? "पेट्रो रसायन उद्योग" : "Petro Chemical Industry"}</h2>
                        </div>
                        <div className="space-y-4">
                            {petroChemicalIndustries.map((industry, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-yellow-600">{industry.name}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {industry.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{industry.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 7: Waste Processing Industry */}
                    <div className="bg-teal-50 dark:bg-teal-950/20 rounded-2xl p-6 md:p-8 border border-teal-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-teal-100 dark:bg-teal-900/30">
                                <Recycle className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-400">{language === "hindi" ? wasteIndustry.titleHindi : wasteIndustry.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground">{wasteIndustry.details}</p>
                    </div>

                    {/* Section 8: Information Technology */}
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-2xl p-6 md:p-8 border border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                                <Laptop className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400">{language === "hindi" ? "सूचना प्रौद्योगिकी एवं आईटी सक्षम सेवाएं" : "Information Technology and IT Enabled Services"}</h2>
                        </div>
                        <div className="space-y-4">
                            {itIndustries.map((industry, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-purple-600">{industry.name}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {industry.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{industry.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 9: Biotech and Pharmaceuticals */}
                    <div className="bg-pink-50 dark:bg-pink-950/20 rounded-2xl p-6 md:p-8 border border-pink-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-900/30">
                                <Pill className="w-5 h-5 text-pink-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400">{language === "hindi" ? "जैव प्रौद्योगिकी उद्योग एवं फार्मास्युटिकल्स" : "Biotech Industry and Pharmaceuticals"}</h2>
                        </div>
                        <div className="space-y-4">
                            {biotechIndustries.map((industry, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-pink-600">{industry.name}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {industry.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{industry.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 10: Real Estate */}
                    <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-2xl p-6 md:p-8 border border-indigo-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
                                <Building className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">{language === "hindi" ? "रियल एस्टेट एवं निर्माण उद्योग" : "Real Estate and Construction Industry"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {realEstateCompanies.map((company, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-3 border">
                                    <h3 className="font-semibold text-indigo-600">{company.name}</h3>
                                    {company.established && <p className="text-xs text-muted-foreground">Established: {company.established}</p>}
                                    <p className="text-sm text-muted-foreground mt-1">{company.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 11: Key Industrial Centres */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Factory className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा के प्रमुख औद्योगिक केंद्र" : "Key Industrial Centres in Haryana"}</h2>
                        </div>
                        <div className="space-y-6">
                            {industrialCentres.map((centre, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-4 border">
                                    <h3 className="font-semibold text-lg text-primary">{centre.name} {centre.title && `- ${centre.title}`}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{centre.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 12: Industries and Places Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Map className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "उद्योग एवं संबंधित स्थान" : "Industries and Related Places"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "प्रमुख उद्योग" : "Major Industry"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "मुख्य केंद्र" : "Main Centres"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {industriesAndPlaces.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{item.industry}</td>
                                            <td className="border p-2">{item.centres}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 13: City Titles Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Award className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "औद्योगिक इकाइयों के अनुसार शहरों के उपनाम" : "City Titles According to Industrial Units"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "शहर" : "City"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "उपनाम" : "Title"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cityTitles.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{item.city}</td>
                                            <td className="border p-2">{item.titles}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 14: Major Sugar Mills Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Wine className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "प्रमुख चीनी मिलें" : "Major Sugar Mills in Haryana"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "चीनी मिल" : "Sugar Mill"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "स्थापना वर्ष" : "Year of Establishment"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sugarMills.map((mill, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{mill.name}</td>
                                            <td className="border p-2">{mill.year}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 15: Industrial Development Agencies */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-2xl p-6 md:p-8 border border-cyan-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-900/30">
                                <Building2 className="w-5 h-5 text-cyan-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">{language === "hindi" ? "प्रमुख औद्योगिक विकास एजेंसियां" : "Major Industrial Development Agencies"}</h2>
                        </div>
                        <div className="space-y-4">
                            {developmentAgencies.map((agency, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-cyan-600">{agency.name}</h3>
                                    {agency.location && <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {agency.location}</p>}
                                    <p className="text-sm text-muted-foreground mt-1">{agency.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 16: Industrial Parks */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <BuildingIcon className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा में औद्योगिक पार्क" : "Industrial Parks in Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {industrialParks.map((park, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-lg p-3 border">
                                    <p className="font-medium">{park.name}</p>
                                    <p className="text-sm text-muted-foreground">{park.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 17: Haryana Industrial Policy 2015 */}
                    <div className="bg-orange-50 dark:bg-orange-950/20 rounded-2xl p-6 md:p-8 border border-orange-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-900/30">
                                <FileText className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-400">{language === "hindi" ? industrialPolicy2015.titleHindi : industrialPolicy2015.title}</h2>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3"><strong>{language === "hindi" ? "प्रभावी तिथि:" : "Effective Date:"}</strong> {industrialPolicy2015.effectiveDate}</p>
                        <ul className="list-disc list-inside space-y-1">
                            {industrialPolicy2015.features.map((feature, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground">{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Section 18: NIRBAADH */}
                    <div className="bg-lime-50 dark:bg-lime-950/20 rounded-2xl p-6 md:p-8 border border-lime-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-lime-100 dark:bg-lime-900/30">
                                <Shield className="w-5 h-5 text-lime-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-lime-700 dark:text-lime-400">{nirbaadh.title}</h2>
                        </div>
                        <ul className="list-disc list-inside space-y-1">
                            {nirbaadh.features.map((feature, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground">{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Section 19: Haryana Enterprises and Employment Policy 2020 */}
                    <div className="bg-rose-50 dark:bg-rose-950/20 rounded-2xl p-6 md:p-8 border border-rose-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-900/30">
                                <Users className="w-5 h-5 text-rose-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-rose-700 dark:text-rose-400">{policy2020.title}</h2>
                        </div>
                        <ul className="list-disc list-inside space-y-1">
                            {policy2020.objectives.map((obj, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground">{obj}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Section 20: Industrial Awards */}
                    <div className="bg-gold-50 dark:bg-yellow-950/20 rounded-2xl p-6 md:p-8 border border-yellow-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-yellow-100 dark:bg-yellow-900/30">
                                <Award className="w-5 h-5 text-yellow-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">{language === "hindi" ? "हरियाणा में औद्योगिक पुरस्कार" : "Industrial Awards in Haryana"}</h2>
                        </div>
                        <div className="space-y-3">
                            {industrialAwards.map((award, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-3 border flex justify-between items-center">
                                    <span className="font-medium">{award.name}</span>
                                    <span className="font-bold text-yellow-600">{award.amount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा उद्योग: तथ्य सारांश" : "Haryana Industries: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">3rd</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "सॉफ्टवेयर निर्यातक" : "Software Exporter"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">50%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "कार बाजार हिस्सेदारी" : "Car Market Share"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">1 Lakh Cr</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "निवेश लक्ष्य (2020 नीति)" : "Investment Target (2020 Policy)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">5 Lakh</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "रोजगार लक्ष्य (2020 नीति)" : "Job Target (2020 Policy)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">250+</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "फॉर्च्यून 500 कंपनियाँ" : "Fortune 500 Companies"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">103</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "औद्योगिक एस्टेट" : "Industrial Estates"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">37</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "एसईजेड" : "SEZs"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">8%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "औद्योगिक निवेश लक्ष्य" : "Industrial Investment Target"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 text-slate-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा के उद्योगों के बारे में" : "Common"} <span className="text-slate-600">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Industries in Haryana"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के उद्योगों, औद्योगिक केंद्रों, नीतियों और पुरस्कारों के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's industries, industrial centres, policies and awards"}
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-muted/30 transition-colors"
                                >
                                    <span className="font-semibold text-base md:text-lg pr-4">{language === "hindi" ? faq.questionHindi : faq.questionEnglish}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-slate-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-96" : "max-h-0"
                                        }`}
                                >
                                    <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t">
                                        <p className="text-muted-foreground leading-relaxed pt-4">
                                            {language === "hindi" ? faq.answerHindi : faq.answerEnglish}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-muted-foreground mb-4">
                            {language === "hindi" ? "अपने हरियाणा उद्योगों के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Industries in Haryana?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-slate-600 hover:bg-slate-700">
                                {language === "hindi" ? "हरियाणा उद्योग क्विज़ लें" : "Take Haryana Industries Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/minerals-energy" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "पीछे जाएँ: हरियाणा के खनिज और ऊर्जा संसाधन" : "Back to Minerals and Energy Resources of Haryana"}
                        </Link>
                        {/* <Link href="/haryana-gk/tourism" className="text-slate-600 hover:text-slate-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: हरियाणा के पर्यटन स्थल" : "Next Chapter: Tourism in Haryana"}
                            <ChevronRight className="w-4 h-4" />
                        </Link> */}
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा में उद्योग - संपूर्ण संदर्भ" : "Industries in Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के औद्योगिक विकास, प्रमुख उद्योगों, औद्योगिक केंद्रों, नीतियों और पुरस्कारों के बारे में व्यापक जानकारी प्रदान करता है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about industrial development, key industries, industrial centres, policies and awards of Haryana. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और औद्योगिक नीतियों से स्रोतित" : "Information sourced from official Government of Haryana publications and industrial policies"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}

