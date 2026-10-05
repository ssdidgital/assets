import { Em } from '../Text';

// How the system holds a “not now” buyer, drawn as a working board: dot-grid canvas, nodes with ports,
// connectors, a selected node and a collaborator’s cursor. Labels are lifted from existing site copy.
// Colour code matches the illustration: ink = buying, hatched = waiting, gold = bought elsewhere.
// Desktop draws on a fixed 1000 × 470 coordinate space; below 900px a stacked version replaces it.

// The board is 1000 × 500: the drawing takes the top 430, the key strip the rest. HTML positions use the full 500.
const W = 1000, H = 430, BH = 500;
const pos = (x: number, cy: number, w: number) => ({ left: (x / W) * 100 + '%', top: (cy / BH) * 100 + '%', width: (w / W) * 100 + '%' });

function Board() {
  return (
    <div className="v2-board" aria-hidden="true">
      <div className="v2-board-frame"><span className="v2-board-glyph" />The system</div>
      <svg className="v2-board-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <defs>
          <marker id="bp-arrow-on" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" className="bp-head-on" /></marker>
          <marker id="bp-arrow-off" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" className="bp-head-off" /></marker>
        </defs>
        <path className="bp-off" d="M270 235 C300 235 290 130 318 130" markerEnd="url(#bp-arrow-off)" />
        <path className="bp-off" d="M535 130 L598 130" markerEnd="url(#bp-arrow-off)" />
        <path className="bp-note" d="M800 130 L830 130" />
        <path className="bp-on" pathLength={1} d="M270 235 C300 235 290 345 318 345" markerEnd="url(#bp-arrow-on)" />
        <path className="bp-on" pathLength={1} d="M535 345 L578 345" markerEnd="url(#bp-arrow-on)" />
        <path className="bp-on" pathLength={1} d="M795 345 L838 345" markerEnd="url(#bp-arrow-on)" />
        {[[270, 235, 'on'], [535, 130, 'off'], [535, 345, 'on'], [795, 345, 'on']].map(([x, y, k]) => (
          <circle key={`${x}-${y}`} cx={x as number} cy={y as number} r={4.5} className={'bp-port bp-port-' + k} />
        ))}
      </svg>

      <span className="v2-lane-tag" style={{ left: '32%', top: (78 / BH) * 100 + '%' }}>Without a system</span>
      <span className="v2-lane-tag is-on" style={{ left: '32%', top: (293 / BH) * 100 + '%' }}>With the system</span>

      <div className="bn bn-wait" style={pos(40, 235, 230)}>
        <span className="v2-sw v2-sw-wait" />
        <div><strong>Said “not now”.</strong><span>Interested, qualified, and left in the CRM.</span></div>
      </div>
      <div className="bn bn-quiet" style={pos(320, 130, 215)}>Goes quiet in the CRM.</div>
      <div className="bn bn-leak" style={pos(600, 130, 200)}>Bought later, elsewhere.</div>
      <div className="bn bn-note" style={pos(830, 130, 150)}><span className="bn-k">Note</span>Revenue the business paid to create and never collected.</div>
      <div className="bn bn-step" style={pos(320, 345, 215)}><span className="bn-k">Conversion</span>Fast, consistent <span className="bn-nw">follow-up.</span></div>
      <div className="bn bn-step bn-sel" style={pos(580, 345, 215)}>
        <span className="bn-sel-tag">Where we usually start</span>
        <i className="h tl" /><i className="h tr" /><i className="h bl" /><i className="h br" />
        <span className="bn-k">Recovery</span>Brought back to the table.
      </div>
      <div className="bn bn-now" style={pos(840, 345, 140)}>Booked, qualified call.</div>

      <div className="v2-cursor" style={{ left: (722 / W) * 100 + '%', top: (392 / BH) * 100 + '%' }}>
        <svg viewBox="0 0 16 20" width="16" height="20"><path d="M1 1 L1 16 L5 12 L8 19 L11 18 L8 11 L14 11 Z" /></svg>
        <span>Kyū</span>
      </div>

      <ul className="v2-board-key">
        <li><span className="v2-sw v2-sw-now" />Bought straight away.</li>
        <li><span className="v2-sw v2-sw-wait" />Said “not now”.</li>
        <li><span className="v2-sw v2-sw-leak" />Bought later, elsewhere.</li>
      </ul>
    </div>
  );
}

function Stacked() {
  return (
    <div className="v2-sys-body v2-stacked" aria-hidden="true">
      <div className="v2-node v2-node-wait v2-sys-in">
        <span className="v2-sw v2-sw-wait" />
        <div><strong>Said “not now”.</strong><p>Interested, qualified, and left in the CRM.</p></div>
      </div>
      <div className="v2-lanes">
        <div className="v2-lane v2-lane-off">
          <span className="ss-label v2-lane-k">Without a system</span>
          <div className="v2-node v2-node-quiet">Goes quiet in the CRM.</div>
          <div className="v2-down" />
          <div className="v2-node v2-node-leak">Bought later, elsewhere.</div>
        </div>
        <div className="v2-lane v2-lane-on">
          <span className="ss-label v2-lane-k">With the system</span>
          <div className="v2-node v2-node-step"><span className="v2-step-n">Conversion</span>Fast, consistent follow-up.</div>
          <div className="v2-down" />
          <div className="v2-node v2-node-step v2-node-sel"><span className="v2-step-n">Recovery · Where we usually start</span>Brought back to the table.</div>
          <div className="v2-down" />
          <div className="v2-node v2-node-now">Booked, qualified call.</div>
        </div>
      </div>
      <ul className="v2-legend">
        <li><span className="v2-sw v2-sw-now" />Bought straight away.</li>
        <li><span className="v2-sw v2-sw-wait" />Said “not now”.</li>
        <li><span className="v2-sw v2-sw-leak" />Bought later, elsewhere.</li>
      </ul>
    </div>
  );
}

export function SystemDiagram() {
  return (
    <figure className="v2-sys">
      <figcaption className="v2-sys-head">
        <span className="ss-label v2-sys-k">The system</span>
        <h3 className="ss-h3">Holding a buyer between <Em>“interested” and “ready”</Em></h3>
      </figcaption>
      <div role="img" aria-label="A buyer who said “not now” either goes quiet in the CRM and buys later from someone else, or, with the system, gets fast follow-up, is brought back to the table at the Recovery stage, where we usually start, and books a qualified call.">
        <Board />
        <Stacked />
      </div>
    </figure>
  );
}
