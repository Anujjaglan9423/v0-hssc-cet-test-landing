import type React from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { PWAInstallPrompt } from "@/components/pwa-install-prompt";
import Script from "next/script";
import { GoogleAnalytics } from "@/components/google-analytics";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { InstagramFloat } from "@/components/instagram-float";
import "./globals.css";

// Vendored, OFL-licensed fonts keep production builds independent of Google Fonts.
const geistMono = localFont({
  src: "../public/fonts/geist-mono-latin.woff2",
  display: "swap",
  variable: "--font-geist-mono",
  weight: "100 900",
  preload: false,
});
const inter = localFont({
  src: "../public/fonts/inter-latin.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
});
const devanagari = localFont({
  src: "../public/fonts/noto-sans-devanagari.woff2",
  display: "swap",
  variable: "--font-devanagari",
  weight: "100 900",
  preload: false,
});

// ============================================
// SITE CONFIGURATION
// ============================================
const SITE_URL = "https://cettest.site";
const SITE_NAME = "CET TEST";
const INSTAGRAM_HANDLE = "cet__test";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;
const SUPPORT_EMAIL = "cettest.education@gmail.com";
const SUPPORT_PHONE = "+917291849546";
const SUPPORT_PHONE_DISPLAY = "7291849546";
const GA_MEASUREMENT_ID = "G-W5ZGFTDCTP";

// ============================================
// SEO, AEO & GEO OPTIMIZED METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "CET TEST | Practice tests and study resources for government exams",
    template: "%s | CET TEST",
  },

  description:
    "CET TEST provides practice tests, exam guidance, study materials, and performance review tools for Haryana CET, HSSC, SSC, Railway, and related competitive exams.",

  keywords: [
    "Haryana CET preparation",
    "HSSC CET practice tests",
    "government exam study materials",
    "SSC practice tests",
    "Railway exam preparation",
    "Haryana GK notes",
  ],

  authors: [{ name: "CET TEST", url: SITE_URL }],
  creator: "CET TEST",
  publisher: "CET TEST",

  generator: "CET TEST Platform",
  manifest: "/manifest.json",

  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    url: SITE_URL,
    title:
      "CET TEST - Free Mock Tests for Haryana CET, HSSC, SSC, Railway, UKSSSC & All Govt Exams 2026",
    description:
      "Free mock tests and study resources for Haryana CET, HSSC, SSC, Railway, UKSSSC and related government exams, with instant results and performance analytics.",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CET TEST - Free Mock Tests for All Government Exams 2026",
      },
    ],
    emails: [SUPPORT_EMAIL],
    phoneNumbers: [SUPPORT_PHONE],
    countryName: "India",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "CET TEST - Free Mock Tests for All Government Exams 2026 | SSC, Railway, Banking, Haryana CET",
    description:
      "Explore government exam practice tests and study resources. Review test answers and track your progress on CET TEST.",
    images: ["/og-image.png"],
  },

  verification: {
    google: "lm_5SF7FbX7_uM8Ze3BkTudNFttvMjDieo6Tz0hQqEY",
  },

  category: "Education",
  classification: "Government Exam Preparation, Mock Tests, Online Education",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_NAME,
  },

  icons: {
    icon: [{ url: "/seasonal-icon", type: "image/png" }],
    apple: [{ url: "/seasonal-icon", sizes: "180x180", type: "image/png" }],
  },

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0f172a",
  viewportFit: "cover",
};

