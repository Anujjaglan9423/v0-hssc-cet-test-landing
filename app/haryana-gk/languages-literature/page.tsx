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
    GraduationCap,
    Music,
    Mic,
    Drum,
    Guitar,
    Users,
    Crown,
    Star,
    PartyPopper,
    Flame,
    Moon,
    Sun,
    Flower,
    Snowflake,
    CloudRain,
    Leaf,
    Sparkles,
    Home,
    Church,
    Palette,
    BookMarked,
    Library,
    PenTool,
    ScrollText,
    Quote,
    Award,
    Trophy,
    School,
    University,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanviLanguageLiteraturePage() {
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
            questionHindi: "हरियाणा में कौन-कौन सी भाषाएँ बोली जाती हैं?",
            questionEnglish: "Which languages are spoken in Haryana?",
            answerHindi: "हरियाणा में आम तौर पर हरियाणवी, हिंदी, पंजाबी, उर्दू और अंग्रेजी भाषाएँ बोली जाती हैं। हरियाणा एक हिंदी भाषी राज्य है। हिंदी राज्य की आधिकारिक भाषा है और राज्य की 89% आबादी हिंदी भाषी है। पंजाबी राज्य की दूसरी आधिकारिक भाषा है।",
            answerEnglish: "Generally, Haryanvi, Hindi, Punjabi, Urdu, and English languages are spoken in Haryana. Haryana is a Hindi speaking state. Hindi is the official language of the state and 89% of the state's population is Hindi speaking. Punjabi is the second official language in the state."
        },
        {
            questionHindi: "हरियाणवी भाषा को और किन नामों से जाना जाता है?",
            questionEnglish: "By what other names is the Haryanvi language known?",
            answerHindi: "हरियाणवी भाषा को स्थानीय रूप से 'हरियाणवी' कहा जाता है। इसका लोक भाषाई रूप खड़ी बोली का पर्याय माना जाता है। इसे 'बांगरू' या 'जाटू' के नाम से भी जाना जाता है। ब्रिटिश भाषाविद् डॉ. ग्रियर्सन हरियाणवी भाषा को 'बांगरू' कहते हैं।",
            answerEnglish: "Locally, Hindi language in the state is called Haryanvi. Its folk linguistic form is considered synonymous with Khari Boli dialect. It is also known as Bangaru or Jatu. British linguist Dr. Grierson calls the Haryanvi language Bangaru."
        },
        {
            questionHindi: "हरियाणवी भाषा की प्रमुख बोलियाँ कौन-कौन सी हैं?",
            questionEnglish: "What are the major dialects of Haryanvi language?",
            answerHindi: "हरियाणवी भाषा की प्रमुख बोलियाँ हैं: 1. बांगरू (रोहतक, हिसार, जींद, भिवानी, सोनीपत, कैथल, करनाल, पानीपत में बोली जाने वाली सबसे प्रचलित बोली), 2. कौरवी (कुरुक्षेत्र, थानेसर, अंबाला में), 3. अहीरी/अहीरवाटी (रेवाड़ी, महेंद्रगढ़, नारनौल में), 4. बागड़ी (भिवानी, हिसार, सिरसा के पश्चिमी भाग में), 5. मेवाती (मेवात क्षेत्र में), और 6. ब्रज (फरीदाबाद, गुरुग्राम के पूर्वी भाग में)।",
            answerEnglish: "The main dialects of Haryanvi language are: 1. Bangru (most spoken in Rohtak, Hisar, Jind, Bhiwani, Sonipat, Kaithal, Karnal, Panipat), 2. Kauravi (Kurukshetra, Thanesar, Ambala), 3. Ahiri/Ahirwati (Rewari, Mahendragarh, Narnaul), 4. Bagri (western parts of Bhiwani, Hisar, Sirsa), 5. Mewati (Mewat region), and 6. Braj (eastern parts of Faridabad, Gurugram)."
        },
        {
            questionHindi: "हरियाणा के प्रसिद्ध संस्कृत साहित्यकार कौन हैं?",
            questionEnglish: "Who are the famous Sanskrit litterateurs of Haryana?",
            answerHindi: "हरियाणा के प्रसिद्ध संस्कृत साहित्यकारों में महर्षि वेद व्यास (महाभारत, पुराण, गीता के रचयिता), हर्षवर्धन (प्रियदर्शिका, नागानंद, रत्नावली), बाणभट्ट (हर्षचरितम, कादंबरी), कवि मयूर भट्ट (मयूराष्टक, सूर्य शतकम), पंडित विद्याधर गौड़, पंडित शिवनारायण शास्त्री, पंडित छज्जूराम विद्यासागर, माध्वाचार्य, और आचार्य विद्यानिधि शास्त्री शामिल हैं।",
            answerEnglish: "Famous Sanskrit litterateurs of Haryana include Maharishi Ved Vyas (composer of Mahabharata, Puranas, Gita), Harshavardhana (Priyadarsika, Nagananda, Ratnavali), Banabhatta (Harshacharitam, Kadambari), Kavi Mayur Bhatt (Mayurashtak, Surya Satakam), Pandit Vidyadhar Gaur, Pandit Shivnarayan Shastri, Pandit Chhajuram Vidyasagar, Madhwacharya, and Acharya Vidyanidhi Shastri."
        },
        {
            questionHindi: "हरियाणा साहित्य अकादमी की स्थापना कब और कहाँ हुई थी?",
            questionEnglish: "When and where was Haryana Sahitya Academy established?",
            answerHindi: "हरियाणा साहित्य अकादमी की स्थापना 9 जुलाई, 1970 को हुई थी। इसका मुख्यालय पंचकूला में स्थित है। यह वर्तमान में सूचना, जनसंपर्क एवं सांस्कृतिक कार्य विभाग के अधीन है। अकादमी का अध्यक्ष हरियाणा का मुख्यमंत्री होता है। यह अकादमी 'हरिगंधा' नामक मासिक साहित्यिक पत्रिका प्रकाशित करती है।",
            answerEnglish: "Haryana Sahitya Academy was established on 9th July, 1970. Its headquarters is in Panchkula. Currently, it is under the Department of Information, Public Relations and Cultural Works. The Chairman of this Academy is the Chief Minister of Haryana. This academy publishes a monthly literary magazine called 'Harigandha'."
        },
        {
            questionHindi: "हरियाणा में कितनी साहित्य अकादमियाँ हैं?",
            questionEnglish: "How many literary academies are there in Haryana?",
            answerHindi: "हरियाणा में संस्कृति और साहित्य को प्रोत्साहित करने के उद्देश्य से राज्य सरकार द्वारा 6 अकादमियाँ स्थापित की गई हैं: 1. हरियाणा साहित्य अकादमी, 2. हरियाणा संस्कृत अकादमी, 3. हरियाणा उर्दू अकादमी, 4. हरियाणा पंजाबी साहित्य अकादमी, 5. हरियाणा ग्रंथ अकादमी, और 6. हरियाणा इतिहास एवं संस्कृति अकादमी।",
            answerEnglish: "For promoting culture and literature in Haryana, the State Government has established 6 academies: 1. Haryana Sahitya Academy, 2. Haryana Sanskrit Academy, 3. Haryana Urdu Academy, 4. Haryana Punjabi Sahitya Academy, 5. Haryana Granth Academy, and 6. Haryana History and Culture Academy."
        },
        {
            questionHindi: "हरियाणा के पहले हिंदी साहित्यकार किसे माना जाता है?",
            questionEnglish: "Who is considered the first Hindi litterateur of Haryana?",
            answerHindi: "सिद्ध चौरंगीनाथ (चौरंगीनिया) को हरियाणा का पहला हिंदी साहित्यकार माना जाता है। उनका मूल नाम पूरनमल था और वे हरियाणा के मूल निवासी थे। उन्होंने प्राणसंकली और श्रीनाथ-अष्टक जैसी पुस्तकें लिखी हैं।",
            answerEnglish: "Siddha Chauranginath (Chauranginia) is considered the first Hindi litterateur of Haryana. His original name was Puranmal and he was native to Haryana. He has written books like Pranasamkali and Srinath-Ashtak."
        },
        {
            questionHindi: "बालमुकुंद गुप्त कौन थे?",
            questionEnglish: "Who was Balmukund Gupt?",
            answerHindi: "बालमुकुंद गुप्त का जन्म 14 नवंबर, 1865 को रेवाड़ी जिले के गुड़ियानी गाँव में हुआ था। वे प्रसिद्ध निबंधकार, पत्रकार और हिंदी भाषा के साहित्यकार थे। उनकी प्रसिद्ध रचनाएँ 'शिवशम्भु के चिट्ठे' और 'उर्दू बीबी के नाम चिट्ठी' हैं। उन्होंने हिंदुस्तान, बंगवासी और भारत मित्र जैसे समाचार पत्रों का सफल संपादन किया।",
            answerEnglish: "Balmukund Gupt was born on 14th November, 1865 in Gudiyani village of Rewari district. He was a famous essayist, journalist and Hindi litterateur. His famous works are 'Shivshambhu ke Chithe' and 'Urdu Bibi ke Naam Chithi'. He successfully edited newspapers like Hindustan, Bangwasi and Bharat Mitra."
        }
    ];

    // Languages of Haryana
    const languages = [
        { name: "Hindi", nameHindi: "हिंदी", status: "Official Language (89% population)", statusHindi: "आधिकारिक भाषा (89% जनसंख्या)" },
        { name: "Punjabi", nameHindi: "पंजाबी", status: "Second Official Language", statusHindi: "द्वितीय आधिकारिक भाषा" },
        { name: "Haryanvi", nameHindi: "हरियाणवी", status: "Local dialect (Bangaru/Jatu)", statusHindi: "स्थानीय बोली (बांगरू/जाटू)" },
        { name: "Urdu", nameHindi: "उर्दू", status: "Literary language", statusHindi: "साहित्यिक भाषा" },
        { name: "English", nameHindi: "अंग्रेजी", status: "Administrative language", statusHindi: "प्रशासनिक भाषा" }
    ];

    // Major Dialects
    const dialects = [
        {
            name: "Bangru",
            nameHindi: "बांगरू",
            region: "Rohtak, Hisar, Jind, Bhiwani, Sonipat, Kaithal, Karnal, Panipat",
            regionHindi: "रोहतक, हिसार, जींद, भिवानी, सोनीपत, कैथल, करनाल, पानीपत",
            description: "Most spoken dialect in Haryana. Typical area is Rohtak. Also called native dialect.",
            descriptionHindi: "हरियाणा में सबसे अधिक बोली जाने वाली बोली। विशिष्ट क्षेत्र रोहतक है। इसे देशी बोली भी कहा जाता है।"
        },
        {
            name: "Kauravi",
            nameHindi: "कौरवी",
            region: "Kurukshetra, Thanesar, Ambala, Jagadhri, Kalka, Panchkula",
            regionHindi: "कुरुक्षेत्र, थानेसर, अंबाला, जगाधरी, कालका, पंचकूला",
            description: "Also called Ambabali. Important contribution to development of standard Hindi. Bijnori is purest form.",
            descriptionHindi: "इसे अंबाबली भी कहा जाता है। मानक हिंदी के विकास में महत्वपूर्ण योगदान। बिजनौरी शुद्धतम रूप है।"
        },
        {
            name: "Ahiri (Ahirwati)",
            nameHindi: "अहीरी (अहीरवाटी)",
            region: "Kosli, Rewari, Mahendragarh, Narnaul, Pataudi, Jhajjar",
            regionHindi: "कोसली, रेवाड़ी, महेंद्रगढ़, नारनौल, पटौदी, झज्जर",
            description: "Language of Ahirs in Haryana. Rural area of Ahirwati is called Hiri.",
            descriptionHindi: "हरियाणा में अहीरों की भाषा। अहीरवाटी का ग्रामीण क्षेत्र हीरी कहलाता है।"
        },
        {
            name: "Bagri",
            nameHindi: "बागड़ी",
            region: "Bahal, Siwani, Western Hisar, Ellenabad, Chautala, Dabwali, Sirsa",
            regionHindi: "बहल, सिवानी, पश्चिमी हिसार, एलनाबाद, चौटाला, डबवाली, सिरसा",
            description: "Spoken in Bagar region of Haryana. Prof. Mathura Prasad Aggarwal listed 81 words.",
            descriptionHindi: "हरियाणा के बागड़ क्षेत्र में बोली जाती है। प्रो. मथुरा प्रसाद अग्रवाल ने 81 शब्दों की सूची बनाई।"
        },
        {
            name: "Mewati",
            nameHindi: "मेवाती",
            region: "Ferozepur-Jhirka, Nagina, Nuh, Hathi, Sohna, Bawal, Tawadu",
            regionHindi: "फिरोजपुर-झिरका, नगीना, नूह, हथीन, सोहना, बावल, तावडू",
            description: "Spoken in Mewat region. Ishwari Prasad Sharma called 300 words as Mewati.",
            descriptionHindi: "मेवात क्षेत्र में बोली जाती है। ईश्वरी प्रसाद शर्मा ने 300 शब्दों को मेवाती कहा।"
        },
        {
            name: "Braj",
            nameHindi: "ब्रज",
            region: "Eastern Faridabad, Gurugram, Mewat (Nuh)",
            regionHindi: "पूर्वी फरीदाबाद, गुरुग्राम, मेवात (नूह)",
            description: "Vocabulary similar to Bangru. Spoken in eastern parts.",
            descriptionHindi: "शब्दावली बांगरू के समान। पूर्वी भागों में बोली जाती है।"
        }
    ];

    // Sanskrit Litterateurs
    const sanskritLitterateurs = [
        {
            name: "Maharishi Ved Vyas",
            nameHindi: "महर्षि वेद व्यास",
            works: "Mahabharata (18 Parv, 1 lakh Shlokas), Puranas, Gita",
            worksHindi: "महाभारत (18 पर्व, 1 लाख श्लोक), पुराण, गीता",
            location: "Shamyapras (Pehowa) on Saraswati river",
            locationHindi: "शम्याप्रास (पेहोवा), सरस्वती नदी तट"
        },
        {
            name: "Harshavardhana",
            nameHindi: "हर्षवर्धन",
            works: "Priyadarsika, Nagananda, Ratnavali (Three Sanskrit plays)",
            worksHindi: "प्रियदर्शिका, नागानंद, रत्नावली (तीन संस्कृत नाटक)",
            location: "Thaneswar (Kurukshetra)",
            locationHindi: "थानेसर (कुरुक्षेत्र)"
        },
        {
            name: "Banabhatta",
            nameHindi: "बाणभट्ट",
            works: "Harshacharitam, Kadambari, Chandikasatakam, Parvati Parinaya",
            worksHindi: "हर्षचरितम, कादंबरी, चंडिकाशतकम, पार्वती परिणय",
            location: "Court poet of Harshavardhana",
            locationHindi: "हर्षवर्धन के दरबारी कवि"
        },
        {
            name: "Kavi Mayur Bhatt",
            nameHindi: "कवि मयूर भट्ट",
            works: "Mayurashtak, Surya Satakam",
            worksHindi: "मयूराष्टक, सूर्य शतकम",
            location: "Thaneswar",
            locationHindi: "थानेसर"
        },
        {
            name: "Pt. Vidyadhar Gaur",
            nameHindi: "पं. विद्याधर गौड़",
            works: "Katyayana Srautasutra, Sulabh Sutravati, Devachayagya Paddhati",
            worksHindi: "कात्यायन श्रौतसूत्र, सुलभ सूत्रवती, देवचयाग्य पद्धति",
            location: "Sirsa Khedi, Jind",
            locationHindi: "सिरसा खेड़ी, जींद"
        },
        {
            name: "Pt. Shivnarayan Shastri",
            nameHindi: "पं. शिवनारायण शास्त्री",
            works: "Commentary on Samkhya Granth Samkhyatavatprabodhini, Pushpika",
            worksHindi: "सांख्य ग्रंथ सांख्यतत्वप्रबोधिनी की टीका, पुष्पिका",
            location: "Gatauli, Jind (Born 1885)",
            locationHindi: "गतौली, जींद (जन्म 1885)"
        },
        {
            name: "Pt. Chhajuram Vidyasagar",
            nameHindi: "पं. छज्जूराम विद्यासागर",
            works: "Kurukshetrashtakam, Durgabhyudayanam Natakam, Sultan Charitram",
            worksHindi: "कुरुक्षेत्राष्टकम, दुर्गाभ्युदयनम नाटकम, सुल्तान चरित्रम",
            location: "Ritoli, Jind (Born 1894)",
            locationHindi: "रीतोली, जींद (जन्म 1894)"
        },
        {
            name: "Acharya Vidyanidhi Shastri",
            nameHindi: "आचार्य विद्यानिधि शास्त्री",
            works: "Vyavahar Bhanu, Dayanand Chandrodayam, Shri Gandhi Charitamritam",
            worksHindi: "व्यवहार भानु, दयानंद चन्द्रोदयम, श्री गांधी चरितामृतम",
            location: "Lohari, Panipat (Born 1911)",
            locationHindi: "लोहारी, पानीपत (जन्म 1911)"
        }
    ];

    // Sanskrit Epics
    const sanskritEpics = [
        { epic: "Dadaramadoy", epicHindi: "दादारामदोय", author: "Swami Haridas", authorHindi: "स्वामी हरिदास" },
        { epic: "Shrimastram Charitam", epicHindi: "श्रीमस्तराम चरितम", author: "Haridutt Shastri", authorHindi: "हरिदत्त शास्त्री" },
        { epic: "Harishchandra Mahakavyam", epicHindi: "हरिश्चंद्र महाकाव्यम", author: "Dr. Balbir Dutt Shastri", authorHindi: "डॉ. बलबीर दत्त शास्त्री" },
        { epic: "Shri Shankaracharyacharitam", epicHindi: "श्री शंकराचार्यचरितम", author: "Nigam Bodh Tirtha", authorHindi: "निगम बोध तीर्थ" },
        { epic: "Shri Krishnanand Mahakavyam", epicHindi: "श्री कृष्णानंद महाकाव्यम", author: "Mahakavi Vanmalidas", authorHindi: "महाकवि वनमालीदास" },
        { epic: "Gangayya Mahakavyam", epicHindi: "गंगय्या महाकाव्यम", author: "Pt. Chandrabhanu Shastri", authorHindi: "पं. चंद्रभानु शास्त्री" },
        { epic: "Amarcharita Mahakavyam", epicHindi: "अमरचरित महाकाव्यम", author: "Pt. Rameshwar Lal", authorHindi: "पं. रामेश्वर लाल" }
    ];

    // Hindi Litterateurs
    const hindiLitterateurs = [
        {
            name: "Siddha Chauranginath",
            nameHindi: "सिद्ध चौरंगीनाथ",
            works: "Pranasamkali, Srinath-Ashtak, Vayutribhuvnopdesh",
            worksHindi: "प्राणसंकली, श्रीनाथ-अष्टक, वायुत्रिभुवनोपदेश",
            note: "First Hindi litterateur of Haryana",
            noteHindi: "हरियाणा के पहले हिंदी साहित्यकार"
        },
        {
            name: "Balmukund Gupt",
            nameHindi: "बालमुकुंद गुप्त",
            works: "Shivshambhu ke Chithe, Urdu Bibi ke Naam Chithi, Haridas",
            worksHindi: "शिवशम्भु के चिट्ठे, उर्दू बीबी के नाम चिट्ठी, हरिदास",
            note: "Born 1865 in Rewari. Famous essayist and journalist",
            noteHindi: "जन्म 1865 रेवाड़ी। प्रसिद्ध निबंधकार एवं पत्रकार"
        },
        {
            name: "Pt. Madhav Prasad Mishra",
            nameHindi: "पं. माधव प्रसाद मिश्र",
            works: "Madhav Mishra Granthavali, Madhav Mishra Niyamavali",
            worksHindi: "माधव मिश्र ग्रंथावली, माधव मिश्र नियमावली",
            note: "Born 1928 in Kunga, Bhiwani",
            noteHindi: "जन्म 1928 कुंगा, भिवानी"
        },
        {
            name: "Surdas",
            nameHindi: "सूरदास",
            works: "Sursagar, Sursaravali, Sahitya Lahari, Nal Damayanti",
            worksHindi: "सूरसागर, सूरसारावली, साहित्य लहरी, नल दमयंती",
            note: "Born in Sihi village, Faridabad. Contemporary of Akbar",
            noteHindi: "जन्म सीही गाँव, फरीदाबाद। अकबर के समकालीन"
        },
        {
            name: "Sunita Jain",
            nameHindi: "सुनीता जैन",
            works: "Ek Aur Din, Kaha Milogi Kavita, Jane Ladki Pagli",
            worksHindi: "एक और दिन, कहाँ मिलोगी कविता, जाने लड़की पगली",
            note: "Born 1941 Ambala. Padma Shri (2004), Vyas Samman (2015)",
            noteHindi: "जन्म 1941 अंबाला। पद्मश्री (2004), व्यास सम्मान (2015)"
        },
        {
            name: "Swadesh Deepak",
            nameHindi: "स्वदेश दीपक",
            works: "Court Martial (famous drama), Number-57 Squadron",
            worksHindi: "कोर्ट मार्शल (प्रसिद्ध नाटक), नंबर-57 स्क्वाड्रन",
            note: "Born 1942. Famous playwright, story writer and novelist",
            noteHindi: "जन्म 1942। प्रसिद्ध नाटककार, कहानीकार और उपन्यासकार"
        }
    ];

    // Urdu Litterateurs
    const urduLitterateurs = [
        {
            name: "Altaf Hussain Hali",
            nameHindi: "अल्ताफ हुसैन हाली",
            works: "Hayat-e-Saadi, Yadgar-e-Galib, Hayat-e-Javed, Musaddas-e-Hali",
            worksHindi: "हयात-ए-सादी, यादगार-ए-गालिब, हयात-ए-जावेद, मुसद्दस-ए-हाली",
            note: "Born 1837 Panipat. Title 'Shamsul Ulema' (1904)",
            noteHindi: "जन्म 1837 पानीपत। 'शम्सुल उलेमा' की उपाधि (1904)"
        },
        {
            name: "Khwaja Ahmad 'Abbas'",
            nameHindi: "ख्वाजा अहमद 'अब्बास'",
            works: "Ababil, Ek Ladki, Musafir ki Diary, Mein Kaun Hoon",
            worksHindi: "अबाबील, एक लड़की, मुसाफिर की डायरी, मैं कौन हूँ",
            note: "From Panipat. Received President's Award",
            noteHindi: "पानीपत से। राष्ट्रपति पुरस्कार से सम्मानित"
        },
        {
            name: "Dr. Sultan Anjum",
            nameHindi: "डॉ. सुल्तान अंजुम",
            works: "Doobte Manzar ka Safar, Khwahishein Khwab Hain, Sarabe Aariju",
            worksHindi: "डूबते मंजर का सफर, ख्वाहिशें ख्वाब हैं, सराबे आरिजू",
            note: "Editor of Tameer-e-Haryana for 35 years",
            noteHindi: "35 वर्षों तक तामीर-ए-हरियाणा के संपादक"
        },
        {
            name: "Kashmiri Lal Zakir",
            nameHindi: "कश्मीरी लाल जाकिर",
            works: "Sindoor ki Rakh, Chhatthi ka Dudh, Mera Gaon Meri Atma Hai",
            worksHindi: "सिंदूर की राख, छट्ठी का दूध, मेरा गाँव मेरी आत्मा है",
            note: "Former Secretary of Haryana Urdu Academy",
            noteHindi: "हरियाणा उर्दू अकादमी के पूर्व सचिव"
        }
    ];

    // Sufi Literature
    const sufiLitterateurs = [
        {
            name: "Sheikh Muhammad Turk",
            nameHindi: "शेख मुहम्मद तुर्क",
            contribution: "First Sufi Saint of Haryana, started Sufism in Haryanvi literature",
            contributionHindi: "हरियाणा के पहले सूफी संत, हरियाणवी साहित्य में सूफीवाद की शुरुआत"
        },
        {
            name: "Hazrat Khairushah",
            nameHindi: "हजरत खैरूशाह",
            contribution: "Composed 'Barahmas' in Haryanvi language",
            contributionHindi: "हरियाणवी भाषा में 'बारहमास' की रचना"
        },
        {
            name: "Shah Muhammad Ramzan 'Shaheed'",
            nameHindi: "शाह मुहम्मद रमज़ान 'शहीद'",
            contribution: "Akayade Azim, Akhirgat, Bulbule Bagenabi. Known as Hadi-e-Haryana",
            contributionHindi: "अकायदे अजीम, आखिरगत, बुलबुले बगेनबी। हादी-ए-हरियाणा के नाम से जाने जाते हैं"
        },
        {
            name: "Gulam Qadir",
            nameHindi: "गुलाम कादिर",
            contribution: "Prem Neher, Prem Vaani, Prem Pyaala, Inatakhab, Jogesagar",
            contributionHindi: "प्रेम नेहर, प्रेम वाणी, प्रेम प्याला, इनतखाब, जोगेसागर"
        }
    ];

    // Jain Literature
    const jainLitterateurs = [
        {
            name: "Pushpadanta",
            nameHindi: "पुष्पदंत",
            works: "Satkhandagama (Six parts), Mahapurana",
            worksHindi: "षट्खंडागम (छह भाग), महापुराण",
            note: "Aadi Jain poet of Haryana, native of Rohtak",
            noteHindi: "हरियाणा के आदि जैन कवि, रोहतक के निवासी"
        },
        {
            name: "Banarsidas",
            nameHindi: "बनारसीदास",
            works: "Ardh Kathanak, Nam Mala, Moh Vivek Yudh, Banarasi Vilas",
            worksHindi: "अर्ध कथानक, नाम माला, मोह विवेक युद्ध, बनारसी विलास",
            note: "Important Jain litterateur",
            noteHindi: "महत्वपूर्ण जैन साहित्यकार"
        },
        {
            name: "Kavi Sudharu (Sadhas)",
            nameHindi: "कवि सुधारू (साधस)",
            works: "Pradyumn Charit (Paradvnu Chowpai)",
            worksHindi: "प्रद्युम्न चरित (परद्वनु चौपाई)",
            note: "From Agroha, Hisar",
            noteHindi: "अग्रोहा, हिसार से"
        }
    ];

    // Saint Literature
    const saintLiterature = [
        {
            sect: "Garib Sect",
            sectHindi: "गरीब संप्रदाय",
            founder: "Saint Garib Das",
            founderHindi: "संत गरीबदास",
            details: "Born 1717 in Chhudani, Jhajjar. Composed Amritvani (24,000 couplets). First Nirgun saint poet of Haryana.",
            detailsHindi: "जन्म 1717 छुड़ानी, झज्जर। अमृतवाणी की रचना (24,000 दोहे)। हरियाणा के पहले निर्गुण संत कवि।"
        },
        {
            sect: "Dadu Sect",
            sectHindi: "दादू संप्रदाय",
            founder: "Saint Dadudayal",
            founderHindi: "संत दादूदयाल",
            details: "Nischal Das composed Vichar Sagar and Vritti Prabhakar. Banwari Das is chief Dadu Panthi Saint.",
            detailsHindi: "निश्चल दास ने विचार सागर और वृत्ति प्रभाकर की रचना की। बनवारी दास प्रमुख दादू पंथी संत हैं।"
        },
        {
            sect: "Kabir Sect",
            sectHindi: "कबीर संप्रदाय",
            founder: "Saint Indraj of Badli",
            founderHindi: "बादली के संत इंद्रराज",
            details: "Harde Das was important saint. His Vaani compiled in Hriday Prakash.",
            detailsHindi: "हरदे दास महत्वपूर्ण संत थे। उनकी वाणी हृदय प्रकाश में संकलित है।"
        },
        {
            sect: "Nath (Siddha) Literature",
            sectHindi: "नाथ (सिद्ध) साहित्य",
            founder: "Chaurangi Nath, Gorakhnath",
            founderHindi: "चौरंगी नाथ, गोरखनाथ",
            details: "Gorakhnath composed 49 ragas and 182 verses in Haryanvi. Five Nath texts in Kurukshetra University.",
            detailsHindi: "गोरखनाथ ने हरियाणवी में 49 राग और 182 पदों की रचना की। कुरुक्षेत्र विश्वविद्यालय में पाँच नाथ ग्रंथ सुरक्षित हैं।"
        }
    ];

    // Ramkavya Tradition
    const ramkavyaLitterateurs = [
        { name: "Isardas", nameHindi: "ईशरदास", works: "Angad Per, Bharat Vilap, Bharat Milap, Saraswati Katha" },
        { name: "Bhagwatidas", nameHindi: "भगवतीदास", works: "Sitasetu" },
        { name: "Ramkavi Hridayaram", nameHindi: "रामकवि हृदयाराम", works: "Hanuman Natak, Chitrakoot Vilas, Dharma Charitra, Rukmani Mangal" },
        { name: "Kavi Ramdas", nameHindi: "कवि रामदास", works: "Ramayan, Kartik Tarang, Ganga, Byahalo, Sudama Charitra" },
        { name: "Bhai Santosh Singh", nameHindi: "भाई संतोष सिंह", works: "Namkosh, Guru Nanak Prakash, Guru Pratap Suraj (translated Valmiki Ramayan)" },
        { name: "Ram Singh Armaan", nameHindi: "राम सिंह अरमान", works: "Armaan Ramayana (7 volumes)" }
    ];

    // Krishna Bhakti Kavya
    const krishnaBhaktiLitterateurs = [
        { name: "Pushpdan", nameHindi: "पुष्पदान", works: "Mahapurana", worksHindi: "महापुराण" },
        { name: "Surdas", nameHindi: "सूरदास", works: "Sursagar, Sursaravali, Sahitya Lahari", worksHindi: "सूरसागर, सूरसारावली, साहित्य लहरी" },
        { name: "Kavi Sudharu", nameHindi: "कवि सुधारू", works: "Padmacharit", worksHindi: "पद्मचरित" },
        { name: "Mahakavi Hridayram", nameHindi: "महाकवि हृदयराम", works: "Rukmani Mangal", worksHindi: "रुक्मिणी मंगल" },
        { name: "Sant Garib Das", nameHindi: "संत गरीबदास", works: "Krishna Stotra", worksHindi: "कृष्ण स्तोत्र" },
        { name: "Ramdas", nameHindi: "रामदास", works: "Sudamacharit", worksHindi: "सुदामाचरित" }
    ];

    // Modern Poets
    const modernPoets = [
        { name: "Jaynath Nalin", nameHindi: "जयनाथ नलिन", works: "Yamini, Dharti ke Bol, Devyaani" },
        { name: "Udayabhanu Hans", nameHindi: "उदयभानु हंस", works: "Hindi Rubaiyan, Hansmuktavali, Sargam, Amrit Kalash", title: "Rubai Samrat", titleHindi: "रुबाई सम्राट" },
        { name: "Khushiram Vashistha", nameHindi: "खुशीराम वशिष्ठ", works: "Premophar, Ansu, Phool aur Angare, Meerabai" },
        { name: "Rameshwar Lal Khandelwal", nameHindi: "रामेश्वर लाल खंडेलवाल 'तरुण'", works: "Pratham Kiran, Himachal, Agni Sangeet" },
        { name: "Dr. Chandra Trikha", nameHindi: "डॉ. चंद्र त्रिखा", works: "Paashan Yug, Shabdo ka Jangal, Dost" },
        { name: "Devi Shankar Prabhakar", nameHindi: "देवी शंकर प्रभाकर", works: "Jagmag Jagra, Swadhinta Sangram, Haryana ek Adhyayan" }
    ];

    // Ghazal Singers
    const ghazalSingers = [
        { name: "Vijay Kumar Sinhal", nameHindi: "विजय कुमार सिंहल", collection: "Dhoop Hamare Hisse Ki (First Ghazal collection of Haryana, 1982)", collectionHindi: "धूप हमारे हिस्से की (हरियाणा का पहला ग़ज़ल संग्रह, 1982)" },
        { name: "Kanwal Haryanvi", nameHindi: "कँवल हरियाणवी", collection: "Haryanvi Ghazalkaar. Born 9 May, 1927 in Pai, Kaithal", collectionHindi: "हरियाणवी ग़ज़लकार। जन्म 9 मई, 1927 पाई, कैथल" },
        { name: "Surendra Verma", nameHindi: "सुरेंद्र वर्मा", collection: "Aina Mein Talash Chehre, Aaj Ke Dashrath", collectionHindi: "आईना में तलाश चेहरे, आज के दशरथ" },
        { name: "Madhav Kaushik", nameHindi: "माधव कौशिक", collection: "Aina Ke Shahar Me, Kiran Subah Ki", collectionHindi: "आईना के शहर में, किरण सुबह की" }
    ];

    // Literary Academies
    const academies = [
        {
            name: "Haryana Sahitya Academy",
            nameHindi: "हरियाणा साहित्य अकादमी",
            established: "9th July, 1970",
            establishedHindi: "9 जुलाई, 1970",
            headquarters: "Panchkula",
            headquartersHindi: "पंचकूला",
            magazine: "Harigandha (Monthly)",
            magazineHindi: "हरिगंधा (मासिक)"
        },
        {
            name: "Haryana Sanskrit Academy",
            nameHindi: "हरियाणा संस्कृत अकादमी",
            established: "8th August, 2002",
            establishedHindi: "8 अगस्त, 2002",
            headquarters: "Panchkula",
            headquartersHindi: "पंचकूला",
            magazine: "Hariprabha (Monthly)",
            magazineHindi: "हरिप्रभा (मासिक)"
        },
        {
            name: "Haryana Urdu Academy",
            nameHindi: "हरियाणा उर्दू अकादमी",
            established: "22nd December, 1985",
            establishedHindi: "22 दिसंबर, 1985",
            headquarters: "Panchkula",
            headquartersHindi: "पंचकूला",
            magazine: "Jamana Tat, Urdu Disha (Quarterly)",
            magazineHindi: "जमाना तत, उर्दू दिशा (त्रैमासिक)"
        },
        {
            name: "Haryana Punjabi Sahitya Academy",
            nameHindi: "हरियाणा पंजाबी साहित्य अकादमी",
            established: "October, 1996",
            establishedHindi: "अक्टूबर, 1996",
            headquarters: "Panchkula",
            headquartersHindi: "पंचकूला",
            magazine: "Shabd Boond (Monthly)",
            magazineHindi: "शब्द बूंद (मासिक)"
        },
        {
            name: "Haryana Granth Academy",
            nameHindi: "हरियाणा ग्रंथ अकादमी",
            established: "1970 (Reorganized 1st Sept, 2011)",
            establishedHindi: "1970 (1 सितंबर, 2011 को पुनर्गठित)",
            headquarters: "Panchkula",
            headquartersHindi: "पंचकूला",
            magazine: "Sapta Sindhu (Quarterly), Katha Samay (Monthly)",
            magazineHindi: "सप्त सिंधु (त्रैमासिक), कथा समय (मासिक)"
        },
        {
            name: "Haryana History and Culture Academy",
            nameHindi: "हरियाणा इतिहास एवं संस्कृति अकादमी",
            established: "7th June, 2013 (Statutory independence)",
            establishedHindi: "7 जून, 2013 (सांविधिक स्वतंत्रता)",
            headquarters: "Kurukshetra (Shifted 2016)",
            headquartersHindi: "कुरुक्षेत्र (2016 में स्थानांतरित)",
            magazine: "—",
            magazineHindi: "—"
        }
    ];

    // Sahitya Academy Awards
    const sahityaAcademyAwards = [
        { award: "Aajeevan Sahitya Sadhna Samman", awardHindi: "आजीवन साहित्य साधना सम्मान", amount: "₹5 Lakh", age: "65+ years", level: "National", levelHindi: "राष्ट्रीय" },
        { award: "Pt. Madhav Prasad Mishra Award / Haryana Sahitya Ratna", awardHindi: "पं. माधव प्रसाद मिश्र पुरस्कार / हरियाणा साहित्य रत्न", amount: "₹2.5 Lakh", age: "60+ years", level: "State", levelHindi: "राज्य" },
        { award: "Mahakavi Surdas Award (Sur Samman)", awardHindi: "महाकवि सूरदास पुरस्कार (सुर सम्मान)", amount: "₹1.5 Lakh", age: "65+ years", level: "National", levelHindi: "राष्ट्रीय" },
        { award: "Pt. Lakhmichand Award", awardHindi: "पं. लखमीचंद पुरस्कार", amount: "₹1 Lakh", age: "45+ years", level: "National", levelHindi: "राष्ट्रीय" },
        { award: "Jankavi Meher Singh Award", awardHindi: "जनकवि मेहर सिंह पुरस्कार", amount: "₹1 Lakh", age: "45+ years", level: "State", levelHindi: "राज्य" },
        { award: "Aditya-Alhad Hasya Award", awardHindi: "आदित्य-अल्हड़ हास्य पुरस्कार", amount: "₹1 Lakh", age: "45+ years", level: "National", levelHindi: "राष्ट्रीय" },
        { award: "Best Female Creator Award", awardHindi: "श्रेष्ठ महिला रचनाकार पुरस्कार", amount: "₹1 Lakh", age: "45+ years", level: "State", levelHindi: "राज्य" },
        { award: "Lala Deshbandhu Gupt Samman", awardHindi: "लाला देशबंधु गुप्त सम्मान", amount: "₹1 Lakh", age: "45+ years", level: "State", levelHindi: "राज्य" },
        { award: "Babu Balmukund Gupt Samman", awardHindi: "बाबू बालमुकुंद गुप्त सम्मान", amount: "₹50,000", age: "45+ years", level: "State", levelHindi: "राज्य" },
        { award: "Haryana Gaurav Samman", awardHindi: "हरियाणा गौरव सम्मान", amount: "₹50,000", age: "50+ years", level: "National", levelHindi: "राष्ट्रीय" }
    ];

    // Sanskrit Academy Awards
    const sanskritAcademyAwards = [
        { award: "Maharishi Valmiki Award", awardHindi: "महर्षि वाल्मीकि पुरस्कार", amount: "₹1,00,000" },
        { award: "Maharishi Vedvyas Award", awardHindi: "महर्षि वेदव्यास पुरस्कार", amount: "₹51,000" },
        { award: "Banabhatta Award", awardHindi: "बाणभट्ट पुरस्कार", amount: "₹51,000" },
        { award: "Haryana Sanskrit Gaurav Samman", awardHindi: "हरियाणा संस्कृत गौरव सम्मान", amount: "₹1,50,000" },
        { award: "Guru Virjanand Acharya Samman", awardHindi: "गुरु विरजानंद आचार्य सम्मान", amount: "₹51,000" },
        { award: "Swami Dharmadev Sanskrit Samman", awardHindi: "स्वामी धर्मदेव संस्कृत सम्मान", amount: "₹1,00,000" },
        { award: "Book Award Scheme", awardHindi: "पुस्तक पुरस्कार योजना", amount: "₹31,000" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 dark:from-amber-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
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
                        <BookOpen className="w-4 h-4" />
                        {language === "hindi" ? "भाषा और साहित्य - हरियाणा सरकार" : "Language and Literature - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा की" : "Languages and"} <span className="text-amber-600 dark:text-amber-400">{language === "hindi" ? "भाषा और साहित्य" : "Literature of Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा की भाषाओं, बोलियों, संस्कृत साहित्य, हिंदी साहित्य, उर्दू साहित्य, सूफी साहित्य, जैन साहित्य, संत साहित्य और साहित्य अकादमियों की संपूर्ण जानकारी"
                            : "Complete information about languages, dialects, Sanskrit literature, Hindi literature, Urdu literature, Sufi literature, Jain literature, Saint literature, and literary academies of Haryana"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Languages className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "भाषाएँ और बोलियाँ" : "Languages & Dialects"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <ScrollText className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "संस्कृत साहित्य" : "Sanskrit Literature"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <PenTool className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "हिंदी-उर्दू साहित्य" : "Hindi-Urdu Literature"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Award className="w-4 h-4 text-amber-600" />
                            <span>{language === "hindi" ? "साहित्य अकादमियाँ" : "Literary Academies"}</span>
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
                                <Library className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "परिचय" : "Introduction"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "हरियाणा में सभी युगों से भाषा और साहित्य की समृद्ध विरासत रही है। इसकी भाषा और संस्कृति के प्रमाण महाभारत काल से पहले देखे जा सकते हैं। यह वह भूमि है जहाँ भगवान कृष्ण ने अर्जुन को श्रेष्ठ उपदेश दिया था। सबसे पवित्र हिंदू धार्मिक पुस्तक 'गीता' यहीं लिखी गई थी। ऐसा माना जाता है कि वेदों की रचना यहीं सरस्वती नदी के तट पर शुरू हुई थी। बाद में, जैन और नाथ कवियों ने हरियाणा को साहित्यिक दृष्टि से समृद्ध बनाने में बहुत योगदान दिया।"
                                : "Haryana has a rich heritage of literature and language through all the ages. The evidence of its language and culture can be seen before the Mahabharata period. It is the land where Lord Krishna has given the supreme sermon to Arjun. Most sacred Hindu religious book The Geeta was written here. It is believed that the creation of the Vedas was started here on the bank of Saraswati river. Later, Jain and Nath poets contributed a lot to make Haryana rich in literary terms."}
                        </p>
                    </div>

                    {/* Languages Section */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/30">
                                <Languages className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "हरियाणा की भाषाएँ" : "Languages of Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {languages.map((lang, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border text-center">
                                    <h3 className="text-lg font-semibold text-blue-600">{language === "hindi" ? lang.nameHindi : lang.name}</h3>
                                    <p className="text-sm text-muted-foreground">{language === "hindi" ? lang.statusHindi : lang.status}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-card rounded-xl p-4 border">
                            <h3 className="text-md font-semibold text-blue-600 mb-2">{language === "hindi" ? "हरियाणवी भाषा की विशेषताएँ" : "Features of Haryanvi Language"}</h3>
                            <p className="text-sm text-muted-foreground">
                                {language === "hindi"
                                    ? "हरियाणवी भाषा देवनागरी लिपि में लिखी जाती है। इसकी उत्पत्ति खड़ी बोली या कौरवी से मानी जाती है। हरियाणवी के अधिकांश शब्द ब्रजभाषा से व्युत्पन्न हैं। ब्रजभाषा का मूल स्रोत संस्कृत और शौरसेनी अपभ्रंश है। हरियाणवी में कुल 10 स्वर और 32 व्यंजन हैं। हरियाणवी भाषा में व्यंजन उच्चारण के समय पूर्व-व्यंजन यानी अघोष व्यंजन में परिवर्तित हो जाते हैं। उदाहरण के लिए, 'घर' के स्थान पर 'गर', 'धर्म' के स्थान पर 'दरम', 'झंडा' के स्थान पर 'जंडा'।"
                                    : "Haryanvi language is written in Devanagari script. Its origin is believed to be from Khari Boli or Kauravi. Most words are derived from Brajbhasha. The original source of Brajbhasha is Sanskrit and Shaurseni Apabhransh. There are total 10 vowels and 32 consonants in Haryanvi. In Haryanvi, consonants get converted into pre-consonants (voiceless) while pronunciation. For example, 'gar' instead of 'ghar' (house), 'daram' instead of 'dharma', 'janda' instead of 'jhanda' (flag)."}
                            </p>
                        </div>
                    </div>

                    {/* Major Dialects Section */}
                    <div className="bg-green-500/5 rounded-2xl p-6 md:p-8 border-2 border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/30">
                                <MapPin className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{language === "hindi" ? "हरियाणवी की प्रमुख बोलियाँ" : "Major Dialects of Haryanvi"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {dialects.map((dialect, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-green-600">{language === "hindi" ? dialect.nameHindi : dialect.name}</h3>
                                    <p className="text-xs text-muted-foreground mt-1 font-medium">{language === "hindi" ? dialect.regionHindi : dialect.region}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? dialect.descriptionHindi : dialect.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sanskrit Literature Section */}
                    <div className="bg-purple-500/5 rounded-2xl p-6 md:p-8 border-2 border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-500/30">
                                <ScrollText className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-600">{language === "hindi" ? "संस्कृत साहित्य" : "Sanskrit Literature"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {sanskritLitterateurs.map((litt, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-lg font-semibold text-purple-600">{language === "hindi" ? litt.nameHindi : litt.name}</h3>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? litt.locationHindi : litt.location}</p>
                                    <p className="text-sm text-muted-foreground mt-1"><span className="font-medium">{language === "hindi" ? "रचनाएँ:" : "Works:"}</span> {language === "hindi" ? litt.worksHindi : litt.works}</p>
                                </div>
                            ))}
                        </div>
                        <h3 className="text-xl font-semibold text-purple-600 mb-3 mt-6">{language === "hindi" ? "संस्कृत महाकाव्य" : "Sanskrit Epics"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {sanskritEpics.map((epic, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-3 border">
                                    <p className="font-medium text-purple-600">{language === "hindi" ? epic.epicHindi : epic.epic}</p>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? epic.authorHindi : epic.author}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hindi Literature Section */}
                    <div className="bg-orange-500/5 rounded-2xl p-6 md:p-8 border-2 border-orange-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-orange-500/30">
                                <BookMarked className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-orange-600">{language === "hindi" ? "हिंदी साहित्य" : "Hindi Literature"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {hindiLitterateurs.map((litt, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-orange-600">{language === "hindi" ? litt.nameHindi : litt.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? litt.worksHindi : litt.works}</p>
                                    <p className="text-xs text-orange-500 mt-1">{language === "hindi" ? litt.noteHindi : litt.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Urdu Literature Section */}
                    <div className="bg-emerald-500/5 rounded-2xl p-6 md:p-8 border-2 border-emerald-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-emerald-500/30">
                                <PenTool className="w-5 h-5 text-emerald-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-emerald-600">{language === "hindi" ? "उर्दू साहित्य" : "Urdu Literature"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {urduLitterateurs.map((litt, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-emerald-600">{language === "hindi" ? litt.nameHindi : litt.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? litt.worksHindi : litt.works}</p>
                                    <p className="text-xs text-emerald-500 mt-1">{language === "hindi" ? litt.noteHindi : litt.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sufi Literature Section */}
                    <div className="bg-teal-500/5 rounded-2xl p-6 md:p-8 border-2 border-teal-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-teal-500/30">
                                <Sparkles className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-teal-600">{language === "hindi" ? "सूफी साहित्य" : "Sufi Literature"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {sufiLitterateurs.map((litt, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-teal-600">{language === "hindi" ? litt.nameHindi : litt.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? litt.contributionHindi : litt.contribution}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Jain Literature Section */}
                    <div className="bg-rose-500/5 rounded-2xl p-6 md:p-8 border-2 border-rose-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-rose-500/30">
                                <Quote className="w-5 h-5 text-rose-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-rose-600">{language === "hindi" ? "जैन साहित्य" : "Jain Literature"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {jainLitterateurs.map((litt, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-rose-600">{language === "hindi" ? litt.nameHindi : litt.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? litt.worksHindi : litt.works}</p>
                                    <p className="text-xs text-rose-500 mt-1">{language === "hindi" ? litt.noteHindi : litt.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Saint Literature Section */}
                    <div className="bg-indigo-500/5 rounded-2xl p-6 md:p-8 border-2 border-indigo-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-500/30">
                                <Heart className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-indigo-600">{language === "hindi" ? "संत साहित्य" : "Saint Literature"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {saintLiterature.map((sect, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-indigo-600">{language === "hindi" ? sect.sectHindi : sect.sect}</h3>
                                    <p className="text-sm font-medium text-indigo-500">{language === "hindi" ? sect.founderHindi : sect.founder}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? sect.detailsHindi : sect.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ramkavya & Krishna Bhakti Kavya */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-sky-500/5 rounded-2xl p-6 border-2 border-sky-500/20">
                            <h3 className="text-xl font-bold text-sky-600 mb-3">{language === "hindi" ? "रामकाव्य परंपरा" : "Ramkavya Tradition"}</h3>
                            <div className="space-y-3">
                                {ramkavyaLitterateurs.slice(0, 4).map((litt, idx) => (
                                    <div key={idx} className="bg-card rounded-xl p-3 border">
                                        <p className="font-medium text-sky-600">{language === "hindi" ? litt.nameHindi : litt.name}</p>
                                        <p className="text-xs text-muted-foreground">{litt.works}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-pink-500/5 rounded-2xl p-6 border-2 border-pink-500/20">
                            <h3 className="text-xl font-bold text-pink-600 mb-3">{language === "hindi" ? "कृष्ण भक्ति काव्य" : "Krishna Bhakti Kavya"}</h3>
                            <div className="space-y-3">
                                {krishnaBhaktiLitterateurs.slice(0, 4).map((litt, idx) => (
                                    <div key={idx} className="bg-card rounded-xl p-3 border">
                                        <p className="font-medium text-pink-600">{language === "hindi" ? litt.nameHindi : litt.name}</p>
                                        <p className="text-xs text-muted-foreground">{language === "hindi" ? litt.worksHindi : litt.works}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Modern Poets & Ghazals */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-violet-500/5 rounded-2xl p-6 border-2 border-violet-500/20">
                            <h3 className="text-xl font-bold text-violet-600 mb-3">{language === "hindi" ? "आधुनिक कवि" : "Modern Poets"}</h3>
                            <div className="space-y-3">
                                {modernPoets.map((poet, idx) => (
                                    <div key={idx} className="bg-card rounded-xl p-3 border">
                                        <p className="font-medium text-violet-600">{language === "hindi" ? poet.nameHindi : poet.name} {poet.title && <span className="text-xs font-normal">({language === "hindi" ? poet.titleHindi : poet.title})</span>}</p>
                                        <p className="text-xs text-muted-foreground">{poet.works}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-fuchsia-500/5 rounded-2xl p-6 border-2 border-fuchsia-500/20">
                            <h3 className="text-xl font-bold text-fuchsia-600 mb-3">{language === "hindi" ? "ग़ज़ल संग्रह" : "Ghazal Collections"}</h3>
                            <div className="space-y-3">
                                {ghazalSingers.map((ghazal, idx) => (
                                    <div key={idx} className="bg-card rounded-xl p-3 border">
                                        <p className="font-medium text-fuchsia-600">{language === "hindi" ? ghazal.nameHindi : ghazal.name}</p>
                                        <p className="text-xs text-muted-foreground">{language === "hindi" ? ghazal.collectionHindi : ghazal.collection}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Literary Academies Section */}
                    <div className="bg-cyan-500/5 rounded-2xl p-6 md:p-8 border-2 border-cyan-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-cyan-500/30">
                                <University className="w-5 h-5 text-cyan-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-cyan-600">{language === "hindi" ? "साहित्य अकादमियाँ" : "Literary Academies"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {academies.map((academy, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-cyan-600">{language === "hindi" ? academy.nameHindi : academy.name}</h3>
                                    <p className="text-xs text-muted-foreground">📅 {language === "hindi" ? academy.establishedHindi : academy.established} | 📍 {language === "hindi" ? academy.headquartersHindi : academy.headquarters}</p>
                                    <p className="text-xs text-cyan-500 mt-1">📖 {language === "hindi" ? academy.magazineHindi : academy.magazine}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sahitya Academy Awards */}
                    <div className="bg-yellow-500/5 rounded-2xl p-6 md:p-8 border-2 border-yellow-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-yellow-500/30">
                                <Trophy className="w-5 h-5 text-yellow-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-yellow-600">{language === "hindi" ? "हरियाणा साहित्य अकादमी पुरस्कार" : "Haryana Sahitya Academy Awards"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 text-yellow-600">{language === "hindi" ? "पुरस्कार" : "Award"}</th>
                                        <th className="text-left p-2 text-yellow-600">{language === "hindi" ? "राशि" : "Amount"}</th>
                                        <th className="text-left p-2 text-yellow-600">{language === "hindi" ? "आयु" : "Age"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sahityaAcademyAwards.map((award, idx) => (
                                        <tr key={idx} className="border-b hover:bg-muted/30">
                                            <td className="p-2">{language === "hindi" ? award.awardHindi : award.award}</td>
                                            <td className="p-2">{award.amount}</td>
                                            <td className="p-2">{award.age}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Sanskrit Academy Awards */}
                    <div className="bg-red-500/5 rounded-2xl p-6 md:p-8 border-2 border-red-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-red-500/30">
                                <Award className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-600">{language === "hindi" ? "हरियाणा संस्कृत अकादमी पुरस्कार" : "Haryana Sanskrit Academy Awards"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {sanskritAcademyAwards.map((award, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-3 border flex justify-between items-center">
                                    <span className="text-sm font-medium text-red-600">{language === "hindi" ? award.awardHindi : award.award}</span>
                                    <span className="text-sm bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded-full">{award.amount}</span>
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
                        {language === "hindi" ? "हरियाणा भाषा और साहित्य: तथ्य सारांश" : "Haryana Language & Literature: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">6</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "प्रमुख बोलियाँ" : "Major Dialects"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">89%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हिंदी भाषी जनसंख्या" : "Hindi Speaking Population"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">10</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हरियाणवी में स्वर" : "Vowels in Haryanvi"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">32</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हरियाणवी में व्यंजन" : "Consonants in Haryanvi"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">6</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "साहित्य अकादमियाँ" : "Literary Academies"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">1970</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "साहित्य अकादमी स्थापना" : "Sahitya Academy Est."}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">1478</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सूरदास का जन्म" : "Surdas Birth"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">24000</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "गरीबदास के दोहे" : "Garibdas Couplets"}</p>
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
                            {language === "hindi" ? "हरियाणा की भाषा और साहित्य के" : "Common"} <span className="text-amber-600">{language === "hindi" ? "बारे में सामान्य प्रश्न" : "Questions About Haryana's Language and Literature"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा की भाषाओं, बोलियों, संस्कृत, हिंदी, उर्दू साहित्य और साहित्य अकादमियों के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's languages, dialects, Sanskrit, Hindi, Urdu literature and literary academies"}
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
                            {language === "hindi" ? "अपने हरियाणा भाषा और साहित्य के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Language & Literature?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-amber-600 hover:bg-amber-700">
                                {language === "hindi" ? "हरियाणा भाषा एवं साहित्य क्विज़ लें" : "Take Haryana Language & Literature Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/education-health" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "शिक्षा एवं स्वास्थ्य" : "Education & Health"}
                        </Link>
                        <Link href="/haryana-gk/art-crafts" className="text-amber-600 hover:text-amber-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: कला और शिल्प" : "Next Chapter: Art and Crafts"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा की भाषा और साहित्य - संपूर्ण संदर्भ" : "Languages and Literature of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की भाषाओं (हिंदी, पंजाबी, हरियाणवी), बोलियों (बांगरू, कौरवी, अहीरवाटी, बागड़ी, मेवाती, ब्रज), संस्कृत साहित्य (महर्षि वेद व्यास, हर्षवर्धन, बाणभट्ट), हिंदी साहित्य (सूरदास, बालमुकुंद गुप्त), उर्दू साहित्य (अल्ताफ हुसैन हाली, ख्वाजा अहमद अब्बास), सूफी, जैन, संत साहित्य, रामकाव्य, कृष्ण भक्ति काव्य, और 6 साहित्य अकादमियों के बारे में व्यापक जानकारी प्रदान करता है।"
                            : "This page provides comprehensive information about Haryana's languages (Hindi, Punjabi, Haryanvi), dialects (Bangru, Kauravi, Ahirwati, Bagri, Mewati, Braj), Sanskrit literature (Maharishi Ved Vyas, Harshavardhana, Banabhatta), Hindi literature (Surdas, Balmukund Gupt), Urdu literature (Altaf Hussain Hali, Khwaja Ahmad Abbas), Sufi, Jain, Saint literature, Ramkavya, Krishna Bhakti Kavya, and 6 literary academies."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों से स्रोतित" : "Information sourced from official Government of Haryana publications"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}