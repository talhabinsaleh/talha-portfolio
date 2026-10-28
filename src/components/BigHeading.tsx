"use client";

import { motion } from "motion/react";

type Props = {
  top: string;
  bottom: string;
  as?: "h1" | "h2";
};

const ease = [0.22, 1, 0.36, 1] as const;

// Each line slides up from behind a mask; the h1 plays on load, h2s when scrolled into view.
export default function BigHeading({ top, bottom, as = "h2" }: Props) {
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  const trigger = as === "h1" ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "-80px" } };

  return (
    <Tag
      className="font-display text-[2.6rem] leading-[0.95] font-extrabold tracking-tight uppercase sm:text-6xl lg:text-7xl"
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: 0.12 }}
    >
      {[top, bottom].map((line, i) => (
        <span key={line} className="block overflow-hidden pb-1">
          <motion.span
            className={`block ${i === 1 ? "text-faint" : ""}`}
            variants={{
              hidden: { y: "110%", rotate: 3 },
              show: { y: "0%", rotate: 0, transition: { duration: 0.8, ease } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
