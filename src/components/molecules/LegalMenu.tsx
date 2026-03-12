import { FC, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LEGAL_LINKS } from '@/constants/paths';

const LegalMenu: FC = () => {
    return (
        <ul className='flex flex-wrap justify-center items-center gap-2 md:gap-4'>
            {LEGAL_LINKS.map((link, index) => (
                <Fragment key={link.id}>
                    <li>
                        <Link
                            href={link.path}
                            className='font-poppins text-[14px] font-normal leading-none text-[#7A7A7A] hover:text-[#7A7A7A]/80 transition-colors'
                        >
                            {link.label}
                        </Link>
                    </li>
                    {index < LEGAL_LINKS.length - 1 && (
                        <li>
                            <Image src='/assets/images/Ellipse 2.svg' alt='separator' width={10} height={10} />
                        </li>
                    )}
                </Fragment>
            ))}
        </ul>
    );
};

export default LegalMenu;
