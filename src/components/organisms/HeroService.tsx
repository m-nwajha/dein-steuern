'use client';

import { Container } from '../ui';
import BackButton from '../atoms/BackButton';

const HeroService = () => {
    return (
        <section
            id='hero'
            className="min-h-[calc(100vh-110px)] lg:h-[calc(115vh-110px)] overflow-hidden bg-[url('/assets/images/d3697dc9a10cecfb5e0c932cb3f424fb5b164826.jpg')] bg-cover bg-center bg-no-repeat"
        >
            <Container variant='xl' className='mt-[130px]'>
               <BackButton />
            </Container>
        </section>
    );
};

export default HeroService;