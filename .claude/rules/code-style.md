# Code Style

## TypeScript

- Vždy TypeScript, žádné `any` bez komentáře `// TODO: doplnit typ — důvod`
- Typy definuj v `/types`, importuj explicitně
- Preferuj `interface` pro objektové typy, `type` pro union/intersection

## Exporty

- Vždy **named exporty**: `export function Foo() {}`
- **Default export** pouze pro Next.js page komponenty (`export default function Page()`)

## Styling

- Výhradně **Tailwind utility třídy**, žádné inline styles (`style={{...}}`)
- Žádné separátní CSS soubory pro komponenty (kromě globálního `globals.css`)

## Next.js komponenty

- **Server Components jako výchozí** — nepřidávej `'use client'` zbytečně
- `'use client'` přidej pouze tam, kde je potřeba: event handlery, useState, useEffect, browser API
- Data fetching dělej v Server Components

## E-commerce — ceny

- Ceny **vždy jako integer** (haléře/centy): `1999` = 19,99 Kč
- **Nikdy float**: ne `19.99`, vždy `1999`
- Formátování pro zobrazení: `(price / 100).toFixed(2)`

## Error handling

- Vždy ošetři **loading** a **error** stavy (loading.tsx, error.tsx, nebo podmíněné renderování)
- Nikdy nenech uživatele bez vizuální zpětné vazby při asynchronní operaci
