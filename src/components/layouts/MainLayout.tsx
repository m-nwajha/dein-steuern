'use client';

import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import ContactSection from '../organisms/ContactSection';

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
        </>
    );
};

export default MainLayout;