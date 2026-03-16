'use client';

import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import ContactSection from '../organisms/ContactSection';
import CookieBanner from '../organisms/CookieBanner';
import WhatsAppButton from '../atoms/WhatsAppButton';
import ScrollToTopButton from '../atoms/ScrollToTopButton';

const HIDE_CONTACT_PATHS = ['/impressum', '/nutzungsbedingungen', '/datenschutzerklaerung'];

const MainLayout: FC<{ children: ReactNode; }> = ({ children }) => {
    const pathname = usePathname();
    const showContact = !HIDE_CONTACT_PATHS.includes(pathname);

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            {showContact && <ContactSection />}
            <Footer />
            <ScrollToTopButton />
            <CookieBanner />
            <WhatsAppButton />
        </>
    );
};

export default MainLayout;