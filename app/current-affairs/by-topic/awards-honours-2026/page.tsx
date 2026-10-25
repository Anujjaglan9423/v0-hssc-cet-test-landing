"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useMemo, useState } from "react"
import { ArrowLeft, BookOpen, Calendar, CheckCircle2, ChevronRight, HelpCircle, Languages, Search, Sparkles, Target, Trophy, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type Fact = { en: string; hi: string }
type Topic = { slug: string; title: string; titleHi: string; page: string; facts: Fact[] }
type Question = { en: string; hi: string; answer: string }
type MCQ = { questionEn: string; questionHi: string; options: string[]; correct: number; explanationEn: string; explanationHi: string }

// Study notes transcribed and rewritten from Award.pdf (printed pages 184–195).
// They describe the supplied study material; independently verify award results before publishing as news.
const topics: Topic[] = [
    {
        slug: "earth-prize-2026", title: "The Earth Prize 2026", titleHi: "द अर्थ प्राइज 2026", page: "184", facts: [
            { en: "Winners: Vivaan Chhawchharia, Ariana Agarwal and Avyana Mehta.", hi: "विजेता: विवान छावछरिया, एरियाना अग्रवाल और अव्याना मेहता।" },
            { en: "They developed Plas-Stick, a tamarind-based solution to remove microplastics from water.", hi: "इन्होंने पानी से माइक्रोप्लास्टिक हटाने के लिए इमली-आधारित 'Plas-Stick' तकनीक विकसित की।" },
            { en: "According to the source, Plas-Stick was the first Indian project to win the global Earth Prize.", hi: "स्रोत के अनुसार, वैश्विक अर्थ प्राइज जीतने वाली यह भारत की पहली परियोजना थी।" },
        ]
    },
    {
        slug: "fao-soil-farmer-hero", title: "FAO Soil Farmer Hero Award 2026", titleHi: "एफएओ सॉइल फार्मर हीरो पुरस्कार", page: "184", facts: [
            { en: "Awarding body: Food and Agriculture Organization (FAO). Winner: Valluvan, a farmer from Pollachi, Tamil Nadu.", hi: "प्रदाता: खाद्य एवं कृषि संगठन (FAO)। विजेता: तमिलनाडु के पोलाची के किसान वल्लुवन।" },
            { en: "Recognised for adopting multi-crop and multi-tier tree-based agricultural practices.", hi: "बहु-फसली और बहु-स्तरीय वृक्ष-आधारित कृषि पद्धतियाँ अपनाने के लिए सम्मानित।" },
        ]
    },
    {
        slug: "e-governance-awards", title: "National Awards for e-Governance 2026", titleHi: "राष्ट्रीय ई-गवर्नेंस पुरस्कार 2026", page: "184", facts: [
            { en: "Organised by DARPG and the Ministry of Electronics and Information Technology (MeitY).", hi: "आयोजक: प्रशासनिक सुधार एवं लोक शिकायत विभाग (DARPG) और इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी मंत्रालय (MeitY)।" },
            { en: "Gold: Panchayat Advancement Index (PAI), Ministry of Panchayati Raj, for digital transformation using data analytics.", hi: "स्वर्ण: पंचायती राज मंत्रालय का पंचायत उन्नति सूचकांक (PAI), डेटा विश्लेषण द्वारा डिजिटल परिवर्तन के लिए।" },
            { en: "Silver: e-Jagriti platform, Department of Consumer Affairs, for technology-enabled government process re-engineering.", hi: "रजत: उपभोक्ता मामले विभाग का ई-जागृति मंच, तकनीक आधारित सरकारी प्रक्रिया सुधार के लिए।" },
            { en: "e-Jagriti is described as an AI-powered paperless consumer grievance-redressal portal.", hi: "ई-जागृति उपभोक्ता शिकायत निवारण के लिए AI-संचालित कागजरहित पोर्टल है।" },
        ]
    },
    {
        slug: "indian-athletics-awards", title: "Indian Athletics Awards 2025", titleHi: "भारतीय एथलेटिक्स पुरस्कार 2025", page: "185", facts: [
            { en: "Best Male Athlete: Neeraj Chopra (javelin throw).", hi: "सर्वश्रेष्ठ पुरुष एथलीट: नीरज चोपड़ा (भाला फेंक)।" },
            { en: "Best Female Athlete: Parul Chaudhary (distance running and steeplechase).", hi: "सर्वश्रेष्ठ महिला एथलीट: पारुल चौधरी (लंबी दूरी की दौड़ एवं स्टीपलचेज)।" },
        ]
    },
    {
        slug: "national-film-awards", title: "72nd National Film Awards (2024)", titleHi: "72वें राष्ट्रीय फिल्म पुरस्कार (2024)", page: "185", facts: [
            { en: "Best Feature Film: Article 370. Best Hindi Film: Srikanth.", hi: "सर्वश्रेष्ठ फीचर फिल्म: आर्टिकल 370। सर्वश्रेष्ठ हिंदी फिल्म: श्रीकांत।" },
            { en: "Best Actor: Mammootty (Bramayugam) and Kartik Aaryan (Chandu Champion).", hi: "सर्वश्रेष्ठ अभिनेता: ममूटी (ब्रमयुगम) और कार्तिक आर्यन (चंदू चैंपियन)।" },
            { en: "Best Actress: Yami Gautam (Article 370). Best Director: Rajkumar Periasamy (Amaran).", hi: "सर्वश्रेष्ठ अभिनेत्री: यामी गौतम (आर्टिकल 370)। सर्वश्रेष्ठ निर्देशक: राजकुमार पेरियासामी (अमरन)।" },
            { en: "Best Debut Director: Randeep Hooda (Swatantrya Veer Savarkar).", hi: "सर्वश्रेष्ठ नवोदित निर्देशक: रणदीप हुड्डा (स्वातंत्र्य वीर सावरकर)।" },
            { en: "Best Children's Film: 35 – Chinna Katha Kaadu. Best Documentary: Ram-Nami.", hi: "सर्वश्रेष्ठ बाल फिल्म: 35 – चिन्ना कथा काडु। सर्वश्रेष्ठ वृत्तचित्र: राम-नामी।" },
            { en: "Best Feature Film Promoting National, Social and Environmental Values: Captain Miller.", hi: "राष्ट्रीय, सामाजिक एवं पर्यावरणीय मूल्यों को बढ़ावा देने वाली सर्वश्रेष्ठ फीचर फिल्म: कैप्टन मिलर।" },
        ]
    },
    {
        slug: "jnanpith-2025", title: "60th Jnanpith Award (2025)", titleHi: "60वाँ ज्ञानपीठ पुरस्कार (2025)", page: "185", facts: [
            { en: "Recipient: Tamil poet and lyricist R. Vairamuthu; described in the source as the third Tamil literary figure to receive the honour.", hi: "प्राप्तकर्ता: तमिल कवि एवं गीतकार आर. वैरामुथु; स्रोत के अनुसार इस सम्मान को पाने वाले तीसरे तमिल साहित्यकार।" },
        ]
    },
    {
        slug: "vikram-sarabhai-medal", title: "COSPAR Vikram Sarabhai Medal 2026", titleHi: "कॉसपार विक्रम साराभाई पदक 2026", page: "185–186", facts: [
            { en: "Recipient: Professor Annapurni Subramaniam, Director of the Indian Institute of Astrophysics, Bengaluru.", hi: "प्राप्तकर्ता: भारतीय ताराभौतिकी संस्थान, बेंगलुरु की निदेशक प्रो. अन्नपूर्णी सुब्रमण्यम।" },
            { en: "Presented by COSPAR and ISRO for achievements and leadership in space science, particularly supporting capabilities in developing countries.", hi: "अंतरिक्ष विज्ञान में उपलब्धियों एवं नेतृत्व, विशेषकर विकासशील देशों की क्षमताएँ बढ़ाने के लिए COSPAR और ISRO द्वारा सम्मान।" },
            { en: "Source fact: first Indian woman and fourth Indian overall to receive this medal.", hi: "स्रोत के अनुसार यह पदक पाने वाली पहली भारतीय महिला और कुल चौथी भारतीय।" },
        ]
    },
    {
        slug: "swaminathan-environment", title: "Dr M. S. Swaminathan Environment Protection Award 2026", titleHi: "डॉ. एम. एस. स्वामीनाथन पर्यावरण संरक्षण पुरस्कार", page: "186", facts: [
            { en: "Recipients: P. Pechiyammal and Govindhammal.", hi: "प्राप्तकर्ता: पी. पेचियम्मल और गोविंदम्मल।" },
            { en: "Recognised for grassroots marine-waste cleanup, ghost-gear management and sustainable agriculture.", hi: "समुद्री कचरे की सफाई, छोड़े गए मछली पकड़ने के उपकरणों के प्रबंधन और टिकाऊ खेती में जमीनी कार्य हेतु सम्मान।" },
        ]
    },
    {
        slug: "swaminathan-agriculture", title: "9th Prof. M. S. Swaminathan Award (2024–25)", titleHi: "नौवाँ प्रो. एम. एस. स्वामीनाथन पुरस्कार", page: "186", facts: [
            { en: "Recipient: Dr Ch. Srinivasa Rao, Director, ICAR–Indian Agricultural Research Institute.", hi: "प्राप्तकर्ता: डॉ. च. श्रीनिवास राव, निदेशक, ICAR–भारतीय कृषि अनुसंधान संस्थान।" },
            { en: "Recognised for climate-resilient farming and natural-resource management advancing sustainable agriculture and food security.", hi: "जलवायु-सहिष्णु खेती और प्राकृतिक संसाधन प्रबंधन से टिकाऊ कृषि एवं खाद्य सुरक्षा में योगदान हेतु सम्मानित।" },
        ]
    },
    {
        slug: "dirac-medal", title: "Dirac Medal 2026", titleHi: "डिराक पदक 2026", page: "186", facts: [
            { en: "Recipient: Professor Deepak Dhar. Awarding institution: International Centre for Theoretical Physics (ICTP).", hi: "प्राप्तकर्ता: प्रो. दीपक धर। प्रदाता: अंतरराष्ट्रीय सैद्धांतिक भौतिकी केंद्र (ICTP)।" },
            { en: "Recognised for statistical physics, especially work on the Abelian Sandpile Model.", hi: "सांख्यिकीय भौतिकी, विशेषकर एबेलियन सैंडपाइल मॉडल पर अग्रणी शोध के लिए सम्मान।" },
            { en: "The model is useful in studying complex cascading events, such as earthquakes, forest fires and traffic jams.", hi: "यह मॉडल भूकंप, वनाग्नि तथा यातायात जाम जैसी श्रृंखलाबद्ध जटिल घटनाओं के अध्ययन में उपयोगी है।" },
        ]
    },
    {
        slug: "sahitya-akademi", title: "Sahitya Akademi Awards 2025", titleHi: "साहित्य अकादमी पुरस्कार 2025", page: "186–187", facts: [
            { en: "Awards are conferred in 24 languages: 22 Eighth Schedule languages, English and Rajasthani. Listed prize money: ₹1 lakh.", hi: "पुरस्कार 24 भाषाओं में दिए जाते हैं: आठवीं अनुसूची की 22 भाषाएँ, अंग्रेज़ी और राजस्थानी। स्रोत में पुरस्कार राशि ₹1 लाख दी गई है।" },
            { en: "Hindi: Mamta Kalia — Jeete Jee Allahabad (memoir). English: Navtej Sarna — Crimson Spring (novel).", hi: "हिंदी: ममता कालिया — जीते जी इलाहाबाद (संस्मरण)। अंग्रेज़ी: नवतेज सरना — क्रिमसन स्प्रिंग (उपन्यास)।" },
            { en: "Maithili: Mahendra — Dhatri Paat San Gaam (memoir). Sanskrit: Mahamahopadhyaya Sadhu Bhadreshdas — Prasthanacatustaye Brahmaghosah (poetry).", hi: "मैथिली: महेंद्र — धात्री पात सन गाम (संस्मरण)। संस्कृत: महामहोपाध्याय साधु भद्रेशदास — प्रस्थानचतुष्टये ब्रह्मघोषः (काव्य)।" },
        ]
    },
    {
        slug: "oscars-2026", title: "98th Academy Awards (Oscars) 2026", titleHi: "98वें अकादमी पुरस्कार (ऑस्कर)", page: "187", facts: [
            { en: "Ceremony described as held on 15 March 2026 at the Dolby Theatre, Los Angeles.", hi: "स्रोत के अनुसार समारोह 15 मार्च 2026 को लॉस एंजिलिस के डॉल्बी थिएटर में आयोजित हुआ।" },
            { en: "Best Picture: One Battle After Another. Best Director: Paul Thomas Anderson for the same film.", hi: "सर्वश्रेष्ठ फिल्म: वन बैटल आफ्टर अनदर। सर्वश्रेष्ठ निर्देशक: पॉल थॉमस एंडरसन, इसी फिल्म के लिए।" },
            { en: "Best Actor: Michael B. Jordan (Sinners). Best Actress: Jessie Buckley (Hamnet).", hi: "सर्वश्रेष्ठ अभिनेता: माइकल बी. जॉर्डन (सिनर्स)। सर्वश्रेष्ठ अभिनेत्री: जेसी बकली (हैमनेट)।" },
            { en: "One Battle After Another is listed with six awards. Cassandra Kulukundis is listed as the inaugural Best Casting winner.", hi: "वन बैटल आफ्टर अनदर को छह पुरस्कार मिलने का उल्लेख है। पहली बेस्ट कास्टिंग विजेता कैसेंड्रा कुलुकुंडिस बताई गई हैं।" },
        ]
    },
    {
        slug: "bcci-naman", title: "BCCI Naman Awards 2026", titleHi: "बीसीसीआई नमन पुरस्कार 2026", page: "187–188", facts: [
            { en: "Polly Umrigar Award, Best International Cricketer (Men), 2024–25: Shubman Gill.", hi: "पॉली उमरीगर पुरस्कार, सर्वश्रेष्ठ अंतरराष्ट्रीय पुरुष क्रिकेटर 2024–25: शुभमन गिल।" },
            { en: "Best International Cricketer (Women), 2024–25: Smriti Mandhana.", hi: "सर्वश्रेष्ठ अंतरराष्ट्रीय महिला क्रिकेटर 2024–25: स्मृति मंधाना।" },
            { en: "Col. C. K. Nayudu Lifetime Achievement Award: Roger Binny and Rahul Dravid. Women's Lifetime Achievement: Mithali Raj.", hi: "कर्नल सी. के. नायडू आजीवन उपलब्धि पुरस्कार: रोजर बिन्नी और राहुल द्रविड़। महिला आजीवन उपलब्धि पुरस्कार: मिताली राज।" },
        ]
    },
    {
        slug: "whitley-awards", title: "Whitley Awards 2026", titleHi: "व्हिटली पुरस्कार 2026", page: "188", facts: [
            { en: "Indian recipients: Parveen Shaikh and Barkha Subba. The award is popularly known as the Green Oscar.", hi: "भारतीय प्राप्तकर्ता: परवीन शेख और बरखा सुब्बा। इसे 'ग्रीन ऑस्कर' भी कहा जाता है।" },
            { en: "Parveen Shaikh, a BNHS ornithologist, worked on the Guardians of the Skimmer programme to protect Indian Skimmers near the National Chambal Sanctuary.", hi: "BNHS की पक्षी विशेषज्ञ परवीन शेख ने राष्ट्रीय चंबल अभयारण्य के पास इंडियन स्किमर पक्षी के संरक्षण हेतु 'गार्डियंस ऑफ द स्किमर' पहल चलाई।" },
            { en: "Barkha Subba of Darjeeling worked with communities to protect Himalayan Salamanders and wetland habitats.", hi: "दार्जिलिंग की बरखा सुब्बा ने हिमालयी सैलामैंडर और उसके आर्द्रभूमि आवास के संरक्षण हेतु सामुदायिक प्रयास किए।" },
        ]
    },
    {
        slug: "un-gender-advocate", title: "UN Military Gender Advocate of the Year 2025", titleHi: "संयुक्त राष्ट्र सैन्य लैंगिक समानता पुरस्कार", page: "188", facts: [
            { en: "Recipient: Major Abhilasha Barak, Indian Army.", hi: "प्राप्तकर्ता: मेजर अभिलाषा बराक, भारतीय सेना।" },
            { en: "Recognised for gender-responsive peacekeeping during service with UNIFIL in Lebanon, including outreach to women and adolescent girls.", hi: "लेबनान में UNIFIL मिशन के दौरान लैंगिक संवेदनशील शांति स्थापना तथा महिलाओं और किशोरियों से संपर्क के कार्य हेतु सम्मानित।" },
        ]
    },
    {
        slug: "un-secretary-general", title: "UN Secretary-General’s Award 2025", titleHi: "संयुक्त राष्ट्र महासचिव पुरस्कार 2025", page: "189", facts: [
            { en: "Recipient: Major Swathi Shantha Kumar, Indian Army.", hi: "प्राप्तकर्ता: मेजर स्वाति शांता कुमार, भारतीय सेना।" },
            { en: "Awarded in the Gender category for Equal Partners, Lasting Peace, a project undertaken with UNMISS in South Sudan.", hi: "दक्षिण सूडान के UNMISS मिशन में 'Equal Partners, Lasting Peace' परियोजना के लिए जेंडर श्रेणी में सम्मानित।" },
        ]
    },
    {
        slug: "international-booker", title: "International Booker Prize 2026", titleHi: "अंतरराष्ट्रीय बुकर पुरस्कार 2026", page: "189", facts: [
            { en: "Listed winners: author Yáng Shuāng-zǐ and translator Lin King for Taiwan Travelogue.", hi: "स्रोत में विजेता: लेखिका यांग शुआंग-ज़ि और अनुवादक लिन किंग, पुस्तक 'ताइवान ट्रैवलॉग' के लिए।" },
            { en: "The source calls it the first Mandarin Chinese-translated work to receive the International Booker Prize.", hi: "स्रोत के अनुसार मंदारिन चीनी से अनूदित यह अंतरराष्ट्रीय बुकर जीतने वाली पहली पुस्तक थी।" },
        ]
    },
    {
        slug: "subhash-bose-disaster", title: "Subhash Chandra Bose Aapda Prabandhan Puraskar 2026", titleHi: "सुभाष चंद्र बोस आपदा प्रबंधन पुरस्कार", page: "189", facts: [
            { en: "Institutional category: Sikkim State Disaster Management Authority (SSDMA), for disaster preparedness and local resilience.", hi: "संस्थागत श्रेणी: सिक्किम राज्य आपदा प्रबंधन प्राधिकरण, आपदा तैयारी एवं स्थानीय स्तर पर क्षमता बढ़ाने के लिए।" },
            { en: "Individual category: Lieutenant Colonel Seeta Ashok Shelke, Indian Army, for leadership in humanitarian assistance and disaster relief in the 2024 Wayanad disaster.", hi: "व्यक्तिगत श्रेणी: भारतीय सेना की लेफ्टिनेंट कर्नल सीता अशोक शेल्के, 2024 के वायनाड आपदा राहत एवं बचाव कार्यों में नेतृत्व के लिए।" },
        ]
    },
    {
        slug: "iffi-awards", title: "56th International Film Festival of India Awards (2025)", titleHi: "56वाँ भारतीय अंतरराष्ट्रीय फिल्म महोत्सव पुरस्कार", page: "190", facts: [
            { en: "Venue: Goa. Organised by NFDC under the Ministry of Information and Broadcasting with the Government of Goa.", hi: "स्थान: गोवा। आयोजन: सूचना एवं प्रसारण मंत्रालय के अंतर्गत NFDC और गोवा सरकार।" },
            { en: "Golden Peacock, Best Feature Film: Skin of Youth, directed by Ashleigh Mayfair.", hi: "गोल्डन पीकॉक, सर्वश्रेष्ठ फीचर फिल्म: 'स्किन ऑफ यूथ', निर्देशक एश्ले मेफेयर।" },
            { en: "Special felicitation: Rajinikanth for 50 years in cinema.", hi: "विशेष सम्मान: भारतीय सिनेमा में 50 वर्ष पूरे करने के लिए रजनीकांत।" },
        ]
    },
    {
        slug: "ashoka-chakra", title: "Ashoka Chakra 2026", titleHi: "अशोक चक्र 2026", page: "190", facts: [
            { en: "Recipient listed: Group Captain Shubhanshu Shukla, Indian Air Force, for leadership and courage as the Axiom-4 mission pilot.", hi: "स्रोत में प्राप्तकर्ता: भारतीय वायुसेना के ग्रुप कैप्टन शुभांशु शुक्ला, Axiom-4 मिशन पायलट के रूप में साहस और नेतृत्व के लिए।" },
            { en: "The Ashoka Chakra is India's highest peacetime gallantry award. The source notes Shukla as the first Indian to visit the ISS.", hi: "अशोक चक्र भारत का सर्वोच्च शांतिकालीन वीरता पुरस्कार है। स्रोत में शुभांशु शुक्ला को ISS जाने वाले पहले भारतीय के रूप में उल्लेखित किया गया है।" },
        ]
    },
    {
        slug: "laureus-awards", title: "Laureus World Sports Awards 2026", titleHi: "लॉरियस विश्व खेल पुरस्कार 2026", page: "190", facts: [
            { en: "World Sportsman of the Year: Carlos Alcaraz (Spain, tennis).", hi: "वर्ष के सर्वश्रेष्ठ पुरुष खिलाड़ी: कार्लोस अल्काराज़ (स्पेन, टेनिस)।" },
            { en: "World Sportswoman of the Year: Aryna Sabalenka (Belarus, tennis).", hi: "वर्ष की सर्वश्रेष्ठ महिला खिलाड़ी: आर्यना सबालेंका (बेलारूस, टेनिस)।" },
        ]
    },
    {
        slug: "indira-gandhi-peace", title: "Indira Gandhi Prize for Peace, Disarmament and Development 2025", titleHi: "इंदिरा गांधी शांति, निरस्त्रीकरण एवं विकास पुरस्कार", page: "190–191", facts: [
            { en: "Awarding body: Indira Gandhi Memorial Trust. Recipient: Graça Machel of Mozambique.", hi: "प्रदाता: इंदिरा गांधी मेमोरियल ट्रस्ट। प्राप्तकर्ता: मोज़ाम्बिक की ग्रासा माशेल।" },
            { en: "Recognised for work in education, health, nutrition, economic empowerment and humanitarian action.", hi: "शिक्षा, स्वास्थ्य, पोषण, आर्थिक सशक्तीकरण और मानवीय कार्यों में योगदान हेतु सम्मान।" },
        ]
    },
    {
        slug: "saraswati-samman", title: "35th Saraswati Samman (2025)", titleHi: "35वाँ सरस्वती सम्मान (2025)", page: "191", facts: [
            { en: "Recipient: Bengali author Ramkumar Mukhopadhyay for Hara Parbati Katha.", hi: "प्राप्तकर्ता: बांग्ला लेखक रामकुमार मुखोपाध्याय, कृति 'हरा पारबती कथा' के लिए।" },
            { en: "The K. K. Birla Foundation instituted the Saraswati Samman in 1991; inaugural recipient: Harivansh Rai Bachchan.", hi: "के. के. बिड़ला फाउंडेशन ने 1991 में सरस्वती सम्मान शुरू किया; पहले प्राप्तकर्ता हरिवंश राय बच्चन थे।" },
        ]
    },
    {
        slug: "wwf-india-awards", title: "WWF-India Awards 2026", titleHi: "डब्ल्यूडब्ल्यूएफ-इंडिया पुरस्कार 2026", page: "191", facts: [
            { en: "N. Alim Yusuf: developed NeophyteID, an AI-based mobile tool for identifying invasive plant species in Kerala.", hi: "एन. अलीम यूसुफ: केरल में आक्रामक वनस्पति प्रजातियों की पहचान के लिए AI-आधारित मोबाइल ऐप NeophyteID बनाया।" },
            { en: "Anita Chaudhary: recognised for wildlife rescue and conservation, including rescuing more than 500 wild animals.", hi: "अनीता चौधरी: 500 से अधिक वन्यजीवों के बचाव एवं वन्यजीव संरक्षण में योगदान के लिए सम्मानित।" },
        ]
    },
    {
        slug: "pulitzer-prizes", title: "Pulitzer Prizes 2026", titleHi: "पुलित्जर पुरस्कार 2026", page: "191–192", facts: [
            { en: "Illustrated Reporting and Commentary: Anand RK and Suparna Sharma, for trAPPed, a visual report about a digital-arrest scam.", hi: "चित्रात्मक रिपोर्टिंग एवं टिप्पणी: आनंद आर. के. और सुपर्णा शर्मा, डिजिटल अरेस्ट धोखाधड़ी पर 'trAPPed' रिपोर्ट के लिए।" },
            { en: "Public Service: The Washington Post, for reporting on changes to US federal agencies and their human consequences.", hi: "लोक सेवा श्रेणी: द वॉशिंगटन पोस्ट, अमेरिकी संघीय एजेंसियों में बदलावों और उनके मानवीय प्रभावों पर रिपोर्टिंग के लिए।" },
        ]
    },
    {
        slug: "food-planet-prize", title: "Food Planet Prize 2026", titleHi: "फूड प्लैनेट प्राइज 2026", page: "192", facts: [
            { en: "Awarding body: Curt Bergfors Foundation, Sweden. Winner: Andhra Pradesh Community Managed Natural Farming (APCNF) programme.", hi: "प्रदाता: स्वीडन का कर्ट बर्गफोर्स फाउंडेशन। विजेता: आंध्र प्रदेश समुदाय-प्रबंधित प्राकृतिक खेती (APCNF) कार्यक्रम।" },
            { en: "Recognised for scaling community-led natural farming and reducing dependence on synthetic farm inputs.", hi: "समुदाय आधारित प्राकृतिक खेती को बड़े स्तर पर अपनाने और रासायनिक कृषि इनपुट पर निर्भरता घटाने के लिए सम्मान।" },
        ]
    },
    {
        slug: "apj-abdul-kalam-jan-seva", title: "Dr A. P. J. Abdul Kalam Jan Seva Award 2026", titleHi: "डॉ. ए. पी. जे. अब्दुल कलाम जनसेवा पुरस्कार", page: "192", facts: [
            { en: "Winner: Kishor Makwana, Chairperson of the National Commission for Scheduled Castes (NCSC).", hi: "विजेता: किशोर मकवाना, राष्ट्रीय अनुसूचित जाति आयोग (NCSC) के अध्यक्ष।" },
            { en: "Award presented by Prime Point Foundation and the Sansad Ratna Awards jury for work in social justice and protection of Scheduled Caste rights.", hi: "प्राइम पॉइंट फाउंडेशन और संसद रत्न पुरस्कार जूरी द्वारा सामाजिक न्याय व अनुसूचित जातियों के अधिकारों की रक्षा हेतु सम्मान।" },
        ]
    },
    {
        slug: "ramon-magsaysay", title: "Ramon Magsaysay Award 2026", titleHi: "रेमन मैग्सेसे पुरस्कार 2026", page: "192–193", facts: [
            { en: "The source lists Tommy Koh (Singapore), Runa Khan (Bangladesh) and Bo Kyi (Myanmar) as winners.", hi: "स्रोत में विजेता: टॉमी कोह (सिंगापुर), रूना खान (बांग्लादेश) और बो चाई (म्यांमार)।" },
            { en: "Fields recognised: international diplomacy and peace-building; social development; and human-rights advocacy, respectively.", hi: "क्रमशः अंतरराष्ट्रीय कूटनीति एवं शांति निर्माण; सामाजिक विकास; और मानवाधिकारों की वकालत के लिए सम्मान।" },
            { en: "Established in 1958 in memory of Philippine President Ramon Magsaysay; often called Asia's Nobel Prize.", hi: "इसकी स्थापना 1958 में फिलीपींस के पूर्व राष्ट्रपति रेमन मैग्सेसे की स्मृति में हुई; इसे 'एशिया का नोबेल' कहा जाता है।" },
        ]
    },
    {
        slug: "miss-world", title: "Miss World 2026", titleHi: "मिस वर्ल्ड 2026", page: "193", facts: [
            { en: "The source names Joheirry Mola Dominguez of the Dominican Republic as the winner.", hi: "स्रोत में डोमिनिकन गणराज्य की जोहेरी मोला डोमिंगेज को विजेता बताया गया है।" },
            { en: "The source places the final in Nha Trang, Vietnam, on 5 September 2026.", hi: "स्रोत के अनुसार अंतिम प्रतियोगिता 5 सितंबर 2026 को न्हा ट्रांग, वियतनाम में हुई।" },
        ]
    },
    {
        slug: "dadasaheb-phalke", title: "Dadasaheb Phalke Award 2024", titleHi: "दादासाहेब फाल्के पुरस्कार 2024", page: "193", facts: [
            { en: "Recipient listed: Kannada actor Anant Nag, described as the second Kannada actor to receive the award.", hi: "स्रोत में प्राप्तकर्ता: कन्नड़ अभिनेता अनंत नाग; यह सम्मान पाने वाले दूसरे कन्नड़ अभिनेता बताए गए हैं।" },
            { en: "The award was instituted in 1969. Its first recipient was Devika Rani; it is India's highest cinema honour.", hi: "पुरस्कार की स्थापना 1969 में हुई। पहली प्राप्तकर्ता देविका रानी थीं; यह भारतीय सिनेमा का सर्वोच्च सम्मान है।" },
        ]
    },
]

const questions: Question[] = [
    { en: "Who received the Kalinga Ratna Award 2026?", hi: "कलिंग रत्न पुरस्कार 2026 किसे मिला?", answer: "Justice Dipak Misra / न्यायमूर्ति दीपक मिश्रा" },
    { en: "Which Nagaland film won the Platform Prize at TIFF 2026?", hi: "TIFF 2026 में प्लेटफॉर्म प्राइज जीतने वाली नागालैंड की फिल्म कौन-सी थी?", answer: "Angh / अंघ" },
    { en: "Who received the BRICS CCI Women Empowerment Trailblazer Award 2026?", hi: "ब्रिक्स CCI महिला सशक्तीकरण ट्रेलब्लेजर पुरस्कार 2026 किसे मिला?", answer: "Kalpana Soren / कल्पना सोरेन" },
    { en: "Who received the Tyler Prize 2026?", hi: "टायलर पुरस्कार 2026 किसे मिला?", answer: "Toby Kiers / टोबी कियर्स" },
    { en: "Which film won Best Motion Picture – Drama at the Golden Globes 2026?", hi: "गोल्डन ग्लोब 2026 में सर्वश्रेष्ठ ड्रामा फिल्म कौन-सी रही?", answer: "Hamnet / हैमनेट" },
    { en: "Who received the Global Teacher Prize 2026?", hi: "ग्लोबल टीचर प्राइज 2026 किसे मिला?", answer: "Rubal Nagi / रुबल नागी" },
    { en: "Our Lady of Grace Cathedral, recognised by UNESCO, is in which state?", hi: "यूनेस्को से सम्मानित अवर लेडी ऑफ ग्रेस कैथेड्रल किस राज्य में है?", answer: "Maharashtra / महाराष्ट्र" },
    { en: "Which Manipuri film received the BAFTA children's and family film honour?", hi: "बाफ्टा में बाल एवं पारिवारिक फिल्म श्रेणी का सम्मान किस मणिपुरी फिल्म को मिला?", answer: "Boong / बूंग" },
    { en: "Who was BBC Indian Sportswoman of the Year 2025?", hi: "बीबीसी इंडियन स्पोर्ट्सवुमन ऑफ द ईयर 2025 कौन बनीं?", answer: "Smriti Mandhana / स्मृति मंधाना" },
    { en: "How many MPs from Uttar Pradesh were listed for Sansad Ratna Awards 2026?", hi: "संसद रत्न पुरस्कार 2026 हेतु उत्तर प्रदेश से कितने सांसद चुने गए?", answer: "2: Jagdambika Pal and Praveen Patel / 2: जगदंबिका पाल और प्रवीण पटेल" },
    { en: "Who was listed as the Abel Prize 2026 winner?", hi: "एबेल पुरस्कार 2026 का विजेता किसे बताया गया है?", answer: "Gerd Faltings / गर्ड फाल्टिंग्स" },
    { en: "Who was conferred an honorary KBE in 2026?", hi: "2026 में मानद KBE सम्मान किसे मिला?", answer: "Natarajan Chandrasekaran / नटराजन चंद्रशेखरन" },
    { en: "Who received the 5th Lata Deenanath Mangeshkar Award?", hi: "पाँचवाँ लता दीनानाथ मंगेशकर पुरस्कार किसे मिला?", answer: "Kailash Satyarthi / कैलाश सत्यार्थी" },
    { en: "Who became the first Indian woman Fellow of the Meteoritical Society?", hi: "मेटियोरिटिकल सोसायटी की फेलो चुनी जाने वाली पहली भारतीय महिला कौन हैं?", answer: "Kuljeet Kaur Marhas / कुलजीत कौर मरहास" },
    { en: "Who received the Lokmanya Tilak National Award 2026?", hi: "लोकमान्य तिलक राष्ट्रीय पुरस्कार 2026 किसे मिला?", answer: "Ajit Doval / अजीत डोभाल" },
    { en: "Who received the USISPF Leadership Award 2026?", hi: "USISPF लीडरशिप अवॉर्ड 2026 किसे मिला?", answer: "Sunil Bharti Mittal / सुनील भारती मित्तल" },
    { en: "Who received the UNESCO/Guillermo Cano World Press Freedom Prize 2026?", hi: "यूनेस्को/गिलर्मो कानो विश्व प्रेस स्वतंत्रता पुरस्कार 2026 किसे मिला?", answer: "Sudanese Journalists Syndicate / सूडानी पत्रकार सिंडिकेट" },
]

// Exam practice based on facts in the supplied PDF. Each answer is revealed on selection.
const mcqs: MCQ[] = [
    { questionEn: "Who developed the Plas-Stick solution?", questionHi: "Plas-Stick समाधान किसने विकसित किया?", options: ["Vivaan Chhawchharia, Ariana Agarwal and Avyana Mehta", "Anand RK and Suparna Sharma", "Parveen Shaikh and Barkha Subba", "Roger Binny and Rahul Dravid"], correct: 0, explanationEn: "The Earth Prize section names the three students.", explanationHi: "द अर्थ प्राइज वाले भाग में तीनों विद्यार्थियों के नाम दिए गए हैं।" },
    { questionEn: "Which award is popularly known as the Green Oscar?", questionHi: "किस पुरस्कार को ग्रीन ऑस्कर कहा जाता है?", options: ["Dirac Medal", "Whitley Award", "Saraswati Samman", "Pulitzer Prize"], correct: 1, explanationEn: "The PDF uses Green Oscar for the Whitley Award.", explanationHi: "PDF में व्हिटली पुरस्कार को ग्रीन ऑस्कर कहा गया है।" },
    { questionEn: "Who received the Dirac Medal 2026 in the source?", questionHi: "स्रोत के अनुसार डिराक पदक 2026 किसे मिला?", options: ["Professor Deepak Dhar", "Professor Annapurni Subramaniam", "Dr Ch. Srinivasa Rao", "Neeraj Chopra"], correct: 0, explanationEn: "The medal is linked to his work in statistical physics.", explanationHi: "यह पदक सांख्यिकीय भौतिकी में उनके शोध से संबंधित है।" },
    { questionEn: "Which organisation received the institutional disaster-management award?", questionHi: "संस्थागत आपदा प्रबंधन पुरस्कार किस संस्था को मिला?", options: ["BNHS", "ICAR-IARI", "Sikkim State Disaster Management Authority", "BCCI"], correct: 2, explanationEn: "The PDF lists SSDMA in the institutional category.", explanationHi: "PDF में संस्थागत श्रेणी में सिक्किम राज्य आपदा प्रबंधन प्राधिकरण का नाम है।" },
    { questionEn: "Who won the Polly Umrigar Award for 2024–25?", questionHi: "2024–25 का पॉली उमरीगर पुरस्कार किसे मिला?", options: ["Rahul Dravid", "Shubman Gill", "Smriti Mandhana", "Mithali Raj"], correct: 1, explanationEn: "Shubman Gill is listed as the men's international cricketer winner.", explanationHi: "शुभमन गिल को पुरुष अंतरराष्ट्रीय क्रिकेटर श्रेणी में दिखाया गया है।" },
    { questionEn: "Who was the first recipient of the Saraswati Samman?", questionHi: "सरस्वती सम्मान के पहले प्राप्तकर्ता कौन थे?", options: ["Mamta Kalia", "Harivansh Rai Bachchan", "Ramkumar Mukhopadhyay", "Navtej Sarna"], correct: 1, explanationEn: "The honour began in 1991 with Harivansh Rai Bachchan.", explanationHi: "1991 में यह सम्मान हरिवंश राय बच्चन को मिला था।" },
]

function TopicCard({ topic, index }: { topic: Topic; index: number }) {
    return (
        <article id={topic.slug} className="scroll-mt-28 overflow-hidden rounded-xl border bg-card shadow-sm">
            <div className="border-b bg-amber-50/60 px-5 py-4 sm:px-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-800">Topic {index + 1} of {topics.length}</p>
                <h3 className="text-lg font-bold tracking-tight sm:text-xl">{topic.title}</h3>
                <p lang="hi" className="mt-1 text-sm text-muted-foreground">{topic.titleHi}</p>
            </div>
            <div className="space-y-5 px-5 py-5 sm:px-6">
                {topic.facts.map((fact, i) => (
                    <div key={i} className="border-l-[3px] border-amber-300 pl-4 text-sm leading-7">
                        <p>{fact.en}</p>
                        <p lang="hi" className="mt-1 text-muted-foreground">{fact.hi}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-end border-t bg-muted/20 px-5 py-3"><a className="text-xs font-medium text-amber-800 hover:underline" href="#topic-index">Back to topic index ↑</a></div>
        </article>
    )
}

function MCQCard({ mcq, index }: { mcq: MCQ; index: number }) {
    const [selected, setSelected] = useState<number | null>(null)
    const correct = selected === mcq.correct
    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <h3 className="font-semibold">{index + 1}. {mcq.questionEn}</h3>
            <p lang="hi" className="mt-1 text-sm text-muted-foreground">{mcq.questionHi}</p>
            <div className="mt-4 space-y-2">
                {mcq.options.map((option, i) => (
                    <button type="button" key={option} disabled={selected !== null} onClick={() => setSelected(i)} className={`w-full rounded-lg border p-3 text-left text-sm transition-colors ${selected !== null && i === mcq.correct ? "border-green-400 bg-green-50 text-green-900" : selected === i ? "border-red-400 bg-red-50 text-red-900" : "hover:bg-muted/60"}`}>
                        <span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>{option}
                    </button>
                ))}
            </div>
            {selected !== null && <div role="status" className={`mt-4 rounded-lg border-l-4 p-3 ${correct ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}>
                <p className="flex items-center gap-2 text-sm font-semibold">{correct ? <CheckCircle2 className="h-4 w-4" /> : <HelpCircle className="h-4 w-4" />}{correct ? "Correct! / सही उत्तर!" : `Correct answer: ${String.fromCharCode(65 + mcq.correct)}`}</p>
                <p className="mt-2 text-sm">{mcq.explanationEn}</p><p lang="hi" className="mt-1 text-sm text-muted-foreground">{mcq.explanationHi}</p>
                <button type="button" onClick={() => setSelected(null)} className="mt-2 text-xs font-medium underline">Try again / फिर प्रयास करें</button>
            </div>}
        </div>
    )
}

export default function AwardsHonours2026Page() {
    const [search, setSearch] = useState("")
    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase()
        return !q ? topics : topics.filter(topic => `${topic.title} ${topic.titleHi} ${topic.facts.map(f => `${f.en} ${f.hi}`).join(" ")}`.toLowerCase().includes(q))
    }, [search])

    return <div className="min-h-screen bg-background">
        <FooterLinkNavbar />
        <header className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background px-4 pb-12 pt-28 sm:px-6 md:pb-16 md:pt-32 lg:px-8">
            <div className="relative mx-auto max-w-5xl">
                <Link href="/current-affairs" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-amber-800 hover:underline"><ArrowLeft className="h-4 w-4" />Back to Current Affairs</Link>
                <div className="mb-4 flex"><span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900"><Sparkles className="h-4 w-4" /> Complete Topic Digest · Awards & Honours</span></div>
                <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Awards & Honours Current Affairs 2026</h1>
                <p lang="hi" className="mb-6 text-xl text-muted-foreground">पुरस्कार एवं सम्मान 2026 — विजेता, महत्वपूर्ण तथ्य और प्रश्नोत्तर</p>
                <div className="flex flex-wrap gap-3 text-sm">
                    {/* <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2"><Calendar className="h-4 w-4 text-amber-700" /> Source PDF: pages 184–195</span> */}
                    <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2"><Trophy className="h-4 w-4 text-amber-700" /> {topics.length} Detailed Topics</span>
                    <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2"><Target className="h-4 w-4 text-amber-700" /> {questions.length} One-liners · {mcqs.length} MCQs</span>
                </div>
            </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
            <section className="mb-10">
                <div className="mb-4 flex items-center gap-2"><Languages className="h-5 w-5 text-amber-700" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-amber-100 bg-amber-50/60 p-5"><h3 className="mb-3 text-xs font-bold uppercase text-amber-800">English</h3><p className="text-sm leading-7">Topic-wise study notes covering national and international awards, awardees, awarding bodies, notable works and exam facts from the supplied Awards & Honours chapter.</p></div>
                    <div className="rounded-xl border border-orange-100 bg-orange-50/60 p-5"><h3 className="mb-3 text-xs font-bold text-orange-800">हिन्दी</h3><p lang="hi" className="text-sm leading-7">पुरस्कार एवं सम्मान अध्याय के विषयवार नोट्स। विजेता, पुरस्कार देने वाली संस्थाएँ, महत्वपूर्ण कृतियाँ, उपलब्धियाँ और परीक्षा-उपयोगी तथ्य सरल हिंदी में दिए गए हैं।</p></div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Editorial note: Facts are transcribed from the supplied study PDF. Check official award announcements before using them as verified current-news claims.</p>
            </section>

            <section id="topic-index" className="mb-10 scroll-mt-28">
                <div className="mb-4 flex items-center gap-2"><BookOpen className="h-5 w-5 text-amber-700" /><h2 className="text-2xl font-bold">Topic-wise List / विषयवार सूची</h2></div>
                <div className="rounded-xl border bg-card p-4 sm:p-5">
                    <label htmlFor="award-topic-search" className="relative mb-4 block"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><input id="award-topic-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search awards, winners or Hindi terms / विषय खोजें" className="h-10 w-full rounded-lg border bg-background pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-amber-200" />{search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search" className="absolute right-3 top-3"><X className="h-4 w-4" /></button>}</label>
                    <nav aria-label="Award topics" className="grid gap-2 sm:grid-cols-2">
                        {filtered.map(topic => <a key={topic.slug} href={`#${topic.slug}`} className="flex items-start gap-2 rounded-lg border p-3 text-sm hover:border-amber-300 hover:bg-amber-50"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" /><span><span className="font-medium">{topic.title}</span><span lang="hi" className="mt-0.5 block text-xs text-muted-foreground">{topic.titleHi}</span></span></a>)}
                        {filtered.length === 0 && <p className="p-3 text-sm text-muted-foreground">No matching topics / कोई विषय नहीं मिला।</p>}
                    </nav>
                    <a href="#one-liner-qa" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-800"><Target className="h-4 w-4" /> Jump to One-Liner Q&A</a>
                </div>
            </section>

            <section className="mb-10"><div className="mb-4 flex items-center gap-2"><Trophy className="h-5 w-5 text-amber-700" /><h2 className="text-2xl font-bold">Detailed Topic Notes / विषयवार विस्तृत नोट्स</h2></div><div className="space-y-6">{topics.map((topic, index) => <TopicCard key={topic.slug} topic={topic} index={index} />)}</div></section>

            <section id="one-liner-qa" className="mb-10 scroll-mt-28"><div className="mb-4 flex items-center gap-2"><Target className="h-5 w-5 text-amber-700" /><h2 className="text-2xl font-bold">One-Liner Q&A / एक-पंक्ति प्रश्नोत्तर</h2></div><div className="rounded-xl border bg-card p-5"><p className="mb-4 text-sm text-muted-foreground">Questions from the chapter's one-liner section. Click to reveal the answer / उत्तर देखने के लिए प्रश्न खोलें।</p><div className="space-y-2">{questions.map((item, i) => <details key={i} className="group rounded-lg border p-4"><summary className="cursor-pointer text-sm font-semibold">{i + 1}. {item.en}<span lang="hi" className="mt-1 block font-normal text-muted-foreground">{item.hi}</span></summary><p className="mt-3 rounded-lg bg-green-50 p-3 text-sm font-semibold text-green-800">{item.answer}</p></details>)}</div></div></section>

            <section className="mb-10"><div className="mb-4 flex items-center gap-2"><Target className="h-5 w-5 text-amber-700" /><h2 className="text-2xl font-bold">Practice MCQs / अभ्यास प्रश्न</h2></div><div className="space-y-4">{mcqs.map((mcq, i) => <MCQCard key={i} mcq={mcq} index={i} />)}</div></section>
            <div className="flex flex-col items-center justify-between gap-3 border-t pt-8 sm:flex-row"><Link href="/current-affairs"><Button variant="outline" className="cursor-pointer gap-2"><ArrowLeft className="h-4 w-4" />Back to Current Affairs</Button></Link>
              <div className="flex justify-end gap-2">
                    <Link href="/current-affairs/by-topic/sports">
                        <Button variant="outline" className="gap-2 cursor-pointer">Next: Sports <ChevronRight className="w-4 h-4" /></Button>
                    </Link>
            <Link href="/mock-test"><Button className="cursor-pointer gap-2">Practice Quiz <Target className="h-4 w-4" /></Button></Link>
            </div>
            </div>
        </main>
        <FooterLinkFooter />
    </div>
}