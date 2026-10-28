import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { profile, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Open to work
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I&apos;m {profile.name.split(" ")[0]}.
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
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-ink transition hover:brightness-110"
          >
            View my work
            <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium transition hover:border-muted"
          >
            Get in touch
          </a>
          <div className="ml-1 flex items-center gap-1">
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
                className="grid size-11 place-items-center rounded-full text-muted transition hover:bg-surface hover:text-ink"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-line pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
              <dd className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
