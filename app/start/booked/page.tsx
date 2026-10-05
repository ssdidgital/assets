import { Icon } from '@/components/Icon';
import { SitePage } from '@/components/SiteChrome';
import { BookedHeading } from '@/components/book/BookedHeading';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('start', '/start/booked', { index: false });

const prep = ["Have a rough idea of last month’s numbers to hand: enquiries, calls booked, clients won.", 'Have your CRM or wherever your leads live open, if you can.', "Join from somewhere quiet. We’ll be asking proper questions."];

export default function Booked() {
  return (
    <SitePage>
      <section className="s-sec s-sec-first"><div className="s-wrap s-center">
        <BookedHeading />
        <div className="s-prep">
          <h2 className="ss-h3" style={{ margin: 0 }}>Before we speak</h2>
          <ul className="s-list ss-body">{prep.map((p) => <li key={p}><Icon name="check" size={20} /><span>{p}</span></li>)}</ul>
          <p className="ss-body" style={{ color: 'var(--text-secondary)' }}>If something comes up, use the link in your invite to move the call. We’d rather move it than have you rush it.</p>
          <p className="ss-body">Speak soon.</p>
        </div>
      </div></section>
    </SitePage>
  );
}
