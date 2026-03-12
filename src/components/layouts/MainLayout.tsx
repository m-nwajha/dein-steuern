'use client';

import { FC, ReactNode } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import ContactSection from '../organisms/ContactSection';

const MainLayout: FC<{ children: ReactNode; }> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <ContactSection />
            <Footer />
        </>
    );
};

export default MainLayout;