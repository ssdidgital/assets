import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { SitePage } from '@/components/SiteChrome';
import { Em, Eyebrow } from '@/components/Text';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('approach', '/approach');

// Copy is verbatim from design/design-reference/SitePages.jsx.txt (SiteApproach).
const principles: [string, string, boolean?][] = [
  ['Fix what you have before you buy more.', "The cheapest revenue in any business is the revenue it has already earned and not yet collected. Before we add anything to the front of your business, we look at what’s slipping out of the back. Sometimes the answer is more traffic. Usually it’s somewhere closer to home: the people who said “not yet” and never heard from you again."],
  ['Find the one constraint.', 'A business rarely has five problems. It has one constraint that makes the other four look like problems. We find that one first and work on it until it moves.'],
  ['Build around how you already sell.', "Your offer, your voice, the way your best clients bought from you. We build on what’s already working in your business instead of replacing it with a template from someone else’s."],
  ['People stay in charge.', 'Automation handles the follow-up nobody has time for. Every conversation that matters still reaches a person, nobody gets stuck talking to a bot, and you can see and stop anything the system does.'],
  ['Measure what pays.', 'We report on Keep Rate, booked calls, closed revenue and cost per client. Activity metrics such as opens, clicks and impressions are kept for diagnosis and never presented as results.'],
  ['You keep what we build.', 'The system lives in your accounts, with your data, documented so your team can run it. Handover is planned from the first day.', true]
];
const steps = [
  ['Diagnose.', "We map how revenue moves through your business today, from first enquiry to repeat client. We look at your numbers, your pipeline and how your sales conversations actually go. You come away knowing where the biggest constraint sits and what we’d fix first. If we’re not the right people to fix it, we’ll tell you."],
  ['Install.', 'We engineer the system inside your business: the messaging, the follow-up, the pipeline and the reporting, built around your offer and your voice. You see it running before it goes live, and we run it alongside your team until it’s producing booked calls.'],
  ['Hand over.', 'Once it’s working, we train your people, document every part, and hand you the controls. We stay on for 30 days after handover, until your team is running it without us.']
];
const keep = ['A working system in your own accounts, carrying your data.', 'Documentation your team can follow without us.', 'People trained to run it, improve it and spot when it needs attention.', 'Reporting that shows what the system is producing in revenue.'];

export default function Approach() {
  return (
    <SitePage band="approach">
      <PageHero eyebrow="Approach" lede="Most growth advice ends with a slide deck and a list of things for your team to do. Ours ends with a working system inside your business, a team that knows how to run it, and the controls in your hands.">Everything we recommend, <Em>we install.</Em></PageHero>
      <section className="s-sec"><div className="s-wrap s-center">
        <Eyebrow>How we think</Eyebrow>
        <h2 className="s-h2">How we think <Em>about growth</Em></h2>
        <div className="s-grid s-grid-2">{principles.map(([t, p, lock]) => (
          <div key={t} className="s-pcard">
            {lock ? <span className="s-tile"><Icon name="lock" size={20} /></span> : null}
            <h3 className="ss-h3">{t}</h3>
            <p className="ss-body">{p}</p>
          </div>
        ))}</div>
      </div></section>
      <section className="s-sec"><div className="s-wrap s-center">
        <h2 className="s-h2" style={{ marginTop: 0 }}>Diagnose. Install. <Em>Hand over.</Em></h2>
        <ol className="s-steplist">{steps.map(([t, p], i) => (
          <li key={t}><span className="s-stepn">{String(i + 1).padStart(2, '0')}</span><div><h3 className="ss-h3">{t}</h3><p className="ss-body">{p}</p></div></li>
        ))}</ol>
      </div></section>
      <section className="s-sec"><div className="s-wrap s-center">
        <div className="s-panel">
          <h2 className="s-h2" style={{ marginTop: 0 }}>What’s <Em>yours</Em> at the end</h2>
          <ul className="s-list ss-body">{keep.map((k) => <li key={k}><Icon name="check" size={20} /><span>{k}</span></li>)}</ul>
        </div>
      </div></section>
    </SitePage>
  );
}
