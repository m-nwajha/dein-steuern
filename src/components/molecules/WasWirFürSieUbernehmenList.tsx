// src/components/molecules/WasWirFürSieUbernehmenList.tsx
import { FC } from 'react';
import { Box, Typography } from '../ui';
import { CN } from '@/utils/className';

export type WasWirFürSieUbernehmenListProps = {
    title: string;
    items: string[];
    description: string;
    theme?: 'light' | 'dark';
    side?: 'left' | 'right';
};

const THEME_STYLES = {
    light: {
        bg: 'bg-[#1380821A]',
        title: 'text-[#3A3A3A]',
        text: 'text-[#3A3A3A]',
        list: 'text-[#3A3A3A]',
    },
    dark: {
        bg: 'bg-[#333333]',
        title: 'text-background',
        text: 'text-background',
        list: 'text-background',
    },
};

const WasWirFürSieUbernehmenList: FC<WasWirFürSieUbernehmenListProps> = ({
    title,
    items,
    description,
    theme = 'light',
    side = 'left',
}) => {
    const styles = THEME_STYLES[theme];

    return (
        <Box
            gap={5}
            display='flex'
            direction='col'
            justifyContent='start'
            alignItems='start'
            className={CN(
                styles.bg,
                'py-12 h-full',
                side === 'left' ? 'px-7 lg:pl-30 lg:pr-10' : 'px-7 lg:pr-30 lg:pl-10'            )}
        >
            <Typography
                variant='h5'
                size='h6'
                className={CN('font-poppins font-bold', styles.title)}
            >
                {title}
            </Typography>

            <ul className={CN('list-disc list-inside', styles.list)}>
                {items.map((item, i) => (
                    <li key={i}>
                        <Typography
                            variant='span'
                            size='body1'
                            className={CN(
                                'font-poppins font-normal text-[16px] leading-[41px] tracking-normal',
                                styles.text
                            )}
                        >
                            {item}
                        </Typography>
                    </li>
                ))}
            </ul>

            <Typography
                variant='p'
                size='body1'
                className={CN(
                    'font-poppins font-normal text-[16px] leading-[25px] tracking-normal',
                    styles.text
                )}
            >
                {description}
            </Typography>
        </Box>
    );
};

export default WasWirFürSieUbernehmenList;