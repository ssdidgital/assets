import { ogContentType, ogImage, ogSize } from '@/lib/og';
import { CASE_STUDIES, findCase } from '@/lib/work';

export const dynamic = 'force-static';
export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'System Switch';

export function generateStaticParams() { return CASE_STUDIES.map((x) => ({ slug: x.slug })); }

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const x = findCase((await params).slug)!;
  return ogImage('Case study · ' + x.sector, x.headline.replace(/\[\[(.+?)\]\]/g, '$1'));
}
