'use client';

import { FC, ReactNode } from 'react';
import { Box, Typography } from '../ui';
import { Badge } from '../ui/Badge';
import { TEXT_ALIGN } from '@/constants/grid';

type SectionHeadingProps = {
    badge?: string;
    title?: string;
    description?: ReactNode;
    align?: 'center' | 'start' | 'end';
    isJustify?: boolean;
};

const SectionHeading: FC<SectionHeadingProps> = ({ badge, title, description, align = 'center', isJustify }) => {
    return (
        <Box className='mb-8' display='flex' direction='col' justifyContent='center' gap={4} alignItems={align}>
            {badge && <Badge>{badge}</Badge>}
            {title && <Typography variant='h2' size='h2' className='text-[#3A3A3A] font-bold font-inter-sans'>{title}</Typography>}
            {description && <Typography variant='p' className={`text-[#606060] ${TEXT_ALIGN[align]} ${isJustify ? 'text-justify' : ''} leading-[1.9]`}>{description}</Typography>}
        </Box>
    );
};

export default SectionHeading;