/** Sticky "What happens next" panel; the current step reads in ink. Hidden below 1000px. */
export function NextPanel({ step }: { step: 0 | 1 }) {
  const rows = ['Tell us about your business', 'Choose a time', "We'll show you where we'd start"];
  return (
    <aside className="s-next">
      <span className="ss-label">What happens next</span>
      <ol>{rows.map((r, i) => <li key={r} aria-current={i === step ? 'step' : undefined}><span className="s-qn">{String(i + 1).padStart(2, '0')}</span>{r}</li>)}</ol>
    </aside>
  );
}
