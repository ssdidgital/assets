/**
 * Where every "Book a systems audit" call to action goes.
 *
 * Go High Level: set NEXT_PUBLIC_BOOK_URL to the GHL form's public link (in .env.local or the host's
 * environment settings), then rebuild. The form's own redirect sends people on to the GHL calendar.
 * Leave it empty to use the site's built-in form at /start.
 */
export const BOOK_URL = (process.env.NEXT_PUBLIC_BOOK_URL || '').trim() || '/start';
export const BOOK_IS_EXTERNAL = /^https?:\/\//.test(BOOK_URL);

/**
 * The booking link for one placement. On an external form, adds UTM tags (GHL records these on the
 * contact automatically) and any extra fields, which GHL pre-fills when a URL parameter matches a field's key.
 */
export function bookHref(placement: string, extra: Record<string, string | number> = {}) {
  if (!BOOK_IS_EXTERNAL) return BOOK_URL;
  const u = new URL(BOOK_URL);
  const set = (k: string, v: string | number) => { if (!u.searchParams.has(k)) u.searchParams.set(k, String(v)); };
  set('utm_source', 'website');
  set('utm_medium', 'cta');
  set('utm_content', placement);
  for (const [k, v] of Object.entries(extra)) set(k, v);
  return u.toString();
}
