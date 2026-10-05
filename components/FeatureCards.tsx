import { Icon, type IconName } from './Icon';

type Item = { label?: string; icon?: IconName; title: string; text?: string };

const pad2 = (n: number) => String(n).padStart(2, '0');

/** A row of numbered cards with an icon tile, title and one line of text. On the site they join into one strip. */
export function FeatureCards({ items, labelPrefix = 'Step', columns }: { items: Item[]; labelPrefix?: string; columns?: number }) {
  const n = columns || items.length || 1;
  return (
    <div className="ss-cards" style={{ gridTemplateColumns: 'repeat(' + n + ', minmax(0, 1fr))' }}>
      {items.map((it, i) => (
        <article key={i} className="ss-cards-card">
          <span className="ss-cards-label">{it.label || labelPrefix + ' ' + pad2(i + 1)}</span>
          {it.icon ? <span className="ss-cards-tile" aria-hidden="true"><Icon name={it.icon} /></span> : null}
          <h3 className="ss-cards-title">{it.title}</h3>
          {it.text ? <p className="ss-cards-text">{it.text}</p> : null}
        </article>
      ))}
    </div>
  );
}
