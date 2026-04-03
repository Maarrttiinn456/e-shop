export function SearchBar() {
    return (
        <div className="flex-1 flex items-center gap-3 rounded-full px-4 py-3 bg-[var(--color-search-bg)]">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
            >
                <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="black"
                    strokeOpacity="0.4"
                    strokeWidth="1.8"
                />
                <path
                    d="M16.5 16.5L21 21"
                    stroke="black"
                    strokeOpacity="0.4"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
            <input
                type="search"
                placeholder="Search for products..."
                className="flex-1 bg-transparent outline-none text-base font-body text-black/40 placeholder:text-black/40"
            />
        </div>
    );
}
