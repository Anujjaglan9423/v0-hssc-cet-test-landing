"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    Map,
    ChevronDown,
    HelpCircle,
    ArrowLeft,
    Users,
    Repeat,
    Route,
    Globe,
    Laptop,
    Bus,
    Train,
    Plane,
    Newspaper,
    Tv,
    Clapperboard,
    RadioTower,
    Navigation,
    TrainFront,
    Star,
    Book,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TransportAndCommunicationPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [language, setLanguage] = useState<"hindi" | "english">("hindi");

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "hindi" ? "english" : "hindi"));
    };

    // FAQ data bilingual
    const faqs = [
        {
            questionHindi:
                "हरियाणा का सबसे लोकप्रिय और व्यावसायिक रूप से महत्वपूर्ण मार्ग कौन सा है?",
            questionEnglish:
                "Which is the most popular and commercially important road of Haryana?",
            answerHindi:
                "ग्रैंड ट्रंक रोड (जीटी रोड) हरियाणा का सबसे लोकप्रिय और व्यावसायिक रूप से महत्वपूर्ण मार्ग है। यह NH-1 है और हरियाणा के उत्तर-पूर्व से होकर गुजरती है। इसे 'शेरशाह सूरी मार्ग' भी कहा जाता है।",
            answerEnglish:
                "The Grand Trunk Road (GT Road) is the most popular and commercially important road of Haryana. It is NH-1 and passes through the North-East of Haryana. It is also called 'Sher Shah Suri road'.",
        },
        {
            questionHindi: "हरियाणा का सबसे पुराना रेलवे स्टेशन कौन सा है?",
            questionEnglish: "Which is the oldest railway station in Haryana?",
            answerHindi:
                "रेवाड़ी रेलवे स्टेशन हरियाणा का सबसे पुराना रेलवे स्टेशन है।",
            answerEnglish:
                "Rewari Railway Station is the oldest railway station in Haryana.",
        },
        {
            questionHindi:
                "भारत का पहला पूर्णतः निजी स्वामित्व वाला मेट्रो कौन सा है?",
            questionEnglish:
                "Which is India's first fully privately owned and operated metro?",
            answerHindi:
                "गुरुग्राम का रैपिड मेट्रो भारत का पहला पूर्णतः निजी स्वामित्व वाला और संचालित मेट्रो है। यह 2013 में शुरू हुआ था।",
            answerEnglish:
                "Rapid Metro in Gurugram is India's first fully privately owned and operated metro. It started in 2013.",
        },
        {
            questionHindi: "हरियाणा का पहला समाचार पत्र कौन सा था?",
            questionEnglish: "Which was the first newspaper of Haryana?",
            answerHindi:
                "हरियाणा का पहला समाचार पत्र 'हरियाणा' था जो झज्जर से प्रकाशित हुआ था। 'रफाय आम' दूसरा समाचार पत्र था।",
            answerEnglish:
                "The first newspaper of Haryana was 'Haryana' published from Jhajjar. 'Refay Aam' was the second newspaper.",
        },
        {
            questionHindi: "हरियाणा का पहला रेडियो स्टेशन कहाँ स्थापित किया गया था?",
            questionEnglish:
                "Where was the first radio station of Haryana established?",
            answerHindi:
                "आकाशवाणी रोहतक (AIR Rohtak) हरियाणा का पहला रेडियो स्टेशन था, जिसे 8 मई, 1976 को स्थापित किया गया था।",
            answerEnglish:
                "Akashvani Rohtak (AIR Rohtak) was the first radio station of Haryana, established on 8th May, 1976.",
        },
        {
            questionHindi:
                "हरियाणा की पहली व्यावसायिक रूप से सफल हरियाणवी फिल्म कौन सी थी?",
            questionEnglish:
                "Which was the first commercially successful Haryanvi film?",
            answerHindi:
                "1982 में रिलीज़ हुई 'बहुरानी' हरियाणा की पहली व्यावसायिक रूप से सफल हरियाणवी फिल्म थी।",
            answerEnglish:
                "'Bahurani' released in 1982 was the first commercially successful Haryanvi film of Haryana.",
        },
        {
            questionHindi: "देश का एकमात्र स्टीम लोकोमोटिव संग्रहालय कहाँ स्थित है?",
            questionEnglish:
                "Where is the only steam locomotive museum in the country located?",
            answerHindi:
                "रेलवे हेरिटेज म्यूजियम रेवाड़ी जिले में स्थित है। यह देश का एकमात्र स्टीम लोकोमोटिव संग्रहालय है।",
            answerEnglish:
                "Railway Heritage Museum is located in Rewari district. It is the only steam locomotive museum in the country.",
        },
        {
            questionHindi: "हरियाणा का पहला सीएनजी ट्रेन कब और कहाँ चला?",
            questionEnglish: "When and where was the first CNG train of Haryana run?",
            answerHindi:
                "हरियाणा का पहला सीएनजी ट्रेन 15 जनवरी, 2015 को रेवाड़ी से रोहतक के बीच चलाया गया था।",
            answerEnglish:
                "The first CNG train of Haryana was run from Rewari to Rohtak on 15th January, 2015.",
        },
    ];

    // Section 1: Transport System Overview
    const transportOverview = {
        titleHindi: "हरियाणा में परिवहन प्रणाली",
        titleEnglish: "Transport System in Haryana",
        contentHindi:
            "हरियाणा में परिवहन प्रणाली पूरी तरह से विकसित है। हरियाणा के 13 जिले एनसीआर और आसपास के क्षेत्रों में स्थित हैं, जिसके कारण राज्य में परिवहन प्रणाली सहित बुनियादी ढांचे का विकास अच्छी तरह से उन्नत है। हरियाणा का सबसे लोकप्रिय और व्यावसायिक रूप से महत्वपूर्ण मार्ग ग्रैंड ट्रंक रोड है। यह NH-1 है और हरियाणा के उत्तर-पूर्व से होकर गुजरती है। इस सड़क को 'शेरशाह सूरी मार्ग' भी कहा जाता है और इसका बड़ा ऐतिहासिक महत्व है। हरियाणा की परिवहन प्रणाली को 3 मुख्य श्रेणियों में विभाजित किया गया है: सड़क परिवहन; रेल परिवहन और हवाई परिवहन।",
        contentEnglish:
            "Transport system is completely developed in Haryana. 13 districts of Haryana lie in NCR and adjoining areas due to which the infrastructural development including transport system is well advanced in the state. Most popular and commercially important road of Haryana is Grand Trunk road. It is NH-1 and passes through the North-East of Haryana. This road is also called 'Sher Shah Suri road' and has great historical importance. The transport system of Haryana is divided into 3 main categories: Road transport; Rail transport and Air transport.",
    };

    // Section 2: Road Transport Statistics
    const roadTransportStats = {
        titleHindi: "हरियाणा में सड़क परिवहन",
        titleEnglish: "Road Transport in Haryana",
        contentHindi:
            "हरियाणा में, सभी गाँव, कस्बे और जिले ऑल वेदर मेटल सड़कों से जुड़े हुए हैं। गठन के समय, राज्य में कुल सड़क मार्ग 5100 किमी था। हरियाणा में भारत के कुल सड़क नेटवर्क का 1.19% है। आर्थिक सर्वेक्षण 2020-21 के अनुसार, हरियाणा में कुल सड़क लंबाई 27235 किमी है। हरियाणा का सड़क घनत्व 104.69 प्रति वर्ग किमी है। अंबाला में मेटल सड़क का सबसे अधिक सड़क घनत्व है और सबसे कम सड़क घनत्व जींद जिले में पाया जाता है। हिसार जिले में सबसे बड़ी सड़क लंबाई (2108 किमी) है और सबसे छोटी सड़क लंबाई फरीदाबाद जिले (522 किमी) में है। राज्य ने वर्ष 2008-09 में वाहनों में अधिकतम सुधार के लिए ARSTU ट्रॉफी प्राप्त की। हरियाणा में, बस स्टैंड के विकास के लिए PPP मॉडल अपनाया गया है। दो बस स्टैंड - पिपली (कुरुक्षेत्र) और राजीव चौक (गुरुग्राम) इस मोड द्वारा संचालित हैं। हरियाणा राज्य कृषि विपणन बोर्ड ने गाँवों को जिलों से जोड़ने के लिए ग्रामीण सड़कों का निर्माण किया है। बोर्ड ने गाँवों में लगभग 11216 किमी सड़कों का निर्माण किया है, जिसमें सबसे लंबी सड़क सिरसा (1642 किमी) में बनाई गई है। भिवानी जिले में राष्ट्रीय राजमार्ग की सबसे लंबी लंबाई (313 किमी) है जबकि फतेहाबाद जिले में राष्ट्रीय राजमार्ग की सबसे छोटी लंबाई है। राज्य के प्रति लाख जनसंख्या पर 182.58 किमी सड़क उपलब्ध है। राज्य के प्रति लाख जनसंख्या पर सड़क की अधिकतम लंबाई भिवानी जिले में है और सबसे कम फरीदाबाद जिले में है। राज्य में 4 ड्राइविंग प्रशिक्षण केंद्र हैं - बहादुरगढ़ (मारुति उद्योग के सहयोग से), कैथल (अशोक लेलैंड के सहयोग से), भिवानी (केंद्र सरकार के सहयोग से) और मेवात में।",
        contentEnglish:
            "In Haryana, all villages, towns and districts are connected with all weather metalled roads. At the time of its formation, the total roadway in the state was 5100 km. Haryana has 1.19% of the total road network in India. As per Economic Survey 2020-21, the total road length in Haryana is 27235 km. The road density of Haryana is 104.69 per square km. Ambala has the highest road density of metalled road and the lowest density of road is found in Jind district. Hisar district has largest road length (2108 km) and smallest road length is in Faridabad district (522 km). The state received ARSTU Trophy for maximum improvement in vehicle in the year 2008-09. In Haryana, PPP model is adopted for development of bus-stands. Two bus-stands i.e. Pipli (Kurukshetra) and Rajiv Chowk (Gurugram) are operating by this mode. The Haryana State Agricultural Marketing Board has constructed village roads to link them to the districts. The board has constructed around 11216 km of roads in villages of which the longest road is built in Sirsa (1642 km). Bhiwani district has the highest length of National Highway (313 km) while Fatehabad district has the shortest length of National Highway. 182.58 km of road is available per lakh population of the state. The maximum length of roads per lakh population of the state is in Bhiwani district and the lowest is in Faridabad district. The state has 4 Driving Training Centers in Bahadurgarh (in association with Maruti Udyog), Kaithal (in association with Ashok Leyland), Bhiwani (in association with Central Government) and Mewat.",
    };

    // Section 3: National Highways Table
    const nationalHighways = [
        {
            nhNo: "NH-2",
            route:
                "Eastern Peripheral Expressway around in Uttar Pradesh and Haryana",
            length: "44",
        },
        { nhNo: "NH-5", route: "Ambala-Panchkula-Pinjore", length: "28.3" },
        {
            nhNo: "NH-7",
            route: "Punjab-Panchkula, Raipur Rani, Ghana in Haryana-Himachal Pradesh",
            length: "39.5",
        },
        {
            nhNo: "NH-9",
            route: "Bahadurgarh-Rohtak-Hansi-Hisar-Fatehabad-Sirsa",
            length: "285.9",
        },
        { nhNo: "NH-11", route: "Narnaul No-352-Rewari", length: "88" },
        {
            nhNo: "NH-44",
            route: "Ambala-Pipli-Karnal-Sonipat-Mathura",
            length: "257.8",
        },
        { nhNo: "NH-48", route: "Gurugram-Dharuhera", length: "83.3" },
        { nhNo: "NH-52", route: "Hisar", length: "143.2" },
        { nhNo: "NH-54", route: "Dabwali", length: "38.5" },
        {
            nhNo: "NH-105",
            route: "Pinjore-Karanpur-Himachal Pradesh border",
            length: "17.5",
        },
        { nhNo: "NH-148A", route: "Gurugram", length: "6" },
        { nhNo: "NH-152", route: "Kaithal-Ambala-Panchkula", length: "122" },
        { nhNo: "NH-248A", route: "Sahpura-Alwar, Ramgarh", length: "111" },
        { nhNo: "NH-254", route: "Dabwali (NH No-54)", length: "47" },
        {
            nhNo: "NH-334B",
            route: "Sonipat-Kurukshetra-Jhajjar-Charkhi Dadri-Loharu",
            length: "180",
        },
        { nhNo: "NH-344", route: "Ambala-Yamunanagar", length: "109.4" },
        { nhNo: "NH-352", route: "Rohtak-Jhajjar-Rewari", length: "186.1" },
        {
            nhNo: "NH-444A",
            route: "Junction with NH No-44 near Ambala-No-44 at Shahabad",
            length: "44",
        },
        {
            nhNo: "NH-703",
            route: "Sardulgarh-junction with new NH-9 near Sirsa",
            length: "15",
        },
        { nhNo: "NH-709", route: "Rohtak-Panipat-Bhiwani", length: "188.3" },
        {
            nhNo: "NH-907",
            route:
                "Yamunanagar (NH-73)-Jagadhri-Chhachhrauli-Himachal Pradesh border",
            length: "45.9",
        },
        { nhNo: "NH-919", route: "Rewari-Palwal", length: "67.9" },
    ];

    // Section 4: State Highways Table
    const stateHighways = [
        {
            shNo: "SH-1",
            route: "Jagadhri-Bilaspur-Sadhaura-Narayangarh-Raipur Rani Road",
            length: "63.90",
        },
        { shNo: "SH-2", route: "Surewala-Chowk-Fatehabad", length: "50.01" },
        { shNo: "SH-4", route: "Kala Amb-Sadhaura-Shahbad", length: "75.50" },
        { shNo: "SH-5", route: "Saharanpur-Ambala", length: "15.14" },
        { shNo: "SH-6", route: "Saharanpur-Radaur-Pipli-Pehova", length: "103.64" },
        { shNo: "SH-6(A)", route: "Jagadhri-Paonta", length: "3.70" },
        { shNo: "SH-7", route: "Karnal-Ladwa-Shahbad", length: "59.25" },
        {
            shNo: "SH-8",
            route: "Kunjpura-Karnal-Kaithal-Khanauri",
            length: "95.85",
        },
        { shNo: "SH-9", route: "Kaithal-Pehova-Patiala", length: "60.25" },
        {
            shNo: "SH-10",
            route: "Gohana-Jind-Barwala-Agroha-Adampur-Bhadra",
            length: "134.78",
        },
        {
            shNo: "SH-11",
            route: "Meerut-Sonipat-Gohana-Assandh-Kaithal-Patiala",
            length: "166.81",
        },
        {
            shNo: "SH-12",
            route: "Karnal-Assandh-Jind-Hansi-Tosham",
            length: "192.32",
        },
        {
            shNo: "SH-14",
            route: "Panipat-Safidon-Jind-Bhiwani-Loharu",
            length: "129.78",
        },
        { shNo: "SH-22", route: "Bahadurgarh-Jhajjar-Kosli", length: "77.6" },
        {
            shNo: "SH-24",
            route: "Rewari-Kanina-Mahendragarh-Loharu",
            length: "92.45",
        },
        { shNo: "SH-32", route: "Sirsa-Rania-Jeevanmagar", length: "70.43" },
        { shNo: "SH-33", route: "Nilokheri-Dandrodhi", length: "28.64" },
    ];

    // Section 5: Expressways
    const expressways = [
        {
            name: "Panipat Elevated Expressway",
            nameHindi: "पानीपत एलिवेटेड एक्सप्रेसवे",
            details:
                "10 km long elevated expressway to ease traffic on NH-1 between Delhi and Panipat. 6-lanes access control highway. 3.6 km flyover is the longest 6-lanes flyover in India. BOT project executed by L&T Panipat Elevated Corridor Limited (PECL).",
        },
        {
            name: "KMP Expressway (Kundli-Manesar-Palwal)",
            nameHindi: "केएमपी एक्सप्रेसवे (कुंडली-मानेसर-पलवल)",
            details:
                "Also known as Western Peripheral Expressway. 135.6 km long 6-lane expressway. Started in 2006. Acts as Delhi bypass. Starts from Sonipat (Kundli) to Palwal via Gurugram (Pachgaon), Mewat (Rozka Meo Industrial Area). Passes through Bahadurgarh, Nuh, Sohna, Manesar, Hathin.",
        },
        {
            name: "KGP Expressway (Kundli-Ghaziabad-Palwal)",
            nameHindi: "केजीपी एक्सप्रेसवे (कुंडली-गाजियाबाद-पलवल)",
            details:
                "Also known as Eastern Peripheral Expressway. 135 km long 6-lane expressway. Starts from Kundli, Sonipat, passing through Baghpat, Ghaziabad, Noida (UP) and Faridabad (Haryana).",
        },
        {
            name: "Dwarka Expressway",
            nameHindi: "द्वारका एक्सप्रेसवे",
            details:
                "Northern Peripheral Road or NH-248-BB (8-lane) under construction. 28 km long (18 km in Haryana-Gurugram, 10 km in Delhi-Dwarka). India's largest and Asia's second largest toll gate with 32 lanes. Part of Golden Quadrilateral Project under NHDP.",
        },
    ];

    // Section 6: State Government Initiatives for Road Transport
    const transportInitiatives = [
        {
            name: "Sarthi",
            nameHindi: "सारथी",
            details:
                "Air-conditioned bus services. Haryana Transport Corporation tied up with Volvo Company. Sarathi Volvo AC bus service on Delhi-Chandigarh-Gurugram road.",
        },
        {
            name: "Haryana Gaurav",
            nameHindi: "हरियाणा गौरव",
            details:
                "Regular buses with deluxe facilities at ordinary fare. Popular as 'Aam Adami Ki Khas Bus'. Facilities: FM radio, phone charger, machine operated doors and windows.",
        },
        {
            name: "Haryana Uday",
            nameHindi: "हरियाणा उदय",
            details:
                "CNG bus service for pollution free transport. Low floor CNG buses on Delhi-Gurugram and Delhi-Faridabad routes. Being extended to Panchkula, Rohtak, Gurugram and Faridabad.",
        },
        {
            name: "Harpath",
            nameHindi: "हरपथ",
            details:
                "Mobile application for pothole free roads. Uses geospatial technologies to report grievances about damaged roads, accident black spots. Developed with National Remote Sensing Centre and National Information Centre. GPS based vehicle tracking in 400 buses.",
        },
    ];

    // Section 7: Railway Transport
    const railwayOverview = {
        titleHindi: "हरियाणा में रेल परिवहन",
        titleEnglish: "Railway Transport in Haryana",
        contentHindi:
            "राज्य के गठन के समय, राज्य में 3245.11 किमी रेलवे लाइन मौजूद थी, जिसमें मीटर गेज लाइन की लंबाई 2985.55 किमी और नैरो गेज की 259.56 किमी थी। हरियाणा का सबसे पुराना रेलवे स्टेशन रेवाड़ी रेलवे स्टेशन है। वर्तमान में, राज्य में लगभग 4439.16 किमी रेलवे ट्रैक है। हरियाणा में रेल नेटवर्क तीन रेलवे जोन और पांच रेलवे डिवीजनों के अंतर्गत आता है। जोन हैं: उत्तर पश्चिम रेलवे जोन (बीकानेर और जयपुर डिवीजन); उत्तरी रेलवे जोन (दिल्ली और अंबाला डिवीजन) और उत्तर मध्य रेलवे जोन (आगरा डिवीजन)। अंबाला डिवीजन उत्तरी रेलवे जोन का मुख्यालय है। राज्य में पहली सीएनजी ट्रेन 15 जनवरी, 2015 को रेवाड़ी से रोहतक के बीच चलाई गई। मेवात जिले के नूह शहर में कोई रेलवे लाइन और रेलवे स्टेशन नहीं है।",
        contentEnglish:
            "At the time of formation of the state, 3245.11 km railway line was present in the state, in which the length of the meter gauge line was 2985.55 km and that of narrow gauge was 259.56 km. The oldest railway station of Haryana is Rewari Railway Station. At present, the state has about 4439.16 km of railway track. Rail Network in Haryana falls under three Railway Zones and five Railway Divisions. The zones are North Western Railway Zone (Bikaner and Jaipur divisions); Northern Railway Zone (Delhi and Ambala divisions) and North Central Railway Zone (Agra division). Ambala division of Indian Railways is the headquarters of Northern Railway Zone. The state has the record to run the first CNG train from Rewari to Rohtak on 15th January, 2015. There is no railway line and railway station in Nuh town of Mewat district.",
    };

    // Section 8: Main Railway Routes
    const railwayRoutes = [
        "Rewari-Delhi rail route",
        "Rewari-Bawal-Alwar rail route",
        "Rewari-Narnaul-Ringas Rajasthan rail route",
        "Rewari-Kanina-Mahendragarh-Satnali-Loharu rail route",
        "Rewari-Dadri-Bhiwani-Hansi-Hisar-Sirsa-Bhatinda rail route",
        "Rewari-Rohtak rail route",
    ];

    // Section 9: Link Railway Routes
    const linkRoutes = [
        "Rohtak-Gohana-Panipat Rail Route - connects Delhi-Jind-Ferozepur route with Delhi-Ambala-Amritsar route at Panipat junction",
        "Jind-Safidon-Panipat Link Rail Route - connects Jind to Panipat Junction via Safidon",
        "Narwana-Kaithal-Kurukshetra Link Rail Route - connects Narwana Junction to Kurukshetra Junction via Kaithal",
    ];

    // Section 10: Routes to Other States
    const interStateRoutes = [
        "Amritsar-Delhi",
        "Rewari-Ahmedabad",
        "Bhiwani-Rohtak-Delhi",
        "Ambala-Ferozepur",
        "Delhi-Ferozepur",
        "Kalka-Jodhpur",
        "Kalka-Howrah",
        "Amritsar-Howrah",
        "Delhi-Shimla",
    ];

    // Section 11: Metro Railway Network
    const metroNetworks = [
        {
            name: "Delhi-Gurugram Metro Rail",
            nameHindi: "दिल्ली-गुरुग्राम मेट्रो रेल",
            details:
                "First Metro Rail Network in Haryana started in 2016. Yellow line connects Qutub Minar (Delhi) to HUDA City Centre (Gurugram). 48.3 km long - second longest metro line of Delhi Metro.",
        },
        {
            name: "Rapid Metro Rail, Gurugram",
            nameHindi: "रैपिड मेट्रो रेल, गुरुग्राम",
            details:
                "Fully elevated metro system since 2013. India's first fully privately owned and operated metro. 11.7 km with 11 stations. Linked with Delhi Metro's Yellow Line at Sikandarpur.",
        },
        {
            name: "Delhi-Faridabad Metro Rail Route",
            nameHindi: "दिल्ली-फरीदाबाद मेट्रो रेल मार्ग",
            details:
                "Violet line connecting Kashmiri Gate (Delhi) to Mujeesar (Faridabad). Phase 1: 2010 (Central Secretariat to Sarita Vihar), Phase 2: 2011 (extended to Badarpur), Phase 3: 2015 (extended to Mujeesar).",
        },
        {
            name: "Mundka-Bahadurgarh Metro Rail Route",
            nameHindi: "मुंडका-बहादुरगढ़ मेट्रो रेल मार्ग",
            details:
                "Green line. Work started in 2013, completed by June 2018. Total 7 stations (4 in Delhi, 3 in Haryana).",
        },
        {
            name: "Narela-Kundli Metro Rail Route",
            nameHindi: "नरेला-कुंडली मेट्रो रेल मार्ग",
            details:
                "Estimated cost ₹968.2 crore. Started on 1st June, 2017. Expected completion by 2022.",
        },
    ];

    // Section 12: Air Transport
    const airTransport = {
        titleHindi: "हरियाणा में हवाई परिवहन",
        titleEnglish: "Air Transport in Haryana",
        contentHindi:
            "हरियाणा सरकार का नागरिक उड्डयन विंग 1 नवंबर, 1966 को गठित किया गया था। उड्डयन विभाग ने हरियाणा में घरेलू और अंतर्राष्ट्रीय हवाई अड्डे स्थापित किए हैं। आर्थिक सर्वेक्षण 2020-21 के अनुसार, राज्य में 5 नागरिक उड्डयन एयरस्ट्रिप हैं - हिसार, भिवानी, करनाल, नारनौल और पिंजौर। राज्य में 2 उड़ान प्रशिक्षण केंद्र हैं - करनाल और पिंजौर। 31 जनवरी, 2010 को, नारनौल शहर में बच्छोद एयरस्ट्रिप के पास भारत का पहला एयरो स्पोर्ट्स सेंटर स्थापित किया गया था, जिसे राजीव गांधी एयरो स्पोर्ट्स सेंटर के नाम से जाना जाता है।",
        contentEnglish:
            "The Civil Aviation Wing of Haryana Government was formed on 1st November, 1966. The aviation department has set up domestic as well as international airports in Haryana. As per Economic Survey 2020-21, the state has 5 civil aviation airstrips in Hisar, Bhiwani, Karnal, Narnaul and Pinjore. The state has 2 flying training centres in Karnal and Pinjore. On 31st January, 2010, India's First Aero Sports Centre was established in the Narnaul city near Bachhod Airstrip, known as Rajiv Gandhi Aero Sports Centre.",
    };

    // Section 13: Airports
    const airports = [
        {
            name: "Chandigarh International Airport",
            nameHindi: "चंडीगढ़ अंतर्राष्ट्रीय हवाई अड्डा",
            details:
                "Runway located in UT of Chandigarh. Serves Punjab, Haryana and Himachal Pradesh. 6 domestic airlines connecting to 2 international and 15 domestic destinations. New terminal inaugurated by PM Modi on 11th September 2015.",
        },
        {
            name: "Hisar Domestic Airport",
            nameHindi: "हिसार घरेलू हवाई अड्डा",
            details:
                "Spread over 4194 acres. 165 km from IGI Delhi, 280 km from Chandigarh Airport. Phase 1: upgraded by Dec 2018. Phase 2: aero-city hub completed. Phase 3: international airport expected by 2024.",
        },
        {
            name: "Karnal Airport",
            nameHindi: "करनाल हवाई अड्डा",
            details:
                "Also known as Karnal Flying Club. Small airstrip 3 km East of Karnal. Running since 1967. Operations expanded in 1999 merging with Hisar and Pinjore Aviation Clubs.",
        },
        {
            name: "Gurugram Airstrip",
            nameHindi: "गुरुग्राम एयरस्ट्रिप",
            details:
                "Also called Bhondsi airstrip or Silokhera airstrip. 10 km South of Gurugram city centre. Single runway. Included in UDAN scheme.",
        },
        {
            name: "Narnaul Airstrip",
            nameHindi: "नारनौल एयरस्ट्रिप",
            details:
                "Mainly used by Rajiv Gandhi National Centre for Aero Sports. Inaugurated in 2010.",
        },
        {
            name: "Ambala Air Force Station",
            nameHindi: "अंबाला एयर फोर्स स्टेशन",
            details:
                "Air base built in 1948. Used for military and government flights. Attacked by Pakistani Air Force in 1965 and 1971 wars.",
        },
    ];

    // Section 14: Print Media - Newspapers History
    const newspaperHistory = [
        { year: "1889", name: "Jaat Samachar", editor: "Babu Kanhiya Lal" },
        { year: "1916", name: "Jat Gazette", editor: "Chaudhary Chotu Ram" },
        { year: "1923", name: "Haryana Tilak", editor: "-" },
        {
            year: "1925",
            name: "Jyotish Martand",
            editor: "-",
            location: "Gurugram",
        },
        { year: "1926", name: "Bhakti", editor: "Surdevi" },
        {
            year: "1928",
            name: "Jyotish Samachar",
            editor: "Pandit Prahlad Verma",
            location: "Rewari",
        },
        { year: "1930", name: "Sandeh", editor: "Pandit Neki Ram Sharma" },
        { year: "1936", name: "Gram Sewak", editor: "Hardev Sahay" },
        { year: "1941", name: "Sewak", editor: "-" },
        {
            year: "1948",
            name: "Gyanodaya Patra",
            editor: "Brahmanand",
            location: "Hisar",
        },
        {
            year: "1950",
            name: "Rangila Musafir",
            editor: "Pyarelal",
            location: "Hisar",
        },
        {
            year: "1950",
            name: "Haryana Sandesh",
            editor: "Amar Jyoti and Mahesh Chandra",
        },
        {
            year: "1956",
            name: "Vijayanand",
            editor: "Aatmaran Jain",
            location: "Ambala",
        },
        { year: "1957", name: "Chetna", editor: "Rabindra Nath Vashisth" },
        {
            year: "1958",
            name: "Haryana Kesari",
            editor: "Banarasi Das Gupt and K.B. Dutta",
            location: "Bhiwani",
        },
        {
            year: "1985",
            name: "Jain Prakash",
            editor: "Ziyalal Jain",
            note: "First Hindi newspaper",
        },
        {
            year: "1996",
            name: "Dainik Haribhoomi",
            note: "First National Newspaper from Rohtak",
        },
    ];

    // Section 15: Newspapers and Editors Table
    const newspapersEditors = [
        { newspaper: "Haryana Sandesh", editor: "Mahesh Chandra" },
        { newspaper: "Rangeela Musafir", editor: "Pyarelal Sharma" },
        { newspaper: "Amar Jyoti", editor: "Ramcharikh" },
        { newspaper: "Sudhrak", editor: "Acharya Bhagwan Dev" },
        { newspaper: "Hindi Mewat", editor: "Gumani Rai Arya" },
        { newspaper: "Haryana Kesari", editor: "Mushi Ram" },
        { newspaper: "Anand Bhoomi", editor: "Rajkumar Gupta" },
        { newspaper: "Adarsh Bharat", editor: "Dhanraj" },
        { newspaper: "Chetna", editor: "Devarat Vashisth" },
        { newspaper: "Haryana Samachar", editor: "Ramdhari Gaud" },
        { newspaper: "Bhola Insan", editor: "Bharatham Sigh Pawar" },
        { newspaper: "Vijay Anand", editor: "Prithviraj Jain" },
        { newspaper: "Gautam Vani", editor: "Jitendra Kumar" },
        { newspaper: "Paigam-A-Watan", editor: "Roopal Mehta" },
        { newspaper: "Nari Kalyan", editor: "Chandraprabhu Sharma" },
        { newspaper: "Harijan Pukar", editor: "Mrs. Kartar Devi" },
        { newspaper: "Narmal Magazine", editor: "Bholaram Sharma" },
        { newspaper: "Gram Sahyogi", editor: "Dinanath Siddhantalanikar" },
        { newspaper: "Vishleshan", editor: "Jayanath Nalin" },
        { newspaper: "Haryana magazine", editor: "Manuhari Pathak" },
        { newspaper: "Munch", editor: "Rakesh Vats" },
        {
            newspaper: "Sunahri Bharat",
            editor: "Purushottam Lal Agarwal and VP Agarwal",
        },
    ];

    // Section 16: Magazines
    const magazines = [
        {
            name: "Haryana Samvad",
            language: "Hindi (2008), Punjabi (2010)",
            publisher: "Public Relations and Cultural Affairs Department",
        },
        { name: "Krishi Samvad", language: "Hindi", started: "2008" },
        { name: "Haryana Review", language: "English", started: "2008" },
        { name: "Tameer-e-Haryana", language: "Urdu", started: "2008" },
        {
            name: "Ubharta Haryana",
            description: "Trendy magazine on economy, society and polity",
        },
        {
            name: "Harigandha",
            publisher: "Sahitya Akademi of Haryana",
            started: "2011",
        },
        { name: "Haryana Kheti", publisher: "Haryana Agricultural University" },
        {
            name: "Shiksha Saarthi",
            publisher: "Department of Haryana Agricultural University",
        },
    ];

    // Section 17: Radio Stations
    const radioStations = [
        {
            name: "Akashvani Rohtak (AIR Rohtak)",
            established: "8th May, 1976",
            note: "First radio station of Haryana",
        },
        { name: "Akashvani Kurukshetra", established: "24th June, 1991" },
        { name: "Akashvani Hisar", established: "26th January, 1999" },
        { name: "Radio Sirsa", note: "Community radio" },
        { name: "Radio Mewat", note: "Community radio" },
        { name: "Radio Karnal", note: "Community radio" },
        { name: "Radio Ambala", note: "Community radio" },
        { name: "Radio Gurugram", note: "Community radio" },
        {
            name: "Alfaz-e-Mewat",
            established: "2012",
            note: "Community radio station",
        },
        { name: "Radio Manav Rachna", note: "Community radio for students" },
    ];

    // Section 18: Television
    const televisionInfo = {
        title: "Television in Haryana",
        content:
            "On 1st November, 2012, the Television Studio Centre along with Satellite Earth Station and DD-2 transmitter was commissioned at Hisar. Hisar Doordarshan Kendra is the only Programme Production Centre in Haryana, located in Sector-13, Hisar. Inaugurated by Union Minister Smt. Sushma Swaraj in presence of CM Om Prakash Chautala. Operated by Prasar Bharati.",
    };

    // Section 19: Theatre, TV and Radio Artists
    const mediaArtists = [
        {
            name: "Pandit Harderam",
            description: "First Music composer and singer of Aakashvani, Delhi",
        },
        {
            name: "Duliram",
            description: "Theatre personality of Aakashvani, Delhi",
        },
        { name: "Ranbir Dahiya", description: "Stage artist and television actor" },
        {
            name: "Krishna Sharma",
            description: "Artist in Aakashvani and television",
        },
        { name: "Ram Niwas", description: "Famous Theater artist" },
        {
            name: "Seema Dhankar",
            description: "Theatre, Aakashvani and television artist",
        },
        {
            name: "Narendra Balhara",
            description: "Doordarshan and Aakashvani artist",
        },
        { name: "Karambir Saini", description: "Theatre and television actor" },
        {
            name: "Rajbala Phogat",
            description: "Doordarshan, theatre and Aakashvani artist",
        },
        { name: "Ranjeesh Kaur", description: "Famous Theatre artist" },
        {
            name: "Mahavir Guddu",
            description: "Stage director, radio and television actor",
        },
        { name: "Yash Tonk", description: "Stage and television actor" },
        { name: "Manish Joshi", description: "Stage and television actor" },
        {
            name: "Jaswant Singh Tohnavi",
            description: "Stage and television actor",
        },
        { name: "Ram Mehar", description: "Aakashvani Delhi artist" },
        { name: "Nathu", description: "Dramatist in Aakashvani Delhi" },
        { name: "Dr. Sudhir Sharma", description: "Theatre artist" },
        { name: "Dr. R.S. Waldia", description: "National level Theatre artist" },
        { name: "Mahesh Vashist", description: "Famous Theatre artist" },
        { name: "Dr. Surendra Sharma", description: "Dramatist of National level" },
        {
            name: "Dr. Vinod Sangwan",
            description: "State level artist of radio and television",
        },
        {
            name: "Jagbir Rathi",
            description:
                "Theatre, radio and TV artist, Dancer, Comic Poet, Stage director",
        },
        { name: "Angrez Kaur", description: "Theatre, TV and radio artist" },
        { name: "Pinki Chaudhary", description: "Theatre, TV and radio artist" },
        {
            name: "Sumer Chand Sharma",
            description: "National level theatre personality",
        },
        {
            name: "Gajendra Phogat",
            description: "Theatre, Aakashvani, Doordarshan artist",
        },
        {
            name: "Praveen Kumari",
            description: "Singer in theatre, radio and television",
        },
        { name: "Mahipal", description: "Theatre personality" },
        {
            name: "Dharmpal",
            description: "Famous comedian and national level dramatist",
        },
        { name: "Narsi", description: "Famous theatre personality" },
    ];

    // Section 20: IT Initiatives
    const itInitiatives = [
        {
            name: "State Data Centre",
            established: "2012",
            details:
                "Backend digital services to various governmental departments. 62 applications digitally connected.",
        },
        {
            name: "State Wide Area Network (SWAN)",
            established: "2007",
            details:
                "Internet and intra connectivity in all government departments. Data transfer, video conferencing facilities.",
        },
        {
            name: "Harsamadhan Portal",
            details:
                "Public grievance portal developed by NIC and Haryana State Centre. Online complaint lodging and tracking.",
        },
        {
            name: "E-Disha",
            details:
                "Electronic Delivery of Integrated Services of Haryana to All. Kendras at district and sub-division levels for birth certificate, death certificate, land records, marriage certificate, pension, insurance, passport, driving licence, vehicle registration.",
        },
        {
            name: "HALRIS and HRIS",
            details:
                "Haryana Land Record Information System and Haryana Registration Information System for computerisation of land records.",
        },
        {
            name: "Jansahayak",
            details:
                "Effective e-delivery system of 36 time bound services to citizens.",
        },
    ];

    // Section 21: Haryanvi Cinema - Films List
    const haryanviFilms = [
        { year: "1968", title: "Dharti" },
        { year: "1973", title: "Beera Shera" },
        {
            year: "1982",
            title: "Bahurani (First Commercial successful Haryanvi movie)",
        },
        {
            year: "1984",
            title:
                "Chandrawal (First commercial superhit Haryanvi movie), Sapne Ka Jikr",
        },
        { year: "1985", title: "Laado Basanti, Bhanwar Chamel" },
        { year: "1986", title: "Mhari Dharti Mhari Maa" },
        {
            year: "1987",
            title:
                "Jhanakdar Kangana, Bataeu, Chabilee, Chail Gabru, Chhora Haryana Ka, Chhori Sapale Ki, Chhora Jaat Ka, Gulaabo",
        },
        { year: "1988", title: "Bairee (Bhaal Singh, Shoshi Ranjan)" },
        {
            year: "1991",
            title:
                "Jatani, Phool Badan, Mhara Peehar Sansra, Panghat, Muklava, Lambardar, Ke Supne Ka Jikr, Phaagan Aaya Re",
        },
        { year: "2000", title: "Laado" },
        { year: "2001", title: "Chand Chakori" },
        { year: "2004", title: "Dhakad Chhora" },
        { year: "2011", title: "Muthbed-A Planned Encounter" },
        { year: "2012", title: "Chandrawal-A, Tera Mera Vaada" },
        { year: "2014", title: "Kunba, Maati Kare Pukaar, Dear vs Ber" },
        {
            year: "2015",
            title:
                "Pagdi : The Honour (Best Haryanvi Film at 62nd National Film Awards)",
        },
        { year: "2016", title: "Satrangi, Nange Pairon 2019 ke Nishan" },
        { year: "2020", title: "Mudda" },
        { year: "1993", title: "Jaat" },
        { year: "2014", title: "Kunba" },
    ];

    // Section 22: Famous Cinema Personalities
    const cinemaPersonalities = [
        {
            name: "Deep Chand",
            birthplace: "Sihri Khanda, Sonipat (1884)",
            details:
                "Disciple of famous folklore singer Sangi Chajju Ram. Played folk instruments like Sarangi, Nagada and Dholak.",
        },
        {
            name: "Khwaja Ahmed Abbas",
            birthplace: "Panipat (7th June, 1914)",
            details:
                "Film director, screen writer, novelist, journalist. Directed 'Jaat Hindustani', 'Do Boond Pani', 'Dharti Ke Lal'. Wrote Raj Kapoor's films 'Awara', 'Shree 420', 'Bobby', 'Henna', 'Mera Naam Joker'. Won Palme D award at first Cannes Film Festival for 'Neecha Sagar' (1946). Received Padma Shri in 1969.",
        },
        {
            name: "Usha Sharma",
            details:
                "World renowned dancer trained under Birju Maharaj. First woman in Haryana to dance on Doordarshan. Lead role in 'Chandrawal' (1984). President of Haryana Arts Council.",
        },
        {
            name: "Sunil Dutt",
            birthplace: "Yamunanagar (6th June, 1929)",
            details:
                "Real name Balraj Dutt. Actor, producer, director, politician. Famous movies: 'Mother India', 'Waqt', 'Mujhe Jeene Do'. Cabinet Minister of Youth Affairs and Sports (2004-05). Padma Shri (1968).",
        },
        {
            name: "Surendra Sharma",
            birthplace: "Nangal, Mahendragarh (1945)",
            details:
                "Famous comic poet. Known as 'Char Laina Wala Poet'. Padma Shri (2013).",
        },
        {
            name: "OM Puri",
            birthplace: "Ambala (18th October, 1950)",
            details:
                "Famous Indian film actor. Graduate from FTII. Padma Shri (1990). Films: 'Ghashiran Kotwal', 'Sadgati', 'Ardhsatya', 'Mirch-Masala', 'Dahravi'.",
        },
        {
            name: "Satish Kaushik",
            birthplace: "Mahendragarh (13th April, 1956)",
            details:
                "Producer and director. Graduate from NSD (1978). Films: 'Dhol', 'Hungama'. Filmfare Best Comedian Award twice (1990, 1997).",
        },
        {
            name: "Naseeb Singh Kundu",
            birthplace: "Titoli, Rohtak (27th November, 1961)",
            details:
                "Acted in Haryanvi movies: 'Chandrawal', 'Lado Basanti', 'Jar', 'Jameen', 'Joru'.",
        },
        {
            name: "Yashpal Sharma",
            birthplace: "Hisar (1st January, 1967)",
            details:
                "Indian film actor. Graduate from NSD (1994). Films: 'Hazaar Chaurasi ki Maa', 'Zindagi Ek Jua', 'Samar', 'Pukar', 'Gangajal', 'Hazaron Khawhishein Aisi'.",
        },
        {
            name: "Sonu Nigam",
            birthplace: "Faridabad (30th July, 1973)",
            details:
                "Famous playback singer. Filmfare Best Male Playback Award (2003), National Film Award for Best Male Playback (2004).",
        },
        {
            name: "Madhu Sharma",
            birthplace: "Pehowa, Kurukshetra (8th January, 1976)",
            details:
                "Famous Ragini and Saang singer. Compositions: 'Main Suraj Tu Meri Kiran Bagdo', 'Rang na Faikiyo', 'Pairon Mein Pahri Payal', 'Ankhiyan Mein Ghalya Kajal'.",
        },
        {
            name: "Randeep Singh Hooda",
            birthplace: "Jassia, Rohtak (20th August, 1976)",
            details:
                "Bollywood actor. Debut in 'Monsoon Wedding' (2001). Films: 'Once Upon a Time in Mumbai', 'Kick', 'Sarbjit'.",
        },
        {
            name: "Mallika Sherawat",
            birthplace: "Moth, Hisar (24th October, 1976 as Reema Lamba)",
            details:
                "Hindi film actress. Films: 'Murder', 'Khwaish', 'Pyar Ke Side Effects'.",
        },
        {
            name: "Parineeti Chopra",
            birthplace: "Ambala (22nd October, 1988)",
            details:
                "Cousin of Priyanka Chopra. Films: 'Ishqzaade', 'Kesari', 'Daawat-e-Ishq', 'Namaste England'.",
        },
        {
            name: "Juhi Chawla",
            birthplace: "Sonipat (13th November, 1967)",
            details:
                "Miss India 1984. Actress of 1980s-90s. Films: 'Qayamat Se Qayamat Tak', 'Aaina', 'Darr', 'Hum Hain Rahi Pyar Ke'.",
        },
    ];

    // Section 23: Popular Film Industry Artists Table
    const filmArtists = [
        { name: "Ashwini Choudhary", place: "Rohtak", field: "Producer, Director" },
        { name: "TP Agarwal", place: "Sonipat", field: "Producer, Director" },
        { name: "Ashok Ghai", place: "Rohtak", field: "Producer, Director" },
        { name: "Subhash Ghai", place: "Rohtak", field: "Producer, Director" },
        { name: "Pankaj Butalia", place: "Ambala", field: "Producer, Director" },
        { name: "JP Kaushik", place: "Rohtak", field: "Music Director" },
        { name: "Sunil Dutt", place: "Yamunanagar", field: "Actor" },
        { name: "Juhi Chawla", place: "Sonipat", field: "Actor" },
        { name: "Randeep Hooda", place: "Rohtak", field: "Actor" },
        { name: "Pooja Batra", place: "Rohtak", field: "Actor" },
        { name: "Raj Tilak", place: "Panipat", field: "Actor" },
        { name: "Mallika Sherawat", place: "Hisar", field: "Actor" },
        { name: "Himanshu Mallik", place: "Sonipat", field: "Actor" },
        { name: "Satyen Kappu", place: "Panipat", field: "Actor" },
        { name: "Mohit Ahlawat", place: "Panipat", field: "Actor" },
        { name: "Manoj Kumar", place: "Yamunanagar", field: "Actor" },
        { name: "Sonu Nigam", place: "Faridabad", field: "Singer" },
        {
            name: "Satish Kaushik",
            place: "Mahendragarh",
            field: "Writer, Actor, Director",
        },
        { name: "Richa Sharma", place: "Faridabad", field: "Singer" },
        { name: "Jaswinder Narula", place: "Faridabad", field: "Singer" },
        { name: "Sara Gurpal", place: "Fatehabad", field: "Actor" },
        { name: "Sitarma Panchal", place: "Jind", field: "Actor" },
        { name: "Rupinder Handa", place: "Sirsa", field: "Singer" },
        { name: "Ritu Jalgan", place: "Jind", field: "Actor" },
        {
            name: "Sapna Chaudhary",
            place: "Rohtak",
            field: "Singer, actor, dancer",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 dark:from-blue-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium backdrop-blur-sm">
                        <Bus className="w-4 h-4" />
                        {language === "hindi"
                            ? "परिवहन एवं संचार - हरियाणा सरकार"
                            : "Transport and Communication - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा में" : "Transport and"}{" "}
                        <span className="text-blue-600 dark:text-blue-400">
                            {language === "hindi"
                                ? "परिवहन एवं संचार"
                                : "Communication in Haryana"}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा की परिवहन प्रणाली, सड़क मार्ग, रेल मार्ग, हवाई मार्ग, मेट्रो नेटवर्क, संचार माध्यम और हरियाणवी सिनेमा की संपूर्ण जानकारी"
                            : "Complete information about Haryana's transport system, roadways, railways, airways, metro network, communication media and Haryanvi cinema"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            {/* <Road className="w-4 h-4 text-blue-600" /> */}
                            <span>
                                {language === "hindi" ? "सड़क परिवहन" : "Road Transport"}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Train className="w-4 h-4 text-blue-600" />
                            <span>
                                {language === "hindi" ? "रेल परिवहन" : "Rail Transport"}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Plane className="w-4 h-4 text-blue-600" />
                            <span>
                                {language === "hindi" ? "हवाई परिवहन" : "Air Transport"}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Newspaper className="w-4 h-4 text-blue-600" />
                            <span>
                                {language === "hindi" ? "संचार माध्यम" : "Communication"}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Clapperboard className="w-4 h-4 text-blue-600" />
                            <span>
                                {language === "hindi" ? "हरियाणवी सिनेमा" : "Haryanvi Cinema"}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Section 1: Transport System Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/20">
                                <Navigation className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold">
                                {language === "hindi"
                                    ? transportOverview.titleHindi
                                    : transportOverview.titleEnglish}
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? transportOverview.contentHindi
                                : transportOverview.contentEnglish}
                        </p>
                    </div>
                    {/* Section 2: Road Transport Statistics */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-6 md:p-8 border border-green-200">
                        <div className="flex items-center gap-3 mb-4">
                            {/* <div className="p-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                                <Road className="w-5 h-5 text-green-600" />
                            </div> */}
                            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">
                                {language === "hindi"
                                    ? roadTransportStats.titleHindi
                                    : roadTransportStats.titleEnglish}
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? roadTransportStats.contentHindi
                                : roadTransportStats.contentEnglish}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                <div className="text-xl font-bold text-green-600">27,235</div>
                                <div className="text-xs text-muted-foreground">
                                    {language === "hindi"
                                        ? "कुल सड़क लंबाई (किमी)"
                                        : "Total Road Length (km)"}
                                </div>
                            </div>
                            <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                <div className="text-xl font-bold text-green-600">104.69</div>
                                <div className="text-xs text-muted-foreground">
                                    {language === "hindi"
                                        ? "सड़क घनत्व (प्रति वर्ग किमी)"
                                        : "Road Density (per sq km)"}
                                </div>
                            </div>
                            <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                <div className="text-xl font-bold text-green-600">2,108</div>
                                <div className="text-xs text-muted-foreground">
                                    {language === "hindi"
                                        ? "हिसार (सबसे लंबी सड़क)"
                                        : "Hisar (Longest Road)"}
                                </div>
                            </div>
                            <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                <div className="text-xl font-bold text-green-600">313</div>
                                <div className="text-xs text-muted-foreground">
                                    {language === "hindi"
                                        ? "भिवानी (सबसे लंबा NH)"
                                        : "Bhiwani (Longest NH)"}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Section 3: National Highways Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Map className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">
                                {language === "hindi"
                                    ? "राष्ट्रीय राजमार्ग"
                                    : "National Highways in Haryana"}
                            </h2>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                            Total length: 3097.6 km (Nov 2018) | Longest: NH-9 (285.9 km) |
                            Shortest: NH-148A (6 km)
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">NH No.</th>
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "मार्ग" : "Route"}
                                        </th>
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "लंबाई (किमी)" : "Length (km)"}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {nationalHighways.map((nh, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{nh.nhNo}</td>
                                            <td className="border p-2">{nh.route}</td>
                                            <td className="border p-2 text-right">
                                                {nh.length}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>{" "}
                            </table>{" "}
                        </div>{" "}
                    </div>
                    {/* Section 4: State Highways Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-primary/20">
                                {" "}
                                <Map className="w-5 h-5 text-primary" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold">
                                {language === "hindi"
                                    ? "राज्य राजमार्ग"
                                    : "State Highways in Haryana"}
                            </h2>{" "}
                        </div>{" "}
                        <p className="text-sm text-muted-foreground mb-3">
                            Total length: 1602 km | Longest: SH-12 (192.32 km) | Shortest:
                            SH-6(A) (3.70 km)
                        </p>{" "}
                        <div className="overflow-x-auto">
                            {" "}
                            <table className="w-full border-collapse text-sm">
                                {" "}
                                <thead>
                                    {" "}
                                    <tr className="bg-primary/10">
                                        {" "}
                                        <th className="border p-2 text-left">SH No.</th>{" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "मार्ग" : "Route"}
                                        </th>{" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "लंबाई (किमी)" : "Length (km)"}
                                        </th>{" "}
                                    </tr>{" "}
                                </thead>{" "}
                                <tbody>
                                    {" "}
                                    {stateHighways.map((sh, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            {" "}
                                            <td className="border p-2">{sh.shNo}</td>{" "}
                                            <td className="border p-2">{sh.route}</td>{" "}
                                            <td className="border p-2 text-right">
                                                {sh.length}
                                            </td>{" "}
                                        </tr>
                                    ))}{" "}
                                </tbody>{" "}
                            </table>{" "}
                        </div>{" "}
                    </div>
                    {/* Section 5: Expressways */}
                    <div className="bg-orange-50 dark:bg-orange-950/20 rounded-2xl p-6 md:p-8 border border-orange-200">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-900/30">
                                {" "}
                                <Route className="w-5 h-5 text-orange-600" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-400">
                                {language === "hindi"
                                    ? "एक्सप्रेसवे"
                                    : "Expressways in Haryana"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="space-y-4">
                            {" "}
                            {expressways.map((exp, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    {" "}
                                    <h3 className="font-semibold text-orange-600">
                                        {language === "hindi" ? exp.nameHindi : exp.name}
                                    </h3>{" "}
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {exp.details}
                                    </p>{" "}
                                </div>
                            ))}{" "}
                        </div>{" "}
                    </div>
                    {/* Section 6: State Government Initiatives for Road Transport */}
                    <div className="bg-teal-50 dark:bg-teal-950/20 rounded-2xl p-6 md:p-8 border border-teal-200">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-teal-100 dark:bg-teal-900/30">
                                {" "}
                                <Bus className="w-5 h-5 text-teal-600" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-400">
                                {language === "hindi"
                                    ? "सड़क परिवहन के लिए राज्य सरकार की पहल"
                                    : "State Government Initiatives for Road Transport"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {" "}
                            {transportInitiatives.map((init, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    {" "}
                                    <h3 className="font-semibold text-teal-600">
                                        {language === "hindi" ? init.nameHindi : init.name}
                                    </h3>{" "}
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {init.details}
                                    </p>{" "}
                                </div>
                            ))}{" "}
                        </div>{" "}
                    </div>
                    {/* Section 7: Railway Transport Overview */}
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-2xl p-6 md:p-8 border border-purple-200">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                                {" "}
                                <Train className="w-5 h-5 text-purple-600" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                                {language === "hindi"
                                    ? railwayOverview.titleHindi
                                    : railwayOverview.titleEnglish}
                            </h2>{" "}
                        </div>{" "}
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? railwayOverview.contentHindi
                                : railwayOverview.contentEnglish}
                        </p>{" "}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                            {" "}
                            <div className="text-center p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                                {" "}
                                <div className="text-xl font-bold text-purple-600">
                                    4,439
                                </div>{" "}
                                <div className="text-xs text-muted-foreground">
                                    {language === "hindi"
                                        ? "रेलवे ट्रैक (किमी)"
                                        : "Railway Track (km)"}
                                </div>{" "}
                            </div>{" "}
                            <div className="text-center p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                                {" "}
                                <div className="text-xl font-bold text-purple-600">3</div>{" "}
                                <div className="text-xs text-muted-foreground">
                                    {language === "hindi" ? "रेलवे जोन" : "Railway Zones"}
                                </div>{" "}
                            </div>{" "}
                            <div className="text-center p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                                {" "}
                                <div className="text-xl font-bold text-purple-600">5</div>{" "}
                                <div className="text-xs text-muted-foreground">
                                    {language === "hindi" ? "रेलवे डिवीजन" : "Railway Divisions"}
                                </div>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>
                    {/* Section 8: Main Railway Routes */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-primary/20">
                                {" "}
                                <TrainFront className="w-5 h-5 text-primary" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold">
                                {language === "hindi"
                                    ? "हरियाणा के मुख्य रेल मार्ग"
                                    : "Main Railway Routes in Haryana"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {" "}
                            {railwayRoutes.map((route, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-lg p-3 border">
                                    {" "}
                                    <p className="text-sm">{route}</p>{" "}
                                </div>
                            ))}{" "}
                        </div>{" "}
                    </div>
                    {/* Section 9: Link Railway Routes */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-primary/20">
                                {" "}
                                <Repeat className="w-5 h-5 text-primary" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold">
                                {language === "hindi"
                                    ? "लिंक रेल मार्ग"
                                    : "Link Railway Routes"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="space-y-3">
                            {" "}
                            {linkRoutes.map((route, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-lg p-3 border">
                                    {" "}
                                    <p className="text-sm">{route}</p>{" "}
                                </div>
                            ))}{" "}
                        </div>{" "}
                    </div>
                    {/* Section 10: Routes to Other States */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-primary/20">
                                {" "}
                                <Globe className="w-5 h-5 text-primary" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold">
                                {language === "hindi"
                                    ? "अन्य राज्यों के मार्ग"
                                    : "Routes to Other States"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="flex flex-wrap gap-2">
                            {" "}
                            {interStateRoutes.map((route, idx) => (
                                <span
                                    key={idx}
                                    className="bg-muted/30 px-3 py-1 rounded-full text-sm"
                                >
                                    {route}
                                </span>
                            ))}{" "}
                        </div>{" "}
                    </div>
                    {/* Section 11: Metro Railway Network */}
                    <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-2xl p-6 md:p-8 border border-indigo-200">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
                                {" "}
                                <Train className="w-5 h-5 text-indigo-600" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
                                {language === "hindi"
                                    ? "मेट्रो रेल नेटवर्क"
                                    : "Metro Railway Network in Haryana"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="space-y-4">
                            {" "}
                            {metroNetworks.map((metro, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    {" "}
                                    <h3 className="font-semibold text-indigo-600">
                                        {language === "hindi" ? metro.nameHindi : metro.name}
                                    </h3>{" "}
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {metro.details}
                                    </p>{" "}
                                </div>
                            ))}{" "}
                        </div>{" "}
                    </div>
                    {/* Section 12: Air Transport */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-2xl p-6 md:p-8 border border-cyan-200">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-900/30">
                                {" "}
                                <Plane className="w-5 h-5 text-cyan-600" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">
                                {language === "hindi"
                                    ? airTransport.titleHindi
                                    : airTransport.titleEnglish}
                            </h2>{" "}
                        </div>{" "}
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            {language === "hindi"
                                ? airTransport.contentHindi
                                : airTransport.contentEnglish}
                        </p>{" "}
                        <div className="space-y-4">
                            {" "}
                            {airports.map((airport, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    {" "}
                                    <h3 className="font-semibold text-cyan-600">
                                        {language === "hindi" ? airport.nameHindi : airport.name}
                                    </h3>{" "}
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {airport.details}
                                    </p>{" "}
                                </div>
                            ))}{" "}
                        </div>{" "}
                    </div>
                    {/* Section 13: Print Media - Newspapers History */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-primary/20">
                                {" "}
                                <Newspaper className="w-5 h-5 text-primary" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold">
                                {language === "hindi"
                                    ? "हरियाणा में समाचार पत्रों का इतिहास"
                                    : "History of Newspapers in Haryana"}
                            </h2>{" "}
                        </div>{" "}
                        <p className="text-sm text-muted-foreground mb-3">
                            First newspaper: 'Haryana' from Jhajjar | First Hindi newspaper:
                            'Jain Prakash' (1985) | First National Newspaper: 'Dainik
                            Haribhoomi' (1996 from Rohtak)
                        </p>{" "}
                        <div className="overflow-x-auto">
                            {" "}
                            <table className="w-full border-collapse text-sm">
                                {" "}
                                <thead>
                                    {" "}
                                    <tr className="bg-primary/10">
                                        {" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "वर्ष" : "Year"}
                                        </th>{" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "समाचार पत्र" : "Newspaper"}
                                        </th>{" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "संपादक" : "Editor"}
                                        </th>{" "}
                                    </tr>{" "}
                                </thead>{" "}
                                <tbody>
                                    {" "}
                                    {newspaperHistory.map((np, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            {" "}
                                            <td className="border p-2">{np.year}</td>{" "}
                                            <td className="border p-2">
                                                {np.name}
                                                {np.location && ` (${np.location})`}
                                                {np.note && ` - ${np.note}`}
                                            </td>{" "}
                                            <td className="border p-2">{np.editor || "-"}</td>{" "}
                                        </tr>
                                    ))}{" "}
                                </tbody>{" "}
                            </table>{" "}
                        </div>{" "}
                    </div>
                    {/* Section 14: Newspapers and Editors Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-primary/20">
                                {" "}
                                <Users className="w-5 h-5 text-primary" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold">
                                {language === "hindi"
                                    ? "समाचार पत्र एवं उनके संपादक"
                                    : "Newspapers and their Editors"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="overflow-x-auto">
                            {" "}
                            <table className="w-full border-collapse text-sm">
                                {" "}
                                <thead>
                                    {" "}
                                    <tr className="bg-primary/10">
                                        {" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "समाचार पत्र" : "Newspaper"}
                                        </th>{" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "संपादक" : "Editor"}
                                        </th>{" "}
                                    </tr>{" "}
                                </thead>{" "}
                                <tbody>
                                    {" "}
                                    {newspapersEditors.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            {" "}
                                            <td className="border p-2">{item.newspaper}</td>{" "}
                                            <td className="border p-2">{item.editor}</td>{" "}
                                        </tr>
                                    ))}{" "}
                                </tbody>{" "}
                            </table>{" "}
                        </div>{" "}
                    </div>
                    {/* Section 15: Magazines */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-primary/20">
                                {" "}
                                <Book className="w-5 h-5 text-primary" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold">
                                {language === "hindi" ? "पत्रिकाएं" : "Magazines"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {" "}
                            {magazines.map((mag, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-lg p-3 border">
                                    {" "}
                                    <p className="font-medium">{mag.name}</p>{" "}
                                    <p className="text-xs text-muted-foreground">
                                        {mag.language ||
                                            mag.description ||
                                            `${mag.publisher} (${mag.started})`}
                                    </p>{" "}
                                </div>
                            ))}{" "}
                        </div>{" "}
                    </div>
                    {/* Section 16: Radio Stations */}
                    <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-6 md:p-8 border border-red-200">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-red-100 dark:bg-red-900/30">
                                {" "}
                                <RadioTower className="w-5 h-5 text-red-600" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">
                                {language === "hindi" ? "रेडियो स्टेशन" : "Radio Stations"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {" "}
                            {radioStations.map((radio, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-3 border">
                                    {" "}
                                    <p className="font-medium">{radio.name}</p>{" "}
                                    <p className="text-xs text-muted-foreground">
                                        {radio.established && `Established: ${radio.established}`}
                                        {radio.note && ` - ${radio.note}`}
                                    </p>{" "}
                                </div>
                            ))}{" "}
                        </div>{" "}
                    </div>
                    {/* Section 17: Television */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-primary/20">
                                {" "}
                                <Tv className="w-5 h-5 text-primary" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold">
                                {televisionInfo.title}
                            </h2>{" "}
                        </div>{" "}
                        <p className="text-muted-foreground">
                            {televisionInfo.content}
                        </p>{" "}
                    </div>
                    {/* Section 18: Theatre, TV and Radio Artists */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-primary/20">
                                {" "}
                                <Users className="w-5 h-5 text-primary" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold">
                                {language === "hindi"
                                    ? "हरियाणा के रंगमंच, टेलीविजन एवं रेडियो कलाकार"
                                    : "Theatre, Television and Radio Artists from Haryana"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="overflow-x-auto">
                            {" "}
                            <table className="w-full border-collapse text-sm">
                                {" "}
                                <thead>
                                    {" "}
                                    <tr className="bg-primary/10">
                                        {" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "नाम" : "Name"}
                                        </th>{" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "विवरण" : "Description"}
                                        </th>{" "}
                                    </tr>{" "}
                                </thead>{" "}
                                <tbody>
                                    {" "}
                                    {mediaArtists.map((artist, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            {" "}
                                            <td className="border p-2 font-medium">
                                                {artist.name}
                                            </td>{" "}
                                            <td className="border p-2">{artist.description}</td>{" "}
                                        </tr>
                                    ))}{" "}
                                </tbody>{" "}
                            </table>{" "}
                        </div>{" "}
                    </div>
                    {/* Section 19: IT Initiatives */}
                    <div className="bg-slate-50 dark:bg-slate-950/20 rounded-2xl p-6 md:p-8 border border-slate-200">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900/30">
                                {" "}
                                <Laptop className="w-5 h-5 text-slate-600" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-400">
                                {language === "hindi"
                                    ? "हरियाणा इलेक्ट्रॉनिक्स एवं सूचना प्रौद्योगिकी विभाग द्वारा संचालित परियोजनाएं"
                                    : "Projects by Haryana Electronics and IT Department"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="space-y-4">
                            {" "}
                            {itInitiatives.map((init, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    {" "}
                                    <h3 className="font-semibold text-slate-600">
                                        {init.name}
                                    </h3>{" "}
                                    {init.established && (
                                        <p className="text-xs text-muted-foreground">
                                            Established: {init.established}
                                        </p>
                                    )}{" "}
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {init.details}
                                    </p>{" "}
                                </div>
                            ))}{" "}
                        </div>{" "}
                    </div>
                    {/* Section 20: Haryanvi Films List */}
                    <div className="bg-pink-50 dark:bg-pink-950/20 rounded-2xl p-6 md:p-8 border border-pink-200">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-900/30">
                                {" "}
                                <Clapperboard className="w-5 h-5 text-pink-600" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400">
                                {language === "hindi"
                                    ? "प्रसिद्ध हरियाणवी फिल्मों की सूची"
                                    : "List of Famous Haryanvi Films"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="overflow-x-auto">
                            {" "}
                            <table className="w-full border-collapse text-sm">
                                {" "}
                                <thead>
                                    {" "}
                                    <tr className="bg-pink-100 dark:bg-pink-900/30">
                                        {" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "वर्ष" : "Year"}
                                        </th>{" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "फिल्म का नाम" : "Film Title"}
                                        </th>{" "}
                                    </tr>{" "}
                                </thead>{" "}
                                <tbody>
                                    {" "}
                                    {haryanviFilms.map((film, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            {" "}
                                            <td className="border p-2">{film.year}</td>{" "}
                                            <td className="border p-2">{film.title}</td>{" "}
                                        </tr>
                                    ))}{" "}
                                </tbody>{" "}
                            </table>{" "}
                        </div>{" "}
                    </div>
                    {/* Section 21: Famous Cinema Personalities */}
                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6 md:p-8 border border-amber-200">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                                {" "}
                                <Star className="w-5 h-5 text-amber-600" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400">
                                {language === "hindi"
                                    ? "प्रसिद्ध सिनेमा हस्तियां"
                                    : "Famous Cinema Personalities from Haryana"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="space-y-4">
                            {" "}
                            {cinemaPersonalities.map((personality, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    {" "}
                                    <h3 className="font-semibold text-amber-600">
                                        {personality.name}
                                    </h3>{" "}
                                    {personality.birthplace && (
                                        <p className="text-xs text-muted-foreground">
                                            Birthplace: {personality.birthplace}
                                        </p>
                                    )}{" "}
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {personality.details}
                                    </p>{" "}
                                </div>
                            ))}{" "}
                        </div>{" "}
                    </div>
                    {/* Section 22: Popular Film Industry Artists Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        {" "}
                        <div className="flex items-center gap-3 mb-4">
                            {" "}
                            <div className="p-2 rounded-xl bg-primary/20">
                                {" "}
                                <Users className="w-5 h-5 text-primary" />{" "}
                            </div>{" "}
                            <h2 className="text-2xl font-bold">
                                {language === "hindi"
                                    ? "लोकप्रिय फिल्म उद्योग कलाकार"
                                    : "Popular Film Industry Artists from Haryana"}
                            </h2>{" "}
                        </div>{" "}
                        <div className="overflow-x-auto">
                            {" "}
                            <table className="w-full border-collapse text-sm">
                                {" "}
                                <thead>
                                    {" "}
                                    <tr className="bg-primary/10">
                                        {" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "नाम" : "Name"}
                                        </th>{" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "स्थान" : "Place"}
                                        </th>{" "}
                                        <th className="border p-2 text-left">
                                            {language === "hindi" ? "क्षेत्र" : "Field"}
                                        </th>{" "}
                                    </tr>{" "}
                                </thead>{" "}
                                <tbody>
                                    {" "}
                                    {filmArtists.map((artist, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            {" "}
                                            <td className="border p-2">{artist.name}</td>{" "}
                                            <td className="border p-2">{artist.place}</td>{" "}
                                            <td className="border p-2">{artist.field}</td>{" "}
                                        </tr>
                                    ))}{" "}
                                </tbody>{" "}
                            </table>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
            </section>
            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                {" "}
                <div className="max-w-6xl mx-auto">
                    {" "}
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {" "}
                        {language === "hindi"
                            ? "हरियाणा परिवहन एवं संचार: तथ्य सारांश"
                            : "Haryana Transport and Communication: Key Facts"}{" "}
                    </h2>{" "}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {" "}
                        <div className="bg-card rounded-xl p-4 border text-center">
                            {" "}
                            <div className="text-xl font-bold text-blue-600">27,235</div>{" "}
                            <p className="text-xs text-muted-foreground">
                                {language === "hindi"
                                    ? "कुल सड़क लंबाई (किमी)"
                                    : "Total Road Length (km)"}
                            </p>{" "}
                        </div>{" "}
                        <div className="bg-card rounded-xl p-4 border text-center">
                            {" "}
                            <div className="text-xl font-bold text-blue-600">4,439</div>{" "}
                            <p className="text-xs text-muted-foreground">
                                {language === "hindi"
                                    ? "रेलवे ट्रैक (किमी)"
                                    : "Railway Track (km)"}
                            </p>{" "}
                        </div>{" "}
                        <div className="bg-card rounded-xl p-4 border text-center">
                            {" "}
                            <div className="text-xl font-bold text-blue-600">3,097</div>{" "}
                            <p className="text-xs text-muted-foreground">
                                {language === "hindi"
                                    ? "राष्ट्रीय राजमार्ग (किमी)"
                                    : "National Highways (km)"}
                            </p>{" "}
                        </div>{" "}
                        <div className="bg-card rounded-xl p-4 border text-center">
                            {" "}
                            <div className="text-xl font-bold text-blue-600">1,602</div>{" "}
                            <p className="text-xs text-muted-foreground">
                                {language === "hindi"
                                    ? "राज्य राजमार्ग (किमी)"
                                    : "State Highways (km)"}
                            </p>{" "}
                        </div>{" "}
                        <div className="bg-card rounded-xl p-4 border text-center">
                            {" "}
                            <div className="text-xl font-bold text-blue-600">5</div>{" "}
                            <p className="text-xs text-muted-foreground">
                                {language === "hindi" ? "हवाई पट्टियां" : "Airstrips"}
                            </p>{" "}
                        </div>{" "}
                        <div className="bg-card rounded-xl p-4 border text-center">
                            {" "}
                            <div className="text-xl font-bold text-blue-600">4,100</div>{" "}
                            <p className="text-xs text-muted-foreground">
                                {language === "hindi"
                                    ? "हरियाणा रोडवेज बसें"
                                    : "Haryana Roadways Buses"}
                            </p>{" "}
                        </div>{" "}
                        <div className="bg-card rounded-xl p-4 border text-center">
                            {" "}
                            <div className="text-xl font-bold text-blue-600">10.87</div>{" "}
                            <p className="text-xs text-muted-foreground">
                                {language === "hindi"
                                    ? "दैनिक यात्री (लाख)"
                                    : "Daily Passengers (Lakh)"}
                            </p>{" "}
                        </div>{" "}
                        <div className="bg-card rounded-xl p-4 border text-center">
                            {" "}
                            <div className="text-xl font-bold text-blue-600">1970</div>{" "}
                            <p className="text-xs text-muted-foreground">
                                {language === "hindi"
                                    ? "पहली हरियाणवी फिल्म"
                                    : "First Haryanvi Film"}
                            </p>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
            </section>
            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                {" "}
                <div className="max-w-4xl mx-auto">
                    {" "}
                    <div className="text-center mb-12">
                        {" "}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-sm mb-4">
                            {" "}
                            <HelpCircle className="w-4 h-4" />{" "}
                            {language === "hindi"
                                ? "अक्सर पूछे जाने वाले प्रश्न"
                                : "Frequently Asked Questions"}{" "}
                        </div>{" "}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {" "}
                            {language === "hindi"
                                ? "हरियाणा की परिवहन एवं संचार प्रणाली के बारे में"
                                : "Common"}{" "}
                            <span className="text-blue-600">
                                {language === "hindi"
                                    ? "सामान्य प्रश्न"
                                    : "Questions About Haryana Transport and Communication"}
                            </span>{" "}
                        </h2>{" "}
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {" "}
                            {language === "hindi"
                                ? "हरियाणा की सड़कों, रेलवे, हवाई अड्डों, मेट्रो, संचार माध्यमों और हरियाणवी सिनेमा के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's roads, railways, airports, metro, communication media and Haryanvi cinema"}{" "}
                        </p>{" "}
                    </div>{" "}
                    <div className="space-y-4">
                        {" "}
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                {" "}
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-muted/30 transition-colors"
                                >
                                    {" "}
                                    <span className="font-semibold text-base md:text-lg pr-4">
                                        {language === "hindi"
                                            ? faq.questionHindi
                                            : faq.questionEnglish}
                                    </span>{" "}
                                    <ChevronDown
                                        className={`w-5 h-5 text-blue-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""}`}
                                    />{" "}
                                </button>{" "}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-96" : "max-h-0"}`}
                                >
                                    {" "}
                                    <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t">
                                        {" "}
                                        <p className="text-muted-foreground leading-relaxed pt-4">
                                            {" "}
                                            {language === "hindi"
                                                ? faq.answerHindi
                                                : faq.answerEnglish}{" "}
                                        </p>{" "}
                                    </div>{" "}
                                </div>{" "}
                            </div>
                        ))}{" "}
                    </div>{" "}
                    <div className="mt-10 text-center">
                        {" "}
                        <p className="text-muted-foreground mb-4">
                            {" "}
                            {language === "hindi"
                                ? "अपने हरियाणा परिवहन एवं संचार के ज्ञान का परीक्षण करना चाहते हैं?"
                                : "Want to test your knowledge about Haryana Transport and Communication?"}{" "}
                        </p>{" "}
                        <Link href="/signup">
                            {" "}
                            <Button className="gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700">
                                {" "}
                                {language === "hindi"
                                    ? "हरियाणा परिवहन एवं संचार क्विज़ लें"
                                    : "Take Haryana Transport and Communication Quiz"}{" "}
                                <ChevronRight className="w-4 h-4" />{" "}
                            </Button>{" "}
                        </Link>{" "}
                    </div>{" "}
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        {" "}
                        <Link
                            href="/haryana-gk/industries"
                            className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                        >
                            {" "}
                            <ArrowLeft className="w-4 h-4" />{" "}
                            {language === "hindi"
                                ? "पीछे जाएँ: हरियाणा के उद्योग"
                                : "Back to Industries in Haryana"}{" "}
                        </Link>{" "}
                        <Link
                            href="/haryana-gk/administration"
                            className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                        >
                            {" "}
                            {language === "hindi"
                                ? "अगला अध्याय: हरियाणा के प्रशासन"
                                : "Next Chapter: Administration in Haryana"}{" "}
                            <ChevronRight className="w-4 h-4" />{" "}
                        </Link>{" "}
                    </div>{" "}
                </div>{" "}
            </section>
            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                {" "}
                <div className="max-w-5xl mx-auto text-center">
                    {" "}
                    <h2 className="text-xl font-semibold mb-3">
                        {language === "hindi"
                            ? "हरियाणा में परिवहन एवं संचार - संपूर्ण संदर्भ"
                            : "Transport and Communication in Haryana - Complete Reference"}
                    </h2>{" "}
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {" "}
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की परिवहन प्रणाली, सड़क मार्गों, रेल मार्गों, हवाई मार्गों, मेट्रो नेटवर्क, संचार माध्यमों और हरियाणवी सिनेमा के बारे में व्यापक जानकारी प्रदान करता है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about transport system, roadways, railways, airways, metro network, communication media and Haryanvi cinema of Haryana. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}{" "}
                    </p>{" "}
                    <p className="text-xs text-muted-foreground mt-4">
                        {" "}
                        © 2026 CET TEST |{" "}
                        {language === "hindi"
                            ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और आर्थिक सर्वेक्षण 2020-21 से स्रोतित"
                            : "Information sourced from official Government of Haryana publications and Economic Survey 2020-21"}{" "}
                    </p>{" "}
                </div>{" "}
            </section>{" "}
            <FooterLinkFooter />{" "}
        </div>
    );
}

