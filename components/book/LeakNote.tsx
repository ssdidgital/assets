'use client';

import { useEffect, useState } from 'react';
import { leak, money, readLeak } from '@/lib/leak';

/** If the visitor used the leak calculator, carry their estimate onto the application page. */
export function LeakNote() {
  const [text, setText] = useState<string | null>(null);
  useEffect(() => {
    const i = readLeak();
    if (i) setText(money(leak(i).monthly, i.currency));
  }, []);
  if (!text) return null;
  return <p className="v2-leaknote">Your estimate from the calculator: roughly <strong>{text} a month</strong>. We’ll check it against your real numbers on the call.</p>;
}
