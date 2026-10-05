import { BookButton, Button } from './Button';
import { Em, Eyebrow } from './Text';

// Homepage hero, shared by / and /v2. On desktop the headline breaks after “sales:” so each clause holds a line;
// the supporting copy is one paragraph whose last sentence (what we do) reads in ink.
export function HomeHero() {
  return (
    <section className="s-dots s-hero">
      <div className="s-wrap s-center">
        <Eyebrow>Sales infrastructure for founder-led businesses</Eyebrow>
        <h1 className="s-hero-h"><span>We build the systems that turn leads into sales:</span> <span>the new ones, and <Em>the ones you’ve already paid for.</Em></span></h1>
        <p className="s-hero-lede">
          Some businesses need a front end that brings in the right people. Most are leaking the ones they already have.{' '}
          <span className="s-hero-act">We find where your revenue is leaking, build what fixes it, and hand you the controls.</span>
        </p>
        <div className="s-ctas">
          <BookButton />
          <Button variant="ghost" href="#how">See how we work →</Button>
        </div>
      </div>
    </section>
  );
}
