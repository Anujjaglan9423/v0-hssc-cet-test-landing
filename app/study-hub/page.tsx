'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  BookOpen,
  MapPin,
  TrendingUp,
  FileText,
  Download,
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import FooterLinkNavbar from '@/components/footer-link-navbar'
import FooterLinkFooter from '@/components/footer-link-footer'

type StudyTab = 'syllabus' | 'haryana-gk' | 'current-affairs'

interface StudyMaterial {
  id: string
  title: string
  description: string
  topics: string[]
  downloadUrl?: string
  duration?: string
  level: 'beginner' | 'intermediate' | 'advanced'
}

const syllabusData: StudyMaterial[] = [
  {
    id: 'hssc-cet-math',
    title: 'HSSC CET - Mathematics',
    description: 'Complete mathematics syllabus for Haryana HSSC CET examination',
    topics: [
      'Number System & Operations',
      'Algebra & Linear Equations',
      'Geometry & Trigonometry',
      'Statistics & Probability',
      'Mensuration',
      'Percentage & Ratio',
    ],
    level: 'beginner',
    duration: '40 hours',
  },
  {
    id: 'hssc-cet-science',
    title: 'HSSC CET - Science',
    description: 'Physics, Chemistry & Biology for HSSC CET exam preparation',
    topics: [
      'Physics Mechanics',
      'Heat & Thermodynamics',
      'Electromagnetism',
      'Chemical Reactions',
      'Organic Chemistry',
      'Biology & Human System',
    ],
    level: 'intermediate',
    duration: '50 hours',
  },
  {
    id: 'cet-english',
    title: 'CET - English Language',
    description: 'Grammar, vocabulary, and comprehension for all CET exams',
    topics: [
      'Grammar Fundamentals',
      'Vocabulary Building',
      'Reading Comprehension',
      'Sentence Formation',
      'Idioms & Phrases',
      'Writing Skills',
    ],
    level: 'beginner',
    duration: '30 hours',
  },
  {
    id: 'cet-hindi',
    title: 'CET - हिंदी भाषा',
    description: 'हिंदी व्याकरण, शब्दावली और समझ',
    topics: [
      'हिंदी व्याकरण',
      'शब्दावली विकास',
      'पठन समझ',
      'वाक्य निर्माण',
      'मुहावरे और लोकोक्ति',
      'लेखन कौशल',
    ],
    level: 'intermediate',
    duration: '35 hours',
  },
  {
    id: 'group-d-syllabus',
    title: 'Haryana Group D Syllabus',
    description: 'Complete syllabus for Haryana Group D & HSSC CET examination',
    topics: [
      'General Awareness',
      'Haryana GK',
      'Indian History',
      'Geography',
      'Science & Technology',
      'Current Affairs',
    ],
    level: 'intermediate',
    duration: '60 hours',
  },
  {
    id: 'police-constable',
    title: 'Haryana Police Constable',
    description: 'Preparation guide for Haryana Police Constable recruitment',
    topics: [
      'General Knowledge',
      'Reasoning',
      'Mathematics',
      'English',
      'Physical & Mental Test',
      'Document Verification',
    ],
    level: 'intermediate',
    duration: '90 hours',
  },
]

