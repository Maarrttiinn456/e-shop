# Changelog

## [0.8.0] 2026-04-04

**Změněné soubory:** `src/components/HeroSection.tsx`, `src/lib/api.ts`

- Refaktoring `HeroSection` — přechod z dvousloupcového layoutu na centrovaný design, odebrán obrázek modelu, navigační `<button>` nahrazen sémantickým `<Link href="/products">`
- Optimalizace cachování v `api.ts` — `cache: 'no-store'` nahrazeno ISR revalidací `next: { revalidate: 60 }`

## [0.7.0] 2026-04-04

**Změněné soubory:** `src/lib/store.ts`, `src/types/cart.ts`, `src/components/AddCartButton.tsx`, `src/components/CartHydration.tsx`, `src/app/layout.tsx`, `src/components/Header.tsx`, `src/components/ProductCard.tsx`, `.claude/rules/code-style.md`

- Přidán Zustand store pro košík (`store.ts`) s persistencí do localStorage a SSR-safe hydratací (`skipHydration: true`)
- Nový typ `CartItem` sdružující produkt a množství
- Nová komponenta `AddCartButton` — klientské tlačítko přidávající produkt do košíku
- Nová komponenta `CartHydration` — zajišťuje rehydrataci store na klientu po SSR
- `Header` rozšířen o počítadlo položek košíku přes Zustand selektor
- `ProductCard` rozšířena o tlačítko `AddCartButton`
- Opraveno renderování `0` při nulové slevě (`discountPercentage > 0`)
- Aktualizována pravidla projektu: vždy `type` (nikdy `interface`), měna je € nikoli Kč

## [0.6.0] 2026-04-03

**Změněné soubory:** `src/components/FeedbackCard.tsx`, `src/components/FeedbackSlider.tsx`, `src/components/FeedbackSliderClient.tsx`, `src/types/feedback.ts`, `src/app/page.tsx`, `src/app/globals.css`, `package.json`

- Přidána sekce zákaznických recenzí na hlavní stránku
- Nová komponenta `FeedbackCard` — karta recenze se jménem zákazníka, hvězdičkovým hodnocením, textem a odznakem ověřeného zákazníka
- Nová komponenta `FeedbackSlider` — Server Component načítající recenze a obalující klientský slider
- Nová komponenta `FeedbackSliderClient` — interaktivní slider (Swiper) s navigačními tlačítky, fade-in efektem a error stavem
- Přidán typ `Feedback` do `src/types/feedback.ts`
- Swiper CSS přesunut do globálního `globals.css` (z komponentové úrovně)

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
