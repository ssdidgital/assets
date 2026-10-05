import Link from 'next/link';
import { bookHref } from '@/lib/links';
import { Button } from '../Button';
import { Cur } from '../Cur';
import { FeatureCards } from '../FeatureCards';
import { HomeHero } from '../HomeHero';
import { Faq } from '../home/Faq';
import { Icon, type IconName } from '../Icon';
import { Em, Ph } from '../Text';
import { StatStrip } from '../work/StatStrip';
import { Testimonial } from '../work/Testimonial';
import { LeakCalculator } from './LeakCalculator';
import { SecIndex } from './SecIndex';
import { SystemDiagram } from './SystemDiagram';
import { CASE_STUDIES } from '@/lib/work';

// Homepage sections. Copy: “System Switch — Website Copy (Final)”, 5 Oct 2026. Styles in styles/v2.css (scoped to .s-v2).

export function V2Hero() {
  return <HomeHero />;
}

export function V2Router({ n = '01' }: { n?: string }) {
  const items: [IconName, string, string, string][] = [
    ['search', 'How we think ↓', 'The problem we see most often in founder-led businesses, and why more leads rarely fix it.', '#diagnosis'],
    ['workflow', 'How we work →', 'What we build, how an engagement runs, and what you keep at the end.', '/approach'],
    ['message', 'Ready to talk →', 'Tell us about your business and book a time.', bookHref('router')]
  ];
  return (
    <section className="s-sec"><div className="s-wrap s-center">
      <SecIndex n={n}>Start here</SecIndex>
      <h2 className="s-h2" style={{ marginTop: 0 }}>What brings you by?</h2>
      <div className="s-strip">{items.map(([i, t, d, to]) => (
        to.startsWith('http') ? (
          <a key={t} href={to}><span className="s-tile"><Icon name={i} size={16} /></span><h3>{t}</h3><p>{d}</p></a>
        ) : (
          <Link key={t} href={to}><span className="s-tile"><Icon name={i} size={16} /></span><h3>{t}</h3><p>{d}</p></Link>
        )
      ))}</div>
    </div></section>
  );
}

export function V2Diagnosis({ n = '02' }: { n?: string }) {
  return (
    <section className="s-sec s-sunk" id="diagnosis"><div className="s-wrap">
      <SecIndex n={n}>What the CRM won’t tell you</SecIndex>
      <h2 className="s-h2 v2-h v2-h-wide">Most businesses think they need more leads. <Em><br />They’re losing buyers in the Not-Yet Gap.</Em></h2>
      <LeakCalculator />
      <div className="v2-split v2-close">
        <p className="v2-statement">We measure growth by what a business keeps. <span className="v2-statement-sub">We call it your Keep Rate.</span></p>
        <div className="s-read ss-body v2-read">
          <p>So the business spends more to find new strangers, while the people who already know it, trust it and asked about it go cold in a list nobody’s working. The cause is rarely the sales team, and it isn’t a discipline problem. It’s infrastructure: nothing in the business is built to hold a buyer between “interested” and “ready”.</p>
        </div>
      </div>
    </div></section>
  );
}

export function V2Build({ n = '03', diagram = true }: { n?: string; diagram?: boolean }) {
  const rows: [IconName, string, string, string?][] = [
    ['target', 'Acquisition.', 'A front end that brings in the right people: the message, the funnel and the path from first click to booked call.'],
    ['repeat', 'Conversion.', 'Fast, consistent follow-up that reaches this week’s enquiries while they’re still warm and turns them into booked, qualified calls.'],
    ['growth', 'Recovery.', 'The buyers already sitting in your list, the ones who said “not now”, went quiet, or got a quote nobody chased, brought back to the table without new ad spend.', 'Where we usually start'],
    ['users', 'Retention.', 'Clients who stay, buy again and send people your way.']
  ];
  return (
    <section className="s-sec"><div className="s-wrap">
      <SecIndex n={n}>What we build</SecIndex>
      <div className="v2-split">
        <div className="v2-sticky">
          <h2 className="s-h2 v2-h">Four stages of revenue.<br />We start <Em>where the leak is&nbsp;biggest.</Em></h2>
          <p className="ss-body-lg v2-after">Revenue moves through all four. Most businesses only ever invest in the first. The fastest return is usually further down.</p>
        </div>
        <div className="s-rows v2-rows">{rows.map(([i, t, d, tag], k) => (
          <div className="s-row" key={t}>
            <div className="s-row-body">
              <div className="s-row-meta"><span className="ss-label s-stage">Stage {k + 1}</span>{tag ? <span className="ss-label s-tag">{tag}</span> : null}</div>
              <h3 className="ss-h3" style={{ margin: 0 }}>{t}</h3>
              <p className="ss-body" style={{ margin: 0, color: 'var(--text-secondary)' }}>{d}</p>
            </div>
            <div className="s-row-tile" data-theme="forest"><Icon name={i} size={36} /></div>
          </div>
        ))}</div>
      </div>
      {diagram ? <SystemDiagram /> : null}
    </div></section>
  );
}