const haryanaGKData: StudyMaterial[] = [
  {
    id: 'haryana-basic',
    title: 'हरियाणा - बेसिक जानकारी',
    description: 'Haryana के भूगोल, राजधानी, जनसंख्या और मुख्य तथ्य',
    topics: [
      'राज्य का गठन - 1 नवंबर 1966',
      'राजधानी - चंडीगढ़',
      'क्षेत्रफल - 44,212 km²',
      'जनसंख्या - 2.5 करोड़',
      'मुख्यमंत्री - मनोहर लाल खट्टर',
      'राज्यपाल - बंडारू दत्तात्रेय',
    ],
    level: 'beginner',
  },
  {
    id: 'haryana-districts',
    title: 'हरियाणा के जिले',
    description: 'Haryana के 23 जिलों की विस्तृत जानकारी',
    topics: [
      'फरीदाबाद',
      'गुड़गांव',
      'हिसार',
      'रोहतक',
      'पानीपत',
      'करनाल',
      'सोनीपत',
      'कुरुक्षेत्र',
    ],
    level: 'intermediate',
  },
  {
    id: 'haryana-history',
    title: 'हरियाणा का इतिहास',
    description: 'Haryana का प्राचीन, मध्यकालीन और आधुनिक इतिहास',
    topics: [
      'प्राचीन काल - महाभारत',
      'मौर्य साम्राज्य',
      'मुगल काल',
      'स्वतंत्रता संग्राम',
      'राज्य की स्थापना 1966',
      'आधुनिक विकास',
    ],
    level: 'intermediate',
  },
  {
    id: 'haryana-culture',
    title: 'हरियाणा की संस्कृति',
    description: 'त्योहार, परंपराएं, नृत्य और कला',
    topics: [
      'लोक नृत्य - डांडिया',
      'देशी नृत्य - घूमर',
      'प्रमुख त्योहार - लोहड़ी',
      'पारंपरिक कला',
      'खीर मखाना',
      'बायः और तरबूज',
    ],
    level: 'beginner',
  },
  {
    id: 'haryana-agriculture',
    title: 'हरियाणा की कृषि',
    description: 'कृषि उत्पाद, मुख्य फसलें और कृषि नीति',
    topics: [
      'मुख्य फसलें - गेहूं, चावल',
      'दूध उत्पादन',
      'हरित क्रांति का केंद्र',
      'सिंचाई व्यवस्था',
      'किसान कल्याण योजनाएं',
      'ऑर्गेनिक खेती',
    ],
    level: 'intermediate',
  },
  {
    id: 'haryana-industries',
    title: 'हरियाणा के उद्योग',
    description: 'औद्योगिक विकास, प्रमुख कंपनियां और आर्थिक नीति',
    topics: [
      'ऑटोमोबाइल उद्योग',
      'फार्मा सेक्टर',
      'आईटी पार्क',
      'वस्त्र उद्योग',
      'खाद्य प्रसंस्करण',
      'स्टार्टअप पॉलिसी',
    ],
    level: 'advanced',
  },
]

const currentAffairsData: StudyMaterial[] = [
  {
    id: 'ca-september-2025',
    title: 'करेंट अफेयर्स - सितंबर 2025',
    description: 'September 2025 के महत्वपूर्ण करंट अफेयर्स',
    topics: [
      'राष्ट्रीय समाचार',
      'अंतर्राष्ट्रीय समाचार',
      'विज्ञान और तकनीक',
      'खेल जगत',
      'पुरस्कार और सम्मान',
      'अर्थव्यवस्था',
    ],
    level: 'beginner',
  },
  {
    id: 'ca-august-2025',
    title: 'करेंट अफेयर्स - अगस्त 2025',
    description: 'August 2025 के महत्वपूर्ण करंट अफेयर्स',
    topics: [
      'स्वतंत्रता दिवस समारोह',
      'सरकारी नीतियां',
      'केंद्रीय परीक्षाएं',
      'राज्य समाचार',
      'शिक्षा क्षेत्र',
      'स्वास्थ्य और विज्ञान',
    ],
    level: 'beginner',
  },
  {
    id: 'ca-government-schemes',
    title: 'सरकारी योजनाएं',
    description: 'केंद्र और राज्य सरकार की महत्वपूर्ण योजनाएं',
    topics: [
      'प्रधान मंत्री योजनाएं',
      'शिक्षा योजनाएं',
      'स्वास्थ्य योजनाएं',
      'कृषि योजनाएं',
      'महिला कल्याण योजनाएं',
      'हरियाणा विशेष योजनाएं',
    ],
    level: 'intermediate',
  },
  {
    id: 'ca-awards',
    title: 'पुरस्कार और सम्मान 2025',
    description: 'राष्ट्रीय और अंतर्राष्ट्रीय पुरस्कार',
    topics: [
      'भारत रत्न',
      'राष्ट्रीय पुरस्कार',
      'साहित्य पुरस्कार',
      'अंतर्राष्ट्रीय सम्मान',
      'खेल पुरस्कार',
      'वैज्ञानिक पुरस्कार',
    ],
    level: 'intermediate',
  },
  {
    id: 'ca-banking',
    title: 'बैंकिंग और अर्थव्यवस्था',
    description: 'बैंकिंग सेक्टर और आर्थिक समाचार',
    topics: [
      'RBI मौद्रिक नीति',
      'बैंक मर्जर',
      'डिजिटल भुगतान',
      'क्रिप्टोकरेंसी',
      'शेयर बाजार',
      'विदेशी मुद्रा दरें',
    ],
    level: 'advanced',
  },
  {
    id: 'ca-international',
    title: 'अंतर्राष्ट्रीय सिनेमा',
    description: 'विश्व की महत्वपूर्ण घटनाएं और संधियां',
    topics: [
      'संयुक्त राष्ट्र संगठन',
      'BRICS और वैश्विक संगठन',
      'अंतर्राष्ट्रीय संधियां',
      'विश्व राजनीति',
      'जलवायु समझौते',
      'व्यापार समझौते',
    ],
    level: 'advanced',
  },
]

