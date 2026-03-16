'use client'

import Image from 'next/image';
import { Box, Button, Container, Typography } from '../ui';
import { FC } from 'react';

type StartenSieSectionProps ={
    title: string;
    description: string; 
    button: {
        label?: string;
        href?: string;
    }
}
const StartenSieSection: FC<StartenSieSectionProps> = ({title , description , button}) => {
  return (
    <section id='starten-sie-jetzt' className='py-16'>
        <Container variant='xl'>
            <Box gap={6} display='flex' direction='col' justifyContent='center' alignItems='center' className='w-full bg-primary-dark-green rounded-[8px] px-8 py-15'>
                  <Typography
                      variant='h5'
                      className='font-inter font-bold text-[32px] leading-10 text-center tracking-normal text-background'
                  >
                      {title}
                  </Typography>
                  <Typography
                      variant='p'
                      size='body1'
                      className='font-inter font-normal text-[20px] leading-10 text-center tracking-normal text-background'
                  >
                    {description}
                  </Typography>
                  <Button variant='solid-light' as='link' href={button.href || '#'} isArrow icon={<Image src='/assets/images/arrow-serv-btn.svg' alt='arrow' height={13} width={13} className="transition-all duration-300 group-hover:brightness-0"/>}>
                      {button.label || 'Kostenlose Beratung anfragen'}
                  </Button>
            </Box>
        </Container>
    </section>
  )
}

export default StartenSieSection