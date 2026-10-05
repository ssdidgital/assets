'use client';

import { useEffect } from 'react';

/** Marks the header once the page has scrolled, so it can sit transparent over the hero until then. */
export function HeaderScroll() {
  useEffect(() => {
    const head = document.querySelector<HTMLElement>('.s-head');
    if (!head) return;
    const on = () => { if (window.scrollY > 8) head.dataset.scrolled = ''; else delete head.dataset.scrolled; };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => { window.removeEventListener('scroll', on); delete head.dataset.scrolled; };
  }, []);
  return null;
}
