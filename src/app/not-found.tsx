import NotFoundPage from '@/components/pages/NotFoundPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "404 Seite nicht gefunden",
};
export default function NotFound() {
    return <NotFoundPage />
}