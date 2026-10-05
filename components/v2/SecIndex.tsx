import type { ReactNode } from 'react';

/** Mono section index, "02 ▭ What we build", over a hairline to the column edge. The mini switch flips on as the section arrives. */
export function SecIndex({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="v2-idx">
      <span className="v2-idx-n">{n}</span>
      <span className="ss-switch-mini" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
