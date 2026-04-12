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
    Heart,
    MapPin,
    Calendar,
    BookOpen,
    Users,
    TrendingUp,
    Trophy,
    Medal,
    Crown,
    Star,
    Shield,
    Activity,
    Zap,
    User,
    Award,
    Briefcase,
    UserCheck,
    Sparkles,
    Feather,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaFamousPersonalitiesPage() {
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
            questionHindi: "हरियाणा के एकमात्र परमवीर चक्र विजेता कौन हैं?",
            questionEnglish: "Who is the only Param Vir Chakra awardee from Haryana?",
            answerHindi: "ब्रिगेडियर होशियार सिंह दहिया हरियाणा के एकमात्र परमवीर चक्र विजेता हैं। उनका जन्म 5 मई, 1937 को सोनीपत जिले के सिसाना गाँव में हुआ था।",
            answerEnglish: "Brigadier Hoshiar Singh Dahiya is the only Param Vir Chakra awardee from Haryana. He was born on 5th May, 1937 in Sisana village of Sonipat district."
        },
        {
            questionHindi: "हरियाणा के 'आधुनिक हरियाणा के शिल्पकार' किसे कहा जाता है?",
            questionEnglish: "Who is known as the 'Architect of Modern Haryana'?",
            answerHindi: "चौधरी बंसी लाल को 'आधुनिक हरियाणा के शिल्पकार' और 'हरियाणा का आयरन मैन' कहा जाता है। वे चार बार हरियाणा के मुख्यमंत्री रहे।",
            answerEnglish: "Chaudhary Bansi Lal is known as the 'Architect of Modern Haryana' and 'Iron Man of Haryana'. He served as Chief Minister of Haryana four times."
        },
        {
            questionHindi: "हरियाणा की पहली महिला मुख्यमंत्री कौन थीं?",
            questionEnglish: "Who was the first woman Chief Minister of Haryana?",
            answerHindi: "हरियाणा की पहली महिला मुख्यमंत्री सुचेता कृपलानी थीं। उनका जन्म 25 जून, 1908 को अंबाला शहर में हुआ था। वह उत्तर प्रदेश की मुख्यमंत्री भी रहीं।",
            answerEnglish: "Sucheta Kripalani was the first woman Chief Minister of Haryana. She was born on 25th June, 1908 in Ambala city. She also served as Chief Minister of Uttar Pradesh."
        },
        {
            questionHindi: "हरियाणा से भारत रत्न पाने वाले एकमात्र व्यक्ति कौन हैं?",
            questionEnglish: "Who is the only Bharat Ratna awardee from Haryana?",
            answerHindi: "गुलजारीलाल नंदा हरियाणा से एकमात्र भारत रत्न पुरस्कार विजेता हैं। उन्हें 24 जुलाई, 1977 को भारत रत्न से सम्मानित किया गया था। वे दो बार कार्यवाहक प्रधानमंत्री भी रहे।",
            answerEnglish: "Gulzarilal Nanda is the only Bharat Ratna awardee from Haryana. He was honoured with Bharat Ratna on 24th July, 1977. He also served as Acting Prime Minister of India twice."
        },
        {
            questionHindi: "हरियाणा के प्रसिद्ध सम्राट हर्षवर्धन ने कौन से संस्कृत नाटक लिखे?",
            questionEnglish: "Which Sanskrit plays did the famous emperor Harshavardhana from Haryana write?",
            answerHindi: "सम्राट हर्षवर्धन ने तीन संस्कृत नाटक लिखे - नागानंद, रत्नावली और प्रियदर्शिका। वे थानेसर के शासक थे और इन्हें उत्तरी भारत का अंतिम हिंदू शासक माना जाता है।",
            answerEnglish: "Emperor Harshavardhana wrote three Sanskrit plays - Nagananda, Ratnavali and Priyadarshika. He was the ruler of Thanesar and is considered the last Hindu ruler of Northern India."
        },
        {
            questionHindi: "हरियाणा की अंतरिक्ष यात्री कल्पना चावला कहाँ पैदा हुई थीं?",
            questionEnglish: "Where was Haryana's astronaut Kalpana Chawla born?",
            answerHindi: "कल्पना चावला का जन्म 17 मार्च, 1962 को करनाल में हुआ था। वह अंतरिक्ष यात्रा करने वाली पहली भारतीय मूल की महिला थीं। 2003 में कोलंबिया अंतरिक्ष यान दुर्घटना में उनका निधन हो गया।",
            answerEnglish: "Kalpana Chawla was born on 17th March, 1962 in Karnal. She was the first woman of Indian origin to travel to space. She died in the Columbia space shuttle crash in 2003."
        },
        {
            questionHindi: "हरियाणा के प्रसिद्ध योग गुरु बाबा रामदेव का जन्म कहाँ हुआ था?",
            questionEnglish: "Where was Haryana's famous yoga guru Baba Ramdev born?",
            answerHindi: "बाबा रामदेव का जन्म 25 दिसंबर, 1965 को महेंद्रगढ़ जिले के सैद अलीपुर (नांगल चौधरी) गाँव में हुआ था। उनका बचपन का नाम रामकिशन था।",
            answerEnglish: "Baba Ramdev was born on 25th December, 1965 in Said Alipur (Nangal Chaudhary town) in Mahendragarh district. His childhood name was Ramkishan."
        },
        {
            questionHindi: "मिस वर्ल्ड 2017 का खिताब जीतने वाली हरियाणा की बेटी कौन हैं?",
            questionEnglish: "Who is the daughter of Haryana who won the Miss World 2017 title?",
            answerHindi: "मानुषी छिल्लर ने 2017 में मिस वर्ल्ड का खिताब जीता था। उनका जन्म 14 मई, 1997 को रोहतक जिले में हुआ था। वह 2001 (प्रियंका चोपड़ा) के बाद यह खिताब जीतने वाली पहली भारतीय हैं।",
            answerEnglish: "Manushi Chhillar won the Miss World title in 2017. She was born on 14th May, 1997 in Rohtak district. She is the first Indian to win this title after Priyanka Chopra in 2001."
        }
    ];

    // Historical Personalities
    const historicalPersonalities = [
        { name: "Harshavardhana", period: "590-647 AD", achievements: "Last Hindu ruler of Northern India, patron of Hiuen Tsang, court poet Banabhatta wrote Harshacharita, wrote Sanskrit plays: Nagananda, Ratnavali, Priyadarshika" },
        { name: "Anangpal II", period: "11th Century", achievements: "Tomar dynasty ruler, established Lal Kot (first fort of Delhi), established Iron Pillar in Delhi, built Anangtal Sarovar and Surajkund" },
        { name: "Prithviraj Chauhan", period: "1166-1192 AD", achievements: "Defeated Muhammad of Ghor in First Battle of Tarain (1191), defeated in Second Battle of Tarain (1192), Prithviraj Raso by Chand Baradi" },
        { name: "Hemu (Hemchandra)", period: "16th Century", achievements: "From Rewari, Prime Minister of Adil Shah, assumed title Vikramaditya after controlling Delhi and Agra (1556), defeated by Akbar in Second Battle of Panipat (1556)" },
        { name: "Maharaja Suraj Mal", period: "1707-1763 AD", achievements: "Ruler of Bharatpur, known as 'Plato of Jats' or 'Aflatoon of Jats', areas in Haryana: Gohana, Bhiwani, Kalanaur, Rohtak, Dadri, Gurugram, Ballabhgarh, Nuh, Palwal" },
        { name: "Banda Singh Bahadur", period: "1670-1716 AD", achievements: "Born as Lakshman Dev, became disciple of Guru Gobind Singh, made Sehri Khanda (Sonipat) headquarters, took control of Sonipat, Kaithal, Shahabad" }
    ];

    // Political Personalities
    const politicalPersonalities = [
        { name: "Gulzarilal Nanda", born: "4th July, 1898 (Sialkot)", achievements: "Bharat Ratna (1977), Acting Prime Minister twice (1964 & 1966), Union Home Minister, elected from Kaithal LS (1967), founded Kurukshetra Development Board (1968)" },
        { name: "Sucheta Kripalani", born: "25th June, 1908 (Ambala)", achievements: "First woman Chief Minister of Haryana, Chief Minister of UP (1963), Member of Constituent Assembly (1946), General Secretary of INC (1948-60)" },
        { name: "Chaudhary Bansi Lal", born: "26th August, 1927 (Bhiwani)", achievements: "Architect of Modern Haryana, Iron Man of Haryana, CM of Haryana four times (1968,1972,1986,1996), Defense Minister (1975-77), formed Haryana Vikas Party (1996)" },
        { name: "Chandravati", born: "3rd September, 1928 (Charkhi-Dadri)", achievements: "First woman Lieutenant Governor of India, first woman MP from Haryana, Lt Governor of Puducherry (1990-91), first woman in North India to study Law" },
        { name: "Sushma Swaraj", born: "14th February, 1952 (Ambala)", achievements: "First woman Chief Minister of Delhi (1998), External Affairs Minister (2014-19), 7-time MP, 3-time MLA, youngest Cabinet Minister in Haryana" },
        { name: "Arvind Kejriwal", born: "1968 (Siwani, Bhiwani)", achievements: "IIT Kharagpur graduate, IRS officer, founded Aam Aadmi Party (2012), Chief Minister of Delhi, fought for Right to Information Act" }
    ];

    // Social Activists
    const socialActivists = [
        { name: "Sir Chaudhary Chhaju Ram", born: "27th November, 1865 (Bhiwani)", achievements: "Jute King, founded Jat School in Hisar (1924), conferred 'Sir' title (1931), known as 'Bhamashah of Jats', built hostels, libraries, Dharamshalas" },
        { name: "Uday Singh Mann", born: "14th January, 1911 (Jhajjar)", achievements: "Head of Jat educational institutions (1958-61), participated in Hindi Raksha Andolan (1957), Golden Age of Jat Educational Institutions" },
        { name: "Baba Ramdev", born: "25th December, 1965 (Mahendragarh)", achievements: "Yoga guru, founded Divya Yog Mandir Trust (1995), Patanjali Yoga Peeth Trust (2006), popularized yoga worldwide" },
        { name: "Pandit Bastiram", born: "1842 AD (Jhajjar)", achievements: "Preacher of Arya Samaj, met Swami Dayanand in 1880, propagated Arya Samaj in Haryana, Western UP and Rajasthan" }
    ];

    // Military Personalities
    const militaryPersonalities = [
        { name: "Brigadier Hoshiar Singh Dahiya", born: "5th May, 1937 (Sonipat)", achievements: "Only Param Vir Chakra awardee from Haryana (1971 Indo-Pak war), participated in 1965 and 1971 wars, retired as Brigadier (1996)" },
        { name: "General Deepak Kapoor", born: "1948", achievements: "Chief of Indian Army (30th Sept 2007 - 31st March 2010), 23rd Army Chief" },
        { name: "General Vijay Kumar Singh", born: "10th May, 1951 (Bhiwani)", achievements: "24th Chief of Indian Army (1st April 2010 - 31st March 2012), Minister of State for External Affairs (2014)" },
        { name: "Admiral Sunil Lanba", born: "17th July, 1957 (Palwal)", achievements: "23rd Chief of Naval Staff (31st May 2016 - 31st May 2019), Chairman of Chiefs of Staff Committee" },
        { name: "General Dalbir Singh Suhag", born: "28th December, 1954 (Jhajjar)", achievements: "26th Chief of Army Staff (31st July 2014 - 31st December 2016)" },
        { name: "Havildar Chhelu Ram", born: "1905 (Bhiwani)", achievements: "Victoria Cross medal recipient (posthumous), died fighting in Tunisia during World War II (1943)" },
        { name: "Havildar Umrao Singh Yadav", born: "1920 (Jhajjar)", achievements: "Victoria Cross medal recipient, only Non-Commissioned Officer to receive the medal" }
    ];

    // Miscellaneous Personalities
    const miscellaneousPersonalities = [
        { name: "Kalpana Chawla", born: "17th March, 1962 (Karnal)", achievements: "First woman of Indian origin in space (Columbia spacecraft, 1997), died in Columbia crash (1st Feb, 2003)" },
        { name: "Santosh Yadav", born: "1969 (Rewari)", achievements: "Only Indian woman to conquer Mount Everest twice (May 1992 & May 1993), Padma Shri (2000), Deputy Superintendent in ITBP" },
        { name: "Manushi Chhillar", born: "14th May, 1997 (Rohtak)", achievements: "Miss World 2017, Femina Miss India 2017, first Indian to win Miss World after Priyanka Chopra (2001)" },
        { name: "Shekhar Gupta", achievements: "Chief Editor of The Indian Express, anchored 'Walk the Talk' on NDTV, Padma Bhushan (2009) in journalism" },
        { name: "Magician Samrat Shankar", born: "6th September, 1950 (Sirsa)", achievements: "Famous magician, original name Shiv Kumar Modi, started magic shows from 1974" },
        { name: "Daryao Singh Malik", born: "11th July, 1938 (Panipat)", achievements: "Played comic role of 'Khunda' in first Haryanvi film Chandrawal" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 dark:from-purple-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Language Toggle Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium backdrop-blur-sm">
                        <Crown className="w-4 h-4" />
                        {language === "hindi" ? "प्रसिद्ध विभूतियाँ - हरियाणा सरकार" : "Famous Personalities - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा की" : "Famous"} <span className="text-purple-600 dark:text-purple-400">{language === "hindi" ? "प्रसिद्ध विभूतियाँ" : "Personalities of Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "ऐतिहासिक काल से लेकर वर्तमान युग तक, हरियाणा राज्य कई असाधारण व्यक्तियों की भूमि रहा है। इतिहास, राजनीति, साहित्य, कला, खेल और अन्य क्षेत्रों में योगदान देने वाली प्रमुख विभूतियों की संपूर्ण जानकारी"
                            : "From the historical period to current era, Haryana state remained the land of many extraordinary people. Complete information about personalities who contributed in history, politics, literature, arts, sports and other fields"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <History className="w-4 h-4 text-purple-600" />
                            <span>{language === "hindi" ? "ऐतिहासिक" : "Historical"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Briefcase className="w-4 h-4 text-purple-600" />
                            <span>{language === "hindi" ? "राजनीतिक" : "Political"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Shield className="w-4 h-4 text-purple-600" />
                            <span>{language === "hindi" ? "सैन्य" : "Military"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            <span>{language === "hindi" ? "विविध" : "Miscellaneous"}</span>
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
                            <div className="p-2 rounded-xl bg-purple-500/20">
                                <History className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "परिचय" : "Introduction"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "ऐतिहासिक काल से लेकर वर्तमान युग तक, हरियाणा राज्य कई असाधारण व्यक्तियों की भूमि रहा है। राज्य में कई ऐसी विभूतियाँ पैदा हुईं जो इतिहास, राजनीति, साहित्य, कला, खेल आदि जैसे विभिन्न क्षेत्रों से संबंधित थीं।"
                                : "From the historical period to current Era, Haryana state remained the land of many extraordinary people. Many personalities born in the state who belonged to various fields like history, politics, literature, arts, sports and so on."}
                        </p>
                    </div>

                    {/* Historical Personalities Section */}
                    <div className="bg-amber-500/5 rounded-2xl p-6 md:p-8 border-2 border-amber-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-500/30">
                                <Crown className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-600">{language === "hindi" ? "ऐतिहासिक विभूतियाँ" : "Historical Personalities"}</h2>
                        </div>
                        <div className="space-y-4">
                            {historicalPersonalities.map((person, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-amber-600">{person.name}</h3>
                                    <p className="text-sm text-muted-foreground">काल: {person.period}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{person.achievements}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Political Personalities Section */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/30">
                                <Briefcase className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "राजनीतिक विभूतियाँ" : "Political Personalities"}</h2>
                        </div>
                        <div className="space-y-4">
                            {politicalPersonalities.map((person, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-blue-600">{person.name}</h3>
                                    <p className="text-sm text-muted-foreground">जन्म: {person.born}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{person.achievements}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Activists Section */}
                    <div className="bg-green-500/5 rounded-2xl p-6 md:p-8 border-2 border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/30">
                                <Heart className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{language === "hindi" ? "समाज सुधारक" : "Social Activists"}</h2>
                        </div>
                        <div className="space-y-4">
                            {socialActivists.map((person, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-green-600">{person.name}</h3>
                                    <p className="text-sm text-muted-foreground">जन्म: {person.born}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{person.achievements}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Military Personalities Section */}
                    <div className="bg-red-500/5 rounded-2xl p-6 md:p-8 border-2 border-red-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-red-500/30">
                                <Shield className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-600">{language === "hindi" ? "सैन्य विभूतियाँ" : "Military Personalities"}</h2>
                        </div>
                        <div className="space-y-4">
                            {militaryPersonalities.map((person, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-red-600">{person.name}</h3>
                                    <p className="text-sm text-muted-foreground">जन्म: {person.born}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{person.achievements}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Miscellaneous Personalities Section */}
                    <div className="bg-teal-500/5 rounded-2xl p-6 md:p-8 border-2 border-teal-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-teal-500/30">
                                <Sparkles className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-teal-600">{language === "hindi" ? "विविध विभूतियाँ" : "Miscellaneous Personalities"}</h2>
                        </div>
                        <div className="space-y-4">
                            {miscellaneousPersonalities.map((person, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-teal-600">{person.name}</h3>
                                    {person.born && <p className="text-sm text-muted-foreground">जन्म: {person.born}</p>}
                                    <p className="text-sm text-muted-foreground mt-1">{person.achievements}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Summary Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center hover:shadow-md transition-all">
                            <Crown className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-amber-600">6</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "ऐतिहासिक विभूतियाँ" : "Historical Personalities"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center hover:shadow-md transition-all">
                            <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-blue-600">6</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "राजनीतिक विभूतियाँ" : "Political Personalities"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center hover:shadow-md transition-all">
                            <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-red-600">7</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सैन्य विभूतियाँ" : "Military Personalities"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center hover:shadow-md transition-all">
                            <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-purple-600">1</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "भारत रत्न विजेता" : "Bharat Ratna Awardee"}</p>
                        </div>
                    </div>

                    {/* Special Highlights */}
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 md:p-8 border-2 border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-500/30">
                                <Star className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-600">{language === "hindi" ? "विशेष उपलब्धियाँ" : "Special Achievements"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="text-lg font-semibold text-purple-600">🏆 भारत रत्न</h3>
                                <p className="text-sm text-muted-foreground">गुलजारीलाल नंदा - हरियाणा से एकमात्र भारत रत्न विजेता (1977)</p>
                            </div>
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="text-lg font-semibold text-purple-600">🎖️ परमवीर चक्र</h3>
                                <p className="text-sm text-muted-foreground">ब्रिगेडियर होशियार सिंह - हरियाणा के एकमात्र परमवीर चक्र विजेता</p>
                            </div>
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="text-lg font-semibold text-purple-600">🚀 अंतरिक्ष यात्री</h3>
                                <p className="text-sm text-muted-foreground">कल्पना चावला - अंतरिक्ष यात्रा करने वाली पहली भारतीय मूल की महिला</p>
                            </div>
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="text-lg font-semibold text-purple-600">🏔️ एवरेस्ट विजेता</h3>
                                <p className="text-sm text-muted-foreground">संतोष यादव - एवरेस्ट पर दो बार चढ़ने वाली एकमात्र भारतीय महिला</p>
                            </div>
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="text-lg font-semibold text-purple-600">👑 मिस वर्ल्ड</h3>
                                <p className="text-sm text-muted-foreground">मानुषी छिल्लर - मिस वर्ल्ड 2017, 2001 के बाद यह खिताब जीतने वाली पहली भारतीय</p>
                            </div>
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="text-lg font-semibold text-purple-600">🧘 योग गुरु</h3>
                                <p className="text-sm text-muted-foreground">बाबा रामदेव - विश्व स्तर पर योग के प्रचार-प्रसार के लिए प्रसिद्ध</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा की प्रसिद्ध विभूतियाँ: तथ्य सारांश" : "Haryana Famous Personalities: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "परमवीर चक्र विजेता" : "Param Vir Chakra Awardee"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "भारत रत्न विजेता" : "Bharat Ratna Awardee"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "विक्टोरिया क्रॉस विजेता" : "Victoria Cross Awardees"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "संस्कृत नाटक (हर्षवर्धन)" : "Sanskrit Plays (Harshavardhana)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "बार मुख्यमंत्री (बंसी लाल)" : "Times CM (Bansi Lal)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">7</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "बार सांसद (सुषमा स्वराज)" : "Times MP (Sushma Swaraj)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">1962</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "कल्पना चावला का जन्म" : "Kalpana Chawla Born"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">2017</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "मानुषी छिल्लर - मिस वर्ल्ड" : "Manushi Chhillar - Miss World"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा की प्रसिद्ध विभूतियों के" : "Common"} <span className="text-purple-600">{language === "hindi" ? "बारे में सामान्य प्रश्न" : "Questions About Haryana's Famous Personalities"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा की ऐतिहासिक, राजनीतिक, सैन्य और अन्य विभूतियों के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's historical, political, military and other personalities"}
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
                                        className={`w-5 h-5 text-purple-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
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
                            {language === "hindi" ? "अपने हरियाणा जीके के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana GK?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-purple-600 hover:bg-purple-700">
                                {language === "hindi" ? "हरियाणा जीके क्विज़ लें" : "Take Haryana GK Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/welfare-schemes" className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "अगला अध्याय: कल्याणकारी योजनाएं" : "Next Chapter: Welfare Schemes"}
                        </Link>
                        <Link href="/haryana-gk" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            {language === "hindi" ? "हरियाणा GK पर वापस" : "Back to Haryana GK"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा की प्रसिद्ध विभूतियाँ - संपूर्ण संदर्भ" : "Famous Personalities of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की प्रसिद्ध विभूतियों के बारे में व्यापक जानकारी प्रदान करता है - ऐतिहासिक विभूतियाँ (हर्षवर्धन, अनंगपाल द्वितीय, पृथ्वीराज चौहान, हेमू, महाराजा सूरजमाल, बंदा सिंह बहादुर), राजनीतिक विभूतियाँ (गुलजारीलाल नंदा, सुचेता कृपलानी, चौधरी बंसी लाल, सुषमा स्वराज, अरविंद केजरीवाल), समाज सुधारक (सर छोटू राम, बाबा रामदेव), सैन्य विभूतियाँ (ब्रिगेडियर होशियार सिंह, जनरल दीपक कपूर, जनरल वीके सिंह, एडमिरल सुनील लांबा), और विविध विभूतियाँ (कल्पना चावला, संतोष यादव, मानुषी छिल्लर)। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about famous personalities of Haryana - historical personalities (Harshavardhana, Anangpal II, Prithviraj Chauhan, Hemu, Maharaja Suraj Mal, Banda Singh Bahadur), political personalities (Gulzarilal Nanda, Sucheta Kripalani, Chaudhary Bansi Lal, Sushma Swaraj, Arvind Kejriwal), social activists (Sir Chhotu Ram, Baba Ramdev), military personalities (Brigadier Hoshiar Singh, General Deepak Kapoor, General VK Singh, Admiral Sunil Lanba), and miscellaneous personalities (Kalpana Chawla, Santosh Yadav, Manushi Chhillar). A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
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