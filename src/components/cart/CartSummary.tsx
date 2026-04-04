'use client';

import { useCartStore } from '@/lib/store';

export function CartSummary() {
    const items = useCartStore((state) => state.items);
    const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
    const shipping: number = 0;
    const total = subtotal + shipping;

    return (
        <div className="flex flex-col gap-3 border border-black/10 rounded-2xl p-6">
            <h2 className="font-heading font-black text-lg uppercase tracking-tight">
                Shrnutí objednávky
            </h2>

            <div className="flex justify-between font-body text-sm">
                <span className="text-black/60">Mezisoučet</span>
                <span>{subtotal.toFixed(2)} €</span>
            </div>

            <div className="flex justify-between font-body text-sm">
                <span className="text-black/60">Doprava</span>
                <span>
                    {shipping === 0
                        ? 'Zdarma'
                        : `${shipping.toFixed(2)} €`}
                </span>
            </div>

            <div className="border-t border-black/10 pt-3 flex justify-between font-body font-semibold text-base">
                <span>Celkem</span>
                <span>{total.toFixed(2)} €</span>
            </div>

            <button
                type="button"
                className="mt-2 w-full py-3 rounded-full bg-black text-white font-body text-sm font-medium hover:bg-black/80 transition-colors"
            >
                Přejít k platbě
            </button>
        </div>
    );
}
