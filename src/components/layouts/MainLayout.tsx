'use client';

import { FC, ReactNode } from 'react';
import Header from '../organisms/Header';

const MainLayout: FC<{ children: ReactNode; }> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    );
};

export default MainLayout;