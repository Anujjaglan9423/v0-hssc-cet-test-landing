export default function Loading() {
    return (
        <div className="min-h-screen bg-background animate-pulse">
            {/* Hero Section Skeleton */}
            <section className="py-20 px-6 text-center">
                <div className="h-6 w-40 bg-muted mx-auto mb-6 rounded" />
                <div className="h-10 w-96 bg-muted mx-auto mb-4 rounded" />
                <div className="h-6 w-72 bg-muted mx-auto mb-10 rounded" />

                <div className="flex justify-center gap-10">
                    <div className="h-10 w-16 bg-muted rounded" />
                    <div className="h-10 w-16 bg-muted rounded" />
                    <div className="h-10 w-16 bg-muted rounded" />
                </div>
            </section>

            {/* Blog Cards Skeleton */}
            <section className="py-16 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="border rounded-xl overflow-hidden bg-card"
                        >
                            <div className="h-52 bg-muted" />
                            <div className="p-5 space-y-3">
                                <div className="h-4 w-24 bg-muted rounded" />
                                <div className="h-5 w-full bg-muted rounded" />
                                <div className="h-4 w-3/4 bg-muted rounded" />
                                <div className="h-4 w-1/2 bg-muted rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}