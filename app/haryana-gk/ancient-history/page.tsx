"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    BookOpen,
    ChevronRight,
    CheckCircle2,
    ChevronDown,
    HelpCircle,
    Landmark,
    History,
    Coins,
    ScrollText,
    Building2,
    MapPin,
    Mountain,
    Sword,
    Crown,
    VenetianMask,
    Wheat,
    Calendar,
    Languages,
    ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AncientHistoryOfHaryanaPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [language, setLanguage] = useState<"hindi" | "english">("hindi");

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === "hindi" ? "english" : "hindi");
    };

    // Bilingual FAQ data
    const faqs = [
        {
            questionHindi: "हरियाणा में मानव अस्तित्व का सबसे पुराना प्रमाण क्या है?",
            questionEnglish: "What is the oldest evidence of human existence in Haryana?",
            answerHindi: "गाय एलकॉक पिलग्रिम को पिंजौर से एक खोपड़ी मिली जिससे साबित हुआ कि लगभग 15 मिलियन वर्ष पहले, हरियाणा में आदिम मानव थे।",
            answerEnglish: "Guy Ellcock Pilgrim found a skull from Pinjore which proved that about 15 million years ago, there were primitive human beings in Haryana."
        },
        {
            questionHindi: "हरियाणा में सिंधु घाटी सभ्यता का सबसे बड़ा स्थल कौन सा है?",
            questionEnglish: "Which is the largest Indus Valley Civilisation site in Haryana?",
            answerHindi: "हिसार जिले में राखीगढ़ी हरियाणा का सबसे बड़ा सिंधु घाटी सभ्यता स्थल है, जो 350 हेक्टेयर क्षेत्र में फैला है।",
            answerEnglish: "Rakhigarhi in Hisar district is the largest Indus Valley Civilisation site in Haryana, spread over an area of 350 hectares."
        },
        {
            questionHindi: "हरियाणा में पहली पुरातात्विक खुदाई कहाँ की गई थी?",
            questionEnglish: "Where was the first archaeological excavation done in Haryana?",
            answerHindi: "हरियाणा में पहली पुरातात्विक खुदाई डी.डी. स्नूपर ने 1921-22 में राजा कर्ण के किले के पास एक टीले पर की थी।",
            answerEnglish: "The first archaeological excavation in Haryana was done by D.D. Snooper in 1921-22 on a mound near the fort of King Karna."
        },
        {
            questionHindi: "कुरुक्षेत्र का प्राचीन नाम क्या है?",
            questionEnglish: "What is the ancient name of Kurukshetra?",
            answerHindi: "कुरुक्षेत्र का प्राचीन नाम स्थानीश्वर (थानेसर) था। यह पुष्यभूति (वर्धन) वंश की राजधानी थी।",
            answerEnglish: "The ancient name of Kurukshetra was Sthanishvara (Thanesar). It was the capital of the Pushyabhuti (Vardhana) dynasty."
        },
        {
            questionHindi: "हरियाणा में आर्यों का पहला राजा कौन था?",
            questionEnglish: "Who was the first king of Aryans in Haryana?",
            answerHindi: "ऋग्वैदिक काल (1500-1000 ईसा पूर्व) के दौरान, आर्यों का पहला राजा मनु वैवस्वत था। उनके पुत्र सुधुमन और शर्याति हरियाणा से संबंधित थे।",
            answerEnglish: "During the Rigvedic period (1500-1000 BC), the first king of Aryans was Mainu Vaivasvata. His sons Sudhuman and Sharyati were related to Haryana."
        },
        {
            questionHindi: "पानीपत का प्राचीन नाम क्या है?",
            questionEnglish: "What is the ancient name of Panipat?",
            answerHindi: "पानीपत का प्राचीन नाम पानप्रस्थ है, जो पानी जनजातीय समूह का क्षेत्र था।",
            answerEnglish: "The ancient name of Panipat is Panprastha, which was the area of the Pani tribal group."
        },
        {
            questionHindi: "अग्रोहा शहर की स्थापना किसने की थी?",
            questionEnglish: "Who founded the city of Agroha?",
            answerHindi: "प्राचीन अग्रोहा शहर की स्थापना महाराजा अग्रसेन ने की थी, जो अग्रवाल समुदाय के आदि पुरुष थे। अग्रवाल समुदाय अग्रोहा को अपना मूल स्थान मानता है।",
            answerEnglish: "The ancient Agroha city was founded by Maharaja Agrasen, the primitive man of Agarwal community (Agar). The Agarwal community considers Agroha as their place of origin."
        },
        {
            questionHindi: "हर्ष के काल में हरियाणा का दौरा करने वाला चीनी यात्री कौन था?",
            questionEnglish: "Which Chinese traveller visited Haryana during Harsha's period?",
            answerHindi: "चीनी यात्री ह्वेन त्सांग 629 ईस्वी में हर्ष के काल में भारत आया और 635 से 644 ईस्वी तक थानेसर में रहा। वह अपनी पुस्तक 'सी-यू-की' में हनेसर (कुरुक्षेत्र) का वर्णन करता है।",
            answerEnglish: "Chinese traveller Hiuen-Tsang came to India in 629 AD during the period of Harsha and lived in Thanesar from 635 to 644 AD. He describes Hanesar (Kurukshetra) in his book 'Si-Yu-Ki'."
        }
    ];

    // Historical Sources - Bilingual
    const historicalSources = {
        titleHindi: "हरियाणा के ऐतिहासिक स्रोत",
        titleEnglish: "Historical Sources of Haryana",
        literary: {
            titleHindi: "साहित्यिक स्रोत",
            titleEnglish: "Literary Sources",
            vedicHindi: "वेद, ब्राह्मण, उपनिषद, आरण्यक हरियाणा में रचे गए। सरस्वती और दृषद्वती को पवित्र नदियों के रूप में वर्णित किया गया।",
            vedicEnglish: "Vedas, Brahmins, Upanishads, Aranyakas were composed in Haryana. Saraswati and Drishadvati described as holy rivers.",
            buddhistHindi: "पपंचसुदानी के अनुसार, महात्मा बुद्ध ने हरियाणा के कई स्थानों का दौरा किया। रोहतक और अग्रोहा को प्रमुख बौद्ध केंद्रों के रूप में वर्णित किया गया।",
            buddhistEnglish: "According to Papanchasudani, Mahatma Buddha visited many places in Haryana. Rohtak and Agroha described as major Buddhist centres.",
            jainHindi: "परिशिष्टपर्वन, भद्रबाहु चरित्र, कथाकोश पहली से तीसरी शताब्दी तक के सामाजिक, धार्मिक और सांस्कृतिक जीवन की जानकारी प्रदान करते हैं।",
            jainEnglish: "Parishhistaparvan, Bhadrabahu Charitra, Kathakosh provide information about social, religious and cultural life from 1st to 3rd century.",
            mahabharataHindi: "महाभारत के अरण्यक पर्व और नकुल दिग्विजयम प्राचीन राजनीतिक, आर्थिक, भौगोलिक स्थितियों की जानकारी प्रदान करते हैं।",
            mahabharataEnglish: "Aranyaka Parva and Nakula Digvijayam of Mahabharata provide information about ancient political, economic, geographical conditions.",
            foreignHindi: "यूनानी यात्री एरियन और चीनी यात्री फाह्यान और ह्वेन त्सांग के यात्रा वृत्तांत विस्तृत जानकारी प्रदान करते हैं।",
            foreignEnglish: "Travelogues of Greek traveller Arian and Chinese travellers Fa-hien and Hiuen-Tsang provide detailed accounts."
        },
        archaeological: {
            titleHindi: "पुरातात्विक स्रोत",
            titleEnglish: "Archaeological Sources",
            firstExplorerHindi: "सर अलेक्जेंडर कनिंघम (भारतीय पुरातत्व के जनक) ने 1862 ईस्वी में हरियाणा का दौरा किया।",
            firstExplorerEnglish: "Sir Alexander Cunningham (Father of Indian Archaeology) visited Haryana in 1862 AD.",
            firstExcavationHindi: "पहली पुरातात्विक खुदाई डी.डी. स्नूपर ने 1921-22 में राजा कर्ण के किले के पास की थी।",
            firstExcavationEnglish: "First archaeological excavation was done by D.D. Snooper in 1921-22 near fort of King Karna.",
            keySitesHindi: "बनावली, दौलतपुर, भगवानपुर, अग्रोहा, कुनाल, राखीगढ़ी, मिताथल, सिसवाल, बालू, फरमाना, गिरावड़",
            keySitesEnglish: "Banawali, Daulatpur, Bhagwanpur, Agroha, Kunal, Rakhigarhi, Mitathal, Siswal, Balu, Farmana, Giravad"
        }
    };

    // Prehistoric Periods - Bilingual
    const prehistoricPeriods = [
        { nameHindi: "पुरापाषाण काल", nameEnglish: "Palaeolithic Age", period: "5,00,000 to 10,000 years ago", featuresHindi: "धामली, कोटला, सुकेतड़ी, पिंजौर, झिरका में दूधिया भूरे क्वार्टजाइट से बने पत्थर के उपकरण मिले।", featuresEnglish: "Stone tools from milky brown quartzite found at Dhamli, Kotla, Suketdi, Pinjore, Jhirka." },
        { nameHindi: "निम्न पुरापाषाण", nameEnglish: "Lower Palaeolithic", period: "5,00,000 to 1,25,000 years ago", featuresHindi: "पिंजौर-कालका के पास शिवालिक पहाड़ियों और गुरुग्राम एवं फरीदाबाद में अरावली श्रेणी से साक्ष्य मिले।", featuresEnglish: "Evidence found from Shivalik hills near Pinjore-Kalka and Aravali range in Gurugram and Faridabad." },
        { nameHindi: "मध्य पुरापाषाण", nameEnglish: "Middle Palaeolithic", period: "1,25,000 to 40,000 years ago", featuresHindi: "स्क्रेपर और बोरर जैसे छोटे पत्थर के उपकरण। पंचकूला के कालका क्षेत्र में साक्ष्य मिले।", featuresEnglish: "Small stone tools like scrapers and borers. Evidence found in Kalka region of Panchkula." },
        { nameHindi: "उच्च पुरापाषाण", nameEnglish: "Upper Palaeolithic", period: "40,000 to 10,000 years ago", featuresHindi: "छोटे और हल्के उपकरण। सिसवाल, राखीगढ़ी, मिताथल, बनावली में मूसल, मोर्टार, तेज धार वाला हंसिया मिला।", featuresEnglish: "Smaller and lighter tools. Pestle, mortar, sharp-edged scythe found at Siswal, Rakhigarhi, Mitathal, Banawali." },
        { nameHindi: "मध्यपाषाण काल", nameEnglish: "Mesolithic Age", period: "Microlith tools", featuresHindi: "अंकर पहाड़ियों, मेवला पहाड़ियों, नोदा, कोह, मोहताबाद पहाड़ियों, सिरोही, धौज, मानेसर में उपकरण मिले।", featuresEnglish: "Tools found at Ankar hills, Mewla hills, Noda, Koh, Mohtabad hills, Sirohi, Dhauj, Manesar." },
        { nameHindi: "नवपाषाण काल", nameEnglish: "Neolithic Age", period: "Agriculture started", featuresHindi: "सिसवाल में कृषि के साक्ष्य मिले। पिंजौर-कालका क्षेत्र में मनके, मिट्टी के चूड़े, लाल मिट्टी के बर्तन मिले।", featuresEnglish: "Evidence of agriculture found at Siswal. Beads, earthen bangles, red clay pottery found in Pinjore-Kalka region." }
    ];

    // Siswal Culture Sites - Bilingual
    const siswalCultureSites = [
        { name: "सिसवाल", nameEn: "Siswal", location: "हिसार जिला", locationEn: "Hisar district", findingsHindi: "हाथ से बने बर्तन, रंगीन मिट्टी के चूड़े, मनके, तांबे के हैंडल वाला हंसिया, पत्थर के उपकरण।", findingsEnglish: "Hand-made pottery, painted clay bangles, beads, copper handle sickle, stone tools." },
        { name: "मिताथल", nameEn: "Mitathal", location: "भिवानी जिला", locationEn: "Bhiwani district", findingsHindi: "कुम्हार के चाक पर बने बर्तन, मिट्टी के चूड़े, फ़ाइनेस चूड़े, पत्थर की गोलियां, तांबे के चूड़े, हाथी दांत की पिन।", findingsEnglish: "Pots made on potter's wheel, clay bangles, faience bangles, stone balls, copper bangles, elephant tooth pins." },
        { name: "बनावली", nameEn: "Banawali", location: "फतेहाबाद जिला", locationEn: "Fatehabad district", findingsHindi: "मिट्टी की ईंटों के घर, गोल आकार का चूल्हा, भट्टी, बर्तन, दुर्लभ पत्थर के गहने, बच्चों के खिलौने (छतरी कार)।", findingsEnglish: "Mud brick houses, round shaped stove, furnace, pottery, rare stone jewellery, children's toys (umbrella car)." },
        { name: "राखीगढ़ी", nameEn: "Rakhigarhi", location: "हिसार जिला", locationEn: "Hisar district", findingsHindi: "बर्तन, रंगीन चूड़े, कीमती पत्थर। भूरे रंग के बर्तन मिले।", findingsEnglish: "Pottery, painted bangles, precious stones. Grey colour pottery found." },
        { name: "बालू", nameEn: "Balu", location: "जींद जिला", locationEn: "Jind district", findingsHindi: "कच्ची ईंटों के घर, लाल और भूरे रंग के बर्तन, मिट्टी के मनके, चूड़े, हड्डी की सुई, पीसने वाले पत्थर, तांबे के उपकरण।", findingsEnglish: "Raw brick houses, red and grey pottery, clay beads, bangles, bone needles, grinding stones, copper tools." },
        { name: "फरमाना", nameEn: "Farmana", location: "रोहतक जिला", locationEn: "Rohtak district", findingsHindi: "2-3 मीटर गहरे गड्ढे जो रसोई के रूप में उपयोग किए जाते थे, मिट्टी के चूल्हे, काले रंग से रंगे लाल बर्तन।", findingsEnglish: "2-3 meter pits used as kitchens, clay stoves (chulas), red pottery painted with black colour." },
        { name: "कुनाल", nameEn: "Kunal", location: "फतेहाबाद जिला", locationEn: "Fatehabad district", findingsHindi: "कई गड्ढे और बर्तन, शाही मुकुट, सोने और चांदी के गहने।", findingsEnglish: "Many pits and pottery, royal crowns, gold and silver jewellery." },
        { name: "गिरावड़", nameEn: "Giravad", location: "रोहतक जिला", locationEn: "Rohtak district", findingsHindi: "13 गड्ढे, 2 भट्टियाँ, बर्तन।", findingsEnglish: "13 pits, 2 kilns, pottery." }
    ];

    // Indus Valley Sites - Bilingual
    const indusValleySites = [
        { name: "राखीगढ़ी", nameEn: "Rakhigarhi", location: "हिसार", locationEn: "Hisar", highlightsHindi: "हरियाणा में सबसे बड़ा सिंधु स्थल (350 हेक्टेयर)। सबसे पुराना हड़प्पा स्थल। पूर्व-हड़प्पा और परिपक्व हड़प्पा साक्ष्य। सोने-चांदी से सजा कांस्य बर्तन।", highlightsEnglish: "Largest Indus Valley site in Haryana (350 hectares). Oldest Harappan site. Pre-Harappan and mature Harappan evidences. Bronze pot decorated with gold and silver." },
        { name: "बनावली", nameEn: "Banawali", location: "फतेहाबाद", locationEn: "Fatehabad", highlightsHindi: "शतरंज की बिसात पैटर्न पर बसा शहर। मिट्टी का हल का खिलौना, पहली मातृदेवी मूर्ति, अग्नि वेदियां। कोई जल निकासी व्यवस्था नहीं।", highlightsEnglish: "City planned on chess board pattern. Clay toy plough, first mother goddess terracotta figurine, fire altars. No drainage system." },
        { name: "मिताथल", nameEn: "Mitathal", location: "भिवानी", locationEn: "Bhiwani", highlightsHindi: "तीन संस्कृतियाँ - प्रारंभिक, परिपक्व और उत्तर हड़प्पा। गुप्त और कुषाण सिक्के मिले। तुस्क पिन, तांबे के हापून।", highlightsEnglish: "Three cultures - Early, Mature and Late Harappan. Gupta and Kushana coins found. Tusk pins, copper harpoons." },
        { name: "भगवानपुरा", nameEn: "Bhagwanpura", location: "कुरुक्षेत्र", locationEn: "Kurukshetra", highlightsHindi: "सफेद, काले और नीले रंग के कांच और तांबे के चूड़े।", highlightsEnglish: "Glass and copper bangles of white, black and blue colour." },
        { name: "फरमाना खास", nameEn: "Farmana Khas", location: "रोहतक", locationEn: "Rohtak", highlightsHindi: "हरियाणा का दूसरा सबसे बड़ा हड़प्पा स्थल। टैल्क से बनी चार हड़प्पा मुहरें, कब्रिस्तान के अवशेष, सूती और ऊनी कपड़े।", highlightsEnglish: "Second largest Harappan site in Haryana. Four Harappan seals made of talc, cemetery remains, cotton and woollen clothes." },
        { name: "दौलतपुर", nameEn: "Daulatpur", location: "कुरुक्षेत्र", locationEn: "Kurukshetra", highlightsHindi: "शतरंज की बिसात पैटर्न शहर, बर्तन, मनके, चूड़े, खिलौने - उत्तर हड़प्पा काल।", highlightsEnglish: "Chess board pattern city, pottery, beads, bangles, toys - Late Harappan period." },
        { name: "कुनाल", nameEn: "Kunal", location: "फतेहाबाद", locationEn: "Fatehabad", highlightsHindi: "हाकड़ा संस्कृति, प्रारंभिक हड़प्पा संस्कृति और हड़प्पा सभ्यता के अवशेष।", highlightsEnglish: "Hakra Culture, early Harappan Culture and Harappan Civilisation remains." },
        { name: "मदीना", nameEn: "Madina", location: "रोहतक", locationEn: "Rohtak", highlightsHindi: "उत्तर हड़प्पा और चित्रित धूसर मिट्टी के बर्तन (PGW) संस्कृति के अवशेष।", highlightsEnglish: "Late Harappan and Painted Grey Ware (PGW) Culture remains." }
    ];

    // Historical Periods - Bilingual
    const historicalPeriods = [
        { nameHindi: "वैदिक काल", nameEnglish: "Vedic Period", period: "1500-600 BC", highlightsHindi: "हरियाणा को ऋग्वेद में 'राज हरियाणा' कहा गया। आर्यावर्त का प्रमुख भाग। भगवद गीता यहीं रची गई।", highlightsEnglish: "Haryana called 'Raj Haryana' in Rigveda. Major part of Aryavart. Bhagavad Gita composed here." },
        { nameHindi: "महाभारत काल", nameEnglish: "Mahabharata Period", period: "900 BCE", highlightsHindi: "कुरुक्षेत्र युद्ध 18 दिनों तक लड़ा गया। कृष्ण ने ज्योतिसार तीर्थ में गीता का उपदेश दिया।", highlightsEnglish: "Kurukshetra war fought for 18 days. Krishna gave Gita sermon at Jyotisar shrine." },
        { nameHindi: "महाजनपद काल", nameEnglish: "Mahajanapada Period", period: "6th century BCE", highlightsHindi: "कुरु महाजनपद में हरियाणा, मेरठ, दिल्ली के कुछ भाग शामिल थे। राजधानी हस्तिनापुर थी।", highlightsEnglish: "Kuru Mahajanapada included parts of Haryana, Meerut, Delhi. Capital was Hastinapur." },
        { nameHindi: "मौर्य काल", nameEnglish: "Mauryan Period", period: "324-232 BC", highlightsHindi: "अशोक के 7 शिलालेख टोपरा में। थानेसर में बौद्ध स्तूप। उत्तरी काली चमकदार मिट्टी के बर्तन मिले।", highlightsEnglish: "Ashoka's 7 inscriptions at Topra. Buddhist Stupa at Thanesar. Northern black shiny pottery found." },
        { nameHindi: "यौधेय गणराज्य", nameEnglish: "Yaudheya Republic", period: "Post-Mauryan", highlightsHindi: "भारत का सबसे बड़ा गणराज्य। राजधानी प्राकृतिक नगर (नौरंगाबाद) थी। पूरे हरियाणा में सिक्के मिले।", highlightsEnglish: "Largest republic of India. Capital was Prakritanak Nagar (Naurangabad). Coins found throughout Haryana." },
        { nameHindi: "अग्र गणराज्य", nameEnglish: "Agar Republic", period: "Ancient", highlightsHindi: "राजधानी अग्रोहा थी। महाराजा अग्रसेन द्वारा स्थापित। बाद में यौधेय गणराज्य में विलीन हो गया।", highlightsEnglish: "Capital was Agroha. Founded by Maharaja Agrasen. Later merged into Yaudheyan Republic." },
        { nameHindi: "गुप्त काल", nameEnglish: "Gupta Period", period: "4th-5th century", highlightsHindi: "समुद्रगुप्त ने यौधेय गणराज्य को गुप्त साम्राज्य में मिला लिया।", highlightsEnglish: "Samudragupta merged Yaudheya Republic into Gupta Empire." },
        { nameHindi: "पुष्यभूति वंश", nameEnglish: "Pushyabhuti Dynasty", period: "505-647 AD", highlightsHindi: "राजधानी थानेश्वर (थानेसर) थी। हर्षवर्धन (606-647 ईस्वी) सबसे प्रसिद्ध शासक।", highlightsEnglish: "Capital was Thaneshwar (Thanesar). Harshavardhana (606-647 AD) most famous ruler." },
        { nameHindi: "गुर्जर-प्रतिहार काल", nameEnglish: "Gurjar-Pratihara Period", period: "8th-10th century", highlightsHindi: "पेहोवा को व्यापार केंद्र के रूप में स्थापित किया गया। मिहिरभोय (836-885 ईस्वी) शक्तिशाली शासक।", highlightsEnglish: "Pehowa established as trading center. Mihirbhoya (836-885 AD) strong ruler." },
        { nameHindi: "तोमर वंश", nameEnglish: "Tomar Dynasty", period: "10th-12th century", highlightsHindi: "राजधानी ढिल्लिका (दिल्ली) थी। अनंगपाल ने तोमर राज्य की नींव रखी।", highlightsEnglish: "Capital was Dhillika (Delhi). Anangpala laid foundation of Tomar kingdom." }
    ];

    // Ancient Names - Bilingual
    const ancientNames = [
        { present: "सिरसा", presentEn: "Sirsa", ancient: "शेरिशकम", ancientEn: "Sherishkam" },
        { present: "फतेहाबाद", presentEn: "Fatehabad", ancient: "इकदार", ancientEn: "Ikdar" },
        { present: "हिसार", presentEn: "Hisar", ancient: "हिसार-ए-फिरोजा", ancientEn: "Hisar-e-Firoza" },
        { present: "महेन्द्रगढ़", presentEn: "Mahendragarh", ancient: "कनौर", ancientEn: "Kanaur" },
        { present: "करनाल", presentEn: "Karnal", ancient: "करनाल", ancientEn: "Karnal" },
        { present: "यमुनानगर", presentEn: "Yamunanagar", ancient: "अब्दुल्लापुर", ancientEn: "Abdullapur" },
        { present: "कुरुक्षेत्र", presentEn: "Kurukshetra", ancient: "स्थानीश्वर (थानेसर)", ancientEn: "Sthanishvara (Thanesar)" },
        { present: "कैथल", presentEn: "Kaithal", ancient: "कपिस्थल", ancientEn: "Kapisthal" },
        { present: "रोहतक", presentEn: "Rohtak", ancient: "रोहतास", ancientEn: "Rohtas" },
        { present: "सोनीपत", presentEn: "Sonipat", ancient: "स्वर्णप्रस्थ", ancientEn: "Swarnprastha" },
        { present: "पानीपत", presentEn: "Panipat", ancient: "पानप्रस्थ", ancientEn: "Panprastha" },
        { present: "रेवाड़ी", presentEn: "Rewari", ancient: "रेवावाड़ी", ancientEn: "Rewawari" },
        { present: "मेवात", presentEn: "Mewat", ancient: "सत्येवपुरम", ancientEn: "Satyevpuram" },
        { present: "पलवल", presentEn: "Palwal", ancient: "उपबला, अपबला", ancientEn: "Upbala, Apbala" },
        { present: "जींद", presentEn: "Jind", ancient: "जयंतीपुरी", ancientEn: "Jayantipuri" },
        { present: "गुरुग्राम", presentEn: "Gurugram", ancient: "गुरुग्राम", ancientEn: "Gurugram" }
    ];

    // Ancient Town Names - Bilingual
    const ancientTownNames = [
        { ancient: "खरियाल", ancientEn: "Khariyal", present: "ऐलेनाबाद (सिरसा)", presentEn: "Ellenabad (Sirsa)" },
        { ancient: "आयोहदक", ancientEn: "Ayohdak", present: "अग्रोहा (हिसार)", presentEn: "Agroha (Hisar)" },
        { ancient: "नवराष्ट्र", ancientEn: "Navrashtra", present: "नारनौल (महेन्द्रगढ़)", presentEn: "Narnaul (Mahendragarh)" },
        { ancient: "प्राकृतिक", ancientEn: "Prakritnak", present: "औरंगाबाद (पलवल)", presentEn: "Aurangabad (Palwal)" },
        { ancient: "शरफाबाद", ancientEn: "Sharfabad", present: "बहादुरगढ़ (झज्जर)", presentEn: "Bahadurgarh (Jhajjar)" },
        { ancient: "महेस्ठा", ancientEn: "Mahestha", present: "महम (रोहतक)", presentEn: "Maham (Rohtak)" },
        { ancient: "प्रदाथ", ancientEn: "Pradath", present: "पेहोवा (कुरुक्षेत्र)", presentEn: "Pehowa (Kurukshetra)" },
        { ancient: "युगन्धर", ancientEn: "Yugandhar", present: "जगाधरी (यमुनानगर)", presentEn: "Jagadhri (Yamunanagar)" },
        { ancient: "कालाकुल", ancientEn: "Kalakula", present: "कालका (पंचकूला)", presentEn: "Kalka (Panchkula)" },
        { ancient: "बत्रामगढ़", ancientEn: "Batramgarh", present: "वल्लभगढ़ (फरीदाबाद)", presentEn: "Vallabhgarh (Faridabad)" }
    ];

    // Inscriptions and Coins - Bilingual
    const inscriptionsAndCoins = [
        { categoryHindi: "सबसे पुराना शिलालेख", categoryEnglish: "Oldest Inscription", detailHindi: "टोपरा शिलालेख - मौर्य शासक अशोक, ब्राह्मी लिपि, संस्कृत भाषा", detailEnglish: "Topra inscription - Mauryan ruler Ashoka, Brahmi script, Sanskrit language" },
        { categoryHindi: "खरोष्ठी लिपि", categoryEnglish: "Kharosthi Script", detailHindi: "करनाल में मिला - तालाब निर्माण से संबंधित", detailEnglish: "Found in Karnal - related to construction of pond" },
        { categoryHindi: "तोशम शिलालेख", categoryEnglish: "Tosham Inscriptions", detailHindi: "तीसरी-चौथी शताब्दी - विष्णु भक्त आचार्य सोभात्रत द्वारा बनवाए गए तालाब से संबंधित", detailEnglish: "3rd-4th century - related to pond built by Vishnu devotee Acharya Sobhatrata" },
        { categoryHindi: "पेहोवा शिलालेख", categoryEnglish: "Pehowa Inscription", detailHindi: "प्रतिहार राजा महेंद्र पाल - मंदिर निर्माण का उल्लेख", detailEnglish: "Pratihara king Mahendra Pala - mentions construction of temples" },
        { categoryHindi: "आहत सिक्के", categoryEnglish: "Aahat Coins", detailHindi: "सुघ, अग्रोहा, नौरंगाबाद में मिले - दूसरी शताब्दी ईसा पूर्व", detailEnglish: "Found at Sugh, Agroha, Naurangabad - 2nd century BC" },
        { categoryHindi: "कुषाण सिक्के", categoryEnglish: "Kushana Coins", detailHindi: "मिताथल (भिवानी) से सोने और तांबे के सिक्के - शासक हुविष्क और कनिष्क", detailEnglish: "Gold and copper coins from Mitathal (Bhiwani) - rulers Huvishka and Kanishka" },
        { categoryHindi: "यौधेय सिक्के", categoryEnglish: "Yaudheya Coins", detailHindi: "पूरे हरियाणा में मिले - 'यौधेयान गणस्य जय' अंकित", detailEnglish: "Found throughout Haryana - 'Yaudheyan Ganasya Jai' inscribed" },
        { categoryHindi: "हर्ष काल के सिक्के", categoryEnglish: "Harsha Period Coins", detailHindi: "सोनीपत से तांबे की मुद्रा मिली", detailEnglish: "Copper currency found from Sonipat" }
    ];

    // Personalities - Bilingual
    const personalities = [
        { nameHindi: "राजा कुरु", nameEnglish: "King Kuru", roleHindi: "कौरवों के पूर्वज, कुरुक्षेत्र का नाम उन्हीं पर रखा गया", roleEnglish: "Ancestor of Kauravas, Kurukshetra named after him" },
        { nameHindi: "महाराजा अग्रसेन", nameEnglish: "Maharaja Agrasen", roleHindi: "अग्रोहा शहर के संस्थापक, अग्रवाल समुदाय के पूर्वज", roleEnglish: "Founder of Agroha city, ancestor of Agarwal community" },
        { nameHindi: "पुष्यभूति", nameEnglish: "Pushyabhuti", roleHindi: "पुष्यभूति/वर्धन वंश के संस्थापक, राजधानी थानेश्वर", roleEnglish: "Founder of Pushyabhuti/Vardhana dynasty, capital Thaneshwar" },
        { nameHindi: "प्रभाकरवर्धन", nameEnglish: "Prabhakarvardhana", roleHindi: "शक्तिशाली शासक (580-605 ईस्वी), हूण शासकों को पराजित किया", roleEnglish: "Powerful ruler (580-605 AD), defeated Huna rulers" },
        { nameHindi: "हर्षवर्धन", nameEnglish: "Harshavardhana", roleHindi: "सबसे प्रसिद्ध शासक (606-647 ईस्वी), राजधानी थानेश्वर तब कन्नौज", roleEnglish: "Most famous ruler (606-647 AD), capital Thaneshwar then Kannauj" },
        { nameHindi: "बाणभट्ट", nameEnglish: "Banabhatta", roleHindi: "हर्षवर्धन के दरबारी कवि, हर्षचरित की रचना की", roleEnglish: "Court poet of Harshavardhana, wrote Harshacharita" },
        { nameHindi: "महर्षि वेदव्यास", nameEnglish: "Maharishi Vedvyasa", roleHindi: "महाभारत के रचयिता, दुनिया का सबसे बड़ा महाकाव्य", roleEnglish: "Author of Mahabharata, world's largest epic" },
        { nameHindi: "चंद्रगुप्त मौर्य", nameEnglish: "Chandragupta Maurya", roleHindi: "मौर्य शासक जिसने पंजाब और हरियाणा को अधीन किया", roleEnglish: "Mauryan ruler who subjugated Punjab and Haryana" },
        { nameHindi: "सम्राट अशोक", nameEnglish: "Emperor Ashoka", roleHindi: "बौद्ध स्तूप बनवाए, टोपरा में 7 शिलालेख", roleEnglish: "Built Buddhist stupas, 7 inscriptions at Topra" }
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
                        {language === "hindi" ? "हरियाणा का" : "Ancient"} <span className="text-primary">{language === "hindi" ? "प्राचीन इतिहास" : "History of Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "प्रागैतिहासिक काल से लेकर तोमर वंश तक हरियाणा के समृद्ध प्राचीन इतिहास की संपूर्ण जानकारी, सिंधु घाटी सभ्यता, वैदिक काल, महाभारत और उससे आगे"
                            : "Complete guide to Haryana's rich ancient history from prehistoric times to the Tomar dynasty, Indus Valley Civilisation, Vedic period, Mahabharata, and beyond"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Landmark className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "सिंधु स्थल" : "Indus Valley Sites"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <ScrollText className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "वैदिक साहित्य" : "Vedic Literature"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Sword className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "महाभारत युद्ध" : "Mahabharata War"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Coins className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "प्राचीन सिक्के" : "Ancient Coins"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Historical Sources Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <BookOpen className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? historicalSources.titleHindi : historicalSources.titleEnglish}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-primary mb-2">{language === "hindi" ? historicalSources.literary.titleHindi : historicalSources.literary.titleEnglish}</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" /> <strong>{language === "hindi" ? "वैदिक साहित्य" : "Vedic Literature"}:</strong> {language === "hindi" ? historicalSources.literary.vedicHindi : historicalSources.literary.vedicEnglish}</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" /> <strong>{language === "hindi" ? "बौद्ध साहित्य" : "Buddhist Literature"}:</strong> {language === "hindi" ? historicalSources.literary.buddhistHindi : historicalSources.literary.buddhistEnglish}</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" /> <strong>{language === "hindi" ? "जैन साहित्य" : "Jain Literature"}:</strong> {language === "hindi" ? historicalSources.literary.jainHindi : historicalSources.literary.jainEnglish}</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" /> <strong>{language === "hindi" ? "महाभारत एवं संस्कृत" : "Mahabharata & Sanskrit"}:</strong> {language === "hindi" ? historicalSources.literary.mahabharataHindi : historicalSources.literary.mahabharataEnglish}</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" /> <strong>{language === "hindi" ? "विदेशी विवरण" : "Foreign Accounts"}:</strong> {language === "hindi" ? historicalSources.literary.foreignHindi : historicalSources.literary.foreignEnglish}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-primary mb-2">{language === "hindi" ? historicalSources.archaeological.titleHindi : historicalSources.archaeological.titleEnglish}</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" /> <strong>{language === "hindi" ? "प्रथम अन्वेषक" : "First Explorer"}:</strong> {language === "hindi" ? historicalSources.archaeological.firstExplorerHindi : historicalSources.archaeological.firstExplorerEnglish}</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" /> <strong>{language === "hindi" ? "प्रथम खुदाई" : "First Excavation"}:</strong> {language === "hindi" ? historicalSources.archaeological.firstExcavationHindi : historicalSources.archaeological.firstExcavationEnglish}</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" /> <strong>{language === "hindi" ? "प्रमुख स्थल" : "Key Sites"}:</strong> {language === "hindi" ? historicalSources.archaeological.keySitesHindi : historicalSources.archaeological.keySitesEnglish}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prehistoric Period Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <Mountain className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "प्रागैतिहासिक काल" : "Pre-Historic Period"}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">{language === "hindi" ? "वह काल जिसके कोई लिखित प्रमाण नहीं हैं। गाय एलकॉक पिलग्रिम को पिंजौर से एक खोपड़ी मिली जिससे साबित हुआ कि लगभग 15 मिलियन वर्ष पहले, हरियाणा में आदिम मानव थे।" : "The period which has no written evidences. Guy Ellcock Pilgrim found a skull from Pinjore proving primitive humans existed 15 million years ago in Haryana."}</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {prehistoricPeriods.map((period, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 border shadow-sm hover:shadow-md transition-all">
                                <h3 className="font-bold text-primary">{language === "hindi" ? period.nameHindi : period.nameEnglish}</h3>
                                <p className="text-xs text-muted-foreground mt-1">{period.period}</p>
                                <p className="text-sm mt-2">{language === "hindi" ? period.featuresHindi : period.featuresEnglish}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Siswal Culture Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <Wheat className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "सिसवाल संस्कृति (कृषि संस्कृति)" : "Siswal Culture (Farming Culture)"}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">{language === "hindi" ? "हरियाणा में पहली खुदाई सिसवाल (हिसार) में हुई। लगभग 2500 ईसा पूर्व, राजस्थान के किसान दृषद्वती नदी घाटी में बस गए। हरियाणा में इस संस्कृति के 29 स्थान हैं।" : "First excavation in Haryana at Siswal (Hisar). Around 2500 BC, farmers from Rajasthan settled in Drishtavati river valley. 29 places under this culture in Haryana."}</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {siswalCultureSites.map((site, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 border shadow-sm">
                                <h3 className="font-bold text-primary">{language === "hindi" ? site.name : site.nameEn}</h3>
                                <p className="text-xs text-muted-foreground">{language === "hindi" ? site.location : site.locationEn}</p>
                                <p className="text-sm mt-2">{language === "hindi" ? site.findingsHindi : site.findingsEnglish}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Indus Valley Civilisation Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <Building2 className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "सिंधु घाटी / हड़प्पा सभ्यता" : "Indus Valley / Harappan Civilisation"}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">{language === "hindi" ? "5000 साल पुरानी सभ्यता। अवधि: 2400 से 1700 ईसा पूर्व। कांस्य सभ्यता भी कहलाती है। हरियाणा में प्रारंभिक चरण के 241, दूसरे चरण के 145, तीसरे चरण के 842 स्थल मिले हैं।" : "5000 years old civilisation. Period: 2400 to 1700 BC. Also called Bronze Civilisation. 241 settlements of initial phase, 145 of second phase, 842 of third phase found in Haryana."}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {indusValleySites.map((site, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 border shadow-sm">
                                <h3 className="font-bold text-primary">{language === "hindi" ? site.name : site.nameEn}</h3>
                                <p className="text-xs text-muted-foreground">{language === "hindi" ? site.location : site.locationEn}</p>
                                <p className="text-sm mt-2">{language === "hindi" ? site.highlightsHindi : site.highlightsEnglish}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Historical Period Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "ऐतिहासिक काल" : "Historical Period"}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {historicalPeriods.map((period, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 border shadow-sm">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-primary">{language === "hindi" ? period.nameHindi : period.nameEnglish}</h3>
                                    <span className="text-xs bg-primary/10 px-2 py-1 rounded-full">{period.period}</span>
                                </div>
                                <p className="text-sm mt-2">{language === "hindi" ? period.highlightsHindi : period.highlightsEnglish}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Origin of Name Haryana Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <VenetianMask className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "'हरियाणा' नाम की उत्पत्ति" : "The Origin of the Name 'Haryana'"}</h2>
                    </div>
                    <div className="bg-card rounded-xl p-6 border shadow-sm">
                        <p className="text-muted-foreground mb-4">{language === "hindi" ? "हरियाणा शब्द का अर्थ है " : "The word Haryana means "}<strong className="text-primary">{language === "hindi" ? "'हरि आयन' अर्थात भगवान का निवास" : "'Hari Ayan' i.e., the Abode of God"}</strong>.</p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <ul className="space-y-2">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> <strong>{language === "hindi" ? "स्कन्द पुराण:" : "Skanda Purana:"}</strong> {language === "hindi" ? "'हरियाला' कहा गया" : "Called 'Hariyala'"}</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> <strong>{language === "hindi" ? "जैन कवि पुष्पदंत (10वीं शताब्दी):" : "Jain poet Pushpadant (10th century):"}</strong> {language === "hindi" ? "महापुराण में 'हरियाणा' का प्रथम प्रयोग" : "First used 'Haryana' in Mahapurana"}</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> <strong>{language === "hindi" ? "बाणभट्ट:" : "Banabhatta:"}</strong> {language === "hindi" ? "'श्रीकृथिन जनपद' के रूप में उल्लेख" : "Mentioned as 'Shrikrithin Janapada'"}</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> <strong>{language === "hindi" ? "ऋग्वेद:" : "Rigveda:"}</strong> {language === "hindi" ? "'राज हरियाणा' और 'हरना' के रूप में वर्णित" : "Described as 'Raj Haryana' and 'Harna'"}</li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> <strong>{language === "hindi" ? "महाभारत:" : "Mahabharata:"}</strong> {language === "hindi" ? "'बहुधान्यक' (अनाज की बहुतायत) कहा गया" : "Called 'Bahudhanyaka' (lot of grains)"}</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> <strong>{language === "hindi" ? "राष्ट्रीय संग्रहालय शिलालेख (1328 ईस्वी):" : "National Museum inscription (1328 AD):"}</strong> {language === "hindi" ? "क्षेत्र का नाम 'हरियाणा' रखा गया" : "Region named as 'Haryana'"}</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> <strong>{language === "hindi" ? "डॉ. यदुनाथ सरकार:" : "Dr Yadunath Sarkar:"}</strong> {language === "hindi" ? "हरियाली से संबंधित" : "Associated with greenery (Hariyali)"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inscriptions and Coins Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <Coins className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "प्राचीन हरियाणा के शिलालेख एवं सिक्के" : "Inscriptions & Coins of Ancient Haryana"}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {inscriptionsAndCoins.map((item, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 border shadow-sm">
                                <h3 className="font-semibold text-primary">{language === "hindi" ? item.categoryHindi : item.categoryEnglish}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? item.detailHindi : item.detailEnglish}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ancient Names Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "जिलों एवं कस्बों के प्राचीन नाम" : "Ancient Names of Districts & Towns"}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold text-primary mb-3">{language === "hindi" ? "जिले" : "Districts"}</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {ancientNames.map((item, idx) => (
                                    <div key={idx} className="bg-card rounded-lg p-2 text-sm border flex justify-between">
                                        <span className="font-medium">{language === "hindi" ? item.present : item.presentEn}</span>
                                        <span className="text-muted-foreground">{language === "hindi" ? item.ancient : item.ancientEn}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-primary mb-3">{language === "hindi" ? "कस्बे" : "Towns"}</h3>
                            <div className="grid grid-cols-1 gap-2">
                                {ancientTownNames.map((item, idx) => (
                                    <div key={idx} className="bg-card rounded-lg p-2 text-sm border flex justify-between">
                                        <span className="font-medium">{language === "hindi" ? item.ancient : item.ancientEn}</span>
                                        <span className="text-muted-foreground">{language === "hindi" ? item.present : item.presentEn}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Personalities Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/20">
                            <Crown className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{language === "hindi" ? "महत्वपूर्ण ऐतिहासिक व्यक्तित्व" : "Important Historical Personalities"}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {personalities.map((person, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-4 border shadow-sm">
                                <h3 className="font-bold text-primary">{language === "hindi" ? person.nameHindi : person.nameEnglish}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? person.roleHindi : person.roleEnglish}</p>
                            </div>
                        ))}
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
                            {language === "hindi" ? "प्राचीन हरियाणा के बारे में" : "Common"} <span className="text-primary">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Ancient Haryana"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के प्राचीन इतिहास, पुरातात्विक स्थलों और सांस्कृतिक विरासत के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's ancient history, archaeological sites, and cultural heritage"}
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
                            {language === "hindi" ? "अपने हरियाणा के प्राचीन इतिहास के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Ancient History of Haryana?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer">
                                {language === "hindi" ? "हरियाणा इतिहास क्विज़ लें" : "Take Haryana History Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    {/* Navigation */}
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/haryana-basic-info" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Haryana Basic Information
                        </Link>
                        <Link href="/haryana-gk/medieval-history" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                            Next Chapter: Medieval History of Haryana
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा का प्राचीन इतिहास - संपूर्ण संदर्भ" : "Ancient History of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के प्राचीन इतिहास के बारे में व्यापक जानकारी प्रदान करता है जिसमें प्रागैतिहासिक काल, सिसवाल संस्कृति, सिंधु घाटी सभ्यता, वैदिक काल, महाभारत, मौर्य काल, यौधेय गणराज्य, पुष्यभूति वंश और बहुत कुछ शामिल है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about the ancient history of Haryana including prehistoric periods, Siswal Culture, Indus Valley Civilisation, Vedic period, Mahabharata, Mauryan period, Yaudheya Republic, Pushyabhuti dynasty, and more. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK and Ancient History."}
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