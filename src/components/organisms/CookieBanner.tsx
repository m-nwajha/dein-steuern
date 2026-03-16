'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '../ui';

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) setVisible(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookie-consent', 'rejected');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="container mx-auto px-4 max-w-[70rem] fixed bottom-4 left-0 right-0 z-50 rounded-[8px] bg-[#1A1A1A] px-6 py-4">
            <Box display='flex' alignItems='center' justifyContent='between' gap={4} className='flex-col md:flex-row'>
                <Box display='flex' direction='col' alignItems='center' gap={3} className='flex-1 md:flex-row'>
                    <span className='text-2xl'>🍪</span>
                    <Typography variant='p' size='body2' className='text-white leading-[1.6]'>
                        <strong>Wir verwenden Cookies bei der Erbringung unserer Dienste.</strong> Um mehr über die von uns verwendeten Cookies sowie Informationen über Ihre Präferenzen und Opt-out-Möglichkeiten zu erfahren, klicken Sie bitte hier. Durch die Nutzung unserer Plattform stimmen Sie der Verwendung von Cookies zu.
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center' gap={3} className='flex-shrink-0'>
                    <button
                        onClick={handleReject}
                        className='text-white font-nunito font-normal text-[14px] hover:opacity-70 transition-opacity duration-300 whitespace-nowrap'
                    >
                        Ablehnen
                    </button>
                    <Button variant='outline' onClick={handleAccept} className='whitespace-nowrap'>
                        Annehmen
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default CookieBanner;