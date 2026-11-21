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
    Map,
    ChevronDown,
    HelpCircle,
    Waves,
    Landmark,
    Compass,
    ArrowLeft,
    Sprout,
    Building2,
    Heart,
    Zap,
    Gauge,
    Repeat,
    Route,
    Hammer,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IrrigationInHaryanaPage() {
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
                "questionHindi": "2024-25 के अनुसार हरियाणा में सिंचाई का प्रमुख स्रोत क्या है?",
                "questionEnglish": "What was the largest source of net irrigated area in Haryana in 2024–25?",
                "answerHindi": "भारत सरकार के भूमि उपयोग आँकड़े 2024-25 (अनंतिम) के अनुसार, हरियाणा में ट्यूबवेल द्वारा 20.65 लाख हेक्टेयर (लगभग 62.5%) तथा नहरों द्वारा 12.37 लाख हेक्टेयर (लगभग 37.5%) शुद्ध क्षेत्र की सिंचाई की गई।",
                "answerEnglish": "According to India’s Land Use Statistics 2024–25 (provisional), tubewells irrigated 20.65 lakh hectares (about 62.5%) of Haryana’s net irrigated area and canals irrigated 12.37 lakh hectares (about 37.5%)."
        },
        {
                "questionHindi": "हरियाणा की सबसे पुरानी प्रमुख नहर प्रणाली कौन-सी है?",
                "questionEnglish": "Which is the oldest major canal system in Haryana?",
                "answerHindi": "पश्चिमी यमुना नहर प्रणाली का इतिहास 14वीं शताब्दी में फिरोज शाह तुगलक के समय से जुड़ा है। ब्रिटिश काल में इसका पुनरुद्धार और विस्तार किया गया। 1879 को इसका प्रारंभ-वर्ष कहना गलत है।",
                "answerEnglish": "The Western Yamuna Canal system traces its history to the 14th century under Firoz Shah Tughlaq. It was subsequently restored and expanded during the British period; 1879 is not its original commencement year."
        },
        {
                "questionHindi": "हरियाणा में प्रमुख नहर प्रणालियाँ कौन-सी हैं?",
                "questionEnglish": "What are the major canal systems in Haryana?",
                "answerHindi": "हरियाणा जल संसाधन प्राधिकरण की 2025–27 कार्ययोजना में चार समूह बताए गए हैं: पश्चिमी यमुना नहर, भाखड़ा नहर, लिफ्ट नहर और आगरा–गुरुग्राम नहर प्रणाली। भाखड़ा प्रणाली का सिंचनीय कमांड क्षेत्र लगभग 33.14 लाख एकड़ दर्ज है।",
                "answerEnglish": "The Haryana Water Resources Authority’s 2025–27 plan groups the network into four systems: Western Yamuna Canal, Bhakra Canal, Lift Canal, and Agra–Gurugram Canal. The Bhakra system has a reported culturable command area of about 33.14 lakh acres."
        },
        {
                "questionHindi": "पथराला बैराज किस नदी पर स्थित है?",
                "questionEnglish": "On which river is the Pathrala Barrage located?",
                "answerHindi": "पथराला बैराज हरियाणा के यमुनानगर जिले में सोम (Somb) नदी पर स्थित है। इसे राज्य का निर्विवाद रूप से सबसे बड़ा बाँध कहना उचित नहीं है।",
                "answerEnglish": "Pathrala Barrage is located on the Somb River in Yamunanagar district, Haryana. It should not be described as Haryana’s definitive largest dam."
        },
        {
                "questionHindi": "अटल भूजल योजना कब शुरू की गई थी?",
                "questionEnglish": "When was Atal Bhujal Yojana launched?",
                "answerHindi": "अटल भूजल योजना (अटल जल) 25 दिसंबर 2019 को शुरू की गई। इसका मूल पाँच-वर्षीय कार्यान्वयन काल 1 अप्रैल 2020 से था और इसका लक्ष्य समुदाय की भागीदारी से टिकाऊ भूजल प्रबंधन है।",
                "answerEnglish": "Atal Bhujal Yojana (Atal Jal) was launched on 25 December 2019. Its original five-year implementation period began on 1 April 2020, with a focus on community-led sustainable groundwater management."
        },
        {
                "questionHindi": "2024-25 में हरियाणा के शुद्ध बोए गए क्षेत्र का कितना भाग सिंचित था?",
                "questionEnglish": "What share of Haryana’s net sown area was irrigated in 2024–25?",
                "answerHindi": "भारत सरकार के अनंतिम 2024-25 भूमि उपयोग आँकड़ों में शुद्ध बोया क्षेत्र 35.41 लाख हेक्टेयर और शुद्ध सिंचित क्षेत्र 33.02 लाख हेक्टेयर था; यानी लगभग 93.3%। यह पूरे राज्य के भौगोलिक क्षेत्र का प्रतिशत नहीं है।",
                "answerEnglish": "In the provisional 2024–25 land-use statistics, Haryana had 35.41 lakh hectares of net sown area and 33.02 lakh hectares of net irrigated area—about 93.3%. This percentage is of net sown land, not the state’s entire geographical area."
        },
        {
                "questionHindi": "सतलुज–यमुना लिंक (SYL) नहर की प्रस्तावित लंबाई कितनी है?",
                "questionEnglish": "What is the planned length of the Sutlej–Yamuna Link (SYL) Canal?",
                "answerHindi": "SYL नहर की प्रस्तावित कुल लंबाई लगभग 214 किमी है, जिसमें 92 किमी हरियाणा तथा 122 किमी पंजाब में है। पंजाब वाले हिस्से की अपूर्णता को लेकर लंबे समय से विवाद है।",
                "answerEnglish": "The planned SYL Canal is approximately 214 km long, with 92 km in Haryana and 122 km in Punjab. Completion of the Punjab portion has remained the subject of prolonged litigation."
        },
        {
                "questionHindi": "हाथनीकुंड बैराज कहाँ स्थित है और इसका उपयोग क्या है?",
                "questionEnglish": "Where is Hathnikund Barrage and what is its purpose?",
                "answerHindi": "हाथनीकुंड बैराज यमुनानगर जिले में यमुना नदी पर है। यह पुराने ताजेवाला हेडवर्क्स की जगह बना और 2002 में संचालित हुआ। इससे पश्चिमी व पूर्वी यमुना नहर प्रणालियों में पानी नियंत्रित किया जाता है।",
                "answerEnglish": "Hathnikund Barrage is on the Yamuna River in Yamunanagar district. It replaced the old Tajewala headworks and became operational in 2002, regulating diversions into the Western and Eastern Yamuna canal systems."
        }
];

    // Section 1: Overview
    const overview = {
        "titleHindi": "हरियाणा में सिंचाई",
        "titleEnglish": "Irrigation in Haryana",
        "contentHindi": "हरियाणा की कृषि में नहरों, ट्यूबवेलों और जल-संरक्षण प्रणालियों का महत्त्वपूर्ण योगदान है। भारत सरकार के भूमि उपयोग आँकड़े 2024-25 (अनंतिम) के अनुसार, राज्य में शुद्ध बोया गया क्षेत्र 35.41 लाख हेक्टेयर तथा शुद्ध सिंचित क्षेत्र 33.02 लाख हेक्टेयर था। इस प्रकार लगभग 93.3% शुद्ध बोया क्षेत्र सिंचित था। शुद्ध सिंचित क्षेत्र में ट्यूबवेलों का योगदान लगभग 62.5% (20.65 लाख हेक्टेयर) और नहरों का लगभग 37.5% (12.37 लाख हेक्टेयर) था। ये क्षेत्रफल तथा प्रतिशत शुद्ध सिंचित क्षेत्र पर आधारित हैं, सकल सिंचित क्षेत्र या कुल भौगोलिक क्षेत्र पर नहीं। हरियाणा में भूमिगत जल के घटते स्तर और कुछ स्थानों पर जलभराव एवं खारे पानी जैसी चुनौतियों के कारण सूक्ष्म सिंचाई, जल-संरक्षण और नहर आधुनिकीकरण महत्त्वपूर्ण हैं।",
        "contentEnglish": "Haryana agriculture depends on canal networks, tubewells, and water-conservation systems. India’s Land Use Statistics 2024–25 (provisional) report 35.41 lakh hectares of net sown area and 33.02 lakh hectares of net irrigated area in the state; therefore about 93.3% of net sown land was irrigated. Tubewells accounted for approximately 62.5% (20.65 lakh hectares) and canals for approximately 37.5% (12.37 lakh hectares) of net irrigated area. These shares refer to net irrigated area, not gross irrigation or the state’s geographical area. Falling groundwater levels, waterlogging and saline groundwater in some regions make micro-irrigation, conservation and canal modernisation important policy priorities."
};

    // Section 2: Canal Irrigation System Overview
    const canalOverview = {
        "titleHindi": "हरियाणा में नहर सिंचाई प्रणाली",
        "titleEnglish": "Canal Irrigation System in Haryana",
        "contentHindi": "हरियाणा जल संसाधन प्राधिकरण की एकीकृत जल संसाधन कार्ययोजना 2025–27 के अनुसार, हरियाणा में कुल 1,527 नहर चैनल हैं, जिनकी संयुक्त लंबाई लगभग 14,370 किलोमीटर है। इस दस्तावेज़ में नहर नेटवर्क को चार मुख्य समूहों में रखा गया है—पश्चिमी यमुना नहर, भाखड़ा नहर, लिफ्ट नहर तथा आगरा–गुरुग्राम नहर प्रणाली। ये आँकड़े चैनलों की संख्या और उनकी लंबाई बताते हैं; इन्हें सिंचित भूमि के क्षेत्रफल से नहीं मिलाना चाहिए।",
        "contentEnglish": "According to the Haryana Water Resources Authority’s Integrated Water Resources Action Plan 2025–27, Haryana has 1,527 canal channels with a combined length of approximately 14,370 km. The plan describes four main groups: the Western Yamuna Canal, Bhakra Canal, Lift Canal, and Agra–Gurugram Canal systems. These figures describe canal-channel count and length, not the area of land irrigated."
};

    // Section 3: Western Yamuna Canal System
    const westernYamunaCanal = {
        "titleHindi": "पश्चिमी यमुना नहर प्रणाली",
        "titleEnglish": "Western Yamuna Canal System",
        "contentHindi": "पश्चिमी यमुना नहर प्रणाली का ऐतिहासिक विकास 14वीं शताब्दी में फिरोज शाह तुगलक के शासनकाल से जुड़ा है। बाद में विभिन्न अवधियों में इस नहर का पुनरुद्धार और विस्तार किया गया। ताजेवाला हेडवर्क्स पहले इस प्रणाली में पानी नियंत्रित करते थे; 2002 से हाथनीकुंड बैराज इस भूमिका का प्रमुख केंद्र है। यह नहर यमुना का पानी हरियाणा के कई जिलों में सिंचाई तथा अन्य आवश्यकताओं के लिए पहुँचाती है। इसके अंतर्गत हांसी, सिरसा, दिल्ली और अन्य शाखाएँ व वितरिकाएँ हैं।",
        "contentEnglish": "The Western Yamuna Canal system has a history dating back to the 14th-century rule of Firoz Shah Tughlaq. It was restored and expanded in later periods. Water was historically controlled at the Tajewala headworks; Hathnikund Barrage took over that role in 2002. The network carries Yamuna water for irrigation and other uses across several Haryana districts through branches and distributaries, including the Hansi, Sirsa and Delhi branches."
};

    // Section 3a: Branches of Western Yamuna Canal
    const westernYamunaBranches = [
        {
                "name": "Sirsa Branch Canal",
                "nameHindi": "सिरसा शाखा नहर",
                "details": "A historic branch of the Western Yamuna Canal network that serves irrigation areas in western Haryana. Specific historic lengths and first-operation dates depend on the period and network definition.",
                "detailsHindi": "पश्चिमी यमुना नहर प्रणाली की ऐतिहासिक शाखा, जो पश्चिमी हरियाणा के सिंचाई क्षेत्रों को सेवा देती है। इसकी सटीक लंबाई और आरंभ-वर्ष अलग-अलग काल एवं नेटवर्क परिभाषाओं के अनुसार दर्ज किए जाते हैं।"
        },
        {
                "name": "Bhalaut Branch Canal",
                "nameHindi": "भलौत शाखा नहर",
                "details": "A distributary system associated with Western Yamuna Canal water distribution in the Sonipat–Jhajjar region.",
                "detailsHindi": "सोनीपत–झज्जर क्षेत्र में पश्चिमी यमुना नहर के पानी के वितरण से जुड़ी शाखा प्रणाली।"
        },
        {
                "name": "Barwala Branch Canal",
                "nameHindi": "बरवाला शाखा नहर",
                "details": "A canal branch associated with irrigation supply in the Hisar–Barwala area.",
                "detailsHindi": "हिसार–बरवाला क्षेत्र में सिंचाई आपूर्ति से संबंधित नहर शाखा।"
        },
        {
                "name": "Hansi Branch Canal",
                "nameHindi": "हांसी शाखा नहर",
                "details": "An established Western Yamuna Canal branch serving the Hansi region. It has been remodelled on several occasions.",
                "detailsHindi": "पश्चिमी यमुना नहर की स्थापित शाखा, जो हांसी क्षेत्र को पानी देती है; विभिन्न समयों में इसका पुनर्निर्माण/सुधार हुआ है।"
        },
        {
                "name": "Jind Branch Canal",
                "nameHindi": "जींद शाखा नहर",
                "details": "A network of distributaries supplying canal water to areas around Jind and adjoining districts.",
                "detailsHindi": "जींद तथा आसपास के जिलों में नहर का पानी पहुँचाने वाली वितरिका प्रणाली।"
        },
        {
                "name": "Munak / Carrier Canal",
                "nameHindi": "मुनक / कैरियर नहर",
                "details": "The Munak carrier system conveys Yamuna water toward Delhi and is significant for the capital’s water supply. Its operational sections should not be conflated with the entire Western Yamuna Canal network.",
                "detailsHindi": "मुनक कैरियर प्रणाली यमुना का पानी दिल्ली की ओर ले जाती है और राजधानी की जलापूर्ति के लिए महत्त्वपूर्ण है। इसके परिचालन खंडों को पूरी पश्चिमी यमुना नहर प्रणाली की लंबाई नहीं मानना चाहिए।"
        }
];

    // Section 4: Bhakra Canal System
    const bhakraCanal = {
        "titleHindi": "भाखड़ा नहर प्रणाली",
        "titleEnglish": "Bhakra Canal System",
        "contentHindi": "भाखड़ा नहर प्रणाली हरियाणा में सतलुज और रावी–ब्यास से आवंटित जल की आपूर्ति का प्रमुख माध्यम है। राज्य को भाखड़ा मुख्य लाइन और संबंधित शाखाओं से पानी मिलता है। हरियाणा जल संसाधन प्राधिकरण की 2025–27 कार्ययोजना में भाखड़ा प्रणाली का सिंचनीय कमांड क्षेत्र लगभग 33.14 लाख एकड़ बताया गया है। इसका पानी मुख्यतः राज्य के पश्चिमी और मध्य भागों में खेती व अन्य आवश्यकताओं के लिए वितरित किया जाता है। इस प्रणाली को अकेली एक नहर या केवल नंगल बाँध से निकली नहर समझना सही नहीं है।",
        "contentEnglish": "The Bhakra Canal System is a major means of delivering Haryana’s allocated Sutlej and Ravi–Beas waters through the Bhakra Main Line and associated branches. The Haryana Water Resources Authority’s 2025–27 plan reports a culturable command area of approximately 33.14 lakh acres for this system. It distributes water principally in parts of western and central Haryana. The system should not be confused with a single canal or described simply as a canal created by constructing Nangal Dam."
};

    // Section 5: Other Canal Projects
    const otherCanals = [
        {
                "name": "Gurugram Canal System",
                "nameHindi": "गुरुग्राम नहर प्रणाली",
                "details": "This system uses Yamuna water for parts of southern Haryana, particularly the Gurugram, Nuh and Palwal areas. The HWRA 2025–27 plan reports a culturable command area of about 3.24 lakh acres.",
                "detailsHindi": "यह प्रणाली दक्षिणी हरियाणा में, विशेष रूप से गुरुग्राम, नूंह और पलवल क्षेत्रों में यमुना का पानी पहुँचाती है। हरियाणा जल संसाधन प्राधिकरण की 2025–27 योजना में इसका सिंचनीय कमांड क्षेत्र लगभग 3.24 लाख एकड़ है।"
        },
        {
                "name": "Jawaharlal Nehru and Bhiwani Canal Systems",
                "nameHindi": "जवाहरलाल नेहरू और भिवानी नहर प्रणालियाँ",
                "details": "Canal and lift-irrigation networks are used to supply water to water-deficient parts of southern and western Haryana. The exact network affiliation and lengths should be taken from the current Irrigation Department inventory.",
                "detailsHindi": "दक्षिणी और पश्चिमी हरियाणा के जल-अभाव वाले क्षेत्रों में नहर तथा लिफ्ट सिंचाई नेटवर्क से पानी पहुँचाया जाता है। इनकी वर्तमान लंबाई और नेटवर्क-वर्गीकरण के लिए सिंचाई विभाग की अद्यतन सूची देखनी चाहिए।"
        },
        {
                "name": "Agra Canal System",
                "nameHindi": "आगरा नहर प्रणाली",
                "details": "The Agra Canal system draws Yamuna water from the Okhla headworks area and supplies parts of Faridabad and Palwal, as well as areas outside Haryana. HWRA 2025–27 reports a Haryana culturable command area of about 64,750 acres.",
                "detailsHindi": "आगरा नहर प्रणाली ओखला हेडवर्क्स क्षेत्र से यमुना का पानी लेकर फरीदाबाद और पलवल सहित हरियाणा के कुछ हिस्सों तथा राज्य के बाहर के क्षेत्रों को आपूर्ति करती है। HWRA 2025–27 में हरियाणा के लिए लगभग 64,750 एकड़ सिंचनीय कमांड क्षेत्र दर्ज है।"
        }
];

    // Section 6: Sutlej-Yamuna Link Project
    const sylProject = {
        "titleHindi": "सतलुज–यमुना लिंक (SYL) परियोजना",
        "titleEnglish": "Sutlej–Yamuna Link (SYL) Project",
        "contentHindi": "सतलुज–यमुना लिंक (SYL) नहर की प्रस्तावित लंबाई लगभग 214 किमी है, जिसमें 122 किमी पंजाब और 92 किमी हरियाणा में है। इस योजना का उद्देश्य हरियाणा को आवंटित नदी जल को नहर के माध्यम से पहुँचाने की सुविधा बढ़ाना है। हरियाणा वाला हिस्सा निर्मित है, परंतु पंजाब वाला हिस्सा पूरा न होने के कारण यह परियोजना दशकों से अंतरराज्यीय विवाद और न्यायिक कार्यवाही का विषय बनी हुई है। इसे पूरी तरह चालू या निर्माणाधीन संपूर्ण नहर बताना सही नहीं होगा।",
        "contentEnglish": "The planned Sutlej–Yamuna Link (SYL) canal is approximately 214 km long: 122 km in Punjab and 92 km in Haryana. Its purpose is to facilitate delivery of water allocated to Haryana through an additional link. The Haryana stretch was constructed, but the incomplete Punjab stretch has led to decades of interstate litigation and negotiations. The whole canal should not be described as an operational completed project."
};

    // Section 7: Lift Irrigation Projects
    const liftIrrigationOverview = {
        "titleHindi": "लिफ्ट सिंचाई परियोजनाएँ",
        "titleEnglish": "Lift Irrigation Projects",
        "contentHindi": "जब नहर का पानी ऊँचाई पर स्थित क्षेत्रों में गुरुत्वाकर्षण के सहारे नहीं पहुँच सकता, तब उसे पंपों से ऊपर उठाकर वितरित किया जाता है; इसे लिफ्ट सिंचाई कहते हैं। हरियाणा में यह व्यवस्था विशेष रूप से दक्षिणी और दक्षिण-पश्चिमी जिलों की जल आवश्यकता पूरी करने में महत्त्वपूर्ण है। हरियाणा जल संसाधन प्राधिकरण की 2025–27 योजना में जुई, सिवानी, लोहारू और जवाहरलाल नेहरू (JLN) लिफ्ट प्रणालियों का वर्णन है तथा इनके लिए लगभग 21.72 लाख एकड़ सिंचनीय कमांड क्षेत्र बताया गया है।",
        "contentEnglish": "Lift irrigation uses pumps to raise canal water to land that cannot be supplied by gravity flow alone. It is particularly important in the water-deficient districts of southern and south-western Haryana. The Haryana Water Resources Authority’s 2025–27 plan names Jui, Siwani, Loharu and Jawaharlal Nehru (JLN) lift systems and reports a combined culturable command area of approximately 21.72 lakh acres."
};

    // Section 7a: Major Lift Irrigation Projects
    const liftIrrigationProjects = [
        {
                "name": "Jui Lift Irrigation System",
                "nameHindi": "जुई लिफ्ट सिंचाई प्रणाली",
                "details": "A lift-irrigation system serving parts of the Bhiwani region. It raises canal water for distribution to higher-lying farmland.",
                "detailsHindi": "भिवानी क्षेत्र के कुछ भागों को सेवा देने वाली लिफ्ट सिंचाई प्रणाली, जो ऊँचे खेतों तक पानी पंप करके पहुँचाती है।"
        },
        {
                "name": "Jawaharlal Nehru (JLN) Lift Irrigation System",
                "nameHindi": "जवाहरलाल नेहरू (JLN) लिफ्ट सिंचाई प्रणाली",
                "details": "An important lift-irrigation network in southern Haryana, including the Mahendragarh and adjoining regions.",
                "detailsHindi": "दक्षिणी हरियाणा में, विशेषकर महेंद्रगढ़ और आसपास के क्षेत्रों में महत्त्वपूर्ण लिफ्ट सिंचाई नेटवर्क।"
        },
        {
                "name": "Loharu Lift Irrigation System",
                "nameHindi": "लोहारू लिफ्ट सिंचाई प्रणाली",
                "details": "One of the principal lift systems identified by the Haryana Water Resources Authority for western and southern Haryana.",
                "detailsHindi": "पश्चिमी तथा दक्षिणी हरियाणा के लिए हरियाणा जल संसाधन प्राधिकरण द्वारा पहचानी गई प्रमुख लिफ्ट प्रणालियों में से एक।"
        },
        {
                "name": "Siwani Lift Irrigation System",
                "nameHindi": "सिवानी लिफ्ट सिंचाई प्रणाली",
                "details": "A named lift system in the HWRA 2025–27 plan, used to convey canal water to higher-elevation command areas.",
                "detailsHindi": "HWRA 2025–27 में वर्णित लिफ्ट प्रणाली, जिसके माध्यम से ऊँचे सिंचनीय क्षेत्रों में नहर का पानी पहुँचता है।"
        },
        {
                "name": "Nangal Lift Irrigation Scheme",
                "nameHindi": "नंगल लिफ्ट सिंचाई योजना",
                "details": "A regional lift-water-supply scheme associated with the Ambala area; historical channel length and beneficiary area require a dated official project report.",
                "detailsHindi": "अंबाला क्षेत्र से जुड़ी क्षेत्रीय लिफ्ट जलापूर्ति योजना; इसकी पुरानी लंबाई और लाभान्वित क्षेत्र के आँकड़ों के लिए दिनांकित आधिकारिक परियोजना रिपोर्ट आवश्यक है।"
        }
];

    // Section 8: Major Barrages and Dams
    const barragesAndDams = [
        {
                "name": "Hathnikund Barrage",
                "nameHindi": "हाथनीकुंड बैराज",
                "location": "Yamunanagar",
                "details": "A barrage across the Yamuna in Yamunanagar district. Built to replace the older Tajewala headworks, it became operational in 2002 and regulates canal diversions toward the Western and Eastern Yamuna Canal systems. A barrage is primarily a flow-regulation structure, not a large storage dam.",
                "detailsHindi": "यमुनानगर जिले में यमुना नदी पर स्थित बैराज। यह पुराने ताजेवाला हेडवर्क्स के स्थान पर बनाया गया और 2002 में संचालित हुआ। यह पश्चिमी तथा पूर्वी यमुना नहर प्रणालियों में जल-वितरण नियंत्रित करता है। बैराज मुख्यतः प्रवाह-नियंत्रण संरचना है, बड़ा भंडारण बाँध नहीं।"
        },
        {
                "name": "Narwana Irrigation Project",
                "nameHindi": "नरवाना सिंचाई परियोजना",
                "location": "Jind",
                "details": "A regional irrigation-related project in the Narwana area. Specific approval dates, route and lengths must be verified from the corresponding current project document before publication as fixed facts.",
                "detailsHindi": "नरवाना क्षेत्र की क्षेत्रीय सिंचाई परियोजना। स्वीकृति तिथि, मार्ग और लंबाई को निश्चित तथ्य के रूप में प्रकाशित करने से पहले संबंधित अद्यतन परियोजना अभिलेख से जाँचना चाहिए।"
        },
        {
                "name": "Tajewala Barrage (historic headworks)",
                "nameHindi": "ताजेवाला बैराज (ऐतिहासिक हेडवर्क्स)",
                "location": "Yamunanagar",
                "details": "The historic Tajewala headworks controlled diversions from the Yamuna before Hathnikund Barrage became operational in 2002. The year and dimensions of old structures should be tied to a particular reconstruction phase and official engineering record.",
                "detailsHindi": "हाथनीकुंड बैराज के 2002 में संचालित होने से पहले ताजेवाला हेडवर्क्स यमुना से नहरों में जल-वितरण नियंत्रित करते थे। पुरानी संरचना के निर्माण-वर्ष तथा आकार को किसी विशेष पुनर्निर्माण चरण और आधिकारिक अभियांत्रिकी अभिलेख से जोड़ना चाहिए।"
        }
];

    // Section 9: Major Dams of Haryana
    const majorDams = [
        {
                "name": "Pathrala Barrage",
                "nameHindi": "पथराला बैराज",
                "location": "Yamunanagar",
                "details": "A historical water-control barrage on the Somb River, associated with diversion into the Western Yamuna Canal system. This is not an independently verified “largest dam of Haryana”.",
                "detailsHindi": "सोम नदी पर स्थित ऐतिहासिक जल-नियंत्रक बैराज, जिसका संबंध पश्चिमी यमुना नहर में जल के प्रवाह से है। इसे हरियाणा का निर्विवाद सबसे बड़ा बाँध कहना सही नहीं है।"
        },
        {
                "name": "Ottu Weir",
                "nameHindi": "ओट्टू वियर",
                "location": "Sirsa",
                "details": "A historic weir on the Ghaggar River near Ottu village in Sirsa district. It is associated with the Ottu reservoir and the canal network serving downstream areas, including Rajasthan.",
                "detailsHindi": "सिरसा जिले में ओट्टू गाँव के पास घग्गर नदी पर स्थित ऐतिहासिक वियर। यह ओट्टू जलाशय तथा राजस्थान सहित नीचे के क्षेत्रों के नहर नेटवर्क से जुड़ा है।"
        },
        {
                "name": "Anangpur Dam",
                "nameHindi": "अनंगपुर बाँध",
                "location": "Faridabad",
                "details": "An ancient masonry hydraulic structure near Anangpur village in Faridabad, associated with the Tomar period. Its exact original construction date and royal attribution are not conclusively established in every archaeological account.",
                "detailsHindi": "फरीदाबाद के अनंगपुर गाँव के निकट स्थित प्राचीन पत्थर का जल-संरक्षण ढाँचा, जिसका संबंध तोमर काल से माना जाता है। इसके मूल निर्माण-वर्ष और विशिष्ट शासक के नाम पर सभी पुरातात्विक स्रोत एकमत नहीं हैं।"
        },
        {
                "name": "Kaushalya Dam",
                "nameHindi": "कौशल्या बाँध",
                "location": "Pinjore, Panchkula",
                "details": "An earthen dam on the Kaushalya River near Pinjore, built for water supply, flood moderation and related purposes. Haryana Assembly audit material reports a height of about 34 m and cost of about ₹208.37 crore through May 2013, rather than the outdated ₹118-crore figure.",
                "detailsHindi": "पिंजौर के निकट कौशल्या नदी पर बना मिट्टी का बाँध, जिसका उद्देश्य जलापूर्ति, बाढ़ नियंत्रण तथा संबंधित उपयोग हैं। हरियाणा विधानसभा की लेखा-परीक्षा सामग्री के अनुसार इसकी ऊँचाई लगभग 34 मीटर तथा मई 2013 तक लागत लगभग ₹208.37 करोड़ थी, न कि पुराना ₹118 करोड़ का आँकड़ा।"
        },
        {
                "name": "Masani Barrage",
                "nameHindi": "मसानी बैराज",
                "location": "Rewari",
                "details": "A flood-control and water-management structure on the seasonal Sahibi River in Rewari district. It should not be represented as a major perennial storage dam.",
                "detailsHindi": "रेवाड़ी जिले में मौसमी साहिबी नदी पर बना बाढ़ नियंत्रण एवं जल प्रबंधन ढाँचा। इसे बड़ा बारहमासी भंडारण बाँध नहीं कहना चाहिए।"
        }
];

    // Section 10: Other Irrigation Projects Table
    const otherIrrigationProjects = [
        {
                "project": "Narwana Irrigation / distributary projects",
                "area": "Jind"
        },
        {
                "project": "Nangal Lift Scheme",
                "area": "Ambala"
        },
        {
                "project": "Loharu Lift Irrigation System",
                "area": "Southern Haryana (including Bhiwani region)"
        },
        {
                "project": "Gurugram Canal System",
                "area": "Gurugram, Nuh and Palwal areas"
        },
        {
                "project": "Dadupur–Shahbad Canal / irrigation scheme (historical scheme)",
                "area": "North-eastern Haryana; current project status requires verification"
        }
];

    // Section 11: Region-Wise Irrigation System
    const regionWiseIrrigation = [
        {
                "region": "North-Eastern Region",
                "regionHindi": "उत्तर-पूर्वी क्षेत्र",
                "districts": "Panchkula, Ambala and Yamunanagar areas",
                "details": "Higher rainfall than south-western Haryana, with a mix of canal distribution, groundwater and rainfall-supported cultivation. The Shivalik foothill terrain limits irrigation options in some places.",
                "detailsHindi": "दक्षिण-पश्चिमी हरियाणा की तुलना में अधिक वर्षा वाला क्षेत्र। यहाँ नहर, भूजल और वर्षा आधारित खेती का मिश्रण है; शिवालिक की तलहटी की भू-आकृति कुछ स्थानों पर सिंचाई सीमित करती है।"
        },
        {
                "region": "Central Region",
                "regionHindi": "मध्य क्षेत्र",
                "districts": "Kurukshetra, Karnal, Kaithal, Jind, Panipat, Sonipat and Rohtak areas",
                "details": "The fertile plains use both canals and tubewells, especially for wheat–rice cultivation. Groundwater stress is an important concern where water-intensive cropping is prevalent.",
                "detailsHindi": "उपजाऊ मैदानी क्षेत्रों में विशेषकर गेहूँ–धान की खेती के लिए नहरों और ट्यूबवेलों का उपयोग होता है। अधिक पानी लेने वाली फसलों के कारण कुछ क्षेत्रों में भूजल दबाव गंभीर समस्या है।"
        },
        {
                "region": "South-Eastern Region",
                "regionHindi": "दक्षिण-पूर्वी क्षेत्र",
                "districts": "Gurugram, Nuh, Faridabad and Palwal areas",
                "details": "Canals, tubewells and water-conservation systems support agriculture despite variable rainfall and localised groundwater salinity. The Agra and Gurugram canal systems are significant.",
                "detailsHindi": "परिवर्तनशील वर्षा और कुछ क्षेत्रों में खारे भूजल के बावजूद नहर, ट्यूबवेल और जल-संरक्षण प्रणालियाँ खेती को सहारा देती हैं। आगरा तथा गुरुग्राम नहर प्रणालियाँ महत्त्वपूर्ण हैं।"
        },
        {
                "region": "South-Western / Semi-Arid Region",
                "regionHindi": "दक्षिण-पश्चिमी / अर्धशुष्क क्षेत्र",
                "districts": "Hisar, Sirsa, Fatehabad, Bhiwani, Charkhi Dadri, Mahendragarh, Rewari and adjoining areas",
                "details": "Relatively low rainfall and higher evapotranspiration make lift canals, canal rotation and efficient micro-irrigation important. Rainfall is lower than in north-eastern Haryana, not literally zero.",
                "detailsHindi": "यहाँ अपेक्षाकृत कम वर्षा और अधिक वाष्पोत्सर्जन के कारण लिफ्ट नहर, आवर्तन आधारित जलापूर्ति तथा कुशल सूक्ष्म सिंचाई महत्त्वपूर्ण हैं। वर्षा उत्तर-पूर्वी हरियाणा से कम होती है, पर शून्य नहीं।"
        }
];

    // Section 12: Micro Irrigation
    const microIrrigation = {
        "titleHindi": "सूक्ष्म सिंचाई",
        "titleEnglish": "Micro Irrigation",
        "contentHindi": "ड्रिप और स्प्रिंकलर जैसी सूक्ष्म सिंचाई विधियाँ पानी को सीधे फसल की आवश्यकतानुसार पहुँचाकर अपव्यय कम करती हैं। हरियाणा में विभिन्न केंद्रीय और राज्य योजनाओं के माध्यम से इन विधियों तथा भूमिगत पाइपलाइन के उपयोग को प्रोत्साहित किया जाता है। किसी योजना के अंतर्गत लाभान्वित क्षेत्रफल, अनुदान प्रतिशत और व्यय वर्ष एवं पात्रता के अनुसार बदलते हैं; इसलिए पुराने 2019-20 आँकड़ों को वर्तमान प्रगति के रूप में नहीं दिखाना चाहिए।",
        "contentEnglish": "Micro-irrigation methods such as drip and sprinkler systems apply water more efficiently to crop root zones and help reduce losses. Central and state programmes encourage these methods and underground pipe networks in Haryana. Beneficiary area, expenditure and subsidy rates vary by year and eligibility, so figures for 2019–20 should not be presented as current programme results."
};

    // Section 13: Government Initiatives for Irrigation Development
    const govtInitiatives = [
        {
                "name": "Atal Bhujal Yojana (Atal Jal)",
                "nameHindi": "अटल भूजल योजना (अटल जल)",
                "details": "Launched on 25 December 2019; the initial implementation period began on 1 April 2020. Supports community participation and groundwater budgeting in identified stressed areas.",
                "detailsHindi": "25 दिसंबर 2019 को शुरू हुई; मूल कार्यान्वयन काल 1 अप्रैल 2020 से आरंभ हुआ। चयनित जल-संकटग्रस्त क्षेत्रों में समुदाय की भागीदारी और भूजल बजट को बढ़ावा देती है।"
        },
        {
                "name": "On-Farm Water Management",
                "nameHindi": "खेत-स्तरीय जल प्रबंधन",
                "details": "Encourages efficient distribution and use of water, including water-saving irrigation methods and appropriately designed conveyance systems.",
                "detailsHindi": "जल की कुशल आपूर्ति एवं उपयोग को बढ़ावा देता है, जिसमें जल-बचत वाली सिंचाई और उपयुक्त पाइप/वितरण प्रणालियाँ शामिल हैं।"
        },
        {
                "name": "Sprinkler Irrigation",
                "nameHindi": "स्प्रिंकलर सिंचाई",
                "details": "Water is sprayed over crops through nozzles, reducing conveyance losses and supporting irrigation in suitable light-textured or uneven soils. Subsidy rates depend on the current programme notification.",
                "detailsHindi": "नोजल से पानी का छिड़काव कर फसलों को सिंचित किया जाता है। इससे जल के वितरण में हानि घट सकती है और उपयुक्त रेतीली या असमतल भूमि में सिंचाई संभव होती है। अनुदान दर वर्तमान योजना की अधिसूचना के अनुसार बदलती है।"
        },
        {
                "name": "Drip Irrigation",
                "nameHindi": "ड्रिप सिंचाई",
                "details": "Supplies controlled amounts of water near plant roots and is useful for water-efficient horticulture and suitable row crops.",
                "detailsHindi": "पौधों की जड़ों के पास नियंत्रित मात्रा में पानी पहुँचाती है और बागवानी तथा कुछ कतार वाली फसलों में जल दक्षता बढ़ाने में उपयोगी है।"
        },
        {
                "name": "Underground Pipeline System (UGPL)",
                "nameHindi": "भूमिगत पाइपलाइन प्रणाली (UGPL)",
                "details": "Conveys irrigation water through pipes to reduce seepage and evaporation losses compared with unlined open field channels. Historical coverage claims need their exact reference year.",
                "detailsHindi": "बिना पक्की खुली खेत-नालियों की तुलना में रिसाव तथा वाष्पीकरण की हानि कम करने के लिए पाइपों से सिंचाई का पानी पहुँचाती है। पुराने लाभान्वित क्षेत्र के आँकड़ों के साथ सटीक संदर्भ-वर्ष लिखना आवश्यक है।"
        },
        {
                "name": "Integrated Micro-Irrigation Projects",
                "nameHindi": "एकीकृत सूक्ष्म सिंचाई परियोजनाएँ",
                "details": "Government projects combining canal distribution, pressurised systems and sometimes solar pumping to improve water-use efficiency. Project counts and implementation status require a dated official report.",
                "detailsHindi": "नहर वितरण, दबाव-आधारित प्रणाली और कभी-कभी सौर पंपों को जोड़कर जल उपयोग दक्षता बढ़ाने वाली परियोजनाएँ। परियोजना संख्या और कार्यान्वयन स्थिति के लिए दिनांकित आधिकारिक रिपोर्ट चाहिए।"
        },
        {
                "name": "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
                "nameHindi": "प्रधानमंत्री कृषि सिंचाई योजना (PMKSY)",
                "details": "A central scheme promoting irrigation access and water-use efficiency, including the Per Drop More Crop approach. Current support rates depend on component, farmer category and state guidelines.",
                "detailsHindi": "सिंचाई की पहुँच और जल उपयोग दक्षता बढ़ाने वाली केंद्रीय योजना, जिसमें प्रति बूंद अधिक फसल की अवधारणा शामिल है। वर्तमान सहायता दर घटक, किसान श्रेणी और राज्य दिशा-निर्देशों पर निर्भर करती है।"
        }
];

    // Section 14: Government Departments for Irrigation
    const govtDepartments = [
        {
                "name": "Haryana Irrigation Research and Management Institute (HIRMI)",
                "nameHindi": "हरियाणा सिंचाई अनुसंधान एवं प्रबंधन संस्थान",
                "location": "Kurukshetra",
                "details": "Supports water-management training, research and capacity development for irrigation professionals.",
                "detailsHindi": "सिंचाई कर्मियों और अधिकारियों के लिए जल प्रबंधन प्रशिक्षण, अनुसंधान एवं क्षमता विकास में सहायता करता है।"
        },
        {
                "name": "Irrigation and Water Resources Department, Haryana",
                "nameHindi": "सिंचाई एवं जल संसाधन विभाग, हरियाणा",
                "location": "Haryana",
                "details": "Responsible for construction, operation, improvement and maintenance of major canal, drainage and related water resources infrastructure.",
                "detailsHindi": "प्रमुख नहर, जलनिकासी तथा संबंधित जल संसाधन अवसंरचना के निर्माण, संचालन, सुधार एवं रखरखाव के लिए जिम्मेदार विभाग।"
        },
        {
                "name": "Micro Irrigation and Command Area Development Authority (MICADA)",
                "nameHindi": "सूक्ष्म सिंचाई एवं कमांड क्षेत्र विकास प्राधिकरण (MICADA)",
                "location": "Haryana",
                "details": "Responsible for command-area development and selected micro-irrigation and water-use-efficiency initiatives. Confirm scheme-level targets from its current official records.",
                "detailsHindi": "कमांड क्षेत्र विकास तथा चयनित सूक्ष्म सिंचाई एवं जल दक्षता संबंधी पहलों का कार्य करता है। योजना-स्तरीय लक्ष्य वर्तमान आधिकारिक अभिलेखों से जाँचे जाने चाहिए।"
        },
        {
                "name": "Flood Control and Drainage Management",
                "nameHindi": "बाढ़ नियंत्रण एवं जलनिकासी प्रबंधन",
                "location": "Haryana",
                "details": "Flood protection, drainage and waterlogging-management works are undertaken through relevant government departments and committees.",
                "detailsHindi": "संबंधित सरकारी विभागों और समितियों के माध्यम से बाढ़ सुरक्षा, जलनिकासी और जलभराव प्रबंधन का कार्य किया जाता है।"
        }
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
                        <Droplets className="w-4 h-4" />
                        {language === "hindi" ? "हरियाणा सिंचाई अध्ययन सामग्री — CET TEST" : "Haryana Irrigation Study Material — CET TEST"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा में" : "Irrigation in"} <span className="text-blue-600 dark:text-blue-400">{language === "hindi" ? "सिंचाई" : "Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा की सिंचाई प्रणाली की संपूर्ण जानकारी - नहरें, बांध, बैराज, लिफ्ट सिंचाई परियोजनाएं, सूक्ष्म सिंचाई और सरकारी पहल"
                            : "Complete information about Haryana's irrigation system - canals, dams, barrages, lift irrigation projects, micro irrigation and government initiatives"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Waves className="w-4 h-4 text-blue-600" />
                            <span>{language === "hindi" ? "नहर प्रणाली" : "Canal System"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Landmark className="w-4 h-4 text-blue-600" />
                            <span>{language === "hindi" ? "बांध और बैराज" : "Dams & Barrages"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Gauge className="w-4 h-4 text-blue-600" />
                            <span>{language === "hindi" ? "लिफ्ट सिंचाई" : "Lift Irrigation"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Sprout className="w-4 h-4 text-blue-600" />
                            <span>{language === "hindi" ? "सूक्ष्म सिंचाई" : "Micro Irrigation"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Section 1: Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/20">
                                <Droplets className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? overview.titleHindi : overview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? overview.contentHindi : overview.contentEnglish}</p>

                        <p className="mt-3 text-xs text-muted-foreground">{language === "hindi" ? "स्रोत: भारत सरकार, Land Use Statistics 2024–25 (अनंतिम), तालिका VII तथा X; प्रतिशत शुद्ध सिंचित क्षेत्र पर आधारित हैं।" : "Source: Government of India, Land Use Statistics 2024–25 (provisional), Tables VII and X; source shares use net irrigated area."}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">93.3%</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "शुद्ध बोए क्षेत्र का सिंचित भाग (2024-25)" : "Net Sown Area Irrigated (2024–25)"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">62.5%</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "ट्यूबवेल का हिस्सा (2024-25)" : "Tubewell Share (2024–25)"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">37.5%</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "नहर का हिस्सा (2024-25)" : "Canal Share (2024–25)"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">33.02 L</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "शुद्ध सिंचित क्षेत्र (लाख हे., 2024-25)" : "Net Irrigated Area (lakh ha, 2024–25)"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Canal Irrigation System Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/20">
                                <Waves className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? canalOverview.titleHindi : canalOverview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? canalOverview.contentHindi : canalOverview.contentEnglish}</p>

                        <p className="mt-3 text-xs text-muted-foreground">{language === "hindi" ? "स्रोत: हरियाणा जल संसाधन प्राधिकरण, Integrated Water Resources Action Plan 2025–27, अध्याय 1।" : "Source: Haryana Water Resources Authority, Integrated Water Resources Action Plan 2025–27, Chapter 1."}</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">1,527</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "चैनल" : "Channels"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">14,370</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "कुल लंबाई (किमी)" : "Total Length (km)"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">4</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "मुख्य नहर प्रणाली (HWRA 2025-27)" : "Major Canal Systems (HWRA 2025–27)"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Western Yamuna Canal System */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-2xl p-6 md:p-8 border border-cyan-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-900/30">
                                <History className="w-5 h-5 text-cyan-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">{language === "hindi" ? westernYamunaCanal.titleHindi : westernYamunaCanal.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">{language === "hindi" ? westernYamunaCanal.contentHindi : westernYamunaCanal.contentEnglish}</p>

                        <h3 className="text-xl font-semibold text-cyan-600 mb-3">{language === "hindi" ? "शाखाएं" : "Branches"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {westernYamunaBranches.map((branch, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h4 className="font-semibold text-cyan-600">{language === "hindi" ? branch.nameHindi : branch.name}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? branch.detailsHindi : branch.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 4: Bhakra Canal System */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-6 md:p-8 border border-green-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                                <Zap className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">{language === "hindi" ? bhakraCanal.titleHindi : bhakraCanal.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? bhakraCanal.contentHindi : bhakraCanal.contentEnglish}</p>
                    </div>

                    {/* Section 5: Other Canal Projects */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Route className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "अन्य नहर परियोजनाएं" : "Other Canal Projects"}</h2>
                        </div>
                        <div className="space-y-4">
                            {otherCanals.map((canal, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-4 border">
                                    <h3 className="font-semibold text-lg">{language === "hindi" ? canal.nameHindi : canal.name}</h3>
                                    <p className="text-sm text-muted-foreground">{language === "hindi" ? canal.detailsHindi : canal.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 6: SYL Project */}
                    <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-6 md:p-8 border border-red-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-red-100 dark:bg-red-900/30">
                                <Repeat className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">{language === "hindi" ? sylProject.titleHindi : sylProject.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? sylProject.contentHindi : sylProject.contentEnglish}</p>
                    </div>

                    {/* Section 7: Lift Irrigation Projects */}
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-2xl p-6 md:p-8 border border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                                <Gauge className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400">{language === "hindi" ? liftIrrigationOverview.titleHindi : liftIrrigationOverview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">{language === "hindi" ? liftIrrigationOverview.contentHindi : liftIrrigationOverview.contentEnglish}</p>

                        <div className="space-y-4">
                            {liftIrrigationProjects.map((project, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-purple-600">{language === "hindi" ? project.nameHindi : project.name}</h3>
                                    <p className="text-sm text-muted-foreground">{language === "hindi" ? project.detailsHindi : project.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 8: Major Barrages and Dams */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Landmark className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "प्रमुख बैराज" : "Major Barrages"}</h2>
                        </div>
                        <div className="space-y-4">
                            {barragesAndDams.map((barrage, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-4 border">
                                    <h3 className="font-semibold text-lg">{language === "hindi" ? barrage.nameHindi : barrage.name}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {barrage.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? barrage.detailsHindi : barrage.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 9: Major Dams of Haryana */}
                    <div className="bg-teal-50 dark:bg-teal-950/20 rounded-2xl p-6 md:p-8 border border-teal-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-teal-100 dark:bg-teal-900/30">
                                <Hammer className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-400">{language === "hindi" ? "हरियाणा के प्रमुख बांध" : "Major Dams of Haryana"}</h2>
                        </div>
                        <div className="space-y-4">
                            {majorDams.map((dam, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-teal-600">{language === "hindi" ? dam.nameHindi : dam.name}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {dam.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? dam.detailsHindi : dam.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 10: Other Irrigation Projects Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Map className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "अन्य सिंचाई परियोजनाएं" : "Other Irrigation Projects"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "सिंचाई परियोजना" : "Irrigation Project"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "सिंचाई क्षेत्र" : "Irrigation Area"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {otherIrrigationProjects.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{item.project}</td>
                                            <td className="border p-2">{item.area}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 11: Region-Wise Irrigation System */}
                    <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-2xl p-6 md:p-8 border border-indigo-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
                                <Compass className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">{language === "hindi" ? "क्षेत्रवार सिंचाई प्रणाली" : "Region-Wise Irrigation System"}</h2>
                        </div>
                        <div className="space-y-4">
                            {regionWiseIrrigation.map((region, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-indigo-600">{language === "hindi" ? region.regionHindi : region.region}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "जिले:" : "Districts:"}</strong> {region.districts}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? region.detailsHindi : region.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 12: Micro Irrigation */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Sprout className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? microIrrigation.titleHindi : microIrrigation.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? microIrrigation.contentHindi : microIrrigation.contentEnglish}</p>
                    </div>

                    {/* Section 13: Government Initiatives */}
                    <div className="bg-orange-50 dark:bg-orange-950/20 rounded-2xl p-6 md:p-8 border border-orange-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-900/30">
                                <Heart className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-400">{language === "hindi" ? "सिंचाई विकास के लिए सरकारी पहल" : "Government Initiatives for Development of Irrigation"}</h2>
                        </div>
                        <div className="space-y-4">
                            {govtInitiatives.map((initiative, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-orange-600">{language === "hindi" ? initiative.nameHindi : initiative.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? initiative.detailsHindi : initiative.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 14: Government Departments for Irrigation */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Building2 className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "सिंचाई के लिए सरकारी विभाग" : "Government Departments for Irrigation"}</h2>
                        </div>
                        <div className="space-y-4">
                            {govtDepartments.map((dept, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-4 border">
                                    <h3 className="font-semibold text-lg">{language === "hindi" ? dept.nameHindi : dept.name}</h3>
                                    <p className="text-sm text-muted-foreground"><strong>{language === "hindi" ? "स्थान:" : "Location:"}</strong> {dept.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? dept.detailsHindi : dept.details}</p>
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
                        {language === "hindi" ? "हरियाणा सिंचाई प्रणाली: तथ्य सारांश" : "Haryana Irrigation System: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">93.3%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "शुद्ध बोए क्षेत्र का सिंचित भाग (2024-25)" : "Net Sown Area Irrigated (2024–25)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">62.5%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "ट्यूबवेल का हिस्सा (2024-25)" : "Tubewell Share (2024–25)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">37.5%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "नहर का हिस्सा (2024-25)" : "Canal Share (2024–25)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">14,370</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "नहर नेटवर्क (किमी)" : "Canal Network (km)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">1,527</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "चैनल" : "Channels"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">214</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "SYL नहर लंबाई (किमी)" : "SYL Canal Length (km)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">33.02 L</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "शुद्ध सिंचित भूमि (लाख हे., 2024-25)" : "Net Irrigated Land (lakh ha, 2024–25)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">4</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "प्रमुख लिफ्ट सिंचाई प्रणालियाँ" : "Principal Lift Systems"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा की सिंचाई प्रणाली के बारे में" : "Common"} <span className="text-blue-600">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Haryana Irrigation System"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा की नहरों, बांधों, बैराजों, लिफ्ट सिंचाई और सूक्ष्म सिंचाई के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's canals, dams, barrages, lift irrigation and micro irrigation"}
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
                                        className={`w-5 h-5 text-blue-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
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
                            {language === "hindi" ? "अपने हरियाणा सिंचाई प्रणाली के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Irrigation System?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700">
                                {language === "hindi" ? "हरियाणा सिंचाई क्विज़ लें" : "Take Haryana Irrigation Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/agriculture" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "पीछे जाएँ: हरियाणा में पशुपालन" : "Back to Animal Husbandry in Haryana"}
                        </Link>
                        {/* <Link href="/haryana-gk/minerals-energy" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: खनिज एवं ऊर्जा संसाधन" : "Next Chapter: Minerals & Energy Resources"}
                            <ChevronRight className="w-4 h-4" />
                        </Link> */}
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा में सिंचाई - संपूर्ण संदर्भ" : "Irrigation in Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की सिंचाई प्रणाली के बारे में व्यापक जानकारी प्रदान करता है जिसमें नहरें, बांध, बैराज, लिफ्ट सिंचाई परियोजनाएं, सूक्ष्म सिंचाई और सरकारी पहल शामिल हैं। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about the irrigation system of Haryana including canals, dams, barrages, lift irrigation projects, micro irrigation and government initiatives. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <div className="mt-6 text-left text-xs text-muted-foreground space-y-2">
                        <p className="font-semibold">{language === "hindi" ? "प्रमुख आधिकारिक स्रोत" : "Principal official sources"}</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li><a href="https://desagri.gov.in/wp-content/uploads/2026/06/LUS-2024-25.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">{language === "hindi" ? "भारत सरकार — भूमि उपयोग सांख्यिकी 2024–25 (अनंतिम), तालिकाएँ VII, VIII, X" : "Government of India — Land Use Statistics 2024–25 (provisional), Tables VII, VIII, X"}</a></li>
                            <li><a href="https://hwra.org.in/IWRAPEbook202527/IWRAP_2025-27.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">{language === "hindi" ? "हरियाणा जल संसाधन प्राधिकरण — एकीकृत जल संसाधन कार्ययोजना 2025–27" : "Haryana Water Resources Authority — Integrated Water Resources Action Plan 2025–27"}</a></li>
                            <li><a href="https://api.sci.gov.in/jonew/judis/18220.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">{language === "hindi" ? "भारत का उच्चतम न्यायालय — सतलुज–यमुना लिंक परियोजना विवाद" : "Supreme Court of India — Sutlej–Yamuna Link Canal case"}</a></li>
                            <li><a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1597575" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">{language === "hindi" ? "पत्र सूचना कार्यालय — अटल भूजल योजना, 25 दिसंबर 2019" : "Press Information Bureau — Atal Bhujal Yojana launch, 25 December 2019"}</a></li>
                        </ul>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "स्रोत: भारत सरकार के भूमि उपयोग आँकड़े 2024-25 (अनंतिम); हरियाणा जल संसाधन प्राधिकरण 2025-27; अन्य आधिकारिक अभिलेख।" : "Sources: Government of India Land Use Statistics 2024–25 (provisional); HWRA 2025–27 plan; other official records."}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}