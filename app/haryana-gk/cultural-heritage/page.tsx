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
    Crown,
    Star,
    Gem,
    Utensils,
    Shirt,
    Footprints,
    Hand,
    Ear,
    Eye,
    Zap,
    AlertTriangle,
    Sun,
    Moon,
    MessageCircle,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaCulturalHeritagePage() {
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
            questionHindi: "हरियाणा में पुरुषों द्वारा पहनी जाने वाली पगड़ी को क्या कहा जाता है?",
            questionEnglish: "What is the turban worn by men in Haryana called?",
            answerHindi: "हरियाणा में पुरुषों द्वारा पहनी जाने वाली पगड़ी को 'पगड़ी', 'पगधर' और 'साफी' कहा जाता है। राजपूती शैली की पगड़ी को 'पाग' कहा जाता है।",
            answerEnglish: "The turban worn by men in Haryana is called 'Pagri', 'Pagdhar' and 'Saafi'. The Rajputi style Pagadi is known as 'Paag'."
        },
        {
            questionHindi: "हरियाणा की प्रसिद्ध फुलकारी कला क्या है?",
            questionEnglish: "What is the famous Phulkari art of Haryana?",
            answerHindi: "फुलकारी हरियाणा की प्रसिद्ध शॉल बनाने की कला है। फुलकारी ओढ़नी में बॉक्स जैसी कढ़ाई होती है और यह घनी कढ़ाई वाली होती है।",
            answerEnglish: "Phulkari is the famous art of making shawls in Haryana. Phulkari Odhani has box-like embroidery work and has dense embroidery."
        },
        {
            questionHindi: "हरियाणा में महिलाओं द्वारा नाक में पहना जाने वाला आभूषण क्या कहलाता है?",
            questionEnglish: "What is the nose ornament worn by women in Haryana called?",
            answerHindi: "हरियाणा में महिलाओं द्वारा नाक में पहना जाने वाला आभूषण 'नाथ' कहलाता है। यह सोने का बना होता है और हरियाणवी दुल्हनें इसे पहनती हैं।",
            answerEnglish: "The nose ornament worn by women in Haryana is called 'Nath'. It is made of gold and Haryanvi brides wear it."
        },
        {
            questionHindi: "हरियाणा का प्रसिद्ध व्यंजन 'कढ़ी पकोड़ा' किसके साथ खाया जाता है?",
            questionEnglish: "What is the famous dish 'Kadhi Pakora' of Haryana eaten with?",
            answerHindi: "हरियाणा का प्रसिद्ध व्यंजन 'कढ़ी पकोड़ा' आमतौर पर चावल के साथ खाया जाता है। यह खट्टी दही से बनी ग्रेवी होती है जिसमें तले हुए पकोड़े डाले जाते हैं।",
            answerEnglish: "The famous dish 'Kadhi Pakora' of Haryana is generally eaten with rice. It is gravy made from sour yoghurt with fried pakoras added to it."
        },
        {
            questionHindi: "हरियाणा में पैरों में पहना जाने वाला पारंपरिक आभूषण 'पायल' किस धातु से बनाया जाता है?",
            questionEnglish: "Which metal is the traditional anklet 'Payal' made of in Haryana?",
            answerHindi: "हरियाणा में 'पायल' (जिसे पैजेब, रामझोल भी कहा जाता है) चांदी या सोने से बनाई जाती है। यह टखने पर पहनी जाती है और छनछनाने की आवाज करती है।",
            answerEnglish: "'Payal' (also called Payjeb, Ramjhol) in Haryana is made of silver or gold. It is worn on the ankle and produces a tinkling sound."
        },
        {
            questionHindi: "हरियाणा में 'गुलीबंद' क्या होता है?",
            questionEnglish: "What is 'Guliband' in Haryana?",
            answerHindi: "गुलीबंद (या गुलबंद) हरियाणा में ऊन से बना मफलर होता है जिसे पुरुष सर्दियों में गले के चारों ओर पहनते हैं।",
            answerEnglish: "Guliband (or Gulband) is a woolen muffler worn around the neck by men in Haryana during winters."
        },
        {
            questionHindi: "हरियाणा में 'सांप को बच्चा' होने पर क्या कहा जाता है?",
            questionEnglish: "What is said when someone sneezes in Haryana?",
            answerHindi: "हरियाणा में छींक आने पर लोग 'छतरपति', 'छींक माता', 'माथे रती तेल' आदि कहते हैं। यह एक सांस्कृतिक परंपरा है।",
            answerEnglish: "When someone sneezes in Haryana, people say 'Chhatrapati', 'Cheenk Mata', 'Mathe Rati Tel', etc. This is a cultural tradition."
        },
        {
            questionHindi: "हरियाणा में यात्रा शुरू करने से पहले क्या खाना शुभ माना जाता है?",
            questionEnglish: "What is considered auspicious to eat before starting a journey in Haryana?",
            answerHindi: "हरियाणा में यात्रा शुरू करने से पहले दही और गुड़ खाना शुभ माना जाता है। बुधवार के दिन यात्रा करना और यात्रा से पहले दूध पीना अशुभ माना जाता है।",
            answerEnglish: "Eating curd and jaggery is considered good before starting a journey in Haryana. Undertaking a journey on Wednesday or consuming milk before a journey is not considered auspicious."
        }
    ];

    // Men's Traditional Costumes
    const mensCostumes = [
        { name: "Pagri", nameHindi: "पगड़ी", description: "Also known as Paagadi, Pagdhar, Saafi. Less broad but exceptionally long fabric enfolded around head in Marwari style. Rajputi style known as 'Paag'. Sign of Pride.", descriptionHindi: "पगाड़ी, पगधर, साफी के नाम से भी जाना जाता है। मारवाड़ी शैली में सिर पर लपेटा जाने वाला कम चौड़ा लेकिन बहुत लंबा कपड़ा। राजपूती शैली 'पाग' कहलाती है। गर्व का प्रतीक।" },
        { name: "Safa", nameHindi: "साफा", description: "A kind of Pagri specially tied by soldiers in a distinct pattern.", descriptionHindi: "एक प्रकार की पगड़ी विशेष रूप से सैनिकों द्वारा विशेष पैटर्न में बांधी जाती है।" },
        { name: "Muretha", nameHindi: "मुरेठा", description: "A type of cap worn in Haryana by menfolk.", descriptionHindi: "हरियाणा में पुरुषों द्वारा पहनी जाने वाली एक प्रकार की टोपी।" },
        { name: "Guliband", nameHindi: "गुलीबंद", description: "Woollen muffler worn around neck. Important winter attire.", descriptionHindi: "ऊन से बना मफलर जो गले के चारों ओर पहना जाता है। सर्दियों का महत्वपूर्ण परिधान।" },
        { name: "Mirjai", nameHindi: "मिरजई", description: "Modified form of flowing robe (jama) fastened on the right. Under Jacket with long loose sleeves and open cuffs.", descriptionHindi: "बहती हुई पोशाक (जामा) का संशोधित रूप जो दाईं ओर बांधी जाती है। लंबी ढीली आस्तीन और खुले कफ वाली अंडर जैकेट।" },
        { name: "Angarakha", nameHindi: "अंगरखा", description: "Long Kalidar garment. Looks like old courtesy manner. Can be both short or long.", descriptionHindi: "लंबा कालीदार परिधान। पुराने शिष्टाचार की तरह दिखता है। छोटा या लंबा दोनों हो सकता है।" },
        { name: "Khes", nameHindi: "खेस", description: "Coarse hand woven voluminous cotton sheet worn during winters by menfolk.", descriptionHindi: "मोटा हाथ से बुना हुआ विशाल सूती चादर जो पुरुषों द्वारा सर्दियों में पहना जाता है।" },
        { name: "Kurta/Kudta", nameHindi: "कुर्ता/कुद्ता", description: "Long shirt without collar. Mainly worn with dhoti or payjama.", descriptionHindi: "बिना कॉलर की लंबी कमीज। मुख्य रूप से धोती या पायजामा के साथ पहनी जाती है।" },
        { name: "Chaddar", nameHindi: "चादर", description: "Tied around waist (chadra). Also kept on shoulders - mark of honour and respect.", descriptionHindi: "कमर के चारों ओर बांधा जाता है (चादरा)। कंधों पर भी रखा जाता है - सम्मान और आदर का प्रतीक।" },
        { name: "Dohar/Dhor", nameHindi: "दोहर/ढोर", description: "Fine hand woven large sized cotton sheet worn during winters by menfolk.", descriptionHindi: "बढ़िया हाथ से बुना हुआ बड़े आकार का सूती चादर जो पुरुषों द्वारा सर्दियों में पहना जाता है।" },
        { name: "Dhoti", nameHindi: "धोती", description: "Main attire of men of Haryana. White Cotton Dhoti basically worn.", descriptionHindi: "हरियाणा के पुरुषों का मुख्य परिधान। मूल रूप से सफेद सूती धोती पहनी जाती है।" },
        { name: "Khandwa", nameHindi: "खांडवा", description: "Type of Pagari worn by old age people. Symbol of prestige.", descriptionHindi: "वृद्ध लोगों द्वारा पहनी जाने वाली पगड़ी का प्रकार। प्रतिष्ठा का प्रतीक।" },
        { name: "Jutis", nameHindi: "जूतियाँ", description: "Traditional footwear similar to Mojaris. Made of leather with golden and silver silk thread designs. Popular in Rohtak, Kalanaur, Jind, Julana.", descriptionHindi: "मोजड़ियों के समान पारंपरिक जूते। चमड़े से बने जिन पर सोने और चांदी के रेशमी धागों से डिजाइन बनाए जाते हैं। रोहतक, कलानौर, जींद, जुलाना में लोकप्रिय।" }
    ];

    // Women's Traditional Costumes
    const womensCostumes = [
        { name: "Koti", nameHindi: "कोटी", description: "Cut sleeved or sleeved jacket for women.", descriptionHindi: "महिलाओं के लिए कटी हुई या बिना आस्तीन की जैकेट।" },
        { name: "Kamari", nameHindi: "कमरी", description: "Half or full sleeved jacket normally worn by girls.", descriptionHindi: "आधी या पूरी आस्तीन वाली जैकेट सामान्यतः लड़कियों द्वारा पहनी जाती है।" },
        { name: "Kameez", nameHindi: "कमीज", description: "Long straight kurta with collar worn by women in Haryana.", descriptionHindi: "हरियाणा में महिलाओं द्वारा पहना जाने वाला कॉलर वाला लंबा सीधा कुर्ता।" },
        { name: "Angia", nameHindi: "अंगिया", description: "Made of cotton and worn under kameez or suit by women.", descriptionHindi: "सूती कपड़े से बनी और महिलाओं द्वारा कमीज या सूट के नीचे पहनी जाती है।" },
        { name: "Odhani", nameHindi: "ओढ़नी", description: "Worn by women on their head. Corners often decorated with golden laces.", descriptionHindi: "महिलाओं द्वारा सिर पर पहनी जाती है। कोनों को अक्सर सोने के फीतों से सजाया जाता है।" },
        { name: "Chundhri", nameHindi: "छुन्दड़ी", description: "Thin muslin Odhani dyed with red colour on edges and blue in middle.", descriptionHindi: "पतली मलमल की ओढ़नी जिसके किनारे लाल और बीच का भाग नीला होता है।" },
        { name: "Phulkari", nameHindi: "फुलकारी", description: "Odhani with box like dense embroidery work. Art of making shawl.", descriptionHindi: "बॉक्स जैसी घनी कढ़ाई वाली ओढ़नी। शॉल बनाने की कला।" },
        { name: "Daaman", nameHindi: "दामन", description: "Type of Ghagra worn by women. Made of red or black cotton fabric.", descriptionHindi: "महिलाओं द्वारा पहना जाने वाला घाघरा का प्रकार। लाल या काले सूती कपड़े से बना।" },
        { name: "Leh", nameHindi: "लेह", description: "Blue coloured Ghagra embroidered by blue and yellow coloured yarns.", descriptionHindi: "नीले और पीले रंग के धागों से कढ़ाई वाला नीला घाघरा।" },
        { name: "Kairi", nameHindi: "कैरी", description: "Type of Ghagra made of blue khaddar along with red tika work.", descriptionHindi: "नीले खद्दर से बना घाघरा जिसमें लाल टीका काम होता है।" },
        { name: "Chand Tara Ghagra", nameHindi: "चाँद तारा घाघरा", description: "Made of khaddar (Duff) fabric. Printed with stars and new moon.", descriptionHindi: "खद्दर (डफ) कपड़े से बना। तारों और नए चाँद से छपा हुआ।" }
    ];

    // Foot Ornaments
    const footOrnaments = [
        { name: "Payal", nameHindi: "पायल", description: "Also called Payjeb, Ramjhol. Produces tinkling sound, worn on ankle.", descriptionHindi: "पैजेब, रामझोल भी कहलाता है। छनछनाने की आवाज करता है, टखने पर पहना जाता है।" },
        { name: "Jhanjhar", nameHindi: "झांझर", description: "Anklet broader than payal.", descriptionHindi: "पायल से चौड़ा पायल।" },
        { name: "Bichhiya/Bichhudi", nameHindi: "बिछिया/बिछुड़ी", description: "Silver ornament worn by married women on their toes.", descriptionHindi: "विवाहित महिलाओं द्वारा पैर की उंगलियों में पहना जाने वाला चांदी का आभूषण।" },
        { name: "Pagpan", nameHindi: "पगपन", description: "Anklet and toe ring connected with a thin chain. Brides wear it.", descriptionHindi: "पायल और पैर की अंगूठी एक पतली चेन से जुड़ी होती है। दुल्हनें इसे पहनती हैं।" },
        { name: "Toda/Langer", nameHindi: "तोड़ा/लांगर", description: "Made by tying silver wires, worn like a large anklet.", descriptionHindi: "चांदी के तारों को बांधकर बनाया जाता है, बड़े पायल की तरह पहना जाता है।" }
    ];

    // Hand and Arm Ornaments
    const handOrnaments = [
        { name: "Aarsi", nameHindi: "आरसी", description: "Finger ring with a mirror. Worn on right hand thumb.", descriptionHindi: "दर्पण वाली अंगूठी। दाहिने हाथ के अंगूठे में पहनी जाती है।" },
        { name: "Hathphool", nameHindi: "हाथफूल", description: "Bracelet with rings connected by chain. Worn on wedding or special occasions.", descriptionHindi: "ब्रोसलेट जिसमें अंगूठियां चेन से जुड़ी होती हैं। शादी या विशेष अवसरों पर पहना जाता है।" },
        { name: "Kangan", nameHindi: "कंगन", description: "Worn by women on wrists.", descriptionHindi: "महिलाओं द्वारा कलाई पर पहना जाता है।" },
        { name: "Bajuband", nameHindi: "बाजूबंद", description: "Also known as Bajuband, Bajuphal and Baju bank. Worn on arms.", descriptionHindi: "बाजूबंद, बाजूफल और बाजू बैंक के नाम से भी जाना जाता है। बांहों पर पहना जाता है।" },
        { name: "Ponche", nameHindi: "पोंछे", description: "Bangles with small round shaped balls. Beautiful and popular even today.", descriptionHindi: "छोटे गोलाकार बॉल वाले कंगन। सुंदर और आज भी लोकप्रिय।" }
    ];

    // Ear, Nose and Forehead Ornaments
    const faceOrnaments = [
        { name: "Nath", nameHindi: "नाथ", description: "Worn in nose. Made of gold. Haryanvi brides look beautiful in this.", descriptionHindi: "नाक में पहना जाता है। सोने का बना होता है। हरियाणवी दुल्हनें इसमें सुंदर दिखती हैं।" },
        { name: "Karanphool", nameHindi: "कर्णफूल", description: "Worn in lower part of earlobes. Mainly made of gold or silver.", descriptionHindi: "कान की लौ के निचले भाग में पहना जाता है। मुख्य रूप से सोने या चांदी का बना होता है।" },
        { name: "Jhumka", nameHindi: "झुमका", description: "Worn in lower part of ears. Generally dangling.", descriptionHindi: "कान के निचले भाग में पहना जाता है। आमतौर पर लटकता हुआ।" },
        { name: "Tika/Mang Tika", nameHindi: "टीका/मांग टीका", description: "Worn on head and hangs till forehead. Chain with hook and pendant.", descriptionHindi: "सिर पर पहना जाता है और माथे तक लटकता है। हुक और पेंडेंट वाली चेन।" },
        { name: "Borla", nameHindi: "बोरला", description: "Spherically shaped with string of gold. Heavy jewellery worn by bride.", descriptionHindi: "गोलाकार आकार जिसमें सोने की डोरी होती है। दुल्हन द्वारा पहना जाने वाला भारी आभूषण।" },
        { name: "Singar Patti", nameHindi: "सिंगार पट्टी", description: "Also called kori, jura, viralra bandini. Worn on head.", descriptionHindi: "कोरी, जूड़ा, विरालरा बंदिनी भी कहलाता है। सिर पर पहना जाता है।" }
    ];

    // Neck Ornaments
    const neckOrnaments = [
        { name: "Hasla/Panchmora", nameHindi: "हसला/पंचमोरा", description: "Heavy jewellery for brides. Made of gold, heavy but loose around neck.", descriptionHindi: "दुल्हनों के लिए भारी आभूषण। सोने का बना, गले में भारी लेकिन ढीला।" },
        { name: "Galshri", nameHindi: "गलश्री", description: "Made of three or five lines of gold thick beads stitched on cotton fabric strip.", descriptionHindi: "सोने के मोटे मोतियों की तीन या पांच पंक्तियाँ जो सूती कपड़े की पट्टी पर सिली होती हैं।" },
        { name: "Gulband", nameHindi: "गुलबंद", description: "Worn around neck. Made on gold strip with small golden beads and flower petal design.", descriptionHindi: "गले के चारों ओर पहना जाता है। सोने की पट्टी पर छोटे सोने के मोतियों और फूलों की पंखुड़ियों के डिजाइन से बना।" },
        { name: "Chandan Haar", nameHindi: "चंदन हार", description: "Also known as Raanai Haar. Covers chest. Made of golden threads linked by rectangular pieces.", descriptionHindi: "रानाई हार के नाम से भी जाना जाता है। छाती को ढकता है। सोने के धागों से बना जो आयताकार टुकड़ों से जुड़े होते हैं।" },
        { name: "Kanthi", nameHindi: "कंठी", description: "Gold ornament with very small hangings carved in shape of leaves.", descriptionHindi: "सोने का आभूषण जिसमें पत्तों के आकार में बहुत छोटे लटकन होते हैं।" },
        { name: "Jhalra", nameHindi: "झालरा", description: "Long necklace made of silver coins linked together with gap of 3-4 inches.", descriptionHindi: "चांदी के सिक्कों से बना लंबा हार जो 3-4 इंच के अंतराल पर जुड़े होते हैं।" },
        { name: "Khungali/Hansli", nameHindi: "खुंगली/हंसली", description: "Made of silver or gold. Keeps safe the neck bone (Hanseli). Also known as Hansla.", descriptionHindi: "चांदी या सोने का बना। गर्दन की हड्डी (हंसेली) की रक्षा करता है। हंसला के नाम से भी जाना जाता है।" }
    ];

    // Waist Ornaments
    const waistOrnaments = [
        { name: "Taqari/Tagdi", nameHindi: "ताकड़ी/तागड़ी", description: "Bread chain with beautiful designs. Made of gold or silver. Tied around waist.", descriptionHindi: "सुंदर डिजाइन वाली ब्रेड चेन। सोने या चांदी की बनी। कमर के चारों ओर बांधी जाती है।" },
        { name: "Naara", nameHindi: "नारा", description: "Silver fuzzy ornament worn with Ghagra.", descriptionHindi: "चांदी का रोएंदार आभूषण जो घाघरा के साथ पहना जाता है।" },
        { name: "Satka", nameHindi: "सतका", description: "Golden or silver ornament with hanging keys. Women tuck one end on waist cloth.", descriptionHindi: "लटकती चाबियों वाला सोने या चांदी का आभूषण। महिलाएं एक सिरा कमर के कपड़े में टिकाती हैं।" },
        { name: "Kandora", nameHindi: "कंडोरा", description: "Made of gold or silver. Designs more complex than Tagari.", descriptionHindi: "सोने या चांदी का बना। तागड़ी से अधिक जटिल डिजाइन।" }
    ];

    // Men's Ornaments
    const mensOrnaments = [
        { name: "Gofya", nameHindi: "गोफ्या", description: "Gold necklace worn by men around neck.", descriptionHindi: "सोने का हार जो पुरुष गले में पहनते हैं।" },
        { name: "Murki", nameHindi: "मुर्की", description: "Stud worn in ears by menfolk.", descriptionHindi: "पुरुषों द्वारा कान में पहना जाने वाला स्टड।" },
        { name: "Kathla", nameHindi: "कठला", description: "Gold ornament worn by men around neck.", descriptionHindi: "सोने का आभूषण जो पुरुष गले में पहनते हैं।" },
        { name: "Zanjira", nameHindi: "जंजीरा", description: "Ornament worn by men in their ears.", descriptionHindi: "पुरुषों द्वारा कान में पहना जाने वाला आभूषण।" },
        { name: "Chauth", nameHindi: "चौथ", description: "Ornament worn by men on their waists.", descriptionHindi: "पुरुषों द्वारा कमर पर पहना जाने वाला आभूषण।" }
    ];

    // Popular Foods
    const popularFoods = [
        { name: "Kachri Ki Chutney", nameHindi: "कचरी की चटनी", description: "Made from Kachri (cucumber variety) with garlic, onion, aniseed, cumin seeds. Sweet and sour sauce.", descriptionHindi: "कचरी (खीरे की किस्म) से लहसुन, प्याज, सौंफ, जीरा आदि के साथ बनाई जाती है। मीठी और खट्टी चटनी।" },
        { name: "Mixed Dal", nameHindi: "मिक्स दाल", description: "Staple diet. Mixture of 4-5 lentils prepared in Desi ghee. Eaten with rice or roti.", descriptionHindi: "मुख्य आहार। 4-5 दालों का मिश्रण देशी घी में तैयार किया जाता है। चावल या रोटी के साथ खाया जाता है।" },
        { name: "Bajra Aloo Roti", nameHindi: "बाजरा आलू रोटी", description: "Staple diet. Made with bajra flour, mashed potatoes, spices. Served hot with butter.", descriptionHindi: "मुख्य आहार। बाजरा आटा, मैश किए आलू, मसालों से बनाई जाती है। मक्खन के साथ गरम परोसी जाती है।" },
        { name: "Alsi Ki Pinni", nameHindi: "अलसी की पिन्नी", description: "Popular sweet made with flax seeds, flour, sugar, ghee and nuts. Eaten in winters.", descriptionHindi: "अलसी के बीज, आटा, चीनी, घी और नट्स से बनी लोकप्रिय मिठाई। सर्दियों में खाई जाती है।" },
        { name: "Malpua", nameHindi: "मालपुआ", description: "Indian version of sweet pancakes. Fluffy, served hot. Garnished in ghee.", descriptionHindi: "मीठे पैनकेक का भारतीय संस्करण। फूला हुआ, गरम परोसा जाता है। घी में तैयार किया जाता है।" },
        { name: "Bathua Raita", nameHindi: "बथुआ रायता", description: "Yogurt recipe with fresh Bathua leaves, cumin powder, red chilli and salt.", descriptionHindi: "ताजे बथुआ पत्तों, जीरा पाउडर, लाल मिर्च और नमक के साथ दही की रेसिपी।" },
        { name: "Besan Masala Roti", nameHindi: "बेसन मसाला रोटी", description: "Roti made of gram flour, wheat flour, ghee, mango powder and spices. Served with curd or raita.", descriptionHindi: "बेसन, गेहूं का आटा, घी, आमचूर और मसालों से बनी रोटी। दही या रायते के साथ परोसी जाती है।" },
        { name: "Kadhi Pakora", nameHindi: "कढ़ी पकोड़ा", description: "Famous dish. Gravy from sour yoghurt thickened with gram flour. Fried pakoras added. Eaten with rice.", descriptionHindi: "प्रसिद्ध व्यंजन। खट्टी दही से बनी ग्रेवी जिसे बेसन से गाढ़ा किया जाता है। तले हुए पकोड़े डाले जाते हैं। चावल के साथ खाया जाता है।" },
        { name: "Methi Gajar", nameHindi: "मेथी गाजर", description: "Spicy dish with fenugreek leaves and carrots. Touch of sweetness.", descriptionHindi: "मेथी और गाजर से बनी मसालेदार डिश। हल्की मिठास के साथ।" },
        { name: "Bajara Khichri", nameHindi: "बाजरा खिचड़ी", description: "Very famous. Bajra used instead of rice.", descriptionHindi: "बहुत प्रसिद्ध। चावल की जगह बाजरा का उपयोग किया जाता है।" }
    ];

    // Proverbs and Sayings
    const proverbs = [
        { proverb: "Gaaye Ki Bhens Taley, Bhens Ki Gaaye Taley", meaning: "Living a life even in difficult conditions", meaningHindi: "कठिन परिस्थितियों में भी जीवन जीना" },
        { proverb: "Jiska Khave Tikra, Uska Gawe Gitra", meaning: "To be devoted to favours", meaningHindi: "उपकारों के प्रति समर्पित रहना" },
        { proverb: "Jyhotan Ki Ladai Mein, Jhundo Ka Kho", meaning: "Loss of weak people in struggle of powerful ones", meaningHindi: "शक्तिशाली लोगों के संघर्ष में कमजोर लोगों का नुकसान" },
        { proverb: "Doodh Ki Rakhwali Billi", meaning: "To entrust a confidential task to a deceitful person", meaningHindi: "गुप्त कार्य को धोखेबाज व्यक्ति को सौंपना" },
        { proverb: "Nekki Nau Kos, Badi Sau Kos", meaning: "Evil spreads faster than good", meaningHindi: "बुराई अच्छाई से तेजी से फैलती है" },
        { proverb: "Aapna Bharya Tey Jagat Ka Bharya", meaning: "Selfish people do not care for others", meaningHindi: "स्वार्थी लोग दूसरों की परवाह नहीं करते" },
        { proverb: "Chharnj Te Baje-e-Baje, Chhalni bi ke Bije-Jisme Battar Chhed", meaning: "Guilty person should not find fault in others", meaningHindi: "दोषी व्यक्ति को दूसरों में दोष नहीं ढूंढना चाहिए" }
    ];

    // Idioms
    const idioms = [
        { idiom: "Aal Karna", meaning: "To do some mischievous work", meaningHindi: "कोई शरारती काम करना" },
        { idiom: "Tawla Se Bawla", meaning: "The hasty person's discretion becomes zero", meaningHindi: "जल्दबाज़ करने वाले व्यक्ति का विवेक शून्य हो जाता है" },
        { idiom: "Ghar Ka Khodya Paani Pina", meaning: "To become fully self-dependent", meaningHindi: "पूरी तरह से आत्मनिर्भर बनना" },
        { idiom: "Thekli Chadana", meaning: "Spend days in poverty", meaningHindi: "गरीबी में दिन बिताना" },
        { idiom: "Barabat Hona", meaning: "To destroy", meaningHindi: "नष्ट करना" },
        { idiom: "Palle Gaanth Marna", meaning: "To learn a lesson after much humiliation", meaningHindi: "बहुत अपमान के बाद सबक सीखना" },
        { idiom: "Gangajal Thana", meaning: "Taking oath", meaningHindi: "शपथ लेना" }
    ];

    // Omens
    const goodOmens = [
        "Hiran Darshan (Seeing a deer crossing from left to right during journey)",
        "Kowe Ka Bolna (Crow making sound on roof - sign of guest coming)",
        "Paani Bhara Ghada (Seeing filled pitcher outside home)",
        "Brahaman Kanya Ka Darshan (Seeing a Brahmin girl early morning)",
        "Hatheli Ka Khujlana (Right palm itching for men, left for women - sign of wealth)",
        "Aankh Ka Phadakna (Right eye for men, left for women twitching)",
        "Dahi Athwa Chandi Ka Sikka (Seeing curd or silver coin in morning)",
        "Billi Ka Muh Dhona (Seeing cat washing face early morning - loved one coming)",
        "Doob Ka Darshan (Seeing green grass after getting up from bed)",
        "Gau Darshan (Seeing a cow)"
    ];

    const badOmens = [
        "Gwale Ka Bhens Ki Sawari (Seeing milkman riding a buffalo)",
        "Kutton Ka Rona (Wailing of dogs - premonition of tragedy)",
        "Kaali Billi Ka Rasta Katna (Black cat crossing from right to left)",
        "Khali Ghara Dekhna (Seeing empty pitcher with water bearer girl)",
        "Aankh Phadakna (Right eye for women, left for men twitching)",
        "Chhikna (Sneezing before starting a pious task)",
        "Shamshan Mein Gidaro Ka Rona (Jackals wailing in cremation ground - death premonition)"
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 dark:from-red-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Language Toggle Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-medium backdrop-blur-sm">
                        <Crown className="w-4 h-4" />
                        {language === "hindi" ? "सांस्कृतिक विरासत - हरियाणा सरकार" : "Cultural Heritage - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा की" : "Cultural"} <span className="text-red-600 dark:text-red-400">{language === "hindi" ? "सांस्कृतिक विरासत" : "Heritage of Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के पारंपरिक परिधान, आभूषण, लोक व्यंजन, शुभ-अशुभ संकेत, कहावतें, मुहावरे और सांस्कृतिक मान्यताओं की संपूर्ण जानकारी"
                            : "Complete information about traditional costumes, ornaments, folk foods, omens, proverbs, idioms and cultural beliefs of Haryana"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Shirt className="w-4 h-4 text-red-600" />
                            <span>{language === "hindi" ? "परिधान" : "Costumes"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Gem className="w-4 h-4 text-red-600" />
                            <span>{language === "hindi" ? "आभूषण" : "Ornaments"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Utensils className="w-4 h-4 text-red-600" />
                            <span>{language === "hindi" ? "व्यंजन" : "Foods"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Sun className="w-4 h-4 text-red-600" />
                            <span>{language === "hindi" ? "शुभ संकेत" : "Good Omens"}</span>
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
                            <div className="p-2 rounded-xl bg-red-500/20">
                                <History className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "परिचय" : "Introduction"}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "hindi"
                                ? "सांस्कृतिक विरासत एक समुदाय द्वारा विकसित जीवन शैली की अभिव्यक्ति है जो पीढ़ी दर पीढ़ी हस्तांतरित होती है। हरियाणा के लोग अपनी संस्कृति को रंगीन परिधानों और आभूषणों के माध्यम से प्रदर्शित करते हैं। महिलाएं बहुत रंगीन परिधान पहनती हैं जो उन्हें अधिक सुंदर और आकर्षक बनाते हैं जबकि पुरुषों के परिधान बहुत सरल लेकिन सुंदर होते हैं।"
                                : "Cultural Heritage is an expression of the ways of living developed by a community and passed on from Generation to Generation. People of Haryana reflect their culture through their different colourful costumes and ornaments. Women wear very colourful attires which make them more elegant and beautiful whereas men's costumes are very simple but graceful."}
                        </p>
                    </div>

                    {/* Men's Traditional Costumes Section */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/30">
                                <Shirt className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "पुरुषों के पारंपरिक परिधान" : "Men's Traditional Costumes"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {mensCostumes.map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-blue-600">{language === "hindi" ? item.nameHindi : item.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? item.descriptionHindi : item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Women's Traditional Costumes Section */}
                    <div className="bg-pink-500/5 rounded-2xl p-6 md:p-8 border-2 border-pink-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-pink-500/30">
                                <Heart className="w-5 h-5 text-pink-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-pink-600">{language === "hindi" ? "महिलाओं के पारंपरिक परिधान" : "Women's Traditional Costumes"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {womensCostumes.map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-pink-600">{language === "hindi" ? item.nameHindi : item.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? item.descriptionHindi : item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ornaments Section - Multiple Sub-sections */}
                    <div className="bg-amber-500/5 rounded-2xl p-6 md:p-8 border-2 border-amber-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-500/30">
                                <Gem className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-600">{language === "hindi" ? "पारंपरिक आभूषण" : "Traditional Ornaments"}</h2>
                        </div>

                        {/* Foot Ornaments */}
                        <h3 className="text-xl font-semibold text-amber-600 mb-3 mt-2">{language === "hindi" ? "पैरों के आभूषण" : "Foot Ornaments"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {footOrnaments.map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h4 className="text-lg font-semibold text-amber-600">{language === "hindi" ? item.nameHindi : item.name}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? item.descriptionHindi : item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Hand and Arm Ornaments */}
                        <h3 className="text-xl font-semibold text-amber-600 mb-3">{language === "hindi" ? "हाथों और बाहों के आभूषण" : "Hand and Arm Ornaments"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {handOrnaments.map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h4 className="text-lg font-semibold text-amber-600">{language === "hindi" ? item.nameHindi : item.name}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? item.descriptionHindi : item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Ear, Nose and Forehead Ornaments */}
                        <h3 className="text-xl font-semibold text-amber-600 mb-3">{language === "hindi" ? "कान, नाक और माथे के आभूषण" : "Ear, Nose and Forehead Ornaments"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {faceOrnaments.map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h4 className="text-lg font-semibold text-amber-600">{language === "hindi" ? item.nameHindi : item.name}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? item.descriptionHindi : item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Neck Ornaments */}
                        <h3 className="text-xl font-semibold text-amber-600 mb-3">{language === "hindi" ? "गले के आभूषण" : "Neck Ornaments"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {neckOrnaments.map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h4 className="text-lg font-semibold text-amber-600">{language === "hindi" ? item.nameHindi : item.name}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? item.descriptionHindi : item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Waist Ornaments */}
                        <h3 className="text-xl font-semibold text-amber-600 mb-3">{language === "hindi" ? "कमर के आभूषण" : "Waist Ornaments"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {waistOrnaments.map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h4 className="text-lg font-semibold text-amber-600">{language === "hindi" ? item.nameHindi : item.name}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? item.descriptionHindi : item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Men's Ornaments */}
                        <h3 className="text-xl font-semibold text-amber-600 mb-3">{language === "hindi" ? "पुरुषों के आभूषण" : "Men's Ornaments"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {mensOrnaments.map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h4 className="text-lg font-semibold text-amber-600">{language === "hindi" ? item.nameHindi : item.name}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? item.descriptionHindi : item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Popular Foods Section */}
                    <div className="bg-green-500/5 rounded-2xl p-6 md:p-8 border-2 border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/30">
                                <Utensils className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{language === "hindi" ? "प्रसिद्ध व्यंजन" : "Popular Foods in Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {popularFoods.map((food, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border hover:shadow-md transition-all">
                                    <h3 className="text-lg font-semibold text-green-600">{language === "hindi" ? food.nameHindi : food.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? food.descriptionHindi : food.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Omens Section */}
                    <div className="bg-purple-500/5 rounded-2xl p-6 md:p-8 border-2 border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-500/30">
                                <Sun className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-600">{language === "hindi" ? "शुभ और अशुभ संकेत" : "Good and Bad Omens"}</h2>
                        </div>

                        <h3 className="text-xl font-semibold text-green-600 mb-3">{language === "hindi" ? "शुभ संकेत (Good Omens)" : "Good Omens"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            {goodOmens.map((omen, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-3 border flex items-start gap-2">
                                    <Sun className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{omen}</span>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-xl font-semibold text-red-600 mb-3">{language === "hindi" ? "अशुभ संकेत (Bad Omens)" : "Bad Omens"}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {badOmens.map((omen, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-3 border flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{omen}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Proverbs Section */}
                    <div className="bg-cyan-500/5 rounded-2xl p-6 md:p-8 border-2 border-cyan-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-cyan-500/30">
                                <MessageCircle className="w-5 h-5 text-cyan-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-cyan-600">{language === "hindi" ? "हरियाणवी कहावतें" : "Haryanvi Proverbs"}</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {proverbs.map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <p className="text-lg font-semibold text-cyan-600">{item.proverb}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? item.meaningHindi : item.meaning}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Idioms Section */}
                    <div className="bg-orange-500/5 rounded-2xl p-6 md:p-8 border-2 border-orange-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-orange-500/30">
                                <BookOpen className="w-5 h-5 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-orange-600">{language === "hindi" ? "हरियाणवी मुहावरे" : "Haryanvi Idioms"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {idioms.map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <p className="text-lg font-semibold text-orange-600">{item.idiom}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{language === "hindi" ? item.meaningHindi : item.meaning}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cultural Beliefs Section */}
                    <div className="bg-indigo-500/5 rounded-2xl p-6 md:p-8 border-2 border-indigo-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-500/30">
                                <Users className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-indigo-600">{language === "hindi" ? "सांस्कृतिक मान्यताएँ" : "Cultural Beliefs"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="text-lg font-semibold text-indigo-600">{language === "hindi" ? "यात्रा से संबंधित मान्यताएँ" : "Journey Related Beliefs"}</h3>
                                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                                    <li>Eating curd and jaggery before journey is good</li>
                                    <li>Wednesday journey and milk before journey not auspicious</li>
                                    <li>Sneezing before journey not auspicious</li>
                                    <li>Brooming after someone gone out not auspicious</li>
                                </ul>
                            </div>
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="text-lg font-semibold text-indigo-600">{language === "hindi" ? "समाज से संबंधित मान्यताएँ" : "Society Related Beliefs"}</h3>
                                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                                    <li>No iron purchase on Saturday</li>
                                    <li>No hair cutting on Thursday for men</li>
                                    <li>Wednesday good to start new work, Friday not good</li>
                                    <li>No digging Earth on Tuesday</li>
                                </ul>
                            </div>
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="text-lg font-semibold text-indigo-600">{language === "hindi" ? "बीमारी से संबंधित मान्यताएँ" : "Sickness Related Beliefs"}</h3>
                                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                                    <li>Kajal dot on forehead to ward off evil eye</li>
                                    <li>Blue thread on calves' feet to prevent evil eye</li>
                                    <li>No frequent weighing of newborn baby</li>
                                    <li>Pregnant women should not go out during eclipse</li>
                                </ul>
                            </div>
                            <div className="bg-card rounded-xl p-4 border">
                                <h3 className="text-lg font-semibold text-indigo-600">{language === "hindi" ? "अन्य मान्यताएँ" : "Other Beliefs"}</h3>
                                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                                    <li>Sleeping towards south not considered good</li>
                                    <li>Sneezing and hiccups - sign of someone remembering you</li>
                                    <li>No milk selling or curding on Amavasya and Ekadashi</li>
                                    <li>Infants not to sleep in cots at 12 PM (noon)</li>
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
                        {language === "hindi" ? "हरियाणा सांस्कृतिक विरासत: तथ्य सारांश" : "Haryana Cultural Heritage: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-red-600 mb-2">13+</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "पुरुषों के परिधान" : "Men's Costumes"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-red-600 mb-2">12+</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "महिलाओं के परिधान" : "Women's Costumes"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-red-600 mb-2">30+</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "आभूषण के प्रकार" : "Ornament Types"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "प्रसिद्ध व्यंजन" : "Popular Foods"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "शुभ-अशुभ संकेत" : "Good/Bad Omens"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-red-600 mb-2">7+</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "प्रसिद्ध कहावतें" : "Famous Proverbs"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-red-600 mb-2">7+</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "प्रसिद्ध मुहावरे" : "Famous Idioms"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-red-600 mb-2">4</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सांस्कृतिक मान्यताएँ श्रेणियाँ" : "Cultural Belief Categories"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा की सांस्कृतिक विरासत के" : "Common"} <span className="text-red-600">{language === "hindi" ? "बारे में सामान्य प्रश्न" : "Questions About Haryana's Cultural Heritage"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के पारंपरिक परिधानों, आभूषणों, व्यंजनों और सांस्कृतिक मान्यताओं के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's traditional costumes, ornaments, foods, and cultural beliefs"}
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
                                        className={`w-5 h-5 text-red-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
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
                            {language === "hindi" ? "अपने हरियाणा सांस्कृतिक विरासत के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Cultural Heritage?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-red-600 hover:bg-red-700">
                                {language === "hindi" ? "हरियाणा संस्कृति क्विज़ लें" : "Take Haryana Culture Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/fairs-festivals" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "अगला अध्याय: मेले और त्यौहार" : "Next Chapter: Fairs & Festivals"}
                        </Link>
                        <Link href="/haryana-gk/languages-literature" className="text-red-600 hover:text-red-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: भाषाएँ और साहित्य" : "Next Chapter: Languages & Literature"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा की सांस्कृतिक विरासत - संपूर्ण संदर्भ" : "Cultural Heritage of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की सांस्कृतिक विरासत के बारे में व्यापक जानकारी प्रदान करता है - पुरुषों और महिलाओं के पारंपरिक परिधान, पैर, हाथ, कान, नाक, गले और कमर के आभूषण, प्रसिद्ध व्यंजन (कचरी की चटनी, मिक्स दाल, बाजरा आलू रोटी, कढ़ी पकोड़ा), शुभ और अशुभ संकेत, हरियाणवी कहावतें, मुहावरे, और सांस्कृतिक मान्यताएँ। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about the cultural heritage of Haryana - traditional costumes of men and women, ornaments for feet, hands, ears, nose, neck and waist, popular foods (Kachri Ki Chutney, Mixed Dal, Bajra Aloo Roti, Kadhi Pakora), good and bad omens, Haryanvi proverbs, idioms, and cultural beliefs. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और सांस्कृतिक अभिलेखों से स्रोतित" : "Information sourced from official Government of Haryana publications and cultural records"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}