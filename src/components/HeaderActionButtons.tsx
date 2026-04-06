'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/lib/store';

export function HeaderActionButtons() {
    const allCartItems = useCartStore((state) => state.itemCount());

    return (
        <div className="flex items-center gap-3.5 shrink-0">
            {/* Lupa – jen mobil */}
            <button className="md:hidden cursor-pointer" aria-label="Hledat">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                >
                    <circle
                        cx="11"
                        cy="11"
                        r="7"
                        stroke="black"
                        strokeWidth="1.8"
                    />
                    <path
                        d="M16.5 16.5L21 21"
                        stroke="black"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            {/* Košík */}
            <Link href="/cart" aria-label="Košík" className="relative cursor-pointer">
                <ShoppingCart size={24} strokeWidth={1.8} />
                {allCartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#FF3333] text-white text-[10px] font-body font-semibold leading-none w-[18px] h-[18px] rounded-full flex items-center justify-center">
                        {allCartItems}
                    </span>
                )}
            </Link>

            {/* Uživatel */}
            <button aria-label="Profil" className="cursor-pointer">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                >
                    <circle
                        cx="12"
                        cy="8"
                        r="4"
                        stroke="black"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4 20c0-4 3.582-7 8-7s8 3 8 7"
                        stroke="black"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
}
