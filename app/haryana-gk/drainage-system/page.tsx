"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    Droplets,
    Mountain,
    Wind,
    Map,
    ChevronDown,
    HelpCircle,
    Waves,
    Trees,
    Compass,
    ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DrainageSystemOfHaryanaPage() {
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
            questionHindi: "हरियाणा की प्रमुख नदियाँ कौन सी हैं?",
            questionEnglish: "What are the major rivers of Haryana?",
            answerHindi: "हरियाणा की प्रमुख नदियाँ यमुना, सरस्वती, घग्गर, मारकंडा, तांगड़ी, चौतंग, साहिबी और इंदौरी हैं।",
            answerEnglish: "The major rivers of Haryana are Yamuna, Saraswati, Ghaggar, Markanda, Tangri, Chautang, Sahibi and Indori."
        },
        {
            questionHindi: "हरियाणा का सबसे बड़ा प्राकृतिक झील कौन सा है?",
            questionEnglish: "Which is the largest natural lake in Haryana?",
            answerHindi: "दमदमा झील हरियाणा की सबसे बड़ी प्राकृतिक झील है, जो गुरुग्राम जिले के सोहना में स्थित है। यह 3000 एकड़ क्षेत्र में फैली हुई है।",
            answerEnglish: "Damdama Lake is the largest natural lake in Haryana, located in Sohna of Gurugram district. It is spread over an area of 3000 acres."
        },
        {
            questionHindi: "हरियाणा की सबसे बड़ी आर्द्रभूमि कौन सी है?",
            questionEnglish: "Which is the largest wetland in Haryana?",
            answerHindi: "भिंडावास झील हरियाणा की सबसे बड़ी आर्द्रभूमि है, जो झज्जर जिले में स्थित है। यह 1016 एकड़ क्षेत्र में फैली हुई है।",
            answerEnglish: "Bhindawas Lake is the largest wetland in Haryana, located in Jhajjar district. It is spread over an area of 1016 acres."
        },
        {
            questionHindi: "यमुना नदी की प्राचीन नाम क्या है?",
            questionEnglish: "What is the ancient name of Yamuna river?",
            answerHindi: "यमुना नदी की प्राचीन नाम 'यामी' है। यह उत्तराखंड के गढ़वाल हिमालय के बंदरपूंछ श्रेणी पर यमुनोत्री ग्लेशियर से निकलती है।",
            answerEnglish: "The ancient name of Yamuna river is 'Yami'. It originates from Yamunotri glacier on the Banderpunch range of Garhwal Himalayas of Uttarakhand."
        },
        {
            questionHindi: "करनाल शहर का नाम किस झील के नाम पर पड़ा?",
            questionEnglish: "After which lake is Karnal city named?",
            answerHindi: "करनाल शहर का नाम करना झील के नाम पर पड़ा है। करना झील राष्ट्रीय राजमार्ग संख्या 1 पर करनाल जिले से 5 किमी दूर स्थित है।",
            answerEnglish: "Karnal city is named after Karna Lake. Karna Lake is located on National Highway No. 1 about 5 km from Karnal district."
        },
        {
            questionHindi: "हरियाणा में कितने प्रकार के जल निकासी तंत्र हैं?",
            questionEnglish: "How many types of drainage systems are there in Haryana?",
            answerHindi: "हरियाणा की भौगोलिक विशेषताओं के अनुसार, जल निकासी तंत्र को दो भागों में वर्गीकृत किया गया है: 1. उत्तरी जल निकासी तंत्र, 2. दक्षिणी जल निकासी तंत्र।",
            answerEnglish: "According to the geographical features of Haryana, the drainage system is classified into two parts: 1. Northern drainage system, 2. Southern drainage system."
        },
        {
            questionHindi: "सुल्तानपुर झील कहाँ स्थित है?",
            questionEnglish: "Where is Sultanpur Lake located?",
            answerHindi: "सुल्तानपुर झील गुरुग्राम जिले से 15 किमी दूर फर्रुखनगर प्रभाग में स्थित है। यह राज्य का एक प्रमुख पक्षी अभयारण्य है।",
            answerEnglish: "Sultanpur Lake is located in the Farrukhnagar division which is situated 15 km from Gurugram district. It is a major bird sanctuary of the state."
        },
        {
            questionHindi: "हरियाणा के किस स्थान को 'नैली' कहा जाता है?",
            questionEnglish: "Which place in Haryana is called 'Naili'?",
            answerHindi: "घग्गर नदी एक बाढ़ का मैदान बनाती है जिसे 'नैली' कहा जाता है। यह सिरसा जिले के पास स्थित है।",
            answerEnglish: "The Ghaggar river forms a floodplain called 'Naili'. It is located near Sirsa district."
        }
    ];

    // Main Drainage System Section
    const drainageOverview = {
        titleHindi: "हरियाणा की जल निकासी प्रणाली",
        titleEnglish: "Drainage System of Haryana",
        contentHindi: "जल निकासी का सामान्य अर्थ नदियों का प्रवाह है। नदियाँ विभिन्न रूपों में बहती हैं और इन रूपों को जल निकासी पैटर्न कहा जाता है। जल निकासी प्रणाली मुख्य नदी और उसकी सहायक नदियों द्वारा बनाई गई जल प्रवाह की विशेष व्यवस्था है। यह एक प्रकार का नेटवर्क है जिसमें नदियाँ मिलती हैं और पानी का दिशात्मक प्रवाह बनाती हैं। जिस क्षेत्र से होकर नदियाँ बहती हैं, उसे उसका जल निकासी क्षेत्र या बेसिन कहा जाता है। किसी विशेष क्षेत्र की जल निकासी प्रणाली चट्टानों की संरचना और प्रकृति, स्थलाकृति, ढलान, बहते पानी की मात्रा आदि पर निर्भर करती है। हरियाणा राज्य में बहने वाली नदियों का उल्लेख ऋग्वेद पाठ में मिलता है। प्राचीन काल में, हरियाणा क्षेत्र में जल स्रोतों की प्रचुरता थी। हरियाणा राज्य एक बड़ा मैदानी क्षेत्र है, जो गंगा और सिंधु नदी प्रणालियों के बीच एक जल विभाजक के रूप में स्थित है। हरियाणा राज्य के विशाल मैदान यमुना, घग्गर, मारकंडा आदि नदियों द्वारा अपवाहित होते हैं। मैदानी क्षेत्र की प्रचुरता के कारण, राज्य से कोई बारहमासी नदी नहीं निकलती है। हरियाणा राज्य की अधिकांश नदियाँ दक्षिण में बहती हैं और कुछ नदियाँ राज्य की सीमाओं के पास बहती हैं।",
        contentEnglish: "Drainage generally means the flow of rivers. Rivers flow in various forms and these forms are called drainage patterns. The drainage system is the special arrangement of water flow created by the main river and its tributaries. It is a type of network in which the rivers meet and form a directional flow of water. The area through which the rivers flow is called its drainage area or basin. The drainage system of a particular area depends on the composition and nature of rocks, topography, slope, amount of running water, etc. The rivers flowing in the state of Haryana are mentioned in the Rigveda text. In ancient times, there was abundance of water sources in the Haryana region. The State of Haryana is a large plain area, which is situated as a water divide between the Ganges and the Indus river systems. The vast plains of Haryana state are drained by rivers like Yamuna, Ghaggar, Markanda, etc. Due to the abundance of plain area, no perennial river originates from the state. Most of the rivers of the state of Haryana flow in the South and some rivers flow near the state boundaries."
    };

    // Classification of Drainage System
    const classification = {
        titleHindi: "जल निकासी तंत्र का वर्गीकरण",
        titleEnglish: "Classification of Drainage System",
        contentHindi: "हरियाणा की भौगोलिक विशेषताओं के अनुसार, जल निकासी तंत्र को दो भागों में वर्गीकृत किया गया है:\n\n1. उत्तरी जल निकासी तंत्र\n2. दक्षिणी जल निकासी तंत्र",
        contentEnglish: "According to the geographical features of Haryana, the drainage system is classified into two parts:\n\n1. Northern drainage system\n2. Southern drainage system"
    };

    // Northern Drainage System - Yamuna River
    const yamunaRiver = {
        titleHindi: "यमुना नदी (Yamuna River)",
        titleEnglish: "Yamuna River",
        contentHindi: "यमुना नदी का प्राचीन नाम यामी है। यह उत्तराखंड के गढ़वाल हिमालय के बंदरपूंछ श्रेणी पर यमुनोत्री ग्लेशियर से निकलती है। इस श्रेणी की ऊँचाई माध्य समुद्र तल से 6316 मीटर है। यमुना नदी यमुनानगर जिले के ताजेवाला के उत्तर में कलेसर से हरियाणा में प्रवेश करती है। यमुना नदी गंगा की सबसे बड़ी सहायक नदी है। यह एक बारहमासी नदी है।\n\nयमुना नदी हरियाणा के यमुनानगर, करनाल, पानीपत, सोनीपत आदि जिलों से होकर बहने के बाद दिल्ली में प्रवेश करती है। दिल्ली छोड़ने के बाद, यह फिर से हरियाणा राज्य के फरीदाबाद जिले में प्रवेश करती है। फरीदाबाद छोड़ने के बाद, यह हसनपुर नामक स्थान पर उत्तर प्रदेश के अलीगढ़ जिले में प्रवेश करती है। इस प्रकार, यमुना राज्य की सीमा के पूर्वी क्षेत्र में बहती है। यमुना नदी उत्तर प्रदेश और हरियाणा के बीच 320 किमी लंबी सीमा रेखा बनाती है। यमुनानगर के ताजेवाला में यमुना नदी पर हथिनीकुंड बैराज बनाया गया है, जहाँ से पूर्वी यमुना नहर और पश्चिमी यमुना नहर निकलती हैं। पश्चिमी यमुना नहर यमुनानगर, कुरुक्षेत्र, करनाल, पानीपत, सिरसा, जींद, सोनीपत, रोहतक आदि जिलों को पानी प्रदान करती है। मैदानों में यमुना की सहायक नदियाँ टोंस, गिरी और असन हैं। सोम्ब, पथराला और बुढ़ी गंगा राज्य में यमुना की सहायक नदियाँ हैं। यमुना नदी की सहायक नदियाँ सोम्ब और पथराला, हिमाचल प्रदेश के सिरमौर जिले से निकलती हैं। ये नदियाँ संयुक्त रूप से महरामाजरा नामक स्थान पर यमुना नदी से मिलती हैं।",
        contentEnglish: "The ancient name of Yamuna river is Yami. It originates from Yamunotri glacier on the Banderpunch range of Garhwal Himalayas of Uttarakhand. The altitude of this range is 6316 m above mean sea level. Yamuna river enters Haryana from Kalesar in the North of Tajewala of Yamunanagar district. Yamuna river is the largest tributary of Ganga. It is a perennial river.\n\nYamuna river enters Delhi after flowing through Yamunanagar, Karnal, Panipat, Sonipat, etc. districts of Haryana. After leaving Delhi, it again enters Faridabad district of Haryana state. After leaving Faridabad, it enters Aligarh district of Uttar Pradesh at a place called Hasanpur. Hence, Yamuna flows in the Eastern region of the state border. The river Yamuna forms a boundary line of 320 km long between Uttar Pradesh and Haryana. Hathanikund barrage has been constructed on the Yamuna river at Tajewala of Yamunanagar, from where the East Yamuna Canal and the Western Yamuna Canal originate. The Western Yamuna Canal provides water to the districts of Yamunanagar, Kurukshetra, Karnal, Panipat, Sirsa, Jind, Sonipat, Rohtak, etc. The tributaries of Yamuna in the plains are Tons, Giri and Asan. Somb, Pathrala and Budhi Ganga are the tributaries of Yamuna in the state. Somb and Pathrala, tributaries of the Yamuna river, originate from Sirmaur district of Himachal Pradesh. These rivers jointly meet the Yamuna river at a place called Mehramajra."
    };

    // Saraswati River
    const saraswatiRiver = {
        titleHindi: "सरस्वती नदी (Saraswati River)",
        titleEnglish: "Saraswati River",
        contentHindi: "यह नदी एक अत्यंत प्राचीन नदी है। वैदिक सभ्यता इसी नदी के तट पर फली-फूली। ऋग्वेद में सरस्वती नदी को अत्यंत शक्तिशाली नदी बताया गया है। ऋषि वेद व्यास ने इसी नदी के तट पर महाभारत की रचना की थी। यह नदी हिमाचल प्रदेश के सिरमौर जिले की सीमा पर स्थित शिवालिक की पहाड़ियों से निकलती है।\n\nनदी यमुनानगर जिले के आदि बद्री नामक स्थान से राज्य में प्रवेश करती है। वर्तमान में, यह एक मौसमी नदी है। तांगड़ी और मारकंडा सरस्वती नदी की प्रमुख सहायक नदियाँ हैं। चौतंग नदी भैनी के पास इस नदी से मिलती है। पेहोवा नामक स्थान पर, मारकंडा नदी सरस्वती नदी से मिलकर आधुनिक सरस्वती का निर्माण करती है। बाद में, यह सिरसा के पास भटनेर नामक स्थान पर विलुप्त हो जाती है। सरस्वती नदी भवानीपुर, बलचप्पर, खेड़ा, पेहोवा, सिरसा आदि से होकर बहती है। यह कुरुक्षेत्र, अंबाला और कैथल जिलों से होकर बहने के बाद पंजाब के संगरूर जिले में घग्गर नदी में मिल जाती है।",
        contentEnglish: "This river is a very ancient river. Vedic Civilisation flourished on the banks of this river. In Rigveda, Saraswati river is described as a very strong river. Sage Ved Vyasa composed the Mahabharata on the banks of this river. This river originates from the hills of Shivalik situated on the border of Sirmaur district of Himachal Pradesh.\n\nThe river enters the state from a place called Adi Badri of Yamunanagar district. Presently, it is a seasonal river. Tangri and Markanda are major tributaries of Saraswati river. The Chautang river joins this river near Bhaini. At a place called Pehowa, the Markanda river joins the Saraswati river to form the modern Saraswati. Later, it becomes extinct near Sirsa at a place called Bhatner. The Saraswati river flows through Bhawanipur, Balchappar, Kheda, Pehowa, Sirsa, etc. It flows into the Ghaggar river in Sangrur district of Punjab after flowing through the districts of Kurukshetra, Ambala and Kaithal."
    };

    // Ghaggar River
    const ghaggarRiver = {
        titleHindi: "घग्गर नदी (Ghaggar River)",
        titleEnglish: "Ghaggar River",
        contentHindi: "यह सतलुज-यमुना के मैदानों में बहने वाली एक बड़ी वर्षा आधारित नदी है। यह नदी हिमाचल प्रदेश के सोलन जिले के पास दगशाई नामक स्थान से निकलती है। दगशाई समुद्र तल से 1927 मीटर की ऊँचाई पर स्थित है। यह नदी हरियाणा के पंचकुला जिले में कालका के पास राज्य में प्रवेश करती है। यह नदी दक्षिण में पंजाब और हरियाणा में प्रवेश करती रहती है। यह नदी पंचकुला, अंबाला, कैथल, फतेहाबाद और सिरसा जिलों से होकर बहने के बाद राजस्थान में हनुमानगढ़ के पास रेगिस्तानी क्षेत्र में गायब हो जाती है। हरियाणा राज्य में इसकी लंबाई 291 किमी है। झाजरा और कौशल्या घग्गर नदी की दो प्रमुख सहायक नदियाँ हैं। घग्गर नदी में मिलने वाले छोटे नालों को स्थानीय भाषा में 'चौ' कहा जाता है। घग्गर नदी एक बाढ़ का मैदान बनाती है जिसे 'नैली' कहा जाता है। सिरसा जिले के ओट्टू नामक स्थान पर इस नदी पर एक बैराज बनाया गया है। इस बैराज से राजस्थान की सिंचाई करने वाली दो नहरें निकलती हैं। इस स्थान पर एक बड़ा जलाशय बनाया गया है, जहाँ चौधरी देवीलाल ओट्टू वियर नामक एक पर्यटक स्थल भी स्थित है। घग्गर नदी को ओट्टू वियर से निकलने के बाद हकरा नदी के नाम से जाना जाता है। पंजाब में फुलाड़ नामक स्थान से घग्गर नदी से जोया नामक एक धारा निकलती है। यह धारा फतेहाबाद और भटिंडा से होकर गुजरती है और सिरसा जिले में घग्गर नदी से मिल जाती है। घग्गर नदी से दक्षिण में सुकर नामक एक अन्य धारा निकलती है।",
        contentEnglish: "It is a large rain-fed river flowing in the plains of Sutlej-Yamuna. This river originates from a place called Dagshai near Solan district of Himachal Pradesh. Dagshai is located at 1927 m above sea level. This river enters the state near Kalka in Panchkula district of Haryana. This river continues to enter Punjab and Haryana in the South. This river disappears in the desert region near Hanumangarh in Rajasthan after flowing through the districts of Panchkula, Ambala, Kaithal, Fatehabad and Sirsa. Its length in the state of Haryana is 291 km. Jhajra and Kaushalya are two major tributaries of Ghaggar river. The small drains that join the Ghaggar river are called Chau in local language. The Ghaggar river forms a floodplain called Naili. A barrage has been built on this river at a place called Ottu in Sirsa district. Two canals irrigating Rajasthan emerge from this barrage. A large reservoir has been constructed at this place, where a tourist place named Chaudhary Devi Lal Ottu Weir is also located. Ghaggar river is known as Hakra river after it originates from Ottu Weir. A stream named Zoya originates from Ghaggar river from a place called Phulad in Punjab. This stream passes through Fatehabad and Bhatinda and joins the Ghaggar river in Sirsa district. Another stream called Sukar originates from the Ghaggar river to the South."
    };

    // Markanda River
    const markandaRiver = {
        titleHindi: "मारकंडा नदी (Markanda River)",
        titleEnglish: "Markanda River",
        contentHindi: "पौराणिक कथाओं में इस नदी को अरुणा के नाम से जाना जाता था। यह नदी महर्षि मार्कण्डेय के नाम पर मारकंडा कहलाई। यह हरियाणा की एक वर्षा आधारित नदी भी है। यह नदी हिमाचल प्रदेश में निचली शिवालिक पहाड़ियों से निकलती है। नदी अंबाला में कलांब नामक स्थान पर हरियाणा राज्य में प्रवेश करती है। अंबाला जिले के बाद, यह नदी कुरुक्षेत्र जिले में प्रवेश करती है। बरसात के मौसम के दौरान, यह नदी विभिन्न नदियों से पानी लेती है और एक विशाल रूप में परिवर्तित हो जाती है। बरसात के मौसम के दौरान, यह नदी राज्य के अंबाला और कुरुक्षेत्र जिलों में बाढ़ का प्रमुख कारण बन जाती है। कुरुक्षेत्र, अंबाला और कैथल जिलों से होकर बहती हुई, नदी सनिसा झील (पेहोवा के पास अरुनई नामक गाँव के पास स्थित) में गिरती है, जहाँ यह सरस्वती नदी से मिल जाती है। यह नदी राजस्थान के रेगिस्तान में गायब हो जाती है। इस नदी की सहायक नदियाँ तांगड़ी, नकती, रन और बेगना हैं।",
        contentEnglish: "This river was known as Aruna in mythology. This river got its name Markanda after the name of Maharishi Markandeya. It is also a rain-fed river of Haryana. This river originates from lower Shivalik hills in Himachal Pradesh. The river enters the state of Haryana at a place called Kalaamb in Ambala. After Ambala district, this river enters Kurukshetra district. During the rainy period, this river takes water from various rivers and transforms into a gigantic form. During the rainy season, this river becomes the major cause of floods in Ambala and Kurukshetra districts of the state. Flowing through the districts of Kurukshetra, Ambala and Kaithal, the river falls into Sanisa lake (located near a village called Arunai near Pehowa), where it joins the Saraswati river. This river disappears in the desert of Rajasthan. The tributaries of this river are Tangri, Nakti, Ran and Begna."
    };

    // Tangri River
    const tangriRiver = {
        titleHindi: "तांगड़ी नदी (Tangri River)",
        titleEnglish: "Tangri River",
        contentHindi: "यह नदी पंचकुला जिले में मोरनी हिल्स (शिवालिक श्रेणी) से निकलती है। हालाँकि, इस नदी का उद्गम हिमाचल प्रदेश के सोलन जिले में दगशाई नामक स्थान के पास शिवालिक श्रेणी से माना जाता है। यह श्रेणी कई नदियों का उद्गम स्थल है। तांगड़ी मारकंडा नदी की मुख्य सहायक नदी है। यह नदी हरियाणा की एक वर्षा आधारित नदी है। यह नदी राज्य के अंबाला जिले में उमराह जल निकासी के समानांतर बहती है और मुलाना के पास मारकंडा नदी से मिल जाती है। मारकंडा नदी अंबाला के उत्तरी भाग से गुजरती है और तांगड़ी नदी अंबाला के दक्षिणी भाग से गुजरती है। अंबाला छावनी के पूर्वी भाग से बहने वाली तांगड़ी नदी, दक्षिण-पश्चिम दिशा में निहासरी नामक स्थान पर पंजाब के पटियाला जिले में प्रवेश करती है। इस नदी की प्रमुख सहायक नदियाँ बलैयाली और आमरी हैं। बलैयाली नदी का उद्गम स्थल मोरनी पहाड़ियाँ हैं। यह अंबाला में छज्जू माजरा गाँव के पास तांगड़ी नदी से मिलती है। आमरी नदी बरसात के मौसम के दौरान यमुनानगर जिले के रादौर नामक स्थान के पास निकलती है। जब यह दक्षिण-पश्चिम दिशा में बहती है, तो ओमला नामक एक जल निकासी इसमें मिल जाती है। आमरी नदी राज्य में दादरी या शहजादपुर वाली नदी के नाम से जानी जाती है।",
        contentEnglish: "This river originates from Morni Hills (Shivalik Range) in Panchkula district. However, the origin of this river is believed to be from the Shivalik range near a place called Dagshai in Solan district of Himachal Pradesh. This range is the origin of many rivers. Tangri is the main tributary of the Markanda River. This river is a rain-fed river of Haryana. This river flows parallel to Umrah drain in Ambala district of the state and joins the Markanda river near Mulana. The Markanda river passes through the Northern part of Ambala and the Tangri river from the Southern part of Ambala. Tangri river flowing from the Eastern part of Ambala Cantt, enters the district of Patiala in Punjab at a place called Nihasari towards the South-West direction. The major tributaries of this river are the Balaiali and Aamri. The origin place of the Balaiali river is the Morni hills. It joins the Tangri river near Chhajju Majra village in Ambala. Aamri river originates near a place called Radaur in Yamunanagar district during the rainy season. When it flows towards the South-West direction, a drain named Omla joins it. Aamri river is known as Dadari or Shahzadpur Wali river in the state."
    };

    // Chautang River
    const chautangRiver = {
        titleHindi: "चौतंग नदी (Chautang River)",
        titleEnglish: "Chautang River",
        contentHindi: "चितांग और चौतांग इस नदी के उपनाम हैं। इस नदी को ऋग्वेद में दृषद्वती के नाम से भी जाना जाता है। यह नदी शिवालिक पहाड़ियों (निचला क्षेत्र) से निकलती है। यह नदी सरस्वती नदी के समानांतर बहती है। राज्य का सिसवाल गाँव (हिसार) इसी नदी के तट पर स्थित है। रक्षी इस नदी की प्रमुख सहायक नदी है। प्राचीन काल में यह नदी घग्गर की सहायक नदी थी। यह नदी यमुनानगर, कुरुक्षेत्र, करनाल, कैथल, जींद और हिसार जिलों में बहती थी और अंततः राजस्थान में भटनेर के पास घग्गर नदी से मिल जाती थी।",
        contentEnglish: "Chitang and Chautang are the nick names of this river. This river is also known as Drishadvati in Rigveda. This river originates from Shivalik hills (lower region). This river flows parallel to the Saraswati river. Siswal village (Hisar) of the state is situated on the banks of this river. Rakshi is the major tributary of this river. This river was a tributary of Ghaggar in ancient times. The river used to flow into the districts of Yamunanagar, Kurukshetra, Karnal, Kaithal, Jind and Hisar and finally joins Ghaggar river near Bhatner in Rajasthan."
    };

    // Sahibi River (Southern Drainage)
    const sahibiRiver = {
        titleHindi: "साहिबी नदी (Sahibi River)",
        titleEnglish: "Sahibi River",
        contentHindi: "यह नदी राजस्थान की अरावली श्रेणी की मेवात पहाड़ियों से निकलती है। यह नदी राजस्थान में अलवर और पाटन तक पहुँचने से पहले छोटे नालों से व्यापक पानी लेती है। हरियाणा में, इस नदी को सबी नदी के नाम से भी जाना जाता है। यह हरियाणा की एक वर्षा आधारित नदी है, जिसे दिल्ली में नजफगढ़ जल निकासी के नाम से जाना जाता है। यह नदी रेवाड़ी में कोट-कासिम के पास हरियाणा में प्रवेश करती है। बरकनिया नाला और इंदौरी नाला (नूह) कोट-कासिम के पास बाईं ओर से इस नदी से मिलते हैं।\n\nरेवाड़ी तहसील के माध्यम से खलीलपुर और पटौदी के बीच बहती हुई, नदी लाहोरी गाँव के पास झज्जर जिले में प्रवेश करती है। झज्जर जिला छोड़ने के बाद, यह नदी खेड़ी सुल्तान के पास गुरुग्राम जिले में प्रवेश करती है। गुरुग्राम में कुछ दूरी (लगभग 13 किमी) तय करने के बाद, यह कुतानी गाँव के पास फिर से झज्जर जिले में प्रवेश करती है और अंततः दिल्ली में नजफगढ़ जल निकासी के माध्यम से यमुना नदी से मिल जाती है। अरावली से निकलने वाली अधिकांश नदियाँ दक्षिण की ओर बहती हैं, लेकिन साहिबी नदी, एक अपवाद के रूप में, जयपुर और अलवर के उत्तर की ओर बहती है। सोता नदी राजस्थान के जयपुर में साहिबी नदी से मिलती है। इसलिए, सोता नदी साहिबी नदी की एक सहायक नदी है। इंदौरी नदी साहिबी नदी की सबसे बड़ी सहायक नदी है। यह दक्षिणी हरियाणा की प्रमुख नदी है। रेवाड़ी जिले के धारूहेरा के पास साहिबी नदी पर मसानी बैराज बनाया गया है।",
        contentEnglish: "This river originates from the Mewat hills of the Aravalli range of Rajasthan. This river takes extensive water from the small drains before reaching Alwar and Patan in Rajasthan. In Haryana, this river is also known as Sabi River. It is a rain-fed river of Haryana, which is known as Najafgarh drain in Delhi. This river enters Haryana from Rewari near Kot-Kasim. Barkania Nala and Indori Nala (Nuh) join this river near Kot-Kasim from the left side.\n\nFlowing between Khalilpur and Pataudi through Rewari tehsil, the river enters Jhajjar district near Lahori village. After leaving Jhajjar district, this river enters Gurugram district near Khedi Sultan. After covering some distance (about 13 km) in Gurugram, it again enters Jhajjar district near Kutani village and finally joins Yamuna river through Najafgarh drain in Delhi. Most of the rivers originating from Aravalli flow towards the South, but Sahibi river, as an exception, flows to the North of Jaipur and Alwar. Sota river meets Sahibi river in Jaipur of Rajasthan. Hence, Sota river is a tributary of Sahibi river. The Indori river is the largest tributary of Sahibi river. It is the major river of Southern Haryana. Masani barrage has been built on Sahibi river near Dharuhera, Rewari district."
    };

    // Major Lakes Section
    const majorLakes = {
        titleHindi: "हरियाणा की प्रमुख झीलें",
        titleEnglish: "Major Lakes of Haryana",
        contentHindi: "शिवालिक श्रेणी हरियाणा के उत्तर-पूर्वी भाग में और अरावली पहाड़ियाँ दक्षिणी भाग में स्थित हैं। इसके कारण राज्य में झीलों की प्रचुरता है। हरियाणा में झीलों को उनकी सुंदरता के कारण मुख्य पर्यटन स्थल माना जाता है। ये झीलें राज्य के कृषि, पर्यटन और पर्यावरण में विशेष महत्व रखती हैं।",
        contentEnglish: "The Shivalik range is located in the North-Eastern part and the Aravalli hills in the Southern part of Haryana. Due to this there is abundance of lakes in the state. Lakes in Haryana are considered as the main tourist destinations due to their beauty. These lakes have special significance in the state's agriculture, tourism and environment."
    };

    // Lakes data
    const lakesData = [
        {
            name: "Badkhal Lake",
            locationHindi: "फरीदाबाद",
            locationEnglish: "Faridabad",
            detailHindi: "यह अरावली पहाड़ियों से घिरा बड़खल गाँव (फरीदाबाद) के पास स्थित है। दिल्ली से इस झील की दूरी केवल 32 किमी है। यह 206 एकड़ क्षेत्र में फैली हुई है। प्राचीन काल में, यह झील राज्य में बाढ़ का मुख्य कारण थी। 1947 में, इस झील के पानी को नियंत्रित करने के लिए एक बाँध बनाया गया था, जो राज्य की एक सिंचाई परियोजना के तहत काम करता है। हर वसंत ऋतु में यहाँ फूलों की प्रदर्शनी आयोजित की जाती है। इस झील के पास मोर झील स्थित है।",
            detailEnglish: "It is located near Badkhal village (Faridabad) surrounded by the Aravalli hills. The distance of this lake from Delhi is only 32 km. It is spread over an area of 206 acres. In ancient times, this lake was the main reason of flood in the state. In 1947, a dam was constructed to control the water of this lake, which works under an irrigation project of the state. Flower Show is organised here during every spring season. Peacock lake is located near this lake."
        },
        {
            name: "Damdama Lake",
            locationHindi: "सोहना, गुरुग्राम",
            locationEnglish: "Sohna, Gurugram",
            detailHindi: "यह राज्य की सबसे बड़ी प्राकृतिक झील है, जो 3000 एकड़ (लगभग 12.14 वर्ग किमी) क्षेत्र में फैली हुई है। यह गुरुग्राम जिले के सोहना में स्थित है। इसे ब्रिटिशों द्वारा वर्ष 1919 में वर्षा जल एकत्र करने के उद्देश्य से बनाया गया था। इस झील का आकार अमीबा जैसा है। राज्य सरकार इस झील की परियोजना के तहत पर्यटन को बढ़ावा दे रही है। राज्य सरकार द्वारा इस झील पर एक वाटर पोलो स्पोर्ट्स सेंटर बनाया जा रहा है। यह लगभग 190 पक्षी प्रजातियों का घर है। सर्दियों के मौसम में यहाँ कई प्रवासी पक्षी भी आते हैं।",
            detailEnglish: "It is the largest natural lake in the state, which is spread over an area of 3000 acres (about 12.14 sq km). It is located in Sohna of Gurugram district. It was built by the British in the year 1919 for the purpose of collecting rainwater. The shape of this lake is like amoeba. The State Government is promoting tourism under the project of this lake. A Water Polo Sports Center is being constructed on this lake by the State Government. It is home to around 190 bird species. Many migratory birds also come here during winter season."
        },
        {
            name: "Sultanpur Lake",
            locationHindi: "फर्रुखनगर, गुरुग्राम",
            locationEnglish: "Farrukhnagar, Gurugram",
            detailHindi: "यह गुरुग्राम जिले से मात्र 15 किमी दूर फर्रुखनगर प्रभाग में स्थित है। यह लगभग 353 एकड़ (1.43 वर्ग किमी) क्षेत्र में फैली हुई है। यह राज्य का एक प्रमुख पक्षी अभयारण्य है। यहाँ लगभग 250 पक्षी प्रजातियाँ पाई जाती हैं। सर्दियों के मौसम के दौरान साइबेरिया, यूरोप और अफगानिस्तान से 100 से अधिक प्रजातियाँ यहाँ आती हैं। लद्दाख और साइबेरिया में पाया जाने वाला बार-हेडेड गूज नामक पक्षी यहाँ देखा जा सकता है।",
            detailEnglish: "It is located in the Farrukhnagar division which is situated just 15 km from Gurugram district. It is spread over an area of about 353 acres (1.43 sq km). It is a major bird sanctuary of the state. About 250 species of birds are found here. More than 100 species come here from Siberia, Europe and Afghanistan during the winter season. A bird named Bar-headed goose, found in Ladakh and Siberia, can be seen here."
        },
        {
            name: "Kotla Lake",
            locationHindi: "नूह (मेवात)",
            locationEnglish: "Nuh (Mewat)",
            detailHindi: "यह मेवात (नूह जिला) में स्थित एक मानव निर्मित झील है। प्राचीन काल में, इस झील का उपयोग वर्षा जल संग्रहण के लिए किया जाता था। यह झील 108 एकड़ क्षेत्र में फैली हुई है। इस झील के पानी को नियंत्रित करने के लिए एक बाँध बनाया गया था। मेवात के कोटला, अकोरा, मोहम्मदपुर, खानपुर, नूह क्षेत्रों को इसके निर्माण से विशेष लाभ हुआ है।",
            detailEnglish: "It is a man-made lake located in Mewat (Nuh district). In ancient times, this lake was used for collection of rainwater. This lake is spread over an area of 108 acres. A dam was constructed to control the water of this lake. Kotla, Akora, Mohammadpur, Khanpur, Nuh regions of Mewat have received special benefits from its construction."
        },
        {
            name: "Khalilpur Lake",
            locationHindi: "मेवात",
            locationEnglish: "Mewat",
            detailHindi: "यह मेवात के नूह तहसील के उत्तर-पूर्व में स्थित है। यह बरसात के मौसम में पानी प्राप्त करता है। यह झील गर्मियों में सूख जाती है। यह लगभग 1500 एकड़ (6.07 वर्ग किमी) क्षेत्र में फैली हुई है।",
            detailEnglish: "It is located in the North-East of Nuh Tehsil of Mewat. It receives water during the rainy season. This lake dries up in summer. It spreads over an area of about 1500 acres (6.07 sq km)."
        },
        {
            name: "Karna Lake",
            locationHindi: "करनाल",
            locationEnglish: "Karnal",
            detailHindi: "यह करनाल जिले से लगभग 5 किमी दूर राष्ट्रीय राजमार्ग संख्या 1 पर स्थित है। करना झील की दूरी चंडीगढ़ और दिल्ली से समान रूप से 125 किमी है। यह लगभग 17 एकड़ क्षेत्र में फैली हुई है। यह 1972 में बनाई गई एक मानव निर्मित झील है। इस झील का आकार वृत्त जैसा है। करनार और चक्रवर्ती इस झील के अन्य नाम हैं। करनाल शहर का नाम करना झील के नाम पर पड़ा।",
            detailEnglish: "It is located on National Highway No. 1 about 5 km from Karnal district. The distance of Karna lake is equally 125 km from Chandigarh and Delhi. It is spread over an area of about 17 acres. It is a man-made lake created in 1972. The shape of this lake is like a circle. Karnar and Chakravati are other names of this lake. Karnal was named after the Karna lake."
        },
        {
            name: "Tilyar Lake",
            locationHindi: "रोहतक",
            locationEnglish: "Rohtak",
            detailHindi: "यह दिल्ली-फाजिल्का राष्ट्रीय राजमार्ग संख्या 10 पर रोहतक जिले में स्थित है। यह लगभग 132 एकड़ क्षेत्र में फैली हुई है। हरियाणा सरकार द्वारा इस झील पर एक चिड़ियाघर बनाया गया है।",
            detailEnglish: "It is located in Rohtak district on Delhi-Fazilka National Highway No. 10. It is spread over an area of about 132 acres. A zoo has been built on this lake by the Government of Haryana."
        },
        {
            name: "Bhindawas Lake",
            locationHindi: "झज्जर",
            locationEnglish: "Jhajjar",
            detailHindi: "यह झज्जर जिले में स्थित है। यह हजारों पक्षियों का घर है और इसे 5 जुलाई, 1986 को आधिकारिक रूप से वन्यजीव अभयारण्य घोषित किया गया था। यह 1016 एकड़ (4.11 वर्ग किमी) से अधिक क्षेत्र में फैली हुई है। भिंडावास हरियाणा की सबसे बड़ी आर्द्रभूमि भी है। यह एक मानव निर्मित झील है। यहाँ लगभग 266 पक्षी प्रजातियाँ देखी जा सकती हैं। 3 जून, 2009 को, इसे भारत सरकार द्वारा पक्षी अभयारण्य भी घोषित किया गया था।",
            detailEnglish: "It is located in Jhajjar district. It is home to thousand of birds and it was declared officially a Wildlife Sanctuary on 5th July, 1986. It is spread over an area of over 1016 acres (4.11 sq km). Bhindawas is also the largest wetland of Haryana. It is a man-made lake. About 266 species of birds can be seen here. On 3rd June, 2009, it is also declared as bird Sanctuary by Indian Government."
        }
    ];

    // Other Lakes Table
    const otherLakes = [
        { name: "Brahma Sarovar lake", location: "Thanesar (Kurukshetra)" },
        { name: "Surajkund lake", location: "Faridabad" },
        { name: "Ujina lake", location: "Nuh (Mewat)" },
        { name: "Bibipur lake", location: "Kurukshetra" },
        { name: "Blue Bird lake", location: "Hisar" },
        { name: "Tikkar Taal lake", location: "Panchkula" },
        { name: "Dhauj lake", location: "Faridabad" },
        { name: "Peacock lake", location: "Faridabad" },
        { name: "Chilli lake", location: "Fatehabad" },
        { name: "Dabchick lake", location: "Palwal" },
        { name: "Anangpur lake", location: "Faridabad" },
        { name: "Basai lake", location: "Gurugram" }
    ];

    // Drains of Haryana
    const drainsData = [
        {
            name: "Badshahpur Drain of Ghata",
            detailHindi: "इस जल निकासी का उद्गम दिल्ली की पहाड़ियाँ हैं, जो महरौली के पास स्थित हैं। यह जल निकासी ग्वाल पहाड़ी गाँव के माध्यम से गुरुग्राम शहर में प्रवेश करती है। यह जल निकासी नजफगढ़ झील में गिरती है, जो गुरुग्राम तहसील के धनकोट गाँव के पास स्थित है।",
            detailEnglish: "The origin of this drain is the hills of Delhi, which are situated near Mehrauli. This drain enters the city of Gurugram through Gwal Pahari village. This drain falls in the Najafgarh lake, which is located near Dhankot village of Gurugram tehsil."
        },
        {
            name: "Landoha Drain",
            detailHindi: "यह जल निकासी राजस्थान के अलवर से निकलती है। प्रारंभ में, यह जल निकासी फिरोजपुर झिरका पहाड़ियों से पूर्व की ओर बहती है। यह जल निकासी हरियाणा के फिरोजपुर तहसील से राज्य में प्रवेश करती है। अंततः, यह उजीना जल निकासी में गिरती है। यह जल निकासी फिरोजपुर झिरका और नूह तहसील के भूजल को रिचार्ज करने में मदद करती है।",
            detailEnglish: "This drain originates from Alwar in Rajasthan. Initially, this drain flows from the Ferozepur Jhirka hills to the East. This drain enters the state from Ferozepur tehsil of Haryana. Finally, it falls into Ujina drain. This drain helps in recharging the ground water of Ferozepur Jhirka and Nuh tehsils."
        },
        {
            name: "Buriya Drain",
            detailHindi: "यह जल निकासी हरियाणा के बल्लभगढ़ तहसील (फरीदाबाद) के मेवला महाराजपुर गाँव के उत्तर-पश्चिम में स्थित पहाड़ियों से निकलती है। पूर्व दिशा में बहती हुई, यह जल निकासी मौपुर गाँव के पास यमुना नदी से मिल जाती है। हरियाणा में, इस जल निकासी को तिलपत जल निकासी के नाम से भी जाना जाता है।",
            detailEnglish: "This drain originates from the hills situated in the North-West of Mewla Maharajpur village of Ballabgarh tehsil (Faridabad) of Haryana. Flowing in the East direction, this drain joins the Yamuna river near Maupur village. In Haryana, this drain is also known as Tilpat drain."
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
                        <Waves className="w-4 h-4" />
                        {language === "hindi" ? "जल निकासी प्रणाली - हरियाणा सरकार" : "Drainage System - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा की" : "Drainage System of"} <span className="text-primary">{language === "hindi" ? "जल निकासी प्रणाली" : "Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा की जल निकासी प्रणाली की संपूर्ण जानकारी - नदियाँ, झीलें, जल निकासी तंत्र और जल संसाधन"
                            : "Complete information about the drainage system of Haryana - rivers, lakes, drainage patterns, and water resources"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Droplets className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "प्रमुख नदियाँ" : "Major Rivers"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Trees className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "प्रमुख झीलें" : "Major Lakes"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Compass className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "उत्तरी जल निकासी" : "Northern Drainage"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Mountain className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "दक्षिणी जल निकासी" : "Southern Drainage"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Drainage Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Waves className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? drainageOverview.titleHindi : drainageOverview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? drainageOverview.contentHindi : drainageOverview.contentEnglish}</p>
                    </div>

                    {/* Classification */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Map className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? classification.titleHindi : classification.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? classification.contentHindi : classification.contentEnglish}</div>
                    </div>

                    {/* Northern Drainage System Section */}
                    <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/30">
                                <Compass className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary">{language === "hindi" ? "उत्तरी जल निकासी तंत्र" : "Northern Drainage System"}</h2>
                        </div>
                        <div className="space-y-6">
                            {/* Yamuna River */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-xl font-semibold mb-2 text-blue-600">{language === "hindi" ? yamunaRiver.titleHindi : yamunaRiver.titleEnglish}</h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? yamunaRiver.contentHindi : yamunaRiver.contentEnglish}</p>
                            </div>

                            {/* Saraswati River */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-xl font-semibold mb-2 text-amber-600">{language === "hindi" ? saraswatiRiver.titleHindi : saraswatiRiver.titleEnglish}</h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? saraswatiRiver.contentHindi : saraswatiRiver.contentEnglish}</p>
                            </div>

                            {/* Ghaggar River */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-xl font-semibold mb-2 text-teal-600">{language === "hindi" ? ghaggarRiver.titleHindi : ghaggarRiver.titleEnglish}</h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? ghaggarRiver.contentHindi : ghaggarRiver.contentEnglish}</p>
                            </div>

                            {/* Markanda River */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-xl font-semibold mb-2 text-green-600">{language === "hindi" ? markandaRiver.titleHindi : markandaRiver.titleEnglish}</h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? markandaRiver.contentHindi : markandaRiver.contentEnglish}</p>
                            </div>

                            {/* Tangri River */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-xl font-semibold mb-2 text-indigo-600">{language === "hindi" ? tangriRiver.titleHindi : tangriRiver.titleEnglish}</h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? tangriRiver.contentHindi : tangriRiver.contentEnglish}</p>
                            </div>

                            {/* Chautang River */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-xl font-semibold mb-2 text-orange-600">{language === "hindi" ? chautangRiver.titleHindi : chautangRiver.titleEnglish}</h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? chautangRiver.contentHindi : chautangRiver.contentEnglish}</p>
                            </div>
                        </div>
                    </div>

                    {/* Southern Drainage System */}
                    <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/30">
                                <Mountain className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary">{language === "hindi" ? "दक्षिणी जल निकासी तंत्र" : "Southern Drainage System"}</h2>
                        </div>
                        <div className="space-y-6">
                            {/* Sahibi River */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-xl font-semibold mb-2 text-purple-600">{language === "hindi" ? sahibiRiver.titleHindi : sahibiRiver.titleEnglish}</h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? sahibiRiver.contentHindi : sahibiRiver.contentEnglish}</p>
                            </div>

                            {/* Indori River */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-xl font-semibold mb-2 text-pink-600">{language === "hindi" ? "इंदौरी नदी (Indori River)" : "Indori River"}</h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi"
                                    ? "यह नदी नूह जिले (पूर्व में मेवात जिले के नाम से जाना जाता था) के पास मेवात पहाड़ियों से निकलती है, अर्थात भिवानी के पास। चूँकि यह नदी इंदौरी किले के पास निकलती है, इसे इंदौरी नदी के नाम से जाना जाता है। इसका प्राचीन नाम अंशुमती है। यह नदी दो शाखाओं में विभाजित है। एक शाखा कुछ वर्षा आधारित जल निकासी से पानी लेने के बाद गुरुग्राम जिले के पटौदी शहर के पास साहिबी नदी से मिल जाती है। दूसरी शाखा रेवाड़ी जिले की दक्षिणी सीमा पर साहिबी नदी से मिल जाती है। यह एक वर्षा आधारित नदी है। नदी का अपवाह क्षेत्र 198 किमी है और राज्य में इसकी लंबाई 50 किमी है।"
                                    : "This river originates from the Mewat Hills near Nuh district (earlier known as Mewat district) i.e. near Bhiwani. As this river originates near Indori Fort, it is known as Indori river. Its ancient name is Anshumati. This river is divided into two branches. One branch joins the Sahibi river near Pataudi town of Gurugram district after taking water from some rain-fed drains. The other branch joins the Sahibi river on the Southern border of Rewari district. This is a rain-fed river. The river's runoff area is 198 km and its length in the state is 50 km."}
                                </p>
                            </div>

                            {/* Kasaunti/Krishnawati River */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-xl font-semibold mb-2 text-cyan-600">{language === "hindi" ? "कसौंती या कृष्णावती नदी" : "Kasaunti or Krishnawati River"}</h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi"
                                    ? "यह नदी राजस्थान के जयपुर के उत्तर में नीम का थाना नामक स्थान से 1.6 किमी की दूरी पर स्थित मेवात पहाड़ियों से निकलती है। उद्गम के बाद शुरू में, यह नदी उत्तर-पूर्व दिशा की ओर बहती है। यह नदी कोसली गाँव के पास पश्चिम की ओर बहते हुए झज्जर जिले में प्रवेश करती है। यह नदी सुरेहती गाँव के पास दो शाखाओं में विभाजित हो जाती है। इसकी एक शाखा झज्जर जिले के दक्षिणी भाग के पास गायब हो जाती है और दूसरी शाखा छुछकवास गाँव (झज्जर जिला) की ओर मुड़ जाती है और बेहोर जल निकासी में बह जाती है।"
                                    : "This river originates from Mewat hills which lie at a distance of 1.6 km from the place called Neem Ka Thana in the North of Jaipur, Rajasthan. Initially after origination, this river flows towards the North-East direction. This river enters Jhajjar district near Kosli village by flowing towards the West. This river is divided into two branches near the Surehti village. Its one branch disappears near the Southern part of Jhajjar district and the other branch turns towards Chhuchhakwas village (Jhajjar district) and drains into Behor drain."}
                                </p>
                            </div>

                            {/* Dohan River */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-xl font-semibold mb-2 text-lime-600">{language === "hindi" ? "दोहन नदी (Dohan River)" : "Dohan River"}</h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi"
                                    ? "यह नदी जयपुर में स्थित नीम का थाना क्षेत्र से निकलती है। यह नदी हरियाणा के महेंद्रगढ़ जिले में प्रवेश करती है और बासई नामक स्थान पर गायब हो जाती है। यह नदी राज्य में 50 किमी की दूरी तक बहती है।"
                                    : "This river originates from Neem Ka Thana area located in Jaipur. This river enters Mahendragarh district of Haryana and disappears at a place called Basai. This river flows up to a distance of 50 km in the state."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Major Lakes Section */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-6 md:p-8 border border-blue-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                <Droplets className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{language === "hindi" ? majorLakes.titleHindi : majorLakes.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">{language === "hindi" ? majorLakes.contentHindi : majorLakes.contentEnglish}</p>

                        <div className="space-y-4">
                            {lakesData.map((lake, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-blue-600">{lake.name} ({language === "hindi" ? lake.locationHindi : lake.locationEnglish})</h3>
                                    <p className="text-muted-foreground leading-relaxed mt-2">{language === "hindi" ? lake.detailHindi : lake.detailEnglish}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Lakes Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-xl font-bold mb-4">{language === "hindi" ? "हरियाणा की अन्य झीलें" : "Other Lakes of Haryana"}</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "झील का नाम" : "Lake Name"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "स्थान" : "Place"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {otherLakes.map((lake, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{lake.name}</td>
                                            <td className="border p-2">{lake.location}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Drains of Haryana */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-6 md:p-8 border border-green-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                                <Wind className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">{language === "hindi" ? "हरियाणा के जल निकास" : "Drains of Haryana"}</h2>
                        </div>
                        <div className="space-y-4">
                            {drainsData.map((drain, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-green-600">{drain.name}</h3>
                                    <p className="text-muted-foreground leading-relaxed mt-2">{language === "hindi" ? drain.detailHindi : drain.detailEnglish}</p>
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
                        {language === "hindi" ? "हरियाणा जल निकासी प्रणाली: तथ्य सारांश" : "Haryana Drainage System: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">320 किमी</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "यमुना नदी द्वारा बनाई गई सीमा" : "Boundary formed by Yamuna River"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">291 किमी</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "घग्गर नदी की लंबाई" : "Length of Ghaggar River"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">3000 एकड़</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "दमदमा झील (सबसे बड़ी)" : "Damdama Lake (Largest Natural)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">1016 एकड़</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "भिंडावास झील (सबसे बड़ी आर्द्रभूमि)" : "Bhindawas Lake (Largest Wetland)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">250+</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सुल्तानपुर झील में पक्षी प्रजातियाँ" : "Bird Species in Sultanpur Lake"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">266</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "भिंडावास झील में पक्षी प्रजातियाँ" : "Bird Species in Bhindawas Lake"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">206 एकड़</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "बड़खल झील का क्षेत्रफल" : "Badkhal Lake Area"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">17 एकड़</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "करना झील का क्षेत्रफल" : "Karna Lake Area"}</p>
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
                            {language === "hindi" ? "हरियाणा की जल निकासी प्रणाली के बारे में" : "Common"} <span className="text-primary">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Haryana Drainage System"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा की नदियों, झीलों, जल निकासी तंत्र और जल संसाधनों के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's rivers, lakes, drainage systems, and water resources"}
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
                            {language === "hindi" ? "अपने हरियाणा जल निकासी प्रणाली के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Drainage System of Haryana?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer">
                                {language === "hindi" ? "हरियाणा जल निकासी क्विज़ लें" : "Take Haryana Drainage System Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/soil-resources" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Soil Resources of Haryana
                        </Link>
                        <Link href="/haryana-gk/forest-resources" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                            Next Chapter: Forest Resources of Haryana
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा की जल निकासी प्रणाली - संपूर्ण संदर्भ" : "Drainage System of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की जल निकासी प्रणाली के बारे में व्यापक जानकारी प्रदान करता है जिसमें नदियाँ, झीलें, जल निकासी तंत्र और जल संसाधन शामिल हैं। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about the drainage system of Haryana including rivers, lakes, drainage patterns, and water resources. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK and Drainage System."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और जल संसाधन अभिलेखों से स्रोतित" : "Information sourced from official Government of Haryana publications and water resource records"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}