// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { BookOpen, ArrowLeft } from "lucide-react"
// import Footer from "@/components/footer"
// import FooterLinkNavbar from "@/components/footer-link-navbar"
// import FooterLinkFooter from "@/components/footer-link-footer"

// export default function TermsOfServicePage() {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <FooterLinkNavbar />

//       {/* Content */}
//       <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
//           <p className="text-muted-foreground mb-8">Last updated: January 1, 2026</p>
//           <section className="mb-8 rounded-xl border border-primary/20 bg-primary/[0.04] p-5"><h2 className="text-xl font-semibold text-foreground">Exam alert notifications</h2><p className="mt-2 text-muted-foreground leading-relaxed">You may give permission to receive browser push notifications about newly published exam alerts. Notifications are optional, may depend on browser and device support, and can be disabled from your browser settings at any time.</p></section>

//           <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 By accessing and using HSSC CET TEST, you accept and agree to be bound by the terms and provisions of
//                 this agreement. If you do not agree to these terms, please do not use our services.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 HSSC CET TEST provides online test series, practice questions, and study materials for HSSC CET
//                 examination preparation. Our services include mock tests, detailed analytics, and performance tracking
//                 features.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
//               <p className="text-muted-foreground leading-relaxed mb-4">
//                 To access certain features, you must register for an account. You agree to:
//               </p>
//               <ul className="list-disc list-inside text-muted-foreground space-y-2">
//                 <li>Provide accurate and complete information during registration</li>
//                 <li>Maintain the security of your password and account</li>
//                 <li>Notify us immediately of any unauthorized use of your account</li>
//                 <li>Accept responsibility for all activities that occur under your account</li>
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment and Subscriptions</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 Certain features require a paid subscription. All payments are processed securely. Subscription fees are
//                 charged in advance and are non-refundable except as provided in our Refund Policy.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 All content on HSSC CET TEST, including questions, explanations, and study materials, is the
//                 intellectual property of HSSC CET TEST. You may not reproduce, distribute, or create derivative works
//                 without our written permission.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">6. Prohibited Conduct</h2>
//               <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
//               <ul className="list-disc list-inside text-muted-foreground space-y-2">
//                 <li>Share your account credentials with others</li>
//                 <li>Copy or distribute our content without permission</li>
//                 <li>Use automated systems to access our services</li>
//                 <li>Interfere with the proper functioning of the platform</li>
//                 <li>Engage in any fraudulent or illegal activities</li>
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">7. Disclaimer</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 Our services are provided "as is" without warranties of any kind. We do not guarantee that our test
//                 series will result in success in the actual HSSC CET examination. Success depends on individual effort
//                 and various other factors.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 For any questions regarding these Terms of Service, please contact us at:
//               </p>
//               <ul className="list-none text-muted-foreground space-y-2 mt-4">
//                 <li>
//                   Email:{" "}
//                   <a href="mailto:anujjaglan9423@gmail.com" className="text-primary hover:underline">
//                     anujjaglan9423@gmail.com
//                   </a>
//                 </li>
//                 <li>
//                   Phone:{" "}
//                   <a href="tel:+917291849546" className="text-primary hover:underline">
//                     +91 7291849546
//                   </a>
//                 </li>
//                 <li>
//                   WhatsApp: {" "}
//                   <a
//                     href="https://wa.me/917291849546"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-primary hover:underline"
//                   >
//                     Chat with us on WhatsApp
//                   </a>
//                 </li>
//                 <li>
//                   Instagram:{" "}
//                   <a
//                     href="https://instagram.com/cet__test"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-primary hover:underline"
//                   >
//                     @cet__test
//                   </a>
//                 </li>
//               </ul>
//             </section>
//           </div>
//         </div>
//       </section>

//       <FooterLinkFooter />
//     </div>
//   )
// }

import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  BookOpenCheck,
  CheckCircle2,
  FileText,
  Info,
  Mail,
  ShieldCheck,
} from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

const SITE_URL = "https://cettest.site"
const UPDATED_AT = "2026-10-15"

export const metadata: Metadata = {
  title: "Terms of Service | Free Exam Preparation | CET TEST",
  description:
    "Read CET TEST's terms for free government exam preparation, mock tests, study materials, exam alerts, accounts, content use and advertising.",
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
  openGraph: {
    title: "Terms of Service | CET TEST",
    description:
      "Terms for using CET TEST's free mock tests, study resources and government exam alerts.",
    url: `${SITE_URL}/terms-of-service`,
    siteName: "CET TEST",
    type: "website",
  },
  robots: { index: true, follow: true },
}

