import { MetadataRoute } from 'next';
import { getGeoPages } from '@/lib/geo-data';
import { getServicesPages } from '@/lib/services-data';
import { getBlogPages } from '@/lib/blog-data';

const SITE_URL = 'https://pompesfunebres-alhayaat.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Pages principales (Priorité 1.0 et 0.9)
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/guide`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Pages Services (Priorité 0.9)
  const servicesPages = getServicesPages().map((service) => ({
    url: `${SITE_URL}${service.path}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Pages Géographiques Locales (Priorité 0.8) - Crucial pour le SEO local
  const geoPages = getGeoPages().map((geo) => ({
    url: `${SITE_URL}${geo.path}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Pages du Guide Islamique et Blog (Priorité 0.7)
  const blogPages = getBlogPages().map((blog) => ({
    url: `${SITE_URL}${blog.path}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Pages Légales (Priorité 0.3)
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/politique-confidentialite`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [...mainPages, ...servicesPages, ...geoPages, ...blogPages, ...legalPages];
}
