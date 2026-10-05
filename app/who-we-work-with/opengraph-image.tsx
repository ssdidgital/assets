import { ogContentType, ogImage, ogSize } from '@/lib/og';

export const dynamic = 'force-static';
export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'System Switch';

export default function Image() {
  return ogImage('Who we work with', 'For founder-led businesses that have proven their model and {{outgrown how they run it.}}');
}
