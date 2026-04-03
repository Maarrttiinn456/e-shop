import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';

export function Header() {
    return (
        <header className="w-full border-b border-black/10">
            <div className="container flex items-center gap-10 py-6">
                {/* Logo */}
                <span className="text-[32px] font-bold font-heading leading-none tracking-tight shrink-0">
                    SHOP.CO
                </span>

                <Navigation />

                <SearchBar />

                {/* Ikony */}
                <div className="flex items-center gap-3.5 shrink-0">
                    {/* Košík */}
                    <button aria-label="Košík">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                                stroke="black"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3 6h18"
                                stroke="black"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 10a4 4 0 01-8 0"
                                stroke="black"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
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
        </header>
    );
}
