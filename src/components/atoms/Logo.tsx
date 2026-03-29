'use client'

import { PATHS } from '@/constants/paths';
import Link from 'next/link';
import { Typography } from '../ui';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href={PATHS.home}>
      <Image src='/assets/images/dilovan-logo.png' alt='logo' width={200} height={200} />
    </Link>
  )
}

export default Logo