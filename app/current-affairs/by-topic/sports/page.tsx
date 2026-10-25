"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useMemo, useState } from "react"
import { ArrowLeft, BookOpen, Calendar, CheckCircle2, ChevronRight, HelpCircle, Languages, Search, Sparkles, Target, Trophy, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type Fact = { en: string; hi: string }
type Topic = { slug: string; en: string; hi: string; page: string; facts: Fact[] }
type QA = { en: string; hi: string; answer: string }
type MCQ = { en: string; hi: string; options: string[]; answer: number; whyEn: string; whyHi: string }

// Source: user-supplied Sports.pdf, printed pages 196–203.
// This is a bilingual transcription of the PDF's claims, not independent verification.
const topics: Topic[] = [
  { slug: "grand-slam-tennis-2026", en: "Grand Slam Tennis Championships 2026", hi: "ग्रैंड स्लैम टेनिस चैंपियनशिप 2026", page: "196", facts: [
    { en: "Australian Open: hard court, Melbourne Park, Melbourne. The source lists Carlos Alcaraz (Spain) as men's singles champion and Elena Rybakina as women's champion.", hi: "ऑस्ट्रेलियन ओपन: हार्ड कोर्ट, मेलबर्न पार्क। स्रोत में पुरुष एकल विजेता कार्लोस अल्काराज़ (स्पेन) और महिला विजेता एलेना रिबाकिना बताई गई हैं।" },
    { en: "The PDF describes Alcaraz as the youngest man to complete a career Grand Slam after winning his first Australian Open.", hi: "PDF के अनुसार पहला ऑस्ट्रेलियन ओपन जीतकर अल्काराज़ करियर ग्रैंड स्लैम पूरा करने वाले सबसे युवा पुरुष बने।" },
    { en: "French Open: clay court, Roland-Garros, Paris. Men's winner: Alexander Zverev (Germany); women's winner mentioned in the notes: Mirra Andreeva.", hi: "फ्रेंच ओपन: क्ले कोर्ट, रोलां गैरो, पेरिस। पुरुष विजेता: अलेक्ज़ेंडर ज़्वेरेव (जर्मनी); नोट्स में महिला विजेता: मीरा आंद्रेएवा।" },
    { en: "Wimbledon: grass court, All England Club, London. The source lists Jannik Sinner (Italy) in men's singles and Linda Nosková (Czech Republic) in women's singles.", hi: "विंबलडन: ग्रास कोर्ट, ऑल इंग्लैंड क्लब, लंदन। स्रोत में पुरुष एकल के लिए यानिक सिनर (इटली) और महिला एकल के लिए लिंडा नोस्कोवा (चेक गणराज्य) के नाम हैं।" },
    { en: "Important: The PDF's tennis table has misaligned cells; verify individual results with tournament organisers before publishing them as established records.", hi: "महत्वपूर्ण: PDF की टेनिस तालिका में कुछ कॉलम खिसके हुए हैं। विजेताओं के नाम सार्वजनिक करने से पहले आधिकारिक परिणाम जाँचें।" },
  ] },
  { slug: "icc-mens-t20-world-cup-2026", en: "ICC Men's T20 World Cup 2026", hi: "आईसीसी पुरुष टी20 विश्व कप 2026", page: "196–197", facts: [
    { en: "PDF result: India defeated New Zealand in the final and won its third men's T20 World Cup title, following 2007 and 2024.", hi: "PDF के अनुसार भारत ने फाइनल में न्यूज़ीलैंड को हराकर 2007 और 2024 के बाद तीसरा पुरुष टी20 विश्व कप खिताब जीता।" },
    { en: "The tournament was co-hosted by India and Sri Lanka; 20 teams participated.", hi: "मेज़बान: भारत और श्रीलंका। भाग लेने वाली कुल टीमें: 20।" },
    { en: "Final: 8 March 2026, Narendra Modi Stadium, Ahmedabad. Player of the Tournament: Sanju Samson.", hi: "फाइनल: 8 मार्च 2026, नरेंद्र मोदी स्टेडियम, अहमदाबाद। प्लेयर ऑफ द टूर्नामेंट: संजू सैमसन।" },
  ] },
  { slug: "icc-u19-world-cup-2026", en: "ICC Under-19 Men's Cricket World Cup 2026", hi: "आईसीसी अंडर-19 पुरुष क्रिकेट विश्व कप 2026", page: "197", facts: [
    { en: "Hosts: Zimbabwe and Namibia. Winner: India (sixth title). Runner-up: England.", hi: "मेज़बान: ज़िम्बाब्वे और नामीबिया। विजेता: भारत (छठा खिताब)। उपविजेता: इंग्लैंड।" },
    { en: "16th edition with 16 participating teams.", hi: "यह 16वाँ संस्करण था, जिसमें 16 टीमों ने हिस्सा लिया।" },
    { en: "Player of the Final and Tournament: Vaibhav Sooryavanshi. He is credited with 175 runs off 80 balls in the final.", hi: "फाइनल और टूर्नामेंट के सर्वश्रेष्ठ खिलाड़ी: वैभव सूर्यवंशी। फाइनल में 80 गेंदों पर 175 रन बनाने का उल्लेख है।" },
  ] },
  { slug: "icc-womens-t20-2026", en: "ICC Women's T20 World Cup 2026", hi: "आईसीसी महिला टी20 विश्व कप 2026", page: "197", facts: [
    { en: "PDF result: Australia defeated England in the final to win its seventh title.", hi: "PDF के अनुसार ऑस्ट्रेलिया ने फाइनल में इंग्लैंड को हराकर सातवाँ खिताब जीता।" },
    { en: "Final venue: Lord's Cricket Ground, London.", hi: "फाइनल का स्थान: लॉर्ड्स क्रिकेट ग्राउंड, लंदन।" },
    { en: "Player of the Match and Player of the Tournament: Beth Mooney (Australia).", hi: "प्लेयर ऑफ द मैच एवं टूर्नामेंट: बेथ मूनी (ऑस्ट्रेलिया)।" },
  ] },
  { slug: "womens-t20-asia-cup-2026", en: "Women's T20 Asia Cup 2026", hi: "महिला टी20 एशिया कप 2026", page: "197", facts: [
    { en: "Venue: Dubai International Cricket Stadium, UAE. Hosted by the Emirates Cricket Board.", hi: "स्थान: दुबई अंतरराष्ट्रीय क्रिकेट स्टेडियम, यूएई। आयोजक: अमीरात क्रिकेट बोर्ड।" },
    { en: "PDF result: India won; Sri Lanka finished runner-up. The source describes this as India's eighth overall Asia Cup and fourth T20-format title.", hi: "PDF के अनुसार विजेता भारत और उपविजेता श्रीलंका रहे। स्रोत के अनुसार यह भारत का कुल आठवाँ एशिया कप और टी20 में चौथा खिताब था।" },
    { en: "Player of the Final: Shafali Verma. Eight Asian teams participated.", hi: "फाइनल की सर्वश्रेष्ठ खिलाड़ी: शेफाली वर्मा। भाग लेने वाली टीमें: आठ।" },
  ] },
  { slug: "adca-deaf-cricket", en: "ADCA T20I Asia Cup 2026", hi: "एडीसीए टी20 अंतरराष्ट्रीय एशिया कप 2026", page: "198", facts: [
    { en: "The Indian Deaf Cricket Team defeated Sri Lanka in the final of the first Asian Deaf Cricket Association T20I Asia Cup.", hi: "भारतीय बधिर क्रिकेट टीम ने पहले एशियाई बधिर क्रिकेट संघ टी20 एशिया कप के फाइनल में श्रीलंका को हराया।" },
    { en: "Held in Odisha; participating countries: India, Sri Lanka and Nepal.", hi: "आयोजन स्थल: ओडिशा। प्रतिभागी देश: भारत, श्रीलंका और नेपाल।" },
  ] },
  { slug: "vijay-hazare-trophy", en: "Vijay Hazare Trophy 2025–26", hi: "विजय हज़ारे ट्रॉफी 2025–26", page: "198", facts: [
    { en: "Final venue: Bengaluru. Winner: Vidarbha (maiden title). Runner-up: Saurashtra.", hi: "फाइनल स्थल: बेंगलुरु। विजेता: विदर्भ (पहला खिताब)। उपविजेता: सौराष्ट्र।" },
    { en: "The PDF notes Bihar's 574/6 versus Arunachal Pradesh as the highest men's List A team total.", hi: "PDF में अरुणाचल प्रदेश के विरुद्ध बिहार के 574/6 को पुरुष लिस्ट-A क्रिकेट का सर्वोच्च टीम स्कोर बताया गया है।" },
  ] },
  { slug: "ranji-trophy", en: "Ranji Trophy 2025–26", hi: "रणजी ट्रॉफी 2025–26", page: "198", facts: [
    { en: "Winner: Jammu & Kashmir (first title). Runner-up: Karnataka; final location listed as Karnataka.", hi: "विजेता: जम्मू-कश्मीर (पहला खिताब)। उपविजेता: कर्नाटक; फाइनल का स्थान कर्नाटक बताया गया है।" },
    { en: "38 teams participated. Player of the Series: Auqib Nabi (60 wickets).", hi: "कुल 38 टीमों ने भाग लिया। प्लेयर ऑफ द सीरीज़: आकिब नबी (60 विकेट)।" },
  ] },
  { slug: "ipl-2026", en: "Indian Premier League (IPL) 2026", hi: "इंडियन प्रीमियर लीग 2026", page: "198", facts: [
    { en: "PDF result: Royal Challengers Bengaluru (RCB) won; Gujarat Titans were runners-up.", hi: "PDF के अनुसार विजेता रॉयल चैलेंजर्स बेंगलुरु (RCB) और उपविजेता गुजरात टाइटंस रहे।" },
    { en: "Orange Cap: Vaibhav Sooryavanshi. Purple Cap: Kagiso Rabada.", hi: "ऑरेंज कैप: वैभव सूर्यवंशी। पर्पल कैप: कगिसो रबाडा।" },
    { en: "Emerging Player of the Season: Vaibhav Sooryavanshi.", hi: "इमर्जिंग प्लेयर ऑफ द सीज़न: वैभव सूर्यवंशी।" },
  ] },
  { slug: "saff-womens-2026", en: "SAFF Women's Championship 2026", hi: "सैफ महिला चैंपियनशिप 2026", page: "199", facts: [
    { en: "Winner: India. Runner-up: Bangladesh; the PDF gives the final score as 3–1.", hi: "विजेता: भारत। उपविजेता: बांग्लादेश। PDF में फाइनल स्कोर 3–1 बताया गया है।" },
    { en: "The source describes India's sixth title. MVP: Sanfida Nongrum.", hi: "स्रोत के अनुसार भारत का छठा खिताब। सर्वश्रेष्ठ खिलाड़ी: सैनफिदा नोंग्रम।" },
  ] },
  { slug: "time100-sports-2026", en: "TIME100 Most Influential People in Sports 2026", hi: "टाइम100 खेल जगत के प्रभावशाली व्यक्ति 2026", page: "199", facts: [
    { en: "Cricketer Smriti Mandhana is listed as the only Indian athlete in the TIME100 Sports list.", hi: "क्रिकेटर स्मृति मंधाना को TIME100 स्पोर्ट्स सूची में एकमात्र भारतीय एथलीट बताया गया है।" },
    { en: "Basketball star LeBron James is described as Athlete of the Century in the source's account of TIME's first sports issue.", hi: "बास्केटबॉल खिलाड़ी लेब्रोन जेम्स को टाइम के पहले स्पोर्ट्स अंक में 'एथलीट ऑफ द सेंचुरी' बताया गया है।" },
  ] },
  { slug: "fifa-world-cup-2026", en: "FIFA World Cup 2026", hi: "फीफा विश्व कप 2026", page: "199", facts: [
    { en: "PDF result: Spain defeated Argentina 1–0 for a second FIFA World Cup title; winning goal attributed to Ferran Torres in the 106th minute.", hi: "PDF के अनुसार स्पेन ने अर्जेंटीना को 1–0 से हराकर दूसरा विश्व कप खिताब जीता; निर्णायक गोल 106वें मिनट में फेरान टोरेस का बताया गया है।" },
    { en: "Hosts: United States, Canada and Mexico. The tournament expanded to 48 teams.", hi: "मेज़बान: अमेरिका, कनाडा और मेक्सिको। टूर्नामेंट में 48 टीमें शामिल थीं।" },
    { en: "Final venue: MetLife Stadium, East Rutherford, New Jersey.", hi: "फाइनल स्थल: मेटलाइफ स्टेडियम, ईस्ट रदरफोर्ड, न्यू जर्सी।" },
    { en: "Golden Ball: Rodri (Spain); Golden Boot: Kylian Mbappé (France); Golden Glove: Unai Simón (Spain).", hi: "गोल्डन बॉल: रोड्री (स्पेन); गोल्डन बूट: किलियन एम्बाप्पे (फ्रांस); गोल्डन ग्लव: उनाई सिमोन (स्पेन)।" },
  ] },
  { slug: "khelo-india-tribal", en: "Khelo India Tribal Games 2026", hi: "खेलो इंडिया जनजातीय खेल 2026", page: "199–200", facts: [
    { en: "The inaugural Khelo India Tribal Games took place in Chhattisgarh.", hi: "प्रथम खेलो इंडिया जनजातीय खेलों का आयोजन छत्तीसगढ़ में हुआ।" },
    { en: "Karnataka topped the medal table; Odisha placed second.", hi: "पदक तालिका में कर्नाटक प्रथम और ओडिशा द्वितीय रहा।" },
    { en: "Official mascot: Morveer, from Chhattisgarhi words 'Mor' (our) and 'Veer' (bravery).", hi: "आधिकारिक शुभंकर: मोरवीर, छत्तीसगढ़ी के 'मोर' (हमारा) और 'वीर' (बहादुरी) शब्दों से बना।" },
  ] },
  { slug: "khelo-india-winter", en: "Khelo India Winter Games 2026", hi: "खेलो इंडिया शीतकालीन खेल 2026", page: "200", facts: [
    { en: "Sixth edition. Leh leg: 20–26 January; Gulmarg leg: 23–26 February 2026.", hi: "छठा संस्करण। लेह चरण: 20–26 जनवरी; गुलमर्ग चरण: 23–26 फरवरी 2026।" },
    { en: "Indian Army topped the medals table with 9 gold, 6 silver and 8 bronze (23 total).", hi: "भारतीय सेना 9 स्वर्ण, 6 रजत और 8 कांस्य (कुल 23) के साथ शीर्ष पर रही।" },
    { en: "Mascot: Sheen-E-She (Shan), representing the snow leopard, Ladakh's state animal.", hi: "शुभंकर: शीन-ए-शी (शान), हिम तेंदुए का प्रतीक, जो लद्दाख का राजकीय पशु है।" },
  ] },
  { slug: "squash-world-cup", en: "Squash World Cup 2025", hi: "स्क्वैश विश्व कप 2025", page: "200", facts: [
    { en: "Venue: Chennai. Winner: India (first title). Runner-up: Hong Kong, China.", hi: "स्थान: चेन्नई। विजेता: भारत (पहला खिताब)। उपविजेता: हांगकांग, चीन।" },
    { en: "Indian squad: Joshna Chinappa, Abhay Singh, Anahat Singh and Velavan Senthilkumar.", hi: "भारतीय टीम: जोशना चिनप्पा, अभय सिंह, अनाहत सिंह और वेलवन सेंथिलकुमार।" },
  ] },
  { slug: "hockey-junior-world-cup", en: "FIH Men's Junior Hockey World Cup 2025", hi: "एफआईएच पुरुष जूनियर हॉकी विश्व कप 2025", page: "200–201", facts: [
    { en: "Venues: Chennai and Madurai, Tamil Nadu. Winner: Germany (eighth title). Runner-up: Spain.", hi: "स्थान: चेन्नई और मदुरै, तमिलनाडु। विजेता: जर्मनी (आठवाँ खिताब)। उपविजेता: स्पेन।" },
    { en: "India defeated Argentina 4–2 in the third-place playoff for its first bronze medal in the tournament.", hi: "भारत ने तीसरे स्थान के मुकाबले में अर्जेंटीना को 4–2 से हराकर टूर्नामेंट का पहला कांस्य पदक जीता।" },
  ] },
  { slug: "yogasana-championship", en: "World Yogasana Sports Championship 2026", hi: "विश्व योगासन खेल चैंपियनशिप 2026", page: "201", facts: [
    { en: "Dates: 4–8 June 2026. Venue: Eka Arena, Ahmedabad, Gujarat.", hi: "तिथियाँ: 4–8 जून 2026। स्थान: एका एरीना, अहमदाबाद, गुजरात।" },
    { en: "Described as the first global championship devoted entirely to Yogasana as a regulated competitive sport.", hi: "योगासन को नियमित प्रतिस्पर्धात्मक खेल के रूप में समर्पित पहली वैश्विक चैंपियनशिप बताया गया है।" },
    { en: "Mascot: Veer the Lion. The source credits India with first rank, 102 gold and 114 total medals.", hi: "शुभंकर: वीर द लायन। स्रोत में भारत को प्रथम स्थान, 102 स्वर्ण और कुल 114 पदक दिए गए हैं।" },
  ] },
  { slug: "singapore-open-badminton", en: "Singapore Open 2026 (Badminton)", hi: "सिंगापुर ओपन बैडमिंटन 2026", page: "201", facts: [
    { en: "Men's doubles winners listed: Satwiksairaj Rankireddy and Chirag Shetty.", hi: "स्रोत में पुरुष युगल विजेता: सात्विकसाईराज रंकीरेड्डी और चिराग शेट्टी।" },
    { en: "They defeated Indonesia's Fajar Alfian and Muhammad Shohibul Fikri, becoming the first Indian doubles pair to win the event, according to the PDF.", hi: "उन्होंने इंडोनेशिया के फजर अल्फियान और मुहम्मद शोहीबुल फिकरी को हराया। PDF के अनुसार वे खिताब जीतने वाली पहली भारतीय युगल जोड़ी बनी।" },
  ] },
]

const oneLiners: QA[] = [
  { en: "Whom did India defeat to win the Men's U-18 Asia Cup 2025?", hi: "पुरुष अंडर-18 एशिया कप 2025 में भारत ने किसे हराया?", answer: "Japan / जापान" },
  { en: "Who became the first Indian Norway Chess winner in the source?", hi: "स्रोत के अनुसार नॉर्वे शतरंज खिताब जीतने वाले पहले भारतीय कौन बने?", answer: "R. Praggnanandhaa / आर. प्रज्ञानंद" },
  { en: "Whom did Praggnanandhaa defeat in the Grand Chess Tour final?", hi: "ग्रैंड चेस टूर फाइनल में प्रज्ञानंद ने किसे हराया?", answer: "Fabiano Caruana / फैबियानो कारुआना" },
  { en: "Who won the FIH Hockey Women's Nations Cup 2026?", hi: "एफआईएच महिला हॉकी नेशंस कप 2026 किसने जीता?", answer: "India; runner-up New Zealand / भारत; उपविजेता न्यूज़ीलैंड" },
  { en: "Who became the first cricketer to play 200 T20 internationals according to the PDF?", hi: "PDF के अनुसार 200 टी20 अंतरराष्ट्रीय मैच खेलने वाली पहली क्रिकेटर कौन बनीं?", answer: "Harmanpreet Kaur / हरमनप्रीत कौर" },
  { en: "Who won the World Junior Squash Championship in the source?", hi: "स्रोत में विश्व जूनियर स्क्वैश चैंपियनशिप किसने जीती?", answer: "Anahat Singh / अनाहत सिंह" },
  { en: "First Indian FISU World University Squash gold medallist?", hi: "FISU विश्व विश्वविद्यालय स्क्वैश स्वर्ण जीतने वाले पहले भारतीय कौन हैं?", answer: "Suraj Kumar Chand / सूरज कुमार चंद" },
  { en: "Whom did P. V. Sindhu defeat in the Japan Open final?", hi: "जापान ओपन फाइनल में पी. वी. सिंधु ने किसे हराया?", answer: "Akane Yamaguchi / अकाने यामागुची" },
  { en: "Which humanoid robot is listed with a fast 100 m sprint time?", hi: "100 मीटर दौड़ में तेज समय वाला ह्यूमनॉइड रोबोट कौन-सा बताया गया?", answer: "Tiangong Ultra / तियांगोंग अल्ट्रा" },
  { en: "Whom did Germany defeat in the Men's Hockey World Cup 2026 final?", hi: "पुरुष हॉकी विश्व कप 2026 फाइनल में जर्मनी ने किसे हराया?", answer: "Spain / स्पेन" },
  { en: "Who won the Santosh Trophy 2025–26?", hi: "संतोष ट्रॉफी 2025–26 किसने जीती?", answer: "Services; runner-up Kerala / सर्विसेज; उपविजेता केरल" },
  { en: "Wisden Leading Cricketer in the World for 2025, as listed in the PDF?", hi: "PDF में 2025 की विजडन अग्रणी क्रिकेटर किसे बताया गया है?", answer: "Deepti Sharma / दीप्ति शर्मा" },
  { en: "First Indian fast bowler listed to reach 200 IPL wickets?", hi: "IPL में 200 विकेट लेने वाले पहले भारतीय तेज गेंदबाज़ कौन बताए गए हैं?", answer: "Bhuvneshwar Kumar / भुवनेश्वर कुमार" },
  { en: "Who is listed as completing an official sub-two-hour marathon?", hi: "आधिकारिक मैराथन दो घंटे से कम में पूरी करने वाले किस खिलाड़ी का नाम दिया गया है?", answer: "Sabastian Sawe / सबास्टियन सावे" },
  { en: "Who clocked 10.09 s in the Federation Cup 100 m?", hi: "फेडरेशन कप 100 मीटर में 10.09 सेकंड किसने दर्ज किए?", answer: "Gurindervir Singh / गुरिंदरवीर सिंह" },
  { en: "Who won the ISL 2026 according to the source?", hi: "स्रोत के अनुसार ISL 2026 किसने जीता?", answer: "East Bengal / ईस्ट बंगाल" },
  { en: "Who won an individual Archery World Cup Final gold, according to the PDF?", hi: "PDF के अनुसार तीरंदाज़ी विश्व कप फाइनल में व्यक्तिगत स्वर्ण किसने जीता?", answer: "Dhiraj Bommadevara / धीरज बोम्मादेवरा" },
]

const mcqs: MCQ[] = [
  { en: "Where was the ICC Men's T20 World Cup 2026 final held, according to the PDF?", hi: "PDF के अनुसार पुरुष टी20 विश्व कप 2026 का फाइनल कहाँ हुआ?", options: ["Lord's", "Narendra Modi Stadium", "Eden Gardens", "Wankhede Stadium"], answer: 1, whyEn: "The chapter names Narendra Modi Stadium, Ahmedabad.", whyHi: "अध्याय में अहमदाबाद का नरेंद्र मोदी स्टेडियम दिया है।" },
  { en: "Who is listed as the Under-19 World Cup 2026 Player of the Tournament?", hi: "अंडर-19 विश्व कप 2026 का सर्वश्रेष्ठ खिलाड़ी किसे बताया गया है?", options: ["Sanju Samson", "Shubman Gill", "Vaibhav Sooryavanshi", "Auqib Nabi"], answer: 2, whyEn: "The source credits Vaibhav Sooryavanshi.", whyHi: "स्रोत में वैभव सूर्यवंशी का नाम है।" },
  { en: "Which team won its maiden Ranji Trophy in the source?", hi: "स्रोत के अनुसार पहला रणजी खिताब किस टीम ने जीता?", options: ["Karnataka", "Jammu & Kashmir", "Vidarbha", "Saurashtra"], answer: 1, whyEn: "Jammu & Kashmir is listed as champion.", whyHi: "विजेता जम्मू-कश्मीर बताया गया है।" },
  { en: "What was the mascot of the Khelo India Tribal Games 2026?", hi: "खेलो इंडिया जनजातीय खेल 2026 का शुभंकर क्या था?", options: ["Morveer", "Sheen-E-She", "Veer the Lion", "Shera"], answer: 0, whyEn: "Morveer is derived from Chhattisgarhi words.", whyHi: "मोरवीर छत्तीसगढ़ी शब्दों से बना है।" },
  { en: "Where was the Squash World Cup 2025 held?", hi: "स्क्वैश विश्व कप 2025 कहाँ आयोजित हुआ?", options: ["Delhi", "Chennai", "Mumbai", "Pune"], answer: 1, whyEn: "The PDF gives Chennai as the host city.", whyHi: "PDF में चेन्नई मेज़बान शहर है।" },
  { en: "Which two Indians are listed as Singapore Open men's doubles winners?", hi: "सिंगापुर ओपन पुरुष युगल विजेता के रूप में किन दो भारतीयों का नाम है?", options: ["Srikanth and Prannoy", "Satwiksairaj and Chirag", "Lakshya and Prannoy", "Abhay and Velavan"], answer: 1, whyEn: "The listed pair is Satwiksairaj Rankireddy and Chirag Shetty.", whyHi: "जोड़ी सात्विकसाईराज रंकीरेड्डी और चिराग शेट्टी है।" },
]

function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  return <article id={topic.slug} className="scroll-mt-28 overflow-hidden rounded-xl border bg-card shadow-sm">
    <div className="border-b bg-blue-50/60 px-5 py-4 sm:px-6"><p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Topic {index + 1} of {topics.length}</p><h3 className="text-lg font-bold sm:text-xl">{topic.en}</h3><p lang="hi" className="mt-1 text-sm text-muted-foreground">{topic.hi}</p></div>
    <div className="space-y-5 p-5 sm:p-6">{topic.facts.map((fact, i) => <div key={i} className="border-l-[3px] border-blue-300 pl-4 text-sm leading-7"><p>{fact.en}</p><p lang="hi" className="mt-1 text-muted-foreground">{fact.hi}</p></div>)}</div>
    <div className="flex justify-end border-t bg-muted/20 px-5 py-3"><a href="#topic-index" className="text-xs font-medium text-blue-700 hover:underline">Back to topic index ↑</a></div>
  </article>
}

