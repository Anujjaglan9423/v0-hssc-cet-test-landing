"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    History,
    Map,
    Mountain,
    Droplets,
    ChevronDown,
    HelpCircle,
    Compass,
    Globe,
    Landmark,
    Route,
    Trees,
    ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GeographyOfHaryanaPage() {
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
            questionHindi: "हरियाणा का कुल क्षेत्रफल कितना है?",
            questionEnglish: "What is the total area of Haryana?",
            answerHindi: "हरियाणा का कुल क्षेत्रफल 44,212 वर्ग किमी है, जो देश के कुल क्षेत्रफल का 1.34% है। क्षेत्रफल की दृष्टि से यह भारत का 21वाँ सबसे बड़ा राज्य है।",
            answerEnglish: "The total area of Haryana is 44,212 sq km, which is 1.34% of the country's total area. In terms of area, it is the 21st largest state of India."
        },
        {
            questionHindi: "हरियाणा का सबसे बड़ा और सबसे छोटा जिला कौन सा है?",
            questionEnglish: "Which is the largest and smallest district of Haryana?",
            answerHindi: "क्षेत्रफल की दृष्टि से सिरसा (4,277 वर्ग किमी) सबसे बड़ा जिला है, जबकि फरीदाबाद (743 वर्ग किमी) सबसे छोटा जिला है।",
            answerEnglish: "In terms of area, Sirsa (4,277 sq km) is the largest district, while Faridabad (743 sq km) is the smallest district."
        },
        {
            questionHindi: "हरियाणा की सीमा कितने राज्यों और केंद्र शासित प्रदेशों से लगती है?",
            questionEnglish: "How many states and union territories share border with Haryana?",
            answerHindi: "हरियाणा की सीमा 5 राज्यों (राजस्थान, पंजाब, उत्तर प्रदेश, हिमाचल प्रदेश, उत्तराखंड) और 2 केंद्र शासित प्रदेशों (दिल्ली, चंडीगढ़) से लगती है।",
            answerEnglish: "Haryana shares its border with 5 states (Rajasthan, Punjab, Uttar Pradesh, Himachal Pradesh, Uttarakhand) and 2 union territories (Delhi, Chandigarh)."
        },
        {
            questionHindi: "हरियाणा में सबसे ऊँची चोटी कौन सी है?",
            questionEnglish: "Which is the highest peak in Haryana?",
            answerHindi: "हरियाणा की सबसे ऊँची चोटी करोह पीक (1,514 मीटर) है, जो मोरनी हिल्स में स्थित है।",
            answerEnglish: "The highest peak in Haryana is Karoh Peak (1,514 m), located in the Morni Hills."
        },
        {
            questionHindi: "हरियाणा को भौगोलिक दृष्टि से कितने भागों में बाँटा गया है?",
            questionEnglish: "How many geographical divisions is Haryana divided into?",
            answerHindi: "हरियाणा को भौगोलिक दृष्टि से 8 भागों में बाँटा गया है - शिवालिक, पीडमोंट मैदान, जलोढ़ मैदान, बाढ़ मैदान, बालू टिब्बा मैदान, अरावली की चट्टानी मैदान, उंडुक रेतीले मैदान और दलदली भूमि।",
            answerEnglish: "Haryana is divided into 8 geographical divisions - Shivalik, Piedmont Plains, Alluvial Plains, Flood Plains, Plains with Sand Dunes, Rocky Plains of Aravali Hills, Undulating Sandy Plains, and Marshy Land."
        },
        {
            questionHindi: "हरियाणा का सबसे ऊँचा क्षेत्र कौन सा है?",
            questionEnglish: "Which is the highest elevated area in Haryana?",
            answerHindi: "अरावली हिल्स का सबसे ऊँचा क्षेत्र नारनौल के दक्षिण-पश्चिम भाग में कुतैपुर गाँव में स्थित है, जो 652 मीटर ऊँचा है। इसे ढोसी हिल्स के नाम से जाना जाता है।",
            answerEnglish: "The highest elevated area of Aravali hills is located in the South-West part of Narnaul in Kutaipur village, which is 652 m high. It is known as Dhosi hills."
        },
        {
            questionHindi: "हरियाणा में कितने जिले NCR का हिस्सा हैं?",
            questionEnglish: "How many districts of Haryana are part of NCR?",
            answerHindi: "हरियाणा के 14 जिले (राज्य के 57% क्षेत्र) राष्ट्रीय राजधानी क्षेत्र (NCR) का हिस्सा हैं।",
            answerEnglish: "14 districts (57% area of state) of Haryana are part of the National Capital Region (NCR)."
        },
        {
            questionHindi: "हरियाणा में कितने प्रतिशत क्षेत्र मैदानी है?",
            questionEnglish: "What percentage of Haryana's area is plain?",
            answerHindi: "हरियाणा का लगभग 93.76% क्षेत्र समतल और लहरदार मैदानों से ढका है।",
            answerEnglish: "Around 93.76% area of Haryana is covered by flat and undulating plains."
        }
    ];

    // Location and Extent Section
    const locationExtent = {
        titleHindi: "हरियाणा का स्थान और विस्तार",
        titleEnglish: "Location and Extent of Haryana",
        contentHindi: "हरियाणा भारत के उत्तर-पश्चिमी भाग में और सिंधु मैदानों (जिसे पंजाब मैदान भी कहा जाता है) के दक्षिणी भाग में स्थित है। इंडस-गंगा का मैदान राज्य के अधिकांश भू-भाग को घेरे हुए है। यह कर्क रेखा से 300 मील दूर उत्तरी दिशा में स्थित है। यह 27°39' से 30°55'55 उत्तरी अक्षांश और 74°27'8 से 77°36'5 पूर्वी देशांतर के बीच स्थित है। राज्य की कुल अक्षांशीय और देशांतरीय विस्तार क्रमशः 3°16'5 और 3°8'57 है, जो इसके आकार को व्यक्त करता है। यह एक स्थलरुद्ध राज्य है। राज्य का कुल क्षेत्रफल 44,212 वर्ग किमी है, जो देश के कुल क्षेत्रफल का 1.34% है। क्षेत्रफल की दृष्टि से यह भारत का 21वाँ सबसे बड़ा राज्य है। राज्य में 23 जिले हैं। सिरसा (4,277 वर्ग किमी) क्षेत्रफल की दृष्टि से राज्य का सबसे बड़ा जिला है, जबकि फरीदाबाद (743 वर्ग किमी) सबसे छोटा जिला है। राज्य का आकार एक असमान चतुर्भुज के समान है जिसका अक्षांशीय और देशांतरीय विस्तार 30° × 30° है।",
        contentEnglish: "Haryana is located in the North-Western part of India and in the Southern part of the Indus plains (also known as Punjab plains). The Indus-Ganga Plain surrounds most of the land area of the state. It is located 300 miles away from the Tropic of Cancer in the Northern direction. It is situated between 27°39' to 30°55'55\" North latitude and 74°27'8\" to 77°36'5\" East longitude. The total latitudinal and longitudinal extension of state is 3°16'5\" and 3°8'57\", respectively which expresses its shape. It is a landlocked state. The state has a total area of 44,212 sq km which is 1.34% of the country's total area. In terms of area, it is the 21st largest state of India. There are 23 districts in the state. Sirsa (4,277 sq km) is the largest district of the state in the terms of area whereas Faridabad (743 sq km) is the smallest district. The shape of state is similar to the uneven quadrilateral whose latitudinal and longitudinal expansion is 30° × 30°."
    };

    // Boundary Section
    const boundarySection = {
        titleHindi: "हरियाणा की सीमा का विस्तार",
        titleEnglish: "Extent of Boundary of Haryana",
        contentHindi: "हरियाणा की सीमा 5 राज्यों और 2 केंद्र शासित प्रदेशों से लगती है। हिमाचल प्रदेश उत्तर-पूर्व में, राजस्थान दक्षिण-पश्चिम में, उत्तर प्रदेश, दिल्ली और उत्तराखंड पूर्व में, पंजाब और चंडीगढ़ उत्तर-पश्चिम में स्थित हैं। दिल्ली और चंडीगढ़ केंद्र शासित प्रदेश हैं। हरियाणा तीन तरफ से दिल्ली से घिरा हुआ है। चंडीगढ़ हरियाणा की राजधानी भी है। हरियाणा की सबसे लंबी सीमा राजस्थान (लगभग 1262 किमी) के साथ लगती है और सबसे छोटी सीमा उत्तराखंड (लगभग 12 किमी) के साथ लगती है। राज्य की प्राकृतिक सीमाओं में उत्तर-पूर्व में शिवालिक श्रेणियाँ, दक्षिण में अरावली पहाड़ियाँ, पूर्व में यमुना नदी और दक्षिण-पश्चिम में राजस्थान का रेगिस्तान शामिल हैं। यमुना नदी हरियाणा और उत्तर प्रदेश के बीच सीमा बनाती है। यह हरियाणा की पूर्वी सीमा की ओर बहती है। नूह (मेवात) जिला राजस्थान और उत्तर प्रदेश के साथ सीमा साझा करता है। यमुनानगर जिला तीन राज्यों - हिमाचल प्रदेश, उत्तराखंड और उत्तर प्रदेश के साथ सीमा साझा करता है। पंचकुला जिला दो राज्यों - पंजाब और हिमाचल प्रदेश और एक केंद्र शासित प्रदेश चंडीगढ़ के साथ सीमा साझा करता है। जींद जिला हरियाणा में सबसे अधिक जिलों के साथ सीमा साझा करता है। यह 7 जिलों - फतेहाबाद, हिसार, रोहतक, सोनीपत, पानीपत, करनाल और कैथल के साथ सीमा साझा करता है। रोहतक और चरखी दादरी हरियाणा के एकमात्र ऐसे जिले हैं जो किसी भी राज्य या केंद्र शासित प्रदेश के साथ सीमा साझा नहीं करते हैं। रोहतक जिला जींद, हिसार, भिवानी, चरखी दादरी, झज्जर और सोनीपत के साथ सीमा साझा करता है। महेंद्रगढ़ जिला तीन तरफ से राजस्थान से घिरा हुआ है। हरियाणा के 14 जिले (राज्य के 57% क्षेत्र) राष्ट्रीय राजधानी क्षेत्र (NCR) का हिस्सा हैं।",
        contentEnglish: "Haryana shares its border with 5 States and 2 Union Territories. Himachal Pradesh lies in the North-East, Rajasthan in South-West, Uttar Pradesh, Delhi and Uttarakhand in East, Punjab and Chandigarh in North-West. Delhi and Chandigarh are Union Territories. Haryana is surrounded by Delhi from three sides. Chandigarh is also the capital of Haryana. Haryana shares longest boundary with Rajasthan (about 1262 km) and shortest with Uttarakhand (about 12 km). The natural boundaries of the state include the Shivalik ranges in its North-East, the Aravali hills in the South, the Yamuna river in the East and the desert of Rajasthan in the South-West. River Yamuna demarcates boundary between Haryana and Uttar Pradesh. It flows towards the Eastern border of Haryana. Nuh (Mewat) district shares border with Rajasthan and Uttar Pradesh. Yamunanagar district shares border with three states namely, Himachal Pradesh, Uttarakhand and Uttar Pradesh. Panchkula district shares border with two states namely, Punjab and Himachal Pradesh and one Union Territory i.e. Chandigarh. Jind district shares border with highest number of districts in Haryana. It shares borders with 7 districts i.e. Fatehabad, Hisar, Rohtak, Sonipat, Panipat, Karnal and Kaithal. Rohtak and Charkhi Dadri are only districts of Haryana which do not share borders with any State or Union Territory. Rohtak district shares border with Jind, Hisar, Bhiwani, Charkhi Dadri, Jhajjar and Sonipat. Mahendragarh district is surrounded by Rajasthan from three sides. 14 districts (57% area of state) of Haryana are part of the National Capital Region."
    };

    // Neighbouring States Table Data
    const neighbouringStates = [
        { state: "Rajasthan", districts: "8", direction: "South-West", names: "Gurugram, Nuh, Rewari, Mahendragarh, Bhiwani, Hisar, Fatehabad and Sirsa" },
        { state: "Punjab", districts: "7", direction: "North-West", names: "Sirsa, Fatehabad, Jind, Kaithal, Kurukshetra, Ambala and Panchkula" },
        { state: "Uttar Pradesh", districts: "7", direction: "East", names: "Yamunanagar, Karnal, Panipat, Sonipat, Faridabad, Palwal and Mewat" },
        { state: "Himachal Pradesh", districts: "3", direction: "North-East", names: "Panchkula, Ambala and Yamunanagar" },
        { state: "Uttarakhand", districts: "1", direction: "East", names: "Yamunanagar" },
        { state: "Delhi (UT)", districts: "4", direction: "South-East", names: "Sonipat, Jhajjar, Faridabad and Gurugram" },
        { state: "Chandigarh (UT)", districts: "1", direction: "-", names: "Panchkula" }
    ];

    // Largest and Smallest Districts Table
    const largestDistricts = [
        { name: "Sirsa", area: "4,277" },
        { name: "Hisar", area: "3,983" },
        { name: "Bhiwani", area: "3,352.26" },
        { name: "Jind", area: "2,702" },
        { name: "Fatehabad", area: "2,538" }
    ];

    const smallestDistricts = [
        { name: "Faridabad", area: "741" },
        { name: "Panchkula", area: "898" },
        { name: "Gurugram", area: "1,258" },
        { name: "Panipat", area: "1,268" },
        { name: "Palwal", area: "1,359" }
    ];

    // Geological Structure Section
    const geologicalStructure = {
        titleHindi: "हरियाणा की भूगर्भिक संरचना",
        titleEnglish: "Geological Structure of Haryana",
        contentHindi: "हरियाणा की भूगर्भिक संरचना गठन के दिन से अस्थिर रही है और समय के साथ बदलती रही है। अजोटिक काल और पेलियोजोइक काल के दौरान, हरियाणा की भूगर्भिक संरचना में कोई बदलाव नहीं आया है। इसकी भूगर्भिक संरचना में महत्वपूर्ण परिवर्तन मेसोजोइक काल के दौरान हुए। सेनोजोइक काल (लगभग 4 करोड़ से 6 लाख साल पहले) के दौरान, नदियों, पहाड़ों और अन्य भौगोलिक विशेषताओं का निर्माण हुआ। ऐसा माना जाता है कि इसी अवधि के दौरान हरियाणा का भौगोलिक स्थान और जलवायु भी निर्धारित की गई थी। प्रसिद्ध लेखक कर्नल एमएल गिल भार्गव के अनुसार, भूगर्भिक अतीत में, राज्य का दक्षिणी भाग समुद्र से घिरा था। ये समुद्र पश्चिम में सरस्वत और पूर्व में अखावत थे। मेसोजोइक काल में, राज्य का यह हिस्सा उत्तर भारत के अन्य क्षेत्रों के साथ ऊपर उभरा। अतीत में, अरावली श्रेणियाँ जो हरियाणा में स्थित हैं, काफी ऊँची थीं और बर्फ से ढकी हुई थीं। ऐसा माना जाता है कि इन पहाड़ियों से कई नदियाँ निकलती थीं। अतीत में, राज्य की जलवायु अलग थी और राज्य में भारी वर्षा होती थी। सर्दी का मौसम बहुत ठंडा होता था और गर्मी का मौसम इतना लंबा नहीं होता था। हालाँकि, भूगर्भिक संरचना में बदलाव के साथ राज्य की जलवायु बदल गई। राज्य की भूगर्भिक संरचना के आधार पर, यह कहा जा सकता है कि हिमालय पर्वत की तलछटी चट्टानों को काटकर, नदियों ने घग्गर-यमुना नदियों के उपजाऊ मैदानों का निर्माण करने के लिए अपना मार्ग बदल लिया है। दिल्ली समूह में, पुराना श्रृंखला की चट्टानें पाई जाती हैं, जो खनिजों के लिए प्रसिद्ध हैं। इस श्रृंखला की चट्टानें नारनौल क्षेत्र में पाई जाती हैं। यह क्षेत्र खनिजों के संग्रहालय के रूप में जाना जाता है।",
        contentEnglish: "Haryana's geological structure has been unstable since the day of formation and has changed with time. During Azotic period and Paleozoic period, there has been no change in the geological structure of Haryana. The important changes in its geological structure occurred during Mesozoic period. During Cenozoic period (about 4 crore to 6 lakh years ago), rivers, mountains and other geographical features were formed. It is believed that the geographical location and climate of Haryana has also been determined during this period. According to famous writer Colonel ML Gill Bhargav, in the geological past, Southern part of state was bordered by the sea. These seas were Saraswat in the West and Akhawat in the East. In Mesozoic period, this part of the state also emerged above along with the other regions of North India. In the past, Aravali ranges which are located in Haryana were quite lofty and covered with snow. A number of rivers is believed to have been originated from these hills. In the past, climate of state was different and the state used to receive heavy rainfall. The winter season was very cold and the summer season was not so long. However, the climate of state changed with the change in geological structure. Based on the geological structure of the state, it can be said that by cutting the sedimentary rocks of the Himalayan Mountains, the rivers have changed their route to form the fertile plains of Ghaggar Yamuna rivers. In Delhi Group, rocks of Purana series are found, which are famous for minerals. The rocks of this series are found in the Narnaul region. This region is known as Museum of Minerals."
    };

    // Divisions on Basis of Geographical Area
    const geographicalDivisionsArea = {
        titleHindi: "भौगोलिक क्षेत्र के आधार पर हरियाणा के प्रभाग",
        titleEnglish: "Divisions of Haryana on the Basis of Geographical Area",
        contentHindi: "भौगोलिक क्षेत्र के आधार पर, हरियाणा को तीन प्रभागों में विभाजित किया जा सकता है:\n\n(i) कुरुक्षेत्र - यह 28°30' से 30° उत्तरी अक्षांश और 76°21' से 77° पूर्वी देशांतर के बीच स्थित है। जींद और करनाल इस प्रभाग का हिस्सा हैं। यह क्षेत्र धार्मिक दृष्टिकोण से काफी महत्वपूर्ण है। चौतंग नदी इस प्रभाग में बहती है और कुरुक्षेत्र जिले की मिट्टी बलुई नहीं है।\n\n(ii) हरियाणा - यह 29°30' से 30° उत्तरी अक्षांश के बीच स्थित है। फतेहाबाद, हांसी, हिसार, भिवानी और रोहतक जिले इस प्रभाग में स्थित हैं। यह प्रभाग मुख्य रूप से जाट लोगों द्वारा बसा हुआ है, इसलिए इसे जातीय क्षेत्र भी कहा जाता है।\n\n(iii) भट्टियाना - यह भौगोलिक प्रभाग फतेहाबाद और बट्टू तहसीलों के बीच स्थित है। यह प्रभाग प्राचीन काल से भाटी राजपूतों द्वारा प्रभुत्व में है, इसलिए इस क्षेत्र को भट्टियाना के नाम से जाना जाता है।",
        contentEnglish: "On the basis of geographical area, Haryana can be divided into three divisions. These are:\n\n(i) Kurukshetra - It is situated between 28°30' to 30° North Latitude and 76°21' to 77° East Longitudes. Jind and Karnal are part of this division. This area is quite important from the point of view of religion. Chautang river flows in this division and soil of Kurukshetra district is not sandy.\n\n(ii) Haryana - It is situated between 29°30' to 30° North Latitude. Fatehabad, Hansi, Hisar, Bhiwani and Rohtak districts lie in this division. This division is mainly inhabited by Jat people, thus, it is also called Jatiyaat area.\n\n(iii) Bhattiana - This geographical division is situated between Fatehabad and Batu Tehsils. This division is dominated by the Bhati Rajputs from ancient time, thus, this area is known as Bhattiana."
    };

    // Physiography Section
    const physiography = {
        titleHindi: "हरियाणा का भू-आकृति विज्ञान",
        titleEnglish: "Physiography of Haryana",
        contentHindi: "राज्य के भू-आकृति विज्ञान में समतल मैदान, पहाड़ियाँ आदि शामिल हैं। इनमें से, समतल मैदानों का प्रतिशत सबसे अधिक है। राज्य का लगभग 93.76% क्षेत्र समतल और लहरदार मैदानों से ढका है, जो घग्गर और यमुना नदियों के बीच स्थित है। यह मैदानी क्षेत्र घग्गर-यमुना मैदान के नाम से भी जाना जाता है। यह राज्य का सबसे बड़ा भू-आकृति क्षेत्र है। इस मैदान का लगभग 68.21% क्षेत्र समतल और 25.55% क्षेत्र लहरदार है। इस मैदान की औसत ऊँचाई समुद्र तल से लगभग 200 से 300 मीटर है। यह मैदान हिमालयी नदी द्वारा तलछट के जमाव के कारण बना है। इस मैदान के अलावा, रेत के ठूंठ और टीले राज्य के 6.24% क्षेत्र पर पाए जाते हैं। अरावली पहाड़ियों के अवशेष राज्य के 3.09% क्षेत्र को कवर करते हैं। अरावली पहाड़ियों की ऊँचाई समुद्र तल से 300 मीटर से अधिक है। महेंद्रगढ़, रेवाड़ी, गुरुग्राम, भिवानी, चरखी दादरी, पलवल और फरीदाबाद जिले पहाड़ी और चट्टानी भू-आकृति वाले क्षेत्र हैं। शिवालिक पहाड़ियाँ भी राज्य के उत्तर-पूर्वी भाग में पाई जाती हैं। इसलिए, राज्य के परिदृश्य में घग्गर और यमुना नदियों के बीच बड़े मैदान, उत्तर-पूर्वी भाग में शिवालिक श्रेणियाँ और दक्षिणी भाग में अरावली श्रेणी की अवशेष पहाड़ियाँ हैं। राज्य में ढलान आम तौर पर दक्षिण-पश्चिम से पश्चिम की ओर है।",
        contentEnglish: "The physiography of state includes flat plains, hills etc. Among these, flat plains have highest percentage. Around 93.76% area of the state is covered by flat and undulating plains, which lies between Ghaggar and Yamuna rivers. This plain area is also known as Ghaggar-Yamuna Plains. It is the largest physiographic region of the state. Around 68.21% and 25.55% area of this plain is flat and undulating, respectively. The average altitude of this plain is around 200 to 300 m above sea level. This plain has been formed due to deposition of sediments by the Himalayan river. Besides this plain stumps and mounds of sands are found on (6.24% area of the state). Remnants of Aravali hills covers 3.09% area of the state. The altitude of Aravali hills is more than 300 m above sea level. Mahendragarh, Rewari, Gurugram, Bhiwani, Charkhi Dadri, Palwal and Faridabad districts are hilly and rocky physiographic regions. Shivalik hills are also found in the North-Eastern part of the state. Hence, the landscape of the state has large plains between the Ghaggar and Yamuna rivers, the Shivalik ranges in the North-Eastern part and the residual hills of the Aravali range in the Southern part. The slope in the state is generally from South-West to West."
    };

    // 8 Geographical Divisions Data
    const geoDivisions = [
        {
            titleHindi: "1. शिवालिक (Shivalik)",
            titleEnglish: "1. Shivalik",
            contentHindi: "शिवालिक पहाड़ियाँ राज्य के उत्तर-पूर्वी भाग में स्थित हैं, जिसमें पंचकुला (राज्य का एकमात्र हिल स्टेशन), अंबाला और यमुनानगर जिलों का उत्तर-पूर्वी भाग शामिल है। यह क्षेत्र पीडमोंट मैदान के रूप में भी जाना जाता है। शिवालिक को उप-हिमालय भी कहा जाता है। यह सबसे युवा हिमालयी श्रेणी है। यह श्रेणी पोस्ट-प्लियोसीन युग के दौरान बनी थी। यह श्रेणी हिमालय के दक्षिण में नदियों द्वारा तलछट के जमाव से बनी थी। राज्य के लगभग 1.38% क्षेत्र में शिवालिक पहाड़ियाँ फैली हैं। शिवालिक पहाड़ियों की औसत ऊँचाई 300-600 मीटर है। हालाँकि, कई स्थानों पर उनकी ऊँचाई 600 मीटर से अधिक है। राज्य का लगभग 0.56% और 0.92% क्षेत्र क्रमशः शिवालिक और उप-शिवालिक पहाड़ियों से ढका है।\n\nऊँचाई के आधार पर, शिवालिक पहाड़ियों को दो भागों में वर्गीकृत किया गया है:\n\n(i) ऊपरी शिवालिक श्रेणियाँ - इन श्रेणियों की औसत ऊँचाई 600 मीटर से अधिक है। मोरनी हिल्स, राज्य की सबसे ऊँची पहाड़ियाँ, इन श्रेणियों का एक हिस्सा है। मोरनी हिल्स पंचकुला जिले से 35 किमी की दूरी पर स्थित है। इन पहाड़ियों पर सबसे ऊँचा बिंदु करोह पीक (1,514 मीटर) है। मोरनी हिल्स हिमालयी मैदानों को जोड़ने में महत्वपूर्ण भूमिका निभाती है। मोरनी और टिपरा पहाड़ियाँ घग्गर नदी द्वारा अलग की जाती हैं।\n\n(ii) निचली शिवालिक श्रेणियाँ - इन श्रेणियों की औसत ऊँचाई 400-600 मीटर के बीच है। ये श्रेणियाँ गाद, कंकड़, समूह आदि के जमाव के कारण बनती हैं।\n\nघग्गर, मारकंडा, तांगरी और सरस्वती नदियाँ शिवालिक श्रेणियों से निकलती हैं। शिवालिक पहाड़ियों में तीव्र ढलान हैं जिसके कारण ये नदियाँ इन पहाड़ियों का कटाव करती हैं।",
            contentEnglish: "Shivalik hills are situated in the North-Eastern part of the state which include the North-Eastern part of Panchkula (only hill station of state), Ambala and Yamunanagar Districts. This region is also known as Piedmont Plain. Shivalik is also known as sub-himalaya. It is the youngest Himalayan range. This range was formed during post Pliocene Age. This range was formed by the deposition of sediments by rivers in the South of Himalayas. Around 1.38% of the area of the state is covered by Shivalik hills. The average altitude of Shivalik hills is 300-600 m. However, at many places their altitude is more than 600 m. Around 0.56% and 0.92% area of the state is covered by Shivalik and Sub-Shivalik hills.\n\nOn the basis of altitude, Shivalik hills has been categorised into two parts:\n\n(i) Upper Shivalik Ranges - The average height of these ranges is more than 600 m. Morni hills, the highest hills in the state is a part of these ranges. Morni hills lies at a distance of 35 km from the district of Panchkula. The highest point on these hills is the Karoh Peak (1,514 m). Morni hills plays a vital role in connecting Himalayan Plains. Morni and Tipra hills are separated by the Ghaggar river.\n\n(ii) Lower Shivalik Ranges - The average height of these ranges is between 400-600 m. These ranges are formed due to deposition of silt, pebbles, conglomerates, etc.\n\nGhaggar, Markanda, Tangri and Saraswati rivers originate from Shivalik ranges. Shivalik hills have intense slopes due to which these rivers erode these hills."
        },
        {
            titleHindi: "2. पीडमोंट मैदान (Piedmont Plains)",
            titleEnglish: "2. Piedmont Plains",
            contentHindi: "ये मैदान शिवालिक पहाड़ियों के दक्षिण में स्थित हैं। ये मैदान यमुना नदी से घग्गर नदी तक फैले हुए हैं। ये मैदान 25 किमी की चौड़ी पट्टी में फैले हैं जिसमें अंबाला, पंचकुला और यमुनानगर के जिले शामिल हैं। इन मैदानों की औसत ऊँचाई 300-375 मीटर है। पीडमोंट मैदान शिवालिक पहाड़ियों और राज्य के मैदानी क्षेत्रों के बीच संक्रमण का क्षेत्र हैं। स्थानीय रूप से, इन मैदानों को घर के नाम से जाना जाता है। इन मैदानों में, हिमालयी नदी और धाराओं के कारण कई गड्ढे बनते हैं। इन गड्ढों को पहाड़ी भाषा में चो के नाम से जाना जाता है। घग्गर और मारकंडा इन मैदानों की मुख्य नदियाँ हैं। शिवालिक से बहने वाली नदियाँ अपने साथ बड़ी मात्रा में गाद, कंकड़, बजरी, समूह आदि ले जाती हैं। पीडमोंट मैदानों में इन सामग्रियों के जमाव के कारण, जलोढ़ पंखे बनते हैं। ये मैदान कम उपजाऊ हैं। इन मैदानों की ढलान उत्तर-पूर्व से दक्षिण-पश्चिम की ओर है।",
            contentEnglish: "These plains located in South of Shivalik hills. These plains extend from Yamuna river to Ghaggar river. These plains spread to a wide strip of 25 km that included the districts of Ambala, Panchkula and Yamunanagar. The average height of these plains is 300-375 m. Piedmont Plains are a zone of transition between Shivalik hills and plain areas of the state. Locally, these plains are known as Ghar. In these plains, many pits are formed due to Himalayan river and streams. These pits are known as Cho in Pahari language. Ghaggar and Markanda are main rivers of these plains. The rivers which flows from Shivalik carry silt, pebbles, gravels, conglomerates etc along with them in large quantity. Due to deposition of these material in Piedmont Plains, Alluvial Fans are formed. These plains are less fertile. The slope of these plains is from North-East to South-West."
        },
        {
            titleHindi: "3. जलोढ़ मैदान (Alluvial Plains)",
            titleEnglish: "3. Alluvial Plains",
            contentHindi: "जलोढ़ मैदान उत्तर में शिवालिक के पीडमोंट मैदानों और दक्षिण में अरावली पहाड़ियों और यमुना और घग्गर नदियों के बीच स्थित हैं। यह मैदान स्थानीय भाषा में भांगर के नाम से भी जाना जाता है। ये मैदान अंबाला, यमुनानगर, कैथल, करनाल, कुरुक्षेत्र, पानीपत, सोनीपत, रोहतक, जींद, हिसार, फतेहाबाद, सिरसा, गुरुग्राम और फरीदाबाद जिलों में फैले हुए हैं। इन मैदानों में हल्की ढलान है और इसकी दिशा उत्तर-पूर्व से दक्षिण-पश्चिम है। इन मैदानों की औसत ऊँचाई समुद्र तल से 220-280 मीटर है। मारकंडा, सरस्वती और चौतंग नदियाँ इन मैदानों में बहती हैं। ये मैदान अत्यधिक उपजाऊ हैं और इन मैदानों में मुख्य रूप से गेहूँ और धान जैसी फसलें उगाई जाती हैं।",
            contentEnglish: "Alluvial Plains lie between Piedmont Plains of Shivalik in the North and Aravali hills and Yamuna and Ghaggar rivers in the South. This plain is also known as Bhangar in local language. These plains are spread in the districts of Ambala, Yamunanagar, Kaithal, Karnal, Kurukshetra, Panipat, Sonipat, Rohtak, Jind, Hisar, Fatehabad, Sirsa, Gurugram and Faridabad. These plains has gentle slope and its direction is from North-East to South-West. The average altitude of these plains is 220-280 m above sea level. Markanda, Saraswati and Chautang rivers flow in these plains. These plains are highly fertile and crops like wheat and paddy are mainly grown in these plains."
        },
        {
            titleHindi: "4. बाढ़ मैदान (Flood Plains)",
            titleEnglish: "4. Flood Plains",
            contentHindi: "ये मैदान राज्य के पूर्वी और उत्तर-पश्चिमी भाग में पाए जाते हैं। पूर्वी भाग के मैदान प्रकृति में लहरदार हैं, जिनमें अंतर्संबंधित घाटी मार्ग और दलदली भूमि पाई जाती है। ये मैदान यमुना नदी और उसकी सहायक नदियों से तलछट के जमाव के कारण बने हैं। ये नदियाँ राज्य में यमुनानगर से फरीदाबाद तक बहती हैं। राज्य के उत्तर-पश्चिमी भाग में बाढ़ के मैदान घग्गर और मारकंडा नदियों द्वारा तलछट के जमाव के कारण बने हैं। स्थानीय भाषा में, इन मैदानों को नैली और बेट के नाम से जाना जाता है।",
            contentEnglish: "These plains are found in Eastern and North-Western part of the state. The plains of Eastern part are undulating in nature in which, interlinked valley root and marshy lands are found. These plains have been formed due to deposition of sediments from Yamuna river and its tributaries. These rivers flow from Yamunanagar to Faridabad in the state. Flood Plains in North-Western part of the state has been formed due to deposition of sediments by Ghaggar and Markanda rivers. In local language, these plains are known as Naili and Bet."
        },
        {
            titleHindi: "5. बालू टिब्बा मैदान (Plains with Sand Dunes)",
            titleEnglish: "5. Plains with Sand Dunes",
            contentHindi: "ये मैदान हरियाणा में रेतीले मैदानों के रूप में जाने जाते हैं। ये मैदान राज्य के दक्षिण-पश्चिमी भाग और राजस्थान की सीमा के साथ फैले हुए हैं। ये मैदान सिरसा के दक्षिणी भाग से हिसार, भिवानी, महेंद्रगढ़, रेवाड़ी और झज्जर जिलों तक फैले हुए हैं। ये मैदान राजस्थान के रेगिस्तानी क्षेत्रों से बहने वाली गर्म-शुष्क हवाओं द्वारा रेत के जमाव के कारण बने हैं। रेत के टीलों की औसत ऊँचाई 3 से 6 मीटर है, हालाँकि कई स्थानों पर इन रेत के टीलों की ऊँचाई 15 मीटर तक पहुँच जाती है। रेत के टीले हवा की दिशा में आगे बढ़ते रहते हैं। रेत के टीलों के बीच कई निचले बेसिन क्षेत्र बनते हैं और उन्हें स्थानीय रूप से ताल के नाम से जाना जाता है। मानसून के दौरान, ये ताल पानी से भर जाते हैं और अस्थायी उथली झीलें बनाते हैं जिन्हें 'थूथ या बावड़ी' कहा जाता है। रेत के टीलों के कारण, ये मैदान अनुपजाऊ हैं। इन मैदानों में, रेत के टीलों के आगे विस्तार को रोकने के लिए पेड़ लगाकर एक हरित पट्टी बनाई गई है। इन मैदानों का भूजल गहरे स्तर पर है और खारा है। वर्तमान में, ड्रिप और स्प्रिंकल सिंचाई की मदद से, इन मैदानों में मक्का, ज्वार, गेहूँ और दालें जैसी फसलें उगाई जाती हैं।",
            contentEnglish: "These plains are known as Sandy plains in Haryana. These plains are spread in the South-Western part of the state and along the border of Rajasthan. These plains spread from Southern part of Sirsa to Hisar, Bhiwani, Mahendragarh, Rewari and Jhajjar districts. These plains have been formed due to deposition of sands by the hot-dry winds blowing from the desert areas of Rajasthan. The average height of sand dunes is 3 to 6 m however the height of these sand dunes reach upto 15 m at many places. The sand dunes keep shifting forward in the direction of wind. Many low basin areas are formed between sand dunes and they are locally known as Tal. During monsoon, these tals gets filled with water and creates temporary shallow lakes which are called 'Thooth or Bawdi'. Due to sand dunes, these plains are unfertile. In these plains, a green belt has been formed by planting trees to stop the further extension of sand dunes. The groundwater of these plains is at deep level and saline. Currently, with the help of the drip and sprinkle irrigation, crops such as maize, jowar, wheat and pulses are grown in these plains."
        },
        {
            titleHindi: "6. अरावली पहाड़ियों के चट्टानी मैदान (Rocky Plains of Aravali Hills)",
            titleEnglish: "6. Rocky Plains of Aravali Hills",
            contentHindi: "ये मैदान हरियाणा के दक्षिणी भाग में स्थित हैं और राजस्थान में अरावली पहाड़ियों का एक हिस्सा हैं। इन मैदानों की औसत ऊँचाई समुद्र तल से 225-500 मीटर है। हरियाणा में, ये मैदान मुख्य रूप से गुरुग्राम, फरीदाबाद, रेवाड़ी, मेवात, भिवानी और महेंद्रगढ़ जिलों में फैले हुए हैं। ये मैदान ऊबड़-खाबड़ हैं, जहाँ अरावली की अवशेष पहाड़ियाँ पाई जाती हैं। ये निचली, टूटी हुई और बिखरी हुई हैं। इन पहाड़ियों की नंगी, कठोर और गोलाकार चट्टानें अर्ध-शुष्क रेतीले क्षेत्र में हवा के कटाव का एक उत्कृष्ट उदाहरण प्रदान करती हैं। ये पहाड़ियाँ कम वर्षा प्राप्त करती हैं। इन पहाड़ियों में कांटेदार झाड़ियाँ और पेड़ पाए जाते हैं। इन अवशेष पहाड़ियों से चूना पत्थर निकाले जाते हैं। अरावली पहाड़ियों का सबसे ऊँचा क्षेत्र नारनौल के दक्षिण-पश्चिम भाग में कुतैपुर गाँव में स्थित है, जो 652 मीटर ऊँचा है। इसे ढोसी हिल्स के नाम से जाना जाता है। अरावली पहाड़ियों की मुख्य श्रृंखला गुरुग्राम जिले में पाई जाती है। तोशम और इंदौरी पहाड़ियाँ क्रमशः भिवानी और मेवात जिलों में स्थित हैं। ये पहाड़ियाँ अरावली का महत्वपूर्ण हिस्सा हैं। अरावली पहाड़ियों के दक्षिणी भाग को स्थानीय रूप से मेवात हिल्स के नाम से जाना जाता है। रॉक फॉस्फेट, एस्बेस्टस आदि खनिज निकाले जाते हैं। अरावली की एक और शाखा है जो हरियाणा से दिल्ली तक फैली हुई है। इस शाखा को दिल्ली रिज के नाम से जाना जाता है। दिल्ली में, यह धौला कुआँ से करोल बाग होते हुए उत्तर में दिल्ली विश्वविद्यालय तक फैली हुई है। हरियाणा के बावल और रेवाड़ी शहरों के पश्चिम में इन दो शाखाओं के बीच निचली पहाड़ियाँ पाई जाती हैं। सौर विकिरण के कारण, इन पहाड़ियों में चट्टानों के विघटन की प्रक्रिया जारी रहती है। परिणामस्वरूप, इन पहाड़ियों की तलहटी में अत्यधिक चट्टानी मलबा इकट्ठा हो गया है।",
            contentEnglish: "These plains lie in the Southern part of Haryana and are a part of Aravali hills in Rajasthan. Average elevation of these plains is 225-500 m above sea level. In Haryana, these plains mainly spread in Gurugram, Faridabad, Rewari, Mewat, Bhiwani and Mahendragarh districts. These plains are rugged, where the residual hills of Aravali are found. These are low, broken and scattered. The bare, hard and circular rocks of these hills provide an excellent example of wind erosion in a semi-arid sandy area. These hills receive low rainfall. Thorn bushes and trees are found in these hills. Limestones are extracted from these residual hills. The highest elevated area of Aravali hills is located in the South-West part of Narnaul in Kutaipur village, which is 652 m high. It is known as Dhosi hills. The main stretch of Aravali hills is found in the Gurugram district. Tosham and Indori hills are located in the Bhiwani and Mewat districts, respectively. These hills are important part of Aravali. The Southern part of Aravali hills is locally known as Mewat hills. Minerals such as rock phosphate, asbestos etc are extracted. There is another branch of Aravali which extends from Haryana to Delhi. This branch is known as Delhi Ridge. In Delhi, it stretches from Dhaula Kuan to Delhi University in North via Karol Bagh. Low lying hills are found between these two branches in the West of Bawal and Rewari towns of Haryana. Due to solar radiation, the process of disintegration of rocks continues in these hills. As a result excessive rock debris has gathered in the foothills of these hills."
        },
        {
            titleHindi: "7. उंडुक रेतीले मैदान (Undulating Sandy Plains)",
            titleEnglish: "7. Undulating Sandy Plains",
            contentHindi: "ये मैदान हवाओं द्वारा रेत के जमाव के कारण बनते हैं। ये मैदान मुख्य रूप से राज्य के महेंद्रगढ़, रेवाड़ी और गुरुग्राम जिलों में फैले हुए हैं। इन मैदानों में, लकीरों के बीच गर्त पाए जाते हैं। बरसात के मौसम के दौरान, गर्त पानी से भर जाते हैं। रेत के अलावा, इन मैदानों में कंकड़ के साथ जलोढ़ मिट्टी का जमाव भी पाया जाता है। इन मैदानों में, अरावली पहाड़ियों के पास रेत के टीले भी पाए जाते हैं।",
            contentEnglish: "These plains are formed due to deposition of sand by the winds. These plains spread mainly across Mahendragarh, Rewari and Gurugram districts of the state. In these plains, troughs are found between the ridges. During rainy seasons, troughs are filled by water. Apart from sand, deposition of alluvial soil with pebbles is also found in these plains. In these plains, sand mounds are also found near the Aravali hills."
        },
        {
            titleHindi: "8. दलदली भूमि (Marshy Land)",
            titleEnglish: "8. Marshy Land",
            contentHindi: "यह क्षेत्र सिरसा जिले के पश्चिमी भाग में पाया जाता है। यह राज्य का सबसे निचला ऊँचाई वाला क्षेत्र है, अर्थात समुद्र तल से 200 मीटर से कम। यह क्षेत्र जल जमाव के कारण बना है। ऐसा इसलिए है क्योंकि सिरसा का नैली क्षेत्र संकरा और उथला है और इस क्षेत्र में बहुत हल्की ढलान है।",
            contentEnglish: "This region is found in the Western part of Sirsa district. It is the region with lowest elevation in the state i.e. less than 200 m above sea level. This region has been formed due to water logging. This is because the Naili area of Sirsa is narrow and shallow and this area has a very gentle slope."
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
                        <Globe className="w-4 h-4" />
                        {language === "hindi" ? "भौगोलिक संरचना - हरियाणा सरकार" : "Geographical Structure - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा का" : "Geography of"} <span className="text-primary">{language === "hindi" ? "भूगोल" : "Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के भौगोलिक ढांचे की संपूर्ण जानकारी - स्थान और विस्तार, सीमाएँ, भूगर्भिक संरचना, भू-आकृति विज्ञान और आठ भौगोलिक प्रभाग"
                            : "Complete information about the geographical structure of Haryana - location and extent, boundaries, geological structure, physiography, and eight geographical divisions"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Map className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "44,212 वर्ग किमी" : "44,212 sq km"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Compass className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "23 जिले" : "23 Districts"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Mountain className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "शिवालिक पर्वतमाला" : "Shivalik Ranges"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Droplets className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "यमुना नदी" : "Yamuna River"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Location and Extent */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Compass className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? locationExtent.titleHindi : locationExtent.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? locationExtent.contentHindi : locationExtent.contentEnglish}</p>
                    </div>

                    {/* Boundary Extent */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Route className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? boundarySection.titleHindi : boundarySection.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? boundarySection.contentHindi : boundarySection.contentEnglish}</div>
                    </div>

                    {/* Neighbouring States Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? "पड़ोसी राज्य/केंद्र शासित प्रदेश और उनके साथ सीमा साझा करने वाले जिले" : "Neighbouring States/UT and Districts Sharing Border with Them"}</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "पड़ोसी राज्य/केंद्र शासित प्रदेश" : "Neighbouring State/UT"}</th>
                                        <th className="border p-2 text-center">{language === "hindi" ? "जिलों की संख्या" : "No. of Districts"}</th>
                                        <th className="border p-2 text-center">{language === "hindi" ? "दिशा" : "Direction"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "जिले" : "Districts"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {neighbouringStates.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2 font-medium">{item.state}</td>
                                            <td className="border p-2 text-center">{item.districts}</td>
                                            <td className="border p-2 text-center">{item.direction}</td>
                                            <td className="border p-2">{item.names}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Largest and Smallest Districts Tables */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-card rounded-2xl p-6 border shadow-sm">
                            <h2 className="text-xl font-bold mb-4 text-primary">{language === "hindi" ? "पाँच सबसे बड़े जिले (क्षेत्रफल)" : "Five Largest Districts (Area)"}</h2>
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "जिला" : "District"}</th>
                                        <th className="border p-2 text-center">{language === "hindi" ? "क्षेत्रफल (वर्ग किमी)" : "Area (sq km)"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {largestDistricts.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{item.name}</td>
                                            <td className="border p-2 text-center">{item.area}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-card rounded-2xl p-6 border shadow-sm">
                            <h2 className="text-xl font-bold mb-4 text-primary">{language === "hindi" ? "पाँच सबसे छोटे जिले (क्षेत्रफल)" : "Five Smallest Districts (Area)"}</h2>
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "जिला" : "District"}</th>
                                        <th className="border p-2 text-center">{language === "hindi" ? "क्षेत्रफल (वर्ग किमी)" : "Area (sq km)"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {smallestDistricts.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{item.name}</td>
                                            <td className="border p-2 text-center">{item.area}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Geological Structure */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Landmark className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? geologicalStructure.titleHindi : geologicalStructure.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? geologicalStructure.contentHindi : geologicalStructure.contentEnglish}</p>
                    </div>

                    {/* Divisions on Basis of Geographical Area */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Map className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? geographicalDivisionsArea.titleHindi : geographicalDivisionsArea.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? geographicalDivisionsArea.contentHindi : geographicalDivisionsArea.contentEnglish}</div>
                    </div>

                    {/* Physiography */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Mountain className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? physiography.titleHindi : physiography.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? physiography.contentHindi : physiography.contentEnglish}</p>
                    </div>

                    {/* 8 Geographical Divisions */}
                    <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/30">
                                <Trees className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary">{language === "hindi" ? "हरियाणा के भौगोलिक प्रभाग" : "Geographical Divisions of Haryana"}</h2>
                        </div>
                        <div className="space-y-6">
                            {geoDivisions.map((division, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-5 border">
                                    <h3 className="text-xl font-semibold mb-3 text-primary">{language === "hindi" ? division.titleHindi : division.titleEnglish}</h3>
                                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? division.contentHindi : division.contentEnglish}</p>
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
                        {language === "hindi" ? "हरियाणा भूगोल: तथ्य सारांश" : "Haryana Geography: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">44,212</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "कुल क्षेत्रफल (वर्ग किमी)" : "Total Area (sq km)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">1.34%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "भारत के क्षेत्रफल का प्रतिशत" : "Percentage of India's Area"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">21वाँ</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "क्षेत्रफल में भारत में रैंक" : "Rank in India by Area"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">23</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "कुल जिले" : "Total Districts"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">93.76%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "मैदानी क्षेत्र" : "Plain Area"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">1,514 मी</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सबसे ऊँची चोटी (करोह पीक)" : "Highest Peak (Karoh Peak)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">5 + 2</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "पड़ोसी राज्य + केंद्र शासित प्रदेश" : "Neighbouring States + UTs"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">8</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "भौगोलिक प्रभाग" : "Geographical Divisions"}</p>
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
                            {language === "hindi" ? "हरियाणा के भूगोल के बारे में" : "Common"} <span className="text-primary">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Haryana Geography"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के भौगोलिक ढांचे, जिलों, नदियों, पर्वत श्रृंखलाओं और भौगोलिक प्रभागों के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's geographical structure, districts, rivers, mountain ranges, and geographical divisions"}
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
                            {language === "hindi" ? "अपने हरियाणा भूगोल के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Geography of Haryana?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer">
                                {language === "hindi" ? "हरियाणा भूगोल क्विज़ लें" : "Take Haryana Geography Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/formation-of-haryana" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Haryana Formation of Haryana
                        </Link>
                        <Link href="/haryana-gk/climate" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                            Next Chapter: Climate of Haryana
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा का भूगोल - संपूर्ण संदर्भ" : "Geography of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के भूगोल के बारे में व्यापक जानकारी प्रदान करता है जिसमें स्थान और विस्तार, सीमाएँ, भूगर्भिक संरचना, भू-आकृति विज्ञान और आठ भौगोलिक प्रभाग शामिल हैं। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about the geography of Haryana including location and extent, boundaries, geological structure, physiography, and eight geographical divisions. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK and Geography."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और भौगोलिक अभिलेखों से स्रोतित" : "Information sourced from official Government of Haryana publications and geographical records"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}