@AGENTS.md

# E-shop

## Stack

- **Framework:** Next.js (App Router)
- **Jazyk:** TypeScript
- **Styling:** Tailwind CSS

## Příkazy

```bash
npm run dev      # vývojový server
npm run build    # produkční build
npm run lint     # ESLint
npm run test     # testy
```

## Architektura

```
/app          # Next.js routes (App Router)
/components   # UI komponenty
/lib          # utility funkce, helpers
/types        # TypeScript typy a interfaces
/public       # statické soubory (obrázky, fonty)
```

## Git workflow

- Feature větve vycházejí vždy z `develop`, pojmenování `feature/<název>`
- Commit messages: prefix `feat:`, `fix:`, `refactor:`, `chore:`
- Nikdy nepushuj přímo do `develop` nebo `main`
- Mergi přes Pull Request, po mergi feature větev smaž
