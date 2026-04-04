import { use } from 'react';
import { Product } from '@/types/product';
import { ProductSummaryAction } from './ProductSummaryAction';

type Props = {
    productPromise: Promise<Product>;
};

export function ProductSummary({ productPromise }: Props) {
    const product = use(productPromise);
    const priceInCents = Math.round(product.price * 100);
    const discountedPriceInCents = Math.round(
        priceInCents * (1 - product.discountPercentage / 100),
    );

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-black uppercase leading-tight">
                {product.title}
            </h1>

            <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                    {'★'.repeat(Math.round(product.rating))}
                    {'☆'.repeat(5 - Math.round(product.rating))}
                </div>
                <span className="text-sm text-gray-500">
                    {product.rating.toFixed(1)}/5
                </span>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">
                    {(discountedPriceInCents / 100).toFixed(2)} €
                </span>
                <span className="text-3xl text-gray-400 line-through">
                    {(priceInCents / 100).toFixed(2)} €
                </span>
            </div>

            <p className="text-gray-600 leading-relaxed">
                {product.description}
            </p>

            <ProductSummaryAction />
        </div>
    );
}
