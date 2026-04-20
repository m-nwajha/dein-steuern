import LegalPage from '@/components/pages/LegalPage';
import { NUTZUNGSBEDINGUNGEN_CONTENT, NUTZUNGSBEDINGUNGEN_TITLE } from '@/constants/legal/nutzungsbedingungen';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: NUTZUNGSBEDINGUNGEN_TITLE,
    description: 'Nutzungsbedingungen für die Verwendung der Website von Deine Steuern.',
    alternates: {
        canonical: 'https://www.deinesteuern.com/nutzungsbedingungen',
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function NutzungsbedingungenPage() {
    return <LegalPage title={NUTZUNGSBEDINGUNGEN_TITLE} content={NUTZUNGSBEDINGUNGEN_CONTENT} />;
}