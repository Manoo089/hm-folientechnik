'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import cn from '@/libs/class-name';

export interface Props {
  children?: React.ReactNode;
  centered?: boolean;
  heading: string;
  subHeading: string;
  text?: string;
  link?: string;
}

export default function Content({ children, centered, heading, subHeading, text, link }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollRef, { once: true, amount: 1 });
  return (
    <motion.div
      className={cn('Content', [{ centered }])}
      ref={scrollRef}
      style={{ opacity: isInView ? 1 : 0, transition: 'opacity 175ms' }}
    >
      <h2 className="Content__heading">{heading}</h2>
      <h3 className="Content__sub-heading">{subHeading}</h3>
      {text ? <p className="Content__text">{text}</p> : null}

      {link ? (
        <div className="Content__link">
          <a className="Content__link--a" href="#">
            {link}
          </a>
        </div>
      ) : null}

      {children}
    </motion.div>
  );
}
