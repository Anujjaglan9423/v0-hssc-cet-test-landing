import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study Materials - HSSC CET Test",
  description: "Access comprehensive study materials including PDFs, images, and video tutorials for exam preparation",
}

export default function StudyMaterialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
