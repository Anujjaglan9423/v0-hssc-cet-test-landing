// // "use client";

// // import { useMemo, useState } from "react";
// // import { getPreviousYearPaperUrl } from "@/lib/actions/previous-year-papers";
// // import { Button } from "@/components/ui/button";
// // import { Card } from "@/components/ui/card";
// // import {
// //   FileText,
// //   Download,
// //   Eye,
// //   Search,
// //   X,
// //   Layers3,
// //   BookOpen,
// //   CalendarDays,
// // } from "lucide-react";

// // type Paper = {
// //   id: string;
// //   title: string;
// //   exam_name: string;
// //   sub_exam_name: string | null;
// //   paper_type: "full" | "subject" | "topic";
// //   subject: string | null;
// //   topic: string | null;
// //   exam_year: number;
// //   file_name: string;
// //   file_size_bytes: number;
// //   created_at: string;
// // };

// // const paperTypeLabels = {
// //   full: "Full exam",
// //   subject: "Subject-wise",
// //   topic: "Topic-wise",
// // };
// // const formatSize = (bytes: number) =>
// //   bytes >= 1024 * 1024
// //     ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
// //     : `${Math.max(1, Math.round(bytes / 1024))} KB`;

// // export function PreviousYearPapersBrowser({ papers }: { papers: Paper[] }) {
// //   const [search, setSearch] = useState("");
// //   const [exam, setExam] = useState("All exams");
// //   const [subExam, setSubExam] = useState("All sub-exams");
// //   const [kind, setKind] = useState("All formats");
// //   const [activePaper, setActivePaper] = useState<Paper | null>(null);
// //   const [previewUrl, setPreviewUrl] = useState("");
// //   const [loadingId, setLoadingId] = useState("");
// //   const [notice, setNotice] = useState("");

// //   const exams = useMemo(
// //     () => [
// //       "All exams",
// //       ...Array.from(new Set(papers.map((paper) => paper.exam_name))).sort(),
// //     ],
// //     [papers],
// //   );
// //   const examCategories = useMemo(
// //     () =>
// //       Array.from(new Set(papers.map((paper) => paper.exam_name)))
// //         .sort()
// //         .map((name) => ({
// //           name,
// //           count: papers.filter((paper) => paper.exam_name === name).length,
// //         })),
// //     [papers],
// //   );
// //   const subExams = useMemo(
// //     () => [
// //       "All sub-exams",
// //       ...Array.from(
// //         new Set(
// //           papers
// //             .filter((paper) => exam === "All exams" || paper.exam_name === exam)
// //             .map((paper) => paper.sub_exam_name)
// //             .filter((name): name is string => Boolean(name)),
// //         ),
// //       ).sort(),
// //     ],
// //     [papers, exam],
// //   );
// //   const filtered = useMemo(
// //     () =>
// //       papers.filter((paper) => {
// //         const query = search.trim().toLowerCase();
// //         const matchesSearch =
// //           !query ||
// //           [
// //             paper.title,
// //             paper.exam_name,
// //             paper.sub_exam_name,
// //             paper.subject,
// //             paper.topic,
// //             String(paper.exam_year),
// //           ].some((value) => value?.toLowerCase().includes(query));
// //         return (
// //           matchesSearch &&
// //           (exam === "All exams" || paper.exam_name === exam) &&
// //           (subExam === "All sub-exams" || paper.sub_exam_name === subExam) &&
// //           (kind === "All formats" || paper.paper_type === kind)
// //         );
// //       }),
// //     [papers, search, exam, subExam, kind],
// //   );

// //   async function openPreview(paper: Paper) {
// //     setLoadingId(paper.id);
// //     setNotice("");
// //     try {
// //       const result = await getPreviousYearPaperUrl(paper.id);
// //       setActivePaper(paper);
// //       setPreviewUrl(result.url);
// //     } catch (error) {
// //       setNotice(
// //         error instanceof Error ? error.message : "Could not open this PDF.",
// //       );
// //     } finally {
// //       setLoadingId("");
// //     }
// //   }

// //   async function download(paper: Paper) {
// //     setLoadingId(paper.id);
// //     setNotice("");
// //     try {
// //       const result = await getPreviousYearPaperUrl(paper.id, "attachment");
// //       const link = document.createElement("a");
// //       link.href = result.url;
// //       link.rel = "noopener";
// //       document.body.append(link);
// //       link.click();
// //       link.remove();
// //     } catch (error) {
// //       setNotice(
// //         error instanceof Error ? error.message : "Could not download this PDF.",
// //       );
// //     } finally {
// //       setLoadingId("");
// //     }
// //   }

