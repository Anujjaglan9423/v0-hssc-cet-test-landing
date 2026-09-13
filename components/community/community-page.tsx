"use client"

import type React from "react"
import { useMemo, useRef, useState } from "react"
import Image from "next/image"
import {
  ArrowUp,
  Check,
  ChevronDown,
  Ellipsis,
  FileImage,
  Heart,
  ImagePlus,
  MessageCircle,
  MoreHorizontal,
  Paperclip,
  Share2,
  Trash2,
  UserRound,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type Category = "Haryana GK" | "Uttarakhand GK" | "Reasoning" | "Current Affairs" | "General"
type CurrentUser = { id: string; name: string; avatarUrl?: string | null }
type Comment = { id: string; studentId: string; studentName: string; studentAvatarUrl?: string | null; text: string; createdAt: string }
type Doubt = { id: string; studentId: string; studentName: string; studentAvatarUrl?: string | null; text: string; imageUrl?: string; category?: Category; createdAt: string; likeCount: number; isLikedByCurrentUser: boolean; comments: Comment[] }

const categories: Category[] = ["Haryana GK", "Uttarakhand GK", "Reasoning", "Current Affairs", "General"]
const initialDoubts: Doubt[] = [
  { id: "d1", studentId: "student-2", studentName: "Aman Kumar", studentAvatarUrl: null, text: "Can someone explain the difference between Article 32 and Article 226 in simple terms? Which one should I mention for a Haryana GK answer?", category: "Haryana GK", createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), likeCount: 12, isLikedByCurrentUser: false, comments: [{ id: "c1", studentId: "student-3", studentName: "Priya S", text: "Article 32 is for the Supreme Court, while Article 226 is for High Courts.", createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString() }] },
  { id: "d2", studentId: "student-4", studentName: "Rohit Meena", studentAvatarUrl: null, text: "What is the fastest way to revise current affairs from the last six months before the CET exam?", category: "Current Affairs", createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), likeCount: 8, isLikedByCurrentUser: true, comments: [] },
  { id: "d3", studentId: "student-5", studentName: "Neha Joshi", studentAvatarUrl: null, text: "I am stuck on syllogism questions. Please share a good approach for solving them quickly.", category: "Reasoning", createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), likeCount: 5, isLikedByCurrentUser: false, comments: [] },
]

function initials(name: string) { return name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase() }
function timeAgo(date: string) { const minutes = Math.max(1, Math.floor((Date.now() - new Date(date).getTime()) / 60000)); if (minutes < 60) return `${minutes}m ago`; const hours = Math.floor(minutes / 60); if (hours < 24) return `${hours}h ago`; return `${Math.floor(hours / 24)}d ago` }
function Avatar({ name, src, size = "md" }: { name: string; src?: string | null; size?: "sm" | "md" }) { return src ? <Image src={src} alt="" width={size === "sm" ? 32 : 42} height={size === "sm" ? 32 : 42} className={cn("rounded-full object-cover", size === "sm" ? "h-8 w-8" : "h-10 w-10")} /> : <div className={cn("flex shrink-0 items-center justify-center rounded-full bg-sky-500/15 font-semibold text-sky-300", size === "sm" ? "h-8 w-8 text-[11px]" : "h-10 w-10 text-sm")}>{initials(name)}</div> }

