import LegalPage from '@/components/pages/LegalPage';
import { IMPRESSUM_CONTENT, IMPRESSUM_TITLE } from '@/constants/legal/impressum';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: IMPRESSUM_TITLE,
    description: 'Impressum und rechtliche Angaben von Deine Steuern.',
    alternates: {
        canonical: 'https://www.deinesteuern.com/impressum',
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function ImpressumPage() {
    return <LegalPage title={IMPRESSUM_TITLE} content={IMPRESSUM_CONTENT} />;
}