import { ogContentType, ogImage, ogSize } from '@/lib/og';
import { ARTICLES, findArticle } from '@/lib/insights';

export const dynamic = 'force-static';
export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'System Switch';

export function generateStaticParams() { return ARTICLES.map((x) => ({ slug: x.slug })); }

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const x = findArticle((await params).slug)!;
  return ogImage('Insights', x.title.replace(/\[\[(.+?)\]\]/g, '$1'));
}
