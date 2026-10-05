import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/meta';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/approach', '/who-we-work-with', '/about', '/start'].map((p) => ({ url: SITE_URL + p }));
}
