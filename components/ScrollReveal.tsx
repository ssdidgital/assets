'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Card groups whose children reveal one after another, 70ms apart.
const GROUPS = '.s-strip,.s-rows,.ss-cards,.s-grid,.s-faq,.s-steplist';

/**
 * Sections and cards fade up 16px over 700ms as they enter the viewport (.s-rv → .s-in in site.css).
 * The homepage hero is excluded. Nothing runs under prefers-reduced-motion, so content just shows.
 */
export function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const root = document.querySelector('main');
    if (!root) return;
    const els: HTMLElement[] = [];
    root.querySelectorAll('.s-sec:not(.s-hero):not(.s-sec-first) .s-wrap, .s-sec-first:not(.s-hero) .s-wrap').forEach((w) => {
      Array.from(w.children).forEach((ch) => {
        if (ch.matches(GROUPS)) Array.from(ch.children).forEach((g, i) => { (g as HTMLElement).style.transitionDelay = i * 70 + 'ms'; els.push(g as HTMLElement); });
        else els.push(ch as HTMLElement);
      });
    });
    root.querySelectorAll<HTMLElement>('.s-illo').forEach((el) => els.push(el));
    const timers: number[] = [];
    // Once revealed, drop the reveal classes so the element's own hover transforms and transitions apply again
    // (.s-rv.s-in { transform: none } would otherwise override the strip lift and similar hovers).
    const settle = (el: HTMLElement) => {
      const ms = el.classList.contains('s-illo') ? 2400 : 750 + (parseInt(el.style.transitionDelay) || 0);
      timers.push(window.setTimeout(() => { el.classList.remove('s-rv', 's-in'); el.style.transitionDelay = ''; }, ms));
    };
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      el.classList.add('s-in');
      io.unobserve(el);
      settle(el);
    }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => { if (!el.classList.contains('s-rv')) { el.classList.add('s-rv'); io.observe(el); } });
    return () => { io.disconnect(); timers.forEach(clearTimeout); };
  }, [pathname]);
  return null;
}
