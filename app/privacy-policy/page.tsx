// import FooterLinkNavbar from "@/components/footer-link-navbar"
// import FooterLinkFooter from "@/components/footer-link-footer"

// export default function PrivacyPolicyPage() {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <FooterLinkNavbar />

//       {/* Content */}
//       <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
//           <p className="text-muted-foreground mb-8">Last updated: September 8, 2026</p>
//           <section className="mb-8 rounded-xl border border-primary/20 bg-primary/[0.04] p-5"><h2 className="text-xl font-semibold text-foreground">Browser notifications</h2><p className="mt-2 text-muted-foreground leading-relaxed">If you choose to enable exam alerts, your browser provides CET TEST with a push subscription endpoint and encryption keys. We store this technical subscription data in Supabase only to deliver new exam notifications. We do not use it for advertising, and you can revoke permission in your browser settings at any time.</p></section>
//           <p className="mb-8 rounded-lg border bg-muted/30 p-4 text-sm leading-6 text-muted-foreground">This policy explains how CET TEST handles account, contact, usage, and advertising-related information. If you use the site, you agree to this policy and should review it when it changes.</p>

//           <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 We collect information you provide directly to us, including your name, email address, phone number, and
//                 any other information you choose to provide when you create an account, purchase a subscription, or
//                 contact us for support.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
//               <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
//               <ul className="list-disc list-inside text-muted-foreground space-y-2">
//                 <li>Provide, maintain, and improve our services</li>
//                 <li>Process transactions and send related information</li>
//                 <li>Send you technical notices, updates, and support messages</li>
//                 <li>Respond to your comments, questions, and requests</li>
//                 <li>Track your progress and provide personalized recommendations</li>
//                 <li>Monitor and analyze trends, usage, and activities</li>
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 We do not share, sell, rent, or trade your personal information with third parties for their commercial
//                 purposes. We may share information with service providers who assist us in operating our platform,
//                 conducting our business, or serving our users.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 We implement appropriate security measures to protect your personal information against unauthorized
//                 access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is
//                 100% secure.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">5. Retention and your choices</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 You have the right to ask about, update, or delete eligible personal information. You can do this
//                 by logging into your account settings or contacting us directly.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies, analytics, and advertising</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 The site may use cookies or similar technologies for sign-in, preferences, analytics, security, and advertising. Google and other advertising partners may use cookies to show and measure relevant ads according to their own policies. You can manage cookies through your browser settings and review Google&apos;s advertising controls. We do not promise that every third-party service will be available at all times.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 If you have any questions about this Privacy Policy, please contact us at:
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
import { ArrowUpRight, LockKeyhole, ShieldCheck } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

const SITE_URL = "https://cettest.site"
const LAST_REVIEWED = "2026-10-15"

export const metadata: Metadata = {
  title: "Privacy Policy | CET TEST",
  description:
    "Read how CET TEST handles account details, mock-test progress, browser notifications, cookies and advertising data on its free government exam preparation platform.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy | CET TEST",
    description: "How CET TEST protects and uses information when you study, practise mock tests and receive exam alerts.",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
    siteName: "CET TEST",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
}

const sections = [
  { id: "overview", label: "Overview" },
  { id: "information", label: "Information we collect" },
  { id: "uses", label: "How information is used" },
  { id: "notifications", label: "Exam-alert notifications" },
  { id: "cookies", label: "Cookies and advertising" },
  { id: "sharing", label: "Sharing and service providers" },
  { id: "children", label: "Children and students under 18" },
  { id: "retention", label: "Retention, security and choices" },
  { id: "rights", label: "Your privacy rights" },
  { id: "links", label: "External websites" },
  { id: "changes", label: "Policy updates" },
  { id: "contact", label: "Contact" },
]

