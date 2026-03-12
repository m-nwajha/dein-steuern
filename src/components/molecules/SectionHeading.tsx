'use client';

import { FC } from 'react';
import { Box, Typography } from '../ui';
import { Badge } from '../ui/Badge';
import { TEXT_ALIGN } from '@/constants/grid';

type SectionHeadingProps = {
    badge?: string;
    title?: string;
    description?: string;
    align?: 'center' | 'start' | 'end';
};

const SectionHeading: FC<SectionHeadingProps> = ({ badge, title, description, align = 'center' }) => {
    return (
        <Box className='mb-8' display='flex' direction='col' justifyContent='center' gap={4} alignItems={align}>
            {badge && <Badge>{badge}</Badge>}
            {title && <Typography variant='h2' size='h2' className='text-[#3A3A3A] font-bold font-inter-sans'>{title}</Typography>}
            {description && <Typography variant='p' className={`${TEXT_ALIGN[align]}`}>{description}</Typography>}
        </Box>
    );
};

export default SectionHeading;