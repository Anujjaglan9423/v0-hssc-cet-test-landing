"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    History,
    ChevronDown,
    HelpCircle,
    Landmark,
    ArrowLeft,
    Castle,
    Church,
    GraduationCap,
    Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaArchaeologicalSitesPage() {
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
            questionHindi: "असीगढ़ किला कहाँ स्थित है और इसे किस नाम से भी जानते हैं?",
            questionEnglish: "Where is Asigarh Fort located and what is its other name?",
            answerHindi: "असीगढ़ किला हरियाणा के हांसी जिले में स्थित है। इसे पृथ्वीराज का किला भी कहा जाता है। इसका सटीक मूल निर्माता प्रमाणित नहीं है।",
            answerEnglish: "Asigarh Fort is located in Hansi district, Haryana. It is also known as Prithviraj-ka-Quila. Its original builder has not been conclusively established."
        },
        {
            questionHindi: "गुरुकुल झज्जर पुरातत्व संग्रहालय की स्थापना किसने की थी?",
            questionEnglish: "Who established the Gurukul Jhajjar archaeological museum?",
            answerHindi: "स्वामी ओमानंद सरस्वती के प्रयासों से 1959 में गुरुकुल झज्जर पुरातत्व संग्रहालय की शुरुआत हुई थी।",
            answerEnglish: "The Gurukul Jhajjar archaeological museum began in 1959 through the collecting efforts of Swami Omanand Saraswati."
        },
        {
            questionHindi: "हिसार का किला किसने बनवाया था?",
            questionEnglish: "Who built the Fort of Hisar?",
            answerHindi: "फिरोज शाह तुगलक ने 1354 ईस्वी में हिसार-ए-फिरोजा किले का निर्माण शुरू कराया। इसके चार ऐतिहासिक द्वार दिल्ली, नागौरी, तलाकी और मोरी थे।",
            answerEnglish: "Firoz Shah Tughlaq began constructing Hisar-e-Firoza Fort in 1354 CE. Its four historic gateways were Delhi, Nagauri, Talaqi and Mori."
        },
        {
            questionHindi: "पानीपत संग्रहालय का उद्देश्य क्या है?",
            questionEnglish: "What is the purpose of Panipat Museum?",
            answerHindi: "पानीपत संग्रहालय की स्थापना पानीपत की तीनों लड़ाइयों से उत्पन्न कला, इतिहास, शिल्प और पुरातत्व की व्यापक जानकारी प्रदान करने के लिए की गई थी।",
            answerEnglish: "The purpose of Panipat Museum is to provide comprehensive information on the art, history, crafts and archaeology arising out of the three Battles of Panipat."
        },
        {
            questionHindi: "राजा नाहर सिंह का किला कहाँ स्थित है?",
            questionEnglish: "Where is Raja Nahar Singh's fort located?",
            answerHindi: "राजा नाहर सिंह का किला फरीदाबाद जिले में स्थित है। इस किले की संरचना भरतपुर किले से मिलती जुलती है। आज यह किला नाहर सिंह पैलेस के नाम से जाना जाता है और एक हेरिटेज होटल है।",
            answerEnglish: "Raja Nahar Singh's fort is located in Faridabad district. The structure of this fort resembles that of Bharatpur Fort. Today it is known as Nahar Singh Palace and is a Heritage Hotel."
        },
        {
            questionHindi: "श्री कृष्ण संग्रहालय कहाँ स्थित है?",
            questionEnglish: "Where is Shri Krishna Museum located?",
            answerHindi: "श्री कृष्ण संग्रहालय कुरुक्षेत्र जिले में स्थित है, जिसकी स्थापना 1987 में हुई थी। यह तीन मंजिला संग्रहालय है जिसमें भगवान श्री कृष्ण से संबंधित कलाकृतियाँ संरक्षित हैं।",
            answerEnglish: "Shri Krishna Museum is located in Kurukshetra district, established in 1987. It is a three storied museum preserving artifacts related to Lord Shri Krishna."
        },
        {
            questionHindi: "चोर गुंबद कहाँ स्थित है और इसका निर्माण किसने करवाया?",
            questionEnglish: "Where is Chor Gumbad located and who built it?",
            answerHindi: "चोर गुंबद महेंद्रगढ़ जिले के नारनौल में स्थित है, जिसे अफगान सरदार जमाल खान ने अपने मकबरे के रूप में बनवाया था। यह दो मंजिला संरचना का आभास देता है।",
            answerEnglish: "Chor Gumbad is located in Narnaul, Mahendragarh district, built by Afghan Sardar Jamal Khan as his tomb. It gives an appearance of a double storeyed structure."
        },
        {
            questionHindi: "गुरु गोबिंद सिंह मार्शल आर्ट्स संग्रहालय कहाँ है?",
            questionEnglish: "Where is Guru Gobind Singh Martial Arts Museum located?",
            answerHindi: "गुरु गोबिंद सिंह युद्ध कला संग्रहालय यमुनानगर के कपाल मोचन (बिलासपुर) में स्थित है। इसकी आधारशिला 15 अगस्त 2000 को रखी गई थी।",
            answerEnglish: "Guru Gobind Singh Martial Art Museum is at Kapal Mochan (Bilaspur), Yamunanagar. Its foundation stone was laid on 15 August 2000."
        }
    ];

    // Archaeological Forts Data
    const archaeologicalForts = [
        {
            name: "Asigarh (Prithviraj) Fort, Hansi",
            nameHindi: "असीगढ़ (पृथ्वीराज) किला, हांसी",
            location: "Hansi, Haryana (formerly Hisar district)",
            locationHindi: "हांसी, हरियाणा (पूर्व में हिसार जिला)",
            period: "Medieval; origins are older and exact founding date disputed",
            periodHindi: "मध्यकाल; मूल स्थापना तिथि विवादित",
            builtBy: "Original founder not conclusively established",
            builtByHindi: "मूल निर्माता का निश्चित प्रमाण उपलब्ध नहीं",
            features: "Asigarh Fort is also known as Prithviraj-ka-Quila. Hansi became a separate district on 22 December 2025. The historic complex includes the remains of fortifications; Barsi Gate survives as a notable entrance built in the early 14th century.",
            featuresHindi: "असीगढ़ किले को पृथ्वीराज का किला भी कहा जाता है। 22 दिसंबर 2025 को हांसी अलग जिला बना। यहाँ किलेबंदी के अवशेष और 14वीं शताब्दी के प्रारंभ में निर्मित ऐतिहासिक बरसी द्वार जैसे स्मारक मौजूद हैं।"
        },
        {
            name: "Fort of Tohana",
            nameHindi: "तोहाना का किला",
            location: "Tohana, Fatehabad",
            locationHindi: "तोहाना, फतेहाबाद",
            period: "Historical; precise construction date unverified",
            periodHindi: "ऐतिहासिक; निर्माण तिथि सत्यापित नहीं",
            builtBy: "Attribution to Anangpal Tomar needs verification",
            builtByHindi: "अनंगपाल तोमर से जुड़ा निर्माण दावा अपुष्ट",
            features: "Historical fort remains associated with Tohana. Claims that Balban renovated it and Timur completely destroyed it in 1398 require stronger documentary evidence.",
            featuresHindi: "तोहाना से जुड़े ऐतिहासिक किले के अवशेष। बलबन द्वारा जीर्णोद्धार और 1398 में तैमूर द्वारा पूर्ण विनाश के दावों के लिए स्वतंत्र ऐतिहासिक प्रमाण आवश्यक हैं।"
        },
        {
            name: "Ramgarh Fort",
            nameHindi: "रामगढ़ का किला",
            location: "Ramgarh, Panchkula",
            locationHindi: "रामगढ़, पंचकूला",
            period: "Historical; exact age needs confirmation",
            periodHindi: "ऐतिहासिक; सटीक आयु की पुष्टि आवश्यक",
            builtBy: "Attribution to Chandel Rajput rulers requires confirmation",
            builtByHindi: "चंदेल राजपूत शासकों से संबंध की पुष्टि आवश्यक",
            features: "A historical fort complex at Ramgarh in Panchkula district. The claims that the gateway is a record 37 feet tall and that it is maintained as a government heritage hotel are not treated as verified facts.",
            featuresHindi: "पंचकूला जिले के रामगढ़ स्थित ऐतिहासिक किला परिसर। मुख्य द्वार की 37 फीट रिकॉर्ड ऊँचाई और सरकारी हेरिटेज होटल के संचालन संबंधी दावों की स्वतंत्र पुष्टि आवश्यक है।"
        },
        {
            name: "Taraori Fort",
            nameHindi: "तराओरी का किला",
            location: "Taraori, Karnal",
            locationHindi: "तराओरी, करनाल",
            period: "Medieval; precise fort foundation date unverified",
            periodHindi: "मध्यकाल; किले की सटीक स्थापना तिथि अपुष्ट",
            builtBy: "Prithviraj Chauhan (traditional attribution; unverified)",
            builtByHindi: "पृथ्वीराज चौहान (पारंपरिक मान्यता; अपुष्ट)",
            features: "Taraori (Tarain) near Karnal is historically associated with the Battles of Tarain of 1191 and 1192. This association does not establish the builder of the fort.",
            featuresHindi: "करनाल के निकट तराओरी (तराइन) 1191 और 1192 के तराइन युद्धों से जुड़ा है। इससे किले के निर्माता की निश्चित पहचान प्रमाणित नहीं होती।"
        },
        {
            name: "Fort of Hisar",
            nameHindi: "हिसार का किला",
            location: "Hisar",
            locationHindi: "हिसार",
            period: "Construction began in 1354 CE",
            periodHindi: "निर्माण 1354 ईस्वी में आरंभ",
            builtBy: "Feroz Shah Tughlaq",
            builtByHindi: "फिरोज शाह तुगलक",
            features: "Firoz Shah Tughlaq began building the fort of Hisar-e-Firoza in 1354. Its historic gateways included Delhi, Mori, Nagauri and Talaqi Gates. Gujri Mahal is part of the fortified complex; the association with Gujri is recorded in local tradition.",
            featuresHindi: "फिरोज शाह तुगलक ने 1354 ईस्वी में हिसार-ए-फिरोजा किले का निर्माण आरंभ कराया। इसके ऐतिहासिक द्वार दिल्ली, मोरी, नागौरी और तलाकी थे। गुजरी महल इस परिसर का भाग है; गुजरी से इसका संबंध स्थानीय परंपरा में दर्ज है।"
        },
        {
            name: "Palwal Fort (Matia Fort)",
            nameHindi: "पलवल का किला (मटिया किला)",
            location: "Palwal",
            locationHindi: "पलवल",
            period: "Historical; date unverified",
            periodHindi: "ऐतिहासिक; काल की पुष्टि नहीं",
            builtBy: "Attribution to Sher Shah Suri not independently verified",
            builtByHindi: "शेरशाह सूरी से जुड़ा निर्माण दावा अपुष्ट",
            features: "This local fort identification and the claim of a palace revealed by excavation have not been substantiated from a primary archaeology record. Do not use a definitive 16th-century date or builder for exam preparation without a citation.",
            featuresHindi: "इस स्थानीय किले की पहचान और उत्खनन में महल मिलने के दावे की पुष्टि प्राथमिक पुरातात्विक अभिलेख से नहीं हुई है। प्रमाण के बिना 16वीं शताब्दी और निर्माता को परीक्षा तथ्य के रूप में प्रस्तुत न करें।"
        },
        {
            name: "Fatehabad Historic Fort Area and Humayun’s Mosque",
            nameHindi: "फतेहाबाद का ऐतिहासिक किला क्षेत्र और हुमायूँ की मस्जिद",
            location: "Fatehabad",
            locationHindi: "फतेहाबाद",
            period: "14th–16th century historic structures",
            periodHindi: "14वीं–16वीं शताब्दी के ऐतिहासिक स्मारक",
            builtBy: "Firoz Shah Tughlaq (town); mosque dates to Humayun’s reign",
            builtByHindi: "फिरोज शाह तुगलक (नगर); मस्जिद हुमायूँ काल की",
            features: "Fatehabad has remains associated with Firoz Shah Tughlaq. Nearby Humayun’s Mosque is a separate 16th-century monument; an Ashokan-period pillar was re-erected by Firoz Shah. The mosque and pillar should not be described as a single fort.",
            featuresHindi: "फतेहाबाद में फिरोज शाह तुगलक से जुड़े ऐतिहासिक अवशेष हैं। पास की हुमायूँ की मस्जिद 16वीं शताब्दी का अलग स्मारक है; अशोक कालीन स्तंभ को फिरोज शाह ने पुनः स्थापित कराया था। मस्जिद और स्तंभ को एक ही किला नहीं समझना चाहिए।"
        },
        {
            name: "Loharu Fort",
            nameHindi: "लोहारू का किला",
            location: "Loharu, Bhiwani",
            locationHindi: "लोहारू, भिवानी",
            period: "1570 AD",
            periodHindi: "1570 ईस्वी",
            builtBy: "Thakur Arjun Singh (original mud fort); later rebuilt under Nawab Ahmad Bakhsh Khan",
            builtByHindi: "ठाकुर अर्जुन सिंह (मूल कच्चा किला); बाद में नवाब अहमद बख्श खान के काल में पुनर्निर्माण",
            features: "The earliest mud fort was built in 1570 by Thakur Arjun Singh. The site was substantially rebuilt in the early 19th century under Nawab Ahmad Bakhsh Khan. Loharu Fort is a state-protected monument.",
            featuresHindi: "मूल कच्चा किला 1570 में ठाकुर अर्जुन सिंह ने बनवाया था। 19वीं शताब्दी के आरंभ में नवाब अहमद बख्श खान के शासन में इसका व्यापक पुनर्निर्माण हुआ। लोहारू किला राज्य-संरक्षित स्मारक है।"
        },
        {
            name: "Fort of Taoru",
            nameHindi: "तावड़ू का किला",
            location: "Taoru, Nuh",
            locationHindi: "तावड़ू, नूंह",
            period: "Historic; date not conclusively verified",
            periodHindi: "ऐतिहासिक; तिथि की पुष्टि नहीं",
            builtBy: "Builder not independently verified",
            builtByHindi: "मूल निर्माता की पुष्टि नहीं",
            features: "Historic structures are recorded in the Tauru area of Nuh district. The attribution of this fort to Raja Nahar Singh and the present use as a police station need independent confirmation.",
            featuresHindi: "नूंह जिले के तावड़ू क्षेत्र में ऐतिहासिक संरचनाओं का उल्लेख मिलता है। इस किले को राजा नाहर सिंह से जोड़ने तथा इसके वर्तमान पुलिस थाने के रूप में उपयोग की स्वतंत्र पुष्टि आवश्यक है।"
        },
        {
            name: "Historic Farrukhnagar and Shish Mahal",
            nameHindi: "ऐतिहासिक फर्रुखनगर और शीश महल",
            location: "Farrukhnagar, Gurugram",
            locationHindi: "फर्रुखनगर, गुरुग्राम",
            period: "18th century; Shish Mahal built in 1733 CE",
            periodHindi: "18वीं शताब्दी; शीश महल का निर्माण 1733 ईस्वी",
            builtBy: "Faujdar Khan (Shish Mahal)",
            builtByHindi: "फौजदार खान (शीश महल)",
            features: "Farrukhnagar is known for its historic fortifications and Shish Mahal. Haryana Archaeology identifies Shish Mahal as the residential palace of Faujdar Khan, built in 1733. The palace should not be confused with a separately established 1732 fort.",
            featuresHindi: "फर्रुखनगर ऐतिहासिक किलेबंदी और शीश महल के लिए प्रसिद्ध है। हरियाणा पुरातत्व विभाग के अनुसार, फौजदार खान का आवासीय शीश महल 1733 में बना। इसे 1732 में स्थापित किसी अलग किले के साथ नहीं मिलाना चाहिए।"
        },
        {
            name: "Fort of Madhogarh",
            nameHindi: "मधोगढ़ का किला",
            location: "Madhogarh, Mahendragarh",
            locationHindi: "मधोगढ़, महेंद्रगढ़",
            period: "18th-century historical association; exact date unverified",
            periodHindi: "18वीं शताब्दी से ऐतिहासिक संबंध; तिथि अपुष्ट",
            builtBy: "Attribution to Sawai Madho Singh requires stronger documentation",
            builtByHindi: "सवाई माधो सिंह द्वारा निर्माण की पुष्टि के लिए अधिक प्रमाण आवश्यक",
            features: "A hill fort at Madhogarh in Mahendragarh district. The claim of a Maratha capture in 1755 is not presented as established without a specific historical source.",
            featuresHindi: "महेंद्रगढ़ जिले के माधोगढ़ में स्थित पहाड़ी किला। 1755 में मराठों के कब्जे का दावा विशिष्ट ऐतिहासिक स्रोत के बिना प्रमाणित तथ्य के रूप में नहीं दिया गया है।"
        },
        {
            name: "Historic Maham Fort Area",
            nameHindi: "महम का ऐतिहासिक किला क्षेत्र",
            location: "Maham, Rohtak",
            locationHindi: "महम, रोहतक",
            period: "Mughal-era association; precise fort date uncertain",
            periodHindi: "मुगलकालीन संबंध; किले की सटीक तिथि अनिश्चित",
            builtBy: "Not conclusively verified for the fort",
            builtByHindi: "किले के निर्माता का निश्चित प्रमाण नहीं",
            features: "Maham in Rohtak district has notable Mughal-period remains, including its historic baoli. The construction date 1656 and attribution to Saidu Kalal should not be assigned automatically to a fort without a specific source.",
            featuresHindi: "रोहतक जिले के महम में ऐतिहासिक बावड़ी सहित मुगलकालीन अवशेष हैं। 1656 की तिथि और सईदू कलाल का नाम किसी विशिष्ट स्रोत के बिना सीधे किले के निर्माण से नहीं जोड़ा जाना चाहिए।"
        },
        {
            name: "Bahadurgarh Fort",
            nameHindi: "बहादुरगढ़ का किला",
            location: "Bahadurgarh, Jhajjar",
            locationHindi: "बहादुरगढ़, झज्जर",
            period: "Historical; original date unverified",
            periodHindi: "ऐतिहासिक; मूल तिथि अपुष्ट",
            builtBy: "Attribution to Bahadur Khan requires verification",
            builtByHindi: "बहादुर खान से जुड़ा निर्माण दावा सत्यापनाधीन",
            features: "Bahadurgarh is historically associated with the Delhi-region political and military developments of the 18th and early 19th centuries. Specific construction and surrender details are not independently verified here.",
            featuresHindi: "बहादुरगढ़ 18वीं और 19वीं शताब्दी के आरंभ में दिल्ली क्षेत्र की राजनीतिक एवं सैन्य गतिविधियों से जुड़ा रहा। निर्माण तथा आत्मसमर्पण के विशिष्ट विवरणों की यहाँ स्वतंत्र पुष्टि नहीं हुई है।"
        },
        {
            name: "Fort of Kanod (Mahendragarh)",
            nameHindi: "कनोद का किला (महेंद्रगढ़)",
            location: "Mahendragarh",
            locationHindi: "महेंद्रगढ़",
            period: "Historic; foundation date unverified",
            periodHindi: "ऐतिहासिक; स्थापना तिथि अपुष्ट",
            builtBy: "Original founder not conclusively established",
            builtByHindi: "मूल निर्माता का निश्चित प्रमाण नहीं",
            features: "Kanod is the older name associated with Mahendragarh. The account of its renaming under Maharaja Narendra Singh of Patiala should be identified as historical context, not proof that Maratha rulers built the fort in 1755.",
            featuresHindi: "कनोद महेंद्रगढ़ का पुराना नाम है। पटियाला के महाराजा नरेंद्र सिंह के समय नामकरण की ऐतिहासिक पृष्ठभूमि को 1755 में मराठों द्वारा किले के निर्माण का प्रमाण नहीं माना जाना चाहिए।"
        },
        {
            name: "Fort of Jind",
            nameHindi: "जींद का किला",
            location: "Jind",
            locationHindi: "जींद",
            period: "1775 AD",
            periodHindi: "1775 ईस्वी",
            builtBy: "Gajpat Singh",
            builtByHindi: "गजपत सिंह",
            features: "The historic fort is associated with the former Jind princely state and Raja Gajpat Singh. The claim that it contains the tombs of Maharaja Ranjit Singh and Maharaja Kharak Singh is incorrect and has been removed.",
            featuresHindi: "ऐतिहासिक जींद किला पूर्व जींद रियासत और राजा गजपत सिंह से जुड़ा है। इसमें महाराजा रणजीत सिंह और महाराजा खड़क सिंह की समाधियाँ होने का गलत दावा हटाया गया है।"
        },
        {
            name: "Fort of Georgegarh (Jahazgarh)",
            nameHindi: "जॉर्जगढ़ (जहाजगढ़) का किला",
            location: "Jahazgarh, Jhajjar",
            locationHindi: "जहाजगढ़, झज्जर",
            period: "18th Century",
            periodHindi: "18वीं शताब्दी",
            builtBy: "George Thomas",
            builtByHindi: "जॉर्ज थॉमस",
            features: "Built by George Thomas, a resident of Ireland. This ruined fort reminds us of the colonial period.",
            featuresHindi: "आयरलैंड के निवासी जॉर्ज थॉमस द्वारा निर्मित। यह खंडहर किला हमें औपनिवेशिक काल की याद दिलाता है।"
        },
        {
            name: "Sohna Fort",
            nameHindi: "सोहना का किला",
            location: "Sohna, Gurugram",
            locationHindi: "सोहना, गुरुग्राम",
            period: "18th Century",
            periodHindi: "18वीं शताब्दी",
            builtBy: "Attribution to Sohan Singh requires verification",
            builtByHindi: "सोहन सिंह द्वारा निर्माण की पुष्टि आवश्यक",
            features: "The Haryana Archaeology Department lists Sohna Fort in Gurugram district as a state-protected site. A precise founder and construction date should not be stated without documentary verification.",
            featuresHindi: "हरियाणा पुरातत्व विभाग ने गुरुग्राम जिले के सोहना किले को राज्य-संरक्षित स्थल के रूप में सूचीबद्ध किया है। प्रामाणिक दस्तावेज के बिना निर्माता या सटीक निर्माण तिथि निश्चित रूप से नहीं बतानी चाहिए।"
        },
        {
            name: "Fort of Raja Nahar Singh",
            nameHindi: "राजा नाहर सिंह का किला",
            location: "Ballabhgarh, Faridabad",
            locationHindi: "बल्लभगढ़, फरीदाबाद",
            period: "18th–19th centuries; earliest palace sections after 1739",
            periodHindi: "18वीं–19वीं शताब्दी; प्रारंभिक भाग 1739 के बाद",
            builtBy: "Raja Balram Singh (completed by Raja Nahar Singh)",
            builtByHindi: "राजा बलराम सिंह (राजा नाहर सिंह द्वारा पूरा किया गया)",
            features: "Raja Nahar Singh Palace is at Ballabhgarh, Faridabad. Haryana Tourism states that its earliest sections were built by Rao Balram, who came to power in 1739. It is known for its historic palace architecture and heritage tourism use.",
            featuresHindi: "राजा नाहर सिंह महल बल्लभगढ़, फरीदाबाद में स्थित है। हरियाणा पर्यटन के अनुसार, इसके सबसे पुराने हिस्से राव बलराम ने बनवाए, जो 1739 में सत्ता में आए थे। यह ऐतिहासिक महल की वास्तुकला और विरासत पर्यटन के लिए प्रसिद्ध है।"
        },
        {
            name: "Fort of Kunjpura",
            nameHindi: "कुंजपुरा का किला",
            location: "Kunjpura, Karnal",
            locationHindi: "कुंजपुरा, करनाल",
            period: "Historical; precise date not verified",
            periodHindi: "ऐतिहासिक; सटीक तिथि अपुष्ट",
            builtBy: "Unknown",
            builtByHindi: "अज्ञात",
            features: "Kunjpura in Karnal district is associated with a historic fort and with Sainik School Kunjpura. The exact relationship between surviving fort structures and the present school campus should be checked against heritage records.",
            featuresHindi: "करनाल जिले का कुंजपुरा ऐतिहासिक किले और सैनिक स्कूल कुंजपुरा से जुड़ा है। बचे हुए किले के ढाँचों और वर्तमान विद्यालय परिसर के संबंध की पुष्टि विरासत अभिलेखों से करनी चाहिए।"
        }
    ];

    // Other Archaeological Sites
    const otherArchaeologicalSites = [
        {
            name: "Chaneti Buddhist Stupa",
            nameHindi: "चनेटी बौद्ध स्तूप",
            location: "Chaneti, Yamunanagar",
            locationHindi: "चनेटी, यमुनानगर",
            period: "Approximately 3rd century BCE (Mauryan period)",
            periodHindi: "लगभग तीसरी शताब्दी ईसा पूर्व (मौर्यकाल)",
            features: "The Buddhist brick stupa at Chaneti near Sugh, Yamunanagar is associated with the Mauryan-period Buddhist landscape. Its concentric circular brick courses create a hemispherical form; a link to Xuanzang’s account is a historical interpretation.",
            featuresHindi: "यमुनानगर में सुघ के निकट चनेटी का ईंटों से बना बौद्ध स्तूप मौर्यकालीन बौद्ध परंपरा से जुड़ा है। इसकी संकेंद्रित ईंट-परतों से अर्धगोलाकार आकृति बनती है। ह्वेनसांग के वर्णन से इसका संबंध ऐतिहासिक व्याख्या है।"
        },
        {
            name: "Chor Gumbad",
            nameHindi: "चोर गुंबद",
            location: "Narnaul, Mahendragarh",
            locationHindi: "नारनौल, महेंद्रगढ़",
            period: "Medieval Period",
            periodHindi: "मध्यकाल",
            features: "Chor Gumbad is a square, single-chamber tomb with four corner minarets standing on a rocky rise in Narnaul. It is traditionally linked to Jamal Khan; its two-storey appearance does not mean it has two functional storeys.",
            featuresHindi: "चोर गुंबद नारनौल में चट्टानी ऊँचाई पर बना वर्गाकार, एक-कक्षीय मकबरा है, जिसके चार कोनों पर मीनारें हैं। इसे परंपरागत रूप से जमाल खान से जोड़ा जाता है; दो-मंजिला दिखने का अर्थ वास्तविक दो कार्यशील मंजिलें होना नहीं है।"
        },
        {
            name: "War Memorial in Ludesar Village",
            nameHindi: "लूदेसर गाँव में युद्ध स्मारक",
            location: "Ludesar, Sirsa",
            locationHindi: "लूदेसर, सिरसा",
            period: "Modern",
            periodHindi: "आधुनिक",
            features: "Located about 28 km from Sirsa town. Presents the immortal saga of martyrs who sacrificed their life for the country.",
            featuresHindi: "सिरसा शहर से लगभग 28 किमी दूर स्थित। देश के लिए अपने प्राणों की आहुति देने वाले शहीदों की अमर गाथा प्रस्तुत करता है।"
        },
        {
            name: "Jal Mahal",
            nameHindi: "जल महल",
            location: "Narnaul, Mahendragarh",
            locationHindi: "नारनौल, महेंद्रगढ़",
            period: "1591 AD",
            periodHindi: "1591 ईस्वी",
            features: "Built by Jagirdar Kuli Khan. Situated in the middle of a huge lake (Khan Sarovar). An arched bridge has been built to go inside the main building.",
            featuresHindi: "जागीरदार कुली खान द्वारा निर्मित। एक विशाल झील (खान सरोवर) के मध्य में स्थित। मुख्य भवन के अंदर जाने के लिए एक धनुषाकार पुल बनाया गया है।"
        },
        {
            name: "Tosham's Baradari (Prithviraj Ki Kutcheri)",
            nameHindi: "तोशाम की बारादरी (पृथ्वीराज की कचहरी)",
            location: "Tosham, Bhiwani",
            locationHindi: "तोशाम, भिवानी",
            period: "Historical structure; exact date not independently established",
            periodHindi: "ऐतिहासिक संरचना; सटीक तिथि स्वतंत्र रूप से प्रमाणित नहीं",
            features: "Tosham’s Baradari, also called Prithviraj ki Kachheri, is listed among Haryana’s state heritage sites. Its traditional name is not proof of construction by Prithviraj Chauhan.",
            featuresHindi: "तोशाम की बारादरी, जिसे पृथ्वीराज की कचहरी भी कहते हैं, हरियाणा के राज्य विरासत स्थलों की सूची में शामिल है। पारंपरिक नाम से पृथ्वीराज चौहान द्वारा इसका निर्माण प्रमाणित नहीं होता।"
        },
        {
            name: "Chhatta Rai Bal Mukund Das",
            nameHindi: "छत्ता राय बाल मुकुंद दास",
            location: "Narnaul, Mahendragarh",
            locationHindi: "नारनौल, महेंद्रगढ़",
            period: "Mughal Period (Shah Jahan)",
            periodHindi: "मुगल काल (शाहजहाँ)",
            features: "A historic Narnaul building associated with Rai Bal Mukund Das, who served as diwan during Shah Jahan’s reign. Claims that Akbar-era Birbal visited this later structure, or that tunnels connected it to distant cities, are unsupported.",
            featuresHindi: "नारनौल का ऐतिहासिक भवन राय बाल मुकुंद दास से जुड़ा है, जो शाहजहाँ के शासनकाल में दीवान थे। अकबरकालीन बीरबल के इस बाद के भवन में आने तथा दूरस्थ नगरों तक सुरंगों के दावों के विश्वसनीय प्रमाण नहीं मिले।"
        },
        {
            name: "Salarganj Gate",
            nameHindi: "सलारगंज गेट",
            location: "Panipat",
            locationHindi: "पानीपत",
            period: "British Period",
            periodHindi: "ब्रिटिश काल",
            features: "Constructed during the British period. Consists of two arched openings at both ends of the passage. Served as the entrance to the town of Panipat.",
            featuresHindi: "ब्रिटिश काल के दौरान निर्मित। मार्ग के दोनों छोर पर दो धनुषाकार द्वार हैं। पानीपत शहर के प्रवेश द्वार के रूप में कार्य करता था।"
        },
        {
            name: "Maharani Kishori Shahi Mahal and Barakhamba Chhatri",
            nameHindi: "महारानी किशोरी शाही महल और बारहखंभा छतरी",
            location: "Hodal, Palwal district",
            locationHindi: "होडल, पलवल जिला",
            period: "1754-1761 AD",
            periodHindi: "1754-1761 ईस्वी",
            features: "The Maharani Kishori Shahi Mahal complex at Hodal is in present-day Palwal district, not Faridabad. It is associated with Maharani Kishori and the Bharatpur Jat royal family; construction details should be tied to an identified source.",
            featuresHindi: "होडल का महारानी किशोरी शाही महल परिसर वर्तमान पलवल जिले में है, फरीदाबाद में नहीं। यह महारानी किशोरी और भरतपुर के जाट राजपरिवार से जुड़ा है; निर्माण के विशिष्ट विवरणों के लिए प्रमाणित स्रोत जरूरी है।"
        },
        {
            name: "Birbal Ka Rang Mahal",
            nameHindi: "बीरबल का रंग महल",
            location: "Buria, Yamunanagar",
            locationHindi: "बुड़िया, यमुनानगर",
            period: "Historical; exact date disputed",
            periodHindi: "ऐतिहासिक; सटीक तिथि विवादित",
            features: "Buria has a historic structure popularly known as Birbal ka Rang Mahal. The attribution of its construction or residence to Akbar’s courtier Birbal is traditional and should not be presented as a verified archaeological finding.",
            featuresHindi: "बुड़िया में बीरबल का रंग महल नाम से प्रसिद्ध ऐतिहासिक संरचना है। इसका निर्माण या निवास अकबर के दरबारी बीरबल से जोड़ना स्थानीय परंपरा है, सत्यापित पुरातात्विक निष्कर्ष नहीं।"
        }
    ];

    // Museums Data
    const museums = [
        {
            name: "Archaeological Museum (Gurukul Jhajjar Museum)",
            nameHindi: "पुरातत्व संग्रहालय (गुरुकुल झज्जर संग्रहालय)",
            location: "Jhajjar",
            locationHindi: "झज्जर",
            year: "1959",
            yearHindi: "1959",
            establishedBy: "Swami Omanand Saraswati",
            establishedByHindi: "स्वामी ओमानंद सरस्वती",
            features: "The Gurukul Jhajjar archaeological museum grew from the collection assembled by Swami Omanand Saraswati in 1959. Haryana Tourism confirms its origins; “the oldest and largest museum in Haryana” is not an independently established statewide ranking.",
            featuresHindi: "गुरुकुल झज्जर पुरातत्व संग्रहालय की शुरुआत 1959 में स्वामी ओमानंद सरस्वती के संग्रह से हुई। हरियाणा पर्यटन इसकी स्थापना का उल्लेख करता है; इसे हरियाणा का निर्विवाद सबसे पुराना और सबसे बड़ा संग्रहालय कहना अलग रैंकिंग-स्रोत के बिना उचित नहीं है।"
        },
        {
            name: "Home of Folk Arts Museum",
            nameHindi: "होम ऑफ फोक आर्ट्स संग्रहालय",
            location: "Gurugram",
            locationHindi: "गुरुग्राम",
            year: "1984",
            yearHindi: "1984",
            establishedBy: "KC Aryan",
            establishedByHindi: "केसी आर्यन",
            features: "Based on architecture. Contains ancient Indian sculptures, various types of utensils, items made of metal and glass. Folk art, tribal and obsolete items have been kept.",
            featuresHindi: "वास्तुकला पर आधारित। इसमें प्राचीन भारतीय मूर्तियाँ, विभिन्न प्रकार के बर्तन, धातु और कांच से बनी वस्तुएँ हैं। लोक कला, आदिवासी और अप्रचलित वस्तुएँ रखी गई हैं।"
        },
        {
            name: "Shri Krishna Museum",
            nameHindi: "श्री कृष्ण संग्रहालय",
            location: "Kurukshetra",
            locationHindi: "कुरुक्षेत्र",
            year: "1987",
            yearHindi: "1987",
            establishedBy: "Kurukshetra Development Board",
            establishedByHindi: "कुरुक्षेत्र विकास बोर्ड",
            features: "Established in 1987 by the Kurukshetra Development Board and dedicated to the life and cultural depictions of Shri Krishna. Collections include sculptures, paintings, manuscripts and regional artistic representations. It moved to its present building in 1991.",
            featuresHindi: "कुरुक्षेत्र विकास बोर्ड ने 1987 में श्रीकृष्ण के जीवन एवं सांस्कृतिक चित्रण को समर्पित संग्रहालय स्थापित किया। इसमें मूर्तियाँ, चित्र, पांडुलिपियाँ और क्षेत्रीय कला के उदाहरण हैं। 1991 में इसे वर्तमान भवन में स्थानांतरित किया गया।"
        },
        {
            name: "Kurukshetra Panorama & Science Centre",
            nameHindi: "कुरुक्षेत्र पैनोरमा एवं विज्ञान केंद्र",
            location: "Kurukshetra",
            locationHindi: "कुरुक्षेत्र",
            year: "6 March 2001 (inauguration)",
            yearHindi: "6 मार्च 2001 (उद्घाटन)",
            establishedBy: "National Council of Science Museums (NCSM), Ministry of Culture, Government of India",
            establishedByHindi: "राष्ट्रीय विज्ञान संग्रहालय परिषद (NCSM), भारत सरकार का संस्कृति मंत्रालय",
            features: "Opened on 6 March 2001 by Prime Minister Atal Bihari Vajpayee. A unit of NCSM, the centre combines a Mahabharata-themed panoramic display with interactive science exhibits and educational activities.",
            featuresHindi: "6 मार्च 2001 को प्रधानमंत्री अटल बिहारी वाजपेयी ने इसका उद्घाटन किया। यह राष्ट्रीय विज्ञान संग्रहालय परिषद की इकाई है, जहाँ महाभारत-विषयक पैनोरमा, विज्ञान की इंटरैक्टिव प्रदर्शनियाँ और शैक्षणिक गतिविधियाँ होती हैं।"
        },
        {
            name: "Panipat Museum",
            nameHindi: "पानीपत संग्रहालय",
            location: "Binjhol, Panipat",
            locationHindi: "बिंझौल, पानीपत",
            year: "Year not independently verified",
            yearHindi: "वर्ष की स्वतंत्र पुष्टि नहीं",
            establishedBy: "Haryana Directorate of Archaeology & Museums (museum listing)",
            establishedByHindi: "हरियाणा पुरातत्व एवं संग्रहालय निदेशालय (संग्रहालय सूची)",
            features: "The Panipat Museum at Binjhol displays arms, armour, pottery, sculptures, inscriptions, archival objects and reproductions linked with the history of the Battles of Panipat. The museum’s exact founding year should not be inferred from the display collection.",
            featuresHindi: "बिंझौल स्थित पानीपत संग्रहालय में युद्धों के इतिहास से जुड़े शस्त्र, कवच, मृद्भांड, मूर्तियाँ, अभिलेख, ऐतिहासिक वस्तुएँ और प्रतिकृतियाँ प्रदर्शित हैं। संग्रहालय की स्थापना का वर्ष संग्रह के आधार पर अनुमानित नहीं करना चाहिए।"
        },
        {
            name: "Lila Dhar Dukhi Smarak Sarasvati Museum",
            nameHindi: "लीला धर दुखी स्मारक सरस्वती संग्रहालय",
            location: "Sirsa",
            locationHindi: "सिरसा",
            year: "2001",
            yearHindi: "2001",
            establishedBy: "Bal Bhawan, Sirsa",
            establishedByHindi: "बाल भवन, सिरसा",
            features: "Dedicated to the general public on 26th April, 2001 by the Divisional Commissioner of Hisar, Umesh Nanda.",
            featuresHindi: "26 अप्रैल, 2001 को हिसार के संभागीय आयुक्त उमेश नंदा द्वारा आम जनता को समर्पित।"
        },
        {
            name: "Dharohar Museum",
            nameHindi: "धरोहर संग्रहालय",
            location: "Kurukshetra University, Kurukshetra",
            locationHindi: "कुरुक्षेत्र विश्वविद्यालय, कुरुक्षेत्र",
            year: "2006",
            yearHindi: "2006",
            establishedBy: "Kurukshetra University",
            establishedByHindi: "कुरुक्षेत्र विश्वविद्यालय",
            features: "Contains various artifacts related to Haryanvi culture. Depicts contribution of Haryana people in the first freedom struggle of 1857 AD.",
            featuresHindi: "हरियाणवी संस्कृति से संबंधित विभिन्न कलाकृतियाँ शामिल हैं। 1857 ईस्वी के प्रथम स्वतंत्रता संग्राम में हरियाणा के लोगों के योगदान को दर्शाता है।"
        },
        {
            name: "Jayanti Archaeological Museum",
            nameHindi: "जयंती पुरातत्व संग्रहालय",
            location: "Jind",
            locationHindi: "जींद",
            year: "2007",
            yearHindi: "2007",
            establishedBy: "Local people with government support",
            establishedByHindi: "स्थानीय लोगों और सरकार के सहयोग से",
            features: "Collection of ancient relics. Inaugurated on 28th July, 2007 by Governor of Haryana, Dr. AR Kidwai.",
            featuresHindi: "प्राचीन अवशेषों का संग्रह। 28 जुलाई, 2007 को हरियाणा के राज्यपाल डॉ. एआर किदवई द्वारा उद्घाटन किया गया।"
        },
        {
            name: "Sir Chhotu Ram Memorial Museum",
            nameHindi: "सर छोटू राम स्मारक संग्रहालय",
            location: "Garhi Sampla, Rohtak",
            locationHindi: "गढ़ी सांपला, रोहतक",
            year: "Handed to State Archaeology Department on 6 September 2013",
            yearHindi: "6 सितंबर 2013 को राज्य पुरातत्व विभाग को हस्तांतरित",
            establishedBy: "Government of Haryana",
            establishedByHindi: "हरियाणा सरकार",
            features: "Museum at Garhi Sampla, Rohtak, displaying personal belongings, documents and photographs related to farmer leader Sir Chhotu Ram. Haryana Archaeology records its handover to the department on 6 September 2013. This is not necessarily its original foundation date.",
            featuresHindi: "गढ़ी सांपला, रोहतक का संग्रहालय किसान नेता सर छोटू राम के निजी सामान, दस्तावेज और चित्र प्रदर्शित करता है। हरियाणा पुरातत्व विभाग के अनुसार 6 सितंबर 2013 को संग्रहालय उसे हस्तांतरित हुआ; यह मूल स्थापना तिथि होना आवश्यक नहीं है।"
        },
        {
            name: "Archaeological Museum Thanesar",
            nameHindi: "पुरातत्व संग्रहालय थानेसर",
            location: "Thanesar, Kurukshetra",
            locationHindi: "थानेसर, कुरुक्षेत्र",
            year: "Establishment year not independently verified",
            yearHindi: "स्थापना वर्ष की स्वतंत्र पुष्टि नहीं",
            establishedBy: "Archaeological Survey of India (ASI)",
            establishedByHindi: "भारतीय पुरातत्व सर्वेक्षण (ASI)",
            features: "An archaeological museum associated with the Sheikh Chilli (Sheikh Chaheli) tomb complex at Thanesar, Kurukshetra. The complex is associated with Mughal-period archaeology and displays regional historical material.",
            featuresHindi: "थानेसर, कुरुक्षेत्र में शेख चिल्ली (शेख चहेली) के मकबरा परिसर से जुड़ा पुरातत्व संग्रहालय। यह मुगलकालीन पुरातत्व और क्षेत्रीय ऐतिहासिक सामग्री से संबंधित है।"
        },
        {
            name: "Manuscript Museum",
            nameHindi: "पांडुलिपि संग्रहालय",
            location: "Kurukshetra University, Kurukshetra",
            locationHindi: "कुरुक्षेत्र विश्वविद्यालय, कुरुक्षेत्र",
            year: "Establishment year not verified",
            yearHindi: "स्थापना वर्ष की पुष्टि नहीं",
            establishedBy: "Pandit Sthanu Dutt Sharma",
            establishedByHindi: "पंडित स्थाणु दत्त शर्मा",
            features: "A manuscript-related collection is associated with Kurukshetra University. Exact institutional status, the number of Sharada-script manuscripts and attribution to a particular founder require primary university documentation.",
            featuresHindi: "कुरुक्षेत्र विश्वविद्यालय से पांडुलिपि-संबंधी संग्रह जुड़ा बताया जाता है। इसका संस्थागत स्वरूप, शारदा लिपि के ग्रंथों की संख्या और विशिष्ट संस्थापक का दावा विश्वविद्यालय के प्राथमिक अभिलेख से सत्यापित करना चाहिए।"
        },
        {
            name: "Gulzarilal Nanda Museum",
            nameHindi: "गुलजारीलाल नंदा संग्रहालय",
            location: "Sadachar Sthal, Kurukshetra",
            locationHindi: "सदाचार स्थल, कुरुक्षेत्र",
            year: "Establishment year not independently verified",
            yearHindi: "स्थापना वर्ष की स्वतंत्र पुष्टि नहीं",
            establishedBy: "Institutional founder not conclusively verified",
            establishedByHindi: "संस्थापक संस्था की पुष्टि नहीं",
            features: "A museum or memorial collection associated with Gulzarilal Nanda, former acting Prime Minister of India and Bharat Ratna recipient, at Kurukshetra. “First personality museum in Haryana” needs separate documentary proof.",
            featuresHindi: "कुरुक्षेत्र में भारत रत्न और भारत के पूर्व कार्यवाहक प्रधानमंत्री गुलजारीलाल नंदा से संबंधित संग्रहालय अथवा स्मृति-संग्रह। “हरियाणा का पहला व्यक्तित्व संग्रहालय” होने के लिए अलग प्रामाणिक स्रोत आवश्यक है।"
        },

        {
            name: "Guru Gobind Singh Martial Art Museum",
            nameHindi: "गुरु गोबिंद सिंह युद्ध कला संग्रहालय",
            location: "Kapal Mochan, Bilaspur, Yamunanagar, Haryana",
            locationHindi: "कपाल मोचन, बिलासपुर, यमुनानगर, हरियाणा",
            year: "2000 (foundation stone)",
            yearHindi: "2000 (शिलान्यास)",
            establishedBy: "Government of Haryana",
            establishedByHindi: "हरियाणा सरकार",
            features: "The Guru Gobind Singh Martial Art Museum is located near the sacred Kapal Mochan pilgrimage site in Yamunanagar district, Haryana. The site is traditionally associated with visits by Guru Nanak Dev Ji and Guru Gobind Singh Ji. The museum's foundation stone was laid on 15 August 2000. It commemorates Sikh martial heritage and the legacy of Guru Gobind Singh Ji. The museum was handed over to the Haryana State Archaeology Department in June 2011.",
            featuresHindi: "गुरु गोबिंद सिंह युद्ध कला संग्रहालय हरियाणा के यमुनानगर जिले में पवित्र कपाल मोचन तीर्थस्थल के निकट स्थित है। मान्यता के अनुसार, इस स्थान पर गुरु नानक देव जी और गुरु गोबिंद सिंह जी पधारे थे। संग्रहालय की आधारशिला 15 अगस्त 2000 को रखी गई थी। यह संग्रहालय सिख युद्ध-कला की विरासत और गुरु गोबिंद सिंह जी के ऐतिहासिक योगदान की स्मृति से जुड़ा है। जून 2011 में संग्रहालय को हरियाणा राज्य पुरातत्व विभाग को सौंप दिया गया था।"
        },

        {
            name: "Guru Tegh Bahadur Memorial Museum",
            nameHindi: "गुरु तेग बहादुर स्मारक संग्रहालय",
            location: "Badkhalsa, Sonipat",
            locationHindi: "बादखालसा, सोनीपत",
            year: "Establishment year not independently verified",
            yearHindi: "स्थापना वर्ष की स्वतंत्र पुष्टि नहीं",
            establishedBy: "Government of Haryana",
            establishedByHindi: "हरियाणा सरकार",
            features: "A memorial site at Bad Khalsa, Sonipat, associated with Guru Tegh Bahadur, the ninth Sikh Guru. The official designation and founding date of any museum facility at this site require confirmation.",
            featuresHindi: "सोनीपत के बड़खालसा में नौवें सिख गुरु गुरु तेग बहादुर जी से जुड़ा स्मृति स्थल है। यहाँ संग्रहालय की आधिकारिक स्थिति और स्थापना वर्ष की अलग पुष्टि आवश्यक है।"
        },
        {
            name: "Jahaj Kothi Zonal Museum",
            nameHindi: "जहाज कोठी जोनल संग्रहालय",
            location: "Hisar",
            locationHindi: "हिसार",
            year: "Late 18th century (building date disputed)",
            yearHindi: "18वीं शताब्दी का उत्तरार्ध (तिथि विवादित)",
            establishedBy: "George Thomas (historic residence); Haryana Archaeology manages the museum",
            establishedByHindi: "जॉर्ज थॉमस (ऐतिहासिक निवास); संग्रहालय का प्रबंधन हरियाणा पुरातत्व विभाग",
            features: "Jahaj Kothi in Hisar served as a residence of George Thomas and later became a zonal museum. Haryana Archaeology lists 1766, but that date conflicts with Thomas’s lifetime and arrival in India; historical accounts point to the 1790s, often 1796. The exact construction date requires reconciliation.",
            featuresHindi: "हिसार की जहाज कोठी जॉर्ज थॉमस के निवास के रूप में उपयोग हुई और बाद में क्षेत्रीय संग्रहालय बनी। हरियाणा पुरातत्व विभाग 1766 लिखता है, लेकिन यह तिथि थॉमस के जीवनकाल और भारत आगमन के समय से मेल नहीं खाती। ऐतिहासिक विवरण 1790 के दशक, प्रायः 1796, का संकेत देते हैं। सटीक निर्माण तिथि का मिलान आवश्यक है।"
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
                    {/* Language Toggle Button */}
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
                        <Castle className="w-4 h-4" />
                        {language === "hindi" ? "हरियाणा की पुरातत्व एवं संग्रहालय जानकारी" : "Haryana Archaeology & Museum Study Guide"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा के" : "Archaeological"} <span className="text-amber-600 dark:text-amber-400">{language === "hindi" ? "पुरातात्विक स्थल और संग्रहालय" : "Sites and Museums of Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के प्रमुख किलों, स्मारकों और संग्रहालयों का स्रोत-आधारित विवरण — असीगढ़, राजा नाहर सिंह महल, श्रीकृष्ण संग्रहालय और अन्य धरोहरें"
                            : "A source-based guide to Haryana’s major forts, monuments and museums, including Asigarh, Raja Nahar Singh Palace, Shri Krishna Museum and other heritage sites"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Castle className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? `${archaeologicalForts.length} किले/स्थल` : `${archaeologicalForts.length} Fort/heritage entries`}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            {/* <Museum className="w-4 h-4 text-amber-600" /> */}
                            <span>{language === "hindi" ? `${museums.length} संग्रहालय प्रविष्टियाँ` : `${museums.length} Museum entries`}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Church className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "पुरातात्विक स्थल" : "Archaeological Sites"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <GraduationCap className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "HSSC परीक्षा उपयोगी" : "HSSC Exam Useful"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Introduction Section */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-500/20">
                                <History className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "परिचय" : "Introduction"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "हरियाणा के किले, प्राचीन अवशेष, स्मारक और संग्रहालय राज्य की ऐतिहासिक तथा सांस्कृतिक विरासत को समझने के प्रमुख स्रोत हैं। किले सुरक्षा एवं शासन से जुड़े थे, जबकि संग्रहालय पुरातात्विक वस्तुओं, अभिलेखों और कला सामग्री का संरक्षण करते हैं। इस पृष्ठ में प्रमाणित इतिहास और स्थानीय परंपराओं को अलग-अलग समझाया गया है।"
                                : "The forts, ancient sites, monuments and museums of Haryana provide important evidence of the state’s history and cultural heritage. Forts served defensive and administrative functions, while museums preserve archaeological finds, inscriptions, art and other records. This guide distinguishes documented history from traditional attributions that require further verification."}
                        </p>
                    </div>

                    {/* Archaeological Forts Section */}
                    <div className="bg-amber-500/5 rounded-2xl p-6 md:p-8 border-2 border-amber-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-500/30">
                                <Castle className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-600">{language === "hindi" ? "पुरातात्विक किले" : "Archaeological Forts of Haryana"}</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            {language === "hindi"
                                ? "प्राचीन काल में, राजाओं द्वारा बनवाए गए किले उनकी सर्वशक्तिमान किलेबंदी का प्रतीक माने जाते थे। इन किलों का ऐतिहासिक महत्व आज भी मौजूद है।"
                                : "In ancient times, the forts built by the kings were considered a symbol of their almighty fortifications. The historical significance of these forts still exists today."}
                        </p>
                        <div className="space-y-4">
                            {archaeologicalForts.map((fort, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                        <h3 className="text-lg font-semibold text-amber-600">{language === "hindi" ? fort.nameHindi : fort.name}</h3>
                                        <span className="text-xs bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded-full">{language === "hindi" ? fort.locationHindi : fort.location}</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3 text-sm">
                                        <p><span className="text-muted-foreground">{language === "hindi" ? "निर्माता:" : "Built by:"}</span> {language === "hindi" ? fort.builtByHindi : fort.builtBy}</p>
                                        <p><span className="text-muted-foreground">{language === "hindi" ? "काल:" : "Period:"}</span> {language === "hindi" ? fort.periodHindi : fort.period}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{language === "hindi" ? fort.featuresHindi : fort.features}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Archaeological Sites Section */}
                    <div className="bg-stone-500/5 rounded-2xl p-6 md:p-8 border-2 border-stone-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-stone-500/30">
                                <Landmark className="w-5 h-5 text-stone-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-stone-600">{language === "hindi" ? "अन्य पुरातात्विक स्थल" : "Other Archaeological Sites of Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {otherArchaeologicalSites.map((site, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-stone-600">{language === "hindi" ? site.nameHindi : site.name}</h3>
                                    <p className="text-xs text-muted-foreground mb-2">{language === "hindi" ? site.locationHindi : site.location} | {language === "hindi" ? site.periodHindi : site.period}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{language === "hindi" ? site.featuresHindi : site.features}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Museums Section */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            {/* <div className="p-2 rounded-xl bg-blue-500/30">
                                <Museum className="w-5 h-5 text-blue-600" />
                            </div> */}
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "प्रमुख संग्रहालय" : "Major Museums of Haryana"}</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            {language === "hindi"
                                ? "हरियाणा में विभिन्न संस्थाओं के संग्रहालय पुरातात्विक सामग्री, सिक्कों, मूर्तियों, पांडुलिपियों और लोक-सांस्कृतिक धरोहरों को संरक्षित करते हैं। नीचे दिए गए स्थापना-वर्ष, भवन-वर्ष और हस्तांतरण-वर्ष अलग-अलग प्रकार की तिथियाँ हैं; जहाँ प्रमाण उपलब्ध नहीं है, वहाँ यह स्पष्ट किया गया है।"
                                : "Museums managed by various institutions in Haryana preserve archaeological materials, coins, sculptures, manuscripts and folk-cultural heritage. Establishment dates, building dates and departmental handover dates are different kinds of dates; where reliable confirmation is missing, this is stated explicitly."}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {museums.map((museum, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-blue-600">{language === "hindi" ? museum.nameHindi : museum.name}</h3>
                                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-2">
                                        <span>{language === "hindi" ? museum.locationHindi : museum.location}</span>
                                        {museum.year && <span>• {language === "hindi" ? museum.yearHindi : museum.year}</span>}
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{language === "hindi" ? museum.featuresHindi : museum.features}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* State Level Museums Note */}
                    <div className="bg-purple-500/5 rounded-2xl p-6 md:p-8 border-2 border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-500/30">
                                <Trophy className="w-5 h-5 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-purple-600">{language === "hindi" ? "राज्य स्तरीय संग्रहालय" : "State Level Museums"}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "हरियाणा सरकार के 2026–27 बजट विवरण के अनुसार, पंचकूला में राज्य पुरातत्व संग्रहालय और राखीगढ़ी में स्थल संग्रहालय एवं व्याख्या केंद्र का निर्माण लगभग पूरा था, जबकि आंतरिक और बाहरी विकास कार्य शेष थे। इसलिए इन्हें पहले से पूर्ण और चालू संग्रहालय नहीं कहा जाना चाहिए।"
                                : "According to Haryana’s 2026–27 budget documents, construction of the State Archaeological Museum at Panchkula and the Site Museum & Interpretation Centre at Rakhigarhi was nearing completion, while further internal and external development remained. These facilities should not be described as already completed and operational."}
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा पुरातत्व: तथ्य सारांश" : "Haryana Archaeology: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">{archaeologicalForts.length}</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सूचीबद्ध किला/विरासत स्थल" : "Listed fort/heritage entries"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">{museums.length}</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सूचीबद्ध संग्रहालय" : "Listed museums"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">1959</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "गुरुकुल झज्जर संग्रह की शुरुआत" : "Gurukul Jhajjar collection began"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">2001</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "कुरुक्षेत्र पैनोरमा केंद्र का उद्घाटन वर्ष" : "Kurukshetra Panorama inauguration year"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">12</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "तोशाम बारादरी के द्वार" : "Tosham Baradari Gates"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">64 ft</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सर छोटू राम की प्रतिमा" : "Sir Chhotu Ram Statue Height"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">1354 AD</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हिसार किले का निर्माण" : "Hisar Fort Construction"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">1987</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "श्रीकृष्ण संग्रहालय की स्थापना" : "Shri Krishna Museum founded"}</p>
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
                            {language === "hindi" ? "हरियाणा के पुरातात्विक स्थलों और" : "Common"} <span className="text-amber-600">{language === "hindi" ? "संग्रहालयों के बारे में सामान्य प्रश्न" : "Questions About Haryana's Archaeological Sites and Museums"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के किलों, पुरातात्विक स्थलों और संग्रहालयों के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's forts, archaeological sites, and museums"}
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
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
                            {language === "hindi" ? "अपने हरियाणा पुरातत्व ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Archaeology?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-amber-600 hover:bg-amber-700">
                                {language === "hindi" ? "हरियाणा पुरातत्व क्विज़ लें" : "Take Haryana Archaeology Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/district-profile" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "हरियाणा के जिलों की प्रोफाइल" : "Back to Districts Profile of Haryana"}
                        </Link>
                        <Link href="/haryana-gk/tourism" className="text-amber-600 hover:text-amber-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: पर्यटन" : "Next Chapter: Tourism"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>


            {/* Sources and editorial verification note */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 border-t">
                <div className="max-w-5xl mx-auto space-y-3 text-sm text-muted-foreground">
                    <h2 className="font-semibold text-foreground text-lg">{language === "hindi" ? "प्रामाणिक स्रोत और तथ्य संबंधी सावधानी" : "Official Sources and Verification Notes"}</h2>
                    <p>{language === "hindi" ? "'पारंपरिक मान्यता' या 'पुष्टि आवश्यक' वाले विवरण निश्चित ऐतिहासिक तथ्य नहीं हैं। भवन निर्माण, संग्रहालय स्थापना और विभागीय हस्तांतरण की तिथियों में अंतर रखें।" : "Descriptions marked as traditional attributions or requiring verification must not be treated as established historical facts. Distinguish building dates, museum founding dates and departmental handovers."}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                        <a className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer" href="https://archaeology.haryana.gov.in/sites-and-monuments">Haryana Archaeology — Monuments</a>
                        <a className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer" href="https://archaeology.haryana.gov.in/museums-listings-be-added-their-details">Haryana Archaeology — Museums</a>
                        <a className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer" href="https://kpsc.nscd.gov.in/en_us/about-us/">NCSM — Kurukshetra Panorama</a>
                        <a className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer" href="https://hansi.haryana.gov.in/culture-heritage/">Hansi District — Heritage</a>
                        <a className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer" href="https://palwal.gov.in/tourist-places/">Palwal District — Tourism</a>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा के पुरातात्विक स्थल और संग्रहालय - संपूर्ण संदर्भ" : "Archaeological Sites and Museums of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के पुरातात्विक किलों, पुरातात्विक स्थलों और संग्रहालयों के बारे में व्यापक जानकारी प्रदान करता है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about archaeological forts, archaeological sites, and museums of Haryana. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "संदर्भ: हरियाणा पुरातत्व निदेशालय, जिला पोर्टल, भारतीय पुरातत्व सर्वेक्षण एवं राष्ट्रीय विज्ञान संग्रहालय परिषद; अनिश्चित दावे चिह्नित हैं" : "References: Haryana Archaeology, district portals, ASI and NCSM; uncertain claims are identified"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}