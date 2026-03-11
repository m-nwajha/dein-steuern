import { FC } from 'react';
import Image from 'next/image';
import { Box } from '../ui';

type MobileMenuToggleProps = {
    onClick?: () => void;
};

const MobileMenuToggle: FC<MobileMenuToggleProps> = ({ onClick }) => {
    return (
        <Box
            onClick={onClick}
            display='flex'
            alignItems='center'
            justifyContent='center'
            className='w-[50px] h-[50px] rounded-[8px] border border-[#138082] bg-[#1380820F] lg:hidden cursor-pointer'
        >
            <Image src='/assets/images/bars.svg' alt='menu' width={29} height={22} />
        </Box>
    );
};

export default MobileMenuToggle;
