export function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-black/10 border-t-black animate-spin" />
            <p className="font-body text-sm text-black/50">Načítám produkty...</p>
        </div>
    );
}
