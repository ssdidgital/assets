import { BookForm } from '@/components/book/BookForm';
import { LeakNote } from '@/components/book/LeakNote';
import { NextPanel } from '@/components/book/NextPanel';
import { SitePage } from '@/components/SiteChrome';
import { Em } from '@/components/Text';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('start', '/start');

export default function Start() {
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
        </div>
        <NextPanel step={0} />
      </div></section>
    </SitePage>
  );
}
