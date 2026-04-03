import { HeroSection } from '@/components/HeroSection';
import { BuyNow } from '@/components/BuyNow';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <Suspense fallback={<LoadingSpinner />}>
                <BuyNow />
            </Suspense>
        </main>
    );
}
