import { FiArrowUpRight } from "react-icons/fi";
import { MdFlight, MdSportsEsports, MdSportsSoccer } from "react-icons/md";
import { about, profile } from "@/data/portfolio";
import BigHeading from "./BigHeading";

const hobbyIcons = { Sports: MdSportsSoccer, Travel: MdFlight, Gaming: MdSportsEsports } as const;

export default function About() {
  return (
    <section id="about">
      <BigHeading top="About" bottom="Me" />

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs tracking-widest text-accent uppercase">My programming journey</p>
          <div className="mt-4 space-y-4 leading-relaxed text-muted">
            {about.journey.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-xs tracking-widest text-accent uppercase">Work I enjoy</p>
          <div className="mt-4 space-y-4 leading-relaxed text-muted">
            {about.work.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <a
            href={profile.seoPortfolio}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-1 text-sm text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
          >
            Need SEO work? See my SEO portfolio <FiArrowUpRight />
          </a>
        </div>
      </div>

      <p className="mt-14 font-mono text-xs tracking-widest text-accent uppercase">Outside of code</p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        {about.hobbies.map((h) => {
          const Icon = hobbyIcons[h.name as keyof typeof hobbyIcons];
          return (
            <li key={h.name} className="rounded-3xl border border-line bg-surface p-6 transition hover:border-accent/50">
              <span className="grid size-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                {Icon && <Icon size={24} />}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{h.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{h.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
