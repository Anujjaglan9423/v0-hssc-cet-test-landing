import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, BookOpen, ChevronRight, CircleCheck, FileText, GraduationCap } from 'lucide-react'
import FooterLinkNavbar from '@/components/footer-link-navbar'
import FooterLinkFooter from '@/components/footer-link-footer'
import { articleBySlug, articles, categories } from '@/lib/september-2026-data'

type Props = { params: Promise<{ slug: string }> }
const rootUrl = 'https://cettest.site/current-affairs/september-2026'
export function generateStaticParams() { return articles.map(a=>({slug:a.slug})) }
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params
  const article = articleBySlug(slug)
  if(!article) return { title:'Topic not found' }
  return {
    title: `${article.title} – September 2026 Current Affairs`,
    description: `${article.summary} Read important facts, quick revision takeaway and exam practice question on CET TEST.`,
    alternates:{canonical:`${rootUrl}/${slug}`},
    openGraph:{title:article.title,description:article.summary,type:'article',url:`${rootUrl}/${slug}`},
  }
}
export default async function SeptemberArticlePage({params}: Props) {
  const {slug}=await params
  const item=articleBySlug(slug)
  if(!item) notFound()
  const cat=categories.find(c=>c.id===item.category)
  const related=articles.filter(a=>a.category===item.category&&a.slug!==item.slug).slice(0,3)
  const schema={
    '@context':'https://schema.org','@type':'Article',headline:item.title,description:item.summary,
    url:`${rootUrl}/${item.slug}`,isAccessibleForFree:true,inLanguage:'en-IN',
    author:{'@type':'Organization',name:'CET TEST'},publisher:{'@type':'Organization',name:'CET TEST',url:'https://cettest.site'},
    isBasedOn:{'@type':'CreativeWork',name:'Saraansh Monthly Current Affairs, September 2026',creator:{'@type':'Organization',name:'Drishti IAS'},url:'https://www.drishtiias.com'},
    breadcrumb:{'@type':'BreadcrumbList',itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:'https://cettest.site'},
      {'@type':'ListItem',position:2,name:'Current Affairs',item:'https://cettest.site/current-affairs'},
      {'@type':'ListItem',position:3,name:'September 2026',item:rootUrl},
      {'@type':'ListItem',position:4,name:item.title,item:`${rootUrl}/${slug}`},
    ]},
  }
  return <div className="min-h-screen bg-background text-foreground"><FooterLinkNavbar/><main className="px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><div className="mx-auto max-w-6xl"><nav aria-label="Breadcrumb" className="mb-9 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"><Link href="/" className="hover:text-primary">Home</Link><ChevronRight size={13}/><Link href="/current-affairs" className="hover:text-primary">Current Affairs</Link><ChevronRight size={13}/><Link href="/current-affairs/september-2026" className="hover:text-primary">September 2026</Link><ChevronRight size={13}/><span className="text-foreground">{item.title}</span></nav><div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_270px]"><article><div className="mb-5 flex flex-wrap items-center gap-3"><span className="rounded-md bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">{cat?.name}</span><span className="text-xs text-muted-foreground">September 2026 • Source page {item.sourcePage}</span></div><h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{item.title}</h1><p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">{item.summary}</p><div className="my-8 border-t border-border"/><section aria-labelledby="facts-heading"><h2 id="facts-heading" className="mb-5 flex items-center gap-2 text-xl font-bold"><BookOpen className="size-5 text-primary"/> Important facts for the exam</h2><ul className="space-y-3">{item.facts.map(f=><li key={f} className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm leading-7"><CircleCheck className="mt-1 size-4 shrink-0 text-primary"/>{f}</li>)}</ul></section><section className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5"><h2 className="flex items-center gap-2 font-bold"><GraduationCap className="size-5 text-primary"/> Quick revision</h2><p className="mt-2 text-sm leading-7">{item.takeaway}</p></section><section className="mt-8 rounded-xl border border-border bg-card p-5"><h2 className="flex items-center gap-2 font-bold"><FileText className="size-5 text-primary"/> Check your understanding</h2><p className="mt-3 text-sm leading-7">{item.question}</p><Link href="/current-affairs/september-2026#practice" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Attempt monthly practice test <ArrowRight size={15}/></Link></section><div className="mt-8 border-t border-border pt-6 text-xs leading-6 text-muted-foreground">Editorial reference: <em>Saraansh — Monthly Current Affairs, September 2026</em>, printed page {item.sourcePage}, Drishti IAS. This is an original CET TEST study summary, not a reproduction of the publisher’s text. <a className="text-primary underline" href="https://www.drishtiias.com" target="_blank" rel="noopener noreferrer">Publisher website</a>.</div><Link href="/current-affairs/september-2026#topics" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"><ArrowLeft size={16}/> All September topics</Link></article><aside className="lg:sticky lg:top-24 lg:self-start"><div className="rounded-xl border border-border bg-card p-5"><h2 className="text-base font-bold">More in {cat?.name}</h2><ul className="mt-4 space-y-4">{related.length?related.map(a=><li key={a.slug}><Link href={`/current-affairs/september-2026/${a.slug}`} className="group flex items-start justify-between gap-2 text-sm leading-6 hover:text-primary">{a.title}<ArrowRight size={14} className="mt-1 shrink-0 text-muted-foreground group-hover:text-primary"/></Link></li>):<li className="text-sm text-muted-foreground">Explore other subjects in the September digest.</li>}</ul><Link href="/current-affairs/september-2026" className="mt-6 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-primary">Browse full digest <ArrowRight size={15}/></Link></div></aside></div></div></main><FooterLinkFooter/></div>
}
