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
    Landmark,
    ArrowLeft,
    Building2,
    Heart,
    MapPin,
    Calendar,
    BookOpen,
    GraduationCap,
    Users,
    Star,
    Sparkles,
    School,
    University,
    Stethoscope,
    Activity,
    Pill,
    Syringe,
    Hospital,
    Ambulance,
    Apple,
    Dumbbell,
    Brain,
    Eye,
    Microscope,
    FlaskConical,
    Baby,
    Shield,
    Award,
    Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaEducationHealthPage() {
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
            questionHindi: "हरियाणा की साक्षरता दर क्या है?",
            questionEnglish: "What is the literacy rate of Haryana?",
            answerHindi: "जनगणना 2011 के अनुसार, हरियाणा की साक्षरता दर 75.6% है, जिसमें पुरुष साक्षरता दर 84.1% और महिला साक्षरता दर 65.9% है। हरियाणा साक्षरता के मामले में देश में 22वें स्थान पर है। गुरुग्राम की साक्षरता दर सबसे अधिक 84.7% है, और मेवात की सबसे कम 54.1% है।",
            answerEnglish: "According to Census 2011, Haryana has a literacy rate of 75.6%, with male literacy rate of 84.1% and female literacy rate of 65.9%. Haryana ranks 22nd in the country in terms of literacy. Gurugram has the highest literacy rate i.e. 84.7%, and Mewat has the lowest literacy rate i.e. 54.1%."
        },
        {
            questionHindi: "हरियाणा में कितने राज्य विश्वविद्यालय हैं?",
            questionEnglish: "How many State Universities are there in Haryana?",
            answerHindi: "हरियाणा उच्च शिक्षा विभाग के अनुसार, राज्य में वर्तमान में 18 राज्य विश्वविद्यालय, 24 निजी विश्वविद्यालय और 1 केंद्रीय विश्वविद्यालय हैं। राज्य का पहला विश्वविद्यालय कुरुक्षेत्र विश्वविद्यालय है जिसकी स्थापना 11 जनवरी, 1956 को हुई थी।",
            answerEnglish: "According to the Higher Education Department of Haryana, there are currently 18 State Universities, 24 Private Universities and 1 Central University in the state. The first university of the state is Kurukshetra University, established on 11th January, 1956."
        },
        {
            questionHindi: "हरियाणा में प्राथमिक और माध्यमिक शिक्षा के लिए कौन-कौन सी केंद्रीय योजनाएं चल रही हैं?",
            questionEnglish: "What central schemes are running for primary and secondary education in Haryana?",
            answerHindi: "हरियाणा में प्राथमिक और माध्यमिक शिक्षा के लिए प्रमुख केंद्रीय योजनाएं हैं: बेटी बचाओ बेटी पढ़ाओ (22 जनवरी 2015 को पानीपत से शुरू), आरोही मॉडल स्कूल (2011-12), राष्ट्रीय माध्यमिक शिक्षा अभियान (2009), सर्व शिक्षा अभियान (2001), और मध्याह्न भोजन योजना (15 अगस्त 1995)।",
            answerEnglish: "Major central schemes for primary and secondary education in Haryana are: Beti Bachao Beti Padhao (launched 22nd January 2015 at Panipat), Aarohi Model School (2011-12), Rashtriya Madhyamik Shiksha Abhiyan (2009), Sarva Shiksha Abhiyan (2001), and Mid-day Meal Scheme (15th August 1995)."
        },
        {
            questionHindi: "हरियाणा में कितने सैनिक स्कूल हैं?",
            questionEnglish: "How many Sainik Schools are there in Haryana?",
            answerHindi: "हरियाणा में वर्तमान में दो सैनिक स्कूल हैं - एक करनाल जिले के कुंजीपुरा गाँव में (1961 में स्थापित, हरियाणा का पहला सैनिक स्कूल) और दूसरा रेवाड़ी जिले में (20 अगस्त 2008 को स्थापित)। झज्जर जिले के मातनहेल गाँव में एक और सैनिक स्कूल स्थापित किया जा रहा है।",
            answerEnglish: "There are currently two Sainik Schools in Haryana - one in Kunjipura village, Karnal district (established 1961, first Sainik School in Haryana) and second in Rewari district (established 20th August 2008). Another Sainik School is being set up in Matanhail village of Jhajjar district."
        },
        {
            questionHindi: "हरियाणा में स्वास्थ्य सेवाओं की वर्तमान स्थिति क्या है?",
            questionEnglish: "What is the current status of health services in Haryana?",
            answerHindi: "आर्थिक सर्वेक्षण 2020-21 के अनुसार, हरियाणा में 68 अस्पताल, 133 सामुदायिक स्वास्थ्य केंद्र, 537 प्राथमिक स्वास्थ्य केंद्र, 2655 उप-स्वास्थ्य केंद्र और 7 ट्रॉमा सेंटर कार्यरत हैं। राज्य में 5 सरकारी मेडिकल कॉलेज, 1 सरकारी डेंटल कॉलेज और 13 सरकारी नर्सिंग कॉलेज स्थित हैं।",
            answerEnglish: "According to Economic Survey 2020-21, 68 hospitals, 133 Community Health Centers, 537 Primary Health Centers, 2655 Sub Health Centers and 7 Trauma Centers are functioning in Haryana. There are 5 Government Medical Colleges, 1 Government Dental College and 13 Government Nursing Colleges in the state."
        },
        {
            questionHindi: "हरियाणा का पहला मेडिकल कॉलेज कौन सा है और कब स्थापित हुआ?",
            questionEnglish: "Which is the first medical college of Haryana and when was it established?",
            answerHindi: "हरियाणा राज्य के गठन के समय राज्य में केवल एक मेडिकल कॉलेज रोहतक में था जिसका निर्माण वर्ष 1960 में किया गया था। वर्ष 1994 में रोहतक स्थित पं. भगवत दयाल शर्मा संस्थान को चिकित्सा के क्षेत्र में स्नातकोत्तर दर्जा प्रदान किया गया। वर्तमान में यह पं. भगवत दयाल शर्मा स्वास्थ्य विज्ञान विश्वविद्यालय के नाम से जाना जाता है।",
            answerEnglish: "At the time of formation of Haryana state, there was only one medical college in Rohtak which was constructed in the year 1960. In 1994, Pt. Bhagwat Dayal Sharma institute located in Rohtak was given postgraduate status in the field of medicine. Currently, it is known as Pt. Bhagwat Dayal Sharma University of Health Sciences."
        },
        {
            questionHindi: "हरियाणा में एम्स (AIIMS) का विस्तार केंद्र कहाँ स्थित है?",
            questionEnglish: "Where is the AIIMS extension center located in Haryana?",
            answerHindi: "राज्य सरकार ने अखिल भारतीय आयुर्विज्ञान संस्थान (एम्स) का विस्तार केंद्र स्थापित करने के लिए झज्जर जिले के बड़सा गाँव में 300 एकड़ भूमि आवंटित की है। इस विस्तार केंद्र का बाह्य रोगी विभाग वर्ष 2012 से चालू है। इस संस्थान में एक राष्ट्रीय कैंसर संस्थान का भी निर्माण किया गया है, जिसकी आधारशिला 3 जनवरी, 2014 को तत्कालीन प्रधानमंत्री डॉ. मनमोहन सिंह ने रखी थी। यह देश का सबसे बड़ा कैंसर संस्थान है।",
            answerEnglish: "The State Government allotted 300 acres of land at Badsa village in Jhajjar district to set up an expansion center of All India Institute of Medical Sciences (AIIMS). The outpatient department has been operational since 2012. A National Cancer Institute has also been constructed in this institute, whose foundation was laid on 3rd January, 2014 by the then Prime Minister Dr. Manmohan Singh. It is the largest cancer institute in the country."
        },
        {
            questionHindi: "हरियाणा में आयुष विभाग कब स्थापित हुआ और इसके क्या कार्य हैं?",
            questionEnglish: "When was the AYUSH Department established in Haryana and what are its functions?",
            answerHindi: "हरियाणा में आयुर्वेदिक चिकित्सा विभाग वर्ष 1977 तक स्वास्थ्य विभाग के नियंत्रण में कार्य करता था, लेकिन राज्य सरकार ने वर्ष 1977 में आयुष विभाग के लिए एक पूर्णकालिक निदेशालय की स्थापना की। 1 अप्रैल, 2006 से आयुर्वेद निदेशालय का नाम बदलकर हरियाणा का आयुष विभाग कर दिया गया। यह विभाग स्वास्थ्य एवं आयुष मंत्रालय के अधीन कार्य करता है। राज्य में 11 आयुर्वेदिक कॉलेज और एक होम्योपैथिक कॉलेज हैं।",
            answerEnglish: "The Ayurvedic Medicine Department of Haryana worked under the Health Department till 1977, but the State Government set up a full-time directorate for the AYUSH department in 1977. From 1st April, 2006, the Directorate of Ayurveda was renamed as AYUSH Department of Haryana. This department works under the Ministry of Health and AYUSH. There are 11 Ayurvedic colleges and one homeopathic college in the state."
        }
    ];

    // Literacy Statistics
    const literacyStats = [
        { label: "Overall Literacy", labelHindi: "कुल साक्षरता", value: "75.6%", color: "bg-blue-500" },
        { label: "Male Literacy", labelHindi: "पुरुष साक्षरता", value: "84.1%", color: "bg-green-500" },
        { label: "Female Literacy", labelHindi: "महिला साक्षरता", value: "65.9%", color: "bg-pink-500" },
        { label: "National Rank", labelHindi: "राष्ट्रीय रैंक", value: "22nd", color: "bg-purple-500" }
    ];

    const districtLiteracy = [
        { district: "Gurugram", districtHindi: "गुरुग्राम", rate: "84.7%", rank: "Highest", rankHindi: "उच्चतम" },
        { district: "Mewat (Nuh)", districtHindi: "मेवात (नूह)", rate: "54.1%", rank: "Lowest", rankHindi: "न्यूनतम" }
    ];

    // School Statistics
    const schoolStats = [
        { level: "Primary (Classes 1-5)", levelHindi: "प्राथमिक (कक्षा 1-5)", count: "8,743", icon: School },
        { level: "Middle (Classes 6-8)", levelHindi: "माध्यमिक (कक्षा 6-8)", count: "1,287", icon: School },
        { level: "High/Higher Secondary (9-12)", levelHindi: "उच्च/उच्चतर माध्यमिक (9-12)", count: "1,960", icon: School }
    ];

    // Central Government Schemes for Education
    const centralEducationSchemes = [
        {
            name: "Beti Bachao Beti Padhao",
            nameHindi: "बेटी बचाओ बेटी पढ़ाओ",
            launched: "22nd January, 2015 at Panipat",
            launchedHindi: "22 जनवरी, 2015 पानीपत",
            objective: "Eliminate sex discrimination and provide education to girls. Sakshi Malik is Brand Ambassador.",
            objectiveHindi: "लिंग भेदभाव समाप्त करना और बालिकाओं को शिक्षा प्रदान करना। साक्षी मलिक ब्रांड एंबेसडर हैं।"
        },
        {
            name: "Aarohi Model School",
            nameHindi: "आरोही मॉडल स्कूल",
            launched: "2011-12",
            launchedHindi: "2011-12",
            objective: "Improve education level in 36 Educationally Backward Blocks (classes 6-12) in 10 districts.",
            objectiveHindi: "10 जिलों के 36 शैक्षिक रूप से पिछड़े ब्लॉकों में शिक्षा स्तर सुधारना (कक्षा 6-12)।"
        },
        {
            name: "Rashtriya Madhyamik Shiksha Abhiyan",
            nameHindi: "राष्ट्रीय माध्यमिक शिक्षा अभियान",
            launched: "2009 (Implemented 2009-11 in Haryana)",
            launchedHindi: "2009 (हरियाणा में 2009-11 में लागू)",
            objective: "Universal access to secondary education by 2017, universal retention by 2020.",
            objectiveHindi: "2017 तक माध्यमिक शिक्षा तक सार्वभौमिक पहुंच, 2020 तक सार्वभौमिक प्रतिधारण।"
        },
        {
            name: "Sarva Shiksha Abhiyan",
            nameHindi: "सर्व शिक्षा अभियान",
            launched: "2001 (Implemented 2002 in Haryana)",
            launchedHindi: "2001 (हरियाणा में 2002 में लागू)",
            objective: "Remove gender and social inequality. Build new schools, rooms, toilets, train teachers.",
            objectiveHindi: "लैंगिक और सामाजिक असमानता दूर करना। नए स्कूल, कमरे, शौचालय बनाना, शिक्षकों को प्रशिक्षित करना।"
        },
        {
            name: "Mid-day Meal Scheme",
            nameHindi: "मध्याह्न भोजन योजना",
            launched: "15th August, 1995",
            launchedHindi: "15 अगस्त, 1995",
            objective: "Provide nutritious food to increase enrollment and attendance of children.",
            objectiveHindi: "बच्चों का नामांकन और उपस्थिति बढ़ाने के लिए पौष्टिक भोजन प्रदान करना।"
        }
    ];

    // State Government Schemes for Education
    const stateEducationSchemes = [
        {
            name: "Reading Mission 2022",
            nameHindi: "रीडिंग मिशन 2022",
            objective: "Encourage reading habit. Monthly book review, mass book reading on 4th Saturday.",
            objectiveHindi: "पढ़ने की आदत को प्रोत्साहित करना। मासिक पुस्तक समीक्षा, चौथे शनिवार को सामूहिक पठन।"
        },
        {
            name: "Samagra Shiksha",
            nameHindi: "समग्र शिक्षा",
            objective: "Inclusive and equitable quality education from pre-nursery to senior secondary by 2030.",
            objectiveHindi: "2030 तक प्री-नर्सरी से सीनियर सेकेंडरी तक समावेशी और समान गुणवत्ता वाली शिक्षा।"
        },
        {
            name: "CM School Beautification Scheme",
            nameHindi: "मुख्यमंत्री स्कूल सौंदर्यीकरण योजना",
            objective: "Make students sensitive towards school hygiene. Awards: Block- ₹50,000, District- ₹1 Lakh, State- ₹5 Lakh.",
            objectiveHindi: "छात्रों को स्कूल स्वच्छता के प्रति संवेदनशील बनाना। पुरस्कार: ब्लॉक- ₹50,000, जिला- ₹1 लाख, राज्य- ₹5 लाख।"
        },
        {
            name: "Free Education for Girls",
            nameHindi: "बालिकाओं के लिए निःशुल्क शिक्षा",
            objective: "Free education up to graduation. Transport facility for girls in Mewat and Morni areas.",
            objectiveHindi: "स्नातक तक निःशुल्क शिक्षा। मेवात और मोरनी क्षेत्रों की बालिकाओं के लिए परिवहन सुविधा।"
        },
        {
            name: "Heritage Corner Scheme",
            nameHindi: "हेरिटेज कॉर्नर योजना",
            objective: "Announced 30th December, 2020. Students learn about glorious history, culture and national heroes.",
            objectiveHindi: "30 दिसंबर, 2020 को घोषित। छात्र गौरवशाली इतिहास, संस्कृति और राष्ट्रीय नायकों से परिचित होंगे।"
        }
    ];

    // Major State Universities
    const stateUniversities = [
        {
            name: "Kurukshetra University",
            nameHindi: "कुरुक्षेत्र विश्वविद्यालय",
            location: "Kurukshetra",
            locationHindi: "कुरुक्षेत्र",
            established: "11th January, 1956",
            establishedHindi: "11 जनवरी, 1956",
            details: "First university of Haryana. Started with Sanskrit department only. Spread over 400 acres.",
            detailsHindi: "हरियाणा का पहला विश्वविद्यालय। केवल संस्कृत विभाग से शुरू। 400 एकड़ में फैला।"
        },
        {
            name: "CCS Agricultural University",
            nameHindi: "चौधरी चरण सिंह कृषि विश्वविद्यालय",
            location: "Hisar",
            locationHindi: "हिसार",
            established: "2nd February, 1970",
            establishedHindi: "2 फरवरी, 1970",
            details: "One of Asia's largest universities. Won Sardar Patel Outstanding Institute Award 2016.",
            detailsHindi: "एशिया के सबसे बड़े विश्वविद्यालयों में से एक। 2016 में सरदार पटेल उत्कृष्ट संस्थान पुरस्कार।"
        },
        {
            name: "Maharishi Dayanand University",
            nameHindi: "महर्षि दयानंद विश्वविद्यालय",
            location: "Rohtak",
            locationHindi: "रोहतक",
            established: "1976",
            establishedHindi: "1976",
            details: "36 departments. Satellite campuses in Rewari and Gurugram.",
            detailsHindi: "36 विभाग। रेवाड़ी और गुरुग्राम में सैटेलाइट कैंपस।"
        },
        {
            name: "Chaudhary Devi Lal University",
            nameHindi: "चौधरी देवी लाल विश्वविद्यालय",
            location: "Sirsa",
            locationHindi: "सिरसा",
            established: "5th April, 2003",
            establishedHindi: "5 अप्रैल, 2003",
            details: "Named after former Deputy PM. 16 academic departments. Spread over 6 acres.",
            detailsHindi: "पूर्व उप-प्रधानमंत्री के नाम पर। 16 शैक्षणिक विभाग। 6 एकड़ में फैला।"
        },
        {
            name: "Bhagat Phool Singh Mahila Vishwavidyalaya",
            nameHindi: "भगत फूल सिंह महिला विश्वविद्यालय",
            location: "Khanpur Kalan, Sonipat",
            locationHindi: "खानपुर कलां, सोनीपत",
            established: "2006",
            establishedHindi: "2006",
            details: "First women's university in North India. India-Asian Study Center established under UGC.",
            detailsHindi: "उत्तर भारत का पहला महिला विश्वविद्यालय। यूजीसी के तहत भारत-एशियाई अध्ययन केंद्र।"
        },
        {
            name: "Central University of Haryana",
            nameHindi: "हरियाणा केंद्रीय विश्वविद्यालय",
            location: "Janta-Pali, Mahendragarh",
            locationHindi: "जांटा-पाली, महेंद्रगढ़",
            established: "2009",
            establishedHindi: "2009",
            details: "Spread over 488 acres. Temporarily running in Narnaul Government College. 30 departments.",
            detailsHindi: "488 एकड़ में फैला। अस्थायी रूप से नारनौल राजकीय महाविद्यालय में संचालित। 30 विभाग।"
        }
    ];

    // Other State Universities
    const otherUniversities = [
        { name: "Pt. BD Sharma University of Health Sciences", nameHindi: "पं. बी.डी. शर्मा स्वास्थ्य विज्ञान विश्वविद्यालय", location: "Rohtak", locationHindi: "रोहतक", year: "2008" },
        { name: "Dr. Bhimrao Ambedkar National Law University", nameHindi: "डॉ. भीमराव अंबेडकर राष्ट्रीय विधि विश्वविद्यालय", location: "Sonipat", locationHindi: "सोनीपत", year: "2012" },
        { name: "Lala Lajpat Rai University of Veterinary", nameHindi: "लाला लाजपत राय पशु चिकित्सा विश्वविद्यालय", location: "Hisar", locationHindi: "हिसार", year: "2012" },
        { name: "Indira Gandhi University", nameHindi: "इंदिरा गांधी विश्वविद्यालय", location: "Rewari", locationHindi: "रेवाड़ी", year: "2013" },
        { name: "Chaudhary Bansilal University", nameHindi: "चौधरी बंसीलाल विश्वविद्यालय", location: "Bhiwani", locationHindi: "भिवानी", year: "2014" },
        { name: "Chaudhary Ranbir Singh University", nameHindi: "चौधरी रणबीर सिंह विश्वविद्यालय", location: "Jind", locationHindi: "जींद", year: "2014" },
        { name: "Haryana Vishwakarma Skill University", nameHindi: "हरियाणा विश्वकर्मा कौशल विश्वविद्यालय", location: "Palwal", locationHindi: "पलवल", year: "2017" },
        { name: "Gurugram University", nameHindi: "गुरुग्राम विश्वविद्यालय", location: "Gurugram", locationHindi: "गुरुग्राम", year: "2017" }
    ];

    // Prestigious Institutions
    const prestigiousInstitutions = [
        {
            name: "National Dairy Research Institute",
            nameHindi: "राष्ट्रीय डेयरी अनुसंधान संस्थान",
            location: "Karnal",
            locationHindi: "करनाल",
            established: "1989 (Deemed University status)",
            establishedHindi: "1989 (डीम्ड विश्वविद्यालय दर्जा)",
            details: "Originally established in Bengaluru 1923. Transferred to Karnal 1955.",
            detailsHindi: "मूल रूप से 1923 में बेंगलुरु में स्थापित। 1955 में करनाल स्थानांतरित।"
        },
        {
            name: "IIM Rohtak",
            nameHindi: "भारतीय प्रबंधन संस्थान, रोहतक",
            location: "Rohtak",
            locationHindi: "रोहतक",
            established: "2009",
            establishedHindi: "2009",
            details: "8th IIM. Motto: 'Gyanen Gunen Ch Prabandh'. Under 11th Five Year Plan.",
            detailsHindi: "8वां आईआईएम। ध्येय वाक्य: 'ज्ञानेन गुणेन च प्रबंध'। 11वीं पंचवर्षीय योजना के तहत।"
        },
        {
            name: "National Institute of Technology",
            nameHindi: "राष्ट्रीय प्रौद्योगिकी संस्थान",
            location: "Kurukshetra",
            locationHindi: "कुरुक्षेत्र",
            established: "1963 (NIT status 2002)",
            establishedHindi: "1963 (एनआईटी दर्जा 2002)",
            details: "Originally REC. Offers B.Tech, M.Tech, Ph.D, MBA.",
            detailsHindi: "मूल रूप से आरईसी। बी.टेक, एम.टेक, पीएचडी, एमबीए प्रदान करता है।"
        },
        {
            name: "Indian Institute of Wheat and Barley Research",
            nameHindi: "भारतीय गेहूं और जौ अनुसंधान संस्थान",
            location: "Karnal",
            locationHindi: "करनाल",
            established: "1978",
            establishedHindi: "1978",
            details: "Ensures food security by improving wheat and rice productivity.",
            detailsHindi: "गेहूं और चावल की उत्पादकता में सुधार कर खाद्य सुरक्षा सुनिश्चित करता है।"
        }
    ];

    // Jawahar Navodaya Vidyalayas
    const navodayaVidyalayas = [
        { district: "Ambala", districtHindi: "अंबाला", location: "Po Kaulan", locationHindi: "पो कौलां" },
        { district: "Yamananagar", districtHindi: "यमुनानगर", location: "Khijarabad", locationHindi: "खिजराबाद" },
        { district: "Panchkula", districtHindi: "पंचकूला", location: "Moli", locationHindi: "मोली" },
        { district: "Kurukshetra", districtHindi: "कुरुक्षेत्र", location: "Nivarsi", locationHindi: "निवारसी" },
        { district: "Karnal", districtHindi: "करनाल", location: "Sagga", locationHindi: "सग्गा" },
        { district: "Panipat", districtHindi: "पानीपत", location: "Naultha", locationHindi: "नौलथा" },
        { district: "Kaithal", districtHindi: "कैथल", location: "Titram", locationHindi: "तितरम" },
        { district: "Sonipat", districtHindi: "सोनीपत", location: "Butana", locationHindi: "बुटाना" },
        { district: "Rohtak", districtHindi: "रोहतक", location: "Gushkani", locationHindi: "गुश्कानी" },
        { district: "Jhajjar", districtHindi: "झज्जर", location: "Kaloi", locationHindi: "कलोई" },
        { district: "Rewari", districtHindi: "रेवाड़ी", location: "Nichana", locationHindi: "निचाना" },
        { district: "Nuh", districtHindi: "नूह", location: "Nagina", locationHindi: "नगीना" },
        { district: "Hisar", districtHindi: "हिसार", location: "Pabra", locationHindi: "पाबरा" },
        { district: "Sirsa", districtHindi: "सिरसा", location: "Oda, Dabwali", locationHindi: "ओडा, डबवाली" },
        { district: "Fatehabad", districtHindi: "फतेहाबाद", location: "Khedakhedi", locationHindi: "खेड़ाखेड़ी" },
        { district: "Jind", districtHindi: "जींद", location: "Khungakhoti", locationHindi: "खुंगाखोटी" },
        { district: "Bhiwani", districtHindi: "भिवानी", location: "Devarala", locationHindi: "देवराला" },
        { district: "Mahendragarh", districtHindi: "महेंद्रगढ़", location: "Kharkheda", locationHindi: "खरखेड़ा" },
        { district: "Gurugram", districtHindi: "गुरुग्राम", location: "Farukhnaigar", locationHindi: "फरुखनगर" },
        { district: "Faridabad", districtHindi: "फरीदाबाद", location: "Motuka", locationHindi: "मोटुका" }
    ];

    // Medical Colleges - Government
    const govtMedicalColleges = [
        { name: "Pt. Bhagwat Dayal Sharma PGIMS", nameHindi: "पं. भगवत दयाल शर्मा स्नातकोत्तर आयुर्विज्ञान संस्थान", location: "Rohtak", locationHindi: "रोहतक", year: "1960" },
        { name: "Bhagat Phool Singh Govt. Women Medical College", nameHindi: "भगत फूल सिंह राजकीय महिला चिकित्सा महाविद्यालय", location: "Khanpur Kalan, Sonipat", locationHindi: "खानपुर कलां, सोनीपत", year: "-" },
        { name: "Shaheed Hasan Khan Mewati Govt. Medical College", nameHindi: "शहीद हसन खान मेवाती राजकीय चिकित्सा महाविद्यालय", location: "Nalhar, Nuh", locationHindi: "नल्हड़, नूह", year: "-" },
        { name: "Kalpana Chawla Medical College", nameHindi: "कल्पना चावला चिकित्सा महाविद्यालय", location: "Karnal", locationHindi: "करनाल", year: "2017" },
        { name: "ESIC Medical College", nameHindi: "ईएसआईसी चिकित्सा महाविद्यालय", location: "Faridabad", locationHindi: "फरीदाबाद", year: "-" },
        { name: "Maharaja Agrasen Medical College", nameHindi: "महाराजा अग्रसेन चिकित्सा महाविद्यालय", location: "Agroha", locationHindi: "अग्रोहा", year: "-", note: "Govt-aided", noteHindi: "सरकारी सहायता प्राप्त" }
    ];

    // Private Medical Colleges
    const privateMedicalColleges = [
        { name: "MM Institute of Medical Sciences", nameHindi: "महर्षि मार्कंडेश्वर आयुर्विज्ञान संस्थान", location: "Mullana, Ambala", locationHindi: "मुलाना, अंबाला" },
        { name: "SGT Medical College", nameHindi: "श्री गुरु गोबिंद सिंह त्रिशताब्दी चिकित्सा महाविद्यालय", location: "Gurugram", locationHindi: "गुरुग्राम" },
        { name: "NC Medical College", nameHindi: "एनसी चिकित्सा महाविद्यालय", location: "Israna, Panipat", locationHindi: "इसराना, पानीपत" },
        { name: "World College of Medical Science", nameHindi: "वर्ल्ड कॉलेज ऑफ मेडिकल साइंस", location: "Jhajjar", locationHindi: "झज्जर" },
        { name: "Adesh Medical College", nameHindi: "आदेश चिकित्सा महाविद्यालय", location: "Mohri, Kurukshetra", locationHindi: "मोहरी, कुरुक्षेत्र" }
    ];

    // Health Statistics
    const healthStats = [
        { label: "Hospitals", labelHindi: "अस्पताल", value: "68", icon: Hospital },
        { label: "Community Health Centers", labelHindi: "सामुदायिक स्वास्थ्य केंद्र", value: "133", icon: Building2 },
        { label: "Primary Health Centers", labelHindi: "प्राथमिक स्वास्थ्य केंद्र", value: "537", icon: Stethoscope },
        { label: "Sub Health Centers", labelHindi: "उप-स्वास्थ्य केंद्र", value: "2,655", icon: Heart },
        { label: "Trauma Centers", labelHindi: "ट्रॉमा सेंटर", value: "7", icon: Ambulance },
        { label: "Govt Medical Colleges", labelHindi: "सरकारी चिकित्सा महाविद्यालय", value: "5", icon: University }
    ];

    // Health Schemes
    const healthSchemes = [
        {
            name: "Limited Cashless Medical Services",
            nameHindi: "सीमित कैशलेस चिकित्सा सेवा योजना",
            launched: "30th November, 2017",
            launchedHindi: "30 नवंबर, 2017",
            objective: "For govt employees/pensioners. ₹15 lakh for 6 critical conditions.",
            objectiveHindi: "सरकारी कर्मचारियों/पेंशनरों के लिए। 6 गंभीर स्थितियों के लिए ₹15 लाख।"
        },
        {
            name: "Tuberculosis-Free Haryana",
            nameHindi: "क्षय रोग मुक्त हरियाणा",
            launched: "20th November, 2015",
            launchedHindi: "20 नवंबर, 2015",
            objective: "Launched from Gurugram. Implemented under PPP model.",
            objectiveHindi: "गुरुग्राम से शुरू। पीपीपी मॉडल के तहत कार्यान्वित।"
        },
        {
            name: "CM Free Treatment Scheme",
            nameHindi: "मुख्यमंत्री निःशुल्क इलाज योजना",
            launched: "1st January, 2014",
            launchedHindi: "1 जनवरी, 2014",
            objective: "7 free services: Surgery, diagnosis, OPD, medicines, transport etc.",
            objectiveHindi: "7 निःशुल्क सेवाएं: सर्जरी, जांच, ओपीडी, दवाएं, परिवहन आदि।"
        },
        {
            name: "Matra Suraksha Programme",
            nameHindi: "मातृ सुरक्षा कार्यक्रम",
            launched: "April, 2008",
            launchedHindi: "अप्रैल, 2008",
            objective: "Maternal mortality reduced from 176 (1991-2001) to 91 (2020). ₹1,500 incentive for SC/ST women.",
            objectiveHindi: "मातृ मृत्यु दर 176 (1991-2001) से घटकर 91 (2020) हुई। एससी/एसटी महिलाओं को ₹1,500 प्रोत्साहन।"
        },
        {
            name: "Mission Indradhanush",
            nameHindi: "मिशन इंद्रधनुष",
            launched: "7th April, 2015 in Haryana",
            launchedHindi: "7 अप्रैल, 2015 हरियाणा में",
            objective: "7 vaccines against 7 diseases: TB, Polio, Hepatitis-B, Diphtheria, Pertussis, Tetanus, Measles.",
            objectiveHindi: "7 बीमारियों के खिलाफ 7 टीके: टीबी, पोलियो, हेपेटाइटिस-बी, डिप्थीरिया, काली खांसी, टेटनस, खसरा।"
        }
    ];

    // AYUSH Statistics
    const ayushStats = [
        { type: "Unani Hospital", typeHindi: "यूनानी अस्पताल", count: "1" },
        { type: "Unani Dispensary", typeHindi: "यूनानी औषधालय", count: "19" },
        { type: "Homeopathic Dispensary", typeHindi: "होम्योपैथिक औषधालय", count: "25" },
        { type: "Ayurvedic Dispensary", typeHindi: "आयुर्वेदिक औषधालय", count: "511" },
        { type: "Ayurvedic Primary Health Center", typeHindi: "आयुर्वेदिक प्राथमिक स्वास्थ्य केंद्र", count: "6" },
        { type: "Ayurvedic Hospital", typeHindi: "आयुर्वेदिक अस्पताल", count: "4" }
    ];

    // AYUSH Colleges
    const ayushColleges = [
        { name: "Shri Krishna Government Ayurvedic College", nameHindi: "श्रीकृष्ण राजकीय आयुर्वेदिक महाविद्यालय", location: "Kurukshetra", locationHindi: "कुरुक्षेत्र" },
        { name: "MSM Institute of Ayurveda", nameHindi: "एमएसएम आयुर्वेद संस्थान", location: "Khanpur Kalan", locationHindi: "खानपुर कलां" },
        { name: "Baba Mastanath Ayurvedic College", nameHindi: "बाबा मस्तनाथ आयुर्वेदिक कॉलेज", location: "Asthal Bohar, Rohtak", locationHindi: "अस्थल बोहर, रोहतक" },
        { name: "Gaur Brahmin Ayurvedic College", nameHindi: "गौड़ ब्राह्मण आयुर्वेदिक कॉलेज", location: "Brahmanwas, Rohtak", locationHindi: "ब्रह्मणवास, रोहतक" },
        { name: "Baba Khetanath Ayurvedic College", nameHindi: "बाबा खेतानाथ आयुर्वेदिक कॉलेज", location: "Pattikada, Narnaul", locationHindi: "पत्तीकड़ा, नारनौल" },
        { name: "JR Kisan Homoeopathic College", nameHindi: "जे.आर. किसान होम्योपैथिक कॉलेज", location: "Asthal Bohar, Rohtak", locationHindi: "अस्थल बोहर, रोहतक" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 dark:from-emerald-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium backdrop-blur-sm">
                        <GraduationCap className="w-4 h-4" />
                        <Heart className="w-4 h-4" />
                        {language === "hindi" ? "शिक्षा और स्वास्थ्य - हरियाणा सरकार" : "Education and Health - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा में" : "Education and"} <span className="text-emerald-600 dark:text-emerald-400">{language === "hindi" ? "शिक्षा और स्वास्थ्य" : "Health in Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा में साक्षरता, प्राथमिक और माध्यमिक शिक्षा, उच्च शिक्षा, तकनीकी शिक्षा, स्वास्थ्य सेवाओं, चिकित्सा संस्थानों और स्वास्थ्य योजनाओं की संपूर्ण जानकारी"
                            : "Complete information about literacy, primary and secondary education, higher education, technical education, health services, medical institutions, and health schemes in Haryana"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <GraduationCap className="w-4 h-4 text-emerald-600" />
                            <span>{language === "hindi" ? "75.6% साक्षरता" : "75.6% Literacy"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <School className="w-4 h-4 text-emerald-600" />
                            <span>{language === "hindi" ? "11,990+ स्कूल" : "11,990+ Schools"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <University className="w-4 h-4 text-emerald-600" />
                            <span>{language === "hindi" ? "43 विश्वविद्यालय" : "43 Universities"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Hospital className="w-4 h-4 text-emerald-600" />
                            <span>{language === "hindi" ? "68 अस्पताल" : "68 Hospitals"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Introduction & Literacy Section */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-emerald-500/20">
                                <Sparkles className="w-5 h-5 text-emerald-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "साक्षरता दर" : "Literacy Rate"}</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            {literacyStats.map((stat, idx) => (
                                <div key={idx} className={`${stat.color} bg-opacity-10 rounded-xl p-4 text-center`}>
                                    <div className={`text-3xl font-bold ${stat.color.replace('bg-', 'text-')}`}>{stat.value}</div>
                                    <p className="text-sm text-muted-foreground">{language === "hindi" ? stat.labelHindi : stat.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {districtLiteracy.map((dist, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-4">
                                    <p className="font-medium text-emerald-600">{language === "hindi" ? dist.districtHindi : dist.district}</p>
                                    <p className="text-2xl font-bold">{dist.rate}</p>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? dist.rankHindi : dist.rank}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* School Statistics */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/30">
                                <School className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "स्कूल सांख्यिकी (आर्थिक सर्वेक्षण 2020-21)" : "School Statistics (Economic Survey 2020-21)"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {schoolStats.map((stat, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-5 border text-center">
                                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                    <div className="text-3xl font-bold text-blue-600">{stat.count}</div>
                                    <p className="text-sm text-muted-foreground">{language === "hindi" ? stat.levelHindi : stat.level}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 bg-card rounded-xl p-4 border">
                            <h3 className="font-semibold text-blue-600 mb-2">{language === "hindi" ? "हरियाणा विद्यालय शिक्षा बोर्ड" : "Haryana School Education Board"}</h3>
                            <p className="text-sm text-muted-foreground">
                                {language === "hindi"
                                    ? "1969 में चंडीगढ़ में स्थापित, 1981 में भिवानी स्थानांतरित। 10+2+3 प्रणाली 1985-86 में लागू। हरियाणा CCE प्रणाली लागू करने वाला पहला राज्य है।"
                                    : "Established 1969 in Chandigarh, shifted to Bhiwani 1981. 10+2+3 system introduced 1985-86. Haryana is first state to implement CCE system at school level."}
                            </p>
                        </div>
                    </div>

                    {/* Central Government Education Schemes */}
                    <div className="bg-indigo-500/5 rounded-2xl p-6 md:p-8 border-2 border-indigo-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-500/30">
                                <Landmark className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-indigo-600">{language === "hindi" ? "केंद्र सरकार की शिक्षा योजनाएं" : "Central Government Education Schemes"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {centralEducationSchemes.map((scheme, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-indigo-600">{language === "hindi" ? scheme.nameHindi : scheme.name}</h3>
                                    <p className="text-xs text-indigo-500 mt-1">{language === "hindi" ? scheme.launchedHindi : scheme.launched}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? scheme.objectiveHindi : scheme.objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* State Government Education Schemes */}
                    <div className="bg-violet-500/5 rounded-2xl p-6 md:p-8 border-2 border-violet-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-violet-500/30">
                                <Building2 className="w-5 h-5 text-violet-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-violet-600">{language === "hindi" ? "राज्य सरकार की शिक्षा योजनाएं" : "State Government Education Schemes"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {stateEducationSchemes.map((scheme, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-violet-600">{language === "hindi" ? scheme.nameHindi : scheme.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? scheme.objectiveHindi : scheme.objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SC/ST Student Schemes */}
                    <div className="bg-amber-500/5 rounded-2xl p-6 md:p-8 border-2 border-amber-500/20">
                        <h3 className="text-xl font-bold text-amber-600 mb-3">{language === "hindi" ? "एससी/एसटी छात्रों के लिए योजनाएं" : "Schemes for SC/ST Students"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="bg-card rounded-xl p-3 border">
                                <p className="font-medium text-amber-600">{language === "hindi" ? "निःशुल्क पाठ्य-पुस्तक योजना" : "Free Text Book Scheme"}</p>
                                <p className="text-xs text-muted-foreground">{language === "hindi" ? "कक्षा 9-12 के एससी छात्रों को निःशुल्क पुस्तकें" : "Free books for SC students classes 9-12"}</p>
                            </div>
                            <div className="bg-card rounded-xl p-3 border">
                                <p className="font-medium text-amber-600">{language === "hindi" ? "डॉ. अंबेडकर मेधावी छात्र योजना" : "Dr. Ambedkar Medhavi Chhatar Yojna"}</p>
                                <p className="text-xs text-muted-foreground">{language === "hindi" ? "₹4,000-12,000 वार्षिक छात्रवृत्ति" : "₹4,000-12,000 annual scholarship"}</p>
                            </div>
                            <div className="bg-card rounded-xl p-3 border">
                                <p className="font-medium text-amber-600">{language === "hindi" ? "बाबू जगजीवन राम छात्रावास योजना" : "Babu Jagjivan Ram Hostel Scheme"}</p>
                                <p className="text-xs text-muted-foreground">{language === "hindi" ? "एससी/पिछड़ा वर्ग के छात्रों के लिए आवास" : "Housing for SC/backward class students"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Major State Universities */}
                    <div className="bg-purple-500/5 rounded-2xl p-6 md:p-8 border-2 border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-500/30">
                                <University className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-600">{language === "hindi" ? "प्रमुख राज्य विश्वविद्यालय" : "Major State Universities"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {stateUniversities.map((uni, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-purple-600">{language === "hindi" ? uni.nameHindi : uni.name}</h3>
                                    <p className="text-xs text-muted-foreground">📍 {language === "hindi" ? uni.locationHindi : uni.location} | 📅 {language === "hindi" ? uni.establishedHindi : uni.established}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? uni.detailsHindi : uni.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other State Universities Table */}
                    <div className="bg-cyan-500/5 rounded-2xl p-6 md:p-8 border-2 border-cyan-500/20">
                        <h3 className="text-xl font-bold text-cyan-600 mb-3">{language === "hindi" ? "अन्य राज्य विश्वविद्यालय" : "Other State Universities"}</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 text-cyan-600">{language === "hindi" ? "विश्वविद्यालय" : "University"}</th>
                                        <th className="text-left p-2 text-cyan-600">{language === "hindi" ? "स्थान" : "Location"}</th>
                                        <th className="text-left p-2 text-cyan-600">{language === "hindi" ? "वर्ष" : "Year"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {otherUniversities.map((uni, idx) => (
                                        <tr key={idx} className="border-b hover:bg-muted/30">
                                            <td className="p-2">{language === "hindi" ? uni.nameHindi : uni.name}</td>
                                            <td className="p-2">{language === "hindi" ? uni.locationHindi : uni.location}</td>
                                            <td className="p-2">{uni.year}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">
                            {language === "hindi" ? "नोट: राज्य में कुल 18 राज्य विश्वविद्यालय, 24 निजी विश्वविद्यालय और 1 केंद्रीय विश्वविद्यालय हैं।" : "Note: Total 18 State Universities, 24 Private Universities and 1 Central University in the state."}
                        </p>
                    </div>

                    {/* Prestigious Institutions */}
                    <div className="bg-green-500/5 rounded-2xl p-6 md:p-8 border-2 border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/30">
                                <Trophy className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{language === "hindi" ? "प्रतिष्ठित संस्थान" : "Prestigious Institutions"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {prestigiousInstitutions.map((inst, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-green-600">{language === "hindi" ? inst.nameHindi : inst.name}</h3>
                                    <p className="text-xs text-muted-foreground">📍 {language === "hindi" ? inst.locationHindi : inst.location} | 📅 {language === "hindi" ? inst.establishedHindi : inst.established}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? inst.detailsHindi : inst.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Jawahar Navodaya Vidyalayas */}
                    <div className="bg-orange-500/5 rounded-2xl p-6 md:p-8 border-2 border-orange-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-orange-500/30">
                                <School className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-orange-600">{language === "hindi" ? "जवाहर नवोदय विद्यालय" : "Jawahar Navodaya Vidyalayas"}</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {navodayaVidyalayas.map((jnv, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-2 border text-center">
                                    <p className="font-medium text-orange-600 text-sm">{language === "hindi" ? jnv.districtHindi : jnv.district}</p>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? jnv.locationHindi : jnv.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sainik Schools & NCC */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-rose-500/5 rounded-2xl p-6 border-2 border-rose-500/20">
                            <h3 className="text-xl font-bold text-rose-600 mb-3">{language === "hindi" ? "सैनिक स्कूल" : "Sainik Schools"}</h3>
                            <div className="space-y-3">
                                <div className="bg-card rounded-xl p-3 border">
                                    <p className="font-medium text-rose-600">{language === "hindi" ? "कुंजीपुरा, करनाल" : "Kunjipura, Karnal"}</p>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? "1961 में स्थापित - हरियाणा का पहला सैनिक स्कूल" : "Established 1961 - First Sainik School in Haryana"}</p>
                                </div>
                                <div className="bg-card rounded-xl p-3 border">
                                    <p className="font-medium text-rose-600">{language === "hindi" ? "रेवाड़ी" : "Rewari"}</p>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? "20 अगस्त, 2008 को स्थापित" : "Established 20th August, 2008"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-pink-500/5 rounded-2xl p-6 border-2 border-pink-500/20">
                            <h3 className="text-xl font-bold text-pink-600 mb-3">{language === "hindi" ? "एनसीसी (NCC)" : "NCC"}</h3>
                            <div className="space-y-2">
                                <div className="bg-card rounded-xl p-3 border">
                                    <p className="font-medium text-pink-600">{language === "hindi" ? "मुख्यालय: चंडीगढ़" : "Headquarters: Chandigarh"}</p>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? "ग्रुप मुख्यालय: अंबाला और रोहतक" : "Group HQ: Ambala and Rohtak"}</p>
                                </div>
                                <div className="bg-card rounded-xl p-3 border">
                                    <p className="font-medium text-pink-600">{language === "hindi" ? "एनसीसी अकादमी: करनाल" : "NCC Academy: Karnal"}</p>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? "बालिका बटालियन: अंबाला, रोहतक, हिसार" : "Girl's Battalion: Ambala, Rohtak, Hisar"}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Health Statistics */}
                    <div className="bg-red-500/5 rounded-2xl p-6 md:p-8 border-2 border-red-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-red-500/30">
                                <Activity className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-600">{language === "hindi" ? "स्वास्थ्य सांख्यिकी (आर्थिक सर्वेक्षण 2020-21)" : "Health Statistics (Economic Survey 2020-21)"}</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                            {healthStats.map((stat, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-3 border text-center">
                                    <stat.icon className="w-5 h-5 text-red-600 mx-auto mb-1" />
                                    <div className="text-xl font-bold text-red-600">{stat.value}</div>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? stat.labelHindi : stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Government Medical Colleges */}
                    <div className="bg-pink-500/5 rounded-2xl p-6 md:p-8 border-2 border-pink-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-pink-500/30">
                                <Hospital className="w-5 h-5 text-pink-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-pink-600">{language === "hindi" ? "सरकारी चिकित्सा महाविद्यालय" : "Government Medical Colleges"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {govtMedicalColleges.map((college, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-pink-600">{language === "hindi" ? college.nameHindi : college.name}</h3>
                                    <p className="text-sm text-muted-foreground">{language === "hindi" ? college.locationHindi : college.location} {college.year && `(${college.year})`}</p>
                                    {college.note && <p className="text-xs text-pink-500">{language === "hindi" ? college.noteHindi : college.note}</p>}
                                </div>
                            ))}
                        </div>
                        <h3 className="text-lg font-semibold text-pink-600 mt-4 mb-2">{language === "hindi" ? "निजी चिकित्सा महाविद्यालय" : "Private Medical Colleges"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {privateMedicalColleges.map((college, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-3 border">
                                    <p className="font-medium text-pink-600">{language === "hindi" ? college.nameHindi : college.name}</p>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? college.locationHindi : college.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Health Schemes */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/30">
                                <Shield className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "प्रमुख स्वास्थ्य योजनाएं" : "Major Health Schemes"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {healthSchemes.map((scheme, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-blue-600">{language === "hindi" ? scheme.nameHindi : scheme.name}</h3>
                                    <p className="text-xs text-blue-500 mt-1">{language === "hindi" ? scheme.launchedHindi : scheme.launched}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? scheme.objectiveHindi : scheme.objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AYUSH Department */}
                    <div className="bg-teal-500/5 rounded-2xl p-6 md:p-8 border-2 border-teal-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-teal-500/30">
                                <FlaskConical className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-teal-600">{language === "hindi" ? "आयुष विभाग" : "AYUSH Department"}</h2>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            {language === "hindi"
                                ? "1977 में पूर्णकालिक निदेशालय स्थापित। 1 अप्रैल, 2006 को आयुर्वेद निदेशालय का नाम बदलकर आयुष विभाग किया गया।"
                                : "Full-time directorate established 1977. Renamed AYUSH Department on 1st April, 2006."}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                            {ayushStats.map((stat, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-3 border text-center">
                                    <div className="text-xl font-bold text-teal-600">{stat.count}</div>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? stat.typeHindi : stat.type}</p>
                                </div>
                            ))}
                        </div>
                        <h3 className="font-semibold text-teal-600 mb-2">{language === "hindi" ? "प्रमुख आयुष महाविद्यालय" : "Major AYUSH Colleges"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {ayushColleges.slice(0, 6).map((college, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-2 border">
                                    <p className="font-medium text-teal-600 text-sm">{language === "hindi" ? college.nameHindi : college.name}</p>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? college.locationHindi : college.location}</p>
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
                        {language === "hindi" ? "हरियाणा शिक्षा और स्वास्थ्य: तथ्य सारांश" : "Haryana Education & Health: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">75.6%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "साक्षरता दर (2011)" : "Literacy Rate (2011)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">11,990</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "कुल स्कूल" : "Total Schools"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">43</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "विश्वविद्यालय" : "Universities"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">68</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "अस्पताल" : "Hospitals"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">1960</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "पहला मेडिकल कॉलेज (रोहतक)" : "First Medical College (Rohtak)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">91</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "मातृ मृत्यु दर (2020)" : "Maternal Mortality (2020)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">23</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "केंद्रीय विद्यालय" : "Kendriya Vidyalayas"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">418</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "औद्योगिक प्रशिक्षण संस्थान" : "Industrial Training Institutes"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा की शिक्षा और स्वास्थ्य के" : "Common"} <span className="text-emerald-600">{language === "hindi" ? "बारे में सामान्य प्रश्न" : "Questions About Haryana's Education and Health"}</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-muted/30 transition-colors"
                                >
                                    <span className="font-semibold text-base md:text-lg pr-4">{language === "hindi" ? faq.questionHindi : faq.questionEnglish}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-emerald-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""}`}
                                    />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-96" : "max-h-0"}`}>
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
                            {language === "hindi" ? "अपने हरियाणा शिक्षा और स्वास्थ्य के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Education & Health?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-emerald-600 hover:bg-emerald-700">
                                {language === "hindi" ? "हरियाणा शिक्षा एवं स्वास्थ्य क्विज़ लें" : "Take Haryana Education & Health Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/language-literature" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "भाषा और साहित्य" : "Language and Literature"}
                        </Link>
                        <Link href="/haryana-gk/demographics" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: जनसांख्यिकी" : "Next Chapter: Demographics"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा में शिक्षा और स्वास्थ्य - संपूर्ण संदर्भ" : "Education and Health in Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की साक्षरता दर (75.6%), प्राथमिक और माध्यमिक शिक्षा (11,990 स्कूल), उच्च शिक्षा (43 विश्वविद्यालय), तकनीकी शिक्षा (एनआईटी, आईआईएम), केंद्रीय और राज्य शिक्षा योजनाएं, स्वास्थ्य सेवाएं (68 अस्पताल, 5 सरकारी मेडिकल कॉलेज), एम्स विस्तार केंद्र, आयुष विभाग और प्रमुख स्वास्थ्य योजनाओं के बारे में व्यापक जानकारी प्रदान करता है।"
                            : "This page provides comprehensive information about Haryana's literacy rate (75.6%), primary and secondary education (11,990 schools), higher education (43 universities), technical education (NIT, IIM), central and state education schemes, health services (68 hospitals, 5 govt medical colleges), AIIMS extension center, AYUSH department, and major health schemes."}
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