// //   return (
// //     <>
// //       {examCategories.length > 0 && (
// //         <section className="mb-5" aria-labelledby="paper-categories-title">
// //           <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
// //             <div>
// //               <h2
// //                 id="paper-categories-title"
// //                 className="text-xl font-semibold tracking-tight"
// //               >
// //                 Browse by exam category
// //               </h2>
// //               <p className="mt-1 text-sm text-muted-foreground">
// //                 Choose a category to see its available papers.
// //               </p>
// //             </div>
// //             <span className="text-sm text-muted-foreground">
// //               {examCategories.length}{" "}
// //               {examCategories.length === 1 ? "category" : "categories"}
// //             </span>
// //           </div>
// //           <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
// //             <button
// //               type="button"
// //               aria-pressed={exam === "All exams"}
// //               onClick={() => {
// //                 setExam("All exams");
// //                 setSubExam("All sub-exams");
// //               }}
// //               className={`rounded-2xl border p-4 text-left transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${exam === "All exams" ? "border-primary bg-primary/5" : "border-border bg-card"}`}
// //             >
// //               <span className="flex items-center justify-between gap-3">
// //                 <span className="font-semibold">All categories</span>
// //                 <FileText aria-hidden="true" className="size-4 text-primary" />
// //               </span>
// //               <span className="mt-2 block text-sm text-muted-foreground">
// //                 {papers.length} {papers.length === 1 ? "paper" : "papers"}
// //               </span>
// //             </button>
// //             {examCategories.map((category) => (
// //               <button
// //                 key={category.name}
// //                 type="button"
// //                 aria-pressed={exam === category.name}
// //                 onClick={() => {
// //                   setExam(category.name);
// //                   setSubExam("All sub-exams");
// //                 }}
// //                 className={`rounded-2xl border p-4 text-left transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${exam === category.name ? "border-primary bg-primary/5" : "border-border bg-card"}`}
// //               >
// //                 <span className="flex items-center justify-between gap-3">
// //                   <span className="font-semibold">{category.name}</span>
// //                   <FileText
// //                     aria-hidden="true"
// //                     className="size-4 text-primary"
// //                   />
// //                 </span>
// //                 <span className="mt-2 block text-sm text-muted-foreground">
// //                   {category.count} {category.count === 1 ? "paper" : "papers"}
// //                 </span>
// //               </button>
// //             ))}
// //           </div>
// //         </section>
// //       )}
// //       <section
// //         className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7"
// //         aria-label="Filter question papers"
// //       >
// //         <div className="grid gap-3 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
// //           <label className="relative block">
// //             <span className="sr-only">Search papers</span>
// //             <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
// //             <input
// //               value={search}
// //               onChange={(event) => setSearch(event.target.value)}
// //               placeholder="Search exam, subject, topic or year"
// //               className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
// //             />
// //           </label>
// //           <select
// //             aria-label="Filter by exam"
// //             value={exam}
// //             onChange={(event) => {
// //               setExam(event.target.value);
// //               setSubExam("All sub-exams");
// //             }}
// //             className="h-11 rounded-xl border border-input bg-background px-3 text-sm"
// //           >
// //             <option>All exams</option>
// //             {exams.slice(1).map((name) => (
// //               <option key={name}>{name}</option>
// //             ))}
// //           </select>
// //           <select
// //             aria-label="Filter by sub-exam"
// //             value={subExam}
// //             onChange={(event) => setSubExam(event.target.value)}
// //             className="h-11 rounded-xl border border-input bg-background px-3 text-sm"
// //           >
// //             <option>All sub-exams</option>
// //             {subExams.slice(1).map((name) => (
// //               <option key={name}>{name}</option>
// //             ))}
// //           </select>
// //           <select
// //             aria-label="Filter by format"
// //             value={kind}
// //             onChange={(event) => setKind(event.target.value)}
// //             className="h-11 rounded-xl border border-input bg-background px-3 text-sm"
// //           >
// //             {["All formats", "full", "subject", "topic"].map((value) => (
// //               <option key={value} value={value}>
// //                 {value === "All formats"
// //                   ? value
// //                   : paperTypeLabels[value as keyof typeof paperTypeLabels]}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //         <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
// //           <span className="text-muted-foreground">
// //             {filtered.length} {filtered.length === 1 ? "paper" : "papers"}{" "}
// //             available
// //           </span>
// //           <span className="font-medium text-foreground">
// //             Browse freely · no sign-in needed
// //           </span>
// //         </div>
// //       </section>
// //       {notice && (
// //         <p
// //           role="status"
// //           className="mt-4 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
// //         >
// //           {notice}
// //         </p>
// //       )}
// //       {filtered.length ? (
// //         <div className="mt-5 grid gap-4 md:grid-cols-2">
// //           {filtered.map((paper) => (
// //             <Card
// //               key={paper.id}
// //               className="flex flex-col justify-between gap-5 rounded-2xl border-border p-5 transition-shadow hover:shadow-md sm:p-6"
// //             >
// //               <div>
// //                 <div className="flex items-start justify-between gap-3">
// //                   <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
// //                     <FileText aria-hidden="true" />
// //                   </span>
// //                   <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">
// //                     {paperTypeLabels[paper.paper_type]}
// //                   </span>
// //                 </div>
// //                 <h2 className="mt-4 text-lg font-semibold leading-snug">
// //                   {paper.title}
// //                 </h2>
// //                 <p className="mt-2 text-sm text-muted-foreground">
// //                   {paper.exam_name}
// //                   {paper.sub_exam_name ? ` · ${paper.sub_exam_name}` : ""}
// //                 </p>
// //                 <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
// //                   <span className="inline-flex items-center gap-1.5">
// //                     <CalendarDays className="size-3.5" />
// //                     {paper.exam_year}
// //                   </span>
// //                   {paper.subject && (
// //                     <span className="inline-flex items-center gap-1.5">
// //                       <BookOpen className="size-3.5" />
// //                       {paper.subject}
// //                     </span>
// //                   )}
// //                   {paper.topic && (
// //                     <span className="inline-flex items-center gap-1.5">
// //                       <Layers3 className="size-3.5" />
// //                       {paper.topic}
// //                     </span>
// //                   )}
// //                   <span>{formatSize(paper.file_size_bytes)} PDF</span>
// //                 </div>
// //               </div>
// //               <div className="flex gap-2">
// //                 <Button
// //                   className="flex-1 rounded-xl"
// //                   onClick={() => void openPreview(paper)}
// //                   disabled={loadingId === paper.id}
// //                 >
// //                   <Eye data-icon="inline-start" />
// //                   {loadingId === paper.id ? "Loading…" : "Preview PDF"}
// //                 </Button>
// //                 <Button
// //                   variant="outline"
// //                   className="rounded-xl"
// //                   aria-label={`Download ${paper.title}`}
// //                   onClick={() => void download(paper)}
// //                   disabled={loadingId === paper.id}
// //                 >
// //                   <Download data-icon="inline-start" />
// //                   Download
// //                 </Button>
// //               </div>
// //             </Card>
// //           ))}
// //         </div>
// //       ) : (
// //         <div className="mt-5 rounded-3xl border border-dashed border-border bg-card px-6 py-16 text-center">
// //           <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
// //             <FileText />
// //           </span>
// //           <h2 className="mt-4 text-lg font-semibold">
// //             {papers.length
// //               ? "No papers match those filters"
// //               : "Question papers are on the way"}
// //           </h2>
// //           <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
// //             {papers.length
// //               ? "Try another exam, paper format or search term."
// //               : "Our team is adding verified previous-year PDFs. Check back soon for full exam, subject-wise and topic-wise papers."}
// //           </p>
// //           {papers.length > 0 && (
// //             <Button
// //               variant="outline"
// //               className="mt-5"
// //               onClick={() => {
// //                 setSearch("");
// //                 setExam("All exams");
// //                 setSubExam("All sub-exams");
// //                 setKind("All formats");
// //               }}
// //             >
// //               Clear filters
// //             </Button>
// //           )}
// //         </div>
// //       )}
// //       {activePaper && (
// //         <div
// //           role="presentation"
// //           className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-3 sm:p-6"
// //           onMouseDown={(event) => {
// //             if (event.target === event.currentTarget) {
// //               setActivePaper(null);
// //               setPreviewUrl("");
// //             }
// //           }}
// //         >
// //           <section
// //             role="dialog"
// //             aria-modal="true"
// //             aria-labelledby="paper-preview-title"
// //             className="flex h-[min(92dvh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-background shadow-2xl"
// //           >
// //             <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6">
// //               <div className="min-w-0">
// //                 <h2 id="paper-preview-title" className="truncate font-semibold">
// //                   {activePaper.title}
// //                 </h2>
// //                 <p className="mt-0.5 text-xs text-muted-foreground">
// //                   {activePaper.exam_name} · {activePaper.exam_year}
// //                 </p>
// //               </div>
// //               <div className="flex shrink-0 items-center gap-2">
// //                 <Button
// //                   variant="outline"
// //                   size="sm"
// //                   onClick={() => void download(activePaper)}
// //                 >
// //                   <Download data-icon="inline-start" />
// //                   Download
// //                 </Button>
// //                 <Button
// //                   variant="ghost"
// //                   size="icon"
// //                   aria-label="Close PDF preview"
// //                   onClick={() => {
// //                     setActivePaper(null);
// //                     setPreviewUrl("");
// //                   }}
// //                 >
// //                   <X />
// //                 </Button>
// //               </div>
// //             </header>
// //             <iframe
// //               title={`PDF preview: ${activePaper.title}`}
// //               src={previewUrl}
// //               className="min-h-0 flex-1 bg-muted"
// //             />
// //           </section>
// //         </div>
// //       )}
// //     </>
// //   );
// // }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { getPreviousYearPaperUrl } from "@/lib/actions/previous-year-papers";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import {
//   BookOpen,
//   CalendarDays,
//   CheckCircle2,
//   ChevronDown,
//   Download,
//   Eye,
//   FileStack,
//   FileText,
//   FolderOpen,
//   Layers3,
//   Loader2,
//   RotateCcw,
//   Search,
//   SlidersHorizontal,
//   X,
// } from "lucide-react";

