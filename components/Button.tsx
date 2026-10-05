import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Common = { variant?: Variant; size?: 'md' | 'sm'; className?: string; children: ReactNode };
type AsLink = Common & { href: string };
type AsButton = Common & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(' ');

/**
 * Design-system button. Primary buttons carry the switch toggle; add `s-blink`
 * (as every "Book a systems audit" primary does) to get the gold knob that slides on hover/focus.
 */
export function Button(props: AsLink | AsButton) {
  const { variant = 'secondary', size = 'md', className, children } = props;
  const cls = cx('ss-btn', 'ss-btn-' + variant, size === 'sm' && 'ss-btn-sm', className);
  const sw = variant === 'primary' ? <span className="ss-btn-switch" aria-hidden="true" /> : null;
  if (props.href !== undefined) {
    return <Link className={cls} href={props.href}>{children}{sw}</Link>;
  }
  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, type, ...rest } = props;
  return <button type={type || 'button'} className={cls} {...rest}>{children}{sw}</button>;
}

/** The one conversion CTA. Every primary call to action reads "Book a systems audit". */
export function BookButton() {
  return <Button variant="primary" className="s-blink" href="/start">Book a systems audit</Button>;
}
