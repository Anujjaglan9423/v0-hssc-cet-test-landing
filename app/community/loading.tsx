export default function CommunityLoading() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 pb-10" aria-label="Loading community">
      <div className="space-y-3"><div className="h-4 w-32 animate-pulse rounded bg-slate-800" /><div className="h-10 w-72 animate-pulse rounded bg-slate-800" /><div className="h-5 w-96 max-w-full animate-pulse rounded bg-slate-800" /></div>
      <div className="h-36 animate-pulse rounded-2xl border border-slate-800 bg-slate-900" />
      <div className="h-16 animate-pulse rounded-2xl border border-slate-800 bg-slate-900" />
      <div className="space-y-4">{[1, 2, 3].map((item) => <div key={item} className="h-48 animate-pulse rounded-2xl border border-slate-800 bg-slate-900" />)}</div>
    </div>
  )
}
