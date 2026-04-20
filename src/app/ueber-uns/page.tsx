import UeberUnsPage from "@/components/pages/UeberUnsPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Über Uns',
    description: 'Erfahren Sie mehr über unser Team und unsere Mission bei Deine Steuern – Ihr zuverlässiger Partner für Steuerberatung und Buchhaltung.',
    alternates: {
        canonical: '/ueber-uns',
    },
};

export default function UeberUns() {
    return <UeberUnsPage />;
}