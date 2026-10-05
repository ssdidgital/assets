# System Switch website

Next.js (App Router) + TypeScript, static export (`out/`). Design handoff lives in [`design/`](design/README.md); its `CLAUDE.md` rules apply.

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

- `styles/` — tokens (`colors.css`, `scale.css`, `type.css`), self-hosted fonts, ported design-system component CSS, and `site.css` copied verbatim from `design/design-reference/site.css` (source of truth).
- `components/` — `Icon`, `Button`/`BookButton`, header, closing band, footer, `CookieBanner` (consent stored under `ssd-site-cookies`; read with `readConsent()`).
