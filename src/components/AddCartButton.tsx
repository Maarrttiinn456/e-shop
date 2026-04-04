'use client';

import { Product } from '@/types/product';
import { useCartStore } from '@/lib/store';

export function AddCartButton({ product }: { product: Product }) {
    const addItem = useCartStore((state) => state.addItem);

    return (
        <button
            type="button"
            onClick={() => addItem(product)}
            className="w-full cursor-pointer font-body text-sm font-medium py-2.5 rounded-full bg-black text-white hover:bg-black/80 transition-colors"
        >
            Do košíku
        </button>
    );
}
