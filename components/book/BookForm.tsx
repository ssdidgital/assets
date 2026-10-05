'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { BOOK_SECTIONS, clearDraft, missingAnswers, readDraft, saveDraft, submitApplication, type Answers, type Question } from '@/lib/booking';
import { Button } from '../Button';
import { Field } from '../Field';
import { useCurrency, withCur } from '@/lib/currency';

function QLabel({ n, q }: { n: number; q: Question }) {
  const cur = useCurrency();
  return <><span className="s-qn">{String(n).padStart(2, '0')}</span>{withCur(q.label, cur)}{q.optional ? <span className="s-opt"> (optional)</span> : null}</>;
}

type QProps = { q: Question; n: number; value?: string; onChange: (v: string) => void; invalid: boolean };

function Radios({ q, n, value, onChange, invalid }: QProps) {
  const cur = useCurrency();
  return (
    <fieldset className={'s-radios' + (invalid ? ' s-invalid' : '')}>
      <legend className="s-qlabel"><QLabel n={n} q={q} /></legend>
      <div className="s-radio-list">{q.opts!.map((o) => (
        <label key={o} className="s-radio"><input type="radio" name={q.id} value={o} checked={value === o} onChange={() => onChange(o)} aria-invalid={invalid || undefined} /><span>{withCur(o, cur)}</span></label>
      ))}</div>
    </fieldset>
  );
}

function LongField({ q, n, value, onChange, invalid }: QProps) {
  return (
    <div className={'ss-field s-long' + (invalid ? ' s-invalid' : '')}>
      <label className="s-qlabel" htmlFor={'q-' + q.id}><QLabel n={n} q={q} /></label>
      <textarea id={'q-' + q.id} name={q.id} className="ss-field-input" rows={4} value={value || ''} onChange={(e) => onChange(e.target.value)}
        aria-invalid={invalid ? 'true' : undefined} aria-describedby={q.help ? 'q-' + q.id + '-help' : undefined}></textarea>
      {q.help ? <span id={'q-' + q.id + '-help'} className="ss-field-help">{q.help}</span> : null}
    </div>
  );
}

export function BookForm() {
  const router = useRouter();
  const cur = useCurrency();
  const [v, setV] = useState<Answers>({});
  const [errs, setErrs] = useState<Set<string> | null>(null);
  const [busy, setBusy] = useState(false);
  const restored = useRef(false);
  useEffect(() => { setV(readDraft()); restored.current = true; }, []);
  useEffect(() => { if (restored.current) saveDraft(v); }, [v]);
  const set = (id: string) => (val: string) => setV((s) => ({ ...s, [id]: val }));
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const bad = missingAnswers(v);
    if (bad.length) { setErrs(new Set(bad)); window.scrollTo({ top: 0 }); return; }
    setBusy(true);
    await submitApplication(v);
    clearDraft();
    // Review hosting (scripts/preview.mjs) can take over navigation; the live site uses the router.
    const pv = (window as Window & { __PV_NAV__?: (path: string) => void }).__PV_NAV__;
    if (pv) pv('/start/calendar'); else router.push('/start/calendar');
  };
  let n = 0;
  return (
    <form className="s-form" onSubmit={submit} noValidate>
      {errs ? <p className="s-form-error ss-body" role="alert">Something didn’t go through. Check the highlighted fields and try again.</p> : null}
      {BOOK_SECTIONS.map((s) => (
        <section key={s.title} className="ss-card s-form-card">
          <h2 className="ss-h3" style={{ margin: 0 }}>{s.title}</h2>
          {s.qs.map((q) => {
            n += 1;
            const inv = !!errs?.has(q.id);
            if (q.opts) return <Radios key={q.id} q={q} n={n} value={v[q.id]} onChange={set(q.id)} invalid={inv} />;
            if (q.long) return <LongField key={q.id} q={q} n={n} value={v[q.id]} onChange={set(q.id)} invalid={inv} />;
            return <Field key={q.id} id={'q-' + q.id} name={q.id} className={inv ? 's-invalid' : ''} label={<QLabel n={n} q={q} />} type={q.type} autoComplete={q.auto} help={q.help ? withCur(q.help, cur) : undefined}
              value={v[q.id] || ''} onChange={(e) => set(q.id)(e.target.value)} aria-invalid={inv ? 'true' : undefined} />;
          })}
        </section>
      ))}
      <div><Button variant="primary" type="submit" className={'s-blink' + (busy ? ' s-busy' : '')} aria-busy={busy || undefined} disabled={busy}>Choose a time →</Button></div>
    </form>
  );
}