const sections = [
  { id: "acceptance", label: "Acceptance of terms" },
  { id: "services", label: "Our free services" },
  { id: "independence", label: "Government affiliation and accuracy" },
  { id: "accounts", label: "Accounts and eligibility" },
  { id: "content", label: "Content and permitted use" },
  { id: "conduct", label: "Acceptable use" },
  { id: "alerts", label: "Exam alerts and notifications" },
  { id: "advertising", label: "Advertising and external links" },
  { id: "privacy", label: "Privacy and personal data" },
  { id: "availability", label: "Availability and changes" },
  { id: "disclaimer", label: "Disclaimers and liability" },
  { id: "contact", label: "Contact" },
]

const linkClass =
  "font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FooterLinkNavbar />

      <main id="main-content" className="px-4 pb-20 pt-28 sm:px-6 md:pt-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-7 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-foreground">Terms of Service</li>
            </ol>
          </nav>

          <header className="mb-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              <FileText className="size-3.5" aria-hidden="true" /> Legal information
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              These terms explain how you can use CET TEST to prepare for competitive examinations, access study resources, practise mock tests and follow recruitment updates.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: <time dateTime={UPDATED_AT}>15 October 2026</time>
            </p>
          </header>

          <div className="mb-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border bg-card p-5">
              <BookOpenCheck className="mb-3 size-6 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">Free preparation</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">CET TEST currently offers its exam-preparation resources without subscription fees.</p>
            </div>
            <div className="rounded-2xl border bg-card p-5">
              <ShieldCheck className="mb-3 size-6 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">Independent platform</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">We are not a government department, recruiting board or official examination authority.</p>
            </div>
            <div className="rounded-2xl border bg-card p-5">
              <CheckCircle2 className="mb-3 size-6 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">Verify official notices</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Always check exam dates, eligibility and instructions with the relevant official authority.</p>
            </div>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
            <aside className="hidden lg:block lg:sticky lg:top-28" aria-label="On this page">
              <div className="rounded-2xl border bg-card p-5">
                <h2 className="mb-4 text-sm font-semibold">On this page</h2>
                <ol className="space-y-2.5">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="block text-sm leading-5 text-muted-foreground transition-colors hover:text-primary">
                        {index + 1}. {section.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <article className="min-w-0 space-y-10 text-[15px] leading-8 text-muted-foreground sm:text-base">
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <Info className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Important information</h2>
                    <p className="mt-2">CET TEST is an independent educational website. Our mock tests, articles and alerts are intended for preparation and general information, not as official examination notices or guarantees of selection.</p>
                  </div>
                </div>
              </div>

              <section id="acceptance" className="scroll-mt-28">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">1. Acceptance of terms</h2>
                <p>By accessing or using CET TEST at <a className={linkClass} href={SITE_URL}>cettest.site</a>, you agree to these Terms of Service and acknowledge our <Link className={linkClass} href="/privacy-policy">Privacy Policy</Link>. If you do not agree, please stop using the platform. These terms apply to visitors and registered users.</p>
              </section>

              <section id="services" className="scroll-mt-28">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">2. Our free services</h2>
                <p>CET TEST provides educational resources for government and competitive examination preparation. Depending on availability, these may include:</p>
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  <li>Mock tests, practice questions, answers and explanations.</li>
                  <li>Study materials, preparation guides and educational blog articles.</li>
                  <li>Exam-related announcements, recruitment updates and links to external sources.</li>
                  <li>Account features such as saved progress, test history or performance insights, where offered.</li>
                </ul>
                <p className="mt-3">These services are currently provided free of subscription charges. CET TEST does not charge an examination application fee or collect payments on behalf of recruiting authorities. Any official examination fee is determined and collected by the relevant authority through its own channels.</p>
              </section>

              <section id="independence" className="scroll-mt-28">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">3. Government affiliation and accuracy</h2>
                <p>CET TEST is not affiliated with, endorsed by or operated by HSSC, HPSC, UKSSSC, UKPSC, SSC, Railway Recruitment Boards or any other government recruitment or examination authority unless expressly stated with verifiable evidence.</p>
                <p className="mt-3">We aim to keep educational content and exam alerts useful and accurate, but notices, schedules, syllabuses, eligibility rules, vacancies and deadlines may change. Content may be incomplete, delayed or contain errors. The official notification and the relevant authority's website take precedence over information on CET TEST. You are responsible for verifying details before submitting applications or making exam-related decisions.</p>
              </section>

              <section id="accounts" className="scroll-mt-28">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">4. Accounts and eligibility</h2>
                <p>Some features may require an account. If you register, provide accurate information, keep your login credentials secure and notify us if you suspect unauthorized access. Do not access another person's account without permission.</p>
                <p className="mt-3">If you are under 18, use the platform with the involvement of a parent or legal guardian as appropriate. Where applicable law requires verifiable parental consent before processing a child's personal data, that consent must be obtained before the relevant processing occurs. Please see our <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link> for information about personal data.</p>
              </section>

              <section id="content" className="scroll-mt-28">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">5. Content and permitted use</h2>
                <p>Unless otherwise indicated, original CET TEST content, branding, layouts, explanations and educational materials are owned by CET TEST or used with appropriate permission. You may access and use available resources for your personal, non-commercial study.</p>
                <p className="mt-3">You may not republish substantial portions of our original content, sell it, misrepresent it as your own or use our branding without permission. Government notifications and third-party materials remain subject to their respective ownership and usage terms. These terms do not restrict uses permitted by applicable law.</p>
              </section>

              <section id="conduct" className="scroll-mt-28">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">6. Acceptable use</h2>
                <p>When using CET TEST, you agree not to:</p>
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  <li>Attempt unauthorized access to accounts, servers or protected information.</li>
                  <li>Disrupt the service, introduce malicious code or abuse platform features.</li>
                  <li>Impersonate an examination authority or misrepresent our affiliation.</li>
                  <li>Use the platform for fraud, harassment or other unlawful activity.</li>
                  <li>Collect other users' personal data without authorization.</li>
                  <li>Scrape or reproduce protected content in a way that violates applicable law or these terms.</li>
                </ul>
              </section>

              <section id="alerts" className="scroll-mt-28">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">7. Exam alerts and browser notifications</h2>
                <p>Exam alerts are informational summaries and links, not official notifications issued by CET TEST. We do not guarantee that every notice will be listed, delivered immediately or remain current. Always confirm critical information on the recruiting authority's official website.</p>
                <p className="mt-3">If you choose to enable browser push notifications, delivery depends on your browser, device, network and notification permissions. Notifications are optional and can be disabled through your browser settings. Technical information used for notification delivery is addressed in our <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>.</p>
              </section>

              <section id="advertising" className="scroll-mt-28">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">8. Advertising and external links</h2>
                <p>To help support free access, CET TEST may display advertising, including ads served by third-party advertising partners such as Google, if and when enabled. Advertisements are separate from our educational content and do not represent an endorsement of the advertised product or service.</p>
                <p className="mt-3">Our pages may link to official recruitment portals and other third-party websites. We do not control their content, availability, security, privacy practices or application processes. Review the relevant website's terms and policies before sharing information or making payments.</p>
              </section>

              <section id="privacy" className="scroll-mt-28">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">9. Privacy and personal data</h2>
                <p>Our <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link> explains the categories of information we may collect, the purposes for which we use it, our service providers, advertising and cookie practices, notification subscriptions, and how to contact us about your information. Your use of the platform is subject to applicable data-protection laws.</p>
              </section>

              <section id="availability" className="scroll-mt-28">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">10. Availability and changes</h2>
                <p>We may update educational resources, correct errors, add or remove features, or temporarily restrict access for maintenance, security or operational reasons. We may also revise these terms. When we do, we will update the date shown at the top of this page. Material changes may be communicated through the website or other appropriate channels.</p>
              </section>

              <section id="disclaimer" className="scroll-mt-28">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">11. Disclaimers and liability</h2>
                <p>Educational materials and platform features are provided for general informational and preparation purposes. CET TEST does not guarantee examination results, selection, employment, uninterrupted availability or error-free content. To the extent permitted by applicable law, CET TEST is not responsible for losses arising from reliance on outdated or inaccurate third-party exam information or interruptions outside our reasonable control.</p>
                <p className="mt-3">Nothing in these terms excludes or limits any rights or remedies that cannot legally be excluded or limited under applicable law.</p>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">12. Contact</h2>
                <p>If you have a question about these terms or want to report a problem, contact CET TEST:</p>
                <div className="mt-4 rounded-2xl border bg-card p-5 sm:p-6">
                  <div className="mb-4 flex items-center gap-2 font-semibold text-foreground"><Mail className="size-5 text-primary" aria-hidden="true" /> CET TEST Support</div>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li>Email: <a className={linkClass} href="mailto:anujjaglan9423@gmail.com">anujjaglan9423@gmail.com</a></li>
                    <li>Phone: <a className={linkClass} href="tel:+917291849546">+91 7291849546</a></li>
                    <li>WhatsApp: <a className={linkClass} href="https://wa.me/917291849546" target="_blank" rel="noopener noreferrer">Contact on WhatsApp <ArrowUpRight className="inline size-4" aria-hidden="true" /></a></li>
                    <li>Instagram: <a className={linkClass} href="https://instagram.com/cet__test" target="_blank" rel="noopener noreferrer">@cet__test <ArrowUpRight className="inline size-4" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </section>

              <div className="rounded-2xl bg-muted/50 p-5 text-sm leading-7">
                Looking for how we handle personal information? Read the <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>. For exam preparation, return to the <Link href="/" className={linkClass}>CET TEST homepage</Link>.
              </div>
            </article>
          </div>
        </div>
      </main>
      <FooterLinkFooter />
    </div>
  )
}
