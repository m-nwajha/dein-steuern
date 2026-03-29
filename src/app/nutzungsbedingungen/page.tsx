import LegalPage from '@/components/pages/LegalPage';
import { NUTZUNGSBEDINGUNGEN_CONTENT, NUTZUNGSBEDINGUNGEN_TITLE } from '@/constants/legal/nutzungsbedingungen';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: NUTZUNGSBEDINGUNGEN_TITLE,
};

export default function NutzungsbedingungenPage() {
    return <LegalPage title={NUTZUNGSBEDINGUNGEN_TITLE} content={NUTZUNGSBEDINGUNGEN_CONTENT} />;
}