"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useMemo, useState } from "react"
import { ArrowLeft, BookOpen, CheckCircle2, ChevronRight, HelpCircle, Languages, Search, Sparkles, Target, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SourceQA { id: string; page: number; question: string; answer: string }

// All available legible English Q&A text reconstructed from the two-column
// source PDF. Hindi font encoding in the source was corrupted, so do not
// display unreliable glyphs as if they were faithful Hindi transcriptions.
const questions: SourceQA[] = [
  {
    "id": "qa-1",
    "page": 234,
    "question": "Where was the new Regional Meteorological Centre inaugurated by Dr. Jitendra Singh and Yogi Adityanath in June 2026?",
    "answer": "Lucknow, Uttar Pradesh"
  },
  {
    "id": "qa-2",
    "page": 234,
    "question": "According to NFHS-6, which State/UT recorded India’s lowest TFR?",
    "answer": "Andaman and Nicobar Islands — 0.9"
  },
  {
    "id": "qa-3",
    "page": 234,
    "question": "In September 2026, India’s forex reserves rose to what level?",
    "answer": "USD 785.70 billion / 785.70"
  },
  {
    "id": "qa-4",
    "page": 234,
    "question": "Who became the first footballer to receive the Princess of Asturias Award?",
    "answer": "Lionel Messi"
  },
  {
    "id": "qa-5",
    "page": 234,
    "question": "At what rate did the RBI keep the Repo Rate unchanged in its June 2026 Monetary Policy Review?",
    "answer": "5.25% (CRR: 3.0%, SLR: 18.0%)"
  },
  {
    "id": "qa-6",
    "page": 234,
    "question": "In which city has the University of Liverpool established its first India campus?",
    "answer": "Bengaluru"
  },
  {
    "id": "qa-7",
    "page": 234,
    "question": "With which country did India launch the UPI–NPI Cross-Border Remittance Service in June 2026?",
    "answer": "Nepal"
  },
  {
    "id": "qa-8",
    "page": 234,
    "question": "Which is India’s largest solar park?",
    "answer": "Bhadla Solar Park, Rajasthan"
  },
  {
    "id": "qa-9",
    "page": 234,
    "question": "Who became the first Indian to win the Russia Grand Sand Master Cup 2026?",
    "answer": "Sudarsan Pattnaik"
  },
  {
    "id": "qa-10",
    "page": 234,
    "question": "In which country is the Barzan gas supply facility, recently in the news in June 2026 due to a major fire explosion, located?",
    "answer": "Qatar"
  },
  {
    "id": "qa-11",
    "page": 234,
    "question": "After a six-year suspension during the COVID-19 pandemic in 2020, through which Himalayan pass in Uttarakhand did India officially resume its border trade with China in June 2026? 2020",
    "answer": "Lipulekh Pass"
  },
  {
    "id": "qa-12",
    "page": 234,
    "question": "In which country did the Royal College of Surgeons of Edinburgh unveil a 90 kg bronze statue in June 2026 to honor Sushruta, the \"Father of Plastic Surgery\"?",
    "answer": "Scotland"
  },
  {
    "id": "qa-13",
    "page": 235,
    "question": "What is the designation of the first indigenous Air Cushion Vehicle (hovercraft) officially inducted by the Indian Coast Guard in June 2026?",
    "answer": "H-561"
  },
  {
    "id": "qa-14",
    "page": 235,
    "question": "According to the latest data released by UNCTAD, which country emerged as the world's leading ship recycling nation in 2025 by capturing a 35.4% global market share? UNCTAD",
    "answer": "India"
  },
  {
    "id": "qa-15",
    "page": 235,
    "question": "The Union Government in June 2026 approved the revival of the historic Qadian–Beas railway line project after nearly 100 years. In which Indian state is this project located?",
    "answer": "Punjab"
  },
  {
    "id": "qa-16",
    "page": 235,
    "question": "Which country has recently become the first Central Asian member of the BRICS New Development Bank (NDB)? (The New Development Bank (NDB) was established in 2014)",
    "answer": "Uzbekistan"
  },
  {
    "id": "qa-17",
    "page": 235,
    "question": "Which European nation has recently conferred its highest state honor, \"The Order of the White Double Cross (First Class)\", upon the Prime Minister of India?",
    "answer": "Slovak Republic (Slovakia)"
  },
  {
    "id": "qa-18",
    "page": 235,
    "question": "Which northeastern state's traditional musical instrument, the Sarinda, was granted the Geographical Indication (GI) tag in June 2026?",
    "answer": "Tripura"
  },
  {
    "id": "qa-19",
    "page": 235,
    "question": "Which country became the first Arab nation in June 2026 to set the minimum age for social media use at 15, mandating AI-backed digital identity checks?",
    "answer": "United Arab Emirates (UAE)"
  },
  {
    "id": "qa-20",
    "page": 235,
    "question": "In June 2026, which country announced a complete upcoming ban on social media platforms (such as Instagram, TikTok, and X) for children under the age of 16?",
    "answer": "United Kingdom (UK)"
  },
  {
    "id": "qa-21",
    "page": 236,
    "question": "What is the name of the technology-driven security initiative launched by the Jammu and Kashmir Police in Anantnag district for the Shri Amarnath Ji Yatra 2026?",
    "answer": "'Project Hawk Eye' '"
  },
  {
    "id": "qa-22",
    "page": 236,
    "question": "With which organization did the Ministry of Tourism sign a Memorandum of Understanding (MoU) in June 2026 to enhance the digital reach of India's tourist destinations?",
    "answer": "Google India"
  },
  {
    "id": "qa-23",
    "page": 236,
    "question": "Which country has recently been recognized as the UNESCO World Heritage Capital owing to its highest repository of 61 protected cultural sites? 61",
    "answer": "Italy"
  },
  {
    "id": "qa-24",
    "page": 236,
    "question": "What has the prestigious International Booker Prize recently been renamed to following a new ten-year global sponsorship deal in July 2026?",
    "answer": "Bukhman International Booker Prize"
  },
  {
    "id": "qa-25",
    "page": 236,
    "question": "In which country has the world's largest 3,200-megapixel LSST (Legacy Survey of Space and Time) digital camera (built by the United States) been installed for deep-space mapping?",
    "answer": "Chile"
  },
  {
    "id": "qa-26",
    "page": 236,
    "question": "Which state police department launched the 'Operation Surakshit Cyberspace' in July 2026 to strengthen online safety for women and children?",
    "answer": "Gujarat"
  },
  {
    "id": "qa-27",
    "page": 236,
    "question": "According to the data released by the National Statistical Office (NSO), to what percentage level did India's unemployment rate decline in 2025, marking its lowest level in eight years?",
    "answer": "3.1% 3.1%"
  },
  {
    "id": "qa-28",
    "page": 236,
    "question": "In which Indian state is the proposed ₹113,000 crore Siang Upper Multipurpose Project (SUMP) located, which is currently facing a standoff with local indigenous tribes (Adi and Galo tribes( over displacement concerns?",
    "answer": "Arunachal Pradesh"
  },
  {
    "id": "qa-29",
    "page": 237,
    "question": "With which country did India jointly establish the International Centre for Civilizational Studies “Manas and Mahabharata” in July 2026 to boost cultural ties?",
    "answer": "Kyrgyzstan"
  },
  {
    "id": "qa-30",
    "page": 237,
    "question": "What is the name of the first-of-its-kind digital learning platform launched by the Union Minister for Tribal Affairs to preserve tribal arts, culture, and traditional knowledge?",
    "answer": "TribeX"
  },
  {
    "id": "qa-31",
    "page": 237,
    "question": "In which Indian state did thousands of Ravidassia community members recently gather to renew their demand for recognition as a separate religion in the upcoming Census?",
    "answer": "Punjab"
  },
  {
    "id": "qa-32",
    "page": 237,
    "question": "In which Indian state is the 12th-century Abathsahayeswarar Temple located, which recently won the UNESCO Asia-Pacific Award of Distinction (2024) for outstanding heritage conservation? 12",
    "answer": "Tamil Nadu"
  },
  {
    "id": "qa-33",
    "page": 237,
    "question": "At which place did the Prime Minister of India flag off the country’s first hydrogen-powered passenger train on July 17, 2026? 17",
    "answer": "Jind, Haryana"
  },
  {
    "id": "qa-34",
    "page": 237,
    "question": "In which country has Prime Minister Narendra Modi announced the establishment of IIM Bangalore’s first overseas campus?",
    "answer": "Indonesia"
  },
  {
    "id": "qa-35",
    "page": 237,
    "question": "At which place did the Department of Animal Husbandry & Dairying (DAHD) conduct 'Pashujanya Yudh Abhyas (PYA)', a five-day national mock drill to test preparedness for animal health emergencies?",
    "answer": "Vidisha, Madhya Pradesh"
  },
  {
    "id": "qa-36",
    "page": 237,
    "question": "Which State/UT government has launched 'Mission Kayakalp' in July 2026 to",
    "answer": "Delhi (NCT of Delhi)"
  },
  {
    "id": "qa-37",
    "page": 238,
    "question": "In which Indian city is Australia’s Victoria University setting up its first campus in India?",
    "answer": "Gurugram (Haryana)"
  },
  {
    "id": "qa-38",
    "page": 238,
    "question": "Which political party does Andy Burnham belong to, who took office as the Prime Minister of the United Kingdom in July 2026?",
    "answer": "Labour Party"
  },
  {
    "id": "qa-39",
    "page": 238,
    "question": "In which country is Amboseli National Park located—a park that was in the news due to the sudden deaths of African elephants in August 2026?",
    "answer": "Kenya"
  },
  {
    "id": "qa-40",
    "page": 238,
    "question": "Which state government recently imposed a 'Widow and Orphan Cess' of 60 paise per litre on petrol and high-speed diesel?",
    "answer": "Himachal Pradesh"
  },
  {
    "id": "qa-41",
    "page": 238,
    "question": "In which place is India's first dedicated Telecom Manufacturing Zone (TMZ) being established?",
    "answer": "Gwalior, Madhya Pradesh"
  },
  {
    "id": "qa-42",
    "page": 238,
    "question": "Which beverage brand was awarded the commercial branding rights of the Lucknow–Delhi Tejas Express, making it India’s first privately branded train?",
    "answer": "Sprite"
  },
  {
    "id": "qa-43",
    "page": 238,
    "question": "Where is Asia's first desert-themed Drive-Through Night Safari and Zoological Park proposed to be developed?",
    "answer": "Juna Deesa, Banaskantha (Gujarat)"
  },
  {
    "id": "qa-44",
    "page": 238,
    "question": "Which state government has recently classified deaths caused by snakebites as a 'notifiable disease'?",
    "answer": "Maharashtra"
  },
  {
    "id": "qa-45",
    "page": 238,
    "question": "What new name has US President Donald Trump directed federal agencies recently to use for Lake Ontario?",
    "answer": "Lake America"
  },
  {
    "id": "qa-46",
    "page": 239,
    "question": "Which insecticide has recently been proposed for a complete nationwide ban by the Ministry of Agriculture and Farmers Welfare due to severe health and environmental risks?",
    "answer": "Carbosulfan"
  },
  {
    "id": "qa-47",
    "page": 239,
    "question": "Which North-Eastern state’s Assembly unanimously passed a resolution in August 2026 opposing all forms of uranium mining and processing in the state?",
    "answer": "Meghalaya"
  },
  {
    "id": "qa-48",
    "page": 239,
    "question": "What is India's global rank in terms of operational metro route length?",
    "answer": "Third (after China and the US)"
  },
  {
    "id": "qa-49",
    "page": 239,
    "question": "AI4Agri 2026 Global Conference & Investor Summit, held in February 2026, was organised at which of the following venues?",
    "answer": "Jio World Convention Centre, Mumbai"
  },
  {
    "id": "qa-50",
    "page": 239,
    "question": "The Essential Commodities Act was enacted in which year?",
    "answer": "1955"
  },
  {
    "id": "qa-51",
    "page": 239,
    "question": "The 9th International Santal (Santhal) Conference was organised at which of the following places?/ 9",
    "answer": "Darjeeling, West Bengal"
  },
  {
    "id": "qa-52",
    "page": 239,
    "question": "Which company became the first mining company in India to cross the 50 million tonnes (MT) mark of iron ore production in a single financial year?",
    "answer": "NMDC Limited / NMDC"
  },
  {
    "id": "qa-53",
    "page": 239,
    "question": "Recently, the Parliament of which country conferred its highest honour, the ‘Speaker of the Knesset Medal’, on Prime Minister Narendra Modi?",
    "answer": "Israel"
  },
  {
    "id": "qa-54",
    "page": 239,
    "question": "Who directed the animated short film Chyimi, which won the Best Director Award at the New York Short Animation Festival (NYSAF) 2026?",
    "answer": "Dr. Partha Sarathi Mahanta"
  },
  {
    "id": "qa-55",
    "page": 239,
    "question": "Which country launched ‘Operation Ghazab-lil-Haq’ against Afghanistan in February 2026?",
    "answer": "Pakistan"
  },
  {
    "id": "qa-56",
    "page": 240,
    "question": "Which Indian mountaineer set a world record by climbing the Seven Volcanic Summits in the shortest time?",
    "answer": "Animesh Verma"
  },
  {
    "id": "qa-57",
    "page": 240,
    "question": "The Sunwal-Domri area, which set a private world record by planting 251,446 saplings in one hour, is located in which city of Uttar Pradesh?",
    "answer": "Varanasi"
  },
  {
    "id": "qa-58",
    "page": 240,
    "question": "In March 2026, the Geological Survey of India (GSI) officially declared the Kalinjar Fort Hill a National Geo-Heritage Site. In which district of Uttar Pradesh is this hill located?",
    "answer": "Banda"
  },
  {
    "id": "qa-59",
    "page": 240,
    "question": "Which painting by Raja Ravi Varma recently created a record by becoming the most expensive (₹167.2 crore) Indian artwork ever sold at an auction? Raja Ravi Varma",
    "answer": "Yashoda and Krishna"
  },
  {
    "id": "qa-60",
    "page": 240,
    "question": "Which country is currently the largest producer and exporter of Liquefied Petroleum Gas (LPG) in the world?",
    "answer": "United States"
  },
  {
    "id": "qa-61",
    "page": 240,
    "question": "In which state is the recently approved 1200 MW 'Kalai-II Hydroelectric Project' being constructed on the Lohit River?",
    "answer": "Arunachal Pradesh"
  },
  {
    "id": "qa-62",
    "page": 240,
    "question": "The Lanjia Saora community, recently in the news for preserving its visual heritage, primarily inhabits which state? (Recognized as a Particularly Vulnerable Tribal Group (PVTG(",
    "answer": "Odisha"
  },
  {
    "id": "qa-63",
    "page": 241,
    "question": "In April 2026, India delivered 13 tonnes of BCG vaccines and related medical supplies to the Ministry of Public Health of which country to bolster child immunisation against tuberculosis?",
    "answer": "Afghanistan"
  },
  {
    "id": "qa-64",
    "page": 241,
    "question": "Asia’s first UNESCO Chair on Gender Inclusion and Skill Development has recently been launched by India at which institution?",
    "answer": "Symbiosis Skills and Professional University (SSPU), Pune"
  },
  {
    "id": "qa-65",
    "page": 241,
    "question": "The Bargi Dam (Madhya Pradesh), which was recently in the news due to a cruise boat accident, is constructed across which of the following rivers?",
    "answer": "Narmada River"
  },
  {
    "id": "qa-66",
    "page": 241,
    "question": "The 2026 UNESCO/Guillermo Cano World Press Freedom Prize was awarded to which of the following for its courageous reporting under dangerous conditions?",
    "answer": "Sudanese Journalists Syndicate"
  },
  {
    "id": "qa-67",
    "page": 241,
    "question": "Recently, the 'Agricultural and Processed Food Products Export Development Authority' (APEDA) has announced the establishment of a Basmati and Organic Training Centre in which district of Uttar Pradesh?",
    "answer": "Pilibhit"
  },
  {
    "id": "qa-68",
    "page": 241,
    "question": "Which state's High Court has recently directed the state government to implement a 'Menstrual Leave Policy' across all sectors (government and private), citing the Right to Life under Article 21?",
    "answer": "Karnataka"
  },
  {
    "id": "qa-69",
    "page": 241,
    "question": "Recently, which state government has passed a law providing for 'Life Imprisonment' in cases of sacrilege of religious scriptures?",
    "answer": "Punjab"
  },
  {
    "id": "qa-70",
    "page": 242,
    "question": "Which state government has recently launched India’s first digital grievance redressal system specifically designed for gig workers?",
    "answer": "Karnataka"
  },
  {
    "id": "qa-71",
    "page": 242,
    "question": "In which state did Union Minister Nitin Gadkari recently launch India’s first Multi-Lane Free Flow (MLFF) barrier-less tolling system?",
    "answer": "Gujarat"
  },
  {
    "id": "qa-72",
    "page": 242,
    "question": "In May 2026, according to an announcement made by Justice Surya Kant, which became the first state in India to achieve the status of a 'completely paperless judiciary'?",
    "answer": "Sikkim"
  },
  {
    "id": "qa-73",
    "page": 242,
    "question": "Recently, which botanist has been honored by WWF for developing an AI based app to identify invasive plant species in the Western Ghats?",
    "answer": "N. Aleem Yusuf"
  },
  {
    "id": "qa-74",
    "page": 242,
    "question": "In May 2026, widespread protests emerged demanding the revocation of newly notified wildlife sanctuaries on the Menchal and Meroe islands to protect indigenous customary rights. In which of the following States/Union Territories are these islands located?",
    "answer": "Andaman and Nicobar Islands"
  },
  {
    "id": "qa-75",
    "page": 242,
    "question": "The Prime Minister’s Internship Scheme was announced in which Union Budget?",
    "answer": "Union Budget 2024-25 (launched in 3 October 2024) 2024"
  },
  {
    "id": "qa-76",
    "page": 242,
    "question": "When was Project Cheetah launched?",
    "answer": "2022"
  },
  {
    "id": "qa-77",
    "page": 242,
    "question": "In which National Park was the ‘Lion’ Species Spotlight Programme inaugurated recently? (‘Project Lion’ (launched in 2020)",
    "answer": "Gir National Park"
  },
  {
    "id": "qa-78",
    "page": 242,
    "question": "The centuries-old community-led cleaning and fish-catching festival at 'Panzath Nag', which was recently in the news, is celebrated in which State/Union Territory?",
    "answer": "Jammu and Kashmir (Anantnag district)"
  },
  {
    "id": "qa-79",
    "page": 243,
    "question": "Recently, Prime Minister Narendra Modi was conferred the prestigious “Royal Order of the Polar Star, Commander Grand Cross” by which country?",
    "answer": "Sweden"
  },
  {
    "id": "qa-80",
    "page": 243,
    "question": "Which fort has recently been recognized by UNESCO as having the world’s second-longest continuous wall after the Great Wall of China?",
    "answer": "Kumbhalgarh Fort (Rajasthan)"
  },
  {
    "id": "qa-81",
    "page": 243,
    "question": "Which country’s Parliament recently passed the 'Tobacco and Vapes Bill' to create a smoke-free generation by banning cigarette sales to anyone born on or after January 1, 2009?",
    "answer": "United Kingdom"
  },
  {
    "id": "qa-82",
    "page": 243,
    "question": "Under the Pradhan Mantri Matsya Sampada Yojana (PMMSY), which district has been declared India’s first ‘Pearl Farming Cluster’?",
    "answer": "Hazaribagh, Jharkhand"
  },
  {
    "id": "qa-83",
    "page": 243,
    "question": "Which voice-first, multilingual AI-powered legal assistant was recently launched during the DISHA programme?",
    "answer": "Nyaya Setu"
  },
  {
    "id": "qa-84",
    "page": 243,
    "question": "Which country is currently the largest producer and exporter of Liquefied Petroleum Gas (LPG) in the world?",
    "answer": "United States"
  },
  {
    "id": "qa-85",
    "page": 243,
    "question": "To strengthen the conservation of the endangered Ganges river dolphin, the Forest Department of which district in Uttar Pradesh has recently launched the \"Dolphin Mitra\" (Dolphin Friends) volunteer network?",
    "answer": "Prayagraj"
  },
  {
    "id": "qa-86",
    "page": 243,
    "question": "In May 2026, which Indian state/Union Territory set a Guinness World Record by unfurling the \"world's largest underwater national flag\"?",
    "answer": "Andaman and Nicobar Islands"
  },
  {
    "id": "qa-87",
    "page": 243,
    "question": "Which Ministry launched the 'JANANI' (Journey of Antenatal, Natal and Neonatal Integrated Care) digital platform to strengthen maternal and child healthcare services in India?",
    "answer": "Ministry of Health and Family Welfare"
  },
  {
    "id": "qa-88",
    "page": 244,
    "question": "Where has the Government of India recently launched a pilot project for Central Bank Digital Currency (CBDC)-based food subsidy distribution under the Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY-2020)?",
    "answer": "Puducherry"
  },
  {
    "id": "qa-89",
    "page": 244,
    "question": "Which village in eastern Ladakh has recently emerged as India’s first model border village along the India–China border under the Vibrant Villages Programme (VVP)?",
    "answer": "Chumur Village"
  },
  {
    "id": "qa-90",
    "page": 244,
    "question": "What is the name of the digital screening platform developed by NCERT to help educators in screening 21 types of disabilities for the early identification of disabilities among children?",
    "answer": "PRASHAST 2.0 (Pre Assessment Holistic Screening Tool) PRASHAST 2.0 (Pre Assessment Holistic Screening Tool)"
  },
  {
    "id": "qa-91",
    "page": 244,
    "question": "Which state government launched the ‘Safe Mobility Program’ in April 2026 under which women from Self-Help Groups (SHGs) were trained as e rickshaw pilots to provide safe transportation services for women and girls?",
    "answer": "Uttar Pradesh"
  },
  {
    "id": "qa-92",
    "page": 244,
    "question": "Which institution launched the global initiative titled “Water Forward” in April 2026 to improve water security for more than 1 billion people by 2030? 2030",
    "answer": "World Bank"
  },
  {
    "id": "qa-93",
    "page": 244,
    "question": "What is the name of the nationwide capacity-building and certification initiative launched by the Reserve Bank of India to strengthen the urban co operative banking (UCB) sector?",
    "answer": "Mission SAKSHAM (Sahakari Bank Kshamta Nirman)"
  },
  {
    "id": "qa-94",
    "page": 244,
    "question": "Which two Indian cricketers were inducted into the ICC Hall of Fame as part of the Class of 2026?",
    "answer": "Sourav Ganguly and Anjum Chopra"
  },
  {
    "id": "qa-95",
    "page": 244,
    "question": "In the Union Budget 2026-27, which location has been selected for the establishment of two new telescopes (NLST and NLOT) to study the Sun and",
    "answer": "Ladakh"
  },
  {
    "id": "qa-96",
    "page": 245,
    "question": "In February 2026, the Uttar Pradesh Government announced a plan to establish India’s first National Cow Culture Museum in which district of the state to promote tourism?",
    "answer": "Mathura"
  },
  {
    "id": "qa-97",
    "page": 245,
    "question": "In February 2026, which of the following state governments took the important decision to declare recurring tidal floods in its coastal areas as a state-specific disaster?",
    "answer": "Kerala"
  },
  {
    "id": "qa-98",
    "page": 245,
    "question": "Which state has declared the year 2026 as the ‘Year of Agriculture’?",
    "answer": "Madhya Pradesh"
  },
  {
    "id": "qa-99",
    "page": 245,
    "question": "Where was the centenary celebration of the OlChiki script of the Santali language held?",
    "answer": "New Delhi"
  },
  {
    "id": "qa-100",
    "page": 245,
    "question": "In which state was the National Arogya Mela 2026 organised?",
    "answer": "Maharashtra"
  },
  {
    "id": "qa-101",
    "page": 245,
    "question": "Which port has become the first in India to initiate the deployment of an advanced Anti-Drone Security System?",
    "answer": "V. O. Chidambaranar Port (VOC Port) (Tamil Nadu) Port) ("
  },
  {
    "id": "qa-102",
    "page": 245,
    "question": "Which state has recently launched the ‘Jal-Parab’ wildlife conservation and water support campaign? ‘",
    "answer": "Gujarat"
  },
  {
    "id": "qa-103",
    "page": 245,
    "question": "In which city of Uttar Pradesh did the Indian Army’s Central Command host its first-ever Strategic Communication Conclave in March 2026?",
    "answer": "Lucknow"
  },
  {
    "id": "qa-104",
    "page": 245,
    "question": "Which Indian cyclist from Uttar Pradesh recently completed a journey to the Everest Base Camp at an altitude of 5,364 meters to spread the message of ‘Climate Action’?",
    "answer": "Divya Singh"
  },
  {
    "id": "qa-105",
    "page": 245,
    "question": "What is the name of the Humanitarian Assistance and Disaster Relief (HADR) mission launched by the Indian Army's Trishakti Corps in North Sikkim to evacuate stranded tourists?",
    "answer": "Operation Him Setu Him Setu)"
  },
  {
    "id": "qa-106",
    "page": 246,
    "question": "What is the name of India’s state-of-the-art Ocean Research Vessel recently launched by the Union Minister at the Garden Reach Shipbuilders & Engineers (GRSE) shipyard in Kolkata?",
    "answer": "ORV Sagar Manthan ORV Manthan)"
  },
  {
    "id": "qa-107",
    "page": 246,
    "question": "Which country was ranked first in the business climate index among 41 global markets in the Global Business Climate Survey 2026 published by the Swedish Chamber of Commerce in India (SCCI)?",
    "answer": "India"
  },
  {
    "id": "qa-108",
    "page": 246,
    "question": "Where was the five-day Combined Operational Review and Evaluation (CORE) Programme 2026, aimed at fostering tri-service jointness and civil military synergy, organized in September 2026?",
    "answer": "Manekshaw Centre, New Delhi"
  },
  {
    "id": "qa-109",
    "page": 246,
    "question": "Which state government has announced the deployment of a dedicated 'Parali Protection Force' supported by drone surveillance and late-night patrols to curb paddy stubble burning?",
    "answer": "Haryana"
  },
  {
    "id": "qa-110",
    "page": 246,
    "question": "Which international organization recently published the 'State of Global Water Resources 2025' report?",
    "answer": "World Meteorological Organization (WMO)"
  },
  {
    "id": "qa-111",
    "page": 246,
    "question": "Which international organization released the guidance update and global report titled 'Artificial intelligence-related health research: ethics review and oversight'?",
    "answer": "World Health Organization (WHO)"
  },
  {
    "id": "qa-112",
    "page": 246,
    "question": "By which year has India committed to eliminating Hepatitis B and C as public health threats?",
    "answer": "2030"
  },
  {
    "id": "qa-113",
    "page": 247,
    "question": "Which state recently launched the 'Thaimaaman Thanga Mothiram Thittam' to provide a free 1-gram, 22-carat gold ring and a baby care kit to newborns?",
    "answer": "Tamil Nadu"
  },
  {
    "id": "qa-114",
    "page": 247,
    "question": "Sohar Port, recently seen in the news as a strategic alternative gateway for Indian cargo amid maritime disruptions in the Strait of Hormuz, is located in which country?",
    "answer": "Oman"
  },
  {
    "id": "qa-115",
    "page": 247,
    "question": "Which state will become the first in India to introduce a mandatory computer based Hazard Perception Test (HPT) for driving licence applicants from December 2026?",
    "answer": "Kerala"
  },
  {
    "id": "qa-116",
    "page": 247,
    "question": "In September 2026, to what amount did the Union Cabinet approve raising the mandatory monthly wage ceiling under the Employees' Provident Fund Organisation (EPFO) from ₹15,000?",
    "answer": "₹25,000 per month ₹25,000"
  },
  {
    "id": "qa-117",
    "page": 247,
    "question": "In September 2026, from which railway station did Union Home Minister Amit Shah flag off India’s first LNG-powered train?",
    "answer": "Sabarmati Railway Station, Ahmedabad (Gujarat)"
  },
  {
    "id": "qa-118",
    "page": 247,
    "question": "Where was the foundation stone for India’s first port-based e-methanol production facility recently laid?",
    "answer": "Deendayal Port Authority (DPA), Kandla (Gujarat)"
  },
  {
    "id": "qa-119",
    "page": 247,
    "question": "What Merchant Discount Rate (MDR) has been introduced under the new NPCI framework on specified person-to-merchant (P2M) UPI transactions exceeding ₹2,000?",
    "answer": "0.4%"
  },
  {
    "id": "qa-120",
    "page": 247,
    "question": "Which Indian archer recently created history by becoming the first Indian man to win an individual gold medal at the Archery World Cup Final 2026 held in",
    "answer": "Dhiraj Bommadevara"
  },
  {
    "id": "qa-121",
    "page": 248,
    "question": "When was the month-long nationwide public service campaign 'Seva Sankalp Abhiyan 2026' , which has recently been in the news organized?",
    "answer": "September 17 to October 17, 2026 17"
  }
]

const groups = [
  { id: "all", name: "All Questions", hi: "सभी प्रश्न" },
  { id: "234-238", name: "Questions from pages 234–238", hi: "पृष्ठ 234–238" },
  { id: "239-243", name: "Questions from pages 239–243", hi: "पृष्ठ 239–243" },
  { id: "244-248", name: "Questions from pages 244–248", hi: "पृष्ठ 244–248" },
]

type Practice = { en: string; hi: string; options: string[]; correct: number; reason: string; reasonHi: string }
const practice: Practice[] = [
  { en: "Where was the new Regional Meteorological Centre inaugurated in June 2026?", hi: "जून 2026 में नया क्षेत्रीय मौसम विज्ञान केंद्र कहाँ उद्घाटित हुआ?", options: ["Lucknow", "Bengaluru", "Jaipur", "Ahmedabad"], correct: 0, reason: "The source lists Lucknow, Uttar Pradesh.", reasonHi: "स्रोत में लखनऊ, उत्तर प्रदेश दिया गया है।" },
  { en: "Which State/UT recorded the lowest TFR under NFHS-6 according to the source?", hi: "स्रोत के अनुसार NFHS-6 में सबसे कम कुल प्रजनन दर किस राज्य/केंद्रशासित प्रदेश की थी?", options: ["Kerala", "Andaman & Nicobar Islands", "Goa", "Sikkim"], correct: 1, reason: "Andaman and Nicobar Islands is listed at 0.9.", reasonHi: "अंडमान एवं निकोबार द्वीपसमूह की दर 0.9 बताई गई है।" },
  { en: "Which country is linked to the UPI–NPI remittance service?", hi: "UPI–NPI सीमा-पार धन प्रेषण सेवा किस देश से जुड़ी है?", options: ["Bhutan", "Sri Lanka", "Nepal", "UAE"], correct: 2, reason: "The country listed is Nepal.", reasonHi: "स्रोत में नेपाल का नाम है।" },
  { en: "Where is India's Bhadla Solar Park located?", hi: "भड़ला सौर ऊर्जा पार्क किस राज्य में है?", options: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Punjab"], correct: 0, reason: "Bhadla Solar Park is in Rajasthan.", reasonHi: "भड़ला सोलर पार्क राजस्थान में है।" },
  { en: "Who is listed as the first footballer to receive the Princess of Asturias Award?", hi: "प्रिंसेस ऑफ अस्तूरियस पुरस्कार पाने वाले पहले फुटबॉलर किसे बताया गया है?", options: ["Cristiano Ronaldo", "Lionel Messi", "Kylian Mbappé", "Luka Modrić"], correct: 1, reason: "The PDF's answer is Lionel Messi.", reasonHi: "PDF में उत्तर लियोनेल मेसी है।" },
  { en: "Which pass is associated with India–China trade resumption?", hi: "भारत–चीन सीमा व्यापार फिर शुरू होने से कौन-सा दर्रा जुड़ा है?", options: ["Nathu La", "Khardung La", "Lipulekh", "Rohtang"], correct: 2, reason: "The source names Lipulekh Pass.", reasonHi: "स्रोत में लिपुलेख दर्रा बताया गया है।" },
]

function QuestionCard({ item, number }: { item: SourceQA; number: number }) {
  const [open, setOpen] = useState(false)
  return <article id={item.id} className="scroll-mt-28 overflow-hidden rounded-xl border bg-card shadow-sm">
    <div className="p-5 sm:p-6"><div className="mb-3 flex items-center justify-between gap-2"><span className="text-xs font-semibold uppercase tracking-wide text-purple-700">Question {number}</span>
    {/* <span className="text-xs text-muted-foreground">Source PDF p. {item.page}</span> */}
    </div><h3 className="text-sm font-semibold leading-7 sm:text-base">{item.question}</h3><button type="button" onClick={() => setOpen(v => !v)} aria-expanded={open} className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg border bg-muted/30 px-4 py-2 text-sm font-semibold text-purple-700 hover:bg-purple-50">{open ? "Hide Answer / उत्तर छिपाएँ" : "Reveal Answer / उत्तर देखें"}<ChevronRight className={`h-4 w-4 transition-transform ${open ? "rotate-90" : ""}`} /></button>{open && <div role="status" className="mt-4 rounded-lg border-l-4 border-green-500 bg-green-50 p-4"><p className="mb-1 text-xs font-bold uppercase text-green-700">Answer / उत्तर</p><p className="text-sm font-medium leading-7 text-green-900">{item.answer}</p></div>}</div>
  </article>
}

function MCQCard({ item, index }: { item: Practice; index: number }) {
  const [choice, setChoice] = useState<number | null>(null)
  return <div className="rounded-xl border bg-card p-5"><h3 className="font-semibold">{index + 1}. {item.en}</h3><p lang="hi" className="mt-1 text-sm text-muted-foreground">{item.hi}</p><div className="mt-4 space-y-2">{item.options.map((option, i) => <button type="button" disabled={choice !== null} key={i} onClick={() => setChoice(i)} className={`w-full rounded-lg border p-3 text-left text-sm ${choice !== null && i === item.correct ? "border-green-400 bg-green-50" : choice === i ? "border-red-400 bg-red-50" : "hover:bg-muted/40"}`}><span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>{option}</button>)}</div>{choice !== null && <div role="status" className={`mt-4 rounded-lg border-l-4 p-3 ${choice === item.correct ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}><p className="flex items-center gap-2 text-sm font-semibold">{choice === item.correct ? <CheckCircle2 className="h-4 w-4" /> : <HelpCircle className="h-4 w-4" />}{choice === item.correct ? "Correct! / सही उत्तर!" : `Correct: ${String.fromCharCode(65 + item.correct)}`}</p><p className="mt-2 text-sm">{item.reason}</p><p lang="hi" className="mt-1 text-sm text-muted-foreground">{item.reasonHi}</p><button type="button" onClick={() => setChoice(null)} className="mt-3 text-xs underline">Try again / फिर प्रयास करें</button></div>}</div>
}

export default function OneLinerCurrentAffairs2026Page() {
  const [search, setSearch] = useState("")
  const [group, setGroup] = useState("all")
  const filtered = useMemo(() => { const query = search.trim().toLowerCase(); return questions.filter(q => (group === "all" || (group === "234-238" && q.page <= 238) || (group === "239-243" && q.page >= 239 && q.page <= 243) || (group === "244-248" && q.page >= 244)) && `${q.question} ${q.answer}`.toLowerCase().includes(query)) }, [search, group])
  return <div className="min-h-screen bg-background"><FooterLinkNavbar />
    <header className="bg-gradient-to-b from-purple-50 to-background px-4 pb-12 pt-28 sm:px-6 md:pb-16 md:pt-32 lg:px-8"><div className="mx-auto max-w-5xl"><Link href="/current-affairs" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:underline"><ArrowLeft className="h-4 w-4" />Back to Current Affairs</Link><div className="mb-4 flex"><span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700"><Sparkles className="h-4 w-4" />Current Affairs · One-Liner Q&A</span></div><h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">One-Liner Current Affairs Q&A 2026</h1><p lang="hi" className="mb-6 text-xl text-muted-foreground">एक-पंक्ति करेंट अफेयर्स प्रश्नोत्तर 2026</p><div className="flex flex-wrap gap-3 text-sm"><span className="rounded-full border bg-card px-4 py-2">{questions.length} Extracted Q&As</span>
    {/* <span className="rounded-full border bg-card px-4 py-2">PDF pp. 234–248</span> */}
    <span className="rounded-full border bg-card px-4 py-2">{practice.length} Interactive MCQs</span></div></div></header>
    <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        {/* <section className="mb-10"><div className="mb-4 flex items-center gap-2"><Languages className="h-5 w-5 text-purple-700" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div><div className="grid gap-4 md:grid-cols-2"><div className="rounded-xl border border-purple-100 bg-purple-50/60 p-5"><h3 className="mb-2 text-xs font-bold uppercase text-purple-700">English</h3><p className="text-sm leading-7">A searchable collection of one-liner competitive-exam current affairs questions and answers reconstructed from the supplied PDF, covering places, government initiatives, science, awards, the economy and more.</p></div><div className="rounded-xl border border-fuchsia-100 bg-fuchsia-50/60 p-5"><h3 className="mb-2 text-xs font-bold text-fuchsia-700">हिन्दी</h3><p lang="hi" className="text-sm leading-7">दिए गए PDF से प्रतियोगी परीक्षाओं के लिए एक-पंक्ति प्रश्नोत्तर। स्थान, योजनाएँ, विज्ञान, पुरस्कार, अर्थव्यवस्था और अन्य विषय शामिल हैं। अभ्यास MCQs में हिंदी स्पष्टीकरण भी दिए गए हैं।</p></div></div><p className="mt-3 text-xs text-muted-foreground">Source note: The PDF's Hindi font encoding was damaged. English questions and answers are reconstructed for readability; consult the original PDF for source context and independently verify time-sensitive claims.</p></section> */}
      {/* <section id="question-index" className="mb-10 scroll-mt-28"><div className="mb-4 flex items-center gap-2"><BookOpen className="h-5 w-5 text-purple-700" /><h2 className="text-2xl font-bold">Question Bank / प्रश्न संग्रह</h2></div>
      <div className="rounded-xl border bg-card p-4 sm:p-5"><label htmlFor="qa-search" className="relative mb-4 block"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><input id="qa-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search question or answer / प्रश्न खोजें" className="h-10 w-full rounded-lg border bg-background pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-purple-200" />{search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search" className="absolute right-3 top-3"><X className="h-4 w-4" /></button>}</label><label htmlFor="page-group" className="mb-2 block text-xs font-semibold text-muted-foreground">Source page group / पृष्ठ समूह</label><select id="page-group" value={group} onChange={e => setGroup(e.target.value)} className="h-10 w-full rounded-lg border bg-background px-3 text-sm">{groups.map(g => <option key={g.id} value={g.id}>{g.name} / {g.hi}</option>)}</select><p className="mt-3 text-sm text-muted-foreground">Showing {filtered.length} of {questions.length} questions.</p></div></section> */}
      <section className="mb-10"><div className="space-y-4">{filtered.map((q, i) => <QuestionCard key={q.id} item={q} number={i + 1} />)}{filtered.length === 0 && <p className="rounded-xl border p-5 text-sm text-muted-foreground">No matching questions found.</p>}</div></section>
      <section id="practice" className="mb-10"><div className="mb-4 flex items-center gap-2"><Target className="h-5 w-5 text-purple-700" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2></div><div className="space-y-4">{practice.map((item, i) => <MCQCard key={i} item={item} index={i} />)}</div></section>
      <div className="flex flex-col items-center justify-between gap-3 border-t pt-8 sm:flex-row"><Link href="/current-affairs"><Button variant="outline" className="cursor-pointer gap-2"><ArrowLeft className="h-4 w-4" />Back to Current Affairs</Button></Link><Link href="/mock-test"><Button className="cursor-pointer gap-2">Practice Quiz <Target className="h-4 w-4" /></Button></Link></div>
    </main><FooterLinkFooter /></div>
}