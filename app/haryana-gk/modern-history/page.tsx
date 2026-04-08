"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    History,
    Sword,
    Crown,
    Landmark,
    ScrollText,
    Building2,
    Users,
    Church,
    ChevronDown,
    HelpCircle,
    AlertTriangle,
    Flag,
    CalendarDays,
    Shield,
    Handshake,
    ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModernHistoryOfHaryanaPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [language, setLanguage] = useState<"hindi" | "english">("hindi");

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "hindi" ? "english" : "hindi"));
    };

    // Annexed Principalities Table Data
    const annexedPrincipalities = [
        { name: "Chachhrauli", year: 1818, reason: "Incapability of Rani Ram Kaur, interference of Jodh Singh" },
        { name: "Rania", year: 1818, reason: "Revolt by Nawab Jabit Khan" },
        { name: "Ambala", year: 1824, reason: "Death of Daya Kaur, widow of Raja Gurbaksh Singh" },
        { name: "Radaur", year: 1828, reason: "Death of Indra Kaur, widow of Raja Dayal Singh" },
        { name: "Dayalagarh", year: 1829, reason: "Death of Mai Daya Kaur, widow of Raja Bhagwan Singh" },
        { name: "Thanesar (2/5th Part)", year: 1832, reason: "Death of Raja Jamiyat Singh without successor" },
        { name: "Bufaul", year: 1838, reason: "Death of Raja Harman Singh without successor" },
        { name: "Kaithal", year: 1843, reason: "Death of Raja Uday Singh without successor" },
        { name: "Chalaudi", year: 1844, reason: "Death of Ram Kaur, widow of Raja Baghel Singh" },
        { name: "Ladwa", year: 1845, reason: "Revolt by Raja Ajit Singh" },
        { name: "Thanesar (3/5th Part)", year: 1850, reason: "Death of Chand Kaur, widow of Raja Fateh Singh" },
        { name: "Halahar", year: 1850, reason: "Death of Raja Fateh Singh without successor" },
        { name: "Dayalagarh (Part of Mai Sukhan)", year: 1851, reason: "Death of Mai Sukhan, widow of Raja Bhagwan Singh" },
    ];

    // Leaders of Revolt 1857 in Haryana - Table Data
    const revoltLeaders = [
        { region: "Gurugram", place: "Gurugram", leader: "No leader" },
        { region: "Gurugram", place: "Mewat", leader: "Sadruddin (Farmer)" },
        { region: "Gurugram", place: "Ahirwal", leader: "Tularam (Main Feudal Lord)" },
        { region: "Gurugram", place: "Palwal", leader: "Gafur Ali (Trader), Harsukh Rai (Farmer)" },
        { region: "Gurugram", place: "Faridabad", leader: "Dhanu Singh (Farmer)" },
        { region: "Gurugram", place: "Ballabhgarh", leader: "Nahar Singh (Main Feudal Lord)" },
        { region: "Gurugram", place: "Farrukhnagar", leader: "Ahmad Ali (Main Feudal Lord), Ghulam Muhammad (Government Employee)" },
        { region: "Gurugram", place: "Pataudi", leader: "Akbar Ali (Main Feudal Lord)" },
        { region: "Panipat", place: "Panipat", leader: "Imam Ali Kalandar (Maulvi)" },
        { region: "Panipat", place: "Karnal", leader: "No Leader" },
        { region: "Panipat", place: "Jalmana", leader: "No Leader" },
        { region: "Rohtak", place: "Kharkhoda", leader: "Bisarat Ali (Farmer, Risaldar)" },
        { region: "Rohtak", place: "Sampla", leader: "Sabar Khan (Farmer)" },
        { region: "Rohtak", place: "Dujana", leader: "Hasan Ali (Main Feudal Lord)" },
        { region: "Rohtak", place: "Dadri", leader: "Bahadur Jang (Feudal Lord)" },
        { region: "Rohtak", place: "Jhajjar", leader: "Abdul Ahmed (General of Nawab of Jhajjar), Abdul Rahman (Main Feudal Lord)" },
        { region: "Hisar", place: "Bhattu", leader: "Muhammad Azam (Government Employee)" },
        { region: "Hisar", place: "Hansi", leader: "Hukumchand (Government Employee)" },
        { region: "Hisar", place: "Rania", leader: "Noor Muhammad Khan (Main Feudal Lord)" },
        { region: "Hisar", place: "Loharu", leader: "Aminuddin (Main Feudal Lord)" },
        { region: "Hisar", place: "Thanesar", leader: "No leader" },
        { region: "Delhi", place: "Ladwa", leader: "No Leader" },
        { region: "Delhi", place: "Delhi Khas", leader: "Bahadur Shah (Main Feudal Lord)" },
        { region: "Delhi", place: "Sonipat", leader: "No Leader" },
        { region: "Ambala", place: "Ambala", leader: "No Leader" },
        { region: "Ambala", place: "Ropar", leader: "Mohan Singh" },
        { region: "Ambala", place: "Jagadhri", leader: "No Leader" },
    ];

    // Arya Samaj in Haryana Table
    const aryaSamajData = [
        { city: "Rewari", year: 1880, members: 21 },
        { city: "Rohtak", year: 1885, members: 10 },
        { city: "Hisar", year: 1886, members: 59 },
        { city: "Hansi", year: 1889, members: 12 },
        { city: "Hathin (Gurugram)", year: 1890, members: 5 },
        { city: "Ambala city", year: 1890, members: 14 },
        { city: "Bhiwani", year: 1890, members: 36 },
        { city: "Jhajjar", year: 1891, members: 13 },
        { city: "Sirsa", year: 1892, members: 21 },
        { city: "Shahabad (Kurukshetra)", year: 1893, members: 19 },
        { city: "Thanesar", year: 1894, members: 15 },
        { city: "Ballabhgarh (Faridabad)", year: 1896, members: 10 },
        { city: "Kausali (Rohtak)", year: 1897, members: 10 },
        { city: "Pundari (Kurukshetra)", year: 1900, members: 20 },
        { city: "Kaithal (Kurukshetra)", year: 1900, members: 30 },
        { city: "Ladwa (Kurukshetra)", year: 1900, members: 8 },
    ];

    // Arya Samaj Movements Table
    const aryaMovements = [
        { movement: "Samalekha Movement", year: "1916", description: "This movement was started by Arya Samajis against the Britishers who opened cow slaughtering centre in Samalekha village to provided meat to their soldiers. It was led by Phool Singh." },
        { movement: "Panipat Movement", year: "1930", description: "This was against the Government which banned the procession of Aryans, thus, Arya Samajis started the movement in the name of 'Aryan Raksha Samiti'." },
        { movement: "Lahore Slaughterhouse Movement", year: "1937-38", description: "This movement was started by Arya Samajis against the opening of cow slaughtering centres in Lahore during Second World War." },
        { movement: "Hyderabad Movement", year: "1939", description: "This movement was started under the leadership of Bhakt Phool Singh against the Hyderabad principally which banned the activities of Aryans." },
        { movement: "Loharu Movement", year: "1940", description: "Propagation of Arya Samaj was banned in Loharu principally against which this movement was started." },
        { movement: "Moth Movement", year: "1940", description: "Bhakt Phool Singh used to do work without any help to settle disputes among people to open schools, to release pasture grounds etc. He founded 'EK Bahu Regiment'." },
        { movement: "Hindi Satyagraha Movement", year: "1957", description: "This movement was started in the reign of Sardar Pratap Singh Kairon, to provide Hindi a right place in the United Punjab." },
        { movement: "Kundli Slaughterhouse Movement", year: "1968", description: "This movement was started by the Arya Samajis against the decision of Haryana and Central Governments to open a slaughterhouse in Kundli, Rohtak." },
    ];

    // Timeline Events
    const timelineEvents = [
        { date: "324-232 BC", event: "Mauryan's authority over Haryana" },
        { date: "580 AD", event: "Pushyabhuti Naresh Prabhakarvardhan became King" },
        { date: "605 AD", event: "Harshavardhana became King" },
        { date: "634-635 AD", event: "War between Harsha and Chalukya Naresh Pulakeshin" },
        { date: "805 AD", event: "Prathara Ruler Nagabhatta-II occupied Haryana" },
        { date: "1009 AD", event: "Mahmud of Ghazni invaded India for the first time" },
        { date: "1191 AD", event: "Prithviraj Chauhan defeated invaded Mohammad Ghori in Taraori" },
        { date: "1192 AD", event: "For the second time in Taraori, Chauhan's defeat at the hands of Ghori" },
        { date: "1194 AD", event: "Mohammad Ghori invaded Rohtak and targeted the temples here" },
        { date: "1206 AD", event: "Qutubuddin Albak suzerainty over Haryana" },
        { date: "1240 AD", event: "Razia Begum killed in Kaithal" },
        { date: "1266 AD", event: "Suzerainty of Balban over Haryana" },
        { date: "1290 AD", event: "Establishment of Khilji Dynasty" },
        { date: "1398 AD", event: "Timur invaded Haryana" },
        { date: "1526 AD", event: "First Battle of Panipat" },
        { date: "1530 AD", event: "Mohan Singh Mandar's rebellion against Babar" },
        { date: "1556 AD", event: "Second Battle of Panipat" },
        { date: "1672 AD", event: "Satnamio's rebellion against Narnaul" },
        { date: "1739 AD", event: "Battle of Karnal" },
        { date: "1761 AD", event: "Third Battle of Panipat between Marathas and Ahmad Shah Abdali" },
        { date: "1789 AD", event: "Mahadev Scindia's authority over Delhi and Haryana" },
        { date: "1803 AD", event: "British authority over Haryana" },
        { date: "1809 AD", event: "Chhachhrauli rebellion" },
        { date: "1818 AD", event: "Rebellion of Rania" },
        { date: "1834 AD", event: "Haryana became a part of North-Western Province" },
        { date: "1843 AD", event: "Rebellion in Kaithal" },
        { date: "1845 AD", event: "Rebellion of Ajit Singh Ladwa" },
        { date: "1858 AD", event: "Haryana merged with Punjab" },
        { date: "1886 AD", event: "Babu Murlidhar became the first satyagrahi of Congress Movement, first Sanatan Dharma formed in Jhajjar" },
        { date: "1892 AD", event: "Lala Lajpat Rai went to Lahore from Hisar" },
        { date: "1928 AD", event: "Elections of Punjab Legislative Council" },
        { date: "1937 AD", event: "Election in Punjab Assembly" },
        { date: "1947 AD", event: "The country became independent and Haryana became a part of East Punjab" },
        { date: "1966 AD", event: "Identify Haryana as a separate State" },
    ];

    // FAQ data bilingual
    const faqs = [
        {
            questionHindi: "ईस्ट इंडिया कंपनी को हरियाणा कब मिला?",
            questionEnglish: "When did the East India Company acquire Haryana?",
            answerHindi: "30 सितंबर, 1803 को सुरजी-अंजनगांव की संधि के तहत, दौलत राव सिंधिया ने हरियाणा को ब्रिटिश ईस्ट इंडिया कंपनी को सौंप दिया।",
            answerEnglish: "Under the Treaty of Surji-Anjangaon on 30th September, 1803, Daulat Rao Scindia ceded Haryana to the British East India Company."
        },
        {
            questionHindi: "1857 के विद्रोह में हरियाणा के प्रमुख नेता कौन थे?",
            questionEnglish: "Who were the major leaders of the 1857 revolt in Haryana?",
            answerHindi: "हरियाणा में 1857 के विद्रोह के प्रमुख नेताओं में नाहर सिंह (बल्लभगढ़), राव तुलाराम (रीवाड़ी), अहमद अली (फर्रुखनगर), अब्दुर्रहमान खान (झज्जर), और इमाम अली कलंदर (पानीपत) शामिल थे।",
            answerEnglish: "Major leaders of the 1857 revolt in Haryana included Nahar Singh (Ballabhgarh), Rao Tularam (Rewari), Ahmad Ali (Farrukhnagar), Abdurrahman Khan (Jhajjar), and Imam Ali Kalandar (Panipat)."
        },
        {
            questionHindi: "1857 के विद्रोह के बाद किन रियासतों को ब्रिटिश समर्थक माना जाता था?",
            questionEnglish: "Which principalities were considered Pro-British after the 1857 revolt?",
            answerHindi: "जींद, लोहारू, छछरौली, पटौदी, दुजाना, करनाल, सम्पला-असांडा और कुंजपुरा ब्रिटिश समर्थक रियासतें थीं।",
            answerEnglish: "Jind, Loharu, Chhachhrauli, Pataudi, Dujana, Karnal, Sampla-Asanda, and Kunjpura were the Pro-British princely states."
        },
        {
            questionHindi: "राव तुलाराम का जन्म कब और कहाँ हुआ था?",
            questionEnglish: "When and where was Rao Tularam born?",
            answerHindi: "राव तुलाराम का जन्म 9 दिसंबर, 1825 को रेवाड़ी जिले में हुआ था। 1857 के विद्रोह में उनकी महत्वपूर्ण भूमिका थी और उन्हें हरियाणा का राज्य नायक माना जाता है।",
            answerEnglish: "Rao Tularam was born on 9th December, 1825 in Rewari district. He played a key role during the 1857 Revolt in Haryana and is considered a State Hero."
        },
        {
            questionHindi: "लाला लाजपत राय को निर्वासित क्यों किया गया था?",
            questionEnglish: "Why was Lala Lajpat Rai exiled?",
            answerHindi: "मई 1907 में, पंजाब के लेफ्टिनेंट गवर्नर डैनियल इब्बेटसन ने लॉर्ड मिंटो के आदेश पर लाला लाजपत राय को निर्वासित कर दिया और उन्हें मांडले जेल (बर्मा) भेज दिया। जनता के भारी दबाव के कारण 14 नवंबर, 1907 को उन्हें रिहा कर दिया गया।",
            answerEnglish: "In May 1907, the Lieutenant Governor of Punjab, Daniel Ibbetson, exiled Lala Lajpat Rai on the order of Lord Minto and sent him to Mandalay prison in Burma. Due to severe mass pressure, he was released on 14th November, 1907."
        },
        {
            questionHindi: "हरियाणा का हरियाणा केसरी किसे कहा जाता है?",
            questionEnglish: "Who is known as 'Haryana Kesari'?",
            answerHindi: "पंडित नेकीराम शर्मा को 'हरियाणा केसरी' कहा जाता है। उनका जन्म 4 सितंबर, 1887 को रोहतक जिले के केलांगा गाँव में हुआ था।",
            answerEnglish: "Pandit Nekiram Sharma is referred to as 'Haryana Kesari'. He was born on 4th September, 1887 in Kelanga village of Rohtak district."
        },
        {
            questionHindi: "स्वराज पार्टी का हरियाणा में क्या प्रभाव था?",
            questionEnglish: "What was the impact of Swaraj Party in Haryana?",
            answerHindi: "स्वराज पार्टी हरियाणा में अधिक लोकप्रिय थी। इसके नेताओं में अंबाला में लाला दूलीचंद, करनाल में लाला गणपत राय, हिसार में नेकीराम शर्मा, गुरुग्राम में पंडित रूपनारायण और रोहतक में श्रीराम शर्मा शामिल थे।",
            answerEnglish: "The Swaraj Party was more popular in Haryana. Its leaders included Lala Dulichand in Ambala, Lala Ganpat Rai in Karnal, Nekiram Sharma in Hisar, Pt Rupnarayan in Gurugram, and Shriram Sharma in Rohtak."
        },
        {
            questionHindi: "हरियाणा को अलग राज्य का दर्जा कब मिला?",
            questionEnglish: "When did Haryana get separate state status?",
            answerHindi: "हरियाणा को 1966 में अलग राज्य का दर्जा मिला। यह पूर्वी पंजाब से अलग होकर भारत का 17वाँ राज्य बना।",
            answerEnglish: "Haryana was identified as a separate state in 1966. It was carved out of East Punjab and became the 17th state of India."
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
                        <History className="w-4 h-4" />
                        {language === "hindi" ? "ऐतिहासिक धरोहर - हरियाणा सरकार" : "Historical Heritage - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा का" : "Modern"} <span className="text-primary">{language === "hindi" ? "आधुनिक इतिहास" : "History of Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "ईस्ट इंडिया कंपनी के शासन से लेकर स्वतंत्रता संग्राम, 1857 के विद्रोह, प्रजामंडल आंदोलनों और हरियाणा के प्रमुख स्वतंत्रता सेनानियों तक का संपूर्ण इतिहास"
                            : "Complete history of Haryana from East India Company rule to the freedom struggle, 1857 revolt, Praja Mandal movements, and major freedom fighters of Haryana"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Building2 className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "ईस्ट इंडिया कंपनी" : "East India Company"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Sword className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "1857 का विद्रोह" : "1857 Revolt"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Crown className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "रियासतें" : "Principalities"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Users className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "स्वतंत्रता सेनानी" : "Freedom Fighters"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">

                    {/* British East India Company Rule */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Building2 className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा में ईस्ट इंडिया कंपनी का शासन" : "Rule of British East India Company in Haryana"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "जॉर्ज थॉमस की मृत्यु के बाद, ईस्ट इंडिया कंपनी हरियाणा क्षेत्र की ओर बढ़ी। ब्रिटिश ईस्ट इंडिया कंपनी एक व्यापारिक कंपनी के रूप में भारत आई, लेकिन जल्द ही भारत में राजनीतिक अस्थिरता और अराजकता का फायदा उठाकर एक राजनीतिक शक्ति बन गई। 30 सितंबर, 1803 को सुरजी-अंजनगांव की संधि के तहत, दौलत राव सिंधिया ने हरियाणा को ब्रिटिश ईस्ट इंडिया कंपनी को सौंप दिया।"
                                : "After the death of George Thomas, the East India Company moved forward to the Haryana region. The British East India Company came to India as a trading company, but it soon became a political power by taking advantage of the political instability and anarchy in India. Under the Treaty of Surji-Anjangaon on 30th September, 1803, Daulat Rao Scindia ceded Haryana to the British East India Company."}
                        </p>
                    </div>

                    {/* Administrative Changes */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Landmark className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "ब्रिटिशों द्वारा हरियाणा में प्रशासनिक परिवर्तन" : "Administrative Changes in Haryana by the British"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "1819 में, कंपनी ने प्रशासनिक सुधार किए और रेजीडेंट के नाम से एक कमिश्नर नियुक्त किया और उसे कुछ राजनीतिक शक्तियाँ प्रदान कीं। ब्रिटिशों ने अधिग्रहीत भाग को तीन उप-प्रभागों में विभाजित किया: (i) उत्तरी क्षेत्र - रोहतक, हिसार, पानीपत और सोनीपत; (ii) मध्य क्षेत्र - दिल्ली क्षेत्र; (iii) दक्षिणी क्षेत्र - रेवाड़ी, गुरुग्राम, होडल, पलवल और मेवात। 1833-34 ईस्वी में ब्रिटिश शासन द्वारा हरियाणा को उत्तर-पश्चिमी प्रांत का हिस्सा बनाया गया और आगरा को इसका केंद्र बनाया गया।"
                                : "In 1819, the Company made administrative reforms and appointed a Commissioner under the name of Resident and provided him some political powers. The British also divided the ceded part into three sub-divisions: (i) Northern Area - Rohtak, Hisar, Panipat and Sonipat; (ii) Central Area - Delhi region; (iii) Southern Area - Rewari, Gurugram, Hodal, Palwal and Mewat. Haryana was made a part of the North-Western province by British rule in 1833-34 AD and Agra was made as its centre."}
                        </p>
                    </div>

                    {/* Major Revolts Section */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <AlertTriangle className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "ईस्ट इंडिया कंपनी के खिलाफ प्रमुख विद्रोह" : "Major Revolts Against the East India Company"}</h2>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">1. {language === "hindi" ? "छछरौली (जगाधरी) का विद्रोह" : "Revolt of Chhachhrauli (Jagadhri)"}</h3>
                                <p className="text-muted-foreground">{language === "hindi"
                                    ? "छछरौली रियासत के शासक करोर सिंह मिसल के बघेल सिंह थे। 1809 ईस्वी में बघेल सिंह की मृत्यु के बाद कोई उत्तराधिकारी नहीं था। बघेल सिंह की विधवा 'रानी रामकौर' ने जोध सिंह को हटाने के लिए ब्रिटिशों की सहायता ली। ब्रिटिश सेना ने हमला किया और रानी रामकौर को रियासत दे दी गई। 1818 ईस्वी में, जोध सिंह ने फिर से छछरौली पर कब्जा कर लिया। ब्रिटिश सेना ने हमला किया और जोध सिंह पराजित हुआ, रियासत को ब्रिटिश राज्य में मिला लिया गया।"
                                    : "The ruler of the Princely State of Chhachhrauli was Karora Singhi Misl, Baghel Singh. After Baghel Singh's death in 1809 AD, there was no successor. Baghel Singh's widow 'Rani Ramkaur' sought British assistance to remove Jodh Singh. The British army attacked and the princely state was given to Rani Ramkaur. In 1818 AD, Jodh Singh again captured Chhachhrauli. The British army attacked and Jodh Singh was defeated; the princely state was merged into the British kingdom."}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">2. {language === "hindi" ? "रानिया का विद्रोह" : "Revolt of Rania"}</h3>
                                <p className="text-muted-foreground">{language === "hindi"
                                    ? "1810 ईस्वी में, हिसार जिले की रानिया रियासत के शासक जबीत खान ने ब्रिटिशों की अधीनता स्वीकार कर ली। ब्रिटिशों ने उसे रानिया और सिरसा की रियासतें वापस कर दीं, लेकिन उसने कंपनी के आदेशों की अवहेलना की। परिणामस्वरूप, 1818 ईस्वी में रानिया के युद्ध में कंपनी ने जबीत खान को हराया और हिसार रियासत को ब्रिटिश शासन में ले लिया।"
                                    : "In 1810 AD, Jabit Khan, the ruler of the Princely State of Rania in Hisar district accepted the subjugation of the British. The British returned him the Princely States of Rania and Sirsa, but he defied the Company's orders. As a result, in the war of Rania, the Company defeated Jabit Khan in 1818 AD and took over the Princely State of Hisar under British rule."}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">3. {language === "hindi" ? "रोहतक, गुरुग्राम और हिसार में किसान विद्रोह" : "Peasant Uprisings in Rohtak, Gurugram and Hisar"}</h3>
                                <p className="text-muted-foreground">{language === "hindi"
                                    ? "ब्रिटिशों द्वारा माल की वसूली के कठोर तरीके के कारण हरियाणा के किसानों में व्यापक असंतोष था। अतः, 1824 ईस्वी में बर्मा युद्ध में ब्रिटिशों की हार के बाद, किसानों ने विद्रोह शुरू कर दिया। सरकारी खजाने और बैंक लूट लिए गए। भिवानी के लोगों ने सेना के वाहनों पर हमला करना शुरू कर दिया। महाराजा सूरजमाल ने विद्रोहियों को इकट्ठा किया, लेकिन अंग्रेजी सेना ने किसानों को हराया और उन्हें यातनाएँ दीं।"
                                    : "There was widespread dissatisfaction among the farmers of Haryana due to the harsh way of recovering goods by the British. Hence, in 1824 AD after the British defeat in Burma war, the peasants started the revolt. Government treasuries and banks were looted. People of Bhiwani started attacking army vehicles. Maharaja Suraj Mal gathered the rebels, but the English army defeated the peasants and tortured them."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Annexed Principalities Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <ScrollText className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "ब्रिटिश ईस्ट इंडिया कंपनी द्वारा अधिग्रहीत रियासतें" : "Principalities Annexed by the British East India Company"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-3 text-left font-semibold">{language === "hindi" ? "रियासत का नाम" : "Name of Principality"}</th>
                                        <th className="border p-3 text-left font-semibold">{language === "hindi" ? "अधिग्रहण वर्ष" : "Year of Annexation"}</th>
                                        <th className="border p-3 text-left font-semibold">{language === "hindi" ? "अधिग्रहण का कारण" : "Reason for Annexation"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {annexedPrincipalities.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-3">{item.name}</td>
                                            <td className="border p-3">{item.year}</td>
                                            <td className="border p-3">{item.reason}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Revolt of 1857 and Haryana */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Sword className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "1857 का विद्रोह और हरियाणा" : "Revolt of 1857 and Haryana"}</h2>
                        </div>
                        <div className="space-y-4">
                            <p className="text-muted-foreground">{language === "hindi"
                                ? "हरियाणा में 1857 का विद्रोह सबसे पहले अंबाला में शुरू हुआ। मेरठ की सिपाही विद्रोह 10 मई, 1857 को शुरू हुई और 13 मई, 1857 को हरियाणा के अंबाला छावनी पहुँची। गुरुग्राम, रोहतक, हिसार, सिरसा, थानेसर में भी विद्रोह हुए। मई के अंत तक, अंबाला को छोड़कर पूरा हरियाणा ब्रिटिश शासन के प्रभाव से मुक्त हो गया था।"
                                : "In Haryana the revolt of 1857 was first started in Ambala. The Sepoy mutiny of Meerut which started on 10th May, 1857, reached Ambala Cantt on 13th May, 1857. Revolts took place in Gurugram, Rohtak, Hisar, Sirsa, and Thanesar. By the end of May, the whole of Haryana, except Ambala, was liberated from British rule."}
                            </p>
                        </div>
                    </div>

                    {/* Leaders of Revolt 1857 Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Users className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा में 1857 के विद्रोह के नेता" : "Leaders of the Revolt of 1857 in Haryana"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-3 text-left font-semibold">{language === "hindi" ? "क्षेत्र" : "Region"}</th>
                                        <th className="border p-3 text-left font-semibold">{language === "hindi" ? "स्थान" : "Place"}</th>
                                        <th className="border p-3 text-left font-semibold">{language === "hindi" ? "नेता" : "Leader"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {revoltLeaders.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-3">{item.region}</td>
                                            <td className="border p-3">{item.place}</td>
                                            <td className="border p-3">{item.leader}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Role of Principalities */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Crown className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "1857 के विद्रोह में रियासतों की भूमिका" : "Role of Principalities in the Revolt of 1857"}</h2>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold">{language === "hindi" ? "क्रांतिकारी समर्थक रियासतें" : "Pro-Revolutionary Princely States"}</h3>
                                <p className="text-muted-foreground">{language === "hindi"
                                    ? "झज्जर, बल्लभगढ़, फर्रुखनगर, बहादुरगढ़, मेवात, रेवाड़ी और हांसी क्रांतिकारी समर्थक रियासतें थीं। झज्जर के नवाब अब्दुर्रहमान को 23 दिसंबर, 1857 को लाल किले में फाँसी दे दी गई। बल्लभगढ़ के राजा नाहर सिंह को 9 जनवरी, 1858 को चाँदनी चौक में फाँसी दी गई। फर्रुखनगर के अहमद अली गुलाम को 23 जनवरी, 1858 को फाँसी दी गई।"
                                    : "Jhajjar, Ballabhgarh, Farrukhnagar, Bahadurgarh, Mewat, Rewari and Hansi were the Pro-Revolutionary Princely States. Abdurrahman Khan of Jhajjar was hanged on 23rd December, 1857 at Red Fort. Raja Nahar Singh of Ballabhgarh was hanged on 9th January, 1858 at Chandni Chowk. Ahmad Ali Ghulam of Farrukhnagar was hanged on 23rd January, 1858."}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{language === "hindi" ? "ब्रिटिश समर्थक रियासतें" : "Pro-British Princely States"}</h3>
                                <p className="text-muted-foreground">{language === "hindi"
                                    ? "जींद, लोहारू, छछरौली, पटौदी, दुजाना, करनाल, सम्पला-असांडा और कुंजपुरा ब्रिटिश समर्थक रियासतें थीं। विद्रोह के बाद, जींद के सरूप सिंह को दादरी की रियासत पुरस्कार के रूप में दी गई।"
                                    : "Jind, Loharu, Chhachhrauli, Pataudi, Dujana, Karnal, Sampla-Asanda and Kunjpura were the Pro-British Princely States. After the revolt, Sarup Singh of Jind was given the area of Dadri as a reward."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Congress and National Movement */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Landmark className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा में कांग्रेस और राष्ट्रीय आंदोलन" : "Congress and National Movement in Haryana"}</h2>
                        </div>
                        <div className="space-y-4">
                            <p className="text-muted-foreground">{language === "hindi"
                                ? "राय बहादुर मुरलीधर ने 1886 ईस्वी में अंबाला में कांग्रेस की एक शाखा स्थापित की। लाला लाजपत राय 1884 में अपने पिता के साथ रोहतक आए, जहाँ उनके पिता शिक्षक थे। कांग्रेस का पहला सत्र अक्टूबर 1886 में रोहतक में तुर्राबाज खान की अध्यक्षता में हुआ।"
                                : "Rai Bahadur Murlidhar established a branch of Congress in Ambala in 1886 AD. Lala Lajpat Rai came to Rohtak in 1884 with his father, where his father was a teacher. The first Session of the Congress was held in Rohtak in October 1886 under the Chairmanship of Turrabaz Khan."}
                            </p>
                        </div>
                    </div>

                    {/* Non-Cooperation Movement */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Handshake className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "असहयोग आंदोलन" : "Non-Cooperation Movement"}</h2>
                        </div>
                        <p className="text-muted-foreground">{language === "hindi"
                            ? "असहयोग आंदोलन से संबंधित पहली बैठक अक्टूबर 1920 में हरियाणा के पानीपत में लाला लाजपत राय के नेतृत्व में हुई। 22 अक्टूबर, 1920 को भिवानी में लाला मुरलीधर की अध्यक्षता में अंबाला डिवीजनल राजनीतिक सम्मेलन आयोजित किया गया। महात्मा गांधी, मौलाना मुहम्मद अली, शौकत अली और मौलाना आजाद जैसे नेताओं ने इस सम्मेलन में भाग लिया।"
                            : "The first meeting related to Non-Cooperation Movement was held in October 1920 in Panipat, Haryana, under the leadership of Lala Lajpat Rai. Ambala Divisional Political Conference was organised on 22nd October, 1920 at Bhiwani under the Chairmanship of Lala Murlidhar. Leaders like Mahatma Gandhi, Maulana Muhammad Ali, Shaukat Ali and Maulana Azad participated."}
                        </p>
                    </div>

                    {/* Civil Disobedience Movement */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Flag className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "सविनय अवज्ञा आंदोलन" : "Civil Disobedience Movement"}</h2>
                        </div>
                        <p className="text-muted-foreground">{language === "hindi"
                            ? "गांधीजी ने 12 मार्च, 1930 को 78 चुने हुए सत्याग्रहियों के साथ अपना ऐतिहासिक दांडी मार्च शुरू किया। अंबाला के लाला सुरजन इन सत्याग्रहियों में से एक थे। हरियाणा के लोगों ने रोहतक, झज्जर, अंबाला, पानीपत और भिवानी में नमक बनाकर नमक कानून तोड़ा। लगभग 600 लोगों ने नमक कानून तोड़ा और सबसे अधिक 380 लोग रोहतक में गिरफ्तार किए गए।"
                            : "Gandhiji started his historic Dandi March with 78 elected Satyagrahis on 12th March, 1930. Lala Surajhan of Ambala was amongst these Satyagrahis. The people of Haryana broke the Salt Law by making salt in Rohtak, Jhajjar, Ambala, Panipat and Bhiwani. Around 600 people broke the Salt Law and highest number of people 380 were arrested in Rohtak."}
                        </p>
                    </div>

                    {/* Quit India Movement */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <AlertTriangle className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "भारत छोड़ो आंदोलन" : "Quit India Movement"}</h2>
                        </div>
                        <p className="text-muted-foreground">{language === "hindi"
                            ? "8 अगस्त, 1942 को इस आंदोलन की घोषणा के साथ, हरियाणा में रेलवे स्टेशनों, डाकघरों, तार घरों और पुलिस स्टेशनों पर प्रदर्शन हुए। बड़े नेताओं की गिरफ्तारी के बाद, लोगों ने स्वयं आंदोलन का आयोजन किया। मनगेराम वत्स, शीशपाल सिंह, वैद्य लेखराम सिंह, राधाकृष्ण, लक्ष्मण सिंह और रामकुमार विच्छत हरियाणा प्रांत के प्रमुख आंदोलनकारियों में से थे।"
                            : "With the announcement of this movement on 8th August, 1942, there were demonstrations at railway stations, post offices, telegraph offices and police stations in Haryana. After the arrest of the big leaders, the people themselves organised the movement. Mangeram Vats, Sheeshpal Singh, Vaidya Lekhram Singh, Radhakrishna, Laxman Singh and Ramkumar Vichhat were among the prominent agitators."}
                        </p>
                    </div>

                    {/* Indian National Army */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Shield className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "भारतीय राष्ट्रीय सेना (आईएनए)" : "Indian National Army (INA)"}</h2>
                        </div>
                        <p className="text-muted-foreground">{language === "hindi"
                            ? "भारतीय राष्ट्रीय सेना या आज़ाद हिंद फौज में हरियाणा के लगभग 2,715 सैनिक थे। इनमें से 398 अधिकारी रैंक के थे और 2317 सैनिक थे। रोहतक जिले (रोहतक, सोनीपत और झज्जर क्षेत्र) में सबसे अधिक (149) अधिकारी थे। आईएनए की पहली और दूसरी ब्रिगेड बटालियन का नेतृत्व क्रमशः मेजर सूरजमल और लेफ्टिनेंट कर्नल राणा सिंह ने किया था। नेताजी सुभाष चंद्र बोस ने मेजर सूरजमल को सरकार-ए-जंग की उपाधि दी थी।"
                            : "The Indian National Army (INA) or Azad Hind Fauj consisted of about 2,715 soldiers from Haryana. Of these, 398 were of officer rank and 2317 were soldiers. Rohtak district comprised maximum (149) officers. The first and second brigade battalions of INA were headed by Major Suraj Mal and Lieutenant Colonel Rana Singh respectively. Netaji Subhash Chandra Bose awarded the title of 'Sarkar-e-Jung' to Major Suraj Mal."}
                        </p>
                    </div>

                    {/* Important Freedom Fighters */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Users className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा के प्रमुख स्वतंत्रता सेनानी" : "Important Freedom Fighters From Haryana"}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-lg">लाला हुकमचंद जैन</h3>
                                <p className="text-muted-foreground text-sm">1816 ईस्वी में हिसार जिले में जन्म। 1857 के विद्रोह में भाग लिया। 19 जनवरी, 1858 को फाँसी।</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">नाहर सिंह</h3>
                                <p className="text-muted-foreground text-sm">1823 में बल्लभगढ़ में जन्म। बल्लभगढ़ के शेर के नाम से जाने जाते हैं। 9 जनवरी, 1858 को फाँसी।</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">राव तुलाराम</h3>
                                <p className="text-muted-foreground text-sm">9 दिसंबर, 1825 को रेवाड़ी में जन्म। हरियाणा के राज्य नायक। 23 सितंबर, 1863 को काबुल में निधन।</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">सर चोटूराम</h3>
                                <p className="text-muted-foreground text-sm">24 नवंबर, 1881 को रोहतक में जन्म। 'रहबर-ए-आज़म' और 'गरीबों व किसानों के मसीहा' के नाम से प्रसिद्ध। 1945 में निधन।</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">पंडित नेकीराम शर्मा</h3>
                                <p className="text-muted-foreground text-sm">4 सितंबर, 1887 को रोहतक में जन्म। 'हरियाणा केसरी' के नाम से प्रसिद्ध। 8 जून, 1956 को निधन।</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">सुचेता कृपलानी</h3>
                                <p className="text-muted-foreground text-sm">25 जून, 1908 को अंबाला में जन्म। भारत की पहली महिला मुख्यमंत्री (उत्तर प्रदेश, 1963-67)। 1 दिसंबर, 1974 को निधन।</p>
                            </div>
                        </div>
                    </div>

                    {/* Arya Samaj in Haryana */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Church className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा में आर्य समाज" : "Arya Samaj in Haryana"}</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">{language === "hindi"
                            ? "हरियाणा में सामाजिक और राजनीतिक स्थिति पर नई चेतना जगाने का श्रेय आर्य समाज को जाता है। स्वामी दयानंद ने 10 अप्रैल, 1875 को मुंबई में आर्य समाज नामक हिंदू सुधार संगठन की स्थापना की। 17 जुलाई, 1878 को महर्षि दयानंद ने पहली बार अंबाला शहर में हरियाणा का दौरा किया और 24 दिसंबर, 1880 को रेवाड़ी में।"
                            : "The credit for awakening new consciousness in Haryana on social and political status goes to Arya Samaj. Swami Dayanand founded the Hindu reform organisation called Arya Samaj on 10th April, 1875 in Mumbai. On 17th July, 1878, Maharishi Dayanand visited Haryana for the first time in Ambala city and for the second time in Rewari on 24th December, 1880."}
                        </p>

                        {/* Arya Samaj Table */}
                        <h3 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा में आर्य समाज की शाखाएँ" : "Arya Samaj Branches in Haryana"}</h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-3 text-left">{language === "hindi" ? "शहर/गाँव" : "City/Village"}</th>
                                        <th className="border p-3 text-left">{language === "hindi" ? "वर्ष" : "Year"}</th>
                                        <th className="border p-3 text-left">{language === "hindi" ? "सदस्यों की संख्या" : "Number of Members"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {aryaSamajData.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-3">{item.city}</td>
                                            <td className="border p-3">{item.year}</td>
                                            <td className="border p-3">{item.members}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Arya Samaj Movements Table */}
                        <h3 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा में आर्य समाज आंदोलन" : "Arya Samaj Movements in Haryana"}</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-3 text-left">{language === "hindi" ? "आंदोलन" : "Movement"}</th>
                                        <th className="border p-3 text-left">{language === "hindi" ? "वर्ष" : "Year"}</th>
                                        <th className="border p-3 text-left">{language === "hindi" ? "विवरण" : "Description"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {aryaMovements.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-3">{item.movement}</td>
                                            <td className="border p-3">{item.year}</td>
                                            <td className="border p-3">{item.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <CalendarDays className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा का ऐतिहासिक कालक्रम" : "Timeline of Haryana: Important Events"}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                            {timelineEvents.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-2 border-b hover:bg-muted/20">
                                    <span className="font-mono text-sm text-primary whitespace-nowrap">{item.date}</span>
                                    <span className="text-muted-foreground">{item.event}</span>
                                </div>
                            ))}
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
                            {language === "hindi" ? "हरियाणा के आधुनिक इतिहास के बारे में" : "Common"} <span className="text-primary">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Modern Haryana"}</span>
                        </h2>
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
                            {language === "hindi" ? "अपने हरियाणा के आधुनिक इतिहास के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Modern History of Haryana?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer">
                                {language === "hindi" ? "हरियाणा इतिहास क्विज़ लें" : "Take Haryana History Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/medieval-history" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Haryana Medieval History
                        </Link>
                        <Link href="/haryana-gk/formation-of-haryana" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                            Next Chapter: Formation of Haryana
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा का आधुनिक इतिहास - संपूर्ण संदर्भ" : "Modern History of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के आधुनिक इतिहास के बारे में व्यापक जानकारी प्रदान करता है जिसमें ईस्ट इंडिया कंपनी का शासन, 1857 का विद्रोह, प्रमुख रियासतें, स्वतंत्रता आंदोलन, प्रजामंडल, आर्य समाज, और प्रमुख स्वतंत्रता सेनानी शामिल हैं। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about the modern history of Haryana including East India Company rule, 1857 revolt, major principalities, freedom movements, Praja Mandal, Arya Samaj, and major freedom fighters. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK and Modern History."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और ऐतिहासिक अभिलेखों से स्रोतित" : "Information sourced from official Government of Haryana publications and historical records"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}