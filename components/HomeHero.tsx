import { BookButton, Button } from './Button';
import { Em, Eyebrow } from './Text';

// Homepage hero. On desktop the headline breaks after “sales:” so each clause holds a line.
export function HomeHero() {
  return (
    <section className="s-dots s-hero">
      <div className="s-wrap s-center">
        <Eyebrow>Sales infrastructure for founder-led businesses</Eyebrow>
        <h1 className="s-hero-h"><span>We build the systems that turn leads into sales:</span> <span>the new ones, and <Em>the ones you’ve already paid for.</Em></span></h1>
        <p className="s-hero-lede">Most agencies sell you more leads. We start by finding out whether you need them, then fix whatever’s actually costing you sales. You keep everything we build.</p>
        <p className="s-hero-offer"><span className="ss-switch-mini is-on" aria-hidden="true" />Start with a free systems audit, and get your Recovery Brief within 48 hours.</p>
        <div className="s-ctas">
          <BookButton placement="hero" />
          <Button variant="ghost" href="#how">See how we work →</Button>
        </div>
      </div>
    </section>
  );
}
