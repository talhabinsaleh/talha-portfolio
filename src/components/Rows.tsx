"use client";

import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import type { TimelineItem } from "@/data/portfolio";

// Editorial list: each row wipes in from the left; on hover it lights up and the title shifts.
export default function Rows({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="mt-10 border-t border-line">
      {items.map((item, i) => (
        <motion.li
          key={item.title}
          className="group relative grid gap-3 border-b border-line px-2 py-8 sm:grid-cols-[180px_1fr_auto] sm:gap-8 sm:px-4"
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, margin: "0px 0px 150px 0px" }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: [0.76, 0, 0.24, 1] }}
        >
          <span
            aria-hidden
            className="absolute inset-0 origin-bottom scale-y-0 bg-surface transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100"
          />
          <p className="relative font-mono text-xs tracking-wider text-accent uppercase sm:pt-2">{item.period}</p>
          <div className="relative transition-transform duration-500 group-hover:translate-x-2">
            <h3 className="font-display text-xl font-semibold sm:text-2xl">{item.title}</h3>
            <p className="mt-1 text-ink/70">{item.place}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.text}</p>
          </div>
          <FiArrowUpRight className="relative hidden size-6 text-faint transition-all duration-500 group-hover:rotate-45 group-hover:text-accent sm:block" />
        </motion.li>
      ))}
    </ol>
  );
}
