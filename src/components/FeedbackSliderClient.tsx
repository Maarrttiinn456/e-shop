'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';

import { FeedbackCard } from './FeedbackCard';
import { Feedback } from '@/types/feedback';

type FeedbackSliderClientProps = {
    feedbacks: Feedback[];
};

export function FeedbackSliderClient({ feedbacks }: FeedbackSliderClientProps) {
    const swiperRef = useRef<SwiperRef>(null);
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(false);

    return (
        <>
            <div className="flex items-center justify-between mb-10 md:mb-14">
                <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase">
                    Our Happy Customers
                </h2>
                <div className="flex items-center gap-2 shrink-0">
                    <button
                        type="button"
                        aria-label="Předchozí recenze"
                        onClick={() => swiperRef.current?.swiper.slidePrev()}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        aria-label="Další recenze"
                        onClick={() => swiperRef.current?.swiper.slideNext()}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>

            <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1.2}
                breakpoints={{
                    640: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 3.2 },
                }}
                onSwiper={() => setReady(true)}
                onError={() => setError(true)}
                className={`!overflow-visible pb-2 transition-opacity duration-300 ${ready ? 'opacity-100' : 'opacity-0'}`}
            >
                {feedbacks.map((feedback) => (
                    <SwiperSlide key={feedback.id} className="h-auto">
                        <FeedbackCard feedback={feedback} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
