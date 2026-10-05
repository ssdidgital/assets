// Ink bars standing in for redacted text. Widths are fixed per seed so the page renders the same every build.
export function Redacted({ lines = 3, seed = 1 }: { lines?: number; seed?: number }) {
  const w = (i: number) => 62 + ((seed * 37 + i * 53) % 36);
  return (
    <span className="s-redact" role="img" aria-label="Redacted">
      {Array.from({ length: lines }, (_, i) => <span key={i} style={{ width: (i === lines - 1 ? w(i) - 30 : w(i)) + '%' }} />)}
    </span>
  );
}
