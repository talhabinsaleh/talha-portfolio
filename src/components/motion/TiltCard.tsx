"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { useIntroDone } from "./Effects";

const ease = [0.76, 0, 0.24, 1] as const;

// Wipes open from the bottom after the intro, then tilts in 3D toward the mouse.
export default function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ready = useIntroDone();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial={{ clipPath: "inset(100% 0% 0% 0% round 2rem)" }}
      animate={ready ? { clipPath: "inset(0% 0% 0% 0% round 2rem)" } : undefined}
      transition={{ duration: 1.1, ease }}
    >
      {children}
    </motion.div>
  );
}

// Image wrapper that zooms out from 1.35x to 1x as the card opens.
export function IntroZoom({ children, className }: { children: ReactNode; className?: string }) {
  const ready = useIntroDone();
  return (
    <motion.div
      className={className}
      initial={{ scale: 1.35 }}
      animate={ready ? { scale: 1 } : undefined}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Fades in out of a blur once the intro is done.
export function BlurIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ready = useIntroDone();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(14px)" }}
      animate={ready ? { opacity: 1, filter: "blur(0px)" } : undefined}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Reveals its content with a circle that grows out of the bottom-right corner.
export function CircleReveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ready = useIntroDone();
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "circle(0% at 100% 100%)" }}
      animate={ready ? { clipPath: "circle(150% at 100% 100%)" } : undefined}
      transition={{ duration: 1.2, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
