import type { AnimationProps } from 'framer-motion';

export const ANIMATION_SCROLL_LOGO: AnimationProps = {
  initial: { scale: 1, top: 0 },
  animate: { scale: 0.5, top: -48 },
  transition: { duration: 0.3 },
};
