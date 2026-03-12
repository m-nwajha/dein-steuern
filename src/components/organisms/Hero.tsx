'use client';

import HeroImagesBox from '../molecules/HeroImagesBox';
import HeroTextBox from '../molecules/HeroTextBox';
import { Container, Grid } from '../ui';

const Hero = () => {
    return (
        <section id='hero' className='relative min-h-[calc(100vh-110px)] lg:h-[calc(100vh-110px)] flex items-center overflow-hidden mt-[130px]'>
            <Container variant='xl'>
                <Grid sm={1} md={1} lg={2} gap={10} alignItem='center'>
                    <HeroTextBox />
                    <HeroImagesBox />
                </Grid>
            </Container>
        </section>
    );
};

export default Hero;