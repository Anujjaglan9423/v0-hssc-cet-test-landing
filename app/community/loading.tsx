export default function CommunityLoading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="Loading community">
      <div className="text-center"><div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-primary/25 border-t-primary" /><p className="mt-4 text-sm font-medium text-muted-foreground">Loading community</p></div>
    </div>
  )
}
