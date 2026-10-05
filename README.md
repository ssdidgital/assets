# System Switch website

Next.js (App Router) + TypeScript, static export (`out/`). Design handoff lives in [`design/`](design/README.md); its `CLAUDE.md` rules apply.

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

| Route | Page |
|---|---|
| `/` | Home |
| `/approach`, `/who-we-work-with`, `/about` | Inner pages |
| `/start` → `/start/calendar` → `/start/booked` | Book a systems audit |
| anything else | 404 |

## Layout
- `styles/` — tokens (`colors.css`, `scale.css`, `type.css`), self-hosted fonts, ported design-system component CSS, `site.css` copied verbatim from `design/design-reference/site.css` (source of truth), and `fixes.css`, which loads last and corrects a few prototype bugs (each commented).
- `components/` — `Icon`, `Button`/`BookButton`, `Field`, `FeatureCards`, `PageHero`, header/closing band/footer (`SiteChrome`), `CookieBanner`, `ScrollReveal`, plus `home/` and `book/` sections.
- `lib/booking.ts` — the 12 questions, validation and `submitApplication()`.
- `lib/meta.ts` — per-route titles and descriptions (from `META` in the prototype), canonical URLs and Open Graph.

## Before launch
- **Site URL:** canonical links, Open Graph and `sitemap.xml` use `NEXT_PUBLIC_SITE_URL` (default `https://systemswitch.digital`).
- **Form → CRM:** `submitApplication()` in `lib/booking.ts` only keeps answers in `sessionStorage`; add the CRM POST there.
- **Calendar:** replace the placeholder link in `app/start/calendar/page.tsx` with the booking embed, redirecting to `/start/booked`.
- **Analytics:** load only after consent: `readConsent() === 'all'` from `components/CookieBanner.tsx`, or listen for the `ssd-consent` event.
- **Content:** `[[X,XXX+]]`, `[[$X]]`, `[[company number and registered office]]`, the founder portrait (4:5), LinkedIn URL, Privacy policy and Terms pages.
