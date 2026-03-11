'use client';

import { useState } from 'react';
import Logo from '../atoms/Logo';
import PhoneBox from '../atoms/PhoneBox';
import MobileMenuToggle from '../atoms/MobileMenuToggle';
import Navbar from '../molecules/Navbar';
import MobileMenu from '../molecules/MobileMenu';
import { Box, Container } from '../ui';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='h-27.25 bg-[#FFFEFB80] fixed inset-x-0 top-0 flex items-center z-50'>
      <Container variant='xl'>
        <Box display='flex' justifyContent='between' alignItems='center'>
          {/* Leftside: Logo */}
          <Box>
            <Logo />
          </Box>

          {/* Middle: Navbar (Desktop Only) */}
          <div className='hidden lg:block'>
            <Navbar />
          </div>

          {/* Rightside: Phone & Mobile Toggle */}
          <Box display='flex' alignItems='center' gap={4}>
            <div className='hidden lg:block'>
              <PhoneBox />
            </div>
            {/* Mobile Menu Toggle (Mobile Only) */}
            <MobileMenuToggle onClick={() => setIsMobileMenuOpen(true)} />
          </Box>
        </Box>
      </Container>

      {/* Off-canvas mobile menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;