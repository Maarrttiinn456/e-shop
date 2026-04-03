import Image from 'next/image';
import Link from 'next/link';

interface Product {
    id: number;
    name: string;
    rating: number;
    reviewCount: number;
    price: number;
    originalPrice?: number;
    image: string;
    badge?: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Vertical Striped Shirt',
        rating: 5,
        reviewCount: 121,
        price: 21200,
        originalPrice: 23200,
        image: '/products/vertical-striped-shirt.png',
        badge: '-9%',
    },
    {
        id: 2,
        name: 'Courage Graphic T-shirt',
        rating: 4,
        reviewCount: 113,
        price: 14500,
        image: '/products/courage-graphic-tshirt.png',
    },
    {
        id: 3,
        name: 'Loose Fit Bermuda Shorts',
        rating: 3,
        reviewCount: 98,
        price: 8000,
        image: '/products/loose-fit-bermuda-shorts.png',
    },
    {
        id: 4,
        name: 'Faded Skinny Jeans',
        rating: 4.5,
        reviewCount: 134,
        price: 17400,
        image: '/products/faded-skinny-jeans.png',
    },
];

function StarRating({ rating, productId }: { rating: number; productId: number }) {
    return (
        <div className="flex items-center gap-1" aria-label={`Hodnocení ${rating} z 5`}>
            {[1, 2, 3, 4, 5].map((star) => {
                const filled = rating >= star;
                const half = !filled && rating >= star - 0.5;
                return (
                    <svg
                        key={star}
                        className="w-[18px] h-[18px]"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        {half ? (
                            <>
                                <defs>
                                    <linearGradient id={`half-${productId}-${star}`}>
                                        <stop offset="50%" stopColor="#FFC633" />
                                        <stop offset="50%" stopColor="#D1D1D1" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M9 1.5L11.163 6.326L16.5 7.09L12.75 10.742L13.727 16.05L9 13.5L4.273 16.05L5.25 10.742L1.5 7.09L6.837 6.326L9 1.5Z"
                                    fill={`url(#half-${productId}-${star})`}
                                    stroke="#FFC633"
                                    strokeWidth="1"
                                />
                            </>
                        ) : (
                            <path
                                d="M9 1.5L11.163 6.326L16.5 7.09L12.75 10.742L13.727 16.05L9 13.5L4.273 16.05L5.25 10.742L1.5 7.09L6.837 6.326L9 1.5Z"
                                fill={filled ? '#FFC633' : '#D1D1D1'}
                                stroke={filled ? '#FFC633' : '#D1D1D1'}
                                strokeWidth="1"
                            />
                        )}
                    </svg>
                );
            })}
        </div>
    );
}

function ProductCard({ product }: { product: Product }) {
    const formattedPrice = (product.price / 100).toFixed(2);
    const formattedOriginal = product.originalPrice
        ? (product.originalPrice / 100).toFixed(2)
        : null;

    return (
        <article className="flex flex-col gap-3">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F2F0F1]">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#FF3333] text-white text-xs font-body font-medium px-2.5 py-1 rounded-full">
                        {product.badge}
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="font-heading font-bold text-base">{product.name}</h3>
                <div className="flex items-center gap-2">
                    <StarRating rating={product.rating} productId={product.id} />
                    <span className="font-body text-sm text-black/60">
                        {product.rating}/5
                    </span>
                </div>
                <div className="flex items-center gap-2.5">
                    <span className="font-heading font-bold text-xl">{formattedPrice} Kč</span>
                    {formattedOriginal && (
                        <>
                            <span className="font-heading font-bold text-xl text-black/40 line-through">
                                {formattedOriginal} Kč
                            </span>
                            <span className="font-body text-xs text-[#FF3333] bg-[#FF3333]/10 px-2 py-0.5 rounded-full">
                                {product.badge}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </article>
    );
}

export function TopSelling() {
    return (
        <section className="py-14 lg:py-20">
            <div className="container">
                <div className="flex items-center justify-between mb-10 lg:mb-14">
                    <h2 className="font-heading font-black text-3xl lg:text-[40px] uppercase tracking-tight">
                        Top Selling
                    </h2>
                    <Link
                        href="/products"
                        className="font-body text-sm border border-black/20 rounded-full px-8 py-3 hover:bg-black hover:text-white transition-colors"
                    >
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
