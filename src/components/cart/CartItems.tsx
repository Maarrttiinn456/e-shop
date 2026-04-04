'use client';

import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { CartItem } from '@/types/cart';

export function CartItems() {
    const items = useCartStore((state) => state.items);
    const addItem = useCartStore((state) => state.addItem);
    const decreaseItem = useCartStore((state) => state.decreaseItem);
    const removeItem = useCartStore((state) => state.removeItem);

    if (items.length === 0) {
        return (
            <p className="font-body text-sm text-black/50">
                Váš košík je prázdný
            </p>
        );
    }

    return (
        <ul className="flex flex-col gap-4">
            {items.map((item: CartItem) => (
                <li
                    key={item.product.id}
                    className="flex items-center gap-4 border-b border-black/10 pb-4"
                >
                    <div className="w-16 h-16 bg-black/5 rounded-lg shrink-0 overflow-hidden">
                        <Image
                            src={item.product.thumbnail}
                            alt={item.product.title}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="font-body font-medium text-sm">
                            {item.product.title}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                            <button
                                onClick={() => decreaseItem(item.product.id)}
                                className="w-7 h-7 flex items-center justify-center rounded-md border border-black/15 text-black/60 hover:bg-black/5 hover:text-black transition-colors"
                                aria-label="Snížit množství"
                            >
                                <Minus size={13} />
                            </button>
                            <span className="font-body text-sm w-6 text-center tabular-nums">{item.quantity}</span>
                            <button
                                onClick={() => addItem(item.product)}
                                className="w-7 h-7 flex items-center justify-center rounded-md border border-black/15 text-black/60 hover:bg-black/5 hover:text-black transition-colors"
                                aria-label="Zvýšit množství"
                            >
                                <Plus size={13} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-red-400 hover:text-red-600 transition-colors"
                            aria-label="Odebrat položku"
                        >
                            <Trash2 size={16} />
                        </button>
                        <p className="font-body text-sm font-semibold">
                            {(item.product.price * item.quantity).toFixed(2)} €
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
