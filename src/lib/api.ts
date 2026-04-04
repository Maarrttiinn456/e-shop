import { Product, ProductsResponse } from '@/types/product';

const API_BASE_URL = 'https://dummyjson.com';

export async function fetchProducts(limit: number = 0): Promise<Product[]> {
    const response = await fetch(`${API_BASE_URL}/products?limit=${limit}`, {
        next: { revalidate: 60 },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data: ProductsResponse = await response.json();

    return data.products;
}

export async function fetchProductById(id: number): Promise<Product> {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        next: { revalidate: 60 },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch product ${id}: ${response.statusText}`);
    }

    return response.json();
}

export async function fetchRandomProducts(limit: number): Promise<Product[]> {
    const randomSkip = Math.floor(Math.random() * 95);

    const response = await fetch(
        `${API_BASE_URL}/products?limit=${limit}&skip=${randomSkip}`,
        {
            cache: 'no-store', // Vynutí stažení nových dat při každém načtení
        },
    );

    if (!response.ok) {
        throw new Error(`Chyba při načítání produktů: ${response.statusText}`);
    }

    const data: ProductsResponse = await response.json();

    return data.products.sort(() => Math.random() - 0.5);
}
