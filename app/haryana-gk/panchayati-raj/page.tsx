"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    ChevronDown,
    HelpCircle,
    ArrowLeft,
    Home,
    Building,
    CheckCircle,
    GraduationCap,
    Scale,
    Trophy,
    Handshake,
    IndianRupee,
    BuildingIcon,
    LandmarkIcon,
    Layers,
    Users,
    FileText,
    Zap,
    BriefcaseIcon,
    Rocket,
    Grid,
    MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaLocalSelfGovernmentPage() {
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
            questionHindi: "हरियाणा में पंचायती राज की त्रिस्तरीय प्रणाली कब लागू हुई?",
            questionEnglish: "When was the Three-Tier Panchayati Raj System implemented in Haryana?",
            answerHindi: "हरियाणा ने 1966 में एक अलग राज्य बनने के बाद त्रिस्तरीय पंचायती राज प्रणाली अपनाई थी।",
            answerEnglish: "Haryana adopted the Three-Tier Panchayati Raj System in 1966 after becoming a separate state."
        },
        {
            questionHindi: "हरियाणा पंचायती राज अधिनियम कब बना था?",
            questionEnglish: "When was the Haryana Panchayati Raj Act enacted?",
            answerHindi: "हरियाणा पंचायती राज अधिनियम 22 अप्रैल, 1994 को बनाया गया था। उस समय चौधरी भजन लाल मुख्यमंत्री थे।",
            answerEnglish: "The Haryana Panchayati Raj Act was enacted on 22nd April, 1994. Chaudhary Bhajan Lal was the Chief Minister of Haryana at that time."
        },
        {
            questionHindi: "हरियाणा में पंचायत चुनाव के लिए न्यूनतम शैक्षणिक योग्यता क्या है?",
            questionEnglish: "What is the minimum educational qualification for Panchayat elections in Haryana?",
            answerHindi: "पंचायती राज संस्थाओं में चुनाव लड़ने के लिए सामान्य वर्ग को 10वीं, महिलाओं और अनुसूचित जातियों को 8वीं और अनुसूचित जाति की महिलाओं को 5वीं पास होना आवश्यक है।",
            answerEnglish: "To contest elections in Panchayati Raj Institutions, general category candidates must be 10th pass, women and SC candidates must be 8th pass, and SC women candidates must be 5th pass."
        },
        {
            questionHindi: "हरियाणा का सबसे बड़ा और सबसे पुराना नगर निगम कौन सा है?",
            questionEnglish: "Which is the largest and oldest Municipal Corporation in Haryana?",
            answerHindi: "फरीदाबाद हरियाणा का सबसे बड़ा और सबसे पुराना नगर निगम है, जिसका गठन मई 1994 में हुआ था।",
            answerEnglish: "Faridabad is the largest and oldest Municipal Corporation of Haryana, formed in May 1994."
        },
        {
            questionHindi: "हरियाणा में पंचायतों के लिए राज्य वित्त आयोग कितने समय के लिए गठित किया जाता है?",
            questionEnglish: "For how long is the State Finance Commission constituted for Panchayats in Haryana?",
            answerHindi: "हरियाणा राज्य वित्त आयोग 5 वर्ष की अवधि के लिए गठित किया जाता है।",
            answerEnglish: "The Haryana State Finance Commission is formed for a period of 5 years."
        },
        {
            questionHindi: "हरियाणा में नगर निगम के मेयर कैसे चुने जाते हैं?",
            questionEnglish: "How is the Mayor of Municipal Corporation elected in Haryana?",
            answerHindi: "5 सितंबर, 2018 से हरियाणा में मेयर सीधे चुनावों के माध्यम से चुने जाते हैं।",
            answerEnglish: "From 5th September, 2018, the Mayors in Haryana are directly elected through elections."
        },
        {
            questionHindi: "हरियाणा में न्याय पंचायत क्या है?",
            questionEnglish: "What is Nyaya Panchayat in Haryana?",
            answerHindi: "न्याय पंचायत स्थानीय समस्याओं के समाधान के लिए बनाई जाती है। यह केवल स्थानीय समस्या का समाधान करने का प्रयास करती है और कारावास की सजा नहीं दे सकती।",
            answerEnglish: "Nyaya Panchayat is formed to solve local problems. It only tries to address the local problem and cannot assign jail term as a form of punishment."
        },
        {
            questionHindi: "हरियाणा में पंचायती राज संस्थाओं के चुनाव में किस राज्य के बाद शैक्षणिक योग्यता अनिवार्य की गई?",
            questionEnglish: "After which state did Haryana mandate educational qualification for Panchayati Raj Institutions elections?",
            answerHindi: "हरियाणा राजस्थान के बाद भारत का दूसरा राज्य बन गया, जहाँ पंचायती राज संस्थाओं में चुनाव लड़ने के लिए न्यूनतम शैक्षणिक योग्यता अनिवार्य की गई।",
            answerEnglish: "Haryana became the second state in India after Rajasthan to mandate minimum educational qualification for contesting in Panchayati Raj Institutions."
        }
    ];

    // Panchayati Raj in Haryana
    const panchayatiRajIntro = {
        titleHindi: "हरियाणा में पंचायती राज",
        titleEnglish: "Panchayati Raj in Haryana",
        contentHindi: "हरियाणा ने 1966 में एक अलग राज्य बनने के बाद त्रिस्तरीय पंचायती राज प्रणाली अपनाई। पंचायती राज प्रणाली में सुधार के लिए, हरियाणा सरकार ने 1972 में मंडू सिंह मलिक की अध्यक्षता में एक समिति का गठन किया। मंडू सिंह मलिक समिति ने जिला परिषद को भंग करने की सिफारिश की। परिणामस्वरूप, हरियाणा सरकार ने 1973 में जिला परिषद को भंग कर दिया। हरियाणा में, पंचायती राज से संबंधित संस्थाओं का चुनाव हरियाणा राज्य चुनाव आयोग द्वारा किया जाता है। हरियाणा पंचायत भवन का मुख्यालय चंडीगढ़ में है।",
        contentEnglish: "Haryana adopted the Three-Tier Panchayati Raj System in 1966 after becoming a separate state. For the improvement in Panchayati Raj System, the Haryana Government in 1972 formed a Samiti under the Chairmanship of Mandu Singh Malik. Mandu Singh Malik Samiti recommended to dissolve the Zila Parishad. As a result, Haryana Government dissolved the Zila Parishad in 1973. In Haryana, the institutions related to Panchayati Raj are elected by Haryana State Election Commission. The headquarters of Haryana Panchayat Bhawan is in Chandigarh."
    };

    // Three tiers
    const threeTiers = [
        {
            nameHindi: "ग्राम पंचायत",
            nameEnglish: "Gram Panchayat",
            descriptionHindi: "यह त्रिस्तरीय पंचायती राज प्रणाली का सबसे निचला स्तर है। ग्राम पंचायत एक शक्तिशाली निकाय है जिसका नेतृत्व सरपंच करता है। ग्राम पंचायत की सहमति के बिना कोई भी योजना या कार्य लागू नहीं किया जा सकता। ग्राम पंचायतों की आय का मुख्य स्रोत सरकार या अन्य संबंधित विभागों से अनुदान सहायता है और उनकी विभिन्न स्रोतों से अपनी आय भी होती है। ग्राम पंचायत के तीन रूप होते हैं: ग्राम सभा, पंचायत और न्याय पंचायत।",
            descriptionEnglish: "It is the lowest level of the Three-Tier Panchayati Raj System. Gram Panchayat is a powerful body headed by a Sarpanch. No scheme or work can be implemented without consent of Gram Panchayat. The main source of income of Gram Panchayats are grants-in-aid from government or other concerned departments and they also have own income from various sources. Gram Panchayat have three forms: Gram Sabha, Panchayat and Nyaya Panchayat."
        },
        {
            nameHindi: "पंचायत समिति",
            nameEnglish: "Panchayat Samiti",
            descriptionHindi: "पंचायत समिति पंचायती राज प्रणाली का मध्य या दूसरा स्तर है। पंचायत समिति को ब्लॉक समिति, क्षेत्र समिति, जोनल परिषद आदि के नाम से भी जाना जाता है। यह मुख्य रूप से ग्राम पंचायत के प्रमुख, महिला प्रतिनिधि और अनुसूचित जातियों एवं अनुसूचित जनजातियों के सदस्यों द्वारा बनाई जाती है। इसमें एक अध्यक्ष, एक उपाध्यक्ष, अधिनियम की धारा 58 के तहत निर्धारित क्षेत्रीय निर्वाचन क्षेत्रों से सीधे निर्वाचित सदस्य और हरियाणा विधान सभा के सदस्य शामिल होते हैं। ब्लॉक विकास अधिकारी पंचायत समिति के नोडल अधिकारी होते हैं।",
            descriptionEnglish: "Panchayat Samiti is the mid or second tier of Panchayati Raj System. Panchayat Samiti is also known as Block Samiti, Kshetra Samiti, Zonal Council, etc. It is mainly formed by the head of the Gram Panchayat, women representative and members of the Scheduled Castes and Scheduled Tribes. It consists of a Chairman, a Vice-Chairman, directly elected members from territorial constituencies as determined under Section 58 of the Act, and the members of Haryana Legislative Assembly. Block Development Officer is the nodal officer of Panchayat Samiti."
        },
        {
            nameHindi: "जिला परिषद",
            nameEnglish: "Zila Parishad",
            descriptionHindi: "यह ग्रामीण क्षेत्रों में स्थानीय सरकार का सबसे उच्च स्तर है। इसमें जिले के वार्डों से सीधे निर्वाचित सदस्य, जिले के भीतर सभी पंचायत समितियों के अध्यक्ष, लोक सभा के सदस्य और हरियाणा विधान सभा के सदस्य शामिल होते हैं। विकास एवं पंचायत निदेशालय राज्य में पंचायती राज प्रणाली के सर्वोत्तम प्रशासन के लिए जिला परिषद का सर्वोच्च संस्थान है। इसका नेतृत्व एक निदेशक करता है, अन्य अधिकारी जिला स्तर पर जिला विकास एवं पंचायत अधिकारी और ब्लॉक स्तर पर ब्लॉक विकास एवं पंचायत अधिकारी होते हैं।",
            descriptionEnglish: "This is the highest level of local government in rural areas. It consists of members directly elected from the wards in the districts, Chairman of all Panchayat Samitis within the district, the members of the House of People and Members of Haryana Legislative Assembly. The Directorate of Development and Panchayat is the foremost institution of a Zila Parishad for the best administration of Panchayati Raj System in the state. It is headed by a Director, other officers are District Development and Panchayat Officers at District level and Block Development and Panchayat Officers at Block level."
        }
    ];

    // Gram Sabha details
    const gramSabhaDetails = {
        titleHindi: "ग्राम सभा",
        titleEnglish: "Gram Sabha",
        contentHindi: "ग्राम सभा एक या दो गाँवों द्वारा बनाई जाती है। प्रत्येक ग्रामीण जिसका नाम मतदाता सूची में शामिल है और जिसने 18 वर्ष की आयु प्राप्त कर ली है, ग्राम सभा का सदस्य होता है। ग्राम सभा में 1 सरपंच और पंचायत क्षेत्र के विभिन्न वार्डों से 6 से 12 पंच होते हैं। हरियाणा में एक वर्ष में कम से कम दो ग्राम सभा बैठकें - 13 अप्रैल और 2 अक्टूबर को - अनिवार्य हैं।",
        contentEnglish: "Gram Sabha are formed by one or two villages. Each and every villager whose name is included in the voter's list and who has attained 18 years of age, is the member of Gram Sabha. Gram Sabha consist of 1 Sarpanch (Head of Gram Sabha) and 6 to 12 Panchs (Chiefs) from different wards of the Panchayat area. Atleast two Gram Sabha meetings in an year i.e. on 13th April and 2nd October is mandatory in Haryana."
    };

    // Haryana Panchayati Raj Act 1994
    const panchayatiRajAct = {
        titleHindi: "हरियाणा पंचायती राज अधिनियम, 1994",
        titleEnglish: "Haryana Panchayati Raj Act, 1994",
        contentHindi: "73वें संवैधानिक संशोधन के अनुसार, हरियाणा पंचायती राज अधिनियम 22 अप्रैल, 1994 को अधिनियमित किया गया था। उस समय चौधरी भजन लाल हरियाणा के मुख्यमंत्री थे। हरियाणा पंचायती राज चुनाव नियम, 1994 24 अगस्त, 1994 को बनाए गए, उसके बाद 16 फरवरी, 1995 को हरियाणा पंचायती राज नियम बनाए गए। तत्पश्चात हरियाणा पंचायती राज वित्त/बजट/लेखा/लेखापरीक्षा/कराधान और कार्य नियम 14 अगस्त, 1996 को बनाए गए। यह अधिनियम हरियाणा राज्य के संपूर्ण क्षेत्र में विस्तृत है। अधिनियम के तहत, पंचायती राज संस्थाओं को संविधान की ग्यारहवीं अनुसूची में सूचीबद्ध सभी 29 विषयों से संबंधित कर्तव्यों और कार्यों के साथ निहित किया गया है। प्रमुख विषय ईंधन, पुल, सड़कें, बिजली, परिवार कल्याण, प्राथमिक शिक्षा, स्वास्थ्य सेवाएं, गरीबी उन्मूलन कार्यक्रम, भूमि सुधार, भूमि जोतों का समेकन, पेयजल, पशुपालन, पशु चारा, नहर और सिंचाई, वृक्षारोपण, सार्वजनिक वितरण सेवाएं, बाजार और मेले, खादी और ग्रामोद्योग आदि हैं।",
        contentEnglish: "As per 73rd Constitutional Amendment, the Haryana Panchayati Raj Act was enacted on 22nd April, 1994. Chaudhary Bhajan Lal was the Chief Minister of Haryana at that time. Haryana Panchayati Raj Election Rules, 1994 were formed on 24th August, 1994, followed by Haryana Panchayati Raj Rules on 16th February, 1995. Thereafter Haryana Panchayati Raj finance/budget/account/audit/taxation and works rule were formulated on 14th August, 1996. This Act extends to whole of the state of Haryana. Under the Act, the Panchayati Raj Institutions have been entrusted with duties and functions related to all the 29 subjects listed in Eleventh Schedule of the Constitution. The prominent subjects are fuel, bridges, roads, electricity, family welfare, primary education, health services, poverty eradication programs, land reforms, consolidation of land holdings, drinking water, animal husbandry, animal fodder, canal and irrigation, tree plantation, public distribution services, markets and fairs, Khadi and Gramudyog, etc."
    };

    // Panchayati Raj Amendment Act 2015
    const amendmentAct2015 = {
        titleHindi: "पंचायती राज संशोधन अधिनियम, 2015",
        titleEnglish: "Panchayati Raj Amendment Act, 2015",
        contentHindi: "हरियाणा विधान सभा ने ग्राम पंचायत को सशक्त बनाने के उद्देश्य से पंचायती राज संशोधन अधिनियम, 2015 पारित किया। इस अधिनियम के मुख्य बिंदु इस प्रकार हैं: पंचायती राज की सभी संस्थाओं में निर्वाचित होने वाला व्यक्ति दसवीं कक्षा तक शिक्षित होना चाहिए। महिलाएं और अनुसूचित जातियाँ 8वीं कक्षा तक शिक्षित हों और अनुसूचित जाति की महिलाएं पंचायती राज संस्थाओं में निर्वाचित होने के लिए पांचवीं कक्षा तक पढ़ी हों। हरियाणा राजस्थान के बाद भारत का दूसरा राज्य बन गया, जहाँ पंचायती राज संस्थाओं में चुनाव लड़ने वालों के लिए न्यूनतम शैक्षणिक योग्यता अनिवार्य की गई। यह 7 सितंबर, 2015 से प्रभावी हुआ। इस अधिनियम ने लोगों को चुनाव लड़ने से वंचित कर दिया: जिन पर आपराधिक मामले में 10 वर्ष से अधिक कारावास की सजा हो सकती है, जिन्होंने कृषि ऋण चुकाया नहीं है, जिनके बिजली बिल बकाया हैं, जिनके घर पर कार्यात्मक शौचालय नहीं है, जिनके पास न्यूनतम निर्धारित शैक्षणिक योग्यता से कम है। हरियाणा भारत का पहला राज्य बन गया जहाँ पंचायत चुनावों में मतदान के लिए इलेक्ट्रॉनिक वोटिंग मशीनों का उपयोग किया गया।",
        contentEnglish: "The Haryana Legislative Assembly passed the Panchayati Raj Amendment Act, 2015 with a view to empowering the gram panchayat. The main points of this act are as follows: Person to be elected in all the institutions of Panchayati Raj should be educated till class tenth. Women and Scheduled Castes should be educated till class 8th and women of Scheduled Caste should study upto class five to be elected in these institutions. Haryana has become the Second State in India after Rajasthan to mandate to fix minimum educational qualification for those contesting in Panchayati Raj Institutions. This came into effect from 7th September, 2015. This act barred people from contesting elections which are: People who were charged in a criminal case that could be punished with imprisonment of more than 10 years. Those who defaulted on agricultural loans. People with outstanding electricity bills. People do not having functional toilet at home. People having less than minimum specified educational qualifications. Haryana became the first state in India where Electronic Voting Machines (EVM) were used for voting in the Panchayat elections."
    };

    // Urban Local Self Government
    const urbanLocalSelfGovt = {
        titleHindi: "शहरी क्षेत्रों में स्थानीय स्वशासन",
        titleEnglish: "Local Self Government in Urban Areas",
        contentHindi: "शहरी क्षेत्रों में स्थानीय स्वशासन - बारहवीं अनुसूची को संविधान के 74वें संशोधन के माध्यम से भारतीय संविधान में जोड़ा गया था। इस अनुसूची में 18 विषय शामिल हैं जो शहरी स्थानीय स्वशासन के कार्यों से संबंधित हैं। शहरी क्षेत्रों को शहरी स्थानीय निकाय बनाने के लिए कई वार्डों में विभाजित किया गया है। हरियाणा में, शहरी क्षेत्र में स्थानीय स्वशासन की प्रणाली संविधान के 74वें संशोधन के माध्यम से स्थापित की गई है। शहरी स्थानीय स्वशासन में चुनाव, कार्यकाल, आरक्षण आदि ग्राम पंचायत के समान ही है। 2016 में, हरियाणा सरकार ने शहरी स्थानीय स्वशासन में पंचायती राज संस्थाओं की शैक्षणिक और चरित्र शर्तों को लागू किया है।",
        contentEnglish: "Local Self Government in Urban Areas - Twelfth Schedule was added to the Indian Constitution through the 74th Amendment to the Constitution. This schedule includes 18 subjects which are related to the functions of urban local self government. The urban areas are divided into several wards to form urban local bodies. In Haryana, the system of local self government in urban area is established through 74th Amendment to the Constitution. The election, tenure, reservation, etc in urban local self government is similar to that of Gram Panchayat. In 2016, the Haryana Government has implemented the educational and character conditions of Panchayati Raj Institutions in urban local self government."
    };

    // Urban bodies
    const urbanBodies = [
        {
            nameHindi: "नगर समिति",
            nameEnglish: "Municipal Committee",
            descriptionHindi: "20,000 से 3,00,000 जनसंख्या वाले छोटे शहरी क्षेत्र नगर समितियों द्वारा प्रबंधित किए जाते हैं। हरियाणा में, नगर पालिकाओं में निर्वाचित सदस्यों की संख्या 10 से 24 के बीच होती है और मनोनीत सदस्यों की संख्या 2 या 3 होती है। नगर समितियों में एक अध्यक्ष, उपाध्यक्ष और तीन प्रकार के सदस्य होते हैं जो निर्वाचित, मनोनीत और पदेन होते हैं। पदेन सदस्यों में उस क्षेत्र से सांसद, विधायक और राज्यसभा सदस्य शामिल होते हैं।",
            descriptionEnglish: "The small urban areas having population 20,000 to 300,000 are managed by Municipal Committees. In Haryana, the number of elected members in municipalities ranges between 10 to 24 and the number of nominated members are 2 or 3. The Municipal Committees include a Chairperson, Deputy Chairperson and three types of members which are elected, nominated and ex-officio. Ex-officio members include Member of Parliament, Member of Legislative Assembly and Rajya Sabha members from that area."
        },
        {
            nameHindi: "नगर परिषद",
            nameEnglish: "Municipal Council",
            descriptionHindi: "यह एक शहरी स्थानीय निकाय है जो 3 लाख से 10 लाख की जनसंख्या वाले शहर का प्रशासन करता है। सदस्यों में एक अध्यक्ष, उपाध्यक्ष और तीन प्रकार के सदस्य शामिल होते हैं जो निर्वाचित, मनोनीत और पदेन होते हैं। इस परिषद के निर्वाचित सदस्यों की संख्या 25 से 55 के बीच होती है और मनोनीत सदस्यों की संख्या 3 से 5 होती है। हरियाणा में, नगर परिषद की सभी सीटों पर 50 प्रतिशत महिला आरक्षण है। नगर परिषद द्वारा अधिकतम 5 समितियाँ बनाई जा सकती हैं।",
            descriptionEnglish: "It is an urban local body that administers a city of population ranging from 3 lakh to 10 lakhs. The members include a Chairperson, a Deputy Chairperson and three types of members which are elected, nominated and ex-officio. The number of elected members of this Council ranges from 25 to 55 and number of nominated members are 3 to 5. In Haryana, there is women reservation of 50 per cent in all the seats of Municipal Council. A maximum of 5 committees can be formed by the Municipal Council."
        },
        {
            nameHindi: "नगर निगम",
            nameEnglish: "Municipal Corporation",
            descriptionHindi: "हरियाणा में 10 लाख से अधिक जनसंख्या वाले शहरी क्षेत्रों को नगर निगम कहा जाता है। सदस्यों में मेयर (नगर निगम के प्रमुख), डिप्टी मेयर, तीन प्रकार के सदस्य शामिल होते हैं जो निर्वाचित, मनोनीत और पदेन होते हैं। चुनाव हर 5 साल में होते हैं। मेयर का कार्यकाल 5 वर्ष होता है। हालाँकि, पद ग्रहण करने के दो साल बाद मेयर के खिलाफ अविश्वास प्रस्ताव लाने का प्रावधान है। हरियाणा के नगर निगमों में निर्वाचित सदस्यों की संख्या 60 (या उससे कम) से 110 के बीच होती है और मनोनीत सदस्यों की संख्या 5 से 10 के बीच होती है।",
            descriptionEnglish: "The urban areas in Haryana which have a population of over 10 lakhs is called Municipal Corporation. The members include Mayor (head of Municipal Corporation), Deputy Mayor, three types of members which are elected, nominated and ex-officio. The elections are held once in 5 years. The tenure of mayor is 5 years. However, there is a provision of bringing the no-confidence motion against mayor after two years of holding the post. Number of elected members in municipal corporations of Haryana ranges from 60 (or less) to 110 and number of nominated members ranges from 5 to 10."
        }
    ];

    // Municipal Corporations list
    const municipalCorporations = [
        "Faridabad", "Gurugram", "Ambala", "Panchkula", "Yamunanagar",
        "Rohtak", "Hisar", "Panipat", "Karnal", "Sonipat"
    ];

    // Awards
    const awards = [
        { name: "Best Performing Panchayat Award", amount: "₹5 लाख", description: "हरियाणा के प्रत्येक जिले में सर्वश्रेष्ठ प्रदर्शन करने वाले गाँव को दिया जाता है" },
        { name: "Chaudhary Devi Lal Award", amount: "₹10 लाख", description: "हरियाणा राज्य के सर्वश्रेष्ठ ग्राम पंचायत को दिया जाता है" },
        { name: "Zila Parishad Awards", amount: "₹8 लाख, ₹5 लाख, ₹3 लाख", description: "राज्य में सर्वश्रेष्ठ प्रदर्शन करने वाली तीन जिला परिषदों को पुरस्कृत किया जाता है" },
        { name: "Cleanest Village Award", amount: "₹5 लाख", description: "सबसे स्वच्छ गाँव को दिया जाता है जहाँ खुले में शौच नहीं होता है" }
    ];

    // New Projects
    const newProjects = [
        "e-Panchayat Services (26 April 2015 from Rohtak)",
        "Swa-Preit Adarsh Gram Yojana (First village: Sui, Bhiwani)",
        "Pradhan Mantri Adarsh Gram Yojana",
        "Women Farmer Empowerment Scheme (Bhiwani, Jhajjar, Hisar)",
        "Garvit Grameen Yojana (Gramin Vikas ke Liye Tarun) - 2015",
        "Water Conservation and Water Harvesting Scheme (2016-17)"
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 dark:from-slate-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-slate-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 hover:bg-slate-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 text-sm font-medium backdrop-blur-sm">
                        <BuildingIcon className="w-4 h-4" />
                        {language === "hindi" ? "स्थानीय स्वशासन - हरियाणा सरकार" : "Local Self Government - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा में" : "Local Self Government in"} <span className="text-slate-600 dark:text-slate-400">{language === "hindi" ? "स्थानीय स्वशासन" : "Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा में पंचायती राज प्रणाली, ग्राम पंचायत, पंचायत समिति, जिला परिषद, शहरी स्थानीय निकायों और नवीनतम विकासों की संपूर्ण जानकारी"
                            : "Complete information about Panchayati Raj System, Gram Panchayat, Panchayat Samiti, Zila Parishad, Urban Local Bodies and latest developments in Haryana"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Home className="w-4 h-4 text-slate-600" />
                            <span>{language === "hindi" ? "ग्राम पंचायत" : "Gram Panchayat"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Building className="w-4 h-4 text-slate-600" />
                            <span>{language === "hindi" ? "पंचायत समिति" : "Panchayat Samiti"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <LandmarkIcon className="w-4 h-4 text-slate-600" />
                            <span>{language === "hindi" ? "जिला परिषद" : "Zila Parishad"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <BuildingIcon className="w-4 h-4 text-slate-600" />
                            <span>{language === "hindi" ? "नगर निकाय" : "Urban Bodies"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Section 1: Panchayati Raj in Haryana - Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-slate-500/20">
                                <LandmarkIcon className="w-5 h-5 text-slate-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? panchayatiRajIntro.titleHindi : panchayatiRajIntro.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? panchayatiRajIntro.contentHindi : panchayatiRajIntro.contentEnglish}</p>
                    </div>

                    {/* Section 2: Three Tiers of Panchayati Raj */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-6 md:p-8 border border-blue-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                <Layers className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{language === "hindi" ? "पंचायती राज की त्रिस्तरीय प्रणाली" : "Three-Tier Panchayati Raj System"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {threeTiers.map((tier, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-5 border shadow-sm">
                                    <h3 className="text-xl font-semibold mb-3 text-primary">{language === "hindi" ? tier.nameHindi : tier.nameEnglish}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{language === "hindi" ? tier.descriptionHindi : tier.descriptionEnglish}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 3: Gram Sabha Details */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Users className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? gramSabhaDetails.titleHindi : gramSabhaDetails.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? gramSabhaDetails.contentHindi : gramSabhaDetails.contentEnglish}</p>
                        <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                            <p className="text-sm font-medium">{language === "hindi" ? "महत्वपूर्ण तिथियाँ:" : "Important Dates:"}</p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                                <li>13 April - {language === "hindi" ? "पहली अनिवार्य ग्राम सभा" : "First mandatory Gram Sabha"}</li>
                                <li>2 October - {language === "hindi" ? "दूसरी अनिवार्य ग्राम सभा" : "Second mandatory Gram Sabha"}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 4: Nyaya Panchayat */}
                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6 md:p-8 border border-amber-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                                <Scale className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400">{language === "hindi" ? "न्याय पंचायत" : "Nyaya Panchayat"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "प्रत्येक गाँव में स्थानीय समस्याओं के समाधान के लिए एक न्याय पंचायत होती है। इसका गठन पंचायत के निर्वाचित सदस्यों द्वारा किया जाता है। न्याय पंचायत केवल स्थानीय समस्या का समाधान करने का प्रयास करती है और यह कारावास की सजा के रूप में सजा नहीं दे सकती है।"
                                : "Each village has a Nyaya Panchayat to solve the local problems. It is constituted by the elected members of the Panchayat. Nyaya Panchayat only tries to address the local problem and it cannot assign jail term as a form of punishment."}
                        </p>
                    </div>

                    {/* Section 5: Haryana Panchayati Raj Act 1994 */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <FileText className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? panchayatiRajAct.titleHindi : panchayatiRajAct.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? panchayatiRajAct.contentHindi : panchayatiRajAct.contentEnglish}</p>
                    </div>

                    {/* Section 6: Panchayati Raj Amendment Act 2015 */}
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-2xl p-6 md:p-8 border border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                                <GraduationCap className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400">{language === "hindi" ? amendmentAct2015.titleHindi : amendmentAct2015.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? amendmentAct2015.contentHindi : amendmentAct2015.contentEnglish}</p>
                    </div>

                    {/* Section 7: New Developments in Panchayati Raj */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Zap className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "पंचायती राज में नए विकास" : "New Developments in Panchayati Raj"}</h2>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" /> {language === "hindi" ? "सरपंच अपने पास निर्धारित राशि से अधिक नकद आरक्षित नहीं रख सकता।" : "Sarpanch cannot keep more than the fixed amount of cash reserve with himself."}</li>
                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" /> {language === "hindi" ? "सरपंच के खिलाफ अविश्वास प्रस्ताव पंचायत में नहीं उठाया जा सकता।" : "No-confidence Motion against Sarpanch cannot be raised in the Panchayat."}</li>
                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" /> {language === "hindi" ? "उप-सरपंच का पद समाप्त कर दिया गया है।" : "Post of Up-Sarpanch (Deputy Chief) is diluted."}</li>
                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" /> {language === "hindi" ? "सरपंच और पंचों को 6 वर्ष के लिए निलंबित किया जा सकता है।" : "Sarpanch and Panchs can be suspended for 6 years."}</li>
                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" /> {language === "hindi" ? "हरियाणा EVM का उपयोग करने वाला पहला राज्य बना।" : "Haryana became the first state to use EVMs in Panchayat elections."}</li>
                        </ul>
                    </div>

                    {/* Section 8: Power and Responsibilities */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-6 md:p-8 border border-green-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                                <BriefcaseIcon className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">{language === "hindi" ? "हरियाणा पंचायतों की शक्तियाँ एवं जिम्मेदारियाँ" : "Power and Responsibilities of Haryana Panchayats"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="font-semibold mb-2">{language === "hindi" ? "शैक्षिक एवं कल्याणकारी" : "Education & Welfare"}</h3>
                                <ul className="list-disc list-inside text-sm text-muted-foreground">
                                    <li>{language === "hindi" ? "आंगनवाड़ी केंद्र और प्राथमिक स्कूल पंचायतों की देखरेख में" : "Anganwadi centers and primary schools under Panchayat supervision"}</li>
                                    <li>{language === "hindi" ? "वृद्धा पेंशन, विधवा पेंशन, विकलांग पेंशन के लिए अनुशंसा" : "Recommendation for old age, widow, disability pension"}</li>
                                    <li>{language === "hindi" ? "राशन कार्ड वितरण और PDS की निगरानी" : "Ration Card distribution and PDS supervision"}</li>
                                </ul>
                            </div>
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="font-semibold mb-2">{language === "hindi" ? "विकास एवं बुनियादी ढांचा" : "Development & Infrastructure"}</h3>
                                <ul className="list-disc list-inside text-sm text-muted-foreground">
                                    <li>{language === "hindi" ? "वार्षिक विकास योजनाएँ और बजट योजनाएँ" : "Annual Development Plans and Budget Plans"}</li>
                                    <li>{language === "hindi" ? "परियोजनाएँ: जिला परिषद (₹5 लाख), समिति (₹3 लाख), पंचायत (₹1.25 लाख)" : "Projects: Zila Parishad (₹5L), Samiti (₹3L), Panchayat (₹1.25L)"}</li>
                                    <li>{language === "hindi" ? "पशु मेलों से 20% आय और स्टाम्प ड्यूटी से 3% राजस्व" : "20% income from animal fairs and 3% stamp duty revenue"}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 9: Gram Vikas Samiti */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Handshake className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "ग्राम विकास समिति" : "Gram Vikas Samiti"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "हरियाणा सरकार ने ग्रामीण विकास को गति देने और प्रणाली में पारदर्शिता एवं गुणवत्ता लाने के उद्देश्य से ग्राम विकास समिति का गठन किया। सरपंच ग्राम विकास समिति का प्रमुख होता है। ग्राम विकास समिति का गठन 1992 में किया गया था और यह सोसाइटी पंजीकरण अधिनियम के तहत पंजीकृत है। इसके सदस्यों में सरपंच, एक महिला पंच, क्रमशः अनुसूचित जाति और पिछड़ा वर्ग का एक पंच, एक सेवानिवृत्त रक्षा कार्मिक और ग्राम सभा के दो सदस्य शामिल होते हैं।"
                                : "The Haryana Government formed Gram Vikas Samiti with the objective to speed up the rural development and bring transparency and quality in the system. The Sarpanch is the head of the Gram Vikas Samiti. Gram Vikas Samiti were formed in 1992 and registered under the Society Registration Act. Its Members include Sarpanch, a Women Panch, a Panch of SC and backward class respectively, one retired defense personnel and two members of Gram Sabhas."}
                        </p>
                    </div>

                    {/* Section 10: State Finance Commission */}
                    <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-6 md:p-8 border border-red-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-red-100 dark:bg-red-900/30">
                                <IndianRupee className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">{language === "hindi" ? "पंचायतों के लिए राज्य वित्त आयोग" : "State Finance Commission for Panchayats"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "अनुच्छेद 243I और 243Y हर 5 वर्ष में राज्य वित्त आयोग के गठन का प्रावधान देते हैं। हरियाणा राज्य वित्त आयोग हरियाणा पंचायती राज अधिनियम 1994, अनुच्छेद 32(A) के अनुसार राज्यपाल द्वारा 5 वर्ष की अवधि के लिए गठित किया जाता है। पहला हरियाणा राज्य वित्त आयोग 31 मई, 1994 को गठित किया गया था। हरियाणा का पाँचवाँ राज्य वित्त आयोग 22 मई, 2016 को मुकुल अस्हर की अध्यक्षता में गठित किया गया था।"
                                : "Article 243I and 243Y gives the provision of the formation of State Finance Commission for every 5 years. The Haryana State Finance Commission is formed for a period of 5 years by the State Governor as per Haryana Panchayati Raj Act 1994, Article 32(A). The First Haryana State Finance Commission was formed on 31st May, 1994. The fifth State Finance Commission of Haryana was formed on 22nd May, 2016 Under the Chairmanship of Mukul Ashar."}
                        </p>
                    </div>

                    {/* Section 11: New Projects */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Rocket className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "पंचायती राज प्रणाली से संबंधित नई परियोजनाएँ" : "New Projects Related to Panchayati Raj System"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {newProjects.map((project, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-lg p-3 border flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                    <span className="text-sm">{project}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                            <p className="text-sm">
                                <strong>e-Panchayat Portal:</strong> Mahari Panchayat<br />
                                <strong>Panchayat Diwas:</strong> 24th April<br />
                                <strong>Swachh Bharat Mission:</strong> Toilet construction aid increased from ₹9,100 to ₹12,000
                            </p>
                        </div>
                    </div>

                    {/* Section 12: Awards */}
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-2xl p-6 md:p-8 border border-yellow-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-yellow-100 dark:bg-yellow-900/30">
                                <Trophy className="w-5 h-5 text-yellow-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">{language === "hindi" ? "हरियाणा में ग्राम पंचायत को दिए जाने वाले पुरस्कार" : "Awards given to Gram Panchayat in Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {awards.map((award, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold">{award.name}</h3>
                                    <p className="text-sm text-green-600 font-medium">{award.amount}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{language === "hindi" ? award.description : award.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 13: Urban Local Self Government */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <BuildingIcon className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? urbanLocalSelfGovt.titleHindi : urbanLocalSelfGovt.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? urbanLocalSelfGovt.contentHindi : urbanLocalSelfGovt.contentEnglish}</p>
                    </div>

                    {/* Section 14: Urban Bodies Details */}
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-2xl p-6 md:p-8 border border-teal-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-xl bg-teal-100 dark:bg-teal-900/30">
                                <Grid className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-400">{language === "hindi" ? "शहरी स्थानीय निकायों के प्रकार" : "Types of Urban Local Bodies"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {urbanBodies.map((body, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-5 border shadow-sm">
                                    <h3 className="text-xl font-semibold mb-3 text-primary">{language === "hindi" ? body.nameHindi : body.nameEnglish}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{language === "hindi" ? body.descriptionHindi : body.descriptionEnglish}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 15: Municipal Corporations List */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा के नगर निगम" : "Municipal Corporations of Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                            {municipalCorporations.map((city, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-lg p-2 text-center border">
                                    <p className="text-sm font-medium">{city}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                            <p className="text-sm">
                                <strong>{language === "hindi" ? "सबसे बड़ा और सबसे पुराना:" : "Largest & Oldest:"}</strong> Faridabad (May 1994)<br />
                                <strong>{language === "hindi" ? "सबसे छोटा:" : "Smallest:"}</strong> Sonipat (1st June, 2015)<br />
                                <strong>{language === "hindi" ? "मेयर चुनाव:" : "Mayor Elections:"}</strong> {language === "hindi" ? "5 सितंबर, 2018 से सीधे चुनाव" : "Direct elections from 5th September, 2018"}
                            </p>
                        </div>
                    </div>

                    {/* Section 16: Haryana Municipal Amendment Bill 2016 & 2017 */}
                    <div className="bg-orange-50 dark:bg-orange-950/20 rounded-2xl p-6 md:p-8 border border-orange-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-900/30">
                                <FileText className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-400">{language === "hindi" ? "हरियाणा नगरपालिका संशोधन विधेयक" : "Haryana Municipal Amendment Bills"}</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="font-semibold">Haryana Municipal Amendment Bill, 2016</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {language === "hindi"
                                        ? "पुरुष उम्मीदवार के लिए न्यूनतम शैक्षणिक योग्यता मैट्रिक (10वीं) है। महिला एवं अनुसूचित जाति उम्मीदवार 8वीं पास, अनुसूचित जाति की महिला उम्मीदवार 5वीं पास। घर पर कार्यात्मक शौचालय होना अनिवार्य।"
                                        : "Male candidates must possess matriculation (Class X) certificate. Women and SC candidates must be 8th pass. SC women candidates must be 5th pass. Functional toilet at home is mandatory."}
                                </p>
                            </div>
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="font-semibold">Haryana Municipal Amendment Bill, 2017</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {language === "hindi"
                                        ? "इस संशोधन विधेयक के तहत, 3 लाख से अधिक जनसंख्या वाले शहरों में नगर समितियों का गठन किया जा सकता है।"
                                        : "Under this Amendment Bill, Municipal Committees can be formed in cities with a population of more than 3 lakhs."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा स्थानीय स्वशासन: तथ्य सारांश" : "Haryana Local Self Government: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">1966</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "त्रिस्तरीय प्रणाली लागू" : "Three-Tier System Adopted"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">1994</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "पंचायती राज अधिनियम" : "Panchayati Raj Act"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">29</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "विषय (11वीं अनुसूची)" : "Subjects (11th Schedule)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">50%</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "महिला आरक्षण" : "Women Reservation"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">10</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "नगर निगम" : "Municipal Corporations"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">3</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "स्तरीय प्रणाली" : "Tier System"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">5</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "वर्ष (आयोग का कार्यकाल)" : "Years (Commission Tenure)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">2015</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "संशोधन अधिनियम" : "Amendment Act"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 text-slate-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा के स्थानीय स्वशासन के बारे में" : "Common"} <span className="text-slate-600">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Haryana Local Self Government"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा में पंचायती राज प्रणाली, ग्राम पंचायत, पंचायत समिति, जिला परिषद और शहरी स्थानीय निकायों के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Panchayati Raj System, Gram Panchayat, Panchayat Samiti, Zila Parishad and Urban Local Bodies in Haryana"}
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
                                        className={`w-5 h-5 text-slate-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
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
                            {language === "hindi" ? "अपने हरियाणा स्थानीय स्वशासन के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Local Self Government?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-slate-600 hover:bg-slate-700">
                                {language === "hindi" ? "हरियाणा स्थानीय स्वशासन क्विज़ लें" : "Take Haryana Local Self Government Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/judiciary" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "पीछे जाएँ: हरियाणा में न्यायपालिका" : "Back to Judiciary in Haryana"}
                        </Link>
                        <Link href="/haryana-gk/district-profile" className="text-slate-600 hover:text-slate-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: हरियाणा के जिले" : "Next Chapter: District Profile of Haryana"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा स्थानीय स्वशासन - संपूर्ण संदर्भ" : "Haryana Local Self Government - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा में पंचायती राज प्रणाली, ग्राम पंचायत, पंचायत समिति, जिला परिषद, शहरी स्थानीय निकायों, नगर निगमों और नवीनतम विकासों के बारे में व्यापक जानकारी प्रदान करता है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about Panchayati Raj System, Gram Panchayat, Panchayat Samiti, Zila Parishad, Urban Local Bodies, Municipal Corporations and latest developments in Haryana. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और संवैधानिक प्रावधानों से स्रोतित" : "Information sourced from official Government of Haryana publications and constitutional provisions"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}