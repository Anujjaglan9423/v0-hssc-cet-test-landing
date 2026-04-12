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
            questionHindi: "हरियाणा का दशकीय वृद्धि दर क्या है?",
            questionEnglish: "What is the decadal growth rate of Haryana?",
            answerHindi: "2011 की जनगणना के अनुसार, हरियाणा का दशकीय वृद्धि दर 19.90% है, जो 2001 की जनगणना में 28.43% थी। राज्य का राष्ट्रीय औसत दशकीय वृद्धि दर (17.7%) से 2.2% अधिक है।",
            answerEnglish: "As per 2011 census, the decadal growth rate of Haryana is 19.90%, which was 28.43% in the 2001 census. The state's decadal growth rate is 2.2% higher than the national average (17.7%)."
        },
        {
            questionHindi: "हरियाणा का लिंगानुपात क्या है?",
            questionEnglish: "What is the sex ratio of Haryana?",
            answerHindi: "2011 की जनगणना के अनुसार, हरियाणा का लिंगानुपात 879 है, जो राष्ट्रीय औसत (943) से कम है। राज्य का बाल लिंगानुपात (0-6 वर्ष) 834 है।",
            answerEnglish: "As per 2011 census, the sex ratio of Haryana is 879, which is less than the national average (943). The child sex ratio (0-6 years) of the state is 834."
        },
        {
            questionHindi: "हरियाणा का साक्षरता दर क्या है?",
            questionEnglish: "What is the literacy rate of Haryana?",
            answerHindi: "2011 की जनगणना के अनुसार, हरियाणा का साक्षरता दर 75.60% है, जो राष्ट्रीय औसत (74%) से 1.6% अधिक है। पुरुष साक्षरता दर 84.10% और महिला साक्षरता दर 65.90% है।",
            answerEnglish: "As per 2011 census, the literacy rate of Haryana is 75.60%, which is 1.6% higher than the national average (74%). Male literacy rate is 84.10% and female literacy rate is 65.90%."
        },
        {
            questionHindi: "हरियाणा में सर्वाधिक और न्यूनतम जनसंख्या वाले जिले कौन से हैं?",
            questionEnglish: "Which districts have the highest and lowest population in Haryana?",
            answerHindi: "फरीदाबाद (18,09,733) हरियाणा का सर्वाधिक जनसंख्या वाला जिला है, जबकि पंचकूला (5,61,293) सबसे कम जनसंख्या वाला जिला है।",
            answerEnglish: "Faridabad (18,09,733) is the district with the highest population in Haryana, while Panchkula (5,61,293) has the lowest population."
        },
        {
            questionHindi: "हरियाणा में सर्वाधिक और न्यूनतम लिंगानुपात वाले जिले कौन से हैं?",
            questionEnglish: "Which districts have the highest and lowest sex ratio in Haryana?",
            answerHindi: "नूंह (907) हरियाणा का सर्वाधिक लिंगानुपात वाला जिला है, जबकि गुरुग्राम (854) सबसे कम लिंगानुपात वाला जिला है।",
            answerEnglish: "Nuh (907) is the district with the highest sex ratio in Haryana, while Gurugram (854) has the lowest sex ratio."
        },
        {
            questionHindi: "हरियाणा में सर्वाधिक और न्यूनतम साक्षरता वाले जिले कौन से हैं?",
            questionEnglish: "Which districts have the highest and lowest literacy rate in Haryana?",
            answerHindi: "गुरुग्राम (84.70%) हरियाणा का सर्वाधिक साक्षरता दर वाला जिला है, जबकि नूंह (54.08%) सबसे कम साक्षरता दर वाला जिला है।",
            answerEnglish: "Gurugram (84.70%) is the district with the highest literacy rate in Haryana, while Nuh (54.08%) has the lowest literacy rate."
        },
        {
            questionHindi: "हरियाणा में सबसे अधिक अनुसूचित जाति की जनसंख्या किस जिले में है?",
            questionEnglish: "Which district has the highest Scheduled Caste population in Haryana?",
            answerHindi: "हिसार जिले में अनुसूचित जाति की जनसंख्या सबसे अधिक (4,08,785) है, जबकि नूंह में सबसे कम (75,251) है।",
            answerEnglish: "Hisar district has the highest Scheduled Caste population (4,08,785), while Nuh has the lowest (75,251)."
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
        { religion: "Buddhism", total: "7,514", percentage: "0.02%", male: "4,099", female: "3,415" },
        { religion: "Others", total: "44,760", percentage: "0.18%", male: "22,535", female: "22,225" }
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
        { rank: 5, district: "Faridabad", scPopulation: "3,32,237" }
    ];

    const bottom5SCPopulation = [
        { rank: 1, district: "Nuh", scPopulation: "75,251" },
        { rank: 2, district: "Panchkula", scPopulation: "1,01,830" },
        { rank: 3, district: "Mahendragarh", scPopulation: "1,56,314" },
        { rank: 4, district: "Jhajjar", scPopulation: "1,70,448" },
        { rank: 5, district: "Ambala", scPopulation: "1,78,704" }
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
                        {language === "hindi" ? "जनसांख्यिकीय प्रोफाइल - हरियाणा सरकार" : "Demographic Profile - Government of Haryana"}
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
                                ? "हरियाणा राज्य की पहली जनगणना वर्ष 1971 में हुई थी। 2011 की जनगणना राज्य के लिए पाँचवीं जनगणना थी। 2011 की जनगणना के अनुसार, राज्य की कुल जनसंख्या 2,53,51,462 है जिसमें पुरुषों की संख्या 1,34,94,734 और महिलाओं की संख्या 1,18,56,728 है। जनसंख्या के मामले में हरियाणा भारत में 18वें स्थान पर है।"
                                : "The first census of the state of Haryana was done in the year 1971. The 2011 census was the fifth census for the state. According to the 2011 census, the total population of the state is 2,53,51,462 in which the number of males is 1,34,94,734 and the number of females is 1,18,56,728. Haryana is at the 18th rank in India in terms of population."}
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
                            <div className="text-2xl font-bold text-blue-600">75.60%</div>
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
                                    ? "पुरुष साक्षरता दर 84.10% और महिला साक्षरता दर 65.90% है। रेवाड़ी (91.44%) में सर्वाधिक पुरुष साक्षरता और गुरुग्राम (77.98%) में सर्वाधिक महिला साक्षरता है।"
                                    : "Male literacy rate is 84.10% and female literacy rate is 65.90%. Rewari (91.44%) has the highest male literacy and Gurugram (77.98%) has the highest female literacy."}
                            </p>
                        </div>
                    </div>

                    {/* District-wise Population Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "जिलेवार जनसंख्या (2011)" : "District-wise Population (2011)"}</h2>
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
                                    ? "जैन समुदाय (94.2%) की साक्षरता दर सर्वाधिक है जबकि मुस्लिम समुदाय (40%) की सबसे कम है। ईसाई समुदाय (918) का लिंगानुपात सर्वाधिक है।"
                                    : "The Jain community (94.2%) has the highest literacy rate while the Muslim community (40%) has the lowest. The Christian community (918) has the highest sex ratio."}
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
                                    ? "2011 की जनगणना के अनुसार, हरियाणा में अनुसूचित जाति की कुल जनसंख्या 51,13,615 (20.02%) है। एससी का साक्षरता दर 66.85% और लिंगानुपात 887 है।"
                                    : "According to 2011 census, the total SC population in Haryana is 51,13,615 (20.02%). The literacy rate of SC is 66.85% and sex ratio is 887."}
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
                                    <li className="flex justify-between"><span>{language === "hindi" ? "कुल कार्यबल" : "Total Work Force"}:</span> <span className="font-semibold">35.17%</span></li>
                                    <li className="flex justify-between"><span>{language === "hindi" ? "कृषि से संबद्ध" : "Related to Agriculture"}:</span> <span className="font-semibold">44.96%</span></li>
                                    <li className="flex justify-between"><span>{language === "hindi" ? "घरेलू उद्योग" : "Domestic Industries"}:</span> <span className="font-semibold">2.94%</span></li>
                                    <li className="flex justify-between"><span>{language === "hindi" ? "अन्य क्षेत्र" : "Other Sectors"}:</span> <span className="font-semibold">52.10%</span></li>
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
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "जन्म और मृत्यु दर" : "Birth and Death Rates"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg text-center">
                                <Baby className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-blue-600">20.5</div>
                                <p className="text-sm font-medium">{language === "hindi" ? "जन्म दर" : "Birth Rate"}</p>
                                <p className="text-xs text-muted-foreground">(per thousand)</p>
                            </div>
                            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg text-center">
                                <Activity className="w-6 h-6 text-red-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-red-600">5.8</div>
                                <p className="text-sm font-medium">{language === "hindi" ? "मृत्यु दर" : "Death Rate"}</p>
                                <p className="text-xs text-muted-foreground">(per thousand)</p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg text-center">
                                <Heart className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-orange-600">30</div>
                                <p className="text-sm font-medium">{language === "hindi" ? "शिशु मृत्यु दर" : "Child Mortality Rate"}</p>
                                <p className="text-xs text-muted-foreground">(per thousand)</p>
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
                            <div className="text-3xl font-bold text-blue-600 mb-2">18वाँ</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "जनसंख्या में रैंक" : "Population Rank"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">2.09%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "देश की कुल जनसंख्या में हिस्सा" : "Share in National Population"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">15वाँ</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "साक्षरता में रैंक" : "Literacy Rank"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">35वाँ</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "बाल लिंगानुपात में रैंक" : "Child Sex Ratio Rank"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">11वाँ</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "जनसंख्या घनत्व में रैंक" : "Population Density Rank"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">87.46%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हिंदू जनसंख्या" : "Hindu Population"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">20.02%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "अनुसूचित जाति जनसंख्या" : "SC Population"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">34.88%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "शहरी जनसंख्या" : "Urban Population"}</p>
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
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी भारत सरकार के जनगणना 2011 के आधिकारिक प्रकाशनों से स्रोतित" : "Information sourced from official Government of India Census 2011 publications"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}