export function V2How({ n = '04', theme = 'forest' }: { n?: string; theme?: 'forest' | 'linen' }) {
  return (
    <section data-theme={theme} className={theme === 'forest' ? 'v2-forest' : 'v2-linen'}>
      <div className="s-frame">
        <div className="s-sec" id="how"><div className="s-wrap s-center">
          <SecIndex n={n}>How we work</SecIndex>
          <h2 className="s-h2" style={{ marginTop: 0 }}>Diagnose. Install. <Em>Hand over.</Em></h2>
          <div className="s-steps"><FeatureCards items={[
            { label: 'First', icon: 'search', title: 'Diagnose.', text: 'We find where your biggest constraint sits before we build anything.' },
            { label: 'Then', icon: 'layers', title: 'Install.', text: 'We build the system inside your business, in your voice, and run it until it’s producing booked calls.' },
            { label: 'Finally', icon: 'switch', title: 'Hand over.', text: 'We train your team, hand you the controls, and stay on for 30 days.' }
          ]} /></div>
          <div className="s-keep">
            <span className="s-tile"><Icon name="lock" size={20} /></span>
            <div><strong className="ss-h3">You keep what we build.</strong><p className="ss-body">It lives in your accounts, with your data. No lock-in, and no retainer to keep the lights on once it’s yours.</p></div>
          </div>
          <div className="s-ctas"><Button variant="ghost" href="/approach">See the full approach →</Button></div>
        </div></div>
      </div>
    </section>
  );
}

export function V2Fit({ n = '05' }: { n?: string }) {
  const good = ['You sell a premium service or programme, and buyers usually take a call before they commit.', 'You have a list of past leads, enquiries or clients that you’ve paid to build, and you know it isn’t being worked.', 'You’ve had strong months, but revenue still comes in waves, and growth still runs through you.', 'You want a system you keep.'];
  const not = ['You’re still finding your offer or your first clients.', 'You’re looking for cheap leads or a quick campaign.', 'You only want more traffic and a monthly report.', 'You’d rather not look at the numbers.'];
  return (
    <section className="s-sec"><div className="s-wrap s-center">
      <SecIndex n={n}>Who it’s for</SecIndex>
      <h2 className="s-h2" style={{ marginTop: 0, maxWidth: 900 }}>Built for founder-led businesses that have <Em>proven their model.</Em></h2>
      <p className="ss-body-lg s-lede">You’re good at what you do, and your clients get results. What’s missing isn’t talent. It’s a system that holds on to the people who were interested.</p>
      <div className="s-fit">
        <div><h3 className="ss-h3" style={{ margin: 0 }}>A good fit if:</h3><ul className="s-list ss-body">{good.map((g) => <li key={g}><Icon name="check" size={20} /><span>{g}</span></li>)}</ul></div>
        <div><h3 className="ss-h3" style={{ margin: 0, color: 'var(--text-secondary)' }}>Not a fit if:</h3><ul className="s-list s-list-not ss-body">{not.map((g) => <li key={g}><Icon name="close" size={20} /><span>{g}</span></li>)}</ul></div>
      </div>
    </div></section>
  );
}

export function V2Founder({ n = '06' }: { n?: string }) {
  return (
    <section className="s-sec s-sunk"><div className="s-wrap">
      <SecIndex n={n}>The founder</SecIndex>
      <div className="s-founder">
        <div className="s-portrait s-portrait-img"><img src="/kyu.webp" width={1200} height={1500} alt="Kyū, founder of System Switch" loading="lazy" decoding="async" /><span className="s-portrait-tick tl" aria-hidden="true" /><span className="s-portrait-tick br" aria-hidden="true" /><span className="s-portrait-tag" aria-hidden="true"><i />Kyū · Founder</span></div>
        <div className="s-founder-text">
          <h2 className="s-h2" style={{ marginTop: 0 }}>Why <Em>System Switch</Em> exists.</h2>
          <p className="ss-body">Kyū spent six years closing high-ticket deals: <strong><Ph>[[X,XXX+]]</Ph></strong> calls and <strong><Ph>[[<Cur />X]]</Ph></strong> closed. He kept seeing the same buyers slip away after the call. Before that, he’d lost a business of his own, for a reason most founders don’t see coming.</p>
          <Button variant="ghost" href="/about">Read the story →</Button>
        </div>
      </div>
    </div></section>
  );
}

export function V2Faq({ n = '07' }: { n?: string }) {
  return (
    <section className="s-sec"><div className="s-wrap">
      <SecIndex n={n}>Before you book</SecIndex>
      <div className="s-faqwrap">
        <div className="s-faq-head">
          <h2 className="s-h2 s-faq-h" style={{ marginTop: 0 }}>What to expect from <Em>a systems audit.</Em></h2>
        </div>
        <Faq items={[
          ['What happens in a systems audit?', 'A 20-minute call about how revenue moves through your business: where enquiries come from, what happens to the ones who don’t buy straight away, and how follow-up works today. You’ll leave knowing where the biggest constraint sits and what we’d fix first.'],
          ['What do I get afterwards?', 'Your Recovery Brief, within 48 hours. One page: your estimated Keep Rate and what the Not-Yet Gap is worth, which group of past leads to reopen first, the first message to send them, and the one change that would recover the most. It’s yours whether we work together or not, and it’s easy to share with a partner or your team.'],
          ['Does it cost anything?', 'No. The systems audit is free.'],
          ['My old leads are probably dead. Is there any point?', 'Fewer than you’d think. Plenty of people who said “not now” six months ago are ready today, and nobody has asked them. The audit shows you roughly how many, using your own numbers.'],
          ['I’ve worked with agencies before. Why is this different?', 'We don’t start by selling you more leads. We look at what you already have, build the system inside your business, and run it until it’s producing booked calls. Then we hand it to your team, so you’re never locked into paying us to keep it running. If we can’t help, we’ll say so on the call.']
        ]} />
      </div>
    </div></section>
  );
}

// Results: hidden at launch. Not rendered on the homepage until real results replace the placeholders.
export function V2Proof({ n = '05' }: { n?: string }) {
  const c = CASE_STUDIES[0];
  return (
    <section className="s-sec s-sunk"><div className="s-wrap">
      <SecIndex n={n}>Results</SecIndex>
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
