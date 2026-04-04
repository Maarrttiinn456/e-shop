'use client';

import { useState } from 'react';
import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { ShoppingCart } from 'lucide-react';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const allCartItems = useCartStore((state) => state.itemCount());

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
            <div className="container flex items-center py-5 md:py-6 md:gap-10">
                {/* Hamburger / Křížek – jen mobil */}
                <button
                    className="md:hidden shrink-0 mr-4"
                    aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M6 6l12 12M18 6L6 18"
                                stroke="black"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M3 6h18M3 12h18M3 18h18"
                                stroke="black"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </button>

                {/* Logo – uprostřed na mobilu, vlevo na desktopu */}
                <Link href="/">
                    <span className="text-[28px] md:text-[32px] font-bold font-heading leading-none tracking-tight">
                        SHOP.CO
                    </span>
                </Link>

                {/* Desktop navigace
                <Navigation />
                 */}

                {/* SearchBar – jen desktop */}
                <div className="hidden md:flex flex-1">
                    <SearchBar />
                </div>

                {/* Ikony */}
                <div className="flex items-center gap-3.5 shrink-0">
                    {/* Lupa – jen mobil */}
                    <button className="md:hidden" aria-label="Hledat">
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
                    <button aria-label="Košík" className="relative">
                        <ShoppingCart size={24} strokeWidth={1.8} />
                        {allCartItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#FF3333] text-white text-[10px] font-body font-semibold leading-none w-[18px] h-[18px] rounded-full flex items-center justify-center">
                                {allCartItems}
                            </span>
                        )}
                    </button>

                    {/* Uživatel */}
                    <button aria-label="Profil">
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
            </div>

            {/* Mobilní menu – absolutní, překryje obsah */}
            <div
                className={`md:hidden absolute left-0 right-0 top-full bg-white z-50 overflow-hidden transition-all duration-300 ease-in-out border-b border-black/10 ${
                    menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="container flex flex-col gap-1 pb-6 pt-2">
                    <button className="flex items-center justify-between w-full py-3 text-lg font-body text-black border-b border-black/10">
                        Shop
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M4 6l4 4 4-4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <a
                        href="#"
                        className="py-3 text-lg font-body text-black border-b border-black/10"
                    >
                        On Sale
                    </a>
                    <a
                        href="#"
                        className="py-3 text-lg font-body text-black border-b border-black/10"
                    >
                        New Arrivals
                    </a>
                    <a href="#" className="py-3 text-lg font-body text-black">
                        Brands
                    </a>
                </nav>
            </div>
        </header>
    );
}
