export function ProductDetailSkeleton() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Gallery skeleton */}
            <div className="flex gap-3 h-[530px]">
                <div className="flex flex-col gap-3 w-40">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="flex-1 rounded-xl bg-gray-200 animate-pulse"
                        />
                    ))}
                </div>
                <div className="flex-1 rounded-2xl bg-gray-200 animate-pulse" />
            </div>

            {/* Summary skeleton */}
            <div className="flex flex-col gap-4">
                {/* Title */}
                <div className="flex flex-col gap-2">
                    <div className="h-10 w-3/4 rounded-lg bg-gray-200 animate-pulse" />
                    <div className="h-10 w-1/2 rounded-lg bg-gray-200 animate-pulse" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="h-5 w-28 rounded-full bg-gray-200 animate-pulse" />
                    <div className="h-4 w-10 rounded-full bg-gray-200 animate-pulse" />
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                    <div className="h-9 w-24 rounded-lg bg-gray-200 animate-pulse" />
                    <div className="h-9 w-20 rounded-lg bg-gray-200 animate-pulse" />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                    <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
                    <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
                    <div className="h-4 w-5/6 rounded bg-gray-200 animate-pulse" />
                    <div className="h-4 w-4/6 rounded bg-gray-200 animate-pulse" />
                </div>

                {/* Size selector */}
                <div>
                    <div className="h-4 w-20 rounded bg-gray-200 animate-pulse mb-3" />
                    <div className="flex gap-2 flex-wrap">
                        {['Small', 'Medium', 'Large', 'X-Large'].map((s) => (
                            <div
                                key={s}
                                className="h-9 w-20 rounded-full bg-gray-200 animate-pulse"
                            />
                        ))}
                    </div>
                </div>

                {/* Quantity + Add to cart */}
                <div className="flex gap-3 items-center">
                    <div className="h-11 w-32 rounded-full bg-gray-200 animate-pulse" />
                    <div className="h-11 flex-1 rounded-full bg-gray-200 animate-pulse" />
                </div>
            </div>
        </div>
    );
}
