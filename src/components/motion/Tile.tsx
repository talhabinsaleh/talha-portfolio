"use client";

import { motion } from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { useIntroDone } from "./Effects";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  // Hero tiles open right after the intro; the rest open when scrolled into view.
  intro?: boolean;
};

const ease = [0.16, 1, 0.3, 1] as const;
const closed = { clipPath: "inset(10% 10% 10% 10% round 28px)", opacity: 0 };
const open = { clipPath: "inset(0% 0% 0% 0% round 28px)", opacity: 1 };

function trackPointer(e: PointerEvent<HTMLDivElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

// Bento tile: expands open from its centre, and a soft glow follows the pointer on hover.
export default function Tile({ children, className = "", delay = 0, intro = false }: Props) {
  const ready = useIntroDone();
  const trigger = intro
    ? { animate: ready ? open : undefined }
    : { whileInView: open, viewport: { once: true, margin: "-40px" } };

  // Only apply the default dark background/border when the tile doesn't bring its own colour.
  const bg = /(^|\s)bg-/.test(className) ? "" : "bg-surface";
  const border = /(^|\s)border-(accent|lime)/.test(className) ? "" : "border-line";

  return (
    <motion.div
      className={`group/tile relative overflow-hidden rounded-[28px] border ${border} ${bg} ${className}`}
      initial={closed}
      {...trigger}
      transition={{ duration: 0.75, delay, ease }}
      onPointerMove={trackPointer}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover/tile:opacity-100 bg-[radial-gradient(420px_circle_at_var(--x,50%)_var(--y,50%),rgb(255_106_43/0.09),transparent_60%)]"
      />
      {children}
    </motion.div>
  );
}
