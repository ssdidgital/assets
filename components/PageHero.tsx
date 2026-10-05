import type { ReactNode } from 'react';
import { BookButton } from './Button';
import { Eyebrow } from './Text';

/** Inner-page hero: centred eyebrow, H1 with a gold phrase, supporting text and the primary CTA. */
export function PageHero({ eyebrow, lede, children }: { eyebrow: string; lede: string; children: ReactNode }) {
  return (
    <section className="s-sec s-sec-first s-phero"><div className="s-wrap s-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="s-h1">{children}</h1>
      <p className="ss-body-lg s-lede">{lede}</p>
      <div className="s-ctas"><BookButton /></div>
    </div></section>
  );
}
