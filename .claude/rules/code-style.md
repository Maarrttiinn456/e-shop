# Code Style

## TypeScript

- Vždy TypeScript, žádné `any` bez komentáře `// TODO: doplnit typ — důvod`
- Typy definuj v `/types`, importuj explicitně
- Vždy `type`, nikdy `interface` — a to i pro objektové typy

## Exporty

- Vždy **named exporty**: `export function Foo() {}`
- **Default export** pouze pro Next.js page komponenty (`export default function Page()`)

## Styling

- Výhradně **Tailwind utility třídy**, žádné inline styles (`style={{...}}`)
- Žádné separátní CSS soubory pro komponenty (kromě globálního `globals.css`)

## Layout — sekce a container

Každá sekce stránky **vždy** používá `<section>` s `<div className="container">` uvnitř:

```tsx
<section>
  <div className="container">
    {/* obsah */}
  </div>
</section>
```

- Tailwind třída `container` zajišťuje jednotnou šířku obsahu napříč celým webem
- Výjimka: `<header>` a `<footer>` mají `<div className="container">` přímo uvnitř sebe
- Nikdy nedefinuj šířku/centrování obsahu jinak než přes `container`

## Next.js komponenty

- **Server Components jako výchozí** — nepřidávej `'use client'` zbytečně
- `'use client'` přidej pouze tam, kde je potřeba: event handlery, useState, useEffect, browser API
- Data fetching dělej v Server Components

## E-commerce — ceny

- Ceny **vždy jako integer** (haléře/centy): `1999` = 19,99 €
- **Nikdy float**: ne `19.99`, vždy `1999`
- Formátování pro zobrazení: `(price / 100).toFixed(2)`
- Měna je **euro (€)**, nikdy Kč

## Error handling

- Vždy ošetři **loading** a **error** stavy (loading.tsx, error.tsx, nebo podmíněné renderování)
- Nikdy nenech uživatele bez vizuální zpětné vazby při asynchronní operaci
