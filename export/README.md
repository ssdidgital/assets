# Homepage export for other web builders

Two files:

1. **system-switch.css** — the full stylesheet. Paste it into your builder's custom CSS area
   (site-wide or page-level), or wrap it in `<style>…</style>` and paste it into the page's head code.
2. **homepage-embed.html** — the whole homepage as one block: markup plus the script that runs the
   calculator, £/$ toggle, FAQ, header and scroll animations. Paste it into a single custom HTML / code block.

## Before you publish

- **Booking link:** near the bottom of `homepage-embed.html`, find
  `var BOOK_URL = 'https://YOUR-GHL-FORM-LINK';` and paste your Go High Level form link.
  Each button adds `utm_content` (hero, header, calculator, router, band-home, footer); the calculator
  also adds `leak_estimate`, so add a hidden field with that key to the GHL form to capture it.
- **Images** load from the GitHub repo (`raw.githubusercontent.com/ssdidgital/assets/main/public/…`).
  If the repo goes private, upload the logo files and `kyu.webp` to your builder and replace those links.
- **Page links** (About, Approach, Privacy…) point to https://systemswitch.digital. Change them if those pages live elsewhere.
- Use a **full-width, no-padding** section for the block, and turn off the builder's own header/footer
  on this page (the block includes both).

To regenerate after site changes: `npx next build && node scripts/export-embed.mjs`.
