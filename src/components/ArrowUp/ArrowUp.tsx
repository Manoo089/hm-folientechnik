'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

import cn from '@/libs/class-name';
import ArrowUpIcon from '@/resources/icons/up-long-solid.svg';

export default function ArrowUp() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 100);
    });
  }, [scrollY]);

  return (
    <a href={'#'}>
      <motion.aside
        className={cn('ArrowUp', [])}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowUpIcon />
      </motion.aside>
    </a>
  );
}
