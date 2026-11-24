# Strona Molinkelus

Statyczna strona firmy (PL/EN) z polityką prywatności, do hostowania na GitHub Pages.

- `index.html` – strona główna (gry, kontakt)
- `polityka-prywatnosci.html` – polityka prywatności gier i strony (link do Google Play Console)
- `?lang=pl` / `?lang=en` w adresie wymusza język

## Przed publikacją

Podmień znaczniki w obu plikach HTML: `[NAZWA FIRMY Z CEIDG]`, `[ADRES Z CEIDG]`, `[NIP]`, `[EMAIL]`, `[DATA PUBLIKACJI]`.

## Publikacja na GitHub Pages

1. Utwórz publiczne repozytorium. Adres `https://molinkelus.github.io/` wymaga konta lub (darmowej) organizacji GitHub o nazwie `molinkelus` i repozytorium `molinkelus.github.io`. Repozytorium `strona` na zwykłym koncie da adres `https://<konto>.github.io/strona/`.
2. Wrzuć zawartość tego folderu do gałęzi `main`.
3. Repozytorium → Settings → Pages → Source: *Deploy from a branch*, Branch: `main`, folder `/ (root)`.

Polityka prywatności będzie pod adresem `https://<konto>.github.io/polityka-prywatnosci.html`.
