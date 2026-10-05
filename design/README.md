# Handoff: System Switch website

## Overview
Marketing site for System Switch, a growth infrastructure firm for founder-led coaches, consultants and service providers. Five pages plus a three-step booking flow; one conversion goal: **Book a systems audit**.

## About the design files
Everything in `design-reference/` is a **design reference built in HTML/React (Babel in the browser)** — a working prototype showing the intended look and behaviour, not production code. Recreate it in a real codebase. If there's no existing app, use **Next.js (App Router) + TypeScript + plain CSS / CSS Modules** (or Tailwind if preferred), static export friendly. Port the CSS variables and class rules from `design-reference/site.css` and `design-reference/tokens/` rather than re-inventing values.

The `.jsx.txt` files are React source with a `.txt` suffix — read them as JSX. They hold the **verbatim copy**; never rewrite copy.

To view the prototype: open `design-reference/Site.html` from a local server at the path shown in its `<link>`/`<script>` tags, or ask the designer for the published link.

## Fidelity
**High-fidelity.** Final colours, type, spacing, copy and interactions. Match pixel-for-pixel at 1440px and 390px. Where this README and `design-reference/site.css` disagree, **site.css wins**.

## Routes
| Route | Page | Source |
|---|---|---|
| `/` | Home | `SiteHome.jsx.txt` |
| `/approach` | Approach | `SitePages.jsx.txt` → `SiteApproach` |
| `/who-we-work-with` | Who we work with | `SitePages.jsx.txt` → `SiteWho` |
| `/about` | About | `SitePages.jsx.txt` → `SiteAbout` |
| `/start` | Book a systems audit (form) | `SiteBook.jsx.txt` |
| `/start/calendar` | Choose a time | `SiteBook.jsx.txt` |
| `/start/booked` | Confirmation | `SiteBook.jsx.txt` |
| `*` | 404 | `SiteChrome.jsx.txt` → `NotFound` |

Page titles and meta descriptions: `META` in `design-reference/Site.html`. (The prototype uses hash routes like `#/who`; use real paths.)

## Design system, tokens and global rules
**Fonts:** self-host from `assets/fonts/`. Outfit 400/500/600 for headlines and text; DM Mono 400/500 for labels, eyebrows, numbers and buttons. Never italic.

**Colours (CSS variables, two themes):**

Linen theme (default):
- canvas `#f5f3ec` · raised `#ffffff` · sunken `#ebe8df`
- border subtle `#ddd9cd` · border strong `#cfc9b9` · input border `#7e857f`
- text primary `#111a16` · text secondary `#5c6660`
- accent fill (gold) `#c9a24e` · accent text `#7a5f20` · on-accent `#11352b` · focus `#8e7230`
- danger `#a3322a`

Forest theme (`data-theme="forest"`, used for the closing band, footer and stage tiles):
- canvas `#11352b` · raised `#1a4638` · sunken `#0b261f`
- border subtle `#2a5b4a` · border strong `#4e7466`
- text primary `#f5f3ec` · text secondary `#a7c0b4` · accent text `#e8c99a`

Build with these as CSS variables so any block can switch theme with `data-theme="forest"`. Full values: `design-reference/tokens/colors.css`.

**Visual rules (non-negotiable):**
- Square corners everywhere. `border-radius: 0`.
- 1px hairline borders. No drop shadows, no gradients (except the hero dot grid).
- Spacing on an 8px scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Content width 1240px with 48px side padding (16px on mobile). The page sits inside a frame with 1px side borders.
- One gold phrase per headline, wrapped in a span coloured accent text (`#7a5f20`), same weight.
- Eyebrows: DM Mono 12px, uppercase, letter-spacing .18em, 1px border box, padding 5px 9px.
- Section padding 96px top and bottom (64px on mobile).
- Breakpoints: 767px (mobile) and 900px (stack two-column layouts).

**Type scale:** hero H1 Outfit 600, clamp(40px, 4.8vw, 68px), line-height 1.04, letter-spacing −0.04em. Section H2 Outfit 600 46px/50px, −0.03em (32px on mobile). H3 20px/26px 600. Body 16/24, body large 18/28. Exact values in `design-reference/site.css` (`.s-hero-h`, `.s-h2`) and `design-reference/tokens/type.css`.

**Buttons:** square, DM Mono 11px uppercase, letter-spacing .14em, 44px tall, 18px side padding.
- Primary: gold fill `#c9a24e`, text `#11352b`. Only one per view: hero and closing band.
- Secondary (header): transparent, 1px ink border, fills ink on hover.
- Ghost ("See how we work →", "Read the story →"): plain text link, turns accent on hover.
- "Book a systems audit" primary buttons end in a small switch toggle (18×6px light-green track `#a7c0b4` with a 9×6px gold knob). On hover or keyboard focus the knob slides 9px right over 300ms. No movement otherwise. See `.s-blink` in `design-reference/site.css`.
- All buttons lift 1px on hover (except ghost).

