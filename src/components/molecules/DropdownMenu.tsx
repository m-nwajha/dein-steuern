'use client';

import { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NavLink from '../atoms/NavLink';

type DropdownItem = {
    id: number;
    label: string;
    path: string;
    children?: DropdownItem[];
};

type DropdownMenuProps = {
    label: string;
    href: string;
    children: DropdownItem[];
};

// Helper to check if a path belongs to the dropdown recursively
const isPathActive = (items: DropdownItem[], currentPath: string): boolean => {
    return items.some(
        (item) => item.path === currentPath || (item.children && isPathActive(item.children, currentPath))
    );
};

const MenuItem: FC<{ item: DropdownItem; closeMenu: () => void; }> = ({ item, closeMenu }) => {
    const [subOpen, setSubOpen] = useState(false);

    if (!item.children || item.children.length === 0) {
        return (
            <div
                onClick={closeMenu}
                className='px-4 hover:bg-white/40 transition-colors cursor-pointer w-full whitespace-nowrap'
            >
                {/* Remove pointer-events-none so the link inside NavLink is clickable. */}
                <NavLink label={item.label} href={item.path} />
            </div>
        );
    }

    return (
        <div
            className='relative px-4 hover:bg-white/40 transition-colors w-full cursor-pointer flex justify-between items-center whitespace-nowrap border-b border-black/5'
            onMouseEnter={() => setSubOpen(true)}
            onMouseLeave={() => setSubOpen(false)}
        >
            <div onClick={closeMenu}>
                <NavLink label={item.label} href={item.path} />
            </div>
            {/* Arrow indicating sub-menu opens to the right */}
            <Image
                src='/assets/images/arrow.svg'
                alt='arrow'
                width={10}
                height={10}
                className={`transition-transform duration-200 ml-4 -rotate-90 ${subOpen ? 'opacity-100' : 'opacity-50'}`}
            />
            {/* Sub Menu Panel with Smooth transition */}
            <div
                className={`absolute top-0 left-[calc(100%+8px)] bg-[#F5F5F5BF] backdrop-blur-sm rounded-lg min-w-[200px] py-1 shadow-sm border border-white/20 z-50
                transition-all duration-300 origin-top-left
                ${subOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
            >
                {item.children.map((subItem) => (
                    <MenuItem key={subItem.id} item={subItem} closeMenu={closeMenu} />
                ))}
            </div>
        </div>
    );
};

const DropdownMenu: FC<DropdownMenuProps> = ({ label, href, children }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Check if the parent itself or any child route is active
    const isActive = pathname === href || isPathActive(children, pathname);

    // Close on outside click
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <div ref={ref} className='relative flex items-center h-[50px]'>
            {/* Trigger Container */}
            <div
                className='flex items-center gap-1 cursor-pointer w-full h-full'
                onClick={() => setOpen((prev) => !prev)}
            >
                <div className="pointer-events-none flex items-center">
                    <NavLink label={label} href={href} isActive={isActive || open} />
                </div>
                <Image
                    src='/assets/images/arrow.svg'
                    alt='arrow'
                    width={12}
                    height={12}
                    className={`transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
                />
            </div>

            {/* Dropdown panel with Smooth transition */}
            <div
                className={`absolute top-[105%] left-1/2 -translate-x-1/2 bg-[#F5F5F5BF] backdrop-blur-sm rounded-lg min-w-[200px] py-1 shadow-sm border border-white/20 z-50
                transition-all duration-300 origin-top
                ${open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
            >
                {children.map((item) => (
                    <MenuItem key={item.id} item={item} closeMenu={() => setOpen(false)} />
                ))}
            </div>
        </div>
    );
};

export default DropdownMenu;
