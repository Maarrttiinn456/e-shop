const placeholderSummary = {
    subtotal: 13997,
    shipping: 0,
    total: 13997,
};

export function CartSummary() {
    const { subtotal, shipping, total } = placeholderSummary;

    return (
        <div className="flex flex-col gap-3 border border-black/10 rounded-2xl p-6">
            <h2 className="font-heading font-black text-lg uppercase tracking-tight">Shrnutí objednávky</h2>

            <div className="flex justify-between font-body text-sm">
                <span className="text-black/60">Mezisoučet</span>
                <span>{(subtotal / 100).toFixed(2)} €</span>
            </div>

            <div className="flex justify-between font-body text-sm">
                <span className="text-black/60">Doprava</span>
                <span>{shipping === 0 ? 'Zdarma' : `${(shipping / 100).toFixed(2)} €`}</span>
            </div>

            <div className="border-t border-black/10 pt-3 flex justify-between font-body font-semibold text-base">
                <span>Celkem</span>
                <span>{(total / 100).toFixed(2)} €</span>
            </div>

            <button
                type="button"
                className="mt-2 w-full py-3 rounded-full bg-black text-white font-body text-sm font-medium hover:bg-black/80 transition-colors"
            >
                Přejít k platbě
            </button>
        </div>
    );
}