**Header (sticky, 72px, linen, bottom hairline):** gold wordmark logo `assets/logo-wordmark-gold.svg` (34px tall) on the left; outlined "Book a systems audit" button on the right. No nav links. On mobile, swap the logo for `assets/mark-gold.svg`.

**Homepage sections, in order** (component names match `design-reference/SiteHome.jsx`):
1. **Hero** — linen with a gold dot grid (1px dots, 14px spacing, colour `#c9a24e`), centred. Eyebrow, H1 with gold phrase, supporting text, primary button + ghost link. Supporting text uses the "Split" format: first sentence Outfit 500 21px ink, second sentence 17px secondary, max width 640px.
2. **What brings you by?** — H2, then one joined white strip of three columns with hairline dividers (not separate cards). Each: 28px sunken icon tile, title, short text. Hover: lifts 3px, title turns accent.
3. **What the CRM won't tell you** — sunken background `#ebe8df`. Eyebrow, H2 (gold sentence on its own line), two paragraphs, then the illustration panel, then one paragraph, then a statement line above a strong top rule.
   - **Illustration panel:** white, hairline border, eyebrow "Illustration", H3 "Twelve months of enquiries". A 64px bar split 24 / 44 / 32: ink, hatched (135° accent-text lines every 7px on linen), gold. Below each segment its label and description, with a 1px rule continuing up from the segment edge; use a CSS grid with `24fr 44fr 32fr` so labels align with segments. No numbers. On scroll into view the bar draws left to right (scaleX, 1.1s) and labels fade in one after another. On mobile the labels stack.
4. **What we build** — four rows (max 860px): white body with "Stage N" label, H3, text; 124px Forest tile on the right holding a 36px gold icon. Recovery has a "Where we usually start" tag. Row hover darkens the tile. A closing sentence below.
5. **How we work** — sunken background. Three step cards joined in one strip with hairline dividers: label (First / Then / Finally), icon tile, title, text. Below, a white "You keep what we build." strip with a lock icon.
6. **Who it's for** — two columns: "A good fit if:" list with gold checks, "Not a fit if:" list with grey crosses. Rows separated by hairlines.
7. **Founder** — two columns: 4:5 portrait placeholder (sunken, hairline) and text with eyebrow, H2, two paragraphs, ghost link. Placeholders like `[[X,XXX+]]` render as mono text in a dashed box.
8. **Before you book (FAQ)** — sunken background. Two columns: left is the eyebrow and a left-aligned H2 (52px) with "a systems audit." on its own gold line, sticky on desktop; right is an accordion with strong hairline dividers, 20px questions, a plus icon that rotates to a cross when open. First item open.
9. **Closing band** — Forest band with an inset Linen box: H2, two-line supporting text, primary button.
10. **Footer** — Forest, white wordmark `assets/logo-wordmark-white.svg`, tagline, link columns Company / Contact / Legal with mono uppercase headings, then a hairline and the copyright line with the company-number placeholder.

**Motion:** sections and cards fade up 16px over 700ms as they enter the viewport, with a 70ms stagger inside card groups. The hero doesn't animate. Turn off all motion under `prefers-reduced-motion`.

**Cookie banner:** fixed to the bottom, white, strong top border, text plus "Accept all" and "Essential only". Remember the choice.


## Home — section by section
See "Homepage sections, in order" above. Shared chrome (header, closing band with per-page copy in `BANDS`, footer, cookie banner, 404) lives in `SiteChrome.jsx.txt`.

## Book a systems audit flow
- **Layout:** main column plus a 300px sticky "What happens next" panel on the right (sunken background, three numbered steps, the current step in ink). The panel is hidden below 1000px.
- **Form:** three white cards ("About you", "About the business", "Where things stand") holding 12 questions, numbered 01–12 in DM Mono accent.
  - **Labels:** Outfit 500 16px, sentence case.
  - **Inputs:** 48px tall, square, 1px input border, linen fill.
  - **Radio questions:** a bordered list of 48px rows with a square 18px radio. When checked, the radio fills ink and the row turns sunken.
  - **Question 12** is optional.
- **Validation:** submitting with required fields empty shows the error banner from the source and outlines the bad fields in danger red. A valid submit goes to `/start/calendar`.
- **Calendar step:** headline, intro text and a calendar embed area (for now a dashed placeholder). It will be replaced with the real booking widget, which redirects to `/start/booked`.
- **Booked:** centred headline, line, "Before we speak" checklist, closing lines. No call to action.


