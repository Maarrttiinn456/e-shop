'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import LightGallery from 'lightgallery/react';
import { Product } from '@/types/product';

type Props = {
    productPromise: Promise<Product>;
};

export function ProductGallery({ productPromise }: Props) {
    const product = use(productPromise);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const hasMultipleImages = product.images.length > 1;

    return (
        <div className="flex gap-3 h-[530px]">
            {hasMultipleImages && (
                <div className="flex flex-col gap-3 w-40">
                    {product.images.map((src, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedIndex(i)}
                            className={`relative flex-1 rounded-xl overflow-hidden border-2 transition-colors ${
                                selectedIndex === i
                                    ? 'border-black'
                                    : 'border-transparent bg-gray-100'
                            }`}
                        >
                            <Image
                                src={src}
                                alt={`Product view ${i + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}

            <LightGallery
                elementClassNames="flex-1 relative h-full rounded-2xl overflow-hidden bg-gray-100 cursor-zoom-in"
                index={selectedIndex}
            >
                {product.images.map((src, i) => (
                    <a
                        key={i}
                        href={src}
                        className={
                            i === selectedIndex
                                ? 'relative block w-full h-full'
                                : 'hidden'
                        }
                    >
                        <Image
                            src={src}
                            alt="Product"
                            fill
                            className="object-cover"
                        />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
}
