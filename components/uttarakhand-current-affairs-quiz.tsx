"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import questions from "@/lib/data/uttarakhand-current-affairs-2026.json";

const chapters = [
  ["all", "All chapters / सभी अध्याय"],
  ["october", "October / अक्टूबर"],
  ["september", "September / सितंबर"],
  ["august", "August / अगस्त"],
  ["july", "July / जुलाई"],
  ["june", "June / जून"],
  ["may", "May / मई"],
  ["april", "April / अप्रैल"],
  ["march", "March / मार्च"],
  ["february", "February / फरवरी"],
  ["january", "January / जनवरी"],
  ["revision", "Mixed revision / पुनरावृत्ति"],
];
const letters = ["A", "B", "C", "D"];
const SIZE = 10;
const KEY = "cettest-uk-book-v1";
type Saved = {
  section: string;
  page: number;
  font: number;
  theme: string;
  bookmarks: number[];
  read: number[];
  answers: Record<number, number>;
};
const initial: Saved = {
  section: "all",
  page: 0,
  font: 17,
  theme: "paper",
  bookmarks: [],
  read: [],
  answers: {},
};
const palettes: Record<
  string,
  {
    bg: string;
    ink: string;
    muted: string;
    line: string;
    panel: string;
    accent: string;
  }
> = {
  paper: {
    bg: "#fffaf0",
    ink: "#282e27",
    muted: "#565e53",
    line: "#ded6c5",
    panel: "#edf1e5",
    accent: "#245b40",
  },
  light: {
    bg: "#ffffff",
    ink: "#18251e",
    muted: "#526057",
    line: "#d9e0da",
    panel: "#edf4ef",
    accent: "#245b40",
  },
  dark: {
    bg: "#202722",
    ink: "#edf2e9",
    muted: "#c2cdc0",
    line: "#46564a",
    panel: "#303f34",
    accent: "#b3e3bf",
  },
};
export default function UttarakhandCurrentAffairsQuiz() {
  const [saved, setSaved] = useState<Saved>(initial);
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState<"read" | "practice">("read");
  const [search, setSearch] = useState("");
  const [onlySaved, setOnlySaved] = useState(false);
  const [focus, setFocus] = useState(false);
  const top = useRef<HTMLDivElement>(null);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const v = JSON.parse(raw);
        setSaved({
          ...initial,
          ...v,
          theme: palettes[v.theme] ? v.theme : "paper",
          font: Math.max(15, Math.min(23, Number(v.font) || 17)),
        });
      }
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready)
      try {
        localStorage.setItem(KEY, JSON.stringify(saved));
      } catch {}
  }, [saved, ready]);
  const p = palettes[saved.theme] || palettes.paper;
  const filtered = useMemo(() => {
    const t = search.trim().toLowerCase();
    return questions.filter(
      (q) =>
        (saved.section === "all" || saved.section === q.section) &&
        (!onlySaved || saved.bookmarks.includes(q.id)) &&
        (!t ||
          (/^\d+$/.test(t)
            ? q.id === Number(t)
            : [
                q.question.hi,
                q.question.en,
                ...q.options.flatMap((o) => [o.hi, o.en]),
                q.explanation.hi,
                q.explanation.en,
              ]
                .join(" ")
                .toLowerCase()
                .includes(t))),
    );
  }, [saved.section, saved.bookmarks, onlySaved, search]);
  const pages = Math.max(1, Math.ceil(filtered.length / SIZE));
  const page = Math.max(0, Math.min(saved.page, pages - 1));
  const visible = filtered.slice(page * SIZE, (page + 1) * SIZE);
  const changePage = (n: number) => {
    setSaved((s) => ({ ...s, page: n }));
    top.current?.scrollIntoView({ block: "start", behavior: "auto" });
    top.current?.focus({ preventScroll: true });
  };
  const toggle = (field: "bookmarks" | "read", id: number) =>
    setSaved((s) => ({
      ...s,
      [field]: s[field].includes(id)
        ? s[field].filter((x) => x !== id)
        : [...s[field], id],
    }));
  const chapter = (section: string) => {
    setOnlySaved(false);
    setSearch("");
    setSaved((s) => ({ ...s, section, page: 0 }));
  };
  const btn =
    "rounded-lg border border-current/20 px-3 py-2 text-sm font-medium hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-40 min-h-11";
  const heading = onlySaved
    ? "Bookmarked questions / सहेजे गए प्रश्न"
    : chapters.find((c) => c[0] === saved.section)?.[1] || chapters[0][1];
  return (
    <section aria-label="Uttarakhand digital study book" className="space-y-4">
      <div className="rounded-2xl border bg-card p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Your study library
            </p>
            <p className="mt-1 font-semibold">
              {saved.read.length} of {questions.length} marked as read ·{" "}
              {saved.bookmarks.length} bookmarks
            </p>
          </div>
          <button
            className={btn}
            onClick={() => setFocus((v) => !v)}
            aria-pressed={focus}
          >
            {focus ? "Exit focus" : "Focus mode"}
          </button>
        </div>
        <progress
          className="mt-3 h-2 w-full accent-primary"
          value={saved.read.length}
          max={questions.length}
          aria-label="Reading progress"
        />
      </div>
      <div
        className={`grid items-start gap-5 ${focus ? "" : "lg:grid-cols-[220px_minmax(0,1fr)]"}`}
      >
        {!focus && (
          <aside className="rounded-xl border bg-card p-3 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
            <h2 className="px-2 py-2 text-sm font-bold">
              Contents / विषय सूची
            </h2>
            <div className="lg:hidden">
              <label className="sr-only" htmlFor="uk-chapter">
                Choose chapter
              </label>
              <select
                id="uk-chapter"
                className="w-full rounded-lg border bg-background p-3"
                value={saved.section}
                onChange={(e) => chapter(e.target.value)}
              >
                {chapters.map(([id, label]) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <nav
              aria-label="Book chapters"
              className="hidden space-y-1 lg:block"
            >
              {chapters
                .filter(
                  ([id]) =>
                    id === "all" || questions.some((q) => q.section === id),
                )
                .map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => chapter(id)}
                    aria-pressed={saved.section === id && !onlySaved}
                    className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-3 text-left text-sm ${saved.section === id && !onlySaved ? "bg-primary/10 font-semibold text-primary" : "hover:bg-muted"}`}
                  >
                    <span>{label}</span>
                    <span className="text-xs tabular-nums">
                      {id === "all"
                        ? questions.length
                        : questions.filter((q) => q.section === id).length}
                    </span>
                  </button>
                ))}
            </nav>
            <button
              className={`${btn} mt-3 w-full`}
              aria-pressed={onlySaved}
              onClick={() => {
                setOnlySaved((v) => !v);
                setSearch("");
                setSaved((s) => ({ ...s, section: "all", page: 0 }));
              }}
            >
              ☆ Bookmarks ({saved.bookmarks.length})
            </button>
          </aside>
        )}
        <div
          ref={top}
          tabIndex={-1}
          className="min-w-0 scroll-mt-24 space-y-4 outline-none"
        >
          <div className="rounded-xl border bg-card p-3 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div
                className="inline-flex rounded-lg bg-muted p-1"
                aria-label="Study mode"
              >
                {(["read", "practice"] as const).map((m) => (
                  <button
                    key={m}
                    className={`rounded-md px-3 py-2 text-sm font-semibold ${mode === m ? "bg-primary text-primary-foreground" : ""}`}
                    aria-pressed={mode === m}
                    onClick={() => setMode(m)}
                  >
                    {m === "read" ? "Read book" : "Practice"}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  className={btn}
                  aria-label="Decrease text size"
                  disabled={saved.font <= 15}
                  onClick={() => setSaved((s) => ({ ...s, font: s.font - 1 }))}
                >
                  A−
                </button>
                <button
                  className={btn}
                  aria-label="Increase text size"
                  disabled={saved.font >= 23}
                  onClick={() => setSaved((s) => ({ ...s, font: s.font + 1 }))}
                >
                  A+
                </button>
                <select
                  aria-label="Reading theme"
                  className="rounded-lg border bg-background px-2 text-sm"
                  value={saved.theme}
                  onChange={(e) =>
                    setSaved((s) => ({ ...s, theme: e.target.value }))
                  }
                >
                  <option value="paper">Sepia</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </div>
            <input
              aria-label="Search questions"
              className="w-full rounded-lg border bg-background px-3 py-3 text-sm"
              type="search"
              placeholder="Search Hindi, English or question number…"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSaved((s) => ({ ...s, page: 0 }));
              }}
            />
            {mode === "practice" && (
              <p className="text-sm" aria-live="polite">
                Attempted: {Object.keys(saved.answers).length} · Correct:{" "}
                {
                  questions.filter((q) => saved.answers[q.id] === q.answerIndex)
                    .length
                }
              </p>
            )}
          </div>
          <div
            style={{ background: p.bg, color: p.ink, borderColor: p.line }}
            className="rounded-xl border shadow-sm px-4 py-7 sm:px-10 sm:py-10"
          >
            <div
              className="mx-auto max-w-[72ch]"
              style={{ fontSize: saved.font, lineHeight: 1.8 }}
            >
              <header style={{ borderColor: p.line }} className="border-b pb-5">
                <p
                  style={{ color: p.muted }}
                  className="text-xs uppercase tracking-widest"
                >
                  Uttarakhand · 2026 · Digital edition
                </p>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  {heading}
                </h2>
                <p style={{ color: p.muted }} className="text-sm">
                  {filtered.length
                    ? `${page * SIZE + 1}–${Math.min((page + 1) * SIZE, filtered.length)} of ${filtered.length} questions`
                    : "No matching questions"}{" "}
                  · Page {page + 1} / {pages}
                </p>
              </header>
              {visible.map((q) => {
                const selected = saved.answers[q.id];
                const reveal = mode === "read" || selected !== undefined;
                return (
                  <article
                    key={q.id}
                    id={`question-${q.id}`}
                    className="border-b py-7 scroll-mt-24"
                    style={{ borderColor: p.line }}
                  >
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <span
                        style={{ color: p.accent }}
                        className="text-xs font-bold tracking-widest"
                      >
                        QUESTION {String(q.id).padStart(3, "0")}
                      </span>
                      <button
                        className={btn}
                        aria-pressed={saved.bookmarks.includes(q.id)}
                        onClick={() => toggle("bookmarks", q.id)}
                      >
                        {saved.bookmarks.includes(q.id) ? "★ Saved" : "☆ Save"}
                      </button>
                    </div>
                    <h3 lang="hi" className="whitespace-pre-line font-semibold">
                      {q.question.hi}
                    </h3>
                    <p
                      lang="en"
                      className="mt-2 whitespace-pre-line"
                      style={{ color: p.muted }}
                    >
                      {q.question.en}
                    </p>
                    <fieldset className="mt-4 space-y-2">
                      <legend className="sr-only">
                        Options for question {q.id}
                      </legend>
                      {q.options.map((o, i) => (
                        <label
                          key={i}
                          className={`flex items-start gap-3 rounded-lg px-3 py-2 ${mode === "practice" ? "cursor-pointer border" : ""}`}
                          style={{
                            borderColor: p.line,
                            background:
                              reveal && q.answerIndex === i
                                ? p.panel
                                : undefined,
                          }}
                        >
                          {mode === "practice" && (
                            <input
                              type="radio"
                              className="mt-2"
                              name={`q-${q.id}`}
                              checked={selected === i}
                              onChange={() =>
                                setSaved((s) => ({
                                  ...s,
                                  answers: { ...s.answers, [q.id]: i },
                                }))
                              }
                            />
                          )}
                          <span className="font-semibold">{letters[i]}.</span>
                          <span className="min-w-0 flex-1">
                            <span
                              lang="hi"
                              className="block whitespace-pre-line"
                            >
                              {o.hi}
                            </span>
                            {o.en !== o.hi && (
                              <span
                                lang="en"
                                style={{ color: p.muted }}
                                className="block whitespace-pre-line text-[0.91em]"
                              >
                                {o.en}
                              </span>
                            )}
                          </span>
                          {reveal && q.answerIndex === i && (
                            <span
                              style={{ color: p.accent }}
                              className="text-sm font-bold"
                            >
                              ✓
                            </span>
                          )}
                        </label>
                      ))}
                    </fieldset>
                    {reveal && (
                      <div
                        className="mt-4 rounded-r-lg border-l-4 p-4"
                        style={{ background: p.panel, borderColor: p.accent }}
                        aria-live={mode === "practice" ? "polite" : "off"}
                      >
                        <p className="font-bold" style={{ color: p.accent }}>
                          {mode === "practice"
                            ? selected === q.answerIndex
                              ? "Correct! · "
                              : "Incorrect · "
                            : ""}
                          उत्तर / Answer: {letters[q.answerIndex]}
                        </p>
                        <p
                          lang="hi"
                          className="mt-2 font-semibold whitespace-pre-line"
                        >
                          {q.options[q.answerIndex].hi}
                        </p>
                        <p
                          lang="en"
                          className="mt-1 font-semibold whitespace-pre-line"
                        >
                          {q.options[q.answerIndex].en}
                        </p>
                        <p lang="hi" className="mt-2 whitespace-pre-line">
                          {q.explanation.hi}
                        </p>
                        <p
                          lang="en"
                          className="mt-2 whitespace-pre-line text-[0.92em]"
                          style={{ color: p.muted }}
                        >
                          {q.explanation.en}
                        </p>
                        {/* <p className="mt-2 text-xs" style={{ color: p.muted }}>
                          Source PDF page {q.sourcePage ?? "—"}
                          {q.editorialStatus !== "source-based"
                            ? ` · ${q.editorialStatus}`
                            : ""}
                        </p> */}
                      </div>
                    )}
                    <button
                      className={`${btn} mt-4`}
                      aria-pressed={saved.read.includes(q.id)}
                      onClick={() => toggle("read", q.id)}
                    >
                      {saved.read.includes(q.id)
                        ? "✓ Read / पढ़ लिया"
                        : "Mark as read / पढ़ लिया"}
                    </button>
                    <Link
                      href={`/current-affairs/uttarakhand-current-affairs-2026/${q.section}#question-${q.id}`}
                      className="ml-3 inline-block text-sm underline"
                    >
                      Permanent question link / प्रश्न लिंक
                    </Link>
                  </article>
                );
              })}
              {!visible.length && (
                <p className="py-8">Try another keyword or chapter.</p>
              )}
              <nav
                aria-label="Book pages"
                className="mt-6 flex flex-wrap items-center justify-between gap-3"
              >
                <button
                  className={btn}
                  disabled={page === 0}
                  onClick={() => changePage(page - 1)}
                >
                  ← Previous
                </button>
                <label className="text-sm">
                  Page{" "}
                  <select
                    value={page}
                    onChange={(e) => changePage(Number(e.target.value))}
                    className="rounded border bg-transparent p-2"
                    style={{ color: p.ink, background: p.bg }}
                  >
                    {Array.from({ length: pages }, (_, i) => (
                      <option key={i} value={i}>
                        {i + 1} / {pages}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  className={btn}
                  disabled={page + 1 >= pages}
                  onClick={() => changePage(page + 1)}
                >
                  Next →
                </button>
              </nav>
            </div>
          </div>
          {/* <p className="text-xs text-muted-foreground">
            Progress and bookmarks are stored in this browser. Chapter labels
            follow the source PDF; individual event dates may differ.
          </p> */}
        </div>
      </div>
    </section>
  );
}
