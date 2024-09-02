import type { AnimationProps } from 'framer-motion';

export const ANIMATION_SCROLL_LOGO: AnimationProps = {
  initial: { scale: 1, top: 0 },
  animate: { scale: 0.5, top: -40 },
  transition: { duration: 0.3 },
};

export const ANIMATION_FADE_IN: AnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
};

export const ANIMATION_MENU_TRANSLATE: AnimationProps = {
  initial: { translateX: '150%' },
  animate: { translateX: '0%' },
  transition: { duration: 0.3 },
};

export const ANIMATION_HEADERBAR_BACKGROUND: AnimationProps = {
  initial: { backgroundColor: 'rgba(248, 140, 2, 1)', height: '110px' },
  animate: { backgroundColor: 'rgba(0, 0, 0, 0.9)', height: '80px' },
  transition: { duration: 0.3, height: { duration: 0.1 } },
};

export const ANIMATION_HAMBURGER_BARCOLOR: AnimationProps = {
  initial: { backgroundColor: '#fff', fill: '#fff' },
  animate: { backgroundColor: 'rgba(250, 250, 250, 0.5)', fill: 'rgba(250, 250, 250, 0.5)' },
  transition: { duration: 0.3 },
};

export const ANIMATION_ICONS_COLOR: AnimationProps = {
  initial: { color: '#fff' },
  animate: { color: 'rgba(250, 250, 250, 0.5)' },
  transition: { duration: 0.3 },
};
