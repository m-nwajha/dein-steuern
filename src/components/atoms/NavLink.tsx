'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CN } from '@/utils/className';

type NavLinkProps = {
    label: string;
    href: string;
    isActive?: boolean;
};

const NavLink: FC<NavLinkProps> = ({ label, href, isActive }) => {
    const pathname = usePathname();
    const active = isActive ?? (pathname === href);

    return (
        <Link
            href={href}
            className={CN(
                'font-nunito text-[1rem] font-normal leading-none text-center text-[#AEAEB2] transition-colors hover:text-[#AEAEB2]/90 relative h-[50px] flex items-center',
                active && [
                    'text-black hover:text-black/90',
                    'after:content-[\'\']',
                    'after:absolute',
                    'after:bottom-0',
                    'after:left-1/2',
                    'after:-translate-x-1/2',
                    'after:w-[39px]',
                    'after:h-[3px]',
                    'after:bg-[#138082]',
                    'after:rounded-[11px]',
                ]
            )}
        >
            {label}
        </Link>
    );
};

export default NavLink;