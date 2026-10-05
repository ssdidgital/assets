'use client';

import { useEffect, useState } from 'react';
import { readApplication, startingStage } from '@/lib/booking';
import { Em } from '../Text';

/** Confirmation heading and lead, personalised from the application when it’s available in this visit. */
export function BookedHeading() {
  const [name, setName] = useState('');
  const [stage, setStage] = useState<[string, string] | null>(null);
  const [known, setKnown] = useState(false);
  useEffect(() => {
    const a = readApplication();
    if (!a) return;
    setName(String(a.name || '').trim().split(/\s+/)[0] || '');
    setStage(startingStage(a.losing));
    setKnown(true);
  }, []);
  return (
    <>
      <h1 className="s-h2" style={{ marginTop: 0 }}>You’re <Em>booked in</Em>{name ? ', ' + name + '.' : <Em>.</Em>}</h1>
      <p className="ss-body-lg s-lede">Your confirmation and a calendar invite are on their way to your inbox. If you can’t find them, check your spam folder and save our address.</p>
      <p className="ss-body s-booked-brief">Your Recovery Brief follows within 48 hours of the call.</p>
      {known ? (
        <p className="s-booked-start">
          {stage
            ? <>You told us the business is losing the most at <strong>{stage[0]}</strong>, so that’s where the call will start: {stage[1]}.</>
            : <>You weren’t sure where the business is losing the most. That’s fine: finding it is what the call is for.</>}
        </p>
      ) : null}
    </>
  );
}
