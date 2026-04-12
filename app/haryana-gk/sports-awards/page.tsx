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
    Target,
    Dumbbell,
    Bike,
    Mic,
    Award,
    Crown,
    Star,
    Shield,
    Activity,
    Zap,
    GraduationCap,
    Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaSportsPage() {
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
            questionHindi: "हरियाणा का सर्वोच्च खेल पुरस्कार कौन सा है?",
            questionEnglish: "What is the highest sports award of Haryana?",
            answerHindi: "भीम पुरस्कार हरियाणा राज्य का सर्वोच्च खेल पुरस्कार है। यह पुरस्कार वर्ष 2001 में स्थापित किया गया था। पहला भीम पुरस्कार गीता जुत्शी को दिया गया था।",
            answerEnglish: "Bhim Award is the highest sports award of Haryana state. This award was instituted in the year 2001. The first Bhim Award was given to Geeta Zutshi."
        },
        {
            questionHindi: "हरियाणा का 'मिनी क्यूबा' किस जिले को कहा जाता है?",
            questionEnglish: "Which district of Haryana is known as 'Mini Cuba'?",
            answerHindi: "भिवानी जिले को 'मिनी क्यूबा' के नाम से जाना जाता है क्योंकि यह मुक्केबाजी का प्रमुख केंद्र है। भिवानी जिले को 'पॉवर हाउस ऑफ बॉक्सिंग' भी कहा जाता है।",
            answerEnglish: "Bhiwani district is known as 'Mini Cuba' because it is a major center for boxing. Bhiwani district is also known as 'Power House of Boxing'."
        },
        {
            questionHindi: "हरियाणा के पहले ओलंपिक पदक विजेता मुक्केबाज कौन हैं?",
            questionEnglish: "Who is the first Olympic medal winning boxer from Haryana?",
            answerHindi: "विजेंदर सिंह बेनीवाल हरियाणा के पहले ओलंपिक पदक विजेता मुक्केबाज हैं। उन्होंने 2008 बीजिंग ओलंपिक में कांस्य पदक जीता था।",
            answerEnglish: "Vijender Singh Beniwal is the first Olympic medal winning boxer from Haryana. He won a Bronze medal in the 2008 Beijing Olympics."
        },
        {
            questionHindi: "हरियाणा का एकमात्र परमवीर चक्र विजेता कौन है?",
            questionEnglish: "Who is the only Param Vir Chakra awardee from Haryana?",
            answerHindi: "मेजर होशियार सिंह (बाद में ब्रिगेडियर) हरियाणा के एकमात्र परमवीर चक्र विजेता हैं। उनका जन्म सोनीपत जिले के सिसाना गाँव में हुआ था।",
            answerEnglish: "Major Hoshiar Singh (later Brigadier) is the only Param Vir Chakra awardee from Haryana. He was born in Sisana village of Sonipat district."
        },
        {
            questionHindi: "ओलंपिक पदक जीतने वाली हरियाणा की पहली महिला पहलवान कौन हैं?",
            questionEnglish: "Who is the first female wrestler from Haryana to win an Olympic medal?",
            answerHindi: "साक्षी मलिक (रोहतक) ओलंपिक पदक जीतने वाली हरियाणा की पहली महिला पहलवान हैं। उन्होंने 2016 रियो ओलंपिक में कांस्य पदक जीता था।",
            answerEnglish: "Sakshi Malik (Rohtak) is the first female wrestler from Haryana to win an Olympic medal. She won a Bronze medal in the 2016 Rio Olympics."
        },
        {
            questionHindi: "हरियाणा की पहली महिला माउंट एवरेस्ट विजेता कौन है?",
            questionEnglish: "Who is the first woman from Haryana to climb Mount Everest?",
            answerHindi: "संतोष यादव हरियाणा की पहली महिला माउंट एवरेस्ट विजेता हैं। शिवांगी पाठक (हिसार) सबसे कम उम्र में एवरेस्ट पर चढ़ने वाली भारतीय महिला हैं।",
            answerEnglish: "Santosh Yadav is the first woman from Haryana to climb Mount Everest. Shivangi Pathak (Hisar) is the youngest Indian woman to climb Mount Everest."
        },
        {
            questionHindi: "हरियाणा राज्य खेल नीति किस वर्ष लागू की गई थी?",
            questionEnglish: "In which year was the Haryana State Sports Policy implemented?",
            answerHindi: "हरियाणा राज्य खेल नीति 2015 में लागू की गई थी। इस नीति के तहत ओलंपिक स्वर्ण पदक विजेता को 6 करोड़ रुपये का नकद पुरस्कार दिया जाता है।",
            answerEnglish: "The Haryana State Sports Policy was implemented in 2015. Under this policy, an Olympic Gold medal winner gets a cash prize of 6 crore rupees."
        },
        {
            questionHindi: "हरियाणा के प्रसिद्ध क्रिकेटर 'हरियाणा हरिकेन' के नाम से कौन जाने जाते हैं?",
            questionEnglish: "Which famous cricketer from Haryana is known as 'Haryana Hurricane'?",
            answerHindi: "कपिल देव को 'हरियाणा हरिकेन' के नाम से जाना जाता है। वह 1983 में भारत को विश्व कप जिताने वाले कप्तान थे।",
            answerEnglish: "Kapil Dev is known as 'Haryana Hurricane'. He was the captain who led India to win the World Cup in 1983."
        }
    ];

    // Famous Sports Personalities
    const athletes = [
        { name: "Bhim Singh", sport: "High Jump", achievements: "Gold in 1968 Asian Games (2.05m record), Arjuna Award 1967" },
        { name: "Bahadur Singh", sport: "Shot Put", achievements: "Gold in 1978 & 1982 Asian Games, Arjuna, Padma Shri, Dronacharya" },
        { name: "Chand Ram", sport: "Road Walk", achievements: "Gold in 1982 Asian Games (world record), Gold in 1983 Asian Track Meet" },
        { name: "Deepa Malik", sport: "Para Athletics", achievements: "First Indian woman Paralympic medalist (Silver 2016), Padma Shri, Khel Ratna 2019" },
        { name: "Seema Punia Antil", sport: "Discus Throw", achievements: "Gold in 2014 Asian Games, Silver in 2006/2014/2018 CWG, Arjuna 2018" },
        { name: "Manjit Singh", sport: "Middle-distance", achievements: "Gold in 800m at 2018 Asian Games (Jakarta)" },
        { name: "Neeraj Chopra", sport: "Javelin Throw", achievements: "Gold in 2018 CWG & Asian Games, Khel Ratna 2018" },
        { name: "Krishna Poonia", sport: "Discus Throw", achievements: "Gold in 2010 Commonwealth Games" },
        { name: "Geeta Zutshi", sport: "Middle-distance", achievements: "First Bhim Award recipient, famous athlete" }
    ];

    const boxers = [
        { name: "Vijender Singh Beniwal", achievements: "First Indian professional boxer, Bronze in 2008 Olympics, Gold in 2010 Asian Games, Arjuna 2006, Khel Ratna 2009" },
        { name: "Akhil Kumar", achievements: "Gold in 2006 Commonwealth Games, Bronze in 2007 Asian Championship, Arjuna 2005" },
        { name: "Manoj Kumar", achievements: "Gold in 2010 Commonwealth Games, Bronze in 2007 & 2013 Asian Championships, Arjuna 2014" },
        { name: "Vikas Krishan Yadav", achievements: "Gold in 2010 Asian Games & 2018 CWG, Bronze in 2011 World Championship, Arjuna 2012" },
        { name: "Gaurav Solanki", achievements: "Gold in 2018 Commonwealth Games (youngest Indian boxer to win Gold)" },
        { name: "Jitender Kumar", achievements: "Bronze in 2006 Commonwealth Games, Gold in 2008 National Games" },
        { name: "Sunil Kumar", achievements: "Winner of Istanbul Under-17 World Championship 2006" }
    ];

    const cricketers = [
        { name: "Kapil Dev", achievements: "Haryana Hurricane, 1983 World Cup winning captain, Arjuna, Padma Shri, Padma Bhushan, Wisden Indian Cricketer of Century" },
        { name: "Mansoor Ali Khan Pataudi", achievements: "Tiger Pataudi, India captain from 1962, Arjuna 1964, Padma Shri 1967" },
        { name: "Virendra Sehwag", achievements: "Sultan of Multan, first Indian to score triple century, Arjuna 2002" },
        { name: "Yuzvendra Chahal", achievements: "Fastest Indian bowler to take 50 T20 wickets, plays for RCB" },
        { name: "Joginder Sharma", achievements: "Part of 2007 T20 World Cup winning team, Haryana captain" },
        { name: "Ajay Ratra", achievements: "Former Indian wicket-keeper" }
    ];

    const hockeyPlayers = [
        { name: "Mamta Kharab", achievements: "Golden Girl, former Captain, Gold in 2002 CWG & 2004 Asia Cup, Arjuna 2003" },
        { name: "Sandeep Singh", achievements: "Former Captain, penalty corner specialist, Gold in Sultan Azlan Shah Cup 2009, Arjuna 2010, Khel Ratna 2017" },
        { name: "Sardar Singh", achievements: "Former Captain, Bronze in 2006 Sultan Azlan Shah, Silver in 2010 & 2014 CWG, Arjuna 2012, Padma Shri 2015" },
        { name: "Rani Rampal", achievements: "Indian Women's Hockey Team Captain, flag bearer at 2018 Asian Games closing ceremony" }
    ];

    const wrestlers = [
        { name: "Lila Ram Sangwan", achievements: "First wrestler to win Gold in Commonwealth Games (1958)" },
        { name: "Sajjan Singh", achievements: "Rustam-e-Hind, Silver in Jakarta Asian Games, represented Rome Olympics 1960" },
        { name: "Pabaluan Udaychand", achievements: "India's first Arjuna Award in wrestling (1962), Bronze at World Championship 1961" },
        { name: "Master Chandgi Ram", achievements: "Gold at 1970 Asian Games, Arjuna 1969, Padma Shri 1971, Bharat Kesari & Hind Kesari twice" },
        { name: "Yogeshwar Dutt", achievements: "Bronze at 2012 Olympics, Gold in 2003/2005/2007/2010/2014 CWG, Khel Ratna 2012, Padma Shri 2013" },
        { name: "Geetika Jakhar", achievements: "Silver at 2006 Asian Games, First woman wrestler with Arjuna Award, Bhim Award" },
        { name: "Geeta Phogat", achievements: "First Indian female wrestler to qualify for Olympics, Gold at 2010 CWG, Film 'Dangal' based on her life" },
        { name: "Babita Phogat", achievements: "Gold at 2014 CWG, Silver at 2018 CWG, Bronze at 2012 World Championship, Arjuna 2015" },
        { name: "Sakshi Malik", achievements: "First Indian female wrestler to win Olympic medal (Bronze 2016), Khel Ratna 2016, Padma Shri 2017" },
        { name: "Bajrang Punia", achievements: "Gold at 2018 Asian Games & CWG, World No.1 in 65kg (2018), Arjuna 2015, Padma Shri 2019, Khel Ratna 2019" },
        { name: "Vinesh Phogat", achievements: "Gold at 2014 & 2018 CWG, Gold at 2018 Asian Games (first Indian woman wrestler), Arjuna 2016" },
        { name: "Sumit Malik", achievements: "Gold at 2018 Commonwealth Games, Silver at 2017 Asian Championships" }
    ];

    const shooters = [
        { name: "Gagan Narang", achievements: "4 Gold at 2010 CWG, Bronze at 2012 Olympics, Khel Ratna 2011" },
        { name: "Manu Bhaker", achievements: "Gold at 2018 CWG & Youth Olympics, Gold at 2018 ISSF World Championship, youngest woman to win ISSF World Cup Gold" },
        { name: "Ankur Mittal", achievements: "Gold at World Championship, Silver at 2017 ISSF World Cup, Bronze at 2019 CWG, Arjuna Award" },
        { name: "Anish Bhanwala", achievements: "Youngest medalist in Commonwealth Games (Gold in 25m rapid fire pistol 2018), President's Child Award" }
    ];

    const otherSports = [
        { name: "Karnam Malleswari", sport: "Weightlifting", achievements: "Bronze at 2000 Olympics (first Indian woman Olympic medalist), Silver at 1998 Asian Games, Khel Ratna 1999, Padma Shri 1999" },
        { name: "Saina Nehwal", sport: "Badminton", achievements: "Gold at 2010 & 2018 CWG, Bronze at 2012 Olympics, Silver at 2015 World Championship, Arjuna 2009, Khel Ratna 2010, Padma Bhushan 2016" },
        { name: "Shivangi Pathak", sport: "Mountaineering", achievements: "Youngest Indian woman to climb Mount Everest (16th May 2018), also climbed Mt Kilimanjaro & Mt Elbrus" },
        { name: "Santosh Yadav", sport: "Mountaineering", achievements: "First woman from Haryana to climb Mount Everest" },
        { name: "Abhinav Lohan", sport: "Golf", achievements: "Silver medal (Golf Team) at 2010 Guangzhou Asian Games" }
    ];

    // Sports Organizations
    const sportsOrganizations = [
        { name: "Haryana Chess Association", year: "1983", details: "Affiliated to All India Chess Federation and Haryana Olympic Association" },
        { name: "Bhinavi Boxing Club", year: "2003", details: "Founded by Jagadish Singh, known as Powerhouse of Indian Boxing. Produced Vijender Singh, Vikas Krishan, Jitendra Kumar" },
        { name: "The Hockey Haryana Association", year: "2009", details: "Affiliated to HOA and Hockey India, has 6 teams (Men/Women Senior/Junior/Sub-Junior)" },
        { name: "National Aero Sports Centre", year: "2010", details: "India's first aero sports centre, located at Bachhod airstrip near Narnaul, named Rajiv Gandhi Aero Sports Centre" },
        { name: "Haryana Sports Authority", year: "2016", details: "Headquartered in Panchkula, Chairman is Chief Minister, registered under Haryana Registration and Regulation of Societies Act-2012" }
    ];

    // Sports Stadiums
    const stadiums = [
        { name: "Nahar Singh Stadium", location: "Faridabad", year: "1981", details: "International Cricket Stadium, previously Mayur Stadium, seating capacity 25000, first ODI between India and West Indies" },
        { name: "Nehru Stadium", location: "Gurugram", year: "1987", details: "Also known as Dronacharya Stadium, home ground for Haryana Cricket Team" },
        { name: "Chaudhary Bansilal Cricket Stadium", location: "Rohtak", year: "2006", details: "Sachin Tendulkar played his last Ranji Trophy match here in October 2013" },
        { name: "Motilal Nehru Sports School", location: "Rai, Sonipat", year: "1973", details: "Only sports school in Haryana, spread over 300 acres, world class training in tennis, basketball, athletics, swimming" },
        { name: "Rajiv Gandhi Sports Complex", location: "Rohtak", year: "2012", details: "Multi-purpose stadium for cricket, football, hockey, indoor games like basketball, badminton, gymnastics" }
    ];

    // SAI Training Centers
    const saiCenters = [
        { name: "SAI Training Center & Center of Excellence", location: "Sonipat", details: "Also known as Chaudhary Devi Lal North Regional Center, training for kabaddi, football, judo, hockey, basketball, wrestling" },
        { name: "SAI Training & Excellence Center", location: "Hisar", details: "Major center for boxing training in India, also athletics, handball, hockey, wrestling" },
        { name: "SAI Training Center", location: "Kurukshetra", details: "Training in judo, cycling, weightlifting, hockey, athletics" },
        { name: "SAI Training Center", location: "Bhiwani", details: "Under Chaudhary Devi Lal North Regional Center, Sonipat" },
        { name: "SAI National Boxing Academy", location: "Rohtak", year: "2017", details: "Country's first National Boxing Academy, capacity of 120 trainees (60 male, 60 female)" }
    ];

    // Awards
    const stateAwards = [
        { name: "Bhim Award", amount: "₹5 lakh", details: "Highest sports award of Haryana (2001), equivalent to Arjuna Award, free travel in Haryana buses for lifetime. First recipient: Geeta Zutshi" },
        { name: "Maharana Pratap Award", amount: "₹2 lakh", details: "Given to players who promoted sports throughout their life" },
        { name: "Dr. Radhakrishna Award", amount: "₹1 lakh", details: "Given to PTI/DPI teachers from 2015" },
        { name: "Eklavya Award", amount: "₹1 lakh", details: "Given to 5 junior players every year" },
        { name: "Guru Vashistha Award", amount: "₹2 lakh", details: "Given to sports coaches" },
        { name: "Rani Laxmibai Award", amount: "₹2 lakh", details: "Given to women for contribution in life-long sports" },
        { name: "Vikramaditya Award", amount: "₹2 lakh", details: "Given to referee, judge and umpire" }
    ];

    const womensAwards = [
        { name: "Indira Gandhi Mahila Shakti Puraskar", amount: "₹1.5 lakh", details: "For outstanding work for society and rehabilitation of women and children (2010)" },
        { name: "Kalpana Chawla Shauray Award", amount: "₹51,000", details: "For women showing exemplary courage and meritorious service (2010)" },
        { name: "Bahin Shanno Devi Panchayati Raj Award", amount: "₹1 lakh", details: "For women panchayat heads for women empowerment, female literacy, health (2010)" }
    ];

    // Gallantry Awards
    const gallantryAwards = [
        { name: "Param Vir Chakra", awardee: "Major Hoshiar Singh", details: "Only Param Vir Chakra awardee from Haryana (1972), born in Sisana village, Sonipat district" },
        { name: "Vir Chakra", awardees: "Roop Chand (1948), Subedar Shivochand Ram (1945), Havildar Lakhmi Chand (1967 posthumously)" }
    ];

    // Haryana Performance in International Events
    const internationalEvents = [
        { event: "London Olympics 2012", medals: "4 medals by Haryana - Sushil Kumar (Silver), Gagan Narang (Bronze), Saina Nehwal (Bronze), Yogeshwar Dutt (Bronze)" },
        { event: "20th Commonwealth Games 2014 (Glasgow)", medals: "15 medals by Haryana - 4 Gold, 10 Silver, 1 Bronze. First Gold: Lila Ram (1958)" },
        { event: "Rio Olympics 2016", medals: "22 players from Haryana, Sakshi Malik won Bronze medal (first Indian female wrestler Olympic medalist)" },
        { event: "21st Commonwealth Games 2018 (Gold Coast)", medals: "22 medals by Haryana - 9 Gold, 6 Silver, 7 Bronze" },
        { event: "18th Asian Games 2018 (Jakarta)", medals: "18 medals by Haryana - 6 Gold, 5 Silver, 7 Bronze. Vinesh Phogat first Indian woman wrestler to win Gold" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 dark:from-orange-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Language Toggle Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium backdrop-blur-sm">
                        <Trophy className="w-4 h-4" />
                        {language === "hindi" ? "खेल और पुरस्कार - हरियाणा सरकार" : "Sports and Awards - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा में" : "Sports and"} <span className="text-orange-600 dark:text-orange-400">{language === "hindi" ? "खेल और पुरस्कार" : "Awards in Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के प्रमुख खेल, खिलाड़ी, खेल संगठन, स्टेडियम, राज्य पुरस्कार, शौर्य पुरस्कार और अंतर्राष्ट्रीय प्रतियोगिताओं में हरियाणा के प्रदर्शन की संपूर्ण जानकारी"
                            : "Complete information about major sports, players, sports organizations, stadiums, state awards, gallantry awards and Haryana's performance in international competitions"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Trophy className="w-4 h-4 text-orange-600" />
                            <span>{language === "hindi" ? "खिलाड़ी" : "Players"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Medal className="w-4 h-4 text-orange-600" />
                            <span>{language === "hindi" ? "पुरस्कार" : "Awards"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Target className="w-4 h-4 text-orange-600" />
                            <span>{language === "hindi" ? "खेल संगठन" : "Organizations"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Crown className="w-4 h-4 text-orange-600" />
                            <span>{language === "hindi" ? "शौर्य पुरस्कार" : "Gallantry Awards"}</span>
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
                            <div className="p-2 rounded-xl bg-orange-500/20">
                                <History className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "परिचय" : "Introduction"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "खेल मनुष्य के समग्र विकास में महत्वपूर्ण भूमिका निभाते हैं। खेल लोगों के बीच स्वस्थ प्रतिस्पर्धा की भावना विकसित करने और उनके बीच अच्छे संबंध बनाने में मदद करते हैं। हरियाणा राज्य के प्रमुख ग्रामीण खेल कुश्ती, कबड्डी, पिट्टू, गड्डा, घोड़ी, चुनिया घाटी, सुलिया-डंडा, फोरा जंपिंग, खुलिया, आंख-मिचोली, झिरका-झांकी आदि हैं।"
                                : "Sports have played an important role in the overall development of humans. Sports help in developing a sense of healthy competition among people and making good relationship between them. The major rural sports of Haryana state are wrestling, kabaddi, pittu, gadda, ghori, chunia ghati, sulia-danda, fora jumping, khuliya, aankh-micholi, jhirka-jhanki, etc."}
                        </p>
                    </div>

                    {/* Athletes Section */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/30">
                                <Activity className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "प्रमुख एथलीट" : "Famous Athletes"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {athletes.map((person, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-blue-600">{person.name}</h3>
                                    <p className="text-sm text-muted-foreground">{person.sport}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{person.achievements}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Boxers Section */}
                    <div className="bg-red-500/5 rounded-2xl p-6 md:p-8 border-2 border-red-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-red-500/30">
                                <Target className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-600">{language === "hindi" ? "प्रमुख मुक्केबाज" : "Famous Boxers"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {boxers.map((person, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-red-600">{person.name}</h3>
                                    <p className="text-sm text-muted-foreground">{person.achievements}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 bg-card p-3 rounded-lg border">
                            <p className="text-sm font-medium text-red-600">{language === "hindi" ? "विशेष तथ्य" : "Special Fact"}: <span className="text-muted-foreground">{language === "hindi" ? "भिवानी जिले को 'पॉवर हाउस ऑफ बॉक्सिंग' और 'मिनी क्यूबा' के नाम से जाना जाता है।" : "Bhiwani district is known as 'Power House of Boxing' and 'Mini Cuba'."}</span></p>
                        </div>
                    </div>

                    {/* Cricketers Section */}
                    <div className="bg-green-500/5 rounded-2xl p-6 md:p-8 border-2 border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/30">
                                <Crown className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{language === "hindi" ? "प्रमुख क्रिकेटर" : "Famous Cricketers"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {cricketers.map((person, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-green-600">{person.name}</h3>
                                    <p className="text-sm text-muted-foreground">{person.achievements}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hockey Players Section */}
                    <div className="bg-cyan-500/5 rounded-2xl p-6 md:p-8 border-2 border-cyan-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-cyan-500/30">
                                <Zap className="w-5 h-5 text-cyan-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-cyan-600">{language === "hindi" ? "प्रमुख हॉकी खिलाड़ी" : "Famous Hockey Players"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {hockeyPlayers.map((person, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-cyan-600">{person.name}</h3>
                                    <p className="text-sm text-muted-foreground">{person.achievements}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wrestlers Section */}
                    <div className="bg-amber-500/5 rounded-2xl p-6 md:p-8 border-2 border-amber-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-500/30">
                                <Trophy className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-600">{language === "hindi" ? "प्रमुख पहलवान" : "Famous Wrestlers"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {wrestlers.map((person, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-amber-600">{person.name}</h3>
                                    <p className="text-sm text-muted-foreground">{person.achievements}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shooters Section */}
                    <div className="bg-purple-500/5 rounded-2xl p-6 md:p-8 border-2 border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-500/30">
                                <Target className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-600">{language === "hindi" ? "प्रमुख निशानेबाज" : "Famous Shooters"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {shooters.map((person, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-purple-600">{person.name}</h3>
                                    <p className="text-sm text-muted-foreground">{person.achievements}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Sports Personalities */}
                    <div className="bg-teal-500/5 rounded-2xl p-6 md:p-8 border-2 border-teal-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-teal-500/30">
                                <Dumbbell className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-teal-600">{language === "hindi" ? "अन्य खेल विभूतियाँ" : "Other Sports Personalities"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {otherSports.map((person, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-teal-600">{person.name}</h3>
                                    <p className="text-sm text-muted-foreground">{person.sport}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{person.achievements}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sports Organizations Section */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Building2 className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "प्रमुख खेल संगठन" : "Famous Sports Organizations"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {sportsOrganizations.map((org, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-primary">{org.name}</h3>
                                    <p className="text-sm text-muted-foreground">{org.year && `स्थापना: ${org.year}`}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{org.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sports Stadiums Section */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Landmark className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "प्रमुख खेल स्टेडियम" : "Major Sports Stadiums"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {stadiums.map((stadium, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-primary">{stadium.name}</h3>
                                    <p className="text-sm text-muted-foreground">{stadium.location} | {stadium.year}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{stadium.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SAI Training Centers Section */}
                    <div className="bg-indigo-500/5 rounded-2xl p-6 md:p-8 border-2 border-indigo-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-500/30">
                                <GraduationCap className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-indigo-600">{language === "hindi" ? "SAI प्रशिक्षण केंद्र" : "SAI Training Centers"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {saiCenters.map((center, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-indigo-600">{center.name}</h3>
                                    <p className="text-sm text-muted-foreground">{center.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{center.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* State Awards Section */}
                    <div className="bg-yellow-500/5 rounded-2xl p-6 md:p-8 border-2 border-yellow-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-yellow-500/30">
                                <Award className="w-5 h-5 text-yellow-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-yellow-600">{language === "hindi" ? "राज्य पुरस्कार" : "State Awards"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {stateAwards.map((award, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-yellow-600">{award.name}</h3>
                                    <p className="text-sm text-muted-foreground">पुरस्कार राशि: {award.amount}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{award.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Women's Awards Section */}
                    <div className="bg-pink-500/5 rounded-2xl p-6 md:p-8 border-2 border-pink-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-pink-500/30">
                                <Heart className="w-5 h-5 text-pink-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-pink-600">{language === "hindi" ? "महिला पुरस्कार" : "Women's Awards"}</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {womensAwards.map((award, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-pink-600">{award.name}</h3>
                                    <p className="text-sm text-muted-foreground">पुरस्कार राशि: {award.amount}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{award.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gallantry Awards Section */}
                    <div className="bg-slate-500/5 rounded-2xl p-6 md:p-8 border-2 border-slate-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-slate-500/30">
                                <Shield className="w-5 h-5 text-slate-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-600">{language === "hindi" ? "शौर्य पुरस्कार" : "Gallantry Awards"}</h2>
                        </div>
                        {gallantryAwards.map((award, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 border mb-4">
                                <h3 className="text-lg font-semibold text-slate-600">{award.name}</h3>
                                <p className="text-sm text-muted-foreground">{award.details}</p>
                            </div>
                        ))}
                    </div>

                    {/* International Events Performance Section */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Medal className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "अंतर्राष्ट्रीय प्रतियोगिताओं में हरियाणा" : "Haryana in International Competitions"}</h2>
                        </div>
                        <div className="space-y-4">
                            {internationalEvents.map((event, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-primary">{event.event}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{event.medals}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sports Policy Highlights */}
                    <div className="bg-emerald-500/5 rounded-2xl p-6 md:p-8 border-2 border-emerald-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-emerald-500/30">
                                <BookOpen className="w-5 h-5 text-emerald-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-emerald-600">{language === "hindi" ? "हरियाणा राज्य खेल नीति 2015" : "Haryana State Sports Policy 2015"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="text-lg font-semibold text-emerald-600">{language === "hindi" ? "पुरस्कार राशि" : "Cash Prize"}</h3>
                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                    <li>Olympics Gold: ₹6 crore | Silver: ₹4 crore | Bronze: ₹2.5 crore</li>
                                    <li>Asian/Para Asian Games Gold: ₹3 crore | Silver: ₹1.5 crore | Bronze: ₹75 lakh</li>
                                    <li>Commonwealth Games Gold: ₹1.5 crore | Silver: ₹75 lakh | Bronze: ₹50 lakh</li>
                                    <li>World Cup Gold: ₹25 lakh | Silver: ₹20 lakh | Bronze: ₹15 lakh</li>
                                    <li>National Games Gold: ₹3 lakh | Silver: ₹2 lakh | Bronze: ₹1 lakh</li>
                                </ul>
                            </div>
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="text-lg font-semibold text-emerald-600">{language === "hindi" ? "मुख्य उद्देश्य" : "Main Objectives"}</h3>
                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                    <li>Equal opportunities for all citizens</li>
                                    <li>High quality sports infrastructure</li>
                                    <li>Support for national/international participation</li>
                                    <li>Adventure sports promotion</li>
                                    <li>3% reservation in Group C & D jobs for international medal winners</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा खेल: तथ्य सारांश" : "Haryana Sports: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "परमवीर चक्र विजेता" : "Param Vir Chakra Awardee"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">22</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "2018 राष्ट्रमंडल खेलों में पदक" : "Medals in 2018 CWG"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "2012 ओलंपिक में पदक" : "Medals in 2012 Olympics"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">2015</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "खेल नीति लागू" : "Sports Policy Implemented"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "करोड़ (ओलंपिक स्वर्ण)" : "Crore (Olympic Gold)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">2001</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "भीम पुरस्कार की स्थापना" : "Bhim Award Established"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "SAI प्रशिक्षण केंद्र" : "SAI Training Centers"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">3%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सरकारी नौकरियों में आरक्षण" : "Reservation in Govt Jobs"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा के खेल और पुरस्कारों के" : "Common"} <span className="text-orange-600">{language === "hindi" ? "बारे में सामान्य प्रश्न" : "Questions About Haryana's Sports and Awards"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के प्रमुख खिलाड़ियों, पुरस्कारों, खेल संगठनों और अंतर्राष्ट्रीय उपलब्धियों के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's major players, awards, sports organizations and international achievements"}
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
                                        className={`w-5 h-5 text-orange-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
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
                            {language === "hindi" ? "अपने हरियाणा खेल ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Sports?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-orange-600 hover:bg-orange-700">
                                {language === "hindi" ? "हरियाणा खेल क्विज़ लें" : "Take Haryana Sports Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/demographics" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "जनसांख्यिकी" : "Demographics"}
                        </Link>
                        <Link href="/haryana-gk/welfare-schemes" className="text-orange-600 hover:text-orange-700 flex items-center gap-1">
                            {language === "hindi" ? "कल्याणकारी योजनाएं" : "Welfare Schemes"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा के खेल और पुरस्कार - संपूर्ण संदर्भ" : "Sports and Awards of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के खेल और पुरस्कारों के बारे में व्यापक जानकारी प्रदान करता है - प्रमुख एथलीट, मुक्केबाज, क्रिकेटर, हॉकी खिलाड़ी, पहलवान, निशानेबाज, खेल संगठन, स्टेडियम, SAI प्रशिक्षण केंद्र, राज्य पुरस्कार (भीम पुरस्कार, महाराणा प्रताप पुरस्कार), महिला पुरस्कार, शौर्य पुरस्कार (परमवीर चक्र, वीर चक्र), अंतर्राष्ट्रीय प्रतियोगिताओं में हरियाणा का प्रदर्शन, और हरियाणा राज्य खेल नीति 2015। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about sports and awards in Haryana - major athletes, boxers, cricketers, hockey players, wrestlers, shooters, sports organizations, stadiums, SAI training centers, state awards (Bhim Award, Maharana Pratap Award), women's awards, gallantry awards (Param Vir Chakra, Vir Chakra), Haryana's performance in international competitions, and Haryana State Sports Policy 2015. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और खेल अभिलेखों से स्रोतित" : "Information sourced from official Government of Haryana publications and sports records"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}