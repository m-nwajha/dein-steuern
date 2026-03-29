import LegalPage from '@/components/pages/LegalPage';
import { IMPRESSUM_CONTENT, IMPRESSUM_TITLE } from '@/constants/legal/impressum';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: IMPRESSUM_TITLE,
};

export default function ImpressumPage() {
    return <LegalPage title={IMPRESSUM_TITLE} content={IMPRESSUM_CONTENT} />;
}