function QuizCard({ mcq, index }: { mcq: MCQ; index: number }) {
  const [selected, setSelected] = useState<number | null>(null)
  const correct = selected === mcq.answer
  return <div className="rounded-xl border bg-card p-5 shadow-sm">
    <h3 className="font-semibold">{index + 1}. {mcq.en}</h3><p lang="hi" className="mt-1 text-sm text-muted-foreground">{mcq.hi}</p>
    <div className="mt-4 space-y-2">{mcq.options.map((option, i) => <button type="button" key={i} disabled={selected !== null} onClick={() => setSelected(i)} className={`w-full rounded-lg border p-3 text-left text-sm ${selected !== null && i === mcq.answer ? "border-green-400 bg-green-50" : selected === i ? "border-red-400 bg-red-50" : "hover:bg-muted/50"}`}><span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span> {option}</button>)}</div>
    {selected !== null && <div role="status" className={`mt-4 rounded-lg border-l-4 p-3 ${correct ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}><p className="flex items-center gap-2 text-sm font-semibold">{correct ? <CheckCircle2 className="h-4 w-4" /> : <HelpCircle className="h-4 w-4" />}{correct ? "Correct! / सही उत्तर!" : `Correct: ${String.fromCharCode(65 + mcq.answer)}`}</p><p className="mt-2 text-sm">{mcq.whyEn}</p><p lang="hi" className="mt-1 text-sm text-muted-foreground">{mcq.whyHi}</p><button type="button" onClick={() => setSelected(null)} className="mt-3 text-xs underline">Try again / फिर प्रयास करें</button></div>}
  </div>
}

export default function SportsCurrentAffairs2026Page() {
  const [search, setSearch] = useState("")
  const filtered = useMemo(() => { const q = search.trim().toLowerCase(); return q ? topics.filter(t => `${t.en} ${t.hi} ${t.facts.map(f => `${f.en} ${f.hi}`).join(" ")}`.toLowerCase().includes(q)) : topics }, [search])
  return <div className="min-h-screen bg-background">
    <FooterLinkNavbar />
    <header className="bg-gradient-to-b from-blue-50 to-background px-4 pb-12 pt-5 sm:px-6 md:pb-16  lg:px-8"><div className="mx-auto max-w-5xl"><Link href="/current-affairs" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-800 hover:underline"><ArrowLeft className="h-4 w-4" />Back to Current Affairs</Link><div className="mb-4 flex"><span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"><Sparkles className="h-4 w-4" />Topic Digest · Sports</span></div><h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Sports Current Affairs 2026</h1><p lang="hi" className="mb-6 text-xl text-muted-foreground">खेल समसामयिकी 2026 — चैंपियनशिप, विजेता, रिकॉर्ड एवं प्रश्नोत्तर</p>
    <div className="flex flex-wrap gap-3 text-sm">
        {/* <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2"><Calendar className="h-4 w-4 text-blue-700" />PDF pp. 196–203</span> */}
        <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2"><Trophy className="h-4 w-4 text-blue-700" />{topics.length} Topics</span><span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2"><Target className="h-4 w-4 text-blue-700" />{oneLiners.length} Q&As · {mcqs.length} MCQs</span></div></div></header>
    <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
      <section className="mb-10"><div className="mb-4 flex items-center gap-2"><Languages className="h-5 w-5 text-blue-700" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div><div className="grid gap-4 md:grid-cols-2"><div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5"><h3 className="mb-3 text-xs font-bold uppercase text-blue-800">English</h3><p className="text-sm leading-7">Bilingual exam notes on major tennis, cricket, football, hockey, squash, badminton and Khelo India events from the supplied Sports current-affairs PDF. Winners, venues, runners-up, records and important questions are organised by topic.</p></div><div className="rounded-xl border border-cyan-100 bg-cyan-50/60 p-5"><h3 className="mb-3 text-xs font-bold text-cyan-800">हिन्दी</h3><p lang="hi" className="text-sm leading-7">दिए गए खेल करेंट अफेयर्स PDF से टेनिस, क्रिकेट, फुटबॉल, हॉकी, स्क्वैश, बैडमिंटन और खेलो इंडिया से संबंधित विषयवार नोट्स। विजेता, उपविजेता, स्थान, रिकॉर्ड और प्रश्नोत्तर सरल हिंदी में।</p></div></div><p className="mt-3 text-xs text-muted-foreground">Source note: These are the PDF's claims, not independently verified official sporting results. Cross-check before treating them as confirmed news.</p></section>
      <section id="topic-index" className="mb-10 scroll-mt-28"><div className="mb-4 flex items-center gap-2"><BookOpen className="h-5 w-5 text-blue-700" /><h2 className="text-2xl font-bold">Topic-wise List / विषयवार सूची</h2></div><div className="rounded-xl border bg-card p-4 sm:p-5"><label htmlFor="sports-search" className="relative mb-4 block"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><input id="sports-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search sports, winners, topics / विषय खोजें" className="h-10 w-full rounded-lg border bg-background pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-blue-200" />{search && <button type="button" aria-label="Clear search" onClick={() => setSearch("")} className="absolute right-3 top-3"><X className="h-4 w-4" /></button>}</label><nav aria-label="Sports topics" className="grid gap-2 sm:grid-cols-2">{filtered.map(topic => <a key={topic.slug} href={`#${topic.slug}`} className="flex items-start gap-2 rounded-lg border p-3 text-sm hover:border-blue-300 hover:bg-blue-50"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" /><span><span className="font-medium">{topic.en}</span><span lang="hi" className="mt-0.5 block text-xs text-muted-foreground">{topic.hi}</span></span></a>)}{filtered.length === 0 && <p className="p-3 text-sm text-muted-foreground">No matching topic found.</p>}</nav><a href="#one-liner-qa" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"><Target className="h-4 w-4" />Jump to One-Liner Q&A</a></div></section>
      <section className="mb-10"><div className="mb-4 flex items-center gap-2"><Trophy className="h-5 w-5 text-blue-700" /><h2 className="text-2xl font-bold">Detailed Topic Notes / विषयवार विस्तृत नोट्स</h2></div><div className="space-y-6">{topics.map((topic, index) => <TopicCard key={topic.slug} topic={topic} index={index} />)}</div></section>
      <section id="one-liner-qa" className="mb-10 scroll-mt-28"><div className="mb-4 flex items-center gap-2"><Target className="h-5 w-5 text-blue-700" /><h2 className="text-2xl font-bold">One-Liner Q&A / एक-पंक्ति प्रश्नोत्तर</h2></div><div className="rounded-xl border bg-card p-5"><p className="mb-4 text-sm text-muted-foreground">Open a question to reveal the PDF's answer / उत्तर देखने के लिए प्रश्न खोलें।</p><div className="space-y-2">{oneLiners.map((item, i) => <details key={i} className="rounded-lg border p-4"><summary className="cursor-pointer text-sm font-semibold">{i + 1}. {item.en}<span lang="hi" className="mt-1 block font-normal text-muted-foreground">{item.hi}</span></summary><p className="mt-3 rounded-lg bg-green-50 p-3 text-sm font-semibold text-green-800">{item.answer}</p></details>)}</div></div></section>
      <section className="mb-10"><div className="mb-4 flex items-center gap-2"><Target className="h-5 w-5 text-blue-700" /><h2 className="text-2xl font-bold">Practice MCQs / अभ्यास प्रश्न</h2></div><div className="space-y-4">{mcqs.map((mcq, i) => <QuizCard key={i} mcq={mcq} index={i} />)}</div></section>
      <div className="flex flex-col items-center justify-between gap-3 border-t pt-8 sm:flex-row"><Link href="/current-affairs"><Button variant="outline" className="cursor-pointer gap-2"><ArrowLeft className="h-4 w-4" /> Back to Current Affairs</Button></Link>
       <div className="flex justify-end gap-2">
                    <Link href="/current-affairs/by-topic/indexes-rankings-reports-2026">
                        <Button variant="outline" className="gap-2 cursor-pointer">Next: Index Ranking <ChevronRight className="w-4 h-4" /></Button>
                    </Link>
      <Link href="/mock-test"><Button className="cursor-pointer gap-2">Practice Quiz <Target className="h-4 w-4" /></Button></Link>
      </div>
      </div>
    </main><FooterLinkFooter />
  </div>
}