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
            answerHindi: "हरियाणा पर्यटन निगम की स्थापना 1 मई, 1974 को कंपनी अधिनियम, 1956 के तहत एक पब्लिक लिमिटेड कंपनी के रूप में की गई थी। इसका मुख्यालय गुरुग्राम जिले में स्थित है।",
            answerEnglish: "Haryana Tourism Corporation was established on 1st May, 1974 as a Public Limited Company under the Companies Act, 1956. Its head office is located in Gurugram district."
        },
        {
            questionHindi: "हरियाणा का एकमात्र हिल स्टेशन कौन सा है?",
            questionEnglish: "Which is the only hill station in Haryana?",
            answerHindi: "मोरनी हिल्स हरियाणा का एकमात्र हिल स्टेशन है, जो अंबाला जिले में स्थित है। यह भौगोलिक रूप से शिवालिक पहाड़ियों के बाहरी किनारे पर स्थित है।",
            answerEnglish: "Morni Hills is the only hill station in Haryana, situated in Ambala district. Geographically, it lies on the outer fringe of the Shiwalik hills."
        },
        {
            questionHindi: "यादविंद्र गार्डन कहाँ स्थित है और इसे किसने बनवाया था?",
            questionEnglish: "Where is Yadavindra Garden located and who built it?",
            answerHindi: "यादविंद्र गार्डन पंचकूला जिले के पिंजौर में स्थित है। इसे 17वीं शताब्दी में औरंगजेब द्वारा नियुक्त वास्तुकार फिदाई खान ने बनवाया था। इसे मुगल गार्डन के नाम से भी जाना जाता है।",
            answerEnglish: "Yadavindra Garden is located in Pinjore, Panchkula district. It was built in the 17th century by Fidai Khan, an architect appointed by Aurangzeb. It is also known as Mughal Garden."
        },
        {
            questionHindi: "ज्योतिसर सरोवर का क्या महत्व है?",
            questionEnglish: "What is the significance of Jyotisar Sarovar?",
            answerHindi: "ज्योतिसर कुरुक्षेत्र का सबसे पवित्र स्थल है। यहाँ एक पवित्र बरगद के पेड़ के नीचे भगवान कृष्ण ने अर्जुन को महाभारत युद्ध शुरू होने से पहले भगवद गीता का उपदेश दिया था। इसे गीता स्थली भी कहा जाता है।",
            answerEnglish: "Jyotisar is the most revered place of Kurukshetra. It is here under the holy banyan tree that Lord Krishna delivered the eternal message of Bhagwad Gita to Arjuna before the commencement of the Battle of Mahabharata. It is also called Geeta Stahli."
        },
        {
            questionHindi: "हरियाणा का 'ताजमहल' किसे कहा जाता है?",
            questionEnglish: "Which monument is called the 'Taj Mahal of Haryana'?",
            answerHindi: "शेख चिल्ली का मकबरा, जो कुरुक्षेत्र जिले के थानेसर में स्थित है, हरियाणा के ताजमहल के रूप में जाना जाता है। यह संगमरमर से बना एक सुंदर स्मारक है।",
            answerEnglish: "Sheikh Chilli's tomb, located in Thanesar, Kurukshetra district, is known as the Taj Mahal of Haryana. It is a beautiful monument made of marble."
        },
        {
            questionHindi: "सूरजकुंड का निर्माण किसने करवाया था?",
            questionEnglish: "Who built Surajkund?",
            answerHindi: "सूरजकुंड का निर्माण तोमर वंश के राजा सूरजमाल ने करवाया था। यह फरीदाबाद में स्थित है और इसका आकार उगते सूर्य जैसा है। यहाँ प्रतिवर्ष अंतर्राष्ट्रीय शिल्प मेले का आयोजन होता है।",
            answerEnglish: "Surajkund was originally constructed by King Surajmal of Tomar Dynasty. It is situated in Faridabad and its shape resembles the rising sun. The annual International Crafts Fair is held here."
        },
        {
            questionHindi: "हरियाणा में कितने पर्यटन परिसर हैं?",
            questionEnglish: "How many tourist complexes are there in Haryana?",
            answerHindi: "हरियाणा सरकार ने पूरे राज्य में 44 पर्यटन परिसरों का नेटवर्क स्थापित किया है। ये परिसर राज्य से गुजरने वाले राजमार्गों के साथ रणनीतिक बिंदुओं पर स्थापित किए गए हैं।",
            answerEnglish: "The Government of Haryana has set up a network of 44 tourist complexes all over the state. Tourist complexes have been set at strategic points along the highways passing through the state."
        },
        {
            questionHindi: "पिंजौर में कौन से प्रमुख त्योहार मनाए जाते हैं?",
            questionEnglish: "Which major festivals are celebrated in Pinjore?",
            answerHindi: "पिंजौर में तीन प्रमुख वार्षिक त्योहार मनाए जाते हैं - अप्रैल में पिंजौर बैसाखी महोत्सव, जुलाई में पिंजौर आम महोत्सव, और दिसंबर में पिंजौर हेरिटेज महोत्सव।",
            answerEnglish: "Three major annual festivals are celebrated in Pinjore - Pinjore Baisakhi Festival in April, Pinjore Mango Mela in July, and Pinjore Heritage Festival in December."
        }
    ];

    // Tourist Complexes/Resorts Data
    const touristResorts = [
        { name: "Blue Jay", place: "Panipat", year: "1972" },
        { name: "Parakeet", place: "Kurukshetra", year: "1972" },
        { name: "Bulbul", place: "Jind", year: "1972" },
        { name: "Jungle Babbler", place: "Rewari", year: "1974" },
        { name: "Dabchick", place: "Palwal", year: "1974" },
        { name: "Barbet, Saras, Shama", place: "Gurugram", year: "1974" },
        { name: "Myna", place: "Rohtak", year: "1975" },
        { name: "Skylark", place: "Panipat", year: "1976" },
        { name: "Surkhab", place: "Sirsa", year: "1980" },
        { name: "Sandpiper", place: "Rewari", year: "1982" },
        { name: "Magpie, Rajhans, Sunbird", place: "Faridabad", year: "1982" },
        { name: "Baya", place: "Bhiwani", year: "1983" },
        { name: "Grey Pelican", place: "Yamunanagar", year: "1984" },
        { name: "Koel", place: "Kaithal", year: "1984" },
        { name: "Kingfisher", place: "Ambala", year: "1986" },
        { name: "Neelkanthi", place: "Kurukshetra", year: "1987" },
        { name: "Mountain Quail", place: "Panchkula", year: "1987" },
        { name: "Gauriyya", place: "Jhajjar", year: "1990" },
        { name: "Jatayu Yatrika", place: "Panchkula", year: "1993" },
        { name: "Papiha", place: "Fatehabad", year: "1994" },
        { name: "Black bird", place: "Hansi", year: "1999" },
        { name: "Anjan", place: "Pehowa", year: "1999" },
        { name: "Highway Golf Club", place: "Uchana", year: "1999" },
        { name: "Ethnic Indian", place: "Rai (Sonipat)", year: "2000" },
        { name: "Nahar Singh Palace", place: "Ballabhgarh", year: "2003" },
        { name: "Adventure Resort", place: "Tikkar Tal (Panchkula)", year: "2003" }
    ];

    // Tourist Destinations Developed by HTCL
    const touristDestinations = [
        { name: "Aravalli Golf Course", place: "Faridabad", year: "1966" },
        { name: "Yadavindra Gardens", place: "Pinjore (Panchkula)", year: "1967" },
        { name: "Badkhal Lake", place: "Faridabad", year: "1969" },
        { name: "Sultanpur Lake", place: "Gurugram", year: "1972" },
        { name: "Karna Lake", place: "Karnal", year: "1972" },
        { name: "Tilyar Lake", place: "Rohtak", year: "1973" },
        { name: "Surajkund", place: "Faridabad", year: "1988" },
        { name: "Damdama Lake", place: "Gurugram", year: "1989" },
        { name: "Chokhi Dhani", place: "Sonipat", year: "-" }
    ];

    // Religious Places Data
    const religiousPlaces = [
        { name: "Jyotisar Sarovar", place: "Kurukshetra", significance: "Geeta Stahli - Lord Krishna preached Bhagavad Gita" },
        { name: "Brahmasarovar", place: "Thanesar, Kurukshetra", significance: "Built by Raja Kuru, mentioned in Al-Biruni's Kitabul-Hind" },
        { name: "Sthaneshwar Mahadev Temple", place: "Thanesar", significance: "Built by King Pushyabhuti, Pandavas prayed here" },
        { name: "Bhadrakali Shaktipeeth", place: "Kurukshetra", significance: "One of 51 Shaktipeeths, Sati's ankle fell here" },
        { name: "Pehowa", place: "Kurukshetra", significance: "Prithudaka - equal significance to Gaya for Pind Daan" },
        { name: "Dukh Bhanjan Mahadev Temple", place: "Kurukshetra", significance: "People worship for peace and prosperity" },
        { name: "Chandi Devi Temple", place: "Panchkula", significance: "Siddh Peeth, Chandigarh named after this temple" },
        { name: "Mata Mansa Devi Temple", place: "Panchkula", significance: "One of prominent Shakti temples of North India" },
        { name: "Bhimav Devi Temple", place: "Pinjore, Panchkula", significance: "Khajuraho of North India for erotic sculptures" },
        { name: "Bhuteshwara Temple (Rani Talab)", place: "Jind", significance: "Built by ruler Ragbhir Singh, large water tank around" },
        { name: "Navagraha Kund (Chhoti Kashi)", place: "Kaithal", significance: "9 kundas built by Lord Krishna" },
        { name: "Gyarah Rudri Shiva Temple", place: "Kaithal", significance: "11 Rudras established by Lord Krishna after Mahabharata war" },
        { name: "Modewala Temple", place: "Narnaul, Mahendragarh", significance: "Dedicated to Lord Shiva, fair during Rakhi" },
        { name: "Chamunda Devi Temple", place: "Narnaul, Mahendragarh", significance: "84 pillars with Ashokan era inscriptions" },
        { name: "Ancient Shri Mata Sheetla Devi Temple", place: "Gurugram", significance: "Built by Maharaja of Bharatpur in 1650" },
        { name: "Bhawani Amba Temple", place: "Ambala", significance: "City Ambala named after Devi Amba" },
        { name: "Karneshwar Temple", place: "Karnal", significance: "Associated with Karna of Mahabharata, 5-headed Shiva idol" },
        { name: "Panchvati Temple", place: "Palwal", significance: "Pandavas stayed here during Agyatvas" },
        { name: "Dauji Temple", place: "Palwal", significance: "Dedicated to Balaram, Krishna's elder brother" },
        { name: "Adi Badri Narayan Temple", place: "Yamunanagar", significance: "Built by Adi Shankaracharya in 8th century" }
    ];

    // Gurudwaras Data
    const gurudwaras = [
        { name: "Gurudwara Mastgarh", location: "Shahabad Markanda, Ambala", significance: "Originally a mosque built by Shah Jahan in 1630" },
        { name: "Gurudwara Kapal Mochan", location: "Bilaspur, Yamunanagar", significance: "Dedicated to Guru Gobind Singh, weapons washed in Rinnochan Sarovar" },
        { name: "Gurudwara Dhamtan Sahib", location: "Jind", significance: "Dedicated to 9th Sikh Guru, Guru Tegh Bahadur" },
        { name: "Gurudwara Manji Sahib", location: "Kaithal", significance: "Named after Tarkhan Singh Manji who invited Guru Tegh Bahadur" },
        { name: "Gurudwara Neem Sahib", location: "Kaithal", significance: "Guru Tegh Bahadur meditated under neem tree, cured devotee" },
        { name: "Badshahi Bagh Sahib Gurudwara", location: "Ambala", significance: "Guru Gobind Singh's visit in 1670, famous sparrow-hawk story" },
        { name: "Gurudwara Lakhan Majra", location: "Rohtak", significance: "Dedicated to Guru Tegh Bahadur, stayed here for 13 days" },
        { name: "Gurudwara Navin Patshahi", location: "Kurukshetra", significance: "Dedicated to 9th Sikh Guru, Tegh Bahadur" },
        { name: "Gurudwara Shri Damdama Sahib", location: "Siana-Saidan", significance: "Preserves wooden shoes given to Guru Gobind Singh" },
        { name: "Gurudwara Jora Sahib", location: "Siana-Saidan", significance: "Named after pair of shoes (Jora) given to Guru Gobind Singh" }
    ];

    // Mosques Data
    const mosques = [
        { name: "Kabuli Bagh Masjid", location: "Panipat", significance: "Built by Babur in 1526 AD to commemorate victory over Ibrahim Lodhi" },
        { name: "Jama Masjid", location: "Panipat", significance: "Built by Humayun in 1531, largest mosque in Panipat" },
        { name: "Lal Masjid", location: "Rohtak", significance: "Built by Haji Aashiq Ali in 1939, made of red sandstone" },
        { name: "Humayun Mosque", location: "Fatehabad, Hisar", significance: "Humayun offered Friday Namaz here while going to Amarcot" },
        { name: "Mosque of Ali Vardi Khan", location: "Gurugram", significance: "Built in 18th century by Nawab Ali Vardi Khan" },
        { name: "Shishewali Masjid", location: "Rohtak", significance: "Entrance made of white marble, 14 pillars in corridor" },
        { name: "Dini Masjid (Adina Masjid)", location: "Rohtak", significance: "Believed to be a Jain temple earlier, later turned into mosque by Aurangzeb" }
    ];

    // Shrines and Dargahs Data
    const shrinesDargahs = [
        { name: "Dargah Naugaja Peer", location: "Shahabad, Kurukshetra", significance: "Shrine of Baba Naugaja Peer (Sayed Ibrahim Badshah)" },
        { name: "Shrine of Bu Ali Shah Qalandar", location: "Panipat", significance: "Built by Mahabat Khan, Urs Mela held annually" },
        { name: "Char Qutab Shrine", location: "Hansi, Hisar", significance: "Tombs of four Sufi Saints, large mosque by Feroz Shah Tughlaq" },
        { name: "Shrine of Sheikh Musa", location: "Palla, Nuh", significance: "700 years old, shaking minarets that vibrate synchronously" },
        { name: "Shrine of Mira Nau Bahaar", location: "Guhla-Cheeka, Kaithal", significance: "1000 years old, fair held in June" },
        { name: "Shrine of Hamza Peer", location: "Dharasu, Narnaul", significance: "Tomb of Hamza Peer, disciple of Hazrat Shamsuddin Auliya" },
        { name: "Tomb of Peer Baba Shah Mir", location: "Fatehabad", significance: "Built by Feroz Shah Tughlaq in white marble" }
    ];

    // Mausoleums/Samadhis Data
    const mausoleums = [
        { name: "Sheikh Chilli's Tomb", location: "Thanesar, Kurukshetra", significance: "Known as Taj Mahal of Haryana, built by Dara Shikoh" },
        { name: "Ibrahim Lodhi's Tomb", location: "Panipat", significance: "First Battle of Panipat, built by Britishers in 1867" },
        { name: "Razia Sultan's Tomb", location: "Kaithal", significance: "Tomb of first female Muslim ruler of Delhi Sultanate" },
        { name: "Khwaja Khizr's Tomb", location: "Sonipat", significance: "Built by Ibrahim Lodhi in 1522-24 AD, red sandstone" },
        { name: "Ibrahim Khan Suri's Tomb", location: "Narnaul, Mahendragarh", significance: "Built by Sher Shah Suri for his grandfather" },
        { name: "Shah Wilayat's Tomb", location: "Narnaul, Mahendragarh", significance: "Built during Feroz Shah Tughlaq's tenure" },
        { name: "Altaf Hussain Hali's Tomb", location: "Panipat", significance: "Mausoleum of famous Urdu scholar" },
        { name: "Muqarrab Khan's Tomb", location: "Panipat", significance: "Physician in Jahangir's court" }
    ];

    // Modern Tourist Centres Data
    const modernTouristCentres = [
        { name: "Surajkund", location: "Faridabad", features: "Annual Crafts Fair, Sun Temple ruins, Mayur Lake" },
        { name: "Yadavindra Garden (Pinjore Gardens)", location: "Pinjore, Panchkula", features: "Mughal Garden style, 4 floors, Baisakhi Festival, Mango Mela" },
        { name: "Morni Hills", location: "Ambala/Panchkula", features: "Only hill station in Haryana, Shiwalik hills, eco-tourism" },
        { name: "Tilyar Lake", location: "Rohtak", features: "Man-made lake, 123 acres, zoo, cafeteria, picnic lawns" },
        { name: "Karna Lake", location: "Karnal", features: "Associated with Karna of Mahabharata" },
        { name: "Damdama Lake", location: "Gurugram", features: "Boating, adventure activities" },
        { name: "Sultanpur Lake", location: "Gurugram", features: "Bird sanctuary, migratory birds" },
        { name: "Badkhal Lake", location: "Faridabad", features: "Picnic spot" },
        { name: "Aravalli Golf Course", location: "Faridabad", features: "9-hole golf course, modeled on US Stephan Golf Course" },
        { name: "Sohna", location: "Gurugram", features: "Hot springs (kunds), Vintage car rally in February" },
        { name: "Mountain Quail", location: "Morni Hills, Panchkula", features: "Eco-tourism spot" },
        { name: "Kingfisher Resort", location: "Ambala", features: "Health club, swimming pool, former British stable" },
        { name: "Tajewala-Hathnikund-Kalesar Complex", location: "Yamunanagar", features: "Fishing, camping, rafting, Sal forest reserve" },
        { name: "Dabchik", location: "Faridabad", features: "Resort, entertainment park, camel rides" },
        { name: "Chokhi Dhani", location: "Sonipat", features: "Village tourism, ethnic food and culture" }
    ];

    // Tourism Divisions
    const tourismDivisions = [
        { name: "Highway Tourism", description: "Kurukshetra, Karnal, Panipat, Sonipat, Palwal - 65 lakh tourists annually" },
        { name: "Weekend Tourism", description: "Faridabad, Rohtak, Gurugram, Hisar, Panchkula - for business class" },
        { name: "Heritage Tourism", description: "Pinjore, Ballabhgarh, Rewari-Mahendragarh-Madhogarh Circuit" },
        { name: "Pilgrim Tourism", description: "Kurukshetra, Kaithal, Panchkula - Kurukshetra as international centre" },
        { name: "Eco Tourism", description: "Morni Hills, Sultanpur, Kalesar complex" }
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
                        {language === "hindi" ? "पर्यटन - हरियाणा सरकार" : "Tourism - Government of Haryana"}
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
                            <span>{language === "hindi" ? "44 पर्यटन परिसर" : "44 Tourist Complexes"}</span>
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
                                ? "ऐतिहासिक रूप से, हरियाणा एक महत्वपूर्ण स्थान है जहाँ विभिन्न शासकों द्वारा बनाए गए विभिन्न ऐतिहासिक स्थल मौजूद हैं। कुरुक्षेत्र, जो महाभारत का स्थल है, ने महाभारत के महाकाव्य युद्ध और पानीपत के युद्ध को देखा है। निस्संदेह, राज्य धार्मिक और ऐतिहासिक स्थलों से भरा हुआ है। लोहारू, रामपुर, मधोगढ़, बल्लभगढ़ और महेंद्रगढ़ में कई प्राचीन किले हैं। तरावड़ी, पानीपत और कुरुक्षेत्र युद्धों के लिए प्रसिद्ध हैं।"
                                : "Historically, Haryana is an important place where various historical places made by different rulers exist at present. Kurukshetra being the place of Mahabharata has witnessed the epic Battle of Mahabharata and the Battle of Panipat. No doubt, the state is full of religious and historical places. Loharu, Rampur, Madhogarh, Ballabhgarh and Mahendragarh have many ancient forts. Tarawadi, Panipat and Kurukshetra are famous for battles."}
                        </p>
                        <div className="bg-orange-500/10 rounded-lg p-4">
                            <h3 className="font-semibold text-orange-600 mb-2">{language === "hindi" ? "हरियाणा पर्यटन निगम (HTC)" : "Haryana Tourism Corporation (HTC)"}</h3>
                            <p className="text-sm text-muted-foreground">
                                {language === "hindi"
                                    ? "राज्य में पर्यटन को बढ़ावा देने के लिए, राज्य सरकार ने 1 मई, 1974 को कंपनी अधिनियम, 1956 के तहत हरियाणा पर्यटन निगम को एक पब्लिक लिमिटेड कंपनी के रूप में गठित किया। यह मौजूदा केंद्रों का प्रबंधन, रखरखाव करता है और नए पर्यटन स्थलों का विकास करता है। इसका मुख्यालय गुरुग्राम जिले में स्थित है।"
                                    : "In order to boost tourism in state, State Government constituted Haryana Tourism Corporation as a Public Limited Company under the Companies Act, 1956 on 1st May, 1974. It manages, maintains the existing centres and develops new tourist places. Its head office is located in Gurugram district."}
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
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "HTCL द्वारा विकसित पर्यटन स्थल" : "Tourist Destinations Developed by HTCL"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "पर्यटन स्थल" : "Tourist Spot"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "स्थान" : "Place"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "स्थापना वर्ष" : "Year of Formation"}</th>
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
                                ? "हरियाणा सरकार ने पूरे राज्य में 44 पर्यटन परिसरों का नेटवर्क स्थापित किया है। राज्य से गुजरने वाले राजमार्गों के साथ रणनीतिक बिंदुओं पर पर्यटन परिसर स्थापित किए गए हैं।"
                                : "The Government of Haryana has set up a network of 44 tourist complexes all over the state. Tourist complexes have been set at strategic points along the highways passing through the state."}
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "रिसॉर्ट का नाम" : "Name"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "स्थान" : "Place"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "वर्ष" : "Year"}</th>
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
                            <h2 className="text-2xl font-bold text-indigo-600">{language === "hindi" ? "पर्यटन प्रभाग" : "Tourism Divisions"}</h2>
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
                            <div className="text-3xl font-bold text-orange-600 mb-2">44</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "पर्यटन परिसर" : "Tourist Complexes"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">65+ लाख</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "वार्षिक पर्यटक (हाईवे)" : "Annual Tourists (Highway)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">51</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "शक्तिपीठों में से एक" : "One of 51 Shaktipeeths"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "एकमात्र हिल स्टेशन (मोरनी)" : "Only Hill Station (Morni)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">37 ft</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "रामगढ़ किले के मुख्य द्वार की ऊँचाई" : "Ramgarh Fort Main Gate Height"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "प्रमुख युद्ध (पानीपत)" : "Major Battles (Panipat)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "पर्यटन प्रभाग" : "Tourism Divisions"}</p>
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
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और पर्यटन अभिलेखों से स्रोतित" : "Information sourced from official Government of Haryana publications and tourism records"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}