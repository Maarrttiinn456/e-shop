export function Navigation() {
    return (
        <nav className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-1 text-base font-body text-black">
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
            <a href="#" className="text-base font-body text-black">
                On Sale
            </a>
            <a href="#" className="text-base font-body text-black">
                New Arrivals
            </a>
            <a href="#" className="text-base font-body text-black">
                Brands
            </a>
        </nav>
    );
}
