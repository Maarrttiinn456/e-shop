import { ProductList } from '@/components/ProductList';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Suspense } from 'react';

export default function ProductsPage() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <ProductList />
        </Suspense>
    );
}
