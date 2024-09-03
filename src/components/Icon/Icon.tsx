import { motion } from 'framer-motion';

import cn from '@/libs/class-name';

export interface Props {
  animationObject: any;
  icon: React.ReactNode;
}

export default function Icon({ animationObject, icon }: Props) {
  return (
    <motion.div className={cn('Icon', [])} initial={animationObject.initial} animate={animationObject.animate}>
      {icon}
    </motion.div>
  );
}
