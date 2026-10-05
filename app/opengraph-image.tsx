import { ogContentType, ogImage, ogSize } from '@/lib/og';

export const dynamic = 'force-static';
export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'System Switch — Growth infrastructure for founder-led businesses';

export default function Image() {
  return ogImage('Growth infrastructure for founder-led businesses', 'We engineer the systems that win clients, and {{win back the buyers you’ve already paid for.}}');
}
