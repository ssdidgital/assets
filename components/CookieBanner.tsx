'use client';

import { useEffect, useState } from 'react';
import { Button } from './Button';

export const COOKIE_KEY = 'ssd-site-cookies';
export type Consent = 'all' | 'essential';

/** Stored consent, or null if the visitor hasn't chosen. Gate analytics on `readConsent() === 'all'`. */
export function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(COOKIE_KEY);
    return v === 'all' || v === 'essential' ? v : null;
  } catch {
    return null;
  }
}

export function CookieBanner() {
  // Render nothing on the server and until we know there is no stored choice, so a returning visitor never sees it flash.
  const [shown, setShown] = useState(false);
  useEffect(() => { setShown(readConsent() === null); }, []);
  if (!shown) return null;
  const choose = (c: Consent) => {
    try { localStorage.setItem(COOKIE_KEY, c); } catch { /* storage blocked: hide for this visit only */ }
    window.dispatchEvent(new CustomEvent('ssd-consent', { detail: c }));
    setShown(false);
  };
  return (
    <div className="s-cookie" role="region" aria-label="Cookies">
      <div className="s-wrap s-cookie-in">
        <p className="ss-body-sm">We use essential cookies to run this site, and optional ones to understand how it&apos;s used.</p>
        <div className="s-cookie-btns">
          <Button variant="secondary" size="sm" onClick={() => choose('all')}>Accept all</Button>
          <Button variant="secondary" size="sm" onClick={() => choose('essential')}>Essential only</Button>
        </div>
      </div>
    </div>
  );
}
