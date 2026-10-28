import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <FooterLinkNavbar />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: October 29, 2026</p>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">No paid services currently offered</h2>
              <p className="text-muted-foreground leading-relaxed">CET TEST currently provides its listed mock tests, study materials and practice resources without subscription or examination fees. Because no paid product or subscription is currently offered, there are no purchases to refund under this policy.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">If paid services are introduced</h2>
              <p className="text-muted-foreground leading-relaxed">Before accepting any payment, CET TEST will publish the applicable price, billing terms, cancellation process and refund conditions on the relevant checkout and policy pages. Those terms will apply only to transactions made after publication and will not be applied retroactively.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">For questions about an unexpected charge or this policy, contact <a href="mailto:anujjaglan9423@gmail.com" className="text-primary hover:underline">anujjaglan9423@gmail.com</a> with the account email and transaction reference, if applicable.</p>
            </section>
          </div>
        </div>
      </main>
      <FooterLinkFooter />
    </div>
  )
}
