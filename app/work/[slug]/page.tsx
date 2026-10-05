import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookButton } from '@/components/Button';
import { rich } from '@/components/Rich';
import { SitePage } from '@/components/SiteChrome';
import { Eyebrow } from '@/components/Text';
import { SecIndex } from '@/components/v2/SecIndex';
import { StatStrip } from '@/components/work/StatStrip';
import { Testimonial } from '@/components/work/Testimonial';
import { Icon } from '@/components/Icon';
import { CASE_STUDIES, findCase } from '@/lib/work';
import { SITE_URL } from '@/lib/meta';

export const dynamicParams = false;
export function generateStaticParams() { return CASE_STUDIES.map((c) => ({ slug: c.slug })); }

const plain = (s: string) => s.replace(/\{\{|\}\}|\*\*/g, '');

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = findCase((await params).slug);
  if (!c) return {};
  const title = plain(c.headline) + ' — System Switch';
  return {
    title, description: plain(c.summary),
    alternates: { canonical: '/work/' + c.slug },
    openGraph: { title, description: plain(c.summary), url: SITE_URL + '/work/' + c.slug, type: 'article', siteName: 'System Switch' },
    ...(c.draft ? { robots: { index: false, follow: true } } : {})
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const c = findCase((await params).slug);
  if (!c) notFound();
  return (
    <SitePage band="home">
      <section className="s-sec s-sec-first s-phero"><div className="s-wrap s-center">
        <Eyebrow>{'Case study · ' + c.sector}</Eyebrow>
        <h1 className="s-h1">{rich(c.headline)}</h1>
        <p className="ss-body-lg s-lede">{rich(c.summary)}</p>
        <StatStrip stats={c.stats} />
      </div></section>
      <section className="s-sec s-sunk"><div className="s-wrap">
        <SecIndex n="01">What was leaking</SecIndex>
        <div className="v2-split">
          <h2 className="s-h2 v2-h">{rich(c.client)}</h2>
          <div className="s-read ss-body v2-read">{c.leaking.map((p, i) => <p key={i}>{rich(p)}</p>)}</div>
        </div>
      </div></section>
      <section className="s-sec"><div className="s-wrap">
        <SecIndex n="02">What we built</SecIndex>
        <div className="v2-split">
          <div className="s-case-stages">{c.stages.map((s) => <span key={s} className="ss-label s-tag">{s}</span>)}</div>
          <ul className="s-list ss-body s-case-list">{c.built.map((b, i) => <li key={i}><Icon name="check" size={20} /><span>{rich(b)}</span></li>)}</ul>
        </div>
      </div></section>
      <section className="s-sec s-sunk"><div className="s-wrap">
        <SecIndex n="03">What changed</SecIndex>
        <div className="v2-split">
          <div className="s-read ss-body-lg v2-read">{c.changed.map((p, i) => <p key={i}>{rich(p)}</p>)}</div>
          {c.quote ? <Testimonial q={c.quote} /> : null}
        </div>
        <div className="s-ctas" style={{ justifyContent: 'flex-start' }}><BookButton /></div>
      </div></section>
    </SitePage>
  );
}