function MaterialCard({ material }: { material: StudyMaterial }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">{material.title}</h3>
            <p className="text-sm text-muted-foreground">{material.description}</p>
          </div>
          <Badge
            variant="outline"
            className={`ml-2 ${
              material.level === 'beginner'
                ? 'bg-green-50 text-green-700'
                : material.level === 'intermediate'
                  ? 'bg-blue-50 text-blue-700'
                  : 'bg-red-50 text-red-700'
            }`}
          >
            {material.level === 'beginner' ? 'Beginner' : material.level === 'intermediate' ? 'Intermediate' : 'Advanced'}
          </Badge>
        </div>

        {/* Topics */}
        <div className="mb-4 flex-grow">
          <p className="text-xs font-medium text-muted-foreground mb-2">Topics covered:</p>
          <div className="flex flex-wrap gap-2">
            {material.topics.slice(0, 3).map((topic, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
            {material.topics.length > 3 && <Badge variant="secondary" className="text-xs">+{material.topics.length - 3} more</Badge>}
          </div>
        </div>

        {/* Duration and Action */}
        <div className="flex items-center justify-between pt-4 border-t">
          {material.duration && (
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              {material.duration}
            </span>
          )}
          <Button size="sm" variant="outline" className="gap-1 ml-auto">
            <Download className="w-3 h-3" />
            Study Now
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default function StudyHubPage() {
  const [activeTab, setActiveTab] = useState<StudyTab>('syllabus')

  const tabData = {
    syllabus: {
      title: 'पाठ्यक्रम (Syllabus)',
      description: 'सभी महत्वपूर्ण परीक्षाओं के विस्तृत पाठ्यक्रम',
      materials: syllabusData,
      icon: FileText,
    },
    'haryana-gk': {
      title: 'हरियाणा GK (Haryana Knowledge)',
      description: 'हरियाणा के बारे में सामान्य ज्ञान',
      materials: haryanaGKData,
      icon: MapPin,
    },
    'current-affairs': {
      title: 'करंट अफेयर्स (Current Affairs)',
      description: 'ताजा समाचार और वर्तमान घटनाएं',
      materials: currentAffairsData,
      icon: TrendingUp,
    },
  }

  const currentTab = tabData[activeTab]
  const CurrentIcon = currentTab.icon

  return (
    <>
      <FooterLinkNavbar />
      <div className="min-h-screen bg-background pt-24 pb-12">
        {/* Back Button and Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-3">Study Hub</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive study materials for all competitive exams
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-12">
            {(Object.entries(tabData) as Array<[StudyTab, typeof tabData[StudyTab]]>).map(
              ([key, data]) => {
                const Icon = data.icon
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                      activeTab === key
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-card border border-border text-foreground hover:border-primary/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {data.title.split('(')[0].trim()}
                  </button>
                )
              }
            )}
          </div>

          {/* Content Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <CurrentIcon className="w-6 h-6 text-primary" />
              <div>
                <h2 className="text-2xl font-bold text-foreground">{currentTab.title}</h2>
                <p className="text-muted-foreground mt-1">{currentTab.description}</p>
              </div>
            </div>

            {/* Materials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentTab.materials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Get More Resources</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Download detailed notes, practice problems, and revision guides for comprehensive exam preparation.
            </p>
            <Button className="gap-2">
              <Download className="w-4 h-4" />
              Download All Materials
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <FooterLinkFooter />
    </>
  )
}
