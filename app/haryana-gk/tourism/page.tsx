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
    Building2,
    Heart,
    MapPin,
    Calendar,
    BookOpen,
    Castle,
    Church,
    Trophy,
    Hotel,
    Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaTourismPage() {
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
            questionHindi: "हरियाणा पर्यटन निगम (HTC) की स्थापना कब हुई थी?",
            questionEnglish: "When was Haryana Tourism Corporation (HTC) established?",
            answerHindi: "हरियाणा पर्यटन निगम लिमिटेड की स्थापना 1 मई 1974 को कंपनी अधिनियम, 1956 के अंतर्गत हुई थी। इसका पंजीकृत कार्यालय और मुख्य कार्यालय सेक्टर 17-बी, चंडीगढ़ में स्थित है।",
            answerEnglish: "Haryana Tourism Corporation Limited was incorporated on 1 May 1974 under the Companies Act, 1956. Its registered and head office is in Sector 17-B, Chandigarh."
        },
        {
            questionHindi: "हरियाणा का एकमात्र हिल स्टेशन कौन सा है?",
            questionEnglish: "Which is the only hill station in Haryana?",
            answerHindi: "मोरनी हिल्स हरियाणा का एकमात्र प्रमुख हिल स्टेशन है। यह पंचकूला जिले में शिवालिक पहाड़ियों के क्षेत्र में स्थित है।",
            answerEnglish: "Morni Hills is regarded as Haryana’s only hill station. It is in Panchkula district, in the Shivalik hill region."
        },
        {
            questionHindi: "यादविंद्र गार्डन कहाँ स्थित है और इसे किसने बनवाया था?",
            questionEnglish: "Where is Yadavindra Garden located and who built it?",
            answerHindi: "यादविंद्र गार्डन (पिंजौर गार्डन) पंचकूला जिले के पिंजौर में स्थित है। इसका निर्माण 17वीं शताब्दी में मुगल सम्राट औरंगजेब के शासनकाल में नवाब फिदाई खान ने करवाया था।",
            answerEnglish: "Yadavindra Gardens (Pinjore Gardens) are located in Pinjore, Panchkula district. They were built in the 17th century by Nawab Fidai Khan during the reign of Mughal emperor Aurangzeb."
        },
        {
            questionHindi: "ज्योतिसर सरोवर का क्या महत्व है?",
            questionEnglish: "What is the significance of Jyotisar Sarovar?",
            answerHindi: "ज्योतिसर, कुरुक्षेत्र का एक प्रमुख तीर्थस्थल है। धार्मिक परंपरा के अनुसार, यहीं भगवान श्रीकृष्ण ने अर्जुन को भगवद्गीता का उपदेश दिया था। इसे गीता स्थली भी कहा जाता है।",
            answerEnglish: "Jyotisar is a major pilgrimage site in Kurukshetra. According to religious tradition, Lord Krishna delivered the teachings of the Bhagavad Gita to Arjuna here. It is also known as Gita Sthali."
        },
        {
            questionHindi: "शेख चिल्ली का मकबरा कहाँ स्थित है?",
            questionEnglish: "Where is Sheikh Chilli’s Tomb located?",
            answerHindi: "शेख चिल्ली का मकबरा कुरुक्षेत्र जिले के थानेसर में स्थित 17वीं शताब्दी का मुगलकालीन स्मारक है। इसके गुंबद में सफेद संगमरमर तथा संरचना में बलुआ पत्थर का उपयोग हुआ है।",
            answerEnglish: "Sheikh Chilli’s Tomb is a 17th-century Mughal-era monument in Thanesar, Kurukshetra district. Its dome is made of white marble, while the structure also uses sandstone."
        },
        {
            questionHindi: "सूरजकुंड का निर्माण किसने करवाया था?",
            questionEnglish: "Who built Surajkund?",
            answerHindi: "हरियाणा पर्यटन विभाग के अनुसार, फरीदाबाद स्थित ऐतिहासिक सूरजकुंड का निर्माण परंपरागत रूप से 10वीं शताब्दी के तोमर शासक सूरज पाल से जोड़ा जाता है। सूरजकुंड शिल्प मेला पहली बार 1987 में आयोजित हुआ था।",
            answerEnglish: "According to Haryana Tourism, Surajkund in Faridabad is traditionally attributed to the 10th-century Tomar ruler Suraj Pal. The Surajkund Crafts Mela was first held in 1987."
        },
        {
            questionHindi: "हरियाणा में कितने पर्यटन परिसर हैं?",
            questionEnglish: "How many tourist complexes are there in Haryana?",
            answerHindi: "हरियाणा पर्यटन विभाग और नवंबर 2025 के हरियाणा पर्यटन निगम के दस्तावेज़ के अनुसार, राज्य में 42 पर्यटन परिसरों का नेटवर्क है। इनकी संख्या समय के साथ बदल सकती है।",
            answerEnglish: "Haryana Tourism Department and a Haryana Tourism Corporation document dated November 2025 describe a network of 42 tourist complexes across the state. The number may change over time."
        },
        {
            questionHindi: "पिंजौर में कौन से प्रमुख त्योहार मनाए जाते हैं?",
            questionEnglish: "Which major festivals are celebrated in Pinjore?",
            answerHindi: "पिंजौर के यादविंद्र गार्डन में प्रमुख आयोजनों में बैसाखी उत्सव (सामान्यतः अप्रैल) और आम मेला (सामान्यतः जुलाई) शामिल हैं। अन्य उत्सवों की तारीखें हर वर्ष की आधिकारिक कार्यक्रम-सूची के अनुसार देखनी चाहिए।",
            answerEnglish: "Major events at Yadavindra Gardens, Pinjore, include the Baisakhi Festival (usually April) and Mango Mela (usually July). Other festival dates should be checked against the official calendar for each year."
        }
    ];

    // Tourist Complexes/Resorts Data
    const touristResorts = [
        { name: "Blue Jay", place: "Samalkha, Panipat", year: "—" },
        { name: "Parakeet", place: "Pipli, Kurukshetra", year: "—" },
        { name: "Bulbul", place: "Jind", year: "—" },
        { name: "Jungle Babbler", place: "Dharuhera, Rewari", year: "—" },
        { name: "Dabchick", place: "Hodal, Palwal", year: "—" },
        { name: "Barbet", place: "Sohna, Gurugram", year: "—" },
        { name: "Saras", place: "Damdama, Gurugram", year: "—" },
        { name: "Shama", place: "Gurugram", year: "—" },
        { name: "Myna", place: "Rohtak", year: "—" },
        { name: "Skylark", place: "Panipat", year: "—" },
        { name: "Surkhab", place: "Sirsa", year: "—" },
        { name: "Sandpiper", place: "Rewari", year: "—" },
        { name: "Magpie", place: "Faridabad", year: "—" },
        { name: "Rajhans", place: "Surajkund, Faridabad", year: "—" },
        { name: "Sunbird", place: "Surajkund, Faridabad", year: "—" },
        { name: "Baya", place: "Bhiwani", year: "—" },
        { name: "Grey Pelican", place: "Yamunanagar", year: "—" },
        { name: "Koel", place: "Kaithal", year: "—" },
        { name: "Kingfisher", place: "Ambala", year: "—" },
        { name: "Neelkanthi", place: "Kurukshetra", year: "—" },
        { name: "Mountain Quail", place: "Morni, Panchkula", year: "—" },
        { name: "Gauriyya", place: "Bahadurgarh, Jhajjar", year: "—" },
        { name: "Jatayu Yatrika", place: "Mansa Devi, Panchkula", year: "—" },
        { name: "Papiha", place: "Fatehabad", year: "—" },
        { name: "Black Bird", place: "Hansi (Hansi district)", year: "—" },
        { name: "Anjan Yatrika", place: "Pehowa, Kurukshetra", year: "—" },
        { name: "Highway Golf Course", place: "Uchana, Karnal", year: "—" },
        { name: "Ethnic India", place: "Rai, Sonipat", year: "—" },
        { name: "Nahar Singh Palace", place: "Ballabhgarh, Faridabad", year: "—" },
        { name: "Adventure Resort", place: "Tikkar Tal, Morni, Panchkula", year: "—" }
    ];

    // Important tourism destinations; dates describe the stated event, not HTC establishment.
    const touristDestinations = [
        { name: "Aravalli Golf Course", place: "Faridabad", year: "Opened 1966; HTC takeover 1988" },
        { name: "Yadavindra Gardens", place: "Pinjore, Panchkula", year: "Built in the 17th century" },
        { name: "Badkhal Lake", place: "Faridabad", year: "—" },
        { name: "Sultanpur National Park", place: "Gurugram", year: "Sanctuary 1971; national park 1991" },
        { name: "Karna Lake", place: "Karnal", year: "—" },
        { name: "Tilyar Lake", place: "Rohtak", year: "—" },
        { name: "Surajkund", place: "Faridabad", year: "10th-century attribution; mela since 1987" },
        { name: "Damdama Lake", place: "Gurugram", year: "—" }
    ];

    // Religious Places Data
    const religiousPlaces = [
        { name: "Jyotisar Sarovar", place: "Kurukshetra", significance: "Gita Sthali — traditionally associated with Lord Krishna teaching the Bhagavad Gita" },
        { name: "Brahmasarovar", place: "Thanesar, Kurukshetra", significance: "Major sacred bathing tank; its origin is associated with religious traditions" },
        { name: "Sthaneshwar Mahadev Temple", place: "Thanesar", significance: "Ancient Shiva temple linked with local traditions and the history of Thanesar" },
        { name: "Bhadrakali Shaktipeeth", place: "Kurukshetra", significance: "Revered as a Shakti Peeth; the association with Sati belongs to religious tradition" },
        { name: "Pehowa", place: "Kurukshetra", significance: "Prithudaka — an important pilgrimage place associated with ancestral rites" },
        { name: "Dukh Bhanjan Mahadev Temple", place: "Kurukshetra", significance: "People worship for peace and prosperity" },
        { name: "Chandi Devi Temple", place: "Panchkula", significance: "Shakti shrine associated with local traditions around Chandigarh" },
        { name: "Mata Mansa Devi Temple", place: "Panchkula", significance: "One of prominent Shakti temples of North India" },
        { name: "Bhimav Devi Temple", place: "Pinjore, Panchkula", significance: "Early medieval temple remains, with sculptures sometimes compared to Khajuraho" },
        { name: "Bhuteshwara Temple (Rani Talab)", place: "Jind", significance: "Shiva temple at Rani Talab, associated with Jind’s royal heritage" },
        { name: "Navagraha Kund (Chhoti Kashi)", place: "Kaithal", significance: "A group of sacred kunds; traditions link the site with Krishna" },
        { name: "Gyarah Rudri Shiva Temple", place: "Kaithal", significance: "Temple dedicated to the eleven forms of Rudra; local traditions link it with the Mahabharata" },
        { name: "Modewala Temple", place: "Narnaul, Mahendragarh", significance: "Dedicated to Lord Shiva, fair during Rakhi" },
        { name: "Chamunda Devi Temple", place: "Narnaul, Mahendragarh", significance: "Temple dedicated to Goddess Chamunda in the Narnaul area" },
        { name: "Ancient Shri Mata Sheetla Devi Temple", place: "Gurugram", significance: "Prominent shrine of Sheetla Mata; exact origin date and patronage require separate verification" },
        { name: "Bhawani Amba Temple", place: "Ambala", significance: "Shrine of Goddess Amba; the city’s name is sometimes linked with the goddess in local tradition" },
        { name: "Karneshwar Temple", place: "Karnal", significance: "Associated with Karna of Mahabharata, 5-headed Shiva idol" },
        { name: "Panchvati Temple", place: "Palwal", significance: "Temple linked by local tradition with the Pandavas’ exile" },
        { name: "Dauji Temple", place: "Palwal", significance: "Dedicated to Balaram, Krishna's elder brother" },
        { name: "Adi Badri Narayan Temple", place: "Yamunanagar", significance: "Ancient pilgrimage site traditionally associated with Adi Shankaracharya" }
    ];

    // Gurudwaras Data
    const gurudwaras = [
        { name: "Gurudwara Mastgarh", location: "Shahabad Markanda, Kurukshetra", significance: "Historic Sikh shrine in a building formerly used as a mosque; the exact original date is not securely established" },
        { name: "Gurudwara Kapal Mochan", location: "Bilaspur, Yamunanagar", significance: "Associated with Guru Gobind Singh Ji; local traditions refer to the sacred sarovars at Kapal Mochan" },
        { name: "Gurudwara Dhamtan Sahib", location: "Jind", significance: "Dedicated to 9th Sikh Guru, Guru Tegh Bahadur" },
        { name: "Gurudwara Manji Sahib", location: "Kaithal", significance: "Sikh shrine associated with the visit of Guru Tegh Bahadur Ji" },
        { name: "Gurudwara Neem Sahib", location: "Kaithal", significance: "Traditionally associated with Guru Tegh Bahadur Ji and a neem tree" },
        { name: "Badshahi Bagh Sahib Gurudwara", location: "Ambala", significance: "Sikh shrine traditionally associated with a visit of Guru Gobind Singh Ji" },
        { name: "Gurudwara Lakhan Majra", location: "Rohtak", significance: "Sikh shrine associated with Guru Tegh Bahadur Ji" },
        { name: "Gurudwara Navin Patshahi", location: "Kurukshetra", significance: "Dedicated to 9th Sikh Guru, Tegh Bahadur" },
        { name: "Gurudwara Shri Damdama Sahib", location: "Siana-Saidan", significance: "Local Sikh tradition associates this shrine with Guru Gobind Singh Ji" },
        { name: "Gurudwara Jora Sahib", location: "Siana-Saidan", significance: "The shrine’s name is associated in local tradition with a pair of shoes (jora)" }
    ];

    // Mosques Data
    const mosques = [
        { name: "Kabuli Bagh Masjid", location: "Panipat", significance: "Built by Babur in 1526 AD to commemorate victory over Ibrahim Lodhi" },
        { name: "Jama Masjid", location: "Panipat", significance: "Historic mosque in Panipat; the specific founding date and claim of largest size need verification" },
        { name: "Lal Masjid", location: "Rohtak", significance: "Historic mosque of Rohtak; exact builder and construction date need verification" },
        { name: "Humayun Mosque", location: "Fatehabad, Fatehabad district", significance: "16th-century mosque built under Mughal emperor Humayun, near the Firoz Shah Tughlaq pillar" },
        { name: "Mosque of Ali Vardi Khan", location: "Gurugram", significance: "Built in 18th century by Nawab Ali Vardi Khan" },
        { name: "Shishewali Masjid", location: "Rohtak", significance: "Entrance made of white marble, 14 pillars in corridor" },
        { name: "Dini Masjid (Adina Masjid)", location: "Rohtak", significance: "Historic mosque; accounts of an earlier structure are not conclusively established" }
    ];

    // Shrines and Dargahs Data
    const shrinesDargahs = [
        { name: "Dargah Naugaja Peer", location: "Shahabad, Kurukshetra", significance: "Shrine of Baba Naugaja Peer (Sayed Ibrahim Badshah)" },
        { name: "Shrine of Bu Ali Shah Qalandar", location: "Panipat", significance: "Built by Mahabat Khan, Urs Mela held annually" },
        { name: "Char Qutab Shrine", location: "Hansi, Hansi district", significance: "Tombs of four Sufi Saints, large mosque by Feroz Shah Tughlaq" },
        { name: "Shrine of Sheikh Musa", location: "Palla, Nuh", significance: "Traditionally known for its unusual minarets; age and reported movement require specialist documentation" },
        { name: "Shrine of Mira Nau Bahaar", location: "Guhla-Cheeka, Kaithal", significance: "Local shrine associated with religious gatherings; precise age not independently verified" },
        { name: "Shrine of Hamza Peer", location: "Dharasu, Narnaul", significance: "Tomb of Hamza Peer, disciple of Hazrat Shamsuddin Auliya" },
        { name: "Tomb of Peer Baba Shah Mir", location: "Fatehabad", significance: "Historic tomb traditionally associated with Peer Baba Shah Mir; attribution and materials need verification" }
    ];

    // Mausoleums/Samadhis Data
    const mausoleums = [
        { name: "Sheikh Chilli's Tomb", location: "Thanesar, Kurukshetra", significance: "17th-century Mughal-era tomb associated with the Sufi saint Sheikh Chilli" },
        { name: "Ibrahim Lodhi's Tomb", location: "Panipat", significance: "Grave of Ibrahim Lodi, who died in 1526; the memorial was rebuilt under British administration in 1867" },
        { name: "Razia Sultan's Tomb", location: "Kaithal", significance: "Traditional site associated with Razia Sultan; the identification of her burial place is disputed" },
        { name: "Khwaja Khizr's Tomb", location: "Sonipat", significance: "Built by Ibrahim Lodhi in 1522-24 AD, red sandstone" },
        { name: "Ibrahim Khan Suri's Tomb", location: "Narnaul, Mahendragarh", significance: "Built by Sher Shah Suri for his grandfather" },
        { name: "Shah Wilayat's Tomb", location: "Narnaul, Mahendragarh", significance: "Built during Feroz Shah Tughlaq's tenure" },
        { name: "Altaf Hussain Hali's Tomb", location: "Panipat", significance: "Mausoleum of famous Urdu scholar" },
        { name: "Muqarrab Khan's Tomb", location: "Panipat", significance: "Physician in Jahangir's court" }
    ];

    // Modern Tourist Centres Data
    const modernTouristCentres = [
        { name: "Surajkund", location: "Faridabad", features: "Annual Crafts Fair, Sun Temple ruins, Mayur Lake" },
        { name: "Yadavindra Garden (Pinjore Gardens)", location: "Pinjore, Panchkula", features: "17th-century Mughal-style terraced garden; Baisakhi and Mango Mela events" },
        { name: "Morni Hills", location: "Panchkula", features: "Only hill station in Haryana, Shiwalik hills, eco-tourism" },
        { name: "Tilyar Lake", location: "Rohtak", features: "Man-made lake, 123 acres, zoo, cafeteria, picnic lawns" },
        { name: "Karna Lake", location: "Karnal", features: "Associated with Karna of Mahabharata" },
        { name: "Damdama Lake", location: "Gurugram", features: "Boating, adventure activities" },
        { name: "Sultanpur Lake", location: "Gurugram", features: "National park and bird sanctuary; migratory birds, especially in winter" },
        { name: "Badkhal Lake", location: "Faridabad", features: "Picnic spot" },
        { name: "Aravalli Golf Course", location: "Faridabad", features: "Opened in 1966; acquired by Haryana Tourism in 1988; official sources disagree on the number of golf holes" },
        { name: "Sohna", location: "Gurugram", features: "Known for sulphur-rich hot-water springs and tourism in the Aravalli foothills" },
        { name: "Mountain Quail", location: "Morni Hills, Panchkula", features: "Eco-tourism spot" },
        { name: "Kingfisher Resort", location: "Ambala", features: "Health club, swimming pool, former British stable" },
        { name: "Tajewala-Hathnikund-Kalesar Complex", location: "Yamunanagar", features: "Landscape around Hathnikund Barrage and Kalesar forests; activities subject to local regulations" },
        { name: "Dabchick", location: "Hodal, Palwal", features: "Haryana Tourism resort with accommodation and a restaurant" },
        { name: "Chokhi Dhani", location: "Sonipat (independent verification pending)", features: "Cultural dining or village-tourism concept; current site identity and operation are not independently verified" }
    ];

    // Tourism Divisions
    const tourismDivisions = [
        { name: "Highway Tourism", description: "Highway stopovers and resorts along key routes, including Panipat, Karnal, Kurukshetra and Palwal" },
        { name: "Weekend Tourism", description: "Short-break destinations and urban leisure opportunities around major cities" },
        { name: "Heritage Tourism", description: "Historic gardens, palaces, forts and cultural sites in Pinjore, Ballabhgarh and southern Haryana" },
        { name: "Pilgrim Tourism", description: "Religious and pilgrimage destinations including Kurukshetra, Kaithal and Panchkula" },
        { name: "Eco Tourism", description: "Nature tourism including Morni Hills, Sultanpur National Park and Kalesar" }
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
                        <MapPin className="w-4 h-4" />
                        {language === "hindi" ? "हरियाणा पर्यटन — अध्ययन सामग्री" : "Haryana Tourism — Study Material"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा में" : "Tourism in"} <span className="text-orange-600 dark:text-orange-400">{language === "hindi" ? "पर्यटन" : "Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के धार्मिक स्थलों, ऐतिहासिक स्मारकों, आधुनिक पर्यटन केंद्रों, गुरुद्वारों, मस्जिदों, दरगाहों और पर्यटन परिसरों की संपूर्ण जानकारी"
                            : "Complete information about religious places, historical monuments, modern tourist centres, Gurudwaras, Mosques, Dargahs, and tourist complexes of Haryana"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Church className="w-4 h-4 text-orange-600" />
                            <span>{language === "hindi" ? "धार्मिक स्थल" : "Religious Places"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Castle className="w-4 h-4 text-orange-600" />
                            <span>{language === "hindi" ? "ऐतिहासिक स्मारक" : "Historical Monuments"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Hotel className="w-4 h-4 text-orange-600" />
                            <span>{language === "hindi" ? "42 पर्यटन परिसर (विभागीय संख्या)" : "42 Tourist Complexes (departmental figure)"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Sun className="w-4 h-4 text-orange-600" />
                            <span>{language === "hindi" ? "आधुनिक केंद्र" : "Modern Centres"}</span>
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
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            {language === "hindi"
                                ? "हरियाणा में प्राचीन तीर्थस्थलों, किलों, स्मारकों, उद्यानों और प्राकृतिक पर्यटन स्थलों की समृद्ध विरासत है। कुरुक्षेत्र धार्मिक परंपराओं में महाभारत और भगवद्गीता से जुड़ा है, जबकि पानीपत 1526, 1556 और 1761 के ऐतिहासिक युद्धों के लिए प्रसिद्ध है। लोहारू, माधोगढ़, बल्लभगढ़ और महेंद्रगढ़ क्षेत्र में ऐतिहासिक किले मिलते हैं। राज्य में धार्मिक, सांस्कृतिक, विरासत, प्राकृतिक और राजमार्ग पर्यटन के अवसर हैं।"
                                : "Haryana has a rich heritage of pilgrimage sites, forts, monuments, gardens and natural attractions. Kurukshetra is traditionally associated with the Mahabharata and the Bhagavad Gita, while Panipat is known for the historical battles of 1526, 1556 and 1761. Historic forts can be found in the Loharu, Madhogarh, Ballabhgarh and Mahendragarh areas. The state offers pilgrimage, heritage, cultural, nature and highway tourism."}
                        </p>
                        <div className="bg-orange-500/10 rounded-lg p-4">
                            <h3 className="font-semibold text-orange-600 mb-2">{language === "hindi" ? "हरियाणा पर्यटन निगम (HTC)" : "Haryana Tourism Corporation (HTC)"}</h3>
                            <p className="text-sm text-muted-foreground">
                                {language === "hindi"
                                    ? "राज्य में पर्यटन को बढ़ावा देने के लिए हरियाणा पर्यटन निगम लिमिटेड की स्थापना 1 मई 1974 को कंपनी अधिनियम, 1956 के तहत की गई थी। निगम पर्यटन परिसरों का संचालन और रखरखाव करता है। इसका पंजीकृत एवं मुख्य कार्यालय सेक्टर 17-बी, चंडीगढ़ में स्थित है।"
                                    : "Haryana Tourism Corporation Limited was incorporated on 1 May 1974 under the Companies Act, 1956 to promote tourism and operate tourist facilities. Its registered and head office is in Sector 17-B, Chandigarh."}
                            </p>
                            <p className="text-xs text-muted-foreground mt-3">
                                {language === "hindi" ? "स्रोत: " : "Sources: "}
                                <a href="https://haryanatourism.gov.in/tourism-corporation/" target="_blank" rel="noopener noreferrer" className="underline">{language === "hindi" ? "हरियाणा पर्यटन निगम" : "Haryana Tourism Corporation"}</a>
                                {" · "}
                                <a href="https://haryanatourism.gov.in/tourism-department/" target="_blank" rel="noopener noreferrer" className="underline">{language === "hindi" ? "पर्यटन विभाग" : "Tourism Department"}</a>
                            </p>
                        </div>
                    </div>

                    {/* Religious Places Section */}
                    <div className="bg-red-500/5 rounded-2xl p-6 md:p-8 border-2 border-red-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-red-500/30">
                                <Church className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-600">{language === "hindi" ? "प्रमुख धार्मिक स्थल" : "Major Religious Places in Haryana"}</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            {language === "hindi"
                                ? "हरियाणा में बड़ी संख्या में हिंदू मंदिर हैं जो महत्वपूर्ण तीर्थ स्थल भी हैं। भगवान कृष्ण द्वारा श्रीमद् भगवद गीता के पवित्र उपदेशों की भूमि होने के कारण, यह भूमि हिंदुओं द्वारा पूजनीय है। कई महत्वपूर्ण गुरुद्वारे और मस्जिदें भी हरियाणा में स्थित हैं।"
                                : "Haryana has a large number of Hindu temples that are important pilgrimage centres also. Being the land from where holy sermons of Shrimad Bhagavad Gita were given by Lord Krishna, the land is revered by Hindus. Many important Gurudwaras and Mosques are also located in Haryana."}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {religiousPlaces.slice(0, 10).map((place, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-red-600">{place.name}</h3>
                                    <p className="text-xs text-muted-foreground">{place.place}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{place.significance}</p>
                                </div>
                            ))}
                        </div>
                        <details className="mt-4">
                            <summary className="text-sm text-orange-600 cursor-pointer hover:text-orange-700">{language === "hindi" ? "और देखें..." : "View more..."}</summary>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                {religiousPlaces.slice(10).map((place, idx) => (
                                    <div key={idx} className="bg-card rounded-xl p-4 border">
                                        <h3 className="text-lg font-semibold text-red-600">{place.name}</h3>
                                        <p className="text-xs text-muted-foreground">{place.place}</p>
                                        <p className="text-sm text-muted-foreground mt-1">{place.significance}</p>
                                    </div>
                                ))}
                            </div>
                        </details>
                    </div>

                    {/* Gurudwaras Section */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/30">
                                <Building2 className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "प्रमुख गुरुद्वारे" : "Major Gurudwaras in Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {gurudwaras.map((gurudwara, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-blue-600">{gurudwara.name}</h3>
                                    <p className="text-xs text-muted-foreground">{gurudwara.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{gurudwara.significance}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mosques Section */}
                    <div className="bg-green-500/5 rounded-2xl p-6 md:p-8 border-2 border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/30">
                                <Landmark className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{language === "hindi" ? "प्रमुख मस्जिदें" : "Major Mosques in Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {mosques.map((mosque, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-green-600">{mosque.name}</h3>
                                    <p className="text-xs text-muted-foreground">{mosque.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{mosque.significance}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shrines and Dargahs Section */}
                    <div className="bg-purple-500/5 rounded-2xl p-6 md:p-8 border-2 border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-500/30">
                                <Heart className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-600">{language === "hindi" ? "दरगाहें और मज़ार" : "Shrines and Dargahs in Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {shrinesDargahs.map((shrine, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-purple-600">{shrine.name}</h3>
                                    <p className="text-xs text-muted-foreground">{shrine.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{shrine.significance}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mausoleums Section */}
                    <div className="bg-amber-500/5 rounded-2xl p-6 md:p-8 border-2 border-amber-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-500/30">
                                <Trophy className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-600">{language === "hindi" ? "मकबरे और समाधियाँ" : "Mausoleums and Samadhis in Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {mausoleums.map((maus, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-amber-600">{maus.name}</h3>
                                    <p className="text-xs text-muted-foreground">{maus.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{maus.significance}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Modern Tourist Centres Section */}
                    <div className="bg-teal-500/5 rounded-2xl p-6 md:p-8 border-2 border-teal-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-teal-500/30">
                                <Sun className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-teal-600">{language === "hindi" ? "आधुनिक पर्यटन केंद्र" : "Modern Tourist Centres in Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {modernTouristCentres.map((centre, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-teal-600">{centre.name}</h3>
                                    <p className="text-xs text-muted-foreground">{centre.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{centre.features}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tourist Destinations Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा के प्रमुख पर्यटन स्थल" : "Major Tourism Destinations in Haryana"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "पर्यटन स्थल" : "Tourist Spot"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "स्थान" : "Place"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "ऐतिहासिक वर्ष / संदर्भ" : "Historical Date / Context"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {touristDestinations.map((dest, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{dest.name}</td>
                                            <td className="border p-2">{dest.place}</td>
                                            <td className="border p-2">{dest.year}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">
                            {language === "hindi" ? "तालिका में वर्ष निर्माण, उद्घाटन, संरक्षण-स्थिति या मेले के आरंभ का हो सकता है; प्रत्येक के साथ उसका अर्थ दिया गया है। ‘—’ का अर्थ है कि सटीक वर्ष की पुष्टि नहीं हुई है।" : "The dates refer to construction, opening, protection status or the start of a festival, as specified. ‘—’ means the exact year was not independently verified."}
                        </p>
                    </div>

                    {/* Tourist Complexes Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Hotel className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "HTCL द्वारा विकसित रिसॉर्ट" : "Resorts Developed by HTCL"}</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            {language === "hindi"
                                ? "हरियाणा पर्यटन विभाग के आधिकारिक विवरण के अनुसार राज्य में 42 पर्यटन परिसर हैं। नीचे चुनिंदा परिसरों के स्थान दिए गए हैं; इनके सटीक उद्घाटन वर्ष विश्वसनीय स्रोत से पुष्टि न होने पर खाली रखे गए हैं।"
                                : "Haryana Tourism Department describes a network of 42 tourist complexes. The table lists selected resorts; opening years are left blank when no reliable, property-specific source was confirmed."}
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "रिसॉर्ट का नाम" : "Resort"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "स्थान" : "Place"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "उद्घाटन वर्ष (पुष्ट होने पर)" : "Opening Year (if verified)"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {touristResorts.map((resort, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{resort.name}</td>
                                            <td className="border p-2">{resort.place}</td>
                                            <td className="border p-2">{resort.year}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Tourism Divisions Section */}
                    <div className="bg-indigo-500/5 rounded-2xl p-6 md:p-8 border-2 border-indigo-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-500/30">
                                <MapPin className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-indigo-600">{language === "hindi" ? "पर्यटन के प्रकार (उदाहरण)" : "Types of Tourism (Examples)"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tourismDivisions.map((div, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-indigo-600">{div.name}</h3>
                                    <p className="text-sm text-muted-foreground">{div.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Haryana Tourism Policy 2008 */}
                    <div className="bg-pink-500/5 rounded-2xl p-6 md:p-8 border-2 border-pink-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-pink-500/30">
                                <BookOpen className="w-5 h-5 text-pink-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-pink-600">{language === "hindi" ? "हरियाणा पर्यटन नीति, 2008" : "Haryana Tourism Policy, 2008"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            {language === "hindi"
                                ? "हरियाणा में पर्यटन के विकास को गति देने के उद्देश्य से, राज्य सरकार ने एक पर्यटन नीति की घोषणा की। नई पर्यटन नीति पर्यटन क्षेत्र में निजी निवेश बढ़ाने के लिए अनुकूल वातावरण बनाने की परिकल्पना करती है।"
                                : "With the view to speed up development of tourism in Haryana, the State Government announced a Tourism Policy. The new Tourism Policy envisages creation of an environment conducive to increase the private investment in the tourism sector."}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                            <li>{language === "hindi" ? "पर्यटन को आर्थिक विकास के प्रमुख इंजन के रूप में बढ़ावा देना" : "To promote tourism as a major engine of economic growth"}</li>
                            <li>{language === "hindi" ? "रोहतक और फरीदाबाद में पर्यटन विकास परिषद और होटल प्रबंधन संस्थानों की स्थापना" : "Establishment of Council of Tourism Development and Hotel Management institutes in Rohtak and Faridabad"}</li>
                            <li>{language === "hindi" ? "जल, बिजली और परिवहन सुविधाएं प्रदान करके पर्यटन विकास में निजी क्षेत्र को प्रोत्साहित करना" : "Encouraging private sector in development of tourism"}</li>
                            <li>{language === "hindi" ? "हेरिटेज होटल, स्वास्थ्य क्लब, एडवेंचर आइलैंड्स, मनोरंजन पार्क विकसित करना" : "Developing heritage hotels, health clubs, adventure islands and entertainment parks"}</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा पर्यटन: तथ्य सारांश" : "Haryana Tourism: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">1974</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हरियाणा पर्यटन निगम की स्थापना" : "Haryana Tourism Corporation Established"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">42</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "पर्यटन परिसर" : "Tourist Complexes"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">1987</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सूरजकुंड शिल्प मेले की शुरुआत" : "First Surajkund Crafts Mela"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">1991</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सुल्तानपुर को राष्ट्रीय उद्यान का दर्जा" : "Sultanpur National Park Status"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "एकमात्र हिल स्टेशन (मोरनी)" : "Only Hill Station (Morni)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">1966</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "अरावली गोल्फ कोर्स खुला" : "Aravalli Golf Course Opened"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "प्रमुख युद्ध (पानीपत)" : "Major Battles (Panipat)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">2008</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हरियाणा पर्यटन नीति" : "Haryana Tourism Policy"}</p>
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
                            {language === "hindi" ? "हरियाणा पर्यटन के" : "Common"} <span className="text-orange-600">{language === "hindi" ? "बारे में सामान्य प्रश्न" : "Questions About Haryana Tourism"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के धार्मिक स्थलों, पर्यटन केंद्रों, पर्यटन परिसरों और पर्यटन नीति के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's religious places, tourist centres, tourist complexes, and tourism policy"}
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
                            {language === "hindi" ? "अपने हरियाणा पर्यटन ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Tourism?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-orange-600 hover:bg-orange-700">
                                {language === "hindi" ? "हरियाणा पर्यटन क्विज़ लें" : "Take Haryana Tourism Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/archaeological-sites" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "पुरातत्विक स्थल" : "Archaeological Sites of Haryana"}
                        </Link>
                        <Link href="/haryana-gk/art-crafts" className="text-orange-600 hover:text-orange-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: कला और शिल्प" : "Next Chapter: Art & Crafts"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा पर्यटन - संपूर्ण संदर्भ" : "Tourism in Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के धार्मिक स्थलों, ऐतिहासिक स्मारकों, आधुनिक पर्यटन केंद्रों, गुरुद्वारों, मस्जिदों, दरगाहों, मकबरों, पर्यटन परिसरों और पर्यटन नीति के बारे में व्यापक जानकारी प्रदान करता है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about religious places, historical monuments, modern tourist centres, Gurudwaras, Mosques, Dargahs, Mausoleums, tourist complexes, and tourism policy of Haryana. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "प्रमुख स्रोत: हरियाणा पर्यटन विभाग और जिला वेबसाइटें; धार्मिक मान्यताओं को इतिहास से अलग दर्शाया गया है।" : "Main sources: Haryana Tourism Department and district websites; religious traditions are distinguished from recorded history."}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}