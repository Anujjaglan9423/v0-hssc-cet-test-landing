import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login | CET TEST - Sign In for Haryana CET & HSSC Mock Tests",
  description:
    "Sign in to CET TEST to access your personalized dashboard, resume Haryana CET, HSSC, SSC, Railway & UKSSSC mock test preparation, track performance & view results.",
  keywords: [
    "CET TEST login",
    "cettest.site sign in",
    "Haryana CET mock test login",
    "HSSC CET account login",
    "government exam preparation login",
    "online test series sign in",
  ],
  alternates: {
    canonical: "https://cettest.site/login",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Login | CET TEST - Access Your Mock Test Dashboard",
    description: "Sign in to CET TEST to resume your Haryana CET, HSSC, SSC, Railway & UKSSSC exam preparation.",
    url: "https://cettest.site/login",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Login - CET TEST" }],
  },
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
