type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
};

const placeholderItems: CartItem[] = [
    { id: '1', name: 'T-Shirt Classic', price: 2999, quantity: 2, image: '/placeholder.jpg' },
    { id: '2', name: 'Hoodie Premium', price: 7999, quantity: 1, image: '/placeholder.jpg' },
];

export function CartItems() {
    return (
        <ul className="flex flex-col gap-4">
            {placeholderItems.map((item) => (
                <li key={item.id} className="flex items-center gap-4 border-b border-black/10 pb-4">
                    <div className="w-16 h-16 bg-black/5 rounded-lg shrink-0" />
                    <div className="flex-1">
                        <p className="font-body font-medium text-sm">{item.name}</p>
                        <p className="font-body text-xs text-black/50">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-body text-sm font-semibold">
                        {((item.price * item.quantity) / 100).toFixed(2)} €
                    </p>
                </li>
            ))}
        </ul>
    );
}
