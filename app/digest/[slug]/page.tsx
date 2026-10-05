import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { rich } from '@/components/Rich';
import { SitePage } from '@/components/SiteChrome';
import { Eyebrow } from '@/components/Text';
import { ARTICLES, findArticle, type Block } from '@/lib/digest';
import { SITE_URL } from '@/lib/meta';

export const dynamicParams = false;
export function generateStaticParams() { return ARTICLES.map((a) => ({ slug: a.slug })); }

const plain = (s: string) => s.replace(/\{\{|\}\}|\*\*/g, '');

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = findArticle((await params).slug);
  if (!a) return {};
  const title = plain(a.title) + ' — System Switch';
  return {
    title, description: a.dek,
    alternates: { canonical: '/digest/' + a.slug },
    openGraph: { title, description: a.dek, url: SITE_URL + '/digest/' + a.slug, type: 'article', siteName: 'System Switch' },
    ...(a.draft ? { robots: { index: false, follow: true } } : {})
  };
}

function LeakFigure() {
  const segs: [string, number, string][] = [['now', 24, 'Bought straight away.'], ['wait', 44, 'Said “not now”.'], ['leak', 32, 'Bought later, elsewhere.']];
  return (
    <figure>
      <div className="s-illo">
        <span className="ss-label s-illo-k">Illustration</span>
        <div className="s-bar-wrap">
          <div className="s-bar" role="img" aria-label="An illustrative bar: a small share bought straight away, the largest share said not now, and a large share bought later from someone else.">
            {segs.map(([c]) => <span key={c} className={'s-seg s-seg-' + c}></span>)}
          </div>
          <div className="s-key">{segs.map(([c, , l]) => <div key={c} className={'s-key-i s-key-' + c}><strong>{l}</strong></div>)}</div>
        </div>
      </div>
    </figure>
  );
}

function render(b: Block, i: number) {
  if ('h2' in b) return <h2 key={i}>{rich(b.h2)}</h2>;
  if ('quote' in b) return <blockquote key={i}><p>{rich(b.quote)}</p></blockquote>;
  if ('list' in b) return <ul key={i}>{b.list.map((x, j) => <li key={j}><Icon name="check" size={20} /><span>{rich(x)}</span></li>)}</ul>;
  if ('figure' in b) return <LeakFigure key={i} />;
  return <p key={i} className={b.lead ? 's-art-lead' : undefined}>{rich(b.p)}</p>;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const a = findArticle((await params).slug);
  if (!a) notFound();
  return (
    <SitePage band="home">
      <article>
        <section className="s-sec s-sec-first s-phero"><div className="s-wrap s-center">
          <div className="s-art-meta ss-label"><span>Digest</span><span className="ss-switch-mini is-on" aria-hidden="true" /><time>{rich(a.date)}</time><span className="ss-switch-mini is-on" aria-hidden="true" /><span>{a.readMins} min read</span></div>
          <h1 className="s-h1">{rich(a.title)}</h1>
          <p className="ss-body-lg s-lede">{rich(a.dek)}</p>
          <div className="s-byline"><span className="s-quote-ph" aria-hidden="true">Photo</span><span><strong>Kyū</strong><span>Founder, System Switch</span></span></div>
        </div></section>
        <section className="s-sec"><div className="s-wrap">
          <div className="s-art">
            {a.body.map(render)}
            <div className="s-art-end"><Eyebrow>Written by Kyū</Eyebrow><p className="ss-body" style={{ marginTop: 16, color: 'var(--text-secondary)' }}>Kyū spent six years on sales floors before founding System Switch, the infrastructure firm built by a closer.</p></div>
          </div>
        </div></section>
      </article>
    </SitePage>
  );
}
