import type { MetadataRoute } from 'next';
import { siteConfig, cities } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/layanan`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/cara-pemesanan`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/kontak`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  const cityPages = cities.map((c) => ({
    url: `${base}/kota/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...cityPages];
}
