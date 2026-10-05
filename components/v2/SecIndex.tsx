import type { ReactNode } from 'react';

/** Mono section index, "02 — What we build", over a hairline that runs to the edge of the column. */
export function SecIndex({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="v2-idx">
      <span className="v2-idx-n">{n}</span>
      <span className="v2-idx-dash" aria-hidden="true">—</span>
      <span>{children}</span>
    </div>
  );
}
