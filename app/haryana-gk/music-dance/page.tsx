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
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaMusicDancePage() {
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
            questionHindi: "हरियाणा के प्रसिद्ध लोक नृत्य कौन से हैं?",
            questionEnglish: "What are the famous folk dances of Haryana?",
            answerHindi: "हरियाणा के प्रमुख लोक नृत्यों में गुग्गा नृत्य, धमाल नृत्य, दफ नृत्य, डमरू नृत्य, सांग नृत्य (पुरुष), घूमर, झूमर, लूर, तीज, खोरिया (महिलाएं), और बीन-बांसुरी, फाग, रास, रटवाई, मंजीरा (पुरुष और महिलाएं) शामिल हैं।",
            answerEnglish: "The major folk dances of Haryana include Gugga dance, Dhamal dance, Daph dance, Damru dance, Saang dance (men), Ghoomar, Jhumar, Loor, Teej, Khoria (women), and Been-Bansuri, Phag, Raas, Ratwai, Manjira (both men and women)."
        },
        {
            questionHindi: "'स्वांग सम्राट' के नाम से किसे जाना जाता है?",
            questionEnglish: "Who is known as 'Swang Samrat'?",
            answerHindi: "पंडित लखमी चंद को हरियाणा में 'स्वांग सम्राट' और 'सूर्य कवि' के नाम से जाना जाता है। उनका जन्म 1901 में सोनीपत जिले के जंती कलां गाँव में हुआ था। उन्हें 'हरियाणा का शेक्सपियर' भी कहा जाता है।",
            answerEnglish: "Pandit Lakhmi Chand is known as 'Swang Samrat' and 'Surya Kavi' in Haryana. He was born in 1901 in Janti Kalan village of Sonipat district. He is also known as the 'Shakespeare of Haryana'."
        },
        {
            questionHindi: "हरियाणा का प्रसिद्ध लोक वाद्य यंत्र 'सारंगी' किस लकड़ी से बनाई जाती है?",
            questionEnglish: "Which wood is used to make the famous folk instrument 'Sarangi' of Haryana?",
            answerHindi: "सारंगी लाल देवदार (रेड सीडर) की लकड़ी से बनाई जाती है। सारंगी का प्राचीन नाम 'सारिंदा' है। मामन खान पानीपत घराने के सबसे लोकप्रिय सारंगी वादक थे।",
            answerEnglish: "Sarangi is made from red cedar wood. The ancient name of Sarangi is 'Sarinda'. Maman Khan was the most popular Sarangi player who belonged to Panipat Gharana."
        },
        {
            questionHindi: "पंडित जसराज को किस सम्मान से नवाजा गया?",
            questionEnglish: "Which honours were awarded to Pandit Jasraj?",
            answerHindi: "पंडित जसराज को 1987 में संगीत नाटक अकादमी पुरस्कार, 1990 में पद्म भूषण, 2000 में पद्म विभूषण से सम्मानित किया गया। उन्हें 'स्वर सम्राट' की उपाधि भी दी गई। हरियाणा सरकार ने उन्हें स्वामी हरिदास संगीत रत्न और संगीत मार्तंडेय पुरस्कार से सम्मानित किया।",
            answerEnglish: "Pandit Jasraj was awarded the Sangeet Natak Akademi Award in 1987, Padma Bhushan in 1990, and Padma Vibhushan in 2000. He was also honoured with the title of 'Swara Samrat'. Haryana Government honoured him with Swami Haridas Sangeet Ratna and Sangeet Martandeya Award."
        },
        {
            questionHindi: "हरियाणा का प्रसिद्ध लोक नृत्य 'धमाल' कब किया जाता है?",
            questionEnglish: "When is the famous folk dance 'Dhamal' of Haryana performed?",
            answerHindi: "धमाल नृत्य फाल्गुन के चांदनी रातों में किया जाता है। वर्तमान में, यह नृत्य तब किया जाता है जब फसलें कटाई के लिए तैयार होती हैं। यह मुख्य रूप से महेंद्रगढ़ और झज्जर जिलों में लोकप्रिय है।",
            answerEnglish: "Dhamal dance is performed on the moonlit nights of Phalgun. Presently, this dance is performed when the crops are ready for harvesting. It is mostly popular in Mahendragarh and Jhajjar districts."
        },
        {
            questionHindi: "'लूर' नृत्य कब और किसके द्वारा किया जाता है?",
            questionEnglish: "When and by whom is 'Loor' dance performed?",
            answerHindi: "लूर नृत्य आमतौर पर युवा लड़कियों द्वारा फाल्गुन महीने (फरवरी-मार्च) में होली से दो सप्ताह पहले किया जाता है। 'लूर' का अर्थ 'लड़की' होता है। इसे 'तुन्नुनिया' के नाम से भी जाना जाता है।",
            answerEnglish: "Loor dance is generally performed by young girls in the month of Phalgun (February-March) before two weeks of Holi. 'Loor' means 'girl'. It is also known as 'Tunnuniya'."
        },
        {
            questionHindi: "हरियाणा में स्वांग मंचन की शुरुआत कब हुई?",
            questionEnglish: "When did Swang theatre begin in Haryana?",
            answerHindi: "हरियाणा में स्वांग परंपरा 1730 ईस्वी में शुरू हुई। मेरठ के किशनलाल भाट को पहला स्वांगी माना जाता है। स्वांग मंचन के लिए इकतारा, खरताल, ढोलक, सारंगी, हारमोनियम, खंजरी, चिमटा, डेरू, दफ आदि वाद्य यंत्रों का उपयोग किया जाता है।",
            answerEnglish: "The Swang tradition began in Haryana in 1730 AD. Kishanlal Bhaat of Meerut is considered as the first Swangi. Musical instruments such as iktara, khartal, dholak, sarangi, harmonium, khanjari, chimta, deru, daph are used to perform swang."
        },
        {
            questionHindi: "हरियाणा में कितने प्रकार के लोक वाद्य यंत्र प्रचलित हैं?",
            questionEnglish: "How many types of folk musical instruments are popular in Haryana?",
            answerHindi: "हरियाणा में चार प्रकार के लोक वाद्य यंत्र प्रचलित हैं - तार वाद्य (सारंगी, तुम्बा, इकतारा, सितार, वीणा), वायु वाद्य (बांसुरी, शंख, शहनाई, अलगोजा, बीन), झिल्ली वाद्य (ढोलक, नगाड़ा, दफ, ताशा, खंजरी, डमरू, डेरू, दफली, घड़वा), और ताल वाद्य (झांझ, मंजीरा, झालर, घुंगरू, चिमटा, खतराल)।",
            answerEnglish: "Four types of folk musical instruments are popular in Haryana - String Instruments (Sarangi, Tumba, Iktara, Sitar, Veena), Wind Instruments (Flute, Shankh, Shehnai, Alghoza, Been), Membrane Instruments (Dholak, Nagada, Daph, Tasha, Khanjari, Damru, Deru, Dafli, Ghadwa), and Percussion Instruments (Jhanjh, Manjira, Jhalar, Ghunghru, Chimta, Khatral)."
        }
    ];

    // Music Evolution Periods
    const musicPeriods = [
        {
            period: "Vedic Period",
            periodHindi: "वैदिक काल",
            features: "Three types of music evolved: Rigveda hymns (Uddatta, Anudatta, Svarita tones), Samaveda songs (seven notes, Marga Sangeet), Gandharva music",
            featuresHindi: "तीन प्रकार के संगीत विकसित हुए: ऋग्वेद के मंत्र (उदात्त, अनुदात्त, स्वरित स्वर), सामवेद के गीत (सात स्वर, मार्ग संगीत), गंधर्व संगीत"
        },
        {
            period: "Post-Vedic Period",
            periodHindi: "उत्तर-वैदिक काल",
            features: "Professional musicians emerged (flute players, drummers, veena players). Sculpture from Sugh (Ambala) shows musicians travelling. Agroha brick mentions 'Sa Re Ga Ma Pa Dha Ni'",
            featuresHindi: "पेशेवर संगीतकार उभरे (बांसुरी वादक, ढोलक वादक, वीणा वादक)। सुघ (अंबाला) से मिली मूर्ति में संगीतकार दिखाए गए हैं। अग्रोहा से मिली ईंट पर 'सा रे गा मा पा ध नि' लिखा है।"
        },
        {
            period: "Medieval Period",
            periodHindi: "मध्यकालीन काल",
            features: "Mahatma Surdas (born 1478 AD) - contemporary of Akbar, disciple of Haridas and Vallabhacharya. Dhrupad, Khayal, Thumri, Tarana developed. Haddu Khan (Gwalior Gharana)",
            featuresHindi: "महात्मा सूरदास (जन्म 1478 ई.) - अकबर के समकालीन, हरिदास और वल्लभाचार्य के शिष्य। ध्रुपद, ख्याल, ठुमरी, तराना विकसित हुए। हद्दू खान (ग्वालियर घराना)"
        },
        {
            period: "Post-Mughal Period",
            periodHindi: "उत्तर-मुगल काल",
            features: "Ustad Kallan Khan (Rewari) - disciple of Haddu Khan. Hafiz Khan (son of Kallan Khan) performed in Royal Court of Mysore and Indore",
            featuresHindi: "उस्ताद कल्लन खान (रेवाड़ी) - हद्दू खान के शिष्य। हाफिज खान (कल्लन खान के पुत्र) ने मैसूर और इंदौर के दरबार में प्रदर्शन किया।"
        }
    ];

    // Famous Personalities
    const famousPersonalities = [
        {
            name: "Pandit Jasraj",
            nameHindi: "पंडित जसराज",
            birth: "28th January, 1930",
            birthPlace: "Pili Mandori village (Hisar, now Fatehabad)",
            birthPlaceHindi: "पिली मंडोरी गाँव (हिसार, अब फतेहाबाद)",
            achievements: "Created Jasranqi (new form of Jugalbandi). Sangeet Natak Akademi Award (1987), Padma Bhushan (1990), Padma Vibhushan (2000). Title 'Swara Samrat'. Died 17th August, 2020",
            achievementsHindi: "जसरनकी (जुगलबंदी की नई शैली) बनाई। संगीत नाटक अकादमी पुरस्कार (1987), पद्म भूषण (1990), पद्म विभूषण (2000)। 'स्वर सम्राट' की उपाधि। निधन: 17 अगस्त, 2020"
        },
        {
            name: "Mahatma Surdas",
            nameHindi: "महात्मा सूरदास",
            birth: "1478 AD",
            birthPlace: "Sihi village",
            birthPlaceHindi: "सीही गाँव",
            achievements: "Contemporary of Akbar, disciple of Haridas and Vallabhacharya. Famous for devotional songs",
            achievementsHindi: "अकबर के समकालीन, हरिदास और वल्लभाचार्य के शिष्य। भक्ति गीतों के लिए प्रसिद्ध"
        },
        {
            name: "Pandit Lakhmi Chand",
            nameHindi: "पंडित लखमी चंद",
            birth: "1901",
            birthPlace: "Janti Kalan, Sonipat",
            birthPlaceHindi: "जंती कलां, सोनीपत",
            achievements: "Swang Samrat, Surya Kavi, Shakespeare of Haryana. Famous swangs: Raja Bhoj, Chandra Kiran, Gyani Chor, Heer-Ranjha. Died 1945",
            achievementsHindi: "स्वांग सम्राट, सूर्य कवि, हरियाणा का शेक्सपियर। प्रसिद्ध स्वांग: राजा भोज, चंद्र किरण, ज्ञानी चोर, हीर-रांझा। निधन: 1945"
        }
    ];

    // Folk Songs
    const folkSongs = [
        { name: "Wedding Songs", nameHindi: "विवाह गीत", description: "Sung on marriage occasions - Banda-Bandi, Ghodi (boy's marriage), Suhaag (girl's marriage)", descriptionHindi: "विवाह के अवसर पर गाए जाने वाले गीत - बंदा-बंदी, घोड़ी (लड़के के विवाह पर), सुहाग (लड़की के विवाह पर)" },
        { name: "Seasonal Songs", nameHindi: "मौसमी गीत", description: "Songs based on seasons and harvest period", descriptionHindi: "मौसम और फसल कटाई के समय गाए जाने वाले गीत" },
        { name: "Ceremonial Songs", nameHindi: "अनुष्ठानिक गीत", description: "Brahmas, Jaimal Fatta - mythological subjects", descriptionHindi: "ब्रह्मास, जैमल फत्ता - पौराणिक विषय" }
    ];

    // Folk Musical Instruments
    const stringInstruments = [
        { name: "Sarangi", nameHindi: "सारंगी", description: "Made from red cedar wood, ancient name 'Sarinda'. Four strings, played with Gaj (bow). Maman Khan (Panipat Gharana) famous player", descriptionHindi: "लाल देवदार की लकड़ी से बनी, प्राचीन नाम 'सारिंदा'। चार तार, गज (धनुष) से बजाई जाती है। मामन खान (पानीपत घराना) प्रसिद्ध वादक" },
        { name: "Tumba/Tumbi", nameHindi: "तुम्बा/तुम्बी", description: "Single string high pitched instrument. Gourd shell resonator. Famous players: Lal Chand Yamla Jatt, Kuldeep Manak, Amar Singh Chamkila", descriptionHindi: "एक तार वाला उच्च स्वर वाला वाद्य। लौकी का रेजोनेटर। प्रसिद्ध वादक: लाल चंद यमला जट्ट, कुलदीप माणक, अमर सिंह चमकीला" },
        { name: "Iktara", nameHindi: "इकतारा", description: "Bamboo piece with one string. Used in Bhajan-Kirtan. Used by Bhat and Charan communities", descriptionHindi: "बांस का टुकड़ा जिसमें एक तार होता है। भजन-कीर्तन में प्रयुक्त। भाट और चारण समुदायों द्वारा उपयोग किया जाता था" },
        { name: "Dotara", nameHindi: "दोतारा", description: "Similar to Iktara but with two strings", descriptionHindi: "इकतारा के समान लेकिन इसमें दो तार होते हैं" },
        { name: "Sitar", nameHindi: "सितार", description: "Combination of veena and Iranian tambura. Invented by Amir Khusrau", descriptionHindi: "वीणा और ईरानी तंबूरा का संयोजन। अमीर खुसरो द्वारा आविष्कार" },
        { name: "Veena", nameHindi: "वीणा", description: "Mentioned in Rigveda and Samaveda. Most ancient Indian instrument. Made from Jackwood", descriptionHindi: "ऋग्वेद और सामवेद में उल्लेखित। सबसे प्राचीन भारतीय वाद्य। जैकवुड से बनी" }
    ];

    const windInstruments = [
        { name: "Flute (Bansuri)", nameHindi: "बांसुरी", description: "Made from bamboo, seven finger holes. Also known as vanshi, venu, murli. Associated with Lord Krishna", descriptionHindi: "बांस से बनी, सात छेद। वंशी, वेणु, मुरली के नाम से भी जानी जाती है। भगवान कृष्ण से संबंधित" },
        { name: "Shankh", nameHindi: "शंख", description: "Ancient wind instrument found in oceans. Used in temples. According to Brahma Vaivarta Purana, it is a form of God", descriptionHindi: "समुद्रों में पाया जाने वाला प्राचीन वायु वाद्य। मंदिरों में प्रयुक्त। ब्रह्म वैवर्त पुराण के अनुसार, यह भगवान का स्वरूप है" },
        { name: "Alghoza", nameHindi: "अलगोजा", description: "Special place in Haryanvi folk music. Wooden or bamboo flute. Used while grazing cattle by shepherds", descriptionHindi: "हरियाणवी लोक संगीत में विशेष स्थान। लकड़ी या बांस की बांसुरी। चरवाहों द्वारा मवेशी चराते समय उपयोग" },
        { name: "Been (Pungi)", nameHindi: "बीन (पुंगी)", description: "Double-reed instrument. Made from dry hollowed gourd. Mostly played by snake charmers", descriptionHindi: "दोहरा-रीड वाद्य। सूखे लौकी से बना। ज्यादातर सपेरों द्वारा बजाया जाता है" }
    ];

    const membraneInstruments = [
        { name: "Dholak", nameHindi: "ढोलक", description: "Important in Haryanvi folk music. Made of mango, sheesham, teak wood. Used in weddings, kirtans, Bhangra", descriptionHindi: "हरियाणवी लोक संगीत में महत्वपूर्ण। आम, शीशम, सागौन की लकड़ी से बनी। विवाह, कीर्तन, भांगड़ा में प्रयुक्त" },
        { name: "Nagada", nameHindi: "नगाड़ा", description: "Large circular drum. Divided into small and large nagada. Played with wooden stick called 'Chob'. Used in Manjira dance with shehnai", descriptionHindi: "बड़ा गोलाकार ढोल। छोटे और बड़े नगाड़े में विभाजित। 'चोब' नामक लकड़ी की छड़ी से बजाया जाता है। मंजीरा नृत्य में शहनाई के साथ प्रयुक्त" },
        { name: "Daph", nameHindi: "दफ", description: "Open circular frame with skin covered side. Popular in Mahendragarh district. Used in Daph and Dhamal dance", descriptionHindi: "खुला गोलाकार फ्रेम जिसके एक तरफ चमड़ा लगा होता है। महेंद्रगढ़ जिले में लोकप्रिय। दफ और धमाल नृत्य में प्रयुक्त" },
        { name: "Damru", nameHindi: "डमरू", description: "Ancient instrument associated with Lord Shiva. Wood and metal with leather heads. Used in Goga dance", descriptionHindi: "प्राचीन वाद्य जो भगवान शिव से संबंधित है। लकड़ी और धातु से बना जिसमें चमड़े के मुख होते हैं। गोगा नृत्य में प्रयुक्त" },
        { name: "Khanjari", nameHindi: "खंजरी", description: "Traditional instrument of Jogis. Circular brass/wooden frame with goat hide. Used by Jogis during prayers", descriptionHindi: "जोगियों का पारंपरिक वाद्य। गोलाकार पीतल/लकड़ी का फ्रेम जिसमें बकरी का चमड़ा लगा होता है। जोगियों द्वारा पूजा में प्रयुक्त" }
    ];

    const percussionInstruments = [
        { name: "Jhanjh (Cymbal)", nameHindi: "झांझ", description: "Round metal piece, 8-16 finger length. Made of tin and copper alloys. Also known as khatral in some regions", descriptionHindi: "गोल धातु का टुकड़ा, 8-16 अंगुल लंबाई। टिन और तांबे की मिश्र धातु से बना। कुछ क्षेत्रों में खतराल के नाम से भी जाना जाता है" },
        { name: "Manjira", nameHindi: "मंजीरा", description: "Smaller version of Jhanjh with deeper middle. Made of copper, brass and zinc. Used in bhajans and kirtans", descriptionHindi: "झांझ का छोटा संस्करण जिसका मध्य भाग गहरा होता है। तांबा, पीतल और जस्ता से बना। भजन और कीर्तन में प्रयुक्त" },
        { name: "Chimta (Tongs)", nameHindi: "चिमटा", description: "Long flat piece of steel/iron with small bells attached. Looks like kitchen tongs", descriptionHindi: "स्टील या लोहे का लंबा चपटा टुकड़ा जिसमें छोटी घंटियाँ लगी होती हैं। रसोई के चिमटे जैसा दिखता है" },
        { name: "Ghunghru", nameHindi: "घुंगरू", description: "Musical anklets worn by dancers to add force and effect to the dance", descriptionHindi: "नर्तकियों द्वारा पहने जाने वाले संगीतमय पायल जो नृत्य में बल और प्रभाव जोड़ते हैं" }
    ];

    // Folk Dances
    const menDances = [
        { name: "Gugga Dance", nameHindi: "गुग्गा नृत्य", description: "Ritualistic dance on Gugga Navami. Devotees wear yellow dresses, carry 'Gugga Ki Charri'. Beating bodies with iron chains. Also known as Charri dance", descriptionHindi: "गुग्गा नवमी पर किया जाने वाला अनुष्ठानिक नृत्य। भक्त पीले वस्त्र पहनते हैं, 'गुग्गा की छड़ी' लेकर चलते हैं। लोहे की जंजीरों से शरीर पर प्रहार करते हैं। छड़ी नृत्य के नाम से भी जाना जाता है" },
        { name: "Dhamal Dance", nameHindi: "धमाल नृत्य", description: "From Mahabharata days. Popular in Mahendragarh and Jhajjar. Performed on Phalgun moonlit nights when crops ready for harvest. Used to motivate soldiers", descriptionHindi: "महाभारत काल से। महेंद्रगढ़ और झज्जर में लोकप्रिय। फाल्गुन की चांदनी रातों में जब फसलें कटाई के लिए तैयार होती हैं, किया जाता है। सैनिकों को प्रेरित करने के लिए प्रयुक्त" },
        { name: "Saang Dance", nameHindi: "सांग नृत्य", description: "Combination of music, dance and drama performance. Heroic dance of men. Raginis also presented", descriptionHindi: "संगीत, नृत्य और नाटक का संयोजन। पुरुषों का वीरतापूर्ण नृत्य। रागिनियाँ भी प्रस्तुत की जाती हैं" },
        { name: "Daph Dance", nameHindi: "दफ नृत्य", description: "Seasonal dance by farmers expressing happiness over good harvest. Dancers form circle, keep daph on shoulders", descriptionHindi: "किसानों द्वारा अच्छी फसल की खुशी में किया जाने वाला मौसमी नृत्य। नर्तक गोला बनाते हैं, दफ को कंधे पर रखते हैं" },
        { name: "Damru Dance", nameHindi: "डमरू नृत्य", description: "Performed on Shivratri night. Men play damru with hands while dancing", descriptionHindi: "शिवरात्रि की रात को किया जाता है। पुरुष नृत्य करते हुए हाथों से डमरू बजाते हैं" }
    ];

    const womenDances = [
        { name: "Ghoomar Dance", nameHindi: "घूमर नृत्य", description: "Popular in Southern Haryana. Performed on Diwali, Holi, Gangor Puja. Circular movements. 'Ghoom' means circle formed by Lehenga", descriptionHindi: "दक्षिणी हरियाणा में लोकप्रिय। दिवाली, होली, गणगौर पूजा पर किया जाता है। गोलाकार गतियाँ। 'घूम' का अर्थ लहंगे से बना गोला होता है" },
        { name: "Jhumar Dance", nameHindi: "झूमर नृत्य", description: "Also known as Haryanvi Gidda. Women form shape like jhumar ornament. Performed on dholak beats", descriptionHindi: "हरियाणवी गिद्दा के नाम से भी जाना जाता है। महिलाएं झूमर आभूषण के आकार में नृत्य करती हैं। ढोलक की थाप पर किया जाता है" },
        { name: "Loor Dance", nameHindi: "लूर नृत्य", description: "Young girls in Phalgun (Feb-March) before Holi. 'Loor' means girl. Also known as 'Tunnuniya'. Two groups face each other in semi-circle", descriptionHindi: "युवा लड़कियों द्वारा फाल्गुन (फरवरी-मार्च) में होली से पहले किया जाता है। 'लूर' का अर्थ 'लड़की' होता है। 'तुन्नुनिया' के नाम से भी जाना जाता है। दो समूह अर्धवृत्त में एक दूसरे के सामने खड़े होते हैं" },
        { name: "Teej Dance", nameHindi: "तीज नृत्य", description: "Performed on Teej in monsoon (Sawan). Women wear gaghara, odhani, kurti. Sweets made from jaggery", descriptionHindi: "सावन (मानसून) में तीज पर किया जाता है। महिलाएं घाघरा, ओढ़नी, कुर्ती पहनती हैं। गुड़ से मिठाइयाँ बनाई जाती हैं" },
        { name: "Khoria Dance", nameHindi: "खोरिया नृत्य", description: "Popular in central Haryana. Performed at bridegroom's house after marriage. Bokda (humorous act) spoken before dance", descriptionHindi: "मध्य हरियाणा में लोकप्रिय। विवाह के बाद दूल्हे के घर पर किया जाता है। नृत्य से पहले बोकड़ा (हास्य अभिनय) कहा जाता है" }
    ];

    const combinedDances = [
        { name: "Been-Bansuri Dance", nameHindi: "बीन-बांसुरी नृत्य", description: "Performed in Bangar region of Haryana on tunes of been, bansuri and ghadwa", descriptionHindi: "हरियाणा के बांगर क्षेत्र में बीन, बांसुरी और घड़वा की धुनों पर किया जाता है" },
        { name: "Phag Dance", nameHindi: "फाग नृत्य", description: "Performed in Phalgun month to celebrate Holi. Men wear colorful turbans, women traditional clothes", descriptionHindi: "फाल्गुन महीने में होली मनाने के लिए किया जाता है। पुरुष रंगीन पगड़ी पहनते हैं, महिलाएं पारंपरिक वस्त्र" },
        { name: "Raas Dance", nameHindi: "रास नृत्य", description: "Associated with Lord Krishna's Raaslila. Gopis dance around Krishna. Two forms: Tandav (males), Lasya (females). Popular in Palwal, Hodal, Faridabad, Gurugram, Ballabhgarh", descriptionHindi: "भगवान कृष्ण की रासलीला से संबंधित। गोपियां कृष्ण के चारों ओर नृत्य करती हैं। दो रूप: तांडव (पुरुष), लास्य (महिलाएं)। पलवल, होडल, फरीदाबाद, गुरुग्राम, बल्लभगढ़ में लोकप्रिय" },
        { name: "Manjira Dance", nameHindi: "मंजीरा नृत्य", description: "Popular in Mewat region. Uses nagada, daph and manjira", descriptionHindi: "मेवात क्षेत्र में लोकप्रिय। नगाड़ा, दफ और मंजीरा का उपयोग होता है" },
        { name: "Gangor Dance", nameHindi: "गणगौर नृत्य", description: "Performed on Gangor festival in Hisar, Bhiwani, Sirsa, Fatehabad. Dedicated to Lord Shiva and Goddess Parvati", descriptionHindi: "हिसार, भिवानी, सिरसा, फतेहाबाद में गणगौर त्योहार पर किया जाता है। भगवान शिव और देवी पार्वती को समर्पित" }
    ];

    // Swang Theatre
    const swangInfo = {
        origin: "Swang tradition began in Haryana in 1730 AD. First Swangi - Kishanlal Bhaat of Meerut",
        originHindi: "हरियाणा में स्वांग परंपरा 1730 ईस्वी में शुरू हुई। पहले स्वांगी - मेरठ के किशनलाल भाट",
        features: "Themes: morality, folk tales, inspiring personalities, Indian mythology. Performed on wooden platform (3m²). Begins with Gugga dance. No loudspeakers. Imitation/mimicry important (Nakali)",
        featuresHindi: "विषय: नैतिकता, लोक कथाएँ, प्रेरणादायक व्यक्तित्व, भारतीय पौराणिक कथाएँ। लकड़ी के मंच (3m²) पर प्रदर्शन। गुग्गा नृत्य से शुरू। लाउडस्पीकर का उपयोग नहीं। अनुकरण/नकल महत्वपूर्ण (नकली)",
        instruments: "Iktara, khartal, dholak, sarangi, harmonium, khanjari, chimta, deru, daph",
        instrumentsHindi: "इकतारा, खरताल, ढोलक, सारंगी, हारमोनियम, खंजरी, चिमटा, डेरू, दफ"
    };

    const famousSwangis = [
        { name: "Kishanlal Bhaat", contribution: "First Swangi (1730 AD). Famous swangs: Heer-Ranjha, Laila-Majnu, Nautanki" },
        { name: "Pandit Lakhmi Chand", contribution: "Swang Samrat, Surya Kavi, Shakespeare of Haryana. Works: Raja Bhoj, Chandra Kiran, Gyani Chor, Heer-Ranjha" },
        { name: "Netaram", contribution: "His play 'Seela Sethani' considered first successful swang of Haryana (19th century)" },
        { name: "Pt Deepchand", contribution: "From Khandwa, Sonipat. Given title 'Rai Sahab' by British. Works: Sorath, Gyani Chor, Nal-Damyanti" },
        { name: "Ali Baksh/Ambaram", contribution: "From Rewari. Disciple of Saint Garibdas. Works: Raja Nal ka Bagdav, Padmavat, Krishnalila" },
        { name: "Baje Bhagat", contribution: "Disciple of Hardev. Works: Chandra Kiran, Jamal, Gyani Chor" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 dark:from-purple-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Language Toggle Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium backdrop-blur-sm">
                        <Music className="w-4 h-4" />
                        {language === "hindi" ? "संगीत और नृत्य - हरियाणा सरकार" : "Music and Dance - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा का" : "Music and"} <span className="text-purple-600 dark:text-purple-400">{language === "hindi" ? "संगीत और नृत्य" : "Dance of Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के लोक संगीत, लोक नृत्य, लोक वाद्य यंत्रों और स्वांग लोक रंगमंच की संपूर्ण जानकारी - वैदिक काल से आधुनिक काल तक"
                            : "Complete information about folk music, folk dances, folk musical instruments, and Swang folk theatre of Haryana - from Vedic period to modern times"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Music className="w-4 h-4 text-purple-600" />
                            <span>{language === "hindi" ? "लोक संगीत" : "Folk Music"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Users className="w-4 h-4 text-purple-600" />
                            <span>{language === "hindi" ? "लोक नृत्य" : "Folk Dances"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Drum className="w-4 h-4 text-purple-600" />
                            <span>{language === "hindi" ? "वाद्य यंत्र" : "Instruments"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Crown className="w-4 h-4 text-purple-600" />
                            <span>{language === "hindi" ? "स्वांग रंगमंच" : "Swang Theatre"}</span>
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
                            <div className="p-2 rounded-xl bg-purple-500/20">
                                <History className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "परिचय" : "Introduction"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "हरियाणा की जीवंत संस्कृति है। राज्य का लोक संगीत, लोक वाद्य यंत्र और लोक नृत्य इस राज्य की संस्कृति को समृद्ध बनाते हैं। हरियाणा भारतीय संस्कृति और सभ्यता में भी महत्वपूर्ण भूमिका निभाता है, जहाँ से पूरे देश को भारतीय दर्शन और आध्यात्मिकता का ज्ञान दिया गया है।"
                                : "Haryana has vivid culture. The folk music, folk instruments and folk dance of Haryana enrich the culture of this state. Haryana also plays an important role in Indian culture and civilisation, from where the entire country has been given knowledge of the Indian philosophy and spirituality."}
                        </p>
                    </div>

                    {/* Music Evolution Section */}
                    <div className="bg-indigo-500/5 rounded-2xl p-6 md:p-8 border-2 border-indigo-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-500/30">
                                <Mic className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-indigo-600">{language === "hindi" ? "हरियाणा में संगीत का विकास" : "Evolution of Music in Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {musicPeriods.map((period, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-indigo-600">{language === "hindi" ? period.periodHindi : period.period}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? period.featuresHindi : period.features}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Famous Personalities Section */}
                    <div className="bg-pink-500/5 rounded-2xl p-6 md:p-8 border-2 border-pink-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-pink-500/30">
                                <Star className="w-5 h-5 text-pink-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-pink-600">{language === "hindi" ? "प्रसिद्ध संगीत विभूतियाँ" : "Famous Musical Personalities"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {famousPersonalities.map((person, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-pink-600">{language === "hindi" ? person.nameHindi : person.name}</h3>
                                    <p className="text-xs text-muted-foreground">{language === "hindi" ? person.birthPlaceHindi : person.birthPlace} ({person.birth})</p>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? person.achievementsHindi : person.achievements}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Folk Songs Section */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <BookOpen className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "प्रसिद्ध लोक गीत" : "Popular Folk Songs"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {folkSongs.map((song, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-purple-600">{language === "hindi" ? song.nameHindi : song.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? song.descriptionHindi : song.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* String Instruments Section */}
                    <div className="bg-amber-500/5 rounded-2xl p-6 md:p-8 border-2 border-amber-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-500/30">
                                <Guitar className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-600">{language === "hindi" ? "तार वाद्य यंत्र" : "String Instruments"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {stringInstruments.map((inst, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-amber-600">{language === "hindi" ? inst.nameHindi : inst.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? inst.descriptionHindi : inst.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wind Instruments Section */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/30">
                                <Music className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "वायु वाद्य यंत्र" : "Wind Instruments"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {windInstruments.map((inst, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-blue-600">{language === "hindi" ? inst.nameHindi : inst.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? inst.descriptionHindi : inst.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Membrane Instruments Section */}
                    <div className="bg-green-500/5 rounded-2xl p-6 md:p-8 border-2 border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/30">
                                <Drum className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{language === "hindi" ? "झिल्ली वाद्य यंत्र" : "Membrane Instruments"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {membraneInstruments.map((inst, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-green-600">{language === "hindi" ? inst.nameHindi : inst.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? inst.descriptionHindi : inst.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Percussion Instruments Section */}
                    <div className="bg-red-500/5 rounded-2xl p-6 md:p-8 border-2 border-red-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-red-500/30">
                                <Building2 className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-600">{language === "hindi" ? "ताल वाद्य यंत्र" : "Percussion Instruments"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {percussionInstruments.map((inst, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-red-600">{language === "hindi" ? inst.nameHindi : inst.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? inst.descriptionHindi : inst.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Men Dances Section */}
                    <div className="bg-orange-500/5 rounded-2xl p-6 md:p-8 border-2 border-orange-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-orange-500/30">
                                <Users className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-orange-600">{language === "hindi" ? "पुरुषों द्वारा किए जाने वाले नृत्य" : "Dances Performed by Men"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {menDances.map((dance, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-orange-600">{language === "hindi" ? dance.nameHindi : dance.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? dance.descriptionHindi : dance.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Women Dances Section */}
                    <div className="bg-rose-500/5 rounded-2xl p-6 md:p-8 border-2 border-rose-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-rose-500/30">
                                <Heart className="w-5 h-5 text-rose-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-rose-600">{language === "hindi" ? "महिलाओं द्वारा किए जाने वाले नृत्य" : "Dances Performed by Women"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {womenDances.map((dance, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-rose-600">{language === "hindi" ? dance.nameHindi : dance.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? dance.descriptionHindi : dance.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Combined Dances Section */}
                    <div className="bg-teal-500/5 rounded-2xl p-6 md:p-8 border-2 border-teal-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-teal-500/30">
                                <Users className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-teal-600">{language === "hindi" ? "पुरुषों और महिलाओं के युगल नृत्य" : "Dances of Men and Women Together"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {combinedDances.map((dance, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-teal-600">{language === "hindi" ? dance.nameHindi : dance.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? dance.descriptionHindi : dance.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Swang Theatre Section */}
                    <div className="bg-cyan-500/5 rounded-2xl p-6 md:p-8 border-2 border-cyan-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-cyan-500/30">
                                <Crown className="w-5 h-5 text-cyan-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-cyan-600">{language === "hindi" ? "स्वांग : हरियाणा का लोक रंगमंच" : "Swang: Folk Theatre of Haryana"}</h2>
                        </div>
                        <div className="bg-card rounded-xl p-4 border mb-4">
                            <p className="text-muted-foreground leading-relaxed mb-2">{language === "hindi" ? swangInfo.originHindi : swangInfo.origin}</p>
                            <p className="text-sm text-muted-foreground mt-2">{language === "hindi" ? swangInfo.featuresHindi : swangInfo.features}</p>
                            <p className="text-sm text-muted-foreground mt-2"><span className="font-semibold">{language === "hindi" ? "वाद्य यंत्र:" : "Instruments:"}</span> {language === "hindi" ? swangInfo.instrumentsHindi : swangInfo.instruments}</p>
                        </div>
                        <h3 className="text-xl font-semibold text-cyan-600 mb-3">{language === "hindi" ? "प्रसिद्ध स्वांगी" : "Famous Swangis"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {famousSwangis.map((swangi, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h4 className="text-lg font-semibold text-cyan-600">{swangi.name}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{swangi.contribution}</p>
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
                        {language === "hindi" ? "हरियाणा संगीत और नृत्य: तथ्य सारांश" : "Haryana Music & Dance: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "प्रकार के वाद्य यंत्र" : "Types of Instruments"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "नृत्य श्रेणियाँ" : "Dance Categories"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">1730</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "स्वांग की शुरुआत" : "Swang Beginning"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">1478</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "महात्मा सूरदास का जन्म" : "Mahatma Surdas Birth"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">7</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सामवेद के स्वर" : "Samaveda Notes"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "ऋग्वेद के स्वर" : "Rigveda Tones"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सारंगी के तार" : "Sarangi Strings"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "रास के रूप (तांडव/लास्य)" : "Raas Forms (Tandav/Lasya)"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा के संगीत और नृत्य के" : "Common"} <span className="text-purple-600">{language === "hindi" ? "बारे में सामान्य प्रश्न" : "Questions About Haryana's Music and Dance"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के लोक संगीत, लोक नृत्य, वाद्य यंत्रों और स्वांग रंगमंच के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's folk music, folk dances, musical instruments, and Swang theatre"}
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
                                        className={`w-5 h-5 text-purple-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
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
                            {language === "hindi" ? "अपने हरियाणा संगीत और नृत्य के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Music & Dance?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-purple-600 hover:bg-purple-700">
                                {language === "hindi" ? "हरियाणा संगीत एवं नृत्य क्विज़ लें" : "Take Haryana Music & Dance Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/art-crafts" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "कला और शिल्प" : "Art and Crafts"}
                        </Link>
                        <Link href="/haryana-gk/fairs-festivals" className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: मेले और त्यौहार" : "Next Chapter: Fairs and Festivals"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा का संगीत और नृत्य - संपूर्ण संदर्भ" : "Music and Dance of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के संगीत (वैदिक, उत्तर-वैदिक, मध्यकालीन, उत्तर-मुगल), लोक संगीत, लोक गीत, प्रसिद्ध संगीत विभूतियाँ (पंडित जसराज, महात्मा सूरदास, पंडित लखमी चंद), लोक वाद्य यंत्र (तार, वायु, झिल्ली, ताल वाद्य), लोक नृत्य (पुरुष, महिला, युगल), और स्वांग लोक रंगमंच के बारे में व्यापक जानकारी प्रदान करता है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about Haryana's music (Vedic, Post-Vedic, Medieval, Post-Mughal), folk music, folk songs, famous musical personalities (Pandit Jasraj, Mahatma Surdas, Pandit Lakhmi Chand), folk musical instruments (string, wind, membrane, percussion), folk dances (men, women, combined), and Swang folk theatre. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और संगीत अभिलेखों से स्रोतित" : "Information sourced from official Government of Haryana publications and music archives"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}