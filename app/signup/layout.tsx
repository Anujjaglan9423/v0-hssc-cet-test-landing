import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up Free | CET TEST - Start Haryana CET & HSSC Mock Test Preparation",
  description:
    "Create your free CET TEST account and start practicing Haryana CET, HSSC CET, HSSC Police Constable, SSC CGL, Railway RRB NTPC & UKSSSC mock tests instantly. No payment required to start!",
  keywords: [
    "CET TEST sign up free",
    "Haryana CET free account",
    "HSSC CET free registration",
    "cettest.site signup",
    "free mock test registration",
    "government exam preparation free account",
    "HSSC mock test free signup",
    "online test series free registration India",
  ],
  alternates: {
    canonical: "https://cettest.site/signup",
  },
  openGraph: {
    title: "Sign Up Free | CET TEST - Start Haryana CET & HSSC Preparation",
    description:
      "Join 50,000+ students. Create your free account & start Haryana CET, HSSC, SSC, Railway & UKSSSC mock test preparation instantly.",
    url: "https://cettest.site/signup",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sign Up Free - CET TEST" }],
  },
}

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
