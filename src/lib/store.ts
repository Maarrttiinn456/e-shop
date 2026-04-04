import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '@/types/cart';
import { Product } from '@/types/product';

type CartState = {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: number) => void;
    decreaseItem: (productId: number) => void;
    clearCart: () => void;
    itemCount: () => number;
};

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product) =>
                set((state) => {
                    const existing = state.items.find(
                        (i) => i.product.id === product.id,
                    );
                    if (existing) {
                        return {
                            items: state.items.map((i) =>
                                i.product.id === product.id
                                    ? { ...i, quantity: i.quantity + 1 }
                                    : i,
                            ),
                        };
                    }
                    return { items: [...state.items, { product, quantity: 1 }] };
                }),
            removeItem: (productId) =>
                set((state) => ({
                    items: state.items.filter((i) => i.product.id !== productId),
                })),
            decreaseItem: (productId) =>
                set((state) => ({
                    items: state.items
                        .map((i) =>
                            i.product.id === productId
                                ? { ...i, quantity: i.quantity - 1 }
                                : i,
                        )
                        .filter((i) => i.quantity > 0),
                })),
            clearCart: () => set({ items: [] }),
            itemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
        }),
        {
            name: 'cart-storage',
            partialize: (state) => ({ items: state.items }),
            skipHydration: true,
        },
    ),
);