// type PaperType = "full" | "subject" | "topic";
// type PaperFilter = PaperType | "all";
// type SortOption = "year-desc" | "year-asc" | "title" | "recent";

// type Paper = {
//   id: string;
//   title: string;
//   exam_name: string;
//   sub_exam_name: string | null;
//   paper_type: PaperType;
//   subject: string | null;
//   topic: string | null;
//   exam_year: number;
//   file_name: string;
//   file_size_bytes: number;
//   created_at: string;
// };

// const PAGE_SIZE = 12;
// const ALL = "all";

// const paperTypeLabels: Record<PaperType, string> = {
//   full: "Full exam",
//   subject: "Subject-wise",
//   topic: "Topic-wise",
// };

// const typeCards = [
//   {
//     value: "full" as const,
//     title: "Full exam papers",
//     description: "Practice the complete paper",
//     icon: FileStack,
//   },
//   {
//     value: "subject" as const,
//     title: "Subject-wise papers",
//     description: "Focus on a single subject",
//     icon: BookOpen,
//   },
//   {
//     value: "topic" as const,
//     title: "Topic-wise papers",
//     description: "Improve one topic at a time",
//     icon: Layers3,
//   },
// ];

// function formatSize(bytes: number) {
//   if (!Number.isFinite(bytes) || bytes <= 0) return "PDF";
//   if (bytes >= 1024 * 1024) {
//     return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
//   }
//   return `${Math.max(1, Math.round(bytes / 1024))} KB`;
// }

// function uniqueSorted(values: Array<string | null | undefined>) {
//   return Array.from(
//     new Set(values.filter((value): value is string => Boolean(value?.trim()))),
//   ).sort((a, b) => a.localeCompare(b));
// }

// const selectClass =
//   "h-11 w-full appearance-none rounded-xl border border-input bg-background px-3 pr-9 text-sm text-foreground outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring";

// function SelectField({
//   label,
//   value,
//   onChange,
//   options,
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   options: Array<{ value: string; label: string }>;
// }) {
//   return (
//     <label className="block min-w-0">
//       <span className="mb-2 block text-sm font-medium text-foreground">
//         {label}
//       </span>
//       <span className="relative block">
//         <select
//           value={value}
//           onChange={(event) => onChange(event.target.value)}
//           className={selectClass}
//         >
//           {options.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>
//         <ChevronDown
//           aria-hidden="true"
//           className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
//         />
//       </span>
//     </label>
//   );
// }

// export function PreviousYearPapersBrowser({ papers }: { papers: Paper[] }) {
//   const [exam, setExam] = useState(ALL);
//   const [subExam, setSubExam] = useState(ALL);
//   const [kind, setKind] = useState<PaperFilter>(ALL);
//   const [subject, setSubject] = useState(ALL);
//   const [topic, setTopic] = useState(ALL);
//   const [year, setYear] = useState(ALL);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState<SortOption>("year-desc");
//   const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

//   const [activePaper, setActivePaper] = useState<Paper | null>(null);
//   const [previewUrl, setPreviewUrl] = useState("");
//   const [loadingKey, setLoadingKey] = useState("");
//   const [notice, setNotice] = useState("");

//   const examOptions = useMemo(
//     () => uniqueSorted(papers.map((paper) => paper.exam_name)),
//     [papers],
//   );

//   const papersByExam = useMemo(
//     () => papers.filter((paper) => exam === ALL || paper.exam_name === exam),
//     [papers, exam],
//   );

//   const subExamOptions = useMemo(
//     () => uniqueSorted(papersByExam.map((paper) => paper.sub_exam_name)),
//     [papersByExam],
//   );

//   const papersByExamAndSubExam = useMemo(
//     () =>
//       papersByExam.filter(
//         (paper) => subExam === ALL || paper.sub_exam_name === subExam,
//       ),
//     [papersByExam, subExam],
//   );

//   // Counts are scoped to the selected exam and sub-exam, so the user
//   // can see how many papers exist in each of the three categories.
//   const counts = useMemo(
//     () => ({
//       all: papersByExamAndSubExam.length,
//       full: papersByExamAndSubExam.filter(
//         (paper) => paper.paper_type === "full",
//       ).length,
//       subject: papersByExamAndSubExam.filter(
//         (paper) => paper.paper_type === "subject",
//       ).length,
//       topic: papersByExamAndSubExam.filter(
//         (paper) => paper.paper_type === "topic",
//       ).length,
//     }),
//     [papersByExamAndSubExam],
//   );

//   const papersByType = useMemo(
//     () =>
//       papersByExamAndSubExam.filter(
//         (paper) => kind === ALL || paper.paper_type === kind,
//       ),
//     [papersByExamAndSubExam, kind],
//   );

//   const subjectOptions = useMemo(
//     () => uniqueSorted(papersByType.map((paper) => paper.subject)),
//     [papersByType],
//   );

//   const papersBySubject = useMemo(
//     () =>
//       papersByType.filter(
//         (paper) => subject === ALL || paper.subject === subject,
//       ),
//     [papersByType, subject],
//   );

//   const topicOptions = useMemo(
//     () => uniqueSorted(papersBySubject.map((paper) => paper.topic)),
//     [papersBySubject],
//   );

//   const yearOptions = useMemo(
//     () =>
//       Array.from(new Set(papersBySubject.map((paper) => paper.exam_year))).sort(
//         (a, b) => b - a,
//       ),
//     [papersBySubject],
//   );

//   const filtered = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     return papersBySubject
//       .filter((paper) => {
//         if (topic !== ALL && paper.topic !== topic) return false;
//         if (year !== ALL && String(paper.exam_year) !== year) return false;
//         if (!query) return true;