export function CommunityPage({ currentUser }: { currentUser: CurrentUser }) {
  const [doubts, setDoubts] = useState(initialDoubts)
  const [sort, setSort] = useState("Most Recent")
  const [category, setCategory] = useState<Category | "All">("All")
  const [expandedComments, setExpandedComments] = useState<string[]>([])
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [toast, setToast] = useState("")
  const [postText, setPostText] = useState("")
  const [postCategory, setPostCategory] = useState<Category>("General")
  const [attachment, setAttachment] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const visibleDoubts = useMemo(() => { const result = doubts.filter((doubt) => (category === "All" || doubt.category === category) && (sort !== "My Doubts" || doubt.studentId === currentUser.id)); return result.sort((a, b) => sort === "Most Liked" ? b.likeCount - a.likeCount : sort === "Unanswered" ? a.comments.length - b.comments.length : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) }, [doubts, category, sort, currentUser.id])
  function postDoubt() { if (!postText.trim() && !attachment) return; setDoubts((items) => [{ id: `d-${Date.now()}`, studentId: currentUser.id, studentName: currentUser.name, studentAvatarUrl: currentUser.avatarUrl, text: postText.trim(), imageUrl: attachment || undefined, category: postCategory, createdAt: new Date().toISOString(), likeCount: 0, isLikedByCurrentUser: false, comments: [] }, ...items]); setPostText(""); setAttachment(null) }
  function toggleLike(id: string) { setDoubts((items) => items.map((doubt) => doubt.id === id ? { ...doubt, isLikedByCurrentUser: !doubt.isLikedByCurrentUser, likeCount: doubt.likeCount + (doubt.isLikedByCurrentUser ? -1 : 1) } : doubt)) }
  function addComment(id: string, text: string) { if (!text.trim()) return; setDoubts((items) => items.map((doubt) => doubt.id === id ? { ...doubt, comments: [...doubt.comments, { id: `c-${Date.now()}`, studentId: currentUser.id, studentName: currentUser.name, studentAvatarUrl: currentUser.avatarUrl, text: text.trim(), createdAt: new Date().toISOString() }] } : doubt)) }
  function copyLink(id: string) { navigator.clipboard?.writeText(`${window.location.origin}/community#${id}`); setToast("Link copied!"); window.setTimeout(() => setToast(""), 1800) }
  function handleFile(file?: File) { if (!file || !file.type.startsWith("image/")) return; const reader = new FileReader(); reader.onload = () => setAttachment(String(reader.result)); reader.readAsDataURL(file) }

  return <div className="mx-auto w-full max-w-5xl space-y-6 pb-10 text-slate-100">
    <header><p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">Student community</p><h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Community Doubts</h1><p className="mt-2 text-sm text-slate-400 sm:text-base">Ask questions, help each other, get answers from fellow aspirants</p></header>
    <PostDoubtBox currentUser={currentUser} text={postText} setText={setPostText} category={postCategory} setCategory={setPostCategory} attachment={attachment} setAttachment={setAttachment} post={postDoubt} fileRef={fileRef} onFile={handleFile} />
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-700/80 bg-slate-900/70 p-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex gap-1 overflow-x-auto">{["Most Recent", "Most Liked", "Unanswered", "My Doubts"].map((item) => <button key={item} onClick={() => setSort(item)} className={cn("whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition", sort === item ? "bg-sky-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white")}>{item}</button>)}</div><div className="flex items-center gap-2 overflow-x-auto border-t border-slate-800 pt-3 sm:border-t-0 sm:pt-0"><span className="hidden text-xs text-slate-500 sm:block">Category</span>{["All", ...categories].map((item) => <button key={item} onClick={() => setCategory(item as Category | "All")} className={cn("whitespace-nowrap rounded-full px-3 py-1.5 text-xs", category === item ? "bg-sky-500/20 text-sky-300 ring-1 ring-sky-500/40" : "text-slate-400 hover:bg-slate-800")}>{item}</button>)}</div></div>
    <div className="space-y-4">{visibleDoubts.length ? visibleDoubts.map((doubt) => <DoubtCard key={doubt.id} doubt={doubt} currentUser={currentUser} commentsOpen={expandedComments.includes(doubt.id)} onToggleComments={() => setExpandedComments((ids) => ids.includes(doubt.id) ? ids.filter((id) => id !== doubt.id) : [...ids, doubt.id])} onLike={() => toggleLike(doubt.id)} onComment={(text) => addComment(doubt.id, text)} onShare={() => copyLink(doubt.id)} onImage={setLightbox} onDelete={() => setDoubts((items) => items.filter((item) => item.id !== doubt.id))} />) : <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 px-6 py-16 text-center"><MessageCircle className="mx-auto h-12 w-12 text-sky-400/50" /><h2 className="mt-4 text-lg font-semibold">No doubts yet — be the first to ask!</h2><p className="mt-2 text-sm text-slate-400">Your question could help another aspirant too.</p></div>}</div>
    {lightbox && <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}><button className="absolute right-4 top-4 rounded-full bg-slate-900 p-2 text-white" onClick={() => setLightbox(null)} aria-label="Close image"><X className="h-5 w-5" /></button><img src={lightbox} alt="Expanded doubt attachment" className="max-h-[90vh] max-w-full rounded-xl object-contain" onClick={(event) => event.stopPropagation()} /></div>}
    {toast && <div className="fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-xl"><Check className="mr-2 inline h-4 w-4" />{toast}</div>}
  </div>
}

function PostDoubtBox({ currentUser, text, setText, category, setCategory, attachment, setAttachment, post, fileRef, onFile }: { currentUser: CurrentUser; text: string; setText: (value: string) => void; category: Category; setCategory: (value: Category) => void; attachment: string | null; setAttachment: (value: string | null) => void; post: () => void; fileRef: React.RefObject<HTMLInputElement | null>; onFile: (file?: File) => void }) {
  return <section className="rounded-2xl border border-sky-500/20 bg-slate-900/90 p-4 shadow-lg shadow-sky-950/10 sm:p-5"><div className="flex gap-3"><Avatar name={currentUser.name} src={currentUser.avatarUrl} /><div className="min-w-0 flex-1"><Textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Have a doubt? Ask the community..." className="min-h-24 resize-y border-slate-700 bg-slate-950/70 text-slate-100 placeholder:text-slate-500 focus-visible:ring-sky-500" /><div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex flex-wrap items-center gap-2"><input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(event) => onFile(event.target.files?.[0])} /><Button type="button" variant="outline" size="sm" onClick={() => fileRef.current?.click()} className="border-slate-700 bg-transparent text-slate-300"><Paperclip /> Add Image</Button><select value={category} onChange={(event) => setCategory(event.target.value as Category)} className="h-8 rounded-md border border-slate-700 bg-slate-950 px-2 text-xs text-slate-300"><option value="General">General</option>{categories.filter((item) => item !== "General").map((item) => <option key={item}>{item}</option>)}</select></div><Button onClick={post} disabled={!text.trim() && !attachment} className="w-full bg-sky-500 text-white hover:bg-sky-400 sm:w-auto">Post <ArrowUp /></Button></div>{attachment && <div className="relative mt-4 w-fit"><img src={attachment} alt="Selected attachment preview" className="h-24 w-32 rounded-lg object-cover ring-1 ring-sky-400/40" /><button onClick={() => setAttachment(null)} className="absolute -right-2 -top-2 rounded-full bg-slate-950 p-1 text-white ring-1 ring-slate-600" aria-label="Remove attachment"><X className="h-4 w-4" /></button></div>}</div></div></section>
}

