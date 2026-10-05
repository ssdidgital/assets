'use client';

import { useEffect, useState } from 'react';
import type { Currency } from './leak';

// One currency choice for the whole site. The calculator's toggle sets it; every amount marked with the currency
// symbol (calculator, booking form bands, founder figures) follows it. Toggling switches the symbol only.
const KEY = 'ssd-currency';
const EVT = 'ssd-currency';

export const symbol = (c: Currency) => (c === 'USD' ? '$' : '£');

export function readCurrency(): Currency {
  try { return localStorage.getItem(KEY) === 'USD' ? 'USD' : 'GBP'; } catch { return 'GBP'; }
}

export function setCurrency(c: Currency) {
  try { localStorage.setItem(KEY, c); } catch { /* storage blocked: this page only */ }
  window.dispatchEvent(new CustomEvent(EVT, { detail: c }));
}

export function useCurrency(): Currency {
  const [c, setC] = useState<Currency>('GBP');
  useEffect(() => {
    setC(readCurrency());
    const on = (e: Event) => setC((e as CustomEvent<Currency>).detail);
    window.addEventListener(EVT, on);
    return () => window.removeEventListener(EVT, on);
  }, []);
  return c;
}

/** Replace the {cur} token in content strings with the current symbol. */
export const withCur = (s: string, c: Currency) => s.replace(/\{cur\}/g, symbol(c));
