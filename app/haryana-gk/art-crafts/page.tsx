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
    Castle,
    Palette,
    Scissors,
    Brush,
    Crown,
    Table,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaArchitectureArtCraftsPage() {
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
            questionHindi: "हरियाणा का 'ताजमहल' किसे कहा जाता है?",
            questionEnglish: "Which monument is called the 'Taj Mahal of Haryana'?",
            answerHindi: "शेख चिल्ली का मकबरा, जो कुरुक्षेत्र जिले के थानेसर में स्थित है, हरियाणा के ताजमहल के रूप में जाना जाता है। यह संगमरमर, लाल बलुआ पत्थर, ईंटों, चूना पत्थर और रंगीन टाइलों से बना है।",
            answerEnglish: "Sheikh Chilli's Tomb, located in Thanesar, Kurukshetra district, is known as the Taj Mahal of Haryana. It is built in marble, red sandstone, bricks, limestone and coloured tiles."
        },
        {
            questionHindi: "हरियाणा में फुलकारी शॉल कहाँ बुनी जाती है?",
            questionEnglish: "Where is Phulkari shawl woven in Haryana?",
            answerHindi: "फुलकारी शॉल ग्रामीण हरियाणा में विशेष रूप से जींद, कैथल, फतेहाबाद और अंबाला जिलों में महिलाओं द्वारा बुनी जाती है। इसका अर्थ है 'फूलों का काम' और यह कश्मीरी शॉल के समान है।",
            answerEnglish: "Phulkari shawl is woven by women in rural Haryana specially in Jind, Kaithal, Fatehabad and Ambala districts. Its meaning is 'work of flower' and it is similar to Kashmiri shawls."
        },
        {
            questionHindi: "हरियाणा का सबसे प्राचीन बौद्ध स्तूप कौन सा है?",
            questionEnglish: "Which is the most ancient Buddhist Stupa in Haryana?",
            answerHindi: "चनेटी स्तूप, जो यमुनानगर जिले में स्थित है, हरियाणा का सबसे प्राचीन धार्मिक भवन है। इसका निर्माण मौर्य शासक अशोक काल में किया गया था।",
            answerEnglish: "Chaneti Stupa located in Yamunanagar district is the most ancient religious building in Haryana. It was constructed during the Mauryan ruler Ashoka period."
        },
        {
            questionHindi: "हरियाणा का पहला नियोजित शहर कौन सा है?",
            questionEnglish: "Which is the first planned city of Haryana?",
            answerHindi: "करनाल हरियाणा का पहला शहर है जो पूर्व-नियोजित और आधुनिक तकनीक पर बना है। चंडीगढ़ भारत का पहला नियोजित शहर है, जिसे फ्रांसीसी वास्तुकार ले कोर्बुसीयर द्वारा डिजाइन किया गया था।",
            answerEnglish: "Karnal is the first city in Haryana which is formed on a pre-planned and modern technique. Chandigarh is the first planned city of India, designed by French architect Le Corbusier."
        },
        {
            questionHindi: "सांझी लोक कला क्या है?",
            questionEnglish: "What is Sanjhi folk art?",
            answerHindi: "सांझी एक सुंदर ग्रामीण कला है जो हरियाणा के जाट गांवों में पाई जाती है। अश्विन-शुक्ल प्रतिपदा के पहले दिन, युवा लड़कियां और ग्रामीण महिलाएं मिट्टी और गोबर से दीवारों पर देवी सांझी की छवियां बनाती हैं।",
            answerEnglish: "Sanjhi is a beautiful rural art form found in Jat villages of Haryana. On the first day of Ashwin-Shukla Pratipada, young girls and village women adorn their walls with images of Goddess Sanjhi made with clay and cow dung."
        },
        {
            questionHindi: "हरियाणा में पुंजा दरी किस शहर के लिए प्रसिद्ध है?",
            questionEnglish: "Which city is famous for Punja durries in Haryana?",
            answerHindi: "पानीपत हरियाणा में दरी निर्माण का केंद्र है और इसे 'बुनकरों का शहर' (City of Weavers) के नाम से भी जाना जाता है। पुंजा दरी हर घर में आम होती है और इन पर विभिन्न डिजाइन बनाए जाते हैं।",
            answerEnglish: "Panipat is the hub of durries manufacturing in Haryana and is also known as 'City of Weavers'. Punja durries are common in every household and are woven into various designs."
        },
        {
            questionHindi: "हरियाणा में लकड़ी और बांस शिल्प के मुख्य केंद्र कौन से हैं?",
            questionEnglish: "Which are the main centres of wood and bamboo crafts in Haryana?",
            answerHindi: "भिवानी, महेंद्रगढ़, रोहतक और पंचकूला हरियाणा में लकड़ी और बांस शिल्प के महत्वपूर्ण केंद्र हैं। यहाँ हाथ के पंखे (कुंदलदार पंखी) और बांस की चटाईयाँ बनाई जाती हैं।",
            answerEnglish: "Bhiwani, Mahendragarh, Rohtak and Panchkula are important centres of wood and bamboo crafts in Haryana. Hand fans (Kundaladar Pakkhi) and bamboo curtains are made here."
        },
        {
            questionHindi: "हरियाणा में चांदी की करधनी कहाँ प्रसिद्ध है?",
            questionEnglish: "Where is silver waist belt famous in Haryana?",
            answerHindi: "गुरुग्राम और सिरसा हरियाणा में आभूषण बनाने के महत्वपूर्ण केंद्र हैं। चांदी की करधनी (सिल्वर वेस्ट बेल्ट) जो सख्त चौड़ी पट्टियों से बनी होती है, राज्य में बहुत प्रसिद्ध है।",
            answerEnglish: "Gurugram and Sirsa are important places of jewellery making in Haryana. Silver waist belts made with stiff broad bands are very famous in the state."
        }
    ];

    // Architecture Periods Data
    const architecturePeriods = [
        {
            period: "Ancient Architecture",
            periodHindi: "प्राचीन वास्तुकला",
            features: "Rohtak city was 12 Yojan long and 7 Yojan wide with 62 doors. Multi-storeyed building in Sugh (Yamunanagar). Nar-Narayana cave in Yamunanagar is best example.",
            featuresHindi: "रोहतक शहर 12 योजन लंबा और 7 योजन चौड़ा था जिसमें 62 द्वार थे। यमुनानगर में सुघ में बहुमंजिला इमारत। यमुनानगर में नर-नारायण गुफा सबसे अच्छा उदाहरण है।"
        },
        {
            period: "Medieval Architecture",
            periodHindi: "मध्यकालीन वास्तुकला",
            features: "Gujri Mahal in Hisar (1354 AD) built by Feroz Shah Tughlaq. Jal Mahal in Narnaul (1591 AD) built by Shah Quli Khan. Rang Mahal at Buria (1630 AD) built without wood.",
            featuresHindi: "हिसार में गुजरी महल (1354 ई.) फिरोज शाह तुगलक द्वारा निर्मित। नारनौल में जल महल (1591 ई.) शाह कुली खान द्वारा निर्मित। बुड़िया में रंग महल (1630 ई.) बिना लकड़ी के निर्मित।"
        },
        {
            period: "British & Modern Architecture",
            periodHindi: "ब्रिटिश एवं आधुनिक वास्तुकला",
            features: "Karnal first pre-planned city. Chandigarh designed by Le Corbusier. Open Hand Monument by Le Corbusier. Birla Temple (Gita Mandir) in Kurukshetra (1952).",
            featuresHindi: "करनाल पहला पूर्व-नियोजित शहर। चंडीगढ़ ले कोर्बुसीयर द्वारा डिजाइन किया गया। ओपन हैंड मॉन्यूमेंट ले कोर्बुसीयर द्वारा। कुरुक्षेत्र में बिरला मंदिर (गीता मंदिर) 1952 में।"
        }
    ];

    // Famous Buildings Data
    const famousBuildings = [
        { name: "Chaneti Stupa", location: "Yamunanagar", period: "Ashoka Period", features: "20m height, baked bricks, spherical structure, Akbari style" },
        { name: "Gujri Mahal", location: "Hisar", period: "1354 AD", features: "Built by Feroz Shah Tughlaq for Gujri Rani, black stone" },
        { name: "Jal Mahal", location: "Narnaul, Mahendragarh", period: "1591 AD", features: "Shah Quli Khan, red & yellow sandstone, Akbari style" },
        { name: "Rang Mahal", location: "Buria, Yamunanagar", period: "1630 AD", features: "Three-storeyed, no wood used, beautiful paintings" },
        { name: "Shish Mahal", location: "Farrukhnagar, Gurugram", period: "1711 AD", features: "Faujdar Khan, stone, slate and lime" },
        { name: "Lat Masjid", location: "Hisar", period: "14th Century AD", features: "Feroz Shah Tughlaq, L-shaped lake, Ashokan pillar" },
        { name: "Kabuli Bagh Mosque", location: "Panipat", period: "1527 AD", features: "Built by Babur after First Battle of Panipat, named after Kabuli Begam" },
        { name: "Sheikh Chilli's Tomb", location: "Thanesar, Kurukshetra", period: "1650 AD", features: "Taj Mahal of Haryana, Dara Shukoh, marble & red sandstone" },
        { name: "Nahar Singh Palace", location: "Ballabhgarh, Faridabad", period: "1739 AD", features: "Sandstone, heritage site" },
        { name: "Birbal ka Chhatta", location: "Narnaul", period: "17th Century AD", features: "Rai Mukundas, also known as Palace of Mukundas" },
        { name: "Kos Minar", location: "Ambala", period: "1540 AD", features: "Sher Shah Suri, erected at every Kos" }
    ];

    // Sculptures Data
    const sculptures = [
        { name: "Yaksha-Yakshini", location: "Palwal, Bhadas, Hathin, Faridabad", period: "Kushan Period (2nd Century CE)", material: "Red sandstone" },
        { name: "Statue on Sun Pillar", location: "Ameen, Thanesar", period: "Kushan Period", material: "Resembles Bharhut Sanchi Stupa" },
        { name: "Statue of Buddha", location: "Bahmanwas (Rohtak), Naurangabad (Bhiwani)", period: "Kushan Period", material: "Mathura School of Art influence" },
        { name: "Statue of Sun God", location: "Agroha (Hisar)", period: "Gupta Period", material: "Represents reality" },
        { name: "Statue of Lord Shiva", location: "Barwala (Hisar), Aurangabad", period: "Gupta Period", material: "Red stone" },
        { name: "Statue of Lord Vishnu", location: "Mohanbadi (Rohtak)", period: "Gupta Period", material: "-" },
        { name: "Vishnu lying on Sheshnag", location: "Fazilpur (Sonipat)", period: "-", material: "-" },
        { name: "Statue of Balram", location: "Rohtak", period: "-", material: "-" },
        { name: "Jain Sculptures", location: "Hansi and Rania (Sirsa)", period: "10th Century AD", material: "-" }
    ];

    // Painting Styles Data
    const paintingStyles = [
        {
            style: "Rajput Style",
            styleHindi: "राजपूत शैली",
            features: "Depicts Ramayana epic. Examples: Maharaja Tej Singh palace in Mirpur, Asthal Bohar paintings. Influence seen in Shiva temples of Panchkula, Pinjore, Kaithal temples.",
            featuresHindi: "रामायण महाकाव्य को दर्शाती है। उदाहरण: मिरपुर में महाराजा तेज सिंह महल, अष्टल बोहर पेंटिंग। पंचकूला, पिंजौर, कैथल के शिव मंदिरों में प्रभाव देखा जाता है।"
        },
        {
            style: "Mughal Style",
            styleHindi: "मुगल शैली",
            features: "Evolved from Persian miniature painting. Dominated by green, red, pink, blue, orange colours. Examples: Rohtak and Kaithal temples, Samadhis in Jagadhri.",
            featuresHindi: "फारसी लघु चित्रकला से विकसित। हरा, लाल, गुलाबी, नीला, नारंगी रंगों का प्रभुत्व। उदाहरण: रोहतक और कैथल के मंदिर, जगाधरी में समाधियाँ।"
        },
        {
            style: "Mural Style",
            styleHindi: "म्यूरल शैली",
            features: "Made on walls or ceilings. Examples: Queen Rani Chand Kaur's Haveli, Lord Ram Radha temple, Baba Nath's temple at Pehowa, Bhadra Kali temple in Kurukshetra.",
            featuresHindi: "दीवारों या छतों पर बनाई जाती है। उदाहरण: रानी चंद कौर की हवेली, लॉर्ड राम राधा मंदिर, पेहोवा में बाबा नाथ का मंदिर, कुरुक्षेत्र में भद्रकाली मंदिर।"
        }
    ];

    // Crafts Data
    const crafts = [
        {
            name: "Phulkari Shawl",
            nameHindi: "फुलकारी शॉल",
            meaning: "Work of flower",
            locations: "Jind, Kaithal, Fatehabad, Ambala",
            features: "Similar to Kashmiri shawls, embroidered with birds, animals, flowers, human figures"
        },
        {
            name: "Bagh Shawl",
            nameHindi: "बाग शॉल",
            meaning: "Garden",
            locations: "Haryana",
            features: "Intricate embroidery, geometric patterns, green colour cloth, designs of elephants, houses, crops, sun, moon"
        },
        {
            name: "Chope Shawl",
            nameHindi: "चोप शॉल",
            meaning: "-",
            locations: "Haryana",
            features: "Simple design, gifted to newly married bride by maternal grandmother"
        },
        {
            name: "Darshan Dwar Shawl",
            nameHindi: "दर्शन द्वार शॉल",
            meaning: "Gateway to the divine",
            locations: "Haryana",
            features: "Religious shawl, gifted to temples, bands of wheat design, five colours border"
        },
        {
            name: "Punja Durries",
            nameHindi: "पुंजा दरी",
            meaning: "-",
            locations: "Panipat (City of Weavers)",
            features: "Geometric designs, stripes, check boards, squares, bird and animal figures"
        },
        {
            name: "Juttis (Leather Craft)",
            nameHindi: "जूतियाँ (चमड़ा शिल्प)",
            meaning: "-",
            locations: "Rewari, Jhajjar, Karnal, Hisar (Zari Juttis), Rohtak (leather work)",
            features: "Copper, silver and silk threads, mirrors, beads"
        },
        {
            name: "Metal Work (Brass)",
            nameHindi: "धातु शिल्प (पीतल)",
            meaning: "-",
            locations: "Gurugram, Rewari",
            features: "Kitchen utensils, bride's wedding gifts"
        },
        {
            name: "Lac Bangles",
            nameHindi: "लाख की चूड़ियाँ",
            meaning: "-",
            locations: "Mahendragarh",
            features: "Filigree work, decorative work"
        },
        {
            name: "Pidi (Footstool Craft)",
            nameHindi: "पीढ़ी",
            meaning: "Low stool",
            locations: "Sonipat",
            features: "Pacchisi design, Giani Chor ka Chatta design"
        },
        {
            name: "Mudhas (Round Stools)",
            nameHindi: "मुड़हा",
            meaning: "-",
            locations: "Farrukhnagar",
            features: "Made of sarkandas (reed)"
        },
        {
            name: "Pottery",
            nameHindi: "मिट्टी के बर्तन",
            meaning: "-",
            locations: "Rewari, Jhajjar, Pinjore, Bahadurgarh, Rohtak",
            features: "Surahi (slim-necked pitcher) in Jhajjar, terracotta items"
        },
        {
            name: "Wood Craft",
            nameHindi: "लकड़ी शिल्प",
            meaning: "-",
            locations: "Bhiwani, Mahendragarh, Rohtak, Panchkula",
            features: "Kundaladar Pakkhi (hand fans), bamboo curtains, Changeri craft"
        },
        {
            name: "Toy Making",
            nameHindi: "खिलौने बनाना",
            meaning: "-",
            locations: "Gurugram, Faridabad",
            features: "Bright coloured wooden dolls, Babushka dolls, lacquer dolls, string puppets"
        }
    ];

    // Craft Cluster Divisions
    const craftClusters = [
        { district: "Gurugram", clusters: "Firozpur-Jharka, Pataudi, Farukh Nagar", crafts: "Terracotta, Metal Jewellery, Mudha Making" },
        { district: "Rewari", clusters: "Kaisthwada, Rampura, Qutabpur", crafts: "Brass Metal, Zari Jutti" },
        { district: "Jhajjar", clusters: "Bahadurgarh, Jhajjar", crafts: "Sandalwood Carving, Terracotta" },
        { district: "Faridabad", clusters: "Badkhal, Palwal, Hodal", crafts: "Terracotta, Basketry, Bone carving" },
        { district: "Sonipat", clusters: "Farmana", crafts: "Zari Jutti, Peedha making" },
        { district: "Panipat", clusters: "Panipat", crafts: "Punja durries" },
        { district: "Karnal", clusters: "-", crafts: "Zari Jutti" },
        { district: "Ambala", clusters: "Barara, Akbarpur, Racheri", crafts: "Crochet, Embroidery, Punja Durries" },
        { district: "Bhiwani", clusters: "Dinod, Biran, Halawas, Nandha", crafts: "Wooden beads, Mudha making" },
        { district: "Chandigarh", clusters: "-", crafts: "Embroidery, Pot painting" },
        { district: "Kurukshetra", clusters: "-", crafts: "Terracotta, Peedha making" },
        { district: "Hisar", clusters: "Shanti Nagar Bigher", crafts: "Zari Jutti, Punja durries" },
        { district: "Sirsa", clusters: "-", crafts: "Jewellery, Pot painting" },
        { district: "Mahendragarh", clusters: "Narnaul, Talot", crafts: "Lac bangles, Wood craft" },
        { district: "Yamunanagar", clusters: "Jagadhri", crafts: "Hand embroidery" },
        { district: "Rohtak", clusters: "-", crafts: "Leather and wood work" },
        { district: "Jind", clusters: "-", crafts: "Sanghi Craft" },
        { district: "Kaithal", clusters: "-", crafts: "Sanghi Craft" },
        { district: "Panchkula", clusters: "-", crafts: "Embroidery, Wood work" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 dark:from-amber-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Language Toggle Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium backdrop-blur-sm">
                        <Palette className="w-4 h-4" />
                        {language === "hindi" ? "वास्तुकला, कला और शिल्प - हरियाणा सरकार" : "Architecture, Art and Crafts - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा में" : "Architecture, Art &"} <span className="text-amber-600 dark:text-amber-400">{language === "hindi" ? "वास्तुकला, कला और शिल्प" : "Crafts in Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा की समृद्ध सांस्कृतिक विरासत को दर्शाती वास्तुकला, मूर्तिकला, चित्रकला और शिल्प की संपूर्ण जानकारी - प्राचीन काल से लेकर आधुनिक काल तक"
                            : "Complete information about architecture, sculpture, painting and crafts depicting Haryana's rich cultural heritage - from ancient to modern period"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Castle className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "प्राचीन वास्तुकला" : "Ancient Architecture"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Brush className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "मूर्तिकला" : "Sculpture"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Palette className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "चित्रकला" : "Painting"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Scissors className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "शिल्प" : "Crafts"}</span>
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
                            <div className="p-2 rounded-xl bg-amber-500/20">
                                <History className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "परिचय" : "Introduction"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "हरियाणा की कला और शिल्प इसकी समृद्ध सांस्कृतिक विरासत को दर्शाते हैं। बौद्ध ग्रंथ दिव्यावदान में वर्णित रोहतक शहर की नगर योजना हरियाणा राज्य की कलात्मक विशेषताओं का एक उदाहरण है। हरियाणा राज्य प्राचीन काल से ही अपनी वास्तुकला, मूर्तिकला और चित्रकला के लिए जाना जाता रहा है।"
                                : "The Arts and Crafts of Haryana depict its rich cultural heritage. The town planning of Rohtak city mentioned in Buddhist scripture Divyavadana is an example of artistic features of Haryana. The state has been known for its architecture, sculpture and painting since ancient times."}
                        </p>
                    </div>

                    {/* Architecture Periods Section */}
                    <div className="bg-orange-500/5 rounded-2xl p-6 md:p-8 border-2 border-orange-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-orange-500/30">
                                <Castle className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-orange-600">{language === "hindi" ? "हरियाणा में वास्तुकला" : "Architecture in Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {architecturePeriods.map((period, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-orange-600">{language === "hindi" ? period.periodHindi : period.period}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? period.featuresHindi : period.features}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Famous Buildings Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Landmark className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "प्रसिद्ध ऐतिहासिक इमारतें" : "Famous Historical Buildings of Haryana"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "इमारत का नाम" : "Building Name"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "स्थान" : "Location"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "काल" : "Period"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "विशेषताएँ" : "Features"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {famousBuildings.map((building, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2 font-medium">{building.name}</td>
                                            <td className="border p-2">{building.location}</td>
                                            <td className="border p-2">{building.period}</td>
                                            <td className="border p-2">{building.features}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Sculpture Section */}
                    <div className="bg-purple-500/5 rounded-2xl p-6 md:p-8 border-2 border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-500/30">
                                <Crown className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-600">{language === "hindi" ? "हरियाणा में मूर्तिकला" : "Sculpture in Haryana"}</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            {language === "hindi"
                                ? "हरियाणा के विभिन्न स्थानों से पुरातात्विक उत्खनन में यक्ष और यक्षिणियों की असंख्य मूर्तियाँ मिली हैं। मूर्तिकला निम्नलिखित शासकों के शासनकाल में विकसित हुई:"
                                : "Numerous statues of Yakshas and Yakshinis have been found in archaeological excavations from various places of Haryana. Sculpture developed during the reign of the following rulers:"}
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-purple-500/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "मूर्ति" : "Sculpture"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "स्थान" : "Location"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "काल" : "Period"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "विशेषता" : "Material/Style"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sculptures.map((sculpture, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2 font-medium">{sculpture.name}</td>
                                            <td className="border p-2">{sculpture.location}</td>
                                            <td className="border p-2">{sculpture.period}</td>
                                            <td className="border p-2">{sculpture.material}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Painting Styles Section */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/30">
                                <Palette className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "हरियाणा में चित्रकला" : "Art/Painting in Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {paintingStyles.map((style, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-blue-600">{language === "hindi" ? style.styleHindi : style.style}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? style.featuresHindi : style.features}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sanjhi Folk Art */}
                    <div className="bg-pink-500/5 rounded-2xl p-6 md:p-8 border-2 border-pink-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-pink-500/30">
                                <Heart className="w-5 h-5 text-pink-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-pink-600">{language === "hindi" ? "लोक कला: सांझी" : "Folk Art of Haryana: Sanjhi"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "अश्विन-शुक्ल प्रतिपदा के पहले दिन, युवा लड़कियां और ग्रामीण महिलाएं अपने घरों की दीवारों को देवी सांझी की छवियों से सजाती हैं। यह छवि मिट्टी और गोबर से दीवारों पर बनाई जाती है। इसे विभिन्न रंगों और आभूषणों का उपयोग करके सजाया जाता है। रात के समय मिट्टी के दीपक जलाए जाते हैं और सांझी की प्रशंसा में गीत गाए जाते हैं। यह सुंदर ग्रामीण कला मुख्य रूप से हरियाणा के जाट गांवों में पाई जाती है।"
                                : "On the first day of Ashwin-Shukla Pratipada, the young girls and village women adorn their walls of the house with images of Goddess Sanjhi. The image is made with clay and cow dung on walls. It is decorated with using different colours and ornaments. Earthen lamps are lightened and songs are sung during the night in praise of Sanjhi. This beautiful rural art form is mainly found in Jat villages of Haryana."}
                        </p>
                    </div>

                    {/* Crafts Section */}
                    <div className="bg-green-500/5 rounded-2xl p-6 md:p-8 border-2 border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/30">
                                <Scissors className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{language === "hindi" ? "हरियाणा के शिल्प" : "Crafts of Haryana"}</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            {language === "hindi"
                                ? "हरियाणा के शिल्प बहुत प्रसिद्ध हैं जो दुनिया भर में निर्यात किए जाते हैं। यह शिल्प राज्य के ग्रामीण लोगों के लिए आय के प्रमुख साधनों में से एक है।"
                                : "Crafts of Haryana are very famous which are also exported all over the world. Its craft is one of the major modes of income for the rural people of the state."}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {crafts.map((craft, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-green-600">{language === "hindi" ? craft.nameHindi : craft.name}</h3>
                                    <p className="text-xs text-muted-foreground">{craft.locations}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? craft.features : craft.features}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Craft Cluster Division Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Table className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा में शिल्प क्लस्टर प्रभाग" : "Craft Cluster Division of Haryana"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "जिला" : "District"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "शिल्प क्लस्टर" : "Craft Cluster"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "शिल्प" : "Craft"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {craftClusters.map((cluster, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2 font-medium">{cluster.district}</td>
                                            <td className="border p-2">{cluster.clusters}</td>
                                            <td className="border p-2">{cluster.crafts}</td>
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
                        {language === "hindi" ? "हरियाणा कला, शिल्प और वास्तुकला: तथ्य सारांश" : "Haryana Art, Crafts & Architecture: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">62</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "प्राचीन रोहतक के द्वार" : "Gates of Ancient Rohtak"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">12</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "योजन (प्राचीन रोहतक की लंबाई)" : "Yojan (Ancient Rohtak Length)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">1354</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "गुजरी महल निर्माण वर्ष" : "Gujri Mahal Construction Year"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">20m</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "चनेटी स्तूप की ऊँचाई" : "Chaneti Stupa Height"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">1952</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "बिरला मंदिर (गीता मंदिर)" : "Birla Temple (Gita Mandir)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">19</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "जिले (शिल्प क्लस्टर)" : "Districts (Craft Clusters)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">3</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "चित्रकला शैलियाँ" : "Painting Styles"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">5</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "रंग (दर्शन द्वार शॉल)" : "Colours (Darshan Dwar Shawl)"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा की वास्तुकला, कला और शिल्प के" : "Common"} <span className="text-amber-600">{language === "hindi" ? "बारे में सामान्य प्रश्न" : "Questions About Haryana's Architecture, Art & Crafts"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा की वास्तुकला, मूर्तिकला, चित्रकला और शिल्प के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's architecture, sculpture, painting and crafts"}
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
                                        className={`w-5 h-5 text-amber-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
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
                            {language === "hindi" ? "अपने हरियाणा कला और संस्कृति के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Art & Culture?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-amber-600 hover:bg-amber-700">
                                {language === "hindi" ? "हरियाणा कला एवं संस्कृति क्विज़ लें" : "Take Haryana Art & Culture Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/tourism" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "पर्यटन" : "Tourism"}
                        </Link>
                        {/* <Link href="/haryana-gk/agriculture" className="text-amber-600 hover:text-amber-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: कृषि और पशुपालन" : "Next Chapter: Agriculture & Animal Husbandry"}
                            <ChevronRight className="w-4 h-4" />
                        </Link> */}
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा की वास्तुकला, कला और शिल्प - संपूर्ण संदर्भ" : "Architecture, Art and Crafts of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की वास्तुकला (प्राचीन, मध्यकालीन, ब्रिटिश और आधुनिक), मूर्तिकला (कुषाण, गुप्त, मध्यकालीन), चित्रकला (राजपूत, मुगल, म्यूरल), लोक कला (सांझी) और शिल्प (फुलकारी, बाग, चोप, दरी, जूतियाँ, धातु शिल्प, लकड़ी शिल्प, मिट्टी के बर्तन) के बारे में व्यापक जानकारी प्रदान करता है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about Haryana's architecture (ancient, medieval, British and modern), sculpture (Kushan, Gupta, medieval), painting (Rajput, Mughal, Mural), folk art (Sanjhi), and crafts (Phulkari, Bagh, Chope, Durries, Juttis, Metal work, Wood craft, Pottery). A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और पुरातत्व अभिलेखों से स्रोतित" : "Information sourced from official Government of Haryana publications and archaeological records"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}