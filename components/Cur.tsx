'use client';

import { symbol, useCurrency } from '@/lib/currency';

/** The site currency symbol, following the toggle. */
export function Cur() {
  return <>{symbol(useCurrency())}</>;
}
