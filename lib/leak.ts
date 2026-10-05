// Leak calculator model. Deliberately simple and visible: every assumption is an input the visitor sets.

export type Currency = 'GBP' | 'USD';
export type LeakInputs = { enquiries: number; closeRate: number; laterElsewhere: number; value: number; currency: Currency };

// Conservative defaults: 20 enquiries a month, 20% buy straight away, 10% of the rest buy later elsewhere, a client worth 3,000.
export const LEAK_DEFAULTS: LeakInputs = { enquiries: 20, closeRate: 20, laterElsewhere: 10, value: 3000, currency: 'GBP' };

export function leak(i: LeakInputs) {
  const now = i.closeRate / 100;
  const lost = (1 - now) * (i.laterElsewhere / 100);
  const wait = 1 - now - lost;
  const monthly = i.enquiries * lost * i.value;
  // Keep Rate: of the people who enquired and went on to buy, the share who bought from you.
  const keepRate = now + lost > 0 ? now / (now + lost) : 1;
  return { now, wait, lost, monthly, yearly: monthly * 12, keepRate };
}

export function money(n: number, c: Currency) {
  // Round to a sensible precision so the figure reads as an estimate, not an invoice.
  const step = n >= 1000000 ? 1000 : 100;
  return new Intl.NumberFormat(c === 'GBP' ? 'en-GB' : 'en-US', { style: 'currency', currency: c, maximumFractionDigits: 0 }).format(Math.round(n / step) * step);
}

export const LEAK_KEY = 'ssd-leak';

export function saveLeak(i: LeakInputs) {
  try { sessionStorage.setItem(LEAK_KEY, JSON.stringify(i)); } catch { /* storage blocked */ }
}

export function readLeak(): LeakInputs | null {
  try {
    const v = JSON.parse(sessionStorage.getItem(LEAK_KEY) || 'null');
    return v && typeof v.enquiries === 'number' ? { ...LEAK_DEFAULTS, ...v } : null;
  } catch {
    return null;
  }
}
