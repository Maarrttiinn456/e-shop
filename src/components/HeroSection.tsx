import Link from 'next/link';

function StarLarge({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M28 0C28 15.464 15.464 28 0 28C15.464 28 28 40.536 28 56C28 40.536 40.536 28 56 28C40.536 28 28 15.464 28 0Z"
                fill="black"
            />
        </svg>
    );
}

function StarSmall({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M17 0C17 9.389 9.389 17 0 17C9.389 17 17 24.611 17 34C17 24.611 24.611 17 34 17C24.611 17 17 9.389 17 0Z"
                fill="black"
            />
        </svg>
    );
}

const stats = [
    { value: '200+', label: 'International Brands' },
    { value: '2,000+', label: 'High-Quality Products' },
    { value: '30,000+', label: 'Happy Customers' },
];

export function HeroSection() {
    return (
        <section className="bg-[#F2F0F1] overflow-hidden">
            <div className="container">
                <div className="relative flex flex-col items-center text-center py-20 lg:py-32">
                    <StarLarge className="absolute top-8 left-0 w-14 h-14 hidden lg:block" />
                    <StarSmall className="absolute top-12 right-8 w-8 h-8 hidden lg:block" />
                    <StarSmall className="absolute bottom-16 left-12 w-6 h-6 hidden lg:block" />
                    <StarLarge className="absolute bottom-8 right-0 w-10 h-10 hidden lg:block" />

                    <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[72px] leading-[1.05] tracking-tight uppercase mb-6 max-w-3xl">
                        Discover Products You'll Love
                    </h1>

                    <p className="font-body text-black/60 text-base lg:text-lg mb-10 max-w-xl">
                        Browse through our curated selection of high-quality
                        products, handpicked to fit your lifestyle and every
                        everyday need.
                    </p>

                    <Link
                        href="/products"
                        className="bg-black text-white font-body rounded-full px-14 py-4 text-base hover:bg-black/80 transition-colors mb-16 lg:mb-20"
                    >
                        Shop Now
                    </Link>

                    {/* Statistiky */}
                    <div className="w-full flex flex-row flex-wrap justify-center gap-6 sm:gap-0 border-t border-black/10 pt-8">
                        {stats.map((stat, i) => (
                            <div
                                key={stat.label}
                                className={`flex-1 min-w-[120px] max-w-[200px] ${i > 0 ? 'sm:border-l sm:border-black/10 sm:pl-8' : ''}`}
                            >
                                <p className="font-heading font-bold text-3xl lg:text-[40px]">
                                    {stat.value}
                                </p>
                                <p className="font-body text-black/60 text-sm mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
