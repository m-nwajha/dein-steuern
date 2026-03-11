'use client';

import Image from 'next/image';
import { NAVIGATE_LINKS } from '@/constants/paths';
import { Box } from '../ui';
import NavLink from '../atoms/NavLink';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
    return (
        <Box>
            <nav className='bg-[#F5F5F5BF] w-[594px] h-[50px] rounded-[8px] flex items-center justify-center gap-15 px-6'>
                {NAVIGATE_LINKS.map((link) =>
                    link.children ? (
                        <DropdownMenu
                            key={link.id}
                            label={link.label}
                            href={link.path}
                            children={link.children}
                        />
                    ) : (
                        <Box key={link.id} display='flex' alignItems='center' gap={2}>
                            <NavLink label={link.label} href={link.path} />
                        </Box>
                    )
                )}
            </nav>
        </Box>
    );
};

export default Navbar;