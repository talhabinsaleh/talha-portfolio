"use client";

import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useIntroDone } from "./Effects";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]=+*#%&$";

// Rewrites el's text with random glyphs that resolve left to right into `to`.
export function scramble(el: HTMLElement, to: string, duration = 550) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = to;
    return () => {};
  }
  const start = performance.now();
  let raf = 0;
  const step = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    const revealed = Math.floor(p * to.length);
    let out = "";
    for (let i = 0; i < to.length; i++) {
      out += i < revealed || to[i] === " " ? to[i] : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }
    el.textContent = out;
    if (p < 1) raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
  return () => cancelAnimationFrame(raf);
}

// Text that scrambles and decodes itself on hover.
export function ScrambleText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  return (
    <span ref={ref} className={className} onMouseEnter={() => ref.current && scramble(ref.current, text)}>
      {text}
    </span>
  );
}

// Cycles through words, decoding each new one with the scramble effect.
export function ScrambleWords({ words, className }: { words: string[]; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [index, setIndex] = useState(0);
  const ready = useIntroDone();

  useEffect(() => {
    if (!ready) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [ready, words.length]);

  useEffect(() => {
    if (!ref.current || !ready) return;
    return scramble(ref.current, words[index], 700);
  }, [index, ready, words]);

  return (
    <span ref={ref} className={className}>
      {words[0]}
    </span>
  );
}

const ease = [0.16, 1, 0.3, 1] as const;

// Hero headline: every letter flips up in 3D out of a blur, right after the intro.
export function FlipChars({ lines }: { lines: { text: string; className?: string }[] }) {
  const ready = useIntroDone();
  let n = 0;
  return (
    <h1
      className="font-display text-[2.6rem] leading-[0.95] font-extrabold tracking-tight uppercase [perspective:800px] sm:text-6xl lg:text-7xl"
      aria-label={lines.map((l) => l.text).join(" ")}
    >
      {lines.map((line) => (
        <span key={line.text} className={`block whitespace-nowrap ${line.className ?? ""}`} aria-hidden>
          {[...line.text].map((ch, i) => {
            const delay = 0.05 + n++ * 0.035;
            return (
              <motion.span
                key={i}
                className="inline-block origin-bottom"
                initial={{ opacity: 0, rotateX: -95, y: "40%", filter: "blur(10px)" }}
                animate={ready ? { opacity: 1, rotateX: 0, y: "0%", filter: "blur(0px)" } : undefined}
                transition={{ duration: 0.9, delay, ease }}
              >
                {ch}
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

// Section heading: the two lines slide toward each other as you scroll,
// and the outlined second line fills with orange from left to right.
export function KineticHeading({ top, bottom, index }: { top: string; bottom: string; index?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center 0.55"] });
  const topX = useTransform(scrollYProgress, [0, 1], ["6%", "0%"]);
  const bottomX = useTransform(scrollYProgress, [0, 1], ["14%", "0%"]);
  const fill = useTransform(scrollYProgress, [0.35, 1], ["0% 100%", "100% 100%"]);

  return (
    <h2 ref={ref} className="font-display text-[2.6rem] leading-[0.98] font-extrabold tracking-tight uppercase sm:text-6xl lg:text-7xl">
      {index && (
        <span aria-hidden className="mb-4 flex items-center gap-3 font-mono text-xs font-normal tracking-widest text-muted">
          <span className="text-accent">({index})</span>
          <span className="h-px w-10 bg-line" />
          {top.replace(/[^A-Za-z' ]/g, "").trim()} {bottom}
        </span>
      )}
      <motion.span className="block" style={reduce ? undefined : { x: topX }}>
        {top}
      </motion.span>
      <motion.span
        className="block w-fit bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent))] bg-clip-text bg-no-repeat text-transparent [-webkit-text-stroke:1.5px_#4d4d4d]"
        style={reduce ? { backgroundSize: "100% 100%" } : { x: bottomX, backgroundSize: fill }}
      >
        {bottom}
      </motion.span>
    </h2>
  );
}

const DIGITS = [..."01234567890123456789"];

// Number whose digits spin like a slot machine before landing, e.g. "10+".
export function RollingNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const ready = useIntroDone();
  const go = inView && ready;
  const [landed, setLanded] = useState(false);

  if (landed) return <span>{value}</span>;

  return (
    <span ref={ref} className="inline-flex">
      <span className="sr-only">{value}</span>
      {[...value].map((ch, i) =>
        /\d/.test(ch) ? (
          <span key={i} aria-hidden className="relative inline-block h-[1em] overflow-hidden leading-none">
            <motion.span
              className="flex flex-col"
              initial={{ y: "0%" }}
              animate={go ? { y: `-${((10 + Number(ch)) / DIGITS.length) * 100}%` } : undefined}
              transition={{ duration: 1.8 + i * 0.3, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => i === value.search(/\d(?!.*\d)/) && setLanded(true)}
            >
              {DIGITS.map((d, k) => (
                <span key={k} className="block h-[1em] leading-none">
                  {d}
                </span>
              ))}
            </motion.span>
          </span>
        ) : (
          <span key={i} aria-hidden className="leading-none">
            {ch}
          </span>
        ),
      )}
    </span>
  );
}
