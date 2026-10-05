import type { Metadata } from 'next';
import Link from 'next/link';
import { rich } from '@/components/Rich';
import { SitePage } from '@/components/SiteChrome';
import { Em, Eyebrow } from '@/components/Text';
import { ARTICLES, publishedArticles } from '@/lib/insights';
import { pageMeta } from '@/lib/meta';

export const metadata: Metadata = pageMeta('insights', '/insights', { index: publishedArticles().length > 0 });

export default function Insights() {
  return (
    <SitePage band="home">
      <section className="s-sec s-sec-first s-phero"><div className="s-wrap s-center">
        <Eyebrow>Insights</Eyebrow>
        <h1 className="s-h1">Notes from <Em>the closer’s seat.</Em></h1>
        <p className="ss-body-lg s-lede">On follow-up, recovery and the infrastructure that holds a buyer between “interested” and “ready”.</p>
      </div></section>
      <section className="s-sec"><div className="s-wrap s-center">
        <ul className="s-posts">{ARTICLES.map((a) => (
          <li key={a.slug}><Link href={'/insights/' + a.slug}>
            <time className="ss-label">{rich(a.date)}</time>
            <div><h2>{rich(a.title)}{a.draft ? <span className="ss-label s-tag" style={{ marginLeft: 12, verticalAlign: 'middle' }}>Draft</span> : null}</h2><p>{rich(a.dek)}</p></div>
            <span className="s-arrow" aria-hidden="true">→</span>
          </Link></li>
        ))}</ul>
      </div></section>
    </SitePage>
  );
}
