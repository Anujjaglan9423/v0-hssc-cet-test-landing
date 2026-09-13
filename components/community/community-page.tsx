"use client"

import type React from "react"
import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import {
  ArrowUp,
  Check,
  Pencil,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Paperclip,
  Share2,
  Trash2,
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
const initialDoubts: Doubt[] = []

function CommunityLoader() {
  return <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-border bg-card/60 px-6 py-12 text-center" role="status" aria-label="Loading community doubts">
    <div className="h-9 w-9 animate-spin rounded-full border-2 border-primary/25 border-t-primary" />
    <p className="mt-4 text-sm font-medium text-muted-foreground">Loading community doubts</p>
  </div>
}

function initials(name: string) { return name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase() }
function timeAgo(date: string) { const minutes = Math.max(1, Math.floor((Date.now() - new Date(date).getTime()) / 60000)); if (minutes < 60) return `${minutes}m ago`; const hours = Math.floor(minutes / 60); if (hours < 24) return `${hours}h ago`; return `${Math.floor(hours / 24)}d ago` }
function Avatar({ name, src, size = "md" }: { name: string; src?: string | null; size?: "sm" | "md" }) { return src ? <Image src={src} alt="" width={size === "sm" ? 32 : 42} height={size === "sm" ? 32 : 42} className={cn("rounded-full object-cover", size === "sm" ? "h-8 w-8" : "h-10 w-10")} /> : <div className={cn("flex shrink-0 items-center justify-center rounded-full bg-primary/15 font-semibold text-primary", size === "sm" ? "h-8 w-8 text-[11px]" : "h-10 w-10 text-sm")}>{initials(name)}</div> }

export function CommunityPage({ currentUser }: { currentUser: CurrentUser }) {
  const [doubts, setDoubts] = useState<Doubt[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [sort, setSort] = useState("Most Recent")
  const [category, setCategory] = useState<Category | "All">("All")
  const [expandedComments, setExpandedComments] = useState<string[]>([])
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [toast, setToast] = useState("")
  const [postText, setPostText] = useState("")
  const [postCategory, setPostCategory] = useState<Category>("General")
  const [attachment, setAttachment] = useState<string | null>(null)
  const [attachmentPath, setAttachmentPath] = useState<string | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [posting, setPosting] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetch("/api/community").then(async (response) => {
      if (!response.ok) throw new Error("Unable to load community")
      return response.json()
    }).then(setDoubts).catch(() => setToast("Unable to load community posts")).finally(() => setIsLoading(false))
  }, [])

  const visibleDoubts = useMemo(() => { const result = doubts.filter((doubt) => (category === "All" || doubt.category === category) && (sort !== "My Doubts" || doubt.studentId === currentUser.id)); return result.sort((a, b) => sort === "Most Liked" ? b.likeCount - a.likeCount : sort === "Unanswered" ? a.comments.length - b.comments.length : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) }, [doubts, category, sort, currentUser.id])
  async function postDoubt() { if ((!postText.trim() && !attachmentPath) || uploadingImage || posting) return; setPosting(true); const response = await fetch("/api/community", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: postText, category: postCategory, imagePath: attachmentPath }) }); if (!response.ok) { setToast("Could not publish your doubt"); setPosting(false); return } setPostText(""); setAttachment(null); setAttachmentPath(null); const refreshed = await fetch("/api/community").then((result) => result.json()); setDoubts(refreshed); setToast("Doubt published"); setPosting(false) }
  async function toggleLike(id: string) { setDoubts((items) => items.map((doubt) => doubt.id === id ? { ...doubt, isLikedByCurrentUser: !doubt.isLikedByCurrentUser, likeCount: doubt.likeCount + (doubt.isLikedByCurrentUser ? -1 : 1) } : doubt)); await fetch(`/api/community/${id}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "like" }) }) }
  async function addComment(id: string, text: string) { if (!text.trim()) return; const response = await fetch(`/api/community/${id}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "comment", text }) }); if (!response.ok) { setToast("Could not add comment"); return } const refreshed = await fetch("/api/community").then((result) => result.json()); setDoubts(refreshed) }
  async function deleteDoubt(id: string) { const response = await fetch(`/api/community/${id}`, { method: "DELETE" }); if (response.ok) setDoubts((items) => items.filter((item) => item.id !== id)); else setToast("Could not delete this doubt") }
  async function editDoubt(id: string, text: string, category: Category | undefined) { const response = await fetch(`/api/community/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text, category }) }); if (response.ok) { setEditingId(null); setDoubts(await fetch("/api/community").then((result) => result.json())) } else setToast("Could not update this doubt") }
  function copyLink(id: string) { navigator.clipboard?.writeText(`${window.location.origin}/community#${id}`); setToast("Link copied!"); window.setTimeout(() => setToast(""), 1800) }
  async function handleFile(file?: File) { if (!file || !file.type.startsWith("image/")) return; const reader = new FileReader(); reader.onload = () => setAttachment(String(reader.result)); reader.readAsDataURL(file); setUploadingImage(true); const formData = new FormData(); formData.append("file", file); const response = await fetch("/api/community/upload", { method: "POST", body: formData }); if (!response.ok) { setToast("Could not upload image"); setAttachment(null); setUploadingImage(false); return } const uploaded = await response.json(); setAttachmentPath(uploaded.pathname); setUploadingImage(false) }

  return <div className="mx-auto w-full max-w-5xl overflow-hidden space-y-5 pb-8 text-foreground sm:space-y-6 sm:pb-10">
    <header className="rounded-2xl border border-border/70 bg-card/60 p-4 shadow-sm sm:p-6">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">Student community</p>
      <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">Community Doubts</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">Ask questions, help each other, get answers from fellow aspirants</p>
    </header>
    <PostDoubtBox currentUser={currentUser} text={postText} setText={setPostText} category={postCategory} setCategory={setPostCategory} attachment={attachment} setAttachment={(value) => { setAttachment(value); if (!value) setAttachmentPath(null) }} post={postDoubt} posting={posting} uploadingImage={uploadingImage} fileRef={fileRef} onFile={handleFile} />
    <div className="rounded-2xl border border-border/80 bg-card/70 p-2 shadow-sm sm:p-3"><div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><div className="flex min-w-0 gap-1 overflow-x-auto pb-1 scrollbar-none">{["Most Recent", "Most Liked", "Unanswered", "My Doubts"].map((item) => <button key={item} onClick={() => setSort(item)} className={cn("whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition", sort === item ? "bg-primary text-white" : "text-muted-foreground hover:bg-slate-800 hover:text-white")}>{item}</button>)}</div><div className="flex min-w-0 items-center gap-2 overflow-x-auto border-t border-border pt-2 scrollbar-none sm:border-t-0 sm:pt-0"><span className="hidden text-xs text-muted-foreground/75 sm:block">Category</span>{["All", ...categories].map((item) => <button key={item} onClick={() => setCategory(item as Category | "All")} className={cn("whitespace-nowrap rounded-full px-3 py-1.5 text-xs", category === item ? "bg-primary/20 text-primary ring-1 ring-sky-500/40" : "text-muted-foreground hover:bg-slate-800")}>{item}</button>)}</div></div></div>
    <div className="space-y-4">{isLoading ? <CommunityLoader /> : visibleDoubts.length ? visibleDoubts.map((doubt) => <DoubtCard key={doubt.id} doubt={doubt} currentUser={currentUser} commentsOpen={expandedComments.includes(doubt.id)} onToggleComments={() => setExpandedComments((ids) => ids.includes(doubt.id) ? ids.filter((id) => id !== doubt.id) : [...ids, doubt.id])} onLike={() => toggleLike(doubt.id)} onComment={(text) => addComment(doubt.id, text)} onShare={() => copyLink(doubt.id)} onImage={setLightbox} onDelete={() => deleteDoubt(doubt.id)} onEdit={(text, category) => editDoubt(doubt.id, text, category)} editing={editingId === doubt.id} />) : <div className="rounded-2xl border border-dashed border-border bg-card/60 px-6 py-16 text-center"><MessageCircle className="mx-auto h-12 w-12 text-primary/50" /><h2 className="mt-4 text-lg font-semibold">No doubts yet — be the first to ask!</h2><p className="mt-2 text-sm text-muted-foreground">Your question could help another aspirant too.</p></div>}</div>
    {lightbox && <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}><button className="absolute right-4 top-4 rounded-full bg-card p-2 text-white" onClick={() => setLightbox(null)} aria-label="Close image"><X className="h-5 w-5" /></button><img src={lightbox} alt="Expanded doubt attachment" className="max-h-[90vh] max-w-full rounded-xl object-contain" onClick={(event) => event.stopPropagation()} /></div>}
    {toast && <div className="fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-xl"><Check className="mr-2 inline h-4 w-4" />{toast}</div>}
  </div>
}

