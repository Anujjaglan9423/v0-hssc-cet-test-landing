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
    Shield,
    Award,
    Trophy,
    Baby,
    Home,
    Wheat,
    Tractor,
    Coins,
    HandHeart,
    UserRound,
    PersonStanding,
    Briefcase,
    Banknote,
    PiggyBank,
    Leaf,
    Flower,
    Rainbow,
    User2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaSocialWelfarePage() {
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
            questionHindi: "हरियाणा में महिला एवं बाल विकास से संबंधित प्रमुख योजनाएं कौन-सी हैं?",
            questionEnglish: "What are the major schemes related to Women and Child Development in Haryana?",
            answerHindi: "प्रमुख योजनाएं हैं: महिला एवं किशोरी सम्मान योजना (निःशुल्क सैनिटरी नैपकिन), मुख्यमंत्री दूध उपहार योजना (फोर्टिफाइड दूध), आपकी बेटी-हमारी बेटी योजना (₹21,000 की राशि), बेटी बचाओ-बेटी पढ़ाओ (22 जनवरी 2015, पानीपत), सुकन्या समृद्धि योजना, लाडली योजना, और मुख्यमंत्री विवाह शगुन योजना (₹11,000 से ₹51,000 तक)।",
            answerEnglish: "Major schemes include: Mahila evam Kishori Samman (free sanitary napkins), Mukhyamantri Doodh Uphar Yojana (fortified milk), Apaki Beti-Hamari Beti Yojana (₹21,000), Beti Bachao-Beti Padhao (22 Jan 2015, Panipat), Sukanya Samriddhi Yojana, Ladli Yojana, and Mukhyamantri Vivah Shagun Yojana (₹11,000-₹51,000)."
        },
        {
            questionHindi: "हरियाणा में वृद्धावस्था सम्मान भत्ता योजना के तहत कितनी पेंशन दी जाती है?",
            questionEnglish: "How much pension is given under the Old Age Samman Allowance Scheme in Haryana?",
            answerHindi: "वृद्धावस्था सम्मान भत्ता योजना के तहत 60 वर्ष या उससे अधिक आयु के वरिष्ठ नागरिकों को, जिनकी वार्षिक आय ₹2,00,000 से कम है, मासिक पेंशन दी जाती है। नवंबर 2018 से यह राशि ₹2,000 प्रति माह कर दी गई है। हरियाणा पहला राज्य है जहां सभी विधवाओं, वृद्धों और निराश्रितों को प्रत्येक माह की 7 तारीख को नियमित पेंशन मिलती है।",
            answerEnglish: "Under Old Age Samman Allowance Scheme, senior citizens aged 60 years or above with annual income below ₹2,00,000 receive monthly pension. From November 2018, this amount has been increased to ₹2,000 per month. Haryana is the first state where all widows, elderly, and destitutes get pension regularly on the 7th of every month."
        },
        {
            questionHindi: "हरियाणा की 'थारी पेंशन-थारे पास' योजना क्या है?",
            questionEnglish: "What is the 'Thari Pension-Thare Pass' scheme of Haryana?",
            answerHindi: "'थारी पेंशन-थारे पास' योजना 4 अगस्त, 2015 को मुख्यमंत्री मनोहर लाल खट्टर द्वारा चंडीगढ़ में शुरू की गई थी। यह एक सामाजिक सुरक्षा योजना है। इस योजना के तहत, लाभार्थियों को उनकी पेंशन सीधे उनके बैंक खाते में प्राप्त होती है, जिससे किसी भी प्रकार की बिचौलियागीरी समाप्त हो जाती है।",
            answerEnglish: "'Thari Pension-Thare Pass' scheme was launched by CM Manohar Lal Khattar on 4th August, 2015 in Chandigarh. It is a social security scheme under which beneficiaries get their pension directly in their bank account, eliminating any kind of mediation."
        },
        {
            questionHindi: "हरियाणा में दिव्यांगजनों के लिए कौन-सी पेंशन योजना है?",
            questionEnglish: "What pension scheme is there for differently-abled persons in Haryana?",
            answerHindi: "दिव्यांगजनों के लिए पेंशन योजना के तहत, उन व्यक्तियों को पेंशन दी जाती है जिनकी विकलांगता 60% या अधिक है और आयु 18 वर्ष से अधिक है। 1 नवंबर, 2018 से ₹2,000 प्रति माह पेंशन दी जाती है (पहले ₹1,600 थी)।",
            answerEnglish: "Under Pension to Differently Abled Persons scheme, those with 60% or more disability and age above 18 years receive pension. From 1st November, 2018, ₹2,000 per month is given (earlier ₹1,600)."
        },
        {
            questionHindi: "हरियाणा में किसानों के लिए भावांतर भरपाई योजना कब शुरू हुई और इसके तहत कौन-सी फसलें शामिल हैं?",
            questionEnglish: "When was Bhavantar Bharpayee Yojana launched for farmers in Haryana and which crops are included?",
            answerHindi: "भावांतर भरपाई योजना 1 जनवरी, 2018 को राज्य सरकार द्वारा शुरू की गई थी। इस योजना का उद्देश्य किसानों को फसलों के मूल्य में होने वाले नुकसान से बचाना है। इस योजना के तहत पहले चार फसलों (टमाटर, प्याज, आलू, फूलगोभी) का न्यूनतम आधार मूल्य निर्धारित किया गया था।",
            answerEnglish: "Bhavantar Bharpayee Yojana was launched by the State Government on 1st January, 2018 to protect farmers from losses in crop prices. Under this scheme, the first minimum base price of four crops (tomato, onion, potato, cauliflower) was fixed."
        },
        {
            questionHindi: "हरियाणा में अंतरजातीय विवाह प्रोत्साहन योजना के तहत कितनी राशि दी जाती है?",
            questionEnglish: "How much amount is given under the Inter-Caste Marriage Incentive Scheme in Haryana?",
            answerHindi: "अंतरजातीय विवाह प्रोत्साहन योजना के तहत, जहां दंपति में से एक अनुसूचित जाति से और दूसरा गैर-अनुसूचित जाति से हो, राज्य सरकार द्वारा अनुदान राशि दी जाती है। पहले यह राशि ₹50,000 थी, जिसे बढ़ाकर वर्तमान में ₹2.5 लाख कर दिया गया है।",
            answerEnglish: "Under Inter-Caste Marriage Incentive Scheme, where one person from the couple is from SC and the other from non-SC category, a grant is provided. Earlier this amount was ₹50,000, which has now been increased to ₹2.5 lakh."
        },
        {
            questionHindi: "हरियाणा की सक्षम युवा योजना क्या है?",
            questionEnglish: "What is the Saksham Yuva Scheme of Haryana?",
            answerHindi: "सक्षम युवा योजना 1 नवंबर, 2016 को हरियाणा स्वर्ण जयंती वर्ष के अवसर पर शुरू की गई थी। यह बेरोजगार स्नातकोत्तर युवाओं को मासिक वित्तीय सहायता प्रदान करती है। स्नातकोत्तर युवाओं को विभिन्न विभागों में 100 घंटे के मानद कार्य के लिए ₹6,000 और बेरोजगारी भत्ता ₹3,000 मिलता है। स्नातकों को ₹1,500 बेरोजगारी भत्ता मिलता है।",
            answerEnglish: "Saksham Yuva Scheme was launched on 1st November, 2016 on the occasion of Haryana Swarna Jayanti Varsha. It provides monthly financial assistance to unemployed post-graduates. Post-graduates get ₹6,000 for 100 hours honorary work in various departments and ₹3,000 as unemployment allowance. Graduates get ₹1,500 unemployment allowance."
        },
        {
            questionHindi: "हरियाणा में ई-नाम (e-NAM) योजना क्या है?",
            questionEnglish: "What is the e-NAM scheme in Haryana?",
            answerHindi: "राष्ट्रीय कृषि बाजार (e-NAM) योजना वर्ष 2017 में हरियाणा राज्य कृषि विपणन बोर्ड द्वारा 54 मंडियों को e-NAM प्लेटफॉर्म से जोड़कर शुरू की गई थी। e-NAM एक ऑनलाइन प्लेटफॉर्म है जो किसानों, व्यापारियों और खरीदारों को प्रशिक्षण सुविधा प्रदान करता है।",
            answerEnglish: "National Agricultural Market (e-NAM) scheme was launched in 2017 by Haryana State Agricultural Marketing Board by linking 54 mandis to the e-NAM platform. e-NAM is an online platform that provides training facility to farmers, traders and buyers."
        }
    ];

    // Women and Child Development Schemes
    const womenChildSchemes = [
        {
            name: "Mahila evam Kishori Samman",
            nameHindi: "महिला एवं किशोरी सम्मान",
            launched: "5th August, 2020",
            launchedHindi: "5 अगस्त, 2020",
            objective: "6 free sanitary napkins to women aged 10-45 years through Anganwadi centres and schools.",
            objectiveHindi: "10-45 वर्ष की महिलाओं को आंगनवाड़ी केंद्रों और स्कूलों के माध्यम से 6 निःशुल्क सैनिटरी नैपकिन।"
        },
        {
            name: "Mukhyamantri Doodh Uphar Yojana",
            nameHindi: "मुख्यमंत्री दूध उपहार योजना",
            launched: "5th August, 2020",
            launchedHindi: "5 अगस्त, 2020",
            objective: "200 ml fortified milk daily to children, pregnant women and lactating mothers at Anganwadi centres.",
            objectiveHindi: "आंगनवाड़ी केंद्रों पर बच्चों, गर्भवती और स्तनपान कराने वाली महिलाओं को 200 मिली फोर्टिफाइड दूध।"
        },
        {
            name: "Haryana Mahila Samridhi Yojana",
            nameHindi: "हरियाणा महिला समृद्धि योजना",
            launched: "July, 2020",
            launchedHindi: "जुलाई, 2020",
            objective: "₹60,000 loan at 5% annual interest for SC women for self-employment.",
            objectiveHindi: "अनुसूचित जाति की महिलाओं को स्वरोजगार के लिए 5% वार्षिक ब्याज पर ₹60,000 का ऋण।"
        },
        {
            name: "Sakhi (One Stop Centre)",
            nameHindi: "सखी (वन स्टॉप सेंटर)",
            launched: "2017",
            launchedHindi: "2017",
            objective: "Medical, counselling, police, legal aid to women suffering from violence. Implemented in 7 districts.",
            objectiveHindi: "हिंसा से पीड़ित महिलाओं को चिकित्सा, परामर्श, पुलिस, कानूनी सहायता। 7 जिलों में कार्यान्वित।"
        },
        {
            name: "Swadhar Greh Yojana",
            nameHindi: "स्वाधार गृह योजना",
            launched: "18th October, 2015",
            launchedHindi: "18 अक्टूबर, 2015",
            objective: "Supportive institutional plan for women in difficult circumstances. Social and economic security.",
            objectiveHindi: "कठिन परिस्थितियों में महिलाओं के लिए सहायक संस्थागत योजना। सामाजिक और आर्थिक सुरक्षा।"
        },
        {
            name: "Mukhyamantri Vivah Shagun Yojana",
            nameHindi: "मुख्यमंत्री विवाह शगुन योजना",
            launched: "July, 2015",
            launchedHindi: "जुलाई, 2015",
            objective: "₹11,000 to ₹51,000 as Shagun for marriage of girls from families with annual income below ₹1 lakh.",
            objectiveHindi: "₹1 लाख से कम वार्षिक आय वाले परिवारों की लड़कियों के विवाह पर ₹11,000 से ₹51,000 तक शगुन।"
        },
        {
            name: "Apaki Beti - Hamari Beti Yojana",
            nameHindi: "आपकी बेटी - हमारी बेटी योजना",
            launched: "8th March, 2015",
            launchedHindi: "8 मार्च, 2015",
            objective: "₹21,000 cheque to first girl child of SC/BPL families born on/after 22 Jan 2015. ₹1,00,000 withdrawal after 18 years.",
            objectiveHindi: "22 जनवरी 2015 के बाद जन्मी एससी/बीपीएल परिवारों की पहली बेटी को ₹21,000 का चेक। 18 वर्ष बाद ₹1,00,000 निकासी।"
        },
        {
            name: "Haryana Kanya Kosh",
            nameHindi: "हरियाणा कन्या कोष",
            launched: "8th March, 2015",
            launchedHindi: "8 मार्च, 2015",
            objective: "Fund for development and empowerment of girls and women. Expected to increase to ₹100 crore.",
            objectiveHindi: "बालिकाओं और महिलाओं के विकास और सशक्तिकरण के लिए कोष। ₹100 करोड़ तक बढ़ाने की योजना।"
        },
        {
            name: "Beti Bachao-Beti Padhao",
            nameHindi: "बेटी बचाओ-बेटी पढ़ाओ",
            launched: "22nd January, 2015",
            launchedHindi: "22 जनवरी, 2015",
            objective: "Launched by PM Modi at Panipat. Address declining child sex ratio. Sakshi Malik is Brand Ambassador.",
            objectiveHindi: "प्रधानमंत्री द्वारा पानीपत में शुभारंभ। गिरते बाल लिंगानुपात को संबोधित करना। साक्षी मलिक ब्रांड एंबेसडर।"
        },
        {
            name: "Sukanya Samriddhi Yojana",
            nameHindi: "सुकन्या समृद्धि योजना",
            launched: "2015",
            launchedHindi: "2015",
            objective: "Minimum ₹250/month deposit. 7.6% interest. 50% withdrawal for marriage (18 years) or higher studies.",
            objectiveHindi: "न्यूनतम ₹250/माह जमा। 7.6% ब्याज। विवाह (18 वर्ष) या उच्च शिक्षा के लिए 50% निकासी।"
        },
        {
            name: "SABLA Scheme",
            nameHindi: "सबला योजना",
            launched: "22nd March, 2011",
            launchedHindi: "22 मार्च, 2011",
            objective: "Adolescent girls (11-18 years) in 6 districts. Nutrition, health, ARSH awareness, vocational skills.",
            objectiveHindi: "6 जिलों में किशोरियों (11-18 वर्ष) के लिए। पोषण, स्वास्थ्य, एआरएसएच जागरूकता, व्यावसायिक कौशल।"
        },
        {
            name: "Ladli Social Security Allowance",
            nameHindi: "लाड़ली सामाजिक सुरक्षा भत्ता",
            launched: "1st January, 2006",
            launchedHindi: "1 जनवरी, 2006",
            objective: "₹1,200 per month to parents (45-60 years) having only girl child/children.",
            objectiveHindi: "केवल बालिका संतान वाले माता-पिता (45-60 वर्ष) को ₹1,200 प्रति माह।"
        },
        {
            name: "Ladli Scheme",
            nameHindi: "लाड़ली योजना",
            launched: "15th August, 2005",
            launchedHindi: "15 अगस्त, 2005",
            objective: "₹5,000 per year for 5 years to parents whose second girl child born on/after 20th August, 2005.",
            objectiveHindi: "20 अगस्त 2005 के बाद दूसरी बेटी के जन्म पर माता-पिता को 5 वर्षों तक ₹5,000 प्रति वर्ष।"
        },
        {
            name: "Apni Beti Apna Dhan Yojana",
            nameHindi: "अपनी बेटी अपना धन योजना",
            launched: "Through Anganwadi centres",
            launchedHindi: "आंगनवाड़ी केंद्रों के माध्यम से",
            objective: "₹500 cash to mother on girl child birth. Indra Vikas Patra of ₹2,500. ₹25,000 after 18 years, ₹35,000 after 22 years.",
            objectiveHindi: "बालिका जन्म पर मां को ₹500 नकद। ₹2,500 का इंद्र विकास पत्र। 18 वर्ष बाद ₹25,000, 22 वर्ष बाद ₹35,000।"
        }
    ];

    // Social Justice and Empowerment Schemes
    const socialJusticeSchemes = [
        {
            name: "Teerth Darshan Scheme",
            nameHindi: "तीर्थ दर्शन योजना",
            launched: "1st April, 2017",
            launchedHindi: "1 अप्रैल, 2017",
            objective: "Senior citizens (60+ years) travel at govt expense. 70% cost borne by govt, 100% for BPL. 400+ destinations.",
            objectiveHindi: "वरिष्ठ नागरिक (60+ वर्ष) सरकारी खर्च पर यात्रा। 70% खर्च सरकार, बीपीएल के लिए 100%। 400+ गंतव्य।"
        },
        {
            name: "Vidhur Pension Yojana",
            nameHindi: "विधुर पेंशन योजना",
            launched: "Financial Budget 2017-18",
            launchedHindi: "वित्तीय बजट 2017-18",
            objective: "₹1,600 monthly pension to widowers. Haryana first state in India to launch such scheme for men.",
            objectiveHindi: "विधुरों को ₹1,600 मासिक पेंशन। पुरुषों के लिए ऐसी योजना शुरू करने वाला हरियाणा भारत का पहला राज्य।"
        },
        {
            name: "Old Age Samman Allowance",
            nameHindi: "वृद्धावस्था सम्मान भत्ता",
            launched: "Ongoing (Increased Nov 2018)",
            launchedHindi: "जारी (नवंबर 2018 में वृद्धि)",
            objective: "₹2,000 monthly pension to 60+ years with annual income below ₹2,00,000. Pension on 7th of every month.",
            objectiveHindi: "₹2,00,000 से कम वार्षिक आय वाले 60+ वर्ष के लोगों को ₹2,000 मासिक पेंशन। प्रत्येक माह की 7 तारीख को पेंशन।"
        },
        {
            name: "Widow Pension Scheme",
            nameHindi: "विधवा पेंशन योजना",
            launched: "Ongoing (Increased Nov 2017)",
            launchedHindi: "जारी (नवंबर 2017 में वृद्धि)",
            objective: "₹1,800 monthly to widows/destitute women (18+ years) with income below ₹2 lakh.",
            objectiveHindi: "₹2 लाख से कम आय वाली विधवाओं/निराश्रित महिलाओं (18+ वर्ष) को ₹1,800 मासिक।"
        },
        {
            name: "Pension to Differently Abled",
            nameHindi: "दिव्यांगजन पेंशन",
            launched: "Ongoing (Increased Nov 2018)",
            launchedHindi: "जारी (नवंबर 2018 में वृद्धि)",
            objective: "₹2,000 monthly to persons with 60% disability, age 18+ years. (Earlier 70% disability required).",
            objectiveHindi: "60% विकलांगता वाले 18+ वर्ष के व्यक्तियों को ₹2,000 मासिक। (पहले 70% विकलांगता आवश्यक थी)।"
        },
        {
            name: "Thari Pension-Thare Pass",
            nameHindi: "थारी पेंशन-थारे पास",
            launched: "4th August, 2015",
            launchedHindi: "4 अगस्त, 2015",
            objective: "Pension directly in bank account. Eliminates mediation. Social security scheme.",
            objectiveHindi: "पेंशन सीधे बैंक खाते में। बिचौलियागीरी समाप्त। सामाजिक सुरक्षा योजना।"
        },
        {
            name: "State Samman Pension for Freedom Fighters",
            nameHindi: "स्वतंत्रता सेनानी राज्य सम्मान पेंशन",
            launched: "Increased 15th August, 2012",
            launchedHindi: "15 अगस्त, 2012 को वृद्धि",
            objective: "₹20,000 monthly pension to freedom fighters and widows. ₹750 monthly fixed medical allowance.",
            objectiveHindi: "स्वतंत्रता सेनानियों और विधवाओं को ₹20,000 मासिक पेंशन। ₹750 मासिक निश्चित चिकित्सा भत्ता।"
        },
        {
            name: "Financial Assistance for Destitute Children",
            nameHindi: "निराश्रित बच्चों को वित्तीय सहायता",
            launched: "1st March, 2009",
            launchedHindi: "1 मार्च, 2009",
            objective: "₹1,000 monthly to children (<21 years) whose parents died, imprisoned for life, or 100% disabled.",
            objectiveHindi: "जिन बच्चों (<21 वर्ष) के माता-पिता की मृत्यु, आजीवन कारावास या 100% विकलांगता, उन्हें ₹1,000 मासिक।"
        },
        {
            name: "Kinnar Bhatta Yojana",
            nameHindi: "किन्नर भत्ता योजना",
            launched: "1st June, 2006 (Increased 2018)",
            launchedHindi: "1 जून, 2006 (2018 में वृद्धि)",
            objective: "₹2,200 monthly to eunuchs (18+ years) with civil surgeon certificate. (Earlier ₹300 per month).",
            objectiveHindi: "सिविल सर्जन प्रमाण पत्र वाले किन्नरों (18+ वर्ष) को ₹2,200 मासिक। (पहले ₹300 प्रति माह)।"
        }
    ];

    // Health Related Schemes
    const healthSchemes = [
        {
            name: "Limited Cashless Medical Services",
            nameHindi: "सीमित कैशलेस चिकित्सा सेवा",
            launched: "2017",
            launchedHindi: "2017",
            objective: "Cashless treatment for govt employees/pensioners for heart attack, accident, cancer (stage 3-4), coma, cerebral hemorrhage, electrocution.",
            objectiveHindi: "सरकारी कर्मचारियों/पेंशनरों को हृदयाघात, दुर्घटना, कैंसर (स्टेज 3-4), कोमा, मस्तिष्क रक्तस्राव, बिजली के झटके पर कैशलेस उपचार।"
        },
        {
            name: "Mission Indradhanush",
            nameHindi: "मिशन इंद्रधनुष",
            launched: "7th April, 2015 (Panipat)",
            launchedHindi: "7 अप्रैल, 2015 (पानीपत)",
            objective: "7 vaccines against 7 diseases: Diphtheria, Tetanus, Polio, TB, Measles, Hepatitis-B, Jaundice.",
            objectiveHindi: "7 बीमारियों के खिलाफ 7 टीके: डिप्थीरिया, टेटनस, पोलियो, टीबी, खसरा, हेपेटाइटिस-बी, पीलिया।"
        },
        {
            name: "Jeevan Rekha Yojana",
            nameHindi: "जीवन रेखा योजना",
            launched: "2013 (Expanded 2017)",
            launchedHindi: "2013 (2017 में विस्तारित)",
            objective: "Free medicines for Hepatitis-C patients. Initially only SC/ST, now all categories. Screening in 21 district hospitals.",
            objectiveHindi: "हेपेटाइटिस-सी रोगियों को निःशुल्क दवाएं। पहले केवल एससी/एसटी, अब सभी श्रेणियां। 21 जिला अस्पतालों में जांच।"
        },
        {
            name: "Nehru Drishti Yojana",
            nameHindi: "नेहरू दृष्टि योजना",
            launched: "26th January, 2010",
            launchedHindi: "26 जनवरी, 2010",
            objective: "Encourage eye donation. Make cornea available to people suffering from blindness.",
            objectiveHindi: "नेत्रदान को प्रोत्साहित करना। दृष्टिहीनता से पीड़ित लोगों को कॉर्निया उपलब्ध कराना।"
        },
        {
            name: "Indira Bal Swasthya Yojana",
            nameHindi: "इंदिरा बाल स्वास्थ्य योजना",
            launched: "2010",
            launchedHindi: "2010",
            objective: "Health check-up of children up to 18 years in school. Free treatment in government hospitals.",
            objectiveHindi: "18 वर्ष तक के बच्चों का स्कूल में स्वास्थ्य परीक्षण। सरकारी अस्पतालों में निःशुल्क उपचार।"
        }
    ];

    // Insurance Schemes
    const insuranceSchemes = [
        {
            name: "CM Merchant Collective Private Accident Insurance",
            nameHindi: "मुख्यमंत्री व्यापारी सामूहिक निजी दुर्घटना बीमा",
            launched: "2019",
            launchedHindi: "2019",
            objective: "₹5 lakh insurance cover to registered small and medium traders for accidental death/disability.",
            objectiveHindi: "पंजीकृत छोटे और मध्यम व्यापारियों को दुर्घटना में मृत्यु/विकलांगता पर ₹5 लाख बीमा कवर।"
        },
        {
            name: "CM Merchant Compensation Insurance",
            nameHindi: "मुख्यमंत्री व्यापारी क्षतिपूर्ति बीमा",
            launched: "2019",
            launchedHindi: "2019",
            objective: "₹5-25 lakh compensation to retailers/shopkeepers for loss due to fire, earthquake, flood, theft based on turnover.",
            objectiveHindi: "खुदरा विक्रेताओं/दुकानदारों को टर्नओवर के आधार पर आग, भूकंप, बाढ़, चोरी से हानि पर ₹5-25 लाख क्षतिपूर्ति।"
        },
        {
            name: "Rajiv Gandhi Parivar Bima Yojana",
            nameHindi: "राजीव गांधी परिवार बीमा योजना",
            launched: "1st April, 2006",
            launchedHindi: "1 अप्रैल, 2006",
            objective: "₹1 lakh for accidental death/permanent disability (18-60 years). ₹50,000 for loss of two body parts. ₹25,000 for one body part.",
            objectiveHindi: "दुर्घटना में मृत्यु/स्थायी विकलांगता (18-60 वर्ष) पर ₹1 लाख। दो अंगों की हानि पर ₹50,000। एक अंग की हानि पर ₹25,000।"
        },
        {
            name: "Devi Rakshak Yojana",
            nameHindi: "देवी रक्षक योजना",
            launched: "2nd October, 2003",
            launchedHindi: "2 अक्टूबर, 2003",
            objective: "Also known as Devilal Janusrakha Bima Yojana. ₹1 lakh for death/permanent disablement of sole earner.",
            objectiveHindi: "देवीलाल जनरक्षा बीमा योजना के नाम से भी जानी जाती है। एकमात्र कमाने वाले की मृत्यु/स्थायी विकलांगता पर ₹1 लाख।"
        }
    ];

    // Employment Schemes
    const employmentSchemes = [
        {
            name: "Saksham Yuva Scheme",
            nameHindi: "सक्षम युवा योजना",
            launched: "1st November, 2016",
            launchedHindi: "1 नवंबर, 2016",
            objective: "Post-graduates: ₹6,000 (honorary) + ₹3,000 (unemployment allowance). Graduates: ₹1,500 unemployment allowance.",
            objectiveHindi: "स्नातकोत्तर: ₹6,000 (मानद) + ₹3,000 (बेरोजगारी भत्ता)। स्नातक: ₹1,500 बेरोजगारी भत्ता।"
        },
        {
            name: "Model Career Centre",
            nameHindi: "मॉडल करियर सेंटर",
            launched: "2015",
            launchedHindi: "2015",
            objective: "100% Model Career Centre at Hisar. 11 employment fairs, 469 appointments from private sector.",
            objectiveHindi: "हिसार में 100% मॉडल करियर सेंटर। 11 रोजगार मेले, निजी क्षेत्र से 469 नियुक्तियां।"
        },
        {
            name: "Unemployment Allowance Scheme",
            nameHindi: "बेरोजगारी भत्ता योजना",
            launched: "1st November, 2005",
            launchedHindi: "1 नवंबर, 2005",
            objective: "12th pass girls: ₹900, Graduate girls: ₹1,500. 12th Science boys: ₹750, Graduate Science boys: ₹1,000 per month.",
            objectiveHindi: "12वीं पास बालिकाएं: ₹900, स्नातक बालिकाएं: ₹1,500। 12वीं विज्ञान बालक: ₹750, स्नातक विज्ञान बालक: ₹1,000 प्रति माह।"
        },
        {
            name: "Saksham Sarthi/Saksham Rakshak",
            nameHindi: "सक्षम सारथी/सक्षम रक्षक",
            launched: "Under Saksham Haryana Campaign",
            launchedHindi: "सक्षम हरियाणा अभियान के तहत",
            objective: "MoU with Ola, Uber, Zomato, Swiggy. 57,185 youths employed as drivers and security guards.",
            objectiveHindi: "ओला, उबर, जोमैटो, स्विगी के साथ एमओयू। 57,185 युवाओं को ड्राइवर और सुरक्षा गार्ड के रूप में रोजगार।"
        }
    ];

    // Scheduled Caste Schemes
    const scSchemes = [
        {
            name: "Anusuchit Jati Chattra Shiksha Protashan Yojana",
            nameHindi: "अनुसूचित जाति छात्र शिक्षा प्रोत्साहन योजना",
            launched: "18th August, 2009",
            launchedHindi: "18 अगस्त, 2009",
            objective: "Annual scholarship ₹5,000-14,000 for SC students in science/commerce/vocational after 10+2. Parental income below ₹2.4 lakh.",
            objectiveHindi: "10+2 के बाद विज्ञान/वाणिज्य/व्यावसायिक में एससी छात्रों को ₹5,000-14,000 वार्षिक छात्रवृत्ति। अभिभावक आय ₹2.4 लाख से कम।"
        },
        {
            name: "Educational Facilities for SC",
            nameHindi: "अनुसूचित जाति शैक्षिक सुविधाएं",
            objective: "Boys: ₹100-300/month scholarship + ₹1,450 lump sum. Girls: ₹150-400/month + ₹740-1,450 lump sum (Class 1-12).",
            objectiveHindi: "बालक: ₹100-300/माह छात्रवृत्ति + ₹1,450 एकमुश्त। बालिकाएं: ₹150-400/माह + ₹740-1,450 एकमुश्त (कक्षा 1-12)।"
        },
        {
            name: "Dr. BR Ambedkar Awas Navinikarn Yojana",
            nameHindi: "डॉ. बी.आर. अंबेडकर आवास नवीनीकरण योजना",
            objective: "₹50,000 grant to SC, nomadic and roadside persons living below poverty line to repair houses.",
            objectiveHindi: "गरीबी रेखा से नीचे जीवनयापन करने वाले एससी, घुमंतू और सड़क किनारे रहने वाले व्यक्तियों को घर की मरम्मत हेतु ₹50,000 अनुदान।"
        },
        {
            name: "Inter-Caste Marriage Incentive Scheme",
            nameHindi: "अंतरजातीय विवाह प्रोत्साहन योजना",
            objective: "₹2.5 lakh grant (increased from ₹50,000) for marriage where one partner is SC and other non-SC.",
            objectiveHindi: "जहां एक साथी एससी और दूसरा गैर-एससी हो, विवाह पर ₹2.5 लाख अनुदान (₹50,000 से बढ़ाकर)।"
        }
    ];

    // Farmer Welfare Schemes
    const farmerSchemes = [
        {
            name: "Bhavantar Bharpayee Yojana",
            nameHindi: "भावांतर भरपाई योजना",
            launched: "1st January, 2018",
            launchedHindi: "1 जनवरी, 2018",
            objective: "Minimum base price fixed for four crops: Tomato, Onion, Potato, Cauliflower. Protects farmers from price losses.",
            objectiveHindi: "चार फसलों का न्यूनतम आधार मूल्य: टमाटर, प्याज, आलू, फूलगोभी। किसानों को मूल्य हानि से बचाना।"
        },
        {
            name: "Crop Cluster Development Programme",
            nameHindi: "फसल क्लस्टर विकास कार्यक्रम",
            launched: "2018 (Gurugram)",
            launchedHindi: "2018 (गुरुग्राम)",
            objective: "140 clusters in 340 villages. Eliminates middlemen. Doubles farmers' income. Helps sell farm produce.",
            objectiveHindi: "340 गांवों में 140 क्लस्टर। बिचौलियों को समाप्त करना। किसानों की आय दोगुनी करना। कृषि उपज बेचने में सहायता।"
        },
        {
            name: "National Agricultural Market (e-NAM)",
            nameHindi: "राष्ट्रीय कृषि बाजार (ई-नाम)",
            launched: "2017",
            launchedHindi: "2017",
            objective: "54 mandis linked to e-NAM platform. Online platform providing training to farmers, traders and buyers.",
            objectiveHindi: "54 मंडियां ई-नाम प्लेटफॉर्म से जुड़ीं। किसानों, व्यापारियों और खरीदारों को प्रशिक्षण देने वाला ऑनलाइन प्लेटफॉर्म।"
        },
        {
            name: "Livestock Insurance Scheme",
            nameHindi: "पशुधन बीमा योजना",
            launched: "29th July, 2016",
            launchedHindi: "29 जुलाई, 2016",
            objective: "3-year cover for cows/buffaloes/bulls/camels at ₹100 premium. Sheep/goats/pigs at ₹25 premium for 3 years.",
            objectiveHindi: "गाय/भैंस/सांड/ऊंट के लिए ₹100 प्रीमियम पर 3 वर्ष का कवर। भेड़/बकरी/सूअर के लिए ₹25 प्रीमियम पर 3 वर्ष।"
        },
        {
            name: "e-Procurement",
            nameHindi: "ई-खरीद",
            launched: "2016 (Karnal)",
            launchedHindi: "2016 (करनाल)",
            objective: "Transparency in procurement process of foodgrains at all levels. Jointly by HSAMB and Food & Supplies Dept.",
            objectiveHindi: "सभी स्तरों पर खाद्यान्न खरीद प्रक्रिया में पारदर्शिता। हरियाणा राज्य कृषि विपणन बोर्ड और खाद्य एवं आपूर्ति विभाग द्वारा।"
        },
        {
            name: "Haryana Mini Dairy Scheme",
            nameHindi: "हरियाणा मिनी डेयरी योजना",
            objective: "NABARD collaboration. Low interest loans for purchase of 50 cows and dairy development. 50% subsidy on cow purchase loan.",
            objectiveHindi: "नाबार्ड के सहयोग से। 50 गायों की खरीद और डेयरी विकास हेतु कम ब्याज पर ऋण। गाय खरीद ऋण पर 50% सब्सिडी।"
        },
        {
            name: "Gau Samvardhan Yojana",
            nameHindi: "गौ संवर्धन योजना",
            objective: "Protects Haryana, Balahi, Sahiwal breeds. ₹5,000-20,000 incentive to high milk-yielding cattle herders. 50% premium for general, 100% for SC.",
            objectiveHindi: "हरियाणा, बलाही, साहीवाल नस्लों का संरक्षण। अधिक दूध देने वाले पशुपालकों को ₹5,000-20,000 प्रोत्साहन। सामान्य के लिए 50%, एससी के लिए 100% प्रीमियम।"
        }
    ];

    // Other Major Schemes
    const otherSchemes = [
        {
            name: "Mukhyamantri Parivar Samman Nidhi Yojana",
            nameHindi: "मुख्यमंत्री परिवार सम्मान निधि योजना",
            year: "26th February, 2019",
            yearHindi: "26 फरवरी, 2019",
            objective: "For farmers. ₹6,000 per year deposited in three installments of ₹2,000 in bank account of family head.",
            objectiveHindi: "किसानों के लिए। ₹6,000 प्रति वर्ष, परिवार मुखिया के बैंक खाते में ₹2,000 की तीन किस्तों में जमा।"
        },
        {
            name: "Haryana Parivartan Yojana",
            nameHindi: "हरियाणा परिवर्तन योजना",
            year: "21st February, 2018",
            yearHindi: "21 फरवरी, 2018",
            objective: "46 developing blocks. Addresses 10 issues including cleanliness and pollution.",
            objectiveHindi: "46 विकासशील ब्लॉक। स्वच्छता और प्रदूषण सहित 10 मुद्दों का समाधान।"
        },
        {
            name: "Antyodaya Aahar Yojana",
            nameHindi: "अंत्योदय आहार योजना",
            year: "17th February, 2018",
            yearHindi: "17 फरवरी, 2018",
            objective: "Meals at ₹10 and healthy breakfast at ₹5 for poor people.",
            objectiveHindi: "गरीब लोगों को ₹10 में भोजन और ₹5 में पौष्टिक नाश्ता।"
        },
        {
            name: "Sant Guru Ravidas Scheme",
            nameHindi: "संत गुरु रविदास योजना",
            year: "4th February, 2018",
            yearHindi: "4 फरवरी, 2018",
            objective: "Loans up to ₹25,000 interest-free to small artisans. Hostels in 11 districts in name of Baba Sahib.",
            objectiveHindi: "छोटे कारीगरों को ₹25,000 तक बिना ब्याज ऋण। बाबा साहिब के नाम पर 11 जिलों में छात्रावास।"
        },
        {
            name: "Star Village Scheme",
            nameHindi: "स्टार विलेज योजना",
            year: "26th January, 2018",
            yearHindi: "26 जनवरी, 2018",
            objective: "State Government will provide assistance to gram panchayats according to the rate.",
            objectiveHindi: "राज्य सरकार ग्राम पंचायतों को दर के अनुसार सहायता प्रदान करेगी।"
        },
        {
            name: "Jay Jawan-Jay Awas Yojana",
            nameHindi: "जय जवान-जय आवास योजना",
            year: "3rd June, 2016",
            yearHindi: "3 जून, 2016",
            objective: "Started from Matanhail, Jhajjar. Affordable housing to serving/retired army officers.",
            objectiveHindi: "मातनहेल, झज्जर से शुरू। सेवारत/सेवानिवृत्त सैन्य अधिकारियों को किफायती आवास।"
        },
        {
            name: "Gramuday se Bharatuday Abhiyan",
            nameHindi: "ग्रामोदय से भारतोदय अभियान",
            year: "2nd April, 2016 (Hisar)",
            yearHindi: "2 अप्रैल, 2016 (हिसार)",
            objective: "125th birth anniversary of Dr. Ambedkar. Strengthen Panchayati Raj System across villages.",
            objectiveHindi: "डॉ. अंबेडकर की 125वीं जयंती। गांवों में पंचायती राज व्यवस्था को सशक्त बनाना।"
        },
        {
            name: "Salamati Scheme/Project",
            nameHindi: "सलामती योजना/परियोजना",
            year: "29th March, 2016",
            yearHindi: "29 मार्च, 2016",
            objective: "Injectable contraceptive for birth spacing. Haryana first state to implement this family planning measure.",
            objectiveHindi: "गर्भनिरोधक इंजेक्शन द्वारा जन्म अंतराल। यह परिवार नियोजन उपाय लागू करने वाला हरियाणा पहला राज्य।"
        },
        {
            name: "Anukul Greh Yojana",
            nameHindi: "अनुकूल गृह योजना",
            year: "27th March, 2016",
            yearHindi: "27 मार्च, 2016",
            objective: "Six months advance pension to disabled people to renovate home according to special needs. Repaid in 42 months.",
            objectiveHindi: "दिव्यांगजनों को विशेष आवश्यकताओं के अनुसार घर नवीनीकरण हेतु छह माह की अग्रिम पेंशन। 42 माह में चुकौती।"
        },
        {
            name: "Mhara Gaon, Jagmag Gaon Scheme",
            nameHindi: "म्हारा गांव, जगमग गांव योजना",
            year: "1st July, 2015",
            yearHindi: "1 जुलाई, 2015",
            objective: "24x7 power supply to rural areas. Improve electricity bill collections.",
            objectiveHindi: "ग्रामीण क्षेत्रों में 24x7 बिजली आपूर्ति। बिजली बिल वसूली में सुधार।"
        },
        {
            name: "Operation Muskan",
            nameHindi: "ऑपरेशन मुस्कान",
            year: "1st July, 2015",
            yearHindi: "1 जुलाई, 2015",
            objective: "Haryana Police and Women & Child Development Dept. Trace and rescue missing children.",
            objectiveHindi: "हरियाणा पुलिस और महिला एवं बाल विकास विभाग। लापता बच्चों का पता लगाना और बचाव।"
        },
        {
            name: "Priyadarshini Awas Yojana",
            nameHindi: "प्रियदर्शिनी आवास योजना",
            year: "8th June, 2013",
            yearHindi: "8 जून, 2013",
            objective: "₹91,000 to beneficiaries to build home in rural areas for needy people.",
            objectiveHindi: "ग्रामीण क्षेत्रों में जरूरतमंद लोगों को घर बनाने हेतु ₹91,000।"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 dark:from-pink-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 hover:bg-pink-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 text-sm font-medium backdrop-blur-sm">
                        <HandHeart className="w-4 h-4" />
                        {language === "hindi" ? "सामाजिक कल्याण योजनाएं - हरियाणा सरकार" : "Social Welfare Schemes - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा की" : "Social Welfare"} <span className="text-pink-600 dark:text-pink-400">{language === "hindi" ? "सामाजिक कल्याण योजनाएं" : "Schemes in Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा में महिला एवं बाल विकास, सामाजिक न्याय एवं अधिकारिता, स्वास्थ्य, बीमा, रोजगार, अनुसूचित जाति और किसान कल्याण से संबंधित प्रमुख योजनाओं की संपूर्ण जानकारी"
                            : "Complete information about major schemes related to Women and Child Development, Social Justice and Empowerment, Health, Insurance, Employment, Scheduled Castes, and Farmer Welfare in Haryana"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <User2 className="w-4 h-4 text-pink-600" />
                            <span>{language === "hindi" ? "महिला एवं बाल विकास" : "Women & Child Development"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Shield className="w-4 h-4 text-pink-600" />
                            <span>{language === "hindi" ? "सामाजिक न्याय" : "Social Justice"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Tractor className="w-4 h-4 text-pink-600" />
                            <span>{language === "hindi" ? "किसान कल्याण" : "Farmer Welfare"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Briefcase className="w-4 h-4 text-pink-600" />
                            <span>{language === "hindi" ? "रोजगार" : "Employment"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Introduction */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-pink-500/20">
                                <Rainbow className="w-5 h-5 text-pink-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "परिचय" : "Introduction"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "राज्य और केंद्र सरकार द्वारा सामाजिक, आर्थिक और शैक्षिक रूप से पिछड़े लोगों को सामाजिक समानता और न्याय प्रदान करने के लिए कई कल्याणकारी योजनाएं शुरू की गई हैं। ये योजनाएं महिलाओं, बच्चों, वरिष्ठ नागरिकों, दिव्यांगजनों, किसानों, बेरोजगार युवाओं और समाज के कमजोर वर्गों के उत्थान के लिए समर्पित हैं।"
                                : "Several welfare schemes have been initiated by the State and Central Government to provide social equality and justice to the socially, economically and educationally backward people. These schemes are dedicated to the upliftment of women, children, senior citizens, differently-abled persons, farmers, unemployed youth, and weaker sections of society."}
                        </p>
                    </div>

                    {/* Women and Child Development Schemes */}
                    <div className="bg-pink-500/5 rounded-2xl p-6 md:p-8 border-2 border-pink-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-pink-500/30">
                                <User2 className="w-5 h-5 text-pink-600" />
                                <Baby className="w-5 h-5 text-pink-600 ml-1" />
                            </div>
                            <h2 className="text-2xl font-bold text-pink-600">{language === "hindi" ? "महिला एवं बाल विकास योजनाएं" : "Women and Child Development Schemes"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {womenChildSchemes.map((scheme, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-pink-600">{language === "hindi" ? scheme.nameHindi : scheme.name}</h3>
                                    <p className="text-xs text-pink-500 mt-1">{language === "hindi" ? scheme.launchedHindi : scheme.launched}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? scheme.objectiveHindi : scheme.objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Justice and Empowerment Schemes */}
                    <div className="bg-purple-500/5 rounded-2xl p-6 md:p-8 border-2 border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-500/30">
                                <Shield className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-600">{language === "hindi" ? "सामाजिक न्याय एवं अधिकारिता योजनाएं" : "Social Justice and Empowerment Schemes"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {socialJusticeSchemes.map((scheme, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-purple-600">{language === "hindi" ? scheme.nameHindi : scheme.name}</h3>
                                    <p className="text-xs text-purple-500 mt-1">{language === "hindi" ? scheme.launchedHindi : scheme.launched}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? scheme.objectiveHindi : scheme.objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Health Schemes */}
                    <div className="bg-emerald-500/5 rounded-2xl p-6 md:p-8 border-2 border-emerald-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-emerald-500/30">
                                <Stethoscope className="w-5 h-5 text-emerald-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-emerald-600">{language === "hindi" ? "स्वास्थ्य संबंधी योजनाएं" : "Health Related Schemes"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {healthSchemes.map((scheme, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-emerald-600">{language === "hindi" ? scheme.nameHindi : scheme.name}</h3>
                                    <p className="text-xs text-emerald-500 mt-1">{language === "hindi" ? scheme.launchedHindi : scheme.launched}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? scheme.objectiveHindi : scheme.objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Insurance Schemes */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/30">
                                <Banknote className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "बीमा संबंधी योजनाएं" : "Insurance Related Schemes"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {insuranceSchemes.map((scheme, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-blue-600">{language === "hindi" ? scheme.nameHindi : scheme.name}</h3>
                                    <p className="text-xs text-blue-500 mt-1">{language === "hindi" ? scheme.launchedHindi : scheme.launched}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? scheme.objectiveHindi : scheme.objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Employment Schemes */}
                    <div className="bg-amber-500/5 rounded-2xl p-6 md:p-8 border-2 border-amber-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-500/30">
                                <Briefcase className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-600">{language === "hindi" ? "रोजगार संबंधी योजनाएं" : "Employment Related Schemes"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {employmentSchemes.map((scheme, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-amber-600">{language === "hindi" ? scheme.nameHindi : scheme.name}</h3>
                                    <p className="text-xs text-amber-500 mt-1">{language === "hindi" ? scheme.launchedHindi : scheme.launched}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? scheme.objectiveHindi : scheme.objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scheduled Caste Schemes */}
                    <div className="bg-indigo-500/5 rounded-2xl p-6 md:p-8 border-2 border-indigo-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-500/30">
                                <Users className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-indigo-600">{language === "hindi" ? "अनुसूचित जाति संबंधी योजनाएं" : "Scheduled Caste Related Schemes"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {scSchemes.map((scheme, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-indigo-600">{language === "hindi" ? scheme.nameHindi : scheme.name}</h3>
                                    {scheme.launched && <p className="text-xs text-indigo-500 mt-1">{language === "hindi" ? scheme.launchedHindi : scheme.launched}</p>}
                                    <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? scheme.objectiveHindi : scheme.objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Farmer Welfare Schemes */}
                    <div className="bg-green-500/5 rounded-2xl p-6 md:p-8 border-2 border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/30">
                                <Tractor className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{language === "hindi" ? "किसान कल्याण योजनाएं" : "Farmer Welfare Schemes"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {farmerSchemes.map((scheme, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-green-600">{language === "hindi" ? scheme.nameHindi : scheme.name}</h3>
                                    {scheme.launched && <p className="text-xs text-green-500 mt-1">{language === "hindi" ? scheme.launchedHindi : scheme.launched}</p>}
                                    <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? scheme.objectiveHindi : scheme.objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Major Schemes Table */}
                    <div className="bg-cyan-500/5 rounded-2xl p-6 md:p-8 border-2 border-cyan-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-cyan-500/30">
                                <Star className="w-5 h-5 text-cyan-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-cyan-600">{language === "hindi" ? "अन्य प्रमुख योजनाएं" : "Other Major Schemes"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 text-cyan-600">{language === "hindi" ? "योजना" : "Scheme"}</th>
                                        <th className="text-left p-2 text-cyan-600">{language === "hindi" ? "वर्ष" : "Year"}</th>
                                        <th className="text-left p-2 text-cyan-600">{language === "hindi" ? "महत्वपूर्ण विशेषताएं" : "Important Features"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {otherSchemes.map((scheme, idx) => (
                                        <tr key={idx} className="border-b hover:bg-muted/30">
                                            <td className="p-2 font-medium">{language === "hindi" ? scheme.nameHindi : scheme.name}</td>
                                            <td className="p-2 text-xs">{language === "hindi" ? scheme.yearHindi : scheme.year}</td>
                                            <td className="p-2 text-xs text-muted-foreground">{language === "hindi" ? scheme.objectiveHindi : scheme.objective}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा सामाजिक कल्याण: तथ्य सारांश" : "Haryana Social Welfare: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-pink-600 mb-2">₹21,000</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "आपकी बेटी-हमारी बेटी योजना" : "Apaki Beti-Hamari Beti Scheme"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-pink-600 mb-2">₹2,000</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "वृद्धावस्था पेंशन (मासिक)" : "Old Age Pension (Monthly)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-pink-600 mb-2">₹2.5L</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "अंतरजातीय विवाह प्रोत्साहन" : "Inter-Caste Marriage Incentive"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-pink-600 mb-2">57,185</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सक्षम हरियाणा में रोजगार" : "Employed under Saksham Haryana"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-pink-600 mb-2">₹5 Lakh</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "व्यापारी दुर्घटना बीमा" : "Merchant Accident Insurance"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-pink-600 mb-2">54</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "e-NAM से जुड़ी मंडियां" : "Mandis linked to e-NAM"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-pink-600 mb-2">₹6,000</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सक्षम युवा (स्नातकोत्तर)" : "Saksham Yuva (Post-Graduate)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-pink-600 mb-2">7</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "मिशन इंद्रधनुष टीके" : "Mission Indradhanush Vaccines"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा की सामाजिक कल्याण योजनाओं के" : "Common"} <span className="text-pink-600">{language === "hindi" ? "बारे में सामान्य प्रश्न" : "Questions About Haryana's Social Welfare Schemes"}</span>
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
                                        className={`w-5 h-5 text-pink-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""}`}
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
                            {language === "hindi" ? "अपने हरियाणा सामाजिक कल्याण योजनाओं के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Social Welfare Schemes?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-pink-600 hover:bg-pink-700">
                                {language === "hindi" ? "हरियाणा सामाजिक कल्याण क्विज़ लें" : "Take Haryana Social Welfare Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/sports-awards" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "क्रीड़ा एवं पुरस्कार" : "Sports and Awards"}
                        </Link>
                        <Link href="/haryana-gk/famous-personalities" className="text-pink-600 hover:text-pink-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: प्रसिद्ध व्यक्तित्व" : "Next Chapter: Famous Personalities"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा की सामाजिक कल्याण योजनाएं - संपूर्ण संदर्भ" : "Social Welfare Schemes in Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की महिला एवं बाल विकास योजनाओं (महिला एवं किशोरी सम्मान, दूध उपहार, आपकी बेटी-हमारी बेटी, बेटी बचाओ-बेटी पढ़ाओ, सुकन्या समृद्धि), सामाजिक न्याय योजनाओं (वृद्धावस्था पेंशन, विधवा पेंशन, दिव्यांग पेंशन, तीर्थ दर्शन), स्वास्थ्य योजनाओं (मिशन इंद्रधनुष, जीवन रेखा), बीमा योजनाओं, रोजगार योजनाओं (सक्षम युवा), अनुसूचित जाति योजनाओं और किसान कल्याण योजनाओं (भावांतर भरपाई, e-NAM) के बारे में व्यापक जानकारी प्रदान करता है।"
                            : "This page provides comprehensive information about Haryana's Women and Child Development schemes (Mahila evam Kishori Samman, Doodh Uphar, Apaki Beti-Hamari Beti, Beti Bachao-Beti Padhao, Sukanya Samriddhi), Social Justice schemes (Old Age Pension, Widow Pension, Differently Abled Pension, Teerth Darshan), Health schemes (Mission Indradhanush, Jeevan Rekha), Insurance schemes, Employment schemes (Saksham Yuva), Scheduled Caste schemes, and Farmer Welfare schemes (Bhavantar Bharpayee, e-NAM)."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों से स्रोतित" : "Information sourced from official Government of Haryana publications"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}