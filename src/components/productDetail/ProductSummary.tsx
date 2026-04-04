'use client';

import { use, useState } from 'react';
import { Product } from '@/types/product';

const SIZES = ['Small', 'Medium', 'Large', 'X-Large'] as const;
type Size = (typeof SIZES)[number];

type Props = {
    productPromise: Promise<Product>;
};

export function ProductSummary({ productPromise }: Props) {
    const product = use(productPromise);
    const [selectedSize, setSelectedSize] = useState<Size>('Large');
    const [quantity, setQuantity] = useState(1);

    const priceInCents = Math.round(product.price * 100);
    const discountedPriceInCents = Math.round(
        priceInCents * (1 - product.discountPercentage / 100),
    );

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-black uppercase leading-tight">
                {product.title}
            </h1>

            <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                    {'★'.repeat(Math.round(product.rating))}
                    {'☆'.repeat(5 - Math.round(product.rating))}
                </div>
                <span className="text-sm text-gray-500">
                    {product.rating.toFixed(1)}/5
                </span>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">
                    {(discountedPriceInCents / 100).toFixed(2)} €
                </span>
                <span className="text-3xl text-gray-400 line-through">
                    {(priceInCents / 100).toFixed(2)} €
                </span>
            </div>

            <p className="text-gray-600 leading-relaxed">
                {product.description}
            </p>

            <div>
                <p className="text-sm font-medium text-gray-500 mb-2">
                    Choose Size
                </p>
                <div className="flex gap-2 flex-wrap">
                    {SIZES.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`rounded-full px-5 py-2 text-sm font-medium border transition-colors ${
                                selectedSize === size
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-black border-gray-300 hover:border-black'
                            }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex gap-3 items-center">
                <div className="flex items-center gap-3 rounded-full border border-gray-300 px-4 py-2">
                    <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="text-xl font-medium leading-none"
                    >
                        −
                    </button>
                    <span className="w-4 text-center text-sm font-medium">
                        {quantity}
                    </span>
                    <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="text-xl font-medium leading-none"
                    >
                        +
                    </button>
                </div>

                <button className="flex-1 rounded-full bg-black py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