function DoubtCard({ doubt, currentUser, commentsOpen, onToggleComments, onLike, onComment, onShare, onImage, onDelete }: { doubt: Doubt; currentUser: CurrentUser; commentsOpen: boolean; onToggleComments: () => void; onLike: () => void; onComment: (text: string) => void; onShare: () => void; onImage: (url: string) => void; onDelete: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const own = doubt.studentId === currentUser.id
  return <article id={doubt.id} className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-lg shadow-black/10 sm:p-5"><div className="flex items-start gap-3"><Avatar name={doubt.studentName} src={doubt.studentAvatarUrl} /><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-2"><div><p className="font-semibold text-slate-100">{doubt.studentName}</p><p className="text-xs text-slate-500">{timeAgo(doubt.createdAt)}</p></div><div className="relative"><button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-800 hover:text-white" aria-label="More options"><MoreHorizontal className="h-5 w-5" /></button>{menuOpen && <div className="absolute right-0 top-10 z-10 min-w-32 rounded-lg border border-slate-700 bg-slate-950 p-1 shadow-xl">{own ? <><button className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-slate-800">Edit</button><button onClick={onDelete} className="block w-full rounded px-3 py-2 text-left text-sm text-red-300 hover:bg-slate-800">Delete</button></> : <button className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-slate-800">Report</button>}</div>}</div></div>{doubt.category && <span className="mt-3 inline-flex rounded-full bg-sky-500/15 px-2.5 py-1 text-xs font-medium text-sky-300">{doubt.category}</span>}<p className="mt-4 whitespace-pre-wrap text-[15px] leading-7 text-slate-200">{doubt.text}</p>{doubt.imageUrl && <button className="mt-4 block max-w-full overflow-hidden rounded-xl" onClick={() => onImage(doubt.imageUrl!)}><img src={doubt.imageUrl} alt="Doubt attachment" className="max-h-[300px] max-w-full object-cover" /></button>}<div className="mt-5 flex flex-wrap items-center gap-1 border-t border-slate-800 pt-3"><Button variant="ghost" size="sm" onClick={onLike} className={cn("text-slate-400 hover:text-rose-300", doubt.isLikedByCurrentUser && "text-rose-400")}><Heart className={cn(doubt.isLikedByCurrentUser && "fill-current")} /> {doubt.likeCount}</Button><Button variant="ghost" size="sm" onClick={onToggleComments} className="text-slate-400 hover:text-sky-300"><MessageCircle /> {doubt.comments.length}</Button><div className="relative"><Button variant="ghost" size="sm" onClick={() => setShareOpen(!shareOpen)} className="text-slate-400 hover:text-sky-300"><Share2 /> Share</Button>{shareOpen && <button onClick={onShare} className="absolute bottom-10 left-0 z-10 flex items-center gap-2 whitespace-nowrap rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 shadow-xl">Copy Link</button>}</div></div>{commentsOpen && <CommentSection comments={doubt.comments} currentUser={currentUser} onComment={onComment} />}</div></div></article>
}

function CommentSection({ comments, currentUser, onComment }: { comments: Comment[]; currentUser: CurrentUser; onComment: (text: string) => void }) { const [text, setText] = useState(""); return <div className="mt-4 rounded-xl bg-slate-950/60 p-3 sm:p-4"><div className="space-y-3">{comments.map((comment) => <div key={comment.id} className="flex gap-2"><Avatar name={comment.studentName} src={comment.studentAvatarUrl} size="sm" /><div className="min-w-0 rounded-lg bg-slate-800/80 px-3 py-2"><p className="text-xs font-semibold text-slate-300">{comment.studentName} <span className="ml-2 font-normal text-slate-500">{timeAgo(comment.createdAt)}</span></p><p className="mt-1 text-sm text-slate-200">{comment.text}</p></div></div>)}{!comments.length && <p className="text-sm text-slate-500">No comments yet. Start the discussion.</p>}</div><div className="mt-4 flex items-center gap-2"><Avatar name={currentUser.name} src={currentUser.avatarUrl} size="sm" /><Input value={text} onChange={(event) => setText(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.nativeEvent.isComposing && event.keyCode !== 229) { event.preventDefault(); onComment(text); setText("") } }} placeholder="Add a helpful reply..." className="border-slate-700 bg-slate-900 text-slate-100" /><Button size="sm" disabled={!text.trim()} onClick={() => { onComment(text); setText("") }}>Reply</Button></div></div> }
