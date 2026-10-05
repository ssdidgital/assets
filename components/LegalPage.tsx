import { SitePage } from './SiteChrome';
import { Eyebrow, Ph } from './Text';

/**
 * Structure for a legal page. The headings are the usual ones for a UK business site; the wording under each
 * must come from your solicitor or policy provider, so every section is a placeholder until then.
 */
export function LegalPage({ eyebrow, title, sections }: { eyebrow: string; title: string; sections: string[] }) {
  return (
    <SitePage>
      <section className="s-sec s-sec-first s-phero"><div className="s-wrap s-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="s-h1">{title}</h1>
        <p className="ss-body s-lede">Last updated <Ph>[[date]]</Ph></p>
      </div></section>
      <section className="s-sec" style={{ paddingTop: 0 }}><div className="s-wrap">
        <div className="s-legal">
          <p className="s-legal-note">Placeholder structure. The wording for each section needs to come from your solicitor or policy provider before launch.</p>
          {sections.map((h) => (
            <div key={h}><h2>{h}</h2><p><Ph>[[Wording to supply]]</Ph></p></div>
          ))}
        </div>
      </div></section>
    </SitePage>
  );
}
