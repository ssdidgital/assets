import type { Stat } from '@/lib/work';
import { rich } from '../Rich';

/** Joined strip of headline numbers: big Outfit figures over mono labels. */
export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <dl className="s-stats">{stats.map((s) => (
      <div key={s.label}><dt className="ss-label">{rich(s.label)}</dt><dd>{rich(s.value)}</dd></div>
    ))}</dl>
  );
}
