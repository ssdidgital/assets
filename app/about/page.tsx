import { SitePage } from '@/components/SiteChrome';
import { Em, Eyebrow, Ph } from '@/components/Text';

// Copy is verbatim from design/design-reference/SitePages.jsx.txt (SiteAbout). Closing band uses the homepage copy.
export default function About() {
  return (
    <SitePage band="home">
      <section className="s-sec s-sec-first s-phero"><div className="s-wrap s-center">
        <Eyebrow>About</Eyebrow>
        <h1 className="s-h1">Built from <Em>the closer&apos;s seat.</Em></h1>
        <div className="s-portrait s-portrait-lg"><span className="ss-label">Portrait — 4:5, professional</span></div>
      </div></section>
      <section className="s-sec"><div className="s-wrap s-center">
        <div className="s-story ss-body-lg">
          <p className="s-story-lead">I&apos;ve watched the same leak from three different seats.</p>
          <div><span className="ss-label s-story-k">01 · The founder</span>
            <p><strong>The first was my own business.</strong> With a business partner, I helped grow a London youth-services company to £800,000 a year (nearly $1 million), delivering outreach and trauma-informed support for young people under government contracts with local authorities and the mayor&apos;s office. On paper it worked. Underneath, it ran on talent and long nights. Every problem got a clever fix, and none of them got a system. When it fell, it fell completely, and I lost it all. That taught me something I now build every engagement around: a business that depends on one person&apos;s brilliance has a ceiling, and sooner or later a floor.</p></div>
          <div><span className="ss-label s-story-k">02 · The sales floor</span>
            <p><strong>The second seat was the sales floor.</strong> For six years I&apos;ve closed high-ticket offers for B2B and B2C businesses: agencies and service firms selling to business owners, and education and investment programmes selling to individuals. In that time I&apos;ve taken <strong><Ph>[[X,XXX+]]</Ph></strong> sales calls and closed <strong><Ph>[[$X]]</Ph></strong> in deals. The industries changed and the pattern didn&apos;t. A buyer books a call, means it, and says the timing&apos;s wrong. They go back into the CRM, and nobody calls them again. Months later they buy, often from whoever followed up. I&apos;ve watched five-figure buyers disappear into that gap far too many times, and I&apos;ve seen what happens when someone finally goes back for them.</p></div>
          <div><span className="ss-label s-story-k">03 · The builder</span>
            <p><strong>The third seat is this one.</strong> System Switch builds what both of those businesses were missing: the infrastructure that holds a buyer between &quot;interested&quot; and &quot;ready&quot;, and puts them back in front of the people who can help them. We build it inside your business, around your offer and your voice. Then we hand you the controls, and you keep what we build.</p></div>
          <p>That&apos;s why I describe the firm as built by a closer rather than a funnel builder. Most growth advice starts with traffic. Mine starts with the money a business has already earned and never collected, because from the closer&apos;s seat that&apos;s where it is easiest to see.</p>
          <p className="s-story-music">Before any of this, I produced music for labels and artists. Arranging a track taught me early that the things people experience as effortless usually rest on a structure nobody sees. I still think about businesses that way.</p>
        </div>
      </div></section>
    </SitePage>
  );
}
