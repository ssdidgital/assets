import Link from 'next/link';
import type { ReactNode } from 'react';
import { BookButton, Button } from './Button';
import { Em } from './Text';

export const NAV: [href: string, label: string][] = [
  ['/approach', 'Approach'],
  ['/who-we-work-with', 'Who we work with'],
  ['/about', 'About']
];

export function SiteHeader() {
  return (
    <header className="s-head">
      <div className="s-wrap s-head-in">
        <Link href="/" className="s-logo" aria-label="System Switch Digital home">
          <img className="s-full" src="/logo-wordmark-gold.svg" alt="System Switch" />
          <img className="s-mark" src="/mark-gold.svg" alt="System Switch" />
        </Link>
        <Button variant="secondary" size="sm" className="s-head-cta" href="/start">Book a systems audit <span aria-hidden="true">↗</span></Button>
      </div>
    </header>
  );
}

export type BandKey = 'home' | 'approach' | 'who';

const BANDS: Record<BandKey, [ReactNode, ReactNode]> = {
  home: [<>Every business has <Em>one constraint</Em> holding the rest back.</>, <>Tell us about your business. If we can help, we’ll show you where to start.<br />If we can’t, we’ll say so.</>],
  approach: [<>Start with <Em>a systems audit.</Em></>, "Tell us where your business is and where you want it to go. We’ll tell you honestly whether we can help, and where we’d start."],
  who: [<>Sound like <Em>your business?</Em></>, "Tell us where things stand. If we’re a fit, we’ll show you where we’d start."]
};

export function ClosingBand({ page = 'home' }: { page?: BandKey }) {
  const [hd, line] = BANDS[page];
  return (
    <section data-theme="forest" className="s-band">
      <div className="s-box s-center" data-theme="linen">
        <h2 className="s-h2" style={{ maxWidth: 820 }}>{hd}</h2>
        <p className="ss-body s-lede">{line}</p>
        <div className="s-ctas"><BookButton /></div>
      </div>
    </section>
  );
}

type FootLink = [kind: 'go' | 'a', href: string, label: string];

export function SiteFooter() {
  const cols: [string, FootLink[]][] = [
    ['Company', [['go', '/approach', 'Approach'], ['go', '/about', 'About'], ['go', '/work', 'Work'], ['go', '/digest', 'Digest']]],
    ['Legal', [['go', '/company', 'System Switch'], ['go', '/privacy', 'Privacy policy'], ['go', '/terms', 'Terms and conditions']]]
  ];
  return (
    <footer data-theme="forest" className="s-foot">
      <div className="s-foot-frame">
        <div className="s-foot-top">
          <div className="s-foot-brand">
            <img src="/logo-wordmark-white.svg" alt="System Switch" />
            <p className="ss-body-sm">Growth infrastructure for founder-led businesses.</p>
          </div>
          <div className="s-foot-cols">{cols.map(([h, items]) => (
            <nav key={h} aria-label={h}>
              <span className="s-foot-h">{h}</span>
              <ul>{items.map(([t, to, l]) => <li key={l}>{t === 'go' ? <Link href={to}>{l}</Link> : <a href={to}>{l}</a>}</li>)}</ul>
            </nav>
          ))}</div>
        </div>
        <div className="s-foot-legal">
          <span>© 2026 System Switch Digital</span>
          <nav aria-label="Social"><a href="#">LinkedIn</a></nav>
        </div>
      </div>
    </footer>
  );
}

/** Page body inside the hairline frame, followed by that page's closing band (omit `band` for none). */
export function SitePage({ band, children }: { band?: BandKey; children: ReactNode }) {
  return (
    <>
      <main id="main" className="s-frame">{children}</main>
      {band ? <ClosingBand page={band} /> : null}
    </>
  );
}
