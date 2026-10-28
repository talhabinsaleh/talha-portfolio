"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projects, type Project } from "@/data/portfolio";
import BigHeading from "./BigHeading";

function StackCard({ p, i, progress }: { p: Project; i: number; progress: MotionValue<number> }) {
  const n = projects.length;
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - 1 - i) * 0.05]);
  const dim = useTransform(progress, [i / n, 1], [0, (n - 1 - i) * 0.12]);

  return (
    <div className="sticky mb-[10vh] last:mb-0" style={{ top: `calc(5.5rem + ${i * 1.5}rem)` }}>
      <motion.article
        style={{ scale }}
        className="group/tile relative grid origin-top overflow-hidden rounded-[28px] border border-line bg-surface shadow-2xl shadow-black/60 md:grid-cols-[1.2fr_1fr]"
      >
        {/* Screenshot panel: on hover a colour block fills up behind it and the image zooms. */}
        <Link href={`/projects/${p.slug}`} className="relative block overflow-hidden p-3">
          <span
            aria-hidden
            className={`absolute inset-3 rounded-[20px] ${i % 2 ? "bg-lime" : "bg-accent"} origin-bottom scale-y-[0.35] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/tile:scale-y-100`}
          />
          <span className="relative block aspect-[1200/630] h-full overflow-hidden rounded-[20px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/tile:scale-[0.94] md:aspect-auto md:min-h-72">
            <Image
              src={p.image}
              alt={`${p.title} screenshot`}
              fill
              sizes="(min-width: 768px) 700px, 100vw"
              className="object-cover object-left-top transition-transform duration-700 group-hover/tile:scale-110"
            />
          </span>
        </Link>

        <div className="flex flex-col px-6 pt-3 pb-6 md:py-7 md:pl-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-xs text-muted">
                {p.date} · {p.tagline}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-4xl">{p.title}</h3>
            </div>
            <span className="font-display text-sm font-bold text-faint">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {p.stack.slice(0, 4).map((s) => (
              <li key={s} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center gap-2 pt-6">
            <Link
              href={`/projects/${p.slug}`}
              className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent"
            >
              View Details <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
            </Link>
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.title} live site`}
              className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
            >
              <FiArrowUpRight />
            </a>
          </div>
        </div>

        {/* Darkens the card as the next one stacks over it. */}
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: dim }} />
      </motion.article>
    </div>
  );
}

// Cards pin one after another and stack, the ones underneath shrinking and dimming.
export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="projects">
      <BigHeading top="Recent" bottom="Projects" index="05" />
      <div ref={ref} className="relative mt-10">
        {projects.map((p, i) => (
          <StackCard key={p.slug} p={p} i={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
