'use client';

import HeroTextBox from '../molecules/HeroTextBox';
import { Box, Container, Grid } from '../ui';

const Hero = () => {
    return (
        <section id='hero' className='h-[100vh] flex items-center'>
            <Container variant='xl'>
                <Grid sm={1} md={1} lg={2} gap={4} alignItem='center'>
                    <HeroTextBox />
                    <Box>kdfk</Box>
                </Grid>
            </Container>
        </section>
    );
};

export default Hero;