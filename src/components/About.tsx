import { FiArrowUpRight } from "react-icons/fi";
import { MdFlight, MdSportsEsports, MdSportsSoccer } from "react-icons/md";
import { about, profile } from "@/data/portfolio";
import BigHeading from "./BigHeading";
import Tile from "./motion/Tile";

const hobbyIcons = { Sports: MdSportsSoccer, Travel: MdFlight, Gaming: MdSportsEsports } as const;

export default function About() {
  return (
    <section id="about">
      <BigHeading top="About" bottom="Me" index="01" />

      <div className="mt-10 grid grid-cols-6 gap-3 lg:grid-cols-12">
        <Tile className="col-span-6 p-6 sm:p-8 lg:col-span-7">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">My programming journey</p>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/85">
            {about.journey.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Tile>

        <Tile delay={0.08} className="col-span-6 flex flex-col p-6 sm:p-8 lg:col-span-5">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">Work I enjoy</p>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/85">
            {about.work.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <a
            href={profile.seoPortfolio}
            target="_blank"
            rel="noreferrer"
            className="group/link mt-auto flex items-center justify-between gap-3 rounded-2xl border border-line bg-bg/50 p-4 pt-4 text-sm transition-colors hover:border-accent"
          >
            <span>
              <span className="block text-muted">Need SEO work too?</span>
              <span className="font-medium">See my SEO portfolio</span>
            </span>
            <FiArrowUpRight className="size-5 transition-transform group-hover/link:rotate-45" />
          </a>
        </Tile>

        {about.hobbies.map((h, i) => {
          const Icon = hobbyIcons[h.name as keyof typeof hobbyIcons];
          return (
            <Tile key={h.name} delay={0.1 + i * 0.06} className="col-span-6 p-6 sm:col-span-2 lg:col-span-4">
              <div className="flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-accent/10 text-accent transition duration-500 group-hover/tile:rotate-[-12deg] group-hover/tile:scale-110 group-hover/tile:bg-accent group-hover/tile:text-accent-ink">
                  {Icon && <Icon size={28} />}
                </span>
                <span className="font-mono text-xs text-faint">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{h.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{h.text}</p>
            </Tile>
          );
        })}
      </div>
    </section>
  );
}
