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
    Map,
    Calendar,
    Building,
    Users,
    ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FormationOfHaryanaPage() {
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
            questionHindi: "हरियाणा राज्य की मांग सबसे पहले कब उठी थी?",
            questionEnglish: "When was the demand for a separate Haryana state first raised?",
            answerHindi: "हरियाणा राज्य की मांग सबसे पहले 1907 में उठी थी, जिसे लाला लाजपत राय और अरुणा आसफ अली का समर्थन प्राप्त था।",
            answerEnglish: "The demand for a separate Haryana state was first raised in 1907, which was supported by Lala Lajpat Rai and Aruna Asaf Ali."
        },
        {
            questionHindi: "हरियाणा का गठन कब और किस संशोधन के तहत हुआ?",
            questionEnglish: "When and under which amendment was Haryana formed?",
            answerHindi: "हरियाणा का गठन 1 नवंबर, 1966 को भारतीय संविधान के 18वें संशोधन (1966) के तहत भारत के 17वें राज्य के रूप में हुआ।",
            answerEnglish: "Haryana was formed as the 17th state of India on 1st November, 1966 under the 18th Amendment (1966) of the Indian Constitution."
        },
        {
            questionHindi: "हरियाणा के पहले राज्यपाल और पहले मुख्यमंत्री कौन थे?",
            questionEnglish: "Who were the first Governor and first Chief Minister of Haryana?",
            answerHindi: "हरियाणा के पहले राज्यपाल श्री धर्मवीर थे और पहले मुख्यमंत्री पंडित भगवत दयाल शर्मा थे।",
            answerEnglish: "Shri Dharamvir was the first Governor of Haryana and Pandit Bhagwat Dayal Sharma was the first Chief Minister of Haryana."
        },
        {
            questionHindi: "सच्चर फॉर्मूले के अनुसार हिंदी क्षेत्र में कौन से जिले शामिल थे?",
            questionEnglish: "Which districts were included in the Hindi area according to the Sachar Formula?",
            answerHindi: "सच्चर फॉर्मूले के अनुसार हिंदी क्षेत्र में रोहतक, हिसार, गुरुग्राम, कांगड़ा, करनाल, जगाधरी और नारायणगढ़ तहसीलें शामिल थीं।",
            answerEnglish: "According to the Sachar Formula, the Hindi area included the districts of Rohtak, Hisar, Gurugram, Kangra, Karnal, and the tehsils of Jagadhri and Naraingarh."
        },
        {
            questionHindi: "शाह आयोग के अध्यक्ष कौन थे?",
            questionEnglish: "Who was the chairman of the Shah Commission?",
            answerHindi: "शाह आयोग के अध्यक्ष सुप्रीम कोर्ट के न्यायाधीश जे.सी. शाह थे। इस आयोग का गठन 23 अप्रैल, 1966 को हुआ था।",
            answerEnglish: "The Shah Commission was headed by Supreme Court Judge JC Shah. The commission was constituted on 23rd April, 1966."
        },
        {
            questionHindi: "हरियाणा के गठन के समय कितने जिले थे और सबसे बड़ा जिला कौन सा था?",
            questionEnglish: "How many districts were there at the time of Haryana's formation and which was the largest district?",
            answerHindi: "हरियाणा के गठन के समय 7 जिले थे। सबसे बड़ा जिला हिसार (13891 वर्ग किमी) था और सबसे छोटा जिला जींद (2712 वर्ग किमी) था।",
            answerEnglish: "At the time of formation, Haryana had 7 districts. The largest district was Hisar (13891 sq km) and the smallest district was Jind (2712 sq km)."
        },
        {
            questionHindi: "पंजाब पुनर्गठन विधेयक लोकसभा में किसने पेश किया था?",
            questionEnglish: "Who introduced the Punjab Reorganisation Bill in the Lok Sabha?",
            answerHindi: "पंजाब पुनर्गठन विधेयक को तत्कालीन गृह मंत्री गुलजारीलाल नंदा ने लोकसभा में पेश किया था।",
            answerEnglish: "The Punjab Reorganisation Bill was introduced in the Lok Sabha by the then Home Minister Gulzarilal Nanda."
        },
        {
            questionHindi: "संत फतेह सिंह ने पंजाबी सूबे के लिए अनशन कब किया था?",
            questionEnglish: "When did Saint Fateh Singh go on a hunger strike for Punjabi province?",
            answerHindi: "संत फतेह सिंह ने 1965 में पंजाबी सूबे के लिए 15 दिवसीय अनशन की घोषणा की थी। युद्ध के बाद 10 अगस्त, 1965 को उन्होंने फिर से 25 दिवसीय अनशन किया।",
            answerEnglish: "Saint Fateh Singh announced a 15-day hunger strike for Punjabi province in 1965. After the war, he again announced a 25-day fast on 10th August, 1965."
        }
    ];

    // Section 1: Demand For a Separate State
    const demandSection = {
        titleHindi: "पृथक राज्य की मांग",
        titleEnglish: "Demand For a Separate State",
        contentHindi: "1857 के विद्रोह के बाद, ब्रिटिश सरकार ने वर्ष 1858 में हरियाणा राज्य के अधिकांश भाग को पंजाब प्रांत में शामिल कर लिया। हरियाणा राज्य की मांग 1907 से शुरू हुई। इस मांग को भारतीय राष्ट्रीय आंदोलन के प्रमुख नेताओं लाला लाजपत राय और अरुणा आसफ अली का समर्थन प्राप्त था। कुछ समय बाद, श्री राम शर्मा की अध्यक्षता में हरियाणा विकास समिति का गठन एक स्वायत्त हरियाणा राज्य बनाने के लिए किया गया। हालाँकि, यह प्रयास सफल नहीं रहा। हरियाणा क्षेत्र को पंजाब प्रांत से अलग करके दिल्ली में विलय करने की मांग पहली बार 1926 में अखिल भारतीय मुस्लिम लीग के दिल्ली सत्र में स्वागत समिति के अध्यक्ष पीरजादा मुहम्मद हुसैन द्वारा की गई थी। दिल्ली प्रदेश कांग्रेस समिति ने वर्ष 1928 में दिल्ली में आयोजित अखिल दलीय सम्मेलन में यह मांग फिर से की। दूसरे गोलमेज सम्मेलन में, जेफ्री कॉर्बेट ने भी अंबाला डिवीजन (हरियाणा) को पंजाब से अलग करने की बात कही। गांधीजी ने भी इसका समर्थन किया। 9 दिसंबर, 1932 को, दीनबंधु गुप्ता ने भी पंजाब प्रांत से हरियाणा के एक अलग राज्य की मांग की। कांग्रेस नेता डॉ. पट्टाभी सीतारमैया ने 1946 में दिल्ली में आयोजित अखिल भारतीय भाषाई सम्मेलन में दीनबंधु गुप्ता के अलग हरियाणा के प्रस्ताव का समर्थन किया।",
        contentEnglish: "After the revolt of 1857, the British Government included much part of the state of Haryana in the Punjab province in the year 1858. Demand for separate state of Haryana was started from 1907. This demand was supported by Lala Lajpat Rai and Aruna Asaf Ali, the prominent leaders of the Indian National Movement. After some time, Haryana Development Committee was formed under the Chairmanship of Shri Ram Sharma to form an autonomous Haryana state. However, this effort was not successful. The demand for separation of Haryana region from Punjab province and merging with Delhi was made for the first time in 1926 at the Delhi Session of the All India Muslim League by the Chairman of the Swagat Committee, Pirzada Muhammad Hussain. The Delhi Region Congress Committee made this demand again at the All-Party Conference held in Delhi in the year 1928. In the Second Round Table Conference, Geoffrey Corbett also talk about separating the Ambala Division (Haryana) from Punjab. Gandhiji also supported it. On 9th December, 1932, Deenbandhu Gupta also demanded for a separate state of Haryana from the province of Punjab. Congress leader Dr Pattabhi Sitaramayya supported Deenbandhu Gupta's demand for a separate Haryana at the All-India Linguistic Conference held in 1946 in Delhi."
    };

    // Section 2: Demand For Punjab Province & Sachar Formula
    const punjabDemandSection = {
        titleHindi: "पंजाब प्रांत की मांग और सच्चर फॉर्मूला",
        titleEnglish: "Demand For Punjab Province and Sachar Formula",
        contentHindi: "15 अगस्त, 1947 को भारत की स्वतंत्रता के समय हरियाणा PEPSU (पटियाला और पूर्वी पंजाब राज्य संघ) का एक हिस्सा था। 1948 में, मास्टर तारा सिंह ने अपने अखबार 'अजीत' के माध्यम से एक सिख राज्य की मांग की। कम्युनिस्ट पार्टी PEPSU ने भी पंजाब प्रांत की मांग की, जिसे लोगों का समर्थन प्राप्त था।\n\n1 अक्टूबर, 1949 को, तत्कालीन पंजाब मुख्यमंत्री, श्री भीमसेन सच्चर ने पंजाब के भाषाई पुनर्गठन की समस्या को हल करने के लिए सच्चर फॉर्मूला पेश किया। इस फॉर्मूले के अनुसार, राज्य को दो भागों में उप-विभाजित किया गया अर्थात पंजाबी क्षेत्र और हिंदी क्षेत्र।\n\n(i) पंजाबी क्षेत्र - इसमें वर्तमान पंजाब के क्षेत्र शामिल थे - होशियारपुर, लुधियाना, अमृतसर, फिरोजपुर, पटियाला, बरनाला आदि। पंजाबी क्षेत्र की आधिकारिक भाषा पंजाबी (गुरमुखी लिपि) थी।\n(ii) हिंदी क्षेत्र - इसमें रोहतक, हिसार, गुरुग्राम, कांगड़ा, करनाल और अंबाला की जगाधरी और नारायणगढ़ तहसीलें शामिल थीं। हिंदी क्षेत्र की आधिकारिक भाषा हिंदी (देवनागरी लिपि) थी।\n\nसच्चर फॉर्मूले के अनुसार, प्री-यूनिवर्सिटी परीक्षा तक शिक्षा का माध्यम हिंदी क्षेत्र में हिंदी और पंजाबी क्षेत्र में पंजाबी था। पंजाबी क्षेत्र के प्रत्येक स्कूल में दूसरी भाषा के रूप में हिंदी पढ़ाना अनिवार्य था और हिंदी क्षेत्र के प्रत्येक स्कूल में दूसरी भाषा के रूप में पंजाबी पढ़ाना अनिवार्य था।",
        contentEnglish: "Haryana was a part of PEPSU (Patiala and East Punjab States Union) when India got its freedom on 15th August, 1947. In 1948, Master Tara Singh demanded a Sikh state through his paper 'Ajeet'. Communist party PEPSU also demanded Punjab Province which was supported by people.\n\nOn 1st October, 1949, the then Punjab Chief Minister, Shri Bhimsen Sachar introduced the Sachar Formula to solve the problem of linguistic reorganisation of Punjab. According to this formula, the state was sub-divided into two parts i.e. Punjabi area and Hindi area.\n\n(i) Punjabi Area - It included the areas that are located in present day Punjab i.e. Hoshiarpur, Ludhiana, Amritsar, Ferozepur, Patiala, Barnala, etc. The official language of Punjabi region was Punjabi (Gurmukhi script).\n(ii) Hindi Area - It included the districts of Rohtak, Hisar, Gurugram, Kangra, Karnal and the tehsils of Jagadhri (Ambala) and Naraingarh. The official language of the Hindi region was Hindi (Devanagari script).\n\nAccording to the Sachar Formula, the medium of education till pre-university examination was Hindi in Hindi region whereas Punjabi in Punjabi region. It was mandatory to teach Hindi as a second language in every school in Punjabi region and Punjabi as a second language in every school in the Hindi region."
    };

    // Section 3: State Reorganisation Commission & Regional Formula
    const srcRegionalFormula = {
        titleHindi: "राज्य पुनर्गठन आयोग और क्षेत्रीय फॉर्मूला",
        titleEnglish: "State Reorganisation Commission and Regional Formula",
        contentHindi: "29 दिसंबर, 1953 को, भारत सरकार ने भाषाई और सांस्कृतिक आधार पर राज्यों के पुनर्गठन का सुझाव देने के लिए सैयद फजल अली की अध्यक्षता में एक आयोग का गठन किया। यह आयोग सैयद फजल अली आयोग के नाम से भी जाना जाता था। आयोग ने सितंबर 1955 में अपनी रिपोर्ट प्रस्तुत की। आयोग ने भाषाई और सांस्कृतिक आधार पर राज्यों के पुनर्गठन की मांग को खारिज कर दिया। अप्रैल 1955 में हरियाणा क्षेत्र के कांग्रेस विधायक, जो राज्य की सीमा निर्धारित करने के लिए रोहतक आए थे, ने राज्य पुनर्गठन आयोग के समक्ष हरियाणा के अलग राज्य की मांग की।\n\nअप्रैल 1956 में, केंद्र सरकार ने क्षेत्रीय फॉर्मूला पेश किया। इस फॉर्मूले के अनुसार, सच्चर फॉर्मूले के प्रावधान को दोनों क्षेत्रों (हरियाणा और पंजाब) के लिए एक विधान सभा और राज्यपाल बनाने के प्रावधान के साथ और विस्तारित किया गया। 1956 में भारतीय संविधान के 7वें संशोधन के बाद, क्षेत्रीय फॉर्मूला 24 जुलाई, 1956 से लागू हुआ।\n\nक्षेत्रीय फॉर्मूले के प्रावधान:\n- पंजाब एक द्विभाषी राज्य होगा और हिंदी और पंजाबी इसकी आधिकारिक भाषाएँ होंगी।\n- पूरा राज्य दो क्षेत्रों अर्थात हिंदी क्षेत्र और पंजाबी क्षेत्र में विभाजित था।\n- दोनों क्षेत्रों में, जिलों और अन्य छोटे क्षेत्रों की अपनी अलग भाषाएँ होंगी।\n- प्रत्येक क्षेत्र के अल्पसंख्यकों को पूर्ण सुरक्षा मिलेगी।\n- केंद्र सरकार ने दोनों भाषाओं, पंजाबी और हिंदी के विकास में सहयोग करने का आश्वासन दिया।\n\nहिंदी क्षेत्र: रोहतक, गुड़गांव (गुरुग्राम), करनाल, हिसार, अंबाला, जगाधरी और नारायणगढ़ तहसीलें, महेंद्रगढ़, शिमला, कांगड़ा, कोहिस्तान (वर्तमान पटियाला) और संगरूर की जींद और नरवाना तहसीलें।\n\nपंजाबी क्षेत्र: लुधियाना, अमृतसर, होशियारपुर, जालंधर, गुरदासपुर, फिरोजपुर, रोपड़ और अंबाला की खरड़ तहसीलें, भटिंडा, कपूरथला, पटियाला, बरनाला (वर्तमान संगरूर), संगरूर और सुनाम तहसीलें और फतेहाबाद साहिब (वर्तमान पटियाला)।",
        contentEnglish: "On 29th December, 1953, the Indian Government set up a commission under the Chairmanship of Syed Fazal Ali for suggesting the reorganisation of states on linguistic and cultural basis. This commission was also known as Syed Fazal Ali Commission. The commission presented its report in September, 1955. The commission rejected the demand of reorganisation of states on linguistic and cultural basis. In April, 1955 the Congress MLAs of Haryana region, who came to Rohtak to determine the boundary of the state, demanded the separate state of Haryana before the State Reorganisation Commission.\n\nIn April 1956, the Central Government introduced the Regional Formula. According to this formula, the provision of the Sachar formula was further extended with the provision of creating a single Legislative Assembly and Governor for both the regions (Haryana and Punjab). After the 7th Amendment to the Indian Constitution in 1956, Regional Formula came into force from 24th July, 1956.\n\nProvisions of the regional formula:\n- Punjab will be a bilingual state and Hindi and Punjabi will be its official languages.\n- The entire state was divided into two regions i.e Hindi region and Punjabi region.\n- In both the regions, the districts and other small regions would have their own separate languages.\n- Minorities from each region will get complete security.\n- The Central Government assured to cooperate in the development of both the languages, Punjabi and Hindi.\n\nHindi Region: Rohtak, Gurgaon (Gurugram), Karnal, Hisar, Ambala, Jagadhri and Naraingarh tehsils, Mahendragarh, Shimla, Kangra, Kohistan (present Patiala) and Jind and Narwana tehsils of Sangrur.\n\nPunjabi Region: Ludhiana, Amritsar, Hoshiarpur, Jalandhar, Gurdaspur, Ferozepur, Ropar and Kharar tehsils of Ambala, Bhatinda, Kapurthala, Patiala, Barnala (present Sangrur), Sangrur and Sunam tehsils and Fatehabad Sahib (present Patiala)."
    };

    // Section 4: Failure of Regional Formula & Saint Fateh Singh
    const failureSection = {
        titleHindi: "क्षेत्रीय फॉर्मूले की विफलता और संत फतेह सिंह",
        titleEnglish: "Failure of Regional Formula and Saint Fateh Singh",
        contentHindi: "1956 में, तत्कालीन पंजाब मुख्यमंत्री प्रताप सिंह कैरो ने क्षेत्रीय फॉर्मूले को सफलतापूर्वक लागू नहीं किया। उन्होंने क्षेत्रीय समितियों की शक्तियों को सीमित कर दिया और उनके काम करने की स्वतंत्रता लगभग समाप्त कर दी, जिसके परिणामस्वरूप यह फॉर्मूला पूरी तरह सफल नहीं हो सका।\n\n1965 में, अकाली दल के नेता संत फतेह सिंह ने पंजाबी सूबे के लिए 15 दिवसीय अनशन की घोषणा की, जिसे हरियाणा क्षेत्र में भी प्रतिक्रिया मिली और एक अलग हरियाणा प्रांत की मांग की गई। संत फतेह सिंह ने पाकिस्तान के साथ युद्ध के कारण अपना उपवास स्थगित कर दिया। युद्ध के बाद, उन्होंने 10 अगस्त, 1965 को फिर से 25 दिवसीय उपवास की घोषणा की।\n\n23 सितंबर, 1965 को, भारत सरकार ने पंजाब के विभाजन पर विचार करने के लिए लोकसभा अध्यक्ष हुकुम सिंह की अध्यक्षता में एक संसदीय समिति का गठन किया। इस बीच, अक्टूबर 1965 में, हरियाणा के विधायकों द्वारा रोहतक में आयोजित एक बैठक में तीन प्रस्ताव पारित किए गए, जो इस प्रकार थे:\n\n(i) एक नया हिंदी भाषी राज्य बनाया जाए जिसमें पंजाब के हिंदी भाषी क्षेत्र के अलावा दिल्ली, उत्तर प्रदेश और राजस्थान के कुछ हिस्से शामिल हों।\n(ii) यदि दिल्ली, उत्तर प्रदेश और राजस्थान इस योजना पर सहमत नहीं होते हैं, तो पंजाब के हिंदी भाषी क्षेत्रों को मिलाकर एक अलग हरियाणा राज्य बनाया जाए।\n(iii) पंजाब में, पहले से निर्धारित हिंदी क्षेत्र को कम करने की अनुमति नहीं दी जाएगी।\n\n3 मार्च, 1966 को, हरियाणा संघर्ष समिति ने चौधरी देवीलाल के नेतृत्व में संत फतेह सिंह से मुलाकात की। अंततः, हुकुम सिंह समिति ने पंजाब के पुनर्गठन को स्वीकार किया और शाह आयोग (पंजाब सीमा आयोग) के गठन की सिफारिश की।",
        contentEnglish: "In 1956, the then Punjab Chief Minister Pratap Singh Kairo did not successfully implement the Regional Formula. He limited the powers of the regional committees and their freedom to work was almost ended, as a result of which this formula was not completely successful.\n\nIn 1965, Akali Dal leader Saint Fateh Singh announced a 15-day Hunger Strike for the Punjabi Province, which also got a response in the Haryana region and a separate Haryana Province was demanded. Saint Fateh Singh postponed his fast due to the war with Pakistan. After the war, he again announced a 25-day fast on 10th August, 1965.\n\nOn 23rd September 1965, the Government of India constituted a Parliamentary Committee under the Chairmanship of Lok Sabha Speaker Hukum Singh to consider the partition of Punjab. Meanwhile, in October 1965, three resolutions were passed in a meeting organised by the MLAs of Haryana in Rohtak, which were as follows:\n\n(i) A new Hindi speaking state should be created in which in addition to Hindi speaking area of Punjab, some parts of Delhi, Uttar Pradesh and Rajasthan should be included.\n(ii) If Delhi, Uttar Pradesh and Rajasthan do not agree on this plan, then form a separate Haryana state by joining Hindi speaking areas of Punjab.\n(iii) In Punjab, it will not be allowed to reduce the already designated Hindi area.\n\nOn 3rd March, 1966, the Haryana Sangharsh Samiti met Saint Fateh Singh under the leadership of Chaudhary Devi Lal. Finally, the Hukum Singh Committee accepted the reorganisation of Punjab and recommended the formation of the Shah Commission (Punjab Boundary Commission)."
    };

    // Section 5: Shah Commission
    const shahCommission = {
        titleHindi: "शाह आयोग (पंजाब सीमा आयोग)",
        titleEnglish: "Shah Commission (Punjab Boundary Commission)",
        contentHindi: "भारत सरकार ने 23 अप्रैल, 1966 को तीन सदस्यीय शाह आयोग का गठन किया। इसकी अध्यक्षता सुप्रीम कोर्ट के न्यायाधीश जे.सी. शाह ने की और अन्य सदस्यों में एस. दत्त और एम.एम. फिलिप शामिल थे। इस आयोग का नाम जे.सी. शाह के नाम पर शाह आयोग रखा गया।\n\nपंजाब सीमा आयोग ने 31 मई, 1966 को अपनी रिपोर्ट प्रस्तुत की, जिसमें हिंदी भाषी क्षेत्र के साथ खरड़ (चंडीगढ़ सहित), नारायणगढ़ और जगाधरी (अंबाला) तहसीलों को हरियाणा में शामिल करने का सुझाव दिया गया। एस. दत्त खरड़ और चंडीगढ़ को हरियाणा में शामिल करने के पक्ष में नहीं थे।",
        contentEnglish: "The Government of India constituted a three-member Shah Commission on 23rd April, 1966. It was headed by Supreme Court Judge JC Shah and the other members included S Dutt and MM Philip. The name of this commission was named Shah Commission after JC Shah.\n\nThe Punjab Border Commission submitted its report on 31st May, 1966, which suggested the inclusion of Kharar (including Chandigarh), Naraingarh and Jagadhri (Ambala) tehsils in Haryana along with the Hindi speaking area. S. Dutt was not in favour of including Kharar and Chandigarh in Haryana."
    };

    // Section 6: Formation of Haryana
    const formationSection = {
        titleHindi: "हरियाणा का एक नए राज्य के रूप में गठन",
        titleEnglish: "Formation of Haryana as a New State",
        contentHindi: "जे.सी. शाह के प्रस्ताव के अनुसार, भारत सरकार ने 18 सितंबर, 1966 को पंजाब पुनर्गठन विधेयक को मंजूरी दी। पंजाब पुनर्गठन विधेयक तत्कालीन गृह मंत्री गुलजारीलाल नंदा द्वारा लोकसभा में पेश किया गया था। अनुच्छेद 21 के अनुसार, यह भी निर्णय लिया गया कि हरियाणा और पंजाब के दो राज्यों का एक साझा उच्च न्यायालय होगा जिसे पंजाब और हरियाणा उच्च न्यायालय कहा जाएगा।\n\nपंजाब पुनर्गठन विधेयक की मुख्य विशेषताएं:\n\n(i) एक निर्धारित समय के भीतर एक नए राज्य का गठन किया जाएगा जिसे हरियाणा कहा जाएगा। हरियाणा के इस राज्य में पंजाब के निम्नलिखित स्थान शामिल होंगे:\n    (a) हिसार, रोहतक, गुरुग्राम, करनाल और महेंद्रगढ़\n    (b) संगरूर की नरवाना और जींद तहसीलें\n    (c) अंबाला की अंबाला, जगाधरी और नारायणगढ़ तहसीलें\n    (d) अंबाला जिले की खरड़ तहसील का पिंजौर कानूनगो सर्कल\n    (e) खरड़ तहसील के मनीमाजरा कानूनगो सर्कल के पहले खंड में शामिल अनुसूचित क्षेत्र\n\n(ii) उप-खंड (b) में उल्लिखित क्षेत्र हरियाणा राज्य में जींद नाम से एक अलग जिला बनाएगा।\n\n(iii) उप-धारा (1) के खंड (c), (d) और (e) में संदर्भित क्षेत्र हरियाणा राज्य में अंबाला जिले के रूप में जाना जाने वाला एक अलग जिला बनाएंगे।\n\nहरियाणा का गठन 1 नवंबर, 1966 को भारतीय संविधान के 18वें संशोधन (1966) के तहत भारत के 17वें राज्य के रूप में हुआ।\n\nगठन के समय, हरियाणा में सात जिले थे - हिसार, करनाल, गुरुग्राम, रोहतक, अंबाला, महेंद्रगढ़ और जींद। हरियाणा के गठन के समय, सबसे बड़ा जिला हिसार (13891 वर्ग किमी) था और सबसे छोटा जिला जींद (2712 वर्ग किमी) था।\n\nश्री धर्मवीर को हरियाणा का पहला राज्यपाल और पंडित भगवत दयाल शर्मा को हरियाणा का पहला मुख्यमंत्री बनाया गया।",
        contentEnglish: "As per proposal from JC Shah, Government of India approved Punjab Reorganisation Bill on 18th September, 1966. The Punjab Reorganisation Bill was introduced in the Lok Sabha by Gulzarilal Nanda, the then Home Minister. It was also decided as per Article 21, that the two states of Haryana and Punjab would have a common High Court called the Punjab and Haryana High Court.\n\nSalient features of the Punjab Reorganisation Bill:\n\n(i) Formation of a new state within a stipulated time which will be called as Haryana. This state of Haryana will include the following places of Punjab:\n    (a) Hisar, Rohtak, Gurugram, Karnal and Mahendragarh\n    (b) Narwana and Jind tehsils of Sangrur\n    (c) Ambala, Jagadhri and Naraingarh tehsils of Ambala\n    (d) Pinjore Kanungo Circle of Kharar tehsils of Ambala district\n    (e) The scheduled area included in first section of Manimajra Kanungo Circle of Kharar tehsils\n\n(ii) The area mentioned in sub-clause (b) shall become a separate district in the state of Haryana under the name Jind.\n\n(iii) The territories referred to in clauses (c), (d) and (e) of sub-section (1) shall form separate district to be known as Ambala district in the state of Haryana.\n\nHaryana was formed as the 17th State of India on 1st November, 1966 under the 18th Amendment (1966) of the Indian Constitution.\n\nAt the time of formation, Haryana had seven districts - Hisar, Karnal, Gurugram, Rohtak, Ambala, Mahendragarh and Jind. At the time of formation of Haryana, the largest district was Hisar (13891 sq km) and the smallest district was Jind (2712 sq km).\n\nShri Dharamvir was appointed as the first Governor of Haryana and Pandit Bhagwat Dayal Sharma was made the first Chief Minister of Haryana."
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
                        {language === "hindi" ? "हरियाणा का" : "Formation of"} <span className="text-primary">{language === "hindi" ? "एक अलग राज्य के रूप में गठन" : "Haryana as a Separate State"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "1907 में पृथक राज्य की मांग से लेकर 1 नवंबर 1966 को हरियाणा के गठन तक का संपूर्ण इतिहास - सच्चर फॉर्मूला, क्षेत्रीय फॉर्मूला, शाह आयोग और पंजाब पुनर्गठन विधेयक सहित"
                            : "Complete history of Haryana from the demand for a separate state in 1907 to its formation on 1st November 1966 - including Sachar Formula, Regional Formula, Shah Commission, and Punjab Reorganisation Bill"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "1 नवंबर 1966" : "1st November 1966"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Map className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "17वाँ राज्य" : "17th State"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Building className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "7 जिले" : "7 Districts"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Users className="w-4 h-4 text-primary" />
                            <span>{language === "hindi" ? "पहले CM: भगवत दयाल शर्मा" : "1st CM: Bhagwat Dayal Sharma"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Demand For a Separate State */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <History className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? demandSection.titleHindi : demandSection.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? demandSection.contentHindi : demandSection.contentEnglish}</p>
                    </div>

                    {/* Demand For Punjab Province & Sachar Formula */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Landmark className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? punjabDemandSection.titleHindi : punjabDemandSection.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? punjabDemandSection.contentHindi : punjabDemandSection.contentEnglish}</div>
                    </div>

                    {/* State Reorganisation Commission & Regional Formula */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Crown className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? srcRegionalFormula.titleHindi : srcRegionalFormula.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? srcRegionalFormula.contentHindi : srcRegionalFormula.contentEnglish}</div>
                    </div>

                    {/* Failure of Regional Formula & Saint Fateh Singh */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Sword className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? failureSection.titleHindi : failureSection.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? failureSection.contentHindi : failureSection.contentEnglish}</div>
                    </div>

                    {/* Shah Commission */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Crosshair className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? shahCommission.titleHindi : shahCommission.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? shahCommission.contentHindi : shahCommission.contentEnglish}</p>
                    </div>

                    {/* Formation of Haryana */}
                    <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/20 shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/30">
                                <Building className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary">{language === "hindi" ? formationSection.titleHindi : formationSection.titleEnglish}</h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{language === "hindi" ? formationSection.contentHindi : formationSection.contentEnglish}</div>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा गठन: तथ्य सारांश" : "Haryana Formation: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">1 Nov 1966</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "गठन तिथि" : "Formation Date"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">17वाँ</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "भारत का राज्य" : "State of India"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">18वाँ संशोधन</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "संवैधानिक संशोधन" : "Constitutional Amendment"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">7</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "गठन के समय जिले" : "Districts at Formation"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">हिसार</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सबसे बड़ा जिला (13891 वर्ग किमी)" : "Largest District (13891 sq km)"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-5 border text-center">
                            <div className="text-3xl font-bold text-primary mb-2">जींद</div>
                            <p className="text-sm text-muted-foreground">{language === "hindi" ? "सबसे छोटा जिला (2712 वर्ग किमी)" : "Smallest District (2712 sq km)"}</p>
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
                            {language === "hindi" ? "हरियाणा के गठन के बारे में" : "Common"} <span className="text-primary">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Haryana Formation"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा के गठन, राज्य पुनर्गठन आयोग, शाह आयोग और संबंधित ऐतिहासिक घटनाओं के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's formation, State Reorganisation Commission, Shah Commission, and related historical events"}
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
                            {language === "hindi" ? "अपने हरियाणा के गठन के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Formation of Haryana?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer">
                                {language === "hindi" ? "हरियाणा इतिहास क्विज़ लें" : "Take Haryana History Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/modern-history" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Haryana Modern History
                        </Link>
                        <Link href="/haryana-gk/geographical-structure" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                            Next Chapter: Geographical Structure of Haryana
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा का गठन - संपूर्ण संदर्भ" : "Formation of Haryana - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा के गठन के बारे में व्यापक जानकारी प्रदान करता है जिसमें पृथक राज्य की मांग, सच्चर फॉर्मूला, क्षेत्रीय फॉर्मूला, राज्य पुनर्गठन आयोग, शाह आयोग, पंजाब पुनर्गठन विधेयक और 1 नवंबर 1966 को हरियाणा का गठन शामिल है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about the formation of Haryana including demand for a separate state, Sachar Formula, Regional Formula, State Reorganisation Commission, Shah Commission, Punjab Reorganisation Bill, and the formation of Haryana on 1st November 1966. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
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