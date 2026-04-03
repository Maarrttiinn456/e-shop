import Image from 'next/image';

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
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[663px]">
                    {/* Levý sloupec */}
                    <div className="relative flex flex-col justify-center py-16 lg:py-24 lg:pr-8">
                        <StarLarge className="absolute top-10 right-0 w-14 h-14 hidden lg:block" />

                        <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[64px] leading-[1.08] tracking-tight uppercase mb-5 max-w-lg">
                            Find Clothes That Matches Your Style
                        </h1>

                        <StarSmall className="absolute top-[calc(50%-60px)] right-0 w-8 h-8 hidden lg:block" />

                        <p className="font-body text-black/60 text-base mb-8 max-w-[545px]">
                            Browse through our diverse range of meticulously
                            crafted garments, designed to bring out your
                            individuality and cater to your sense of style.
                        </p>

                        <button
                            type="button"
                            className="bg-black text-white font-body rounded-full px-14 py-4 text-base w-fit hover:bg-black/80 transition-colors mb-12 lg:mb-16"
                        >
                            Shop Now
                        </button>

                        {/* Statistiky */}
                        <div className="flex flex-row flex-wrap gap-6 sm:gap-0 border-t border-black/10 pt-8">
                            {stats.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className={`flex-1 ${i > 0 ? 'sm:border-l sm:border-black/10 sm:pl-8' : ''}`}
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

                    {/* Pravý sloupec — obrázek (vlož /public/hero-model.png) */}
                    <div className="relative hidden lg:block bg-[#F2F0F1]">
                        <StarLarge className="absolute top-16 right-6 w-[104px] h-[104px] z-10" />
                        <StarSmall className="absolute bottom-28 left-10 w-[56px] h-[56px] z-10" />
                        <Image
                            src="/hero-model.png"
                            alt="Žena oblečená v módním outfitu prezentující kolekci SHOP.CO"
                            fill
                            sizes="(max-width: 1024px) 0px, 50vw"
                            className="object-contain object-bottom"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
