/** Sticky "What happens next" panel; the current step reads in ink. Hidden below 1000px. */
export function NextPanel({ step }: { step: 0 | 1 }) {
  const rows = ['Tell us about your business', 'Choose a time', 'Get your Recovery Brief within 48 hours of the call'];
  return (
    <aside className="s-next">
      <span className="ss-label">What happens next</span>
      <ol>{rows.map((r, i) => <li key={r} aria-current={i === step ? 'step' : undefined}><span className="s-qn">{String(i + 1).padStart(2, '0')}</span><span>{r}</span><span className={'ss-switch-mini' + (i <= step ? ' is-on' : '')} aria-hidden="true" /></li>)}</ol>
    </aside>
  );
}
