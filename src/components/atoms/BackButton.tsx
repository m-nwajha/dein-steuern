'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Image from 'next/image';

interface BackButtonProps {
    href?: string;
    onClick?: () => void;
    className?: string;
}

const BackButton: FC<BackButtonProps> = ({ href, onClick, className = '' }) => {
    const router = useRouter();

    const baseStyles = "flex items-center justify-center gap-2 w-[140px] h-[47px] bg-primary-dark-green text-background-light-yellow rounded-[4px] font-nunito font-bold text-[16px] leading-[36px] hover:bg-primary-yellow hover:text-[#000000] transition-colors duration-300 opacity-100 cursor-pointer group";

    const ArrowIcon = (
        <Image 
            src="/assets/images/ff79a20fd003502998ada1cc1ae02bd816ca869a.gif" 
            alt="Back" 
            width={40} 
            height={40} 
            className="w-[40px] h-[40px] rotate-180 opacity-100 transition-all group-hover:brightness-0" 
        />
    );

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (!href) {
            router.back();
        }
    };

    if (href) {
        return (
            <Link href={href} className={` ${baseStyles} ${className}`}>
                {ArrowIcon}
                Zurück 
            </Link>
        );
    }

    return (
        <button
            onClick={handleClick}
            className={`${baseStyles} ${className}`}
        >
            {ArrowIcon}
            Zurück
        </button>
    );
};

export default BackButton;
