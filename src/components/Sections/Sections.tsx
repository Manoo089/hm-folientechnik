import { useRef } from 'react';
import { motion, MotionValue, useInView, useScroll, useTransform } from 'framer-motion';

import cn from '@/libs/class-name';

export interface Props {
  text: string;
}

export default function Sections({ text }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const isInView = useInView(ref, { amount: 0.7 });

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  const y = useParallax(scrollYProgress, 400);
  return (
    <div className={cn('Sections', [])} ref={ref}>
      <motion.h2 className="Sections__text" style={{ y: isInView ? y : 0, opacity: isInView ? 1 : 0, rotate: '90deg' }}>
        {text}
      </motion.h2>
    </div>
  );
}
