'use client';

import Image from 'next/image';
import { Box, Typography } from '../ui';
import Link from 'next/link';


type leistungenItemProps = {
    id: number;
    title: string;
    icon: string;
    description: string;
    href: string;
};

const leistungenItem = ({ id, title, icon, description, href }: leistungenItemProps) => {
    return (
        <Box gap={7} display='flex' justifyContent='center' alignItems='center' direction='col' className="rounded-lg shadow-[0px_4px_10px_1px_#00000024] bg-white p-10 px-[30px] cursor-pointer transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0px_8px_15px_1px_#00000030]">
            <Box display='flex' justifyContent='between' alignItems='center' className='w-full'>
                <Box display='flex' justifyContent='center' alignItems='center'  className='w-[57px] h-[57px] rounded-[8px] bg-[#138082]'>
                    <Image src={icon} alt={title} width={32} height={32} />
                </Box>
                <Typography variant='span' size='h1' className='text-[#1380824D] font-bold font-poppins -rotate-12 opacity-100'>
                    0{id}
                </Typography>
            </Box>
            <Box display='flex' direction='col' gap={2} className='w-full'>
                <Typography variant='h5' size='h4' className='font-bold text-[#3A3A3A]'>
                    {title}
                </Typography>
                <Typography variant='p' size='body1' className='text-[#7A7A7A]'>
                    {description}
                </Typography>
            </Box>
            <Link href={href} className='text-left  w-full'>
                <Typography variant='span' size='body1' className='text-[#138082] font-bold flex items-center'>
                    Mehr Erfahren <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="ml-1" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                    </svg>
                </Typography>
            </Link>
        </Box>
    );
};

export default leistungenItem;