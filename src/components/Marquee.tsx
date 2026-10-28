"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useRef, type ReactNode } from "react";
import { skills } from "@/data/portfolio";

const items = skills.flatMap((g) => g.items).filter((s, i, all) => all.findIndex((o) => o.name === s.name) === i);

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

// Endless row that drifts on its own, speeds up with scroll speed and flips with scroll direction.
function VelocityRow({ children, baseVelocity }: { children: ReactNode; baseVelocity: number }) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = direction.current * baseVelocity * (delta / 1000);
    if (factor.get() < 0) direction.current = -1;
    else if (factor.get() > 0) direction.current = 1;
    move += direction.current * move * factor.get();
    baseX.set(baseX.get() + move);
  });

  return (
    <div className="overflow-hidden">
      <motion.div className="flex w-max" style={{ x }}>
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="-mx-4 space-y-3 border-y border-line py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:mx-0">
      <VelocityRow baseVelocity={-2}>
        {items.map((s) => (
          <span key={s.name} className="flex items-center gap-6 pr-6 font-display text-3xl font-extrabold whitespace-nowrap uppercase sm:text-4xl">
            {s.name}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </VelocityRow>
      <VelocityRow baseVelocity={2}>
        {items.map(({ name, icon: Icon, color }) => (
          <span key={name} className="mr-3 flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 whitespace-nowrap">
            <Icon style={{ color }} size={18} />
            <span className="text-sm text-muted">{name}</span>
          </span>
        ))}
      </VelocityRow>
    </div>
  );
}