// ============================================
// ROOT LAYOUT COMPONENT
// ============================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ============================================
  // COMPREHENSIVE STRUCTURED DATA FOR ALL EXAMS
  // ============================================
  // Sitewide organization identity only. Page-specific FAQ/Article schema belongs
  // on the corresponding visible content page, not on every route.
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/seasonal-icon`,
        description:
          "Free practice tests and study material for government exam preparation.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SUPPORT_PHONE,
          email: SUPPORT_EMAIL,
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [INSTAGRAM_URL],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["en-IN", "hi-IN"],
      },
    ],
  };

  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${geistMono.variable} ${devanagari.variable}`}
    >
      <head>
        {/* ===== BASE META TAGS ===== */}
        <meta charSet="utf-8" />

        {/* ===== GEO TARGETING FOR ALL INDIA ===== */}
        <meta name="geo.country" content="IN" />

        {/* ===== LANGUAGE TARGETING ===== */}
        <meta name="language" content="English, Hindi" />
        <meta name="target_country" content="India" />
        <meta
          name="audience"
          content="students, government job aspirants, competitive exam candidates, graduates, postgraduates"
        />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />

        {/* ===== AUTHOR & OWNERSHIP ===== */}
        <meta name="author" content="CET TEST" />
        <meta name="owner" content="CET TEST" />
        <meta
          name="copyright"
          content={`${new Date().getFullYear()} CET TEST`}
        />

        {/* ===== EXAM COVERAGE META ===== */}
        <meta
          name="exams-covered"
          content="SSC CGL, SSC CHSL, SSC MTS, RRB NTPC, Railway Group D, Haryana CET, HSSC CET, Police Constable, UKSSSC, IBPS PO, SBI PO, CTET, HTET, NDA, CDS, TET, UPSSSC, BPSC, MPPSC, REET, UPTET, DSSSB, KVS, NVS, LIC, GIC, FCI, ESIC, AIIMS, and more"
        />
        <meta
          name="features"
          content="government exam mock tests, study materials, practice questions, answer review"
        />

        {/* ===== ADDITIONAL SEO & ADSENSE META ===== */}
        <meta
          name="google-site-verification"
          content="lm_5SF7FbX7_uM8Ze3BkTudNFttvMjDieo6Tz0hQqEY"
        />
        <meta name="google-adsense-account" content="ca-pub-7892065085240733" />

        {/* ===== PWA & APPLE META ===== */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />

        {/* ===== SOCIAL MEDIA - INSTAGRAM ===== */}
        <meta property="og:see_also" content={INSTAGRAM_URL} />
        <meta name="instagram:creator" content={INSTAGRAM_HANDLE} />
        <meta name="instagram:official" content="true" />

        {/* ===== CONTACT INFORMATION META ===== */}
        <meta name="contact-email" content={SUPPORT_EMAIL} />
        <meta name="contact-phone" content={SUPPORT_PHONE_DISPLAY} />
        <meta
          name="support-hours"
          content="9 AM - 9 PM IST, Monday to Saturday"
        />

        {/* ===== FAVICON & ICONS ===== */}

        {/* ===== PRELOAD & PERFORMANCE ===== */}
        <link rel="preconnect" href="https://vercel.live" />

        {/* ===== GOOGLE ADSENSE ===== */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7892065085240733"
          strategy="afterInteractive"
          async
          crossOrigin="anonymous"
        />

        {/* ===== GOOGLE ANALYTICS 4 ===== */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
            `,
          }}
        />

        {/* ===== GTRANSLATE LANGUAGE WIDGET ===== */}
        <Script
          id="gtranslate-settings"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.gtranslateSettings = {
                default_language: "en",
                languages: ["en", "hi"],
                globe_color: "#66aaff",
                wrapper_selector: ".gtranslate_wrapper"
              };
            `,
          }}
        />
        <Script
          id="gtranslate-widget"
          src="https://cdn.gtranslate.net/widgets/latest/float.js"
          strategy="afterInteractive"
        />

        {/* ===== STRUCTURED DATA (JSON-LD) FOR SEO/AEO ===== */}
        <script
          id="structured-data-main"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        {/* ===== SERVICE WORKER REGISTRATION ===== */}
        <Script
          id="sw-registration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch((err) => {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
      </head>

      <body className="antialiased">
        {children}
        <InstagramFloat />
        <WhatsAppFloat />
        <div
          className="gtranslate_wrapper"
          aria-label="Website language options"
        />

        {/* PWA Install Prompt */}
        <PWAInstallPrompt />
        {/* Google Analytics page tracking */}
        <GoogleAnalytics />
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
