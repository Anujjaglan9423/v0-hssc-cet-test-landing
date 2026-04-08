"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    History,
    Trees,
    Leaf,
    Landmark,
    Building,
    ChevronDown,
    HelpCircle,
    Sprout,
    Mountain,
    Droplets,
    Flower2,
    ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ForestResourcesOfHaryanaPage() {
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
            questionHindi: "हरियाणा में वनों का क्षेत्रफल कितना है?",
            questionEnglish: "What is the forest cover area in Haryana?",
            answerHindi: "भारत वन स्थिति रिपोर्ट 2019 के अनुसार, हरियाणा में वन आवरण क्षेत्र 1602.44 वर्ग किमी है, जो राज्य के कुल भौगोलिक क्षेत्र का 3.62% है।",
            answerEnglish: "According to the India State of Forest Report 2019, the forest cover area in Haryana is 1602.44 sq km, which is 3.62% of the total geographical area of the state."
        },
        {
            questionHindi: "हरियाणा का सबसे अधिक वन क्षेत्र वाला जिला कौन सा है?",
            questionEnglish: "Which district has the highest forest area in Haryana?",
            answerHindi: "पंचकुला जिले में सबसे अधिक वन क्षेत्र (390.70 वर्ग किमी) है, जबकि पलवल जिले में सबसे कम वन क्षेत्र (13.97 वर्ग किमी) है।",
            answerEnglish: "Panchkula district has the highest forest area (390.70 sq km), while Palwal district has the lowest forest area (13.97 sq km)."
        },
        {
            questionHindi: "हरियाणा राज्य वन नीति कब बनाई गई थी?",
            questionEnglish: "When was the Haryana State Forest Policy formulated?",
            answerHindi: "हरियाणा राज्य वन नीति 2006 में बनाई गई थी। इस नीति के अनुसार, सरकार ने वन आवरण को 10% से बढ़ाकर 20% करने का लक्ष्य रखा है।",
            answerEnglish: "The Haryana State Forest Policy was formulated in 2006. According to this policy, the government has targeted to increase the forest cover from 10% to 20%."
        },
        {
            questionHindi: "हरियाणा में कितने प्रकार के वन पाए जाते हैं?",
            questionEnglish: "How many types of forests are found in Haryana?",
            answerHindi: "चैम्पियन और सेठ के अनुसार, हरियाणा में पाँच प्रकार के वन पाए जाते हैं - उष्णकटिबंधीय शुष्क पर्णपाती वन और उपोष्णकटिबंधीय चीड़ के वन।",
            answerEnglish: "According to Champion and Seth, five types of forests are found in Haryana - Tropical Dry Deciduous Forests and Sub-Tropical Pine Forests."
        },
        {
            questionHindi: "हरियाणा का सबसे बड़ा हर्बल पार्क कौन सा है?",
            questionEnglish: "Which is the largest herbal park in Haryana?",
            answerHindi: "राज्य का पहला और सबसे बड़ा हर्बल पार्क चौधरी देवीलाल हर्बल नेचर पार्क है, जो यमुनानगर जिले के चुहरपुर गाँव में स्थित है।",
            answerEnglish: "The first and largest herbal park of the state is Chaudhary Devi Lal Herbal Nature Park located in Chuharpur village of Yamunanagar district."
        },
        {
            questionHindi: "हरियाणा में 'हर घर हरियाली योजना' कब शुरू की गई थी?",
            questionEnglish: "When was 'Har Ghar Hariyali Yojana' launched in Haryana?",
            answerHindi: "हर घर हरियाली योजना राज्य सरकार द्वारा वर्ष 2015 में शुरू की गई थी। यह स्थानीय प्रजातियों के विकास पर जोर देती है।",
            answerEnglish: "Har Ghar Hariyali Yojana was launched by the State Government in the year 2015. It emphasises the development of local species."
        },
        {
            questionHindi: "हरियाणा में 'पेड़ दिवस' कब मनाया जाता है?",
            questionEnglish: "When is 'Tree Day' celebrated in Haryana?",
            answerHindi: "राज्य में 2014 से प्रत्येक वर्ष 15 जुलाई को पेड़ दिवस मनाया जाता है।",
            answerEnglish: "The state observes Tree Day on 15th July every year since 2014."
        },
        {
            questionHindi: "हरियाणा वन विकास निगम की स्थापना कब हुई थी?",
            questionEnglish: "When was Haryana Forest Development Corporation established?",
            answerHindi: "हरियाणा वन विकास निगम की स्थापना 7 दिसंबर, 1989 को राज्य में वनों के विकास के लिए की गई थी। इसका मुख्यालय पंचकुला जिले में है।",
            answerEnglish: "Haryana Forest Development Corporation was established on 7th December, 1989 for the development of forests in the state. Its headquarters is in Panchkula district."
        }
    ];

    // Forest Overview Section
    const forestOverview = {
        titleHindi: "हरियाणा के वन संसाधन",
        titleEnglish: "Forest Resources in Haryana",
        contentHindi: "हरियाणा मुख्य रूप से एक कृषि प्रधान राज्य है जिसका लगभग 80% भूमि कृषि के अधीन है। हरियाणा की स्थिति के अनुसार, राज्य में उष्णकटिबंधीय वन प्रचुर मात्रा में पाए जाते हैं। लेकिन जलवायु, तापमान, मिट्टी और वर्षा में भिन्नता के कारण वनों में भी विविधता है। आम, जामुन, साल, शीशम, चीड़ के अलावा, राज्य में कुराड़, खेरती, बथुआ, अश्वगंधा, शाखावली, शती, सदाबहार, मकोई आदि औषधीय पौधों की विभिन्न किस्में और दूबच, धमन, दिल्ला, दूब, भुरत आदि विभिन्न प्रकार की घासें भी हैं। राज्य में बेंत की प्रचुरता है, जिसका उपयोग रस्सी बनाने के लिए किया जाता है। बेंत पर आधारित कुटीर उद्योग भी राज्य में लोकप्रिय है। राज्य के वन संपदा का पर्यावरणीय महत्व है साथ ही आर्थिक महत्व भी है, इसलिए इसके संरक्षण के लिए सरकार द्वारा महत्वपूर्ण उपाय भी किए गए हैं।",
        contentEnglish: "Haryana is primarily an agricultural state with almost 80% of its land under cultivation. According to the location of Haryana, tropical forest is abundantly found in the state. But there is also diversity in forest due to climate, temperature, soil and variation in rainfall. In addition to mango, jamun, sal, sheesham, pine, the state also has different varieties of medicinal plants like kurad, kherti, bathua, ashwagandha, shakhawali, shati, sadabahar, makoi, etc. and different types of grass like dubach, dhaman, dilla, dubh, bhurat, etc. There is an abundance of cane in the state, which is used for rope making. The cottage industry based on cane is also popular in the state. The forest wealth of the state has environmental importance as well as economic importance, so important measures have also been taken by the government for its conservation."
    };

    // Forest Cover Section
    const forestCover = {
        titleHindi: "हरियाणा में वन आवरण",
        titleEnglish: "Forest Cover in Haryana",
        contentHindi: "हरियाणा वन संसाधनों में बहुत समृद्ध नहीं है। हरियाणा राज्य वन नीति, 2006 के अनुसार, राज्य में 20% भौगोलिक क्षेत्र में वन क्षेत्र होना आवश्यक है। लेकिन हरियाणा ने अपने कुल भौगोलिक क्षेत्र के 10% में वनों का विस्तार करने का लक्ष्य रखा है। वर्ष 1966 में हरियाणा राज्य के गठन के समय, हरियाणा में कुल भौगोलिक क्षेत्र का 3.90% वन आवरण था।\n\nभारत वन स्थिति रिपोर्ट, 2019 के अनुसार, वन आवरण क्षेत्र 1602.44 वर्ग किमी है, जो राज्य के कुल भौगोलिक क्षेत्र का 3.62% है। राज्य में वृक्ष आवरण क्षेत्र 1565 वर्ग किमी है। इस प्रकार, कुल वन आवरण और वृक्ष आवरण क्षेत्र 3167 वर्ग किमी है, जो राज्य के कुल भौगोलिक क्षेत्र का 7.16% है। वर्ष 2017 की तुलना में वर्ष 2019 में वृक्ष आवरण क्षेत्र में 150 वर्ग किमी की वृद्धि हुई है। भारत वन स्थिति रिपोर्ट, 2019 के अनुसार, राज्य में अभिलिखित वन क्षेत्र 1559 वर्ग किमी है। वर्ष 2017 की तुलना में वर्ष 2019 में हरियाणा के अभिलिखित वन क्षेत्र में 14.44 किमी की वृद्धि हुई है। भारत वन स्थिति रिपोर्ट, 2019 के अनुसार, सबसे अधिक वन क्षेत्र वाला जिला पंचकुला (390.70 वर्ग किमी) है और सबसे कम वन क्षेत्र वाला जिला पलवल (13.97 वर्ग किमी) है। भारत वन स्थिति रिपोर्ट, 2019 के अनुसार, राज्य में झाड़ियों के अंतर्गत 154.29 वर्ग किमी क्षेत्र है, जो राज्य के कुल भौगोलिक क्षेत्र का 0.35% है। झाड़ियाँ (35 वर्ग किमी) मुख्य रूप से हरियाणा के महेंद्रगढ़ जिले में पाई जाती हैं।",
        contentEnglish: "Haryana is not very rich in forest resources. According to Haryana State Forest Policy, 2006, the state is required to have a forest area of 20% geographical area. But Haryana has targeted to expand forests in 10% of its total geographical area. At the time of formation of Haryana State in the year 1966, Haryana had forest cover of 3.90% of the total geographical area.\n\nAccording to the India State of Forest Report, 2019, forest cover area is 1602.44 sq km, which is 3.62% of the total geographical area of the state. The tree cover area in the state is 1565 sq km. Thus, the total forest cover and tree cover area is 3167 sq km, which is 7.16% of the total geographical area of the state. There is an increase of 150 sq km in the tree cover area in the year 2019 as compared to the year 2017. According to the India State of Forest Report, 2019, Recorded Forest Area in the state is 1559 sq km. There has been an increase of 14.44 km in the Recorded Forest Area of Haryana in the year 2019 as compared to the year 2017. According to the India State of Forest Report, 2019, the district with the highest forest area is Panchkula (390.70 sq km) and the district with the lowest forest area is Palwal (13.97 sq km). According to the India State of Forest Report, 2019, the state has an area of 154.29 sq km under scrubs, which is 0.35% of the total geographical area of the state. Scrubs (35 sq km) are mainly found in Mahendragarh district of Haryana."
    };

    // District-Wise Forest Cover Table Data
    const districtForestData = [
        { district: "Ambala", geoArea: 1574, forestCover: 51.35, percent: 3.26 },
        { district: "Bhiwani", geoArea: 4778, forestCover: 113.81, percent: 2.38 },
        { district: "Faridabad", geoArea: 741, forestCover: 79.94, percent: 10.79 },
        { district: "Fatehabad", geoArea: 2538, forestCover: 18.00, percent: 0.71 },
        { district: "Gurugram", geoArea: 1258, forestCover: 116.18, percent: 9.24 },
        { district: "Hisar", geoArea: 3983, forestCover: 57.64, percent: 1.45 },
        { district: "Jhajjar", geoArea: 1834, forestCover: 25.93, percent: 1.41 },
        { district: "Jind", geoArea: 2702, forestCover: 21.00, percent: 0.78 },
        { district: "Kaithal", geoArea: 2317, forestCover: 57.07, percent: 2.46 },
        { district: "Karnal", geoArea: 2520, forestCover: 32.24, percent: 1.28 },
        { district: "Kurukshetra", geoArea: 1530, forestCover: 39.75, percent: 2.60 },
        { district: "Mahendragarh", geoArea: 1899, forestCover: 103.29, percent: 5.44 },
        { district: "Mewat", geoArea: 1507, forestCover: 111.18, percent: 7.38 },
        { district: "Palwal", geoArea: 1359, forestCover: 13.97, percent: 1.03 },
        { district: "Panchkula", geoArea: 898, forestCover: 390.70, percent: 43.51 },
        { district: "Panipat", geoArea: 1268, forestCover: 15.88, percent: 1.25 },
        { district: "Rewari", geoArea: 1594, forestCover: 62.45, percent: 3.92 },
        { district: "Rohtak", geoArea: 1745, forestCover: 21.13, percent: 1.21 },
        { district: "Sirsa", geoArea: 4277, forestCover: 56.60, percent: 1.32 },
        { district: "Sonipat", geoArea: 2122, forestCover: 20.97, percent: 0.99 },
        { district: "Yamunanagar", geoArea: 1768, forestCover: 193.36, percent: 10.94 }
    ];

    // Major Districts with Max and Min Forest Area
    const maxForestDistricts = [
        { name: "Panchkula", area: "390.70" },
        { name: "Yamunanagar", area: "198.36" },
        { name: "Gurugram", area: "116.18" },
        { name: "Bhiwani", area: "113.81" },
        { name: "Mewat", area: "111.18" }
    ];

    const minForestDistricts = [
        { name: "Palwal", area: "13.97" },
        { name: "Panipat", area: "15.88" },
        { name: "Fatehabad", area: "18.00" },
        { name: "Sonipat", area: "20.97" },
        { name: "Jind", area: "21.00" }
    ];

    // Classification of Forests - Geographical
    const geographicalClassification = {
        titleHindi: "भौगोलिक वर्गीकरण",
        titleEnglish: "Geographical Classification of Forests",
        contentHindi: "चैम्पियन और सेठ के अनुसार, हरियाणा में भौगोलिक दशाओं के आधार पर पाँच प्रकार के वन पाए जाते हैं, जो मुख्य रूप से दो भागों में विभाजित हैं:\n\n1. उष्णकटिबंधीय शुष्क पर्णपाती वन\n2. उपोष्णकटिबंधीय चीड़ के वन",
        contentEnglish: "According to Champion and Seth, five types of forests are found in Haryana on the basis of geographical conditions, which are mainly divided into two parts:\n\n1. Tropical Dry Deciduous Forests\n2. Sub-Tropical Pine Forests"
    };

    const tropicalDryForests = {
        titleHindi: "1. उष्णकटिबंधीय शुष्क पर्णपाती वन",
        titleEnglish: "1. Tropical Dry Deciduous Forests",
        contentHindi: "इस प्रकार के वन 100 सेमी से कम वर्षा वाले क्षेत्रों में पाए जाते हैं। राज्य में आर्द्र क्षेत्रों में आर्द्र पर्णपाती वन पाए जाते हैं जबकि शुष्क क्षेत्रों में कांटेदार वन पाए जाते हैं। इन वनों के वृक्ष पानी की कमी को पूरा करने के लिए गर्मी के मौसम से पहले अपनी पत्तियाँ गिरा देते हैं। हरियाणा में, ये वन महेंद्रगढ़, रेवाड़ी, यमुनानगर, गुरुग्राम, भिवानी, कैथल, करनाल और सोनीपत जिलों के मैदानों में पाए जाते हैं। इन वनों में शीशम, पीपल, नीम, आम, जामुन, इमली, केन्दु, लसोड़ा, सेमल आदि वृक्ष आमतौर पर पाए जाते हैं। राज्य के शुष्क क्षेत्रों में कीकर, फिरास, झड़बेरी, पीलू, खैर, ओक, पाठा, जाला, थूहर, सरकंडा, बुई आदि के वृक्ष पाए जाते हैं।",
        contentEnglish: "This type of forest is found in areas with less than 100 cm rainfall. Moist deciduous forests are found in wet areas whereas thorn forests are found in dry areas in the state. Trees of these forests drop their leaves before summer season to meet the water shortage. In Haryana, these forests are found in the plains of Mahendragarh, Rewari, Yamunanagar, Gurugram, Bhiwani, Kaithal, Karnal and Sonipat districts. Trees like Indian rosewood (sheesham), sacred fig, peepal, neem, mango, jamun, tamarind, kendu, lasoda, semal, etc. are commonly found in these forests. In the dry regions of the state, tree of kikar, firas, jharberi, pilu, khair, oak, patha, jala, thuhar, sarkanda, bui, etc. are found."
    };

    const subTropicalForests = {
        titleHindi: "2. उपोष्णकटिबंधीय/चीड़ के वन",
        titleEnglish: "2. Sub-Tropical/Pine Forests",
        contentHindi: "ये वन मुख्यतः पहाड़ी क्षेत्रों में पाए जाते हैं, जहाँ वर्षा 100 सेमी या उससे अधिक होती है। इन वनों में मुख्यतः साल, चीड़ और पाइन के वृक्ष पाए जाते हैं। पाइन के वृक्षों की प्रचुरता के कारण, इन वनों को उपोष्णकटिबंधीय चीड़ के वन कहा जाता है। चीड़ के अलावा, इन वनों में सिरस, जामुन, कचनार, खैर, अमलतास, महुआ, कालका, बहेड़ा, झिंगन आदि के वृक्ष भी पाए जाते हैं। ये वन राज्य के अंबाला, पंचकुला, यमुनानगर और रोहतक जिलों में और हिमाचल प्रदेश के सीमावर्ती क्षेत्रों में पाए जाते हैं। साल के वृक्ष रोहतक के वनों में पाए जाते हैं।",
        contentEnglish: "These forests are mainly found in hilly areas, where the rainfall is 100 cm or above. Sal, chir and pine trees are mainly found in these forests. Due to the abundance of pine trees, these forests are called Sub-tropical Pine Forests. Apart from pine, trees of cirrus, jamun, kachnar, khair, amaltas, mahua, kalka, bahera, jhingan, etc. are also found in these forests. These forests are found in Ambala, Panchkula, Yamunanagar and Rohtak districts of the state and in the border areas of Himachal Pradesh. Sal trees are found in the forests of Rohtak."
    };

    // Administrative Classification
    const administrativeClassification = {
        titleHindi: "प्रशासनिक वर्गीकरण",
        titleEnglish: "Administrative Classification of Forests",
        contentHindi: "राज्य में, प्रशासन के आधार पर वनों को तीन वर्गों में विभाजित किया गया है:\n\n1. आरक्षित वन\n2. संरक्षित वन\n3. अवर्गीकृत वन",
        contentEnglish: "In the state, forests are divided into three classes on the basis of the administration:\n\n1. Reserved Forests\n2. Protected Forests\n3. Unclassified Forests"
    };

    const reservedForests = {
        titleHindi: "1. आरक्षित वन (Reserved Forests)",
        titleEnglish: "1. Reserved Forests",
        contentHindi: "भारत वन स्थिति रिपोर्ट, 2019 के अनुसार, आरक्षित वन राज्य में 249 वर्ग किमी क्षेत्र में फैले हुए हैं, जो राज्य के कुल वन क्षेत्र का 15.97% है। ये वन पूरी तरह से सरकार के नियंत्रण में हैं। इन वनों में जानवरों को चराने और पेड़ों को काटने पर पूर्ण प्रतिबंध है। भूमि सुधार, बाढ़ नियंत्रण और लकड़ी की आपूर्ति के लिए इन वनों को संरक्षित किया जाता है। यह वन्यजीवों को सुरक्षा प्रदान करता है। इन वनों से कई मूल्यवान वन उत्पाद भी प्राप्त होते हैं।\n\nराज्य में आरक्षित वनों के अंतर्गत अधिकतम क्षेत्र वाले 5 जिले अवरोही क्रम में पंचकुला, यमुनानगर, कैथल, कुरुक्षेत्र और महेंद्रगढ़ हैं। राज्य में न्यूनतम आरक्षित वन क्षेत्र वाले जिले सिरसा, नूह, भिवानी, पलवल और फरीदाबाद हैं। हरियाणा के 6 जिलों में कोई आरक्षित वन नहीं हैं - फतेहाबाद, हिसार, झज्जर, पानीपत, सोनीपत और रोहतक।",
        contentEnglish: "According to the India State of Forest Report, 2019, reserved forests are spread across 249 sq km in the state which is 15.97% of the total forest area of the state. These forests are completely under the control of the government. Grazing of animals and cutting of trees are completely banned in these forests. These forests are protected for land reclamation, control of floods and wood supply. It provides protection to wildlife. Many valuable forest products are also obtained from these forests.\n\nThe 5 districts with maximum area under reserved forests in descending order in the state are Panchkula, Yamunanagar, Kaithal, Kurukshetra and Mahendragarh. The districts with minimum area under reserved forests in the state are Sirsa, Nuh, Bhiwani, Palwal and Faridabad. There are no reserved forests in 6 districts of Haryana which are Fatehabad, Hisar, Jhajjar, Panipat, Sonipat and Rohtak."
    };

    const protectedForests = {
        titleHindi: "2. संरक्षित वन (Protected Forests)",
        titleEnglish: "2. Protected Forests",
        contentHindi: "भारत वन स्थिति रिपोर्ट, 2019 के अनुसार, संरक्षित वन क्षेत्र 1158 वर्ग किमी में फैला है, जो राज्य के कुल वन क्षेत्र का 74.28% है। ये वन भी सरकार के नियंत्रण में हैं। विशेष ध्यान रखा जाता है कि वन क्षतिग्रस्त न हों। इन वनों में संरक्षण के साथ-साथ उत्पादन के लिए भी कुछ गतिविधियाँ की जाती हैं। इन वनों में स्थानीय निवासियों को ईंधन की लकड़ी काटने, जानवरों को चराने और चरवाहा गतिविधियों की अनुमति है।\n\nराज्य में संरक्षित वनों के अंतर्गत अधिकतम क्षेत्र वाले 5 जिले पंचकुला, यमुनानगर, भिवानी, सोनीपत और करनाल हैं। राज्य में न्यूनतम संरक्षित वन क्षेत्र वाले 5 जिले फरीदाबाद, नूह, गुरुग्राम, पलवल और महेंद्रगढ़ हैं। पंचकुला राज्य का एक ऐसा जिला है, जो आरक्षित और संरक्षित वन क्षेत्र में प्रथम स्थान रखता है।",
        contentEnglish: "According to the India State of Forest Report, 2019, the protected forest area is spread over 1158 sq km, which is 74.28% of the total forest area of the state. These forests are also under the control of the government. Special care is taken to ensure that the forests are not damaged. Along with conservation in these forests, some activities for production are also carried out. In these forests local residents are permitted for cutting firewood, grazing of animals and pastoral activities.\n\nThe 5 districts with maximum area under protected forests in the state are Panchkula, Yamunanagar, Bhiwani, Sonipat and Karnal. The 5 districts with minimum area under protected forests in the state are Faridabad, Nuh, Gurugram, Palwal and Mahendragarh. Panchkula is one such district in the state, which occupies the first place in the reserved and protected forest area."
    };

    const unclassifiedForests = {
        titleHindi: "3. अवर्गीकृत वन (Unclassified Forests)",
        titleEnglish: "3. Unclassified Forests",
        contentHindi: "आरक्षित और संरक्षित वनों के अलावा अन्य सभी वन अवर्गीकृत वन कहलाते हैं। सरकार, समुदाय और लोगों का इन वनों पर अधिकार होता है। भारत वन स्थिति रिपोर्ट, 2019 के अनुसार ये वन 152 वर्ग किमी क्षेत्र में फैले हैं, जो राज्य के कुल वन क्षेत्र का 9.75% है। इन वनों में लकड़ी काटने और चरवाही पर कोई प्रतिबंध नहीं है, लेकिन संरक्षण के लिए कुछ उपाय भी किए जाते हैं।\n\nराज्य में अवर्गीकृत वनों के अंतर्गत अधिकतम क्षेत्र वाले 5 जिले (अवरोही क्रम में) कैथल, रोहतक, यमुनानगर, जींद और पलवल हैं। राज्य में न्यूनतम अवर्गीकृत वन क्षेत्र वाले 5 जिले (बढ़ते क्रम में) भिवानी, हिसार, पंचकुला, नूह और गुरुग्राम हैं। राज्य के 6 जिलों में अवर्गीकृत वन नहीं पाए जाते हैं - अंबाला, फरीदाबाद, करनाल, कुरुक्षेत्र, पानीपत और सोनीपत।",
        contentEnglish: "All the forests besides reserved and protected forests are called unclassified forests. The government, community and people have authority over these forests. According to the India State of Forest Report, 2019 these forests are spread over an area of 152 sq km which is 9.75% of the total forest area of the state. In these forests, there is no restriction on cutting of wood and pastoralism, but some measures are also taken for conservation.\n\nThe 5 districts with maximum area under unclassified forests in the state (in descending order) are Kaithal, Rohtak, Yamunanagar, Jind and Palwal. The 5 districts with minimum area under unclassified forests in the state (in increasing order) are Bhiwani, Hisar, Panchkula, Nuh and Gurugram. Unclassified forests are not found in 6 districts of the state which are Ambala, Faridabad, Karnal, Kurukshetra, Panipat and Sonipat."
    };

    // Haryana State Forest Policy 2006
    const forestPolicy = {
        titleHindi: "हरियाणा राज्य वन नीति, 2006",
        titleEnglish: "Haryana State Forest Policy, 2006",
        contentHindi: "हरियाणा एक कृषि प्रधान राज्य है, इसका 80% भौगोलिक क्षेत्र कृषि के अधीन है। राज्य में वन क्षेत्र अभी भी बहुत कम है। राज्य में वनों के सतत विकास को बढ़ावा देने के लिए, हरियाणा सरकार ने 2006 में एक वन नीति तैयार की, जिसे वन नीति, 2006 के नाम से जाना जाता है। इस नीति के अनुसार, सरकार ने वन आवरण को 10% से बढ़ाकर 20% करने का लक्ष्य रखा है।\n\nनीति के मुख्य बिंदु:\n- पर्यावरणीय स्थिरता के रखरखाव और पारिस्थितिक संतुलन की बहाली के लिए वनीकरण को बढ़ावा देना\n- वन क्षेत्रों में जल संसाधनों का संरक्षण और विकास करना\n- संरक्षित वन क्षेत्रों में जैव विविधता का विकास और संरक्षण\n- वनीकरण तकनीकों का उपयोग करके लवण प्रभावित क्षेत्रों का सुधार\n- औषधीय पौधों का संरक्षण और मिट्टी के कटाव को नियंत्रित करना\n- वनीकरण और सामाजिक वानिकी के माध्यम से राज्य में वृक्ष आवरण को बढ़ावा देना\n- कृषि-वानिकी के माध्यम से गैर-वन भूमि से लकड़ी के उत्पादन को बढ़ावा देना\n- वन उत्पादों की कीमतों को स्थिर रखने के लिए लकड़ी बाजारों का विकास\n- वनों के विकास के लिए संयुक्त प्रबंधन और भागीदारी के लिए ग्राम स्तर पर एक संस्थान का निर्माण\n- अर्ध-शुष्क क्षेत्रों में बुनियादी ढांचे की रक्षा के लिए रेत के टीलों के विस्तार को नियंत्रित करना\n- इको-पर्यटन के विकास को बढ़ावा देना\n- वानिकी आधारित या अन्य आय उत्पन्न करने वाली गतिविधियों के माध्यम से स्वयं सहायता समूहों का गठन\n- वन नीति के उद्देश्यों को प्राप्त करने के लिए महिलाओं और स्कूली बच्चों के साथ आम लोगों को बड़े पैमाने पर जोड़कर जन आंदोलन शुरू करना\n- राज्य के प्राकृतिक वनों में जैव विविधता बनाए रखना और जानवरों की दुर्लभ प्रजातियों को सुरक्षा प्रदान करना",
        contentEnglish: "Haryana is an agrarian state, its 80% geographical area is under agriculture. The forest area in the state is still very low. In order to promote sustainable development of forests in the state, the Government of Haryana formulated a forest policy in 2006, known as the Forest Policy, 2006. According to this policy, the government has targeted to increase the forest cover from 10% to 20%.\n\nHighlights of the Policy:\n- To promote afforestation for maintenance of the environment stability and restoration of ecological balance\n- To conserve and develop water resources in forest areas\n- Development and conservation of biodiversity in protected forest areas\n- Reclamation of salt affected areas using afforestation techniques\n- Preserving medicinal plants and controlling soil erosion\n- Promotion of tree cover in the state through afforestation and social forestry\n- Promoting wood production from non-forest land through agro-forestry\n- Development of timber markets to keep the prices of forest products constant\n- To build an institution at the village level for joint management and participation for the development of forests\n- To control the expansion of sand dunes to protect the infrastructure in semi-arid areas\n- Promote the development of eco-tourism\n- Formation of Self-Help Groups through forestry based or other income generating activities\n- To launch mass movement by associating common people with women and school children on a large scale to achieve the objectives of forest policy\n- To maintain biodiversity in the natural forests of the state and to provide protection to rare species of animals"
    };

    // Schemes for Forest Development
    const schemesData = [
        {
            name: "Kandi Project",
            year: "2008",
            detailHindi: "यह योजना विश्व बैंक द्वारा वित्त पोषित है, जो राज्य के अंबाला और यमुनानगर जिलों के उत्तरी भाग की शिवालिक पहाड़ियों में पुनः रोपण से संबंधित है। यह योजना वन, कृषि, पशुपालन और बागवानी विभागों की एक एकीकृत योजना है, जो वन विकास के लिए एक साथ काम करते हैं।",
            detailEnglish: "This scheme, funded by the World Bank, relates to re-plantation in the Shivalik hills of the Northern part of Ambala and Yamunanagar districts of the state. This scheme is an integrated scheme of the Forest, Agriculture, Animal Husbandry and Horticulture departments, which work together for forest development."
        },
        {
            name: "Aravali Rehabilitation Scheme",
            year: "1990-91",
            detailHindi: "यह योजना यूरोपीय आर्थिक समुदाय द्वारा वित्त पोषित है, जो खुले अरावली पहाड़ियों के पुनः रोपण से संबंधित है। इस योजना के तहत, 6 वर्षों के भीतर अरावली पहाड़ियों की 33000 हेक्टेयर खुली और चट्टानी भूमि पर वृक्षारोपण किया गया। यह योजना अरावली पहाड़ियों को पुनर्जीवित करने के लिए प्रतिबद्ध है।",
            detailEnglish: "This scheme, funded by the European Economic Community, relates to the re-plantation of the uncovered Aravali hills. Under this scheme, tree planting was done on 33000 hectares of open and rocky land of Aravali hills within 6 years. The scheme is committed to rejuvenate the Aravali hills."
        },
        {
            name: "Social Forestry Scheme",
            year: "1982",
            detailHindi: "यह योजना विश्व बैंक के सहयोग से 1982 में शुरू की गई थी। इस योजना का मुख्य उद्देश्य 5 वर्षों में 67000 हेक्टेयर भूमि पर वृक्षारोपण करना था। यह योजना 2006-07 में पूरी हुई। इस योजना के तहत, राज्य के 11 जिलों के 338 गाँवों को कवर किया गया और वहाँ वृक्षारोपण किया गया। इस योजना में महिलाओं की भागीदारी प्रमुख थी।",
            detailEnglish: "This scheme was started in the year 1982 in collaboration with World Bank. The main objective of this scheme was to plant trees over 67000 hectares of land in 5 years. The scheme was completed in the year 2006-07. Under this scheme, 338 villages in 11 districts of the state were covered and plantation was done there. The participation of women was prominent in this scheme."
        },
        {
            name: "Har Ghar Hariyali Yojana",
            year: "2015",
            detailHindi: "यह योजना राज्य सरकार द्वारा वर्ष 2015 में शुरू की गई थी। यह स्थानीय प्रजातियों के विकास पर जोर देती है। इस योजना के तहत, पीपल, नीम, अनार, देशी आम, जामुन, शीशम, हरड़, बहेड़ा, शहतूत, बेरी, बकायन, रोहेरा आदि देशी प्रजातियों के पौधे लगाए जा रहे हैं। इस योजना के तहत राज्य सरकार ने वर्ष 2016-17 में 18412 हेक्टेयर क्षेत्र में 141.01 लाख पौधे लगाए थे।",
            detailEnglish: "This scheme was launched by the State Government in the year 2015. It emphasises the development of local species. Under this scheme, plants of indigenous species like peepal, neem, pomegranate, desi mango, jamun, sheesham, harad, bahera, mulberry, berry, bakayan, rohera, etc. are being planted. Under this scheme, 141.01 lakh saplings were planted in 18412 hectares area by the State Government in the year 2016-17."
        },
        {
            name: "Greening of Haryana",
            year: "1989-90",
            detailHindi: "यह योजना 1989-90 में शुरू की गई थी। इस योजना के तहत राज्य में बड़े पैमाने पर वृक्षारोपण किया जा रहा है। इस योजना के तहत, नदियों, नहरों के किनारे, सड़कों, रेलवे के किनारे और गाँवों के आसपास वृक्ष पट्टियाँ बनाई गई हैं। राज्य में 2014 से प्रत्येक वर्ष 15 जुलाई को पेड़ दिवस मनाया जाता है।",
            detailEnglish: "This scheme was started in the year 1989-90. Large scale tree plantation is being done in the state under this scheme. Under this scheme, tree belts have been made in the state on the banks of rivers, canals, along roads, railways and around villages. The state observes Tree Day on 15th July every year since 2014."
        }
    ];

    // Herbal Parks Data
    const northernHerbalParks = [
        { name: "Canth Herbal Park", district: "Ambala" },
        { name: "Thapli Herbal Park", district: "Panchkula" },
        { name: "Adibadri", district: "Yamunanagar" },
        { name: "Kapur Vatika", district: "Panchkula" },
        { name: "Harar Vatika", district: "Ambala" },
        { name: "Rudraksh Vatika", district: "Yamunanagar" },
        { name: "Jamun Vatika", district: "Kaithal" },
        { name: "Arjun Vatika", district: "Kurukshetra" }
    ];

    const southernHerbalParks = [
        { name: "Kadipur Herbal Park", district: "Mahendragarh" },
        { name: "Kakodia Herbal Park", district: "Rewari" },
        { name: "Kariya Herbal Park", district: "Mahendragarh" },
        { name: "Amwala Herbal Garden", district: "Gurugram" },
        { name: "Ratanjot Vatika", district: "Faridabad" },
        { name: "Guggal Vatika", district: "Mahendragarh" },
        { name: "Chawan Rishi Vatika", district: "Mahendragarh" },
        { name: "Indira Gandhi Memorial Herbal Park", district: "Rewari" },
        { name: "Ghritkumari Vatika", district: "Mewat (Nuh)" },
        { name: "Khalipuri Vatika", district: "Rewari" }
    ];

    const westernHerbalParks = [
        { name: "Ch. Surendra Singh Memorial Herbal Park (Tosham)", district: "Bhiwani" },
        { name: "Ch. Surendra Singh Memorial Herbal Park (Kairu)", district: "Bhiwani" },
        { name: "Chandan Vatika", district: "Jind" },
        { name: "Mulethi Vatika", district: "Fatehabad" },
        { name: "Baheda Vatika", district: "Sirsa" },
        { name: "Shatavari Vatika", district: "Hisar" }
    ];

    const centralHerbalParks = [
        { name: "Indri Herbal Park", district: "Karnal" },
        { name: "Khanpur Kalan Herbal Park", district: "Sonipat" },
        { name: "Herbal Park Bhindawas", district: "Jhajjar" },
        { name: "Ashok Vatika", district: "Karnal" },
        { name: "Amaltas Vatika", district: "Sonipat" },
        { name: "Putranjiva Vatika", district: "Jhajjar" },
        { name: "Bilva Vatika", district: "Panipat" },
        { name: "Neem Vatika", district: "Rohtak" }
    ];

    // Institutes Data
    const institutesData = [
        {
            name: "Haryana State Pollution Control Board",
            year: "1974",
            detailHindi: "इसका गठन केंद्र सरकार द्वारा पारित अधिनियम के तहत वर्ष 1974 में किया गया था। इस बोर्ड का मुख्य कार्य उद्योगों और स्थानीय निकायों के अवशेषों को रोकना और प्रदूषकों को एक सीमा के तहत नियंत्रित करके पर्यावरण को स्वच्छ रखना है।",
            detailEnglish: "It was formed in the year 1974 under the Act passed by the Central Government. The main function of this board is to prevent residues of industries and local bodies and to keep the environment clean by controlling the pollutants under a limit."
        },
        {
            name: "Haryana Forest Development Corporation",
            year: "7th December, 1989",
            detailHindi: "राज्य में वनों के विकास के लिए इसकी स्थापना 7 दिसंबर, 1989 को की गई थी। इसका मुख्यालय पंचकुला जिले में है।",
            detailEnglish: "It was established on 7th December, 1989 for the development of forests in the state. Its headquarters is in Panchkula district."
        },
        {
            name: "State Medicinal Plants Board",
            year: "13th August, 2002",
            detailHindi: "राज्य औषधीय पौधे बोर्ड की स्थापना 13 अगस्त, 2002 को हरियाणा में की गई थी। यह राज्य में औषधीय पौधों के क्षेत्र को बढ़ावा देने और राष्ट्रीय औषधीय पौधे बोर्ड की परियोजनाओं के कार्यान्वयन के लिए काम करता है। इसका मुख्यालय पंचकुला जिले में है। राज्य के वन मंत्री इस बोर्ड के पदेन अध्यक्ष हैं।",
            detailEnglish: "The State Medicinal Plants Board was established on 13th August, 2002 in Haryana. It works for the promotion of the area of medicinal plants in the state and the implementation of the projects of the National Medicinal Plant Board. Its headquarters is in Panchkula district. The Forest Minister of the state is the Ex-officio President of this board."
        },
        {
            name: "The Environment Club",
            year: "2005-06",
            detailHindi: "2005-06 में, हरियाणा सरकार ने 'नेशनल ग्रीन कोर स्कीम' के तहत राज्य के सभी जिलों में 5250 पर्यावरण क्लब स्थापित करने का लक्ष्य रखा है। वर्तमान में, इस योजना के तहत राज्य में 2850 पर्यावरण क्लब स्थापित किए गए हैं।",
            detailEnglish: "In 2005-06, the Government of Haryana has set a target of establishing 5250 Environment Clubs in all the districts of the state under the 'National Green Core Scheme'. Presently, 2850 environmental clubs have been established under this scheme in the state."
        },
        {
            name: "Clonal Safeda Nursery",
            year: "2016",
            detailHindi: "कुरुक्षेत्र जिले के सिलोथी गाँव में वर्ष 2016 में एक क्लोनल सफेदा संवर्धन केंद्र स्थापित किया गया था।",
            detailEnglish: "A Clonal Safeda Enhancement Centre has been set up in the year 2016 in Silothi village of Kurukshetra district."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-500/5 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Language Toggle Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 hover:bg-green-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-medium backdrop-blur-sm">
                        <Trees className="w-4 h-4" />
                        {language === "hindi" ? "वन संसाधन - हरियाणा सरकार" : "Forest Resources - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा के" : "Forest Resources of"} <span className="text-green-600">{language === "hindi" ? "वन संसाधन" : "Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के वन संसाधनों की संपूर्ण जानकारी - वन आवरण, वर्गीकरण, वन नीति, योजनाएँ, हर्बल पार्क और संबंधित संस्थान"
                            : "Complete information about forest resources of Haryana - forest cover, classification, forest policy, schemes, herbal parks, and related institutes"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Trees className="w-4 h-4 text-green-600" />
                            <span>{language === "hindi" ? "3.62% वन आवरण" : "3.62% Forest Cover"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Leaf className="w-4 h-4 text-green-600" />
                            <span>{language === "hindi" ? "पंचकुला (सर्वाधिक)" : "Panchkula (Highest)"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Landmark className="w-4 h-4 text-green-600" />
                            <span>{language === "hindi" ? "वन नीति 2006" : "Forest Policy 2006"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Flower2 className="w-4 h-4 text-green-600" />
                            <span>{language === "hindi" ? "59 हर्बल पार्क" : "59 Herbal Parks"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Forest Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/20">
                                <Trees className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? forestOverview.titleHindi : forestOverview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? forestOverview.contentHindi : forestOverview.contentEnglish}</p>
                    </div>

                    {/* Forest Cover */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-6 md:p-8 border border-green-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                                <Sprout className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">{language === "hindi" ? forestCover.titleHindi : forestCover.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? forestCover.contentHindi : forestCover.contentEnglish}</div>
                    </div>

                    {/* District-Wise Forest Cover Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-xl font-bold mb-4">{language === "hindi" ? "हरियाणा में जिलेवार वन आवरण" : "District-Wise Forest Cover in Haryana"}</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-green-500/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "जिला" : "District"}</th>
                                        <th className="border p-2 text-center">{language === "hindi" ? "भौगोलिक क्षेत्र (वर्ग किमी)" : "Geographical Area (sq km)"}</th>
                                        <th className="border p-2 text-center">{language === "hindi" ? "कुल वन आवरण (वर्ग किमी)" : "Total Forest Cover (sq km)"}</th>
                                        <th className="border p-2 text-center">{language === "hindi" ? "क्षेत्र का %" : "% of GA"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {districtForestData.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{item.district}</td>
                                            <td className="border p-2 text-center">{item.geoArea}</td>
                                            <td className="border p-2 text-center">{item.forestCover}</td>
                                            <td className="border p-2 text-center">{item.percent}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">*Note: India State of Forest Report, 2019 had provided data for only 21 districts excluding Charkhi Dadri</p>
                    </div>

                    {/* Major Districts with Max and Min Forest Area */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-card rounded-2xl p-6 border shadow-sm">
                            <h2 className="text-lg font-bold mb-4 text-green-600">{language === "hindi" ? "सर्वाधिक वन क्षेत्र वाले 5 जिले" : "Five Districts with Maximum Forest Area"}</h2>
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-green-500/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "जिला" : "District"}</th>
                                        <th className="border p-2 text-center">{language === "hindi" ? "क्षेत्रफल (वर्ग किमी)" : "Area (sq km)"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {maxForestDistricts.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{item.name}</td>
                                            <td className="border p-2 text-center">{item.area}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-card rounded-2xl p-6 border shadow-sm">
                            <h2 className="text-lg font-bold mb-4 text-red-600">{language === "hindi" ? "न्यूनतम वन क्षेत्र वाले 5 जिले" : "Five Districts with Minimum Forest Area"}</h2>
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-red-500/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "जिला" : "District"}</th>
                                        <th className="border p-2 text-center">{language === "hindi" ? "क्षेत्रफल (वर्ग किमी)" : "Area (sq km)"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {minForestDistricts.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{item.name}</td>
                                            <td className="border p-2 text-center">{item.area}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Classification of Forests */}
                    <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/30">
                                <Leaf className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary">{language === "hindi" ? "हरियाणा में वनों का वर्गीकरण" : "Classification of Forests in Haryana"}</h2>
                        </div>
                        <div className="space-y-6">
                            {/* Geographical Classification */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-lg font-semibold mb-2">{language === "hindi" ? geographicalClassification.titleHindi : geographicalClassification.titleEnglish}</h3>
                                <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-4">{language === "hindi" ? geographicalClassification.contentHindi : geographicalClassification.contentEnglish}</div>

                                <div className="pl-4 space-y-3 mt-3">
                                    <div>
                                        <h4 className="font-semibold text-green-600">{language === "hindi" ? tropicalDryForests.titleHindi : tropicalDryForests.titleEnglish}</h4>
                                        <p className="text-muted-foreground leading-relaxed text-sm">{language === "hindi" ? tropicalDryForests.contentHindi : tropicalDryForests.contentEnglish}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-600">{language === "hindi" ? subTropicalForests.titleHindi : subTropicalForests.titleEnglish}</h4>
                                        <p className="text-muted-foreground leading-relaxed text-sm">{language === "hindi" ? subTropicalForests.contentHindi : subTropicalForests.contentEnglish}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Administrative Classification */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-lg font-semibold mb-2">{language === "hindi" ? administrativeClassification.titleHindi : administrativeClassification.titleEnglish}</h3>
                                <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-4">{language === "hindi" ? administrativeClassification.contentHindi : administrativeClassification.contentEnglish}</div>

                                <div className="pl-4 space-y-3 mt-3">
                                    <div>
                                        <h4 className="font-semibold text-blue-600">{language === "hindi" ? reservedForests.titleHindi : reservedForests.titleEnglish}</h4>
                                        <p className="text-muted-foreground leading-relaxed text-sm">{language === "hindi" ? reservedForests.contentHindi : reservedForests.contentEnglish}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-blue-600">{language === "hindi" ? protectedForests.titleHindi : protectedForests.titleEnglish}</h4>
                                        <p className="text-muted-foreground leading-relaxed text-sm">{language === "hindi" ? protectedForests.contentHindi : protectedForests.contentEnglish}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-blue-600">{language === "hindi" ? unclassifiedForests.titleHindi : unclassifiedForests.titleEnglish}</h4>
                                        <p className="text-muted-foreground leading-relaxed text-sm">{language === "hindi" ? unclassifiedForests.contentHindi : unclassifiedForests.contentEnglish}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Haryana State Forest Policy 2006 */}
                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6 md:p-8 border border-amber-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                                <Landmark className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400">{language === "hindi" ? forestPolicy.titleHindi : forestPolicy.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? forestPolicy.contentHindi : forestPolicy.contentEnglish}</div>
                    </div>

                    {/* Schemes Related to Forest Development */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-6 md:p-8 border border-blue-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                <Building className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{language === "hindi" ? "हरियाणा में वन विकास से संबंधित योजनाएँ" : "Schemes Related to Forest Development in Haryana"}</h2>
                        </div>
                        <div className="space-y-4">
                            {schemesData.map((scheme, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold">{scheme.name} ({scheme.year})</h3>
                                    <p className="text-muted-foreground leading-relaxed mt-1">{language === "hindi" ? scheme.detailHindi : scheme.detailEnglish}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Herbal Parks Section */}
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-2xl p-6 md:p-8 border border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                                <Flower2 className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400">{language === "hindi" ? "हरियाणा के हर्बल पार्क" : "Herbal Parks in Haryana"}</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">आर्थिक सर्वेक्षण 2019-20 के अनुसार, राज्य में कुल 59 हर्बल पार्क स्थापित किए गए हैं। राज्य का पहला और सबसे बड़ा हर्बल पार्क चौधरी देवीलाल हर्बल नेचर पार्क है, जो यमुनानगर जिले के चुहरपुर गाँव में स्थित है।</p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                            <div>
                                <h3 className="font-semibold text-purple-600 mb-2">{language === "hindi" ? "उत्तरी क्षेत्र" : "Northern Region"}</h3>
                                <ul className="text-sm space-y-1">
                                    {northernHerbalParks.map((park, idx) => (
                                        <li key={idx}>• {park.name} ({park.district})</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-600 mb-2">{language === "hindi" ? "दक्षिणी क्षेत्र" : "Southern Region"}</h3>
                                <ul className="text-sm space-y-1">
                                    {southernHerbalParks.map((park, idx) => (
                                        <li key={idx}>• {park.name} ({park.district})</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-600 mb-2">{language === "hindi" ? "पश्चिमी क्षेत्र" : "Western Region"}</h3>
                                <ul className="text-sm space-y-1">
                                    {westernHerbalParks.map((park, idx) => (
                                        <li key={idx}>• {park.name} ({park.district})</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-600 mb-2">{language === "hindi" ? "मध्य क्षेत्र" : "Central Region"}</h3>
                                <ul className="text-sm space-y-1">
                                    {centralHerbalParks.map((park, idx) => (
                                        <li key={idx}>• {park.name} ({park.district})</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Forest and Environment Related Institutes */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Building className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "वन एवं पर्यावरण से संबंधित संस्थान" : "Forest and Environment Related Institutes"}</h2>
                        </div>
                        <div className="space-y-4">
                            {institutesData.map((inst, idx) => (
                                <div key={idx} className="border-l-4 border-green-500 pl-4 py-2">
                                    <h3 className="text-lg font-semibold">{inst.name}</h3>
                                    <p className="text-sm text-muted-foreground">{language === "hindi" ? "स्थापना:" : "Established:"} {inst.year}</p>
                                    <p className="text-muted-foreground leading-relaxed mt-1">{language === "hindi" ? inst.detailHindi : inst.detailEnglish}</p>
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
                        {language === "hindi" ? "हरियाणा वन संसाधन: तथ्य सारांश" : "Haryana Forest Resources: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">3.62%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "वन आवरण प्रतिशत" : "Forest Cover Percentage"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">390.70</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "पंचकुला में वन क्षेत्र (वर्ग किमी)" : "Forest Area in Panchkula (sq km)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">249</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "आरक्षित वन क्षेत्र (वर्ग किमी)" : "Reserved Forest Area (sq km)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">1158</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "संरक्षित वन क्षेत्र (वर्ग किमी)" : "Protected Forest Area (sq km)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">59</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हर्बल पार्क" : "Herbal Parks"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">15 जुलाई</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "पेड़ दिवस" : "Tree Day"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">141.01 लाख</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हर घर हरियाली के तहत पौधे" : "Saplings under Har Ghar Hariyali"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">1989</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हरियाणा वन विकास निगम" : "Haryana Forest Development Corporation"}</p>
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
                            {language === "hindi" ? "हरियाणा के वन संसाधनों के बारे में" : "Common"} <span className="text-green-600">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Haryana Forest Resources"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के वन संसाधनों, वन आवरण, वन नीति, योजनाओं और हर्बल पार्कों के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's forest resources, forest cover, forest policy, schemes, and herbal parks"}
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
                            {language === "hindi" ? "अपने हरियाणा वन संसाधनों के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Forest Resources of Haryana?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-green-600 hover:bg-green-700">
                                {language === "hindi" ? "हरियाणा वन संसाधन क्विज़ लें" : "Take Haryana Forest Resources Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/drainage-system" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Drainage System of Haryana
                        </Link>
                        <Link href="/haryana-gk/national-parks" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                            Next Chapter: National Parks of Haryana
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा के वन संसाधन - संपूर्ण संदर्भ" : "Forest Resources of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के वन संसाधनों के बारे में व्यापक जानकारी प्रदान करता है जिसमें वन आवरण, वनों का वर्गीकरण, वन नीति, विकास योजनाएँ, हर्बल पार्क और संबंधित संस्थान शामिल हैं। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about the forest resources of Haryana including forest cover, classification of forests, forest policy, development schemes, herbal parks, and related institutes. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK and Forest Resources."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और वन अभिलेखों से स्रोतित" : "Information sourced from official Government of Haryana publications and forest records"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}