//         return [
//           paper.title,
//           paper.exam_name,
//           paper.sub_exam_name,
//           paper.subject,
//           paper.topic,
//           paper.exam_year,
//         ].some((value) => String(value ?? "").toLowerCase().includes(query));
//       })
//       .sort((a, b) => {
//         if (sort === "title") return a.title.localeCompare(b.title);
//         if (sort === "recent") {
//           return b.created_at.localeCompare(a.created_at);
//         }
//         if (sort === "year-asc") {
//           return a.exam_year - b.exam_year || a.title.localeCompare(b.title);
//         }
//         return b.exam_year - a.exam_year || a.title.localeCompare(b.title);
//       });
//   }, [papersBySubject, topic, year, search, sort]);

//   const visiblePapers = filtered.slice(0, visibleCount);
//   const hasMore = visibleCount < filtered.length;
//   const hasFilters =
//     exam !== ALL ||
//     subExam !== ALL ||
//     kind !== ALL ||
//     subject !== ALL ||
//     topic !== ALL ||
//     year !== ALL ||
//     Boolean(search.trim());

//   function resetPage() {
//     setVisibleCount(PAGE_SIZE);
//     setNotice("");
//   }

//   function changeExam(next: string) {
//     setExam(next);
//     setSubExam(ALL);
//     setKind(ALL);
//     setSubject(ALL);
//     setTopic(ALL);
//     setYear(ALL);
//     resetPage();
//   }

//   function changeSubExam(next: string) {
//     setSubExam(next);
//     setKind(ALL);
//     setSubject(ALL);
//     setTopic(ALL);
//     setYear(ALL);
//     resetPage();
//   }

//   function changeKind(next: PaperFilter) {
//     setKind(next);
//     setSubject(ALL);
//     setTopic(ALL);
//     setYear(ALL);
//     resetPage();
//   }

//   function changeSubject(next: string) {
//     setSubject(next);
//     setTopic(ALL);
//     setYear(ALL);
//     resetPage();
//   }

//   function clearFilters() {
//     setExam(ALL);
//     setSubExam(ALL);
//     setKind(ALL);
//     setSubject(ALL);
//     setTopic(ALL);
//     setYear(ALL);
//     setSearch("");
//     setSort("year-desc");
//     resetPage();
//   }

//   function closePreview() {
//     setActivePaper(null);
//     setPreviewUrl("");
//   }

//   useEffect(() => {
//     if (!activePaper) return;
//     function handleEscape(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         setActivePaper(null);
//         setPreviewUrl("");
//       }
//     }
//     window.addEventListener("keydown", handleEscape);
//     return () => window.removeEventListener("keydown", handleEscape);
//   }, [activePaper]);

//   async function openPreview(paper: Paper) {
//     setLoadingKey(`preview:${paper.id}`);
//     setNotice("");
//     try {
//       const result = await getPreviousYearPaperUrl(paper.id);
//       setActivePaper(paper);
//       setPreviewUrl(result.url);
//     } catch (error) {
//       setNotice(
//         error instanceof Error ? error.message : "Could not open this PDF.",
//       );
//     } finally {
//       setLoadingKey("");
//     }
//   }

//   async function download(paper: Paper) {
//     setLoadingKey(`download:${paper.id}`);
//     setNotice("");
//     try {
//       const result = await getPreviousYearPaperUrl(paper.id, "attachment");
//       const link = document.createElement("a");
//       link.href = result.url;
//       link.rel = "noopener noreferrer";
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//     } catch (error) {
//       setNotice(
//         error instanceof Error
//           ? error.message
//           : "Could not download this PDF.",
//       );
//     } finally {
//       setLoadingKey("");
//     }
//   }

//   return (
//     <div className="space-y-6">
//       <section
//         className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
//         aria-labelledby="browse-papers-title"
//       >
//         {/* STEP 1: Choose the exam. */}
//         <div className="border-b border-border bg-muted/30 p-4 sm:p-6">
//           <div className="flex flex-wrap items-start justify-between gap-4">
//             <div>
//               <span className="text-xs font-semibold uppercase tracking-widest text-primary">
//                 Question paper library
//               </span>
//               <h2
//                 id="browse-papers-title"
//                 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl"
//               >
//                 Find your practice paper
//               </h2>
//               <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
//                 Select an exam, choose how you want to practice, and open a PDF.
//               </p>
//             </div>
//             <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
//               <FileText aria-hidden="true" className="size-4" />
//               {papers.length} available PDFs
//             </span>
//           </div>

//           <div className="mt-6">
//             <p className="mb-3 text-sm font-semibold">
//               <span className="mr-2 inline-flex size-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
//                 1
//               </span>
//               Select your exam
//             </p>
//             <div className="grid gap-3 sm:grid-cols-2">
//               <SelectField
//                 label="Exam category"
//                 value={exam}
//                 onChange={changeExam}
//                 options={[
//                   { value: ALL, label: "All exams" },
//                   ...examOptions.map((value) => ({ value, label: value })),
//                 ]}
//               />
//               {subExamOptions.length > 0 && (
//                 <SelectField
//                   label="Sub-exam"
//                   value={subExam}
//                   onChange={changeSubExam}
//                   options={[
//                     { value: ALL, label: "All sub-exams" },
//                     ...subExamOptions.map((value) => ({ value, label: value })),
//                   ]}
//                 />
//               )}
//             </div>
//           </div>
//         </div>

//         {/* STEP 2: Browse formats as distinct, clickable categories. */}
//         <div className="p-4 sm:p-6">
//           <div className="flex flex-wrap items-center justify-between gap-3">
//             <p className="text-sm font-semibold">
//               <span className="mr-2 inline-flex size-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
//                 2
//               </span>
//               Choose paper type
//             </p>
//             <button
//               type="button"
//               onClick={() => changeKind(ALL)}
//               aria-pressed={kind === ALL}
//               className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
//                 kind === ALL
//                   ? "border-primary bg-primary text-primary-foreground"
//                   : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
//               }`}
//             >
//               All papers ({counts.all})
//             </button>
//           </div>

