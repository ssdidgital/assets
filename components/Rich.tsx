import { Fragment, type ReactNode } from 'react';
import { Em, Ph } from './Text';

/**
 * Light markup for content files: {{gold phrase}} → the headline’s gold phrase, [[to supply]] → placeholder box,
 * **bold** → strong. Keeps content in plain strings so it can move to a CMS later.
 */
export function rich(s: string): ReactNode {
  const parts = s.split(/(\{\{.+?\}\}|\[\[.+?\]\]|\*\*.+?\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('{{')) return <Em key={i}>{rich(p.slice(2, -2))}</Em>;
    if (p.startsWith('[[')) return p.length > 28 ? <span key={i} className="s-ph s-ph-long">{p}</span> : <Ph key={i}>{p}</Ph>;
    if (p.startsWith('**')) return <strong key={i}>{rich(p.slice(2, -2))}</strong>;
    return <Fragment key={i}>{p}</Fragment>;
  });
}
