'use client';

import Hero from '../organisms/Hero';
import KooperationSection from '../organisms/KooperationSection';
import LeistungenSection from '../organisms/LeistungenSection';
import MehrAlsNurZahlenSection from '../organisms/MehrAlsNurZahlenSection';
import NetzwerksSection from '../organisms/NetzwerksSection';
import SoFindenSieUnsSection from '../organisms/SoFindenSieUnsSection';
import VideoSection from '../organisms/VideoSection';

const HomePage = () => {
    return (
        <>
            <Hero />
            <KooperationSection />
            <LeistungenSection />
            <MehrAlsNurZahlenSection />
            <NetzwerksSection />
            <VideoSection />
            <SoFindenSieUnsSection />
        </>
    );
};

export default HomePage;