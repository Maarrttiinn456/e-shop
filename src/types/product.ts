// types/product.ts

export type Dimensions = {
    width: number;
    height: number;
    depth: number;
};

export type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
};

export type Meta = {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
};

export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand?: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
};

// Seznam produktů z API
export type ProductsResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
};

/**
 * Ořezaný typ pro katalog (Product Card).
 * Využívá utilitu Pick, která z typu Product vybere jen konkrétní klíče.
 */
export type ProductPreview = Pick<
    Product,
    | 'id'
    | 'title'
    | 'price'
    | 'thumbnail'
    | 'category'
    | 'discountPercentage'
    | 'rating'
>;
