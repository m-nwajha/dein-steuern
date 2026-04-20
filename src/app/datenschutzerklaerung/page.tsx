import LegalPage from "@/components/pages/LegalPage";
import { DATENSCHUTZ_CONTENT, DATENSCHUTZ_TITLE } from "@/constants/legal/datenschutz";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: DATENSCHUTZ_TITLE,
    description: 'Informationen zum Datenschutz und zur Verarbeitung Ihrer personenbezogenen Daten bei Deine Steuern.',
    alternates: {
        canonical: 'https://www.deinesteuern.com/datenschutzerklaerung',
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function DatenschutzerklaerungPage() {
    return <LegalPage title={DATENSCHUTZ_TITLE} content={DATENSCHUTZ_CONTENT} />;
}