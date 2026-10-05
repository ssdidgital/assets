import { Em } from '../Text';

// How the system holds a "not now" buyer. Every label is lifted from existing site copy.
// Colour code matches the illustration: ink = buying, hatched = waiting, gold = bought elsewhere.
export function SystemDiagram() {
  return (
    <figure className="v2-sys">
      <figcaption className="v2-sys-head">
        <span className="ss-label v2-sys-k">The system</span>
        <h3 className="ss-h3">Holding a buyer between <Em>“interested” and “ready”</Em></h3>
      </figcaption>
      <div className="v2-sys-body" role="img" aria-label='A buyer who said “not now” either goes quiet in the CRM and buys later from someone else, or, with the system, gets fast follow-up, is brought back to the table and books a qualified call.'>
        <div className="v2-node v2-node-wait v2-sys-in">
          <span className="v2-sw v2-sw-wait" />
          <div><strong>Said “not now”.</strong><p>Interested, qualified, and left in the CRM.</p></div>
        </div>
        <div className="v2-fork" />
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
            <div className="v2-node v2-node-step"><span className="v2-step-n">Recovery</span>Brought back to the table.</div>
            <div className="v2-down" />
            <div className="v2-node v2-node-now">Booked, qualified call.</div>
          </div>
        </div>
      </div>
      <ul className="v2-legend" aria-label="Key">
        <li><span className="v2-sw v2-sw-now" />Bought straight away.</li>
        <li><span className="v2-sw v2-sw-wait" />Said “not now”.</li>
        <li><span className="v2-sw v2-sw-leak" />Bought later, elsewhere.</li>
      </ul>
    </figure>
  );
}
