import { BookForm } from '@/components/book/BookForm';
import { LeakNote } from '@/components/book/LeakNote';
import { NextPanel } from '@/components/book/NextPanel';
import { Faq } from '@/components/home/Faq';
import { SitePage } from '@/components/SiteChrome';
import { Em } from '@/components/Text';
import { GoToBooking } from '@/components/book/GoToBooking';
import { BOOK_IS_EXTERNAL } from '@/lib/links';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('start', '/start');

export default function Start() {
  if (BOOK_IS_EXTERNAL) return <SitePage><GoToBooking /></SitePage>;
  return (
    <SitePage>
      <section className="s-sec s-sec-first"><div className="s-wrap s-book">
        <div className="s-book-main">
          <span className="ss-label s-eyebrow">Application</span>
          <h1 className="s-h2">Book <Em>a systems audit</Em></h1>
          <div className="s-book-intro ss-body-lg">
            <p>Tell us a little about your business. It takes about three minutes, and it means the call is about you from the first minute.</p>
            <p>If we can help, we’ll show you where we’d start. If we can’t, we’ll tell you, and point you somewhere better if we know of somewhere.</p>
          </div>
          <LeakNote />
          <BookForm />
          <div className="s-start-faq">
            <h2 className="ss-h3">Before you book</h2>
            <Faq items={[
              ['What do I need to have in place?', 'A proven offer, a list of past leads, enquiries or clients, and a rough idea of last month’s numbers. If you use a CRM, have it open on the call.'],
              ['What happens after the audit?', 'Your Recovery Brief arrives within 48 hours. If we can help further, we’ll say what we’d build first and what it would take. If we can’t, we’ll tell you on the call, and point you somewhere better if we know of somewhere.'],
              ['Do you work with businesses outside the UK?', 'Yes. We work with founder-led businesses in the UK, the US, Canada and Australia.']
            ]} />
          </div>
        </div>
        <NextPanel step={0} />
      </div></section>
    </SitePage>
  );
}
