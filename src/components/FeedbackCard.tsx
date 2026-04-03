import { Feedback } from '@/types/feedback';

function Stars({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-1" aria-label={`Hodnocení ${rating} z 5`}>
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-5 h-5 ${rating >= star ? 'fill-[#FFC633]' : 'fill-[#D1D1D1]'}`}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M10 1.667l2.37 4.803 5.297.77-3.834 3.734.905 5.273L10 13.583l-4.738 2.664.905-5.273L2.333 7.24l5.298-.77L10 1.667z" />
                </svg>
            ))}
        </div>
    );
}

function VerifiedIcon() {
    return (
        <svg
            className="w-5 h-5 shrink-0"
            viewBox="0 0 20 20"
            fill="none"
            aria-label="Ověřený zákazník"
        >
            <circle cx="10" cy="10" r="10" fill="#01AB31" />
            <path
                d="M6 10.5l2.5 2.5 5.5-5.5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function FeedbackCard({ feedback }: { feedback: Feedback }) {
    return (
        <article className="flex flex-col gap-3 p-6 rounded-2xl border border-black/10 bg-white h-full">
            <Stars rating={feedback.rating} />
            <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-base">{feedback.name}</span>
                {feedback.verified && <VerifiedIcon />}
            </div>
            <p className="font-body text-sm text-black/60 leading-relaxed">
                &ldquo;{feedback.quote}&rdquo;
            </p>
        </article>
    );
}
