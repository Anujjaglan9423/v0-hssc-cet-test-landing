"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, BookOpen, Scale
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

// Each entry = one PDF page, with content restructured into paragraph blocks.
interface TopicBlock {
    heading: string          // e.g. "REC–PFC Merger"
    headingHi: string
    paragraphs: { en: string; hi: string }[]
}
interface ChapterPage {
    number: number
    title: string
    blocks: TopicBlock[]
}

// ---------------------------------------------------------------------------
// CONTENT: transcribed from the supplied PDF (pp. 113–132), re-flowed into
// paragraphs. The PDF's embedded Hindi font has imperfect Unicode mappings,
// so Hindi should be proofread before publishing.
// ---------------------------------------------------------------------------
const chapterPages: ChapterPage[] = [
  {
    number: 113,
    title: "REC–PFC Merger, Vinimay & Zojila Tunnel",
    blocks: [
      {
        heading: "REC and PFC Merger",
        headingHi: "आरईसी (REC) और पीएफसी (PFC) का विलय",
        paragraphs: [
          {
            en: "President Droupadi Murmu recently approved the merger of the Maharatna company REC Limited into Power Finance Corporation (PFC). The objective of the merger is to establish a large power-sector financing institution, strengthen lending capabilities and improve operational efficiency.",
            hi: "राष्ट्रपति द्रौपदी मुर्मू ने हाल ही में महारत्न कंपनी REC लिमिटेड के पावर फाइनेंस कॉर्पोरेशन (PFC) में विलय को मंजूरी दी। इस विलय का उद्देश्य ऊर्जा क्षेत्र के लिए एक बड़ी वित्तपोषण संस्था का गठन, ऋण प्रदान करने की क्षमता को सुदृढ़ करना तथा परिचालन दक्षता को बढ़ाना है।"
          }
        ]
      },
      {
        heading: "Land Port Management System (LPMS) – Vinimay",
        headingHi: "लैंड पोर्ट मैनेजमेंट सिस्टम (LPMS) – विनिमय",
        paragraphs: [
          {
            en: "Union Home Minister Amit Shah inaugurated the Vinimay portal in New Delhi to modernize operations across India's land ports. It is a centralized, real-time platform that acts as a single electronic window for India's international land border ports. It integrates cargo, passenger and vehicle management into a unified digital workflow.",
            hi: "केंद्रीय गृह मंत्री अमित शाह ने नई दिल्ली में भू-सीमा बंदरगाहों के संचालन को आधुनिक बनाने के लिए विनिमय पोर्टल का उद्घाटन किया। यह भारत के अंतरराष्ट्रीय भू-सीमा बंदरगाहों के लिए एक केंद्रीकृत, रियल-टाइम प्लेटफॉर्म है जो सिंगल इलेक्ट्रॉनिक विंडो के रूप में कार्य करता है। यह कार्गो, यात्री और वाहन प्रबंधन को एक एकीकृत डिजिटल वर्कफ़्लो में जोड़ता है।"
          },
          {
            en: "Land ports, also known as Integrated Check Posts (ICPs) — such as Wagah-Attari in Punjab — handle the movement of trucks, freight trains and passenger vehicles across land borders. In contrast, seaports such as Mumbai handle ships along the coast.",
            hi: "भू-बंदरगाह (लैंड पोर्ट), जिन्हें एकीकृत चेक पोस्ट (ICPs) भी कहा जाता है — जैसे पंजाब में वाघा-अटारी — भूमि सीमाओं के पार ट्रकों, मालगाड़ियों और यात्री वाहनों की आवाजाही को संभालते हैं। इसके विपरीत, मुंबई जैसे समुद्री बंदरगाह तटीय क्षेत्रों में जहाजों का संचालन करते हैं।"
          }
        ]
      },
      {
        heading: "Zojila Tunnel Project",
        headingHi: "ज़ोजिला सुरंग परियोजना",
        paragraphs: [
          {
            en: "Union Minister Nitin Gadkari inaugurated the breakthrough of the main tunnel at the eastern portal of the Zojila Tunnel Project in Minamarg, Kargil. The project is a nearly 14-km-long tunnel being constructed between Baltal and Minamarg on National Highway-1. It will enable all-weather connectivity between Jammu & Kashmir and Ladakh.",
            hi: "केंद्रीय मंत्री नितिन गडकरी ने कारगिल के मिनामार्ग में ज़ोजिला सुरंग परियोजना के पूर्वी पोर्टल पर मुख्य सुरंग के ब्रेकथ्रू का उद्घाटन किया। यह राष्ट्रीय राजमार्ग-1 पर बालटाल और मिनामार्ग के बीच निर्मित लगभग 14 किमी लंबी सुरंग है। यह परियोजना जम्मू-कश्मीर और लद्दाख के बीच वर्षभर संपर्क (all-weather connectivity) सुनिश्चित करेगी।"
          }
        ]
      }
    ]
  },
  {
    number: 114,
    title: "Zojila Execution, Coal-to-Ammonium Nitrate & Footpath Rights",
    blocks: [
      {
        heading: "Zojila Tunnel — Execution",
        headingHi: "ज़ोजिला सुरंग — क्रियान्वयन",
        paragraphs: [
          {
            en: "The Zojila Tunnel is being executed by NHIDCL (National Highways & Infrastructure Development Corporation Limited).",
            hi: "इसका क्रियान्वयन NHIDCL (नेशनल हाईवेज़ एंड इंफ्रास्ट्रक्चर डेवलपमेंट कॉर्पोरेशन लिमिटेड) द्वारा किया जा रहा है।"
          }
        ]
      },
      {
        heading: "India's First Commercial-Scale Coal-to-Ammonium Nitrate Project",
        headingHi: "भारत का पहला कमर्शियल-स्केल कोयले से अमोनियम नाइट्रेट बनाने का प्रोजेक्ट",
        paragraphs: [
          {
            en: "Prime Minister Narendra Modi laid the foundation stone for India's first commercial-scale coal-to-ammonium nitrate project at Lakhanpur in Odisha's Jharsuguda district. The project cost is ₹25,016 crore. It is India's first commercial-scale industrial facility designed to convert raw domestic coal into ammonium nitrate, and it aligns with the National Coal Gasification Mission, which aims to gasify 100 million tonnes of coal by 2030.",
            hi: "प्रधानमंत्री नरेंद्र मोदी ने ओडिशा के झारसुगुडा जिले के लखनपुर में भारत की पहली व्यावसायिक-स्तर की कोल-टू-अमोनियम नाइट्रेट परियोजना की आधारशिला रखी। परियोजना लागत ₹25,016 करोड़ है। यह भारत की पहली व्यावसायिक-स्तर की औद्योगिक सुविधा है, जिसे घरेलू कच्चे कोयले को अमोनियम नाइट्रेट में बदलने के लिए विकसित किया जा रहा है। यह परियोजना राष्ट्रीय कोयला गैसीकरण मिशन के अनुरूप है, जिसका लक्ष्य 2030 तक 100 मिलियन टन कोयले का गैसीकरण करना है।"
          }
        ]
      },
      {
        heading: "Right to Walk on Footpaths",
        headingHi: "फुटपाथ पर चलने का अधिकार",
        paragraphs: [
          {
            en: "The Supreme Court has recognised walking on demarcated footpaths as a fundamental right. The judiciary linked this privilege directly to the freedom of movement guaranteed under Article 19(1)(d), and the Court also connected it with Articles 19(1)(a), 19(1)(b), 19(1)(c) and Article 21. The ruling explicitly states that the safety of pedestrians on walkways holds legal precedence over vehicular traffic.",
            hi: "सुप्रीम कोर्ट ने निर्धारित फुटपाथों पर सुरक्षित रूप से चलने को मौलिक संवैधानिक अधिकार माना है। न्यायपालिका ने इस अधिकार को सीधे तौर पर अनुच्छेद 19(1)(d) के तहत गारंटीकृत आवागमन की स्वतंत्रता से जोड़ा है, तथा कोर्ट ने इसे अनुच्छेद 19(1)(a), 19(1)(b), 19(1)(c) और अनुच्छेद 21 से भी जोड़ा। अदालत के फैसले में स्पष्ट किया गया है कि फुटपाथों पर पैदल यात्रियों की सुरक्षा को वाहनों की आवाजाही पर कानूनी प्राथमिकता दी जाएगी।"
          }
        ]
      }
    ]
  },
  {
    number: 115,
    title: "Air Suvidha 2.0, ADR Report & Core Industries",
    blocks: [
      {
        heading: "AIR SUVIDHA 2.0",
        headingHi: "एयर सुविधा 2.0",
        paragraphs: [
          {
            en: "The Ministry of Civil Aviation and Delhi International Airport Limited (DIAL) launched AIR SUVIDHA 2.0 to automate health screening for incoming international travellers. The launch follows the WHO's declaration of the Ebola/Bundibugyo virus disease outbreak in the Democratic Republic of the Congo and Uganda as a Public Health Emergency of International Concern (PHEIC).",
            hi: "नागरिक उड्डयन मंत्रालय और दिल्ली इंटरनेशनल एयरपोर्ट लिमिटेड (DIAL) ने भारत आने वाले अंतरराष्ट्रीय यात्रियों के लिए स्वास्थ्य जांच को स्वचालित करने हेतु 'एयर सुविधा 2.0' लॉन्च किया है। यह लॉन्च विश्व स्वास्थ्य संगठन (WHO) द्वारा कांगो लोकतांत्रिक गणराज्य और युगांडा में इबोला/बुंडीबुग्यो वायरस रोग के प्रकोप को अंतरराष्ट्रीय चिंता का सार्वजनिक स्वास्थ्य आपातकाल (PHEIC) घोषित किए जाने के बाद किया गया है।"
          },
          {
            en: "It is an upgraded, fully contactless and paperless passenger health self-declaration web portal that tracks a detailed 21-day travel history, exposure risks and active symptom mapping.",
            hi: "यह एक उन्नत, पूरी तरह से संपर्क रहित (contactless) और कागज रहित यात्री स्वास्थ्य स्व-घोषणा (self-declaration) वेब पोर्टल है, जो विस्तृत 21-दिनों के यात्रा इतिहास, जोखिमों और सक्रिय लक्षणों की मैपिंग को ट्रैक करता है।"
          }
        ]
      },
      {
        heading: "ADR Report on Chief Ministers",
        headingHi: "मुख्यमंत्रियों पर ADR की रिपोर्ट",
        paragraphs: [
          {
            en: "The Association for Democratic Reforms (ADR) and National Election Watch (NEW) released a report based on the election affidavits of India's 31 serving Chief Ministers. The report found that 14 out of 31 (45%) Chief Ministers have criminal cases, while 11 out of 31 (35%) have serious criminal cases.",
            hi: "एसोसिएशन फॉर डेमोक्रेटिक रिफॉर्म्स (ADR) और नेशनल इलेक्शन वॉच (NEW) ने देश के 31 वर्तमान मुख्यमंत्रियों के चुनावी हलफनामों के विश्लेषण पर आधारित रिपोर्ट जारी की। रिपोर्ट में पाया गया कि 31 में से 14 (45%) मुख्यमंत्रियों पर आपराधिक मामले हैं, तथा 31 में से 11 (35%) पर गंभीर आपराधिक मामले हैं।"
          }
        ]
      },
      {
        heading: "Updated Index of Core Industries (ICI)",
        headingHi: "संशोधित कोर इंडस्ट्रीज़ सूचकांक (ICI)",
        paragraphs: [
          {
            en: "The Union Government released an updated series of the Index of Core Industries (ICI) with a revised base year and expanded coverage. The ICI measures the performance of India's core industrial sectors and serves as a key indicator of industrial growth. It is compiled and published monthly by the Office of Economic Adviser (OEA), Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry. The base year has been shifted from 2011–12 to 2022–23.",
            hi: "केंद्र सरकार ने नए आधार वर्ष और विस्तारित कवरेज के साथ कोर इंडस्ट्रीज़ सूचकांक (ICI) की एक संशोधित श्रृंखला जारी की। कोर उद्योग सूचकांक भारत के प्रमुख औद्योगिक क्षेत्रों के प्रदर्शन को मापता है तथा औद्योगिक वृद्धि का एक महत्वपूर्ण संकेतक है। इसे वाणिज्य और उद्योग मंत्रालय के उद्योग संवर्धन और आंतरिक व्यापार विभाग (DPIIT) के अंतर्गत आर्थिक सलाहकार कार्यालय (OEA) द्वारा प्रतिमाह संकलित एवं प्रकाशित किया जाता है। आधार वर्ष 2011-12 से बदलकर 2022-23 किया गया है।"
          }
        ]
      }
    ]
  },
  {
    number: 116,
    title: "Nine Core Industries & Shakti ki Saptadhara",
    blocks: [
      {
        heading: "Nine Core Industries",
        headingHi: "नौ कोर उद्योग",
        paragraphs: [
          {
            en: "The ICI basket has expanded from 8 to 9 core industries through the addition of Iron Ore. The complete list of nine core sectors is: Electricity, Refinery Products, Steel, Crude Oil, Coal, Iron Ore, Cement, Natural Gas and Fertilizers. Electricity carries the highest weightage at 30.932%. The core industries basket accounts for 32.88% of the total weight of items included in the Index of Industrial Production (IIP).",
            hi: "लौह अयस्क (Iron Ore) को जोड़कर कोर उद्योगों की संख्या 8 से बढ़ाकर 9 कर दी गई है। नौ कोर क्षेत्रों की सूची: बिजली, रिफाइनरी उत्पाद, इस्पात, कच्चा तेल, कोयला, लौह अयस्क, सीमेंट, प्राकृतिक गैस और उर्वरक। सर्वाधिक भारांक विद्युत (Electricity) का 30.932% है। कोर उद्योगों की बास्केट, औद्योगिक उत्पादन सूचकांक (IIP) में शामिल मदों के कुल भारांक का 32.88% हिस्सा बनाती है।"
          }
        ]
      },
      {
        heading: "'Shakti ki Saptadhara' Framework for Viksit Bharat 2047",
        headingHi: "विकसित भारत 2047 के लिए 'शक्ति की सप्तधारा' फ्रेमवर्क",
        paragraphs: [
          {
            en: "On India's 80th Independence Day, the Prime Minister gave a call from the Red Fort for \"Shakti ki Saptadhara\" (Seven Streams of Strength) to take India to new heights and provide fresh momentum to the country's development over the next five to seven years. The framework identifies seven strategic pillars.",
            hi: "भारत के 80वें स्वतंत्रता दिवस पर प्रधानमंत्री ने लाल किले से भारत को नई ऊँचाइयों तक ले जाने और अगले पाँच से सात वर्षों में देश के विकास को नई गति देने के लिए \"शक्ति की सप्तधारा\" का आह्वान किया। इस रूपरेखा में सात प्रमुख रणनीतिक स्तंभों को शामिल किया गया है।"
          },
          {
            en: "1. Manufacturing Power — building complete domestic value chains with emphasis on cost competitiveness, precision and global-scale production. 2. Agriculture & Food Production — strengthening farmers through chemical-free farming, value addition and integration with global export markets.",
            hi: "1. विनिर्माण शक्ति — लागत प्रतिस्पर्धा, सटीक गुणवत्ता और वैश्विक स्तर के उत्पादन पर ध्यान देते हुए देश में संपूर्ण मूल्य श्रृंखला विकसित करना। 2. कृषि एवं खाद्य उत्पादन — रसायन-मुक्त खेती, मूल्य संवर्धन और वैश्विक निर्यात बाज़ारों से जुड़ाव के माध्यम से किसानों को सशक्त बनाना।"
          },
          {
            en: "3. Technology & Innovation — building leadership in AI, semiconductors, quantum technology and 6G, including a target of training 1 crore youth in AI. 4. Gati Shakti — expanding multimodal and high-speed infrastructure with seamless connectivity and logistics across regions.",
            hi: "3. प्रौद्योगिकी एवं नवाचार — AI, सेमीकंडक्टर, क्वांटम प्रौद्योगिकी और 6G में नेतृत्व हासिल करने पर जोर, जिसमें 1 करोड़ युवाओं को AI का प्रशिक्षण देने का लक्ष्य भी शामिल है। 4. गति शक्ति — क्षेत्रों के बीच निर्बाध संपर्क और लॉजिस्टिक्स के लिए मल्टीमॉडल तथा तेज़ गति वाली ढाँचे को बढ़ावा देना।"
          },
          {
            en: "5. Defence Shakti — advancing Aatmanirbharta in modern defence equipment, including drones and hypersonic systems. 6. Green & Blue Economy — expanding renewable energy, green hydrogen and sustainable use of marine resources. 7. India's Soft Power — using India's global cultural and spiritual links, along with Ayurveda and Yoga, to strengthen cultural diplomacy and international partnerships.",
            hi: "5. रक्षा शक्ति — आधुनिक रक्षा उपकरणों, विशेषकर ड्रोन और हाइपरसोनिक प्रणालियों में आत्मनिर्भरता को बढ़ाना। 6. हरित एवं नीली अर्थव्यवस्था — नवीकरणीय ऊर्जा, हरित हाइड्रोजन और समुद्री संसाधनों के सतत उपयोग का विस्तार करना। 7. भारत की सॉफ्ट पावर — भारत के वैश्विक सांस्कृतिक एवं आध्यात्मिक संबंधों के साथ आयुर्वेद और योग का उपयोग करके सांस्कृतिक कूटनीति और अंतरराष्ट्रीय साझेदारी को मजबूत करना।"
          }
        ]
      }
    ]
  },
  {
    number: 117,
    title: "Shakti ki Saptadhara & PM CARES Fund",
    blocks: [
      {
        heading: "Shakti ki Saptadhara — Pillars 5–7 (continued)",
        headingHi: "शक्ति की सप्तधारा — स्तंभ 5–7 (क्रमशः)",
        paragraphs: [
          {
            en: "Pillar 6 (Green & Blue Economy) expands renewable energy, green hydrogen and sustainable use of marine resources. Pillar 7 (India's Soft Power) uses India's global cultural and spiritual links, along with Ayurveda and Yoga, to strengthen cultural diplomacy and international partnerships.",
            hi: "स्तंभ 6 (हरित एवं नीली अर्थव्यवस्था) नवीकरणीय ऊर्जा, हरित हाइड्रोजन और समुद्री संसाधनों के सतत उपयोग का विस्तार करता है। स्तंभ 7 (भारत की सॉफ्ट पावर) भारत के वैश्विक सांस्कृतिक एवं आध्यात्मिक संबंधों के साथ आयुर्वेद और योग का उपयोग करके सांस्कृतिक कूटनीति और अंतरराष्ट्रीय साझेदारी को मजबूत करता है।"
          }
        ]
      },
      {
        heading: "PM CARES Fund",
        headingHi: "पीएम केयर्स फंड",
        paragraphs: [
          {
            en: "The full name is Prime Minister's Citizen Assistance and Relief in Emergency Situations Fund. It was established in March 2020 as a Public Charitable Trust to address emergencies like the COVID-19 pandemic. The Prime Minister serves as the ex-officio Chairperson, alongside the Defence, Home and Finance Ministers as ex-officio Trustees.",
            hi: "इसका पूरा नाम 'प्राइम मिनिस्टर्स सिटीज़न असिस्टेंस एंड रिलीफ इन इमरजेंसी सिचुएशन फंड' है। इसे कोविड-19 महामारी जैसी आपात स्थितियों से निपटने के लिए मार्च 2020 में एक पब्लिक चैरिटेबल ट्रस्ट के रूप में स्थापित किया गया था। प्रधानमंत्री पदेन (ex-officio) अध्यक्ष के रूप में कार्य करते हैं, जबकि रक्षा, गृह और वित्त मंत्री पदेन ट्रस्टी होते हैं।"
          },
          {
            en: "The Fund is financed entirely through voluntary contributions from individuals and organisations and receives no budgetary support. Donations receive a 100% tax deduction under the Income-tax Act, 2025 (formerly Section 80G of the 1961 Act). Contributions to PM CARES qualify as Corporate Social Responsibility (CSR) expenditure under the Companies Act, 2013.",
            hi: "इस फंड का वित्तपोषण पूरी तरह व्यक्तियों और संगठनों के स्वैच्छिक योगदान से होता है तथा इसे बजटीय सहायता नहीं मिलती। आयकर अधिनियम, 2025 (पूर्व में 1961 अधिनियम की धारा 80G) के तहत दान पर 100% कर छूट मिलती है। PM CARES में किए गए योगदान कंपनियों अधिनियम, 2013 के तहत कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR) व्यय के रूप में मान्य हैं।"
          },
          {
            en: "It operates with an FCRA exemption, enabling it to accept foreign contributions through a dedicated account. PM CARES is audited by an independent auditor rather than being routinely audited by the CAG. The Union Government maintains that the trust does not qualify as a \"public authority\" under Section 2(h) of the RTI Act, 2005.",
            hi: "इसे FCRA छूट प्राप्त है, जिससे यह एक समर्पित खाते के माध्यम से विदेशी चंदा स्वीकार कर सकता है। PM CARES का लेखा-परीक्षण एक स्वतंत्र ऑडिटर द्वारा किया जाता है, न कि नियमित रूप से CAG द्वारा। केंद्र सरकार का यह मत है कि यह ट्रस्ट आरटीआई अधिनियम, 2005 की धारा 2(h) के तहत \"सार्वजनिक प्राधिकरण\" के दायरे में नहीं आता है।"
          }
        ]
      }
    ]
  },
  {
    number: 118,
    title: "National Makhana Board & Passive Euthanasia",
    blocks: [
      {
        heading: "National Makhana Board",
        headingHi: "राष्ट्रीय मखाना बोर्ड",
        paragraphs: [
          {
            en: "The National Makhana Board was announced in the Union Budget 2025–26 and formally launched in Purnea, Bihar on 15 September 2025. Its nodal ministry is the Department of Agriculture & Farmers Welfare, Ministry of Agriculture & Farmers Welfare. The government approved a Central Sector Scheme for the Development of Makhana with an outlay of ₹476.03 crore for the period 2025–26 to 2030–31.",
            hi: "राष्ट्रीय मखाना बोर्ड की घोषणा केंद्रीय बजट 2025–26 में की गई थी और इसे औपचारिक रूप से 15 सितंबर 2025 को पूर्णिया, बिहार में शुरू किया गया। इसका नोडल मंत्रालय कृषि एवं किसान कल्याण विभाग, कृषि एवं किसान कल्याण मंत्रालय है। सरकार ने 2025-26 से 2030-31 की अवधि के लिए ₹476.03 करोड़ के परिव्यय के साथ मखाना के विकास के लिए एक केंद्रीय क्षेत्र की योजना को मंजूरी दी है।"
          },
          {
            en: "Makhana is scientifically known as Euryale ferox (fox nut). It is an aquatic crop mainly cultivated in shallow ponds, lakes and wetlands, while its edible portion is the seed. It is low in calories and rich in plant-based protein, and also contains dietary fibre, antioxidants and essential minerals such as magnesium, potassium, phosphorus and iron.",
            hi: "मखाना वैज्ञानिक रूप से 'यूरियेल फेरॉक्स' (फॉक्स नट) के नाम से जाना जाता है। यह एक जलीय फसल है, जिसकी खेती मुख्य रूप से कम गहरे तालाबों, झीलों और आर्द्रभूमि (वेटलैंड्स) में की जाती है, और इसका खाने योग्य हिस्सा इसके बीज होते हैं। मखाने में कैलोरी कम होती है तथा यह प्लांट-बेस्ड प्रोटीन से भरपूर होता है; साथ ही इसमें डाइटरी फाइबर, एंटीऑक्सिडेंट और मैग्नीशियम, पोटैशियम, फॉस्फोरस और आयरन जैसे जरूरी मिनरल्स भी पाए जाते हैं।"
          },
          {
            en: "India is the world's largest producer of makhana. Bihar alone accounts for approximately 80–90% of the national output and global supply. The ICAR-National Research Centre (NRC) on Makhana is situated in Darbhanga, Bihar.",
            hi: "भारत दुनिया का सबसे बड़ा मखाना उत्पादक है। राष्ट्रीय उत्पादन और वैश्विक आपूर्ति में अकेले बिहार की हिस्सेदारी लगभग 80-90% है। ICAR-राष्ट्रीय मखाना अनुसंधान केंद्र (NRC) दरभंगा, बिहार में स्थित है।"
          }
        ]
      },
      {
        heading: "Passive Euthanasia in India",
        headingHi: "भारत में निष्क्रिय इच्छा-मृत्यु",
        paragraphs: [
          {
            en: "The Supreme Court permitted withdrawal of life-sustaining treatment in the Harish Rana case (Ghaziabad) on 11 March 2026, marking the first application of India's passive euthanasia framework in an individual case. The decision was based on the principles laid down in the 2018 Common Cause judgment, which recognised the permissibility of withdrawal or withholding of life-support medical treatment under specific safeguards.",
            hi: "उच्चतम न्यायालय ने 11 मार्च 2026 को गाजियाबाद के हरीश राणा मामले में जीवनरक्षक उपचार हटाने की अनुमति प्रदान की, जो भारत में निष्क्रिय इच्छा-मृत्यु (passive euthanasia) संबंधी ढाँचे का किसी व्यक्तिगत मामले में पहला अनुप्रयोग था। यह निर्णय 2018 के कॉमन कॉज़ (Common Cause) मामले में निर्धारित सिद्धांतों पर आधारित था, जिसमें विशेष सुरक्षा उपायों के साथ जीवनरक्षक चिकित्सा उपचार को हटाने या रोकने की अनुमति को मान्यता दी गई थी।"
          },
          {
            en: "The judgment was delivered by a Supreme Court Bench comprising Justice J.B. Pardiwala and Justice K.V. Viswanathan.",
            hi: "यह निर्णय न्यायमूर्ति जे.बी. पारदीवाला और न्यायमूर्ति के.वी. विश्वनाथन की पीठ द्वारा दिया गया।"
          }
        ]
      }
    ]
  },
  {
    number: 119,
    title: "Euthanasia Law, ANTF Conference & SEMICON India",
    blocks: [
      {
        heading: "Active vs. Passive Euthanasia",
        headingHi: "सक्रिय बनाम निष्क्रिय इच्छा-मृत्यु",
        paragraphs: [
          {
            en: "The court reiterated that Indian law permits only passive euthanasia, whereas active euthanasia remains a criminal act. In the Aruna Shanbaug Case (2011), the Supreme Court legally recognised 'Passive Euthanasia' for the very first time in India. In the Common Cause v. Union of India (2018) case, the SC ruled that the \"Right to Die with Dignity\" is a fundamental right under Article 21.",
            hi: "न्यायालय ने दोहराया कि भारतीय कानून केवल निष्क्रिय इच्छा-मृत्यु की अनुमति देता है, जबकि सक्रिय इच्छा-मृत्यु अभी भी एक आपराधिक कृत्य है। अरुणा शानबाग मामले (2011) में सर्वोच्च न्यायालय ने भारत में पहली बार 'निष्क्रिय इच्छा-मृत्यु' को कानूनी मान्यता दी। कॉमन कॉज़ बनाम भारत संघ (2018) मामले में सर्वोच्च न्यायालय ने फैसला सुनाया कि \"सम्मान के साथ मरने का अधिकार\" अनुच्छेद 21 के तहत एक मौलिक अधिकार है।"
          }
        ]
      },
      {
        heading: "3rd National Conference of Anti-Narcotics Task Force (ANTF) Heads, 2026",
        headingHi: "एंटी-नार्कोटिक्स टास्क फोर्स (ANTF) प्रमुखों का तीसरा राष्ट्रीय सम्मेलन, 2026",
        paragraphs: [
          {
            en: "Union Home and Cooperation Minister Amit Shah inaugurated the 3rd National Conference of Anti-Narcotics Task Force (ANTF) Heads in September 2026 in New Delhi. The event was organised by the Narcotics Control Bureau (NCB). Its theme was \"United Resolve, Shared Responsibility\". Under the goal of a \"Drug-Free India,\" a target has been set to completely eliminate the drug trade from India by December 31, 2029.",
            hi: "केंद्रीय गृह एवं सहकारिता मंत्री अमित शाह ने सितंबर 2026 में नई दिल्ली में एंटी-नार्कोटिक्स टास्क फोर्स (ANTF) प्रमुखों के तीसरे राष्ट्रीय सम्मेलन का उद्घाटन किया। इसका आयोजन नार्कोटिक्स कंट्रोल ब्यूरो (NCB) द्वारा किया गया था। इसका विषय \"एकजुट संकल्प, साझा जिम्मेदारी\" था। \"नशा मुक्त भारत\" के लक्ष्य के तहत भारत से 31 दिसंबर 2029 तक नशीले पदार्थों के व्यापार को पूरी तरह समाप्त करने का लक्ष्य निर्धारित किया गया है।"
          }
        ]
      },
      {
        heading: "SEMICON India 2026",
        headingHi: "सेमीकॉन इंडिया 2026",
        paragraphs: [
          {
            en: "Prime Minister Narendra Modi inaugurated the 5th edition of SEMICON India 2026 on 17 September 2026 in New Delhi. The theme was \"Silicon to Systems: Building the Ecosystem\". The event brings together global semiconductor companies, policymakers and investors to showcase and strengthen India's growing semiconductor ecosystem and technological capabilities.",
            hi: "प्रधानमंत्री नरेंद्र मोदी ने 17 सितंबर 2026 को नई दिल्ली में SEMICON India 2026 के 5वें संस्करण का उद्घाटन किया। इसका विषय \"सिलिकॉन टू सिस्टम्स: बिल्डिंग द इकोसिस्टम\" था। यह आयोजन वैश्विक सेमीकंडक्टर कंपनियों, नीति-निर्माताओं और निवेशकों को एक मंच पर लाकर भारत के बढ़ते सेमीकंडक्टर इकोसिस्टम और तकनीकी क्षमताओं को प्रदर्शित एवं मजबूत करता है।"
          }
        ]
      }
    ]
  },
  {
    number: 120,
    title: "Bharat Innovates 2026, Millet Export & India–Nepal Boundary",
    blocks: [
      {
        heading: "Bharat Innovates 2026 (International)",
        headingHi: "भारत इनोवेट्स 2026 (अंतरराष्ट्रीय)",
        paragraphs: [
          {
            en: "Prime Minister Narendra Modi and French President Emmanuel Macron jointly inaugurated Bharat Innovates 2026 in Nice, France. It is a national programme of the Ministry of Education, Government of India. The event aims to showcase India's deep-tech and innovation ecosystem before global investors and research institutions. Bharat Innovates 2026 was held under the India-France Year of Innovation.",
            hi: "प्रधानमंत्री नरेंद्र मोदी और फ्रांस के राष्ट्रपति इमैनुएल मैक्रों ने फ्रांस के नीस शहर में भारत इनोवेट्स 2026 का संयुक्त रूप से शुभारंभ किया। यह भारत सरकार के शिक्षा मंत्रालय का एक राष्ट्रीय कार्यक्रम है। यह आयोजन भारत के डीप-टेक और नवाचार परिस्थितिकी तंत्र को वैश्विक निवेशकों एवं अनुसंधान संस्थानों के समक्ष प्रदर्शित करने का लक्ष्य रखता है। भारत इनोवेट्स 2026 का आयोजन भारत-फ्रांस नवाचार वर्ष के अंतर्गत किया गया।"
          }
        ]
      },
      {
        heading: "Millet Food Export to New Zealand",
        headingHi: "न्यूजीलैंड को मिलेट खाद्य उत्पादों का निर्यात",
        paragraphs: [
          {
            en: "APEDA facilitated the first sea shipment of botanical-infused ready-to-cook millet functional foods from Karnataka to New Zealand on 3 June 2026. APEDA (Agricultural and Processed Food Products Export Development Authority) was established in 1986 and works under the Ministry of Commerce and Industry.",
            hi: "APEDA ने 3 जून 2026 को कर्नाटक से न्यूजीलैंड के लिए वनस्पति-युक्त रेडी-टू-कुक मिलेट फंक्शनल फूड्स की पहली समुद्री खेप के निर्यात को सुगम बनाया। APEDA (कृषि एवं प्रसंस्कृत खाद्य उत्पाद निर्यात विकास प्राधिकरण) की स्थापना 1986 में हुई थी और यह वाणिज्य एवं उद्योग मंत्रालय के अंतर्गत आता है।"
          }
        ]
      },
      {
        heading: "India–Nepal Boundary Issue",
        headingHi: "भारत-नेपाल सीमा विवाद",
        paragraphs: [
          {
            en: "Nepal Prime Minister Balendra (Balen) Shah recently stated in the Nepalese Parliament that border encroachments are not one-sided, indicating that both India and Nepal have occupied each other's territories in various border locations. India and Nepal share a nearly 1,850 km long open border across five Indian states: Uttarakhand, Uttar Pradesh, Bihar, West Bengal and Sikkim.",
            hi: "नेपाल के प्रधानमंत्री बालेन्द्र (बालेन) शाह ने हाल ही में नेपाली संसद में कहा कि सीमा अतिक्रमण एकतरफा नहीं है, और यह संभव है कि भारत और नेपाल दोनों ने विभिन्न सीमा स्थानों पर एक-दूसरे के क्षेत्रों पर नियंत्रण कर रखा है। भारत और नेपाल पाँच भारतीय राज्यों (उत्तराखंड, उत्तर प्रदेश, बिहार, पश्चिम बंगाल और सिक्किम) के साथ लगभग 1,850 किमी लंबी खुली सीमा साझा करते हैं।"
          },
          {
            en: "The dispute originates from the Treaty of Sugauli, 1816, which fixed the Kali/Mahakali River as Nepal's western boundary. India and Nepal interpret the source of the Kali River differently, leading to overlapping territorial claims.",
            hi: "यह सीमा विवाद 1816 की सुगौली संधि (Treaty of Sugauli) से उत्पन्न होता है, जिसने काली/महाकाली नदी को नेपाल की पश्चिमी सीमा के रूप में निर्धारित किया था। भारत और नेपाल काली नदी के उद्गम स्थल की अलग-अलग व्याख्या करते हैं, जिससे क्षेत्रीय दावे ओवरलैप होते हैं।"
          }
        ]
      }
    ]
  },
  {
    number: 121,
    title: "Nepal Border Map, EU Return Regulation & VivaTech 2026",
    blocks: [
      {
        heading: "Nepal's Political Map, 2020",
        headingHi: "नेपाल का राजनीतिक मानचित्र, 2020",
        paragraphs: [
          {
            en: "In 2020, Nepal issued a new political map officially incorporating Kalapani, Lipulekh and Limpiyadhura within its sovereign territory.",
            hi: "वर्ष 2020 में नेपाल ने एक नया राजनीतिक मानचित्र जारी किया, जिसमें कालापानी, लिपुलेख और लिम्पियाधुरा को अपने संप्रभु क्षेत्र के अंतर्गत शामिल किया गया था।"
          }
        ]
      },
      {
        heading: "The Return Regulation (EU)",
        headingHi: "रिटर्न रेगुलेशन (यूरोपीय संघ)",
        paragraphs: [
          {
            en: "The European Parliament has passed the Return Regulation, a new anti-migration law that allows European Union (EU) countries to set up offshore deportation centres or return hubs in non-EU nations. It is a major, legally binding EU framework that standardises the swift removal and offshore detention of irregular migrants who have no legal right to enter or remain within the European Union.",
            hi: "यूरोपीय संसद ने 'रिटर्न रेगुलेशन' को मंजूरी दी है, जो एक नया अप्रवासन विरोधी कानून है। यह यूरोपीय संघ (EU) के देशों को गैर-EU देशों में अपतटीय निर्वासन केंद्र (offshore deportation centres) या रिटर्न हब स्थापित करने की अनुमति देता है। यह एक प्रमुख, कानूनी रूप से बाध्यकारी EU ढाँचा है, जो उन अनियमित प्रवासियों को तेज़ी से हटाने और अपतटीय हिरासत में रखने को मानकीकृत करता है, जिन्हें यूरोपीय संघ में प्रवेश करने या रहने का कोई कानूनी अधिकार नहीं है।"
          }
        ]
      },
      {
        heading: "Viva Technology (VivaTech) 2026",
        headingHi: "वीवा टेक्नोलॉजी (वीवा टेक) 2026",
        paragraphs: [
          {
            en: "The Prime Minister of India, alongside French President Emmanuel Macron, participated in VivaTech 2026 in Paris. India participated as the designated \"AI Country Partner.\" Viva Technology (VivaTech) is Europe's largest startup and technology event and a premier global platform for digital transformation. The participation focused on showcasing India's growth in digital public infrastructure, frontier technologies and space applications.",
            hi: "भारत के प्रधानमंत्री ने फ्रांस के राष्ट्रपति इमैनुएल मैक्रों के साथ पेरिस में वीवा टेक 2026 में भाग लिया। भारत ने इस आयोजन में आधिकारिक \"AI कंट्री पार्टनर\" के रूप में भागीदारी की। वीवा टेक्नोलॉजी (वीवा टेक) यूरोप का सबसे बड़ा स्टार्टअप और प्रौद्योगिकी आयोजन है तथा डिजिटल परिवर्तन के लिए एक प्रमुख वैश्विक मंच है। इस भागीदारी का मुख्य उद्देश्य डिजिटल पब्लिक इंफ्रास्ट्रक्चर (DPI), फ्रंटियर टेक्नोलॉजीज़ (अग्रणी प्रौद्योगिकियों) और अंतरिक्ष अनुप्रयोगों के क्षेत्र में भारत की प्रगति को प्रदर्शित करना था।"
          }
        ]
      }
    ]
  },
  {
    number: 122,
    title: "BRICS Space Economy & Bonn Climate Conference",
    blocks: [
      {
        heading: "The BRICS Space Economy",
        headingHi: "ब्रिक्स अंतरिक्ष अर्थव्यवस्था",
        paragraphs: [
          {
            en: "Under India's BRICS Chairship 2026, the BRICS Heads of Space Agencies (HOSA) Meeting was held in Bengaluru. India has proposed the conceptual framework of a \"BRICS Space Economy\" to enhance space cooperation, innovation and sustainable growth among member countries. The event was hosted by the Indian Space Research Organisation (ISRO).",
            hi: "भारत की ब्रिक्स अध्यक्षता 2026 के तहत बेंगलुरु में ब्रिक्स अंतरिक्ष एजेंसियों के प्रमुखों की बैठक (BRICS HOSA Meeting) आयोजित की गई। भारत ने सदस्य देशों के बीच अंतरिक्ष सहयोग, नवाचार और सतत विकास को मजबूत करने के लिए \"ब्रिक्स अंतरिक्ष अर्थव्यवस्था\" की अवधारणा प्रस्तावित की है। इस बैठक का आयोजन भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) द्वारा किया गया।"
          }
        ]
      },
      {
        heading: "BRICS Membership & Proposed Space Council",
        headingHi: "ब्रिक्स सदस्यता एवं प्रस्तावित अंतरिक्ष परिषद",
        paragraphs: [
          {
            en: "A proposed BRICS Space Council aims to create an institutional mechanism for long-term space coordination. The BRICS grouping currently consists of 11 full member nations: Brazil, Russia, India, China, South Africa, Egypt, Ethiopia, Iran, Saudi Arabia, the United Arab Emirates (UAE) and Indonesia.",
            hi: "प्रस्तावित ब्रिक्स अंतरिक्ष परिषद का उद्देश्य दीर्घकालिक अंतरिक्ष सहयोग के लिए एक संस्थागत तंत्र बनाना है। ब्रिक्स समूह में वर्तमान में 11 पूर्ण सदस्य देश शामिल हैं: ब्राज़ील, रूस, भारत, चीन, दक्षिण अफ्रीका, मिस्र, इथियोपिया, ईरान, सऊदी अरब, संयुक्त अरब अमीरात (UAE) और इंडोनेशिया।"
          }
        ]
      },
      {
        heading: "Bonn Climate Conference 2026",
        headingHi: "बॉन जलवायु सम्मेलन 2026",
        paragraphs: [
          {
            en: "At the Bonn (Germany) Climate Conference 2026, health groups urged developed countries to raise public adaptation finance to USD 120 billion per year by 2035. Adaptation finance means money used to help vulnerable countries prepare for climate impacts like heatwaves, floods, droughts and health risks.",
            hi: "बॉन (जर्मनी) जलवायु सम्मेलन 2026 में स्वास्थ्य समूहों ने विकसित देशों से 2035 तक सार्वजनिक अनुकूलन वित्त (Public Adaptation Finance) को बढ़ाकर हर साल 120 अरब डॉलर करने की मांग की। अनुकूलन वित्त वह वित्तीय सहायता है, जिसका उपयोग कमजोर देशों को हीटवेव, बाढ़, सूखा और स्वास्थ्य जोखिमों जैसे जलवायु प्रभावों से निपटने की तैयारी में मदद देने के लिए किया जाता है।"
          },
          {
            en: "The Bonn Climate Conference refers to the annual mid-year climate negotiations held under the United Nations Framework Convention on Climate Change (UNFCCC). It serves as a technical and preparatory meeting that takes place before the formal annual COP summit.",
            hi: "बॉन जलवायु सम्मेलन संयुक्त राष्ट्र जलवायु परिवर्तन फ्रेमवर्क कन्वेंशन (UNFCCC) के तहत आयोजित होने वाली वार्षिक मध्य-वर्षीय जलवायु वार्ता को संदर्भित करता है। यह वार्षिक सीओपी (COP) शिखर सम्मेलन से पहले एक तकनीकी और तैयारी बैठक के रूप में कार्य करता है।"
          }
        ]
      }
    ]
  },
  {
    number: 123,
    title: "Operation Amistad, Flamingo Revolution & Seychelles Visit",
    blocks: [
      {
        heading: "Operation Amistad",
        headingHi: "ऑपरेशन अमिस्टैड",
        paragraphs: [
          {
            en: "India launched 'Operation Amistad' on June 26, 2026, to provide humanitarian assistance and disaster relief to earthquake-affected Venezuela. The name \"Amistad\" translates to \"Friendship\" in Spanish. The capital of Venezuela is Caracas.",
            hi: "भारत ने भूकंप प्रभावित वेनेजुएला को मानवीय सहायता और आपदा राहत प्रदान करने के लिए 26 जून 2026 को ऑपरेशन अमिस्टैड (Operation Amistad) शुरू किया। स्पैनिश भाषा में \"अमिस्टैड\" (Amistad) का अर्थ \"मित्रता\" होता है। वेनेजुएला की राजधानी काराकास है।"
          }
        ]
      },
      {
        heading: "Flamingo Revolution",
        headingHi: "फ्लेमिंगो क्रांति",
        paragraphs: [
          {
            en: "Thousands of people in Albania have launched the Flamingo Revolution against a luxury coastal resort project linked to Jared Kushner's investment group. It is a mass environmental and civil society protest movement in Albania opposing a luxury tourism project in ecologically sensitive coastal areas. The protests began in May 2026 after approval work for a coastal development project linked to Sazan Island and the Vjosa-Narta wetland.",
            hi: "अल्बानिया में हज़ारों लोगों ने जेरेड कुश्नर के निवेश समूह से जुड़ी लग्ज़री तटीय रिज़ॉर्ट परियोजना के खिलाफ फ्लेमिंगो रिवोल्यूशन (Flamingo Revolution) शुरू किया। यह अल्बानिया में चल रहा एक बड़ा पर्यावरण और नागरिक समाज आंदोलन है, जिसका उद्देश्य पारिस्थितिक रूप से संवेदनशील तटीय क्षेत्रों में एक लक्ज़री पर्यटन परियोजना का विरोध करना है। यह विरोध मई 2026 में साज़ान द्वीप (Sazan Island) और व्योसा-नार्टा वेटलैंड (Vjosa-Narta wetland) से जुड़ी तटीय विकास परियोजना की मंजूरी के बाद शुरू हुआ।"
          }
        ]
      },
      {
        heading: "State Visit of Prime Minister to Seychelles",
        headingHi: "प्रधानमंत्री की सेशेल्स की आधिकारिक यात्रा",
        paragraphs: [
          {
            en: "The Prime Minister of India undertook a State Visit to Seychelles as the Guest of Honour for its 50th National Day celebrations. The landmark visit coincided with the golden jubilee of the establishment of India–Seychelles diplomatic relations. Narendra Modi became the first Indian Prime Minister to address the National Assembly of Seychelles.",
            hi: "भारत के प्रधानमंत्री ने सेशेल्स के 50वें राष्ट्रीय दिवस समारोह में मुख्य अतिथि (Guest of Honour) के रूप में आधिकारिक यात्रा की। यह ऐतिहासिक यात्रा भारत-सेशेल्स राजनयिक संबंधों की स्थापना की 50वीं वर्षगांठ के अवसर पर आयोजित हुई। नरेंद्र मोदी सेशेल्स की नेशनल असेंबली (संसद) को संबोधित करने वाले भारत के पहले प्रधानमंत्री बने हैं।"
          },
          {
            en: "India officially handed over a 'Made in India' Fast Patrol Vessel (FPV) named PS LESPWAR to the Seychelles Coast Guard. The President of Seychelles (Dr. Patrick Herminie) conferred the highest Presidential Distinction, 'Guardian of the Blue Horizon', upon the Indian Prime Minister.",
            hi: "भारत ने सेशेल्स कोस्ट गार्ड को PS LESPWAR नामक एक 'मेड इन इंडिया' फास्ट पेट्रोल वेसल (त्वरित गश्ती पोत) आधिकारिक तौर पर सौंपा। सेशेल्स के राष्ट्रपति (डॉ. पैट्रिक हर्मिनी) ने भारतीय प्रधानमंत्री को वहाँ के सर्वोच्च राष्ट्रपति सम्मान 'गार्डियन ऑफ द ब्लू होराइज़न' (Guardian of the Blue Horizon) से सम्मानित किया।"
          }
        ]
      }
    ]
  },
  {
    number: 124,
    title: "ILO Convention No. 193 & NATO Ankara Summit",
    blocks: [
      {
        heading: "ILO Convention No. 193",
        headingHi: "ILO कन्वेंशन संख्या 193",
        paragraphs: [
          {
            en: "The International Labour Organisation (ILO) officially adopted Convention No. 193, titled \"Decent Work in the Platform Economy,\" at the 114th International Labour Conference in Geneva in June 2026. It is the world's first legally binding international treaty dedicated to protecting the rights of gig and platform workers. It lays down minimum labour standards, including fair wages, social security and workplace protections regardless of worker classification (employees, independent contractors or platform partners). India abstained from voting on ILO Convention No. 193.",
            hi: "जिनेवा में 114वें अंतर्राष्ट्रीय श्रम सम्मेलन में अंतर्राष्ट्रीय श्रम संगठन (ILO) ने जून 2026 में आधिकारिक तौर पर \"प्लेटफॉर्म अर्थव्यवस्था में सम्मानजनक कार्य (Decent Work in the Platform Economy)\" शीर्षक से कन्वेंशन संख्या 193 को अपनाया। यह गिग (Gig) एवं प्लेटफॉर्म श्रमिकों के अधिकारों की सुरक्षा के लिए दुनिया की पहली कानूनी रूप से बाध्यकारी अंतरराष्ट्रीय संधि है। यह श्रमिकों के वर्गीकरण (कर्मचारी, स्वतंत्र ठेकेदार या प्लेटफॉर्म भागीदार) की परवाह किए बिना उचित मजदूरी, सामाजिक सुरक्षा और कार्यस्थल सुरक्षा जैसे न्यूनतम श्रम अधिकार सुनिश्चित करने का प्रावधान करता है। भारत ने ILO कन्वेंशन संख्या 193 पर मतदान में भाग नहीं लिया (Abstained)।"
          },
          {
            en: "The International Labour Organization (ILO) was established in April 1919 and is headquartered in Geneva, Switzerland.",
            hi: "अंतर्राष्ट्रीय श्रम संगठन (ILO) की स्थापना अप्रैल 1919 में हुई थी और इसका मुख्यालय जिनेवा, स्विट्ज़रलैंड में है।"
          }
        ]
      },
      {
        heading: "NATO Ankara Summit 2026",
        headingHi: "नाटो अंकारा शिखर सम्मेलन 2026",
        paragraphs: [
          {
            en: "The NATO Summit 2026 was hosted in Ankara, Türkiye. Member countries endorsed the \"Hague Defence Commitment\" to increase defence expenditure to at least 5% of GDP by 2035. NATO is a collective defence alliance established in 1949, with its headquarters in Brussels, Belgium. Article 5 of the NATO Treaty states that an attack on one member is considered an attack on all members.",
            hi: "नाटो शिखर सम्मेलन 2026 का आयोजन तुर्किये के अंकारा में किया गया। सदस्य देशों ने \"हेग रक्ष प्रतिबद्धता (Hague Defence Commitment)\" का समर्थन करते हुए 2035 तक रक्षा व्यय को अपने सकल घरेलू उत्पाद (GDP) के कम-से-कम 5% तक बढ़ाने पर सहमति व्यक्त की। नाटो (NATO) 1949 में स्थापित एक सामूहिक रक्षा संगठन (Collective Defence Alliance) है, जिसका मुख्यालय ब्रुसेल्स (बेल्जियम) में स्थित है। नाटो संधि का अनुच्छेद-5 (Article 5) कहता है कि किसी एक सदस्य पर हमला सभी सदस्यों पर हमला माना जाएगा।"
          }
        ]
      }
    ]
  },
  {
    number: 125,
    title: "US–Saudi 123 Agreement & India–UK CETA",
    blocks: [
      {
        heading: "US–Saudi 123 Agreement",
        headingHi: "अमेरिका–सऊदी 123 समझौता",
        paragraphs: [
          {
            en: "The United States and Saudi Arabia signed the 123 Agreement to enhance cooperation in the peaceful uses of nuclear energy. The 123 Agreement is a civil nuclear cooperation framework under Section 123 of the U.S. Atomic Energy Act, 1954. It provides the legal framework for the United States to transfer civilian nuclear technology, reactors, nuclear material and technical expertise to partner countries for peaceful purposes. India and the United States also signed a 123 Agreement in 2008, which laid the foundation for India–US Civil Nuclear Cooperation.",
            hi: "संयुक्त राज्य अमेरिका और सऊदी अरब ने परमाणु ऊर्जा के शांतिपूर्ण उपयोग में सहयोग बढ़ाने के लिए 123 समझौते (123 Agreement) पर हस्ताक्षर किए। 123 समझौता अमेरिकी परमाणु ऊर्जा अधिनियम, 1954 (U.S. Atomic Energy Act, 1954) की धारा 123 के अंतर्गत किया जाने वाला असैन्य परमाणु सहयोग ढाँचा है। यह समझौता संयुक्त राज्य अमेरिका को शांतिपूर्ण उद्देश्यों के लिए साझेदार देशों को असैन्य परमाणु प्रौद्योगिकी (Civilian Nuclear Technology), रिएक्टर, परमाणु सामग्री तथा तकनीकी विशेषज्ञता हस्तांतरित करने का कानूनी आधार प्रदान करता है। भारत और संयुक्त राज्य अमेरिका ने भी 2008 में 123 समझौते पर हस्ताक्षर किए थे, जिसने भारत–अमेरिका असैन्य परमाणु सहयोग की आधारशिला रखी।"
          }
        ]
      },
      {
        heading: "India–UK Comprehensive Economic and Trade Agreement (CETA)",
        headingHi: "भारत–यूके व्यापक आर्थिक एवं व्यापार समझौता (CETA)",
        paragraphs: [
          {
            en: "The India-UK Comprehensive Economic and Trade Agreement (CETA) and the Double Contribution Convention (DCC) formally came into effect on 15th July 2026. Under CETA, the UK granted zero-duty access to nearly 99% of India's exports, covering almost 100% of bilateral trade value. India offered tariff concessions on 89.5% of tariff lines, covering 91% of UK exports. No duty concessions were granted to the UK on sensitive items such as dairy, agriculture, millets, apples, edible oils and gold.",
            hi: "भारत-यूके व्यापक आर्थिक और व्यापार समझौता (CETA) और दोहरा अंशदान सम्मेलन (DCC) 15 जुलाई 2026 को औपचारिक रूप से लागू हो गए। CETA के तहत, यूके ने भारत के लगभग 99% निर्यात पर शून्य-शुल्क (ड्यूटी-फ्री) पहुंच प्रदान की, जो द्विपक्षीय व्यापार मूल्य के लगभग 100% को कवर करती है। भारत ने 89.5% टैरिफ लाइनों पर शुल्क रियायतें दीं, जो यूके के 91% निर्यात को कवर करती हैं। डेयरी, कृषि, मिलेट्स, सेब, खाद्य तेल और सोने जैसी संवेदनशील वस्तुओं पर यूके को कोई शुल्क छूट नहीं दी गई।"
          },
          {
            en: "The Double Contribution Convention (DCC) benefit exempts temporary Indian workers in the UK from paying double social security/National Insurance contributions for up to 5 years (60 months).",
            hi: "दोहरा अंशदान सम्मेलन (DCC) लाभ यूके में अस्थायी भारतीय श्रमिकों को 5 वर्ष (60 महीने) तक दोहरे सामाजिक सुरक्षा/राष्ट्रीय बीमा अंशदान का भुगतान करने से छूट देता है।"
          }
        ]
      }
    ]
  },
  {
    number: 126,
    title: "WAICO, Makkah Defence Pact & BRICS NDB",
    blocks: [
      {
        heading: "World AI Cooperation Organization (WAICO)",
        headingHi: "विश्व AI सहयोग संगठन (WAICO)",
        paragraphs: [
          {
            en: "China announced the operational launch of the World AI Cooperation Organization (WAICO) during the 2026 World Artificial Intelligence Conference (WAIC) held in Shanghai. It is an independent intergovernmental organization established to promote global cooperation and governance in AI. Its headquarters is in Shanghai, China.",
            hi: "चीन ने शंघाई में आयोजित विश्व आर्टिफिशियल इंटेलिजेंस सम्मेलन 2026 (WAIC) के दौरान विश्व AI सहयोग संगठन (WAICO) के परिचालन शुभारंभ की घोषणा की। यह AI में वैश्विक सहयोग और प्रशासन (गवर्नेंस) को बढ़ावा देने के लिए स्थापित एक स्वतंत्र अंतर-सरकारी संगठन है। इसका मुख्यालय शंघाई, चीन में है।"
          }
        ]
      },
      {
        heading: "Makkah Joint Defence Agreement (MJDA)",
        headingHi: "मक्का संयुक्त रक्षा समझौता (MJDA)",
        paragraphs: [
          {
            en: "Saudi Arabia, Türkiye and Pakistan have signed the Makkah Joint Defence Agreement (MJDA) to strengthen defence and security cooperation among the three countries. The agreement was signed at Al-Safa Palace, Makkah, Saudi Arabia. It stipulates that an armed attack against any one of the three nations will be regarded as an attack against all three.",
            hi: "सऊदी अरब, तुर्किये और पाकिस्तान ने तीनों देशों के बीच रक्षा एवं सुरक्षा सहयोग को मजबूत करने के लिए मक्का संयुक्त रक्षा समझौते (Makkah Joint Defence Agreement—MJDA) पर हस्ताक्षर किए हैं। यह समझौता अल-सफा पैलेस, मक्का, सऊदी अरब में हस्ताक्षरित हुआ। यह निर्धारित करता है कि तीनों देशों में से किसी एक के खिलाफ सशस्त्र हमला तीनों पर हमला माना जाएगा।"
          }
        ]
      },
      {
        heading: "BRICS New Development Bank (NDB)",
        headingHi: "ब्रिक्स न्यू डेवलपमेंट बैंक (NDB)",
        paragraphs: [
          {
            en: "The New Development Bank (NDB), initially known as the BRICS Development Bank, was established by the founding BRICS countries to finance development projects. It was established in 2014 and became operational in July 2015. Its headquarters is in Shanghai, China. The founding members are Brazil, Russia, India, China and South Africa.",
            hi: "न्यू डेवलपमेंट बैंक (NDB), जिसे शुरुआत में BRICS Development Bank कहा जाता था, की स्थापना संस्थापक ब्रिक्स देशों ने विकास परियोजनाओं के वित्तपोषण के लिए की थी। इसकी स्थापना 2014 में हुई (2015 से परिचालन)। इसका मुख्यालय शंघाई, चीन में है। संस्थापक सदस्य ब्राज़ील, रूस, भारत, चीन और दक्षिण अफ्रीका हैं।"
          },
          {
            en: "The NDB provides loans, equity participation, guarantees and technical assistance for sustainable infrastructure and green development projects in emerging markets. All member countries have equal voting rights; no member has veto power. India's K.V. Kamath served as the bank's first elected President. The current President is Dilma Rousseff of Brazil.",
            hi: "NDB उभरते बाज़ारों में टिकाऊ बुनियादी ढाँचे और हरित विकास परियोजनाओं के लिए ऋण, इक्विटी भागीदारी, गारंटी और तकनीकी सहायता प्रदान करता है। सभी सदस्य देशों को समान मतदान अधिकार प्राप्त हैं; किसी सदस्य के पास वीटो शक्ति नहीं है। भारत के के.वी. कामथ ने बैंक के पहले निर्वाचित अध्यक्ष के रूप में कार्य किया। वर्तमान अध्यक्ष ब्राज़ील की दिल्मा रूसेफ हैं।"
          }
        ]
      }
    ]
  },
  {
    number: 127,
    title: "UNCCD COP17 & SAVE America Act",
    blocks: [
      {
        heading: "UNCCD COP17",
        headingHi: "UNCCD कॉप-17",
        paragraphs: [
          {
            en: "The 17th Conference of the Parties (COP17) to the UN Convention to Combat Desertification (UNCCD) is being held in Ulaanbaatar, Mongolia, to address the interconnected challenges of desertification, land degradation and drought. Its theme is \"Restoring Land. Restoring Hope.\" The UNCCD is the sole legally binding international agreement linking environment and development to sustainable land management. It is one of the three foundational Rio Conventions (alongside UNFCCC and CBD), formally recommended by Agenda 21 at the 1992 Earth Summit. It was adopted in Paris on 17 June 1994 and became legally effective on 26 December 1996.",
            hi: "मरुस्थलीकरण, भूमि क्षरण और सूखे की परस्पर जुड़ी चुनौतियों का समाधान करने के लिए संयुक्त राष्ट्र मरुस्थलीकरण रोकथाम अभिसमय (UNCCD) के 17वें पक्षकार सम्मेलन (COP17) का आयोजन उलानबातर, मंगोलिया में किया जा रहा है। इसका विषय \"रेस्टोरिंग लैंड, रेस्टोरिंग होप\" (Restoring Land. Restoring Hope.) है। UNCCD पर्यावरण और विकास को संधारणीय भूमि प्रबंधन से जोड़ने वाला एकमात्र कानूनी रूप से बाध्यकारी अंतरराष्ट्रीय समझौता है। यह 1992 के पृथ्वी सम्मेलन में 'एजेंडा 21' द्वारा औपचारिक रूप से अनुशंसित तीन मूलभूत 'रियो कन्वेंशन' (UNFCCC और CBD के साथ) में से एक है। इस अभिसमय को 17 जून 1994 को पेरिस में अपनाया गया और 26 दिसंबर 1996 को यह कानूनी रूप से प्रभावी हुआ।"
          }
        ]
      },
      {
        heading: "SAVE America Act",
        headingHi: "SAVE अमेरिका एक्ट",
        paragraphs: [
          {
            en: "The Safeguard American Voter Eligibility (SAVE) Act is a proposed U.S. legislation aimed at strengthening eligibility and identification requirements for voting in federal elections. It seeks to require documentary proof of U.S. citizenship (such as a U.S. passport or a birth certificate) for voter registration, and photo identification for voting, including voting through mail ballots. It introduces strict photo identification requirements for both in-person and mail-in (absentee) voting, while mandating states to identify and remove suspected non-citizens from existing voter rolls.",
            hi: "SAVE (Safeguard American Voter Eligibility) अधिनियम एक प्रस्तावित अमेरिकी कानून है, जिसका उद्देश्य संघीय चुनावों में मतदान के लिए पात्रता और पहचान संबंधी आवश्यकताओं को मजबूत करना है। यह मतदाता पंजीकरण के लिए अमेरिकी नागरिकता का दस्तावेजी प्रमाण (जैसे अमेरिकी पासपोर्ट या जन्म प्रमाण पत्र) और मतदान के लिए फोटो पहचान-पत्र अनिवार्य करने का प्रयास करता है, जिसमें डाक मतपत्र के माध्यम से मतदान भी शामिल है। यह व्यक्तिगत (in-person) और डाक (mail-in/absentee) दोनों तरह के मतदान के लिए सख्त फोटो पहचान पत्र की आवश्यकता लागू करता है, साथ ही राज्यों को मौजूदा मतदाता सूची से संदिग्ध गैर-नागरिकों की पहचान कर उन्हें हटाने का निर्देश देता है।"
          }
        ]
      }
    ]
  },
  {
    number: 128,
    title: "Raisina Dialogue 2026 & World Circular Economy Forum",
    blocks: [
      {
        heading: "Raisina Dialogue 2026",
        headingHi: "रायसीना संवाद 2026",
        paragraphs: [
          {
            en: "The 11th edition of the Raisina Dialogue was held in New Delhi in March 2026. The theme was \"Saṁskāra – Assertion, Accommodation, Advancement.\" The Chief Guest was President of Finland Dr. Alexander Stubb. The event is organised by the Observer Research Foundation (ORF) in partnership with the Ministry of External Affairs (MEA), Government of India. Raisina Dialogue is India's flagship conference on geopolitics and geo-economics, bringing together global leaders, policymakers and experts. It was instituted in 2016 and is held annually in New Delhi.",
            hi: "रायसीना संवाद के 11वें संस्करण का आयोजन मार्च 2026 में नई दिल्ली में किया गया। इसकी थीम \"संस्कार – अस्तित्व, अनुकूलन, उन्नति\" थी। मुख्य अतिथि फिनलैंड के राष्ट्रपति डॉ. अलेक्जेंडर स्टब थे। रायसीना संवाद का आयोजन ऑब्ज़र्वर रिसर्च फाउंडेशन (ORF) द्वारा विदेश मंत्रालय (MEA), भारत सरकार के सहयोग से किया जाता है। रायसीना संवाद भू-राजनीति (geopolitics) और भू-अर्थशास्त्र (geo-economics) पर भारत का प्रमुख अंतरराष्ट्रीय सम्मेलन है, जिसमें वैश्विक नेता, नीति-निर्माता और विशेषज्ञ भाग लेते हैं। इसकी शुरुआत वर्ष 2016 में हुई थी और इसका आयोजन प्रतिवर्ष नई दिल्ली में किया जाता है।"
          }
        ]
      },
      {
        heading: "World Circular Economy Forum (WCEF) 2026",
        headingHi: "विश्व सर्कुलर इकोनॉमी फोरम (WCEF) 2026",
        paragraphs: [
          {
            en: "The 10th edition of the World Circular Economy Forum (WCEF) was inaugurated on 15 September 2026 in Gandhinagar, Gujarat. It was the first edition of WCEF hosted in South Asia. The theme was \"Circular Economy: Transition for People and Prosperity.\" A circular economy aims to minimise waste and maximise resource efficiency by keeping products, materials and resources in use for as long as possible through reuse, repair, refurbishment and recycling.",
            hi: "विश्व सर्कुलर इकोनॉमी फोरम (WCEF) के 10वें संस्करण का उद्घाटन 15 सितंबर 2026 को गांधीनगर, गुजरात में किया गया। यह WCEF का दक्षिण एशिया में आयोजित होने वाला पहला संस्करण था। इसकी थीम \"सर्कुलर इकोनॉमी: लोगों और समृद्धि के लिए परिवर्तन\" थी। सर्कुलर इकोनॉमी का उद्देश्य पुनः उपयोग, मरम्मत, नवीनीकरण और रीसाइक्लिंग के माध्यम से उत्पादों, सामग्रियों और संसाधनों को अधिकतम समय तक उपयोग में बनाए रखते हुए अपशिष्ट को कम करना और संसाधन दक्षता बढ़ाना है।"
          }
        ]
      }
    ]
  },
  {
    number: 129,
    title: "Greenland Security Agreement & P4M Summit",
    blocks: [
      {
        heading: "US–Denmark–Greenland Trilateral Security Agreement, 2026",
        headingHi: "अमेरिका–डेनमार्क–ग्रीनलैंड त्रिपक्षीय सुरक्षा समझौता, 2026",
        paragraphs: [
          {
            en: "The United States, Denmark and Greenland signed a trilateral security agreement on 22 September 2026 at the United Nations Headquarters in New York to strengthen Arctic and North Atlantic security cooperation. The signatories were U.S. President Donald Trump, Danish Prime Minister Mette Frederiksen and Greenlandic Prime Minister Jens-Frederik Nielsen. The purpose is to strengthen defence cooperation in Greenland while respecting Greenland's sovereignty, territorial integrity and right to self-determination. The agreement amends and supplements the 1951 US–Denmark Defense Agreement concerning the defence of Greenland.",
            hi: "संयुक्त राज्य अमेरिका, डेनमार्क और ग्रीनलैंड ने 22 सितंबर 2026 को न्यूयॉर्क स्थित संयुक्त राष्ट्र मुख्यालय में आर्कटिक और उत्तरी अटलांटिक क्षेत्र में सुरक्षा सहयोग मजबूत करने के लिए त्रिपक्षीय सुरक्षा समझौते पर हस्ताक्षर किए। हस्ताक्षरकर्ता अमेरिकी राष्ट्रपति डोनाल्ड ट्रंप, डेनमार्क की प्रधानमंत्री मेटे फ्रेडरिक्सन और ग्रीनलैंड के प्रधानमंत्री जेन्स-फ्रेडरिक नीलसन थे। इसका उद्देश्य ग्रीनलैंड की संप्रभुता, क्षेत्रीय अखंडता और आत्मनिर्णय के अधिकार का सम्मान करते हुए रक्षा सहयोग को मजबूत करना है। यह समझौता ग्रीनलैंड की रक्षा से संबंधित 1951 के अमेरिका–डेनमार्क रक्षा समझौते में संशोधन एवं विस्तार करता है।"
          },
          {
            en: "The agreement authorizes the United States to modernize and expand its activities at the existing Pituffik Space Base (formerly Thule Air Base). Additionally, it permits the establishment of additional defence areas at Narsarsuaq (southern Greenland) and Mestersvig (eastern Greenland). Non-NATO countries cannot invest in sensitive infrastructure or establish any form of military presence on the island unless agreed by the parties. Greenland is an autonomous territory within the Kingdom of Denmark and is geographically located in the Arctic region. Its capital is Nuuk.",
            hi: "यह समझौता संयुक्त राज्य अमेरिका को मौजूदा पिटुफिक स्पेस बेस (पूर्व में थुले एयर बेस) पर अपनी गतिविधियों के आधुनिकीकरण और विस्तार के लिए अधिकृत करता है। इसके अतिरिक्त, यह दक्षिणी ग्रीनलैंड (नारसारसुआक) और पूर्वी ग्रीनलैंड (मेस्टर्सविग) में अतिरिक्त रक्षा क्षेत्रों की स्थापना की अनुमति देता है। गैर-NATO देशों को संवेदनशील बुनियादी ढाँचे में निवेश करने या द्वीप पर किसी भी प्रकार की सैन्य उपस्थिति स्थापित करने की अनुमति नहीं होगी, जब तक पक्षों द्वारा सहमति न दी जाए। ग्रीनलैंड डेनमार्क साम्राज्य के अंतर्गत एक स्वायत्त क्षेत्र है और भौगोलिक रूप से आर्कटिक क्षेत्र में स्थित है। इसकी राजधानी नूक (Nuuk) है।"
          }
        ]
      }
    ]
  },
  {
    number: 130,
    title: "P4M, V4+India & SAWEN",
    blocks: [
      {
        heading: "Partners for Multilateralism, International Law, Peace & Prosperity (P4M) Summit, 2026",
        headingHi: "पार्टनर्स फॉर मल्टीलैटरलिज्म, इंटरनेशनल लॉ, पीस एंड प्रॉस्पेरिटी (P4M) शिखर सम्मेलन, 2026",
        paragraphs: [
          {
            en: "External Affairs Minister S. Jaishankar co-chaired the inaugural Partners for Multilateralism, International Law, Peace & Prosperity (P4M) Summit on the sidelines of the 81st United Nations General Assembly (UNGA) in New York. P4M is an open and flexible platform of countries committed to strengthening multilateral cooperation, international law, peace and inclusive prosperity. The P4M initiative was originally launched as an inter-regional group by the European Union (EU), Brazil, Canada and Kenya. India, Australia and Barbados formally joined the initiative as its initial co-sponsors.",
            hi: "विदेश मंत्री एस. जयशंकर ने न्यूयॉर्क में 81वें संयुक्त राष्ट्र महासभा (UNGA) के अवसर पर आयोजित प्रथम पार्टनर्स फॉर मल्टीलैटरलिज्म, इंटरनेशनल लॉ, पीस एंड प्रॉस्पेरिटी (P4M) शिखर सम्मेलन की सह-अध्यक्षता की। P4M बहुपक्षीय सहयोग, अंतरराष्ट्रीय कानून, शांति और समावेशी समृद्धि को मजबूत करने के लिए प्रतिबद्ध देशों का एक खुला और लचीला मंच है। P4M पहल मूल रूप से यूरोपीय संघ (EU), ब्राज़ील, कनाडा और केन्या द्वारा एक अंतर-क्षेत्रीय समूह के रूप में शुरू की गई थी। भारत, ऑस्ट्रेलिया और बारबाडोस औपचारिक रूप से इसके प्रारंभिक सह-प्रायोजकों के रूप में इस पहल में शामिल हुए।"
          },
          {
            en: "A primary objective of the P4M grouping is to push for immediate and comprehensive reforms within the United Nations Security Council (UNSC) to guarantee better and more equitable representation for developing nations (the Global South). Focus areas include international law, peace, sustainable development, climate change, artificial intelligence, global health and economic cooperation.",
            hi: "P4M समूह का एक प्राथमिक उद्देश्य विकासशील देशों (ग्लोबल साउथ) के लिए बेहतर और अधिक न्यायसंगत प्रतिनिधित्व की गारंटी देने के लिए संयुक्त राष्ट्र सुरक्षा परिषद (UNSC) के भीतर तत्काल और व्यापक सुधारों पर जोर देना है। प्रमुख क्षेत्रों में अंतरराष्ट्रीय कानून, शांति, सतत विकास, जलवायु परिवर्तन, कृत्रिम बुद्धिमत्ता, वैश्विक स्वास्थ्य और आर्थिक सहयोग शामिल हैं।"
          }
        ]
      },
      {
        heading: "V4+India Foreign Ministers' Meeting, 2026",
        headingHi: "V4+भारत विदेश मंत्रियों की बैठक, 2026",
        paragraphs: [
          {
            en: "External Affairs Minister S. Jaishankar attended the first-ever V4+India Foreign Ministers' Meeting held on the sidelines of the 81st United Nations General Assembly (UNGA) in New York. India–V4 cooperation areas include trade, investment, connectivity, technology, energy and security-related discussions.",
            hi: "विदेश मंत्री एस. जयशंकर ने न्यूयॉर्क में 81वें संयुक्त राष्ट्र महासभा (UNGA) के अवसर पर आयोजित पहली V4+भारत विदेश मंत्रियों की बैठक में भाग लिया। भारत–V4 सहयोग क्षेत्रों में व्यापार, निवेश, कनेक्टिविटी, प्रौद्योगिकी, ऊर्जा और सुरक्षा से संबंधित चर्चाएँ शामिल हैं।"
          },
          {
            en: "The V4 Group (Visegrad Group) is a prominent regional, cultural and political alliance and a regional cooperation platform of four Central European countries: Czech Republic, Hungary, Poland and Slovakia. V4 was established in 1991 through the Visegrad Declaration to promote cooperation among Central European countries.",
            hi: "V4 समूह (विशेग्राद समूह) एक प्रमुख क्षेत्रीय, सांस्कृतिक और राजनीतिक गठबंधन है तथा चार मध्य यूरोपीय देशों का एक क्षेत्रीय सहयोग मंच है: चेक गणराज्य, हंगरी, पोलैंड और स्लोवाकिया। V4 की स्थापना 1991 में विशेग्राद घोषणा (Visegrad Declaration) के माध्यम से मध्य यूरोपीय देशों के बीच सहयोग को बढ़ावा देने के लिए की गई थी।"
          }
        ]
      }
    ]
  },
  {
    number: 131,
    title: "SAWEN, FAO Forestry & India–MERCOSUR PTA",
    blocks: [
      {
        heading: "First General Assembly of SAWEN & Kathmandu Declaration, 2026",
        headingHi: "SAWEN की प्रथम महासभा एवं काठमांडू घोषणा, 2026",
        paragraphs: [
          {
            en: "The first General Assembly of the South Asia Wildlife Enforcement Network (SAWEN) was held in Kathmandu, Nepal in September 2026, where member countries adopted the Kathmandu Declaration to strengthen regional cooperation against illegal wildlife trade. The Kathmandu Declaration recognises the increasingly sophisticated nature of illegal wildlife trade (IWT) as transnational organised crime and calls for stronger coordinated enforcement and criminal-justice responses. The Assembly also adopted the SAWEN Implementation Plan 2026–2030, and 30 January will be observed every year as \"SAWEN Day.\"",
            hi: "दक्षिण एशिया वन्यजीव प्रवर्तन नेटवर्क (SAWEN) की पहली महासभा सितंबर 2026 में काठमांडू, नेपाल में आयोजित हुई, जहाँ सदस्य देशों ने अवैध वन्यजीव व्यापार के विरुद्ध क्षेत्रीय सहयोग मजबूत करने के लिए काठमांडू घोषणा को अपनाया। काठमांडू घोषणा अवैध वन्यजीव व्यापार (IWT) के बढ़ते जटिल स्वरूप को अंतरराष्ट्रीय संगठित अपराध के रूप में मान्यता देते हुए समन्वित कानून-प्रवर्तन और आपराधिक न्याय की कार्रवाई को मजबूत करने पर जोर देती है। महासभा ने SAWEN कार्यान्वयन योजना 2026–2030 को भी अपनाया, और हर वर्ष 30 जनवरी को \"SAWEN दिवस\" के रूप में मनाया जाएगा।"
          },
          {
            en: "SAWEN is a regional inter-governmental wildlife law-enforcement cooperation body established in 2011 at Paro, Bhutan, with its Secretariat in Kathmandu, Nepal. Its eight member countries — Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan and Sri Lanka — are the same eight countries that constitute SAARC.",
            hi: "SAWEN दक्षिण एशिया में अवैध वन्यजीव व्यापार से निपटने के लिए एक क्षेत्रीय अंतर-सरकारी वन्यजीव कानून-प्रवर्तन सहयोग निकाय है, जिसकी स्थापना 2011 में भूटान के पारो में हुई तथा इसका सचिवालय काठमांडू, नेपाल में स्थित है। इसके आठ सदस्य देश (अफगानिस्तान, बांग्लादेश, भूटान, भारत, मालदीव, नेपाल, पाकिस्तान और श्रीलंका) वही आठ देश हैं जो SAARC के भी सदस्य हैं।"
          }
        ]
      },
      {
        heading: "28th Session of FAO Committee on Forestry (COFO 28)",
        headingHi: "FAO वानिकी समिति का 28वाँ सत्र (COFO 28)",
        paragraphs: [
          {
            en: "India highlighted its significant national achievements in sustainable forest management, ecological restoration and climate action at the 28th Session of the Food and Agriculture Organization's (FAO) Committee on Forestry (COFO 28) held in Rome, Italy. COFO is FAO's highest global intergovernmental body on forestry, providing policy dialogue, technical guidance and strategic direction on forest-related issues.",
            hi: "हाल ही में, भारत ने रोम (इटली) में आयोजित खाद्य एवं कृषि संगठन (FAO) की वानिकी समिति के 28वें सत्र (COFO 28) में टिकाऊ वन प्रबंधन, पारिस्थितिक बहाली और जलवायु कार्रवाई में अपनी महत्वपूर्ण राष्ट्रीय उपलब्धियों पर प्रकाश डाला। वानिकी समिति (COFO) वानिकी पर FAO की सर्वोच्च वैश्विक अंतर-सरकारी संस्था है, जो वन संबंधी मुद्दों पर नीतिगत संवाद, तकनीकी मार्गदर्शन और रणनीतिक दिशा प्रदान करती है।"
          },
          {
            en: "According to the FAO's latest Global Forest Resources Assessment (FRA) 2025, India ranks 9th globally in total forest area, and 3rd globally in net annual forest area gain.",
            hi: "FAO के नवीनतम वैश्विक वन संसाधन आकलन (FRA) 2025 के अनुसार, कुल वन क्षेत्र में भारत विश्व स्तर पर 9वें स्थान पर है, और शुद्ध वार्षिक वन क्षेत्र वृद्धि (net annual forest area gain) में विश्व में तीसरे स्थान पर है।"
          }
        ]
      }
    ]
  },
  {
    number: 132,
    title: "India–MERCOSUR Preferential Trade Agreement",
    blocks: [
      {
        heading: "India–MERCOSUR Preferential Trade Agreement (PTA)",
        headingHi: "भारत–MERCOSUR तरजीही व्यापार समझौता (PTA)",
        paragraphs: [
          {
            en: "Union Minister of Commerce and Industry Piyush Goyal and Uruguay's Foreign Affairs Minister Mario Lubetkin announced the launch of negotiations to expand the India–MERCOSUR Preferential Trade Agreement (PTA) on 14 September 2026. Uruguay was exercising the Pro Tempore Presidency of MERCOSUR at the time. The objective of expansion is to broaden the existing PTA into additional areas of mutual interest, deepen economic relations and create greater opportunities for the private sectors of both sides.",
            hi: "केंद्रीय वाणिज्य एवं उद्योग मंत्री पीयूष गोयल और उरुग्वे के विदेश मंत्री मारियो लुबेटकिन ने 14 सितंबर 2026 को भारत–MERCOSUR तरजीही व्यापार समझौते (PTA) के विस्तार के लिए वार्ता शुरू करने की घोषणा की। उस समय उरुग्वे के पास MERCOSUR की अस्थायी अध्यक्षता (Pro Tempore Presidency) थी। विस्तार का उद्देश्य मौजूदा PTA को पारस्परिक हित के अतिरिक्त क्षेत्रों तक करना, आर्थिक संबंधों को गहरा करना और दोनों पक्षों के निजी क्षेत्रों के लिए अधिक अवसर उत्पन्न करना है।"
          },
          {
            en: "The India–MERCOSUR PTA was signed on 25 January 2004 and entered into force on 1 June 2009. MERCOSUR (Southern Common Market) is a South American regional integration bloc established through the Treaty of Asunción in 1991. Its current active States Parties are Argentina, Bolivia, Brazil, Paraguay and Uruguay.",
            hi: "भारत–MERCOSUR PTA पर जनवरी 2004 में हस्ताक्षर हुए और यह 1 जून 2009 से प्रभावी हुआ। MERCOSUR (Southern Common Market) दक्षिण अमेरिका का एक क्षेत्रीय एकीकरण समूह है, जिसकी स्थापना 1991 की असुनसियोन संधि (Treaty of Asunción) के माध्यम से हुई। इसके वर्तमान सक्रिय सदस्य देश अर्जेंटीना, बोलीविया, ब्राज़ील, पैराग्वे और उरुग्वे हैं।"
          }
        ]
      }
    ]
  }
]

