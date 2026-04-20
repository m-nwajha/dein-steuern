import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/pages/ServicePage';
import { ALL_SERVICES, SERVICES_PAGES } from '@/constants/services';

type ServiceProps = {
    params: Promise<{ id: string; }>;
};

export async function generateStaticParams() {
    return ALL_SERVICES.map(service => ({
        id: service.href.split('/').pop(),
    }));
}

export async function generateMetadata({ params }: ServiceProps): Promise<Metadata> {
    const { id } = await params;
    const data = SERVICES_PAGES[id as keyof typeof SERVICES_PAGES];

    const getDescription = (desc: unknown): string => {
        if (typeof desc === 'string') return desc.slice(0, 160);
        return 'Professionelle Steuerberatung und Buchhaltungsdienstleistungen von Deine Steuern.';
    };

    return {
        title: data?.heading.title
            ? `${data.heading.title} | Deine Steuern`
            : 'Leistungen | Deine Steuern',
        description: getDescription(data?.heading.description),
        openGraph: {
            title: data?.heading.title
                ? `${data.heading.title} | Deine Steuern`
                : 'Leistungen | Deine Steuern',
            description: getDescription(data?.heading.description),
            url: `https://www.deinesteuern.com/services/${id}`,
            siteName: 'Deine Steuern',
            locale: 'de_DE',
            type: 'website',
        },
        alternates: {
            canonical: `https://www.deinesteuern.com/services/${id}`,
        },
    };
}

export default async function Service({ params }: ServiceProps) {
    const { id } = await params;
    const data = SERVICES_PAGES[id as keyof typeof SERVICES_PAGES];

    if (!data) notFound();

    return <ServicePage data={data} currentServiceId={id} />;
}