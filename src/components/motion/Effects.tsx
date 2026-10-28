"use client";

import { MotionConfig, motion, useMotionValue, useScroll, useSpring } from "motion/react";
import { useEffect, type ReactNode } from "react";

// Respects the visitor's "reduce motion" setting for every animation on the site.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

// Thin orange bar at the top that fills as the page is scrolled.
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

// Soft orange glow that follows the mouse on desktop.
export function Spotlight() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 150, damping: 25 });
  const sy = useSpring(y, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 hidden size-[600px] rounded-full bg-[radial-gradient(circle,rgb(255_106_43/0.10),transparent_60%)] lg:block"
      style={{ x: sx, y: sy }}
    />
  );
}