// ---------------------------------------------------------------------------
// MCQ data (unchanged)
// ---------------------------------------------------------------------------
const mcqs: MCQ[] = [
  {
    id: "chapter6-q1",
    questionEn: "According to the chapter, REC Limited was approved for merger into which company?",
    questionHi: "अध्याय के अनुसार REC लिमिटेड का विलय किस कंपनी में स्वीकृत किया गया?",
    options: [
      { key: "a", en: "NTPC", hi: "एनटीपीसी" },
      { key: "b", en: "Power Finance Corporation", hi: "पावर फाइनेंस कॉर्पोरेशन" },
      { key: "c", en: "ONGC", hi: "ओएनजीसी" },
      { key: "d", en: "BHEL", hi: "बीएचईएल" }
    ],
    correctKey: "b",
    explanationEn: "The source identifies Power Finance Corporation (PFC) as the proposed receiving company.",
    explanationHi: "स्रोत के अनुसार REC का विलय PFC में प्रस्तावित है."
  },
  {
    id: "chapter6-q2",
    questionEn: "The Zojila Tunnel project is described as connecting Baltal and Minamarg on which highway?",
    questionHi: "ज़ोजिला सुरंग परियोजना बालटाल और मिनामार्ग को किस राजमार्ग पर जोड़ती है?",
    options: [
      { key: "a", en: "NH-1", hi: "एनएच-1" },
      { key: "b", en: "NH-44 only", hi: "केवल एनएच-44" },
      { key: "c", en: "NH-27", hi: "एनएच-27" },
      { key: "d", en: "NH-48", hi: "एनएच-48" }
    ],
    correctKey: "a",
    explanationEn: "The PDF gives NH-1, Baltal–Minamarg and an approximately 14 km tunnel.",
    explanationHi: "PDF में एनएच-1, बालटाल–मिनामार्ग और लगभग 14 किमी लंबी सुरंग बताई गई है."
  },
  {
    id: "chapter6-q3",
    questionEn: "Which new base year is given in the chapter for the revised Index of Core Industries?",
    questionHi: "संशोधित कोर उद्योग सूचकांक का नया आधार वर्ष क्या बताया गया है?",
    options: [
      { key: "a", en: "2004–05", hi: "2004–05" },
      { key: "b", en: "2011–12", hi: "2011–12" },
      { key: "c", en: "2022–23", hi: "2022–23" },
      { key: "d", en: "2025–26", hi: "2025–26" }
    ],
    correctKey: "c",
    explanationEn: "The document says the ICI base shifted from 2011–12 to 2022–23.",
    explanationHi: "अध्याय में आधार वर्ष 2011–12 से 2022–23 करने की बात है."
  },
  {
    id: "chapter6-q4",
    questionEn: "Which Article is directly cited for freedom of movement in the chapter's footpath-right discussion?",
    questionHi: "फुटपाथ पर चलने के अधिकार के संदर्भ में आवागमन की स्वतंत्रता किस अनुच्छेद से जुड़ी है?",
    options: [
      { key: "a", en: "Article 14", hi: "अनुच्छेद 14" },
      { key: "b", en: "Article 19(1)(d)", hi: "अनुच्छेद 19(1)(d)" },
      { key: "c", en: "Article 32", hi: "अनुच्छेद 32" },
      { key: "d", en: "Article 368", hi: "अनुच्छेद 368" }
    ],
    correctKey: "b",
    explanationEn: "Article 19(1)(d) protects freedom of movement.",
    explanationHi: "अनुच्छेद 19(1)(d) आवागमन की स्वतंत्रता से संबंधित है."
  },
  {
    id: "chapter6-q5",
    questionEn: "Which organization executed the Zojila Tunnel project according to the PDF?",
    questionHi: "PDF के अनुसार ज़ोजिला सुरंग परियोजना का क्रियान्वयन कौन करता है?",
    options: [
      { key: "a", en: "ISRO", hi: "इसरो" },
      { key: "b", en: "NHIDCL", hi: "एनएचआईडीसीएल" },
      { key: "c", en: "SEBI", hi: "सेबी" },
      { key: "d", en: "RBI", hi: "आरबीआई" }
    ],
    correctKey: "b",
    explanationEn: "The PDF names National Highways & Infrastructure Development Corporation Limited.",
    explanationHi: "स्रोत में राष्ट्रीय राजमार्ग एवं अवसंरचना विकास निगम लिमिटेड का उल्लेख है."
  },
  {
    id: "chapter6-q6",
    questionEn: "Where does the PDF place the SAWEN Secretariat?",
    questionHi: "PDF के अनुसार SAWEN का सचिवालय कहाँ है?",
    options: [
      { key: "a", en: "New Delhi", hi: "नई दिल्ली" },
      { key: "b", en: "Paro", hi: "पारो" },
      { key: "c", en: "Kathmandu", hi: "काठमांडू" },
      { key: "d", en: "Colombo", hi: "कोलंबो" }
    ],
    correctKey: "c",
    explanationEn: "The chapter says SAWEN was established at Paro and has its Secretariat in Kathmandu.",
    explanationHi: "अध्याय में स्थापना स्थल पारो और सचिवालय काठमांडू बताया गया है."
  },
  {
    id: "chapter6-q7",
    questionEn: "Which treaty established MERCOSUR in 1991?",
    questionHi: "1991 में MERCOSUR की स्थापना किस संधि से हुई?",
    options: [
      { key: "a", en: "Treaty of Asunción", hi: "असुनसियोन संधि" },
      { key: "b", en: "Treaty of Lisbon", hi: "लिस्बन संधि" },
      { key: "c", en: "Treaty of Rome", hi: "रोम संधि" },
      { key: "d", en: "Treaty of Maastricht", hi: "मास्ट्रिख़्ट संधि" }
    ],
    correctKey: "a",
    explanationEn: "The source identifies the Treaty of Asunción (1991).",
    explanationHi: "स्रोत के अनुसार 1991 की असुनसियोन संधि से स्थापना हुई."
  }
]

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------
function MCQBlock({ mcq }: { mcq: MCQ }) {
    const [selected, setSelected] = useState<string | null>(null)
    const isCorrect = selected === mcq.correctKey
    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="mb-4">
                <p className="font-semibold text-base">{mcq.questionEn}</p>
                <p className="text-sm text-muted-foreground mt-1">{mcq.questionHi}</p>
            </div>
            <div className="space-y-2 mb-4">
                {mcq.options.map((opt) => {
                    let extra = ""
                    if (selected !== null) {
                        if (opt.key === mcq.correctKey) extra = "bg-green-100 border-green-400"
                        else if (opt.key === selected) extra = "bg-red-100 border-red-400"
                    }
                    return (
                        <button type="button" key={opt.key} disabled={selected !== null} onClick={() => setSelected(opt.key)}
                            className={`w-full text-left flex items-start gap-3 rounded-lg border p-3 text-sm cursor-pointer hover:bg-muted/50 disabled:cursor-default ${extra}`}>
                            <span className="font-bold uppercase w-5 shrink-0 text-muted-foreground">{opt.key}.</span>
                            <span>
                                <span className="block">{opt.en}</span>
                                <span className="block text-xs text-muted-foreground mt-0.5">{opt.hi}</span>
                            </span>
                        </button>
                    )
                })}
            </div>
            {selected !== null && (
                <div role="status" className={`p-3 rounded-lg border-l-4 ${isCorrect ? "bg-green-50 border-green-500" : "bg-red-50 border-red-400"}`}>
                    <div className="flex items-center gap-2 mb-1">
                        {isCorrect ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <HelpCircle className="w-4 h-4 text-red-500" />}
                        <span className="text-sm font-semibold">{isCorrect ? "Correct! / सही उत्तर!" : `Correct: ${mcq.correctKey.toUpperCase()}`}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{mcq.explanationEn}</p>
                    <p className="text-sm text-muted-foreground mt-1">{mcq.explanationHi}</p>
                </div>
            )}
        </div>
    )
}

