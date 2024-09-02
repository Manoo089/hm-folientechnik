import cn from '@/libs/class-name';
import { motion } from 'framer-motion';

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
