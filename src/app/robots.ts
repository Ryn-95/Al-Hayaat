import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /merci porte déjà un noindex : ne pas la bloquer ici, sinon Google
      // ne peut pas lire la balise.
      disallow: ['/api/', '/admin/', '/_next/'],
    },
    sitemap: `${SITE_CONFIG.baseUrl}/sitemap.xml`,
  };
}
