import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, BookOpen, CalendarDays, Clock3, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import FooterLinkNavbar from '@/components/footer-link-navbar'
import FooterLinkFooter from '@/components/footer-link-footer'

export const metadata: Metadata = {
  title: 'Exam Preparation Blog | CET TEST',
  description: 'Hardcoded exam preparation articles, study strategies and Haryana CET guidance.',
}

const posts = [
  { slug: 'haryana-cet-30-day-plan', title: 'Haryana CET की तैयारी के लिए 30 दिन का प्लान', category: 'Preparation Strategy', date: 'September 18, 2025', read: '6 min read', description: 'एक practical 30-day study plan बनाकर syllabus को छोटे, achievable targets में पूरा करें और daily revision का सही तरीका सीखें.' },
  { slug: 'haryana-gk-important-topics', title: 'Haryana GK: परीक्षा में बार-बार पूछे जाने वाले topics', category: 'Haryana GK', date: 'September 12, 2025', read: '5 min read', description: 'इतिहास, भूगोल, संस्कृति और प्रशासन से जुड़े उन topics की checklist जो CET और Group D में सबसे जरूरी हैं.' },
  { slug: 'mock-test-analysis-guide', title: 'Mock test देने के बाद analysis कैसे करें?', category: 'Test Strategy', date: 'September 05, 2025', read: '7 min read', description: 'सिर्फ test देना काफी नहीं है. गलतियों की तीन categories बनाकर score और accuracy तेजी से improve करने का तरीका.' },
  { slug: 'current-affairs-notes-method', title: 'Current Affairs के notes बनाने का smart तरीका', category: 'Current Affairs', date: 'August 28, 2025', read: '4 min read', description: 'Daily news को exam-ready short notes में बदलने की simple system, जिससे revision के समय आपका समय बचे.' },
  { slug: 'maths-speed-accuracy', title: 'Maths में speed और accuracy बढ़ाने की 5 आदतें', category: 'Mathematics', date: 'August 20, 2025', read: '5 min read', description: 'Calculation shortcuts, timed sets और error notebook से quantitative aptitude में score बढ़ाने की strategy.' },
  { slug: 'exam-day-checklist', title: 'Exam day checklist: केंद्र जाने से पहले क्या करें', category: 'Exam Guidance', date: 'August 14, 2025', read: '3 min read', description: 'Admit card, ID proof, reporting time और final revision को लेकर एक साफ, practical checklist.' },
]

export default function BlogPage() {
  return <><FooterLinkNavbar /><main className="min-h-screen bg-background pt-24 pb-16"><section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mb-12"><Badge className="mb-5 gap-2"><Sparkles className="w-3 h-3" />CET TEST Journal</Badge><h1 className="text-4xl sm:text-5xl font-bold mb-5">Study smarter. <span className="text-primary">Score higher.</span></h1><p className="text-lg text-muted-foreground">Practical guidance, Haryana GK notes and proven strategies for your next government exam.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{posts.map((post) => <Link href={`/blog/${post.slug}`} key={post.slug} className="group"><Card className="h-full hover:shadow-lg hover:border-primary/40 transition-all"><div className="h-2 bg-gradient-to-r from-primary to-accent" /><CardContent className="p-6 flex flex-col h-[270px]"><Badge variant="secondary" className="w-fit mb-4">{post.category}</Badge><h2 className="text-xl font-semibold leading-snug mb-3 group-hover:text-primary transition-colors">{post.title}</h2><p className="text-sm text-muted-foreground line-clamp-3 flex-1">{post.description}</p><div className="border-t pt-4 flex items-center justify-between text-xs text-muted-foreground"><span className="flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" />{post.date}</span><span className="flex items-center gap-1"><Clock3 className="w-3.5 h-3.5" />{post.read}</span></div><div className="mt-3 text-sm text-primary font-medium flex items-center gap-1">Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div></CardContent></Card></Link>)}</div><div className="mt-12 rounded-2xl bg-primary/10 border border-primary/20 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5"><div><h2 className="text-xl font-bold mb-2">Keep your preparation consistent</h2><p className="text-muted-foreground">Read a guide, revise your notes and practice a mock test every day.</p></div><Link href="/mock-test"><span className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Start mock test <BookOpen className="w-4 h-4" /></span></Link></div></section></main><FooterLinkFooter /></>
}