function PostDoubtBox({ currentUser, text, setText, category, setCategory, attachment, setAttachment, post, fileRef, onFile, posting, uploadingImage }: { currentUser: CurrentUser; text: string; setText: (value: string) => void; category: Category; setCategory: (value: Category) => void; attachment: string | null; setAttachment: (value: string | null) => void; post: () => void; posting: boolean; uploadingImage: boolean; fileRef: React.RefObject<HTMLInputElement | null>; onFile: (file?: File) => void }) {
  return <section className="rounded-2xl border border-primary/20 bg-card/90 p-3 shadow-lg shadow-primary/5 sm:p-5"><div className="flex items-start gap-2.5 sm:gap-3"><Avatar name={currentUser.name} src={currentUser.avatarUrl} size="sm" /><div className="min-w-0 flex-1"><Textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Have a doubt? Ask the community..." className="min-h-20 resize-y border-border bg-background/70 text-sm sm:min-h-24 text-foreground placeholder:text-muted-foreground/75 focus-visible:ring-sky-500" /><div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex flex-wrap items-center gap-2"><input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(event) => onFile(event.target.files?.[0])} /><Button type="button" variant="outline" size="sm" onClick={() => fileRef.current?.click()} disabled={uploadingImage} className="h-9 border-border bg-transparent text-xs text-muted-foreground"><Paperclip className="mr-1.5 h-4 w-4" /> {uploadingImage ? "Uploading..." : "Add Image"}</Button><select value={category} onChange={(event) => setCategory(event.target.value as Category)} className="h-9 max-w-full rounded-md border border-border bg-background px-2 text-xs text-muted-foreground"><option value="General">General</option>{categories.filter((item) => item !== "General").map((item) => <option key={item}>{item}</option>)}</select></div><Button onClick={post} disabled={(!text.trim() && !attachment) || uploadingImage || posting} className="h-9 w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">{posting ? <span className="mr-1.5 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" /> : <ArrowUp className="mr-1.5 h-4 w-4" />} {posting ? "Posting..." : "Post"}</Button></div>{attachment && <div className="relative mt-4 w-fit"><img src={attachment} alt="Selected attachment preview" className="h-24 w-32 rounded-lg object-cover ring-1 ring-sky-400/40" /><button onClick={() => setAttachment(null)} className="absolute -right-2 -top-2 rounded-full bg-background p-1 text-white ring-1 ring-slate-600" aria-label="Remove attachment"><X className="h-4 w-4" /></button></div>}</div></div></section>
}

