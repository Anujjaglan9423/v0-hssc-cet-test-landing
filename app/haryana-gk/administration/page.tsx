"use client";

import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronRight,
    Languages,
    ChevronDown,
    HelpCircle,
    ArrowLeft,
    AlertCircle,
    UserRound,
    Landmark as LandmarkIcon,
    Calendar as CalendarIcon,
    History as HistoryIcon,
    MapPin,
    PartyPopper,
    Gavel as GavelIcon,
    Briefcase as BriefcaseIcon,
    Vote as VoteIcon,
    Users as UsersIcon2,
    Building as BuildingIcon2,
    Flag as FlagIcon,
    Crown as CrownIcon,
    Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HaryanaAdministrativeStructurePage() {
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
            questionHindi: "हरियाणा का पहला मुख्यमंत्री कौन था?",
            questionEnglish: "Who was the first Chief Minister of Haryana?",
            answerHindi: "पंडित भगवत दयाल शर्मा हरियाणा के पहले मुख्यमंत्री थे। उनका कार्यकाल 1 नवंबर, 1966 से 23 मार्च, 1967 तक रहा।",
            answerEnglish: "Pandit Bhagwat Dayal Sharma was the first Chief Minister of Haryana. His tenure was from 1st November, 1966 to 23rd March, 1967."
        },
        {
            questionHindi: "हरियाणा की पहली महिला विधानसभा अध्यक्ष कौन थी?",
            questionEnglish: "Who was the first woman Speaker of Haryana Legislative Assembly?",
            answerHindi: "शन्नो देवी हरियाणा विधानसभा की पहली महिला अध्यक्ष थीं। वह भारत की पहली महिला अध्यक्ष भी थीं।",
            answerEnglish: "Shanno Devi was the first woman Speaker of Haryana Legislative Assembly. She was also the first woman Speaker of India."
        },
        {
            questionHindi: "हरियाणा में सबसे अधिक बार मुख्यमंत्री बनने वाला नेता कौन है?",
            questionEnglish: "Who became Chief Minister of Haryana the most number of times?",
            answerHindi: "ओम प्रकाश चौटाला ने 5 बार हरियाणा के मुख्यमंत्री के रूप में शपथ ली।",
            answerEnglish: "Om Prakash Chautala was sworn in as the Chief Minister of Haryana for 5 times."
        },
        {
            questionHindi: "हरियाणा में सबसे कम समय के लिए मुख्यमंत्री कौन रहा?",
            questionEnglish: "Who served the shortest tenure as Chief Minister of Haryana?",
            answerHindi: "ओम प्रकाश चौटाला का सबसे छोटा कार्यकाल (5 दिन) रहा - 12 जुलाई, 1990 से 17 जुलाई, 1990 तक।",
            answerEnglish: "Om Prakash Chautala served the shortest tenure (5 days) as Chief Minister of Haryana - from 12th July, 1990 to 17th July, 1990."
        },
        {
            questionHindi: "हरियाणा में सबसे लंबे समय तक मुख्यमंत्री कौन रहा?",
            questionEnglish: "Who served the longest tenure as Chief Minister of Haryana?",
            answerHindi: "भूपेंद्र सिंह हुड्डा का कार्यकाल सबसे लंबा रहा - 5 मार्च, 2005 से 24 अक्टूबर, 2014 तक।",
            answerEnglish: "Bhupinder Singh Hooda served the longest tenure as Chief Minister of Haryana - from 5th March, 2005 to 24th October, 2014."
        },
        {
            questionHindi: "हरियाणा में कितनी बार राष्ट्रपति शासन लगा?",
            questionEnglish: "How many times was President's Rule imposed in Haryana?",
            answerHindi: "हरियाणा में तीन बार राष्ट्रपति शासन लगा - 1967, 1977 और 1991 में।",
            answerEnglish: "President's Rule was imposed three times in Haryana - in 1967, 1977 and 1991."
        },
        {
            questionHindi: "हरियाणा की विधानसभा में कितनी सीटें हैं?",
            questionEnglish: "How many seats are there in Haryana Legislative Assembly?",
            answerHindi: "हरियाणा विधानसभा में 90 सीटें हैं। इनमें से 17 सीटें अनुसूचित जातियों के लिए आरक्षित हैं।",
            answerEnglish: "Haryana Legislative Assembly has 90 seats. Out of these, 17 seats are reserved for Scheduled Castes."
        },
        {
            questionHindi: "हरियाणा के पहले राज्यपाल कौन थे?",
            questionEnglish: "Who was the first Governor of Haryana?",
            answerHindi: "धर्मवीर हरियाणा के पहले राज्यपाल थे। उनका कार्यकाल 1 नवंबर, 1966 से 14 सितंबर, 1967 तक रहा।",
            answerEnglish: "Dharma Vira was the first Governor of Haryana. His tenure was from 1st November, 1966 to 14th September, 1967."
        }
    ];

    // Section 1: Legislature Overview
    const legislatureOverview = {
        titleHindi: "हरियाणा का विधानमंडल",
        titleEnglish: "Legislature of Haryana",
        contentHindi: "हरियाणा राज्य में एक सदनीय विधानमंडल है जिसे विधान सभा के नाम से जाना जाता है। एक सदनीय विधानमंडल वह विधानमंडल है जिसमें एक सदन होता है। राज्य विधानमंडलों के पास विशेष शक्तियाँ होती हैं जो भारतीय संविधान की सातवीं अनुसूची में सूचीबद्ध हैं। हरियाणा विधान सभा का कार्यकाल 5 वर्ष (अनुच्छेद 172) का होता है, जब तक कि राज्यपाल द्वारा मुख्यमंत्री के अनुरोध पर इसे पहले भंग न कर दिया जाए। प्रत्येक सदस्य के पास भारतीय नागरिकता होनी चाहिए और उसकी आयु 25 वर्ष से अधिक होनी चाहिए (अनुच्छेद 173)।",
        contentEnglish: "The state of Haryana has unicameral legislature which is known as Legislative Assembly. Unicameral legislature is legislature which consists of one house. State legislatures have exclusive powers that are listed in Seventh Schedule of Indian Constitution. The term of Haryana Legislative Assembly is of 5 years (Article 172), unless earlier dissolved by Governor on request of Chief Minister. Each member should have Indian citizenship and be more than 25 years of age (Article 173)."
    };

    // Section 2: Legislative Assembly Details
    const legislativeAssembly = {
        titleHindi: "हरियाणा विधान सभा",
        titleEnglish: "Legislative Assembly of Haryana",
        contentHindi: "विधान सभा के सदस्य सार्वभौमिक वयस्क मताधिकार और प्रत्यक्ष चुनाव द्वारा चुने जाते हैं। मतदान के लिए न्यूनतम आयु 18 वर्ष है। अध्यक्ष को विधान सभा के सदस्यों द्वारा इसे सुचारू रूप से चलाने के लिए चुना जाता है। आम तौर पर, अध्यक्ष सदन में वोट नहीं करता है लेकिन वह निर्णायक वोट का उपयोग करता है। अध्यक्ष यह निर्धारित करता है कि कोई विधेयक धन विधेयक है या नहीं। जब हरियाणा राज्य का गठन 1 नवंबर, 1966 को हुआ, तो प्रथम परिसीमन आयोग ने विधान सभा में 54 सीटें निर्धारित कीं, जिनमें से 10 सीटें अनुसूचित जातियों के लिए आरक्षित थीं। मार्च 1967 में द्वितीय परिसीमन आयोग और 1977 में तृतीय परिसीमन आयोग ने सीटों को क्रमशः 81 और 90 तक बढ़ा दिया। आज तक, राज्यपाल द्वारा हरियाणा विधान सभा में किसी सदस्य को नामित नहीं किया गया है। अनुच्छेद 332 के अनुसार, अनुसूचित जातियों और अनुसूचित जनजातियों के लिए सीटें आरक्षित होंगी। इस प्रावधान के साथ, हरियाणा ने अनुसूचित जातियों के लिए 17 सीटें आरक्षित की हैं।",
        contentEnglish: "The members of Legislative Assembly are elected by Universal Adult Franchise and direct election. The minimum age for voting is 18 years. The Speaker is elected by the members of the Legislative Assembly to run it smoothly. Generally, the Speaker does not vote in the house but he uses the deciding vote. The Speaker determined whether a bill is money bill or not. When Haryana State was formed on 1st November, 1966, the First Delimitation Commission determine 54 seats in the Legislative Assembly, of which 10 seats were reserved for Scheduled Castes. In March, 1967 the Second Delimitation Commission and in 1977, the Third Delimitation Commission increased the seats to 81 and 90 respectively. Till date, no member has been nominated by the Governor in the Legislative Assembly of Haryana. As per Article 332, seats shall be reserved for the Scheduled Castes and Scheduled Tribes. With this provision, Haryana reserved 17 seats for the Scheduled Castes."
    };

    // Section 3: Reserved SC Seats List
    const scReservedSeats = [
        "Pataudi", "Bawani Khera", "Jhajjar", "Kharkhauda", "Shahabad",
        "Narwana", "Hodal", "Kalanaur", "Issrana", "Guhla", "Mulana",
        "Ratia", "Uklana", "Kalanwali", "Sadhaura", "Bawal", "Nilokheri"
    ];

    // Section 4: Various Legislative Assemblies of Haryana
    const legislativeAssemblies = [
        { number: "First", period: "1-11-1966 to 28-02-1967", members: "54", chiefMinister: "Bhagwat Dayal Sharma", speaker: "Shanno Devi", notes: "Smallest assembly of the state" },
        { number: "Second", period: "17-03-1967 to 21-11-1967", members: "81", chiefMinister: "Rao Virendra Singh", speaker: "Shri Chand and Manphool Singh", notes: "First Non-Congress Assembly; First President's Rule imposed" },
        { number: "Third", period: "15-07-1968 to 21-01-1972", members: "81", chiefMinister: "Chaudhary Bansi Lal", speaker: "Ran Singh", notes: "First Census in Haryana; First state to electrify all villages (29 Nov 1970)" },
        { number: "Fourth", period: "3-04-1972 to 30-04-1977", members: "81", chiefMinister: "Bansi Lal & Banarasi Das Gupta", speaker: "Banarasi Das Gupta & Swaroop Singh", notes: "Second President's Rule; Longest tenure" },
        { number: "Fifth", period: "04-07-1977 to 19-04-1982", members: "90", chiefMinister: "Bhajanal & Bansi Lal", speaker: "Ran Singh & Col Ram Singh", notes: "Sushma Swaraj became youngest Cabinet Minister (25 years)" },
        { number: "Sixth", period: "24-06-1982 to 23-06-1987", members: "90", chiefMinister: "Bhajanal & Bansi Lal", speaker: "Sardar Tara Singh", notes: "-" },
        { number: "Seventh", period: "09-07-1987 to 06-04-1991", members: "90", chiefMinister: "Devi Lal, OP Chautala (3 times), Banarasi Das Gupta, Hukum Singh", speaker: "Harmohendra Singh Chaddha", notes: "Four Chief Ministers sworn for 6 times" },
        { number: "Eighth", period: "09-07-1991 to 10-05-1996", members: "90", chiefMinister: "Chaudhary Bhajanal", speaker: "Ishwar Singh", notes: "Panipat organised on 1st January, 1992" },
        { number: "Ninth", period: "22-05-1996 to 14-12-1999", members: "90", chiefMinister: "Chaudhary Bansi Lal", speaker: "Chatar Singh Chauhan", notes: "Ban on alcohol from 1st July 1996 to 1st April 1998" },
        { number: "Tenth", period: "09-03-2000 to 08-03-2005", members: "90", chiefMinister: "Om Prakash Chautala", speaker: "Satbir Singh", notes: "-" },
        { number: "Eleventh", period: "21-03-2005 to 21-08-2009", members: "90", chiefMinister: "Bhupinder Singh Hooda", speaker: "Harmohender Singh Chaddha & Dr Raghuvi Kadiyan", notes: "-" },
        { number: "Twelfth", period: "28-10-2009 to 20-10-2014", members: "90", chiefMinister: "Bhupinder Singh Hooda", speaker: "Harmohender Singh Chaddha & Kuldeep Sharma", notes: "-" },
        { number: "Thirteenth", period: "20-10-2014 to 21-10-2019", members: "90", chiefMinister: "Manohar Lal Khattar", speaker: "Kanwar Pal Gurjar", notes: "Highest number of women MLA (13) elected" },
        { number: "Fourteenth", period: "04-11-2019 to Present", members: "90", chiefMinister: "Manohar Lal Khattar", speaker: "Gyan Chand Gupta", notes: "Deputy CM: Dushyant Chautala" }
    ];

    // Section 5: List of Speakers Table
    const speakersList = [
        { name: "Shanno Devi", from: "6th December, 1966", to: "17th March, 1967", notes: "First woman Speaker of India" },
        { name: "Rao Birendra Singh", from: "17th March, 1967", to: "23rd March, 1967", notes: "Shortest term (16 days)" },
        { name: "Shri Chandra", from: "30th March, 1967", to: "19th July, 1967", notes: "-" },
        { name: "Manphool Singh", from: "20th July, 1967", to: "21st November, 1967", notes: "-" },
        { name: "Ran Singh", from: "15th July, 1968", to: "3rd April, 1972", notes: "-" },
        { name: "Banarsi Das Gupta", from: "3rd April, 1972", to: "15th November, 1973", notes: "-" },
        { name: "Swaroop Singh", from: "16th November, 1973", to: "4th July, 1977", notes: "-" },
        { name: "Ran Singh", from: "4th July, 1977", to: "8th May, 1978", notes: "-" },
        { name: "Karnal Ram Singh", from: "15th May, 1978", to: "24th June, 1982", notes: "-" },
        { name: "Sardar Tara Singh", from: "24th June, 1982", to: "9th July, 1987", notes: "Longest term" },
        { name: "Harmohender Singh Chaddha", from: "9th July, 1987", to: "9th July, 1991", notes: "-" },
        { name: "Ishwar Singh", from: "9th July, 1991", to: "22nd May, 1996", notes: "-" },
        { name: "Chhatar Singh Chauhan", from: "22nd May, 1996", to: "27th July, 1999", notes: "-" },
        { name: "Ashok Kumar Arora", from: "28th July, 1999", to: "1st March, 2000", notes: "-" },
        { name: "Satbeer Singh Kadian", from: "9th March, 2000", to: "21st March, 2005", notes: "-" },
        { name: "Harmohender Singh Chaddha", from: "21st March, 2005", to: "12th January, 2006", notes: "-" },
        { name: "Dr Raghuvi Singh Kadyaan", from: "13th January, 2006", to: "27th October, 2009", notes: "-" },
        { name: "Harmohender Singh Chaddha", from: "28th October, 2009", to: "28th January, 2011", notes: "-" },
        { name: "Kuldeep Sharma", from: "4th March, 2011", to: "2nd November, 2014", notes: "-" },
        { name: "Kanwar Pal Gurjar", from: "3rd November, 2014", to: "2nd November, 2019", notes: "-" },
        { name: "Gyan Chand Gupta", from: "4th November, 2019", to: "Incumbent", notes: "-" }
    ];

    // Section 6: Representation in Parliament
    const parliamentRepresentation = {
        titleHindi: "संसद में हरियाणा का प्रतिनिधित्व",
        titleEnglish: "Representation of Haryana in Parliament",
        contentHindi: "राज्य सभा में हरियाणा की सीटों की संख्या 5 है, जबकि लोक सभा में सीटों की संख्या 10 है। क्षेत्रफल की दृष्टि से सबसे बड़ा लोकसभा क्षेत्र भिवानी-महेंद्रगढ़ है, जबकि जनसंख्या की दृष्टि से सबसे बड़ा लोकसभा क्षेत्र फरीदाबाद है। भारत के परिसीमन आयोग, 1971 की रिपोर्ट के अनुसार, सिरसा और अंबाला लोकसभा क्षेत्रों की सीटें अनुसूचित जातियों के लिए आरक्षित हैं।",
        contentEnglish: "The number of seats of Haryana in Rajya Sabha is 5, while number of seats in Lok Sabha is 10. The largest constituency in terms of area is Bhiwani-Mahendragarh while in terms of population, the largest Lok Sabha constituency is Faridabad. According to the report of Delimitation Commission of India, 1971, the seats of Sirsa and Ambala Lok Sabha constituency are reserved for Scheduled Castes."
    };

    // Section 7: Haryana Executive Overview
    const executiveOverview = {
        titleHindi: "हरियाणा की कार्यपालिका",
        titleEnglish: "Haryana Executive",
        contentHindi: "कार्यपालिका सरकार का वह हिस्सा है जिसके पास राज्य के दिन-प्रतिदिन के प्रशासन की एकमात्र अधिकारिता और जिम्मेदारी होती है। एक राज्य की कार्यपालिका में राज्यपाल, मुख्यमंत्री, मंत्रिपरिषद और महाधिवक्ता शामिल होते हैं।",
        contentEnglish: "The Executive is the part of government that has sole authority and responsibility for the day-to-day administration of the state. The Executive of a state consists of the Governor, the Chief Minister, the Council of Ministers and the Advocate General."
    };

    // Section 8: Governor Details
    const governorDetails = {
        titleHindi: "राज्यपाल",
        titleEnglish: "Governor",
        contentHindi: "राज्यपाल कार्यपालिका का प्रमुख होता है। राज्यपाल की नियुक्ति राष्ट्रपति द्वारा प्रधान मंत्री की सलाह पर 5 वर्ष की अवधि के लिए की जाती है। हरियाणा के राज्यपाल का शपथ ग्रहण चंडीगढ़ उच्च न्यायालय के मुख्य न्यायाधीश द्वारा कराया जाता है। राजभवन हरियाणा के राज्यपाल का आवासीय स्थान है।",
        contentEnglish: "The Governor is the head of the Executive. The Governor is appointed by the President for a term of 5 years on the advice of the Prime Minister. The oath of office to the Governor of Haryana is administered by the Chief Justice of the Chandigarh High Court. Raj Bhawan is the residential place of the Governor of Haryana."
    };

    // Section 9: List of Governors Table
    const governorsList = [
        { name: "Dharma Vira", from: "1st November, 1966", to: "14th September, 1967", notes: "First Governor" },
        { name: "BN Chakraborty", from: "15th September, 1967", to: "26th March, 1976", notes: "Longest tenure" },
        { name: "RS Narula", from: "27th March, 1976", to: "13th August, 1976", notes: "-" },
        { name: "Jaisukh Lal Hathi", from: "14th August, 1976", to: "23rd September, 1977", notes: "-" },
        { name: "Harcharan Singh Barar", from: "24th September, 1977", to: "9th December, 1979", notes: "-" },
        { name: "SS Sandhwalia", from: "10th December, 1979", to: "27th February, 1980", notes: "-" },
        { name: "GD Tapase", from: "28th February, 1980", to: "13th June, 1984", notes: "-" },
        { name: "SMH Barni", from: "14th June, 1984", to: "21st February, 1988", notes: "-" },
        { name: "HA Barari", from: "22nd February, 1988", to: "6th February, 1990", notes: "-" },
        { name: "Dhanik Lal Mandal", from: "7th February, 1990", to: "13th June, 1995", notes: "-" },
        { name: "Mahaveer Prasad", from: "14th June, 1995", to: "18th June, 2000", notes: "-" },
        { name: "Babu Parmanand", from: "19th June, 2000", to: "1st July, 2004", notes: "-" },
        { name: "Om Prakash Verma", from: "2nd July, 2004", to: "7th July, 2004", notes: "Smallest tenure" },
        { name: "AR Kidwai", from: "7th July, 2004", to: "27th July, 2009", notes: "-" },
        { name: "Jagannath Pahadia", from: "27th July, 2009", to: "26th July, 2014", notes: "-" },
        { name: "Kaptan Singh Solanki", from: "27th July, 2014", to: "24th August, 2018", notes: "-" },
        { name: "Satyadev Narayan Arya", from: "25th August, 2018", to: "Incumbent", notes: "-" }
    ];

    // Section 10: President's Rule
    const presidentsRule = [
        { number: "First", period: "2nd November, 1967 to 22nd May, 1968", president: "Zakir Hussain", pm: "Indira Gandhi", governor: "VN Chakravarthy" },
        { number: "Second", period: "30th April, 1977 to 21st June, 1977", president: "BD Jatti", pm: "Morarji Desai", governor: "Jaisukh Lal Hathi" },
        { number: "Third", period: "6th April, 1991 to 23rd July, 1991", president: "R Venkataraman", pm: "PV Narsimha Rao", governor: "Dhanik Lal Mandal" }
    ];

    // Section 11: Chief Ministers of Haryana - Detailed
    const chiefMinisters = [
        {
            name: "Chaudhary Devi Lal",
            nameHindi: "चौधरी देवी लाल",
            born: "25th September, 1915 in Teja Khera (Chautala), Sirsa",
            titles: "Tau, King-maker, Jan-nayak, Sher-e-Haryana",
            achievements: "Popular farmer leader; Deputy Prime Minister (1989-91); Started Nyaya Yudh (Battle for Justice) in 1975; Started old age pension in the state",
            died: "6th April, 2001 (Sangharsh Sthal on Yamuna river bank in Delhi)"
        },
        {
            name: "Banarasi Das Gupta",
            nameHindi: "बनारसी दास गुप्ता",
            born: "5th November, 1917 in Bhiwani district",
            achievements: "Freedom fighter; Served as Speaker, Deputy CM and CM; Participated in Bhoodan movement; Fought against dowry, untouchability, child marriage; Editor of Apna Desh and Hariyana Kesri; Author of 'Panchayti Raj Kyu aur Kaise'",
            died: "29th August, 2007"
        },
        {
            name: "Pandit Bhagwat Dayal Sharma",
            nameHindi: "पंडित भगवत दयाल शर्मा",
            born: "26th January, 1918 in Beri, Jhajjar",
            titles: "Pandit Ji",
            achievements: "First and only nominated CM of Haryana; Served as Governor of Odisha (1977) and Madhya Pradesh (1980-84); University of Health and Sciences, Rohtak and PGIMS named after him; Shortest tenure (143 days)",
            died: "22nd February, 1993"
        },
        {
            name: "Rao Birendra Singh",
            nameHindi: "राव बीरेंद्र सिंह",
            born: "20th February, 1921 in Nangal Pathani, Rewari",
            achievements: "First elected and non-Congress CM; Formed Vishal Haryana Party (1967) - first regional party of Haryana; Rewari separated from Mahendragarh (1989); First male Speaker (16 days - shortest tenure); Descendant of Rao Tula Ram (1857 rebellion)",
            died: "30th September, 2009"
        },
        {
            name: "Hukum Singh",
            nameHindi: "हुकुम सिंह",
            born: "1925 in Charkhi-Dadri, Bhiwani",
            achievements: "8th Chief Minister of Haryana",
            died: "26th February, 2015"
        },
        {
            name: "Chaudhary Bansi Lal",
            nameHindi: "चौधरी बंसी लाल",
            born: "26th August, 1927 in Golagarh, Bhiwani",
            titles: "Architect of Modern Haryana, Iron Man of Haryana",
            achievements: "Defence Minister (1975-77), Railway Minister (1984-86); Formed Haryana Vikas Party (1996); Youngest CM at age 41; First Jat CM; Banned alcohol (1996-98); Employed Lift and Fountain irrigation systems; Haryana became 100% electrified in 1970; Part of 'Lal trio' (Devi Lal, Bhajan Lal, Bansi Lal)",
            died: "28th March, 2006"
        },
        {
            name: "Bhajan Lal",
            nameHindi: "भजन लाल",
            born: "6th October, 1930 in Koranwali, Bahawalpur (now Pakistan)",
            achievements: "Two-time CM (1979-86 and 1991-96); Union Cabinet Minister, Agricultural Minister, Forest and Environment Minister; Formed Haryana Janhit Congress (2007); Longest term as CM (12 years, not in continuation)",
            died: "3rd June, 2011"
        },
        {
            name: "Chaudhary Om Prakash Chautala",
            nameHindi: "चौधरी ओम प्रकाश चौटाला",
            born: "1st January, 1935 in Sirsa district",
            achievements: "Sworn in as CM for 5 times; Shortest tenure (5 days) - 12th to 17th July, 1990; Son of Chaudhary Devi Lal; Leader of INLD",
            died: "-"
        },
        {
            name: "Bhupender Singh Hooda",
            nameHindi: "भूपेंद्र सिंह हुड्डा",
            born: "15th September, 1947 in Sanghi, Rohtak",
            achievements: "9th CM of Haryana; Longest tenure (5th March 2005 to 10th October 2014); First CM born in independent India; MP from Rohtak (1991,1996,1998,2004); Established 7 State Universities, 1 Central University and IIM Rohtak; Formulated New Industrial Policy and Sports Policy",
            died: "-"
        },
        {
            name: "Manohar Lal Khattar",
            nameHindi: "मनोहर लाल खट्टर",
            born: "5th May, 1954 in Nindana, Rohtak",
            achievements: "10th CM of Haryana; Member of RSS and BJP; First unmarried CM of Haryana; Known as '4th Lal of Haryana'; Announced all-woman police station in each district; Implemented 'Beti Bachao Beti Padhao' Yojana",
            died: "-"
        }
    ];

    // Section 12: List of Chief Ministers Table
    const cmList = [
        { name: "Pandit Bhagwat Dayal Sharma", from: "1st November, 1966", to: "23rd March, 1967", notes: "First CM" },
        { name: "Rao Birender Singh", from: "24th March, 1967", to: "21st November, 1967", notes: "First elected non-Congress CM" },
        { name: "President's Rule", from: "2nd November, 1967", to: "21st May, 1968", notes: "-" },
        { name: "Bansi Lal", from: "22nd May, 1968", to: "30th November, 1975", notes: "Youngest CM (41 years)" },
        { name: "Banarasi Das Gupta", from: "1st December, 1975", to: "30th April, 1977", notes: "-" },
        { name: "President's Rule", from: "30th April, 1977", to: "20th June, 1977", notes: "-" },
        { name: "Chaudhary Devi Lal", from: "21st June, 1977", to: "28th June, 1979", notes: "-" },
        { name: "Bhajan Lal", from: "29th June, 1979", to: "5th July, 1985", notes: "-" },
        { name: "Bansi Lal", from: "5th July, 1985", to: "20th June, 1987", notes: "-" },
        { name: "Chaudhary Devi Lal", from: "20th June, 1987", to: "2nd December, 1989", notes: "-" },
        { name: "Om Prakash Chautala", from: "2nd December, 1989", to: "22nd May, 1990", notes: "-" },
        { name: "Banarasi Das Gupta", from: "22nd May, 1990", to: "12th July, 1990", notes: "-" },
        { name: "Om Prakash Chautala", from: "12th July, 1990", to: "17th July, 1990", notes: "Shortest tenure (5 days)" },
        { name: "Hukum Singh", from: "17th July, 1990", to: "22nd March, 1991", notes: "-" },
        { name: "Om Prakash Chautala", from: "22nd March, 1991", to: "6th April, 1991", notes: "-" },
        { name: "President's Rule", from: "6th April, 1991", to: "22nd June, 1991", notes: "-" },
        { name: "Bhajan Lal", from: "23rd June, 1991", to: "10th May, 1996", notes: "-" },
        { name: "Bansi Lal", from: "11th May, 1996", to: "23rd July, 1999", notes: "-" },
        { name: "Om Prakash Chautala", from: "24th July, 1999", to: "4th March, 2005", notes: "-" },
        { name: "Bhupinder Singh Hooda", from: "5th March, 2005", to: "24th October, 2014", notes: "Longest tenure" },
        { name: "Manohar Lal Khattar", from: "26th October, 2014", to: "Incumbent", notes: "First unmarried CM" }
    ];

    // Section 13: Major Political Parties of Haryana
    const politicalParties = [
        {
            name: "Bharatiya Lok Dal",
            nameHindi: "भारतीय लोक दल",
            founded: "1974",
            founder: "Chaudhary Devi Lal",
            symbol: "Farmer ploughing the land",
            details: "Chaudhary Devi Lal became CM in 1987 from this party. Got split in 1990."
        },
        {
            name: "Janata Dal",
            nameHindi: "जनता दल",
            founded: "11th October, 1988",
            merger: "Janata Party, Lok Dal (B) and Jan Morcha",
            symbol: "Wheel",
            details: "Formed government at centre in 1989. Presently divided into several factions."
        },
        {
            name: "Indian National Lok Dal (INLD)",
            nameHindi: "इंडियन नेशनल लोक दल",
            founded: "October 1996",
            founder: "Om Prakash Chautala and Chaudhary Devi Lal",
            symbol: "Eyeglasses",
            ideology: "Social liberalism",
            details: "2014 Assembly: 19 seats; 2019 Assembly: 1 seat"
        },
        {
            name: "Haryana Vikas Party (HVP)",
            nameHindi: "हरियाणा विकास पार्टी",
            founded: "1996",
            founder: "Chaudhary Bansi Lal",
            details: "Formed government with BJP; dissolved in 1999; Merged with INC in 2004"
        },
        {
            name: "Jannayak Janta Party (JJP)",
            nameHindi: "जननायक जनता पार्टी",
            founded: "9th December, 2018",
            founder: "Dushyant Chautala (great grandson of Devi Lal)",
            symbol: "Key",
            ideology: "Socialism (Devi Lal's ideology)",
            details: "Formed in Jind; 2019 Assembly: 10 seats"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 dark:from-slate-950/20 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-slate-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 hover:bg-slate-500/20 transition-colors text-sm font-medium"
                        >
                            <Languages className="w-4 h-4" />
                            {language === "hindi" ? "English" : "हिंदी"}
                        </button>
                    </div>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 text-sm font-medium backdrop-blur-sm">
                        <LandmarkIcon className="w-4 h-4" />
                        {language === "hindi" ? "प्रशासनिक ढांचा - हरियाणा सरकार" : "Administrative Structure - Government of Haryana"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {language === "hindi" ? "हरियाणा की" : "Haryana"} <span className="text-slate-600 dark:text-slate-400">{language === "hindi" ? "प्रशासनिक संरचना" : "Administrative Structure"}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        {language === "hindi"
                            ? "हरियाणा की विधानमंडल, कार्यपालिका, राज्यपाल, मुख्यमंत्री, मंत्रिपरिषद और राजनीतिक दलों की संपूर्ण जानकारी"
                            : "Complete information about Haryana's Legislature, Executive, Governor, Chief Minister, Council of Ministers and Political Parties"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <BuildingIcon2 className="w-4 h-4 text-slate-600" />
                            <span>{language === "hindi" ? "विधानमंडल" : "Legislature"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <CrownIcon className="w-4 h-4 text-slate-600" />
                            <span>{language === "hindi" ? "राज्यपाल" : "Governor"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <UserRound className="w-4 h-4 text-slate-600" />
                            <span>{language === "hindi" ? "मुख्यमंत्री" : "Chief Minister"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <PartyPopper className="w-4 h-4 text-slate-600" />
                            <span>{language === "hindi" ? "राजनीतिक दल" : "Political Parties"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Section 1: Legislature Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-slate-500/20">
                                <BuildingIcon2 className="w-5 h-5 text-slate-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? legislatureOverview.titleHindi : legislatureOverview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? legislatureOverview.contentHindi : legislatureOverview.contentEnglish}</p>
                    </div>

                    {/* Section 2: Legislative Assembly Details */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-6 md:p-8 border border-blue-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                <VoteIcon className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{language === "hindi" ? legislativeAssembly.titleHindi : legislativeAssembly.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? legislativeAssembly.contentHindi : legislativeAssembly.contentEnglish}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">90</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "कुल सीटें" : "Total Seats"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">17</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "अनुसूचित जाति सीटें" : "SC Seats"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">5</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "राज्य सभा सीटें" : "Rajya Sabha Seats"}</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <div className="text-xl font-bold text-blue-600">10</div>
                                <div className="text-xs text-muted-foreground">{language === "hindi" ? "लोक सभा सीटें" : "Lok Sabha Seats"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Reserved SC Seats List */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "अनुसूचित जातियों के लिए आरक्षित सीटें" : "Seats Reserved for Scheduled Castes"}</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {scReservedSeats.map((seat, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-lg p-2 text-center border">
                                    <p className="text-sm">{seat}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">Districts with no reserved seat: Mahendragarh, Panchkula, Nuh, Faridabad</p>
                    </div>

                    {/* Section 4: Various Legislative Assemblies Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm overflow-x-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <HistoryIcon className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा के विभिन्न विधान सभा" : "Various Legislative Assemblies of Haryana"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "विधान सभा" : "Assembly"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "अवधि" : "Period"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "सदस्य" : "Members"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "मुख्यमंत्री" : "Chief Minister"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "अध्यक्ष" : "Speaker"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "टिप्पणी" : "Notes"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {legislativeAssemblies.map((la, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{la.number}</td>
                                            <td className="border p-2">{la.period}</td>
                                            <td className="border p-2">{la.members}</td>
                                            <td className="border p-2">{la.chiefMinister}</td>
                                            <td className="border p-2">{la.speaker}</td>
                                            <td className="border p-2">{la.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 5: List of Speakers Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm overflow-x-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <GavelIcon className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "विधान सभा अध्यक्षों की सूची" : "List of Speakers"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "नाम" : "Name"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "कार्यकाल प्रारंभ" : "From"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "कार्यकाल समाप्त" : "To"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "टिप्पणी" : "Notes"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {speakersList.map((speaker, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{speaker.name}</td>
                                            <td className="border p-2">{speaker.from}</td>
                                            <td className="border p-2">{speaker.to}</td>
                                            <td className="border p-2">{speaker.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 6: Representation in Parliament */}
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-6 md:p-8 border border-green-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                                <Globe className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">{language === "hindi" ? parliamentRepresentation.titleHindi : parliamentRepresentation.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground">{language === "hindi" ? parliamentRepresentation.contentHindi : parliamentRepresentation.contentEnglish}</p>
                    </div>

                    {/* Section 7: Haryana Executive Overview */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-slate-500/20">
                                <BriefcaseIcon className="w-5 h-5 text-slate-600" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? executiveOverview.titleHindi : executiveOverview.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground">{language === "hindi" ? executiveOverview.contentHindi : executiveOverview.contentEnglish}</p>
                    </div>

                    {/* Section 8: Governor Details */}
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-2xl p-6 md:p-8 border border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                                <CrownIcon className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400">{language === "hindi" ? governorDetails.titleHindi : governorDetails.titleEnglish}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{language === "hindi" ? governorDetails.contentHindi : governorDetails.contentEnglish}</p>

                        <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                            <p className="text-sm font-medium">Qualifications for Governor:</p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                                <li>Citizen of India and at least 35 years of age</li>
                                <li>Not a member of either house of Parliament or State Legislature</li>
                                <li>Not hold any office of profit under Central and State Government</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 9: List of Governors Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm overflow-x-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <UsersIcon2 className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा के राज्यपालों की सूची" : "List of Haryana Governors"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "नाम" : "Name"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "कार्यकाल प्रारंभ" : "From"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "कार्यकाल समाप्त" : "To"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "टिप्पणी" : "Notes"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {governorsList.map((gov, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{gov.name}</td>
                                            <td className="border p-2">{gov.from}</td>
                                            <td className="border p-2">{gov.to}</td>
                                            <td className="border p-2">{gov.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 10: President's Rule */}
                    <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-6 md:p-8 border border-red-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-red-100 dark:bg-red-900/30">
                                <AlertCircle className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">{language === "hindi" ? "हरियाणा में राष्ट्रपति शासन" : "President's Rule in Haryana"}</h2>
                        </div>
                        <div className="space-y-4">
                            {presidentsRule.map((pr, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-red-600">{pr.number} President's Rule</h3>
                                    <p className="text-sm"><strong>{language === "hindi" ? "अवधि:" : "Period:"}</strong> {pr.period}</p>
                                    <p className="text-sm"><strong>{language === "hindi" ? "राष्ट्रपति:" : "President:"}</strong> {pr.president}</p>
                                    <p className="text-sm"><strong>{language === "hindi" ? "प्रधानमंत्री:" : "Prime Minister:"}</strong> {pr.pm}</p>
                                    <p className="text-sm"><strong>{language === "hindi" ? "राज्यपाल:" : "Governor:"}</strong> {pr.governor}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 11: Chief Ministers of Haryana - Detailed Bios */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <UserRound className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "हरियाणा के मुख्यमंत्री" : "Chief Ministers of Haryana"}</h2>
                        </div>
                        <div className="space-y-6">
                            {chiefMinisters.map((cm, idx) => (
                                <div key={idx} className="bg-muted/30 rounded-xl p-5 border">
                                    <h3 className="text-xl font-semibold text-primary">{language === "hindi" ? cm.nameHindi : cm.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1"><strong>{language === "hindi" ? "जन्म:" : "Born:"}</strong> {cm.born}</p>
                                    {cm.titles && <p className="text-sm"><strong>{language === "hindi" ? "उपाधियाँ:" : "Titles:"}</strong> {cm.titles}</p>}
                                    <p className="text-sm mt-2">{cm.achievements}</p>
                                    <p className="text-sm text-muted-foreground mt-1"><strong>{language === "hindi" ? "निधन:" : "Died:"}</strong> {cm.died}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 12: List of Chief Ministers Table */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm overflow-x-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <CalendarIcon className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{language === "hindi" ? "मुख्यमंत्रियों की सूची" : "List of Chief Ministers of Haryana"}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="border p-2 text-left">{language === "hindi" ? "नाम" : "Name"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "कार्यकाल प्रारंभ" : "From"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "कार्यकाल समाप्त" : "To"}</th>
                                        <th className="border p-2 text-left">{language === "hindi" ? "टिप्पणी" : "Notes"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cmList.map((cm, idx) => (
                                        <tr key={idx} className="hover:bg-muted/30">
                                            <td className="border p-2">{cm.name}</td>
                                            <td className="border p-2">{cm.from}</td>
                                            <td className="border p-2">{cm.to}</td>
                                            <td className="border p-2">{cm.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 13: Major Political Parties */}
                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6 md:p-8 border border-amber-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                                <FlagIcon className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400">{language === "hindi" ? "हरियाणा के प्रमुख राजनीतिक दल" : "Major Political Parties of Haryana"}</h2>
                        </div>
                        <div className="space-y-4">
                            {politicalParties.map((party, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 border">
                                    <h3 className="font-semibold text-amber-600">{language === "hindi" ? party.nameHindi : party.name}</h3>
                                    <p className="text-sm"><strong>{language === "hindi" ? "स्थापना:" : "Founded:"}</strong> {party.founded}</p>
                                    {party.founder && <p className="text-sm"><strong>{language === "hindi" ? "संस्थापक:" : "Founder:"}</strong> {party.founder}</p>}
                                    {party.symbol && <p className="text-sm"><strong>{language === "hindi" ? "चुनाव चिह्न:" : "Symbol:"}</strong> {party.symbol}</p>}
                                    <p className="text-sm text-muted-foreground mt-1">{party.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        {language === "hindi" ? "हरियाणा प्रशासनिक ढांचा: तथ्य सारांश" : "Haryana Administrative Structure: Key Facts"}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">90</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "विधान सभा सीटें" : "Assembly Seats"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">17</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "अनुसूचित जाति सीटें" : "SC Seats"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">5</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "राज्य सभा सीटें" : "Rajya Sabha Seats"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">10</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "लोक सभा सीटें" : "Lok Sabha Seats"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">14</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "विधान सभाएं" : "Legislative Assemblies"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">3</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "राष्ट्रपति शासन" : "President's Rule"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">10</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "मुख्यमंत्री" : "Chief Ministers"}</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 border text-center">
                            <div className="text-xl font-bold text-slate-600">5</div>
                            <p className="text-xs text-muted-foreground">{language === "hindi" ? "बार सीएम बने (चौटाला)" : "Times CM (Chautala)"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 text-slate-600 text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            {language === "hindi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {language === "hindi" ? "हरियाणा की प्रशासनिक संरचना के बारे में" : "Common"} <span className="text-slate-600">{language === "hindi" ? "सामान्य प्रश्न" : "Questions About Haryana Administrative Structure"}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {language === "hindi"
                                ? "हरियाणा की विधानमंडल, कार्यपालिका, राज्यपाल, मुख्यमंत्री और राजनीतिक दलों के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें"
                                : "Find answers to the most commonly asked questions about Haryana's Legislature, Executive, Governor, Chief Minister and Political Parties"}
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
                                        className={`w-5 h-5 text-slate-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
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
                            {language === "hindi" ? "अपने हरियाणा प्रशासनिक ढांचे के ज्ञान का परीक्षण करना चाहते हैं?" : "Want to test your knowledge about Haryana Administrative Structure?"}
                        </p>
                        <Link href="/signup">
                            <Button className="gap-2 cursor-pointer bg-slate-600 hover:bg-slate-700">
                                {language === "hindi" ? "हरियाणा प्रशासनिक ढांचा क्विज़ लें" : "Take Haryana Administrative Structure Quiz"} <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t flex justify-between items-center max-w-6xl mx-auto">
                        <Link href="/haryana-gk/transport-communication" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            {language === "hindi" ? "पीछे जाएँ: हरियाणा में परिवहन एवं संचार" : "Back to Transport and Communication in Haryana"}
                        </Link>
                        <Link href="/haryana-gk/judiciary" className="text-slate-600 hover:text-slate-700 flex items-center gap-1">
                            {language === "hindi" ? "अगला अध्याय: हरियाणा में न्यायपालिका" : "Next Chapter: Judiciary in Haryana"}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">{language === "hindi" ? "हरियाणा की प्रशासनिक संरचना - संपूर्ण संदर्भ" : "Haryana Administrative Structure - Complete Reference"}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        {language === "hindi"
                            ? "यह पृष्ठ हरियाणा की विधानमंडल, कार्यपालिका, राज्यपाल, मुख्यमंत्री, मंत्रिपरिषद और राजनीतिक दलों के बारे में व्यापक जानकारी प्रदान करता है। हरियाणा CET, HSSC परीक्षाओं और अन्य प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्रों के लिए एक संपूर्ण संदर्भ।"
                            : "This page provides comprehensive information about Haryana's Legislature, Executive, Governor, Chief Minister, Council of Ministers and Political Parties. A complete reference for students preparing for Haryana CET, HSSC exams, and other competitive exams that include Haryana GK."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | {language === "hindi" ? "जानकारी हरियाणा सरकार के आधिकारिक प्रकाशनों और संवैधानिक प्रावधानों से स्रोतित" : "Information sourced from official Government of Haryana publications and constitutional provisions"}
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    );
}