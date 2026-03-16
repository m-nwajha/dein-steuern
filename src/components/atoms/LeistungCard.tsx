import { FC } from 'react';
import Image from 'next/image';
import { Box, Typography } from '../ui';

type LeistungCardProps = {
    title: string;
    href?: string;
};

const LeistungCard: FC<LeistungCardProps> = ({ title }) => {
    return (
        <Box
            display='flex'
            justifyContent='between'
            alignItems='center'
            className='w-full h-[103px] px-5 rounded-lg bg-white shadow-[0px_4px_10px_1px_#00000024] cursor-pointer hover:-translate-y-1 transition-all duration-300 my-4'
        >
            <Typography
                variant='h6'
                size='h6'
                className='font-poppins font-bold text-[18px] leading-[38px] tracking-normal text-[#3A3A3A]'
            >
                {title}
            </Typography>
            <Image
                src='/assets/images/arrow-3.svg'
                alt='arrow'
                width={13}
                height={13}
            />
        </Box>
    );
};

export default LeistungCard;