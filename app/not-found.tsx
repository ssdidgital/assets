import type { Metadata } from 'next';
import { BookButton, Button } from '@/components/Button';
import { SitePage } from '@/components/SiteChrome';

export const metadata: Metadata = { title: 'Page not found — System Switch' };

export default function NotFound() {
  return (
    <SitePage>
      <section className="s-sec s-sec-first s-stub"><div className="s-wrap s-center">
        <h1 className="ss-display s-h0" style={{ maxWidth: 760 }}>This page has gone quiet.</h1>
        <p className="ss-body-lg s-lede">Most things do without follow-up.</p>
        <div className="s-ctas"><Button variant="ghost" href="/">Home</Button><BookButton /></div>
      </div></section>
    </SitePage>
  );
}
