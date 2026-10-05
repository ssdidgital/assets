'use client';

import { useState } from 'react';

/** Single-open accordion. First item open. */
export function Faq({ items }: { items: [q: string, a: string][] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="s-faq">{items.map(([q, a], i) => {
      const on = open === i;
      return (
        <div key={q} className={'s-faq-i' + (on ? ' s-on' : '')}>
          <h3 style={{ margin: 0 }}><button type="button" id={'faq-q-' + i} aria-expanded={on} aria-controls={'faq-' + i} onClick={() => setOpen(on ? -1 : i)}><span>{q}</span><span className="s-plus" aria-hidden="true"></span></button></h3>
          <div id={'faq-' + i} className="s-faq-a" role="region" aria-labelledby={'faq-q-' + i} hidden={!on}><p className="ss-body">{a}</p></div>
        </div>
      );
    })}</div>
  );
}
