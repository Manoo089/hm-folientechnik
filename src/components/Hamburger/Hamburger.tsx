import cn from '@/libs/class-name';
import { motion } from 'framer-motion';

export interface Props {
  animationObject: any;
  isOpen: boolean;
  onClick: () => void;
}

export default function Hamburger({ isOpen, onClick, animationObject }: Props) {
  const HamburgerBar = () => {
    return (
      <motion.div
        className="Hamburger__bar"
        initial={animationObject.initial}
        animate={animationObject.animate}
      ></motion.div>
    );
  };

  return (
    <div className={cn('Hamburger', [{ isOpen }])} onClick={onClick}>
      <HamburgerBar />
      <HamburgerBar />
      <HamburgerBar />
    </div>
  );
}
