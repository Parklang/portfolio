import { addPathToBaseURL } from '@/lib/server-url';
import { ENABLE_BUDDY } from '@/config/site';
import dayjs from 'dayjs';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '/',
    '/blog',
    '/cal',
  ].concat(ENABLE_BUDDY ? ['/buddy'] : []);

  const routesArray = await routes.map(async (route) => ({
    url: await addPathToBaseURL(route),
    lastModified: dayjs().toISOString(),
  }));

  const routesArrayResolved = await Promise.all(routesArray);

  return [...routesArrayResolved];
}

