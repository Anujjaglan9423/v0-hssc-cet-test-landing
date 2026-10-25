"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ArrowLeft, BookOpen, Calendar, ChevronRight,
    Landmark, Search, Sparkles, Target, X
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Each paragraph is a bilingual pair (English → Hindi).
interface Para { en: string; hi: string }
interface TopicBlock {
    heading: string
    headingHi: string
    paragraphs: Para[]
}
interface SchemeTopic {
    slug: string
    title: string
    titleHi: string
    pages: string
    blocks: TopicBlock[]
}

// ---------------------------------------------------------------------------
// CONTENT: transcribed from the supplied PDF (pp. 133–154), re-flowed into
// paragraphs. The PDF's embedded Hindi extraction is corrupted; the Hindi
// paragraphs below are carefully rewritten study notes based on the readable
// English facts — proofread before publishing.
// ---------------------------------------------------------------------------
const topics: SchemeTopic[] = [
  {
    slug: "mission-rangeen-machhli-2031",
    title: "Mission Rangeen Machhli 2031",
    titleHi: "मिशन रंगीन मछली 2031",
    pages: "133",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "Mission Rangeen Machhli 2031 was launched by Vice President C. P. Radhakrishnan at Agatti, Lakshadweep, to provide a roadmap for organising, modernising and globalising India's ornamental fisheries sector.",
            hi: "मिशन रंगीन मछली 2031 का शुभारंभ उपराष्ट्रपति सी. पी. राधाकृष्णन ने लक्षद्वीप के अगत्ती में किया। इसका उद्देश्य सजावटी मछली पालन, प्रजनन, व्यापार और निर्यात को संगठित तथा आधुनिक बनाना है।"
          }
        ]
      },
      {
        heading: "Exam Facts",
        headingHi: "परीक्षा उपयोगी तथ्य",
        paragraphs: [
          {
            en: "Nodal Ministry: Fisheries, Ministry of Fisheries, Animal Husbandry and Dairying. Ornamental fisheries refers to the breeding, culture and trade of attractive fish species mainly for aquariums and decorative purposes.",
            hi: "नोडल विभाग मत्स्य पालन विभाग है, जो मत्स्य पालन, पशुपालन और डेयरी मंत्रालय के अंतर्गत आता है। सजावटी मत्स्य पालन का अर्थ आकर्षक मछली प्रजातियों का प्रजनन, पालन और व्यापार है, जो मुख्य रूप से एक्वेरियम और सजावटी उद्देश्यों के लिए होता है।"
          }
        ]
      }
    ]
  },
  {
    slug: "pradhan-mantri-matsya-sampada-yojana",
    title: "Pradhan Mantri Matsya Sampada Yojana",
    titleHi: "प्रधानमंत्री मत्स्य संपदा योजना",
    pages: "133",
    blocks: [
      {
        heading: "About PMMSY",
        headingHi: "PMMSY के बारे में",
        paragraphs: [
          {
            en: "Pradhan Mantri Matsya Sampada Yojana (PMMSY) is a flagship central scheme launched in September 2020 to achieve sustainable, responsible and inclusive development of the fisheries sector under the vision of the Blue Revolution.",
            hi: "प्रधानमंत्री मत्स्य संपदा योजना सितंबर 2020 में शुरू की गई थी। यह ब्लू रिवोल्यूशन की परिकल्पना के अनुरूप मत्स्य क्षेत्र के सतत, जिम्मेदार और समावेशी विकास पर केंद्रित है।"
          }
        ]
      }
    ]
  },
  {
    slug: "project-shikhar",
    title: "Project Shikhar",
    titleHi: "प्रोजेक्ट शिखर",
    pages: "133",
    blocks: [
      {
        heading: "About the Initiative",
        headingHi: "पहल के बारे में",
        paragraphs: [
          {
            en: "Project Shikhar is a joint initiative of Meesho and the Bombay Stock Exchange (BSE). Its objective is to connect MSMEs and digital sellers with capital markets and support their listing on the BSE SME Platform.",
            hi: "प्रोजेक्ट शिखर मीशो और बॉम्बे स्टॉक एक्सचेंज (BSE) की संयुक्त पहल है। इसका उद्देश्य सूक्ष्म, लघु एवं मध्यम उद्यमों और डिजिटल विक्रेताओं को पूँजी बाजार से जोड़ना तथा BSE SME प्लेटफॉर्म पर सूचीबद्ध होने में सहयोग देना है।"
          }
        ]
      },
      {
        heading: "Exam Facts",
        headingHi: "परीक्षा उपयोगी तथ्य",
        paragraphs: [
          {
            en: "The Bombay Stock Exchange (BSE) was established in 1875.",
            hi: "बॉम्बे स्टॉक एक्सचेंज की स्थापना 1875 में हुई थी।"
          }
        ]
      }
    ]
  },
  {
    slug: "bharat-vann-green-initiative",
    title: "Bharat Vann Green Initiative",
    titleHi: "भारत वन हरित पहल",
    pages: "134",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "Union Finance Minister Nirmala Sitharaman inaugurated the 'Bharat Vann' green initiative in New Delhi. 'Bharat Vann' is a dense urban micro-forest project developed using the world-renowned Miyawaki afforestation method.",
            hi: "केंद्रीय वित्त मंत्री निर्मला सीतारमण ने नई दिल्ली में भारत वन हरित पहल का उद्घाटन किया। यह मियावाकी पद्धति से विकसित सघन शहरी सूक्ष्म-वन परियोजना है।"
          }
        ]
      },
      {
        heading: "Objective & Collaboration",
        headingHi: "उद्देश्य एवं सहयोग",
        paragraphs: [
          {
            en: "The objective is ecological restoration, expansion of green cover and help in reducing local heat effects in the city. The project was developed with the New Delhi Municipal Council (NDMC).",
            hi: "इसका उद्देश्य शहरी हरित क्षेत्र, जैव विविधता और पारिस्थितिक पुनर्स्थापन को बढ़ावा देना है। यह परियोजना नई दिल्ली नगरपालिका परिषद (NDMC) के सहयोग से विकसित की गई है।"
          }
        ]
      },
      {
        heading: "Ek Ped Maa Ke Naam Link & Miyawaki Method",
        headingHi: "'एक पेड़ माँ के नाम' से जुड़ाव एवं मियावाकी पद्धति",
        paragraphs: [
          {
            en: "The initiative operates under the overarching framework of the 'Ek Ped Maa Ke Naam' (A Tree in the Name of Mother) mass plantation campaign, which was launched by Prime Minister Narendra Modi on 5 June 2024 (World Environment Day). The Miyawaki method is a Japanese-origin afforestation technique used to develop dense, largely native mini-forests in small areas much faster than conventional plantation approaches.",
            hi: "'भारत वन' 'एक पेड़ माँ के नाम' जन आंदोलन के व्यापक ढाँचे के अंतर्गत आता है, जिसे प्रधानमंत्री नरेंद्र मोदी ने 5 जून 2024 (विश्व पर्यावरण दिवस) को शुरू किया था। मियावाकी पद्धति जापानी मूल की वनीकरण तकनीक है, जिसका उपयोग छोटे क्षेत्रों में सघन, मुख्य रूप से देशी लघु-वन विकसित करने के लिए किया जाता है, और यह पारंपरिक वृक्षारोपण की तुलना में बहुत तेज़ होती है।"
          }
        ]
      }
    ]
  },
  {
    slug: "pmsma",
    title: "Pradhan Mantri Surakshit Matritva Abhiyan",
    titleHi: "प्रधानमंत्री सुरक्षित मातृत्व अभियान",
    pages: "134–135",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) completed 10 years of service in June 2026. It was launched on 9 June 2016.",
            hi: "प्रधानमंत्री सुरक्षित मातृत्व अभियान 9 जून 2016 को शुरू किया गया था और जून 2026 में इसके दस वर्ष पूरे हुए।"
          }
        ]
      },
      {
        heading: "Exam Facts",
        headingHi: "परीक्षा उपयोगी तथ्य",
        paragraphs: [
          {
            en: "The nodal ministry is the Ministry of Health and Family Welfare (MoHFW). The objective is to provide comprehensive and free antenatal care, with special focus on identifying high-risk pregnancies.",
            hi: "नोडल मंत्रालय स्वास्थ्य एवं परिवार कल्याण मंत्रालय है। यह गर्भवती महिलाओं को निःशुल्क और गुणवत्तापूर्ण प्रसवपूर्व जाँच उपलब्ध कराने पर केंद्रित है, तथा उच्च जोखिम वाली गर्भावस्थाओं की समय रहते पहचान करना इसका प्रमुख उद्देश्य है।"
          }
        ]
      }
    ]
  },
  {
    slug: "oilseeds-kisaan-mitra",
    title: "Oilseeds Kisaan Mitra",
    titleHi: "ऑयलसीड्स किसान मित्र",
    pages: "135",
    blocks: [
      {
        heading: "About the Initiative",
        headingHi: "पहल के बारे में",
        paragraphs: [
          {
            en: "ICAR–Indian Institute of Oilseeds Research (ICAR-IIOR), Hyderabad launched Oilseeds Kisaan Mitra, India's first nationwide WhatsApp-based AI advisory service for oilseed farmers. The objective is multilingual and research-based advisory support.",
            hi: "आईसीएआर–भारतीय तिलहन अनुसंधान संस्थान, हैदराबाद ने ऑयलसीड्स किसान मित्र सेवा शुरू की। यह तिलहन उत्पादक किसानों के लिए व्हाट्सऐप आधारित कृत्रिम बुद्धिमत्ता सलाह सेवा है। इसका उद्देश्य बहुभाषी और अनुसंधान-आधारित सलाह सहायता प्रदान करना है, जिससे तिलहन की खेती, कीट प्रबंधन तथा कृषि संबंधी निर्णयों में किसानों की सहायता हो सके।"
          }
        ]
      }
    ]
  },
  {
    slug: "wt-marut-portal",
    title: "WT-MARUT Portal",
    titleHi: "डब्ल्यूटी-मारुत पोर्टल",
    pages: "135",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "The Union Minister for New and Renewable Energy officially launched India's first dedicated wind turbine supply chain management portal, WT-MARUT, at the Global Wind Day Conference in Goa. WT-MARUT stands for Wind Turbine Materials and Resources Utility Tracker.",
            hi: "नवीन एवं नवीकरणीय ऊर्जा मंत्री ने गोवा में आयोजित ग्लोबल विंड डे सम्मेलन में भारत का पहला समर्पित पवन टरबाइन आपूर्ति शृंखला प्रबंधन पोर्टल WT-MARUT लॉन्च किया। WT-MARUT का पूरा नाम Wind Turbine Materials and Resources Utility Tracker है।"
          }
        ]
      },
      {
        heading: "Exam Facts",
        headingHi: "परीक्षा उपयोगी तथ्य",
        paragraphs: [
          {
            en: "It is an indigenous, centralized digital platform explicitly dedicated to managing, tracking and optimizing the domestic wind turbine manufacturing supply chain ecosystem. The nodal ministry is the Ministry of New and Renewable Energy (MNRE).",
            hi: "यह घरेलू पवन टरबाइन निर्माण आपूर्ति शृंखला पारिस्थितिकी तंत्र के प्रबंधन, ट्रैकिंग और अनुकूलन के लिए समर्पित एक स्वदेशी, केंद्रीकृत डिजिटल मंच है। नोडल मंत्रालय नवीन एवं नवीकरणीय ऊर्जा मंत्रालय है।"
          }
        ]
      }
    ]
  },
  {
    slug: "bharati-programme",
    title: "The BHARATI Programme",
    titleHi: "भारती कार्यक्रम",
    pages: "135–136",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "The Agricultural and Processed Food Products Export Development Authority (APEDA) concluded the inaugural cohort of its flagship export enablement initiative, the BHARATI programme.",
            hi: "कृषि और प्रसंस्कृत खाद्य उत्पाद निर्यात विकास प्राधिकरण (APEDA) ने अपनी प्रमुख निर्यात प्रोत्साहन पहल 'भारती कार्यक्रम' के पहले समूह का समापन किया।"
          }
        ]
      },
      {
        heading: "About BHARATI",
        headingHi: "भारती के बारे में",
        paragraphs: [
          {
            en: "BHARATI is the acronym for 'Hub for Agritech, Resilience, Advancement and Incubation for Export Innovation.' It is a support programme that helps Indian food startups develop an \"export-first\" mindset and become successful agri-food exporters. Its core target is India's national goal of achieving USD 50 billion in APEDA-scheduled product exports by 2030.",
            hi: "BHARATI का विस्तार Bharat's Hub for Agritech, Resilience, Advancement and Incubation for Export Innovation है। यह खाद्य एवं एग्रीटेक स्टार्टअप को नवाचार, निर्यात-तैयारी और वैश्विक बाजारों तक पहुँच में सहायता देता है, जिससे भारतीय खाद्य स्टार्टअप 'निर्यात-प्रथम' दृष्टिकोण विकसित कर सकें। इसका मुख्य लक्ष्य 2030 तक APEDA-सूचीबद्ध उत्पादों के निर्यात में USD 50 बिलियन प्राप्त करने का राष्ट्रीय लक्ष्य है।"
          }
        ]
      }
    ]
  },
  {
    slug: "nirbhay-chetna",
    title: "Nirbhay Chetna",
    titleHi: "निर्भय चेतना",
    pages: "136",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "The Ministry of Panchayati Raj organised a three-day Training of Trainers (ToT) programme on Nirbhay Chetna in New Delhi under the Nirbhaya Fund.",
            hi: "पंचायती राज मंत्रालय ने निर्भया फंड के अंतर्गत नई दिल्ली में निर्भय चेतना पर प्रशिक्षकों के लिए तीन-दिवसीय प्रशिक्षण आयोजित किया।"
          }
        ]
      },
      {
        heading: "Exam Facts",
        headingHi: "परीक्षा उपयोगी तथ्य",
        paragraphs: [
          {
            en: "Nirbhay Chetna is a nationwide gender-sensitization initiative under the broader Nirbhay Raho Initiative. It focuses on making elected male panchayat representatives more aware of women's safety, dignity, equality and leadership. The nodal ministry is the Ministry of Panchayati Raj. The 'Nirbhay Raho Initiative' was launched in March 2026 to strengthen gender-responsive governance at the rural level.",
            hi: "निर्भय चेतना, निर्भय रहो पहल के अंतर्गत एक राष्ट्रीय लैंगिक संवेदनशीलता कार्यक्रम है। यह निर्वाचित पुरुष पंचायत प्रतिनिधियों को महिलाओं की सुरक्षा, गरिमा, समानता और नेतृत्व के प्रति अधिक जागरूक बनाने पर केंद्रित है। नोडल मंत्रालय पंचायती राज मंत्रालय है। 'निर्भय रहो पहल' मार्च 2026 में जमीनी स्तर पर लैंगिक उत्तरदायी प्रशासन को मजबूत करने के लिए शुरू की गई थी।"
          }
        ]
      }
    ]
  },
  {
    slug: "suman-roadmap-2030",
    title: "SUMAN Roadmap 2030",
    titleHi: "सुमन रोडमैप 2030",
    pages: "136–137",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "Union Health Minister J. P. Nadda launched the SUMAN Roadmap 2030 to strengthen maternal and newborn healthcare in India.",
            hi: "केंद्रीय स्वास्थ्य मंत्री जे. पी. नड्डा ने भारत में मातृ एवं नवजात शिशु स्वास्थ्य सेवाओं को मजबूत करने के लिए सुमन रोडमैप 2030 जारी किया।"
          }
        ]
      },
      {
        heading: "Key Features",
        headingHi: "प्रमुख विशेषताएँ",
        paragraphs: [
          {
            en: "SUMAN stands for Surakshit Matritva Aashwasan. The objective is to improve maternal and newborn healthcare across India through targeted interventions, digital monitoring and stronger health systems to achieve SDG 3. The strategy is anchored in the RMNCHA+N framework (Reproductive, Maternal, Newborn, Child, Adolescent Health and Nutrition) and adopts a comprehensive life-cycle approach covering pre-pregnancy, pregnancy, childbirth and the postnatal period.",
            hi: "SUMAN का पूरा नाम सुरक्षित मातृत्व आश्वासन (Surakshit Matritva Aashwasan) है। इसका उद्देश्य लक्षित हस्तक्षेपों, डिजिटल निगरानी और सुदृढ़ स्वास्थ्य प्रणालियों के माध्यम से सतत विकास लक्ष्य 3 की दिशा में प्रगति करना है। रणनीति RMNCHA+N ढाँचे (प्रजनन, मातृ, नवजात, बाल, किशोर स्वास्थ्य एवं पोषण) पर आधारित है और गर्भधारण से पहले, गर्भावस्था, प्रसव एवं प्रसवोत्तर अवधि को सम्मिलित करने वाला व्यापक जीवन-चक्र दृष्टिकोण अपनाती है।"
          }
        ]
      },
      {
        heading: "Target Metrics",
        headingHi: "लक्ष्य संकेतक",
        paragraphs: [
          {
            en: "To reduce the Maternal Mortality Ratio (MMR) to below 70 per 100,000 live births by the year 2030.",
            hi: "वर्ष 2030 तक मातृ मृत्यु अनुपात (MMR) को प्रति 100,000 जीवित जन्मों पर 70 से नीचे लाना।"
          }
        ]
      }
    ]
  },
  {
    slug: "saras-shakti-collection",
    title: "SARAS Shakti Collection",
    titleHi: "सरस शक्ति कलेक्शन",
    pages: "137–138",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "The Ministry of Rural Development launched the \"SARAS Shakti Collection\" during the Rashtriya Gramin Vikas Sammelan (RGVS) 2026 in New Delhi.",
            hi: "ग्रामीण विकास मंत्रालय ने राष्ट्रीय ग्रामीण विकास सम्मेलन 2026 में सरस शक्ति कलेक्शन शुरू किया।"
          }
        ]
      },
      {
        heading: "Exam Facts",
        headingHi: "परीक्षा उपयोगी तथ्य",
        paragraphs: [
          {
            en: "It is a flagship branding and marketing initiative under the Deendayal Antyodaya Yojana–National Rural Livelihoods Mission (DAY-NRLM). It showcases premium products manufactured by women Self-Help Groups (SHGs) to promote rural entrepreneurship and expand market access.",
            hi: "यह दीनदयाल अंत्योदय योजना–राष्ट्रीय ग्रामीण आजीविका मिशन के अंतर्गत ब्रांडिंग और विपणन पहल है। इससे स्वयं सहायता समूहों की महिलाओं के उत्पादों को बेहतर बाजार और पहचान दिलाने का लक्ष्य है।"
          }
        ]
      },
      {
        heading: "Value Addition: DAY-NRLM",
        headingHi: "मूल्य संवर्धन: DAY-NRLM",
        paragraphs: [
          {
            en: "DAY-NRLM was created by restructuring the earlier Swarnajayanti Grameen Swarojgar Yojana (SGSY-1999). In 2016, it was renamed Deendayal Antyodaya Yojana–National Rural Livelihood Mission (DAY-NRLM).",
            hi: "DAY-NRLM का गठन पूर्ववर्ती स्वर्णजयंती ग्रामीण स्वरोजगार योजना (SGSY-1999) के पुनर्गठन से हुआ। 2016 में इसका नाम बदलकर दीनदयाल अंत्योदय योजना–राष्ट्रीय ग्रामीण आजीविका मिशन कर दिया गया।"
          }
        ]
      }
    ]
  },
  {
    slug: "pmfme-scheme",
    title: "Pradhan Mantri Formalisation of Micro Food Processing Enterprises (PMFME) Scheme",
    titleHi: "प्रधानमंत्री सूक्ष्म खाद्य प्रसंस्करण उद्यम औपचारिकीकरण योजना",
    pages: "138",
    blocks: [
      {
        heading: "About the Scheme",
        headingHi: "योजना के बारे में",
        paragraphs: [
          {
            en: "The PMFME Scheme was launched on 29 June 2020. It is a centrally sponsored scheme under the Ministry of Food Processing Industries (MoFPI). Its objective is the formalisation of micro food units across the country. The scheme is part of the Atmanirbhar Bharat Abhiyaan and supports the Vocal for Local vision in the food processing sector.",
            hi: "प्रधानमंत्री सूक्ष्म खाद्य प्रसंस्करण उद्यम औपचारिकीकरण योजना 29 जून 2020 को शुरू हुई। यह खाद्य प्रसंस्करण उद्योग मंत्रालय की केंद्र प्रायोजित योजना है। योजना का उद्देश्य सूक्ष्म खाद्य प्रसंस्करण इकाइयों का देशव्यापी औपचारिकीकरण है। यह आत्मनिर्भर भारत अभियान का हिस्सा है और खाद्य प्रसंस्करण क्षेत्र में वोकल फॉर लोकल दृष्टिकोण का समर्थन करती है।"
          }
        ]
      },
      {
        heading: "Financial Assistance",
        headingHi: "वित्तीय सहायता",
        paragraphs: [
          {
            en: "Eligible beneficiaries receive 35% credit-linked capital subsidy, subject to the prescribed ceiling.",
            hi: "पात्र लाभार्थियों को निर्धारित सीमा के अधीन 35% क्रेडिट-लिंक्ड कैपिटल सब्सिडी प्रदान की जाती है।"
          }
        ]
      }
    ]
  },
  {
    slug: "daanveer-initiative",
    title: "DAANVEER Initiative",
    titleHi: "दानवीर पहल",
    pages: "138–139",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "The Ministry of Panchayati Raj (MoPR) launched the DAANVEER Initiative in collaboration with the National Informatics Centre (NIC) and DigiHaat.",
            hi: "पंचायती राज मंत्रालय ने राष्ट्रीय सूचना विज्ञान केंद्र और DigiHaat के सहयोग से दानवीर पहल शुरू की।"
          }
        ]
      },
      {
        heading: "Exam Facts",
        headingHi: "परीक्षा उपयोगी तथ्य",
        paragraphs: [
          {
            en: "The initiative is a digital platform that enables individuals, institutions and the Indian diaspora to donate digital devices to Gram Panchayats. Citizens can contribute through the 'Meri Panchayat' mobile app, while DigiHaat supports the supply of approved digital equipment.",
            hi: "यह डिजिटल मंच व्यक्तियों, संस्थानों और प्रवासी भारतीयों को ग्राम पंचायतों को डिजिटल उपकरण दान करने की सुविधा देता है। नागरिक 'मेरी पंचायत' मोबाइल ऐप के माध्यम से योगदान कर सकते हैं, जबकि DigiHaat स्वीकृत डिजिटल उपकरणों की आपूर्ति में सहायता करता है। इसका उद्देश्य पंचायतों की डिजिटल क्षमता और नागरिक सेवाओं को मजबूत करना है।"
          }
        ]
      }
    ]
  },
  {
    slug: "dweepti-yojana",
    title: "DWEEPTI Yojana",
    titleHi: "दीप्ति योजना",
    pages: "139",
    blocks: [
      {
        heading: "About the Scheme",
        headingHi: "योजना के बारे में",
        paragraphs: [
          {
            en: "Chhattisgarh launched the DWEEPTI Yojana, becoming the first Indian state to adopt a women-led distributed renewable energy policy. DWEEPTI stands for Decentralised Women Empowerment on Energy and Policy for Transformative Inclusion. Its core objective is to bring women-led Self-Help Groups (SHGs) into the renewable energy sector to manage and promote rooftop solar systems.",
            hi: "छत्तीसगढ़ ने महिला-नेतृत्व वाली विकेंद्रीकृत नवीकरणीय ऊर्जा नीति के अंतर्गत DWEEPTI योजना शुरू की। DWEEPTI का विस्तार Decentralised Women Empowerment on Energy and Policy for Transformative Inclusion है। इस पहल का उद्देश्य स्वयं सहायता समूहों की महिलाओं की भागीदारी से स्थानीय स्वच्छ ऊर्जा और आजीविका को बढ़ावा देना तथा छत पर सौर प्रणालियों के प्रबंधन एवं प्रचार-प्रसार में उनकी भूमिका सुनिश्चित करना है।"
          }
        ]
      }
    ]
  },
  {
    slug: "atmanirbhar-panchayat-samarth-portal",
    title: "Atmanirbhar Panchayat Programme & SAMARTH Portal",
    titleHi: "आत्मनिर्भर पंचायत कार्यक्रम एवं समर्थ पोर्टल",
    pages: "139–140",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "The Union Minister of Panchayati Raj launched the Atmanirbhar Panchayat Programme and the SAMARTH Panchayat Portal in New Delhi. The nodal ministry is the Ministry of Panchayati Raj (MoPR).",
            hi: "पंचायती राज मंत्रालय ने आत्मनिर्भर पंचायत कार्यक्रम और समर्थ पंचायत पोर्टल शुरू किए। नोडल मंत्रालय पंचायती राज मंत्रालय है।"
          }
        ]
      },
      {
        heading: "1. Atmanirbhar Panchayat Programme",
        headingHi: "1. आत्मनिर्भर पंचायत कार्यक्रम",
        paragraphs: [
          {
            en: "The programme is anchored under the Rashtriya Gram Swaraj Abhiyan (2018-RGSA). Under it, Gram Panchayats identify idle assets to build profitable, revenue-generating projects. The objective is to strengthen Own Sources of Revenue (OSR) and reduce financial dependence on government grants.",
            hi: "यह कार्यक्रम राष्ट्रीय ग्राम स्वराज अभियान (2018-RGSA) के अंतर्गत संचालित होता है। इसके तहत ग्राम पंचायतें निष्क्रिय संपत्तियों की पहचान कर लाभकारी राजस्व-सृजन परियोजनाएँ विकसित करती हैं। इसका उद्देश्य स्वयं के राजस्व स्रोतों (OSR) को मजबूत करना और सरकारी अनुदानों पर वित्तीय निर्भरता कम करना है।"
          }
        ]
      },
      {
        heading: "2. SAMARTH Panchayat Portal",
        headingHi: "2. समर्थ पंचायत पोर्टल",
        paragraphs: [
          {
            en: "SAMARTH is a national digital portal for managing Own Sources of Revenue (OSR) for Gram Panchayats. Article 243H of the Indian Constitution empowers State Legislatures to authorize Panchayats to levy, collect and appropriate taxes, duties, tolls and fees.",
            hi: "समर्थ पंचायत पोर्टल स्थानीय राजस्व के प्रबंधन का एकीकृत डिजिटल मंच है। संविधान का अनुच्छेद 243H पंचायतों के कर एवं शुल्क से जुड़े प्रावधानों से संबंधित है — यह राज्य विधानसभाओं को पंचायतों को कर, शुल्क, टोल और फीस लगाने, वसूलने और उपयुक्त करने का अधिकार देता है।"
          }
        ]
      }
    ]
  },
  {
    slug: "corporate-mitra-scheme",
    title: "Corporate Mitra Scheme",
    titleHi: "कॉर्पोरेट मित्र योजना",
    pages: "140",
    blocks: [
      {
        heading: "About the Scheme",
        headingHi: "योजना के बारे में",
        paragraphs: [
          {
            en: "The Corporate Mitra Scheme was announced in the Union Budget 2026–27 to strengthen the MSME ecosystem through trained professionals. Its nodal ministry is the Ministry of Corporate Affairs (MCA). The scheme aims to provide affordable professional support to MSMEs in Tier-2 and Tier-3 cities.",
            hi: "कॉर्पोरेट मित्र योजना की घोषणा केंद्रीय बजट 2026–27 में की गई। यह कॉर्पोरेट कार्य मंत्रालय की पहल है, जिसके अंतर्गत प्रशिक्षित पेशेवर MSME इकाइयों को किफायती सहायता दे सकते हैं। योजना विशेष रूप से छोटे शहरों और टियर-2 तथा टियर-3 क्षेत्रों में उद्यमों की अनुपालन क्षमता सुधारने पर केंद्रित है।"
          }
        ]
      },
      {
        heading: "Key Services & Training Model",
        headingHi: "मुख्य सेवाएँ एवं प्रशिक्षण मॉडल",
        paragraphs: [
          {
            en: "Key services offered include Compliance, Goods and Services Tax (GST), Accounting, Financial Consulting, Cost Accounting and Company Secretarial Services. The training model is a 12-month duration split into 6 months of an Academic Course and 6 months of On-the-Job training. Candidate eligibility: applicants must be up to 30 years of age.",
            hi: "मुख्य सेवाओं में अनुपालन, वस्तु एवं सेवा कर (GST), लेखांकन, वित्तीय परामर्श, लागत लेखांकन और कंपनी सचिवीय सेवाएँ शामिल हैं। प्रशिक्षण मॉडल 12 महीने का है, जिसे 6 महीने के अकादमिक पाठ्यक्रम और 6 महीने के ऑन-द-जॉब प्रशिक्षण में विभाजित किया गया है। पात्रता: आवेदक की आयु 30 वर्ष तक होनी चाहिए।"
          }
        ]
      }
    ]
  },
  {
    slug: "mission-golden-spice",
    title: "Mission Golden Spice",
    titleHi: "मिशन गोल्डन स्पाइस",
    pages: "140–141",
    blocks: [
      {
        heading: "About the Mission",
        headingHi: "मिशन के बारे में",
        paragraphs: [
          {
            en: "Union Minister Jyotiraditya M. Scindia launched Mission Golden Spice to promote Lakadong Turmeric from Meghalaya. The mission is a five-year initiative (2025–2030) aimed at developing Lakadong Turmeric into a globally competitive brand.",
            hi: "केंद्रीय मंत्री ज्योतिरादित्य एम. सिंधिया ने मेघालय की लाकाडोंग हल्दी को बढ़ावा देने के लिए मिशन गोल्डन स्पाइस शुरू किया। यह 2025 से 2030 तक की पाँच वर्षीय पहल है, जिसका लक्ष्य लाकाडोंग हल्दी को वैश्विक स्तर पर प्रतिस्पर्धी ब्रांड के रूप में विकसित करना है।"
          }
        ]
      }
    ]
  },
  {
    slug: "project-sarathi",
    title: "Project SARATHI",
    titleHi: "प्रोजेक्ट सारथी",
    pages: "141",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "Union Health Minister J. P. Nadda chaired a meeting to review the proposed expansion of Project SARATHI across healthcare institutions.",
            hi: "केंद्रीय स्वास्थ्य मंत्री जे. पी. नड्डा ने स्वास्थ्य संस्थानों में प्रोजेक्ट सारथी के प्रस्तावित विस्तार की समीक्षा के लिए बैठक की अध्यक्षता की।"
          }
        ]
      },
      {
        heading: "About Project SARATHI",
        headingHi: "प्रोजेक्ट सारथी के बारे में",
        paragraphs: [
          {
            en: "Project SARATHI is a youth-led initiative that places trained student volunteers in public hospitals to assist patients with non-clinical support. Volunteers help patients with hospital navigation, guidance and mobility assistance, thereby making hospital visits easier and reducing non-medical workload on healthcare staff. Full form: Responsible Action to Transform Healthcare Institutes (SARATHI).",
            hi: "प्रोजेक्ट सारथी सार्वजनिक अस्पतालों में प्रशिक्षित छात्र स्वयंसेवकों की भागीदारी वाली युवा-नेतृत्व वाली पहल है। स्वयंसेवक मरीजों और परिजनों को गैर-चिकित्सीय सहायता तथा अस्पताल की सेवाएँ समझने में मदद करते हैं। इससे अस्पताल में आना-जाना आसान होता है और स्वास्थ्य कर्मियों पर गैर-चिकित्सीय भार कम होता है। पूरा नाम: Responsible Action to Transform Healthcare Institutes (SARATHI)।"
          }
        ]
      }
    ]
  },
  {
    slug: "samudra-manthan-scheme",
    title: "Samudra Manthan – National Offshore Exploration Scheme",
    titleHi: "समुद्र मंथन अपतटीय अन्वेषण योजना",
    pages: "141–142",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "The Union Cabinet has approved 'Samudra Manthan' – the National Offshore Exploration Scheme for expanding offshore exploration of oil and natural gas.",
            hi: "केंद्रीय मंत्रिमंडल ने तेल और प्राकृतिक गैस के अपतटीय अन्वेषण को बढ़ावा देने के लिए समुद्र मंथन योजना को मंजूरी दी।"
          }
        ]
      },
      {
        heading: "Exam Facts",
        headingHi: "परीक्षा उपयोगी तथ्य",
        paragraphs: [
          {
            en: "The nodal ministry is the Ministry of Petroleum and Natural Gas (MoPNG). It is a Central Sector Scheme running through FY 2030–31 with a proposed outlay of ₹84,084 crore. The objective is exploration of offshore oil and natural gas resources, with particular emphasis on deepwater and ultra-deepwater areas. The initiative is intended to lower India's dependence on imported hydrocarbons and strengthen long-term energy security.",
            hi: "यह पेट्रोलियम एवं प्राकृतिक गैस मंत्रालय की केंद्रीय क्षेत्र की योजना है, जो वित्त वर्ष 2030–31 तक चलेगी। स्रोत के अनुसार इसका प्रस्तावित परिव्यय ₹84,084 करोड़ है। इसका उद्देश्य अपतटीय तेल एवं प्राकृतिक गैस संसाधनों का अन्वेषण करना है, विशेष रूप से गहरे और अति-गहरे जल क्षेत्रों पर जोर दिया जाएगा। यह पहल आयातित हाइड्रोकार्बन पर भारत की निर्भरता कम करके दीर्घकालिक ऊर्जा सुरक्षा को मजबूत करने के लिए है।"
          }
        ]
      }
    ]
  },
  {
    slug: "e-samudra-portal",
    title: "E-Samudra Portal",
    titleHi: "ई-समुद्र पोर्टल",
    pages: "142",
    blocks: [
      {
        heading: "About the Portal",
        headingHi: "पोर्टल के बारे में",
        paragraphs: [
          {
            en: "The Ministry of Ports, Shipping and Waterways has launched E-Samudra, a unified digital portal for modernising India's maritime administration through paperless and citizen-focused services. The objective is to bring maritime-related services onto a single digital framework, making their delivery more streamlined and accessible. The portal brings together services for seafarers, shipping companies, recruitment agencies, training institutes and port authorities.",
            hi: "पत्तन, पोत परिवहन और जलमार्ग मंत्रालय ने ई-समुद्र डिजिटल पोर्टल लॉन्च किया। यह समुद्री प्रशासन से जुड़ी अनेक नागरिक-केंद्रित सेवाओं को एक ही कागजरहित डिजिटल मंच पर लाने की पहल है। इसका उद्देश्य समुद्री सेवाओं को एक एकल डिजिटल ढाँचे पर लाकर सेवा वितरण को अधिक सुलभ और कुशल बनाना है। यह पोर्टल नाविकों, शिपिंग कंपनियों, भर्ती एजेंसियों, प्रशिक्षण संस्थानों और बंदरगाह प्राधिकरणों की सेवाओं को एक साथ लाता है।"
          }
        ]
      }
    ]
  },
  {
    slug: "pm-surya-sarovar-yojana",
    title: "Pradhan Mantri Surya Sarovar Yojana",
    titleHi: "प्रधानमंत्री सूर्य सरोवर योजना",
    pages: "142–143",
    blocks: [
      {
        heading: "About the Scheme",
        headingHi: "योजना के बारे में",
        paragraphs: [
          {
            en: "The Union Cabinet has approved the Pradhan Mantri Surya Sarovar Yojana (PM-SSY) to expand floating solar power generation by using suitable water bodies. The scheme aims to develop 5,000 MW of Floating Solar Photovoltaic (FSPV) capacity across States and Union Territories.",
            hi: "प्रधानमंत्री सूर्य सरोवर योजना जलाशयों, झीलों और बाँधों पर तैरते सौर ऊर्जा संयंत्रों को प्रोत्साहित करती है। PDF के अनुसार इस योजना का लक्ष्य राज्यों और केंद्रशासित प्रदेशों में 5,000 मेगावाट फ्लोटिंग सोलर फोटोवोल्टाइक (FSPV) क्षमता विकसित करना है।"
          }
        ]
      },
      {
        heading: "What is FSPV?",
        headingHi: "FSPV क्या है?",
        paragraphs: [
          {
            en: "Floating Solar Photovoltaic (FSPV) refers to solar panels mounted directly on water bodies like reservoirs, lakes and dams instead of land.",
            hi: "फ्लोटिंग सोलर फोटोवोल्टाइक (FSPV) में सौर पैनल भूमि के बजाय जलाशयों, झीलों और बांधों जैसे जल निकायों पर सीधे स्थापित किए जाते हैं।"
          }
        ]
      },
      {
        heading: "Nodal Ministry & Implementation",
        headingHi: "नोडल मंत्रालय एवं क्रियान्वयन",
        paragraphs: [
          {
            en: "The nodal ministry is the Ministry of New and Renewable Energy (MNRE). The scheme operates across all States and Union Territories from FY 2026-27 to FY 2030-31.",
            hi: "नोडल मंत्रालय नवीन एवं नवीकरणीय ऊर्जा मंत्रालय है। योजना वित्त वर्ष 2026–27 से 2030–31 तक सभी राज्यों और केंद्रशासित प्रदेशों में लागू होगी।"
          }
        ]
      }
    ]
  },
  {
    slug: "gobardhan-national-circular-bioenergy-scheme",
    title: "GOBARdhan: National Circular Bioenergy Scheme",
    titleHi: "गोबरधन राष्ट्रीय सर्कुलर बायोएनर्जी योजना",
    pages: "143–144",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "The Union Cabinet approved the GOBARdhan National Circular Bioenergy Scheme in August 2026 with an outlay of ₹23,731 crore. The nodal ministry is the Ministry of Petroleum and Natural Gas (MoPNG).",
            hi: "केंद्रीय मंत्रिमंडल ने अगस्त 2026 में गोबरधन राष्ट्रीय सर्कुलर बायोएनर्जी योजना को मंजूरी दी, जिसके लिए ₹23,731 करोड़ का परिव्यय है। नोडल मंत्रालय पेट्रोलियम एवं प्राकृतिक गैस मंत्रालय है।"
          }
        ]
      },
      {
        heading: "Objective & Core Focus",
        headingHi: "उद्देश्य एवं मुख्य केंद्र",
        paragraphs: [
          {
            en: "The objective is to promote Compressed Biogas (CBG) production by converting organic waste (agricultural residues, animal waste, municipal waste) into clean fuel and organic manure, thereby reducing dependence on fossil fuels and strengthening energy security. The core focus is to achieve nearly ten-fold growth in domestic CBG production, while attracting private investment and developing a circular bioeconomy. The implementation period is FY 2026–27 to FY 2035–36.",
            hi: "इसका उद्देश्य जैविक अपशिष्ट (कृषि अवशेष, पशु अपशिष्ट, नगरपालिका अपशिष्ट) को स्वच्छ ईंधन और जैविक खाद में परिवर्तित करके कंप्रेस्ड बायोगैस (CBG) उत्पादन को बढ़ावा देना है, जिससे जीवाश्म ईंधन पर निर्भरता कम होगी और ऊर्जा सुरक्षा मजबूत होगी। इसका मुख्य केंद्र घरेलू CBG उत्पादन में लगभग दस गुना वृद्धि प्राप्त करना, निजी निवेश आकर्षित करना और सर्कुलर बायोइकोनॉमी विकसित करना है। कार्यान्वयन अवधि वित्त वर्ष 2026–27 से 2035–36 तक है।"
          }
        ]
      },
      {
        heading: "Background: 2018 vs 2026 Initiatives",
        headingHi: "पृष्ठभूमि: 2018 बनाम 2026 पहलें",
        paragraphs: [
          {
            en: "The original GOBARdhan initiative (2018) — Galvanizing Organic Bio-Agro Resources Dhan — was under the Ministry of Jal Shakti and focused on village cleanliness, waste management and decentralized biogas generation under the Swachh Bharat Mission (Grameen). The new 2026 National Circular Bioenergy Scheme, under MoPNG, focuses on developing a national-scale commercial Compressed Bio-Gas (CBG) ecosystem.",
            hi: "मूल गोबरधन पहल (2018) — Galvanizing Organic Bio-Agro Resources Dhan — जल शक्ति मंत्रालय के अंतर्गत थी और स्वच्छ भारत मिशन (ग्रामीण) के तहत गाँव की स्वच्छता, अपशिष्ट प्रबंधन और विकेंद्रीकृत बायोगैस उत्पादन पर केंद्रित थी। नई 2026 राष्ट्रीय सर्कुलर बायोएनर्जी योजना पेट्रोलियम एवं प्राकृतिक गैस मंत्रालय के अंतर्गत राष्ट्रीय स्तर पर व्यावसायिक कंप्रेस्ड बायोगैस (CBG) पारिस्थितिकी तंत्र विकसित करने पर केंद्रित है।"
          }
        ]
      }
    ]
  },
  {
    slug: "parivartan-scheme",
    title: "PARIVARTAN Scheme",
    titleHi: "परिवर्तन योजना",
    pages: "144–145",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "The central government launched the PARIVARTAN scheme to accelerate the replacement of old, highly polluting trucks and buses in the National Capital Region (NCR) with cleaner BS-VI or electric vehicles. It was launched in July 2026.",
            hi: "केंद्र सरकार ने राष्ट्रीय राजधानी क्षेत्र में पुराने और अधिक प्रदूषण फैलाने वाले ट्रकों तथा बसों को स्वच्छ BS-VI या इलेक्ट्रिक वाहनों से बदलने की गति बढ़ाने के लिए परिवर्तन योजना शुरू की। यह योजना जुलाई 2026 में शुरू हुई।"
          }
        ]
      },
      {
        heading: "Exam Facts",
        headingHi: "परीक्षा उपयोगी तथ्य",
        paragraphs: [
          {
            en: "Full name: Renewal and Incentivization of Vehicle Assets for Reducing Transport Air Pollution and Network Emissions. The nodal ministry is the Ministry of Road Transport and Highways (MoRTH). Interest Incentive: 5% interest savings on eligible commercial vehicle loans for 5 years. Tax & Registration Incentives: a 100% Road Tax waiver for 10 years, along with a full waiver of vehicle registration fees.",
            hi: "पूरा नाम: Renewal and Incentivization of Vehicle Assets for Reducing Transport Air Pollution and Network Emissions। नोडल मंत्रालय सड़क परिवर्तन एवं राजमार्ग मंत्रालय है। ब्याज प्रोत्साहन: पात्र वाणिज्यिक वाहन ऋणों पर पाँच वर्षों तक 5% ब्याज बचत। कर एवं पंजीकरण प्रोत्साहन: 10 वर्षों के लिए 100% सड़क कर छूट तथा वाहन पंजीकरण शुल्क की पूर्ण छूट।"
          }
        ]
      }
    ]
  },
  {
    slug: "garbhini-mitra-course",
    title: "Garbhini Mitra Course",
    titleHi: "गर्भिणी मित्र कोर्स",
    pages: "145",
    blocks: [
      {
        heading: "About the Course",
        headingHi: "पाठ्यक्रम के बारे में",
        paragraphs: [
          {
            en: "The All India Institute of Ayurveda (AIIA), New Delhi, has introduced the \"Garbhini Mitra\" course for the 2026–2027 academic session. It is a six-month offline healthcare skill-development programme designed to prepare non-clinical support personnel for community-level health and wellness guidance. The course equips trained personnel to provide health education, lifestyle advice and wellness guidance to women across the pre-conception, pregnancy and postnatal periods.",
            hi: "अखिल भारतीय आयुर्वेद संस्थान, नई दिल्ली ने शैक्षणिक सत्र 2026–27 के लिए गर्भिणी मित्र पाठ्यक्रम शुरू किया। यह छह महीने का ऑफलाइन कौशल-विकास पाठ्यक्रम है, जिसमें गैर-चिकित्सीय सहयोग कर्मियों को गर्भधारण से पहले, गर्भावस्था और प्रसव के बाद स्वास्थ्य एवं जीवनशैली संबंधी मार्गदर्शन देने का प्रशिक्षण मिलता है।"
          }
        ]
      },
      {
        heading: "Implementing Body",
        headingHi: "क्रियान्वयन निकाय",
        paragraphs: [
          {
            en: "The programme is implemented by the All India Institute of Ayurveda (AIIA), New Delhi, an autonomous institution under the Ministry of Ayush.",
            hi: "यह कार्यक्रम अखिल भारतीय आयुर्वेद संस्थान (AIIA), नई दिल्ली द्वारा लागू किया जाता है, जो आयुष मंत्रालय के अधीन एक स्वायत्त संस्थान है।"
          }
        ]
      }
    ]
  },
  {
    slug: "national-hpv-vaccination-campaign",
    title: "National HPV Vaccination Campaign",
    titleHi: "राष्ट्रीय एचपीवी टीकाकरण अभियान",
    pages: "145–146",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "Prime Minister Narendra Modi launched the nationwide Human Papillomavirus (HPV) Vaccination Campaign from Ajmer, Rajasthan, to prevent cervical cancer.",
            hi: "प्रधानमंत्री नरेंद्र मोदी ने राजस्थान के अजमेर से गर्भाशय ग्रीवा कैंसर की रोकथाम के लिए राष्ट्रव्यापी ह्यूमन पैपिलोमावायरस (HPV) टीकाकरण अभियान शुरू किया।"
          }
        ]
      },
      {
        heading: "Target Group & Objective",
        headingHi: "लक्ष्य समूह एवं उद्देश्य",
        paragraphs: [
          {
            en: "The campaign aims to provide HPV vaccination to girls aged 14 years across India. The objective is preventing cervical cancer caused by Human Papillomavirus (HPV) infection. Cervical cancer develops in the cervix (lower part of the uterus) and is predominantly caused by persistent Human Papillomavirus (HPV) infection.",
            hi: "इस अभियान का उद्देश्य देश भर में 14 वर्ष की बालिकाओं को HPV टीकाकरण उपलब्ध कराना है। यह ह्यूमन पैपिलोमावायरस (HPV) संक्रमण के कारण होने वाले गर्भाशय ग्रीवा कैंसर की रोकथाम के लिए है। गर्भाशय ग्रीवा कैंसर गर्भाशय ग्रीवा (गर्भाशय का निचला भाग) में विकसित होता है और मुख्य रूप से लगातार HPV संक्रमण के कारण होता है।"
          }
        ]
      }
    ]
  },
  {
    slug: "samriddh-gram-phygital-services",
    title: "Samriddh Gram Phygital Services Pilot Initiative",
    titleHi: "समृद्ध ग्राम फिजिटल सेवा पहल",
    pages: "146",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "Union Minister of Communications Jyotiraditya M. Scindia inaugurated the Samriddhi Kendra at Umri village in Guna district, Madhya Pradesh, under the Samriddh Gram Phygital Services Pilot Initiative. Umri village is part of a broader pilot initiative that also includes two other villages: Narakoduru (Andhra Pradesh) and Chaurawala (Muzaffarnagar) in Uttar Pradesh.",
            hi: "संचार मंत्री ज्योतिरादित्य एम. सिंधिया ने मध्य प्रदेश के गुना जिले के उमरी गाँव में समृद्धि केंद्र का उद्घाटन किया। पायलट में आंध्र प्रदेश का नराकोडुरु और उत्तर प्रदेश के मुजफ्फरनगर का चौरावाला गाँव भी शामिल हैं।"
          }
        ]
      },
      {
        heading: "Exam Facts",
        headingHi: "परीक्षा उपयोगी तथ्य",
        paragraphs: [
          {
            en: "The \"Samriddhi Kendra\" operates on a phygital (Physical + Digital) framework, combining an on-ground physical center with robust digital infrastructure to empower rural citizens. It uses BharatNet connectivity to deliver essential citizen services at the village level. The initiative is by the Department of Telecommunications (DoT). In July 2026, Samriddh Gram won the WSIS Prize 2026 under Action Line C6 – Enabling Environment.",
            hi: "समृद्धि केंद्र भौतिक केंद्र और डिजिटल अवसंरचना को जोड़कर ग्रामीण नागरिक सेवाएँ उपलब्ध कराता है। यह दूरसंचार विभाग की पहल है, जो भारतनेट कनेक्टिविटी का उपयोग करती है। जुलाई 2026 में समृद्ध ग्राम को WSIS Prize 2026 (Action Line C6 - Enabling Environment) प्राप्त हुआ।"
          }
        ]
      }
    ]
  },
  {
    slug: "she-mart-initiative",
    title: "SHE-MART Initiative",
    titleHi: "शी-मार्ट पहल",
    pages: "146–147",
    blocks: [
      {
        heading: "About the Initiative",
        headingHi: "पहल के बारे में",
        paragraphs: [
          {
            en: "SHE-MARTs were announced in the Union Budget 2026–27 to provide better market access to women-led rural enterprises. Its full form is 'Self Help Entrepreneurs – Marketing Avenues for Rural Transformation'. The core objective is empowering local Self-Help Groups (SHGs) by creating sustainable and organized marketing avenues for products manufactured by rural women entrepreneurs. SHE-MART is a Ministry of Rural Development initiative under Deendayal Antyodaya Yojana–National Rural Livelihood Mission (DAY-NRLM).",
            hi: "केंद्रीय बजट 2026–27 में महिला-नेतृत्व वाले ग्रामीण उद्यमों के लिए SHE-MART की घोषणा की गई। इसका विस्तार Self Help Entrepreneurs – Marketing Avenues for Rural Transformation है। यह ग्रामीण विकास मंत्रालय के अंतर्गत DAY-NRLM से जुड़ी विपणन पहल है। इसका लक्ष्य स्वयं सहायता समूहों के उत्पादों को संगठित बाजार और बेहतर बिक्री के अवसर देना है।"
          }
        ]
      }
    ]
  },
  {
    slug: "bhavya-initiatives",
    title: "BHAVYA Initiatives",
    titleHi: "भाव्य पहलें",
    pages: "147–148",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "The Union Cabinet approved the Bharat Industrial Development Scheme (BHAVYA) in March 2026 to develop investment-ready, plug-and-play industrial parks across the country. Subsequently, the BHAVYA Portal was launched in June 2026, while the BHAVYA-Rasayan scheme for the development of dedicated chemical parks was approved in July 2026.",
            hi: "भारत औद्योगिक विकास योजना (BHAVYA) का उद्देश्य देश में निवेश के लिए तैयार, प्लग-एंड-प्ले औद्योगिक पार्क विकसित करना है। स्रोत में मार्च 2026 में योजना की स्वीकृति, जून में BHAVYA पोर्टल और जुलाई में BHAVYA-रसायन पहल का उल्लेख है।"
          }
        ]
      },
      {
        heading: "BHAVYA Portal & BHAVYA-Rasayan",
        headingHi: "BHAVYA पोर्टल एवं BHAVYA-रसायन",
        paragraphs: [
          {
            en: "The BHAVYA Portal is a digital platform that supports implementation and monitoring of the BHAVYA Scheme for States and Union Territories. The BHAVYA-Rasayan scheme comes under the Department of Chemicals & Fertilizers, and is aimed at developing dedicated chemical parks with common infrastructure.",
            hi: "BHAVYA पोर्टल राज्यों और केंद्रशासित प्रदेशों के प्रस्ताव, क्रियान्वयन तथा निगरानी के लिए डिजिटल मंच प्रदान करता है। BHAVYA-रसायन योजना रसायन एवं उर्वरक विभाग के अंतर्गत समर्पित रसायन पार्कों के विकास के लिए साझा अवसंरचना प्रदान करती है।"
          }
        ]
      }
    ]
  },
  {
    slug: "pm-rahat-scheme",
    title: "PM RAHAT Scheme",
    titleHi: "पीएम राहत योजना",
    pages: "148",
    blocks: [
      {
        heading: "About the Scheme",
        headingHi: "योजना के बारे में",
        paragraphs: [
          {
            en: "The Government of India launched the PM RAHAT Scheme to provide timely cashless treatment to road accident victims, particularly during the critical \"Golden Hour\". Full name: Road Accident Victims' Hospitalisation and Assured Treatment (PM-RAHAT) Scheme. The nodal ministry is the Ministry of Road Transport & Highways (MoRTH).",
            hi: "पीएम राहत योजना सड़क दुर्घटना के पीड़ितों को विशेषकर दुर्घटना के बाद के महत्वपूर्ण 'गोल्डन आवर' में कैशलेस उपचार उपलब्ध कराने के लिए है। इसका पूरा नाम Prime Minister – Road Accident Victims' Hospitalisation and Assured Treatment Scheme है। मुख्य उद्देश्य उपचार में आर्थिक और प्रक्रियात्मक देरी कम करना है। नोडल मंत्रालय सड़क परिवहन एवं राजमार्ग मंत्रालय है।"
          }
        ]
      },
      {
        heading: "Treatment Cover & Golden Hour",
        headingHi: "उपचार कवर एवं गोल्डन आवर",
        paragraphs: [
          {
            en: "Under this scheme, a road accident victim is entitled to cashless treatment up to ₹1.5 lakh for a maximum of 7 days from the date of accident, irrespective of the category of road. The \"Golden Hour\" refers to the hour following a traumatic injury when prompt medical care offers the highest likelihood of preventing death.",
            hi: "इस योजना के तहत सड़क दुर्घटना का शिकार व्यक्ति दुर्घटना की तारीख से अधिकतम 7 दिनों तक ₹1.5 लाख तक कैशलेस उपचार का हकदार है, चाहे सड़क किसी भी श्रेणी की हो। 'गोल्डन आवर' आघात के बाद के उस एक घंटे को कहा जाता है जब तत्काल चिकित्सा देखभाल से मृत्यु रोकने की सबसे अधिक संभावना होती है।"
          }
        ]
      }
    ]
  },
  {
    slug: "sardar-vallabhbhai-patel-employment-industrial-zone",
    title: "Sardar Vallabhbhai Patel Employment and Industrial Zone Scheme",
    titleHi: "सरदार वल्लभभाई पटेल रोजगार एवं औद्योगिक क्षेत्र योजना",
    pages: "149",
    blocks: [
      {
        heading: "About the Scheme",
        headingHi: "योजना के बारे में",
        paragraphs: [
          {
            en: "The Uttar Pradesh Government announced the Sardar Vallabhbhai Patel Employment and Industrial Zone initiative to link industrial development with local employment, skill development and entrepreneurship across the state.",
            hi: "उत्तर प्रदेश सरकार ने सरदार वल्लभभाई पटेल रोजगार एवं औद्योगिक क्षेत्र योजना की घोषणा की। इस पहल में औद्योगिक विकास को स्थानीय रोजगार, कौशल प्रशिक्षण और उद्यमिता से जोड़ा जाना है।"
          }
        ]
      },
      {
        heading: "Coverage & Integrated Model",
        headingHi: "कवरेज एवं एकीकृत मॉडल",
        paragraphs: [
          {
            en: "Zones are proposed to be developed in all districts of Uttar Pradesh, with each zone spread over a minimum area of 50 acres. The integrated model will bring industry, skill training, employment services and entrepreneurship support together within a common ecosystem.",
            hi: "उत्तर प्रदेश के सभी जिलों में ये क्षेत्र विकसित करने का प्रस्ताव है, प्रत्येक क्षेत्र का विस्तार न्यूनतम 50 एकड़ होगा। एकीकृत मॉडल के अंतर्गत उद्योग, कौशल प्रशिक्षण, रोजगार सेवाएँ और उद्यमिता सहायता एक साझा पारिस्थितिकी तंत्र में एक साथ आएंगे।"
          }
        ]
      },
      {
        heading: "Budgetary Outlay & Infrastructure",
        headingHi: "बजटीय परिव्यय एवं अवसंरचना",
        paragraphs: [
          {
            en: "This ambitious state scheme has been allocated an initial financial outlay of ₹575 crore. It will offer plug-and-play infrastructure, particularly for MSMEs, service enterprises and manufacturing units, to enable quicker establishment of businesses.",
            hi: "इस महत्वाकांक्षी राज्य योजना के लिए ₹575 करोड़ का प्रारंभिक वित्तीय परिव्यय आवंटित किया गया है। यह विशेष रूप से MSME, सेवा उद्यमों और विनिर्माण इकाइयों के लिए प्लग-एंड-प्ले अवसंरचना प्रदान करेगी, जिससे व्यवसायों की स्थापना शीघ्र हो सकेगी।"
          }
        ]
      }
    ]
  },
  {
    slug: "sampoornata-abhiyan-2-0",
    title: "Sampoornata Abhiyan 2.0",
    titleHi: "संपूर्णता अभियान 2.0",
    pages: "149–150",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "NITI Aayog has launched a three-month intensive campaign, 'Sampoornata Abhiyan 2.0' (running from January 28 to April 14, 2026), to accelerate the saturation of critical social and health indicators across India's most underdeveloped regions.",
            hi: "नीति आयोग ने 28 जनवरी से 14 अप्रैल 2026 तक संपूर्णता अभियान 2.0 चलाने की घोषणा की। इसका उद्देश्य पिछड़े क्षेत्रों में पोषण, आंगनवाड़ी सेवाओं, टीबी अधिसूचना और सार्वभौमिक टीकाकरण जैसे प्रमुख संकेतकों पर शत-प्रतिशत उपलब्धि प्राप्त करना है।"
          }
        ]
      },
      {
        heading: "Background: ADP & ABP",
        headingHi: "पृष्ठभूमि: ADP एवं ABP",
        paragraphs: [
          {
            en: "The Aspirational Districts Programme (ADP) was launched in January 2018 and currently covers 112 districts; the Aspirational Blocks Programme (ABP) was launched in 2023 to extend the approach to the sub-district level.",
            hi: "आकांक्षी जिला कार्यक्रम जनवरी 2018 में शुरू किया गया था और वर्तमान में 112 जिलों को कवर करता है; आकांक्षी ब्लॉक कार्यक्रम 2023 में उप-जिला स्तर तक दृष्टिकोण बढ़ाने के लिए शुरू किया गया।"
          }
        ]
      }
    ]
  },
  {
    slug: "bharat-vistaar",
    title: "Bharat-VISTAAR",
    titleHi: "भारत-विस्तार",
    pages: "150",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "Phase-1 of the AI-based agricultural advisory system, 'Bharat-Vistar', as proposed in the Union Budget 2026-27, was recently launched from Jaipur, Rajasthan.",
            hi: "भारत-विस्तार एआई आधारित कृषि सलाह प्रणाली है, जिसका पहला चरण जयपुर, राजस्थान से शुरू किया गया।"
          }
        ]
      },
      {
        heading: "Exam Facts",
        headingHi: "परीक्षा उपयोगी तथ्य",
        paragraphs: [
          {
            en: "Full form: Virtually Integrated System to Access Agricultural Resources. The nodal ministry is the Department of Agriculture & Farmers Welfare, Ministry of Agriculture & Farmers Welfare. Farmers can use smartphones or ordinary mobile phones to ask agriculture-related questions and receive personalised information and advisories. It integrates information from AgriStack, ICAR agricultural practices, IMD weather data, mandi prices, government schemes and other agricultural systems on a single AI-enabled platform.",
            hi: "पूरा नाम: Virtually Integrated System to Access Agricultural Resources। नोडल मंत्रालय कृषि एवं किसान कल्याण विभाग है। किसान स्मार्टफोन या सामान्य मोबाइल फोन से कृषि संबंधी प्रश्न पूछ सकते हैं और व्यक्तिगत जानकारी एवं सलाह प्राप्त कर सकते हैं। यह एकल एआई-सक्षम मंच पर AgriStack, ICAR कृषि पद्धतियों, IMD मौसम डेटा, मंडी मूल्यों, सरकारी योजनाओं और अन्य कृषि प्रणालियों की जानकारी को एकीकृत करता है।"
          }
        ]
      }
    ]
  },
  {
    slug: "bharat-taxi",
    title: "Bharat Taxi",
    titleHi: "भारत टैक्सी",
    pages: "150–151",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "Bharat Taxi was officially launched on 5 February 2026 as India's first cooperative-led ride-hailing platform, with support from the Ministry of Cooperation.",
            hi: "भारत टैक्सी को 5 फ़रवरी 2026 को सहकारिता मंत्रालय के सहयोग से सहकारी मॉडल वाले राइड-हेलिंग मंच के रूप में शुरू किया गया।"
          }
        ]
      },
      {
        heading: "Exam Facts",
        headingHi: "परीक्षा उपयोगी तथ्य",
        paragraphs: [
          {
            en: "Driver-Owned Model: Bharat Taxi follows the \"Sarathi Hi Malik\" model, under which drivers (Sarathis) can become members and co-owners of the cooperative, participate in its governance and share in profits. Zero-Commission Model: Bharat Taxi follows a zero-commission model for drivers, unlike conventional aggregator platforms (like Uber or Ola) that deduct commission from fares. It is the world's first cooperative taxi network.",
            hi: "यह 'सारथी ही मालिक' मॉडल पर आधारित है, जिसमें चालक सदस्य और सह-मालिक बन सकते हैं, शासन में भाग ले सकते हैं और लाभ में हिस्सा पा सकते हैं। स्रोत के अनुसार चालक से कमीशन न लेने और लाभ-साझेदारी इसकी प्रमुख विशेषताएँ हैं। यह विश्व का पहला सहकारी टैक्सी नेटवर्क है।"
          }
        ]
      }
    ]
  },
  {
    slug: "vibrant-villages-programme-ii",
    title: "Vibrant Villages Programme-II (VVP-II)",
    titleHi: "वाइब्रेंट विलेजेज कार्यक्रम-II",
    pages: "151–152",
    blocks: [
      {
        heading: "Why in News",
        headingHi: "चर्चा में क्यों",
        paragraphs: [
          {
            en: "Union Home Minister Amit Shah launched the ₹6,839 crore Vibrant Villages Programme-II (VVP-II) on 20 February 2026 in Assam.",
            hi: "केंद्रीय गृह मंत्री अमित शाह ने 20 फ़रवरी 2026 को असम में वाइब्रेंट विलेजेज कार्यक्रम-II शुरू किया।"
          }
        ]
      },
      {
        heading: "Exam Facts",
        headingHi: "परीक्षा उपयोगी तथ्य",
        paragraphs: [
          {
            en: "Scheme Type: Central Sector Scheme with 100% central funding. The objective is development of border villages through better infrastructure, basic services, connectivity and livelihood opportunities, while also strengthening border security. Implementation Period: 2024–25 to FY 2028–29. The Vibrant Villages Programme-I (VVP-I) was announced in the Union Budget 2022–23 and formally launched by Amit Shah in April 2023.",
            hi: "PDF में इसका परिव्यय ₹6,839 करोड़ और केंद्र सरकार द्वारा पूर्ण वित्तपोषण बताया गया है। लक्ष्य सीमावर्ती गाँवों में बुनियादी ढाँचा, सेवाएँ, संपर्क, आजीविका और सुरक्षा को मजबूत करना है। कार्यक्रम-II की अवधि स्रोत में 2024–25 से 2028–29 दी गई है। वाइब्रेंट विलेजेज कार्यक्रम-I की घोषणा केंद्रीय बजट 2022–23 में की गई और इसे अप्रैल 2023 में अमित शाह ने औपचारिक रूप से शुरू किया।"
          }
        ]
      }
    ]
  },
  {
    slug: "pragati-initiative",
    title: "PRAGATI Initiative",
    titleHi: "प्रगति पहल",
    pages: "152",
    blocks: [
      {
        heading: "About the Initiative",
        headingHi: "पहल के बारे में",
        paragraphs: [
          {
            en: "In July 2026, the Union Minister of Agriculture and Farmers Welfare Shivraj Singh Chouhan launched the PRAGATI initiative in New Delhi to transform Indian agriculture through rural entrepreneurship and sustainable farming practices. Full form: 'Promoting Regenerative Agriculture through Agri-Entrepreneurship Initiative'.",
            hi: "केंद्रीय कृषि एवं किसान कल्याण मंत्री शिवराज सिंह चौहान ने जुलाई 2026 में प्रगति पहल शुरू की। PRAGATI का पूरा नाम Promoting Regenerative Agriculture through Agri-Entrepreneurship Initiative है।"
          }
        ]
      },
      {
        heading: "Core Targets & States",
        headingHi: "मुख्य लक्ष्य एवं राज्य",
        paragraphs: [
          {
            en: "The initiative aims to train and empower 20,000 rural youth as agri-entrepreneurs, who will in turn provide direct agricultural and financial support to 20 lakh (2 million) small and marginal farmers. The programme will be implemented across 8 major agricultural states: Madhya Pradesh, Uttar Pradesh, Bihar, Maharashtra, Rajasthan, West Bengal, Assam and Jharkhand.",
            hi: "इसमें 20,000 ग्रामीण युवाओं को कृषि उद्यमी के रूप में प्रशिक्षित कर 20 लाख छोटे और सीमांत किसानों तक सहयोग पहुँचाने का लक्ष्य है। प्रारंभिक चरण में मध्य प्रदेश, उत्तर प्रदेश, बिहार, महाराष्ट्र, राजस्थान, पश्चिम बंगाल, असम और झारखंड शामिल हैं।"
          }
        ]
      }
    ]
  }
]

