'use client';

import Image from 'next/image';
import { Box, Button, Container, Grid } from '../ui';
import SectionHeading from '../molecules/SectionHeading';
import { MEHR_ALS_NUR_ZAHLEN } from '@/constants/mehrAlsNurZahlenSection';
const MehrAlsNurZahlenSection = ({ isButton = true }: { isButton?: boolean; }) => {
    return (
        <section id='mehr-als-nur-zahlen' className="py-20">
            <Container variant='xl'>
                <Grid sm={1} md={1} lg={2} gap={6}>
                    <Box display='flex' direction='col' gap={2} justifyContent='center' className='order-1 lg:order-2'>
                        <SectionHeading align='start' isJustify title={MEHR_ALS_NUR_ZAHLEN.title} badge={MEHR_ALS_NUR_ZAHLEN.badge} description={MEHR_ALS_NUR_ZAHLEN.description} />
                        {isButton && <Button variant='solid' as='link' href={MEHR_ALS_NUR_ZAHLEN.button.href} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="ml-1" viewBox="0 0 16 16">
                            <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                            <path d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM1 3a1 1 0 0 1 1-1h2v2H1zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3zm-4-2h3v2H2a1 1 0 0 1-1-1zm3-1H1V8h3zm0-3H1V5h3z" />
                        </svg>}>
                            {MEHR_ALS_NUR_ZAHLEN.button.label}
                        </Button>}
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' className='order-2 lg:order-1 py-9'>
                        <Image src={MEHR_ALS_NUR_ZAHLEN.image} alt="Mehr als nur Zahlen" width={800} height={800} className='h-[300px] md:h-[579px] rounded-tl-[50px] rounded-tr-[8px] rounded-br-[50px] rounded-bl-[8px] object-cover' />
                    </Box>
                </Grid>
            </Container>
        </section>
    );
};

export default MehrAlsNurZahlenSection;