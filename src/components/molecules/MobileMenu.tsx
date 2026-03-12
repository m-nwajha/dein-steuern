'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import { NAVIGATE_LINKS } from '@/constants/paths';
import NavLink from '../atoms/NavLink';
import PhoneBox from '../atoms/PhoneBox';

type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

const MobileMenuItem: FC<{ item: any; onClose: () => void; }> = ({ item, onClose }) => {
    const [subOpen, setSubOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    return (
        <div className='flex flex-col w-full border-b border-black/5'>
            <div
                className='flex justify-between items-center w-full px-4 py-4 cursor-pointer hover:bg-black/5'
                onClick={() => {
                    if (hasChildren) {
                        setSubOpen(!subOpen);
                    } else {
                        onClose();
                    }
                }}
            >
                {/* Prevent link from capturing click if it has children so we can toggle instead */}
                <div onClick={(e) => hasChildren && e.preventDefault()} className='w-full'>
                    <NavLink label={item.label} href={item.path} />
                </div>
                {hasChildren && (
                    <Image
                        src='/assets/images/arrow.svg'
                        alt='arrow'
                        width={15}
                        height={15}
                        className={`transition-transform duration-200 ${subOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                )}
            </div>

            {/* Nested Items */}
            {hasChildren && (
                <div
                    className={`flex flex-col overflow-hidden transition-all duration-300 bg-white/50 ${subOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    {item.children.map((child: any) => (
                        <div key={child.id} className='pl-6'>
                            <MobileMenuItem item={child} onClose={onClose} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 z-[90] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar / Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-[280px] sm:w-[350px] bg-[#F5F5F5] z-[100] transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Header of Drawer */}
                <div className='flex items-center justify-between p-6 border-b border-black/10'>
                    <span className='font-bold text-lg'>Navigationsmenü</span>
                    <button
                        onClick={onClose}
                        className='w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-black'
                    >
                        ✕
                    </button>
                </div>

                {/* Links */}
                <div className='flex-1 overflow-y-auto py-2'>
                    {NAVIGATE_LINKS.map((link) => (
                        <MobileMenuItem key={link.id} item={link} onClose={onClose} />
                    ))}
                </div>

                {/* Footer with PhoneBox */}
                <div className='p-6 w-full border-t border-black/10'>
                    <PhoneBox />
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
