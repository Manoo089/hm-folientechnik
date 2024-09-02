'use client';

import { ANIMATION_FADE_IN } from '@/libs/animations';
import cn from '@/libs/class-name';
import { motion } from 'framer-motion';

export interface Props {}

export default function HeaderBox({}: Props) {
  return (
    <motion.div className={cn('HeaderBox', [])} {...ANIMATION_FADE_IN}>
      <div className="HeaderBox__text">
        <h1 className="HeaderBox__text-title">Folientechnik Hohenadl</h1>
        <p className="HeaderBox__text-text">Verleihen Sie ihrem Fahrzeug Persönlichkeit und Schutz!</p>
      </div>
      <div className="HeaderBox__button">
        <motion.button>Zu den Services</motion.button>
      </div>
    </motion.div>
  );
}
