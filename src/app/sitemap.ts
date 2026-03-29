import { MetadataRoute } from 'next';
import { ALL_SERVICES } from '@/constants/services';

const BASE_URL = 'https://www.deinesteuern.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        '',
        '/ueber-uns',
        '/kontakt',
        '/impressum',
        '/nutzungsbedingungen',
        '/datenschutzerklaerung',
    ].map(route => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
    }));

    const servicePages = ALL_SERVICES.map(service => ({
        url: `${BASE_URL}${service.href}`,
        lastModified: new Date(),
    }));

    return [...staticPages, ...servicePages];
}