function PageCard({ page }: { page: ChapterPage }) {
    return (
        <article id={`pdf-page-${page.number}`} className="scroll-mt-28 bg-card rounded-xl border shadow-sm overflow-hidden">
            {/* Card header */}
            <div className="px-5 sm:px-6 py-4 border-b bg-purple-50/50 flex items-center justify-between gap-3">
                <div>
                    {/* <span className="text-[11px] font-semibold text-purple-700 uppercase tracking-wide">PDF Page {page.number}</span> */}
                    <h3 className="text-lg sm:text-xl font-bold mt-0.5">{page.title}</h3>
                </div>
                <a href="#chapter-top" className="shrink-0 text-xs text-purple-700 hover:underline">Back to top ↑</a>
            </div>

            {/* Paragraph blocks */}
            <div className="px-5 sm:px-6 py-5 space-y-7">
                {page.blocks.map((block, i) => (
                    <div key={i}>
                        <h4 className="text-sm font-semibold text-purple-800 mb-3 border-l-4 border-purple-400 pl-3">
                            {block.heading} <span className="text-muted-foreground font-normal">/ {block.headingHi}</span>
                        </h4>
                        <div className="space-y-3">
                            {block.paragraphs.map((p, j) => (
                                <p key={j} className="text-sm leading-7 text-foreground/90">
                                    {p.en}
                                    <span className="block text-sm leading-7 text-muted-foreground mt-1.5">{p.hi}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </article>
    )
}

export default function ChapterSixCurrentAffairsPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero */}
            <section id="chapter-top" className="pt-5 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:text-purple-900 mb-6">
                        <ArrowLeft className="w-4 h-4" /> Back to Current Affairs
                    </Link>
                    <div className="flex">
                        <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                            <Sparkles className="w-4 h-4" />Nano News / नैनो न्यूज़
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Current Affairs 2026 — Nano News</h1>
                    <p className="text-xl text-muted-foreground mb-6">समसामयिकी 2026 — अध्याय 6: राष्ट्रीय एवं अंतरराष्ट्रीय त्वरित तथ्य</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-purple-600" /><span>2026 · PDF pp. 113–132</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Scale className="w-4 h-4 text-purple-600" /><span>National & International</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-purple-600" /><span>{mcqs.length} Practice MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-5">
                {/* Notes */}
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-5 h-5 text-purple-600" />
                        <h2 className="text-2xl font-bold">Complete Chapter Notes / सम्पूर्ण अध्याय</h2>
                    </div>
                    <p className="text-sm text-muted-foreground mb-5">
                        Content transcribed from the supplied PDF and reorganised into paragraphs, not independently fact-checked.
                        The PDF has imperfect Unicode encoding for some Hindi text, which requires proofreading before publication.
                    </p>
                    <div className="space-y-6">
                        {chapterPages.map((page) => (
                            <PageCard key={page.number} page={page} />
                        ))}
                    </div>
                </section>

                {/* PYQ note */}
                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न
                        </h3>
                        <p className="text-sm">
                            The supplied chapter is a fast-facts section and does not identify a verifiable exam-year PYQ. No PYQ has been fabricated. /
                            स्रोत में सत्यापन योग्य पिछले वर्ष का प्रश्न नहीं दिया गया है।
                        </p>
                    </div>
                </section>

                {/* MCQs */}
                <section className="mb-10">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        <Target className="w-5 h-5 text-purple-600" />
                        <h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Practice questions based on chapter facts</span>
                    </div>
                    <div className="space-y-5">
                        {mcqs.map(m => <MCQBlock key={m.id} mcq={m} />)}
                    </div>
                </section>

                {/* Footer nav */}
                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs">
                        <Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button>
                    </Link>
                    <Link href="/current-affairs/by-topic/scheme-2026">
                        <Button variant="outline" className="gap-2 cursor-pointer">Next: Scheme 2026 <ChevronRight className="w-4 h-4" /></Button>
                    </Link>
                    <Link href="/mock-test">
                        <Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button>
                    </Link>
                </div>
            </main>

            <FooterLinkFooter />
        </div>
    )
}