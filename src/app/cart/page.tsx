import { CartItems } from '@/components/cart/CartItems';
import { CartSummary } from '@/components/cart/CartSummary';

export default function CartPage() {
    return (
        <section>
            <div className="container py-8 md:py-16">
                <h1 className="font-heading font-black text-3xl uppercase tracking-tight mb-8">
                    Váš košík
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                    <CartItems />
                    <CartSummary />
                </div>
            </div>
        </section>
    );
}
