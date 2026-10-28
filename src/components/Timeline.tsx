"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import type { TimelineItem } from "@/data/portfolio";

// Vertical timeline whose line draws itself down as you scroll; each dot lights up as it's reached.
export default function Timeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.55"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <ol ref={ref} className="relative mt-10 space-y-10 pl-9 sm:pl-12">
      <span aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-line" />
      <motion.span
        aria-hidden
        className="absolute top-2 bottom-2 left-[6px] w-[3px] origin-top rounded-full bg-gradient-to-b from-accent to-lime"
        style={{ scaleY }}
      />
      {items.map((item) => (
        <li key={item.title} className="group relative">
          <motion.span
            aria-hidden
            className="absolute top-1.5 -left-9 size-4 rounded-full border-2 border-line bg-bg sm:-left-12"
            initial={{ scale: 0.6, borderColor: "#262626", backgroundColor: "#0e0e0e" }}
            whileInView={{ scale: 1, borderColor: "#ff6a2b", backgroundColor: "#ff6a2b" }}
            viewport={{ margin: "0px 0px -45% 0px" }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          />
          <div className="rounded-3xl border border-line bg-surface p-6 transition-colors duration-300 group-hover:border-accent/50">
            <p className="font-mono text-xs tracking-wider text-accent uppercase">{item.period}</p>
            <h3 className="mt-2 font-display text-xl font-semibold">{item.title}</h3>
            <p className="mt-1 font-medium text-ink/80">{item.place}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
