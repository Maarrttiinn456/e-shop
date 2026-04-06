import { FeedbackSliderClient } from './FeedbackSliderClient';
import { fetchComments } from '@/lib/api';

export async function FeedbackSlider() {
    const comments = await fetchComments(10);
    const feedbacks = comments.map((comment) => ({
        id: comment.id,
        name: comment.user.fullName,
        rating: 5,
        quote: comment.body,
    }));

    return (
        <section className="bg-white overflow-hidden pt-16 pb-32">
            <div className="container">
                <FeedbackSliderClient feedbacks={feedbacks} />
            </div>
        </section>
    );
}
