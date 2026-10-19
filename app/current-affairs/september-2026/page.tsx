import type { Metadata } from 'next'
import FooterLinkNavbar from '@/components/footer-link-navbar'
import FooterLinkFooter from '@/components/footer-link-footer'
import SeptemberExplorer from '@/components/september-explorer'
import { articles, categories } from '@/lib/september-2026-data'

const canonical = 'https://cettest.site/current-affairs/september-2026'
export const metadata: Metadata = {
  title: 'September 2026 Current Affairs Notes, MCQs & Monthly Revision',
  description: 'Revise September 2026 current affairs for HSSC CET, SSC, UKSSSC and state exams. Explore topic-wise study notes, important facts and practice MCQs.',
  alternates: { canonical },
  keywords: ['September 2026 current affairs','September 2026 current affairs MCQ','HSSC CET current affairs','SSC current affairs September 2026','UKSSSC general awareness'],
  openGraph: { title: 'September 2026 Current Affairs | CET TEST', description: 'Topic-wise revision notes and free practice MCQs for government examinations.',url: canonical, type: 'article' },
}
export default function SeptemberCurrentAffairsPage() {
  const structured = {
    '@context':'https://schema.org', '@type':'CollectionPage', name:'September 2026 Current Affairs', url:canonical,
    description:'Original study notes and exam-style practice questions based on a September 2026 current affairs digest.',
    isAccessibleForFree:true, inLanguage:'en-IN',
    about: categories.map(c=>({ '@type':'Thing',name:c.name })),
    hasPart: articles.map(a=>({ '@type':'Article', headline:a.title, url:`${canonical}/${a.slug}` })),
    breadcrumb:{'@type':'BreadcrumbList', itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:'https://cettest.site'},
      {'@type':'ListItem',position:2,name:'Current Affairs',item:'https://cettest.site/current-affairs'},
      {'@type':'ListItem',position:3,name:'September 2026',item:canonical},
    ]},
  }
  return <div className="min-h-screen bg-background text-foreground">
    <FooterLinkNavbar />
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structured).replace(/</g,'\\u003c')}} />
      <SeptemberExplorer />
    </main>
    <FooterLinkFooter />
  </div>
}
