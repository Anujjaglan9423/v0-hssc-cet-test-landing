"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    History,
    Droplets,
    Mountain,
    Wind,
    Map,
    ChevronDown,
    HelpCircle,
    Waves,
    Trees,
    Landmark,
    Compass,
    ArrowLeft,
    Bird,
    PawPrint,
    Building2,
    Factory,
    Flower2,
    Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NationalParksOfHaryanaPage() {
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
            questionHindi: "हरियाणा में कितने राष्ट्रीय उद्यान हैं?",
            questionEnglish: "How many National Parks are there in Haryana?",
            answerHindi: "हरियाणा में 2 राष्ट्रीय उद्यान हैं - सुल्तानपुर राष्ट्रीय उद्यान और कलेसर राष्ट्रीय उद्यान।",
            answerEnglish: "There are 2 National Parks in Haryana - Sultanpur National Park and Kalesar National Park."
        },
        {
            questionHindi: "हरियाणा का सबसे बड़ा राष्ट्रीय उद्यान कौन सा है?",
            questionEnglish: "Which is the largest National Park in Haryana?",
            answerHindi: "कलेसर राष्ट्रीय उद्यान हरियाणा का सबसे बड़ा राष्ट्रीय उद्यान है, जो 4682.32 हेक्टेयर क्षेत्र में फैला है।",
            answerEnglish: "Kalesar National Park is the largest National Park in Haryana, covering an area of 4682.32 hectares."
        },
        {
            questionHindi: "हरियाणा का सबसे छोटा वन्यजीव अभयारण्य कौन सा है?",
            questionEnglish: "Which is the smallest wildlife sanctuary in Haryana?",
            answerHindi: "छिलछिल्ला वन्यजीव अभयारण्य हरियाणा का सबसे छोटा वन्यजीव अभयारण्य है, जो 28.92 हेक्टेयर क्षेत्र में फैला है।",
            answerEnglish: "Chhildhilla Wildlife Sanctuary is the smallest wildlife sanctuary in Haryana, covering an area of 28.92 hectares."
        },
        {
            questionHindi: "हरियाणा का सबसे बड़ा वन्यजीव अभयारण्य कौन सा है?",
            questionEnglish: "Which is the largest wildlife sanctuary in Haryana?",
            answerHindi: "अबुबशहर वन्यजीव अभयारण्य हरियाणा का सबसे बड़ा वन्यजीव अभयारण्य है, जो 11530.56 हेक्टेयर क्षेत्र में फैला है।",
            answerEnglish: "Abubshahar Wildlife Sanctuary is the largest wildlife sanctuary in Haryana, covering an area of 11530.56 hectares."
        },
        {
            questionHindi: "सुल्तानपुर राष्ट्रीय उद्यान को किसके नाम से भी जाना जाता है?",
            questionEnglish: "What is the other name of Sultanpur National Park?",
            answerHindi: "सुल्तानपुर राष्ट्रीय उद्यान को डॉ. सालिम अली पक्षी अभयारण्य के नाम से भी जाना जाता है।",
            answerEnglish: "Sultanpur National Park is also known as Dr. Salim Ali Bird Sanctuary."
        },
        {
            questionHindi: "हरियाणा में कितने संरक्षण रिजर्व हैं?",
            questionEnglish: "How many Conservation Reserves are there in Haryana?",
            answerHindi: "हरियाणा में 2 संरक्षण रिजर्व हैं - सरस्वती वन्यजीव अभयारण्य और बीर बारा बन वन्यजीव अभयारण्य।",
            answerEnglish: "There are 2 Conservation Reserves in Haryana - Saraswati Wildlife Sanctuary and Bir Bara Ban Wildlife Sanctuary."
        },
        {
            questionHindi: "हरियाणा की सबसे बड़ी आर्द्रभूमि कौन सी है?",
            questionEnglish: "Which is the largest wetland in Haryana?",
            answerHindi: "भिंडावास झील हरियाणा की सबसे बड़ी आर्द्रभूमि है, जो झज्जर जिले में स्थित है।",
            answerEnglish: "Bhindawas Lake is the largest wetland in Haryana, located in Jhajjar district."
        },
        {
            questionHindi: "एशिया का पहला गिद्ध प्रजनन केंद्र कहाँ स्थित है?",
            questionEnglish: "Where is Asia's first vulture breeding centre located?",
            answerHindi: "एशिया का पहला गिद्ध प्रजनन केंद्र हरियाणा के पिंजौर में स्थित है।",
            answerEnglish: "Asia's first vulture breeding centre is located in Pinjore, Haryana."
        }
    ];

    // Overview Section
    const overview = {
        titleHindi: "हरियाणा के राष्ट्रीय उद्यान और वन्यजीव अभयारण्य",
        titleEnglish: "National Parks and Wildlife Sanctuaries in Haryana",
        contentHindi: "हरियाणा राज्य में समृद्ध जैव-विविधता है, जो राज्य के प्राकृतिक जंगलों में विभिन्न प्रकार के पक्षियों और जानवरों के अस्तित्व के लिए उपयुक्त बनाती है। राज्य में पक्षियों की लगभग 500 प्रजातियाँ हैं और सर्दियों के मौसम में बड़ी संख्या में प्रवासी पक्षी भी आते हैं। वन्यजीवों के संरक्षण के लिए, राज्य में लगभग 33000 हेक्टेयर क्षेत्र संरक्षित क्षेत्र नेटवर्क के अंतर्गत है, जिसमें 2 राष्ट्रीय उद्यान, 8 वन्यजीव अभयारण्य और 2 संरक्षण रिजर्व शामिल हैं। राज्य में 7 वन्यजीव प्रजनन केंद्र, 3 चिड़ियाघर, 1 हाथी पुनर्वास केंद्र और 1 डीयर पार्क हैं।",
        contentEnglish: "Haryana state has rich bio-diversity which makes it suitable for different varieties of birds and animals to exist in the natural forests of state. The state has around 500 species of birds and also welcomes large number of migratory birds during the winter season. For the conservation of wildlife, the state has about 33000 hectares under protected area network which includes 2 National Parks, 8 Wildlife Sanctuaries and 2 Conservation Reserves. The state has 7 Wildlife Breeding Centres, 3 Zoos, 1 Elephant Rehabilitation Centre and 1 Deer Park."
    };

    // National Parks
    const nationalParks = [
        {
            name: "Sultanpur National Park",
            nameHindi: "सुल्तानपुर राष्ट्रीय उद्यान",
            location: "Gurugram",
            locationHindi: "गुरुग्राम",
            area: "142.52 hectares",
            areaHindi: "142.52 हेक्टेयर",
            details: "It is located in Sultanpur of Gurugram district. The park is also named as Dr. Salim Ali Bird Sanctuary after the famous Indian Ornithologist, Dr. Salim Ali, who established this park as a Bird Sanctuary. In this park, birds from Europe, Siberia and Central Asia can be seen in the winter. There are about 250 bird species found in this national park, of which Siberian cranes are prominent. This park is known as Bird Paradise. The area of the park was classified as a Wetland at the conference on Nature and Natural Resources Conservation held in New Delhi in 1969. On 2nd April, 1971, the Sultanpur lake got the status of a bird sanctuary under the Punjab Wildlife Protection Act. In the year 1991, this sanctuary got the status of National Park under the Wildlife Act, 1972. This national park was earlier known as Lake Bird Sanctuary. It is the state's best-known Eco-park. Common species of birds in this park include hoopoe, Indian cormorant, francolin, spoon bill, crested lark, spotted owlet, etc. Migratory bird species include Siberian crane, wood sandpiper, Eurasian wilgon, black tailed godwit, spotted redshank, etc.",
            detailsHindi: "यह गुरुग्राम जिले के सुल्तानपुर में स्थित है। इस पार्क को प्रसिद्ध भारतीय पक्षी विज्ञानी डॉ. सालिम अली के नाम पर डॉ. सालिम अली पक्षी अभयारण्य भी कहा जाता है, जिन्होंने इस पार्क को पक्षी अभयारण्य के रूप में स्थापित किया था। इस पार्क में सर्दियों में यूरोप, साइबेरिया और मध्य एशिया के पक्षी देखे जा सकते हैं। इस राष्ट्रीय उद्यान में लगभग 250 पक्षी प्रजातियाँ पाई जाती हैं, जिनमें साइबेरियन क्रेन प्रमुख हैं। यह पार्क बर्ड पैराडाइज के नाम से जाना जाता है। 2 अप्रैल, 1971 को, सुल्तानपुर झील को पंजाब वन्यजीव संरक्षण अधिनियम के तहत पक्षी अभयारण्य का दर्जा मिला। वर्ष 1991 में, इस अभयारण्य को वन्यजीव अधिनियम, 1972 के तहत राष्ट्रीय उद्यान का दर्जा मिला। यह राज्य का सबसे प्रसिद्ध इको-पार्क है।"
        },
        {
            name: "Kalesar National Park",
            nameHindi: "कलेसर राष्ट्रीय उद्यान",
            location: "Yamunanagar",
            locationHindi: "यमुनानगर",
            area: "4682.32 hectares",
            areaHindi: "4682.32 हेक्टेयर",
            details: "It is located in the Yamunanagar district of Haryana. It is the largest National Park in the state in terms of area. It shares boundary with three states viz., Himachal Pradesh, Uttarakhand and Uttar Pradesh. It is named after the Kalesar (Shiva) temple located in this protected area. This park was declared as National Park on 8th December, 2003. The park is famous for Red Jungle fowl. The other animals found in this National Park are leopard, barking deer, sambar, chital, python, king cobra, monitor lizard, etc.",
            detailsHindi: "यह हरियाणा के यमुनानगर जिले में स्थित है। क्षेत्रफल की दृष्टि से यह राज्य का सबसे बड़ा राष्ट्रीय उद्यान है। यह तीन राज्यों - हिमाचल प्रदेश, उत्तराखंड और उत्तर प्रदेश - के साथ सीमा साझा करता है। इसका नाम इस संरक्षित क्षेत्र में स्थित कलेसर (शिव) मंदिर के नाम पर रखा गया है। इस पार्क को 8 दिसंबर, 2003 को राष्ट्रीय उद्यान घोषित किया गया था। यह पार्क रेड जंगल फाउल के लिए प्रसिद्ध है। इस राष्ट्रीय उद्यान में पाए जाने वाले अन्य जानवरों में तेंदुआ, बार्किंग डियर, सांभर, चीतल, अजगर, किंग कोबरा, मॉनिटर छिपकली आदि शामिल हैं।"
        }
    ];

    // Wildlife Sanctuaries
    const wildlifeSanctuaries = [
        {
            name: "Bhindawas Wildlife Sanctuary",
            nameHindi: "भिंडावास वन्यजीव अभयारण्य",
            location: "Jhajjar",
            locationHindi: "झज्जर",
            area: "411.55 hectares",
            areaHindi: "411.55 हेक्टेयर",
            details: "It was established in the year 1986 in the district of Jhajjar as a bird sanctuary. It covers an area of 411.55 hectares. It was declared a bird sanctuary by Indian Government on 3rd June, 2009. It attracts around 35000 variety of migratory birds belonging to over 250 species during winter. This sanctuary is famous for brown goose, duck, red nightingale, kingfisher, neelgai, jackal, langur, peafowl, hornbill, coppersmith barbet, etc. Bhindawas Lake of Bhindawas Wildlife Sanctuary is the largest wetland in Haryana.",
            detailsHindi: "यह वर्ष 1986 में झज्जर जिले में एक पक्षी अभयारण्य के रूप में स्थापित किया गया था। यह 411.55 हेक्टेयर क्षेत्र में फैला है। इसे 3 जून, 2009 को भारत सरकार द्वारा पक्षी अभयारण्य घोषित किया गया था। यह सर्दियों के दौरान 250 से अधिक प्रजातियों से संबंधित लगभग 35000 प्रकार के प्रवासी पक्षियों को आकर्षित करता है। भिंडावास वन्यजीव अभयारण्य की भिंडावास झील हरियाणा की सबसे बड़ी आर्द्रभूमि है।"
        },
        {
            name: "Chhildhilla Wildlife Sanctuary",
            nameHindi: "छिलछिल्ला वन्यजीव अभयारण्य",
            location: "Kurukshetra",
            locationHindi: "कुरुक्षेत्र",
            area: "28.92 hectares",
            areaHindi: "28.92 हेक्टेयर",
            details: "It was established in November, 1986 in the district of Kurukshetra. It covers an area of 28.92 hectares. It is the smallest wildlife sanctuary in Haryana in terms of area. In the year 2009, the Environment Ministry has declared the sanctuary as Eco-Sensitive Zone (ESZ) for conservation of flora and fauna. The sanctuary attracts wide variety of winter migratory birds. Blue peafowl, ducks, starls, hornbill, barbet, rufous treepie, greater coucal, etc. are found here.",
            detailsHindi: "यह नवंबर, 1986 में कुरुक्षेत्र जिले में स्थापित किया गया था। यह 28.92 हेक्टेयर क्षेत्र में फैला है। क्षेत्रफल की दृष्टि से यह हरियाणा का सबसे छोटा वन्यजीव अभयारण्य है। वर्ष 2009 में, पर्यावरण मंत्रालय ने वनस्पतियों और जीवों के संरक्षण के लिए अभयारण्य को इको-सेंसिटिव ज़ोन (ESZ) घोषित किया है।"
        },
        {
            name: "Nahar Wildlife Sanctuary",
            nameHindi: "नाहर वन्यजीव अभयारण्य",
            location: "Rewari",
            locationHindi: "रेवाड़ी",
            area: "211.35 hectares",
            areaHindi: "211.35 हेक्टेयर",
            details: "It was established in the year 1987 in the district of Rewari. It is located in the state as a protected forest. It covers an area of 211.35 hectares. In ancient times, this sanctuary was the pasture of the Nawab of Dujana, which attained the status of sanctuary in the year 1987. It was known as Nahar Wildlife Reserve Forest before it was declared as a sanctuary. It was declared as Eco-Sensitive Zone in 2009 by Indian Government. Black buck, jackal, monitor lizard, neelgai, fox, black deer, brown pheasant, langur, blue peafowl, etc. are found here.",
            detailsHindi: "यह वर्ष 1987 में रेवाड़ी जिले में स्थापित किया गया था। यह राज्य में एक संरक्षित वन के रूप में स्थित है। यह 211.35 हेक्टेयर क्षेत्र में फैला है। प्राचीन काल में, यह अभयारण्य दुजाना के नवाब का चारागाह था, जिसे वर्ष 1987 में अभयारण्य का दर्जा मिला।"
        },
        {
            name: "Bir Shikargarh Wildlife Sanctuary",
            nameHindi: "बीर शिकारगढ़ वन्यजीव अभयारण्य",
            location: "Panchkula",
            locationHindi: "पंचकूला",
            area: "767.30 hectares",
            areaHindi: "767.30 हेक्टेयर",
            details: "It was established on 29th May, 1987, in Kalka tehsil of Panchkula district. It covers an area of 767.30 hectares. In 2009, Government of India declared it an Eco-Sensitive Zone (ESZ). This sanctuary is famous for its variety of flora and fauna. Cheetal, sambar, neelgai, etc. are found here.",
            detailsHindi: "यह 29 मई, 1987 को पंचकूला जिले की कालका तहसील में स्थापित किया गया था। यह 767.30 हेक्टेयर क्षेत्र में फैला है। 2009 में, भारत सरकार ने इसे इको-सेंसिटिव ज़ोन (ESZ) घोषित किया। यह अभयारण्य अपनी विविध वनस्पतियों और जीवों के लिए प्रसिद्ध है।"
        },
        {
            name: "Abubshahar Wildlife Sanctuary",
            nameHindi: "अबुबशहर वन्यजीव अभयारण्य",
            location: "Sirsa",
            locationHindi: "सिरसा",
            area: "11530.56 hectares",
            areaHindi: "11530.56 हेक्टेयर",
            details: "It was established on 30th January, 1987 in Sirsa district. It covers an area of 11530.56 hectares. In terms of area, it is the largest Wildlife Sanctuary of Haryana. The main attraction of the wildlife sanctuary are blue bull, partridges and black buck.",
            detailsHindi: "यह 30 जनवरी, 1987 को सिरसा जिले में स्थापित किया गया था। यह 11530.56 हेक्टेयर क्षेत्र में फैला है। क्षेत्रफल की दृष्टि से यह हरियाणा का सबसे बड़ा वन्यजीव अभयारण्य है। इस वन्यजीव अभयारण्य का मुख्य आकर्षण नीली गाय, तीतर और काला हिरण हैं।"
        },
        {
            name: "Khaparwas Wildlife Sanctuary",
            nameHindi: "खपरवास वन्यजीव अभयारण्य",
            location: "Jhajjar",
            locationHindi: "झज्जर",
            area: "82.70 hectares",
            areaHindi: "82.70 हेक्टेयर",
            details: "It was established on 30th January, 1987 in Jhajjar district. It covers an area of 82.70 hectares. It was also declared as Eco-Sensitive Zone by the Indian Government from the point of view of environment and pollution. Water birds are main attraction of this sanctuary. It is famous for various breeds of migratory birds.",
            detailsHindi: "यह 30 जनवरी, 1987 को झज्जर जिले में स्थापित किया गया था। यह 82.70 हेक्टेयर क्षेत्र में फैला है। पर्यावरण और प्रदूषण की दृष्टि से भारत सरकार द्वारा इसे इको-सेंसिटिव ज़ोन भी घोषित किया गया था। जलीय पक्षी इस अभयारण्य का मुख्य आकर्षण हैं।"
        },
        {
            name: "Kalesar Wildlife Sanctuary",
            nameHindi: "कलेसर वन्यजीव अभयारण्य",
            location: "Yamunanagar",
            locationHindi: "यमुनानगर",
            area: "5525.88 hectares",
            areaHindi: "5525.88 हेक्टेयर",
            details: "It is located in Yamunanagar district. It covers an area of 5525.88 hectares. Initially, the area of Kalesar Wildlife Sanctuary, set up on 13th December, 1996, was 5435.72 hectares, but by issuing a notification on 13th January, 2000, the area of 90.11 hectares was further added in this sanctuary. It was also declared as Eco-Sensitive Zone by the Indian Government. This area has dense sal forests, khair forests and patches of grasslands. Cheetal, sambhar, neelgai, barking deer, wild boar, etc. are found here.",
            detailsHindi: "यह यमुनानगर जिले में स्थित है। यह 5525.88 हेक्टेयर क्षेत्र में फैला है। प्रारंभ में, 13 दिसंबर, 1996 को स्थापित कलेसर वन्यजीव अभयारण्य का क्षेत्रफल 5435.72 हेक्टेयर था, लेकिन 13 जनवरी, 2000 को एक अधिसूचना जारी करके, इस अभयारण्य में 90.11 हेक्टेयर का क्षेत्रफल और जोड़ा गया। इस क्षेत्र में घने साल वन, खैर के वन और घास के मैदान हैं।"
        },
        {
            name: "Khol Hi-Raitan Wildlife Sanctuary",
            nameHindi: "खोल ही-रायतान वन्यजीव अभयारण्य",
            location: "Panchkula",
            locationHindi: "पंचकूला",
            area: "4882.96 hectares",
            areaHindi: "4882.96 हेक्टेयर",
            details: "It was established in the year 2004 in the hills of Shivalik in Panchkula district near Bir Shikargarh Wildlife Sanctuary. It covers an area of 4882.96 hectares. At the time of its establishment, the area of this sanctuary was 2226.56 hectares, but in the year 2007, an area of 2656.38 hectares was also added in this sanctuary. Cheetal, spotted deer, jackal, wild cat, Indian fox, brown pheasant, bear, wild monkey, etc. are found here.",
            detailsHindi: "यह वर्ष 2004 में पंचकूला जिले में बीर शिकारगढ़ वन्यजीव अभयारण्य के पास शिवालिक की पहाड़ियों में स्थापित किया गया था। यह 4882.96 हेक्टेयर क्षेत्र में फैला है। अपनी स्थापना के समय, इस अभयारण्य का क्षेत्रफल 2226.56 हेक्टेयर था, लेकिन वर्ष 2007 में, इस अभयारण्य में 2656.38 हेक्टेयर का क्षेत्रफल भी जोड़ा गया।"
        },
        {
            name: "Asola-Bhatti Wildlife Sanctuary",
            nameHindi: "असोला-भट्टी वन्यजीव अभयारण्य",
            location: "Gurugram/Faridabad/Mewat",
            locationHindi: "गुरुग्राम/फरीदाबाद/मेवात",
            area: "2782 hectares",
            areaHindi: "2782 हेक्टेयर",
            details: "It covers an area of 2782 hectares. It starts from Sariska National Park in Alwar, Rajasthan and spread over Mewat, Faridabad and Gurugram districts of Haryana. Places around this sanctuary are Surajkund, Anangpur dam, Tughlaqabad fort, Adilabad ruins, Chhatarpur temple, etc. This protected area contains one of the last surviving remnants of Delhi Ridge hill range and its semi-arid forest habitat and its dependent wildlife. The Ministry of Environment and Forests has declared the 1 km area around Asola-Bhatti Wildlife Sanctuary in Gurugram and Faridabad as Eco Sensitive Zone. About 200 species of local and migratory birds are found in this sanctuary.",
            detailsHindi: "यह 2782 हेक्टेयर क्षेत्र में फैला है। यह राजस्थान के अलवर में सरिस्का राष्ट्रीय उद्यान से शुरू होता है और हरियाणा के मेवात, फरीदाबाद और गुरुग्राम जिलों में फैला हुआ है। इस अभयारण्य के आसपास के स्थान सूरजकुंड, अनंगपुर बांध, तुगलकाबाद किला, अदीलाबाद के खंडहर, छतरपुर मंदिर आदि हैं। पर्यावरण और वन मंत्रालय ने गुरुग्राम और फरीदाबाद में असोला-भट्टी वन्यजीव अभयारण्य के आसपास 1 किमी क्षेत्र को इको सेंसिटिव ज़ोन घोषित किया है। इस अभयारण्य में स्थानीय और प्रवासी पक्षियों की लगभग 200 प्रजातियाँ पाई जाती हैं।"
        }
    ];

    // Conservation Reserves
    const conservationReserves = [
        {
            name: "Saraswati Wildlife Sanctuary",
            nameHindi: "सरस्वती वन्यजीव अभयारण्य",
            location: "Kaithal and Kurukshetra",
            locationHindi: "कैथल और कुरुक्षेत्र",
            area: "4452.85 hectares",
            areaHindi: "4452.85 हेक्टेयर",
            details: "It is also known as Seonsar Forest and is spread over Kaithal and Kurukshetra districts of Haryana. It covers an area of 4452.85 hectares. It was established in the year 2007. It is the third largest Wildlife Sanctuary of Haryana. Deers are found more in this sanctuary.",
            detailsHindi: "इसे सियोंसर वन के नाम से भी जाना जाता है और यह हरियाणा के कैथल और कुरुक्षेत्र जिलों में फैला हुआ है। यह 4452.85 हेक्टेयर क्षेत्र में फैला है। इसकी स्थापना वर्ष 2007 में हुई थी। यह हरियाणा का तीसरा सबसे बड़ा वन्यजीव अभयारण्य है। इस अभयारण्य में हिरण अधिक पाए जाते हैं।"
        },
        {
            name: "Bir Bara Ban Wildlife Sanctuary",
            nameHindi: "बीर बारा बन वन्यजीव अभयारण्य",
            location: "Jind",
            locationHindi: "जींद",
            area: "419.26 hectares",
            areaHindi: "419.26 हेक्टेयर",
            details: "It is located in Jind district. It covers an area of 419.26 hectares. It was established in the year 2007. Neelgai, jackal, langur and birds like rufous treepie, coucal, hornbill and coppersmith barbet are found here.",
            detailsHindi: "यह जींद जिले में स्थित है। यह 419.26 हेक्टेयर क्षेत्र में फैला है। इसकी स्थापना वर्ष 2007 में हुई थी। यहाँ नीलगाय, सियार, लंगूर और रूफस ट्रीपाई, कूकल, हॉर्नबिल और कॉपरस्मिथ बारबेट जैसे पक्षी पाए जाते हैं।"
        }
    ];

    // Zoos
    const zoos = [
        {
            name: "Pipli Zoo",
            nameHindi: "पिपली चिड़ियाघर",
            location: "Kurukshetra",
            locationHindi: "कुरुक्षेत्र",
            area: "27 acres",
            areaHindi: "27 एकड़",
            details: "This zoo is located on National Highway-1. This zoo was established in the year 1982-83 in Pipli of Kurukshetra district.",
            detailsHindi: "यह चिड़ियाघर राष्ट्रीय राजमार्ग-1 पर स्थित है। इस चिड़ियाघर की स्थापना वर्ष 1982-83 में कुरुक्षेत्र जिले के पिपली में की गई थी।"
        },
        {
            name: "Mini Zoo, Bhiwani",
            nameHindi: "मिनी चिड़ियाघर, भिवानी",
            location: "Bhiwani",
            locationHindi: "भिवानी",
            area: "7 acres",
            areaHindi: "7 एकड़",
            details: "It was established in the year 1982-83 at Bhiwani district. Deer park was established in this zoo on 3rd October, 1982 and Bear park on 5th September, 1983. Horses and crocodiles are also being kept in this zoo since 1987. In this zoo, animals like crocodile, black bear, fox, spotted deer, sambar, hippopotamus, red wild rooster, leopard, tiger, etc. are found.",
            detailsHindi: "इसकी स्थापना वर्ष 1982-83 में भिवानी जिले में की गई थी। इस चिड़ियाघर में 3 अक्टूबर, 1982 को डीयर पार्क और 5 सितंबर, 1983 को भालू पार्क की स्थापना की गई थी। 1987 से इस चिड़ियाघर में घोड़े और मगरमच्छ भी रखे जा रहे हैं।"
        },
        {
            name: "Rohtak Zoo",
            nameHindi: "रोहतक चिड़ियाघर",
            location: "Rohtak",
            locationHindi: "रोहतक",
            area: "44 acres",
            areaHindi: "44 एकड़",
            details: "It was established in the year 1985-86 and it covers an area of 44 acres. The zoo was approved by the Central Zoo Authority on 28th March, 2005. The Rohtak Zoo has different animals like crocodile, hippopotamus, tiger, hyena, wolf, jackal, beaver, black deer, sambar, langur, monkey, etc.",
            detailsHindi: "इसकी स्थापना वर्ष 1985-86 में हुई थी और यह 44 एकड़ क्षेत्र में फैला है। चिड़ियाघर को केंद्रीय चिड़ियाघर प्राधिकरण द्वारा 28 मार्च, 2005 को अनुमोदित किया गया था। रोहतक चिड़ियाघर में मगरमच्छ, दरियाई घोड़ा, बाघ, लकड़बग्घा, भेड़िया, सियार, ऊदबिलाव, काले हिरण, सांभर, लंगूर, बंदर आदि जानवर हैं।"
        }
    ];

    // Breeding Centres
    const breedingCentres = [
        { name: "Crocodile Breeding Centre", location: "Kurukshetra (Bhor Saidan)" },
        { name: "Black Buck Breeding Centre", location: "Kurukshetra (Pipli)" },
        { name: "Chinkara Breeding Centre", location: "Bhiwani (Kairu)" },
        { name: "Pheasant Breeding Centre", location: "Panchkula (Morni)" },
        { name: "Vulture Conservation and Breeding Centre", location: "Panchkula (Pinjore)" },
        { name: "Peacock and Chinkara Breeding Centre", location: "Rewari (Jhabua)" },
        { name: "Red Jungle Fowl Breeding Centre", location: "Panchkula (Pinjore)" },
        { name: "Central Horse Breeding Centre", location: "Hisar" },
        { name: "Central Sheep Breeding Centre", location: "Hisar" },
        { name: "Central Buffaloes Breeding Centre", location: "Hisar" },
        { name: "Camel Breeding Centre", location: "Sirsa" },
        { name: "Pig Breeding Centre", location: "Hisar" }
    ];

    // Animal Rehabilitation Centres
    const rehabilitationCentres = [
        {
            name: "Deer Park",
            nameHindi: "डीयर पार्क",
            location: "Hisar",
            locationHindi: "हिसार",
            details: "It is situated on Hisar-Dhansu Road of Hisar district. It was established in 1970-71. The area of this park is around 42 acres. Blackbuck, chital, spotted deer and sambar are found in this park.",
            detailsHindi: "यह हिसार जिले के हिसार-धनसू रोड पर स्थित है। इसकी स्थापना 1970-71 में हुई थी। इस पार्क का क्षेत्रफल लगभग 42 एकड़ है। इस पार्क में काला हिरण, चीतल, चित्तीदार हिरण और सांभर पाए जाते हैं।"
        },
        {
            name: "Elephant Rehabilitation Centre",
            nameHindi: "हाथी पुनर्वास केंद्र",
            location: "Yamunanagar",
            locationHindi: "यमुनानगर",
            details: "The Ch. Surinder Singh Elephant Rehabilitation Centre (ERC) is situated at Ban Santour forest of Yamunanagar district. It is a project undertaken by the Haryana Forest Department, Government of Haryana in collaboration with Wildlife SOS. The injured, sick and saved elephants are rehabilitated in this centre.",
            detailsHindi: "चौ. सुरिंदर सिंह हाथी पुनर्वास केंद्र (ERC) यमुनानगर जिले के बन संतौर वन में स्थित है। यह हरियाणा वन विभाग, हरियाणा सरकार द्वारा वाइल्डलाइफ एसओएस के सहयोग से किया गया एक प्रोजेक्ट है। घायल, बीमार और बचाए गए हाथियों का इस केंद्र में पुनर्वास किया जाता है।"
        },
        {
            name: "National Research Centre on Equines (NRCE)",
            nameHindi: "राष्ट्रीय अश्व अनुसंधान केंद्र (NRCE)",
            location: "Hisar",
            locationHindi: "हिसार",
            details: "It was established in Hisar district on 7th January, 1986. In the year 1989, a sub-centre of the National Research Centre on Equines (NRCE) was established in Bikaner of Rajasthan.",
            detailsHindi: "इसकी स्थापना हिसार जिले में 7 जनवरी, 1986 को हुई थी। वर्ष 1989 में, राष्ट्रीय अश्व अनुसंधान केंद्र (NRCE) का एक उप-केंद्र राजस्थान के बीकानेर में स्थापित किया गया था।"
        },
        {
            name: "Jatayu (Vulture) Conservation and Breeding Centre (JCBc)",
            nameHindi: "जटायु (गिद्ध) संरक्षण और प्रजनन केंद्र (JCBc)",
            location: "Pinjore, Panchkula",
            locationHindi: "पिंजौर, पंचकूला",
            details: "It has been established in the year 2001 for the protection of vulture in Pinjore. This is a joint effort of Haryana Forest Department, Bombay Natural History Society and Royal Society (London) to protect the birds. The world's maximum number of vultures are found here. It is the Asia's first vulture breeding centre.",
            detailsHindi: "यह पिंजौर में गिद्धों के संरक्षण के लिए वर्ष 2001 में स्थापित किया गया है। यह पक्षियों की रक्षा के लिए हरियाणा वन विभाग, बॉम्बे नेचुरल हिस्ट्री सोसाइटी और रॉयल सोसाइटी (लंदन) का एक संयुक्त प्रयास है। दुनिया में सबसे अधिक संख्या में गिद्ध यहाँ पाए जाते हैं। यह एशिया का पहला गिद्ध प्रजनन केंद्र है।"
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
                        <PawPrint className="w-4 h-4" />
                        {language === "hindi" ? "राष्ट्रीय उद्यान और वन्यजीव अभयारण्य - हरियाणा सरकार" : "National Parks and Wildlife Sanctuaries - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा के" : "National Parks and Wildlife"} <span className="text-emerald-600 dark:text-emerald-400">{language === "hindi" ? "राष्ट्रीय उद्यान और वन्यजीव अभयारण्य" : "Sanctuaries in Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा के राष्ट्रीय उद्यानों, वन्यजीव अभयारण्यों, संरक्षण रिजर्व, प्रजनन केंद्रों और चिड़ियाघरों की संपूर्ण जानकारी"
                            : "Complete information about National Parks, Wildlife Sanctuaries, Conservation Reserves, Breeding Centres, and Zoos of Haryana"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Landmark className="w-4 h-4 text-emerald-600" />
                            <span>{language === "hindi" ? "राष्ट्रीय उद्यान" : "National Parks"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Trees className="w-4 h-4 text-emerald-600" />
                            <span>{language === "hindi" ? "वन्यजीव अभयारण्य" : "Wildlife Sanctuaries"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Bird className="w-4 h-4 text-emerald-600" />
                            <span>{language === "hindi" ? "प्रजनन केंद्र" : "Breeding Centres"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Building2 className="w-4 h-4 text-emerald-600" />
                            <span>{language === "hindi" ? "चिड़ियाघर" : "Zoos"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-emerald-500/20">
                                <PawPrint className="w-5 h-5 text-emerald-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? overview.titleHindi : overview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? overview.contentHindi : overview.contentEnglish}</p>
                    </div>

                    {/* National Parks Section */}
                    <div className="bg-emerald-500/5 rounded-2xl p-6 md:p-8 border-2 border-emerald-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-emerald-500/30">
                                <Landmark className="w-5 h-5 text-emerald-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-emerald-600">{language === "hindi" ? "राष्ट्रीय उद्यान" : "National Parks in Haryana"}</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">{language === "hindi" ? "राष्ट्रीय उद्यान वे वन हैं जो वनस्पति और वन्यजीवों के संरक्षण के लिए आरक्षित होते हैं।" : "National parks are forests which are reserved for the protection of vegetation and wildlife."}</p>
                        <div className="space-y-6">
                            {nationalParks.map((park, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-5 border">
                                    <h3 className="text-xl font-semibold mb-1 text-emerald-600">{language === "hindi" ? park.nameHindi : park.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-3">{language === "hindi" ? `स्थान: ${park.locationHindi} | क्षेत्रफल: ${park.areaHindi}` : `Location: ${park.location} | Area: ${park.area}`}</p>
                                    <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? park.detailsHindi : park.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wildlife Sanctuaries Section */}
                    <div className="bg-green-500/5 rounded-2xl p-6 md:p-8 border-2 border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-500/30">
                                <Trees className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{language === "hindi" ? "वन्यजीव अभयारण्य" : "Wildlife Sanctuaries in Haryana"}</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">{language === "hindi" ? "हरियाणा के 8 वन्यजीव अभयारण्य लगभग 23441.17 हेक्टेयर भूमि को कवर करते हैं।" : "The 8 Wildlife Sanctuaries in Haryana covers around 23441.17 hectares of land."}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {wildlifeSanctuaries.map((sanctuary, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-green-600">{language === "hindi" ? sanctuary.nameHindi : sanctuary.name}</h3>
                                    <p className="text-xs text-muted-foreground mb-2">{language === "hindi" ? `स्थान: ${sanctuary.locationHindi} | क्षेत्रफल: ${sanctuary.areaHindi}` : `Location: ${sanctuary.location} | Area: ${sanctuary.area}`}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{language === "hindi" ? sanctuary.detailsHindi.substring(0, 200) + "..." : sanctuary.details.substring(0, 200) + "..."}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Asola-Bhatti Special Mention */}
                    <div className="bg-amber-500/5 rounded-2xl p-6 md:p-8 border-2 border-amber-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-500/30">
                                <Mountain className="w-5 h-5 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-amber-600">{language === "hindi" ? "असोला-भट्टी वन्यजीव अभयारण्य" : "Asola-Bhatti Wildlife Sanctuary"}</h3>
                        </div>
                        <div className="bg-card rounded-xl p-4 border">
                            <p className="text-muted-foreground leading-relaxed">{language === "hindi"
                                ? "यह 2782 हेक्टेयर क्षेत्र में फैला है। यह राजस्थान के अलवर में सरिस्का राष्ट्रीय उद्यान से शुरू होता है और हरियाणा के मेवात, फरीदाबाद और गुरुग्राम जिलों में फैला हुआ है। इस अभयारण्य के आसपास के स्थान सूरजकुंड, अनंगपुर बांध, तुगलकाबाद किला, अदीलाबाद के खंडहर, छतरपुर मंदिर आदि हैं। पर्यावरण और वन मंत्रालय ने गुरुग्राम और फरीदाबाद में असोला-भट्टी वन्यजीव अभयारण्य के आसपास 1 किमी क्षेत्र को इको सेंसिटिव ज़ोन घोषित किया है। इस अभयारण्य में स्थानीय और प्रवासी पक्षियों की लगभग 200 प्रजातियाँ पाई जाती हैं।"
                                : "It covers an area of 2782 hectares. It starts from Sariska National Park in Alwar, Rajasthan and spread over Mewat, Faridabad and Gurugram districts of Haryana. Places around this sanctuary are Surajkund, Anangpur dam, Tughlaqabad fort, Adilabad ruins, Chhatarpur temple, etc. This protected area contains one of the last surviving remnants of Delhi Ridge hill range and its semi-arid forest habitat and its dependent wildlife. The Ministry of Environment and Forests has declared the 1 km area around Asola-Bhatti Wildlife Sanctuary in Gurugram and Faridabad as Eco Sensitive Zone. About 200 species of local and migratory birds are found in this sanctuary."}
                            </p>
                        </div>
                    </div>

                    {/* Conservation Reserves Section */}
                    <div className="bg-teal-500/5 rounded-2xl p-6 md:p-8 border-2 border-teal-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-teal-500/30">
                                <History className="w-5 h-5 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-teal-600">{language === "hindi" ? "संरक्षण रिजर्व" : "Conservation Reserves in Haryana"}</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">{language === "hindi" ? "हरियाणा में 2 संरक्षण रिजर्व हैं जो राज्य में लगभग 4872.11 हेक्टेयर भूमि को कवर करते हैं।" : "There are 2 Conservation Reserves in Haryana which covers around 4872.11 hectares of land in the state."}</p>
                        <div className="space-y-4">
                            {conservationReserves.map((reserve, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-teal-600">{language === "hindi" ? reserve.nameHindi : reserve.name}</h3>
                                    <p className="text-xs text-muted-foreground mb-2">{language === "hindi" ? `स्थान: ${reserve.locationHindi} | क्षेत्रफल: ${reserve.areaHindi}` : `Location: ${reserve.location} | Area: ${reserve.area}`}</p>
                                    <p className="text-sm text-muted-foreground">{language === "hindi" ? reserve.detailsHindi : reserve.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Zoos Section */}
                    <div className="bg-blue-500/5 rounded-2xl p-6 md:p-8 border-2 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-500/30">
                                <Building2 className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-600">{language === "hindi" ? "हरियाणा के चिड़ियाघर" : "Zoos of Haryana"}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {zoos.map((zoo, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-blue-600">{language === "hindi" ? zoo.nameHindi : zoo.name}</h3>
                                    <p className="text-xs text-muted-foreground mb-2">{language === "hindi" ? `स्थान: ${zoo.locationHindi} | क्षेत्रफल: ${zoo.areaHindi}` : `Location: ${zoo.location} | Area: ${zoo.area}`}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{language === "hindi" ? zoo.detailsHindi : zoo.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Breeding Centres Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Factory className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "महत्वपूर्ण प्रजनन केंद्र" : "Important Breeding Centres in Haryana"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "केंद्र का नाम" : "Centre Name"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "जिला" : "District"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {breedingCentres.map((centre, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{centre.name}</td>
                                            <td className="border p-2">{centre.location}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Animal Rehabilitation Centres */}
                    <div className="bg-purple-500/5 rounded-2xl p-6 md:p-8 border-2 border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-500/30">
                                <Heart className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-600">{language === "hindi" ? "पशु पुनर्वास, अनुसंधान और संरक्षण केंद्र" : "Animal Rehabilitation, Research and Conservation Centres"}</h2>
                        </div>
                        <div className="space-y-4">
                            {rehabilitationCentres.map((centre, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="text-lg font-semibold text-purple-600">{language === "hindi" ? centre.nameHindi : centre.name}</h3>
                                    <p className="text-xs text-muted-foreground mb-2">{language === "hindi" ? `स्थान: ${centre.locationHindi}` : `Location: ${centre.location}`}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{language === "hindi" ? centre.detailsHindi : centre.details}</p>
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
                        {language === "hindi" ? "हरियाणा वन्यजीव संरक्षण: तथ्य सारांश" : "Haryana Wildlife Conservation: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">33,000+</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "संरक्षित क्षेत्र (हेक्टेयर)" : "Protected Area (Hectares)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "पक्षी प्रजातियाँ" : "Bird Species"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "राष्ट्रीय उद्यान" : "National Parks"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">8</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "वन्यजीव अभयारण्य" : "Wildlife Sanctuaries"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "संरक्षण रिजर्व" : "Conservation Reserves"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">7</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "वन्यजीव प्रजनन केंद्र" : "Wildlife Breeding Centres"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">3</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "चिड़ियाघर" : "Zoos"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">1</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हाथी पुनर्वास केंद्र" : "Elephant Rehabilitation Centre"}</p>
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
                            {language === "hindi" ? "हरियाणा के राष्ट्रीय उद्यानों और" : "Common"} <span className="text-emerald-600">{language === "hindi" ? "वन्यजीव अभयारण्यों के बारे में सामान्य प्रश्न" : "Questions About Haryana's National Parks and Wildlife Sanctuaries"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के राष्ट्रीय उद्यानों, वन्यजीव अभयारण्यों, प्रजनन केंद्रों और चिड़ियाघरों के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's National Parks, Wildlife Sanctuaries, Breeding Centres, and Zoos"}
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
                            {language === "hindi" ? "अपने हरियाणा वन्यजीव संरक्षण के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Wildlife Conservation?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-emerald-600 hover:bg-emerald-700">
                                {language === "hindi" ? "हरियाणा वन्यजीव क्विज़ लें" : "Take Haryana Wildlife Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/forest-resources" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Forest Resources of Haryana
                        </Link>
                        <Link href="/haryana-gk/agriculture" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                            Next Chapter: Agriculture & Animal Husbandry
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा के राष्ट्रीय उद्यान और वन्यजीव अभयारण्य - संपूर्ण संदर्भ" : "National Parks and Wildlife Sanctuaries of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के राष्ट्रीय उद्यानों, वन्यजीव अभयारण्यों, संरक्षण रिजर्व, प्रजनन केंद्रों और चिड़ियाघरों के बारे में व्यापक जानकारी प्रदान करता है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about National Parks, Wildlife Sanctuaries, Conservation Reserves, Breeding Centres, and Zoos of Haryana. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और वन्यजीव अभिलेखों से स्रोतित" : "Information sourced from official Government of Haryana publications and wildlife records"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}

