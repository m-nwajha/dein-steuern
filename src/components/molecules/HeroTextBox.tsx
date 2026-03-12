'use client';

import { HERO } from '@/constants/heroHomePage';
import { Box, Button, Typography } from '../ui';

const HeroTextBox = () => {
    return (
        <Box display='flex' direction='col' justifyContent='center' alignItems='start' gap={6}>
            <Typography variant='h1' size='h1' className='font-bold text-[#3A3A3A]'>
                <span>{HERO.title.part1}</span> <span className='text-accent'>{HERO.title.part2}</span>
                <br />
                <span className="relative z-10 inline-block after:content-[''] after:absolute after:bg-[#DAF0BB] after:w-full after:h-[12px] after:bottom-0 after:left-0 after:rounded-[38px] after:-z-10">
                    {HERO.title.part3}
                </span>
            </Typography>
            <Typography variant='p' size='body1' color='foreground' className='leading-[38px]'>
                {HERO.description}
            </Typography>
            <Button variant='solid' as='link' href={HERO.cta.href} isArrow icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>}>
                {HERO.cta.text}
            </Button>
        </Box>
    );
};
export default HeroTextBox;