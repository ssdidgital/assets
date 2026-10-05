import { BookButton } from '@/components/Button';
import { Cur } from '@/components/Cur';
import { SitePage } from '@/components/SiteChrome';
import { Em, Eyebrow, Ph } from '@/components/Text';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('about', '/about');

// Copy: “System Switch — Website Copy (Final)”, 5 Oct 2026.
export default function About() {
  return (
    <SitePage band="home">
      <section className="s-sec s-sec-first s-phero"><div className="s-wrap s-center">
        <Eyebrow>About</Eyebrow>
        <h1 className="s-h1">The sales I watched slip away <Em>weren’t lost on the call.</Em></h1>
        <div className="s-portrait s-portrait-lg"><span className="ss-label">Portrait — 4:5, professional</span></div>
      </div></section>
      <section className="s-sec"><div className="s-wrap s-center">
        <div className="s-story ss-body-lg">
          <p>For six years I’ve closed high-ticket offers for B2B and B2C businesses: agencies and service firms selling to business owners, and education and investment programmes selling to individuals. In that time I’ve taken <strong><Ph>[[X,XXX+]]</Ph></strong> sales calls and closed <strong><Ph>[[<Cur />X]]</Ph></strong> in deals. The industries changed and the pattern didn’t. A buyer books a call and means it. They get a triage call, then a sales call, maybe one follow-up after that. The timing’s wrong, so they say “not now”. By then, new prospects are coming through the door, and they get dropped. Months later they buy, often from whoever followed up.</p>
          <p>I’ve watched five-figure buyers disappear into that gap far too many times. And I’ve seen what happens when someone goes back: one buyer went quiet for the best part of a year while he got his money in order. When someone finally reopened the conversation, he committed within weeks. He was never a bad lead. He just needed someone to still be there.</p>
          <p>I understood why that gap mattered because I’d already lived the other side of it. With a business partner, I helped grow a London youth-services company to £800,000 a year (nearly $1 million) on government contracts. On paper it worked. Underneath, it ran on talent and long nights. Every problem got a clever fix, and none of them got a system. When it fell, we lost the lot. That taught me what I now build every engagement around: a business that depends on one person’s brilliance has a ceiling, and sooner or later a floor.</p>
          <p>System Switch is what came out of both of those lessons. We build the infrastructure that holds a buyer between “interested” and “ready”, and puts them back on your sales team’s calendar. We build it inside your business, around your offer and your voice, and run it until it’s producing booked calls. Then we hand you the controls, and you keep what we build.</p>
          <p>Most agencies start with traffic. We start with the money a business has already earned and never collected, because that’s what you see from the closer’s seat. And because the firm was built from that seat, we don’t hand over a system and leave the sales side to chance. Everything we build is shaped by what actually happens on a call: what a buyer needs to hear before they’re ready, what your sales team needs going in, and where deals tend to stall.</p>
          <p className="s-story-end">If that sounds like your business, start with a systems audit.</p>
          <div><BookButton /></div>
        </div>
      </div></section>
    </SitePage>
  );
}
