"use client";

import {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

const IntroContext = createContext(false);

// True once the intro loader has finished, so hero animations can start right after it.
export function useIntroDone() {
  return useContext(IntroContext);
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false);
  const finish = useCallback(() => setDone(true), []);
  return (
    <MotionConfig reducedMotion="user">
      <IntroContext.Provider value={done}>
        <Preloader onDone={finish} />
        {children}
      </IntroContext.Provider>
    </MotionConfig>
  );
}

// Counts 000 → 100, then wipes upward like a curtain. Plays once per browser session.
function Preloader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const count = useMotionValue(0);
  const label = useTransform(count, (v) => String(Math.round(v)).padStart(3, "0"));
  const bar = useTransform(count, [0, 100], ["0%", "100%"]);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("intro-seen") === "1";
    } catch {}
    const duration = seen ? 0 : 1.5;
    const controls = animate(count, 100, { duration, ease: [0.65, 0, 0.35, 1] });
    const timer = setTimeout(
      () => {
        setVisible(false);
        onDone();
        try {
          sessionStorage.setItem("intro-seen", "1");
        } catch {}
      },
      seen ? 0 : 1750,
    );
    return () => {
      controls.stop();
      clearTimeout(timer);
    };
  }, [count, onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col justify-between bg-accent p-5 text-neutral-950 sm:p-10"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex justify-between font-display text-sm font-semibold uppercase sm:text-base">
            <span>Talha Bin Saleh</span>
            <span>Portfolio ©2026</span>
          </div>
          <div>
            <div className="flex items-end justify-between gap-4">
              <p className="max-w-48 font-display text-sm font-semibold uppercase sm:text-base">
                Full-stack developer — loading the good stuff
              </p>
              <motion.span className="font-display text-[26vw] leading-[0.8] font-extrabold tracking-tighter sm:text-[14rem]">
                {label}
              </motion.span>
            </div>
            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-neutral-950/15">
              <motion.div className="h-full bg-neutral-950" style={{ width: bar }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Thin bar at the top that fills as the page is scrolled.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-accent to-lime"
      style={{ scaleX }}
    />
  );
}

// Soft orange glow that follows the mouse on desktop.
export function Spotlight() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 150, damping: 25 });
  const sy = useSpring(y, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 hidden size-[600px] rounded-full bg-[radial-gradient(circle,rgb(255_106_43/0.10),transparent_60%)] lg:block"
      style={{ x: sx, y: sy }}
    />
  );
}

// Fine film grain over the whole page.
export function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[70] opacity-[0.045] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}
