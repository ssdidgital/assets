import type { Metadata } from 'next';
import { SitePage } from '@/components/SiteChrome';
import { Eyebrow, Ph } from '@/components/Text';
import { pageMeta } from '@/lib/meta';

// Registered company details, linked from the footer as “System Switch”. Noindex until the placeholders are filled.
export const metadata: Metadata = pageMeta('company', '/company', { index: false });

const rows: [string, React.ReactNode][] = [
  ['Registered name', <Ph key="n">[[System Switch Digital Ltd]]</Ph>],
  ['Company number', <Ph key="c">[[00000000]]</Ph>],
  ['Registered in', <Ph key="r">[[England and Wales]]</Ph>],
  ['Registered office', <Ph key="o">[[Registered office address]]</Ph>],
  ['VAT number', <Ph key="v">[[VAT number, if registered]]</Ph>],
  ['Email', <span key="e" className="s-co-mail">support@systemswitch.digital</span>],
  ['LinkedIn', <Ph key="l">[[LinkedIn URL]]</Ph>]
];

export default function Company() {
  return (
    <SitePage>
      <section className="s-sec s-sec-first s-phero"><div className="s-wrap s-center">
        <Eyebrow>Company details</Eyebrow>
        <h1 className="s-h1">System Switch</h1>
        <p className="ss-body-lg s-lede">Growth infrastructure for founder-led businesses.</p>
      </div></section>
      <section className="s-sec" style={{ paddingTop: 0 }}><div className="s-wrap">
        <dl className="s-co">{rows.map(([k, v]) => (
          <div key={k}><dt className="ss-label">{k}</dt><dd>{v}</dd></div>
        ))}</dl>
      </div></section>
    </SitePage>
  );
}