// ---------------------------------------------------------------------------
// One-Liner Q&A (from PDF p. 152–154)
// ---------------------------------------------------------------------------
const oneLiners: { question: string; answer: string }[] = [
  { question: "अंगदान और प्रत्यारोपण की एकीकृत राष्ट्रीय डिजिटल प्रणाली का नाम क्या है?", answer: "ई-प्रत्यारोपण" },
  { question: "'Back to School 2026' एआई शिक्षा अभियान किस प्रौद्योगिकी कंपनी ने शुरू किया?", answer: "गूगल" },
  { question: "पिंक सहेली स्मार्ट कार्ड के अंतर्गत निःशुल्क सरकारी बस यात्रा किस क्षेत्र में शुरू हुई?", answer: "राष्ट्रीय राजधानी क्षेत्र दिल्ली" },
  { question: "महिलाओं और ट्रांसजेंडर व्यक्तियों के लिए DURGA ग्रीन ई-ऑटो योजना किस क्षेत्र से संबंधित है?", answer: "राष्ट्रीय राजधानी क्षेत्र दिल्ली" },
  { question: "रात्रि में यात्रा करने वाली महिलाओं की सुरक्षा के लिए 'निर्भया निशा' पहल किस राज्य ने शुरू की?", answer: "केरल" },
  { question: "अटल नवाचार मिशन के अंतर्गत पहला राज्य नवाचार मिशन किस राज्य में शुरू हुआ?", answer: "त्रिपुरा" },
  { question: "राष्ट्रीय राजमार्गों के किनारे औषधीय पेड़ लगाने की 'आरोग्य वन' पहल किसने शुरू की?", answer: "भारतीय राष्ट्रीय राजमार्ग प्राधिकरण (NHAI)" },
  { question: "बौने एवं लघु पौधों पर आधारित 'वामन वन' पहल कहाँ प्रस्तावित की गई?", answer: "दिल्ली" },
  { question: "कक्षा 9 से 12 के विद्यार्थियों के लिए 'मुख्यमंत्री भारत दर्शन योजना' किस राज्य ने शुरू की?", answer: "बिहार" },
  { question: "निर्यातकों के लिए युद्ध जोखिम और माल ढुलाई लागत से संबंधित राहत योजना का नाम क्या है?", answer: "RELIEF योजना" },
  { question: "आवारा और बेसहारा पशुओं के लिए 'गौधाम योजना' किस राज्य से संबंधित है?", answer: "छत्तीसगढ़" },
  { question: "मूगा रेशम को वैश्विक लग्ज़री ब्रांड बनाने की 'मिशन स्नेहजोरी' पहल किस राज्य में शुरू हुई?", answer: "असम" }
]

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------
function TopicCard({ topic, index, total }: { topic: SchemeTopic; index: number; total: number }) {
    return (
        <article id={topic.slug} className="scroll-mt-28 bg-card rounded-xl border shadow-sm overflow-hidden">
            {/* Card header */}
            <div className="px-5 sm:px-6 py-4 border-b bg-purple-50/50">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-purple-700 uppercase tracking-wide">
                        Topic {index + 1} of {total}
                    </span>
                    {/* <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" /> PDF page {topic.pages}
                    </span> */}
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">{topic.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{topic.titleHi}</p>
            </div>

            {/* Paragraph blocks */}
            <div className="px-5 sm:px-6 py-5 space-y-7">
                {topic.blocks.map((block, i) => (
                    <div key={i}>
                        <h4 className="text-sm font-semibold text-purple-800 mb-3 border-l-4 border-purple-400 pl-3">
                            {block.heading} <span className="text-muted-foreground font-normal">/ {block.headingHi}</span>
                        </h4>
                        <div className="space-y-3">
                            {block.paragraphs.map((p, j) => (
                                <div key={j} className="text-sm leading-7 text-foreground/90">
                                    <p>{p.en}</p>
                                    <p className="text-muted-foreground mt-1.5">{p.hi}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="px-5 sm:px-6 py-3 border-t bg-muted/30 flex justify-end">
                <a href="#topic-index" className="text-xs text-purple-700 hover:underline">Back to topic index ↑</a>
            </div>
        </article>
    )
}

export default function GovernmentSchemesInitiativesPage() {
    const [search, setSearch] = useState("")
    const normalizedSearch = search.trim().toLowerCase()
    const filtered = normalizedSearch
        ? topics.filter(topic =>
            `${topic.title} ${topic.titleHi} ${topic.blocks.map(b => b.paragraphs.map(p => `${p.en} ${p.hi}`).join(" ")).join(" ")}`
                .toLowerCase()
                .includes(normalizedSearch)
        )
        : topics

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero */}
            <section className="pt-5 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:text-purple-900 mb-6">
                        <ArrowLeft className="w-4 h-4" /> Back to Current Affairs
                    </Link>
                    <div className="flex">
                        <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                            <Sparkles className="w-4 h-4" /> Complete Topic Digest · Schemes & Initiatives
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
                        Important Government Schemes & Initiatives 2026
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        महत्वपूर्ण सरकारी योजनाएँ एवं पहलें 2026 — संपूर्ण नोट्स और प्रश्नोत्तर
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                            <Calendar className="w-4 h-4 text-purple-600" /><span>2026 · PDF pp. 133–154</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                            <Landmark className="w-4 h-4 text-purple-600" /><span>{topics.length} Detailed Topics</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                            <Target className="w-4 h-4 text-purple-600" /><span>One-Liner Q&A</span>
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-5">
                {/* Topic index */}
                <section id="topic-index" className="scroll-mt-28 mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-5 h-5 text-purple-600" />
                        <h2 className="text-2xl font-bold">Topic-wise List / विषयवार सूची</h2>
                    </div>
                    <div className="rounded-xl border bg-card p-4 md:p-5">
                        <label htmlFor="scheme-search" className="relative block mb-4">
                            <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                            <input
                                id="scheme-search"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Search topic / विषय खोजें"
                                className="w-full h-10 rounded-lg border bg-background pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                            />
                            {search && (
                                <button type="button" onClick={() => setSearch("")} aria-label="Clear search" className="absolute right-3 top-3">
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </label>
                        <nav aria-label="Government scheme topics" className="grid sm:grid-cols-2 gap-2">
                            {filtered.map(topic => (
                                <a key={topic.slug} href={`#${topic.slug}`} className="rounded-lg border p-3 flex items-start gap-2 text-sm hover:bg-purple-50 hover:border-purple-200">
                                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-purple-600" />
                                    <span>
                                        <span className="font-medium">{topic.title}</span>
                                        <span className="block text-xs text-muted-foreground mt-0.5">{topic.titleHi}</span>
                                    </span>
                                </a>
                            ))}
                            {filtered.length === 0 && <p className="text-sm text-muted-foreground p-3">No matching topic found.</p>}
                        </nav>
                        <a href="#one-liner-qa" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700">
                            <Target className="w-4 h-4" /> Jump to One-Liner Q&A
                        </a>
                    </div>
                </section>

                {/* Detailed topic notes */}
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Landmark className="w-5 h-5 text-purple-600" />
                        <h2 className="text-2xl font-bold">Detailed Topic Notes / विषयवार विस्तृत नोट्स</h2>
                    </div>
                    <div className="space-y-6">
                        {filtered.map((topic, i) => (
                            <TopicCard key={topic.slug} topic={topic} index={i} total={filtered.length} />
                        ))}
                    </div>
                </section>

                {/* One-liner Q&A */}
                <section id="one-liner-qa" className="scroll-mt-28 mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Target className="w-5 h-5 text-purple-600" />
                        <h2 className="text-2xl font-bold">One-Liner Q&A / एक-पंक्ति प्रश्नोत्तर</h2>
                    </div>
                    <div className="rounded-xl border bg-card p-5">
                        <p className="text-sm text-muted-foreground mb-4">
                            स्रोत PDF के प्रश्नों से तैयार स्पष्ट हिंदी प्रश्नोत्तर:
                        </p>
                        <div className="space-y-2">
                            {oneLiners.map((item, i) => (
                                <details key={i} className="rounded-lg border p-4">
                                    <summary className="text-sm font-medium cursor-pointer">{i + 1}. {item.question}</summary>
                                    <p className="text-sm text-green-700 font-medium pt-3">उत्तर: {item.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer nav */}
                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs">
                        <Button variant="outline" className="gap-2 cursor-pointer">
                            <ArrowLeft className="w-4 h-4" /> Back to Current Affairs
                        </Button>
                    </Link>
                     <Link href="/current-affairs/by-topic/science-technology">
                        <Button variant="outline" className="gap-2 cursor-pointer">Next: Science & Technology <ChevronRight className="w-4 h-4" /></Button>
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