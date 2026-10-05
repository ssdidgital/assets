import { BookButton, Button } from '@/components/Button';
import { Icon, iconNames } from '@/components/Icon';
import { SitePage } from '@/components/SiteChrome';
import { Em, Eyebrow } from '@/components/Text';

// Step 1 review page: shows the shared chrome and primitives. Replaced by the homepage in step 2.
export default function Home() {
  return (
    <SitePage band="home">
      <section className="s-sec s-sec-first">
        <div className="s-wrap s-center">
          <Eyebrow>Step 1 review</Eyebrow>
          <h2 className="s-h2">Tokens, type and <Em>shared chrome.</Em></h2>
          <p className="ss-body-lg s-lede">Header, closing band, footer and cookie banner are live. Homepage sections follow in step 2.</p>
          <div className="s-ctas"><BookButton /><Button variant="ghost" href="/approach">See how we work →</Button></div>
          <ul aria-label="Icons" style={{ listStyle: 'none', padding: 0, margin: '48px 0 0', display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', maxWidth: 720 }}>
            {iconNames.map((n) => <li key={n} className="s-tile" title={n}><Icon name={n} size={20} label={n} /></li>)}
          </ul>
        </div>
      </section>
    </SitePage>
  );
}
