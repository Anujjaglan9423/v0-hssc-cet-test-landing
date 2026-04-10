"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    Droplets,
    ChevronDown,
    HelpCircle,
    ArrowLeft,
    Building2,
    Heart,
    Sun,
    Leaf,
    Zap,
    Gem,
    Pickaxe,
    Coins,
    Atom,
    Flame,
    Wind,
    Trees,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MineralsAndEnergyResourcesPage() {
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
            questionHindi: "हरियाणा का खनिज संपदा के लिए प्रसिद्ध जिला कौन सा है?",
            questionEnglish: "Which district of Haryana is famous for its mineral wealth?",
            answerHindi: "महेंद्रगढ़ जिला अपनी खनिज संपदा के लिए प्रसिद्ध है। अरावली पहाड़ियों में समृद्ध खनिज भंडार हैं।",
            answerEnglish: "Mahendragarh district is famous for its mineral wealth. The Aravalli hills have rich mineral deposits."
        },
        {
            questionHindi: "हरियाणा का पहला परमाणु ऊर्जा संयंत्र कहाँ स्थित है?",
            questionEnglish: "Where is Haryana's first nuclear power plant located?",
            answerHindi: "गोरखपुर परमाणु ऊर्जा संयंत्र फतेहाबाद जिले के गोरखपुर गाँव में स्थित है। इसकी कुल स्थापित क्षमता 2800 मेगावाट है।",
            answerEnglish: "Gorakhpur Nuclear Power Plant is located in village Gorakhpur of Fatehabad district. Its total installed capacity is 2800 MW."
        },
        {
            questionHindi: "हरियाणा में सभी गाँवों को बिजली से जोड़ने वाला पहला राज्य कौन सा है?",
            questionEnglish: "Which is the first state to link all its villages with electricity?",
            answerHindi: "हरियाणा देश का पहला राज्य है जिसने अपने सभी गाँवों को बिजली से जोड़ा। यह मुख्यमंत्री बंसीलाल के कार्यकाल में हासिल किया गया था।",
            answerEnglish: "Haryana is the first state in the country to link all its villages with electricity. This was achieved during the tenure of Chief Minister Bansilal."
        },
        {
            questionHindi: "अंतर्राष्ट्रीय सौर गठबंधन (ISA) का मुख्यालय कहाँ स्थित है?",
            questionEnglish: "Where is the headquarters of the International Solar Alliance (ISA) located?",
            answerHindi: "अंतर्राष्ट्रीय सौर गठबंधन (ISA) का मुख्यालय हरियाणा के गुरुग्राम जिले में स्थित है। इसकी स्थापना 25 जनवरी, 2016 को हुई थी।",
            answerEnglish: "The headquarters of the International Solar Alliance (ISA) is located in Gurugram district of Haryana. It was established on 25th January, 2016."
        },
        {
            questionHindi: "हरियाणा में बिजली की खपत सबसे अधिक किस क्षेत्र में होती है?",
            questionEnglish: "In which sector is electricity consumption highest in Haryana?",
            answerHindi: "हरियाणा में बिजली की खपत सबसे अधिक औद्योगिक क्षेत्र में होती है। दिसंबर 2019 के अनुमानों के अनुसार यह 51535.98 यूनिट थी।",
            answerEnglish: "Electricity consumption is highest in the industrial sector in Haryana. It was 51535.98 units as per December 2019 estimates."
        },
        {
            questionHindi: "हरियाणा की पहली सौर ऊर्जा संयंत्र कहाँ स्थापित की गई थी?",
            questionEnglish: "Where was the first solar power plant in Haryana established?",
            answerHindi: "हरियाणा का पहला सौर ऊर्जा संयंत्र चरखी-दादरी जिले के नांधा गाँव में स्थापित किया गया था।",
            answerEnglish: "The first solar power plant in Haryana was established at Nandha village in Charkhi-Dadri district."
        },
        {
            questionHindi: "बदरपुर रेत किस लिए प्रसिद्ध है?",
            questionEnglish: "What is Badarpur sand famous for?",
            answerHindi: "बदरपुर रेत दिल्ली-फरीदाबाद-मथुरा को जोड़ने वाले राष्ट्रीय राजमार्ग पर पाई जाती है। यह अपनी गुणवत्ता, खुरदरापन और मैरून रंग के लिए विश्व प्रसिद्ध है।",
            answerEnglish: "Badarpur sand is found on the National Highway linking Delhi-Faridabad-Mathura. It is world famous for its quality, coarseness and maroon colour."
        },
        {
            questionHindi: "हरियाणा में कितने बायो गैस संयंत्र हैं?",
            questionEnglish: "How many biogas plants are there in Haryana?",
            answerHindi: "हरियाणा में 112 बायो गैस संयंत्र हैं। पहला बायो गैस संयंत्र 1991 में पानीपत जिले के दिकादला में स्थापित किया गया था।",
            answerEnglish: "There are 112 biogas plants in Haryana. The first biogas plant was established in 1991 at Dikadla in Panipat district."
        }
    ];

    // Section 1: Overview - Mineral Resources
    const mineralOverview = {
        titleHindi: "हरियाणा के खनिज संसाधन",
        titleEnglish: "Mineral Resources in Haryana",
        contentHindi: "हरियाणा खनिज संपदा के मामले में बहुत समृद्ध राज्य नहीं है, फिर भी राज्य में कई प्रकार के खनिज पाए जाते हैं। राज्य में पाए जाने वाले प्रमुख खनिज स्लेट, सीसा, चूना पत्थर, क्वार्ट्ज, चाइना क्ले, मैंगनीज, अभ्रक, संगमरमर, लौह अयस्क, तांबा, कैल्साइट, कायनाइट और एस्बेस्टस आदि हैं। राज्य का महेंद्रगढ़ जिला अपनी खनिज संपदा के लिए जाना जाता है। हरियाणा के दक्षिणी भाग में अरावली पहाड़ियों में समृद्ध खनिज भंडार हैं। राज्य में खनिज संसाधनों की खनन और प्रबंधन खान एवं भूविज्ञान विभाग, हरियाणा द्वारा किया जाता है। राज्य का खनन और भूविज्ञान विभाग पत्थर की खदानों का भी प्रबंधन करता है।",
        contentEnglish: "Haryana is not a very rich state in terms of mineral wealth, but still many types of minerals are found in the state. The major minerals found in the state are slate, lead, limestone, quartz, china clay, manganese, mica, marble, iron-ore, copper, calcite, kyanite and asbestos, etc. Mahendragarh district of the state is known for its mineral wealth. The Aravalli hills in the southern part of Haryana have rich mineral deposits. The mining and management of mineral resources in the state is done by the Mines and Geology Department, Haryana. The state's Mining and Geology Department also manages the stone quarries."
    };

    // Section 2: Major Minerals of Haryana
    const majorMinerals = [
        {
            name: "Iron-Ore",
            nameHindi: "लौह अयस्क",
            details: "Haryana has limited quantities of iron ore reserves. Magnetite and haematite iron-ore are found in small quantities in the state. It is found in Bhiwani in small quantities and of low quality. In Mahendragarh district, medium quality iron-ore of magnetite variety is found. Two iron-ore belts - Dhanota-Dhancholi-Mokhuta and Karota-Antri-Biharipur-Donkhera are located in the Southern part of Narnaul in Mahendragarh district. Mahendragarh has around 40.27 lakh tonnes of iron-ore reserves. Kaliyana and Tosham hills of Bhiwani have iron-ore mines of haematite variety. Hisar is the major producer of iron pipes.",
            detailsHindi: "हरियाणा में लौह अयस्क के सीमित भंडार हैं। राज्य में मैग्नेटाइट और हेमाटाइट लौह अयस्क कम मात्रा में पाए जाते हैं। यह भिवानी में कम मात्रा में और निम्न गुणवत्ता का पाया जाता है। महेंद्रगढ़ जिले में मैग्नेटाइट किस्म का मध्यम गुणवत्ता वाला लौह अयस्क पाया जाता है। दो लौह अयस्क बेल्ट - धनोता-धनचोली-मोखुता और करोता-अंतड़ी-बिहारीपुर-डोंखेड़ा महेंद्रगढ़ जिले के नारनौल के दक्षिणी भाग में स्थित हैं। महेंद्रगढ़ में लगभग 40.27 लाख टन लौह अयस्क के भंडार हैं। भिवानी की कालियाणा और तोशाम पहाड़ियों में हेमाटाइट किस्म की लौह अयस्क खदानें हैं। हिसार लोहे के पाइप का प्रमुख उत्पादक है।"
        },
        {
            name: "Copper",
            nameHindi: "तांबा",
            details: "It is found in Teejanwali, Ghataser, Khalra hills and Bihali ridge of Narnaul area of Mahendragarh district. Copper is also found in Khudana hills, Khudana Rajaws and Khudana-Surheti hills ranges of Bhiwani district.",
            detailsHindi: "यह महेंद्रगढ़ जिले के नारनौल क्षेत्र की तीजनवाली, घटासेर, खालरा पहाड़ियों और बिहाली रिज में पाया जाता है। तांबा भिवानी जिले की खुडाना पहाड़ियों, खुडाना रजावास और खुडाना-सुरहेती पहाड़ी श्रृंखलाओं में भी पाया जाता है।"
        },
        {
            name: "Mica",
            nameHindi: "अभ्रक",
            details: "It is used in the making of electronic equipments. Mica reserves are found in Musnota, Panchnota, Ghataser, Bayal, Nangal Durg, Golwa and Nangal Sirohi regions of Mahendragarh district. It is also found in Bhondsi village of Gurugram district.",
            detailsHindi: "इसका उपयोग इलेक्ट्रॉनिक उपकरणों के निर्माण में किया जाता है। अभ्रक के भंडार महेंद्रगढ़ जिले के मुसनोटा, पंचनोटा, घटासेर, बायल, नांगल दुर्ग, गोलवा और नांगल सिरोही क्षेत्रों में पाए जाते हैं। यह गुरुग्राम जिले के भोंडसी गाँव में भी पाया जाता है।"
        },
        {
            name: "Asbestos",
            nameHindi: "एस्बेस्टस",
            details: "It is found in Golva village of Narnaul region in Mahendragarh district. It is a set of six naturally occurring silicate minerals used commercially for their desirable physical properties. It is used in nuclear plants.",
            detailsHindi: "यह महेंद्रगढ़ जिले के नारनौल क्षेत्र के गोलवा गाँव में पाया जाता है। यह छह प्राकृतिक रूप से पाए जाने वाले सिलिकेट खनिजों का एक समूह है जिनका उपयोग उनके वांछनीय भौतिक गुणों के लिए व्यावसायिक रूप से किया जाता है। इसका उपयोग परमाणु संयंत्रों में किया जाता है।"
        },
        {
            name: "Manganese",
            nameHindi: "मैंगनीज",
            details: "It is found in Nangal Durg and Musnota villages in Narnaul, Mahendragarh district. It is found in very low quantity in Haryana. It is a metal used in industries as metal alloy, particularly in stainless steel.",
            detailsHindi: "यह महेंद्रगढ़ जिले के नारनौल में नांगल दुर्ग और मुसनोटा गाँवों में पाया जाता है। यह हरियाणा में बहुत कम मात्रा में पाया जाता है। यह एक धातु है जिसका उपयोग उद्योगों में धातु मिश्र धातु के रूप में किया जाता है, विशेष रूप से स्टेनलेस स्टील में।"
        },
        {
            name: "Graphite",
            nameHindi: "ग्रेफाइट",
            details: "It is found in Narnaul's Mundia hills, Dhani, Faizabad and Jakhani regions in Mahendragarh district. It is also found in the hills of Bhondsi-Ferozepur-Jharka-Sohna-Kotla lying in the districts of Gurugram and Nuh.",
            detailsHindi: "यह महेंद्रगढ़ जिले में नारनौल की मुंडिया पहाड़ियों, ढाणी, फैजाबाद और जखानी क्षेत्रों में पाया जाता है। यह गुरुग्राम और नूह जिलों में स्थित भोंडसी-फिरोजपुर-झरका-सोहना-कोटला की पहाड़ियों में भी पाया जाता है।"
        },
        {
            name: "Garnet",
            nameHindi: "गार्नेट",
            details: "It is pink in colour and translucent to opaque. It is found from the rocky areas of Ajabgarh, Khatoli, Mukundpur, Ghataser, Bayal, Islampur and Kamania which are located in South of Narnaul region (Mahendragarh district). It is also found in Manesar, Bhondsi and Sohna regions of Gurugram district.",
            detailsHindi: "इसका रंग गुलाबी होता है और यह पारभासी से अपारदर्शी होता है। यह अजबगढ़, खाटोली, मुकुंदपुर, घटासेर, बायल, इस्लामपुर और कमानिया के चट्टानी क्षेत्रों से पाया जाता है जो नारनौल क्षेत्र (महेंद्रगढ़ जिले) के दक्षिण में स्थित हैं। यह गुरुग्राम जिले के मानेसर, भोंडसी और सोहना क्षेत्रों में भी पाया जाता है।"
        },
        {
            name: "Quartz",
            nameHindi: "क्वार्ट्ज",
            details: "It is found in the regions of Musnota, Golva, Khalra and Atela of Mahendragarh district. It is also found in Badarpur, Manesar and Nathupur area of Gurugram district. Anangpur of Faridabad also has deposits of quartz mineral. Mahendragarh have huge deposits of quartz of around 165000 tonnes.",
            detailsHindi: "यह महेंद्रगढ़ जिले के मुसनोटा, गोलवा, खालरा और अटेला क्षेत्रों में पाया जाता है। यह गुरुग्राम जिले के बादरपुर, मानेसर और नाथुपुर क्षेत्र में भी पाया जाता है। फरीदाबाद का अनंगपुर भी क्वार्ट्ज खनिज के भंडार रखता है। महेंद्रगढ़ में लगभग 165000 टन क्वार्ट्ज के विशाल भंडार हैं।"
        },
        {
            name: "Limestone",
            nameHindi: "चूना पत्थर",
            details: "It is mainly found in Panchkula, Ambala, Mahendragarh, Bhiwani, Rohtak and Hisar district of Haryana. In Panchkula, limestone is extracted from Malla village of Kalka tehsil. In Ambala, limestone is mined from Barun, Khadam, Ramsar, Shola and Jaunpur regions of Narayangarh tehsil. In Mahendragarh, limestone is extracted from Ghani, Kyutha, Ramnathpura, etc. Crystallised limestone is also found in Ambala and Mahendragarh.",
            detailsHindi: "यह मुख्य रूप से हरियाणा के पंचकूला, अंबाला, महेंद्रगढ़, भिवानी, रोहतक और हिसार जिलों में पाया जाता है। पंचकूला में, कालका तहसील के मल्ला गाँव से चूना पत्थर निकाला जाता है। अंबाला में, नारायणगढ़ तहसील के बरूण, खादम, रामसर, शोला और जौनपुर क्षेत्रों से चूना पत्थर का खनन किया जाता है। महेंद्रगढ़ में, घानी, क्यूथा, रामनाथपुरा आदि से चूना पत्थर निकाला जाता है। क्रिस्टलीकृत चूना पत्थर भी अंबाला और महेंद्रगढ़ में पाया जाता है।"
        },
        {
            name: "China Clay",
            nameHindi: "चाइना क्ले",
            details: "It is found in the district of Gurugram in the region of Alipur, Nathpur, Kasan, etc. In Nuh (Mewat) district, it is found in Indri and Dhosgarh villages. Anangpur village of Faridabad also has reserves of China clay.",
            detailsHindi: "यह गुरुग्राम जिले में अलीपुर, नाथपुर, कासन आदि क्षेत्रों में पाया जाता है। नूह (मेवात) जिले में, यह इंद्री और ढोसगढ़ गाँवों में पाया जाता है। फरीदाबाद का अनंगपुर गाँव भी चाइना क्ले के भंडार रखता है।"
        },
        {
            name: "Slate",
            nameHindi: "स्लेट",
            details: "It is mainly found in Rewari and Mahendragarh district. High quality slate stone is found from Kund and Bihali villages of Rewari district. This mineral is also exported to Australia, Belgium, Holland and New Zealand and is an important source of foreign currency.",
            detailsHindi: "यह मुख्य रूप से रेवाड़ी और महेंद्रगढ़ जिले में पाया जाता है। रेवाड़ी जिले के कुंड और बिहाली गाँवों से उच्च गुणवत्ता वाला स्लेट पत्थर पाया जाता है। यह खनिज ऑस्ट्रेलिया, बेल्जियम, हॉलैंड और न्यूजीलैंड को भी निर्यात किया जाता है और विदेशी मुद्रा का एक महत्वपूर्ण स्रोत है।"
        },
        {
            name: "Granite",
            nameHindi: "ग्रेनाइट",
            details: "It is found in the region of Riwas, Dulheri and Nigana Kalan hills of Bhiwani. Tosham in Bhiwani also have reserves of high quality granite. It is also found in Maroli hills and Dhanota-Dhancholi areas of Mahendragarh.",
            detailsHindi: "यह भिवानी की रिवास, दुल्हेरी और निगाना कलां पहाड़ियों के क्षेत्र में पाया जाता है। भिवानी का तोशाम भी उच्च गुणवत्ता वाले ग्रेनाइट के भंडार रखता है। यह महेंद्रगढ़ के मारोली पहाड़ियों और धनोता-धनचोली क्षेत्रों में भी पाया जाता है।"
        },
        {
            name: "Road Metal/Crushed Stone",
            nameHindi: "रोड मेटल/क्रश्ड स्टोन",
            details: "Crushed stones or angular rocks are used for construction of roads and buildings. They are also known as road metal stones and used as concrete. In Haryana, they are found in Shivalik hills of Panchkula, Aravalli hills in Mahendragarh, Bhiwani, Mewat, Faridabad, Gurugram and Yamunanagar. Stone received from the Khanak region is of high quality.",
            detailsHindi: "कुचले हुए पत्थर या कोणीय चट्टानों का उपयोग सड़कों और इमारतों के निर्माण के लिए किया जाता है। उन्हें रोड मेटल पत्थर भी कहा जाता है और कंक्रीट के रूप में उपयोग किया जाता है। हरियाणा में, वे पंचकूला की शिवालिक पहाड़ियों, महेंद्रगढ़, भिवानी, मेवात, फरीदाबाद, गुरुग्राम और यमुनानगर में अरावली पहाड़ियों में पाए जाते हैं। खानक क्षेत्र से प्राप्त पत्थर उच्च गुणवत्ता का होता है।"
        },
        {
            name: "Coarse Sand",
            nameHindi: "मोटी रेत",
            details: "Sand is found in Panchkula, Ambala and Yamunanagar districts of Haryana. It is also found from Yamuna and Markanda rivers which flows in the state. Dadupur in Yamunanagar has deposits of high quality sand. Sand mines also found in Karnal. Badarpur has mines of gravel, concrete and pit sand. Pit sand is coarse sand of red and deep orange colour. Pit sand is also known as Badarpur sand. It is used as building material. Badarpur sand found on the National Highway that links Delhi-Faridabad-Mathura, is world famous for its quality, coarseness and maroon colour.",
            detailsHindi: "रेत हरियाणा के पंचकूला, अंबाला और यमुनानगर जिलों में पाई जाती है। यह राज्य में बहने वाली यमुना और मारकंडा नदियों से भी पाई जाती है। यमुनानगर में दादुपुर में उच्च गुणवत्ता वाली रेत के भंडार हैं। करनाल में भी रेत की खदानें हैं। बादरपुर में बजरी, कंक्रीट और गड्ढे रेत की खदानें हैं। गड्ढे रेत लाल और गहरे नारंगी रंग की मोटी रेत होती है। गड्ढे रेत को बादरपुर रेत के नाम से भी जाना जाता है। इसका उपयोग निर्माण सामग्री के रूप में किया जाता है। दिल्ली-फरीदाबाद-मथुरा को जोड़ने वाले राष्ट्रीय राजमार्ग पर पाई जाने वाली बादरपुर रेत अपनी गुणवत्ता, खुरदरापन और मैरून रंग के लिए विश्व प्रसिद्ध है।"
        },
        {
            name: "Flexible Sandstone",
            nameHindi: "लचीला बलुआ पत्थर",
            details: "In Haryana state, it is known by various local names like Sang-e-Tarja, dancing stone, etc. This stone is found only in Brazil, US and in India in the whole world. In India, it is found in Kaliyana village in the district of Charkhi-Dadri.",
            detailsHindi: "हरियाणा राज्य में, यह विभिन्न स्थानीय नामों जैसे संग-ए-तर्जा, नृत्य पत्थर आदि से जाना जाता है। यह पत्थर पूरी दुनिया में केवल ब्राजील, अमेरिका और भारत में पाया जाता है। भारत में, यह चरखी-दादरी जिले के कालियाणा गाँव में पाया जाता है।"
        },
        {
            name: "Marble/Dolomite",
            nameHindi: "संगमरमर/डोलोमाइट",
            details: "It is a rock resulting from metamorphism of sedimentary carbonate rocks, most commonly limestone or dolomite rock. In Haryana, it is found in Mahendragarh district in the regions of Antari, Dhankora, Alipur, Nangal Durg, Dhanota-Dhancholi, Khalra, Islampur, Bibipur, Doehana, Biharipur, Shahpur and Musnota, etc.",
            detailsHindi: "यह एक चट्टान है जो तलछटी कार्बोनेट चट्टानों, सबसे अधिक सामान्यतः चूना पत्थर या डोलोमाइट चट्टान के कायांतरण से बनती है। हरियाणा में, यह महेंद्रगढ़ जिले में अंतड़ी, ढाणकोरा, अलीपुर, नांगल दुर्ग, धनोता-धनचोली, खालरा, इस्लामपुर, बीबीपुर, दोहना, बिहारीपुर, शाहपुर और मुसनोटा आदि क्षेत्रों में पाया जाता है।"
        },
        {
            name: "Kyanite",
            nameHindi: "कायनाइट",
            details: "It is found in Mahendragarh and Nuh districts. The kyanite is light blue and yellowish in colour and is associated with flakes of muscovite.",
            detailsHindi: "यह महेंद्रगढ़ और नूह जिलों में पाया जाता है। कायनाइट हल्के नीले और पीले रंग का होता है और मस्कोवाइट के फ्लेक्स से जुड़ा होता है।"
        }
    ];

    // Section 3: Minor Minerals Table
    const minorMinerals = [
        { mineral: "Apatite", area: "In Dochana village of Mahendragarh and regions surrounded by Morni hills e.g. Kharag-Banolu and Sherla." },
        { mineral: "Arsenite", area: "Hills of Sohna-Nuh-Ferozepur-Jhira in Gurugram and Mewat districts" },
        { mineral: "Barite", area: "In Bayal-Ki-Dhani, Musnota and Sarai of Mahendragarh district." },
        { mineral: "Brick Earth", area: "It is found in every region of the state except the sandy regions as Mahendragarh, Hisar, Sirsa, Fatehabad and Bhiwani." },
        { mineral: "Baryte", area: "Musnota, Bayal-Ki-Dhani in Mahendragarh, and Haripur and Ser regions located in Morni hills in Panchkula district." },
        { mineral: "Calcite", area: "Khala, Rasulpur, Bayal, Panchnota, Musnota of Mahendragarh district" },
        { mineral: "Crusher Sand", area: "Slopes of lower Shivalik hills" },
        { mineral: "Dolomite Marble", area: "Tunda and Jaunpur in Morni hills, Dhankora, Dochana, Biharipur, Shahpur, Dhanota, Dhadcholi Khala, Islampur, Chhappa, Bibipur, Rasulpur, Musnota, Anantri, Nangal durg villages in Mahendragarh" },
        { mineral: "Feldspar", area: "Panchnota, Musnota, Nangal Durg, Bayal, Bankri, Faizabad, Dhankora of Mahendragarh and Alipur, Kasan, Bhondsi, Ghamdoz, Ghosh Garb and Geratpur of Gurugram" },
        { mineral: "Gold", area: "Narayangarh in Ambala. Banks and bases of Markanda and Tangri rivers" },
        { mineral: "Gravel Sand", area: "Teka, New Mandi, Moti Mandi, Manger, Dhauj, Mohbtabad and Bandhwari of Faridabad. Also found in hills of Bhondasi-Ferozepur-Jharka-Sohna of Gurugram and Nuh districts." },
        { mineral: "Kyanite", area: "Golwa village of Mahendragarh, Kotla region of Mewat" },
        { mineral: "Lead", area: "Tosham hills of Bhiwani" },
        { mineral: "Mineral Water", area: "Shiv Kund and Shila Kund in Sohna of Gurugram district. Temperature is 46℃ to 53℃. It is believed that it cures skin diseases." },
        { mineral: "Monazite", area: "In Mahendragarh, Bhiwani and Rewari districts. Mostly found in adjoining areas of Rajasthan." },
        { mineral: "Nalased Crusher dust", area: "The sand of the hills which comes down with water during rain is called Nalased. Used as crusher dust." },
        { mineral: "Salt Water", area: "Sultanpur-Farrukhnagar in Gurugram and Nuh region of Mewat. In 1935, Salt was used to manufacture from salt water in Farrukhnagar." },
        { mineral: "Saltpetre", area: "Hisar, Sirsa, Fatehabad, Jind, Rohtak and Kurukshetra. Also found in Gurugram, Sonipat, Palwal, Faridabad." }
    ];

    // Section 4: Energy Resources Overview
    const energyOverview = {
        titleHindi: "हरियाणा के ऊर्जा संसाधन",
        titleEnglish: "Energy Resources in Haryana",
        contentHindi: "ऊर्जा हरियाणा के बुनियादी ढांचे में एक महत्वपूर्ण कारक है। ऊर्जा के लिए, राज्य अपनी सीमित तापीय उत्पादन क्षमता और अन्य राज्यों के साथ संयुक्त रूप से स्वामित्व वाली परियोजनाओं से जल विद्युत पर निर्भर करता है। हरियाणा में सौर तीव्रता अपेक्षाकृत अधिक है इसलिए राज्य सौर ऊर्जा का उपयोग करने के लिए अपने संसाधनों का विकास कर रहा है। पवन और परमाणु ऊर्जा स्रोतों का भी हरियाणा में विकास किया जा रहा है। हरियाणा के गठन के दौरान 1966-67 में, राज्य के केवल कुछ गाँवों में बिजली कनेक्शन थे। 29 नवंबर, 1970 तक, राज्य के सभी गाँवों को विद्युतीकृत कर दिया गया। हरियाणा देश का पहला राज्य है जिसने अपने सभी गाँवों को बिजली से जोड़ा। यह मुख्यमंत्री बंसीलाल के कार्यकाल में हासिल किया गया था। मुख्यमंत्री भूपिंदर सिंह हुड्डा के कार्यकाल के दौरान हरियाणा में बड़ी संख्या में बिजली संयंत्र स्थापित किए गए थे। हरियाणा के गठन के बाद, हरियाणा राज्य विद्युत बोर्ड 3 मई, 1967 को स्थापित किया गया था। आर्थिक सर्वेक्षण 2020-21 के अनुसार, राज्य की कुल स्थापित क्षमता 11972.40 मेगावाट है और बिजली उत्पादन 3428.54 मेगावाट है, जो राज्य के गठन के समय केवल 29.42 मेगावाट था। हरियाणा में, बिजली की खपत सबसे अधिक औद्योगिक क्षेत्र में है, जो दिसंबर 2019 के अनुमानों के अनुसार 51535.98 यूनिट है।",
        contentEnglish: "Energy is a critical factor in the infrastructure of Haryana. For energy, the state depends on its limited thermal generation capacity and hydro power from the jointly owned projects with other states. The solar intensity is relatively high in Haryana so the state is developing its resources to harness the solar energy. Wind and nuclear energy sources are also being developed in Haryana. During the formation of Haryana in 1966-67, only a few villages in the state had power connections. By 29th November, 1970, all the villages in the state were electrified. Haryana is the first state in the country to link all its villages with electricity. This was achieved during the tenure of Chief Minister Bansilal. Large number of power plants were set up in Haryana during the tenure of Chief Minister Bhupinder Singh Hooda. After the formation of Haryana, Haryana State Electricity Board was set up on 3rd May, 1967. As per Economic Survey 2020-21, total installed capacity of the state is 11972.40 MW and the electricity generation is 3428.54 MW, which was only 29.42 MW at the time of the formation of the state. In Haryana, consumption of electricity is highest in the industrial sector i.e. 51535.98 units as per December 2019 estimates."
    };

    // Section 5: Power Generation Organizations
    const powerOrganizations = [
        {
            name: "Haryana Power Generation Corporation Limited (HPGCL)",
            nameHindi: "हरियाणा पावर जनरेशन कॉर्पोरेशन लिमिटेड",
            details: "HPGCL is an ISO:9001 Certified Company entrusted with the responsibility of setting up new power generating stations in Haryana. HPGCL was incorporated by Haryana State Government on 17th March, 1997. It was given the responsibility of operating and maintenance of power projects of Haryana State Electricity Board on 14th August, 1998. The headquarters of HPGCL is situated in Panchkula district. The corporation has set up power generation capacity (thermal) in Yamunanagar, Jhajjar, Faridabad and Hisar. One atomic energy power plant is set up in Gorakhpur in the district of Fatehabad."
        },
        {
            name: "Haryana Vidyut Prasaran Nigam Limited (HVPNL)",
            nameHindi: "हरियाणा विद्युत प्रसारण निगम लिमिटेड",
            details: "HVPNL was incorporated under the Companies Act of 1956 on 19th August, 1997. It started operating from 18th September, 1997. Its headquarters is located in Panchkula district. As per another transfer scheme implemented on 1st July, 1999, HVPNL was further segregated into two more corporations i.e. UHBVNL and DHBVNL."
        },
        {
            name: "Uttar Haryana Bijli Vitran Nigam Limited (UHBVNL)",
            nameHindi: "उत्तर हरियाणा बिजली वितरण निगम लिमिटेड",
            details: "UHBVNL is responsible for distribution and retail supply of power in Northern districts of the state. The districts are Ambala, Yamunanagar, Kaithal, Panchkula, Kurukshetra, Karnal, Panipat, Sonipat, Rohtak, Jind and Jhajjar of Haryana. The headquarters of UHBVNL is in Panchkula."
        },
        {
            name: "Dakshin Haryana Bijli Vitran Nigam Limited (DHBVN)",
            nameHindi: "दक्षिण हरियाणा बिजली वितरण निगम लिमिटेड",
            details: "Dakshin Haryana Bijli Vitran Nigam Limited (DHBVNL) is formed to supply power in Southern districts of the state. The districts are Bhiwani, Faridabad, Gurugram, Mahendragarh, Rewari, Hisar, Sirsa, Fatehabad, Dadri, Nuh and Palwal. The headquarters of DHBVNL is in Hisar district."
        },
        {
            name: "Haryana Electricity Regulatory Commission",
            nameHindi: "हरियाणा विद्युत नियामक आयोग",
            details: "It is an autonomous body, which was formed on 17th August, 1998. Functions: To present recommendations to the government for development in the power sector. Proper determination of electricity rates in the state. To give favourable suggestions to maintain balance between power generation and distribution corporations and consumers."
        }
    ];

    // Section 6: Thermal Power Stations
    const thermalPowerStations = [
        {
            name: "Panipat Thermal Power Station",
            nameHindi: "पानीपत ताप विद्युत संयंत्र",
            location: "Panipat",
            details: "It is the first power station of Haryana. It was established on 1st November, 1979. Total installed generation capacity of 1367.80 MW comprising of four units of 110 MW each, two units of 210 MW each and two units of 250 MW each. 8 units have been installed for electricity generation. Panipat Thermal Power Station was bifurcated into PTPS-1 and PTPS-2. PTPS-1 is now decommissioned."
        },
        {
            name: "Rajiv Gandhi Thermal Power Station",
            nameHindi: "राजीव गांधी ताप विद्युत संयंत्र",
            location: "Khedar, Hisar",
            details: "Coal based thermal power plant. Established on 19th May, 2007, production started from 24th August, 2010. 2 units with total installed capacity of 1200 MW. Gets coal from Mahanadi Coalfield Limited (Odisha). Constructed by Reliance Power Limited. First Mega project of North India."
        },
        {
            name: "Deenbandhu Chhotu Ram Thermal Power Station",
            nameHindi: "दीनबंधु छोटू राम ताप विद्युत संयंत्र",
            location: "Yamunanagar",
            details: "Established in 1993 but production started from 14th April, 2008. 2 units of 600 MW installed. Coal based power plant of HPGCL. Jointly constructed by Reliance Energy Limited and Shanghai Electric (China). Coal supplied by Central Coalfields. First power project controlled by private sector."
        },
        {
            name: "Indira Gandhi Super Thermal Power Project",
            nameHindi: "इंदिरा गांधी सुपर थर्मल पावर प्रोजेक्ट",
            location: "Jharki, Jhajjar",
            details: "Joint project of NTPC, IPGCL and HPGCL. Production started in 3 phases: Phase 1 (4th March, 2011), Phase 2 (5th November, 2011), Phase 3 (7th November, 2012). 3 units of 500 MW each, total capacity 1500 MW. Also known as Aravalli Super Thermal Power Project. Gets coal from Mahanadi Coalfield."
        },
        {
            name: "Mahatma Gandhi Thermal Power Project",
            nameHindi: "महात्मा गांधी ताप विद्युत परियोजना",
            location: "Khanpur, Jhajjar",
            details: "Established on 19th July, 2012. 2 units of 660 MW each, total capacity 1320 MW. First coal-based power generation project set up in collaboration with China Power Corporation."
        },
        {
            name: "Faridabad Thermal Power Plant",
            nameHindi: "फरीदाबाद ताप विद्युत संयंत्र",
            location: "Faridabad",
            details: "Located about 30 km from Delhi. Earlier capacity 180 MW, present capacity 430 MW. Only gas based thermal power plant in the state."
        }
    ];

    // Section 7: Hydro Power Plants
    const hydroPowerPlants = [
        {
            name: "Western Yamuna Canal Hydel Project",
            nameHindi: "पश्चिमी यमुना नहर जल विद्युत परियोजना",
            location: "Between Hathnikund and Dadupur, Yamunanagar",
            details: "Established in 1980 in collaboration with Japan. Total installed capacity of 62.7 MW. In 1990, Central Government approved installation of 4 other power stations under this project."
        },
        {
            name: "Kakroi Micro Hydel Project",
            nameHindi: "ककरोई माइक्रो हाइडल परियोजना",
            location: "Kakroi village, Sonipat",
            details: "Ultra low head (1.9m) project on Western Yamuna Canal (Delhi branch). Total capacity 400 KW comprising 4 units of 100 KW each. Under HPGCL control from 1st June, 1999. National Demonstration Project of Hydroelectric Power Centre, Roorkee. Work started from 1987-88."
        },
        {
            name: "Dadupur Mini Hydro Electric Project",
            nameHindi: "दादुपुर मिनी हाइड्रो इलेक्ट्रिक परियोजना",
            location: "Dadupur",
            details: "Micro hydel project with installed capacity of 4 MW. Established in 2009-10 by Bhoska Power Corporation."
        },
        {
            name: "Western Yamunanagar Project",
            nameHindi: "पश्चिमी यमुनानगर परियोजना",
            location: "Gauripur, Karnal",
            details: "Hybrid project established in 2010-11 by P&R Engineering Services. Installed capacity of 2 MW."
        },
        {
            name: "Muasapur Micro Hydel Project",
            nameHindi: "मुआसापुर माइक्रो हाइडल परियोजना",
            location: "Indri, Karnal",
            details: "Established in 2011-12 by Puri Oil Mills of Delhi. Installation capacity of 1.4 MW."
        },
        {
            name: "Khunki Micro Hydro Electric Project",
            nameHindi: "खूंखी माइक्रो हाइड्रो इलेक्ट्रिक परियोजना",
            location: "Khunki, Karnal",
            details: "Established in 2011-12 by Puri Oil Mills of Delhi."
        }
    ];

    // Section 8: Nuclear Energy
    const nuclearEnergy = {
        titleHindi: "परमाणु ऊर्जा",
        titleEnglish: "Nuclear Energy",
        contentHindi: "हरियाणा में केवल एक परमाणु ऊर्जा संयंत्र (गोरखपुर परमाणु ऊर्जा संयंत्र) है जो राज्य में बिजली आपूर्ति सुनिश्चित करता है।",
        contentEnglish: "Haryana has only one nuclear power plant (Gorakhpur Nuclear Power Plant) which ensures power supply in the state.",
        plantName: "Gorakhpur Nuclear Power Plant",
        plantNameHindi: "गोरखपुर परमाणु ऊर्जा संयंत्र",
        location: "Gorakhpur, Fatehabad",
        details: "Set up on 13th January, 2014. Total installed capacity of 2800 MW. Consists of 4 units, each capable of producing 700 MW. First phase launched on 13th January, 2014 by Prime Minister Manmohan Singh. Set up by Nuclear Power Corporation of India Limited (NPCIL). First Nuclear Power House of Haryana."
    };

    // Section 9: Solar Energy
    const solarEnergy = {
        titleHindi: "सौर ऊर्जा",
        titleEnglish: "Solar Energy",
        contentHindi: "हरियाणा का पहला सौर ऊर्जा संयंत्र चरखी-दादरी जिले के नांधा गाँव में स्थापित किया गया था। बुध कलां (यमुनानगर) में सौर ऊर्जा संयंत्र HPGCL द्वारा स्थापित किया गया है। राज्य में सौर विकिरण स्तर 5.5 KW से 6.5 KW प्रति वर्ग मीटर क्षेत्र की सीमा में है और राज्य में वर्ष में लगभग 320 साफ धूप वाले दिन होते हैं। हरियाणा देश का एकमात्र राज्य है जिसने सौर जल तापन प्रणाली स्थापित करना, कृषि में 4 स्टार पंप सेट का उपयोग, सरकारी कार्यालयों में CFL और रिफ्लेक्स बल्ब का उपयोग अनिवार्य किया है। सरकार ने सौर ऊर्जा पर विशेष ध्यान देने के साथ नवीकरणीय ऊर्जा के क्षेत्र में कुशल जनशक्ति विकसित करने के लिए सूर्यमित्र नामक एक प्रशिक्षण कार्यक्रम भी शुरू किया है। आर्थिक सर्वेक्षण 2020-21 के अनुसार, वर्ष 2022 तक 1600 मेगावाट क्षमता के सौर ऊर्जा संयंत्र स्थापित करने की योजना बनाई गई है। मार्च 2020 तक राज्य में लगभग 183 मेगावाट की संचयी क्षमता के रूफटॉप सौर ऊर्जा परियोजनाएं स्थापित की गई हैं।",
        contentEnglish: "The first solar power plant in Haryana was set up at Nandha village in Charkhi-Dadri district. Solar Power Plant at Budh Kalan in Yamunanagar district has been set up by HPGCL. The solar insolation level in the state is in the range of 5.5 KW to 6.5 KW per sq m of area and the state has about 320 clear sunny days in a year. Haryana is the only state in the country which has made it mandatory to install solar water heating systems, use of 4 star pump sets in agriculture, use of CFL in government offices and reflex bulbs, etc. Government has also launched a training programme called Suryamitra to develop skilled manpower in the field of renewable energy with special focus on solar energy. According to Economic Survey 2020-21, it has been planned to install 1600 MW capacity of solar power plants by year 2022. Till March, 2020 Rooftop Solar Power Projects of about 183 MW cumulative capacity have been installed in the state."
    };

    // Section 10: Haryana Solar Power Policy 2016
    const solarPolicy = {
        title: "Haryana Solar Power Policy, 2016",
        titleHindi: "हरियाणा सौर ऊर्जा नीति, 2016",
        date: "14th March, 2016",
        objectives: [
            "To promote generation of green and clean power in the state by using solar energy.",
            "To create awareness among youths and students about the environment.",
            "To create conditions conducive to the participation of private and public sector in setting up solar energy based power projects.",
            "To provide subsidy for setting up of rooftop solar power plants.",
            "Decentralisation and diversification of the energy portfolio and to increase the share of renewable solar power.",
            "To leverage Clean Development Mechanism (CDM) benefits and lower Green House Gas (GHG) emissions.",
            "To develop techniques of using more solar energy under Solar Centre of Excellence."
        ]
    };

    // Section 11: International Solar Alliance
    const isaInfo = {
        title: "International Solar Alliance (ISA)",
        titleHindi: "अंतर्राष्ट्रीय सौर गठबंधन",
        established: "25th January, 2016",
        location: "Gurugram",
        details: "Headquarters established in Gurugram district. Interim Secretariat inaugurated in National Institute of Solar Energy premises in Gwal hill region. Government of India allotted 5 acres of land for ISA headquarters. ISA promotes use of solar energy worldwide."
    };

    // Section 12: Bio Energy
    const bioEnergy = {
        titleHindi: "जैव ऊर्जा",
        titleEnglish: "Bio Energy",
        contentHindi: "हरियाणा में कृषि अवशेष के कारण जैव ईंधन विकसित करने की क्षमता है, विशेष रूप से सिरसा, हिसार, भिवानी, जींद और कैथल जिलों में। पहला बायो गैस संयंत्र 1991 में पानीपत जिले के दिकादला में स्थापित किया गया था। नवीन और नवीकरणीय ऊर्जा विभाग, हरियाणा सरकार के अनुसार, राज्य में 112 बायो गैस संयंत्र हैं।",
        contentEnglish: "Haryana has a potential to develop bio fuel due to agricultural residue, specially in the districts of Sirsa, Hisar, Bhiwani, Jind and Kaithal. The first bio gas plant was established in 1991 at Dikadla in Panipat district. According to Department of Renewable Energy, Government of Haryana, the state has 112 bio gas plants."
    };

    // Section 13: Haryana Bio Energy Policy 2018
    const bioEnergyPolicy = {
        title: "Haryana Bio Energy Policy, 2018",
        titleHindi: "हरियाणा जैव ऊर्जा नीति, 2018",
        objectives: [
            "Target to set up biomass based power plants of 150 MW by 2022.",
            "To tackle straw burning - 4 paddy straw based biomass power projects of 49.8 MW capacity in Kurukshetra (15 MW), Kaithal (15 MW), Jind (9.90 MW) and Fatehabad (9.90 MW).",
            "To harness biomass based power/biogas/bio-CNG/bio-manure/biofuels.",
            "To support research and development, demonstration and commercialization of new technologies."
        ]
    };

    // Section 14: HAREDA
    const haredaInfo = {
        title: "Haryana Renewable Energy Development Agency (HAREDA)",
        titleHindi: "हरियाणा नवीकरणीय ऊर्जा विकास एजेंसी",
        established: "1977",
        details: "State Nodal Agency for coordinating all activities relating to renewable energy development. Single window clearing agency for all renewable energy power projects. Gets financial support from both State and Central Government."
    };

    // Section 15: Renewable Energy Parks
    const renewableEnergyParks = [
        { park: "Regional Engineering College", location: "Kurukshetra" },
        { park: "Sir Chhotu Ram State Engineering College", location: "Sonipat" },
        { park: "College of Agricultural and Technology", location: "Hisar" },
        { park: "Convent of Jesus and Mary", location: "Ambala Cantt" },
        { park: "Haryana Institute of Rural Development", location: "Karnal" },
        { park: "Hansraj Public School", location: "Panchkula" },
        { park: "Ahir College", location: "Rewari" },
        { park: "Guru Jambeshwar University", location: "Hisar" },
        { park: "Mini Secretariat", location: "Karnal" },
        { park: "Government Polytechnic", location: "Jhajjar" },
        { park: "Government Polytechnic", location: "Sirsa" },
        { park: "BKM Government Polytechnic", location: "Narnaul, Mahendragarh" },
        { park: "ML Institute of Technology", location: "Radaur, Yamunanagar" },
        { park: "Model School", location: "Nuh (Mewat)" },
        { park: "Adarsh Mahila Mahavidyalaya", location: "Bhiwani" },
        { park: "College of Technology and Management", location: "Kaithal" },
        { park: "Navjyoti Foundation", location: "Gurugram" },
        { park: "YMCA Institute of Engineering and Technology", location: "Faridabad" },
        { park: "Vaish College of Engineering", location: "Rohtak" },
        { park: "Manohar Memorial College", location: "Fatehabad" }
    ];

    // Section 16: Government Schemes
    const govtSchemes = [
        {
            name: "Manohar Jyoti Yojana",
            nameHindi: "मनोहर ज्योति योजना",
            launched: "2017",
            details: "Provides LED based SPV home lights. 2 LED luminary of 6 watt each, 1 LED tilelight of 9 watt, 1 DC ceiling fan of 25 watt and 1 USB port for mobile charging per household. Government spends around ₹15000 per family. Around 16666 manohar kits provided in 2019-20."
        },
        {
            name: "Mahra Gaon Jagmag Gaon Yojana",
            nameHindi: "म्हारा गाँव जगमग गाँव योजना",
            launched: "1st July, 2015 at Dayalpur, Kurukshetra",
            details: "24 hours uninterrupted power supply, improve bill collections, reduce power thefts and line loss. Panchkula first district to achieve 24 hour uninterrupted power supply."
        },
        {
            name: "Ujjwal Discom Assurance Yojana (UDAY)",
            nameHindi: "उज्ज्वल डिस्कॉम एश्योरेंस योजना",
            launched: "2015",
            details: "Make debt ridden power distribution companies free from debt. Haryana signed MOU on 11th March, 2016. UDAY bonds issued worth ₹25950 crore (June 2018). Target: ₹34517.34 crore."
        },
        {
            name: "Bill Penalty Waiver Scheme",
            nameHindi: "बिल पेनल्टी माफी योजना",
            launched: "2016 (rural areas)",
            details: "Voluntary declaration scheme for consumers having payments upto 2 KW. Surcharge and penalties waived off."
        },
        {
            name: "Solar Power Plants in Gauhaslas",
            nameHindi: "गौशालाओं में सौर ऊर्जा संयंत्र",
            details: "80-85% grant. 2 MW capacity solar plants in 330 Gauhaslas with grant of ₹8.26 crore."
        },
        {
            name: "Suryamitra Skill Development Programme",
            nameHindi: "सूर्यमित्र कौशल विकास कार्यक्रम",
            details: "Training individuals in solar energy field. Three training programmes conducted in Sirsa, Sonipat and Gurugram districts in 2016-17. 30 persons trained per session."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 dark:from-amber-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium backdrop-blur-sm">
                        <Gem className="w-4 h-4" />
                        {language === "hindi" ? "खनिज और ऊर्जा संसाधन - हरियाणा सरकार" : "Minerals and Energy Resources - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा के" : "Minerals and Energy"} <span className="text-amber-600 dark:text-amber-400">{language === "hindi" ? "खनिज और ऊर्जा संसाधन" : "Resources of Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के खनिज संसाधनों, ऊर्जा स्रोतों, तापीय, जल, परमाणु, सौर, पवन और जैव ऊर्जा की संपूर्ण जानकारी"
                            : "Complete information about Haryana's mineral resources, energy sources, thermal, hydro, nuclear, solar, wind and bio energy"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Pickaxe className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "खनिज संसाधन" : "Mineral Resources"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Zap className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "तापीय ऊर्जा" : "Thermal Energy"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Atom className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "परमाणु ऊर्जा" : "Nuclear Energy"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Sun className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "सौर ऊर्जा" : "Solar Energy"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Wind className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "पवन ऊर्जा" : "Wind Energy"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Section 1: Mineral Resources Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-500/20">
                                <Gem className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? mineralOverview.titleHindi : mineralOverview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? mineralOverview.contentHindi : mineralOverview.contentEnglish}</p>
                    </div>

                    {/* Section 2: Major Minerals */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-6 md:p-8 border border-green-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                                <Pickaxe className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">{language === "hindi" ? "हरियाणा के प्रमुख खनिज" : "Major Minerals of Haryana"}</h2>
                        </div>
                        <div className="space-y-4">
                            {majorMinerals.map((mineral, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-lg text-green-600">{language === "hindi" ? mineral.nameHindi : mineral.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? mineral.detailsHindi : mineral.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 3: Minor Minerals Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Coins className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा में पाए जाने वाले लघु खनिज" : "Minor Minerals Found in Haryana"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "खनिज" : "Mineral"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "पाया जाने वाला क्षेत्र" : "Area Found"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {minorMinerals.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2 font-medium">{item.mineral}</td>
                                            <td className="border p-2">{item.area}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 4: Energy Resources Overview */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-6 md:p-8 border border-blue-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                <Zap className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{language === "hindi" ? energyOverview.titleHindi : energyOverview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? energyOverview.contentHindi : energyOverview.contentEnglish}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">11,972.40</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "कुल स्थापित क्षमता (MW)" : "Total Installed Capacity (MW)"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">3,428.54</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "बिजली उत्पादन (MW)" : "Electricity Generation (MW)"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">29.42</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "गठन के समय उत्पादन" : "Production at Formation"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">51,535.98</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "औद्योगिक खपत (यूनिट)" : "Industrial Consumption (Units)"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Power Generation Organizations */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Building2 className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "बिजली उत्पादन के लिए संगठन" : "Organisations for Power Generation"}</h2>
                        </div>
                        <div className="space-y-4">
                            {powerOrganizations.map((org, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-4 border">
                                    <h3 className="font-semibold text-lg">{language === "hindi" ? org.nameHindi : org.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{org.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 6: Thermal Power Stations */}
                    <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-6 md:p-8 border border-red-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-red-100 dark:bg-red-900/30">
                                <Flame className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">{language === "hindi" ? "ताप विद्युत संयंत्र" : "Thermal Power Stations"}</h2>
                        </div>
                        <div className="space-y-4">
                            {thermalPowerStations.map((plant, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-red-600">{language === "hindi" ? plant.nameHindi : plant.name}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {plant.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{plant.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 7: Hydro Power Plants */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-2xl p-6 md:p-8 border border-cyan-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-900/30">
                                <Droplets className="w-5 h-5 text-cyan-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">{language === "hindi" ? "जल विद्युत संयंत्र" : "Hydro Power Plants"}</h2>
                        </div>
                        <div className="space-y-4">
                            {hydroPowerPlants.map((plant, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-cyan-600">{language === "hindi" ? plant.nameHindi : plant.name}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {plant.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{plant.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 8: Nuclear Energy */}
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-2xl p-6 md:p-8 border border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                                <Atom className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400">{language === "hindi" ? nuclearEnergy.titleHindi : nuclearEnergy.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">{language === "hindi" ? nuclearEnergy.contentHindi : nuclearEnergy.contentEnglish}</p>
                        <div className="bg-card rounded-xl p-4 border">
                            <h3 className="font-semibold text-purple-600">{language === "hindi" ? nuclearEnergy.plantNameHindi : nuclearEnergy.plantName}</h3>
                            <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {nuclearEnergy.location}</p>
                            <p className="text-sm text-muted-foreground mt-1">{nuclearEnergy.details}</p>
                        </div>
                    </div>

                    {/* Section 9: Solar Energy */}
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-2xl p-6 md:p-8 border border-yellow-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-yellow-100 dark:bg-yellow-900/30">
                                <Sun className="w-5 h-5 text-yellow-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">{language === "hindi" ? solarEnergy.titleHindi : solarEnergy.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">{language === "hindi" ? solarEnergy.contentHindi : solarEnergy.contentEnglish}</p>

                        {/* Solar Policy */}
                        <div className="bg-card rounded-xl p-4 border mb-4">
                            <h3 className="font-semibold text-yellow-600">{language === "hindi" ? solarPolicy.titleHindi : solarPolicy.title}</h3>
                            <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "तिथि:" : "Date:"}</strong> {solarPolicy.date}</p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                {solarPolicy.objectives.map((obj, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground">{obj}</li>
                                ))}
                            </ul>
                        </div>

                        {/* ISA */}
                        <div className="bg-card rounded-xl p-4 border">
                            <h3 className="font-semibold text-yellow-600">{language === "hindi" ? isaInfo.titleHindi : isaInfo.title}</h3>
                            <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थापना:" : "Established:"}</strong> {isaInfo.established}</p>
                            <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {isaInfo.location}</p>
                            <p className="text-sm text-muted-foreground mt-1">{isaInfo.details}</p>
                        </div>
                    </div>

                    {/* Section 10: Bio Energy */}
                    <div className="bg-lime-50 dark:bg-lime-950/20 rounded-2xl p-6 md:p-8 border border-lime-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-lime-100 dark:bg-lime-900/30">
                                <Leaf className="w-5 h-5 text-lime-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-lime-700 dark:text-lime-400">{language === "hindi" ? bioEnergy.titleHindi : bioEnergy.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">{language === "hindi" ? bioEnergy.contentHindi : bioEnergy.contentEnglish}</p>

                        <div className="bg-card rounded-xl p-4 border">
                            <h3 className="font-semibold text-lime-600">{language === "hindi" ? bioEnergyPolicy.titleHindi : bioEnergyPolicy.title}</h3>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                {bioEnergyPolicy.objectives.map((obj, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground">{obj}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Section 11: HAREDA */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Wind className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? haredaInfo.titleHindi : haredaInfo.title}</h2>
                        </div>
                        <p className="text-muted-foreground">{haredaInfo.details}</p>
                    </div>

                    {/* Section 12: Renewable Energy Parks Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Trees className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "नवीकरणीय ऊर्जा पार्क" : "Renewable Energy Parks"}</h2>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">20 renewable energy parks set up in 18 districts</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "पार्क/संस्थान" : "Park/Institution"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "स्थान" : "Location"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renewableEnergyParks.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{item.park}</td>
                                            <td className="border p-2">{item.location}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 13: Government Schemes */}
                    <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-2xl p-6 md:p-8 border border-indigo-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
                                <Heart className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">{language === "hindi" ? "राज्य सरकार द्वारा चलाई जा रही योजनाएं" : "Schemes Run by State Government"}</h2>
                        </div>
                        <div className="space-y-4">
                            {govtSchemes.map((scheme, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-indigo-600">{language === "hindi" ? scheme.nameHindi : scheme.name}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "शुरू:" : "Launched:"}</strong> {scheme.launched}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{scheme.details}</p>
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
                        {language === "hindi" ? "हरियाणा खनिज और ऊर्जा संसाधन: तथ्य सारांश" : "Haryana Minerals and Energy Resources: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-amber-600">40.27</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "लौह अयस्क भंडार (लाख टन)" : "Iron Ore Reserves (Lakh Tonnes)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-amber-600">1,65,000</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "क्वार्ट्ज भंडार (टन)" : "Quartz Reserves (Tonnes)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-amber-600">11,972</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "कुल बिजली क्षमता (MW)" : "Total Power Capacity (MW)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-amber-600">2,800</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "गोरखपुर परमाणु क्षमता (MW)" : "Gorakhpur Nuclear Capacity (MW)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-amber-600">320</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "धूप वाले दिन (प्रति वर्ष)" : "Sunny Days (per year)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-amber-600">112</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "बायो गैस संयंत्र" : "Biogas Plants"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-amber-600">183</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "रूफटॉप सौर क्षमता (MW)" : "Rooftop Solar Capacity (MW)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-amber-600">20</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "नवीकरणीय ऊर्जा पार्क" : "Renewable Energy Parks"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा के खनिज और ऊर्जा संसाधनों के बारे में" : "Common"} <span className="text-amber-600">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Haryana Minerals and Energy Resources"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के खनिजों, ऊर्जा स्रोतों, बिजली संयंत्रों और नवीकरणीय ऊर्जा के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's minerals, energy sources, power plants and renewable energy"}
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
                                        className={`w-5 h-5 text-amber-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
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
                            {language === "hindi" ? "अपने हरियाणा खनिज और ऊर्जा संसाधनों के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Minerals and Energy Resources?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-amber-600 hover:bg-amber-700">
                                {language === "hindi" ? "हरियाणा खनिज और ऊर्जा क्विज़ लें" : "Take Haryana Minerals and Energy Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/irrigation" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "पीछे जाएँ: हरियाणा की सिंचाई प्रणाली" : "Back to Irrigation in Haryana"}
                        </Link>
                        <Link href="/haryana-gk/industries" className="text-amber-600 hover:text-amber-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: हरियाणा के उद्योग" : "Next Chapter: Industries of Haryana"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा के खनिज और ऊर्जा संसाधन - संपूर्ण संदर्भ" : "Minerals and Energy Resources of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के खनिज संसाधनों, ऊर्जा स्रोतों, तापीय, जल, परमाणु, सौर, पवन और जैव ऊर्जा के बारे में व्यापक जानकारी प्रदान करता है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about mineral resources, energy sources, thermal, hydro, nuclear, solar, wind and bio energy of Haryana. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
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