// Leak calculator model. Deliberately simple and visible: every assumption is an input the visitor sets.

export type Currency = 'GBP' | 'USD';
export type LeakInputs = { enquiries: number; closeRate: number; laterElsewhere: number; value: number; currency: Currency };

// Defaults reproduce the static illustration: 25% now, 45% waiting, 30% bought elsewhere.
export const LEAK_DEFAULTS: LeakInputs = { enquiries: 40, closeRate: 25, laterElsewhere: 40, value: 6000, currency: 'GBP' };

export function leak(i: LeakInputs) {
  const now = i.closeRate / 100;
  const lost = (1 - now) * (i.laterElsewhere / 100);
  const wait = 1 - now - lost;
  const monthly = i.enquiries * lost * i.value;
  return { now, wait, lost, monthly, yearly: monthly * 12 };
}

export function money(n: number, c: Currency) {
  // Round to a sensible precision so the figure reads as an estimate, not an invoice.
  const step = n >= 100000 ? 1000 : n >= 10000 ? 500 : 100;
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
