import Stripe from 'stripe';
import { CartItem } from '@/types/cart';

export async function POST(request: Request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    let body: { items: CartItem[] };

    try {
        body = await request.json();
    } catch {
        return Response.json(
            { error: 'Invalid request body' },
            { status: 400 },
        );
    }

    const { items } = body;

    if (!Array.isArray(items) || items.length === 0) {
        return Response.json(
            { error: 'Items must be a non-empty array' },
            { status: 400 },
        );
    }

    const origin = new URL(request.url).origin;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: items.map((item) => ({
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: item.product.title,
                        images: item.product.thumbnail
                            ? [item.product.thumbnail]
                            : [],
                    },
                    unit_amount: Math.round(item.product.price * 100),
                },
                quantity: item.quantity,
            })),
            mode: 'payment',
            success_url: `${origin}/checkout/success`,
            cancel_url: `${origin}/cart`,
        });

        return Response.json({ url: session.url });
    } catch {
        return Response.json(
            { error: 'Failed to create checkout session' },
            { status: 500 },
        );
    }
}
