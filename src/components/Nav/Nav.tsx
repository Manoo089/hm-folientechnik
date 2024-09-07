import { AnimatePresence, motion } from 'framer-motion';

import cn from '@/libs/class-name';
import { ANIMATION_MENU_TRANSLATE } from '@/libs/animations';

import NavButton from './NavButton';

export interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export default function Nav({ isOpen, onClick }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav className={cn('Nav', [])} {...ANIMATION_MENU_TRANSLATE}>
          <div className="Nav__links">
            <a href="#">
              <NavButton onClick={onClick} label="Home" />
            </a>
            <a href="#about">
              <NavButton onClick={onClick} label="About" />
            </a>
            <a href="#services">
              <NavButton onClick={onClick} label="Services" />
            </a>
            <a href="#contact">
              <NavButton onClick={onClick} label="Kontakt" />
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
