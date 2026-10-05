import Link from 'next/link';
import { BookButton, Button } from '../Button';
import { FeatureCards } from '../FeatureCards';
import { Faq } from '../home/Faq';
import { Icon, type IconName } from '../Icon';
import { Em, Eyebrow, Ph } from '../Text';
import { SecIndex } from './SecIndex';
import { LeakCalculator } from './LeakCalculator';
import { SystemDiagram } from './SystemDiagram';
import { StatStrip } from '../work/StatStrip';
import { Testimonial } from '../work/Testimonial';
import { CASE_STUDIES } from '@/lib/work';

// Homepage v2: same copy as components/home/sections.tsx, with varied layouts, mono section indexes,
// a Forest "How we work" band and the system diagram. Styles live in styles/v2.css, scoped to .s-v2.

export function V2Hero() {
  return (
    <section className="s-dots s-hero">
      <div className="s-wrap s-center">
        <h1 className="s-hero-h"><span>We engineer the systems that win clients,</span> <span>and <Em>win back the buyers you’ve already paid for.</Em></span></h1>
        <p className="s-hero-pos">System Switch is a growth infrastructure firm for founder-led coaches, consultants and service providers.</p>
        <ol className="s-hero-steps">
          <li><span className="s-qn">01</span>We find where revenue is leaking</li>
          <li><span className="s-qn">02</span>We install the systems that stop it</li>
          <li><span className="s-qn">03</span>We hand you the controls</li>
        </ol>
        <div className="s-ctas">
          <BookButton />
          <Button variant="ghost" href="#how">See how we work →</Button>
        </div>
      </div>
    </section>
  );
}

export function V2Router() {
  const items: [IconName, string, string, string][] = [
    ['search', 'How we think ↓', 'The problem we see most often in founder-led businesses, and why more leads rarely fix it.', '#diagnosis'],
    ['workflow', 'How we work →', 'What we build, how an engagement runs, and what you keep at the end.', '/approach'],
    ['message', 'Ready to talk →', 'Tell us about your business and book a time.', '/start']
  ];
  return (
    <section className="s-sec"><div className="s-wrap s-center">
      <SecIndex n="01">Start here</SecIndex>
      <h2 className="s-h2" style={{ marginTop: 0 }}>What brings you by?</h2>
      <div className="s-strip">{items.map(([i, t, d, to]) => (
        <Link key={t} href={to}>
          <span className="s-tile"><Icon name={i} size={16} /></span>
          <h3>{t}</h3>
          <p>{d}</p>
        </Link>
      ))}</div>
    </div></section>
  );
}

export function V2Diagnosis() {
  return (
    <section className="s-sec s-sunk" id="diagnosis"><div className="s-wrap">
      <SecIndex n="02">What the CRM won’t tell you</SecIndex>
      <h2 className="s-h2 v2-h v2-h-wide">Most businesses think they need more leads. <Em><br />They’re leaking the ones they have.</Em></h2>
      <div className="v2-split v2-offset">
        <div aria-hidden="true" />
        <div className="s-read ss-body v2-read">
          <p>Every month, people raise their hand. They book a call, watch the training, ask about price. Then the timing’s wrong, and they say “not now”.<br />The team moves on to this week’s enquiries, and everyone from last month goes quiet in the CRM.</p>
          <p>Many of them still buy, eventually. From whoever followed up.</p>
        </div>
      </div>
      <LeakCalculator />
      <div className="v2-split v2-close">
        <p className="v2-statement">We measure growth by what a business keeps.</p>
        <div className="s-read ss-body v2-read">
          <p>So the business spends more to find new strangers, while the people who already know it, trust it and asked about it sit untouched. The cause is rarely the sales team. It’s infrastructure: nothing in the business is built to hold a buyer between “interested” and “ready”.</p>
        </div>
      </div>
    </div></section>
  );
}

export function V2Build() {
  const rows: [IconName, string, string, string?][] = [
    ['target', 'Acquisition.', 'A front end that brings in the right people: the message, the funnel and the path from first click to booked call.'],
    ['repeat', 'Conversion.', "Fast, consistent follow-up that turns this week’s enquiries into booked, qualified calls."],
    ['growth', 'Recovery.', 'The buyers already sitting in your list, from last month or last year, brought back to the table without new ad spend.', 'Where we usually start'],
    ['users', 'Retention.', 'Clients who stay, buy again and send people your way.']
  ];
  return (
    <section className="s-sec"><div className="s-wrap">
      <SecIndex n="03">What we build</SecIndex>
      <div className="v2-split">
        <div className="v2-sticky">
          <h2 className="s-h2 v2-h">Four stages of revenue.<br />We start <Em>where the leak is&nbsp;biggest.</Em></h2>
          <p className="ss-body-lg v2-after">Revenue moves through all four. Most businesses only ever invest in the first. The fastest return is usually further down.</p>
        </div>
        <div className="s-rows v2-rows">{rows.map(([i, t, d, tag], n) => (
          <div className="s-row" key={t}>
            <div className="s-row-body">
              <div className="s-row-meta"><span className="ss-label s-stage">Stage {n + 1}</span>{tag ? <span className="ss-label s-tag">{tag}</span> : null}</div>
              <h3 className="ss-h3" style={{ margin: 0 }}>{t}</h3>
              <p className="ss-body" style={{ margin: 0, color: 'var(--text-secondary)' }}>{d}</p>
            </div>
            <div className="s-row-tile" data-theme="forest"><Icon name={i} size={36} /></div>
          </div>
        ))}</div>
      </div>
      <SystemDiagram />
    </div></section>
  );
}

