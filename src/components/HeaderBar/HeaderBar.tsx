'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import cn from '@/libs/class-name';
import { useScrollWithThreshold } from '@/hooks/useScrollWithThreshold';
import { useScroll } from '@/hooks/useScroll';
import {
  ANIMATION_FADE_IN,
  ANIMATION_HAMBURGER_BARCOLOR,
  ANIMATION_HEADERBAR_BACKGROUND,
  ANIMATION_ICONS_COLOR,
  ANIMATION_SCROLL_LOGO,
} from '@/libs/animations';

import InstagramIcon from '../../resources/icons/Icon-Instagram.svg';
import Firmenlogo from '../../resources/icons/Firmenlogo_Folie_SVG_splitted.svg';
import Icon from '../Icon/Icon';
import Hamburger from '../Hamburger/Hamburger';
import Nav from '../Nav/Nav';

export default function HeaderBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isScrolledLogo = useScrollWithThreshold(100);
  const isScrolled = useScroll(isOpen, setIsOpen);

  const toggleMenu = () => setIsOpen(!isOpen);
  const { initial, animate, transition } = ANIMATION_HEADERBAR_BACKGROUND;

  const checkIsScrolled = isScrolledLogo ? animate : initial;

  return (
    <motion.div className={cn('HeaderBar', [])} initial={initial} animate={checkIsScrolled} transition={transition}>
      <Icon icon={<InstagramIcon />} animationObject={isScrolledLogo && ANIMATION_ICONS_COLOR} />

      {isScrolledLogo ? (
        <motion.div className="HeaderBar__logo" {...ANIMATION_SCROLL_LOGO}>
          <Firmenlogo className="HeaderBar__svg" />
        </motion.div>
      ) : (
        <motion.div className="HeaderBar__logo" {...ANIMATION_FADE_IN}>
          <Firmenlogo />
        </motion.div>
      )}

      <Hamburger
        isOpen={isOpen}
        onClick={toggleMenu}
        animationObject={isScrolledLogo && ANIMATION_HAMBURGER_BARCOLOR}
      />
      <Nav onClick={() => setIsOpen(false)} isOpen={isOpen} />
    </motion.div>
  );
}