function DoubtCard({ doubt, currentUser, commentsOpen, onToggleComments, onLike, onComment, onShare, onImage, onDelete, onEdit, editing }: { doubt: Doubt; currentUser: CurrentUser; commentsOpen: boolean; onToggleComments: () => void; onLike: () => void; onComment: (text: string) => void; onShare: () => void; onImage: (url: string) => void; onDelete: () => void; onEdit: (text: string, category?: Category) => void; editing: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const [editText, setEditText] = useState(doubt.text)
  const [isEditing, setIsEditing] = useState(false)
  const own = doubt.studentId === currentUser.id
  return <article id={doubt.id} className="rounded-2xl border border-border/80 bg-card/80 p-3 shadow-lg shadow-black/10 sm:p-5"><div className="flex items-start gap-2.5 sm:gap-3"><Avatar name={doubt.studentName} src={doubt.studentAvatarUrl} size="sm" /><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-2"><div><p className="font-semibold text-foreground">{doubt.studentName}</p><p className="text-xs text-muted-foreground/75">{timeAgo(doubt.createdAt)}</p></div><div className="relative"><button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-muted-foreground/75 hover:bg-slate-800 hover:text-white" aria-label="More options"><MoreHorizontal className="h-5 w-5" /></button>{menuOpen && <div className="absolute right-0 top-10 z-10 min-w-32 rounded-lg border border-border bg-background p-1 shadow-xl">{own ? <><button onClick={() => { setMenuOpen(false); setEditText(doubt.text); setIsEditing(true) }} className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm hover:bg-muted"><Pencil className="h-3.5 w-3.5" /> Edit</button><button onClick={onDelete} className="block w-full rounded px-3 py-2 text-left text-sm text-red-300 hover:bg-slate-800">Delete</button></> : <button className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-slate-800">Report</button>}</div>}</div></div>{doubt.category && <span className="mt-3 inline-flex rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">{doubt.category}</span>}{isEditing ? <div className="mt-4 space-y-2"><Textarea value={editText} onChange={(event) => setEditText(event.target.value)} className="min-h-24 text-sm" /><div className="flex justify-end gap-2"><Button size="sm" variant="ghost" onClick={() => setEditText(doubt.text)}>Cancel</Button><Button size="sm" onClick={() => { onEdit(editText, doubt.category); setIsEditing(false) }} disabled={!editText.trim()}>Save</Button></div></div> : <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-6 text-foreground sm:text-[15px] sm:leading-7">{doubt.text}</p>}{doubt.imageUrl && <button className="mt-4 block max-w-full overflow-hidden rounded-xl" onClick={() => onImage(doubt.imageUrl!)}><img src={doubt.imageUrl} alt="Doubt attachment" className="max-h-[300px] max-w-full object-cover" /></button>}<div className="mt-4 flex flex-wrap items-center gap-1 border-t border-border pt-3 sm:mt-5"><Button variant="ghost" size="sm" onClick={onLike} className={cn("text-muted-foreground hover:text-rose-300", doubt.isLikedByCurrentUser && "text-rose-400")}><Heart className={cn(doubt.isLikedByCurrentUser && "fill-current")} /> {doubt.likeCount}</Button><Button variant="ghost" size="sm" onClick={onToggleComments} className="text-muted-foreground hover:text-primary"><MessageCircle /> {doubt.comments.length}</Button><div className="relative"><Button variant="ghost" size="sm" onClick={() => setShareOpen(!shareOpen)} className="text-muted-foreground hover:text-primary"><Share2 /> Share</Button>{shareOpen && <button onClick={onShare} className="absolute bottom-10 left-0 z-10 flex items-center gap-2 whitespace-nowrap rounded-lg border border-border bg-background px-3 py-2 text-sm text-slate-200 shadow-xl">Copy Link</button>}</div></div>{commentsOpen && <CommentSection comments={doubt.comments} currentUser={currentUser} onComment={onComment} />}</div></div></article>
}

function CommentSection({ comments, currentUser, onComment }: { comments: Comment[]; currentUser: CurrentUser; onComment: (text: string) => void }) { const [text, setText] = useState(""); return <div className="mt-4 rounded-xl bg-background/60 p-3 sm:p-4"><div className="space-y-3">{comments.map((comment) => <div key={comment.id} className="flex gap-2"><Avatar name={comment.studentName} src={comment.studentAvatarUrl} size="sm" /><div className="min-w-0 rounded-lg bg-slate-800/80 px-3 py-2"><p className="text-xs font-semibold text-slate-300">{comment.studentName} <span className="ml-2 font-normal text-muted-foreground/75">{timeAgo(comment.createdAt)}</span></p><p className="mt-1 text-sm text-slate-200">{comment.text}</p></div></div>)}{!comments.length && <p className="text-sm text-muted-foreground/75">No comments yet. Start the discussion.</p>}</div><div className="mt-4 flex items-center gap-2"><Avatar name={currentUser.name} src={currentUser.avatarUrl} size="sm" /><Input value={text} onChange={(event) => setText(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.nativeEvent.isComposing && event.keyCode !== 229) { event.preventDefault(); onComment(text); setText("") } }} placeholder="Add a helpful reply..." className="border-border bg-card text-foreground" /><Button size="sm" disabled={!text.trim()} onClick={() => { onComment(text); setText("") }}>Reply</Button></div></div> }
