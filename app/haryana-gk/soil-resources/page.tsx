"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    History,
    Sprout,
    Mountain,
    Wind,
    Droplets,
    Sun,
    ChevronDown,
    HelpCircle,
    Tractor,
    Leaf,
    AlertTriangle,
    Trees,
    ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SoilResourcesOfHaryanaPage() {
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
            questionHindi: "हरियाणा के मैदानी भागों की मिट्टी उपजाऊ क्यों है?",
            questionEnglish: "Why is the soil of plain areas of Haryana fertile?",
            answerHindi: "हरियाणा के मैदानी भागों की मिट्टी नदियों द्वारा लाई गई तलछट से बनी है, जिसे जलोढ़ मिट्टी कहते हैं। यह मिट्टी अधिक उपजाऊ होती है।",
            answerEnglish: "Most of the soil in the plains of Haryana is formed from sediments brought by rivers, which are called alluvium. This soil is more fertile."
        },
        {
            questionHindi: "हरियाणा के दक्षिण-पश्चिमी भाग में किस प्रकार की मिट्टी पाई जाती है?",
            questionEnglish: "What type of soil is found in the South-Western part of Haryana?",
            answerHindi: "हरियाणा के दक्षिण-पश्चिमी भाग में बलुई और रेतीली मिट्टी पाई जाती है, जो राजस्थान से बहने वाली हवाओं द्वारा यहाँ लाई गई है। यह मिट्टी बहुत उपजाऊ नहीं होती है।",
            answerEnglish: "Sand and sandy soils are present in the South-Western part of Haryana which are brought here by winds blowing from Rajasthan. This soil is not very fertile."
        },
        {
            questionHindi: "हरियाणा में कादर मिट्टी किसे कहते हैं?",
            questionEnglish: "What is Khadar soil in Haryana?",
            answerHindi: "कादर मिट्टी नई जलोढ़ मिट्टी होती है। यह मिट्टी बाढ़ के पानी द्वारा लाई गई तलछट के जमाव के कारण प्रतिवर्ष नवीनीकृत होती है। कादर क्षेत्र सबसे उपजाऊ क्षेत्र होता है।",
            answerEnglish: "Khadar soil is new alluvium. The Khadar soil is renewed each year due to the deposition of alluvial sediments brought by the recurring floods. Therefore, the area of Khadar soil is the most fertile area."
        },
        {
            questionHindi: "हरियाणा में मिट्टी के कटाव के मुख्य कारण क्या हैं?",
            questionEnglish: "What are the main causes of soil erosion in Haryana?",
            answerHindi: "हरियाणा में मिट्टी का कटाव मुख्य रूप से पानी और हवा के माध्यम से होता है। पानी से कटाव शिवालिक के पीडमोंट भाग में होता है, जबकि हवा से कटाव राजस्थान के पास स्थित दक्षिणी और दक्षिण-पश्चिमी जिलों में होता है।",
            answerEnglish: "Soil erosion in Haryana is mainly occurred through water and wind. Soil erosion by water occurs mainly in the piedmont part of Shivalik, while soil erosion by wind occurs mainly in the Southern and South-Western districts located near Rajasthan."
        },
        {
            questionHindi: "हरियाणा में लवणता और क्षारीयता की समस्या को स्थानीय भाषा में क्या कहते हैं?",
            questionEnglish: "What is the soil salinity and alkalinity problem called in local language in Haryana?",
            answerHindi: "हरियाणा में लवणता और क्षारीयता की समस्या को स्थानीय भाषा में 'कल्लर' और 'रेह' कहा जाता है। यह मिट्टी मुख्य रूप से लवणों और क्षारों से प्रभावित होती है।",
            answerEnglish: "The soil salinity and alkalinity problem in Haryana is called 'Kallar' and 'Reh' in the local language. This soil is mainly affected by salts and bases."
        },
        {
            questionHindi: "हरियाणा में सबसे अधिक उपजाऊ मिट्टी कहाँ पाई जाती है?",
            questionEnglish: "Where is the most fertile soil found in Haryana?",
            answerHindi: "हरियाणा में सबसे अधिक उपजाऊ मिट्टी यमुना-घग्गर के मैदान में पाई जाती है। यहाँ गेहूँ, चावल, कपास, गन्ना आदि का अधिक उत्पादन होता है। यह मिट्टी जींद, कैथल, सोनीपत, पानीपत, गुरुग्राम, कुरुक्षेत्र आदि जिलों में पाई जाती है।",
            answerEnglish: "The most fertile soil in Haryana is found in the Yamuna-Ghaggar plain. Wheat, rice, cotton, sugarcane, etc. are produced more in this soil. This soil is found in Jind, Kaithal, Sonipat, Panipat, Gurugram, Kurukshetra, etc. districts."
        },
        {
            questionHindi: "हरियाणा के किस जिले में लोहम मिट्टी पाई जाती है?",
            questionEnglish: "In which district of Haryana is loam soil found?",
            answerHindi: "लोम मिट्टी हरियाणा के मध्य भागों में पाई जाती है, मुख्य रूप से जींद, कैथल, सोनीपत, पानीपत, गुरुग्राम और कुरुक्षेत्र जिलों में।",
            answerEnglish: "Loam soil is found in the central parts of Haryana, mainly in Jind, Kaithal, Sonipat, Panipat, Gurugram and Kurukshetra districts."
        },
        {
            questionHindi: "हरियाणा में शिवालिक मिट्टी कहाँ पाई जाती है?",
            questionEnglish: "Where is Shivalik soil found in Haryana?",
            answerHindi: "शिवालिक मिट्टी पंचकुला के कालका और अंबाला की नारायणगढ़ तहसील में पाई जाती है। इस मिट्टी में बलुआ पत्थर, रेत, मिट्टी, बजरी और अन्य तत्व होते हैं।",
            answerEnglish: "Shivalik soil is found in the Kalka of Panchkula and Narayangarh tehsil of Ambala. This soil contains sandstone, sand, clay, gravel and other elements."
        }
    ];

    // Main Soil Resources Section
    const soilOverview = {
        titleHindi: "हरियाणा के मृदा संसाधन",
        titleEnglish: "Soil Resources in Haryana",
        contentHindi: "हरियाणा एक कृषि प्रधान राज्य है, इसलिए राज्य में वनस्पति और कृषि की प्रकृति का निर्धारण करने में मृदा संसाधनों का महत्वपूर्ण योगदान है। राज्य में पाई जाने वाली मिट्टियाँ कृषि भूमि उपयोग, फसलों के क्षेत्रीय वितरण, उत्पादन की मात्रा, वनस्पति की भिन्नता आदि का निर्धारण करती हैं। राज्य में, पहाड़ी क्षेत्र का विस्तार कम है और मैदानी क्षेत्र का विस्तार अधिक है, जो मिट्टी के वितरण को प्रभावित करता है। इसलिए, राज्य में मिट्टी का असमान वितरण पाया जाता है।\n\nहरियाणा अधिकतर मैदानी क्षेत्र है। हरियाणा के मैदानों में अधिकांश मिट्टी नदियों द्वारा लाई गई तलछट से बनी है, जिन्हें जलोढ़ कहा जाता है। यह मिट्टी अधिक उपजाऊ है। हरियाणा के दक्षिण-पश्चिमी भाग में रेत और बलुई मिट्टी मौजूद है जो राजस्थान से बहने वाली हवाओं द्वारा यहाँ लाई गई है। यह मिट्टी बहुत उपजाऊ नहीं है।",
        contentEnglish: "Haryana is an agricultural state, so the soil resources have an important contribution in determining the nature of vegetation and agriculture in the state. The soils found in the state determine agricultural land use, regional distribution of crops, quantity of production, variation of vegetation, etc. In the state, the expansion of hilly area is less and the expansion of plain area is more, which affects the distribution of soil. Hence, uneven distribution of soil is found in the state.\n\nHaryana is mostly a plain area. Most of the soil in the plains of Haryana is formed from sediments brought by rivers, which are called alluvium. This soil is more fertile. Sand and sandy soils are present in the South-Western part of Haryana which are brought here by winds blowing from Rajasthan. This soil is not very fertile."
    };

    // Classification on Basis of Topography
    const topographyClassification = {
        titleHindi: "स्थलाकृति के आधार पर मिट्टी का वर्गीकरण",
        titleEnglish: "Classification of Soil on the Basis of Topography",
        contentHindi: "स्थलाकृति के आधार पर हरियाणा की मिट्टी को तीन श्रेणियों में विभाजित किया गया है:\n\n1. पर्वतीय क्षेत्र की मिट्टी - पर्वतीय क्षेत्र की मिट्टी कठोर, पतली और चट्टानी होती है। इस प्रकार की मिट्टी हरियाणा की मोरनी पहाड़ियों पर देखी जा सकती है।\n\n2. मैदानी क्षेत्र की मिट्टी - मैदानी क्षेत्र की अधिकांश मिट्टी कादर क्षेत्र के अंतर्गत आती है, जिसके कारण मिट्टी अधिक उपजाऊ होती है। मैदानी मिट्टी की प्रमुख विशेषता इसका हल्का भूरा रंग है। राज्य के मैदानों की मिट्टी यमुना और सरस्वती नदियों के माध्यम से फैली हुई है। राज्य के मैदान रेत, मिट्टी, गाद और कठोर चूनेदार बजरी से बने हैं। इसलिए, इस क्षेत्र की मिट्टी को स्थानीय रूप से कंकर के नाम से जाना जाता है।\n\n3. बलुई मिट्टी - बलुई मिट्टी अधिकतर हरियाणा के दक्षिण-पश्चिमी भाग में फैली हुई है। हल्का भूरा रंग बलुई मिट्टी की मुख्य विशेषता है। राज्य में बलुई मिट्टी का फैलाव पड़ोसी राज्य राजस्थान से बहने वाली तेज़ हवाओं के कारण है।",
        contentEnglish: "Soil of Haryana is divided into three categories on the basis of topography:\n\n1. Soil of Mountainous Area - The soil of mountainous area is hard, thin and rocky. This type of soil can be seen on the Morni Hills in Haryana.\n\n2. Soil of the Plain Area - Most of the soil in the plain area comes under Khadar area, due to which the soil is more fertile. The predominant feature of the soil of the plain is its pale brown colour. The soil of the plains in the state is spread through the rivers Yamuna and Saraswati. The plains in the state are made up of sand, mud, silt and hard calcarea gravels. Hence, the soil of this region is locally known as Kankers.\n\n3. Sandy Soil - The sandy soil is mostly spread in the South-Western part of Haryana. The light brown colour is a main feature of sandy soil. The spread of sandy soil in the state is due to the strong winds blowing from the neighbouring state of Rajasthan."
    };

    // Classification on Basis of Physical and Chemical Properties - Dr. Jasbir Singh
    const physicalChemicalClassification = {
        titleHindi: "भौतिक एवं रासायनिक गुणों के आधार पर मिट्टी का वर्गीकरण",
        titleEnglish: "Classification of Soil on the Basis of Physical and Chemical Properties",
        contentHindi: "हरियाणा में फसलों का क्षेत्रीय वितरण मिट्टी में भिन्नता के कारण होता है। राज्य में मिट्टी के संगठन और उर्वरक के गुणों के आधार पर, कृषि वैज्ञानिक डॉ. जसबीर सिंह ने मुख्य रूप से हरियाणा की मिट्टी को 6 श्रेणियों में विभाजित किया है:\n\n1. हल्की मिट्टी (बलुई-दोमट मिट्टी)\n2. अत्यधिक हल्की मिट्टी\n3. मध्यम मिट्टी (मोटी दोमट, हल्की दोमट और दोमट)\n4. भारी और अत्यधिक भारी मिट्टी\n5. शिवालिक, पीडमोंट और तलहटी की मिट्टी\n6. सामान्य रूप से भारी मिट्टी (कादर और बांगर)",
        contentEnglish: "The regional distribution of crops in Haryana is due to variations in soil. On the basis of organisation of soils and qualities of fertiliser in the state, agricultural scientist Dr. Jasbir Singh mainly divided the soils of Haryana into 6 categories:\n\n1. Light soil (sandy-loam soil)\n2. Extremely light soil\n3. Medium soil (thick loam, light loam and loam)\n4. Heavy and very heavy soils\n5. Shivalik, piedmont and foothills soils\n6. Generally heavy soil (Khadar and Bangar)"
    };

    // Light Soils
    const lightSoils = {
        titleHindi: "1. हल्की मिट्टी (Light Soils)",
        titleEnglish: "1. Light Soils",
        contentHindi: "इस मिट्टी में मुख्य रूप से बलुई दोमट और दोमट मिट्टी शामिल है। डॉ. जसबीर सिंह के अनुसार, इस मिट्टी में गाद, रेत और मिट्टी की उपस्थिति होती है और इसे निम्नलिखित दो श्रेणियों में विभाजित किया जा सकता है:\n\n(i) बलुई-दोमट मिट्टी - यह मिट्टी नरम होती है और इसमें पानी धारण करने की क्षमता कम होती है, इसलिए इस मिट्टी में अधिक उत्पादकता प्राप्त करने के लिए पर्याप्त सिंचाई प्रणाली की आवश्यकता होती है। यह मिट्टी सिरसा तहसील और डबवाली तहसील के कुछ गाँवों में पाई जाती है। इस मिट्टी में गाद, मिट्टी और रेत का अनुपात लगभग बराबर होता है।\n\n(ii) अपेक्षाकृत बलुई-दोमट मिट्टी - यह दोमट मिट्टी और बलुई-दोमट मिट्टी का मिश्रण है। इस मिट्टी की पट्टी दक्षिण-पश्चिमी हरियाणा में बलुई-दोमट मिट्टी और दोमट मिट्टी के बीच मौजूद है। राज्य में, इस मिट्टी को स्थानीय भाषा में रोसली भी कहा जाता है। यह मिट्टी हरियाणा के हिसार, भिवानी, रेवाड़ी, गुरुग्राम और झज्जर (केवल कुछ भागों में) जिलों में पाई जाती है।\n\nइस मिट्टी में पानी धारण करने की क्षमता अधिक होती है। इस मिट्टी को ड्रिप सिंचाई और स्प्रिंकलर सिंचाई द्वारा अधिक उपजाऊ बनाया जा सकता है। इस मिट्टी में गाद और मिट्टी की तुलना में अधिक रेत पाई जाती है, जिसके कारण इसे कृषि के लिए उपयोगी माना जाता है।",
        contentEnglish: "This soil mainly consists of sandy loam and loam soils. According to Dr. Jasbir Singh, this soil is characterised by the presence of silt, sand and clay and can be divided into the following two categories:\n\n(i) Sandy-Loam Soil - This soil is soft and it has low water holding capacity, so adequate irrigation system is required to get more productivity in this soil. This soil is found in some villages of Sirsa tehsil and in Dabwali tehsil. The ratio of silt, clay and sand is almost equal in this soil.\n\n(ii) Relatively Sandy-Loam Soil - It is a mixture of loam soil and sandy-loam soil. The belt of this soil is present between sandy-loam soil and loam soil in South-Western Haryana. In the state, this soil is also called Rosali in local language. This soil is found in the districts of Hisar, Bhiwani, Rewari, Gurugram and Jhajjar (only in some parts) of Haryana.\n\nThis soil has more water holding capacity. This soil can be made more fertile by drip irrigation and sprinkler irrigation. More sand is found in this soil than silt and clay due to which it is considered useful for agriculture."
    };

    // Extremely Light Soil
    const extremelyLightSoil = {
        titleHindi: "2. अत्यधिक हल्की मिट्टी (Extremely Light Soil)",
        titleEnglish: "2. Extremely Light Soil",
        contentHindi: "यह बलुई और दोमट प्रधान मिट्टी है। इस मिट्टी में चूने की मात्रा अधिक होती है। यह मिट्टी राज्य के शुष्क क्षेत्र में पाई जाती है, क्योंकि मिट्टी में वानस्पतिक तत्वों की कमी होती है और मिट्टी के कण असंगठित होते हैं। इस मिट्टी का विस्तार सिरसा के दक्षिणी भाग से फतेहाबाद, भिवानी, महेंद्रगढ़ और हिसार तक पाया जाता है। इस मिट्टी के हल्केपन के कारण इसमें वायु कटाव अधिक होता है। इस मिट्टी के क्षेत्र में रेत के टीले प्रबल होते हैं। इस मिट्टी में पानी सोखने की क्षमता कम होती है। इस कारण इसमें ऐसी फसलें बोई जाती हैं, जिन्हें कम पानी की आवश्यकता होती है, जैसे बाजरा, चना आदि। राज्य सरकार इस मिट्टी के क्षेत्रों में उत्पादकता बढ़ाने के लिए शुष्क भूमि कृषि को बढ़ावा दे रही है।",
        contentEnglish: "It is sandy and loam-dominated soil. The quantity of lime is high in this soil. This soil is found in the arid region of the state, because the soil lacks vegetative elements and the soil particles are unorganised. The extension of this soil is found from the Southern part of Sirsa to Fatehabad, Bhiwani, Mahendragarh and Hisar. Wind erosion is more in this soil due to its lightness. The area of this soil is dominated by sand dunes. This soil has less ability to absorb water. For this reason such crops are sown in it, which require less water, like millet, gram etc. The state government is promoting Dry Land Farming to increase productivity in the areas of this soil."
    };

    // Medium Soil
    const mediumSoil = {
        titleHindi: "3. मध्यम मिट्टी (Medium Soil)",
        titleEnglish: "3. Medium Soil",
        contentHindi: "यह मिट्टी अन्य मिट्टियों की तुलना में अधिक उपजाऊ है। इस मिट्टी में तीन प्रकार की मिट्टियाँ शामिल हैं:\n\n(i) मोटी दोमट - इस मिट्टी के कण मोटे होते हैं। यह मिट्टी राज्य की नूह तहसील और पश्चिमी फिरोजपुर झिरका के निचले क्षेत्रों में पाई जाती है।\n\n(ii) हल्की दोमट - यह मिट्टी मुख्य रूप से दक्षिण-पश्चिमी अंबाला और राज्य के नारायणगढ़ तहसील के दक्षिणी भाग में पाई जाती है। इसके साथ ही, यह मेवात के उत्तरी भाग, नूह के उत्तर-पश्चिमी भाग और मध्य रेवाड़ी के क्षेत्रों में भी पाई जाती है।\n\n(iii) दोमट मिट्टी - यह राज्य में यमुना-घग्गर मैदान के एक बहुत बड़े हिस्से में पाई जाती है। यह मिट्टी अत्यधिक उपजाऊ होती है। जब पर्याप्त वर्षा होती है, तो यह मिट्टी अच्छी फसल पैदा करती है। गेहूँ, चावल, कपास, गन्ना आदि का इस मिट्टी में अधिक उत्पादन होता है। यह मिट्टी राज्य के मध्य भागों में पाई जाती है, मुख्य रूप से जींद, कैथल, सोनीपत, पानीपत, गुरुग्राम, कुरुक्षेत्र आदि।",
        contentEnglish: "This soil is more fertile than other soils. This soil consists of three soils:\n\n(i) Thick Loam - The particles of this soil are thick. This soil is found in the Nuh tehsil of the state and in the lower areas of Western Ferozepur Jhirka.\n\n(ii) Light Loam - This soil is mainly found in South-Western Ambala and Southern part of Narayangarh tehsil of the state. Along with this, it is also found in the Northern part of Mewat, North-Western part of Nuh and in the areas of Central Rewari.\n\n(iii) Loam Soil - It is found in a very large part of Yamuna-Ghaggar plain in the state. This soil is highly fertile. When there is sufficient rainfall, this soil produce good harvest. Wheat, rice, cotton, sugarcane, etc. are produced more in this soil. This soil is found in Central parts of the state, mainly Jind, Kaithal, Sonipat, Panipat, Gurugram, Kurukshetra, etc."
    };

    // Heavy and Very Heavy Soils
    const heavySoils = {
        titleHindi: "4. भारी और अत्यधिक भारी मिट्टी (Heavy and Very Heavy Soils)",
        titleEnglish: "4. Heavy and Very Heavy Soils",
        contentHindi: "यह मिट्टी राज्य की वर्षा आधारित नदियों के किनारे पाई जाती है। इस मिट्टी में चिकनी मिट्टी की प्रधानता होती है। यह मिट्टी बरसात के मौसम में चिपचिपी हो जाती है और शुष्क मौसम में सख्त हो जाती है। थानेसर और फतेहाबाद के घग्गर क्षेत्र में कठोर मिट्टी पाई जाती है जिसे सोलर के नाम से जाना जाता है और जगाधरी में लौहयुक्त मिट्टी पाई जाती है जिसे डकार के नाम से जाना जाता है। इस मिट्टी की उत्पादकता को विभिन्न जैविक और रासायनिक उर्वरकों द्वारा बढ़ाया जा सकता है। इस मिट्टी में चावल, गेहूँ, चना और जौ उगाए जा सकते हैं।",
        contentEnglish: "This soil is found on the banks of rain-fed rivers of the state. This soil has a predominance of clayey silt. This soil becomes sticky in the rainy season and hardens in the dry season. In the Ghaggar area of Thanesar and Fatehabad, hard clay is found which is known as Solar and ferruginous clay is found in Jagadhri which is known as Dakar. The productivity of this soil can be increased by various organic and chemical fertilisers. In this soil, rice, wheat, gram and barley can be grown."
    };

    // Shivalik, Piedmont and Foothills Soils
    const shivalikSoils = {
        titleHindi: "5. शिवालिक, पीडमोंट और तलहटी की मिट्टी (Shivalik, Piedmont and Foothills Soils)",
        titleEnglish: "5. Shivalik, Piedmont and Foothills Soils",
        contentHindi: "राज्य में इन मिट्टियों के होने का मुख्य कारण उत्तर-पूर्वी भाग में शिवालिक का विस्तार और दक्षिण में अरावली पहाड़ियाँ हैं। ये मिट्टी मुख्य रूप से पंचकुला, अंबाला, यमुनानगर आदि जिलों में पाई जाती है।\n\nशिवालिक मिट्टी - इस मिट्टी में बलुआ पत्थर, रेत, मिट्टी, बजरी और अन्य तत्व होते हैं। यह पंचकुला के कालका और अंबाला की नारायणगढ़ तहसील में पाई जाती है।\n\nपीडमोंट मिट्टी - यह मिट्टी शिवालिक के पीडमोंट क्षेत्र में पाई जाती है। रेत और बजरी तत्वों की प्रधानता के कारण यह मिट्टी निम्न गुणवत्ता की होती है। यह मिट्टी पंचकुला के कालका, अंबाला की नारायणगढ़ तहसील और यमुनानगर की जगाधरी तहसील में पाई जाती है। कालका और नारायणगढ़ तहसीलों में इसे धार कहा जाता है और जगाधरी तहसील में इसे कांधी कहा जाता है। यह मिट्टी वर्षा आधारित नालों और धाराओं के माध्यम से व्यापक पैमाने पर नष्ट हो जाती है।\n\nतलहटी मिट्टी - हरियाणा के दक्षिणी भाग में अरावली श्रेणी के क्षेत्र में चट्टानी और बलुई मिट्टी पाई जाती है। यह मिट्टी कम उपजाऊ और उथली होती है। इसलिए, इस मिट्टी पर कृषि कार्य कम किए जाते हैं। यह मिट्टी भिवानी, दादरी, गुरुग्राम, फरीदाबाद, पलवल आदि क्षेत्रों तक सीमित है।",
        contentEnglish: "The main reason for the occurrence of these soils in the state is the expansion of the Shivalik in the North-Eastern part and the Aravali hills in the South. These soils are mainly found in the districts of Panchkula, Ambala, Yamunanagar, etc.\n\nShivalik Soils - This soil contains sandstone, sand, clay, gravel and other elements. It is found in the Kalka of Panchkula and Narayangarh tehsil of Ambala.\n\nPiedmont Soil - This soil is found in the piedmont region of Shivalik. This soil is of low quality due to the predominance of sand and gravel elements. This soil is found in the Kalka of Panchkula, Narayangarh tehsil of Ambala and Jagadhri tehsil of Yamunanagar. In Kalka and Narayangarh tehsils, it is called Dhar and in Jagadhri tehsil, it is called Kandhi. This soil is eroded on a wide scale through rain-fed drains and streams.\n\nFoothills Soil - Rocky and sandy soils are found in the region of Aravali range in the Southern part of Haryana. This soil is less fertile and shallow. Therefore, agricultural activities are carried out less on this soil. This soil is limited to areas like Bhiwani, Dadri, Gurugram, Faridabad, Palwal, etc."
    };

    // Khadar and Bangar
    const khadarBangar = {
        titleHindi: "6. कादर और बांगर मिट्टी (Khadar and Bangar Soil)",
        titleEnglish: "6. Khadar and Bangar Soil",
        contentHindi: "गाद युक्त इस मिट्टी को कादर मिट्टी भी कहा जाता है। इस मिट्टी में पानी धारण करने की क्षमता कम होती है, इस प्रकार मिट्टी के सूखने पर यह सख्त हो जाती है। यह मिट्टी मुख्य रूप से यमुनानगर, कुरुक्षेत्र, करनाल, पानीपत, सोनीपत और फरीदाबाद में पाई जाती है। इस मिट्टी को नई कादर कहा जाता है क्योंकि यह हर साल बाढ़ का पानी प्राप्त करती है। ऊँचे इलाकों की इस मिट्टी को बांगर कहा जाता है।\n\nकादर मिट्टी नई जलोढ़ मिट्टी होती है। कादर मिट्टी बार-बार आने वाली बाढ़ द्वारा लाई गई जलोढ़ तलछट के जमाव के कारण प्रतिवर्ष नवीनीकृत होती है। इसलिए, कादर मिट्टी का क्षेत्र सबसे उपजाऊ क्षेत्र होता है। कादर मिट्टी में मुख्य रूप से चूना, पोटाश, मैग्नीशियम आदि पाए जाते हैं। यह मिट्टी स्थानीय नामों जैसे बलुआ-गाद, बलुआ-मटियार दोमट, मटियार दोमट आदि से भी जानी जाती है। इस मिट्टी की उर्वरता बढ़ाने के लिए रासायनिक उर्वरकों की आवश्यकता नहीं होती है। इस मिट्टी में मुख्य रूप से जूट और चावल की खेती की जाती है।\n\nबांगर पुरानी जलोढ़ मिट्टी है, जो दो नदियों के बीच दोआब क्षेत्र में पाई जाती है। बांगर मिट्टी में नाइट्रोजन और फास्फोरस की कमी होती है। यह मिट्टी स्थानीय नामों जैसे उपहार, दोमट, मटियार दोमट और मटियार-बलुई-दोमट आदि से भी जानी जाती है। यह मिट्टी रबी फसलों के लिए उपयुक्त होती है। राज्य के यमुनानगर जिले में इस प्रकार की मिट्टी को लाल चेस्टनट भी कहा जाता है।",
        contentEnglish: "This soil with silt is also called Khadar soil. This soil has low water holding capacity, thus it hardens when the soil dries. This soil is mainly found in Yamunanagar, Kurukshetra, Karnal, Panipat, Sonipat and Faridabad. This soil is called New Khadar as it receives flood water every year. This soil on the higher reaches is called Bangar.\n\nKhadar soil is new alluvium. The Khadar soil is renewed each year due to the deposition of alluvial sediments brought by the recurring floods. Therefore, the area of Khadar soil is the most fertile area. Lime, potash, magnesium, etc. are found mainly in the Khadar soil. This soil is also known by local names like balua-silt, balua-matiyar domat, matiyar domat etc. Chemical fertilisers are not required to increase fertility of this soil. Jute and rice are mainly cultivated in this soil.\n\nBangar is an old alluvial soil, which is found in the Doab region between two rivers. Bangar soil lacks in nitrogen and phosphorus. This soil is also known by local names like uphar, domat, matiyar domat and matiyar-balui-domat, etc. This soil is suitable for rabi crops. This type of soil is also called red chestnut in Yamunanagar district of the state."
    };

    // Soil Erosion
    const soilErosion = {
        titleHindi: "हरियाणा में मिट्टी का कटाव",
        titleEnglish: "Soil Erosion in Haryana",
        contentHindi: "हरियाणा में मिट्टी का कटाव एक मुख्य समस्या है। यह मिट्टी की ऊपरी उपजाऊ परत को नष्ट कर देता है। मिट्टी के कटाव को कृषि का 'निर्दयी शत्रु' या 'रेंगती मृत्यु' भी कहा जाता है। राज्य में मिट्टी का कटाव मुख्य रूप से पानी और हवा के माध्यम से होता है।\n\nपानी द्वारा मिट्टी का कटाव राज्य में मुख्य रूप से उत्तर-पूर्वी पर्वतीय क्षेत्र में शिवालिक के पीडमोंट भाग में होता है, क्योंकि इस क्षेत्र की औसत वार्षिक वर्षा 100 सेमी से अधिक होती है। यहाँ, मौसमी वर्षा की तीव्रता प्रति दिन 2.5 सेमी से अधिक होती है। पानी द्वारा मिट्टी का कटाव मुख्य रूप से पंचकुला, अंबाला और यमुनानगर जिलों में होता है।\n\nहवा द्वारा मिट्टी का कटाव राज्य में मुख्य रूप से राजस्थान के पास स्थित दक्षिणी और दक्षिण-पश्चिमी जिलों में होता है। इन क्षेत्रों में हवा द्वारा मिट्टी के कटाव का मुख्य कारण कम वर्षा और बलुई मिट्टी की उपस्थिति है। हवा द्वारा मिट्टी का कटाव मुख्य रूप से हिसार, सिरसा, भिवानी, महेंद्रगढ़, रेवाड़ी और गुरुग्राम में होता है।",
        contentEnglish: "Soil erosion is a main problem in the state. It destroys the top fertile layer of soil. Soil erosion is also called 'Nirdayi Shatru' or 'Rengati Mrityu' of agriculture. Soil erosion in the state is mainly occurred through water and wind.\n\nSoil erosion by water in the state occurs mainly in the piedmont part of Shivalik in the North-Eastern mountainous region, as the annual average rainfall of this region is more than 100 cm. Here, the intensity of seasonal rainfall is more than 2.5 cm per day. Soil erosion by water occurs mainly in Panchkula, Ambala and Yamunanagar districts.\n\nSoil erosion by wind occurs in the state mainly in the Southern and South-Western districts located near Rajasthan. The main reason for soil erosion by wind in these areas is low rainfall and presence of sandy soil. Soil erosion by wind occurs mainly in Hisar, Sirsa, Bhiwani, Mahendragarh, Rewari and Gurugram."
    };

    // Soil Salinity and Alkalinity
    const salinityAlkalinity = {
        titleHindi: "हरियाणा में मृदा लवणता और क्षारीयता",
        titleEnglish: "Soil Salinity and Alkalinity in Haryana",
        contentHindi: "राज्य का लगभग एक-तिहाई भूमि क्षेत्र क्षारीयता और लवणता की समस्या से ग्रस्त है। अत्यधिक सिंचाई राज्य में लवणता और क्षारीयता का प्रमुख कारण है। राज्य के किसानों द्वारा नहरों के माध्यम से सिंचाई करने के कारण, भूजल का स्तर ऊपर आ गया है, जिसके परिणामस्वरूप जल भराव की समस्या उत्पन्न हो गई है। इस स्थिति में, घुलनशील लवण मिट्टी में जमा हो जाते हैं। राज्य में अपर्याप्त निक्षालन और कम वर्षा के कारण मिट्टी की सतह पर क्षारों और लवणों का संचय बढ़ जाता है।\n\nहालाँकि बरसात के मौसम के दौरान, मिट्टी के लवण पानी में घुल जाते हैं और मिट्टी की निचली सतह पर चले जाते हैं, लेकिन शुष्क और गर्म मौसम में अत्यधिक वाष्पीकरण के कारण, मिट्टी के लवण मिट्टी की ऊपरी सतह पर फिर से इकट्ठा हो जाते हैं, जिसे सफेद परतों के रूप में देखा जा सकता है। क्षारीयता की समस्या बलुई मिट्टी में अधिक आम है। दोमट मिट्टी में लवण और क्षार दोनों मौजूद होते हैं। मिट्टी की ऊपरी सतह पर लवणों और क्षारों की उपस्थिति मिट्टी की उर्वरता को नष्ट कर देती है। राज्य में इस मिट्टी की समस्या को 'कल्लर' और 'रेह' कहा जाता है। यह मिट्टी मुख्य रूप से लवणों और क्षारों से प्रभावित होती है।\n\nहरियाणा के जिलों में लवणता और क्षारीयता की स्थिति:\n- हरियाणा में अंबाला का दक्षिणी भाग, कुरुक्षेत्र, कैथल, करनाल, दक्षिण-पूर्व जींद, पानीपत, सोनीपत, झज्जर, रोहतक, गुरुग्राम, फरीदाबाद आदि लवणता और क्षारीयता की समस्या से ग्रस्त हैं।\n- राज्य के पूर्वी हिसार, उत्तर-पूर्वी भिवानी, रोहतक आदि जिले लवणता से ग्रस्त हैं।\n- उत्तरी जींद, हिसार, पूर्वी भिवानी, झज्जर, गुरुग्राम, रेवाड़ी, महेंद्रगढ़ आदि राज्य में संभावित लवणीय मिट्टी वाले जिले हैं।\n- राज्य के हिसार, फतेहाबाद, जींद, कैथल, कुरुक्षेत्र, पानीपत, सोनीपत आदि जिले थुर और कल्लर की समस्या से प्रभावित हैं।",
        contentEnglish: "About one-third of the land area of the state suffers from alkalinity and salinity problem. Over-irrigation is the major cause of salinity and alkalinity in the state. Due to irrigation through canals by the farmers of the state, the level of ground water has come up, as a result the problem of water logging has arisen. In this situation, soluble salts accumulate in the soil. The accumulation of alkalis and salts on the soil surface increases due to insufficient leaching and low rainfall in the state.\n\nAlthough during the rainy season, the soil salts dissolve in the water and move to the lower surface of the soil, but due to excessive evaporation in the dry and hot season, the soil salts reassemble on the top surface of the soil, which can be seen in the form of white layers. The problem of alkalinity is more common in sandy soil. Both salt and alkali are present in the loam soil. The presence of salts and alkalis on the top surface of the soil destroys the fertility of soil. This soil problem in the state is called 'Kallar' and 'Reh'. This soil is mainly affected by salts and bases.\n\nStatus of Salinity and Alkalinity in the Districts of Haryana:\n- The Southern part of Ambala, Kurukshetra, Kaithal, Karnal, South-East Jind, Panipat, Sonipat, Jhajjar, Rohtak, Gurugram, Faridabad, etc. are prone to salinity and alkalinity problems in Haryana.\n- Eastern Hisar, North-Eastern Bhiwani, Rohtak, etc. districts of the state are prone to salinity.\n- Northern Jind, Hisar, East Bhiwani, Jhajjar, Gurugram, Rewari, Mahendragarh, etc. are the districts of potential saline soils in the state.\n- Hisar, Fatehabad, Jind, Kaithal, Kurukshetra, Panipat, Sonipat, etc. districts of the state are affected by the problem of Thur and Kallar."
    };

    // Other Soil Problems
    const otherProblems = {
        titleHindi: "हरियाणा में अन्य मृदा समस्याएँ",
        titleEnglish: "Other Soil Problems in Haryana",
        contentHindi: "राज्य में अन्य मृदा समस्याएँ निम्नलिखित हैं:\n\nमृदा उर्वरता का ह्रास - हरियाणा के उपजाऊ मैदानों में प्राचीन काल से खेती के कारण, राज्य में मिट्टी की प्राकृतिक उर्वरता कम हो रही है। राज्य में मिट्टी की उर्वरता में कमी का एक अन्य कारण खेती के त्रुटिपूर्ण तरीके को अपनाना है।\n\nमिट्टी में नमी की कमी - हरियाणा का अधिकांश भूमि क्षेत्र मिट्टी में नमी की कमी के कारण अर्ध-शुष्क है। इसके साथ ही, शुष्क और गर्म मौसम की लंबी अवधि के दौरान तेज धूप के कारण मुख्य रूप से मिट्टी से नमी का वाष्पीकरण अधिक होता है।",
        contentEnglish: "Other soil problems in the state are as follows:\n\nDepletion of Soil Fertility - Due to the cultivation in fertile plains of Haryana since the ancient time, the natural fertility of the soil is decreasing in the state. Another reason for the decrease in soil fertility in the state is the adoption of faulty method of agriculture.\n\nLack of Moisture in the Soil - Most of the land area of Haryana is semi-arid due to lack of moisture in the soil. Along with this, the evaporation of moisture from the soil is high, mainly due to the strong sunlight during the long period of dry and hot weather."
    };

    // Soil Conservation Measures
    const soilConservation = {
        titleHindi: "हरियाणा में मृदा संरक्षण के उपाय",
        titleEnglish: "Measures of Soil Conservation in Haryana",
        contentHindi: "राज्य में मृदा संरक्षण के लिए निम्नलिखित उपाय किए जा सकते हैं:\n\nवृक्षारोपण - जिन क्षेत्रों में वनों की कमी है, वहाँ वृक्ष लगाकर मिट्टी के कटाव को रोका जा सकता है।\n\nअत्यधिक चराई पर नियंत्रण - पशुपालन भी राज्य में एक महत्वपूर्ण आर्थिक गतिविधि है। जानवरों के लिए चारागाह भूमि विकसित की जानी चाहिए और खाली खेतों में अत्यधिक चराई को नियंत्रित किया जाना चाहिए। ऐसा इसलिए क्योंकि जब जानवर खाली खेतों में प्रवेश करते हैं, तो वे अपने खुरों से मिट्टी को ढीला कर देते हैं, जो बाद में नष्ट हो जाती है।\n\nरेखीय वृक्षारोपण - हिसार, भिवानी, सिरसा और महेंद्रगढ़ जिलों के शुष्क क्षेत्रों में, खेतों के संरक्षण के लिए पौधों को रेखीय पैटर्न में लगाया जाना चाहिए। इससे मिट्टी के कटाव को भी रोका जा सकता है।\n\nबाँधों का निर्माण - राज्य के उन क्षेत्रों में जहाँ बाढ़ आती है, वहाँ बाँधों का निर्माण किया जाना चाहिए। यह पानी के प्रवाह और मिट्टी के कटाव को नियंत्रित करेगा।",
        contentEnglish: "Following measures can be taken for soil conservation in the state:\n\nPlantation - Soil erosion can be prevented by planting trees in areas where there is lack of forests.\n\nControl on Overgrazing - Animal husbandry is also an important economic activity in the state. Pasture land should be developed for animals and overgrazing should be controlled on empty fields. It is because when animals move into empty fields, they loosen the soil from their hooves, which subsequently become degraded.\n\nLinear Plantation - In the dry areas of Hisar, Bhiwani, Sirsa and Mahendragarh districts, the plants should be planted in linear pattern for conservation of fields. This can also prevent soil erosion.\n\nConstruction of Dams - Dams should be constructed in the areas of the state where there is flood. It will control the flow of water and also soil erosion."
    };

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
                        <Sprout className="w-4 h-4" />
                        {language === "hindi" ? "मृदा संसाधन - हरियाणा सरकार" : "Soil Resources - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा के" : "Soil Resources of"} <span className="text-primary">{language === "hindi" ? "मृदा संसाधन" : "Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के मृदा संसाधनों की संपूर्ण जानकारी - मिट्टी का वर्गीकरण, कादर और बांगर, मिट्टी का कटाव, लवणता और क्षारीयता की समस्या तथा मृदा संरक्षण के उपाय"
                            : "Complete information about soil resources of Haryana - soil classification, Khadar and Bangar, soil erosion, salinity and alkalinity problems, and soil conservation measures"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Tractor className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "कृषि प्रधान राज्य" : "Agricultural State"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Leaf className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "जलोढ़ मिट्टी" : "Alluvial Soil"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Wind className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "बलुई मिट्टी" : "Sandy Soil"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Droplets className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "कादर उपजाऊ क्षेत्र" : "Khadar Fertile Area"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Soil Resources Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Sprout className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? soilOverview.titleHindi : soilOverview.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? soilOverview.contentHindi : soilOverview.contentEnglish}</div>
                    </div>

                    {/* Classification on Basis of Topography */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Mountain className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? topographyClassification.titleHindi : topographyClassification.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? topographyClassification.contentHindi : topographyClassification.contentEnglish}</div>
                    </div>

                    {/* Classification on Basis of Physical and Chemical Properties */}
                    <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/30">
                                <Leaf className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary">{language === "hindi" ? physicalChemicalClassification.titleHindi : physicalChemicalClassification.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? physicalChemicalClassification.contentHindi : physicalChemicalClassification.contentEnglish}</div>
                    </div>

                    {/* Light Soils */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-xl font-semibold mb-3 text-primary">{language === "hindi" ? lightSoils.titleHindi : lightSoils.titleEnglish}</h2>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? lightSoils.contentHindi : lightSoils.contentEnglish}</div>
                    </div>

                    {/* Extremely Light Soil */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-xl font-semibold mb-3 text-primary">{language === "hindi" ? extremelyLightSoil.titleHindi : extremelyLightSoil.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? extremelyLightSoil.contentHindi : extremelyLightSoil.contentEnglish}</p>
                    </div>

                    {/* Medium Soil */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-xl font-semibold mb-3 text-primary">{language === "hindi" ? mediumSoil.titleHindi : mediumSoil.titleEnglish}</h2>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? mediumSoil.contentHindi : mediumSoil.contentEnglish}</div>
                    </div>

                    {/* Heavy Soils */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-xl font-semibold mb-3 text-primary">{language === "hindi" ? heavySoils.titleHindi : heavySoils.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? heavySoils.contentHindi : heavySoils.contentEnglish}</p>
                    </div>

                    {/* Shivalik, Piedmont and Foothills Soils */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-xl font-semibold mb-3 text-primary">{language === "hindi" ? shivalikSoils.titleHindi : shivalikSoils.titleEnglish}</h2>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? shivalikSoils.contentHindi : shivalikSoils.contentEnglish}</div>
                    </div>

                    {/* Khadar and Bangar */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-xl font-semibold mb-3 text-primary">{language === "hindi" ? khadarBangar.titleHindi : khadarBangar.titleEnglish}</h2>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? khadarBangar.contentHindi : khadarBangar.contentEnglish}</div>
                    </div>

                    {/* Soil Erosion */}
                    <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-6 md:p-8 border border-red-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-red-100 dark:bg-red-900/30">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">{language === "hindi" ? soilErosion.titleHindi : soilErosion.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? soilErosion.contentHindi : soilErosion.contentEnglish}</div>
                    </div>

                    {/* Soil Salinity and Alkalinity */}
                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6 md:p-8 border border-amber-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                                <Sun className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400">{language === "hindi" ? salinityAlkalinity.titleHindi : salinityAlkalinity.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? salinityAlkalinity.contentHindi : salinityAlkalinity.contentEnglish}</div>
                    </div>

                    {/* Other Soil Problems */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-xl font-semibold mb-3 text-primary">{language === "hindi" ? otherProblems.titleHindi : otherProblems.titleEnglish}</h2>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? otherProblems.contentHindi : otherProblems.contentEnglish}</div>
                    </div>

                    {/* Soil Conservation Measures */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-6 md:p-8 border border-green-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                                <Trees className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">{language === "hindi" ? soilConservation.titleHindi : soilConservation.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? soilConservation.contentHindi : soilConservation.contentEnglish}</div>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा मृदा संसाधन: तथ्य सारांश" : "Haryana Soil Resources: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">6</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "मिट्टी की श्रेणियाँ (डॉ. जसबीर सिंह)" : "Soil Categories (Dr. Jasbir Singh)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">कादर</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सबसे उपजाऊ मिट्टी" : "Most Fertile Soil"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">⅓</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "क्षेत्र लवणता/क्षारीयता से प्रभावित" : "Area Affected by Salinity/Alkalinity"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">रोसली</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "बलुई-दोमट मिट्टी का स्थानीय नाम" : "Local Name for Sandy-Loam Soil"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">कल्लर/रेह</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "लवणीय/क्षारीय मिट्टी का स्थानीय नाम" : "Local Name for Saline/Alkaline Soil"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">धार/कांधी</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "पीडमोंट मिट्टी का स्थानीय नाम" : "Local Name for Piedmont Soil"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">कंकर</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "मैदानी क्षेत्र की मिट्टी का स्थानीय नाम" : "Local Name for Plain Area Soil"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">सोलर/डकार</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "भारी मिट्टी के स्थानीय नाम" : "Local Names for Heavy Soil"}</p>
                        </div>
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
                            {language === "hindi" ? "हरियाणा के मृदा संसाधनों के बारे में" : "Common"} <span className="text-primary">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Haryana Soil Resources"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के मृदा संसाधनों, मिट्टी के प्रकार, कादर-बांगर, मिट्टी के कटाव और लवणता की समस्या के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's soil resources, soil types, Khadar-Bangar, soil erosion, and salinity problems"}
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
                            {language === "hindi" ? "अपने हरियाणा मृदा संसाधनों के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Soil Resources of Haryana?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer">
                                {language === "hindi" ? "हरियाणा मृदा संसाधन क्विज़ लें" : "Take Haryana Soil Resources Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/climate" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Haryana Climate
                        </Link>
                        <Link href="/haryana-gk/drainage-system" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                            Next Chapter: Drainage System of Haryana
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा के मृदा संसाधन - संपूर्ण संदर्भ" : "Soil Resources of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के मृदा संसाधनों के बारे में व्यापक जानकारी प्रदान करता है जिसमें स्थलाकृति के आधार पर वर्गीकरण, भौतिक एवं रासायनिक गुणों के आधार पर वर्गीकरण, कादर और बांगर मिट्टी, मिट्टी का कटाव, लवणता और क्षारीयता की समस्या तथा मृदा संरक्षण के उपाय शामिल हैं। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about the soil resources of Haryana including classification on the basis of topography, classification on the basis of physical and chemical properties, Khadar and Bangar soil, soil erosion, salinity and alkalinity problems, and soil conservation measures. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK and Soil Resources."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और कृषि अभिलेखों से स्रोतित" : "Information sourced from official Government of Haryana publications and agricultural records"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}