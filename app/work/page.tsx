import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { rich } from '@/components/Rich';
import { SitePage } from '@/components/SiteChrome';
import { Em } from '@/components/Text';
import { pageMeta } from '@/lib/meta';
import { CASE_STUDIES, published } from '@/lib/work';

// Stays noindex until at least one case study is published.
export const metadata: Metadata = pageMeta('work', '/work', { index: published(CASE_STUDIES).length > 0 });

export default function Work() {
  return (
    <SitePage band="home">
      <PageHero eyebrow="Work" lede="Every engagement starts with a systems audit. These are businesses that went on to build with us, and what the system brought back.">What we built, and <Em>what it collected.</Em></PageHero>
      <section className="s-sec"><div className="s-wrap s-center">
        <div className="s-grid s-grid-2 s-work-grid">
          {CASE_STUDIES.map((c) => (
            <Link key={c.slug} href={'/work/' + c.slug} className="s-pcard s-work-card">
              <span className="ss-label s-pcard-k">{c.sector}{c.draft ? ' · Draft' : ''}</span>
              <span className="s-work-stat">{rich(c.stats[0].value)}</span>
              <h2 className="ss-h3">{rich(c.headline)}</h2>
              <p className="ss-body">{rich(c.client)}</p>
              <span className="s-work-more">Read the case study →</span>
            </Link>
          ))}
          <Link href="/work/sample-audit" className="s-pcard s-work-card s-work-sample">
            <span className="ss-label s-pcard-k">Sample</span>
            <span className="s-work-stat">30 min</span>
            <h2 className="ss-h3">What a systems audit <Em>leaves you with.</Em></h2>
            <p className="ss-body">A redacted example of the write-up that follows the call.</p>
            <span className="s-work-more">See the sample →</span>
          </Link>
        </div>
      </div></section>
    </SitePage>
  );
}
