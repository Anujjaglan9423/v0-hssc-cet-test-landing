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
            questionHindi: "हरियाणा में खाद्यान्न उत्पादन में पहला स्थान किस फसल का है?",
            questionEnglish: "Which crop ranks first in foodgrain production in Haryana?",
            answerHindi: "गेहूं हरियाणा में सबसे अधिक क्षेत्रफल वाली फसल है। हरियाणा गेहूं उत्पादन में उत्तर प्रदेश और पंजाब के बाद तीसरे स्थान पर है। सिरसा सबसे बड़ा गेहूं उत्पादक जिला है।",
            answerEnglish: "Wheat has the largest area under cultivation in Haryana. Haryana ranks third in wheat production after Uttar Pradesh and Punjab. Sirsa is the largest wheat producing district."
        },
        {
            questionHindi: "हरियाणा का चावल का कटोरा किसे कहा जाता है?",
            questionEnglish: "Which region is called the Rice Bowl of Haryana?",
            answerHindi: "करनाल, कैथल, कुरुक्षेत्र और जींद को राज्य का चावल का कटोरा कहा जाता है। ये चारों जिले मिलकर हरियाणा का 50% चावल उत्पादन करते हैं। करनाल सबसे बड़ा चावल उत्पादक जिला है।",
            answerEnglish: "Karnal, Kaithal, Kurukshetra and Jind are known as the Rice Bowl of the state. These four districts together produce 50% of the rice in Haryana. Karnal is the largest rice producing district."
        },
        {
            questionHindi: "हरियाणा की मुर्राह भैंस को किस नाम से जाना जाता है?",
            questionEnglish: "What is the Murrah buffalo of Haryana known as?",
            answerHindi: "मुर्राह भैंस को 'ब्लैक गोल्ड' और 'एशियन ट्रैक्टर' के नाम से जाना जाता है। यह मुख्यतः रोहतक, हिसार और जींद जिलों में पाई जाती है। स्थानीय रूप से इसे 'खुंडी' भी कहा जाता है।",
            answerEnglish: "Murrah buffalo is known as 'Black Gold' and 'Asian Tractor'. It is mainly found in Rohtak, Hisar and Jind districts. Locally it is also called 'Khundi'."
        },
        {
            questionHindi: "हरियाणा का सबसे बड़ा गेहूं उत्पादक जिला कौन सा है?",
            questionEnglish: "Which is the largest wheat producing district in Haryana?",
            answerHindi: "सिरसा हरियाणा का सबसे बड़ा गेहूं उत्पादक जिला है। पंचकूला सबसे कम गेहूं उत्पादक जिला (0.4%) है।",
            answerEnglish: "Sirsa is the largest wheat producing district in Haryana. Panchkula is the lowest wheat producing district (0.4%)."
        },
        {
            questionHindi: "हरियाणा का सबसे बड़ा कपास उत्पादक जिला कौन सा है?",
            questionEnglish: "Which is the largest cotton producing district in Haryana?",
            answerHindi: "सिरसा हरियाणा का सबसे बड़ा कपास उत्पादक जिला है। कपास को 'सफेद सोना' भी कहा जाता है।",
            answerEnglish: "Sirsa is the largest cotton producing district in Haryana. Cotton is also known as 'White Gold'."
        },
        {
            questionHindi: "राष्ट्रीय डेयरी अनुसंधान संस्थान (NDRI) कहाँ स्थित है?",
            questionEnglish: "Where is the National Dairy Research Institute (NDRI) located?",
            answerHindi: "राष्ट्रीय डेयरी अनुसंधान संस्थान (NDRI) करनाल में स्थित है। इसकी स्थापना 1923 में बेंगलुरु में हुई थी और 1955 में इसका मुख्यालय करनाल स्थानांतरित कर दिया गया।",
            answerEnglish: "The National Dairy Research Institute (NDRI) is located in Karnal. It was established in 1923 in Bengaluru and its headquarters was shifted to Karnal in 1955."
        },
        {
            questionHindi: "हरियाणा में कितने कृषि जलवायु क्षेत्र हैं?",
            questionEnglish: "How many agro-climatic zones are there in Haryana?",
            answerHindi: "हरियाणा को दो कृषि जलवायु क्षेत्रों में विभाजित किया गया है - उत्तर-पश्चिमी क्षेत्र और दक्षिण-पश्चिमी क्षेत्र।",
            answerEnglish: "Haryana is divided into two agro-climatic zones - North-Western Zone and South-Western Zone."
        },
        {
            questionHindi: "हरियाणा में मछली उत्पादन में देश में कौन सा स्थान है?",
            questionEnglish: "What is Haryana's rank in fish production per unit area in India?",
            answerHindi: "हरियाणा प्रति इकाई क्षेत्रफल में औसत वार्षिक मछली उत्पादन में देश में दूसरे स्थान पर है।",
            answerEnglish: "Haryana stands second in the average annual fish production per unit area in the country."
        },
        {
            questionHindi: "हरियाणा का पहला ग्रेन बैंक कहाँ स्थापित किया गया?",
            questionEnglish: "Where is Haryana's first Grain Bank established?",
            answerHindi: "राज्य का पहला ग्रेन बैंक पानीपत जिले में स्थापित किया गया है।",
            answerEnglish: "The first Grain Bank of the state is established in Panipat district."
        },
        {
            questionHindi: "एशिया का दूसरा सबसे बड़ा अनाज बाजार कहाँ स्थित है?",
            questionEnglish: "Where is Asia's second largest grain market located?",
            answerHindi: "कुरुक्षेत्र जिले में एशिया का दूसरा सबसे बड़ा अनाज बाजार स्थित है।",
            answerEnglish: "Kurukshetra district has the second largest grain market in Asia."
        }
    ];

    // ==================== COMPLETE PDF DATA ====================

    // Section 1: Overview
    const overview = {
        titleHindi: "हरियाणा में कृषि और पशुपालन",
        titleEnglish: "Agriculture and Animal Husbandry in Haryana",
        contentHindi: "हरियाणा एक कृषि प्रधान राज्य है। प्राचीन काल से ही कृषि हरियाणा की अर्थव्यवस्था और आजीविका का मुख्य स्रोत रही है। कृषि क्षेत्र में भौगोलिक विविधता का प्रभाव देखा जा सकता है। राज्य में लगभग 70 प्रतिशत जनसंख्या कृषि और संबद्ध गतिविधियों पर निर्भर है। हरियाणा खाद्य उत्पादन में आत्मनिर्भर है और देश में केंद्रीय खाद्यान्न भंडार में दूसरा सबसे बड़ा योगदानकर्ता है। हरियाणा में हरित क्रांति वर्ष 1966-67 में शुरू हुई। इसने कृषि क्षेत्र को विशेष रूप से गेहूं उत्पादन में एक बड़ा बढ़ावा दिया। हरियाणा में पहला कृषि अनुमान 1970 में किया गया था। हरियाणा की प्रमुख फसलें चावल, गेहूं, ज्वार, बाजरा, मक्का, गन्ना, कपास, दालें, तिलहन, आलू, फल और सब्जियां हैं। सोयाबीन, सूरजमुखी, मूंगफली और बागवानी उत्पादों के उत्पादन को भी राज्य में फसल विविधीकरण के रूप में प्रोत्साहित किया जाता है। मिट्टी की उर्वरता बढ़ाने के लिए मूंग और बीन्स की खेती को बढ़ावा दिया जाता है। हरियाणा का दक्षिणी भाग चना जैसी दालों और सरसों जैसे तिलहनों का प्रमुख उत्पादक है। कपास हरियाणा के पश्चिमी भाग में उगाई जाती है। चावल और गेहूं मुख्य रूप से मध्य और उत्तरी हरियाणा में उगाए जाते हैं। 1966-67 में, राज्य का कुल खाद्य उत्पादन 25.92 लाख टन था, जो 2018-19 में 181.44 लाख टन हो गया। पहली कृषि जनगणना राज्य में 1970-71 में की गई थी।",
        contentEnglish: "Haryana is an agricultural state. Agriculture has remained the main source of economy and livelihood of Haryana since ancient times. The effect of geographical variation can be seen in agricultural area. Around 70 per cent of population in the state depend on agriculture and allied activities. Haryana is self-sufficient in food production and is the second largest contributor to Central Foodgrains Reserves in the country. The Green Revolution in Haryana started in the year 1966-67. This gave a major boost to agricultural sector especially in wheat production. The first agricultural estimates in Haryana was done in 1970. Major crops of Haryana are rice, wheat, jowar, bajra, maize, sugarcane, cotton, pulses, oilseeds, potato, fruits and vegetables. Production of soybean, sunflower, peanuts and horticultural products are also encouraged crop diversification in the state. Cultivation of moong and beans are promoted to increase the fertility of soil. Southern part of Haryana is major producer of pulses like gram, and oilseeds like mustard. Cotton is grown in the Western part of Haryana. Rice and wheat are majorly grown in Central and Northern Haryana. In 1966-67, total food production of the state was 25.92 lakh tonne, it became 181.44 lakh tonne in the year 2018-19. First Agriculture census was done in the state in 1970-71."
    };

    // Section 2: Agricultural Land Use
    const landUse = {
        titleHindi: "हरियाणा में कृषि भूमि उपयोग",
        titleEnglish: "Haryana Agricultural Land Use",
        contentHindi: "भूमि कृषि का मुख्य साधन है। हरियाणा में सिंचाई सुविधाओं के पर्याप्त साधनों ने कृषि विस्तार को बढ़ावा दिया है। हरियाणा का लगभग 86 प्रतिशत भौगोलिक क्षेत्र (44212 वर्ग किमी) खेती के लिए उपयुक्त माना जाता है। आर्थिक सर्वेक्षण 2020-2021 के अनुसार, हरियाणा में शुद्ध बोया गया क्षेत्र 3601 हजार हेक्टेयर है और कुल बोया गया क्षेत्र 6605 हेक्टेयर है। राज्य में कुल सकल बोया गया क्षेत्र 64.90 लाख हेक्टेयर है। जीएसवीए (सकल राज्य मूल्य वर्धित) में सेवा क्षेत्र का हिस्सा 2019-20 में बढ़कर 50.6 प्रतिशत हो गया, जबकि कृषि और संबद्ध क्षेत्रों का हिस्सा 16.6% पर घट गया। फसल तीव्रता 182% है जो राष्ट्रीय औसत 135% से अधिक है। हरियाणा में कृषि जोतों की संख्या 15-28 लाख है।",
        contentEnglish: "Land is the main source of agriculture. Adequate means of irrigation facilities in Haryana have led to agricultural expansion. Around 86 per cent of geographical area 44212 sq km in Haryana is considered suitable for cultivation. As per Economic Survey 2020-2021, Net Sown Area in Haryana is 3601 thousand hectare and total cropped area is 6605 hectares. As per the Economic Survey 2020-21, total Gross Area Sown in the state is 64.90 lakh hectares. The share of service sector in GSVA (Gross State Value Added) further increased to 50.6 per cent in 2019-20 with a decrease in the share of agriculture and allied sectors at 16.6%. Cropping intensity is 182% which is higher than the national average of 135%. Number of farm holdings in Haryana is 15-28 lakhs."
    };

    // Section 3: Agro-Climatic Zones
    const agroClimaticZones = {
        titleHindi: "कृषि-जलवायु क्षेत्र",
        titleEnglish: "Agro-Climatic Zones",
        contentHindi: "हरियाणा कृषि-जलवायु क्षेत्र VI में आता है, जिसे ट्रांस-गंगेटिक मैदानी क्षेत्र कहा जाता है। राज्य को प्रचलित जलवायु परिस्थितियों के आधार पर दो कृषि क्षेत्रों में विभाजित किया गया है:\n\n(i) उत्तर-पश्चिमी क्षेत्र - इस क्षेत्र में चावल, गेहूं, सब्जियां और समशीतोष्ण क्षेत्र के फल बड़े पैमाने पर उगाए जाते हैं।\n\n(ii) दक्षिण-पश्चिमी क्षेत्र - इस क्षेत्र में सब्जियां, फसलें, औषधीय पौधे, जड़ी-बूटियाँ और उष्णकटिबंधीय फल उगाए जाते हैं।",
        contentEnglish: "Haryana falls in the Agro climatic zone VI, which is called the Trans-Gangetic Plains Region. The state is further divided into two agricultural zones, based on the prevailing climatic conditions:\n\n(i) North-Western Zone - In this zone, rice, wheat, vegetables and fruits of temperate zone are cultivated on a large number.\n\n(ii) South-Western Zone - In this zone, vegetables, crops, medicinal plants, herbs and tropical fruits are cultivated."
    };

    // Section 4: Crop Seasons
    const cropSeasons = {
        titleHindi: "हरियाणा में फसल के मौसम",
        titleEnglish: "Crop Seasons in Haryana",
        contentHindi: "हरियाणा में दो फसल मौसम होते हैं:\n\nरबी (आसाढ़ फसलें) - रबी की फसलें अक्टूबर-नवंबर में बोई जाती हैं और अप्रैल-मई में काटी जाती हैं। ये मुख्य रूप से सर्दियों की फसलें हैं। गेहूं, जौ, चना, सरसों, मटर रबी की फसलें हैं।\n\nखरीफ (सावनी फसलें) - खरीफ की फसलें जून-जुलाई में बोई जाती हैं और अक्टूबर-नवंबर में काटी जाती हैं। इन फसलों को कम तापमान और कम आर्द्रता की आवश्यकता होती है। चावल, गन्ना, मक्का, ज्वार, बाजरा, कपास, बीन्स खरीफ की फसलें हैं।",
        contentEnglish: "There are two crop seasons in Haryana:\n\nRabi (Asadh crops) - Rabi crops in Haryana are sown in October-November and harvested in April-May. These are mainly winter crops. Wheat, barley, gram, mustard, peas are Rabi crops.\n\nKharif (Savani crops) - Kharif crops are sown in June-July and harvested in October-November. These crops require low temperature and low humidity. Rice, sugarcane, maize, jowar, bajra, cotton, beans are Kharif crops."
    };

    // Section 5: Complete Major Crops Data
    const majorCrops = [
        {
            name: "Wheat",
            nameHindi: "गेहूं",
            conditions: "Wheat is a crop that grows well in sub-temperate climate. It requires 10-15°C temperature and moist soil during its sowing and 15-28°C during its ripening. It needs clear sky, bright sunshine and high temperature along with 50-75 cm of rainfall. Wheat requires loamy, clayey loam and light clayey soil. In Haryana, around 60 per cent of land area sowing wheat is irrigated.",
            conditionsHindi: "गेहूं एक ऐसी फसल है जो उप-समशीतोष्ण जलवायु में अच्छी तरह से बढ़ती है। इसकी बुवाई के दौरान 10-15°C तापमान और नम मिट्टी की आवश्यकता होती है और पकने के दौरान 15-28°C की आवश्यकता होती है। इसके लिए साफ आसमान, तेज धूप और 50-75 सेमी वर्षा के साथ उच्च तापमान की आवश्यकता होती है। गेहूं को दोमट, चिकनी दोमट और हल्की चिकनी मिट्टी की आवश्यकता होती है। हरियाणा में, गेहूं बोने वाले लगभग 60 प्रतिशत भूमि क्षेत्र की सिंचाई होती है।",
            details: "Wheat is the important foodgrain crop of Haryana. It has the largest area under cultivation in Haryana. Haryana ranks first in the production of wheat. First Grain Bank of the state is established in Panipat district. Kurukshetra district of the state has the second largest grain market in Asia. Haryana is called wheat bowl as it produces large quantities of wheat, much more than its need. As per Economic Survey 2020-21, wheat production in Haryana was 118.77 lakh tonnes in 2019-20. The state ranks third after Uttar Pradesh and Punjab in India in terms of wheat production. The largest producer of wheat in Haryana is Sirsa district. Other wheat producing districts are Faridabad, Kurukshetra, Jhajjar, Sonipat, Bhiwani, Gurugram and Mewat. Panchkula is lowest wheat producing district (0.4%) of Haryana. Wheat Research Institute (Indian Institute of Wheat and Barley Research) is located in Karnal district. The Haryana Government has waived of Vat Tax on wheat for beneficiaries of Antodya Anna Yojana (AAY) under targeted Public Distribution System (PDS).",
            detailsHindi: "गेहूं हरियाणा की महत्वपूर्ण खाद्यान्न फसल है। हरियाणा में इसकी खेती का सबसे बड़ा क्षेत्र है। हरियाणा गेहूं के उत्पादन में पहले स्थान पर है। राज्य का पहला ग्रेन बैंक पानीपत जिले में स्थापित किया गया है। राज्य के कुरुक्षेत्र जिले में एशिया का दूसरा सबसे बड़ा अनाज बाजार है। हरियाणा को गेहूं का कटोरा कहा जाता है क्योंकि यह अपनी आवश्यकता से अधिक मात्रा में गेहूं का उत्पादन करता है। आर्थिक सर्वेक्षण 2020-21 के अनुसार, 2019-20 में हरियाणा में गेहूं का उत्पादन 118.77 लाख टन था। गेहूं उत्पादन में राज्य भारत में उत्तर प्रदेश और पंजाब के बाद तीसरे स्थान पर है। हरियाणा का सबसे बड़ा गेहूं उत्पादक जिला सिरसा है। अन्य गेहूं उत्पादक जिले फरीदाबाद, कुरुक्षेत्र, झज्जर, सोनीपत, भिवानी, गुरुग्राम और मेवात हैं। पंचकूला सबसे कम गेहूं उत्पादक जिला (0.4%) है। गेहूं अनुसंधान संस्थान (भारतीय गेहूं और जौ अनुसंधान संस्थान) करनाल जिले में स्थित है।"
        },
        {
            name: "Rice",
            nameHindi: "चावल",
            conditions: "Rice grows well in tropical climate. It requires high temperature (more than 20°C) during its sowing time and 27°C during its ripening period. Rice fields should have water cover for around 75 days. Rice needs more heat and light for its growth, along with good irrigation facilities. Rice grows in variety of soils including loamy, clayey soil and gravels. But it grows best in alluvial soil. Plain lands or gentle slopes are suitable for the cultivation of rice. It requires 150-200 cms of rainfall. Therefore areas having rainfall less than 100 cms are extensively irrigated to cultivate rice in Haryana. It also needs fertilizers like green manure, ammonium sulphate, super sulphate, compost etc.",
            conditionsHindi: "चावल उष्णकटिबंधीय जलवायु में अच्छी तरह से बढ़ता है। इसकी बुवाई के समय उच्च तापमान (20°C से अधिक) और पकने की अवधि के दौरान 27°C तापमान की आवश्यकता होती है। चावल के खेतों में लगभग 75 दिनों तक पानी का आवरण होना चाहिए। चावल को अपनी वृद्धि के लिए अधिक गर्मी और प्रकाश की आवश्यकता होती है, साथ ही अच्छी सिंचाई सुविधाओं की भी आवश्यकता होती है। चावल दोमट, चिकनी मिट्टी और बजरी सहित विभिन्न प्रकार की मिट्टी में उगता है। लेकिन यह जलोढ़ मिट्टी में सबसे अच्छा उगता है। चावल की खेती के लिए मैदानी या हल्की ढलान वाली भूमि उपयुक्त होती है। इसके लिए 150-200 सेमी वर्षा की आवश्यकता होती है। इसलिए 100 सेमी से कम वर्षा वाले क्षेत्रों में हरियाणा में चावल उगाने के लिए व्यापक सिंचाई की जाती है।",
            details: "This is the second most important crop of Haryana after wheat. Rice is mostly cultivated in the North-Eastern and Central parts of the state. Haryana produces around 3.8% of the total rice production in India. As per the Economic Survey 2020-21 rice production in Haryana was 51.98 lakh tonnes in 2019-20. Karnal is the largest producer of rice in Haryana. It produces around 14.11% of the state's rice production. Basmati rice is exported from Kaithal and Karnal district of Haryana. Karnal is famous for producing best quality Basmati Rice in the world. Kaithal, Kurukshetra, and Jind are other highly rice producing districts and together along with Karnal, they are known as Rice Bowl of the State. They produce 50% of the rice in Haryana. Fatehabad, Ambala, Panipat, Sonipat, Yamunanagar and Sirsa are other rice producing districts of Haryana. Together they produce 41.4% of rice in Haryana. Haryana exports 60% of the Basmati rice in India.",
            detailsHindi: "यह गेहूं के बाद हरियाणा की दूसरी सबसे महत्वपूर्ण फसल है। चावल मुख्यतः राज्य के उत्तर-पूर्वी और मध्य भागों में उगाया जाता है। हरियाणा भारत के कुल चावल उत्पादन का लगभग 3.8% उत्पादन करता है। आर्थिक सर्वेक्षण 2020-21 के अनुसार 2019-20 में हरियाणा में चावल का उत्पादन 51.98 लाख टन था। करनाल हरियाणा में चावल का सबसे बड़ा उत्पादक है। यह राज्य के चावल उत्पादन का लगभग 14.11% उत्पादन करता है। बासमती चावल हरियाणा के कैथल और करनाल जिलों से निर्यात किया जाता है। करनाल दुनिया में सबसे अच्छी गुणवत्ता वाले बासमती चावल के उत्पादन के लिए प्रसिद्ध है। कैथल, कुरुक्षेत्र और जींद अन्य उच्च चावल उत्पादक जिले हैं और करनाल के साथ मिलकर इन्हें राज्य का चावल का कटोरा कहा जाता है। ये हरियाणा का 50% चावल उत्पादन करते हैं। फतेहाबाद, अंबाला, पानीपत, सोनीपत, यमुनानगर और सिरसा हरियाणा के अन्य चावल उत्पादक जिले हैं।"
        },
        {
            name: "Maize",
            nameHindi: "मक्का",
            conditions: "Average temperature required for maize cultivation is 25°C to 30°C and average rainfall is 50-100 cm. It requires deep loamy soil that is enriched with nitrogen. Maize grows well in plain areas and in plains with gentle slopes.",
            conditionsHindi: "मक्का की खेती के लिए औसत तापमान 25°C से 30°C और औसत वर्षा 50-100 सेमी होती है। इसके लिए गहरी दोमट मिट्टी की आवश्यकता होती है जो नाइट्रोजन से समृद्ध हो। मक्का मैदानी क्षेत्रों और हल्की ढलान वाले मैदानों में अच्छी तरह उगता है।",
            details: "It is cultivated in places those receive less rainfall. It is also planted with Jowar and Bajra in many places. Panchkula district is the highest producer of maize in Haryana. Important maize producing districts are Panchkula, Ambala, Sonipat, Rohtak, Kurukshetra, Karnal and Kaithal.",
            detailsHindi: "यह उन स्थानों पर उगाया जाता है जहां कम वर्षा होती है। इसे कई स्थानों पर ज्वार और बाजरा के साथ भी लगाया जाता है। पंचकूला जिला हरियाणा में मक्का का सबसे अधिक उत्पादक है। महत्वपूर्ण मक्का उत्पादक जिले पंचकूला, अंबाला, सोनीपत, रोहतक, कुरुक्षेत्र, करनाल और कैथल हैं।"
        },
        {
            name: "Jowar",
            nameHindi: "ज्वार",
            conditions: "It requires 25°C - 30°C temperature and 60 or even less than 60 cm of rainfall. Jowar grows well even in less fertile soils like red, yellow, light and deep loamy soil. It also grows in alluvial soil. Both gentle sloping and plain areas are suited for its cultivation.",
            conditionsHindi: "इसके लिए 25°C - 30°C तापमान और 60 या 60 सेमी से भी कम वर्षा की आवश्यकता होती है। ज्वार कम उपजाऊ मिट्टी जैसे लाल, पीली, हल्की और गहरी दोमट मिट्टी में भी अच्छी तरह उगता है। यह जलोढ़ मिट्टी में भी उगता है। हल्की ढलान वाले और मैदानी क्षेत्र दोनों इसकी खेती के लिए उपयुक्त हैं।",
            details: "It is grown in the dry regions with average or medium rainfall. Largest jowar producing district of Haryana is Rohtak. It also grows well in the districts of Jhajjar, Sonipat and Palwal.",
            detailsHindi: "यह शुष्क क्षेत्रों में औसत या मध्यम वर्षा के साथ उगाया जाता है। हरियाणा का सबसे बड़ा ज्वार उत्पादक जिला रोहतक है। यह झज्जर, सोनीपत और पलवल जिलों में भी अच्छी तरह उगता है।"
        },
        {
            name: "Bajra",
            nameHindi: "बाजरा",
            conditions: "This crop requires less rainfall (40-50 cms) and grows within 2-3 months. It is sown after first monsoon showers. It requires 25°C - 30°C of temperature and light sunshine during sowing. It grows well in sandy, loam, light sandy and sandy soil. Bajra grows well in 30 to 50 cm rainfall area covered with loamy soil. Bajra grows in both plain and plateau regions.",
            conditionsHindi: "इस फसल को कम वर्षा (40-50 सेमी) की आवश्यकता होती है और यह 2-3 महीनों में बढ़ जाती है। इसे पहली मानसून बौछारों के बाद बोया जाता है। बुवाई के दौरान इसके लिए 25°C - 30°C तापमान और हल्की धूप की आवश्यकता होती है। यह रेतीली, दोमट, हल्की रेतीली और बलुई मिट्टी में अच्छी तरह उगता है। बाजरा 30 से 50 सेमी वर्षा वाले क्षेत्र में दोमट मिट्टी के साथ अच्छी तरह उगता है। बाजरा मैदानी और पठारी दोनों क्षेत्रों में उगता है।",
            details: "It is considered as a coarse grain and is mainly eaten by lower income groups. It is also used as a fodder crop. Bajra is one of the indigenous plants of Haryana as hot and dry climatic conditions required for its growth are found here. Mahendragarh is the largest producer of bajra in the state. Bajra is also grown in the districts of Bhiwani, Gurugram, Jhajjar, Sirsa, Hisar, Fatehabad, Jind, Rohtak and Faridabad. Mahendragarh produces 25.09% of the state production of bajra. It grows well in semi arid regions of Mahendragarh.",
            detailsHindi: "इसे मोटा अनाज माना जाता है और मुख्य रूप से निम्न आय वर्ग के लोगों द्वारा खाया जाता है। इसका उपयोग चारे की फसल के रूप में भी किया जाता है। बाजरा हरियाणा के मूल पौधों में से एक है क्योंकि इसकी वृद्धि के लिए आवश्यक गर्म और शुष्क जलवायु परिस्थितियाँ यहाँ पाई जाती हैं। महेंद्रगढ़ राज्य में बाजरा का सबसे बड़ा उत्पादक है। बाजरा भिवानी, गुरुग्राम, झज्जर, सिरसा, हिसार, फतेहाबाद, जींद, रोहतक और फरीदाबाद जिलों में भी उगाया जाता है। महेंद्रगढ़ राज्य के बाजरा उत्पादन का 25.09% उत्पादन करता है।"
        },
        {
            name: "Barley",
            nameHindi: "जौ",
            conditions: "It grows in sub-tropical climate. It is more tolerant to wheat crop. It can be grown on various kind of soils. It requires 12 - 15°C temperature during growing period and 30°C during maturity. It is grown on plain and medium loam soil and in rain fed plains.",
            conditionsHindi: "यह उपोष्णकटिबंधीय जलवायु में उगता है। यह गेहूं की फसल की तुलना में अधिक सहनशील है। इसे विभिन्न प्रकार की मिट्टी पर उगाया जा सकता है। बढ़ती अवधि के दौरान इसके लिए 12-15°C तापमान और परिपक्वता के दौरान 30°C की आवश्यकता होती है। यह मैदानी और मध्यम दोमट मिट्टी पर और वर्षा आधारित मैदानों में उगाया जाता है।",
            details: "Barley is grown in Haryana from ancient times. The climatic conditions of the state is suitable for its cultivation. Barley is called 'Yav' in Sanskrit. It is also used in religious ceremonies. In 2017-18 barley production in Haryana was 1.58 lakh tonnes. Bhiwani is the highest producer of barley in Haryana with a state share of 23.35%. The highest producing districts of Barley are Bhiwani, Mahendragarh, Hisar, Sirsa and Jhajjar.",
            detailsHindi: "जौ हरियाणा में प्राचीन काल से उगाया जाता है। राज्य की जलवायु परिस्थितियाँ इसकी खेती के लिए उपयुक्त हैं। जौ को संस्कृत में 'यव' कहा जाता है। इसका उपयोग धार्मिक समारोहों में भी किया जाता है। 2017-18 में हरियाणा में जौ का उत्पादन 1.58 लाख टन था। भिवानी हरियाणा में जौ का सबसे अधिक उत्पादक है जिसका राज्य में 23.35% हिस्सा है। जौ के सबसे अधिक उत्पादक जिले भिवानी, महेंद्रगढ़, हिसार, सिरसा और झज्जर हैं।"
        },
        {
            name: "Gram",
            nameHindi: "चना",
            conditions: "It requires mild cool climate with 20 - 25°C temperature and 40-50 cms rainfall. It can be grown even in less fertile soil.",
            conditionsHindi: "इसके लिए हल्की ठंडी जलवायु की आवश्यकता होती है जिसमें 20-25°C तापमान और 40-50 सेमी वर्षा हो। इसे कम उपजाऊ मिट्टी में भी उगाया जा सकता है।",
            details: "Gram is sown both as a Rabi and as a Kharif crop. It replenishes the soil with nitrogen. Gram is mostly produced in the Western region of Haryana. Bhiwani is the largest producer of gram in Haryana with a state share of 54.42%. It is also produced in Mahendragarh, Bhiwani, Hisar, Sirsa and Rohtak districts of the state.",
            detailsHindi: "चना रबी और खरीफ दोनों फसलों के रूप में बोया जाता है। यह मिट्टी को नाइट्रोजन से पुनःपूर्ति करता है। चना अधिकतर हरियाणा के पश्चिमी क्षेत्र में उत्पादित किया जाता है। भिवानी हरियाणा में चने का सबसे बड़ा उत्पादक है जिसका राज्य में 54.42% हिस्सा है। यह राज्य के महेंद्रगढ़, भिवानी, हिसार, सिरसा और रोहतक जिलों में भी उत्पादित किया जाता है।"
        }
    ];

    // Section 6: Cash Crops
    const cashCrops = [
        {
            name: "Sugarcane",
            nameHindi: "गन्ना",
            conditions: "Sugar cane is a tropical plant therefore, it requires 20°C temperature moist climate during sowing and 20°C - 30°C during its growing period. Much cold and frost is not good for its growth. It requires an average rainfall of 100-150 cms which is suitable for its cultivation. It requires fertile soil that is rich in lime and phosphorus. It needs compost, ammonium sulphate, super sulphate and green manure. It also reduces the fertility of the soil so it is mainly grown in richly drained soils of river valleys. Plain land or gentle slope is ideal for its cultivation.",
            conditionsHindi: "गन्ना एक उष्णकटिबंधीय पौधा है, इसलिए बुवाई के दौरान इसे 20°C तापमान और आर्द्र जलवायु की आवश्यकता होती है और बढ़ती अवधि के दौरान 20°C - 30°C की आवश्यकता होती है। अधिक ठंड और पाला इसकी वृद्धि के लिए अच्छा नहीं है। इसकी खेती के लिए औसत वर्षा 100-150 सेमी उपयुक्त होती है। इसके लिए उपजाऊ मिट्टी की आवश्यकता होती है जो चूने और फास्फोरस से भरपूर हो।",
            details: "Haryana is one of the major sugarcane producing states in India. It is an annual crop. This is a cash crop from which sugar and jaggery are made. As per the Economic Survey 2020-21 the Sugarcane production in Haryana was 77.30 lakh tonnes in 2019-20. It covers maximum area in the state. Haryana produces around 3% of the sugarcane produced in India. It is mostly produced in Yamuna basin in the districts of Yamunanagar, Ambala, Karnal, Kurukshetra, Jind, Sonipat and Rohtak are other major sugarcane producing districts of the state. Yamunanagar is the largest producer and produces around one-third of the sugarcane in the state.",
            detailsHindi: "हरियाणा भारत के प्रमुख गन्ना उत्पादक राज्यों में से एक है। यह एक वार्षिक फसल है। यह एक नकदी फसल है जिससे चीनी और गुड़ बनाया जाता है। आर्थिक सर्वेक्षण 2020-21 के अनुसार 2019-20 में हरियाणा में गन्ने का उत्पादन 77.30 लाख टन था। यह राज्य में सबसे अधिक क्षेत्र को कवर करता है। हरियाणा भारत में उत्पादित गन्ने का लगभग 3% उत्पादन करता है। यह मुख्यतः यमुना बेसिन में उत्पादित किया जाता है। यमुनानगर, अंबाला, करनाल, कुरुक्षेत्र, जींद, सोनीपत और रोहतक राज्य के अन्य प्रमुख गन्ना उत्पादक जिले हैं। यमुनानगर सबसे बड़ा उत्पादक है और राज्य में गन्ने का लगभग एक-तिहाई उत्पादन करता है।"
        },
        {
            name: "Cotton",
            nameHindi: "कपास",
            conditions: "Cotton is a tropical crop. It requires 20°C - 30°C of temperature. In Haryana, cotton is cultivated in regions having temperature in between 24°C - 27°C. It requires adequate bright sunshine and 50-100 cms of rainfall. It is cultivated in regions receiving 30-50 cms of rainfall in Haryana. Irrigation facilities are drawn from different canals of Haryana. It is grown in deep loam soil which has a fine texture and plain or gently sloping lands. Cotton needs nitrogenous fertilizers.",
            conditionsHindi: "कपास एक उष्णकटिबंधीय फसल है। इसके लिए 20°C - 30°C तापमान की आवश्यकता होती है। हरियाणा में, कपास 24°C - 27°C के बीच तापमान वाले क्षेत्रों में उगाया जाता है। इसके लिए पर्याप्त तेज धूप और 50-100 सेमी वर्षा की आवश्यकता होती है। हरियाणा में इसे 30-50 सेमी वर्षा वाले क्षेत्रों में उगाया जाता है।",
            details: "Cotton is an ancient crop. It has been cultivated since Rigvedic period. Cotton is also known as White Gold. The state is one of the major producer of cotton in India. Two types of cotton i.e. American variety and Indian variety, are grown in Haryana. The fibres of American variety are long, shiny and more durable. Fibres of Indian variety are small, less shiny and less durable. Coarse clothes are made with this cotton. As per the Economic Survey 2020-21, cotton production in Haryana was 24.85 lakh bales in 2019-20. Sirsa is the highest producer of cotton in Haryana. Cotton is also grown in Hisar, Fatehabad, Jind, Rohtak and Bhiwani districts.",
            detailsHindi: "कपास एक प्राचीन फसल है। इसकी खेती ऋग्वेद काल से होती रही है। कपास को सफेद सोना भी कहा जाता है। राज्य भारत में कपास के प्रमुख उत्पादकों में से एक है। हरियाणा में दो प्रकार के कपास उगाए जाते हैं - अमेरिकी किस्म और भारतीय किस्म। अमेरिकी किस्म के रेशे लंबे, चमकदार और अधिक टिकाऊ होते हैं। भारतीय किस्म के रेशे छोटे, कम चमकदार और कम टिकाऊ होते हैं। इस कपास से मोटे कपड़े बनाए जाते हैं। आर्थिक सर्वेक्षण 2020-21 के अनुसार, 2019-20 में हरियाणा में कपास का उत्पादन 24.85 लाख गांठ था। सिरसा हरियाणा में कपास का सबसे अधिक उत्पादक है।"
        },
        {
            name: "Mustard",
            nameHindi: "सरसों",
            conditions: "Mustard grows well in tropical and sub-tropical areas. It requires about 25-40 cms of rainfall, 15°C - 20°C temperature and loamy soil. Irrigation is also needed in dry regions for its cultivation.",
            conditionsHindi: "सरसों उष्णकटिबंधीय और उपोष्णकटिबंधीय क्षेत्रों में अच्छी तरह उगती है। इसके लिए लगभग 25-40 सेमी वर्षा, 15°C - 20°C तापमान और दोमट मिट्टी की आवश्यकता होती है। शुष्क क्षेत्रों में इसकी खेती के लिए सिंचाई की भी आवश्यकता होती है।",
            details: "Mustard is the most important oilseed crop in the state. It is a Rabi crop. As per the Economic Survey 2020-21, total oilseed production in Haryana was 11.75 lakh tonnes in 2019-20. Bhiwani is the largest producer of mustard (27.67%) in Haryana. Other important districts are Mahendragarh, Sirsa, Jind, Rewari, Rohtak, Sonipat and Gurugram respectively.",
            detailsHindi: "सरसों राज्य की सबसे महत्वपूर्ण तिलहन फसल है। यह एक रबी फसल है। आर्थिक सर्वेक्षण 2020-21 के अनुसार, 2019-20 में हरियाणा में कुल तिलहन उत्पादन 11.75 लाख टन था। भिवानी हरियाणा में सरसों का सबसे बड़ा उत्पादक (27.67%) है। अन्य महत्वपूर्ण जिले महेंद्रगढ़, सिरसा, जींद, रेवाड़ी, रोहतक, सोनीपत और गुरुग्राम हैं।"
        }
    ];

    // Section 7: Crop Producing Districts Table (Complete)
    const cropProducingDistricts = [
        { district: "Ambala", crops: "Wheat, Rice, Maize, Gram" },
        { district: "Yamunanagar", crops: "Wheat, Sugarcane, Maize, Gram, Sunflower" },
        { district: "Panchkula", crops: "Rice, Wheat, Gram, Maize" },
        { district: "Kaithal", crops: "Wheat, Rice" },
        { district: "Kurukshetra", crops: "Wheat, Rice (Basmati), Sugarcane" },
        { district: "Karnal", crops: "Sunflower, Rice (Basmati), Sugarcane" },
        { district: "Rohtak", crops: "Jowar, Bajra, Wheat, Sugarcane, Cotton, Gram, Maize" },
        { district: "Sonipat", crops: "Jowar, Bajra, Wheat, Rice, Sunflower, Mushroom, Sugarcane, Pulses" },
        { district: "Gurugram", crops: "Jowar, Bajra, Wheat, Barley, Gram" },
        { district: "Jhajjar", crops: "Wheat, Gram, Rice" },
        { district: "Faridabad", crops: "Wheat, Bajra, Mustard" },
        { district: "Palwal", crops: "Wheat, Bajra, Gram" },
        { district: "Mewat", crops: "Wheat, Bajra, Mustard" },
        { district: "Rewari", crops: "Wheat, Rice, Gram" },
        { district: "Mahendragarh", crops: "Wheat, Mustard, Gram, Bajra" },
        { district: "Hisar", crops: "Wheat, Rice, Cotton, Gram, Oilseed, Pulses" },
        { district: "Bhiwani", crops: "Wheat, Rice, Cotton, Gram, Mustard" },
        { district: "Fatehabad", crops: "Wheat, Rice, Cotton, Gram" },
        { district: "Jind", crops: "Wheat, Rice, Bajra, Cotton, Oilseed" },
        { district: "Charkhi-Dadri", crops: "Wheat, Rice, Cotton, Gram, Mustard" },
        { district: "Sirsa", crops: "Wheat, Rice, Cotton, Gram, Mustard" }
    ];

    // Section 8: Largest Crop Producing Districts
    const largestProducingDistricts = [
        { crop: "Wheat", district: "Sirsa" },
        { crop: "Rice", district: "Karnal" },
        { crop: "Bajra", district: "Mahendragarh" },
        { crop: "Cotton", district: "Sirsa" },
        { crop: "Sugarcane", district: "Yamunanagar" },
        { crop: "Sunflower", district: "Ambala" },
        { crop: "Gram", district: "Bhiwani" },
        { crop: "Jowar", district: "Rohtak" }
    ];

    // Section 9: Targeted Area, Production and Average Yield Table
    const cropProductionData = [
        { crop: "Rice", area: "1328.14", production: "4129.33", yield: "3231" },
        { crop: "Jowar", area: "48.7", production: "25.8", yield: "530" },
        { crop: "Maize", area: "12.2", production: "36.0", yield: "2951" },
        { crop: "Bajra", area: "439.2", production: "888.0", yield: "2022" },
        { crop: "Kharif Pulses", area: "50.1", production: "27.1", yield: "541" },
        { crop: "Wheat", area: "2534.0", production: "11980.0", yield: "4728" },
        { crop: "Gram", area: "60.0", production: "67.0", yield: "1117" },
        { crop: "Barley", area: "22.0", production: "52.0", yield: "2364" },
        { crop: "Rabi Pulses", area: "8.0", production: "8.0", yield: "1000" },
        { crop: "Sugarcane", area: "113.3", production: "9155.0", yield: "80803" },
        { crop: "Cotton (Lint)", area: "738.4", production: "2158.3", yield: "497" },
        { crop: "Kharif Oil Seed", area: "10.7", production: "10.3", yield: "963" },
        { crop: "Rabi Oil Seed", area: "650.0", production: "1199.0", yield: "1845" }
    ];

    // Section 10: Horticulture Complete Data
    const horticulture = {
        titleHindi: "हरियाणा में बागवानी",
        titleEnglish: "Horticulture in Haryana",
        contentHindi: "हरियाणा बागवानी क्षेत्र में तेजी से उभरते अग्रणी राज्यों में से एक है। राज्य में लगभग सभी प्रकार के फल, सब्जियां, मसाले, मशरूम और फूल उगाए जाते हैं। बागवानी खेती के कुल क्षेत्रफल में से लगभग 85% क्षेत्र सब्जियों के अंतर्गत है और शेष फलों, मसालों आदि के अंतर्गत है। आर्थिक सर्वेक्षण 2020-21 के अनुसार, बागवानी फसलों के तहत कुल क्षेत्रफल 4.78 लाख हेक्टेयर है और 2019-20 में राज्य में बागवानी फसलों का कुल उत्पादन 80.67 लाख मीट्रिक टन था। बागवानी के विकास को बढ़ावा देने के लिए सरकार ने 1990-91 में एक अलग बागवानी विभाग बनाया।",
        contentEnglish: "Haryana is fast emerging as one of the leading states in horticulture sector. In the state, almost all types of fruits, vegetables, spices, mushroom and flowers are grown. Out of the total area under horticulture cultivation, around 85% area is under vegetables and the rest is under fruits, spices, etc. According to Economic Survey 2020-21, the total area under the Horticulture crops is 4.78 lakh hectares total production on Horticulture crops in the state was 80.67 lakh metric tonnes in 2019-20. With a view to give a boost to the growth of horticulture Government created a separate Department of Horticulture in 1990-91."
    };

    // Section 10a: Fruits Data
    const fruitsData = {
        titleHindi: "फल उत्पादन",
        titleEnglish: "Fruit Production",
        contentHindi: "2019-20 में हरियाणा में फलों की खेती के तहत कुल क्षेत्रफल 67720 हेक्टेयर था जिसका कुल उत्पादन 11.97 लाख मीट्रिक टन था। बागवानी विभाग फलों की खेती के बेहतर विकास के लिए क्लस्टर दृष्टिकोण को प्रोत्साहित कर रहा है। आम, अमरूद, पपीता और खट्टे फल जैसे किन्नू, आंवला राज्य में उगाए जाने वाले कुछ महत्वपूर्ण फल हैं। हरियाणा का सबसे बड़ा फल उत्पादक जिला सिरसा है। यह हरियाणा में संतरा, किन्नू और अंगूर का सबसे बड़ा उत्पादक भी है। सोनीपत अमरूद का सबसे बड़ा उत्पादक है। फतेहाबाद हरियाणा में सेब और केले का सबसे बड़ा उत्पादक है।",
        contentEnglish: "Total area under fruit cultivation in Haryana was 67720 hectare in 2019-20 with a total production of 11.97 lakh metric tonnes. The Department of Horticulture is encouraging cluster approach for the better development of fruit cultivation. Mango, guava, papaya and citrus fruits like kinnow, amla are some of the important fruits grown in the state. Largest fruit producing district of Haryana is Sirsa. It is also the largest producer of orange, kinnow and grapes in Haryana. Sonipat is the largest producer of Guava. Fatehabad is the largest producer of Apple and Banana in Haryana."
    };

    // Section 10b: Mango Cultivation
    const mangoData = {
        titleHindi: "आम की खेती",
        titleEnglish: "Mango Cultivation",
        contentHindi: "हरियाणा में उगाया जाने वाला सबसे बड़ा फल आम है। यह फलों के तहत कुल क्षेत्रफल के 19% से अधिक क्षेत्र में उगाया जाता है। हरियाणा में उगाई जाने वाली आम की प्रमुख किस्में दशहरी, चौसा, लंगड़ा, मल्लिका और रामकेला हैं। अरुणिका और अंबिका की नई किस्में भी हरियाणा में उगाई जाती हैं। यमुनानगर राज्य में आम का सबसे बड़ा उत्पादक है, उसके बाद अंबाला, कुरुक्षेत्र, करनाल और पंचकूला का स्थान है।",
        contentEnglish: "The largest fruit cultivated in Haryana is Mango. It is grown in more than 19% of the total area under fruits. Major varieties of mangoes grown in Haryana are Dashehari, Chausa, Langra, Mallika and Ramkela. New varieties of Arunika and Ambika are also grown in Haryana. Yamunanagar is the largest producer of mangoes in the state followed by Ambala, Kurukshetra, Karnal and Panchkula."
    };

    // Section 10c: Kinnow Cultivation
    const kinnowData = {
        titleHindi: "किन्नू की खेती",
        titleEnglish: "Kinnow Cultivation",
        contentHindi: "हरियाणा में किन्नू की खेती लोकप्रियता प्राप्त कर रही है। इसे कम पानी की आवश्यकता होती है और इसे राज्य के अर्ध-शुष्क क्षेत्रों में उगाया जा सकता है। हरियाणा में किन्नू का उत्पादन 22 टन प्रति हेक्टेयर है। हर साल इसकी खेती के तहत अधिक हेक्टेयर भूमि लगाई जा रही है। फसल दिसंबर में बाजार में आती है और फरवरी तक जारी रहती है। किन्नू के प्रमुख उत्पादक सिरसा, फतेहाबाद, हिसार, भिवानी और झज्जर जिले हैं।",
        contentEnglish: "Kinnow cultivation in Haryana is gaining popularity. It requires less water and can be grown in semi-arid regions of the state. Kinnow production in Haryana is 22 tonnes per hectare. Every year more hectares of land is put under its cultivation. The crop arrives in the market in December and continue till February. Leading producers of Kinnow are Sirsa, Fatehabad, Hisar, Bhiwani and Jhajjar districts."
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
        titleHindi: "सब्जी उत्पादन",
        titleEnglish: "Vegetable Production",
        contentHindi: "2019-20 में सब्जी उत्पादन के तहत कुल क्षेत्रफल 397295 हेक्टेयर था, जिसका उत्पादन 67.38 लाख मीट्रिक टन था। हरियाणा में उगाई जाने वाली मुख्य सब्जियाँ आलू, फूलगोभी, गाजर, टमाटर, मूली और प्याज हैं। हरियाणा में सबसे अधिक उगाई जाने वाली सब्जी आलू है। राज्य में सब्जियों का सबसे बड़ा उत्पादन सोनीपत से आता है। शलजम हरियाणा में बड़े पैमाने पर उगाया जाता है जो भूमि की उर्वरता को बढ़ाता है।",
        contentEnglish: "Total area under vegetable cultivation was 397295 hectares in 2019-20, with a production of 67.38 lakh metric tonnes. The main vegetables grown in Haryana are potato, cauliflower, carrot, tomato, radish and onion. The largest cultivated vegetable in Haryana is potato. The largest production of vegetables in the state come from Sonipat. Turnip is extensively cultivated in Haryana which enhances the fertility of the land."
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
        titleHindi: "मशरूम की खेती",
        titleEnglish: "Mushroom Cultivation",
        contentHindi: "हरियाणा में मशरूम (खुंभी) की खेती बढ़ रही है। इसके लिए कम भूमि और पानी की आवश्यकता होती है। देश में इसकी उच्च मांग को देखते हुए मशरूम उगाना लाभदायक है क्योंकि यह प्रोटीन, विटामिन, फोलिक एसिड, आयरन आदि का एक समृद्ध स्रोत है। हरियाणा सरकार ने चार जिलों - कैथल, जींद, रेवाड़ी, महेंद्रगढ़ में मशरूम उत्पादन को बढ़ावा देने के लिए ₹50 लाख की सब्सिडी देकर एक नई योजना शुरू की है। सोनीपत हरियाणा और भारत में मशरूम का सबसे बड़ा उत्पादक है। वर्ष 2019-20 में मशरूम का उत्पादन 12718 मीट्रिक टन था।",
        contentEnglish: "Mushroom (Khumbi) cultivation in Haryana is rising. It requires less land and water. It is profitable to grow mushrooms seeing its high demand in country as it is a rich source of protein, vitamin, folic acid, iron, etc. The Haryana government has launched a new scheme for promoting mushroom production in four districts, viz, Kaithal, Jind, Rewari, Mahendragarh by giving ₹50 lakh as subsidy. Sonipat is the largest producer of mushrooms in Haryana and also in India. In the year 2019-20 the production of mushroom was 12718 metric tonnes."
    };

    // Section 10h: Top Producers of Fruits and Vegetables
    const topProducersTable = [
        { item: "Mango", producer: "Karnal" },
        { item: "Apple", producer: "Fatehabad" },
        { item: "Banana", producer: "Fatehabad" },
        { item: "Gooseberry", producer: "Sirsa" },
        { item: "Apricot", producer: "Sirsa" },
        { item: "Citrus fruit", producer: "Sonipat" },
        { item: "Beetroot", producer: "Kurukshetra" },
        { item: "Potato", producer: "Kurukshetra, Sonipat" },
        { item: "Onion", producer: "Ambala" },
        { item: "Mushroom", producer: "Sonipat" }
    ];

    // Section 10i: Spices Data
    const spicesData = {
        titleHindi: "मसाले",
        titleEnglish: "Spices",
        contentHindi: "हरी मिर्च, लहसुन, धनिया, मेथी और हल्दी हरियाणा में उगाए जाने वाले कुछ मसाले हैं। 2019-20 में मसालों की खेती के तहत कुल क्षेत्रफल 9660 हेक्टेयर था जिसका उत्पादन 0.79 लाख मीट्रिक टन था। लहसुन हरियाणा में सबसे अधिक उगाया जाने वाला मसाला है। हरियाणा में मसालों के कुल उत्पादन का लगभग 40% यमुनानगर जिले से आता है।",
        contentEnglish: "Green chillies, garlic, coriander, methi and turmeric are some of the spices grown in Haryana. Total area under the spices cultivation was 9660 hectares in 2019-20 with a production of 0.79 lakh metric tonnes. Garlic is the largest cultivated spice in Haryana. Around 40% of the total production of spices in Haryana comes from Yamunanagar district."
    };

    // Section 10j: Spices Area and Production Table
    const spicesAreaProduction = [
        { name: "Ginger", area: "749", production: "2864" },
        { name: "Garlic", area: "3096", production: "34284" },
        { name: "Fenugreek", area: "2083", production: "23710" },
        { name: "Others", area: "4407", production: "51433" }
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
        titleHindi: "औषधीय और सुगंधित पौधे",
        titleEnglish: "Medicinal and Aromatic Plants",
        contentHindi: "हरियाणा राज्य का एलोवेरा, स्टेविया, गुग्गल, तुलसी, मुलेठी, अर्जुन, गिलोय आदि जैसे औषधीय पौधों की खेती में सीमित हिस्सा है। राज्य औषधीय पादप बोर्ड का गठन 13 अगस्त, 2002 को किया गया था। राज्य औषधीय पादप बोर्ड पंचकूला में स्थित है। एलोवेरा हरियाणा में सबसे अधिक उगाया जाने वाला औषधीय पौधा है। राज्य में बड़ी संख्या में हर्बल पार्क हैं - 59 हर्बल पार्क। सबसे अधिक हर्बल पार्क रेवाड़ी (15) में हैं, उसके बाद महेंद्रगढ़ (11) में। वर्ल्ड हर्बल फॉरेस्ट मोरनी हिल्स में विकसित किया जा रहा है।",
        contentEnglish: "Haryana state has a limited share in the cultivation of medicinal plants like Aloe vera, Stevia, Guggal, Tulsi, Mulethi, Arjun, Giloy, etc. The State Medicinal Plants Board was formed on 13th August, 2002. State Medicinal Plant Board is located in Panchkula. Aloe vera is the largest cultivated medicinal plant in Haryana. The state has large number of herbal parks i.e., 59 herbal parks. Highest number of herbal parks are in Rewari (15) followed by Mahendragarh (11). World Herbal Forest is being developed in Morni Hills."
    };

    // Section 10m: Medicinal Plants Area and Production
    const medicinalAreaProduction = [
        { name: "Aloe vera", area: "138", production: "3325" },
        { name: "Stevia", area: "9", production: "40" },
        { name: "Arandi", area: "0", production: "0" },
        { name: "Other", area: "144", production: "221" }
    ];

    // Section 10n: Floriculture Data
    const floriculture = {
        titleHindi: "हरियाणा में पुष्पोत्पादन",
        titleEnglish: "Floriculture in Haryana",
        contentHindi: "हरियाणा में मुख्य रूप से ग्लेडियोलस, गेंदा, गुलाब और ट्यूबरोज उगाए जाते हैं। आर्थिक सर्वेक्षण 2020-21 के अनुसार, 2019-20 में राज्य में फूलों की खेती के तहत कुल क्षेत्रफल 3478 हेक्टेयर था जिसका उत्पादन 0.39 लाख मीट्रिक टन था। हरियाणा में सबसे अधिक उगाया जाने वाला फूल ग्लेडियोलस है और इसका सबसे बड़ा उत्पादक फरीदाबाद है। हरियाणा सरकार किसानों को गरबेरा फूलों की खेती के लिए 50% अनुदान दे रही है। शब्बाद (कुरुक्षेत्र) शहर फूलों की खेती से होने वाली उच्च आय के लिए लोकप्रियता प्राप्त कर रहा है। हरियाणा के फूल दिल्ली, चंडीगढ़, पंजाब, हिमाचल प्रदेश और राजस्थान भेजे जाते हैं।",
        contentEnglish: "Among the flowers Gladiolus, Marigold, Rose and Tuber rose are mainly cultivated in Haryana. As per the Economic Survey of 2020-21 total area under the flower cultivation in the state was 3478 hectare in 2019-20 with a production of 0.39 lakh metric tonnes. Largest cultivated flower in Haryana is Gladiolus and the largest producer of it is Faridabad. Haryana State Government is giving 50% grants to farmers for Gerbera cultivation. Shabbad town of Kurukshetra is gaining popularity for the high income it earn due to flower cultivation. Flowers from Haryana are sent to Delhi, Chandigarh, Punjab, Himachal Pradesh and Rajasthan."
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
        { name: "Haryana Cooperative Agriculture and Village Development Bank", established: "1st November, 1966", details: "Provides long term loans to farmers. 90% finance by NABARD, 5% by State Govt, 5% by Central Govt." },
        { name: "Haryana State Cooperative Bank Limited (HARCO)", established: "1st November, 1966", details: "Provides finance to farmers, marginal labourers and industrialists. Has 13 branches and 2 extension boards." },
        { name: "Haryana State Cooperative and Marketing Federation (HAFED)", established: "1st November, 1966", details: "Main office at Panchkula. Provides clean and hygienic food products like basmati rice, mustard oil, refined oil, soybean oil, wheat, sugar, turmeric." },
        { name: "Haryana State Cooperative Sugar Mills Limited", established: "1966", details: "Objective to set up new sugar mills and improve functioning of old mills." },
        { name: "Haryana Warehousing Corporation", established: "1st November, 1967", details: "Provides scientific warehousing facilities. Started with 16 warehouses (7000 MT capacity). By 2019: 11 warehouses (15.25 lakh MT capacity). Runs Inland Container Depot in Bawal (Rewari)." },
        { name: "Haryana State Agriculture Marketing Board (HSAMB)", established: "1st August, 1969", details: "Headquarters at Panchkula. Has 113 main markets, 168 sub-markets, 196 purchase centres. Developing Agro Shopping Malls in Karnal, Rohtak, Panipat, Panchkula." },
        { name: "Haryana Seed Development Corporation (HSDC)", established: "1974", details: "6 seed processing plants at Umri, Hisar, Sirsa, Yamunanagar, Tohana, Pataudi. Sells seeds under 'Haryana Seeds' brand through 74 sale counters." },
        { name: "Haryana Land Reclamation and Development Corporation (HLRDC)", established: "27th March, 1974", details: "Located at Panchkula with regional offices at Hisar, Karnal, Kaithal. Provides 50% grants for gypsum requirements." },
        { name: "Haryana State Seed Certification Agency (HSSCA)", established: "6th April, 1976", details: "Head office at Panchkula, regional offices in Hisar, Karnal, Sirsa, Rohtak. Certifies seeds under Seeds Act, 1966." },
        { name: "Haryana Farmer Commission", established: "15th July, 2012", details: "First Commissioner: RS Paroda. Head office in Hisar. Camp office in Gurugram." }
    ];

    // Section 12: Government Schemes for Agriculture (Complete)
    const govtSchemes = [
        { name: "Mukhya Mantri Kisan Evam Khetihar Mazdoor Jiwan Suraksha Yojana", launched: "2014", details: "Insurance cover for farmers. ₹5 lakh compensation for death, ₹2.5 lakh for disability." },
        { name: "Seed Scheme", launched: "2011", details: "Implemented by HSDC. Subsidies for purchase of hybrid/certified seeds of wheat, barley, paddy, bajra." },
        { name: "Weather Based Crop Insurance Scheme", launched: "2009-10", details: "Implemented in 12 districts. Based on weather parameters - deficit rainfall, excess rainfall, temperature, dry days." },
        { name: "Indo-Dutch Project", launched: "1994", details: "Collaboration with Netherlands. Running in Lakhan Majra (Rohtak), Safidon (Jind), Ghadwal and Gohana (Sonipat)." },
        { name: "Tele Agriculture", launched: "-", details: "Agricultural helpline for weather, agricultural developments, new technology, seeds information." },
        { name: "E-NAM", launched: "-", details: "e-National Agriculture Market. 54 mandis linked with e-NAM. e-Kharid project for digitisation of foodgrain procurement." },
        { name: "Pradhan Mantri Kisan Maandhan Yojana", launched: "12th September, 2019", details: "Farmers above 60 years get ₹3000 pension. Contribution between ₹55-200 per month." },
        { name: "Pradhan Mantri Kisan Samman Nidhi", launched: "2019", details: "₹6000 per year to each farmer in three installments." },
        { name: "Pradhan Mantri Fasal Bima Yojana", launched: "18th February, 2016", details: "Farmer premium: 1.5% for Rabi, 2% for Kharif, 5% for horticultural crops." },
        { name: "Soil Health Card Scheme", launched: "19th February, 2015", details: "10.74 crore cards in first phase (2015-17), 11.69 crore in second phase (2017-19)." },
        { name: "National Food Security Mission", launched: "2007-08", details: "60:40 centre-state sharing. 7 districts for wheat, 5 for pulses." },
        { name: "Rastriya Krishivikas Yojana", launched: "2007-08", details: "60:40 centre-state sharing. Irrigation through underground pipeline, sprinklers, soil health improvement." },
        { name: "National Organic Farming Project", launched: "10th Five Year Plan (2002-07)", details: "Regional centre at Panchkula." },
        { name: "Crop Diversification Scheme", launched: "-", details: "Encourages sowing maize, moong and other pulses along with rice and wheat." },
        { name: "Bhavantar Bhargavee Yojana", launched: "30th December, 2017", details: "Compensation for price drop of tomato, potato, onion, cauliflower. First launched at Ganger village in Karnal." },
        { name: "Modified National Agricultural Insurance Scheme (MNAIS)", launched: "-", details: "Started in Karnal and Kaithal. 40-50% grant provision. Covers Wheat and Rice." }
    ];

    // Section 13: Agricultural Awards
    const agriculturalAwards = [
        { name: "Jan Nayak Chaudhary Devi Lal Award", details: "District level highest producing farmer: ₹25,000. State level highest producing farmer: ₹1 lakh." },
        { name: "Krishi Ratna Award", details: "State level: ₹1,00,000 cash prize + citation. District level: ₹51,000 cash prize + citation. Includes Fasal Ratna, Udhami Ratna, Matsya Ratna, Phool Ratna, Sabzi Ratna, Nursery Ratna, Mushroom Ratna." }
    ];

    // Section 14: Haryana State Agriculture Plan Zones
    const agricultureZones = [
        { zone: "Zone I", districts: "Panchkula, Ambala, Kurukshetra, Karnal, Yamunanagar, Kaithal, Panipat, Sonipat", specialty: "Sugarcane, cotton, wheat, pulses, rice, horticulture, dairy" },
        { zone: "Zone II", districts: "Fatehabad, Sirsa, Hisar, Jind, Rohtak, Faridabad, Palwal", specialty: "Sugarcane, cotton, wheat, pulses, rice, horticulture, dairy" },
        { zone: "Zone III", districts: "Bhiwani, Charkhi-Dadri, Mahendragarh, Rewari, Jhajjar, Gurugram, Nuh", specialty: "Mustard, pulses, wheat, bajra (semi-arid climate crops). Nuh specially marked for animal rearing." }
    ];

    // Section 15: Animal Husbandry Complete Data
    const animalHusbandry = {
        titleHindi: "हरियाणा में पशुपालन",
        titleEnglish: "Animal Husbandry in Haryana",
        contentHindi: "पशुपालन राज्य में ग्रामीण आबादी की आय को पूरक करने के लिए एक महत्वपूर्ण क्षेत्र है। यह राज्य में कृषि के बाद दूसरी सबसे महत्वपूर्ण गतिविधि है। भारत का पहला पशु सर्वेक्षण 1919-20 में किया गया था, जिसके बाद यह हर पांच साल में आयोजित किया जाता है। 20वीं पशुधन जनगणना 2019 के अनुसार, हरियाणा की पशुधन आबादी 71.26 लाख है जिसमें 19.29 लाख गायें और 43.68 लाख भैंसें शामिल हैं। सबसे अधिक पशु आबादी वाला जिला भिवानी है, उसके बाद हिसार, जींद, सिरसा और कैथल का स्थान है। 2019-20 में हरियाणा में दूध उत्पादन 117.34 लाख मीट्रिक टन था। आर्थिक सर्वेक्षण 2020-21 के अनुसार, हरियाणा में 2884 पशु चिकित्सा संस्थान और 6 पॉलीक्लिनिक हैं। राज्य में औसतन हर 3 गाँवों में एक पशु चिकित्सालय की सुविधा है।",
        contentEnglish: "Animal husbandry is an important sector to supplement the income of rural masses in the state. It is the second important activity after agriculture in the state. The first Animal Survey of India was done in 1919-20 after which, it is conducted every five years. As per 20th livestock Census 2019, the livestock population of Haryana consists of 71.26 lakh including 19.29 lakh cattle and 43.68 lakh Buffaloes. The districts with highest number of cattle population is Bhiwani. It is followed by Hisar, Jind, Sirsa and Kaithal. The milk production in Haryana in the year 2019-20 was 117.34 lakh metric tonnes. As per the Economic Survey 2020-21, there are 2884 Veterinary Institution and 6 Polyclinics in Haryana. On an average every 3 villages are having the facility of one veterinary hospitals in the state."
    };

    // Section 15a: Livestock Data - Complete
    const livestockData = [
        { animal: "Buffalo", details: "Murrah variety indigenous to Haryana, known as 'Black Gold' and 'Asian Tractor'. Locally called 'Khundi'. Found mainly in Rohtak, Hisar and Jind districts. Gives around 35 litres of milk per day. As per Livestock Census 2019, Bhiwani had highest population followed by Hisar and Jind. Lowest in Panchkula." },
        { animal: "Cow", details: "Hariana breed, Tharparkar breed and Sahiwal breed found in state, originated from Rohtak, Hisar, Jind and Gurugram. Jersey cattle and mix breed also found. District with highest cattle population is Hisar, followed by Sirsa and Karnal. Government establishing Abhyaranays in Hisar and Panipat for cow protection." },
        { animal: "Sheep", details: "Most sheep flocks stationary. Nali breed found in Hisar and Rohtak. Hisardale is popular breed. Bhiwani has largest population followed by Hisar and Sirsa." },
        { animal: "Goat", details: "Haryana is fifth largest producer of goats. Famous varieties: Betal, Nagfani, Jamunapari, Boer and Nubian. Mahendragarh has highest population followed by Bhiwani and Sirsa." },
        { animal: "Horses", details: "Highest in Ambala followed by Karnal and Kaithal." },
        { animal: "Donkey", details: "Highest in Bhiwani followed by Gurugram and Rewari." },
        { animal: "Camels", details: "Highest in Bhiwani followed by Sirsa and Mahendragarh." },
        { animal: "Pigs", details: "Highest in Sonipat followed by Jind and Rohtak." }
    ];

    // Section 15b: Major Districts with Livestock Table
    const livestockDistricts = [
        { livestock: "Cow", districts: "Hisar, Sirsa, Karnal" },
        { livestock: "Buffalo", districts: "Bhiwani, Hisar, Jind" },
        { livestock: "Sheep", districts: "Bhiwani, Hisar, Sirsa" },
        { livestock: "Goat", districts: "Mahendragarh, Bhiwani, Sirsa" },
        { livestock: "Horse", districts: "Ambala, Karnal, Kaithal" },
        { livestock: "Mule", districts: "Bhiwani, Jhajjar, Kaithal" },
        { livestock: "Camel", districts: "Bhiwani, Sirsa, Mahendragarh" },
        { livestock: "Pig", districts: "Sonipat, Jind" },
        { livestock: "Dog", districts: "Gurugram, Sirsa" },
        { livestock: "Donkey", districts: "Bhiwani, Gurugram" }
    ];

    // Section 15c: Important Facts Related to Animal Husbandry
    const animalHusbandryFacts = [
        "Semen Bank established at Narnaul in Mahendragarh district with liquid nitrogen facilities.",
        "Hisar has artificial insemination centres.",
        "Hisar district has Asia's largest animal farm.",
        "Horse (stallion) breeding centre is located at Tohana in Hisar.",
        "Poultry Disease and Research Centre is at Thanesar in Kurukshetra (established 1988-89).",
        "Gurugram has three poultry research and breeding centres.",
        "Sperm centres at Hisar, Gurugram and Jagadhri. Sperm bank in Bhiwani started in 1972.",
        "State animal wealth farms situated in Hisar.",
        "Domestic animal veterinary centre situated in Panchkula.",
        "Wool grading cum marketing centre at Hisar and Loharu (Bhiwani)."
    ];

    // Section 15d: State Government Initiatives for Animal Husbandry
    const animalSchemes = [
        { name: "Haryana Pashu Kisan Credit Card Yojana 2021", details: "Loan of ₹40,783 for cow owners, ₹60,249 for buffalo owners. 4% interest rate, 6 equal installments." },
        { name: "Livestock Insurance Scheme", details: "Started 29th July, 2016 at Jhajjar. ₹100 for large mammals, ₹25 for small ruminants for 3 years." },
        { name: "Haryana Gauvansh Sanrakshan and Gausamvardhan Act", details: "Launched 27th October, 2015. Institutions for care of infirm, injured, stray cows. Conservation of indigenous breeds." },
        { name: "Mukhya Mantri Grameen Dudharu Pashudhan Suraksha Yojana", details: "Launched 2013-14. Compensation for sudden death of milch animals." },
        { name: "Banjh Mukt Pashudhan", details: "Launched 2009-10 under Rashtriya Krishi Vikas Yojana. Maximise productivity through regular breeding." },
        { name: "National Programme for Bovine Breeding", details: "Systematic Breed Improvement Programme. Indigenous breeds: Murrah, Sahiwal, Hariana, Tharparker maintained at Hisar." },
        { name: "Women Dairy Development Scheme", details: "Started by Nestle India Limited for financial stability to rural women." },
        { name: "Pandit Deen Dayal Upadhyay Bima Yojana", details: "Insure 5 big animals (cow, buffalo, horse, camel) for ₹10,050 each. Small animals for ₹25 each." },
        { name: "Biogas Plant Scheme", details: "Financial assistance for installation of biogas plants to use animal dung for fuel and manure." },
        { name: "Pashudhan Vikas Vahini Yojana", details: "24x7 information about animal husbandry techniques, breeding facilities, vaccination, animal care centres." }
    ];

    // Section 15e: Important Facts Related to Livestock
    const livestockImportantFacts = [
        "Haryana first state to provide animal insurance at no cost to Scheduled Tribes. 50% subsidy for dairy, goat, pig, sheep rearing.",
        "Gokul Gram established at Hisar for indigenous breeds - Sahiwal, Hariana, Tharparkar.",
        "Haryana first state to provide 12 digit ID card for cows.",
        "Grant of ₹1000-20,000 based on milk readings.",
        "Prize money: ₹15,000 for 19.22 litres, ₹20,000 for 22.25 litres, ₹30,000 for 25 litres milk production.",
        "Haryana first state to implement Haryana Murrah Buffalo and other Milch Animal Breed Act, 2001.",
        "Pashu Swasthya Kalyan Samiti formed in every district.",
        "Haryana Gauvaush Sanrkshan and Gausamvardhan Act, 2015: 10 years imprisonment and ₹1 lakh fine for cow slaughter.",
        "Haryana Animal (Registration, Certification and Breeding) Act 2019 passed."
    ];

    // Section 15f: Livestock Development Award
    const livestockAward = {
        title: "Livestock Development Award Scheme",
        details: "Incentives from ₹1000 to ₹6000 per Murrah buffalo. Cash incentive: ₹15,000 (19-22 kg milk), ₹20,000 (22-25 kg), ₹30,000 (25+ litre)."
    };

    // Section 16: Livestock and Dairy Development Institutes
    const dairyInstitutes = [
        { name: "National Dairy Research Institute (NDRI)", location: "Karnal", established: "1923 in Bengaluru as Imperial Institute of Animal Husbandry and Dairy. Shifted to Karnal in 1955." },
        { name: "Haryana Dairy Development Cooperative Federation Limited", location: "-", established: "1970. Three level cooperative: Village level Milk producers centres, District level Milk producers Cooperative Union, State level Milk producers Federation." },
        { name: "Lala Lajpat Rai University of Veterinary and Animal Sciences", location: "Hisar", established: "4th February, 2010. Six affiliated institutions." },
        { name: "Central Buffalo Research Institute", location: "Hisar", established: "1985" },
        { name: "National Horse Research Institute", location: "Hisar", established: "1986" },
        { name: "Animal Vaccination Research Institute", location: "Hisar", established: "-" },
        { name: "Animal Veterinary and Research Centre", location: "Hisar", established: "-" }
    ];

    // Section 17: Poultry Farming in Haryana
    const poultryFarming = {
        titleHindi: "हरियाणा में मुर्गी पालन",
        titleEnglish: "Poultry Farming in Haryana",
        contentHindi: "मुर्गी पालन को आय के दूसरे स्रोत के रूप में देखा जाता है। यह कृषि पर निर्भरता कम करता है। हरियाणा में मुर्गी पालन पिछले पांच वर्षों में 12 प्रतिशत बढ़ रहा है। ब्रॉयलर फार्म जींद, पानीपत, हिसार, फतेहाबाद, सिरसा, करनाल, कैथल और यमुनानगर में स्थापित हैं। चार सरकारी मुर्गी फार्म अंबाला, रोहतक, भिवानी और हिसार में हैं। वर्तमान में राज्य में 12 हजार से अधिक मुर्गी फार्म हैं। हरियाणा ने 2.5 एकड़ से कम भूमि वाले किसानों के लिए मुर्गी फार्म स्थापना के लिए सब्सिडी योजना शुरू की है।",
        contentEnglish: "Poultry farming is seen as a second source of income. It reduces the dependency on agriculture. In Haryana, poultry farming is growing by 12 per cent over the last five years. Broiler farms are established in Jind, Panipat, Hisar, Fatehabad, Sirsa, Karnal, Kaithal and Yamunanagar. Four government poultry farms are in Ambala, Rohtak, Bhiwani and Hisar. Currently the state has over 12 thousand poultry farms. Haryana launched a Subsidy Scheme for the establishment of poultry farm for farmers who have less than 2.5 acres of land."
    };

    // Section 17a: Backyard Poultry Scheme
    const backyardPoultry = {
        title: "Backyard Poultry Scheme",
        launched: "2018",
        details: "Provides self-employment to small farmers, marginal labourers, landless workers. 80 chicks (8-10 days old) + 2 feeders + 2 water drinkers per beneficiary family."
    };

    // Section 18: Fisheries in Haryana - Complete
    const fisheries = {
        titleHindi: "हरियाणा में मत्स्य पालन",
        titleEnglish: "Fisheries in Haryana",
        contentHindi: "राज्य में मत्स्य पालन की बहुत संभावना है और यह हरित क्रांति और श्वेत क्रांति के बाद नीली क्रांति की दहलीज पर है। हरियाणा की नदियों, नालों और झीलों में मछलियों की कई प्रजातियाँ हैं। महत्वपूर्ण प्रजातियाँ कतला, मृगल, चुन्नी, बाटा, सिरिहा, मल्ली आदि हैं। हरियाणा प्रति इकाई क्षेत्रफल में औसत वार्षिक मछली उत्पादन में देश में दूसरे स्थान पर है। आर्थिक सर्वेक्षण 2020-21 के अनुसार, ग्रामीण जल निकायों में मछली पालन के तहत कुल क्षेत्रफल लगभग 17216 हेक्टेयर है। 2019-20 में राज्य में मछली उत्पादन 191000 मीट्रिक टन था। राज्य में लगभग 20 मछली स्वास्थ्य केंद्र, 14 एक्वा पॉलीक्लिनिक और 1 राज्य निदान प्रयोगशाला है। हरियाणा को सरकार द्वारा मछली रोग मुक्त राज्य घोषित किया गया है।",
        contentEnglish: "There is great potential of fish culture in the state and it is now on the threshold of Blue Revolution after Green and White Revolution. Rivers, rivulets and lakes in Haryana abound with many species of fish. The important ones are Katla, Mrigal, Chunni, Bata, Siriha, Mallee, etc. Haryana stands second in the average annual fish production per unit area in the country. According to the Economic Survey 2020-21, the total area under fish farming in rural water bodies is around 17216 hectare. The Fish production in the state is 191000 metric tonne in the year 2019-20. There are around 20 fish healthcare centres, 14 aqua polyclinics and 1 state diagnostic lab. Haryana is declared by the government as fish disease free state."
    };

    // Section 18a: Fisheries Additional Info
    const fisheriesAdditional = [
        "Fish Farmers Development Agencies set up in all districts except Panchkula, Nuh and Palwal.",
        "New fish market proposed at Bahadurgarh and Gurugram.",
        "Fisheries Department aims to develop 2500 acre waterlogged area for pisiculture in Jind, Jhajjar, Charkhi-Dadri, Rohtak, Palwal, Sonipat, Nuh, Hisar, Fatehabad, Faridabad.",
        "Tikkar Tal (Panchkula) and West Yamuna Canal (Yamunanagar) being developed for conservation of depleted fish species.",
        "Prawn chilling and processing centre established for shrimp production in saline affected areas."
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
                        {language === "hindi" ? "कृषि और पशुपालन - हरियाणा सरकार" : "Agriculture and Animal Husbandry - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा में" : "Agriculture and"} <span className="text-green-600 dark:text-green-400">{language === "hindi" ? "कृषि और पशुपालन" : "Animal Husbandry"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा की कृषि, पशुपालन, बागवानी, मत्स्य पालन और संबंधित क्षेत्रों की संपूर्ण जानकारी - फसलें, उत्पादन आंकड़े, जिलेवार विवरण, सरकारी योजनाएं और संस्थान"
                            : "Complete information about Haryana's agriculture, animal husbandry, horticulture, fisheries and related sectors - Crops, production statistics, district-wise details, government schemes and institutions"}
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
                                <div className="text-2xl font-bold text-green-600">86%</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "कृषि योग्य भूमि" : "Cultivable Land"}</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-green-600">182%</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "फसल तीव्रता" : "Cropping Intensity"}</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-green-600">3601</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "शुद्ध बोया क्षेत्र (हजार हे.)" : "Net Sown Area (000 ha)"}</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-green-600">64.90</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "सकल बोया क्षेत्र (लाख हे.)" : "Gross Sown Area (lakh ha)"}</div>
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
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा के फसल उत्पादक जिले" : "Crop Producing Districts of Haryana"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "जिला" : "District"}</th>
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
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "सबसे बड़े फसल उत्पादक जिले" : "Largest Crop Producing Districts"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "फसल" : "Crop"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "जिला" : "District"}</th>
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
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "लक्षित क्षेत्र, उत्पादन और औसत उपज" : "Targeted Area, Production and Average Yield"}</h2>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">Source: Economic Survey 2020-21</p>
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
                                            <th className="border p-2 text-left">{language === "hindi" ? "मुख्य उत्पादन क्षेत्र" : "Main Production Area"}</th>
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
                                            <th className="border p-2 text-left">{language === "hindi" ? "मुख्य उत्पादन क्षेत्र" : "Main Production Area"}</th>
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
                            <h3 className="text-xl font-semibold text-orange-600 mb-3">{language === "hindi" ? "हरियाणा में फलों और सब्जियों के शीर्ष उत्पादक" : "Top Producers of Fruits and Vegetables in Haryana"}</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-orange-100 dark:bg-orange-900/30">
                                            <th className="border p-2 text-left">{language === "hindi" ? "फल/सब्जी" : "Fruit/Vegetable"}</th>
                                            <th className="border p-2 text-left">{language === "hindi" ? "सबसे बड़ा उत्पादक" : "Largest Producer"}</th>
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
                                            <th className="border p-2 text-left">{language === "hindi" ? "उत्पादन (क्विंटल)" : "Production (QT)"}</th>
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
                                            <th className="border p-2 text-left">{language === "hindi" ? "मुख्य उत्पादन क्षेत्र" : "Main Production Area"}</th>
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
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "बागवानी में उत्कृष्टता केंद्र" : "Centres of Excellence in Horticulture"}</h2>
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
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा राज्य कृषि योजना क्षेत्र" : "Haryana State Agriculture Plan Zones"}</h2>
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
                            <h3 className="text-xl font-semibold text-purple-600 mb-3">{language === "hindi" ? "प्रमुख पशुधन जिले (अवरोही क्रम में)" : "Major Districts with Livestock (in Descending Order)"}</h3>
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
                            <div className="text-2xl font-bold text-green-600">86%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "कृषि योग्य भूमि" : "Cultivable Land"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">182%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "फसल तीव्रता" : "Cropping Intensity"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">118.77</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "गेहूं उत्पादन (लाख टन)" : "Wheat Production (Lakh T)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">51.98</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "चावल उत्पादन (लाख टन)" : "Rice Production (Lakh T)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">71.26</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "पशुधन (लाख)" : "Livestock (Lakh)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">117.34</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "दूध उत्पादन (लाख टन)" : "Milk Production (Lakh T)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">2nd</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "मछली उत्पादन में स्थान" : "Fish Production Rank"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">60%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "बासमती चावल निर्यात" : "Basmati Rice Export"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">3rd</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "गेहूं उत्पादन में रैंक" : "Wheat Production Rank"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-green-600">2884</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "पशु चिकित्सा संस्थान" : "Veterinary Institutions"}</p>
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
                            ? "यह पृष्ठ हरियाणा में कृषि, पशुपालन, बागवानी, मत्स्य पालन और संबंधित क्षेत्रों के बारे में व्यापक जानकारी प्रदान करता है। इसमें फसलों का विस्तृत विवरण, जिलेवार उत्पादन आंकड़े, सरकारी योजनाएं, संस्थान, पुरस्कार और पशुपालन से संबंधित सभी महत्वपूर्ण तथ्य शामिल हैं। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about agriculture, animal husbandry, horticulture, fisheries and related sectors in Haryana. It includes detailed descriptions of crops, district-wise production statistics, government schemes, institutions, awards, and all important facts related to animal husbandry. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और आर्थिक सर्वेक्षण 2020-21 से स्रोतित" : "Information sourced from official Government of Haryana publications and Economic Survey 2020-21"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}