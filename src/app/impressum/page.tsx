import LegalPage from '@/components/pages/LegalPage';
import { IMPRESSUM_CONTENT, IMPRESSUM_TITLE } from '@/constants/legal/impressum';

export default function ImpressumPage() {
    return <LegalPage title={IMPRESSUM_TITLE} content={IMPRESSUM_CONTENT} />;
}