export function V2How() {
  return (
    <section data-theme="forest" className="v2-forest">
      <div className="s-frame">
        <div className="s-sec" id="how"><div className="s-wrap s-center">
          <SecIndex n="04">How we work</SecIndex>
          <h2 className="s-h2" style={{ marginTop: 0 }}>Diagnose. Install. <Em>Hand over.</Em></h2>
          <div className="s-steps"><FeatureCards items={[
            { label: 'First', icon: 'search', title: 'Diagnose.', text: "We map how revenue moves through your business today, from first enquiry to repeat client. Before we build anything, you’ll know where the biggest constraint sits and what we’d fix first." },
            { label: 'Then', icon: 'layers', title: 'Install.', text: 'We engineer the system inside your business, around your offer and in your voice. Your team keeps working while we build.' },
            { label: 'Finally', icon: 'switch', title: 'Hand over.', text: 'We train your people, document every part, and hand you the controls. We stay on for 30 days after handover, until your team is running it without us.' }
          ]} /></div>
          <div className="s-keep">
            <span className="s-tile"><Icon name="lock" size={20} /></span>
            <div><strong className="ss-h3">You keep what we build.</strong><p className="ss-body">It lives in your accounts, with your data.</p></div>
          </div>
        </div></div>
      </div>
    </section>
  );
}

export function V2Fit() {
  const good = ['You sell a premium service or programme, and buyers usually take a call before they commit.', "You have a list of past leads, enquiries or clients that you’ve paid to build.", 'Revenue is consistent, but growth still runs through you.', 'You want a system you keep.'];
  const not = ["You’re still finding your offer or your first clients.", "You’re looking for cheap leads or a quick campaign.", "You’d rather not look at the numbers."];
  return (
    <section className="s-sec"><div className="s-wrap s-center">
      <SecIndex n="06">Who it’s for</SecIndex>
      <h2 className="s-h2" style={{ marginTop: 0, maxWidth: 900 }}>Built for founder-led businesses that have <Em>proven their model.</Em></h2>
      <div className="s-fit">
        <div><h3 className="ss-h3" style={{ margin: 0 }}>A good fit if:</h3><ul className="s-list ss-body">{good.map((g) => <li key={g}><Icon name="check" size={20} /><span>{g}</span></li>)}</ul></div>
        <div><h3 className="ss-h3" style={{ margin: 0, color: 'var(--text-secondary)' }}>Not a fit if:</h3><ul className="s-list s-list-not ss-body">{not.map((g) => <li key={g}><Icon name="close" size={20} /><span>{g}</span></li>)}</ul></div>
      </div>
    </div></section>
  );
}

export function V2Founder() {
  return (
    <section className="s-sec s-sunk"><div className="s-wrap">
      <SecIndex n="07">The founder</SecIndex>
      <div className="s-founder">
        <div className="s-portrait"><span className="ss-label">Portrait — 4:5, professional</span></div>
        <div className="s-founder-text">
          <h2 className="s-h2" style={{ marginTop: 0 }}>Built by <Em>a closer.</Em></h2>
          <p className="ss-body">Kyū spent six years on sales floors, taking <strong><Ph>[[X,XXX+]]</Ph></strong> calls and closing <strong><Ph>[[$X]]</Ph></strong> in high-ticket deals for B2B and B2C businesses, and watching five-figure buyers slip through the follow-up gap.</p>
          <p className="ss-body">Before that, he helped grow a youth-services company to £800,000 a year (nearly $1 million) on government contracts, then lost it, because it ran on talent instead of systems. System Switch is the infrastructure both of those businesses needed.</p>
          <Button variant="ghost" href="/about">Read the story →</Button>
        </div>
      </div>
    </div></section>
  );
}

export function V2Faq() {
  return (
    <section className="s-sec"><div className="s-wrap">
      <SecIndex n="08">Before you book</SecIndex>
      <div className="s-faqwrap">
        <div className="s-faq-head">
          <h2 className="s-h2 s-faq-h" style={{ marginTop: 0 }}>What to expect from <Em>a systems audit.</Em></h2>
        </div>
        <Faq items={[
          ['What happens in a systems audit?', "A 30-minute call about how revenue moves through your business: where enquiries come from, what happens to the ones who don’t buy straight away, and how follow-up works today. You’ll leave knowing where the biggest constraint sits and what we’d fix first."],
          ['Does it cost anything?', 'No. The systems audit is free.'],
          ['What do I need to have in place?', "A proven offer, a list of past leads, enquiries or clients, and a rough idea of last month’s numbers. If you use a CRM, have it open on the call."],
          ['What happens after the audit?', "If we can help, we’ll come back with what we’d build first and what it would take. If we can’t, we’ll tell you on the call, and point you somewhere better if we know of somewhere."],
          ['Do you work with businesses outside the UK?', 'Yes. We work with founder-led businesses in the UK, the US, Canada and Australia.']
        ]} />
      </div>
    </div></section>
  );
}

// Proof slot: the best numbers and a named quote, from lib/work.ts. Placeholders until real results are in.
export function V2Proof() {
  const c = CASE_STUDIES[0];
  return (
    <section className="s-sec s-sunk"><div className="s-wrap">
      <SecIndex n="05">Results</SecIndex>
      <div className="v2-split">
        <div className="v2-proof-head">
          <h2 className="s-h2 v2-h">What the system <Em>brought back.</Em></h2>
          <div className="v2-proof-links">
            <Button variant="ghost" href="/work">See the work →</Button>
            <Button variant="ghost" href="/work/sample-audit">See a sample audit →</Button>
          </div>
        </div>
        {c.quote ? <Testimonial q={c.quote} /> : null}
      </div>
      <StatStrip stats={c.stats} />
    </div></section>
  );
}
