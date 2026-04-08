"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    History,
    Sword,
    Crown,
    Landmark,
    Crosshair,
    ChevronDown,
    HelpCircle,
    ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MedievalHistoryOfHaryanaPage() {
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
            questionHindi: "महमूद ग़ज़नवी ने हरियाणा पर पहली बार कब आक्रमण किया था?",
            questionEnglish: "When did Mahmud of Ghazni first attack Haryana?",
            answerHindi: "महमूद ग़ज़नवी ने 1009 ईस्वी में थानेसर पर आक्रमण किया था। यह उसका छठा आक्रमण था और हरियाणा क्षेत्र पर पहला हमला था।",
            answerEnglish: "Mahmud of Ghazni attacked Thanesar in 1009 AD. This was his sixth invasion and the first attack on the Haryana region."
        },
        {
            questionHindi: "तराइन का प्रथम युद्ध कब और किसके बीच हुआ था?",
            questionEnglish: "When and between whom was the First Battle of Tarain fought?",
            answerHindi: "तराइन का प्रथम युद्ध 1191 ईस्वी में पृथ्वीराज चौहान और मुहम्मद ग़ोरी के बीच हरियाणा के तराओरी (करनाल) में हुआ था, जिसमें पृथ्वीराज चौहान विजयी हुए।",
            answerEnglish: "The First Battle of Tarain was fought in 1191 CE between Prithviraj Chauhan and Muhammad Ghori at Taraori (Karnal) in Haryana, in which Prithviraj Chauhan was victorious."
        },
        {
            questionHindi: "रज़िया सुल्तान की मज़ार कहाँ स्थित है?",
            questionEnglish: "Where is the tomb of Razia Sultan located?",
            answerHindi: "रज़िया सुल्तान और उनके पति अल्तूनिया की मज़ार हरियाणा के कैथल में स्थित है। यह दक्षिण एशिया में पहला महिला स्मारक है।",
            answerEnglish: "The tomb of Razia Sultan and her husband Altunia is located in Kaithal, Haryana. It is the first female monument in South Asia."
        },
        {
            questionHindi: "फिरोज शाह तुगलक ने हरियाणा में कौन से शहर बसाए?",
            questionEnglish: "Which cities did Firoz Shah Tughlaq establish in Haryana?",
            answerHindi: "फिरोज शाह तुगलक ने हिसार (हिसार-ए-फिरोजा), फतेहाबाद, फिरोजाबाद हरनी खेड़ा, फिरोजपुर और फरीदाबाद शहर बसाए।",
            answerEnglish: "Firoz Shah Tughlaq established the cities of Hisar (Hisar-e-Firoza), Fatehabad, Firozabad Harni Kheda, Firozpur and Faridabad."
        },
        {
            questionHindi: "पानीपत का तीसरा युद्ध कब हुआ था?",
            questionEnglish: "When was the Third Battle of Panipat fought?",
            answerHindi: "पानीपत का तीसरा युद्ध 14 जनवरी, 1761 को अहमद शाह अब्दाली और मराठा सेनाओं के बीच हुआ था। इस युद्ध में मराठों की हार हुई थी।",
            answerEnglish: "The Third Battle of Panipat was fought on 14th January, 1761 between Ahmad Shah Abdali and the Maratha forces. The Marathas were defeated in this battle."
        },
        {
            questionHindi: "बल्लभगढ़ रियासत की स्थापना किसने की थी?",
            questionEnglish: "Who established the Ballabhgarh principality?",
            answerHindi: "बल्लभगढ़ रियासत की स्थापना बल्लभ सिंह ने की थी। उन्होंने बल्लभगढ़ किले का निर्माण करवाया और इसे अपनी रियासत की राजधानी बनाया।",
            answerEnglish: "The Ballabhgarh principality was established by Ballabh Singh. He built the Ballabhgarh Fort and made it the capital of his principality."
        },
        {
            questionHindi: "जॉर्ज थॉमस को हरियाणा में किस नाम से जाना जाता था?",
            questionEnglish: "What was George Thomas known as in Haryana?",
            answerHindi: "जॉर्ज थॉमस को हरियाणा में 'जहाजी साहब' के नाम से जाना जाता था। वह एक आयरिश किराए का सैनिक था जिसने हांसी को अपनी राजधानी बनाया था।",
            answerEnglish: "George Thomas was known as 'Jahazi Sahib' in Haryana. He was an Irish mercenary who made Hansi his capital."
        },
        {
            questionHindi: "गुलाम वंश की स्थापना किसने की थी?",
            questionEnglish: "Who founded the Slave Dynasty?",
            answerHindi: "गुलाम वंश की स्थापना 1206 ईस्वी में कुतुब-उद-दीन ऐबक ने की थी, जो मुहम्मद ग़ोरी का गुलाम था।",
            answerEnglish: "The Slave Dynasty was founded in 1206 AD by Qutb-ud-din Aibak, a slave of Muhammad Ghori."
        }
    ];

    // Turk Invasion Section
    const turkInvasion = {
        titleHindi: "तुर्क आक्रमण और हरियाणा",
        titleEnglish: "Turk Invasion and Haryana",
        contentHindi: "तोमर वंश के प्रसिद्ध राजा जयपाल थे। जब जयपाल तोमर वंश के शासक बने, तब उत्तर-पश्चिमी भारत से तुर्क आक्रमण शुरू हुए। दसवीं शताब्दी के अंतिम चरण में बगदाद के खलीफा की शक्ति के पतन के बाद, उनके उत्तराधिकारी सुबुक्तगीन ने गज़नी में एक स्वतंत्र राज्य स्थापित किया। 986 ईस्वी में हिंदू शाही वंश के शासक जयपाल को हराने के बाद, गज़नी के शासक सुबुक्तगीन ने पेशावर पर अपनी अधिसत्ता स्थापित की। 997 ईस्वी में सुबुक्तगीन की मृत्यु के बाद, उसका उत्तराधिकारी महमूद ग़ज़नवी बना।",
        contentEnglish: "Jaipala was the famous king of Tomar Dynasty. When Jaipala became the ruler of Tomar Dynasty, Turk invasions started from the North-Western part of India. After the decline of the power of the Caliph of Baghdad in the last phase of the 10th century, his successor Sabuktigin established an independent kingdom in Ghazni. In 986 AD after defeating the ruler of Hindu Royal Dynasty, Jaipala, the ruler of Ghazni Sabuktigin established his suzerainty over Peshawar. In 997 AD after the death of Sabuktigin, he was succeeded by Mahmud of Ghazni."
    };

    // Mahmud of Ghazni Invasion
    const mahmudInvasion = {
        titleHindi: "महमूद ग़ज़नवी का आक्रमण और तोमर शासक जयपाल",
        titleEnglish: "Invasion of Mahmud of Ghazni and Tomar Ruler Jaipala",
        contentHindi: "महमूद ग़ज़नवी ने 1000 से 1026 ईस्वी तक 17 बार भारत पर आक्रमण किया। महमूद ग़ज़नवी ने 1009 ईस्वी में थानेसर पर आक्रमण किया। यह महमूद ग़ज़नवी का भारत पर छठा आक्रमण और हरियाणा क्षेत्र पर पहला हमला था। उस समय हरियाणा क्षेत्र (दिल्ली और हांसी) के शासक तोमर राजा जयपाल थे। महमूद ग़ज़नवी बिना किसी युद्ध के लौट गया। 1014 ईस्वी में, महमूद ग़ज़नवी ने फिर से थानेसर पर आक्रमण किया। शाहाबाद के पास मार्कंडा नदी के तट पर राजा जयपाल और महमूद ग़ज़नवी की सेनाओं के बीच युद्ध हुआ, जिसमें राजा जयपाल पराजित हुए। महमूद ग़ज़नवी ने थानेसर को लूटा। उसने पीतल से बनी चक्र स्वामी की मूर्ति को नष्ट कर दिया और विष्णु मंदिर को भी क्षतिग्रस्त कर दिया। महमूद ग़ज़नवी के आक्रमण के दौरान, उसका दरबारी कवि अल-बिरूनी भी उसके साथ था। अल-बिरूनी ने अपनी पुस्तक 'किताब-उल-हिंद' में उल्लेख किया कि थानेसर हिंदुओं के लिए एक महत्वपूर्ण केंद्र था। जयपाल ने थानेसर पर महमूद ग़ज़नवी की विजय के बाद भी 1021 ईस्वी तक इस क्षेत्र पर शासन किया।",
        contentEnglish: "Mahmud of Ghazni invaded India 17 times from 1000 to 1026 AD. Mahmud of Ghazni attacked Thanesar in 1009 AD. This was Mahmud of Ghazni's sixth invasion of India and the first attack on Haryana region. At this time, the ruler of Haryana region (Delhi and Hansi) was Tomar King Jaipala. Mahmud of Ghazni returned without any war. In 1014 AD, Mahmud of Ghazni attacked again on Thanesar. There was a war between the armies of King Jaipala and Mahmud of Ghazni on the banks of Markanda river near Shahabad, in which King Jaipala was defeated. Mahmud of Ghazni looted Thanesar. He destroyed the sculpture of Chakra Swami made of bronze and also damaged the Vishnu temple. During the invasion of Mahmud of Ghazni, his court poet, Al-Biruni was also with him. Al-Biruni in his book 'Kitab-ul-Hind', mentioned that Thanesar was an important centre for Hindus. Jaipala ruled this region till 1021 AD even after Thanesar was conquered by Mahmud of Ghazni."
    };

    // Masud and Mawdud
    const masudMawdud = {
        titleHindi: "मसूद और मौदूद का आक्रमण",
        titleEnglish: "Invasion of Masud and Mawdud",
        contentHindi: "1030 ईस्वी में, महमूद ग़ज़नवी की मृत्यु के बाद उसका पुत्र मसूद सिंहासन पर बैठा। 1037 ईस्वी में, मसूद ने हांसी पर आक्रमण किया और तोमर शासक कुमारपाल देव को पराजित किया। उसने हांसी और अन्य निकटवर्ती क्षेत्रों पर कब्जा कर लिया। 1043 ईस्वी में, गज़नी के मसूद के पुत्र मौदूद ने हरियाणा पर आक्रमण किया। लेकिन, तोमर शासक कुमारपाल देव ने अन्य शासकों (चौहान और परमार शासकों) की मदद से उसे पराजित कर दिया। इस प्रकार, हरियाणा ग़ज़नवी साम्राज्य से मुक्त हो गया। 1051 ईस्वी में, अनंगपाल द्वितीय कुमारपाल देव के उत्तराधिकारी बने। अनंगपाल द्वितीय ने 1081 ईस्वी तक शासन किया। अनंगपाल द्वितीय ने फरीदाबाद के पास सूरजकुंड बनवाया। साथ ही, दिल्ली में मेहरौली का लोहे का स्तंभ स्थापित किया गया। 1081 ईस्वी में, गज़नी का शासक इब्राहिम था जिसने हरियाणा क्षेत्र पर आक्रमण किया। उस समय हरियाणा का शासक अनंगपाल द्वितीय का उत्तराधिकारी तेजपाल था, जिसने बिना किसी युद्ध के इब्राहिम की अधीनता स्वीकार कर ली।",
        contentEnglish: "In 1030 AD, after the death of Mahmud of Ghazni his son Masud, ascended the throne. In 1037 AD, Masud invaded Hansi and defeated the Tomar ruler, Kumarapala Dev. He captured Hansi along with other nearby areas. In 1043 AD, Mawdud, the son of Masud of Ghazni, invaded Haryana. But, Kumarapala Dev, the Tomara ruler, defeated him with the help of other rulers (Chauhan and Parmar rulers). In this way, Haryana was liberated from Ghaznavid Empire. In 1051 AD, Anangpala-II succeeded Kumarapala Dev. Anangpala-II ruled till 1081 AD. Anangpala-II built Surajkund near Faridabad. Simultaneously, Mehrauli's iron pillar was installed in Delhi. In 1081 AD, the ruler of Ghazni was Ibrahim who invaded Haryana region. At this time, the ruler of Haryana was Tejpala, the successor of Anangpala-II, who accepted Ibrahim's subjection without any war."
    };

    // Rise of Chauhans
    const riseOfChauhans = {
        titleHindi: "हरियाणा में चौहानों का उदय",
        titleEnglish: "Rise of Chauhans in Haryana",
        contentHindi: "जब हरियाणा क्षेत्र में तोमर वंश का पतन हो रहा था, तब राजस्थान से शाकम्भरी चौहान हरियाणा और दिल्ली की ओर आने लगे। कुछ इतिहासकार उन्हें अग्निकुल राजपूत मानते हैं। लगभग 1139 ईस्वी में, अजमेर के चौहान शासक अर्णोराज ने 'महाराजाधिराज परमेश्वर श्री' की उपाधि के साथ, अपनी सेना के साथ हरियाणा की ओर प्रस्थान किया। अर्णोराज ने तोमर के राज्य को पूरी तरह समाप्त नहीं किया, बल्कि उस पर अधिसत्ता स्थापित की और इसे करद राज्य में बदल दिया। चौहान शासक विग्रहराज चतुर्थ ने तोमर शासकों को पराजित किया और दिल्ली और हांसी के किले पर कब्जा कर लिया। इस प्रकार, इस क्षेत्र का वास्तविक शासक चौहान बन गया, लेकिन विग्रहराज चतुर्थ ने तोमरों को सामंती अधिकार दे दिए थे।",
        contentEnglish: "When the Tomar Dynasty in Haryana region was on decline, Shakambhari Chauhans from Rajasthan started coming towards Haryana and Delhi. Some historians consider them as Agnkul Rajput. Around 1139 AD, the Chauhan ruler of Ajmer, Arnoraj, with the title of Maharajadhiraj Parameshwara Shri, proceeded to Haryana with his army. Arnoraj did not completely abolish the kingdom of Tomar, but established suzerainty over it and converted it into Karad State. Chauhan ruler, Vigrahraj-IV defeated the Tomar rulers and took possession of the fort of Delhi and Hansi. Thus, the real ruler of this region became Chauhan, but Vigrahraj-IV had given feudal rights to the Tomaras."
    };

    // Bhadanakas
    const bhadanakas = {
        titleHindi: "भदानकों का उदय और हरियाणा",
        titleEnglish: "Rise of Bhadanakas and Haryana",
        contentHindi: "भदानक वास्तव में हरियाणा के प्राचीन लोगों से संबंधित थे, जिन्हें आमतौर पर भद्र कहा जाता था। वर्तमान हरियाणा के गुरुग्राम और महेंद्रगढ़ तथा वर्तमान राजस्थान का अलवर जिला भदानक राज्य का हिस्सा थे। भदानक तोमर और चौहान शासकों के समकालीन थे। भदानक राज्य के लोग अपभ्रंश भाषा बोलते थे। इतिहासकार दशरथ शर्मा के अनुसार, भदानक संभवतः अहीर जाति से संबंधित थे। चौहान शासक अर्णोराज ने तोमरों को पराजित करने के बाद भदानक क्षेत्र पर आक्रमण किया, लेकिन अर्णोराज का एक शिलालेख दर्शाता है कि भदानकों ने बिना किसी युद्ध के अर्णोराज की अधीनता स्वीकार कर ली। अर्णोराज की मृत्यु के बाद, जब इस क्षेत्र में चौहान शासकों के साथ सत्ता संघर्ष शुरू हुआ, तो भदानकों ने फिर से अपना स्वतंत्र अधिकार स्थापित कर लिया। महाभारत में, भदानकों का उल्लेख रोहतक और अग्रोहा के रोहतक-अग्रोहा लोगों तथा घग्गर और सतलुज नदियों के बीच बसे मालवा लोगों के साथ किया गया है। वर्तमान में, हरियाणा के रेवाड़ी और भिवानी क्षेत्र भद्र क्षेत्र के रूप में जाने जाते हैं। महाभारत काल से लेकर मध्य युग तक, भद्र क्षेत्र भदानक के नाम से जाना जाने लगा।",
        contentEnglish: "Bhadanakas were actually related to the ancient people of Haryana, who were commonly called Bhadras. Gurugram and Mahendragarh of present Haryana and Alwar district of present Rajasthan were part of Bhadanaka state. Bhadanakas were contemporary of the Tomar and Chauhan rulers. The people of Bhadanaka state spoke Apbhrashma language. According to historian Dasharatha Sharma, Bhadanakas were probably related to the Ahir caste. The Chauhan ruler, Arnoraj attacked the Bhadanaka region after defeating the Tomars, but an inscription of Arnoraj shows that Bhadanakas accepted the subjection of Arnoraj without any war. After the death of Arnoraj, when the power struggle with the Chauhan rulers started in this area, Bhadanakas again established their independent authority over here. In Mahabharata, Bhadanakas were mentioned with the Rohtak and Agar people of Rohtak-Agroha, and the Malwa people settled between Ghaggar and Satluj rivers. Presently, Rewari and Bhiwani regions of Haryana are known as Bhadra region. From the Mahabharata period to the middle ages, the Bhadra region came to be known as Bhadanaka."
    };

    // Conflict Bhadanakas Chauhans
    const conflictBhadanakas = {
        titleHindi: "भदानकों और चौहानों के बीच संघर्ष",
        titleEnglish: "Conflict between Bhadanakas and Chauhans",
        contentHindi: "चौहान शासक अर्णोराज की मृत्यु के बाद, क्षेत्र में अराजकता फैल गई। भदानक अर्णोराज की अधीनता स्वीकार करके सामंत बन गए थे। हालाँकि, सिंहासन के लिए गृह युद्ध के कारण उत्पन्न अराजकता का लाभ उठाकर, भदानकों ने स्वतंत्र शासन स्थापित कर लिया। 1151 ईस्वी में, चौहान शासक विग्रहराज चतुर्थ ने शासक बनने के बाद, भदानकों पर आक्रमण किया और उन्हें पराजित कर उनकी अधीनता स्वीकार करने के लिए मजबूर किया। हालाँकि, अमर गंगाय, पृथ्वीराज द्वितीय और सोमेश्वर के शासनकाल में, भदानक फिर से शक्तिशाली और स्वतंत्र शासक बन गए। सोमेश्वर की मृत्यु के बाद, पृथ्वीराज चतुर्थ चौहानों का शासक बना। 1182 ईस्वी में, पृथ्वीराज चतुर्थ ने भदानकों पर आक्रमण किया। इस युद्ध में भदानक पराजित हुए। इस हार के बाद, भदानकों का शासन समाप्त हो गया।",
        contentEnglish: "After the death of Chauhan ruler Arnoraj, anarchy spread in the region. Bhadanakas became feudal lords by accepting Arnoraj's subjugation. However by taking advantage of the chaos caused by the civil war for the throne, the Bhadanakas established independent rule. In 1151 AD, Chauhan ruler Vigrahraj-IV, after becoming the ruler, attacked the Bhadanakas and defeated them and forced them to accept his subjugation. However under the reign of Amar Gangay, Prithviraj-II and Someshwar, Bhadanakas again became powerful and independent rulers. After the death of Someshwar, Prithviraj-III became the ruler of Chauhans. In 1182 AD, Prithviraj-III attacked Bhadanakas. Bhadanakas were defeated in this war. After this defeat, the rule of Bhadanakas ended."
    };

    // Muhammad Ghori
    const muhammadGhori = {
        titleHindi: "मुहम्मद ग़ोरी का आक्रमण और हरियाणा",
        titleEnglish: "Invasion of Muhammad Ghori and Haryana",
        contentHindi: "मुहम्मद ग़ोरी, ग़ोर (अफगानिस्तान का एक छोटा राज्य) का शासक, ने 1175 से 1186 ईस्वी तक कई बार भारत पर आक्रमण किया और पंजाब पर अपना कब्जा स्थापित किया। ग़ोरी के आक्रमण के समय पृथ्वीराज चतुर्थ हरियाणा और दिल्ली का शासक था।",
        contentEnglish: "Muhammad Ghori, the ruler of Ghor (a small state of Afghanistan), attacked India many times from 1175 to 1186 AD and established possession on Punjab. Prithviraj-III was the ruler of Haryana and Delhi at the time of the invasion of Ghori."
    };

    // First Battle of Tarain
    const firstTarain = {
        titleHindi: "तराइन का प्रथम युद्ध (1191 ईस्वी)",
        titleEnglish: "First Battle of Tarain (1191 CE)",
        contentHindi: "1191 ईस्वी में, मुहम्मद ग़ोरी ने हरियाणा पर आक्रमण किया। पृथ्वीराज चतुर्थ ने इस आक्रमण का प्रतिरोध किया। इस युद्ध में, मुहम्मद ग़ोरी पृथ्वीराज चतुर्थ से पराजित हुआ। यह युद्ध हरियाणा के तराओरी (करनाल) स्थान पर लड़ा गया था। भारतीय इतिहास में इसे तराइन का प्रथम युद्ध (तराओरी) के नाम से जाना जाता है। तराइन के प्रथम युद्ध में दिल्ली के शासक गोविंदराज और उत्तरी भारत के कई क्षेत्र पृथ्वीराज चतुर्थ के साथ थे। तराइन के तीसरे युद्ध के बाद, पृथ्वीराज चतुर्थ ने तबरहिंद (सरहिंद) के किले पर कब्जा कर लिया।",
        contentEnglish: "In 1191 CE, Muhammad Ghori attacked Haryana. Prithviraj-III resisted this attack. In this battle, Muhammad Ghori was defeated by Prithviraj-III. This battle was fought in Taraori (Karnal) place of Haryana. It is known as the First Battle of Tarain (Taraori) in Indian history. The ruler of Delhi, Govindraj and many territories of North India were with Prithviraj III in First Battle of Tarain. After the Third Battle of Tarain, Prithviraj-III took over the fort of Tabarhind (Sirhind)."
    };

    // Second Battle of Tarain
    const secondTarain = {
        titleHindi: "तराइन का द्वितीय युद्ध (1192 ईस्वी)",
        titleEnglish: "Second Battle of Tarain (1192 CE)",
        contentHindi: "1192 ईस्वी में, तराइन का द्वितीय युद्ध फिर से पृथ्वीराज चतुर्थ और मुहम्मद ग़ोरी के बीच तराओरी में लड़ा गया। इस युद्ध में, पृथ्वीराज चतुर्थ पराजित हुआ। इस युद्ध के बाद, कुतुब-उद-दीन ऐबक ने 1206 ईस्वी तक मुहम्मद ग़ोरी के प्रतिनिधि के रूप में इस क्षेत्र पर शासन किया और अग्रोहा मुस्लिम शासन का हिस्सा बन गया। 1206 ईस्वी में मुहम्मद की मृत्यु के बाद, ऐबक ने दिल्ली में गुलाम वंश की स्थापना की।",
        contentEnglish: "In 1192 CE, the Second Battle of Tarain was fought again between Prithviraj-III and Muhammad Ghori at Taraori. In this battle, Prithviraj-III was defeated. After this battle, Qutb-ud-din Aibak ruled over the region as a representative of Muhammad Ghori till 1206 CE and Agroha became a part of Muslim rule. After the death of Muhammad in 1206 CE, Aibak founded the Slave Dynasty at Delhi."
    };

    // After Second Battle
    const afterSecondTarain = {
        titleHindi: "तराइन के द्वितीय युद्ध के बाद हरियाणा",
        titleEnglish: "Haryana after the Second Battle of Tarain",
        contentHindi: "1192 ईस्वी में, तराइन के द्वितीय युद्ध के बाद, हरियाणा के लोगों ने राजपूत सरदार वीर जटवान के नेतृत्व में हांसी-हिसार क्षेत्र में मुहम्मद ग़ोरी के खिलाफ लड़ाई लड़ी। इस युद्ध में वीर जटवान मारे गए। रेवाड़ी के गवर्नर तेजपाल ने अहीरवाल क्षेत्र में मुहम्मद ग़ोरी के खिलाफ लड़ाई लड़ी, जिसमें अफगान कमांडर इब्राहिम मारा गया। इसके बाद रेवाड़ी पर ग़ोरी के कमांडर कुतुब-उद-दीन ऐबक ने आक्रमण किया, जिसमें तेजपाल मारे गए।",
        contentEnglish: "In 1192 AD, after the Second Battle of Tarain, the people of Haryana fought against Muhammad Ghori under the leadership of Rajput Sardar Vir Jatwan in the region of Hansi-Hisar. In this battle Vir Jatwan died. The Governor of Rewari Tejpala fought against Muhammad Ghori in Ahirwal region, in which Afghan Commander Ibrahim died. Thereafter Rewari was attacked by Ghori's Commander Qutb-ud-din Aibak, in which Tejpala died."
    };

    // Sultanate Period Overview
    const sultanateOverview = {
        titleHindi: "सुल्तानत काल में हरियाणा",
        titleEnglish: "Haryana in Sultanate Period",
        contentHindi: "सुल्तानत काल के दौरान हरियाणा पर कई वंशों ने शासन किया। इनमें से कुछ हैं: 1. गुलाम वंश, 2. खिलजी वंश, 3. तुगलक वंश, 4. सैय्यद वंश, 5. लोदी वंश",
        contentEnglish: "During the Sultanate period many dynasties ruled over Haryana. Some of these are: 1. The Slave Dynasty, 2. Khilji Dynasty, 3. Tughlaq Dynasty, 4. Sayyid Dynasty, 5. Lodi Dynasty"
    };

    // Slave Dynasty
    const slaveDynasty = {
        titleHindi: "गुलाम वंश (1206-1290 ईस्वी)",
        titleEnglish: "The Slave Dynasty (1206-1290 AD)",
        contentHindi: "गुलाम वंश की स्थापना 1206 ईस्वी में कुतुब-उद-दीन ऐबक ने की थी, जो मुहम्मद ग़ोरी का गुलाम था। उसने अपनी राजधानी लाहौर बनाई। कुतुब-उद-दीन ऐबक का शासनकाल बहुत छोटा था। ऐबक ने अपने शासनकाल (1206-10 ईस्वी) के दौरान हरियाणा में अपना अधिकार प्राप्त किया। 1210 ईस्वी में कुतुब-उद-दीन ऐबक की मृत्यु के बाद, अहीरों, राजपूतों और जाटों ने केंद्रीय प्राधिकरण के खिलाफ बाधाएं पैदा कर दीं।",
        contentEnglish: "The Slave dynasty was founded in 1206 AD by Qutb-ud-din Aibak, a slave of Muhammad Ghori. He made his capital Lahore. Qutb-ud-din Aibak's reign was very short. Aibak acquired his authority in Haryana during his rule (1206-10 AD). After the death of Qutb-ud-din Aibak in 1210 AD, the Ahirs, Rajputs and Jats created obstacles against the central authority."
    };

    // Ilutumish
    const ilutumish = {
        titleHindi: "इल्तुतमिश (1210-1236 ईस्वी)",
        titleEnglish: "Ilutumish (1210-1236 AD)",
        contentHindi: "इल्तुतमिश (1210-1236 ईस्वी) कुतुब-उद-दीन ऐबक की मृत्यु के बाद दिल्ली सल्तनत का सुल्तान बना। उसके शासनकाल के दौरान, पंजाब के शासक कुबाचा और गज़नी के शासक यल्दोज ने हरियाणा क्षेत्र पर आक्रमण किया। 1227 ईस्वी में, कुबाचा ने सिरसा पर अधिसत्ता घोषित की, लेकिन गज़नी के शासक यल्दोज ने इस क्षेत्र पर आक्रमण किया और कुबाचा को पराजित कर विजित क्षेत्र को गज़नी राज्य में मिला लिया। इल्तुतमिश के शासनकाल के दौरान, समकालीन ग्रंथों में सात इक़्तों का उल्लेख मिलता है। ये थे: (i) दिल्ली (ii) रेवाड़ी (iii) हांसी (iv) नारनौल (v) सिरसा (vi) पलवल (vii) पिपली। इनमें से, दिल्ली, हांसी और सिरसा के इक़्ते बहुत बड़े और महत्वपूर्ण थे। हांसी का इक़्ता सैन्य और आर्थिक दृष्टि से सबसे महत्वपूर्ण माना जाता था। यह 1226 से 1228 ईस्वी तक नसीरुद्दीन के अधीन रहा, जो बाद में सुल्तान बना।",
        contentEnglish: "Ilutumish (1210-1236 AD) became the Sultan of Delhi Sultanate after the death of Qutb-ud-din Aibak. During his reign, Kubacha, the ruler of Punjab and Yaldoj, the ruler of Ghazni, invaded the Haryana region. In 1227 AD, Kubacha declared suzerainty over Sirsa, but Yaldoj, the ruler of Ghazni invaded this region and defeated Kubacha and annexed the conquered territory into the Ghazni kingdom. During the reign of Ilutumish, seven iqtas are mentioned in contemporary texts. These were (i) Delhi (ii) Rewari (iii) Hansi (iv) Narnaul (v) Sirsa (vi) Palwal (vii) Pipli. Among these, the iqtas of Delhi, Hansi and Sirsa were very large and important. Hansi's iqta was considered as the most important from military and economic point of view. It remained under Nasiruddin from 1226 to 1228 AD, who later became the Sultan."
    };

    // Razia Sultan
    const raziaSultan = {
        titleHindi: "रुकनुद्दीन और रज़िया सुल्तान",
        titleEnglish: "Ruknuddin and Razia Sultan",
        contentHindi: "1236 ईस्वी में इल्तुतमिश की मृत्यु के बाद, उसका पुत्र रुकनुद्दीन शासक बना, जो एक अयोग्य सुल्तान था। इसके कारण, हांसी के मुफ्ती सैफुद्दीन कूची ने विद्रोह कर दिया। इसके अलावा, अन्य आस-पास के क्षेत्रों में भी विद्रोह शुरू हो गए। परिणामस्वरूप, इल्तुतमिश की पुत्री रज़िया सुल्तान (1236-1240 ईस्वी) ने खुद को सुल्तान घोषित कर दिया। उत्तरी हरियाणा के जाटों और राजपूतों ने रज़िया के कदम का विरोध किया। रज़िया ने पर्दा प्रथा को त्याग दिया और पुरुषों की तरह चोगा और कुलाह पहना। 14 अक्टूबर, 1240 ईस्वी को, रज़िया और उसके पति अल्तूनिया को हरियाणा के कैथल के पास पकड़ लिया गया और मार डाला गया। कैथल में, रज़िया सुल्तान और अल्तूनिया की मज़ार स्थित है। रज़िया सुल्तान की मज़ार दक्षिण एशिया में पहला महिला स्मारक है।",
        contentEnglish: "After the death of Ilutumish in 1236 AD, his son Ruknuddin became the ruler, who was an unfit Sultan. Due to this, the Mufti of Hansi, Saifuddin Kuchi revolted. Apart from this, revolts also started in other adjacent areas. As a result, Ilutumish's daughter Razia Sultan (1236-1240 AD) declared herself Sultan. The Jats and Rajputs of Northern Haryana opposed Razia's step. Razia abandoned the Purdah System and wore Choga (Kaba) and Kulah (Cap) like men. On 14th October, 1240 AD, Razia and her husband Altunia were captured and killed near Kaithal in Haryana. In Kaithal, the tomb of Razia Sultan and Altunia is located. The tomb of Razia Sultan is the first female monument in South Asia."
    };

    // Balban
    const balban = {
        titleHindi: "उलुग खान (बलबन)",
        titleEnglish: "Ulugh Khan (Balban)",
        contentHindi: "बलबन (1266-1287 ईस्वी) का मूल नाम बहाउद्दीन था। वह इल्तुतमिश का गुलाम था। 1266 ईस्वी में, बलबन गियासुद्दीन बलबन के नाम से दिल्ली की गद्दी पर बैठा। उसने दिल्ली को मंगोल आक्रमण से बचाया और हरियाणा की अव्यवस्थित स्थिति में व्यापक सुधार लाने का प्रयास किया। बलबन को नसीरुद्दीन महमूद ने उलुग खान की उपाधि दी थी। बलबन ने मेवात के जंगलों को नष्ट कर दिया, ताकि मेवाती विद्रोही इन जंगलों में छिप न सकें। लंबे युद्ध के बाद बलबन ने अपनी विशाल सेना के माध्यम से मेवातियों को पराजित किया। बलबन ने मेवात में शांति स्थापित करने के लिए गोपालगिर में किला बनवाया। बलबन ने नारनौल, कनोद, सोनीपत, थानेसर, हांसी, बरवाला और धातरत जैसे स्थानों पर अफगान चौकियां स्थापित करके सैन्य चौकियां स्थापित कीं। बलबन ने नागरिक प्रशासन पर नियंत्रण स्थापित करने के लिए सोनीपत, कैथल, शिवालिक आदि जैसे नए इक़्ते स्थापित किए। शमसुद्दीन कायूमर्स गुलाम वंश का अंतिम सुल्तान था।",
        contentEnglish: "Balban (1266-1287 AD) was originally named Bahauddin. He was a slave of Ilutumish. In 1266 AD, Balban sat on the throne of Delhi in the name of Ghiyasuddin Balban. He protected Delhi from the Mongol invasion and also tried to bring about a comprehensive improvement in the disorganized state of Haryana. Balban was conferred the title of Ulugh Khan by Nasiruddin Mahmud. Balban destroyed the Mewat forests, so that the Mewati rebels could not hide in these forests. After a long battle Balban defeated the Mewatis through his huge army. Balban built fort in Gopalgir to establish peace in Mewat. Balban established military posts by establishing Afghan posts at places like Narnaul, Kanod, Sonipat, Thanesar, Hansi, Barwala and Dhatrat. Balban established new iqtas like Sonipat, Kaithal, Shivalik etc to establish control over civil administration. Shamsuddin Kayumars was the last Sultan of the Slave dynasty."
    };

    // Khilji Dynasty
    const khiljiDynasty = {
        titleHindi: "खिलजी वंश (1290-1320 ईस्वी)",
        titleEnglish: "Khilji Dynasty (1290-1320 AD)",
        contentHindi: "1290 ईस्वी में, जलालुद्दीन फिरोज खिलजी, जो कैथल इक़्ते का इक़्तेदार था, दिल्ली सल्तनत का सुल्तान बना। उसने किलोखरी को अपनी राजधानी बनाया।",
        contentEnglish: "In 1290 AD, Jalaluddin Feroz Khilji, who was the iqtedar of Kaithal iqta, became the Sultan of Delhi Sultanate. He made Kilokhari his capital."
    };

    // Alauddin Khilji
    const alauddinKhilji = {
        titleHindi: "अलाउद्दीन खिलजी",
        titleEnglish: "Alauddin Khilji",
        contentHindi: "1296 ईस्वी में, जलालुद्दीन के भतीजे और दामाद, अलाउद्दीन खिलजी (1296-1316 ईस्वी), ने जलालुद्दीन की हत्या करके दिल्ली का सुल्तान बन गया। 1305 ईस्वी में, अलाउद्दीन खिलजी के शासनकाल के दौरान मंगोलों ने हरियाणा पर आक्रमण किया। अलाउद्दीन खिलजी के हिंदू जनरल नानक ने हांसी और सिरसा के बीच मंगोल सेना को रोक दिया। अलाउद्दीन के शासनकाल के दौरान, दीपालपुर के हाकिम गाजी मलिक ने विद्रोह कर दिया और सिरसा पहुंच गया, लेकिन खुसरो शाह की सेना ने उसे रोक दिया। अमीर खुसरो के अनुसार, सिरसा और हांसी पर कब्जा करने के बाद, गाजी मलिक मदीना, रोहतक, मंडोनी और पालम के रास्ते लहरावत गया। लहरावत पर विजय प्राप्त करने के बाद, उसने हरियाणा को अपने अधिकार क्षेत्र में बना लिया।",
        contentEnglish: "In 1296 AD, Jalaluddin's nephew and son-in-law, Alauddin Khilji (1296-1316 AD), became the Sultan of Delhi after killing Jalaluddin. In 1305 AD, Mongols invaded Haryana during the reign of Alauddin Khilji. Nanak, the Hindu General of Alauddin Khilji, stopped the Mongol army between Hansi and Sirsa. During the reign of Alauddin, Hakim Ghazi Malik of Dipalpur revolted and reached Sirsa, but was stopped by Khusro Shah's army. According to Amir Khusro, after capturing Sirsa and Hansi, Ghazi Malik went to Lahrawat via the route of Madina, Rohtak, Mandoni and Palam. After conquering Lahrawat, he made Haryana under his jurisdiction."
    };

    // Tughlaq Dynasty
    const tughlaqDynasty = {
        titleHindi: "तुगलक वंश (1320-1412 ईस्वी)",
        titleEnglish: "Tughlaq Dynasty (1320-1412 AD)",
        contentHindi: "1320 ईस्वी में, नसीरुद्दीन खुसरो खान की सेना को हराने के बाद, गाजी मलिक ने दिल्ली सल्तनत पर नियंत्रण कर लिया। गाजी मलिक गियासुद्दीन तुगलक के नाम से दिल्ली का पहला तुगलक सुल्तान बना।",
        contentEnglish: "In 1320 AD, after defeating Nasiruddin Khusro Khan's army, Ghazi Malik took control of Delhi Sultanate. Ghazi Malik became the first Tughlaq Sultan of Delhi, bearing the name of Ghiyasuddin Tughlaq."
    };

    // Muhammad Shah Tughlaq
    const muhammadShahTughlaq = {
        titleHindi: "मुहम्मद शाह तुगलक (1325-1351 ईस्वी)",
        titleEnglish: "Muhammad Shah Tughlaq (1325-1351 AD)",
        contentHindi: "गियासुद्दीन तुगलक के बाद, मुहम्मद शाह तुगलक बना। उसके शासनकाल के दौरान, दिल्ली, हांसी और सिरसा के इक़्ते बहुत प्रमुख थे। मुहम्मद शाह ने प्रशासनिक नियंत्रण के लिए अलाउद्दीन खिलजी जैसी नीति अपनाई। लोग मुहम्मद शाह तुगलक की नीतियों के खिलाफ विद्रोह करने लगे। हरियाणा के कई क्षेत्रों जैसे कैथल, समाना, सुनाम, गहराम आदि के लोगों ने उसे राजस्व देना बंद कर दिया।",
        contentEnglish: "After Ghiyasuddin Tughlaq, Muhammad Shah became the Tughlaq ruler. During his reign, the iqtas of Delhi, Hansi and Sirsa were very prominent. Muhammad Shah adopted a policy like Alauddin Khilji for administrative control. People started rebelling against the policies of Muhammad Shah Tughlaq. People of many areas of Haryana like Kaithal, Samana, Sunam, Gahram etc stopped giving revenues to him."
    };

    // Firoz Shah Tughlaq
    const firozShahTughlaq = {
        titleHindi: "फिरोज शाह तुगलक (1351-1388 ईस्वी)",
        titleEnglish: "Firuz Shah Tughlaq (1351-1388 AD)",
        contentHindi: "फिरोज शाह तुगलक (1351-1388 ईस्वी) मुहम्मद-बिन-तुगलक की मृत्यु के बाद शासक बना। वह दीपालपुर की एक हिंदू राजकुमारी का पुत्र था। फिरोज शाह तुगलक ने अपनी पुस्तक 'फुतुहात-ए-फिरोजशाही' में गोहाना के शिव मंदिर को नष्ट करने, हिंदुओं की धार्मिक पुस्तकों को जलाने और धार्मिक हिंसा फैलाने का विस्तृत विवरण दिया है। फिरोज शाह तुगलक के शासनकाल के दौरान, हिसार और सफीदोन में कई विद्रोह हुए, जिन पर सुल्तान ने अपनी सेना के माध्यम से नियंत्रण प्राप्त किया। फिरोज शाह तुगलक ने हरियाणा के मेवातियों के साथ-साथ कई हिंदुओं को मुसलमान बनने के लिए मजबूर किया। उसने हिसार को हिसार-ए-फिरोजा के रूप में पुनर्स्थापित किया। फिरोज शाह तुगलक ने हिसार से कुछ किलोमीटर दूर फतेहाबाद शहर स्थापित किया, अपने पुत्र फतेह खान के नाम पर। उसने तीसरा शहर, फिरोजाबाद हरनी खेड़ा, सिरसा से 12 मील दूर स्थापित किया। फिरोज शाह तुगलक ने हिसार, फिरोजाबाद, फिरोजपुर और फरीदाबाद शहर भी स्थापित किए। फिरोज शाह तुगलक अपना अधिकांश समय हिसार में बिताता था। उसने हिसार में एक किला फिरोज शाह पैलेस भी स्थापित किया। किले के चार दरवाजे थे - दिल्ली गेट, नागौरी गेट, मौरी गेट और तालकी गेट। फिरोज शाह तुगलक ने हिसार में अपनी प्रिय गुजरी के लिए गुजरी महल बनवाया था। इतिहासकार अफीक के अनुसार, फिरोज शाह तुगलक ने हांसी के स्थान पर हिसार-ए-फिरोजा को इक़्ता बनाया और इसमें हांसी, अग्रोहा, फतेहाबाद और सरसूती (सिरसा) के सलोदा तक का क्षेत्र शामिल किया। फिरोज शाह तुगलक ने हिसार और फतेहाबाद के बीच के क्षेत्र, जैसे जींद, तुगलकपुर, धातरत पर सीधे कब्जा कर लिया।",
        contentEnglish: "Firuz Shah Tughlaq (1351-1388 AD) became the ruler after the death of Muhammad-bin-Tughlaq. He was the son of a Hindu Princess of Dipalpur. Firuz Shah Tughlaq in his book Futuhat-e-Firozshahi had given a detailed description of destroying Gohana's Shiva temple, burning religious books of Hindus and spreading religious violence. During the reign of Firuz Shah Tughlaq, there were many revolts in Hisar and Safidon, over which the Sultan got control through his army. Firuz Shah Tughlaq forced many Hindus to become Muslims along with the Mewatis of Haryana. He re-established Hisar as Hisar-e-Firoza. Firuz Shah Tughlaq established Fatehabad city a few kilometers from Hisar, after the name of his son Fateh Khan. He established a third city, Ferozabad Harni Kheda, 12 miles from Sirsa. Firuz Shah Tughlaq also established cities like Hisar, Firozabad, Firozpur and Faridabad. Firuz Shah Tughlaq used to spend most of his time in Hisar. He also established a fort Firoz Shah Palace in Hisar. The fort had four gates - Delhi Gate, Nagauri Gate, Mauri Gate and Talaki Gate. Firuz Shah Tughlaq had built the Gujar Mahal in Hisar for his beloved Gujri. According to historian Afiq, Firuz Shah Tughlaq replaced Hisar-e-Firoza as iqta in place of Hansi and included the area up to Hansi, Agroha, Fatehabad and Saloda of Sarasuti (Sirsa) in it. Firuz Shah Tughlaq directly took possession of the area between Hisar and Fatehabad, such as Jind, Tughlakpur, Dhatrat."
    };

    // Timur Lang
    const timurLang = {
        titleHindi: "तैमूर लंग का आक्रमण (1398 ईस्वी)",
        titleEnglish: "Invasion of Timur Lang (1398 AD)",
        contentHindi: "1398 ईस्वी में, तैमूर लंग (1336-1405 ईस्वी) ने भारत पर आक्रमण किया। उसने भटनेर (वर्तमान हनुमानगढ़) को नष्ट करने के बाद घग्गर नदी के रास्ते हरियाणा में प्रवेश किया। तैमूर की आत्मकथा 'मलफुजात-ए-तैमूरी' के अनुसार, तैमूर सिरसा, फतेहाबाद, टोहाना, मूनक, कैथल, असांघा और पानीपत के रास्ते भारत पर आक्रमण के दौरान दिल्ली पहुंचा था। तैमूर के आक्रमण के बाद, तुगलक साम्राज्य की नींव कमजोर हो गई। हर जगह अराजकता फैल गई और क्षेत्र स्वतंत्र होते जा रहे थे। स्वतंत्र रियासतों में से दक्षिण-पश्चिमी हरियाणा के दो सबसे शक्तिशाली राजा जलाल और हसन खान के रूप में उभरे।",
        contentEnglish: "In 1398 AD, Timur Lang (1336-1405 AD) invaded India. He entered Haryana via the Ghaggar river after destroying Bhatner (present Hanumangarh). According to Timur's autobiography Malfuzat-i-Timuri, Timur had reached Delhi during the invasion of India via Sirsa, Fatehabad, Tohana, Munak, Kaithal, Asangha and Panipat. After the invasion of Timur, the foundation of the Tughlaq Empire became weaker. Anarchy spread everywhere and areas were becoming independent. Jalal and Hasan Khan emerged as the two most powerful kings of South-Western Haryana among the independent princely states."
    };

    // Lodi Dynasty
    const lodiDynasty = {
        titleHindi: "लोदी वंश (1451-1526 ईस्वी)",
        titleEnglish: "Lodi Dynasty (1451-1526 AD)",
        contentHindi: "सैय्यद वंश के पतन के बाद, बहलोल लोदी ने लोदी वंश की स्थापना की। उसने अपने शासनकाल (1451-89 ईस्वी) के दौरान हरियाणा पर प्रभुत्व स्थापित किया। बहलोल लोदी के शासनकाल के दौरान, तातार खान यूसुफ का विद्रोह, हिसार और लाहौर के मुक्ति विद्रोही मुक्तों में अधिक महत्वपूर्ण माना जाता था। लोदी काल के दौरान मुक्ता प्रांतीय प्रमुख या अधिकारी होते थे जो अपने इक़्तों में कानून व्यवस्था और कर संग्रह के लिए जिम्मेदार होते थे। तातार खान यूसुफ और प्रिंस निजाम खान के बीच अंबाला के पास युद्ध हुआ। निजाम खान शाही सेना के एक योग्य राजकुमार थे। इस युद्ध में तातार खान यूसुफ पराजित हुआ। यूसुफ की हार के बाद, निजाम खान को हिसार का मुक्ति नियुक्त किया गया। 1489 ईस्वी में, बहलोल लोदी के पुत्र निजाम खान (सिकंदर लोदी) सुल्तान सिकंदर शाह की उपाधि के साथ दिल्ली की गद्दी पर बैठा। 1517 ईस्वी में, सिकंदर लोदी के निधन के बाद इब्राहिम लोदी सिंहासन पर बैठा। इब्राहिम लोदी को दिल्ली सल्तनत का अंतिम सुल्तान माना जाता है। इब्राहिम लोदी ने अपने कुछ भाइयों को हांसी के किले में कैद कर लिया। उसने इंद्री और करनाल के मुक्तियों के साथ दुर्व्यवहार किया, जिसके कारण उन्होंने उसके खिलाफ मोर्चा कर लिया। अप्रैल 1526 ईस्वी में, इब्राहिम लोदी पानीपत के प्रथम युद्ध में बाबर से पराजित हुआ। इब्राहिम लोदी की मज़ार पानीपत में स्थित है।",
        contentEnglish: "After the fall of Sayyid Dynasty, Bahlul Lodi established the Lodi dynasty. He dominated Haryana during his reign (1451-89 AD). During the reign of Bahlul Lodi, the revolt of Tatar Khan Yusuf, Mukti of Hisar and Lahore was considered more important among the rebellious muktas. During the Lodi period Muktas were provincial chief or officials responsible for law and order and collection of taxes in their iqtas. There was a war between Tatar Khan Yusuf and Prince Nizam Khan near Ambala. Nizam Khan was a worthy prince of the Royal Army. In this war Tatar Khan Yusuf was defeated. After the defeat of Yusuf, Nizam Khan was appointed as Mukti of Hisar. In 1489 AD, Nizam Khan (Sikander Lodi), son of Bahlul Lodi, ascended the throne of Delhi with the title of Sultan Sikander Shah. In 1517 AD, Ibrahim Lodi ascended the throne after the demise of Sikander Lodi. Ibrahim Lodi is considered as the last Sultan of Delhi Sultanate. Ibrahim Lodi imprisoned some of his brothers in the fort of Hansi. He misbehaved with the Muktis of Indri and Karnal, due to which they turned against him. In April 1526 AD, Ibrahim Lodi was defeated by Babur in the First Battle of Panipat. The tomb of Ibrahim Lodi is located in Panipat."
    };

    // Babur and First Battle of Panipat
    const baburFirstPanipat = {
        titleHindi: "बाबर और पानीपत का प्रथम युद्ध (1526 ईस्वी)",
        titleEnglish: "Babur and First Battle of Panipat (1526 AD)",
        contentHindi: "मुगल वंश की स्थापना बाबर ने की थी। वह मध्य एशिया के फरगाना का निवासी था। 1526 ईस्वी में, बाबर ने हरियाणा पर आक्रमण किया। इस आक्रमण के समय, हिसार-फिरोजा के शिकदार हामिद खान ने भी बाबर की सेनाओं का सामना किया, लेकिन वह असफल रहा। बाबर के आगमन के समय जलाल खान, तावड़ू (वर्तमान रेवाड़ी) का शासक था। पानीपत का प्रथम युद्ध लोदी वंश के अंतिम शासक इब्राहिम लोदी और काबुल के शासक बाबर के बीच 21 अप्रैल, 1526 को लड़ा गया था जिसमें बाबर ने लोदी को हराया। पानीपत के इस युद्ध के बाद, मुगलों ने न केवल हरियाणा बल्कि पूरे देश पर अपना शासन स्थापित किया। पानीपत के प्रथम युद्ध में, बाबर ने पहली बार तुगलुमा युद्ध नीति और तोपखाने का उपयोग किया। दिल्ली सल्तनत के अंतिम सुल्तान इब्राहिम लोदी, शायद मध्यकाल के पहले शासक थे जो युद्ध के मैदान में मारे गए।",
        contentEnglish: "The Mughal dynasty was founded by Babur. He was a resident of Fargana in Central Asia. In 1526 AD, Babur invaded Haryana. At the time of this invasion, Hamid Khan, the Shikdar of Hisar-Firoza, also faced Babur's forces, but he was unsuccessful. At the time of Babur's arrival Jalal Khan, was the ruler of Tawadu (present day Rewari). The First Battle of Panipat was fought between the last ruler of Lodi dynasty, Ibrahim Lodi and the ruler of Kabul, Babur on 21st April, 1526 in which Babur defeated Lodi. After this Battle of Panipat, Mughals not only established their rule over Haryana but also over the whole country. In the first Battle of Panipat, Babur used Tughluma Warfare Policy and Artillery for the first time. Ibrahim Lodi, the last Sultan of the Delhi Sultanate, was probably the first ruler of the medieval period who was killed in a battlefield."
    };

    // Second Battle of Panipat
    const secondBattlePanipat = {
        titleHindi: "पानीपत का द्वितीय युद्ध (1556 ईस्वी)",
        titleEnglish: "Second Battle of Panipat (1556 AD)",
        contentHindi: "हुमायूँ की मृत्यु के बाद, अकबर 1556 ईस्वी में मुगल साम्राज्य का सम्राट बना। 5 नवंबर, 1556 ईस्वी को, पानीपत का द्वितीय युद्ध हेमू और मुगल सम्राट अकबर की सेनाओं के बीच हुआ, जिसमें हेमू मुगल सेना से पराजित और मारा गया। हेमू दिल्ली की गद्दी पर बैठने वाला अंतिम हिंदू शासक था। मध्यकालीन इतिहास में, हेमचंद्र को एक बहादुर योद्धा माना जाता था। हेमू हरियाणा के रेवाड़ी का निवासी था। हेमू आदिल शाह का प्रधान मंत्री था। आदिल शाह की अयोग्यता और असमर्थता के कारण, हेमू ने आदिल शाह के सभी अधिकारों को अपने नियंत्रण में ले लिया। 7 अक्टूबर, 1556 ईस्वी को, हेमू ने महाराजा विक्रमादित्य की उपाधि के साथ दिल्ली की गद्दी पर खुद को स्थापित किया और दिल्ली का हिंदू सम्राट बन गया।",
        contentEnglish: "After the death of Humayun, Akbar became the Emperor of Mughal Empire in 1556 AD. On 5th November, 1556 AD, the Second Battle of Panipat took place between Hemu and the forces of Mughal Emperor, Akbar, in which Hemu was defeated and killed by Mughal army. Hemu was the last Hindu ruler to ascend the throne of Delhi. In medieval history, Hemchandra was considered as a brave warrior. Hemu was a resident of Rewari in Haryana. Hemu was the Prime Minister of Adil Shah. Due to the disqualification and inability of Adil Shah, Hemu took all the rights of Adil Shah under his control. On 7th October, 1556 AD, Hemu established himself on Delhi's throne with the title of Maharaja Vikramaditya and became Hindu Emperor of Delhi."
    };

    // Jat Revolt
    const jatRevolt = {
        titleHindi: "मुगल काल में जाट विद्रोह",
        titleEnglish: "Jat Revolt in Mughal Period",
        contentHindi: "मुगल शासन के दौरान, हरियाणा के दक्षिण-पूर्वी भाग में जाटों का उदय एक ऐतिहासिक घटना मानी जाती है। वीर गोकुला ने औरंगजेब के शासनकाल के दौरान जाटों को एकजुट किया और उन्होंने 1669 ईस्वी में विद्रोह कर दिया। 1670 ईस्वी में, गोकुला की मृत्यु के बाद राजाराम ने जाटों का नेतृत्व संभाला। गोकुला की तरह, राजाराम ने भी मुगलों का विरोध किया। 1688 ईस्वी में, राजाराम के नेतृत्व में जाट सैनिकों ने अकबर की मज़ार पर हमला किया और उसे नष्ट कर दिया, लेकिन राजाराम मुगलों द्वारा मारा गया। राजाराम के बाद उसका भतीजा चूड़ामन उसका उत्तराधिकारी बना। मुगल शासक औरंगजेब की मृत्यु के बाद, मुगल शासक बहादुर शाह ने चूड़ामन के नेतृत्व में जाटों के राजनीतिक अस्तित्व को स्वीकार कर लिया और भरतपुर राज्य को भी मान्यता दी। चूड़ामन की मृत्यु (20 अक्टूबर, 1721) के बाद, उसके पुत्र बदन सिंह ने भरतपुर राज्य को मजबूत किया और सूरजमाल ने भरतपुर के गौरवशाली राज्य को उत्कृष्ट बनाया। सूरजमाल को जाटों का प्लेटो कहा जाता है। अपनी ताकत और क्षमता के कारण, सूरजमाल ने मेवात, रोहतक और झज्जर जैसे प्रमुख क्षेत्रों पर भरतपुर का झंडा फहराया। 12 दिसंबर, 1763 को सूरजमाल ने अपने पुत्र जवाहर सिंह की मदद से फर्रुखनगर के किले पर कब्जा कर लिया। फर्रुखनगर किले पर विजय प्राप्त करने के बाद, सूरजमाल ने मुगल कमांडर नजीब-उद-दौला पर हमला किया, लेकिन सूरजमाल इस युद्ध में मारा गया। जवाहर सिंह ने सूरजमाल के बाद जाट साम्राज्य की बागडोर संभाली, लेकिन उसके समय में, मेवात, फर्रुखनगर, झज्जर, भरतपुर साम्राज्य से अलग हो गए। जवाहर सिंह की मृत्यु के बाद, नवल सिंह ने भरतपुर साम्राज्य की जिम्मेदारी संभाली, लेकिन तब तक भरतपुर साम्राज्य अपने पतन की ओर बढ़ चुका था।",
        contentEnglish: "During the Mughal rule, the rise of Jats in the Southern-Eastern part of Haryana is considered a historical event. Veer Gokula unified the Jats during Aurangzeb's reign and they revolted in 1669 AD. In 1670 AD, Rajaram took over the leadership of Jats after the death of Gokula. Like Gokula, Rajaram also opposed the Mughals. In 1688 AD, Jat soldiers led by Rajaram attacked Akbar's Tomb and destroyed it, but Rajaram got killed by the Mughals. After Rajaram his nephew Chudaman became his successor. After the death of the Mughal ruler Aurangzeb, the Mughal ruler Bahadur Shah accepted the political existence of the Jats under the leadership of Chudaman and also gave recognition to the state of Bharatpur. After Chudaman's death (20th October, 1721), his son Badan Singh consolidated the Bharatpur kingdom and Surajmal excelled the glorious kingdom of Bharatpur. Surajmal is known as Plato of Jats. Due to his strength and ability, Surajmal hoisted the flag of Bharatpur on prominent areas like Mewat, Rohtak and Jhajjar. On 12th December, 1763 Surajmal, with the help of his son Jawahar Singh, took over the fort of Farrukhnagar. After conquering the Farrukhnagar Fort, Surajmal attacked the Mughal Commander Najibad-Daulah, but Surajmal was killed in this war. Jawahar Singh took over the Jat Empire after Surajmal, but in his time, Mewat, Farrukhnagar, Jhajjar, Bharatpur were separated from the empire. After the death of Jawahar Singh, Nawal Singh took over the responsibility of the Bharatpur Empire, but by that time the Bharatpur Empire had moved towards its downfall."
    };

    // Third Battle of Panipat
    const thirdBattlePanipat = {
        titleHindi: "पानीपत का तृतीय युद्ध (1761 ईस्वी)",
        titleEnglish: "Third Battle of Panipat (1761 AD)",
        contentHindi: "मराठा सेनाओं ने 1 नवंबर, 1760 ईस्वी को पानीपत को घेर लिया और मराठा सरदार सदाशिव राव भाऊ और विश्वास राव भी अपनी सेनाओं के साथ वहां आए। 14 जनवरी, 1761 ईस्वी को, पानीपत का तृतीय युद्ध अफगान आक्रमणकारी अहमद शाह अब्दाली और मराठा सेनाओं के बीच हुआ। इस युद्ध में, मराठों के कमांडर सदाशिव राव भाऊ थे। इस युद्ध में मराठा सैनिक पराजित हुए। इस युद्ध के बाद, मराठा साम्राज्य का पतन शुरू हुआ। अफगानिस्तान लौटने से पहले, अब्दाली ने जींद, अंबाला, कुरुक्षेत्र और करनाल के क्षेत्र को जैन खान को सौंप दिया, जो उस समय सरहिंद के गवर्नर थे। शेष अन्य क्षेत्रों पर मुगल कमांडर नजीब ने कब्जा कर लिया। हरियाणा का काला अंब स्थल पानीपत के तृतीय युद्ध से संबंधित है।",
        contentEnglish: "Maratha forces besieged Panipat on 1st November, 1760 AD and Maratha chieftain Sadashiv Rao Bhau and Vishwas Rao also came there with their forces. On 14th January, 1761 AD, the third Battle of Panipat took place between the Afghan invader Ahmad Shah Abdali and the Maratha forces. In this war, the Commander of the Marathas was Sadashiv Rao Bhau. Maratha soldiers were defeated in this battle. After this battle, the decline of the Maratha Empire started. Before returning to Afghanistan, Abdali handed over the area of Jind, Ambala, Kurukshetra and Karnal to Zain Khan, who was the then Governor of Sirhind. The remaining other areas were occupied by Mughal Commander Najib. Kala Amb site of Haryana is associated with the Third Battle of Panipat."
    };

    // George Thomas
    const georgeThomas = {
        titleHindi: "जॉर्ज थॉमस और हरियाणा राज्य",
        titleEnglish: "George Thomas and Haryana State",
        contentHindi: "उनका जन्म 1756 ईस्वी में आयरलैंड के एक साधारण परिवार में हुआ था। 1782 ईस्वी में, जॉर्ज थॉमस एक नाविक के रूप में मद्रास (वर्तमान चेन्नई) पहुंचे। भारत आने के बाद, उन्हें निज़ाम द्वारा एक तोपची के रूप में नियुक्त किया गया। जॉर्ज थॉमस एक आयरिश किराए का सैनिक था। उसे हरियाणा में जहाजी साहब के नाम से भी जाना जाता है। उसने 1787 ईस्वी में सरधना (मेरठ) की बेगम समरू की सैन्य टुकड़ी में शामिल हो गया और उसकी बेटी से शादी कर ली, जिसके बाद उसे तप्पल की जागीर सौंपी गई। 1793 ईस्वी में, उसने ग्वालियर राज्य के महाराजा महादजी सिंधिया के अधीन एक मराठा सरदार अप्पा खंडे राव के लिए काम किया। उसे तब मेवात प्रांत की जिम्मेदारी दी गई। इसके बाद, खंडे राव ने उसे झज्जर-पटौदी की जागीर का प्रशासक बना दिया। इसके बाद, पानीपत, सोनीपत और करनाल के परगने भी जॉर्ज थॉमस को जागीर के रूप में सौंप दिए गए। जागीरें प्राप्त करने के बाद, उसकी महत्वाकांक्षा और बढ़ गई और उसने एक स्वतंत्र राज्य स्थापित कर लिया। 1794 ईस्वी में, उसने बहादुरगढ़ और झज्जर को लूट लिया। 1794 ईस्वी में साहिब कौर (भाग सिंह की बहन) के आह्वान पर, पटियाला, नाभा, थानेसर और लाडवा की संयुक्त सेनाओं ने जॉर्ज थॉमस को जींद छोड़ने के लिए मजबूर कर दिया और थॉमस हांसी लौट आया। उसने पटियाला को लूटा और सिरसा के भट्टियों को हराया। जॉर्ज थॉमस के बढ़ते प्रभाव से मराठे, पारो और सिख हैरान थे। वे सभी एकजुट हुए और जॉर्ज थॉमस को झज्जर के पास घेर लिया लेकिन वह भागने में सफल रहा। 1797 ईस्वी में, जॉर्ज थॉमस ने हांसी किले को अपनी राजधानी बनाया। इसके अलावा, उसने गुरुग्राम, रोहतक, सोनीपत, हिसार और भिवानी के बड़े हिस्सों पर कब्जा कर लिया। जॉर्ज थॉमस द्वारा गठित राज्य में 14 परगने और 253 गाँव शामिल थे। इसके अलावा, मराठों ने जॉर्ज थॉमस को 5 परगने भी दिए जिनमें 151 गाँव शामिल थे। 1798 ईस्वी तक, जॉर्ज थॉमस के पास 800 गाँव थे। उसने तब हांसी, हिसार, भिवानी, फतेहाबाद और जॉर्जगढ़ (जहाजगढ़) के गाँवों पर कब्जा कर लिया, और कुल मिलाकर लगभग 1200 गाँव उसके पास थे। उसने हांसी में एक टकसाल स्थापित की और 'सिक्का-ए-साहिब' के नाम से सिक्के जारी किए। एक स्वतंत्र राज्य स्थापित करने और उसका विस्तार करने के उद्देश्य से, जॉर्ज थॉमस ने 1798 ईस्वी में जींद के सिख शासक महाराजा भाग सिंह पर हमला किया। जॉर्ज थॉमस सिखों का सामना नहीं कर सका और उसे जींद से पीछे हटना पड़ा, लेकिन अपनी जिद्दी प्रकृति के कारण, उसने फिर से हमला किया और जींद पर कब्जा कर लिया। नरनौंद की लड़ाई मार्च 1799 ईस्वी में सिखों और हांसी के शासक जॉर्ज थॉमस के बीच हांसी और जींद के बीच स्थित नरनौंद गाँव में हुई। जनवरी, 1801 ईस्वी में, जॉर्ज थॉमस ने फ्रांसीसी जनरल बौगेन के सामने आत्मसमर्पण कर दिया। बौगेन ने जॉर्ज थॉमस के पूरे राज्य पर अपनी संप्रभुता स्थापित कर ली और उसे ब्रिटिश भारत में प्रवेश करने की अनुमति दे दी। जॉर्ज थॉमस की मृत्यु 1802 ईस्वी में बहरामपुर के पास हुई।",
        contentEnglish: "He was born in 1756 AD in Ireland in a simple family. In 1782 AD, George Thomas reached Madras (presently Chennai) as a sailor. After coming to India, he was appointed as an artillerist by Nizam. George Thomas was an Irish mercenary. He is also known as Jahazi Sahib in Haryana. He joined the military force of Begum Samru of Sardhana (Meerut) in 1787 AD and married her daughter, after which he was handed over the estate of Tappal. In 1793 AD, he worked for Appa Khande Rao, a Maratha Chieftain under Maharaja Mahadji Scindia of Gwalior state. He was then given the responsibility of Mewat Province. Thereafter, Khande Rao made him the administrator of the Jagir of Jhajjar-Pataudi. After this, the Parganas of Panipat, Sonipat and Karnal were also handed over to George Thomas as Jagirs. After attaining Jagirs, his ambition increased further and he established an independent state. In 1794 AD, he plundered Bahadurgarh and Jhajjar. In 1794 AD at the call of Sahib Kaur (Bhag Singh's sister), the combined forces of Patiala, Nabha, Thanesar and Ladwa forced George Thomas to leave Jind and Thomas returned to Hansi. He plundered Patiala and defeated the Bhattis of Sirsa. Marathas, Paro and Sikhs were astonished by the growing influence of George Thomas. All of them united and trapped George Thomas near Jhajjar but he managed to escape. In 1797 AD, George Thomas made Hansi Fort as his capital. Apart from this, he occupied the large tracts of Gurugram, Rohtak, Sonipat, Hisar and Bhiwani. The state formed by George Thomas consisted of 14 Parganas and 253 villages. In addition, the Marathas also gave 5 Parganas to George Thomas which included 151 villages. By the time of 1798 AD, George Thomas had 800 villages. He then took possession of the villages of Hansi, Hisar, Bhiwani, Fatehabad and Georgegarh (Jahazgarh), and had around 1200 total villages with him. He established a mint at Hansi and introduced coins in the name of Sikka-e-Sahib. With the aim of establishing an independent kingdom and also to expand it, George Thomas attacked the Sikh ruler of Jind, Maharaja Bhag Singh in 1798 AD. George Thomas could not face the Sikhs and had to retreat from Jind, but due to his stubborn nature, he again attacked and took possession of Jind. The Battle of Narnaund took place in March 1799 AD between the Sikhs and Hansi ruler George Thomas in the village of Narnaund, situated between Hansi and Jind. In January, 1801 AD, George Thomas surrendered towards the French General Bougain. Bougain established his sovereignty over the whole kingdom of George Thomas and allowed him to enter British India. George Thomas died near Baharampur in 1802 AD."
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
                        <History className="w-4 h-4" />
                        {language === "hindi" ? "ऐतिहासिक धरोहर - हरियाणा सरकार" : "Historical Heritage - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा का" : "Medieval"} <span className="text-primary">{language === "hindi" ? "मध्यकालीन इतिहास" : "History of Haryana"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "तुर्क आक्रमण से लेकर मुगल साम्राज्य और अंग्रेजों के आगमन तक हरियाणा के समृद्ध मध्यकालीन इतिहास की संपूर्ण जानकारी, गुलाम वंश, खिलजी, तुगलक, लोदी, मुगल और जाट विद्रोह सहित"
                            : "Complete guide to Haryana's rich medieval history from Turk invasion to Mughal Empire and British arrival, including Slave Dynasty, Khilji, Tughlaq, Lodi, Mughal, and Jat revolts"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Sword className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "तुर्क आक्रमण" : "Turk Invasion"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Crown className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "गुलाम वंश" : "Slave Dynasty"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Landmark className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "मुगल साम्राज्य" : "Mughal Empire"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Crosshair className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "पानीपत के युद्ध" : "Battles of Panipat"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Turk Invasion */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Sword className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? turkInvasion.titleHindi : turkInvasion.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? turkInvasion.contentHindi : turkInvasion.contentEnglish}</p>
                    </div>

                    {/* Mahmud of Ghazni */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Crown className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? mahmudInvasion.titleHindi : mahmudInvasion.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? mahmudInvasion.contentHindi : mahmudInvasion.contentEnglish}</p>
                    </div>

                    {/* Masud and Mawdud */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? masudMawdud.titleHindi : masudMawdud.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? masudMawdud.contentHindi : masudMawdud.contentEnglish}</p>
                    </div>

                    {/* Rise of Chauhans */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? riseOfChauhans.titleHindi : riseOfChauhans.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? riseOfChauhans.contentHindi : riseOfChauhans.contentEnglish}</p>
                    </div>

                    {/* Bhadanakas */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? bhadanakas.titleHindi : bhadanakas.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? bhadanakas.contentHindi : bhadanakas.contentEnglish}</p>
                    </div>

                    {/* Conflict Bhadanakas */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? conflictBhadanakas.titleHindi : conflictBhadanakas.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? conflictBhadanakas.contentHindi : conflictBhadanakas.contentEnglish}</p>
                    </div>

                    {/* Muhammad Ghori */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? muhammadGhori.titleHindi : muhammadGhori.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? muhammadGhori.contentHindi : muhammadGhori.contentEnglish}</p>
                    </div>

                    {/* First Tarain */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? firstTarain.titleHindi : firstTarain.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? firstTarain.contentHindi : firstTarain.contentEnglish}</p>
                    </div>

                    {/* Second Tarain */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? secondTarain.titleHindi : secondTarain.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? secondTarain.contentHindi : secondTarain.contentEnglish}</p>
                    </div>

                    {/* After Second Battle */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? afterSecondTarain.titleHindi : afterSecondTarain.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? afterSecondTarain.contentHindi : afterSecondTarain.contentEnglish}</p>
                    </div>

                    {/* Sultanate Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? sultanateOverview.titleHindi : sultanateOverview.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? sultanateOverview.contentHindi : sultanateOverview.contentEnglish}</p>
                    </div>

                    {/* Slave Dynasty */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? slaveDynasty.titleHindi : slaveDynasty.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? slaveDynasty.contentHindi : slaveDynasty.contentEnglish}</p>
                    </div>

                    {/* Ilutumish */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? ilutumish.titleHindi : ilutumish.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? ilutumish.contentHindi : ilutumish.contentEnglish}</p>
                    </div>

                    {/* Razia Sultan */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? raziaSultan.titleHindi : raziaSultan.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? raziaSultan.contentHindi : raziaSultan.contentEnglish}</p>
                    </div>

                    {/* Balban */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? balban.titleHindi : balban.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? balban.contentHindi : balban.contentEnglish}</p>
                    </div>

                    {/* Khilji Dynasty */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? khiljiDynasty.titleHindi : khiljiDynasty.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? khiljiDynasty.contentHindi : khiljiDynasty.contentEnglish}</p>
                    </div>

                    {/* Alauddin Khilji */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? alauddinKhilji.titleHindi : alauddinKhilji.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? alauddinKhilji.contentHindi : alauddinKhilji.contentEnglish}</p>
                    </div>

                    {/* Tughlaq Dynasty */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? tughlaqDynasty.titleHindi : tughlaqDynasty.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? tughlaqDynasty.contentHindi : tughlaqDynasty.contentEnglish}</p>
                    </div>

                    {/* Muhammad Shah Tughlaq */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? muhammadShahTughlaq.titleHindi : muhammadShahTughlaq.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? muhammadShahTughlaq.contentHindi : muhammadShahTughlaq.contentEnglish}</p>
                    </div>

                    {/* Firoz Shah Tughlaq */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? firozShahTughlaq.titleHindi : firozShahTughlaq.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? firozShahTughlaq.contentHindi : firozShahTughlaq.contentEnglish}</p>
                    </div>

                    {/* Timur Lang */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? timurLang.titleHindi : timurLang.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? timurLang.contentHindi : timurLang.contentEnglish}</p>
                    </div>

                    {/* Lodi Dynasty */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? lodiDynasty.titleHindi : lodiDynasty.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? lodiDynasty.contentHindi : lodiDynasty.contentEnglish}</p>
                    </div>

                    {/* Babur First Panipat */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? baburFirstPanipat.titleHindi : baburFirstPanipat.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? baburFirstPanipat.contentHindi : baburFirstPanipat.contentEnglish}</p>
                    </div>

                    {/* Second Battle of Panipat */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? secondBattlePanipat.titleHindi : secondBattlePanipat.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? secondBattlePanipat.contentHindi : secondBattlePanipat.contentEnglish}</p>
                    </div>

                    {/* Jat Revolt */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? jatRevolt.titleHindi : jatRevolt.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? jatRevolt.contentHindi : jatRevolt.contentEnglish}</p>
                    </div>

                    {/* Third Battle of Panipat */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? thirdBattlePanipat.titleHindi : thirdBattlePanipat.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? thirdBattlePanipat.contentHindi : thirdBattlePanipat.contentEnglish}</p>
                    </div>

                    {/* George Thomas */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">{language === "hindi" ? georgeThomas.titleHindi : georgeThomas.titleEnglish}</h2>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? georgeThomas.contentHindi : georgeThomas.contentEnglish}</p>
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
                            {language === "hindi" ? "हरियाणा के मध्यकालीन इतिहास के बारे में" : "Common"} <span className="text-primary">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Medieval Haryana"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के मध्यकालीन इतिहास, युद्धों, शासकों और सांस्कृतिक विरासत के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's medieval history, battles, rulers, and cultural heritage"}
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
                            {language === "hindi" ? "अपने हरियाणा के मध्यकालीन इतिहास के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Medieval History of Haryana?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer">
                                {language === "hindi" ? "हरियाणा इतिहास क्विज़ लें" : "Take Haryana History Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/ancient-history" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Haryana Ancient History
                        </Link>
                        <Link href="/haryana-gk/modern-history" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                            Next Chapter: Modern History of Haryana
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा का मध्यकालीन इतिहास - संपूर्ण संदर्भ" : "Medieval History of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के मध्यकालीन इतिहास के बारे में व्यापक जानकारी प्रदान करता है जिसमें तुर्क आक्रमण, गुलाम वंश, खिलजी वंश, तुगलक वंश, लोदी वंश, मुगल साम्राज्य, पानीपत के युद्ध, जाट विद्रोह और बहुत कुछ शामिल है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about the medieval history of Haryana including Turk invasion, Slave Dynasty, Khilji Dynasty, Tughlaq Dynasty, Lodi Dynasty, Mughal Empire, Battles of Panipat, Jat revolt, and more. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK and Medieval History."}
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