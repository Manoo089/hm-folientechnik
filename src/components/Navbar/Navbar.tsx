'use client';

import cn from '@/libs/class-name';
import { motion } from 'framer-motion';
import InstagramIcon from '../../resources/icons/Icon-Instagram.svg';
import HamburgerIcon from '../../resources/icons/Icon-Hamburger.svg';
import Firmenlogo from '../../resources/icons/Firmenlogo.svg';

import { ANIMATION_SCROLL_LOGO } from '@/libs/animations';
import { useScroll } from '@/hooks/useScroll';

export default function Navbar() {
  const isScrolled = useScroll(100);

  return (
    <nav className={cn('Navbar', [])}>
      <div className="Navbar__instagram">
        <InstagramIcon />
      </div>

      {isScrolled ? (
        <motion.div className="Navbar__logo" {...ANIMATION_SCROLL_LOGO}>
          <Firmenlogo />
        </motion.div>
      ) : (
        <motion.div className="Navbar__logo">
          <Firmenlogo />
        </motion.div>
      )}

      <div className="Navbar__hamburger">
        <HamburgerIcon />
      </div>
    </nav>
  );
}
