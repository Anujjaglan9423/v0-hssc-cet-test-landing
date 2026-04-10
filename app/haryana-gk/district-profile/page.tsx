"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    History,
    Mountain,
    ChevronDown,
    HelpCircle,
    Trees,
    Landmark,
    ArrowLeft,
    Bird,
    PawPrint,
    Building2,
    Factory,
    Heart,
    MapPin,
    Calendar,
    Users,
    BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaDistrictsPage() {
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
            questionHindi: "हरियाणा राज्य का गठन कब हुआ था?",
            questionEnglish: "When was Haryana state formed?",
            answerHindi: "हरियाणा राज्य का गठन 1 नवंबर, 1966 को हुआ था। गठन के समय राज्य में 7 जिले थे - अंबाला, जींद, करनाल, हिसार, रोहतक, गुरुग्राम और महेंद्रगढ़।",
            answerEnglish: "Haryana state was formed on 1st November, 1966. At the time of formation, the state had 7 districts - Ambala, Jind, Karnal, Hisar, Rohtak, Gurugram and Mahendragarh."
        },
        {
            questionHindi: "हरियाणा का सबसे नया जिला कौन सा है?",
            questionEnglish: "Which is the newest district of Haryana?",
            answerHindi: "चरखी-दादरी जिला हरियाणा का 22वां और सबसे नया जिला है, जिसका गठन 1 दिसंबर, 2016 को हुआ था।",
            answerEnglish: "Charkhi-Dadri district is the 22nd and newest district of Haryana, formed on 1st December, 2016."
        },
        {
            questionHindi: "हरियाणा में कितने प्रशासनिक प्रभाग हैं?",
            questionEnglish: "How many administrative divisions are there in Haryana?",
            answerHindi: "हरियाणा में 6 प्रशासनिक प्रभाग हैं - अंबाला, फरीदाबाद, गुरुग्राम, हिसार, रोहतक और करनाल प्रभाग।",
            answerEnglish: "There are 6 administrative divisions in Haryana - Ambala, Faridabad, Gurugram, Hisar, Rohtak and Karnal divisions."
        },
        {
            questionHindi: "हरियाणा का क्षेत्रफल की दृष्टि से सबसे बड़ा जिला कौन सा है?",
            questionEnglish: "Which is the largest district of Haryana by area?",
            answerHindi: "सिरसा जिला हरियाणा का क्षेत्रफल की दृष्टि से सबसे बड़ा जिला है, जिसका क्षेत्रफल 4277 वर्ग किमी है।",
            answerEnglish: "Sirsa district is the largest district of Haryana by area, covering 4277 sq km."
        },
        {
            questionHindi: "हरियाणा का सबसे अधिक जनसंख्या घनत्व वाला जिला कौन सा है?",
            questionEnglish: "Which district has the highest population density in Haryana?",
            answerHindi: "फरीदाबाद जिला हरियाणा का सबसे अधिक जनसंख्या घनत्व (2298 व्यक्ति/वर्ग किमी) वाला जिला है।",
            answerEnglish: "Faridabad district has the highest population density (2298 persons/sq km) in Haryana."
        },
        {
            questionHindi: "किस जिले को 'स्टील सिटी' के नाम से जाना जाता है?",
            questionEnglish: "Which district is known as 'Steel City'?",
            answerHindi: "हिसार जिले को 'स्टील सिटी' और 'मैग्नेट सिटी' के नाम से जाना जाता है। यहाँ मुख्य रूप से लोहे के पाइप बनाए जाते हैं।",
            answerEnglish: "Hisar district is known as 'Steel City' and 'Magnet City'. Iron pipes are mostly manufactured here."
        },
        {
            questionHindi: "किस जिले को 'धर्मनगरी' कहा जाता है?",
            questionEnglish: "Which district is called 'Dharmanagri'?",
            answerHindi: "कुरुक्षेत्र जिले को 'धर्मनगरी' कहा जाता है। यह महाभारत युद्ध और श्रीकृष्ण द्वारा गीता के उपदेश के लिए प्रसिद्ध है।",
            answerEnglish: "Kurukshetra district is called 'Dharmanagri'. It is famous for the Mahabharata War and the preaching of Srimad Bhagavad Gita by Shri Krishna."
        },
        {
            questionHindi: "किस जिले को 'पीतल नगरी' के नाम से जाना जाता है?",
            questionEnglish: "Which district is known as 'Brass City'?",
            answerHindi: "रेवाड़ी जिले को 'पीतल नगरी' और 'वीर नगरी' के नाम से जाना जाता है। यह पीतल धातु उद्योग के लिए प्रसिद्ध है।",
            answerEnglish: "Rewari district is known as 'Brass City' and 'Veer Nagari'. It is famous for the brass metal ware industry."
        }
    ];

    // Divisions Data
    const divisions = [
        { name: "Ambala Division", districts: "Ambala, Kurukshetra, Yamunanagar, Panchkula" },
        { name: "Faridabad Division", districts: "Faridabad, Nuh, Palwal" },
        { name: "Gurugram Division", districts: "Gurugram, Mahendragarh, Rewari" },
        { name: "Hisar Division", districts: "Hisar, Jind, Sirsa, Fatehabad" },
        { name: "Rohtak Division", districts: "Rohtak, Sonipat, Bhiwani, Jhajjar, Charkhi-Dadri" },
        { name: "Karnal Division", districts: "Karnal, Panipat, Kaithal" }
    ];

    // Detailed District Data
    const districts = [
        {
            name: "Ambala",
            nameHindi: "अंबाला",
            nickname: "Mixi City",
            nicknameHindi: "मिक्सी सिटी",
            division: "Ambala Division",
            established: "1st November, 1966",
            area: "1,574 sq km",
            population: "11,28,350",
            sexRatio: "885",
            literacy: "81.75%",
            density: "717 person/sq km",
            rivers: "Ghaggar, Markanda, Tangri",
            touristPlaces: "Mahaveer Udyan, Indira Udyan, Badshahi Bagh Gurdwara, Morni Hills",
            facts: "Ambala is a major military city of India. It is also known as Scientific City because about 35% of scientific instruments are manufactured here. The headquarter of the Northern Railway Zone is located in Ambala. Nathuram Godse was hanged in Ambala jail on 15th November, 1949."
        },
        {
            name: "Kurukshetra",
            nameHindi: "कुरुक्षेत्र",
            nickname: "Dharma Nagari",
            nicknameHindi: "धर्मनगरी",
            division: "Ambala Division",
            established: "23rd January, 1973",
            area: "1,530 sq km",
            population: "9,64,655",
            sexRatio: "888",
            literacy: "76.7%",
            density: "630 person/sq km",
            rivers: "Markanda, Ghaggar, Apaga",
            touristPlaces: "Jyotisar, Brahmasarovar, Bhadrakali Shaktipeeth, Sthaneshwar Mahadev Temple",
            facts: "Kurukshetra is famous for the Mahabharata War and the preaching of Srimad Bhagavad Gita by Shri Krishna. It is also called 'Dharmanagri'. Asia's second largest grain market is located at Ladwa in Kurukshetra. Kalpana Chawla Planetarium is built here."
        },
        {
            name: "Yamunanagar",
            nameHindi: "यमुनानगर",
            nickname: "City of Paper",
            nicknameHindi: "पेपर सिटी",
            division: "Ambala Division",
            established: "1st November, 1989",
            area: "1,756 sq km",
            population: "12,14,205",
            sexRatio: "877",
            literacy: "78.9%",
            density: "687 person/sq km",
            rivers: "Yamuna, Somb, Boli, Saraswati",
            touristPlaces: "Kalesar Wildlife Sanctuary, Hathni Kund Barrage, Chaneti Stupa",
            facts: "Yamunanagar is a prosperous industrial city. Saraswati Sugar Mill located in Jagadhri is Asia's largest sugar mill. It is also known as the City of Paper. The Mumbai Railway Carriage and Wagon Workshop is located here."
        },
        {
            name: "Panchkula",
            nameHindi: "पंचकूला",
            nickname: "Nano City",
            nicknameHindi: "नैनो सिटी",
            division: "Ambala Division",
            established: "15th August, 1995",
            area: "898 sq km",
            population: "5,61,293",
            sexRatio: "873",
            literacy: "83.4%",
            density: "625 person/sq km",
            rivers: "Ghaggar, Sirsa, Kaushalya",
            touristPlaces: "Mansa Devi Temple, Cactus Garden, Pinjore Gardens, Tikker Tal Lake",
            facts: "Panchkula is also called the city of Five Irrigation Canals. Morni hills have Karoh Peak (1514 m), the highest point of the state. Asia's largest cactus garden is in Panchkula. The headquarters of Haryana Public Service Commission is located here."
        },
        {
            name: "Faridabad",
            nameHindi: "फरीदाबाद",
            nickname: "-",
            division: "Faridabad Division",
            established: "15th August, 1979",
            area: "741 sq km",
            population: "18,09,733",
            sexRatio: "873",
            literacy: "83.0%",
            density: "2298 person/sq km",
            river: "Yamuna",
            touristPlaces: "Raja Nahar Singh Palace, Surajkund, Shine Temple",
            facts: "Faridabad is the most densely populated district and has the highest population in Haryana. It was built to rehabilitate the migrants from Pakistan after independence. The city was founded in 1607 by Sheikh Farid."
        },
        {
            name: "Mewat (Nuh)",
            nameHindi: "नूंह (मेवात)",
            nickname: "-",
            division: "Faridabad Division",
            established: "4th April, 2005",
            area: "1,507 sq km",
            population: "10,89,263",
            sexRatio: "907",
            literacy: "56.1%",
            density: "723 person/sq km",
            touristPlaces: "Chuhlmal Ka Talab, Kotla Lake, Tawadu Fort",
            facts: "Mewat has the highest sex ratio (907) in the state. The first mobile court of the country was established in Mewat district. At the time of formation this district was named Satyamevapuram."
        },
        {
            name: "Palwal",
            nameHindi: "पलवल",
            nickname: "City of Cotton",
            nicknameHindi: "कॉटन सिटी",
            division: "Faridabad Division",
            established: "13th August, 2008",
            area: "1,359 sq km",
            population: "10,42,708",
            sexRatio: "880",
            literacy: "70.3%",
            density: "767 person/sq km",
            river: "Yamuna",
            touristPlaces: "Panchavati Temple, Balram Temple, Pandava Forest",
            facts: "Gandhi ji was first arrested on 8th April, 1919 at Palwal station. Palwal is also known as cotton city and is famous for sugar and cycle industry. Skill Development University is proposed in Dudhola village."
        },
        {
            name: "Gurugram",
            nameHindi: "गुरुग्राम",
            nickname: "Cyber City",
            nicknameHindi: "साइबर सिटी",
            division: "Gurugram Division",
            established: "1st November, 1966",
            area: "1,253 sq km",
            population: "15,14,432",
            sexRatio: "854",
            literacy: "84.4%",
            density: "1204 person/sq km",
            touristPlaces: "Sultanpur National Park, Damdama Lake, Kingdom of Dreams",
            facts: "Gurugram is known as the Mall Capital of India and Financial capital of Haryana. The first metro train in Haryana started here in 2010. Maruti Udyog was established here in 1983. Asia's first Photographic Art Center has opened in Gurugram."
        },
        {
            name: "Mahendragarh",
            nameHindi: "महेंद्रगढ़",
            nickname: "City of Minerals",
            nicknameHindi: "खनिज नगरी",
            division: "Gurugram Division",
            established: "1st November, 1966",
            area: "1,899 sq km",
            population: "9,22,088",
            sexRatio: "895",
            literacy: "77.72%",
            density: "486 person/sq km",
            river: "Dohan",
            touristPlaces: "Jalmahal, Chor Gumbad, Dhosi Hill, Madhogad Fort",
            facts: "Mahendragarh is called the city of minerals. This district ranks first in mustard production in Haryana. It is the only district whose headquarter is in Narnaul city, not in Mahendragarh city. North India's largest logistics park is located in Narnaul."
        },
        {
            name: "Rewari",
            nameHindi: "रेवाड़ी",
            nickname: "Brass City",
            nicknameHindi: "पीतल नगरी",
            division: "Gurugram Division",
            established: "1st November, 1989",
            area: "1,594 sq km",
            population: "9,00,332",
            sexRatio: "898",
            literacy: "82.2%",
            density: "565 person/sq km",
            river: "Sahibi",
            touristPlaces: "Rao Tej Singh Talab, Ghatneshwar Temple, Lal Masjid",
            facts: "Rewari Railway Station is the largest and oldest railway station in Haryana (founded in 1873). Hero Honda Motors Limited was established here in 1986-87. Rezang La Memorial has been constructed for the Ahir Regiment soldiers of 1962 war."
        },
        {
            name: "Hisar",
            nameHindi: "हिसार",
            nickname: "Steel City",
            nicknameHindi: "स्टील सिटी",
            division: "Hisar Division",
            established: "1st November, 1966",
            area: "3,983 sq km",
            population: "17,43,931",
            sexRatio: "872",
            literacy: "73.2%",
            density: "438 person/sq km",
            touristPlaces: "Gujar Mahal, Rakhigarhi, Firoz Shah Palace",
            facts: "Rakhigarhi, the biggest site of the Harappan civilisation, is located in Hisar district. Hisar was founded by Feroz Shah Tughlaq in 1354 AD. Central Buffalo Research Institute and National Research Centre on Equines (NRCE) are located here."
        },
        {
            name: "Jind",
            nameHindi: "जींद",
            nickname: "Heart of Haryana",
            nicknameHindi: "हरियाणा का दिल",
            division: "Hisar Division",
            established: "1st November, 1966",
            area: "2,702 sq km",
            population: "13,34,152",
            sexRatio: "871",
            literacy: "72.7%",
            density: "494 person/sq km",
            touristPlaces: "Jayanti Devi Temple, Rani ka Talab, Bhuteshwar Temple",
            facts: "Jind nagar was established by Raja Gajpat Singh in the 18th century. Jind is the district which rears largest number of buffaloes in Haryana. Leather cleaning is mainly done in Jind."
        },
        {
            name: "Sirsa",
            nameHindi: "सिरसा",
            nickname: "City of Saints",
            nicknameHindi: "संतों की नगरी",
            division: "Hisar Division",
            established: "26th August, 1975",
            area: "4,277 sq km",
            population: "12,95,189",
            sexRatio: "897",
            literacy: "70.4%",
            density: "303 person/sq km",
            touristPlaces: "Dera Sacha Sauda, Gurudwara Chormar Sahib",
            facts: "Sirsa is the largest district in terms of area in the state. It has the lowest population density (303 per sq km). Chaudhary Devi Lal University is located here. Sirsa has the highest world record for blood donation."
        },
        {
            name: "Fatehabad",
            nameHindi: "फतेहाबाद",
            nickname: "-",
            division: "Hisar Division",
            established: "15th July, 1997",
            area: "2,538 sq km",
            population: "9,42,011",
            sexRatio: "902",
            literacy: "58.16%",
            density: "371 person/sq km",
            touristPlaces: "Lat Masjid, Humayun's Masjid, Fatehabad Fort",
            facts: "Fatehabad city was founded in 1352 by Feroz Shah Tughlaq. The first nuclear power plant of the state is located in village Gorakhpur in Fatehabad. Kunal mound and Banawali mound archaeological sites are located here."
        },
        {
            name: "Rohtak",
            nameHindi: "रोहतक",
            nickname: "Education Hub",
            nicknameHindi: "शिक्षा नगरी",
            division: "Rohtak Division",
            established: "1st November, 1966",
            area: "1,745 sq km",
            population: "10,61,204",
            sexRatio: "867",
            literacy: "80.4%",
            density: "608 person/sq km",
            rivers: "Saraswati, Markanda",
            touristPlaces: "Tilyar Lake, Maharishi Dayanand University",
            facts: "Rohtak is called the education city and political capital of Haryana. Maharishi Dayanand University was established here in 1976. Asia's largest wholesale clothing Shorie market is located in Rohtak. Rohtak's Rewri and Gajjak are famous."
        },
        {
            name: "Sonipat",
            nameHindi: "सोनीपत",
            nickname: "Education City",
            nicknameHindi: "शिक्षा नगरी",
            division: "Rohtak Division",
            established: "22nd December, 1972",
            area: "2,122 sq km",
            population: "14,50,001",
            sexRatio: "856",
            literacy: "80.8%",
            density: "687 person/sq km",
            river: "Yamuna",
            touristPlaces: "Khwaja Khizr Khan Tomb, Baba Dham Temple",
            facts: "Sonipat ranks first in the country in the production of Mushroom, Sunflower, and citrus crops. The first women's university of Northern India - Bhagat Phool Singh Mahila Vishwavidyalaya is located here. India's First Tourism University is at Rai."
        },
        {
            name: "Bhiwani",
            nameHindi: "भिवानी",
            nickname: "Mini Cuba",
            nicknameHindi: "मिनी क्यूबा",
            division: "Rohtak Division",
            established: "22nd December, 1972",
            area: "4,778 sq km",
            population: "16,34,445",
            sexRatio: "886",
            literacy: "76.7%",
            density: "342 person/sq km",
            river: "Dohan",
            touristPlaces: "Tosham Hill, Gauri Shankar Temple",
            facts: "Bhiwani is called the Kashi of Haryana and the city of temples. Board of School Education of Haryana is located here. This district is being developed into a boxing center, due to which it is also known as Mini Cuba of India."
        },
        {
            name: "Jhajjar",
            nameHindi: "झज्जर",
            nickname: "City of the Martyrs",
            nicknameHindi: "शहीदों की नगरी",
            division: "Rohtak Division",
            established: "15th July, 1997",
            area: "1,834 sq km",
            population: "9,58,405",
            sexRatio: "862",
            literacy: "80.8%",
            density: "523 person/sq km",
            river: "Sahibi",
            touristPlaces: "Bhindawas Bird Sanctuary, Dighal Village",
            facts: "Jhajjar is also known as the city of martyrs. The first Chief Minister of the state, Pandit Bhagwat Dayal Sharma, belongs to Jhajjar. The largest bus stand of the state is in Jhajjar. Bhindawas Lake is the largest wetland in Haryana."
        },
        {
            name: "Charkhi-Dadri",
            nameHindi: "चरखी-दादरी",
            nickname: "-",
            division: "Rohtak Division",
            established: "1st December, 2016",
            area: "-",
            population: "44,892",
            sexRatio: "881",
            literacy: "70%",
            density: "-",
            touristPlaces: "Hanuman Temple, Kapuri Hill",
            facts: "Charkhi-Dadri is the 22nd district of Haryana, formed on 1st December, 2016. A cement factory was established by Seth Ramakrishna Dalmia in 1939. Kaliyana village is the only place in India where flexible sandstone (Hilna stones) is found."
        },
        {
            name: "Karnal",
            nameHindi: "करनाल",
            nickname: "Rice Bowl",
            nicknameHindi: "चावल का कटोरा",
            division: "Karnal Division",
            established: "1st November, 1966",
            area: "2,520 sq km",
            population: "15,05,324",
            sexRatio: "887",
            literacy: "76.4%",
            density: "597 person/sq km",
            river: "Yamuna",
            touristPlaces: "Karna Lake, Sita Mai Temple, Karna Talab",
            facts: "Karnal is also called the Rice Bowl and Paris of Haryana. National Dairy Research Institute (NDRI) is located here. In 1739, Nadir Shah defeated Mughal Emperor Mohammad Shah in Karnal. Liberty shoes manufactured here are exported abroad."
        },
        {
            name: "Panipat",
            nameHindi: "पानीपत",
            nickname: "Weaver Town",
            nicknameHindi: "बुनकर नगरी",
            division: "Karnal Division",
            established: "1st November, 1989",
            area: "1,268 sq km",
            population: "12,05,437",
            sexRatio: "864",
            literacy: "77.5%",
            density: "951 person/sq km",
            river: "Yamuna",
            touristPlaces: "Ibrahim Lodi's Tomb, Kala Amb, Devi Talab Temple",
            facts: "Three main battles were fought here - First, Second and Third War of Panipat. Panipat is the largest center for the production of blankets and handloom items. Beti Bachao Beti Padhao program was started on 22nd January, 2016 from Panipat."
        },
        {
            name: "Kaithal",
            nameHindi: "कैथल",
            nickname: "Chhoti Kashi",
            nicknameHindi: "छोटी काशी",
            division: "Karnal Division",
            established: "1st November, 1989",
            area: "2,317 sq km",
            population: "10,74,304",
            sexRatio: "881",
            literacy: "69.15%",
            density: "464 person/sq km",
            rivers: "Saraswati, Markanda",
            touristPlaces: "Anjani Tila, Navagrah Kund, Tomb of Razia Sultan",
            facts: "Kaithal is considered to be the birthplace of Hanuman Ji. It is called Chhoti Kashi due to the Navagraha Kunda located here. Basmati rice produced here is exported abroad. It is also called the City of Gurdwaras."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 dark:from-emerald-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Language Toggle Button */}
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
                        <MapPin className="w-4 h-4" />
                        {language === "hindi" ? "जिला प्रोफाइल - हरियाणा सरकार" : "District Profile - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा के" : "Districts of"} <span className="text-emerald-600 dark:text-emerald-400">{language === "hindi" ? "जिले" : "Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के 22 जिलों की संपूर्ण जानकारी - स्थापना, क्षेत्रफल, जनसंख्या, प्रमुख नदियाँ, पर्यटन स्थल और विशेष तथ्य"
                            : "Complete information about the 22 districts of Haryana - establishment, area, population, major rivers, tourist places, and special facts"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Calendar className="w-4 h-4 text-emerald-600" />
                            <span>{language === "hindi" ? "22 जिले" : "22 Districts"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Building2 className="w-4 h-4 text-emerald-600" />
                            <span>{language === "hindi" ? "6 प्रभाग" : "6 Divisions"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Users className="w-4 h-4 text-emerald-600" />
                            <span>{language === "hindi" ? "जनसंख्या 2.5 करोड़+" : "Population 2.5 Crore+"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <BookOpen className="w-4 h-4 text-emerald-600" />
                            <span>{language === "hindi" ? "HSSC परीक्षा उपयोगी" : "HSSC Exam Useful"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Overview Section */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-emerald-500/20">
                                <History className="w-5 h-5 text-emerald-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा राज्य का गठन और जिले" : "Formation of Haryana and Districts"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            {language === "hindi"
                                ? "हरियाणा 1 नवंबर, 1966 को एक अलग राज्य बना, जिसमें सात जिले थे - अंबाला, जींद, करनाल, हिसार, रोहतक, गुरुग्राम और महेंद्रगढ़। बाद में पुनर्गठन द्वारा 15 और जिले जोड़े गए। वर्तमान में, हरियाणा में 6 प्रशासनिक प्रभाग और 22 जिले हैं।"
                                : "Haryana became a separate state on 1st November, 1966, with seven districts - Ambala, Jind, Karnal, Hisar, Rohtak, Gurugram and Mahendragarh. Later, 15 more districts were added by re-organising the erstwhile districts. At present, Haryana has 6 administrative divisions and 22 districts."}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                            {divisions.map((div, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-lg p-3 border">
                                    <h3 className="font-semibold text-emerald-600">{div.name}</h3>
                                    <p className="text-xs text-muted-foreground">{div.districts}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Districts Grid Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <MapPin className="w-6 h-6 text-emerald-600" />
                            {language === "hindi" ? "हरियाणा के जिले - विस्तृत प्रोफाइल" : "Districts of Haryana - Detailed Profile"}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            {language === "hindi"
                                ? "नीचे हरियाणा के सभी 22 जिलों की विस्तृत जानकारी दी गई है, जिसमें स्थापना तिथि, क्षेत्रफल, जनसंख्या, साक्षरता दर, प्रमुख नदियाँ, पर्यटन स्थल और विशेष तथ्य शामिल हैं।"
                                : "Detailed information of all 22 districts of Haryana is given below, including establishment date, area, population, literacy rate, major rivers, tourist places, and special facts."}
                        </p>

                        <div className="grid grid-cols-1 gap-6">
                            {districts.map((district, idx) => (
                                <div key={idx} className="bg-card rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-all">
                                    <div className="bg-gradient-to-r from-emerald-500/10 to-transparent p-5 border-b">
                                        <div className="flex flex-wrap justify-between items-start gap-2">
                                            <div>
                                                <h3 className="text-xl font-bold">{language === "hindi" ? district.nameHindi : district.name}</h3>
                                                {(district.nickname || district.nicknameHindi) && (
                                                    <p className="text-sm text-emerald-600 font-medium">
                                                        {language === "hindi" ? district.nicknameHindi : district.nickname}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="text-xs bg-muted px-3 py-1 rounded-full">
                                                {district.division}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                            <div>
                                                <p className="text-xs text-muted-foreground">{language === "hindi" ? "स्थापना" : "Established"}</p>
                                                <p className="text-sm font-medium">{district.established}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">{language === "hindi" ? "क्षेत्रफल" : "Area"}</p>
                                                <p className="text-sm font-medium">{district.area}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">{language === "hindi" ? "जनसंख्या" : "Population"}</p>
                                                <p className="text-sm font-medium">{district.population}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">{language === "hindi" ? "साक्षरता" : "Literacy"}</p>
                                                <p className="text-sm font-medium">{district.literacy}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">{language === "hindi" ? "लिंगानुपात" : "Sex Ratio"}</p>
                                                <p className="text-sm font-medium">{district.sexRatio}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">{language === "hindi" ? "जनसंख्या घनत्व" : "Population Density"}</p>
                                                <p className="text-sm font-medium">{district.density}</p>
                                            </div>
                                            {district.rivers && (
                                                <div className="col-span-2">
                                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? "प्रमुख नदियाँ" : "Major Rivers"}</p>
                                                    <p className="text-sm font-medium">{district.rivers}</p>
                                                </div>
                                            )}
                                            {district.river && (
                                                <div>
                                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? "प्रमुख नदी" : "Major River"}</p>
                                                    <p className="text-sm font-medium">{district.river}</p>
                                                </div>
                                            )}
                                        </div>
                                        {district.touristPlaces && (
                                            <div className="mb-3">
                                                <p className="text-xs text-muted-foreground">{language === "hindi" ? "पर्यटन स्थल" : "Tourist Places"}</p>
                                                <p className="text-sm">{district.touristPlaces}</p>
                                            </div>
                                        )}
                                        <div className="bg-muted/30 p-3 rounded-lg">
                                            <p className="text-xs text-muted-foreground mb-1">{language === "hindi" ? "विशेष तथ्य" : "Special Facts"}</p>
                                            <p className="text-sm leading-relaxed">{language === "hindi" ? district.facts : district.facts}</p>
                                        </div>
                                    </div>
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
                        {language === "hindi" ? "हरियाणा जिले: तथ्य सारांश" : "Haryana Districts: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">1,574</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सबसे छोटा जिला (फरीदाबाद) वर्ग किमी" : "Smallest District (Faridabad) sq km"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">4,277</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सबसे बड़ा जिला (सिरसा) वर्ग किमी" : "Largest District (Sirsa) sq km"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">907</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सर्वोच्च लिंगानुपात (नूंह)" : "Highest Sex Ratio (Nuh)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">2,298</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सर्वोच्च जनसंख्या घनत्व (फरीदाबाद)" : "Highest Population Density (Faridabad)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">1</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "नवंबर 1966 (7 जिले गठित)" : "November 1966 (7 districts formed)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">6</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "प्रशासनिक प्रभाग" : "Administrative Divisions"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">22</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "कुल जिले" : "Total Districts"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">2016</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "नवीनतम जिला (चरखी-दादरी)" : "Newest District (Charkhi-Dadri)"}</p>
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
                            {language === "hindi" ? "हरियाणा के जिलों के" : "Common"} <span className="text-emerald-600">{language === "hindi" ? "बारे में सामान्य प्रश्न" : "Questions About Haryana's Districts"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के जिलों, उनकी स्थापना, क्षेत्रफल, जनसंख्या और विशेषताओं के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's districts, their establishment, area, population, and characteristics"}
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
                                        className={`w-5 h-5 text-emerald-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
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
                            {language === "hindi" ? "अपने हरियाणा GK के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana GK?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-emerald-600 hover:bg-emerald-700">
                                {language === "hindi" ? "हरियाणा जिला क्विज़ लें" : "Take Haryana District Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/panchayati-raj" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "पीछे जाएँ: पंचायती राज" : "Back to Panchayati Raj"}
                        </Link>
                        <Link href="/haryana-gk/archaeological-sites" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: पुरातात्विक स्थल" : "Next Chapter: Archaeological Sites"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा के जिले - संपूर्ण संदर्भ" : "Districts of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के 22 जिलों के बारे में व्यापक जानकारी प्रदान करता है - स्थापना तिथि, क्षेत्रफल, जनसंख्या, साक्षरता दर, लिंगानुपात, जनसंख्या घनत्व, प्रमुख नदियाँ, पर्यटन स्थल और विशेष तथ्य। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about the 22 districts of Haryana - establishment date, area, population, literacy rate, sex ratio, population density, major rivers, tourist places, and special facts. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और जिला गजेटियर से स्रोतित" : "Information sourced from official Government of Haryana publications and district gazetteers"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}