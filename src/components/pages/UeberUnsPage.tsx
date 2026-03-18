'use client';

import HeroService from '../organisms/HeroService';
import AnimatedSection from '../atoms/AnimatedSection';
import MehrAlsNurZahlenSection from '../organisms/MehrAlsNurZahlenSection';

const UeberUnsPage = () => {
    return (
        <>
            <AnimatedSection direction='down' amount={0.1}>
                <HeroService />
            </AnimatedSection>
            <AnimatedSection direction='up' amount={0.1}>
                <MehrAlsNurZahlenSection isButton={false} />
            </AnimatedSection>
        </>
    );
};

export default UeberUnsPage;