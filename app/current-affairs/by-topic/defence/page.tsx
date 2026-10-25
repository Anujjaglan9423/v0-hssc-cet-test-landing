"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ArrowLeft, BookOpen, Calendar, ChevronRight, Languages,
    Landmark, Search, Sparkles, Target, X
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface SourceBlock { page: number; text: string }
interface DefenceTopic {
    slug: string
    title: string
    titleHi: string
    pages: string
    overviewEn: string
    overviewHi: string
    hindiFacts: string[]
    blocks: SourceBlock[]
}

// Full readable English source facts + carefully rewritten Hindi study notes.
// Broken PDF Hindi text was excluded instead of publishing corrupted glyphs.
const topics: DefenceTopic[] = [
  {
    "slug": "netra-aewc-system",
    "title": "Netra AEW&C System",
    "titleHi": "नेत्र एईडब्ल्यू एंड सी प्रणाली",
    "pages": "171",
    "overviewEn": "Netra AEW&C System — comprehensive source facts and exam notes.",
    "overviewHi": "नेत्र भारत की स्वदेशी हवाई निगरानी और युद्ध-प्रबंधन प्रणाली है।",
    "hindiFacts": [
      "नेत्र भारत की स्वदेशी हवाई निगरानी और युद्ध-प्रबंधन प्रणाली है।",
      "इसका विकास रक्षा अनुसंधान एवं विकास संगठन (DRDO) के अंतर्गत सेंटर फॉर एयरबोर्न सिस्टम्स (CABS) ने किया।",
      "यह वायुसेना को हवाई लक्ष्यों की पहचान, निगरानी और अभियान समन्वय में मदद करती है।"
    ],
    "blocks": [
      {
        "page": 171,
        "text": "Netra AEW&C System /"
      },
      {
        "page": 171,
        "text": "What it is /"
      },
      {
        "page": 171,
        "text": "• Netra is India’s first indigenously developed"
      },
      {
        "page": 171,
        "text": "airborne surveillance and battle-management\nsystem."
      },
      {
        "page": 171,
        "text": "Exam Facts /"
      },
      {
        "page": 171,
        "text": "• Developed by: Centre for Airborne Systems"
      },
      {
        "page": 171,
        "text": "(CABS) under DRDO."
      },
      {
        "page": 171,
        "text": "• Global Capability /"
      },
      {
        "page": 171,
        "text": "country globally, following the United States,\nRussia, Israel, and China, to build an indigenous\nAEW&C capability."
      },
      {
        "page": 171,
        "text": "• The system is integrated on the Brazilian"
      },
      {
        "page": 171,
        "text": "Embraer EMB-145I aircraft platform."
      },
      {
        "page": 171,
        "text": "(Embraer\nEMB-145I\nAircraft\nPlatform)"
      },
      {
        "page": 171,
        "text": "• Core Function /"
      },
      {
        "page": 171,
        "text": "to detect, track, identify, and monitor both\nairborne and maritime targets in real-time."
      }
    ]
  },
  {
    "slug": "vijay-roadmap",
    "title": "VIJAY Roadmap",
    "titleHi": "विजय रोडमैप",
    "pages": "171",
    "overviewEn": "VIJAY Roadmap — comprehensive source facts and exam notes.",
    "overviewHi": "विजय रोडमैप रक्षा तैयारी, नवाचार, तीनों सेनाओं में संयुक्तता और स्वदेशी क्षमता विकसित करने से जुड़ा है।",
    "hindiFacts": [
      "विजय रोडमैप रक्षा तैयारी, नवाचार, तीनों सेनाओं में संयुक्तता और स्वदेशी क्षमता विकसित करने से जुड़ा है।",
      "इसका जोर सैनिक-केंद्रित दृष्टिकोण, तकनीकी आधुनिकीकरण और अभियानों में एकीकरण पर है।"
    ],
    "blocks": [
      {
        "page": 171,
        "text": "VIJAY Roadmap / \""
      },
      {
        "page": 171,
        "text": "Why in News /"
      },
      {
        "page": 171,
        "text": "• Chief of the Army Staff General Dhiraj Seth"
      },
      {
        "page": 171,
        "text": "assumed charge as the 31st Chief of the Army"
      },
      {
        "page": 171,
        "text": "Staff and unveiled the \"VIJAY\" roadmap for the\nIndian Army's modernization."
      },
      {
        "page": 171,
        "text": "Exam Facts /"
      },
      {
        "page": 171,
        "text": "• The roadmap is aligned with the Ministry of"
      },
      {
        "page": 171,
        "text": "Defence’s Decade of Transformation (2023–\n2032)."
      },
      {
        "page": 171,
        "text": "Transformation), 2023–2032"
      },
      {
        "page": 171,
        "text": "• Objective /"
      },
      {
        "page": 171,
        "text": "technology-enabled, self-reliant (Aatmanirbhar),\nand multi-domain capable force."
      },
      {
        "page": 171,
        "text": "VIJAY framework/"
      },
      {
        "page": 171,
        "text": "o V: Vigilance and Readiness /"
      },
      {
        "page": 171,
        "text": "o I: Innovation and Transformation /"
      },
      {
        "page": 171,
        "text": "o J: Jointness and Integration /"
      },
      {
        "page": 171,
        "text": "o A: Atmanirbharta (Self-Reliance) and"
      },
      {
        "page": 171,
        "text": "Capability Development /"
      },
      {
        "page": 171,
        "text": "o Y: Yodha First (Soldier First) /"
      }
    ]
  },
  {
    "slug": "raksha-defence-diplomacy",
    "title": "RAKSHA Defence Diplomacy Roadmap",
    "titleHi": "रक्षा कूटनीति रोडमैप",
    "pages": "171–172",
    "overviewEn": "RAKSHA Defence Diplomacy Roadmap — comprehensive source facts and exam notes.",
    "overviewHi": "रक्षा मंत्री राजनाथ सिंह ने सितंबर 2026 में रक्षा कूटनीति के लिए दस वर्षीय 'रक्षा' रणनीतिक दस्तावेज जारी किया।",
    "hindiFacts": [
      "रक्षा मंत्री राजनाथ सिंह ने सितंबर 2026 में रक्षा कूटनीति के लिए दस वर्षीय 'रक्षा' रणनीतिक दस्तावेज जारी किया।",
      "इसके चार प्रमुख क्षेत्र रणनीतिक साझेदारी, सैन्य क्षमता निर्माण, स्वदेशी रक्षा निर्यात और समुद्री सुरक्षा हैं।",
      "इसका उद्देश्य राष्ट्रीय सुरक्षा हितों को सक्रिय अंतरराष्ट्रीय सहयोग से जोड़ना है।"
    ],
    "blocks": [
      {
        "page": 171,
        "text": "'RAKSHA' Defence Diplomacy Document / '"
      },
      {
        "page": 171,
        "text": "(RAKSHA)"
      },
      {
        "page": 171,
        "text": "Why in News /"
      },
      {
        "page": 171,
        "text": "• Defence Minister Rajnath Singh released the"
      },
      {
        "page": 172,
        "text": "strategic roadmap for India's defence diplomacy\nand global partnerships."
      },
      {
        "page": 172,
        "text": "Exam Facts /"
      },
      {
        "page": 172,
        "text": "• Objective /"
      },
      {
        "page": 172,
        "text": "strengthen India's strategic engagement by\naligning its national security objectives with\nproactive international cooperation, fostering\nlong-term stability and mutual growth."
      },
      {
        "page": 172,
        "text": "• Key Pillars /"
      },
      {
        "page": 172,
        "text": "is built on four central pillars: strengthening\nStrategic Partnerships, enhancing military\nCapacity Building, boosting Indigenous Exports,\nand ensuring Maritime Security."
      }
    ]
  },
  {
    "slug": "prahaar-counter-terrorism",
    "title": "PRAHAAR Counter-Terrorism Policy",
    "titleHi": "प्रहार राष्ट्रीय आतंकवाद-रोधी नीति",
    "pages": "172–173",
    "overviewEn": "PRAHAAR Counter-Terrorism Policy — comprehensive source facts and exam notes.",
    "overviewHi": "प्रहार को गृह मंत्रालय ने फरवरी 2026 में राष्ट्रीय आतंकवाद-रोधी नीति एवं रणनीति के रूप में प्रस्तुत किया।",
    "hindiFacts": [
      "प्रहार को गृह मंत्रालय ने फरवरी 2026 में राष्ट्रीय आतंकवाद-रोधी नीति एवं रणनीति के रूप में प्रस्तुत किया।",
      "इसमें आतंकवाद की रोकथाम, त्वरित प्रतिक्रिया, सरकारी क्षमताओं का समन्वय, मानवाधिकार, कट्टरपंथ की परिस्थितियों में कमी, अंतरराष्ट्रीय सहयोग तथा पुनर्प्राप्ति जैसे सात स्तंभ बताए गए हैं।",
      "नीति समग्र सरकार और समग्र समाज के दृष्टिकोण पर आधारित है।"
    ],
    "blocks": [
      {
        "page": 172,
        "text": "PRAHAAR – National Counter-Terrorism Policy"
      },
      {
        "page": 172,
        "text": "& Strategy /"
      },
      {
        "page": 172,
        "text": "Why in News /"
      },
      {
        "page": 172,
        "text": "• Union Home Minister and Minister of"
      },
      {
        "page": 172,
        "text": "Cooperation Amit Shah inaugurated the\nConference on ‘PRAHAAR – CT Policy and\nStrategy’ in New Delhi."
      },
      {
        "page": 172,
        "text": "‘PRAHAAR – CT Policy and Strategy’"
      },
      {
        "page": 172,
        "text": "Exam Facts /"
      },
      {
        "page": 172,
        "text": "• PRAHAAR was formally unveiled by the"
      },
      {
        "page": 172,
        "text": "Ministry of Home Affairs on 23 February 2026."
      },
      {
        "page": 172,
        "text": "• PRAHAAR"
      },
      {
        "page": 172,
        "text": "• What it is /"
      },
      {
        "page": 172,
        "text": "comprehensive\nNational\nCounter-Terrorism\nPolicy & Strategy, built around seven pillars to\nstrengthen prevention, response and recovery\nthrough whole-of-government and whole-of-\nsociety approaches."
      },
      {
        "page": 172,
        "text": "• PRAHAAR"
      },
      {
        "page": 172,
        "text": "• Seven Pillars /\n1. P – Prevention: Prevention of terror attacks to"
      },
      {
        "page": 172,
        "text": "protect Indian citizens and interests.\n2. R – Responses: Swift and proportionate"
      },
      {
        "page": 172,
        "text": "responses to the threat posed.\n3. A – Aggregating Internal Capacities:"
      },
      {
        "page": 172,
        "text": "Achieving synergy through a whole-of-\ngovernment approach.\nWhole-of-Government\n4. H – Human Rights: Human rights and Rule of"
      },
      {
        "page": 172,
        "text": "Law-based processes for threat mitigation.\n5. A – Attenuating Conditions for Terrorism:"
      },
      {
        "page": 172,
        "text": "Reducing conditions conducive to terrorism,\nincluding radicalisation."
      },
      {
        "page": 173,
        "text": "6. A – Aligning International Efforts: Aligning and"
      },
      {
        "page": 173,
        "text": "shaping international counter-terrorism efforts.\n7. R – Recovery & Resilience: Recovery and"
      },
      {
        "page": 173,
        "text": "resilience through a whole-of-society approach.\nWhole-of-Society"
      }
    ]
  },
  {
    "slug": "astra-mk1-missile",
    "title": "Astra Mk-1 Missile",
    "titleHi": "अस्त्र मार्क-1 मिसाइल",
    "pages": "173",
    "overviewEn": "Astra Mk-1 Missile — comprehensive source facts and exam notes.",
    "overviewHi": "अस्त्र मार्क-1 स्वदेशी बियॉन्ड-विजुअल-रेंज एयर-टू-एयर मिसाइल है।",
    "hindiFacts": [
      "अस्त्र मार्क-1 स्वदेशी बियॉन्ड-विजुअल-रेंज एयर-टू-एयर मिसाइल है।",
      "स्रोत के अनुसार भारत और इंडोनेशिया ने इसकी आपूर्ति संबंधी रक्षा समझौता किया।",
      "इसका विकास DRDO तथा भारत डायनेमिक्स लिमिटेड के सहयोग से हुआ; स्रोत में लगभग 80–110 किमी मारक दूरी और मैक 4.5 गति दी गई है।"
    ],
    "blocks": [
      {
        "page": 173,
        "text": "Astra Mk 1 /"
      },
      {
        "page": 173,
        "text": "Why in News /"
      },
      {
        "page": 173,
        "text": "• India and Indonesia signed a landmark defense"
      },
      {
        "page": 173,
        "text": "deal for the supply of the indigenous Astra Mk 1\nduring a bilateral summit in Jakarta."
      },
      {
        "page": 173,
        "text": "Exam Facts /"
      },
      {
        "page": 173,
        "text": "• Astra Mk-1 is India's Beyond-Visual-Range Air-"
      },
      {
        "page": 173,
        "text": "to-Air Missile (BVRAAM) designed to engage\nenemy aircraft beyond visual range."
      },
      {
        "page": 173,
        "text": "Missile - BVRAAM)"
      },
      {
        "page": 173,
        "text": "• Developed By /"
      },
      {
        "page": 173,
        "text": "and Development Organisation (DRDO), along\nwith Bharat Dynamics Limited (BDL)."
      },
      {
        "page": 173,
        "text": "• Range & Speed /"
      },
      {
        "page": 173,
        "text": "operational range of 80–110 km and a top speed\nof Mach 4.5."
      }
    ]
  },
  {
    "slug": "ins-nipun",
    "title": "INS Nipun",
    "titleHi": "आईएनएस निपुण",
    "pages": "173",
    "overviewEn": "INS Nipun — comprehensive source facts and exam notes.",
    "overviewHi": "आईएनएस निपुण, आईएनएस निस्तार के बाद निस्तार श्रेणी का दूसरा डाइविंग सपोर्ट वेसल है।",
    "hindiFacts": [
      "आईएनएस निपुण, आईएनएस निस्तार के बाद निस्तार श्रेणी का दूसरा डाइविंग सपोर्ट वेसल है।",
      "इसका निर्माण हिंदुस्तान शिपयार्ड लिमिटेड ने किया और इसे विशाखापत्तनम में नौसेना को सौंपा गया।",
      "स्रोत के अनुसार इसमें लगभग 75 प्रतिशत स्वदेशी सामग्री का उपयोग हुआ है।"
    ],
    "blocks": [
      {
        "page": 173,
        "text": "INS Nipun / INS"
      },
      {
        "page": 173,
        "text": "Why in News /"
      },
      {
        "page": 173,
        "text": "⚫ INS Nipun was recently delivered to the Indian"
      },
      {
        "page": 173,
        "text": "Navy at Visakhapatnam."
      },
      {
        "page": 173,
        "text": "⚫ It is the second Nistar-class Diving Support"
      },
      {
        "page": 173,
        "text": "Vessel (DSV) after INS Nistar."
      },
      {
        "page": 173,
        "text": "(DSV)\nExam Facts /"
      },
      {
        "page": 173,
        "text": "⚫ Built By /"
      },
      {
        "page": 173,
        "text": "Limited (HSL). /"
      },
      {
        "page": 173,
        "text": "⚫ Indigenous Content /"
      },
      {
        "page": 173,
        "text": "approximately\n75%\ndomestic\ncontent,\nsupporting the Aatmanirbhar Bharat initiative."
      }
    ]
  },
  {
    "slug": "ins-sanshodhak",
    "title": "INS Sanshodhak",
    "titleHi": "आईएनएस संशोधक",
    "pages": "173–174",
    "overviewEn": "INS Sanshodhak — comprehensive source facts and exam notes.",
    "overviewHi": "आईएनएस संशोधक बड़े सर्वेक्षण पोत (SVL) परियोजना का चौथा और अंतिम जहाज है।",
    "hindiFacts": [
      "आईएनएस संशोधक बड़े सर्वेक्षण पोत (SVL) परियोजना का चौथा और अंतिम जहाज है।",
      "इसे गार्डन रीच शिपबिल्डर्स एंड इंजीनियर्स, कोलकाता ने बनाया।",
      "यह तटीय तथा गहरे समुद्र के हाइड्रोग्राफिक सर्वेक्षण और नौवहन मार्गों की पहचान में उपयोगी है।"
    ],
    "blocks": [
      {
        "page": 173,
        "text": "INS Sanshodhak / INS"
      },
      {
        "page": 173,
        "text": "Why in News /"
      },
      {
        "page": 173,
        "text": "• INS Sanshodhak, the fourth and final ship of the"
      },
      {
        "page": 173,
        "text": "Survey Vessel (Large) [SVL] project, was\ncommissioned into the Indian Navy in June 2026\nat Kolkata."
      },
      {
        "page": 173,
        "text": "• The four SVL ships are INS Sandhayak, INS"
      },
      {
        "page": 173,
        "text": "Nirdeshak, INS Ikshak and INS Sanshodhak."
      },
      {
        "page": 173,
        "text": "Exam Facts /"
      },
      {
        "page": 174,
        "text": "based Garden Reach Shipbuilders and\nEngineers (GRSE)."
      },
      {
        "page": 174,
        "text": "• Role /"
      },
      {
        "page": 174,
        "text": "and\ndeep-water\nhydrographic\nsurveys,\nincluding surveys of port/harbour approaches and\ndetermination of navigational channels and\nroutes."
      }
    ]
  },
  {
    "slug": "ins-malvan",
    "title": "INS Malvan",
    "titleHi": "आईएनएस मालवन",
    "pages": "174",
    "overviewEn": "INS Malvan — comprehensive source facts and exam notes.",
    "overviewHi": "आईएनएस मालवन माहे श्रेणी का पनडुब्बी-रोधी उथले जल का युद्धपोत है।",
    "hindiFacts": [
      "आईएनएस मालवन माहे श्रेणी का पनडुब्बी-रोधी उथले जल का युद्धपोत है।",
      "स्रोत के अनुसार यह इस श्रेणी का दूसरा जहाज है और इसे कोचीन शिपयार्ड लिमिटेड ने बनाया।",
      "इसका उपयोग तटीय जल में पानी के भीतर निगरानी और पनडुब्बी-रोधी अभियानों के लिए होता है।"
    ],
    "blocks": [
      {
        "page": 174,
        "text": "INS Malvan / INS"
      },
      {
        "page": 174,
        "text": "Why in News /"
      },
      {
        "page": 174,
        "text": "• INS Malvan, the second indigenously designed"
      },
      {
        "page": 174,
        "text": "and built Mahe-class Anti-Submarine Warfare\nShallow Water Craft (ASW-SWC), was\ncommissioned into the Indian Navy in July 2026."
      },
      {
        "page": 174,
        "text": "Exam Facts /"
      },
      {
        "page": 174,
        "text": "• Builder /"
      },
      {
        "page": 174,
        "text": "(CSL) /"
      },
      {
        "page": 174,
        "text": "• Role /"
      },
      {
        "page": 174,
        "text": "underwater surveillance and anti-submarine\noperations in coastal waters."
      }
    ]
  },
  {
    "slug": "ins-aridaman",
    "title": "INS Aridaman",
    "titleHi": "आईएनएस अरिदमन",
    "pages": "174",
    "overviewEn": "INS Aridaman — comprehensive source facts and exam notes.",
    "overviewHi": "आईएनएस अरिदमन भारत की अरिहंत श्रेणी की परमाणु-संचालित बैलिस्टिक मिसाइल पनडुब्बी (SSBN) है।",
    "hindiFacts": [
      "आईएनएस अरिदमन भारत की अरिहंत श्रेणी की परमाणु-संचालित बैलिस्टिक मिसाइल पनडुब्बी (SSBN) है।",
      "स्रोत इसे आईएनएस अरिहंत और आईएनएस अरिघात के बाद तीसरी अरिहंत श्रेणी की SSBN बताता है।"
    ],
    "blocks": [
      {
        "page": 174,
        "text": "INS Aridaman / INS"
      },
      {
        "page": 174,
        "text": "Why in News /"
      },
      {
        "page": 174,
        "text": "• India inducted its third indigenous Arihant-class"
      },
      {
        "page": 174,
        "text": "(SSBN), INS"
      },
      {
        "page": 174,
        "text": "Exam Facts /"
      },
      {
        "page": 174,
        "text": "• Type /"
      },
      {
        "page": 174,
        "text": "Submersible Ballistic Nuclear) — a nuclear-\npowered ballistic missile submarine. Meaning it\nis a nuclear-powered submarine designed\nspecifically to carry nuclear ballistic missiles."
      },
      {
        "page": 174,
        "text": "Nuclear) —"
      },
      {
        "page": 174,
        "text": "• Position in Class /"
      },
      {
        "page": 174,
        "text": "the third Arihant-class SSBN, after INS Arihant\nand INS Arighaat."
      },
      {
        "page": 174,
        "text": "• INS"
      }
    ]
  },
  {
    "slug": "ins-agray",
    "title": "INS Agray",
    "titleHi": "आईएनएस अग्रय",
    "pages": "174–175",
    "overviewEn": "INS Agray — comprehensive source facts and exam notes.",
    "overviewHi": "आईएनएस अग्रय अरनाला श्रेणी का पनडुब्बी-रोधी उथले जल का युद्धपोत है।",
    "hindiFacts": [
      "आईएनएस अग्रय अरनाला श्रेणी का पनडुब्बी-रोधी उथले जल का युद्धपोत है।",
      "इसका निर्माण कोलकाता स्थित गार्डन रीच शिपबिल्डर्स एंड इंजीनियर्स ने किया।",
      "यह तटीय सुरक्षा, पानी के भीतर खतरों की पहचान और पनडुब्बी-रोधी अभियानों के लिए बनाया गया है।"
    ],
    "blocks": [
      {
        "page": 174,
        "text": "INS Agray / INS"
      },
      {
        "page": 174,
        "text": "Why in News /"
      },
      {
        "page": 174,
        "text": "• INS Agray, the fourth Arnala-class Anti-"
      },
      {
        "page": 174,
        "text": "Submarine Warfare Shallow Water Craft (ASW\nSWC), was commissioned into the Indian Navy\non 21 June 2026 at Kolkata."
      },
      {
        "page": 174,
        "text": "Exam Facts /"
      },
      {
        "page": 174,
        "text": "• Builder /"
      },
      {
        "page": 174,
        "text": "Shipbuilders & Engineers (GRSE), Kolkata."
      },
      {
        "page": 174,
        "text": "(GRSE),"
      },
      {
        "page": 175,
        "text": "waters, including detection and engagement of\nunderwater threats and support for coastal\nsurveillance."
      },
      {
        "page": 175,
        "text": "• INS Agray was commissioned alongside INS"
      },
      {
        "page": 175,
        "text": "Dunagiri (a Project 17A stealth frigate( and INS\nSanshodhak (a Survey Vessel (Large)(, at a tri-\ncommissioning ceremony in Kolkata."
      },
      {
        "page": 175,
        "text": "• INS"
      }
    ]
  },
  {
    "slug": "ins-taragiri-mahendragiri",
    "title": "INS Taragiri & INS Mahendragiri",
    "titleHi": "आईएनएस तारागिरी और महेंद्रगिरी",
    "pages": "175",
    "overviewEn": "INS Taragiri & INS Mahendragiri — comprehensive source facts and exam notes.",
    "overviewHi": "आईएनएस तारागिरी और आईएनएस महेंद्रगिरी प्रोजेक्ट 17A के नीलगिरि श्रेणी स्टेल्थ फ्रिगेट हैं।",
    "hindiFacts": [
      "आईएनएस तारागिरी और आईएनएस महेंद्रगिरी प्रोजेक्ट 17A के नीलगिरि श्रेणी स्टेल्थ फ्रिगेट हैं।",
      "स्रोत के अनुसार तारागिरी चौथा और महेंद्रगिरी छठा नीलगिरि श्रेणी फ्रिगेट है।"
    ],
    "blocks": [
      {
        "page": 175,
        "text": "INS Taragiri & INS Mahendragiri / INS"
      },
      {
        "page": 175,
        "text": "INS"
      },
      {
        "page": 175,
        "text": "Why in News /"
      },
      {
        "page": 175,
        "text": "• INS Taragiri and INS Mahendragiri,"
      },
      {
        "page": 175,
        "text": "indigenous Nilgiri-class stealth frigates built\nunder Project 17A, were commissioned into\nthe Indian Navy in April 2026 and July 2026\nrespectively at Visakhapatnam."
      },
      {
        "page": 175,
        "text": "• Project 17A"
      },
      {
        "page": 175,
        "text": "Manufacturer"
      },
      {
        "page": 175,
        "text": "Ship /\nPosition\nunder\nProject 17A /"
      },
      {
        "page": 175,
        "text": "4th\nNilgiri-\nclass frigate /"
      },
      {
        "page": 175,
        "text": "INS Taragiri /\nINS"
      },
      {
        "page": 175,
        "text": "Mazagon\nDock\nShipbuilders Ltd.\n(MDL), Mumbai"
      },
      {
        "page": 175,
        "text": "6th\nNilgiri-\nclass frigate /"
      },
      {
        "page": 175,
        "text": "INS\nMahendragiri /\nINS"
      },
      {
        "page": 175,
        "text": "Mazagon\nDock\nShipbuilders Ltd.\n(MDL), Mumbai"
      },
      {
        "page": 175,
        "text": "Exam Facts /"
      },
      {
        "page": 175,
        "text": "• Project 17A (Nilgiri-class) /"
      },
      {
        "page": 175,
        "text": "A flagship naval program to\nbuild a series of seven technologically advanced\nstealth frigates equipped with upgraded weapons,\nsensors, and platform management systems."
      },
      {
        "page": 175,
        "text": "frigates)"
      },
      {
        "page": 175,
        "text": "• Of these seven frigates, four (Nilgiri, Udaygiri,"
      },
      {
        "page": 175,
        "text": "Taragiri, and Mahendragiri) are being constructed\nby Mazagon Dock Shipbuilders Limited (MDL),\nMumbai, and three (Himgiri, Dunagiri, and\nVindhyagiri) by Garden Reach Shipbuilders &\nEngineers Limited, Kolkata."
      },
      {
        "page": 175,
        "text": "(MDL),"
      }
    ]
  },
  {
    "slug": "kusha-missile-system",
    "title": "Kusha Missile System",
    "titleHi": "कुशा मिसाइल प्रणाली",
    "pages": "175–176",
    "overviewEn": "Kusha Missile System — comprehensive source facts and exam notes.",
    "overviewHi": "कुशा भारत की स्वदेशी लंबी दूरी की वायु रक्षा मिसाइल प्रणाली की परियोजना है।",
    "hindiFacts": [
      "कुशा भारत की स्वदेशी लंबी दूरी की वायु रक्षा मिसाइल प्रणाली की परियोजना है।",
      "इसका उद्देश्य लड़ाकू विमानों, मिसाइलों और मानवरहित हवाई वाहनों से उत्पन्न खतरे का सामना करना है।",
      "स्रोत में इसकी तुलना रूस की S-400 वायु रक्षा प्रणाली से की गई है।"
    ],
    "blocks": [
      {
        "page": 175,
        "text": "Kusha Missile System /"
      },
      {
        "page": 175,
        "text": "Why in News /"
      },
      {
        "page": 175,
        "text": "• India successfully tested the ‘Kusha’ Long-Range"
      },
      {
        "page": 175,
        "text": "Surface-to-Air\nMissile\n(LR-SAM),\nan\nindigenous air defense system developed by the\nDRDO (1958(, from APJ Abdul Kalam Island,\nOdisha."
      },
      {
        "page": 175,
        "text": "Range Surface-to-Air Missile - LR-SAM)"
      },
      {
        "page": 176,
        "text": "Exam Facts /"
      },
      {
        "page": 176,
        "text": "• Targets /"
      },
      {
        "page": 176,
        "text": "Vehicles - UAVs)"
      },
      {
        "page": 176,
        "text": "• It often compared to systems like the Russian S-"
      },
      {
        "page": 176,
        "text": "400 Triumf. /"
      }
    ]
  },
  {
    "slug": "india-us-navy-eod-exercise",
    "title": "Indian Navy–US Navy EOD Exercise 2026",
    "titleHi": "भारत-अमेरिका नौसेना ईओडी अभ्यास 2026",
    "pages": "176",
    "overviewEn": "Indian Navy–US Navy EOD Exercise 2026 — comprehensive source facts and exam notes.",
    "overviewHi": "भारत और अमेरिका की नौसेनाओं के विस्फोटक आयुध निस्तारण (EOD) अभ्यास का आठवाँ संस्करण कोच्चि, केरल में संपन्न हुआ।",
    "hindiFacts": [
      "भारत और अमेरिका की नौसेनाओं के विस्फोटक आयुध निस्तारण (EOD) अभ्यास का आठवाँ संस्करण कोच्चि, केरल में संपन्न हुआ।",
      "यह अभ्यास विस्फोटक खतरों की पहचान, निस्तारण और दोनों नौसेनाओं के बीच सहयोग पर केंद्रित है।"
    ],
    "blocks": [
      {
        "page": 176,
        "text": "Indian Navy–US Navy EOD Exercise 2026 /"
      },
      {
        "page": 176,
        "text": "Why in News /"
      },
      {
        "page": 176,
        "text": "• The 8th edition of the Indian–US Navy"
      },
      {
        "page": 176,
        "text": "Explosive Ordnance Disposal (EOD) Exercise\n2026 concluded at Kochi, Kerala."
      },
      {
        "page": 176,
        "text": "(Explosive Ordnance Disposal (EOD)\n2026"
      },
      {
        "page": 176,
        "text": "Exam Facts /"
      },
      {
        "page": 176,
        "text": "• Key Focus /"
      },
      {
        "page": 176,
        "text": "underwater\nsalvage\n(recovering\nobjects,\nequipment or wreckage from underwater), bomb\ndisposal, and neutralisation of explosive\nordnance."
      },
      {
        "page": 176,
        "text": "Value Addition/"
      },
      {
        "page": 176,
        "text": "Other Major India–US Bilateral Exercises:\nYudh Abhyas (Army), Vajra Prahar (Special\nForces), Tiger Triumph (Tri-Services), Cope\nIndia (Air Force), and Malabar (Multilateral\nNaval)."
      }
    ]
  },
  {
    "slug": "fgm-148-javelin",
    "title": "FGM-148 Javelin ATGM",
    "titleHi": "एफजीएम-148 जैवलिन एंटी-टैंक मिसाइल",
    "pages": "176",
    "overviewEn": "FGM-148 Javelin ATGM — comprehensive source facts and exam notes.",
    "overviewHi": "FGM-148 जैवलिन अमेरिका की एंटी-टैंक गाइडेड मिसाइल प्रणाली है।",
    "hindiFacts": [
      "FGM-148 जैवलिन अमेरिका की एंटी-टैंक गाइडेड मिसाइल प्रणाली है।",
      "अध्याय में भारत द्वारा इस प्रणाली की खरीद के लिए अमेरिका के साथ लेटर ऑफ ऑफर एंड एक्सेप्टेंस पर हस्ताक्षर किए जाने का उल्लेख है।"
    ],
    "blocks": [
      {
        "page": 176,
        "text": "FGM-148 Javelin ATGM / FGM-148"
      },
      {
        "page": 176,
        "text": "Why in News /"
      },
      {
        "page": 176,
        "text": "• India has signed a Letter of Offer and"
      },
      {
        "page": 176,
        "text": "Acceptance (LOA) with the United States for the\nprocurement of the FGM-148 Javelin anti-tank\nguided missile (ATGM) system."
      },
      {
        "page": 176,
        "text": "(ATGM)\nExam Facts /"
      },
      {
        "page": 176,
        "text": "• Type: The FGM-148 Javelin is a man-portable,"
      },
      {
        "page": 176,
        "text": "fire-and-forget anti-tank guided missile\n(ATGM) system."
      },
      {
        "page": 176,
        "text": "• Standard Effective Range: 2.5 km."
      }
    ]
  },
  {
    "slug": "ngopv-shachi",
    "title": "Shachi Next Generation Offshore Patrol Vessel",
    "titleHi": "शची अगली पीढ़ी का अपतटीय गश्ती पोत",
    "pages": "176–177",
    "overviewEn": "Shachi Next Generation Offshore Patrol Vessel — comprehensive source facts and exam notes.",
    "overviewHi": "शची अगली पीढ़ी के अपतटीय गश्ती पोत (NGOPV) से संबंधित है।",
    "hindiFacts": [
      "शची अगली पीढ़ी के अपतटीय गश्ती पोत (NGOPV) से संबंधित है।",
      "NGOPV का उपयोग तटीय निगरानी, खोज एवं बचाव, अपतटीय संपत्तियों की सुरक्षा और समुद्री डकैती-रोधी अभियानों में किया जाता है।"
    ],
    "blocks": [
      {
        "page": 176,
        "text": "Shachi – Next Generation Offshore Patrol Vessel\n(NGOPV) /"
      },
      {
        "page": 176,
        "text": "Why in News /"
      },
      {
        "page": 176,
        "text": "• Shachi (Yard 1280), the first of 11 Next"
      },
      {
        "page": 176,
        "text": "Generation Offshore Patrol Vessels (NGOPVs)\nbeing built for the Indian Navy, was launched at\nGoa Shipyard Limited (GSL), in March 2026."
      },
      {
        "page": 176,
        "text": "(Yard 1280)\n(GSL)"
      },
      {
        "page": 176,
        "text": "Exam Facts /"
      },
      {
        "page": 176,
        "text": "• Builder /"
      },
      {
        "page": 176,
        "text": "Limited (GSL), Goa."
      },
      {
        "page": 177,
        "text": "• Role /"
      },
      {
        "page": 177,
        "text": "defence and surveillance, search and rescue,\nprotection of offshore assets and anti-piracy\nmissions."
      },
      {
        "page": 177,
        "text": "• NGOPVs"
      }
    ]
  },
  {
    "slug": "colombo-security-conclave-exercise",
    "title": "Colombo Security Conclave Table Top Exercise",
    "titleHi": "कोलंबो सुरक्षा सम्मेलन टेबल-टॉप अभ्यास",
    "pages": "177",
    "overviewEn": "Colombo Security Conclave Table Top Exercise — comprehensive source facts and exam notes.",
    "overviewHi": "कोलंबो सुरक्षा सम्मेलन के अंतर्गत टेबल-टॉप अभ्यास समुद्री और क्षेत्रीय सुरक्षा सहयोग पर केंद्रित है।",
    "hindiFacts": [
      "कोलंबो सुरक्षा सम्मेलन के अंतर्गत टेबल-टॉप अभ्यास समुद्री और क्षेत्रीय सुरक्षा सहयोग पर केंद्रित है।",
      "इसमें संबंधित देशों की एजेंसियाँ साझा सुरक्षा चुनौतियों पर समन्वय और प्रतिक्रिया प्रक्रियाओं का अभ्यास करती हैं।"
    ],
    "blocks": [
      {
        "page": 177,
        "text": "Colombo Security Conclave (CSC) Table Top\nExercise 2026 /"
      },
      {
        "page": 177,
        "text": "Why in News /"
      },
      {
        "page": 177,
        "text": "• A three-day Table Top Exercise (TTX) under the"
      },
      {
        "page": 177,
        "text": "aegis of the Colombo Security Conclave (CSC)\nconcluded at the Eastern Naval Command (ENC),\nVisakhapatnam."
      },
      {
        "page": 177,
        "text": "Exam Facts /"
      },
      {
        "page": 177,
        "text": "• Objective /"
      },
      {
        "page": 177,
        "text": "developing a coordinated response to illicit\nmaritime activities in the Indian Ocean Region\n(IOR)."
      },
      {
        "page": 177,
        "text": "Colombo Security Conclave (CSC) /"
      },
      {
        "page": 177,
        "text": "• About /"
      },
      {
        "page": 177,
        "text": "framework in the Indian Ocean Region focused\non cooperation in maritime security and other\ntransnational security challenges."
      },
      {
        "page": 177,
        "text": "• CSC"
      },
      {
        "page": 177,
        "text": "• Members /"
      },
      {
        "page": 177,
        "text": "six full members — India, Sri Lanka, Maldives,\nMauritius, Bangladesh and Seychelles (Became\nthe sixth full member in 2026)."
      },
      {
        "page": 177,
        "text": "• CSC"
      },
      {
        "page": 177,
        "text": "• Secretariat /"
      },
      {
        "page": 177,
        "text": "Secretariat of CSC is located in Colombo, Sri\nLanka."
      },
      {
        "page": 177,
        "text": "• CSC"
      }
    ]
  },
  {
    "slug": "defence-exercises-2026",
    "title": "Defence Exercises 2026",
    "titleHi": "रक्षा अभ्यास 2026",
    "pages": "178–180",
    "overviewEn": "Defence Exercises 2026 — comprehensive source facts and exam notes.",
    "overviewHi": "अध्याय में भारत और अन्य देशों के प्रमुख द्विपक्षीय तथा बहुपक्षीय सैन्य अभ्यासों की तालिका दी गई है।",
    "hindiFacts": [
      "अध्याय में भारत और अन्य देशों के प्रमुख द्विपक्षीय तथा बहुपक्षीय सैन्य अभ्यासों की तालिका दी गई है।",
      "महत्वपूर्ण अभ्यासों में उदार शक्ति, पिच ब्लैक, मैत्री, नोमैडिक एलीफेंट, वरुण, सुपर गरुड़ शील्ड, काज़िंद, तरंग शक्ति, युद्ध अभ्यास, लामितिये, डस्टलिक, मिलन, खंजर, धर्म गार्डियन, वज्र प्रहार और काकाडू शामिल हैं।",
      "परीक्षा में अभ्यास का नाम, भाग लेने वाले देश, सेना का प्रकार और आयोजन स्थान विशेष रूप से याद रखें।"
    ],
    "blocks": [
      {
        "page": 178,
        "text": "Defence Exercises /"
      },
      {
        "page": 178,
        "text": "Exercise /\nBetween/Participants /"
      },
      {
        "page": 178,
        "text": "India and Mongolia /"
      },
      {
        "page": 178,
        "text": "Nomadic\nElephant\n2026 (18th Edition) /\n(18"
      },
      {
        "page": 178,
        "text": "SLINEX-26\nIndian Navy and Sri Lanka Navy"
      },
      {
        "page": 178,
        "text": "Visakhapatnam,\nAndhra\nPradesh\nVARUNA 2026 (24th\nEdition) /\n(24"
      },
      {
        "page": 178,
        "text": "Indian Navy and French Navy /"
      },
      {
        "page": 178,
        "text": "Super Garuda Shield\n2026 /\n2026"
      },
      {
        "page": 178,
        "text": "US, Indonesia & Partner\nNations (including India, Japan,\nAustralia, and Singapore)"
      },
      {
        "page": 178,
        "text": "Exercise\nKAZIND-\n2026 (9th Edition) /\n(9"
      },
      {
        "page": 178,
        "text": "India and Kazakhstan /"
      },
      {
        "page": 178,
        "text": "Exercise\nTarang\nShakti 2026 /"
      },
      {
        "page": 178,
        "text": "Multilateral /\nMultilateral Air Exercise /"
      },
      {
        "page": 178,
        "text": "Exercise\nYudh\nAbhyas 2026 (22nd\nEdition) /"
      },
      {
        "page": 178,
        "text": "Indian Army and US Army /"
      },
      {
        "page": 178,
        "text": "India and Malaysia /"
      },
      {
        "page": 178,
        "text": "Subang\nAirbase,\nMalaysia /\nExercise Pitch Black\n2026\n2026"
      },
      {
        "page": 178,
        "text": "Udara Shakti 2026 /"
      },
      {
        "page": 178,
        "text": "Around 20 countries, including\nIndia /"
      },
      {
        "page": 178,
        "text": "EXERCISE\nMAITREE-XV 2026 /"
      },
      {
        "page": 178,
        "text": "India and Thailand/"
      },
      {
        "page": 178,
        "text": "Type /\nWhere /"
      },
      {
        "page": 178,
        "text": "Joint Military Exercise /"
      },
      {
        "page": 178,
        "text": "Pithoragarh,\nUttarakhand /"
      },
      {
        "page": 178,
        "text": "Bilateral Maritime/Naval\nExercise"
      },
      {
        "page": 178,
        "text": "Bilateral\nMaritime\nExercise /"
      },
      {
        "page": 178,
        "text": "France /"
      },
      {
        "page": 178,
        "text": "Annual\nMultinational\nJoint Military Exercise /"
      },
      {
        "page": 178,
        "text": "Indonesia /"
      },
      {
        "page": 178,
        "text": "Joint Military Exercise /"
      },
      {
        "page": 178,
        "text": "Oskemen, Kazakhstan"
      },
      {
        "page": 178,
        "text": "Jodhpur, Rajasthan /"
      },
      {
        "page": 178,
        "text": "Bilateral Joint Military\nExercise /"
      },
      {
        "page": 178,
        "text": "Uttarakhand\nRajasthan /"
      },
      {
        "page": 178,
        "text": "Bilateral air exercise /"
      },
      {
        "page": 178,
        "text": "Multinational air exercise"
      },
      {
        "page": 178,
        "text": "Northern Australia /"
      },
      {
        "page": 178,
        "text": "Bilateral\nMilitary\nExercise /"
      },
      {
        "page": 178,
        "text": "Thailand/"
      },
      {
        "page": 179,
        "text": "Freedom Shield 2026 /"
      },
      {
        "page": 179,
        "text": "South Korea (ROK) and\nUnited States /"
      },
      {
        "page": 179,
        "text": "India and Seychelles /"
      },
      {
        "page": 179,
        "text": "LAMITIYE 2026 /"
      },
      {
        "page": 179,
        "text": "Exercise CYCLONE-\nIV 2026 /"
      },
      {
        "page": 179,
        "text": "India and Egypt /"
      },
      {
        "page": 179,
        "text": "IN-SLN DIVEX 2026 /\nIN-SLN"
      },
      {
        "page": 179,
        "text": "Indian Navy and Sri Lanka\nNavy /"
      },
      {
        "page": 179,
        "text": "Exercise\nDUSTLIK\n2026 /\n2026"
      },
      {
        "page": 179,
        "text": "India and Uzbekistan /"
      },
      {
        "page": 179,
        "text": "Exercise\nPRAGATI\n2026 (first edition) /\n2026"
      },
      {
        "page": 179,
        "text": "India + 12 friendly nations /"
      },
      {
        "page": 179,
        "text": "Umroi\nMilitary\nStation, Meghalaya\nCINBAX-II\n2026"
      },
      {
        "page": 179,
        "text": "India and Cambodia (Indian\nArmy & Royal Cambodian\nArmy) /"
      },
      {
        "page": 179,
        "text": "Exercise\nKHAAN\nQUEST 2026 (23rd\nEdition) /\n2026\n(23"
      },
      {
        "page": 179,
        "text": "Multilateral /"
      },
      {
        "page": 179,
        "text": "Andaman\nNicobar Islands /\nExercise Agni Pariksha"
      },
      {
        "page": 179,
        "text": "Exercise Dweep Shakti\n2026 /\n2026"
      },
      {
        "page": 179,
        "text": "Indian Army, Indian Navy,\nIndian Air Force & Indian\nCoast Guard /"
      },
      {
        "page": 179,
        "text": "Indian Army (Spear Corps) &\nITBP /\nCorps)"
      },
      {
        "page": 179,
        "text": "Annual\ncombined\njoint\nmilitary exercise /"
      },
      {
        "page": 179,
        "text": "Bilateral\njoint\nmilitary\nexercise; 2026 was its first tri-\nservices edition /"
      },
      {
        "page": 179,
        "text": "Seychelles /"
      },
      {
        "page": 179,
        "text": "Bilateral Joint Special Forces\nExercise /"
      },
      {
        "page": 179,
        "text": "Egypt /"
      },
      {
        "page": 179,
        "text": "Colombo, Sri Lanka"
      },
      {
        "page": 179,
        "text": "Bilateral joint military exercise"
      },
      {
        "page": 179,
        "text": "Uzbekistan"
      },
      {
        "page": 179,
        "text": "Multilateral military exercise /"
      },
      {
        "page": 179,
        "text": "Bilateral military exercise /"
      },
      {
        "page": 179,
        "text": "Cambodia /"
      },
      {
        "page": 179,
        "text": "Multinational\nPeacekeeping\nExercise /"
      },
      {
        "page": 179,
        "text": "Ulaanbaatar,\nMongolia"
      },
      {
        "page": 179,
        "text": "Large-scale Joint Military\nExercise /"
      },
      {
        "page": 179,
        "text": "Arunachal Pradesh /"
      },
      {
        "page": 179,
        "text": "Joint Firing Exercise /"
      },
      {
        "page": 180,
        "text": "Exercise /\nBetween/Participants /"
      },
      {
        "page": 180,
        "text": "Exercise\nEkatha\n2025 (8th Edition) /\n(8"
      },
      {
        "page": 180,
        "text": "Indian\nNavy\nMaldives\nNational Defence Force (MNDF)"
      },
      {
        "page": 180,
        "text": "It was the largest edition to date,\nfeaturing 74 nations."
      },
      {
        "page": 180,
        "text": "MILAN 2026 (13th\nEdition) /\n(13"
      },
      {
        "page": 180,
        "text": "India & Kyrgyzstan /"
      },
      {
        "page": 180,
        "text": "KHANJAR\n2026\n(13th Edition) /\n2026 (13"
      },
      {
        "page": 180,
        "text": "DHARMA\nGUARDIAN 2026\n(7th Edition) /"
      },
      {
        "page": 180,
        "text": "India & Japan /\nJoint Military Exercise /"
      },
      {
        "page": 180,
        "text": "Indian Air Force (IAF) & Japan\nAir Self-Defense Force (JASDF)"
      },
      {
        "page": 180,
        "text": "Veer Guardian 2026"
      },
      {
        "page": 180,
        "text": "India & United States /"
      },
      {
        "page": 180,
        "text": "VAJRA PRAHAR\n2026 (16th Edition) /"
      },
      {
        "page": 180,
        "text": "BRICS Plus countries / BRICS\nPlus\nIndia chose to skip /"
      },
      {
        "page": 180,
        "text": "Exercise Will for\nPeace 2026 /"
      },
      {
        "page": 180,
        "text": "DOSTI-17\n(17th\nEdition) /\n(17"
      },
      {
        "page": 180,
        "text": "The Coast Guards of India, Sri\nLanka, and the Maldives. /"
      },
      {
        "page": 180,
        "text": "Exercise\nKakadu\n2026 (17th Edition) /\n(17"
      },
      {
        "page": 180,
        "text": "Royal Australian Navy with\npartner navies, including the\nIndian Navy /"
      },
      {
        "page": 180,
        "text": "Type /\nWhere /"
      },
      {
        "page": 180,
        "text": "Bilateral\nMaritime\nExercise /"
      },
      {
        "page": 180,
        "text": "Maldives /"
      },
      {
        "page": 180,
        "text": "Multilateral\nNaval\nExercise"
      },
      {
        "page": 180,
        "text": "Visakhapatnam, Andhra\nPradesh /"
      },
      {
        "page": 180,
        "text": "Assam /"
      },
      {
        "page": 180,
        "text": "Joint Special Forces\nExercise /"
      },
      {
        "page": 180,
        "text": "Uttarakhand /"
      },
      {
        "page": 180,
        "text": "Air\nForce\nStation\nJodhpur, Rajasthan /"
      },
      {
        "page": 180,
        "text": "Bilateral Air Exercise /"
      },
      {
        "page": 180,
        "text": "Himachal\nPradesh"
      },
      {
        "page": 180,
        "text": "Joint Special Forces\nExercise /"
      },
      {
        "page": 180,
        "text": "Multinational\nNaval\nExercise"
      },
      {
        "page": 180,
        "text": "South African waters /"
      },
      {
        "page": 180,
        "text": "Malé, Maldives /"
      },
      {
        "page": 180,
        "text": "Trilateral\nMaritime/Coast Guard\nExercise /"
      },
      {
        "page": 180,
        "text": "Multinational Maritime\nExercise /"
      },
      {
        "page": 180,
        "text": "Northern\nEastern\nAustralia /"
      }
    ]
  },
  {
    "slug": "defence-one-liner-qa",
    "title": "Defence One-Liner Q&A",
    "titleHi": "रक्षा एक-पंक्ति प्रश्नोत्तर",
    "pages": "181–183",
    "overviewEn": "Defence One-Liner Q&A — comprehensive source facts and exam notes.",
    "overviewHi": "इस भाग में रक्षा संबंधी एक-पंक्ति प्रश्नोत्तर शामिल हैं।",
    "hindiFacts": [],
    "blocks": [
      {
        "page": 181,
        "text": "One-Liner Q & A /"
      },
      {
        "page": 181,
        "text": "• RS-28 Sarmat (Satan II) and DF-41 (Dongfeng-41), among the world's"
      },
      {
        "page": 181,
        "text": "discussed ICBMs, belong to which countries respectively?"
      },
      {
        "page": 181,
        "text": "II)"
      },
      {
        "page": 181,
        "text": "• Which of the following is India’s first privately manufactured military"
      },
      {
        "page": 181,
        "text": "aircraft recently seen in the news? (Manufacturer: Tata Advanced\nSystems Limited (TASL) and Airbus.)"
      },
      {
        "page": 181,
        "text": "(Manufacturer: Tata Advanced Systems Limited (TASL) and Airbus.)"
      },
      {
        "page": 181,
        "text": "• Which Next Generation Offshore Patrol Vessel (NGOPV)—designated"
      },
      {
        "page": 181,
        "text": "Yard 3037—was recently launched for the Indian Navy at Garden Reach\nShipbuilders and Engineers (GRSE) in Kolkata?"
      },
      {
        "page": 181,
        "text": "(NGOPV)——"
      },
      {
        "page": 181,
        "text": "• What is the name of the powerful weapon recently developed by India"
      },
      {
        "page": 181,
        "text": "to destroy enemy drones and drone swarms?"
      },
      {
        "page": 181,
        "text": "• Where did the Indian Air Force successfully conclude its specialized"
      },
      {
        "page": 181,
        "text": "counter-drone military drill, Exercise ROTOR CLAP III?"
      },
      {
        "page": 181,
        "text": "• What is the name of the third indigenously built Mahe-class Anti-"
      },
      {
        "page": 181,
        "text": "Submarine Warfare Shallow Water Craft (ASW-SWC) delivered by\nCochin Shipyard Limited to the Indian Navy?"
      },
      {
        "page": 181,
        "text": "• What is the name of India's first amphibious drone? (Developer:"
      },
      {
        "page": 181,
        "text": "AquaAirX Autonomous Systems)"
      },
      {
        "page": 181,
        "text": "Autonomous Systems)"
      },
      {
        "page": 181,
        "text": "• The Atlas drone swarm system, a state-of-the-art military asset, has been"
      },
      {
        "page": 181,
        "text": "Russia and China /"
      },
      {
        "page": 181,
        "text": "Airbus C-295"
      },
      {
        "page": 181,
        "text": "Shruti (Yard 3037)"
      },
      {
        "page": 181,
        "text": "Bhargavastra"
      },
      {
        "page": 181,
        "text": "Pokhran Field Firing Range,\nJaisalmer (Rajasthan)/"
      },
      {
        "page": 181,
        "text": "Mangrol"
      },
      {
        "page": 181,
        "text": "Avatar /"
      },
      {
        "page": 181,
        "text": "China /"
      },
      {
        "page": 182,
        "text": "• Where was Exercise ‘Amogh Jwala’, conducted by the Indian Army in"
      },
      {
        "page": 182,
        "text": "March 2026, held?"
      },
      {
        "page": 182,
        "text": "• Which indigenous, AI-enabled satellite imaging and intelligence"
      },
      {
        "page": 182,
        "text": "platform, developed by DRDO to strengthen internal security, was\nrecently handed over to the Ministry of Home Affairs?"
      },
      {
        "page": 182,
        "text": "• What is the name of the newly raised, specialized \"Light Commando\""
      },
      {
        "page": 182,
        "text": "force within the Indian Army designed for drone-centric operations and\nhybrid warfare?"
      },
      {
        "page": 182,
        "text": "• What is the name of India’s first Artificial Intelligence (AI)-based"
      },
      {
        "page": 182,
        "text": "autonomous combat aircraft, which will be manufactured in Portugal\nthrough a partnership between an Indian and a European company?"
      },
      {
        "page": 182,
        "text": "• Defence Minister Rajnath Singh recently flagged off India’s first"
      },
      {
        "page": 182,
        "text": "indigenous 300-km Universal Rocket Launching System in Shirdi,\nMaharashtra. What is the name of this rocket system?"
      },
      {
        "page": 182,
        "text": "Launching System)"
      },
      {
        "page": 182,
        "text": "• What is the name of India's first indigenous 'Glide Weapon System',"
      },
      {
        "page": 182,
        "text": "recently successfully tested by the DRDO and the Indian Air Force\n(IAF) off the Odisha coast?"
      },
      {
        "page": 182,
        "text": "(IAF)"
      },
      {
        "page": 182,
        "text": "Babina,\nJhansi\n(Uttar\nPradesh)"
      },
      {
        "page": 182,
        "text": "Prajna System"
      },
      {
        "page": 182,
        "text": "Bhairav Battalions"
      },
      {
        "page": 182,
        "text": "Kaal Bhairava"
      },
      {
        "page": 182,
        "text": "Suryastra"
      },
      {
        "page": 182,
        "text": "TARA (Tactical Advanced\nRange Augmentation)"
      },
      {
        "page": 183,
        "text": "• Where was the five-day Combined Operational Review and"
      },
      {
        "page": 183,
        "text": "Evaluation (CORE) Programme 2026, aimed at fostering tri-service\njointness and civil-military synergy, organized in September 2026?"
      },
      {
        "page": 183,
        "text": "• What is the name of India’s state-of-the-art Ocean Research Vessel"
      },
      {
        "page": 183,
        "text": "recently launched by the Union Minister at the Garden Reach\nShipbuilders & Engineers (GRSE) shipyard in Kolkata?"
      },
      {
        "page": 183,
        "text": "Engineers (GRSE)"
      },
      {
        "page": 183,
        "text": "Manekshaw Centre, New\nDelhi"
      },
      {
        "page": 183,
        "text": "ORV Sagar Manthan\nORV\nManthan)"
      }
    ]
  }
]
const schemes = topics.filter(topic => topic.slug !== "defence-one-liner-qa")
const questionAnswers = topics.find(topic => topic.slug === "defence-one-liner-qa")!
const oneLiners: { question: string; answer: string }[] = [
  {
    "question": "RS-28 सरमत और DF-41 अंतरमहाद्वीपीय मिसाइलें क्रमशः किन देशों की हैं?",
    "answer": "रूस और चीन"
  },
  {
    "question": "भारत में निजी क्षेत्र द्वारा निर्मित प्रमुख सैन्य परिवहन विमान कौन-सा है?",
    "answer": "एयरबस C-295"
  },
  {
    "question": "GRSE द्वारा नौसेना के लिए लॉन्च किए गए NGOPV यार्ड 3037 का नाम क्या है?",
    "answer": "श्रुति"
  },
  {
    "question": "ड्रोन और ड्रोन समूहों को नष्ट करने के लिए विकसित हथियार का नाम क्या है?",
    "answer": "भार्गवास्त्र"
  },
  {
    "question": "भारतीय वायुसेना का काउंटर-ड्रोन अभ्यास रोटर क्लैप III कहाँ हुआ?",
    "answer": "पोखरण फील्ड फायरिंग रेंज, जैसलमेर"
  },
  {
    "question": "माहे श्रेणी का तीसरा पनडुब्बी-रोधी उथले जल का पोत कौन-सा है?",
    "answer": "मंगरोल"
  },
  {
    "question": "भारत के पहले उभयचर ड्रोन का नाम क्या बताया गया है?",
    "answer": "अवतार"
  },
  {
    "question": "एटलस ड्रोन स्वार्म प्रणाली किस देश से संबंधित है?",
    "answer": "चीन"
  },
  {
    "question": "मार्च 2026 में भारतीय सेना का 'अमोघ ज्वाला' अभ्यास कहाँ आयोजित हुआ?",
    "answer": "बबीना, झाँसी, उत्तर प्रदेश"
  },
  {
    "question": "DRDO द्वारा गृह मंत्रालय को सौंपे गए एआई-सक्षम सैटेलाइट इमेजिंग प्लेटफॉर्म का नाम क्या है?",
    "answer": "प्रज्ञा प्रणाली"
  },
  {
    "question": "भारतीय सेना के नए विशेष लाइट कमांडो बल का नाम क्या है?",
    "answer": "भैरव बटालियन"
  },
  {
    "question": "एआई आधारित स्वायत्त लड़ाकू विमान का नाम क्या बताया गया है?",
    "answer": "काल भैरव"
  },
  {
    "question": "300 किलोमीटर क्षमता वाली स्वदेशी यूनिवर्सल रॉकेट लॉन्चिंग प्रणाली का नाम क्या है?",
    "answer": "सूर्यास्त्र"
  },
  {
    "question": "स्वदेशी ग्लाइड वेपन सिस्टम का नाम क्या है?",
    "answer": "तारा (TARA)"
  },
  {
    "question": "तीनों सेनाओं के संयुक्त CORE कार्यक्रम 2026 का आयोजन कहाँ हुआ?",
    "answer": "मानेकशॉ सेंटर, नई दिल्ली"
  },
  {
    "question": "कोलकाता के GRSE में लॉन्च महासागर अनुसंधान पोत का नाम क्या है?",
    "answer": "ORV सागर मंथन"
  }
]

