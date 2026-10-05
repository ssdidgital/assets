import type { MetadataRoute } from 'next';
import { publishedArticles } from '@/lib/insights';
import { SITE_URL } from '@/lib/meta';
import { CASE_STUDIES, published } from '@/lib/work';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // Draft case studies and essays stay out until they carry real content.
  const work = published(CASE_STUDIES).map((c) => '/work/' + c.slug);
  const posts = publishedArticles().map((a) => '/insights/' + a.slug);
  const lists = [...(work.length ? ['/work'] : []), ...(posts.length ? ['/insights'] : [])];
  return ['/', '/approach', '/who-we-work-with', '/about', '/start', ...lists, ...work, ...posts].map((p) => ({ url: SITE_URL + p }));
}
