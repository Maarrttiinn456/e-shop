import Link from 'next/link';
import { Product } from '@/types/product';
import { fetchRandomProducts } from '@/lib/api';
import { ProductCard } from '@/components/ProductCard';

export async function BuyNow() {
    const products: Product[] = await fetchRandomProducts(4);

    return (
        <section className="py-14 lg:py-20">
            <div className="container">
                <div className="flex items-center justify-between mb-10 lg:mb-14">
                    <h2 className="font-heading font-black text-3xl lg:text-[40px] uppercase tracking-tight">
                        Top Selling
                    </h2>
                    <Link
                        href="/products"
                        className="font-body text-sm border border-black/20 rounded-full px-8 py-3 hover:bg-black hover:text-white transition-colors"
                    >
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
