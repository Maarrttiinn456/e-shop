import { SearchBar } from './SearchBar';
import Link from 'next/link';
import { HeaderActionButtons } from './HeaderActionButtons';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
            <div className="container flex items-center justify-between py-5 md:py-6 md:gap-10">
                {/* Logo – uprostřed na mobilu, vlevo na desktopu */}
                <Link href="/">
                    <span className="text-[28px] md:text-[32px] font-bold font-heading leading-none tracking-tight">
                        SHOP.CO
                    </span>
                </Link>

                {/* SearchBar – jen desktop */}
                <div className="hidden md:flex flex-1">
                    <SearchBar />
                </div>

                {/* Ikony */}
                <HeaderActionButtons />
            </div>
        </header>
    );
}
