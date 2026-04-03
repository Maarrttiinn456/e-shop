import { Product } from '@/types/product';
import { fetchProducts } from '@/lib/api';
import { ProductCard } from '@/components/ProductCard';

export async function ProductList() {
    const products: Product[] = await fetchProducts();

    return (
        <section className="py-14 lg:py-20">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
