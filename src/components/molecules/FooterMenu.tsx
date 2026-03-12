import Link from 'next/link';
import { FOOTER_LINKS } from '@/constants/paths';

const FooterMenu = () => {
    return (
        <ul className='flex flex-col md:flex-row items-center gap-6 md:gap-8'>
            {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                    <Link
                        href={link.path}
                        className='font-roboto text-[16px] font-normal leading-[1.5] text-[#283646] hover:text-[#283646]/80 transition-colors'
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default FooterMenu;