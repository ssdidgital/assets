'use client';

import { useEffect, useRef, useState } from 'react';
import { setCurrency, useCurrency } from '@/lib/currency';
import { leak, LEAK_DEFAULTS, money, saveLeak, type Currency, type LeakInputs } from '@/lib/leak';
import { Button } from '../Button';
import { Em } from '../Text';
import { bookHref } from '@/lib/links';

type SliderProps = { id: string; label: string; help?: string; min: number; max: number; step: number; value: number; text: string; lo?: string; hi?: string; onChange: (v: number) => void };

function Slider({ id, label, help, min, max, step, value, text, lo, hi, onChange }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="v2-calc-f">
      <div className="v2-calc-row">
        <label htmlFor={id} className="v2-calc-l">{label}</label>
        <output htmlFor={id} className="v2-calc-v">{text}</output>
      </div>
      <input id={id} type="range" className="v2-range" min={min} max={max} step={step} value={value} aria-valuetext={text}
        aria-describedby={help ? id + '-help' : undefined} style={{ '--p': pct + '%' } as React.CSSProperties} onChange={(e) => onChange(Number(e.target.value))} />
      <span className="v2-calc-ends" aria-hidden="true"><span>{lo ?? min}</span><span>{hi ?? max}</span></span>
      {help ? <span id={id + '-help'} className="v2-calc-help">{help}</span> : null}
    </div>
  );
}

/** The illustration, made interactive: the bar redraws to the visitor’s own numbers. The currency toggle is site-wide. */
export function LeakCalculator() {
  const cur = useCurrency();
  const [v, setV] = useState<Omit<LeakInputs, 'currency'>>(LEAK_DEFAULTS);
  const touched = useRef(false);
  const [idle, setIdle] = useState(true);
  const set = (k: keyof Omit<LeakInputs, 'currency'>) => (x: number) => { touched.current = true; setIdle(false); setV((s) => ({ ...s, [k]: x })); };
  const inputs: LeakInputs = { ...v, currency: cur };
  useEffect(() => { if (touched.current) saveLeak({ ...v, currency: cur }); }, [v, cur]);
  const r = leak(inputs);
  const pc = (x: number) => Math.round(x * 100) + '%';
  const segs: [string, number, string, string][] = [
    ['now', r.now, 'Bought straight away.', 'The part most businesses measure and optimise.'],
    ['wait', r.wait, 'Said “not now”.', 'Interested, qualified, and left in the CRM.'],
    ['leak', r.lost, 'Bought later, elsewhere.', 'Revenue the business paid to create and never collected.']
  ];
  const cols = segs.map(([, w]) => Math.max(w, 0.001) + 'fr').join(' ');
  // Labels need room even when a slice is thin, so the key's columns have a floor.
  const keyCols = segs.map(([, w]) => Math.max(w, 0.26) + 'fr').join(' ');
  return (
    <div className="s-illo v2-calc">
      <span className="ss-label s-illo-k">Your numbers</span>
      <h3 className="ss-h3 s-illo-h"><Em>Twelve months</Em> of enquiries</h3>
      <p className={'v2-calc-cue' + (idle ? ' is-idle' : '')}>
        <span className="v2-calc-cue-k" aria-hidden="true">⟷</span>
        {idle ? 'Drag the sliders to your numbers. The bar and the total update as you go.' : 'Updated to your numbers.'}
      </p>
      <div className={'v2-calc-in' + (idle ? ' is-idle' : '')}>
        <Slider id="calc-enq" label="Enquiries a month" min={5} max={500} step={5} value={v.enquiries} text={String(v.enquiries)} onChange={set('enquiries')} />
        <Slider id="calc-now" label="Buy straight away" min={5} max={60} step={1} value={v.closeRate} text={v.closeRate + '%'} lo="5%" hi="60%" onChange={set('closeRate')} />
        <Slider id="calc-later" label="Of the rest, buy later elsewhere" help="A guess is fine. We find the real figure on the call." min={5} max={70} step={1} value={v.laterElsewhere} text={v.laterElsewhere + '%'} lo="5%" hi="70%" onChange={set('laterElsewhere')} />
        <div className="v2-calc-f v2-calc-grp">
          <Slider id="calc-val" label="What a client is worth" min={500} max={50000} step={500} value={v.value} text={money(v.value, cur)} lo={money(500, cur)} hi={money(50000, cur)} onChange={set('value')} />
          <div className="v2-cur" role="radiogroup" aria-label="Currency">
            {(['GBP', 'USD'] as Currency[]).map((c) => (
              <button key={c} type="button" role="radio" aria-checked={cur === c} onClick={() => { touched.current = true; setCurrency(c); }}>{c === 'GBP' ? '£ GBP' : '$ USD'}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="s-bar-wrap">
        <div className="s-bar v2-calc-bar" style={{ gridTemplateColumns: cols }} role="img"
          aria-label={`${pc(r.now)} bought straight away, ${pc(r.wait)} said not now, ${pc(r.lost)} bought later from someone else.`}>
          {segs.map(([c]) => <span key={c} className={'s-seg s-seg-' + c}></span>)}
        </div>
        <div className="s-key v2-calc-bar" style={{ gridTemplateColumns: keyCols }}>{segs.map(([c, w, l, d]) => (
          <div key={c} className={'s-key-i s-key-' + c}><span className="v2-calc-pc">{pc(w)}</span><strong>{l}</strong><p>{d}</p></div>
        ))}</div>
      </div>
      <div className="v2-calc-out" aria-live="polite">
        <p className="v2-calc-keep"><span className="ss-label">Your estimated Keep Rate</span><strong>{pc(r.keepRate)}</strong></p>
        <p className="v2-calc-sub">Of the people who enquired and went on to buy, that’s the share who bought from you.</p>
        <p className="v2-calc-big">Roughly <Em>{money(r.monthly, cur)} a month</Em> is going to whoever follows up.</p>
        <p className="v2-calc-sub">That’s {money(r.yearly, cur)} a year, from enquiries the business has already paid to create.</p>
        <p className="ss-caption v2-calc-cap">An estimate from your inputs, not a forecast.</p>
        <p className="v2-calc-cta">That’s an estimate. Book a systems audit and we’ll work out your real Keep Rate, in your Recovery Brief.</p>
        <Button variant="secondary" href={bookHref('calculator', { leak_estimate: money(r.monthly, cur) + '/month' })}>Book a systems audit</Button>
      </div>
    </div>
  );
}
