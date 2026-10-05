import { leak, LEAK_DEFAULTS, money } from '@/lib/leak';
import { BookButton, Button } from '../Button';
import { Em } from '../Text';

// v4 hero: a full-bleed Forest band. The headline and offer on top, then the leak itself drawn across the width,
// using the calculator’s default inputs (labelled as an illustration) and a link down to try your own numbers.
export function HeroLeak() {
  const r = leak(LEAK_DEFAULTS);
  const pc = (x: number) => Math.round(x * 100) + '%';
  const segs: [string, number, string][] = [['now', r.now, 'Bought straight away.'], ['wait', r.wait, 'Said “not now”.'], ['leak', r.lost, 'Bought later, elsewhere.']];
  const cols = segs.map(([, w]) => w + 'fr').join(' ');
  return (
    <section data-theme="forest" className="v4-hero">
      <div className="s-frame">
        <div className="s-sec s-sec-first s-hero v4-hero-sec"><div className="s-wrap">
          <h1 className="s-hero-h v4-h"><span>We engineer the systems that win clients,</span> <span>and <Em>win back the buyers you’ve already paid for.</Em></span></h1>
          <div className="v4-row">
            <div className="v4-offer">
              <p className="s-hero-pos v4-pos">System Switch is a growth infrastructure firm for founder-led coaches, consultants and service providers.</p>
              <div className="s-ctas v4-ctas"><BookButton /><Button variant="ghost" href="#how">See how we work →</Button></div>
            </div>
            <ol className="v4-steps">
              <li><span className="s-qn">01</span>We find where revenue is leaking</li>
              <li><span className="s-qn">02</span>We install the systems that stop it</li>
              <li><span className="s-qn">03</span>We hand you the controls</li>
            </ol>
          </div>
          <figure className="s-illo v4-leak">
            <div className="v4-leak-head">
              <span className="ss-label">Illustration · {LEAK_DEFAULTS.enquiries} enquiries a month · {money(LEAK_DEFAULTS.value, LEAK_DEFAULTS.currency)} a client</span>
              <a href="#diagnosis" className="v4-try">Try your numbers ↓</a>
            </div>
            <div className="s-bar-wrap">
              <div className="s-bar" style={{ gridTemplateColumns: cols }} role="img" aria-label={`${pc(r.now)} bought straight away, ${pc(r.wait)} said not now, ${pc(r.lost)} bought later from someone else.`}>
                {segs.map(([c]) => <span key={c} className={'s-seg s-seg-' + c}></span>)}
              </div>
              <div className="s-key" style={{ gridTemplateColumns: cols }}>{segs.map(([c, w, l]) => (
                <div key={c} className={'s-key-i s-key-' + c}><span className="v2-calc-pc">{pc(w)}</span><strong>{l}</strong></div>
              ))}</div>
            </div>
            <p className="v4-fig">Roughly <Em>{money(r.monthly, LEAK_DEFAULTS.currency)} a month</Em> goes to whoever follows up.</p>
          </figure>
        </div></div>
      </div>
    </section>
  );
}
