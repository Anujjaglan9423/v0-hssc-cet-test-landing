import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { AlertsPageContent } from "@/components/exam-alerts"

export const metadata = {
  title: "Exam Alerts | CET TEST",
  description: "Latest HSSC, UKSSSC, UKPSC and HPSC exam notifications in one place.",
}

export default function AlertsPage() {
  return <><Navbar /><AlertsPageContent /><Footer /></>
}
