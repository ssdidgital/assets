# Email templates

Table-based HTML in the brand system (Linen card, Forest footer, square corners, one primary button with the switch). They inline every style, so they paste straight into GoHighLevel (or another sender) as custom HTML.

| File | When it sends |
|---|---|
| `confirmation.html` | Straight after a booking |
| `reminder.html` | 24 hours before the call |
| `abandoned.html` | When an application is started and not finished (see `saveDraft()` in `lib/booking.ts`) |

- **Merge tags** use GoHighLevel's `{{contact.first_name}}` / `{{appointment.*}}` style. Swap them for your sender's tags if you use something else.
- **Logo** loads from `https://systemswitch.digital/email/logo-gold.png` (`public/email/`). Email clients don't render SVG, so it's a PNG.
- **Fonts:** Outfit and DM Mono load from Google Fonts where the client allows it and fall back to Helvetica/Arial and Menlo.
- **Abandoned-form email:** only send it to people who gave their email and whose consent covers it under your privacy policy (UK GDPR / PECR).
- New copy in these templates (subject lines, the reminder and abandoned-form lines) is a draft for you to approve. Everything else reuses site copy.