//           <div className="mt-4 grid gap-3 sm:grid-cols-3">
//             {typeCards.map((category) => {
//               const Icon = category.icon;
//               const selected = kind === category.value;
//               return (
//                 <button
//                   key={category.value}
//                   type="button"
//                   aria-pressed={selected}
//                   disabled={counts[category.value] === 0}
//                   onClick={() => changeKind(category.value)}
//                   className={`group flex min-h-36 flex-col rounded-2xl border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${
//                     selected
//                       ? "border-primary bg-primary/5 ring-1 ring-primary"
//                       : "border-border bg-background hover:border-primary/50 hover:bg-muted/30"
//                   }`}
//                 >
//                   <span className="flex w-full items-center justify-between gap-2">
//                     <span
//                       className={`inline-flex size-10 items-center justify-center rounded-xl ${
//                         selected
//                           ? "bg-primary text-primary-foreground"
//                           : "bg-primary/10 text-primary"
//                       }`}
//                     >
//                       <Icon className="size-5" aria-hidden="true" />
//                     </span>
//                     {selected ? (
//                       <CheckCircle2
//                         aria-hidden="true"
//                         className="size-5 text-primary"
//                       />
//                     ) : (
//                       <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
//                         {counts[category.value]}
//                       </span>
//                     )}
//                   </span>
//                   <span className="mt-4 text-sm font-semibold sm:text-base">
//                     {category.title}
//                   </span>
//                   <span className="mt-1 text-xs text-muted-foreground">
//                     {category.description}
//                   </span>
//                   {selected && (
//                     <span className="mt-2 text-xs font-medium text-primary">
//                       {counts[category.value]} papers
//                     </span>
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* STEP 3: Search and narrow the selected collection. */}
//       <section
//         aria-label="Search and filter papers"
//         className="rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-6"
//       >
//         <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
//           <h3 className="flex items-center gap-2 font-semibold">
//             <SlidersHorizontal aria-hidden="true" className="size-4 text-primary" />
//             3. Find a paper
//           </h3>
//           {hasFilters && (
//             <button
//               type="button"
//               onClick={clearFilters}
//               className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:underline"
//             >
//               <RotateCcw aria-hidden="true" className="size-3.5" />
//               Reset all
//             </button>
//           )}
//         </div>

//         <label className="block">
//           <span className="sr-only">Search papers</span>
//           <span className="relative block">
//             <Search
//               aria-hidden="true"
//               className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
//             />
//             <input
//               type="search"
//               value={search}
//               onChange={(event) => {
//                 setSearch(event.target.value);
//                 resetPage();
//               }}
//               placeholder="Search by paper title, topic, subject, or year..."
//               className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
//             />
//           </span>
//         </label>

//         <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//           {kind !== "full" && subjectOptions.length > 0 && (
//             <SelectField
//               label="Subject"
//               value={subject}
//               onChange={changeSubject}
//               options={[
//                 { value: ALL, label: "All subjects" },
//                 ...subjectOptions.map((value) => ({ value, label: value })),
//               ]}
//             />
//           )}
//           {kind !== "full" && topicOptions.length > 0 && (
//             <SelectField
//               label="Topic"
//               value={topic}
//               onChange={(next) => {
//                 setTopic(next);
//                 resetPage();
//               }}
//               options={[
//                 { value: ALL, label: "All topics" },
//                 ...topicOptions.map((value) => ({ value, label: value })),
//               ]}
//             />
//           )}
//           {yearOptions.length > 0 && (
//             <SelectField
//               label="Year"
//               value={year}
//               onChange={(next) => {
//                 setYear(next);
//                 resetPage();
//               }}
//               options={[
//                 { value: ALL, label: "All years" },
//                 ...yearOptions.map((value) => ({
//                   value: String(value),
//                   label: String(value),
//                 })),
//               ]}
//             />
//           )}
//         </div>
//       </section>

//       <section aria-label="Available question papers">
//         <div className="flex flex-wrap items-center justify-between gap-3">
//           <div>
//             <h3 className="text-lg font-semibold tracking-tight">
//               {kind === ALL ? "All question papers" : `${paperTypeLabels[kind]} papers`}
//             </h3>
//             <p aria-live="polite" className="mt-0.5 text-sm text-muted-foreground">
//               {filtered.length} {filtered.length === 1 ? "paper" : "papers"} found
//               {exam !== ALL ? ` in ${exam}` : ""}
//             </p>
//           </div>
//           <label className="flex items-center gap-2 text-xs text-muted-foreground">
//             <span className="shrink-0">Sort by</span>
//             <span className="relative block">
//               <select
//                 value={sort}
//                 onChange={(event) => {
//                   setSort(event.target.value as SortOption);
//                   resetPage();
//                 }}
//                 className="h-10 appearance-none rounded-xl border border-input bg-background pl-3 pr-9 text-sm font-medium text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
//               >
//                 <option value="year-desc">Newest year</option>
//                 <option value="year-asc">Oldest year</option>
//                 <option value="title">Title A–Z</option>
//                 <option value="recent">Recently added</option>
//               </select>
//               <ChevronDown
//                 aria-hidden="true"
//                 className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
//               />
//             </span>
//           </label>
//         </div>

//         {notice && (
//           <p
//             role="alert"
//             className="mt-4 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
//           >
//             {notice}
//           </p>
//         )}

//         {filtered.length > 0 ? (
//           <>
//             <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
//               {visiblePapers.map((paper) => {
//                 const previewLoading = loadingKey === `preview:${paper.id}`;
//                 const downloadLoading = loadingKey === `download:${paper.id}`;

//                 return (
//                   <Card
//                     key={paper.id}
//                     className="flex h-full flex-col justify-between gap-5 rounded-2xl border-border p-4 transition-shadow hover:shadow-md sm:p-5"
//                   >
//                     <div>
//                       <div className="flex items-start justify-between gap-3">
//                         <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
//                           <FileText aria-hidden="true" className="size-5" />
//                         </span>
//                         <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
//                           {paperTypeLabels[paper.paper_type]}
//                         </span>
//                       </div>

//                       <h4 className="mt-4 line-clamp-2 text-base font-semibold leading-snug sm:text-lg">
//                         {paper.title}
//                       </h4>
//                       <p className="mt-2 text-sm font-medium text-foreground/80">
//                         {paper.exam_name}
//                         {paper.sub_exam_name && (
//                           <span className="font-normal text-muted-foreground">
//                             {` · ${paper.sub_exam_name}`}
//                           </span>
//                         )}
//                       </p>

//                       {(paper.subject || paper.topic) && (
//                         <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
//                           {paper.subject && (
//                             <span className="rounded-md bg-muted px-2 py-1 text-muted-foreground">
//                               {paper.subject}
//                             </span>
//                           )}
//                           {paper.topic && (
//                             <span className="rounded-md bg-primary/10 px-2 py-1 text-primary">
//                               {paper.topic}
//                             </span>
//                           )}
//                         </div>
//                       )}

