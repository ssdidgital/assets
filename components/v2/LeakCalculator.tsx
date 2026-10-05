'use client';

import { useEffect, useRef, useState } from 'react';
import { leak, LEAK_DEFAULTS, money, saveLeak, type Currency, type LeakInputs } from '@/lib/leak';
import { Button } from '../Button';
import { Em } from '../Text';

type SliderProps = { id: string; label: string; help?: string; min: number; max: number; step: number; value: number; text: string; onChange: (v: number) => void };

function Slider({ id, label, help, min, max, step, value, text, onChange }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="v2-calc-f">
      <div className="v2-calc-row">
        <label htmlFor={id} className="v2-calc-l">{label}</label>
        <output htmlFor={id} className="v2-calc-v">{text}</output>
      </div>
      <input id={id} type="range" className="v2-range" min={min} max={max} step={step} value={value} aria-valuetext={text}
        aria-describedby={help ? id + '-help' : undefined} style={{ '--p': pct + '%' } as React.CSSProperties} onChange={(e) => onChange(Number(e.target.value))} />
      {help ? <span id={id + '-help'} className="v2-calc-help">{help}</span> : null}
    </div>
  );
}

/** The illustration, made interactive: the bar redraws to the visitor’s own numbers. */
export function LeakCalculator() {
  const [v, setV] = useState<LeakInputs>(LEAK_DEFAULTS);
  const touched = useRef(false);
  const set = (k: keyof LeakInputs) => (x: number | Currency) => { touched.current = true; setV((s) => ({ ...s, [k]: x })); };
  useEffect(() => { if (touched.current) saveLeak(v); }, [v]);
  const r = leak(v);
  const pc = (x: number) => Math.round(x * 100) + '%';
  const segs: [string, number, string, string][] = [
    ['now', r.now, 'Bought straight away.', 'The part most businesses measure and optimise.'],
    ['wait', r.wait, 'Said “not now”.', 'Interested, qualified, and left in the CRM.'],
    ['leak', r.lost, 'Bought later, elsewhere.', 'Revenue the business paid to create and never collected.']
  ];
  const cols = segs.map(([, w]) => Math.max(w, 0.001) + 'fr').join(' ');
  return (
    <div className="s-illo v2-calc">
      <span className="ss-label s-illo-k">Your numbers</span>
      <h3 className="ss-h3 s-illo-h"><Em>Twelve months</Em> of enquiries</h3>
      <div className="v2-calc-in">
        <Slider id="calc-enq" label="Enquiries a month" min={5} max={500} step={5} value={v.enquiries} text={String(v.enquiries)} onChange={set('enquiries')} />
        <Slider id="calc-now" label="Buy straight away" min={5} max={60} step={1} value={v.closeRate} text={v.closeRate + '%'} onChange={set('closeRate')} />
        <Slider id="calc-later" label="Of the rest, buy later elsewhere" help="A guess is fine. We find the real figure on the call." min={10} max={70} step={1} value={v.laterElsewhere} text={v.laterElsewhere + '%'} onChange={set('laterElsewhere')} />
        <div className="v2-calc-f">
          <Slider id="calc-val" label="What a client is worth" min={1000} max={50000} step={500} value={v.value} text={money(v.value, v.currency)} onChange={set('value')} />
          <div className="v2-cur" role="radiogroup" aria-label="Currency">
            {(['GBP', 'USD'] as Currency[]).map((c) => (
              <button key={c} type="button" role="radio" aria-checked={v.currency === c} onClick={() => set('currency')(c)}>{c === 'GBP' ? '£ GBP' : '$ USD'}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="s-bar-wrap">
        <div className="s-bar v2-calc-bar" style={{ gridTemplateColumns: cols }} role="img"
          aria-label={`${pc(r.now)} bought straight away, ${pc(r.wait)} said not now, ${pc(r.lost)} bought later from someone else.`}>
          {segs.map(([c]) => <span key={c} className={'s-seg s-seg-' + c}></span>)}
        </div>
        <div className="s-key v2-calc-bar" style={{ gridTemplateColumns: cols }}>{segs.map(([c, w, l, d]) => (
          <div key={c} className={'s-key-i s-key-' + c}><span className="v2-calc-pc">{pc(w)}</span><strong>{l}</strong><p>{d}</p></div>
        ))}</div>
      </div>
      <div className="v2-calc-out" aria-live="polite">
        <p className="v2-calc-big">Roughly <Em>{money(r.monthly, v.currency)} a month</Em> is going to whoever follows up.</p>
        <p className="v2-calc-sub">That’s {money(r.yearly, v.currency)} a year, from enquiries the business has already paid to create.</p>
        <Button variant="secondary" href="/start">Book a systems audit</Button>
      </div>
      <p className="ss-caption s-illo-note">An estimate from your inputs, not a forecast. On a first call, we find the real figures for your business.</p>
    </div>
  );
}