// The PDF extractor splits individual sentences across many source blocks.
// Reassemble them for reading without changing the original topic data.
function getReadableSourceFacts(blocks: SourceBlock[]): string[] {
    const combined = blocks.map(block => block.text.trim()).filter(Boolean).join(" ")
        .replace(/\s*\n\s*/g, " ")
        .replace(/\s+/g, " ")
    return combined.split(/\s*[•●]\s*/).map(line => line.trim()).filter(Boolean)
}

function TopicSection({ topic, index }: { topic: DefenceTopic; index: number }) {
    return (
        <article id={topic.slug} className="scroll-mt-28 rounded-xl border bg-card shadow-sm overflow-hidden">
            <div className="p-5 md:p-7 bg-gradient-to-r from-purple-50/80 to-background border-b">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700">Topic {index + 1} of {schemes.length}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">{topic.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{topic.titleHi}</p>
            </div>
            <div className="p-5 md:p-7">
                <div className="flex items-center gap-2 mb-3"><Languages className="w-4 h-4 text-purple-600" /><h4 className="font-semibold">Overview / अवलोकन</h4></div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="rounded-xl bg-purple-50/60 border border-purple-100 p-4"><p className="text-xs font-semibold uppercase text-purple-700 mb-2">English</p><p className="text-sm leading-7">{topic.overviewEn}</p></div>
                    <div className="rounded-xl bg-fuchsia-50/60 border border-fuchsia-100 p-4"><p className="text-xs font-semibold uppercase text-fuchsia-700 mb-2">हिन्दी</p><p className="text-sm leading-7">{topic.overviewHi}</p></div>
                </div>
                <div className="flex items-center gap-2 mb-3"><Landmark className="w-4 h-4 text-purple-600" /><h4 className="font-semibold">हिन्दी में महत्वपूर्ण तथ्य / Key Facts in Hindi</h4></div>
                <div className="rounded-xl bg-fuchsia-50/40 border border-fuchsia-100 p-5 mb-6">
                    <ul className="space-y-3 text-sm leading-7">{topic.hindiFacts.map((fact, i) => <li key={i} className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-1.5 shrink-0 text-fuchsia-600" /><span>{fact}</span></li>)}</ul>
                </div>
                <div className="flex items-center gap-2 mb-3"><Landmark className="w-4 h-4 text-purple-600" /><h4 className="font-semibold">Detailed English Facts / अंग्रेज़ी में विस्तृत तथ्य</h4></div>
                <div className="rounded-xl border bg-muted/20 p-5 sm:p-6">
                    <div className="space-y-3 text-sm leading-7 text-foreground/90">
                        {getReadableSourceFacts(topic.blocks).map((fact, i) => (
                            <p key={i} className="break-words">{fact}</p>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end mt-4"><a href="#topic-index" className="text-sm text-purple-700 hover:underline">Back to topic index</a></div>
            </div>
        </article>
    )
}

export default function DefenceCurrentAffairsPage() {
    const [search, setSearch] = useState("")
    const normalizedSearch = search.trim().toLowerCase()
    const filtered = normalizedSearch
        ? schemes.filter(topic => `${topic.title} ${topic.titleHi} ${topic.overviewEn} ${topic.overviewHi}`.toLowerCase().includes(normalizedSearch))
        : schemes

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-5 pb-12  md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:text-purple-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="flex"><span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Complete Topic Digest · Defence</span></div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Important Defence Current Affairs 2026</h1>
                    <p className="text-xl text-muted-foreground mb-6">रक्षा समसामयिकी 2026 — हथियार, नौसेना, सैन्य अभ्यास और प्रश्नोत्तर</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Landmark className="w-4 h-4 text-purple-600" /><span>{schemes.length} Detailed Topics</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-purple-600" /><span>One-Liner Q&A</span></div>
                    </div>
                </div>
            </section>
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section id="topic-index" className="scroll-mt-28 mb-10">
                    <div className="flex items-center gap-2 my-4"><BookOpen className="w-5 h-5 text-purple-600" /><h2 className="text-2xl font-bold">Topic-wise List / विषयवार सूची</h2></div>
                    <div className="rounded-xl border bg-card p-4 md:p-5">
                        <label htmlFor="scheme-search" className="relative block mb-4">
                            <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                            <input id="scheme-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search topic / विषय खोजें" className="w-full h-10 rounded-lg border bg-background pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300" />
                            {search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search" className="absolute right-3 top-3"><X className="w-4 h-4" /></button>}
                        </label>
                        <nav aria-label="Defence topics" className="grid sm:grid-cols-2 gap-2">
                            {filtered.map(topic => <a key={topic.slug} href={`#${topic.slug}`} className="rounded-lg border p-3 flex items-start gap-2 text-sm hover:bg-purple-50 hover:border-purple-200"><ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-purple-600" /><span><span className="font-medium">{topic.title}</span><span className="block text-xs text-muted-foreground mt-0.5">{topic.titleHi}</span></span></a>)}
                            {filtered.length === 0 && <p className="text-sm text-muted-foreground p-3">No matching topic found.</p>}
                        </nav>
                        <a href="#one-liner-qa" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700"><Target className="w-4 h-4" /> Jump to One-Liner Q&A</a>
                    </div>
                </section>
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Landmark className="w-5 h-5 text-purple-600" /><h2 className="text-2xl font-bold">Detailed Topic Notes / विषयवार विस्तृत नोट्स</h2></div>
                    <div className="space-y-6">{schemes.map((topic, index) => <TopicSection key={topic.slug} topic={topic} index={index} />)}</div>
                </section>
                <section id="one-liner-qa" className="scroll-mt-28 mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-purple-600" /><h2 className="text-2xl font-bold">One-Liner Q&A / एक-पंक्ति प्रश्नोत्तर</h2></div>
                    <div className="rounded-xl border bg-card p-5">
                        <p className="text-sm text-muted-foreground mb-4">स्रोत PDF के प्रश्नों से तैयार स्पष्ट हिंदी प्रश्नोत्तर:</p>
                        <div className="space-y-2 mb-6">{oneLiners.map((item, i) => <details key={i} className="rounded-lg border p-4"><summary className="text-sm font-medium cursor-pointer">{i + 1}. {item.question}</summary><p className="text-sm text-green-700 font-medium pt-3">उत्तर: {item.answer}</p></details>)}</div>
                        <h3 className="text-lg font-semibold mb-3">Complete Source Q&A (English)</h3>
                        <div className="rounded-xl border bg-muted/20 p-5 sm:p-6">
                            <div className="space-y-3 text-sm leading-7">
                                {getReadableSourceFacts(questionAnswers.blocks).map((fact, i) => <p key={i} className="break-words">{fact}</p>)}
                            </div>
                        </div>
                    </div>
                </section>
              
                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer">
                        <ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                        <div className="flex justify-end gap-2">
                    <Link href="/current-affairs/by-topic/awards-honours-2026">
                        <Button variant="outline" className="gap-2 cursor-pointer">Next: Awards & Honours <ChevronRight className="w-4 h-4" /></Button>
                    </Link>
                    <Link href="/mock-test">
                        <Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button>
                    </Link>
                </div>
                        </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}