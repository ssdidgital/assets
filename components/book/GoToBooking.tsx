'use client';

import { useEffect } from 'react';
import { bookHref } from '@/lib/links';

/** In Go High Level mode, /start and its sub-pages forward to the GHL form, so old links keep working. */
export function GoToBooking() {
  const href = bookHref('start-page');
  useEffect(() => { window.location.replace(href); }, [href]);
  return (
    <section className="s-sec s-sec-first"><div className="s-wrap s-center">
      <p className="ss-body">Taking you to the booking form… <a href={href}>Continue</a></p>
    </div></section>
  );
}
