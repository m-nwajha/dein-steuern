import Image from 'next/image';
import { Box, Typography } from '../ui';
import Link from 'next/link';
import { CONTACT_INFO } from '@/constants/contactInfo';

const PhoneBox = () => {
  return (
    <Box display='flex' alignItems='center' gap={4}>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        className='w-[50px] h-[50px] -rotate-180 rounded-[8px] border border-[#138082] bg-[#1380820F]'
      >
        <Image src='/assets/images/phone.svg' alt='phone' width={23} height={23} className='-scale-y-100 -scale-x-100' />
      </Box>
      <Box display='flex' direction='col' className='whitespace-nowrap'>
        <Typography variant='span' className='text-black font-bold tracking-[0.10em]'><Link href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</Link></Typography>
        <Typography variant='span'>Kontaktieren Sie uns</Typography>
      </Box>
    </Box>
  );
};

export default PhoneBox;