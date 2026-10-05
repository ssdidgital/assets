import { ogContentType, ogImage, ogSize } from '@/lib/og';

export const dynamic = 'force-static';
export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'System Switch';

export default function Image() {
  return ogImage('Work', 'What we built, and {{what it collected.}}');
}
