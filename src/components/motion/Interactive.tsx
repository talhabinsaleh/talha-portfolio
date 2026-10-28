"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState, useSyncExternalStore, type PointerEvent, type ReactNode } from "react";

// Pulls its content toward the mouse while hovered, then springs back.
export function Magnetic({ children, strength = 0.3, className }: { children: ReactNode; strength?: number; className?: string }) {
  const x = useSpring(0, { stiffness: 220, damping: 14, mass: 0.4 });
  const y = useSpring(0, { stiffness: 220, damping: 14, mass: 0.4 });

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  return (
    <motion.div
      className={className}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

// Wraps a grid; each child gets --x/--y set to the pointer position so it can draw a glow there.
export function SpotlightGroup({ children, className }: { children: ReactNode; className?: string }) {
  function onMove(e: PointerEvent<HTMLUListElement>) {
    for (const el of Array.from(e.currentTarget.children) as HTMLElement[]) {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - r.left}px`);
      el.style.setProperty("--y", `${e.clientY - r.top}px`);
    }
  }
  return (
    <ul className={`group/spot ${className ?? ""}`} onPointerMove={onMove}>
      {children}
    </ul>
  );
}

// Class string for a SpotlightGroup child: a soft orange glow that follows the pointer.
export const spotlightItem =
  "relative overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[radial-gradient(220px_circle_at_var(--x,50%)_var(--y,50%),rgb(255_106_43/0.16),transparent_70%)] before:opacity-0 before:transition-opacity before:duration-300 group-hover/spot:before:opacity-100";

const subscribe = (cb: () => void) => {
  const mq = window.matchMedia("(pointer: fine)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

type Variant = "default" | "link" | "view";

// Custom cursor for mouse users: a dot plus a trailing ring that grows over links
// and turns into a "View" bubble over elements marked data-cursor="view".
export function Cursor() {
  const fine = useSyncExternalStore(subscribe, () => window.matchMedia("(pointer: fine)").matches, () => false);
  const [variant, setVariant] = useState<Variant>("default");
  const [hidden, setHidden] = useState(true);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (!fine) return;
    const root = document.documentElement;
    root.classList.add("has-custom-cursor");
    const move = (e: globalThis.PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const over = (e: globalThis.PointerEvent) => {
      const t = e.target as HTMLElement;
      setVariant(t.closest("[data-cursor='view']") ? "view" : t.closest("a,button,[role='button']") ? "link" : "default");
    };
    const leave = () => setHidden(true);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    document.addEventListener("pointerleave", leave);
    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.removeEventListener("pointerleave", leave);
    };
  }, [fine, x, y]);

  if (!fine) return null;

  const ring = {
    default: { width: 36, height: 36, backgroundColor: "rgba(255,106,43,0)", borderColor: "rgba(244,244,242,0.6)" },
    link: { width: 64, height: 64, backgroundColor: "rgba(255,106,43,0.15)", borderColor: "rgba(255,106,43,0.9)" },
    view: { width: 96, height: 96, backgroundColor: "rgba(255,106,43,1)", borderColor: "rgba(255,106,43,1)" },
  }[variant];

  return (
    <div aria-hidden className={`pointer-events-none fixed inset-0 z-[150] transition-opacity ${hidden ? "opacity-0" : "opacity-100"}`}>
      <motion.div
        className="absolute top-0 left-0 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[1.5px] font-display text-sm font-bold text-neutral-950 uppercase"
        style={{ x: rx, y: ry }}
        animate={ring}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {variant === "view" && "View"}
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ x, y }}
        animate={{ scale: variant === "view" ? 0 : 1 }}
      />
    </div>
  );
}
