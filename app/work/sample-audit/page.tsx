import type { Metadata } from 'next';
import { BookButton } from '@/components/Button';
import { SitePage } from '@/components/SiteChrome';
import { Em, Eyebrow, Ph } from '@/components/Text';
import { SecIndex } from '@/components/v2/SecIndex';
import { Redacted } from '@/components/work/Redacted';
import { pageMeta } from '@/lib/meta';

// Structure of the write-up that follows a systems audit, with the client’s details redacted.
// Draft until a real (anonymised) audit replaces the redaction bars.
export const metadata: Metadata = pageMeta('sample', '/work/sample-audit', { index: false });

const stages: [string, string, boolean][] = [
  ['Acquisition', 'The message, the funnel and the path from first click to booked call.', false],
  ['Conversion', 'Follow-up that turns this week’s enquiries into booked, qualified calls.', false],
  ['Recovery', 'The buyers already sitting in the list, from last month or last year.', true],
  ['Retention', 'Clients who stay, buy again and send people your way.', false]
];

export default function SampleAudit() {
  return (
    <SitePage band="approach">
      <section className="s-sec s-sec-first s-phero"><div className="s-wrap s-center">
        <Eyebrow>Sample · Redacted</Eyebrow>
        <h1 className="s-h1">What a systems audit <Em>leaves you with.</Em></h1>
        <p className="ss-body-lg s-lede">After the call, you get a short write-up: how revenue moves through your business today, where the biggest constraint sits, and what we’d fix first.</p>
      </div></section>
      <section className="s-sec"><div className="s-wrap">
        <article className="s-doc">
          <header className="s-doc-head">
            <dl>
              <div><dt className="ss-label">Prepared for</dt><dd><Redacted lines={1} seed={2} /></dd></div>
              <div><dt className="ss-label">Business</dt><dd><Ph>[[Coach · premium programme]]</Ph></dd></div>
              <div><dt className="ss-label">Call</dt><dd><Ph>[[Date]]</Ph> · 30 minutes</dd></div>
            </dl>
          </header>
          <SecIndex n="01">How revenue moves today</SecIndex>
          <ol className="s-doc-stages">{stages.map(([t, d, hit], i) => (
            <li key={t} className={hit ? 'is-hit' : undefined}>
              <span className="s-stepn">{String(i + 1).padStart(2, '0')}</span>
              <div><h3 className="ss-h3">{t}{hit ? <span className="ss-label s-tag">Biggest constraint</span> : null}</h3><p className="ss-body">{d}</p><Redacted lines={2} seed={i + 3} /></div>
            </li>
          ))}</ol>
          <SecIndex n="02">The biggest constraint</SecIndex>
          <div className="s-doc-body"><Redacted lines={4} seed={9} /><Redacted lines={3} seed={11} /></div>
          <SecIndex n="03">What we’d build first</SecIndex>
          <div className="s-doc-body"><Redacted lines={3} seed={13} /><Redacted lines={2} seed={17} /></div>
          <SecIndex n="04">What it would take</SecIndex>
          <div className="s-doc-body"><Redacted lines={3} seed={19} /></div>
        </article>
        <div className="s-ctas"><BookButton /></div>
      </div></section>
    </SitePage>
  );
}
