import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { profile, stats } from "@/data/portfolio";

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .join("")
  .slice(0, 2);

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Open to work
          </p>

          <p className="mt-6 font-mono text-sm text-accent">{profile.role}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            Hi, I&apos;m {profile.name}.
            <br />
            <span className="text-muted">I build </span>
            <span className="text-accent">full-stack</span>
            <span className="text-muted"> web apps.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-6 flex items-center gap-2 font-mono text-sm text-muted">
            <FiMapPin className="text-accent" /> {profile.location}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume || "/#contact"}
              {...(profile.resume ? { download: "Talha-Bin-Saleh-Resume.pdf" } : {})}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-ink transition hover:brightness-110"
            >
              <FiDownload /> Download Resume
            </a>
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium transition hover:border-muted"
            >
              View my work
              <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-2">
            {[
              { href: profile.github, label: "GitHub", icon: FiGithub },
              { href: profile.linkedin, label: "LinkedIn", icon: FiLinkedin },
              { href: `mailto:${profile.email}`, label: "Email", icon: FiMail },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-line text-muted transition hover:border-accent/50 hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent/5 to-transparent blur-2xl" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-surface">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={`Photo of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 384px, 320px"
                className="object-cover"
              />
            ) : (
              <div className="grid size-full place-items-center bg-gradient-to-br from-surface-2 to-bg">
                <span className="text-7xl font-semibold tracking-tight text-accent">{initials}</span>
              </div>
            )}
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-line bg-surface/90 px-4 py-3 backdrop-blur">
            <p className="font-mono text-xs text-muted">Currently building with</p>
            <p className="text-sm font-medium">Next.js · TypeScript</p>
          </div>
        </div>
      </div>

      <dl className="relative mx-auto mt-16 grid max-w-6xl grid-cols-3 gap-4 px-4 sm:px-6">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-line pt-6">
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
            <dd className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
