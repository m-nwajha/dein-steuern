'use client';

import { FC, ReactNode } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const MainLayout: FC<{ children: ReactNode; }> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;