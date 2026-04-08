"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    History,
    CloudRain,
    Sun,
    Snowflake,
    Wind,
    Droplets,
    Thermometer,
    ChevronDown,
    HelpCircle,
    Cloud,
    Umbrella,
    Mountain,
    ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ClimateOfHaryanaPage() {
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
            questionHindi: "हरियाणा की जलवायु किस प्रकार की है?",
            questionEnglish: "What type of climate does Haryana have?",
            answerHindi: "हरियाणा की जलवायु उपोष्णकटिबंधीय शुष्क महाद्वीपीय जलवायु है। यह समुद्र से दूर स्थित होने के कारण महाद्वीपीय प्रकार की जलवायु वाला राज्य है।",
            answerEnglish: "Haryana has a sub-tropical dry continental climate. Due to its location far from the sea, it has a continental type of climate."
        },
        {
            questionHindi: "हरियाणा का सबसे गर्म जिला कौन सा है?",
            questionEnglish: "Which is the hottest district of Haryana?",
            answerHindi: "हरियाणा का सबसे गर्म जिला हिसार है। यहाँ गर्मियों में तापमान 46°C तक पहुँच जाता है।",
            answerEnglish: "Hisar is the hottest district of Haryana. The temperature here reaches up to 46°C during summers."
        },
        {
            questionHindi: "हरियाणा का चेरापूंजी किसे कहा जाता है?",
            questionEnglish: "Which place is called Cherrapunji of Haryana?",
            answerHindi: "यमुनानगर के छछरौली शहर को अत्यधिक वर्षा के कारण हरियाणा का चेरापूंजी कहा जाता है।",
            answerEnglish: "Chhachhrauli town of Yamunanagar is called Cherrapunji of Haryana due to excessive rainfall."
        },
        {
            questionHindi: "हरियाणा में सबसे अधिक वर्षा कहाँ होती है?",
            questionEnglish: "Where does the highest rainfall occur in Haryana?",
            answerHindi: "हरियाणा के उत्तर-पूर्वी भाग में सबसे अधिक वर्षा होती है। अंबाला राज्य में सबसे अधिक वर्षा प्राप्त करता है।",
            answerEnglish: "The North-Eastern part of Haryana receives the highest rainfall. Ambala receives the highest rainfall in the state."
        },
        {
            questionHindi: "हरियाणा में सबसे कम वर्षा कहाँ होती है?",
            questionEnglish: "Where does the lowest rainfall occur in Haryana?",
            answerHindi: "हरियाणा के दक्षिण-पश्चिमी भाग में सबसे कम वर्षा होती है। सिरसा जिला राज्य में सबसे कम वर्षा प्राप्त करता है।",
            answerEnglish: "The South-Western part of Haryana receives the lowest rainfall. Sirsa district receives the least rainfall in the state."
        },
        {
            questionHindi: "हरियाणा में लू क्या है?",
            questionEnglish: "What is Loo in Haryana?",
            answerHindi: "लू एक गर्म, शुष्क और तेज़ हवा है जो गर्मियों में हरियाणा में चलती है। यह राज्य के दक्षिण और दक्षिण-पश्चिम में चलती है और फसलों को नुकसान पहुँचाती है तथा मनुष्यों में निर्जलीकरण का कारण बनती है।",
            answerEnglish: "Loo is a hot, dry and strong wind that blows in Haryana during summers. It blows in the South and South-West of the state and damages crops and causes dehydration in humans."
        },
        {
            questionHindi: "हरियाणा में कितने प्रतिशत वर्षा दक्षिण-पश्चिम मानसून से होती है?",
            questionEnglish: "What percentage of rainfall in Haryana comes from the South-West monsoon?",
            answerHindi: "हरियाणा में 80% वर्षा जुलाई से सितंबर के महीनों में बंगाल की खाड़ी से आने वाले दक्षिण-पश्चिम मानसून से होती है।",
            answerEnglish: "80% of the rainfall in Haryana occurs from the South-West monsoon coming from the Bay of Bengal in the months of July to September."
        },
        {
            questionHindi: "हरियाणा में शीतकालीन वर्षा को स्थानीय भाषा में क्या कहते हैं?",
            questionEnglish: "What is winter rainfall called in local language in Haryana?",
            answerHindi: "हरियाणा में शीतकालीन वर्षा को स्थानीय भाषा में 'मावठ' कहा जाता है। यह वर्षा रबी फसलों के लिए महत्वपूर्ण होती है।",
            answerEnglish: "Winter rainfall in Haryana is called 'Maavath' in the local language. This rainfall is significant for rabi crops."
        }
    ];

    // Main Climate Section
    const climateOverview = {
        titleHindi: "हरियाणा की जलवायु",
        titleEnglish: "Climate of Haryana",
        contentHindi: "किसी क्षेत्र की दीर्घकालिक मौसम स्थितियों को जलवायु कहते हैं। किसी भी राज्य की जलवायु समुद्र से दूरी, अक्षांशीय स्थिति, उत्तर-पश्चिमी विक्षोभ और दक्षिण-पश्चिम मानसून द्वारा निर्धारित होती है। भारत में उष्णकटिबंधीय मानसून प्रकार की जलवायु होती है। इसलिए, हरियाणा की जलवायु भी मानसूनी जलवायु के अंतर्गत आती है। हरियाणा राज्य समुद्र से दूर स्थित होने के कारण उपोष्णकटिबंधीय शुष्क महाद्वीपीय जलवायु वाला राज्य है। महाद्वीपीय प्रकार की जलवायु के कारण राज्य की जलवायु में अधिक भिन्नता होती है। इसलिए, वर्षा कम होती है और वार्षिक तापमान अधिक होता है। हरियाणा का उत्तरी क्षेत्र, जो हिमाचल प्रदेश की सीमा से लगता है, उप-आर्द्र जलवायु वाला है और राजस्थान की सीमा से लगने वाला दक्षिणी क्षेत्र शुष्क जलवायु वाला है। हरियाणा की जलवायु को राजस्थान के पूर्वी भाग की अर्ध-शुष्क जलवायु और गंगा के मैदानों की आर्द्र जलवायु के बीच की जलवायु भी कहा जा सकता है। हरियाणा की जलवायु में विविधता के कारण तापमान और वर्षा में काफी अंतर होता है। इसलिए, गर्मियों में वर्षा की कमी, उच्च तापमान और वाष्पीकरण तथा सर्दियों में कम तापमान होता है।",
        contentEnglish: "The long-term weather conditions of an area are called climate. The climate of any state is determined by the distance from the sea, the latitudinal position, the North-Western disturbance and the South-West monsoon. India has a tropical monsoon type of climate. Therefore, the climate of Haryana also falls under the monsoon climate. The state of Haryana has a sub-tropical dry continental climate due to its location far from the sea. Due to continental type of climate, there is more variation in the climate of the state. Hence, rainfall is less and annual temperature is high. The Northern region of Haryana, bordering Himachal Pradesh, has sub-humid climate and the Southern region bordering Rajasthan has dry climate. The climate of Haryana can also be called as the climate between the semi-arid climate of the Eastern part of Rajasthan and the humid climate of the Ganga Plains. Due to the diversity in the climate of Haryana, there is a considerable difference in temperature and rainfall. Hence, there is absence of rain, high temperature and evaporation in summer and low temperature in winter."
    };

    // Classification of Climate - Koppen
    const climateClassification = {
        titleHindi: "हरियाणा में जलवायु का वर्गीकरण",
        titleEnglish: "Classification of Climate in Haryana",
        contentHindi: "व्लादिमीर कोपेन के जलवायु वर्गीकरण के अनुसार, हरियाणा में मुख्य रूप से दो प्रकार की जलवायु पाई जाती है।\n\n(i) आर्द्र उपोष्णकटिबंधीय जलवायु (Caw) - इस प्रकार की जलवायु का विस्तार शिवालिक श्रेणी के दक्षिण में फैली 72 किमी चौड़ी पट्टी में पाया जाता है। इस क्षेत्र में औसत सर्दियों का तापमान 18°C से कम पाया जाता है और जनवरी का तापमान 3°C-4°C तक पहुँच जाता है। शिवालिक श्रेणी के उत्तरी भाग का तापमान रात में हिमांक बिंदु तक पहुँच जाता है। इस प्रकार, शिवालिक की जलवायु का राज्य की जलवायु पर प्रभाव पड़ता है।\n\n(ii) गर्म स्टेपी जलवायु (Bsh) - इस प्रकार की जलवायु राज्य के अधिकांश भागों में पाई जाती है। यह जलवायु क्षेत्र बंगाल की खाड़ी से आने वाले दक्षिण-पश्चिम मानसून से वर्षा प्राप्त करता है। इस जलवायु क्षेत्र में अधिक वर्षा नहीं होती है, जिसके कारण गर्मियों में राज्य का तापमान बहुत अधिक होता है और बहुत अधिक वाष्पीकरण होता है।",
        contentEnglish: "According to the climatic classification of Wladimir Koppen, Haryana has mainly two types of climate.\n\n(i) Humid Subtropical Climate (Caw) - The extension of this type of climate is found in a 72 km wide strip spread in the South of the Shivalik range. The average winter temperature in this region is found to be less than 18°C and the January temperature reaches 3°C-4°C. The temperature of Northern part of Shivalik range reaches to freezing point at night. Thus, the climate of Shivalik has an impact on the climate of the state.\n\n(ii) Hot Steppe Climate (Bsh) - This type of climate is found in most parts of the state. This climatic region receives rainfall from the South-West monsoon coming from the Bay of Bengal. This climatic region does not have excess rainfall, due to which the temperature of the state in summer is very high and there is a lot of evaporation."
    };

    // Climatic Features
    const climaticFeatures = {
        titleHindi: "हरियाणा की जलवायु संबंधी विशेषताएँ",
        titleEnglish: "Climatic Features of Haryana",
        contentHindi: "भारत में, 21 मार्च के बाद, सूर्य उत्तर की ओर खिसकता है और 21 जून को यह कर्क रेखा के पास होता है। हरियाणा कर्क रेखा के उत्तर में स्थित है, जिसके कारण उच्च तापमान के प्रभाव से निम्न दबाव का केंद्र उत्तर-पश्चिम भारत में बनता है। हरियाणा भी इससे प्रभावित होता है, क्योंकि यह उत्तर-पश्चिम भारत का एक हिस्सा है। 21 सितंबर के बाद, सूर्य के दक्षिण की ओर खिसकने के कारण तापमान गिरना शुरू हो जाता है, जो हरियाणा को भी प्रभावित करता है।\n\nउत्तर-पश्चिमी विक्षोभ और दक्षिण-पश्चिम मानसून का राज्य की महाद्वीपीय स्थिति पर सीधा प्रभाव पड़ता है। जुलाई से, जब 998 मिलीबार की समदाब रेखा हरियाणा के पश्चिमी भाग से गुजरती है, तो हवाओं की दिशा पश्चिम और दक्षिण-पश्चिम से उत्तर-पूर्व की ओर हो जाती है। जनवरी में, जब 1018 मिलीबार की समदाब रेखा राज्य के पूर्वी भाग को पार करती है, तो हवाओं की दिशा उत्तर और उत्तर-पश्चिम की ओर होती है। राज्य में दक्षिण से उत्तर तक ऐसी विविधतापूर्ण शुष्क, अर्ध-शुष्क, उप-आर्द्र उष्णकटिबंधीय जलवायु पाई जाती है।",
        contentEnglish: "In India, after 21st March, the Sun shifts Northwards and on 21st June it is near the Tropic of Cancer. Haryana lies North of the Tropic of Cancer, due to which the center of low pressure is made by the effect of high temperature, in North-West India. Haryana is also affected by this, as it is a part of North-West India. After 21st September, the temperature starts falling due to the Southward shift of the Sun, which also affects Haryana.\n\nNorth-West disturbance and South-West monsoon have a direct effect on the continental condition of the state. From July, when the isobars of 998 millibars passes through the Western part of Haryana, the direction of the winds turns from West and South-West to North-East. In January, when the isobar line of 1018 millibars crosses the Eastern part of the state, then the direction of winds is towards North and North-West. Such a diversified dry, semi-arid, sub-humid tropical climate is found from South to North in the state."
    };

    // Temperature Section
    const temperatureSection = {
        titleHindi: "हरियाणा में तापमान",
        titleEnglish: "Temperature in Haryana",
        contentHindi: "राज्य में मार्च से जून तक तापमान तेजी से बढ़ता है। जून के महीने में, तापमान में भिन्नताएँ होती हैं, जैसे उत्तरी भागों में औसत तापमान अधिक पाया जाता है और राज्य के दक्षिण-पूर्वी भागों का तापमान कम पाया जाता है। कभी-कभी मई-जून के महीने में राज्य के कुछ जिलों में दैनिक तापमान 49°C तक भी पहुँच जाता है और रेगिस्तान प्रभावित क्षेत्रों में 50°C तक पहुँच जाता है। तापमान की तीव्रता राज्य के दक्षिण-पश्चिमी भागों में अधिक प्रभावी होती है। जून के महीने में मानसून के आगमन के साथ, राज्य का तापमान अचानक गिरना शुरू हो जाता है और जुलाई का तापमान बहुत कम हो जाता है। जब सितंबर-अक्टूबर में आकाश साफ हो जाता है, तो तापमान में हल्की वृद्धि महसूस होती है। इसे गर्मियों का दूसरा मौसम कहा जाता है। अक्टूबर से जनवरी तक, हरियाणा का तापमान लगातार गिरता रहता है। राज्य के उत्तरी भागों में, सर्दी और गर्मी के तापमान (वार्षिक तापमान) में बहुत अंतर होता है, जो महाद्वीपीयता की विशेषता है। राज्य के दक्षिणी भाग में तापमान की वार्षिक सीमा कम होती है। इसलिए, इसे महासागरीय प्रभाव और भूमध्य रेखा से निकटता के कारण उच्च तापमान वाला कहा जाता है। राज्य के कई स्थानों पर, मई में दैनिक तापमान अधिक होता है। जनवरी के महीने में, उत्तरी शिवालिक क्षेत्र में तापमान 0°C से नीचे चला जाता है।",
        contentEnglish: "The temperature in the state rises sharply from March to June. In the month of June, there are variations in temperature, such as the average temperature is found higher in the Northern parts and the temperature of the South-Eastern parts of the state is found lower. Sometimes in the month of May-June, the daily temperature in some districts of the state even reaches 49°C and 50°C in the desert affected areas. The intensity of temperature is more effective in the South-Western parts of the state. With the arrival of monsoon in the month of June, the temperature of the state suddenly starts falling and the temperature of July became very low. When the sky became clear in September-October, then a slight increase in temperature is felt. It is known as the Second Season of summer. From October to January, Haryana's temperature keeps falling continuously. In the Northern parts of the state, there is much difference between the winter and summer temperatures (annual temperature), which is the feature of continentality. The annual range of temperature in the Southern part of the state is low. Hence, it is said to be of high temperature due to ocean effect and proximity to the equator. In many places of the state, the daily temperature is higher in May. In the month of January, the temperature in the Northern Shivalik region reaches below 0°C."
    };

    // Three Major Seasons
    const summerSeason = {
        titleHindi: "1. ग्रीष्म ऋतु (Summer Season)",
        titleEnglish: "1. Summer Season",
        contentHindi: "राज्य में ग्रीष्म ऋतु अप्रैल से जून के अंत तक रहती है। इस ऋतु में औसत तापमान लगभग 35°C होता है। राज्य में सबसे अधिक तापमान केवल मई-जून में दर्ज किया जाता है। इस ऋतु में राज्य में अंबाला में 40°C और हिसार में 46°C तापमान दर्ज किया जाता है। हिसार राज्य का सबसे गर्म जिला है। यह ऋतु आम तौर पर शुष्क होती है अर्थात आर्द्रता बहुत कम होती है। इस ऋतु में उच्च तापमान के कारण, राज्य में धूल भरी आंधी या लू चलती है, जो गर्म, शुष्क और तेज़ हवा होती है। यह आंधी राज्य के दक्षिण और दक्षिण-पश्चिम में चलती है। लू आम तौर पर गर्मियों में उत्तर भारत में चलती है। लू या आंधी फसलों की नमी को सोख लेती है, जिससे फसलों को नुकसान होता है। यह आंधी मानव स्वास्थ्य को भी प्रभावित करती है क्योंकि यह निर्जलीकरण (शरीर में पानी की कमी) और बुखार का कारण बनती है।",
        contentEnglish: "The summer season in the state starts from April to the end of June. The average temperature in this season is around 35°C. The highest temperature in the state is recorded only in May-June. This season records a temperature of 40°C in Ambala and 46°C in Hisar in the state. Hisar is the hottest district of the state. This season is generally dry i.e. humidity is very low. Due to high temperature in this season, dust storm or Loo blows in the state, which is hot, dry and strong wind. This storm blows in the South and South-West of the state. Loo normally blows in North India during summers. Loo or storm absorbs the moisture of the crops, causing damaging of crops. This storm also affects human health as it causes dehydration (lack of water in the body) and fever."
    };

    const winterSeason = {
        titleHindi: "2. शीत ऋतु (Winter Season)",
        titleEnglish: "2. Winter Season",
        contentHindi: "राज्य में शीत ऋतु मध्य सितंबर से मार्च तक रहती है। इस ऋतु में राज्य का औसत तापमान सर्दियों में लगभग 12°C से 14°C तक रहता है और सबसे कम तापमान दिसंबर-जनवरी के महीनों में (3°C से 4°C) रहता है। राज्य के दक्षिण-पश्चिमी भाग में शुष्क मौसम पाया जाता है। महेंद्रगढ़ जिला इसी भाग में स्थित है। इस मौसम के दौरान राज्य में अंबाला में लगभग 12.8°C और हिसार में लगभग 13.6°C तापमान दर्ज किया जाता है।",
        contentEnglish: "The winter season in the state lasts from mid-September to March. The average temperature of the state in this season ranges from about 12°C to 14°C in the winter and the lowest temperature in the months of December-January (from 3°C to 4°C). The dry season is found in the South-Western part of the state. Mahendragarh district lies in this part. During this season Ambala records about 12.8°C and Hisar records about 13.6°C temperature in the state."
    };

    const rainySeason = {
        titleHindi: "3. वर्षा ऋतु (Rainy Season)",
        titleEnglish: "3. Rainy Season",
        contentHindi: "राज्य में वर्षा ऋतु जुलाई की शुरुआत से मध्य सितंबर तक शुरू होती है। हरियाणा कम वर्षा वाले राज्यों में आता है। राज्य में औसत वर्षा 40 से 60 सेमी (400 से 600 मिमी) के बीच होती है। राज्य में वर्षा में अंतर इसकी भौगोलिक स्थिति में अंतर के कारण होता है। वर्षा ऋतु के दौरान वर्षा, आर्द्रता और धूप की कमी में अंतर होता है, जिसके कारण तापमान गिरना शुरू हो जाता है। जुलाई और अगस्त के महीनों में तापमान में पर्याप्त अंतर देखा जाता है।\n\nराज्य में शिवालिक की तलहटी राज्य के अन्य क्षेत्रों की तुलना में अधिक वर्षा प्राप्त करती है। उदाहरण के लिए, राजस्थान की सीमा के साथ दक्षिण-पश्चिमी भाग के जिलों में 30 सेमी से कम वर्षा होती है, जबकि शिवालिक क्षेत्र में 110 सेमी वर्षा होती है।\n\nराज्य में वर्षा अनियमित, अनियत और असमान है। हरियाणा में वर्षा मुख्य रूप से दो मौसमों में होती है। पहला जून से सितंबर के महीनों में भारतीय मानसून के दौरान और दूसरा दिसंबर से फरवरी तक सर्दियों के मौसम में।\n\nराज्य में 80% वर्षा जुलाई से सितंबर के महीनों में बंगाल की खाड़ी से आने वाले दक्षिण-पश्चिम मानसून से होती है। राज्य में 10-15% वर्षा जनवरी-मार्च (सर्दियों) के बरसात के महीनों में फारस की खाड़ी से आने वाले पश्चिमी विक्षोभ के कारण होती है। इसे स्थानीय भाषा में मावठ कहा जाता है। शीतकालीन वर्षा रबी फसलों के लिए महत्वपूर्ण होती है।\n\nराज्य का उत्तर-पूर्वी भाग सबसे अधिक वर्षा प्राप्त करता है। यमुनानगर के छछरौली शहर को अत्यधिक वर्षा के कारण हरियाणा का चेरापूंजी कहा जाता है।\n\nराज्य में सबसे अधिक औसत वर्षा वाले जिले अंबाला, यमुनानगर, कुरुक्षेत्र, कैथल, करनाल, जींद और सोनीपत हैं। राज्य में अंबाला सबसे अधिक वर्षा प्राप्त करता है। यह राज्य के उत्तर-पूर्व में स्थित है। यह शिवालिक की पहाड़ियों से घिरा है। राज्य के दक्षिण-पश्चिमी भाग में सबसे कम वर्षा (लगभग 25-28 सेमी) होती है। राज्य में सबसे कम वार्षिक वर्षा वाले जिले सिरसा, हिसार, भिवानी, रेवाड़ी, रोहतक, फरीदाबाद, गुरुग्राम और महेंद्रगढ़ हैं। राज्य का सिरसा जिला सबसे कम वर्षा प्राप्त करता है।",
        contentEnglish: "The rainy season in the state starts from the beginning of July to mid-September. Haryana comes under the states with low rainfall. The average rainfall in the state ranges from 40 to 60 cm (400 to 600 mm). The difference in rainfall in the state is due to the difference in its geographical location. There is a difference in rainfall, humidity and lack of sunshine during the rainy season, due to which the temperature starts falling. Substantial difference in temperature is observed in the months of July and August.\n\nThe foothills of Shivalik in the state receive more rainfall than other regions of the state. For example, districts in the South-Western part along the border of Rajasthan receive less than 30 cm of rainfall, while the Shivalik region receives 110 cm of rainfall.\n\nRainfall in the state is irregular, erratic and uneven. Rainfall in Haryana occurs mainly in two seasons. The first is during the Indian monsoon period in the months of June to September and the second in the winter season from December to February.\n\n80% of the rainfall in the state occurs from the South-West monsoon coming from the Bay of Bengal in the months of July to September. 10-15% rainfall in the state occurs in the rainy months of January-March (winter) due to the Western Disturbance coming from the Persian Gulf. It is called Maavath in the local language. Winter rains are significant for rabi crops.\n\nNorth-Eastern part of the state receives highest rainfall. Chhachhrauli town of Yamunanagar is called Cherrapunji of Haryana due to excessive rainfall.\n\nThe districts with highest average rainfall in the state are Ambala, Yamunanagar, Kurukshetra, Kaithal, Karnal, Jind and Sonipat. Ambala in the state receives the highest rainfall. It is located in the North-East of the state. It is surrounded by hills of Shivalik. The South-Western part of the state receives the least rainfall (about 25-28 cm). The districts of the state with lowest annual rainfall are Sirsa, Hisar, Bhiwani, Rewari, Rohtak, Faridabad, Gurugram and Mahendragarh. Sirsa district of the state receives the least rainfall."
    };

    // Distribution of Rainfall
    const easternDivision = {
        titleHindi: "1. पूर्वी प्रभाग (Eastern Division)",
        titleEnglish: "1. Eastern Division",
        contentHindi: "इस प्रभाग में पंचकुला, अंबाला, यमुनानगर, कुरुक्षेत्र, करनाल, कैथल, पानीपत, सोनीपत, फरीदाबाद, मेवात और पलवल, साथ ही जींद, रोहतक, झज्जर और गुरुग्राम के कुछ हिस्से शामिल हैं। इस प्रभाग में राज्य के कुल भूमि क्षेत्र का लगभग 49% भाग शामिल है। इस प्रभाग को अत्यधिक नमी वाली भूमि कहा जाता है। इस प्रभाग में औसत वर्षा 500 से 1100 मिमी के बीच है। इस प्रभाग में कुल वर्षा का 75-80% से अधिक जुलाई से सितंबर के महीने में होता है। शेष, 10% वर्षा गर्मियों में और 10-15% वर्षा सर्दियों में होती है। इस प्रभाग में, एक वर्ष में 30 दिनों के लिए औसत वर्षा लगभग 20-30 मिमी दर्ज की गई है। पूर्वी क्षेत्र में पश्चिमी विक्षोभ से दैनिक औसत वर्षा की मात्रा लगभग 8-14 मिमी दर्ज की गई है, जो क्रमशः दक्षिण-पश्चिमी क्षेत्रों से उत्तर-पूर्वी क्षेत्रों तक दर्ज की गई है। इस क्षेत्र में सामान्य तापमान लगभग 20°C रहता है। मई-जून के महीने में, सामान्य तापमान 40°C से अधिक पाया जाता है। इसलिए, इस क्षेत्र में मई-जून के महीने गर्म होते हैं और दिसंबर-जनवरी के महीने ठंडे होते हैं।",
        contentEnglish: "This division include Panchkula, Ambala, Yamunanagar, Kurukshetra, Karnal, Kaithal, Panipat, Sonipat, Faridabad, Mewat and Palwal, along with some parts of Jind, Rohtak, Jhajjar and Gurugram. This division includes approximately 49% of the total land area of the state. This division is called highly moisture land. The average rainfall in this division is between 500 to 1100 mm. More than 75-80% of the total rainfall in this division occurs in the month from July to September. The remaining, 10% rainfall in summer and 10-15% rainfall occurs in winter. In this division, the average rainfall has been recorded around 20-30 mm for 30 days in a year. The daily average amount of rainfall from the Western Disturbance in the Eastern region has been recorded around 8-14 mm, which has been recorded from South-Western regions to North-Eastern regions, respectively. The normal temperature in this region remains around 20°C. In the month of May-June, the normal temperature is found more than 40°C. Therefore, the months of May-June are warm in this region and the months of December-January are cold."
    };

    const westernDivision = {
        titleHindi: "2. पश्चिमी प्रभाग (Western Division)",
        titleEnglish: "2. Western Division",
        contentHindi: "हरियाणा के पश्चिमी प्रभाग में, सिरसा, हिसार, फतेहाबाद, भिवानी, महेंद्रगढ़, रेवाड़ी के जिले और साथ ही जींद, झज्जर, रोहतक और गुरुग्राम के कुछ हिस्से भी शामिल हैं। महेंद्रगढ़ हरियाणा राज्य का सबसे शुष्क क्षेत्र है। यह प्रभाग वर्ष में कुल वर्षा का 80-85% जुलाई-सितंबर के महीनों में दक्षिण-पश्चिम मानसून से प्राप्त करता है। अक्टूबर से अप्रैल के मध्य तक की अवधि आम तौर पर शुष्क होती है। राज्य का दक्षिण-पश्चिमी भाग आम तौर पर शुष्क होता है, जहाँ सामान्य वर्षा 400 मिमी से भी कम होती है। पश्चिमी प्रभाग के गुरुग्राम और महेंद्रगढ़ जिलों के क्षेत्र अर्ध-शुष्क क्षेत्रों में शामिल हैं, जहाँ औसत वर्षा 400-500 मिमी तक होती है। भिवानी जिले के लोहार उपखंड में सामान्य वार्षिक वर्षा 300 मिमी से कम दर्ज की गई है।",
        contentEnglish: "In the Western Division of Haryana, districts of Sirsa, Hisar, Fatehabad, Bhiwani, Mahendragarh, Rewari along with some parts of Jind, Jhajjar, Rohtak and Gurugram are also included. Mahendragarh is the driest region of the state of Haryana. This division receives 80-85% of the total rainfall in the year from the South-West monsoon in the months of July-September. The period from October to the middle of April is usually dry. The South-Western part of the state is generally dry, where normal rainfall is also less than 400 mm. The tracts of Gurugram and Mahendragarh districts of Western division are included in semi-arid regions, with average rainfall up to 400-500 mm. The Lohar subdivision of Bhiwani district has recorded normal annual rainfall less than 300 mm."
    };

    // Variability of Rainfall
    const rainfallVariability = {
        titleHindi: "वर्षा की परिवर्तनशीलता",
        titleEnglish: "Variability of Rainfall",
        contentHindi: "औसत से अधिक या औसत से कम वर्षा की मात्रा को 'वर्षा की परिवर्तनशीलता' कहा जाता है। इसे औसत वर्षा की दोनों दिशाओं में मापा जाता है। जिन क्षेत्रों में वर्षा की परिवर्तनशीलता कम होती है, वहाँ फसलों के लिए पर्याप्त पानी उपलब्ध होता है और जहाँ उच्च परिवर्तनशीलता होती है, वहाँ सिंचाई के साधनों के बिना कृषि गतिविधियाँ करना मुश्किल हो जाता है। हरियाणा में, वर्षा की परिवर्तनशीलता उत्तर-पश्चिम से दक्षिण-पूर्व की दिशा में बढ़ती हुई देखी जाती है। इस प्रभाव के कारण, राज्य का दक्षिणी क्षेत्र सूखे से प्रभावित होता है। जुलाई से सितंबर में 80% वर्षा के कारण राज्य में बार-बार बाढ़ आती है। इसलिए, राज्य में वर्षा की परिवर्तनशीलता के कारण बाढ़ और सूखा दोनों स्थितियाँ पाई जाती हैं।",
        contentEnglish: "The amount of rainfall exceeding the average or less than the average is called 'variability of rainfall'. It is measured in both directions of average rainfall. In areas where the variability of rainfall is less, sufficient water is available for crops and where there is high variability, it becomes difficult to do agricultural activities without means of irrigation. In Haryana, the variability of rainfall is seen increasing in the direction of North-West to South-East. Due to this effect, the Southern region of the state is affected by drought. The state receives frequent floods due to 80% rainfall in July to September. Therefore, due to the variability of rainfall in the state, both flood and drought conditions are found."
    };

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
                        <Cloud className="w-4 h-4" />
                        {language === "hindi" ? "जलवायु संरचना - हरियाणा सरकार" : "Climate Structure - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा की" : "Climate of"} <span className="text-primary">{language === "hindi" ? "जलवायु" : "Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा की जलवायु की संपूर्ण जानकारी - तापमान, वर्षा, ऋतुएँ, जलवायु वर्गीकरण और वर्षा वितरण"
                            : "Complete information about the climate of Haryana - temperature, rainfall, seasons, climate classification, and rainfall distribution"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Thermometer className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "उपोष्णकटिबंधीय शुष्क महाद्वीपीय" : "Sub-tropical Dry Continental"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Umbrella className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "औसत वर्षा: 40-60 सेमी" : "Avg Rainfall: 40-60 cm"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Sun className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "सबसे गर्म: हिसार (46°C)" : "Hottest: Hisar (46°C)"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Snowflake className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "सबसे ठंडा: शिवालिक (0°C से नीचे)" : "Coldest: Shivalik (Below 0°C)"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Climate Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Cloud className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? climateOverview.titleHindi : climateOverview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? climateOverview.contentHindi : climateOverview.contentEnglish}</p>
                    </div>

                    {/* Climate Classification - Koppen */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Thermometer className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? climateClassification.titleHindi : climateClassification.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? climateClassification.contentHindi : climateClassification.contentEnglish}</div>
                    </div>

                    {/* Climatic Features */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Wind className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? climaticFeatures.titleHindi : climaticFeatures.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? climaticFeatures.contentHindi : climaticFeatures.contentEnglish}</p>
                    </div>

                    {/* Temperature Section */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Thermometer className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? temperatureSection.titleHindi : temperatureSection.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? temperatureSection.contentHindi : temperatureSection.contentEnglish}</p>
                    </div>

                    {/* Three Major Seasons */}
                    <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/30">
                                <CloudRain className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary">{language === "hindi" ? "हरियाणा के प्रमुख ऋतु" : "Major Seasons of Haryana"}</h2>
                        </div>
                        <div className="space-y-6">
                            {/* Summer Season */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-xl font-semibold mb-3 text-orange-500 flex items-center gap-2">
                                    <Sun className="w-5 h-5" />
                                    {language === "hindi" ? summerSeason.titleHindi : summerSeason.titleEnglish}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? summerSeason.contentHindi : summerSeason.contentEnglish}</p>
                            </div>

                            {/* Winter Season */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-xl font-semibold mb-3 text-blue-500 flex items-center gap-2">
                                    <Snowflake className="w-5 h-5" />
                                    {language === "hindi" ? winterSeason.titleHindi : winterSeason.titleEnglish}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? winterSeason.contentHindi : winterSeason.contentEnglish}</p>
                            </div>

                            {/* Rainy Season */}
                            <div className="bg-card rounded-xl p-5 border">
                                <h3 className="text-xl font-semibold mb-3 text-cyan-500 flex items-center gap-2">
                                    <Droplets className="w-5 h-5" />
                                    {language === "hindi" ? rainySeason.titleHindi : rainySeason.titleEnglish}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? rainySeason.contentHindi : rainySeason.contentEnglish}</p>
                            </div>
                        </div>
                    </div>

                    {/* Distribution of Rainfall */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Droplets className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा में वर्षा का वितरण" : "Distribution of Rainfall in Haryana"}</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-muted/30 rounded-xl p-5">
                                <h3 className="text-lg font-semibold mb-2 text-green-600">{language === "hindi" ? easternDivision.titleHindi : easternDivision.titleEnglish}</h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? easternDivision.contentHindi : easternDivision.contentEnglish}</p>
                            </div>
                            <div className="bg-muted/30 rounded-xl p-5">
                                <h3 className="text-lg font-semibold mb-2 text-amber-600">{language === "hindi" ? westernDivision.titleHindi : westernDivision.titleEnglish}</h3>
                                <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? westernDivision.contentHindi : westernDivision.contentEnglish}</p>
                            </div>
                        </div>
                    </div>

                    {/* Variability of Rainfall */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <CloudRain className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? rainfallVariability.titleHindi : rainfallVariability.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? rainfallVariability.contentHindi : rainfallVariability.contentEnglish}</p>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा जलवायु: तथ्य सारांश" : "Haryana Climate: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">35°C</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "ग्रीष्म ऋतु औसत तापमान" : "Summer Avg Temperature"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">12-14°C</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "शीत ऋतु औसत तापमान" : "Winter Avg Temperature"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">40-60 सेमी</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "औसत वार्षिक वर्षा" : "Average Annual Rainfall"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">80%</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "दक्षिण-पश्चिम मानसून से वर्षा" : "Rainfall from SW Monsoon"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">46°C</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हिसार (सबसे गर्म जिला)" : "Hisar (Hottest District)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">110 सेमी</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "शिवालिक क्षेत्र में वर्षा" : "Rainfall in Shivalik Region"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">25-28 सेमी</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "दक्षिण-पश्चिमी भाग में वर्षा" : "Rainfall in SW Part"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">छछरौली</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "हरियाणा का चेरापूंजी" : "Cherrapunji of Haryana"}</p>
                        </div>
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
                            {language === "hindi" ? "हरियाणा की जलवायु के बारे में" : "Common"} <span className="text-primary">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Haryana Climate"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा की जलवायु, तापमान, वर्षा, ऋतुओं और जलवायु वर्गीकरण के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's climate, temperature, rainfall, seasons, and climate classification"}
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
                            {language === "hindi" ? "अपने हरियाणा जलवायु के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Climate of Haryana?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer">
                                {language === "hindi" ? "हरियाणा जलवायु क्विज़ लें" : "Take Haryana Climate Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/geographical-structure" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Haryana Geographical Structure
                        </Link>
                        <Link href="/haryana-gk/soil-resources" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                            Next Chapter: Soil Resources of Haryana
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा की जलवायु - संपूर्ण संदर्भ" : "Climate of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की जलवायु के बारे में व्यापक जानकारी प्रदान करता है जिसमें तापमान, वर्षा, ऋतुएँ, जलवायु वर्गीकरण, वर्षा वितरण और वर्षा की परिवर्तनशीलता शामिल है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about the climate of Haryana including temperature, rainfall, seasons, climate classification, rainfall distribution, and variability of rainfall. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK and Climate."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और जलवायु अभिलेखों से स्रोतित" : "Information sourced from official Government of Haryana publications and climate records"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}