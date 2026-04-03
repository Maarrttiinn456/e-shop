import { HeroSection } from '@/components/HeroSection';
import { BuyNow } from '@/components/BuyNow';
import { FeedbackSlider } from '@/components/FeedbackSlider';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <Suspense fallback={<LoadingSpinner />}>
                <BuyNow />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
                <FeedbackSlider />
            </Suspense>
        </main>
    );
}
