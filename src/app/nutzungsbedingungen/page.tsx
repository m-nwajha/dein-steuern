import LegalPage from '@/components/pages/LegalPage';
import { NUTZUNGSBEDINGUNGEN_CONTENT, NUTZUNGSBEDINGUNGEN_TITLE } from '@/constants/legal/nutzungsbedingungen';

export default function NutzungsbedingungenPage() {
    return <LegalPage title={NUTZUNGSBEDINGUNGEN_TITLE} content={NUTZUNGSBEDINGUNGEN_CONTENT} />;
}