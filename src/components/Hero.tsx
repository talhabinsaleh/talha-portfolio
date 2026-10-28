import Image from "next/image";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiReact, SiTailwindcss } from "react-icons/si";
import { learning, profile, skills, stats } from "@/data/portfolio";
import ResumeViewer from "./ResumeViewer";
import { Magnetic } from "./motion/Interactive";
import LocalTime from "./motion/LocalTime";
import { FlipChars, RollingNumber, ScrambleWords } from "./motion/Text";
import Tile from "./motion/Tile";

const socials = [
  { href: profile.github, label: "GitHub", icon: FiGithub },
  { href: profile.linkedin, label: "LinkedIn", icon: FiLinkedin },
  { href: `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`, label: "WhatsApp", icon: FaWhatsapp },
  { href: `mailto:${profile.email}`, label: "Email", icon: FiMail },
];

const tech = skills.flatMap((g) => g.items).filter((s, i, all) => all.findIndex((o) => o.name === s.name) === i);

export default function Hero() {
  return (
    <section id="top" className="grid grid-cols-6 gap-3 lg:grid-cols-12">
      {/* Intro */}
      <Tile intro className="col-span-6 flex flex-col p-6 sm:p-9 lg:col-span-7 lg:row-span-2">
        <div className="dots pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
        <div className="relative flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/60 px-3 py-1 text-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-lime" />
            </span>
            Available for work
          </span>
          <span className="font-mono text-xs text-muted">{profile.name}</span>
        </div>

        <div className="relative mt-10 lg:mt-auto">
          <FlipChars lines={[{ text: "Full-Stack" }, { text: "Developer", className: "text-accent" }]} />
          <p className="mt-5 font-display text-xl font-semibold sm:text-2xl">
            I build{" "}
            <ScrambleWords
              words={["fast web apps", "auth flows", "pixel-perfect UIs", "full-stack projects"]}
              className="text-muted"
            />
          </p>
          <p className="mt-3 max-w-lg leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Magnetic strength={0.2}>
              <ResumeViewer className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition-colors hover:bg-lime" />
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/60 px-5 py-3 text-sm font-semibold transition-colors hover:border-ink"
              >
                <FiDownload /> Download Resume
              </a>
            </Magnetic>
            <ul className="flex items-center gap-1 sm:ml-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <Magnetic strength={0.45}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={label}
                      className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-accent"
                    >
                      <Icon size={18} />
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Tile>

      {/* Photo */}
      <Tile
        intro
        delay={0.1}
        className="col-span-6 aspect-[4/5] sm:aspect-[16/11] lg:col-span-5 lg:row-span-2 lg:aspect-auto lg:min-h-[560px]"
      >
        <Image
          src={profile.photo}
          alt={`Photo of ${profile.name}`}
          fill
          priority
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover object-[50%_20%] transition-transform duration-700 group-hover/tile:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
          <div>
            <p className="font-display text-2xl font-bold">{profile.name}</p>
            <p className="text-sm text-white/70">{profile.role}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur">
            <FiMapPin /> Dhaka
          </span>
        </div>
      </Tile>

      {/* Stats */}
      {stats.map((s, i) => (
        <Tile
          key={s.label}
          intro
          delay={0.2 + i * 0.06}
          className={`col-span-2 flex flex-col justify-between p-4 sm:p-6 lg:col-span-2 ${i === 0 ? "border-accent bg-accent text-accent-ink" : ""}`}
        >
          <p className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <RollingNumber value={s.value} />
          </p>
          <p
            className={`mt-6 text-[11px] leading-snug tracking-wider uppercase sm:text-xs ${i === 0 ? "text-accent-ink/70" : "text-muted"}`}
          >
            {s.label}
          </p>
        </Tile>
      ))}

      {/* Local time */}
      <Tile intro delay={0.38} className="col-span-3 flex flex-col justify-between p-5 sm:p-6">
        <p className="font-mono text-[11px] tracking-wider text-muted uppercase">Local time · Dhaka</p>
        <p className="mt-6 font-display text-xl font-bold sm:text-2xl">
          <LocalTime />
        </p>
        <p className="text-xs text-muted">GMT+6 · replies within a day</p>
      </Tile>

      {/* Current stack */}
      <Tile intro delay={0.44} className="col-span-3 flex flex-col justify-between border-lime bg-lime p-5 text-accent-ink sm:p-6">
        <p className="font-mono text-[11px] tracking-wider uppercase opacity-70">Building with</p>
        <div className="mt-4 flex gap-2 text-2xl">
          <SiNextdotjs />
          <SiReact />
          <SiTypescript />
          <SiTailwindcss />
        </div>
        <p className="mt-4 text-xs font-medium">Learning: {learning.slice(0, 3).join(", ")}</p>
      </Tile>

      {/* Tech strip */}
      <Tile intro delay={0.5} className="col-span-6 py-4 lg:col-span-12">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="animate-marquee flex w-max gap-3 hover:[animation-play-state:paused]">
            {[...tech, ...tech].map(({ name, icon: Icon, color }, i) => (
              <li key={i} className="flex items-center gap-2 rounded-full border border-line bg-bg/50 px-4 py-2 whitespace-nowrap">
                <Icon style={{ color }} size={16} />
                <span className="text-sm text-muted">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Tile>
    </section>
  );
}
