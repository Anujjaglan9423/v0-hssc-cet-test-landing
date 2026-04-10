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
            questionHindi: "हरियाणा में सिंचाई का सबसे बड़ा स्रोत क्या है?",
            questionEnglish: "What is the largest source of irrigation in Haryana?",
            answerHindi: "हरियाणा में सिंचाई का सबसे बड़ा स्रोत ट्यूबवेल है। लगभग 51.12% सिंचाई ट्यूबवेल के माध्यम से होती है।",
            answerEnglish: "The largest source of irrigation in Haryana is tubewells. About 51.12% of irrigation is done through tubewells."
        },
        {
            questionHindi: "हरियाणा में सबसे पुरानी नहर कौन सी है?",
            questionEnglish: "Which is the oldest canal in Haryana?",
            answerHindi: "पश्चिमी यमुना नहर हरियाणा की सबसे पुरानी नहर है। इसका निर्माण मूल रूप से फिरोज शाह तुगलक ने करवाया था और यह 1879 में ताजेवाला से शुरू हुई थी।",
            answerEnglish: "The Western Yamuna Canal is the oldest canal in Haryana. It was originally built by Feroz Shah Tughlaq and started from Tajewala in 1879."
        },
        {
            questionHindi: "हरियाणा में सबसे बड़ी नहर प्रणाली कौन सी है?",
            questionEnglish: "Which is the largest canal system in Haryana?",
            answerHindi: "भाखड़ा नहर प्रणाली हरियाणा की सबसे बड़ी नहर प्रणाली है, जिसकी कुल लंबाई 5867 किमी है और इसमें 521 चैनल हैं।",
            answerEnglish: "The Bhakra Canal System is the largest canal system in Haryana with a total length of 5867 kms and 521 channels."
        },
        {
            questionHindi: "हरियाणा का सबसे बड़ा बांध कौन सा है?",
            questionEnglish: "Which is the largest dam in Haryana?",
            answerHindi: "पठराला बांध यमुनानगर जिले में सोम्ब नदी पर बना है। इसकी लंबाई 460 मीटर और ऊंचाई 34 मीटर है। यह 1875-76 में बनाया गया था।",
            answerEnglish: "Pathrala Dam is built on the Somb river in Yamunanagar district. It has a length of 460m and height of 34m. It was built in 1875-76."
        },
        {
            questionHindi: "अटल भूजल योजना कब शुरू की गई थी?",
            questionEnglish: "When was Atal Bhujal Yojana launched?",
            answerHindi: "अटल भूजल योजना 25 दिसंबर, 2019 को अटल बिहारी वाजपेयी की 95वीं जयंती पर शुरू की गई थी।",
            answerEnglish: "Atal Bhujal Yojana was launched on 25th December, 2019 on the 95th birth anniversary of Atal Bihari Vajpayee."
        },
        {
            questionHindi: "हरियाणा में कितने प्रतिशत कृषि भूमि में सिंचाई सुविधाएं हैं?",
            questionEnglish: "What percentage of agricultural land in Haryana has irrigation facilities?",
            answerHindi: "हरियाणा में लगभग 60% कृषि भूमि में सिंचाई सुविधाएं हैं।",
            answerEnglish: "Around 60% of the agricultural land in Haryana has irrigation facilities."
        },
        {
            questionHindi: "सतलुज-यमुना लिंक परियोजना (SYL) कितनी लंबी है?",
            questionEnglish: "What is the length of the Sutlej-Yamuna Link (SYL) project?",
            answerHindi: "SYL परियोजना 214 किमी लंबी है, जिसमें 92 किमी हरियाणा में और 122 किमी पंजाब में फैली हुई है।",
            answerEnglish: "The SYL project is 214 kms long, of which 92 km is in Haryana and 122 kms in Punjab."
        },
        {
            questionHindi: "हाथनीकुंड बैराज कहाँ स्थित है?",
            questionEnglish: "Where is Hathnikund Barrage located?",
            answerHindi: "हाथनीकुंड बैराज हरियाणा के यमुनानगर जिले में यमुना नदी पर स्थित है। इसका निर्माण 1996 से 1999 के बीच 220 करोड़ रुपये की लागत से किया गया था।",
            answerEnglish: "Hathnikund Barrage is located on the Yamuna river in Yamunanagar district of Haryana. It was constructed between 1996 and 1999 at a cost of ₹220 crore."
        }
    ];

    // Section 1: Overview
    const overview = {
        titleHindi: "हरियाणा में सिंचाई",
        titleEnglish: "Irrigation in Haryana",
        contentHindi: "हरियाणा एक कृषि प्रधान राज्य है, इसलिए राज्य में सिंचाई सुविधाएं अच्छी तरह से व्यवस्थित हैं। हरियाणा में लगभग 60% कृषि भूमि में सिंचाई सुविधाएं हैं। सिंचाई के मुख्य स्रोत नहरें, ट्यूबवेल, कुएं और तालाब हैं। हरियाणा राज्य में सिंचाई का एक प्रमुख स्रोत ट्यूबवेल है। राज्य में लगभग 51.12% सिंचाई ट्यूबवेल की सहायता से होती है। राज्य में लगभग 48.3% सिंचाई नहर सिंचाई के माध्यम से और 0.52% अन्य स्रोतों से होती है। ट्यूबवेल के माध्यम से सबसे बड़ी सिंचाई सुविधा वाला जिला कैथल (185 हेक्टेयर) है और सबसे कम पंचकूला (15 हेक्टेयर) है। हरियाणा में लगभग 5672 हेक्टेयर भूमि की सिंचाई होती है। सबसे बड़ी सिंचाई सुविधाओं वाला जिला सिरसा (698 हेक्टेयर) है जबकि सबसे कम पंचकूला (25 हेक्टेयर) है। राज्य के कुछ जिलों (रोहतक, गुरुग्राम, करनाल और भिवानी) में पवन चक्कियों की सहायता से भी सिंचाई की जाती है। सिंचाई की इस प्रक्रिया को जर्मनी और हॉलैंड का समर्थन प्राप्त है। अंबाला, यमुनानगर, कुरुक्षेत्र, करनाल, जींद और पानीपत जैसे जिले उपजाऊ क्षेत्र में आते हैं क्योंकि उन्हें नहरों के माध्यम से उचित सिंचाई मिलती है। हरियाणा के अधिकांश जिलों में सिंचाई के लिए पर्याप्त जल संसाधन नहीं हैं। इसलिए, ऐसे जिलों को भूजल प्रबंधन और अंतर्राष्ट्रीय जल समझौतों के माध्यम से कृषि के लिए पानी मिलता है।",
        contentEnglish: "Haryana is an agricultural state so irrigation facilities are well-organised in the state. Around 60% of the agricultural land in Haryana has irrigation facilities. The main sources of irrigation are canals, tubewells, wells and ponds. A major source of irrigation in the Haryana state is tubewells. Around 51.12% of the irrigation in the state takes place with the help of tubewells. Around 48.3% of the irrigation in the state is done through canal irrigation and 0.52% from the other sources. District with largest irrigation facility through tubewells is Kaithal (185 hectare) and lowest is in Panchkula (15 hectare). Around 5672 hectares of land is irrigated in Haryana. District with largest irrigation facilities is Sirsa (698 hectare) while lowest is in Panchkula (25 hectare). In some districts (Rohtak, Gurugram, Karnal and Bhiwani) of the state irrigation is also done with the help of windmills. This process of irrigation is supported by Germany and Holland. Districts like Ambala, Yamunanagar, Kurukshetra, Karnal, Jind and Panipat comes under fertile area as they receive proper irrigation through canals. Most of the districts of Haryana do not have adequate water resources for irrigation. Therefore, such districts receive water for agriculture through ground water management and international water agreements."
    };

    // Section 2: Canal Irrigation System Overview
    const canalOverview = {
        titleHindi: "हरियाणा में नहर सिंचाई प्रणाली",
        titleEnglish: "Canal Irrigation System in Haryana",
        contentHindi: "आर्थिक सर्वेक्षण 2020-21 के अनुसार, हरियाणा ने 1521 चैनलों का एक व्यापक नहर नेटवर्क विकसित किया है जो 14125 किमी क्षेत्र में फैला हुआ है। राज्य की नहर प्रणाली में दो प्रमुख जल प्रणालियाँ शामिल हैं, पश्चिमी यमुना नहर प्रणाली और भाखड़ा नहर प्रणाली। आर्थिक सर्वेक्षण 2020-21 के अनुसार, पश्चिमी यमुना नहर प्रणाली में कुल 472 नहरें हैं जो कुल 4311 किमी को कवर करती हैं। आर्थिक सर्वेक्षण 2020-21 के अनुसार, भाखड़ा नहर प्रणाली राज्य की सबसे बड़ी नहर प्रणाली है जिसकी कुल लंबाई 5867 किमी है और इसमें 521 चैनल हैं।",
        contentEnglish: "As per Economic Survey 2020-21, Haryana has developed an extensive canal network consisting of 1521 channels which have spread in an area of 14125 kms. The state's canal system consists of two major water systems, the Western Yamuna Canal System and the Bhakra Canal System. As per the Economic Survey 2020-21, the Western Yamuna Canal system has total 472 canals covering the total of 4311 km. As per Economic Survey 2020-21, Bhakra Canal System is the largest canal system in the state with a total length of 5867 kms and has 521 channels."
    };

    // Section 3: Western Yamuna Canal System
    const westernYamunaCanal = {
        titleHindi: "पश्चिमी यमुना नहर प्रणाली",
        titleEnglish: "Western Yamuna Canal System",
        contentHindi: "यह नहर 1879 में ताजेवाला में यमुना के दाएं किनारे से शुरू हुई थी। यह राज्य की सबसे पुरानी नहर है। इसका निर्माण मूल रूप से फिरोज शाह तुगलक ने करवाया था। इस नहर और इसकी वितरिकाओं की कुल लंबाई 3226 किमी है और यह राज्य के अंबाला, कुरुक्षेत्र, करनाल, सोनीपत, पानीपत, रोहतक, हिसार, सिरसा और जींद जिलों में लगभग 4 लाख हेक्टेयर भूमि की सिंचाई करती है। यह दिल्ली और राजस्थान के लगभग 1 लाख हेक्टेयर भूमि की भी सिंचाई करती है। वर्तमान में, पश्चिमी यमुना नहर राज्य के हाथनीकुंड बैराज से निकलती है।",
        contentEnglish: "It was started from the right bank of the Yamuna at Tajewala in 1879. It is the oldest canal in the state. It was originally built by Feroz Shah Tughlaq. The total length of the canal along with its distributaries is 3226 kms and it irrigates about 4 lakh hectare of land in Ambala, Kurukshetra, Karnal, Sonipat, Panipat, Rohtak, Hisar, Sirsa and Jind districts of the state. It also irrigates around 1 lakh hectare land of Delhi and Rajasthan. Currently, the Western Yamuna Canal originates from the Hathnikund Barrage of the state."
    };

    // Section 3a: Branches of Western Yamuna Canal
    const westernYamunaBranches = [
        {
            name: "Sirsa Branch Canal",
            nameHindi: "सिरसा शाखा नहर",
            details: "This canal provides irrigation facilities in Jind, Fatehabad and Sirsa. It was constructed in 1896 and it is the longest branch of Western Yamuna Canal System.",
            detailsHindi: "यह नहर जींद, फतेहाबाद और सिरसा में सिंचाई सुविधाएं प्रदान करती है। इसका निर्माण 1896 में हुआ था और यह पश्चिमी यमुना नहर प्रणाली की सबसे लंबी शाखा है।"
        },
        {
            name: "Bahalaut Branch Canal",
            nameHindi: "बहलौत शाखा नहर",
            details: "It is a sub-branch of Delhi branch of Western Yamuna Canal which flows from Khubru village to Jhajjar district. The Jhajjar canal is a sub-canal of the Bhalaut branch.",
            detailsHindi: "यह पश्चिमी यमुना नहर की दिल्ली शाखा की एक उप-शाखा है जो खुबरू गाँव से झज्जर जिले तक बहती है। झज्जर नहर भलौत शाखा की एक उप-नहर है।"
        },
        {
            name: "Barwala Branch Canal",
            nameHindi: "बरवाला शाखा नहर",
            details: "It is a sub-branch of Sirsa branch of Western Yamuna Canal. The canal provides water to Hisar district.",
            detailsHindi: "यह पश्चिमी यमुना नहर की सिरसा शाखा की एक उप-शाखा है। यह नहर हिसार जिले को पानी प्रदान करती है।"
        },
        {
            name: "Hansi Branch Canal",
            nameHindi: "हांसी शाखा नहर",
            details: "The canal was remodelled in 1959 but originally it was built in 1825. One of its main branch, Bhutana canal provides water to the Hansi area of Hisar district. This canal originates from paleochannel of Chautang river.",
            detailsHindi: "नहर का पुनर्निर्माण 1959 में किया गया था लेकिन मूल रूप से इसका निर्माण 1825 में हुआ था। इसकी एक मुख्य शाखा, भूटाना नहर हिसार जिले के हांसी क्षेत्र को पानी प्रदान करती है। यह नहर चौतंग नदी के प्राचीन चैनल से निकलती है।"
        },
        {
            name: "Jind Branch Canal",
            nameHindi: "जींद शाखा नहर",
            details: "It flows through the Jind district of the state. Rohtak canal and Bhiwani canal are its main branches. These branches provides the water to Rohtak and Bhiwani districts for irrigation and other activities.",
            detailsHindi: "यह राज्य के जींद जिले से होकर बहती है। रोहतक नहर और भिवानी नहर इसकी मुख्य शाखाएँ हैं। ये शाखाएँ रोहतक और भिवानी जिलों को सिंचाई और अन्य गतिविधियों के लिए पानी प्रदान करती हैं।"
        },
        {
            name: "Munak Canal",
            nameHindi: "मुनक नहर",
            details: "The Munak canal is 102 kms long. The Munak canal carries water from Munak village in Karnal to Haidarpur in Delhi. It is one of the main sources of drinking water for Delhi. An MoU was signed between Haryana and Delhi in 1996 for the construction of Munak canal. The project was completed in 2012.",
            detailsHindi: "मुनक नहर 102 किमी लंबी है। मुनक नहर करनाल के मुनक गाँव से दिल्ली के हैदरपुर तक पानी ले जाती है। यह दिल्ली के लिए पेयजल के मुख्य स्रोतों में से एक है। मुनक नहर के निर्माण के लिए 1996 में हरियाणा और दिल्ली के बीच एक समझौता ज्ञापन पर हस्ताक्षर किए गए थे। यह परियोजना 2012 में पूरी हुई थी।"
        }
    ];

    // Section 4: Bhakra Canal System
    const bhakraCanal = {
        titleHindi: "भाखड़ा नहर प्रणाली",
        titleEnglish: "Bhakra Canal System",
        contentHindi: "भाखड़ा नहर सतलुज नदी पर नंगल बांध बनाकर बनाई गई है। यह पंजाब, हरियाणा और राजस्थान की सिंचाई करती है। यह नहर इन तीन राज्यों की एक संयुक्त परियोजना है और उत्तरी भारत के एक बड़े हिस्से की सिंचाई करती है। भाखड़ा नहर तोहाना के पास हरियाणा में प्रवेश करती है और हिसार, रोहतक, फतेहाबाद और सिरसा जिलों के बड़े हिस्सों की सिंचाई करती है। इसकी मुख्य शाखाएँ रतिया, रोड़ी, बरवाला और फतेहाबाद शाखाएँ हैं। भाखड़ा नहर और पश्चिमी यमुना नहर पश्चिमी यमुना फीडर परियोजना के माध्यम से जुड़ी हुई हैं। फीडर परियोजना पश्चिमी हरियाणा के शुष्क क्षेत्र में गर्मियों के महीनों के दौरान पानी की आपूर्ति सुनिश्चित करती है। पश्चिमी यमुना फीडर परियोजना की दो शाखाएँ हैं - नरवाना लिंक नहर और बरवाला लिंक नहर। बरवाला लिंक गर्मियों में पश्चिमी यमुना नहर से और वर्ष के अंत में भाखड़ा नहर से पानी प्राप्त करती है। नरवाना लिंक नहर की क्षमता 2700 क्यूब्स है और बरवाला लिंक नहर की क्षमता 1700 क्यूब्स है।",
        contentEnglish: "The Bhakra canal is built on Sutlej river by constructing Nangal dam. It irrigates Punjab, Haryana and Rajasthan. The canal is a combined project of these three states and irrigates a large part of Northern India. The Bhakra canal enters Haryana near Tohana and irrigates large parts of Hisar, Rohtak, Fatehabad and Sirsa districts. Its main branches are the Ratia, the Rori, the Barwala and the Fatehabad branch. The Bhakra canal and Western Yamuna canal are linked through the Western Yamuna Feeder Project. The feeder project ensures water supply during summer months in the arid region of Western Haryana. Western Yamuna Feeder Project has two branches - Narwana Link Canal and Barwala Link Canal. Barwala link gets water from Western Yamuna canal in summer and from Bhakra canal at the end of the year. Narwana link canal has a capacity of 2700 cubes and Barwala link canal has a capacity of 1700 cubes."
    };

    // Section 5: Other Canal Projects
    const otherCanals = [
        {
            name: "Gurugram Canal Project",
            nameHindi: "गुरुग्राम नहर परियोजना",
            details: "This canal takes off from Okhla (Delhi) by building a dam on Yamuna river. The construction work of this canal was started in 1970. It was completed during the time of 10th Five Year Plan. This canal irrigates 1.2 lakh hectare land in Gurugram, Faridabad and Palwal districts.",
            detailsHindi: "यह नहर यमुना नदी पर बांध बनाकर ओखला (दिल्ली) से निकलती है। इस नहर का निर्माण कार्य 1970 में शुरू हुआ था। यह 10वीं पंचवर्षीय योजना के दौरान पूरा हुआ था। यह नहर गुरुग्राम, फरीदाबाद और पलवल जिलों में 1.2 लाख हेक्टेयर भूमि की सिंचाई करती है।"
        },
        {
            name: "Jawaharlal Canal and Bhiwani Canal",
            nameHindi: "जवाहरलाल नहर और भिवानी नहर",
            details: "These two small canals are drawn out from Bhakra Canal System. Jawaharlal canal irrigates the area of Sonipat district and Bhiwani canal irrigates the area of Bhiwani district.",
            detailsHindi: "ये दो छोटी नहरें भाखड़ा नहर प्रणाली से निकाली गई हैं। जवाहरलाल नहर सोनीपत जिले के क्षेत्र की सिंचाई करती है और भिवानी नहर भिवानी जिले के क्षेत्र की सिंचाई करती है।"
        },
        {
            name: "Agra Canal",
            nameHindi: "आगरा नहर",
            details: "This canal draws water from Yamuna river and starts from Okhla Barrage near Delhi. This canal irrigates the area of Agra and Mathura in Uttar Pradesh, Bharatpur in Rajasthan and Faridabad in Haryana.",
            detailsHindi: "यह नहर यमुना नदी से पानी लेती है और दिल्ली के पास ओखला बैराज से शुरू होती है। यह नहर उत्तर प्रदेश में आगरा और मथुरा, राजस्थान में भरतपुर और हरियाणा में फरीदाबाद के क्षेत्र की सिंचाई करती है।"
        }
    ];

    // Section 6: Sutlej-Yamuna Link Project
    const sylProject = {
        titleHindi: "सतलुज-यमुना लिंक परियोजना (SYL)",
        titleEnglish: "Sutlej-Yamuna Link Project (SYL)",
        contentHindi: "सतलुज-यमुना लिंक परियोजना जिसे SARYU या SYL के रूप में जाना जाता है, नदियों सतलुज और यमुना को जोड़ने के लिए एक प्रस्तावित परियोजना है। राज्य में रावी और ब्यास नदियों के पानी को मोड़ने के लिए सतलुज-यमुना लिंक (SYL) नहर का निर्माण किया जा रहा है। यह परियोजना 214 किमी लंबी है जिसमें 92 किमी हरियाणा में और 122 किमी पंजाब में फैली हुई है। यह परियोजना हरियाणा की जीवन रेखा है। लिंक नहर का निर्माण हरियाणा और पंजाब के बीच कानूनी विवादों के कारण रोका हुआ है।",
        contentEnglish: "Sutlej-Yamuna Link Project known as SARYU or SYL is a proposed project to link the rivers Sutlej and Yamuna. Sutlej-Yamuna Link (SYL) canal is being constructed in the state to divert the water of Ravi and Beas rivers. The project is 214 kms long in which 92 km is expanded in Haryana and 122 kms in Punjab. This project is the lifeline of Haryana. The construction of the link canal is on hold due to legal disputes between Haryana and Punjab."
    };

    // Section 7: Lift Irrigation Projects
    const liftIrrigationOverview = {
        titleHindi: "लिफ्ट सिंचाई परियोजनाएं",
        titleEnglish: "Lift Irrigation Projects",
        contentHindi: "लिफ्ट सिंचाई परियोजनाएं हरियाणा के उन क्षेत्रों में स्थापित की गई हैं जो आम तौर पर पहाड़ी और शुष्क क्षेत्र हैं। हरियाणा का दक्षिणी और पश्चिमी भाग राजस्थान की अरावली पहाड़ियों का एक विस्तार है। यह क्षेत्र शुष्क है। इन क्षेत्रों में लिफ्ट सिंचाई प्रणाली का उपयोग किया जाता है जो कृषि के लिए बहुत सहायक है। हरियाणा में, लिफ्ट सिंचाई प्रणाली के तहत 493 नहरें हैं, जो 3702 किमी की लंबाई को कवर करती हैं।",
        contentEnglish: "The lift irrigation projects are installed in those regions of Haryana which are generally hilly and dry region. The Southern and Western part of Haryana is an offshoot of Aravalli hills of Rajasthan. The region is dry. Lift irrigation system is used in these areas which is very helpful for agriculture. In Haryana, there are 493 canals under lift irrigation system, covering a length of 3702 kms."
    };

    // Section 7a: Major Lift Irrigation Projects
    const liftIrrigationProjects = [
        {
            name: "Jui Canal Project",
            nameHindi: "जुई नहर परियोजना",
            details: "This Lift Irrigation Scheme is designed to irrigate the upper area of Bhiwani and adjoining areas. This 170 kms long canal irrigates about 32 thousand hectare of land. The Jui Canal Project was started in 1969 and is successfully running in Haryana.",
            detailsHindi: "यह लिफ्ट सिंचाई योजना भिवानी के ऊपरी क्षेत्र और आसपास के क्षेत्रों की सिंचाई के लिए डिज़ाइन की गई है। यह 170 किमी लंबी नहर लगभग 32 हजार हेक्टेयर भूमि की सिंचाई करती है। जुई नहर परियोजना 1969 में शुरू की गई थी और हरियाणा में सफलतापूर्वक चल रही है।"
        },
        {
            name: "Jawaharlal Nehru Lift Irrigation Project",
            nameHindi: "जवाहरलाल नेहरू लिफ्ट सिंचाई परियोजना",
            details: "This irrigation project is built along the Bhakra canal. This project was first initiated in 1976 in the dry region of Mahendragarh district. It irrigates the agricultural land areas of Mahendragarh and Bhiwani districts. The project was specially helpful in saving Kharif crops during the drought of 1987.",
            detailsHindi: "यह सिंचाई परियोजना भाखड़ा नहर के किनारे बनाई गई है। यह परियोजना पहली बार 1976 में महेंद्रगढ़ जिले के शुष्क क्षेत्र में शुरू की गई थी। यह महेंद्रगढ़ और भिवानी जिलों के कृषि भूमि क्षेत्रों की सिंचाई करती है। यह परियोजना 1987 के सूखे के दौरान खरीफ फसलों को बचाने में विशेष रूप से सहायक थी।"
        },
        {
            name: "Loharu Lift Irrigation Project",
            nameHindi: "लोहारू लिफ्ट सिंचाई परियोजना",
            details: "This project is also known as Indira Gandhi Irrigation Project. Canal made under this project is 225 kms long. This project provides water to the Bhiwani and Charkhi-Dadri districts.",
            detailsHindi: "यह परियोजना इंदिरा गांधी सिंचाई परियोजना के नाम से भी जानी जाती है। इस परियोजना के तहत बनाई गई नहर 225 किमी लंबी है। यह परियोजना भिवानी और चरखी-दादरी जिलों को पानी प्रदान करती है।"
        },
        {
            name: "Bhiwani Lift Irrigation Project",
            nameHindi: "भिवानी लिफ्ट सिंचाई परियोजना",
            details: "It is also known as Virendra Narayan Chakravarti Project. Canal made under this project is 200 kms long. This project irrigates about 1 lakh hectare of land in Bhiwani.",
            detailsHindi: "यह वीरेंद्र नारायण चक्रवर्ती परियोजना के नाम से भी जानी जाती है। इस परियोजना के तहत बनाई गई नहर 200 किमी लंबी है। यह परियोजना भिवानी में लगभग 1 लाख हेक्टेयर भूमि की सिंचाई करती है।"
        },
        {
            name: "Nangal Lift Irrigation Project",
            nameHindi: "नंगल लिफ्ट सिंचाई परियोजना",
            details: "The canal under this project is 80 kms long and constructed in two phases. The project irrigates Ambala and provides drinking water to Ambala canal and Ambala Cantt areas.",
            detailsHindi: "इस परियोजना के तहत नहर 80 किमी लंबी है और दो चरणों में बनाई गई है। यह परियोजना अंबाला की सिंचाई करती है और अंबाला नहर और अंबाला छावनी क्षेत्रों को पेयजल प्रदान करती है।"
        }
    ];

    // Section 8: Major Barrages and Dams
    const barragesAndDams = [
        {
            name: "Hathnikund Barrage Project",
            nameHindi: "हाथनीकुंड बैराज परियोजना",
            location: "Yamunanagar",
            details: "It is a concrete barrage located on the Yamuna river in Yamunanagar district. It was constructed to replace old Tajewala barrage. The project was constructed between October, 1996 and completed in June, 1999 at a cost of ₹220 crore. The small reservoir created by the barrage also serves as a wetland for 31 species of water bird. It became functional from 2002. The length of this barrage is 360 meters. The project diverts the excess water during the monsoon effectively to the Western and Eastern Yamuna Canals thus, preventing floods.",
            detailsHindi: "यह यमुनानगर जिले में यमुना नदी पर स्थित एक कंक्रीट बैराज है। इसे पुराने ताजेवाला बैराज को बदलने के लिए बनाया गया था। यह परियोजना अक्टूबर 1996 से जून 1999 के बीच 220 करोड़ रुपये की लागत से बनाई गई थी। बैराज द्वारा बनाया गया छोटा जलाशय जलीय पक्षियों की 31 प्रजातियों के लिए आर्द्रभूमि के रूप में भी कार्य करता है। यह 2002 से कार्यात्मक हो गया। इस बैराज की लंबाई 360 मीटर है। यह परियोजना मानसून के दौरान अतिरिक्त पानी को प्रभावी ढंग से पश्चिमी और पूर्वी यमुना नहरों की ओर मोड़ देती है, जिससे बाढ़ को रोका जा सकता है।"
        },
        {
            name: "Narwana Irrigation Project",
            nameHindi: "नरवाना सिंचाई परियोजना",
            location: "Jind",
            details: "For the expansion of irrigation facilities in Narwana area, State Government had approved the project to connect Salwan feeder with Dhamtan distributory. The Narwana Irrigation Project is 37500 feet long. This project provides water for irrigation to Kaloda Khurel, Bhikhewala, Tulian kalan, Sulehra areas of the state.",
            detailsHindi: "नरवाना क्षेत्र में सिंचाई सुविधाओं के विस्तार के लिए, राज्य सरकार ने सलवान फीडर को धमतान वितरिका से जोड़ने की परियोजना को मंजूरी दी थी। नरवाना सिंचाई परियोजना 37500 फीट लंबी है। यह परियोजना राज्य के कलोदा खुरेल, भिखेवाला, तुलियन कलां, सुलेहरा क्षेत्रों में सिंचाई के लिए पानी प्रदान करती है।"
        },
        {
            name: "Tajewala Barrage",
            nameHindi: "ताजेवाला बैराज",
            location: "Yamunanagar",
            details: "It was constructed in 1873 across the Yamuna river, in Yamunanagar district. It regulated the flow of the Yamuna for irrigation in Uttar Pradesh and Haryana through Western Yamuna Canal and Eastern Yamuna Canal. These two canals originated from Yamuna river at Yamunanagar district. It was 24.73m in height and 360m in length. It was decommissioned after the proper functioning of Hathnikund barrage.",
            detailsHindi: "इसका निर्माण 1873 में यमुनानगर जिले में यमुना नदी पर किया गया था। यह पश्चिमी यमुना नहर और पूर्वी यमुना नहर के माध्यम से उत्तर प्रदेश और हरियाणा में सिंचाई के लिए यमुना के प्रवाह को नियंत्रित करता था। ये दोनों नहरें यमुनानगर जिले में यमुना नदी से निकलती थीं। इसकी ऊंचाई 24.73 मीटर और लंबाई 360 मीटर थी। हाथनीकुंड बैराज के उचित कामकाज के बाद इसे बंद कर दिया गया था।"
        }
    ];

    // Section 9: Major Dams of Haryana
    const majorDams = [
        {
            name: "Pathrala Dam",
            nameHindi: "पठराला बांध",
            location: "Yamunanagar",
            details: "This dam was built in 1875-76. It is constructed on Somb river. It is located near Dadupur village of Yamunanagar district. The length of this is 460m and height is 34m.",
            detailsHindi: "यह बांध 1875-76 में बनाया गया था। यह सोम्ब नदी पर बनाया गया है। यह यमुनानगर जिले के दादुपुर गाँव के पास स्थित है। इसकी लंबाई 460 मीटर और ऊंचाई 34 मीटर है।"
        },
        {
            name: "Ottu Dam",
            nameHindi: "ओट्टू बांध",
            location: "Sirsa",
            details: "This dam is built on the Ghaggar-Hakra river in Haryana. It is about 8 miles from Sirsa. It is also known as Ottu Weir and Ottu Head. The Ottu dam was constructed in 1896 by the joint effort of the Princely State of Bikaner and British Government. It creates a large water reservoir out of the formerly-small Dhanur lake, located near the village of Ottu in Sirsa district. It provides water to two Ghaggar canals (the Northern Ghaggar Canal and the Southern Ghaggar Canal) that provide water to Northern Rajasthan state for irrigation. In 2002, a new tourist complex was inaugurated at the barrage and it was given the honorary name of Chaudhary Devi Lal Weir to commemorate the former Chief Minister of Haryana, Chaudhary Devi Lal. The Dhanur lake reservoir is now often referred to simply as the Ottu Reservoir.",
            detailsHindi: "यह बांध हरियाणा में घग्गर-हकरा नदी पर बनाया गया है। यह सिरसा से लगभग 8 मील दूर है। इसे ओट्टू वियर और ओट्टू हेड के नाम से भी जाना जाता है। ओट्टू बांध का निर्माण 1896 में बीकानेर रियासत और ब्रिटिश सरकार के संयुक्त प्रयास से किया गया था। यह सिरसा जिले के ओट्टू गाँव के पास स्थित पहले से छोटी धनुर झील से एक बड़ा जलाशय बनाता है। यह दो घग्गर नहरों (उत्तरी घग्गर नहर और दक्षिणी घग्गर नहर) को पानी प्रदान करता है जो उत्तरी राजस्थान राज्य को सिंचाई के लिए पानी प्रदान करती हैं। 2002 में, बैराज पर एक नया पर्यटन परिसर शुरू किया गया था और हरियाणा के पूर्व मुख्यमंत्री चौधरी देवी लाल की स्मृति में इसे चौधरी देवी लाल वियर का मानद नाम दिया गया था। धनुर झील जलाशय को अब अक्सर केवल ओट्टू जलाशय के रूप में जाना जाता है।"
        },
        {
            name: "Anangpur Dam",
            nameHindi: "अनंगपुर बांध",
            location: "Faridabad",
            details: "Anangpur dam is located near Anangpur village in the district of Faridabad. It is also known as Gravity Dam. This dam was constructed by King Anangpal of Tomar Dynasty in 8th century. It is an excellent example of Indian Hydraulic Engineering.",
            detailsHindi: "अनंगपुर बांध फरीदाबाद जिले के अनंगपुर गाँव के पास स्थित है। इसे ग्रेविटी डैम के नाम से भी जाना जाता है। यह बांध 8वीं शताब्दी में तोमर वंश के राजा अनंगपाल द्वारा बनवाया गया था। यह भारतीय जल इंजीनियरिंग का एक उत्कृष्ट उदाहरण है।"
        },
        {
            name: "Kaushalya Dam",
            nameHindi: "कौशल्या बांध",
            location: "Panchkula",
            details: "Kaushalya dam is constructed on Kaushalya river which is a tributary of Ghaggar-Hakra river. This dam is 700m in length and 34m in height. Its construction began in 2008 and was completed in 2012. A sum of ₹118 crore was spent on the construction of this dam. It is located at Pinjore in the district of Panchkula. Total catchment area of this dam is 75 sq km. This dam controls the flow of excess water in Kaushalya and Ghaggar rivers during monsoon. It provides water to Panchkula district. It also helps in conservation of underground water level.",
            detailsHindi: "कौशल्या बांध कौशल्या नदी पर बनाया गया है जो घग्गर-हकरा नदी की एक सहायक नदी है। यह बांध 700 मीटर लंबा और 34 मीटर ऊंचा है। इसका निर्माण 2008 में शुरू हुआ और 2012 में पूरा हुआ। इस बांध के निर्माण पर 118 करोड़ रुपये की राशि खर्च की गई। यह पंचकूला जिले के पिंजौर में स्थित है। इस बांध का कुल जलग्रहण क्षेत्र 75 वर्ग किमी है। यह बांध मानसून के दौरान कौशल्या और घग्गर नदियों में अतिरिक्त पानी के प्रवाह को नियंत्रित करता है। यह पंचकूला जिले को पानी प्रदान करता है। यह भूजल स्तर के संरक्षण में भी मदद करता है।"
        },
        {
            name: "Masani Dam",
            nameHindi: "मसानी बांध",
            location: "Rewari",
            details: "This dam is constructed on Sahibi river which is a tributary of Yamuna river. It is located in Rewari. It prevents flooding of the nearby areas of Sahibi river during monsoons in the district of Rewari.",
            detailsHindi: "यह बांध साहिबी नदी पर बनाया गया है जो यमुना नदी की एक सहायक नदी है। यह रेवाड़ी में स्थित है। यह रेवाड़ी जिले में मानसून के दौरान साहिबी नदी के आसपास के क्षेत्रों में बाढ़ को रोकता है।"
        }
    ];

    // Section 10: Other Irrigation Projects Table
    const otherIrrigationProjects = [
        { project: "Narwana Lift Irrigation Project", area: "Jind" },
        { project: "Nangal Lift Irrigation Project", area: "Ambala" },
        { project: "Loharu Lift Irrigation Project (also known as Indira Gandhi Canal Project)", area: "Bhiwani, Mahendragarh and Jhajjar" },
        { project: "Mewat Canal Irrigation Project", area: "Mewat" },
        { project: "Dadupur, Shahbad Canal Irrigation Project", area: "Yamunanagar, Ambala and Kurukshetra" }
    ];

    // Section 11: Region-Wise Irrigation System
    const regionWiseIrrigation = [
        {
            region: "North-Eastern Region",
            regionHindi: "उत्तर-पूर्वी क्षेत्र",
            districts: "Ambala, Shivalik hills",
            details: "The North-Eastern parts include the plains of Ambala and the Shivalik hills. This region receives sufficient rainfall. The plains of this region are fertile. Rainfall irrigates the fields in most of the areas of this region. After the construction of Nangal Lift Irrigation Scheme, canal irrigation was made possible in Ambala district. Rainfall and canals are main means of irrigation in this region. This scheme covers 45000 acres of land in Ambala district.",
            detailsHindi: "उत्तर-पूर्वी भागों में अंबाला के मैदान और शिवालिक पहाड़ियाँ शामिल हैं। यह क्षेत्र पर्याप्त वर्षा प्राप्त करता है। इस क्षेत्र के मैदान उपजाऊ हैं। इस क्षेत्र के अधिकांश भागों में वर्षा से खेतों की सिंचाई होती है। नंगल लिफ्ट सिंचाई योजना के निर्माण के बाद, अंबाला जिले में नहर सिंचाई संभव हो पाई। इस क्षेत्र में वर्षा और नहरें सिंचाई के मुख्य साधन हैं। यह योजना अंबाला जिले में 45000 एकड़ भूमि को कवर करती है।"
        },
        {
            region: "Central Region",
            regionHindi: "मध्य क्षेत्र",
            districts: "Kurukshetra, Karnal, Jind, Rohtak, Panipat, Sonipat",
            details: "The Central region of the state comprises of Kurukshetra, Karnal, Jind, Rohtak, Panipat and Sonipat districts. Rainfall occurs in adequate quantities in these districts. Maize and rice are grown here, because these crops need large volume of water. Rabi crops are grown with the help of rainfall, tubewells, wells and canals.",
            detailsHindi: "राज्य के मध्य क्षेत्र में कुरुक्षेत्र, करनाल, जींद, रोहतक, पानीपत और सोनीपत जिले शामिल हैं। इन जिलों में पर्याप्त मात्रा में वर्षा होती है। यहाँ मक्का और चावल उगाए जाते हैं, क्योंकि इन फसलों को बड़ी मात्रा में पानी की आवश्यकता होती है। रबी की फसलें वर्षा, ट्यूबवेल, कुओं और नहरों की सहायता से उगाई जाती हैं।"
        },
        {
            region: "South-Eastern Region",
            regionHindi: "दक्षिण-पूर्वी क्षेत्र",
            districts: "Gurugram, Faridabad",
            details: "This area comprises the districts of Gurugram and Faridabad. Rainfall is less than normal in this area. The major crops of this region are maize, barley, millet, oat, wheat and gram. These crops are irrigated by canals and tubewells.",
            detailsHindi: "इस क्षेत्र में गुरुग्राम और फरीदाबाद जिले शामिल हैं। इस क्षेत्र में वर्षा सामान्य से कम होती है। इस क्षेत्र की प्रमुख फसलें मक्का, जौ, बाजरा, जई, गेहूं और चना हैं। इन फसलों की सिंचाई नहरों और ट्यूबवेल द्वारा की जाती है।"
        },
        {
            region: "Sandy Region",
            regionHindi: "रेतीला क्षेत्र",
            districts: "Hisar, Sirsa, Mahendragarh, Bhiwani",
            details: "This region comprises the districts of Hisar, Sirsa, Mahendragarh and Bhiwani. Rainfall is almost nil in this area. Main crops of this region are barley, millet, gram, maize and wheat. Here farmers use camels for agriculture. Tubewells and water sprinklers are used to irrigate the fields.",
            detailsHindi: "इस क्षेत्र में हिसार, सिरसा, महेंद्रगढ़ और भिवानी जिले शामिल हैं। इस क्षेत्र में वर्षा लगभग शून्य है। इस क्षेत्र की मुख्य फसलें जौ, बाजरा, चना, मक्का और गेहूं हैं। यहाँ किसान कृषि के लिए ऊंटों का उपयोग करते हैं। खेतों की सिंचाई के लिए ट्यूबवेल और पानी के स्प्रिंकलर का उपयोग किया जाता है।"
        }
    ];

    // Section 12: Micro Irrigation
    const microIrrigation = {
        titleHindi: "सूक्ष्म सिंचाई",
        titleEnglish: "Micro Irrigation",
        contentHindi: "सूक्ष्म सिंचाई योजना 'प्रति बूंद अधिक फसल' के तहत 2019-20 में 550.33 हेक्टेयर क्षेत्र को कवर किया गया है, जिसमें 386.60 लाख रुपये का व्यय हुआ है।",
        contentEnglish: "Micro Irrigation Scheme 'Per Drop More Crop' an area of 550.33 hectare has been covered in 2019-20 with an expenditure of 386.60 lakhs."
    };

    // Section 13: Government Initiatives for Irrigation Development
    const govtInitiatives = [
        {
            name: "Atal Bhujal Yojana",
            nameHindi: "अटल भूजल योजना",
            details: "This scheme was launched on 25th December, 2019 on the 95th birth anniversary of Atal Bihari Vajpayee. The scheme aims to improve the ground water management by developing sustainable ground water resources. For this, an outlay of ₹6000 crore is to be implemented over a period of 5 years (2020-21 to 2024-25).",
            detailsHindi: "यह योजना 25 दिसंबर, 2019 को अटल बिहारी वाजपेयी की 95वीं जयंती पर शुरू की गई थी। यह योजना सतत भूजल संसाधनों के विकास द्वारा भूजल प्रबंधन में सुधार करना चाहती है। इसके लिए 6000 करोड़ रुपये का परिव्यय 5 वर्षों (2020-21 से 2024-25) की अवधि में कार्यान्वित किया जाना है।"
        },
        {
            name: "On Farm Water Management",
            nameHindi: "ऑन फार्म जल प्रबंधन",
            details: "Under this scheme, State Government encourages various irrigation systems by providing financial assistance to farmers. Farmers are assisted for laying of sprinkler irrigation, drip irrigation and Underground Pipe Line System (UGPL). This scheme encouraged water conservation in the state.",
            detailsHindi: "इस योजना के तहत, राज्य सरकार किसानों को वित्तीय सहायता प्रदान करके विभिन्न सिंचाई प्रणालियों को प्रोत्साहित करती है। किसानों को स्प्रिंकलर सिंचाई, ड्रिप सिंचाई और अंडरग्राउंड पाइप लाइन सिस्टम (UGPL) बिछाने के लिए सहायता प्रदान की जाती है। इस योजना ने राज्य में जल संरक्षण को प्रोत्साहित किया।"
        },
        {
            name: "Sprinkler Irrigation System",
            nameHindi: "स्प्रिंकलर सिंचाई प्रणाली",
            details: "Sprinkler irrigation system is encouraged in the South and South-Western parts of Haryana. These are sandy areas where ground water level is up to 200 feet. Sprinkler system is considered the best system of irrigation in these areas. It uses water judiciously, fulfilling the irrigational needs at the same time. The sprinkler system is encouraged in the districts of Rewari, Mahendragarh, Charkhi-Dadri, Gurugram, Bhiwani and Hisar from 1970. The sprinkler system is beneficial for the growth of crops like wheat, mustard and gram. By laying Underground Pipe Line System (UGPL) for sprinklers, water losses are minimised, energy is saved and additional area can be put under cultivation. The pattern of assistance is 60% subsidy to small and medium farmers and 50% subsidy to farmers with large land areas.",
            detailsHindi: "स्प्रिंकलर सिंचाई प्रणाली को हरियाणा के दक्षिण और दक्षिण-पश्चिमी भागों में प्रोत्साहित किया जाता है। ये रेतीले क्षेत्र हैं जहाँ भूजल स्तर 200 फीट तक है। इन क्षेत्रों में स्प्रिंकलर प्रणाली को सिंचाई की सबसे अच्छी प्रणाली माना जाता है। यह पानी का विवेकपूर्ण उपयोग करता है, साथ ही सिंचाई की आवश्यकताओं को पूरा करता है। स्प्रिंकलर प्रणाली को 1970 से रेवाड़ी, महेंद्रगढ़, चरखी-दादरी, गुरुग्राम, भिवानी और हिसार जिलों में प्रोत्साहित किया जाता है। स्प्रिंकलर प्रणाली गेहूं, सरसों और चना जैसी फसलों की वृद्धि के लिए फायदेमंद है। स्प्रिंकलर के लिए अंडरग्राउंड पाइप लाइन सिस्टम (UGPL) बिछाकर, पानी के नुकसान को कम किया जाता है, ऊर्जा की बचत होती है और अतिरिक्त क्षेत्र को खेती के अधीन लाया जा सकता है। सहायता का पैटर्न छोटे और मध्यम किसानों के लिए 60% सब्सिडी और बड़े भूमि क्षेत्रों वाले किसानों के लिए 50% सब्सिडी है।"
        },
        {
            name: "Drip Irrigation System",
            nameHindi: "ड्रिप सिंचाई प्रणाली",
            details: "Under this scheme, underground Pipeline System is laid to provide drip irrigation. This system is promoted for the growth of cotton and sugarcane crops. As per Economic Survey 2020-21, an area of 4819 hectare have been covered under this system by providing a subsidy of ₹29.43 crore in the state.",
            detailsHindi: "इस योजना के तहत, ड्रिप सिंचाई प्रदान करने के लिए अंडरग्राउंड पाइपलाइन प्रणाली बिछाई जाती है। यह प्रणाली कपास और गन्ने की फसलों की वृद्धि के लिए प्रोत्साहित की जाती है। आर्थिक सर्वेक्षण 2020-21 के अनुसार, राज्य में 29.43 करोड़ रुपये की सब्सिडी प्रदान करके 4819 हेक्टेयर क्षेत्र को इस प्रणाली के तहत कवर किया गया है।"
        },
        {
            name: "Underground Pipe Line System (UGPL)",
            nameHindi: "अंडरग्राउंड पाइप लाइन प्रणाली",
            details: "Studies related to underground water sources in Haryana revealed that there has been consistent decline in water tables in Karnal, Kurukshetra, Kaithal, Panipat, Sonipat and Yamunanagar. The dominant crops of this region are wheat and rice. Rice needs lot of irrigation. Moreover, about 55% areas of Haryana is affected by poor quality underground water which results in low crop production. Therefore laying of underground pipe lines is a good option. Water for irrigation from a good quality source can be transported through UGPL. Laying of UGPL system is a flagship project of the state under Rashtriya Krishi Vikas Yojana. As per Economic Survey 2020-21, so far an area of 223695 hectare has been brought under the UGPL system by utilising an amount of ₹358.21 crore.",
            detailsHindi: "हरियाणा में भूजल स्रोतों से संबंधित अध्ययनों से पता चला है कि करनाल, कुरुक्षेत्र, कैथल, पानीपत, सोनीपत और यमुनानगर में जल स्तर में लगातार गिरावट आई है। इस क्षेत्र की प्रमुख फसलें गेहूं और चावल हैं। चावल को बहुत अधिक सिंचाई की आवश्यकता होती है। इसके अलावा, हरियाणा का लगभग 55% क्षेत्र खराब गुणवत्ता वाले भूजल से प्रभावित है, जिसके परिणामस्वरूप फसल उत्पादन कम होता है। इसलिए अंडरग्राउंड पाइप लाइन बिछाना एक अच्छा विकल्प है। एक अच्छे गुणवत्ता वाले स्रोत से सिंचाई के लिए पानी को UGPL के माध्यम से ले जाया जा सकता है। UGPL प्रणाली बिछाना राष्ट्रीय कृषि विकास योजना के तहत राज्य की एक प्रमुख परियोजना है। आर्थिक सर्वेक्षण 2020-21 के अनुसार, अब तक 358.21 करोड़ रुपये की राशि का उपयोग करके 223695 हेक्टेयर क्षेत्र को UGPL प्रणाली के तहत लाया गया है।"
        },
        {
            name: "Integrated Micro Irrigation Scheme",
            nameHindi: "एकीकृत सूक्ष्म सिंचाई योजना",
            details: "Under Integrated Micro Irrigation Scheme, 14 different canal outlets are selected in 13 districts where solar energy based micro irrigation schemes are implemented. This scheme is undertaken by HAREDA from 2018.",
            detailsHindi: "एकीकृत सूक्ष्म सिंचाई योजना के तहत, 13 जिलों में 14 विभिन्न नहर आउटलेट का चयन किया गया है जहाँ सौर ऊर्जा आधारित सूक्ष्म सिंचाई योजनाएं कार्यान्वित की जाती हैं। यह योजना 2018 से HAREDA द्वारा की जा रही है।"
        },
        {
            name: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
            nameHindi: "प्रधानमंत्री कृषि सिंचाई योजना",
            details: "Under Per Drop More Crop component of this scheme, target is to cover 2000 hectare amounting to ₹1374.92 lakh. Government provides assistance of 85% to SC farmers, small and marginal farmers to set up irrigation practices that conserves water along with watering the crops. Under the PMKSY, district irrigation plans for all districts are finalized. The projects aim to provide end-to-end solutions in irrigation supply chain, creation of water sources, rain water harvesting, on farm application and extension services on new irrigation technologies in the state.",
            detailsHindi: "इस योजना के प्रति बूंद अधिक फसल घटक के तहत, 2000 हेक्टेयर को कवर करने का लक्ष्य है, जिसकी राशि 1374.92 लाख रुपये है। सरकार अनुसूचित जाति के किसानों, छोटे और सीमांत किसानों को सिंचाई प्रथाओं को स्थापित करने के लिए 85% सहायता प्रदान करती है जो फसलों को पानी देने के साथ-साथ पानी का संरक्षण करती है। PMKSY के तहत, सभी जिलों के लिए जिला सिंचाई योजनाएं अंतिम रूप दी जाती हैं। परियोजनाओं का उद्देश्य सिंचाई आपूर्ति श्रृंखला में अंत-से-अंत समाधान, जल स्रोतों का निर्माण, वर्षा जल संचयन, फार्म पर अनुप्रयोग और राज्य में नई सिंचाई प्रौद्योगिकियों पर विस्तार सेवाएं प्रदान करना है।"
        }
    ];

    // Section 14: Government Departments for Irrigation
    const govtDepartments = [
        {
            name: "Haryana Irrigation Research and Management Institute (HIRMI)",
            nameHindi: "हरियाणा सिंचाई अनुसंधान और प्रबंधन संस्थान",
            location: "Kurukshetra",
            details: "The institute was set up under Societies Registration Act, 1860 at Kurukshetra. It aims to conserve and efficiently manage the water resources through research and training.",
            detailsHindi: "यह संस्थान सोसाइटी पंजीकरण अधिनियम, 1860 के तहत कुरुक्षेत्र में स्थापित किया गया था। इसका उद्देश्य अनुसंधान और प्रशिक्षण के माध्यम से जल संसाधनों का संरक्षण और कुशलतापूर्वक प्रबंधन करना है।"
        },
        {
            name: "Irrigation and Water Resources Department (IWRD)",
            nameHindi: "सिंचाई एवं जल संसाधन विभाग",
            location: "Panchkula",
            details: "The head office of this department is located in Panchkula district. The department is primarily responsible for construction, operation and maintenance of canals and drainage network. It also supplies water for irrigation, drinking, pond-filling, industrial uses, etc.",
            detailsHindi: "इस विभाग का मुख्यालय पंचकूला जिले में स्थित है। विभाग मुख्य रूप से नहरों और जल निकासी नेटवर्क के निर्माण, संचालन और रखरखाव के लिए जिम्मेदार है। यह सिंचाई, पेयजल, तालाब भरने, औद्योगिक उपयोग आदि के लिए भी पानी की आपूर्ति करता है।"
        },
        {
            name: "Command Area Development Authority (CADA)",
            nameHindi: "कमांड क्षेत्र विकास प्राधिकरण",
            location: "Haryana",
            details: "CADA, Haryana has installed Pilot projects of micro irrigation in 14 villages of 13 districts. The total cost of the project is ₹30.60 crore covering 2231 hectare approx.",
            detailsHindi: "CADA, हरियाणा ने 13 जिलों के 14 गांवों में सूक्ष्म सिंचाई की पायलट परियोजनाएं स्थापित की हैं। परियोजना की कुल लागत 30.60 करोड़ रुपये है जो लगभग 2231 हेक्टेयर को कवर करती है।"
        },
        {
            name: "Haryana State Drought Relief and Flood Control Board",
            nameHindi: "हरियाणा राज्य सूखा राहत एवं बाढ़ नियंत्रण बोर्ड",
            location: "Haryana",
            details: "The board is set up to control the excess water in the rivers during monsoon. For this, reservoirs are developed around those rivers that remain dry most of the year but swell up in the rainy season.",
            detailsHindi: "बोर्ड मानसून के दौरान नदियों में अतिरिक्त पानी को नियंत्रित करने के लिए स्थापित किया गया है। इसके लिए, उन नदियों के आसपास जलाशय विकसित किए जाते हैं जो वर्ष के अधिकांश समय सूखी रहती हैं लेकिन बरसात के मौसम में उफान पर आ जाती हैं।"
        },
        {
            name: "Irrigation Efficiency Fund",
            nameHindi: "सिंचाई दक्षता कोष",
            location: "Haryana",
            details: "The fund is created to increase the efficiency of irrigation in Haryana by NABARD. It includes 36 blocks which are identified in the state where ground water level is too low or critical. Plans are drawn to recharge the ground water. The scheme was implemented from 2018-19.",
            detailsHindi: "यह कोष NABARD द्वारा हरियाणा में सिंचाई की दक्षता बढ़ाने के लिए बनाया गया है। इसमें राज्य में 36 ब्लॉक शामिल हैं जहाँ भूजल स्तर बहुत कम या गंभीर है। भूजल को रिचार्ज करने के लिए योजनाएं बनाई जाती हैं। यह योजना 2018-19 से कार्यान्वित की गई थी।"
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
                        {language === "hindi" ? "सिंचाई - हरियाणा सरकार" : "Irrigation - Government of Haryana"}
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

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">60%</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "सिंचित कृषि भूमि" : "Irrigated Agril Land"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">51.12%</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "ट्यूबवेल सिंचाई" : "Tubewell Irrigation"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">48.3%</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "नहर सिंचाई" : "Canal Irrigation"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">5672</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "सिंचित भूमि (हे.)" : "Irrigated Land (ha)"}</div>
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

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">1521</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "चैनल" : "Channels"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">14,125</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "कुल लंबाई (किमी)" : "Total Length (km)"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">5,867</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "भाखड़ा नहर लंबाई" : "Bhakra Canal Length"}</div>
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
                            <div className="text-2xl font-bold text-blue-600">60%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "सिंचित कृषि भूमि" : "Irrigated Agril Land"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">51.12%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "ट्यूबवेल सिंचाई" : "Tubewell Irrigation"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">48.3%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "नहर सिंचाई" : "Canal Irrigation"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">14,125</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "नहर नेटवर्क (किमी)" : "Canal Network (km)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">1521</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "चैनल" : "Channels"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">214</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "SYL नहर लंबाई (किमी)" : "SYL Canal Length (km)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">223,695</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "UGPL के तहत क्षेत्र (हे.)" : "Area under UGPL (ha)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-2xl font-bold text-blue-600">493</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "लिफ्ट सिंचाई नहरें" : "Lift Irrigation Canals"}</p>
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
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और आर्थिक सर्वेक्षण 2020-21 से स्रोतित" : "Information sourced from official Government of Haryana publications and Economic Survey 2020-21"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}