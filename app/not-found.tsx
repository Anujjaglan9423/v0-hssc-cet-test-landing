import Link from "next/link";
import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <FooterLinkNavbar />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-36 text-center">
        <p className="font-semibold text-primary">404</p>
        <h1 className="mt-4 text-4xl font-bold">This page is not available</h1>
        <p className="mt-5 leading-8 text-muted-foreground">
          The address may be incorrect or the resource may have been removed.
          Use the study hub to find available guides and practice resources.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/study-materials-hub"
            className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground"
          >
            Browse study materials
          </Link>
          <Link href="/" className="rounded-lg border px-5 py-3 font-semibold">
            Back to home
          </Link>
        </div>
      </main>
      <FooterLinkFooter />
    </div>
  );
}
