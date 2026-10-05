import Link from 'next/link';
import { NextPanel } from '@/components/book/NextPanel';
import { SitePage } from '@/components/SiteChrome';
import { Em } from '@/components/Text';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('start', '/start/calendar', { index: false });

export default function Calendar() {
  return (
    <SitePage>
      <section className="s-sec s-sec-first"><div className="s-wrap s-book">
        <div className="s-book-main">
          <span className="ss-label s-eyebrow">Application</span>
          <h1 className="s-h2">Choose a time that <Em>suits you</Em></h1>
          <p className="ss-body-lg s-book-intro">Calls last 30 minutes, on Zoom. Pick a slot below and you’ll get a confirmation straight away.</p>
          {/* Placeholder until the real booking widget is embedded; the widget should redirect to /start/booked. */}
          <Link className="s-cal" href="/start/booked">
            <span className="ss-label">Calendar embed</span>
            <span className="ss-caption" style={{ color: 'var(--text-secondary)' }}>Prototype: click to simulate a booking</span>
          </Link>
        </div>
        <NextPanel step={1} />
      </div></section>
    </SitePage>
  );
}
