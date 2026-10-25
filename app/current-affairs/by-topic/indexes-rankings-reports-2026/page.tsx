"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useMemo, useState } from "react"
import { ArrowLeft, BarChart3, BookOpen, Calendar, CheckCircle2, ChevronRight, HelpCircle, Languages, Search, Sparkles, Target, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type Fact = { en: string; hi: string }
type Topic = { slug: string; en: string; hi: string; facts: Fact[] }
type QA = { en: string; hi: string; answer: string }
type Quiz = { en: string; hi: string; options: string[]; correct: number; reasonEn: string; reasonHi: string }

// Derived from the supplied Indexes, Rankings & Reports PDF, printed pp. 204–215.
// These are source-attributed study notes, not independently authenticated rankings.
const topics: Topic[] = [
  { slug: "global-peace-index", en: "Global Peace Index 2026", hi: "वैश्विक शांति सूचकांक 2026", facts: [
    { en: "Publisher: Institute for Economics & Peace (IEP). Top three: Iceland, New Zealand and Switzerland.", hi: "प्रकाशक: इंस्टीट्यूट फॉर इकोनॉमिक्स एंड पीस (IEP)। शीर्ष तीन: आइसलैंड, न्यूज़ीलैंड और स्विट्ज़रलैंड।" },
    { en: "India: 127th (score 2.409); the source lists India's 2025 rank as 115th. Russia is listed last, 163rd.", hi: "भारत: 127वाँ स्थान (स्कोर 2.409); स्रोत में 2025 का स्थान 115वाँ बताया गया है। रूस अंतिम, 163वाँ।" },
    { en: "Bhutan is described as South Asia's most peaceful nation; MENA as the least peaceful region. The report highlights 'Great Fragmentation' and AI-enabled warfare.", hi: "भूटान दक्षिण एशिया का सबसे शांतिपूर्ण देश और मध्य पूर्व–उत्तरी अफ्रीका सबसे अशांत क्षेत्र बताया गया है। 'ग्रेट फ्रैगमेंटेशन' और AI-संचालित युद्ध का उल्लेख है।" },
  ] },
  { slug: "world-happiness-report", en: "World Happiness Report 2026", hi: "विश्व प्रसन्नता रिपोर्ट 2026", facts: [
    { en: "Published by Oxford University's Wellbeing Research Centre with Gallup and the UN Sustainable Development Solutions Network.", hi: "ऑक्सफोर्ड विश्वविद्यालय के वेलबीइंग रिसर्च सेंटर द्वारा गैलप एवं UN SDSN के सहयोग से प्रकाशित।" },
    { en: "Top three: Finland, Iceland, Denmark. India: 116th among 147 countries; source says 118th in 2025. Last: Afghanistan (147th).", hi: "शीर्ष तीन: फिनलैंड, आइसलैंड, डेनमार्क। भारत: 147 देशों में 116वाँ (2025 में 118वाँ)। अंतिम: अफगानिस्तान।" },
    { en: "Six broad factors: per-capita GDP, healthy life expectancy, social support, freedom of choice, generosity and perceptions of corruption.", hi: "छह प्रमुख कारक: प्रति व्यक्ति GDP, स्वस्थ जीवन प्रत्याशा, सामाजिक सहयोग, चयन की स्वतंत्रता, उदारता और भ्रष्टाचार की धारणा।" },
    { en: "The PDF describes a 'Goldilocks' social-media pattern: less than one hour of daily use is associated with greater adolescent life satisfaction than no use; this is observational, not a causal recommendation.", hi: "स्रोत में 'गोल्डीलॉक्स' पैटर्न है: प्रतिदिन एक घंटे से कम सोशल मीडिया उपयोग का किशोर जीवन-संतुष्टि से संबंध दिखाया गया है; यह संबंध है, कारणात्मक सलाह नहीं।" },
  ] },
  { slug: "global-terrorism-index", en: "Global Terrorism Index 2026", hi: "वैश्विक आतंकवाद सूचकांक 2026", facts: [
    { en: "Published by IEP. India: 13th of 163 countries, score 6.428.", hi: "प्रकाशक: IEP। भारत 163 देशों में 13वाँ, स्कोर 6.428।" },
    { en: "Pakistan is named the most affected country. Six of the ten most affected countries are described as being in sub-Saharan Africa's Sahel region.", hi: "पाकिस्तान को सर्वाधिक प्रभावित देश बताया गया है। शीर्ष दस में छह देश उप-सहारा अफ्रीका के साहेल क्षेत्र के बताए गए हैं।" },
  ] },
  { slug: "global-gender-gap", en: "Global Gender Gap Report 2026", hi: "वैश्विक लैंगिक अंतर रिपोर्ट 2026", facts: [
    { en: "Publisher: World Economic Forum (WEF). Top three: Iceland, Finland and Norway.", hi: "प्रकाशक: विश्व आर्थिक मंच (WEF)। शीर्ष तीन: आइसलैंड, फिनलैंड और नॉर्वे।" },
    { en: "India: 131st out of 145 economies, gender-parity score 64.5%.", hi: "भारत: 145 अर्थव्यवस्थाओं में 131वाँ स्थान; लैंगिक समानता स्कोर 64.5%।" },
    { en: "The source estimates 69.2% of the global gender gap is closed and 120 more years are needed for full parity at the current pace.", hi: "स्रोत के अनुसार वैश्विक लैंगिक अंतर का 69.2% समाप्त हुआ है; वर्तमान गति पर पूर्ण समानता में 120 वर्ष लग सकते हैं।" },
  ] },
  { slug: "travel-tourism-index", en: "Travel & Tourism Development Index 2026", hi: "यात्रा एवं पर्यटन विकास सूचकांक 2026", facts: [
    { en: "Published by WEF in collaboration with Zurich Insurance Group.", hi: "विश्व आर्थिक मंच द्वारा ज़्यूरिख इंश्योरेंस समूह के सहयोग से प्रकाशित।" },
    { en: "Highest-ranked economy: Japan. India: 31st of 110 economies.", hi: "शीर्ष देश: जापान। भारत: 110 अर्थव्यवस्थाओं में 31वाँ।" },
  ] },
  { slug: "energy-transition-index", en: "Energy Transition Index 2026", hi: "ऊर्जा संक्रमण सूचकांक 2026", facts: [
    { en: "Publisher: World Economic Forum. Top three: Sweden, Finland and Denmark.", hi: "प्रकाशक: WEF। शीर्ष तीन: स्वीडन, फिनलैंड और डेनमार्क।" },
    { en: "India: 70th, overall score 54.9; improvement of two positions from the previous edition.", hi: "भारत: 70वाँ स्थान, स्कोर 54.9; पिछले संस्करण से दो स्थान का सुधार।" },
  ] },
  { slug: "environment-performance-index", en: "Environmental Performance Index 2026", hi: "पर्यावरण प्रदर्शन सूचकांक 2026", facts: [
    { en: "Joint publishers: Yale Center for Environmental Law & Policy and Columbia University's CIESIN.", hi: "संयुक्त प्रकाशक: येल पर्यावरण कानून एवं नीति केंद्र और कोलंबिया विश्वविद्यालय का CIESIN।" },
    { en: "The source lists Estonia in first place and India 176th out of 177 with score 22.46.", hi: "स्रोत में एस्टोनिया प्रथम और भारत 177 देशों में 176वाँ (स्कोर 22.46) बताया गया है।" },
  ] },
  { slug: "press-freedom-index", en: "World Press Freedom Index 2026", hi: "विश्व प्रेस स्वतंत्रता सूचकांक 2026", facts: [
    { en: "Published by Reporters Without Borders (RSF). Top three: Norway, Netherlands and Estonia.", hi: "प्रकाशक: रिपोर्टर्स विदाउट बॉर्डर्स (RSF)। शीर्ष तीन: नॉर्वे, नीदरलैंड और एस्टोनिया।" },
    { en: "India: 157th out of 180, score 31.96; down from 151st in 2025. Last: Eritrea (180th).", hi: "भारत: 180 देशों में 157वाँ, स्कोर 31.96; 2025 में 151वाँ। अंतिम: इरिट्रिया (180वाँ)।" },
    { en: "The source says 52.2% of countries or territories were classified as having difficult or very serious press-freedom situations.", hi: "स्रोत के अनुसार 52.2% देशों/क्षेत्रों में प्रेस स्वतंत्रता की स्थिति 'कठिन' या 'अत्यंत गंभीर' थी।" },
  ] },
  { slug: "corruption-perceptions", en: "Corruption Perceptions Index 2025", hi: "भ्रष्टाचार धारणा सूचकांक 2025", facts: [
    { en: "Publisher: Transparency International. Top three: Denmark, Finland and Singapore.", hi: "प्रकाशक: ट्रांसपेरेंसी इंटरनेशनल। शीर्ष तीन: डेनमार्क, फिनलैंड और सिंगापुर।" },
    { en: "India: 91st out of 182, score 39/100; previous rank 96th, score 38/100.", hi: "भारत: 182 देशों में 91वाँ, स्कोर 39/100; पिछला स्थान 96वाँ, स्कोर 38/100।" },
    { en: "Somalia and South Sudan are listed at the bottom. The scale runs from 0 (high perceived corruption) to 100 (very clean).", hi: "सोमालिया और दक्षिण सूडान अंतिम स्थान पर बताए गए हैं। स्कोर 0 (अत्यधिक भ्रष्टाचार की धारणा) से 100 (बहुत स्वच्छ) तक होता है।" },
  ] },
  { slug: "global-firepower", en: "Global Firepower Military Strength Ranking 2026", hi: "वैश्विक सैन्य शक्ति रैंकिंग 2026", facts: [
    { en: "Compiled by Global Firepower. Top three: United States, Russia and China.", hi: "प्रकाशक: ग्लोबल फायरपावर। शीर्ष तीन: अमेरिका, रूस और चीन।" },
    { en: "India: 4th out of 145 countries, PowerIndex score 0.1346.", hi: "भारत: 145 देशों में चौथा स्थान, पावरइंडेक्स स्कोर 0.1346।" },
  ] },
  { slug: "global-liveability", en: "Global Liveability Index 2026", hi: "वैश्विक रहने-योग्यता सूचकांक 2026", facts: [
    { en: "Published by Economist Intelligence Unit. Top city: Copenhagen, Denmark.", hi: "प्रकाशक: इकोनॉमिस्ट इंटेलिजेंस यूनिट। शीर्ष शहर: कोपेनहेगन, डेनमार्क।" },
    { en: "Parameters: stability (25%), healthcare (20%), culture and environment (25%), education (10%) and infrastructure (20%).", hi: "मानदंड: स्थिरता 25%, स्वास्थ्य 20%, संस्कृति एवं पर्यावरण 25%, शिक्षा 10% और बुनियादी ढाँचा 20%।" },
    { en: "Indian city ranks: New Delhi 120, Mumbai 121, Chennai 123 and Bengaluru 127.", hi: "भारतीय शहरों की रैंक: नई दिल्ली 120, मुंबई 121, चेन्नई 123 और बेंगलुरु 127।" },
  ] },
  { slug: "qs-world-university", en: "QS World University Rankings 2027", hi: "क्यूएस विश्व विश्वविद्यालय रैंकिंग 2027", facts: [
    { en: "Global topper: Massachusetts Institute of Technology (MIT), described as leading for the 15th consecutive year.", hi: "वैश्विक शीर्ष संस्थान: मैसाचुसेट्स इंस्टीट्यूट ऑफ टेक्नोलॉजी (MIT), लगातार 15वें वर्ष प्रथम।" },
    { en: "India: fifth globally by number of represented universities (52); the United States has the most entries.", hi: "सूची में शामिल विश्वविद्यालयों की संख्या (52) के आधार पर भारत पाँचवें स्थान पर; अमेरिका से सर्वाधिक विश्वविद्यालय।" },
    { en: "Indian top 200: IIT Delhi 118, IIT Bombay 134 and IIT Madras 170.", hi: "शीर्ष 200 में: IIT दिल्ली 118, IIT बॉम्बे 134 और IIT मद्रास 170।" },
  ] },
  { slug: "india-next-growth-frontier", en: "India's Next Growth Frontier Report", hi: "इंडियाज़ नेक्स्ट ग्रोथ फ्रंटियर रिपोर्ट", facts: [
    { en: "Prepared by the Competere Foundation with the Centre for Trade and Investment Law (CTIL), IIFT.", hi: "कम्पीटियर फाउंडेशन द्वारा IIFT के सेंटर फॉर ट्रेड एंड इन्वेस्टमेंट लॉ (CTIL) के सहयोग से तैयार।" },
    { en: "Examines structural reforms, market distortions and India's global competitiveness. The source cites an improvement in market-distortion performance rank from 82 (2010) to 57 (2023).", hi: "संरचनात्मक सुधार, बाज़ार विकृतियों और वैश्विक प्रतिस्पर्धात्मकता का मूल्यांकन। स्रोत में रैंक 2010 के 82वें से 2023 के 57वें तक सुधरने का उल्लेख है।" },
  ] },
  { slug: "sofi-report", en: "State of Food Security and Nutrition in the World (SOFI) 2026", hi: "विश्व खाद्य सुरक्षा और पोषण स्थिति रिपोर्ट 2026", facts: [
    { en: "Jointly published by FAO, IFAD, UNICEF, WFP and WHO.", hi: "FAO, IFAD, UNICEF, WFP और WHO द्वारा संयुक्त रूप से प्रकाशित।" },
    { en: "The PDF reports hunger affecting 7.8% of the global population in 2025 (8.1% in 2024).", hi: "PDF के अनुसार 2025 में 7.8% वैश्विक आबादी भूख से प्रभावित थी (2024 में 8.1%)।" },
    { en: "About 2.1 billion experienced moderate or severe food insecurity; Africa is described as having the largest hungry population.", hi: "लगभग 2.1 अरब लोग मध्यम या गंभीर खाद्य असुरक्षा से प्रभावित; सबसे अधिक भूखग्रस्त आबादी वाला क्षेत्र अफ्रीका बताया गया है।" },
  ] },
  { slug: "world-air-quality", en: "World Air Quality Report 2025", hi: "विश्व वायु गुणवत्ता रिपोर्ट 2025", facts: [
    { en: "Publisher: Swiss air-quality company IQAir. Uses average annual PM2.5 concentrations.", hi: "प्रकाशक: स्विस कंपनी IQAir। आधार: वार्षिक औसत PM2.5 सांद्रता।" },
    { en: "Most polluted countries listed: Pakistan, Bangladesh, Tajikistan. India: sixth of 143, average PM2.5 of 48.9 µg/m³.", hi: "सर्वाधिक प्रदूषित देश: पाकिस्तान, बांग्लादेश, ताजिकिस्तान। भारत: 143 में छठा, औसत PM2.5: 48.9 µg/m³।" },
    { en: "Most polluted city: Loni (Uttar Pradesh), followed by Byrnihat. New Delhi is listed as the most polluted capital for an eighth year.", hi: "सबसे प्रदूषित शहर: लोनी (उत्तर प्रदेश), उसके बाद बर्नीहाट। नई दिल्ली लगातार आठवें वर्ष सबसे प्रदूषित राजधानी बताई गई है।" },
    { en: "Only 14% of cities met the WHO annual PM2.5 guideline (5 µg/m³), according to the source.", hi: "स्रोत के अनुसार केवल 14% शहरों ने WHO की वार्षिक PM2.5 सीमा (5 µg/m³) पूरी की।" },
  ] },
  { slug: "swachh-vayu", en: "Swachh Vayu Sarvekshan Awards 2026", hi: "स्वच्छ वायु सर्वेक्षण पुरस्कार 2026", facts: [
    { en: "Presented by the Ministry of Environment, Forest and Climate Change under the National Clean Air Programme; 130 cities evaluated.", hi: "राष्ट्रीय स्वच्छ वायु कार्यक्रम के अंतर्गत पर्यावरण, वन एवं जलवायु परिवर्तन मंत्रालय द्वारा प्रदान; 130 शहरों का मूल्यांकन।" },
    { en: "Large cities (>10 lakh): Lucknow topped with 198 points; Indore second and Jabalpur third.", hi: "बड़े शहर (10 लाख से अधिक): लखनऊ प्रथम (198 अंक), इंदौर द्वितीय और जबलपुर तृतीय।" },
    { en: "Medium cities (3–10 lakh): Rourkela first, Firozabad second. Small cities (<3 lakh): Kalinganagar first.", hi: "मध्यम शहर: राउरकेला प्रथम, फिरोज़ाबाद द्वितीय। छोटे शहर: कलिंगनगर प्रथम।" },
  ] },
  { slug: "sipri-arms-transfers", en: "SIPRI Arms Transfers Report (2021–2025)", hi: "सिपरी हथियार हस्तांतरण रिपोर्ट", facts: [
    { en: "Publisher: Stockholm International Peace Research Institute (SIPRI). Largest exporters: United States and France.", hi: "प्रकाशक: स्टॉकहोम अंतरराष्ट्रीय शांति अनुसंधान संस्थान (SIPRI)। प्रमुख निर्यातक: अमेरिका और फ्रांस।" },
    { en: "Ukraine was listed as the largest arms importer and India second, with 8.2% of global imports.", hi: "यूक्रेन सबसे बड़ा हथियार आयातक और भारत 8.2% वैश्विक हिस्सेदारी के साथ दूसरा बताया गया है।" },
    { en: "Indian imports fell 4.0% compared with 2016–2020; Europe accounted for 33% of global imports.", hi: "2016–2020 की तुलना में भारत के आयात 4.0% कम बताए गए हैं; यूरोप की वैश्विक आयात हिस्सेदारी 33%।" },
  ] },
  { slug: "sipri-military-expenditure", en: "SIPRI World Military Expenditure Report 2025", hi: "सिपरी वैश्विक सैन्य व्यय रिपोर्ट 2025", facts: [
    { en: "Published by SIPRI in April 2026. Top spenders: United States, China, Russia, Germany and India.", hi: "सिपरी द्वारा अप्रैल 2026 में प्रकाशित। शीर्ष व्ययकर्ता: अमेरिका, चीन, रूस, जर्मनी और भारत।" },
    { en: "India was listed fifth globally, spending $92.1 billion in 2025 (8.9% more than 2024).", hi: "भारत पाँचवाँ सबसे बड़ा सैन्य व्ययकर्ता बताया गया है; 2025 में $92.1 अरब, 2024 से 8.9% अधिक।" },
  ] },
  { slug: "worlds-cities-report", en: "The World's Cities in 2025 Report", hi: "विश्व के शहर 2025 रिपोर्ट", facts: [
    { en: "Published by UN DESA Population Division as part of World Urbanization Prospects 2025.", hi: "UN DESA के जनसंख्या प्रभाग द्वारा विश्व नगरीकरण संभावनाएँ 2025 श्रृंखला में प्रकाशित।" },
    { en: "Most populous cities listed: Jakarta (41.9 million) and Dhaka (36.6 million). New Delhi: fourth, 30.2 million.", hi: "सबसे अधिक जनसंख्या वाले शहर: जकार्ता (4.19 करोड़), ढाका (3.66 करोड़)। नई दिल्ली चौथे स्थान पर (3.02 करोड़)।" },
    { en: "The report puts the city-dwelling share of the world's 8.2 billion people at approximately 45%.", hi: "रिपोर्ट में विश्व की 8.2 अरब आबादी का लगभग 45% शहरों में रहने वाला बताया गया है।" },
  ] },
  { slug: "investment-friendliness", en: "NITI Aayog Investment Friendliness Index 2026", hi: "नीति आयोग निवेश अनुकूलता सूचकांक 2026", facts: [
    { en: "First edition issued by NITI Aayog. Large states: Gujarat first, Maharashtra second. Hill/North-East: Uttarakhand first. UT/city states: Goa first.", hi: "नीति आयोग द्वारा प्रथम संस्करण। बड़े राज्यों में गुजरात प्रथम, महाराष्ट्र द्वितीय; पर्वतीय/पूर्वोत्तर में उत्तराखंड; केंद्रशासित/सिटी राज्य श्रेणी में गोवा प्रथम।" },
    { en: "Bihar is listed last. Uttar Pradesh: 13th among large states, 19th overall, score 45.0.", hi: "बिहार अंतिम बताया गया है। उत्तर प्रदेश बड़े राज्यों में 13वाँ, समग्र रैंक 19 और स्कोर 45.0।" },
  ] },
  { slug: "leads-2025", en: "LEADS 2025 Report", hi: "लीड्स 2025 रिपोर्ट", facts: [
    { en: "Publisher: DPIIT, Ministry of Commerce and Industry. LEADS: Logistics Ease Across Different States.", hi: "प्रकाशक: DPIIT, वाणिज्य एवं उद्योग मंत्रालय। LEADS: लॉजिस्टिक्स ईज़ अक्रॉस डिफरेंट स्टेट्स।" },
    { en: "The source estimates logistics cost at 7.97% of India's GDP and describes four tiers: Exemplars, High Performers, Accelerators and Growth Seekers.", hi: "स्रोत में भारत की लॉजिस्टिक्स लागत GDP का 7.97% तथा चार श्रेणियाँ: एग्जेम्पलर्स, हाई परफॉर्मर्स, एक्सेलरेटर्स और ग्रोथ सीकर्स।" },
    { en: "Exemplars: Tamil Nadu (coastal), Uttar Pradesh (landlocked), Mizoram (North-East), Delhi (UT).", hi: "शीर्ष श्रेणी: तमिलनाडु (तटीय), उत्तर प्रदेश (स्थलरुद्ध), मिजोरम (पूर्वोत्तर), दिल्ली (केंद्रशासित प्रदेश)।" },
  ] },
  { slug: "pai-2-0", en: "Panchayat Advancement Index (PAI) 2.0", hi: "पंचायत उन्नति सूचकांक 2.0", facts: [
    { en: "Publisher: Ministry of Panchayati Raj; FY 2023–24 data, released on 24 April 2026.", hi: "प्रकाशक: पंचायती राज मंत्रालय। वित्त वर्ष 2023–24 के आँकड़े; प्रकाशन 24 अप्रैल 2026।" },
    { en: "Tripura topped the Front Runner (Grade A) share: 943 of 1,176 panchayats, approximately 80.2%. National total: 3,635 Front Runners.", hi: "त्रिपुरा में 1,176 में से 943 पंचायतें (लगभग 80.2%) फ्रंट रनर (ग्रेड A) थीं। देशभर में 3,635 ग्राम पंचायतें फ्रंट रनर।" },
    { en: "Based on Localisation of Sustainable Development Goals, organising 17 SDGs into nine panchayat-level themes.", hi: "यह सतत विकास लक्ष्यों के स्थानीयकरण पर आधारित है; 17 SDGs को पंचायतों के लिए नौ विषयों में बाँटा गया है।" },
  ] },
  { slug: "women-men-india", en: "Women and Men in India 2025: Selected Indicators", hi: "भारत में महिलाएँ और पुरुष 2025: चयनित संकेतक", facts: [
    { en: "Publisher: Ministry of Statistics and Programme Implementation (MoSPI).", hi: "प्रकाशक: सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय (MoSPI)।" },
    { en: "Maternal mortality ratio: 88 per 100,000 live births (2020–22), from 93 (2019–21).", hi: "मातृ मृत्यु अनुपात: 2020–22 में प्रति एक लाख जीवित जन्म 88, जबकि 2019–21 में 93।" },
    { en: "Rural female labour-force participation rose from 37.5% (2022) to 45.9% (2025).", hi: "ग्रामीण महिलाओं की श्रमबल भागीदारी 2022 में 37.5% से बढ़कर 2025 में 45.9%।" },
    { en: "Higher-education GER (2022–23): women 30.2, men 28.9. Sex ratio at birth rose from 904 to 917 across the cited periods.", hi: "उच्च शिक्षा GER (2022–23): महिला 30.2, पुरुष 28.9। जन्म के समय लिंग अनुपात स्रोत की अवधियों में 904 से 917 हुआ।" },
  ] },
  { slug: "export-preparedness", en: "Export Preparedness Index 2024", hi: "निर्यात तैयारी सूचकांक 2024", facts: [
    { en: "Fourth edition, released by NITI Aayog in January 2026. Evaluates export readiness and competitiveness of states and UTs.", hi: "नीति आयोग द्वारा जनवरी 2026 में जारी चौथा संस्करण; राज्यों एवं केंद्रशासित प्रदेशों की निर्यात तैयारी और प्रतिस्पर्धा का मूल्यांकन।" },
    { en: "Large states: Maharashtra, Tamil Nadu, Gujarat and Uttar Pradesh (ranks 1–4).", hi: "बड़े राज्य: महाराष्ट्र प्रथम, तमिलनाडु द्वितीय, गुजरात तृतीय और उत्तर प्रदेश चतुर्थ।" },
    { en: "Small, North-Eastern states and UTs: Uttarakhand first, Jammu & Kashmir second.", hi: "छोटे/पूर्वोत्तर राज्य व केंद्रशासित प्रदेश: उत्तराखंड प्रथम, जम्मू-कश्मीर द्वितीय।" },
  ] },
  { slug: "fiscal-health-index", en: "Fiscal Health Index 2026", hi: "राजकोषीय स्वास्थ्य सूचकांक 2026", facts: [
    { en: "NITI Aayog's second edition uses CAG data for FY 2023–24, assessing 18 major and 10 North-Eastern/Himalayan states.", hi: "नीति आयोग का दूसरा संस्करण; वित्त वर्ष 2023–24 के CAG आँकड़ों पर आधारित, 18 बड़े व 10 पूर्वोत्तर/हिमालयी राज्यों का आकलन।" },
    { en: "Five dimensions: expenditure quality, revenue mobilisation, fiscal prudence, debt index and debt sustainability.", hi: "पाँच आधार: व्यय की गुणवत्ता, राजस्व जुटाना, राजकोषीय विवेक, ऋण सूचकांक और ऋण स्थिरता।" },
    { en: "Achievers: Odisha (73.1) and Goa; Front Runner: Gujarat; Performer: Madhya Pradesh; Aspirational: Punjab (18th).", hi: "अचीवर: ओडिशा (73.1) और गोवा; फ्रंट रनर: गुजरात; परफॉर्मर: मध्य प्रदेश; एस्पिरेशनल: पंजाब (18वाँ)।" },
    { en: "Arunachal Pradesh and Uttarakhand were Achievers among Himalayan/North-Eastern states. Uttar Pradesh: eighth among major states, score 41.9 (Front Runner).", hi: "पूर्वोत्तर/हिमालयी समूह में अरुणाचल प्रदेश और उत्तराखंड अचीवर। उत्तर प्रदेश बड़े राज्यों में आठवाँ, स्कोर 41.9 (फ्रंट रनर)।" },
  ] },
]

const oneLiners: QA[] = [
  { en: "Which country ranked first in the SCCI Global Business Climate Survey 2026?", hi: "SCCI ग्लोबल बिज़नेस क्लाइमेट सर्वेक्षण 2026 में पहला देश कौन-सा था?", answer: "India / भारत" },
  { en: "Who published State of Global Water Resources 2025?", hi: "स्टेट ऑफ ग्लोबल वाटर रिसोर्सेज़ 2025 किसने प्रकाशित की?", answer: "World Meteorological Organization (WMO) / विश्व मौसम विज्ञान संगठन" },
  { en: "Which organisation published the AI-related health-research ethics guidance?", hi: "AI स्वास्थ्य अनुसंधान की नैतिक समीक्षा संबंधी मार्गदर्शन किसने जारी किया?", answer: "World Health Organization (WHO) / विश्व स्वास्थ्य संगठन" },
  { en: "India's top container port in Container Port Performance Index 2025?", hi: "कंटेनर पोर्ट प्रदर्शन सूचकांक 2025 में भारत का शीर्ष बंदरगाह कौन-सा था?", answer: "Jawaharlal Nehru Port Authority (JNPA), global rank 22 / जेएनपीए, वैश्विक स्थान 22" },
  { en: "Who was listed as the world's first trillionaire in June 2026?", hi: "जून 2026 में दुनिया का पहला ट्रिलियनेयर किसे बताया गया?", answer: "Elon Musk / एलन मस्क" },
  { en: "India's position in QS World Future Skills Index 2027?", hi: "QS विश्व भविष्य कौशल सूचकांक 2027 में भारत की रैंक?", answer: "13th; United States first / 13वाँ; अमेरिका प्रथम" },
  { en: "India's rank in Global Citizen Solutions Passport Index 2026?", hi: "ग्लोबल सिटिजन सॉल्यूशंस पासपोर्ट सूचकांक 2026 में भारत का स्थान?", answer: "125th out of 197 / 197 में 125वाँ" },
  { en: "Which Indian city ranked sixth in Time Out's happiest cities survey?", hi: "टाइम आउट के सबसे खुशहाल शहर सर्वेक्षण में छठा भारतीय शहर?", answer: "Jaipur, Rajasthan / जयपुर, राजस्थान" },
  { en: "Who published the sports-goods export-potential report?", hi: "खेल उपकरण निर्यात क्षमता रिपोर्ट किसने जारी की?", answer: "NITI Aayog / नीति आयोग" },
  { en: "Who publishes the World Water Development Report 2026?", hi: "विश्व जल विकास रिपोर्ट 2026 का प्रकाशक कौन है?", answer: "United Nations / संयुक्त राष्ट्र" },
  { en: "Which state led the first National Highway Green Cover Index?", hi: "पहले राष्ट्रीय राजमार्ग हरित आवरण सूचकांक में पहला राज्य?", answer: "Assam; Gujarat second / असम; गुजरात द्वितीय" },
  { en: "India's rank in total renewable capacity in IRENA Statistics 2026?", hi: "IRENA 2026 के अनुसार कुल स्थापित नवीकरणीय क्षमता में भारत का स्थान?", answer: "3rd; China first / तीसरा; चीन प्रथम" },
  { en: "Who issued the Global Forest Goals Report 2026?", hi: "वैश्विक वन लक्ष्य रिपोर्ट 2026 किसने जारी की?", answer: "UN DESA / संयुक्त राष्ट्र आर्थिक एवं सामाजिक कार्य विभाग" },
  { en: "Who issued Invisible Barriers: The Costs of Non-Tariff Measures?", hi: "इनविज़िबल बैरियर्स: द कॉस्ट्स ऑफ नॉन-टैरिफ मेज़र्स किसने जारी की?", answer: "UNCTAD / संयुक्त राष्ट्र व्यापार एवं विकास" },
  { en: "Who released Sand and Sustainability: An Essential Resource for Nature and Development?", hi: "सैंड एंड सस्टेनेबिलिटी रिपोर्ट किस संस्था की है?", answer: "UN Environment Programme (UNEP) / संयुक्त राष्ट्र पर्यावरण कार्यक्रम" },
  { en: "Who published Reimagining Skilling for Viksit Bharat@2047?", hi: "रीइमेजिनिंग स्किलिंग फॉर विकसित भारत@2047 किसने जारी की?", answer: "NITI Aayog / नीति आयोग" },
]

const quizzes: Quiz[] = [
  { en: "Which organisation releases the Global Peace Index?", hi: "वैश्विक शांति सूचकांक कौन जारी करता है?", options: ["World Economic Forum", "Institute for Economics & Peace", "SIPRI", "UNESCO"], correct: 1, reasonEn: "The PDF identifies IEP as its publisher.", reasonHi: "PDF के अनुसार इसका प्रकाशक IEP है।" },
  { en: "Which country tops the World Happiness Report 2026 in the supplied source?", hi: "दिए गए स्रोत में विश्व प्रसन्नता रिपोर्ट 2026 में पहला देश कौन है?", options: ["Iceland", "Denmark", "Finland", "Switzerland"], correct: 2, reasonEn: "The listed first-place country is Finland.", reasonHi: "सूची में फिनलैंड प्रथम है।" },
  { en: "What is India's rank in the Global Gender Gap Report 2026 according to the PDF?", hi: "PDF के अनुसार वैश्विक लैंगिक अंतर रिपोर्ट 2026 में भारत की रैंक?", options: ["116", "131", "70", "91"], correct: 1, reasonEn: "India is listed 131st of 145 economies.", reasonHi: "भारत 145 अर्थव्यवस्थाओं में 131वें स्थान पर दिया गया है।" },
  { en: "Which city topped the Global Liveability Index 2026 in the source?", hi: "स्रोत में ग्लोबल लिवेबिलिटी इंडेक्स 2026 में शीर्ष शहर कौन था?", options: ["Vienna", "Copenhagen", "Zurich", "Melbourne"], correct: 1, reasonEn: "The PDF lists Copenhagen.", reasonHi: "PDF में कोपेनहेगन प्रथम है।" },
  { en: "Which Indian institution ranks 118 in QS World University Rankings 2027 in the source?", hi: "QS विश्व विश्वविद्यालय रैंकिंग 2027 में भारत का कौन-सा संस्थान 118वें स्थान पर है?", options: ["IIT Bombay", "IIT Madras", "IIT Delhi", "IISc"], correct: 2, reasonEn: "IIT Delhi is listed at 118.", reasonHi: "IIT दिल्ली का स्थान 118 दिया गया है।" },
  { en: "Who issues the SOFI report?", hi: "SOFI रिपोर्ट किन संस्थाओं द्वारा जारी की जाती है?", options: ["Only WHO", "FAO, IFAD, UNICEF, WFP and WHO", "SIPRI", "WEF"], correct: 1, reasonEn: "Five UN agencies jointly issue SOFI.", reasonHi: "पाँच संयुक्त राष्ट्र एजेंसियाँ SOFI संयुक्त रूप से प्रकाशित करती हैं।" },
  { en: "Which state topped the Investment Friendliness Index 2026 among large states in the PDF?", hi: "PDF में निवेश अनुकूलता सूचकांक 2026 में बड़े राज्यों में प्रथम कौन था?", options: ["Uttar Pradesh", "Maharashtra", "Gujarat", "Tamil Nadu"], correct: 2, reasonEn: "Gujarat is the listed top large state.", reasonHi: "गुजरात को बड़े राज्यों में प्रथम बताया गया है।" },
  { en: "In LEADS 2025, which landlocked state was an Exemplar?", hi: "LEADS 2025 में स्थलरुद्ध राज्यों का एग्जेम्पलर कौन था?", options: ["Uttar Pradesh", "Mizoram", "Tamil Nadu", "Delhi"], correct: 0, reasonEn: "The landlocked-state Exemplar is Uttar Pradesh.", reasonHi: "स्थलरुद्ध श्रेणी का एग्जेम्पलर उत्तर प्रदेश है।" },
]

function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  return <article id={topic.slug} className="scroll-mt-28 overflow-hidden rounded-xl border bg-card shadow-sm">
    <div className="border-b bg-indigo-50/60 px-5 py-4 sm:px-6"><p className="mb-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">Topic {index + 1} of {topics.length}</p><h3 className="text-lg font-bold sm:text-xl">{topic.en}</h3><p lang="hi" className="mt-1 text-sm text-muted-foreground">{topic.hi}</p></div>
    <div className="space-y-5 p-5 sm:p-6">{topic.facts.map((fact, i) => <div key={i} className="border-l-[3px] border-indigo-300 pl-4 text-sm leading-7"><p>{fact.en}</p><p lang="hi" className="mt-1 text-muted-foreground">{fact.hi}</p></div>)}</div>
    <div className="flex justify-end border-t bg-muted/20 px-5 py-3"><a href="#topic-index" className="text-xs font-medium text-indigo-700 hover:underline">Back to topic index ↑</a></div>
  </article>
}

