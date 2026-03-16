// src/components/atoms/WhatsAppButton.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CONTACT_INFO } from '@/constants/contactInfo';
import { Box } from '../ui';

const WhatsAppButton = () => {
    const [hovered, setHovered] = useState(false);
    const phone = CONTACT_INFO.phone.replace(/\s+/g, '');
    const url = `https://wa.me/${phone}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <span className="bg-white text-[#1A1A1A] font-nunito font-normal text-[14px] px-4 py-2 rounded-lg shadow-md whitespace-nowrap animate-fade-in">
                    Kontaktieren Sie uns
                </span>
            )}
            <Box display='flex' alignItems='center' justifyContent='center' className="w-[66px] h-[66px] bg-[#25D366] hover:bg-[#13A047] rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 shadow-[0px_4px_4px_0px_#00000040]">
                <Image
                    src="/assets/images/whatsapp.svg"
                    alt="WhatsApp"
                    width={39}
                    height={39}
                />
            </Box>
        </a>
    );
};

export default WhatsAppButton;