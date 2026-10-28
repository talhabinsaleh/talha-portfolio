"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { navLinks, profile } from "@/data/portfolio";

const WORD = "TALHA.";

function Letter({ ch, i, progress }: { ch: string; i: number; progress: MotionValue<number> }) {
  const y = useTransform(progress, [i * 0.06, 0.55 + i * 0.06], ["105%", "0%"]);
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span className="inline-block" style={{ y }}>
        {ch}
      </motion.span>
    </span>
  );
}

// Giant name whose letters rise one by one as the footer scrolls into view.
export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  return (
    <footer ref={ref} className="relative mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p
          aria-label="Talha"
          className="font-display text-[22vw] leading-[0.85] font-extrabold tracking-tighter text-surface-2 uppercase select-none lg:text-[12rem]"
        >
          {[...WORD].map((ch, i) => (
            <Letter key={i} ch={ch} i={i} progress={scrollYProgress} />
          ))}
        </p>
        <div className="mt-8 flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
