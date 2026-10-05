import { Icon, type IconName } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { SitePage } from '@/components/SiteChrome';
import { Em } from '@/components/Text';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('who', '/who-we-work-with');

// Copy is verbatim from design/design-reference/SitePages.jsx.txt (SiteWho).
const cards: [IconName, string, string][] = [
  ['user', 'Coaches', 'You sell a premium programme, usually after a call. Your content and launches bring people in, and a good number of them say “not yet”. Most of those never hear from you properly again.'],
  ['briefcase', 'Consultants', 'Your work comes through referrals and relationships, so the pipeline rises and falls with how much time you have to sell. Months with lots of client work tend to be followed by quiet ones.'],
  ['layers', 'Service providers', 'You deliver well and clients stay, but enquiries arrive in bursts and follow-up depends on whoever has a spare hour. Quotes go out and nobody chases them.']
];
const signs = ["Leads come in, but you couldn’t say what happened to the ones from three months ago.", 'There’s a list of people who said “not now”, and you know it isn’t being worked.', 'Your calendar fills and empties with your own energy levels.', "You’ve paid for ads, launches or agencies that brought in names and not enough clients.", 'Your best month and your worst month are further apart than they should be.', 'Follow-up happens when someone remembers.', "You can’t step away for two weeks without revenue noticing."];

export default function Who() {
  return (
    <SitePage band="who">
      <PageHero eyebrow="Who we work with" lede="You’ve built something that sells. Clients pay well, and the results are real. But growth still runs through you, and some of the revenue you’ve earned keeps slipping away before it’s collected.">For founder-led businesses that have proven their model and <Em>outgrown how they run it.</Em></PageHero>
      <section className="s-sec"><div className="s-wrap s-center">
        <h2 className="s-h2" style={{ marginTop: 0 }}>The businesses we <Em>know best</Em></h2>
        <div className="s-grid s-grid-3">{cards.map(([i, l, p]) => (
          <div key={l} className="s-pcard">
            <span className="s-tile"><Icon name={i} size={20} /></span>
            <span className="ss-label s-pcard-k">{l}</span>
            <p className="ss-body">{p}</p>
          </div>
        ))}</div>
      </div></section>
      <section className="s-sec"><div className="s-wrap s-center">
        <h2 className="s-h2" style={{ marginTop: 0 }}>You’ll recognise <Em>at least two</Em> of these</h2>
        <ul className="s-list s-list-c ss-body">{signs.map((k) => <li key={k}><Icon name="check" size={20} /><span>{k}</span></li>)}</ul>
      </div></section>
      <section className="s-sec s-sunk"><div className="s-wrap s-center">
        <h2 className="s-h2" style={{ marginTop: 0 }}>The stage we’re <Em>built for</Em></h2>
        <p className="ss-body-lg s-para">The businesses we work best with are established. They have a proven offer, real revenue, and a buyer who usually takes a call before committing, even if some months are much stronger than others. They’re past proof of concept but not yet run by a management team. The founder is often still the bottleneck and the best closer in the business.</p>
      </div></section>
      <section className="s-sec"><div className="s-wrap s-center">
        <h2 className="s-h2" style={{ marginTop: 0 }}>Who we’re <Em>not for</Em></h2>
        <p className="ss-body s-para" style={{ color: 'var(--text-secondary)' }}>We’re probably not the right fit if you’re still finding your offer or your first clients, if you’re after cheap leads or a quick campaign, or if you’d rather not look at your numbers. We’d rather tell you that now than after you’ve paid us.</p>
      </div></section>
    </SitePage>
  );
}
