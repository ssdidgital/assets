# First message to paste into Claude Code

Open this folder (or copy it into your repo as `/design`) and paste:

---

Read `README.md` and `CLAUDE.md`, then everything in `design-reference/`. Build the System Switch website as a Next.js (App Router) + TypeScript app with self-hosted fonts from `assets/fonts/`.

Work in this order, and stop after each step so I can review:
1. Tokens (port `design-reference/tokens/*.css` as CSS variables with Linen default and `[data-theme="forest"]`), fonts, base styles, Icon and Button components, header, footer, closing band, cookie banner.
2. Homepage, section by section, matching `SiteHome.jsx.txt` copy verbatim.
3. `/start`, `/start/calendar`, `/start/booked`.
4. Approach, Who we work with, About, 404.
5. Scroll reveal, hover states, reduced motion, SEO meta per route.

Where the README and `site.css` disagree, follow `site.css`. Don't add sections or rewrite copy.
