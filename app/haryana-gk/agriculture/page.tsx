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
    Sprout,
    Wheat,
    Apple,
    Milk,
    Fish,
    Tractor,
    Building2,
    Heart,
    Award,
    Banknote,
    Calendar,
    GraduationCap,
    Bird,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AgricultureAndAnimalHusbandryPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [language, setLanguage] = useState<"hindi" | "english">("hindi");

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "hindi" ? "english" : "hindi"));
    };

    // FAQ data bilingual - Complete
    const faqs = [
    {
        "questionHindi": "2024-25 में हरियाणा में गेहूं और चावल का कितना उत्पादन हुआ?",
        "questionEnglish": "How much wheat and rice did Haryana produce in 2024–25?",
        "answerHindi": "हरियाणा आर्थिक सर्वेक्षण 2025-26 की तालिका 3.3 के अनुसार, 2024-25 में गेहूं 135.80 लाख टन और चावल 71.37 लाख टन उत्पादित हुआ।",
        "answerEnglish": "According to Table 3.3 of Haryana Economic Survey 2025–26, wheat production was 135.80 lakh tonnes and rice production was 71.37 lakh tonnes in 2024–25."
    },
    {
        "questionHindi": "हरियाणा में धान/बासमती की खेती के प्रमुख क्षेत्र कौन से हैं?",
        "questionEnglish": "Which parts of Haryana are important for paddy and basmati cultivation?",
        "answerHindi": "करनाल, कुरुक्षेत्र, कैथल और अन्य सिंचित उत्तरी तथा मध्य जिलों में धान एवं बासमती की खेती महत्वपूर्ण है। किसी जिले को सबसे बड़ा उत्पादक बताने के लिए संबंधित वर्ष के जिलेवार आंकड़े देखने चाहिए।",
        "answerEnglish": "Paddy and basmati are important in irrigated northern and central districts including Karnal, Kurukshetra and Kaithal. District production rankings depend on the agricultural year."
    },
    {
        "questionHindi": "मुर्राह भैंस किस लिए प्रसिद्ध है?",
        "questionEnglish": "What is the Murrah buffalo known for?",
        "answerHindi": "मुर्राह हरियाणा से संबंधित उच्च दुग्ध उत्पादन क्षमता वाली भैंस की प्रसिद्ध नस्ल है। इसके संरक्षण और नस्ल सुधार पर हिसार स्थित ICAR-केंद्रीय भैंस अनुसंधान संस्थान (CIRB) कार्य करता है।",
        "answerEnglish": "Murrah is a well-known dairy buffalo breed associated with Haryana. The ICAR-Central Institute for Research on Buffaloes (CIRB), Hisar, works on buffalo breed conservation and improvement."
    },
    {
        "questionHindi": "2024-25 में हरियाणा का कुल खाद्यान्न उत्पादन कितना था?",
        "questionEnglish": "What was Haryana’s total foodgrain production in 2024–25?",
        "answerHindi": "कृषि एवं किसान कल्याण विभाग के आंकड़ों के अनुसार 2024-25 में राज्य का कुल खाद्यान्न उत्पादन 225.47 लाख टन था।",
        "answerEnglish": "Official agricultural figures record Haryana’s total foodgrain production in 2024–25 at 225.47 lakh tonnes."
    },
    {
        "questionHindi": "2024-25 में हरियाणा का कपास उत्पादन कितना था?",
        "questionEnglish": "How much cotton did Haryana produce in 2024–25?",
        "answerHindi": "2024-25 में हरियाणा का कपास उत्पादन 11.76 लाख गांठ (प्रत्येक 170 किग्रा) था। कपास को सामान्यतः सफेद सोना भी कहा जाता है।",
        "answerEnglish": "Haryana produced 11.76 lakh bales of cotton (170 kg per bale) in 2024–25. Cotton is commonly called white gold."
    },
    {
        "questionHindi": "राष्ट्रीय डेयरी अनुसंधान संस्थान कहाँ स्थित है?",
        "questionEnglish": "Where is the National Dairy Research Institute located?",
        "answerHindi": "राष्ट्रीय डेयरी अनुसंधान संस्थान (ICAR-NDRI) करनाल में है। इसकी स्थापना 1923 में बेंगलुरु में हुई थी और 1955 में इसका मुख्यालय करनाल स्थानांतरित हुआ।",
        "answerEnglish": "ICAR-NDRI is in Karnal. It originated in Bengaluru in 1923, and its headquarters moved to Karnal in 1955."
    },
    {
        "questionHindi": "हरियाणा भारत के किस कृषि-जलवायु क्षेत्र में आता है?",
        "questionEnglish": "Which national agro-climatic region includes Haryana?",
        "answerHindi": "राष्ट्रीय योजना आयोग की कृषि-जलवायु वर्गीकरण प्रणाली में हरियाणा ट्रांस-गंगेटिक प्लेन्स क्षेत्र (क्षेत्र VI) में आता है। राज्य के भीतर अन्य उद्देश्य-आधारित कृषि क्षेत्र वर्गीकरण भी प्रयोग किए जाते हैं।",
        "answerEnglish": "In the Planning Commission’s broad agro-climatic classification, Haryana is in the Trans-Gangetic Plains Region (Region VI). Other agricultural zoning systems are also used within the state."
    },
    {
        "questionHindi": "2024-25 में हरियाणा में मछली उत्पादन कितना था?",
        "questionEnglish": "What was Haryana’s fish production in 2024–25?",
        "answerHindi": "हरियाणा आर्थिक सर्वेक्षण 2025-26 के अनुसार, 2024-25 में लगभग 2,32,339.70 मीट्रिक टन मछली उत्पादन हुआ।",
        "answerEnglish": "According to Haryana Economic Survey 2025–26, fish production during 2024–25 was approximately 232,339.70 metric tonnes."
    },
    {
        "questionHindi": "2024-25 में हरियाणा में बागवानी उत्पादन कितना था?",
        "questionEnglish": "What was horticulture production in Haryana during 2024–25?",
        "answerHindi": "2024-25 में हरियाणा में बागवानी फसलों का कुल उत्पादन 69.24 लाख मीट्रिक टन तथा क्षेत्रफल लगभग 4.18 लाख हेक्टेयर था।",
        "answerEnglish": "In 2024–25 Haryana produced 69.24 lakh metric tonnes of horticultural crops over approximately 4.18 lakh hectares."
    },
    {
        "questionHindi": "मुर्राह नस्ल के अध्ययन के लिए प्रमुख अनुसंधान संस्थान कहाँ है?",
        "questionEnglish": "Where is the principal buffalo research institute associated with Murrah?",
        "answerHindi": "ICAR-केंद्रीय भैंस अनुसंधान संस्थान (CIRB), हिसार में स्थित है और 1 फरवरी 1985 से कार्यरत है।",
        "answerEnglish": "The ICAR-Central Institute for Research on Buffaloes (CIRB) is located in Hisar and began functioning on 1 February 1985."
    }
];

    // ==================== COMPLETE PDF DATA ====================

    // Section 1: Overview
    const overview = {
    "titleHindi": "हरियाणा में कृषि और पशुपालन",
    "titleEnglish": "Agriculture and Animal Husbandry in Haryana",
    "contentHindi": "हरियाणा एक महत्वपूर्ण कृषि प्रधान राज्य है, जहाँ सिंचाई, खाद्यान्न, डेयरी और बागवानी का बड़ा योगदान है। 1960 के दशक के उत्तरार्ध से हरित क्रांति के कारण विशेषकर गेहूं और धान उत्पादन में वृद्धि हुई। राज्य का खाद्यान्न उत्पादन 1966-67 में 25.92 लाख टन से बढ़कर 2024-25 में 225.47 लाख टन हो गया। हरियाणा आर्थिक सर्वेक्षण 2025-26 के अनुसार 2024-25 में गेहूं का उत्पादन 135.80 लाख टन और चावल का उत्पादन 71.37 लाख टन था। गेहूं, धान, बाजरा, सरसों, कपास, गन्ना, दलहन और सब्जियाँ प्रमुख फसलें हैं। ये आंकड़े निर्दिष्ट कृषि-वर्ष के हैं, वर्ष 2026 के सामान्य अनुमान नहीं। जिलों के उत्पादन में मौसम, क्षेत्रफल और प्रशासनिक सीमा परिवर्तन के अनुसार बदलाव होता है।",
    "contentEnglish": "Haryana is an important agricultural state with extensive irrigation, foodgrain cultivation, dairying and horticulture. The Green Revolution helped expand wheat and rice production from the late 1960s onward. The state’s foodgrain output grew from 25.92 lakh tonnes in 1966–67 to 225.47 lakh tonnes in 2024–25. According to the Haryana Economic Survey 2025–26, wheat output in 2024–25 was 135.80 lakh tonnes and rice output was 71.37 lakh tonnes. Key crops include wheat, paddy, bajra, mustard, cotton, sugarcane, pulses and vegetables. These are agricultural-year statistics, not claims about the year 2026. District-wise output changes with rainfall, cropping area and boundary adjustments."
};

    // Section 2: Agricultural Land Use
    const landUse = {
    "titleHindi": "हरियाणा में कृषि भूमि उपयोग",
    "titleEnglish": "Haryana Agricultural Land Use",
    "contentHindi": "शुद्ध बोया गया क्षेत्र वह भूमि है जहाँ वर्ष में कम-से-कम एक बार फसल बोई गई हो; सकल बोया क्षेत्र एक ही भूमि पर दूसरी फसल बोने पर उसे दोबारा गिनता है। भारत सरकार के भूमि उपयोग सांख्यिकी 2024-25 (अनंतिम) के अनुसार हरियाणा में शुद्ध बोया क्षेत्र लगभग 35.41 लाख हेक्टेयर और सकल बोया क्षेत्र लगभग 66.87 लाख हेक्टेयर था। इसके आधार पर फसल तीव्रता लगभग 188.8% बनती है। हरियाणा आर्थिक सर्वेक्षण 2025-26 में वर्ष 2024-25 के लिए सकल बोया क्षेत्र लगभग 66.83 लाख हेक्टेयर बताया गया है। अनंतिम स्रोतों के छोटे अंतर को देखते हुए आंकड़ों के साथ वर्ष तथा स्रोत अवश्य दें।",
    "contentEnglish": "Net sown area and gross cropped area are distinct measures: gross cropped area counts land once for each crop grown during the year. Government of India Land Use Statistics for 2024–25 (provisional) report a net sown area of about 35.41 lakh hectares and a gross cropped area of about 66.87 lakh hectares in Haryana. That corresponds to cropping intensity of approximately 188.8%. Haryana Economic Survey 2025–26 separately describes gross sown area of about 66.83 lakh hectares for 2024–25. Minor differences arise between provisional statistical series; figures must always carry a year and source."
};

    // Section 3: Agro-Climatic Zones
    const agroClimaticZones = {
    "titleHindi": "कृषि-जलवायु क्षेत्र",
    "titleEnglish": "Agro-Climatic Zones",
    "contentHindi": "योजना आयोग के राष्ट्रीय कृषि-जलवायु वर्गीकरण में हरियाणा ट्रांस-गंगेटिक प्लेन्स क्षेत्र (क्षेत्र VI) का हिस्सा है। राज्य के भीतर कृषि शोध तथा योजना के उद्देश्य से अलग-अलग उपक्षेत्र वर्गीकरण प्रचलित हैं; कुछ अध्ययन उत्तर, दक्षिण, पूर्व और पश्चिम के चार क्षेत्र लेते हैं। सिंचित उत्तरी एवं पूर्वी क्षेत्रों में धान, गेहूं और गन्ना प्रमुख हैं, जबकि अपेक्षाकृत शुष्क पश्चिमी तथा दक्षिणी भागों में बाजरा, सरसों, कपास एवं दालें महत्वपूर्ण हैं। राष्ट्रीय क्षेत्र VI को हरियाणा के अंदर केवल दो निश्चित कृषि-जलवायु क्षेत्रों के दावे के रूप में नहीं पढ़ना चाहिए।",
    "contentEnglish": "Under the Planning Commission’s national agro-climatic classification, Haryana is included in the Trans-Gangetic Plains Region (Region VI). Within Haryana, agricultural agencies use different regional groupings for research and planning, including northern, southern, eastern and western zones in some studies. The irrigated north/east generally grows paddy, wheat and sugarcane, while drier western/southern areas have significant bajra, mustard, cotton and pulses. Do not confuse the national Region VI with a fixed claim that the state has exactly two agro-climatic zones."
};

    // Section 4: Crop Seasons
    const cropSeasons = {
    "titleHindi": "हरियाणा में फसल के मौसम",
    "titleEnglish": "Crop Seasons in Haryana",
    "contentHindi": "हरियाणा में मुख्य रूप से दो फसल मौसम होते हैं। रबी की फसलें सामान्यतः अक्टूबर-नवंबर में बोई जाती हैं और मार्च-अप्रैल के आसपास काटी जाती हैं; इनमें गेहूं, जौ, चना, सरसों और मटर शामिल हैं। खरीफ की फसलें दक्षिण-पश्चिम मानसून के साथ सामान्यतः जून-जुलाई में बोई जाती हैं और सितंबर-नवंबर में काटी जाती हैं; इनमें धान, बाजरा, मक्का, ज्वार और कपास प्रमुख हैं। खरीफ फसलें सामान्यतः गर्म मौसम में उगती हैं; इनके लिए कम तापमान व कम आर्द्रता आवश्यक बताना गलत है। फसल, मौसम और किस्म के अनुसार बुवाई-कटाई की तिथियाँ बदल सकती हैं। गन्ने जैसी कुछ फसलें लंबी अवधि की होती हैं।",
    "contentEnglish": "Haryana has two main crop seasons. Rabi crops are generally sown in October–November and harvested around March–April; major examples are wheat, barley, gram, mustard and peas. Kharif crops are generally sown with the southwest monsoon in June–July and harvested in September–November; examples are paddy, bajra, maize, jowar and cotton. Kharif crops generally require warm growing-season conditions, not low temperature and low humidity. Sowing and harvest dates vary with crop, weather and cultivar. Some crops such as sugarcane are long-duration crops."
};

    // Section 5: Complete Major Crops Data
    const majorCrops = [
    {
        "name": "Wheat",
        "nameHindi": "गेहूं",
        "conditions": "Wheat is a major rabi crop, generally grown in cool weather and harvested in spring. Loam soils and irrigation support high yields.",
        "conditionsHindi": "गेहूं प्रमुख रबी फसल है, जो ठंडे मौसम में उगती है और वसंत में काटी जाती है। दोमट मिट्टी और सिंचाई इसकी उपज बढ़ाती हैं।",
        "details": "Wheat was Haryana’s largest foodgrain crop by output in 2024–25: 135.80 lakh tonnes (Haryana Economic Survey 2025–26, Table 3.3). Its harvested area was about 25.68 lakh hectares. ICAR-Indian Institute of Wheat and Barley Research is based in Karnal.",
        "detailsHindi": "2024-25 में गेहूं हरियाणा की सर्वाधिक उत्पादन वाली खाद्यान्न फसल थी: 135.80 लाख टन (हरियाणा आर्थिक सर्वेक्षण 2025-26, तालिका 3.3)। इसका क्षेत्रफल लगभग 25.68 लाख हेक्टेयर था। ICAR-भारतीय गेहूं एवं जौ अनुसंधान संस्थान करनाल में स्थित है।"
    },
    {
        "name": "Rice",
        "nameHindi": "चावल",
        "conditions": "Paddy is a warm-season crop requiring sufficient water; irrigation is essential in much of Haryana. It performs well on fertile, moisture-retentive soils.",
        "conditionsHindi": "धान गर्म मौसम की फसल है और इसकी खेती में पर्याप्त पानी आवश्यक है। हरियाणा के अनेक भागों में सिंचाई महत्वपूर्ण भूमिका निभाती है।",
        "details": "Haryana produced 71.37 lakh tonnes of rice in 2024–25, according to the Economic Survey 2025–26. Irrigated belts around Karnal, Kurukshetra and Kaithal are known for paddy and basmati. The 2024–25 paddy area was approximately 18.37 lakh hectares.",
        "detailsHindi": "हरियाणा आर्थिक सर्वेक्षण 2025-26 के अनुसार वर्ष 2024-25 में 71.37 लाख टन चावल उत्पादित हुआ। करनाल, कुरुक्षेत्र और कैथल सहित सिंचित क्षेत्र धान तथा बासमती के लिए जाने जाते हैं। 2024-25 में धान का क्षेत्रफल लगभग 18.37 लाख हेक्टेयर था।"
    },
    {
        "name": "Maize",
        "nameHindi": "मक्का",
        "conditions": "Maize is a warm-season crop that performs best with good drainage and adequate moisture, especially during flowering.",
        "conditionsHindi": "मक्का गर्म मौसम में उगने वाली फसल है। अच्छी जलनिकासी और विशेषकर फूल आने के समय पर्याप्त नमी इसकी उपज के लिए उपयोगी है।",
        "details": "Maize is cultivated in parts of Haryana, including the Shivalik foothill and irrigated regions. District production rankings should be verified using data for a specified crop year.",
        "detailsHindi": "हरियाणा में मक्का की खेती शिवालिक की तलहटी तथा अन्य उपयुक्त सिंचित क्षेत्रों में होती है। किसी जिले को प्रथम उत्पादक बताने के लिए निर्धारित फसल-वर्ष के आंकड़े आवश्यक हैं।"
    },
    {
        "name": "Jowar",
        "nameHindi": "ज्वार",
        "conditions": "Jowar (sorghum) is suited to warm conditions and relatively dry regions; it is used for grain as well as fodder.",
        "conditionsHindi": "ज्वार गर्म तथा अपेक्षाकृत शुष्क क्षेत्रों के लिए उपयुक्त है और इसका उपयोग अनाज तथा चारे दोनों के रूप में होता है।",
        "details": "Jowar is cultivated in Haryana as a kharif fodder and grain crop. The main producing districts can vary by year; no unqualified district-first ranking is used here.",
        "detailsHindi": "हरियाणा में ज्वार खरीफ में अनाज और चारे के लिए उगाई जाती है। प्रमुख उत्पादक जिले वर्ष के अनुसार बदल सकते हैं, इसलिए यहाँ बिना वर्ष का प्रथम-स्थान दावा नहीं किया गया है।"
    },
    {
        "name": "Bajra",
        "nameHindi": "बाजरा",
        "conditions": "Pearl millet (bajra) is a hardy kharif cereal adapted to warm, semi-arid conditions and relatively low rainfall.",
        "conditionsHindi": "बाजरा गर्म तथा अर्ध-शुष्क जलवायु और अपेक्षाकृत कम वर्षा के अनुरूप खरीफ की कठोर अनाज फसल है।",
        "details": "Bajra is important in south-western Haryana, including Mahendragarh, Bhiwani–Charkhi Dadri and surrounding districts. It is part of efforts to diversify away from water-intensive crops.",
        "detailsHindi": "बाजरे की खेती दक्षिण-पश्चिमी हरियाणा में, विशेष रूप से महेंद्रगढ़, भिवानी-चरखी दादरी और आसपास के क्षेत्रों में महत्वपूर्ण है। यह कम पानी वाली फसलों के विविधीकरण में भी उपयोगी है।"
    },
    {
        "name": "Barley",
        "nameHindi": "जौ",
        "conditions": "Barley is a rabi cereal tolerant of relatively dry conditions and some poorer soils compared with wheat.",
        "conditionsHindi": "जौ रबी की फसल है, जो गेहूं की तुलना में कुछ शुष्क परिस्थितियों तथा अपेक्षाकृत कमजोर मिट्टी में भी उग सकती है।",
        "details": "Barley is cultivated in the drier parts of Haryana and is used for grain, feed and industrial purposes. Its production varies from year to year.",
        "detailsHindi": "हरियाणा के अपेक्षाकृत शुष्क हिस्सों में जौ उगाया जाता है। इसका उपयोग खाद्य अनाज, पशु आहार तथा उद्योग में होता है। उत्पादन वर्ष के अनुसार बदलता है।"
    },
    {
        "name": "Gram",
        "nameHindi": "चना",
        "conditions": "Gram (chickpea) is a cool-season pulse and is normally classified as a rabi crop, not simultaneously as both a rabi and kharif crop.",
        "conditionsHindi": "चना शीत ऋतु की दलहनी फसल है और सामान्यतः रबी फसल के रूप में वर्गीकृत किया जाता है; इसे एक साथ रबी और खरीफ दोनों कहना गलत है।",
        "details": "Gram fixes atmospheric nitrogen through its root nodules in association with bacteria. It is grown in relatively dry tracts of Haryana, with acreage changing by season.",
        "detailsHindi": "चना अपनी जड़ की ग्रंथियों में जीवाणुओं की सहायता से वायुमंडलीय नाइट्रोजन का स्थिरीकरण करता है। हरियाणा के अपेक्षाकृत शुष्क इलाकों में इसकी खेती होती है, जिसका क्षेत्रफल मौसम के अनुसार बदलता है।"
    }
];

    // Section 6: Cash Crops
    const cashCrops = [
    {
        "name": "Sugarcane",
        "nameHindi": "गन्ना",
        "conditions": "Sugarcane is a long-duration, water-demanding crop grown under warm conditions with irrigation.",
        "conditionsHindi": "गन्ना अधिक समय लेने वाली और पानी की आवश्यकता वाली फसल है; इसकी खेती गर्म वातावरण और सिंचाई के साथ की जाती है।",
        "details": "Sugarcane is important in the Yamuna-side irrigated belt. Haryana produced 58.30 lakh tonnes in 2024–25 (Economic Survey 2025–26, Table 3.3). This is a state total, not a district ranking.",
        "detailsHindi": "गन्ना यमुना के निकट सिंचित क्षेत्र में प्रमुख है। हरियाणा में 2024-25 में 58.30 लाख टन गन्ना उत्पादित हुआ (आर्थिक सर्वेक्षण 2025-26, तालिका 3.3)। यह राज्य का कुल उत्पादन है, जिले की रैंकिंग नहीं।"
    },
    {
        "name": "Cotton",
        "nameHindi": "कपास",
        "conditions": "Cotton grows in a warm, relatively dry growing season and is sensitive to waterlogging. It is commonly called white gold.",
        "conditionsHindi": "कपास गर्म और अपेक्षाकृत शुष्क मौसम की फसल है तथा जलभराव से प्रभावित होती है। इसे सामान्यतः सफेद सोना कहा जाता है।",
        "details": "Cotton is important in the Sirsa, Fatehabad and Hisar belt. The state produced 11.76 lakh bales of 170 kg each during 2024–25 (Economic Survey 2025–26, Table 3.3).",
        "detailsHindi": "सिरसा, फतेहाबाद और हिसार के क्षेत्र में कपास प्रमुख है। 2024-25 में राज्य में 170 किग्रा की 11.76 लाख गांठ कपास उत्पादित हुई (आर्थिक सर्वेक्षण 2025-26, तालिका 3.3)।"
    },
    {
        "name": "Mustard",
        "nameHindi": "सरसों",
        "conditions": "Mustard is a major rabi oilseed crop that performs well in cool, relatively dry growing conditions.",
        "conditionsHindi": "सरसों रबी की प्रमुख तिलहन फसल है, जो ठंडे तथा अपेक्षाकृत शुष्क वातावरण में अच्छी तरह उगती है।",
        "details": "Mustard is important in southern and south-western Haryana. All oilseeds together—not mustard alone—accounted for 15.39 lakh tonnes in 2024–25 (Economic Survey 2025–26, Table 3.3).",
        "detailsHindi": "सरसों दक्षिणी और दक्षिण-पश्चिमी हरियाणा में महत्वपूर्ण है। आर्थिक सर्वेक्षण 2025-26 की तालिका 3.3 के अनुसार 2024-25 में सभी तिलहन फसलों का कुल उत्पादन 15.39 लाख टन था; यह केवल सरसों का आंकड़ा नहीं है।"
    }
];

    // Section 7: Crop Producing Districts Table (Complete)
    const cropProducingDistricts = [
    {
        "district": "Ambala",
        "crops": "Wheat, paddy, vegetables"
    },
    {
        "district": "Yamunanagar",
        "crops": "Wheat, paddy, sugarcane, vegetables"
    },
    {
        "district": "Panchkula",
        "crops": "Wheat, maize, vegetables"
    },
    {
        "district": "Kaithal",
        "crops": "Wheat, paddy, mustard"
    },
    {
        "district": "Kurukshetra",
        "crops": "Wheat, paddy (including basmati), sugarcane"
    },
    {
        "district": "Karnal",
        "crops": "Wheat, paddy (including basmati), sugarcane"
    },
    {
        "district": "Rohtak",
        "crops": "Wheat, bajra, mustard, fodder"
    },
    {
        "district": "Sonipat",
        "crops": "Wheat, paddy, vegetables, fodder"
    },
    {
        "district": "Gurugram",
        "crops": "Wheat, bajra, mustard"
    },
    {
        "district": "Jhajjar",
        "crops": "Wheat, bajra, mustard"
    },
    {
        "district": "Faridabad",
        "crops": "Wheat, bajra, mustard, vegetables"
    },
    {
        "district": "Palwal",
        "crops": "Wheat, bajra, mustard"
    },
    {
        "district": "Nuh",
        "crops": "Wheat, bajra, mustard"
    },
    {
        "district": "Rewari",
        "crops": "Wheat, bajra, mustard"
    },
    {
        "district": "Mahendragarh",
        "crops": "Bajra, mustard, wheat, gram"
    },
    {
        "district": "Hisar",
        "crops": "Wheat, cotton, mustard, bajra"
    },
    {
        "district": "Bhiwani",
        "crops": "Wheat, mustard, bajra, gram"
    },
    {
        "district": "Fatehabad",
        "crops": "Wheat, cotton, paddy"
    },
    {
        "district": "Jind",
        "crops": "Wheat, paddy, cotton, mustard"
    },
    {
        "district": "Charkhi Dadri",
        "crops": "Bajra, mustard, wheat, gram"
    },
    {
        "district": "Sirsa",
        "crops": "Wheat, cotton, paddy, mustard"
    }
];

    // Section 8: Largest Crop Producing Districts
    const largestProducingDistricts = [
    {
        "crop": "Wheat",
        "district": "Irrigated districts across north, central and western Haryana"
    },
    {
        "crop": "Paddy/Basmati",
        "district": "Karnal, Kurukshetra, Kaithal and other irrigated belts"
    },
    {
        "crop": "Bajra",
        "district": "Mahendragarh, Bhiwani, Charkhi Dadri and nearby dry belts"
    },
    {
        "crop": "Cotton",
        "district": "Sirsa, Fatehabad and Hisar belt"
    },
    {
        "crop": "Sugarcane",
        "district": "Yamunanagar, Karnal and adjoining irrigated districts"
    },
    {
        "crop": "Mustard",
        "district": "Southern and south-western Haryana"
    },
    {
        "crop": "Gram",
        "district": "Drier western and south-western tracts"
    }
];

    // Section 9: Targeted Area, Production and Average Yield Table
    const cropProductionData = [
    {
        "crop": "Rice",
        "area": "1397",
        "production": "5631",
        "yield": "4031"
    },
    {
        "crop": "Jowar",
        "area": "35",
        "production": "20",
        "yield": "571"
    },
    {
        "crop": "Maize",
        "area": "30",
        "production": "108",
        "yield": "3600"
    },
    {
        "crop": "Bajra",
        "area": "553",
        "production": "1500",
        "yield": "2712"
    },
    {
        "crop": "Kharif pulses",
        "area": "68",
        "production": "73",
        "yield": "1073"
    },
    {
        "crop": "Wheat",
        "area": "2550",
        "production": "13642",
        "yield": "5350"
    },
    {
        "crop": "Gram",
        "area": "35",
        "production": "63",
        "yield": "1800"
    },
    {
        "crop": "Barley",
        "area": "20",
        "production": "72",
        "yield": "3600"
    },
    {
        "crop": "Rabi pulses",
        "area": "10",
        "production": "13",
        "yield": "1300"
    },
    {
        "crop": "Sugarcane",
        "area": "127.5",
        "production": "10248",
        "yield": "80376"
    },
    {
        "crop": "Kharif oilseeds",
        "area": "35",
        "production": "25",
        "yield": "714"
    },
    {
        "crop": "Rabi oilseeds",
        "area": "750",
        "production": "1650",
        "yield": "2200"
    },
    {
        "crop": "Sunflower",
        "area": "25",
        "production": "52",
        "yield": "2100"
    }
];

    // Section 10: Horticulture Complete Data
    const horticulture = {
    "titleHindi": "हरियाणा में बागवानी",
    "titleEnglish": "Horticulture in Haryana",
    "contentHindi": "हरियाणा आर्थिक सर्वेक्षण 2025-26 के अनुसार 2024-25 में बागवानी फसलों का क्षेत्रफल लगभग 4.18 लाख हेक्टेयर तथा कुल उत्पादन 69.24 लाख मीट्रिक टन रहा। इस क्षेत्र में सब्जियाँ, फल, मसाले, फूल एवं औषधीय या सुगंधित पौधे आते हैं। नीचे दिए गए उत्पादन आंकड़े 2024-25 के वास्तविक उपलब्ध आंकड़े हैं; ये 2025-26 के लक्ष्य नहीं हैं।",
    "contentEnglish": "Haryana Economic Survey 2025–26 reports that horticulture covered about 4.18 lakh hectares and produced 69.24 lakh metric tonnes in 2024–25. The sector includes vegetables, fruits, spices, flowers and medicinal or aromatic crops, with different crop-specific units. The following statistics refer to 2024–25 actuals, not government targets for 2025–26."
};

    // Section 10a: Fruits Data
    const fruitsData = {
    "titleHindi": "फल उत्पादन",
    "titleEnglish": "Fruit Production",
    "contentHindi": "2024-25 में हरियाणा में 73,153 हेक्टेयर क्षेत्र में फल की खेती हुई तथा 9.57 लाख मीट्रिक टन उत्पादन दर्ज किया गया (आर्थिक सर्वेक्षण 2025-26, तालिका 3.12)। प्रमुख फलों में खट्टे फल, अमरूद, आम, बेर और आँवला शामिल हैं। सर्वेक्षण में खट्टे फलों का क्षेत्रफल 26,199 हेक्टेयर जबकि आम का क्षेत्रफल 7,840 हेक्टेयर दर्ज है; इसलिए आम को क्षेत्रफल के आधार पर सबसे बड़ा फल कहना गलत है। जिलेवार प्रथम उत्पादक के लिए उसी वर्ष की जिला-तालिका चाहिए।",
    "contentEnglish": "In 2024–25, Haryana cultivated fruits on 73,153 hectares and produced 9.57 lakh metric tonnes (Economic Survey 2025–26, Table 3.12). Major fruits include citrus, guava, mango, ber and aonla. The survey records citrus cultivation on 26,199 hectares and mango on 7,840 hectares, so mango is not the largest fruit crop by area. Claims identifying a district as the biggest producer require a specified-year district table."
};

    // Section 10b: Mango Cultivation
    const mangoData = {
    "titleHindi": "आम की खेती",
    "titleEnglish": "Mango Cultivation",
    "contentHindi": "हरियाणा में आम की खेती उपयुक्त सिंचाई और बागवानी परिस्थितियों वाले क्षेत्रों में की जाती है। दशहरी, चौसा और लंगड़ा इसकी प्रमुख किस्में हैं। आर्थिक सर्वेक्षण 2025-26 के अनुसार 2024-25 में आम की खेती 7,840 हेक्टेयर में हुई और 92,862 मीट्रिक टन उत्पादन दर्ज किया गया। इस वर्ष खट्टे फलों का क्षेत्रफल आम से अधिक था।",
    "contentEnglish": "Mango is grown in parts of Haryana, especially where adequate irrigation and suitable horticultural conditions are available. The main varieties include Dashehari, Chausa and Langra. Haryana Economic Survey 2025–26 records 7,840 hectares of mango in 2024–25, producing 92,862 metric tonnes. Citrus occupied more area than mango in that year."
};

    // Section 10c: Kinnow Cultivation
    const kinnowData = {
    "titleHindi": "किन्नू की खेती",
    "titleEnglish": "Kinnow Cultivation",
    "contentHindi": "किन्नू खट्टे फलों की श्रेणी में आता है और इसकी खेती पश्चिमी हरियाणा के उपयुक्त सिंचित क्षेत्रों, विशेषकर सिरसा और फतेहाबाद के आसपास, की जाती है। इसे सामान्यतः सर्दियों में तोड़ा जाता है। बाग की आयु, प्रबंधन और वर्ष के अनुसार उत्पादकता बदलती है; 22 टन/हेक्टेयर को हर परिस्थिति में लागू राज्य-औसत नहीं मानना चाहिए।",
    "contentEnglish": "Kinnow is a citrus fruit cultivated in suitable irrigated belts of western Haryana, particularly around Sirsa and Fatehabad. It is usually harvested in winter. Yield depends on orchard age, management and the year; a single unqualified state-wide figure of 22 tonnes per hectare should not be treated as universal."
};

    // Section 10d: Fruits and Area of Production Table
    const fruitsAreaTable = [
        { fruit: "Mango", area: "Panchkula, Ambala, Yamunanagar, Karnal, Kurukshetra" },
        { fruit: "Guava", area: "Gurugram, Karnal, Hisar, Faridabad, Sonipat" },
        { fruit: "Citrus", area: "Sirsa, Hisar, Ambala, Gurugram, Fatehabad" },
        { fruit: "Papaya", area: "Yamunanagar, Karnal, Panchkula, Kurukshetra, Ambala" },
        { fruit: "Berry", area: "Sonipat, Gurugram, Hisar, Fatehabad, Rohtak" },
        { fruit: "Amla", area: "Sirsa, Gurugram, Hisar, Karnal, Faridabad, Ambala" }
    ];

    // Section 10e: Vegetables Data
    const vegetablesData = {
    "titleHindi": "सब्जी उत्पादन",
    "titleEnglish": "Vegetable Production",
    "contentHindi": "हरियाणा आर्थिक सर्वेक्षण 2025-26 की तालिका 3.13 के अनुसार 2024-25 में सब्जियों का क्षेत्रफल 3,34,281 हेक्टेयर तथा उत्पादन 58.57 लाख मीट्रिक टन था। आलू का क्षेत्रफल 33,427 हेक्टेयर और उत्पादन 9,13,380 टन था, जबकि कद्दूवर्गीय सब्जियों का क्षेत्रफल इससे अधिक, 51,981 हेक्टेयर था। इसलिए बिना मापदंड बताए आलू को सबसे अधिक उगाई जाने वाली सब्जी कहना भ्रामक है। टमाटर, प्याज, फूलगोभी, आलू और अन्य सब्जियाँ राज्य की महत्वपूर्ण फसलें हैं।",
    "contentEnglish": "In 2024–25, vegetables covered 3,34,281 hectares and yielded 58.57 lakh metric tonnes in Haryana (Economic Survey 2025–26, Table 3.13). Potato occupied 33,427 hectares and yielded 913,380 tonnes, while cucurbits occupied a larger area of 51,981 hectares. Therefore “potato is the most cultivated vegetable” is misleading without specifying the measure. Tomato, onion, cauliflower, potato and other vegetables are important across the state."
};

    // Section 10f: Vegetables and Area of Production Table
    const vegetablesAreaTable = [
        { vegetable: "Potato", area: "Kurukshetra, Yamunanagar, Ambala, Karnal" },
        { vegetable: "Onion", area: "Gurugram, Sonipat, Panipat, Panchkula" },
        { vegetable: "Cauliflower", area: "Sonipat, Panipat, Kurukshetra, Yamunanagar" },
        { vegetable: "Tomato", area: "Karnal, Sonipat, Panipat, Gurugram" }
    ];

    // Section 10g: Mushroom Cultivation
    const mushroomData = {
    "titleHindi": "मशरूम की खेती",
    "titleEnglish": "Mushroom Cultivation",
    "contentHindi": "हरियाणा में मशरूम, विशेषकर बटन मशरूम, कृषि विविधीकरण की महत्वपूर्ण गतिविधि है। हरियाणा आर्थिक सर्वेक्षण 2025-26 के अनुसार 2024-25 में मशरूम उत्पादन 18,384 मीट्रिक टन रहा। सोनीपत को पूरे भारत का सबसे बड़ा मशरूम उत्पादक जिला बताने के लिए वर्ष-विशिष्ट राष्ट्रीय जिलेवार स्रोत आवश्यक है; इसलिए यहाँ बिना स्रोत यह दावा नहीं किया गया है।",
    "contentEnglish": "Mushroom cultivation is an important diversification activity in Haryana, especially button mushrooms. The Haryana Economic Survey 2025–26 reports 18,384 metric tonnes of mushroom production in 2024–25. The claim that Sonipat is the largest mushroom-producing district in India should not be presented without a dated, comparable district-level national source."
};

    // Section 10h: Top Producers of Fruits and Vegetables
    const topProducersTable = [
    {
        "item": "Citrus (2024–25)",
        "producer": "26,199 ha; 4,39,886 MT — Haryana total"
    },
    {
        "item": "Guava (2024–25)",
        "producer": "17,448 ha; 2,10,228 MT — Haryana total"
    },
    {
        "item": "Mango (2024–25)",
        "producer": "7,840 ha; 92,862 MT — Haryana total"
    },
    {
        "item": "Potato (2024–25)",
        "producer": "33,427 ha; 9,13,380 MT — Haryana total"
    },
    {
        "item": "Mushroom (2024–25)",
        "producer": "18,384 MT — Haryana total"
    }
];

    // Section 10i: Spices Data
    const spicesData = {
    "titleHindi": "मसाले",
    "titleEnglish": "Spices",
    "contentHindi": "हरियाणा में लहसुन, मेथी, धनिया, अदरक और अन्य मसाले उगाए जाते हैं। आर्थिक सर्वेक्षण 2025-26 (तालिका 3.14) के अनुसार 2024-25 में मसालों का कुल क्षेत्रफल 6,574 हेक्टेयर और उत्पादन 67,786 मीट्रिक टन था। इनमें लहसुन का क्षेत्रफल 3,986 हेक्टेयर और उत्पादन 62,880 मीट्रिक टन रहा, जो उस तालिका में सर्वाधिक है।",
    "contentEnglish": "Haryana cultivates garlic, fenugreek, coriander, ginger and other spices. Economic Survey 2025–26 (Table 3.14) reports a total of 6,574 hectares and 67,786 metric tonnes of spices in 2024–25. Garlic accounted for 3,986 hectares and 62,880 metric tonnes, making it the major recorded spice crop by area and production in that table."
};

    // Section 10j: Spices Area and Production Table
    const spicesAreaProduction = [
    {
        "name": "Ginger",
        "area": "48",
        "production": "668"
    },
    {
        "name": "Garlic",
        "area": "3986",
        "production": "62880"
    },
    {
        "name": "Fenugreek",
        "area": "1227",
        "production": "1465"
    },
    {
        "name": "Coriander",
        "area": "946",
        "production": "1046"
    },
    {
        "name": "Others",
        "area": "367",
        "production": "1727"
    },
    {
        "name": "Total (2024–25)",
        "area": "6574",
        "production": "67786"
    }
];

    // Section 10k: Spices and Area of Production Table
    const spicesAreaTable = [
        { spice: "Coriander", area: "Kurukshetra, Karnal, Gurugram, Panchkula, Ambala" },
        { spice: "Chillies", area: "Yamunanagar, Karnal, Hisar, Jind, Fatehabad" },
        { spice: "Garlic", area: "Karnal, Yamunanagar, Fatehabad, Sirsa, Gurugram" },
        { spice: "Methi", area: "Gurugram, Hisar, Mahendragarh, Kurukshetra, Jind" },
        { spice: "Turmeric", area: "Yamunanagar, Kurukshetra, Ambala, Panchkula" }
    ];

    // Section 10l: Medicinal and Aromatic Plants
    const medicinalPlants = {
    "titleHindi": "औषधीय और सुगंधित पौधे",
    "titleEnglish": "Medicinal and Aromatic Plants",
    "contentHindi": "हरियाणा में औषधीय एवं सुगंधित पौधों की खेती तथा संरक्षण को बढ़ावा दिया जाता है। 2024-25 में बागवानी विभाग ने इन फसलों का क्षेत्रफल 2,662 हेक्टेयर और उत्पादन 4,557 मीट्रिक टन दर्ज किया (आर्थिक सर्वेक्षण 2025-26, तालिका 3.15)। इस तालिका में एलोवेरा केवल 1 हेक्टेयर और 6 टन दर्ज है; इसलिए इसे राज्य की सर्वाधिक उगाई जाने वाली औषधीय फसल बताना सही नहीं है। मोरनी हिल्स में जड़ी-बूटी संरक्षण संबंधी प्रयास किए गए हैं।",
    "contentEnglish": "Haryana supports cultivation and conservation of medicinal and aromatic plants. In 2024–25, the horticulture department recorded 2,662 hectares of medicinal and aromatic plants with 4,557 metric tonnes of output (Economic Survey 2025–26, Table 3.15). Aloe vera was only 1 hectare and 6 tonnes in that particular horticulture table; it must not be labelled the state’s largest medicinal crop. Morni Hills are associated with herbal conservation initiatives."
};

    // Section 10m: Medicinal Plants Area and Production
    const medicinalAreaProduction = [
    {
        "name": "Aloe vera",
        "area": "1",
        "production": "6"
    },
    {
        "name": "Lemon grass",
        "area": "0",
        "production": "0"
    },
    {
        "name": "Other medicinal/aromatic plants",
        "area": "2661",
        "production": "4551"
    },
    {
        "name": "Total (2024–25)",
        "area": "2662",
        "production": "4557"
    }
];

    // Section 10n: Floriculture Data
    const floriculture = {
    "titleHindi": "हरियाणा में पुष्पोत्पादन",
    "titleEnglish": "Floriculture in Haryana",
    "contentHindi": "हरियाणा में गेंदा, गुलाब, ग्लेडियोलस तथा अन्य फूल उगाए जाते हैं। आर्थिक सर्वेक्षण 2025-26 की तालिका 3.16 के अनुसार 2024-25 में फूलों की खेती 1,830 हेक्टेयर में हुई तथा खुले मैदान के फूलों का उत्पादन 19,151 मीट्रिक टन रहा; कट-फ्लावर डंठलों की संख्या अलग इकाई में दर्ज की गई है। गेंदे का क्षेत्रफल 1,520 हेक्टेयर और ग्लेडियोलस का केवल 55 हेक्टेयर था, इसलिए ग्लेडियोलस को क्षेत्रफल के आधार पर सबसे बड़ा फूल कहना गलत है। खेती के क्षेत्र और अनुदान योजनाएँ वर्ष के अनुसार बदलती हैं।",
    "contentEnglish": "Marigold, rose, gladiolus and other flowers are cultivated in Haryana. Economic Survey 2025–26, Table 3.16, records 1,830 hectares of flower cultivation and 19,151 metric tonnes of open-field flower production in 2024–25, in addition to separately measured cut-flower stems. Marigold occupied 1,520 hectares, versus 55 hectares for gladiolus, so gladiolus was not the largest flower crop by area. Cultivation areas and scheme subsidies vary by year."
};

    // Section 10o: Flowers and Area of Production Table
    const flowersAreaTable = [
        { flower: "Rose", area: "Panipat, Sonipat, Gurugram, Kaithal" },
        { flower: "Marigold", area: "Gurugram, Sonipat, Jind, Jhajjar" },
        { flower: "Rajnigantha", area: "Faridabad" },
        { flower: "Gladiolus", area: "Faridabad, Gurugram, Karnal, Panchkula" }
    ];

    // Section 10p: Centre of Excellence in Horticulture
    const centresOfExcellence = [
        { institution: "Centre of Excellence for Fruit", location: "Mangiana (Sirsa)" },
        { institution: "CoE Biotechnology", location: "Shamgarh (Karnal)" },
        { institution: "CoE for Honey", location: "Ramnagar (Kurukshetra)" },
        { institution: "CoE for sub-tropical fruits", location: "Ladwa (Kurukshetra)" },
        { institution: "Guava Technology Exhibition Centre", location: "Bhuna (Fatehabad)" },
        { institution: "CoE for Flower", location: "Jhajjar" }
    ];

    // Section 11: Institutions For Agricultural Development (Complete)
    const agriculturalInstitutions = [
    {
        "name": "Haryana State Agricultural Marketing Board (HSAMB)",
        "established": "Established under the Haryana agricultural markets framework",
        "details": "Develops and supports agricultural market infrastructure; current market counts vary and should be dated."
    },
    {
        "name": "Haryana State Cooperative Supply and Marketing Federation (HAFED)",
        "established": "A state cooperative federation",
        "details": "Supports procurement, storage, processing and marketing of agricultural produce."
    },
    {
        "name": "Haryana Seeds Development Corporation (HSDC)",
        "established": "1974",
        "details": "Produces and supplies seed and agricultural inputs through state channels; outlet counts change over time."
    },
    {
        "name": "Haryana Land Reclamation and Development Corporation (HLRDC)",
        "established": "1974",
        "details": "Supports land reclamation and agricultural inputs including gypsum; official Economic Survey 2025–26 reports land-reclamation work."
    },
    {
        "name": "ICAR-Indian Institute of Wheat and Barley Research (IIWBR)",
        "established": "Karnal",
        "details": "ICAR research institute specialising in wheat and barley."
    },
    {
        "name": "CCS Haryana Agricultural University",
        "established": "Hisar",
        "details": "State agricultural university conducting research, education and agricultural extension."
    }
];

    // Section 12: Government Schemes for Agriculture (Complete)
    const govtSchemes = [
    {
        "name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        "launched": "2016",
        "details": "Crop insurance: the farmer premium is capped at 2% for notified kharif food/oilseed crops, 1.5% for notified rabi food/oilseed crops and 5% for annual commercial/horticultural crops, or the actuarial rate if lower; eligibility and notification apply."
    },
    {
        "name": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
        "launched": "2019",
        "details": "Eligible landholding farmer families receive ₹6,000 per year in three instalments, subject to scheme conditions and exclusions."
    },
    {
        "name": "Pradhan Mantri Kisan Maandhan Yojana",
        "launched": "2019",
        "details": "Voluntary contributory pension scheme for eligible small and marginal farmers; pension of ₹3,000 per month on reaching age 60, subject to eligibility."
    },
    {
        "name": "Soil Health Card Scheme",
        "launched": "2015",
        "details": "Provides soil-nutrient information and fertiliser recommendations; numerical issuance targets differ by year."
    },
    {
        "name": "e-National Agriculture Market (e-NAM)",
        "launched": "2016",
        "details": "Electronic trading platform connecting participating regulated agricultural markets; current connected-mandi counts change."
    },
    {
        "name": "Bhavantar Bharpai Yojana (Haryana)",
        "launched": "30 December 2017",
        "details": "Initially launched as a price-deficiency compensation scheme for tomato, onion, potato and cauliflower; covered commodities and current terms can change."
    },
    {
        "name": "Crop Diversification / Mera Pani Meri Virasat",
        "launched": "State initiatives; terms vary",
        "details": "Encourage water-saving alternatives to water-intensive paddy where notified; verify the current season’s incentives before applying."
    },
    {
        "name": "Rashtriya Krishi Vikas Yojana",
        "launched": "2007–08",
        "details": "Supports state-identified agricultural-development projects through approved components and funding arrangements."
    }
];

    // Section 13: Agricultural Awards
    const agriculturalAwards = [
    {
        "name": "Agriculture and farmer-recognition awards",
        "details": "Haryana and agricultural institutions run crop performance, innovation and allied-sector recognition programmes. Award categories, eligibility and prize amounts are notification-specific and should not be presented as current without the scheme notification."
    }
];

    // Section 14: Haryana State Agriculture Plan Zones
    const agricultureZones = [
    {
        "zone": "Irrigated northern and eastern belt (illustrative)",
        "districts": "Ambala, Yamunanagar, Kurukshetra, Karnal, Kaithal, Panipat and adjoining areas",
        "specialty": "Paddy, wheat, sugarcane, vegetables"
    },
    {
        "zone": "Western cotton/wheat belt (illustrative)",
        "districts": "Sirsa, Fatehabad, Hisar, Jind and adjoining areas",
        "specialty": "Cotton, wheat, mustard, paddy where irrigated"
    },
    {
        "zone": "Southern and south-western semi-arid belt (illustrative)",
        "districts": "Mahendragarh, Rewari, Bhiwani, Charkhi Dadri, Gurugram, Nuh and adjoining areas",
        "specialty": "Bajra, mustard, wheat, pulses; animal husbandry"
    }
];

    // Section 15: Animal Husbandry Complete Data
    const animalHusbandry = {
    "titleHindi": "हरियाणा में पशुपालन",
    "titleEnglish": "Animal Husbandry in Haryana",
    "contentHindi": "पशुपालन हरियाणा की ग्रामीण अर्थव्यवस्था का महत्वपूर्ण हिस्सा है। 20वीं पशुधन गणना (2019) में राज्य में लगभग 71.26 लाख पशुधन दर्ज हुआ, जिनमें 19,28,682 गौवंश और 43,68,023 भैंसें थीं। हरियाणा आर्थिक सर्वेक्षण 2025-26 के अनुसार राज्य में लगभग 2,884 सरकारी पशु चिकित्सा संस्थान कार्यरत हैं। उसी सर्वेक्षण में दूध उत्पादन लगभग 125.93 लाख टन बताया गया है; इसे 2019-20 का आंकड़ा बताना सही नहीं होगा। पशुधन गणना, वार्षिक दुग्ध उत्पादन और पशु चिकित्सा संस्थानों के आंकड़ों की संदर्भ अवधि अलग-अलग होती है।",
    "contentEnglish": "Animal husbandry is an important part of Haryana’s rural economy. The 20th Livestock Census (2019) recorded approximately 71.26 lakh livestock, including 19,28,682 cattle and 43,68,023 buffaloes. The Haryana Economic Survey 2025–26 reports about 2,884 government veterinary institutions serving the state. The survey also reports approximately 125.93 lakh tonnes of milk, but this must be labelled as the survey’s reported level rather than assigned to 2019–20. Livestock census counts, annual milk-output estimates and veterinary infrastructure figures refer to different reporting periods."
};

    // Section 15a: Livestock Data - Complete
    const livestockData = [
    {
        "animal": "Buffalo",
        "details": "Murrah is a well-known dairy buffalo breed associated with Haryana. CIRB Hisar conducts buffalo-breed conservation and improvement. A daily yield of 35 litres is not a valid average for the breed."
    },
    {
        "animal": "Cow",
        "details": "Hariana is an indigenous cattle breed associated with the region. Sahiwal and Tharparkar breeds and crossbred cattle are also reared in Haryana."
    },
    {
        "animal": "Sheep",
        "details": "Sheep rearing is undertaken in different districts; the 20th Livestock Census recorded 2,88,370 sheep in Haryana."
    },
    {
        "animal": "Goat",
        "details": "The 20th Livestock Census recorded 3,34,640 goats in Haryana; unsupported national rank claims are omitted."
    },
    {
        "animal": "Horses",
        "details": "Horse breeding and equine health research are supported by the ICAR-National Research Centre on Equines in Hisar."
    },
    {
        "animal": "Camel",
        "details": "Camels are a relatively small livestock component compared with buffaloes, cattle, sheep and goats; district-first claims are not made without comparable data."
    },
    {
        "animal": "Pigs",
        "details": "Pig rearing is one of the livestock activities in Haryana; year-specific district totals must be checked before ranking districts."
    }
];

    // Section 15b: Major Districts with Livestock Table
    const livestockDistricts = [
    {
        "livestock": "Buffalo",
        "districts": "Found throughout Haryana; Murrah conservation research at CIRB, Hisar"
    },
    {
        "livestock": "Cattle",
        "districts": "Hariana and crossbred cattle raised across Haryana"
    },
    {
        "livestock": "Sheep",
        "districts": "Rural and semi-arid regions (district rankings need census table)"
    },
    {
        "livestock": "Goat",
        "districts": "Rural and semi-arid regions (district rankings need census table)"
    },
    {
        "livestock": "Horse",
        "districts": "ICAR equine research at Hisar"
    },
    {
        "livestock": "Camel",
        "districts": "Mostly drier tracts; no undated rank claimed"
    },
    {
        "livestock": "Pig",
        "districts": "Various districts; no undated rank claimed"
    }
];

    // Section 15c: Important Facts Related to Animal Husbandry
    const animalHusbandryFacts = [
    "20th Livestock Census 2019: 19,28,682 cattle and 43,68,023 buffaloes in Haryana.",
    "The ICAR-Central Institute for Research on Buffaloes at Hisar has operated since 1 February 1985.",
    "The ICAR-National Research Centre on Equines in Hisar conducts research on horses and other equines.",
    "Haryana Economic Survey 2025–26 refers to 2,884 government veterinary institutions.",
    "Owner incentives for high-yield Murrah buffaloes were ₹20,000–₹40,000 under the scheme described in Economic Survey 2025–26; eligibility must be checked."
];

    // Section 15d: State Government Initiatives for Animal Husbandry
    const animalSchemes = [
    {
        "name": "Murrah Breed Conservation Incentive",
        "details": "Haryana Economic Survey 2025–26 describes awards of ₹20,000–₹40,000 for eligible owners of recorded high-yield Murrah buffaloes; check current departmental conditions."
    },
    {
        "name": "Indigenous Cattle Breed Conservation",
        "details": "The Economic Survey 2025–26 describes incentives of ₹5,000–₹25,000 to eligible owners of high-yield Hariana, Sahiwal and Belahi cattle."
    },
    {
        "name": "Free Livestock Vaccination Programme",
        "details": "Haryana Animal Husbandry & Dairying Department carries out vaccinations against FMD, HS and other livestock diseases."
    },
    {
        "name": "Livestock Insurance Programmes",
        "details": "Insurance support exists for eligible livestock owners; premium, compensation amounts and enrollment terms depend on the scheme and year."
    },
    {
        "name": "Dairy Entrepreneurship and Self-Employment",
        "details": "State programmes support eligible dairy and small livestock units through subsidies or interest support, subject to departmental notifications."
    },
    {
        "name": "Backyard Poultry Support",
        "details": "Haryana Economic Survey 2025–26 describes free distribution of 50 low-input poultry chicks to eligible economically weaker households."
    }
];

    // Section 15e: Important Facts Related to Livestock
    const livestockImportantFacts = [
    "Murrah is a dairy buffalo breed strongly associated with Haryana.",
    "20th Livestock Census 2019 records 71.26 lakh livestock in Haryana.",
    "The state economic survey reports support for breed conservation and animal-health services.",
    "Milk incentive amounts and age/production thresholds should be read from a current scheme notification, not from undated study notes."
];

    // Section 15f: Livestock Development Award
    const livestockAward = {
    "title": "Murrah Breed Conservation Incentive",
    "details": "Under the scheme described in Haryana Economic Survey 2025–26, eligible owners of recorded high-yield Murrah buffaloes may receive ₹20,000–₹40,000, subject to departmental conditions."
};

    // Section 16: Livestock and Dairy Development Institutes
    const dairyInstitutes = [
    {
        "name": "ICAR-National Dairy Research Institute (NDRI)",
        "location": "Karnal",
        "established": "Originally established at Bengaluru in 1923; headquarters shifted to Karnal in 1955."
    },
    {
        "name": "ICAR-Central Institute for Research on Buffaloes (CIRB)",
        "location": "Hisar",
        "established": "Started functioning 1 February 1985."
    },
    {
        "name": "ICAR-National Research Centre on Equines (NRCE)",
        "location": "Hisar",
        "established": "Operational at Hisar since the mid-1980s; official institutional history records initial establishment in 1985 and operation in 1986."
    },
    {
        "name": "Lala Lajpat Rai University of Veterinary and Animal Sciences (LUVAS)",
        "location": "Hisar",
        "established": "University commenced on 1 December 2010 under Haryana Act No. 7 of 2010."
    },
    {
        "name": "Haryana Dairy Development Cooperative Federation",
        "location": "Haryana",
        "established": "A state-level cooperative dairy federation; verify founding year with federation records."
    }
];

    // Section 17: Poultry Farming in Haryana
    const poultryFarming = {
    "titleHindi": "हरियाणा में मुर्गी पालन",
    "titleEnglish": "Poultry Farming in Haryana",
    "contentHindi": "हरियाणा में मुर्गी पालन ग्रामीण आय का पूरक स्रोत है और इससे अंडे तथा मांस प्राप्त होते हैं। राज्य पात्र परिवारों को बैकयार्ड मुर्गी पालन हेतु सहायता देता है। हरियाणा आर्थिक सर्वेक्षण 2025-26 में आर्थिक रूप से कमजोर पात्र परिवारों को कम लागत वाली नस्ल के 50 चूजे देने की योजना का उल्लेख है। मुर्गी फार्मों की जिलेवार संख्या तथा प्रति वर्ष 12% वृद्धि जैसी बातों को बिना संदर्भ-वर्ष के वर्तमान तथ्य नहीं माना गया है।",
    "contentEnglish": "Poultry provides supplementary rural income and an important supply of eggs and meat in Haryana. The state supports backyard poultry for eligible households. Haryana Economic Survey 2025–26 describes a programme distributing 50 chicks of a low-input poultry breed to eligible economically weaker families. District-level farm counts and claims of a fixed 12% annual growth rate require a dated poultry statistics source and are not stated as current."
};

    // Section 17a: Backyard Poultry Scheme
    const backyardPoultry = {
    "title": "Backyard Poultry Support",
    "launched": "Current terms: Haryana Economic Survey 2025–26",
    "details": "The state survey mentions provision of 50 chicks of a low-input poultry breed to eligible economically weaker families. Earlier notes describing 80 chicks and equipment may refer to a different or older scheme version."
};

    // Section 18: Fisheries in Haryana - Complete
    const fisheries = {
    "titleHindi": "हरियाणा में मत्स्य पालन",
    "titleEnglish": "Fisheries in Haryana",
    "contentHindi": "हरियाणा में तालाबों, जलाशयों तथा जलभराव वाले क्षेत्रों में अंतर्देशीय मत्स्य पालन को प्रोत्साहित किया जाता है। लवणीय भूमि में झींगा पालन की संभावनाओं पर भी कार्य हो रहा है। हरियाणा आर्थिक सर्वेक्षण 2025-26 के अनुसार 2024-25 में 23,317.50 हेक्टेयर क्षेत्र मत्स्य पालन में लाया गया तथा 2,32,339.70 मीट्रिक टन मछली उत्पादित हुई। लवणीय क्षेत्रों में सफेद झींगा पालन को बढ़ावा दिया जा रहा है। प्रति हेक्टेयर मछली उत्पादकता में राष्ट्रीय दूसरा स्थान बताने के लिए एक ही वर्ष के तुलनीय राष्ट्रीय आंकड़े आवश्यक हैं।",
    "contentEnglish": "Haryana promotes inland fish culture in ponds, tanks and waterlogged areas, including opportunities for shrimp cultivation in saline-affected land. According to Haryana Economic Survey 2025–26, 23,317.50 hectares were brought under fish culture in 2024–25, yielding 2,32,339.70 metric tonnes of fish. White shrimp cultivation in saline-affected areas is also being promoted. The claim that Haryana is second nationally in fish yield per hectare should not be stated without a comparable national source and a reference year."
};

    // Section 18a: Fisheries Additional Info
    const fisheriesAdditional = [
    "According to Haryana Economic Survey 2025–26, 2024–25 fish culture covered 23,317.50 hectares.",
    "The same survey records 2,32,339.70 metric tonnes of fish production in 2024–25.",
    "In 2024–25, 2,360.24 hectares of saline-affected land were designated for white shrimp culture.",
    "Programmes for developing inland aquaculture and waterlogged land are implemented under relevant government schemes; individual project claims require up-to-date departmental evidence."
];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 dark:from-green-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium backdrop-blur-sm">
                        <Sprout className="w-4 h-4" />
                        {language === "hindi" ? "कृषि और पशुपालन: सरकारी आंकड़ों पर आधारित" : "Agriculture and Animal Husbandry: Official Statistics-Based Guide"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा में" : "Agriculture and"} <span className="text-green-600 dark:text-green-400">{language === "hindi" ? "कृषि और पशुपालन" : "Animal Husbandry"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा की कृषि, पशुपालन, बागवानी और मत्स्य पालन: वर्ष सहित आधिकारिक आंकड़े और परीक्षा के लिए महत्वपूर्ण तथ्य"
                            : "Haryana agriculture, livestock, horticulture and fisheries: sourced, year-labelled data and exam-relevant explanations"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Wheat className="w-4 h-4 text-green-600" />
                            <span>{language === "hindi" ? "मुख्य फसलें" : "Major Crops"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Apple className="w-4 h-4 text-green-600" />
                            <span>{language === "hindi" ? "बागवानी" : "Horticulture"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Milk className="w-4 h-4 text-green-600" />
                            <span>{language === "hindi" ? "पशुपालन" : "Animal Husbandry"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Fish className="w-4 h-4 text-green-600" />
                            <span>{language === "hindi" ? "मत्स्य पालन" : "Fisheries"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Building2 className="w-4 h-4 text-green-600" />
                            <span>{language === "hindi" ? "संस्थान" : "Institutes"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections - Complete */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Section 1: Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/20">
                                <Sprout className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? overview.titleHindi : overview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? overview.contentHindi : overview.contentEnglish}</p>
                    </div>

                    {/* Section 2: Agricultural Land Use */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/20">
                                <Tractor className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? landUse.titleHindi : landUse.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? landUse.contentHindi : landUse.contentEnglish}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-green-600">80.1%</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "शुद्ध बोया क्षेत्र / कुल क्षेत्रफल (2024-25)" : "Net sown share of geographical area (2024–25)"}</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-green-600">188.8%</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "फसल तीव्रता (2024-25, अनंतिम)" : "Cropping intensity (2024–25, provisional)"}</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-green-600">3541</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "शुद्ध बोया क्षेत्र (हजार हे., 2024-25)" : "Net Sown Area (000 ha, 2024–25)"}</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-green-600">66.87</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "सकल बोया क्षेत्र (लाख हे., 2024-25)" : "Gross Sown Area (lakh ha, 2024–25)"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Agro-Climatic Zones */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-6 md:p-8 border border-blue-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                <Map className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{language === "hindi" ? agroClimaticZones.titleHindi : agroClimaticZones.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? agroClimaticZones.contentHindi : agroClimaticZones.contentEnglish}</div>
                    </div>

                    {/* Section 4: Crop Seasons */}
                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6 md:p-8 border border-amber-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                                <Calendar className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400">{language === "hindi" ? cropSeasons.titleHindi : cropSeasons.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? cropSeasons.contentHindi : cropSeasons.contentEnglish}</div>
                    </div>

                    {/* Section 5: Major Crops - Complete */}
                    <div className="bg-green-500/5 rounded-2xl p-6 md:p-8 border-2 border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/30">
                                <Wheat className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{language === "hindi" ? "हरियाणा की प्रमुख फसलें" : "Major Crops of Haryana"}</h2>
                        </div>
                        <div className="space-y-6">
                            {majorCrops.map((crop, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-5 border">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">{language === "hindi" ? crop.nameHindi : crop.name}</h3>
                                    <div className="mb-3 p-3 bg-muted/30 rounded-lg">
                                        <p className="text-sm font-medium text-muted-foreground">{language === "hindi" ? "भौगोलिक परिस्थितियाँ:" : "Geographical Conditions:"}</p>
                                        <p className="text-sm text-muted-foreground">{language === "hindi" ? crop.conditionsHindi : crop.conditions}</p>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? crop.detailsHindi : crop.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 6: Cash Crops */}
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-2xl p-6 md:p-8 border border-yellow-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-yellow-100 dark:bg-yellow-900/30">
                                <Banknote className="w-5 h-5 text-yellow-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">{language === "hindi" ? "नकदी फसलें" : "Cash Crops"}</h2>
                        </div>
                        <div className="space-y-6">
                            {cashCrops.map((crop, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-5 border">
                                    <h3 className="text-xl font-semibold mb-2 text-yellow-600">{language === "hindi" ? crop.nameHindi : crop.name}</h3>
                                    <div className="mb-3 p-3 bg-muted/30 rounded-lg">
                                        <p className="text-sm font-medium text-muted-foreground">{language === "hindi" ? "भौगोलिक परिस्थितियाँ:" : "Geographical Conditions:"}</p>
                                        <p className="text-sm text-muted-foreground">{language === "hindi" ? crop.conditionsHindi : crop.conditions}</p>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? crop.detailsHindi : crop.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 7: Crop Producing Districts Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Map className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "जिलों में प्रमुख फसलें (उदाहरण)" : "Representative Crops by District (Illustrative)"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "उदाहरणात्मक क्षेत्र" : "Illustrative Regions"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "प्रमुख फसलें" : "Major Crops"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cropProducingDistricts.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{item.district}</td>
                                            <td className="border p-2">{item.crops}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 8: Largest Crop Producing Districts */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Award className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "प्रमुख फसल पट्टियाँ (रैंकिंग नहीं)" : "Major Crop Belts (Not Rankings)"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "फसल" : "Crop"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "क्षेत्र" : "Regions"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {largestProducingDistricts.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{item.crop}</td>
                                            <td className="border p-2">{item.district}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 9: Targeted Area, Production and Average Yield Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Tractor className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "लक्षित क्षेत्र, उत्पादन और औसत उपज (2025-26)" : "2025–26 TARGETS: Area, Production and Yield"}</h2>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">Source: Haryana Economic Survey 2025–26, Table 3.5 (targets, NOT actual production). Cotton excluded because its production is measured in bales, not tonnes.</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "फसल" : "Crop"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "क्षेत्रफल (000 हे.)" : "Area (000 ha)"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "उत्पादन (000 टन)" : "Production (000 Tonne)"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "औसत उपज (किग्रा/हे.)" : "Avg Yield (Kg/ha)"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cropProductionData.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{item.crop}</td>
                                            <td className="border p-2 text-right">{item.area}</td>
                                            <td className="border p-2 text-right">{item.production}</td>
                                            <td className="border p-2 text-right">{item.yield}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 10: Horticulture - Complete */}
                    <div className="bg-orange-50 dark:bg-orange-950/20 rounded-2xl p-6 md:p-8 border border-orange-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-900/30">
                                <Apple className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-400">{language === "hindi" ? horticulture.titleHindi : horticulture.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">{language === "hindi" ? horticulture.contentHindi : horticulture.contentEnglish}</p>

                        {/* Fruits */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-orange-600 mb-3">{language === "hindi" ? fruitsData.titleHindi : fruitsData.titleEnglish}</h3>
                            <p className="text-muted-foreground mb-3">{language === "hindi" ? fruitsData.contentHindi : fruitsData.contentEnglish}</p>

                            {/* Mango */}
                            <div className="bg-card rounded-xl p-4 mb-3 border">
                                <h4 className="font-semibold text-orange-600">{language === "hindi" ? mangoData.titleHindi : mangoData.titleEnglish}</h4>
                                <p className="text-sm text-muted-foreground">{language === "hindi" ? mangoData.contentHindi : mangoData.contentEnglish}</p>
                            </div>

                            {/* Kinnow */}
                            <div className="bg-card rounded-xl p-4 mb-3 border">
                                <h4 className="font-semibold text-orange-600">{language === "hindi" ? kinnowData.titleHindi : kinnowData.titleEnglish}</h4>
                                <p className="text-sm text-muted-foreground">{language === "hindi" ? kinnowData.contentHindi : kinnowData.contentEnglish}</p>
                            </div>

                            {/* Fruits Area Table */}
                            <div className="overflow-x-auto mt-3">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-orange-100 dark:bg-orange-900/30">
                                            <th className="border p-2 text-left">{language === "hindi" ? "फल" : "Fruit"}</th>
                                            <th className="border p-2 text-left">{language === "hindi" ? "प्रमुख/उदाहरणात्मक क्षेत्र" : "Indicative Growing Areas"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {fruitsAreaTable.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-muted/30">
                                                <td className="border p-2">{item.fruit}</td>
                                                <td className="border p-2">{item.area}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Vegetables */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-orange-600 mb-3">{language === "hindi" ? vegetablesData.titleHindi : vegetablesData.titleEnglish}</h3>
                            <p className="text-muted-foreground mb-3">{language === "hindi" ? vegetablesData.contentHindi : vegetablesData.contentEnglish}</p>

                            {/* Vegetables Area Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-orange-100 dark:bg-orange-900/30">
                                            <th className="border p-2 text-left">{language === "hindi" ? "सब्जी" : "Vegetable"}</th>
                                            <th className="border p-2 text-left">{language === "hindi" ? "प्रमुख/उदाहरणात्मक क्षेत्र" : "Indicative Growing Areas"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vegetablesAreaTable.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-muted/30">
                                                <td className="border p-2">{item.vegetable}</td>
                                                <td className="border p-2">{item.area}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mushroom */}
                            <div className="bg-card rounded-xl p-4 mt-3 border">
                                <h4 className="font-semibold text-orange-600">{language === "hindi" ? mushroomData.titleHindi : mushroomData.titleEnglish}</h4>
                                <p className="text-sm text-muted-foreground">{language === "hindi" ? mushroomData.contentHindi : mushroomData.contentEnglish}</p>
                            </div>
                        </div>

                        {/* Top Producers Table */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-orange-600 mb-3">{language === "hindi" ? "चुनिंदा बागवानी फसलें: राज्य कुल (2024-25)" : "Selected Horticulture Crops: Haryana Totals (2024–25)"}</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-orange-100 dark:bg-orange-900/30">
                                            <th className="border p-2 text-left">{language === "hindi" ? "फल/सब्जी" : "Fruit/Vegetable"}</th>
                                            <th className="border p-2 text-left">{language === "hindi" ? "2024-25 राज्य कुल" : "2024–25 State Total"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {topProducersTable.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-muted/30">
                                                <td className="border p-2">{item.item}</td>
                                                <td className="border p-2">{item.producer}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Spices */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-orange-600 mb-3">{language === "hindi" ? spicesData.titleHindi : spicesData.titleEnglish}</h3>
                            <p className="text-muted-foreground mb-3">{language === "hindi" ? spicesData.contentHindi : spicesData.contentEnglish}</p>

                            {/* Spices Area Production Table */}
                            <div className="overflow-x-auto mb-3">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-orange-100 dark:bg-orange-900/30">
                                            <th className="border p-2 text-left">{language === "hindi" ? "मसाला" : "Spice"}</th>
                                            <th className="border p-2 text-left">{language === "hindi" ? "क्षेत्रफल (हे.)" : "Area (Ha)"}</th>
                                            <th className="border p-2 text-left">{language === "hindi" ? "उत्पादन (मीट्रिक टन)" : "Production (MT)"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {spicesAreaProduction.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-muted/30">
                                                <td className="border p-2">{item.name}</td>
                                                <td className="border p-2 text-right">{item.area}</td>
                                                <td className="border p-2 text-right">{item.production}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Spices Area Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-orange-100 dark:bg-orange-900/30">
                                            <th className="border p-2 text-left">{language === "hindi" ? "मसाला" : "Spice"}</th>
                                            <th className="border p-2 text-left">{language === "hindi" ? "उत्पादन क्षेत्र" : "Production Area"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {spicesAreaTable.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-muted/30">
                                                <td className="border p-2">{item.spice}</td>
                                                <td className="border p-2">{item.area}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Medicinal Plants */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-orange-600 mb-3">{language === "hindi" ? medicinalPlants.titleHindi : medicinalPlants.titleEnglish}</h3>
                            <p className="text-muted-foreground mb-3">{language === "hindi" ? medicinalPlants.contentHindi : medicinalPlants.contentEnglish}</p>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-orange-100 dark:bg-orange-900/30">
                                            <th className="border p-2 text-left">{language === "hindi" ? "पौधा" : "Plant"}</th>
                                            <th className="border p-2 text-left">{language === "hindi" ? "क्षेत्रफल (हे.)" : "Area (Ha)"}</th>
                                            <th className="border p-2 text-left">{language === "hindi" ? "उत्पादन (MT)" : "Production (MT)"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {medicinalAreaProduction.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-muted/30">
                                                <td className="border p-2">{item.name}</td>
                                                <td className="border p-2 text-right">{item.area}</td>
                                                <td className="border p-2 text-right">{item.production}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Floriculture */}
                        <div>
                            <h3 className="text-xl font-semibold text-orange-600 mb-3">{language === "hindi" ? floriculture.titleHindi : floriculture.titleEnglish}</h3>
                            <p className="text-muted-foreground mb-3">{language === "hindi" ? floriculture.contentHindi : floriculture.contentEnglish}</p>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-orange-100 dark:bg-orange-900/30">
                                            <th className="border p-2 text-left">{language === "hindi" ? "फूल" : "Flower"}</th>
                                            <th className="border p-2 text-left">{language === "hindi" ? "प्रमुख/उदाहरणात्मक क्षेत्र" : "Indicative Growing Areas"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {flowersAreaTable.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-muted/30">
                                                <td className="border p-2">{item.flower}</td>
                                                <td className="border p-2">{item.area}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Section 11: Centres of Excellence */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <GraduationCap className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "बागवानी में उत्कृष्टता केंद्र (स्थान की पुष्टि करें)" : "Centres of Excellence in Horticulture (Verify Current Locations)"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "संस्थान" : "Institution"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "स्थान" : "Location"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {centresOfExcellence.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{item.institution}</td>
                                            <td className="border p-2">{item.location}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 12: Agricultural Institutions */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Building2 className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "कृषि विकास के लिए संस्थान" : "Institutions For Agricultural Development"}</h2>
                        </div>
                        <div className="space-y-4">
                            {agriculturalInstitutions.map((inst, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-4 border">
                                    <h3 className="font-semibold text-lg">{inst.name}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थापना:" : "Established:"}</strong> {inst.established}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{inst.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 13: Government Schemes */}
                    <div className="bg-teal-50 dark:bg-teal-950/20 rounded-2xl p-6 md:p-8 border border-teal-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-teal-100 dark:bg-teal-900/30">
                                <Heart className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-400">{language === "hindi" ? "हरियाणा सरकार की महत्वपूर्ण कृषि योजनाएं" : "Important Schemes for Agriculture Development of Haryana Government"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {govtSchemes.map((scheme, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-teal-600">{scheme.name}</h3>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? "शुरू:" : "Launched:"} {scheme.launched}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{scheme.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 14: Agricultural Awards */}
                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6 md:p-8 border border-amber-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                                <Award className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400">{language === "hindi" ? "कृषि पुरस्कार" : "Agricultural Awards"}</h2>
                        </div>
                        {agriculturalAwards.map((award, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 border mb-3">
                                <h3 className="font-semibold text-amber-600">{award.name}</h3>
                                <p className="text-sm text-muted-foreground">{award.details}</p>
                            </div>
                        ))}
                    </div>

                    {/* Section 15: Haryana State Agriculture Plan Zones */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Map className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "प्रमुख कृषि पट्टियाँ (उदाहरण, आधिकारिक ज़ोन नहीं)" : "Illustrative Crop Belts (Not Official Agro-Climatic Zones)"}</h2>
                        </div>
                        <div className="space-y-4">
                            {agricultureZones.map((zone, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-4 border">
                                    <h3 className="font-semibold text-lg">{zone.zone}</h3>
                                    <p className="text-sm"><strong>{language === "hindi" ? "जिले:" : "Districts:"}</strong> {zone.districts}</p>
                                    <p className="text-sm"><strong>{language === "hindi" ? "विशेषता:" : "Specialty:"}</strong> {zone.specialty}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 16: Animal Husbandry - Complete */}
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-2xl p-6 md:p-8 border border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                                <Milk className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400">{language === "hindi" ? animalHusbandry.titleHindi : animalHusbandry.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">{language === "hindi" ? animalHusbandry.contentHindi : animalHusbandry.contentEnglish}</p>

                        {/* Livestock Data */}
                        <div className="space-y-4 mb-6">
                            {livestockData.map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-purple-600">{item.animal}</h3>
                                    <p className="text-sm text-muted-foreground">{item.details}</p>
                                </div>
                            ))}
                        </div>

                        {/* Major Districts with Livestock Table */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-purple-600 mb-3">{language === "hindi" ? "पशुपालन के क्षेत्रीय उदाहरण (रैंकिंग नहीं)" : "Livestock Regions (Not Rankings)"}</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-purple-100 dark:bg-purple-900/30">
                                            <th className="border p-2 text-left">{language === "hindi" ? "पशु" : "Livestock"}</th>
                                            <th className="border p-2 text-left">{language === "hindi" ? "जिले" : "Districts"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {livestockDistricts.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-muted/30">
                                                <td className="border p-2">{item.livestock}</td>
                                                <td className="border p-2">{item.districts}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Important Facts */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-purple-600 mb-3">{language === "hindi" ? "हरियाणा में पशुपालन से संबंधित महत्वपूर्ण तथ्य" : "Important Facts Related to Animal Husbandry in Haryana"}</h3>
                            <ul className="list-disc list-inside space-y-1 bg-card rounded-xl p-4 border">
                                {animalHusbandryFacts.map((fact, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground">{fact}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Animal Schemes */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-purple-600 mb-3">{language === "hindi" ? "पशुपालन विकास के लिए राज्य सरकार की पहल" : "State Government Initiatives for Development of Animal Husbandry"}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {animalSchemes.map((scheme, idx) => (
                                    <div key={idx} className="bg-card rounded-xl p-4 border">
                                        <h4 className="font-semibold text-purple-600">{scheme.name}</h4>
                                        <p className="text-sm text-muted-foreground">{scheme.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Livestock Important Facts */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-purple-600 mb-3">{language === "hindi" ? "पशुधन से संबंधित महत्वपूर्ण तथ्य" : "Important Facts Related to Livestock"}</h3>
                            <ul className="list-disc list-inside space-y-1 bg-card rounded-xl p-4 border">
                                {livestockImportantFacts.map((fact, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground">{fact}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Livestock Award */}
                        <div className="bg-card rounded-xl p-4 border">
                            <h3 className="font-semibold text-purple-600">{livestockAward.title}</h3>
                            <p className="text-sm text-muted-foreground">{livestockAward.details}</p>
                        </div>
                    </div>

                    {/* Section 17: Livestock and Dairy Development Institutes */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <GraduationCap className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "पशुधन और डेयरी विकास संस्थान" : "Livestock and Dairy Development Institutes"}</h2>
                        </div>
                        <div className="space-y-4">
                            {dairyInstitutes.map((inst, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-4 border">
                                    <h3 className="font-semibold text-lg">{inst.name}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {inst.location}</p>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थापना:" : "Established:"}</strong> {inst.established}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 18: Poultry Farming */}
                    <div className="bg-pink-50 dark:bg-pink-950/20 rounded-2xl p-6 md:p-8 border border-pink-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-900/30">
                                <Bird className="w-5 h-5 text-pink-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-400">{language === "hindi" ? poultryFarming.titleHindi : poultryFarming.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">{language === "hindi" ? poultryFarming.contentHindi : poultryFarming.contentEnglish}</p>

                        <div className="bg-card rounded-xl p-4 border">
                            <h3 className="font-semibold text-pink-600">{backyardPoultry.title}</h3>
                            <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "शुरू:" : "Launched:"}</strong> {backyardPoultry.launched}</p>
                            <p className="text-sm text-muted-foreground">{backyardPoultry.details}</p>
                        </div>
                    </div>

                    {/* Section 19: Fisheries - Complete */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-2xl p-6 md:p-8 border border-cyan-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-900/30">
                                <Fish className="w-5 h-5 text-cyan-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">{language === "hindi" ? fisheries.titleHindi : fisheries.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">{language === "hindi" ? fisheries.contentHindi : fisheries.contentEnglish}</p>

                        <div className="bg-card rounded-xl p-4 border">
                            <h3 className="font-semibold text-cyan-600">{language === "hindi" ? "अतिरिक्त जानकारी" : "Additional Information"}</h3>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                {fisheriesAdditional.map((item, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा कृषि और पशुपालन: तथ्य सारांश" : "Haryana Agriculture and Animal Husbandry: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">80.1%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "शुद्ध बोया क्षेत्र / कुल क्षेत्रफल (2024-25)" : "Net sown share of geographical area (2024–25)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">188.8%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "फसल तीव्रता (2024-25, अनंतिम)" : "Cropping intensity (2024–25, provisional)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">135.80</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "गेहूं उत्पादन (लाख टन, 2024-25)" : "Wheat Production (Lakh T, 2024–25)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">71.37</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "चावल उत्पादन (लाख टन, 2024-25)" : "Rice Production (Lakh T, 2024–25)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">71.26</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "पशुधन (लाख, गणना 2019)" : "Livestock (Lakh, Census 2019)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">125.93</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "दूध उत्पादन (लाख टन, आर्थिक सर्वेक्षण 2025-26)" : "Milk Production (Lakh T, Economic Survey 2025–26)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">2.32</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "मछली उत्पादन (लाख टन, 2024-25)" : "Fish Production (lakh T, 2024–25)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">69.24</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "बागवानी उत्पादन (लाख टन, 2024-25)" : "Horticulture Output (lakh T, 2024–25)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">225.47</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "कुल खाद्यान्न (लाख टन, 2024-25)" : "Total Foodgrains (lakh T, 2024–25)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">2884</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "सरकारी पशु चिकित्सा संस्थान (सर्वेक्षण 2025-26)" : "Government Veterinary Institutions (Survey 2025–26)"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा की कृषि और पशुपालन के बारे में" : "Common"} <span className="text-green-600">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Haryana Agriculture and Animal Husbandry"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा की कृषि, फसलों, पशुपालन, बागवानी और मत्स्य पालन के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's agriculture, crops, animal husbandry, horticulture and fisheries"}
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
                                        className={`w-5 h-5 text-green-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
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
                            {language === "hindi" ? "अपने हरियाणा कृषि और पशुपालन के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Agriculture and Animal Husbandry?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-green-600 hover:bg-green-700">
                                {language === "hindi" ? "हरियाणा कृषि क्विज़ लें" : "Take Haryana Agriculture Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/national-parks" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "पीछे जाएँ: हरियाणा के राष्ट्रीय उद्यान" : "Back to National Parks of Haryana"}
                        </Link>
                        <Link href="/haryana-gk/irrigation" className="text-green-600 hover:text-green-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: हरियाणा की सिंचाई प्रणाली" : "Next Chapter: Irrigation System of Haryana"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा में कृषि और पशुपालन - संपूर्ण संदर्भ" : "Agriculture and Animal Husbandry in Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की कृषि, पशुपालन, बागवानी और मत्स्य पालन का परीक्षा-उपयोगी अध्ययन संदर्भ है। जहाँ उपलब्ध हैं, वर्ष-विशिष्ट सरकारी आंकड़े दिए गए हैं; जिलेवार फसल-सूचियाँ उदाहरणात्मक हैं, आधिकारिक उत्पादन रैंकिंग नहीं। योजनाओं के नियम और लाभ बदल सकते हैं।"
                            : "An exam-oriented guide to Haryana agriculture, livestock, horticulture and fisheries using year-labelled official statistics where available. District crop lists are illustrative, not ranked production data; programme benefits and scheme terms may change."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-3">
                        {language === "hindi" ? "आधिकारिक स्रोत: " : "Official sources: "}
                        <a href="https://esaharyana.gov.in/document/economic-survey-of-haryana-2025-26-2/" target="_blank" rel="noopener noreferrer" className="underline">Haryana Economic Survey 2025–26</a>
                        {" · "}
                        <a href="https://desagri.gov.in/wp-content/uploads/2026/06/LUS-2024-25.pdf" target="_blank" rel="noopener noreferrer" className="underline">Land Use Statistics 2024–25</a>
                        {" · "}
                        <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2205263" target="_blank" rel="noopener noreferrer" className="underline">20th Livestock Census</a>
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "प्रमुख स्रोत: हरियाणा आर्थिक सर्वेक्षण 2025-26, सरकारी भूमि उपयोग सांख्यिकी 2024-25 (अनंतिम), पशुधन गणना 2019" : "Key sources: Haryana Economic Survey 2025–26, Government Land Use Statistics 2024–25 (provisional), Livestock Census 2019"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}