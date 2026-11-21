"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    BookOpen,
    ChevronRight,
    Sparkles,
    FileText,
    Target,
    Clock,
    Award,
    CheckCircle2,
    ChevronDown,
    HelpCircle,
    MapPin,
    History,
    Landmark,
    Music,
    Palette,
    Utensils,
    Trophy,
    Heart,
    Leaf,
    Building,
    Factory,
    Bus,
    School,
    Users,
    Sun,
    Droplets,
    Eye
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HaryanaGKStudyMaterialPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    // CET Test editorial study-guide chapters; NOT an officially prescribed 33-chapter HSSC syllabus.
    const syllabusTopics = [
        {
            id: 1,
            title: "Current Affairs",
            icon: Sparkles,
            color: "from-blue-600 to-blue-700",
            // slug: "current-affairs",
            link: "/study-materials-hub",
            subtopics: ["National Events", "International Events", "Sports News", "Awards & Honors", "Appointments", "Haryana Specific News", "Schemes & Policies", "Obituaries"]
        },
        {
            id: 2,
            title: "Haryana Basic Information",
            icon: MapPin,
            color: "from-slate-600 to-slate-700",
            slug: "haryana-basic-info",
            subtopics: ["State Symbols", "Formation Day (1 Nov 1966)", "Capital: Chandigarh", "23 Districts (Hansi added in December 2025)", "Borders with States", "Total Area", "Population Overview", "State Animal, Bird, Flower"]
        },
        {
            id: 3,
            title: "Ancient History of Haryana",
            icon: History,
            color: "from-amber-700 to-amber-800",
            slug: "ancient-history",
            subtopics: ["Historical Sources", "Siswal Culture", "Hakra Culture", "Indus Valley Civilization", "Mahabharata War", "Buddhism & Jainism", "Mauryan Period", "Yaudheya Republic", "Agroha Republic", "Arjunayana Republic", "Kunind Republic", "Gupta Period", "Gurjar-Pratihara Period", "Tomar Dynasty"]
        },
        {
            id: 4,
            title: "Medieval History of Haryana",
            icon: Landmark,
            color: "from-orange-700 to-orange-800",
            slug: "medieval-history",
            subtopics: ["Turk Invasion", "Rise of Chauhan Dynasty", "Bhadanakas Rule", "Muhammad Ghori Invasion", "Sultanate Period", "Mughal Empire (1526-1707 AD)", "Later Mughal Period", "Important Battles"]
        },
        {
            id: 5,
            title: "Modern History of Haryana",
            icon: Building,
            color: "from-red-700 to-red-800",
            slug: "modern-history",
            subtopics: ["British East India Company Rule", "Revolt of 1857 in Haryana", "Congress & National Movement", "Haryana in World War I & II", "1946 Elections & Independence", "Important Freedom Fighters", "Arya Samaj Movement"]
        },
        {
            id: 6,
            title: "Formation of Haryana State",
            icon: Landmark,
            color: "from-green-700 to-green-800",
            slug: "formation-of-haryana",
            subtopics: ["Demand for a Separate Haryana State", "State Reorganisation Commission", "Regional Formula", "Shah Commission", "1 November 1966 - Formation Day", "First Chief Minister", "First Governor"]
        },
        {
            id: 7,
            title: "Geographical Structure",
            icon: MapPin,
            color: "from-emerald-700 to-emerald-800",
            slug: "geographical-structure",
            subtopics: ["Location & Extent", "Geological Structure", "Physiographic Divisions", "Geographical Area Divisions", "Latitude & Longitude", "Topography"]
        },
        {
            id: 8,
            title: "Climate of Haryana",
            icon: Sun,
            color: "from-yellow-600 to-yellow-700",
            slug: "climate",
            subtopics: ["Climate Classification", "Temperature Patterns", "Summer Season", "Monsoon Season", "Winter Season", "Rainfall Distribution", "Humidity & Wind Patterns"]
        },
        {
            id: 9,
            title: "Soil Resources",
            icon: Leaf,
            color: "from-lime-700 to-lime-800",
            slug: "soil-resources",
            subtopics: ["Types of Soil", "Regional Distribution of Soil", "Soil Erosion", "Soil Salinity", "Soil Alkalinity", "Soil Conservation Measures"]
        },
        {
            id: 10,
            title: "Drainage System",
            icon: Droplets,
            color: "from-cyan-700 to-cyan-800",
            slug: "drainage-system",
            subtopics: ["Yamuna River", "Ghaggar River", "Markanda River", "Tangri River", "Major Lakes (Sultanpur, Badkhal, Tilyar)", "Drains of Haryana", "Water Conservation"]
        },
        {
            id: 11,
            title: "Forest Resources",
            icon: Leaf,
            color: "from-teal-700 to-teal-800",
            slug: "forest-resources",
            subtopics: ["Forest Cover in Haryana", "Classification of Forests", "Forest Types", "Schemes for Forest Development", "Tree Plantation Drives"]
        },
        {
            id: 12,
            title: "National Parks & Sanctuaries",
            icon: Heart,
            color: "from-green-600 to-green-700",
            slug: "national-parks",
            subtopics: ["Sultanpur National Park", "Kalesar National Park", "Bhindawas Wildlife Sanctuary", "Bir Shikargah Sanctuary", "Chhilchhila Sanctuary", "Conservation Reserves", "Animal Rehabilitation Centres", "Zoos of Haryana"]
        },
        {
            id: 13,
            title: "Agriculture & Animal Husbandry",
            icon: Leaf,
            color: "from-lime-600 to-lime-700",
            slug: "agriculture",
            subtopics: ["Agriculture Land Use", "Crop Seasons (Rabi, Kharif)", "Horticulture", "Floriculture", "Institutions for Agriculture", "Government Schemes", "Animal Husbandry", "Dairy Development", "Poultry Farming", "Fisheries"]
        },
        {
            id: 14,
            title: "Irrigation in Haryana",
            icon: Droplets,
            color: "from-sky-700 to-sky-800",
            slug: "irrigation",
            subtopics: ["Canal Irrigation System", "Western Yamuna Canal", "Bhakra Canal", "Multipurpose River Valley Projects", "Major Dams", "Tubewell Irrigation", "Government Initiatives"]
        },
        {
            id: 15,
            title: "Minerals & Energy Resources",
            icon: Building,
            color: "from-stone-700 to-stone-800",
            slug: "minerals-energy",
            subtopics: ["Mineral Resources (Limestone, Quartz, Gypsum)", "Energy Resources", "Thermal Power Plants", "Renewable Energy", "Solar Energy Policy", "Government Schemes"]
        },
        {
            id: 16,
            title: "Industries in Haryana",
            icon: Factory,
            color: "from-purple-700 to-purple-800",
            slug: "industries",
            subtopics: ["Industrial Development History", "Maruti Suzuki", "Hero MotoCorp", "Industrial Estates", "IMTs (Industrial Model Townships)", "Major Sugar Mills", "Industrial Development Agencies", "Industrial Parks", "Industrial Awards"]
        },
        {
            id: 17,
            title: "Transport & Communication",
            icon: Bus,
            color: "from-indigo-700 to-indigo-800",
            slug: "transport",
            subtopics: ["Road Transport", "National Highways", "State Highways", "Railway Network", "Metro Rail", "Airports", "Communication Network", "Road Transport Services"]
        },
        {
            id: 18,
            title: "Administrative Structure",
            icon: Building,
            color: "from-blue-800 to-blue-900",
            slug: "administration",
            subtopics: ["Legislature (Vidhan Sabha)", "Representation in Parliament", "Executive (Governor, CM, Council of Ministers)", "President's Rule", "Major Political Parties", "Administrative Divisions"]
        },
        {
            id: 19,
            title: "Haryana Judiciary",
            icon: Landmark,
            color: "from-violet-800 to-violet-900",
            slug: "judiciary",
            subtopics: ["Punjab & Haryana High Court", "Historical Background", "District Courts", "Institutions & Commissions", "Law Enforcement Agencies", "Lok Adalats"]
        },
        {
            id: 20,
            title: "Local Self Government",
            icon: Building,
            color: "from-cyan-800 to-cyan-900",
            slug: "panchayati-raj",
            subtopics: ["Panchayati Raj System", "Haryana Panchayati Raj Act", "Zila Parishad", "Gram Panchayats", "Municipal Corporations", "Nagar Palikas", "Municipal Councils"]
        },
        {
            id: 21,
            title: "District Profile",
            icon: MapPin,
            color: "from-teal-800 to-teal-900",
            slug: "district-profile",
            subtopics: ["Ambala Division", "Gurugram Division", "Hisar Division", "Rohtak Division", "Karnal Division", "All 23 Districts Details", "District-wise Population", "District-wise Facts"]
        },
        {
            id: 22,
            title: "Archaeological Sites & Museums",
            icon: History,
            color: "from-amber-800 to-amber-900",
            slug: "archaeological-sites",
            subtopics: ["Archaeological Forts", "Rakhigarhi", "Banawali", "Agroha", "Kunal", "Major Museums", "Shri Krishna Museum", "Rural Museum"]
        },
        {
            id: 23,
            title: "Tourism in Haryana",
            icon: Heart,
            color: "from-rose-700 to-rose-800",
            slug: "tourism",
            subtopics: ["Religious Places", "Major Gurudwaras", "Famous Churches", "Major Mosques", "Shrines & Dargahs", "Mausoleums", "Modern Tourist Centres", "Surajkund Mela", "Damdama Lake", "Pinjore Gardens", "Kurukshetra", "Jyotisar"]
        },
        {
            id: 24,
            title: "Architecture, Art & Crafts",
            icon: Palette,
            color: "from-pink-700 to-pink-800",
            slug: "art-crafts",
            subtopics: ["Architecture of Haryana", "Sculpture", "Phulkari Embroidery", "Pottery", "Weaving", "Traditional Paintings", "Handicrafts"]
        },
        {
            id: 25,
            title: "Music & Dance of Haryana",
            icon: Music,
            color: "from-fuchsia-700 to-fuchsia-800",
            slug: "music-dance",
            subtopics: ["Evolution of Music", "Folk Music", "Ragini", "Folk Dance (Saang, Phag, Ghoomar, Khoria)", "Folk Theatre (Swang)", "Musical Instruments"]
        },
        {
            id: 26,
            title: "Fairs & Festivals",
            icon: Sparkles,
            color: "from-orange-600 to-orange-700",
            slug: "fairs-festivals",
            subtopics: ["Important Festivals (Teej, Gangaur)", "Sikh Festivals", "Fairs of Haryana", "Surajkund International Craft Mela", "Guga Mela", "Pinjore Heritage Festival", "District-wise Fairs"]
        },
        {
            id: 27,
            title: "Cultural Heritage",
            icon: Utensils,
            color: "from-amber-600 to-amber-700",
            slug: "cultural-heritage",
            subtopics: ["Men's Traditional Costumes", "Women's Traditional Costumes", "Children Traditional Costumes", "Traditional Ornaments", "Popular Foods (Bajra Roti, Kadhi, Lassi)", "Haryanvi Cinema", "Folk Beliefs"]
        },
        {
            id: 28,
            title: "Languages & Literature",
            icon: BookOpen,
            color: "from-sky-600 to-sky-700",
            slug: "languages-literature",
            subtopics: ["Haryanvi Language", "Dialects (Bangru, Deswali)", "Haryanvi Literature", "Prose Literature", "Modern Literature", "Court Literature", "Hindi Literature", "Literary Academies", "Literary Awards"]
        },
        {
            id: 29,
            title: "Education & Health",
            icon: School,
            color: "from-blue-600 to-blue-700",
            slug: "education-health",
            subtopics: ["Integrated Education History", "Higher Education (Colleges & Universities)", "KUK, MDU, CDLU", "Health Scenario", "Medical Colleges", "Council of Indian Medicine"]
        },
        {
            id: 30,
            title: "Demographic Profile",
            icon: Users,
            color: "from-slate-600 to-slate-700",
            slug: "demographics",
            subtopics: ["Decadal Growth Rate", "Population Density", "Literacy Rate", "Child Population (0-6 years)", "Sex Ratio", "Rural & Urban Population", "Religion-wise Census 2011", "Occupational Structure", "Scheduled Castes Population"]
        },
        {
            id: 31,
            title: "Sports & Awards",
            icon: Trophy,
            color: "from-yellow-700 to-yellow-800",
            slug: "sports-awards",
            subtopics: ["Famous Sports", "Phogat Sisters", "Neeraj Chopra", "Sports Organisations", "Important Sports Stadiums", "Haryana at International Level", "Sports Development Schemes", "Haryana Sports Awards (Bhim Award)"]
        },
        {
            id: 32,
            title: "Social Welfare Schemes",
            icon: Heart,
            color: "from-rose-600 to-rose-700",
            slug: "welfare-schemes",
            subtopics: ["Women & Child Development Schemes", "Beti Bachao Beti Padhao", "Social Justice & Empowerment", "Health Schemes", "Insurance Schemes", "Employment Schemes", "Scheduled Castes Schemes", "Farmers Welfare Schemes", "Ladli Scheme"]
        },
        {
            id: 33,
            title: "Famous Personalities",
            icon: Award,
            color: "from-purple-600 to-purple-700",
            slug: "famous-personalities",
            subtopics: ["Historical Personalities (Rao Tula Ram)", "Political Personalities (Chaudhary Devi Lal)", "Social Activists", "Military Personnel", "Sports Personalities", "Art & Literature Personalities"]
        }
    ]

    const faqs = [
        {
            question: "What is the official weightage for Haryana GK in HSSC CET?",
            answer: "The Haryana Government's CET policy, notified on 31 December 2024, specifies 25% weightage for Haryana-related history, current affairs, literature, geography, environment, culture and similar topics. This is percentage weightage, not a fixed topic-wise distribution. Check any subsequent amendments and the applicable notification."
        },
        {
            question: "Are these 33 chapters the official HSSC syllabus?",
            answer: "No. The 33 chapters are CET Test's own way of organizing study material. HSSC's CET policy provides broad subject areas, not an official list of 33 chapters. Some chapters also cover broader general-awareness subjects."
        },
        {
            question: "How many districts are there in Haryana?",
            answer: "Haryana has 23 districts as of November 2026. Hansi was notified as the 23rd district in December 2025. For Census 2011 comparisons, remember that Hansi was then part of Hisar district."
        },
        {
            question: "Which Haryana GK topics should I prioritise?",
            answer: "Start with Haryana history, current affairs, literature, geography, environment and culture as identified in the CET policy. Revise related topics such as district facts, fairs, administrative history, sports and schemes, without assuming unofficial marks per topic."
        },
        {
            question: "How should I prepare for CET Group C and Group D?",
            answer: "Use the applicable HSSC advertisement and syllabus. The CET policy gives Haryana-related topics 25% weightage, but Group C and Group D have different educational levels, and subsequent post-specific selection examinations may use different syllabi."
        },
        {
            question: "How can I improve my Haryana GK preparation?",
            answer: "Read the chapters as revision material, check factual claims against official references, solve previous-year papers, practise mock questions, and keep notes on recent Haryana events and the historical dates and statistics used in questions."
        }
    ]

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" />
                        Haryana-focused study guide for HSSC CET preparation
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Haryana GK
                        <span className="text-primary"> Study Guide</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        Explore <strong className="text-foreground">33 curated chapters</strong> on Haryana history, geography, culture, governance and current affairs. This is an independent study outline, not an official HSSC chapter list.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span>33 Curated Chapters</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Target className="w-4 h-4 text-primary" />
                            <span>25% Haryana Weightage in CET Policy</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>History, Geography, Culture & More</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/signup">
                            <Button size="lg" className="cursor-pointer gap-2">
                                Start Haryana GK Mock Test <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/exams/haryana">
                            <Button variant="outline" size="lg" className="cursor-pointer gap-2">
                                <FileText className="w-4 h-4" />
                                Exam Overview
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Official syllabus context and editorial guide summary */}
            <section className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-primary/20">
                                    <Award className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold">Haryana GK Study Guide</h2>
                            </div>
                            <Link href="https://hssc.gov.in" target="_blank" rel="noopener noreferrer">
                                <Button variant="default" size="lg" className="gap-2 bg-primary hover:bg-primary/90 cursor-pointer">
                                    <FileText className="w-4 h-4" />
                                    HSSC Official Website (check latest notification)
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4 mt-6">
                            {[
                                { label: "Haryana Weightage (CET)", value: "25%", color: "from-blue-500 to-blue-600" },
                                { label: "Guide Chapters", value: "33 Curated", color: "from-green-500 to-green-600" },
                                { label: "Exact Questions", value: "Check notice", color: "from-orange-500 to-orange-600" },
                                { label: "Recruitment Pattern", value: "By notice", color: "from-red-500 to-red-600" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 text-center border shadow-sm">
                                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                                    <p className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            The Haryana Government's CET policy specifies <strong className="text-foreground">25% weightage</strong> for Haryana-related topics, not a fixed number of questions for each topic. This 33-chapter guide is independently organized by CET Test. Always review the applicable HSSC recruitment notice and any policy amendments.{' '}
                            <Link href="https://hssc.gov.in/Syllabus/CET-012025.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
                                Read the official CET policy
                            </Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3 Cards per Row Grid - 33 editorial chapters */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Explore <span className="text-primary">33 Curated Chapters</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            CET Test's topic-wise revision guide; chapter names and grouping are editorial, not an HSSC-prescribed 33-chapter list.
                        </p>
                    </div>

                    {/* Grid: 3 cards per row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {syllabusTopics.map((topic) => {
                            const IconComponent = topic.icon
                            return (
                                <div key={topic.id} className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                    <div className={`bg-gradient-to-r ${topic.color} p-4`}>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white/20 rounded-xl">
                                                <IconComponent className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white">Ch {topic.id}: {topic.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-4 flex-grow">
                                        <div className="flex flex-wrap gap-1.5">
                                            {topic.subtopics.map((subtopic, idx) => (
                                                <span key={idx} className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full">
                                                    <CheckCircle2 className="w-2.5 h-2.5 text-primary" />
                                                    {subtopic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Only READ button */}
                                    {topic.slug && (
                                        <div className="p-4 pt-0 mt-auto">
                                            <Link href={`/haryana-gk/${topic.slug}`}>
                                                <Button className="w-full gap-2 cursor-pointer">
                                                    <Eye className="w-4 h-4" />
                                                    Read Chapter {topic.id}: {topic.title}
                                                </Button>
                                            </Link>
                                        </div>)}
                                    {topic.link && (
                                        <div className="p-4 pt-0 mt-auto">
                                            <Link href={topic.link}>
                                                <Button className="w-full gap-2 cursor-pointer">
                                                    <Eye className="w-4 h-4" />
                                                    Read Chapter {topic.id}: {topic.title}
                                                </Button>
                                            </Link>
                                        </div>)}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Suggested revision categories: NOT a marks-prediction table */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <Target className="w-4 h-4" />
                            Suggested Revision Areas
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Suggested Haryana GK Revision Topics</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Use these categories for balanced preparation. HSSC does not prescribe the chapter-wise mark estimates shown in many unofficial study guides.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { subject: "Haryana History", topics: "Ancient history, state formation, 1857 revolt, freedom movement", focus: "Core revision area" },
                            { subject: "Haryana Geography", topics: "Rivers, climate, districts, forests and protected areas", focus: "Core revision area" },
                            { subject: "Haryana Culture", topics: "Fairs, folk dance, literature, traditions and festivals", focus: "Core revision area" },
                            { subject: "Current Affairs & Sports", topics: "Haryana schemes, sports achievements, awards and current affairs", focus: "Revise regularly" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-5 border shadow-sm hover:shadow-md transition-all">
                                <h3 className="font-bold text-lg mb-2 text-primary">{item.subject}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{item.topics}</p>
                                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{item.focus}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Preparation Strategy */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                                <Target className="w-4 h-4" />
                                Strategy Guide
                            </div>
                            <h2 className="text-3xl font-bold mb-4">How to Prepare Effectively for Haryana GK</h2>
                            <p className="text-muted-foreground mb-6">
                                Use a balanced revision plan and check the applicable HSSC recruitment notification.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Use these 33 editorial chapters as a revision checklist; HSSC does not assign questions to each chapter",
                                    "Cover the Haryana-related topics named in the CET policy: history, current affairs, literature, geography, environment and culture",
                                    "Revise Haryana fairs, festivals and cultural traditions with dates and official references",
                                    "Study Haryana sports achievements, important personalities and relevant state awards",
                                    "Revise Haryana current affairs regularly; check the exam date and official syllabus for the relevant coverage",
                                    "Practise available previous-year papers and check current official exam instructions",
                                    "Use mock tests to identify weak topics and revise your errors"
                                ].map((tip, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                <Trophy className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Consistent Revision Makes a Difference</h3>
                            <p className="text-muted-foreground mb-6">
                                Practise the Haryana-specific syllabus areas, review mistakes and check the current HSSC notice for selection criteria. No score can guarantee qualification.
                            </p>
                            <Link href="/signup">
                                <Button size="lg" className="gap-2 cursor-pointer">
                                    Start Practice Now <ChevronRight className="w-4 h-4" />
                                </Button>
                            </Link>
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
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Common <span className="text-primary">Questions</span> About Haryana GK
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Find answers to the most commonly asked questions about Haryana GK for CET preparation
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
                                    <span className="font-semibold text-base md:text-lg pr-4">{faq.question}</span>
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
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-muted-foreground mb-4">
                            Still have questions? We're here to help!
                        </p>
                        <Link href="/contact">
                            <Button variant="outline" className="gap-2 cursor-pointer">
                                Contact Support <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">Haryana GK Study Guide — 33 Curated Chapters</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        This independent study guide groups Haryana GK revision material into 33 chapters selected by CET Test.
                        Under the Haryana Government's CET policy notified on 31 December 2024, Haryana-related history, current affairs,
                        literature, geography, environment and culture carry 25% weightage in the CET syllabus. The HSSC policy does not
                        prescribe these exact 33 chapters or guarantee a fixed number of questions from each topic. The guide also contains
                        broader educational topics useful for general preparation. Consult the applicable recruitment notice and amendments
                        on the official HSSC website for examination-specific requirements.
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET Test | Independent exam-preparation resource. Not affiliated with or endorsed by HSSC.
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    )
}