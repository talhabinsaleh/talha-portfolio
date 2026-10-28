"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

// Fades and lifts its content in the first time it scrolls into view.
export function Reveal({ children, delay = 0, y = 32, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

type ListProps = { children: ReactNode; className?: string };

// A <ul> whose <StaggerItem> children pop in one after another.
export function Stagger({ children, className }: ListProps) {
  return (
    <motion.ul
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.ul>
  );
}

export function StaggerItem({ children, className }: ListProps) {
  return (
    <motion.li className={className} variants={item}>
      {children}
    </motion.li>
  );
}
