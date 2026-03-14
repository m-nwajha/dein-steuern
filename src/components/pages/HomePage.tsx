'use client';

import Hero from '../organisms/Hero';
import KooperationSection from '../organisms/KooperationSection';
import LeistungenSection from '../organisms/LeistungenSection';
import MehrAlsNurZahlenSection from '../organisms/MehrAlsNurZahlenSection';

const HomePage = () => {
    return (
        <>
            <Hero />
            <KooperationSection />
            <LeistungenSection />
            <MehrAlsNurZahlenSection />
        </>
    );
};

export default HomePage;