/**
 * Topic-specific editorial exam notes and official reference links.
 * Direct links point to relevant primary-source documents or event pages.
 * Portal links lead to an authority's website but do NOT verify every article claim.
 * Review independently before promoting numerical or time-sensitive claims to "verified".
 */
export type EditorialNote = {
  source: { url: string; label: string; kind: "direct" | "portal" }
  explanationEn: string
  explanationHi: string
  examTip: string
}

export const currentAffairsEditorialNotes: Record<string, EditorialNote> = {
  "abraham-accords": {
    "source": {
      "url": "https://www.state.gov/",
      "label": "U.S. Department of State",
      "kind": "portal"
    },
    "explanationEn": "The Abraham Accords concern the normalization of relations between Israel and participating Arab states. Do not confuse the original 2020 agreements with later diplomatic developments.",
    "explanationHi": "अब्राहम समझौते इज़राइल और कुछ अरब देशों के बीच संबंध सामान्य बनाने से जुड़े हैं। 2020 के मूल समझौतों और बाद की घटनाओं को अलग रखें।",
    "examTip": "Distinguish the original signatories, year and follow-up events."
  },
  "adi-shankaracharya": {
    "source": {
      "url": "https://asi.nic.in/",
      "label": "Archaeological Survey of India",
      "kind": "portal"
    },
    "explanationEn": "Adi Shankaracharya is studied for Advaita Vedanta, the four traditional mathas and philosophical literature. Dates and attributed texts can vary among traditions and should be described carefully.",
    "explanationHi": "आदि शंकराचार्य से जुड़े प्रश्न अद्वैत वेदांत, मठ परंपरा और दार्शनिक ग्रंथों पर केंद्रित होते हैं। तिथियों के बारे में विभिन्न परंपराओं को ध्यान में रखें।",
    "examTip": "Separate established philosophical concepts from disputed chronology."
  },
  "artemis-ii": {
    "source": {
      "url": "https://www.nasa.gov/mission/artemis-ii/",
      "label": "NASA — Artemis II mission",
      "kind": "direct"
    },
    "explanationEn": "Artemis II is a crewed test flight in NASA's Artemis programme. Distinguish a lunar flyby from a lunar landing and check mission dates on NASA's current mission page.",
    "explanationHi": "आर्टेमिस-II मानव-सहित परीक्षण उड़ान है। चंद्रमा के पास से उड़ान और चंद्रमा पर उतरने में अंतर याद रखें; मिशन की तारीख NASA से देखें।",
    "examTip": "Practise spacecraft, crew, mission type and programme sequence."
  },
  "awards-honours-2026": {
    "source": {
      "url": "https://www.padmaawards.gov.in/Document/pdf/notifications/PadmaAwards/PadmaAwards2026.pdf",
      "label": "Ministry of Home Affairs — Padma Awards 2026 list",
      "kind": "direct"
    },
    "explanationEn": "Official Padma Awards are organized as Vibhushan, Bhushan and Shri. Verify award counts, awardees, fields and home states against the published MHA list, not circulating summaries.",
    "explanationHi": "पद्म विभूषण, पद्म भूषण और पद्म श्री की अलग-अलग श्रेणियाँ हैं। विजेताओं के नाम, राज्य और संख्या गृह मंत्रालय की सूची से मिलाएँ।",
    "examTip": "Use a name–award–field–state table for revision."
  },
  "biodiversity-project": {
    "source": {
      "url": "https://nbaindia.org/",
      "label": "National Biodiversity Authority",
      "kind": "portal"
    },
    "explanationEn": "For biodiversity initiatives, identify the implementing ministry, authority, project period and intended conservation outcomes. A project announcement is not evidence that its targets have been achieved.",
    "explanationHi": "जैव-विविधता परियोजना के लिए मंत्रालय, राष्ट्रीय जैव विविधता प्राधिकरण, अवधि और संरक्षण उद्देश्य अलग-अलग याद करें। घोषणा और उपलब्धि समान नहीं हैं।",
    "examTip": "Check funding, duration and responsible institutions in the primary notice."
  },
  "brics-summit-2026": {
    "source": {
      "url": "https://ssifs.mea.gov.in/public/uploads/section/wn/1780028805.pdf",
      "label": "Ministry of External Affairs — BRICS India 2026 chairship briefing",
      "kind": "direct"
    },
    "explanationEn": "BRICS chairship rotates among members, while summit host, meeting venue and membership are separate facts. The MEA briefing documents India's 2026 chairship and summit preparations.",
    "explanationHi": "BRICS में अध्यक्षता, सम्मेलन का आयोजन स्थल और सदस्यता अलग तथ्य हैं। विदेश मंत्रालय का विवरण भारत की 2026 अध्यक्षता से संबंधित है।",
    "examTip": "Distinguish full members from partner countries; cross-check summit outcomes separately."
  },
  "capf-act-2026": {
    "source": {
      "url": "https://www.rashtrapatibhavan.gov.in/index.php/central-bills?page=1",
      "label": "President of India — Bills assented to",
      "kind": "portal"
    },
    "explanationEn": "The Central Armed Police Forces (General Administration) Act addresses recruitment and service rules. Distinguish the introduction of a Bill, passage by Parliament and presidential assent.",
    "explanationHi": "CAPF संबंधी कानून में भर्ती और सेवा शर्तें महत्वपूर्ण हैं। विधेयक पेश होना, संसद से पारित होना और राष्ट्रपति की स्वीकृति अलग अवस्थाएँ हैं।",
    "examTip": "Check the legal status and commencement provisions before answering MCQs."
  },
  "coal-gasification": {
    "source": {
      "url": "https://coal.nic.in/",
      "label": "Ministry of Coal",
      "kind": "portal"
    },
    "explanationEn": "Coal gasification converts coal into synthesis gas that can be used as feedstock for fuels and chemicals. Learn the process and policy objective separately from the announced financial incentive.",
    "explanationHi": "कोयला गैसीकरण में कोयले से सिंथेसिस गैस बनाई जाती है। तकनीक, उपयोग और सरकारी प्रोत्साहन को अलग समझें।",
    "examTip": "Separate technology definition, policy allocation and commercial output."
  },
  "commonwealth-games-2026": {
    "source": {
      "url": "https://thecommonwealth.org/news/glasgow-games-and-sports-ministers-celebrate-inclusion-partnership-and-commonwealth-unity",
      "label": "Commonwealth Secretariat — Glasgow 2026 report",
      "kind": "direct"
    },
    "explanationEn": "The 2026 Commonwealth Games were held in Glasgow. When revising medal tables, separate official overall standings from Indian sport-wise summaries and do not confuse the Games with CHOGM.",
    "explanationHi": "2026 राष्ट्रमंडल खेल ग्लासगो में हुए। पदक तालिका, भारत के खेलवार पदक और राष्ट्रमंडल शासनाध्यक्षों की बैठक (CHOGM) अलग हैं।",
    "examTip": "Verify medal totals and athlete names against official results before using them in questions."
  },
  "constitution-131st-amendment": {
    "source": {
      "url": "https://sansad.in/getFile/BillsTexts/LSBillTexts/Asintroduced/AS%20INTRO416202612944PM.pdf?source=legislation",
      "label": "Lok Sabha — Constitution (131st Amendment) Bill text",
      "kind": "direct"
    },
    "explanationEn": "The 131st Amendment document is an introduced Bill. An amendment Bill is not automatically enacted law; compare the proposed text with the Constitution and its parliamentary status.",
    "explanationHi": "131वाँ संविधान संशोधन दस्तावेज़ एक विधेयक के रूप में पेश हुआ था। प्रस्ताव और लागू संविधान संशोधन को समान न मानें।",
    "examTip": "Track Bill number, affected Article, passage and assent separately."
  },
  "defence": {
    "source": {
      "url": "https://www.pib.gov.in/",
      "label": "Press Information Bureau — Defence announcements",
      "kind": "portal"
    },
    "explanationEn": "Separate military exercises, weapons systems, procurement contracts and operational deployments. These have different participating agencies and should not be memorized as interchangeable events.",
    "explanationHi": "सैन्य अभ्यास, रक्षा उपकरण, खरीद समझौते और तैनाती अलग-अलग विषय हैं। इनके विभाग, साझेदार और उद्देश्य अलग याद करें।",
    "examTip": "Build a table of exercise–countries, weapon–developer and deal–date."
  },
  "ebola-outbreak-2026": {
    "source": {
      "url": "https://www.who.int/news/item/17-05-2026-epidemic-of-ebola-disease-in-the-democratic-republic-of-the-congo-and-uganda-determined-a-public-health-emergency-of-international-concern",
      "label": "WHO — Ebola PHEIC statement (17 May 2026)",
      "kind": "direct"
    },
    "explanationEn": "WHO declared the Bundibugyo Ebola outbreak a Public Health Emergency of International Concern on 17 May 2026. A PHEIC is not the same as a pandemic emergency; case totals vary with the reporting date.",
    "explanationHi": "WHO ने 17 मई 2026 को बुंडीबुग्यो इबोला प्रकोप को अंतरराष्ट्रीय चिंता वाला सार्वजनिक स्वास्थ्य आपातकाल घोषित किया। PHEIC और महामारी आपातकाल अलग हैं।",
    "examTip": "Always attach the reporting date to case and death figures."
  },
  "fcra-amendment-2026": {
    "source": {
      "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2287897&lang=1&reg=3",
      "label": "PIB — FCRA Bill and Rules 2026 explanation",
      "kind": "direct"
    },
    "explanationEn": "The 2026 FCRA Amendment Bill and the notified FCRA Amendment Rules are not the same legal instrument. PIB explains that the Bill remained under parliamentary consideration while notified rules were in force.",
    "explanationHi": "FCRA संशोधन विधेयक और अधिसूचित नियम अलग हैं। PIB के अनुसार विधेयक विचाराधीन था, जबकि 2026 के अधिसूचित नियम लागू थे।",
    "examTip": "Look for the exact legal instrument and its status in each MCQ."
  },
  "g7-summit-2026": {
    "source": {
      "url": "https://www.elysee.fr/en/",
      "label": "French Presidency — G7 host statements",
      "kind": "portal"
    },
    "explanationEn": "The G7 is an informal forum, distinct from the G20 and BRICS. For a summit question, verify the host country, leaders' communiqué and whether the quoted outcome was agreed or only proposed.",
    "explanationHi": "G7, G20 और BRICS अलग मंच हैं। सम्मेलन का मेजबान, साझा घोषणा और प्रस्ताव अलग-अलग याद करें।",
    "examTip": "Check communiqué date and host instead of relying on preliminary agendas."
  },
  "ganga-expressway": {
    "source": {
      "url": "https://upeida.up.gov.in/",
      "label": "Uttar Pradesh Expressways Industrial Development Authority",
      "kind": "portal"
    },
    "explanationEn": "The Ganga Expressway is a transport infrastructure project. Separate its route, length, development phases and operating status; construction milestones are not opening dates.",
    "explanationHi": "गंगा एक्सप्रेसवे परिवहन परियोजना है। मार्ग, लंबाई, निर्माण चरण और संचालन की स्थिति अलग रखें; निर्माण पूरा होना उद्घाटन के बराबर नहीं है।",
    "examTip": "Confirm termini and length on the executing authority's project page."
  },
  "important-days-themes-2026": {
    "source": {
      "url": "https://www.un.org/en/observances",
      "label": "United Nations — International observances",
      "kind": "portal"
    },
    "explanationEn": "International days often have a fixed calendar date but a changing annual theme. Match each 2026 theme with the specific organization that issued it.",
    "explanationHi": "अंतरराष्ट्रीय दिवसों की तारीख स्थिर हो सकती है, लेकिन वार्षिक थीम बदलती है। 2026 की थीम संबंधित संस्था से मिलाएँ।",
    "examTip": "Revise date–theme–organizer together; do not reuse last year's theme."
  },
  "indexes-rankings-reports-2026": {
    "source": {
      "url": "https://mospi.gov.in/",
      "label": "Ministry of Statistics and Programme Implementation",
      "kind": "portal"
    },
    "explanationEn": "An index, ranking and report are different products. Record who publishes each, the measurement period and what a higher or lower score means before memorizing India's rank.",
    "explanationHi": "सूचकांक, रैंकिंग और रिपोर्ट अलग हैं। प्रकाशक, आँकड़ों की अवधि और स्कोर का अर्थ समझकर भारत की स्थिति याद करें।",
    "examTip": "Avoid mixing different editions or index methodologies."
  },
  "india-japan-summit": {
    "source": {
      "url": "https://www.mea.gov.in/",
      "label": "Ministry of External Affairs — India–Japan relations",
      "kind": "portal"
    },
    "explanationEn": "Bilateral summit questions require the meeting year, leaders, partnership framework and signed outcomes. Announced cooperation does not necessarily mean a finalized treaty or disbursed investment.",
    "explanationHi": "भारत-जापान शिखर बैठक में वर्ष, नेता, सहयोग का क्षेत्र और हस्ताक्षरित दस्तावेज़ अलग रखें। घोषणा को पूर्ण समझौता न मानें।",
    "examTip": "Distinguish MoUs, joint statements and implemented projects."
  },
  "india-ndc-2035": {
    "source": {
      "url": "https://www.unfccc.int/sites/default/files/2026-04/INDIA%20NDC%202031-35.pdf",
      "label": "UNFCCC — India's NDC (2031–2035), April 2026",
      "kind": "direct"
    },
    "explanationEn": "An NDC contains nationally stated climate commitments under the Paris Agreement. Distinguish absolute emissions, emissions intensity and non-fossil electricity capacity; they are not interchangeable targets.",
    "explanationHi": "NDC पेरिस समझौते के अंतर्गत जलवायु प्रतिबद्धताएँ हैं। कुल उत्सर्जन, उत्सर्जन तीव्रता और गैर-जीवाश्म विद्युत क्षमता अलग संकेतक हैं।",
    "examTip": "Record the target year, baseline and unit for every numerical target."
  },
  "india-nz-fta": {
    "source": {
      "url": "https://commerce.gov.in/",
      "label": "Ministry of Commerce and Industry — Trade agreements",
      "kind": "portal"
    },
    "explanationEn": "An FTA can cover tariff schedules, services, rules of origin and investment. Check whether a deal is under negotiation, signed or in force before describing its benefits as operational.",
    "explanationHi": "FTA में शुल्क, सेवाएँ, मूल-नियम और निवेश शामिल हो सकते हैं। बातचीत, हस्ताक्षर और लागू होने की अवस्थाओं में अंतर करें।",
    "examTip": "Ask: What is the status, entry-into-force date and covered sectors?"
  },
  "india-uae-agreements": {
    "source": {
      "url": "https://www.mea.gov.in/",
      "label": "Ministry of External Affairs — India–UAE relations",
      "kind": "portal"
    },
    "explanationEn": "When multiple India–UAE agreements are announced together, list each ministry and sector instead of combining them into one unspecified pact. Separate MoUs from binding agreements.",
    "explanationHi": "भारत-UAE समझौतों के लिए हर समझौते का मंत्रालय और क्षेत्र अलग लिखें। MoU और बाध्यकारी समझौते को एक न मानें।",
    "examTip": "Revise signatories, topic and agreement type."
  },
  "india-unsc-2028": {
    "source": {
      "url": "https://www.un.org/securitycouncil/",
      "label": "United Nations Security Council — Official portal",
      "kind": "portal"
    },
    "explanationEn": "The Security Council has five permanent and ten elected members. Campaigning for a 2028–29 seat is not the same as election or actual membership.",
    "explanationHi": "सुरक्षा परिषद में पाँच स्थायी और दस निर्वाचित सदस्य होते हैं। 2028–29 की सदस्यता के लिए अभियान और निर्वाचित होना अलग बातें हैं।",
    "examTip": "Check election dates, term and India's stated diplomatic priorities."
  },
  "ircc-india": {
    "source": {
      "url": "https://absch.cbd.int/",
      "label": "Convention on Biological Diversity — ABS Clearing-House",
      "kind": "portal"
    },
    "explanationEn": "IRCC stands for Internationally Recognized Certificate of Compliance under the Nagoya Protocol. It relates to access to genetic resources and benefit-sharing, not general trade compliance.",
    "explanationHi": "IRCC का संबंध नागोया प्रोटोकॉल के तहत आनुवंशिक संसाधनों की पहुँच और लाभ-साझेदारी से है; यह सामान्य व्यापार अनुपालन प्रमाणपत्र नहीं है।",
    "examTip": "Keep Nagoya Protocol, ABS, issuing authority and IRCC purpose together."
  },
  "isp-index": {
    "source": {
      "url": "https://mospi.gov.in/faq",
      "label": "MoSPI — Index of Services Production FAQs",
      "kind": "direct"
    },
    "explanationEn": "ISP measures short-term changes in real service-sector output. It complements the Index of Industrial Production (IIP), rather than measuring industrial output itself.",
    "explanationHi": "ISP सेवा क्षेत्र के वास्तविक उत्पादन में अल्पकालिक बदलाव मापता है। यह औद्योगिक उत्पादन सूचकांक (IIP) का पूरक है, उसका पर्याय नहीं।",
    "examTip": "Remember full form, releasing agency, sector coverage and base year."
  },
  "kishau-dam": {
    "source": {
      "url": "https://cwc.gov.in/",
      "label": "Central Water Commission",
      "kind": "portal"
    },
    "explanationEn": "Kishau is a multipurpose dam project. Exam questions should distinguish water-sharing arrangements, river basin, state partners, and proposed irrigation and power benefits.",
    "explanationHi": "किशाऊ बहुउद्देशीय बाँध परियोजना में नदी, सहभागी राज्य, जल बँटवारा, सिंचाई और बिजली लाभ अलग-अलग समझें।",
    "examTip": "Avoid treating proposed capacity as already commissioned generation."
  },
  "national-honour-amendment-2026": {
    "source": {
      "url": "https://www.rashtrapatibhavan.gov.in/index.php/central-bills?page=1",
      "label": "President of India — Bills receiving assent",
      "kind": "portal"
    },
    "explanationEn": "Questions on changes to the Prevention of Insults to National Honour law require the original Act, exact new provision and date of assent. A Bill title alone does not establish the law's commencement.",
    "explanationHi": "राष्ट्रीय सम्मान अपमान निवारण कानून में मूल अधिनियम, नए प्रावधान और राष्ट्रपति की स्वीकृति की तारीख अलग तथ्य हैं।",
    "examTip": "Confirm enacted text and commencement before citing penalties."
  },
  "national-international-current-affairs-2026": {
    "source": {
      "url": "https://www.pib.gov.in/",
      "label": "Press Information Bureau — Official releases",
      "kind": "portal"
    },
    "explanationEn": "For a mixed news digest, group questions by government policy, international relations, science and reports. Date each claim and favour original announcements over recycled summaries.",
    "explanationHi": "मिश्रित समाचारों को नीति, विदेश संबंध, विज्ञान और रिपोर्ट में बाँटें। हर तथ्य के साथ तारीख और प्राथमिक घोषणा देखें।",
    "examTip": "Use spaced revision and independently verify high-impact facts."
  },
  "nato-withdrawal": {
    "source": {
      "url": "https://www.nato.int/",
      "label": "NATO — Official portal and member updates",
      "kind": "portal"
    },
    "explanationEn": "Statements about a possible NATO withdrawal must not be confused with formal withdrawal. Verify membership status and the treaty process separately from political commentary.",
    "explanationHi": "NATO छोड़ने की राजनीतिक चर्चा और औपचारिक सदस्यता समाप्त होना अलग हैं। संधि की प्रक्रिया तथा वास्तविक सदस्यता स्थिति जाँचें।",
    "examTip": "Treat proposals, threats and completed actions as different answers."
  },
  "ncrb-2024": {
    "source": {
      "url": "https://ncrb.gov.in/",
      "label": "National Crime Records Bureau",
      "kind": "portal"
    },
    "explanationEn": "NCRB reports compile reported crime and accidental-death statistics. The data year and publication year can differ; compare rates only when the same definitions and denominators are used.",
    "explanationHi": "NCRB रिपोर्टों में आँकड़ों का वर्ष और प्रकाशन वर्ष अलग हो सकता है। अपराध दर की तुलना समान परिभाषा और आधार पर करें।",
    "examTip": "Differentiate total incidents, rates per population and trend percentages."
  },
  "nepal-flash-flood-2026": {
    "source": {
      "url": "https://www.dhm.gov.np/",
      "label": "Nepal Department of Hydrology and Meteorology",
      "kind": "portal"
    },
    "explanationEn": "For flash floods, differentiate the trigger (intense rain or upstream flow), the affected river basin and the verified impact. Early casualty reports may be revised.",
    "explanationHi": "अचानक बाढ़ में कारण, प्रभावित नदी-घाटी और सत्यापित नुकसान अलग देखें। शुरुआती हताहत आँकड़े बदल सकते हैं।",
    "examTip": "Check event date, location and official situation report date."
  },
  "nfhs-6": {
    "source": {
      "url": "https://mohfw.gov.in/",
      "label": "Ministry of Health and Family Welfare",
      "kind": "portal"
    },
    "explanationEn": "NFHS measures population, health and nutrition indicators using household surveys. Compare NFHS-6 figures with NFHS-5 only for indicators that share definitions and reference populations.",
    "explanationHi": "NFHS घरेलू सर्वेक्षण से स्वास्थ्य और पोषण संकेतक मापता है। NFHS-5 और NFHS-6 की तुलना समान परिभाषा वाले संकेतकों पर करें।",
    "examTip": "Identify survey round, fieldwork period, sample and indicator definition."
  },
  "one-liner-current-affairs-2026": {
    "source": {
      "url": "https://www.pib.gov.in/",
      "label": "Press Information Bureau — Daily releases",
      "kind": "portal"
    },
    "explanationEn": "One-liner facts are revision aids, not source documents. Turn each answer into a mini-note with the issuing body, date and one sentence on its significance.",
    "explanationHi": "वन-लाइनर प्रश्न पुनरावृत्ति के लिए हैं, मूल स्रोत नहीं। उत्तर के साथ संबंधित संस्था, तारीख और महत्व का एक वाक्य जोड़ें।",
    "examTip": "Recheck names, appointments and rankings as they can change."
  },
  "padma-awards-2026": {
    "source": {
      "url": "https://www.padmaawards.gov.in/Document/pdf/notifications/PadmaAwards/PadmaAwards2026.pdf",
      "label": "Ministry of Home Affairs — Padma Awards 2026 list",
      "kind": "direct"
    },
    "explanationEn": "The official 2026 list reports 131 awards: five Padma Vibhushan, thirteen Padma Bhushan and 113 Padma Shri. Remember categories and state/field details directly from the PDF.",
    "explanationHi": "आधिकारिक 2026 सूची में 131 पुरस्कार हैं: पाँच पद्म विभूषण, 13 पद्म भूषण और 113 पद्म श्री। श्रेणी और राज्यों की जानकारी PDF से जाँचें।",
    "examTip": "Check an awardee's state and field rather than guessing from birthplace."
  },
  "persons-in-news-2026": {
    "source": {
      "url": "https://www.pib.gov.in/",
      "label": "Press Information Bureau — Appointments and awards",
      "kind": "portal"
    },
    "explanationEn": "People-in-news questions may concern appointments, honours, resignations or achievements. Always pair a person's name with the role, organization and announcement date.",
    "explanationHi": "समाचार में व्यक्ति से जुड़े प्रश्न नियुक्ति, सम्मान, त्यागपत्र या उपलब्धि पर होते हैं। नाम के साथ पद, संस्था और तारीख जोड़ें।",
    "examTip": "Do not confuse nomination with appointment or award announcement with ceremony."
  },
  "posh-act": {
    "source": {
      "url": "https://wcd.gov.in/",
      "label": "Ministry of Women and Child Development",
      "kind": "portal"
    },
    "explanationEn": "The PoSH Act, 2013 addresses sexual harassment of women at the workplace. Distinguish employer duties, Internal Committees and Local Committees; check statutory timelines in the Act.",
    "explanationHi": "PoSH अधिनियम, 2013 कार्यस्थल पर महिलाओं के यौन उत्पीड़न से संबंधित है। नियोक्ता दायित्व, आंतरिक और स्थानीय समितियों का अंतर समझें।",
    "examTip": "Revise key definitions and statutory mechanisms, not only the full form."
  },
  "project-ganga": {
    "source": {
      "url": "https://up.gov.in/",
      "label": "Government of Uttar Pradesh",
      "kind": "portal"
    },
    "explanationEn": "For Project GANGA, identify whether the described programme concerns digital connectivity, implementing agency and intended beneficiary groups; separate announcements from completed installations.",
    "explanationHi": "प्रोजेक्ट GANGA के लिए डिजिटल कनेक्टिविटी, कार्यान्वयन संस्था और लाभार्थी समूहों को अलग पहचानें। घोषणा और पूरा कार्य अलग हैं।",
    "examTip": "Check original state notification for full form, cost and scope."
  },
  "public-exams-amendment-2026": {
    "source": {
      "url": "https://www.rashtrapatibhavan.gov.in/index.php/central-bills?page=1",
      "label": "President of India — Assented central Bills",
      "kind": "portal"
    },
    "explanationEn": "The Public Examinations (Prevention of Unfair Means) framework concerns unfair practices in specified public examinations. Compare the 2024 parent Act with any 2026 amendments and their commencement.",
    "explanationHi": "सार्वजनिक परीक्षा अनुचित साधन निवारण कानून में 2024 के मूल अधिनियम और 2026 के संशोधन की तुलना करें।",
    "examTip": "Identify covered examinations, prohibited conduct and legal status."
  },
  "ramsar-sites-2026": {
    "source": {
      "url": "https://www.ramsar.org/country-profile/india",
      "label": "Convention on Wetlands — India country profile",
      "kind": "direct"
    },
    "explanationEn": "Ramsar designation recognizes wetlands of international importance. Glaw Lake was designated India's 101st Ramsar Site in August 2026; subsequent additions brought the total to 103 by 15 October 2026. Always date the count.",
    "explanationHi": "रामसर सूची में अंतरराष्ट्रीय महत्व की आर्द्रभूमियाँ शामिल हैं। ग्लॉ झील अगस्त 2026 में भारत का 101वाँ रामसर स्थल बनी; 15 अक्टूबर 2026 तक कुल संख्या 103 हो गई। संख्या के साथ तारीख लिखें।",
    "examTip": "Remember each new wetland's state, site name and designation date."
  },
  "relos": {
    "source": {
      "url": "https://www.mea.gov.in/",
      "label": "Ministry of External Affairs — India–Russia relations",
      "kind": "portal"
    },
    "explanationEn": "RELOS concerns reciprocal logistics support between India and Russia. Differentiate access for logistics and refuelling from establishment of a permanent foreign military base.",
    "explanationHi": "RELOS भारत-रूस के बीच पारस्परिक लॉजिस्टिक सहायता से संबंधित है। सहायता सुविधा और स्थायी विदेशी सैन्य अड्डे में अंतर करें।",
    "examTip": "Review signatories, operational scope and date of entry into force."
  },
  "sarnath-unesco": {
    "source": {
      "url": "https://www.unesco.org/en/articles/ancient-buddhist-site-sarnath-inscribed-unesco-world-heritage-list?hub=80094",
      "label": "UNESCO — Sarnath inscription announcement, July 2026",
      "kind": "direct"
    },
    "explanationEn": "UNESCO announced Sarnath as India's 45th World Heritage Site in July 2026. Distinguish World Heritage inscription from tentative-list status and recall its Buddhist historical importance.",
    "explanationHi": "UNESCO ने जुलाई 2026 में सारनाथ को भारत का 45वाँ विश्व धरोहर स्थल घोषित किया। अस्थायी सूची और अंतिम नामांकन अलग हैं।",
    "examTip": "Remember state, year, site number and significance of the first sermon."
  },
  "scheme-2026": {
    "source": {
      "url": "https://www.pib.gov.in/",
      "label": "Press Information Bureau — Scheme announcements",
      "kind": "portal"
    },
    "explanationEn": "A government scheme should be described using its ministry, objective, beneficiary eligibility, funding and launch date. Avoid mixing a renamed scheme with a newly created programme.",
    "explanationHi": "योजना के लिए मंत्रालय, उद्देश्य, पात्रता, वित्तपोषण और शुरुआत की तारीख अलग रखें। नाम बदलने को नई योजना न मानें।",
    "examTip": "Connect each scheme to the target group and implementation agency."
  },
  "science-technology": {
    "source": {
      "url": "https://dst.gov.in/",
      "label": "Department of Science and Technology",
      "kind": "portal"
    },
    "explanationEn": "Science news may include discoveries, trials, missions or applications. A prototype, clinical trial and launched service are different stages of readiness.",
    "explanationHi": "विज्ञान समाचार में खोज, परीक्षण, मिशन और उपयोग अलग प्रकार के विकास हैं। प्रोटोटाइप, क्लिनिकल ट्रायल और शुरू की गई सेवा समान नहीं हैं।",
    "examTip": "Revise technology, developer, purpose and development stage."
  },
  "sco-summit-2026": {
    "source": {
      "url": "https://eng.sectsco.org/",
      "label": "Shanghai Cooperation Organisation — Official portal",
      "kind": "portal"
    },
    "explanationEn": "The SCO is a Eurasian multilateral organization. Distinguish heads-of-state summits, ministerial meetings and permanent bodies; confirm the exact host and declaration.",
    "explanationHi": "SCO यूरेशियाई बहुपक्षीय संगठन है। राष्ट्राध्यक्ष सम्मेलन, मंत्रिस्तरीय बैठक और स्थायी निकाय अलग हैं; मेजबान और घोषणा देखें।",
    "examTip": "Check member and observer status instead of relying on old membership lists."
  },
  "sd-report-2026": {
    "source": {
      "url": "https://dashboards.sdgindex.org/",
      "label": "SDSN — Sustainable Development Report 2026",
      "kind": "direct"
    },
    "explanationEn": "The Sustainable Development Report's SDG Index is published by SDSN, while the UN also publishes a separate official SDG progress report. Do not combine their rankings or conclusions.",
    "explanationHi": "SDSN की Sustainable Development Report और संयुक्त राष्ट्र की आधिकारिक SDG रिपोर्ट अलग हैं। उनकी रैंकिंग और निष्कर्षों को न मिलाएँ।",
    "examTip": "Record the publisher, methodology, edition and country score together."
  },
  "seat-mission": {
    "source": {
      "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2259959&lang=2&reg=3",
      "label": "PIB — ICMR–ICAR SEHAT launch, 11 May 2026",
      "kind": "direct"
    },
    "explanationEn": "SEHAT means Science Excellence for Health through Agricultural Transformation. ICMR and ICAR jointly lead this agriculture–nutrition–health initiative; the Prime Minister's policy leadership is not the same as the launch-event speakers.",
    "explanationHi": "SEHAT का अर्थ Science Excellence for Health through Agricultural Transformation है। ICMR और ICAR की संयुक्त पहल में नीति नेतृत्व और लॉन्च कार्यक्रम के मुख्य वक्ताओं को अलग समझें।",
    "examTip": "Remember full form, implementing councils and public-health goal."
  },
  "semiconductor-roadmap": {
    "source": {
      "url": "https://ism.gov.in/",
      "label": "India Semiconductor Mission — Official portal",
      "kind": "portal"
    },
    "explanationEn": "Semiconductor policy combines fabrication, assembly, testing, design and supply-chain skills. A proposed fabrication facility is not equivalent to a functioning commercial plant.",
    "explanationHi": "सेमीकंडक्टर नीति में फैब्रिकेशन, असेंबली, टेस्टिंग, डिजाइन और कौशल शामिल हैं। प्रस्तावित संयंत्र और चालू संयंत्र अलग हैं।",
    "examTip": "Distinguish approved projects, investment pledges and production milestones."
  },
  "somnath-amrut-parv": {
    "source": {
      "url": "https://somnath.org/",
      "label": "Shree Somnath Trust — Temple information",
      "kind": "portal"
    },
    "explanationEn": "Somnath-related commemorations connect the temple's reconstruction history with cultural heritage. Check the event's stated anniversary against the reconstruction date.",
    "explanationHi": "सोमनाथ से जुड़े स्मरण कार्यक्रम मंदिर के पुनर्निर्माण और सांस्कृतिक इतिहास से जुड़े हैं। वर्षगाँठ के आँकड़े पुनर्निर्माण तिथि से मिलाएँ।",
    "examTip": "Keep ancient historical references separate from post-independence reconstruction."
  },
  "sports": {
    "source": {
      "url": "https://yas.nic.in/",
      "label": "Ministry of Youth Affairs and Sports",
      "kind": "portal"
    },
    "explanationEn": "Sports Current Affairs should be organized by tournament, host, winner, record and governing body. Rankings and medals are time-specific and should cite the official event table.",
    "explanationHi": "खेल समसामयिकी में प्रतियोगिता, मेजबान, विजेता, रिकॉर्ड और खेल संस्था अलग याद करें। रैंकिंग और पदक तालिका समय-विशिष्ट हैं।",
    "examTip": "Distinguish individual records, team titles and medal totals."
  },
  "srs-2024": {
    "source": {
      "url": "https://censusindia.gov.in/",
      "label": "Office of Registrar General & Census Commissioner",
      "kind": "portal"
    },
    "explanationEn": "The Sample Registration System estimates births, deaths and related demographic rates. Differentiate the statistical reference year from the report release date.",
    "explanationHi": "नमूना पंजीकरण प्रणाली से जन्म, मृत्यु और अन्य जनसांख्यिकीय दरों का अनुमान मिलता है। आँकड़ों का वर्ष और रिपोर्ट जारी होने की तारीख अलग रखें।",
    "examTip": "Distinguish birth rate, death rate, infant mortality and total fertility rate."
  },
  "super-el-nino": {
    "source": {
      "url": "https://www.climate.gov/enso",
      "label": "NOAA Climate.gov — ENSO background",
      "kind": "portal"
    },
    "explanationEn": "El Niño is a warm phase of the El Niño–Southern Oscillation. “Super El Niño” is a descriptive expression rather than a universally fixed official category; verify forecasts from scientific agencies.",
    "explanationHi": "एल नीनो ENSO की गर्म अवस्था है। “सुपर एल नीनो” का कोई एक सर्वमान्य आधिकारिक वर्गीकरण नहीं है; पूर्वानुमान वैज्ञानिक संस्थाओं से देखें।",
    "examTip": "Separate observed sea-surface temperatures from seasonal predictions."
  },
  "tribunals-reforms-bill-2026": {
    "source": {
      "url": "https://sansad.in/ls/legislation/bills",
      "label": "Digital Sansad — Bill status search",
      "kind": "portal"
    },
    "explanationEn": "A Tribunals Reforms Bill describes proposed institutional changes. Do not treat a proposed National Tribunals Commission as functioning until the legislative and commencement stages are verified.",
    "explanationHi": "ट्रिब्यूनल सुधार विधेयक प्रस्तावित संस्थागत बदलाव दर्शाता है। किसी प्रस्तावित आयोग को कानून लागू होने से पहले कार्यरत न मानें।",
    "examTip": "Identify existing law, proposed changes and current Bill status."
  },
  "uae-exit-opec": {
    "source": {
      "url": "https://www.wam.ae/en/article/bzxzuh7-uae-announces-decision-exit-opec-opec%2B",
      "label": "Emirates News Agency — UAE withdrawal statement (28 April 2026)",
      "kind": "direct"
    },
    "explanationEn": "The UAE's official announcement dated 28 April 2026 stated that its withdrawal from OPEC and OPEC+ would take effect on 1 May 2026. Distinguish OPEC membership from the wider OPEC+ production arrangement.",
    "explanationHi": "UAE ने 28 अप्रैल 2026 को घोषणा की कि OPEC और OPEC+ से बाहर होना 1 मई से प्रभावी होगा। OPEC सदस्यता और OPEC+ व्यवस्था अलग हैं।",
    "examTip": "Memorize announcement date, effective date and the reason given by the UAE."
  },
  "unpaid-domestic-labour": {
    "source": {
      "url": "https://www.ilo.org/topics-and-sectors/care-economy",
      "label": "International Labour Organization — Care economy",
      "kind": "direct"
    },
    "explanationEn": "Unpaid care and domestic work has economic value even where national accounts do not record a direct wage. Valuation estimates depend on the method and assumptions.",
    "explanationHi": "बिना वेतन वाले घरेलू और देखभाल कार्य का आर्थिक महत्व है। उसके मूल्यांकन के नतीजे प्रयुक्त पद्धति और मान्यताओं पर निर्भर करते हैं।",
    "examTip": "Separate time-use data, replacement-cost estimates and GDP accounting."
  },
  "vb-ram-g": {
    "source": {
      "url": "https://rural.gov.in/",
      "label": "Ministry of Rural Development — Rural employment policies",
      "kind": "portal"
    },
    "explanationEn": "For an employment-guarantee scheme, compare statutory entitlements, funding responsibility and implementation mechanisms with its predecessor. Scheme names alone do not establish legal continuity.",
    "explanationHi": "रोजगार गारंटी योजना में कानूनी अधिकार, वित्तपोषण और कार्यान्वयन को पुरानी व्यवस्था से तुलना करें। केवल नाम से कानूनी निरंतरता सिद्ध नहीं होती।",
    "examTip": "Check the official Act or notification before memorizing entitlements."
  }
}
