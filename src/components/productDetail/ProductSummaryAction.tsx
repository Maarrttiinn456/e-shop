'use client';

import { useState } from 'react';

export function ProductSummaryAction() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex gap-3 items-center mt-4">
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
    );
}
