"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    Globe,
    Languages,
    ChevronRight,
    Award,
    ChevronDown,
    HelpCircle,
    MapPin,
    Users,
    Landmark,
    TreePine,
    Flower2,
    Dog,
    Bird,
    Trophy,
    TrendingUp,
    Building2,
    User,
    ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaBasicInformationPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [language, setLanguage] = useState<"hindi" | "english">("hindi");

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === "hindi" ? "english" : "hindi");
    };

    // Bilingual FAQ data
    const faqs = [
        {
            questionHindi: "हरियाणा का गठन एक अलग राज्य के रूप में कब हुआ?",
            questionEnglish: "When was Haryana established as a separate state?",
            answerHindi: "हरियाणा का गठन 1 नवंबर, 1966 को एक अलग राज्य के रूप में हुआ था। इसे पूर्वी पंजाब राज्य से अलग करके बनाया गया था।",
            answerEnglish: "Haryana was established as a separate state on 1st November, 1966. It was carved out of the former state of East Punjab."
        },
        {
            questionHindi: "'हरियाणा' नाम का क्या अर्थ है?",
            questionEnglish: "What is the meaning of the name 'Haryana'?",
            answerHindi: "'हरियाणा' नाम का अर्थ है 'भगवान का निवास' जहाँ 'हरि' का अर्थ भगवान (भगवान विष्णु) और 'आयन' का अर्थ घर या निवास है।",
            answerEnglish: "The name 'Haryana' means 'Abode of God' where 'Hari' refers to God (Lord Vishnu) and 'ayana' means home or abode."
        },
        {
            questionHindi: "हरियाणा का राजकीय पशु और राजकीय पक्षी क्या है?",
            questionEnglish: "What is the state animal and bird of Haryana?",
            answerHindi: "हरियाणा का राजकीय पशु काला हिरण (Blackbuck) और राजकीय पक्षी काला तीतर (Black Francolin) है।",
            answerEnglish: "The state animal of Haryana is the Blackbuck (Antelope) and the state bird is the Black Francolin (Kala Teetar)."
        },
        {
            questionHindi: "कुरुक्षेत्र क्यों प्रसिद्ध है?",
            questionEnglish: "Why is Kurukshetra famous?",
            answerHindi: "कुरुक्षेत्र महाभारत युद्ध की भूमि के रूप में प्रसिद्ध है। इसे 'धर्मक्षेत्र' और 'पार्कों का शहर' भी कहा जाता है।",
            answerEnglish: "Kurukshetra is famous as the land of the epic Mahabharata war. It is also known as 'Dharmashetra' and 'City of Parks'."
        },
        {
            questionHindi: "हरियाणा का सबसे दक्षिणी जिला कौन सा है?",
            questionEnglish: "Which is the southernmost district of Haryana?",
            answerHindi: "मेवात हरियाणा का सबसे दक्षिणी जिला है।",
            answerEnglish: "Mewat is the southernmost district of Haryana."
        },
        {
            questionHindi: "जनगणना 2011 के अनुसार हरियाणा की साक्षरता दर क्या है?",
            questionEnglish: "What is the literacy rate of Haryana as per Census 2011?",
            answerHindi: "जनगणना 2011 के अनुसार, हरियाणा की कुल साक्षरता दर 75.60% है, जिसमें पुरुष साक्षरता 84.10% और महिला साक्षरता 65.90% है।",
            answerEnglish: "As per Census 2011, the total literacy rate of Haryana is 75.60% with male literacy at 84.10% and female literacy at 65.90%."
        },
        {
            questionHindi: "'हरियाणा के लौह पुरुष' के नाम से कौन जाने जाते हैं?",
            questionEnglish: "Who is known as the 'Iron Man of Haryana'?",
            answerHindi: "चौधरी बंसीलाल 'आधुनिक हरियाणा के वास्तुकार' और 'हरियाणा के लौह पुरुष' के नाम से जाने जाते हैं।",
            answerEnglish: "Chaudhary Bansi Lal is known as the 'Architect of Modern Haryana' and 'Iron Man of Haryana'."
        },
        {
            questionHindi: "हरियाणा का राजकीय खेल क्या है?",
            questionEnglish: "What is the state sport of Haryana?",
            answerHindi: "हरियाणा सरकार ने कुश्ती को राजकीय खेल घोषित किया है।",
            answerEnglish: "Wrestling has been declared as the state sport by the Haryana Government."
        }
    ];

    // Geographical Data - Bilingual
    const geographicalData = {
        titleHindi: "भौगोलिक संरचना",
        titleEnglish: "Geographical Structure",
        locationLabel: "भौगोलिक स्थिति",
        locationValue: "उत्तर-पश्चिम भारत",
        locationValueEn: "North-West part of India",
        latLabel: "अक्षांश विस्तार",
        latValue: "27°39' N to 30°55' N",
        longLabel: "देशांतर विस्तार",
        longValue: "74°27' E to 77°36' E",
        areaLabel: "क्षेत्रफल",
        areaValue: "44,212 वर्ग किमी (भारत का 1.34%)",
        areaValueEn: "44,212 sq km (1.34% of India)",
        boundariesLabel: "सीमाएँ",
        boundariesValue: "हिमाचल प्रदेश (उत्तर-पूर्व), राजस्थान (दक्षिण-पश्चिम), उत्तर प्रदेश, दिल्ली, उत्तराखण्ड (पूर्व), पंजाब, चण्डीगढ़ (उत्तर-पश्चिम)",
        boundariesValueEn: "Himachal Pradesh (NE), Rajasthan (SW), Uttar Pradesh, Delhi, Uttarakhand (E), Punjab, Chandigarh (NW)",
        northernDistrictLabel: "सबसे उत्तरी जिला",
        northernDistrictValue: "पंचकूला",
        northernDistrictValueEn: "Panchkula",
        southernDistrictLabel: "सबसे दक्षिणी जिला",
        southernDistrictValue: "मेवात",
        southernDistrictValueEn: "Mewat",
        riversLabel: "प्रमुख नदियाँ",
        riversValue: "यमुना, घग्गर, सरस्वती, साहिबी, इंदौरी और मारकण्डा",
        riversValueEn: "Yamuna, Ghaggar, Saraswati, Sahibi, Indori and Markanda"
    };

    // Demographic Data - Bilingual
    const demographicData = [
        { labelHindi: "कुल जनसंख्या", labelEn: "Total Population", value: "2,53,51,462" },
        { labelHindi: "पुरुष जनसंख्या", labelEn: "Male Population", value: "1,34,94,734" },
        { labelHindi: "महिला जनसंख्या", labelEn: "Female Population", value: "1,18,56,728" },
        { labelHindi: "शहरी जनसंख्या", labelEn: "Urban Population", value: "88,42,103 (34.88%)" },
        { labelHindi: "ग्रामीण जनसंख्या", labelEn: "Rural Population", value: "1,65,09,359 (65.12%)" },
        { labelHindi: "जनसंख्या घनत्व", labelEn: "Density", value: "573 व्यक्ति/वर्ग किमी" },
        { labelHindi: "लिंगानुपात", labelEn: "Sex Ratio", value: "879" },
        { labelHindi: "दशकीय वृद्धि", labelEn: "Decadal Growth", value: "17.64%" },
        { labelHindi: "साक्षरता दर", labelEn: "Literacy Rate", value: "75.60%" },
        { labelHindi: "पुरुष साक्षरता", labelEn: "Male Literacy", value: "84.10%" },
        { labelHindi: "महिला साक्षरता", labelEn: "Female Literacy", value: "65.90%" },
        { labelHindi: "अनुसूचित जाति जनसंख्या", labelEn: "SC Population", value: "20.17%" }
    ];

    // Administrative Data - Bilingual
    const administrativeData = [
        { labelHindi: "गठन तिथि", labelEn: "Established", value: "1 नवंबर, 1966" },
        { labelHindi: "नाम का अर्थ", labelEn: "Name Meaning", value: "भगवान का निवास" },
        { labelHindi: "राजधानी", labelEn: "Capital", value: "चण्डीगढ़" },
        { labelHindi: "मंडल", labelEn: "Divisions", value: "6" },
        { labelHindi: "जिले", labelEn: "Districts", value: "22" },
        { labelHindi: "लोकसभा सीटें", labelEn: "Lok Sabha Seats", value: "10" },
        { labelHindi: "राज्यसभा सीटें", labelEn: "Rajya Sabha Seats", value: "5" },
        { labelHindi: "विधानसभा सीटें", labelEn: "Vidhan Sabha Seats", value: "90+1" },
        { labelHindi: "उच्च न्यायालय", labelEn: "High Court", value: "पंजाब एवं हरियाणा उच्च न्यायालय" }
    ];

    // District Names with bilingual etymology
    const districtNames = [
        { name: "फतेहाबाद", nameEn: "Fatehabad", derivedHindi: "फिरोज शाह तुगलक के पुत्र फतेह खान के नाम पर", derivedEn: "Son of Firoz Shah Tughlaq, Fateh Khan" },
        { name: "रेवाड़ी", nameEn: "Rewari", derivedHindi: "राजा रेवत की पुत्री रेवती के नाम पर", derivedEn: "Daughter of King Rewat named Rewati" },
        { name: "चरखी दादरी", nameEn: "Charkhi Dadri", derivedHindi: "दादर नामक झील के कारण", derivedEn: "Lake named Dadar" },
        { name: "महेन्द्रगढ़", nameEn: "Mahendragarh", derivedHindi: "पटियाला के राजा महेन्द्र सिंह के नाम पर", derivedEn: "King of Patiala named Raja Mahendra Singh" },
        { name: "गुरुग्राम", nameEn: "Gurugram", derivedHindi: "गुरु द्रोणाचार्य के नाम पर", derivedEn: "Guru Dronacharya" },
        { name: "जींद", nameEn: "Jind", derivedHindi: "जैंती देवी के मंदिर के नाम पर", derivedEn: "Temple of Jainti Devi" },
        { name: "करनाल", nameEn: "Karnal", derivedHindi: "कर्ण (महाभारत) के नाम पर", derivedEn: "Karna (Mahabharata)" },
        { name: "कुरुक्षेत्र", nameEn: "Kurukshetra", derivedHindi: "राजा कुरु के नाम पर", derivedEn: "King Kuru" },
        { name: "यमुनानगर", nameEn: "Yamunanagar", derivedHindi: "यमुना नदी के किनारे बसा होने के कारण", derivedEn: "Located on banks of Yamuna river" },
        { name: "सिरसा", nameEn: "Sirsa", derivedHindi: "शश्वत ऋषि, शिरीषवन", derivedEn: "Shashwat saint, Shirishvana" },
        { name: "कैथल", nameEn: "Kaithal", derivedHindi: "हनुमान जी की जन्मस्थली", derivedEn: "Birth place of Hanuman ji" },
        { name: "मेवात", nameEn: "Mewat", derivedHindi: "मेव जाति की बहुलता", derivedEn: "Abundance of Meo caste" },
        { name: "झज्जर", nameEn: "Jhajjar", derivedHindi: "छज्जू किसान के नाम पर", derivedEn: "Chhajju farmer" },
        { name: "हिसार", nameEn: "Hisar", derivedHindi: "चार किले", derivedEn: "Four forts" },
        { name: "पंचकूला", nameEn: "Panchkula", derivedHindi: "पाँच कुएँ", derivedEn: "Five wells" },
        { name: "अम्बाला", nameEn: "Ambala", derivedHindi: "देवी भवानी अम्बालिका", derivedEn: "Goddess Bhawani Ambalika" },
        { name: "पलवल", nameEn: "Palwal", derivedHindi: "पलवासुर (राक्षस)", derivedEn: "Palawasur (demon)" },
        { name: "फरीदाबाद", nameEn: "Faridabad", derivedHindi: "शेख फरीद", derivedEn: "Sheikh Farid" },
        { name: "रोहतक", nameEn: "Rohtak", derivedHindi: "रानी तारावती के पुत्र रोहिताश", derivedEn: "Son of Queen Taravati named Rohitas" },
        { name: "सोनीपत", nameEn: "Sonipat", derivedHindi: "श्रवण कुमार", derivedEn: "Shravan Kumar" },
        { name: "पानीपत", nameEn: "Panipat", derivedHindi: "पाणिनि ऋषि", derivedEn: "Panini Rishi" }
    ];

    // Nicknames - Bilingual
    const nicknames = [
        { area: "कुरुक्षेत्र", areaEn: "Kurukshetra", nickname: "पार्कों का शहर, धर्मक्षेत्र", nicknameEn: "City of Parks, Dharmashetra" },
        { area: "रेवाड़ी", areaEn: "Rewari", nickname: "पीतल नगरी, वीर भूमि", nicknameEn: "Bronze city, Vir Bhumi" },
        { area: "जींद", areaEn: "Jind", nickname: "हरियाणा का हृदय", nicknameEn: "Heart of Haryana" },
        { area: "करनाल", areaEn: "Karnal", nickname: "हरियाणा का पेरिस", nicknameEn: "Paris of Haryana" },
        { area: "गुरुग्राम", areaEn: "Gurugram", nickname: "साइबर सिटी, मनोरंजन नगरी", nicknameEn: "Cyber city, City of Entertainment" },
        { area: "यमुनानगर", areaEn: "Yamunanagar", nickname: "कागज नगर", nicknameEn: "Paper city" },
        { area: "पलवल एवं रोहतक", areaEn: "Palwal and Rohtak", nickname: "शक्कर नगर", nicknameEn: "Sugar city" },
        { area: "पानीपत", areaEn: "Panipat", nickname: "वस्त्र नगर", nicknameEn: "Textile city, The City of Weavers" },
        { area: "पंचकूला", areaEn: "Panchkula", nickname: "नैनो सिटी", nicknameEn: "Nano city" },
        { area: "फतेहाबाद", areaEn: "Fatehabad", nickname: "गुलाबी नगर", nicknameEn: "Pink city" },
        { area: "हिसार", areaEn: "Hisar", nickname: "चुंबक नगर, इस्पात नगर", nicknameEn: "Magnet city, Steel city" },
        { area: "झज्जर", areaEn: "Jhajjar", nickname: "शहीदों की नगरी", nicknameEn: "The City of Martyrs" },
        { area: "अम्बाला", areaEn: "Ambala", nickname: "विज्ञान नगर, जुड़वां नगर", nicknameEn: "Science city, Twin city" },
        { area: "भिवानी", areaEn: "Bhiwani", nickname: "हरियाणा की काशी, मंदिरों का शहर, मिनी क्यूबा", nicknameEn: "Kashi of Haryana, City of Temples, Mini Cuba" },
        { area: "पलवल", areaEn: "Palwal", nickname: "कपास नगर", nicknameEn: "Cotton city" }
    ];

    // Minimum Records - Bilingual
    const minimumRecords = [
        { categoryHindi: "सबसे कम वन क्षेत्र (ISFR-2019)", categoryEn: "Least Forest Area (ISFR-2019)", district: "पलवल (13.97 वर्ग किमी)", districtEn: "Palwal (13.97 sq. km.)" },
        { categoryHindi: "सबसे कम क्षेत्रफल", categoryEn: "Minimum Area", district: "फरीदाबाद (743 वर्ग किमी)", districtEn: "Faridabad (743 sq. km)" },
        { categoryHindi: "सबसे कम जनसंख्या", categoryEn: "Minimum Population", district: "पंचकूला (5,61,293)", districtEn: "Panchkula (5,61,293 persons)" },
        { categoryHindi: "सबसे कम जनसंख्या घनत्व", categoryEn: "Minimum Population Density", district: "सिरसा (303)", districtEn: "Sirsa (303 persons/sq. km.)" },
        { categoryHindi: "सबसे कम साक्षरता दर", categoryEn: "Minimum Literacy Rate", district: "मेवात (54.08%)", districtEn: "Mewat (54.08%)" },
        { categoryHindi: "सबसे कम सड़क लंबाई", categoryEn: "Minimum Road Length", district: "फरीदाबाद (522 किमी)", districtEn: "Faridabad (522 km.)" }
    ];

    // Organizations - Bilingual
    const organizations = [
        { nameHindi: "हरियाणा वित्त निगम", nameEn: "Haryana Finance Corporation", year: "1 अप्रैल, 1967", hq: "चण्डीगढ़" },
        { nameHindi: "हरियाणा खादी एवं ग्रामोद्योग बोर्ड", nameEn: "Haryana Khadi and Gramodyog Board", year: "1 फरवरी, 1969", hq: "पंचकूला" },
        { nameHindi: "हरियाणा आवास बोर्ड", nameEn: "Haryana Housing Board", year: "1971", hq: "पंचकूला" },
        { nameHindi: "हरियाणा भंडारण निगम", nameEn: "Haryana Ware Housing Corporation", year: "1 नवंबर, 1967", hq: "फरीदाबाद" },
        { nameHindi: "हरियाणा उर्दू अकादमी", nameEn: "Haryana Urdu Academy", year: "22 दिसंबर, 1985", hq: "पंचकूला" },
        { nameHindi: "हरियाणा उद्यानिकी विभाग", nameEn: "Horticulture Department of Haryana", year: "1990-91", hq: "पंचकूला" },
        { nameHindi: "हरियाणा विद्युत उत्पादन निगम", nameEn: "Haryana Power Generation Corporation Limited", year: "1997", hq: "पंचकूला" },
        { nameHindi: "हरियाणा विद्युत प्रसारण निगम", nameEn: "Haryana Vidyut Prasaran Nigam Limited", year: "19 अगस्त, 1997", hq: "पंचकूला" },
        { nameHindi: "हरियाणा महिला आयोग", nameEn: "Haryana State Commission for Women", year: "20 दिसंबर, 1999", hq: "गुरुग्राम" }
    ];

    // Personalities - Bilingual
    const personalities = [
        { name: "हर्षवर्धन", nameEn: "Harshavardhana", penNameHindi: "शिलादित्य, साहित्यकार सम्राट", penNameEn: "Shiladitya, Sahityakar Samrat" },
        { name: "मूलचंद जैन", nameEn: "Mool Chand Jain", penNameHindi: "हरियाणा के गांधी", penNameEn: "Gandhi of Haryana" },
        { name: "कल्पना चावला", nameEn: "Kalpana Chawla", penNameHindi: "अंतरिक्ष की रानी", penNameEn: "Queen of Space" },
        { name: "चौधरी चोटूराम", nameEn: "Chaudhary Choturam", penNameHindi: "किसानों के मसीहा", penNameEn: "Massiha of Farmers" },
        { name: "ममता खरब", nameEn: "Mamta Kharab", penNameHindi: "स्वर्ण सुंदरी", penNameEn: "Golden Girl" },
        { name: "राजा सूरजमल", nameEn: "Raja Suraj Mal", penNameHindi: "जाटों का प्लेटो", penNameEn: "Plato of Jats" },
        { name: "चौधरी भजन लाल", nameEn: "Chaudhary Bhajan Lal", penNameHindi: "हरियाणा का चाणक्य", penNameEn: "Chanakya of Haryana" },
        { name: "शाह मुहम्मद", nameEn: "Shah Muhammad", penNameHindi: "हादी-ए-हरियाणा", penNameEn: "Hadi-i-Haryana" },
        { name: "मंसूर अली खान पटौदी", nameEn: "Mansoor Ali Khan Pataudi", penNameHindi: "टाइगर पटौदी", penNameEn: "Tiger Pataudi" },
        { name: "मनोहर लाल", nameEn: "Manohar Lal", penNameHindi: "हरियाणा का चौथा लाल", penNameEn: "Fourth Lal of Haryana" },
        { name: "सुरेंद्र शर्मा", nameEn: "Surendra Sharma", penNameHindi: "चार लाइनों के कवि", penNameEn: "Poet of four lines" },
        { name: "कविता दलाल", nameEn: "Kavita Dalal", penNameHindi: "लेडी खली", penNameEn: "Lady Khali" },
        { name: "पंडित नेकी राम", nameEn: "Pandit Neki Ram", penNameHindi: "हरियाणा केसरी", penNameEn: "Haryana Kesari" },
        { name: "चौधरी देवीलाल", nameEn: "Chaudhary Devi Lal", penNameHindi: "शेर-ए-हरियाणा", penNameEn: "Sher-i-Haryana" },
        { name: "सज्जन सिंह", nameEn: "Sajjan Singh", penNameHindi: "रुस्तम-ए-हिंद", penNameEn: "Rustam-i-Hind" },
        { name: "ओम प्रकाश जिंदल", nameEn: "Om Prakash Jindal", penNameHindi: "हरियाणा का इस्पात राजा", penNameEn: "Steel King of Haryana" },
        { name: "पंडित मांगेराम", nameEn: "Pandit Mangeram", penNameHindi: "कवि शिरोमणि", penNameEn: "Kavi Shiromani" },
        { name: "पंडित जसराज", nameEn: "Pandit Jasraj", penNameHindi: "स्वर सम्राट", penNameEn: "Swar Samrat" },
        { name: "चौधरी बंसीलाल", nameEn: "Chaudhary Bansi Lal", penNameHindi: "आधुनिक हरियाणा के वास्तुकार, लौह पुरुष", penNameEn: "Architect of Modern Haryana, Iron-Man of Haryana" }
    ];

    // State Symbols - Bilingual
    const stateSymbols = [
        {
            titleHindi: "राजकीय वृक्ष: पीपल",
            titleEn: "State Tree: Peepal",
            descriptionHindi: "भारत का एक मूल वृक्ष 'पीपल' को हरियाणा का राजकीय वृक्ष घोषित किया गया है। इसे बोधि वृक्ष, पिप्पल वृक्ष और अश्वत्थ वृक्ष के नाम से भी जाना जाता है। यह वृक्ष तीन प्रमुख धर्मों - बौद्ध, हिंदू और जैन धर्म में धार्मिक महत्व रखता है। पीपल के पेड़ के सभी भाग - जड़, छाल, पत्ता और फल उपयोगी होते हैं। इसका वैज्ञानिक नाम फाइकस रिलीजियोसा है।",
            descriptionEnglish: "A native tree of India 'Peepal' (Sacred Fig), has been declared state tree of Haryana. It is also known as bodhi tree, pippala tree and ashwattha tree. This tree is considered to have religious significance in three major religions i.e. Buddhism, Hinduism and Jainism. All parts of the Peepal tree, including root, bark, leaf and fruit are useful. Its scientific name is Ficus religiosa.",
            icon: TreePine,
            color: "green"
        },
        {
            titleHindi: "राजकीय पुष्प: कमल",
            titleEn: "State Flower: Lotus",
            descriptionHindi: "कमल (नेलुम्बो न्यूसीफेरा) एक जलीय पौधा है जिसमें चौड़ी तैरती हरी पत्तियाँ और चमकीले सुगंधित फूल होते हैं जो केवल उथले पानी में उगते हैं। कमल की जड़ें तालाब या नदी की मिट्टी में लगाई जाती हैं, जबकि पत्तियाँ पानी की सतह पर तैरती हैं। रंग के आधार पर इसके दो प्रकार हैं - लाल कमल और सफेद कमल।",
            descriptionEnglish: "The Lotus (Nelumbo nucifera) is an aquatic plant with broad floating green leaves and bright fragrant flowers that grow only in shallow water. The roots of lotus are planted in the soil of the pond or river bottom, while the leaves float on top of the water surface. On the basis of colour, it has two types, i.e. red lotus and white lotus.",
            icon: Flower2,
            color: "rose"
        },
        {
            titleHindi: "राजकीय पशु: काला हिरण",
            titleEn: "State Animal: Blackbuck",
            descriptionHindi: "काला हिरण, जिसे एंटीलोप भी कहा जाता है, मुख्य रूप से भारत में पाया जाता है, लेकिन पाकिस्तान और नेपाल में भी इसकी छोटी आबादी है। काले हिरण के सींगों में तीन से चार मोड़ होते हैं। ठोड़ी और आँखों के आसपास का सफेद फर चेहरे पर काली धारियों के विपरीत होता है।",
            descriptionEnglish: "Blackbuck, also known as Antelope, is mainly found in India, but with other small population in Pakistan and Nepal also. The Blackbuck has ringed horns that have a moderate spiral twist of three to four turns. The white fur on the chin and around the eyes is in sharp contrast with the black stripes on the face.",
            icon: Dog,
            color: "amber"
        },
        {
            titleHindi: "राजकीय पक्षी: काला तीतर",
            titleEn: "State Bird: Black Francolin",
            descriptionHindi: "काला तीतर, जिसे कभी-कभी ब्लैक पार्ट्रिज भी कहा जाता है, उत्तर और मध्य भारत के अधिकांश भागों में प्रजनन करता है। हिंदी में इसे काला तीतर कहा जाता है, यह सुंदर छोटी पूंछ वाला पक्षी खेती और झाड़ियों के पास पाया जाता है।",
            descriptionEnglish: "Black Francolin, sometimes known as Black Partridge, is a widespread breeding resident in most of the North and Central India. It is called Kala Teetar in Hindi, this handsome stub-tailed bird is found near cultivation and scrub, bordering wetlands.",
            icon: Bird,
            color: "slate"
        },
        {
            titleHindi: "राजकीय खेल: कुश्ती",
            titleEn: "State Sport: Wrestling",
            descriptionHindi: "हरियाणा सरकार ने कुश्ती को राजकीय खेल घोषित किया है। यह एक प्रकार का द्वंद्व युद्ध है, जो बिना किसी हथियार के केवल शारीरिक बल से लड़ा जाता है। पुराणों में इसे 'मल्ल क्रीड़ा' के नाम से वर्णित किया गया है।",
            descriptionEnglish: "Wrestling has been declared as a state sport by the Haryana Government. It is a kind of dual war, which is fought only by physical force without the help of any weapon. It is mentioned in the Puranas as 'Malla Krida'.",
            icon: Trophy,
            color: "orange"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Language Toggle Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                        <MapPin className="w-4 h-4" />
                        {language === "hindi" ? "आधिकारिक जानकारी - हरियाणा सरकार" : "Official Information - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा" : "Haryana"} <span className="text-primary">{language === "hindi" ? "सामान्य परिचय" : "Basic Information"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के भूगोल, जनसांख्यिकी, प्रशासन, राज्य प्रतीकों, जिलों और सांस्कृतिक विरासत की संपूर्ण जानकारी"
                            : "Complete guide to Haryana's geography, demographics, administration, state symbols, districts, and cultural heritage"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Landmark className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "22 जिले" : "22 Districts"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Users className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "2.53 करोड़ जनसंख्या" : "2.53 Crore Population"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Building2 className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "स्थापना 1966" : "Est. 1966"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Geography Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Globe className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? geographicalData.titleHindi : geographicalData.titleEnglish}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div><span className="font-semibold">{language === "hindi" ? geographicalData.locationLabel : "Location"}: </span> {language === "hindi" ? geographicalData.locationValue : geographicalData.locationValueEn}</div>
                                <div><span className="font-semibold">{language === "hindi" ? geographicalData.latLabel : "Latitude"}: </span> {geographicalData.latValue}</div>
                                <div><span className="font-semibold">{language === "hindi" ? geographicalData.longLabel : "Longitude"}: </span> {geographicalData.longValue}</div>
                                <div><span className="font-semibold">{language === "hindi" ? geographicalData.areaLabel : "Area"}: </span> {language === "hindi" ? geographicalData.areaValue : geographicalData.areaValueEn}</div>
                                <div><span className="font-semibold">{language === "hindi" ? geographicalData.northernDistrictLabel : "Northernmost District"}: </span> {language === "hindi" ? geographicalData.northernDistrictValue : geographicalData.northernDistrictValueEn}</div>
                            </div>
                            <div className="space-y-3">
                                <div><span className="font-semibold">{language === "hindi" ? geographicalData.boundariesLabel : "Boundaries"}: </span> {language === "hindi" ? geographicalData.boundariesValue : geographicalData.boundariesValueEn}</div>
                                <div><span className="font-semibold">{language === "hindi" ? geographicalData.southernDistrictLabel : "Southernmost District"}: </span> {language === "hindi" ? geographicalData.southernDistrictValue : geographicalData.southernDistrictValueEn}</div>
                                <div><span className="font-semibold">{language === "hindi" ? geographicalData.riversLabel : "Rivers"}: </span> {language === "hindi" ? geographicalData.riversValue : geographicalData.riversValueEn}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Demographics Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <Users className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "जनसांख्यिकी (जनगणना 2011)" : "Demographics (Census 2011)"}</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {demographicData.map((item, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 text-center border shadow-sm">
                                <p className="text-xs text-muted-foreground uppercase mb-1">{language === "hindi" ? item.labelHindi : item.labelEn}</p>
                                <p className="text-lg font-bold text-primary">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Administrative Structure */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <Landmark className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "प्रशासनिक ढाँचा" : "Administrative Structure"}</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {administrativeData.map((item, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 text-center border shadow-sm">
                                <p className="text-xs text-muted-foreground uppercase mb-1">{language === "hindi" ? item.labelHindi : item.labelEn}</p>
                                <p className="text-sm font-semibold">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* District Names Etymology */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "प्रमुख जिलों के नामकरण" : "Naming of Famous Districts"}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {districtNames.map((district, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 border shadow-sm hover:shadow-md transition-all">
                                <h3 className="font-bold text-primary">{language === "hindi" ? district.name : district.nameEn}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? district.derivedHindi : district.derivedEn}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nicknames Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <Award className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "भौगोलिक क्षेत्रों के उपनाम" : "Nicknames of Geographical Areas"}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {nicknames.map((item, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 border shadow-sm flex justify-between items-center">
                                <span className="font-medium">{language === "hindi" ? item.area : item.areaEn}</span>
                                <span className="text-sm text-primary">{language === "hindi" ? item.nickname : item.nicknameEn}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Minimum/Smallest Records */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <TrendingUp className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा के न्यूनतम/सबसे छोटे रिकॉर्ड" : "Minimum/Smallest of Haryana"}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {minimumRecords.map((record, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 border shadow-sm flex justify-between items-center">
                                <span className="text-sm font-medium">{language === "hindi" ? record.categoryHindi : record.categoryEn}</span>
                                <span className="text-sm text-primary">{language === "hindi" ? record.district : record.districtEn}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Organizations Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <Building2 className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा के विभिन्न संगठन" : "Various Organisations of Haryana"}</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border rounded-xl">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="p-3 text-left">{language === "hindi" ? "संगठन का नाम" : "Organisation Name"}</th>
                                    <th className="p-3 text-left">{language === "hindi" ? "स्थापना वर्ष" : "Establishing Year"}</th>
                                    <th className="p-3 text-left">{language === "hindi" ? "मुख्यालय" : "Headquarters"}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {organizations.map((org, idx) => (
                                    <tr key={idx} className="border-t">
                                        <td className="p-3">{language === "hindi" ? org.nameHindi : org.nameEn}</td>
                                        <td className="p-3">{org.year}</td>
                                        <td className="p-3">{org.hq}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Famous Personalities */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <User className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "प्रसिद्ध व्यक्तित्व एवं उपनाम" : "Famous Personalities & Pen-Names"}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {personalities.map((person, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 border shadow-sm">
                                <h3 className="font-bold text-primary">{language === "hindi" ? person.name : person.nameEn}</h3>
                                <p className="text-xs text-muted-foreground mt-1">{language === "hindi" ? person.penNameHindi : person.penNameEn}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* State Symbols Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <Award className="w-4 h-4" />
                            {language === "hindi" ? "हरियाणा का गौरव" : "Pride of Haryana"}
                        </div>
                        <h2 className="text-3xl font-bold mb-4">{language === "hindi" ? "राजकीय प्रतीक" : "State Symbols"}</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi" ? "हरियाणा की समृद्ध सांस्कृतिक और प्राकृतिक विरासत का प्रतिनिधित्व करने वाले आधिकारिक प्रतीक" : "Official symbols representing the rich cultural and natural heritage of Haryana"}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {stateSymbols.map((symbol, idx) => (
                            <div key={idx} className={`rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}>
                                <div className={`bg-gradient-to-r from-${symbol.color}-600 to-${symbol.color}-700 p-4`}>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/20 rounded-xl">
                                            <symbol.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{language === "hindi" ? symbol.titleHindi : symbol.titleEn}</h3>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{language === "hindi" ? symbol.descriptionHindi : symbol.descriptionEnglish}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा के बारे में" : "Common"} <span className="text-primary">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Haryana"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi" ? "हरियाणा के इतिहास, भूगोल और संस्कृति के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें" : "Find answers to the most commonly asked questions about Haryana's history, geography, and culture"}
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
                                        className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
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
                            {language === "hindi" ? "अपने हरियाणा ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer">
                                {language === "hindi" ? "हरियाणा जीके क्विज़ लें" : "Take Haryana GK Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    {/* Navigation */}
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Syllabus
                        </Link>
                        <Link href="/haryana-gk/ancient-history" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                            Next Chapter: Ancient History of Haryana
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा सामान्य परिचय - संपूर्ण संदर्भ" : "Haryana Basic Information - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के भूगोल, जनसांख्यिकी, प्रशासनिक ढाँचे, जिला व्युत्पत्ति, उपनामों, राज्य प्रतीकों, प्रसिद्ध व्यक्तित्वों और विभिन्न संगठनों के बारे में व्यापक जानकारी प्रदान करता है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about Haryana including its geography, demographics, administrative structure, district etymology, nicknames, state symbols, famous personalities, and various organizations. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों से स्रोतित" : "Information sourced from official Government of Haryana publications"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}