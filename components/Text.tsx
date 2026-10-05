import type { ReactNode } from 'react';

/** The one gold phrase in a headline. */
export function Em({ children }: { children: ReactNode }) { return <span className="ss-emphasis-inline">{children}</span>; }
/** Content still to supply, e.g. [[X,XXX+]]. */
export function Ph({ children }: { children: ReactNode }) { return <span className="s-ph">{children}</span>; }
export function Eyebrow({ children }: { children: ReactNode }) { return <span className="ss-label s-eyebrow">{children}</span>; }