function MCQCard({ mcq, index }: { mcq: Quiz; index: number }) {
  const [selected, setSelected] = useState<number | null>(null)
  return <div className="rounded-xl border bg-card p-5 shadow-sm"><h3 className="font-semibold">{index + 1}. {mcq.en}</h3><p lang="hi" className="mt-1 text-sm text-muted-foreground">{mcq.hi}</p><div className="mt-4 space-y-2">{mcq.options.map((option, i) => <button type="button" key={i} disabled={selected !== null} onClick={() => setSelected(i)} className={`w-full rounded-lg border p-3 text-left text-sm ${selected !== null && i === mcq.correct ? "border-green-400 bg-green-50" : selected === i ? "border-red-400 bg-red-50" : "hover:bg-muted/50"}`}><span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>{option}</button>)}</div>{selected !== null && <div role="status" className={`mt-4 rounded-lg border-l-4 p-3 ${selected === mcq.correct ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}><p className="flex items-center gap-2 text-sm font-semibold">{selected === mcq.correct ? <CheckCircle2 className="h-4 w-4" /> : <HelpCircle className="h-4 w-4" />}{selected === mcq.correct ? "Correct! / सही उत्तर!" : `Correct: ${String.fromCharCode(65 + mcq.correct)}`}</p><p className="mt-2 text-sm">{mcq.reasonEn}</p><p lang="hi" className="mt-1 text-sm text-muted-foreground">{mcq.reasonHi}</p><button type="button" onClick={() => setSelected(null)} className="mt-3 text-xs underline">Try again / फिर प्रयास करें</button></div>}</div>
}

export default function IndexesRankingsReports2026Page() {
  const [search, setSearch] = useState("")
  const filtered = useMemo(() => { const q = search.trim().toLowerCase(); return q ? topics.filter(t => `${t.en} ${t.hi} ${t.facts.map(f => `${f.en} ${f.hi}`).join(" ")}`.toLowerCase().includes(q)) : topics }, [search])
  return <div className="min-h-screen bg-background"><FooterLinkNavbar />
    <header className="bg-gradient-to-b from-indigo-50 to-background px-4 pb-12 pt-5 sm:px-6 md:pb-16 lg:px-8"><div className="mx-auto max-w-5xl"><Link href="/current-affairs" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:underline"><ArrowLeft className="h-4 w-4" />Back to Current Affairs</Link><div className="mb-4 flex"><span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700"><Sparkles className="h-4 w-4" />Complete Topic Digest · Indices & Reports</span></div><h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Indexes, Rankings & Reports 2026</h1><p lang="hi" className="mb-6 text-xl text-muted-foreground">सूचकांक, रैंकिंग एवं रिपोर्ट 2026 — भारत की रैंक, प्रमुख निष्कर्ष और प्रश्नोत्तर</p><div className="flex flex-wrap gap-3 text-sm">
        {/* <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2"><Calendar className="h-4 w-4 text-indigo-700" />PDF pp. 204–215</span> */}
        <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2"><BarChart3 className="h-4 w-4 text-indigo-700" />{topics.length} Topics</span><span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2"><Target className="h-4 w-4 text-indigo-700" />{oneLiners.length} Q&As · {quizzes.length} MCQs</span></div></div></header>
    <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
      <section className="mb-10"><div className="mb-4 flex items-center gap-2"><Languages className="h-5 w-5 text-indigo-700" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div><div className="grid gap-4 md:grid-cols-2"><div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-5"><h3 className="mb-3 text-xs font-bold uppercase text-indigo-700">English</h3><p className="text-sm leading-7">A bilingual, topic-wise exam digest drawn from the supplied PDF: global and Indian indices, ranks, publishers, state comparisons, report findings, and practice questions.</p></div><div className="rounded-xl border border-violet-100 bg-violet-50/60 p-5"><h3 className="mb-3 text-xs font-bold text-violet-700">हिन्दी</h3><p lang="hi" className="text-sm leading-7">दिए गए PDF से वैश्विक और भारतीय सूचकांक, भारत की रैंक, रिपोर्ट जारी करने वाली संस्थाएँ, राज्यों की तुलना, प्रमुख निष्कर्ष और अभ्यास प्रश्न सरल हिंदी में।</p></div></div><p className="mt-3 text-xs text-muted-foreground">Source note: Rankings are reproduced as claims from the supplied study PDF; verify with each publisher before presenting them as officially confirmed results.</p></section>
      <section id="topic-index" className="mb-10 scroll-mt-28"><div className="mb-4 flex items-center gap-2"><BookOpen className="h-5 w-5 text-indigo-700" /><h2 className="text-2xl font-bold">Topic-wise List / विषयवार सूची</h2></div><div className="rounded-xl border bg-card p-4 sm:p-5"><label htmlFor="index-search" className="relative mb-4 block"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><input id="index-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search report, country or ranking / विषय खोजें" className="h-10 w-full rounded-lg border bg-background pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-indigo-200" />{search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search" className="absolute right-3 top-3"><X className="h-4 w-4" /></button>}</label><nav aria-label="Reports and indexes" className="grid gap-2 sm:grid-cols-2">{filtered.map(t => <a key={t.slug} href={`#${t.slug}`} className="flex items-start gap-2 rounded-lg border p-3 text-sm hover:border-indigo-300 hover:bg-indigo-50"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-indigo-700" /><span><span className="font-medium">{t.en}</span><span lang="hi" className="mt-0.5 block text-xs text-muted-foreground">{t.hi}</span></span></a>)}{filtered.length === 0 && <p className="p-3 text-sm text-muted-foreground">No matching report found.</p>}</nav><a href="#one-liner-qa" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700"><Target className="h-4 w-4" />Jump to One-Liner Q&A</a></div></section>
      <section className="mb-10"><div className="mb-4 flex items-center gap-2"><BarChart3 className="h-5 w-5 text-indigo-700" /><h2 className="text-2xl font-bold">Detailed Topic Notes / विषयवार विस्तृत नोट्स</h2></div><div className="space-y-6">{topics.map((t, i) => <TopicCard key={t.slug} topic={t} index={i} />)}</div></section>
      <section id="one-liner-qa" className="mb-10 scroll-mt-28"><div className="mb-4 flex items-center gap-2"><Target className="h-5 w-5 text-indigo-700" /><h2 className="text-2xl font-bold">One-Liner Q&A / एक-पंक्ति प्रश्नोत्तर</h2></div><div className="rounded-xl border bg-card p-5"><p className="mb-4 text-sm text-muted-foreground">Open a question to reveal the source answer / प्रश्न खोलकर उत्तर देखें।</p><div className="space-y-2">{oneLiners.map((q, i) => <details key={i} className="rounded-lg border p-4"><summary className="cursor-pointer text-sm font-semibold">{i + 1}. {q.en}<span lang="hi" className="mt-1 block font-normal text-muted-foreground">{q.hi}</span></summary><p className="mt-3 rounded-lg bg-green-50 p-3 text-sm font-semibold text-green-800">{q.answer}</p></details>)}</div></div></section>
      <section className="mb-10"><div className="mb-4 flex items-center gap-2"><Target className="h-5 w-5 text-indigo-700" /><h2 className="text-2xl font-bold">Practice MCQs / अभ्यास प्रश्न</h2></div><div className="space-y-4">{quizzes.map((q, i) => <MCQCard key={i} mcq={q} index={i} />)}</div></section>
      <div className="flex flex-col items-center justify-between gap-3 border-t pt-8 sm:flex-row">
        
        <Link href="/current-affairs"><Button variant="outline" className="cursor-pointer gap-2"><ArrowLeft className="h-4 w-4" />Back to Current Affairs</Button></Link>
           <div className="flex justify-end gap-2">
                    <Link href="/current-affairs/by-topic/important-days-themes-2026">
                        <Button variant="outline" className="gap-2 cursor-pointer">Next: Imp. Days & Theme <ChevronRight className="w-4 h-4" /></Button>
                    </Link>
        <Link href="/mock-test">
      <Button className="cursor-pointer gap-2">Practice Quiz <Target className="h-4 w-4" /></Button></Link>
      </div>
      </div>
    </main><FooterLinkFooter />
  </div>
}