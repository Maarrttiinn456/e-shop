import { Suspense } from 'react';
import { ProductGallery } from '@/components/productDetail/ProductGallery';
import { ProductSummary } from '@/components/productDetail/ProductSummary';
import { ProductDetailSkeleton } from '@/components/productDetail/ProductDetailSkeleton';
import { fetchProductById } from '@/lib/api';

type Props = {
    params: Promise<{ productId: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
    const { productId } = await params;
    const productPromise = fetchProductById(Number(productId));

    return (
        <section className="py-8 md:py-16">
            <div className="container">
                <Suspense fallback={<ProductDetailSkeleton />}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <ProductGallery productPromise={productPromise} />
                        <ProductSummary productPromise={productPromise} />
                    </div>
                </Suspense>
            </div>
        </section>
    );
}
