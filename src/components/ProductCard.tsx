import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { AddCartButton } from '@/components/AddCartButton';

function StarRating({
    rating,
    productId,
}: {
    rating: number;
    productId: number;
}) {
    return (
        <div
            className="flex items-center gap-1"
            aria-label={`Hodnocení ${rating} z 5`}
        >
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
                                    <linearGradient
                                        id={`half-${productId}-${star}`}
                                    >
                                        <stop
                                            offset="50%"
                                            stopColor="#FFC633"
                                        />
                                        <stop
                                            offset="50%"
                                            stopColor="#D1D1D1"
                                        />
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

export function ProductCard({ product }: { product: Product }) {
    const priceInCents = Math.round(product.price * 100);
    const discountedPriceInCents = Math.round(
        priceInCents * (1 - product.discountPercentage / 100),
    );

    return (
        <article className="group flex flex-col gap-3">
            <Link
                href={`/product/${product.id}`}
                className="flex flex-col gap-3"
            >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F2F0F1]">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        loading="eager"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.discountPercentage > 0 && (
                        <span className="absolute top-3 left-3 bg-[#FF3333] text-white text-xs font-body font-medium px-2.5 py-1 rounded-full">
                            {product.discountPercentage} %
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="font-heading font-bold text-base">
                        {product.title}
                    </h3>
                    <div className="flex items-center gap-2">
                        <StarRating
                            rating={product.rating}
                            productId={product.id}
                        />
                        <span className="font-body text-sm text-black/60">
                            {product.rating}/5
                        </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <span className="font-heading font-bold text-xl">
                            {(discountedPriceInCents / 100).toFixed(2)} €
                        </span>
                        {product.discountPercentage > 0 && (
                            <span className="font-heading font-bold text-xl text-black/40 line-through">
                                {(priceInCents / 100).toFixed(2)} €
                            </span>
                        )}
                    </div>
                </div>
            </Link>
            <AddCartButton product={product} />
        </article>
    );
}
