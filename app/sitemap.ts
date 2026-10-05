import { BOOK_IS_EXTERNAL } from '@/lib/links';
import type { MetadataRoute } from 'next';
import { publishedArticles } from '@/lib/digest';
import { SITE_URL } from '@/lib/meta';
import { CASE_STUDIES, published } from '@/lib/work';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // Draft case studies and essays stay out until they carry real content.
  const work = published(CASE_STUDIES).map((c) => '/work/' + c.slug);
  const posts = publishedArticles().map((a) => '/digest/' + a.slug);
  const lists = [...(work.length ? ['/work'] : []), ...(posts.length ? ['/digest'] : [])];
  return ['/', '/approach', '/who-we-work-with', '/about', ...(BOOK_IS_EXTERNAL ? [] : ['/start']), ...lists, ...work, ...posts].map((p) => ({ url: SITE_URL + p }));
}
