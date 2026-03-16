import { notFound } from 'next/navigation';
import ServicePage from '@/components/pages/ServicePage';
import { SERVICES_PAGES } from '@/constants/services';

type ServiceProps = {
    params: Promise<{ id: string; }>;
};

export default async function Service({ params }: ServiceProps) {
    const { id } = await params;
    const data = SERVICES_PAGES[id as keyof typeof SERVICES_PAGES];

    if (!data) notFound();

    return <ServicePage data={data} />;
}