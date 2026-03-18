'use client';

import Logo from '../atoms/Logo';
import FooterMenu from '../molecules/FooterMenu';
import SocialMedia from '../molecules/SocialMedia';
import LegalMenu from '../molecules/LegalMenu';
import { Box, Container, Typography } from '../ui';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-background'>
            <Container variant='xl'>
                <Box>
                    <Box display='flex' direction='col' justifyContent='center' alignItems='center' gap={5} className='py-7'>
                        <Logo />
                        <FooterMenu />
                        <SocialMedia />
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' direction='col' gap={5} className='py-7 border-t-[0.5px] border-accent/50 w-full'>
                        <LegalMenu />
                        <Typography className='text-[#283646] font-roboto font-[400]'>© {new Date().getFullYear()} Deine Steuern – <br className='block md:hidden' /> Design und Entwicklung: <Link href='https://orionlens.net/' target='_blank' rel='noopener noreferrer'>OrionLens</Link></Typography>
                    </Box>
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;