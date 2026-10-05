import Link from 'next/link';
import { BookButton, Button } from '../Button';
import { FeatureCards } from '../FeatureCards';
import { Faq } from '../home/Faq';
import { Icon, type IconName } from '../Icon';
import { Em, Eyebrow, Ph } from '../Text';
import { SecIndex } from './SecIndex';
import { SystemDiagram } from './SystemDiagram';

// Homepage v2: same copy as components/home/sections.tsx, with varied layouts, mono section indexes,
// a Forest "How we work" band and the system diagram. Styles live in styles/v2.css, scoped to .s-v2.

export function V2Hero() {
  return (
    <section className="s-dots s-hero">
      <div className="s-wrap s-center">
        <Eyebrow>Growth infrastructure for founder-led businesses</Eyebrow>
        <h1 className="s-hero-h">We engineer the systems that win clients, and <Em>win back the buyers you’ve already paid for.</Em></h1>
        <div className="s-lede-split" style={{ maxWidth: 640 }}>
          <p className="s-lede-a">System Switch is a growth infrastructure firm for founder-led coaches, consultants and service providers.</p>
          <p className="s-lede-b">We find where revenue is leaking, install the systems that stop it, and hand you the controls.</p>
        </div>
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
  const segs: [string, number, string, string][] = [
    ['now', 24, 'Bought straight away.', 'The part most businesses measure and optimise.'],
    ['wait', 44, 'Said “not now”.', 'Interested, qualified, and left in the CRM.'],
    ['leak', 32, 'Bought later, elsewhere.', 'Revenue the business paid to create and never collected.']
  ];
  return (
    <section className="s-sec s-sunk" id="diagnosis"><div className="s-wrap">
      <SecIndex n="02">What the CRM won’t tell you</SecIndex>
      <div className="v2-split">
        <h2 className="s-h2 v2-h">Most businesses think they need more leads. <Em><br />They’re leaking the ones they have.</Em></h2>
        <div className="s-read ss-body v2-read">
          <p>Every month, people raise their hand. They book a call, watch the training, ask about price. Then the timing’s wrong, and they say “not now”.<br />The team moves on to this week’s enquiries, and everyone from last month goes quiet in the CRM.</p>
          <p>Many of them still buy, eventually. From whoever followed up.</p>
        </div>
      </div>
      <div className="s-illo">
        <span className="ss-label s-illo-k">Illustration</span>
        <h3 className="ss-h3 s-illo-h"><Em>Twelve months</Em> of enquiries</h3>
        <div className="s-bar-wrap">
          <div className="s-bar" role="img" aria-label="An illustrative bar: a small share bought straight away, the largest share said not now, and a large share bought later from someone else.">
            {segs.map(([c, w]) => <span key={c} className={'s-seg s-seg-' + c} style={{ flexGrow: w }}></span>)}
          </div>
          <div className="s-key">{segs.map(([c, w, l, d]) => (
            <div key={c} className={'s-key-i s-key-' + c} style={{ flexGrow: w }}><strong>{l}</strong><p>{d}</p></div>
          ))}</div>
        </div>
        <p className="ss-caption s-illo-note">Proportions are illustrative. On a first call, we find the real ones for your business.</p>
      </div>
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
          <h2 className="s-h2 v2-h">Four stages of revenue.<br />We start <Em>where the leak is biggest.</Em></h2>
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
      <SecIndex n="05">Who it’s for</SecIndex>
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
      <SecIndex n="06">The founder</SecIndex>
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
      <SecIndex n="07">Before you book</SecIndex>
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