//                       <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
//                         <span className="inline-flex items-center gap-1.5">
//                           <CalendarDays aria-hidden="true" className="size-3.5" />
//                           {paper.exam_year}
//                         </span>
//                         <span className="inline-flex items-center gap-1.5">
//                           <FileText aria-hidden="true" className="size-3.5" />
//                           {formatSize(paper.file_size_bytes)}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-[1fr_auto] gap-2 border-t border-border pt-4">
//                       <Button
//                         className="min-w-0 rounded-xl"
//                         onClick={() => void openPreview(paper)}
//                         disabled={Boolean(loadingKey)}
//                       >
//                         {previewLoading ? (
//                           <Loader2 aria-hidden="true" className="size-4 animate-spin" />
//                         ) : (
//                           <Eye aria-hidden="true" className="size-4" />
//                         )}
//                         {previewLoading ? "Opening..." : "Preview PDF"}
//                       </Button>
//                       <Button
//                         variant="outline"
//                         className="rounded-xl"
//                         aria-label={`Download ${paper.title}`}
//                         onClick={() => void download(paper)}
//                         disabled={Boolean(loadingKey)}
//                       >
//                         {downloadLoading ? (
//                           <Loader2 aria-hidden="true" className="size-4 animate-spin" />
//                         ) : (
//                           <Download aria-hidden="true" className="size-4" />
//                         )}
//                         <span className="hidden sm:inline">
//                           {downloadLoading ? "Saving..." : "Download"}
//                         </span>
//                       </Button>
//                     </div>
//                   </Card>
//                 );
//               })}
//             </div>

//             {hasMore && (
//               <div className="mt-7 flex flex-col items-center gap-3">
//                 <p className="text-xs text-muted-foreground">
//                   Showing {visiblePapers.length} of {filtered.length} papers
//                 </p>
//                 <Button
//                   variant="outline"
//                   className="rounded-xl px-8"
//                   onClick={() => setVisibleCount((current) => current + PAGE_SIZE)}
//                 >
//                   <FolderOpen aria-hidden="true" className="size-4" />
//                   Load more papers
//                 </Button>
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="mt-4 rounded-2xl border border-dashed border-border bg-card px-5 py-14 text-center">
//             <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
//               <FolderOpen aria-hidden="true" className="size-6" />
//             </span>
//             <h4 className="mt-4 text-base font-semibold">
//               {papers.length === 0
//                 ? "No papers have been uploaded yet"
//                 : "No matching papers found"}
//             </h4>
//             <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
//               {papers.length === 0
//                 ? "Question papers will appear here as soon as they are available."
//                 : "Try a different paper type, subject, year, or search term."}
//             </p>
//             {hasFilters && (
//               <Button
//                 variant="outline"
//                 className="mt-5 rounded-xl"
//                 onClick={clearFilters}
//               >
//                 <RotateCcw aria-hidden="true" className="size-4" />
//                 Clear filters
//               </Button>
//             )}
//           </div>
//         )}
//       </section>

//       {activePaper && (
//         <div
//           className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-2 sm:p-6"
//           role="presentation"
//           onMouseDown={(event) => {
//             if (event.target === event.currentTarget) closePreview();
//           }}
//         >
//           <section
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby="paper-preview-title"
//             className="flex h-[95dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-background shadow-2xl sm:h-[min(92dvh,900px)]"
//           >
//             <header className="flex items-center justify-between gap-3 border-b border-border px-3 py-3 sm:px-5">
//               <div className="min-w-0">
//                 <h2 id="paper-preview-title" className="truncate text-sm font-semibold sm:text-base">
//                   {activePaper.title}
//                 </h2>
//                 <p className="mt-0.5 truncate text-xs text-muted-foreground">
//                   {activePaper.exam_name} · {activePaper.exam_year}
//                 </p>
//               </div>
//               <div className="flex shrink-0 items-center gap-1 sm:gap-2">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() => void download(activePaper)}
//                   disabled={Boolean(loadingKey)}
//                   aria-label={`Download ${activePaper.title}`}
//                 >
//                   {loadingKey === `download:${activePaper.id}` ? (
//                     <Loader2 aria-hidden="true" className="size-4 animate-spin" />
//                   ) : (
//                     <Download aria-hidden="true" className="size-4" />
//                   )}
//                   <span className="hidden sm:inline">Download</span>
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   aria-label="Close PDF preview"
//                   onClick={closePreview}
//                 >
//                   <X aria-hidden="true" className="size-5" />
//                 </Button>
//               </div>
//             </header>
//             {notice && (
//               <p role="alert" className="border-b border-destructive/30 bg-destructive/5 px-4 py-2 text-sm text-destructive">
//                 {notice}
//               </p>
//             )}
//             <iframe
//               title={`PDF preview: ${activePaper.title}`}
//               src={previewUrl}
//               className="min-h-0 w-full flex-1 bg-muted"
//             />
//           </section>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Filter,
  Loader2,
  RotateCcw,
  Search,
  X,
} from "lucide-react";
import { getPreviousYearPaperUrl } from "@/lib/actions/previous-year-papers";

type PaperType = "full" | "subject" | "topic";
type ExamTab = "all" | "hssc" | "uksssc";
type FilterType = "all" | PaperType;
type SortType = "newest" | "oldest" | "title" | "recent";

type Paper = {
  id: string;
  title: string;
  exam_name: string;
  sub_exam_name: string | null;
  paper_type: PaperType;
  subject: string | null;
  topic: string | null;
  exam_year: number;
  file_name: string;
  file_size_bytes: number;
  created_at: string;
};

const ALL = "all";
const PAGE_SIZE = 12;
const formatLabels: Record<PaperType, string> = {
  full: "Full paper",
  subject: "Subject-wise",
  topic: "Topic-wise",
};

function belongsToExam(paper: Paper, exam: ExamTab): boolean {
  if (exam === "all") return true;
  const name = paper.exam_name.toLowerCase();
  if (exam === "hssc") return /hssc|haryana/.test(name);
  return /uksssc|uttarakhand|uttrakhand/.test(name);
}

function optionsOf(values: Array<string | null | undefined>): string[] {
  return [...new Set(values.filter((value): value is string => Boolean(value?.trim())))].sort(
    (a, b) => a.localeCompare(b),
  );
}

function fileSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "PDF";
  return bytes >= 1024 * 1024
    ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

function SelectFilter({
  label,
  value,
  onChange,
  values,
  allLabel,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  values: string[];
  allLabel: string;
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-xs font-semibold text-muted-foreground">{label}</span>
      <span className="relative block">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-11 w-full appearance-none rounded-xl border border-border bg-background px-3 pr-9 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <option value={ALL}>{allLabel}</option>
          {values.map((item) => (
            <option value={item} key={item}>{item}</option>
          ))}
        </select>
        <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-3.5 size-4 text-muted-foreground" />
      </span>
    </label>
  );
}

