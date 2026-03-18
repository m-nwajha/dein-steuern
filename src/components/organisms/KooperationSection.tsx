'use client';

import SectionHeading from '../molecules/SectionHeading';
import { Container, Grid } from '../ui';
import KooperationItem from '../molecules/KooperationItem';
import { KOOPERATION } from '@/constants/kooperation';

const KooperationSection = () => {
    return (
        <section id='kooperation' className="py-16">
            <Container variant='lg'>
                <SectionHeading badge={KOOPERATION?.badge} title={KOOPERATION?.title} description={KOOPERATION?.description} />
            </Container>
            <div className="relative h-auto md:h-[390px] overflow-hidden py-12 md:py-0 mt-8">
                {/* Decorative Masks - Visible on tablet and laptop for the row effect */}
                <div className="hidden md:block absolute inset-x-0 -top-[140px] md:h-[212px] lg:h-[200px] bg-background rounded-[50%] z-30 pointer-events-none" />
                <div className="hidden md:block absolute inset-x-0 -bottom-[140px] md:h-[212px] lg:h-[200px] bg-background rounded-[50%] z-30 pointer-events-none" />
                
                <Container variant='xl' className="relative z-10">
                    <Grid sm={1} md={4} lg={4} gap={6} className="md:gap-5">
                        {KOOPERATION?.items.map((kooperationItem) => (
                            <KooperationItem key={kooperationItem.id} {...kooperationItem} />
                        ))}
                    </Grid>
                </Container>
            </div>
        </section>
    );
};

export default KooperationSection;