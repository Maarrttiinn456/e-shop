'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';

export default function CheckoutSuccessPage() {
    const clearCart = useCartStore((state) => state.clearCart);

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <section>
            <div className="container py-24 flex flex-col items-center gap-6 text-center">
                <h1 className="font-heading font-black text-3xl uppercase tracking-tight">
                    Platba proběhla úspěšně
                </h1>
                <p className="font-body text-black/60 text-base max-w-md">
                    Děkujeme za tvou objednávku! Brzy ti pošleme potvrzení na e-mail.
                </p>
                <Link
                    href="/"
                    className="mt-4 px-8 py-3 rounded-full bg-black text-white font-body text-sm font-medium hover:bg-black/80 transition-colors"
                >
                    Zpět na hlavní stránku
                </Link>
            </div>
        </section>
    );
}
