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
    TrendingDown,
    BarChart3,
    PieChart,
    Building2,
    Home,
    Church,
    Star,
    Activity,
    Baby,
    GraduationCap,
    Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaDemographyPage() {
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
            questionHindi: "2011 की जनगणना के अनुसार हरियाणा की कुल जनसंख्या कितनी है?",
            questionEnglish: "What is the total population of Haryana as per 2011 census?",
            answerHindi: "2011 की जनगणना के अनुसार, हरियाणा की कुल जनसंख्या 2,53,51,462 है, जिसमें पुरुषों की संख्या 1,34,94,734 और महिलाओं की संख्या 1,18,56,728 है।",
            answerEnglish: "As per 2011 census, the total population of Haryana is 2,53,51,462, in which the number of males is 1,34,94,734 and the number of females is 1,18,56,728."
        },
        {
            questionHindi: "2001–2011 के दौरान हरियाणा की दशकीय जनसंख्या वृद्धि दर कितनी थी?",
            questionEnglish: "What was Haryana’s decadal population growth rate during 2001–2011?",
            answerHindi: "जनगणना 2011 के अनुसार, 2001 से 2011 के बीच हरियाणा की दशकीय जनसंख्या वृद्धि दर 19.90% थी। 1991–2001 के दशक में यह दर 28.43% थी।",
            answerEnglish: "According to Census 2011, Haryana’s population grew by 19.90% during 2001–2011, compared with 28.43% during 1991–2001."
        },
        {
            questionHindi: "हरियाणा का लिंगानुपात क्या है?",
            questionEnglish: "What is the sex ratio of Haryana?",
            answerHindi: "2011 की जनगणना के अनुसार, हरियाणा का लिंगानुपात 879 है, जो राष्ट्रीय औसत (943) से कम है। राज्य का बाल लिंगानुपात (0-6 वर्ष) 834 है।",
            answerEnglish: "As per 2011 census, the sex ratio of Haryana is 879, which is less than the national average (943). The child sex ratio (0-6 years) of the state is 834."
        },
        {
            questionHindi: "2011 की जनगणना के अनुसार हरियाणा की साक्षरता दर कितनी थी?",
            questionEnglish: "What was Haryana’s literacy rate in Census 2011?",
            answerHindi: "अंतिम जनगणना 2011 के अनुसार हरियाणा की साक्षरता दर 75.55% थी। पुरुष साक्षरता 84.06% और महिला साक्षरता 65.94% थी। साक्षरता दर की गणना 7 वर्ष या उससे अधिक आयु के लोगों के लिए की जाती है।",
            answerEnglish: "Final Census 2011 figures show Haryana’s literacy rate was 75.55%, with 84.06% male literacy and 65.94% female literacy. Literacy is calculated for people aged seven years and above."
        },
        {
            questionHindi: "2011 की जनगणना में हरियाणा के किस जिले की जनसंख्या सबसे अधिक और सबसे कम थी?",
            questionEnglish: "Which Haryana districts had the highest and lowest populations in Census 2011?",
            answerHindi: "जनगणना 2011 की तत्कालीन 21 जिला-सीमाओं के अनुसार फरीदाबाद (18,09,733) की जनसंख्या सबसे अधिक और पंचकूला (5,61,293) की सबसे कम थी।",
            answerEnglish: "Among Haryana’s 21 districts as recorded in Census 2011, Faridabad had the largest population (1,809,733) and Panchkula the smallest (561,293). These rankings use 2011 district boundaries."
        },
        {
            questionHindi: "2011 में हरियाणा के किस जिले का लिंगानुपात सर्वाधिक और न्यूनतम था?",
            questionEnglish: "Which Haryana districts had the highest and lowest sex ratios in Census 2011?",
            answerHindi: "जनगणना 2011 के अनुसार नूंह (तत्कालीन मेवात) का लिंगानुपात 907 (सर्वाधिक) और गुरुग्राम (तत्कालीन गुड़गाँव) का 854 (न्यूनतम) था।",
            answerEnglish: "In Census 2011, Nuh (then Mewat) had the highest district sex ratio (907 females per 1,000 males), while Gurugram (then Gurgaon) had the lowest (854)."
        },
        {
            questionHindi: "2011 में हरियाणा के किन जिलों की साक्षरता दर सर्वाधिक और न्यूनतम थी?",
            questionEnglish: "Which Haryana districts had the highest and lowest literacy rates in Census 2011?",
            answerHindi: "जनगणना 2011 की 21 जिला-सीमाओं के अनुसार गुरुग्राम (84.70%) की साक्षरता दर सर्वाधिक और नूंह (54.08%) की न्यूनतम थी।",
            answerEnglish: "Among the 21 districts in Census 2011, Gurugram recorded the highest literacy rate (84.70%) and Nuh the lowest (54.08%)."
        },
        {
            questionHindi: "2011 की जनगणना में हरियाणा के किस जिले में अनुसूचित जाति की जनसंख्या सर्वाधिक थी?",
            questionEnglish: "Which Haryana district had the highest Scheduled Caste population in Census 2011?",
            answerHindi: "जनगणना 2011 के अनुसार हिसार में अनुसूचित जाति की जनसंख्या सर्वाधिक (4,08,785) और नूंह में न्यूनतम (75,251) थी। ये आँकड़े 2011 की जिला-सीमाओं पर आधारित हैं।",
            answerEnglish: "In Census 2011, Hisar had the largest Scheduled Caste population (408,785), while Nuh had the smallest (75,251), among the 21 districts counted at the time."
        }
    ];

    // District-wise Population Data
    const districtPopulation = [
        { district: "Ambala", male: 598703, female: 529647, total: 1128350, density: 717, sexRatio: 885 },
        { district: "Panchkula", male: 299679, female: 261614, total: 561293, density: 625, sexRatio: 873 },
        { district: "Yamunanagar", male: 646718, female: 567487, total: 1214205, density: 687, sexRatio: 877 },
        { district: "Kurukshetra", male: 510976, female: 453679, total: 964655, density: 630, sexRatio: 888 },
        { district: "Kaithal", male: 571003, female: 503301, total: 1074304, density: 464, sexRatio: 881 },
        { district: "Karnal", male: 797712, female: 707612, total: 1505324, density: 597, sexRatio: 887 },
        { district: "Panipat", male: 646857, female: 558580, total: 1205437, density: 951, sexRatio: 864 },
        { district: "Sonipat", male: 781299, female: 668702, total: 1450001, density: 683, sexRatio: 856 },
        { district: "Rohtak", male: 568479, female: 492725, total: 1061204, density: 608, sexRatio: 867 },
        { district: "Jhajjar", male: 514667, female: 443738, total: 958405, density: 523, sexRatio: 862 },
        { district: "Faridabad", male: 966110, female: 843623, total: 1809733, density: 2442, sexRatio: 873 },
        { district: "Palwal", male: 554497, female: 488211, total: 1042708, density: 767, sexRatio: 880 },
        { district: "Gurugram", male: 816690, female: 697742, total: 1514432, density: 1204, sexRatio: 854 },
        { district: "Nuh (Mewat)", male: 571162, female: 518101, total: 1089263, density: 723, sexRatio: 907 },
        { district: "Rewari", male: 474335, female: 425997, total: 900332, density: 565, sexRatio: 898 },
        { district: "Mahendragarh", male: 486665, female: 435423, total: 922088, density: 486, sexRatio: 895 },
        { district: "Bhiwani", male: 866672, female: 767773, total: 1634445, density: 342, sexRatio: 886 },
        { district: "Jind", male: 713006, female: 621146, total: 1334152, density: 494, sexRatio: 871 },
        { district: "Hisar", male: 931562, female: 812369, total: 1743931, density: 438, sexRatio: 872 },
        { district: "Fatehabad", male: 495360, female: 446651, total: 942011, density: 371, sexRatio: 902 },
        { district: "Sirsa", male: 682582, female: 612607, total: 1295189, density: 303, sexRatio: 897 }
    ];

    // Religion-wise Census Data
    const religionData = [
        { religion: "Hinduism", total: "2,21,71,128", percentage: "87.46%", male: "1,18,21,082", female: "1,03,50,046" },
        { religion: "Islam", total: "17,81,342", percentage: "7.03%", male: "9,40,027", female: "8,41,315" },
        { religion: "Sikhism", total: "12,43,752", percentage: "4.91%", male: "6,53,468", female: "5,90,284" },
        { religion: "Jainism", total: "52,613", percentage: "0.21%", male: "27,358", female: "25,255" },
        { religion: "Christianity", total: "50,353", percentage: "0.20%", male: "26,165", female: "24,188" },
        { religion: "Buddhism", total: "7,514", percentage: "0.03%", male: "4,099", female: "3,415" },
        { religion: "Other religions / Not stated", total: "44,760", percentage: "0.18%", male: "22,535", female: "22,225" }
    ];

    // Top 5 Districts by Population
    const top5Population = [
        { rank: 1, district: "Faridabad", population: "18,09,733" },
        { rank: 2, district: "Hisar", population: "17,43,931" },
        { rank: 3, district: "Bhiwani", population: "16,34,445" },
        { rank: 4, district: "Gurugram", population: "15,14,432" },
        { rank: 5, district: "Karnal", population: "15,05,324" }
    ];

    const bottom5Population = [
        { rank: 1, district: "Panchkula", population: "5,61,293" },
        { rank: 2, district: "Rewari", population: "9,00,332" },
        { rank: 3, district: "Mahendragarh", population: "9,22,088" },
        { rank: 4, district: "Fatehabad", population: "9,42,011" },
        { rank: 5, district: "Jhajjar", population: "9,58,405" }
    ];

    // Top 5 Districts by Literacy Rate
    const top5Literacy = [
        { rank: 1, district: "Gurugram", literacy: "84.70%" },
        { rank: 2, district: "Panchkula", literacy: "81.88%" },
        { rank: 3, district: "Ambala", literacy: "81.75%" },
        { rank: 4, district: "Faridabad", literacy: "81.70%" },
        { rank: 5, district: "Rewari", literacy: "80.99%" }
    ];

    const bottom5Literacy = [
        { rank: 1, district: "Nuh", literacy: "54.08%" },
        { rank: 2, district: "Fatehabad", literacy: "67.92%" },
        { rank: 3, district: "Sirsa", literacy: "68.82%" },
        { rank: 4, district: "Kaithal", literacy: "69.15%" },
        { rank: 5, district: "Palwal", literacy: "69.32%" }
    ];

    // Top 5 Districts by Sex Ratio
    const top5SexRatio = [
        { rank: 1, district: "Nuh", sexRatio: 907 },
        { rank: 2, district: "Fatehabad", sexRatio: 902 },
        { rank: 3, district: "Rewari", sexRatio: 898 },
        { rank: 4, district: "Sirsa", sexRatio: 897 },
        { rank: 5, district: "Mahendragarh", sexRatio: 895 }
    ];

    const bottom5SexRatio = [
        { rank: 1, district: "Gurugram", sexRatio: 854 },
        { rank: 2, district: "Sonipat", sexRatio: 856 },
        { rank: 3, district: "Jhajjar", sexRatio: 862 },
        { rank: 4, district: "Panipat", sexRatio: 864 },
        { rank: 5, district: "Rohtak", sexRatio: 867 }
    ];

    // Top 5 Districts by Child Sex Ratio
    const top5ChildSexRatio = [
        { rank: 1, district: "Nuh", childSexRatio: 906 },
        { rank: 2, district: "Palwal", childSexRatio: 866 },
        { rank: 3, district: "Panchkula", childSexRatio: 863 },
        { rank: 4, district: "Sirsa", childSexRatio: 862 },
        { rank: 5, district: "Fatehabad", childSexRatio: 854 }
    ];

    const bottom5ChildSexRatio = [
        { rank: 1, district: "Mahendragarh", childSexRatio: 775 },
        { rank: 2, district: "Jhajjar", childSexRatio: 782 },
        { rank: 3, district: "Rewari", childSexRatio: 787 },
        { rank: 4, district: "Sonipat", childSexRatio: 798 },
        { rank: 5, district: "Ambala", childSexRatio: 810 }
    ];

    // Top 5 Districts by SC Population
    const top5SCPopulation = [
        { rank: 1, district: "Hisar", scPopulation: "4,08,785" },
        { rank: 2, district: "Sirsa", scPopulation: "3,87,381" },
        { rank: 3, district: "Bhiwani", scPopulation: "3,41,162" },
        { rank: 4, district: "Karnal", scPopulation: "3,39,604" },
        { rank: 5, district: "Yamunanagar", scPopulation: "3,06,743" }
    ];

    const bottom5SCPopulation = [
        { rank: 1, district: "Nuh", scPopulation: "75,251" },
        { rank: 2, district: "Panchkula", scPopulation: "1,01,830" },
        { rank: 3, district: "Mahendragarh", scPopulation: "1,56,314" },
        { rank: 4, district: "Jhajjar", scPopulation: "1,70,448" },
        { rank: 5, district: "Rewari", scPopulation: "1,82,606" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 dark:from-blue-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Language Toggle Button */}
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
                        <Users className="w-4 h-4" />
                        {language === "hindi" ? "जनगणना 2011 – आधिकारिक आँकड़ों पर आधारित" : "Census 2011 – Based on official statistics"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा की" : "Demographic"} <span className="text-blue-600 dark:text-blue-400">{language === "hindi" ? "जनसांख्यिकी" : "Profile of Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "2011 की जनगणना के आधार पर हरियाणा की जनसंख्या, जनसंख्या घनत्व, लिंगानुपात, साक्षरता दर, धार्मिक जनसंख्या, अनुसूचित जाति की जनसंख्या और रोजगार संरचना की संपूर्ण जानकारी"
                            : "Complete information about Haryana's population, population density, sex ratio, literacy rate, religious population, scheduled caste population and occupational structure based on 2011 census"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Users className="w-4 h-4 text-blue-600" />
                            <span>{language === "hindi" ? "कुल जनसंख्या" : "Total Population"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <TrendingUp className="w-4 h-4 text-blue-600" />
                            <span>{language === "hindi" ? "वृद्धि दर" : "Growth Rate"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Heart className="w-4 h-4 text-blue-600" />
                            <span>{language === "hindi" ? "लिंगानुपात" : "Sex Ratio"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <GraduationCap className="w-4 h-4 text-blue-600" />
                            <span>{language === "hindi" ? "साक्षरता दर" : "Literacy Rate"}</span>
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
                            <div className="p-2 rounded-xl bg-blue-500/20">
                                <History className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "परिचय" : "Introduction"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "हरियाणा के 1966 में राज्य गठन के बाद पहली जनगणना 1971 में हुई और 2011 की जनगणना राज्य की पाँचवीं जनगणना थी। जनगणना 2011 के अंतिम आँकड़ों के अनुसार कुल जनसंख्या 2,53,51,462 थी, जिसमें 1,34,94,734 पुरुष और 1,18,56,728 महिलाएँ थीं। इस पृष्ठ के जिलेवार आँकड़े 2011 की तत्कालीन 21 जिला-सीमाओं पर आधारित हैं; बाद में बने चरखी दादरी (2016) और हांसी (2025) के अलग जिला-आँकड़े इन तालिकाओं में शामिल नहीं हैं।"
                                : "The first census after Haryana became a state in 1966 was conducted in 1971; Census 2011 was the state’s fifth census. Final Census 2011 figures recorded a population of 25,351,462, comprising 13,494,734 males and 11,856,728 females. District-wise figures on this page reflect the 21 districts and their boundaries in 2011; Charkhi Dadri (created in 2016) and Hansi (created in 2025) were not separately enumerated as districts."}
                        </p>
                    </div>

                    {/* Key Statistics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center hover:shadow-md transition-all">
                            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-blue-600">2.54 Cr</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "कुल जनसंख्या" : "Total Population"}</p>
                            <p className="text-xs text-muted-foreground mt-1">(2011 Census)</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center hover:shadow-md transition-all">
                            <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-blue-600">573</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "जनसंख्या घनत्व" : "Population Density"}</p>
                            <p className="text-xs text-muted-foreground mt-1">(persons/sq km)</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center hover:shadow-md transition-all">
                            <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-blue-600">879</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "लिंगानुपात" : "Sex Ratio"}</p>
                            <p className="text-xs text-muted-foreground mt-1">(females/1000 males)</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center hover:shadow-md transition-all">
                            <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-blue-600">75.55%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "साक्षरता दर" : "Literacy Rate"}</p>
                            <p className="text-xs text-muted-foreground mt-1">(2011 Census)</p>
                        </div>
                    </div>

                    {/* Population Overview Section */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/30">
                                <TrendingUp className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "जनसंख्या अवलोकन" : "Population Overview"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-3">{language === "hindi" ? "सर्वाधिक जनसंख्या वाले जिले" : "Districts with Highest Population"}</h3>
                                <div className="space-y-2">
                                    {top5Population.map(item => (
                                        <div key={item.rank} className="flex justify-between items-center bg-card p-3 rounded-lg border">
                                            <span className="font-medium">{item.rank}. {item.district}</span>
                                            <span className="text-blue-600 font-semibold">{item.population}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3">{language === "hindi" ? "न्यूनतम जनसंख्या वाले जिले" : "Districts with Lowest Population"}</h3>
                                <div className="space-y-2">
                                    {bottom5Population.map(item => (
                                        <div key={item.rank} className="flex justify-between items-center bg-card p-3 rounded-lg border">
                                            <span className="font-medium">{item.rank}. {item.district}</span>
                                            <span className="text-blue-600 font-semibold">{item.population}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sex Ratio Section */}
                    <div className="bg-pink-500/5 rounded-2xl p-6 md:p-8 border-2 border-pink-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-pink-500/30">
                                <Heart className="w-5 h-5 text-pink-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-pink-600">{language === "hindi" ? "लिंगानुपात" : "Sex Ratio"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-3">{language === "hindi" ? "सर्वाधिक लिंगानुपात वाले जिले" : "Districts with Highest Sex Ratio"}</h3>
                                <div className="space-y-2">
                                    {top5SexRatio.map(item => (
                                        <div key={item.rank} className="flex justify-between items-center bg-card p-3 rounded-lg border">
                                            <span className="font-medium">{item.rank}. {item.district}</span>
                                            <span className="text-pink-600 font-semibold">{item.sexRatio}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3">{language === "hindi" ? "न्यूनतम लिंगानुपात वाले जिले" : "Districts with Lowest Sex Ratio"}</h3>
                                <div className="space-y-2">
                                    {bottom5SexRatio.map(item => (
                                        <div key={item.rank} className="flex justify-between items-center bg-card p-3 rounded-lg border">
                                            <span className="font-medium">{item.rank}. {item.district}</span>
                                            <span className="text-pink-600 font-semibold">{item.sexRatio}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 bg-card p-4 rounded-lg border">
                            <p className="text-sm text-muted-foreground">
                                {language === "hindi"
                                    ? "राज्य का बाल लिंगानुपात (0-6 वर्ष) 834 है, जो राष्ट्रीय औसत (919) से 85 अंक कम है। नूंह (906) में सर्वाधिक और महेंद्रगढ़ (775) में सबसे कम बाल लिंगानुपात है।"
                                    : "The child sex ratio (0-6 years) of the state is 834, which is 85 points less than the national average (919). Nuh (906) has the highest and Mahendragarh (775) has the lowest child sex ratio."}
                            </p>
                        </div>
                    </div>

                    {/* Literacy Rate Section */}
                    <div className="bg-green-500/5 rounded-2xl p-6 md:p-8 border-2 border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/30">
                                <GraduationCap className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{language === "hindi" ? "साक्षरता दर" : "Literacy Rate"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-3">{language === "hindi" ? "सर्वाधिक साक्षरता वाले जिले" : "Districts with Highest Literacy Rate"}</h3>
                                <div className="space-y-2">
                                    {top5Literacy.map(item => (
                                        <div key={item.rank} className="flex justify-between items-center bg-card p-3 rounded-lg border">
                                            <span className="font-medium">{item.rank}. {item.district}</span>
                                            <span className="text-green-600 font-semibold">{item.literacy}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3">{language === "hindi" ? "न्यूनतम साक्षरता वाले जिले" : "Districts with Lowest Literacy Rate"}</h3>
                                <div className="space-y-2">
                                    {bottom5Literacy.map(item => (
                                        <div key={item.rank} className="flex justify-between items-center bg-card p-3 rounded-lg border">
                                            <span className="font-medium">{item.rank}. {item.district}</span>
                                            <span className="text-green-600 font-semibold">{item.literacy}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 bg-card p-4 rounded-lg border">
                            <p className="text-sm text-muted-foreground">
                                {language === "hindi"
                                    ? "जनगणना 2011 में हरियाणा की पुरुष साक्षरता दर 84.06% और महिला साक्षरता दर 65.94% थी। तत्कालीन 21 जिलों में रेवाड़ी (91.44%) की पुरुष और गुरुग्राम (77.98%) की महिला साक्षरता दर सर्वाधिक थी।"
                                    : "In Census 2011, Haryana’s male literacy rate was 84.06% and female literacy rate was 65.94%. Among the 21 districts then recorded, Rewari (91.44%) had the highest male literacy and Gurugram (77.98%) the highest female literacy."}
                            </p>
                        </div>
                    </div>

                    {/* District-wise Population Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "जिलेवार जनसंख्या (2011 की 21 जिला-सीमाएँ)" : "District-wise Population (21 districts, Census 2011)"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "जिला" : "District"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "पुरुष" : "Male"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "महिला" : "Female"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "कुल" : "Total"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "घनत्व" : "Density"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "लिंगानुपात" : "Sex Ratio"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {districtPopulation.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2 font-medium">{item.district}</td>
                                            <td className="border p-2">{item.male.toLocaleString()}</td>
                                            <td className="border p-2">{item.female.toLocaleString()}</td>
                                            <td className="border p-2">{item.total.toLocaleString()}</td>
                                            <td className="border p-2">{item.density}</td>
                                            <td className="border p-2">{item.sexRatio}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Religion-wise Census Table */}
                    <div className="bg-amber-500/5 rounded-2xl p-6 md:p-8 border-2 border-amber-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-500/30">
                                <Church className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-600">{language === "hindi" ? "धार्मिक जनसंख्या (2011)" : "Religion-wise Population (2011)"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-amber-500/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "धर्म" : "Religion"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "कुल जनसंख्या" : "Total Population"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "प्रतिशत" : "Percentage"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "पुरुष" : "Male"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "महिला" : "Female"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {religionData.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2 font-medium">{item.religion}</td>
                                            <td className="border p-2">{item.total}</td>
                                            <td className="border p-2">{item.percentage}</td>
                                            <td className="border p-2">{item.male}</td>
                                            <td className="border p-2">{item.female}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 bg-card p-4 rounded-lg border">
                            <p className="text-sm text-muted-foreground">
                                {language === "hindi"
                                    ? "जनगणना 2011 के अनुसार हिंदू समुदाय (87.46%) की जनसंख्या सबसे अधिक थी। ‘अन्य धर्म / धर्म नहीं बताया’ श्रेणी के 44,760 व्यक्तियों में 2,548 ‘अन्य धर्म’ और 42,212 ‘धर्म नहीं बताया’ श्रेणी के थे। यहाँ दर्शाए गए सभी आँकड़े 2011 के हैं।"
                                    : "Hindus formed the largest religious group in Haryana (87.46%) in Census 2011. The 44,760 people shown under ‘Other religions / Not stated’ comprise 2,548 under ‘Other religions and persuasions’ and 42,212 whose religion was not stated. These are 2011 figures."}
                            </p>
                        </div>
                    </div>

                    {/* Scheduled Caste Population Section */}
                    <div className="bg-purple-500/5 rounded-2xl p-6 md:p-8 border-2 border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-500/30">
                                <Users className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-600">{language === "hindi" ? "अनुसूचित जाति की जनसंख्या" : "Scheduled Caste Population"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-3">{language === "hindi" ? "सर्वाधिक एससी जनसंख्या वाले जिले" : "Districts with Highest SC Population"}</h3>
                                <div className="space-y-2">
                                    {top5SCPopulation.map(item => (
                                        <div key={item.rank} className="flex justify-between items-center bg-card p-3 rounded-lg border">
                                            <span className="font-medium">{item.rank}. {item.district}</span>
                                            <span className="text-purple-600 font-semibold">{item.scPopulation}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3">{language === "hindi" ? "न्यूनतम एससी जनसंख्या वाले जिले" : "Districts with Lowest SC Population"}</h3>
                                <div className="space-y-2">
                                    {bottom5SCPopulation.map(item => (
                                        <div key={item.rank} className="flex justify-between items-center bg-card p-3 rounded-lg border">
                                            <span className="font-medium">{item.rank}. {item.district}</span>
                                            <span className="text-purple-600 font-semibold">{item.scPopulation}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 bg-card p-4 rounded-lg border">
                            <p className="text-sm text-muted-foreground">
                                {language === "hindi"
                                    ? "जनगणना 2011 के अनुसार हरियाणा में अनुसूचित जाति की जनसंख्या 51,13,615 (राज्य की जनसंख्या का 20.17%) थी। अनुसूचित जाति की साक्षरता दर (7 वर्ष और उससे अधिक आयु) 66.85% और लिंगानुपात लगभग 887 महिलाएँ प्रति 1,000 पुरुष था।"
                                    : "In Census 2011, Haryana had 5,113,615 Scheduled Caste residents (20.17% of the state population). The Scheduled Caste literacy rate (age 7+) was 66.85%, and the sex ratio was approximately 887 females per 1,000 males."}
                            </p>
                        </div>
                    </div>

                    {/* Rural-Urban and Occupational Structure Section */}
                    <div className="bg-teal-500/5 rounded-2xl p-6 md:p-8 border-2 border-teal-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-teal-500/30">
                                <Briefcase className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-teal-600">{language === "hindi" ? "ग्रामीण-शहरी जनसंख्या एवं रोजगार संरचना" : "Rural-Urban Population & Occupational Structure"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-card p-4 rounded-lg border">
                                <h3 className="text-lg font-semibold text-teal-600 mb-3">{language === "hindi" ? "ग्रामीण-शहरी जनसंख्या" : "Rural-Urban Population"}</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex justify-between"><span>{language === "hindi" ? "ग्रामीण जनसंख्या" : "Rural Population"}:</span> <span className="font-semibold">1,65,09,359 (65.12%)</span></li>
                                    <li className="flex justify-between"><span>{language === "hindi" ? "शहरी जनसंख्या" : "Urban Population"}:</span> <span className="font-semibold">88,42,103 (34.88%)</span></li>
                                    <li className="flex justify-between"><span>{language === "hindi" ? "ग्रामीण वृद्धि दर" : "Rural Growth Rate"}:</span> <span className="font-semibold">9.85%</span></li>
                                    <li className="flex justify-between"><span>{language === "hindi" ? "शहरी वृद्धि दर" : "Urban Growth Rate"}:</span> <span className="font-semibold">44.59%</span></li>
                                </ul>
                            </div>
                            <div className="bg-card p-4 rounded-lg border">
                                <h3 className="text-lg font-semibold text-teal-600 mb-3">{language === "hindi" ? "रोजगार संरचना" : "Occupational Structure"}</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex justify-between"><span>{language === "hindi" ? "कार्य भागीदारी दर (जनसंख्या का %)" : "Work participation rate (% of population)"}:</span> <span className="font-semibold">35.17%</span></li>
                                    <li className="flex justify-between"><span>{language === "hindi" ? "कृषि कार्य में लगे श्रमिक (% श्रमिक)" : "Agricultural workers (% of workers)"}:</span> <span className="font-semibold">44.96%</span></li>
                                    <li className="flex justify-between"><span>{language === "hindi" ? "घरेलू उद्योग (% श्रमिक)" : "Household industries (% of workers)"}:</span> <span className="font-semibold">2.94%</span></li>
                                    <li className="flex justify-between"><span>{language === "hindi" ? "अन्य श्रमिक (% श्रमिक)" : "Other workers (% of workers)"}:</span> <span className="font-semibold">52.10%</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Birth and Death Rates Section */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Activity className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "जन्म, मृत्यु और शिशु मृत्यु दर (2020)" : "Birth, Death and Infant Mortality Rates (2020)"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg text-center">
                                <Baby className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-blue-600">19.9</div>
                                <p className="text-sm font-medium">{language === "hindi" ? "जन्म दर" : "Birth Rate"}</p>
                                <p className="text-xs text-muted-foreground">(SRS 2020; per 1,000 population)</p>
                            </div>
                            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg text-center">
                                <Activity className="w-6 h-6 text-red-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-red-600">6.1</div>
                                <p className="text-sm font-medium">{language === "hindi" ? "मृत्यु दर" : "Death Rate"}</p>
                                <p className="text-xs text-muted-foreground">(SRS 2020; per 1,000 population)</p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg text-center">
                                <Heart className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-orange-600">28</div>
                                <p className="text-sm font-medium">{language === "hindi" ? "शिशु मृत्यु दर" : "Infant Mortality Rate"}</p>
                                <p className="text-xs text-muted-foreground">(SRS 2020; per 1,000 live births)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा जनसांख्यिकी: तथ्य सारांश" : "Haryana Demography: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">19.90%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "दशकीय वृद्धि (2001–11)" : "Decadal Growth (2001–11)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">2.09%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "भारत की जनसंख्या में हिस्सा (2011)" : "Share of India’s Population (2011)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">75.55%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "साक्षरता दर (2011)" : "Literacy Rate (2011)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">834</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "बाल लिंगानुपात (2011)" : "Child Sex Ratio (2011)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">573</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "घनत्व (व्यक्ति/वर्ग किमी; 2011)" : "Density (persons/km²; 2011)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">87.46%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हिंदू जनसंख्या (2011)" : "Hindu Population (2011)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">20.17%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "अनुसूचित जाति का हिस्सा (2011)" : "SC Share (2011)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">34.88%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "शहरी जनसंख्या का हिस्सा (2011)" : "Urban Population Share (2011)"}</p>
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
                            {language === "hindi" ? "हरियाणा की जनसांख्यिकी के" : "Common"} <span className="text-blue-600">{language === "hindi" ? "बारे में सामान्य प्रश्न" : "Questions About Haryana's Demography"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा की जनसंख्या, जनसंख्या घनत्व, लिंगानुपात, साक्षरता दर और अन्य जनसांख्यिकीय पहलुओं के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's population, population density, sex ratio, literacy rate and other demographic aspects"}
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
                            {language === "hindi" ? "अपने हरियाणा जनसांख्यिकी के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Demography?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700">
                                {language === "hindi" ? "हरियाणा जनसांख्यिकी क्विज़ लें" : "Take Haryana Demography Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/education-health" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "शिक्षा और स्वास्थ्य" : "Education and Health"}
                        </Link>
                        <Link href="/haryana-gk/sports-awards" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: खेल और पुरस्कार" : "Next Chapter: Sports and Awards"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा की जनसांख्यिकी - संपूर्ण संदर्भ" : "Demographic Profile of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की जनसांख्यिकी के बारे में व्यापक जानकारी प्रदान करता है - कुल जनसंख्या, जिलेवार जनसंख्या, जनसंख्या घनत्व, दशकीय वृद्धि दर, लिंगानुपात, बाल लिंगानुपात, साक्षरता दर, धार्मिक जनसंख्या, अनुसूचित जाति की जनसंख्या, ग्रामीण-शहरी जनसंख्या, जन्म और मृत्यु दर, और रोजगार संरचना। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about the demography of Haryana - total population, district-wise population, population density, decadal growth rate, sex ratio, child sex ratio, literacy rate, religious population, scheduled caste population, rural-urban population, birth and death rates, and occupational structure. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "स्रोत: जनगणना 2011; हरियाणा सांख्यिकीय सार 2023–24, तालिकाएँ 3.6, 3.17, 3.20, 3.21, 4.1 और 10.6; अनुसूचित जाति की साक्षरता: लोकसभा प्रश्न 3144 (2016); जन्म/मृत्यु दर SRS 2020" : "Sources: Census 2011; Haryana Statistical Abstract 2023–24, Tables 3.6, 3.17, 3.20, 3.21, 4.1 and 10.6; SC literacy: Lok Sabha Question 3144 (2016); vital rates from SRS 2020"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                        <a href="https://esaharyana.gov.in/document/state-statistical-abstract-of-haryana-2023-24/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                            {language === "hindi" ? "आधिकारिक हरियाणा सांख्यिकीय सार" : "Official Haryana Statistical Abstract"}
                        </a>
                        {" | "}
                        <a href="https://sansad.in/getFile/loksabhaquestions/annex/10/AU3144.pdf?source=pqals" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                            {language === "hindi" ? "अनुसूचित जाति साक्षरता का सरकारी स्रोत" : "Official source for SC literacy"}
                        </a>
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}