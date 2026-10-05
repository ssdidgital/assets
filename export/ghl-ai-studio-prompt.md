# Prompt for GHL AI Studio — System Switch homepage

Copy everything below the line into AI Studio, and attach the full-page screenshot.

---

Recreate the attached website screenshot as a Go High Level funnel/website page, matching it as exactly as possible: layout, spacing, typography, colours, copy and behaviour. Do not redesign, rewrite copy, add sections, add stock images, add icons that aren't shown, or round any corners. Use the exact text below, word for word, including punctuation and curly quotes.

## 1. Brand rules (apply everywhere)

- **Square corners on everything.** Border-radius 0 on buttons, cards, inputs, images, tags. No drop shadows on cards.
- **Thin 1px hairline borders** to separate things (colour #DDD9CD on light backgrounds, #2A5B4A on dark green).
- **One gold phrase per headline:** in each headline, only the phrase marked **[gold]** below is gold (#7A5F20 on light backgrounds, #C9A24E on dark green). The rest of the headline is near-black.
- **Sentence case** for all headlines and buttons. No italics anywhere.
- Small labels (eyebrows, section names, tags) are **uppercase, monospace, letter-spaced** (~0.14em), 11–12px.
- Content max width ~1144px, centred. Side gutter 16px on mobile. Large vertical breathing room between sections (~96px desktop, ~64px mobile).
- The whole page sits inside a thin vertical hairline "frame": a 1px line down the left and right edges of the content area.

## 2. Colours

| Use | Hex |
|---|---|
| Page background (linen) | #F5F3EC |
| Raised / off-white panels | #FFFFFF |
| Sunken (alternate) section background | #EBE8DF |
| Main text (ink) | #111A16 |
| Secondary text | #5C6660 |
| Hairline border | #DDD9CD |
| Stronger border | #CFC9B9 |
| Gold accent (fills, knobs, bars) | #C9A24E |
| Gold text on light | #7A5F20 |
| Dark gold (focus outline) | #8E7230 |
| Forest green (dark sections, footer) | #11352B |
| Forest green, raised | #1A4638 |
| Text on forest green | #F5F3EC |

## 3. Fonts (Google Fonts)

- **Outfit** (400, 500, 600) for everything except labels. Headlines are Outfit 600 with tight letter-spacing (about -0.04em).
  - Hero headline: 52px desktop / 34px mobile, line-height ~1.08.
  - Section headlines: ~44px desktop / ~30px mobile.
  - Body: 17–18px, line-height ~1.6, secondary text colour.
- **DM Mono** (400, 500) for labels, numbers, section indexes, calculator values and the "Kyū · Founder" tag.

## 4. Buttons

- **Primary** ("Book a systems audit" in the hero and closing section): ink #111A16 fill, linen text, 1px ink border, square, ~48px tall, 24px horizontal padding, Outfit 500 16px. At its right edge sits a tiny "switch": an 18×6px bar with a gold 9×6px knob; on hover the knob slides to the other side.
- **Secondary** (header and calculator "Book a systems audit"): transparent fill, 1px ink border, ink text. Header version is small (~40px tall) and ends with "↗".
- **Ghost** ("See how we work →", "Read the story →", "See the full approach →"): text only, no border, underline on hover.

### Button mapping (important)

Every booking button must be a link that I can map to a GHL form, and the form then redirects to a GHL calendar. Make each one a separate, editable button element, named as follows so I can map them:

| Button | Location | Name it |
|---|---|---|
| Book a systems audit ↗ | Header (sticky) | `book-header` |
| Book a systems audit | Hero | `book-hero` |
| Ready to talk → (whole tile is clickable) | "Start here" section, third tile | `book-router` |
| Book a systems audit | Calculator results | `book-calculator` |
| Book a systems audit | Closing section | `book-closing` |
| Book a systems audit | Footer, Company column | `book-footer` |

All six should open the same booking form (I'll set the URL). Add these URL parameters to each link so GHL records which button was clicked: `?utm_source=website&utm_medium=cta&utm_content=<header|hero|router|calculator|band-home|footer>`.

The calculator button should also pass the visitor's calculated estimate as `&leak_estimate=<monthly amount>/month` (e.g. `£4,800/month`), updated live as the sliders move, so I can capture it in a hidden form field with the key `leak_estimate`.

Other links: "See how we work →" scrolls to section 04; "How we think ↓" scrolls to section 02; "How we work →", "See the full approach →" go to /approach; "Read the story →" goes to /about.

## 5. Page structure, top to bottom

### Header (sticky)
- Transparent over the hero; after scrolling 8px it gets a linen background and a 1px bottom hairline.
- Left: gold "System Switch" wordmark logo (use the logo image I provide). On mobile show only the round gold mark.
- Right: secondary button "Book a systems audit ↗" (`book-header`).

### Hero (centred)
- Background: linen with a subtle dotted grid (1px dots, #CFC9B9, every 14px). The dots **fade out behind the text** (transparent in a central ellipse, visible towards the edges) so the copy stays easy to read.
- Eyebrow (mono label): SALES INFRASTRUCTURE FOR FOUNDER-LED BUSINESSES
- H1, two lines: "We build the systems that turn leads into sales:" / "the new ones, and **[gold]** the ones you've already paid for."
- Lede: "Most agencies sell you more leads. We start by finding out whether you need them, then fix whatever's actually costing you sales. You keep everything we build."
- Offer line (small, with a tiny gold switch icon before it): "Start with a free systems audit, and get your Recovery Brief within 48 hours."
- Buttons: primary "Book a systems audit" (`book-hero`), ghost "See how we work →".

### Section index style (used on sections 01–07)
Each section opens with a row: mono number in gold (e.g. "01"), a tiny switch icon, the section name in mono uppercase, then a 1px hairline running to the right edge.

### 01 · START HERE (centred)
- H2: "What brings you by?"
- Three equal tiles in a row (stacked on mobile), each a bordered square card with a small square icon tile, a bold title and a short line. Tiles lift slightly on hover.
  1. "How we think ↓": "The problem we see most often in founder-led businesses, and why more leads rarely fix it." (scrolls to 02)
  2. "How we work →": "What we build, how an engagement runs, and what you keep at the end." (/approach)
  3. "Ready to talk →": "Tell us about your business and book a time." (`book-router`)

### 02 · WHAT THE CRM WON'T TELL YOU (sunken background #EBE8DF)
- H2: "Most businesses think they need more leads. **[gold]** They're losing buyers in the Not-Yet Gap."
- **Interactive calculator** (white panel, 1px border; full spec in section 6).
- Below the calculator, two columns:
  - Left, large statement at headline size: "We measure growth by what a business keeps." followed on new lines by **[gold]** "We call it your Keep Rate."
  - Right, body: "So the business spends more to find new strangers, while the people who already know it, trust it and asked about it go cold in a list nobody's working. The cause is rarely the sales team, and it isn't a discipline problem. It's infrastructure: nothing in the business is built to hold a buyer between "interested" and "ready"."

### 03 · WHAT WE BUILD
- H2: "Four stages of revenue. **[gold]** We start where the leak is biggest."
- Intro: "Revenue moves through all four. Most businesses only ever invest in the first. The fastest return is usually further down."
- Layout: headline and intro on the left (~40%); on the right, **four cards stacked vertically** with ~12px gaps. Each card is white with a 1px border; text on the left (mono "STAGE N" label, bold title, short line) and, on the right edge, a full-height forest-green (#11352B) square panel holding a thin gold line icon (1: target, 2: two opposing arrows, 3: rising trend arrow, 4: two people). On mobile the left column sits above the cards.
  1. **Acquisition.** A front end that brings in the right people: the message, the funnel and the path from first click to booked call.
  2. **Conversion.** Fast, consistent follow-up that reaches this week's enquiries while they're still warm and turns them into booked, qualified calls.
  3. **Recovery.** (next to its "STAGE 3" label, a small outlined mono tag "WHERE WE USUALLY START") The buyers already sitting in your list, the ones who said "not now", went quiet, or got a quote nobody chased, brought back to the table without new ad spend.
  4. **Retention.** Clients who stay, buy again and send people your way.

### 04 · HOW WE WORK (forest green #11352B background, linen text)
- H2: "Diagnose. Install. **[gold]** Hand over."
- Three equal panels in a row inside one bordered block (raised green #1A4638 with #2A5B4A hairlines between them; stacked on mobile). Each has a mono label (FIRST / THEN / FINALLY), a 28px square gold icon tile with a dark line icon (magnifier / stacked layers / the switch logo mark), a bold title and a short line:
  - **Diagnose.** We find where your biggest constraint sits before we build anything.
  - **Install.** We build the system inside your business, in your voice, and run it until it's producing booked calls.
  - **Hand over.** We train your team, hand you the controls, and stay on for 30 days.
- Below, a full-width bordered callout panel (same raised green) with a small dark square holding a padlock icon on the left, then **You keep what we build.** and the line "It lives in your accounts, with your data. No lock-in, and no retainer to keep the lights on once it's yours."
- Ghost link: "See the full approach →" (/approach).

### 05 · WHO IT'S FOR
- H2: "Built for founder-led businesses that **[gold]** have proven their model."
- Lede: "You're good at what you do, and your clients get results. What's missing isn't talent. It's a system that holds on to the people who were interested."
- Two side-by-side columns (no box), each a list with hairline dividers between rows:
  - **A good fit if:** (each row starts with a thin dark-green tick ✓) You sell a premium service or programme, and buyers usually take a call before they commit. / You have a list of past leads, enquiries or clients that you've paid to build, and you know it isn't being worked. / You've had strong months, but revenue still comes in waves, and growth still runs through you. / You want a system you keep.
  - **Not a fit if:** (heading and rows in secondary grey; each row starts with a thin grey ✕) You're still finding your offer or your first clients. / You're looking for cheap leads or a quick campaign. / You only want more traffic and a monthly report. / You'd rather not look at the numbers.

### 06 · THE FOUNDER (sunken background)
- Two columns: photo left (~340px wide on desktop, 300px on mobile), text right (stacked on mobile, photo first).
- **Photo treatment** (use the founder photo I provide, cropped 4:5, square corners):
  - 1px #CFC9B9 border around the photo.
  - Behind it, an **offset frame**: a white (#FFFFFF) filled rectangle the same size, shifted 14px right and 14px down (8px on mobile), with a 1px gold #C9A24E border, like a mounted print.
  - Small gold L-shaped corner marks (14px, 2px thick) inside the top-left and bottom-right corners.
  - Bottom-left corner tag: linen background, hairline top/right border, a 14×6px gold bar, then "KYŪ · FOUNDER" in mono uppercase.
  - Slight warm tone on the photo (a touch less saturation).
- H2: "Why **[gold]** System Switch exists."
- Body: "Kyū spent six years closing high-ticket deals: [[X,XXX+]] calls and [[£X]] closed. He kept seeing the same buyers slip away after the call. Before that, he'd lost a business of his own, for a reason most founders don't see coming." (Keep the [[ ]] placeholders as editable text; the £ follows the currency toggle.)
- Ghost link: "Read the story →" (/about).

### 07 · BEFORE YOU BOOK
- Two columns: headline left, accordion right.
- H2: "What to expect from **[gold]** a systems audit."
- **FAQ accordion:** one item open at a time, the first open by default. Each row has a hairline divider and a plus icon that turns into a minus when open. Clicking an open item closes it.
  1. **What happens in a systems audit?** A 20-minute call about how revenue moves through your business: where enquiries come from, what happens to the ones who don't buy straight away, and how follow-up works today. You'll leave knowing where the biggest constraint sits and what we'd fix first.
  2. **What do I get afterwards?** Your Recovery Brief, within 48 hours. One page: your estimated Keep Rate and what the Not-Yet Gap is worth, which group of past leads to reopen first, the first message to send them, and the one change that would recover the most. It's yours whether we work together or not, and it's easy to share with a partner or your team.
  3. **Does it cost anything?** No. The systems audit is free.
  4. **My old leads are probably dead. Is there any point?** Fewer than you'd think. Plenty of people who said "not now" six months ago are ready today, and nobody has asked them. The audit shows you roughly how many, using your own numbers.
  5. **I've worked with agencies before. Why is this different?** We don't start by selling you more leads. We look at what you already have, build the system inside your business, and run it until it's producing booked calls. Then we hand it to your team, so you're never locked into paying us to keep it running. If we can't help, we'll say so on the call.

### Closing section
- Forest green outer band with a linen inner box (1px border), centred.
- H2: "There's usually one thing holding your growth back. **[gold]** Let's find it."
- Line: "Tell us about your business. If we can help, we'll show you where to start. If we can't, we'll say so."
- Primary button "Book a systems audit" (`book-closing`).

### Footer (forest green)
- Left: white wordmark logo and "Sales infrastructure for founder-led businesses."
- Three columns with mono uppercase headings:
  - COMPANY: Approach · Who we work with · About · Book a systems audit (`book-footer`)
  - LEGAL: System Switch · Privacy policy · Terms and conditions
  - CONTACT: support@systemswitch.digital (mailto link)
- Bottom line, above a hairline: "© 2026 System Switch Digital".

## 6. The calculator (must be fully working)

White panel with a 1px border, centred content.

**Top:**
- Mono label "YOUR NUMBERS"
- Heading: "**[gold]** Twelve months of enquiries"
- Instruction pill (1px gold border): a "⟷" arrow that gently sways left and right, then "Drag the sliders to your numbers. The bar and the total update as you go." After the visitor first moves any slider, the arrow stops, the border turns grey and the text changes to "Updated to your numbers."

**Four sliders** in a row (2×2 on tablet, stacked on mobile). Each has its label on the left, the live value on the right (mono, gold text), the slider, and the min/max under the track in small mono grey:

| Label | Min | Max | Step | Default | Shown as |
|---|---|---|---|---|---|
| Enquiries a month | 5 | 500 | 5 | 20 | 20 |
| Buy straight away | 5 | 60 | 1 | 20 | 20% |
| Of the rest, buy later elsewhere | 5 | 70 | 1 | 10 | 10% (help text below: "A guess is fine. We find the real figure on the call.") |
| What a client is worth | 500 | 50,000 | 500 | 3,000 | £3,000 |

- Under the last slider: a two-option square toggle "£ GBP | $ USD" (selected option filled ink with linen text). It switches every currency amount on the page, including the founder line, and is remembered on the visitor's next visit.
- **Slider styling:** 8px track; the filled part (left of the knob) is ink #111A16 and the rest is #CFC9B9. The knob is a 26px **square** gold #C9A24E block with a 2px linen border, a soft shadow, and two thin dark vertical grip lines. It grows slightly on hover/focus, shows a grab cursor, and is fully keyboard-operable.
- Until the visitor touches a slider, the first slider's knob pulses softly with a gold ring.
- Each slider row gets a faint gold tint on hover or focus.
- Turn off all motion when the visitor prefers reduced motion.

**Bar (redraws live):** a full-width horizontal bar, 64px tall, 1px ink border, split into three segments whose widths are proportional to the results, animating smoothly (~0.45s) when values change:
- "now": solid ink
- "wait": white with thin diagonal stripes (1px dark gold #7A5F20 lines every 7px, at 135°)
- "leak": solid gold

Under the bar, a three-column key aligned to the segments (each column at least ~26% wide so labels never get squashed), each with the live percentage in mono and a vertical line on its left (ink for the first two, gold for the third):
- **Bought straight away.** The part most businesses measure and optimise.
- **Said "not now".** Interested, qualified, and left in the CRM.
- **Bought later, elsewhere.** Revenue the business paid to create and never collected.

**Results** (centred, above a hairline):
- Mono label "YOUR ESTIMATED KEEP RATE", then a large number (e.g. "71%").
- "Of the people who enquired and went on to buy, that's the share who bought from you."
- Big line: "Roughly **[gold] £4,800 a month** is going to whoever follows up."
- "That's £57,600 a year, from enquiries the business has already paid to create."
- Small mono caption: "An estimate from your inputs, not a forecast."
- "That's an estimate. Book a systems audit and we'll work out your real Keep Rate, in your Recovery Brief."
- Secondary button "Book a systems audit" (`book-calculator`).

**Maths (use exactly):**
```
now  = buyStraightAway / 100
lost = (1 - now) * (buyLaterElsewhere / 100)
wait = 1 - now - lost
monthly = enquiriesPerMonth * lost * clientValue
yearly  = monthly * 12
keepRate = now / (now + lost)        // show as a whole-number %
percentages for the bar/key = round(x * 100)
```
Money is formatted with no decimals and rounded to the nearest 100 (nearest 1,000 above 1,000,000): `£4,800` in en-GB for GBP, `$4,800` in en-US for USD.
With the defaults the panel must show: 20% / 72% / 8%, Keep Rate 71%, £4,800 a month, £57,600 a year.

## 7. Motion

- Sections and cards fade up 16px over ~700ms as they scroll into view (cards in a row one after another, 70ms apart). The hero does not animate. Disable all of this for reduced-motion users.
- Primary button switch knob slides on hover; tiles lift 2px on hover.

## 8. Responsive

- Desktop ≥1000px: layouts as above.
- Tablet 768–999px: calculator sliders 2×2; stage cards 2×2.
- Mobile <768px: everything stacks to one column; hero headline 34px (30px under 400px wide); header shows only the round logo mark and the button; nothing may scroll sideways.

## 9. Accessibility

- Every slider has a visible label and announces its value; the results area updates politely for screen readers.
- Visible gold focus outline (2px #8E7230) on every interactive element.
- Alt text on the founder photo: "Kyū, founder of System Switch".

## 10. Assets
- Gold wordmark logo (header): https://raw.githubusercontent.com/ssdidgital/assets/main/public/logo-wordmark-gold.svg
- Round gold mark (mobile header): https://raw.githubusercontent.com/ssdidgital/assets/main/public/mark-gold.svg
- White wordmark logo (footer): https://raw.githubusercontent.com/ssdidgital/assets/main/public/logo-wordmark-white.svg
- Founder photo (already cropped 4:5): https://raw.githubusercontent.com/ssdidgital/assets/main/public/kyu.webp
- Full-page screenshots for reference (desktop and mobile), attached.

When you're done, list the six booking buttons and where to set each one's link, so I can connect them to my form and calendar.
