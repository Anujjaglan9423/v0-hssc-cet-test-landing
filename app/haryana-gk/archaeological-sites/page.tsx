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
            questionHindi: "हरियाणा का सबसे पुराना किला कौन सा है?",
            questionEnglish: "Which is the oldest fort in Haryana?",
            answerHindi: "हांसी का किला हरियाणा का सबसे पुराना किला है, जिसे तोमर शासक अनंगपाल प्रथम ने बनवाया था। इसे पृथ्वीराज चौहान का किला भी कहा जाता है।",
            answerEnglish: "The Fort of Hansi is the oldest fort in Haryana, built by Tomar ruler Anangpal I. It is also called the fort of Prithviraj Chauhan."
        },
        {
            questionHindi: "हरियाणा का सबसे बड़ा और सबसे पुराना संग्रहालय कौन सा है?",
            questionEnglish: "Which is the largest and oldest museum in Haryana?",
            answerHindi: "गुरुकुल झज्जर पुरातत्व संग्रहालय हरियाणा का सबसे बड़ा और सबसे पुराना संग्रहालय है, जिसकी स्थापना 1959 में स्वामी ओमानंद सरस्वती द्वारा की गई थी।",
            answerEnglish: "The Archaeological Museum (Gurukul Jhajjar Museum) is the largest and oldest museum in Haryana, established in 1959 by Swami Omanand Saraswati."
        },
        {
            questionHindi: "हिसार का किला किसने बनवाया था?",
            questionEnglish: "Who built the Fort of Hisar?",
            answerHindi: "हिसार का किला 1354 ईस्वी में फिरोज शाह तुगलक ने बनवाया था। यह एक अर्धचंद्राकार किला है जिसके चार द्वार हैं - दिल्ली गेट, नागौरी गेट, तलाकी गेट और मोरी गेट।",
            answerEnglish: "The Fort of Hisar was constructed by Feroz Shah Tughlaq in 1354 AD. It is a crescent shaped fort with four gates - Delhi Gate, Nagauri Gate, Talaqi Gate and Mori Gate."
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
            answerHindi: "गुरु गोबिंद सिंह मार्शल आर्ट्स संग्रहालय यमुनानगर जिले के कपालमोहन में स्थित है। यह स्थान दो सिख गुरुओं के आगमन के लिए गौरवपूर्ण स्थान है।",
            answerEnglish: "Guru Gobind Singh Martial Arts Museum is located at Kapalmohan in Yamunanagar district. It is a proud place for the arrival of two Sikh Gurus."
        }
    ];

    // Archaeological Forts Data
    const archaeologicalForts = [
        {
            name: "Fort of Hansi",
            nameHindi: "हांसी का किला",
            location: "Hansi, Hisar",
            locationHindi: "हांसी, हिसार",
            period: "11th Century",
            periodHindi: "11वीं शताब्दी",
            builtBy: "Anangpal I (Tomar ruler)",
            builtByHindi: "अनंगपाल प्रथम (तोमर शासक)",
            features: "Crescent shaped fort, also known as Prithviraj Chauhan's fort. George Thomas made Hansi the capital of his empire. Contains stable, step-well, and mosques. A mint was also established here during George Thomas's reign.",
            featuresHindi: "अर्धचंद्राकार किला, जिसे पृथ्वीराज चौहान का किला भी कहा जाता है। जॉर्ज थॉमस ने हांसी को अपने साम्राज्य की राजधानी बनाया। इसमें अस्तबल, बावड़ी और मस्जिदें हैं। जॉर्ज थॉमस के शासनकाल में यहाँ एक टकसाल भी स्थापित की गई थी।"
        },
        {
            name: "Fort of Asigarh",
            nameHindi: "असीगढ़ का किला",
            location: "Hansi, Hisar",
            locationHindi: "हांसी, हिसार",
            period: "12th Century",
            periodHindi: "12वीं शताब्दी",
            builtBy: "Prithviraj Chauhan",
            builtByHindi: "पृथ्वीराज चौहान",
            features: "Also known as the fort of the sword. Prithviraj Chauhan also built a fort at Gohana.",
            featuresHindi: "तलवार के किले के नाम से भी जाना जाता है। पृथ्वीराज चौहान ने गोहाना में भी एक किला बनवाया था।"
        },
        {
            name: "Fort of Tohana",
            nameHindi: "तोहाना का किला",
            location: "Tohana, Fatehabad",
            locationHindi: "तोहाना, फतेहाबाद",
            period: "11th Century",
            periodHindi: "11वीं शताब्दी",
            builtBy: "Anangpal Tomar",
            builtByHindi: "अनंगपाल तोमर",
            features: "Crescent shaped fort with a step-well. Sultan Balban renovated this fort. In 1398 AD, Timur Lang completely destroyed this fort. Presently, it is in ruins.",
            featuresHindi: "अर्धचंद्राकार किला जिसमें बावड़ी है। सुल्तान बलबन ने इस किले का जीर्णोद्धार करवाया। 1398 ईस्वी में तैमूर लंग ने इस किले को पूरी तरह नष्ट कर दिया। वर्तमान में, यह खंडहर में है।"
        },
        {
            name: "Ramgarh Fort",
            nameHindi: "रामगढ़ का किला",
            location: "Ramgarh, Panchkula",
            locationHindi: "रामगढ़, पंचकूला",
            period: "350 years old",
            periodHindi: "350 वर्ष पुराना",
            builtBy: "Chandel dynasty Rajput rulers",
            builtByHindi: "चंदेल वंश के राजपूत शासक",
            features: "The height of the main gate is 37 feet, which is a record. Haryana Tourism Department has maintained a heritage hotel here.",
            featuresHindi: "मुख्य द्वार की ऊंचाई 37 फीट है, जो एक रिकॉर्ड है। हरियाणा पर्यटन विभाग ने यहाँ एक हेरिटेज होटल बनाया है।"
        },
        {
            name: "Taraori Fort",
            nameHindi: "तराओरी का किला",
            location: "Taraori, Karnal",
            locationHindi: "तराओरी, करनाल",
            period: "12th Century",
            periodHindi: "12वीं शताब्दी",
            builtBy: "Prithviraj Chauhan",
            builtByHindi: "पृथ्वीराज चौहान",
            features: "Taraori is famous for the Battle of Tarain (1191-1192 AD). Aurangzeb built a pond and mosque inside the boundary wall.",
            featuresHindi: "तराओरी तराइन के युद्ध (1191-1192 ईस्वी) के लिए प्रसिद्ध है। औरंगजेब ने यहाँ एक तालाब और मस्जिद बनवाई थी।"
        },
        {
            name: "Fort of Hisar",
            nameHindi: "हिसार का किला",
            location: "Hisar",
            locationHindi: "हिसार",
            period: "1354 AD",
            periodHindi: "1354 ईस्वी",
            builtBy: "Feroz Shah Tughlaq",
            builtByHindi: "फिरोज शाह तुगलक",
            features: "Crescent shaped fort with four gates - Delhi Gate, Nagauri Gate, Talaqi Gate and Mori Gate. Gujar Mahal was built by Feroz Shah Tughlaq for his beloved Gujri.",
            featuresHindi: "अर्धचंद्राकार किला जिसके चार द्वार हैं - दिल्ली गेट, नागौरी गेट, तलाकी गेट और मोरी गेट। गुजरी महल फिरोज शाह तुगलक ने अपनी प्रिय गुजरी के लिए बनवाया था।"
        },
        {
            name: "Palwal Fort (Matia Fort)",
            nameHindi: "पलवल का किला (मटिया किला)",
            location: "Palwal",
            locationHindi: "पलवल",
            period: "16th Century",
            periodHindi: "16वीं शताब्दी",
            builtBy: "Sher Shah Suri",
            builtByHindi: "शेर शाह सूरी",
            features: "A lake has been constructed near this fort. Archaeological excavation revealed a grand palace at the bottom. Presently, the fort has become a ruin.",
            featuresHindi: "इस किले के पास एक झील बनाई गई है। पुरातात्विक उत्खनन से किले के तल पर एक भव्य महल का पता चला है। वर्तमान में, किला खंडहर हो चुका है।"
        },
        {
            name: "Fort of Fatehabad",
            nameHindi: "फतेहाबाद का किला",
            location: "Fatehabad",
            locationHindi: "फतेहाबाद",
            period: "14th Century",
            periodHindi: "14वीं शताब्दी",
            builtBy: "Feroz Shah Tughlaq",
            builtByHindi: "फिरोज शाह तुगलक",
            features: "Also known as Sher Shah's Fort and Humayun's Masjid. Contains a pillar called Ferozi Lat, believed by some to be related to Mauryan Emperor Ashoka.",
            featuresHindi: "शेर शाह के किले और हुमायूँ मस्जिद के नाम से भी जाना जाता है। इसमें फिरोजी लाट नामक एक स्तंभ है, जिसे कुछ इतिहासकार मौर्य सम्राट अशोक से संबंधित मानते हैं।"
        },
        {
            name: "Loharu Fort",
            nameHindi: "लोहारू का किला",
            location: "Loharu, Bhiwani",
            locationHindi: "लोहारू, भिवानी",
            period: "1570 AD",
            periodHindi: "1570 ईस्वी",
            builtBy: "Arjun Singh",
            builtByHindi: "अर्जुन सिंह",
            features: "Main features were Diwan-e-Khas and Sheesh Mahal. From 1805 to 1947, Loharu Princely State was dominated by Muslim rulers.",
            featuresHindi: "मुख्य विशेषताएँ दीवान-ए-खास और शीश महल थीं। 1805 से 1947 तक, लोहारू रियासत पर मुस्लिम शासकों का प्रभुत्व रहा।"
        },
        {
            name: "Fort of Taoru",
            nameHindi: "तावड़ू का किला",
            location: "Taoru, Nuh",
            locationHindi: "तावड़ू, नूंह",
            period: "18th Century",
            periodHindi: "18वीं शताब्दी",
            builtBy: "Ruler Nahar Singh",
            builtByHindi: "शासक नाहर सिंह",
            features: "High walls are built around this fort. Presently, the Fort of Taoru has been converted into a police station.",
            featuresHindi: "इस किले के चारों ओर ऊँची दीवारें बनी हैं। वर्तमान में, तावड़ू के किले को पुलिस स्टेशन में बदल दिया गया है।"
        },
        {
            name: "Fort of Farrukhnagar",
            nameHindi: "फर्रुखनगर का किला",
            location: "Farrukhnagar, Gurugram",
            locationHindi: "फर्रुखनगर, गुरुग्राम",
            period: "1732 AD",
            periodHindi: "1732 ईस्वी",
            builtBy: "Faujdar Khan",
            builtByHindi: "फौजदार खान",
            features: "Faujdar Khan was the Nawab of Mughal Emperor Mohammad Shah Rangeela. After the revolt of 1857, the British established control over this fort. Presently, completely ruined.",
            featuresHindi: "फौजदार खान मुगल सम्राट मोहम्मद शाह रंगीला के नवाब थे। 1857 के विद्रोह के बाद, अंग्रेजों ने इस किले पर नियंत्रण स्थापित कर लिया। वर्तमान में, पूरी तरह से खंडहर हो चुका है।"
        },
        {
            name: "Fort of Madhogarh",
            nameHindi: "मधोगढ़ का किला",
            location: "Madhogarh, Mahendragarh",
            locationHindi: "मधोगढ़, महेंद्रगढ़",
            period: "18th Century",
            periodHindi: "18वीं शताब्दी",
            builtBy: "Sawai Madho Singh",
            builtByHindi: "सवाई माधो सिंह",
            features: "Inaccessible fort situated on top of a hill. Stairs constructed by cutting the hills. In 1755 AD, Maratha rulers captured this fort.",
            featuresHindi: "पहाड़ी की चोटी पर स्थित दुर्गम किला। पहाड़ियों को काटकर सीढ़ियाँ बनाई गई हैं। 1755 ईस्वी में, मराठा शासकों ने इस किले पर कब्जा कर लिया।"
        },
        {
            name: "Fort of Maham",
            nameHindi: "महम का किला",
            location: "Maham, Rohtak",
            locationHindi: "महम, रोहतक",
            period: "1656 AD",
            periodHindi: "1656 ईस्वी",
            builtBy: "Saidu Kalal",
            builtByHindi: "सईदू कलाल",
            features: "Built during the reign of Shah Jahan. There is also a step-well in this fort. Made of gravel, sand and stone.",
            featuresHindi: "शाहजहाँ के शासनकाल में निर्मित। इस किले में एक बावड़ी भी है। बजरी, रेत और पत्थर से बना है।"
        },
        {
            name: "Bahadurgarh Fort",
            nameHindi: "बहादुरगढ़ का किला",
            location: "Bahadurgarh, Jhajjar",
            locationHindi: "बहादुरगढ़, झज्जर",
            period: "18th Century",
            periodHindi: "18वीं शताब्दी",
            builtBy: "Bahadur Khan",
            builtByHindi: "बहादुर खान",
            features: "Also known as Singh Dwar or Gateway of Haryana. In 1803 AD, the Marathas were defeated by the British and had to hand over this fort.",
            featuresHindi: "सिंह द्वार या हरियाणा के प्रवेश द्वार के रूप में भी जाना जाता है। 1803 ईस्वी में, मराठों को अंग्रेजों ने हराया और उन्हें यह किला सौंपना पड़ा।"
        },
        {
            name: "Fort of Kanod (Mahendragarh)",
            nameHindi: "कनोद का किला (महेंद्रगढ़)",
            location: "Mahendragarh",
            locationHindi: "महेंद्रगढ़",
            period: "1755 AD",
            periodHindi: "1755 ईस्वी",
            builtBy: "Maratha rulers",
            builtByHindi: "मराठा शासक",
            features: "In 1860 AD, this region became part of Patiala Princely State. Maharaja Narendra Singh renamed Kanod Fort to Mahendragarh after his son Mahendra.",
            featuresHindi: "1860 ईस्वी में, यह क्षेत्र पटियाला रियासत का हिस्सा बन गया। महाराजा नरेंद्र सिंह ने कनोद किले का नाम बदलकर अपने पुत्र महेंद्र के नाम पर महेंद्रगढ़ रख दिया।"
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
            features: "Contains mausoleums of Maharaja Ranjit Singh and Maharaja Kharag Singh. Presently, this fort has been demolished.",
            featuresHindi: "इसमें महाराजा रणजीत सिंह और महाराजा खड़ग सिंह की समाधियाँ हैं। वर्तमान में, यह किला ध्वस्त कर दिया गया है।"
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
            builtBy: "Sohan Singh",
            builtByHindi: "सोहन सिंह",
            features: "Built by Sohan Singh in the 18th century. At present, this fort is completely ruined.",
            featuresHindi: "18वीं शताब्दी में सोहन सिंह द्वारा निर्मित। वर्तमान में, यह किला पूरी तरह से खंडहर हो चुका है।"
        },
        {
            name: "Fort of Raja Nahar Singh",
            nameHindi: "राजा नाहर सिंह का किला",
            location: "Ballabhgarh, Faridabad",
            locationHindi: "बल्लभगढ़, फरीदाबाद",
            period: "18th-19th Century",
            periodHindi: "18वीं-19वीं शताब्दी",
            builtBy: "Raja Balram Singh (completed by Raja Nahar Singh)",
            builtByHindi: "राजा बलराम सिंह (राजा नाहर सिंह द्वारा पूरा किया गया)",
            features: "Resembles Bharatpur Fort. Has two main gates - Ajit Singh Gate and Ballu Singh Gate. In 2003, it became a Heritage Hotel. Currently known as Nahar Singh Palace.",
            featuresHindi: "भरतपुर किले से मिलती जुलती संरचना। इसके दो मुख्य द्वार हैं - अजीत सिंह गेट और बल्लू सिंह गेट। 2003 में, यह एक हेरिटेज होटल बन गया। वर्तमान में नाहर सिंह पैलेस के नाम से जाना जाता है।"
        },
        {
            name: "Fort of Kunjpura",
            nameHindi: "कुंजपुरा का किला",
            location: "Kunjpura, Karnal",
            locationHindi: "कुंजपुरा, करनाल",
            period: "18th Century",
            periodHindi: "18वीं शताब्दी",
            builtBy: "Unknown",
            builtByHindi: "अज्ञात",
            features: "Constructed with small bricks. At present, a military school is operated here.",
            featuresHindi: "छोटी ईंटों से निर्मित। वर्तमान में, यहाँ एक सैन्य स्कूल संचालित होता है।"
        }
    ];

    // Other Archaeological Sites
    const otherArchaeologicalSites = [
        {
            name: "Chaneti Buddhist Stupa",
            nameHindi: "चनेटी बौद्ध स्तूप",
            location: "Chaneti, Yamunanagar",
            locationHindi: "चनेटी, यमुनानगर",
            period: "Ashoka Period",
            periodHindi: "अशोक काल",
            features: "About 100 m in circumference. Yellow and paved bricks have been used. According to Chinese traveller Hiuen Tsang, it is a relic of Ashoka's stupa.",
            featuresHindi: "लगभग 100 मीटर परिधि में। पीली और पक्की ईंटों का उपयोग किया गया है। चीनी यात्री ह्वेनसांग के अनुसार, यह अशोक के स्तूप का अवशेष है।"
        },
        {
            name: "Chor Gumbad",
            nameHindi: "चोर गुंबद",
            location: "Narnaul, Mahendragarh",
            locationHindi: "नारनौल, महेंद्रगढ़",
            period: "Medieval Period",
            periodHindi: "मध्यकाल",
            features: "Built by Afghan Sardar Jamal Khan as his tomb. Gives an appearance of a double storeyed structure. The verandah has twenty gates.",
            featuresHindi: "अफगान सरदार जमाल खान द्वारा अपने मकबरे के रूप में निर्मित। दो मंजिला संरचना का आभास देता है। बरामदे में बीस द्वार हैं।"
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
            period: "12th Century",
            periodHindi: "12वीं शताब्दी",
            features: "Not a single frame has been constructed. Has 12 gates constructed in such a way that a person sitting in the central room can easily observe all four sides.",
            featuresHindi: "एक भी फ्रेम नहीं बनाया गया है। इसमें 12 द्वार इस प्रकार बनाए गए हैं कि केंद्रीय कक्ष में बैठा व्यक्ति आसानी से चारों ओर देख सकता है।"
        },
        {
            name: "Chatta Rai Bal Mukund Das (Birbal ka Chhatta)",
            nameHindi: "छत्ता राय बाल मुकुंद दास (बीरबल का छत्ता)",
            location: "Narnaul, Mahendragarh",
            locationHindi: "नारनौल, महेंद्रगढ़",
            period: "Mughal Period (Shah Jahan)",
            periodHindi: "मुगल काल (शाहजहाँ)",
            features: "Built by Rai Bal Mukund Das, Diwan of Narnaul. Connected by tunnel route with Delhi, Jaipur, Mahendragarh and Dhosi. Birbal often visited here, hence the name.",
            featuresHindi: "नारनौल के दीवान राय बाल मुकुंद दास द्वारा निर्मित। दिल्ली, जयपुर, महेंद्रगढ़ और धोसी से सुरंग मार्ग से जुड़ा हुआ। बीरबल अक्सर यहाँ आते थे, इसलिए यह नाम पड़ा।"
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
            name: "Kishori Mahal and Barakhamba Chhatri",
            nameHindi: "किशोरी महल और बारहखंबा छतरी",
            location: "Hodal, Faridabad",
            locationHindi: "होडल, फरीदाबाद",
            period: "1754-1761 AD",
            periodHindi: "1754-1761 ईस्वी",
            features: "Built by Jat ruler Suraj Mal in the name of his wife. Major historical monument of Haryana. Royal palace, Kutcheri and Barakhamba Chhatri are prominent.",
            featuresHindi: "जाट शासक सूरज मल द्वारा अपनी पत्नी के नाम पर निर्मित। हरियाणा का एक प्रमुख ऐतिहासिक स्मारक। शाही महल, कचहरी और बारहखंबा छतरी प्रमुख हैं।"
        },
        {
            name: "Birbal Ka Rang Mahal",
            nameHindi: "बीरबल का रंग महल",
            location: "Buria, Yamunanagar",
            locationHindi: "बुड़िया, यमुनानगर",
            period: "Akbar's Reign",
            periodHindi: "अकबर का शासनकाल",
            features: "Built by Birbal as his residence. Lakhauri bricks and lime have been used. No wood used in this palace. Fully ventilated.",
            featuresHindi: "बीरबल द्वारा अपने निवास के रूप में निर्मित। लखौरी ईंटों और चूने का उपयोग किया गया है। इस महल में लकड़ी का उपयोग नहीं किया गया है। पूरी तरह हवादार।"
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
            features: "Oldest and largest museum in the state. Contains coins, seals, inscriptions, copper sheets, weapons, terracotta, pottery, stone sculptures, jewellery, manuscripts and beads. Also has ancient statue of Panchavati deer, Nilgiri drums, seamless chain and plows.",
            featuresHindi: "राज्य का सबसे पुराना और सबसे बड़ा संग्रहालय। इसमें सिक्के, मुहरें, शिलालेख, तांबे की चादरें, हथियार, टेराकोटा, मिट्टी के बर्तन, पत्थर की मूर्तियाँ, आभूषण, पांडुलिपियाँ और मनके संरक्षित हैं। पंचवटी हिरण की प्राचीन मूर्ति, नीलगिरी ड्रम, बिना सीवन की चेन और हल भी यहाँ रखे गए हैं।"
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
            establishedBy: "Government of Haryana",
            establishedByHindi: "हरियाणा सरकार",
            features: "Three storied, 8885 square meters wide. Contains remains from excavation, sculptures of brass, bronze and wood, leather puppets, Madhubani painting specimens, ancient coins and manuscripts. Special sculptures of elephant teeth from Odisha and Tamil Nadu.",
            featuresHindi: "तीन मंजिला, 8885 वर्ग मीटर चौड़ा। उत्खनन से प्राप्त अवशेष, पीतल, कांस्य और लकड़ी की मूर्तियाँ, चमड़े की कठपुतलियाँ, मधुबनी पेंटिंग के नमूने, प्राचीन सिक्के और पांडुलिपियाँ शामिल हैं। ओडिशा और तमिलनाडु के कलाकारों द्वारा बनाई गई हाथी दांत की विशेष मूर्तियाँ भी यहाँ रखी गई हैं।"
        },
        {
            name: "Panorama and Science Centre",
            nameHindi: "पैनोरमा एंड साइंस सेंटर",
            location: "Kurukshetra",
            locationHindi: "कुरुक्षेत्र",
            year: "1990s",
            yearHindi: "1990 के दशक",
            establishedBy: "Kurukshetra Development Board",
            establishedByHindi: "कुरुक्षेत्र विकास बोर्ड",
            features: "Uses modern tools to provide information about science, culture, religion, human civilisation and history. Displays scientific interpretation related to Mahabharata war. Exhibition theme: 'India: A Heritage in Signs, Technology and Culture'.",
            featuresHindi: "विज्ञान, संस्कृति, धर्म, मानव सभ्यता और इतिहास के बारे में जानकारी प्रदान करने के लिए आधुनिक उपकरणों का उपयोग करता है। महाभारत युद्ध से संबंधित वैज्ञानिक व्याख्या प्रदर्शित करता है। प्रदर्शनी का विषय: 'भारत: एक विरासत संकेतों, प्रौद्योगिकी और संस्कृति में'।"
        },
        {
            name: "Panipat Museum",
            nameHindi: "पानीपत संग्रहालय",
            location: "Panipat",
            locationHindi: "पानीपत",
            year: "2000",
            yearHindi: "2000",
            establishedBy: "Panipat War Memorial Committee",
            establishedByHindi: "पानीपत युद्ध स्मारक समिति",
            features: "Provides comprehensive information on art, history, crafts and archaeology of the three Battles of Panipat. Contains pottery, ornaments, important documents, weapons, maps, manuscripts and sculptures.",
            featuresHindi: "पानीपत की तीनों लड़ाइयों से उत्पन्न कला, इतिहास, शिल्प और पुरातत्व पर व्यापक जानकारी प्रदान करता है। इसमें मिट्टी के बर्तन, आभूषण, महत्वपूर्ण दस्तावेज, हथियार, मानचित्र, पांडुलिपियाँ और मूर्तियाँ शामिल हैं।"
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
            year: "2013",
            yearHindi: "2013",
            establishedBy: "Government of Haryana",
            establishedByHindi: "हरियाणा सरकार",
            features: "Historical items related to Chaudhary Chhotu Ram. On 9th October, 2018, Prime Minister Narendra Modi unveiled a 64 feet high statue of Chaudhary Chhotu Ram.",
            featuresHindi: "चौधरी छोटू राम से संबंधित ऐतिहासिक वस्तुएँ। 9 अक्टूबर, 2018 को प्रधानमंत्री नरेंद्र मोदी ने चौधरी छोटू राम की 64 फीट ऊँची प्रतिमा का अनावरण किया।"
        },
        {
            name: "Archaeological Museum Thanesar",
            nameHindi: "पुरातत्व संग्रहालय थानेसर",
            location: "Thanesar, Kurukshetra",
            locationHindi: "थानेसर, कुरुक्षेत्र",
            year: "Archaeological Survey of India",
            yearHindi: "भारतीय पुरातत्व सर्वेक्षण",
            establishedBy: "ASI (Chandigarh Division)",
            establishedByHindi: "एएसआई (चंडीगढ़ प्रभाग)",
            features: "Located in the courtyard of the tomb of Sheikh Chilli.",
            featuresHindi: "शेख चिल्ली के मकबरे के प्रांगण में स्थित है।"
        },
        {
            name: "Manuscript Museum",
            nameHindi: "पांडुलिपि संग्रहालय",
            location: "Kurukshetra University, Kurukshetra",
            locationHindi: "कुरुक्षेत्र विश्वविद्यालय, कुरुक्षेत्र",
            year: "Kurukshetra University",
            yearHindi: "कुरुक्षेत्र विश्वविद्यालय",
            establishedBy: "Pandit Sthanu Dutt Sharma",
            establishedByHindi: "पंडित स्थाणु दत्त शर्मा",
            features: "Five texts of Nath Community written in Sharda script have been found. Collection of ancient handcrafts considered as heritage.",
            featuresHindi: "शारदा लिपि में लिखित नाथ संप्रदाय के पाँच ग्रंथ मिले हैं। प्राचीन हस्तशिल्प का संग्रह जिन्हें विरासत माना जाता है।"
        },
        {
            name: "Gulzarilal Nanda Museum",
            nameHindi: "गुलजारीलाल नंदा संग्रहालय",
            location: "Sadachar Sthal, Kurukshetra",
            locationHindi: "सदाचार स्थल, कुरुक्षेत्र",
            year: "Kurukshetra Development Board",
            yearHindi: "कुरुक्षेत्र विकास बोर्ड",
            establishedBy: "Shri Krishna Museum",
            establishedByHindi: "श्री कृष्ण संग्रहालय",
            features: "First personality museum of Haryana dedicated to Gulzarilal Nanda, former Prime Minister and Bharat Ratna awardee.",
            featuresHindi: "हरियाणा का पहला व्यक्तित्व संग्रहालय जो पूर्व प्रधानमंत्री और भारत रत्न गुलजारीलाल नंदा को समर्पित है।"
        },
        {
            name: "Guru Gobind Singh Martial Arts Museum",
            nameHindi: "गुरु गोबिंद सिंह मार्शल आर्ट्स संग्रहालय",
            location: "Kapalmohan, Yamunanagar",
            locationHindi: "कपालमोहन, यमुनानगर",
            year: "Government of Haryana",
            yearHindi: "हरियाणा सरकार",
            establishedBy: "Government of Haryana",
            establishedByHindi: "हरियाणा सरकार",
            features: "First Guru Nanak Dev stayed here in 1584 AD and tenth Guru, Guru Gobind Singh in 1686 AD. Proud place for the arrival of two Sikh Gurus.",
            featuresHindi: "प्रथम गुरु नानक देव 1584 ईस्वी में यहाँ रुके थे और दसवें गुरु, गुरु गोबिंद सिंह 1686 ईस्वी में। दो सिख गुरुओं के आगमन के लिए गौरवपूर्ण स्थान।"
        },
        {
            name: "Guru Tegh Bahadur Memorial Museum",
            nameHindi: "गुरु तेग बहादुर स्मारक संग्रहालय",
            location: "Badkhalsa, Sonipat",
            locationHindi: "बादखालसा, सोनीपत",
            year: "Government of Haryana",
            yearHindi: "हरियाणा सरकार",
            establishedBy: "Government of Haryana",
            establishedByHindi: "हरियाणा सरकार",
            features: "Dedicated to Guru Tegh Bahadur, the 9th Guru of the Sikhs. Major historical site of Sikhs.",
            featuresHindi: "सिखों के 9वें गुरु, गुरु तेग बहादुर को समर्पित। सिखों का एक प्रमुख ऐतिहासिक स्थल।"
        },
        {
            name: "Jahaj Kothi Zonal Museum",
            nameHindi: "जहाज कोठी जोनल संग्रहालय",
            location: "Hisar",
            locationHindi: "हिसार",
            year: "1796 AD (Building)",
            yearHindi: "1796 ईस्वी (भवन)",
            establishedBy: "George Thomas (Converted by ASI)",
            establishedByHindi: "जॉर्ज थॉमस (एएसआई द्वारा परिवर्तित)",
            features: "Built in 1796 AD by George Thomas, a resident of Ireland. This historical monument has been converted into a regional archaeological museum.",
            featuresHindi: "1796 ईस्वी में आयरलैंड के निवासी जॉर्ज थॉमस द्वारा निर्मित। इस ऐतिहासिक स्मारक को एक क्षेत्रीय पुरातत्व संग्रहालय में बदल दिया गया है।"
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
                        {language === "hindi" ? "पुरातात्विक स्थल और संग्रहालय - हरियाणा सरकार" : "Archaeological Sites and Museums - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा के" : "Archaeological"} <span className="text-amber-600 dark:text-amber-400">{language === "hindi" ? "पुरातात्विक स्थल और संग्रहालय" : "Sites and Museums of Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के ऐतिहासिक किलों, पुरातात्विक स्थलों और संग्रहालयों की संपूर्ण जानकारी - हांसी का किला, राजा नाहर सिंह का किला, पुरातत्व संग्रहालय, श्री कृष्ण संग्रहालय और बहुत कुछ"
                            : "Complete information about historical forts, archaeological sites, and museums of Haryana - Fort of Hansi, Raja Nahar Singh's Fort, Archaeological Museum, Shri Krishna Museum, and much more"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Castle className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "20+ किले" : "20+ Forts"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            {/* <Museum className="w-4 h-4 text-amber-600" /> */}
                            <span>{language === "hindi" ? "15+ संग्रहालय" : "15+ Museums"}</span>
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
                                ? "पुरातात्विक किलों और संग्रहालयों का ऐतिहासिक रूप से महत्वपूर्ण स्थान है। एक किला न केवल ईंटों और पत्थरों से बनी संरचना है, बल्कि यह एक शासक के पराक्रम को भी प्रदर्शित करता है। इसी प्रकार, संग्रहालय हमारी विरासत को सुरक्षित रखते हुए हमारी धरोहर हैं। शुक्र नीति, जो शुक्राचार्य का प्रमुख ग्रंथ है, में राज्य के सात प्रमुख अंगों का उल्लेख है जिसमें किले को भी विशेष अंग की श्रेणी में शामिल किया गया है।"
                                : "Archaeological forts and museums have a historically significant place. A fort is not only a structure made of bricks and stones, but also displays the valor of a ruler. Similarly, museums are our heritage while keeping our heritage safe. Shukra Niti, the major text of the sage Shukracharya, has mention of the seven major organs of the state in which the fort has also been included in the category of special organs."}
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
                                ? "सांस्कृतिक विरासत को संरक्षित करने के उद्देश्य से हरियाणा में कई संग्रहालय स्थापित किए गए हैं। ऐतिहासिक रूप से, हरियाणा देश का एक प्रमुख राज्य है। ऐतिहासिक और सांस्कृतिक विरासत इन संग्रहालयों में संरक्षित हैं। रोहतक और अग्रोहा से प्राप्त सिक्के भी यहाँ रखे गए हैं।"
                                : "Many museums have been established with a view to preserving cultural heritage in Haryana. Historically, Haryana is a major state of the country. Historical and cultural heritage are preserved in these museums. Coins obtained from Rohtak and Agroha are also kept here."}
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
                                ? "हरियाणा की सांस्कृतिक विरासत को संरक्षित करने के लिए, राज्य सरकार द्वारा पंचकूला और हिसार के राखीगढ़ी में क्रमशः 30 करोड़ और 5 करोड़ रुपये की लागत से दो राज्य स्तरीय संग्रहालय बनाए गए हैं।"
                                : "In order to preserve the cultural heritage of Haryana, two state-level museums have been constructed by the State Government at Panchkula and Rakhigarhi in Hisar at a cost of 30 crore and 5 crore, respectively."}
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
                            <div className="text-3xl font-bold text-amber-600 mb-2">20+</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "ऐतिहासिक किले" : "Historical Forts"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "संग्रहालय" : "Museums"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">1959</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सबसे पुराना संग्रहालय (झज्जर)" : "Oldest Museum (Jhajjar)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">37 ft</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "रामगढ़ किले के मुख्य द्वार की ऊँचाई" : "Ramgarh Fort Main Gate Height"}</p>
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
                            <div className="text-3xl font-bold text-amber-600 mb-2">8,885</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "श्री कृष्ण संग्रहालय का क्षेत्रफल (वर्ग मीटर)" : "Shri Krishna Museum Area (sq m)"}</p>
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
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और पुरातत्व अभिलेखों से स्रोतित" : "Information sourced from official Government of Haryana publications and archaeological records"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}