## Approach, Who we work with, About, 404
- **Page hero (Approach and Who):** centred eyebrow, H1 with a gold phrase (Outfit 600, clamp(38px, 4.4vw, 60px)), 18px supporting text, primary "Book a systems audit" button.
- **Approach:**
  - six principle cards in a two-column grid (white, hairline, 32px padding), with a lock tile on "You keep what we build.";
  - a numbered step list (48px DM Mono gold numbers, hairline rows);
  - a white "What's yours at the end" panel with a check list;
  - a closing band with the Approach headline from `BANDS` in `design-reference/SiteChrome.jsx`.
- **Who we work with:**
  - three audience cards, each with an icon tile and a mono label;
  - the six signs with checks;
  - "The stage we're built for" on the sunken background;
  - "Who we're not for";
  - a closing band with the Who headline.
- **About:** centred eyebrow and H1, a 4:5 portrait placeholder, then a 660px story column. The lead line is Outfit 500 24px. Each of the three seats has a gold mono eyebrow ("01 · The founder" and so on). The music paragraph sits after a hairline rule. Closing band uses the homepage copy.
- **404:** centred H1 "This page has gone quiet.", the supporting line, a "Home" ghost link and the primary button.


## Interactions & behaviour
- **Scroll reveal:** IntersectionObserver, rootMargin `0px 0px -8% 0px`; elements get `opacity:0; translateY(16px)` → visible over 700ms `cubic-bezier(.2,.7,.2,1)`; 70ms stagger inside card groups. Hero excluded. Logic: `useEffect` in `design-reference/Site.html`; classes `.s-rv` / `.s-in` in `site.css`.
- **Illustration bar:** scaleX 0→1 over 1.1s `cubic-bezier(.6,0,.2,1)`, 0.3s delay; labels fade in at 1.4s / 1.6s / 1.8s.
- **FAQ:** single-open accordion, first item open, `aria-expanded` + `aria-controls`, plus icon rotates 45° over 250ms.
- **Switch button:** gold knob slides 9px on hover/focus over 300ms. No idle animation.
- **Hover:** buttons lift 1px; router strip items lift 3px and title turns accent; stage-row tile darkens; header button fills ink.
- **Reduced motion:** all of the above disabled.
- **Cookie banner:** persists choice (prototype key `ssd-site-cookies`).
- **Focus:** 2px `--focus` outline, 2px offset, on every interactive element.

## State
- Booking form: field values, error map, submit → validate required (all except Q12) → route to `/start/calendar`.
- Cookie consent flag.
- FAQ open index.
No data fetching in the design. Integrations to wire at build:
- Form submission → CRM (GoHighLevel or chosen tool) with the 12 fields.
- Calendar step → real booking embed that redirects to `/start/booked`.
- Analytics only after cookie consent.

## Assets
- `assets/logo-wordmark-gold.svg` (header), `assets/logo-wordmark-white.svg` (footer), `assets/mark-gold.svg` (mobile header), `assets/favicon-32.svg`.
- `assets/fonts/` — Outfit 400/500/600, DM Mono 400/500 (woff2, self-host).
- Icons: inline SVG paths in `design-reference/components/Icon.jsx.txt` (24px grid, 1.5 stroke, square caps). Port as a typed `<Icon name>` component.
- Founder portrait: placeholder only — 4:5 photo to come.

## Content still to supply before launch
- `[[X,XXX+]]` sales calls and `[[$X]]` closed — homepage founder section and About.
- `[[company number and registered office]]` — footer.
- Founder portrait (4:5).
- Privacy policy and Terms pages.
- Real calendar embed + form endpoint.

## Files
- `design-reference/Site.html` — app shell, router, META, scroll reveal, tweak defaults (hero lede format = "Split").
- `design-reference/site.css` — every layout/component rule (source of truth).
- `design-reference/tokens/*.css` — colours (Linen + Forest themes), type, spacing scale, effects.
- `design-reference/components/` — design-system Button, Field, Icon, FeatureCards + `components.css`.
- `design-reference/Site*.jsx.txt` — page components with verbatim copy.

## Common fixes
- "Make every corner square (border-radius 0) and remove all shadows."
- "Borders must be 1px hairlines in the exact colours from the colour list. Don't use Tailwind's default grays."
- "The 'What brings you by?' items and the step cards are one joined strip with 1px dividers, not separate cards with gaps."
- "The illustration labels must start exactly at each bar segment's edge. Use a CSS grid of 24fr 44fr 32fr for both the bar and the labels."
- "Buttons use DM Mono 11px uppercase with .14em letter-spacing. They're square, not rounded."
- "Match the hero headline size and tracking to `.s-hero-h` in source/site.css."
- "Only the hero and the closing band have gold buttons; the header button is outlined."

