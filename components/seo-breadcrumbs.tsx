import Link from "next/link"
import Script from "next/script"

type BreadcrumbItem = { name: string; href: string }

export function SeoBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Home", href: "/" }, ...items]
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://cettest.site${item.href}`,
    })),
  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === allItems.length - 1 ? (
                <span aria-current="page" className="font-medium text-foreground">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-foreground hover:underline">{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
    </>
  )
}

export function AuthorBio() {
  return (
    <aside className="mx-auto mt-8 max-w-4xl rounded-2xl border border-border bg-card p-6" aria-labelledby="author-bio-title">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Written and reviewed by</p>
      <h2 id="author-bio-title" className="mt-2 text-xl font-bold text-foreground">CET TEST Editorial Team</h2>
      <p className="mt-2 leading-relaxed text-muted-foreground">Our editorial team creates and reviews exam preparation content using official syllabi, published notices, and previous-year question trends. We update time-sensitive guidance and clearly distinguish independent study advice from official recruitment information.</p>
      <Link href="/about" className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline">Meet the team and read our editorial policy</Link>
    </aside>
  )
}
