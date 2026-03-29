import LegalPage from "@/components/pages/LegalPage";
import { DATENSCHUTZ_CONTENT, DATENSCHUTZ_TITLE } from "@/constants/legal/datenschutz";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: DATENSCHUTZ_TITLE,
};

export default function DatenschutzerklaerungPage() {
    return <LegalPage title={DATENSCHUTZ_TITLE} content={DATENSCHUTZ_CONTENT} />;
}