"use client";

import { motion } from "motion/react";
import type { PointerEvent, ReactNode } from "react";

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
// Hero tiles (`intro`) use the CSS .tile-in animation so they show on first paint; the rest open
// just before they scroll into view, so they are already there when you reach them.
export default function Tile({ children, className = "", delay = 0, intro = false }: Props) {
  // Only apply the default dark background/border when the tile doesn't bring its own colour.
  const bg = /(^|\s)bg-/.test(className) ? "" : "bg-surface";
  const border = /(^|\s)border-(accent|lime)/.test(className) ? "" : "border-line";
  const classes = `group/tile relative overflow-hidden rounded-[28px] border ${border} ${bg} ${className}`;
  const glow = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover/tile:opacity-100 bg-[radial-gradient(420px_circle_at_var(--x,50%)_var(--y,50%),rgb(255_106_43/0.09),transparent_60%)]"
    />
  );

  if (intro) {
    return (
      <div className={`tile-in ${classes}`} style={{ animationDelay: `calc(var(--intro) + ${delay}s)` }} onPointerMove={trackPointer}>
        {glow}
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={classes}
      initial={closed}
      whileInView={open}
      viewport={{ once: true, margin: "0px 0px 220px 0px" }}
      transition={{ duration: 0.5, delay: delay / 2, ease }}
      onPointerMove={trackPointer}
    >
      {glow}
      {children}
    </motion.div>
  );
}
