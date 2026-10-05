import { BookButton, Button } from '../Button';
import { Em } from '../Text';

// v3 hero: the headline on the left, a compact working board on the right showing the system holding a “not now” buyer.
// Board coordinates are a 560 × 460 grid; nodes have fixed heights so the connectors meet their edges.
const W = 560, H = 460;
const box = (x: number, y: number, w: number, h: number) => ({ left: (x / W) * 100 + '%', top: (y / H) * 100 + '%', width: (w / W) * 100 + '%', height: (h / H) * 100 + '%' });

export function HeroBoard() {
  return (
    <section className="s-dots s-hero v3-hero">
      <div className="s-wrap v3-hero-in">
        <h1 className="s-hero-h v3-h"><span>We engineer the systems that win clients,</span> <span>and <Em>win back the buyers you’ve already paid for.</Em></span></h1>
        <div className="v3-copy">
          <p className="s-hero-pos v3-pos">System Switch is a growth infrastructure firm for founder-led coaches, consultants and service providers.</p>
          <ol className="v3-steps">
            <li><span className="s-qn">01</span>We find where revenue is leaking</li>
            <li><span className="s-qn">02</span>We install the systems that stop it</li>
            <li><span className="s-qn">03</span>We hand you the controls</li>
          </ol>
          <div className="s-ctas v3-ctas"><BookButton /><Button variant="ghost" href="#how">See how we work →</Button></div>
        </div>

        <figure className="v3-board" aria-label="A buyer who said “not now” either goes quiet and buys elsewhere, or is brought back by the system at the Recovery stage and books a qualified call." role="img">
          <div className="v2-board-frame"><span className="v2-board-glyph" />The system</div>
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="v3-on" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" className="bp-head-on" /></marker>
              <marker id="v3-off" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" className="bp-head-off" /></marker>
            </defs>
            <path className="bp-off" d="M274 132 H141 Q135 132 135 138 V174" markerEnd="url(#v3-off)" />
            <path className="bp-off" d="M135 236 L135 274" markerEnd="url(#v3-off)" />
            <path className="bp-note" d="M135 334 L135 368" />
            <path className="bp-on" pathLength={1} d="M280 112 V126 Q280 132 286 132 H419 Q425 132 425 138 V174" markerEnd="url(#v3-on)" />
            <path className="bp-stem" d="M280 112 V126 Q280 132 274 132" />
            <path className="bp-on" pathLength={1} d="M425 242 L425 274" markerEnd="url(#v3-on)" />
            <path className="bp-on" pathLength={1} d="M425 340 L425 370" markerEnd="url(#v3-on)" />
            <circle cx={280} cy={112} r={4.5} className="bp-port bp-port-on" />
          </svg>
          <span className="v3-tag" style={{ left: (145 / W) * 100 + '%', top: (156 / H) * 100 + '%' }}>Without a system</span>
          <span className="v3-tag is-on" style={{ left: (435 / W) * 100 + '%', top: (156 / H) * 100 + '%' }}>With the system</span>
          <div className="v3n v3n-wait" style={box(120, 34, 320, 78)}><span className="v2-sw v2-sw-wait" /><div><strong>Said “not now”.</strong><span>Interested, qualified, and left in the CRM.</span></div></div>
          <div className="v3n v3n-quiet" style={box(20, 178, 230, 58)}>Goes quiet in the CRM.</div>
          <div className="v3n v3n-leak" style={box(20, 276, 230, 58)}>Bought later, elsewhere.</div>
          <div className="v3n v3n-note" style={box(20, 370, 230, 72)}><span className="bn-k">Note</span>Revenue the business paid to create and never collected.</div>
          <div className="v3n v3n-step" style={box(310, 178, 230, 64)}><span className="bn-k">Conversion</span>Fast, consistent follow-up.</div>
          <div className="v3n v3n-step v3n-sel" style={box(310, 276, 230, 64)}>
            <span className="bn-sel-tag">Where we usually start</span>
            <i className="h tl" /><i className="h tr" /><i className="h bl" /><i className="h br" />
            <span className="bn-k">Recovery</span>Brought back to the table.
          </div>
          <div className="v3n v3n-now" style={box(310, 372, 230, 58)}>Booked, qualified call.</div>
          <div className="v2-cursor v3-cursor" style={{ left: (468 / W) * 100 + '%', top: (330 / H) * 100 + '%' }}>
            <svg viewBox="0 0 16 20" width="16" height="20"><path d="M1 1 L1 16 L5 12 L8 19 L11 18 L8 11 L14 11 Z" /></svg>
            <span>Kyū</span>
          </div>
        </figure>
      </div>
    </section>
  );
}
