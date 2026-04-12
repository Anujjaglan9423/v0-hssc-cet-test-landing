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
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaFairsFestivalsPage() {
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
            questionHindi: "हरियाणा में कौन से प्रमुख त्यौहार मनाए जाते हैं?",
            questionEnglish: "What are the major festivals celebrated in Haryana?",
            answerHindi: "हरियाणा में नव संवत्सर, सिली सातें, गणगौर, तीज, रक्षा बंधन, नाग पंचमी, गोगा नवमी, गणेश चतुर्थी, दशहरा, देव उठानी ग्यारस, दीपावली, भाई दूज, कार्तिक पूर्णिमा, बसंत पंचमी, मकर संक्रांति, शिवरात्रि, होली और फाग जैसे प्रमुख त्यौहार मनाए जाते हैं।",
            answerEnglish: "Major festivals celebrated in Haryana include Nav Samvatsar, Sili Sate, Gangaur, Teej, Raksha Bandhan, Nag Panchami, Goga Navami, Ganesh Chaturthi, Dusshera, Dev Uthani Gyaras, Deepavali, Bhai Dooj, Kartik Purnima, Basant Panchami, Makar Sankranti, Shivratri, Holi and Phag."
        },
        {
            questionHindi: "हरियाणा में तीज का त्यौहार कैसे मनाया जाता है?",
            questionEnglish: "How is Teej festival celebrated in Haryana?",
            answerHindi: "तीज श्रावण मास (जुलाई-अगस्त) में शुक्ल पक्ष की तृतीया को मनाई जाती है। यह तीन दिवसीय त्यौहार है जहां महिलाएं नवविवाहिता की तरह लाल और हरे रंग के कपड़े पहनती हैं, मेहंदी लगाती हैं और रंगीन चूड़ियाँ पहनती हैं। घेवर, दाल बाटी, बेसन के लड्डू जैसे व्यंजन बनाए जाते हैं। पेड़ों पर झूले लगाए जाते हैं और महिलाएं गीत गाती हैं।",
            answerEnglish: "Teej is celebrated on the 3rd day of Shukla Paksha in Shravana month (July-August). It is a three-day festival where women dress up like newlyweds in red and green, apply mehendi and wear colorful bangles. Dishes like Ghewar, Dal Baati, Besan Laddu are prepared. Swings are hung from trees and women sing songs."
        },
        {
            questionHindi: "गोगा नवमी क्या है और यह कब मनाई जाती है?",
            questionEnglish: "What is Goga Navami and when is it celebrated?",
            answerHindi: "गोगा नवमी भाद्रपद मास (अगस्त-सितंबर) के कृष्ण पक्ष की नवमी को मनाई जाती है। यह महेंद्रगढ़ जिले के कनीना, हुदीना और नारनौल क्षेत्रों में मनाया जाता है। लोग गोगा जी की पूजा करते हैं जो एक लोक देवता हैं। मान्यता है कि गोगा जी की पूजा करने से सांपों से रक्षा होती है। इस अवसर पर 'गोगा की मेड़ी' पर मेला लगता है और 'गुग्गा की छड़ी' के साथ जुलूस निकाला जाता है।",
            answerEnglish: "Goga Navami is celebrated on the 9th day of Krishna Paksha of Bhadrapad month (August-September). It is celebrated in Kanina, Hudina and Narnaul areas of Mahendragarh district. People worship Goga Ji, a folk deity. It is believed that worshipping Goga Ji protects from snakes. A fair is organized at 'Goga ki Medi' and a procession is taken out with 'Guga ki Chari'."
        },
        {
            questionHindi: "हरियाणा में दीपावली कैसे मनाई जाती है?",
            questionEnglish: "How is Deepavali celebrated in Haryana?",
            answerHindi: "दीपावली कार्तिक मास (अक्टूबर-नवंबर) की अमावस्या को मनाई जाती है। लोग अपने घरों को सजाते हैं और बुराई को नष्ट करने के लिए हर कोने में मिट्टी के दीये जलाते हैं। हरियाणा में छोटी दीवाली भी मनाई जाती है जिसे गिरिडीह के नाम से जाना जाता है। दीवाली के अगले दिन गोवर्धन पूजा की जाती है जिसमें महिलाएं गाय के गोबर से गोवर्धन की छवि बनाती हैं।",
            answerEnglish: "Deepavali is celebrated on the Amavasya of Kartik month (October-November). People decorate their houses and light clay oil lamps in every corner to destroy evil. Chhoti Diwali is also celebrated in Haryana, known as Giridih. The next day after Diwali, Gowardhan Pooja is organized where women make the image of Gowardhan with cow dung."
        },
        {
            questionHindi: "बसंत पंचमी का त्यौहार हरियाणा में कैसे मनाया जाता है?",
            questionEnglish: "How is Basant Panchami celebrated in Haryana?",
            answerHindi: "बसंत पंचमी माघ मास (जनवरी-फरवरी) के शुक्ल पक्ष की पंचमी को मनाई जाती है। यह एक फसल उत्सव है। लोग पीले रंग के कपड़े पहनते हैं, पीले रंग के व्यंजन खाते हैं और अपने घरों में पीले फूल प्रदर्शित करते हैं। हरियाणा में इस दिन पतंगबाजी भी की जाती है।",
            answerEnglish: "Basant Panchami is celebrated on the 5th day of Shukla Paksha in Magh month (January-February). It is a harvest festival. People wear yellow colored clothes, eat yellow colored dishes and display yellow flowers in their homes. Kite flying is also organized on this day in Haryana."
        },
        {
            questionHindi: "हरियाणा में सिख समुदाय के प्रमुख त्यौहार कौन से हैं?",
            questionEnglish: "What are the major festivals of the Sikh community in Haryana?",
            answerHindi: "हरियाणा में सिख समुदाय के प्रमुख त्यौहार हैं: बैसाखी (13 या 14 अप्रैल), गुरु अर्जुन देव का शहीदी दिवस, गुरु नानक जयंती (गुरुपर्व), गुरु तेग बहादुर का शहीदी दिवस, बाबा जोरावर सिंह और बाबा फतेह सिंह का शहीदी दिवस, लोहड़ी और रामदास जयंती उत्सव।",
            answerEnglish: "Major festivals of Sikh community in Haryana are: Baisakhi (13th or 14th April), Martyrdom Day of Guru Arjun Dev, Guru Nanak Jayanti (Gurpurab), Guru Teg Bahadur's Martyrdom Day, Martyrdom of Baba Zorawar Singh and Baba Fateh Singh, Lohri and Ramdas Jayanti Utsav."
        },
        {
            questionHindi: "हरियाणा के प्रमुख मेले कौन से हैं?",
            questionEnglish: "What are the major fairs of Haryana?",
            answerHindi: "हरियाणा के प्रमुख मेलों में सूरजकुंड अंतर्राष्ट्रीय शिल्प मेला (फरवरी), पिंजौर आम महोत्सव (जून-जुलाई), अंतर्राष्ट्रीय गीता महोत्सव (नवंबर-दिसंबर), सूर्य ग्रहण मेला (कुरुक्षेत्र), और विभिन्न जिलों में लगने वाले धार्मिक एवं सांस्कृतिक मेले शामिल हैं।",
            answerEnglish: "Major fairs of Haryana include Surajkund International Craft Fair (February), Pinjore Mango Fair (June-July), International Gita Festival (November-December), Surya Grahan Fair (Kurukshetra), and various religious and cultural fairs organized in different districts."
        },
        {
            questionHindi: "हरियाणा में करवा चौथ का त्यौहार कैसे मनाया जाता है?",
            questionEnglish: "How is Karwa Chauth celebrated in Haryana?",
            answerHindi: "करवा चौथ कार्तिक मास (अक्टूबर-नवंबर) के कृष्ण पक्ष की चतुर्थी को मनाया जाता है। विवाहित महिलाएं अपने पति की सुरक्षा और दीर्घायु के लिए सूर्योदय से चंद्रोदय तक व्रत रखती हैं। हरियाणा में महिलाएं सुबह-सुबह 'सरगी' खाती हैं जिसमें फेनियाँ शामिल होती हैं। चंद्रमा को जल अर्पित कर व्रत तोड़ा जाता है।",
            answerEnglish: "Karwa Chauth is celebrated on the 4th day of Krishna Paksha in Kartik month (October-November). Married women fast from sunrise to moonrise for the safety and longevity of their husbands. In Haryana, women eat 'Sargi' early morning which includes fenia. The fast is broken after offering water to the Moon."
        }
    ];

    // Hindu Festivals
    const hinduFestivals = [
        {
            name: "Nav Samvatsar",
            nameHindi: "नव संवत्सर",
            month: "Chaitra (March-April)",
            monthHindi: "चैत्र (मार्च-अप्रैल)",
            description: "Indian New Year celebrated on 1st day of Shukla Paksha. Related to origin of universe.",
            descriptionHindi: "भारतीय नव वर्ष, शुक्ल पक्ष के प्रथम दिवस पर मनाया जाता है। ब्रह्मांड की उत्पत्ति से संबंधित।"
        },
        {
            name: "Sili Sate (Basoda)",
            nameHindi: "सिली सातें (बसौड़ा)",
            month: "Chaitra (March-April)",
            monthHindi: "चैत्र (मार्च-अप्रैल)",
            description: "Celebrated on Krishna Paksha Saptami. Women worship Sheetala Mata. Stale food (sweet rice) eaten.",
            descriptionHindi: "कृष्ण पक्ष सप्तमी को मनाया जाता है। महिलाएं शीतला माता की पूजा करती हैं। बासी भोजन (मीठे चावल) खाया जाता है।"
        },
        {
            name: "Gangaur",
            nameHindi: "गणगौर",
            month: "Chaitra (March-April)",
            monthHindi: "चैत्र (मार्च-अप्रैल)",
            description: "Mainly celebrated in Hisar district. Women fast for husbands' well-being.",
            descriptionHindi: "मुख्य रूप से हिसार जिले में मनाया जाता है। महिलाएं पति की भलाई के लिए व्रत रखती हैं।"
        },
        {
            name: "Teej",
            nameHindi: "तीज",
            month: "Shravana (July-August)",
            monthHindi: "श्रावण (जुलाई-अगस्त)",
            description: "Three-day festival. Women dress as newlyweds, apply mehendi, enjoy swings. Ghewar, Dal Baati prepared.",
            descriptionHindi: "तीन दिवसीय त्यौहार। महिलाएं नवविवाहिता की तरह सजती हैं, मेहंदी लगाती हैं, झूले का आनंद लेती हैं। घेवर, दाल बाटी बनाए जाते हैं।"
        },
        {
            name: "Raksha Bandhan",
            nameHindi: "रक्षा बंधन (सलोनी/सालूमन)",
            month: "Shravana (July-August)",
            monthHindi: "श्रावण (जुलाई-अगस्त)",
            description: "Sisters tie Rakhis (Ponhachis) on brothers' wrists. Baba Kheda fair organized in Bhiwani.",
            descriptionHindi: "बहनें भाइयों की कलाई पर राखी (पोंहची) बांधती हैं। भिवानी में बाबा खेड़ा मेला लगता है।"
        },
        {
            name: "Nag Panchami",
            nameHindi: "नाग पंचमी",
            month: "Shravana (July-August)",
            monthHindi: "श्रावण (जुलाई-अगस्त)",
            description: "Serpent Gods worshipped. Milk offered to snakes. Women draw squares with saffron on walls.",
            descriptionHindi: "नाग देवता की पूजा। सांपों को दूध चढ़ाया जाता है। महिलाएं दीवारों पर केसर से चौक बनाती हैं।"
        },
        {
            name: "Goga Navami",
            nameHindi: "गोगा नवमी",
            month: "Bhadrapad (Aug-Sept)",
            monthHindi: "भाद्रपद (अगस्त-सितंबर)",
            description: "Worship of Goga Ji (folk deity). Protects from snakes. 'Guga ki Chari' procession taken out.",
            descriptionHindi: "गोगा जी (लोक देवता) की पूजा। सांपों से रक्षा करते हैं। 'गुग्गा की छड़ी' का जुलूस निकाला जाता है।"
        },
        {
            name: "Ganesh Chaturthi",
            nameHindi: "गणेश चतुर्थी",
            month: "Bhadrapad (Aug-Sept)",
            monthHindi: "भाद्रपद (अगस्त-सितंबर)",
            description: "10-day festival celebrating Lord Ganesha's birth. Idol immersion on last day.",
            descriptionHindi: "भगवान गणेश के जन्म का 10 दिवसीय उत्सव। अंतिम दिन मूर्ति विसर्जन।"
        },
        {
            name: "Dusshera",
            nameHindi: "दशहरा (विजयादशमी)",
            month: "Ashwin (Sept-Oct)",
            monthHindi: "आश्विन (सितंबर-अक्टूबर)",
            description: "Victory of good over evil. Celebrated with folk songs and dance in Rohtak district.",
            descriptionHindi: "बुराई पर अच्छाई की जीत। रोहतक जिले में लोक गीतों और नृत्य के साथ मनाया जाता है।"
        },
        {
            name: "Dev Uthani Gyaras",
            nameHindi: "देव उठानी ग्यारस",
            month: "Kartik (Oct-Nov)",
            monthHindi: "कार्तिक (अक्टूबर-नवंबर)",
            description: "Lord Vishnu awakens from sleep. Tulsi Vivah ritual performed. End of Chaturmas.",
            descriptionHindi: "भगवान विष्णु निद्रा से जागते हैं। तुलसी विवाह की रस्म। चातुर्मास का समापन।"
        },
        {
            name: "Deepavali",
            nameHindi: "दीपावली",
            month: "Kartik (Oct-Nov)",
            monthHindi: "कार्तिक (अक्टूबर-नवंबर)",
            description: "Festival of lights. Lakshmi Pooja. Chhoti Diwali (Giridih) celebrated a day before.",
            descriptionHindi: "प्रकाश का त्यौहार। लक्ष्मी पूजा। एक दिन पहले छोटी दीवाली (गिरिडीह) मनाई जाती है।"
        },
        {
            name: "Bhai Dooj",
            nameHindi: "भाई दूज",
            month: "Kartik (Oct-Nov)",
            monthHindi: "कार्तिक (अक्टूबर-नवंबर)",
            description: "Sister applies tilak on brother's forehead. Dry coconut (gola) and Kalawa used in aarti.",
            descriptionHindi: "बहन भाई के माथे पर तिलक लगाती है। आरती में सूखा नारियल (गोला) और कलावा प्रयोग होता है।"
        },
        {
            name: "Kartik Purnima",
            nameHindi: "कार्तिक पूर्णिमा",
            month: "Kartik (Oct-Nov)",
            monthHindi: "कार्तिक (अक्टूबर-नवंबर)",
            description: "Holy dip in sacred rivers. Donations important. Guru Nanak Dev Ji born on this day.",
            descriptionHindi: "पवित्र नदियों में स्नान। दान का महत्व। गुरु नानक देव जी का जन्म इसी दिन हुआ।"
        },
        {
            name: "Basant Panchami",
            nameHindi: "बसंत पंचमी",
            month: "Magh (Jan-Feb)",
            monthHindi: "माघ (जनवरी-फरवरी)",
            description: "Harvest festival. Yellow clothes and food. Kite flying organized.",
            descriptionHindi: "फसल उत्सव। पीले वस्त्र और भोजन। पतंगबाजी का आयोजन।"
        },
        {
            name: "Makar Sankranti",
            nameHindi: "मकर संक्रांति (साकरात)",
            month: "January (14th)",
            monthHindi: "जनवरी (14 जनवरी)",
            description: "Sun enters Capricorn. End of winter, beginning of harvest. Holy dip at Pehowa, Kurukshetra.",
            descriptionHindi: "सूर्य मकर राशि में प्रवेश। शीत ऋतु का अंत, फसल का आरंभ। पेहोवा, कुरुक्षेत्र में पवित्र स्नान।"
        },
        {
            name: "Shivratri",
            nameHindi: "शिवरात्रि",
            month: "Phalgun (Feb-March)",
            monthHindi: "फाल्गुन (फरवरी-मार्च)",
            description: "Lord Shiva and Parvati's wedding day. Milk and water offered to Shivalinga.",
            descriptionHindi: "भगवान शिव और पार्वती का विवाह दिवस। शिवलिंग पर दूध और जल चढ़ाया जाता है।"
        },
        {
            name: "Holi and Phag",
            nameHindi: "होली और फाग",
            month: "Phalgun (Feb-March)",
            monthHindi: "फाल्गुन (फरवरी-मार्च)",
            description: "Holika Dahan followed by Dulhendi (Phag). Dhamal dance and Swangs organized.",
            descriptionHindi: "होलिका दहन के बाद दुल्हेंड़ी (फाग)। धमाल नृत्य और स्वांग का आयोजन।"
        }
    ];

    // Sikh Festivals
    const sikhFestivals = [
        {
            name: "Baisakhi",
            nameHindi: "बैसाखी",
            date: "13th or 14th April",
            dateHindi: "13 या 14 अप्रैल",
            description: "Spring harvest festival. Foundation of Khalsa Panth by Guru Gobind Singh (1699). Fairs in Panchkula.",
            descriptionHindi: "वसंत फसल उत्सव। गुरु गोबिंद सिंह द्वारा खालसा पंथ की स्थापना (1699)। पंचकूला में मेले।"
        },
        {
            name: "Guru Arjun Dev Martyrdom",
            nameHindi: "गुरु अर्जुन देव शहीदी दिवस",
            date: "Jyeshtha (May-June)",
            dateHindi: "ज्येष्ठ (मई-जून)",
            description: "5th Sikh Guru, first of two gurus martyred in Sikh faith. Killed in 1606.",
            descriptionHindi: "5वें सिख गुरु, सिख धर्म में शहीद होने वाले पहले गुरु। 1606 में शहीद हुए।"
        },
        {
            name: "Guru Nanak Jayanti",
            nameHindi: "गुरु नानक जयंती (गुरुपर्व)",
            date: "Kartik Purnima (Oct-Nov)",
            dateHindi: "कार्तिक पूर्णिमा (अक्टूबर-नवंबर)",
            description: "Birth anniversary of first Sikh Guru, founder of Sikhism. Prabhat feris, Akhand Path.",
            descriptionHindi: "प्रथम सिख गुरु का जन्मदिवस, सिख धर्म के संस्थापक। प्रभात फेरियां, अखंड पाठ।"
        },
        {
            name: "Guru Teg Bahadur Martyrdom",
            nameHindi: "गुरु तेग बहादुर शहीदी दिवस",
            date: "Margashirsha (Nov-Dec)",
            dateHindi: "मार्गशीर्ष (नवंबर-दिसंबर)",
            description: "9th Sikh Guru. Martyred on 11th November, 1675 at age 54.",
            descriptionHindi: "9वें सिख गुरु। 11 नवंबर, 1675 को 54 वर्ष की आयु में शहीद हुए।"
        },
        {
            name: "Lohri",
            nameHindi: "लोहड़ी",
            date: "13th January",
            dateHindi: "13 जनवरी",
            description: "Winter folk festival celebrated a day before Makar Sankranti. Bonfire, singing and dancing.",
            descriptionHindi: "मकर संक्रांति से एक दिन पहले मनाया जाने वाला शीतकालीन लोक उत्सव। अलाव, गायन और नृत्य।"
        },
        {
            name: "Ramdas Jayanti",
            nameHindi: "रामदास जयंती उत्सव",
            date: "Phalgun (Feb-March)",
            dateHindi: "फाल्गुन (फरवरी-मार्च)",
            description: "4th Sikh Guru's anniversary. Celebrated in Hindol (Dadri). Gurudwaras decorated, langars organized.",
            descriptionHindi: "चौथे सिख गुरु की जयंती। हिंडोल (दादरी) में मनाई जाती है। गुरुद्वारे सजाए जाते हैं, लंगर लगते हैं।"
        }
    ];

    // Important Fasts (Vrat)
    const importantFasts = [
        {
            name: "Chamahi Atham Sanjhi",
            nameHindi: "छमाही अठम सांझी",
            description: "Devi Pooja twice yearly (Chaitra and Ashwin). Goddess Sanjhi images made of mud.",
            descriptionHindi: "देवी पूजा वर्ष में दो बार (चैत्र और आश्विन)। देवी सांझी की मिट्टी की मूर्तियां बनाई जाती हैं।"
        },
        {
            name: "Nirjala Gvas/Ekadashi",
            nameHindi: "निर्जला ग्यास/एकादशी",
            description: "Fast without water by women for husbands' long life. Cold 'Sharbat' offered.",
            descriptionHindi: "महिलाओं द्वारा पति की दीर्घायु के लिए निर्जला व्रत। ठंडा 'शरबत' चढ़ाया जाता है।"
        },
        {
            name: "Durga Vrat",
            nameHindi: "दुर्गा व्रत",
            description: "Ashtami of every month. Weapons of Goddess Durga worshipped. Barley seeds sown.",
            descriptionHindi: "प्रत्येक मास की अष्टमी। देवी दुर्गा के शस्त्रों की पूजा। जौ के बीज बोए जाते हैं।"
        },
        {
            name: "Krishna Janmashtami",
            nameHindi: "कृष्ण जन्माष्टमी",
            description: "Birth of Lord Krishna. Bhajans, Krishna Leelas. Also known as 'Jayanti' in Haryana.",
            descriptionHindi: "भगवान कृष्ण का जन्म। भजन, कृष्ण लीलाएं। हरियाणा में 'जयंती' के नाम से भी जाना जाता है।"
        },
        {
            name: "Ahoi Mata",
            nameHindi: "अहोई माता",
            description: "Mothers fast for children's wellbeing. Images of Ahoi with children drawn on walls with geru.",
            descriptionHindi: "माताएं बच्चों की भलाई के लिए व्रत रखती हैं। गेरू से दीवारों पर अहोई और बच्चों के चित्र बनाए जाते हैं।"
        },
        {
            name: "Karwa Chauth",
            nameHindi: "करवा चौथ",
            description: "Married women fast for husbands' longevity. 'Sargi' eaten early morning. Water offered to Moon.",
            descriptionHindi: "विवाहित महिलाएं पति की दीर्घायु के लिए व्रत रखती हैं। सुबह 'सरगी' खाई जाती है। चंद्रमा को जल अर्पित।"
        },
        {
            name: "Sakat Chauth",
            nameHindi: "सकट चौथ",
            description: "Women fast for children's wellbeing. Lord Ganesha worshipped. Sesame sweets offered.",
            descriptionHindi: "महिलाएं बच्चों की भलाई के लिए व्रत रखती हैं। भगवान गणेश की पूजा। तिल की मिठाई चढ़ाई जाती है।"
        }
    ];

    // Major Fairs by District
    const districtFairs = [
        { district: "Ambala", districtHindi: "अंबाला", fairs: "Kali Mai, Sharda Devi, Gugga Navami, Teej, Vaman Dwadashi" },
        { district: "Bhiwani", districtHindi: "भिवानी", fairs: "Sati Fair, Dussehra, Naga Baba, Puranmasi" },
        { district: "Faridabad", districtHindi: "फरीदाबाद", fairs: "Kanha Gaushala, Phooldor, Kalka, Gugga Pir, Janmashtami, Surajkund International Craft Fair" },
        { district: "Gurugram", districtHindi: "गुरुग्राम", fairs: "Shivji, Mahadev, Buddho Mata, Sheetala Mata, Shahchokha Khori, Budhi Teej" },
        { district: "Hisar", districtHindi: "हिसार", fairs: "Shivaji, Agrasen Jayanti, Navratri, Kali Devi, Gugga Navami, Janmashtami" },
        { district: "Jind", districtHindi: "जींद", fairs: "Sachcha Saudai, Ramraihrid, Hatkeshwar, Bilsar, Dhamtan Sabib" },
        { district: "Jhajjar", districtHindi: "झज्जर", fairs: "Gugga Navami, Holi/Dhulendi, Bhimeshwari Devi, Shyamiji's Fair" },
        { district: "Karnal", districtHindi: "करनाल", fairs: "Parasar, Devi Fair, Chhadi, Baba Simrandas, Pandu, Guga Fair" },
        { district: "Kaithal", districtHindi: "कैथल", fairs: "Vaman Dwadashi, Dehati, Pundrak, Phalgu" },
        { district: "Kurukshetra", districtHindi: "कुरुक्षेत्र", fairs: "Pehowa, Devi Fair, Markanda, Surya Grahan, Baisakhi, International Gita Festival" },
        { district: "Mahendragarh", districtHindi: "महेंद्रगढ़", fairs: "Hanumanji, Bhura Bhawani, Shivji, Dhoi, Teej" },
        { district: "Palwal", districtHindi: "पलवल", fairs: "Sati Fair, Raksha Bandhan, Dauji" },
        { district: "Panipat", districtHindi: "पानीपत", fairs: "Chaitra Mata, Pathri Mata, Qalandar Shrine, Shivratri" },
        { district: "Rewari", districtHindi: "रेवाड़ी", fairs: "Basant Panchmi, Baba Suraj Giri, Baba Pir, Gugga Navami, Shivratri" },
        { district: "Rohtak", districtHindi: "रोहतक", fairs: "Shivratri, Teej, Janmashtami" },
        { district: "Sirsa", districtHindi: "सिरसा", fairs: "Ganga-Gaur, Ramdevji, Radhasvami, Guru Nanak Dev, Teej, Baisakhi" },
        { district: "Sonipat", districtHindi: "सोनीपत", fairs: "Dera Nagn Balaknath, Baba Ramakshah, Satkumbha, Raksha Bandhan, Navaratri Devi" }
    ];

    // International and Special Fairs
    const specialFairs = [
        {
            name: "Surajkund International Craft Fair",
            nameHindi: "सूरजकुंड अंतर्राष्ट्रीय शिल्प मेला",
            location: "Surajkund, Faridabad",
            locationHindi: "सूरजकुंड, फरीदाबाद",
            time: "February (15 days)",
            timeHindi: "फरवरी (15 दिन)",
            description: "One of the world's largest craft fairs. Started in 1987, international status since 2013. Showcases handicrafts from across India.",
            descriptionHindi: "विश्व के सबसे बड़े शिल्प मेलों में से एक। 1987 में शुरू, 2013 से अंतर्राष्ट्रीय दर्जा। पूरे भारत के हस्तशिल्प का प्रदर्शन।"
        },
        {
            name: "International Gita Festival",
            nameHindi: "अंतर्राष्ट्रीय गीता महोत्सव",
            location: "Brahma Sarovar, Kurukshetra",
            locationHindi: "ब्रह्म सरोवर, कुरुक्षेत्र",
            time: "Margashirsha (Nov-Dec)",
            timeHindi: "मार्गशीर्ष (नवंबर-दिसंबर)",
            description: "Celebrated globally since 2017. 18,000 verses of Gita recited. Economic, cultural and spiritual programs organized.",
            descriptionHindi: "2017 से वैश्विक स्तर पर मनाया जाता है। गीता के 18,000 श्लोकों का पाठ। आर्थिक, सांस्कृतिक और आध्यात्मिक कार्यक्रम।"
        },
        {
            name: "Pinjore Mango Fair",
            nameHindi: "पिंजौर आम महोत्सव",
            location: "Yadavendra Gardens, Pinjore, Panchkula",
            locationHindi: "यादवेंद्र गार्डन, पिंजौर, पंचकूला",
            time: "June-July",
            timeHindi: "जून-जुलाई",
            description: "Organized since 1992 by Haryana Tourism. Mango varieties from across India exhibited. Competition between mango growers.",
            descriptionHindi: "हरियाणा पर्यटन द्वारा 1992 से आयोजित। देश भर की आम की किस्मों का प्रदर्शन। आम उत्पादकों के बीच प्रतियोगिता।"
        },
        {
            name: "Surya Grahan Fair",
            nameHindi: "सूर्य ग्रहण मेला",
            location: "Brahma Sarovar, Kurukshetra",
            locationHindi: "ब्रह्म सरोवर, कुरुक्षेत्र",
            time: "Solar Eclipse days",
            timeHindi: "सूर्य ग्रहण के दिन",
            description: "Internationally renowned fair. Foreign devotees also participate. Holy dip considered highly auspicious.",
            descriptionHindi: "अंतर्राष्ट्रीय ख्याति प्राप्त मेला। विदेशी श्रद्धालु भी भाग लेते हैं। पवित्र स्नान अत्यंत शुभ माना जाता है।"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 dark:from-orange-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

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
                        <PartyPopper className="w-4 h-4" />
                        {language === "hindi" ? "मेले और त्यौहार - हरियाणा सरकार" : "Fairs and Festivals - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा के" : "Fairs and"} <span className="text-orange-600 dark:text-orange-400">{language === "hindi" ? "मेले और त्यौहार" : "Festivals of Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के समृद्ध सांस्कृतिक त्यौहारों, धार्मिक व्रतों, लोक मेलों और अंतर्राष्ट्रीय आयोजनों की संपूर्ण जानकारी"
                            : "Complete information about rich cultural festivals, religious fasts, folk fairs, and international events of Haryana"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Calendar className="w-4 h-4 text-orange-600" />
                            <span>{language === "hindi" ? "हिंदू त्यौहार" : "Hindu Festivals"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Church className="w-4 h-4 text-orange-600" />
                            <span>{language === "hindi" ? "सिख त्यौहार" : "Sikh Festivals"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Moon className="w-4 h-4 text-orange-600" />
                            <span>{language === "hindi" ? "व्रत और उपवास" : "Fasts & Vrats"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <MapPin className="w-4 h-4 text-orange-600" />
                            <span>{language === "hindi" ? "जिलेवार मेले" : "District Fairs"}</span>
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
                                <Sparkles className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "परिचय" : "Introduction"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "मेले और त्यौहार भारतीय समाज की सांस्कृतिक धरोहर हैं। हरियाणा राज्य अपने विभिन्न मेलों और त्यौहारों में भारत की समृद्ध, गौरवशाली संस्कृति का उत्सव मनाता है, जिन्हें राज्य के लोग बड़े उत्साह के साथ मनाते हैं। हरियाणा में कई मेले और त्यौहार हैं जो साल के अलग-अलग समय पर राज्य में बड़ी संख्या में आगंतुकों को आकर्षित करते हैं। हरियाणा में महत्वपूर्ण त्यौहार विक्रम संवत के अनुसार मनाए जाते हैं।"
                                : "Fairs and festivals are the cultural heritage of Indian society. The state of Haryana celebrates the rich, glorious culture of India in its various fairs and festivals that are celebrated with great zeal by its people. There are several fairs and festivals in Haryana that attract a large number of visitors to the state at different times of the year. The important festivals in Haryana are celebrated according to the Vikram Samvat."}
                        </p>
                    </div>

                    {/* Hindu Festivals Section */}
                    <div className="bg-orange-500/5 rounded-2xl p-6 md:p-8 border-2 border-orange-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-orange-500/30">
                                <Flame className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-orange-600">{language === "hindi" ? "हिंदू त्यौहार" : "Hindu Festivals"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {hinduFestivals.map((festival, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-lg font-semibold text-orange-600">{language === "hindi" ? festival.nameHindi : festival.name}</h3>
                                        <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full">
                                            {language === "hindi" ? festival.monthHindi : festival.month}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? festival.descriptionHindi : festival.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sikh Festivals Section */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/30">
                                <Church className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "सिख त्यौहार" : "Sikh Festivals"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {sikhFestivals.map((festival, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-lg font-semibold text-blue-600">{language === "hindi" ? festival.nameHindi : festival.name}</h3>
                                        <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                                            {language === "hindi" ? festival.dateHindi : festival.date}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? festival.descriptionHindi : festival.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Important Fasts Section */}
                    <div className="bg-purple-500/5 rounded-2xl p-6 md:p-8 border-2 border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-500/30">
                                <Moon className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-600">{language === "hindi" ? "महत्वपूर्ण व्रत और उपवास" : "Important Fasts and Vrats"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {importantFasts.map((fast, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-purple-600">{language === "hindi" ? fast.nameHindi : fast.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? fast.descriptionHindi : fast.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 bg-card rounded-xl p-4 border">
                            <h3 className="text-md font-semibold text-purple-600 mb-2">{language === "hindi" ? "वासरिया व्रत (साप्ताहिक व्रत)" : "Vaasriya Vrat (Weekly Fasts)"}</h3>
                            <p className="text-sm text-muted-foreground">
                                {language === "hindi"
                                    ? "सोमवार - भगवान शिव, मंगलवार - हनुमान जी, शुक्रवार - संतोषी माता, शनिवार - शनि देव, रविवार - सूर्य देव"
                                    : "Monday - Lord Shiva, Tuesday - Lord Hanuman, Friday - Goddess Santoshi, Saturday - Lord Shani, Sunday - Sun God"}
                            </p>
                        </div>
                    </div>

                    {/* Special & International Fairs */}
                    <div className="bg-green-500/5 rounded-2xl p-6 md:p-8 border-2 border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/30">
                                <Landmark className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{language === "hindi" ? "प्रमुख एवं अंतर्राष्ट्रीय मेले" : "Major & International Fairs"}</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {specialFairs.map((fair, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <div className="flex flex-wrap items-start justify-between gap-2">
                                        <h3 className="text-lg font-semibold text-green-600">{language === "hindi" ? fair.nameHindi : fair.name}</h3>
                                        <div className="flex gap-2">
                                            <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                                                📍 {language === "hindi" ? fair.locationHindi : fair.location}
                                            </span>
                                            <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                                                📅 {language === "hindi" ? fair.timeHindi : fair.time}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? fair.descriptionHindi : fair.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* District-wise Fairs */}
                    <div className="bg-amber-500/5 rounded-2xl p-6 md:p-8 border-2 border-amber-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-500/30">
                                <MapPin className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-600">{language === "hindi" ? "जिलेवार प्रमुख मेले" : "Major District-wise Fairs"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {districtFairs.map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-amber-600">{language === "hindi" ? item.districtHindi : item.district}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{item.fairs}</p>
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
                        {language === "hindi" ? "हरियाणा के मेले और त्यौहार: तथ्य सारांश" : "Haryana Fairs & Festivals: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">17+</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "प्रमुख हिंदू त्यौहार" : "Major Hindu Festivals"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सिख त्यौहार" : "Sikh Festivals"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">7</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "महत्वपूर्ण व्रत" : "Important Fasts"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">17</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "जिलों में मेले" : "Districts with Fairs"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "अंतर्राष्ट्रीय/विशेष मेले" : "International/Special Fairs"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">1987</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सूरजकुंड मेला शुरू" : "Surajkund Fair Started"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">2017</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "गीता महोत्सव वैश्विक" : "Gita Festival Global"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">1699</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "खालसा पंथ स्थापना" : "Khalsa Panth Founded"}</p>
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
                            {language === "hindi" ? "हरियाणा के मेलों और त्यौहारों के" : "Common"} <span className="text-orange-600">{language === "hindi" ? "बारे में सामान्य प्रश्न" : "Questions About Haryana's Fairs and Festivals"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के त्यौहारों, व्रतों, मेलों और सांस्कृतिक आयोजनों के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's festivals, fasts, fairs, and cultural events"}
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
                            {language === "hindi" ? "अपने हरियाणा के मेले और त्यौहार के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Fairs & Festivals?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-orange-600 hover:bg-orange-700">
                                {language === "hindi" ? "हरियाणा मेले एवं त्यौहार क्विज़ लें" : "Take Haryana Fairs & Festivals Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/music-dance" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "संगीत और नृत्य" : "Music and Dance"}
                        </Link>
                        <Link href="/haryana-gk/cultural-heritage" className="text-orange-600 hover:text-orange-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: सांस्कृतिक विरासत" : "Next Chapter: Cultural Heritage"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा के मेले और त्यौहार - संपूर्ण संदर्भ" : "Fairs and Festivals of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के हिंदू त्यौहारों (नव संवत्सर, सिली सातें, गणगौर, तीज, रक्षा बंधन, नाग पंचमी, गोगा नवमी, दशहरा, दीपावली, होली आदि), सिख त्यौहारों (बैसाखी, गुरु नानक जयंती, लोहड़ी आदि), महत्वपूर्ण व्रतों (करवा चौथ, अहोई माता, निर्जला एकादशी आदि), और प्रमुख मेलों (सूरजकुंड शिल्प मेला, अंतर्राष्ट्रीय गीता महोत्सव, पिंजौर आम महोत्सव, सूर्य ग्रहण मेला) के बारे में व्यापक जानकारी प्रदान करता है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about Haryana's Hindu festivals (Nav Samvatsar, Sili Sate, Gangaur, Teej, Raksha Bandhan, Nag Panchami, Goga Navami, Dusshera, Deepavali, Holi etc.), Sikh festivals (Baisakhi, Guru Nanak Jayanti, Lohri etc.), important fasts (Karwa Chauth, Ahoi Mata, Nirjala Ekadashi etc.), and major fairs (Surajkund Craft Fair, International Gita Festival, Pinjore Mango Fair, Surya Grahan Fair). A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
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