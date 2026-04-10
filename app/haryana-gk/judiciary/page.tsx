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
    Landmark as LandmarkIcon,
    History as HistoryIcon,
    Gavel as GavelIcon,
    Scale as ScaleIcon,
    Users as UsersIcon2,
    Building as BuildingIcon2,
    BookOpen as BookOpenIcon,
    Building as BuildingIcon3,
    School as SchoolIcon,
    HandshakeIcon,
    ShieldIcon,
    UserRoundIcon,
    MapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaJudiciaryPage() {
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
            questionHindi: "पंजाब और हरियाणा उच्च न्यायालय की स्थापना कब हुई?",
            questionEnglish: "When was the Punjab and Haryana High Court established?",
            answerHindi: "पंजाब और हरियाणा उच्च न्यायालय का गठन 1 नवंबर, 1966 को पंजाब के पुनर्गठन के बाद हुआ था। इसका भवन ली कोर्बुसिएर (फ्रांसीसी वास्तुकार) द्वारा डिजाइन किया गया था।",
            answerEnglish: "The Punjab and Haryana High Court was formed on 1st November, 1966 after the reorganisation of Punjab. Its building was designed by Le Corbusier (French Architect)."
        },
        {
            questionHindi: "पंजाब और हरियाणा उच्च न्यायालय के पहले मुख्य न्यायाधीश कौन थे?",
            questionEnglish: "Who was the first Chief Justice of Punjab and Haryana High Court?",
            answerHindi: "न्यायमूर्ति राम लाल पंजाब और हरियाणा उच्च न्यायालय के पहले मुख्य न्यायाधीश थे। पुनर्गठन के बाद 1 नवंबर, 1966 को पहले मुख्य न्यायाधीश न्यायमूर्ति मेहर सिंह थे।",
            answerEnglish: "Justice Ram Lal was the first Chief Justice of Punjab and Haryana High Court. After reorganisation on 1st November, 1966, the first Chief Justice was Justice Mehar Singh."
        },
        {
            questionHindi: "हरियाणा में पहला स्थायी लोक अदालत कब और कहाँ स्थापित किया गया?",
            questionEnglish: "When and where was the first Permanent Lok Adalat established in Haryana?",
            answerHindi: "हरियाणा का पहला स्थायी लोक अदालत 7 अगस्त, 1998 को चंडीगढ़ में स्थापित किया गया था।",
            answerEnglish: "The first Permanent Lok Adalat of Haryana was set up on 7th August, 1998 in Chandigarh."
        },
        {
            questionHindi: "हरियाणा में कितने स्थायी लोक अदालत हैं?",
            questionEnglish: "How many Permanent Lok Adalats are there in Haryana?",
            answerHindi: "हरियाणा में 11 स्थायी लोक अदालत हैं - अंबाला, पंचकूला, रोहतक, हिसार, गुरुग्राम, भिवानी, सिरसा, सोनीपत, रेवाड़ी, करनाल और फरीदाबाद में।",
            answerEnglish: "There are 11 Permanent Lok Adalats in Haryana - in Ambala, Panchkula, Rohtak, Hisar, Gurugram, Bhiwani, Sirsa, Sonipat, Rewari, Karnal and Faridabad."
        },
        {
            questionHindi: "हरियाणा में पर्यावरण न्यायालय कहाँ-कहाँ स्थापित किए गए हैं?",
            questionEnglish: "Where are the Environmental Courts established in Haryana?",
            answerHindi: "हरियाणा सरकार ने फरीदाबाद और कुरुक्षेत्र में 2 पर्यावरण न्यायालय स्थापित किए हैं।",
            answerEnglish: "The Haryana Government has set up 2 environmental courts in Faridabad and Kurukshetra."
        },
        {
            questionHindi: "हरियाणा के पहले लोकायुक्त कौन थे?",
            questionEnglish: "Who was the first Lokayukta of Haryana?",
            answerHindi: "प्रीतम पाल सिंह हरियाणा के पहले लोकायुक्त थे, जिन्हें 2011 में नियुक्त किया गया था।",
            answerEnglish: "Pritam Pal Singh was the first Lokayukta of Haryana, appointed in 2011."
        },
        {
            questionHindi: "हरियाणा राज्य विधिक सेवा प्राधिकरण का मुख्यालय कहाँ है?",
            questionEnglish: "Where is the headquarters of Haryana State Legal Services Authority?",
            answerHindi: "हरियाणा राज्य विधिक सेवा प्राधिकरण का मुख्यालय चंडीगढ़ में है।",
            answerEnglish: "The headquarters of Haryana State Legal Services Authority is in Chandigarh."
        },
        {
            questionHindi: "हरियाणा पुलिस में सबसे ऊंचा पद कौन सा है?",
            questionEnglish: "What is the highest post in Haryana Police?",
            answerHindi: "हरियाणा पुलिस में सबसे ऊंचा पद पुलिस महानिदेशक (DGP) का होता है।",
            answerEnglish: "The highest post in Haryana Police is Director General of Police (DGP)."
        }
    ];

    // Section 1: Judiciary Overview
    const judiciaryOverview = {
        titleHindi: "हरियाणा न्यायपालिका",
        titleEnglish: "Haryana Judiciary",
        contentHindi: "विधायिका और कार्यपालिका के बाद, न्यायपालिका शासन का तीसरा स्तंभ है। भारत की न्यायिक संरचना का वर्णन अनुच्छेद 214 से 237 में किया गया है। न्यायिक संरचना में एक एकीकृत न्याय प्रणाली शामिल है जिसका नेतृत्व सर्वोच्च न्यायालय करता है और उच्च न्यायालय अधीनस्थ हैं। उच्च न्यायालय जिला न्यायालयों की देखरेख करते हैं और सभी अधीनस्थ न्यायालय उच्च न्यायालय के अधीन काम करते हैं। पंजाब और हरियाणा उच्च न्यायालय हरियाणा और पंजाब राज्यों के लिए साझा उच्च न्यायालय है और यह चंडीगढ़ में स्थापित है।",
        contentEnglish: "After Legislative and Executive, judiciary is the third pillar of governance. The judicial structure of India is described in Article 214 to 237. The judicial structure consist of a unified justice system which is headed by Supreme Court and subordinated by High Courts. The High Courts supervise the District Courts and all the Subordinate Courts work under the High Court. The High Court of Punjab and Haryana is the common High Court for the states of Haryana and Punjab and is established at Chandigarh."
    };

    // Section 2: Historical Background of High Court
    const historicalBackground = {
        titleHindi: "पंजाब और हरियाणा उच्च न्यायालय का ऐतिहासिक पृष्ठभूमि",
        titleEnglish: "Historical Background of High Court of Punjab and Haryana",
        contentHindi: "पंजाब और हरियाणा उच्च न्यायालय का गठन भारत अधिनियम, 1915 के तहत 20-21 मार्च, 1919 को लाहौर में किया गया था, लेकिन 1947 में विभाजन के बाद, यह न्यायालय पाकिस्तान चला गया। इस न्यायालय को लाहौर उच्च न्यायालय के नाम से भी जाना जाता था। इस न्यायालय के पहले भारतीय न्यायाधीश रेवाड़ी के सर शादिल थे, जिन्होंने 1 मई, 1920 को शपथ ली थी। उन्हें राय बहादुर की उपाधि दी गई थी। पूर्वी पंजाब उच्च न्यायालय की स्थापना 15 अगस्त, 1947 को शिमला में गवर्नर जनरल लॉर्ड माउंटबेटन द्वारा भारतीय स्वतंत्रता अधिनियम के तहत की गई थी। 26 जनवरी, 1950 को, पूर्वी पंजाब उच्च न्यायालय का नाम बदलकर पंजाब उच्च न्यायालय कर दिया गया। 1952 में, पंजाब उच्च न्यायालय की एक पीठ दिल्ली में स्थापित की गई। 17 जनवरी, 1955 को, उच्च न्यायालय को प्रधान मंत्री जवाहरलाल नेहरू द्वारा चंडीगढ़ स्थानांतरित कर दिया गया। 1956 में, पटियाला और पूर्वी पंजाब राज्य संघ (PEPSU) का पंजाब में विलय हो गया और उनका अधिकार क्षेत्र चंडीगढ़ उच्च न्यायालय को दे दिया गया। 1966 में, दिल्ली उच्च न्यायालय की स्थापना दिल्ली में की गई।",
        contentEnglish: "Punjab and Haryana High Court was formed under India Act, 1915 on 20-21st March, 1919 in Lahore but after the partition in 1947, this court shifted to Pakistan. This court was also known as Lahore High Court. First Indian judge of this court was Sir Shadill of Rewari who took oath on 1st May, 1920. He was given the Title of Rai Bahadur. The East Punjab High Court of Judicature was established at Shimla on 15th August, 1947 by the Governor General Lord Mountbatten under Indian Independence Act. After this, all the work of Lahore High Court shifted to East Punjab High Court located in Shimla. On 26th January,1950, the name of the East Punjab High Court was changed to Punjab High Court. In 1952, one bench of Punjab High Court was established in Delhi. On 17th January, 1955, the High Court was shifted to Chandigarh by Prime Minister Jawaharlal Nehru. In 1956, Patiala and East Punjab States Union (PEPSU) merged into Punjab and their jurisdiction passed on to Chandigarh High Court. In 1966, Delhi High Court was established in Delhi."
    };

    // Section 3: Creation of High Court of Punjab and Haryana
    const creationOfHighCourt = {
        titleHindi: "पंजाब और हरियाणा उच्च न्यायालय का गठन",
        titleEnglish: "Creation of High Court of Punjab and Haryana",
        contentHindi: "1966 में, पंजाब के पुनर्गठन के बाद, दो नए राज्यों, पंजाब और हरियाणा और एक केंद्र शासित प्रदेश, चंडीगढ़ का अस्तित्व में आया। 1 नवंबर, 1966 को, पंजाब उच्च न्यायालय को पंजाब और हरियाणा उच्च न्यायालय में बदल दिया गया। इस उच्च न्यायालय के भवन को ली कोर्बुसिएर (फ्रांसीसी वास्तुकार) द्वारा डिजाइन किया गया था। पंजाब, हरियाणा और केंद्र शासित प्रदेश चंडीगढ़ पंजाब और हरियाणा उच्च न्यायालय के अधिकार क्षेत्र में आते हैं। नवंबर, 2019 तक, पंजाब और हरियाणा उच्च न्यायालय में 39 न्यायाधीश कार्यरत हैं। पंजाब और हरियाणा उच्च न्यायालय के पहले मुख्य न्यायाधीश न्यायमूर्ति राम लाल थे। 1 नवंबर, 1966 को पंजाब और हरियाणा उच्च न्यायालय के पुनर्गठन के बाद पहले मुख्य न्यायाधीश न्यायमूर्ति मेहर सिंह थे। न्यायमूर्ति डोनाल्ड फालशॉ पंजाब और हरियाणा उच्च न्यायालय से अपने पद से इस्तीफा देने वाले पहले मुख्य न्यायाधीश थे। रणजीत सिंह नरूला और जितेंद्र वीर गुप्ता ने भी क्रमशः 1977 और 1991 में अपने पदों से इस्तीफा दिया। महाभियोग का सामना करने वाले पहले और एकमात्र मुख्य न्यायाधीश न्यायमूर्ति वीरस्वामी रामास्वामी (1987-89) थे, लेकिन महाभियोग प्रक्रिया पूरी नहीं हुई। न्यायमूर्ति रणजीत सिंह नरूला और न्यायमूर्ति सुरजीत सिंह संघवालिया भी हरियाणा के राज्यपाल बने।",
        contentEnglish: "In 1966, after the reorganisation of Punjab, two new states, Punjab and Haryana and one Union Territory, Chandigarh, came into being. On 1st November, 1966, the Punjab High Court was transformed into High Court of Punjab and Haryana. The building of this High Court was designed by Le Corbusier (French Architect). Punjab, Haryana and Union Territory Chandigarh came under the jurisdiction of High Court of Punjab and Haryana. As on November, 2019 there are 39 Judges working at High Court of Punjab and Haryana. The first Chief Justice of Punjab and Haryana High Court was Justice Ram Lal. First Chief Justice after reorganisation of Punjab and Haryana High Court on 1st November, 1966 was Justice Mehar Singh. Justice Donald Falshaw was the first Chief Justice to resign from his post from the High Court of Punjab and Haryana. Ranjit Singh Narula and Jitendra Vir Gupta also resigned from their respective posts in 1977 and 1991. First and only Chief Justice to face impeachment was Justice Veerswamy Ramaswamy (1987-89) but the trial process was not completed. Justice Ranjit Singh Narula and Justice Surjit Singh Sanghawalia also became Governors of Haryana."
    };

    // Section 4: List of Chief Justices Table
    const chiefJusticesList = [
        { name: "Justice Ram Lal (first)", from: "15th August, 1947", to: "18th January, 1949", notes: "First Chief Justice" },
        { name: "Justice Sudhi Ranjan Das", from: "19th January, 1949", to: "20th January, 1950", notes: "-" },
        { name: "Justice Eric Weston", from: "21st January, 1950", to: "8th December, 1952", notes: "-" },
        { name: "Justice Amar Nath Bhandari", from: "9th December, 1952", to: "18th November, 1959", notes: "Longest tenure" },
        { name: "Justice Gopal Das Khosla", from: "19th November, 1959", to: "14th December, 1961", notes: "-" },
        { name: "Justice Donald Falshaw", from: "15th December, 1961", to: "29th May, 1966", notes: "First to resign" },
        { name: "Justice Mehar Singh", from: "30th May, 1966", to: "15th August, 1970", notes: "First CJ after reorganisation" },
        { name: "Justice Harbans Singh", from: "16th August, 1970", to: "9th April, 1974", notes: "-" },
        { name: "Justice Daya Krishan Mahajan", from: "10th April, 1974", to: "10th May, 1974", notes: "-" },
        { name: "Justice Ranjit Singh Narula", from: "11th May, 1974", to: "31st October, 1977", notes: "Later Governor of Haryana" },
        { name: "Justice Anand Dev Koshal", from: "1st November, 1977", to: "17th July, 1978", notes: "-" },
        { name: "Justice Surjit Singh Sandhawalia", from: "21st July, 1978", to: "28th November, 1983", notes: "Later Governor of Haryana" },
        { name: "Justice Prem Chand Jain", from: "1st August, 1985", to: "18th August, 1986", notes: "-" },
        { name: "Justice Hariday Nath Seth", from: "19th August, 1986", to: "14th October, 1987", notes: "-" },
        { name: "Justice Debi Singh Tewatia", from: "15th October, 1987", to: "29th October, 1987", notes: "Shortest tenure" },
        { name: "Justice Veeraswami Ramaswami", from: "12th November, 1987", to: "6th October, 1989", notes: "Only CJ to face impeachment" },
        { name: "Justice Shanti Sarup Dewan", from: "24th October, 1989", to: "31st December, 1989", notes: "-" },
        { name: "Justice Jitendra Vir Gupta", from: "9th July, 1990", to: "1st May, 1991", notes: "Resigned" },
        { name: "Justice Bipin Chandra Verma", from: "19th September, 1991", to: "2nd May, 1992", notes: "-" },
        { name: "Justice Mandagadde Rama Jois", from: "3rd May, 1992", to: "31st August, 1992", notes: "-" },
        { name: "Justice Sudarshan Dayal Agarwala", from: "13rd November, 1992", to: "14th January, 1994", notes: "-" },
        { name: "Justice Sudhakar Pandit Rao Kurdukar", from: "16th January, 1994", to: "27th March, 1996", notes: "-" },
        { name: "Justice K Sreedharan", from: "30th July, 1996", to: "18th October, 1997", notes: "-" },
        { name: "Justice AB Saharya", from: "7th November, 1997", to: "14th September, 2002", notes: "-" },
        { name: "Justice Binod Kumar Roy", from: "14th October, 2002", to: "21st February, 2005", notes: "-" },
        { name: "Justice DK Jain", from: "11th March, 2005", to: "6th April, 2006", notes: "-" },
        { name: "Justice Vijender Jain", from: "28th November, 2006", to: "1st August, 2008", notes: "-" },
        { name: "Justice Tirath Singh Thakur", from: "11th August, 2008", to: "17th November, 2009", notes: "Also became CJ of Supreme Court" },
        { name: "Justice Mukul Mudgal", from: "5th December, 2009", to: "3rd January, 2011", notes: "-" },
        { name: "Justice Ranjan Gogoi", from: "12th February, 2011", to: "23rd April, 2012", notes: "-" },
        { name: "Justice Arjan Kumar Sikri", from: "23rd September, 2012", to: "11th April, 2013", notes: "-" },
        { name: "Justice Sanjay Kishan Kaul", from: "1st June, 2013", to: "25th July, 2014", notes: "-" },
        { name: "Justice Shiavax Jal Vazifdar", from: "26th July, 2014", to: "3rd May, 2018", notes: "-" },
        { name: "Justice Ajay Kumar Mittal", from: "4th May, 2018", to: "1st June, 2018", notes: "-" },
        { name: "Justice Krishna Murari", from: "2nd June, 2018", to: "22nd September, 2019", notes: "-" },
        { name: "Justice Rajeev Sharma", from: "23rd September, 2019", to: "5th October, 2019", notes: "-" },
        { name: "Justice Ravi Shankar Jha", from: "6th October, 2019", to: "Incumbent", notes: "Current Chief Justice" }
    ];

    // Section 5: Other Courts of Haryana
    const otherCourts = [
        {
            name: "District and Sessions Court",
            nameHindi: "जिला एवं सत्र न्यायालय",
            details: "Every district has two types of courts - District Court for civil cases and Sessions Court for criminal cases. Established by State Government, presided over by a judge appointed by Governor in consultation with High Court. Haryana judicial service is divided into Haryana Civil Judicial Service and Higher Judicial Service."
        },
        {
            name: "Revenue Court",
            nameHindi: "राजस्व न्यायालय",
            details: "Deals with cases of land revenue and related disputes. Each district has a Revenue Court. The highest Revenue Court in the district is the Board of Revenue. Includes Court of Commissioners, Collectors, Tehsildars and Sub-Tehsildars."
        },
        {
            name: "Family Court",
            nameHindi: "पारिवारिक न्यायालय",
            details: "Established under Family Courts Act, 1984. Hears cases related to family matters, domestic relationships, marriage proceedings. Appeal against judgement can be made only in High Court."
        },
        {
            name: "State Administrative Tribunal",
            nameHindi: "राज्य प्रशासनिक अधिकरण",
            details: "Quasi-judicial institution set up to deal with pendency of cases. Haryana Administrative Tribunal Rules, 2017 approved by Haryana Cabinet in 2018."
        },
        {
            name: "Commercial Courts",
            nameHindi: "वाणिज्यिक न्यायालय",
            details: "Special Commercial Court set up at Gurugram on 27th October, 2017 under Commercial Courts Act 2015. Jurisdiction in entire state of Haryana."
        },
        {
            name: "Environmental Courts",
            nameHindi: "पर्यावरण न्यायालय",
            details: "Two environmental courts in Faridabad and Kurukshetra. Faridabad court jurisdiction: Faridabad, Palwal, Mewat, Gurugram, Mahendragarh, Jind, Rohtak, Jhajjar, Dadri, Bhiwani, Rewari. Kurukshetra court jurisdiction: Ambala, Panchkula, Yamunanagar, Karnal, Kaithal, Sirsa, Fatehabad, Hisar, Sonipat, Panipat."
        },
        {
            name: "District Consumer Courts",
            nameHindi: "जिला उपभोक्ता न्यायालय",
            details: "Consumer Protection Act came into force on 24th December, 1986. Provides 3-tier system at National, State and District level. Consumer Redressal Cell and Consumer Forums set up in each district except Charkhi-Dadri. Cases upto ₹1 crore can be taken (after Consumer Protection Act 2019)."
        }
    ];

    // Section 6: Advocate General
    const advocateGeneral = {
        titleHindi: "महाधिवक्ता",
        titleEnglish: "Advocate General",
        contentHindi: "अनुच्छेद 165 के अनुसार, राज्य के राज्यपाल महाधिवक्ता की नियुक्ति करते हैं। महाधिवक्ता नियुक्त होने वाला व्यक्ति भारत का नागरिक होना चाहिए, 10 वर्ष या उससे अधिक समय से कानून का अभ्यास कर रहा हो या उच्च न्यायालय में न्यायाधीश रहा हो। बाबू आनंद स्वरूप हरियाणा के पहले महाधिवक्ता थे। महाधिवक्ता राज्य का पहला कानून अधिकारी होता है, जो समय-समय पर राज्य सरकार को सलाह देता है। वह राज्य विधान सभा की बैठकों में भाग लेता है लेकिन उसे सदन में वोट देने का अधिकार नहीं होता।",
        contentEnglish: "As per Article 165 of the Indian Constitution, the Governor of the state appoints the Advocate General. A person to be appoint as an Advocate General should be a citizen of India, should be practicing law for 10 years or more or should be a judge in High Court for minimum 10 years. Babu Anand Swarup was the first Advocate General of Haryana. Advocate General is the first Legal Officer of the state, who advises the State Government from time to time. He also attends the meeting of the State Legislative Assembly but do not have voting rights in the Assembly."
    };

    // Section 7: Institutions and Commissions
    const institutionsCommissions = [
        {
            name: "Lokayukta",
            nameHindi: "लोकायुक्त",
            details: "Quasi-judicial institution. Haryana Lokayukta Act passed in 1997 (cancelled in 1999). Haryana Lokayukta Act, 2002 came into force on 27th January, 2002. Tenure: 5 years, appointed by Governor. Pritam Pal Singh was first Lokayukta (2011). Has right to hear complaints against Chief Minister, MLAs, Municipal officials, Panchayati Raj officers, Chancellor/Vice-Chancellor of Universities."
        },
        {
            name: "State Vigilance Bureau",
            nameHindi: "राज्य सतर्कता ब्यूरो",
            details: "Special Inquiry Agency set up in June 1967. Renamed to State Vigilance Bureau in 1978. Headed by State Vigilance Officer at state level, Divisional and District Vigilance Officers at respective levels. Office located in Panchkula."
        },
        {
            name: "State Information Commission",
            nameHindi: "राज्य सूचना आयोग",
            details: "Set up under State Information Commission Act, 2005. Headquarters in Chandigarh. Members appointed by Governor for 6 years or till age 62. Headed by Chief Information Commissioner."
        },
        {
            name: "State Election Commission",
            nameHindi: "राज्य निर्वाचन आयोग",
            details: "Constituted on 18th November, 1993 under Article 243K and 243ZA. Headquarters in Panchkula. First Commissioner: JK Duggal. Responsible for elections of Panchayati Raj Institutions and Municipal boards."
        },
        {
            name: "Haryana Staff Selection Commission",
            nameHindi: "हरियाणा कर्मचारी चयन आयोग",
            details: "Established on 28th January, 1970. Received statutory status on 28th February, 2005. Earlier known as Subordinate Services Selection Board. Recruits for Group C and D posts. Headquarters in Panchkula. Chairman tenure: 3 years or till 68 years."
        },
        {
            name: "Haryana Public Service Commission",
            nameHindi: "हरियाणा लोक सेवा आयोग",
            details: "Set up in November 1966 under Punjab Reorganisation Act 1966. Headquarters in Panchkula. First Chairman: Darbari Lal Gupta. Recruits for Group A and B posts. Members appointed by Governor for 6 years or till age 62."
        },
        {
            name: "Haryana Human Rights Commission",
            nameHindi: "हरियाणा मानवाधिकार आयोग",
            details: "Established under Section 21 of Protection of Human Rights Act 1993. First Chairman: Bijendra Jain (retired CJ of Punjab and Haryana High Court). Headquarters in Chandigarh. Members appointed by Governor for 5 years or till age 70. Set up branch in Haryana Bhawan, New Delhi in 2015."
        },
        {
            name: "Haryana State Commission for Women",
            nameHindi: "हरियाणा राज्य महिला आयोग",
            details: "Constituted on 20th December, 1999. Headquarters in Panchkula. Comprises Chairman, Vice-Chairman and 4 NGO members. Chairperson and more than half members should be women. Tenure: 3 years."
        }
    ];

    // Section 8: State Legal Services Authority
    const slsaInfo = {
        titleHindi: "राज्य विधिक सेवा प्राधिकरण",
        titleEnglish: "State Legal Services Authority",
        contentHindi: "प्रत्येक राज्य में, राज्य विधिक सेवा प्राधिकरण (SLSA) की स्थापना विधिक सेवा प्राधिकरण अधिनियम 1987 के तहत की जाती है। यह अधिनियम 9 नवंबर, 1995 से लागू हुआ। इसका नेतृत्व पंजाब और हरियाणा उच्च न्यायालय के मुख्य न्यायाधीश करते हैं और एक वरिष्ठ न्यायाधीश इस प्राधिकरण के कार्यकारी अध्यक्ष होते हैं। हरियाणा में, राज्य विधिक सेवा प्राधिकरण चंडीगढ़ में है। हरियाणा में, राज्य विधिक सेवा प्राधिकरण उच्च न्यायालय स्तर (अध्यक्ष उच्च न्यायालय के न्यायाधीश), जिला स्तर (अध्यक्ष जिला और सत्र न्यायालय के न्यायाधीश) और राज्य के उप-प्रभागों में स्थापित किया गया है।",
        contentEnglish: "In every state, State Legal Services Authority (SLSA) is set up under the Legal Services Authority Act 1987. This act is enforced from 9th November, 1995. It is headed by Chief Justice of the High Court of Punjab and Haryana and a senior judge is the Executive Chairman of this authority. In Haryana, the State Legal Services Authority is at Chandigarh. In Haryana, State Legal Service Authority has been established at the level of High Court (Chairman is Judge of High Court), at district level (Chairman is the Judge of District and Sessions Court) and in the sub-divisions of the state."
    };

    // Section 9: Lok Adalats
    const lokAdalats = {
        titleHindi: "लोक अदालतें",
        titleEnglish: "Lok Adalats",
        contentHindi: "अनुच्छेद 39(A) को 1976 में 42वें संशोधन के माध्यम से राज्य नीति के निदेशक सिद्धांतों में जोड़ा गया था। इस अनुच्छेद में कमजोर वर्गों के लिए मुफ्त कानूनी सहायता का प्रावधान है। लोक अदालतों को विधिक सेवा प्राधिकरण अधिनियम 1987 के तहत वैधानिक दर्जा दिया गया है। हरियाणा का पहला स्थायी लोक अदालत 7 अगस्त, 1998 को चंडीगढ़ में स्थापित किया गया था। हरियाणा में 11 स्थायी लोक अदालत हैं - अंबाला, पंचकूला, रोहतक, हिसार, गुरुग्राम, भिवानी, सिरसा, सोनीपत, रेवाड़ी, करनाल और फरीदाबाद में। सभी जिलों में लोक अदालतें कार्यरत हैं, जिनमें एक न्यायाधीश, एक अधिवक्ता और एक सामाजिक कार्यकर्ता होते हैं।",
        contentEnglish: "Article 39(A) has been added in the Directive Principles of State Policy through the 42nd Amendment to the Indian Constitution in 1976. This article has a provision of free legal aid for weaker sections. Lok Adalats are given statutory status under the Legal Services Authorities Act 1987. First Permanent Lok Adalat of Haryana was set up on 7th August, 1998 in Chandigarh. In Haryana, there are 11 permanent Lok Adalats - in Ambala, Panchkula, Rohtak, Hisar, Gurugram, Bhiwani, Sirsa, Sonipat, Rewari, Karnal and Faridabad. In all the districts of Haryana, Lok Adalats are functional which consist of one judge, one advocate and one social worker."
    };

    // Section 10: Police Administration
    const policeAdministration = {
        titleHindi: "पुलिस प्रशासन",
        titleEnglish: "Police Administration",
        contentHindi: "हरियाणा के लिए कानून प्रवर्तन एजेंसी हरियाणा पुलिस विभाग है। राज्य अपराध रिकॉर्ड ब्यूरो की स्थापना 1 अप्रैल, 1987 को हरियाणा में की गई थी। इसका मुख्यालय पंचकूला में है। राज्य पुलिस मुख्यालय भी पंचकूला में स्थित है। हरियाणा पुलिस में सबसे ऊंचा पद पुलिस महानिदेशक (DGP) का होता है। प्रत्येक पुलिस रेंज का नेतृत्व पुलिस के अतिरिक्त महानिदेशक (ADG) से कम पद का अधिकारी नहीं करता।",
        contentEnglish: "The law enforcing agency for Haryana is the Haryana Police Department. State Crime Record Bureau was established in Haryana on 1st April, 1987 to collect and analyse the crime related data. Its headquarters is in Panchkula. State Police headquarters is also located in Panchkula. Highest post in Haryana police is of Director General of Police (DGP). Each of the Police Range is headed by an officer not below the rank of Additional Director General (ADG) of Police."
    };

    // Section 11: Police Commissioners
    const policeCommissioners = [
        { commissioner: "Faridabad commissionerate", area: "Faridabad" },
        { commissioner: "Gurugram commissionerate", area: "Gurugram" },
        { commissioner: "Panchkula commissionerate", area: "Panchkula" }
    ];

    // Section 12: Police Ranges Table
    const policeRanges = [
        { range: "Ambala", districts: "Ambala, Yamunanagar and Kurukshetra", headquarters: "Ambala" },
        { range: "Hisar", districts: "Hisar, Hansi, Fatehabad, Sirsa and Jind", headquarters: "Hisar" },
        { range: "Karnal", districts: "Karnal, Panipat and Kaithal", headquarters: "Karnal" },
        { range: "Rohtak", districts: "Rohtak, Jhajjar, Sonipat, Bhiwani and Charkhi-Dadri", headquarters: "Rohtak" },
        { range: "Rewari", districts: "Rewari, Palwal, Mahendragarh and Nuh", headquarters: "Rewari" }
    ];

    // Section 13: Revenue Ranges Table
    const revenueRanges = [
        { range: "Ambala", districts: "Ambala, Yamunanagar, Panchkula and Kurukshetra" },
        { range: "Karnal", districts: "Karnal, Panipat and Kaithal" },
        { range: "Rohtak", districts: "Rohtak, Jhajjar, Sonipat, Bhiwani and Charkhi-Dadri" },
        { range: "Hisar", districts: "Hisar, Fatehabad, Jind and Sirsa" },
        { range: "Gurugram", districts: "Gurugram, Rewari and Mahendragarh" },
        { range: "Faridabad", districts: "Faridabad, Palwal and Nuh" }
    ];

    // Section 14: Police Training Centres
    const policeTrainingCentres = {
        titleHindi: "पुलिस प्रशिक्षण केंद्र",
        titleEnglish: "Police Training Centres",
        contentHindi: "हरियाणा में पुलिस प्रशिक्षण केंद्र भोंडसी (गुरुग्राम) और सुनारिया (रोहतक) में स्थित हैं। कमांडो प्रशिक्षण परिसर करनाल जिले के नेवाल में स्थित है। हरियाणा पुलिस अकादमी करनाल के मधुबन में स्थित है। राज्य फोरेंसिक विज्ञान प्रयोगशाला 1973 में रोहतक में स्थापित की गई थी, लेकिन 1976 में इसे करनाल जिले के मधुबन में स्थानांतरित कर दिया गया।",
        contentEnglish: "Police training centres in Haryana are situated in Bhondsi (Gurugram) and Sunaria (Rohtak). Commando Training Complex is situated in Newal of Karnal district. Haryana Police Academy is situated in Madhuban of Karnal. State Forensic Science Laboratory was set up in Rohtak in 1973, but in 1976, it was shifted to Madhuban of Karnal district."
    };

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 dark:from-indigo-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium backdrop-blur-sm">
                        <GavelIcon className="w-4 h-4" />
                        {language === "hindi" ? "न्यायपालिका - हरियाणा सरकार" : "Judiciary - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा की" : "Haryana"} <span className="text-indigo-600 dark:text-indigo-400">{language === "hindi" ? "न्यायपालिका" : "Judiciary"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा की न्यायिक संरचना, उच्च न्यायालय, जिला न्यायालय, लोक अदालतें, आयोग और पुलिस प्रशासन की संपूर्ण जानकारी"
                            : "Complete information about Haryana's judicial structure, High Court, District Courts, Lok Adalats, Commissions and Police Administration"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <BuildingIcon2 className="w-4 h-4 text-indigo-600" />
                            <span>{language === "hindi" ? "उच्च न्यायालय" : "High Court"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <ScaleIcon className="w-4 h-4 text-indigo-600" />
                            <span>{language === "hindi" ? "जिला न्यायालय" : "District Courts"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <HandshakeIcon className="w-4 h-4 text-indigo-600" />
                            <span>{language === "hindi" ? "लोक अदालत" : "Lok Adalat"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <ShieldIcon className="w-4 h-4 text-indigo-600" />
                            <span>{language === "hindi" ? "पुलिस प्रशासन" : "Police Administration"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <LandmarkIcon className="w-4 h-4 text-indigo-600" />
                            <span>{language === "hindi" ? "आयोग" : "Commissions"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Section 1: Judiciary Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-500/20">
                                <GavelIcon className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? judiciaryOverview.titleHindi : judiciaryOverview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? judiciaryOverview.contentHindi : judiciaryOverview.contentEnglish}</p>
                    </div>

                    {/* Section 2: Historical Background */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-6 md:p-8 border border-blue-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                <HistoryIcon className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{language === "hindi" ? historicalBackground.titleHindi : historicalBackground.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? historicalBackground.contentHindi : historicalBackground.contentEnglish}</p>
                    </div>

                    {/* Section 3: Creation of High Court */}
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-2xl p-6 md:p-8 border border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                                <BuildingIcon2 className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400">{language === "hindi" ? creationOfHighCourt.titleHindi : creationOfHighCourt.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? creationOfHighCourt.contentHindi : creationOfHighCourt.contentEnglish}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div className="text-center p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                                <div className="text-xl font-bold text-purple-600">39</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "न्यायाधीश (2019)" : "Judges (2019)"}</div>
                            </div>
                            <div className="text-center p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                                <div className="text-xl font-bold text-purple-600">1</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "मुख्य न्यायाधीश" : "Chief Justice"}</div>
                            </div>
                            <div className="text-center p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                                <div className="text-xl font-bold text-purple-600">3</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "राज्य/केंद्र शासित प्रदेश" : "States/UTs"}</div>
                            </div>
                            <div className="text-center p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                                <div className="text-xl font-bold text-purple-600">1966</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "गठन वर्ष" : "Formation Year"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: List of Chief Justices Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm overflow-x-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <UsersIcon2 className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "मुख्य न्यायाधीशों की सूची" : "List of Chief Justices"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "मुख्य न्यायाधीश" : "Chief Justice"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "कार्यकाल प्रारंभ" : "From"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "कार्यकाल समाप्त" : "To"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "टिप्पणी" : "Notes"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {chiefJusticesList.map((cj, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{cj.name}</td>
                                            <td className="border p-2">{cj.from}</td>
                                            <td className="border p-2">{cj.to}</td>
                                            <td className="border p-2">{cj.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 5: Other Courts of Haryana */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-6 md:p-8 border border-green-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                                <BuildingIcon3 className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">{language === "hindi" ? "हरियाणा के अन्य न्यायालय" : "Other Courts of Haryana"}</h2>
                        </div>
                        <div className="space-y-4">
                            {otherCourts.map((court, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-green-600">{language === "hindi" ? court.nameHindi : court.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{court.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 6: Advocate General */}
                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6 md:p-8 border border-amber-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                                <UserRoundIcon className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400">{language === "hindi" ? advocateGeneral.titleHindi : advocateGeneral.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? advocateGeneral.contentHindi : advocateGeneral.contentEnglish}</p>
                    </div>

                    {/* Section 7: State Legal Services Authority */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-2xl p-6 md:p-8 border border-cyan-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-900/30">
                                <BookOpenIcon className="w-5 h-5 text-cyan-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">{language === "hindi" ? slsaInfo.titleHindi : slsaInfo.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? slsaInfo.contentHindi : slsaInfo.contentEnglish}</p>
                    </div>

                    {/* Section 8: Lok Adalats */}
                    <div className="bg-rose-50 dark:bg-rose-950/20 rounded-2xl p-6 md:p-8 border border-rose-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-900/30">
                                <HandshakeIcon className="w-5 h-5 text-rose-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-rose-700 dark:text-rose-400">{language === "hindi" ? lokAdalats.titleHindi : lokAdalats.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? lokAdalats.contentHindi : lokAdalats.contentEnglish}</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
                            {["Ambala", "Panchkula", "Rohtak", "Hisar", "Gurugram", "Bhiwani", "Sirsa", "Sonipat", "Rewari", "Karnal", "Faridabad"].map((city, idx) => (
                                <div key={idx} className="bg-rose-100 dark:bg-rose-900/30 rounded-lg p-2 text-center">
                                    <p className="text-sm font-medium">{city}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 9: Institutions and Commissions */}
                    <div className="bg-slate-50 dark:bg-slate-950/20 rounded-2xl p-6 md:p-8 border border-slate-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900/30">
                                <LandmarkIcon className="w-5 h-5 text-slate-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-400">{language === "hindi" ? "हरियाणा के संस्थान एवं आयोग" : "Institutions and Commissions in Haryana"}</h2>
                        </div>
                        <div className="space-y-4">
                            {institutionsCommissions.map((inst, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-slate-600">{language === "hindi" ? inst.nameHindi : inst.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{inst.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 10: Police Administration */}
                    <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-6 md:p-8 border border-red-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-red-100 dark:bg-red-900/30">
                                <ShieldIcon className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">{language === "hindi" ? policeAdministration.titleHindi : policeAdministration.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? policeAdministration.contentHindi : policeAdministration.contentEnglish}</p>
                    </div>

                    {/* Section 11: Police Commissioners Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <UserRoundIcon className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "पुलिस आयुक्त" : "Police Commissioners"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "आयुक्त" : "Commissioner"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "शहरी क्षेत्र" : "Urban Area"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {policeCommissioners.map((pc, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{pc.commissioner}</td>
                                            <td className="border p-2">{pc.area}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 12: Police Ranges Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm overflow-x-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <MapIcon className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा में पुलिस रेंज" : "Police Ranges in Haryana"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "पुलिस रेंज" : "Police Range"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "जिले" : "Districts"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "मुख्यालय" : "Headquarters"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {policeRanges.map((pr, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{pr.range}</td>
                                            <td className="border p-2">{pr.districts}</td>
                                            <td className="border p-2">{pr.headquarters}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 13: Revenue Ranges Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm overflow-x-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <LandmarkIcon className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा में राजस्व रेंज" : "Revenue Ranges in Haryana"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "राजस्व रेंज" : "Revenue Range"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "जिले" : "Districts"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {revenueRanges.map((rr, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{rr.range}</td>
                                            <td className="border p-2">{rr.districts}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 14: Police Training Centres */}
                    <div className="bg-orange-50 dark:bg-orange-950/20 rounded-2xl p-6 md:p-8 border border-orange-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-900/30">
                                <SchoolIcon className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-400">{language === "hindi" ? policeTrainingCentres.titleHindi : policeTrainingCentres.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? policeTrainingCentres.contentHindi : policeTrainingCentres.contentEnglish}</p>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा न्यायपालिका: तथ्य सारांश" : "Haryana Judiciary: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-indigo-600">39</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "उच्च न्यायालय न्यायाधीश" : "High Court Judges"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-indigo-600">11</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "स्थायी लोक अदालत" : "Permanent Lok Adalats"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-indigo-600">2</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "पर्यावरण न्यायालय" : "Environmental Courts"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-indigo-600">5</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "पुलिस रेंज" : "Police Ranges"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-indigo-600">3</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "पुलिस आयुक्त" : "Police Commissioners"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-indigo-600">6</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "राजस्व रेंज" : "Revenue Ranges"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-indigo-600">1919</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "लाहौर उच्च न्यायालय" : "Lahore High Court"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-indigo-600">1966</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "पुनर्गठन वर्ष" : "Reorganisation Year"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा की न्यायपालिका के बारे में" : "Common"} <span className="text-indigo-600">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Haryana Judiciary"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के उच्च न्यायालय, जिला न्यायालयों, लोक अदालतों, आयोगों और पुलिस प्रशासन के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's High Court, District Courts, Lok Adalats, Commissions and Police Administration"}
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
                                        className={`w-5 h-5 text-indigo-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
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
                            {language === "hindi" ? "अपने हरियाणा न्यायपालिका के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Judiciary?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-indigo-600 hover:bg-indigo-700">
                                {language === "hindi" ? "हरियाणा न्यायपालिका क्विज़ लें" : "Take Haryana Judiciary Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/administration" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "पीछे जाएँ: हरियाणा की प्रशासनिक संरचना" : "Back to Haryana Administrative Structure"}
                        </Link>
                        {/* <Link href="/haryana-gk/education" className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: हरियाणा में शिक्षा" : "Next Chapter: Education in Haryana"}
                            <ChevronRight className="w-4 h-4" />
                        </Link> */}
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा की न्यायपालिका - संपूर्ण संदर्भ" : "Haryana Judiciary - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की न्यायिक संरचना, उच्च न्यायालय, जिला न्यायालयों, लोक अदालतों, आयोगों और पुलिस प्रशासन के बारे में व्यापक जानकारी प्रदान करता है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about Haryana's judicial structure, High Court, District Courts, Lok Adalats, Commissions and Police Administration. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और न्यायिक रिकॉर्ड से स्रोतित" : "Information sourced from official Government of Haryana publications and judicial records"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}