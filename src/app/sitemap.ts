import { MetadataRoute } from 'next';
import { ALL_SERVICES } from '@/constants/services';

const BASE_URL = 'https://www.deinesteuern.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        { route: '', priority: 1.0 },
        { route: '/ueber-uns', priority: 0.8 },
        { route: '/kontakt', priority: 0.7 },
        { route: '/impressum', priority: 0.3 },
        { route: '/nutzungsbedingungen', priority: 0.3 },
        { route: '/datenschutzerklaerung', priority: 0.3 },
    ].map(({ route, priority }) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date('2026-01-01'),
        changefreq: 'monthly' as const,
        priority,
    }));

    const servicePages = ALL_SERVICES.map(service => ({
        url: `${BASE_URL}${service.href}`,
        lastModified: new Date('2026-01-01'),
        changefreq: 'monthly' as const,
        priority: 0.9,
    }));

    return [...staticPages, ...servicePages];
}