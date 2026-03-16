'use client';

import { Box, Container, Typography } from '../ui';

const LoadingPage = () => {
    return (
        <section className="fixed inset-0 w-full h-full z-524848452855 bg-background flex items-center justify-center">
            <Container variant='lg'>
                <Box display='flex' direction='col' justifyContent='center' alignItems='center' gap={8}>
                    {/* Animated Logo Dots */}
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-accent animate-bounce [animation-delay:0ms]" />
                        <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:150ms]" />
                        <div className="w-4 h-4 rounded-full bg-secondary animate-bounce [animation-delay:300ms]" />
                    </div>

                    <Typography variant='p' className="font-poppins font-normal text-[14px] text-foreground tracking-widest uppercase animate-pulse">
                        Wird geladen...
                    </Typography>
                </Box>
            </Container>
        </section>
    );
};

export default LoadingPage;