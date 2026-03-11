'use client'

import { PATHS } from '@/constants/paths';
import Link from 'next/link';
import { Typography } from '../ui';

const Logo = () => {
  return (
    <Link href={PATHS.home}><Typography variant='h1' color='black' size='h2' className='font-bold'>Dein Steuern</Typography></Link>
  )
}

export default Logo