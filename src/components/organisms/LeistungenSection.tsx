'use client';

import { Container, Grid } from '../ui';
import SectionHeading from '../molecules/SectionHeading';
import { LEISTUNGEN } from '@/constants/leistungen';
import LeistungenItem from '../molecules/leistungenItem';

const LeistungenSection = () => {
    return (
        <section id='leistungen' >
            <Container variant='lg'>
                <SectionHeading badge={LEISTUNGEN?.badge} title={LEISTUNGEN?.title} description={LEISTUNGEN?.description} />
            </Container>
            <Container variant='xl' className="relative z-10">
                <Grid sm={1} md={3} lg={3} gap={12} className="md:gap-5">
                    {LEISTUNGEN?.items.map((leistungItem) => (
                        <LeistungenItem key={leistungItem.id} {...leistungItem} />
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default LeistungenSection;