# Changelog

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
