import ContactSection from '@/components/organisms/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Kontakt",
    description: "Nehmen Sie Kontakt mit unserem Steuerberatungsteam auf. Wir helfen Ihnen bei allen steuerlichen Fragen.",
};

export default function KontaktPage() {
    return <div className='mt-20'>
        <ContactSection />
    </div>
}