import { ogContentType, ogImage, ogSize } from '@/lib/og';

export const dynamic = 'force-static';
export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'System Switch — Sales infrastructure for founder-led businesses';

export default function Image() {
  return ogImage('Sales infrastructure for founder-led businesses', 'We build the systems that turn leads into sales: the new ones, and {{the ones you’ve already paid for.}}');
}