const externalClass = "font-medium text-primary underline underline-offset-4 hover:no-underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FooterLinkNavbar />
      <main id="main-content" className="px-4 pb-20 pt-28 sm:px-6 md:pt-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary focus-visible:underline">Home</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span aria-current="page" className="text-foreground">Privacy Policy</span>
          </nav>

          <header className="max-w-3xl border-b border-border pb-9">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
              <ShieldCheck aria-hidden="true" className="size-4" /> Privacy and transparency
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              CET TEST provides free study resources, practice questions, mock tests and government exam updates.
              This policy explains what personal information may be processed when you use our website and how you can manage it.
            </p>
            <p className="mt-5 text-sm text-muted-foreground">
              Last reviewed: <time dateTime={LAST_REVIEWED}>15 October 2026</time>
            </p>
          </header>

          <div className="mt-10 grid gap-10 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14">
            <aside className="hidden lg:block">
              <nav aria-label="Privacy policy contents" className="sticky top-24 rounded-2xl border border-border bg-card p-5">
                <p className="mb-4 text-sm font-semibold">On this page</p>
                <ul className="space-y-2.5">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="block text-sm leading-5 text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary focus-visible:underline">
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <article className="min-w-0 max-w-3xl space-y-11 text-[15px] leading-8 text-muted-foreground sm:text-base [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:tracking-tight [&_h2]:text-foreground [&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_section]:scroll-mt-28 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
              <section id="overview">
                <h2>1. About CET TEST</h2>
                <p>
                  CET TEST is an independent educational website offering free competitive-exam preparation content.
                  You can browse publicly available guides and exam information without providing account details.
                  Some features, such as saving test attempts or progress, may require an account.
                </p>
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-6">
                  <LockKeyhole aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p><strong className="text-foreground">Free preparation:</strong> CET TEST does not require payment to access its free study materials and practice features. Advertising, if displayed, helps support the website and is separate from exam content.</p>
                </div>
              </section>

              <section id="information">
                <h2>2. Information we collect</h2>
                <p>Depending on the features you use, information may include:</p>
                <ul className="mt-3">
                  <li><strong className="text-foreground">Account and contact information:</strong> details you submit when registering, signing in or contacting support, such as a name, email address or phone number, where requested.</li>
                  <li><strong className="text-foreground">Learning activity:</strong> mock-test attempts, responses, scores and saved study progress when these features are associated with your account.</li>
                  <li><strong className="text-foreground">Technical information:</strong> browser or device details, IP address, basic request logs and security-related data that may be processed by our hosting and other service providers.</li>
                  <li><strong className="text-foreground">Optional notification information:</strong> browser push-subscription endpoint and related encryption keys if you choose to subscribe to exam alerts.</li>
                  <li><strong className="text-foreground">Cookie and advertising information:</strong> identifiers or usage signals that may be processed by analytics and advertising services if those services are enabled.</li>
                </ul>
                <p className="mt-4">Please do not submit Aadhaar numbers, PAN numbers, bank details or other sensitive identity documents through ordinary support messages.</p>
              </section>

              <section id="uses">
                <h2>3. How we use information</h2>
                <ul>
                  <li>Provide access to exam-preparation resources and account features.</li>
                  <li>Save and display test history, results and learning progress where supported.</li>
                  <li>Deliver exam-alert notifications only when you opt in.</li>
                  <li>Respond to questions and support requests.</li>
                  <li>Maintain site reliability, detect misuse and protect accounts.</li>
                  <li>Understand aggregate website usage and improve educational content, where analytics are enabled.</li>
                  <li>Display and measure advertising if advertising services are active, subject to applicable privacy and consent requirements.</li>
                </ul>
              </section>

              <section id="notifications">
                <h2>4. Optional browser notifications</h2>
                <p>
                  If you choose to enable browser notifications, your browser creates a push subscription containing a technical endpoint and encryption keys.
                  CET TEST may store this subscription in Supabase to send exam-related alerts. These subscription details are not intended for advertising targeting.
                </p>
                <p className="mt-3">
                  Notifications are optional. You can block or revoke permission in your browser settings. If you want a stored subscription removed, contact us using the details below.
                  Revoking browser permission does not necessarily delete a subscription record already stored on our server.
                </p>
              </section>

              <section id="cookies">
                <h2>5. Cookies, analytics and Google advertising</h2>
                <p>
                  Cookies and similar technologies may be used for account sessions, security, preferences, analytics and advertising.
                  Essential cookies support website functionality. Optional analytics and advertising technologies may collect or access device identifiers and information about your use of the site, depending on the services enabled and your choices.
                </p>
                <h3>Google AdSense and advertising partners</h3>
                <p>
                  If Google AdSense is enabled on CET TEST, Google and its advertising partners may use cookies or similar technologies to serve, personalize and measure ads.
                  Google may use advertising cookies to show ads based on visits to this and other websites, subject to applicable settings and consent.
                  We do not sell a list of student accounts to advertisers; however, advertising technologies may involve the collection, use or sharing of online identifiers and related data by Google and its partners.
                </p>
                <p className="mt-3">
                  Learn more in <a className={externalClass} href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google's advertising privacy information <ArrowUpRight className="inline size-3" aria-hidden="true" /></a> and manage ad personalization at <a className={externalClass} href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer">Google My Ad Center <ArrowUpRight className="inline size-3" aria-hidden="true" /></a>.
                  You can also manage or block cookies in your browser, although doing so may affect some features.
                </p>
                <h3>Consent choices</h3>
                <p>
                  Where applicable law requires consent for optional cookies, advertising or personal-data processing, consent choices must be presented before the relevant processing takes place.
                  For eligible visitors in the European Economic Area, the United Kingdom and Switzerland, Google advertising may require a Google-certified consent management platform.
                  This policy explains those choices but does not itself display a consent banner or change your browser settings.
                </p>
              </section>

              <section id="sharing">
                <h2>6. Service providers and data sharing</h2>
                <p>
                  Information may be processed by providers that help operate CET TEST, such as hosting, authentication, database, notification-delivery, security and support services.
                  Supabase is used for browser push-subscription storage as described above. If analytics or advertising services are enabled, their providers may also process relevant technical information and identifiers under their own policies.
                </p>
                <p className="mt-3">
                  We do not offer student contact lists for sale. We may disclose information when required by law, to protect the service, or in connection with a legitimate operational need subject to applicable legal requirements.
                </p>
              </section>

              <section id="children">
                <h2>7. Children and students under 18</h2>
                <p>
                  CET TEST provides educational information that may be useful to school students and competitive-exam aspirants.
                  Under India's Digital Personal Data Protection Act, 2023, a child generally means a person under 18.
                  Applicable requirements can include verifiable parental consent before processing a child's personal data and restrictions on tracking, behavioural monitoring and targeted advertising directed at children, subject to the law's implementation and any applicable exceptions.
                </p>
                <p className="mt-3">
                  Visitors under 18 should use public study content with guidance from a parent or guardian and should not provide personal information for an account or optional features unless the required parental permissions and safeguards are in place.
                  If you believe a child has provided personal data without the necessary authorization, please contact us so we can review the request and take appropriate action.
                </p>
                <p className="mt-3">
                  Publishing this policy does not itself implement age checks or parental-consent verification. These safeguards must be implemented separately wherever legally required.
                </p>
              </section>

              <section id="retention">
                <h2>8. Retention, security and your choices</h2>
                <p>
                  We aim to keep personal information only for as long as reasonably necessary for the purposes described here, including maintaining accounts, delivering requested features, resolving support issues and meeting applicable legal obligations.
                  Different records may have different retention periods. We use reasonable technical and organizational safeguards, but no internet service can guarantee absolute security.
                </p>
                <ul className="mt-3">
                  <li>You can disable browser notifications at any time.</li>
                  <li>You can manage cookies through your browser and applicable consent controls.</li>
                  <li>You can request correction or deletion of eligible account information by contacting us.</li>
                  <li>You can stop using optional account-based features while continuing to browse public study content.</li>
                </ul>
              </section>

              <section id="rights">
                <h2>9. Your privacy rights</h2>
                <p>
                  Depending on your location and the laws applicable to your information, you may have rights to request information about processing, correction, updating, erasure, withdrawal of consent, or grievance redressal.
                  India's Digital Personal Data Protection Act, 2023 and associated rules establish a framework for personal-data protection as relevant provisions come into effect.
                  To submit a privacy request, email us with enough information to identify the account or feature involved; do not include passwords or sensitive identity documents in your first message.
                </p>
              </section>

              <section id="links">
                <h2>10. Official notices and external websites</h2>
                <p>
                  CET TEST may link to official recruitment boards, exam authorities and other third-party websites.
                  Their privacy practices and content are controlled by those organizations, not CET TEST.
                  Please review their policies before submitting an application or sharing personal information.
                </p>
              </section>

              <section id="changes">
                <h2>11. Changes to this policy</h2>
                <p>
                  We may revise this policy when website features, service providers, advertising arrangements or legal requirements change.
                  Material changes will be reflected on this page with an updated review date, and additional notice will be provided where required.
                </p>
              </section>

              <section id="contact">
                <h2>12. Contact CET TEST</h2>
                <p>For questions about this policy or requests relating to personal information, contact:</p>
                <div className="mt-5 rounded-xl border border-border bg-card p-5 sm:p-6">
                  <p className="font-semibold text-foreground">CET TEST Support</p>
                  <p className="mt-2">Email: <a className={externalClass} href="mailto:anujjaglan9423@gmail.com">anujjaglan9423@gmail.com</a></p>
                  <p>Phone: <a className={externalClass} href="tel:+917291849546">+91 7291849546</a></p>
                  <p>Instagram: <a className={externalClass} href="https://instagram.com/cet__test" target="_blank" rel="noopener noreferrer">@cet__test</a></p>
                </div>
              </section>

              <div className="border-t border-border pt-6 text-sm">
                <p>For more information about the platform, visit the <Link className={externalClass} href="/">CET TEST homepage</Link> or explore our <Link className={externalClass} href="/blog">free exam preparation guides</Link>.</p>
              </div>
            </article>
          </div>
        </div>
      </main>
      <FooterLinkFooter />
    </div>
  )
}
