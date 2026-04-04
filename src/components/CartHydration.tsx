'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/lib/store';

export function CartHydration() {
    useEffect(() => {
        useCartStore.persist.rehydrate();
    }, []);

    return null;
}
