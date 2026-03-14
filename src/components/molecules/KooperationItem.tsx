import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '../ui/Box';
import { Typography } from '../ui/Typography';

type KooperationItemProps = {
    title: string;
    image: string;
    href: string;
};

const KooperationItem: FC<KooperationItemProps> = ({ title, image, href }) => {
    return (
        <Link
            href={href}
            className="group relative w-full h-[240px] md:h-[390px] overflow-hidden cursor-pointer transition-all duration-500"
        >
            <Image src={image} alt={title} fill className="object-cover" />
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                className="absolute inset-0 bg-[#363535CC] transition-opacity duration-500 group-hover:opacity-0"
            >
                <Typography variant='h6' color='white' className='font-bold'>
                    {title}
                </Typography>
            </Box>
        </Link>
    );
};

export default KooperationItem;