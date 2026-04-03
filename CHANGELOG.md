# Changelog

## [0.5.0] 2026-04-03

**Změněné soubory:** `src/components/Footer.tsx`, `src/components/NewsletterForm.tsx`, `src/app/layout.tsx`

- Přidána komponenta `Footer` — patička stránky s logem, popisem a navigačními sloupci (Company, Help, FAQ, Resources)
- Přidána komponenta `NewsletterForm` — formulář pro přihlášení k newsletteru s e-mailovým inputem a tlačítkem; klientská komponenta (`'use client'`) s lokálním stavem
- Patička zapojena do globálního layoutu (`layout.tsx`) — zobrazuje se na všech stránkách pod obsahem

## [0.4.0] 2026-04-03

**Změněné soubory:** `src/app/page.tsx`, `src/app/products/page.tsx`, `src/components/Header.tsx`, `src/components/BuyNow.tsx`, `src/lib/api.ts`, `src/components/LoadingSpinner.tsx`, `src/components/ProductCard.tsx`, `src/components/ProductList.tsx`

- Přidána stránka produktového katalogu (`/products`) s filtrováním a řazením
- Nová komponenta `ProductList` — mřížka produktových karet s podporou Suspense
- Nová komponenta `ProductCard` — karta produktu s obrázkem, hodnocením hvězdičkami, slevou a cenou; ceny počítány jako integer v centech
- Nová komponenta `LoadingSpinner` — indikátor načítání pro asynchronní operace
- Rozšířeno `api.ts` o funkce pro načítání produktů a kategorií
- Aktualizována hlavní stránka a header

## [0.3.0] 2026-04-03

**Změněné soubory:** `src/components/BuyNow.tsx`, `src/app/page.tsx`

## [0.2.0] 2026-04-03

**Změněné soubory:** `src/components/Header.tsx`

- Přidáno hamburger menu pro mobilní zobrazení — tlačítko vlevo vedle loga
- Hamburger se po kliknutí přepíná na křížek a opětovným kliknutím menu zavře
- Mobilní menu vyjíždí seshora jako absolutní overlay (nepřesouvá obsah stránky dolů), animováno přes `max-h` a `opacity` transition
- Logo vycentrováno na mobilech (`flex-1 text-center`), na desktopu zůstává vlevo
- SearchBar skryt na mobilech, nahrazen ikonou lupy v řadě ikon vpravo
- Desktop layout beze změny

## [0.1.0] 2026-04-03

**Změněné soubory:** `src/components/HeroSection.tsx`, `src/app/page.tsx`

- Přidána nová komponenta `HeroSection` — hero sekce hlavní stránky podle SHOP.CO template
- Hero sekce obsahuje velký nadpis, popis, CTA tlačítko „Shop Now", statistiky (200+ značek, 2 000+ produktů, 30 000+ zákazníků) a dekorativní SVG hvězdičky
- Pravý sloupec připraven pro foto modelu (`/public/hero-model.png`)
- Hlavní stránka (`page.tsx`) aktualizována — zobrazuje `HeroSection` místo placeholder textu
