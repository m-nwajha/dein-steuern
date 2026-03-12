import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '../ui';
import { SOCIAL_MEDIA_LINKS } from '@/constants/contactInfo';

const SocialMedia: FC = () => {
    return (
        <Box display='flex' alignItems='center' gap={4}>
            {SOCIAL_MEDIA_LINKS.map((social) => (
                <Link
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                >
                    <Image
                        src={social.icon}
                        alt={`${social.name} icon`}
                        width={24}
                        height={24}
                    />
                </Link>
            ))}
        </Box>
    );
};

export default SocialMedia;
