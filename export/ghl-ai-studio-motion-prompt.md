# Prompt for GHL AI Studio: motion and interaction

Copy everything below the line into AI Studio, after the page itself has been built.

---

Add the following motion and hover behaviour to the System Switch page, exactly as specified. Keep motion quiet and precise: short fades, small movements, no bounces, no spinning, no parallax, no zooming images, nothing that loops except the two calculator hints. Do not add any animation that isn't listed here.

## Timing reference

| Name | Duration | Easing |
|---|---|---|
| Fast | 120ms | cubic-bezier(.2, 0, 0, 1) |
| Base | 200ms | ease |
| Slow | 400ms | cubic-bezier(.2, 0, 0, 1) |
| Reveal | 700ms | opacity: ease; movement: cubic-bezier(.2, .7, .2, 1) |
| Switch knob | 300ms | cubic-bezier(.6, 0, .2, 1) |

## 1. The "switch" motif (brand signature)

The brand's recurring motion is a tiny switch: an 18×6px bar (pale green #A7C0B4, or #4E7466 on dark green) with a 9×6px gold #C9A24E knob that slides from the left half to the right half over 300ms, cubic-bezier(.6, 0, .2, 1). It appears in three places:

1. **Primary buttons** ("Book a systems audit" in the hero and closing section): the switch sits at the right end of the button. On hover or keyboard focus, the knob slides right; on leaving, it slides back.
2. **Section index rows** ("01 · START HERE" and the rest): the switch sits between the number and the section name. It starts with the knob on the left; when the row scrolls into view, the knob slides right after a 450ms delay, as if the section has been "switched on". It stays on after that.
3. **Hero offer line** ("Start with a free systems audit…"): the switch before the text is shown already switched on (knob on the right). It doesn't move.

## 2. Scroll reveal

- Sections and their contents **fade in and rise 16px** as they enter the viewport: opacity 0 → 1 over 700ms (ease), translateY(16px) → 0 over 700ms with cubic-bezier(.2, .7, .2, 1).
- Trigger when the element is about 8% into view from the bottom of the screen. Each element animates **once only**; scrolling back up doesn't replay it.
- Within each section, reveal each direct child separately (index row, headline, body, card group…).
- **Staggered groups:** the children of these groups reveal one after another, **70ms apart**: the three "Start here" tiles, the four stage cards, the three "How we work" steps, the "fit / not a fit" rows, and the FAQ rows.
- **The hero does not animate.** It's visible immediately on load.
- After an element has finished revealing, remove the reveal styles from it so its own hover effects (below) work normally.

### Calculator entrance (special sequence)

When the calculator panel scrolls into view:
1. The panel fades up as above.
2. Starting 300ms in, the three-part bar **grows from left to right** (scaleX 0 → 1, transform-origin left) over 1.1s, cubic-bezier(.6, 0, .2, 1).
3. The three key labels under the bar fade in (500ms each), one after another: "Bought straight away" at 1.4s, "Said 'not now'" at 1.6s, "Bought later, elsewhere" at 1.8s.

## 3. Header

- Sticky at the top. Over the hero it's **transparent with no bottom border**.
- After the page scrolls more than 8px, the background fades to linen #F5F3EC and a 1px #DDD9CD bottom border fades in over 250ms (ease). Scrolling back to the top reverses it.

## 4. Buttons and links

- **All buttons:** colour, background and border changes over 200ms (ease).
- **Primary:** on hover the background changes from ink #111A16 to forest green #1A4638 and the button lifts 1px (translateY(-1px)), plus the switch knob slides (section 1).
- **Secondary** (header "Book a systems audit ↗", calculator button): on hover it fills with ink #111A16 and the text turns linen, and the button lifts 1px.
- **Ghost links** ("See how we work →", "Read the story →", "See the full approach →"): on hover the text turns gold #7A5F20. No lift.
- **Plain text links** (footer, body): colour change on hover only, 200ms.

## 5. Cards and tiles

- **"Start here" tiles:** on hover the tile lifts 3px (translateY(-3px)) over 250ms (ease), its background turns white, a 1px #CFC9B9 outline appears around it, and its title turns gold #7A5F20 (200ms). It returns smoothly on leave.
- **Stage cards ("Four stages of revenue"):** on hover the green icon panel on the right darkens from #11352B to #0B261F over 250ms (ease).

## 6. FAQ accordion

- One item open at a time; the first is open on load.
- The question text turns gold #7A5F20 on hover (200ms).
- The open/closed indicator on the right is a **small switch, not a plus sign**: a 22×8px pale-green bar (#A7C0B4) with an 11×8px gold knob. Closed: knob on the left. Open: the knob slides right over 300ms, cubic-bezier(.6, 0, .2, 1). On hover, the bar darkens slightly (#8FA89D).
- Answers open and close immediately (no height animation), so the page doesn't jump around.

## 7. Calculator interactions

- **Live bar:** when any slider moves, the three bar segments and the key columns resize to the new proportions over 450ms, cubic-bezier(.2, .7, .2, 1). All numbers (percentages, Keep Rate, monthly and yearly amounts, slider values) update instantly as the slider moves, not just on release.
- **Instruction cue:** the "⟷" arrow in the instruction pill sways left and right by 3px (translateX(-3px) ↔ translateX(3px)) on a 1.6s ease-in-out loop. It **stops for good** once the visitor first moves any slider or clicks the currency toggle; at that point the text changes to "Updated to your numbers." and the pill's gold border turns grey (#DDD9CD).
- **Knob pulse:** until the visitor first touches a slider, the knob of the first slider ("Enquiries a month") gives off a soft gold ring that pulses outwards on a 1.6s ease-in-out loop: from no ring to an 8px ring that fades to transparent, then back. It stops for good at the same moment as the cue.
- **Knob hover/drag:** the square gold knob grows to 112% on hover or keyboard focus, and to 118% while being dragged (cursor changes from grab to grabbing), over 150ms.
- **Slider row highlight:** hovering or focusing a slider row gives the row a faint gold tint (gold #C9A24E at 7% opacity) over 200ms.
- **Currency toggle:** the selected option switches instantly (ink fill, linen text); all money amounts on the page update at once.

## 8. Reduced motion (required)

When the visitor's device has "reduce motion" turned on (prefers-reduced-motion: reduce):
- Everything is visible immediately: no scroll reveals, no bar growth, no staggered fades.
- No transitions anywhere, the switch knobs jump instead of sliding, and the calculator's arrow sway and knob pulse are off.
- All functionality (calculator, toggle, FAQ, header) still works.

## 9. Don'ts

- No rounded corners appearing on hover, no drop shadows on cards (the only shadow on the page is the small one under the slider knob).
- No scale/zoom on images, no hover effects on the founder photo.
- No loading spinners, typewriter effects, counters that count up, or confetti.
- Don't animate the hero, the footer or the closing section, beyond the button hovers.
