"use client";

import { MotionConfig, motion, useScroll, useSpring } from "motion/react";
import type { ReactNode } from "react";

// Kept so components can still ask "may I start animating?" — there is no intro screen any more,
// so the answer is always yes and the hero animates the moment the page appears.
export function useIntroDone() {
  return true;
}

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

// Thin bar at the top that fills as the page is scrolled.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-accent to-lime"
      style={{ scaleX }}
    />
  );
}
