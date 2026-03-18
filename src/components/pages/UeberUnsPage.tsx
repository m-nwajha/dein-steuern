'use client';

import HeroService from '../organisms/HeroService';
import AnimatedSection from '../atoms/AnimatedSection';
import MehrAlsNurZahlenSection from '../organisms/MehrAlsNurZahlenSection';
import StartenSieSection from '../organisms/StartenSieSection';
import UnsereLeistungenSection from '../organisms/UnsereLeistungenSection';
import { STARTEN_SIE_JETZT_DURCH, UNSERE_LEISTUNGEN } from '@/constants/services';

const UeberUnsPage = () => {
    return (
        <>
            <AnimatedSection direction='down' amount={0.1}>
                <HeroService />
            </AnimatedSection>
            <AnimatedSection direction='up' amount={0.1}>
                <MehrAlsNurZahlenSection isButton={false} />
            </AnimatedSection>
            <AnimatedSection direction='up' amount={0.1}>
                <StartenSieSection title={STARTEN_SIE_JETZT_DURCH.title} description={STARTEN_SIE_JETZT_DURCH.description} button={STARTEN_SIE_JETZT_DURCH.button} />
            </AnimatedSection>
            <AnimatedSection direction='up' amount={0.1}>
                <UnsereLeistungenSection
                    title={UNSERE_LEISTUNGEN.title}
                    badge={UNSERE_LEISTUNGEN.badge}
                    description={UNSERE_LEISTUNGEN.description}
                    items={UNSERE_LEISTUNGEN.items}
                />
            </AnimatedSection>
        </>
    );
};

export default UeberUnsPage;