export function PreviousYearPapersBrowser({ papers }: { papers: Paper[] }) {
  const [search, setSearch] = useState("");
  const [exam, setExam] = useState<ExamTab>("all");
  const [kind, setKind] = useState<FilterType>("all");
  const [subExam, setSubExam] = useState(ALL);
  const [subject, setSubject] = useState(ALL);
  const [topic, setTopic] = useState(ALL);
  const [year, setYear] = useState(ALL);
  const [sort, setSort] = useState<SortType>("newest");
  const [moreFilters, setMoreFilters] = useState(false);
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");
  const [preview, setPreview] = useState<{ paper: Paper; url: string } | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const triggerButton = useRef<HTMLButtonElement | null>(null);

  const basePapers = useMemo(
    () => papers.filter((paper) => belongsToExam(paper, exam)),
    [exam, papers],
  );

  const subExams = useMemo(() => optionsOf(basePapers.map((p) => p.sub_exam_name)), [basePapers]);
  const afterSubExam = useMemo(
    () => basePapers.filter((p) => subExam === ALL || p.sub_exam_name === subExam),
    [basePapers, subExam],
  );
  const typesCount = useMemo(() => ({
    all: afterSubExam.length,
    full: afterSubExam.filter((p) => p.paper_type === "full").length,
    subject: afterSubExam.filter((p) => p.paper_type === "subject").length,
    topic: afterSubExam.filter((p) => p.paper_type === "topic").length,
  }), [afterSubExam]);
  const afterType = useMemo(
    () => afterSubExam.filter((p) => kind === ALL || p.paper_type === kind),
    [afterSubExam, kind],
  );
  const subjects = useMemo(() => optionsOf(afterType.map((p) => p.subject)), [afterType]);
  const afterSubject = useMemo(
    () => afterType.filter((p) => subject === ALL || p.subject === subject),
    [afterType, subject],
  );
  const topics = useMemo(() => optionsOf(afterSubject.map((p) => p.topic)), [afterSubject]);
  const afterTopic = useMemo(
    () => afterSubject.filter((p) => topic === ALL || p.topic === topic),
    [afterSubject, topic],
  );
  const years = useMemo(
    () => [...new Set(afterTopic.map((p) => p.exam_year))].sort((a, b) => b - a).map(String),
    [afterTopic],
  );

  const results = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return afterTopic
      .filter((paper) => {
        if (year !== ALL && String(paper.exam_year) !== year) return false;
        if (!query) return true;
        return [
          paper.title, paper.exam_name, paper.sub_exam_name, paper.subject,
          paper.topic, paper.exam_year, paper.file_name,
        ].some((item) => String(item ?? "").toLocaleLowerCase().includes(query));
      })
      .sort((a, b) => {
        if (sort === "title") return a.title.localeCompare(b.title);
        if (sort === "recent") return b.created_at.localeCompare(a.created_at);
        if (sort === "oldest") return a.exam_year - b.exam_year || a.title.localeCompare(b.title);
        return b.exam_year - a.exam_year || a.title.localeCompare(b.title);
      });
  }, [afterTopic, search, year, sort]);

  const activeFilters = exam !== "all" || kind !== "all" || subExam !== ALL || subject !== ALL || topic !== ALL || year !== ALL || Boolean(search.trim());
  const anyAdvanced = subExam !== ALL || subject !== ALL || topic !== ALL || year !== ALL;

  function changeExam(next: ExamTab) {
    setExam(next);
    setSubExam(ALL);
    setKind(ALL);
    setSubject(ALL);
    setTopic(ALL);
    setYear(ALL);
    setLimit(PAGE_SIZE);
    setError("");
  }

  function changeType(next: FilterType) {
    setKind(next);
    setSubject(ALL);
    setTopic(ALL);
    setYear(ALL);
    setLimit(PAGE_SIZE);
  }

  function clearAll() {
    setSearch("");
    setExam("all");
    setKind("all");
    setSubExam(ALL);
    setSubject(ALL);
    setTopic(ALL);
    setYear(ALL);
    setSort("newest");
    setLimit(PAGE_SIZE);
    setError("");
  }

  async function openPreview(paper: Paper, button: HTMLButtonElement) {
    if (busy) return;
    triggerButton.current = button;
    setBusy(`preview:${paper.id}`);
    setError("");
    try {
      const result = await getPreviousYearPaperUrl(paper.id);
      setPreview({ paper, url: result.url });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not open this PDF. Please try again.");
    } finally {
      setBusy("");
    }
  }

  async function download(paper: Paper) {
    if (busy) return;
    setBusy(`download:${paper.id}`);
    setError("");
    try {
      const { url } = await getPreviousYearPaperUrl(paper.id, "attachment");
      const link = document.createElement("a");
      link.href = url;
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not download this PDF. Please try again.");
    } finally {
      setBusy("");
    }
  }

  useEffect(() => {
    if (!preview) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreview(null);
    };
    document.addEventListener("keydown", onEscape);
    closeButton.current?.focus();
    return () => {
      document.removeEventListener("keydown", onEscape);
      triggerButton.current?.focus();
    };
  }, [preview]);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Search is first so people never have to scroll to find it. */}
      <div className="border-b border-border bg-muted/20 p-4 sm:p-6">
        <label htmlFor="paper-search" className="mb-2 block text-sm font-semibold">
          Search HSSC &amp; UKSSSC papers
        </label>
        <div className="relative">
          <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-primary" />
          <input
            id="paper-search"
            type="search"
            value={search}
            onChange={(event) => { setSearch(event.target.value); setLimit(PAGE_SIZE); }}
            placeholder="Search exam, subject, topic, year..."
            className="h-12 w-full rounded-xl border border-border bg-background py-3 pl-12 pr-11 text-base outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary"
          />
          {search && (
            <button type="button" onClick={() => { setSearch(""); setLimit(PAGE_SIZE); }} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary">
              <X className="size-4" />
            </button>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2" role="group" aria-label="Choose exam">
          {([
            ["all", "All papers"],
            ["hssc", "HSSC (Haryana)"],
            ["uksssc", "UKSSSC (Uttarakhand)"],
          ] as const).map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={exam === value}
              onClick={() => changeExam(value)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-primary ${exam === value ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary/60 hover:bg-primary/5"}`}
            >
              {label} <span className={exam === value ? "text-primary-foreground/80" : "text-muted-foreground"}>({papers.filter((p) => belongsToExam(p, value)).length})</span>
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Choose paper format">
          {([
            ["all", "All types"],
            ["full", "Full papers"],
            ["subject", "Subject-wise"],
            ["topic", "Topic-wise"],
          ] as const).map(([value, label]) => (
            <button
              key={value}
              type="button"
              disabled={value !== "all" && typesCount[value] === 0}
              aria-pressed={kind === value}
              onClick={() => changeType(value)}
              className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm ${kind === value ? "border-primary bg-primary/10 text-primary" : "border-border bg-background text-muted-foreground hover:border-primary/60 hover:text-foreground"}`}
            >
              {label} ({typesCount[value]})
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <button type="button" onClick={() => setMoreFilters((open) => !open)} aria-expanded={moreFilters} aria-controls="extra-paper-filters" className="inline-flex items-center gap-2 rounded-lg text-sm font-medium text-foreground hover:text-primary focus-visible:ring-2 focus-visible:ring-primary">
            <Filter aria-hidden="true" className="size-4" />
            {moreFilters ? "Hide more filters" : "More filters"}
            {anyAdvanced && <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">Active</span>}
            <ChevronDown aria-hidden="true" className={`size-4 transition-transform ${moreFilters ? "rotate-180" : ""}`} />
          </button>
          {activeFilters && (
            <button type="button" onClick={clearAll} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary">
              <RotateCcw aria-hidden="true" className="size-4" /> Reset
            </button>
          )}
        </div>

        {moreFilters && (
          <div id="extra-paper-filters" className="mt-4 grid gap-3 border-t border-border pt-4 sm:grid-cols-2 lg:grid-cols-4">
            {subExams.length > 0 && <SelectFilter label="Sub-exam" value={subExam} allLabel="All sub-exams" values={subExams} onChange={(value) => { setSubExam(value); setKind(ALL); setSubject(ALL); setTopic(ALL); setYear(ALL); setLimit(PAGE_SIZE); }} />}
            {kind !== "full" && subjects.length > 0 && <SelectFilter label="Subject" value={subject} allLabel="All subjects" values={subjects} onChange={(value) => { setSubject(value); setTopic(ALL); setYear(ALL); setLimit(PAGE_SIZE); }} />}
            {kind !== "full" && topics.length > 0 && <SelectFilter label="Topic" value={topic} allLabel="All topics" values={topics} onChange={(value) => { setTopic(value); setYear(ALL); setLimit(PAGE_SIZE); }} />}
            {years.length > 0 && <SelectFilter label="Year" value={year} allLabel="All years" values={years} onChange={(value) => { setYear(value); setLimit(PAGE_SIZE); }} />}
          </div>
        )}
      </div>

      <div id="paper-results" className="p-4 sm:p-6" aria-busy={Boolean(busy)}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold tracking-tight">Available papers</h2>
            <p aria-live="polite" className="mt-0.5 text-sm text-muted-foreground">
              {results.length.toLocaleString("en-IN")} {results.length === 1 ? "paper" : "papers"} found
              {results.length > 0 && ` · Showing ${Math.min(limit, results.length)}`}
            </p>
          </div>
          <label className="flex items-center gap-2 text-xs text-muted-foreground">
            Sort by
            <select value={sort} onChange={(event) => { setSort(event.target.value as SortType); setLimit(PAGE_SIZE); }} className="h-10 rounded-lg border border-border bg-background px-2 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-primary">
              <option value="newest">Newest year</option>
              <option value="oldest">Oldest year</option>
              <option value="recent">Recently added</option>
              <option value="title">Title A–Z</option>
            </select>
          </label>
        </div>

        {error && <div role="alert" className="mb-4 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">{error}</div>}

        {results.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border px-4 py-12 text-center">
            <Search aria-hidden="true" className="mx-auto size-8 text-muted-foreground" />
            <p className="mt-3 font-semibold">{papers.length === 0 ? "No question papers available yet" : "No papers match these filters"}</p>
            <p className="mt-1 text-sm text-muted-foreground">{papers.length === 0 ? "Published HSSC and UKSSSC PDFs will appear here." : "Try a different keyword or clear your filters."}</p>
            <button type="button" onClick={clearAll} className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Show all papers</button>
          </div>
        ) : (
          <div className="grid gap-3 md:grid-cols-2" aria-label="Question paper search results">
            {results.slice(0, limit).map((paper) => (
              <article key={paper.id} className="flex flex-col rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/40 sm:p-5">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-md bg-primary/10 px-2 py-1 font-semibold text-primary">{paper.exam_name}</span>
                  <span className="rounded-md bg-muted px-2 py-1 font-medium text-muted-foreground">{paper.exam_year}</span>
                  <span className="rounded-md bg-muted px-2 py-1 text-muted-foreground">{formatLabels[paper.paper_type]}</span>
                </div>
                <h3 className="line-clamp-2 text-base font-semibold leading-snug text-foreground">{paper.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {[paper.sub_exam_name, paper.subject, paper.topic].filter(Boolean).join(" · ") || "Previous year question paper"}
                </p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><FileText aria-hidden="true" className="size-4" /> PDF · {fileSize(paper.file_size_bytes)}</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      disabled={Boolean(busy)}
                      onClick={(event) => void openPreview(paper, event.currentTarget)}
                      aria-label={`Preview ${paper.title}`}
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 sm:text-sm"
                    >
                      {busy === `preview:${paper.id}` ? <Loader2 aria-hidden="true" className="size-4 animate-spin" /> : <Eye aria-hidden="true" className="size-4" />}
                      Preview
                    </button>
                    <button
                      type="button"
                      disabled={Boolean(busy)}
                      onClick={() => void download(paper)}
                      aria-label={`Download ${paper.title}`}
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 sm:text-sm"
                    >
                      {busy === `download:${paper.id}` ? <Loader2 aria-hidden="true" className="size-4 animate-spin" /> : <Download aria-hidden="true" className="size-4" />}
                      Download
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {results.length > limit && (
          <div className="mt-6 flex justify-center">
            <button type="button" onClick={() => setLimit((count) => count + PAGE_SIZE)} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary">
              Show 12 more papers <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </div>
        )}
      </div>

      {preview && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-2 sm:p-5" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setPreview(null); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="paper-preview-heading" className="flex h-[95dvh] w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-background shadow-2xl sm:h-[90dvh]">
            <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
              <div className="min-w-0">
                <h2 id="paper-preview-heading" className="truncate text-sm font-semibold sm:text-base">{preview.paper.title}</h2>
                <p className="mt-0.5 text-xs text-muted-foreground">{preview.paper.exam_name} · {preview.paper.exam_year} · PDF preview</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a href={preview.url} target="_blank" rel="noopener noreferrer" className="hidden min-h-9 items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold sm:inline-flex"><ExternalLink aria-hidden="true" className="size-4" /> Open</a>
                <button type="button" disabled={Boolean(busy)} onClick={() => void download(preview.paper)} className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground disabled:opacity-50"><Download aria-hidden="true" className="size-4" /> Download</button>
                <button ref={closeButton} type="button" onClick={() => setPreview(null)} aria-label="Close PDF preview" className="rounded-lg border border-border p-2 focus-visible:ring-2 focus-visible:ring-primary"><X aria-hidden="true" className="size-4" /></button>
              </div>
            </div>
            <object data={preview.url} type="application/pdf" className="min-h-0 w-full flex-1" aria-label={`${preview.paper.title} PDF preview`}>
              <div className="p-5 text-center text-sm">
                <p>Your browser cannot display this PDF inline.</p>
                <a href={preview.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-primary underline"><ExternalLink className="size-4" /> Open PDF in a new tab</a>
              </div>
            </object>
            <div className="border-t border-border px-4 py-2 sm:hidden">
              <a href={preview.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary"><ExternalLink className="size-4" /> Open PDF in a new tab</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
