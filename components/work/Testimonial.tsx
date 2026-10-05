import type { Quote } from '@/lib/work';
import { rich } from '../Rich';

/** A client quote with full name, role and photo. Anonymous quotes read as invented, so all three are required. */
export function Testimonial({ q }: { q: Quote }) {
  return (
    <figure className="s-quote">
      <blockquote><p>{rich(q.text)}</p></blockquote>
      <figcaption>
        {q.photo ? <img src={q.photo} alt="" width={56} height={56} /> : <span className="s-quote-ph" aria-hidden="true">Photo</span>}
        <span><strong>{rich(q.name)}</strong><span>{rich(q.role)}</span></span>
      </figcaption>
    </figure>
  );
}
