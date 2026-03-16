'use client';

import Hero from '../organisms/Hero';
import KooperationSection from '../organisms/KooperationSection';
import LeistungenSection from '../organisms/LeistungenSection';
import MehrAlsNurZahlenSection from '../organisms/MehrAlsNurZahlenSection';
import NetzwerksSection from '../organisms/NetzwerksSection';
import SoFindenSieUnsSection from '../organisms/SoFindenSieUnsSection';
import VideoSection from '../organisms/VideoSection';
import AnimatedSection from '../atoms/AnimatedSection';
import { JSX } from 'react';

type SectionConfig = {
    id: string;
    component: JSX.Element;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    amount?: number;
};

const sections: SectionConfig[] = [
    { id: 'hero', component: <Hero />, direction: 'down', delay: 0, amount: 0.1 },
    { id: 'kooperation', component: <KooperationSection />, direction: 'up', delay: 0, amount: 0.2 },
    { id: 'leistungen', component: <LeistungenSection />, direction: 'up', delay: 0.1, amount: 0.2 },
    { id: 'mehralsnurzahlen', component: <MehrAlsNurZahlenSection />, direction: 'right', delay: 0, amount: 0.2 },
    { id: 'netzwerk', component: <NetzwerksSection />, direction: 'up', delay: 0, amount: 0.2 },
    { id: 'video', component: <VideoSection />, direction: 'right', delay: 0, amount: 0.2 },
    { id: 'sofindensus', component: <SoFindenSieUnsSection />, direction: 'up', delay: 0, amount: 0.2 },
];

const HomePage = () => {
    
    return (
        <>
            {sections.map(({ id, component, direction, delay, amount }) => (
                <AnimatedSection
                    key={id}
                    direction={direction}
                    delay={delay}
                    amount={amount}
                >
                    {component}
                </AnimatedSection>
            ))}
        </>
    );
};

export default HomePage;