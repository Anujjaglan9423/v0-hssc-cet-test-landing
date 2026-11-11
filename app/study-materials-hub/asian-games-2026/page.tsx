import Link from "next/link";
import type { Metadata } from "next";
import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import {
  sportMedals,
  indiaMedals,
  indiaTotal,
  asianGamesSources,
  asianGamesQuestions,
} from "@/lib/asian-games-2026";

export const metadata: Metadata = {
  title: "Asian Games 2026: India Medal Table, Revision Notes & Questions",
  description:
    "Source-linked Asian Games 2026 revision: India's 85 medals, complete sport breakdown, worked comparisons and explained practice questions.",
  alternates: {
    canonical: "https://cettest.site/study-materials-hub/asian-games-2026",
  },
};

export default function AsianGames2026Page() {
  return (
    <div className="min-h-screen bg-background">
      <FooterLinkNavbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <Link
          href="/study-materials-hub"
          className="text-sm font-semibold text-primary underline"
        >
          Back to study materials
        </Link>
        <header className="mt-6 rounded-3xl bg-blue-500 px-6 py-12 text-white sm:px-10">
          <p className="text-sm font-semibold text-amber-300">
            Sports current affairs · Independent revision guide
          </p>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
            Asian Games 2026: India&apos;s results explained
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-200">
            Learn the host, dates and medal breakdown, then practise comparing
            gold medals with total medals. The figures below link to the Indian
            Olympic Association and a government sports factsheet.
          </p>
          <p className="mt-5 text-sm text-slate-300">
            By CET TEST Editorial Team · Source check: 10 November 2026
          </p>
        </header>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="min-w-0 space-y-10">
            <section aria-labelledby="games-overview">
              <h2 id="games-overview" className="text-2xl font-bold">
                Event overview
              </h2>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  ["Edition", "20th Asian Games"],
                  ["Host", "Aichi-Nagoya, Japan"],
                  ["Dates", "19 September–4 October 2026"],
                  ["India's position", "Fourth"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border bg-card p-4">
                    <dt className="text-sm text-muted-foreground">{label}</dt>
                    <dd className="mt-2 font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                For exam questions, keep the edition number, host and year
                together. The Asian Games and Asian Para Games are separate
                competitions; their medal totals must not be combined.
              </p>
            </section>
            <section aria-labelledby="medal-breakdown">
              <h2 id="medal-breakdown" className="text-2xl font-bold">
                India&apos;s sport-wise medal breakdown
              </h2>
              <p className="mt-3 leading-7">
                India won <strong>{indiaTotal} medals</strong>:{" "}
                {indiaMedals.gold} gold, {indiaMedals.silver} silver and{" "}
                {indiaMedals.bronze} bronze. The total row is calculated from
                the sport rows, so it stays consistent when the dataset changes.
              </p>
              <div className="mt-5 overflow-x-auto rounded-xl border">
                <table className="w-full min-w-[460px] text-left text-sm">
                  <caption className="sr-only">
                    India at the 2026 Asian Games, sport by sport. Source: PIB.
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      {["Sport", "Gold", "Silver", "Bronze", "Total"].map(
                        (h) => (
                          <th key={h} scope="col" className="p-3">
                            {h}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sportMedals.map((row) => (
                      <tr key={row.sport} className="border-t">
                        <th scope="row" className="p-3 font-medium">
                          {row.sport}
                        </th>
                        <td className="p-3">{row.gold}</td>
                        <td className="p-3">{row.silver}</td>
                        <td className="p-3">{row.bronze}</td>
                        <td className="p-3">
                          {row.gold + row.silver + row.bronze}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="border-t bg-muted font-bold">
                    <tr>
                      <th scope="row" className="p-3">
                        Total
                      </th>
                      <td className="p-3">{indiaMedals.gold}</td>
                      <td className="p-3">{indiaMedals.silver}</td>
                      <td className="p-3">{indiaMedals.bronze}</td>
                      <td className="p-3">{indiaTotal}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Source:{" "}
                <a href={asianGamesSources.pib} className="underline">
                  PIB sport-wise table
                </a>
                . See the{" "}
                <a href={asianGamesSources.ioa} className="underline">
                  IOA standings
                </a>{" "}
                for the country ranking.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold">
                Three comparisons worth remembering
              </h2>
              <div className="mt-4 space-y-4 leading-7">
                <p>
                  <strong>Most medals versus most golds:</strong> athletics
                  leads India&apos;s overall sport tally with 24 medals, but
                  archery leads gold medals with 5. A question asking for the
                  most successful sport needs its metric checked before
                  answering.
                </p>
                <p>
                  <strong>Gold share:</strong> archery contributed 5 ÷ 21 × 100
                  ≈ 23.8% of India&apos;s gold medals. Gold medals were 21 ÷ 85
                  × 100 ≈ 24.7% of India&apos;s total medals. The denominators
                  differ because the questions measure different things.
                </p>
                <p>
                  <strong>Team events:</strong> cricket, hockey and kabaddi
                  contributed six gold medals together. Count the medal-winning
                  events rather than multiplying by the number of players
                  receiving medals.
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold">
                Practice questions with explanations
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Answer from memory before opening each explanation.
              </p>
              <div className="mt-5 space-y-3">
                {asianGamesQuestions.map((item, i) => (
                  <details
                    key={item.question}
                    className="rounded-xl border bg-card p-5"
                  >
                    <summary className="cursor-pointer font-semibold">
                      {i + 1}. {item.question}
                    </summary>
                    <p className="mt-4 font-medium">{item.answer}</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.explanation}
                    </p>
                  </details>
                ))}
              </div>
            </section>
            <section id="sources" className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-bold">Sources and corrections</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7">
                <li>
                  <a className="underline" href={asianGamesSources.pib}>
                    Press Information Bureau: India&apos;s campaign and
                    sport-wise medal table
                  </a>
                </li>
                <li>
                  <a className="underline" href={asianGamesSources.ioa}>
                    Indian Olympic Association: event dates and medal standings
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                This is CET TEST&apos;s study explanation of published results.
                If an official correction changes a figure, report the source
                and affected row to{" "}
                <a
                  className="underline"
                  href="mailto:cettest.education@gmail.com?subject=Asian%20Games%202026%20correction"
                >
                  our editorial contact
                </a>
                .{" "}
                <Link className="underline" href="/editorial-policy">
                  Read our editorial policy.
                </Link>
              </p>
            </section>
          </article>
          <aside className="h-fit rounded-2xl border bg-card p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-bold">Quick revision</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              <li>Host: Japan</li>
              <li>India: fourth, {indiaTotal} medals</li>
              <li>Most Indian golds: archery, 5</li>
              <li>Most Indian medals: athletics, 24</li>
            </ul>
            <Link
              href="/current-affairs"
              className="mt-6 block text-sm text-primary underline"
            >
              More current affairs
            </Link>
          </aside>
        </div>
      </main>
      <FooterLinkFooter />
    </div>
  );
}
