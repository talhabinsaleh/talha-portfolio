import Link from "next/link";
import { FiArrowUpRight, FiLayers, FiDatabase } from "react-icons/fi";
import { profile, stats } from "@/data/portfolio";
import BigHeading from "./BigHeading";
import CountUp from "./motion/CountUp";
import { Reveal } from "./motion/Reveal";
import RotatingWords from "./motion/RotatingWords";

const bento = [
  {
    href: "/#skills",
    icon: FiLayers,
    text: "React, Next.js, TypeScript & Tailwind CSS",
    className: "bg-accent text-neutral-950",
  },
  {
    href: "/#projects",
    icon: FiDatabase,
    text: "BetterAuth, OAuth & MongoDB-backed apps",
    className: "bg-lime text-neutral-950",
  },
];

export default function Hero() {
  return (
    <section id="top" className="pt-10 lg:pt-0">
      <BigHeading as="h1" top="Full-Stack" bottom="Developer" />

      <Reveal delay={0.3} y={16}>
        <p className="mt-6 font-display text-2xl font-semibold sm:text-3xl">
          I build <RotatingWords words={["fast web apps", "auth flows", "pixel-perfect UIs", "full-stack projects"]} className="text-accent" />
        </p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>
      </Reveal>

      <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
        {stats.map((s) => (
          <div key={s.label}>
            <dd className="font-display text-5xl font-bold tracking-tight">
              <CountUp value={s.value} />
            </dd>
            <dt className="mt-1 max-w-28 text-xs leading-snug tracking-wider text-muted uppercase">{s.label}</dt>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {bento.map(({ href, icon: Icon, text, className }, i) => (
          <Reveal key={href} delay={0.5 + i * 0.12}>
          <Link
            href={href}
            className={`group relative flex min-h-48 flex-col justify-between overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1.5 hover:-rotate-1 ${className}`}
          >
            <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/40 transition-all duration-700 group-hover:left-[150%]" aria-hidden />
            <svg className="pointer-events-none absolute inset-0 size-full opacity-20" viewBox="0 0 300 200" preserveAspectRatio="none" aria-hidden>
              <path d="M0 150 L40 60 L80 140 L120 40 L160 130 L200 50 L240 150 L300 70" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <Icon size={26} className="relative" />
            <div className="relative flex items-end justify-between gap-4">
              <p className="font-display text-lg leading-tight font-bold uppercase">{text}</p>
              <span className="grid size-9 shrink-0 place-items-center rounded-lg border-2 border-current transition group-hover:rotate-45">
                <FiArrowUpRight />
              </span>
            </div>
          </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
