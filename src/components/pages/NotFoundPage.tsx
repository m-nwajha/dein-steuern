'use client';

import { Box, Button, Container, Typography } from '../ui';
import { PATHS } from '@/constants/paths';
import AnimatedSection from '../atoms/AnimatedSection';

const NotFoundPage = () => {
    return (
        <section className="mt-32.5 mb-10">
            <Container variant='lg'>
                <Box display='flex' direction='col' justifyContent='center' alignItems='center' gap={6}>
                    <AnimatedSection direction='down' amount={0.1}>
                        <Typography variant='h1' className="font-inter font-bold text-[120px] leading-none text-accent">
                            404
                        </Typography>
                    </AnimatedSection>

                    <AnimatedSection direction='up' delay={0.2}>
                        <Box display='flex' direction='col' alignItems='center' gap={3}>
                            <Typography variant='h2' className="font-inter font-bold text-[32px] text-[#3A3A3A]">
                                Seite nicht gefunden
                            </Typography>
                            <Typography variant='p' className="font-poppins font-normal text-[16px] text-foreground leading-[1.8] text-center">
                                Die gesuchte Seite existiert nicht oder wurde verschoben. Bitte überprüfen Sie die URL oder kehren Sie zur Startseite zurück.
                            </Typography>
                        </Box>
                    </AnimatedSection>

                    <AnimatedSection direction='up' delay={0.4}>
                        <Button
                            as='link'
                            variant='solid'
                            href={PATHS.home}
                        >
                            Zurück zur Startseite
                        </Button>
                    </AnimatedSection>
                </Box>
            </Container>
        </section>
    );
};

export default NotFoundPage;