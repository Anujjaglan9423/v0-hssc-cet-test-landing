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

    // FAQ data bilingual (official-source aligned, November 2026)
    const faqs = [
        { questionHindi: "हरियाणा का कुल क्षेत्रफल कितना है?", questionEnglish: "What is the geographical area of Haryana?", answerHindi: "हरियाणा का कुल क्षेत्रफल 44,212 वर्ग किलोमीटर है, जो भारत के क्षेत्रफल का लगभग 1.34% है। वर्तमान 28 राज्यों की सूची में क्षेत्रफल के अनुसार यह 20वें स्थान पर आता है।", answerEnglish: "Haryana covers 44,212 sq km, approximately 1.34% of India’s total area. It ranks 20th by area among India’s present 28 states." },
        { questionHindi: "2011 की जनगणना की जिला सीमाओं के अनुसार हरियाणा का सबसे बड़ा और सबसे छोटा जिला कौन था?", questionEnglish: "Which were Haryana’s largest and smallest districts by area on Census 2011 boundaries?", answerHindi: "2011 की जिला सीमाओं के अनुसार भिवानी (4,778 वर्ग किमी) सबसे बड़ा और फरीदाबाद (741 वर्ग किमी) सबसे छोटा जिला था। 2016 में चरखी दादरी बनने और 2025 में हांसी बनने के बाद पुराने क्षेत्रफल को वर्तमान जिला रैंकिंग नहीं माना जाना चाहिए।", answerEnglish: "On Census 2011 district boundaries, Bhiwani was the largest (4,778 sq km) and Faridabad the smallest (741 sq km). The creation of Charkhi Dadri in 2016 and Hansi in 2025 means these figures must not be presented as a current ranking." },
        { questionHindi: "हरियाणा की सीमा कितने राज्यों और केंद्र शासित प्रदेशों से लगती है?", questionEnglish: "How many states and union territories border Haryana?", answerHindi: "हरियाणा की सीमा पाँच राज्यों—पंजाब, हिमाचल प्रदेश, उत्तराखंड, उत्तर प्रदेश और राजस्थान—तथा दो केंद्र शासित प्रदेशों—दिल्ली और चंडीगढ़—से लगती है।", answerEnglish: "Haryana borders five states—Punjab, Himachal Pradesh, Uttarakhand, Uttar Pradesh and Rajasthan—and two union territories, Delhi and Chandigarh." },
        { questionHindi: "हरियाणा की सबसे ऊँची चोटी कौन-सी है?", questionEnglish: "What is the highest peak in Haryana?", answerHindi: "हरियाणा की सबसे ऊँची चोटी करोह (Karoh Peak) है, जो पंचकूला जिले की मोरनी पहाड़ियों में स्थित है। इसकी सामान्यतः उद्धृत ऊँचाई लगभग 1,467 मीटर (4,813 फीट) है।", answerEnglish: "Karoh Peak, in the Morni Hills of Panchkula district, is Haryana’s highest point. Its commonly cited elevation is approximately 1,467 metres (4,813 feet)." },
        { questionHindi: "हरियाणा सरकार के अनुसार राज्य के कितने प्रमुख प्राकृतिक भू-आकृतिक भाग हैं?", questionEnglish: "How many major natural topographic divisions are identified by the Haryana Government?", answerHindi: "हरियाणा सरकार के भूगोल पृष्ठ के अनुसार पाँच मुख्य प्राकृतिक भाग हैं: (1) बागड़ और लहरदार रेतीले मैदान, (2) घग्गर–यमुना जलोढ़ मैदान, (3) अरावली के अवशेष पर्वतीय क्षेत्र, (4) शिवालिक पहाड़ियाँ तथा (5) तलहटी के पीडमोंट मैदान।", answerEnglish: "The Government of Haryana describes five natural topographic divisions: (1) Bagar and undulating sandy plains, (2) the Ghaggar–Yamuna alluvial plain, (3) Aravalli outliers, (4) the Shivalik hills and (5) the piedmont foothill zone." },
        { questionHindi: "ढोसी पहाड़ी कहाँ स्थित है?", questionEnglish: "Where is Dhosi Hill located?", answerHindi: "ढोसी पहाड़ी अरावली पर्वतमाला से संबंधित पहाड़ी है, जो हरियाणा के महेंद्रगढ़ जिले में नारनौल के निकट स्थित है। इसे करोह चोटी के समान नहीं समझना चाहिए; करोह हरियाणा का सर्वोच्च बिंदु है।", answerEnglish: "Dhosi Hill is part of the Aravalli hill region near Narnaul in Mahendragarh district. It should not be confused with Karoh Peak, Haryana’s highest point." },
        { questionHindi: "राष्ट्रीय राजधानी क्षेत्र (NCR) में हरियाणा के कितने जिले शामिल हैं?", questionEnglish: "How many Haryana districts are included in the National Capital Region (NCR)?", answerHindi: "राष्ट्रीय राजधानी क्षेत्र योजना बोर्ड (NCRPB) की अधिसूचित सूची में हरियाणा के 14 जिले शामिल हैं। हरियाणा उप-क्षेत्र लगभग 25,327 वर्ग किमी है। यह सूची नए जिलों के निर्माण के साथ अपने-आप संशोधित नहीं हो जाती।", answerEnglish: "The NCR Planning Board lists 14 Haryana districts within the notified NCR. Haryana’s NCR sub-region covers approximately 25,327 sq km. New district formation does not automatically revise the notified NCR list." },
        { questionHindi: "हरियाणा की मुख्य भू-आकृति कैसी है?", questionEnglish: "What is Haryana’s dominant physical landscape?", answerHindi: "हरियाणा का अधिकांश भाग जलोढ़ मैदान है। उत्तर-पूर्व में शिवालिक और तलहटी के क्षेत्र, दक्षिण में अरावली की पहाड़ियाँ तथा दक्षिण-पश्चिम में बागड़ के रेतीले मैदान मिलते हैं। हरियाणा राज्य गजेटियर के अनुसार लगभग 93.76% क्षेत्र समुद्र तल से 300 मीटर के नीचे है; इसका अर्थ यह नहीं कि पूरा क्षेत्र सपाट मैदान है।", answerEnglish: "Much of Haryana consists of alluvial plains. The north-east has the Shivalik hills and piedmont, the south has Aravalli hill outliers, and the south-west has the sandy Bagar region. The Haryana State Gazetteer records approximately 93.76% of the area below 300 m elevation; this does not mean that all of it is flat plain." },
    ];

    // Location and Extent Section
    const locationExtent = {
        titleHindi: "हरियाणा का स्थान और विस्तार",
        titleEnglish: "Location and Extent of Haryana",
        contentHindi: "हरियाणा उत्तरी भारत का एक स्थलरुद्ध राज्य है। राज्य का क्षेत्रफल 44,212 वर्ग किलोमीटर है, जो भारत के कुल क्षेत्रफल का लगभग 1.34% है। हरियाणा का विस्तार लगभग 27°39′–30°55′ उत्तरी अक्षांश और 74°27′–77°36′ पूर्वी देशांतर के बीच है; सरकारी स्रोतों में सीमाओं के मिनटों के लिए मामूली अंतर मिलता है। यहाँ घग्गर–यमुना के उपजाऊ जलोढ़ मैदानों के साथ उत्तर-पूर्व में शिवालिक की पहाड़ियाँ, दक्षिण में अरावली के अवशेष और दक्षिण-पश्चिम में शुष्क रेतीले मैदान पाए जाते हैं। हरियाणा दिल्ली के उत्तर, पश्चिम और दक्षिण की ओर स्थित है। वर्तमान प्रशासनिक व्यवस्था में हरियाणा के 23 जिले हैं; हांसी दिसंबर 2025 में अलग जिला बना। क्षेत्रफल के अनुसार राज्य वर्तमान 28 भारतीय राज्यों में 20वें स्थान पर है।",
        contentEnglish: "Haryana is a landlocked state in northern India with an area of 44,212 sq km, approximately 1.34% of India’s geographical area. Its approximate extent is 27°39′–30°55′ N latitude and 74°27′–77°36′ E longitude; official publications show small differences in the precision of these limits. Much of the state is formed by the fertile Ghaggar–Yamuna alluvial plains, with Shivalik hills in the north-east, Aravalli outliers in the south and dry sandy plains in the south-west. Haryana lies north, west and south of Delhi. The state has 23 administrative districts following the creation of Hansi district in December 2025. By area it ranks 20th among the present 28 Indian states."
    };

    // Boundary Section
    const boundarySection = {
        titleHindi: "हरियाणा की सीमाएँ",
        titleEnglish: "Boundaries of Haryana",
        contentHindi: "हरियाणा की सीमा पाँच राज्यों (पंजाब, हिमाचल प्रदेश, उत्तराखंड, उत्तर प्रदेश और राजस्थान) तथा दो केंद्र शासित प्रदेशों (दिल्ली और चंडीगढ़) से लगती है। पंजाब उत्तर-पश्चिम में, हिमाचल प्रदेश उत्तर-पूर्व में, राजस्थान पश्चिम तथा दक्षिण-पश्चिम में, और उत्तर प्रदेश एवं उत्तराखंड पूर्व की ओर स्थित हैं। यमुना का प्रवाह राज्य की पूर्वी सीमा के एक महत्वपूर्ण भाग को निर्धारित करता है। हरियाणा दिल्ली को उत्तर, पश्चिम और दक्षिण की ओर से घेरता है। चंडीगढ़ हरियाणा और पंजाब की साझा राजधानी है। राज्य की प्राकृतिक स्थलाकृतियों में उत्तर-पूर्वी शिवालिक, दक्षिणी अरावली की पहाड़ियाँ, पश्चिमी रेतीले क्षेत्र तथा घग्गर–यमुना मैदान आते हैं।\n\nप्रशासनिक जिलों की सीमाएँ समय के साथ बदल सकती हैं। इसलिए पड़ोसी राज्यों के साथ सीमा साझा करने वाले जिलों की संख्या बताने के लिए किसी दिनांकित सरकारी मानचित्र या अधिसूचना का उपयोग करना चाहिए। नीचे दी गई सारणी में प्रमुख सीमावर्ती जिलों के उदाहरण हैं, न कि वर्तमान सीमा से लगने वाले सभी जिलों की प्रमाणित गणना।\n\nNCRPB की अधिसूचित सूची में हरियाणा के 14 जिले हैं और हरियाणा उप-क्षेत्र का कुल क्षेत्रफल 25,327 वर्ग किमी बताया गया है।",
        contentEnglish: "Haryana borders five states (Punjab, Himachal Pradesh, Uttarakhand, Uttar Pradesh and Rajasthan) and two union territories (Delhi and Chandigarh). Punjab lies to the north-west, Himachal Pradesh to the north-east, Rajasthan to the west and south-west, and Uttar Pradesh and Uttarakhand to the east. The Yamuna defines an important part of Haryana’s eastern boundary. Haryana surrounds Delhi on its northern, western and southern sides. Chandigarh serves as the joint capital of Haryana and Punjab. Its principal natural landscapes include the north-eastern Shivaliks, southern Aravalli outliers, western sandy regions and the Ghaggar–Yamuna plains.\n\nDistrict boundaries change over time. Any exact count of Haryana districts adjoining a neighbouring state should therefore be checked against a dated administrative map or notification. The table below gives examples of border districts, not an exhaustive current tally.\n\nThe NCRPB’s notified list contains 14 districts of Haryana, with a Haryana sub-region area of 25,327 sq km."
    };

    // Neighbouring States Table Data — illustrative, not comprehensive counts
    const neighbouringStates = [
        { state: "Rajasthan", direction: "West / South-west", names: "Sirsa, Bhiwani, Mahendragarh, Nuh (examples)" },
        { state: "Punjab", direction: "North / North-west", names: "Sirsa, Fatehabad, Jind, Kaithal, Ambala (examples)" },
        { state: "Uttar Pradesh", direction: "East", names: "Yamunanagar, Karnal, Panipat, Sonipat, Faridabad, Palwal (examples)" },
        { state: "Himachal Pradesh", direction: "North / North-east", names: "Panchkula, Ambala, Yamunanagar (examples)" },
        { state: "Uttarakhand", direction: "North-east", names: "Yamunanagar" },
        { state: "Delhi (UT)", direction: "North / West / South of Delhi", names: "Sonipat, Jhajjar, Gurugram, Faridabad" },
        { state: "Chandigarh (UT)", direction: "North / North-west", names: "Panchkula, Ambala (official Ambala district description)" },
    ];

    // Largest and Smallest Districts Table — Census 2011 district boundaries only
    const largestDistricts = [
        { name: "Bhiwani", area: "4,778" },
        { name: "Sirsa", area: "4,277" },
        { name: "Hisar", area: "3,983" },
        { name: "Jind", area: "2,702" },
        { name: "Fatehabad", area: "2,538" },
    ];

    const smallestDistricts = [
        { name: "Faridabad", area: "741" },
        { name: "Panchkula", area: "898" },
        { name: "Gurugram", area: "1,258" },
        { name: "Panipat", area: "1,268" },
        { name: "Palwal", area: "1,359" },
    ];

    // Geological Structure Section
    const geologicalStructure = {
        titleHindi: "हरियाणा की भूगर्भिक संरचना",
        titleEnglish: "Geological Structure of Haryana",
        contentHindi: "हरियाणा के बड़े भाग में नदी-निक्षेपित जलोढ़ मिट्टी, रेत, गाद तथा चिकनी मिट्टी जैसे अपेक्षाकृत नवीन (चतुर्थक/क्वाटरनरी) अवसाद पाए जाते हैं। दक्षिणी हरियाणा में अरावली–दिल्ली पर्वतीय प्रणाली की अत्यंत प्राचीन, प्रीकैम्ब्रियन रूपांतरित और अवसादी चट्टानें, विशेषकर क्वार्टजाइट, शिस्ट तथा अन्य शैल समूह, दिखाई देते हैं। उत्तर-पूर्व में शिवालिक क्षेत्र अपेक्षाकृत नवीन हिमालयी तलछटी चट्टानों से संबंधित है। लंबे भूवैज्ञानिक काल में अपरदन, नदियों द्वारा निक्षेपण, पवन से लाई गई रेत और विवर्तनिक क्रियाओं ने राज्य की स्थलाकृति को आकार दिया है। यमुना, घग्गर और मारकंडा जैसी नदी प्रणालियों ने मैदानों और स्थानीय बाढ़-क्षेत्रों के निर्माण में भूमिका निभाई है।\n\nइस विषय में अलग-अलग युगों में कोई भूवैज्ञानिक परिवर्तन नहीं होने, अरावली के बर्फ से ढके होने या किसी निश्चित समय पर हरियाणा के दो समुद्रों से घिरे होने जैसी लोकप्रिय कथाओं के लिए पर्याप्त प्रमाण उपलब्ध नहीं हैं; इसलिए इन्हें स्थापित तथ्य के रूप में प्रस्तुत नहीं किया गया है।",
        contentEnglish: "Much of Haryana is covered by relatively young Quaternary sediments, including river-deposited alluvium, sand, silt and clay. Southern Haryana exposes very old Precambrian rocks of the Aravalli–Delhi geological system, including quartzites, schists and related rock groups. The north-eastern Shivalik zone is associated with comparatively younger Himalayan sedimentary formations. Over geological time, erosion, river deposition, wind-blown sand and tectonic processes have shaped the state’s landscape. The Yamuna, Ghaggar and Markanda river systems helped create parts of the plains and their flood-prone tracts.\n\nStatements that no geological change occurred during specific eras, that Haryana’s Aravalli hills were necessarily snow-covered, or that two named seas bordered the state at a precise time have not been retained as established facts because reliable corroboration was not found."
    };

    // Divisions on Basis of Geographical Area
    const geographicalDivisionsArea = {
        titleHindi: "हरियाणा के प्राकृतिक भू-आकृतिक भागों का वर्गीकरण",
        titleEnglish: "Classification of Natural Topographic Regions of Haryana",
        contentHindi: "हरियाणा सरकार के आधिकारिक भूगोल विवरण में पाँच प्रमुख प्राकृतिक भू-आकृतिक भाग बताए गए हैं: (1) बागड़ एवं लहरदार रेतीले मैदान, (2) घग्गर–यमुना जलोढ़ मैदान, (3) अरावली के अवशेष पर्वतीय क्षेत्र, (4) शिवालिक पहाड़ियाँ और (5) तलहटी का पीडमोंट क्षेत्र। नीचे इन्हीं पाँच भागों को अलग-अलग समझाया गया है।\n\nकुरुक्षेत्र, हरियाणा और भट्टियाना जैसे नाम ऐतिहासिक अथवा सांस्कृतिक क्षेत्रीय संदर्भों में मिल सकते हैं; उन्हें वर्तमान प्रशासनिक प्रभाग या मानक पाँच प्राकृतिक विभागों का विकल्प नहीं समझना चाहिए।",
        contentEnglish: "The official Government of Haryana geography overview identifies five principal natural topographic regions: (1) Bagar and undulating sandy plains, (2) the Ghaggar–Yamuna alluvial plain, (3) Aravalli outliers, (4) the Shivalik hills and (5) the piedmont foothill zone. Each is described separately below.\n\nNames such as Kurukshetra, Haryana and Bhattiana sometimes occur in historical or cultural regional descriptions; they should not be confused with present administrative divisions or the standard five natural topographic regions."
    };

    // Physiography Section
    const physiography = {
        titleHindi: "हरियाणा की भू-आकृतिक विशेषताएँ",
        titleEnglish: "Physiography of Haryana",
        contentHindi: "हरियाणा का अधिकांश भाग समतल या हल्की ढाल वाला जलोढ़ मैदान है। घग्गर–यमुना मैदान में पुरानी जलोढ़ भूमि (बांगर) और नदी के पास की नई बाढ़भूमि (खादर) जैसे उप-क्षेत्र मिलते हैं। घग्गर की बाढ़भूमि नैली और मारकंडा की बाढ़भूमि बेट कहलाती है। मैदान का सामान्य ढाल उत्तर-पूर्व से दक्षिण और दक्षिण-पश्चिम की ओर है, हालांकि स्थानीय ढाल भिन्न हो सकती है। उत्तर-पूर्व में शिवालिक पहाड़ियाँ और उनसे लगे पीडमोंट मैदान हैं; दक्षिण में अरावली की पहाड़ी अवशेष श्रेणियाँ और दक्षिण-पश्चिम में बागड़ के रेतीले टीले हैं। यह विविधता राज्य की मिट्टी, कृषि, जल निकास तथा भूजल की दशा को प्रभावित करती है।\n\nहरियाणा राज्य गजेटियर के पुराने भू-आकृतिक विश्लेषण के अनुसार 68.21% क्षेत्र लगभग समतल, 25.55% क्षेत्र लहरदार/ऊबड़-खाबड़ और कुल 93.76% क्षेत्र समुद्र तल से 300 मीटर से नीचे बताया गया है। ये ऐतिहासिक भू-आकृतिक माप हैं, न कि वर्तमान जिलावार क्षेत्रफल के आँकड़े।",
        contentEnglish: "Haryana is dominated by broad, nearly level or gently sloping alluvial plains. The Ghaggar–Yamuna plain includes older alluvium (Bangar) and newer river floodplains (Khadar). The floodplains of the Ghaggar and Markanda are locally called Naili and Bet respectively. The general gradient of much of the plain is from the north-east towards the south and south-west, although local slopes vary. The Shivalik hills and their piedmont occur in the north-east, Aravalli outliers in the south and sandy dunes of the Bagar in the south-west. These differences influence soils, agriculture, drainage and groundwater.\n\nThe Haryana State Gazetteer describes 68.21% as level or near-level terrain and 25.55% as undulating or rolling, with 93.76% of the state lying below 300 m elevation. These are historical physiographic estimates, not current district-area figures."
    };

    // Five official natural topographic divisions (Government of Haryana)
    const geoDivisions = [
        { titleHindi: "1. बागड़ एवं लहरदार रेतीले मैदान", titleEnglish: "1. Bagar and Undulating Sandy Plains", contentHindi: "यह भाग हरियाणा के दक्षिण-पश्चिम में राजस्थान की ओर स्थित है और सिरसा, हिसार एवं भिवानी क्षेत्र में प्रमुखता से पाया जाता है। पवन द्वारा जमा की गई रेत, टिब्बे और बीच के अपेक्षाकृत समतल गड्ढेनुमा क्षेत्र (ताल) इसकी विशेषताएँ हैं। कुछ टिब्बे चलायमान हैं, जबकि अनेक स्थिर हो चुके हैं। इस क्षेत्र में वर्षा कम और अनिश्चित रहती है तथा सूखा, पवन अपरदन और जल की कमी प्रमुख चुनौतियाँ हैं।", contentEnglish: "The Bagar occupies parts of south-western Haryana near Rajasthan, particularly the Sirsa, Hisar and Bhiwani areas. Wind-deposited sand, dunes and low inter-dune basins called tals characterise this zone. Some dunes are mobile while many are stabilised. Rainfall is low and unreliable; aridity, wind erosion and water scarcity are major concerns." },
        { titleHindi: "2. घग्गर–यमुना जलोढ़ मैदान", titleEnglish: "2. Ghaggar–Yamuna Alluvial Plain", contentHindi: "यह राज्य का विस्तृत और कृषि की दृष्टि से महत्वपूर्ण मैदान है। नदी निक्षेपों से बनी पुरानी जलोढ़ भूमि को बांगर और नवीन बाढ़ के मैदान को खादर कहा जाता है। घग्गर के बाढ़ मैदान नैली तथा मारकंडा के बाढ़ मैदान बेट कहलाते हैं। यहाँ कई जगह उपजाऊ मिट्टियाँ पाई जाती हैं और सामान्य ढलान उत्तर-पूर्व से दक्षिण एवं दक्षिण-पश्चिम की ओर है।", contentEnglish: "This is Haryana’s broad agricultural heartland. Older alluvial tracts are known as Bangar and newer river floodplains as Khadar. The Ghaggar floodplain is locally called Naili, while that of the Markanda is called Bet. Much of the region has productive soils and a gentle overall slope from the north-east towards the south and south-west." },
        { titleHindi: "3. अरावली के अवशेष पर्वतीय क्षेत्र", titleEnglish: "3. Aravalli Outliers", contentHindi: "दक्षिणी हरियाणा में गुरुग्राम, फरीदाबाद, नूंह, महेंद्रगढ़, रेवाड़ी तथा आसपास के क्षेत्रों में अरावली से संबंधित प्राचीन चट्टानी पहाड़ियाँ मिलती हैं। इनमें क्वार्टजाइट और अन्य पुरानी शैलें तथा पथरीली ढालें प्रमुख हैं। नारनौल के निकट ढोसी पहाड़ी और भिवानी क्षेत्र की तोशाम पहाड़ियाँ प्रसिद्ध स्थल हैं। इन्हें शिवालिक पहाड़ियों से अलग समझना चाहिए।", contentEnglish: "The southern Haryana districts, including parts of Gurugram, Faridabad, Nuh, Mahendragarh and Rewari, contain ancient rocky Aravalli outliers. Quartzites and other old rocks form rugged, sometimes sparsely vegetated slopes. Notable examples include Dhosi Hill near Narnaul and the Tosham hills. These are distinct from the much younger Shivaliks." },
        { titleHindi: "4. शिवालिक पहाड़ियाँ", titleEnglish: "4. Shivalik Hills", contentHindi: "शिवालिक हिमालय की बाहरी पर्वत-श्रेणी है, जिसके विस्तार पंचकूला, अंबाला और यमुनानगर के उत्तर-पूर्वी भागों में मिलते हैं। मोरनी पहाड़ियाँ पंचकूला में स्थित हैं और करोह चोटी (लगभग 1,467 मीटर) राज्य का सबसे ऊँचा बिंदु मानी जाती है। ये पहाड़ियाँ अपेक्षाकृत नवीन अवसादी शैलों से बनी हैं; स्थानीय मौसमी धाराएँ ढालों का कटाव करती हैं।", contentEnglish: "The Shivaliks are the outermost Himalayan hills, occurring in north-eastern Panchkula, Ambala and Yamunanagar. The Morni Hills lie in Panchkula district and Karoh Peak (approximately 1,467 m) is generally identified as Haryana’s highest point. The hills comprise relatively young sedimentary formations that are cut by seasonal streams." },
        { titleHindi: "5. शिवालिक तलहटी / पीडमोंट मैदान", titleEnglish: "5. Shivalik Piedmont / Foothill Zone", contentHindi: "शिवालिक पहाड़ियों और मैदानी क्षेत्र के बीच का संक्रमण क्षेत्र पीडमोंट कहलाता है। यहाँ पर्वतीय नालों द्वारा लाई गई बजरी, कंकड़, रेत और गाद से जलोढ़ पंखे तथा तलहटी के निक्षेप बनते हैं। स्थानीय रूप से कुछ भागों को घर (Ghar) और मौसमी जलधाराओं को चो (Cho) कहा जाता है। भूमि का सामान्य ढाल पहाड़ियों से मैदान की ओर है।", contentEnglish: "The piedmont is the transition between the Shivalik slopes and the plains. Seasonal streams deposit gravel, pebbles, sand and silt, creating fans and foothill deposits. Some tracts are locally called Ghar, and seasonal torrents are known as chos. The terrain generally slopes away from the hills into the plains." },
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
                        {language === "hindi" ? "आधिकारिक स्रोतों पर आधारित" : "Based on official references"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा का" : "Geography of"} <span className="text-primary">{language === "hindi" ? "भूगोल" : "Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के भूगोल की स्रोत-आधारित जानकारी: क्षेत्रफल, सीमाएँ, भू-आकृति विज्ञान और पाँच प्राकृतिक भाग"
                            : "Source-based overview of Haryana geography: area, borders, geology, physiography and five natural regions"}
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
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? "पड़ोसी राज्य/केंद्र शासित प्रदेश और प्रमुख सीमावर्ती जिले" : "Neighbouring States/UTs and Examples of Border Districts"}</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "पड़ोसी राज्य/केंद्र शासित प्रदेश" : "Neighbouring State/UT"}</th>
                                        <th className="border p-2 text-center">{language === "hindi" ? "दिशा" : "Direction"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "प्रमुख जिले (उदाहरण)" : "Selected Districts (Examples)"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {neighbouringStates.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2 font-medium">{item.state}</td>
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
                            <h2 className="text-xl font-bold mb-4 text-primary">{language === "hindi" ? "पाँच सबसे बड़े जिले (जनगणना 2011)" : "Five Largest Districts (Census 2011)"}</h2>
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
                            <h2 className="text-xl font-bold mb-4 text-primary">{language === "hindi" ? "पाँच सबसे छोटे जिले (जनगणना 2011)" : "Five Smallest Districts (Census 2011)"}</h2>
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

                    <p className="text-xs text-muted-foreground mt-3">{language === "hindi" ? "स्रोत: हरियाणा सांख्यिकी सार 2023–24, जनगणना 2011 की जिला सीमाएँ। भिवानी के आँकड़े 2016 में चरखी दादरी के गठन से पहले के हैं और हिसार के आँकड़े 2025 में हांसी के गठन से पहले के हैं। ये वर्तमान 23 जिलों की रैंकिंग नहीं हैं।" : "Source: Haryana Statistical Abstract 2023–24, based on Census 2011 district boundaries. Bhiwani predates Charkhi Dadri (2016), and Hisar predates Hansi (2025). These are not rankings of the current 23 districts."}</p>

                    {/* Geological Structure */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Landmark className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? geologicalStructure.titleHindi : geologicalStructure.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? geologicalStructure.contentHindi : geologicalStructure.contentEnglish}</p>
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
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? physiography.contentHindi : physiography.contentEnglish}</p>
                    </div>

                    {/* Five natural topographic regions (as defined by Government of Haryana) */}
                    <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/30">
                                <Trees className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary">{language === "hindi" ? "हरियाणा के पाँच प्राकृतिक भाग" : "Five Natural Regions of Haryana"}</h2>
                        </div>
                        <div className="space-y-6">
                            {geoDivisions.map((division, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-5 border">
                                    <h3 className="text-xl font-semibold mb-3 text-primary">{language === "hindi" ? division.titleHindi : division.titleEnglish}</h3>
                                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? division.contentHindi : division.contentEnglish}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-5">
                            {language === "hindi" ? "स्रोत: " : "Sources: "}
                            <a href="https://www.haryana.gov.in/geography/" target="_blank" rel="noopener noreferrer" className="underline text-primary">Haryana Government Geography</a>{" · "}
                            <a href="https://ncrpb.nic.in/ncrconstituent.html" target="_blank" rel="noopener noreferrer" className="underline text-primary">NCR Planning Board</a>{" · "}
                            <a href="https://hansi.haryana.gov.in/" target="_blank" rel="noopener noreferrer" className="underline text-primary">Hansi District</a>
                        </p>
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
                            <div className="text-3xl font-bold text-primary mb-2">20वाँ</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "28 राज्यों में क्षेत्रफल रैंक" : "Area Rank Among 28 States"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">23</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "कुल जिले" : "Total Districts"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">14</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "NCR के अधिसूचित जिले" : "Notified Haryana Districts in NCR"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">1,467 मी</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सबसे ऊँची चोटी (करोह पीक)" : "Highest Peak (Karoh Peak)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">5 + 2</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "पड़ोसी राज्य + केंद्र शासित प्रदेश" : "Neighbouring States + UTs"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">5</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "प्राकृतिक भू-आकृतिक भाग" : "Natural Topographic Regions"}</p>
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
                            ? "यह पृष्ठ हरियाणा के भूगोल का स्रोत-आधारित परिचय देता है। इसमें राज्य की सीमाएँ, भूगर्भिक संरचना, पाँच प्राकृतिक भू-आकृतिक भाग और जनगणना 2011 की जिला सीमाओं पर आधारित ऐतिहासिक क्षेत्रफल तालिकाएँ शामिल हैं। HSSC CET और अन्य परीक्षाओं के लिए उपयोगी।"
                            : "This sourced overview covers Haryana’s extent, borders, geology and five natural topographic regions. District-area tables explicitly use Census 2011 boundaries, not today’s 23-district boundaries. Useful for HSSC CET and other examinations."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "मुख्य संदर्भ: हरियाणा सरकार का भूगोल पृष्ठ और जिला आधिकारिक स्रोत; पुराने/वर्तमान सीमांकन स्पष्ट किए गए हैं" : "Primary references: Government of Haryana geography and district sources; historical/current boundary scopes are distinguished"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}
