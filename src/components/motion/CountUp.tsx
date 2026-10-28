"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

// Counts from 0 up to the number in `value` (e.g. "10+") when it scrolls into view.
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const target = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "");

  useEffect(() => {
    if (!inView || !ref.current || Number.isNaN(target)) return;
    const node = ref.current;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        node.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix]);

  return <span ref={ref}>{value}</span>;
}
