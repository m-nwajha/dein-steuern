'use client';

import { SO_FINDEN_SIE_UNS } from '@/constants/soFindenSieUns';
import { Box, Container } from '../ui';
import SectionHeading from '../molecules/SectionHeading';
import Image from 'next/image';

const SoFindenSieUnsSection = () => {
    return (
        <section className='py-10'>
            <Container variant='xl'>
                <SectionHeading title={SO_FINDEN_SIE_UNS.title} description={SO_FINDEN_SIE_UNS.description} />
                <Box display='flex' justifyContent='center' alignItems='center' className='mt-10 w-full'>
                    <Image src={SO_FINDEN_SIE_UNS.image} alt={SO_FINDEN_SIE_UNS.title} width={700} height={1400} />
                </Box>

            </Container>
        </section>
    );
};

export default SoFindenSieUnsSection;