# Git Workflow

## Větve
- Feature větve vždy vycházejí z `develop`
- Název větve musí začínat prefixem `feature/`
- Příklad: `feature/product-detail-page`

## Commit messages
Používej tyto prefixy:
- `feat:` — nová funkčnost
- `fix:` — oprava chyby
- `refactor:` — refaktoring bez změny chování
- `chore:` — údržba, konfigurace, závislosti

## Zakázané operace
- Nikdy nepushuj přímo do `develop` nebo `main`
- Nikdy nepoužívej `git push --force` na sdílené větve

## Po mergi
- Feature větev smaž lokálně: `git branch -d feature/<název>`
- Feature větev smaž na remote: `git push origin --delete feature/<název>`
