import { FeedbackSliderClient } from './FeedbackSliderClient';
import { Feedback } from '@/types/feedback';

// TODO: nahradit skutečným fetch voláním, např.:
// const feedbacks = await fetch('/api/feedbacks').then(r => r.json())
async function getFeedbacks(): Promise<Feedback[]> {
    return [
        {
            id: 1,
            name: 'Sarah M.',
            rating: 5,
            verified: true,
            quote: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        },
        {
            id: 2,
            name: 'Alex K.',
            rating: 5,
            verified: true,
            quote: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
        },
        {
            id: 3,
            name: 'James L.',
            rating: 5,
            verified: true,
            quote: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        },
        {
            id: 4,
            name: 'Moody M.',
            rating: 5,
            verified: true,
            quote: 'I absolutely love the variety and quality of clothes at Shop.co. The customer service is outstanding and the delivery was faster than expected. Highly recommend!',
        },
    ];
}

export async function FeedbackSlider() {
    const feedbacks = await getFeedbacks();

    return (
        <section className="bg-white overflow-hidden pt-16 pb-32">
            <div className="container">
                <FeedbackSliderClient feedbacks={feedbacks} />
            </div>
        </section>
    );
}
