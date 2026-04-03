Feature je hotová. Proveď v pořadí:

## Krok 1 — Code Review
Spusť agenta code-reviewer. Počkej na výsledek.
Pokud FAIL: vypiš issues a zastav se. Pokračuj až po mém pokynu.
Pokud PASS: pokračuj.

## Krok 2 — Changelog
Přidej záznam na začátek CHANGELOG.md (za hlavičku):

## [<verze>] <datum>

**Změněné soubory:** <seznam souborů>

## Krok 3 — Merge a cleanup
1. `git checkout develop`
2. `git merge feature/<název> --no-ff -m "feat: merge <název>"`
3. `git branch -d feature/<název>`
4. Potvrď výsledek
