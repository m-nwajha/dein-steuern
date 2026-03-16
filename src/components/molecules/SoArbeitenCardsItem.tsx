import { FC } from 'react';
import { Box, Typography } from '../ui';

interface SoArbeitenCardsItemProps {
    id: number;
    title: string;
    subtitle: string;
    description: string;
}

const SoArbeitenCardsItem: FC<SoArbeitenCardsItemProps> = ({ id, title, subtitle, description }) => {
    return (
        <Box display='flex' direction='col' gap={6} className='w-full'>
            {/* Part 1: The Frame with Title and Number */}
            <Box display='flex' direction='col' gap={2} className='
                w-full
                border-2 border-primary-dark-green
                rounded-tl-lg rounded-tr-[50px] rounded-br-lg rounded-bl-[50px]
                px-4
                py-4
            '>
                <Box display='flex' justifyContent='center' alignItems='center' gap={2}>
                    <Typography
                        variant='h3'
                        className='
                        text-primary-dark-green
                        font-poppins font-bold text-[16px] leading-[36px]
                        text-center
                    '
                    >
                        {title}
                    </Typography>

                    <Typography variant='span' className='
                    text-[#1380824D] -rotate-12
                    font-poppins font-bold text-[24px] leading-[38px]
                    text-center
                '>
                        0{id}
                    </Typography>
                </Box>
                <Typography
                    variant='h4'
                    className='text-[#7A7A7A] font-[400] font-inter-sans text-[15px]'
                >
                    {subtitle}
                </Typography>
            </Box>

            <Typography
                variant='p'
                className='text-[#333333] font-poppins text-[15px] leading-[36px] mx-4'
            >
                {description}
            </Typography>
        </Box >
    );
};

export default SoArbeitenCardsItem;